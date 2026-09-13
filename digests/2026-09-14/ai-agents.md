# Resumo diário do ecossistema de agentes de IA 2026-09-14

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-09-13 22:01 UTC

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

# Relatório Comparativo: Ecossistema Open Source de Agentes de IA

## 2026-09-14

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois polos distintos de atividade** em 14 de setembro de 2026. De um lado, **ZeroClaw** (36 issues, 50 PRs) e **Hermes Agent** (50 issues, 50 PRs) lideram em volume absoluto de atividade, evidenciando comunidades maduras em fases de estabilização intensiva. Do outro, **NanoBot** e **CoPaw** demonstram crescimento orgânico com foco em UX e experiência mobile. O dado mais preocupante do período é a **ausência completa de releases** em todos os projetos, sinalizando consolidação pré-lançamento ou freeze de feature freezes sincronizados. Três projetos apresentam **bugs críticos de perda de dados** (NanoBot path traversal, PicoClaw compressão de sessão, CoPaw sessões desaparecendo), sugerindo desafios sistêmicos na persistência de estado em agentes de longa execução.

---

## 2. Comparação de Atividade

| Projeto | Issues (abertas/fechadas) | PRs (abertos/merged) | Releases (24h) | Bugs P0-P1 | Saúde |
|---------|---------------------------|----------------------|----------------|------------|-------|
| **ZeroClaw** | 31/5 | 50/0 | 0 | 9 | 🔴 Crítica |
| **Hermes Agent** | ~12/~38 | ~17/~33 | 0 | 2 | 🟡 Moderada |
| **NanoBot** | 0/0 | 4/2 | 0 | 1 | 🟡 Moderada |
| **CoPaw** | 5/1 | 5/1 | 0 | 1 | 🟡 Moderada |
| **PicoClaw** | 3/2 | 0/4 | 0 | 1 | 🟠 Atenção |
| **IronClaw** | 0/0 | 4/1 | 0 | 0 | ⚪ Estável |
| **NullClaw** | 0/0 | 0/0 | 0 | 0 | ⚫ Inativo |

