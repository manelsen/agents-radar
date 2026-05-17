# Resumo diário do ecossistema de agentes de IA 2026-05-18

> Issues: 3 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-05-17 20:42 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto: NullClaw — 2026-05-18

---

## 1. Panorama do dia

O projeto NullClaw apresenta uma atividade limitada nas últimas 24h, sem movimentações em pull requests ou releases. O cenário atual é marcado por três issues abertas registradas entre 15 e 17 de maio, todas relacionadas a bugs técnicos em funcionalidades críticas do sistema: problemas de autorização no scheduler, falha na entrega de resultados do spawn tool via Telegram e comportamento incorreto do memory_list com sessão global. A ausência de PRs merged indica que o projeto não está em ciclo de entrega acelerado no momento, potencialmente em fase de triagem e diagnóstico das issues reportadas pela comunidade.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.** O projeto não publicou atualizações de versão, o que sugere que a atenção atual está concentrada na investigação de bugs reportados pela comunidade. Recomenda-se monitorar o repositório para eventuais hotfixes emergenciais.

---

## 3. Progresso do projeto

**Nenhuma PR atualizada, merged ou fechada nas últimas 24h.** O projeto não demonstra avanço em merge de código no período analisado. Isso pode indicar duas possibilidades: (1) a equipe está em modo de resposta a issues/bugs, priorizando estabilidade antes de novos desenvolvimentos, ou (2) o ciclo de desenvolvimento está em pausa temporária. Sem commits ou PRs recentes, não há visibilidade sobre o roadmap de curto prazo sendo executado.

---

## 4. Temas quentes da comunidade

### Issues com maior relevância técnica

