# Resumo diário do ecossistema de agentes de IA 2026-08-21

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-20 20:21 UTC

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

**Data de referência:** 2026-08-21
**Projetos analisados:** 7 (incluindo 1 inativo)

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas de maturidade**: enquanto projetos como IronClaw e CoPaw transitam para fases de estabilização com releases formais e processos de release definidos, outros como Hermes Agent e ZeroClaw operam em режим intenso de desenvolvimento arquitetural com volume de atividade 3-5x superior à média. A segurança emerge como tema transversal — ZeroClaw, Hermes Agent e IronClaw simultaneamente investem em sandboxing, ACLs e permission models. A ausência completa de releases formais em 4 dos 6 projetos ativos sugere que a maioria está em ciclos pré-release, consolidando mudanças significativas antes de маркировки. A fragmentação de funcionalidades (memory, MCP, streaming, observabilidade) indica que o mercado ainda não convergiu para padrões arquiteturais consolidados.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Saúde | Tendência |
|---------|:------------:|:---------:|:--------:|:-----:|:---------:|
| **NullClaw** | 0 | 0 | 0 | ⚫ Inativo | Estagnado |
| **NanoBot** | 4 | 29 | 0 | 🟢 Muito ativo | Crescendo |
| **Hermes Agent** | 50 | 50 | 0 | 🟡 Ativo, com issues | Estável |
| **PicoClaw** | 3 | 7 | 0 | 🟡 Moderado | Lento |
| **IronClaw** | 14 | 33 | **v1.3.0** | 🟢 Estável | Consolidando |
| **CoPaw** | 27 | 50 | **v2.1.1-beta.1** | 🟢 Ativo com incidentes | Crescendo |
| **ZeroClaw** | 50 | 50 | 0 | 🟡 Arquitetural | Transicionando |

**Observações-chave:**
- Atividade de PRs em **IronClaw, CoPaw, NanoBot** correlaciona-se com progresso tangível em épicos arquiteturais
- **Hermes Agent** e **ZeroClaw** apresentam volume alto mas baixa taxa de resolução de issues (50 issues abertas vs 5 fechadas em 24h)
- Projetos com releases formais (**IronClaw, CoPaw**) demonstram processos de QA mais maduros

---

## 3. Posicionamento do Projeto Principal

### NanoBot como referência intermediária

**Vantagens competitivas:**
- Volume de PRs merged (12/24h) supera a maioria dos pares em eficiência de entrega
- Foco em experiência de usuário (TUI, WebUI) diferencia de projetos puramente arquiteturais
- Adoção estratégica de providers regionais (SenseNova/China) indica posicionamento de mercado

**Diferenças técnicas:**
- Arquitetura MCP SDK v2 em debate ativo — indica sofisticação técnica superior ao baseline
- Ausência de releases é característica de projeto em sprint intenso, não instabilidade

### IronClaw como projeto mais maduro

