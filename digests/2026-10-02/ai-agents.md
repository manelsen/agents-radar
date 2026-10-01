# Resumo diário do ecossistema de agentes de IA 2026-10-02

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-10-01 23:38 UTC

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

**Data de referência:** 2026-10-02

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em 02/10/2026. Projetos maduros como **ZeroClaw** (50 PRs, 42 issues) e **Hermes Agent** (100 itens combinados) demonstram fase de **consolidação arquitetural**, com foco em segurança multi-tenant e separação de componentes — indicando preparação para deployments enterprise. Simultaneamente, **NanoBot** e **CoPaw** operam em ciclo de **estabilização pré-release**, com volume moderado mas priorização clara de bugs críticos em providers. **PicoClaw** enfrenta uma crise operacional (certificado TLS expirado), enquanto **IronClaw** mantém ritmo脚下 de maturação documental. A ausência total de releases em todas as bases de código sugere uma **janela de code freeze** coordena entre projetos, possivelmente alinhada a um evento de mercado comum.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs Abertos | PRs Merged (24h) | Releases (24h) | Saúde | Tendência |
|---------|:-------------:|:-----------:|:----------------:|:--------------:|-------|-----------|
| **ZeroClaw** | 42 | 50 | 0 | 0 | ⚠️ Estável mas crítica | 🔺 Alta intensidade |
| **Hermes Agent** | 50 | 50 | 2 | 0 | ⚠️ 16 bugs P2/P3 | 🔺 Bugfix ativo |
| **NanoBot** | 0 | 14 | 3 | 0 | ✅ Boa | 🔺 Estável |
| **CoPaw** | 7 | 9 | 2 | 0 | ⚠️ Beta instável | 🔺 Pré-release |
| **PicoClaw** | 2 | 12 | 2 | 0 | 🔴 Crítica (TLS) | ➡️ Manutenção |
| **IronClaw** | 2 | 2 | 0 | 0 | ✅ Boa | ➡️ Lenta |
| **NullClaw** | 0 | 0 | 0 | 0 | ⚪ Inativo | ➖ Estagnado |

**Observações:**
- **Taxa de releases:** 0/7 projetos publicaram versões nas últimas 24h — indicativo de freeze coordena ou ciclo de desenvolvimento síncrono
- **Dívida técnica agregada:** ZeroClaw lidera com 2 bugs S0 (segurança), Hermes Agent tem 16 bugs P2/P3 em aberto
- **NanoBot** apresenta melhor relação signal/noise: 0 issues + PRs funcionais com 21% merge rate

---

## 3. Posicionamento do Projeto Principal

### ZeroClaw — Líder em Complexidade Arquitetural

