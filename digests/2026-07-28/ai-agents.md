# Resumo diário do ecossistema de agentes de IA 2026-07-28

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-07-27 21:06 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-07-28

---

## 1. Panorama do Dia

O projeto **NullClaw** apresenta hoje um estado de **baixa atividade**, sem registros de novas issues ou releases nas últimas 24 horas. Apenas **1 PR** permanece aberto — uma atualização de dependência Docker gerada automaticamente pelo Dependabot. O repositório demonstra estabilidade operacional, sem indicadores de problemas críticos ou bloqueios. A ausência de atividade comunitária sugere um período de manutenção rotineira ou planejamento interno de próxima versão.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

Não há informações sobre versões iminentes ou pipeline de release ativo no período analisado.

---

## 3. Progresso do Projeto

### PRs em Andamento

| # | Título | Status | Tipo | Impacto |
|---|--------|--------|------|---------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | `ci(deps): bump alpine from 3.23 to 3.24` | **OPEN** | Dependência | Atualização de segurança/performance |

**Análise:** A atualização do alpine para `3.24` é uma manutenção preventiva de infraestrutura Docker. Este PR, aberto em 2026-06-15, foi atualizado em 2026-07-27, indicando movimento recente. A aplicação do merge é recomendada para manter a base de imagens Docker atualizada e patched contra vulnerabilidades conhecidas.

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com atividade significativa de comentários/reações registrada nas últimas 24h.**

O ecossistema comunitário não demonstrou engajamento ativo no período analisado. Recomenda-se monitorar discussões pendentes no histórico do repositório para identificar conversas que possam ter sido abertas anteriormente.

---

## 5. Bugs e Estabilidade

**Nenhum bug ou regressão reportada nas últimas 24h.**

O estado atual não apresenta indicadores de instabilidade. O projeto não tem issues abertas ou fechadas relacionadas a bugs no período analisado.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova feature request registrada nas últimas 24h.**

Sem inputs recentes da comunidade que indiquem direcionamento estratégico para próximas versões. Recomenda-se análise do backlog histórico para identificar demandas acumuladas.

---

## 7. Resumo de Feedback dos Usuários

**Sem dados de feedback registrados nas últimas 24h.**

A ausência de issues fechadas ou discussões recentes não permite extrair feedback qualitativo dos usuários no momento.

---

## 8. Backlog que Merece Atenção

### Issues/PRs Antigas Sem Resolução

| # | Título | Tipo | Criado em | Status Atual | Observação |
|---|--------|------|-----------|--------------|------------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | `bump alpine from 3.23 to 3.24` | PR | 2026-06-15 | OPEN (43 dias) | **Pendência de merge** — atualização de dependência Docker aberta há 43 dias |

**Recomendação:** O PR #956, embora trivial em escopo (atualização de imagem base Alpine), permanece aberto há mais de 40 dias. Recomenda-se avaliação e merge para evitar dependência desatualizada e manter a hygiene do projeto.

---

## Métricas Resumidas (Últimas 24h)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 0 |
| Issues fechadas | 0 |
| PRs abertas | 1 |
| PRs merged/fechadas | 0 |
| Releases | 0 |
| **Nível de Atividade** | 🔴 Muito Baixo |

---

## Conclusão Geral

O projeto **NullClaw** encontra-se em **estado de hibernação operacional** em 2026-07-28. A única pendência actionable é o merge do PR #956 (atualização de dependência Docker). Não há indicadores de problemas críticos, mas a ausência prolongada de atividade pode sinalizar necessidade de revitalização comunitária ou definição de roadmap para próximas versões.

**Ação recomendada:** Avaliar e aplicar o PR #956; considerar comunicação comunitária sobre o estado do projeto e próximos passos.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-07-28
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** em 2026-07-28. De um lado, **IronClaw** acaba de atingir um marco histórico com a release v1.0.0 da arquitetura Reborn, demonstrando maturidade para produção enterprise. Do outro, **ZeroClaw** enfrenta uma crise de segurança com múltiplas vulnerabilidades críticas (vazamento de chaves de API, bypasses de autorização em canais como Bluesky, Reddit e LINE), exigindo atenção imediata. **NanoBot** e **CoPaw** lideram em volume de contribuições com ciclos saudáveis de resolução (37/50 e 37/50 issues fechadas, respectivamente). **Hermes Agent** registra alto volume de Issues e PRs, porém com resolução baixa — 50 issues abertas sem fechamento. **PicoClaw** sofre gargalo de review (4 PRs abertos, 0 merges). **NullClaw** permanece em modo de hibernação operacional, sinalizando possível abandono ou reestruturação interna. A tendência geral aponta para **consolidação arquitetural** nos projetos mais maduros e **expansão de canais** (LINE, Feishu, DingTalk) como vetor de diferenciação.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Issues Fechadas | PRs Merged | Nível de Atividade | Saúde |
|---------|-------------|-----------|----------|-----------------|------------|---------------------|-------|
| **NullClaw** | 0 | 1 | 0 | 0 | 0 | 🔴 Muito Baixo | Hibernação |
| **NanoBot** | 65 | 37 | 0 | **65** | — | 🟢 Alto | Boa (triagem massiva) |
| **Hermes Agent** | 50 | 50 | 0 | 0 | 3 | 🟢 Alto | Mista (volume sem resolução) |
| **PicoClaw** | 5 | 4 | 0 | 0 | 0 | 🟡 Moderado | Gargalo de Review |
| **IronClaw** | 37 | 50 | **1 (v1.0.0)** | — | **19** | 🟢 Muito Alto | Excelente |
| **CoPaw** | 50 | 48 | 0 | **37** | **15** | 🟢 Alto | Boa |
| **ZeroClaw** | 50 | 50 | 0 | — | 0 | 🟢 Alto | 🔴 Crítica (segurança) |

**Observações:**
- **IronClaw** é o único projeto com release e alto volume de merges (19 PRs), indicando cadência de entrega saudável pós-launch.
- **NanoBot** e **CoPaw** apresentam ratios de resolução de issues >70%, sugerindo processos de triagem eficazes.
- **Hermes Agent** e **ZeroClaw** registram alta atividade sem resolução proporcional — sintoma de debt técnico acumulado ou volume de demanda superior à capacidade de review.
- **NullClaw** não registra atividade comunitária significativa há >40 dias.

---

## 3. Posicionamento do Projeto Principal

> **Contexto:** Não há um "projeto principal" oficial definido. Abaixo, analisa-se o projeto com maior maturidade e tração comunitária.

### IronClaw (nearai/ironclaw)

**Vantagens competitivas frente aos pares:**

| Dimensão | IronClaw | Comparação com Pares |
|----------|----------|---------------------|
| **Maturidade arquitetural** | v1.0.0 com reconstrução completa do runtime, storage, extension host e web UI | Único projeto com release stable pós-reconstrução massiva |
| **Recuperabilidade de erros** | Epic #6284 visa 100% dos erros recuperáveis transparentemente ao modelo | Diferenciação técnica única — nenhum outro projeto documenta meta similar |
| **Extensibilidade** | IronHub (marketplace de skills/tools assinadas), MCP custom server, plataforma de extensões manifest-driven | Abordagem mais ambiciosa de ecossistema de plugins |
| **Comunidade ativa** | 19 PRs merged em 24h pós-launch | Maior cadência de entrega do ecossistema |

**Diferenças técnicas estruturais:**