**Vantagens competitivas:**
- Único projeto com release estável publicizada com notas de migração completas
- Progresso documentado em épicos arquiteturais (#7732 sandbox persistente, #7770 lifecycle hooks)
- CI/CD responsivo (clippy 1.98 corrigido em <24h)

---

## 4. Focos Técnicos Compartilhados

### 🔴 Prioridade Alta — Problemas emergindo em múltiplos projetos

| Tema | NanoBot | Hermes | IronClaw | CoPaw | ZeroClaw |
|------|:-------:|:------:|:--------:|:-----:|:--------:|
| **Streaming resilience** | ✅ Retry não funciona | — | — | ✅ Network recovery | — |
| **Docker/container issues** | ✅ OAuth bug | — | ✅ Container activation | — | ✅ Windows ports |
| **Memory/state corruption** | — | ✅ state.db WAL | ✅ memory.write CAS | ✅ 7.6GB DB | — |
| **Observabilidade** | ✅ Turn observability | ✅ Skills index | ✅ Notifications | — | ✅ DORA telemetry |
| **Security/permissions** | ✅ x402 payments | ✅ Terminal bypass | ✅ Sandbox egress | ✅ Master key perms | ✅ mTLS, ACLs |
| **MCP integration** | ✅ SDK v2 migration | — | ✅ Local MCP transport | — | ✅ Plugin model |

### 🟡 Padrões arquiteturais convergentes

1. **Hooks de lifecycle do agente** — IronClaw (#7770), NanoBot (observabilidade de turnos), ZeroClaw (SOP contracts)
2. **Sandbox persistente** — IronClaw (#7764), NanoBot (proxy socks legados), ZeroClaw (sandbox policies)
3. **Memory de longo prazo** — IronClaw (CAS/compression), CoPaw (PowerContext), ZeroClaw (decoupled policies)

---

## 5. Análise de Diferenciação

| Dimensão | NanoBot | Hermes Agent | IronClaw | CoPaw | ZeroClaw |
|----------|---------|--------------|----------|-------|----------|
| **Público-alvo primário** | Desenvolvedores CLI/TUI | Usuários desktop Windows/macOS | Teams enterprise | Usuários QQ/DingTalk China | Desenvolvedores de plugins |
| **Arquitetura dominante** | Provider-agnostic com MCP | Desktop-first com gateway | Sandbox-first com hooks | Channel-first multi-tenant | Plugin-WASM modular |
| **Diferenciador técnico** | Multi-provider streaming | Desktop integration | Rust safety + sandbox | Mercado chinês channels | RFC-driven governance |
| **Debt técnico principal** | Legacy proxy support | Skills hub degradado | Memory write race | DB inflation | Windows stability |
| **Velocidade de release** | Informal (sem tags) | Informal | Formal (semver) | Beta (v2.1.1) | Informal |

**Análise de público:**
- **Hermes Agent** investe pesadamente em desktop (9+ issues de desktop simultâneas) — indica foco em experiência de usuário final
- **CoPaw** prioriza canais asiáticos (QQ, DingTalk) — estratégia de mercado geográfica
- **ZeroClaw** abraça complexidade arquitetural com RFC-driven development — atrai contribuidores de sistemas distribuídos

---

## 6. Tração e Maturidade da Comunidade

### Projetos em consolidação (maturidade alta)

| Projeto | Sinais de maturidade |
|---------|---------------------|
| **IronClaw** | Release formal com migration notes; épicos com fases numeradas (#7732 Step 1/2); documentação consolidada (−9,713 linhas) |
| **CoPaw** | Beta processado; security patches de dependências em <24h; métricas de QA (verification deadline) |

### Projetos em iteração rápida (maturidade baixa)

| Projeto | Sinais de immaturidade |
|---------|------------------------|
| **Hermes Agent** | 4 P1s críticos abertos; Skills Hub degradado há 34 dias; 65 comentários em 1 issue indicam priorização caótica |
| **ZeroClaw** | 8 RFCs simultâneas em discussão; PRs com `do-not-merge` label estagnados; decisão arquitetural pendente há 60+ dias |
| **NanoBot** | 2 PRs concorrentes para mesma migração (#5179 vs #5180); debate de trade-offs não resolvido |

### Projetos com engajamento declinante

| Projeto | Indicadores |
|---------|-------------|
| **PicoClaw** | Issue stale há 30 dias (#3281); apenas 6 comentários totais; 5 dependabot PRs vs 1 feature PR |

---

## 7. Sinais de Tendência

### 🚀 Tendências de mercado confirmadas

1. **Micropagamentos em agentes** (NanoBot #5447 x402/Solana)
   - Evidência: Integração de pagamentos para "security scans" em pipelines autônomos
   - Implicação: Modelo de marketplace para serviços de agentes está emergindo

2. **Observabilidade como feature obrigatória** (Todos os projetos)
   - Evidência: Turn observability (NanoBot), notification inbox (IronClaw), DORA telemetry (ZeroClaw)
   - Implicação: Agentes em produção requerem debuggability como requisito de primeira classe

3. **Mercado chinês como segmento prioritário** (CoPaw, NanoBot + SenseNova)
   - Evidência: Providers SenseNova (NanoBot), canais QQ/DingTalk (CoPaw)
   - Implicação: Soft segmentation geográfica com providers locais

4. **Segurança por design** (ZeroClaw liderando, Hermes secundário)
   - Evidência: mTLS obrigatório (ZeroClaw), terminal bypass P0 (Hermes), sandbox egress (IronClaw)
   - Implicação: Gate de consentimento e sandboxing são requisitos mínimos para adoção enterprise

5. **Multi-provider abstraction** (NanoBot, CoPaw)
   - Evidência: Debates sobre migration de SDK, roteamento automático de modelos (CoPaw #6436)
   - Implicação: Provider lock-in é dor real — Abstração consistente é diferencial competitivo

### 🔮 Previsões para os próximos 90 dias

| Projeto | Previsão |
|---------|----------|
| **IronClaw** | Release v1.4.0 com sandbox persistente e lifecycle hooks — posiciona como escolha enterprise default |
| **CoPaw** | GA de v2.1.1 com memory reforms; expansão de canais asiáticos |
| **ZeroClaw** | v0.9.0 focada em segurança com SOP contracts; potencial de的增长 se resolver Windows issues |
| **Hermes Agent** | Risco de fragmentação se P1s críticos não forem resolvidos — pode perder posição para IronClaw |
| **PicoClaw** | Risco de abandono silencioso se issue #3281 não for endereçada |

---

## Recomendações para Decisores

**Para adoção em produção:**
- **IronClaw** — menor risco técnico, processo de release maduro
- **NanoBot** — melhor DX para CLI, menor complexidade de deployment

**Para contribuidores:**
- **ZeroClaw** — maior superfície para contribuições arquiteturais
- **Hermes Agent** — alta demanda por desktop/Windows expertise

**Para investimento estratégico:**
- Observabilidade, segurança e memory persistence são competências técnicas com maior demanda transversal — projetos que resolverem esses três problemas primeiro capturarão adoção enterprise.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-21

---

## 1. Panorama do Dia

O NanoBot apresenta alta atividade de desenvolvimento no período analisado, com **29 PRs atualizados** nas últimas 24h — um volume significativo que indica sprints intensos de entrega. Das 4 issues reportadas, 2 foram fechadas com resolução, demonstrando boa cadência de triagem. O projeto mantém **17 pull requests abertas** em estados variados de revisão, com destaque para duas grandes iniciativas em conflito: a **migração do MCP para SDK v2** (#5179, #5180). A ausência de releases formais no período sugere que a equipe está consolidando mudanças para um próximo tag.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões neste período. A ausência de tags pode indicar que a equipe está em fase de freeze para consolidação das mudanças em curso, especialmente considerando os PRs de refatoração pesada em andamento (MCP SDK v2).

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (12 total)

| # | PR | Autor | Destaque |
|---|-----|-------|----------|
| **#1203** | `fix(cli): workaround 'Event loop is closed' on linux` | mameikiagou | Resolve bug crítico de shutdown em Python 3.11/Linux. Corrigiu issue #550 antiga. [[PR #1203](https://github.com/HKUDS/nanobot/pull/1203)] |
| **#5447** | Paid security-scan MCP integration | Misterio070 | Proposta de integração x402/Solana para pagamentos de segurança. [[PR #5447](https://github.com/HKUDS/nanobot/pull/5447)] |
| **#5452** | `feat(tui): print resume command on exit` | chengyongru | Melhora UX do TUI exibindo comando de resume ao sair. [[PR #5452](https://github.com/HKUDS/nanobot/pull/5452)] |
| **#5240** | `refactor(webui): unify floating controls` | Re-bin | Unifica controles flutuantes no WebUI, padronizando menus e popovers. [[PR #5240](https://github.com/HKUDS/nanobot/pull/5240)] |
| **#5425** | `bug` Support legacy socks:// proxy URLs | pxy0592 | Suporte a URLs `socks://` legadas em provedores customizados. [[Issue #5425](https://github.com/HKUDS/nanobot/issues/5425)] |

**Avanços principais:**
- **Estabilidade CLI/Linux**: O workaround do event loop resolve um problema recorrente em produção.
- **UX Terminal**: Comando de resume facilita retomadas de sessões no TUI.
- **WebUI**: Refatoração de controles flutuantes melhora consistência visual.

---

## 4. Temas Quentes da Comunidade

### PRs em Destaque por Engajamento

| # | Título | Comentários | Autor | Tema Central |
|---|--------|-------------|-------|--------------|
| **#5179** | Migrate MCP integration to SDK v2 | Alto | bingqilinweimaotai | Migração de API v1→v2 com compatibilidade legacy [[PR #5179](https://github.com/HKUDS/nanobot/pull/5179)] |
| **#5180** | Evaluate minimal SDK v2 migration | Alto | chengyongru | Avaliação alternativa mínima para mesma migração [[PR #5180](https://github.com/HKUDS/nanobot/pull/5180)] |
| **#5420** | `feat(webui): add turn observability` | Alto | Re-bin | Observabilidade de turnos e recovery seguro [[PR #5420](https://github.com/HKUDS/nanobot/pull/5420)] |

**Análise:** A comunidade está ativamente discutindo a migração do MCP para SDK v2. existem duas propostas concorrentes (#5179 com escopo completo vs #5180 minimal), indicando debate sobre trade-offs entre features e complexidade. O PR de observabilidade de turnos (#5420) sugere demanda por melhor debugabilidade em produção.

---

## 5. Bugs e Estabilidade

### Issues Abertas (Prioridade)

| # | Severidade | Título | Autor | Status |
|---|------------|--------|-------|--------|
| **#5444** | **Alta** | OAuth login falha no Docker | Bennett-Yang | 🟡 Aberta, 1 comentário [[Issue #5444](https://github.com/HKUDS/nanobot/issues/5444)] |
| **#5454** | **Alta** | Streaming: retry não funciona após stream iniciar | akinolur | 🟡 Aberta, 0 comentários [[Issue #5454](https://github.com/HKUDS/nanobot/issues/5454)] |

### Detalhamento

**#5444 — OAuth OpenAI falha no Docker**
- **Problema**: Usuário não consegue completar login OAuth ao rodar nanobot em container Docker.
- **Impacto**: Bloqueia autenticação em setups containerizados, cenário comum em produção.
- **Dica**: Provavelmente relacionado a redirect URI `localhost:1455` não exposto corretamente.

**#5454 — Retry em streaming providers**
- **Problema**: Erros `server_error` do Codex não disparam retry após conteúdo já ter começado a streamar.
- **Impacto**: Transientes falhas de API resultam em respostas incompletas em vez de retry automático.
- **关联**: PR #5455 implementa correção parcial [[PR #5455](https://github.com/HKUDS/nanobot/pull/5455)].

### PRs de Bug em Andamento

| # | Prioridade | Título | Escopo |
|---|------------|--------|--------|
| **#5455** | P2 | Retry Codex server_error | Provider streaming [[PR #5455](https://github.com/HKUDS/nanobot/pull/5455)] |
| **#5457** | P2 | Channel dispatcher exception boundary | Channels [[PR #5457](https://github.com/HKUDS/nanobot/pull/5457)] |
| **#5413** | P2 | Fallback policy para exceptions | Providers [[PR #5413](https://github.com/HKUDS/nanobot/pull/5413)] |
| **#5414** | P2 | Validar downloads Slack com redirects | Slack [[PR #5414](https://github.com/HKUDS/nanobot/pull/5414)] |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features

| # | Feature | Autor | Tags | Relevância |
|---|---------|-------|------|------------|
| **#5453** | **SenseNova provider** (商汤日日新) | morandot | `provider`, `new-provider` | Adiciona provedor chinês mainstream [[PR #5453](https://github.com/HKUDS/nanobot/pull/5453)] |
| **#5387** | Stickers reutilizáveis no Telegram | dajiaohuang | `telegram` | Melhora integração Telegram [[PR #5387](https://github.com/HKUDS/nanobot/pull/5387)] |

### Sinais de Roadmap

1. **MCP SDK v2 Migration** (#5179, #5180): Indica direção de modernização da arquitetura MCP. A existência de dois PRs concorrentes sugere que a decisão está em avaliação ativa.
2. **Observabilidade de Turnos** (#5420): Demanda crescente por debug em agentes autônomos em produção.
3. **x402/Solana Payments** (#5447): Integração com micropagamentos pode indicar monetização futura ou modelo de marketplace.
4. **SenseNova Provider** (#5453): Expansão geográfica para mercado chinês — sinal de estratégia de mercado.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Tipo | Descrição | Evidência |
|------|-----------|-----------|
| **Setup Docker** | Autenticação OAuth quebrada em containers | [[Issue #5444](https://github.com/HKUDS/nanobot/issues/5444)] |
| **Proxies Legacy** | URLs `socks://` não funcionam em provedores customizados | [[Issue #5425](https://github.com/HKUDS/nanobot/issues/5425)] — **✅ Resolvido** |
| **Resiliência Streaming** | Falhas transientes em streaming não recuperam | [[Issue #5454](https://github.com/HKUDS/nanobot/issues/5454)] |

### Cenários de Uso Emergentes

- **Agentes autônomos com receita**: Integração com pagamentos x402 sugere uso em pipelines comerciais autônomos.
- **Mercado chinês**: Request por SenseNova indica demanda de usuários na China.
- **Debugging em produção**: Múltiplos PRs de observabilidade e logging indicam uso em ambientes críticos.

### Indicadores de Satisfação

- **2 de 4 issues fechadas em 24h**: Taxa de resolução de 50% indica responsiveness da equipe.
- **12 PRs merged**: Alta cadência de entrega, sinal de projeto ativo.
- **Comentários ativos em PRs de migração**: Comunidade engajada em decisões arquiteturais.

---

## 8. Backlog que Merece Atenção

### Items sem Resposta há >3 dias

| # | Tipo | Título | Criado | Dias Inativo |
|---|------|--------|--------|--------------|
| **#5447** | Issue | Paid security-scan MCP integration | 2026-08-19 | 2 dias sem resposta |
| **#5444** | Issue | OAuth Docker bug | 2026-08-19 | 2 dias, 1 comentário |
| **#5387** | PR | Telegram stickers | 2026-08-13 | 7 dias |
| **#5379** | PR | Memory consolidation fix | 2026-08-13 | 7 dias, com conflito |

### Items de Alto Impacto Pendentes

| # | Prioridade | Título | Por que merece atenção |
|---|------------|--------|------------------------|
| **#5180** | P1 | Minimal SDK v2 evaluation | Decisão de arquitetura bloqueia outras mudanças |
| **#5179** | P1 | Full SDK v2 migration | Grande refatoração com conflito vs #5180 |
| **#5444** | Alta | OAuth Docker | Bloqueia usuários em produção containerizada |
| **#5454** | Alta | Streaming retry | Afeta reliability em tempo real |

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues fechadas/abertas (24h) | 2/2 | 🟢 Equilibrado |
| PRs merged (24h) | 12 | 🟢 Muito ativo |
| PRs abertas em conflito | 3 | 🟡 Requer resolução |
| Bugs críticos abertos | 2 | 🟡 Atenção necessária |
| Releases (24h) | 0 | ⚪ Nenhuma |

---

**Próximos marcos a monitorar:** Resolução do debate MCP SDK v2, correção do bug OAuth Docker, e merge da integração SenseNova.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-21

---

## 1. Panorama do Dia

O Hermes Agent mantém um ritmo de atividade intenso com **50 issues e 50 PRs atualizados nas últimas 24h**, indicando alta movimentação tanto na triagem de problemas quanto no desenvolvimento. **Nenhuma release foi publicada** no período, sinalizando que a equipe está em ciclo de preparação ou validação antes do próximo lançamento. Dos 30 issues mais comentados, 27 permanecem abertos, evidenciando acúmulo de pendências técnicas — especialmente nas áreas de desktop, gateway e integração com plataformas externas (Discord, Slack). A taxa de fechamento de issues (5/50) é baixa em comparação ao volume de abertura, sugerindo gargalos em review ou priorização.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em período pré-release, com diversas correções acumuladas no pipeline (incluindo P1s críticos como corrupções de `state.db` e falhas no `hermes update`). Recomenda-se monitorar o repositório para announcements nas próximas 48–72h.

---

## 3. Progresso do Projeto

As seguintes PRs foram **fechadas/merged** hoje, representando avanço concreto:

| # | PR | Componente | Impacto |
|---|-----|------------|---------|
| [#91071](https://github.com/NousResearch/hermes-agent/pull/91071) | fix(cron): route multiplex cron delivery through each profile's adapters | gateway, cron | **Alto** — Corrige roteamento de cron em ambientes multiplexados; duplicata de #83182 |
| [#91060](https://github.com/NousResearch/hermes-agent/issues/91060) | [Bug]: Windows 11 desktop chat window cannot be snapped | desktop, windows | **Médio** — Resolveu problema de janela do desktop não responder a Win+Arrow |
| [#90013](https://github.com/NousResearch/hermes-agent/issues/90013) | Grok Imagine Image 2.0 catalog defaults upscale=on | tool/vision | **Médio** — Restaurou conformidade do catálogo com política de defaults |
| [#91019](https://github.com/NousResearch/hermes-agent/pull/91019) | feat(compression): opt-in deferral of preflight compaction | agent | **Médio** — Permite adiar compactação para janela de inatividade |
| [#32767](https://github.com/NousResearch/hermes-agent/issues/32767) | Workflow Pilot validate infra docs/template | docs | **Baixo** — Validação concluída |
| [#49665](https://github.com/NousResearch/hermes-agent/issues/49665) | _venv_scripts_dir() hardcodes "venv" | cli | **Alto** — Corrigiu detecção de quarantine em Windows com `.venv` |
| [#90962](https://github.com/NousResearch/hermes-agent/pull/90962) | fix(deps): refresh security-sensitive dependency pins | deps | **Médio** — Atualização de pins sensíveis |

**PR em destaque:** A fix em [#91071](https://github.com/NousResearch/hermes-agent/pull/91071) resolve um problema crítico de entrega de cron jobs em ambientes Docker com múltiplos perfis, um cenário cada vez mais comum em implantações production.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

| # | Título | Comentários | 👍 | Área | Insight |
|---|--------|-------------|----|------|---------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index is stale or degraded | 65 | 0 | skills-index | **Mais comentada** — Degraded há 29.8h (limite 26h). Impacta /docs/skills. Prioridade operacional alta |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Automated Nous integration is blocked | 11 | 0 | cron | Cron de merge Nous→Enterkey com conflitos em `cron/jobs.py`; afeta pipeline de CI/CD |
| [#58705](https://github.com/NousResearch/hermes-agent/issues/58705) | Qdrant lock conflict with mem0 OSS | 8 | 1 | memory | Bug recorrente: lock de arquivo Qdrant em uso quando plugin tenta re-abrir |
| [#83529](https://github.com/NousResearch/hermes-agent/issues/83529) | [Bug]: hermes update destroys hermes | 8 | 0 | cli/install | **P1** — Update destrói o Hermes; cenário grave em produção |
| [#79406](https://github.com/NousResearch/hermes-agent/issues/79406) | Profile switch causes wrong AGENTS.md | 5 | 0 | desktop | CWD herdado do perfil anterior quebra contexto de projeto |
| [#79772](https://github.com/NousResearch/hermes-agent/issues/79772) | Slack Feature Parity meta-issue | 5 | 0 | slack | Epic de paridade Slack — indica demanda por maturidade em plataforma específica |
| [#89346](https://github.com/NousResearch/hermes-agent/issues/89346) | Shared primary profile routes reload session | 3 | 1 | profiles | Regressão pós #88734; afeta multiplexação de sessões |

**Análise:** A comunidade demonstra forte preocupação com **estabilidade do Skills Hub** (#66616) e **failures de update** (#83529). O volume de comments em #66616 (65) supera em 5x qualquer outra issue, indicando que a degradação do índice afeta diretamente a experiência de desenvolvimento dos usuários.

---

## 5. Bugs e Estabilidade

### Por Severidade:

#### **P1 — Críticos (4 issues)**

| # | Título | Área | Status |
|---|--------|------|--------|
| [#83529](https://github.com/NousResearch/hermes-agent/issues/83529) | hermes update destrói hermes | cli/install | Aberto |
| [#64155](https://github.com/NousResearch/hermes-agent/issues/64155) | hermes-gateway slow shutdown on SIGTERM | gateway | Aberto |
| [#90950](https://github.com/NousResearch/hermes-agent/issues/90950) | state.db corruption WAL under concurrent writer | agent/gateway | Aberto |
| [#90789](https://github.com/NousResearch/hermes-agent/issues/90789) | **[Security]** terminal(background=true) bypasses consent gate | tools/terminal | Aberto |

> ⚠️ **Security:** #90789 representa bypass de segurança — comandos perigosos ignoram o consent gate quando executados em background. Precisa triagem imediata.

#### **P2 — Altos (9 issues)**

| # | Título | Área |
|---|--------|------|
| [#90985](https://github.com/NousResearch/hermes-agent/issues/90985) | Context compaction loses in-flight tool calls | compression |
| [#89346](https://github.com/NousResearch/hermes-agent/issues/89346) | Session reload from root store after #88734 | profiles |
| [#88521](https://github.com/NousResearch/hermes-agent/issues/88521) | Multiple profile gateways kill each other's processes | docker/profiles |
| [#90929](https://github.com/NousResearch/hermes-agent/issues/90929) | Entire Environment Just Spon Down | cli |
| [#90047](https://github.com/NousResearch/hermes-agent/issues/90047) | hooks doctor false positive | cli/hooks |
| [#90365](https://github.com/NousResearch/hermes-agent/issues/90365) | Desktop model settings can't confirm data-training tiers | desktop |
| [#91068](https://github.com/NousResearch/hermes-agent/issues/91068) | Sidebar search shows matched content as session name | desktop |
| [#83264](https://github.com/NousResearch/hermes-agent/issues/83264) | Hindsight wrongly seen as not installed | cli/plugins |
| [#49665](https://github.com/NousResearch/hermes-agent/issues/49665) | _venv_scripts_dir hardcodes "venv" | cli |

#### **P3 — Médios (12+ issues)**

Problemas em Discord thread backfill, browser_exec hijacking, i18n coverage limitado, SQLite FTS5 boolean operators, Windows settings display, Docker WSL reconnect, e outros.

**Tendência:** Alta concentração de bugs em **desktop** (9 issues) e **profiles/sessions** (4 issues), indicando necessidade de investimento em testing在这些 áreas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em destaque:

| # | Título | Área | Prioridade |
|---|--------|------|------------|
| [#90866](https://github.com/NousResearch/hermes-agent/issues/90866) | **[Architecture]** Make observable state proof-carrying from source to side effect | agent/gateway | P3, needs-decision |
| [#79772](https://github.com/NousResearch/hermes-agent/issues/79772) | Slack Feature Parity & @Hermes Tag Campaign | slack | Meta-epic |
| [#89347](https://github.com/NousResearch/hermes-agent/issues/89347) | Desktop (macOS): group sessions by bot in sidebar | desktop | P3 |
| [#23574](https://github.com/NousResearch/hermes-agent/issues/23574) | Extend zh i18n coverage | cli/tui | P3 |
| [#91019](https://github.com/NousResearch/hermes-agent/pull/91019) | **[Merged]** feat(compression): opt-in deferral of preflight compaction | compression | ✅ Closed |
| [#91072](https://github.com/NousResearch/hermes-agent/pull/91072) | feat(desktop): global Bot Mode roster | desktop | P3 |
| [#91066](https://github.com/NousResearch/hermes-agent/pull/91066) | feat(mcp): add Loops to optional catalog | mcp | P4 |

**Sinais de roadmap:**
- **Observabilidade de estado** (#90866) — padrão arquitetural emergindo como prioritário para debuggability
- **Paridade Slack** (#79772) — investimento contínuo em plataformas de mensageria
- **Desktop maturation** — múltiplas features de UX (sidebar, Bot Mode, grupos de sessão)
- **MCP ecosystem expansion** (#91066) — Loops adicionado ao catálogo opcional

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes identificadas:

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Update/install instável** | `hermes update` falha catastrophicamente, destrói instalação | 2+ reports (P1) |
| **Desktop instabilidade** | Snapping no Windows, reconnect WSL, corruption native deps | 4+ reports |
| **Session/profile confusão** | CWD herdado, history reload, multiplex routing broken | 3+ reports |
| **Platform Discord** | Thread backfill perde contexto, history particionada | 2+ reports |
| **CLI reliability** | Hooks doctor false positive, environment spin down | 2+ reports |

### Cenários de uso emergentes:

1. **Usuários Windows power** — Requisito forte de compatibilidade com WSL2, native deps, e ferramentas de janela (P1s em desktop)
2. **Multi-profile deployments** — Docker com s6 supervisor + múltiplos gateways — padrão de produção identificado em #88521
3. **MCP integrations** — Expansão do catálogo com Loops; usuários pedindo mais providers
4. **Memory plugins** — Qdrant + mem0 OSS é cenário comum com problemas de lock

**Satisfação geral:** Moderada a baixa, evidenciada pelo volume de P1s abertos e a degradação do Skills Hub afetando documentação.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou estagnadas (>7 dias sem atualização da equipe):

| # | Título | Criado | Comentários | Prioridade | Obs |
|---|--------|--------|-------------|------------|-----|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index stale | 2026-07-18 | 65 | Degraded | **Alta latência** — 34 dias, 65 comments; impacto operacional |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | Automated Nous integration blocked | 2026-08-17 | 11 | P3 | 4 dias sem resolução — bloqueia pipeline CI/CD |
| [#58705](https://github.com/NousResearch/hermes-agent/issues/58705) | Qdrant lock conflict | 2026-07-05 | 8 | P3 | **47 dias** — bug recorrente |
| [#79406](https://github.com/NousResearch/hermes-agent/issues/79406) | Profile switch wrong AGENTS.md | 2026-08-05 | 5 | P2 | 16 dias |
| [#42079](https://github.com/NousResearch/hermes-agent/issues/42079) | Discord thread history loses context | 2026-06-08 | 3 | P3 | **74 dias** — PR #42075 em aberto há ~74 dias |
| [#89143](https://github.com/NousResearch/hermes-agent/issues/89143) | browser_exec hijacks Chrome | 2026-08-18 | 1 | P3 | 3 dias |
| [#88521](https://github.com/NousResearch/hermes-agent/issues/88521) | Docker profile gateways kill each other | 2026-08-17 | 1 | P2 | 4 dias |
| [#90047](https://github.com/NousResearch/hermes-agent/issues/90047) | hooks doctor false positive | 2026-08-19 | 1 | P2 | 2 dias |

### PRs em revisão há >7 dias sem merge:

| # | Título | Criado | Componente | Obs |
|---|--------|--------|------------|-----|
| [#79708](https://github.com/NousResearch/hermes-agent/pull/79708) | refactor(cli): extract status-bar/skill-command mixins | 2026-08-05 | cli | 16 dias; wave-3-verified |
| [#42075](https://github.com/NousResearch/hermes-agent/pull/42075) | fix(d

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw
## Data: 2026-08-21

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** nas últimas 24h, com 3 issues ativas e 7 pull requests em circulação. A atividade de PRs é dominada por atualizações de dependências automatizadas (5 dependabot PRs), enquanto duas contribuições significativas foram fechadas: a correção do arquivo `pnpm-lock.yaml` e a implementação do protocolo `anthropic-messages` para API nativa Anthropic. Não houve lançamentos de novas versões, e as issues em aberto concentram-se em melhorias de performance da UI e extensibilidade do sistema de agentes.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em um período sem publicações formais, o que pode indicar foco em consolidação de contribuições pendentes antes de um próximo release tag.

---

## 3. Progresso do Projeto

### PRs merged/fechadas hoje:

| PR | Título | Impacto |
|----|--------|---------|
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) | fix(web): repair unparseable pnpm-lock.yaml | 🔧 **Crítico** — Corrige bloqueio do build do frontend |
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | feat: add anthropic-messages protocol for native Anthropic API format | ✨ **Feature** — Adiciona suporte à API `/v1/messages` |

**Destaque - PR #1158:** Implementação completa do protocolo `anthropic-messages` que permite integração com serviços proxy compatíveis com Anthropic que suportam apenas o formato nativo Messages API (`/v1/messages`), resolvendo a issue #269. Este é um avanço significativo para flexibilidade de backend.

**Destaque - PR #3318:** Correção essencial do arquivo `pnpm-lock.yaml` que continha chaves duplicadas (`semver@7.8.5`), impedindo o build do frontend. Resolveu blocking issue para desenvolvedores.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento:

| Issue | Título | Comentários | Reações |
|-------|--------|-------------|---------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | [BUG] Web UI chat input is very laggy when history has a little bit long | 6 | 👍 1 |
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) | [Feature] Support any models with /audio/transcriptions endpoint | 1 | - |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) | [Feature] Support dynamic model override in delegate/spawn/subagent tools | 1 | - |

**Análise:** A issue **#3281** lidera em engajamento com 6 comentários, indicando que a **performance do chat input na Web UI** é a principal dor dos usuários. O bug está marcado como `[stale]`, sugerindo necessidade de atenção da equipe.

---

## 5. Bugs e Estabilidade

### Issue de bug ativa:

| Severidade | Issue | Descrição |
|-------------|-------|-----------|
| 🟡 **Média** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Input laggy na Web UI quando histórico de chat cresce. **Ambiente:** PicoClaw 0.3.1, Go 1.25.11 |

**Análise de causa:** O problema parece estar na forma como o histórico de mensagens é processado no frontend, causando lentidão no input box. Possível necessidade de otimização de re-renderização ou virtualização de lista.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas:

| Issue | Feature | Complexidade Estimada |
|-------|---------|----------------------|
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) | Suporte a modelos genéricos no endpoint `/audio/transcriptions` (além de "*-whisper-*") | Média |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) | Override dinâmico de modelo nas tools `delegate`, `spawn` e `subagent` | Alta |

**Análise de Roadmap:**
- **#3330** representa uma demanda significativa de extensibilidade — permite que calling agents especifiquem modelos específicos no momento da chamada, rompendo a dependência de configuração estática. Isso alinharia o comportamento com práticas modernas de orquestração de agentes.
- **#3331** visa modernizar a integração ASR (Automatic Speech Recognition), permitindo uso de modelos mais recentes e eficientes.

---

## 7. Resumo de Feedback dos Usuários

### Dores identificadas:

1. **Performance da Web UI** — Usuários relatam lentidão significativa ao digitar em sessões com histórico moderado de chat (issue #3281). Impacta experiência diária de uso.

2. **Limitações de integração ASR** — A obrigatoriedade de usar apenas modelos "*-whisper-*" é considerada restritiva e baseada em modelos desatualizados (issue #3331).

3. **Rigidez na seleção de modelos em agentes** — Ferramentas de delegação/spawn não permitem sobrescrita dinâmica de modelo, limitando flexibilidade em arquiteturas multi-agente (issue #3330).

### Cenário de uso evidenciado:
Uso típico envolve sessões de chat prolongadas via Web UI com integração de modelos LLM (Go 1.25.11) e capacidades de transcrição de áudio — sugerindo foco em assistentes de IA conversationais.

---

## 8. Backlog que Merece Atenção

### Issues stale sem resposta significativa:

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | ~30 dias | `stale` + 6 comentários | 🔴 **Alta** — Bug afeta UX |
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) | ~8 dias | `stale` | 🟡 **Média** — Feature request |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) | ~8 dias | `stale` | 🟡 **Média** — Feature request |

**Recomendação:** A issue #3281 está há aproximadamente 30 dias com `stale` marker e 6 comentários de usuários confirmando o problema. **Recomenda-se triagem imediata** para priorização de correção, dado o impacto direto na experiência do usuário final.

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Observação |
|-----------|--------|------------|
| 🔄 Atividade de PRs | ✅ Saudável | 2 PRs fechados (feature + fix) + 5 dependabot updates |
| 🐛 Issues bugs | ⚠️ Atenção | 1 bug de UX significativo (stale) |
| 📦 Releases | ⚠️ Estável | Nenhuma release recente |
| 🏗️ Manutenção dependências | ✅ Ativa | 5 dependabot PRs em aberto |
| 👥 Engajamento comunidade | 🟡 Moderado | 6 comentários na issue principal |

---

*Relatório gerado em 2026-08-21. Dados fonte: GitHub sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-21

---

## 1. Panorama do Dia

O projeto IronClaw mantém um ritmo de desenvolvimento intenso com **33 PRs e 14 issues atualizadas nas últimas 24h**, demonstrando alta atividade tanto em código quanto em discussão técnica. A release **v1.3.0** foi promovida a estável em 2026-08-19, consolidando correções de container e upgrades desde a versão 1.2. Os trabalhos atuais concentram-se em dois épicos principais: **sandbox persistente por usuário (#7732)** e **extensão do sistema de hooks do ciclo de vida do agente (#7770)**, ambos em progresso coordenado através de múltiplas PRs sequenciais. A saúde geral do projeto é positiva, com 3 PRs fechadas hoje aliviando o backlog e 2 correções críticas de CI (clippy 1.98) restaurando o pipeline de merge.

---

## 2. Lançamentos

### ironclaw-v1.3.0 — 2026-08-19

**Status:** Estável (promovido de 1.3.0-rc.2)

**Mudanças incluídas:**

| Escopo | Detalhes |
|--------|----------|
| **Correção de container** | Upgrades desde a versão 1.2 agora aceitam e preservam o campo `activation_state` da extensão, eliminando crash-loops durante inicialização. |
| **Correções RC2** | Todas as validações realizadas na release candidate 2 foram incorporadas. |

**Breaking changes:** Nenhuma identificada nesta promoção.

**Notas de migração:** Para instalações que fizeram upgrade de 1.2 → 1.3, o campo `activation_state` da extensão era anteriormente ignorado/corrompido durante transições de estado. Este release corrige o comportamento, e extensões já configuradas devem ser revalidadas para confirmar que o estado persiste corretamente.

🔗 [Release ironclaw-v1.3.0](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.3.0)

---

## 3. Progresso do Projeto

### PRs Fechadas/Mergidas Hoje (3)

| PR | Escopo | Impacto |
|----|--------|---------|
| **#7764** feat(sandbox): persistent per-user container with Docker Exec | 🔴 Alta | Substitui containers por comando por **um container reutilizável por `(tenant, user)`**, executado via Docker Exec (~40ms). Reutiliza `RebornSandboxUserKey` para identidade estável. Marco fundamental para o épico #7732. |
| **#7778** fix(lints): Rust 1.98 clippy migration | 🟡 Média | Restaura CI vermelho com 4 novos lints do clippy 1.98. Workspace 100% limpo com `cargo +1.98.0 clippy --workspace --all-features --tests -- -D warnings`. |
| **#7761** fix(runtime): bound provider diagnostic stack footprint | 🟢 Baixa | Limita o footprint de erros de autenticação com `DispatchAuthRequirement` compartilhado e boxing nos 3 pontos de erro reais. Preserva segredos e diagnóstico visível ao modelo. |

### Destaque de Progresso Estratégico

**#7764** representa o **Step 1 do épico de sandbox persistente (#7732)** — uma mudança arquitetural significativa que reduz latência de execução e permite isolamento correto por usuário. O Step 2 (#7779) já está em revisão, avançando rapidamente na mesma direção.

🔗 [PR #7764](https://github.com/nearai/ironclaw/pull/7764) | [PR #7778](https://github.com/nearai/ironclaw/pull/7778) | [PR #7761](https://github.com/nearai/ironclaw/pull/7761)

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Comentários | Tipo | Análise da Demanda |
|-------|-------------|------|-------------------|
| **#7732** Epic: Persistent per-user sandbox with iron-proxy | 8 | 🏗️ Arquitetura | O problema central é que o Docker atual cria/remove containers por comando shell, sem persistência adequada. A solução proposta introduz um proxy gerenciado por `(tenant, user)`. Demanda de alta prioridade para workloads de produção. |
| **#7770** Epic: hook the agent lifecycle | 3 | 🏗️ Arquitetura | Extensão do sistema `ironclaw_hooks` para cobrir momentos ausentes (after-turn, before-turn, compaction, tool-result seams). Fase 1 (#7765) já implementa `AfterTurn` com curadoria de memória como primeiro consumidor. |
| **#5998** Reborn não tem transport para MCP server local | 1 | 🔧 Funcional | stdio é rejeitado e HTTP loopback é negado (`https`-only). Deixa usuário sem opção para MCP local. Problema Reported há ~40 dias sem resolução ainda. |

### PRs em Destaque por Complexidade

| PR | Tamanho | Risco | Escopo |
|----|---------|-------|--------|
| **#7711** feat(wasm): typed tool response, guest migration | XL | 🟢 Baixo | PR final da pilha de normalização de resposta de capabilities (#7627). Remove shim de compatibilidade 0.3.0 e consolida tipagem. |
| **#7491** feat(coding): omp core-tool contract + engines | XL | 🟡 Médio | Redução de 6 ferramentas de arquivo para superfície coesa com nomes exatos: `read`, `write`, `edit`, `glob`, `grep`, `bash`. Remoção de result reader separado e velhos surface. |
| **#7699 + #7700** feat(notifications): gates + run outcomes | XL | 🟡 Médio | Sistema de notificações durável com IDs estáveis, deduplicação, resolução automática de gates, e publicação de outcomes authoritative. |

🔗 [Issue #7732](https://github.com/nearai/ironclaw/issues/7732) | [Issue #7770](https://github.com/nearai/ironclaw/issues/7770) | [Issue #5998](https://github.com/nearai/ironclaw/issues/5998)

---

## 5. Bugs e Estabilidade

### Issues Abertas de Bug

| Issue | Severidade | Descrição | Status |
|-------|------------|-----------|--------|
| **#7776** memory.write needs expected-version mode | ⚠️ Alta | `ironclaw.memory.write` com `append: false` é read-modify-write. CAS protege contra TORN write, mas retry em conflito de versão não é implementado — rewrites completas podem sobrescrever modificações concorrentes silenciosamente. | Aberta |
| **#7771** Daily ironclaw failure taxonomy — 2026-08-20 | 🔍 Observação | Análise de 58 failures no benchmark officeqa — predominantemente erros genuínos de qualidade do modelo DeepSeek-V4-Flash, não bugs de sistema. | Aberta (taxonomia) |

### Correções Recentes de Estabilidade

| PR | Escopo | Melhoria |
|----|--------|----------|
| **#7777** fix(ci): clear clippy 1.98 lint cascade | CI | Resolveu 4 novos lints clippy que estavam bloqueando merge queue. `main` estava vermelho no step "Check all-target lints". |
| **#7778** fix(lints): Rust 1.98 clippy migration | Lints | Limpou workspace completo para Rust 1.98, zerando warnings em todas as branches. |

### Observação de Regressão Potencial

**#7776** menciona que a claim "CAS makes this safe" do PR #7765 era "half true". A correção está pendente de implementação, indicando que a própria PR #7765 pode conter uma falha latente que precisa ser endereçada.

🔗 [Issue #7776](https://github.com/nearai/ironclaw/issues/7776) | [Issue #7771](https://github.com/nearai/ironclaw/issues/7771) | [PR #7777](https://github.com/nearai/ironclaw/pull/7777)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas (Issues Abertas)

| Issue | Tipo | Demanda | Sinais de Roadmap |
|-------|------|---------|-------------------|
| **#7775** Unbound runs: skip gating capability | Enhancement | Runs sem conversation surface devem pular capabilities bloqueantes ao invés de abortar com `gate_not_supported`. Abre caminho para background work. | v1.4.0 backlog |
| **#7780** AfterTurn: scheduler-side failure terminalization bypass | Enhancement | `AfterTurn` só dispara em APPLIED exits. Falhas via scheduler (driver failure, exit-application) precisam de tratamento dedicado. | Depende de #7765 |
| **#7769** Surface extension setup phase and blockers in Configure | UX | Configure mostra apenas blocker de autenticação MCP hosted. Outros blockers (ex: setup incompletos) são descartados silenciosamente. | WebUI improvement |
| **#7044** Onboarding to channel-first approach | Epic | Usuário novo encontra blank slate — precisa de onboarding guiado para primeiro use case. | v1.4.0 epic |

### PRs de Feature em Andamento

| PR | Escopo | Feature |
|----|--------|---------|
| **#7765** feat(hooks): AfterTurn lifecycle point + memory curation | Core | Phase 1 do épico #7770 — primeiro hook point act-capable, com curadoria de memória como consumidor inicial. |
| **#7779** feat(sandbox): route user-sandbox egress through proxy | Sandbox | Step 2 de #7732 — egresso do sandbox flui por iron-proxy sidecar em vez de `--network none`. |
| **#7729** feat(automations): add run-now across trigger domain | Automations | Fire manual atômico que preserva schedule, exposto via API e WebUI. |
| **#7699** feat(notifications): publish actionable run gates | Notifications | Notificações duráveis para gates de aprovação, autenticação e blocked runs. |
| **#7698** feat(webui): generalize notification center | WebUI | Substitui modelo de notificação automation-only por inbox genérico com ações e lifecycle state. |

🔗 [Issue #7775](https://github.com/nearai/ironclaw/issues/7775) | [Issue #7780](https://github.com/nearai/ironclaw/issues/7780) | [Issue #7044](https://github.com/nearai/ironclaw/issues/7044)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas (via Issues)

| Tema | Frequência | Contexto |
|------|------------|----------|
| **Sem transporte para MCP local** | Alta | Issue #5998 aberta há ~40 dias — `stdio` rejeitado, HTTP loopback negado. Afeta desenvolvedores que querem executar MCP servers locais (ex: debugging, integrações on-premise). |
| **Blank slate onboarding** | Observação | #7044 identifica que novos usuários não têm guidance — "don't know what to do with it". Impacta adoção. |
| **Configuração de extensão incompleta** | UI bug | #7769 — Configure modal não mostra todos os blockers de setup, usuário pode achar que configuração está ok quando não está. |
| **Settings/Extensions tabs órfãos** | UI debt | #7768 — tabs sem uso prático poluem navegação e metadata já está desatualizada. |

### Sinais de Satisfação

- **Atividade de CI alta e responsiva**: Correção de clippy 1.98 em <24h demonstra pipeline saudável.
- **Progresso em épicos arquiteturais**: Dois épicos importantes (#7732, #7770) avançando com PRs sequenciais bem organizadas.
- **Documentação consolidada**: PR #7763 reduz 7 design docs contraditórias a um README canônico (net −9,713 linhas).

🔗 [Issue #5998](https://github.com/nearai/ironclaw/issues/5998) | [Issue #7044](https://github.com/nearai/ironclaw/issues/7044) | [Issue #7769](https://github.com/nearai/ironclaw/issues/7769)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resolução há >7 dias

| Issue | Idade | Prioridade | Motivo para Atenção |
|-------|-------|------------|---------------------|
| **#5998** Reborn sem transport para MCP local | ~40 dias | 🔴 Alta | Funcionalidade básica faltando — nenhum work-around disponível. Afeta caso de uso válido (MCP local/dev). |
| **#7044** Onboarding to channel-first | ~18 dias | 🟡 Média | Epic v1.4.0, mas primeiro contato do usuário é crítico para adoção. Sem owner aparente. |
| **#7688** Durable notification inbox contracts | ~4 dias | 🟢 Baixa | Já closed, indicando trabalho em progresso. |

### Issues Arquiteturais Pendentes de Decisão

| Issue | Escopo | Decisão Pendente |
|-------|--------|------------------|
| **#7732** Epic: Persistent per-user sandbox | Sandbox | Step 1 (#7764) merged, Step 2 (#7779) em review. Decisão sobre proxy configuration finalizada? |
| **#7770** Epic: hook agent lifecycle | Hooks | Phase 1 (#7765) em review com issue derivada #7780 sobre failure terminalization. Decisão sobre treatment de erros? |
| **#7776** memory.write expected-version | Storage | Bug encontrado em review de #7765. Requer implementação de retry/conflict resolution. |

### Métricas de Backlog

| Métrica | Valor | Observação |
|---------|-------|------------|
| Issues abertas totais (24h) | 11 | Volume normal |
| PRs abertas totais (24h) | 19 | Alta atividade |
| PRs em tamanho XL | 8 | Esforço significativo concentrado |
| Issues sem comentários | 8 | ~57% das issues precisam de triagem |

🔗 [Issue #5998](https://github.com/nearai/ironclaw/issues/5998) | [Issue #7044](https://github.com/nearai/ironclaw/issues/7044) | [Issue #7776](https://github.com/nearai/ironclaw/issues/7776)

---

## Resumo

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw (QwenPaw) — 2026-08-21

---

## 1. Panorama do Dia

O projeto **CoPaw (QwenPaw)** demonstra alta atividade de desenvolvimento no período analisado. Foram registradas **27 issues** e **50 PRs** atualizadas nas últimas 24h, indicando uma cadência intensa de trabalho — tanto em correções quanto em novas funcionalidades. A release **v2.1.1-beta.1** foi publicada hoje, sinalizando que o ciclo de desenvolvimento está em ritmo acelerado de preparação para a próxima versão estável. A comunidade reportou bugs críticos (congelamentos, falhas de rede, banco de dados inflado) e submeteu diversas feature requests, demonstrando forte engajamento. O equilíbrio entre correções de estabilidade e expansão de funcionalidades evidencia um projeto saudável e em evolução constante.

---

## 2. Lançamentos

### v2.1.1-beta.1 — Publicada em 2026-08-20

| Mudança | Autor | PR |
|---------|-------|-----|
| **feat(console):** Melhoria no overflow de navegação da aba editor | @rayrayraykk | [#6983](https://github.com/agentscope-ai/QwenPaw/pull/6983) |
| **fix(providers):** Redução do log level do rate limiter init | @rayrayraykk | [#6988](https://github.com/agentscope-ai/QwenPaw/pull/6988) |
| **chore:** Atualização das notas de release | — | — |

**Status:** Beta — verification deadline: 2026-08-20 14:43 UTC

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged Hoje (Destaques)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#7161](https://github.com/agentscope-ai/QwenPaw/pull/7161) | `feat(console): add artifacts to assistant response card` | Maior riqueza visual nas respostas do assistente |
| [#7174](https://github.com/agentscope-ai/QwenPaw/pull/7174) | `perf(drivers): initialize persistent drivers concurrently` | **Redução significativa de cold-start** — drivers carregados em paralelo |
| [#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880) | `feat(console): unify apps, plugins, and skills in the marketplace` | Unificação das marketplaces (apps, plugins, skills) em `/market` |
| [#6371](https://github.com/agentscope-ai/QwenPaw/pull/6371) | `fix(file-handling): continue fallback after downloader timeout` | **Correção de robustez** — fallback wget→curl→urllib agora trata `TimeoutExpired` corretamente |
| [#7166](https://github.com/agentscope-ai/QwenPaw/pull/7166) | `fix(release): bundle qwenpawmail MCP as standalone sidecar` | Melhoria noempacotamento do MCP de email |
| [#7172](https://github.com/agentscope-ai/QwenPaw/pull/7172) | `chore(deps): patch vulnerable website and creator dependencies` | **Patch de segurança** — vite, rollup, react-router-dom, js-yaml atualizados |

**Conclusão:** As PRs fechadas hoje focam em **performance** (inicialização paralela), **unificação de UI** (marketplace), **robustez** (fallback de download) e **segurança** (patches de dependências vulneráveis).

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (Comentários)

| Issue/PR | Tipo | Comentários | Tema |
|----------|------|-------------|------|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Bug | 10 | **Agente para inesperadamente** durante tarefas multi-step |
| [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | Bug | 9 | **Freeze >10 minutos** com modelos GLM 5.3 |
| [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | Feature | 6 | **Organização de outputs** por diretório de tarefa |
| [#7119](https://github.com/agentscope-ai/QwenPaw/pull/7119) | Security | — | **Permissões do master key file** (0o600) |

### Análise dos Temas Quentes

1. **Parada prematura do agente (#6921):** Usuários reportam que o modelo planeja próximos passos ("Now 2.1, 3.1, 3.2") e para sem executar, requerendo comando "continuar". **Impacto:** Experiência de usuário frustrante em workflows longos.

2. **Congelamento prolongado (#7102):** Freeze >10 minutos mesmo com thinking mode ativado. Usuáriospensam que há problema no provedor, mas afeta a experiência geral.

3. **Organização de arquivos (#6643):** Demanda clara por **gestão de artefatos por tarefa**, em vez de despejar tudo em `media/`.Feature fechada com merge em progresso.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por Severidade)

#### 🔴 Críticos (afetam disponibilidade)

| Issue | Descrição | Severidade | Status |
|-------|-----------|------------|--------|
| [#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168) | **history.db inflado a 7.6GB** — `recall_history` expand writing duplica dados | Alta | Aberta |
| [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) | **QwenPaw não recupera após interrupção de rede** — requer restart manual | Alta | Aberta |
| [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | **Freeze >10 minutos** com GLM 5.3 | Alta | Fechada |

#### 🟠 Altos (afetam funcionalidades principais)

| Issue | Descrição | Componente |
|-------|-----------|------------|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Agente para durante multi-step sem notificação | Core/Agent |
| [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) | **Embedding health check timeout hardcoded** (5s) sem configuração | ReMe/Memory |
| [#7162](https://github.com/agentscope-ai/QwenPaw/issues/7162) | `httpx.ReadError` durante streaming causa `UNKNOWN_AGENT_ERROR` | Providers/Network |
| [#7110](https://github.com/agentscope-ai/QwenPaw/issues/7110) | Imagem inalcançável no contexto quebra toda sessão | Console/Media |

#### 🟡 Médios (degradação de UX)

| Issue | Descrição |
|-------|-----------|
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | Tempo de resposta do assistente exibido incorretamente (mostra segundos em vez de minutos) |
| [#7118](https://github.com/agentscope-ai/QwenPaw/issues/7118) | `envs.json` corrupto apaga silenciosamente todas as variáveis de ambiente |
| [#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060) | Limite de 2MB para vídeos hardcoded; setting `max_inline_media_bytes` ignorado |

**Síntese:** 3 bugs críticos requerem atenção urgente — especialmente o **banco de dados inflado (#7168)** e a **falha de recovery de rede (#6932)**.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Recentes Abertas

| Issue | Feature | Impacto | Complexidade |
|-------|---------|---------|--------------|
| [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | **Automatic Model Routing** — rotear automaticamente entre modelos (rápido/lento/vision) | Estratégico | Alta |
| [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | **Ferramentas unificadas no Chat** — painel de arquivos, diff, web preview, terminal interativo | UX | Alta |
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | **Workspace-scoped always-on Skills** — skills carregadas antes da primeira decisão do agente | Arquitetura | Média |
| [#7159](https://github.com/agentscope-ai/QwenPaw/issues/7159) | **QQ: suporte a tarefas agendadas** | Channel | Baixa |
| [#7158](https://github.com/agentscope-ai/QwenPaw/issues/7158) | **DingTalk: context modes configuráveis por grupo** | Channel | Baixa |
| [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) | **Melhorias na UI de deployment** — posicionar controles de ação no topo | Console | Baixa |
| [#7179](https://github.com/agentscope-ai/QwenPaw/issues/7179) | **Otimizar dropdown de seleção de agente** — exibir mais agentes simultaneamente | Console | Baixa |

### PRs de Feature em Desenvolvimento

| PR | Feature | Status |
|----|---------|--------|
| [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) | Configurable embedding timeout + update ReMe 0.4.1.8 | WIP |
| [#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) | **QwenPaw Hub** — self-hosted multi-user control plane | Em revisão |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | **PowerContext** como backend alternativo de memória de longo prazo | Under Review |
| [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163) | Session-level thinking modes (Off/Low/Medium/High) | Em revisão |

**Sinais de Roadmap:**
- Ênfase em **memória persistente** e **context management** (#6436, #7080, #7183, #7184)
- Expansão de **channels** (QQ, DingTalk)
- **Performance de UI** em sessões longas (#7176)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

| Categoria | Descrição | Ocorrências | Impacto |
|-----------|-----------|-------------|---------|
| **Instabilidade de conexão** | QwenPaw não recupera após rede voltar; requer restart | #6932, #7102 | Alto — usability em VPN/redes instáveis |
| **Gestão de artefatos** | Outputs acumulados em `media/` sem organização | #6643 | Médio — confusão em workflows longos |
| **Experiência multi-step** | Agente para sem aviso durante planejamento | #6921 | Alto — frustração em tarefas automatizadas |
| **Limites de mídia** | Vídeos >2MB omitidos; imagens quebradas travam sessão | #7060, #7110 | Médio — bloqueia uso com mídias grandes |
| **Interface mobile** | Deploy page inconvenients para mobile (#7177) | #7177 | Baixo — UX em dispositivos móveis |
| **VPN compatibility** | Desktop client não funciona com VPN ativa | #6974 | Médio — limitação geográfica |

### Cenários de Uso Emergentes

1. **Agentes de tarefas longas:** Usuários executam fluxos de trabalho multi-etapa e precisam de **continuidade garantida**.
2. **Multi-agente com roteamento:** Necessidade de alternar automaticamente entre modelos especializados.
3. **Integração corporativa:** QQ groups, DingTalk com contextos compartilhados.

### Satisfação Geral

**Pontos positivos:** Performance de cold-start melhorada (#7174), marketplace unificado (#6880), patches de segurança rápidos (#7172).

**Pontos de fricção:** Recuperação de rede, gerenciamento de estado em sessões longas, limites de mídia hardcoded.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Em Espera

| Issue | Criado | Atualizado | Dias | Prioridade | Motivo |
|-------|--------|------------|------|-----------|--------|
| [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) — Automatic Model Routing | 2026-07-24 | 2026-08-20 | ~28 | Estratégica | Feature grande, requer design decision |
| [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) — Organização por diretório | 2026-08-03 | 2026-08-20 | ~18 | Média | Fechada mas demanda recorrente |
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) — Tempo incorreto | 2026-08-08 | 2026-08-20 | ~13 | Média | Bug de display sem patch |

### Ações Recomendadas

1. **🔴 Prioridade Crítica:**
   - Investigar **#7168** (7.6GB DB) — root cause no `ToolResultCapMiddleware`
   - Implementar **retry/backoff** para recovery de rede (#6932)
   - Corrigir **timeout hardcoded** do embedding health check (#7156)

2. **🟠 Prioridade Alta:**
   - Revisar **streaming error handling** para `httpx.ReadError` (#7162)
   - Padronizar **limites de mídia** via configuração (#7060)

3. **🟡 Prioridade Média:**
   - Resolver **display de tempo** nas mensagens (#6826)
   - Avaliar **feature de routing automático** (#6436) para roadmap v2.2

---

## Métricas Resumidas (24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas | 14 |
| Issues fechadas | 13 |
| PRs abertas | 21 |
| PRs fechadas/merged | 29 |
| Releases | 1 (beta) |
| Bugs críticos abertos | 3 |
| Features em desenvolvimento | 8+ |
| Engajamento (comentários) | 50+ |

**Saúde Geral:** 🟢 **Estável com incidentes** — alta atividade de desenvolvimento, mas 3 bugs críticos requerem atenção. O ciclo de release está ativo com v2.1.1-beta.1 em verificação.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-21

## 1. Panorama do Dia

ZeroClaw mantém **alta atividade de desenvolvimento** com 50 issues e 50 PRs atualizados nas últimas 24h. O projeto está intensamente focado em **discussões arquiteturais** (RFCs), com 8 proposals de alto impacto em análise simultânea — cobrindo sessões de runtime, integração de plugins, e refatorações de gateway. A comunidade demonstra preocupação significativa com **segurança e permissões**, evidenciada por múltiplos PRs e issues sobre sandbox policies, replay attacks e ACL hardening. Não houve releases nas últimas 24h, indicando que o time está em fase de consolidação antes do próximo ciclo de lançamento.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde a data de corte. O último marco relevante foi a introdução de ferramentas de release verificadas em PR #10122, preparando o terreno para um próximo release. Recomenda-se monitorar a fila de RFCs aceitas (issue #8692) para antecipar a发布日期 do v0.9.0.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (últimas 24h)

| # | PR | Tamanho | Impacto |
|---|-----|---------|---------|
| #9304 | **fix(providers): retry rejected tool turns with reasoning disabled** | XL | Corrige falhas em providers compatíveis com Azure OpenAI quando `reasoning_effort` é usado com tools |
| #10018 | **[Bug]: ACP graceful-summary text is silently dropped on max-iteration exit** | — | Data loss bug no canal ACP corrigido |
| #10011 | **[Task]: avoid runtime-written executable in daemon heartbeat test** | — | Melhora segurança e confiabilidade de testes |
| #9964 | **chore(deps): bump actions/labeler from 6.1.0 to 7.0.0** | XS | Dependência CI atualizada |

### PRs Abertos de Destaque (em progresso)

| # | PR | Tamanho | Risco | Descrição |
|---|-----|---------|-------|-----------|
| #9744 | **refactor(gateway): require authenticated webhook ingress** | XL | High | Adiciona boundary de autenticação para webhooks (WhatsApp, Linq, Nextcloud) |
| #10142 | **feat(zerorelay): secure transport and browser enrollment** | — | High | Mutual TLS obrigatório com CA por daemon; supersede de #9080 |
| #8443 | **feat(matrix): add single-message progress drafts** | XL | High | Modo `stream_mode = "single_message"` para Matrix com drafts editáveis |
| #9129 | **feat(plugins): add coherent channel config services** | XL | High | Services de config para plugins de canal via `config.get()` e `secrets.get()` |
| #10188 | **fix(runtime): enforce independent delegate approval policy** | S | High | Aplica policy de aprovação isolada para delegates |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Tags Relevantes |
|---|--------|-------------|-----------------|
| #9487 | **RFC: Runtime-owned conversation sessions and transport surface adapters** | 22 | `domain:architecture`, `risk:high`, `channel:acp` |
| #6165 | **RFC: Prefer a lighter ZeroClaw core through external integrations** | 18 | `type:rfc`, `priority:p2`, `risk:high` |
| #6850 | **RFC: Decouple memory lifecycle policy from storage backends** | 14 | `priority:p2`, `risk:high` |
| #8780 | **RFC: Realtime speech-to-speech channel for Gemini Live** | 14 | `channel`, `provider:gemini`, `risk:high` |
| #8692 | **[Tracker]: Maintainer decision queue for RFCs and design issues** | 13 | `type:tracker`, `priority:p2` |
| #9598 | **RFC: Define the SOP capability permission contract** | 10 | `domain:security`, `risk:high` |

### Análise dos Temas

**Arquitetura e Modularidade:** A community debate fortemente sobre **reduzir o core** (#6165) e **desacoplar políticas de memória** (#6850). Há consenso emergente de que integrações de longo-tail estão sobrecarregando o core, e a solução proposta é mover canais e ferramentas opcionais para plugins WASM runtime (#8850).

**Segurança:** A segurança domina as discussões com RFCs sobre:
- Permissão contracts para SOP capabilities (#9598)
- Sandbox policies granulares para filesystem e network (#6996)
- Plugin permission model (#8398)

**Transporte e Canais:** Propostas de novos canais realtime (#8780 - Gemini Live speech-to-speech) e autenticação de webhooks (#9744) indicam foco em expandir conectividade mantendo segurança.

---

## 5. Bugs e Estabilidade

### Bugs por Severidade

#### P0/P1 — Críticos (workflow blocked ou data loss)

| # | Título | Severidade | Plataforma | Status |
|---|--------|------------|------------|--------|
| #8800 | **Windows: killed zeroclaw process leaves port bound (zombie LISTENING/CLOSE_WAIT)** | S2 | Windows | `status:accepted` |
| #8794 | **[web dashboard ui] stopping the agent mid work erases the tool calls** | S1 | Web | `status:accepted` |
| #9016 | **OpenAI tool turns fail when Chat Completions rejects reasoning effort** | S1 | Provider | `status:in-progress` |
| #10164 | **block_high_risk_commands = false not honored** | S2 | Sandbox | `status:accepted` |

#### Bugs Regressão/Data Loss Recém-Fechados

| # | Título | Severidade | Nota |
|---|--------|------------|------|
| #10018 | **ACP graceful-summary text silently dropped on max-iteration exit** | S0 | **Data loss corrigido** |
| #5842 | **warn when Codex CLI extra_args weaken sandbox** | P2 | Feature request correlata |

### Observações de Estabilidade

- **Windows** apresenta problemas recorrentes: zombie processes com portas presas (#8800) e locked swap files (#10187)
- **Web Dashboard** tem comportamento problemático ao interromper agentes (#8794)
- O time está ativamente adicionando **testes de regressão** para caminhos críticos (PRs #10179, #10187, #10174)

---

## 6. Pedidos de Features e Sinais de Roadmap

### RFCs com Status `accepted` (alta probabilidade no roadmap)

| # | Título | Prioridade | Tracking |
|---|--------|------------|----------|
| #9598 | **SOP capability permission contract** | P2 | — |
| #9702 | **Goal mode v2 — durable continuation and paired Web controls** | P2 | — |
| #10169 | **Agent Portability** | P2 | — |
| #10025 | **zeroclaw swarm — ephemeral agent swarms with TUI** | P2 | — |
| #10143 | **Make provider-call accounting lifecycle-complete** | P2 | — |
| #9512 | **Annotate each bespoke CI gate with the issue/incident that motivated it** | P2 | — |

### Novas Features Solicitadas

| # | Título | Descrição | Via |
|---|--------|-----------|-----|
| #10141 | **Please make sessions usable** | Dificuldade em gerenciar sessões e copiar snippets | klonuo |
| #9810 | **Load Agent Plugins 1.0 skill and MCP packages** | Suporte ao padrão vendor-neutral agent-plugins.org | NiuBlibing |
| #10050 | **Verbatim channel send over gateway** | Rota gateway para envio de mensagens sem turn do agent | belumume |
| #10074 | **SECURITY.md documents removed CI job** | Documentação desatualizada sobre docker checks | melbinjp |

### Sinais de Roadmap

- **v0.9.0** será focado em: SOP contracts, provider accounting, e persistent memory parity (#8891)
- **Plugins WASM** é a direção estratégica para reduzir binary size e aumentar extensibilidade (#8850)
- **ZeroRelay** com mTLS obrigatório marca evolução em segurança de transporte (#10142)
- **Rust→Wasm web UI** substituindo React/Vite (#8132) indica refatoração significativa do frontend

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

**Gestão de Sessões (Issue #10141)**
> *"É frustrante entrar em sessões anteriores. Em zerocode você pode copiar snippets referenciados com dois botões — aqui não."*
> — klonuo

**Usabilidade do Dashboard (Issue #8794)**
Interrupção do agente apaga histórico de tool calls e thinking, fazendo etapas inteiras "nunca terem acontecido" do ponto de vista do contexto.

**Windows Experience (Issue #8800)**
Processos mortos deixam portas presas, impedindo reinício do daemon — impacto direto na experiência de desenvolvimento.

### Cenários de Uso Emergentes

- **Swarm de Agents**: Usuários começam a solicitar orquestração de múltiplos agentes para objetivos complexos (#10025)
- **Agent Portability**: Desejo de exportar/compartilhar agentes entre deployments (#10169)
- **Realtime Voice**: Integração com Gemini Live para canais de voz (#8780)
- **Termux/Android**: PR #10183 corrige instalação em Termux, indicando base de usuários mobile

### Satisfação/Engajamento

- **+1 reactions**: 3 issues com 👍 (indica alinhamento com prioridades)
- **Alto volume de RFCs**: Comunidade ativa em definir direção técnica
- **Contributors recorrentes**: Audacity88, JordanTheJet, vrurg, NiuBlibing lideram PRs

---

## 8. Backlog que Merece Atenção

### Issues Sem Atividade ou Sem Resposta

| # | Título | Criado | Status | Motivo de Alerta |
|---|--------|--------|--------|------------------|
| #8132 | **RFC: Replace React/Vite with Rust→Wasm** | 2026-06-22 | `open` | Proposta grande sem assignee; decisão arquitetural pendente |
| #8398 | **Plugin permission, config, and secrets model** | 2026-06-27 | `needs-author-action` | Perguntas abertas sobre model de permissões; bloqueia implementação |
| #9990 | **Calibrate PR risk and security approval requirements** | 2026-08-14 | `status:accepted` | RFC aceita mas sem follow-up de implementação |
| #9460 | **feat(secrets): harden Windows key-file ACLs** | 2026-07-27 | `status:accepted` | Aceito há ~3 semanas; aguardando implementação |
| #9512 | **Annotate CI gates with motivating issues** | 2026-07-28 | `status:accepted` | Documentação que melhora maintainability; baixa urgência mas alto valor |

### PRs Entediados ou Bloqueados

| # | Título | Tamanho | Bloqueio |
|---|--------|---------|----------|
| #9744 | **refactor(gateway): authenticated webhook ingress** | XL | `do-not-merge` label; aguardando revisão de maintainer |
| #9451 | **refactor(observability): retire dormant DORA telemetry** | L | `do-not-merge` label; marcado como `status:blocked` |

### Recomendações para Maintainers

1. **Priorizar review** de #9487 (runtime sessions) — alta demanda da comunidade
2. **Decidir** sobre #8132 (Rust→Wasm) — bloqueia planejamento de frontend
3. **Encerrar** ou dar follow-up em issues com +30 dias sem atualização
4. **Revisar** PRs com `do-not-merge` para clarify next steps

---

## Resumo Executivo

| Métrica | Valor |
|---------|-------|
| Issues ativas (24h) | 45 |
| PRs abertos | 44 |
| Bugs P0/P1 | 4 |
| RFCs em discussão | 8+ |
| Releases (24h) | 0 |
| Contributors ativos | ~8 |

**Saúde Geral:** O projeto está em **fase de maturação arquitetural** — muitas RFCs convergindo para v0.9.0, com foco em segurança, modularidade e performance. Bugs críticos estão sendo addressados ativamente. A comunidade demonstra engajamento em design de longo prazo, embora issues antigas e PRs bloqueados mereçam atenção para evitar technical debt.

**Próximos marcos esperados:** Release com SOP contracts, provider accounting completo, e persistent memory parity.

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-08-21. Para mais detalhes, consulte [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw).*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*