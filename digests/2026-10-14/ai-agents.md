# Resumo diário do ecossistema de agentes de IA 2026-10-14

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-10-13 23:33 UTC

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

**Data de referência:** 2026-10-14
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **polarização clara de atividade**: três projetos (Hermes Agent, CoPaw e ZeroClaw) concentram >90% do volume de desenvolvimento, enquanto NullClaw e IronClaw operam em modo de manutenção nominal. NanoBot demonstra maturidade com foco em estabilidade e ergonomia, enquanto Hermes Agent enfrenta pressão de estabilização com 3 bugs P1 simultâneos. CoPaw destaca-se pela arquitetura modular com plugin marketplace personalizável, e ZeroClaw prioriza hardening de segurança com correções de vulnerabilidades críticas. A integração com serviços externos (Google Workspace, Slack, Telegram) emerge como demanda transversal, assim como a necessidade de interfaces web robustas e sistemas de atualização confiáveis.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Bugs P1/P2 | Saúde | Tendência |
|---------|-------------|-----------|----------|------------|-------|-----------|
| **NullClaw** | 0 | 0 | 0 | 0 | ⚫ Estagnado | Sem sinal |
| **NanoBot** | 5 abertas | 28 atualizados, 4 merged | 0 | 1 crítico (#6165) | 🟢 Ativo | Consolidação |
| **Hermes Agent** | 50 atualizados | 50 atualizados, 2 merged | 0 | 3 P1 ativos | 🟡 Pressão | Expansão |
| **PicoClaw** | 1 aberta, 6 fechadas | 1 aberto, 1 fechado | 0 | 1 crítico (#3407) | 🔴 Negativa | Limpeza |
| **IronClaw** | 1 aberta | 1 aberto, 0 merged | 0 | 0 | ⚫ Estagnado | Baixo brilho |
| **CoPaw** | 20 (16/4) | 45 (25/20) | 0 | ~8 críticos | 🟢 Ativo | Acelerando |
| **ZeroClaw** | 29 | 50 | 0 | 2 P1, 4 P2 | 🟡 Ativo/Secure | Release iminente |

**Observação crítica:** Nenhum projeto publicou releases nas últimas 24h, indicando que todos estão em ciclos de consolidação pré-release. Hermes Agent, CoPaw e ZeroClaw lideram em volume absoluto, mas Hermes Agent apresenta maior estresse com 3 P1 simultâneos.

---

## 3. Posicionamento do Projeto Principal

### NanoBot (referência implícita)

**Vantagens competitivas:**
- Maturidade comprovada: apenas 1 bug crítico (#6165 - Docker onboarding) contra 3 P1 do Hermes Agent
- Foco em DX: galeria de componentes WebUI (#6179) e separação de views de apresentação
- Ecossistema de providers diversificado com Standard Compute (#6199) em desenvolvimento

**Diferenças técnicas:**
- Arquitetura centrada em SQLite com estado centralizado (#5943 - PR p1 há 17 dias)
- Integração Google Workspace nativa via PRs stacked (#6195, #6196)
- Pipeline de releases maduro: nenhum release hoje, mas codebase em fase de consolidação

**Tamanho da comunidade:**
- 4 PRs merged em 24h vs. 2 do Hermes Agent
- Contribuidores novos (gianfrancodemarco, henrikdukefoss) indicando crescimento
- Bug de Docker (#6165) com 2 dias de idade sem triagem — risco de conversão

### Hermes Agent (segundo mais ativo)

**Vantagens:**
- Plugin ecosystem mais maduro: NVIDIA, Jira, Slack, Discord, language packs
- Localização pt-BR mergeada (#98933) — mercado lusófono coberto
- CVE corrigido em <24h (#135817)

**Desvantagens:**
- 3 bugs P1 simultâneos (macOS gateway crash, Telegram restart kill, checkpoint loss)
- Multi-plataforma (Windows/Linux/macOS) gera regressões dispersas

---

## 4. Focos Técnicos Compartilhados

### A. Integração com Serviços Externos

| Projeto | Integrações em progresso |
|---------|--------------------------|
| **NanoBot** | Google Drive (#6187), Google Sheets (#6188) — PRs stacked |
| **Hermes Agent** | Slack SDK >= 3.44 (#110374), Telegram multi-profile (#137995) |
| **PicoClaw** | Keenable web search (#3370 merged) |
| **CoPaw** | Langfuse observability (#7964 merged), skills marketplace |

**Conclusão:** A integração com stacks corporativos (Google Workspace, Slack, Jira) é demanda transversal. NanoBot está mais avançado com PRs prontos para merge.

### B. Estabilidade de Runtime e Persistência

| Projeto | Problema principal |
|---------|-------------------|
| **NanoBot** | AutoCompact full session scan a cada 1s (#6192) |
| **CoPaw** | SQLite lock waits em writers concorrentes (#6459 - fixado) |
| **ZeroClaw** | Timestamps reescritos em SQLite (#11420), prompt cache busting (#11696) |
| **Hermes Agent** | macOS gateway crashes, checkpoint flattening (#138039) |

**Conclusão:** Problemas de persistência e cache são universalmente subestimados. ZeroClaw tem a issue mais crítica (perda de dados temporais auditing).

### C. Web UI e Experiência de Usuário

| Projeto | Status |
|---------|--------|
| **NanoBot** | Galeria de componentes + refatoração (#6179) ✅ |
| **PicoClaw** | Ghost session bug (#3407) 🔴 |
| **CoPaw** | Console empty completions (#8172), hot reload cancela tarefas (#8225) 🔴 |
| **Hermes Agent** | Desktop UI estável |

**Conclusão:** NanoBot lidera em UX/WebUI; CoPaw tem regressões críticas no Console.

### D. Segurança

| Projeto | Ações |
|---------|-------|
| **ZeroClaw** | Remoção de ruzstd vulnerável (#11715), TLS hardening (#11228), firejail_args (#11656) |
| **CoPaw** | Path traversal fix em skill staging (#8065) |
| **Hermes Agent** | CVE multidict corrigido (#135817) |
| **PicoClaw** | Private vulnerability reporting habilitado (#3405) |

**Conclusão:** ZeroClaw demonstra postura de segurança mais madura com múltiplas correções simultâneas.

---

## 5. Análise de Diferenciação

| Dimensão | NanoBot | Hermes Agent | CoPaw | ZeroClaw |
|----------|---------|--------------|-------|----------|
| **Público-alvo primário** | Desenvolvedores self-hosted | Multi-plataforma power users | Enterprise/teams | Segurança-first |
| **Arquitetura** | SQLite centralizado | Gateway unificado (em desenvolvimento) | Plugin marketplace | WASM plugin host |
| **Diferencial técnico** | Google Workspace native | Plugin ecosystem | Custom markets, Python Code Mode | Security hardening |
| **Estresse principal** | Onboarding Docker | 3 P1 simultâneos | Console stability | Release v0.8.6/v0.9.0 |
| **Comunidade** | Crescendo (novos contribuidores) | Madura,分散ada | Ativa, regressões | Focada, security-first |

### PicoClaw vs. CoPaw
Ambos têm problemas de estabilidade no Console, mas CoPaw tem arquitetura superior:
- **PicoClaw:** Ghost session, 6 issues fechadas como stale, net activity negativa
- **CoPaw:** SQLite persistence hardening, plugin hot-reload experimental, custom markets merged

### IronClaw vs. NanoBot
NanoBot supera IronClaw em todas as métricas:
- **IronClaw:** 1 issue/proposta Plazmi, 0 merged, modo nominal
- **NanoBot:** 28 PRs, integrações corporativas, comunidade ativa

---

## 6. Tração e Maturidade da Comunidade

### Líderes em Velocidade de Iteração

| Ranking | Projeto | Velocidade | Indicador |
|---------|---------|------------|-----------|
| 🥇 | **Hermes Agent** | Muito alta | 50 issues + 50 PRs/24h |
| 🥈 | **ZeroClaw** | Muito alta | 29 issues + 50 PRs/24h + 1 CVE fix |
| 🥉 | **CoPaw** | Alta | 45 PRs, PRs XL merged em ritmo bom |
| 4 | **NanoBot** | Alta | 28 PRs, 4 merged, foco em qualidade |

### Projetos em Consolidação

| Projeto | Sinal | Interpretação |
|---------|-------|---------------|
| **PicoClaw** | 6 issues stale fechadas, net negativa | Technical debt ou perda de maintainers |
| **IronClaw** | 0 merged, proposta sem engajamento | Comunidade dormente |
| **NullClaw** | Zero atividade | Abandono ou rebranding |

### Qualidade vs. Velocidade

| Projeto | Velocidade | Qualidade (bugs) | Veredicto |
|---------|------------|-----------------|-----------|
| **CoPaw** | Alta | 🟡 Regressões críticas | Acelerando com custo |
| **Hermes Agent** | Muito alta | 🔴 3 P1 simultâneos | Expansão estressada |
| **NanoBot** | Alta | 🟢 1 crítico (onboarding) | Equilíbrio saudável |
| **ZeroClaw** | Alta | 🟡 2 P1 (timestamps/custos) | Foco em security |

---

## 7. Sinais de Tendência

### A. Enterprise Self-Hosted é Prioridade

**Evidência:**
- NanoBot: Docker onboarding quebrado (#6165) — primeira barreira de adoção
- CoPaw: Custom marketplace merged (#8128), console em subpaths (#8177)
- Hermes Agent: Kanban fleet deployments (#130908)
- ZeroClaw: WASM plugin host (#11347), TLS hardening (#11228)

**Implicação:** O mercado self-hosted está amadurecendo;部署simplificado e gestão de plugins tornam-se features críticas.

### B. Integração com Google Workspace é blocking

**Evidência:**
- 2 issues + 2 PRs stacked no NanoBot para Drive/Sheets
- "A lot of working files live in Google Drive, and nanobot can't see them"

**Implicação:** Planilhas e documentos corporativos vivem na nuvem; agentes que não acessam Google Workspace têm valor limitado para enterprises.

### C. Agentes Persistentes Multi-Sessão

**Evidência:**
- Hermes Agent: Unified gateway runtime (#106742) — uma sessão por superfície
- PicoClaw: Proposta Plazmi para world persistente (#3427)
- ZeroClaw: ACP session store com problemas de timestamps
- IronClaw: Proposta hosted-MCP (#8136)

**Implicação:** A tendência é agentes que mantêm contexto entre sessões e superfícies, não chatbots stateless.

### D. Observabilidade e Custo como Requirements

**Evidência:**
- ZeroClaw: OpenRouter mostra $0.00 (#11204), cost ledger drops tokens (#11613)
- Hermes Agent: memory_char_limit de 2200 chars insuficiente (#5320)
- NanoBot: Performance issue em AutoCompact (#6192)

**Implicação:** Usuários avançados precisam de visibilidade de custos, tokens e comportamento do agente. Ferramentas de debugging/orquestração são diferenciadores.

### E. Plugin Ecosystems como Moat Competitivo

**Evidência:**
- Hermes Agent: 10+ plugins oficiais (NVIDIA, Jira, Slack, Discord, MAX messenger)
- CoPaw: Plugin marketplace personalizável, hot-reload experimental (#7565)
- ZeroClaw: WASM plugin host, TLS hardening para plugins
- NanoBot: MCP tool proposal (#6182)

**Implicação:** Quem construir o ecossistema de plugins mais diversificado e seguro captura a base de desenvolvedores.

---

## Recomendações Estratégicas

| Stakeholder | Recomendação |
|-------------|--------------|
| **Desenvolvedores** | Contribuir para NanoBot (maturidade, review rápido) ou CoPaw (impacto alto, PRs grandes) |
| **Empresas** | NanoBot para Google Workspace integration; ZeroClaw para posture de segurança |
| **Avaliação de risco** | Evitar PicoClaw (regressões), NullClaw (estagnado), IronClaw (dormente) |
| **Oportunidades** | MCP examples para ZeroClaw (#11705), Portuguese localization para CoPaw, Docker fixes para todos |

---

*Relatório gerado com base em dados públicos do GitHub de 7 projetos em 2026-10-14.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-10-14

## 1. Panorama do Dia

O NanoBot apresenta alta atividade de desenvolvimento, com **28 PRs atualizados nas últimas 24h** e **5 issues abertas** sem nenhum fechamento. A atividade concentra-se na refinamento da WebUI, ferramentas de integração (Google Drive/Sheets) e correções de bugs internas. Não houve lançamentos novos hoje. O projeto demonstra maturidade com foco em estabilidade e ergonomia, evidenciando um ciclo de PRs ativo com 4 merge/closes. A ausência de releases recentes sugere que a codebase está em fase de consolidação antes de um próximo tag.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não emitiu novas versões neste período. Isso indica que as mudanças em andamento ainda estão em revisão ou no pipeline de preparo para release.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Recentemente (Últimas 24h)

| # | Título | Impacto |
|---|--------|---------|
| **#6179** | refactor(webui): separate presentation views and expand component gallery | ✅ **Merged** — Adiciona `bun run gallery` como referência livre de gateway para componentes WebUI; cobre 120 famílias de exemplos em 159 módulos fonte. Avanço significativo na documentação interativa de componentes. |

O único PR fechado hoje (#6179) representa uma melhoria substancial na DX (Developer Experience) da WebUI, separando views de apresentação e criando uma galeria componentizável para desenvolvedores.

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Interação

| # | Título | Comentários | 👍 | Tema Central |
|---|--------|-------------|----|--------------|
| **#6165** | Default Docker image doesn't result in working app + poor onboarding doc | 2 | 0 | 🚨 **Onboarding/Bug Crítico** — O fluxo `git clone && docker compose up` não resulta em uma aplicação funcional. Impacta diretamente novos usuários. |

### Análise dos Temas

1. **Onboarding Quebrado (#6165)** — A issue com mais comentários (2) e mais antiga (criada em 2026-10-12) expõe uma falha na promessa fundamental do Docker: "just works". Isso representa um risco de conversão, pois novos usuários abandonam ao primeiro obstáculo.

2. **Integração Google Workspace** — Duas issues姐妹 (#6187, #6188) solicitam ferramentas para Google Drive e Sheets, ambas já com PRs correspondentes em progresso (#6195, #6196). Indica demanda real por integração com fluxos de trabalho corporativos.

3. **Proposta MCP (#6182)** — Uma proposta de exemplo de integração com ferramentas MCP restritas através do Plazmi world, sinalizando interesse em expandir o ecossistema de ferramentas externas.

---

## 5. Bugs e Estabilidade

### Issues de Bug Reportadas (5)

| # | Severidade | Título | Status |
|---|-----------|--------|--------|
| **#6165** | 🔴 Alta | Docker image default não funciona + doc de onboarding ruim | Aberto (2 comentários) |
| **#6192** | 🟡 Média | `AutoCompact.check_expired` faz scan completo de sessão a cada tick de 1s | Aberto |
| #6188, #6187 | 🟢 Feature Request | Google Sheets/Drive tools | Aberto |

### PRs de Fix em Progresso (3)

| # | Prioridade | Título | Escopo |
|---|-----------|--------|--------|
| **#6194** | p2 | fix(api): release idle session locks | API core |
| **#6198** | p2 | fix(webui): send same-origin cookies with uploads | WebUI |
| **#6186** | p2 | fix(email): exclude attached messages from body extraction | Channel |
| **#6185** | p2 | fix(cron): retain local timezone rules across DST changes | Cron |
| **#6184** | p2 | fix(email): preserve attachments with colliding filenames | Channel |
| **#6183** | p2 | fix: preserve XLSX grep cell locators with literal tabs | Tools |

### Análise de Estabilidade

A maioria dos bugs reportados é de **prioridade p2**, indicando problemas de contorno mas não blockers críticos. O bug de **#6165 (Docker)** é o mais impactante por afetar a primeira impressão de novos usuários. A performance issue em **#6192** (full session scan a cada 1s) pode indicar technical debt no auto-compact.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| # | Título | Autor | Relacionamento |
|---|--------|-------|----------------|
| **#6196** | feat(tools): add Google Sheets tool | gianfrancodemarco | Closes #6188 |
| **#6195** | feat(tools): add read-only Google Drive tool | gianfrancodemarco | Closes #6187 |
| **#6199** | feat(providers): add Standard Compute as OpenAI-compatible gateway | henrikdukefoss | Nova provider |
| **#5405** | feat(skills): support manual-only invocation | yu-xin-c | Controle de skills |
| **#6168** | feat(update): integrate managed installs and recoverable in-app updates | Re-bin | Update system |
| **#6083** | feat: configure heartbeat evaluator model preset | dmerkert | Configuração avançada |

### Sinais de Roadmap

1. **Google Workspace Integration** — Com PRs #6195 e #6196 prontos (stacked), a integração com Google Drive e Sheets parece próxima de merge. Representa uma expansão significativa do caso de uso para trabalho corporativo.

2. **Novos Providers** — Standard Compute (#6199) expande o ecossistema de providers OpenAI-compatible, indicando estratégia de vendor diversification.

3. **Sistema de Updates** — O PR #6168 sugere que um sistema de updates gerenciados e recuperáveis está em desenvolvimento ativo.

4. **Skills Avançadas** — O PR #5405 propõe suporte a invocation manual-only para skills com side effects, indicando maturação do sistema de automação.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Docker não funciona out-of-the-box** | Issue #6165: "The above does not result in a Nanobot that works. It should, that's the whole point of Docker" | 🔴 Alta |
| **Agente não acessa arquivos corporativos** | Issues #6187, #6188: "A lot of working files live in Google Drive, and nanobot can't see them" | 🟡 Média |
| **Uploads falham atrás de proxy** | PR #6198: cookies não são enviados com uploads em deployments via proxy/Cloudflare | 🟡 Média |

### Cenários de Uso Emergentes

1. **Uso corporativo** — Demanda por integração com Google Workspace indica adoção em contextos empresariais onde planilhas e documentos vivem na nuvem.

2. **Agentic workflows** — A proposta MCP (#6182) sugere uso como agente autônomo que persiste estado entre sessões.

### Indicadores de Satisfação

- **Nenhum feedback negativo explícito** nas issues além de #6165.
- Atividade alta de PRs sugere comunidade engajada.
- Múltiplas contribuições de novos autores (gianfrancodemarco, henrikdukefoss) indica crescimento da base de contribuidores.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Aguardando Feedback

| # | Título | Criado | Idade | Prioridade |
|---|--------|--------|-------|------------|
| **#6165** | Default Docker image doesn't result in working app | 2026-10-12 | 2 dias | 🔴 Crítica |
| **#6188** | Google Sheets tool for reading and updating shared spreadsheets | 2026-10-13 | 1 dia | 🟢 Feature |
| **#6187** | Google Drive tool for reading files from shared folders | 2026-10-13 | 1 dia | 🟢 Feature |
| **#6182** | Proposal: optional Plazmi world catch-up example through restricted MCP tools | 2026-10-13 | 1 dia | 🟢 Proposal |

### PRs Antigos em Aberto

| # | Título | Criado | Idade | Prioridade | Status |
|---|--------|--------|-------|------------|--------|
| **#5943** | refactor(session): centralize state ownership in SQLite | 2026-09-27 | ~17 dias | **p1** | 🔴 Aberto |
| **#5405** | feat(skills): support manual-only invocation | 2026-08-16 | ~60 dias | p2 | Aberto |
| **#6168** | feat(update): integrate managed installs | 2026-10-12 | 2 dias | p2 | Aberto |

### Recomendações de Ação

1. **🔴 Prioridade Crítica**: Responder e triagiar issue #6165 — está afetando onboarding de novos usuários. A falta de um Docker funcional mina a proposta de valor "self-hosted AI assistant".

2. **🟠 Prioridade Alta**: Review do PR #5943 (SQLite state centralization) — é p1 e está aberto há ~17 dias. Representa uma mudança arquitetural significativa.

3. **🟡 Prioridade Média**: Os PRs #6195/#6196 (Google Drive/Sheets) parecem prontos para merge. Acelerar review para capitalizar no momentum do contribuidor.

4. **🟢 Manter**: O PR #5405 está aberto há ~60 dias sem activity recente. Considerar close com requerimento de rebase ou integrar feedback.

---

## Métricas Consolidada do Dia

```
Atividade: ████████████  Alta
Issues abertas: 5 (0 fechadas)
PRs abertos: 24 | Merged/Closed: 4
Releases: 0
Bugs críticos: 1 (#6165)
Features em progresso: 6+
Dívida técnica identificada: #6192 (performance), #5943 (arch)
```

---

**Fontes**: [HKUDS/nanobot Issues](https://github.com/HKUDS/nanobot/issues) | [HKUDS/nanobot PRs](https://github.com/HKUDS/nanobot/pulls)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-10-14

---

## 1. Panorama do Dia

O projeto **Hermes Agent** mantém altíssima atividade nas últimas 24h, com **50 issues e 50 PRs atualizados**, embora nenhuma release tenha sido publicada. A distribuição de contribuições é equilibrada entre correções de bugs críticos (3 P1 ativos) e features de médio prazo, com destaque para o PR #106742 ("One gateway owns every local session"), que representa a unificação do runtime de sessões locais e continua em revisão ativa. O ecossistema de plugins também demonstra evolução, com adição de language packs (português brasileiro) e atualização de plugins NVIDIA. A base de código enfrenta desafios de estabilidade em plataformas específicas (macOS gateway, Telegram multi-profile, Windows bot delivery) e uma vulnerabilidade CVE no multidict foi corrigida via PR #135817.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto encontra-se em ciclo de desenvolvimento ativo sem tagging de versão. Usuários em produção devem acompanhar branches `main` ou releases canalizadas via `hermes update`.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados

| PR | Título | Impacto |
|---|---|---|
| [#98933](https://github.com/NousResearch/hermes-agent/pull/98933) | `feat(desktop): add Portuguese (Brazil) UI locale` | Localização: adiciona suporte completo a `pt-BR` na UI do Desktop, fechando gap #40239 |
| [#135817](https://github.com/NousResearch/hermes-agent/pull/135817) | `fix(deps): bump multidict 6.7.1 → 6.9.1 past CVE-2026-104874` | **Segurança**: corrige vazamento de memória no C extension do multidict (GHSA-54p9-h82j-f925) |

### PRs Abertos de Alto Impacto

| PR | Título | Status/Natureza |
|---|---|---|
| [#106742](https://github.com/NousResearch/hermes-agent/pull/106742) | `One gateway owns every local session` | Feature de refatoração massiva: CLI, TUI, Desktop, API, ACP, bots e cron compartilham uma sessão gateway-unificada com FIFO, fila durável e writer único |
| [#138089](https://github.com/NousResearch/hermes-agent/pull/138089) | `fix(gateway): preserve single reconnect ownership and adapter cleanup` | Corrige race condition no gateway que pode lançar dois reconnect watchers concorrentes e deixar adapter desconectado published |
| [#138087](https://github.com/NousResearch/hermes-agent/pull/138087) | `fix(termux): ship the MCP SDK in the payload` | Garante que `mcp` e suas dependências (`rpds-py`) sejam incluídas no wheelhouse do Termux |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| Issue | Comentários | Reações | Tema Central |
|---|---|---|---|
| [#131859](https://github.com/NousResearch/hermes-agent/issues/131859) | 36 | 0 | **Bug de permissões GitHub API**: `CreatePullRequest` falha para PRs criados de fork, mas issue creation e fork PRs funcionam normalmente |
| [#136567](https://github.com/NousResearch/hermes-agent/issues/136567) | 19 | 4 | **Telegram DM topics**: mensagem de abertura de novo tópico chega thread-less, causando misroute no lobby recovery |
| [#5320](https://github.com/NousResearch/hermes-agent/issues/5320) | 13 | 3 | **Feature de memória**: proposta de auto-scale de `memory_char_limit` (atualmente 2200 chars) para sessões longas |
| [#124794](https://github.com/NousResearch/hermes-agent/issues/124794) | 13 | 0 | **Bug de git**: `hermes update` com git < 2.44 em partial clones gera processo recursivo descontrolado, esgotando swap |
| [#110374](https://github.com/NousResearch/hermes-agent/issues/110374) | 7 | 10 | **Slack SDK >= 3.44**: indicador de status "is thinking..." quebrado silenciosamente; maior contagem de 👍 da amostra |

**Análise**: A comunidade demonstra forte preocupação com (1) **estabilidade de integrações externas** (GitHub API, Telegram, Slack) e (2) **performance de sessões longas** — sugerindo base de usuários com workflows estendidos e múltiplas plataformas.

---

## 5. Bugs e Estabilidade

### P1 — Críticos (Ativos)

| Issue | Componente | Descrição |
|---|---|---|
| [#137838](https://github.com/NousResearch/hermes-agent/issues/137838) | `gateway`, `tool/mcp` | Gateway no macOS sai repetidamente com código 75 após missed liveness probes; root cause não confirmado |
| [#137995](https://github.com/NousResearch/hermes-agent/issues/137995) | `gateway`, `platform/telegram` | `hermes gateway restart` envia SIGKILL a gateway saudável quando boot serial de adapters Telegram excede 155s |
| [#138039](https://github.com/NousResearch/hermes-agent/issues/138039) | `comp/tools`, `tool/file` | Checkpoint store sobre limite flattens todos os projetos a um snapshot, ignorando `max_snapshots` — perda silenciosa de rollback |

### P2 — Bugs Significativos (Ativos)

| Issue | Componente | Descrição |
|---|---|---|
| [#136567](https://github.com/NousResearch/hermes-agent/issues/136567) | `gateway`, `platform/telegram` | Telegram DM topics: opening message delivered thread-less → misroute |
| [#124794](https://github.com/NousResearch/hermes-agent/issues/124794) | `cli`, `updater` | Rede git em tree:0 partial clones com git < 2.44 gera fetch recursivo descontrolado |
| [#106592](https://github.com/NousResearch/hermes-agent/issues/106592) | `desktop`, `dashboard` | Remote Desktop update reporta falha após restart systemd bem-sucedido |
| [#133421](https://github.com/NousResearch/hermes-agent/issues/133421) | `tool/browser`, `desktop` | Browser session guard rejeita tile genuinamente focada (comparação com primary vs focused) |
| [#137944](https://github.com/NousResearch/hermes-agent/issues/137944) | `tool/tts` | edge-tts==7.2.7 falha 403 após Microsoft Sec-MS-GEC rotation |
| [#133153](https://github.com/NousResearch/hermes-agent/issues/133153) | `comp/tools`, `platform/windows` | Bot Chat nativo Windows: 3 bugs de serialização e mailbox em message_agent |
| [#138053](https://github.com/NousResearch/hermes-agent/issues/138053) | `comp/agent` | `is_local_endpoint()` trata Kubernetes DNS (*.svc.cluster.local) como local |

### Regressão de Segurança Corrigida

- **#135817** (merged): `multidict 6.7.1 → 6.9.1` — CVE-2026-104874, reference leak no C extension

**Nota de estabilidade**: 3 bugs P1 simultâneos representa pressão alta sobre a equipe de manutenção. Plataformas Windows e macOS concentram regressões multi-componente.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento Ativo

| Issue/PR | Componentes | Descrição |
|---|---|---|
| [#106742](https://github.com/NousResearch/hermes-agent/pull/106742) | `agent, cli, gateway, tui, acp, cron, plugins` | **Unified gateway runtime**: uma gateway-own session por superfície local |
| [#5320](https://github.com/NousResearch/hermes-agent/issues/5320) | `cli`, `tool/memory` | Auto-scale de `memory_char_limit` e surface de pressão de uso |
| [#133212](https://github.com/NousResearch/hermes-agent/issues/133212) | `agent, cli, plugins, tool/delegate` | `subagent_lifecycle` v1.1: steer, host-isolation transport, effort/route/follow-up |
| [#136326](https://github.com/NousResearch/hermes-agent/pull/136326) | `cli, tool/tts, provider/openai` | Autenticação Codex subscription para native GPT-Live voice mode |
| [#138058](https://github.com/NousResearch/hermes-agent/pull/138058) | `Plugin Catalog` | Language pack `hermes-lang-pt-br` (português brasileiro) |

### Sinais de Roadmap

- ** Internacionalização**: idioma português-brasileiro em Desktop (#98933 merged, #138058 catalog)
- **Plugin ecosystem**: NVIDIA plugins atualizados (#138066), MAX messenger v2.11.0 (#137501), Jira connector OAuth fix (#138019)
- **Segurança hardening**: redaction estendido para `state.db` + Google OAuth prefixes (#39654)
- **Voice/TTS**: separação de reasoning display de voice replies (#119787), Codex OAuth voice (#136326)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Cenário | Issue de Referência | Sintoma |
|---|---|---|
| **Ambientes corporativos com multi-profile Telegram** | [#137995](https://github.com/NousResearch/hermes-agent/issues/137995) | `hermes gateway restart` mata gateways saudáveis; fleets de 18 adapters sequenciais causam boot de ~210s |
| **Usuários Windows com bots** | [#133153](https://github.com/NousResearch/hermes-agent/issues/133153) | Mensagens duplicadas, falhas de mailbox em message_agent; 3 bugs distintos no delivery nativo Windows |
| **Sessões longas com memória limitada** | [#5320](https://github.com/NousResearch/hermes-agent/issues/5320) | Limite de 2200 chars é atingido rapidamente; proposta de auto-scale |
| **Slack SDK atualizado** | [#110374](https://github.com/NousResearch/hermes-agent/issues/110374) | Status "thinking..." desaparece silenciosamente após slack-sdk 3.44+; 10 👍 indica распространенность |
| **Kubernetes deployments** | [#138053](https://github.com/NousResearch/hermes-agent/issues/138053) | `is_local_endpoint()` classify K8s cluster DNS como local, quebrando routing |
| **Locked Docker deployments** | [#138088](https://github.com/NousResearch/hermes-agent/issues/138088), [#138092](https://github.com/NousResearch/hermes-agent/pull/138092) | Remote folder picker começa em `/` ao invés de `/opt/data`; `403: Path outside managed root` |

### Cenários de Uso Observados

- **Multi-profile enterprise**: Telegram com 17+ employee profiles
- **Long-running sessions**: users com workflows de horas atingindo limites de memória
- **Cross-platform**: Windows/Linux/macOS com features de desktop, CLI e TUI
- **Plugin ecosystem**: Jira, Slack, Discord, NVIDIA, MAX messenger, language packs

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Idade | Prioridade | Situação |
|---|---|---|---|
| [#39654](https://github.com/NousResearch/hermes-agent/issues/39654) | ~4 meses | P3, needs-decision | Hardening de secret redaction em `state.db` + Google OAuth — sem assigne há ~4 meses |
| [#110374](https://github.com/NousResearch/hermes-agent/issues/110374) | ~1 mês | P3 | Slack status broken com slack-sdk >= 3.44 — 10 👍 da comunidade, sem atenção |
| [#130908](https://github.com/NousResearch/hermes-agent/issues/130908) | ~2 semanas | P3 | Kanban stop-nudge budget exhausted mid-task; 44% dos crashes em fleet board |
| [#77072](https://github.com/NousResearch/hermes-agent/issues/77072) | ~2 meses | P2, closed | `usermod` hang com FUSE mounts — closed, aguardando validação |
| [#131884](https://github.com/NousResearch/hermes-agent/issues/131884) | ~11 dias | P2, closed | Windows ffmpeg/agent-browser install fail — closed |

**Alerta de tendência**: Issues com tag `sweeper:*` aparecem com frequência — o projeto possui automated risk tracking (sweeper) para session-state, message-delivery, compatibility, platform-windows e security-boundary. O volume de issues com múltiplos risk-tags sugere processo de QA estruturado, porém com backlog acumulado.

---

## Indicadores-Chave de Saúde do Projeto

| Indicador | Valor | Observação |
|---|---|---|
| Atividade (24h) | 50 issues + 50 PRs | Alta |
| Releases (24h) | 0 | Desenvolvimento ativo sem tagging |
| P1 ativos | 3 | Pressão crítica moderada |
| Bugs P2 | ~15 | Volume significativo de estabilização |
| Features P2/P3 | ~5 | Progresso em feature work |
| CVE corrigido | 1 (#135817) | Resposta rápida a segurança |
| PRs merged | 2 | Baixo volume de merge, alto volume de revisão |
| Plugin catalog updates | 3 | Ecossistema em crescimento |

**Veredicto geral**: O Hermes Agent demonstra **saúde ativa com pressão de estabilização**. A ausência de releases recentes contrasta com volume massivo de PRs em revisão, indicando maturidade do processo de merge. Recomenda-se atenção prioritária aos 3 P1 ativos e à unificação do gateway runtime (#106742), que é o principal bloco de feature para a próxima versão.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-10-14

---

## 1. Panorama do Dia

O projeto PicoClaw registrou **atividade moderada** em 14 de outubro de 2026. Foram fechadas **6 issues** (todas marcadas como *stale*) e **1 PR** foi encerrado. Uma nova issue foi aberta propondo integração com o serviço Plazmi via MCP. Não houve lançamentos de novas versões. O estado geral aponta para um período de **manutenção e consolidação**, com a equipe aparentemente limpando issues antigas enquanto prepara próximas contribuições.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde o período analisado. Versões anteriores (como a v0.3.1 mencionada nas issues) permanecem como atualizadas.

---

## 3. Progresso do Projeto

### PRs fechados/merged

| PR | Título | Contribuidor | Status |
|----|--------|--------------|--------|
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | `feat(tools): add Keenable web search provider` | ilya-bogin-keenable | ✅ Closed |

**Análise:** O PR #3370 adiciona o provedor de busca web **Keenable** como nova opção de ferramenta. A implementação dispensa API key, funcionando com endpoint público mediante header `X-Keenable-Title`. Este PR contribui para a **diversificação de provedores de search**, ampliando opções para usuários sem credenciais.

### Issues fechadas (limpeza de stale)

Sete issues marcadas *stale* foram fechadas em batch, incluindo reports de bugs e features antigas. Embora encerradas, muitas delas contêm demandas legítimas que merecem atenção futura.

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento

| # | Título | Comentários | Reações |
|---|--------|-------------|---------|
| [#440](https://github.com/sipeed/picoclaw/issues/440) | Replace hard iteration limit with context-window bounding | 9 | 0 |

**Análise:** Esta issue, aberta em fevereiro de 2026 e agora fechada como stale, propunha substituir o limite fixo de 20 iterações (`max_tool_iterations`) por uma estratégia baseada em janela de contexto e detecção de loops. O debate de **9 comentários** indica que a comunidade considera o limite atual restritivo para tarefas complexas, causando falhas prematuras em fluxos legítimos. **Este é um candidato forte para reconsideração e implementação futura.**

### Outras issues relevantes

- [#3407](https://github.com/sipeed/picoclaw/issues/3407) — **Bug crítico de UI**: sessão fantasma desaparece da lista enquanto modelo ainda processa (3 comentários)
- [#3406](https://github.com/sipeed/picoclaw/issues/3406) — Melhorias na Web UI: indicadores de status, separação de sessões, archival (2 comentários)
- [#3405](https://github.com/sipeed/picoclaw/issues/3405) — Requisição de **vulnerabilidade privada** (1 reaction, 2 comentários)

---

## 5. Bugs e Estabilidade

### Problemas reportados

| Severidade | Issue | Descrição |
|------------|-------|-----------|
| **Alta** | [#3407](https://github.com/sipeed/picoclaw/issues/3407) | **Ghost session**: sessão some da lista do Web UI enquanto modelo ainda pensa, sem forma de recuperá-la |
| **Média** | [#3404](https://github.com/sipeed/picoclaw/issues/3404) | Múltiplos bugs de confiabilidade no agent loop, channels manager, config e updater com reprodutores disponíveis |

**Análise:** O bug de *ghost session* (#3407) afeta diretamente a usabilidade do Web UI, que é descrito como "main day-to-day way to chat with PicoClaw". A issue #3404, embora fechada stale, incluía reprodutores para bugs que precisam ser avaliados — havia até mencionando de que issues/PRs anteriores foram fechadas antes de correção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova proposta

| # | Título | Tipo |
|---|--------|------|
| [#3427](https://github.com/sipeed/picoclaw/issues/3427) | Proposal: low-dependency Plazmi MCP/CLI example for persistent agent sessions | **Proposta** |

**Análise:** Issue aberta hoje propõe um exemplo de integração com **Plazmi** (serviço de mundo persistente com interações em tempo real UTC). Demonstra interesse da comunidade em usar o PicoClaw como **agente persistente** em ambientes sim/world-like.

### Features pendentes

| # | Título | Dominínio |
|---|--------|-----------|
| [#3406](https://github.com/sipeed/picoclaw/issues/3406) | Web UI: clearer working indicator, separate sessions, richer session list with archiving | UI/UX |
| [#3397](https://github.com/sipeed/picoclaw/issues/3397) | Add Tsubasa to OpenAI-compatible provider catalog | Providers |
| [#3416](https://github.com/sipeed/picoclaw/pull/3416) | Add Sendblue iMessage/SMS transport | Channels |

**Sinais de roadmap:** A equipe parece focada em (1) expandir canais de comunicação, (2) melhorar a experiência web e (3) diversificar provedores de AI/search.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

1. **Limite de iterações muito restritivo** (#440): Usuários com tarefas complexas experienciam falhas prematuras com mensagem "I've completed processing but have no response to give".

2. **Web UI imaturo** (#3406, #3407): 
   - Indicador de "pensando" genérico e confuso
   - Sessões que desaparecem durante processamento
   - Falta de separação entre sessões manuais e de canal

3. **Segurança**: Request para habilitar **private vulnerability reporting** (#3405) — indica preocupação com disclosure responsável.

4. **Confiabilidade geral** (#3404): Usuários experientes identificaram múltiplos bugs reprodutíveis no core do agente.

### Cenários de uso emergentes

- Integração com **Plazmi** para agentes persistentes em mundos sociais
- Uso via **iMessage/SMS** com Sendblue (#3416)
- Busca web sem API key via Keenable (#3370)

---

## 8. Backlog que Merece Atenção

### Issues fechadas sem resolução (risco de regressão)

| # | Título | Criado | Comentários | Status |
|---|--------|--------|-------------|--------|
| [#440](https://github.com/sipeed/picoclaw/issues/440) | Replace hard iteration limit with context-window bounding | 2026-02-18 | 9 | ❌ Closed stale |
| [#3404](https://github.com/sipeed/picoclaw/issues/3404) | Reliability fixes with reproducers (wave 1) | 2026-09-28 | 2 | ❌ Closed stale |
| [#3407](https://github.com/sipeed/picoclaw/issues/3407) | Web UI: ghost session bug | 2026-09-29 | 3 | ❌ Closed stale |
| [#3406](https://github.com/sipeed/picoclaw/issues/3406) | Web UI: clearer indicators + session improvements | 2026-09-29 | 2 | ❌ Closed stale |

**Recomendação:** Estas issues contêm feedback técnico valioso e bugs documentados. A equipe deveria avaliar se merecem reopening ou incorporação em milestone futura antes do stale bot fechá-las novamente.

### PR aberto necessitando review

| # | Título | Contribuidor | Idade |
|---|--------|--------------|-------|
| [#3416](https://github.com/sipeed/picoclaw/pull/3416) | Add Sendblue iMessage/SMS transport | lookevink | ~9 dias |

---

## Métricas Consolidada (24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas | 1 |
| Issues fechadas | 6 |
| PRs abertos | 1 |
| PRs fechados | 1 |
| Releases | 0 |
| **Net activity** | 🔴 Negativa (cleanup, sem novas contribuições) |

---

*Relatório gerado automaticamente com base em dados do GitHub para sipeed/picoclaw em 2026-10-14.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-10-14

---

## 1. Panorama do Dia

O projeto IronClaw apresenta **atividade reduzida** em 14 de outubro de 2026. Foi registrada apenas **1 issue** e **1 PR** atualizados nas últimas 24h, ambos em estado aberto. Nenhum merged, release ou fechamento foi registrado no período. A proposta aberta (#8136) sobre extensão hosted-MCP com integração Plazmi sugere interesse da comunidade em expandir capacidades de autenticação declarativa. O projeto encontra-se em estado de manutenção nominal, sem indicadores de regressão ou problemas críticos reportados.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O repositório nãoemitiu novas versões desde o período analisado. Para informações sobre releases anteriores, consultar a aba [Releases do repositório](https://github.com/nearai/ironclaw/releases).

---

## 3. Progresso do Projeto

| PR | Status | Resumo | Impacto |
|----|--------|--------|---------|
| [#8137](https://github.com/nearai/ironclaw/pull/8137) | ABERTO | Atualização de dependência `brace-expansion` (1.1.18 → 1.1.21) no diretório `/docs/internal/architecture-video` | Manutenção; corrige vulnerabilidades known em dependência transitive |

**Análise:** O PR #8137, submetido por dependabot[bot], representa atualização rotineira de dependência JavaScript. Ainda não foi merged. Não há PRs merged ou fechados no período, indicando ausência de entregas concretas no último dia.

---

## 4. Temas Quentes da Comunidade

**Issue em destaque:**

| Issue | Autor | Reações | Comentários | Relevância |
|-------|-------|---------|-------------|------------|
| [#8136](https://github.com/nearai/ironclaw/issues/8136) | cairn-agent | 0 | 0 | Proposta arquitetural |

**Detalhamento:**
A issue #8136 propõe uma **extensão opcional de hosted-MCP com integração Plazmi**, aproveitando superfícies declarativas já existentes no projeto. O autor argumenta que a implementação pode reutilizar "seams" (interfaces) já disponíveis para autenticação por API-key e egress, evitando adição de lógica vendor ao host.

**Demanda identificada:**
- Expandir ecossistema de extensões third-party
- Suportar provedores alternativos (Plazmi) via declaração
- Explorar modelo de extensibilidade declarativa

**Baixa engagement:** Zero reações e zero comentários indicam que a proposta ainda não ganhou tração visível na comunidade.

---

## 5. Bugs e Estabilidade

**Nenhum bug ou regressão reportado nas últimas 24h.**

O projeto não apresenta indicadores de instabilidade no período analisado. Recomenda-se monitorar issues abertas anteriores para garantir que nenhuma regressão crítica ficou sem acompanhamento.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Feature request em destaque:**

| Issue | Tipo | Escopo |
|-------|------|--------|
| [#8136](https://github.com/nearai/ironclaw/issues/8136) | Feature Request | Extensibilidade / Integração third-party |

**Análise:** A proposta de integração Plazmi via extension seam declarativo sinaliza:
1. Demanda por **ecossistema de plugins/extensions** mais robusto
2. Interesse em **abstração de provedores** (evitar vendor lock-in)
3. Necessidade de **modelos de autenticação flexíveis** (declarative auth)

**Sem outros sinais de roadmap** no período — a issue #8136 permanece como único indicador de direção futura.

---

## 7. Resumo de Feedback dos Usuários

**Volume de feedback:** Mínimo (1 issue, 0 comentários, 0 reações)

**Análise de sentimento:** Não há dados suficientes para inferir satisfação ou insatisfação. O silêncio pode indicar:
- Fase estável do produto (pouca necessidade de reportar)
- Falta de canais visíveis para feedback
- Baixa base ativa de contribuidores

**Recomendação:** Considerar análise de issues fechadas/resolvidas para construir visão mais completa da experiência do usuário.

---

## 8. Backlog que Merece Atenção

| Issue | Idade Estimada | Status | Prioridade |
|-------|----------------|--------|------------|
| [#8136](https://github.com/nearai/ironclaw/issues/8136) | ~1 dia | ABERTA | Monitorar |

**Situação:** A issue #8136 foi criada em 2026-10-13 e截至 2026-10-14 ainda não recebeu resposta da equipe mantenedora.

**Recomendação:**
- Engajar com o autor `cairn-agent` para clarificar escopo e viabilidade
- Avaliar alinhamento com roadmap estratégico do projeto
- Responder em thread para manter comunidade engajada

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues ativas (24h) | 1 | 🟡 Baixa |
| PRs merged (24h) | 0 | 🔴 Estagnado |
| Releases (24h) | 0 | 🔴 Estagnado |
| Bugs críticos | 0 | 🟢 Saudável |
| Tempo médio de resposta | Não disponível | — |

**Veredicto:** Projeto em **modo de baixo brilho** — sem regressions ou incidentes, mas também sem progresso tangível. Recomenda-se monitorar resolução da issue #8136 como indicador de vitalidade da comunidade.

---

*Relatório gerado em 2026-10-14 com base em dados do GitHub de [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-10-14

---

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade de desenvolvimento** em 14 de outubro de 2026. Nas últimas 24h, foram registradas 20 issues (16 abertas, 4 fechadas) e 45 PRs (25 abertas, 20 merged/fechadas), indicando um ciclo de desenvolvimento intenso com múltiplas contribuições simultâneas. Não há releases novas hoje, mas a versão mais recente continua sendo a **2.2.2-beta.4** (beta). Os temas dominantes incluem correções de estabilidade no Console, melhorias no sistema de plugins/hot-reload, e preparação para marketplaces customizáveis de Skills. A saúde geral do projeto permanece boa, com a equipe respondendo ativamente a issues e mantendo um fluxo saudável de PRs em review.

---

## 2. Lançamentos

**Nenhum release novo nas últimas 24h.**

| Versão | Tipo | Data | Notas |
|--------|------|------|-------|
| 2.2.2-beta.4 | Beta | 2026-09-30 | Console assets mais recentes |

**Status:** A versão mais recente continua sendo a beta 2.2.2-beta.4. A equipe parece focada em estabilizar a base de código antes de um próximo release stable. A ausência de release hoje sugere que as mudanças em curso (#8224 Python Code Mode, #7565 plugin hot-reload) ainda não atingiram o threshold para corte de release.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Hoje (20)

| PR | Autor | Tamanho | Descrição | Impacto |
|----|-------|---------|-----------|---------|
| [#6459](https://github.com/agentscope-ai/QwenPaw/pull/6459) | niceIrene | XL | **Harden SQLite persistence, backup, and restore** | ⭐ **Alto** — Corrige exaustão de lock waits em writers concorrentes, previne falhas de persistência de histórico |
| [#8221](https://github.com/agentscope-ai/QwenPaw/pull/8221) | rayrayraykk | XS | Bound background polling, unblock model picker | UI mais responsiva em runtimes lentos |
| [#8190](https://github.com/agentscope-ai/QwenPaw/pull/8190) | niceIrene | S | Resolve model capabilities antes de filtrar history media | Modelos text-only não recebem mais imagens |
| [#8220](https://github.com/agentscope-ai/QwenPaw/pull/8220) | qbc2016 | S | Bump agentscope to 2.0.10 | Atualização de dependência |
| [#8217](https://github.com/agentscope-ai/QwenPaw/pull/8217) | zhijianma | XL | Establish UIUX foundation | Refatoração de lazy loading, polling otimizado, metadata de rotas |
| [#8128](https://github.com/agentscope-ai/QwenPaw/pull/8128) | Leirunlin | XL | **Move hub to plugins** | ⭐ **Alto** — Hubs agora são plugins instaláveis/removíveis |
| [#7964](https://github.com/agentscope-ai/QwenPaw/pull/7964) | 96loveslife | L | Langfuse tool observation recording fix | Observabilidade restaurada |
| [#8212](https://github.com/agentscope-ai/QwenPaw/pull/8212) | rayrayraykk | XS | Finish tool streams without yielding during GeneratorExit | Previne RuntimeError em tool cleanup |
| [#8098](https://github.com/agentscope-ai/QwenPaw/pull/8098) | lorenzozanee | S | Return result for foreground chat timeouts | Mensagem de erro mais clara em timeouts |
| [#8065](https://github.com/agentscope-ai/QwenPaw/pull/8065) | BeiMu-new | S | Sanitize skill_name before building staging paths | **Segurança** — Previne path traversal |

### PRs Abertas em Destaque

| PR | Autor | Tamanho | Descrição | Status |
|----|-------|---------|-----------|--------|
| [#8224](https://github.com/agentscope-ai/QwenPaw/pull/8224) | rayrayraykk | XXL | **Experimental Python Code Mode** | Aberta |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | XiuShenAl | XXXL | **Clean unload + rollback-safe hot reload** | Aberta |
| [#8231](https://github.com/agentscope-ai/QwenPaw/pull/8231) | RerankerGuo | M | Persist market install provenance | Aberta |
| [#8230](https://github.com/agentscope-ai/QwenPaw/pull/8230) | raineverknow | M | Optional host navigation allowlist | Aberta |
| [#8229](https://github.com/agentscope-ai/QwenPaw/pull/8229) | Marlin-Phone | S | **Truncate oversized tool outputs** | Aberta |
| [#8203](https://github.com/agentscope-ai/QwenPaw/pull/8203) | LUOSENGWA | S | Echo user's own message as first frame | Under Review |
| [#8205](https://github.com/agentscope-ai/QwenPaw/pull/8205) | jinglinpeng | L | Add TypeSafe provider and decision model types | Aberta |
| [#8219](https://github.com/agentscope-ai/QwenPaw/pull/8219) | zhaozhuang521 | XL | Stabilize chunk recovery and reload allowance | Aberta |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Mais Engajamento

| Issue/PR | Tipo | Comentários | Título |
|----------|------|-------------|--------|
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | Feature | 3 | Plugin-facing theme extension point |
| [#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) | Bug | 3 | Console chat intermittent silent empty completions |
| [#7015](https://github.com/agentscope-ai/QwenPaw/issues/7015) | Related | — | Audio file rejection family (referenciado em #8171) |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | Feature | — | Clean unload + rollback-safe hot reload (XXXL) |

### Análise de Demandas

1. **Extensibilidade de Temas para Plugins (#8071):** Plugins atualmente têm apenas um "knob" (`colorPrimary`). A demanda é por um sistema de override layer para semantic tokens, permitindo que plugins entreguem experiências visuais mais profundas alinhadas com suas identidades.

2. **Mercados Customizáveis (#8015 closed, #8128 merged):** A funcionalidade de sources customizados para Skill/Plugin marketplace foi finalmente mergeada (#8128). Isso é **crítico para deployments enterprise/intranet** que não podem acessar fontes públicas.

3. **Persistência e Histórico (#8228, #8229):** Chat history com arquivos base64 inline está causando respostas de 10+ MB, causando timeouts. A PR #8229 propõe truncagem, mas isso pode ser uma solução parcial.

4. **Plugin Hot-Reload Seguro (#7565):** Este PR XXXL é o mais complexo em aberto. Implementa dois-layer teardown ledger para permitir updates sem rebuild de workspaces. **Este é potencialmente transformador para estabilidade de produção.**

---

## 5. Bugs e Estabilidade

### Bugs Críticos (Impacto Alto)

| Issue | Severidade | Descrição | Reprodução |
|-------|------------|-----------|------------|
| [#8228](https://github.com/agentscope-ai/QwenPaw/issues/8228) | **Crítica** | Chat history bloat — base64 inline faz sessões chegarem a 10 MB+, causando 30s timeout | 2.2.2-beta.3 Docker |
| [#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) | **Crítica** | Console chat com silence vazio — resposta vazia após ~1s sem chamada de modelo | 2.2.0 Docker, Linux |
| [#8206](https://github.com/agentscope-ai/QwenPaw/issues/8206) | **Alta** | Deleção de projeto falha no Windows após log writer (WinError 5) | 2.2.1 Windows Server 2022 |
| [#8225](https://github.com/agentscope-ai/QwenPaw/issues/8225) | **Alta** | Hot reload cancela cron tasks em execução, marcados como `cancelled` sem aviso | 2.2.1 Console |
| [#8222](https://github.com/agentscope-ai/QwenPaw/issues/8222) | **Alta** | ACP nunca carrega plugins instalados — tools e callbacks indisponíveis | ACP sessions |
| [#8213](https://github.com/agentscope-ai/QwenPaw/issues/8213) | **Alta** | Hub restart deixa Local runtimes parados e cron jobs silenciosamente ignorados | Hub Local provisioner |

### Bugs Medium

| Issue | Descrição |
|-------|-----------|
| [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) | send_file_to_user com áudio trava sessão quando LM Studio retorna 400 |
| [#8179](https://github.com/agentscope-ai/QwenPaw/issues/8179) | Instalação de skill do GitHub corrompe binários (bytes non-UTF-8 → U+FFFD) |
| [#8218](https://github.com/agentscope-ai/QwenPaw/issues/8218) | Default agent não consegue modificar modelo (model deprecated) |
| [#8202](https://github.com/agentscope-ai/QwenPaw/issues/8202) | Mensagem enviada em um dispositivo invisível no outro até fim do turn |

### Bugs Corrigidos/Closed

| Issue | Descrição |
|-------|-----------|
| [#8088](https://github.com/agentscope-ai/QwenPaw/issues/8088) | Imagem em chat_with_image entrava em loop Bash+PIL |
| [#7981](https://github.com/agentscope-ai/QwenPaw/issues/7981) | Foreground timeout reportava "interrompido pelo usuário" incorretamente |
| [#8186](https://github.com/agentscope-ai/QwenPaw/issues/8186) | Navegação de mensagens sobrescrevia scroll manual |

**Tendencia:** O Console e interações multi-device apresentam regressões recentes. A estabilidade de produção (Hub, cron, hot-reload) precisa de atenção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Propostas

| Issue | Autor | Título | Alignamento Estratégico |
|-------|-------|--------|-------------------------|
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | BeiMu-new | Plugin-facing theme extension point | Enterprise extensibilidade |
| [#7056](https://github.com/agentscope-ai/QwenPaw/issues/7056) | TanKenglim | Background Task Callback/Notification | UX/developer experience |
| [#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126) | BeiMu-new | Cancellable skill-pool download job | UX (timeout prevention) |
| [#8223](https://github.com/agentscope-ai/QwenPaw/issues/8223) | raineverknow | Optional host navigation policy | Enterprise deployment |
| [#8211](https://github.com/agentscope-ai/QwenPaw/issues/8211) | veveyluo | i18n for protected execution contract prompt | Internationalização |
| [#8177](https://github.com/agentscope-ai/QwenPaw/issues/8177) | hslimi | Configurable console basename for reverse-proxy | Self-hosted deployments |

### PRs com Features Experimentais

| PR | Descrição | Potential Roadmap |
|----|-----------|-------------------|
| [#8224](https://github.com/agentscope-ai/QwenPaw/pull/8224) | **Experimental Python Code Mode** | Ferramenta `run_code` para modelos com worker CPython isolado |
| [#8205](https://github.com/agentscope-ai/QwenPaw/pull/8205) | TypeSafe provider + decision model types | Suporte a modelos de decisão além de chat |
| [#8230](https://github.com/agentscope-ai/QwenPaw/pull/8230) | Host navigation allowlist | Enterprise curated deployments |

### Sinais de Direção

1. **Enterprise/Self-hosted:** Issues #8015, #8177, #8223, #7056 indicam demanda forte por deployments em ambientes isolados ou customizados.
2. **Melhorias de Console:** Temas para plugins, i18n, e navegação customizável sugerem foco em experiência de uso em múltiplos contextos.
3. **Developer Experience:** Code mode experimental e task callbacks indicam investimento em capacidades de debugging/orquestração.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Frequência | Impacto |
|-----|------------|---------|
| **Timeouts em history/chat** | Alta | Bloqueia uso em links lentos |
| **Hot reload cancela tarefas** | Média-Alta | Perda de trabalho, frustração |
| **Plugins não funcionam no ACP** | Média | Incompatibilidade entre modos |
| **Instalação de skills corrompe binários** | Média | Skills com assets (imagens, fontes) quebrados |
| **Console não funciona em subpaths** | Média | Self-hosted com proxy reverso impossibilitado |

### Cenários de Uso Emergentes

1. **Deployments Intranet/Air-gapped:** Usuários precisam de marketplaces customizados (#8015) e console em subpaths (#8177).
2. **Produção com Cron Jobs:** Hub restart e hot reload estão causando perda de scheduled tasks (#8213, #8225).
3. **Multi-device Chat:** Sincronização de mensagens entre dispositivos ainda é problemática (#8202).
4. **Windows Enterprise:** Bug de deleção de projeto (#8206) afeta ambiente Windows Server.

### Satisfação/Insatisfação

- **Positivo:** Comunidade ativa reportando bugs detalhados; PRs de tamanho XL/XL sendo mergeadas em ritmo bom.
- **Preocupante:** Bugs críticos (#8228, #8172) com múltiplos affected users; regressões em estabilidade de produção.

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resolução

| Issue | Idade | Prioridade | Descrição | Nota |
|-------|-------|------------|-----------|------|
| [#7056](https://github.com/agentscope-ai/QwenPaw/issues/7056) | ~60 dias | Alta | Background Task Callback/Notification | Feature request legítimo sem movimento |
| [#7015](https://github.com/agentscope-ai/QwenPaw/issues/7015) | ~65 dias | Alta | Audio file rejection family | Base para #8171 ainda aberto |

### PRs Grandes Paradas

| PR | Idade | Tamanho | Descrição | Risco |
|----|-------|---------|-----------|-------|
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | ~40 dias | XXXL | Clean unload + rollback-safe hot reload | Complexidade alta; impacta arquitetura de plugins |
| [#6459](https://github.com/agentscope-ai/QwenPaw/pull/6459) | ~82 dias | XL | Harden SQLite persistence | **Acabou de ser merged** ✅ |

### Issues Recentes Sem Assignee/Review

| Issue | Criado | Descrição |
|-------|--------|-----------|
| [#8228](https://github.com/agentscope-ai/QwenPaw/issues/8228) | 2026-10-13 | Chat history bloat — 10MB+ responses |
| [#8222](https://github.com/agentscope-ai/QwenPaw/issues/8222) | 2026-10-13 | ACP never loads plugins |
| [#8213

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-10-14

---

## 1. Panorama do dia

O projeto ZeroClaw apresenta **alta atividade** na data de hoje, com 29 issues e 50 PRs atualizados nas últimas 24 horas. Não houve novos lançamentos, mas o desenvolvimento está intenso com foco em correções de bugs e preparação para a release v0.8.6/v0.9.0. A comunidade demonstra preocupação significativa com problemas de armazenamento de sessão (timestamps) e desempenho do runtime (cache de prompts), enquanto a equipe de segurança trabalha ativamente em vulnerabilidades críticas. O volume de PRs em pipeline indica progresso consistente, embora vários bugs P1/P2 aguardem resolução antes do próximo release.

---

## 2. Lançamentos

**Nenhum novo release hoje (2026-10-14).**

O projeto está em período ativo de desenvolvimento para as versões **v0.8.6** e **v0.9.0**, conforme tracked pelo issue [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432). As seguintes entregas estão em curso:

| Release | Fase | Status |
|---------|------|--------|
| v0.8.6 | Phase 2 - Runtime work | Em progresso |
| v0.8.6 | WASM plugin host | PR #11347 em revisão |
| v0.8.6 | Plugin TLS hardening | PR #11228 em revisão |
| v0.8.6 | Channel instance seeding | Dependência resuelta em #10996 |
| v0.9.0 | Phase 3 - Gateway separation | Tracking ativo |

---

## 3. Progresso do Projeto

### PRs fechadas/merged hoje

| PR | Título | Impacto |
|----|--------|--------|
| [#11715](https://github.com/zeroclaw-labs/zeroclaw/pull/11715) | fix(deps): remove vulnerable ruzstd through probe-rs 0.32 | **CRÍTICO** — Remove RUSTSEC-2026-0344 |
| [#10633](https://github.com/zeroclaw-labs/zeroclaw/pull/10633) | test: isolate log bridge broadcast assertion | Melhoria de confiabilidade CI |

### PRs em destaque no pipeline

| PR | Título | Complexidade | Status |
|----|--------|--------------|--------|
| [#11656](https://github.com/zeroclaw-labs/zeroclaw/pull/11656) | fix(security): apply configured firejail_args | L | Em revisão |
| [#11592](https://github.com/zeroclaw-labs/zeroclaw/pull/11592) | feat(security): add glob patterns for file_read path filtering | M | Em revisão |
| [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) | feat(release): ship the WASM plugin host | M | Stacked PR |
| [#10446](https://github.com/zeroclaw-labs/zeroclaw/pull/10446) | fix(runtime): reject tool-call envelopes leaked into prose | XL | Em revisão |
| [#11174](https://github.com/zeroclaw-labs/zeroclaw/pull/11174) | feat(runtime): add capability-taking constructors | XL | Refresh pendente |
| [#11228](https://github.com/zeroclaw-labs/zeroclaw/pull/11228) | fix(plugins): harden named TLS profile materialization | XL | Em revisão |
| [#11309](https://github.com/zeroclaw-labs/zeroclaw/pull/11309) | feat(quickstart): install and activate tool plugins | XL | Em revisão |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| Issue | Título | Comentários | Prioridade |
|-------|-------|-------------|------------|
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite session rewrites created_at of every message | 8 | P1 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Tracker: Runtime and gateway delivery v0.8.6/v0.9.0 | 6 | P2 |
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter spend shows $0.00 | 5 | P1 |
| [#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) | Bind gateway pairing tokens to roster users | 5 | P2 |
| [#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) | Cost ledger drops provider's total_tokens | 4 | P2 |

### Análise dos temas quentes

1. **Armazenamento de sessão e timestamps** — Múltiplos reports (#11420, #11675) indicam que o SQLite reestampa `created_at` de todas as mensagens a cada turno, perdendo granularidade temporal. Impacta análise de custos e auditoria.

2. **Rastreamento de custos impreciso** — Issues #11204 e #11613 demonstram que tokens de raciocínio (reasoning tokens) e custos do OpenRouter não estão sendo contabilizados corretamente, levando a relatórios de "$0.00".

3. **Segurança e arquitetura** — O issue #10573 avança para vincular tokens de pairing a usuários do roster, fortalecendo o modelo de identidade.

4. **Release v0.9.0 gateway separation** — O tracker #7432 demonstra foco da comunidade na separação gateway/runtime prometida há tempos.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos - Requerem atenção imediata)

| Issue | Título | Severidade | Status |
|-------|-------|------------|--------|
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite session rewrites created_at of every message | S2 | Aberto |
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter spend shows $0.00 | S2 | Aceito |
| [#10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777) | thinking/effort config flips between turns | S2 | Aceito |
| [#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) | model_routing_config upsert_agent rewrites entire config | S2 | Em progresso |
| [#10331](https://github.com/zeroclaw-labs/zeroclaw/issues/10331) | recover terminal settlement intents abandoned by dead worker | S2 | Em progresso |

### Bugs P2 (Degradados - Impactam experiência)

| Issue | Título | Área |
|-------|-------|------|
| [#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) | Cost ledger drops provider's total_tokens | Observabilidade |
| [#10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950) | cost.warn_at_percent warnings ignored | Runtime |
| [#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623) | ZeroCode drops pending ask_user prompt | ZeroCode |
| [#11706](https://github.com/zeroclaw-labs/zeroclaw/issues/11706) | max_image_turns never releases vision route | Multimodal |

### Bugs P3 / Minor

- [#11654](https://github.com/zeroclaw-labs/zeroclaw/issues/11654) — JPEG admission copies input before decode cap check
- [#11675](https://github.com/zeroclaw-labs/zeroclaw/issues/11675) — ACP session store re-stamps created_at
- [#11694](https://github.com/zeroclaw-labs/zeroclaw/issues/11694) — ZeroCode Cost tab mixes UTC and local-day totals
- [#11696](https://github.com/zeroclaw-labs/zeroclaw/issues/11696) — System prompt rebuilt from disk every turn
- [#11703](https://github.com/zeroclaw-labs/zeroclaw/issues/11703) — Activating deferred tool busts prompt cache
- [#11691](https://github.com/zeroclaw-labs/zeroclaw/issues/11691) — ZeroCode hint "⌥P" types π on macOS Terminal

### Teste Flaky

| Issue | Título | Impacto |
|-------|-------|---------|
| [#11179](https://github.com/zeroclaw-labs/zeroclaw/issues/11179) | sop::engine test fails crossing second boundary | CI Required Gate |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features solicitadas hoje

| Issue | Título | Tipo | Área |
|-------|-------|------|------|
| [#11705](https://github.com/zeroclaw-labs/zeroclaw/issues/11705) | Proposal: Plazmi example for per-agent MCP grants | Proposta | Docs/MCP |
| [#11207](https://github.com/zeroclaw-labs/zeroclaw/issues/11207) | Document bounded Tsubasa custom-provider setup | Docs | Provider |

### Features em desenvolvimento para v0.8.6/v0.9.0

| Issue | Título | Tracking |
|-------|-------|----------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Runtime and gateway delivery tracker | v0.8.6/v0.9.0 |
| [#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) | Bind gateway pairing tokens to roster users | v0.9.0 |
| [#10996](https://github.com/zeroclaw-labs/zeroclaw/issues/10996) | Seed channel instance configuration | v0.8.6 |

### Sinais de tendência

1. **MCP (Model Context Protocol)** — Crescente interesse em documentação e exemplos de configuração per-agente (#11705).
2. **Segurança de plugins** — TLS hardening (#11228) e path filtering para file_read (#11592) indicam maturidade do sistema de plugins.
3. **Observabilidade** — Múltiplos bugs de cost tracking sugerem foco em telemetria confiável para a release.
4. **Performance de prompts** — Bugs de cache busting (#11696, #11703, #11704) indicam necessidade de otimização antes de v0.9.0.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Custos imprecisos** | Usuários não conseguem confiar em relatórios de custo; OpenRouter mostra "$0.00" | 2 issues |
| **Perda de dados temporais** | Timestamps de mensagens são sobrescritos, inviabilizando análises históricas | 2 issues |
| **UX do ZeroCode** | Bugs de UI confundem usuários (hint de teclado errado, timezones misturados) | 3 issues |
| **Performance** | Reconstrução de prompts a cada turno causa custos elevados e latência | 3 issues |
| **Canais** | Telegram ignora mensagens editadas; Lark não parseia conteúdo rich-text | 2 issues |

### Cenários de uso mencionados

- **Análise de conversas longas**: Trim de histórico deletando mensagens permanentemente (#11711)
- **Multi-modalidade**: Usuários com provedores de visão não conseguem voltar ao modelo normal (#11706)
- **Plugins MCP**: Necessidade de exemplos práticos de grants por agente (#11705)
- **Custom providers**: Documentação insuficiente para Tsubasa (#11207)

### Satisfação/Insatisfação

**Sinais negativos:**
- Múltiplos bugs de custo/observabilidade indicam frustração com falta de visibilidade
- Regressões de segurança (firejail_args, TLS profiles) geram preocupação
- Bugs recorrentes em session storage (#11420, #11675) sugerem dívida técnica

**Sinais positivos:**
- Comunidade ativa contribuindo com fixes (multiple contributors)
- Security fixes sendo priorizados e merged rapidamente (#11715)
- Features de segurança aceitas (#11592) demonstram evolução do modelo threat model

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias com alta prioridade

| Issue | Título | Criado | Comentários | Prioridade |
|-------|-------|--------|-------------|------------|
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter spend shows $0.00 | 2026-09-27 | 5 | P1 |
| [#10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777) | thinking/effort config flips between turns | 2026-09-11 | 3 | P1 |
| [#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) | Bind pairing tokens to roster users | 2026-09-03 | 5 | P2 |
| [#10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950) | cost.warn_at_percent ignored | 2026-09-17 | 3 | P2 |
| [#11207](https://github.com/zeroclaw-labs/zeroclaw/issues/11207) | Document Tsubasa custom-provider | 2026-09-28 | 2 | P3 |

### PRs aguardando revisão há >7 dias

| PR | Título | Criado | Tamanho | Bloqueios |
|----|--------|--------|---------|-----------|
| [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) | WASM plugin host in artifacts | 2026-10-01 | M | Release |
| [#11228](https://github.com/zeroclaw-labs/zeroclaw/pull/11228) | Harden TLS profile materialization | 2026-09-29 | XL | Security |
| [#10446](https://github.com/zeroclaw-labs/zeroclaw/pull/10446) | Reject tool-call envelopes in prose | 2026-08-29 | XL | Runtime |
| [#10499](https://github.com/zeroclaw-labs/zeroclaw/pull/10499) | Validate persistent config writes | 2026-08-31 | XL | Config |

### Recomendações de priorização

1. **Imediato**: Resolver #11204 (OpenRouter $0) e #11420 (timestamp loss) — impacto em produção
2. **Esta semana**: Review dos PRs de segurança (#11656, #11592, #11228) — dependências do release v0.8.6
3. **Sprint atual**: Merge do WASM plugin host (#11347) e TLS hardening (#11228)
4. **Dívida técnica**: Padronizar lógica de session storage para evitar regressões de timestamps

---

*Relatório gerado em 2026-10-14. Dadosextraídos de github.com/zeroclaw-labs/zeroclaw.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*