**Vantagens competitivas:**
- **Maior volume de atividade** (92 itens combinados) demonstra maturidade de comunidade e velocidade de desenvolvimento
- **Foco em multi-tenant RBAC** (#5982, 11 comentários) posiciona o projeto para场景 de deployment corporativo
- **Arquitetura de gateway separado** em fase de integração final (#11351 stacked chain) — diferenciação técnica significativa

**Diferenças técnicas:**
- Abordagem RPC-first com `zeroclaw-rpc-client` (#11186) para transporte in-process
- Sistema de SOP (Standard Operating Procedures) como primitive de automação
- Preocupação explícita com **isolation de memória entre sessões** (S0 bugs em #11198, #11239)

**Tamanho da comunidade:**
- Base de contribuidores mais ativa (múltiplos PRs XL simultâneos)
- Debate técnico substancial: 16 comentários em #9600 sobre ownership de persistência

### Hermes Agent — Líder em Suporte Multi-Plataforma

- Integração nativa com Discord, WhatsApp, WeChat, SMS, Email
- Desktop app com múltiplos backends (Windows, TUI)
- Issue #97681 (cross-gateway collaboration) com 30 comentários demonstra demanda por federation

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança e Isolamento

**Evidência cruzada:**

| Projeto | Bug/Feature | Severidade | Tema |
|---------|-------------|-----------|------|
| NanoBot | #5536 | P1 | Sandbox enforcement (symlink bypass) |
| NanoBot | #5678 | P2 | Proteção SSRF em resolução DNS |
| Hermes Agent | #129763 | Security (CWE-668) | Copilot credentials scoped por profile |
| PicoClaw | #3400 | Alta | Perda de api_keys em config multi-key |
| ZeroClaw | #11198, #11239 | S0 | Memory isolation entre sessões |

**Conclusão:** 5/7 projetos demonstram preocupação com **isolamento de credenciais e dados** — tendência arahititetônica para 2026-2027.

### 4.2 Persistência e Estado

- **ZeroClaw:** Debate sobre "session-persistence contract ownership" (#9600, 16 comentários)
- **NanoBot:** Migração de JSONL para SQLite (#5943) como store autoritativo
- **IronClaw:** Feature request para BrowserProfileStore trait com persistência encriptada (#2358)

**Conclusão:** Transição de armazenamento stateless para stateful com garantias transacionais é consenso técnico.

### 4.3 Provider Abstraction

- **NanoBot:** Client provider-neutral (#5825) com OpenRouter como backend inicial
- **PicoClaw:** 6 PRs de dependências simultâneos + provider opencode-go (#3371)
- **CoPaw:** Bugs em DeepSeek e GPT-6 family com connection tests falhando

**Conclusão:** Estratégia multi-provider é roadmap universal, mas implementação fragmentada.

---

## 5. Análise de Diferenciação

### Por Foco Primário

| Projeto | Posicionamento | Público-Alvo | Arquitetura |
|---------|---------------|--------------|-------------|
| **ZeroClaw** | Enterprise multi-tenant | DevOps, Security teams | RPC/gateway separation |
| **Hermes Agent** | Desktop personal assistant | Usuários finais, cross-platform | Monolithic + plugins |
| **NanoBot** | Extensibilidade de agentes | Desenvolvedores, integradores | Tool-centric, multimodal |
| **CoPaw** | Beta multi-provider | Early adopters, testers | Beta releases, fast iteration |
| **PicoClaw** | Edge/IoT agents | Hardware tinkerers, privacy-focused | Lightweight, multi-channel |
| **IronClaw** | Benchmarking agent | ML engineers, researchers | Evaluation-focused |

### Por Estadio de Maturidade

```
NullClaw ░░░░░░░░░░░░░░░░░░░░  (inativo)
IronClaw ████░░░░░░░░░░░░░░░░░  (documentação)
PicoClaw ██████░░░░░░░░░░░░░░  (manutenção crítica)
CoPaw    ████████░░░░░░░░░░░░  (beta instável)
NanoBot  ████████████░░░░░░░░░  (estável/pré-release)
Hermes   ██████████████████░░  (maturidade alta)
ZeroClaw ████████████████████  (enterprise-ready)
```

---

## 6. Tração e Maturidade da Comunidade

### Projetos em Velocidade Máxima

| Projeto | Velocidade | Métrica de Validação |
|---------|:----------:|----------------------|
| **ZeroClaw** | 🔺🔺🔺 | 92 itens/24h, 2 S0 bugs reconhecidos, 11 PRs XL |
| **Hermes Agent** | 🔺🔺🔺 | 100 itens/24h, re-landings após reversões |
| **NanoBot** | 🔺🔺 | 21% merge rate, 3 PRs merged, foco em segurança |

### Projetos em Consolidação de Qualidade

| Projeto | Velocidade | Indicador |
|---------|:----------:|-----------|
| **CoPaw** | ➡️ | Beta V2.2.2.beta4 com regressão LAN (#8073) |
| **PicoClaw** | ➡️ | 36% dos PRs dedicados a bugfixes |
| **IronClaw** | ➡️ | Taxonomy de falhas diárias (#8121), 128 non-passes |

### Crises Identificadas

| Projeto | Crise | Impacto | Recuperação |
|---------|-------|--------|-------------|
| **PicoClaw** | TLS expirado (22 dias) | 🔴 Site inacessível | Necessita owner infraestrutura |
| **CoPaw** | DeepSeek PDF break (#8064) | 🟠 Sessão inutilizável | PR em aberto |
| **NullClaw** | Estagnação completa | ⚪ Nenhuma atividade | Reavaliação de projeto |

---

## 7. Sinais de Tendência

### 7.1 Tendências Arquiteturais

1. **Separação gateway/core** — ZeroClaw, Hermes Agent (cross-gateway #97681), NanoBot (provider abstraction)
   - Implicação: Modularização para deployment híbrido/cloud

2. **Persistência transacional** — JSONL → SQLite (NanoBot), BrowserProfileStore encriptado (IronClaw)
   - Implicação: Agentes stateful prontos para produção

3. **Multi-provider abstraction** — Todos os projetos investindo em layer de provider
   - Implicação: Commoditização de LLMs, diferenciação em orchestration

### 7.2 Tendências de Segurança

1. **Isolamento de sessão** — Temas em ZeroClaw (S0), Hermes (CWE-668), PicoClaw (api_keys)
   - Implicação: Preparação para multi-tenant enterprise

2. **Sandbox enforcement** — NanoBot (#5536), shell restrito
   - Implicação: Agentes como código executável requerem containment

### 7.3 Tendências de UX/Produto

1. **Desktop como vetor primário** — Hermes Agent com Desktop como foco principal, CoPaw beta issues
   - Implicação: Interface gráfica superando CLI para adoção mainstream

2. **Cross-platform messaging** — Hermes (Discord/WhatsApp/WeChat), PicoClaw (DeltaChat)
   - Implicação: Agentes como pontes de comunicação универсальные

### 7.4 Sinais de Mercado

| Sinal | Projeto | Interpretação |
|-------|---------|---------------|
| Advisor Mode (#7569, CoPaw) | XXXL PR | Demanda por agent-to-agent workflows |
| Cross-gateway collaboration (30 comentários) | Hermes | Federated AI ecosystems |
| Turn time budget (#3414, PicoClaw) | Segurança operacional | AGI safety features como feature requests |
| llama.cpp model router (#7539) | ZeroClaw | Preferência por modelos locais/privacidade |

---

## Recomendações para Decisores

| Audiência | Recomendação |
|-----------|--------------|
| **Enterprise decision-makers** | Acompanhar ZeroClaw v0.9.0 para RBAC multi-tenant; Hermes para Desktop adoption |
| **Desenvolvedores** | Contribuir para NanoBot (estável, 21% merge rate) ou ZeroClaw (maior activity) |
| **DevOps/Platform teams** | Priorizar provider abstraction layer; zero projects com releases production-ready |
| **Pesquisadores** | IronClaw para benchmarking, NanoBot para multimodality research |

---

*Relatório gerado automaticamente com base em dados do GitHub de 7 projetos em 2026-10-02.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto: NanoBot (HKUDS/nanobot)

**Data de referência:** 2026-10-02  
**Link do projeto:** [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. Panorama do dia

O projeto NanoBot demonstra **alta atividade de desenvolvimento** em 02/10/2026, com 17 pull requests atualizados nas últimas 24 horas — 3 deles já fechados/merged e 14 permanecendo em revisão aberta. Nenhuma issue foi atualizada no mesmo período, e não há novas releases. O foco atual da equipe está na **estabilidade e segurança** (múltiplos PRs com labels de segurança), além de melhorias na interface web e no gerenciamento de sessões. A distribuição equilibrada entre correções de bugs, refatorações e novas funcionalidades indica um ciclo de desenvolvimento maduro, com atenção simultânea à qualidade e à evolução do produto.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24 horas.**

O projeto não publicou versões formalizadas recentemente. Dado o volume de PRs em aberto e a natureza das mudanças (refatorações, correções de segurança, novas features), sugere-se que a equipe esteja preparando um próximo release acumulativo com melhorias significativas.

---

## 3. Progresso do Projeto

Três pull requests foram fechados/merged nas últimas 24 horas:

| PR | Título | Autor | Impacto |
|---|---|---|---|
| [#2095](https://github.com/HKUDS/nanobot/pull/2095) | `feat: add read_image tool for local multimodal inspection` | 0oAstro | Adiciona capacidade de inspeção de imagens locais via ferramenta `ReadImageTool` para modelos multimodais |
| [#2094](https://github.com/HKUDS/nanobot/pull/2094) | `feat: add explicit subagent model config and in-process runtime reload` | 0oAstro | Melhora gerenciamento de modelos com seleção explícita de subagentes e path de reload in-process |
| [#5999](https://github.com/HKUDS/nanobot/pull/5999) | `refactor: remove unused runtime and WebUI helpers` | chengyongru | Limpeza de código: remove helpers obsoletos de runtime e WebUI, incluindo rotas duplicadas e wrappers sem uso |

**Destaque:** Os PRs #2095 e #2094, do mesmo autor, demonstram foco em extensibilidade do agente e flexibilidade de configuração de modelos — capacidades fundamentais para personalização em cenários enterprise.

---

## 4. Temas Quentes da Comunidade

**Atividade concentrada em PRs (17 atualizados), sem issues abertas no momento.**

Os PRs com maior complexidade técnica ou escopo estratégico incluem:

- **[#5943](https://github.com/HKUDS/nanobot/pull/5943)** — *Refatoração de sessões com SQLite (Priority: P1)*: Centraliza ownership de estado em SQLite, substituindo JSONL como store autoritativo. Representa mudança arquitetural significativa para confiabilidade de dados.

- **[#5825](https://github.com/HKUDS/nanobot/pull/5825)** — *Client estruturado provider-neutral*: Abstrai decisão entre provedores (OpenRouter como backend inicial), indicando estratégia de multi-provider.

- **[#5941](https://github.com/HKUDS/nanobot/pull/5941)** — *Conexão com instâncias remotas via WebUI (NAN-157)*: Funcionalidade aguardada para conectividade distribuída, linkada ao Linear (NAN-157).

**Nota:** Os PRs apresentam `👍: 0` publicamente, mas número significativo de comentários indefinidos — sugere discussão técnica interna ou em canais privados.

---

## 5. Bugs e Estabilidade

### Bugs reportados (por severidade)

| Severidade | PR | Descrição | Impacto |
|---|---|---|---|
| **P0 (Crítica)** | [#5953](https://github.com/HKUDS/nanobot/pull/5953) | Writes atômicos para ferramentas de arquivo | Previne conteúdo corrompido ("torn reads") e perda de janela de crash |
| **P1 (Alta)** | [#5536](https://github.com/HKUDS/nanobot/pull/5536) | Fail-closed quando shell restrito sem sandbox | Impede bypass de sandbox via symlinks ou shell expansion |
| **P1** | [#5885](https://github.com/HKUDS/nanobot/pull/5885) | Gating de transcript replacement por threshold de tokens | Melhora qualidade de resume para sessões curtas |
| **P2** | [#5601](https://github.com/HKUDS/nanobot/pull/5601) | Rollback de side-effects de mensagens rejeitadas | Limpeza de recursos órfãos (attachments, subscriptions) |
| **P2** | [#5483](https://github.com/HKUDS/nanobot/pull/5483) | Sessions deletadas não recriadas por mensagens atrasadas | Integridade de ciclo de vida de sessão |
| **P2** | [#5678](https://github.com/HKUDS/nanobot/pull/5678) | Rejeição de resultados DNS vazios (SSRF) | Segurança de resolução de URLs |

### Regressões identificadas

- **[#5257](https://github.com/HKUDS/nanobot/pull/5257)** — Fix para bound de continuação de goal sostenido: limita重复text-only continuation para máximo 2 vezes consecutivas.

**Status geral de estabilidade:**Bom. Não há crashes ativos reportados. A priorização P0→P1 demonstra consciência de segurança e integridade de dados.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas funcionalidades em desenvolvimento

| PR | Feature | Relevância Estratégica |
|---|---|---|
| [#5941](https://github.com/HKUDS/nanobot/pull/5941) | Conexão com instâncias remotas via WebUI | Funcionalidade distribuída/híbrida |
| [#5825](https://github.com/HKUDS/nanobot/pull/5825) | Structured decision client provider-neutral | Multi-provider flexibility |
| [#5885](https://github.com/HKUDS/nanobot/pull/5885) | Idle transcript replacement com threshold | Otimização de memória e resume |
| [#2095](https://github.com/HKUDS/nanobot/pull/2095) *(merged)* | `read_image` tool | Capacidades multimodais locais |

### Sinais de roadmap inferidos

1. **Infraestrutura de dados:** Migração de JSONL para SQLite (#5943) sugere foco em confiabilidade transacional.
2. **Segurança:** Sandbox enforcement (#5536) e proteções SSRF (#5678) indicam preparação para deployments enterprise.
3. **Multi-provider:** Abstração de decisão (#5825) sinaliza estratégia de não-lock-in com provedores.

---

## 7. Resumo de Feedback dos Usuários

**Sem issues fechadas nas últimas 24h para extração direta de feedback.**

### Dores inferidas dos PRs

| Dor | Evidência | Contexto |
|---|---|---|
| Conteúdo corrompido em escritas concorrentes | #5953 P0 | Crashes e perda de dados em ambientes multi-agente |
| Sessions órfãs após deleção | #5483 | Problema em sessões de curta duração |
| Busca web altera tipo de API permanentemente | #5698 | UX frustrante em workflows mistos |
| Mensagens temporárias descartadas silenciosamente | #5339 | Perda de contexto em conversas efêmeras |
| Sandbox restrito vulnerável a bypass | #5536 P1 | Riscos de segurança em execuções externas |

**Perfil de usuário sugerido:**Desenvolvedores e equipes usando NanoBot em ambientes multi-usuário, com necessidades de isolamento seguro e persistência confiável.

---

## 8. Backlog que Merece Atenção

### PRs sem atividade ou com conflitos pendentes

| PR | Tempo em aberto | Status | Prioridade |
|---|---|---|---|
| [#5166](https://github.com/HKUDS/nanobot/pull/5166) | ~2 meses | `question` + `conflict` | — |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) | ~2 meses | `conflict` | P2 |
| [#5339](https://github.com/HKUDS/nanobot/pull/5339) | ~2 meses | `conflict` | P2 |
| [#5412](https://github.com/HKUDS/nanobot/pull/5412) | ~1.5 meses | `conflict` | — |
| [#5483](https://github.com/HKUDS/nanobot/pull/5483) | ~1 mês | `conflict` | P2 |
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) | ~1 mês | `conflict` | P1 |
| [#5601](https://github.com/HKUDS/nanobot/pull/5601) | ~1 mês | `conflict` | P2 |
| [#5698](https://github.com/HKUDS/nanobot/pull/5698) | ~3 semanas | `conflict` | P2 |
| [#5943](https://github.com/HDUDS/nanobot/pull/5943) | ~5 dias | `conflict` | P1 |
| [#5885](https://github.com/HKUDS/nanobot/pull/5885) | ~9 dias | `conflict` | P1 |

### ⚠️ Alertas

1. **9 de 14 PRs abertos contêm标记 `conflict`** — A taxa de conflitos (64%) sugere necessidade de atenção à gestão de branches ou sincronização de base de código.

2. **PR [#5166](https://github.com/HKUDS/nanobot/pull/5166) com label `question` há ~2 meses** — Parece aguardando resposta da equipe; deve ser priorizado ou encerrado.

3. **Bugs P1 em aberto sem merge há 1 mês** (#5536, #5943, #5885) — Recomenda-se revisão prioritária para evitar acúmulo de dívida técnica.

---

## Métricas Resumidas (2026-10-02)

| Indicador | Valor |
|---|---|
| PRs total | 17 |
| PRs abertos | 14 |
| PRs fechados/merged | 3 |
| Issues abertas/ativas | 0 |
| Novas releases | 0 |
| PRs com conflitos | 9 (64%) |
| Bugs P0+P1 em aberto | 4 |
| Funcionalidades estratégicas em progresso | 4 |

**Veredicto:** Projeto em fase ativa de desenvolvimento com foco em estabilidade e segurança. A principal área de melhoria é o tempo de review para PRs em conflito e bugs de alta prioridade.

---

*Relatório gerado automaticamente com base em dados do GitHub para HKUDS/nanobot em 2026-10-02.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-10-02

---

## 1. Panorama do Dia

O Hermes Agent manteve uma atividade intensa em 02 de outubro de 2026, com **50 issues e 50 PRs atualizados nas últimas 24 horas**. O volume de activity concentrado em componentes de Desktop (UI/UX, performance, multi-profile), estabilidade de plataformas (Windows, Discord, WhatsApp, WeChat) e melhorias no agent runtime evidencia uma fase de estabilização e polimento antes de下一个 release. Não houve novos lançamentos hoje, e a equipe segue iterando em PRs re-landed após reversões anteriores. A saúde geral do repositório permanece ativa, mas com vários bugs de severidade P2 em aberto — indicando que a próxima sprint deve priorizar consolidação de estabilidade.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.**

O projeto está em fase de desenvolvimento intensivo, com múltiplos PRs de bugfix em revisão (vários dos quais re-landam funcionalidades revertidas anteriormente). O próximo release provavelmente incluirá correções acumuladas de Desktop, gateway e autenticação.

---

## 3. Progresso do Projeto

### PRs Recentes Fechados/Merged (2)

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#130975](https://github.com/NousResearch/hermes-agent/pull/130975) | `fix(desktop): play YouTube embeds through a loopback player host` | OutThisLife | **Resolve erro 153 em YouTube embeds no Desktop empacotado** — reverteu fallback anterior e implementa player via loopback para绕过 origem `file://`. |
| [#129921](https://github.com/NousResearch/hermes-agent/pull/129921) | `fix(cli): ...` | GreenSheep-IO | **Retirado pelo autor** — não há mais applicability. |

### PRs Abertos com Alto Impacto (Highlights)

| # | PR | Autor | Componentes | Relevância |
|---|-----|-------|-------------|------------|
| [#131009](https://github.com/NousResearch/hermes-agent/pull/131009) | `fix(gateway): preserve quoted and speech context across pending merges` | iainlane | gateway | Preserva contexto de citações e voz através de operações de merge — impacto direto na qualidade de respostas em group chats. |
| [#131001](https://github.com/NousResearch/hermes-agent/pull/131001) | `Finished updates stay finished: no same-commit re-run on launch, Windows exit 124 after completion is success` | teknium1 | desktop, cli, windows | Resolve dois bugs crônicos: re-execução desnecessária de updates e false negative de exit code no Windows. |
| [#131008](https://github.com/NousResearch/hermes-agent/pull/131008) | `fix(desktop): cache status snapshots per gateway scope` | itsflownium | desktop | Elimina o "Gateway checking" flash ao trocar chats em multi-profile backends. |
| [#131005](https://github.com/NousResearch/hermes-agent/pull/131005) | `fix(desktop): keep preview tabs in the session that opened them` | OutThisLife | desktop | Escopa preview tabs à sessão de origem — evita poluição global de estado. |
| [#129759](https://github.com/NousResearch/hermes-agent/pull/129759) | `fix(sessions): retain guarded auto-prune lineages` | Froraut | agent, sessions | **P0** — impede que auto-prune delete ancestrais de compressão quando apenas o tip está protegido. |
| [#129763](https://github.com/NousResearch/hermes-agent/pull/129763) | `fix(auth): scope Copilot credentials by profile` | Froraut | agent, cli, auth | **Security fix (CWE-668)** — credenciais Copilot eram process-global; agora são profile-scoped. |
| [#130983](https://github.com/NousResearch/hermes-agent/pull/130983) | `Desktop: pick Classic Hermes gold/navy in Appearance` | teknium1 | desktop | Re-lands #130015 (revertido em #130852) — skin Classic volta ao Appearance settings. |
| [#128655](https://github.com/NousResearch/hermes-agent/pull/128655) | `fix(gateway): end a call's voice mode when the gateway restarts` | iainlane | gateway, discord | Impede que gateway reiniciado continue falando em Discord após call terminar. |
| [#127083](https://github.com/NousResearch/hermes-agent/pull/127083) | `fix(agent): honor an explicit compression timeout` | ericcurtin | agent | Respeita timeout de compressão definido pelo usuário (não aplica floor desnecessário). |
| [#130866](https://github.com/NousResearch/hermes-agent/pull/130866) | `fix(gateway): SMS, email e WeCom deliver long replies in full` | teknium1 | gateway, email, sms, wecom | Corrige entrega truncada (4000 chars) em SMS/email/WeCom para replies longos e output de cron. |
| [#41602](https://github.com/NousResearch/hermes-agent/pull/41602) | `fix(weixin): use ThreadedResolver on Windows for reliable DNS resolution` | liuhao1024 | gateway, wecom, windows | Resolve falha de DNS (`ilinkai.weixin.qq.com`) em Windows usando ThreadedResolver. |
| [#129763](https://github.com/NousResearch/hermes-agent/pull/129763) | `fix(auth): scope Copilot credentials by profile` | Froraut | agent, cli, provider/copilot | **Segurança** — isola credenciais Copilot por perfil, evitando vazamento cross-profile. |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | 👍 | Tema |
|---|--------|:-----------:|:--:|------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Let Bots collaborate across gateways | **30** | 4 | **Cross-gateway bot collaboration** — aguardando unified gateway runtime (#106742). Teknium adiou Desktop continuity até Group Chatsettle em `main`. |
| [#127647](https://github.com/NousResearch/hermes-agent/issues/127647) | Tracker: Desktop idle resource burn — renderer CPU/GPU, backend serve CPU, memory | **25** | 0 | **Performance crítico** — poll de session-list causa 0.4–0.7 GB de reads por poll em `state.db` grown. Scope map para #122413 e #88288. |
| [#125727](https://github.com/NousResearch/hermes-agent/issues/125727) | Automated Nous integration is blocked | **13** | 0 | **Integração Nous→Enterkey** com múltiplos conflitos em arquivos core do agent. |
| [#127313](https://github.com/NousResearch/hermes-agent/issues/127313) | pane-body zone menu hijacks transcript right-click (regression from ad2d4822e1) | **12** | 0 | **UX regression** — zona menu substitui context menu em toda área de transcript. |
| [#69889](https://github.com/NousResearch/hermes-agent/issues/69889) | Cron .py script jobs break after Hermes rebuilds its venv | **9** | 0 | **Ambiente** — venv rebuild sobrescreve pip packages do usuário, quebrando cron scripts. |

### Análise dos Demandas

**Cross-gateway collaboration (#97681, 30 comentários)** é o tema mais discutido e representa a demanda estratégica mais relevante. A comunidade quer que bots colaborem entre gateways, mas a execução depende do unified gateway runtime (#106742) ainda em desenvolvimento. Este é um indicador de que a arquitetura multi-gateway precisa amadurecer para suportar o caso de uso emergente.

**Desktop idle resource burn (#127647, 25 comentários)** demonstra que o problema de performance no Desktop está se tornando um ponto de dor crescente. Com reads de 0.4–0.7 GB por poll em state.db grown, usuários com sessões longas enfrentam degradação perceptível. O issue tem triage plan estruturado, indicando que a equipe reconheceu a severidade.

**Desktop right-click regression (#127313)** mostra que a feature de zone menu introduzida em `ad2d4822e1` criou uma regressão que bloqueia copy/paste no transcript — um impacto UX significativo.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P0 (Crítico) — 1 issue ativa

| # | Título | Componentes | Status |
|---|--------|-------------|--------|
| [#129759](https://github.com/NousResearch/hermes-agent/pull/129759) (PR) | sessions: retain guarded auto-prune lineages | agent, sessions | PR aberto — auto-prune pode deletar ancestrais de compressão indevidamente. |

#### P2 (Alta) — 16 issues ativas

| # | Título | Componentes | Notas |
|---|--------|-------------|-------|
| [#127647](https://github.com/NousResearch/hermes-agent/issues/127647) | Desktop idle resource burn | desktop | 0.4–0.7 GB reads/poll, 186 MB/s sostenido. |
| [#127313](https://github.com/NousResearch/hermes-agent/issues/127313) | Right-click zone menu hijacks transcript | desktop | Regression — copy/paste unreachable. |
| [#69889](https://github.com/NousResearch/hermes-agent/issues/69889) | Cron .py scripts break after venv rebuild | cli, cron | User pip packages lost. |
| [#127997](https://github.com/NousResearch/hermes-agent/issues/127997) | Right-click in composer opens wrong menu | desktop | Cut/copy/paste unreachable. |
| [#127044](https://github.com/NousResearch/hermes-agent/issues/127044) | pm update git: 404 on .windows.1 releases | cli, windows | Fetch URL para PortableGit falha em releases build==1. |
| [#128988](https://github.com/NousResearch/hermes-agent/issues/128988) | First prompt for non-launch profile never sent | desktop | Profile chat looks dead — silencioso. |
| [#119403](https://github.com/NousResearch/hermes-agent/issues/119403) | session-list refresh pays per-session subquery | desktop | 0.4–0.7 GB reads/polling. |
| [#95933](https://github.com/NousResearch/hermes-agent/issues/95933) | Remote isolated-serve reconnect spawns duplicate scope | backend/ssh, gateway, desktop | Desktop sticks on 'Waking up default…'. |
| [#130962](https://github.com/NousResearch/hermes-agent/issues/130962) | Windows Desktop loses Dashboard during timeouts | desktop, dashboard, windows | `Runtime not ready` intermitente. |
| [#129785](https://github.com/NousResearch/hermes-agent/issues/129785) | hermes pm update crashes: ValueError unpack | cli | 3-segment target em fetch_url (pm/packages.py:715). |
| [#87689](https://github.com/NousResearch/hermes-agent/issues/87689) | hermes config set bracket syntax creates literal junk key | cli | `pre_llm_call[1]` gravado como literal key. |
| [#123216](https://github.com/NousResearch/hermes-agent/issues/123216) (CLOSED) | Windows Desktop update always exits 124 | desktop, windows | ~960 node --check spawns por renderer chunk. |

#### P3 (Média) — 10 issues ativas + 2 fechadas

| # | Título | Componentes | Notas |
|---|--------|-------------|-------|
| [#130873](https://github.com/NousResearch/hermes-agent/issues/130873) | Desktop fetches image URLs from replies (security) | desktop | Injected text pode enviar dados a servidores arbitrários via markdown images. |
| [#130974](https://github.com/NousResearch/hermes-agent/issues/130974) | Memory prefetch spill truncates Honcho context | agent, memory | Preview head/tail de 1000 chars truncado a cada turn. |
| [#73890](https://github.com/NousResearch/hermes-agent/issues/73890) | Artifacts and Preview leak context across Projects | desktop, sessions | Sem owner de business-context. |
| [#74675](https://github.com/NousResearch/hermes-agent/issues/74675) | gmail reply targets wrong recipient | tool/skills | Afeta também gmail send para non-ASCII display names. |
| [#130867](https://github.com/NousResearch/hermes-agent/issues/130867) | SimpleX voice notes fail with --files-folder | plugins, simplex | "Audio file not found" quando simplex-chat usa --files-folder. |
| [#131004](https://github.com/NousResearch/hermes-agent/issues/131004) | Status bar flashes "Gateway checking" on every chat switch | desktop | 40ms latency mas UX jarring. |
| [#130980](https://github.com/NousResearch/hermes-agent/issues/130980) | Bot click reopens wrong session | desktop | Sem caminho de volta ao Bot Chat original. |
| [#109182](https://github.com/NousResearch/hermes-agent/issues/109182) | Date-only reminders should fire on first gateway tick | cron | Reminders anchored a data, não minuto. |
| [#83614](https://github.com/NousResearch/hermes-agent/issues/83614) | Notify origin thread when Kanban review is claimed | cron | One-time signal desejado. |
| [#116774](https://github.com/NousResearch/hermes-agent/issues/116774) (CLOSED) | npm audit fix doesn't persist across hermes update | tool/browser | Vulnerabilidades reintroduzidas por fresh Node reinstall. |

### Bugs Recentemente Fechados

| # | Título | Notas |
|---|--------|-------|
| [#106596](https://github.com/NousResearch/hermes-agent/issues/106596) | YouTube embeds fail with error 153 | Resolvido por #130975 e #130984. |
| [#17157](https://github.com/NousResearch/hermes-agent/issues/17157) | Discord slash command sync times out | Resolvido via PR #128655. |
| [#123216](https://github.com/NousResearch/hermes-agent/issues/123216) | Windows Desktop update always exits 124 | Resolvido por #131001. |

---

## 6. Ped

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-10-02

---

## 1. Panorama do Dia

O projeto PicoClaw mantém atividade moderada com **14 PRs e 2 issues ativas** nas últimas 24h. A saúde do projeto apresenta **alerta crítico imediato**: o certificado TLS do site oficial expirou em 2026-09-10, deixando picoclaw.io inacessível. Internamente, a codebase demonstra vigor com **6 PRs de manutenção** (dependências) e **6 fixes** submetidos pelo colaborador x1F916 addressing problemas de estabilidade em agentes, canais e configuração. Nenhuma release foi publicada hoje.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto está em ritmo de preparação para próxima versão, evidenciado pela confluência de PRs de manutenção e fixes aguardando merge.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| # | Título | Tipo | Impacto |
|---|--------|------|---------|
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) | fix(deltachat): initialize as custom channel to solve config validation error | 🐛 Bugfix | Resolve erro de validação ao habilitar canal deltachat |
| [#423](https://github.com/sipeed/picoclaw/pull/423) | WIP: feat: base multi-agent collaboration framework & shared context | 🔧 WIP/Framework | Base para colaboração multi-agente com contexto compartilhado (Blackboard) |

**Destaque**: O PR #3376 resolve um erro crítico de inicialização do canal DeltaChat, enquanto #423 representa progresso significativo na arquitetura multi-agente, construindo sobre PRs anteriores de roteamento e fallbacks.

### PRs Abertos com Potencial de Merge

| # | Título | Contribuidor | Status |
|---|--------|--------------|--------|
| [#3403](https://github.com/sipeed/picoclaw/pull/3403) | fix(agent): deliver async tool results to the originating session | x1F916 | Aberto |
| [#3402](https://github.com/sipeed/picoclaw/pull/3402) | fix(agent): resolve the owning agent in context managers | x1F916 | Aberto |
| [#3401](https://github.com/sipeed/picoclaw/pull/3401) | fix(channels): make Reload synchronous and nil-safe | x1F916 | Aberto |
| [#3400](https://github.com/sipeed/picoclaw/pull/3400) | fix(config): persist all api_keys and enabled flag of multi-key models | x1F916 | Aberto |
| [#3399](https://github.com/sipeed/picoclaw/pull/3399) | fix(updater): select the matching 32-bit ARM release asset | x1F916 | Aberto |

**Observação**: 5 dos 6 PRs do x1F916 abordam problemas de regressão e estabilidade. Aproximação sistemáticacomum indica code freeze pendente.

---

## 4. Temas Quentes da Comunidade

### Issue Mais Crítica — 🔴 CRÍTICA

| #3377 | [CRITICAL] TLS certificate for picoclaw.io expired on 2026-09-10 |
|--------|------------------------------------------------------------------|
| **Autor** | dimonb |
| **Reações** | 👍 2 |
| **Comentários** | 3 |
| **Link** | [GitHub Issue #3377](https://github.com/sipeed/picoclaw/issues/3377) |

**Análise**: O certificado TLS do domínio oficial expirou há 22 dias. Todos os navegadores recusam conexões HTTPS, tornando o site completamente inacessível. Com 2 reações e 3 comentários, há reconhecimento da comunidade, mas nenhum fix ainda.

### Issue Secundária — 🟡 Bug Reportado

| #3391 | [BUG] Pico channel splits multi-line input into multiple messages |
|--------|-------------------------------------------------------------------|
| **Autor** | chentianxiong123 |
| **Reações** | 👍 0 |
| **Comentários** | 1 |
| **Link** | [GitHub Issue #3391](https://github.com/sipeed/picoclaw/issues/3391) |

**Análise**: Bug de UX que quebra mensagens multi-linha (poesia, blocos de código) ao dividi-las por newline. Afeta experiência mobile/TUI. Impacto moderado, sem engajamento ainda.

---

## 5. Bugs e Estabilidade

| Severidade | Item | Descrição | Link |
|------------|------|-----------|------|
| 🔴 **CRÍTICA** | Issue #3377 | Certificado TLS expirado — site fora do ar | [#3377](https://github.com/sipeed/picoclaw/issues/3377) |
| 🟠 **ALTA** | PR #3401 | Reload síncrono/nil-safe — panic no gateway | [#3401](https://github.com/sipeed/picoclaw/pull/3401) |
| 🟠 **ALTA** | PR #3400 | Perda de api_keys ao salvar config multi-key | [#3400](https://github.com/sipeed/picoclaw/pull/3400) |
| 🟡 **MÉDIA** | Issue #3391 | Multi-line input quebrado no canal Pico | [#3391](https://github.com/sipeed/picoclaw/issues/3391) |
| 🟡 **MÉDIA** | PR #3399 | Atualizador instalando arch arm64 em dispositivos arm 32-bit | [#3399](https://github.com/sipeed/picoclaw/pull/3399) |

**Métricas de Estabilidade**: 5 de 14 PRs abertos (36%) são dedicados a correções de bugs/regressões — **indicador de fase de maturização/revisão pré-release**.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento

| # | Título | Contribuidor | Descrição |
|---|--------|--------------|-----------|
| [#3414](https://github.com/sipeed/picoclaw/pull/3414) | feat(agent): add wall-clock turn time budget | racso2609 | Adiciona `turn_time_budget_seconds` para evitar loops infinitos de tools |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | feat(providers): add opencode-go provider | EMTumariscal | Provider dedicado para OpenCode com suporte a session header |

### Sinais de Roadmap

| Sinal | Interpretação |
|-------|---------------|
| PR #423 (WIP multi-agent) | Framework de colaboração entre agentes em desenvolvimento ativo |
| PR #3371 (opencode-go) | Expansão de providers além de OpenAI/Anthropic |
| PR #3414 (turn budget) | Foco em segurança e controle de execução de agentes |
| 6 dependabot PRs simultâneos | Atualização de dependências pendente — possível release soon |

**Conclusão de Roadmap**: Direção clara hacia **multi-agent orchestration**, **provider diversification** e **operational safety controls**.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Severidade | Evidência |
|-----|------------|------------|-----------|
| Site fora do ar | Alta (afeta todos) | 🔴 Crítica | Issue #3377 |
| Mensagens multi-linha quebradas | Específica mobile/TUI | 🟡 Média | Issue #3391 |
| Config de multi-key modelo não persiste | Desenvolvedores avançados | 🟠 Alta | PR #3400 |

### Cenários de Uso Identificados

- **Agentes personalizados com múltiplas chaves de API**: Usuários com setups complexos enfrentam perda de configuração (PR #3400)
- **Clientes mobile via TUI**: Usuários móveis reportam UX degradada com texto formatado
- **Infraestrutura automatizada**: Atualização em ARM 32-bit falhando (PR #3399) impacta IoT/edge

### Satisfação Geral

**Mista/Inquieta** — A expiração do certificado TLS é o principal fator de insatisfação visível. A resposta rápida da comunidade (PRs de x1F916) demonstra engajamento positivo e ownership compartilhado.

---

## 8. Backlog que Merece Atenção

### Items Sem Resposta/Abandonados

| # | Título | Idade | Estado | Prioridade |
|---|--------|-------|--------|------------|
| [#423](https://github.com/sipeed/picoclaw/pull/423) | WIP multi-agent framework | ~8 meses | Closed WIP | 🔴 Alta |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | opencode-go provider | ~24 dias | Aberto, sem reviews | 🟡 Média |
| [#3389](https://github.com/sipeed/picoclaw/pull/3389) | dependabot: golang.org/x/crypto | ~8 dias | Aberto, stale | 🟢 Baixa |

### Items Críticos Pendentes de Ação

1. **🔴 URGENTE**: Certificate TLS — precisa de.owner de infraestrutura (não parece ser issue de código)
2. **🟠 PRIORIDADE**: PRs do x1F916 (#3400, #3401, #3402, #3403, #3399) — 5 fixes esperando review
3. **🟡 SEGUIR**: PR #3414 (turn time budget) — feature interessante para controle operacional

---

## Métricas Resumidas — 2026-10-02

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues abertas/ativas (24h) | 2 | Estável |
| PRs abertos (24h) | 12 | ↑ Alta atividade |
| PRs merged/fechados (24h) | 2 | Estável |
| Releases | 0 | Sem release |
| Bugs críticos abertos | 1 | ⚠️ TLS expirado |
| PRs de dependências pendentes | 6 | 🔄 Aguardando merge |
| Engajamento (reações + comentários) | 6 | Baixo |

---

**Ação Recomendada**: Priorizar review dos PRs de estabilidade do x1F916 e coordenar com infraestrutura para renovação do certificado TLS do domínio oficial.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-10-02

---

## 1. Panorama do Dia

O projeto IronClaw mantém uma atividade moderada nas últimas 24h, com 2 issues e 2 PRs atualizados. Não houve lançamentos de novas versões, e o foco permanece em desenvolvimento de funcionalidades e análise de falhas. A atividade concentra-se em melhorias de infraestrutura (browser persistence, codebase graph refresh) e em documentação para praticantes, indicando uma fase de maturação do projeto.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde o período analisado. O último release pode ser consultado diretamente no repositório.

---

## 3. Progresso do Projeto

### PRs em destaque

| PR | Descrição | Escopo | Tamanho | Status |
|----|-----------|--------|---------|--------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | Refresh do codebase knowledge graph | CI/Infrastructure | XS | Aberto |
| [#7499](https://github.com/nearai/ironclaw/pull/7499) | Host-mediated Passport para practitioners | Docs, Dependencies | XL | Aberto |

**Análise:**
- **PR #7988** (automação CI): Atualização automática do bootstrap de memória do codebase via workflow `Codebase Graph Refresh`. Manutenção de infraestrutura com impacto direto na qualidade do código gerado por agentes.
- **PR #7499** (novo contribuidor): Adiciona um "host seam" (`builtin.idcp`) para agentes IronClaw acessarem IdentyClaw Passport sem shell ou extensão, incluindo um kit de deployment para practitioners.

---

## 4. Temas Quentes da Comunidade

### Issues com atividade recente

| Issue | Título | Comentários | Reações | Status |
|-------|--------|-------------|---------|--------|
| [#2358](https://github.com/nearai/ironclaw/issues/2358) | BrowserProfileStore trait com persistência encriptada | 1 | 0 | Aberta |
| [#8121](https://github.com/nearai/ironclaw/issues/8121) | Daily ironclaw failure taxonomy — 2026-10-01 | 0 | 0 | Aberta |

**Análise:**
- **Issue #2358** (enhancement): Solicitação de alto impacto para persistência de sessões de browser (cookies, localStorage, IndexedDB) entre execuções de agentes. O diretório user-data-dir do Chromium (~50-200MB) contém bearer tokens sensíveis e precisa de persistência encriptada. Esta feature é fundamental para evitar re-autenticação constante.
- **Issue #8121**: Relatório diário de taxonomia de falhas. A análise indica que 128 non-passes são dominados por um defeito recorrente no workspace-seeding (benchmark-side).

---

## 5. Bugs e Estabilidade

### Falhas identificadas

| Severidade | Descrição | Referência |
|------------|-----------|------------|
| **Alta (benchmark-side)** | Defeito recorrente em "broken-workspace-seeding" afeta benchmarking | [#8121](https://github.com/nearai/ironclaw/issues/8121) |

**Análise:**
O relatório diário de taxonomy de falhas ([#8121](https://github.com/nearai/ironclaw/issues/8121)) indica que o benchmark `clawbench` apresenta 128 non-passes, predominantemente causados por um defeito de seeding de workspace no lado do benchmark. Este problema pode impactar a confiabilidade das métricas de performance do projeto.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas demandas identificadas

**Issue #2358** — BrowserProfileStore trait
- **Escopo:** `workspace`, `secrets`
- **Prioridade:** Funcionalidade essencial para experiência do usuário
- **Resumo:** Necessidade de persistir sessões de browser encriptadas entre execuções de agentes
- **Benefícios esperados:**
  - Eliminação de re-autenticação frequente
  - Segurança aprimorada via tarball encriptado
  - Suporte a múltiplos perfis de browser

**PR #7499** — IdentyClaw Passport para Practitioners
- **Escopo:** `docs`, `dependencies`
- **Tamanho:** XL
- **Contribuidor:** Novo (discernible-io)
- **Impacto:** Democratiza acesso a funcionalidades de identidade para usuários finais

---

## 7. Resumo de Feedback dos Usuários

### Insights dos dados disponíveis

| Categoria | Observação |
|-----------|------------|
| **Dores identificadas** | Necessidade de persistência de sessão (evitar re-login constante) |
| **Cenários de uso** | Agentes IronClaw com browser sessions, practitioners utilizando Passport |
| **Preocupações** | Armazenamento seguro de tokens/bearer tokens em user-data-dir |
| **Satisfação** | Comunidade ativa em issues de qualidade e documentação |

---

## 8. Backlog que Merece Atenção

### Issues pendentes sem atividade recente

| Issue | Título | Criado | Atualizado | Comentários | Prioridade |
|-------|--------|--------|------------|-------------|------------|
| [#2358](https://github.com/nearai/ironclaw/issues/2358) | BrowserProfileStore trait com persistência encriptada | 2026-04-12 | 2026-10-01 | 1 | Alta |
| [#8121](https://github.com/nearai/ironclaw/issues/8121) | Daily failure taxonomy | 2026-10-01 | 2026-10-01 | 0 | Monitoramento |

**Análise:**
- **Issue #2358** está aberta há ~6 meses e recebeu apenas 1 comentário. O feature request é substancial e alinhado com necessidades reais de usuários. Recomenda-se triagem e planejamento para próxima release.
- **Issue #8121** é um relatório recorrente de falhas que requer análise para correção do defeito de workspace-seeding.

---

## Indicadores de Saúde do Projeto

| Métrica | Status | Tendência |
|---------|--------|-----------|
| Atividade (issues/PRs) | Moderada (2/2) | Estável |
| Releases | Nenhuma (24h) | Pausa |
| Novos contribuidores | 1 (PR #7499) | Positivo |
| Débitos técnicos | 1 defeito de benchmarking | Atenção |

---

*Relatório gerado em 2026-10-02 com base nos dados do GitHub de [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-10-02

---

## 1. Panorama do Dia

O projeto CoPaw (agentscope-ai/CoPaw) apresenta **alta atividade de desenvolvimento** nas últimas 24h, com 7 issues abertas/ativas e 9 PRs atualizados. Não houve novos lançamentos, mas dois PRs foram fechados (um merge por duplicação, outro marcado para revisão posterior). A comunidade demonstra foco em **correções de bugs em providers** (DeepSeek, OpenAI) e melhorias na experiência de interface (temas, CJK rendering, markdown). O volume de PRs grandes e médios indica uma sprint ativa de estabilização para a próxima versão.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

O projeto encontra-se em período pré-release (evidenciado pela versão V2.2.2.beta4 mencionada na issue #8073). Recomenda-se monitorar o repositório para anúncios de release candidate nas próximas semanas.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergiados

| # | Título | Tipo | Observação |
|---|--------|------|------------|
| [#8069](https://github.com/agentscope-ai/QwenPaw/pull/8069) | fix(agents): restrict deepseek formatters to image media | bugfix | **Fechado** — duplicado do #8070, que segue aberto |
| [#8068](https://github.com/agentscope-ai/QwenPaw/pull/8068) | fix(console): repair CJK emphasis boundaries in chat Markdown | bugfix | **Fechado (Close-and-review-later)** — aguardando revisão |

### PRs Abertos de Destaque

| # | Título | Tamanho | Progresso |
|---|--------|---------|-----------|
| [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) | feat(modes): add Advisor Mode | XXXL | Adiciona modo Advisor com dual-model (advisor + worker) |
| [#8072](https://github.com/agentscope-ai/QwenPaw/pull/8072) | fix(e2e): isolate stateful browser tests | XL | Melhora robustez dos testes E2E com fixtures isoladas |
| [#8067](https://github.com/agentscope-ai/QwenPaw/pull/8067) | fix(channels): repair CJK emphasis boundaries | L | Correção complementar ao #8068 para rendering markdown |
| [#8066](https://github.com/agentscope-ai/QwenPaw/pull/8066) | fix(agents): drop empty media blocks | S | Evita payloads inválidos com data URIs vazios |
| [#8065](https://github.com/agentscope-ai/QwenPaw/pull/8065) | fix(skills): sanitize skill_name | S | Corrige path traversal em staging de skills |
| [#8063](https://github.com/agentscope-ai/QwenPaw/pull/8063) | feat(console): wake parent agent session | S | Notifica sessões pai ao completar background tasks |

**Interdependência detectada:** PRs #8067 e #8068 tratam do mesmo problema (CJK emphasis boundaries) — #8068 foi fechado para revisão enquanto #8067 permanece aberto para consolidação.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Tema Principal |
|---|--------|-------------|-----|----------------|
| [#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274) | Feature: ask_user_question tool para Human-in-the-Loop | 3 | 1 | Ferramenta de interação usuário-agente |
| [#8076](https://github.com/agentscope-ai/QwenPaw/issues/8076) | reload: notify room and cancel in-flight turns | 1 | 0 | Gerenciamento de sessões em reload |
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | Plugin-facing theme extension point | 1 | 0 | Extensibilidade de temas para plugins |

### Análise dos Temas

1. **Human-in-the-Loop (#6274):** A feature request com maior engajamento propõe uma ferramenta `ask_user_question` para pausar agentes e coletar input estruturado. Indica demanda por **agentes mais seguros e controláveis** em cenários de alta responsabilidade.

2. **Theme Extension (#8071):** Plugins atualmente têm opções limitadas de customização visual. A demanda sugere um **ecossistema de plugins em crescimento** que precisa de APIs de theming mais flexíveis.

3. **Reload Behavior (#8076):** Problema de UX onde reloads de agente abandonam in-flight turns silenciosamente após timeout. Demonstra necessidade de **feedback de estado mais transparente** para operadores.

---

## 5. Bugs e Estabilidade

### Bugs Reportados nas Últimas 24h

| Severidade | # | Descrição | Provider/Componente | Impacto |
|------------|---|-----------|---------------------|---------|
| **Alta** | [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) | PDF via `send_file_to_user` quebra permanentemente sessão DeepSeek (400 error) | DeepSeek provider | Sessão inutilizável após upload de PDF |
| **Alta** | [#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) | Página de conversa inacessível em V2.2.2.beta4 (acesso LAN) | Console | Bloco de acesso multi-dispositivo |
| **Média** | [#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) | Connection test falha com 400 para gpt-6-family | OpenAI provider | Configuração de novos modelos comprometida |
| **Média** | [#8076](https://github.com/agentscope-ai/QwenPaw/issues/8076) | In-flight turns abandonados silenciosamente no reload | MultiAgentManager | Perda de contexto em hot-reload |

### Correções em Andamento

- **#8070/#8069:** Restringir formatters DeepSeek a mídia de imagem (PDF/audio mal formatados)
- **#8066:** Drop de blocos de mídia vazios antes do formatting
- **#8065:** Sanitização de `skill_name` (path traversal em staging paths)

### Status de Estabilidade

⚠️ **Preocupações identificadas:**
- 2 bugs de **severidade alta** em providers principais (DeepSeek, Console)
- 1 bug confirmado como não corrigido na branch `main` (#8074)
- Beta V2.2.2.beta4 com regressão de acesso LAN (#8073)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Componentes | Relevância Estratégica |
|---|--------|-------------|------------------------|
| [#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274) | ask_user_question tool (Human-in-the-Loop) | Core + Console | Alta — diferenciação para agentes críticos |
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | Plugin-facing theme extension point | Console | Média — ecossistema de plugins |
| [#8075](https://github.com/agentscope-ai/QwenPaw/issues/8075) | Update bundled Codex SDK (0.144.4 → 0.159.3) | Providers | Média — suporte a novos modelos Codex |
| [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) | Advisor Mode (PR aberto) | Modes | Alta — arquitetura multi-agente |

### Sinais de Roadmap

1. **Suporte a modelos mais novos:** Atualização do Codex SDK e whitelist de modelos GPT-6 sugere foco em **cobertura de modelos latest**.

2. **Arquitetura multi-agente:** Advisor Mode (#7569) e wake parent session (#8063) indicam evolução para **fluxos de trabalho agent-to-agent**.

3. **Interoperabilidade:** Feature de Human-in-the-Loop (#6274) com 3+ meses de idade pode indicar **priorização futura para safety**.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Evidência |
|-----------|----------|-----------|
| **Provedores Instáveis** | DeepSeek PDF quebra sessão permanentemente | #8064 (2 comentários, autor com evidência detalhada) |
| **Regressões de Release** | V2.2.2.beta4 introduz bug de acesso LAN | #8073 (1 comentário, impacto multi-dispositivo) |
| **Modelos Não Reconhecidos** | GPT-6 family não passa em connection test | #8074 (autor confirma bug no `main`) |
| **UX de Reload** | Turns in-flight abandonados sem notificação | #8076 (1 comentário, edge case de produção) |

### Cenários de Uso Identificados

- **Ambientes empresariais LAN:** Usuários acessando instâncias QwenPaw via rede local (#8073)
- **Agents críticos:** Necessidade de intervenção humana para decisões de alto risco (#6274)
- **Desenvolvimento de plugins:** Autores requisitando APIs de theming mais ricas (#8071)

### Indicadores de Satisfação

- Issue #6274 com 1 upvote demonstra interesse, mas baixa viralidade
- PR #8063 (first-time-contributor) indica entrada de novos contribuidores
- Atividade distribuída entre bugs e features sugere **comunidade ativa mas fragmentada**

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Discussão Prolongada

| # | Título | Idade | Status | Prioridade |
|---|--------|-------|--------|------------|
| [#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274) | ask_user_question tool (Human-in-the-Loop) | ~73 dias | Aberta, 3 comentários | **Alta** — feature request antiga sem decisão |
| [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) | DeepSeek PDF session break | 2 dias | Aberta, 2 comentários | **Alta** — bug severo em produção |

### Issues com Potencial Tech Debt

| # | Título | Risco |
|---|--------|-------|
| [#8065](https://github.com/agentscope-ai/QwenPaw/pull/8065) | Path traversal em skill staging | Segurança — já em PR |
| [#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) | Whitelist hardcoded de modelos | Manutenibilidade — bug confirmado no `main` |

### Recomendações de Priorização

1. **Crítico:** Corrigir bugs #8064 (DeepSeek) e #8073 (V2.2.2.beta4) antes do próximo release
2. **Alta:** Revisar decisão sobre #6274 (Human-in-the-Loop) — 73 dias sem conclusão
3. **Média:** Validar PR #7569 (Advisor Mode) para próximo milestone
4. **Média:** Atualizar whitelist de modelos (#8074) para suportar GPT-6 family

---

## Resumo Executivo

| Métrica | Valor |
|---------|-------|
| Issues ativas | 7 |
| PRs atualizados | 9 (2 fechados) |
| Releases | 0 |
| Bugs alta severidade | 2 |
| Features em PR aberto | 2 (incluindo Advisor Mode) |
| Issues >30 dias sem resolução | 1 (#6274) |

**Veredicto:** Projeto em **fase ativa de estabilização pré-release**. Bugs em providers principais requerem atenção imediata. A comunidade demonstra interesse em features de safety (HiTL) e arquitetura multi-agente, que podem definir a direção do roadmap V2.3+.

---

*Relatório gerado em 2026-10-02 com base em dados do GitHub de CoPaw (agentscope-ai/CoPaw).*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
## Data de referência: 2026-10-02

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade** em 02/10/2026, com **42 issues ativas** e **50 PRs abertos** — nenhuma closure ou merge registrada nas últimas 24h, indicando um momento de preparação para consolidação. A atividade concentrada em **gateway separation**, **runtime composition**, **plugin architecture** e **multi-tenant RBAC** sugere que a equipe está convergindo para as entregas das versões v0.8.6 e v0.9.0. Não houve lançamentos hoje, sinalizando que a base de código está em estado de revisão intensiva. A participação da comunidade permanece ativa com debates técnicos substanciais, especialmente sobre ownership de contratos de persistência e arquitetura de segurança.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24h.**

O projeto não publicou versões hoje. As issues com tag `release:v0.8.6` e `release:v0.9.0` indicam que a equipe trabalha ativamente para交付这两个里程碑.

---

## 3. Progresso do Projeto

### PRs em destaque (abertos, awaiting review/merge)

| PR | Título | Tamanho | Dependências | Área |
|----|--------|---------|--------------|------|
| [#11377](https://github.com/zeroclaw-labs/zeroclaw/pull/11377) | `feat(gateway)`: serve /ws/sops/runs e /api/version/check | XL | stacked on #11351 | gateway |
| [#11388](https://github.com/zeroclaw-labs/zeroclaw/pull/11388) | `fix(config)`: mask credentials em URLs configuradas | XL | master | security/config |
| [#11390](https://github.com/zeroclaw-labs/zeroclaw/pull/11390) | `feat(rpc)`: nomeia razões de recusa para rotas core-backed | XL | stacked on #11351 | rpc |
| [#11345](https://github.com/zeroclaw-labs/zeroclaw/pull/11345) | `feat(desktop)`: RPC readiness e version handshake | XL | stacked on #11274 | desktop |
| [#11373](https://github.com/zeroclaw-labs/zeroclaw/pull/11373) | `feat(gateway)`: serve SOP authoring routes through core | XL | stacked on #11351 | gateway |
| [#11382](https://github.com/zeroclaw-labs/zeroclaw/pull/11382) | `feat(gateway)`: serve status, logs, doctor e event stream | XL | stacked on #11351 | gateway |
| [#11313](https://github.com/zeroclaw-labs/zeroclaw/pull/11313) | `fix(cli)`: publica edições de autorização do config set/patch | XL | master | security/identity-access |
| [#11319](https://github.com/zeroclaw-labs/zeroclaw/pull/11319) | `feat(gateway)`: move plugin webhook admission para core | XL | depends on #11318, #11339 | plugin |
| [#11414](https://github.com/zeroclaw-labs/zeroclaw/pull/11414) | `feat(web)`: adiciona workspaces para sessions e code | XL | master | web |
| [#11186](https://github.com/zeroclaw-labs/zeroclaw/pull/11186) | `feat(rpc)`: adiciona zeroclaw-rpc-client e transporte in-process | XL | depends on #11165 | rpc/architecture |
| [#11149](https://github.com/zeroclaw-labs/zeroclaw/pull/11149) | `fix(rpc)`: para de pré-aprovar comandos shell em cron/add e cron/patch | XL | master | security/cron |
| [#11219](https://github.com/zeroclaw-labs/zeroclaw/pull/11219) | `fix(zerocode)`: inicia sessões locais no diretório de lançamento | L | master | zerocode |
| [#11392](https://github.com/zeroclaw-labs/zeroclaw/pull/11392) | `fix(rpc)`: recheck stream authority após esperar por writer room | L | master | rpc |
| [#11410](https://github.com/zeroclaw-labs/zeroclaw/pull/11410) | `fix(auth)`: contém execução cron/peer sem principal | XL | depends on #11230 | auth |
| [#11408](https://github.com/zeroclaw-labs/zeroclaw/pull/11408) | `fix(sop)`: contém pontos de entrada sem principal | L | depends on #11220 | sop |

**Observação crítica**: Há uma cadeia de PRs stacked sobre #11351 (zeroclaw-gw preview) e #11186 (zeroclaw-rpc-client), sugerindo que a arquitetura de gateway separado está em fase de integração final.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| # | Issue | Comentários | Tema |
|---|-------|-------------|------|
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) | [Tracker]: Session-persistence contract ownership and layer ordering | **16** | Arquitetura — 4 workstreams competindo pelo mesmo contrato |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | [Feature]: Per-sender RBAC for multi-tenant agent deployments | **11** | Segurança/Multi-tenant — escopo aceito, draft #11068 em aberto |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | [Tracker]: Runtime and gateway delivery v0.8.6 e v0.9.0 | **5** | Arquitetura — source of truth para Phase 2 e Phase 3 |
| [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) | bug(daemon): CPU spin em daemon efêmero | **5** | Estabilidade — consumo 140-177% CPU após 17h |
| [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) | llama.cpp model router | **4** | Provider — quick switching de modelos locais |
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | Bug: Delegated memory tools perdem principal scope | **4** | Segurança — risco S0, vazamento de dados entre sessões |
| [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) | zerocode ignora diretório de lançamento (regressão) | **3** | UX/TUI — regresão de #10609 |
| [#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781) | Remove or implement inert context/history config keys | **3** | DX — chaves configuradas não têm efeito |
| [#8907](https://github.com/zeroclaw-labs/zeroclaw/issues/8907) | zerocode TUI: plugin/capability catalog pane | **3** | UX — Track A surface 4/4, pré-requisitos #8908 e #8909 merged |
| [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) | llama.cpp e custom provider usam URL errada | **2** | Provider — URI configurada não é respeitada |
| [#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394) | gateway.pairing_dashboard ignorado e códigos nunca expiram | **2** | Segurança — códigos de pareamento persistem eternamente |
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter spend mostra $0.00 e tokens como "free tok" | **2** | Observabilidade — custo nunca ingerido |
| [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) | WhatsApp Web dropa caption de imagens/vídeos/docs | **2** | Canal — agent só recebe placeholder |
| [#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076) | local username/password AuthProvider (IdP-less) | **2** | Segurança — child de #7141 |
| [#11294](https://github.com/zeroclaw-labs/zeroclaw/issues/11294) | Flaky test race condition (150ms sleep) | **2** | CI — teste intermittent sob parallel runtime gate |
| [#10876](https://github.com/zeroclaw-labs/zeroclaw/issues/10876) | gateway config writes reportam saved mas nunca chegam ao daemon | **2** | Config — parcialmente corrigido por #11202 |

### Análise dos temas dominantes

1. **Arquitetura de gateway separado**: A cadeia de PRs stacked demonstra convergência técnica para a separação gateway/core (Phase 3 de #7432). A adição do `zeroclaw-rpc-client` (#11186) é um bloco fundamental.

2. **Segurança multi-tenant**: O debate sobre ownership de sessão (#9600, 16 comentários) e RBAC por sender (#5982, 11 comentários) indica amadurecimento das preocupações de isolamento em deployments compartilhados.

3. **Estabilidade do daemon**: O bug de CPU spin (#9799) e os múltiplos bugs S0 de memory isolation (#11198, #11239) sugerem necessidade de stress testing mais agressivo antes de releases.

---

## 5. Bugs e Estabilidade

### Por severidade

#### S0 — Data Loss / Security Risk (crítico)

| # | Título | Link | Status |
|---|--------|------|--------|
| #11198 | Delegated memory tools perdem principal scope | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | OPEN, accepted, `release:v0.9.0` |
| #11239 | Owned sessions reach shared memory plane via spawn_subagent/execute_pipeline | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) | OPEN, `release:v0.9.0` |

#### P0/P1 — Workflow blocked / high risk

| # | Título | Link | Severidade | Status |
|---|--------|------|-----------|--------|
| #9799 | Daemon efêmero entra em CPU spin sustentado (140-177%) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) | P1, r:needs-repro | OPEN |
| #9394 | gateway.pairing_dashboard ignorado + códigos nunca expiram | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/9394) | P1, accepted | OPEN |
| #10876 | Gateway config writes não chegam ao daemon até reload | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/10876) | P1, follow-up, accepted | OPEN (parcialmente corrigido) |
| #9624 | Registry WIT pin diverge de master e quebra componentes publicados | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/9624) | P1, accepted, `release:v0.8.6` | OPEN |
| #11204 | OpenRouter spend mostra $0.00 — cost nunca ingerido | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | P1, accepted | OPEN |
| #11257 | WhatsApp Web dropa caption de mídia | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) | P1, accepted | OPEN |

#### P1 — Regressões

| # | Título | Link | Notas |
|---|--------|------|-------|
| #11387 | zerocode ignora launch directory (regressão de #10609) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) | PR #11219 em aberto para correção |

#### P2 — Degraded behavior / minor

| # | Título | Link |
|---|--------|------|
| #11296 | llama.cpp/custom provider usa URL errada | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) |
| #11294 | Teste flako com race condition (150ms sleep) | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11294) |
| #11333 | Skill review tools não veem skills via skill_bundles | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) |
| #11332 | Skill review/creation nunca roda em channel/webhook/gateway turns | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) |

### Análise de estabilidade

O projeto apresenta **2 bugs S0 ativos** relacionados a memory isolation, ambos com标签 `release:v0.9.0`, indicando que o roadmap reconhece a gravidade. A questão de security isolation em sessões delegadas (#11198) e memória compartilhada via spawn_subagent (#11239) requerem atenção imediata antes de qualquer release.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features aceitas com maior prioridade

| # | Título | Link | Área | Release Target |
|---|--------|------|------|----------------|
| #5982 | Per-sender RBAC para multi-tenant | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Segurança | v0.9.0 |
| #7539 | llama.cpp model router | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) | Provider | icebox |
| #8076 | Local username/password AuthProvider (IdP-less

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*