- **Binário unificado** (`ironclaw`) como CLI rearquitetado vs. monólito legacy (`ironclaw-legacy`)
- **Failure vocabulary unificado** — 36 variantes de FailureKind consolidadas em enum único (PR #6684)
- **Memory provider plugável** (Epic #6482) — abstract interface para armazenamento de memória

**Tamanho da comunidade:**
- Indicadores de engajamento: 14 comentários na issue Epic #6284, 3 issues de Epics criadas em um único dia
- PRs com autores diversos (skytower, dorukardahan, Tranquil-Flow, entre outros) indicam CONTRIBUTOR base saudável
- Epic #6483 (Telegram Completeness) e #6484 (Shared Messaging Layer) sugerem roadmap transparente

---

## 4. Focos Técnicos Compartilhados

Os sete projetos convergem em **seis eixos técnicos** que representam demandas genuínas do mercado:

### 4.1 Suporte Multi-Canal (Mensageria)
| Projeto | Canal | Status |
|---------|-------|--------|
| NanoBot | LINE Messaging API | PR #5115 (P1, em progresso) |
| CoPaw | Feishu, DingTalk, 企业微信 | Bugs críticos resolvidos (#5757, #5995) |
| IronClaw | Telegram, Slack | Epic #6483 — produção hardening |
| PicoClaw | WeChat audio | PR #3270 — DashScope TTS |
| ZeroClaw | Bluesky, Reddit, LINE, WhatsApp Cloud | Múltiplas vulnerabilidades abertas |

**Análise:** A expansão para canais asiáticos (LINE, Feishu, DingTalk, WeChat) é o vetor de crescimento mais consistente do ecossistema.

### 4.2 Integração com Provedores Locais (Ollama, LM Studio, vLLm)
| Projeto | Issue/PR | Severidade |
|---------|----------|------------|
| NanoBot | #2570 (Ollama 404), #1590, #1947, #1478 | Alta — fricção significativa |
| Hermes Agent | CLI bloqueia 40s sem `/models` route (#69807) | P2 |
| CoPaw | #5658 (9router), #5584 (ascend-vllm) | Baixa |

**Análise:** A integração com modelos locais é problema recorrente. NanoBot é o mais afetado, com múltiplas issues abertas. Hermes Agent adiciona latência como complicador (40s de block).

### 4.3 Estabilidade em Windows
| Projeto | Problema | Severidade |
|---------|----------|------------|
| Hermes Agent | Boot loops, WSL leakage, OpenSSH compatibility | P2 (7+ issues diretas) |
| ZeroClaw | 74 test failures, config não compila | P1 |
| CoPaw | PATH concatenation, processos órfãos, índice vetorial | Alta |

**Análise:** Windows é cidadela de segunda classe em todo o ecossistema. Hermes Agent é o mais afetado qualitativamente (boot loops em produção). ZeroClaw tem o maior volume de falhas (74 tests).

### 4.4 Robustez de Cron Jobs e Automação
| Projeto | Issue | Problema |
|---------|-------|----------|
| Hermes Agent | #70294 | delegate_task descarta resultados silenciosamente |
| Hermes Agent | #70664 (merged) | Vazamento de guards em jobs cron |
| NanoBot | #3123 | CRON usa sessão própria, impede追问 |
| ZeroClaw | #8409 | Cron shell jobs precisa raw stdout |

**Análise:** Cron jobs são caso de uso crítico e subestimado. Todos os projetos com automação apresentam bugs de confiabilidade. Hermes Agent é o mais maduro em diagnóstico (PR #70664 com teste de regressão).

### 4.5 Gerenciamento de Memória e Contexto
| Projeto | Feature | Status |
|---------|---------|--------|
| IronClaw | Pluggable Memory Providers (Epic #6482) | Roadmap |
| NanoBot | Memory consolidation failures (#1174, #2549) | Bug alto |
| CoPaw | Reranker para ReMe search (#6398), Visual Compact (#6456) | Under Review |
| PicoClaw | Configurable fallback chain (#3200, 27 dias aberto) | PR aberto |

**Análise:** A janela de contexto eficiente é prioridade transversal. IronClaw e CoPaw lideram com abordagens arquiteturais (providers plugáveis, reranking). NanoBot e PicoClaw ainda lutam com estabilidade básica.

### 4.6 Plataforma de Extensões e Skills
| Projeto | Feature | Status |
|---------|---------|--------|
| IronClaw | IronHub marketplace, Unified Extension Platform | Epic #6481 |
| NanoBot | skills.sh marketplace (#5116), Unified Extension Platform (#5098) | PR P1 aberto |
| CoPaw | Codex/Qoder/MCP integrations (#6397) | Under Review |
| Hermes Agent | pre_model_route hook (#32364) | P3 |

**Análise:** Existe competição direta entre IronClaw e NanoBot no paradigma de marketplace de extensões. Ambos os projetos acreditam que a extensibilidade via skills/plugins é diferencial competitivo central.

---

## 5. Análise de Diferenciação

### 5.1 Foco Primário

| Projeto | Positioning | Público-Alvo |
|---------|-------------|--------------|
| **IronClaw** | Recoverabilidade total + ecossistema marketplace | Enterprise, desenvolvedores de agentes |
| **NanoBot** | WebUI rica +多canais + extensões Python | Produtividade pessoal, desenvolvedores |
| **CoPaw** | Memória avançada (ReMe) + third-party agents | Usuários power, equipes |
| **Hermes Agent** | Desktop-first + SSH remoting + Mistral | Desenvolvedores individuais, sysadmins |
| **ZeroClaw** | Security-first + multi-plataforma + Rust | DevOps, equipes de segurança |
| **PicoClaw** | Edge/IoT + TTS + localização | Mercados asiáticos, dispositivos embarcados |
| **NullClaw** | — | Desconhecido (projeto inativo) |

### 5.2 Arquitetura

| Projeto | Linguagem | Paradigma de Extensão | Canal Principal |
|---------|-----------|----------------------|-----------------|
| IronClaw | — | Manifest-driven, IronHub | Desktop, Web |
| NanoBot | Python? | Skills + MCP + Python native | Multi-canal |
| CoPaw | — | Plugins, third-party agents | WebConsole |
| Hermes Agent | — | Plugins, pre-model hooks | Desktop, CLI |
| ZeroClaw | Rust | Rust-native, lightweight | CLI-first |
| PicoClaw | — | TTS providers, MCP | Edge/Launcher |
| NullClaw | Docker | — | — |

### 5.3 Público e Casos de Uso

**Enterprise-grade:** IronClaw (IronHub, recoverabilidade), ZeroClaw (segurança, though undermined por vulnerabilidades ativas)

**Produtividade pessoal:** NanoBot (webui, LINE, extensions), CoPaw (ReMe memory)

**Desenvolvedores/Sysadmins:** Hermes Agent (SSH backend, desktop), ZeroClaw (Rust, CLI)

**Mercados verticais:** PicoClaw (japonês, WeChat, edge)

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Quem Está Iterando Rápido

| Projeto | Velocidade | Indicadores |
|---------|------------|--------------|
| **IronClaw** | 🚀 Muito Rápida | 19 PRs merged em 24h; release v1.0.0; 3 Epics criados em um dia |
| **NanoBot** | 🚀 Rápida | 65 issues fechadas em 24h; 37 PRs processados; ciclo saudável |
| **CoPaw** | 🚀 Rápida | 37/50 issues fechadas; 15 PRs merged; alta diversidade de contributors |

### 6.2 Quem Está Consolidando Qualidade

| Projeto | Estágio | Indicadores |
|---------|---------|-------------|
| **IronClaw** | Pós-launch hardening | 3 P1 bugs abiertos (streaming, task indefinite, history load); foco em regression tests |
| **ZeroClaw** | Auditoria de segurança | v0.9.0 como tracker de breaking changes e segurança; 6+ vulnerabilidades críticas abertas |
| **Hermes Agent** | Volume sem resolução | 50 issues abertas, 0 fechadas; manutenção de dívida técnica |

### 6.3 Gargalos Identificados

| Projeto | Gargalo | Impacto |
|---------|---------|---------|
| **PicoClaw** | Review bottleneck | 4 PRs abertos, 0 merges; ratio 9:0; 27 dias no PR #3200 |
| **NullClaw** | Inatividade total | 43 dias sem ação no PR #956; sem releases desde sempre |
| **Hermes Agent** | Capacidade de triagem | Volume alto de issues (50) sem resolução |

### 6.4 Engajamento por Reações

| Projeto | Feature com Maior Votos | Votos |
|---------|------------------------|-------|
| Hermes Agent | Suporte a Mistral provider (#20859) | **23** 👍 |
| IronClaw | Epic recoverability (#6284) | 0 👍 (mas 14 comentários) |
| NanoBot | Memory consolidation (#1174) | **2** 👍 (maior entre issues recentes) |
| ZeroClaw | — | — |

**Observação:** Hermes Agent é o único projeto com feature request >20 👍, indicando demanda comunitária forte e não atendida.

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**1. Expansão geográfica para Asia-Pacífico**
- NanoBot: LINE (Japão, Taiwan, Tailândia, Indonésia) — PR #5115
- PicoClaw: Localização japonesa + DashScope TTS + WeChat — PRs #3273, #3270
- CoPaw: Feishu, DingTalk, 企业微信 — múltiplos bugs resolvidos
- ZeroClaw: LINE bypass vulnerability (#9392)

**Extrapolação:** O ecossistema está priorizando ativamente mercados asiáticos. Plataformas de mensageria dominantes na região (LINE, Feishu, WeChat, DingTalk) são o próximo campo de batalha competitivo.

**2. Enterprise hardening como requisito**
- IronClaw: v1.0.0 com focus em recoverabilidade, production hardening de canais
- IronClaw: IronHub marketplace para skills/tools assinadas
- CoPaw: Session IDs em plugins para SSO server-side (#5547)
- Hermes Agent: Zero-downtime live upgrades (#71023)

**Extrapolação:** O mercado está migrando de "agente como toy" para "agente como infraestrutura de produção". Recuperabilidade, marketplace verificável e deployment sem downtime são expectativas crescentes.

**3. Windows como prioridade urgente**
- 7+ issues diretas no Hermes Agent
- 74 test failures no ZeroClaw
- Múltiplos issues em CoPaw (PATH, processos, índice vetorial)
- PicoClaw: systemd deployment conflict

**Extrapolação:** A base de usuários Windows é significativa e insatisfeita. Projetos que resolverem estabilidade cross-platform primeiro terão vantagem competitiva em share of market.

**4. Segurança como fragilidade emergente**
- ZeroClaw: 6+ vulner

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 Relatório do Projeto NanoBot — 2026-07-28

## 1. Panorama do Dia

O projeto NanoBot apresenta **alta atividade** na data de hoje, com **65 issues atualizadas** e **37 PRs processados** nas últimas 24 horas. Todas as 65 issues listadas foram **fechadas**, indicando um esforço massivo de triagem e resolução de pendências acumuladas. Não houve novas releases, mas **múltiplos PRs de alta prioridade (P1)** foram merged ou encontram-se em revisão aberta, cobrindo correções críticas em memory, session, gitstore e webui. A comunidade demonstra engajamento significativo com issues antigas sendo finalmente resolvidas, evidenciando um ciclo saudável de feedback → resolução.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não publicou novas versões hoje. O último ciclo de releases pode ser acompanhado em [HKUDS/nanobot/releases](https://github.com/HKUDS/nanobot/releases).

---

## 3. Progresso do Projeto

### PRs Merged/Closed Hoje (seleção de alta prioridade)

| PR | Título | Impacto |
|---|---|---|
| [#5124](https://github.com/HKUDS/nanobot/pull/5124) | `fix(gitstore): return real git object ids instead of hex-of-hex` | **Correção crítica** — `GitStore` estava fazendo double-encoding hex em IDs de objetos git, causando IDs inválidos em toda a memória. Regressão corrigida. |
| [#5123](https://github.com/HKUDS/nanobot/pull/5123) | `docs: improve README landing page` | Melhora na primeira impressão do projeto com CTA para GitHub stars e caminhos de contribuição. |
| [#5121](https://github.com/HKUDS/nanobot/pull/5121) | `fix(webui): prevent composer resize scroll jitter` | Estabiliza a experiência de usuário no composer da webui durante redimensionamento. |
| [#5119](https://github.com/HKUDS/nanobot/pull/5119) | `fix(webui): soften model selector emphasis` | Correção CSS para peso tipográfico correto em production. |
| [#5114](https://github.com/HKUDS/nanobot/pull/5114) | `fix(memory): preserve Dream input integrity` | Garante que entradas do Dream sejam preservadas integralmente durante persistência. |
| [#5113](https://github.com/HKUDS/nanobot/pull/5113) | `fix(webui): stabilize repeated model preset rows` | Resolve duplicação e linhas estaleiras ao reordenar presets. |
| [#5109](https://github.com/HKUDS/nanobot/pull/5109) | `docs: improve README discoverability` | Limpeza da badge row e reposicionamento de seções. |
| [#5077](https://github.com/HKUDS/nanobot/pull/5077) | `feat(webui): switch model presets from the composer` | Permite troca de presets via drag-and-drop no composer. |
| [#5080](https://github.com/HKUDS/nanobot/pull/5080) | `feat(brand): migrate README and WebUI assets to SVG` | Migração para assets vetoriais, removendo dependência de PNGs. |
| [#5076](https://github.com/HKUDS/nanobot/pull/5076) | `fix(webui): honor custom gateway port with Vite` | Resolve proxy reverso com porta customizada do gateway. |

### PRs Abertos em Alta Prioridade

| PR | Título | Status |
|---|---|---|
| [#5126](https://github.com/HKUDS/nanobot/pull/5126) | `fix(gitstore): return real git object ids instead of hex-of-hex` | **ABERTO** — Versão aberta do fix P1 para gitstore, aguardando merge. |
| [#5116](https://github.com/HKUDS/nanobot/pull/5116) | `feat(webui): add skills.sh marketplace and skill management` | Marketplace de skills com leaderboard 24h e sparklines de install-history. |
| [#5122](https://github.com/HKUDS/nanobot/pull/5122) | `fix(agent): read document attachments on demand` | Suporte a PDF, DOCX, XLSX, PPTX lidos sob demanda em vez de pré-processamento. |
| [#5120](https://github.com/HKUDS/nanobot/pull/5120) | `fix: session consolidation drops uploaded media paths` | **P1** — Correção para paths de mídia silenciosamente descartados durante consolidação. |
| [#5117](https://github.com/HKUDS/nanobot/pull/5117) | `fix(session): tolerate invalid idle-compaction timestamps` | **P1** — Robustez contra timestamps inválidos em `AutoCompact`. |
| [#5115](https://github.com/HKUDS/nanobot/pull/5115) | `feat(channels): add LINE Messaging API channel` | **P1** — Novo canal para LINE (Japão, Taiwan, Tailândia, Indonésia). |
| [#5098](https://github.com/HKUDS/nanobot/pull/5098) | `feat(extensions): add unified extension platform` | **P1** — Plataforma unificada de extensões nativas Python. |
| [#5112](https://github.com/HKUDS/nanobot/pull/5112) | `feat(webui): expose Dream runs as read-only sessions` | Expõe execuções do Dream como sessões read-only no WebUI. |
| [#5110](https://github.com/HKUDS/nanobot/pull/5110) | `feat(config): make status actionable for agent readiness` | Comando `nanobot status` com checagem de readiness do agent. |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

1. **[#1991](https://github.com/HKUDS/nanobot/issues/1991)** — Suporte a múltiplos modelos custom (`custom2`, `custom3`, etc.)
   - **9 comentários** | 0 👍
   - Demanda: Permitir切换 livre entre múltiplos providers custom em vez de apenas um.
   - Sinais: Usuários avançados precisam de flexibilidade para alternar entre modelos sem reconfiguração manual.

2. **[#3123](https://github.com/HKUDS/nanobot/issues/3123)** — Cron job usa sessão própria, impedindo追问
   - **8 comentários** | 0 👍
   - Problema: Mensagens enviadas por CRON não podem ser editadas ou questionadas depois pelo usuário.
   - Implicação: Experiência fragmentada em workflows automatizados.

3. **[#2570](https://github.com/HKUDS/nanobot/issues/2570)** — Ollama local retorna 404
   - **7 comentários** | 0 👍
   - Erro persistente com modelos locais (qwen2.5:0.5b). Gateway não escuta na porta configurada.

4. **[#2329](https://github.com/HKUDS/nanobot/issues/2329)** — Custom provider funciona em CLI mas quebra em canais (Feishu)
   - **6 comentários** | 0 👍
   - Erro 401 `invalid_model` especificamente em canais, sugerindo diferenças de roteamento entre modos.

5. **[#1174](https://github.com/HKUDS/nanobot/issues/1174)** — Memory consolidation falha com modelos locais/cloud
   - **5 comentários** | 2 👍
   - Comportamento: Modelos locais (ex: GLM-4.7) falham ao consolidar memória; sessões ficam travadas.
   - **Maior recepção positiva** entre as issues recentes.

---

## 5. Bugs e Estabilidade

### Correções de Bugs Resolvidas Hoje

| Issue | Severidade | Problema |
|---|---|---|
| [#4792](https://github.com/HKUDS/nanobot/issues/4792) | **Alta** | `/stop` descarta silenciosamente mensagens pendentes da queue — perda permanente. |
| [#4805](https://github.com/HKUDS/nanobot/issues/4805) | **Alta** | `suppress(Exception)` no `_run_tool` engole erros de validação silenciosamente. |
| [#2549](https://github.com/HKUDS/nanobot/issues/2549) | **Alta** | Regressão — resposta final descartada quando tool de mensagem é usada. `_sent_in_turn` sobreposto em concorrência. |
| [#1401](https://github.com/HKUDS/nanobot/issues/1401) | **Alta** | `TypeError: type 'Choice' is not subscriptable` — crash ao iniciar `nanobot agent`. |
| [#2358](https://github.com/HKUDS/nanobot/issues/2358) | **Média** | CRON jobs antigos continuam após switch de workspace. |
| [#1033](https://github.com/HKUDS/nanobot/issues/1033) | **Média** | Cache de CRON não sincroniza entre instâncias — jobs diferentes por canal. |
| [#3166](https://github.com/HKUDS/nanobot/issues/3166) | **Média** | Feishu não exibe progress notifications mesmo com `send_progress` habilitado. |

### Padrões de Instabilidade Identificados

- **Integração com provedores locais (Ollama, LM Studio, vLLm):** Múltiplas issues (#2570, #1590, #1947, #1478) indicam fricção significativa.
- **Concorrência entre canais:** Problemas com variáveis compartilhadas (`_sent_in_turn`, caches de CRON) revelam fragilidade em cenários multi-tenant.
- **Memory consolidation:** Falhas recorrentes com modelos de qualidade inferior, especialmente locais.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Solicitadas com Maior Demanda

| Issue/PR | Feature | Evidência |
|---|---|---|
| [#5098](https://github.com/HKUDS/nanobot/pull/5098) | **Unified Extension Platform** | PR P1 aberto — preenche lacuna entre skills, Apps e MCP com extensão Python nativa. |
| [#5116](https://github.com/HKUDS/nanobot/pull/5116) | **skills.sh Marketplace** | Marketplace integrado com leaderboard e install-history sparklines. |
| [#5115](https://github.com/HKUDS/nanobot/pull/5115) | **LINE Messaging API Channel** | Canal para mercados asiáticos (JP, TW, TH, ID). |
| [#1991](https://github.com/HKUDS/nanobot/issues/1991) | **Múltiplos providers custom** | 9 comentários — demanda recorrente por flexibilidade de switching. |
| [#1881](https://github.com/HKUDS/nanobot/issues/1881) | **Tool e Memory como opcionais** | Pedido para config switches que desabilitem memory update e tool registration (inspirado em OpenClaw). |
| [#3559](https://github.com/HKUDS/nanobot/issues/3559) | **WebSocket + Webhooks combinados** | Necessidade de delivery proativo em ambientes multi-tenant. |
| [#5110](https://github.com/HKUDS/nanobot/pull/5110) | **Status command com agent readiness** | Tornar status acionável com checagem de provider e model resolution. |

### Tendências de Roadmap

- **Expansão de canais:** LINE (em progresso).
- **Gestão de extensões:** Plataforma unificada em desenvolvimento ativo.
- **Melhoria de DX:** Status commands, document attachments on-demand, model preset switching.
- **Robustez de sessão:** Consolidação tolerante a timestamps inválidos, preservação de mídia.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

1. **Integração com provedores locais é problemática** — Ollama, LM Studio, vLLm exigem workarounds e configuração não-intuitiva. A documentação atual não cobre todos os edge cases. Issues #2570, #1590, #1947, #1478 são exemplares.

2. **Concorrência e multi-canal geram comportamento inesperado** — Variáveis compartilhadas entre instâncias de canal causam estados inconsistentes (CRON, message queue, sessões).

3. **Memory consolidation é frágil** — Especialmente com modelos locais ou de baixa qualidade. Usuários ficam presos em sessões.

4. **Feedback visual ausente em alguns canais** — Feishu não mostra progress notifications (#3166), e CRON não permite interações subsequentes (#3123).

5. **Flexibilidade de providers insuficiente** — Desejo de切换 rápido entre múltiplos modelos custom sem reload de config (#1991).

### Cenários de Uso Identificados

- **Agente CLI local** com modelos Ollama/LM Studio (fricção alta).
- **Canais corporativos** (Feishu, Discord) com authentication e multi-tenant.
- **Automação via CRON** com agendamento de tarefas (problemas de interatividade).
- **Extração e processamento de documentos** (PDF, DOCX, XLSX) — demanda crescente.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Atrasadas

| Issue | Idade | Status | Prioridade |
|---|---|---|---|
| [#2091](https://github.com/HKUDS/nanobot/issues/2091) | Desde 2026-03-16 | **Aguarda decisão** | Discussão sobre necessidade de `TYPE_CHECKING` imports para mypy — sem ação há 4 meses. |
| [#1328](https://github.com/HKUDS/nanobot/issues/1328) | Desde 2026-02-28 | **Aguarda design** | Skills criados por agent não são compartilhados com gateway — need Arquitetura decision. |
| [#1881](https://github.com/HKUDS/nanobot/issues/1881) | Desde 2026-03-11 | **Aguarda decisão** | Request para tool/memory como config switches — sem resposta do maintainer. |
| [#3074](https://github.com/HKUDS/nanobot/issues/3074) | Desde 2026-04-12 | **Aguarda investigação** | API session não consegue enviar mensagens para outros canais — funcional ou não? |
| [#3559](https://github.com/HKUDS/nanobot/issues/3559) | Desde 2026-04-30 | **Aguarda decisão de design** | WebSocket não substitui webhooks para delivery proativo — necessidade legítima sem caminho claro. |
| [#1558](https://github.com/HKUDS/nanobot/issues/1558) | Desde 2026-03-05 | **Aguarda implementação** | Rate limit handling para LLM providers —nanobot para completamente ao atingir limite. |

### PRs Abertos Antigos

| PR | Criado | Prioridade | Estado |
|---|---|---|---|
| [#5098](https://github.com/HKUDS/nanobot/pull/5098) | 2026-07-26 | P1 | **Em revisão** — precisa

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-28

---

## 1. Panorama do Dia

O Hermes Agent registrou **alta atividade** em 27 de julho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. Todas as 50 issues permanecem abertas, indicando um volume significativo de demandas acumuladas sem resolução recente. Três PRs foram merged/fechados, sinalizando progresso pontual em correções críticas. A plataforma **desktop para Windows** concentra a maioria dos bugs reportados (boot loops, vazamento de variáveis de ambiente, problemas de atualização), sugerindo fragilidade na experiência Windows. Não houve releases no período, e a comunidade demonstra forte interesse em features como suporte a provedores adicionais (Mistral) e melhorias no gerenciamento de sessões e cron jobs.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto encontra-se em um período de desenvolvimento ativo sem tag de versão publicada recentemente. Usuários em produção devem acompanhar o canal de releases para捕捉 correções acumuladas.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (3)

| PR | Autor | Descrição | Impacto |
|----|-------|-----------|---------|
| [#70664](https://github.com/NousResearch/hermes-agent/pull/70664) | skytow | fix(cron): release guard on execution claim failure | **Crítico** — Corrige vazamento de guards em jobs cron quando `create_execution()` falha (ex.: exaustão de file descriptors). Adiciona teste de regressão. |
| [#57419](https://github.com/NousResearch/hermes-agent/pull/57419) | dorukardahan | fix(gateway): classify planned service restarts | **Importante** — Distingue reinícios planejados de termínios inesperados, evitando falsos positivos no monitoramento de disponibilidade. |
| [#72888](https://github.com/NousResearch/hermes-agent/pull/72888) | Tranquil-Flow | fix(gateway): show channel_overrides model in /new and /model | **Cosmético** — Corrige display do modelo override em `/new` e `/model`, alinhando interface com comportamento real. |

### PRs Abertos em Destaque

- **[#72897](https://github.com/NousResearch/hermes-agent/pull/72897)** — Desktop: corrige diff color drift, replayed notifications, stall timing e quit-on-active-work (5 correções agrupadas). P2.
- **[#64190](https://github.com/NousResearch/hermes-agent/pull/64190)** — Adiciona **Tenki cloud sandbox** como novo backend de terminal (7º backend após local, docker, ssh, singularity, modal e daytona). P3.
- **[#32364](https://github.com/NousResearch/hermes-agent/pull/32364)** — Adiciona hook `pre_model_route` para plugins介入rem model routing antes da chamada à API. P3.
- **[#63659](https://github.com/NousResearch/hermes-agent/pull/63659)** — Email: routing por thread + display name configurável. Resolve poluição de contexto em sessões compartilhadas. P3.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Comentários | 👍 | Tema |
|-------|-------------|-----|------|
| [#20859](https://github.com/NousResearch/hermes-agent/issues/20859) | 9 | **23** | **Feature: Suporte a Mistral como provider de LLM** — Demanda alta por adicionar Mistral, que já tem voice models integrados ao Hermes. |
| [#71226](https://github.com/NousResearch/hermes-agent/issues/71226) | 9 | 1 | Desktop boot loop no Windows 11: WebSocket conecta mas cliente disconecta imediatamente. |
| [#70294](https://github.com/NousResearch/hermes-agent/issues/70294) | 7 | 0 | Cron: resultados de `delegate_task` são descartados silenciosamente, mas job reporta OK. |

### Análise de Demandas

**Suporte a Mistral (#20859)** é a issue mais votada com folga (23 👍), indicando que a comunidade reconhece a necessidade de expandir a lista de provedores LLM suportados. A justificativa técnica é forte: Mistral já tem integração com voice models no Hermes, sugerindo baixa fricção de implementação.

**Bugs de cron jobs (#70294)** revelam um problema de confiabilidade em automações agendadas — resultados de tarefas delegadas são perdidos sem notificação, comprometendo cenários de uso de automação.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Críticos (0 novas)
Nenhuma issue P1 aberta.

#### P2 — Altos (10 bugs reportados)

| Issue | Descrição | Plataforma |
|-------|-----------|------------|
| [#71226](https://github.com/NousResearch/hermes-agent/issues/71226) | Desktop boot loop: WebSocket conecta mas client disconecta, causando reset cycle | **Windows** |
| [#70294](https://github.com/NousResearch/hermes-agent/issues/70294) | Cron delegate_task descarta resultados silenciosamente | Multi |
| [#69807](https://github.com/NousResearch/hermes-agent/issues/69807) | CLI startup bloqueia ~40s quando provider não tem `/models` route | CLI |
| [#71201](https://github.com/NousResearch/hermes-agent/issues/71201) | write_file/patch expande `~` contra gateway HOME, não SSH remote | SSH |
| [#71826](https://github.com/NousResearch/hermes-agent/issues/71826) | Desktop installer HERMES_HOME vaza para sessões WSL2 | **Windows/WSL** |
| [#72393](https://github.com/NousResearch/hermes-agent/issues/72393) | `hermes auth --no-browser` é estruturalmente inalcançável para Anthropic | CLI |
| [#69925](https://github.com/NousResearch/hermes-agent/issues/69925) | Desktop entra boot loop quando dashboard CLI roda simultaneamente | **Windows** |
| [#71916](https://github.com/NousResearch/hermes-agent/issues/71916) | Gateway startup pruning torna sessões invisíveis ao /resume | Gateway |
| [#72408](https://github.com/NousResearch/hermes-agent/issues/72408) | vars(response) crash com TypeError mascara erro real | Agent |
| [#72553](https://github.com/NousResearch/hermes-agent/issues/72553) | MCP include/exclude filtering não é aplicado em tool_describe/tool_call | MCP |

#### P3 — Médios (20 bugs reportados)

Destaques:
- **[#71890](https://github.com/NousResearch/hermes-agent/issues/71890)** ⚠️ **Segurança**: Windows absolute-path invocations ignoram `DANGEROUS_PATTERNS` (backslash-strip normalizes path tokens).
- **[#69444](https://github.com/NousResearch/hermes-agent/issues/69444)** — Telegram: não há cutoff para mensagens Rich longas, causando renderização parcial.
- **[#70719](https://github.com/NousResearch/hermes-agent/issues/70719)** & **[#72884](https://github.com/NousResearch/hermes-agent/issues/72884)** — File-mutation verifier produz falsos positivos/negativos.

#### P4 — Baixos (1 bug)

| Issue | Descrição |
|-------|-----------|
| [#72439](https://github.com/NousResearch/hermes-agent/issues/72439) | ACP session/set_model aceita qualquer model ID, próxima rodada falha silenciosamente |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Alta

| Issue | Descrição | 👍 | Status |
|-------|-----------|-----|--------|
| [#20859](https://github.com/NousResearch/hermes-agent/issues/20859) | Suporte a Mistral como LLM provider | **23** | Aberta,Needs-decision |
| [#71023](https://github.com/NousResearch/hermes-agent/issues/71023) | Live upgrade: atualizar Hermes sem matar subagentes (zero-downtime) | 0 | Aberta |
| [#71968](https://github.com/NousResearch/hermes-agent/issues/71968) | Suporte a header X-Redmine-Signature-256 para webhooks | 0 | Aberta |
| [#71749](https://github.com/NousResearch/hermes-agent/issues/71749) | Dashboard: expor timestamps real last-used para Context inventory | 0 | Aberta |

### Sinais de Roadmap

1. **Expansão de Providers**: Suporte a Mistral (#20859) é o pedido mais desejado — evidence-driven, com justificativa de que voice models já estão integrados.

2. **Zero-Downtime Updates**: Feature #71023 aborda uma dor real de produção — atualização mata subagentes em execução.

3. **Plataforma Desktop**: PRs como #72900 (Home project sidebar), #72899 (desktop chrome redesign), e #72893 (agrupar tool calls) indicam foco em UX desktop.

4. **Novo Terminal Backend**: #64190 adiciona Tenki cloud sandbox como opção, expandindo opções de execução segura.

5. **Pre-Model Hook** (#32364): Mecanismo de plugin parainterceptar model routing antes da chamada API — extensão importante para plugins.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Estabilidade Windows** | Boot loops, vazamento de variáveis de ambiente, problemas de update no Desktop Windows | **Alta** |
| **Confiabilidade Cron** | Delegações em jobs cron são perdidas silenciosamente | **Alta** |
| **UX Desktop** | Problemas de reconnect, notificações duplicadas, timing de stall | **Média** |
| **SSH Backend** | Tilde expansion contra HOME errado, ControlMaster quebra no Windows | **Média** |
| **Autenticação** | OAuth sem browser inalcançável para Anthropic em contextos unattended | **Média** |

### Cenários de Uso Reportados

- **Automação de desktop Windows**: Usuários dependem do Hermes Desktop para workflows diários; bugs de boot loop causam interrupção direta.
- **SSH remoting**: Profissionais usam Hermes via SSH backend em ambientes Linux acessados de máquinas Windows; bugs de path e ControlMaster quebram workflows.
- **Cron jobs críticos**: Usuários confiam em delegações dentro de jobs agendados para automação de pipelines — perdas silenciosas comprometem confiança.
- **Integração Telegram**: Bots perdem comandos enviados enquanto estavam offline (cold boot discard).

### Satisfação/Insatisfação

**Insatisfação concentrada em:**
- Platforma Windows: 7+ issues relacionadas diretamente a Windows (boot loops, WSL leakage, OpenSSH compatibility, update checks).
- Confiabilidade de automações: Cron jobs e delegações não entregue reliable results.

**Satisfação inferred:**
- Engajamento comunitário alto (23+ 👍 em feature request).
- Pull requests de contributors ativos (múltiplos PRs de desktop UI com justificativas detalhadas).
- Bugs sendo addressed com PRs específicos (ex.: #70664 com teste de regressão).

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Longo Tempo

| Issue | Idade | Descrição | Prioridade |
|-------|-------|-----------|------------|
| [#50707](https://github.com/NousResearch/hermes-agent/issues/50707) | ~35 dias | SSH ControlMaster quebra no Windows OpenSSH nativo | P2 |
| [#50753](https://github.com/NousResearch/hermes-agent/pull/50753) | ~35 dias | **PR** para corrigir #50707 (aberto, awaiting merge?) | P2 |
| [#69444](https://github.com/NousResearch/hermes-agent/issues/69444) | ~6 dias | Telegram long Rich Messages sem cutoff | P3 |
| [#69807](https://github.com/NousResearch/hermes-agent/issues/69807) | ~5 dias | CLI bloqueia 40s sem /models route | P2 |

### Issues com "needs-decision" ou "needs-repro"

| Issue | Tag | Descrição |
|-------|-----|-----------|
| [#20859](https://github.com/NousResearch/hermes-agent/issues/20859) | needs-decision | Suporte a Mistral provider |
| [#71811](https://github.com/NousResearch/hermes-agent/issues/71811) | needs-decision | Telegram cold boot discard |
| [#69807](https://github.com/NousResearch/hermes-agent/issues/69807) | needs-repro | CLI startup blocks |
| [#70949](https://github.com/NousResearch/hermes-agent/issues/70949) | needs-repro | Oversized tool-result fallback |
| [#72553](https://github.com/NousResearch/hermes-agent/issues/72553) | needs-repro | MCP filtering not enforced |

### Recomendações de Priorização

1. **#71226 + #69925**: Boot loops no Windows são blocking para usuários em produção — considerar hotfix.
2. **#71890**: Bug de segurança no Windows absolute-path bypassa DANGEROUS_PATTERNS — avaliar urgência.
3. **#70294**: Cron silent failures comprometem confiabilidade de automações — alta impacto em workflows críticos.
4. **#50753**: PR aberto há 35 dias para bug SSH no Windows — review pendente.

---

*Relatório gerado em 2026-07-28. Dados de: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent).*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-28

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **atividade moderada** em 28 de julho de 2026, com 5 issues e 4 PRs atualizados nas últimas 24h. **Nenhum release foi publicado** e nenhuma issue ou PR foi fechada/merged no período, indicando que a comunidade está em fase de proposta e discussão. As contribuições concentram-se em três eixos principais: **localização internacional (japonês)**, **novos provedores de IA/TTS** e **correção de bugs de estabilidade** no frontend web e na comunicação com servidores MCP. A presença da tag `[stale]` em todas as issues e PRs sugere necessidade de atenção dos mantenedores para avançar o pipeline.

---

## 2. Lançamentos

**Nenhum novo release nas últimas 24h.**

O último release formal documentado é a versão **0.3.1** (referenciada na issue #3281 como ambiente de teste). Sem releases novos, não há breaking changes, notas de migração ou changelog a reportar neste ciclo.

---

## 3. Progresso do Projeto

Nenhum PR foi merged ou fechado nas últimas 24h. Todos os 4 PRs ativos permanecem em estado `[OPEN]`:

| # | Título | Autor | Status |
|---|--------|-------|--------|
| [#3273](https://github.com/sipeed/picoclaw/pull/3273) | `feat(webui): add Japanese (ja) localization` | honbou | Aberto |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) | `chore(providers): update default model names to 2026-07 latest` | LeaderOnePro | Aberto |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) | `feat: add DashScope TTS provider and WeChat audio file sending` | MrTreasure | Aberto |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | `feat(models): add configurable default fallback chain` | lc6464 | Aberto (27 dias) |

**Destaque:** O PR #3200 está aberto há 27 dias e introduz uma **cadeia de fallback configurável** para modelos, funcionalidade importante para resiliência em produção.

---

## 4. Temas Quentes da Comunidade

### Issues com maior potencial de impacto

| # | Título | Comentários | Reações | Link |
|---|--------|-------------|---------|------|
| #3276 | Launcher: support systemd gateway & detect external gateway | 1 | 0 | [Issue #3276](https://github.com/sipeed/picoclaw/issues/3276) |
| #3272 | Add Japanese localization to WebUI/Launcher | 1 | 0 | [Issue #3272](https://github.com/sipeed/picoclaw/issues/3272) |

**Análise:** A issue #3276 destaca um **cenário de produção real** — implantação em servidores Ubuntu com systemd. O problema central é que o `picoclaw-launcher` assume ownership do ciclo de vida do gateway, conflitando com gerenciadores de serviços. Este é um pedido de **maturidade para deployment enterprise**, indicando que o projeto está sendo adotado em ambientes server-side.

A localization para japonês (#3272) acompanha o PR #3273 e sugere **expansão da base de usuários** para mercados asiáticos.

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h

| # | Severidade | Título | Link |
|---|------------|--------|------|
| #3269 | 🔴 Alta | MCP server connection failure hangs agent loop | [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269) |
| #3281 | 🟡 Média | Web UI chat input laggy with long history | [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) |
| #3268 | 🟡 Média | exec tool action parameter should default to "run" | [Issue #3268](https://github.com/sipeed/picoclaw/issues/3268) |

### Análise

- **#3269 (Crítica):** O hang do loop de agente quando a conexão com servidor MCP falha causa **indisponibilidade total** da interface de chat. Isso é um **SLA-breaking bug** para ambientes de produção. Reproduzido com PicoClaw nightly (commit 2cf030d2) e Go 1.25.11.

- **#3281 (Média):** Desempenho degradado no input do chat quando o histórico cresce — sintoma clássico de **reatividade mal gerenciada** no frontend React/similar. Impacta experiência do usuário em sessões longas.

- **#3268 (Média):** A ausência de valor default para `action` no tool `exec` causa falhas unpredictíveis em chamadas de agentes LLM. Afeta **todos** os usuários que usam o tool sem especificar `action: "run"`.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em discussão

| # | Título | Link |
|---|--------|------|
| #3276 | systemd gateway support & external gateway detection | [Issue #3276](https://github.com/sipeed/picoclaw/issues/3276) |
| #3272 | Japanese localization (ja/ja-JP) | [Issue #3272](https://github.com/sipeed/picoclaw/issues/3272) |

### Features em desenvolvimento (PRs)

| # | Título | Descrição | Link |
|---|--------|-----------|------|
| #3270 | DashScope TTS + WeChat audio | Provedor TTS da Alibaba + envio de áudio via WeChat | [PR #3270](https://github.com/sipeed/picoclaw/pull/3270) |
| #3271 | Atualização de modelos 2026-07 | Refresh de IDs de modelos em 9 provedores (GPT-5.6, Claude, etc.) | [PR #3271](https://github.com/sipeed/picoclaw/pull/3271) |
| #3200 | Configurable default fallback chain | Cadeia de fallback de modelos configurável via UI | [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) |

**Sinais de roadmap:** A adição de DashScope TTS indica **expansão para o mercado chinês**. A atualização massiva de modelos (#3271) confirma que o projeto mantém compatibilidade com as versões mais recentes de provedores. A cadeia de fallback (#3200) aponta para **resiliência e alta disponibilidade**.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Dor | Cenário | Impacto |
|-----|---------|---------|
| Conflito com systemd | Deploy em servidores Ubuntu — launcher mata gateway gerenciado externamente | ⛔ Impossibilita deployments production-grade |
| Fallback de modelos | Quando modelo padrão falha, não há mecanismo de fallback | ⚠️ Degradação de serviço |
| MCP connection resilience | Conexão MCP instável causa hang total | ⛔ Chat fica não responsivo |
| Performance em sessões longas | Input laggy com histórico extenso | 📉 Experiência degradada |

### Cenários de uso emergentes

O projeto está sendo adotado em:
- **Servidores headless** (VMs Ubuntu com systemd) — indica uso em infraestrutura de produção
- **Ambientes com múltiplos provedores de IA** — necessidade de fallback e switch dinâmico
- **Mercados não-anglofônicos** — demanda por localização (japonês em curso)

### Satisfação

Os usuários estão **ativamente contribuindo com código** (PRs de features), sugerindo engajamento positivo. No entanto, a ausência de resposta em issues antigas ([stale]) pode indicar **fadiga de mantenedores** ou gargalo no processo de review.

---

## 8. Backlog que Merece Atenção

### Issues sem movimento recente (requer triagem)

| # | Título | Criado | Atualizado | Link |
|---|--------|--------|------------|------|
| #3276 | systemd gateway support | 2026-07-20 | 2026-07-27 | [Issue #3276](https://github.com/sipeed/picoclaw/issues/3276) |
| #3272 | Japanese localization | 2026-07-20 | 2026-07-27 | [Issue #3272](https://github.com/sipeed/picoclaw/issues/3272) |
| #3269 | MCP server hang | 2026-07-20 | 2026-07-27 | [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269) |
| #3268 | exec tool action default | 2026-07-19 | 2026-07-27 | [Issue #3268](https://github.com/sipeed/picoclaw/issues/3268) |

### PRs aguardando review

| # | Título | Autor | Criado | Link |
|---|--------|-------|--------|------|
| #3200 | Configurable fallback chain | lc6464 | 2026-07-01 | [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) |
| #3273 | Japanese localization | honbou | 2026-07-20 | [PR #3273](https://github.com/sipeed/picoclaw/pull/3273) |
| #3270 | DashScope TTS + WeChat | MrTreasure | 2026-07-20 | [PR #3270](https://github.com/sipeed/picoclaw/pull/3270) |
| #3271 | Model updates 2026-07 | LeaderOnePro | 2026-07-20 | [PR #3271](https://github.com/sipeed/picoclaw/pull/3271) |

### Priorização recomendada

1. **🔴 #3269** — Bug crítico: MCP hang. Pode impactar todos os usuários em produção.
2. **🟡 #3200** — Feature de resiliência aguardando há 27 dias.
3. **🟡 #3273/#3272** — Localização japonesa com PR pronto para merge.
4. **🟡 #3268** — UX improvement para o tool exec.
5. **🟡 #3281** — Performance regression no frontend.

---

## Métricas de Saúde do Projeto (2026-07-28)

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 5 |
| PRs abertos (24h) | 4 |
| Releases (24h) | 0 |
| Issues fechadas (24h) | 0 |
| PRs merged (24h) | 0 |
| Ratio abertura/fechamento | 9:0 ⚠️ |

**Veredicto:** O projeto está **saudável em volume de contribuição**, mas apresenta **gargalo no pipeline de review/merge**. A concentração de PRs aguardando há dias/dezenas de dias, combinada com 0 fechamentos, sugere necessidade de **triagem ativa** por parte dos mantenedores para evitar frustração na comunidade.

---

*Relatório gerado em 2026-07-28 com base em dados do GitHub (sipeed/picoclaw).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-28

## 1. Panorama do dia

O projeto IronClaw viveu um marco histórico com o lançamento da versão **1.0.0** (2026-07-27), marcando a primeira release estável após uma reconstrução completa da arquitetura. A atividade foi intensa: **37 issues** e **50 PRs** atualizados nas últimas 24h, com **19 PRs merged/fechados** — indicando que a equipe está executando com alta cadência de entrega. Os esforços atuais concentram-se na hardening da v1 e no tackle de issues do tipo *v1-launch-checklist* (configuração de canais, UX da WebUI e estabilidade operacional). A saúde geral é positiva, com a arquitetura épica da v1 estabelecida e vários subsistemas (memory, channels, extensions) sendo refatorados em paralelo.

---

## 2. Lançamentos

### 🎉 ironclaw-v1.0.0 (2026-07-27)

| Aspecto | Detalhe |
|---|---|
| **Release Notes** | [Release #6736](https://github.com/nearai/ironclaw/pull/6736) |
| **Tag** | `ironclaw-v1.0.0` |

**Mudanças estruturais:**

- O binário `ironclaw` **é agora o CLI rearquitetado** (Reborn)
- O monólito v1 anterior é builds como **`ironclaw-legacy`**
- Reconstrução do *agent runtime*, *storage*, *extension host* e *web UI* do zero

**Nota de migração:**
> Esta release **não é um incremento da linha 0.29.x** — é uma reconstrução completa. Usuários vindos da versão legacy devem seguir o path documentado em [#6725](https://github.com/nearai/ironclaw/issues/6725) (Tracking: Migration path pre-Reborn → IronClaw v1).

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (hoje)

| # | PR | Resumo | Relevância |
|---|---|---|---|
| [#6684](https://github.com/nearai/ironclaw/pull/6684) | `one failure vocabulary` | Unificou 5 enums de failure-kind em `FailureKind` (36 variantes) + projeções; corrigiu 6 bugs de retry/terminal malicios. Fecha item do Epic #6284. | 🔴 Crítica |
| [#6736](https://github.com/nearai/ironclaw/pull/6736) | `chore(release): bump ironclaw to 1.0.0` | Tag da primeira release estável da arquitetura Reborn. | 🔴 Crítica |
| [#3847](https://github.com/nearai/ironclaw/pull/3847) | `Add filesystem-backed Reborn skill bundle source` | Adicionou `FilesystemSkillBundleSource` com raízes configuráveis (`/system/skills`, `/skills`). | 🟡 Média |
| [#6735](https://github.com/nearai/ironclaw/pull/6735) | `fix(runner): compaction outage is not a driver bug` | Corrigiu categorização de `CompactionUnavailable` — não era mais mapeada como `driver_bug`. | 🟢 Baixa |
| [#6722](https://github.com/nearai/ironclaw/pull/6722) | `test(integration): expired-credential resume arm` | Cobriu o cenário de token expirado durante tarefa + reconexão do usuário. | 🟢 Baixa |

**Avaliação:** A unification do failure vocabulary (#6684) é um passo fundamental para o contrato de recoverabilidade do Epic #6284, que visa garantir que o agente sobreviva e se recupere de **100% dos erros** de forma transparente ao modelo.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| # | Título | Comentários | 👍 | Categoria | Link |
|---|---|---|---|---|---|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | **[EPIC] error-recoverability endgame** | 14 | 0 | Epic / Recoverabilidade | [Issue](https://github.com/nearai/ironclaw/issues/6284) |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | **[EPIC] Hermetic capability and journey testing platform** | 3 | 0 | Epic / Testing | [Issue](https://github.com/nearai/ironclaw/issues/6524) |
| [#6581](https://github.com/nearai/ironclaw/issues/6581) | **429 Too Many Requests on agent-stg** | 3 | 0 | Bug / Staging | [Issue](https://github.com/nearai/ironclaw/issues/6581) |
| [#4548](https://github.com/nearai/ironclaw/issues/4548) | **Bug: duplicate `model` field (DeepSeek 400)** | 2 | 0 | Bug (CLOSED) | [Issue](https://github.com/nearai/ironclaw/issues/4548) |
| [#6522](https://github.com/nearai/ironclaw/issues/6522) | **IronClaw não sabe configurar Telegram** | 2 | 0 | Docs / UX | [Issue](https://github.com/nearai/ironclaw/issues/6522) |

**Análise:**

- **#6284** domina o debate técnico com 14 comentários. A comunidade está profundamente engajada no contrato de recoverabilidade de erros — um pilar arquitetural da v1. O objetivo de "model sees 100% of errors it can recover from" atrai discussão sobre a granularidade de diagnóstico e a semântica de retry.
- **#6524** (testing platform) tem 3 comentários e refleja a necessidade de cobertura determinística de capabilities e jornadas críticas — uma demanda de qualidade madura.
- **#6581** e **#6522** indicam pontos de atrito no onboarding: rate limiting na staging e documentação ausente de configuração de canais.

---

## 5. Bugs e Estabilidade

### Bugs Abertos (por severidade inferred)

| Severidade | # | Descrição | Link |
|---|---|---|---|
| **P1** | [#6720](https://github.com/nearai/ironclaw/issues/6720) | Task executa indefinidamente + stop button falha em cancelar | [Issue](https://github.com/nearai/ironclaw/issues/6720) |
| **P1** | [#6719](https://github.com/nearai/ironclaw/issues/6719) | Conversation history falha ao carregar após erros 503 | [Issue](https://github.com/nearai/ironclaw/issues/6719) |
| **P1** | [#6718](https://github.com/nearai/ironclaw/issues/6718) | Streaming para de funcionar enquanto "Reconnecting" | [Issue](https://github.com/nearai/ironclaw/issues/6718) |
| **P2** | [#6581](https://github.com/nearai/ironclaw/issues/6581) | 429 Too Many Requests em WebChat v2 SSE | [Issue](https://github.com/nearai/ironclaw/issues/6581) |
| **P2** | [#6717](https://github.com/nearai/ironclaw/issues/6717) | Agent dá instruções incorretas de pareamento Telegram após sucesso | [Issue](https://github.com/nearai/ironclaw/issues/6717) |
| **P2** | [#6716](https://github.com/nearai/ironclaw/issues/6716) | Model afirma incorretamente que Slack está indisponível | [Issue](https://github.com/nearai/ironclaw/issues/6716) |
| **P2** | [#6713](https://github.com/nearai/ironclaw/issues/6713) | "Always allow" persiste quando `gate` prop muda (ApprovalCard) | [Issue](https://github.com/nearai/ironclaw/issues/6713) |
| **P3** | [#6711](https://github.com/nearai/ironclaw/issues/6711) | Tema de aparência não persiste através de SPA navigation | [Issue](https://github.com/nearai/ironclaw/issues/6711) |
| **P3** | [#6702](https://github.com/nearai/ironclaw/issues/6702) | Tipografia WebUI inconsistente entre páginas | [Issue](https://github.com/nearai/ironclaw/issues/6702) |
| **P3** | [#6575](https://github.com/nearai/ironclaw/issues/6575) | Erro de systemd logo após `ironclaw onboard` (Ubuntu) | [Issue](https://github.com/nearai/ironclaw/issues/6575) |

**Avaliação de estabilidade:**
Três bugs P1 afetam a experiência produtiva na staging de agentes. Especialmente crítico: o bug de streaming que trava enquanto "Reconnecting" (#6718) pode degradar severamente a UX em produção. O PR #6737 ([restore extension behaviors](https://github.com/nearai/ironclaw/pull/6737)) sugere que uma regressão silenciosa ocorreurecentemente, reforçando a necessidade de atenção aos testes de regressão.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Epics criados em 2026-07-27 (sinais de direção)

| # | Feature | Link |
|---|---|---|
| [#6734](https://github.com/nearai/ironclaw/issues/6734) | **IronClaw agent acessa própria documentação** para guiar configuração de tools/channels | [Issue](https://github.com/nearai/ironclaw/issues/6734) |
| [#6731](https://github.com/nearai/ironclaw/issues/6731) | **Integrar IronHub** — marketplace runtime de tools/skills assinadas | [Issue](https://github.com/nearai/ironclaw/issues/6731) |
| [#6727](https://github.com/nearai/ironclaw/issues/6727) | **Suporte a MCP server custom/arbitrário** (hoje só 2 hardcoded) | [Issue](https://github.com/nearai/ironclaw/issues/6727) |
| [#6641](https://github.com/nearai/ironclaw/issues/6641) | **Skill Self-Creation Design** — hot-swappable, manifest-based | [Issue](https://github.com/nearai/ironclaw/issues/6641) |
| [#6484](https://github.com/nearai/ironclaw/issues/6484) | **Epic: Shared Messaging Capability Layer** | [Issue](https://github.com/nearai/ironclaw/issues/6484) |
| [#6483](https://github.com/nearai/ironclaw/issues/6483) | **Epic: Telegram Completeness and Production Hardening** | [Issue](https://github.com/nearai/ironclaw/issues/6483) |
| [#6482](https://github.com/nearai/ironclaw/issues/6482) | **Epic: Pluggable Memory Providers** | [Issue](https://github.com/nearai/ironclaw/issues/6482) |
| [#6481](https://github.com/nearai/ironclaw/issues/6481) | **Epic: Unified Manifest-Driven Extension Platform** | [Issue](https://github.com/nearai/ironclaw/issues/6481) |
| [#6725](https://github.com/nearai/ironclaw/issues/6725) | **Migration path: legacy → IronClaw v1 (Reborn)** | [Issue](https://github.com/nearai/ironclaw/issues/6725) |

### PRs de Features em Andamento

| # | Feature | Link |
|---|---|---|
| [#6692](https://github.com/nearai/ironclaw/pull/6692) | `docs: restructure docs site around 1.0 binary` | [PR](https://github.com/nearai/ironclaw/pull/6692) |
| [#6724](https://github.com/nearai/ironclaw/pull/6724) | `feat(memory): rebuild memory provider contract around declared capabilities` | [PR](https://github.com/nearai/ironclaw/pull/6724) |
| [#6364](https://github.com/nearai/ironclaw/pull/6364) | `feat(channels): Telegram/Slack attachments through restricted egress` | [PR](https://github.com/nearai/ironclaw/pull/6364) |
| [#6678](https://github.com/nearai/ironclaw/pull/6678) | `feat(reborn): bring product command pipeline live (/model, /status)` | [PR](https://github.com/nearai/ironclaw/pull/6678) |
| [#6695](https://github.com/nearai/ironclaw/pull/6695) | `feat(sandbox): leaf-scoped mount containment + per-user sandbox identity` | [PR](https://github.com/nearai/ironclaw/pull/6695) |

**Sinais de roadmap:**
A direção pós-v1.0.0 é clara: (1) **extensibilidade via marketplace (IronHub)**, (2) **memória plugável**, (3) **canal Telegram em nível de produção**, e (4) **agente com acesso à própria documentação**. A feature de MCP server custom indica abertura para ecossistema de terceiros.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | evidência | Link |
|---|---|---|
| **Rate limiting excessivo em produção** | WebChat v2 retorna 429 sob uso normal multi-thread; badge fica "Disconnected" / "Reconnecting" | [#6581](https://github.com/nearai/ironclaw/issues/6581) |
| **Onboarding de Telegram confuso** | Usuários não sabem configurar Telegram localmente ou em agent.near.ai; documentação ausente | [#6522](https://github.com/nearai/ironclaw/issues/6522) |
| **Instruções incorretas pós-pareamento** | Agent continua pedindo pareamento Telegram mesmo após conexão estabelecida | [#6717](https://github.com/nearai/ironclaw/issues/6717) |
| **Model hallucina limitações** | Modelo incorretamente afirma que Slack está indisponível/instalado | [#6716](https://github.com/nearai/ironclaw/issues/6716) |
| **Streaming trava em

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)

**Data de referência:** 2026-07-28  
**Fonte:** github.com/agentscope-ai/QwenPaw

---

## 1. Panorama do Dia

O projeto CoPaw/QwenPaw registrou **alta atividade** nas últimas 24 horas, com 50 issues atualizadas (37 fechadas, 13 abertas) e 48 PRs movimentados (15 merged/fechados, 33 abertos). Nenhum release foi publicado. A atividade concentra-se em **correções de bugs críticos de canais** (Feishu, DingTalk), **evoluções de infraestrutura** (navegador unificado, checkpoint management) e **features de memória/busca** (reranker, visual compact). A comunidade demonstra engajamento significativo em topics de estabilidade — 6 dos 30 issues mais comentados tratam de crashes, vazamentos de memória ou perda de dados.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto encontra-se em ciclo ativo de desenvolvimento, com PRs significativos em revisão/merge pipeline (ver Seção 3). Os usuários em versões `2.0.0` e `2.0.1` devem monitorar issues de migração de histórico (#6068) caso ainda não tenham atualizado.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Recentes

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#6462](https://github.com/agentscope-ai/QwenPaw/pull/6462) | docs(sandbox): clarify native Windows sandbox support | 1105623876 | Atualiza documentação — Windows agora possui backends sandbox nativos (AppContainer/restricted-token), removendo necessidade de WSL2 |
| [#6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) | fix(scroll): preserve session IDs during history migration | niceIrene | **Crítico** — Corrige migração de histórico que perdia `session_id` canônico, causando dados órfãos e falhas de recall |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | Add per-session model overrides | mango8853 | Feature de personalização — permite LLMs diferentes por conversa no mesmo agente |

### PRs Abertos em Estágio Avançado (Under Review)

| # | PR | Descrição | Estágio |
|---|-----|-----------|---------|
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | feat: add reranker support for ReMe memory search | Integração de re-ranking via API externa para busca de memória |
| [#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) | feat(third-party agents): integrate Codex, Qoder, Skills, and MCP | Arquitetura plugável para agentes de terceiros |
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | feat(apps): add qwenpaw-creator app | Plugin de criação de vídeos (script → assets → storyboard) |
| [#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387) | feat(channels): support on-demand installation | Instalação sob-demanda de SDKs de canais pela Console |

**Observação:** PR #6276 (unified browser) é dependência de #6157 (chrome extension) e está em desenvolvimento ativo.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

1. **[#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757)** — Feishu: mensagens não recebem resposta após primeira interação (14 comentários)
   - **Severidade:** Alta | **Status:** CLOSED
   - Cenário: canal Feishu (docker ou AgentScope Platform) — primeira mensagem responde, subsequentes silenciosamente ignoradas

2. **[#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995)** — Mensagens descartadas quando sessão está ocupada (7 comentários)
   - **Severidade:** Alta | **Status:** CLOSED
   - Ausência de queue/error handling durante callbacks ou tool calls em andamento

3. **[#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725)** — Console streaming causa lag no navegador (6 comentários)
   - **Status:** CLOSED
   - Comparação com DeepSeek (sem lag) indica possibilidade de gargalo no rendering do frontend

4. **[#4895](https://github.com/agentscope-ai/QwenPaw/issues/4895)** — Loop infinito de compressão de imagem causando alucinação (5 comentários)
   - **Severidade:** Alta | **Status:** CLOSED
   - Ciclo compress → re-inject → compress; afeta upload de imagens

5. **[#5090](https://github.com/agentscope-ai/QwenPaw/issues/5090)** — Ferramenta de proteção `rm` pode ser contornada via Python (5 comentários)
   - **Severidade:** Crítica (segurança) | **Status:** CLOSED
   - Bypass da sandbox: `rm` bloqueado, mas `python -c "os.remove()"` funciona

### Padrões Identificados

- **Canais de mensageria** (Feishu, DingTalk, 企业微信) concentram ~40% dos issues mais comentados — indicativo de surface area frágil
- **Memória e contexto** geram demanda recorrente: busca (#5773, #5859, #6398), compressão (#4872, #4921, #6456), persistência (#5259)
- **Windows** aparece em múltiplos issues: PATH concatenation (#6239), processos órfãos (#4844), índice vetorial (#5259)

---

## 5. Bugs e Estabilidade

### Por Severidade (baseado em impacto funcional)

| Severidade | Qtd | Exemplos |
|------------|-----|----------|
| **🔴 Crítica** | 3 | [#5090](https://github.com/agentscope-ai/QwenPaw/issues/5090) (bypass segurança), [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) (Feishu mudo), [#4895](https://github.com/agentscope-ai/QwenPaw/issues/4895) (loop compressão) |
| **🟠 Alta** | 5 | [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) (mensagensDrop), [#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964) (mapeamento DB perdido em 2.0.0), [#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259) (índice vetorial Windows), [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) (max_tokens ignorado) |
| **🟡 Média** | 4 | [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) (lag streaming), [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) (CPU Edge), [#6467](https://github.com/agentscope-ai/QwenPaw/issues/6467) (setup node), [#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844) (processos órfãos) |
| **🟢 Baixa** | 3 | [#5541](https://github.com/agentscope-ai/QwenPaw/issues/5541) (ollama cloud), [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) (ascend-vllm), [#5658](https://github.com/agentscope-ai/QwenPaw/issues/5658) (9router) |

### Issues Abertas Ainda Não Resolvidas

| # | Título | Status | Notas |
|---|--------|--------|-------|
| [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | max_output_tokens OpenAI não funciona | **OPEN** | Afeta 2.0.0.post3 + agentscope 2.0.4.post1 |
| [#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457) | Task mode gera histórico duplicado | **OPEN** | 24/07 — início recente |
| [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | Edge+Wayland CPU 100% | **OPEN** | 25/07 — WebSocket/rendering suspects |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| # | Feature | Autor | Seção do Produto | Status |
|---|---------|-------|------------------|--------|
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | Reranker para ReMe memory search | lecheng2018 | Memória | Under Review |
| [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) | GUI automation nativa (Windows/macOS) | jinglinpeng | Ferramentas | OPEN |
| [#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456) | Visual Compact (compressão visual) | Leirunlin | Contexto | OPEN |
| [#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) | Codex/Qoder/MCP integrations | rayrayraykk | Agentes | Under Review |
| [#6504](https://github.com/agentscope-ai/QwenPaw/pull/6504) | Unificação de diretórios de projeto | rayrayraykk | Workspace | OPEN |
| [#6269](https://github.com/agentscope-ai/QwenPaw/pull/6269) | Workspace checkpoint management | y1y5 | Recuperação | OPEN |
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | QwenPaw Creator app | xuanrui-L | Plugins | Under Review |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Safe model discovery infrastructure | wangfei010313 | Providers | OPEN |

### Feature Requests Recentes da Comunidade

| # | Título | Demanda |
|---|--------|---------|
| [#5427](https://github.com/agentscope-ai/QwenPaw/issues/5427) | Kimi Coding Plan Models | Suporte a endpoint Anthropic-compatible para Kimi K2 Code |
| [#5609](https://github.com/agentscope-ai/QwenPaw/issues/5609) | Custom model protocol | Suporte a endpoints não-padrão `/v1/images/generations` |
| [#5593](https://github.com/agentscope-ai/QwenPaw/issues/5593) | DingTalk image preview | Upload para media_id ao invés de file message |
| [#5547](https://github.com/agentscope-ai/QwenPaw/issues/5547) | SessionId em plugin tools | Exposição de sessionId para MCP em uso server-side |

**Sinais de roadmap inferidos:**
- Agentes de terceira geração (Codex, Qoder, MCP) indicam direção de interoperabilidade
- Visual Compact e Reranker apontam para estratégia de janela de contexto mais eficiente
- Desktop GUI automation (Tauri) sugere expansão beyond-browser

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

1. **Integração com canais corporativos é instável** — Feishu e 企业微信 apresentam falhas de resposta, perda de mensagens e incompatibilidade com formatos interativos (cards). Usuários empresariais em produção relatam frustração.

2. **Windows é cidadão de segunda classe** — Múltiplos issues: índice vetorial não persiste, PATH concatenation quebra npm globals, processos de browser não são limpos. Usuários Windows relatam experiência significativamente pior.

3. **Contexto estoura rápido** — Images como Base64, ausência de compressão e falta de controle de janela de contexto geram reclamações recorrentes. Usuários com histórico longo são penalizados.

4. **Segurança da sandbox é questionável** — Bypass via Python (#5090) e memory leak em subprocess (#4968) geram preocupação em ambientes onde isolamento é crítico.

### Cenários de Uso Observados

- **Agente server-side com SSO:** Busca por sessionId exposto em plugins (#5547)
- **Cross-device via Edge:** Acesso remoto a QwenPaw com problemas de performance (#6460)
- **Docker deployment:** Feishu em container apresenta falhas específicas de ambiente (#5757)
- **Desktop automation:** Interesse em controle nativo Windows/macOS além do browser (#6424)

### Satisfação

| Indicador | Observação |
|-----------|------------|
| Engajamento | Alto — 50 issues e 48 PRs em 24h |
| Resolução | Bom — 37/50 issues fechadas, 15/48 PRs merged |
| Issues críticas abertas | Baixo — apenas 2 issues abertas de alta severidade |
| Novas features | Diversificado — memória, contexto, plugins, channels |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta por >7 dias

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|-------------|------------|
| [#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457) | Task mode gera histórico duplicado | 2026-07-24 | 3 | Alta |
| [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | Edge CPU 100% | 2026-07-25 | 3 | Média |
| [#6467](https://github.com/agentscope-ai/QwenPaw/issues/6467) | Setup node falha | 2026-07-25 | 3 | Baixa |
| [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | max_tokens não funciona | 2026-07-19 | 4 | **Alta** |
| [#5773](https://github.com/agentscope-ai/QwenPaw/issues/5773) | Memory search quebra OCG | 2026-07-04 | 4 | Média |

### PRs Abertos Sem Review

| # | PR | Criado | Impacto |
|---|-----|--------|---------|
| [#6504](https://github.com/agentscope-ai/QwenPaw/pull/6504) | Unificar diretórios de projeto | 2026-07-27 | Workspace |
| [#6503](https://github.com/agentscope-ai/QwenPaw/pull/6503) | Token usage por agente | 2026-07-27 | Observabilidade |
| [#6502](https://github.com/agentscope-ai/QwenPaw/pull/6502) | Fix dev setup test extra | 2026-07-27 | DX/Contribuição |
| [#6500](https://github.com/agentscope-ai/QwenPaw/pull/6500) | CDP auth opt-in | 2026-07-27 | Segurança |
| [#6489](https://github.com/agentscope-ai/QwenPaw/pull/6489) | Driver unit tests | 2026-07-27 | Qualidade |
| [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) | Desktop GUI automation | 2026-07-24 | Feature importante |
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | Unified browser SDK | 2026-07-20 | Infra crítica |

### Recomendações de Priorização

1. **#6258** (max_tokens não funciona) — Afeta configuração de custo/controle para usuários de API Open

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-28

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **atividade intensa** nas últimas 24 horas, com 50 issues e 50 PRs atualizados. Não houve lançamentos novos. O cenário atual é marcado por uma **quantidade elevada de vulnerabilidades de segurança críticas** reportadas (múltiplos bypasses de autorização, vazamentos de chaves de API e tokens), além de problemas de estabilidade em testes e CI — especialmente no Windows e macOS. O time mantém resposta ativa, com vários PRs em progresso para corrigir bugs de alta prioridade.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24 horas.**

O último release estável aparente é a versão **v0.8.3** (referenciada em múltiplos issues). A versão **v0.9.0** está em desenvolvimento ativo como tracker de segurança e breaking changes ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)).

---

## 3. Progresso do Projeto

### PRs em destaque (em progresso ou aguardando ação)

| PR | Título | Tamanho | Prioridade | Descrição |
|----|--------|---------|------------|-----------|
| [#9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424) | fix(runtime): reject semantic-empty terminal completions | XL | P1 | Centraliza normalização de tags `<think>` para rejeitar respostas vazias semanticamente |
| [#9195](https://github.com/zeroclaw-labs/zeroclaw/pull/9195) | feat(acp): accept resource.blob in prompts and add deliver_file | XL | P2 | Suporte a recursos binários embarcados em prompts ACP |
| [#9457](https://github.com/zeroclaw-labs/zeroclaw/pull/9457) | fix(daemon): restore foreground startup feedback | L | P2 | Restaura feedback visual no startup em foreground |
| [#9454](https://github.com/zeroclaw-labs/zeroclaw/pull/9454) | fix(config): don't scaffold required-field sections in bare `config init` | S | P1 | Corrige config init que gerava seções inválidas |
| [#9449](https://github.com/zeroclaw-labs/zeroclaw/pull/9449) | fix(log): preserve JSONL rows during schema migration | M | Medium | Corrige migração de logs JSONL |
| [#9443](https://github.com/zeroclaw-labs/zeroclaw/pull/9443) | fix(parser): omit malformed tool payloads from logs | XS | High | Remove dados maliciosos de payloads de logs |
| [#9451](https://github.com/zeroclaw-labs/zeroclaw/pull/9451) | refactor(observability): retire dormant DORA telemetry | L | High | Remove código DORA não utilizado |

**Observação:** Nenhum PR foi merged ou fechado nas últimas 24h — todos estão em estado `OPEN`.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

1. **[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** — 14 comentários
   - **74 test failures no Windows** por comandos Unix-only eencoding de console
   - Impacta: CI não detecta falhas no Windows
   - Prioridade: **P1** | Severidade: S2

2. **[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)** — 6 comentários
   - Batch de media groups do Telegram em um único turn multimodal
   - Prioridade: **P2** | Status: in-progress

3. **[#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)** — 6 comentários
   - Nextcloud Talk usa API de mensagem de bot incorreta
   - Prioridade: **P2** | Risco: high

4. **[#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)** — 4 comentários
   - Landlock bloqueia shell access a arquivos necessários no Fedora
   - Prioridade: **P1** | Risco: high

5. **[#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386)** — 4 comentários
   - **Vazamento de chave Gemini API** na URL em erros
   - Prioridade: **P1** | Risco: **critical**

---

## 5. Bugs e Estabilidade

### 🔴 Críticos / P1 (workflow bloqueado ou risco de segurança)

| Issue | Título | Severidade | Canal/Root Cause |
|-------|--------|------------|------------------|
| [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) | Gemini API key vaza em URLs de erro | S0 - data leak | security:leak-detector |
| [#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) | Bluesky/Reddit sem autorização de sender | S0 - security | channel:bluesky, reddit |
| [#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392) | LINE pula allowlist e pairing handshake | S0 - security | channel:line |
| [#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417) | WhatsApp Cloud vaza token de aprovação | S0 - data leak | channel:whatsapp |
| [#9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389) | POST /api/pair usa header attacker-supplied | S0 - security | gateway, security:pairing |
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | delegate bypassa tool allowlist do pai | S0 - security | tool:delegate |
| [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | Respostas terminais incompletas reportadas como sucesso | S1 - blocked | provider:anthropic, tool:delegate |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | Desktop app macOS abre em branco/sem janela | S1 - blocked | desktop, tauri |
| [#9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436) | `config init` gera config inválida que falha no strict loader | S2 - degraded | config, quickstart |

### 🟡 Média Severidade / P2

| Issue | Título | Severidade | Canal/Root Cause |
|-------|--------|------------|------------------|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures no Windows | S2 - degraded | ci, runtime, tool, tests |
| [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) | Landlock bloqueia shell no Fedora | S2 - degraded | runtime, tool:shell |
| [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) | Emergency stop é CLI-only, runtime ignora | S2 - degraded | cli, security |
| [#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808) | CLI prompts não dão feedback após paste | S2 - degraded | config, core |
| [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | cachePoint da Bedrock não pode ser desabilitado | S3 - minor | provider:bedrock |

### 🟢 Baixa Severidade / P3

| Issue | Título | Severidade | Canal |
|-------|--------|------------|--------|
| [#7269](https://github.com/zeroclaw-labs/zeroclaw/issues/7269) | docs build com warning noise | S3 - minor | docs |
| [#7099](https://github.com/zeroclaw-labs/zeroclaw/issues/7099) | Route status output via i18n | enhancement | core |

### 🏗️ Problemas de CI/Testes

| Issue | Título | Severidade | Impacto |
|-------|--------|------------|---------|
| [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) | cargo test falha em 19/20 runs + mutex poison | S2 - degraded | test suite |
| [#9422](https://github.com/zeroclaw-labs/zeroclaw/issues/9422) | zeroclaw-config não compila no Windows | S2 - degraded | Windows CI |
| [#9429](https://github.com/zeroclaw-labs/zeroclaw/issues/9429) | Tests usam wall-clock timeouts como assertions | S2 - degraded | macOS CI flakiness |
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) | Run tests on Windows/macOS (não só Linux) | enhancement | CI expansion |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento Ativo

| Issue/PR | Título | Prioridade | Área |
|----------|--------|------------|------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | **v0.9.0 tracker**: auth, security, gateway, breaking changes | P2 | architecture |
| [#9195](https://github.com/zeroclaw-labs/zeroclaw/pull/9195) | ACP: resource.blob em prompts + deliver_file | P2 | channel:acp |
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | Matrix: single-message progress drafts | P2 | channel:matrix |
| [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) | Skills: compact injection como default, deprecate full | P2 | skills |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) | CI: improve cached Rust builds | P2 | ci |
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) | Agent: live provider identity on usage events | P1 | agent, provider |
| [#8983](https://github.com/zeroclaw-labs/zeroclaw/issues/8983) | Proposal: category-scoped read_memory_from | P2 | agent, memory, security |
| [#8409](https://github.com/zeroclaw-labs/zeroclaw/issues/8409) | Cron shell jobs: raw stdout output | P2 | config, cron |
| [#9311](https://github.com/zeroclaw-labs/zeroclaw/pull/9311) | Surface dangling peer_groups.channel refs como warnings | P2 | config, channel:core |
| [#9451](https://github.com/zeroclaw-labs/zeroclaw/pull/9451) | Retire dormant DORA telemetry | High | observability |

### Tendências de Roadmap Observadas
- **Segurança**: Múltiplas auditorias de segurança em andamento ([#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393), [#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392), [#9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389))
- **Multi-plataforma**: Expansão de testes CI para Windows/macOS
- **UX/CLI**: Melhorias em startup feedback e i18n

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Impacto | Referência |
|-----------|----------|---------|------------|
| **Segurança** | Multiple authorization bypasses in Bluesky, Reddit, LINE | Crítico — dados expostos | [#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393), [#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392) |
| **Segurança** | API keys/tokens vazando em mensagens de erro | Crítico — credenciais expostas | [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386), [#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417) |
| **Estabilidade** | 74+ testes falhando no Windows | Degradação | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| **UX** | Desktop app macOS abre em branco | Workflow bloqueado | [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) |
| **Onboarding** | Fresh config born degraded | Experiência de novo usuário prejudicada | [#9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436) |
| **Mobile** | install.sh não funciona no Android/Termux | Usuários mobile excluídos | [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) |
| **Provider** | Bedrock cachePoint não pode ser desabilitado | Uso prático bloqueado | [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) |

### Cenários de Uso Identificados
- **Multi-agent**: Compartilhamento de memória entre agentes siblings ([#8983](https://github.com/zeroclaw-labs/zeroclaw/issues/8983))
- **Cron jobs**: Necessidade de output raw para automação ([#8409](https://github.com/zeroclaw-labs/zeroclaw/issues/8409))
- **Telegram**: Batch de imagens/vídeos em um único turn ([#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514))
- **Matrix**: Progress drafts em streaming ([#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443))

---

## 8. Backlog que Merece Atenção

### Issues sem resposta/atendimento prolongado

| Issue | Título | Criado | Atualizado | Status | Observação |
|-------|--------|--------|------------|--------|------------|
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | WhatsApp Web — allowed-numbers bypassed for LID contacts | 2026-05-03 | 2026-07-26 | in-progress | Bug reportado há ~85 dias |
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | Telegram media groups batching | 2026-04-08 | 2026-07-26 | in-progress | Bug reportado há ~110 dias |
| [#7828](https://github.com/zeroclaw-labs/zeroclaw/issues/7828) | UTF-8 char-boundary truncation audit tracker | 2026-06-17 | 2026-07-26 | accepted | Sem stale, sem movimento |
| [#7269](https://github.com/zeroclaw-labs/zeroclaw/issues/7269) | docs build warning noise | 2026-06-05 | 2026-07-26 | accepted | Baixa prioridade, sem movimento |
| [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) | install.sh no Android/Termux | 2026-06-18 | 2026-07-26 | accepted | Affects mobile users |

### Riscos Identificados

1. **Segurança em Canais**: Bluesky, Reddit, LINE, WhatsApp Cloud têm vulnerabilidades de autorização — **requerem atenção imediata**
2. **Testes Instáveis**: Suite de testes com falhas crônicas no Windows e flakiness no macOS
3. **Onboarding Quebrado**: `config init` gera config inválida por padrão — afeta novos usuários

---

## Indicadores de Saúde do Projeto

| Métrica | Valor | Status |
|---------|-------|--------|
| Issues ativas (24h) | 49 | 🔴 Alta |
| PRs abertos (24h) | 48 | 🔴 Alta |
| Releases (24h) | 0 | ⚠️ Nenhuma |
| Issues P1 abertos | 12+ | 🔴 Crítico |
| Bugs de segurança abertos | 6+ | 🔴 Crítico |
| PRs aguardando author action | 10+ | 🟡 Pendente |
| Tempo médio de resposta | <24h | 🟢 Bom |

---

*Relatório gerado em 2026-07-28 com base em dados do GitHub de [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw).*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*