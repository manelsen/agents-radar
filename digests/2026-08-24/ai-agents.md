# Resumo diário do ecossistema de agentes de IA 2026-08-24

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-23 20:15 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-08-24

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade nas últimas 24h**, com apenas 1 issue aberta e nenhuma alteração em PRs ou releases. A atividade concentrou-se em uma questão técnica de estabilidade relacionada ao gateway service e chamadas stdio MCP, indicando que a atenção atual está voltada para cenários de uso em ambientes de produção (Proxmox). O repositório mantém-se em estado de manutenção reativa, sem novos desenvolvimentos visíveis no período.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não emitiu novas versões desde a última atualização (2026.8.22), mantendo a versão mais recente como ponto de partida estável.

---

## 3. Progresso do Projeto

**Nenhum PR merged ou fechado nas últimas 24h.**

Não há movimentos no pipeline de merge, sugerindo um período de estabilização ou que a equipe está em ciclo de revisão/planejamento antes de novos incrementos.

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| #991 | **[OPEN] MCP stdio calls can hang indefinitely behind the Proxmox launcher lock** |
|------|------------------------------------------------------------------------------------|
| **Autor** | locke1979 |
| **Criado/Atualizado** | 2026-08-23 |
| **Comentários** | 2 |
| **Reações** | 👍 0 |
| **Link** | [nullclaw/nullclaw#991](https://github.com/nullclaw/nullclaw/issues/991) |

**Análise:** A issue descreve um deadlock potencial em ambientes Proxmox onde o gateway service mantém lock em servidores MCP stdio, impedindo execuções standalone do agente. O cenário envolve:
- Ambiente: Proxmox CT 151, NullClaw 2026.8.22
- 148 ferramentas no bridge MCP
- Problema de ownership de processos stdio entre gateway e agente

Este é um **problema de confiabilidade em produção**, não uma feature request. A comunidade demonstra preocupação com cenários de uso real (infraestrutura), evidenciando maturidade do projeto em ambientes enterprise.

---

## 5. Bugs e Estabilidade

### Bug Reportado (Gravidade: Alta — Impacto em Produção)

| Severidade | Descrição | Impacto |
|------------|-----------|---------|
| **Alta** | MCP stdio calls hang indefinitely | Bloqueio total de execuções standalone quando gateway está ativo |

**Detalhes:**
- **Ambiente afetado:** Proxmox containers com bridges MCP extensos
- **Sintoma:** Processo nullclaw agent trava sem timeout
- **Pré-condição:** gateway service rodando + servidor stdio MCP configurado

Não há workarounds documentados ainda. Este bug afeta cenários de automação onde o agente precisa operar independentemente do gateway.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma feature request registrada nas últimas 24h.**

A issue #991, embora classificada como bug, sugere indireta e potencialmente melhorias no gerenciamento de locks e timeouts para operações stdio MCP. Pode influenciar o roadmap em:
- Timeout configurável para chamadas MCP
- Modo de exclusividade vs. compartilhamento de bridges
- Detecção automática de locks existentes

---

## 7. Resumo de Feedback dos Usuários

**Dores identificadas:**

| Dor | Origem | Severidade |
|-----|--------|------------|
| Instabilidade em ambientes Proxmox | Issue #991 | Alta |
| Falta de timeout em operações stdio | Issue #991 | Alta |

**Observações:**
- Usuários estão operando NullClaw em **ambientes de infraestrutura real** (Proxmox CT com 148 ferramentas)
- O projeto está sendo avaliado em contextos que exigem **alta disponibilidade** (long-lived gateway service)
- Ausência de feedback explícito positivo/negativo — comunidade técnica ativa mas silenciosa

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Progresso

| Issue | Título | Idade | Status | Prioridade |
|-------|--------|-------|--------|------------|
| [#991](https://github.com/nullclaw/nullclaw/issues/991) | MCP stdio calls can hang indefinitely | 1 dia | Aberta | **Alta** |

**Análise:** Embora recente, a issue #991 já possui 2 comentários, indicando engajamento inicial. O fato de ser aberta sem resolução após 24h sugere complexidade técnica ou necessidade de triagem adicional. 

**Recomendações:**
1. Priorizar reprodução do bug em ambiente controlado
2. Avaliar adição de timeout configurable para chamadas stdio MCP
3. Considerar documentação de padrões de deployment (standalone vs. gateway)

---

## Métricas Consolidada — 2026-08-24

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 0 |
| PRs abertas | 0 |
| PRs merged/fechadas | 0 |
| Releases | 0 |
| Nível de atividade | 🔴 Baixo |

**Veredicto geral:** Projeto em modo de manutenção reativa. A issue aberta requer atenção imediata para garantir estabilidade em ambientes de produção. Recomenda-se priorização da resolução do bug #991 antes do próximo ciclo de release.

---

*Relatório gerado em 2026-08-24 com base em dados públicos do GitHub.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-08-24  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas de desenvolvimento** neste período. De um lado, ZeroClaw e Hermes Agent demonstram atividade volumosa (100 eventos cada) com foco em correção de bugs críticos de estabilidade e expansão arquitetural. De outro, NullClaw permanece em modo de manutenção reativa, sinalizando um projeto em estágio de maturidade ou com base de contribuidores reduzida. A tendência dominante é a **consolidação de infraestrutura**: otimização de custos de contexto, segurança de sandbox, e gerenciamento de credenciais emergem como preocupações compartilhadas entre os projetos mais ativos. Observa-se convergência em três eixos técnicos — timeout/resiliência de requisições, autenticação OAuth robusta, e expansão de canais de comunicação — indicando maturização natural do ecossistema.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Nível de Atividade | Saúde Geral |
|---------|-------------|-----------|----------|-------------------|-------------|
| **NullClaw** | 1 | 0 | 0 | 🔴 Baixo | Manutenção reativa |
| **NanoBot** | 2 | 20 | 0 | 🟢 Alto | Estabilização em progresso |
| **Hermes Agent** | 50 | 50 | 0 | 🔵 Muito Alto | Tensão — múltiplos P1 |
| **PicoClaw** | 0 | 7 | 0 | 🟡 Médio | Hardening de segurança |
| **IronClaw** | 9 | 22 | 0 | 🟢 Alto | Integrações OAuth degradadas |
| **CoPaw** | 6 | 11 | 0 | 🟢 Alto | Memory leak crítico |
| **ZeroClaw** | 50 | 50 | 0 | 🔵 Muito Alto | Discussões arquiteturais ativas |

**Observações:**
- Nenhum projeto publicou releases no período — ciclo de consolidação antes de próximos tags
- Atividade medida em volume de eventos não reflete necessariamente saúde; Hermes Agent e ZeroClaw com maior atividade também apresentam mais bugs P1 em aberto
- PicoClaw e NullClaw representam extremos de atividade, sugerindo diferentes estágios de ciclo de vida

---

## 3. Posicionamento do Projeto Principal

### Contexto de Referência: Qual projeto lidera o ecossistema?

**Hermes Agent (NousResearch)** e **ZeroClaw** emergem como os projetos com maior tração, cada um com perfil distinto:

| Dimensão | Hermes Agent | ZeroClaw |
|----------|--------------|----------|
| **Volume de atividade** | 100 eventos/24h | 100 eventos/24h |
| **Foco primário** | Desktop client + Bot Mode | Plugin architecture + canais |
| **Bugs críticos** | SQLite corruption (P1) | Stack overflow daemon (P1) |
| **Estratégia** | Estabilização desktop cross-platform | RFC-driven architecture evolution |
| **Comunidade** | 83 comentários em issue de index | 25 comentários em RFC de runtime |

**Vantagens competitivas identificadas:**

- **Hermes Agent:** Ecoossistema mais maduro em integrações (Discord, Matrix, SSH tools), foco em usabilidade desktop com model picker e session management
- **ZeroClaw:** Arquitetura mais modular (plugin WASM, channel expansion), menor dívida técnica aparente em integrações externas
- **NanoBot:** Diferencia-se com features de recovers turn e Telemetria de tokens por requisição — útil para debugging em produção
- **IronClaw:** Abordagem inovadora em sandbox persistente por usuário, mas penalizado por regressions de integração OAuth recentes

**NullClaw** apresenta o menor engajamento e foco exclusivamente em estabilidade de gateway/proxmox — nicho específico sem sinais de expansão.

---

## 4. Focos Técnicos Compartilhados

Os projetos demonstram convergência em cinco áreas técnicas:

### 4.1 Resiliência de Requisições e Timeouts
| Projeto | Feature | Status |
|---------|---------|--------|
| NanoBot | Timeout para no-tools model requests (#5496) | PR aberta |
| NanoBot | TLS context reuse (#5500) | PR aberta |
| Hermes Agent | Race condition FTS rebuild fix (#93200) | PR aberta |
| PicoClaw | SSRF hardening em media downloads | Merged |
| CoPaw | "peer closed connection" timeout issue (#7218) | Em investigação |
| IronClaw | Context projection para custo | Em desenvolvimento |

**Síntese:** Timeout configurável e reutilização de conexões TLS são padrões emergentes para evitar bloqueios indefinidos em agentes de longa duração.

### 4.2 Autenticação OAuth e Credenciais
| Projeto | Problema | Solução |
|---------|----------|---------|
| NanoBot | OAuth não persiste em Docker (#5444) | PR #5445 merged |
| IronClaw | Notion/Gmail/Slack OAuth failing | Issues abertas |
| CoPaw | OAuth2 refresh token rotation (#7066) | PR em review |
| Hermes Agent | Keychain prompt repetido macOS (#91115) | Bug reportado |

**Síntese:** OAuth persistence em ambientes containerizados e rotation de refresh tokens são problemas recorrentes com soluções em progresso fragmentado.

### 4.3 Context Window e Custo de Inferência
- **IronClaw:** Context projection reduz custo de $10.31 para $2.52 por task via Pi-style compaction
- **NanoBot:** Budget de schemas MCP visíveis ao modelo para agentes com 100+ ferramentas
- **ZeroClaw:** Cap de 500 caracteres por resultado web search e budget de 16.000 tokens para 6 providers

**Síntese:** Otimização de contexto emerge como necessidade crítica à medida que agentes operam com ferramentas extensas.

### 4.4 Sandbox e Segurança de Execução
| Projeto | Abordagem | Status |
|---------|-----------|--------|
| IronClaw | Persistent per-user sandbox via iron-proxy (#7732) | Épica v1.4.0 |
| ZeroClaw | Granular sandbox policy filesystem/network (#6996) | RFC ativa |
| PicoClaw | SSRF hardening (Weixin, WeCom, QQ, Telegram...) | Merged |

**Síntese:** Arquiteturas de sandbox persistente (vs. container-por-comando) ganham tração como modelo preferencial.

### 4.5 Expansão de Canais de Comunicação
| Canal | Projetos com Suporte ou Planejado |
|-------|----------------------------------|
| Linear | NanoBot (nativo em desenvolvimento) |
| SMS (Twilio) | ZeroClaw (aceito, não implementado) |
| Mastodon/ActivityPub | ZeroClaw (aceito) |
| Rocket.Chat, Zulip | ZeroClaw (aceito) |
| WhatsApp | PicoClaw (corrigido), Hermes Agent (regression) |

**Síntese:** Expansão multi-canal é estratégia comum, com foco em integrações enterprise e alternativas open source (Matrix, Zulip).

---

## 5. Análise de Diferenciação

### Perfil de Público-Alvo

| Projeto | Público Primário | Caso de Uso Central |
|---------|-----------------|---------------------|
| **NullClaw** | DevOps/Infra | Gateway MCP em Proxmox |
| **NanoBot** | Desenvolvedores | WebUI com recovery de turnos |
| **Hermes Agent** | Usuários finais desktop | Assistente pessoal multi-plataforma |
| **PicoClaw** | Operadores de bots | Multi-channel bot deployment |
| **IronClaw** | Times de engenharia | Coding agent com sandbox |
| **CoPaw** | Usuários Qwen/ Alibaba | Long-running agents |
| **ZeroClaw** | Self-hosters | Plugin ecosystem extensível |

### Diferenças Arquiteturais

| Dimensão | Hermes Agent | ZeroClaw | IronClaw |
|----------|--------------|----------|----------|
| **Modelo de plugin** | Skills index JSON | WASM Component Model | iron-proxy mediation |
| **Canal de comunicação** | Desktop-first | Channel-agnostic | Tools-first |
| **Persistência** | SQLite (P1 corruption) | A definir (RFC) | Workspace artifacts |
| **Sandbox** | Per-command | Per-channel policy | Persistent per-user |

### Matriz de Prioridade Técnica

| Necessidade | NanoBot | Hermes | IronClaw | ZeroClaw |
|-------------|---------|--------|----------|----------|
| Estabilidade desktop | — | 🔴 P1 | — | — |
| Integração OAuth | ✅ Resolvido | 🟡 P2 | 🔴 P1 | 🟢 Estável |
| Custo de contexto | ✅ Feature | — | 🔴 P1 | ✅ Cap implícito |
| Performance inference | ✅ TLS reuse | 🟡 Ollama | 🟢 Projection | ✅ Web search cap |
| Plugin ecosystem | TUI/WebUI | Skills hub | iron-proxy | WASM |

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Projeto | PRs/24h | Tempo médio de resposta | Regressões |
|---------|---------|------------------------|------------|
| **PicoClaw** | 7 (5 merged) | Rápido (bug WhatsApp corrigido) | 1 (SSRF) |
| **NanoBot** | 20 (5 merged) | Médio (~5 dias para OAuth Docker) | 0 |
| **CoPaw** | 11 (5 merged) | Baixo (memory leak ~2 dias sem fix) | 0 explícitas |
| **IronClaw** | 22 (4 merged) | Médio | 3 (OAuth integrations) |
| **ZeroClaw** | 50 (4 merged) | Lento (RFC-heavy) | 1 (daemon overflow) |
| **Hermes Agent** | 50 (1 merged) | Lento (code freeze?) | Múltiplas P1 |
| **NullClaw** | 0 | N/A | N/A |

**Análise:**
- **NanoBot e PicoClaw** representam o ponto ideal de velocidade/qualidade — respostas rápidas a bugs críticos
- **Hermes Agent e ZeroClaw** sofrem de volume alto sem throughput de merge proporcional, indicando gargalos de review
- **IronClaw** demonstra maturity em process (epic tracking, milestone labeling) apesar de regressions
- **NullClaw** e **CoPaw** têm comunidades menores com capacidade limitada de resposta

### Indicadores de Maturidade

| Indicador | Hermes Agent | ZeroClaw | IronClaw | NanoBot |
|-----------|--------------|----------|----------|---------|
| RFC process formal | ❌ | ✅ | ✅ (épicas) | ❌ |
| Milestones/v1.4.0 tagging | ✅ | ✅ | ✅ | ❌ |
| Bug severity labels | ✅ P1/P2 | ✅ S1/S2 | ✅ | ✅ |
| Security hardening proativo | 🟡 | ✅ | ✅ | ❌ |
| Breaking change policy | ❌ | ✅ (tracked) | ❌ | ❌ |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Produto

**1. Agentes persistent-session ganham preferência sobre per-command**
- IronClaw (#7732), ZeroClaw (#9487) e NullClaw discutem modelos de sessão persistente
- Contraste com arquiteturas stateless onde cada comando spawna ambiente isolado

**2. Contexto é o novo petróleo — otimização é mandatória**
- IronClaw mediu custo de 4x ($10.31 vs $2.52) por replay de histórico completo
- NanoBot implementa budget de schemas MCP
- ZeroClaw caps web search em 500 caracteres/resultado
- Implicação: agentes competitivos precisarão de estratégias de contexto management sofisticadas

**3. Integrações enterprise (OAuth, SSO, reverse-proxy) são table stakes**
- Hermes Agent (#93180), IronClaw (Gmail/Notion/Slack), ZeroClaw (Twilio, Rocket.Chat)
- Usuários finais agora esperam setup de integrações sem fricção

**4. Multimodalidade de voz em evidência**
- ZeroClaw RFC #8780: Realtime speech-to-speech para Gemini Live
- Build Remote Agent phone pairing em PicoClaw (#3344) e Hermes Agent (#93199)
- celular como "spectate device" para agentes desktop emergindo como padrão de UX

### 7.2 Tendências Técnicas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **WASM como runtime de plugins** | ZeroClaw #10076, IronClaw iron-proxy | Portabilidade e sandboxing melhorado |
| **TLS context reuse** | NanoBot #5500 | Latência reduzida em requisições persistentes |
| **OAuth2 com rotation de refresh tokens** | CoPaw #7066, NanoBot #5445 | Segurança em long-running deployments |
| **SSRF hardening proativo** | PicoClaw #3322-3324 | Segurança como feature, não after-thought |
| **Prefix caching optimization** | PicoClaw #3321 | Redução de custo de inferência |

### 7.3 Tendências de Mercado

**Sinal forte:** Adoção em infraestrutura real (Proxmox containers, Railway workspaces, Docker em produção) documentada em NullClaw, NanoBot e IronClaw — indica que agentes de IA estão saindo de fase de experimentação para produção.

**Sinal moderado:** Demanda por múltiplos canais de comunicação (SMS, Matrix, Slack, WhatsApp) sugere que agentes são usados como hub central de comunicação, não apenas assistentes standalone.

**Sinal fraco mas emergente:** Localização multilíngue (NanoBot #5367) e documentação de integrações (CoPaw #7224 pedindo Aider CLI docs) indicam expansão para mercados não-anglófonos.

---

## Conclusão Executiva

| Dimensão | Líder | Seguidor | Tendência |
|----------|-------|----------|-----------|
| Volume de desenvolvimento | Hermes Agent / ZeroClaw | NanoBot | Concentração |
| Qualidade de release | PicoClaw | NanoBot | Hardening antes de features |
| Estratégia de produto | IronClaw (sandbox) | Hermes Agent (desktop) | Convergência em sandbox |
| Responsividade a bugs | NanoBot / PicoClaw | Hermes Agent | Disparidade crescente |
| Arquitetura modular | ZeroClaw | IronClaw | WASM como destino |

**Recomendações para desenvolvedores:**
1. **Para novos projetos:** Considerar ZeroClaw ou NanoBot como base — comunidades ativas e arquiteturas extensíveis
2. **Para produção:** Priorizar NanoBot (estável) ou IronClaw (apesar de regressions OAuth) — evitar Hermes Agent até P1 resolution
3. **Para experimentação:** NullClaw oferece base minimalista, mas com suporte limitado da comunidade

**Recomendações para decisores técnicos:**
1. Monitorar resolução de P1s em Hermes Agent (SQLite corruption) — impacto direto em desktop
2. Acompanhar RFCs de ZeroClaw (#9487, #10076) como indicadores de arquitetura future-proof
3. Avaliar IronClaw para casos de uso com sandbox persistente — arquitetura mais alinhada a enterprise security

---

*Relatório gerado em 2026-08-24. Dados consolidados de github.com/nullclaw, github.com/HKUDS/nanobot, github.com/nousresearch/hermes-agent, github.com/sipeed/picoclaw, github.com/nearai/ironclaw, github.com/agentscope-ai/CoPaw, github.com/zeroclaw-labs/zeroclaw.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-24

---

## 1. Panorama do Dia

O projeto NanoBot apresenta alta atividade de desenvolvimento no período analisado, com **20 PRs atualizadas nas últimas 24h** (15 abertas e 5 merged/fechadas) e **2 issues** no mesmo intervalo. A atividade concentra-se na estabilização de componentes críticos — incluindo timeouts de requisições, gerenciamento de contextos TLS e persistência de credenciais OAuth — sinalizando um ciclo focado em robustez. Ao mesmo tempo, recursos significativos estão em pipeline: integração nativa com Linear, localização multilíngue do WebUI, e ferramentas de configuração unificadas. A ausência de releases novas indica que a equipe está consolidando mudanças antes de um próximo tag.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões no período. Isso sugere que a equipe está em fase de consolidação do código antes de um próximo release, conforme indicado pelo volume de PRs de correção e refatoração em andamento.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (5)

| # | Título | Resumo do Avanço |
|---|--------|------------------|
| **#5420** | `feat(runtime): add user-controlled turn recovery` | Adiciona checkpoint sidecar para turnos WebSocket interrompidos, expondo recuperação explícita **Continue / Dismiss** no WebUI e TUI — elimina resume automático e restaura respostas já persistidas sem chamada adicional ao modelo. |
| **#5445** | `fix(docker): persist OAuth client data` | Resolve root cause de credenciais OAuth não persistentes em Docker, redirecionando XDG data para o diretório montado e mantendo escrita após drop para usuário `nanobot`. |
| **#5491** | `fix(webui): keep answer text outside reasoning shell` | Preserva slices de resposta entre turns de answer → tool → answer, mantendo atividade de reasoning dentro da superfície de atividade enquanto mescla slices em uma mensagem final. |
| **#5492** | `feat(cli): expose nanobot process identities` | Nomeia processos CLI Python (`nanobot-agent`, `nanobot-webui`, `nanobot-gateway`) e expõe Bun child como `nanobot-tui`, melhorando diagnóstico e depuração. |
| **#5475** | `refactor: remove remaining dead code` | Remove helpers, state e deps não utilizados (`websocket-client` eliminado), estreitando exports de WebUI e TUI aos símbolos com consumidores reais. |

**Conclusão:** As mudanças merged priorizam resiliência operacional (recovery, OAuth em Docker), integridade de UI (preservação de respostas) e saúde do codebase (dead code removal).

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Reações | Relevância |
|---|--------|-------------|---------|------------|
| **#5444** | [bug] Failed to login OpenAI via OAuth in Docker | 2 | 0 | Bug crítico de autenticação OAuth em Docker — **já resolvido via PR #5445**. |

### Análise de Demandas

A issue mais comentada (#5444) evidencia um problema recorrente em ambientes containerizados: **credenciais OAuth não sobrevivem reinicializações de containers**. A correção foi merged rapidamente (5 dias após abertura), demonstrando boa responsividade.

A issue #5493 traz uma **demanda de UX multilíngue**: preview de documentos HTML, .txt e .md diretamente na interface. A solução proposta usa `iframe + srcdoc` com isolamento de sandbox, indicando atenção à segurança. Este é um indicador de que usuários finais desejam mais autonomia dentro do chat.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (Issues Abertas: 1)

| Severidade | # | Título | Status | Impacto |
|------------|---|--------|--------|---------|
| Média | **#5493** | Enhancement: preview de documentos HTML/txt/md | Aberta | Usabilidade — não bloqueante |

### Correções em Progresso (PRs Abertas com Tags de Bug)

| # | Título | Tipo | Prioridade | Descrição |
|---|--------|------|------------|------------|
| **#5500** | `fix(codex): reuse TLS contexts across requests` | Bug/Regression/Performance | P2 | Cache de contextos TLS por instância — resolve captura py-spy de 10s em requisições travadas. |
| **#5496** | `fix(agent): time out no-tools model requests` | Bug/Regression | P2 | Adiciona proteção timeout em requests `no-tools` (malformed-call recovery, empty-response finalization) que antes chamavam provider diretamente. |
| **#5490** | `fix(webui): clarify aggregate turn token usage` | Bug/Regression | P2 | Mostra contagem de chamadas de modelo quando um turn agrega múltiplos relatórios de tokens de prompt. |
| **#5152** | `fix(subagent): mark partial completion results` | Regression | — | Conta tasks siblings ainda em execução ao anunciar resultado de subagent, evitando inferência incorreta do modelo. |
| **#5469** | `fix(tui): show measured request context` | Bug | P2 | Separa uso cumulativo de tokens (backend) de medição por requisição (UI), mostrando apenas a mais recente no footer do TUI. |

**Resumo:** A maioria dos bugs está classificada como **P2 (regressões e estabilidade)**, concentrando-se em três eixos: timeout/performance de requisições, precisão de telemetria (tokens), e recuperação de erros. Nenhum bug P1 (crítico/bloqueante) está aberto.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Pipeline

| # | Título | Tags | Descrição | Impacto Estratégico |
|---|--------|------|-----------|----------------------|
| **#5498** | `feat(config): unify onboarding in the Agent TUI` | Enhancement, Feature, WebUI, Documentation | Editor de configuração transport-neutral com revisões otimistas e snapshots seguros para segredos. Superfície `/config` no TUI com essenciais na primeira tela e busca para configurações avançadas. | **Alta** — unifica experiência de configuração entre TUI e WebUI. |
| **#5497** | `feat(config): add shared complete editor contract` | Enhancement, Feature, WebUI | Contrato de editor de configuração completo baseado em schema, com redacção e preservação de segredos + rotas autenticadas. | **Alta** —基础设施 de configuração compartilhada entre interfaces. |
| **#5495** | `feat(channels): add native Linear agent channel` | Feature, Channel, Documentation | Canal nativo Linear Agent com OAuth + PKCE, tokens rotativos por workspace, webhooks assinados via SQLite queue durável, e flow de setup no WebUI. | **Alta** — expansão de integrações B2B. |
| **#5493** | Enhancement: preview de documentos | Enhancement | Preview de HTML, .txt e .md via iframe + srcdoc. | **Média** — usabilidade no painel de arquivos. |
| **#5388** | `feat(agent): budget model-visible MCP schemas` | Feature | Byte budget opcional para schemas MCP visíveis ao modelo, com seleção determinística de subset estável por run. | **Média** — otimização de contexto em cenários com muitas ferramentas. |
| **#5386** | `feat(mcp): preserve MCP Apps result metadata` | Feature | Preserva metadata e campos ricos de resultado de MCP Apps separadamente do texto facing ao modelo. | **Média** — extensibilidade de ferramentas MCP. |
| **#5408** | `feat(webui): add follow-up suggestions` | Enhancement, Feature, WebUI | Sugestões de follow-up efêmeras após turnos WebUI bem-sucedidos, geradas via provider primário. | **Média** — engajamento e UX de conversação. |
| **#5367** | `feat(webui): localize agent activity` | Feature, WebUI | Localização de labels de atividade do Agent em 10 locales, atualizando imediatamente na troca de idioma. | **Média** — internacionalização completa. |

### Sinais de Roadmap

1. **Configuração Unificada:** Os PRs #5498 e #5497 indicam que a equipe está consolidando a superfície de configuração em um contrato compartilhado entre TUI e WebUI — sinal forte de maturidade do produto.
2. **Canais de Integração:** A adição de Linear Agent (#5495) sugere foco em integrações enterprise além do suporte genérico a canais.
3. **Performance de Contexto:** A feature de budget para MCP schemas (#5388) aborda limitações práticas de contexto em agentes com muitas ferramentas.

---

## 7. Resumo de Feedback dos Usuários

### Issues Reportadas por Usuários

| # | Autor | Problema | Contexto |
|---|-------|----------|----------|
| **#5444** | Bennett-Yang | Falha de login OAuth em Docker | Usuário em ambiente containerizado não conseguia autenticação OpenAI. **Problema resolvido.** |
| **#5493** | john00010 | Necessidade de preview de documentos | Proposta de usabilidade: preview inline de HTML, .txt, .md para facilitar revisão de arquivos. |

### Análise de Sentimentos

- **Dores identificáveis:**
  - Autenticação em ambientes Docker/implantados (OAuth persistence)
  - Ausência de preview de documentos no painel de arquivos

- **Satisfação inferreda:**
  - Tempo de resolução de bugs críticos (OAuth Docker) foi de ~5 dias, dentro de padrões aceitáveis para projetos OSS
  - Volume de contribuições (20 PRs em 24h) indica comunidade ativa

- **Cenários de uso observados:**
  - Agentes com múltiplas ferramentas MCP (necessidade de budget de contexto)
  - Integração com Linear para workflows B2B
  - Operações em Docker em produção

---

## 8. Backlog que Merece Atenção

### PRs com Conflitos ou Sem Movimento Recente

| # | Título | Atualização | Conflitos | Urgência |
|---|--------|-------------|-----------|----------|
| **#5487** | `feat(webui): file preview path fixes + subagent activity & lifecycle replay` | 2026-08-22 | ⚠️ Sim | **Alta** — adiciona preview markdown e corrigência de caminhos; precisa de rebase. |
| **#5469** | `fix(tui): show measured request context` | 2026-08-22 | ⚠️ Sim | **Média** — mejora telemetria TUI; conflito pode indicar dependência de #5490 ou #5492. |
| **#5408** | `feat(webui): add follow-up suggestions` | 2026-08-22 | ⚠️ Sim | **Média** — feature de UX; precisa resolução de conflitos antes de merge. |
| **#5367** | `feat(webui): localize agent activity` | 2026-08-22 | ⚠️ Sim | **Média** — localização para 10 idiomas; conflita com outras mudanças de WebUI. |

### PRs Abertas há >7 dias sem Merge

| # | Título | Criado | Status | Observação |
|---|--------|--------|--------|------------|
| **#5152** | `fix(subagent): mark partial completion results` | 2026-07-28 | Aberta | ~26 dias sem merge — pode precisar de reavaliação ou merge. |
| **#5385** | `fix(matrix): complete Element SAS request flow` | 2026-08-13 | Aberta | ~11 dias — foco em segurança de verificação Matrix. |
| **#5388** | `feat(agent): budget model-visible MCP schemas` | 2026-08-13 | Aberta | ~11 dias — feature de performance; pode competir com outras mudanças de schema. |
| **#5386** | `feat(mcp): preserve MCP Apps result metadata` | 2026-08-13 | Aberta | ~11 dias — extensibilidade MCP. |

### Recomendação

**Priorizar resolução de conflitos em #5487, #5469, #5408 e #5367** — todas são mudanças de UI que provavelmente competem por alterações no mesmo módulo. A existência de múltiplos conflitos simultâneos pode indicar necessidade de uma sessão de mergeCoordination ou de um lock temporário no módulo WebUI.

---

## Links do Projeto

- **Repositório:** [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)
- **Issue #5444:** [HKUDS/nanobot Issue #5444](https://github.com/HKUDS/nanobot/issues/5444)
- **Issue #5493:** [HKUDS/nanobot Issue #5493](https://github.com/HKUDS/nanobot/issues/5493)
- **PR #5420:** [HKUDS/nanobot PR #5420](https://github.com/HKUDS/nanobot/pull/5420)
- **PR #5445:** [HKUDS/nanobot PR #5445](https://github.com/HKUDS/nanobot/pull/5445)
- **PR #5491:** [HKUDS/nanobot PR #5491](https://github.com/HKUDS/nanobot/pull/5491)
- **PR #5492:** [HKUDS/nanobot PR #5492](https://github.com/HKUDS/nanobot/pull/5492)
- **PR #5475:** [HKUDS/nanobot PR #5475](https://github.com/HKUDS/nanobot/pull/5475)
- **PR #5498:** [HKUDS/nanobot PR #5498](https://github.com/HKUDS/nanobot/pull/5498)
- **PR #5497:** [HKUDS/nanobot PR #5497](https://github.com/HKUDS/nanobot/pull/5497)
- **PR #5495:** [HKUDS/nanobot PR #5495](https://github.com/HKUDS/nanobot/pull/5495)
- **PR #5500:** [HKUDS/nanobot PR #5500](https://github.com/HKUDS/nanobot/pull/5500)
- **PR #5496:** [HKUDS/nanobot PR #5496](https://github.com/HKUDS/nanobot/pull/5496)
- **PR #5487:** [HKUDS/nanobot PR #5487](https://github.com/HKUDS/nanobot/pull/5487)

---

*Relatório gerado em 2026-08-24 com base em dados de atividade do GitHub das últimas 24 horas.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-24

---

## 1. Panorama do Dia

O projeto Hermes Agent mantém um ritmo intenso de atividade, com **100 eventos combinados** (50 issues + 50 PRs) atualizados nas últimas 24 horas, indicando alta engajamento da comunidade e contributors. No entanto, **não houve novos lançamentos** nesta janela, sugerindo que a equipe está em ciclo de validação ou preparação de release. O estado de saúde geral apresenta **sinais de tensão** em duas frentes críticas: (a) a estabilidade do desktop, com múltiplos bugs de alta severidade relacionados a corrupção de banco de dados e falhas pós-atualização, e (b) a confiabilidade do instalador em plataformas Linux/Windows. A atividade de PRs sugere foco em estabilização — incluindo fixes para race conditions em reconstrução de FTS e problemas de layout no desktop — sinalizando uma possível correção pontual iminente.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

A ausência de novos releases contrasta com o alto volume de atividade, indicando que a equipe está possivelmente em fase de code freeze para a próxima versão. Recomenda-se monitorar o repositório para announcements nas próximas 48h.

---

## 3. Progresso do Projeto

Abaixo os PRs mais relevantes atualizados ou merged hoje, agrupados por área de impacto:

### Correções Críticas de Estabilidade
| PR | Título | Impacto | Link |
|----|--------|---------|------|
| **#93200** | `fix(state): serialize cross-process FTS rebuild with file lock` | Resolve race condition que causa corrupção recorrente do `state.db` quando múltiplos processos (gateway + desktop/serve) competem na reconstrução FTS simultânea | [PR #93200](https://github.com/NousResearch/hermes-agent/pull/93200) |
| **#93202** | `fix(desktop): stop persisting ephemeral tile panes in layout tree` | Elimina panes transitórias (preview tabs) sendo salvas no layout persistente, causando instabilidade visual a cada reinício | [PR #93202](https://github.com/NousResearch/hermes-agent/pull/93202) |
| **#93194** | `fix(desktop): visible close for every preview pane surface` | Fecha 5 issues duplicadas (#88156, #91723, #87411, #87498, #87071) — adiciona botão de fechar em todos os tipos de preview pane | [PR #93194](https://github.com/NousResearch/hermes-agent/pull/93194) |
| **#93203** | `fix(tools): pass single_query_deny_message from SSH-config write gate` | Corrige TypeError guaranteed em cada aprovação de escrita em config SSH | [PR #93203](https://github.com/NousResearch/hermes-agent/pull/93203) |
| **#93131** | `fix(discord): forward skills approval arguments` | Permite que `/skills approve <id>` funcione corretamente no Discord, corrigindo argumento faltante no registro do comando | [PR #93131](https://github.com/NousResearch/hermes-agent/pull/93131) |

### Melhorias de Infraestrutura e Bot Mode
| PR | Título | Impacto | Link |
|----|--------|---------|------|
| **#93151** | `feat(bot-mode): push-notified relay drain with poll backstop` | Substitui polling puro por push notifications para entrega de envelopes Bot Mode, com poll como fallback — reduz latência e carga | [PR #93151](https://github.com/NousResearch/hermes-agent/pull/93151) |
| **#93150** | `feat(bot-mode): per-profile turn lock — concurrent deliveries queue` | Implementa lock por perfil para evitar race conditions em entregas simultâneas ao mesmo bot profile | [PR #93150](https://github.com/NousResearch/hermes-agent/pull/93150) |
| **#93180** | `feat(dashboard_auth): trusted reverse-proxy auth via supports_request_auth` | Adiciona autenticação via proxy reverso (X-Remote-User), habilitando integrações SSO/Corporativas | [PR #93180](https://github.com/NousResearch/hermes-agent/pull/93180) |
| **#93199** | `Add Build Remote Agent phone pairing (gbr/1)` | Adiciona protocolo de pareamento para agente desktop ser espectado por celular via QR ou código 8-char | [PR #93199](https://github.com/NousResearch/hermes-agent/pull/93199) |

### Correções de Platformas Específicas
| PR | Título | Impacto | Link |
|----|--------|---------|------|
| **#87395** | `fix(nix): include tests/fixtures in desktop renderer source` | Corrige build Nix do desktop, que falhava no typecheck por módulo de fixture ausente | [PR #87395](https://github.com/NousResearch/hermes-agent/pull/87395) |
| **#79566** | `fix(gateway): preserve shared runtime lock ownership` | Melhora robustez de `hermes cron status` em ambientes com PID namespace ou múltiplos UIDs | [PR #79566](https://github.com/NousResearch/hermes-agent/pull/79566) |
| **#62615** | `fix(tools): reap headless Chromium orphaned from dead agent-browser daemon` | Previne acumulação de ~200 processos Chromium órfãos em gateways de longa duração — risco moderado de blast | [PR #62615](https://github.com/NousResearch/hermes-agent/pull/62615) |

### PR Fechado / Merged Hoje
| PR | Título | Link |
|----|--------|------|
| **#91950** | `feat(sessions): filter list by start date` — adiciona `--after` e `--before` ao `hermes sessions list` | [PR #91950](https://github.com/NousResearch/hermes-agent/pull/91950) |

---

## 4. Temas Quentes da Comunidade

### Discussões com Maior Engajamento (por comentários)

**#66616 — Skills Index Degraded** *(83 comentários — em aberto)*
Este é o issue mais comentando do dia, refletindo preocupação significativa com a **saúde do Skills Hub**. O index do `/docs/api/skills-index.json` está 29.8h atrasado em relação ao limite de 26h, e a automação de reconstrução via workflow cron parece não estar executando corretamente. A comunidade debate ativamente estratégias de mitigação e root cause analysis.
🔗 [Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616)

**#91277 — Fleet Update Reliability Tracking** *(19 comentários — em aberto, P1)*
Issue de rastreamento estratégico que consolida ~30 issues + ~15 PRs relacionadas à instalação e atualização. O denominador comum é a ausência de um plano unificado para updating de frotas com perfis múltiplos, gateways remotos e desktop client. Este issue sinaliza uma necessidade de **arquitetura de atualização robusta** e possivelmente uma breaking change futura.
🔗 [Issue #91277](https://github.com/NousResearch/hermes-agent/issues/91277)

**#18715 — Remote Hermes Agent com Execução Local de Tools** *(16 comentários, 26 👍 — em aberto)*
Feature request com alta aprovação da comunidade (segundo maior 👍 listado). O cenário de uso é: Machine A como cliente/workspace local + Machine B como Hermes Agent remoto com skills, memória e sessão. Hoje há limitation na configuração de tool execution quando o gateway é remoto. Forte candidato a feature de alta prioridade.
🔗 [Issue #18715](https://github.com/NousResearch/hermes-agent/issues/18715)

**#87697 — Bug Ollama Stream Cancellation** *(10 comentários — em aberto)*
Após update recente, requests ao Ollama local falham consistentemente com cancelamento após ~1.5s, disparando loop de tokens `<unused49>`. Este é um **regression bug** com impacto direto em usuários de LLMs locais.
🔗 [Issue #87697](https://github.com/NousResearch/hermes-agent/issues/87697)

### Issues Fechados Hoje com Feedback Relevante
**#47042** — `[BUG] Desktop model picker hides custom providers` *(3 comentários, 2 👍, fechado)*
Bug de deduplicação no `build_models_payload()` fazia providers customizados desaparecerem do model picker. O label `sweeper:implemented-on-main` indica que a correção já está no main.
🔗 [Issue #47042](https://github.com/NousResearch/hermes-agent/issues/47042)

**#84345** — `[BUG] Model switch triggers missing user message prompt` *(2 comentários, fechado)*
Bug de session history ao trocar modelo — UI exibia prompt de mensagem faltando no histórico.
🔗 [Issue #84345](https://github.com/NousResearch/hermes-agent/issues/84345)

---

## 5. Bugs e Estabilidade

### Por Severidade (P1 e P2)

| Severidade | Issue | Descrição | Link |
|-----------|-------|-----------|------|
| **P1** | **#89737** | Desktop `state.db` corrompido (SQLite error 11, "database disk image is malformed") — afecta tabela `messages`, não só FTS. Reinstall não recupera. Dados de chat permanentemente perdidos. | [🔗](https://github.com/NousResearch/hermes-agent/issues/89737) |
| **P1** | **#91277** | Tracking issue: install/update é capacidade menos confiável do projeto — ~30 issues + ~15 PRs tratando sintomas isolados sem plano unificado. | [🔗](https://github.com/NousResearch/hermes-agent/issues/91277) |
| **P1** | **#93200** (PR) | FTS rebuild race condition entre processos — penyebab korupsi DB. PR de fix disponível. | [🔗](https://github.com/NousResearch/hermes-agent/pull/93200) |
| **P2** | **#93063** | Fedora 44: instalação falha via `install.sh`. Bug de compatibilidade com nova distribuição. | [🔗](https://github.com/NousResearch/hermes-agent/issues/93063) |
| **P2** | **#91115** | macOS: keychain prompt após cada `hermes update` — SafeStorage ACL não corresponde após re-sign ad-hoc. Re-prompting em cada launch. | [🔗](https://github.com/NousResearch/hermes-agent/issues/91115) |
| **P2** | **#87697** | Ollama stream cancelamento após ~1.5s — regression, impacta LLMs locais. | [🔗](https://github.com/NousResearch/hermes-agent/issues/87697) |
| **P2** | **#70776 / #70792 / #64704** | *(3 issues duplicadas)* Weixin/iLink: envio de imagens falha com `ret: -2`. Todas 3 paths de upload bloqueadas. Status: blocked. | [🔗 #70776](https://github.com/NousResearch/hermes-agent/issues/70776) |
| **P2** | **#92837** | Heartbeat: ticks marcados como "fired" mas nunca delivered — silent data loss após idle-evict. | [🔗](https://github.com/NousResearch/hermes-agent/issues/92837) |
| **P2** | **#92927** | Windows: Desktop BOTS menu vazio + "IPC bridge unavailable" após `hermes update`. Broken install no Windows. | [🔗](https://github.com/NousResearch/hermes-agent/issues/92927) |
| **P2** | **#93057** | Background review replaya 350k–384k tokens repetidamente — compaction disabled mas sem safeguard. | [🔗](https://github.com/NousResearch/hermes-agent/issues/93057) |
| **P2** | **#92859** | Delegate task batch no Discord: subagent adopta routing key do parent, terminanting parent como `session_switch` e perde resultado do batch. | [🔗](https://github.com/NousResearch/hermes-agent/issues/92859) |
| **P2** | **#91564** | Windows: Desktop spawna loopback server junto com gateway local, duplicando todas conexões MCP. | [🔗](https://github.com/NousResearch/hermes-agent/issues/91564) |
| **P2** | **#91668** | Desktop SSH connections e `serve` backends leak após Cmd+Q — 21+ `backend.lock.json` acumulados. | [🔗](https://github.com/NousResearch/hermes-agent/issues/91668) |
| **P2** | **#92778** | Página de docs inacessível para IPs russos — forbidden error. | [🔗](https://github.com/NousResearch/hermes-agent/issues/92778) |

### Análise de Tendência

Três clusters de bugs emergem com clareza:

1. **Cluster Desktop/State (P1):** Corrupção de SQLite, vazamento de sessões, layout instável — indica deuda técnica em gerenciamento de estado cross-process. O PR #93200 endereça a race condition raiz.
2. **Cluster Install/Update (P1-P2):** Fedora, Windows, macOS — três plataformas com falhas distintas no pipeline de atualização. É o issue #91277 consolidado.
3. **Cluster Weixin/Messaging (P2, blocked):** Três issues duplicadas de imagem failing com `ret: -2` — aparentemente account/API issue, não code bug, mas sem resolução há mais de um mês.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features de Alta Demanda

| Feature | Issue/PR | Prioridade | Demanda | Link |
|---------|----------|-----------|---------|------|
| **Remote Hermes Agent com tool execution local** | #18715 | P2 | 26 👍, 16 comentários | [🔗](https://github.com/NousResearch/hermes-agent/issues/18715) |
| **Fleet update reliability (unified plan)** | #91277 | P1 | Tracking issue consolidado | [🔗](https://github.com/NousResearch/hermes-agent/issues/91277) |
| **Build Remote Agent phone pairing** | #93199 (PR) | P3 | Novo PR de feature | [🔗](https://github.com/NousResearch/hermes-agent/pull/93199) |
| **Bot Mode reliability program** | #93091 | P3 | 4 comentários, relacionado a #93151 + #93150 | [🔗](https://github.com/NousResearch/hermes-agent/issues/93091) |
| **Matrix spec-correct threading** | #62088 | P2 | 5 comentários | [🔗](https://github.com/NousResearch/hermes-agent/pull/62088) |
| **Desktop session sidebar filter by cron-job tags** | #93176 | P3 | 1 comentário | [🔗](https://github.com/NousResearch/hermes-agent/issues/93176) |

### Sinais de Roadmap

- **Bot Mode como prioridade estratégica:** Três PRs relacionados abertos no mesmo dia (#93151, #93150, #93091) indicam que o time está investindo em confiabilidade do Bot Mode para multi-bot coordination e group rooms.
- **EnvelopeBudget MCP:** PR #93196 adiciona o EnvelopeBudget ao catálogo MCP oficial, sinalizando expansão do ecossistema de ferramentas.
- **Reverse-proxy auth:** PR #93180 endereça necessidade de integração empresarial/Corporativa, sugerindo foco em adoption em ambientes corporativos.
- **Matrix adapter maturity:** PRs #62088, #51807, #51804, #51802, #87258 (todos do mesmo autor, `iainlane`) mostram investimento consistente na plataforma Matrix — possivelmente como alternativa open source ao Slack/Discord para uso corporativo.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

**1. Instabilidade pós-atualização (multi-plataforma)**
Fedora 44 não consegue instalar; Windows perde o menu BOTS e o IPC bridge após update; macOS re-prompts keychain a cada launch. O denominador comum é que **o pipeline de atualização fragmentado está quebrando a

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-24

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **alta atividade de manutenção** nesta data, com 7 pull requests atualizados nas últimas 24 horas. Desse total, 5 foram fechados (incluindo correções de segurança SSRF e estabilidade do WhatsApp), enquanto 1 novo PR aberto introduz suporte a emparelhamento de telefone para Build Remote Agent. As 2 issues fechadas representam features rejeitadas por estagnação (stale), indicando que o time prioriza trabalho ativo sobre demandas antigas. O volume de PRs sugere uma fase de consolidação e hardening do código base, sem novos lançamentos programados.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não emitiu novas versões desde o último período rastreado. Isso é consistente com o padrão de desenvolvimento observado, onde commits de manutenção e correções são acumulados antes de um próximo tag formal.

---

## 3. Progresso do Projeto

As seguintes PRs foram fechadas ou mescladas nas últimas 24 horas:

| PR | Título | Impacto |
|---|---|---|
| [#3324](https://github.com/sipeed/picoclaw/pull/3324) | `fix(weixin): use CreateSafeHTTPClient for media downloads` | 🔒 SSRF hardening —媒体的下载链路原先使用不安全的 `api.HttpClient`，可被重定向至 endereços loopback/privados. Substituído por cliente dedicado com validação `ValidateSafeHTTPURL`. |
| [#3323](https://github.com/sipeed/picoclaw/pull/3323) | `fix(wecom): use CreateSafeHTTPClient for media downloads` | 🔒 SSRF hardening — Idêntico ao PR anterior para o canal WeCom. Elimina vetor de ataque similar. |
| [#3322](https://github.com/sipeed/picoclaw/pull/3322) | `fix(channels): block private targets on inbound media downloads` | 🔒 SSRF hardening — Extensão do hardening para QQ, Telegram, Discord, LINE e Slack. Antes apenas OneBot estava protegido. |
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) | `fix(agent): move dynamic context after history to preserve prefix caching` | ⚡ Performance — Contexto dinâmico (`## Current Time`, `## Runtime`, etc.) movido para após o histórico. Corrige invalidação prematura de cache de prefixo, reduzindo latência em inferências repetidas. |
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) | `fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"` | ✅ Estabilidade — Atualiza dependência `whatsmeow` que estava sendo rejeitada pelo servidor WhatsApp (HTTP 405). Restaura funcionalidade nativa do canal WhatsApp. |

**PR aberta aguardando revisão:**
- [#3344](https://github.com/sipeed/picoclaw/pull/3344) — `Add Build Remote Agent phone pairing (gbr/1)`: Adiciona protocolo `gbr/1` para emparelhamento de telefone com agente desktop via QR ou código de 8 caracteres. **Relevância:** Permite cenários de "spectate" onde o celular observa o agente. Criada em 2026-08-23.

---

## 4. Temas Quentes da Comunidade

As issues fechadas hoje representam demandas de comunidade que não receberam engajamento suficiente para avançar:

### Issues fechadas (stale)

| Issue | Título | Comentários | Demanda |
|---|---|---|---|
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | `[Feature] Support OAuth 2.1 for MCP servers` | 4 | Adição de suporte OAuth 2.1 para servidores MCP, alinhado a issue #2546. Marcada como "Nice-to-Have". |
| [#3325](https://github.com/sipeed/picoclaw/issues/3325) | `[Feature] Render Telegram tables with rich messages` | 2 | Uso da API nativa de tabelas do Telegram Bot API 10.1, ao invés de renderizar como texto monoespaçado. |

**Análise:** Ambas as features foram sinalizadas como enhancement, não blocking. A falta de comentários após 2-4 interações sugere que não são prioridade imediata do core team. A comunidade demonstra interesse em melhorias de integração (OAuth 2.1) e qualidade de renderização (tabelas Telegram), mas estas demandas estão em compasso de espera.

**PR em aberto com potencial discussão:**
- [#3222](https://github.com/sipeed/picoclaw/pull/3222) — Refatoração do DeltaChat (-200LOC). Atualizada em 2026-08-23. Não há contagem de comentários visível, indicando possível necessidade de atenção da maintainer.

---

## 5. Bugs e Estabilidade

**Nenhum bug novo foi reportado nas últimas 24 horas.**

No entanto, as correções fechadas hoje endereçavam dois problemas de estabilidade críticos:

1. **WhatsApp "Client outdated (405)"** — O canal WhatsApp nativo estava completamente quebrado por incompatibilidade de versão com os servidores do WhatsApp. A correção (#3320) resolve a regressão.

2. **SSRF via media downloads** — Vulnerabilidade consistente em múltiplos canais (Weixin, WeCom, QQ, Telegram, Discord, LINE, Slack) onde URLs de mídia podiam ser redirecionadas para endereços internos/privados. As correções (#3322, #3323, #3324) implementam hardening em cascata.

**Métricas de saúde:**
- Issues abertas/ativas nas últimas 24h: **0**
- Bugs críticos reportados: **0**
- Correções de segurança mescladas: **3**

---

## 6. Pedidos de Features e Sinais de Roadmap

Novas demandas identificadas para a próxima versão:

| Feature | Issue | Prioridade Indicada | Notas |
|---|---|---|---|
| OAuth 2.1 para MCP servers | [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Nice-to-Have | Alinhado com issue #2546 (OAuth para MCP). Não há timeline. |
| Tabelas nativas no Telegram | [#3325](https://github.com/sipeed/picoclaw/issues/3325) | Nice-to-Have | Requer atualização para Telegram Bot API 10.1+. |
| Emparelhamento gbr/1 (Build Remote Agent) | [#3344](https://github.com/sipeed/picoclaw/pull/3344) | Enhancements (PR) | Funcionalidade nova — em revisão. |

**Sinais de roadmap inferidos:**
- O foco em **hardening de segurança** (SSRF) sugere priorização de estabilidade e segurança.
- A **atualização de dependência do WhatsApp** indica alinhamento com mudanças upstream da Meta.
- A **refatoração do DeltaChat** (#3222) sinaliza limpeza de código antes de features maiores.
- O **prefix caching** otimizado (#3321) sugere foco em performance de inference.

---

## 7. Resumo de Feedback dos Usuários

Com base nas issues e PRs, os padrões de feedback implícitos são:

### Dores identificadas

| Dor | Evidência | Severidade |
|---|---|---|
| Canal WhatsApp inoperante | `#3320` — erro HTTP 405, reconnects falhando | 🔴 Alta |
| Exposição SSRF em múltiplos canais | `#3322-#3324` — redirect para loopback/privado | 🔴 Crítica (já corrigida) |
| Renderização degradada no Telegram | `#3325` — tabelas viram texto plano | 🟡 Média |
| Incompatibilidade OAuth 2.1 | `#3302` — limitação para MCP servers modernos | 🟡 Média |

### Cenários de uso mencionados

- **Agente desktop com phone spectate**: Conectar celular para observar agente remotamente via `gbr/1` (#3344).
- **Integração corporativa**: Canais WeCom, Weixin como vetores de comunicação empresarial.
- **Uso multi-canal**: QQ, Discord, LINE, Slack como plataformas de usuário final.
- **DeltaChat como fallback**: Usuários que dependem de email federado.

### Indicadores de satisfação

- **Atividade de PRs**: 7 updates em 24h demonstra engajamento ativo da comunidade.
- **Resolução de bugs**: O time responde rapidamente a regressões (WhatsApp foi corrigido).
- **Manutenção preventiva**: SSRF hardening foi feito proativamente antes de reportes públicos.

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Idade | Status | Ação Recomendada |
|---|---|---|---|---|
| Refatoração DeltaChat (-200LOC) | PR | ~7 semanas | Aberta, atualizada | Revisar e validar changes. Remove features legadas. |
| OAuth 2.1 para MCP | Issue | ~3 semanas | Fechada (stale) | Reabrir se community manager validar como roadmap item. |
| Tabelas Telegram | Issue | ~2 semanas | Fechada (stale) | Avaliar se alinhado com roadmap Telegram API. |

**Items em risco de estagnação:**
- [#3222](https://github.com/sipeed/picoclaw/pull/3222) — Mantida aberta desde 2026-07-03, com atividade recente (2026-08-23). Se não revisada em ~2 semanas, pode atingir estagnação também.

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|---|---|
| 🔄 PRs atualizados | 7 |
| ✅ PRs fechados/merged | 5 |
| 📥 PRs abertos | 2 |
| 🐛 Issues abertas/ativas | 0 |
| 🔒 Issues fechadas | 2 |
| 🎉 Novas releases | 0 |
| 🔧 Correções de segurança (SSRF) | 3 |
| ⚡ Correções de estabilidade (WhatsApp) | 1 |
| 🚀 Features em revisão | 1 |

---

**Próximos marcos a monitorar:**
1. Revisão e merge de [#3344](https://github.com/sipeed/picoclaw/pull/3344) (gbr/1 pairing)
2. Status da refatoração [#3222](https://github.com/sipeed/picoclaw/pull/3222) (DeltaChat)
3. Potencial nova release após ciclo de hardening de segurança

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
**Data:** 2026-08-24 | **Repositório:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Panorama do Dia

O projeto IronClaw demonstra **alta atividade de desenvolvimento** neste período de 24 horas, com 9 issues atualizadas e 22 PRs em movimento. A equipe concentra esforços em três frentes principais: (1) evolução da infraestrutura de sandbox e segurança de credenciais (#7810, #7825), (2) otimização de custos e performance via contexto projection (#7824) e (3) melhorias no pipeline de CI (#7809, #7817, #7821). Paralelamente, múltiplas issues de product feedback indicam problemas críticos de integração com serviços externos (Notion, Gmail, Slack). Não houve releases formalizadas neste período, sugerindo que a equipe prioriza estabilização e integração antes do próximo tag.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto encontra-se em ciclo de desenvolvimento ativo para a versão 1.4.0, evidenciada pela issue épica [#7732](https://github.com/nearai/ironclaw/issues/7732). A versão 1.3.0 foi recentemente shipped conforme contexto do PR [#7790](https://github.com/nearai/ironclaw/pull/7790), que portou correções de legacy-state da 1.2 para a 1.3.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (4 nas últimas 24h)

| # | Título | Impacto |
|---|--------|---------|
| [#7790](https://github.com/nearai/ironclaw/pull/7790) | fix(migration): port workspace-artifact/legacy-state preservation from 1.2 to 1.3 | **Crítico** — Preserva estado de workspaces Railway e artefatos legados durante migração para v1.3.0 |
| [#7750](https://github.com/nearai/ironclaw/pull/7750) | chore(webui): integrate Storybook + design-system catalog (Epic phase 1) | **Médio** — Estabelece infraestrutura visual-regression para Design System Phase 3 |
| [#7262](https://github.com/nearai/ironclaw/pull/7262) | chore(deps): bump wasm group with 2 updates | **Baixo** — Atualização de dependências (wit-component, wit-parser) |
| [#7020](https://github.com/nearai/ironclaw/pull/7020) | chore(deps): bump tokio-tungstenite 0.29.0 → 0.30.0 | **Baixo** — Atualização de WebSocket ecosystem |

### Destaque: Correção de Migração #7790

O PR [#7790](https://github.com/nearai/ironclaw/pull/7790) porta correções de preservação de estado críticas que estavam ausentes na release 1.3.0. Esta ação previne perda de dados para usuários em workspaces Railway e garante continuity entre versões.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | Reações | Tendência |
|---|--------|-------------|---------|-----------|
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | Epic: Persistent per-user sandbox with iron-proxy | 9 | 0 | **Alta prioridade** — Feature épica para v1.4.0 |
| [#7812](https://github.com/nearai/ironclaw/issues/7812) | Onboarding suggestions: respect user-level tool permissions | 3 | 0 | **Em progresso** — PR #7833 associado |
| [#7824](https://github.com/nearai/ironclaw/issues/7824) | Context projection: Pi-style compaction | 2 | 0 | **Custo identificado** — $10.31 vs $2.52 baseline |

### Análise de Demandas

**Segurança/Sandbox (Issues #7732, #7825):**
A equipe está construindo um sistema de sandbox persistente por usuário com gerenciamento de credenciais via iron-proxy. A issue épica [#7732](https://github.com/nearai/ironclaw/issues/7732) detalha que a implementação atual de Docker cria/remove containers para cada comando shell, enquanto o objetivo é um computer persistente por `(tenant, user)`.

**Custo de Contexto (Issue #7824):**
Medições no PinchBench revelam que o replay de histórico completo consome **227.7M input tokens ($10.31)** vs baseline de **55.1M ($2.52)** — um aumento de ~4x no custo. A solução proposta inclui Pi-style compaction barrier e structured summaries.

---

## 5. Bugs e Estabilidade

### Issues de Integração Críticas (Product Feedback)

| # | Severidade | Título | Status |
|---|------------|--------|--------|
| [#7830](https://github.com/nearai/ironclaw/issues/7830) | **Alta** | Notion extension fails to install in IronClaw | Aberto |
| [#7829](https://github.com/nearai/ironclaw/issues/7829) | **Alta** | Gmail setup fails in web UI with auth popup disappearing | Aberto |
| [#7828](https://github.com/nearai/ironclaw/issues/7828) | **Média** | Unable to set up Slack in NEAR Foundation account | Aberto |

### Análise

Três issues críticas de product feedback foram abertas no mesmo dia (#7830, #7829, #7828), todas relacionadas a **falhas em fluxos de autenticação OAuth** de integrações externas. O padrão comum sugere:

1. **Popup de autenticação fechando prematuramente** — indica problema de cross-origin ou timing no OAuth callback
2. **Instalação de extensões falhando** — possível regressão no sistema de catalog/install
3. **Contas específicas bloqueadas** — possível validação de domain/scope restritiva

**Recomendação:** Priorizar investigação do módulo de extension installation/auth, possivelmente um shared regression introduced recentemente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| # | Título | Escopo | Indicador de Roadmap |
|---|--------|--------|---------------------|
| [#7833](https://github.com/nearai/ironclaw/pull/7833) | feat(suggestions): generate over user's read-only tools | Suggestions | **v1.4.0** — Fecha #7812 |
| [#7810](https://github.com/nearai/ironclaw/pull/7810) | feat(sandbox): manifest-declared direct-exec credential bindings | Sandbox/Egress | **v1.4.0** — Arquitetura core |
| [#7818](https://github.com/nearai/ironclaw/pull/7818) | feat(subagent): background mode (slices 2b+2c) | Subagents | **v1.4.0** — Ativa surface #7788 |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | feat(coding): omp core-tool contract + engines | Coding Tools | **Ativo** — 6 ferramentas unificadas |
| [#7831](https://github.com/nearai/ironclaw/pull/7831) | Design System Phase 3a foundation | UI/Design | **WebUI v2** — Chromatic lanes |

### Sinais de Roadmap

A issue épica [#7732](https://github.com/nearai/ironclaw/issues/7732) com label `v1.4.0` indica que **persistent per-user sandbox** é o foco central da próxima versão major. Isso complementa:

- Credential management via iron-proxy (#7810, #7825)
- Context projection para controle de custos (#7824)
- Background subagents (#7818)

**Observação:** A equipe está convergindo para uma arquitetura onde o sandbox é persistent e não containerizado por-command, com credenciais mediadas por proxy.

---

## 7. Resumo de Feedback dos Usuários

### Fontes de Feedback

| # | Fonte | Tema Central |
|---|-------|--------------|
| [#7832](https://github.com/nearai/ironclaw/issues/7832) | Slack #x-ai-product-feedback | Triage de feedback últimas 3h |
| [#7827](https://github.com/nearai/ironclaw/issues/7827) | Scheduled triage run | Categorização automática |

### Padrões Identificados

**Integrações Externas (3 issues):**
- Notion, Gmail, Slack — todas com falhas em setup/auth
- Usuários afetados incluem NEAR Foundation accounts
- Impacto: **Bloco de onboarding** para novos usuários

**Dores Técnicas Reportadas:**
- Popup de OAuth fechando antes da autenticação completar
- Extension installation sem feedback de erro claro
- Setup flow quebrado para contas corporativas

**Sentimento Geral:**
O feedback indica que enquanto o core do IronClaw avança (sandbox, subagents, context projection), a **experiência de integração com serviços externos está degradada**. Isso pode impactar conversão de trials para paid.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta >5 dias

| # | Título | Criado | Prioridade |
|---|--------|--------|------------|
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | Epic: Persistent per-user sandbox | 2026-08-18 | **Épica v1.4.0** |
| [#7824](https://github.com/nearai/ironclaw/issues/7824) | Context projection | 2026-08-22 | **Custo/Performance** |
| [#7825](https://github.com/nearai/ironclaw/issues/7825) | Sandbox egress auth | 2026-08-22 | **Segurança** |

### PRs de Alto Impacto Aguardando Review

| # | Título | Size | Risk | Status |
|---|--------|------|------|--------|
| [#7810](https://github.com/nearai/ironclaw/pull/7810) | Sandbox credential bindings | XL | Low | Aberto |
| [#7817](https://github.com/nearai/ironclaw/pull/7817) | Nextest test pipeline | XL | Medium | Aberto |
| [#7821](https://github.com/nearai/ironclaw/pull/7821) | Single setup-rust composite | XL | Medium | Aberto |
| [#7833](https://github.com/nearai/ironclaw/pull/7833) | Suggestions with read-only tools | M | Low | Aberto |

### Recomendação de Priorização

1. **Crítico:** Investigar regressions de integração (#7830, #7829, #7828) — impacto direto em onboarding
2. **Alto:** Review do PR #7833 — fecha issue de product feedback #7812
3. **Médio:** Convergência CI tracks (T1-T4) para reduzir "green locally, red in CI"
4. **Estratégico:** Context projection (#7824) — custo medido de $7.79/task em PinchBench

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-08-24. Última sincronização: 24h.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto: CoPaw (QwenPaw)

**Data de referência:** 2026-08-24  
**Período analisado:** Últimas 24 horas

---

## 1. Panorama do Dia

O projeto CoPaw/QwenPaw apresenta **alta atividade de desenvolvimento** nas últimas 24 horas, com 17 itens atualizados no total (6 issues + 11 PRs). Não houve lançamentos de novas versões. A atividade concentra-se em correções de bugs críticos (memory leak em long-running processes, connection errors) e evoluções no sistema de skills dinâmicas. O volume de PRs abertos (6) e fechados (5) sugere um ciclo de review ativo com merges frequentes. A comunidade demonstra engajamento diversificado entre bugs, features e questões de integração.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24 horas.**

O projeto não publicou novas versões neste período. Recomenda-se monitorar os PRs em merge queue, especialmente relacionados ao sistema de skills dinâmicas, que parecem maduros para próxima versão.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (5 total)

| PR | Título | Impacto |
|----|--------|---------|
| [#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033) | feat(skill-system): dynamic skill loading + auto-unload + frontmatter fix | Infraestrutura de lifecycle dinâmico de skills |
| [#7031](https://github.com/agentscope-ai/QwenPaw/pull/7031) | feat(skill-system): dynamic skill loading + auto-unload + frontmatter fix | Idem — variante em review |
| [#7027](https://github.com/agentscope-ai/QwenPaw/pull/7027) | feat: auto-title-sync + skill-system cleanup | Sincronização automática de títulos + limpeza de arquivos .backup/.bak |
| [#7032](https://github.com/agentscope-ai/QwenPaw/pull/7032) | feat(auto-title-sync): auto-memory linked chat title refresh | Atualização de títulos baseada em memória automática |
| [#7030](https://github.com/agentscope-ai/QwenPaw/pull/7030) | feat(auto-title-sync): auto-memory linked chat title refresh | Idem — variante em review |

**Destaque:** O trabalho de Ferrum360 nas issues #7027, #7030, #7031, #7032, #7033 representa um **pacote significativo de melhorias no sistema de skills e títulos de chat**, resolvendo problemas de lifecycle estático de skills e títulos estáticos que nunca refletiam evoluções da conversa.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Título | Comentários | Tipo |
|-------|--------|-------------|------|
| [#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221) | reload_agent() drops plugin workspace-scoped registrations | 3 | Enhancement/Feature |
| [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) | Long-running qwenpaw-backend memory grows unbounded to 20GB+ | 2 | Performance |

**Análise:**

- **#7221 (plugin workspace-scoped):** Reportada por liuyaqing1619-ops, envolve perda de registrations (runtime hooks, modes, slash commands) após reload de agente em `MultiAgentManager`. A questão tem 3 comentários, indicando necessidade de discussão técnica. **Severidade:** Enhancement, mas afeta zero-downtime deployments em produção.

- **#7222 (memory leak 20GB+):** Reportada por weiguochen-sh, descreve crescimento de memória em processo long-running (2 dias) de ~500MB para 20.7GB. Diferencia-se de leaks de startup — é acumulção runtime com workload de texto pesado. **Severidade:** Crítica para produção.

- **#7224 (Aider CLI integration):** Questão de integração em russo, pedindo documentação para conectar Aider CLI como agente. Indica demanda por ecossistema expandido de agentes.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (4 issues)

| Issue | Título | Severidade | Observação |
|-------|--------|------------|------------|
| [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) | Memory grows to 20GB+ (runtime accumulation) | 🔴 **Crítica** | Afeta produção com long-running instances |
| [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) | "peer closed connection without sending complete message body" | 🟠 **Alta** | Ocorre em textos longos com tempo de推理 longo; parece relacionado a timeouts de upstream |
| [#7217](https://github.com/agentscope-ai/QwenPaw/issues/7217) | After stopping task, next conversation follows previous one | 🟠 **Alta** | Bug de state persistence entre sessões |
| [#7216](https://github.com/agentscope-ai/QwenPaw/issues/7216) | execute_shell_command tool name gets character replacement (l→\|) | 🟡 **Média** | Causa ToolNotFoundError intermitente |

**Análise de estabilidade:** O projeto apresenta **3 bugs de severidade alta/crítica** activemente reportados. O memory leak (#7222) é o mais preocupante por impactar infraestrutura de produção. A issue #7218 sugere possível necessidade de configuração de timeouts em ferramentas externas — verificar se documentação cobre este cenário.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (3 issues + PRs)

| Item | Título | Tipo | Sinal de Roadmap |
|------|--------|------|------------------|
| [#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221) | reload_agent() deve preservar plugin registrations | Enhancement | Sistema de plugins mais robusto |
| [#7224](https://github.com/agentscope-ai/QwenPaw/issues/7224) | Integrar Aider CLI como agente | Integration Request | Expansão de ecossistema de agentes |
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | Add workspace-scoped always-on skill loading | Feature | Skills sempre-ativas por workspace |

### PRs Abertos com Potencial de Roadmap

| PR | Título | Relevância |
|----|--------|------------|
| [#7223](https://github.com/agentscope-ai/QwenPaw/pull/7223) | Refresh DeepSeek catalog (remove retired models) | Manutenção de provedores |
| [#7219](https://github.com/agentscope-ai/QwenPaw/pull/7219) | All-agent LLM & tool-call trend chart | Observabilidade expandida |
| [#7187](https://github.com/agentscope-ai/QwenPaw/pull/7187) | Exclude reasoning from generated titles | UX de títulos de chat |
| [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | Persist rotated refresh_token for OAuth2 | Autenticação robusta |
| [#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220) | Reject oversized image dimensions | Validação de mídia |

**Sinais de tendência:** 
- Evolução do **sistema de skills** com loading dinâmico e always-on modes
- **Observabilidade** em alta (trend charts de tokens/chamadas)
- **Autenticação OAuth2** com refresh tokens rotativos gaining traction

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Issue | Feedback |
|-----------|-------|----------|
| **Estabilidade em produção** | #7222 | "Processo tumbuh memória de ~500MB para 20.7GB após 2 dias de uso contínuo. Afeta整机." |
| **Integração com provedores externos** | #7218 | "Custom model timeout otimizado mas ainda ocorre 'peer closed connection'. Usuário busca ajuste em QwenPaw." |
| **State management** | #7217 | "Após parar tarefa no meio, próxima conversa segue comportamento anterior completamente." |
| **UX de ferramentas** | #7216 | "Ferramenta execute_shell_command tem nome substituído intermitentemente, causando erros." |
| **Documentação/Integração** | #7224 | "Usuário busca como integrar Aider CLI como agente no QwenPaw." |

### Padrões Identificados

1. **Long-running instances:** Usuários enfrentam problemas de estabilidade em deployments contínuos (memory leak, connection drops)
2. **Timeout awareness:** Ausência de configuração de timeout em ferramentas causa frustração
3. **State isolation:** Falta de isolamento correto entre sessões/tarefas
4. **Onboarding/integração:** Demanda por melhor documentação de integração com ferramentas externas

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Feedack

| Issue | Título | Age | Status |
|-------|--------|-----|--------|
| [#7216](https://github.com/agentscope-ai/QwenPaw/issues/7216) | execute_shell_command character replacement | ~2 dias | 1 comentário, sem resolução |
| [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) | peer closed connection | ~1 dia | 1 comentário, investigating |
| [#7224](https://github.com/agentscope-ai/QwenPaw/issues/7224) | Aider CLI integration help | ~1 dia | 1 comentário |

### PRs em Aberto Necessitando Review

| PR | Título | Status | Prioridade |
|----|--------|--------|------------|
| [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | fix(drivers): persist rotated refresh_token | Under Review | Alta (OAuth2 correctness) |
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | feat(skills): workspace-scoped always-on loading | Open | Média |
| [#7187](https://github.com/agentscope-ai/QwenPaw/pull/7187) | fix(chat): exclude reasoning from titles | Open | Média (fixes #6979) |

### Recomendações de Priorização

1. **🔴 Crítica:** #7222 (memory leak 20GB+) — impacto direto em produção
2. **🟠 Alta:** #7221 (plugin registrations drop) — impacto em zero-downtime deployments
3. **🟠 Alta:** #7217 (state leakage entre sessões) — correção de segurança/comportamento
4. **🟡 Média:** #7066 (OAuth2 refresh tokens) — merge para corrigir autenticação

---

## Métricas Resumidas do Período

| Métrica | Valor |
|---------|-------|
| Issues ativas | 6 |
| PRs atualizados | 11 |
| PRs merged/closed | 5 |
| Releases | 0 |
| Bugs críticos | 1 |
| Bugs altos | 2 |
| Bugs médios | 1 |
| Novas features requests | 3 |

---

*Relatório gerado automaticamente com base em dados do GitHub de CoPaw (agentscope-ai/QwenPaw).*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-24

---

## 1. Panorama do Dia

ZeroClaw apresenta **alta atividade** nas últimas 24h, com 50 issues e 50 PRs atualizados, embora nenhuma release tenha sido publicada. O projeto mantém foco intenso em **discussões arquiteturais** (RFCs sobre sessões de runtime, política de memória e sandbox), complementado por correções de segurança críticas (Landlock, filesystem sandbox) e expansão de canais de comunicação. A saúde geral indica um ecossistema maduro em evolução, com 46 PRs em aberto e 4 mergeados/fechados, evidenciando um pipeline de contribuições ativo e revisões em andamento.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto encontra-se em período de desenvolvimento intenso sem tagged releases recentes. Recomenda-se monitorar o repositório para announcement de próximas versões.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (4 total)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#10201](https://github.com/zeroclaw-labs/zeroclaw/pull/10201) | `feat(whatsapp-web): set push name from channel config` | Permite configurar display name do bot via config, eliminando necessidade de ajuste manual no handset |
| [#9831](https://github.com/zeroclaw-labs/zeroclaw/pull/9831) | `feat(web-search): cap result content and harden DuckDuckGo scrape path` | Implementa limite de 500 caracteres por resultado e budget de 16.000 para 6 providers (DuckDuckGo, Brave, Tavily, SearXNG, Jina, Bocha) |

### Destaque de Funcionalidades em Progresso

- **Plugin System:** PRs [#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582) e [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) avançam política de egress em plugins WASM com ceremony de grants
- **ZeroCode UI:** PR [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) implementa multi-session panes com agent sidebar
- **Canal Filesystem:** PR [#10217](https://github.com/zeroclaw-labs/zeroclaw/pull/10217) corrige listener para ser cancellation-aware

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| Issue | Título | Comentários | Status |
|-------|--------|-------------|--------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions | 25 | 🟢 OPEN |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC: Decouple memory lifecycle policy | 17 | 🟢 OPEN |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | RFC: Realtime speech-to-speech for Gemini Live | 17 | 🟢 OPEN |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker: Maintainer decision queue | 13 | 🟢 OPEN |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy (filesystem/network) | 11 | 🟢 OPEN |

### Análise dos Temas

**Arquitetura de Runtime (#9487):** A RFC mais comentada propões reformular ownership de sessões de conversação e adapters de transporte, buscando esclarecer fronteiras entre componentes.

**Política de Memória (#6850):** Comunidade demanda separação clara entre storage backend e lifecycle policy, consolidando governança centralizada.

**Gemini Live (#8780):** Alto interesse em canal de voz bidirecional em tempo real, demonstrando tendência de expansão multimídia.

**Sandbox Security (#6996):** Preocupação com segurança via filesystem e network restrictions, alinhada com PRs de segurança Landlock em aberto.

---

## 5. Bugs e Estabilidade

### Issues de Bug Reportadas

| Issue | Severidade | Descrição | Status |
|-------|------------|-----------|--------|
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | 🔴 **P1 (S1)** | Daemon startup/reload causa stack overflow durante agent initialization via Quickstart | 🟢 OPEN |
| [#9666](https://github.com/zeroclaw-labs/zeroclaw/issues/9666) | 🔴 **P1** | Filesystem listener não é cancellation-aware, bloqueia shutdown | 🟡 IN-PROGRESS |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | 🟡 **P2 (S2)** | Agent perde contexto do cron job ao responder | 🟠 BLOCKED |

### Análise

- **Stack Overflow (#10230):** Bug crítico que bloqueia workflow principal — afecta aplicação de config via ZeroCode
- **Filesystem Listener (#9666):** Relacionado diretamente ao PR [#10217](https://github.com/zeroclaw-labs/zeroclaw/pull/10217) em revisão
- **Cron Context (#6105):** Bloqueado aguardando resolução de dependências arquiteturais

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Pipeline (por Status)

| Issue | Feature | Priority | Status |
|-------|---------|----------|--------|
| [#6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427) | Add Twilio SMS channel | P2 | ✅ ACCEPTED |
| [#6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435) | Add Rocket.Chat channel | P2 | ✅ ACCEPTED |
| [#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437) | Add Zulip channel | P2 | ✅ ACCEPTED |
| [#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423) | Add Mastodon (ActivityPub) channel | P2 | ✅ ACCEPTED |
| [#6448](https://github.com/zeroclaw-labs/zeroclaw/issues/6448) | Home Assistant integration tool | P2 | ✅ ACCEPTED |
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | Replace React/Vite com Rust→Wasm | P3 | 🟢 NO-STALE |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | RFC: Comprehensive WASM plugin architecture | P2 | 🟢 NO-STALE |

### Sinais de Roadmap

1. **Expansão de Canais:** Forte sinal de roadmap para múltiplos canais de comunicação (SMS, Mastodon, Rocket.Chat, Zulip)
2. **Migração Web para WASM:** Proposta de eliminação de Node.js do build/runtime via Rust→Wasm (#8132)
3. **Plugin Architecture:** Arquitetura unificada "everything is a plugin" via WASM Component Model (#10076)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Issue |
|-----------|----------|-------|
| **Configuração** | Dificuldade em encontrar canal napcat/onebot | [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) ✅ RESOLVIDA |
| **Webhook** | Sistema de webhook não funcional com payloads arbitrary | [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) ✅ RESOLVIDA |
| **UX** | Push name do WhatsApp perdido em cada relink | [#10201](https://github.com/zeroclaw-labs/zeroclaw/pull/10201) ✅ RESOLVIDA |
| **CLI i18n** | Strings hardcoded em `zeroclaw status` | [#7099](https://github.com/zeroclaw-labs/zeroclaw/issues/7099) ✅ RESOLVIDA |
| **Daemons** | Quickstart bloqueia durante reload | [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) 🔴 ABERTA |

### Cenários de Uso Observados

- **Self-hosting:** Forte demanda por canais alternativos (Zulip, Rocket.Chat, Lemmy, Mastodon)
- **Integração Domótica:** Ferramenta Home Assistant aguardada (#6448)
- **Phone Pairing:** Adicionar método Build Remote Agent via PR #10283

---

## 8. Backlog que Merece Atenção

### Issues Sem Atividade Recente (Stale Risk)

| Issue | Título | Criado | Comentários | Prioridade |
|-------|--------|--------|-------------|------------|
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | RFC: Replace React/Vite with Rust→Wasm | 2026-06-22 | 6 | P3 |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | RFC: Verbatim channel send over gateway | 2026-08-17 | 5 | P2 |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | RFC: Comprehensive WASM plugin architecture | 2026-08-18 | 2 | P2 |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | Agent context in cron jobs | 2026-04-25 | 3 | P2 (BLOCKED) |

### Recomendações

1. **RFCs em Aberto (#8132, #10050, #10076):** Necessitam parecer ou decisão de maintainer para evitar stale
2. **Bug P1 (#10230):** Stack overflow em daemon é crítico e deve priorizar atenção imediata
3. **Feature Channel Adoption:** Canais aceitos (#6427, #6435, #6437, #6423) aguardam implementação

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Observação |
|-----------|-------|-----------|
| Issues ativas (24h) | 40 | Alta atividade |
| PRs em aberto | 46 | Pipeline saudável |
| PRs merged/closed (24h) | 4 | Fluxo de revisão ativo |
| Novas releases | 0 | Sem release tag |
| Bugs P1 abertos | 2 | Requerem atenção |
| RFCs em discussão | 8+ | Evolução arquitetural ativa |

---

*Relatório gerado em 2026-08-24. Dados extraídos de github.com/zeroclaw-labs/zeroclaw.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*