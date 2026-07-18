# Resumo diário do ecossistema de agentes de IA 2026-07-19

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-18 20:40 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw
## Período: 2026-07-19

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade no período de 24 horas**. Apenas **1 issue** recebeu atualização, mantendo-se em estado aberto, enquanto nenhuma Pull Request ou release foi registrada. O repositório encontra-se em um estado de manutenção routine, sem atividade significativa de merge ou novas contribuições. A última atualização relevante ocorreu na issue #868, que continua em discussão ativa com 7 comentários, indicando um problema em andamento que requer atenção da equipe de desenvolvimento.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não выпустил novas versões desde o último período reportado. A versão mais recente permanece como **v2026.4.17**, e não há indication de que uma nova release esteja iminente com base na atividade recente do repositório.

---

## 3. Progresso do Projeto

**Nenhuma Pull Request foi merged ou fechada nas últimas 24 horas.**

O silêncio nas PRs sugere que:
- Não há contribuidores ativos submetendo código no momento
- A equipe pode estar focada em discussões de issues existentes
- O projeto pode estar em fase de planejamento ou freeze antes de uma próxima release

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

**#868** - `[bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat`  
🔗 [nullclaw/nullclaw Issue #868](https://github.com/nullclaw/nullclaw/issues/868)

| Métrica | Valor |
|---------|-------|
| Status | **OPEN** |
| Comentários | 7 |
| Reações | 0 |
| Criado | 2026-04-23 |
| Última atualização | 2026-07-18 |

**Análise da Demanda:**

A issue reporta um problema crítico de build que afeta especificamente:
- **Plataforma**: Android (LineageOS 22.2) rodando em Xiaomi Redmi Note 9
- **Ambiente**: Termux shell com arquitetura aarch64
- **Versão do Zig**: 0.16.0
- **Versão do NullClaw**: v2026.4.17

O erro `AccessDenied on options.zig linkat` indica uma possível questão de **permissões de filesystem** ou **incompatibilidade de build system** quando executado em ambiente Android/Termux. Este é um problema de **portabilidade** que pode impactar usuários que desejam compilar o projeto em dispositivos móveis.

O volume de 7 comentários demonstra **engajamento ativo** da comunidade na resolução, mas a issue permanece aberta há **quase 3 meses**, sinalizando possível dificuldade técnica na reprodução ou resolução do problema.

---

## 5. Bugs e Estabilidade

### Bug Reportado (Alta Prioridade)

| Severidade | Issue | Título | Status |
|------------|-------|--------|--------|
| **Alta** | #868 | zig build fails on Android/Termux (aarch64) | OPEN |

**Impacto na Estabilidade:**

O bug afeta a capacidade de compilar o projeto em uma plataforma específica, mas **não representa uma regressão generalizada** pois:
- Não há indication de problemas em plataformas desktop padrão
- O erro está limitado a ambiente Android/Termux (nicho específico)
- O build process funciona normalmente em outros sistemas operacionais

**Recomendação:** A equipe deve priorizar a análise deste bug, especialmente considerando a crescente popularidade de dispositivos ARM64 e o uso de Termux como ambiente de desenvolvimento móvel.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhum novo feature request registrado nas últimas 24 horas.**

A ausência de novos FRs indica:
- Estabilidade na definição de funcionalidades atuais
- Possível satisfação com o feature set existente
- Ou, alternativamente, baixa participação da comunidade no período

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

**Issue #868 - Problema de Build em Android/Termux:**

O único feedback substantivo do período vem da issue #868, onde o usuário **NOTJuangamer10** reporta:

> *"zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat"*

**Cenário de Uso Identificado:**
- Desenvolvimento mobile usando Termux como ambiente POSIX
- Necessidade de compilação nativa em dispositivos ARM64 (aarch64)
- Preference por builds otimizados (`ReleaseSmall`)

**Dores Identificadas:**
1. Falta de suporte/compatibilidade verificada para Android/Termux
2. Problemas de permissão em ambiente virtualizado (possível container/chroot)
3. Incompatibilidade do build system com a estrutura de arquivos do Termux

**Nível de Satisfação:** ❌ **Insatisfeito** - O usuário não conseguiu completar a compilação, ponto crítico de atrito.

---

## 8. Backlog que Merece Atenção

### Issue Sem Resolução Prolongada

| Issue | Título | Idade | Comentários | Prioridade |
|-------|--------|-------|-------------|------------|
| #868 | zig build fails on Android/Termux (aarch64) | **~87 dias** | 7 | ⚠️ Alta |

**Análise:**

A issue #868 está aberta há aproximadamente **87 dias** sem resolução. Este é o item mais antigo e mais discutido no backlog atual. A falta de progresso pode indicar:

- Dificuldade em reproduzir o ambiente (Android + Termux + aarch64)
- Necessidade de esclarecimento adicional do reportado
- Priorização inferior a outras atividades do projeto
- Possível necessidade de contributoor com acesso ao ambiente específico

**Ação Recomendada:**

A equipe do NullClaw deve avaliar:
1. Se o suporte a Android/Termux faz parte do scope do projeto
2. Se não, documentar isso explicitamente e fechar com razão clara
3. Se sim, buscar contribuidores que possam testar em ambiente similar
4. Solicitar logs adicionais ou informações de debug ao reportedor

---

## Métricas Consolidada do Período

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues abertas/ativas (24h) | 1 | 🟡 Atenção |
| Issues fechadas (24h) | 0 | 🔴 Sem progresso |
| PRs abertas (24h) | 0 | ⚪ Neutro |
| PRs merged/fechadas (24h) | 0 | 🔴 Sem progresso |
| Releases (24h) | 0 | ⚪ Neutro |
| Taxa de resolução de issues | 0% | 🔴 Crítica |

---

## Conclusão

O projeto NullClaw demonstra **atividade mínima** no período reportado. A atenção principal deve聚焦 na issue #868, que representa o único ponto de interação da comunidade e requer definição clara de escopo (suporte Android/Termux) e estratégia de resolução. Recomenda-se comunicação proativa com o reportedor para evitar perda de confiança do usuário.

---

*Relatório gerado automaticamente com base nos dados do GitHub. Última atualização: 2026-07-19.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Período de Referência:** 2026-07-19
**Projetos Analisados:** 7

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois polos distintos de maturidade** em 19 de julho de 2026. Por um lado, quatro projetos (NanoBot, Hermes Agent, PicoClaw, IronClaw, ZeroClaw) demonstram atividade intensa com 40-100+ interações diárias, evidenciando ciclos de desenvolvimento saudáveis e comunidades engajadas. Por outro, NullClaw permanece em estado de dormência relativa com apenas uma issue atualizada, sugerindo possible abandono ou freeze estratégico. A convergência técnica mais marcante é a **priorização de segurança e estabilidade**: vazamentos de memória, vulnerabilidades de credenciais e bugs de concorrência aparecem transversalmente, indicando que o ecossistema amadureceu da fase de features para a fase de hardening para produção.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas (24h) | Issues Fechadas (24h) | PRs Atualizados | PRs Merged | Releases | Saúde |
|---------|---------------------|------------------------|-----------------|------------|---------|-------|
| **ZeroClaw** | ~50 | ~10 | ~50 | ~10 | 0 | 🟢 Alta |
| **Hermes Agent** | ~33 | 17 | ~50 | ~20 | 0 | 🟢 Alta |
| **IronClaw** | ~15 | ~10 | 50 | 23 | 0* | 🟢 Alta |
| **NanoBot** | 3 | 4 | 24 | 16 | 0 | 🟢 Alta |
| **CoPaw** | 11 | 0 | 6 | 1 | 0 | 🟡 Média-Alta |
| **PicoClaw** | 0 | 2 | 12 | 8 | 0 | 🟡 Média-Alta |
| **NullClaw** | 1 | 0 | 0 | 0 | 0 | 🔴 Baixa |

*IronClaw documentou release 0.29.1 via PR, sem tag formal.

---

## 3. Posicionamento do Projeto Principal

### Liderança Técnica

| Dimensão | ZeroClaw | Hermes Agent | NanoBot | PicoClaw | IronClaw |
|----------|----------|--------------|---------|----------|----------|
| **Volume de Atividade** | ★★★★★ | ★★★★★ | ★★★★☆ | ★★★☆☆ | ★★★★★ |
| **Maturidade de Features** | ★★★★☆ | ★★★★☆ | ★★★★☆ | ★★★☆☆ | ★★★★☆ |
| **Segurança** | ★★★★☆ | ★★★☆☆ | ★★★★☆ | ★★★★☆ | ★★★☆☆ |
| **Comunidade** | ★★★★☆ | ★★★★☆ | ★★★☆☆ | ★★★☆☆ | ★★★★☆ |
| **Roadmap Claro** | ★★★★★ | ★★★★☆ | ★★★☆☆ | ★★★☆☆ | ★★★★☆ |

**ZeroClaw** posiciona-se como líder técnico pela combinação de volume de atividade (50+ interações), RFCs bem elaborados (OTel, skill compilation, LSP) e foco em arquitetura de goals/orquestração. Sua estratégia de múltiplos canais (Telegram, Zulip, Twilio SMS, GitHub nativo em roadmap) demonstra ambição de plataforma.

**NanoBot** destaca-se na correção acelerada de bugs: 16 PRs mergeados em 24h com foco em estabilidade — vazamento de memória, segurança Docker, limites de mensagens. A velocidade de resposta a incidentes é superior.

**Hermes Agent** lidera em diversidade de integrações (Desktop, CLI, Telegram, Dashboard, Matrix) mas paga preço em estabilidade fragmentada: múltiplos P2 bugs em plataformas distintas.

---

## 4. Focos Técnicos Compartilhados

### Prioridades Transversais

| Foco | Projetos Afetados | Evidência |
|------|-------------------|-----------|
| **Segurança de Credenciais** | Hermes, IronClaw, PicoClaw | Bearer tokens em plaintext (#6247 IronClaw), shell injection risk (#65729 Hermes), OAuth race conditions (#3239 PicoClaw) |
| **Suporte Android/Termux** | NullClaw, ZeroClaw | Bug de build #868 NullClaw, install.sh incorreto #7911 ZeroClaw |
| **Concorrência e Race Conditions** | NanoBot, Hermes, PicoClaw, CoPaw | Session cache sem LRU (NanoBot), cooldown state races (Hermes), OAuth lock (PicoClaw), subprocess kill (CoPaw) |
| **Gerenciamento de Memória** | NanoBot, CoPaw | LRU cache (NanoBot), OSError em paths longos (CoPaw) |
| **Contexto e Limits** | NanoBot, Hermes, ZeroClaw | Context overflow → hallucination (ZeroClaw), message cap (NanoBot), contextWindowTokens validation (NanoBot) |

### Padrão de Maturação

O ecossistema demonstra um **padrão de amadurecimento consistente**:

1. **Fase 1 (Features):** Lançamento de integrações, canais, provedores
2. **Fase 2 (Stabilidade):** Correção de vazamentos, race conditions, deadlocks
3. **Fase 3 (Segurança):** Audits de credenciais, harden de sandbox, subprocess isolation
4. **Fase 4 (Otimização):** Skill compilation, token minimization, LRU caching

Projetos como NullClaw estão presos na Fase 1; ZeroClaw e NanoBot avançaram para Fases 2-3; CoPaw仍在 Fase 2.

---

## 5. Análise de Diferenciação

### Matriz de Posicionamento

```
                    ALTA COMPLEXIDADE TÉCNICA
                           │
    PicoClaw ─────────┬────────┬──────── Hermes Agent
    (Go, multi-      │        │        (Desktop-first,
     agent, OAuth)   │        │         multi-provider)
                     │        │
                     │   ZeroClaw
    CoPaw ───────────┤  (Goal orchestration,
    (Memory-first,   │   RFC-driven)
     Qwen/Arman)     │
                     │
                     │        ┬──────── NanoBot
                     │        │        (Stability-first,
                     │        │         fast iteration)
  BAIXA COMPLEXIDADE └────────┴──────── ALTA
      USUÁRIO FINAL
  
  Legenda: Eixo Y = Arquitetura técnica
           Eixo X = Experiência de usuário
```

### Diferenciação por Público

| Projeto | Público-Alvo Primário | Arquitetura Diferenciadora |
|---------|----------------------|---------------------------|
| **Hermes Agent** | Usuários desktop, multi-provider | Electron/Chromium, Desktop app nativo |
| **ZeroClaw** | DevOps, automação de infraestrutura | Goal orchestration, RFC-driven, multi-canal |
| **NanoBot** | Desenvolvedores, estabilidade | Session management, memory consolidation |
| **PicoClaw** | Mensageria (WhatsApp, Matrix) | Go-native, agent collaboration bus |
| **IronClaw** | Enterprise, multi-tenant | Rust, Slice C refactoring, capability-based auth |
| **CoPaw** | Usuários Qwen/Arman | Memory-centric, scroll-aware history |

### Diferenças Arquiteturais Chave

| Aspecto | Arquitetura Distintiva |
|---------|------------------------|
| **Linguagem** | PicoClaw/IronClaw em Go/Rust vs Hermes/NanoBot em Python/TypeScript |
| **Runtime** | IronClaw: enum fechado `RuntimeLane` vs Hermes: trait `RuntimeAdapter` dyn |
| **Orquestração** | ZeroClaw: goal controller + verifier vs NanoBot: session-based |
| **Channels** | PicoClaw: Matrix-first via mautrix vs ZeroClaw: Telegram-first |
| **Segurança** | IronClaw: capability-based auth vs PicoClaw: OAuth provider-correct |

---

## 6. Tração e Maturidade da Comunidade

### Velocidade de Iteração

| Projeto | PRs Merged/Semana (estimado) | Issue Resolution Rate | Engajamento |
|---------|------------------------------|----------------------|-------------|
| **NanoBot** | ~80-100 | ~90% (4/7 fechadas em 24h) | Comunidade ativa em bugs detalhados |
| **ZeroClaw** | ~40-60 | ~50% (10/50 fechadas) | RFCs bem documentados, 14+ comentários em issues |
| **Hermes Agent** | ~60-80 | ~70% (17/33 fechadas) | Multi-plataforma fragmenta atenção |
| **IronClaw** | ~80-100 | ~60% | Refactoring agressivo gera PRs de alta complexidade |
| **PicoClaw** | ~20-30 | ~100% (2/2 fechadas) | Comunidade pequena mas responsiva |
| **CoPaw** | ~5-10 | ~10% | Issue-driven, PRs de contributors externos |
| **NullClaw** | ~0 | ~0% | Comunidade inativa, issue #868 sem resolução há 87 dias |

### Ciclo de Vida Comunitária

**Consolidando Qualidade:**
- **NanoBot**: 16 PRs mergeados em 24h, forte ciclo de estabilidade
- **ZeroClaw**: RFC-driven com 4+ RFCs aceitos, maturidade de processo

**Iterando Rapidamente:**
- **Hermes Agent**: 50+ interações, 17 issues fechadas, mas P2s persistentes indicam dívida técnica
- **IronClaw**: Refactoring Slice C em ritmo acelerado, 23 PRs merged

**Em Risco:**
- **NullClaw**: 87 dias sem resolução de issue, possível abandono
- **CoPaw**: 11 issues abertas, 0 fechadas, regressão crítica pendente

---

## 7. Sinais de Tendência

### Tendências Extraídas do Feedback

| Tendência | Projetos | Evidência |
|-----------|----------|-----------|
| **1. Agent Collaboration** | PicoClaw, ZeroClaw, NanoBot | PicoClaw #2937 Agent Collaboration Bus, NanoBot subagentResultMode, ZeroClaw goal orchestration |
| **2. Observabilidade Enterprise** | ZeroClaw, Hermes | RFCs OTel (#7232, #8933), trace correlation, OTel integration |
| **3. Multimodalidade** | ZeroClaw, NanoBot, Hermes | Gemini Live speech-to-speech (#8780), PDF support (#5745), Kimi K3 support (NanoBot) |
| **4. Custo Otimization** | ZeroClaw, NanoBot | Skill compilation (#5146), token minimization, LRU caching, eager consolidation |
| **5. Segurança Proativa** | Todos | Vulnerabilidades stdlib em PicoClaw, OAuth race conditions, shell injection, credential exposure |
| **6. Windows/Desktop Maturity** | Hermes, NanoBot, CoPaw | Backend port timeout (#59205), UTF-8 CP936, tray support, desktop crashes |
| **7. Mobile/Termux Emergence** | NullClaw, ZeroClaw | Build failures Android/Termux, install.sh incorreto — demanda reprimida de desenvolvimento móvel |

### Recomendações Estratégicas

1. **Para Desenvolvedores:** Foco em segurança de subprocess/credenciais; é o denominador comum de vulnerabilidades transversais
2. **Para Decisores de Plataforma:** ZeroClaw demonstra roadmap mais articulado via RFCs; NanoBot demonstra melhor velocity de estabilidade
3. **Para Usuários Finais:** Hermes e PicoClaw oferecem melhor experiência desktop/mensageria; NanoBot oferece melhor estabilidade geral
4. **Para Contribuidores:** CoPaw e NullClaw apresentam barreiras baixas mas alto risco de contribuição órfã; ZeroClaw/IronClaw oferecem maior impacto com processo mais rigoroso

---

*Relatório gerado em 2026-07-19 com base nos resumos de atividade comunitária dos repositórios GitHub. Dados de métricas e statuses estão sujeitos a alterações conforme evolução dos projetos.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# NanoBot Project Report — 2026-07-19

---

## 1. Panorama do dia

O projeto NanoBot demonstra **alta atividade de manutenção** em 19 de julho de 2026. Foram registradas 24 interações com PRs nas últimas 24h (8 abertas, 16 merged/fechadas) e 7 issues atualizadas (3 abertas, 4 fechadas). O foco predominante do dia foi a **resolução de bugs críticos de estabilidade** — especialmente vazamentos de memória no cache de sessões, problemas de segurança no Docker Compose e falhas em caminhos de execução com workspaces não-padrão — além de melhorias incrementais em memória, triggers e suporte a novos provedores. Nenhum lançamento de versão foi realizado. O volume de PRs mergeados (16) indica um ciclo de desenvolvimento saudável com forte ritmo de entrega.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O repositório não publicou novas tags ou releases desde o último período. O último release estável permanece como ponto de referência; não há notas de migração ou breaking changes neste ciclo.

---

## 3. Progresso do projeto

Dezesseis PRs foram merged ou fechados hoje. Abaixo, os de maior impacto:

### Correções de segurança e estabilidade (P1)
| PR | Título | Impacto |
|----|--------|---------|
| [#4955](https://github.com/HKUDS/nanobot/pull/4955) | Harden default Docker Compose security | Remove `SYS_ADMIN` e configurações `unconfined` do Compose padrão; move para um arquivo `docker-compose.bwrap.yml` opcional |
| [#4957](https://github.com/HKUDS/nanobot/pull/4957) | Bound the in-memory session cache | Introduce LRU de 128 entradas no `SessionManager._cache`; corrige vazamento de memória reportado em [#4786](https://github.com/HKUDS/nanobot/issues/4786) |
| [#4974](https://github.com/HKUDS/nanobot/pull/4974) | Fix cron dual-case keys | Corrige `KeyError` e jobs que nunca disparavam ao carregar `jobs.json` com campos `snake_case` (`every_ms`, `run_at_ms`) |
| [#4960](https://github.com/HKUDS/nanobot/pull/4960) | Preserve real cancellation in MCP paths | Distingue cancelamento real de `CancelledError` vazado por integrações MCP/AnyIO |

### Correções de bugs críticos (P1)
| PR | Título | Impacto |
|----|--------|---------|
| [#4925](https://github.com/HKUDS/nanobot/pull/4925) | Guide recovery from oversized tool results | Reutiliza o context governor para detectar saída de tool na mesma rodada que excede o limite e substitui por instrução de retry |
| [#4956](https://github.com/HKUDS/nanobot/pull/4956) | Cap messages at persistence boundary | Enforce o limite de 2.000 mensagens em `SessionManager.save()`; cobre o path de bypass do SDK |
| [#4977](https://github.com/HKUDS/nanobot/pull/4977) | Fall back to legacy paths in session metadata | Corrige perda silenciosa de `workspace_scope` após reinício para sessões com nome legacy (`websocket_*.jsonl`); fecha [#4940](https://github.com/HKUDS/nanobot/issues/4940) |
| [#4978](https://github.com/HKUDS/nanobot/pull/4978) | Terminate active session process trees on shutdown | Garante que árvores de processos de exec-sessions sejam mortas no shutdown graceful |

### Novas features e melhorias
| PR | Título | Destaque |
|----|--------|---------|
| [#4966](https://github.com/HKUDS/nanobot/pull/4966) | Add Kimi K3 support | Suporte nativo a `reasoning_effort="max"`, omissão de parâmetros legacy, normalização de presets |
| [#4937](https://github.com/HKUDS/nanobot/pull/4937) | One-click deploy to Render | Blueprints para deploy em um clique como serviço web único (gateway + WebUI) |
| [#4626](https://github.com/HKUDS/nanobot/pull/4626) | Add opt-in eager consolidation | Passagem de consolidação de memória pós-resposta, desabilitada por padrão |
| [#4624](https://github.com/HKUDS/nanobot/pull/4624) | Add aggregated result mode for subagents | Novo `subagentResultMode: aggregated` com buffer e publicação unificada |
| [#4620](https://github.com/HKUDS/nanobot/pull/4620) | Add heartbeat trigger command | Runner compartilhado com decisão LLM, extração de resumo, lock de workspace |

---

## 4. Temas quentes da comunidade

### Issues com maior engajamento (comentários/reação)

**#2343** — *"run_agent_loop não verifica contextWindowTokens"* (CLOSED, 15 comentários)  
🔗 https://github.com/HKUDS/nanobot/issues/2343  
**Análise:** Problema recorrente de usuários configurando `maxTokens` e `contextWindowTokens` com valores conflitantes, resultando em estouro do context window do modelo. A discussão de 15 comentários indica necessidade de validação mais clara na configuração e mensagens de erro mais acionáveis. Issue marcada como `good first issue`.

**#4867** — *"Preserve exact prompt prefix to enable caching in Ollama"* (CLOSED, 5 comentários)  
🔗 https://github.com/HKUDS/nanobot/issues/4867  
**Análise:** Follow-up da issue #2463. Reporta que Nanobot adiciona ~60 segundos de latência em cada turno com Ollama local, tornando o uso inviável em hardware limitado (32 GB VRAM). O título sugere que a causa é a não-preservação de prefixos exatos no prompt, impedindo cache de templates. Demanda forte de usuários de Ollama locais.

**#4940** — *"read_session_metadata lacks legacy filename fallback"* (OPEN, 1 comentário)  
🔗 https://github.com/HKUDS/nanobot/issues/4940  
**Análise:** Perda de metadados `workspace_scope` após reinício para sessões criadas com formato legacy. PR de correção [#4977](https://github.com/HKUDS/nanobot/pull/4977) já aberto — este é um caso de bug que estava impactando usuários em produção.

### PRs em destaque

**#4963** — *"feat(webui): polish agent output and app discovery"* (OPEN)  
🔗 https://github.com/HKUDS/nanobot/pull/4963  
Revestimento da saída de agente: substitui logs de tools aninhados por linguagem unificada de linha única cobrindo reasoning, busca web, fetch, shell, arquivos, memória, CLI, MCP, imagens, subagentes, automations, goals e sessions.

**#4942** — *"feat(triggers): let agents manage session-local triggers"* (OPEN, com conflito)  
🔗 https://github.com/HKUDS/nanobot/pull/4942  
Adiciona ferramenta `local_trigger` para criação, listagem, habilitação, desabilitação e remoção de triggers no escopo da sessão. Diferenciação entre triggers locais, cron e heartbeat é um pedido recorrente.

**#4854** — *"feat(exec): add RTK command rewriter"* (OPEN, com conflito)  
🔗 https://github.com/HKUDS/nanobot/pull/4854  
Rewriter de comandos RTK antes do sandbox wrapping, com re-execução do guard existente e filtragem de ruído.

---

## 5. Bugs e estabilidade

### Bugs em produção (OPEN — sem correção ainda)

| # | Severidade | Descrição | Link |
|---|------------|-----------|------|
| 4980 | **P1** | GitStore falha ao inicializar quando workspace difere do diretório de trabalho — passa caminhos relativos ao Dulwich `porcelain.add()`. | [#4980](https://github.com/HKUDS/nanobot/issues/4980) |
| 4975 | **P1** | CLI Apps perdem saída UTF-8 em Windows com locale CP936/GBK — `subprocess.run(text=True)` sem encoding explícito. | [#4975](https://github.com/HKUDS/nanobot/issues/4975) |
| 4940 | **P2** | Metadados `workspace_scope` perdidos após restart para sessões legacy. (PR [#4977](https://github.com/HKUDS/nanobot/pull/4977) em aberto.) | [#4940](https://github.com/HKUDS/nanobot/issues/4940) |

### Bugs corrigidos hoje (CLOSED)

| # | Severidade | Descrição | Link |
|---|------------|-----------|------|
| 4786 | **P1** | `SessionManager._cache` crescia sem limite — sem TTL nem LRU. Corrigido por [#4957](https://github.com/HKUDS/nanobot/pull/4957). | [#4786](https://github.com/HKUDS/nanobot/issues/4786) |
| 4886 | **P1** | Docker Compose habilitava `SYS_ADMIN` e desabilitava AppArmor/seccomp — risco de elevação de privilégio. Corrigido por [#4955](https://github.com/HKUDS/nanobot/pull/4955). | [#4886](https://github.com/HKUDS/nanobot/issues/4886) |
| 2343 | **P2** | `run_agent_loop` não verificava `contextWindowTokens` — estouro de context length. | [#2343](https://github.com/HKUDS/nanobot/issues/2343) |
| 4867 | **P2** | Latência de 60s por turno com Ollama por falta de cache de prompt. | [#4867](https://github.com/HKUDS/nanobot/issues/4867) |

**Síntese:** O dia foi marcado por **forte foco em estabilidade e segurança**. Dois bugs de severidade P1 (vazamento de memória, config Docker insegura) foram resolvidos com PRs de alto impacto. Dois bugs P1 ainda estão abertos e possuem PRs de correção em andamento ([#4979](https://github.com/HKUDS/nanobot/pull/4979) para #4980 e [#4976](https://github.com/HKUDS/nanobot/pull/4976) para #4975).

---

## 6. Pedidos de features e sinais de roadmap

### Features abertas com potencial de inclusão

**#4942** — *Session-local triggers* (em revisão, com conflito)  
Permite que agentes criem e gerenciem triggers no escopo da conversa. Diferenciação de escopo (local vs. cron vs. heartbeat) é um pedido que vem se acumulando. Se mergeado, representa mudança significativa no modelo de automação.  
🔗 https://github.com/HKUDS/nanobot/pull/4942

**#4854** — *RTK command rewriter para exec* (em revisão, com conflito)  
Feature de segurança/performance para exec, com reescrita de comandos RTK antes do sandbox. Indica direção de endurecimento do sandbox execution.  
🔗 https://github.com/HKUDS/nanobot/pull/4854

**#4963** — *Polimento de output do agente no WebUI* (OPEN)  
Reestruturação visual da saída de agente com linguagem unificada. Melhoria de UX significativa para usuários finais.  
🔗 https://github.com/HKUDS/nanobot/pull/4963

### Tendências de roadmap inferidas dos PRs mergeados

| Área | Sinais |
|------|--------|
| **Memória** | Consolidación eager (opt-in), preservação de contexto de delivery, gating de archive com proveniência — indica foco em qualidade da memória de longo prazo |
| **Subagentes** | Modo agregado de resultados — amadurecimento do pipeline de subagentes |
| **Provedores** | Suporte a Kimi K3 — expansão de cobertura de modelos |
| **Triggers** | Heartbeat trigger com runner compartilhado e decisão LLM — enriquecimento do sistema de automação |
| **Deploy** | Render one-click deploy — redução de fricção para novos usuários |
| **WebUI** | Polimento de output, descoberta de apps — investimento em experiência visual |

---

## 7. Resumo de feedback dos usuários

### Dores recorrentes identificadas

1. **Estouro de context window** (Issue #2343)  
   Usuários não entendem a diferença entre `maxTokens` e `contextWindowTokens`. Pedem validação de configuração e mensagens de erro mais claras. Configuração com `maxTokens: 8192` e `contextWindowTokens: 8192` em modelo de 32k resulta em erro — não há guidance sobre como dimensionar corretamente.

2. **Inviabilidade com Ollama local** (Issue #4867)  
   Latência de 60 segundos por turno torna o Nanobot inutilizável com modelos locais em hardware modesto (32 GB VRAM). Usuários locais de Ollama representam segmento significativo de feedback negativo.

3. **Perda de workspace_scope** (Issue #4940)  
   Sessões com `workspace_scope` personalizado perdem essa configuração após restart, quebrando workflows baseados em paths de projeto customizados. Impacto direto em produtividade.

4. **Segurança Docker por padrão** (Issue #4886)  
   Configuração `SYS_ADMIN` + `apparmor=unconfined` por padrão gera preocupação em ambientes de produção. A correção rápida (#4955) demonstra responsividade, mas expõe o risco de default inseguro.

### Sinais positivos

- A comunidade está ativamente reportando bugs detalhados com steps de reprodução
- A taxa de resolução é alta: 4 issues fechadas em 24h, 16 PRs mergeados
- O suporte a novos provedores (Kimi K3) indica que o projeto está expandindo alcance
- Funcionalidades de consolidação de memória mostram investimento em uso de longo prazo

---

## 8. Backlog que merece atenção

### Issues sem resposta significativa ou em espera

| # | Título | Idade | Status | Link |
|---|--------|-------|--------|------|
| #2463 | Prompt prefix caching para Ollama (parent de #4867) | ~meses | Relacionada | [#2463](https://github.com/HKUDS/nanobot/issues/2463) |
| #2604 | Consolidação de memória (prerequisite de #4626) | ~meses | Parcialmente resolvida | [#2604](https://github.com/HKUDS/nanobot/issues/2604) |
| #3437 | Heartbeat trigger (resolvida por #4620) | ~meses | Resolvida | [#3437](https://github.com/HKUDS/nanobot/issues/3437) |

### PRs com conflitos pendentes

| # | Título | Link |
|---|--------|------|
| #4942 | feat(triggers): session-local triggers | [#4942](https://github.com/HKUDS/nanobot/pull/4942) |
| #4854 | feat(exec): RTK command rewriter | [#4854](https://github.com/HKUDS/nanobot/pull/4854) |

**Recomendação:** Ambos os PRs com conflito (#4942 e #4854) tratam de funcionalidades solicitadas pela comunidade (triggers locais e RTK). Priorizar resolução de conflitos para não bloquear contribuições e desmotivar autores.

---

## Métricas de Saúde do Projeto (2026-07-19)

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| PRs mergeados (24h) | 16 | 🟢 Muito ativo |
| Issues fechadas (24h) | 4 | 🟢 Bom ciclo de resolução |
| Issues abertas (24h) | 3 | 🟡 Necessita acompanhamento |
| Bugs P1 em produção | 2 | 🟠 Atenção — PRs em aberto |
| Bugs P1 resolvidos | 6 | 🟢 Forte resposta a incidentes |
| Novas releases | 0

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-19

## 1. Panorama do Dia

O projeto Hermes Agent mantém alta atividade com 50 issues e 50 PRs atualizados nas últimas 24h, indicando um ciclo de desenvolvimento intenso. Das 33 issues abertas, destacam-se problemas críticos de estabilidade no desktop e integrações com provedores, enquanto 17 issues foram fechadas — incluindo regressões de model picker e bugs de streaming via OpenRouter. A ausência de releases novas sugere que a equipe está em fase de estabilização antes de um próximo lançamento. A comunidade demonstra preocupação significativa com questões de segurança (credenciais, shell injection) e comportamento probabilístico do agente em relação a regras definidas.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou novas versões desde o último período. Isso indica que a equipe está consolidando contribuições pendentes antes de um próximo release, potencialmente para abordar a quantidade substancial de bugs P2 corrigidos (desktop crashes, model switching, streaming issues) que ainda aguardam merge.

---

## 3. Progresso do Projeto

### PRs Recentes Closed/Merged

| PR | Título | Impacto |
|----|--------|---------|
| [#65849](https://github.com/NousResearch/hermes-agent/pull/65849) | `feat(providers): add cursor-acp` | Adiciona provider cursor-acp para integração Hermes → Cursor Agent via ACP (Closed — not planned) |
| [#65808](https://github.com/NousResearch/hermes-agent/issues/65808) | Desktop build crash on stale JS runtime shadow | Corrige crash na inicialização do desktop após updates |
| [#65743](https://github.com/NousResearch/hermes-agent/issues/65743) | Desktop model picker reverts after selection | Resolve persistência de seleção de modelo no desktop |
| [#65729](https://github.com/NousResearch/hermes-agent/issues/65729) | Three sites use subprocess with shell=True | Mitigação inicial de risco de segurança shell injection |
| [#65706](https://github.com/NousResearch/hermes-agent/issues/65706) | OpenRouter API key never clears active_provider | Corrige comportamento de autenticação OpenRouter |

### PRs Abertos em Merging Track

- [#67123](https://github.com/NousResearch/hermes-agent/pull/67123) — `feat(computer_use)`: Implementa ladder verify→escalate conforme especificação cua-driver, melhorando robustez em Electron/Chromium
- [#65850](https://github.com/NousResearch/hermes-agent/pull/65850) — `fix(cli)`: Fallback plain-print para Windows piped/automated use (corrige #65558)
- [#65844](https://github.com/NousResearch/hermes-agent/pull/65844) — `fix(credential-pool)`: Corrige race conditions em cooldown state entre processos
- [#65838](https://github.com/NousResearch/hermes-agent/pull/65838) — `fix(gateway)`: Preserva delegação completa durante compressão
- [#65860](https://github.com/NousResearch/hermes-agent/pull/65860) — `fix(delegation)`: Mantém resultados pendentes durante cleanup

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

1. **[#40662](https://github.com/NousResearch/hermes-agent/issues/40662)** — PreToolUse enforcement hook (8 comentários)
   - **Tópico**: Agente ignora sistematicamente regras de system-prompt durante debugging profundo
   - **Análise**: Problema fundamental de compliance onde LLMs exhibit recency bias, ignorando SOUL.md, persona.md e memory
   - **Severidade**: P3, comp/agent

2. **[#67012](https://github.com/NousResearch/hermes-agent/issues/67012)** — keepalive_expiry=20s breaks streaming (6 comentários)
   - **Tópico**: Regression causada por commit `8324dd19c` que impacta streaming via Cloudflare/OpenRouter GRU/São Paulo
   - **Severidade**: P2, provider/openrouter

3. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)** — Skills index is stale (5 comentários)
   - **Tópico**: Índice de skills 29.8h old, violando limite de 26h
   - **Severidade**: P3, tool/skills, risco-automation

4. **[#66950](https://github.com/NousResearch/hermes-agent/issues/66950)** — Hermes identity/memory rule compliance is probabilistic (4 comentários)
   - **Tópico**: SOUL.md carrega corretamente, mas compliance com regras é não-determinística; soul-guard file-edit é no-op
   - **Severidade**: P3, comp/agent, needs-decision

### PRs com Maior Atividade

- **[#67123](https://github.com/NousResearch/hermes-agent/pull/67123)** — computer_use verify→escalate ladder (P2, risk-session-state)
- **[#56929](https://github.com/NousResearch/hermes-agent/pull/56929)** — guardrails reset on successful file mutation (P2)
- **[#43277](https://github.com/NousResearch/hermes-agent/pull/43277)** — codex pool fallback respects exhausted cooldowns (P2)

---

## 5. Bugs e Estabilidade

### P1 — Críticos (não identificados no período)

Nenhum bug P1 reportado nas últimas 24h.

### P2 — Altos

| Issue | Descrição | Status | Plataforma |
|-------|-----------|--------|------------|
| [#67012](https://github.com/NousResearch/hermes-agent/issues/67012) | Streaming broken via Cloudflare/OpenRouter (keepalive_expiry) | OPEN | OpenRouter |
| [#67097](https://github.com/NousResearch/hermes-agent/issues/67097) | Multi-profile routing sends to wrong profile | OPEN | Desktop |
| [#62549](https://github.com/NousResearch/hermes-agent/issues/62549) | Dashboard auth identity never reaches agent (multi-user isolation broken) | OPEN | Dashboard |
| [#66930](https://github.com/NousResearch/hermes-agent/issues/66930) | Bare profiles inherit Matrix credentials from root .env | OPEN | Gateway/Matrix |
| [#37617](https://github.com/NousResearch/hermes-agent/issues/37617) | Inactive-profile credentials unprotected against prompt injection | OPEN | Security |
| [#67120](https://github.com/NousResearch/hermes-agent/issues/67120) | Model change via SSH doesn't propagate to Telegram | OPEN | Telegram |
| [#59890](https://github.com/NousResearch/hermes-agent/issues/59890) | Kanban notifications never delivered (18 subscriptions, 0 deliveries) | OPEN | Gateway/Cron |

### P3 — Médios

| Issue | Descrição | Status |
|-------|-----------|--------|
| [#59205](https://github.com/NousResearch/hermes-agent/issues/59205) | Windows Desktop backend port timeout (45000ms) | OPEN |
| [#66933](https://github.com/NousResearch/hermes-agent/issues/66933) | hermes update deadlocks on external venv usage | OPEN |
| [#67064](https://github.com/NousResearch/hermes-agent/issues/67064) | Keep desktop pet alive in Windows tray | OPEN |

### Bugs Recentemente Corrigidos (Closed)

- [#65808](https://github.com/NousResearch/hermes-agent/issues/65808) — Desktop crash on stale JS runtime shadow
- [#65743](https://github.com/NousResearch/hermes-agent/issues/65743) — Model picker reverts after selection
- [#65706](https://github.com/NousResearch/hermes-agent/issues/65706) — OpenRouter API key never clears active_provider
- [#65563](https://github.com/NousResearch/hermes-agent/issues/65563) — Ollama Cloud 429 error not triggering fallback
- [#65729](https://github.com/NousResearch/hermes-agent/issues/65729) — subprocess shell=True security (partial)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Descrição | Severidade | Sinal Estratégico |
|-------|-----------|------------|-------------------|
| [#67034](https://github.com/NousResearch/hermes-agent/pull/67034) | Skills-style catalog para tool_search (deferred tools discoverable) | P3 | UX/Tooling |
| [#67031](https://github.com/NousResearch/hermes-agent/issues/67031) | Per-channel reasoning_effort em channel_overrides | P3 | Configuração avançada |
| [#41909](https://github.com/NousResearch/hermes-agent/issues/41909) | Custom (responsive) fields in CLI status bar | P3 | Personalização |
| [#65736](https://github.com/NousResearch/hermes-agent/issues/65736) | Prompt Role Metadata for intelligent model routing | P3 | Roteamento inteligente |
| [#67064](https://github.com/NousResearch/hermes-agent/issues/67064) | Keep popped-out pet alive in Windows tray | P3 | Desktop UX |
| [#65852](https://github.com/NousResearch/hermes-agent/pull/65852) | Discord opt-in role mentions | P3 | Platform expansion |

### PR de Feature Em Process

- **[#67123](https://github.com/NousResearch/hermes-agent/pull/67123)** — Implementa ladder verify→escalate para computer_use (reforça confiabilidade de tool execution)

### Tema Recorrente: Agent Compliance

Dois issues de alta atenção indicam que a equipe está ciente da necessidade de强化 agent adherence a regras definidas:
- [#40662](https://github.com/NousResearch/hermes-agent/issues/40662) — PreToolUse enforcement hook
- [#66950](https://github.com/NousResearch/hermes-agent/issues/66950) — SOUL.md compliance

**Potencial direção**: Implementação de hooks de enforcement mais robustos antes de tool execution.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

1. **Instabilidade do Desktop App**
   - Model switching não persiste consistentemente
   - Multi-session routing envia mensagens para sessão errada
   - Crash após updates por stale JS runtime
   - Sessões TUI invisíveis bloqueiam renames no desktop

2. **Provedores e Autenticação**
   - OpenRouter streaming quebrado para边缘 regions
   - Ollama Cloud 429 não trigga fallback automático
   - Multiple codex subscriptions não suportadas

3. **Segurança**
   - Credenciais de perfis inativos expostas a prompt injection
   - subprocess shell=True em inputs não confiáveis (3 locais)

4. **Multi-profile/Multi-user**
   - Dashboard auth identity não reacha agent construction
   - Profile bare configurations herdam Matrix credentials indevidamente
   - Mensagens routeiam para backend de profile errado

### Cenários de Uso Reportados

- **Desenvolvimento local com Ollama**: Usuários enfrentam issues de persistência de provider
- **Windows Desktop**: Problemas de tray, backend port announcement, stdout piping
- **Automação CI/CD**: prompt_toolkit crashes em contextos não-TTY
- **Gateway distribuído**: Kanban notifications nunca delivered

### Satisfação

A comunidade demonstra engajamento ativo (50+ issues/PRs em 24h) e os maintainers respondem rapidamente a bugs críticos. A taxa de resolução aparente é alta (17 issues fechadas), sugerindo processo de triagem funcional.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Progresso Estendido

| Issue | Idade | Descrição | Prioridade |
|-------|-------|-----------|------------|
| [#37617](https://github.com/NousResearch/hermes-agent/issues/37617) | ~47 dias | Security: credential files unprotected | P2 |
| [#41909](https://github.com/NousResearch/hermes-agent/issues/41909) | ~41 dias | Custom fields in CLI status bar | P3 |
| [#40662](https://github.com/NousResearch/hermes-agent/issues/40662) | ~43 dias | PreToolUse enforcement hook | P3 |
| [#59205](https://github.com/NousResearch/hermes-agent/issues/59205) | ~14 dias | Windows backend port timeout | P3 |

### PRs Estagnados

| PR | Idade | Descrição | Status |
|----|-------|-----------|--------|
| [#43277](https://github.com/NousResearch/hermes-agent/pull/43277) | ~39 dias | Codex pool cooldown resolver | OPEN |
| [#56929](https://github.com/NousResearch/hermes-agent/pull/56929) | ~17

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-19

---

## 1. Panorama do Dia

O projeto PicoClaw apresentou **alta atividade nas últimas 24h**, com 12 pull requests atualizados e 2 issues fechadas. Todas as issues ativas foram resolvidas — ambas relacionadas a correções críticas de autenticação OAuth e experiência de usuário no WhatsApp. O período foi marcado por **8 PRs merged/fechados**, incluindo funcionalidades relevantes como *agent collaboration*, *typing presence* nativo e refatorações de segurança. Não houve lançamentos formais (releases), indicando que o time está em ciclo de integração antes de uma próxima versão.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto encontra-se em período de consolidação de contribuições. Os PRs mais recentes sugerem preparação para uma próxima release que deve incluir:
- Atualização do toolchain Go para 1.25.12 (correção de vulnerabilidades)
- Novos recursos de canais (Simplex, WhatsApp)
- Melhorias de estabilidade no OAuth e parse de respostas

> 📌 *Recomendação*: Monitorar o repositório para próxima tag de release que deve englobar as contribuições integradas.

---

## 3. Progresso do Projeto

### PRs Merged/Fecha das mais Impactantes

| # | PR | Autor | Tipo | Impacto |
|---|-----|-------|------|---------|
| **#3242** | [`feat(whatsapp): add native typing presence`](https://github.com/sipeed/picoclaw/pull/3242) | As-tsaqib | Feature | Implementa `TypingCapable` no canal WhatsApp com envio de `composing`/`paused` |
| **#3241** | [`fix(auth): make OAuth refresh provider-correct and concurrency-safe`](https://github.com/sipeed/picoclaw/pull/3241) | As-tsaqib | Bug Fix | Corrige refresh token JSON para OpenAI, mantém form-encoded para Google; adiciona lock de 30s contra race conditions |
| **#2937** | [`Feat/agent collaboration`](https://github.com/sipeed/picoclaw/pull/2937) | afjcjsbx | Feature | Introduce *Agent Collaboration Bus* com mailboxes, threads isoladas e envelopes de mensagens permission-aware |
| **#3225** | [`Support agent-specific runtime overrides`](https://github.com/sipeed/picoclaw/pull/3225) | xdatafactor | Feature | Permite `max_tokens`, thresholds de sumarização e `split_on_marker` por agente |
| **#3200** | [`feat(models): add configurable default fallback chain`](https://github.com/sipeed/picoclaw/pull/3200) | lc6464 | Feature | Interface visual para configurar chain de modelos fallback com persistência via API |
| **#3165** | [`fix(openai_compat): recover Seed XML tool calls`](https://github.com/sipeed/picoclaw/pull/3165) | Alix-007 | Bug Fix | Recupera blocos `<seed:tool_call>` XML de respostas Volcengine Doubao Seed |

### Atualizações de Dependências
- [`#3211`](https://github.com/sipeed/picoclaw/pull/3211): Bump eslint 10.4.1 → 10.6.0 (frontend)
- [`#3208`](https://github.com/sipeed/picoclaw/pull/3208): Bump maunium.net/go/mautrix 0.27.0 → 0.28.1 (Matrix)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Comentários | Status |
|---|--------|-------------|--------|
| **#3239** | [`[CLOSED] OAuth refresh requests use incompatible provider semantics and can race`](https://github.com/sipeed/picoclaw/issues/3239) | 1 | Closed |
| **#3240** | [`[CLOSED] Add typing presence to WhatsApp native replies`](https://github.com/sipeed/picoclaw/issues/3240) | 1 | Closed |

### Análise de Demandas

**Problema central identificado**: A issue #3239 expõe uma fragilidade crítica no subsistema OAuth — refresh tokens eram enviados com form-encoded para todos os provedores, mas OpenAI espera JSON. Isso causava **race conditions** e falhas silenciosas em ambientes com múltiplos dashboards/providers.

**Ação rápida**: Ambos os problemas foram resolvidos com PRs do mesmo autor (As-tsaqib), demonstrando *feedback loop* eficiente entre report e implementação.

> 🔗 Issues: [#3239](https://github.com/sipeed/picoclaw/issues/3239) · [#3240](https://github.com/sipeed/picoclaw/issues/3240)

---

## 5. Bugs e Estabilidade

### Vulnerabilidades Endereçadas

| Severidade | Item | Descrição | Status |
|------------|------|-----------|--------|
| 🔴 **Crítica** | `GO-2026-5856` | Vulnerabilidade em `crypto/tls` (stdlib) | Em correção por [`#3248`](https://github.com/sipeed/picoclaw/pull/3248) |
| 🟠 **Alta** | `GO-2026-4970` | Vulnerabilidade em `os` (stdlib) | Em correção por [`#3248`](https://github.com/sipeed/picoclaw/pull/3248) |

### Bugs Corrigidos

| # | Descrição | Severidade |
|---|-----------|------------|
| **#3241** | OAuth refresh provider-incompatible (JSON vs form-encoded) e race conditions | 🔴 Alta |
| **#3165** | Falha em parsear XML tool calls do Volcengine Doubao Seed | 🟠 Média |
| **#3205** | Falha ao parsear respostas 9router + ausência de build ARMv7 | 🟡 Baixa |

### Observação
O PR #3248 (bump Go 1.25.11 → 1.25.12) está **aberto** e pendente de merge — recomenda-se priorizá-lo para mitigar exposição a vulnerabilidades no stdlib.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertos com Potencial de Roadmap

| # | Título | Tipo | Relevância Estratégica |
|---|--------|------|------------------------|
| **#3193** | [`Added simplex channel type`](https://github.com/sipeed/picoclaw/pull/3193) | Feature | Expansão de canais de comunicação |
| **#3202** | [`fix(routing): strip leading/trailing underscores in ID normalization`](https://github.com/sipeed/picoclaw/pull/3202) | Bug Fix | Consistência de IDs (regex `^[a-z0-9][a-z0-9_-]{0,63}$`) |
| **#3205** | [`fix: support 9router gateway responses and add Linux ARMv7 build target`](https://github.com/sipeed/picoclaw/pull/3205) | Feature | Suporte IoT/ARM + compatibilidade com gateways alternativos |
| **#3248** | [`fix: bump Go to 1.25.12`](https://github.com/sipeed/picoclaw/pull/3248) | Segurança | Manutenção de toolchain |

### Sinais de Direção do Projeto

1. **Interoperabilidade expandida**: Suporte a 9router, simplex channel e mais provedores OAuth
2. **Multi-agent**: Collaboration Bus (#2937) + runtime overrides por agente (#3225)
3. **Resiliência de modelos**: Fallback chain configurável (#3200)
4. **Segurança proativa**: Atualização rápida de stdlib após disclosures

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas (via Issues/PRs)

| Problema | Evidência | Impacto |
|----------|-----------|---------|
| Ausência de feedback visual no WhatsApp durante processamento | [#3240](https://github.com/sipeed/picoclaw/issues/3240) | Experiência de usuário degradada em respostas longas |
| Falhas silenciosas em OAuth refresh com OpenAI | [#3239](https://github.com/sipeed/picoclaw/issues/3239) | Autenticação quebrada em produção |
| Incompatibilidade com gateways 9router | [#3205](https://github.com/sipeed/picoclaw/pull/3205) | Bloqueio para usuários Raspberry Pi |
| Falta de build ARMv7 | [#3205](https://github.com/sipeed/picoclaw/pull/3205) | Limitações em hardware IoT |

### Cenários de Uso Observados

- **Agente pessoal em WhatsApp**: Usuários esperam typing indicators nativos
- **Multi-provider OAuth**: Dashboards com múltiplos provedores (OpenAI, Google)
- **Raspberry Pi + 9router**: Implementações DIY com gateways alternativos
- **Matrix via mautrix**: Integração com ecossistema federado

> 📊 *Satisfação*: O time responde rapidamente a issues críticas (mesmo dia) e integra features relevantes.

---

## 8. Backlog que Merece Atenção

### PRs Abertos Sem Atividade Reciente (Stale)

| # | Título | Criado | Última Atualização | Prioridade |
|---|--------|--------|---------------------|------------|
| **#3193** | [`Added simplex channel type`](https://github.com/sipeed/picoclaw/pull/3193) | 2026-06-27 | 2026-07-18 | 🟡 Média |
| **#3202** | [`fix(routing): strip leading/trailing underscores`](https://github.com/sipeed/picoclaw/pull/3202) | 2026-07-01 | 2026-07-18 | 🟠 Alta |
| **#3205** | [`support 9router + ARMv7 build`](https://github.com/sipeed/picoclaw/pull/3205) | 2026-07-02 | 2026-07-18 | 🟠 Alta |
| **#3248** | [`bump Go to 1.25.12`](https://github.com/sipeed/picoclaw/pull/3248) | 2026-07-10 | 2026-07-18 | 🔴 Crítica |

### Recomendação

1. **#3248** — Merge urgente para remediate vulnerabilidades `GO-2026-5856` e `GO-2026-4970`
2. **#3202** — Revisar normalização de IDs (aligns with documented regex)
3. **#3193** — Avaliar para merge ou feedback ao autor sobre direções de canais

---

## Métricas do Período

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 0 |
| Issues fechadas | 2 |
| PRs abertas | 4 |
| PRs merged/fechadas | 8 |
| Releases | 0 |
| Autores únicos ativos | ~7 |

---

*Relatório gerado em 2026-07-19 com base em dados do GitHub do projeto [sipeed/picoclaw](https://github.com/sipeed/picoclaw).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto — IronClaw
**Data:** 2026-07-19 | **Repositório:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Panorama do dia

O IronClaw apresenta alta atividade de desenvolvimento em 2026-07-19, com 50 PRs atualizados nas últimas 24h (23 merged/fechados) e 6 issues movimentadas. O foco predominante é a **arquitetura de simplificação "Slice C"**, com múltiplas tranches de refactoring no caminho de autorização (`authorize()`) e consolidação de runtimes via `RuntimeLane`. A promoção do Reborn a CLI canônica (`ironclaw`) está em curso ([#6185](https://github.com/nearai/ironclaw/pull/6185) merged), marcando uma etapa importante na aposentadoria do legado v1. Não houve releases formais nas últimas 24h, embora a versão 0.29.1 tenha sido documentada em [#5598](https://github.com/nearai/ironclaw/pull/5598).

---

## 2. Lançamentos

**Nenhum release formal nas últimas 24h.** Contudo, o PR de release [#5598](https://github.com/nearai/ironclaw/pull/5598) documenta a versão **0.29.1** do pacote `ironclaw` com as seguintes mudanças:

| Pacote | De | Para | Tipo |
|--------|-----|------|------|
| `ironclaw_common` | 0.4.2 | 0.5.0 | ⚠️ Breaking |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | ✓ Compatível |
| `ironclaw_skills` | 0.3.0 | 0.4.0 | ⚠️ Breaking |
| `ironclaw` | 0.24.0 | 0.29.1 | Compatível |

**Breaking changes em `ironclaw_common` 0.5.0** exigem atenção em integrações downstream.

---

## 3. Progresso do Projeto

PRs importantes merged/fechados hoje:

| PR | Título | Impacto |
|----|--------|---------|
| [#6185](https://github.com/nearai/ironclaw/pull/6185) | `refactor(cli): promote ironclaw as the canonical Reborn command` | **Crítico** — Reborn promoted a `ironclaw`; v1 renomeado para `ironclaw-legacy` |
| [#6229](https://github.com/nearai/ironclaw/pull/6229) | `feat(host_api): Slice C.6 — closed RuntimeLane enum` | Substitui trait `RuntimeAdapter` + `dyn` por enum fechado `RuntimeLane { FirstParty \| Wasm \| Mcp \| Process }` |
| [#6199](https://github.com/nearai/ironclaw/pull/6199) | `benchmark: run /benchmark against latest main` | Validação de performance no tip atual |
| [#6250](https://github.com/nearai/ironclaw/pull/6250) | `fix(filesystem): index libSQL descendant listings` | Corrigi scans `LIKE` com range indexed; cobertura de regressão adicionada |
| [#6121](https://github.com/nearai/ironclaw/pull/6121) | `fix(reborn): make migration default legacy-free` | Builds default não puxam mais o crate raiz v1 |

**Avanços estratégicos:**
- A stack de refactoring `W1a` → `W1b` → `W1c` está convergindo para um `authorize()` fold centralizado em `ironclaw_capabilities`
- O colapsar do `RuntimeAdapter` dyn em `RuntimeLane` fecha o conjunto de runtimes confiáveis

---

## 4. Temas Quentes da Comunidade

### Issues com maior atenção potencial

| Issue | Tema | Demanda |
|-------|------|---------|
| [#6249](https://github.com/nearai/ironclaw/issues/6249) | API parity para MCP servers no standalone Reborn | Funcionalidade — parity com `/api/extensions/install`, `activate`, `PATCH` |
| [#6247](https://github.com/nearai/ironclaw/issues/6247) | Bearer tokens em plaintext no settings row | **Segurança** — headers de credencial expostos em backup/export não criptografado |
| [#6248](https://github.com/nearai/ironclaw/issues/6248) | Credential preflight antes de approval gate | Feature — probe `has_account` para cada `ProductAuthAccount` antes de sandbox |

### PRs com maior escopo/complexidade

| PR | Tamanho | Escopo | Relevância |
|----|---------|--------|------------|
| [#6244](https://github.com/nearai/ironclaw/pull/6244) | XL | MCP, extensions, sandbox, web, CLI | Thread-scoped MCP sessions + SEP-414 + PATCH endpoint |
| [#6116](https://github.com/nearai/ironclaw/pull/6116) | XL | agent, web, workspace, sandbox, CI | Unified generic extension runtime + honest state machine |
| [#6251](https://github.com/nearai/ironclaw/pull/6251) | XL | auth | OAuth denial lifecycle channel-neutral; fixa Slack OAuth contra workspace errado |
| [#4264](https://github.com/nearai/ironclaw/pull/4264) | XL | web, docs | Endpoint direto `POST /api/webchat/v2/automations` |

**Padrão emergente:** Discussão sobre separação de concerns entre `authorize()` fold e dispatch, além de expansão de capacidades MCP para cenários multi-tenant.

---

## 5. Bugs e Estabilidade

### Issues abertas (regressões/bugs)

| Issue | Severidade implícita | Descrição |
|-------|---------------------|-----------|
| [#6215](https://github.com/nearai/ironclaw/issues/6215) | **Alta** | Model cost table / budget accountant não reconstruído no LLM reload chokepoint — regressão de #6174 |
| [#6247](https://github.com/nearai/ironclaw/issues/6247) | **Alta** | `McpServerConfig.headers` com Bearer tokens em plaintext no DB row e mounts de worker |
| [#6249](https://github.com/nearai/ironclaw/issues/6249) | Média | Falta de parity em API de extensions para standalone Reborn |

### Correções merged recentes de estabilidade

- [#6250](https://github.com/nearai/ironclaw/pull/6250) — Indexação de descendant listings em libSQL (eliminação de full scans `LIKE`)
- [#6180](https://github.com/nearai/ironclaw/pull/6180) — Sanitização e dismiss de erros de automação na webui
- [#6182](https://github.com/nearai/ironclaw/pull/6182) — Rejeição de settings imports sem entradas suportadas

**Estado geral de estabilidade:** O refactoring agressivo da arquitetura (Slice C) requer vigilância em regressões funcionais; a issue [#6215](https://github.com/nearai/ironclaw/issues/6215) sobre o cost accountant indica necessidade de cobertura de testes no path de reload.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas

| Issue/PR | Feature | Contexto |
|----------|---------|----------|
| [#6249](https://github.com/nearai/ironclaw/issues/6249) | API surface para MCP lifecycle no standalone Reborn | Parity com gateway v1 |
| [#6248](https://github.com/nearai/ironclaw/issues/6248) | Credential preflight antes de sandbox | `RuntimeCredentialAccountResolver::has_account` para OAuth-backed capabilities |
| [#6246](https://github.com/nearai/ironclaw/pull/6246) | `config set CX` — configuração interativa sem edição de arquivos | Post-onboarding journey para CLI |
| [#6244](https://github.com/nearai/ironclaw/pull/6244) | Thread-scoped MCP sessions + SEP-414 context propagation | Deploy branch em revisão |
| [#4264](https://github.com/nearai/ironclaw/pull/4264) | Endpoint direto para criação de automações | API REST para Reborn automation creation |

### Sinais de roadmap derivados

1. **Retirement do v1:** [#6185](https://github.com/nearai/ironclaw/pull/6185) merged + [#6143](https://github.com/nearai/ironclaw/issues/6143) fechada indicam que a transição `ironclaw` → `ironclaw-reborn` está em estágio avançado
2. **Generic extension runtime:** [#6116](https://github.com/nearai/ironclaw/pull/6116) em reconciliação com main sinaliza consolidação de Option A state machine
3. **Segurança de credenciais:** [#6247](https://github.com/nearai/ironclaw/issues/6247) e [#6248](https://github.com/nearai/ironclaw/issues/6248) apontam para investimento em handling de OAuth/tokens

---

## 7. Resumo de Feedback dos Usuários

**Dores reportadas explicitamente nos issues:**

| Dor | Fonte | Problema |
|-----|-------|----------|
| Inconsistência de API | [#6249](https://github.com/nearai/ironclaw/issues/6249) | Funcionalidade de extensions diferente entre gateway e standalone |
| Exposição de credenciais | [#6247](https://github.com/nearai/ironclaw/issues/6247) | Bearer tokens em plaintext — risco em backups |
| Complexidade de configuração | [#6246](https://github.com/nearai/ironclaw/pull/6246) | Usuários precisam editar `config.toml` manualmente |

**Insights:**
- Usuários do standalone Reborn enfrentam defasagem de features vs. gateway v1
- Credenciais OAuth precisam de UX mais segura (preflight checks)
- Onboarding e configuração pós-instalação são pontos de fricção

**Satisfação implícita:**
- Suporte a Telegram (#5124 closed) demonstra expansão de canais positiva
- A promoção do Reborn a canônico ([#6185](https://github.com/nearai/ironclaw/pull/6185)) reduz confusão de versão para usuários finais

---

## 8. Backlog que Merece Atenção

| Item | Idade | Estado | Prioridade |
|------|-------|--------|------------|
| [#6247](https://github.com/nearai/ironclaw/issues/6247) — Bearer tokens em plaintext | 1 dia | Aberta | **Alta** (segurança) |
| [#6215](https://github.com/nearai/ironclaw/issues/6215) — Cost table regression no reload | ~2 dias | Aberta | **Alta** |
| [#6249](https://github.com/nearai/ironclaw/issues/6249) — API parity MCP no standalone | 1 dia | Aberta | Média-Alta |
| [#6248](https://github.com/nearai/ironclaw/issues/6248) — Credential preflight | 1 dia | Aberta (bloqueada por design) | Média |
| [#4264](https://github.com/nearai/ironclaw/pull/4264) — Automation creation endpoint | ~50 dias | Aberta | Média |
| [#5124](https://github.com/nearai/ironclaw/issues/5124) — Telegram channel para Reborn | ~27 dias | Fechada | Consolidado |

**Recomendações:**
1. **Segurança:** [#6247](https://github.com/nearai/ironclaw/issues/6247) requer priorização imediata — plaintext de tokens em backups é vetor de risco
2. **Arquitetura:** A série W1a-W1c ( slices de `authorize()` fold) precisa de review timely para não bloquear o path de dispatch
3. **Usuários:** Feature parity do standalone Reborn com gateway v1 ([#6249](https://github.com/nearai/ironclaw/issues/6249)) impacta experiência de onboarding

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-07-19. Métricas de comment counts e 👍 podem estar ausentes em PRs de alta atividade.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)
**Data de referência:** 2026-07-19  
**Repositório:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. Panorama do Dia

O projeto CoPaw (também identificado como QwenPaw) manteve alta atividade em 2026-07-19 com **11 issues e 6 PRs atualizados** nas últimas 24 horas. Todas as issues permanecem abertas, sinalizando um pipeline ativo de reports de bugs e features. Uma regressão crítica relacionada a deadlock de sessões (#6245) foi identificada, enquanto a comunidade contribuiu com 5 PRs abertos focados em correções de bugs, performance e novas funcionalidades. O último release formal (v2.0.0.post3) foi verificado no dia anterior, sem novos lançamentos registrados hoje.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24 horas.**

O último release verificado é **v2.0.0.post3**, com issue de verificação [#6223](https://github.com/agentscope-ai/QwenPaw/issues/6223)正处于最后检查阶段.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged

| PR | Autor | Descrição | Impacto |
|---|---|---|---|
| [#1071](https://github.com/agentscope-ai/QwenPaw/pull/1071) | 2niuhe | **feat: Mattermost channel integration** | Nova integração com Mattermost para mensagens, fechando feature request relacionado a #621 |

### PRs Abertos (5)

| PR | Autor | Descrição | Status |
|---|---|---|---|
| [#6247](https://github.com/agentscope-ai/QwenPaw/pull/6247) | zealonexp | **fix(memoryspace): catch OSError in `_saved_tool_refs` is_file()** | Corrige crash quando regex extrai paths extremamente longos |
| [#6248](https://github.com/agentscope-ai/QwenPaw/pull/6248) | feng183043996 | **fix: distinguish offload vs cancel to prevent subprocess kill** | Resolve regressão de deadlock de sessão |
| [#6238](https://github.com/agentscope-ai/QwenPaw/pull/6238) | wananing | **perf(drivers): initialize handlers concurrently** | Melhoria de performance no startup de handlers |
| [#6243](https://github.com/agentscope-ai/QwenPaw/pull/6243) | Wiziechen | **fix(embedding): expose use_dimensions toggle** | Corrige falha em passar dimensões para APIs OpenAI-compatible |
| [#6237](https://github.com/agentscope-ai/QwenPaw/pull/6237) | niceIrene | **feat(scroll): improve exchange and date-aware history recall** | Melhora recall de histórico com suporte a queries date-aware |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| Issue | Título | Comentários | Tipo |
|---|---|---|---|
| [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) | Bug: 末尾出现注释显示 (Memory annotation display) | 3 | Bug |
| [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) | Session blocked when shell exceeds deadline | 2 | Bug (Regressão) |
| [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | env set → subprocess can't see it | 2 | Enhancement |
| [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) | Console embedding dimensions not sent to API | 2 | Bug |

### Análise de Demandas

**Memory & Context Management** domina as discussões:
- **Memory isolation** (#6244): Usuários solicitam conceito de "projetos" para isolar memórias entre sessões
- **Recall crashes** (#6246): Corrupção de histórico causa OSError com paths longos
- **Repeated output loops** (#6241): Falta mecanismo de detecção de repetição no framework

---

## 5. Bugs e Estabilidade

### 🔴 Crítico (Regressão)

| Issue | Severidade | Descrição |
|---|---|---|
| [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) | **Alta** | **Regressão do fix #6056**: Sessões ficam permanentemente bloqueadas quando shell command excede deadline. Afeta Docker/Linux. |
| [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) | **Alta** | `_saved_tool_refs` causa `OSError: [Errno 36] File name too long` em recall_history |

### 🟡 Médio

| Issue | Severidade | Descrição |
|---|---|---|
| [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) | Média | Anotações de memória aparecem no final de conversas após uso prolongado |
| [#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241) | Média | Agent gera saída repetida + memory_search entra em loop infinito |
| [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) | Média | Setting de embedding dimensions não é enviado à API (use_dimensions não exposto) |
| [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Média | Windows PATH concatenation remove ';' entre diretórios npm-style |
| [#6250](https://github.com/agentscope-ai/QwenPaw/issues/6250) | Média | SANDBOX_FALLBACK hardcoded popup de aprovação sem opção de bypass |

### 🟢 Informativo

| Issue | Descrição |
|---|---|
| [#6249](https://github.com/agentscope-ai/QwenPaw/issues/6249) | TUI trava em estado "warming" ao iniciar via código fonte |
| [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | Variáveis de ambiente definidas via `env set` não são visíveis em subprocessos |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Feature | Descrição |
|---|---|---|
| [#6244](https://github.com/agentscope-ai/QwenPaw/issues/6244) | **记忆隔离能力** (Memory Isolation) | Introduzir conceito de "projetos" para isolar memórias entre diferentes tarefas. Reduz escopo de busca e melhora relevância. |
| [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | `env get KEY` ou `--json` flag | Permitir scripts fetcharem valores de ambiente em runtime sem restart |

### Potenciais Entradas no Roadmap
1. **Memory isolation por workspace/projeto** — Aligns com práticas de agentes modernos
2. **Mecanismo de circuit breaker** para loops de memória (#6241)
3. **Configuração de fallback de sandbox** (#6250)
4. **Suporte multi-sistema para PATH** (#6239)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Report | Sensibilidade |
|---|---|---|
| **Estabilidade de Sessão** | Regressão de deadlock (#6245) afeta usuários Docker/Linux | 🔴 Alta |
| **Memory Corruption** | Crash em recall_history (#6246) com histórico grande | 🔴 Alta |
| **UX do Console** | Dimensões de embedding não funcionam (#6242) | 🟡 Média |
| **Ambiente de Execução** | Variáveis de ambiente não propagam (#4641) | 🟡 Média |
| **Integração Windows** | Concatenação de PATH quebra npm globals (#6239) | 🟡 Média |

### Cenários de Uso Reportados
- **Uso intensivo de memória**: Longas sessões de chat causam anotações indesejadas
- **Automação de shell**: Comandos que excedem timeout causam estados permanentemente bloqueados
- **Desenvolvimento local**: TUI não inicializa corretamente via código fonte

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Tempo

| Issue | Idade | Título | Prioridade |
|---|---|---|---|
| [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | ~2 meses | env set → subprocess can't see it | 🟡 Enhancement |

### Issues com Potencial de Impacto

| Issue | Impacto | Recomendação |
|---|---|---|
| [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) | **Alto** | Regressão crítica — PR #6248 em andamento, priorize review |
| [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) | **Alto** | PR #6247 correlato — revisar em conjunto |
| [#6244](https://github.com/agentscope-ai/QwenPaw/issues/6244) | **Médio** | Feature request com discussão substancial — avaliar para roadmap |
| [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | **Médio** | Necessidade recorrente de environment variable dinâmico |

---

## Indicadores de Saúde do Projeto

| Métrica | Status | Tendência |
|---|---|---|
| Issues ativas | 11 | Neutra |
| PRs em review | 5 | Positiva |
| Bugs críticos | 2 | Alerta |
| Regression issues | 1 | Alerta |
| Feature requests | 2 | Neutra |
| Releases recentes | 0 (v2.0.0.post3 verificado) | Estável |

---

**Próximos passos recomendados:**
1. Review priorizado do PR [#6248](https://github.com/agentscope-ai/QwenPaw/pull/6248) para mitigar regressão crítica
2. Avaliação do PR [#6247](https://github.com/agentscope-ai/QwenPaw/pull/6247) como hotfix para crash de memória
3. Triagem da feature request [#6244](https://github.com/agentscope-ai/QwenPaw/issues/6244) para roadmap v2.1

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-07-19

---

## 1. Panorama do Dia

ZeroClaw mantém um alto volume de atividade comunitária com **50 issues e 50 PRs atualizados nas últimas 24h**, embora **nenhuma release tenha sido publicada** no período. O projeto demonstra maturidade em múltiplas frentes — canais (Telegram, Zulip, Twilio SMS), observabilidade (OTel, OTel trace correlation), e arquitetura interna (layer inversion, RPC spec) — com RFCs bem elaborados circulando. A colaboração recente revela um foco significativo em **confiabilidade de goals/agent orchestration** e **qualidade de canais**, sinalizando maturidade para produção.

---

## 2. Lançamentos

**Nenhum lançamento nas últimas 24h.** O projeto está em um ciclo de consolidação de PRs pendentes, especialmente nas stacks de `goal controller` e `delegation boundaries`.

---

## 3. Progresso do Projeto

### PRs Recentes Fechados/Mergidos

| # | Título | Tamanho | Risco | Status |
|---|--------|---------|-------|--------|
| [#9135](https://github.com/zeroclaw-labs/zeroclaw/pull/9135) | fix(docs): avoid expanding peer-group placeholder | XS | Low | **CLOSED** |
| [#8440](https://github.com/zeroclaw-labs/zeroclaw/pull/8440) | feat(telegram): add per-channel inbound debounce | M | Medium | **CLOSED** |
| [#8778](https://github.com/zeroclaw-labs/zeroclaw/pull/8778) | chore(assets): optimize images via ImgBot lossless compression | XS | Low | **CLOSED** |

### Destaques de Progresso

- **Telegram debounce configurável** ([#8440](https://github.com/zeroclaw-labs/zeroclaw/pull/8440)): Adicionado `debounce_ms` por alias Telegram, resolvendo bursts de mensagens curtas. Avanço prático para estabilidade de canais.

- **Docs refinadas**: Correções de placeholders e alinhamento do guia de instalação com o comportamento real do installer ([#9135](https://github.com/zeroclaw-labs/zeroclaw/pull/9135), [#9043](https://github.com/zeroclaw-labs/zeroclaw/pull/9043)).

### PRs Abertos de Maior Impacto (Stack de Goals)

| # | Título | Tamanho | Risco |
|---|--------|---------|-------|
| [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688) | feat(runtime): add trusted goal tools and delegation boundaries | XL | High |
| [#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687) | feat(runtime): add goal controller and verifier | XL | High |
| [#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) | fix(goal): preserve running goals across daemon reload | XL | High |
| [#8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746) | fix(goal): stop active goal self-resume loops | XL | High |

> **Análise**: A stack de PRs `vrurg` sobre goals constitui a maior iniciativa corrente. A série adiciona ferramentas (`goal_start`, `goal_objective`, `goal_resume`), controller, verifier, e resolve loops de auto-resume — fundamental para agentes de produção.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Prioridade | Status |
|---|--------|-------------|----|------------|--------|
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | [Bug]: zeroclaw does not know it can add cron | 14 | 0 | p2 | **CLOSED** |
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | Token consumption minimization via skill compilation | 9 | 1 | p2 | OPEN |
| [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) | Restore GitHub as a native channel | 8 | 0 | p2 | OPEN |
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | [Bug]: Telegram channel cannot be configured | 5 | 0 | p1 | OPEN |

### Análise dos Temas Dominantes

**1. Cron Agent Awareness ([#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862))** — **RESOLVIDO**: Bug onde o agente não reconhecia sua própria ferramenta `zeroclaw cron`. A alta contagem de comentários (14) reflete frustração acumulada — users esperam que o agente "saiba" suas capacidades. A resolução fecha uma lacuna de UX significativa.

**2. Minimização de Custo via Compilação de Skills ([#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146))** — Proposta madura (9 comentários, 1 👍) para compilar SKILL.md em artefatos lean, reduzindo token consumption drasticamente. Dado que skills frequentemente têm 400+ linhas, o impacto em custos de LLM é direto. Status `accepted` indica alinhamento com roadmap.

**3. GitHub como Canal Nativo ([#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079))** — 8 comentários, risco `high`. Hoje GitHub requer "custom glue". Torná-lo first-class alinharia ZeroClaw com fluxos DevOps, dado o foco em agentes e automação.

**4. RFCs de Observabilidade** — Dois RFCs relacionados ([#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232), [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)) sobre OTel e cross-turn correlation, ambos em `status:accepted`. Indicam prioridade em telemetria para produção.

---

## 5. Bugs e Estabilidade

### Bugs Abertos por Severidade

**P1 — Workflow Blocked (Crítico)**

| # | Título | Canal | Risco | Atualizado |
|---|--------|-------|-------|------------|
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | Telegram channel cannot be configured | Telegram | High | 2026-07-18 |

> **Diagnóstico**: `zeroclaw channels doctor` alega canais não configurados mesmo após setup via quickstart/zerocode. O bot não responde no TG mas funciona no CLI. Possivelmente relacionado a outro issue de configuração.

**P2 — Degraded Behavior**

| # | Título | Componentes | Risco | Atualizado |
|---|--------|-------------|-------|------------|
| [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) | install.sh selects generic Linux binary on Android/Termux | install | Medium | 2026-07-18 |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | Agent doesn't have context of the cron job it's run | cron | High | 2026-07-18 |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | zeroclaw does not know it can add cron | tooling/ci | Medium | **RESOLVIDO** |

### Bugs Recentemente Fechados

| # | Título | Resolução | Impacto |
|---|--------|-----------|---------|
| [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | Context Overflow Causes Hallucination | CLOSED | Provider Kimi + Discord — contexto overflow causa drift/hallucinação |

### Métricas de Estabilidade

- **Bugs P1 abertos**: 1 (Telegram config)
- **Bugs P2 abertos**: 3+ (cron context, Android install, etc.)
- **Bugs fechados nas últimas 24h**: 2
- **PRs de bug abertos**: 6 ([#8779](https://github.com/zeroclaw-labs/zeroclaw/pull/8779), [#8851](https://github.com/zeroclaw-labs/zeroclaw/pull/8851), [#9075](https://github.com/zeroclaw-labs/zeroclaw/pull/9075), [#9018](https://github.com/zeroclaw-labs/zeroclaw/pull/9018), [#9144](https://github.com/zeroclaw-labs/zeroclaw/pull/9144))

> **Observação**: A atividade de PRs de bug é alta, indicando maturidade no processo de triagem e fix. O bug de Telegram (#8505, P1) merece atenção prioritária da equipe.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Aceitas (Status: Accepted)

| # | Título | Domínio | Risco | Sinais de Prioridade |
|---|--------|---------|-------|---------------------|
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | Token minimization via skill compilation | Agent/Skills | High | 9 comments, 1 👍 |
| [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) | GitHub as native channel | Architecture | High | 8 comments |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | Install skills from .well-known URI | Skills | High | 5 comments, standardization upstream |
| [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | Opt-in LSP support for ZeroCode | Tool | High | 4 comments, alinhado com Claude Code/OpenCode |
| [#6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427) | Add Twilio SMS channel | Channel | High | 2 comments |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | Realtime speech-to-speech for Gemini Live | Channel | High | 2 comments, multimodal trend |
| [#6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864) | Invert zeroclaw-channels → zeroclaw-runtime dependency | Architecture | High | 2 comments |
| [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) | Easy per-chat model switching | Config | High | 3 comments, 1 👍 |

### RFCs em Andamento

| # | Título | Tipo | Prioridade |
|---|--------|------|------------|
| [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | Opt-in LSP support | RFC | p2, High |
| [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) | Structured Observability Enhancement | RFC | p2, High |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | Cross-turn conversation correlation to OTel | RFC | p2, High |
| [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) | Unify slash-command registries | RFC | p2, High |

### Sinais de Roadmap

1. **Multi-modalidade crescente**: Gemini Live speech-to-speech (#8780), PDF support (#5745), LSP support (#5907)
2. **Expansão de canais**: GitHub nativo (#2079), Twilio SMS (#6427), Zulip (#6437),drive listing Windows (#9149)
3. **Custo e eficiência**: Skill compilation (#5146), cached tokens persistence (#7248), OpenRouter fallbacks (#8138)
4. **Observabilidade enterprise**: OTel integration (#7232, #8933), OpenRPC spec (#7131)
5. **Arquitetura interna**: Layer inversion (#6864), goal orchestration (stacks de PRs)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Issue | Severidade | Evidência |
|-----|-------|------------|-----------|
| Agente não conhece suas próprias ferramentas | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | p2 | "zeroclaw does not know it can add cron" — UX quebrada |
| Custo de tokens excessivo em skills | [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | p2 | 400+ linhas SKILL.md por skill, enviado a cada chamada |
| Configuração de canais problemática | [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | p1 | `channels doctor` falha mesmo pós-setup |
| Contexto perdido em cron jobs | [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | p2 | Agente não referencia mensagem enviada |
| Hallucination por context overflow | [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | p2 | Provider Kimi + Discord, longo contexto |
| Instalação quebrada em Android/Termux | [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) | p2 | install.sh seleciona binary incorreto |

### Cenários de Uso Emergentes

- **DevOps/Automação**: GitHub como canal nativo, cron jobs com contexto
- **Produção Enterprise**: Observabilidade OTel, RPC machine-readable, MariaDB memory backend
- **Multi-plataforma**: Windows shell configurável, drive listing, Android/Termux
- **Multi-modal**: Gemini Live, PDF ingestion, LSP coding
- **Custo-conscious**: Skill compilation, cached tokens, OpenRouter fallbacks

### Indicadores de Satisfação/Insatisfação

- **Positivo**: 4 PRs closed no dia, RFCs com aceite rápido (3 aceitos), stack de goals bem acolhida
- **Negativo**: Bug P1 de Telegram sem resolução, issue de hallucination fechada mas sem evidência de fix
- **Neutro**: Alta diversidade de features — usuário quer mais canais, mais eficiência, mais observabilidade simultaneamente

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas



</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*