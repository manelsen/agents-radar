# Resumo diário do ecossistema de agentes de IA 2026-04-29

> Issues: 1 | PRs: 3 | Projetos cobertos: 7 | Gerado em: 2026-04-28 21:03 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto: NullClaw — 2026-04-29

## 1. Panorama do Dia

O projeto NullClaw demonstra **atividade moderada** no período analisado, com foco em estabilidade e documentação. Um PR crítico de regressão foi fechado (#872) mas reaberto como #873 para refinamento adicional, sinalizando revisões em andamento. A atividade totalizou 4 itens (1 issue + 3 PRs), sem lançamentos oficiais. O repositório mantém movimentação contínua de correções, particularmente relacionadas à migração Zig 0.16, enquanto Issues de documentação aguardam atenção.

---

## 2. Lançamentos

**Nenhuma release oficial registrada nas últimas 24h.**

O projeto não publicou novas versões no período. Releases anteriores continuam em produção.

---

## 3. Progresso do Projeto

### PR Closed

| # | Título | Autor | Status | Relevância |
|---|--------|-------|--------|------------|
| [#872](https://github.com/nullclaw/nullclaw/pull/872) | fix: Zig 0.16 Mattermost empty-body POST and gateway accept-loop CPU spin | vernonstinebaker | ❌ Closed | Crítica |

> **Causa**: O PR foi fechado sem merge, imediatamente seguido pelo PR #873 em draft. Isso sugere que o autor identificou necessidade de ajustes adicionais antes de um merge definitivo.

---

## 4. Temas Quentes da Comunidade

### Atividade em PRs

| # | Título | Autor | Status | Atualizado |
|---|--------|-------|--------|------------|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | feat(cron): cron subagent, run history, JSON output, security hardening | yanggf8 | 🟡 OPEN | 2026-04-28 |
| [#873](https://github.com/nullclaw/nullclaw/pull/873) | fix: Zig 0.16 Mattermost empty-body POST and gateway accept-loop CPU spin | vernonstinebaker | 🟡 DRAFT | 2026-04-28 |

**Análise:**

- **#783 (Cron Subagent)**: Feature de maior escopo em discussão, introduzindo:
  - Engine de scheduler com histórico (`cron_runs`)
  - Worker de filas (`cron_run_queue`)
  - Suporte a múltiplos job types (skill/agent/shell)
  - Timezone offsets por job
  - Output JSON para CLI

  Este PR está em revisão há ~22 dias (criado em 07/04), indicando complexidade ou necessidade de ajustes alinhamento com maintainers.

- **#873**: Reabertura do #872 como draft, sinalizando trabalho ativo em regressão Zig 0.16.

### Atividade em Issues

| # | Título | Autor | Status |
|---|--------|-------|--------|
| [#874](https://github.com/nullclaw/nullclaw/issues/874) | Docs: missing documentation for security policy "default_allowed_commands" | Mental-Vortex | 🟡 OPEN |

---

## 5. Bugs e Estabilidade

### Regressão Crítica — Zig 0.16

| Severidade | Impacto | Status | Referência |
|------------|---------|--------|------------|
| **🔴 Crítica** | Affecta agentes Mattermost em produção | Em correção (#873) | [PR #873](https://github.com/nullclaw/nullclaw/pull/873) |

**Problemas identificados:**
1. **100% CPU utilization** no gateway thread (busy-spin em EAGAIN) — todas plataformas em modo daemon
2. **Falha silenciosa** em envio de mensagens Mattermost

> [!CAUTION]
> Ambos os problemas afetam **todos os agentes conectados ao Mattermost em produção** desde a migração para Zig 0.16.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature em Desenvolvimento

**PR #783 — Cron Subagent Engine**

Introduz capacidades significativas:
- Agendamento DB-backed com histórico persistente (`cron_runs`)
- Worker assíncrono (`cron_run_queue`) com operações atômicas
- Job types: skill, agent, shell
- Timezone offsets por job
- Operador alerts
- Output JSON para CLI (`cron list --json`, `cron schedule --json`)
- Security hardening integrado

**Sinal de Roadmap**: A ausência de releases recentes e o foco em correções de estabilidade sugere que features maiores (como o cron subagent) estão em pipeline para próxima versão estável.

### Issue Pendente

| # | Título | Demanda |
|---|--------|---------|
| [#874](https://github.com/nullclaw/nullclaw/issues/874) | Docs: missing documentation for security policy "default_allowed_commands" | Documentação de segurança |

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

1. **Regressão Zig 0.16**: Usuários em produção com agentes Mattermost enfrentam CPU spikes e falhas silenciosas. Impacto direto em ambientes de produção.

2. **Documentação incompleta**: Falta de documentação para políticas de segurança (`default_allowed_commands`) gera fricção para novos usuários/administradores.

### Cenários de Uso em Evidência

- **Agentes Mattermost**: O projeto tem presença significativa em integrações Mattermost, e a regressão atual afeta diretamente esse uso.
- **Automação via Cron**: Feature #783 indica demanda por scheduling robusto de tarefas, sugerindo uso em pipelines de automação e CI/CD.

---

## 8. Backlog que Merece Atenção

| # | Tipo | Título | Idade | Prioridade |
|---|------|--------|-------|------------|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | PR | feat(cron): cron subagent, run history, JSON output, security hardening | ~22 dias | 🟡 Alta |
| [#874](https://github.com/nullclaw/nullclaw/issues/874) | Issue | Docs: missing documentation for security policy "default_allowed_commands" | 1 dia | 🟡 Média |

### PR #783 — Revisão Estagnada
- Criado: 2026-04-07
- Última atualização: 2026-04-28
- Status: Aberto sem merge há 22 dias
- **Risco**: Feature importante pode estar aguardando revisão. Maintainers devem priorizar feedback.

---

## Métricas Resumidas (24h)

| Categoria | Abertos | Fechados/Merged | Total |
|-----------|---------|-----------------|-------|
| Issues | 1 | 0 | 1 |
| PRs | 2 | 1 | 3 |
| Releases | — | 0 | 0 |

**Saúde Geral**: 🟡 Estável com incidentes críticos em correção

---

*Relatório gerado em 2026-04-29 | Fonte: github.com/nullclaw/nullclaw*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo: Ecossistema de Agentes de IA Open Source

**Período de análise:** 2026-04-29
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **saúde moderada com extremos distintos de atividade**. Enquanto NullClaw apresenta volume baixo de operações (4 itens/24h), projetos como Hermes Agent e ZeroClaw registram mais de 100 eventos por dia, evidenciando comunidades maduras e fluxos de desenvolvimento intensos. A ausência quase universal de releases formais nas últimas 24h sugere que a maioria dos projetos encontra-se em ciclos de estabilização antes de próximos milestones, com exceção de CoPaw, que publicou a versão beta v1.1.5 com features de estabilidade e protocolo ACP. Os temas técnicos dominantes giram em torno de regressões de performance (especialmente memória e CPU), integrações multi-canal (Mattermost, Discord, Telegram, QQ), e segurança — com múltiplos PRs P0 pendentes de merge em Hermes Agent há mais de 15 dias.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas (24h) | PRs Ativos (24h) | Releases (24h) | Bugs Críticos | Saúde Geral |
|---------|---------------------|------------------|----------------|---------------|-------------|
| **NullClaw** | 1 | 3 | 0 | 1 (🔴 Crítica) | 🟡 Estável com incidentes |
| **NanoBot** | 13 | 35 | 0 | 2 (🔴 Alta) | 🟢 Boa saúde operacional |
| **Hermes Agent** | 50 | 50 | 0 | 5 (P1) + 4 (P0 seg.) | 🟡 Instável — 5 PRs de segurança pendentes |
| **PicoClaw** | 17 | 16 | 0 | 3 (🔴) | 🟡 Moderada |
| **IronClaw** | 30 | 45 | 0 | 4 (falhas CI) + 1 (P1) | 🟡 Alta atividade com bloqueadores |
| **CoPaw** | 43 | 31 | 1 (beta) | 4 (🔴) | 🟢 Melhora — release recente |
| **ZeroClaw** | 19 | 50 | 0 | 3 (S1) + 1 (segurança) | 🟡 Intenso desenvolvimento |

**Observação:** Hermes Agent e ZeroClaw lideram em volume absoluto de atividade, enquanto NullClaw apresenta o menor throughput — possivelmente reflexo de sua arquitetura Zig/maturidade diferenciada.

---

## 3. Posicionamento do Projeto Principal

Considerando o volume de atividade, profundidade técnica e sinais de roadmap, **Hermes Agent e ZeroClaw** emergem como os projetos de maior destaque no ecossistema, cada um com posicionamentos distintos:

### Hermes Agent (NousResearch)
- **Vantagens técnicas:** Ecossistema mais maduro com 100+ eventos/dia, sistema de TUI integrado, profiler com span tracing nativo, e pipeline robusto de session management. Suporta múltiplos providers (Claude, Kimi) com diferenciação clara.
- **Diferenças:** Foco intenso em segurança (5 PRs P0 pendentes) e estabilidade de sessão — indica público-alvo de produção enterprise.
- **Tamanho da comunidade:** ~23 contributors visíveis com alta densidade de issues e PRs.

### ZeroClaw
- **Vantagens técnicas:** Adoção de RFC formal para microkernel transition (#5574), suporte a ACP (Agent Communication Protocol) com back-channel, e estratégia clara de internacionalização (6 idiomas).
- **Diferenças:** Arquitetura intencional documentada via RFCs, com processo de governança madura (votação por Core Team).
- **Tamanho da comunidade:** PR volume massivo (50/24h) sugere equipe de desenvolvimento ampliada.

### NullClaw como Alternativa de Nicho
- **Posicionamento:** Escrito em Zig 0.16, arquitetura minimalista com foco em performance e baixo footprint.
- **Diferença:** Único projeto usando Zig como linguagem primary — caso de uso para desenvolvedores que priorizam binários estáticos e performance de memória.

---

## 4. Focos Técnicos Compartilhados

A análise transversal revela padrões técnicos que transcendem projetos individuais:

| Foco Técnico | Evidência | Impacto |
|--------------|-----------|---------|
| **Gerenciamento de Memória/Contexto** | NanoBot (#3410 — RAM 600MB vs 200MB), Hermes (#14521 — context compaction re-injects), CoPaw (#3895 — perda de contexto), ZeroClaw (#5849 — Dream Mode) | Custo operacional elevado e degradação de qualidade em sessões longas |
| **Integração Multi-Canal** | PicoClaw (MQTT, Mattermost, QQ), NanoBot (QQ via Napcat), Hermes (Telegram, Slack, Feishu), CoPaw (WeChat, QQ), ZeroClaw (WeChat, Matrix, Discord) | Fragmentação de código e inconsistências de comportamento entre canais |
| **Segurança e Sandbox** | Hermes (4 PRs P0 — sandbox escape, SSRF, DNS rebinding), PicoClaw (#2693 — sandbox bypass via `find /`), IronClaw (#3012 — trust-class policy engine mandatory) | Vulnerabilidades críticas pendentes de correção |
| **Windows/Cross-Platform** | NanoBot (WinError 193, WinError 123, path com colon), PicoClaw (serial_windows.go), IronClaw (download x86_64) | Suporte instável prejudica adoção corporativa |
| **Retry/Resiliência de LLM** | PicoClaw (#629 — HTTP 500 sem retry, 11 comentários), Hermes (#17071 — cron job desperdiça 2M tokens) | Falhas silenciosas em produção com impacto financeiro direto |
| **Observabilidade** | NanoBot (#3500 — profiler + span tracing), Hermes (profiler integrado), ZeroClaw (#6009 — OTel enrichment) | Crescimento da demanda por debuggability em produção |

---

## 5. Análise de Diferenciação

| Projeto | Foco Primário | Público-Alvo | Arquitetura | Diferenciador Principal |
|---------|---------------|--------------|-------------|-------------------------|
| **NullClaw** | Estabilidade e performance | DevOps,部署 embarcado | Zig (sistema) | Binários estáticos, footprint mínimo |
| **NanoBot** | Multi-canal flexível | Desenvolvedores individuais | Python (modular) | Suporte extensivo a canais asiáticos (QQ, WeChat) |
| **Hermes Agent** | Produtividade developer | Desenvolvedores, equipes técnicas | Python (TUI + CLI) | Profiler nativo, session management robusto |
| **PicoClaw** | Hardware + IoT | Automação industrial, makers | Go | Serial cross-platform, MQTT, hardware control |
| **IronClaw** | Enterprise multi-tenant | Corporações, nearai | Rust (Reborn arch) | Arquitetura Reborn com substrates, policy engine |
| **CoPaw** | Interface visual acessível | Usuários finais, pesquisadores | React/Node | Console web, ACP protocol, agent communication |
| **ZeroClaw** | Modularidade intencional | Operadores avançados | Python (?) | RFC-driven architecture, microkernel, i18n |

**Síntese:** O ecossistema fragmenta-se naturalmente entre projetos focados em **performance de sistema** (NullClaw, PicoClaw), **experiência de desenvolvedor** (Hermes, IronClaw), **acessibilidade** (CoPaw), e **extensibilidade de canais** (NanoBot, ZeroClaw). Não há clear winner — a escolha depende do caso de uso.

---

## 6. Tração e Maturidade da Comunidade

### Projetos em Iteração Rápida (High Velocity)

| Projeto | Sinais de Velocidade | Implicação |
|---------|---------------------|------------|
| **ZeroClaw** | 50 PRs/24h, RFC aceito (#5574), múltiplos canais sendo adicionados | Fase de crescimento acelerado — risco de dívida técnica se reviews não acompanharem |
| **Hermes Agent** | 100 eventos/24h, 5 PRs P0 de segurança pendentes | Volume alto, mas back longo de PRs pendentes indica gargalo de review |
| **IronClaw** | 45 PRs/24h, Reborn substrates mergeados (auth, filesystem) | Migração arquitetural complexa em andamento — instabilidade temporária esperada |

### Projetos Consolidando Qualidade

| Projeto | Sinais de Consolidação | Implicação |
|---------|------------------------|------------|
| **CoPaw** | Release beta v1.1.5 com features de estabilidade | Transição de feature velocity para reliability |
| **NanoBot** | 10/13 issues fechadas em 24h, PRs merged com alta taxa | Foco em estabilidade pré-release |
| **NullClaw** | Baixo volume, foco em bugfix (#872→#873) | Projeto menor em modo de manutenção |

### Sinais de Alerta de Maturidade

- **Hermes Agent:** 5 PRs de segurança P0 abertos há ~17 dias sem merge — risco acumulativo
- **NullClaw:** PR #783 (cron subagent) estagnado há 22 dias — feature importante pode estar sendo negligenciada
- **IronClaw:** 4 falhas de live canary em `private-oauth` no mesmo commit — possível regressão bloqueando produção

---

## 7. Sinais de Tendência

### Tendências de Mercado Extraídas do Feedback Comunitário

1. **Demanda por Inferência Local**
   - PicoClaw: Intel OpenVINO (#2703), Exa Search provider
   - NanoBot: llama.cpp como provider solicitado (#3920)
   - ZeroClaw: suporte a llama-server (#6180)
   - **Implicação:** Privacidade e custo continuam sendo drivers; edge deployment ganhando tração

2. **Padronização de Protocolos entre Agentes**
   - CoPaw: ACP (Agent Communication Protocol) lançado
   - ZeroClaw: ACP v1 com tool-call permission e back-channel (#6167)
   - **Implicação:** Ecossistema converge para protocolos interoperáveis — possibilidade de network effects

3. **Observabilidade como Requisito First-Class**
   - NanoBot, Hermes Agent, ZeroClaw: profiler/tracing integrados
   - **Implicação:** Produção deployment exige debuggability nativa

4. **Multi-Modalidade em Roadmap**
   - Hermes: Multimodal list messages crash (#7153) — feature aguardada
   - NanoBot: Multi-modal support (#223) stale há meses
   - CoPaw: Whisper transcription substituindo Web Speech API (#3574)
   - **Implicação:** Suporte a imagens, voz e vídeo é expectativa crescente

5. **Enterprise Readiness**
   - IronClaw: multi-tenant, policy engine, trust-class
   - PicoClaw: Agent Shield, multi-user support (#2313)
   - Hermes: sandbox hardening contínuo
   - **Implicação:** Startups e corporações buscam deployment seguro em ambientes controlados

6. **Expansão Geográfica**
   - ZeroClaw: i18n (fr, ja, es, zh-CN)
   - NanoBot: Kimi/Moonshot AI (China)
   - CoPaw: Kimi Code API (#3437)
   - **Implicação:** Mercados chinês e europeu são prioridade de expansão

---

## Recomendações para Decisores

| Stakeholder | Recomendação |
|-------------|--------------|
| **Desenvolvedores** | Avaliar CoPaw para prototipagem rápida; Hermes Agent para produção com equipe dedicada |
| **Empresas** | Considerar IronClaw para multi-tenant enterprise; monitorar PRs de segurança em Hermes |
| **DevOps/Infra** | NullClaw (Zig) para edge/embarcado; PicoClaw para IoT/hardware |
| **Comunidade** | Priorizar reviews em Hermes Agent (P0), NullClaw (#783), e IronClaw (CI failures) |

---

*Relatório gerado em 2026-04-29 | Dados fonte: GitHub Activity APIs dos repositórios listados*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Report — 2026-04-29

## 1. Panorama do dia

O projeto NanoBot apresenta **atividade intensa** na data de hoje, com 13 issues e 35 PRs atualizados nas últimas 24h. A maioria esmagadora das issues foram fechadas (10 de 13), indicando forte ritmo de resolução de problemas. Doze PRs foram merged ou fechados, demonstrando continuidade no fluxo de integração de novas funcionalidades. Não houve releases publicadas, sugerindo que o time可能在正准备下一版本。Nenhuma issue crítica aberta permanece — o projeto demonstra boa saúde operacional com foco em estabilidade e usabilidade.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O último release visível permanece v0.1.5.post2, cujo problema de consumo elevado de RAM (#3410) foi identificado e está em processo de correção através de PRs relacionados a memória e histórico.

---

## 3. Progresso do projeto

Os seguintes PRs foram **merged ou fechados** hoje, representando avanços concretos:

| PR | Título | Impacto |
|----|--------|---------|
| [#2740](https://github.com/HKUDS/nanobot/pull/2740) | feat(cli): add --config option to channels login and status | Flexibiliza gestão de múltiplas configurações de canais via CLI |
| [#3502](https://github.com/HKUDS/nanobot/pull/3502) | fix(feishu): Fix done emoji addition | Corrige UX das reações de status em Feishu |
| [#3505](https://github.com/HKUDS/nanobot/pull/3505) | feat(web_search): add olostep provider | Adiciona provedor alternativo de busca web |
| [#3405](https://github.com/HKUDS/nanobot/pull/3405) | feat(web_search): add olostep provider (backport) | Backport do Olostep para main |
| [#3500](https://github.com/HKUDS/nanobot/pull/3500) | feat(profiler): add module-level profiler | Sistema de tracing/profiling integrado |
| [#3491](https://github.com/HKUDS/nanobot/pull/3491) | feat(providers): extra_body config | Suporte a parâmetros customizados para endpoints OpenAI |
| [#3382](https://github.com/HKUDS/nanobot/pull/3382) | feat(web-tools): Improve to allow bypassing Cloudflare captchas | Melhora compatibilidade com sites protegidos |

**Destaque:** O PR #3500 introduz **profiler com span tracing** integrado ao fluxo nightly do agente, enabling observabilidade avançada. Já #3491 resolve uma lacuna importante ao permitir parâmetros `extra_body` para servidores locais (vLLM, LM Studio, Ollama).

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento (comentários/reações)

| Issue | Título | Comentários | 👍 | Status |
|-------|--------|-------------|-----|--------|
| [#217](https://github.com/HKUDS/nanobot/issues/217) | Does it support kimi? | 6 | 0 | Closed |
| [#490](https://github.com/HKUDS/nanobot/issues/490) | 是否考虑对记忆系统进行优化？ | 5 | 0 | Closed |
| [#3473](https://github.com/HKUDS/nanobot/issues/3473) | WebSocket connection failed (remote host) | 3 | 0 | Closed |
| [#223](https://github.com/HKUDS/nanobot/issues/223) | Multi-modal Support: Images, Voice, Video | 0 | 1 | Closed (stale) |

### Análise dos temas

**Integração de modelos:** Issue #217 demonstra interesse da comunidade em expandir suporte para o modelo Kimi (Moonshot AI), com usuário oferecendo contribuição ativa. Este é um sinal claro de demanda por pluralidade de provedores.

**Sistema de memória:** Issue #490 (chinês) questiona sobre otimização do sistema de memória, alinhando-se com PRs em desenvolvimento (#3481 - history scoped por sessão, #3508 - atomic write para history.jsonl).

**Stale item relevante:** Issue #223 sobre suporte multi-modal permanece como top item no roadmap oficial, marcando expectativa de longo prazo da comunidade.

---

## 5. Bugs e estabilidade

### Bugs reportados hoje (10 fechadas, 3 abertas)

#### 🔴 Alta Severidade

| Bug | Descrição | Issue |
|-----|-----------|-------|
| **#3410** - RAM consumption | v0.1.5.post2 apresenta ~600MB vs ~200MB em v0.1.4. Suspeita liée au "dream feature" | [Link](https://github.com/HKUDS/nanobot/issues/3410) |
| **#3494** - history.jsonl in context | Tokens anormais (162k/65k budget) causados por history.jsonl sendo carregado no contexto | [Link](https://github.com/HKUDS/nanobot/issues/3494) |

#### 🟡 Média Severidade

| Bug | Descrição | Issue |
|-----|-----------|-------|
| **#3473** - WebSocket remote access | Falha ao acessar WebUI via 0.0.0.0 em servidor remoto | [Link](https://github.com/HKUDS/nanobot/issues/3473) |
| **#3324** - WinError 193 (Windows) | chrome-devtools-mcp não conecta em Windows (WinError 193: %1 não é Win32 válido) | [Link](https://github.com/HKUDS/nanobot/issues/3324) |
| **#3506** - Matrix Windows path | OSError [WinError 123] "nome incorreto" devido a dois-pontos em user_id no Matrix channel | [Link](https://github.com/HKUDS/nanobot/issues/3506) |
| **#3328** - deepseek error | "failed to deserialize" após upgrade para 0.1.5.post1 via Telegram | [Link](https://github.com/HKUDS/nanobot/issues/3328) |
| **#3488** - Telegram attachments | Documentos enviados como application/octet-stream ao invés do MIME type correto | [Link](https://github.com/HKUDS/nanobot/issues/3488) |

#### 🟢 Baixa Severidade / Corrigido

| Bug | Descrição | Issue |
|-----|-----------|-------|
| **#3504** - restrict_to_workspace | Análise estática de paths não lida com variáveis de ambiente, symlinks ou obfuscação | [Link](https://github.com/HKUDS/nanobot/issues/3504) |

**PRs de correção em aberto:**
- [#3510](https://github.com/HKUDS/nanobot/pull/3510) - Sanitiza Matrix user_id para Windows-safe filenames
- [#3508](https://github.com/HKUDS/nanobot/pull/3508) - Atomic write para history.jsonl

---

## 6. Pedidos de features e sinais de roadmap

### Novas features solicitadas (Issues em aberto)

| Feature | Descrição | Demanda |
|---------|-----------|---------|
| [#3512](https://github.com/HKUDS/nanobot/issues/3512) | **SwarmScore — Trust Rating for AI Agents** | Sistema de reputação portável baseado em histórico de execução |
| [#3511](https://github.com/HKUDS/nanobot/issues/3511) | **sender_id não passado ao LLM** | Identificação de usuários em canais group Discord |

### PRs de novas features em revisão

| PR | Feature | Status |
|----|---------|--------|
| [#3513](https://github.com/HKUDS/nanobot/pull/3513) | Unificar provedores de transcrição + Whisper local | OPEN |
| [#3509](https://github.com/HKUDS/nanobot/pull/3509) | Adicionar canal Napcat (QQ) | OPEN |
| [#3507](https://github.com/HKUDS/nanobot/pull/3507) | Config de geração por provider (maxTokens, temperature, reasoningEffort) | OPEN |
| [#3503](https://github.com/HKUDS/nanobot/pull/3503) | Adicionar provedor ZenMux | OPEN |
| [#3481](https://github.com/HKUDS/nanobot/pull/3481) | Histórico scoped por sessão (vs global) | OPEN |
| [#3487](https://github.com/HKUDS/nanobot/pull/3487) | Controles de progress por canal | OPEN |
| [#3144](https://github.com/HKUDS/nanobot/pull/3144) | Integração AgentHiFive (MCP-backed) | OPEN |

### Sinais de roadmap

1. **Expansão de canais:** QQ via Napcat demonstra interesse em diversificar plataformas suportadas
2. **Provider agnosticism:** Unificação de transcription + per-provider config sugere maturidade do sistema de providers
3. **Observabilidade:** Profiler + span tracing (#3500) indica foco em debuggability e operações em produção
4. **Segurança:** SwarmScore (#3512) pode indicar direção futura para avaliação de confiança de agentes

---

## 7. Resumo de feedback dos usuários

### Dores expressas

| Categoria | Descrição | Impacto |
|-----------|-----------|---------|
| **Recursos Windows** | Múltiplos bugs específicos de Windows (WinError 193, WinError 123, colon in path) | Suporte cross-platform ainda instável |
| **Memória/RAM** | Regressão de memória em v0.1.5.post2 afeta experiência em deployment | Uso em produção comprometido |
| **Contexto em excesso** | history.jsonl sendo carregado no contexto causa estouro de tokens | Custo elevado e degradação de qualidade |
| **Identificação de usuários** | sender_id não reaching LLM em grupo Discord | Limita casos de uso multi-usuário |

### Cenários de uso observados

- **Deployment remoto:** WebUI acessado externamente, bots em servidores Linux
- **Integração local:** Servidores vLLM/Ollama com params customizados
- **Multi-canal:** Discord groups, Telegram, QQ (Napcat), WeCom, Matrix
- **Agentes autônomos:** Pipeline nightly com profiling e span tracing

### Satisfação geral

**Positivo:** Comunidade ativa (23 contributors visible), issues sendo fechadas rapidamente, funcionalidades sendo adicionadas em ritmo sustentável.

**Áreas de atenção:** Bugs Windows impactam experiência cross-platform; regressão de memória requer atenção imediata antes de próxima release.

---

## 8. Backlog que merece atenção

### Issues sem resposta há >7 dias

| Issue | Título | Criado | Comentários | Prioridade |
|-------|--------|--------|-------------|------------|
| [#3331](https://github.com/HKUDS/nanobot/issues/3331) | fix(wecom): WebSocket client initialization | 2026-04-20 | 0 | 🔴 |
| [#3324](https://github.com/HKUDS/nanobot/issues/3324) | WinError 193 on Windows | 2026-04-20 | 2 | 🟡 |
| [#3328](https://github.com/HKUDS/nanobot/issues/3328) | deepseek deserialization error | 2026-04-20 | 2 | 🟡 |
| [#223](https://github.com/HKUDS/nanobot/issues/223) | Multi-modal Support (stale) | 2026-02-06 | 0 | 🟢 |

### PRs em aberto há >5 dias sem reviews

| PR | Título | Criado | Dias |
|----|--------|--------|------|
| [#3144](https://github.com/HKUDS/nanobot/pull/3144) | AgentHiFive integration | 2026-04-14 | 14 |
| [#3331](https://github.com/HKUDS/nanobot/pull/3331) | fix(wecom): WebSocket client | 2026-04-20 | 9 |

### Recomendações

1. **Priorizar regressão de memória (#3410)** — Impacta deployments em produção
2. **Revisar PR #3144 (AgentHiFive)** — Em aberto há 14 dias com integração significativa
3. **Consolidar fixes Windows** — Múltiplos bugs relacionados; uma sprint de cross-platform testing seria benéfica
4. **Roadmap multi-modal (#223)** — Item stale há meses; comunidade demonstra interesse contínuo

---

*Relatório gerado automaticamente com base em dados do GitHub para HKUDS/nanobot em 2026-04-29*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-04-29

---

## 1. Panorama do Dia

O Hermes Agent mantém um nível de atividade muito intenso, com **100 eventostotais** registrados nas últimas 24 horas (50 issues + 50 PRs). Não houve lançamentos de novas versões, o que sugere que a equipe está em ciclo de estabilização. A base de código apresenta **5 bugs P1 críticos** em aberto simultaneamente — incluindo crashes no gateway, falha de CI/blocker de PRs e problemas de integridade de sessão — enquanto **5 PRs de segurança P0** aguardam merge há mais de 15 dias, representando risco acumulativo. A comunidade demonstra interesse forte em features de usabilidade (WebUI, Telegram enhancements) e em melhorias de estabilidade do sistema de sessões e cron jobs.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto encontra-se em período de maturação de PRs pendentes, sem tag de versão publicada na data do relatório.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Recentemente

| # | PR | Resumo | Impacto |
|---|-----|--------|---------|
| [#16957](https://github.com/NousResearch/hermes-agent/pull/16957) | **fix(anthropic): remove Claude Code fingerprinting** | Removeu spoofing de identidade do caminho OAuth da API de Mensagens. Requisições agora identificam-se como Hermes na rede. | 🔴 Segurança — compliance com API da Anthropic |
| [#16983](https://github.com/NousResearch/hermes-agent/pull/16983) | **fix(cli): avoid nesting system prompt during /compress** | Impediu crescimento linear do system prompt cacheado em compressões manuais repetidas. | 🟢 Estabilidade — evita degradação de contexto |
| [#17146](https://github.com/NousResearch/hermes-agent/pull/17146) | **fix: SessionDB flush cursor skipping messages** | `SessionDB.flush()` agora restaura por prefixo de mensagem persistida, evitando tabelas SQLite vazias mesmo com JSON completo. | 🟡 UX — integridade de sessões exportadas |
| [#17145](https://github.com/NousResearch/hermes-agent/pull/17145) | **fix(cli): persist manual compress handoff** | Compressão manual agora persiste transcript no child session DB ao rotacionar sessão. | 🟢 Usabilidade — continuidade de contexto |
| [#17128](https://github.com/NousResearch/hermes-agent/pull/17128) | **fix(tui): avoid creating chat sessions on dashboard mount** | TUI embedded não cria mais sessão persistente ao montar rota Chat. | 🟢 UX — elimina sessão espúria |
| [#17120](https://github.com/NousResearch/hermes-agent/pull/17120) | **fix(tui): make /browser connect take effect** | `/browser connect <url>` agora propaga para o agente live no TUI sem restart. | 🟡 Usabilidade — paridade CLI/TUI |
| [#17118](https://github.com/NousResearch/hermes-agent/pull/17118) | **fix(tui-gateway): harden stdio transport** | Protege contra pipes semi-fechados e races de SIGTERM em sessões TUI de alta concorrência. | 🟡 Estabilidade — resilience em produção |
| [#16928](https://github.com/NousResearch/hermes-agent/pull/16928) | **feat(context): add native lean-ctx bootstrap** | Integração nativa com `lean_ctx:` para bootstrap efêmero de contexto de projeto. | 🟢 Feature — eficiência de contexto |
| [#17130](https://github.com/NousResearch/hermes-agent/pull/17130) | **feat(tui): opt-in auto-resume of most recent session** | `--tui` pode retomar sessão anterior automaticamente via `HERMES_TUI_RESUME`. | 🟢 UX — recuperação de contexto |
| [#17141](https://github.com/NousResearch/hermes-agent/pull/17141) | **fix(cli): prevent .env sanitizer splitting GLM_API_KEY** | Corrigiu bug onde `LM_API_KEY` como suffix de `GLM_API_KEY` causava split corrupto. | 🟡 Bug fix — integridade de configuração |
| [#17143](https://github.com/NousResearch/hermes-agent/pull/17143) | **feat: add prompt-engineering skill** | Novo skill bundled cobrindo prompting para ferramentas de imagem, vídeo, música e voz. | 🟢 Feature — extensibilidade |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (comentários + reações)

#### WebUI Dashboard — Demanda Acumulada
- **[#8118](https://github.com/NousResearch/hermes-agent/issues/8118)** — Feature Request: WebUI Dashboard | 5 comentários | 👍 0
- **[#8183](https://github.com/NousResearch/hermes-agent/issues/8183)** — Definir Phase 1 Web UI gateway MVP contract | 2 comentários | 👍 0

**Análise:** A comunidade expressa entusiasmo pela ausência de interface web. A issue #8183 segmentation de #501 indica que a feature está sendo decomposta em escopo gerenciável, sugerindo planejamento ativo.

#### Context Compaction — Problema Recorrente Crítico
- **[#14521](https://github.com/NousResearch/hermes-agent/issues/14521)** — Context Compaction re-injects old messages as new user input (3ª ocorrência) | 3 comentários | 👍 0

**Análise:** Este é um bug de integridade de sessão que pode causar comportamento não determinístico do agente. A menção de "3ª ocorrência" indica regressão ou solução incompleta anterior. Prioridade P1 é justificada.

#### Bugs de Startup do Gateway (RedactingFormatter)
- **[#8091](https://github.com/NousResearch/hermes-agent/issues/8091)** — NameError: 'RedactingFormatter' is not defined | 4 comentários | 👍 5
- **[#8173](https://github.com/NousResearch/hermes-agent/issues/8173)** — gateway crash with Feishu/Lark (same root cause) | 4 comentários | 👍 0

**Análise:** Bug duplicado com alta atenção (9+ comentários combinados). Impacta qualquer usuário tentando iniciar o gateway em plataformas específicas. Reação de 👍 5 indica impacto amplo.

#### Token Waste em Cron Jobs
- **[#17071](https://github.com/NousResearch/hermes-agent/issues/17071)** — Cron job waste 2M tokens due to push failures | 2 comentários | 👍 0

**Análise:** Issue com tom de urgência ("real world case"), detalhando cenário de custo real. Sugere necessidade de mecanismo de retry e persistência de stage para cron jobs.

#### MCP HTTP Staleness
- **[#17003](https://github.com/NousResearch/hermes-agent/issues/17003)** — MCP HTTP connections go stale after ~12h idle | 2 comentários | 👍 0

**Análise:** Problema de longa duração que afeta sessões MCP mantidas por períodos extensos. Falha silenciosa após idle é particularmente problemática para automação.

---

## 5. Bugs e Estabilidade

### Prioridade P1 (Críticos — 5 issues)

| # | Bug | Componente | Status | Atualizado |
|---|-----|------------|--------|------------|
| [#8091](https://github.com/NousResearch/hermes-agent/issues/8091) | `NameError: 'RedactingFormatter' is not defined` no startup | gateway | OPEN | 2026-04-28 |
| [#8173](https://github.com/NousResearch/hermes-agent/issues/8173) | RedactingFormatter crash com Feishu/Lark | gateway | OPEN | 2026-04-28 |
| [#14521](https://github.com/NousResearch/hermes-agent/issues/14521) | Context Compaction re-injects old messages (3ª vez) | agent | OPEN | 2026-04-28 |
| [#15272](https://github.com/NousResearch/hermes-agent/issues/15272) | Nix CI broken — `npmDepsHash` out of date (bloqueia TODOS PRs) | CI/area:nix | OPEN | 2026-04-28 |
| [#8049](https://github.com/NousResearch/hermes-agent/issues/8049) | `run_conversation` kills Python silently when budget exhausted | agent | OPEN | 2026-04-28 |
| [#17139](https://github.com/NousResearch/hermes-agent/issues/17139) | Cron `deliver=['telegram']` fails — no delivery target resolved | cron, telegram | OPEN | 2026-04-28 |

**Análise P1:** Dois bugs de gateway duplicados, um problema de CI bloqueante (impacta workflow de PRs), bug de contexto recorrente e falha silenciosa de processo.组合 representam risco imediato para usuários em produção.

### Prioridade P2 (Significativos — 10 issues)

| # | Bug | Componente | Status |
|---|-----|------------|--------|
| [#11073](https://github.com/NousResearch/hermes-agent/issues/11073) | agent-browser: Playwright `ignoreDefaultArgs` não exposto | tool:browser | CLOSED |
| [#8293](https://github.com/NousResearch/hermes-agent/issues/8293) | Symlinked skills omitidos de `skills_list` | tool:skills | OPEN |
| [#8110](https://github.com/NousResearch/hermes-agent/issues/8110) | Telegram slash commands excluem external skills | gateway, telegram | OPEN |
| [#10581](https://github.com/NousResearch/hermes-agent/issues/10581) | Home-channel auto-prompt só lê env var, ignora yaml | gateway, area:config | OPEN |
| [#17003](https://github.com/NousResearch/hermes-agent/issues/17003) | MCP HTTP stale after 12h idle | tools, mcp | OPEN |
| [#17054](https://github.com/NousResearch/hermes-agent/issues/17054) | Slack manifest is broken | gateway, slack | OPEN |
| [#17140](https://github.com/NousResearch/hermes-agent/issues/17140) | TTS tools não leem `.env` via `os.getenv()` | tools, tts | OPEN |
| [#17057](https://github.com/NousResearch/hermes-agent/issues/17057) | Custom Kimi endpoint fails after tool call with thinking | agent, provider:kimi | OPEN |
| [#8125](https://github.com/NousResearch/hermes-agent/issues/8125) | launchd plist inclui PATH session-specific (macOS) | cli | OPEN |
| [#7153](https://github.com/NousResearch/hermes-agent/issues/7153) | multimodal list messages crash `run_conversation` | agent | OPEN |

### Prioridade P0 — PRs de Segurança Pendentes (5 PRs)

| # | PR | Vulnerabilidade | Dias Aberto |
|---|-----|-----------------|-------------|
| [#8050](https://github.com/NousResearch/hermes-agent/pull/8050) | Remove hermes root from PYTHONPATH sandbox | Sandbox escape via `import hermes_cli.auth` | ~17 dias |
| [#8052](https://github.com/NousResearch/hermes-agent/pull/8052) | Prevent `force=True` bypass terminal security | Bypass de segurança de terminal | ~17 dias |
| [#8053](https://github.com/NousResearch/hermes-agent/pull/8053) | Add `resolve_and_validate_url` for DNS rebinding | TOCTOU em validação de URL | ~17 dias |
| [#8054](https://github.com/NousResearch/hermes-agent/pull/8054) | Apply SSRF validation to local browser backend | SSRF em navegadores locais | ~17 dias |

**⚠️ Alerta:** Todos os 4 PRs de segurança P0 estão abertos há ~17 dias sem merge. Recomenda-se priorização imediata.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com Alto Potencial (P2)

| # | Feature | Componente | Sinais de Demanda |
|---|---------|------------|-------------------|
| [#17071](https://github.com/NousResearch/hermes-agent/issues/17071) | Cron job stage persistence + partial retry | cron | Usuário reportou 2M tokens desperdiçados |
| [#16928](https://github.com/NousResearch/hermes-agent/pull/16928) | Native lean-ctx bootstrap | context | PR em aberto — merge iminente |
| [#16226](https://github.com/NousResearch/hermes-agent/pull/16226) | Native Claude/Cursor bridge transport | delegation | Suporte a personas multi-provider |

### Features P3 (Enhancements)

| # | Feature | Componente |
|---|---------|------------|
| [#8118](https://github.com/NousResearch/hermes-agent/issues/8118) | WebUI Dashboard | gateway |
| [#8164](https://github.com/NousResearch/hermes-agent/issues/8164) | MVP authorization certificate for unattended cron | cron, auth |
| [#8183](https://github.com/NousResearch/hermes-agent/issues/8183) | Phase 1 Web UI gateway MVP contract | gateway |
| [#16826](https://github.com/NousResearch/hermes-agent/issues/16826) | Termux: reuse pip cache on update | cli |
| [#17037](https://github.com/NousResearch/hermes-agent/issues/17037) | Configurable response metadata/footer hooks | gateway |
| [#17143](https://github.com/NousResearch/hermes-agent/pull/17143) | Prompt-engineering skill (image/video/music/voice) | skills |
| [#17130](https://github.com/NousResearch/hermes-agent/pull/17130) | TUI auto-resume most recent session | tui |
| [#17129](https://github.com/NousResearch/hermes-agent/pull/17129) | TUI port of /reload (.env hot-reload) | tui |
| [#8165](https://github.com/NousResearch/hermes-agent/issues/8165) | Telegram: disable link previews | telegram |

**Análise de Roadmap:** A convergência de #8118 + #8183 + #501 indica que WebUI é prioritário para a equipe. A feature de cron persistence (#17071) addressa dor real de custo. TUI parity com CLI continua em evolução (3 PRs de TUI merged/open).

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Issue | Descrição |
|----------|-------|-----------|
| **Estabilidade de Sessão** | #14521 | "Context Compaction causes historical messages to be erroneously re-injected as new user input" — Impacta sessões longas, causa comportamento não determinístico |
| **Custo de Operações** | #17071 | "2 million tokens wasted due to push failures" — Impacto financeiro direto para cron users |
| **Onboarding/Setup** | #8091, #8173 | Gateway crash on startup impede novos usuários de experimentar |
| **Integração de API** | #17140 | TTS tools falham mesmo

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-04-29

## 1. Panorama do Dia

O projeto PicoClaw mantém atividade intensa com **17 issues e 16 PRs atualizados nas últimas 24h**, evidenciando alta dinâmica de desenvolvimento. Não houve lançamentos formais (releases), porém o período foi marcado por **6 PRs merged/fechados** que abrangem desde correções críticas (sandbox bypass, duplicação em cron jobs) até novas funcionalidades (suporte MQTT, serial cross-platform, Intel OpenVINO). A comunidade demonstra foco em **estabilidade de canais** (Discord, Slack, Weixin) e **segurança de ferramentas**, com diversas issues de bug e enhancement competindo por atenção. O volume de issues abertas (13) supera o throughput de resolução, sugerindo necessidade de priorização.

---

## 2. Lançamentos

**Nenhuma release oficial** foi publicada nas últimas 24h. O projeto encontra-se em ritmo de desenvolvimento ativo sem tag de versão nova.

> **Nota:** Releases anteriores (v0.2.7) ainda não geraram suítes de testes formalizadas para migração. Usuários em versões anteriores devem consultar o histórico de changelog em [releases](https://github.com/sipeed/picoclaw/releases).

---

## 3. Progresso do Projeto

### PRs Merged/Closed (6 total)

| PR | Tipo | Descrição | Link |
|----|------|-----------|------|
| #2689 | Bug Fix | Propagação de `sessionKey` em cron jobs — **corrige duplicação de mensagens** após upgrade para v0.2.7 | [#2689](https://github.com/sipeed/picoclaw/pull/2689) |
| #2653 | Enhancement | **Novo canal MQTT nativo** — integração de messaging IoT | [#2653](https://github.com/sipeed/picoclaw/pull/2653) |
| #2673 | Enhancement | **Ferramenta serial cross-platform** (Linux/macOS/Windows) para hardware | [#2673](https://github.com/sipeed/picoclaw/pull/2673) |
| #2697 | Bug Fix | Remoção de import não utilizado em `serial_windows.go` | [#2697](https://github.com/sipeed/picoclaw/pull/2697) |
| #2680 | Refactor | Unificação do handling de `tool_calls` e `thought` com novo `payload.kind` | [#2680](https://github.com/sipeed/picoclaw/pull/2680) |
| #2676 | Enhancement | Provedor Exa Search (fechado sem merge — necesita revisão) | [#2676](https://github.com/sipeed/picoclaw/pull/2676) |

### PRs Abertas em Destaque

| PR | Tipo | Descrição | Link |
|----|------|-----------|------|
| #2703 | Enhancement | **Intel OpenVINO Model Server** para inferência local de LLMs | [#2703](https://github.com/sipeed/picoclaw/pull/2703) |
| #2701 | Enhancement | Gerenciamento de modelos com provider options via Web UI | [#2701](https://github.com/sipeed/picoclaw/pull/2701) |
| #2700 | Bug Fix | Restauração do `make docker-build` com correções de Go version | [#2700](https://github.com/sipeed/picoclaw/pull/2700) |
| #2693 | Bug Fix | Bloqueio de sandbox bypass via `find /` e `ls /` | [#2693](https://github.com/sipeed/picoclaw/pull/2693) |
| #2696 | Enhancement | Headers dinâmicos por requisição para MCP servers | [#2696](https://github.com/sipeed/picoclaw/pull/2696) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Domínio | Comentários | Reações | Relevância |
|-------|---------|-------------|---------|------------|
| #629 | Provider (LLM retry) | 11 | 0 | **Bug crítico** — tasks param sem retry em HTTP 500 |
| #2513 | Channel (gateway) | 7 | 0 | Gateway inicia com comportamento anormal |
| #2367 | Config (i18n) | 5 | 0 | Tela final permanece em chinês mesmo com inglês selecionado |
| #1950 | Channel (streaming) | 5 | 0 | Streaming output para Web Chat |
| #1587 | Channel (Mattermost) | 4 | **2** 👍 | Suporte a Mattermost (CLOSED — aguardando ação) |

### Análise de Demandas

- **Canal Mattermost (#1587)** é a issue com maior reação (+2 👍), sinalizando demanda por integração com plataformas corporativas alternativas. Closed sem merge — risco de fragmentação da comunidade.
- **LLM Retry (#629)** domina discussões (11 comentários), indicando que falhas de API em produção são dor recorrente. Impacta confiabilidade em ambientes de produção.
- **Streaming Web Chat (#1950)** representa desejo de UX mais responsiva em interfaces web.

---

## 5. Bugs e Estabilidade

### Bugs Críticos (Alta Severidade)

| # | Bug | Domínio | Status | Link |
|---|-----|---------|--------|------|
| #629 | HTTP 500 em LLM não dispara retry | Provider | OPEN (11 comments) | [#629](https://github.com/sipeed/picoclaw/issues/629) |
| #2687 | Cron send report duplicado após upgrade v0.2.7 | Cron | CLOSED (fixo via #2689) | [#2687](https://github.com/sipeed/picoclaw/issues/2687) |
| #2689 | `sessionKey` não propagado causa duplicação | Cron | CLOSED (merge) | [#2689](https://github.com/sipeed/picoclaw/pull/2689) |

### Bugs Moderados

| # | Bug | Domínio | Status | Link |
|---|-----|---------|--------|------|
| #2513 | Gateway start abnormal | Channel | OPEN (7 comments) | [#2513](https://github.com/sipeed/picoclaw/issues/2513) |
| #2699 | Reasoning leakage entre canais Slack | Channel | CLOSED | [#2699](https://github.com/sipeed/picoclaw/issues/2699) |
| #2694 | Falha de verificação x509 certificate | Provider | OPEN | [#2694](https://github.com/sipeed/picoclaw/issues/2694) |

### Bugs Menores / UX

| # | Bug | Domínio | Status | Link |
|---|-----|---------|--------|------|
| #2367 | Título da última tela em chinês mesmo com inglês | Config | OPEN (stale) | [#2367](https://github.com/sipeed/picoclaw/issues/2367) |
| #2368 | Modelo local não configurado no Android | Provider/Config | OPEN | [#2368](https://github.com/sipeed/picoclaw/issues/2368) |
| #2081 | Caracteres Unicode escapados em preview de ferramentas | Tool | OPEN (stale) | [#2081](https://github.com/sipeed/picoclaw/issues/2081) |

### Regressão em Docker

- **#2700**: `docker-compose.yml` sem `build:` sections e imagem Go inexistente — **bloqueia build local**.
- Status: OPEN — Necessita merge urgente para DX.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas (Ordenadas por priorização implícita)

| # | Feature | Domínio | Comentários | Insight Estratégico |
|---|---------|---------|-------------|---------------------|
| #1950 | Streaming output para Web Chat | Channel | 5 | Diferencial UX vs concorrência |
| #2217 | Dashboard de consumo de tokens (WebUI) | Channel | 3 | Necessidade de observabilidade |
| #2421 | Canal email nativo | Channel | 3 | Expansão para ambientes corporativos/conservadores |
| #2698 | Mission Control integration | Agent | 0 | Integração com ecossistema OpenClaw |
| #2702 | Atribuição de remetente em histórico de grupos | Agent/Channel | 0 | Multi-usuário em Discord/grupos |
| #2703 | Intel OpenVINO para inferência local | Provider | 0 | Privacidade + performance Intel GPU/NPU |
| #2313 | Multi-User support + Security Skills | Security/Agent | 0 | **PR aberto** com Agent Shield — arquitetura |

### Sinais de Roadmap

1. **Privacidade e Local LLM**: Intel OpenVINO (#2703, #2496) e provedor Exa (#2676) indicam movimento estratégico para inferência local.
2. **Expansão de Canais**: Email (#2421), MQTT (#2653 merged), Mattermost (#1587) — diversificação de plataformas de comunicação.
3. **Segurança Enterprise**: PR #2313 com Agent Shield e multi-user support sugere foco em implantações corporativas.
4. **Observabilidade**: Dashboard de tokens (#2217) atende demanda por controle de custos.

---

## 7. Resumo de Feedback dos Usuários

### Dores Recorrentes Identificadas

| Dor | Evidência | Impacto |
|-----|-----------|---------|
| **Falhas de LLM sem retry automático** | #629 (11 comments, since 2026-02-22) | Tasks ficam suspensas em produção |
| **Histórico de chat incompleto** | #2310 | Perda de contexto em conversas longas |
| **Upgrade quebra cron jobs** | #2687 | Experiência degradada após update |
| **Configuração de modelos locais no Android** | #2368 | Bloqueio de uso offline |
| **Sandbox insuficiente** | #2688 → #2693 | Risco de segurança |

### Cenários de Uso Emergentes

- **IoT/MQTT**: Integração de mensagens machine-to-machine (#2653).
- **Hardware Serial**: Controle de dispositivos físicos cross-platform (#2673).
- **Enterprise Chat**: Mattermost (#1587) e Slack (#2699) para equipes.
- **Pesquisa**: Exa Search provider para recuperação de informação (#2676).

### Satisfação/Insatisfação

- **Positivo**: Ativos recentes (MQTT, serial, streaming) demonstram maturidade crescente em integrações.
- **Negativo**: Bugs persistentes (retry LLM, histórico incompleto) e documentação insuficiente (#2695) geram fricção.
- **Neutro**: Features enterprise (#2313) ainda não convergiram para merge.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta há >7 dias

| # | Título | Criado | Atualizado | Days Idle | Prioridade |
|---|--------|--------|-----------|-----------|-----------|
| #1950 | Streaming Output for Web Chat | 2026-03-24 | 2026-04-28 | ~35 dias | Enhancement |
| #2310 | Histórico de chat incompleto | 2026-04-03 | 2026-04-28 | ~26 dias | **Bug Crítico** |
| #2367 | Título em chinês com inglês | 2026-04-05 | 2026-04-28 | ~24 dias | Bug |
| #2081 | Unicode escapes em preview | 2026-03-27 | 2026-04-28 | ~33 dias | Bug |
| #2313 | Multi-User + Agent Shield | 2026-04-03 | 2026-04-28 | ~26 dias | **PR Crítico** |

### PRs Abertas há >7 dias sem review

| # | Título | Criado | Link |
|---|--------|--------|------|
| #2411 | Split SSE stream chunk parsing | 2026-04-07 | [#2411](https://github.com/sipeed/picoclaw/pull/2411) |
| #2551 | Standardize channel identification | 2026-04-16 | [#2551](https://github.com/sipeed/picoclaw/pull/2551) |
| #2345 | Engram MCP integration guide | 2026-04-04 | [#2345](https://github.com/sipeed/picoclaw/pull/2345) |
| #2606 | Enhance Weixin support | 2026-04-21 | [#2606](https://github.com/sipeed/picoclaw/pull/2606) |

### Recomendações Prioritárias

1. **#2310 — Histórico de chat incompleto**: Bug de usabilidade que afeta retenção de dados.
2. **#2313 — Multi-User + Agent Shield**: PR com valor estratégico enterprise, aberto há ~26 dias.
3. **#629 — Retry LLM**: Issue com maiorDiscussion (11 comments), representa dor de produção.
4. **#2700 — Docker build quebrado**: Impede desenvolvedores de buildarem localmente.

---

## Métricas Consolidada (2026-04-29)

| Indicador | Valor |
|-----------|-------|
| Issues ativas | 13 |
| Issues fechadas (24h) | 4 |
| PRs abertos | 10 |
| PRs merged/fechados | 6 |
| Releases | 0 |
| Bugs críticos reportados | 3 |
| Features solicitadas | 7 |
| Engagement (comentários total) | ~60+ |

**Saúde Geral**: Moderada. Atividade alta com pipeline saudável de PRs, porém backlog acumulado de issues antigas e bugs persistentes requerem triagem. Foco em estabilidade (retry, cron, sandbox) e documentaçãobeneficiaria a comunidade.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw

**Data do relatório:** 2026-04-29  
**Repositório:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade de desenvolvimento** em 28 de abril de 2026, com 30 issues e 45 PRs atualizados nas últimas 24 horas. O foco principal permanece na arquitetura **"Reborn"**, com múltiplos bloqueios de cutover sendo trabalhados ativamente e vários substrates sendo mergeados (auth, filesystem, extension manifest, process lifecycle). Três pipelines de live canary estão falhando (`public-smoke`, `private-oauth`), sinalizando possíveis problemas de regressão que requerem atenção imediata. A comunidade externa contributed com PRs de Telegram access control e fixes de segurança web, enquanto bugs reportados do bug bash indicam gaps de onboarding no V2 engine.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões entre 2026-04-28 e 2026-04-29, indicando que o time está focado em estabilizar a branch `staging` antes de promover para produção.

> **Link:** https://github.com/nearai/ironclaw/releases

---

## 3. Progresso do Projeto

### PRs Importantes Mergeados/Fechados Hoje

| PR | Escopo | Impacto |
|----|--------|---------|
| [#2996](https://github.com/nearai/ironclaw/pull/2996) | `feat(reborn): add filesystem substrate` | Adiciona `crates/ironclaw_filesystem` com `RootFilesystem`, `ScopedFilesystem`, e `CompositeFilesystem`. Fecha o lado filesystem do PR2. |
| [#2999](https://github.com/nearai/ironclaw/pull/2999) | `feat(reborn): add auth control substrate` | Implementa `ironclaw_authorization` com capability grants, lease model/store, e lease-backed authorizer. Parte do PR3. |
| [#3015](https://github.com/nearai/ironclaw/pull/3015) | `feat(reborn): add extension manifest registry` | Carva deferred extension manifest/registry slice, desbloqueando DI later. |
| [#2992](https://github.com/nearai/ironclaw/pull/2992) | `fix(web): keep Routines tab after v1→v2 upgrade` | Corrige regressão que escondia Routines tab após upgrade para 0.26.0. |
| [#3042](https://github.com/nearai/ironclaw/pull/3042) | `feat: policy engine` | Implementação do policy engine. |
| [#3046](https://github.com/nearai/ironclaw/pull/3046) | `feat(telegram): add allowed_chat_ids` | Resolve conflito com #3047 (versão Closed). |

### PRs Abertos de Alto Impacto (Reborn)

- [#3017](https://github.com/nearai/ironclaw/pull/3017) - Process lifecycle substrate (XL, DB Migration)
- [#3023](https://github.com/nearai/ironclaw/pull/3023) - Runtime dispatcher substrate
- [#3027](https://github.com/nearai/ironclaw/pull/3027) - Script and MCP runtime lanes
- [#3028](https://github.com/nearai/ironclaw/pull/3028) - WASM runtime lane
- [#3043](https://github.com/nearai/ironclaw/pull/3043) - Host-controlled trust-class policy engine

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| Issue/PR | Comentários | Tipo | Análise |
|----------|-------------|------|---------|
| [#2987](https://github.com/nearai/ironclaw/issues/2987) | 23 | Epic - Reborn landing strategy | **Maior discussão técnica** - Planeja como landed a arquitetura Reborn sem PRs massivos. Envolve contract freeze → staging → grouped PRs. |
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | 1 (1 👍) | Epic - Configuration-as-Code | Demanda por tenant blueprints e use-case harnesses para configuração declarativa. |
| [#2828](https://github.com/nearai/ironclaw/issues/2828) | 0 | Tracker - Harness testing epic | Unificação de replay, E2E, live canary e eval coverage. |
| [#3040](https://github.com/nearai/ironclaw/pull/3040) | - | Security fix (web) | Requer admin para shared skill mutations em multi-tenant mode. |
| [#3047](https://github.com/nearai/ironclaw/pull/3047) | - | Feature (Telegram) | Adiciona `allowed_chat_ids` para controle de acesso em grupos. |

### Análise de Demandas

**Arquitetura Reborn:** A comunidade e o time estão concentrados na estratégia de cutover da nova arquitetura. A issue #2987 serve como umbrella para 15+ bloqueios de cutover, indicando uma migração complexa.

**Configuration-as-Code:** Issue #3036 destaca a necessidade de um schema formal para `.env`, workspace docs, settings JSON, e extensões — eliminando hand-editing sem audit trail.

---

## 5. Bugs e Estabilidade

### Falhas de Live Canary (Crítico)

| Lane | Run | Commit | Status |
|------|-----|--------|--------|
| `public-smoke` | [#3038](https://github.com/nearai/ironclaw/issues/3038) | 7194808f | Falhou em 2026-04-28 |
| `private-oauth` | [#3037](https://github.com/nearai/ironclaw/issues/3037) | 7194808f | Falhou em 2026-04-28 |
| `private-oauth` | [#3030](https://github.com/nearai/ironclaw/issues/3030) | 7194808f | Falhou em 2026-04-28 |
| `private-oauth` | [#3005](https://github.com/nearai/ironclaw/issues/3005) | 983a95cc | Falhou em 2026-04-28 |

> ⚠️ **Alerta:** Pipeline `private-oauth` apresenta falhas recorrentes no mesmo commit. Requer investigação prioritária.

### Bugs Reportados (P2 - Bug Bash)

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#3035](https://github.com/nearai/ironclaw/issues/3035) | P2 | Agent ignora configured display name, responde com "IronClaw" padrão |
| [#3034](https://github.com/nearai/ironclaw/issues/3034) | P2 | HTTP tool desabilitado por default sem onboarding para habilitar |

### Bugs Reportados (P1)

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#2437](https://github.com/nearai/ironclaw/issues/2437) | P1 | `nearai_chat` não normaliza tool schemas antes de enviar ao provider (HTTP 400) |

### Bugs Geral

| Issue | Descrição |
|-------|-----------|
| [#2982](https://github.com/nearai/ironclaw/issues/2982) | Routine/Mission migration issue após upgrade para 0.26.0 (Closed - fix em #2992) |
| [#2833](https://github.com/nearai/ironclaw/issues/2833) | Cross-Conversation Response Contamination (Closed) |
| [#3011](https://github.com/nearai/ironclaw/issues/3011) | Tracing fmt layer nunca escreve para stderr - `ironclaw run` produz zero log output |
| [#3010](https://github.com/nearai/ironclaw/issues/3010) | Generated images não disponíveis como context editável em turns subsequentes |

### Problema de Plataforma

| Issue | Descrição |
|-------|-----------|
| [#2949](https://github.com/nearai/ironclaw/issues/2949) | Erro de instalação: "there isn't a download for your platform x86_64-unknown-linux-gnu" |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Reborn (Alta Prioridade)

| Issue | Título | Escopo |
|-------|--------|--------|
| [#3045](https://github.com/nearai/ironclaw/issues/3045) | Add runtime presets and effective runtime policy | Operadores precisam escolher operating modes sem hand-wiring grants, mounts, process backends, etc. |
| [#3044](https://github.com/nearai/ironclaw/issues/3044) | Add local developer runtime profiles | Modo "local coding agent" simplificado para devs sem wiring manual. |
| [#3031](https://github.com/nearai/ironclaw/issues/3031) | EPIC: Reborn product surface migration | Migração do product surface preserving v1 user/operator behavior. |
| [#3012](https://github.com/nearai/ironclaw/issues/3012) | Add host-controlled trust-class policy engine | Promovido de opcional para **mandatory dependency gate** antes de PR3. |

### Features Solicitadas

| Issue | Título | Demanda |
|-------|--------|---------|
| [#3025](https://github.com/nearai/ironclaw/issues/3025) | Support for Trezor or MetaMask in ironclaw | Usuário solicita wallet integration open source (MetaMask, Trezor). |
| [#1044](https://github.com/nearai/ironclaw/issues/1044) | Create e2e test powered by Claude Code with Chrome MCP | Automação de testes E2E em NL. |
| [#2828](https://github.com/nearai/ironclaw/issues/2828) | Harness testing epic | Unificação de sistemas de teste (replay, E2E, live canary, eval). |

### Cutover Blockers (Roadmap Imediato)

Blocos críticos para lançamento Reborn (15 issues em [#2987](https://github.com/nearai/ironclaw/issues/2987)):

1. **#3020** - Compatibility gate for pre-Reborn behavior
2. **#3026** - Config-driven production composition root
3. **#3016** - Reference AgentLoopHost facade
4. **#3013** - Kernel TurnCoordinator
5. **#3019** - PromptWriteSafetyPolicy hook
6. **#3022** - Event substrate integration tests
7. **#3029** - Migration and compatibility bridges
8. **#3032** - No-exposure safeguards
9. **#3033** - TUI interrupt dispatch (PR aberto)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

| Categoria | Descrição | Impacto |
|-----------|-----------|---------|
| **Instalação** | Usuários Linux x86_64 não conseguem instalar via installer script | Bloqueio de onboarding |
| **V2 Engine Onboarding** | HTTP tool desabilitado por default sem hint para habilitar | Confusão de novos usuários |
| **Configuração** | Mix de `.env`, workspace docs, settings JSON sem schema formal | DX ruim para operators |
| **Identidade** | Agent display name configurado ignorado | Experiência personalizada comprometida |
| **Cross-Conversation** | Respostas contaminam outras conversas | Confiança na isolate do agent |

### Cenários de Uso Destacados

1. **Deploy de ironclaw com wallets alternativas** ([#3025](https://github.com/nearai/ironclaw/issues/3025)) - Usuário busca alternativas open source a hot wallet connector.
2. **Local coding agent** ([#3044](https://github.com/nearai/ironclaw/issues/3044)) - Desenvolvedores querem rodar ironclaw como agent local sem configuração complexa.
3. **E2E testing com Claude Code** ([#1044](https://github.com/nearai/ironclaw/issues/1044)) - QA quer descrever testes em NL e executar via Claude Code.

### Satisfaction/Frustração

| Sentimento | Indicadores |
|------------|-------------|
| **Frustração** | Platform install blocker (#2949), V2 onboarding gaps (#3034), tracing sem output (#3011) |
| **Interesse** | Reborn runtime presets (#3045), Configuration-as-Code (#3036), Telegram access control (#3047) |
| **Confiança** | Reborn substrate PRs sendo mergeados com DB migrations bem estruturadas |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Progresso

| Issue | Idade | Prioridade | Situação |
|-------|-------|------------|----------|
| [#1044](https://github.com/nearai/ironclaw/issues/1044) | ~1.5 meses | Enhancement | Aguarda priorização para E2E automation |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | ~1 mês | Feature | PR aberto (Aliyun Coding Plan support) - sem comentários |
| [#2892](https://github.com/nearai/ironclaw/pull/2892) | ~5 dias | Bug fix | PR aberto para trim whitespace em LLM base_url - aguardando merge |
| [#2949](https://github.com/nearai/ironclaw/issues/2949) | ~5 dias | Bug | Platform installation blocker - sem resposta |

### Issues Antigas com Atividade Recente

| Issue | Criação | Última Atualização | Status |
|-------|---------|-------------------|--------|
| [#1044](https://github.com/nearai/ironclaw/issues/1044) | 2026-03-12 | 2026-04-28 | Closed - Implementada em #3047/3046 |
| [#2437](https://github.com/nearai/ironclaw/issues/2437) | 2026-04-14 | 2026-04-28 | Closed - Bug normalization schema |
| [#2833](https://github.com/nearai/ironclaw/issues/2833) | 2026-04-22 | 2026-04-28 | Closed - Cross-conversation contamination |
| [#2828](https://github.com/nearai/ironclaw/issues/2828) | 2026-04-22 | 2026-04-28 | Open - Harness epic sem comentários |

### Recomendações de Priorização

1. **Crítico:** Investigar falhas recorrentes de `private-oauth` live canary no commit 7194808f
2. **Alta:** Resolver installation blocker para x86_64-unknown-linux-gnu ([#2949](https://github.com/nearai/ironclaw/issues/2949))
3. **Alta:** Merge PR #2892 (trim whitespace fix) antes que afete mais usuários
4. **Média:** Onboarding flow para HTTP tool no V2 engine ([#3034](https://github.com/nearai/ironclaw/issues/3034))
5. **Média:** Tracing layer fix para stderr ([#3011](https://github.com/nearai/ironclaw/issues/3011))

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues ativas (24h) | 30 | Alta |
| PRs atualizados (24h) | 45 | Alta |
| Taxa de resolução (issues) | 4/30 (13%) | Normal |
| Taxa de merge (PRs) | 14/45 (31%) | Boa |
| Falhas de CI | 4 | **Atenção** |
| Releases (7 dias) | 0 | Estável |
| Contributors ativos | 8+ | Engajado |

---

**Próxima atualização:** 2026-04-30

*Relatório gerado automaticamente com base em dados do GitHub de nearai/ironclaw*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-04-29

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade** nas últimas 24 horas, com 43 issues e 31 PRs atualizados. O release `v1.1.5-beta.1` foi publicado, trazendo correções de estabilidade (storage híbrido para seleção de agente por aba, normalização de timezones) e a nova feature **ACP (Agent Communication Protocol)**. A comunidade demonstra preocupação significativa com bugs de estabilidade no Console (congelamento de página, perda de histórico de sessão) e com a integração MCP. Há influxo notável de novos contribuidores (6 PRs marcados `first-time-contributor`), indicando crescimento da base de contribuidores.

---

## 2. Lançamentos

### 🎯 v1.1.5-beta.1 — Released 2026-04-28

| Componente | Tipo | Descrição | PR |
|------------|------|-----------|-----|
| Console | Bugfix | Hybrid storage para seleção de agente por aba (resolve problema de estado entre abas) | [#3857](https://github.com/agentscope-ai/QwenPaw/pull/3857) |
| Console | Bugfix | Normalização de timezones não-padrão (corrige erros de fuso horário em edge cases) | [#3858](https://github.com/agentscope-ai/QwenPaw/pull/3858) |
| ACP | Feature | Adição do protocolo ACP (Agent Communication Protocol) para comunicação entre agentes | — |

**Notas:**
- Nenhuma breaking change identificada nesta versão beta.
- Preparação para release stable v1.1.5 em andamento ([#3918](https://github.com/agentscope-ai/QwenPaw/pull/3918)).

---

## 3. Progresso do Projeto

### PRs Closed/Merged Hoje (destaque)

| PR | Título | Impacto | Link |
|----|--------|---------|------|
| #3917 | Upgrade @agentscope-ai/chat para beta com stop fix | **Crítico** — resolve problema de pausa que só afetava frontend | [#3917](https://github.com/agentscope-ai/QwenPaw/pull/3917) |
| #3897 | Deduplicar requests de API repetidos na abertura do /chat | **Performance** — elimina 3x GET /api/models desnecessários | [#3897](https://github.com/agentscope-ai/QwenPaw/pull/3897) |
| #3912 | Virtualizar lista de sessões com react-window | **Performance** — reduz consumo de memória em listas longas | [#3912](https://github.com/agentscope-ai/QwenPaw/pull/3912) |
| #3910 | Cache skill manifest reads (prevenir FD exhaustion) | **Estabilidade** — corrige vazamento de file descriptors sob carga | [#3910](https://github.com/agentscope-ai/QwenPaw/pull/3910) |
| #3904 | Passar timeout de execução para MCP client | **Estabilidade** — previne chamadas MCP travadas indefinidamente | [#3904](https://github.com/agentscope-ai/QwenPaw/pull/3904) |
| #3845 | QQ voice message type mapping e ASR fallback | **UX** — diferencia mensagens de voz de arquivos de áudio | [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) |
| #3895 | Prevenir perda de contexto quando resultado de tool excede limite | **Bugfix Crítico** — corrige loop infinito por perda de contexto | [#3895](https://github.com/agentscope-ai/QwenPaw/pull/3895) |

### PRs Abertos em Progresso

| PR | Título | Status | Link |
|----|--------|--------|------|
| #3913 | Memory System Enhancements | Aberto | [#3913](https://github.com/agentscope-ai/QwenPaw/pull/3913) |
| #3574 | Replace Web Speech API com Whisper transcription | Under Review | [#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) |
| #3829 | Generate session titles asynchronously via LLM | Under Review | [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) |
| #3928 | Add safe default timeout para delegate_external_agent | Aberto | [#3928](https://github.com/agentscope-ai/QwenPaw/pull/3928) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Status | Link |
|---|--------|-------------|-----|--------|------|
| #3853 | Page freeze no Debian após salvar configurações de modelo | 9 | 0 | OPEN | [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) |
| #3430 | Relação QwenPaw/CoPaw e estratégia de manutenção | 7 | 0 | CLOSED | [#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430) |
| #3843 | Histórico de sessão desaparece e mensagens vão para sessão diferente | 6 | 0 | OPEN | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) |
| #3437 | Request: Suporte à API do Kimi Code | 6 | 0 | OPEN | [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) |
| #3893 | Race condition no Context Sync causa loop infinito | 5 | 0 | OPEN | [#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893) |
| #3850 | Botão de pausa só para o frontend (backend continua) | 5 | 1 | CLOSED | [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) |
| #3702 | Skill pool continuamente reporta erros | 5 | 0 | OPEN | [#3702](https://github.com/agentscope-ai/QwenPaw/issues/3702) |
| #3905 | Dream agent: arquivo MEMORY.md não existe | 4 | 0 | OPEN | [#3905](https://github.com/agentscope-ai/QwenPaw/issues/3905) |
| #3822 | MCP causa freeze infinito no chat | 3 | 0 | CLOSED | [#3822](https://github.com/agentscope-ai/QwenPaw/issues/3822) |
| #3884 | Request: File upload limit configurável | 3 | 0 | CLOSED | [#3884](https://github.com/agentscope-ai/QwenPaw/issues/3884) |

### Análise de Demandas

1. **Questão de Branding/Governança (#3430):** Usuários questionam a relação entre QwenPaw e CoPaw — sinal de confusão na identidade do projeto que pode afetar adoção.

2. **Novos Providers (#3920, #3437):** Demanda consistente por expansão de provedores de LLM (llama.cpp, Kimi Code) — indica pressão por ecossistema mais aberto.

3. **UX/Console:** Problemas de estabilidade no Console dominam as discussões, especialmente perda de histórico de sessão e freeze de página.

---

## 5. Bugs e Estabilidade

### 🔴 Severidade Alta (Impacto Crítico)

| # | Bug | Descrição | Link |
|---|-----|-----------|------|
| #3853 | Page freeze no Debian | Após salvar configurações de modelo, página congela e só reinicializando o serviço volta ao normal | [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) |
| #3893 | Race condition causa loop infinito | Ferramenta dropa resultado antes da próxima chamada LLM, causando loop infinito com max_iters alto | [#3893](https://github.com/agentscope-ai/QwenPaw/issues/3893) |
| #3895 | Perda de contexto após tool call | PR #3895 resolve este problema (merged) | [#3895](https://github.com/agentscope-ai/QwenPaw/pull/3895) |
| #3822 | MCP causa freeze infinito | Chamadas MCP em alguns momentos travam indefinidamente | [#3822](https://github.com/agentscope-ai/QwenPaw/issues/3822) |

### 🟡 Severidade Média (Degradação Significativa)

| # | Bug | Descrição | Link |
|---|-----|-----------|------|
| #3843 | Histórico some e mensagens vão para sessão errada | Usuário perde contexto da conversa sem motivo aparente | [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) |
| #3850 | Botão pause é só frontend | Backend continua executando mesmo após pausar (⚠️ resolvido em #3917) | [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) |
| #3905 | Dream agent não persiste MEMORY.md | Memória de longo prazo não está sendo salva corretamente | [#3905](https://github.com/agentscope-ai/QwenPaw/issues/3905) |
| #3049 | Comando /stop não funciona + perda de chat history | Parar execução de ferramentas é ineficaz, histórico desaparece | [#3049](https://github.com/agentscope-ai/QwenPaw/issues/3049) |

### 🟢 Severidade Baixa / Já Resolvidos

| # | Bug | Status | Link |
|---|-----|--------|------|
| #3850 | Pause button frontend-only | CLOSED (fix em #3917) | [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) |
| #3822 | MCP freeze | CLOSED | [#3822](https://github.com/agentscope-ai/QwenPaw/issues/3822) |
| #3895 | Context loss | CLOSED (PR merged) | [#3895](https://github.com/agentscope-ai/QwenPaw/pull/3895) |
| #3884 | File upload limit hardcoded | CLOSED (provavelmente resolvido em paralelo) | [#3884](https://github.com/agentscope-ai/QwenPaw/issues/3884) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Novas Solicitadas

| # | Feature | Comentários | Link |
|---|---------|-------------|------|
| #3437 | Suporte à API Kimi Code | 6 | [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) |
| #2495 | Ver tools disponíveis do MCP após configurar | 3 | [#2495](https://github.com/agentscope-ai/QwenPaw/issues/2495) |
| #3920 | Adicionar llama.cpp como provider oficial | 2 | [#3920](https://github.com/agentscope-ai/QwenPaw/issues/3920) |
| #3883 | Suporte a unit tests para Skills | 2 | [#3883](https://github.com/agentscope-ai/QwenPaw/issues/3883) |
| #3891 | Otimizar prefix caching para DeepSeek (95% → maior) | 2 | [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) |
| #3929 | Custom models com timeout e context_window_size customizáveis | 1 | [#3929](https://github.com/agentscope-ai/QwenPaw/issues/3929) |
| #3927 | IME Chinês não funciona ao renomear conversa | 1 | [#3927](https://github.com/agentscope-ai/QwenPaw/issues/3927) |

### Features em Desenvolvimento (PRs)

| PR | Feature | Status | Link |
|----|---------|--------|------|
| #3574 | Whisper transcription para voice input (substitui Web Speech API) | Under Review | [#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) |
| #3829 | Gerar títulos de sessão via LLM | Under Review | [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) |
| #3911 | Plugin GPT Image 2 | Aberto | [#3911](https://github.com/agentscope-ai/QwenPaw/pull/3911) |
| #3913 | Memory System Enhancements | Aberto | [#3913](https://github.com/agentscope-ai/QwenPaw/pull/3913) |

### Possíveis Indicações de Roadmap

1. **Ecossistema mais aberto:** Múltiplos requests por providers adicionais (llama.cpp, Kimi Code) sugere direção de diversificação.
2. **Melhoria de memória:** PR #3913 em andamento indica investimento no subsistema de memória.
3. **UX de voz:** Whisper transcription indica foco em acessibilidade e multi-modalidade.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

| Categoria | Descrição | Severidade |
|-----------|-----------|------------|
| **Estabilidade do Console** | Bugs de freeze, perda de histórico e sessões travadas afetam uso diário | 🔴 Alta |
| **Controle de Execução** | Botões pause/stop não funcionam corretamente no backend | 🔴 Alta |
| **Integração MCP** | Comportamento imprevisível (funciona às vezes, freeze outras) | 🟡 Média |
| **Persistência de

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-04-29

---

## 1. Panorama do dia

O ecossistema ZeroClaw demonstra **atividade intensa** nesta data, com 50 PRs e 19 issues atualizadas nas últimas 24h. O projeto encontra-se em uma fase de amadurecimento significativa, evidenciada pela aceitação do RFC de Microkernel Transition (#5574) e pela quantidade massiva de PRs abertos — muitos classificados com risco alto ouXL, especialmente na reformulação do protocolo ACP. A ausência de releases novas sugere foco em estabilização interna antes do próximo milestone (v0.7.4).用户反馈 revela dores críticas em onboarding (machine-identity rotation quebrando configs encriptadas) e gaps de documentação. A comunidade está engajada, com PRs de múltiplos contribuidores cobrindo desde canais (WeChat, Discord) até observabilidade e internacionalização.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O tracking issue #5877 monitora o milestone **v0.7.4**, que inclui trabalho pendente em skills, deidentificação de PR-review-session e milestones do milestone. O último release shipped foi a emergência v0.7.3 (que motivou o renome do milestone de v0.7.2 para v0.7.4 após problemas com tags quebradas). A ausência de releases novas indica que a equipe está concentrada em influxo de PRs antes de cortar o próximo release.

---

## 3. Progresso do Projeto

### PRs fechados/merged hoje

| # | PR | Impacto | Link |
|---|-----|---------|------|
| **#6162** | `fix(web): guard array-returning api helpers against non-array responses` | Correção defensiva de crash no dashboard (S1/low risk) | [PR #6162](https://github.com/zeroclaw-labs/zeroclaw/pull/6162) |

### PRs abertos de destaque técnico

| # | PR | Área | Tamanho/Risco | Link |
|---|-----|------|---------------|------|
| **#6167** | `fix(channels/acp): implement ACP protocol v1 with tool-call permission and back-channel` | Core/Channels | **XL / High / Manual** | [PR #6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) |
| **#6159** | `fix(gateway): record cost and token usage on every gateway turn` | Gateway/API | Medium / P1 | [PR #6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) |
| **#6189** | `fix(runtime): strip image markers from non-vision context compression` | Runtime | — | [PR #6189](https://github.com/zeroclaw-labs/zeroclaw/pull/6189) |
| **#6184** | `fix(discord): preserve inbound image attachments for providers` | Channels | — | [PR #6184](https://github.com/zeroclaw-labs/zeroclaw/pull/6184) |
| **#6009 + #6190** | `feat(obs): enrich OTel tool spans + instrument memory ops` | Observability | — | [PR #6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009), [PR #6190](https://github.com/zeroclaw-labs/zeroclaw/pull/6190) |
| **#6166** | `feat(channels): add WeChat personal account via iLink Bot` | Channels | — | [PR #6166](https://github.com/zeroclaw-labs/zeroclaw/pull/6166) |
| **#6191** | `fix(channels): guard reply-intent classifier against meta-instruction echo` | Channels | — | [PR #6191](https://github.com/zeroclaw-labs/zeroclaw/pull/6191) |
| **#6170** | `docs(i18n): sync fr/ja/es translations and add zh-CN` | Docs | — | [PR #6170](https://github.com/zeroclaw-labs/zeroclaw/pull/6170) |
| **#6148** | `feat(hardware): smart-room ESP32 demo with Telegram + simulator` | Hardware/Demo | — | [PR #6148](https://github.com/zeroclaw-labs/zeroclaw/pull/6148) |

**Análise:** O PR #6167 é o de maior impacto técnico do dia — requer revisão manual e implementa breaking changes no protocolo ACP. A pilha de PRs OTel (#6009 → #6190) demonstra evolução contínua em observabilidade. Novos canais (WeChat) e expansão de i18n (zh-CN) indicam estratégia de internacionalização.

---

## 4. Temas Quentes da Comunidade

### Issues com mais engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Categoria | Link |
|---|--------|-------------|----|-----------|------|
| **#6123** | `[Bug]: default_model issue on fresh install` | 14 | 0 | Bug/S1 | [Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) |
| **#5574** | `RFC: Intentional Architecture — ZeroClaw Microkernel Transition` | 10 | 0 | RFC/Architecture | [Issue #5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) |
| **#5890** | `RFC: Multi-agent UX flow — design` | 7 | 0 | RFC/UX | [Issue #5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) |
| **#5849** | `[Feature]: Dream Mode — Periodic Memory Consolidation` | 5 | 0 | Feature/Memory | [Issue #5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) |
| **#5674** | `[Feature]: Make classify_channel_reply_intent configurable` | 4 | **3** | Enhancement | [Issue #5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) |

### Análise das demandas comunitárias

**#6123 — default_model S1 (14 comentários):** Problema crítico de onboarding onde o modelo padrão não funciona após instalação limpa em LXC containers. Este é o issue mais comentado do dia, indicando que o fluxo de primeira execução está quebrado para um cenário comum (Ollama em container separado). Prioridade alta.

**#5574 — RFC Microkernel Transition (ACEITO):** Com 10 comentários e status `accepted`, este RFC documenta a arquitetura intencional para a transição do codebase reativo para um microkernel estruturado. Este é o documento estratégico central do projeto para v0.7.0 → v1.0.0.

**#5890 — RFC Multi-agent UX (7 comentários, discussão concluída):** O RFC de UX multi-agente已进入8.2节 de votação da Core Team (maioria 2/3). Este é um indicador de maturidade do processo RFC do projeto.

**#5674 — classify_channel_reply_intent configurável (4 comentários, 3 👍):** A única issue com thumbs-up positivo, indicando demanda real dos usuários para desabilitar o gate de "devo responder?" em chats privados 1:1. Funcionalidade tem `status:in-progress`.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### S1 — Workflow Bloqueado (Crítico)

| # | Bug | Canal | Link |
|---|-----|-------|------|
| **#6123** | `default_model` não funciona em instalação limpa (Ollama remoto) | Config/Provider | [Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) |
| **#6180** | Erro ao usar serviços de `llama-server` | Runtime/Daemon | [Issue #6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) |
| **#6187** | Documentação de referência de config.md inexistente | Docs | [Issue #6187](https://github.com/zeroclaw-labs/zeroclaw/issues/6187) |

**Análise:** Três bugs S1 activos. #6187 é especialmente preocupante — indica dívida de documentação que bloqueia workflow. #6180 é regressão no provider llama-cpp.

#### S2 — Comportamento Degradado

| # | Bug | Link |
|---|-----|------|
| **#6097** | Leitura de imagens locais falhando em modelos de API | [Issue #6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) |
| **#6173** | `model_switch` tool não persiste entre turns; gateway ignora | [Issue #6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) |

#### S3 — Issue Menor

| # | Bug | Canal | Link |
|---|-----|-------|------|
| **#6157** | Nextcloud Talk usa API de mensagem de bot incorreta | Nextcloud Talk | [Issue #6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) |

### Issue de Segurança/Estabilidade Crítica

| # | Bug | Descrição | Link |
|---|-----|-----------|------|
| **#6188** | Provider config `enc2:` não pode ser re-descriptografada após rotação de identidade de máquina | Após reflash Yocto, novo `zeroclaw-data` volume ou qualquer operação que resete o material de encriptação local, todos os valores `enc2:` se tornam ilegíveis, potencialmente bloqueando todos os provedores configurados. **Sem comentários ainda — requer atenção imediata.** | [Issue #6188](https://github.com/zeroclaw-labs/zeroclaw/issues/6188) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas hoje (8 issues)

| # | Feature | Prioridade | Link |
|---|---------|-----------|------|
| **#6175** | Web onboarding parity com `zeroclaw onboard` via gateway CRUD endpoints | P1 | [Issue #6175](https://github.com/zeroclaw-labs/zeroclaw/issues/6175) |
| **#6182** | Re-ativar HMAC tool receipts (wiring foi removido antes do merge #5168, mas docs já descrevem como shipped) | — | [Issue #6182](https://github.com/zeroclaw-labs/zeroclaw/issues/6182) |
| **#6151** | Track: web interaction platform — onboarding, estabilidade e chat UX | P1 | [Issue #6151](https://github.com/zeroclaw-labs/zeroclaw/issues/6151) |
| **#6177** | Suporte a uploads de arquivos Matrix ao finalizar drafts parciais | — | [Issue #6177](https://github.com/zeroclaw-labs/zeroclaw/issues/6177) |
| **#5849** | Dream Mode — Periodic Memory Consolidation & Reflective Learning | — | [Issue #5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) |
| **#6053** | `zeroclaw config set/init` suporte a dynamic map entries (e.g. `providers.models.<name>`) | — | [Issue #6053](https://github.com/zeroclaw-labs/zeroclaw/issues/6053) |
| **#5837** | Adicionar suporte a cancellation para sessões ACP-protocol | Blocked | [Issue

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*