**Observações críticas:**
- **ZeroClaw** zerou taxa de merge em 24h com 50 PRs pendentes — gargalo de revisão ou política de merge excessivamente restritiva
- **PicoClaw** fechou bug crítico de perda de dados (#3351) como stale sem resolução — risco para usuários em produção
- **NullClaw** permanece completamente inativo há 24h, indicando abandono ou reestruturação silenciosa

---

## 3. Posicionamento do Projeto Principal

*Considerando ZeroClaw como referência pelo volume de atividade:*

### Vantagens Competitivas

| Dimensão | ZeroClaw | Hermes Agent | NanoBot |
|----------|----------|-------------|---------|
| **Governança** | RFC formalizado com tracker de decisões | Processos ad hoc | Issues e PRs simples |
| **Segurança** | Shell V1 permission policy (RFC), OIDC token verification | OAuth identity leak corrigido, mTLS em revisão | Path traversal fix em P1 |
| **Escalabilidade** | Context compaction baseado em model window ratio | Cron handoff com problemas de cold start | 1M token window via DeepSeek |
| **Multi-provider** | Suporte a múltiplos modelos por perfil (em PR) | Desktop-centric, modelos fixos | Linear, iTerm2, Draw.io, Google Drive |

### Diferenças Técnicas Fundamentais

- **ZeroClaw** adota arquitetura de SOP engine com steps e replays, diferenciando-se por workflow formalizado
- **Hermes Agent** prioriza desktop integration com Bot Screen streaming para Xfce
- **NanoBot** demonstra foco em WebUI mobile-first com composer adaptado
- **CoPaw** explora agent-autonomous context management como feature diferenciadora

### Tamanho de Comunidade

| Projeto | Engajamento (comentários/issues) | Contribuidores ativos (24h) | Novatos |
|---------|----------------------------------|------------------------------|---------|
| Hermes Agent | 18 comentários (cron handoff) | 10+ | — |
| ZeroClaw | 15 comentários (tracker decisões) | 5+ | — |
| NanoBot | Baixo | 3 | — |
| CoPaw | 4 comentários | 4+ | 3 first-timers |

---

## 4. Focos Técnicos Compartilhados

### 4.1 Persistência e Perda de Dados

Três projetos reportam problemas críticos de persistência:

```
NanoBot →  Session path traversal (#5633) — dados podem ser sobrescritos por ataque
PicoClaw → Compressão apaga sessão original (#3351) — perda irreversível
CoPaw    → Sessões desaparecem após idle (#7724) — regressão crítica
```

**Conclusão:** A gestão de estado em agentes de longa execução é o desafio técnico mais prevalente do ecossistema.

### 4.2 Cron e Agendamento de Tarefas

```
Hermes Agent → Worker handoff expira em 5s, cold start leva 12s
NanoBot      → Cron recalcula indevidamente next_run_at_ms ao editar
CoPaw        → Scheduled tasks sem output; resultados colapsados
ZeroClaw     → Stack overflow em Windows, notification lag cancela turns
```

**Conclusão:** Sistemas de automação cron apresentam falhas de confiabilidade em todos os projetos, afetando deployments de produção.

### 4.3 WebUI e Performance Client

```
NanoBot  → Mobile composer squeeze, settings navigation
PicoClaw → Input laggy com histórico longo em web
CoPaw    → Output de tasks colapsado em "thinking"
```

### 4.4 Segurança de Permissões

```
ZeroClaw   → Shell V1 permission policy (RFC #7155) — alto risco
Hermes Agent → Destructive commands bypass approval via global flags
NanoBot    → Session path traversal vulnerability
```

---

## 5. Análise de Diferenciação

### Por Público-Alvo

| Projeto | Público Primário | Diferenciador |
|---------|------------------|---------------|
| **ZeroClaw** | DevOps, operadores de agentes em produção | Workflow formalizado (SOP), edge mesh RFC, controle granular |
| **Hermes Agent** | Usuários desktop (Xfce, Windows) | Desktop streaming, integração profunda com OS |
| **NanoBot** | Usuários mobile-first | UX mobile otimizado, Composer adaptado |
| **CoPaw** | Desenvolvedores e usuários multi-idioma | pt-BR localization, agent-autonomous memory |
| **PicoClaw** | Usuários embarcados, IRC | Lightweight, IRCv3 integration, RISC-V support |
| **IronClaw** | — | Rust/WASM ecosystem (Near AI) |

### Por Arquitetura

```
ZeroClaw     → SOP engine com steps explícitos, atomic config, streaming recovery
Hermes Agent → Desktop-centric, cron workers, desktop sessions metadata
NanoBot      → WebUI-first, JsonlSessionStore, cron automations
CoPaw        → Agent-autonomous context eviction, DeepSeek integration
PicoClaw     → Go-based, lightweight, IRC/Signal adapters
```

### Por Fase de Desenvolvimento

| Fase | Projetos | Características |
|------|----------|-----------------|
| **Maturação acelerada** | ZeroClaw, Hermes Agent | Alto volume, stabilization sprint, bugs críticos |
| **Crescimento orgânico** | NanoBot, CoPaw | First-time contributors, i18n, UX improvements |
| **Manutenção mínima** | IronClaw | Dependabot-only, baixa comunidade |
| **Estagnação** | NullClaw, PicoClaw | Inatividade ou bugs não resolvidos |

---

## 6. Tração e Maturidade da Comunidade

### Projetos em Velocidade Máxima

| Indicador | Hermes Agent | ZeroClaw | CoPaw |
|-----------|--------------|----------|-------|
| Issues fechadas/24h | ~38 | 5 | 1 |
| PRs merged/24h | ~33 | 0 | 1 |
| Taxa resolução | 76% | 0% | 50% |
| Novos contributors | — | — | 3 first-timers |

**Análise:** Hermes Agent demonstra throughput excepcional de 33 merges/24h, indicando equipe de maintainers ativa e processos de review maduros. ZeroClaw, apesar do alto volume, apresenta backlog crítico de 50 PRs sem merge.

### Projetos em Consolidação de Qualidade

| Projeto | Sinais de Consolidação |
|---------|------------------------|
| **ZeroClaw** | v0.8.5 stabilization tracker, intake frozen desde 2026-08-04 |
| **Hermes Agent** | 14 issues P2 fechadas, regressões identificadas (config.yaml) |
| **PicoClaw** | PR #1545 consolida múltiplos fixes, mas bugs críticos permanecem stale |

### Projetos com Risco de Atrição

| Projeto | Risco | Evidência |
|---------|-------|-----------|
| **NullClaw** | Abandonware | 0 atividades em 24h |
| **PicoClaw** | Perda de confiança | Bug de perda de dados fechado sem fix |
| **IronClaw** | Dependabot-only | Sem contribuições externas |

---

## 7. Sinais de Tendência

### 7.1 Segurança como Prioridade Estruturante

O ecossistema converge para **permission systems formalizados**:
- ZeroClaw RFC #7155 (Shell V1 permission policy)
- Hermes Agent bypass fix para destructive commands
- NanoBot path traversal P1 fix

**Implicação:** Agentes estão evoluindo de protótipos para sistemas de produção onde isolamento e controle de permissões são requisitos não-funcionais.

### 7.2 Agent-Autonomous Memory Management

CoPaw (#7733) articula tendência emergente:

> *"Context eviction is triggered by pure token threshold. The agent — the only party that knows which part of the work is still live — has no say in when it happens."*

**Implicação:** Modelos de context window fixa estão sendo reconhecidos como limitantes. A próxima geração de agentes exigirá **delegação de gestão de memória ao próprio agente**, não ao sistema.

### 7.3 Desktop Streaming como Diferenciador

Hermes Agent (#108914) e ZeroClaw (#10525) investem em:
- Xfce desktop streaming (Hermes)
- Relay-terminated browser enrollment (ZeroClaw)

**Implicação:** A interface de terminal texto está sendo complementada por **streaming visual remoto**, sinalizando convergência com casos de uso de desktop remoto e assistência humana-in-the-loop.

### 7.4 i18n como Vetor de Crescimento

CoPaw completou 4275 chaves de tradução pt-BR em 24h. NanoBot demonstra localização em apps catalog (Linear, iTerm2, Draw.io, Google Drive).

**Implicação:** Expansão para mercados não-anglofônicos é vetor de crescimento subestimado. Projetos com i18n madura capturarão demanda de desenvolvedores e empresas globais.

### 7.5 Regras de Maturidade Emergentes

| Regra | Evidência |
|-------|-----------|
| **Feature freeze sincronizado** | 0 releases em todos os projetos no período |
| **Consolidação pré-release** | ZeroClaw v0.8.5 tracker, intake frozen |
| **Stack overflow como problema Windows-first** | ZeroClaw #10734, Hermes Agent #71237 |
| **Multi-profile como complexidade crescente** | Hermes Agent (desktop), ZeroClaw (provider profiles) |

---

## Recomendações Estratégicas

| Para | Recomendação |
|------|--------------|
| **Desenvolvedores** | Priorizar projetos com throughput de merge consistente (Hermes Agent); evitar NullClaw e PicoClaw para produção |
| **Decisores técnicos** | Aguardar consolidação v0.8.5 do ZeroClaw antes de adoção; monitorar agent-autonomous memory como feature-blocker |
| **Contribuidores** | CoPaw demonstra melhor receptividade a first-timers; ZeroClaw tem espaço para kontribusi mas processos RFC podem ser barreira |
| **Operadores** | Cuidado com cron jobs em todos os projetos; bugs de handoff e persistência afetam production reliability |

---

*Relatório gerado em 2026-09-14. Dados agregados de 7 projetos do ecossistema open source de agentes de IA.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-09-14

---

## 1. Panorama do Dia

O projeto NanoBot apresenta uma atividade moderada de desenvolvimento nas últimas 24 horas, com **6 Pull Requests atualizados** e nenhum release ou issue nova registrada. Das 6 PRs, **2 foram fechadas/merged** (ambas correções WebUI) e **4 permanecem abertas**, incluindo uma correção de segurança P1 para path traversal em sessões. A ausência de issues ativas e releases pode indicar fase de estabilização ou baixa visibilidade nas últimas 24h. O foco atual do time está em correções de UI/UX mobile, segurança e robustez de automações cron.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O projeto não registrou novas versões neste período. Recomenda-se acompanhar o repositório para futuros announcements de releases.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged Hoje

#### #5755 — fix(webui): improve mobile composer and settings navigation ✅
**Autor:** Re-bin | **Data:** 2026-09-13

Melhorias na experiência mobile do composer, painel de uso de contexto e navegação de configurações sem alterações no backend.

| Área | Mudança |
|------|---------|
| Composer | Adaptação de controles à largura disponível; controles de attachment/model mantidos à esquerda |
| Mobile UX | Remoção de挤占 (squeezing) de ações em uma única linha |

🔗 [PR #5755](https://github.com/HKUDS/nanobot/pull/5755)

---

#### #5754 — fix(webui): unify app logos and brand mentions ✅
**Autor:** Re-bin | **Data:** 2026-09-13

Padronização visual de logos e menções de marca no ecossistema NanoBot.

| Melhoria | Detalhe |
|----------|---------|
| Logos no Apps catalog | Compactos, arredondados, full-canvas |
| Fallbacks | Loading/error e iniciais mantidos |
| Brand names | Linear, iTerm2, Draw.io, Google Drive com sizing consistente |

🔗 [PR #5754](https://github.com/HKUDS/nanobot/pull/5754)

---

## 4. Temas Quentes da Comunidade

### PRs Abertas com Maior Relevância

#### #5633 — fix(session): reject session keys with path traversal components 🔴 P1
**Autor:** aniruddhaadak80 | **Labels:** bug, fix, test, security, **priority: p1**

Esta PR aborda uma **vulnerabilidade de segurança crítica** onde session keys não validadas podiam permitir path traversal (`../../etc/passwd`), potencialmente acessando arquivos fora do diretório de sessões.

**Solução implementada:** `JsonlSessionStore.validate_session_key()` no ponto de persistência.

🔗 [PR #5633](https://github.com/HKUDS/nanobot/pull/5633) | Issue original: #5564

---

#### #5751 — fix(cron): preserve pending runs when editing automation details 🟡 P2
**Autor:** beemines | **Labels:** bug, fix, test, priority: p2

Problema onde editar nome/instruções de uma automação recalcula indevidamente a próxima execução, causando:
- Interval tasks postponed
- Cron occurrences due puladas
- One-time tasks com `next_run_at_ms=None` nunca executam

🔗 [PR #5751](https://github.com/HKUDS/nanobot/pull/5751)

---

#### #5673 — fix(webui): support remote project paths and honor picker capabilities ⚠️ CONFLICT
**Autor:** chengyongru | **Labels:** bug, regression, webui, fix, test, priority: p2

Correção para usuários WebUI remoto que podiam selecionar projetos com paths absolutos no servidor, e honra capabilities do folder-picker do gateway antes de invocar native host picker.

⚠️ **Atenção:** PR apresenta conflitos que precisam ser resolvidos.

🔗 [PR #5673](https://github.com/HKUDS/nanobot/pull/5673)

---

## 5. Bugs e Estabilidade

### Por Severidade

| Prioridade | Qtd | Descrição |
|------------|-----|-----------|
| **P1** | 1 | Session path traversal vulnerability (#5633) |
| **P2** | 3 | Cron automation editing (#5751), Proxy test fixtures (#5756), Remote project paths (#5673) |

### Detalhamento

**🔴 P1 - Crítico:**
- **#5633:** Session keys com path traversal — **security fix em revisão**

**🟡 P2 - Importante:**
- **#5751:** Automations cron recalculam indevidamente next_run_at_ms
- **#5756:** Testes de proxy/SSRF não são herméticos em hosts com proxies OS-level (Windows registry, macOS SystemConfiguration)
- **#5673:** Remote project path selection com regressão (conflito a resolver)

**Nenhum crash ou regression de larga escala reportado.**

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Demandas Identificadas

Com base nas PRs abertas, os seguintes sinais de roadmap emergem:

| Demanda | PR | Prioridade | Indicador |
|---------|-----|------------|-----------|
| Suporte a remote project paths | #5673 | P2 | Funcionalidade WebUI remota |
| Editor mobile otimizado | #5755 | — | UX mobile (merged) |
| Padronização visual de brands | #5754 | — | Consistência de marca (merged) |
| Testes de segurança mais robustos | #5756 | P2 | Quality assurance |

**Não há issues de feature request explícitas nas últimas 24h**, mas o padrão de correções WebUI (4/6 PRs) sugere foco em experiência do usuário e acessibilidade mobile.

---

## 7. Resumo de Feedback dos Usuários

*Baseado em patrones de issues e descrições de PRs.*

### Dores Identificadas

| Dor | Origem | Evidência |
|-----|--------|-----------|
| UI mobile inadequada | Re-bin (PR #5755) | Composer squeeze, navegação de settings |
| Logos/branding inconsistente | Re-bin (PR #5754) | Apps catalog, mensagens, composer |
| Automations quebrando após edição | beemines (PR #5751) | Tarefas pendentes não executam |
| Sessões vulneráveis a path traversal | aniruddhaadak80 (PR #5633) | #5564 (security issue) |
| Testes falhando em ambientes com proxy | fszcd (PR #5756) | Windows/macOS proxy OS-level |

### Cenários de Uso Observados

- **Uso WebUI remoto:** Seleção de projetos em servidores remotos
- **Automations cron:** Agendamento e edição de tarefas recorrentes
- **Integração com apps:** Linear, iTerm2, Draw.io, Google Drive

---

## 8. Backlog que Merece Atenção

### PRs Abertas Sem Resolution (Ordered by Priority)

| # | Título | Prioridade | Idade | Status | Ação Recomendada |
|---|--------|------------|-------|--------|-----------------|
| #5633 | Session path traversal fix | **P1** | 12 dias (desde 2026-09-02) | OPEN | Review prioritário |
| #5673 | Remote project paths | P2 | 9 dias (desde 2026-09-05) | OPEN + CONFLICT | Resolver conflitos |
| #5751 | Cron automation preservation | P2 | 2 dias (desde 2026-09-12) | OPEN | Review |
| #5756 | Proxy test fixtures hermeticity | P2 | 1 dia (desde 2026-09-13) | OPEN | Review |

### Atenção Especial

⚠️ **#5633 (P1)** — 尽管 sem detalhes de timeline, uma vulnerabilidade de path traversal em sessões **deve ser tratada com urgência**. Recomenda-se verificar se há CVE potencial e avaliar hotfix.

⚠️ **#5673** — Conflitos não resolvidos indicam necessidade de rebase ou resolução de merge conflicts antes do merge.

---

## Métricas Resumo do Dia

| Métrica | Valor |
|---------|-------|
| PRs ativas | 4 |
| PRs fechadas/merged | 2 |
| Issues abertas | 0 |
| Releases | 0 |
| Bugs P1 em aberto | 1 |
| Bugs P2 em aberto | 3 |
| Segurança issues | 2 (#5633, #5756) |

---

**Saúde Geral:** 🟡 **Moderada** — Atividade concentrada em correções de segurança (P1) e melhorias de UI/UX. Atenção necessária para PR #5633.

**Próximos Passos Recomendados:**
1. Priorizar review de #5633 (security P1)
2. Resolver conflitos em #5673
3. Avaliar release planning baseado nas correções pendentes

---

*Relatório gerado automaticamente para NanoBot (HKUDS/nanobot) | Data: 2026-09-14*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-09-14

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém alta atividade de manutenção no dia de hoje, com **50 issues e 50 PRs atualizados** nas últimas 24h. Não houve lançamentos de novas versões. A ênfase está na correção de bugs críticos relacionados a gerenciamento de sessões em desktop, vazamentos de identidade em perfis multiplexados e problemas no scheduler cron. A taxa de resolução é elevada (38/50 issues fechadas, 33/50 PRs merged/fechados), indicando um time ativo na endereçamento da base de issues acumulada. Regressões de segurança e problemas de compatibilidade multi-plataforma continuam sendo áreas de atenção prioritária.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto permanece na versão `0.21.2` (último commit referenciado `f364c1977`). Não há changelog ou notas de migração a reportar neste período.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged de Destaque

| PR | Título | Componente | Impacto |
|----|--------|------------|---------|
| [#106789](https://github.com/NousResearch/hermes-agent/pull/106789) | fix(approvals): detect destructive commands behind global flag runs | `comp/tools`, `tool/terminal` | **P2** — Corrige bypass de aprovação para comandos destrutivos com flags globais |
| [#110284](https://github.com/NousResearch/hermes-agent/pull/110284) | fix(gateway): deliver the reply text before the auto-TTS playback | `comp/gateway`, `tool/tts` | **P2** — Elimina gap de "typing…" durante reprodução TTS |
| [#110062](https://github.com/NousResearch/hermes-agent/pull/110062) | fix(cron): resolve HERMES_HOME from proc environ | `comp/cron` | **P3** — Resolve falsos alarmes de gateway não rodando |
| [#109366](https://github.com/NousResearch/hermes-agent/pull/109366) | fix(cron): resolve gateway liveness from request home | `comp/cron` | **P3** — Melhora probe de liveness do cron |
| [#110324](https://github.com/NousResearch/hermes-agent/pull/110324) | fmt(js): `npm run fix` auto-fix | `comp/desktop` | Auto-formatação do codebase desktop |

### PRs Abertos de Maior Relevância

| PR | Título | Componente | Prioridade |
|----|--------|------------|------------|
| [#110337](https://github.com/NousResearch/hermes-agent/pull/110337) | feat(gateway): route operator notices to admin DM or log | `comp/gateway` | Feature |
| [#108914](https://github.com/NousResearch/hermes-agent/pull/108914) | feat: Bot Screen — Xfce desktop streaming | `comp/desktop`, `comp/tools` | **P2** |
| [#110300](https://github.com/NousResearch/hermes-agent/pull/110300) | fix(bot-screen): fence vault tools behind the lease | `tool/browser` | **P2** |
| [#110329](https://github.com/NousResearch/hermes-agent/pull/110329) | fix(mcp): keep message references stable across compaction | `tool/mcp` | **P2** |
| [#110332](https://github.com/NousResearch/hermes-agent/pull/110332) | fix(gateway): background-process chat notifications | `comp/gateway` | **P2** |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

**[#109243](https://github.com/NousResearch/hermes-agent/issues/109243)** — *cron: external-worker handoff requires ack within 5s, but cold worker start takes ~12s*  
- **Comentários:** 18 | **Status:** CLOSED  
- **Severidade:** HIGH | **Componente:** `cron/scheduler.py`  
- **Análise:** Este é o issue com maior volume de discussão do dia. O problema crítico é que o handoff de workers cron externos expira em 5s, mas workers frios demoram ~12s para iniciar, causando perda intermitente de jobs. Este é um problema de confiabilidade operacional que afeta automações de produção.

### Outras Discussões Relevantes

| Issue | Título | Comentários | Tema Central |
|-------|--------|-------------|--------------|
| [#102792](https://github.com/NousResearch/hermes-agent/issues/102792) | Desktop session metadata loss on multi-profile installs | 10 | Multi-profile sessions |
| [#29966](https://github.com/NousResearch/hermes-agent/issues/29966) | Concurrent ddgs web searches cause hard freeze | 5 | Concurrency/freeze |
| [#106972](https://github.com/NousResearch/hermes-agent/issues/106972) | A2A reply timeout não afeta orphan-task sweep | 4 | A2A messaging |
| [#109358](https://github.com/NousResearch/hermes-agent/issues/109358) | Empty string in config.yaml shadows env-var fallback | 4 | Config regression |

**Síntese:** A comunidade demonstra preocupação significativa com:
1. **Confiabilidade do cron** — múltiplos issues sobre o scheduler
2. **Gerenciamento de sessões em desktop** — problemas com perfis múltiplos
3. **Regressões de configuração** — mudanças silenciosas de comportamento entre versões

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Críticos (2 issues fechadas hoje)
| Issue | Título | Impacto |
|-------|--------|---------|
| [#102792](https://github.com/NousResearch/hermes-agent/issues/102792) | Desktop — new session loses owner metadata | Perda completa de controles de sessão em installs multi-profile |
| [#109422](https://github.com/NousResearch/hermes-agent/issues/109422) | OAuth MCP server — cross-profile identity leak | Segurança: perfis multiplexados adotam identidade uns dos outros |

#### P2 — Altos (14 issues fechadas)
| Categoria | Issues | Exemplos |
|-----------|--------|----------|
| **Desktop/Sessions** | 3 | Tab-strip "+" sem owner metadata [#108369](https://github.com/NousResearch/hermes-agent/issues/108369) |
| **Gateway/Messaging** | 3 | Telegram allowed_chats JSON parsing [#109423](https://github.com/NousResearch/hermes-agent/issues/109423), Signal SSE cleanup [#110331](https://github.com/NousResearch/hermes-agent/pull/110331) |
| **MCP Tools** | 2 | Vault tools bypass lease fence [#110300](https://github.com/NousResearch/hermes-agent/pull/110300), message reference stability [#110329](https://github.com/NousResearch/hermes-agent/pull/110329) |
| **Cron/Kanban** | 2 | HERMES_HOME resolution [#109360](https://github.com/NousResearch/hermes-agent/issues/109360), completion refusal reasons [#110330](https://github.com/NousResearch/hermes-agent/pull/110330) |
| **Windows** | 2 | Hermes update partial [#109373](https://github.com/NousResearch/hermes-agent/issues/109373), skills update loop [#71237](https://github.com/NousResearch/hermes-agent/issues/71237) |

#### P3 — Médios (maioria das issues)
- **Concorrência:** Freeze em ddgs web searches [#29966](https://github.com/NousResearch/hermes-agent/issues/29966)
- **Segurança:** Secrets leak em terminal output [#109362](https://github.com/NousResearch/hermes-agent/issues/109362)
- **Plugin System:** False positives em plugin_guard [#93927](https://github.com/NousResearch/hermes-agent/issues/93927), [#89610](https://github.com/NousResearch/hermes-agent/issues/89610)
- **i18n:** 21 strings hardcoded em Settings [#109246](https://github.com/NousResearch/hermes-agent/issues/109246)
- **Audio/WSL2:** Voice recording timeouts [#109303](https://github.com/NousResearch/hermes-agent/issues/109303)

### Regressões Identificadas em v0.21.2
1. Empty string em `config.yaml` agora sobrescreve fallback de env-var ([#109358](https://github.com/NousResearch/hermes-agent/issues/109358))
2. Skills com subdiretórios em loop de update no Windows ([#71237](https://github.com/NousResearch/hermes-agent/issues/71237))

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| PR | Título | Componente | Potencial Impacto |
|----|--------|------------|-------------------|
| [#110338](https://github.com/NousResearch/hermes-agent/pull/110338) | feat(desktop): add canonical Bot Chat clear action | Desktop | Ações controladas de bot em desktop |
| [#110337](https://github.com/NousResearch/hermes-agent/pull/110337) | feat(gateway): route operator notices to admin DM or log | Gateway | Notificações administrativas melhoradas |
| [#110325](https://github.com/NousResearch/hermes-agent/pull/110325) | feat(hooks): support approval escalation from shell hooks | Agent/Plugins | Aprovações via hooks shell |
| [#110327](https://github.com/NousResearch/hermes-agent/pull/110327) | feat(tts): stream command-based providers sentence by sentence | TTS | TTS streaming para providers locais |
| [#108914](https://github.com/NousResearch/hermes-agent/pull/108914) | feat: Bot Screen — Xfce desktop streaming | Desktop | Integração de desktop remoto via Xfce |

### Issue Aberta Recém-Criada

**[#110080](https://github.com/NousResearch/hermes-agent/issues/110080)** — *Kanban: no profile may write board state directly to SQLite*  
- Coder worker bypassing completion gates escreveu diretamente no banco. Evidencia necessidade de reforçar isolamento de perfis.

**Sinais de roadmap inferidos:**
- Maior isolamento de segurança entre perfis multiplexados
- Melhoria na experiência de desktop (Bot Screen, streaming)
- Reforço do sistema de aprovações para operações destrutivas

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Multi-profile broken** | Criar nova sessão no desktop com múltiplos perfis perde metadados, inutilizando a sessão | Múltiplos reports |
| **Cron jobs falham silenciosamente** | Jobs agendados não executam por timeout de handoff, sem feedback claro | 18 comentários |
| **Config changes are opaque** | Atualização para 0.21.2 mudou comportamento de config.yaml silenciosamente | Vários reports |
| **Windows é segunda classe** | Update incompleto, skills em loop, experiência geral instável | 2+ issues |
| **Plugin install é bloqueado** | Testes com strings adversas bloqueiam plugins legítimos | 3 issues duplicates |

### Cenários de Uso Problema

1. **Produção com cron workers externos:** Handoff falha regularmente em workers que precisam de cold start
2. **Deploy multi-profile com Telegram/Matrix:** Configurações de adapters se perdem entre perfis
3. **Ambiente Windows empresarial:** Update do Hermes não completa Node phase, skills nunca stable
4. **Usuários de plugins comunitários:** Injustamente bloqueados por false positives de security scanner

### Satisfação Observada
- PR de segurança [#106789](https://github.com/NousResearch/hermes-agent/pull/106789) bem recebido (corrige bypass de approvals)
- Fix de TTS [#110284](https://github.com/NousResearch/hermes-agent/pull/110284) resolve UX annoyance com "typing…" prolongado

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Ação Prolongada

| Issue | Criado | Status | Motivo da Alerta |
|-------|--------|--------|------------------|
| [#2863](https://github.com/NousResearch/hermes-agent/issues/2863) | — | PR #110328 aberto | Orphaned task_runs rows com NULL current_run_id — bug antigo ressurgindo |
| [#71237](https://github.com/NousResearch/hermes-agent/issues/71237) | 2026-07-25 | CLOSED (hoje) | Windows skills loop — estava aberto por ~50 dias |
| [#89610](https://github.com/NousResearch/hermes-agent/issues/89610) | 2026-08-19 | CLOSED (hoje) | Plugin guard false positives — aberto por ~25 dias |
| [#29966](https://github.com/NousResearch/hermes-agent/issues/29966) | 2026-05-21 | CLOSED (hoje) | Concurrent ddgs freeze — crítico mas só fechou hoje (~120 dias) |

### Issues Abertas com Potencial de Impacto

| Issue | Prioridade | Idade | Descrição |
|-------|------------|-------|-----------|
| [#110422](https://github.com/NousResearch/hermes-agent/issues/110422) | **P1** | 2 dias | mTLS client certs excluded from MCP connection identity — mesmo bug class de #109422 |
| [#109423](https://github.com/NousResearch/hermes-agent/issues/109423) | **P2** | 2 dias | Telegram allowed_chats JSON misparse — grupo de usuários afetados |
| [#110080](https://github.com/NousResearch/hermes-agent/issues/110080) | **P3** | 1 dia | Kanban bypass de segurança — evidência de sandbox incompleto |

### Recomendações de Priorização

1. **Imediato:** Validar que fix de OAuth identity leak ([#109422](https://github.com/NousResearch/hermes-agent/issues/109422)) não reintroduziu mTLS variant ([#109429](https://github.com/NousResearch/hermes-agent/issues/109429))
2. **Esta semana:** Resolver regressão de config.yaml ([#109358](https://github.com/NousResearch/hermes-agent/issues/109358)) — impacto silencioso em produção
3. **Este sprint:** Melhorar feedback do cron worker handoff — 18 comentários indicam frustração real
4. **Este mês:** Reduzir volume de issues P3 acumuladas (~15 issues do dia são P3) — many são duplicates ou small UX issues

---

*Relatório gerado automaticamente com base em dados do GitHub NousResearch/hermes-agent de 2026-09-14. Métricas: 50 issues, 50 PRs atualizados nas últimas 24h.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-09-14

---

## 1. Panorama do dia

O projeto PicoClaw manteve um nível de atividade moderado nas últimas 24h, com 5 issues e 4 PRs atualizados. Nenhuma nova release foi publicada. Entre as atividades, destacam-se dois bugs críticos relacionados à performance do Web UI em dispositivos de baixa capacidade, ambos marcados como stale e fechados sem resolução. A comunidade demonstra interesse contínuo em funcionalidades de integração (IRC, OpenCode Go) e há preocupação recorrente com a persistência de dados de sessão. O estado geral sugere um projeto em manutenção ativa, mas com necessidade de atenção à gestão de issues stale e à experiência do usuário em diferentes perfis de hardware.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não registrou novas versões. Recomenda-se monitorar o repositório para eventuais publicações futuras.

---

## 3. Progresso do Projeto

### PRs fechados/merged nas últimas 24h:

| # | Título | Tipo | Status |
|---|--------|------|--------|
| [#1545](https://github.com/sipeed/picoclaw/pull/1545) | Merge de PRs #1500, #1490, #1488, #1487, #1485 | Consolidación | ✅ Fechado |
| [#1268](https://github.com/sipeed/picoclaw/pull/1268) | Suporte iMessage, logs, stop command, sanitizer | Feature | ✅ Fechado |
| [#20](https://github.com/sipeed/picoclaw/pull/20) | Correção de typos e chaves de API no README | Docs | ✅ Fechado |
| [#3348](https://github.com/sipeed/picoclaw/pull/3348) | i18n: labels de code wrap em Tcheco | i18n | ✅ Fechado |

**Análise:** O PR #1545 consolida múltiplos fixes pendentes, indicando trabalho de limpeza de backlog. O PR #1268 adiciona funcionalidades significativas ao suporte iMessage, incluindo comando stop, logs de API e sanitização de privacidade. O PR #3348, embora pequeno (i18n), demonstra manutenção contínua da localização.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento:

1. **[#3287](https://github.com/sipeed/picoclaw/issues/3287)** — Better support long messages in IRC
   - **Comentários:** 12 | **Status:** ABERTA
   - **Resumo:** Requisição de feature para tratar mensagens longas no IRC (limite de 512 bytes) como uma unidade coesa. O usuário reporta que mensagens são divididas automaticamente e o PicoClaw não as reassocia corretamente.

2. **[#3281](https://github.com/sipeed/picoclaw/issues/3281)** — Web UI chat input laggy when history has long
   - **Comentários:** 11 | **👍:** 2 | **Status:** ABERTA
   - **Resumo:** Bug de performance onde o input do chat fica extremamente lagado conforme o histórico de conversa cresce. Versão afetada: 0.3.1, canal Web.

3. **[#3369](https://github.com/sipeed/picoclaw/issues/3369)** — Add OpenCode Go session header support
   - **👍:** 2 | **Status:** ABERTA
   - **Resumo:** Feature request para suportar header `x-opencode-session` em requisições OpenCode Go.

**Análise:** A comunidade demonstra interesse em integração com canais externos (IRC, OpenCode) e em performance do Web UI. O alto número de comentários em #3287 e #3281 indica problemas sentidos por múltiplos usuários.

---

## 5. Bugs e Estabilidade

### Issues reportadas:

| # | Título | Severidade | Status | Comentários |
|---|--------|------------|--------|-------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Input laggy com histórico longo | **Alta** | ABERTA | Bug crítico afeta usabilidade básica |
| [#3350](https://github.com/sipeed/picoclaw/issues/3350) | Lag em dispositivos embarcados | **Alta** | FECHADA (stale) | Sem resolução — marcado stale |
| [#3351](https://github.com/sipeed/picoclaw/issues/3351) | Compressão apaga sessão original | **Crítica** | FECHADA (stale) | Perda de dados! Sem resolução |

**Alerta:** A issue #3351 descreve um problema crítico de perda de dados — a compressão de sessão apaga fisicamente os registros originais, impossibilitando recuperação após "perda de memória". O bug foi marcado como stale sem correção. Recomenda-se atenção imediata.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas:

| # | Título | Status | Potencial Impacto |
|---|--------|--------|-------------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Suporte a mensagens longas no IRC | ABERTA | Integração IRC |
| [#3369](https://github.com/sipeed/picoclaw/issues/3369) | Header x-opencode-session | ABERTA | Integração OpenCode Go |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Performance input Web UI | ABERTA | UX/Performance |

**Sinais de roadmap:** As requisições de integração com IRC e OpenCode Go sugerem que o projeto está evoluindo para ser um hub central de agentes de IA. A demanda por melhor performance indica necessidade de otimização do backend Go.

---

## 7. Resumo de Feedback dos Usuários

### Dores principais identificadas:

1. **Performance em dispositivos diversos** — Usuários relatam que o input do chat fica lagado conforme o histórico cresce (#3281). Em dispositivos embarcados de baixa performance, o problema é ainda mais grave (#3350).

2. **Perda de dados de sessão** — O bug de compressão que apaga registros originais (#3351) representa uma falha grave de persistência. Usuários não conseguem recuperar histórico após "reset de memória".

3. **Fragmentação de mensagens IRC** — A comunidade solicita que mensagens divididas pelo limite de 512 bytes sejam reagrupadas para contexto correto (#3287).

### Cenários de uso reportados:
- Uso em **dispositivos embarcados** (RV1106, RISC-V) via browser
- Integração com **IRCv3** para comunicação de agentes
- Conexão com **OpenCode Go** para workflows específicos

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há tempo considerável:

| # | Título | Criado | Atualizado | Estado | Prioridade |
|---|--------|--------|------------|--------|------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Suporte IRC longo | 2026-07-22 | 2026-09-13 | ABERTA | Alta |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Input laggy | 2026-07-21 | 2026-09-13 | ABERTA | **Crítica** |
| [#3369](https://github.com/sipeed/picoclaw/issues/3369) | OpenCode header | 2026-09-06 | 2026-09-13 | ABERTA | Média |

### Issues fechadas como stale (sem resolução):

| # | Título | Problema | Risco |
|---|--------|----------|-------|
| [#3351](https://github.com/sipeed/picoclaw/issues/3351) | Compressão apaga sessão | **Perda de dados** | ⚠️ **Alto** |
| [#3350](https://github.com/sipeed/picoclaw/issues/3350) | Lag embarcados | UX ruim | ⚠️ Médio |
| [#3348](https://github.com/sipeed/picoclaw/pull/3348) | i18n Tcheco | N/A | Baixo (PR merged) |

**Recomendação:** A issue #3351 foi fechada como stale sem correção, representando um risco significativo para usuários que dependem de histórico de sessão persistente. Recomenda-se reabertura e priorização imediata.

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas abertas | 3 |
| Issues fechadas | 2 |
| PRs merged/fechados | 4 |
| Releases | 0 |
| Bugs críticos | 1 (perda de dados) |
| Features em demanda | 3 |

---

*Relatório gerado automaticamente com base em dados do GitHub — 2026-09-14*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-09-14

---

## 1. Panorama do dia

O projeto IronClaw apresenta **baixa atividade de desenvolvimento** no período analisado. Não houve issues abertas ou fechadas nas últimas 24h, indicando ausência de reportes de bugs ou discussões relevantes. A atividade principal concentrou-se em **5 pull requests**, sendo 4 abertos e 1 fechado/merged — todos originados do dependabot para atualização de dependências. Não foram registradas novas releases. O estado geral sugere um período de **manutenção rotineira** com foco em atualizações de pacotes externos.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

---

## 3. Progresso do projeto

### PR Merged/Fechado

| # | Título | Impacto |
|---|--------|---------|
| [#8097](https://github.com/nearai/ironclaw/pull/8097) | `chore(deps): bump the everything-else group with 24 updates` | ✅ Merged em 2026-09-13 |

**Análise:** Este PR fechou em 2026-09-13 e aplicou 24 atualizações de dependências Rust, incluindo:
- `uuid`: 1.24.0 → 1.26.0
- `base64`: 0.22.1 → 0.23.1
- `rust_decimal` e demais pacotes do grupo

**Benefício:** Manutenção da base de código com dependências atualizadas, potencialmente incluindo patches de segurança e melhorias de performance.

### PRs Abertos Pendentes de Review

| # | Título | Tamanho | Escopo |
|---|--------|---------|--------|
| [#8099](https://github.com/nearai/ironclaw/pull/8099) | `chore(deps): bump everything-else (25 updates)` | - | Rust |
| [#8079](https://github.com/nearai/ironclaw/pull/8079) | `chore(deps): bump actions (6 updates)` | - | GitHub Actions |
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | `chore(deps): bump tokio-ecosystem (2 updates)` | - | Rust |
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | `chore(deps): bump wasm (4 updates)` | L | Rust/WASM |

**Observação:** Todos os PRs abertos são de manutenção (chore) iniciados pelo dependabot. O PR #7834 está marcado como tamanho "L" com escopo em dependências WASM (wasmtime, wit-component, wit-parser).

---

## 4. Temas quentes da comunidade

**Nenhuma issue ou PR com comentários ou reações registradas nas últimas 24h.**

---

## 5. Bugs e estabilidade

**Nenhum bug ou regressão reportado nas últimas 24h.**

---

## 6. Pedidos de features e sinais de roadmap

**Nenhuma nova feature request registrada nas últimas 24h.**

---

## 7. Resumo de feedback dos usuários

**Sem dados disponíveis** — não há issues ou PRs com interações da comunidade no período.

---

## 8. Backlog que merece atenção

### PRs abertos há >7 dias sem activity recente

| # | Idade | Título | Prioridade |
|---|-------|--------|------------|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | ~22 dias | `chore(deps): bump the wasm group with 4 updates` | ⏳ Baixa (manutenção) |

**Recomendação:** Os PRs de dependências do dependabot podem ser revisados em lote para reduzir o backlog de manutenção. Atenção especial ao PR #7834 (WASM) que está aberto há quase um mês.

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues ativas | 0 | 🟢 Nenhuma pendência |
| PRs abertos | 4 | 🟡 Manutenção (dependências) |
| PRs fechados/merged (24h) | 1 | 🟢 Atualizações aplicadas |
| Releases | 0 | ⚪ Sem novos lançamentos |
| Bugs críticos | 0 | 🟢 Estável |

---

*Relatório gerado automaticamente com base nos dados do GitHub de [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw (QwenPaw)
**Data de referência:** 2026-09-14
**Fonte:** github.com/agentscope-ai/CoPaw

---

## 1. Panorama do Dia

O projeto apresenta **atividade moderada** nas últimas 24h, com 6 issues e 6 PRs atualizados. Não houve novas releases. A comunidade demonstra engajamento ativo em **resolução de bugs** (3 bugs reportados) e **melhorias de usabilidade** (toggle de arquivos ocultos, tradução pt-BR). Destaca-se a contribuição significativa de novos contribuidores em PRs técnicos (DeepSeek V4 Flash, MCP error handling) e a abertura de uma issue de alta relevância sobre gestão autônoma de contexto por agentes.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto nãoemitiu novas versões desde o período reportado. Recomenda-se monitorar as discussions sobre Docker improvements (#3429 closed) que podem sinalizar preparativos para release futura.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados

| # | Título | Autor | Impacto |
|---|--------|-------|---------|
| [#4009](https://github.com/agentscope-ai/CoPaw/pull/4009) | Add Brazilian Portuguese (pt-BR) locale support | Jailtonfonseca | **Alto** — Adiciona suporte completo ao português brasileiro na Console e Website, completando 4275 chaves de tradução |
| [#3429](https://github.com/agentscope-ai/CoPaw/issues/3429) | Pre-install CLI tools in Docker image | MCQSJ | **Médio** — Resolve necessidade de reinstalação de ferramentas como himalaya a cada rebuild do container |

### PRs Abertos em Review

| # | Título | Autor | Tipo |
|---|--------|-------|------|
| [#7737](https://github.com/agentscope-ai/CoPaw/pull/7737) | Expand multi-agent collaboration trigger keywords | lorenzozanee | first-time-contributor |
| [#7736](https://github.com/agentscope-ai/CoPaw/pull/7736) | Add DeepSeek V4 Flash capabilities | lorenzozanee | first-time-contributor |
| [#7735](https://github.com/agentscope-ai/CoPaw/pull/7735) | Preserve decoded HTTP error responses (MCP) | lorenzozanee | first-time-contributor |
| [#7734](https://github.com/agentscope-ai/CoPaw/pull/7734) | Complete pt-BR translation and repair broken strings | Jailtonfonseca | i18n |
| [#7732](https://github.com/agentscope-ai/CoPaw/pull/7732) | Select permission options by protocol kind (ACP) | axelray-dev | protocol |

**Resumo:** Avanço significativo em **internacionalização** (pt-BR finalizado) e **integrações de provedores** (DeepSeek V4 Flash com 1M token window). Novos contribuidores contribuem com 3 dos 5 PRs abertos.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Tipo | Comentários | Estado |
|---|--------|------|-------------|--------|
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | Agent sempre esquece instruções e sobrescreve arquivos | question | 4 | Aberta |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | Perda de sessões em conversas | bug | 3 | Aberta |

### Análise de Demandas

**Problema central identificado:** Usuários reportam **falhas de memória e persistência** no comportamento do agente:
- O agente "esquece" instruções explícitas sobre onde gerar arquivos (TODO)
- O agente executa desenvolvimento no diretório errado (A→C), sobrescrevendo código
- Sessões são perdidas sem recuperação possible

Esta é uma **dolor crônica** com 2 issues correlacionadas, sugerindo problemas sistêmicos em:
1. Persistência de contexto/instruções entre sessões
2. Consistência de workspace management
3. Supervisão de operações de arquivo

---

## 5. Bugs e Estabilidade

### Bugs Reportados

| # | Severidade | Título | Impacto |
|---|------------|--------|---------|
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | **Alta** | Perda de sessões — conversas desaparecem do histórico | Crítico: perda irreversível de trabalho |
| [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | **Média** | Tarefas agendadas sem output; resultados em thinking | Usabilidade: frustração em automação |
| [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | **Design** | Agent não tem controle sobre eviction de contexto | Arquitetural: melhorsolicitada para gestão de contexto |

### Análise

**#7724 (Crítico):** Regressão crítica onde sessões são perdidas completamente. Usuário reporta:
- Conversas anteriores desaparecem do histórico
- Configurações de modelo também são perdidas
- Reproduzível após deixá-lo idle por algumas horas

**#7709 (Médio):** Bug de UX onde output de scheduled tasks aparece折叠 (collapsed) em "thinking" ou não é exibido. Afeta também conversas normais.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Componente | Relevância |
|---|--------|------------|------------|
| [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | Agent-autonomous context management | Core/Context | **Alta** — Permite ao agente controlar quando contexto é evictado |
| [#7731](https://github.com/agentscope-ai/QwenPaw/issues/7731) | Toggle para mostrar arquivos ocultos (.prefix) | Files Panel | **Média** — Usabilidade para desenvolvedores |
| [#7736](https://github.com/agentscope-ai/CoPaw/pull/7736) | DeepSeek V4 Flash capabilities | Providers | **Média** — Adiciona 1M token window, image input |

### Análise de Roadmap

O issue [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) é **significativo para o roadmap**:
> "Context eviction in a long-running task is triggered by a pure token threshold. The agent — the only party that knows which part of the work is still live — has no say in when it happens..."

Sugere que o projeto está reconhecendo limitações na gestão atual de contexto e pode estar evoluindo para modelos **agent-driven memory management**.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Perda de dados** | Sessões e conversas desaparecem; configuração de modelos resetada | 2 issues |
| **Comportamento imprevisível** | Agente não segue instruções de workspace; sobrescreve arquivos | 1 issue detalhado |
| **UX de Output** | Resultados esperados não aparecem ou ficam ocultos | 1 issue |
| **Contexto/Escopo** | Agente "esquece" instruções e não mantém memória de longo prazo | Correlacionado em múltiplas issues |

### Cenários de Uso

1. **Plugin Development Workflow:** Usuário desenvolve plugins no diretório A, mas o agente migra para diretório C, causando sobrescrita acidental
2. **Long-running Tasks:** Tarefas agendadas perdem output esperado, afetando automação
3. **Cross-session Persistence:** Dificuldade em manter contexto e configurações entre sessões

### Indicadores de Satisfação

- **Contribuições ativas:** 3 PRs de first-time-contributors em 24h
- **Comunidade engajada:** 6 issues com讨论 ativa
- **⚠️ Alerta:** Issues críticas (#7724) indicam regressões que podem afetar retenção

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Attenção

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | Agent sempre esquece instruções | 9 dias | Aberta | **Alta** |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | Perda de sessões | 2 dias | Aberta | **Crítica** |
| [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | Scheduled tasks sem output | 3 dias | Aberta | **Média** |

### Recomendações

1. **Priorizar #7724** — Perda de dados é regressão crítica que afeta confiança do usuário
2. **Investigar #7571** — Problema recorrente com memória/contexto do agente
3. **Revisar #7733** — Feature request architectural que pode resolver issues de contexto subjacentes
4. **Acelerar PRs de new contributors** — lorenzozanee demonstra competência técnica consistente (3 PRs)

---

## Métricas Resumidas (24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 5 |
| Issues fechadas | 1 |
| PRs abertos | 5 |
| PRs merged/fechados | 1 |
| Novas releases | 0 |
| First-time contributors | 3 |
| Bugs reportados | 3 |
| Features solicitadas | 2 |

**Saúde geral do projeto:** 🟡 **Moderada** — Atividade saudável de contribuição compensada por bugs críticos não resolvidos.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-09-14

---

## 1. Panorama do Dia

O ecossistema ZeroClaw mantém um alto volume de atividade com **36 issues e 50 PRs atualizados nas últimas 24h**, sem nenhum merge concluído no período — indicando uma fase de revisão e maturação de contribuições. A distribuição de issues mostra **31 abertas/ativas contra apenas 5 fechadas**, sugerindo acúmulo no pipeline de triagem. Os esforços concentram-se em estabilização (v0.8.5), segurança (shell V1 permission policy, OIDC token verification), e qualidade de runtime (stack overflow no Windows, stream recovery). A ausência de releases novas reforça o foco em consolidação antes do próximo corte semanal.

---

## 2. Lançamentos

**Nenhum release foi publicado nas últimas 24h.**

O tracker de estabilização [v0.8.5 (issue #9459)](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) permanece em curso, com intake congelado desde 2026-08-04 e corte semanal previsto.

---

## 3. Progresso do Projeto

### PRs em destaque (em revisão ativa)

| PR | Título | Tamanho | Risk | Contribuidor | Status |
|---|---|---|---|---|---|
| [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) | feat(security): implement accepted shell V1 permission policy (RFC #7155 Phase 0+1) | XL | high | NiuBlibing | needs-author-action |
| [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) | feat(cli): add egress grant ceremony to plugin install and list | XL | high | JordanTheJet | em revisão |
| [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | feat(runtime): anchor context compaction to model window ratio | XL | medium | NiuBlibing | needs-author-action |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | feat(providers): support multiple models per provider profile | XL | medium | NiuBlibing | needs-author-action |
| [#10596](https://github.com/zeroclaw-labs/zeroclaw/pull/10596) | feat(runtime): paginate persisted ACP transcripts | XL | high | Audacity88 | em revisão |
| [#10255](https://github.com/zeroclaw-labs/zeroclaw/pull/10255) | feat(security): oidc.<alias> token-verification provider | XL | medium | JordanTheJet | em revisão |

**Observação:** Nenhum PR foi merged nas últimas 24h. A taxa de throughput está zerada, indicando possível gargalo em revisão ou policy de merge mais restritiva.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (por comentários)

| Issue | Título | Comentários | Tipo |
|---|---|---|---|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue for RFCs and design issues | 15 | tracker |
| [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | RFC: Simplify RFC voting by removing mandatory discussion windows | 10 | rfc |
| [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) | RFC: Clarify PR review evidence, freshness warnings, and author-action boundaries | 7 | rfc |
| [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | [Bug]: RpcDispatcher::process_line runs within 2% of its 2 MB stack guard | 7 | bug |
| [#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381) | [Tracker]: crates.io publishing, packaging, and cargo-install follow-ups | 5 | tracker |

**Análise:** O tema central é governança e processo (RFCs com 10+ comentários). A comunidade demonstra preocupação com a eficiência do processo decisório — a RFC #10549 propõe eliminar janelas de discussão obrigatórias, sinalizando fricção percebida. O tracker de decisão de maintainers (#8692) confirma que há acúmulo de demandas pendentes de resolução formal.

---

## 5. Bugs e Estabilidade

### Por severidade (últimas 24h)

#### P0 — Crítico / Bloqueante
| Issue | Título | Risk | Canal |
|---|---|---|---|
| [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) | SOP engine promotes and runs later steps before recording a step's output-schema rejection | high | daemon, runtime |

#### P1 — Alto / Degradado
| Issue | Título | Risk | Observações |
|---|---|---|---|
| [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | Stack overflow (0xc00000fd) no Windows advisory job | medium | Afeta non-required CI |
| [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) | OpenCode providers never send x-opencode-session (Go models + account flags) | high | 👍 3 |
| [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) | notification lag cancels every running turn | high | zerocode |
| [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) | Failed Code/ACP turn discards accepted prompt and completed tool exchanges | high | zerocode, acp |
| [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) | Runtime profile cost limit does not reflect effective global daily budget | high | config |
| [#10645](https://github.com/zeroclaw-labs/zeroclaw/issues/10645) | thread cost-tracking context into delegated sub-loops | high | agent, delegate |
| [#10828](https://github.com/zeroclaw-labs/zeroclaw/issues/10828) | openai-codex --device-code uses obsolete endpoint (404) | high | openai, cli |

#### P2 — Médio
| Issue | Título | Risk |
|---|---|---|
| [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) | Pre-output stream failure skips advertised non-streaming fallback |
| [#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787) | Single-candidate stream recovery ignores provider_retries; overload (529) gets one immediate retry |
| [#10320](https://github.com/zeroclaw-labs/zeroclaw/issues/10320) | config set and RPC config/set persist values without running validation |
| [#10779](https://github.com/zeroclaw-labs/zeroclaw/issues/10779) | OpenCode FreeUsageLimitError (429) retried with sub-second backoff instead of fail-fast |

**Alertas críticos:**
- **Segurança:** Issues com `domain:security` e `risk:high` em stack (cron manual trigger #10324, budget enforcement #10635, #10645)
- **Runtime:** Stack overflow no Windows (#10734) e cancelamento massivo de turns (#10785) indicam instabilidade em cargas reais

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em desenvolvimento ativo

| Issue/PR | Título | Prioridade | Radar |
|---|---|---|---|
| [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) | Implement shell V1 permission policy (RFC #7155) | — | Segurança |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | Support multiple models per provider profile | — | Multi-provider |
| [#10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525) | relay-terminated browser enrollment frontdoor (phase 1) | — | UX/Enrollment |
| [#10822](https://github.com/zeroclaw-labs/zeroclaw/issues/10822) | `config/set-many` — atomic batch config mutation over RPC | p2 | Operações |
| [#10826](https://github.com/zeroclaw-labs/zeroclaw/issues/10826) | Make ZeroCode session root selection explicit and preserve resumed roots | p2 | UX/Zerocode |
| [#10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812) | Populate DocumentMessage.jpegThumbnail for WhatsApp PDF preview | p3 | Canal/WhatsApp |

### Sinais de roadmap via RFCs
- **RFC #10549** — Simplificar votação removendo janelas de discussão obrigatórias (indica tendência a processos mais ágeis)
- **RFC #10360** — opt-in household edge mesh with pull workers and signed receipts (arquitetura distribuída)
- **RFC #10366** — Clarificar evidência de review, warnings de freshness, e limites de ação do autor (governança de PRs)

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes identificadas (via issues)

| Categoria | Problema | Frequência |
|---|---|---|
| **Estabilidade de streaming** | Falhas de stream não fazem fallback ou retry corretamente | 4 issues (P1-P2) |
| **Segurança de custos** | Limites de budget não se propagam corretamente para sub-loops e delegates | 3 issues (P1-P2) |
| **Validação de config** | Configurações persistidas sem validação causam estado inconsistente | 3 issues (P1-P2) |
| **Observabilidade** | Service logs mostram stderr obsoleto; diagnóstico dificultado | 1 issue (P2) |
| **Provedores** | OpenCode breaking changes (headers, endpoints) causam falhas | 2 issues (P1-P2) |

### Cenários de uso reportados
- **Agentes em produção** com contextos de ~200k tokens sendo cancelados silenciosamente (#10785)
- **Operadores multi-device** que desejam distribuir carga sem GPU dedicada (#10360 — edge mesh RFC)
- **Desenvolvedores Windows** enfrentando stack overflows em testes CI não-bloqueantes (#10734, #10793)

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias com alta prioridade

| Issue | Título | Criado | Updated | Comentários | Risco |
|---|---|---|---|---|---|
| [#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381) | [Tracker]: crates.io publishing, packaging, and cargo-install follow-ups | 2026-07-26 | 2026-09-13 | 5 | high |
| [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) | SOP engine promotes and runs later steps before recording rejection | 2026-08-17 | 2026-09-13 | 4 | high |
| [#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360) | RFC: opt-in household edge mesh | 2026-08-25 | 2026-09-13 | 4 | high |
| [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) | RFC: Clarify PR review evidence | 2026-08-25 | 2026-09-13 | 7 | high |

### PRs aguardando revisão há >14 dias

| PR | Título | Criado | Size | Risk | Status |
|---|---|---|---|---|---|
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | feat(providers): add native Hailo-Ollama support | 2026-07-17 | XL | high | blocked |
| [#9134](https://github.com/zeroclaw-labs/zeroclaw/pull/9134) | fix(plugins): admit exact component payload bytes | 2026-07-18 | L | high | blocked, do-not-merge |
| [#8863](https://github.com/zeroclaw-labs/zeroclaw/pull/8863) | feat(plugins): host-mediated outbound WebSocket | 2026-07-08 | XL | high | needs-author-action |
| [#9142](https://github.com/zeroclaw-labs/zeroclaw/pull/9142) | feat(plugins): materialize named TLS profiles | 2026-07-18 | XL | high | stacked |

**Alerta de governança:** O tracker de decisão de maintainers (#8692) com 15 comentários indica que decisões arquiteturais estão represadas — risco de desalinhamento entre contributors e roadmap.

---

## Métricas-Resumo do Dia

| Indicador | Valor |
|---|---|
| Issues ativas | 31 |
| Issues fechadas (24h) | 5 |
| PRs abertos | 50 |
| PRs merged (24h) | **0** |
| Releases | 0 |
| Bugs P0-P1 novos | 9 |
| RFCs ativas | 4 |
| trackers monitorados | 3 |

**Veredicto:** Projeto em **modo estabilização intensiva** com acúmulo de PRs para merge e múltiplos bugs de segurança/estabilidade em aberto. A taxa de merge zero nas últimas 24h e o alto volume de issues P1-P2 sugerem necessidade de blitz de triagem antes do próximo release semanal.

---

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*