**Issue #915** — `[bug] Problem with scheduler unauthorized`  
Autor: scabros | 1 comentário  
Link: [nullclaw/nullclaw#915](https://github.com/nullclaw/nullclaw/issues/915)  
Resumo: Usuário reportando falha de autorização no scheduler do NullClaw ao executar em Ubuntu com Ollama externo (qwen3.6:27b em RTX 3090). O LLM funciona corretamente, tool calling opera normalmente na maioria dos casos, porém o scheduler falha indistintamente via Telegram chat.  
**Análise:** Bug crítico que compromete funcionalidade central do projeto. A interação via Telegram indica uso em produção. Comportamento intermitente (funcionalidade geral OK, mas scheduler falhando) sugere problema de scoped authorization ou token handling específico do componente scheduler.

**Issue #918** — `spawn tool results never delivered to Telegram (bus=null in channel_loop)`  
Autor: weissfl | 0 comentários  
Link: [nullclaw/nullclaw#918](https://github.com/nullclaw/nullclaw/issues/918)  
Resumo: O tool `spawn` cria subagentes corretamente, retorna `task_id` e o subagente executa a tarefa — porém o resultado nunca chega ao chat Telegram. O bug está localizado em `channel_loop.zig:1296`, onde `SubagentManager` é inicializado.  
**Análise:** Falha silenciosa (sem erro aparente, resultado perdido). Prioridade alta por afetar entrega de resultado ao usuário final. Trecho de código especificado (`channel_loop.zig:1296`) facilita debug. Potencial problema de race condition ou initialization order no bus de comunicação entre subagentes e channel principal.

**Issue #917** — `memory_list tool always passes session_id, making global (session_id=NULL) entries invisible`  
Autor: weissfl | 0 comentários  
Link: [nullclaw/nullclaw#917](https://github.com/nullclaw/issues/917)  
Resumo: O tool `memory_list` sempre passa o session_id atual para o backend, filtrando todas as entradas globais (session_id = NULL).  
**Análise:** Bug de lógica de filtragem que quebra funcionalidade de memória compartilhada. Afeta cenários onde memória global é utilizada para contexto compartilhado entre sessões. Issue técnica bem delimitada com steps de reprodução claros.

---

## 5. Bugs e estabilidade

### Breakdown por severidade

**🔴 Alta (2 issues)**  
- `#918`: Spawn tool perde resultados silenciosamente — quebra completa de funcionalidade de subagentes via Telegram  
- `#915`: Scheduler unauthorized — impossibilita uso do scheduler em produção

**🟡 Média (1 issue)**  
- `#917`: memory_list oculta entradas globais — quebra feature de memória compartilhada, mas não causa crash

### Padrões identificados

Três bugs em 24h é volume moderado. Padrão relevante: dois dos três bugs envolvem comunicação entre componentes (scheduler authorization, spawn delivery, session filtering). Isso sugere possíveis problemas de arquitetura em integração de subsistemas ou regressões recentes em código de comunicação inter-componente. Não há indication de crash ou instabilidade sistêmica — os bugs são funcionais, não operacionais.

---

## 6. Pedidos de features e sinais de roadmap

**Nenhuma issue de feature request registrada nas últimas 24h.** O volume de issues é exclusivamente de bugs, indicando que o estado atual do projeto está em modo "stabilidade" mais do que evolução de funcionalidades. A ausência de feature requests pode significar que a comunidade está satisfeita com o feature set atual e o foco é confiabilidade, ou que o ciclo de planejamento está em fase de definição sem exposição pública no GitHub.

---

## 7. Resumo de feedback dos usuários

### Dores reais identificadas

| Dor | Cenário | Impacto |
|-----|---------|---------|
| **Scheduler não funciona** | Usuário em produção com Ollama + RTX 3090 + Telegram | Funcionalidade centralbreached |
| **Resultados de spawn sumem** | Subagentes executam mas não retornam ao Telegram | Perda de trabalho sem feedback |
| **Memória global inacessível** | Sessões não enxergam entries globais | Feature quebrada para workflows cross-session |

### Padrões de uso inferidos

- **Integração Telegram como canal primário**: Usuários interagem com o NullClaw via Telegram (mencionado em todas as issues)  
- **Arquitetura multi-agente em uso**: Spawn de subagentes indica arquitetura complexa com delegação de tarefas  
- **Uso de Ollama como backend LLM local**: scabros utilizando qwen3.6:27b em GPU dedicada sugere cenário de privacidade/deploy on-premise  
- **Memória persistente como feature consolidada**: Usuários confiam em memory_store/list para workflows contínuos

### Satisfação/Insatisfação

**Insatisfação moderada**: Três bugs reportados por dois usuários (scabros e weissfl) em janela curta indica usuários ativos reportando problemas. Nenhum uso de linguagem de frustration extrema, mas silêncio ("never arrives") em #918 indica problema recorrente ou crítico o suficiente para merecer reporte detalhado.

---

## 8. Backlog que merece atenção

### Issues sem resposta significativa

| Issue | Idade | Comentários | Prioridade | Ação recomendada |
|-------|-------|-------------|------------|-------------------|
| `#915` — scheduler unauthorized | ~3 dias | 1 | 🔴 Alta | Triagem de equipe — determinar se é regressão ou config issue |
| `#918` — spawn results lost | ~1 dia | 0 | 🔴 Alta | Reprodução e root cause analysis urgente |
| `#917` — memory_list global entries | ~1 dia | 0 | 🟡 Média | Investigar query logic em backend |

### Análise de tendência

A velocidade de reporte de bugs (3 issues em ~3 dias) é maior que a velocidade de resolução visível (0 PRs merged). Se essa taxa se manter, o backlog de issues pode crescer. **Recomendação**: Priorizar triagem em `#918` primeiro — é o bug mais crítico (silently loses output) e tem localização de código precisa. `#915` requer investigação de ambiente do usuário para determinar se é bug ou misconfiguration.

---

## 📊 Indicadores de Saúde do Projeto

| Métrica | Status | Observação |
|---------|--------|------------|
| Atividade de código (PRs) | 🔴 Baixa | 0 PRs em 24h |
| Issues abertas (novas) | 🟡 Moderada | 3 bugs em 24h |
| Releases | 🟢 Nenhuma | Sem mudanças de versão |
| Tempo de resposta a issues | 🟡 A definir | 0-1 comentários em issues novas |
| Severidade dos bugs | 🔴 Alta | 2 críticos, 1 médio |

**Veredicto geral**: Projeto em modo de estabilização com bugs críticos reportados que afetam funcionalidades core (scheduler, spawn delivery). A ausência de atividade de PR pode indicar foco interno em resolução de issues ou equipe reduzida. Recomendação: Escalonar triagem dos bugs #918 e #915 com urgência.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-05-18
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** neste período. De um lado, projetos maduros como **Hermes Agent, IronClaw e ZeroClaw** mantêm ritmo intenso de desenvolvimento (40-50+ eventos de PR/issue por dia), sinalizando equipes substanciais e comunidades ativas. Do outro, **NullClaw** demonstra estagnação preocupantes com zero PRs merged e bugs críticos não resolvidos. A tendência dominante é a **expansão de providers multi-modelo** (SiliconFlow, xAI, Zenmux, LM Studio) e a maturação de funcionalidades de memória e contexto, enquanto desafios recorrentes em streaming, autenticação OAuth e compatibilidade com modelos de reasoning criam pressão constante sobre todas as plataformas.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Bugs Críticos | Saúde Geral |
|---------|--------------|-----------|----------|---------------|-------------|
| **NullClaw** | 3 | 0 | 0 | 2 | 🔴 Estagnada |
| **NanoBot** | 6 | 17 (9 merged) | 0 | 2 | 🟢 Saudável |
| **Hermes Agent** | 50 | 50 (3 merged) | 0 | 6 P1 | 🟡 Ativa/Complexa |
| **PicoClaw** | 12 | 7 | 1 nightly | 1 | 🟢 Crescente |
| **IronClaw** | 12 | 50 (20 merged) | 0 | 3 + CI | 🟠 Regressões |
| **CoPaw** | 17 | 17 (4 merged) | 0 | 3 | 🟡 Estável |
| **ZeroClaw** | 20 | 50 (3 merged) | 0 | 6 P1 | 🔴 Crítica |

**Observações:**
- **IronClaw** lidera em volume de merges (20/dia), indicando alta capacidade de integração
- **NullClaw** é o único projeto sem qualquer PR merged no período — sinal de risco
- **NanoBot** apresenta melhor taxa de resolução (60%) среди projetos ativos

---

## 3. Posicionamento do Projeto Principal

### NanoBot como Referência de Saúde

| Dimensão | NanoBot | Diferencial |
|----------|---------|--------------|
| **Velocidade** | 9 PRs merged/24h | Taxa de resolução 60% |
| **Qualidade** | 89% cobertura de testes (CoPaw), PRs com escopo bem definido | Revisão ativa, menos bugs críticos abertos |
| **Comunidade** | 17 PRs abertos aguardando, 0 issues sem resposta | Triagem consistente |
| **Roadmap** | Claro: v0.2.0 com Docker unificado, compressão de tokens, skill router | Prioridades definidas |

### Comparação de Tamanho de Comunidade

| Projeto | Issues + PRs (7 dias) | Engajamento |
|---------|------------------------|--------------|
| Hermes Agent | ~100 | Muito Alto |
| IronClaw | ~62 | Alto |
| ZeroClaw | ~70 | Alto |
| PicoClaw | ~19 | Moderado |
| CoPaw | ~34 | Moderado |
| NanoBot | ~23 | Moderado-Alto |
| NullClaw | ~3 | Baixo |

**Conclusão:** Hermes Agent e IronClaw possuem as maiores comunidades em volume absoluto. NanoBot demonstra melhor eficiência operacional por PR resolvido. NullClaw está significativamente atrás em todas as métricas.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Compatibilidade com Modelos de Reasoning

**ZeroClaw, PicoClaw e Hermes Agent** reportam independentemente problemas com a nova geração de modelos que emitem `reasoning_content` como campo separado:

| Projeto | Issue | Modelo Afetado |
|---------|-------|----------------|
| ZeroClaw | #6059 | DeepSeek-V4 (thinking mode) |
| ZeroClaw | #5600 | Kimi-code (streaming tool-call) |
| ZeroClaw | #6672 | Xiaomi mimo-v2.5 |
| PicoClaw | #2462 | DeepSeek-V4 (CLI reasoning tokens) |

**Implicação:** A padronização detool response envelopes para modelos de reasoning é o principal desafio técnico transversal.

### 4.2 Estabilidade de Autenticação OAuth

Três projetos lidam com problemas de OAuth complexity:

| Projeto | Problema | Impacto |
|---------|----------|---------|
| Hermes Agent | xAI OAuth PKCE falha em Docker/LAN (#27573, #26990) | Autenticação fragmentada |
| IronClaw | Gmail OAuth token inválido mostra sucesso (#3733) | UX quebrada |
| PicoClaw | OpenAI OAuth em Termux Android (#2462) | Setup edge devices |

### 4.3 Infraestrutura de Testes

| Projeto | Iniciativa | Cobertura |
|---------|------------|-----------|
| CoPaw | 481 testes de segurança, gate L1 no CI | 89% |
| IronClaw | Framework E2E binary para Reborn (#3702) | Em desenvolvimento |
| ZeroClaw | Streaming payload tracing (#6742) | Melhora de debug |

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura e Público-Alvo

| Projeto | Arquitetura | Público Primário |
|---------|-------------|------------------|
| **Hermes Agent** | Multi-gateway (Telegram, Discord, Slack, WhatsApp, Feishu) | Empresas com stack de comunicação heterogênea |
| **IronClaw** | Runtime modular com Reborn, TOML config | Desenvolvedores avançados, TEE agents |
| **ZeroClaw** | Rust-native, skills system, cron jobs | Automação operacional, devs Rust |
| **PicoClaw** | Python, providers abertos, LM Studio focus | Usuários self-hosted, privacidade |
| **CoPaw** | Python, Tauri desktop, WeChat integration | Usuários chineses, desktop-first |
| **NanoBot** | Python, Docker-first, streaming otimizado | Deploy em container, simplicidade |
| **NullClaw** | Zig, Telegram-centric, subagentes | Nicho técnico específico |

### 5.2 Estratégias de Diferenciação

| Estratégia | Projetos | Exemplos |
|------------|----------|----------|
| **Hub de Providers** | PicoClaw, Hermes Agent, NanoBot | SiliconFlow, LM Studio, Zenmux, xAI, Ollama Cloud |
| **Observabilidade** | ZeroClaw, IronClaw | SSE logs, Trace Commons, health pulse |
| **Segurança** | CoPaw, IronClaw | Testes L1, TEE support, WASM hooks |
| **Skills/Extensibilidade** | ZeroClaw, Hermes Agent | SkillMeta, kanban auto-decomposition, MCP |
| **Desktop Native** | CoPaw | Tauri 2.x, system tray, QwenPaw Desktop |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Categoria | Projetos | Característica |
|-----------|----------|----------------|
| **Iteração Rápida** | Hermes Agent, IronClaw, ZeroClaw | 40-50+ eventos/dia, múltiplos PRs simultâneos |
| **Crescimento Organizado** | NanoBot, PicoClaw | 9-17 PRs/dia, foco em qualidade e releases |
| **Estável/Maturando** | CoPaw | Volume moderado, foco em test automation |
| **Estagnado** | NullClaw | 0 PRs, 3 bugs sem resposta |

### 6.2 Debt Técnico e Backlog

| Projeto | Dívida Visível | Risco |
|---------|----------------|-------|
| **ZeroClaw** | 153 commits perdidos (#6074), 6 P1 abertas | Alto — perda de código aprovado |
| **IronClaw** | Regressões v0.28.2, CI quebrado | Alto — confiança de produção afetada |
| **NullClaw** | 3 bugs críticos, 0 triagem | Crítico — estagnação |
| **PicoClaw** | 6 issues stale >7 dias | Moderado — backlog overflow |
| **Hermes Agent** | 36 PRs abertos, output truncation recorrente | Moderado — complexidade crescente |

### 6.3 Ciclo de Releases

| Projeto | Padrão | Status |
|---------|--------|--------|
| **PicoClaw** | Nightly builds automáticas | Mais frequente |
| **NanoBot** | Releases formais a cada ~5 dias | Consistente |
| **IronClaw** | v0.28.2 com regressões | Instável |
| **Hermes Agent** | v0.14.0 há 2 dias | Em consolidação |
| **NullClaw** | Nenhum release | Inativo |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Multi-provider como padrão** | LM Studio (#28 PicoClaw), SiliconFlow (#2885), Zenmux (#27546), Ollama Cloud (#2225) | Usuários exigem flexibilidade de modelos além de OpenAI |
| **Reasoning models em produção** | DeepSeek-V4, Kimi, Xiaomi mimo, Qwen 3.6 com tool-call | Ferramentas precisam adaptar-se a envelopes de resposta não-padronizados |
| **Desktop agents** | Tauri app (CoPaw), Windows tray (#4041), desktop support (ZeroClaw #6710) | Agentes de longa duração em desktop ganando tração |
| **Enterprise/self-hosted** | OAuth para MCP (#2546), tool policies (#2837), TEE agents (IronClaw) | Deploys corporativos exigem isolamento e controle |
| **Segurança como gate** | 481 testes L1 (CoPaw), WASM hooks (IronClaw), RCE vulnerability (#4470) | Plugins de terceiros ampliam superfície de ataque |

### 7.2 Prioridades Emergentes por Tipo de Usuário

| Usuário | Demanda Prioritária |
|---------|---------------------|
| **Self-hosted/Dev** | Providers alternativos, LM Studio, Ollama, tooling de debugging |
| **Enterprise** | OAuth multi-platform, TEE, permissions granulares, compliance |
| **Produtividade** | Cron/scheduling robusto, multi-turn memory, skill persistence |
| **Edge/Mobile** | Android/Termux, Termux Telegram, resource efficiency |

### 7.3 Sinais de Alerta Transversais

1. **Fragmentação de OAuth** — 3 projetos com problemas independentes de autenticação
2. **Streaming instabilidade** — WebUI rendering, SSE logs, tool-call delivery
3. **Config vs. implementação** — Timeout configurável mas ignorado, `context_aware_tools` dead code, `rerank_*` declarados mas não lidos

---

## Recomendações para Decisores

| Decisor | Recomendação |
|---------|--------------|
| **Adoção de projeto** | Priorizar **NanoBot** para novos deployments (saúde, triagem ativa); **PicoClaw** para privacidade/self-hosted |
| **Contribuição** | **IronClaw** oferece oportunidade em área de alto impacto (Reborn, hooks framework) com volume de PRs |
| **Avoid** | **NullClaw** apresenta risco de estagnação; **ZeroClaw** dívida técnica significativa (153 commits) |
| **Monitoramento** | **Hermes Agent** e **IronClaw** para tendências de features enterprise; **CoPaw** para segurança/testing patterns |

---

*Relatório consolidado em 2026-05-18. Dados extraídos dos resumos de atividade de cada repositório GitHub.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>


# Relatório do Projeto NanoBot — 2026-05-18

## 1. Panorama do dia

O projeto NanoBot mantém **alta atividade de desenvolvimento** com 17 PRs atualizados e 6 issues nos últimos 7 dias. A versão 0.1.5.post3.2026.05.13 continua como release mais recente, sem novas versões publicadas hoje. O foco predominante da comunidade está na **estabilidade da WebUI**, correção de bugs de deployment Docker e melhorias no pipeline de streaming e consolidação de memória. Observa-se uma tendência de crescimento em issues de integração com canais externos (WeChat) e otimização de consumo de tokens.

---

## 2. Lançamentos

**Nenhuma nova release publicada nas últimas 24h.**

| Versão | Data | Status |
|--------|------|--------|
| 0.1.5.post3.2026.05.13 | 2026-05-13 | Mais recente |
| 0.2.0 | Em desenvolvimento | Docker compose unificado |

> **Nota:** A versão 0.2.0 está em fase de refinamento conforme evidenciado pelas issues de documentação Docker (#3873) e PRs de fix (#3870, #3872). Aguardando consolidação antes de release formal.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (9 nas últimas 24h)

| PR | Título | Impacto | Link |
|----|--------|---------|------|
| **#3877** | [bug] feat(webui+agent): optimize streaming, activity rendering, and runtime sync | **Crítico** — Melhora responsividade da WebUI em conversas longas, eliminando re-renders excessivos em cada token | [#3877](https://github.com/HKUDS/nanobot/pull/3877) |
| **#3881** | [bug] fix(agent): resolve race between AutoCompact and Consolidator | **Alto** — Corrige condição de corrida que podia causar corrupção de sessão em ambientes concorrentes | [#3881](https://github.com/HKUDS/nanobot/pull/3881) |
| **#3788** | feat(goal): /goal command & long-running tasks | **Alto** — Implementa comando de metas persistentes e tasks de longa duração com merge de histórico | [#3788](https://github.com/HKUDS/nanobot/pull/3788) |
| **#3878** | [bug] fix(cli): buffer reasoning tokens to avoid one-token-per-line | **Médio** — Corrige display degradado de tokens de reasoning em CLI (DeepSeek-V4) | [#3878](https://github.com/HKUDS/nanobot/pull/3878) |
| **#3874** | docs(deployment): match docker run gateway example to docker-compose.yml | **Médio** — Alinha documentação com Compose (port 8765, security caps) | [#3874](https://github.com/HKUDS/nanobot/pull/3874) |
| **#3864** | fix(providers): recognize Chinese rate-limit marker '访问量过大' | **Médio** — Adiciona retry automático para rate-limits de providers chineses | [#3864](https://github.com/HKUDS/nanobot/pull/3864) |
| **#3870** | fix: docker build (hatch_build.py) | **Baixo** — Fix unidimensional para construção Docker | [#3870](https://github.com/HKUDS/nanobot/pull/3870) |
| **#3872** | fix docker build and webui | **Baixo** — Adiciona porta frontend ao Dockerfile | [#3872](https://github.com/HKUDS/nanobot/pull/3872) |
| **#3866** | docs(configuration): expand secrets section | **Baixo** — Melhora documentação de variáveis de ambiente | [#3866](https://github.com/HKUDS/nanobot/pull/3866) |

### Destaque: Correção de Race Condition #3881

O PR #3881 resolve um problema crítico onde `AutoCompact` e `Consolidator` operavam no mesmo session state sem sincronização adequada:
- `AutoCompact` não utilizava lock
- Ambos escreviam para `sessions.save()` simultaneamente
- Resultado: possível corrupção de dados de sessão em alta concorrência

**Link:** [#3881](https://github.com/HKUDS/nanobot/pull/3881)

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (por comentários)

| Issue | Título | Comentários | 👍 | Categoria | Link |
|-------|--------|-------------|-----|-----------|------|
| **#3790** | [bug] WebUI会话-打印内容显示错乱 | **14** | 0 | Bug Crítico | [#3790](https://github.com/HKUDS/nanobot/issues/3790) |
| **#3857** | bootstrap failed: HTTP 500 | 1 | 0 | Bug Crítico | [#3857](https://github.com/HKUDS/nanobot/issues/3857) |
| **#3863** | 微信不能Login | 1 | 0 | Bug Canal | [#3863](https://github.com/HKUDS/nanobot/issues/3863) |

### Issue #3790 — Display de WebUI

**Problema:** Após atualização para 5.13, conteúdo de sessão WebUI aparece "错乱" (desorganizado/corrompido), exigindo refresh.

**Análise:** Este é o issue com maior volume de comentários (14), indicando:
1. Regressão introduzida na versão 0.1.5.post3.2026.05.13
2. Impacto em experiência do usuário final
3. Comunidade aguardando hotfix

**Link:** [#3790](https://github.com/HKUDS/nanobot/issues/3790)

---

## 5. Bugs e Estabilidade

### Issues Abertas por Severidade

#### 🔴 Crítico (Impacto em Produção)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #3790 | WebUI sessão exibe conteúdo desorganizado | **Aberta** | [#3790](https://github.com/HKUDS/nanobot/issues/3790) |
| #3857 | Bootstrap falha com HTTP 500 | **Aberta** | [#3857](https://github.com/HKUDS/nanobot/issues/3857) |

#### 🟠 Alto (Funcionalidade Principal)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #3863 | WeChat login falha ("微信版本較低") | **Aberta** | [#3863](https://github.com/HKUDS/nanobot/issues/3863) |
| #3882 | Upgrade WeChat para openclaw-weixin v2.x | **Fechada** (discussão) | [#3882](https://github.com/HKUDS/nanobot/issues/3882) |

#### 🟡 Médio (Documentação/Configuração)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #3873 | Docker deployment docs inconsistências com v0.2.0 | **Aberta** | [#3873](https://github.com/HKUDS/nanobot/issues/3873) |
| #3876 | WebUI localhost-only — inacessível via Docker | **Aberta** | [#3876](https://github.com/HKUDS/nanobot/issues/3876) |

### Análise de Regressões

O release 0.1.5.post3.2026.05.13 apresenta **2 bugs críticos abertos**:
1. **WebUI display corruption (#3790)** — possivelmente relacionado ao PR #3877 que otimiza streaming e rendering
2. **HTTP 500 bootstrap (#3857)** — nova falha após última atualização

**Recomendação:** Considerar hotfix urgente para a versão 0.1.5.post4 ou incluir correções no próximo patch.

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs Abertos com Maior Potencial

| PR | Título | Valor Proposto | Complexidade | Link |
|----|--------|----------------|--------------|------|
| **#3847** | feat(skill): skill_load tool para preservar conteúdo em multi-turn | Evita perda de skill.md em conversas longas | Alta | [#3847](https://github.com/HKUDS/nanobot/pull/3847) |
| **#3880** | feat(memory): comprimir tool results antes de consolidação | Reduz input do LLM de archive em ~50%+ para resultados longos | Média | [#3880](https://github.com/HKUDS/nanobot/pull/3880) |
| **#3865** | feat(agent): BM25-lite skill router (~60% redução system prompt) | Seleciona top-5 skills relevantes ao invés de todas | Média-Alta | [#3865](https://github.com/HKUDS/nanobot/pull/3865) |
| **#3883** | feat(cli): model configuration management commands | CLI unificada para gerenciar modelos e APIs | Baixa | [#3883](https://github.com/HKUDS/nanobot/pull/3883) |
| **#3368** | feat(heartbeat): model override por fase | Heartbeat em modelo mais barato separado do agente principal | Média | [#3368](https://github.com/HKUDS/nanobot/pull/3368) |
| **#3879** | feat: add MiniMax image generation provider | Adiciona MiniMax como provider de geração de imagem | Baixa | [#3879](https://github.com/HKUDS/nanobot/pull/3879) |

### Sinais de Tendência do Roadmap

1. **Otimização de Custo/Tokens** — Múltiplas iniciativas (#3880, #3865) visam reduzir consumo de tokens
2. **Modularização CLI** — Comandos especializados para configuração de modelos (#3883)
3. **Expansão de Providers** — Integração MiniMax para image generation (#3879)
4. **Durabilidade de Memória** — Skill loading robusto e compressão de resultados (#3847, #3880)

**Link dos PRs:** [#3847](https://github.com/HKUDS/nanobot/pull/3847) | [#3880](https://github.com/HKUDS/nanobot/pull/3880) | [#3865](https://github.com/HKUDS/nanobot/pull/3865) | [#3883](https://github.com/HKUDS/nanobot/pull/3883)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Descrição | Frequência | Issues Relacionadas |
|-----------|-----------|------------|---------------------|
| **Estabilidade WebUI** | Conteúdo de chat corrompido/duplicado | Alta | #3790 |
| **Deployment Docker** | Configurações inconsistentes entre docs e docker-compose | Média | #3873, #3876, #3870 |
| **Canais Externos** | WeChat login falhando (protocolo desatualizado) | Baixa | #3863, #3882 |
| **Rate Limiting** | Providers chineses retornam erros não-reconhecidos | Média | #3864 (já corrigido) |

### Cenários de Uso Identificados

1. **Agente pessoal em container** — Usuários tentando deploy via Docker com WebUI remota estão enfrentando 403/500 errors (#3876, #3857)
2. **Assistente multi-turn com skills** — Perda de conteúdo de skill.md em conversas longas está sendo addressed pelo PR #3847
3. **CLI com modelos de reasoning** — Display de tokens "reasoning" em formato quebrado (DeepSeek-V4) foi corrigido em #3878

### Satisfação Geral

| Métrica | Status |
|---------|--------|
| Issues críticas abertas | 2 (WebUI-related) |
| PRs fechados (últimas 24h) | 9 |
| Razão open/close | ~50% (saudável) |
| Issues aguardando triagem | 0 (todas responded) |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta > 48h

**Nenhuma issue atualizada nas últimas 24h está sem resposta.**

Todas as 6 issues têm atividade recente (atualização: 2026-05-17).

### PRs Abandonados ou Stale

| PR | Título | Última Atualização | Status | Ação Recomendada |
|----|--------|-------------------|--------|------------------|
| **#2867** | Telegram group allowlist, fallback agents | 2026-05-17 | Aberta (invalid?) | Requer triagem de maintainer — diff extenso (~600+ linhas) |

### Issues Antigas com Impacto Não Resolvido

| Issue | Título | Criada | Link |
|-------|--------|--------|------|
| #3882 | Upgrade WeChat para openclaw-weixin v2.x | 2026-05-17 | [#3882](https://github.com/HKUDS/nanobot/issues/3882) |

**Nota:** Issue #3882 foi fechada, mas representa dívida técnica significativa — a versão atual do protocolo WeChat (v1.0.3) está 2+ major versions atrás e apresenta riscos de incompatibilidade com mudanças da API da Tencent.

---

## Métricas Consolidada do Dia

```
┌─────────────────────────────────────────────────────────┐
│  NANO BOT — 2026-05-18                                 │
├─────────────────────────────────────────────────────────┤
│  📊 Atividade Global                                    │
│  ├── Issues: 6 (5 abertas, 1 fechada)                  │
│  ├── PRs: 17 (8 abertos, 9 fechados)                   │
│  └── Releases: 0                                        │
├─────────────────────────────────────────────────────────┤
│  🔧 Saúde do Projeto                                    │
│  ├── Taxa de resolução (24h): 60%                     │
│  ├── Bugs críticos abertos: 2                          │
│  └── PRs aguardando merge: 8                           │
├─────────────────────────────────────────────────────────┤
│  ⚠️  Prioridades                                        │
│  ├── [URGENTE] Hotfix WebUI display corruption #3790   │
│  ├── [ALTA] Resolver HTTP 500 bootstrap #3857          │
│  └── [MÉDIA] Atualizar protocolo WeChat para v2.x      │
└─────────────────────────────────────────────────────────┘
```

---

**Links do Projeto:**
- Repositório: [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)
- Releases: [github.com/HKUDS/nanobot/releases](https://github.com/HKUDS/nanobot/releases)
- Issues: [github.com/HKUDS/nanobot/issues](https://github.com/HKUDS/nanobot/issues)
- Pull Requests: [github.com/HKUDS/nanobot/pulls](https://github.com/HKUDS/nanobot/pulls)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-05-18

---

## 1. Panorama do Dia

O Hermes Agent apresenta **alta atividade** em 18 de maio de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas, indicando uma sprint intensa de desenvolvimento. **Nenhum release** foi publicado no período, sugerindo que a equipe está em ciclo de consolidação antes de uma próxima versão. Das issues ativas, **6 são classificadas como P1**, demandando atenção imediata. Os PRs fechados incluem correções críticas para o provider xAI e ferramentas de memória, enquanto 36 PRs permanecem abertos, sinalizando pipeline robusto de contribuições. A comunidade demonstra engajamento significativo, especialmente em topics de estabilidade, autenticação OAuth e configuração de providers.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24 horas.**

O projeto não emitiu novas versões desde o último período. A versão mais recente referenciada nos dados é **v0.14.0 (2026.5.16)**. A ausência de release sugere foco em consolidação de PRs abertos antes de próxima tag. Próximos releases devem contemplar as correções P1 em desenvolvimento.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Recentes

| PR | Título | Componente | Impacto |
|----|--------|------------|---------|
| [#27589](https://github.com/NousResearch/hermes-agent/pull/27589) | fix(mcp): narrow time.sleep mock target | MCP | **Resolve flaky test** — elimina poluição de mocks globais que causavam 225.571 chamadas de sleep em CI |
| [#27219](https://github.com/NousResearch/hermes-agent/pull/27219) | fix(schema_sanitizer): strip pattern/format for xAI | Agent, xAI | **Fecha #27197** — corrige HTTP 400 em Grok com Responses API mode |
| [#27575](https://github.com/NousResearch/hermes-agent/pull/27575) | fix(xai): strip pattern/format from Responses-format schemas | Agent, Tools, xAI | Salvage de #27219 para main, portado pós-refactor |

### PRs Abertos de Alto Impacto

| PR | Título | Prioridade | Status |
|----|--------|------------|--------|
| [#27572](https://github.com/NousResearch/hermes-agent/pull/27572) | feat(kanban): orchestrator-driven auto-decomposition | P2 | **Destaque** — decomposição automática de tasks em grafo de subtasks |
| [#27347](https://github.com/NousResearch/hermes-agent/pull/27347) | feat: centralized model registry and dashboard overhaul | P3 | **Arquitetural** — unifica resolução de models em registry central |
| [#27590](https://github.com/NousResearch/hermes-agent/pull/27590) | feat(session_search): single-shape tool, no LLM | P2 | **Performance** — reduz discovery de ~90s para ~20ms |
| [#27486](https://github.com/NousResearch/hermes-agent/pull/27486) | fix(agent): preserve MiniMax auth during client rebuild | P2 | **Stabilidade** — preserva auth header em rebuilds do cliente |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | 👍 | Tema Central |
|-------|--------|-------------|-----|--------------|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | Response truncated due to output length limit | **30** | 4 | **Long-form outputs** sendo truncados em CLI/Telegram/Discord/Slack |
| [#2706](https://github.com/NousResearch/hermes-agent/issues/2706) | Response truncated — max output tokens | **10** | 0 | Similar a #7237, com rollback para último turn completo |
| [#4979](https://github.com/NousResearch/hermes-agent/issues/4979) | WhatsApp adapter missing send_voice() | **5** | 0 | Voice messages enviadas como texto plano |
| [#12058](https://github.com/NousResearch/hermes-agent/issues/12058) | OpenAI Codex OAuth funciona em CLI mas falha no Telegram | **4** | 0 | **Inconsistência de auth** entre componentes |
| [#26941](https://github.com/NousResearch/hermes-agent/issues/26941) | Google Meet bot misreports Japanese caption language | **4** | 0 | Detecção de idioma em legendas |
| [#27585](https://github.com/NousResearch/hermes-agent/issues/27585) | /goal spam repeated completion messages | **1** | 0 | Loop de mensagens idênticas no gateway |
| [#27587](https://github.com/NousResearch/hermes-agent/issues/27587) | Mattermost: interactive button approval | **1** | 0 | Slash commands bloqueados pelo Mattermost |
| [#21525](https://github.com/NousResearch/hermes-agent/issues/21525) | Hardcoded platform timeouts break local models | **1** | 1 | **Timeout inflexível** para Ollama/vLLM/llama.cpp |

### Análise de Demandas

**Padrões observados:**
1. **Autenticação OAuth fragmentada** — xAI OAuth apresenta 3 issues separadas (#26990 closed, #27573, #12058), indicando complexidade de implementação cross-platform
2. **Limites de output** — Truncamento de respostas longas é queixa recorrente (#7237 com 30 comentários, #2706 com 10), sugerindo necessidade de config de `max_tokens` mais granular
3. **Adaptação de plataformas** — WhatsApp, Mattermost, Feishu, Telegram cada um com adaptações específicas pendentes

---

## 5. Bugs e Estabilidade

### P1 — Críticos (Atenção Imediata)

| Issue | Título | Componente | Descrição |
|-------|--------|------------|-----------|
| [#27354](https://github.com/NousResearch/hermes-agent/issues/27354) | Config normalization overwrites user values | Agent | Reinício do processo sobrescreve `config.yaml` com defaults |
| [#27555](https://github.com/NousResearch/hermes-agent/issues/27555) | vision fallback_chain silently broken | Agent, Vision | `_resolve_single_provider()` passa kwargs errados → retorna `None` silenciosamente |
| [#27566](https://github.com/NousResearch/hermes-agent/issues/27566) | Context compression triggers every turn | Agent | Rough token estimate causa loop de compressão infinita |
| [#26990](https://github.com/NousResearch/hermes-agent/issues/26990) | xai-oauth token exchange fails (PKCE) | CLI, Auth | `code_challenge is required` — fechada mas padrão persiste |

### P2 — Altos

| Issue | Título | Componente | Descrição |
|-------|--------|------------|-----------|
| [#20500](https://github.com/NousResearch/hermes-agent/issues/20500) | Dashboard EACCES in Docker | TUI, Docker | `/opt/hermes/ui-tui` é root-owned, dashboard roda como hermes |
| [#13983](https://github.com/NousResearch/hermes-agent/issues/13983) | 16K Tokens consumption by default | Agent, CLI | "who u?" prompt consome 16K+ tokens — possivelmente bloated |
| [#27580](https://github.com/NousResearch/hermes-agent/issues/27580) | web_extract fails despite valid config | Tools, Web | Erro "No web extract provider configured" mesmo com firecrawl configurado |
| [#27585](https://github.com/NousResearch/hermes-agent/issues/27585) | /goal spam repeated messages | Agent | Fail-open do goal_judge causa loop de "Goal is complete" |
| [#21525](https://github.com/NousResearch/hermes-agent/issues/21525) | Hardcoded platform timeouts | Gateway | Timeouts inflexíveis quebram workflows com modelos locais |

### P3 — Médios

| Issue | Título | Componente | Descrição |
|-------|--------|------------|-----------|
| [#27573](https://github.com/NousResearch/hermes-agent/issues/27573) | xAI Grok OAuth fails in Docker/LAN | CLI, Auth, Docker | `code_challenge_method must be S256` em setup headless |
| [#27474](https://github.com/NousResearch/hermes-agent/issues/27474) | Hindsight daemon profile mismatch | Plugins, Memory | Perfil `hermes` vs `default` causa false "not available" |
| [#27476](https://github.com/NousResearch/hermes-agent/issues/27476) | Dashboard language switcher overlap | Gateway | Dropdown sobrepõe controles do header |
| [#27548](https://github.com/NousResearch/hermes-agent/issues/27548) | Platform plugin discovery drops namespace | Plugins | Keys como `teams-platform` em vez de `platforms/teams` |
| [#27592](https://github.com/NousResearch/hermes-agent/issues/27592) | Telegram gateway stays down after restart | Gateway | launchd job unloaded após restart via Telegram |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features P3 com Demanda Identificada

| Issue | Título | Componente | Descrição | Sinais de Prioridade |
|-------|--------|------------|-----------|----------------------|
| [#22201](https://github.com/NousResearch/hermes-agent/issues/22201) | Per-auxiliary fallback_providers | Agent, Config | Fallback providers por task (vision, web_extract, etc.) | 👍1, discussão ativa |
| [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) | Rich Spreadsheet Skill (xlsx/csv) | Tools | Abstração estruturada para Excel, evitando uso raw de openpyxl/pandas | 👍0, padrão comum |
| [#4461](https://github.com/NousResearch/hermes-agent/issues/4461) | Multimodel Routing for Agent Profiles | Agent | Routear tasks para models diferentes baseado no tipo | 👍0, feature request recorrente |
| [#27546](https://github.com/NousResearch/hermes-agent/issues/27546) | Add Zenmux as native provider | CLI | Provider para 94+ modelos via Zenmux gateway | 👍0, alinhamento enterprise |
| [#27554](https://github.com/NousResearch/hermes-agent/issues/27554) | Hide unused providers from model picker | CLI | Ocultar providers configurados mas não desejados | 👍0, UX improvement direto |
| [#27587](https://github.com/NousResearch/hermes-agent/issues/27587) | Mattermost interactive button approval | Gateway | Aprovação de comandos perigosos via botões | Platform-specific |

### PRs de Feature em Desenvolvimento

- **[#27591](https://github.com/NousResearch/hermes-agent/pull/27591)** — soul+mythos: persona schema template + Greek visual identity tokens (P3)
- **[#25186](https://github.com/NousResearch/hermes-agent/pull/25186)** — Add TrueConf gateway adapter (P3)
- **[#27568](https://github.com/NousResearch/hermes-agent/pull/27568)** — kanban: show dashboard cron jobs across profiles (P3)
- **[#27572](https://github.com/NousResearch/hermes-agent/pull/27572)** — kanban: orchestrator-driven auto-decomposition (P2)

### Sinais de Roadmap

1. **Centralização de registry** — #27347 indica tendência de consolidação de model resolution
2. **Performance de tools** — #27590 elimina LLM dependency em session_search (~90s → 20ms)
3. **Multi-provider sophistication** — Zenmux (#27546), per-auxiliary fallbacks (#22201), e model picker hide (#27554) sugerem foco em flexibilidade de providers
4. **Kanban maturity** — Auto-decomposition (#27572) aproxima sistema de visão original do projeto

---

## 7. Resumo de Feedback dos Usuários

### Dores Recorrentes Identificadas

| Categoria | Descrição | Frequência | Issues Relacionadas |
|-----------|-----------|------------|---------------------|
| **Limites de Output** | Respostas longas sendo truncadas, especialmente em gateways | 🔴 Alta | #7237 (30 comments), #2706 |
| **Configuração Frágil** | Valores personalizados sobrescritos por defaults | 🔴 Alta | #27354 (P1), #26990 (P1) |
| **OAuth Complexo** | Autenticação xAI/Grok falha em diferentes contextos | 🔴 Alta | #26990, #27573, #12058 |
| **Modelos Locais** | Timeout hardcoded incompatível com Ollama/vLLM | 🟡 Média | #21525 |
| **Tokens Excessivos** | 16K tokens para prompts simples parece bloated | 🟡 Média | #13983 |
| **Compressão de Contexto** | Loop de compressão triggered a cada turn | 🟡 Média | #27566 (P1), #23902 (P2) |

### Cenários de Uso Reportados

1. **CLI + Gateway híbridos** — Usuários alternam entre interface CLI e Telegram/Discord, encontrando inconsistências de auth (#12058)
2. **Docker/Coolify deployments** — Configurações headless em LAN apresentam desafios de OAuth PKCE (#27573)
3. **Enterprise providers** — Demanda por Zenmux (#27546) indica uso em ambientes enterprise com múltiplos modelos
4. **Modelos locais** — vLLM, Ollama, llama.cpp cada vez mais usados, estressando sistema de timeouts (#21525)
5. **Integração com reuniões** — Google Meet bot (#26941) e TrueConf (#25186 PR) mostram expansão para videoconferência

### Satisfação/Insatisfação

**Positivo:**
- Sistema de Kanban agradando (#27572 auto-decomposition altamente aguardado)
- MCP tooling sendo refinado (#27589 fecha flaky test crônico)
- Holographic memory bugs sendo endereçados (#23221)

**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-05-18

---

## 1. Panorama do dia

O projeto PicoClaw mantém **atividade intensa** nesta data, com **19 eventos totais** (12 issues + 7 PRs) registrados nas últimas 24h. O build nightly `v0.2.8-nightly.20260517.0df050ff` foi publicado automaticamente, sinalizando desenvolvimento contínuo. Cinco issues foram fechadas — incluindo resoluções para problemas críticos como vazamento de reasoning em modelos OpenRouter e avaliação incorreta de caminhos relativos no Bash. Entre as issues abertas, destaca-se uma regressão funcional no .deb para RISC-V, e dois PRs simultâneos para suporte ao provider SiliconFlow, indicando convergência da comunidade em uma mesma demanda. O estado geral reflete um projeto saudável, com ciclo de releases ativo e contribuições diversas.

---

## 2. Lançamentos

### Release nightly
**Build:** `v0.2.8-nightly.20260517.0df050ff`

| Item | Detalhe |
|---|---|
| **Tipo** | Automated nightly build |
| **Comparativo** | https://github.com/sipeed/picoclaw/compare/v0.2.8...main |
| **Aviso** | Estável apenas para produção; uso em produção desaconselhado pelo próprio projeto |

> **Nota:** Esta é uma build noturna automatizada. Não há changelog detalhado disponível publicamente para esta versão, o que reforça a natureza alpha/beta do release. Usuários em ambiente de produção devem aguardar builds estáveis formais.

---

## 3. Progresso do Projeto

### PRs fechadas/merged hoje

| PR | Tipo | Impacto |
|---|---|---|
| **#2462** — fix codex streaming + telegram duplicate retries | Bug fix | Resolveu problemas de streaming no Codex e retries duplicados no Telegram. Envolvia cenário real: Android 7 + Termux + Telegram + OpenAI OAuth + `gpt-5.4`. Author: Glucksberg |

### PRs abertas com progresso relevante

| PR | Tipo | Status | Destaque |
|---|---|---|---|
| **#2885** — feat(provider): add SiliconFlow provider support | Feature | Open (17/05) | Adiciona SiliconFlow como provider nativo OpenAI-compatible em backend, API e registry web |
| **#2886** — feat(chat): add chat detail visibility selector | Feature | Open (17/05) | Seletor de 4 estados para visibilidade de reasoning e tool calls no Web Chat |
| **#2888** — Fix/tool config load image reaction | Bug fix | Open (17/05) | Corrige configuração de `load_image` no config.json (aligns com issue #2878) |
| **#2838** — feat(agent): support frontmatter tool policy filters | Feature | Stale/Open | Estende AGENT.md frontmatter com policies allow/deny/glob para ferramentas e MCP |
| **#2788** — feat(session): add per-message timestamps | Feature | Stale/Open | Adiciona timestamps individuais por mensagem na Session API |
| **#2759** — fix(seahorse): retrieval tools to current session | Bug fix | Stale/Open | Escopa grep/expand à sessão ativa, evitando vazamento entre conversas |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| Issue | Tipo | Comentários | 👍 | Resumo |
|---|---|---|---|---|
| **#28** — LM Studio Easy Connect | Enhancement | 19 | 2 | Request para integração facilitada com LM Studio. Autor reconhece limitação de habilidades e apela à comunidade. Status: Open desde 11/02/2026 |
| **#2225** — Ollama cloud credentials | Enhancement | 12 | 0 | Suporte a credenciais OAuth para Ollama Cloud. Closed em 17/05 — indica resolução ou desvio |
| **#1042** — exec guardCommand false positive | Bug | 12 | 2 | Regex do `guardCommand` bloqueia caminhos válidos quando `restrict_to_workspace=true`. Afeta ferramentas como wttr.in. Autor: icyfire |
| **#2546** — OAuth 2.1 + PKCE for MCP | Enhancement | 5 | 0 | Proposta ambiciosa: permitir usuários non-técnicos adicionarem MCP servers via dashboard. Closed — implementação entregue ou fechada por outro motivo |
| **#1297** — light model routing bug | Bug | 4 | 1 | Bug de roteamento em modelos light должен corresponder a `model_list`. Closed |

### Análise de demandas

- **Integração de providers** domina o discourse: LM Studio (#28), Ollama Cloud (#2225), SiliconFlow (#2884 + #2885) representam ~33% das issues com maior volume de discussão.
- **Segurança de ferramentas** é tema relevante: o bug #1042 revela fragilidade no mecanismo de sandboxing do exec tool, com potencial impacto em ambientes restritos.
- **UX/Dashboard** emerge como direção: OAuth para MCP (#2546), seletores de visibilidade (#2886), configuração de ferramentas via UI.

---

## 5. Bugs e Estabilidade

| Severidade | Issue | Descrição | Link |
|---|---|---|---|
| **🔴 Alta** | **#2887** | `.deb` em RISC-V não funcional com modelos OpenAI. Reportado em 17/05, 2 comentários. Affecta arquitetura específica. | [#2887](https://github.com/sipeed/picoclaw/issues/2887) |
| **🟡 Média** | **#1042** | `guardCommand` do exec bloqueia comandos legítimos (e.g., `curl wttr.in`). Regex produz falsos positivos em URLs com parâmetros tipo `?T`. 12 comentários, 2 👍. | [#1042](https://github.com/sipeed/picoclaw/issues/1042) |
| **🟡 Média** | **#2839** | Steering-chain produz replies finais editando placeholders `Working...` em channels que usam feedback editing. Comportamento inconsistente entre channels. | [#2839](https://github.com/sipeed/picoclaw/issues/2839) |
| **🟡 Média** | **#2878** | `load_image` não configurável via `config.json` por ausência no registry de tools. 1 comentário. PR #2888 já endereça. | [#2878](https://github.com/sipeed/picoclaw/issues/2878) |
| **🟢 Baixa** | **#2749** | Bash avalia caminhos relativos como absolutos — fechou em 17/05 | [#2749](https://github.com/sipeed/picoclaw/issues/2749) |
| **🟢 Baixa** | **#2745** | OpenRouter reasoning leak no assistant content — fechou em 17/05 | [#2745](https://github.com/sipeed/picoclaw/issues/2745) |

### Tendência de estabilidade
Três bugs de média/baixa severidade foram fechados hoje, indicando progresso em debt técnico. Porém, **#2887 (RISC-V)** e **#1042 (guardCommand)** são regressões funcionais que merecem atenção prioritária.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features (últimas 24h)

| Feature | Descrição | Demanda | Link |
|---|---|---|---|
| **SiliconFlow provider** | Suporte nativo ao provider, não apenas OpenAI-compatible mode | 0 👍, 1 PR pronto (#2885) | [#2884](https://github.com/sipeed/picoclaw/issues/2884) |
| **OAuth 2.1 + PKCE para MCP** | Adicionar MCP servers OAuth-protected via dashboard URL | Closed em 17/05 — likely implementado | [#2546](https://github.com/sipeed/picoclaw/issues/2546) |
| **LM Studio Easy Connect** | Integração facilitada com LM Studio | 2 👍, 19 comentários — aguardando implementação | [#28](https://github.com/sipeed/picoclaw/issues/28) |
| **Tool policy filters em AGENT.md** | allow/deny/glob policies no frontmatter de agents | 1 PR (#2838), alinhado com necessidade multi-agent | [#2837](https://github.com/sipeed/picoclaw/issues/2837) |
| **Per-message timestamps** | Session API com timestamps individuais por mensagem | 1 PR (#2788) | [#2788](https://github.com/sipeed/picoclaw/pull/2788) |
| **Chat visibility selector** | 4-state toggle para reasoning/tool visibility | 1 PR (#2886) | [#2886](https://github.com/sipeed/picoclaw/pull/2886) |

### Sinais de direção estratégica

1. **Multi-provider expansion**: SiliconFlow, LM Studio, Ollama Cloud — o projeto está se posicionando como hub agnostic de providers de IA.
2. **Enterprise/self-hosted features**: OAuth para MCP, tool policies por agent, credenciais cloud — indica foco em deployments corporativos.
3. **Observabilidade**: Timestamps por mensagem e chat detail selectors sugerem maturidade da UI.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Cenário | Evidência |
|---|---|---|
| **Falta de providers alternativos** | Usuários querem SiliconFlow, LM Studio, Ollama Cloud como opções de primeira classe | Issues #28, #2225, #2884 com +20 comentários combinados |
| **UX complexa para features avançadas** | Non-técnicos não conseguem adicionar MCP servers OAuth sem shell/Node.js | Issue #2546 |
| **Sandboxbreaking** | `guardCommand` bloqueia ferramentas legítimas como wttr.in | Issue #1042 com 12 comentários |
| **Regressão RISC-V** | .deb não funciona em arquitetura específica | Issue #2887 |
| **Inconsistência cross-channel** | Steering-chain behave differently entre channels | Issue #2839 |

### Cenários de uso emergentes

- **Android/Termux como node**: Issue #2462 menciona Android 7 + Termux + Telegram como setup real — indica uso em edge devices.
- **Multi-agent orchestration**: Feature request #2837 com allow/deny policies demonstra interesse em setups complexos.
- **Plataformas de messaging**: Telegram é channel ativo em múltiplas issues.

### Satisfação/Insatisfação

**Positivo:**
- Ciclo de release ativo (nightly builds)
- Comunidade responde (comentários em issues antigas)
- PRs de qualidade sendo submetidos

**Negativo:**
- Stale labels em 8+ issues indica possible backlog overflow
- Regressões críticas (RISC-V, guardCommand) demorando para resolver
- LM Studio feature request aberto há 3+ meses sem progresso visível

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>7 dias sem interação relevante)

| Issue | Idade | Status | Prioridade | Link |
|---|---|---|---|---|
| **#28** LM Studio Easy Connect | ~94 dias (11/02) | Open | Alta | [#28](https://github.com/sipeed/picoclaw/issues/28) |
| **#1042** guardCommand false positive | ~75 dias (04/03) | Open, 12 comentários | Alta | [#1042](https://github.com/sipeed/picoclaw/issues/1042) |
| **#1297** light model routing | ~69 dias (10/03) | Closed | — | [#1297](https://github.com/sipeed/picoclaw/issues/1297) |
| **#2837** Tool policy filters | ~9 dias (09/05) | Open, stale | Média | [#2837](https://github.com/sipeed/picoclaw/issues/2837) |
| **#2839** Steering-chain replies | ~9 dias (09/05) | Open, stale | Média | [#2839](https://github.com/sipeed/picoclaw/issues/2839) |
| **#2878** load_image config | ~3 dias (15/05) | Open | Média | [#2878](https://github.com/sipeed/picoclaw/issues/2878) |

### PRs stagnantes

| PR | Idade | Status | Nota |
|---|---|---|---|
| **#2838** frontmatter tool policies | 9 dias | Stale | Alinhado com issue #2837 — necesita review |
| **#2788** per-message timestamps | 12 dias | Stale | UX melhoria — necesita feedback maintainer |
| **#2759** seahorse session scoping | 14 dias | Stale | Bug fix valioso — necesita merge/rejeição |

### Recomendação

> **Atenção crítica:** A issue **#28** (LM Studio) está aberta há 94 dias com 19 comentários e 2 👍, sinalizando demanda real sem ação aparente. Considerar resposta官方 ou label `help wanted` para mobilizar comunidade.

---

## Métricas Resumidas

| Indicador | Valor |
|---|---|
| **Issues ativas** | 7 open, 5 closed |
| **PRs ativas** | 6 open, 1 closed |
| **Release** | `v0.2.8-nightly.20260517` |
| **Maior discussão** | #28 (LM Studio) — 19 comentários |
| **Bugs críticos** | 1 (RISC-V #2887) |
| **Features em PR** | 2 (SiliconFlow, Chat selector) |
| **Issues stale** | 6 |
| **Tendencia saúde** | 🟢 Positiva — atividade alta, regressões sendo endereçadas |

---

*Relatório gerado em 2026-05-18 com base em dados do GitHub do projeto sipeed/picoclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-05-18

---

## 1. Panorama do Dia

O projeto IronClaw demonstra alta atividade neste período de 24 horas, com **50 PRs atualizados** (30 abertos, 20 merged/fechados) e **12 issues** processadas (11 abertas, 1 fechada). Não houve lançamentos formais no período, embora o workstream do **Reborn** apresente progresso arquitetural significativo com PRs merged relacionados à composição do runtime e superfície pública. A principal área de atenção são os múltiplos bugs reportados na integração do Gmail (v0.28.2), que indicam regressões no fluxo de autenticação e instalação de ferramentas. O sistema de hooks do Reborn continua em desenvolvimento ativo com múltiplos PRs de design em drafting. O build E2E noturno falhou, sinalizando potenciais problemas de estabilidade no pipeline de CI.

---

## 2. Lançamentos

### Nenhuma release registrada nas últimas 24h

O projeto não publicou versões novas no período. A versão mais recente vigente continua sendo **v0.28.2**, que apresenta regressões reportadas (vide Seção 5 — Bugs e Estabilidade).

> **Nota**: Após a correção das regressões do Gmail e configurações de provider, é recomendado um hotfix ou patch de correção para v0.28.2.

---

## 3. Progresso do Projeto

### PRs Merged/Closed (principais)

| # | PR | Resumo | Impacto |
|---|-----|--------|---------|
| [#3695](https://github.com/nearai/ironclaw/pull/3695) | `arch(reborn): consolidate composition root, narrow public surface` | Promove `ironclaw_reborn_composition` como raiz de composição oficial, shipped binary `ironclaw-reborn` real, reduz superfície pública de `ironclaw_reborn` a módulos de diretório | ⭐ Arquitetural — define o contrato de composição do Reborn |
| [#3723](https://github.com/nearai/ironclaw/pull/3723) | `[codex] replace agent-loop planning docs` | Remove skeleton de planejamento do loop Reborn, adiciona CLAUDE.md conciso com orientação para framework, contratos, adapters, runtime | 🔧 DX — padroniza documentação de código |
| [#3131](https://github.com/nearai/ironclaw/pull/3131) | `Add Trace Commons client to Reborn` | Adiciona cliente Trace Commons para contribuição opt-in de traces: captura local, redação determinística, políticas de standing checks, upload com credenciais | 📊 Observabilidade — suporte a tracing distribuído |

### PRs Abertos com Alto Impacto

| # | PR | Escopo | Status |
|---|-----|--------|--------|
| [#3704](https://github.com/nearai/ironclaw/pull/3704) | `feat(reborn): boot TOML + provider catalog` | Implementa `config.toml` + `providers.json` para binary standalone do Reborn | 🔴 Em revisão |
| [#3703](https://github.com/nearai/ironclaw/pull/3703) | `arch(reborn): futureproof RebornRuntime surface` | Prepara superfície para epic #3036 (Configuration-as-Code) | 🔴 Em revisão |
| [#3721](https://github.com/nearai/ironclaw/pull/3721) | `Gate Reborn personal context by run profile` | Adiciona `ResolvedRunProfile.personal_context_policy` com backward-compatible default | 🟡 Gate de feature — contexto pessoal por perfil |
| [#3722](https://github.com/nearai/ironclaw/pull/3722) | `fix(reborn): preserve provider tool roundtrip metadata` | Preserva metadados de tool-call do provider através do loop Reborn | 🟡 Correção interna |
| [#3681](https://github.com/nearai/ironclaw/pull/3681) | `feat(extensions): Add first-party HTTP egress tool` | Implementa ferramenta `builtin.http` nativa para Reborn | 🟡 Nova capability |
| [#3573](https://github.com/nearai/ironclaw/pull/3573) | `feat(reborn): add ironclaw_hooks framework foundation` | Framework v1 completo de hooks com primitives, dispatcher, WASM hooks (draft) | 🔵 Draft — dependências de design |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Discussão

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#3692](https://github.com/nearai/ironclaw/issues/3692) | `Reborn: add policy-gated personal identity and heartbeat prompt context` | 4 | Feature Request |

**Análise**: A issue #3692 representa uma evolução significativa no modelo de identidade do Reborn. O contexto revela que PR #3649 intencionalmente manteve WS-15 limitado a identity-file prompt context estável, mas adiou duas superfícies de identidade/contexto que necessitam de shape adicional no prompt context. A discussão envolve `HostIdentityContextSource` e `LoopContextBundle.identity_messages`, indicando um amadurecimento do modelo de identidade para suportar heartbeat prompts e políticas de contexto pessoal.

### PRs com Atividade Recente Significativa

| # | Título | Escopo | Tipo |
|---|--------|--------|------|
| [#3702](https://github.com/nearai/ironclaw/issues/3702) | `Reborn: revise and implement binary-E2E test framework plan` | Test Framework | Issue |
| [#3726](https://github.com/nearai/ironclaw/issues/3726) | `Track Reborn composition crate split and public surface narrowing` | Arquitetura | Tracking Issue |

**Análise**: A atividade centraliza-se na maturação do Reborn — tanto na estruturação arquitetural (composição, superfície pública, boot config) quanto no framework de testes E2E binário. O PR #3695 (merged) consolida a composição root, e o tracking issue #3726 monitora essa transição. O foco indica que o Reborn está evoluindo de protótipo para runtime production-ready.

---

## 5. Bugs e Estabilidade

### Regressões v0.28.2 Críticas

| # | Severidade | Descrição | Link |
|---|-----------|-----------|------|
| #3734 | 🔴 Alta | Provider config missing API Key e Fetch available models controls na v0.28.2 (funciona em v0.28.1) | [Issue](https://github.com/nearai/ironclaw/issues/3734) |
| #3733 | 🔴 Alta | Gmail token inválido mostra toast de sucesso/ativação | [Issue](https://github.com/nearai/ironclaw/issues/3733) |
| #3736 | 🟡 Média | Providers não configurados mostram botão "Use" em TEE agents | [Issue](https://github.com/nearai/ironclaw/issues/3736) |

### Bugs do Fluxo Gmail (Instalação/Autenticação)

| # | Severidade | Descrição | Link |
|---|-----------|-----------|------|
| #3732 | 🟡 Média | UI inconsistente: OAuth link em uma thread, input manual em outra | [Issue](https://github.com/nearai/ironclaw/issues/3732) |
| #3731 | 🟡 Média | Chat re-prompt `tool_install(gmail)` mesmo com Gmail já instalado | [Issue](https://github.com/nearai/ironclaw/issues/3731) |
| #3729 | 🟡 Média | Chamadas `tool_install` falhadas mostram sucesso após refresh | [Issue](https://github.com/nearai/ironclaw/issues/3729) |
| #3728 | 🟡 Média | Negar `tool_install(gmail)` re-prompt infinitamente | [Issue](https://github.com/nearai/ironclaw/issues/3728) |

### Falha de CI

| # | Severidade | Descrição | Link |
|---|-----------|-----------|------|
| #3447 | 🔴 Crítica | Nightly E2E failed — Full E2E / E2E (v2-engine) | [Issue](https://github.com/nearai/ironclaw/issues/3447) |

**Resumo**: O conjunto de bugs do Gmail indica uma regressão significativa no fluxo de autenticação e instalação de ferramentas externas. Combinado com a falha do nightly E2E, há indicadores de que a v0.28.2 introduziu regressões tanto no backend (provider config) quanto no frontend (Gmail UI). A falha de E2E em v2-engine sugere possível impacto em funcionalidades core do agent loop.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento Ativo

| # | Título | Escopo | Sinal de Roadmap |
|---|--------|--------|------------------|
| [#3702](https://github.com/nearai/ironclaw/issues/3702) | `Reborn: binary-E2E test framework plan` | Testes | Framework de testes E2E para Reborn |
| [#3692](https://github.com/nearai/ironclaw/issues/3692) | `Reborn: policy-gated personal identity and heartbeat prompt context` | Identidade | Modelo de contexto pessoal com políticas |
| [#3681](https://github.com/nearai/ironclaw/pull/3681) | `Add first-party HTTP egress tool` | Tooling | HTTP tool nativo para extensões |
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | `Configuration-as-Code for IronClaw Reborn` | Configuração | Provisionamento via TOML + provider catalog |

### Epic em Andamento: ironclaw_hooks Framework

| # | Título | Phase | Link |
|---|--------|-------|------|
| #3573 | `add ironclaw_hooks framework foundation` | v1 Completo (draft PR) | [PR](https://github.com/nearai/ironclaw/pull/3573) |
| #3633 | `feat(hooks): production gate-ref factory` | Phase 1 (draft) | [PR](https://github.com/nearai/ironclaw/pull/3633) |
| #3634 | `feat(hooks): WASM hook execution path` | Phase 2 (draft) | [PR](https://github.com/nearai/ironclaw/pull/3634) |
| #3640 | `feat(hooks): event-triggered hooks Phase 5` | Phase 5 (draft) | [PR](https://github.com/nearai/ironclaw/pull/3640) |

**Análise**: O framework de hooks representa um investimento arquitetural significativo para permitirextensibilidade segura do Reborn. A estratégia em fases (gate-ref factory → WASM runtime → event-triggered) indica maturidade no planejamento. A referência a um "four-finding security audit" em #3573 demonstra preocupação com segurança desde o design.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Experiência Gmail Quebrada**: Usuários reportam ciclo de autenticação Gmail não confiável — tokens inválidos aceitos como sucesso, prompts repetitivos de instalação, UI inconsistente entre threads. Impacto direto na utilidade de integrações de email.

2. **Regressão de Provider Config (v0.28.2)**: Usuários identificam que controles de API Key e "Fetch available models" desapareceram na UI de configuração de provider. Usuários afetados: `wise-ram-rozur` em Non-TEE agent.

3. **Falha de E2E Noturno**: CI quebrado sinaliza instabilidade. Usuários em produção (especialmente em TEE agents) reportam comportamento inesperado com providers não configurados.

### Cenários de Uso Evidenciados

- **TEE Agents em Produção**: Configuração de providers em ambientes seguros (Issue #3736)
- **Extensões Gmail**: Fluxo de instalação, autenticação OAuth e ferramenta de email (Issues #3731-#3733)
- **Provider Management**: Gestão de credenciais e catálogo de modelos (Issue #3734)

### Satisfação/Insatisfação

**Insatisfação**: Alta — regressões na v0.28.2 impactam workflow core de configuração de agentes e integrações de terceiros. O bug do Gmail afeta especificamente usuários que dependem de email como ferramenta de productivity.

**Sinal Positivo**: A atividade em PRs arquiteturais (#3695, #3703, #3704) demonstra investimento em stabilização do Reborn, indicando priorização de dívida técnica antes de novos recursos.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há Tempo

| # | Título | Criado | Dias | Prioridade |
|---|--------|--------|------|------------|
| #2700 | `fix(gateway): show descriptive chat titles instead of hex hash IDs` | 2026-04-20 | ~28 | Alta — UX |
| #3534 | `Create a tool that downloads logs for debugging` | 2026-05-12 | ~6 | Média — DevX |

### Issues Críticas sem Atribuição Clara

| # | Título | Severidade | Status |
|---|--------|-----------|--------|
| #3447 | `Nightly E2E failed` | 🔴 Crítica | Aberto, sem assignee claro |
| #3734 | `Provider config missing API Key controls` | 🔴 Alta | Aberto, multi-afetado |

### Recomendações de Priorização

1. **🔴 Imediato**: Investigar e corrigir regressões v0.28.2 do Gmail e provider config
2. **🔴 Imediato**: Diagnóstico e fix do nightly E2E failure (#3447)
3. **🟡 Esta Sprint**: Revisar PRs arquiteturais do Reborn (#3703, #3704)
4. **🟡 Esta Sprint**: Atribuir e avançar com fixes para issues Gmail (7 issues relacionadas)
5. **🟡 Esta Sprint**: Definir timeline para ironclaw_hooks framework sair de draft

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Tendência |
|-----------|--------|-----------|
| Atividade de PRs | ✅ Alta (50 PRs em 24h) | Estável |
| Velocity de Merge | ✅ Boa (20 merged/closed) | Positiva |
| Bugs Abertos | ⚠️ Alta (11 bugs novos) | Negativa |
| Regressões | ⚠️ v0.28.2 com regressões | Negativa |
| CI/CD | ❌ Nightly E2E falhando | Crítica |
| Tech Debt | ⚠️ ironclaw_hooks em draft | Em monitoramento |
| Reborn Maturity | ✅ Progresso arquitetural | Positiva |

---

*Relatório gerado com base em dados do GitHub do repositório [nearai/ironclaw](https://github.com/nearai/ironclaw) — período de 24h encerrado em 2026-05-18.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-05-18

## 1. Panorama do Dia

O projeto CoPaw apresenta **alta atividade** nas últimas 24h, com 17 issues e 17 PRs atualizados. O ecossistema demonstra maturidade em infraestrutura de testes (481 testes de segurança com 89% de cobertura) e expansão de providers (xAI/Grok). No entanto, há **sinais críticos de estabilidade**: múltiplos reports de freeze em canais de chat, um potencial RCE vulnerability no plugin interface (#4470), e crashes caused by chromadb segfaults. A ausência de releases recentes indica foco emtestes e integração antes do próximo release.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões. Isso sugere que a equipe está em fase de estabilização e preparação para um próximo release, possivelmente focado em segurança ( dado o PR #4467 com testes abrangentes).

---

## 3. Progresso do Projeto

### PRs Merged/Closed (4 total)

| PR | Título | Impacto |
|----|--------|---------|
| [#4466](https://github.com/agentscope-ai/CoPaw/pull/4466) | Phase 0-1 unit tests, 481 tests, 89% coverage | Estabelece baseline de testes de segurança com `tool_guard` e `skill_scanner` |
| [#3605](https://github.com/agentscope-ai/CoPaw/pull/3605) | Centralize legacy weixin→wechat data migrations | Limpa migração tardia de dados, unificando em `Workspace.start()` |
| [#1669](https://github.com/agentscope-ai/CoPaw/pull/1669) | Handle path separators correctly in workspace path | Corrige loading infinito em paths de workspace |
| [#1661](https://github.com/agentscope-ai/CoPaw/pull/1661) | Fix memory files not being fetched by agent ID | Corrige bug onde daily memory files não eram encontrados por agente |

### Destaque: Infraestrutura de Testes de Segurança
O PR [#4467](https://github.com/agentscope-ai/CoPaw/pull/4467) está em revisão com **481 testes e 89% de cobertura**, promovendo testes de segurança a **L1 hard gate no CI**. Este é um marco significativo para reliability.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Reações |
|-------|--------|-------------|---------|
| [#2684](https://github.com/agentscope-ai/CoPaw/issues/2684) | Ubuntu安装后启动出错 | 7 | 0 |
| [#3640](https://github.com/agentscope-ai/CoPaw/issues/3640) | MCP client TaskGroup 导致 Agent 假死 | 7 | 0 |
| [#4453](https://github.com/agentscope-ai/CoPaw/issues/4453) | 聊天窗口聊天无回应 | 6 | 1 👍 |
| [#4469](https://github.com/agentscope-ai/CoPaw/issues/4469) | 聊天窗口无回应 (reprodução) | 5 | 0 |

### Análise das Demandas

**Padrão identificado — Freeze em Chat:**
- #4453, #4469, #4454, #3640 indicam que **agentes ficam sem responder sem erro explícito**
- Cenário comum: mensagens com "..." (loading state) sem resolução
- WEChat channel aparentemente envolvido em múltiplos casos
- Afeta experiência do usuário de forma crítica

**Instalação/Setup:**
- #2684 (Ubuntu) demonstra fricção na experiência de onboarding
- Problema em script de instalação na etapa `copaw app`

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (P0-P1)

| Issue | Severidade | Descrição |
|-------|------------|-----------|
| [#4470](https://github.com/agentscope-ai/CoPaw/issues/4470) | **CRÍTICO** | Plugin interface apresenta remote code execution (RCE) vulnerability — requer atenção imediata |
| [#3854](https://github.com/agentscope-ai/CoPaw/issues/3854) | Alta | chromadb Rust binding causa SIGSEGV, matando todo o processo — 45+ vezes em uma sessão |
| [#4453](https://github.com/agentscope-ai/CoPaw/issues/4453) + [#4469](https://github.com/agentscope-ai/CoPaw/issues/4469) | Alta | Chat window unresponsive — "três pontos" sem resposta |

### 🟡 Moderados (P2-P3)

| Issue | Descrição |
|-------|-----------|
| [#3640](https://github.com/agentscope-ai/CoPaw/issues/3640) | MCP client TaskGroup freeze (sem erro, apenas não responde) |
| [#4454](https://github.com/agentscope-ai/CoPaw/issues/4454) | `/mission` command causa freeze completo do Console |
| [#4468](https://github.com/agentscope-ai/CoPaw/issues/4468) | "Operation LLM execution is too frequent, please retry after 300 seconds" |
| [#2684](https://github.com/agentscope-ai/CoPaw/issues/2684) | Ubuntu install error (DeprecationWarning em websockets.legacy) |

### Análise de Root Cause
Há indícios de problemas sistêmicos com **event loops** e **TaskGroups assíncronos**:
- `RuntimeError: Event loop stopped before Future completed`
- TaskGroup internas causando deadlocks silenciosos
- Isso afeta múltiplos componentes: MCP, WeChat, Channels

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| PR/Issue | Feature | Valor para Usuário |
|---------|---------|-------------------|
| [#4471](https://github.com/agentscope-ai/CoPaw/pull/4471) | html-video-demo skill (en + zh) | Habilidade nativa para criar demos visuais em HTML |
| [#4444](https://github.com/agentscope-ai/CoPaw/pull/4444) | xAI OAuth + Grok provider + image/video tools | Expansão para novo provider de LLM comtools |
| [#4455](https://github.com/agentscope-ai/CoPaw/issues/4455) | Multiple external skill paths via config | Flexibilidade para carregar skills de diretórios customizados |
| [#4463](https://github.com/agentscope-ai/CoPaw/issues/4463) + [#4465](https://github.com/agentscope-ai/CoPaw/pull/4465) | Cached token estimation | Melhor precisão de contexto, reduzindo overuse |
| [#4433](https://github.com/agentscope-ai/CoPaw/pull/4433) | Token usage info por conversa | Visibilidade de custos por sessão |
| [#3813](https://github.com/agentscope-ai/CoPaw/pull/3813) | Tauri 2.x desktop app support | App desktop nativo com branding QwenPaw Desktop |
| [#4041](https://github.com/agentscope-ai/CoPaw/pull/4041) | System tray auto-start (Win32) | Auto-inicialização em background para agentes de longa duração |

### Infraestrutura de Testes E2E

O tema mais recorrente são os **E2E smoke tests**:
- [#4457](https://github.com/agentscope-ai/CoPaw/issues/4457): Migrar `python_e2e` → `CoPaw/e2e/` + mock infrastructure
- [#4458](https://github.com/agentscope-ai/CoPaw/issues/4458) - [#4460](https://github.com/agentscope-ai/CoPaw/issues/4460): Tests para Login, Agents, Settings, Control pages
- [#4464](https://github.com/agentscope-ai/CoPaw/pull/4464): CI workflows para smoke + integration tests

**Sinal de roadmap:** A equipe está investindo significativamente em test automation, indicando preparação para releases mais frequentes ou maior confiança em refactors.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

1. **Estabilidade do Chat**
   > "聊天窗口聊天无回应，切换其他模型也是一样的，重启docker，清空重新安装，结果都一样！发送消息后一直是三个点在跳动状态"
   - Usuários experimentam problemas mesmo após reinstalação limpa
   - Evidencia fricção alta: "três pontos" (loading spinner) sem resolução

2. **Experiência de Instalação**
   > "用的是脚本安装，到第三步copaw app出错"
   - Onboarding problemático em Ubuntu
   - Deprecation warnings expostos ao usuário

3. **Recursos de Desktop**
   - Interesse em tray startup (#4041) indica uso como **agente de longa duração**
   - Tauri desktop app (#3813) demonstra demanda por **experiência desktop nativa**

4. **Segurança**
   - Report de RCE (#4470) mostra comunidade ativa em responsible disclosure
   - Investimento em testes de segurança (#4467) responde à demanda por robustness

### Satisfação vs Insatisfação

| Aspecto | Status |
|---------|--------|
| Funcionalidade Core (chat, agents) | ⚠️ Problemas ativos de freeze |
| Onboarding/Instalação | ⚠️ Fricção em Ubuntu |
| Expansão de Providers | ✅ xAI/Grok em desenvolvimento |
| Desktop Experience | ✅ Tauri em progresso |
| Test Coverage | ✅ 89% em segurança |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resolução (idade > 14 dias)

| Issue | Idade | Prioridade | Descrição |
|-------|-------|------------|-----------|
| [#3854](https://github.com/agentscope-ai/CoPaw/issues/3854) | ~20 dias | **Alta** | chromadb SIGSEGV — 45+ crashes em uma sessão |
| [#3640](https://github.com/agentscope-ai/CoPaw/issues/3640) | ~26 dias | **Alta** | MCP TaskGroup freeze |
| [#2684](https://github.com/agentscope-ai/CoPaw/issues/2684) | ~47 dias | Média | Ubuntu installation error |
| [#3813](https://github.com/agentscope-ai/CoPaw/pull/3813) | ~23 dias | Média | Tauri desktop PR — primeira contribuição |
| [#2771](https://github.com/agentscope-ai/CoPaw/pull/2771) | ~47 dias | Baixa | Restringir mlx-lm a Apple Silicon |

### ⚠️ Atenção Imediata Recomendada

1. **[#4470](https://github.com/agentscope-ai/CoPaw/issues/4470)** — RCE vulnerability no plugin interface: requires **immediate security response**
2. **[#3854](https://github.com/agentscope-ai/CoPaw/issues/3854)** — chromadb crash: processo morre silenciosamente, difícil debugar
3. **[#4453](https://github.com/agentscope-ai/CoPaw/issues/4453) / [#4469](https://github.com/agentscope-ai/CoPaw/issues/4469)** — Padrão de chat unresponsive: múltiplos users afetados

---

## Métricas Resumidas

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues abertas/ativas | 14 | Neutra |
| PRs abertos | 13 | Neutra |
| PRs merged/closed | 4 | Positiva |
| Releases (24h) | 0 | — |
| Bugs críticos | 3 | ⚠️ Alerta |
| Features em开发 | 7+ | ✅ Boa pipeline |
| Test coverage (segurança) | 89% | ✅ Forte |

---

*Relatório gerado em 2026-05-18. Dados extraídos de github.com/agentscope-ai/CoPaw.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
**Data:** 2026-05-18 | **Origem:** github.com/zeroclaw-labs/zeroclaw

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade de desenvolvimento** em 2026-05-18, com 50 PRs atualizados e 20 issues novas/atualizadas nas últimas 24h — um ritmo consistente com o padrão semanal. Nenhuma release foi publicada hoje, indicando que a equipe está em ciclo de integração antes de um próximo tag. A carga de bugs é elevada, com ao menos 9 issues classificadas como P1 (workflow bloqueado ou degradação severa), o que sugere pressão sobre estabilidade. O tema central do ciclo parece ser a **correta compatibilidade com modelos de pensamento/reasoning** (DeepSeek-V4, Xiaomi mimo, Qwen 3.6) e correções no subsistema de cron — ambos com múltiplas issues e PRs关联 em paralelo.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.** O projeto não emitiu novos tags hoje. A última release estável provavelmente precede esta data; sem informação no conjunto de dados fornecido, recomenda-se consultar a aba Releases do repositório para identificar o último versionamento.

> ⚠️ **Alerta:** A ausência de releases pode indicar que a equipe priorizou integração interna (o PR #6553 observability, por exemplo, foi fechado hoje após trabalho significativo) em vez de publicação de versão. Usuários em produção devem monitorar a branch `master` para detectar quando um novo tag será criado.

---

## 3. Progresso do Projeto

Três PRs **fechados/merged** hoje representam avanços significativos:

| PR | Autor | Resumo |
|---|---|---|
| [#6553](https://github.com/zeroclaw-labs/zeroclaw/pull/6553) | WareWolf-MoonWall | **fix(observability):** restaurou SSE `/logs` quebrado; adicionou versionamento de build e health pulse para deploys remote/Docker (fecha #5986). Traz token provenance authoritative via `ChatResponse.usage`. Tamanho L, risco alto. |
| [#6705](https://github.com/zeroclaw-labs/zeroclaw/pull/6705) (fechado) | NiuBlibing | **Bug:** cron job no Windows falhava com `spawn error: program not found` por hardcoded `sh`. Solução aguardava merge quando issue foi fechada — verificar se equivalente foi mergeado pelo PR #6740/#6741. |
| [#5994](https://github.com/zeroclaw-labs/zeroclaw/issues/5994) (issue fechada) | rexname | **Feature:** website oficial + documentação end-to-end (config e CLI) aprovada. Avanço importante para onboarding. |

O PR [#6710](https://github.com/zeroclaw-labs/zeroclaw/pull/6710) (desktop support Windows/Linux) foi fechado hoje após merge — indica que a proposta de suporte desktop cross-platform avançou ou foi rejeitada/adaptada. **PRs em destaque abertos:**

- [#6740](https://github.com/zeroclaw-labs/zeroclaw/pull/6740) + [#6741](https://github.com/zeroclaw-labs/zeroclaw/pull/6741) — correções complementares de timezone no cron (drbparadise)
- [#6746](https://github.com/zeroclaw-labs/zeroclaw/pull/6746) — alinhamento de caminhos de install/discovery de plugins (fecha #6254)
- [#6682](https://github.com/zeroclaw-labs/zeroclaw/pull/6682) — corrige deadlock ao usar `reqwest::blocking::Client` dentro do runtime async

---

## 4. Temas Quentes da Comunidade

**Issues com maior engajamento (comentários + reações):**

| Issue | Tipo | Comentários | 👍 | Destaque |
|---|---|---|---|---|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | Bug (high) | 9 | 4 | Incompatibilidade com formato DeepSeek-V4 API (thinking mode). **Maior reação da comunidade.** |
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | Bug (high) | 9 | 1 | Kimi-code provider falha em streaming chat com `reasoning_content` ausente. P1, bloqueia workflow. |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Enhancement | 2 | 0 | Auditoria: 153 commits perdidos em revert c3ff635 — demanda por plano de recuperação. |
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | Enhancement (p1) | 1 | 0 | Tracker para tema v0.7.6: `zeroclaw skills` support e UX. Convite explícito para input da comunidade. |

**Análise:** A comunidade está mobilizada em torno de dois eixos:
1. **Compatibilidade de modelos com thinking/reasoning** — DeepSeek-V4, Kimi, Xiaomi, Qwen 3.6 possuem padrões de resposta diferentes (`reasoning_content`, `thinking`, envelopes de tool-call) que o ZeroClaw ainda não padroniza corretamente.
2. **Qualidade de skills e tooling** — O tracker v0.7.6 demonstra que a equipe quer ouvir a comunidade sobre a experiência com skills.

**PRs quentes:**

- [#6209](https://github.com/zeroclaw-labs/zeroclaw/pull/6209) (strict SkillMeta + SkillForge) tem CHANGES_REQUESTED — demanda atenção do autor.
- [#6607](https://github.com/zeroclaw-labs/zeroclaw/pull/6607) marcado como `needs-author-action` — progresso travado.

---

## 5. Bugs e Estabilidade

### Prioridade P1 (workflow bloqueado / segurança)

| Issue | Título | Severidade | Status |
|---|---|---|---|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | DeepSeek-V4 API incompatible com thinking mode | S2 | in-progress |
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | Kimi-code streaming tool-call falha (`reasoning_content` missing) | S1 | no-stale |
| [#6705](https://github.com/zeroclaw-labs/zeroclaw/issues/6705) | Cron no Windows: `spawn error: program not found` (hardcoded `sh`) | S1 | closed |
| [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) | `tool_search` não está em `default_auto_approve` → deferred_loading+webhook hangs 120s | S2 | accepted |
| [#6734](https://github.com/zeroclaw-labs/zeroclaw/issues/6734) | Qwen 3.6 tool-call envelopes vazam para replies Matrix | S2 | in-progress |
| [#6747](https://github.com/zeroclaw-labs/zeroclaw/issues/6747) | `amannn/action-semantic-pull-request` não executa (lista de actions não atualizada) | S0 | no-stale |

### Prioridade P2 (degradação de comportamento)

- [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) — Xiaomi mimo-v2.5 `reasoning_content` não propagado em loops de tool-call (S0 — data loss)
- [#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) — OpenAI provider ignora `timeout_secs` (hardcoded 120s)
- [#6739](https://github.com/zeroclaw-labs/zeroclaw/issues/6739) — Cron timezone inconsistente entre tools, CLI e API
- [#6733](https://github.com/zeroclaw-labs/zeroclaw/issues/6733) — Matrix streaming draft state key collision por room-only
- [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) — Channel replies bypass Fluent localization (closed)
- [#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) — SQLite memory schema concurrent init failure (closed)
- [#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722) — `MemoryConfig.rerank_*` declarados mas nunca lidos
- [#6720](https://github.com/zeroclaw-labs/zeroclaw/issues/6720) — `context_aware_tools` config dead code

**Resumo:** 6 issues P1 abertas, 8+ P2. Padrão preocupante: **múltiplos bugs relacionados a providers + modelos com thinking** indicam que a compatibilidade com novos padrões de resposta LLM é o maior risco de estabilidade do momento.

---

## 6. Pedidos de Features e Sinais de Roadmap

| Issue | Título | Sinais de Roadmap |
|---|---|---|
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | **Tracker v0.7.6: `zeroclaw skills` support e UX** | Prioridade clara para v0.7.6; cobre CLI, loader, audit, install, sandbox, test harness, skill authoring. Comunidade convidada a contribuir. |
| [#6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) | **Agent capability flags** (`shared/` access + workspace escape) | Sinaliza feature para v0.8.0: granularizar permissões de agentes. `<install>/shared/` está em shipment. |
| [#5994](https://github.com/zeroclaw-labs/zeroclaw/issues/5994) | **Website oficial + documentação end-to-end** | Closed — provavelmente em implementação. |
| [#6742](https://github.com/zeroclaw-labs/zeroclaw/pull/6742) | **Testes de streaming payload tracing para `--log-llm`** | Melhora de debugabilidade — testing infra. |
| [#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) | **Remover remote-markdown-link block do skill audit** | Simplificação do audit; false-positives altos em plugins reais. |

**Sinais de direção:**
- v0.7.6 terá foco em **skills e experiência de authoring**
- v0.8.0 começará a tratar **permissões granulares entre agentes**
- Documentação oficial está em desenvolvimento ativo
- Desktop app (Windows/Linux) foi proposto em [#6710](https://github.com/zeroclaw-labs/zeroclaw/pull/6710) — status preciso a verificar

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

**1. Incompatibilidade com modelos de thinking/reasoning (maior tema)**
> *"When using DeepSeek-V4-Pro and DeepSeek-V4-Flash, the API encounters an error related to the thinking mode."* — SSDGADsss (#6059, 4 👍)
> *"thinking is enabled but reasoning_content is missing in assistant"* — hvvvvvvv (#5600)

**Conclusão do usuário:** O ZeroClaw não suporta corretamente a nova geração de modelos que emitem `reasoning_content` como campo separado. Usuários que tentam usar DeepSeek-V4, Kimi ou Xiaomi com thinking habilitado enfrentam crashes ou erros.

**2. Cron job totalmente quebrado no Windows**
> *"On Windows hosts without Git Bash/MSYS — cron is entirely unusable"* — NiuBlibing (#6705, P1)

**Conclusão:** Usuários Windows não conseguem agendar jobs. Impacto direto em automação.

**3. Configurações declaradas que não funcionam**
> `timeout_secs` é configurável mas ignorado (#6723), `context_aware_tools` promete filtragem mas não faz nada (#6720), `rerank_*` existe na docs mas não tem código consumidor (#6722).

**Feedback implícito:** Usuários estão descobrindo que a config surface é maior que a implementação real — indica divórcio entre documentação e código.

**4. Skill audit com falsos positivos**
> *"several `anthropics/knowledge-work-plugins` marketplace plugins fail audit purely for citing docs URLs that end in `.md`"* — xiongzubiao (#6714)

**Feedback:** O audit block para markdown remote links é intrusivo demais. Produtividade do ecossistema de skills afetada.

### Satisfação

- O PR #6553 (observability/SSE logs restaurado) foi bem recebido — resolve problema crítico para deployments remote/Docker.
- O tracker de skills v0.7.6 (#6253) mostra que a equipe está receptiva ao input da comunidade.
- O PR #6701 (Telegram preserve markdown fences) resolve frustração comum em canais que usam código formatado.

---

## 8. Backlog que Merece Atenção

| Item | Idade | Status | Por que merece atenção |
|---|---|---|---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — 153 commits perdidos em revert | ~20 dias | in-progress (sem PR ainda) | Risco de perda de trabalho aprovado. Nenhum plano de recuperação mergeado ainda. |
| [#6607](https://github.com/zeroclaw-labs/zeroclaw/pull/6607) — `needs-author-action` | ~5 dias | travado | Bloqueia fix de provider kind. Autor inativo. |
| [#6209](https://github.com/zeroclaw-labs/zeroclaw/pull/6209) — CHANGES_REQUESTED | ~19 dias | revisão | Strict SkillMeta bloqueado por mudanças solicitadas. |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — Audit de commits | ~20 dias | sem resolução | Necessário para restaurar código perdido de 153 commits. |
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) — Kimi-code P1 | ~38 dias | no-stale | Bug P1 sem assignee claro ou PR associado. |
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) — tracker v0.7.6 | ~17 dias | accepted, sem PR | Tema central da próxima versão sem tracked implementation. |

**Recomendação prioritária:** O regresso de 153 commits (#6074) é a questão técnica mais crítica em aberto — sem plano de recuperação, trabalho revisado e aprovado está perdido permanentemente. Em segundo lugar, as issues de compatibilidade com thinking mode (#6059, #6672, #6734) formam um cluster que, se não resolvido, afetará qualquer usuário tentando usar os modelos LLM mais recentes.

---

*Relatório gerado automaticamente com base nos dados GitHub do repositório zeroclaw-labs/zeroclaw. Métricas do período: 2026-05-17 00:00 → 2026-05-18 00:00 (UTC).*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*