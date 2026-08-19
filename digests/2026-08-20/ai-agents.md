# Resumo diário do ecossistema de agentes de IA 2026-08-20

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-08-19 20:20 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-08-20

## 1. Panorama do Dia

NullClaw apresenta **baixa atividade** em 20 de agosto de 2026. Nenhuma issue foi atualizada nas últimas 24h, indicando silêncio na triagem de bug reports ou solicitações de suporte. Uma única pull request aberta (#989) trata de correção cosmética no README — a restauração do gráfico de histórico de estrelas. O repositório não registrou releases novas nem movimentação significativa de contributors, sugerindo um período de manutenção mínima ou transição entre ciclos de desenvolvimento.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto encontra-se sem atualizações de versão. Não há notas de release, changelogs ou artefatos de deployment disponíveis neste período.

---

## 3. Progresso do Projeto

### PRs em análise (não mergeadas)

| # | Título | Autor | Status | Impacto |
|---|--------|-------|--------|---------|
| [#989](https://github.com/nullclaw/nullclaw/pull/989) | fix: restore broken star history chart | FaintFlower | `OPEN` | Cosmetic |

**Análise:** A PR #989 propõe correção do gráfico de histórico de estrelas no README, migrando do endpoint oficial de stargazers do GitHub (sujeito a restrições de acesso) para `star-history.deta.page`, solução que não exige autenticação. A mudança é **backward-compatible** — não altera funcionalidades core, apenas corrige visibilidade de documentação. Aguarda review dos maintainers.

**Métricas da PR:**
- Idade: ~1 dia
- Revisões: 0
- Aprovações: 0
- Comentários: não disponíveis

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com atividade de comentários/reações registrada nas últimas 24h.**

O volume zero de interações comunitárias indica que não há debates ativos sobre direcionamento técnico, decisões arquiteturais ou conflitos de design. Recomenda-se monitorar issues antigas para identificar perguntas abandonadas que possam sinalizar gaps de documentação ou suporte.

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado ou regression identificado nas últimas 24h.**

Não há issues abertas com标签 de `bug` ou `critical`. O projeto mantém aparente estabilidade funcional — ao menos nos indicadores rastreáveis via GitHub.

> **Nota:** A ausência de reports pode ser interpretada positivamente (poucos bugs ativos) ou negativamente (falta de canal/feedback dos usuários).

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma feature request aberta ou diskusi roadmap nas últimas 24h.**

O funil de demandas está vazio hoje. Não há indicadores sobre prioridades futuras do projeto via issues etiquetadas como `enhancement`, `feature request` ou `roadmap`.

---

## 7. Resumo de Feedback dos Usuários

**Ausência de feedback explícito nas últimas 24h.**

O único sinal de engajamento externo é a PR #989, que não constitui抱怨 de usuário, mas sim correção de documentação enviada por contributor. Não há issues com descrições de cenários de uso, relatos de frustração ou solicitações de ajuda — o que impossibilita análise de satisfação/insatisfação baseada em dados concretos.

---

## 8. Backlog que Merece Atenção

| Issue/PR | Título | Idade | Prioridade Observada |
|----------|--------|-------|----------------------|
| [#989](https://github.com/nullclaw/nullclaw/pull/989) | fix: restore broken star history chart | ~1 dia | **Alta** — Impacta primeira impressão de novos visitors |

### Recomendação de Ação Imediata

A PR #989 é de baixíssimo risco e alta visibilidade (afeta o README, recurso mais acessado do repo). **Revisar e, se validada, mergeá-la.** Isso mantém a credibilidade do projeto e incentiva contribuições futuras.

---

## Indicadores Gerais de Saúde do Projeto

| Indicador | Status | Observação |
|-----------|--------|------------|
| Atividade de issues | 🔴 Baixíssima | 0 nas últimas 24h |
| Atividade de PRs | 🟡 Moderada | 1 PR aberta (cosmética) |
| Releases | 🔴 Inexistente | Nenhuma nos últimos dias |
| Engajamento comunitário | 🔴 Mínimo | Sem comentários/reações |
| Bugs críticos abertos | 🟢 Nenhum | — |
| Backlog responsivo | 🟡 Indefinido | Pouca base para avaliar |

**Veredicto:** NullClaw está em modo de **hibernação operacional** — estável, porém com baixo dinamismo de desenvolvimento e comunidade. A correção do gráfico de histórico de estrelas (#989) é a única ação pendente que requer atenção.

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-08-20. Para indicadores mais precisos, recomenda-se análise histórica de 30-90 dias.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-08-20
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois polos distintos de maturidade** em 20 de agosto de 2026. De um lado, **IronClaw** se destaca como o projeto mais maduro, prestes a promover a versão 1.3.0-stable com pipeline disciplinado e EPICs bem estruturados para v1.4.0. Do outro, **Hermes Agent, CoPaw e ZeroClaw** operam em modo de desenvolvimento intensivo, com 50+ PRs/issues atualizados por dia, indicando alta demanda de mercado e pressão por funcionalidades. **NanoBot** ocupa posição intermediária com foco em estabilidade após crescimento acelerado. **NullClaw** permanece em modo de hibernação operacional, enquanto **PicoClaw** demonstra saúde moderada com integração Anthropic como diferencial. A ausência quase universal de releases formais (exceto IronClaw) sugere que o ecossistema ainda prioriza iteração sobre disciplina de versionamento.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Merged | Releases | Saúde Geral |
|---------|--------------|-----------|------------|----------|------------|
| **IronClaw** | 11 | 38 | 15 | 1 iminente (1.3.0) | 🟢 Estável + Evoluindo |
| **Hermes Agent** | 50 | 50 | 9 | 0 | 🟡 Ativo com Instabilidade |
| **CoPaw** | 50 | 49 | 17 | 0 | 🟡 Ativo com Correções |
| **ZeroClaw** | 50 | 50 | 2 | 0 | 🟡 Ativo com Rig QM |
| **NanoBot** | 6 | 27 | 8 | 0 | 🟡 Ativo com Conflitos |
| **PicoClaw** | 0 | 6 | 3 | 0 | 🟢 Moderado + Saudável |
| **NullClaw** | 0 | 1 | 0 | 0 | 🔴 Hibernação |

**Observações:**
- IronClaw apresenta a melhor relação PRs merged/abertos (15/23 = 65%), indicando disciplina de merge.
- ZeroClaw tem taxa baixa (2/50 = 4%), mas justificada por rigoroso controle de qualidade.
- NullClaw está virtualmente inativo, requerendo avaliação estratégica de continuidade.

---

## 3. Posicionamento do Projeto Principal

### IronClaw (referência do ecossistema)

**Vantagens Competitivas:**
- **Release discipline:** Único projeto com processo de promoção formal (RC → stable), gerando previsibilidade para usuários enterprise.
- **Arquitetura técnica avançada:** Sandbox persistente por `(tenant, user, thread)` com latência de ~40ms vs. criação por comando (~1-2.5s).
- **Design system institucional:** Integração Storybook + governança de design documentada em PRs.

**Diferenças Técnicas:**

| Dimensão | IronClaw | Hermes Agent | NanoBot |
|----------|----------|--------------|---------|
| Sandbox model | Persistent per-user (Docker Exec) | App containerizado | Ephemeral por sessão |
| Orchestration | EPICs bem definidos (v1.4.0) | Multi-gateway emergente | Skills/Tool focus |
| Release cadence | Formal (RC → stable) | Informal | Informal |
| Community governance | RFC + design docs | Issue-driven | Issue-driven |

**Tamanho da Comunidade:**
- 23 PRs abertos, 15 mergeados em 24h
- 8+ contributors core identificados
- 4 EPICs ativos simultâneos

---

## 4. Focos Técnicos Compartilhados

### 4.1 Estabilidade Multi-Plataforma

**Problema universal:** Testes e funcionalidades quebrando em Windows.

| Projeto | Evidência |
|---------|-----------|
| **ZeroClaw** | 74 test failures no Windows (issue #7462) — comandos Unix-only, path semantics, console encoding |
| **Hermes Agent** | BSOD ao matar `svchost.exe` (P1); ZIP fallback deleta desktop app |
| **CoPaw** | Falsos positivos de antivírus bloqueando o app |
| **NanoBot** | `curl` substituído por comando Windows-compatible (skill weather) |

**Ação requerida:** Padronizar matriz de testes CI/CD para Windows 11 24H2 + Windows Server 2022.

### 4.2 Persistência de Sessão e Memória

| Projeto | Status |
|---------|--------|
| **NanoBot** | Consolidação de memória não funciona (#5403); 30-50% de erro na contagem de tokens |
| **Hermes Agent** | Gateway sessions imortais após restart (#66255) |
| **IronClaw** | Reborn storage profile-agnostic em desenvolvimento (#7456) |
| **ZeroClaw** | Cron job retém SQLite lock indefinidamente (#9320) |
| **PicoClaw** | Roteamento de agentes ignora histórico (#3316) — bug em produção |

**Convergência:** Gestão de estado distribuído é gap crítico transversal.

### 4.3 Integração de Segurança

| Projeto | Foco |
|---------|------|
| **ZeroClaw** | WASM plugin architecture (RFC); mTLS mandatory (ZeroRelay #10142) |
| **IronClaw** | Sandbox persistente para isolamento de tenants |
| **CoPaw** | Hub self-hosted multiusuário (Docker/local runtimes) |
| **NanoBot** | OAuth Codex storage; Docker OAuth persistence |

**Sinais:** Modelo de confiança zero e isolamento de execução emergem como requisitos não-funcionais.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Indicação |
|---------|------------------|-----------|
| **IronClaw** | Enterprise / DevOps | Necessidade de sandbox persistente e automations escaláveis |
| **CoPaw** | Developers / Researchers | Extensibilidade de providers, computer-use |
| **ZeroClaw** | Security-conscious / Teams | WASM, mTLS, SOPs como cidadãos de primeira classe |
| **NanoBot** | Power users / WhatsApp | Integração messaging + agent autonomy |
| **Hermes Agent** | Multi-platform users | Windows/Linux/Mac com desktop-first |
| **PicoClaw** | Telegram-focused | Modelo fallback configurável |
| **NullClaw** | — | Projeto sem direcionamento claro |

### 5.2 Por Arquitetura

```
IronClaw     → Modular crates + WASM capabilities + persistent sandbox
CoPaw        → Provider-agnostic + Hub self-hosted
ZeroClaw     → Rust-native + WASM plugins + mTLS transport
Hermes Agent → Desktop-native + Multi-gateway orchestration
NanoBot      → Skills-as-tools + OAuth integration
PicoClaw     → Telegram-centric + Anthropic API native
```

### 5.3 Diferenciadores Únicos

| Projeto | Diferenciador | Valor Proposto |
|---------|---------------|----------------|
| **IronClaw** | Persistent sandbox (40ms vs 2.5s) | Performance enterprise |
| **ZeroClaw** | WASM plugin architecture | Extensibilidade segura |
| **CoPaw** | Provider-agnostic (50+ providers) | Flexibilidade máxima |
| **PicoClaw** | `/v1/messages` Anthropic native | Clientes Anthropic-compatíveis |
| **Hermes Agent** | Multi-gateway separation | Arquitetura distribuída |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Categoria | Projetos | Comportamento |
|-----------|----------|---------------|
| 🚀 **Iteração rápida** | Hermes Agent, CoPaw, ZeroClaw | 50+ items/24h, baixa taxa de merge, volume como sinal |
| 📈 **Crescimento disciplinado** | IronClaw | Volume moderado, alta taxa de merge, release management |
| 🔧 **Consolidação de qualidade** | NanoBot | 27 PRs, 5 com conflito — necessidade de merge strategy |
| 📊 **Manutenção mínima** | PicoClaw | Fluxo estável, 3 PRs/24h, foco em dívida técnica |
| 💤 **Estagnação** | NullClaw | Ausência de roadmap ou engajamento |

### 6.2 Maturidade por Processo

```
NullClaw    [████░░░░░░] 10% — Sem processo visível
PicoClaw    [██████░░░░] 60% — Fluxo funcional, dívida técnica
NanoBot     [██████░░░░] 65% — Issue-driven, sem release cadence
CoPaw       [███████░░░] 70% — High engagement, stabilizing
Hermes      [███████░░░] 70% — Volume alto, instabilidade Windows
ZeroClaw    [████████░░] 80% — RFC-heavy, rigorous QM
IronClaw    [██████████] 95% — EPICs + RC + stable promotion
```

### 6.3 Indicadores de Saúde Comunitária

| Indicador | IronClaw | CoPaw | ZeroClaw | NanoBot |
|-----------|----------|-------|----------|---------| 
| Issues fechadas | 4/11 (36%) | 46/50 (92%) | ~10/50 (20%) | 0/6 |
| PRs mergeados | 15/38 (39%) | 17/49 (35%) | 2/50 (4%) | 8/27 (30%) |
| Bugs P0-P1 resolvidos | — | 2 críticos | 8+ bugs | 3 P0-P1 |
| RFCs ativas | 2 | 1 | 5+ | 0 |
| Release cadence | Formal | Informal | Informal | Informal |

---

## 7. Sinais de Tendência

### 7.1 Do Feedback dos Usuários

**TENDÊNCIA 1: Persistência e Estado Distribuído**
> "Sessions are frustrating to get into previous session" (ZeroClaw #10141)
> "Consolidation não funciona" (NanoBot #5403)
> "Sessions imortais após restart" (Hermes #66255)

O ecossistema reconhece que sessões stateless não atendem workflows de longa duração. A expectativa é que agentes mantenham contexto por horas ou dias, não por turno.

**TENDÊNCIA 2: Enterprise Readiness**
> "Hub self-hosted multiusuário" (CoPaw #7112)
> "Per-user sandbox" (IronClaw #7732)
> "ZeroRelay mTLS" (ZeroClaw #10142)

Demanda clara por deployment on-premise, isolamento de tenants e compliance de segurança. Usuários corporates não aceitam dependência de cloud.

**TENDÊNCIA 3: Computer-Use como Primitive**
> "Persistent per-user container" (IronClaw #7751)
> "Computer-use observe related windows" (CoPaw #7037)
> "File management in settings" (NanoBot #4282)

Computer-use evolui de feature experimental para capability fundamental. A próxima geração de agentes precisa de acesso persistente ao filesystem e janelas, não apenas tools stateless.

**TENDÊNCIA 4: Provider Agnosticism**
> "Volcengine Agent Plan + MiMo V2.5" (CoPaw #6515)
> "Anthropic native `/v1/messages`" (PicoClaw #1158)
> "Local llama.cpp runtime" (Hermes #85852)

Usuários rejeitam lock-in em provedores. A tendência é abstração de provider com fallback configurável e suporte a modelos locais.

**TENDÊNCIA 5: Observabilidade e Debugabilidade**
> "Turn observability no WebUI" (NanoBot #5420)
> "Follow-up suggestions" (NanoBot #5408)
> "Cron delegate_task ignores child_timeout" (Hermes #90238)

A segunda geração de agentes prioriza transparência de execução. Usuários precisam entender por que o agente tomou cada decisão.

### 7.2 Do Pipeline de Desenvolvimento

| Tendência | Evidência |
|-----------|-----------|
| **WASM como runtime de plugins** | ZeroClaw (#10076), IronClaw (#7711) |
| **Multi-gateway architectures** | Hermes Agent (#89915, #90006) |
| **Design systems documentados** | IronClaw (#7039, #7043, #7257) |
| **RFC como processo formal** | ZeroClaw (5+ RFCs), IronClaw (design docs) |

### 7.3 Mapa de Posicionamento Estratégico

```
                    ALTA COMPLEXIDADE
                           │
    ZeroClaw ──────────────┼─────────────────── Hermes Agent
    (WASM + mTLS)          │              (Desktop + Multi-gateway)
                           │
    IronClaw ──────────────┼─────────────────── CoPaw
    (Enterprise sandbox)   │              (Provider-agnostic)
                           │
                    BAIXA COMPLEXIDADE
                           │
        PicoClaw ──────────┼─────────────────── NanoBot
        (Telegram native)  │              (Skills + WhatsApp)
                           │
                    Nicho/Unmaintained
                           │
                      NullClaw
                      (Hibernado)
```

---

## Conclusões e Recomendações

### Para Desenvolvedores

1. **IronClaw e ZeroClaw** representam as referências arquiteturais mais maduras — estudar seus PRs e EPICs para padrões de design.
2. **ZeroClaw e Hermes Agent** precisam de contribuição em estabilidade Windows — opportunity de impacto alto.
3. **NanoBot** tem regressão LangChain de 5 meses (#2493) — área negligenciada com alta demanda.

### Para Decisores Técnicos

1. **Para deployment enterprise:** IronClaw (release management + sandbox persistente) ou CoPaw (hub self-hosted).
2. **Para equipes security-conscious:** ZeroClaw (mTLS, WASM plugins, SOPs).
3. **Para integração WhatsApp/Telegram:** NanoBot ou PicoClaw.
4. **Evitar:** NullClaw (sem roadmap visível), NullClaw (sem roadmap visível).

### Para Investidores/Product Managers

1. O ecossistema converge para **persistência de estado**, **provider agnosticism** e **computer-use** — validar roadmap próprio nestas dimensões.
2. **Enterprise readiness** (IronClaw) e **security-first** (ZeroClaw) são os dois modelos de monetização mais claros emergindo.
3. Ausência de release management em 6/7 projetos indica que **disciplina de release é diferencial competitivo** no curto prazo.

---

*Relatório sintetizado de 7 projetos open source — 2026-08-20*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-20

---

## 1. Panorama do Dia

O projeto NanoBot apresenta alta atividade de desenvolvimento nas últimas 24 horas, com **27 PRs atualizados** e **6 issues abertas**, sem nenhum merge de release ou fechamento de issues. A equipe demonstra foco intenso em estabilidade (múltiplas correções de bugs P0-P2) e experiência do usuário (melhorias no WebUI, OAuth e observabilidade). Há uma ausência notável de releases formais, sugerindo que o ciclo de lançamento está em fase de consolidação de contribuições. O volume de PRs com conflito (`conflict` tag) indica competição por merges em funcionalidades críticas.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto nãoemitiu novas versões desde o período analisado. Recomenda-se monitorar o repositório para próximos changelogs.

---

## 3. Progresso do Projeto

### PRs Mergeadas/Fechadas Hoje

| # | PR | Resumo | Impacto |
|---|-----|--------|---------|
| [#4527](https://github.com/HKUDS/nanobot/pull/4527) | feat: add ask_clarification tool | Ferramenta nativa para solicitações de esclarecimento com parâmetros focados, short-circuit de turnos e renderização correta | Melhoria na interação agente-usuário |
| [#4282](https://github.com/HKUDS/nanobot/pull/4282) | feat: add file management to settings | Browsing de arquivos gerados pelo Agent diretamente na interface | Elimina necessidade de acesso manual ao filesystem |
| [#5443](https://github.com/HKUDS/nanobot/pull/5443) | fix(tui): expose /exit in command menu | Registra `/exit` no menu de comandos do TUI com preservação de aliases existentes | UX consistente no terminal |
| [#5440](https://github.com/HKUDS/nanobot/pull/5440) | perf(memory): reuse conversation prefix for local compaction | Reutilização de prefixo de conversa para compactação local, reduzindo overhead | Performance de memória |
| [#5438](https://github.com/HKUDS/nanobot/pull/5438) | fix(webui): return promptly after Ctrl-C | Liberação imediata de leases após Ctrl-C no WebUI | Confiabilidade da interface web |
| [#5341](https://github.com/HKUDS/nanobot/pull/5341) | fix(skills): make weather workflow Windows-safe | Substituição de `curl` por comando compatível com PowerShell/Windows | Compatibilidade cross-platform |

### Destaque de Progresso

As **8 PRs fechadas** indicam avanço em:
- **UX/Interface**: Command menu, follow-up suggestions, observabilidade
- **Estabilidade**: Tratamento de tarefas em background, gestão de sessão
- **Cross-platform**: Suporte Windows para skills
- **Performance**: Compactação de memória otimizada

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| [#2493](https://github.com/HKUDS/nanobot/issues/2493) | LANGSMITH not working (anymore) after latest update | 7 | 1 | Regression, Feature Request |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) | no audio on WhatsApp | 6 | 0 | Bug |
| [#5425](https://github.com/HKUDS/nanobot/issues/5425) | Support legacy socks:// proxy URLs | 1 | 0 | Bug |

### Análise dos Temas

**🔴 Integração LangChain (Issue #2493)**
A remoção de `litellm_provider.py` quebrou a integração com `langchain.com`. Com 7 comentários, é a issue com maior discussão — indica quebra de compatibilidade significativa para usuários que utilizam o ecossistema LangChain. Status: `good first issue` sugere abertura para contribuição da comunidade.

**🔴 Áudio no WhatsApp (Issue #5149)**
Problema de envio de mensagens de áudio no WhatsApp — 6 comentários demonstram que outros usuários enfrentam o mesmo problema. A investigação de logs menciona `neonize.utils.ffmpeg`, sugerindo problema na codificação/transmissão de mídia.

**🟡 Integração de Pagamento (Issue #5447)**
Proposta de integração de scanner de segurança Solanananobot como serviço MCP/x402 pago — demonstra caso de uso comercial avançado e potencial monetização para usuários externos.

---

## 5. Bugs e Estabilidade

### Issues Abertas (Bugs)

| # | Severidade | Título | Estado |
|---|-----------|--------|--------|
| [#5271](https://github.com/HKUDS/nanobot/issues/5271) | **P0** | Prevent stale background task saves from overwriting session data | PR em progresso |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) | P1/P2 | no audio on WhatsApp | Investigação ativa |
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) | **P1** | use API-reported prompt tokens to trigger consolidation | PR com conflito |
| [#5402](https://github.com/HKUDS/nanobot/issues/5402) | P1 | (relacionado a #5403) | Consolidacja não funciona |
| [#5444](https://github.com/HKUDS/nanobot/issues/5444) | P2 | Failed to login OpenAI via OAuth in Docker | Issue nova |
| [#5425](https://github.com/HKUDS/nanobot/issues/5425) | P2 | Support legacy socks:// proxy URLs | Issue nova |
| [#5441](https://github.com/HKUDS/nanobot/issues/5441) | P2 | Dream cursor blocked by recovered tool errors | PR #5442 aberto |
| [#2493](https://github.com/HKUDS/nanobot/issues/2493) | Regression | LANGSMITH integration broken | Issue antiga |

### Bugs Críticos em Foco

**P0 - Session Data Corruption (#5271)**
Tarefas em background podem sobrescrever dados de sessão após `/new`. Merge urgente necessário.

**P1 - Token Estimation (#5403)**
Estimativa local de tokens está 30-50% abaixo do valor real da API, impedindo consolidação de memória.

**Regression - LangChain/LangSmith (#2493)**
Quebra de funcionalidade existente após remoção de provider.

### PRs de Fix em Andamento

| # | Prioridade | Escopo | Descrição |
|---|-----------|--------|-----------|
| [#5446](https://github.com/HKUDS/nanobot/pull/5446) | P2 | cli, provider | OAuth Codex storage via nanobot data dir |
| [#5445](https://github.com/HKUDS/nanobot/pull/5445) | P2 | docker | Persistir OAuth em Docker |
| [#5442](https://github.com/HKUDS/nanobot/pull/5442) | P2 | dream | Cursor avançar após recovery de erros |
| [#5439](https://github.com/HKUDS/nanobot/pull/5439) | P2 | deps | Socks5 padrão (não socks:// legado) |
| [#5431](https://github.com/HKUDS/nanobot/pull/5431) | P2 | agent | Reportar falhas de background tasks |
| [#5430](https://github.com/HKUDS/nanobot/pull/5430) | P2 | agent | Liberar task groups completados |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | P2 | memory | Preservar input completo na consolidação |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas

| # | Feature | Tags | Status |
|---|---------|------|--------|
| [#4853](https://github.com/HKUDS/nanobot/pull/4853) | nano_timer core tool (time, timezone, calendar) | feat, tools, priority p1 | PR aberto, conflito |
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) | Manual-only invocation para skills | feat, skills, priority p2 | PR aberto, conflito |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | Turn observability e safe recovery no WebUI | feat, webui | PR aberto |
| [#5408](https://github.com/HKUDS/nanobot/pull/5408) | Follow-up suggestions no WebUI | feat, webui, priority p2 | PR aberto |
| [#5447](https://github.com/HKUDS/nanobot/issues/5447) | Security-scan MCP integration (pago) | feature request | Issue aberta |
| [#2493](https://github.com/HKUDS/nanobot/issues/2493) | LangSmith/LangChain integration | feature request, regression | Issue aberta |

### Sinais de Roadmap

**🔮 Ferramentas Nativas**
- `nano_timer`: ferramenta de tempo sem dependências externas (P1)
- `ask_clarification`: já mergeada — indica foco em interação refinada

**🔮 WebUI/Observabilidade**
- Turn observability (#5420) + Follow-up suggestions (#5408)
- Indicam investimento na interface web e experiência conversacional

**🔮 Skills Avançadas**
- Manual-only invocation (#5405) — para skills com side effects
- Padrão de segurança para skills de deployment/publicação

**🔮 Integração Comercial**
- Proposta de scanner de segurança pago (#5447)
- Demonstra casos de uso em produção e monetização

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Issue | Impacto |
|-----|-------|---------|
| **Quebra de integração LangChain** | #2493 | Usuários do ecossistema LangChain impedidos de usar Nanobot |
| **Áudio não funciona no WhatsApp** | #5149 | Comunicação por voz comprometida |
| **OAuth falha em Docker** | #5444 | Deploy em container problematico |
| **Socks proxy legacy não funciona** | #5425 | Usuários com infra legada enfrentando erros |
| **Consolidação de memória não funciona** | #5403 | Conversas longas degradam performance |
| **Dream cursor trava** | #5441 | Funcionalidade de Dream bloqueada após erros recoveráveis |

### Cenários de Uso Identificados

1. **Agente WhatsApp**: Usuários dependem de envio de mídia (áudio)
2. **Docker/Nanobot**: Deploy containerizado é caso de uso real
3. **Sustained Goals**: Agentes autônomos com follow-up recorrente
4. **Pagamentos/Microsserviços**: Integração com Solana/x402
5. **LangChain Ecosystem**: Usuários com stack LangChain existente

### Satisfação/Insatisfação

**Positivo**:
- Atividade intensa de desenvolvimento (27 PRs/24h)
- Múltiplas contribuições de comunidade (diversos autores)
- Foco em estabilidade (muitos PRs de fix)

**Preocupante**:
- 6+ issues de bugs abertas em 24h
- Regressão de integração (#2493) sem resolução há meses
- 5 PRs com tag `conflict` — risco de merge conflicts
- Nenhuma release recente

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta / Antigas

| # | Idade | Título | Prioridade |
|---|-------|--------|-----------|
| [#2493](https://github.com/HKUDS/nanobot/issues/2493) | ~5 meses | LANGSMITH integration broken | Alta (regression) |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) | ~3 semanas | no audio on WhatsApp | Alta (bug) |
| [#4853](https://github.com/HKUDS/nanobot/pull/4853) | ~6 semanas | nano_timer tool (PR em conflito) | Média |

### PRs com Conflitos

| # | Conflito | Impacto |
|---|---------|--------|
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) | p1 | Funcionalidade crítica de memória |
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) | p0 | Corrupção de sessão |
| [#4853](https://github.com/HKUDS/nanobot/pull/4853) | p1 | Feature nano_timer |
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) | p2 | Skills |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | p2 | Memória |
| [#4527](https://github.com/HKUDS/nanobot/issues/4527) | closed | Ask clarification (⚠️ merge recente) |

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 6 |
| PRs abertos | 19 |
| PRs fechados/merged | 8 |
| Novas releases | 0 |
| Bugs P0-P1 | 3 |
| PRs com conflito | 5 |
| Issues com >5 comentários | 2 |

**Saúde Geral**: Atividade alta, mas com acumulação de bugs e PRs em conflito. A ausência de releases e o acúmulo de issues antigas (5+ meses para #2493) merecem atenção da equipe.

---

*Relatório gerado automaticamente com base nos dados públicos do GitHub — HKUDS/nanobot — 2026-08-20*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-20

## 1. Panorama do Dia

O projeto Hermes Agent registrou **alta atividade** nas últimas 24 horas, com 50 issues e 50 PRs atualizados. **Nenhuma release** foi publicada. A base de código apresenta **instabilidade significativa no Windows**, com dois bugs P1 críticos (Blue Screen por kill indevido de `svchost.exe` e deleção silenciosa do app desktop). O componente Desktop lidera em volume de reports, enquanto o gateway e a integração com provedores (DeepSeek, Codex, Bedrock) concentram falhas de compatibilidade. A comunidade demonstra preocupação com a estagnação de manutenções de longo prazo (memória, skills) e com a expansão do Bot Mode para cenários multi-gateway. O estado geral é de **desenvolvimento ativo, porém com acúmulo de bugs de estabilidade em plataformas desktop**.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

A ausência de release coincide com a alta volume de PRs abertos e a necessidade de estabilização, especialmente nos bugs P1 Windows.

---

## 3. Progresso do Projeto

### PRs Mergeados/Fechados Hoje (9 total)

| # | PR | Tipo | Contribuidor | Impacto |
|---|-----|------|--------------|---------|
| [#90211](https://github.com/NousResearch/hermes-agent/pull/90211) | WhatsApp: replying to bot's own message never triggers response | bug/fix | orenpupez | Resolve JID device-suffix mismatch em replies do WhatsApp |
| [#90239](https://github.com/NousResearch/hermes-agent/pull/90239) | Agent can close the preview pane | feature | OutThisLife | Adiciona `close_preview` ao desktop_ui toolset |
| [#83286](https://github.com/NousResearch/hermes-agent/pull/83286) | docs(whatsapp): mark Phase 5 as planned | docs | Luna161 | Documenta plano da Fase 5 do WhatsApp |
| [#90182](https://github.com/NousResearch/hermes-agent/pull/90182) | pytest tests/hermes_cli/ runs git checkout/merge/stash | bug/fix | gmdacc | Corrige mutação do working tree em testes |
| [#90119](https://github.com/NousResearch/hermes-agent/pull/90119) | dashboard ignores basic auth on docker | bug/fix | NO534221 | Resolve recusa de bind por falta de auth providers |
| [#76018](https://github.com/NousResearch/hermes-agent/pull/76018) | reasoning_content stripped on replay | bug/fix | 47Hunter47 | Preserva reasoning_content para backends OpenAI-compatíveis |
| [#88875](https://github.com/NousResearch/hermes-agent/pull/88875) | WIP(mcp): dual-era hardening | refactor | andrexibiza | Slice de hardening para compatibilidade MCP 1.x/2.0 |
| [#90241](https://github.com/NousResearch/hermes-agent/pull/90241) | fix(kanban): expose profile display_name in dashboard picker | bug/fix | webtecnica | Renderiza `display_name` no picker do Kanban |
| [#90243](https://github.com/NousResearch/hermes-agent/pull/90243) | fix(codex): strip unsupported cache retention at Codex wire | bug/fix | kshitijk4poor | Remove `prompt_cache_retention` incompatível no Codex |

**Destaque:** A correção de `reasoning_content` em [#76018](https://github.com/NousResearch/hermes-agent/pull/76018) é estratégica para compatibilidade com backends locais (llama.cpp, vLLM, LM Studio), ampliando o suporte a setups on-premise.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários > 2)

| # | Título | Comentários | Tipo | Link |
|---|--------|-------------|------|------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index is stale or degraded | **59** | bug/P3 | Automação de freshness probe falhou; índice 29.8h velho |
| [#84834](https://github.com/NousResearch/hermes-agent/issues/84834) | Webhook Feature Package — graph-gated repair | **18** | refactor/P3 | Meta-issue para repair 5×2×3 em toda superfície webhook |
| [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) | Auxiliary title_generation fails on DeepSeek | **17** | bug/P3 | HTTP 400 "response_format type unavailable" |
| [#83846](https://github.com/NousResearch/hermes-agent/issues/83846) | ZIP fallback deletes desktop app | **11** | bug/P1 | Windows: app deletado e updates reportam "Already up to date" |
| [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) | Desktop fails from .desktop launcher (chrome-sandbox) | **11** | bug/P3 | Linux: falha silenciosa por falta de setuid no chrome-sandbox |
| [#23052](https://github.com/NousResearch/hermes-agent/issues/23052) | Discord adapter per-guild config | **6** | feature/P3 | Configuração por servidor (closed as duplicate) |
| [#66255](https://github.com/NousResearch/hermes-agent/issues/66255) | Gateway DB session recovery immortaliza sessões | **5** | bug/P2 | Sessions não respeitam reset policy após restart |
| [#38193](https://github.com/NousResearch/hermes-agent/issues/38193) | OAuth-backed MCP server deadlock | **5** | bug/P2 | Deadlock permanente após reconnect |

### Análise de Demandas

- **Automação e CI/CD:** O skills-index watchdog ([#66616](https://github.com/NousResearch/hermes-agent/issues/66616)) domina com 59 comentários, sinalizando dependência crítica de pipelines automatizados.
- **Multi-plataforma:** Issue [#84834](https://github.com/NousResearch/hermes-agent/issues/84834) revela complexidade do webhook em ambientes distribuídos.
- **Integração com Provedores:** Falhas em DeepSeek ([#83390](https://github.com/NousResearch/hermes-agent/issues/83390)) e Codex indicam atrito na compatibilidade de `response_format`.

---

## 5. Bugs e Estabilidade

### P1 — Críticos (ação imediata necessária)

| # | Título | Severidade | Link |
|---|--------|------------|------|
| [#89614](https://github.com/NousResearch/hermes-agent/issues/89614) | Hermes kills svchost.exe via taskkill /F /PID → BSOD 0xEF | **CRÍTICO** | Windows 11 24H2: Hermes emite `taskkill` em PID obsoleto de svchost.exe, causando CRITICAL_PROCESS_DIED blue screen repetido |
| [#83846](https://github.com/NousResearch/hermes-agent/issues/83846) | ZIP fallback deletes built desktop app | **CRÍTICO** | App silenciosamente desaparece; updates reportam "Already up to date" |

### P2 — Importantes

| # | Título | Link |
|---|--------|------|
| [#89756](https://github.com/NousResearch/hermes-agent/issues/89756) | SSH + Bots tab spawns isolated serve per profile | Desktop viola connect-on-demand; 12–13 processos por specialist |
| [#90237](https://github.com/NousResearch/hermes-agent/issues/90237) | Desktop breaks Windows Snap e FancyZones | Transparency aplicada incondicionalmente no Win11 22H2+ |
| [#90229](https://github.com/NousResearch/hermes-agent/issues/90229) | File tree stuck on skeleton forever | Windows 11: sidebar não carrega conteúdo após boot |
| [#66255](https://github.com/NousResearch/hermes-agent/issues/66255) | Gateway session immortal across restarts | DB recovery ignora reset policy; idle clock re-armado incorretamente |
| [#38193](https://github.com/NousResearch/hermes-agent/issues/38193) | OAuth MCP server permanently deadlocks | Lock released cross-task após reconnect |
| [#88715](https://github.com/NousResearch/hermes-agent/issues/88715) | Multiplex: profile identity late-bound | Múltiplas identidades derivadas por evento; sem ponto canônico |
| [#90233](https://github.com/NousResearch/hermes-agent/issues/90233) | Stale provider-unreachable error persists | Erro de provider unreachable persiste após resume com modelo diferente |
| [#90238](https://github.com/NousResearch/hermes-agent/issues/90238) | Cron delegate_task ignores child_timeout_seconds | Delegate bloqueia por ~915s ao invés de 420s configurados |
| [#90155](https://github.com/NousResearch/hermes-agent/issues/90155) | cron lifecycle_guard false positive | Rejeita jobs com paths contendo espaços |

### P3 — Moderados

| # | Título | Link |
|---|--------|------|
| [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) | Linux .desktop launcher silent failure | Falha por falta de setuid no chrome-sandbox |
| [#90240](https://github.com/NousResearch/hermes-agent/pull/90240) | hermes update is interactive on Windows | Fix em andamento |
| [#90246](https://github.com/NousResearch/hermes-agent/pull/90246) | Legacy Scheduled Tasks retarget to VBS | Fix para Windows Scheduled Tasks |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento (PRs Abertos)

| # | Título | Tipo | Link |
|---|--------|------|------|
| [#90247](https://github.com/NousResearch/hermes-agent/pull/90247) | Implant icm-architect workspace | **estratégico** | Workspace navegável por modelo com pipeline de release estruturado |
| [#90006](https://github.com/NousResearch/hermes-agent/pull/90006) | Route remote bot actions by connection | feature | Bot Mode connection-bound vs gateway-dependent |
| [#89915](https://github.com/NousResearch/hermes-agent/pull/89915) | True separation by gateway in sidebar | feature | Multi-machine UI para múltiplos gateways |
| [#85852](https://github.com/NousResearch/hermes-agent/pull/85852) | Managed llama.cpp runtime | **high-value** | Execução local de modelos com zero configuração |
| [#80851](https://github.com/NousResearch/hermes-agent/pull/80851) | Blooio iMessage gateway platform | platform | Integração iMessage via REST + OAuth |
| [#89995](https://github.com/NousResearch/hermes-agent/issues/89995) | Expose Bot Mode group chat in web dashboard | feature | Grupo chats atualmente desktop-only |
| [#88061](https://github.com/NousResearch/hermes-agent/issues/88061) | Design: per-task multi-agent workflow | design/roadmap | Workflow estilo IM com trace + execução confiável |
| [#57374](https://github.com/NousResearch/hermes-agent/pull/57374) | Hedera blockchain skill | skill | Read-only operations para Hedera |
| [#90035](https://github.com/NousResearch/hermes-agent/issues/90035) | Long-term memory periodic maintenance | feature | Manutenção ausente acumula entradas obsoletas |
| [#49689](https://github.com/NousResearch/hermes-agent/issues/49689) | Desktop composer screenshot + annotation | feature | Codex-style annotate and attach |
| [#90242](https://github.com/NousResearch/hermes-agent/pull/90242) | Terminal compression exhaustion handoff | feature | Fresh-session handoff ao invés de retry |

### Sinais de Roadmap

- **On-premise/local models:** O PR [#85852](https://github.com/NousResearch/hermes-agent/pull/85852) sinaliza priorização de execução local com llama.cpp, reduzindo dependência de APIs externas.
- **Multi-gateway/multi-machine:** A separação por gateway ([#89915](https://github.com/NousResearch/hermes-agent/pull/89915), [#90006](https://github.com/NousResearch/hermes-agent/pull/90006)) indica tendência para arquiteturas distribuídas.
- **Manutenção proativa:** A ausência de periodic maintenance para memória de longo prazo ([#90035](https://github.com/NousResearch/hermes-agent/issues/90035)) é um gap reconhecido.

---

## 7. Resumo de Feedback dos Usuários

### Dores Críticas Reportadas

| Dor | Descrição | Evidência |
|-----|-----------|-----------|
| **Instabilidade Windows** | Hermes causa BSOD e destrói instalação local | [#89614](https://github.com/NousResearch/hermes-agent/issues/89614), [#83846](https://github.com/NousResearch/hermes-agent/issues/83846) |
| **App Desktop desaparece** | ZIP fallback deleta o app e updates não funcionam | [#83846](https://github.com/NousResearch/hermes-agent/issues/83846) |
| **Falha silenciosa Linux** | Desktop não abre sem configuração manual do chrome-sandbox | [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) |
| **Sessions imortais** | Gateway restart não reseta sessões ociosas | [#66255](https://github.com/NousResearch/hermes-agent/issues/66255) |
| **MCP OAuth deadlock** | Servidor OAuth fica permanentemente inutilizável após reconnect | [#38193](https://github.com/NousResearch/hermes-agent/issues/38193) |
| **Docker dashboard auth** | Dashboard ignora basic auth e recusa bind | [#90119](https://github.com/NousResearch/hermes-agent/issues/90119) |
| **Memória acumula stale entries** | Long-term memory cresce indefinidamente, desperdiçando tokens | [#90035](https://github.com/NousResearch/hermes-agent/issues/90035) |

### Cenários de Uso Identificados

1. **Windows power user:** Instalação em drive não-sistemático com venv dedicada — vulnerável a bugs de install/update.
2. **Linux desktop launcher:** Usuários que iniciam via `.desktop` sem perceber necessidade de configuração de sandbox.
3. **Multi-gateway enterprise:** Demandas por isolamento de conexões, profiles e sessões entre gateways distintos.
4. **Local model enthusiast:** Usuários querendo execução 100% local com zero configuração.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Estagnadas

| # | Título | Criado | Comentários | Prioridade | Link |
|---|--------|--------|-------------|------------|------|
| [#38193](https://github.com/NousResearch/hermes-agent/issues/38193) | OAuth MCP server permanently deadlocks | 2026-06-03 | 5 | P2 | deadlock após reconnect |
| [#66255](https://github.com/NousResearch/hermes-agent/issues/66255) | Gateway session immortal across restarts | 2026-07-17 | 5 | P2 | session immortality |
| [#88715](https://github.com/NousResearch/hermes-agent/issues/88715) | Multiplex profile identity late-bound | 2026-08-17 | 4 | P2 | identity management |
| [#88758](https://github.com/NousResearch/hermes-agent/issues/88758

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-20

---

## 1. Panorama do Dia

O ecossistema PicoClaw demonstra **atividade moderada e saudável** no período analisado. O projeto registrou 6 PRs atualizados nas últimas 24h, com 3 merges realizados, indicando um fluxo de desenvolvimento ativo despite the absence of new releases. A issue de bug reportada em março (#1305) foi finalmente fechada, sinalizando resolução de pendências antigas. O volume de PRs abertos (3) sugere pipeline saudável de features em desenvolvimento, enquanto as 3 PRs fechadas demonstram capacidade da equipe de revisar e integrar contribuições de forma consistente.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões neste período. Para追踪 atualizações anteriores, recomenda-se consultar a [página de releases](https://github.com/sipeed/picoclaw/releases) do repositório.

---

## 3. Progresso do Projeto

Três PRs foram fechados/merged hoje, representando avanços significativos:

| PR | Título | Impacto |
|---|---|---|
| [#3341](https://github.com/sipeed/picoclaw/pull/3341) | feat(telegram): add interactive command UX and formatted ephemeral fallback | **Alto** — Melhora significativa na experiência do usuário Telegram com comandos mais intuitivos |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): add configurable default fallback chain | **Alto** — Funcionalidade aguardada para resiliência de modelos no frontend web |
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | feat: add anthropic-messages protocol for native Anthropic API format | **Médio** — Suporte a clientes Anthropic-compatíveis via `/v1/messages` |

**Destaque:** O PR #1158 resolving issue #269 expande a compatibilidade com serviços proxy que suportam apenas a API nativa Anthropic, eliminando uma limitação de longa data.

---

## 4. Temas Quentes da Comunidade

### Issue em destaque

**[#1305](https://github.com/sipeed/picoclaw/issues/1305)** — *[CLOSED]* `new banner print to STDOUT, break completion flow`
- **Autor:** wyxloading | **Comentários:** 4
- **Resumo:** A impressão de banner para STDOUT interfere no fluxo de completion (shell completion), introduzida pelo PR #1008.
- **Status:** ✅ Fechada após 5 meses — comunidade demonstrou engajamento através de 4 comentários técnicos.

### PRs com diskusião potencial

| PR | Título | Status | Observação |
|---|---|---|---|
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | routed-agent context management not respecting history | OPEN, stale | Bug crítico: roteamento de agentes não persiste histórico em Discord |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Support topics in private bot chats | OPEN, stale | Melhora Telegram: suporte a topics em chats privados com bots forum |

**Análise:** As PRs marcadas como "stale" requerem atenção da mantenedoria para revisão ou feedback. A ausência de comentários 정의 indicates possible necessidade de triage.

---

## 5. Bugs e Estabilidade

### Bug Fechado (Resolvido)

**[#1305](https://github.com/sipeed/picoclaw/issues/1305)** — Bug de compatibilidade com completion de shell
- **Severidade:** Média
- **Ambiente:** Go 1.25.7, PicoClaw versão 26f623e
- **Impacto:** Afeta geração de scripts de completion para zsh/bash
- **Resolução:** Fechada em 2026-08-19 após colaboração da comunidade

### Bugs em Aberto (Requiring Attention)

| ID | Título | Prioridade |
|---|---|---|
| [#3328](https://github.com/sipeed/picoclaw/issues/3328) | webhook_host/webhook_port não utilizados (referenciado por #3329) | Média |
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | Routed-agent ignora histórico, summarização e compactação | **Alta** |

**Alerta:** O bug em #3316 afeta diretamente a funcionalidade de roteamento de agentes no Discord, impedindo persistência de memória entre sessões — regressão de comportamento esperado.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Recém-Mergiadas

1. **Comandos interativos Telegram (#3341)** — Substitui UX estilo CLI por interação mais amigável, com fallback formatado para conteúdo efêmero.

2. **Fallback chain configurável (#3200)** — Usuários podem definir cadeia de modelos default no web UI com persistência via API backend.

3. **Protocolo Anthropic Messages (#1158)** — Suporte nativo ao endpoint `/v1/messages` para clientes compatíveis com API Anthropic.

### Features em Desenvolvimento

| PR | Feature | Relevância |
|---|---|---|
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) | Warn on unused webhook_host/webhook_port | Limpeza de código técnico |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Topics em chats privados Telegram | Suporte a bots forum em DMs |

**Sinais de roadmap:** O foco recente em integrações de mensagens (Telegram, LINE webhook) e model fallback chain indica prioridade em resiliência multi-plataforma e tolerância a falhas de LLM.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Problema | Fonte | Severidade |
|---|---|---|
| **Banner quebra completion flow** | Issue #1305 (wyxloading) | Média — Afeta DX de desenvolvedores |
| **Agentes roteados perdem contexto** | PR #3316 (j-v) | **Alta** — Impacta uso em produção Discord |
| **Topics Telegram não funcionam em DMs** | PR #3315 (genuss) | Média — Inconsistência de comportamento |

### Cenários de Uso Emergentes

- **Roteamento de agentes por canal Discord** — Usuários querem isolamento de contexto por canal, atualmente quebrado
- **Fallback de modelos resiliente** — Demanda por UI para configurar cadeias de fallback, agora atendida pelo PR #3200
- **Shells completion** — Usuários avançados dependem de scripts de completion corretos

---

## 8. Backlog que Merece Atenção

### Issues/PRs sem resposta há longo prazo

| ID | Tipo | Título | Idade | Prioridade |
|---|---|---|---|---|
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | PR | routed-agent context management (stale) | ~17 dias | **Alta** |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | PR | Support topics in private bot chats (stale) | ~17 dias | Média |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | PR | default fallback chain (stale, agora closed) | ~50 dias | Alta |

### Ação Recomendada

**Prioridade 1:** Revisar e responder ao PR #3316 — bug crítico de contexto que afeta uso em produção.

**Prioridade 2:** Resolver stale status de #3315 — feature aguarda há 17 dias sem feedback de mantenedores.

**Prioridade 3:** Investigar #3328/#3329 — variáveis configuradas mas não utilizadas indicam dívida técnica potencial.

---

## Métricas Consolidada (24h)

| Métrica | Valor |
|---|---|
| Issues abertas/ativas | 0 |
| Issues fechadas | 1 |
| PRs abertos | 3 |
| PRs merged/fechados | 3 |
| Novas releases | 0 |
| Engajamento (comentários) | 4 (issue #1305) |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-08-20. Para dados atualizados, consulte [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-20

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **alta atividade** em 20 de agosto de 2026, com 11 issues e 38 PRs atualizados nas últimas 24h. O destaque do dia é a **promoção iminente da versão 1.3.0-stable** (PR #7754), sinalizando maturidade do release candidate 1.3.0-rc.2. A equipe está ativamente desenvolvendo funcionalidades para a versão 1.4.0, incluindo sandbox persistente por usuário e um sistema de design para WebUI. A taxa de fechamento de issues (4/11) e PRs (15/38) indica um fluxo de trabalho saudável, com forte foco em estabilização e preparação para release.

---

## 2. Lançamentos

### 🚀 Lançamento Iminente

| Item | Detalhes |
|------|----------|
| **Versão** | `1.3.0` (promoção de `1.3.0-rc.2`) |
| **PR** | [#7754](https://github.com/nearai/ironclaw/pull/7754) |
| **Status** | Aberto — em promoção |
| **Risk** | `medium` |
| **Escopo** | CI, Docs, Dependencies |

**Mudanças:**
- Atualização de versão em `crates/app/ironclaw_cli/Cargo.toml` e `Cargo.lock`
- Três camadas alteradas, **sem mudança de comportamento em produção**
- Branch: `release/2026-08-17` (hash `8483596bf`)

> ⚠️ **Nota:** Nenhuma release oficial publicada no GitHub até o momento da extração. Monitorar para confirmação de tag.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| PR | Título | Impacto |
|----|--------|---------|
| [#7686](https://github.com/nearai/ironclaw/pull/7686) | `refactor(runtime): centralize capability outcome processing` | **Alto** — Normalização de resposta de capacidades (PR 1/3 do stack #7627) |
| [#7741](https://github.com/nearai/ironclaw/pull/7741) | `feat(sandbox): per-thread persistent container with Docker Exec` | **Alto** — Redução de ~1-2.5s para ~40ms por comando; container reutilizável por `(tenant, user, thread)` |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | `feat(coding): omp core-tool contract + engines + benchmark arm` | **Alto** — Consolidação de 6 ferramentas de codificação (`read`, `write`, `edit`, `glob`, `grep`, `bash`) |
| [#7039](https://github.com/nearai/ironclaw/pull/7039) | `chore(webui): integrate Storybook + design-system catalog` | Suplementar — Substituído por #7750 |
| [#7043](https://github.com/nearai/ironclaw/pull/7043) | `docs(design-system): DESIGN.md governance + Storybook guidelines` | Suplementar — Documentação de governança |

### PRs Abertos de Destaque (Tamanho XL)

| PR | Título | Objetivo |
|----|--------|---------|
| [#7751](https://github.com/nearai/ironclaw/pull/7751) | `feat(sandbox): persistent per-user container with Docker Exec` | **Step 1** do epic #7732 — sandbox persistente por `(tenant, user)`, elimina container-per-command |
| [#7692](https://github.com/nearai/ironclaw/pull/7692) | `fix(extensions): normalize provider failures and auth diagnostics` | PR 2/3 do stack #7627 — falhas de provedor e auth tornam-se tipadas e visíveis ao modelo |
| [#7711](https://github.com/nearai/ironclaw/pull/7711) | `feat(wasm): typed tool response, guest migration, and dispatch-error cleanup` | PR final do stack #7627 — resposta tipada + migração de guest |
| [#7752](https://github.com/nearai/ironclaw/pull/7752) | `feat(turns): subagent activation provenance, activate() primitive` | Foundation para subagentes em background (sem mudança de comportamento ainda) |
| [#7650](https://github.com/nearai/ironclaw/pull/7650) | `feat(automations): derive run outcomes from runtime evidence` | Julgamento determinístico de runs ao invés de answer-only semantic |
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | `fix(reborn): make durable storage profile-agnostic` | Root profiles em `IRONCLAW_REBORN_HOME` com namespaces isolados |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| # | Título | Comentários | Tipo | Análise |
|---|--------|-------------|------|---------|
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | Epic: Persistent per-user sandbox with iron-proxy | **7** | Epic / v1.4.0 | Discussão ativa sobre arquitetura de sandbox persistente; o issue detalha limitações do Docker local (criação/remoção por comando) vs. o objetivo de computer persistente |
| [#7603](https://github.com/nearai/ironclaw/issues/7603) | [Tier 3] Batch BeforeModel checkpoints per-N iterations | **2** | Enhancement | Otimização estimada de −14 rows/turn ao batchar checkpoints |
| [#6993](https://github.com/nearai/ironclaw/issues/6993) | Backend wiring for OOBE automation-tasks prototype | **1** | Epic (Phase 1) | Wiring de backend para onboarding prototype — fechado, integrado em #6994 |

### PRs com Discussão

| PR | Título | Status | Observação |
|----|--------|--------|------------|
| [#6994](https://github.com/nearai/ironclaw/pull/6994) | OOBE automation-tasks prototype | Aberto | Proposal + implementação foundational para onboarding v1 |
| [#7257](https://github.com/nearai/ironclaw/pull/7257) | APDD kit evaluation + scoped integration | Aberto | Discussão de governança de produto para agentes |

### Demanda Principal Identificada
O tema mais discutido é a **persistência do sandbox por usuário** (#7732), indicando priorização clara para v1.4.0. A arquitetura atual cria containers Docker por comando, o que é insuficiente para o modelo de computer persistente desejado.

---

## 5. Bugs e Estabilidade

### Bugs Reportados Hoje (4 issues)

| # | Severidade | Título | Origem | Impacto |
|---|------------|--------|--------|---------|
| [#7748](https://github.com/nearai/ironclaw/issues/7748) | **Bug (P?)** | IronClaw got confused and stopped working | Slack (user feedback) | Alto — usuário reporta falha completa |
| [#7745](https://github.com/nearai/ironclaw/issues/7745) | **P2** | Copilot MCP extension install fails with auth_required, duplicate catalog entries | QA Testing | Duplicate entries no catálogo + auth issues |
| [#7744](https://github.com/nearai/ironclaw/issues/7744) | **P3** | Cron job UI missing edit and test buttons | QA Testing | Usabilidade — ações essenciais ausentes |
| [#7736](https://github.com/nearai/ironclaw/issues/7736) | Taxonomy | Daily ironclaw failure taxonomy — 2026-08-19 | Benchmarks (Pinchbench) | Análise de falhas — dominance de limitação de modelo vs. harness bug |

### Análise de Estabilidade
- **Bug #7748** requer atenção imediata — relatório de usuário real de falha completa
- **Bug #7745** afeta fluxo de instalação de extensões com problemas de autenticação e dados duplicados
- Taxonomy #7736 indica que falhas em `pinchbench` são predominantemente limitações de modelo (Qwen3.8-27B), não bugs de harness

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas

| # | Título | Escopo | Versão | Sinais de Prioridade |
|---|--------|--------|--------|---------------------|
| [#7742](https://github.com/nearai/ironclaw/issues/7742) | `feat(automations): bound creation preflight and surface missing prerequisites` | Agent, Tool/Builtin | v1.3.0 (sugestão P1) | Automation authoring precisa de contrato de execução honesto antes de persistir |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) | Epic: Storybook + AI-first Design System | WebUI, UX | Epic | Proposal completa em PR #7257; fase 1 em #7750 |
| [#6994](https://github.com/nearai/ironclaw/pull/6994) | OOBE automation-tasks prototype | WebUI | v2 (Onboarding) | Carousel, inline cards, agent-mode pill |

### Sinais de Roadmap para v1.4.0
1. **Sandbox persistente** (#7732, #7751) —computer por usuário
2. **Sistema de Design WebUI** (#7038) — Storybook + theming + design system
3. **Automations maduras** (#7650, #7743, #7742) — bound creation + run outcomes
4. **Subagentes foundation** (#7752) — activation provenance + primitive `activate()`

---

## 7. Resumo de Feedback dos Usuários

### Feedback Direto Reportado

| Fonte | Feedback | Issue |
|--------|----------|-------|
| **bianca.guimaraes-chadwick** (Slack) | *"IronClaw got confused and stopped working"* | [#7748](https://github.com/nearai/ironclaw/issues/7748) |

### Dores Identificadas nos Dados

| Dor | Evidência | Prioridade |
|-----|-----------|------------|
| **Confusão do agente** | Usuário reportou paralisia completa | 🔴 Alta |
| **Instalação de extensões quebrada** | Auth errors + entries duplicadas no catálogo | 🟡 Média |
| **UI de cron jobs incompleta** | Ausência de botões de edit/test | 🟢 Baixa |
| **Mensagem pública de Slack para usuários não-linkados** | Privacidade + UX (já closed #7681) | 🟡 Média |

### Cenários de Uso Emergentes
- **Automations** (escalonadas, bounded) — nova fronteira de uso
- **Sandbox persistente** —computer de longo prazo
- **Onboarding via OOBE** — primeiro-run experience

---

## 8. Backlog que Merece Atenção

### Issues Abertas Sem Comentários (Potencial Negligência)

| # | Título | Criado | Atualizado | Urgência |
|---|--------|--------|------------|----------|
| [#7038](https://github.com/nearai/ironclaw/issues/7038) | Epic: Storybook + AI-first Design System | 2026-08-03 | 2026-08-19 | 🔴 Epic ativo — sem comments |
| [#7742](https://github.com/nearai/ironclaw/issues/7742) | Bound creation preflight | 2026-08-19 | 2026-08-19 | 🟡 Sugerido P1 |
| [#7736](https://github.com/nearai/ironclaw/issues/7736) | Daily failure taxonomy | 2026-08-19 | 2026-08-19 | 🟢 Análise operacional |

### Items com Discussion Ativa mas Sem Movimento

| # | Título | Comentários | Status | Nota |
|---|--------|-------------|--------|------|
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | Epic: Persistent per-user sandbox | 7 | Aberto | PR #7751 em andamento — Epic pode ser fechado após merge |

### PRs Abertos com Alto Impacto (XL) sem Merge

| PR | Título | Criado | Risk | Nota |
|----|--------|--------|------|------|
| [#7751](https://github.com/nearai/ironclaw/pull/7751) | Persistent per-user container | 2026-08-19 | low | Step 1 do epic — alta chance de merge soon |
| [#7711](https://github.com/nearai/ironclaw/pull/7711) | Typed tool response, guest migration | 2026-08-17 | low | Final do stack #7627 |
| [#7752](https://github.com/nearai/ironclaw/pull/7752) | Subagent activation provenance | 2026-08-19 | low | Foundation — sem produção ainda |
| [#7650](https://github.com/nearai/ironclaw/pull/7650) | Derive run outcomes from runtime evidence | 2026-08-14 | low | Automations maturity |

---

## Métricas Resumidas do Dia

| Categoria | Valor |
|-----------|-------|
| **Issues abertas/ativas** | 7 |
| **Issues fechadas** | 4 |
| **PRs abertos** | 23 |
| **PRs merged/fechados** | 15 |
| **Releases** | 0 (1 iminente: 1.3.0) |
| **Bugs reportados** | 3 (P2: 1, P3: 1, Bug: 1) |
| **Features epics em curso** | 4+ (sandbox, design system, automations, subagents) |
| **Commits de contributors core** | 8+ PRs com `contributor: core` |

---

**Saúde Geral:** ✅ Projeto ativo com forte pipeline de desenvolvimento para v1.4.0. Atenção imediata recomendada para bug #7748 (usuário real reportou falha) e finalização da promoção 1.3.0.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
**Data:** 2026-08-20
**Repositório:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)
**Analista:** Agente de Análise Open Source

---

## 1. Panorama do Dia

O projeto CoPaw mantém **atividade intensa**: 50 issues e 49 PRs atualizados nas últimas 24h, com 4 issues abertas/ativas e 32 PRs em aberto. Não houve lançamentos hoje. A comunidade demonstra engajamento significativo em questões de estabilidade (freeze prolongado, conflitos com antivírus) e em funcionalidades de colaboração multiusuário (Hub self-hosted). A taxa de fechamento de issues permanece alta (46/50), indicando maturidade no fluxo de triagem. O foco técnico do dia está em correções de estabilidade de streaming e melhorias na experiência do console.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24h.**

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (17 total)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#7151](https://github.com/agentscope-ai/QwenPaw/pull/7151) | `feat(console): add folder creation to directory browser` | Melhora UX do navegador de arquivos com criação inline de pastas |
| [#7150](https://github.com/agentscope-ai/QwenPaw/pull/7150) | `fix: detect and recover from stalled LLM streams` | **Crítico** — corrige freeze indefinido ao detectar streams travados ([#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102)) |
| [#7146](https://github.com/agentscope-ai/QwenPaw/pull/7146) | `fix(view_image): freeze remote images before persisting` | Protege contra URLs remotas quebradas em conversas subsequentes |
| [#7137](https://github.com/agentscope-ai/QwenPaw/pull/7137) | `fix(console): polish model selector styles` | Aprimoramento visual do seletor de modelos |
| [#7103](https://github.com/agentscope-ai/QwenPaw/pull/7103) | `test(integration): expand coverage for routing, channels, tools, MCP` | Aumento significativo da cobertura de testes de integração |
| [#6986](https://github.com/agentscope-ai/QwenPaw/pull/6986) | `fix(sandbox): fix antivirus software blocking issues` | **Alto impacto** — resolve falsos positivos de antivírus bloqueando o app ([#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)) |
| [#6938](https://github.com/agentscope-ai/QwenPaw/pull/6938) | `fix(#6826): display actual assistant reply completion time` | Correção de exibição de tempo de resposta no histórico |

### PRs Abertos em Destaque

| PR | Descrição | Status |
|----|-----------|--------|
| [#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) | `feat(hub): self-hosted multi-user Hub with local/Docker runtimes` | 🔴 **Alta prioridade** — controle multiusuário isolado |
| [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) | `feat(providers): add Volcengine Agent Plan & MiMo V2.5` | Under Review — expansão de provedores |
| [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) | `feat: session-scoped multi project directories` | Suporte a múltiplos diretórios por sessão |
| [#7037](https://github.com/agentscope-ai/QwenPaw/pull/7037) | `feat(computer-use): observe related window surfaces` | Melhora automação de desktop |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

1. **[#2884](https://github.com/agentscope-ai/QwenPaw/issues/2884)** — **27 comentários** | ⚠️ Preocupação crítica de segurança
   - Usuário relata perda massiva de arquivos pessoais após instalação do CoPaw
   - **Demanda implícita:** Garantias de isolamento e segurança de sandbox

2. **[#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301)** — **10 comentários** | 🔧 Feature requests consolidados
   - Botão de atualização one-click
   - Botões de aprovação (agree/disagree)
   - Auto-switch de modelos com fallbacks
   - Auto-reflexão e auto-evolução
   - Sincronização cross-device (browser ↔ mobile)
   - Suporte a provedores adicionais (Zhipu, Meituan)

3. **[#2035](https://github.com/agentscope-ai/QwenPaw/issues/2035)** — **10 comentários** | 🔧 Multi-agente
   -绑定 individual bots a cada agente
   - Colaboração multi-agente em tarefas conjuntas

4. **[#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590)** — **7 comentários** | ✨ Enhancement merged
   - File operation rollback — recuperação de arquivos deletados acidentalmente

---

## 5. Bugs e Estabilidade

### Por Severidade

| Severidade | Qtd | Exemplos |
|------------|-----|----------|
| 🔴 **Crítico** | 2 | Freeze >10min ([#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102)), Conflito com antivírus ([#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)) |
| 🟠 **Alto** | 4 | Perda de tarefa ao trocar canal ([#2723](https://github.com/agentscope-ai/QwenPaw/issues/2723)), Auto-interrupção em tarefas longas ([#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377)), Upgrade quebra startup ([#3005](https://github.com/agentscope-ai/QwenPaw/issues/3005)), TypeError async for ([#7034](https://github.com/agentscope-ai/QwenPaw/issues/7034)) |
| 🟡 **Médio** | 5 | CLI port management ([#2385](https://github.com/agentscope-ai/QwenPaw/issues/2385)), Auto-compressão não dispara memória ([#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624)), 404 em config de modelo ([#7076](https://github.com/agentscope-ai/QwenPaw/issues/7076)) |

### Correções Aplicadas Hoje
- ✅ [#7150](https://github.com/agentscope-ai/QwenPaw/pull/7150) — Stream watchdog para freeze
- ✅ [#6986](https://github.com/agentscope-ai/QwenPaw/pull/6986) — Isolar processo do antivírus

---

## 6. Pedidos de Features e Sinais de Roadmap

### Tendências Emergentes

| Categoria | Issue | Descrição |
|-----------|-------|-----------|
| 🏢 **Enterprise** | [#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) | Hub self-hosted multiusuário (Docker/local) |
| 🔄 **Resiliência** | [#2089](https://github.com/agentscope-ai/QwenPaw/issues/2089) | Fallback automático para modelos quando API falha |
| 🖥️ **Desktop** | [#7037](https://github.com/agentscope-ai/QwenPaw/pull/7037) | Observação de janelas relacionadas para computer-use |
| 📱 **Mobile** | [#2856](https://github.com/agentscope-ai/QwenPaw/issues/2856) | UI mobile responsiva; modelos locais maiores (14B-32B) |
| 🔌 **Providers** | [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) | Volcengine Agent Plan + MiMo V2.5 |
| 💾 **File System** | [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) | Rollback de operações de arquivo (merged) |
| 📧 **Email** | [#6800](https://github.com/agentscope-ai/QwenPaw/pull/6800) | Assistente de email com monitoramento em tempo real |

### Sinais Fortes de Roadmap
1. **Multi-usuário/Hospedagem própria** — forte demanda corporativa
2. **Fallback de modelos** — pedido recorrente (10+ reações combinadas)
3. **Computer-use expandido** — janela surface tracking em desenvolvimento

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Dor | Frequência | Impacto |
|-----|------------|---------|
| Freeze/travamento em streaming | 🔴 Alta | Impossibilita uso produtivo |
| Conflito com antivírus | 🟠 Média-Alta | Exclusão falsa destrói sessão |
| Tarefas longas interrompem | 🟠 Média | Perde contexto e progresso |
| UI mobile inadequada | 🟡 Média | Limita uso em mobilidade |
| Configuração de modelos complexa | 🟡 Média | Curva de aprendizado alta |

### Cenários de Uso Reportados

1. **Pesquisa profunda** — multi-agente para análise de arquivos em lote ([#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377))
2. **Desktop automation** — browser automation e computer-use ([#3261](https://github.com/agentscope-ai/QwenPaw/issues/3261))
3. **Deploy empresarial** — gateway privado de LLM interno ([#2296](https://github.com/agentscope-ai/QwenPaw/issues/2296))
4. **Modelos locais** — VRAM constraints em GPUs de 10GB ([#2776](https://github.com/agentscope-ai/QwenPaw/issues/2776))

### Satisfação
- Modelo local `copaw-flash-4b-q4_k_m` relatado como "muito流畅" (fluido) em RTX 3080 10GB
- Arquitetura de providers considerada extensível por contribuidores

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Idade | Status | Prioridade |
|-------|-------|--------|------------|
| [#3260](https://github.com/agentscope-ai/QwenPaw/issues/3260) — Suporte a Harness Agents / DeerFlow | ~4 meses | Closed | 🟡 Desejável |
| [#3074](https://github.com/agentscope-ai/QwenPaw/issues/3074) — Deep execution com longGraph | ~4 meses | Closed | 🟡 Desejável |
| [#2663](https://github.com/agentscope-ai/QwenPaw/issues/2663) — Reset de UI após restart | ~4 meses | Closed | 🟠 Alto |
| [#1881](https://github.com/agentscope-ai/QwenPaw/issues/1881) — AI responde mas usuário não vê | ~5 meses | Closed | 🟠 Alto |

### Recomendações de Triagem

1. **[#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102)** — Criar teste de regressão para stream watchdog
2. **[#2845](https://github.com/agentscope-ai/QwenPaw/issues/2845)** — Melhora UX de approve requests (fechado sem ação)
3. **[#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624)** — Documentar se auto-compressão deve ou não disparar `summarize`

---

## Métricas Resumo (24h)

| Métrica | Valor |
|---------|-------|
| Issues fechadas | 46/50 (92%) |
| PRs fechados/merged | 17/49 (35%) |
| PRs abertos | 32 |
| Releases | 0 |
| Issues críticas abertas | 1 ([#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) — resolvida) |
| PRs de alta prioridade | 2 ([#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112), [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515)) |

---

**Generated by:** Open Source Project Analyst Agent
**Fontes:** GitHub API — agentscope-ai/CoPaw (CoPaw/QwenPaw)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto ZeroClaw — 2026-08-20

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **atividade intensa** nas últimas 24 horas, com 50 issues e 50 PRs atualizados. A taxa de merge permanece baixa (2 PRs closed), indicando que a equipe mantém rigoroso controle de qualidade nos fechamentos. Não houve lançamentos hoje, sinalizando foco em estabilização e preparação de próxima release. Observa-se atenção significativa a **segurança, arquitetura WASM e problemas multi-plataforma** (Windows em destaque). A comunidade demonstra engajamento ativo em RFCs e feature proposals, com 30+ issues com mais de 1 comentário.

---

## 2. Lançamentos

**Nenhum release nas últimas 24 horas.**

O projeto encontra-se em período pré-release, com trabalho ativo em follow-ups adiados da v0.8.4 (cf. [#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381)).

---

## 3. Progresso do Projeto

### PRs Recentemente Fechados/Merged

| PR | Título | Status | Observações |
|----|--------|--------|-------------|
| [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | SOPs não disponíveis no web dashboard | **CLOSED** | Corrigido — agente não detectava SOPs em `/zeroclaw-data/.zeroclaw/shared/sops` |
| [#10067](https://github.com/zeroclaw-labs/zeroclaw/issues/10067) | Tool-result truncation (50k chars) | **CLOSED** | Re-escopado; bug original de 1MB não se confirmou |
| [#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) | Webhook endpoint agent mode | **CLOSED** | 1 👍 (única reação registrada hoje) |
| [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) | Session ownership model | **CLOSED** | Bloqueado → fechado após discussão |

### PRs em Destaque (Revisão Ativa)

| PR | Título | Size | Status |
|----|--------|------|--------|
| [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) | Secure transport e browser enrollment frontdoor (ZeroRelay) | — | **OPEN** (substitui #9080) |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | Cron job timeout que libera lock | **XL** | needs-author-action |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | Agent turns живут após viewer disconnect | **XL** | needs-author-action |
| [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) + [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | Classificação de respostas limitadas (OpenAI + Anthropic) | **XL** | #9999 blocked (stacked on #9447) |
| [#10122](https://github.com/zeroclaw-labs/zeroclaw/pull/10122) | Para de compilar release tools from source | — | **OPEN** (performance CI) |
| [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) | Export de agente para bundle portátil | **XL** | needs-author-action |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários)

| # | Título | Comentários | Tema Central |
|---|--------|-------------|--------------|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures no Windows | 18 | **Testes multi-plataforma, CI** — comandos Unix-only, path semantics, console encoding |
| [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | Rust anti-slop policy debt | 15 | **Code quality** — 307 candidatos em 1.078 arquivos Rust |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | WhatsApp empty allowed_groups como permit-none | 13 | **Segurança de canal** — default permissivo expõe grupos |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) | Melhorar cached Rust builds | 6 | **Performance CI** — 15-20min para changes pequenas |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | AI-assisted PR pre-review | 5 | **Workflow developer** — automação de review com CI existente |

### Análise de Demandas

- **Multi-plataforma Windows**: Testes quebrando em Windows 11 (Simplified Chinese, code page 936) é problema recorrente com 74 failures — impacto direto na confiabilidade.
- **Dívida técnica Rust**: Cleanup massivo de patterns anti-slop (307 candidatos) sinaliza preparação para policy enforcement mais rígido.
- **Segurança em canais**: RFC sobre WhatsApp `allowed_groups` indica maturação de modelo de permissions.

---

## 5. Bugs e Estabilidade

### Por Severidade

| Severidade | Count | Issues Chave |
|------------|-------|--------------|
| **P0 / S1** | 2 | [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) — SOP engine promove passos antes de rejeitar output schema (workflow bloqueado) |
| **P1 / S1-S2** | 6+ | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — 74 test failures Windows; [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) — WhatsApp security; [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) — MCP RSS growth; [#9976](https://github.com/zeroclaw-labs/zeroclaw/issues/9976) — Anthropic credentials log fragments (S0); [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) — Windows installer TaskDialogIndirect |
| **P2 / S2** | 5+ | [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) — CI cache; [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) — session persistence; [#10045](https://github.com/zeroclaw-labs/zeroclaw/issues/10045) — image markers path retention |

### Bugs Críticos em Foco

1. **RSS unbounded growth** ([#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)) — MCP/tool-schema cloning em loop; separado de OOM WSL2 (#5542)
2. **Anthropic credential leaking** ([#9976](https://github.com/zeroclaw-labs/zeroclaw/issues/9976)) — Logging de fragmentos de API key (S0)
3. **Cron job lock retention** ([#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)) — Hung run retém SQLite lock indefinidamente

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (Issues Abertas)

| # | Título | Prioridade | Sinal de Roadmap |
|---|--------|------------|------------------|
| [#10141](https://github.com/zeroclaw-labs/zeroclaw/issues/10141) | Sessions usáveis — copy, navegação | — | UX/Productividade |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | WASM plugin architecture (RFC) | P2 | **Arquitetura** — hook/backend/capability layers |
| [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) | Web bundle/daemon compatibility (RFC) | P2 | **DevEx** — embedded vs filesystem mode |
| [#10059](https://github.com/zeroclaw-labs/zeroclaw/issues/10059) | Option-Backspace word deletion (ZeroCode) | P3 | **UX macOS** |
| [#10086](https://github.com/zeroclaw-labs/zeroclaw/issues/10086) | ZeroCode Logs text selectable | P2 | **UX** |

### RFCs em Progresso

- **WASM Architecture** ([#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)) — Expansão do modelo de plugins
- **ZeroRelay mTLS** ([#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142)) — Mandatory mutual TLS plane
- **AI PR Review** ([#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330)) — Integração CI → LLM pre-review

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Tema | Evidência | Impacto |
|------|-----------|---------|
| **Sessões pouco práticas** | [#10141](https://github.com/zeroclaw-labs/zeroclaw/issues/10141) — "frustrating to get into previous session"; copy snippet limitado a um botão | Produtividade diária |
| **Windows quebrado** | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — 74 failures; [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) — installer não inicia | Adoção Windows |
| **WhatsApp overexposto** | [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) — empty allowed_groups admite todos os grupos | Segurança |
| **CI lento** | [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) — 15-20min para small changes | Developer experience |
| **Logs não descobertos** | [#8650](https://github.com/zeroclaw-labs/zeroclaw/issues/8650) — path não visível para debug | DX / Suporte |

### Satisfação Observada

- 1 👍 em [#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) (webhook agent mode) — feature aguardada

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Stale

| # | Título | Criado | Atualizado | Motivo de Atenção |
|---|--------|--------|------------|-------------------|
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) | Session-persistence contract ownership | 2026-07-31 | 2026-08-19 | 4 workstreams tocando mesmo contract; sem owner |
| [#9318](https://github.com/zeroclaw-labs/zeroclaw/issues/9318) | PostgreSQL service-container em CI | 2026-07-23 | 2026-08-19 | **Risk HIGH** — feature flag sem teste real |
| [#10087](https://github.com/zeroclaw-labs/zeroclaw/issues/10087) | memory-postgres tests em CI | 2026-08-18 | 2026-08-19 | Follow-up de CI robusto |
| [#9080](https://github.com/zeroclaw-labs/zeroclaw/issues/9080) | ZeroRelay secure transport (superseded) | 2026-07-15 | 2026-08-19 | **Stale candidate**; substituído por #10142 |

### Issues Bloqueadas

| # | Status | Bloqueio |
|---|--------|----------|
| [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) | blocked | Stacked on #9447 |
| [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) | needs-maintainer-review | OAuth profiles para Anthropic |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | needs-author-action | Hailo-Ollama native support |

---

## Métricas Resumidas (2026-08-20)

| Indicador | Valor | Observação |
|-----------|-------|------------|
| Issues ativas (24h) | 39 | Alta atividade |
| PRs abertos (24h) | 48 | Pipeline robusto |
| PRs merged/closed | 2 | Gated releases |
| Releases (24h) | 0 | Período de desenvolvimento |
| Bugs P0/P1 | 8+ | Prioridade de segurança/estabilidade |
| RFCs ativas | 5+ | Evolução arquitetural em curso |
| Issues >10 comentários | 3 | Engajamento concentrado |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-08-20.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*