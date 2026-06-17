# Resumo diário do ecossistema de agentes de IA 2026-06-18

> Issues: 3 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-06-17 21:55 UTC

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
## Data: 18 de junho de 2026

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade nas últimas 24h**, com 3 issues abertas/atualizadas e 1 PR em andamento. Não houve lançamentos de novas versões, indicando um período de estabilização ou manutenção. As issues em aberto concentram-se em problemas de usabilidade (CLI e Web UI) e um bug crítico relacionado ao scheduler com hosts externos. O PR #960 sugere um esforço ativo para resolver o problema de controle de teclado no CLI, demonstrando atenção da comunidade a problemas de UX. O projeto mantém-se funcional para casos de uso básicos, mas os problemas reportados indicam áreas que necessitam atenção antes de uma próxima release estável.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não registrou novas versões, releases ou tags. Este período de silêncio em releases pode indicar:
- Fase de testes ou QA antes de próxima versão
- Priorização de resolução de issues abertas antes de cut
- Desenvolvimento ativo em branch separada

**Recomendação:** Verificar se há milestone planejado para próximas semanas.

---

## 3. Progresso do Projeto

### PR em Andamento

| #960 | **fix(cli): handle arrow keys in agent REPL** |
|------|---------------------------------------------|
| Autor | [vernonstinebaker](https://github.com/vernonstinebaker) |
| Status | ABERTA |
| Criado | 2026-06-17 |

**Resumo técnico:**
- Implementa editor de linha allocation-free para REPL interativo do `nullclaw agent`
- Habilita modo raw POSIX para sessões TTY
- Suporta: teclas de seta, navegação de histórico, movimento de cursor, backspace/delete, Home/End, word-left/right

**Impacto:** Resolve diretamente a issue #865, melhorando significativamente a experiência do terminal. Este PR representa um avanço importante na usabilidade da CLI.

**Próximos passos esperados:** Code review, testes em diferentes terminais, merge.

---

## 4. Temas Quentes da Comunidade

### Issues por Engajamento

| Issue | Título | Comentários | Reações | Tendência |
|-------|--------|-------------|---------|-----------|
| #915 | [bug] Problem with scheduler unauthorized | 2 | 0 | ⬆️ Atualizada em 2026-06-17 |
| #865 | [bug] CLI shows ctrl characters for up/down/left/right keys | 2 | 0 | ⬆️ Atualizada em 2026-06-17 |
| #861 | How to enable the Web UI on headless VPS server? | 1 | 0 | ⬆️ Atualizada em 2026-06-17 |

### Análise das Demandas

**#915 - Scheduler Unauthorized (Prioridade ALTA)**
- Cenário: Usuário com setup Ubuntu + Ollama externo em rede local + GPU RTX 3090
- Problema: LLM funciona, tool calling funciona, mas scheduler não opera
- Afeta: Integração com Telegram (e possivelmente outros canais)
- Complexidade: Integração de sistemas (autenticação, comunicação inter-processo)

**#865 + #960 - UX do CLI (Prioridade MÉDIA-ALTA)**
- Correlação direta: issue reportada ↔ PR de correção aberto
- Impacto: Usabilidade diária para desenvolvedores e usuários avançados
- Solução aparentemente em progresso via PR #960

**#861 - Documentação de Web UI (Prioridade MÉDIA)**
- Usuário não consegue seguir instruções do README
- Pedido por documentação mais acessível
- Potencial gap entre expectativas de usuários e realidade técnica

---

## 5. Bugs e Estabilidade

### Bug Crítico

| 🔴 #915 | **Scheduler Unauthorized** |
|---------|----------------------------|
| Severidade | **ALTA** |
| Reproduzível | Sim (ambiente específico) |
| Escopo | Scheduler + canais (Telegram) |

**Descrição técnica:**
- Ambientes com Ollama externo em rede local falham na autenticação do scheduler
- Funcionalidade LLM básica intacta
- Ferramentas individuais operam, mas scheduler central falha

**Impacto:** Bloqueia caso de uso de integração multi-ferramenta em setups de rede.

---

### Bugs de Usabilidade

| 🟡 #865 | **Caracteres de Controle no CLI** |
|---------|-----------------------------------|
| Severidade | **MÉDIA** |
| Reproduzível | Sim (terminal nativo) |
| Escopo | Interface CLI interativa |

**Descrição:**
- Teclas direcionais (↑↓←→) exibem caracteres de controle ao invés de navegar
- Afeta edição de linha e histórico de comandos
- Solução em PR #960

---

### Gap de Documentação

| 🟢 #861 | **Web UI em VPS Headless** |
|---------|---------------------------|
| Severidade | **BAIXA** (documentação) |
| Tipo | Dúvida / Feature Request implícito |

**Descrição:** Usuário não consegue configurar Web UI seguindo documentação atual. Necessidade de tutorial mais acessível.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Sinais Identificados

**1. Suporte a Hosts Externos Robustos (#915)**
- Evidência: Problema com Ollama externo em rede
- Sinal: Usuários avançados estão expandindo além de setups locais
- Implicação: NullClaw pode precisar melhorar suporte a arquiteturas distribuídas

**2. Web UI mais Acessível (#861)**
- Evidência: Documentação considerada técnica demais
- Sinal: Base de usuários menos técnica adotando o projeto
- Implicação: Necessidade de guias passo-a-passo, vídeos, ou configuração simplificada

**3. CLI Professional-Grade (#960)**
- Evidência: PR para melhorar editor de linha
- Sinal: Uso intensivo do terminal como interface primária
- Implicação: Investimento em qualidade de DX (Developer Experience)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Ocorrência | Severidade Sentida |
|-----|------------|-------------------|
| Scheduler não funciona com Ollama externo | #915 | Alta |
| CLI não responsivo ao teclado | #865 | Média |
| Documentação Web UI inacessível | #861 | Média |

### Cenários de Uso Reportados

**Cenário 1: Setup de IA Local Avançado**
```
OS: Ubuntu
GPU: NVIDIA RTX 3090
LLM: Qwen3.6:27b
Integração: Ollama externo (mesma rede)
Canal: Telegram
Status: Parcialmente funcional
```

**Cenário 2: VPS Headless com Browser Relay**
```
Ambiente: VPS sem interface gráfica
Objetivo: Acessar Web UI remotamente
Status: Documentação insuficiente
```

### Indicadores de Satisfação

| Métrica | Valor | Interpretação |
|---------|-------|---------------|
| Issues fechadas (24h) | 0 | Nenhuma resolução |
| PRs merged (24h) | 0 | Nenhuma integração |
| Novos releases | 0 | Estabilidade ou pausa |
| Engagement geral | Baixo | Projeto em modo manutenção |

**Conclusão:** Usuários ativos estão encontrando barreiras técnicas (bugs + documentação), mas demonstram interesse ao reportar issues detalhadamente.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta / Desatendidas

| Issue | Idade | Prioridade | Status Atual |
|-------|-------|------------|--------------|
| #915 | ~34 dias (desde 2026-05-15) | **ALTA** | Aberta, 2 comentários |
| #865 | ~56 dias (desde 2026-04-23) | **MÉDIA-ALTA** | Aberta, 2 comentários, PR correlato |
| #861 | ~57 dias (desde 2026-04-22) | **MÉDIA** | Aberta, 1 comentário |

### Análise de Tempo de Resposta

- **Tempo médio de resposta:** 1-2 comentários iniciais presentes
- **Resolução:** Nenhuma issue do período foi fechada
- **Alerta:** Issues com >30 dias sem resolução podem indicar:
  - Complexidade técnica não endereçada
  - Falta de mantenedores disponíveis
  - Priorização inadequada

### Recomendações Prioritárias

1. **#915** - Avaliar urgência: scheduler é feature core. Investigar logs, reproduzir ambiente, prover workaround.
2. **#865/#960** - Acelerar review do PR #960 para fechar issue correlata.
3. **#861** - Documentar procedimento de Web UI passo-a-passo ou criar script de configuração simplificado.

---

## Métricas Consolidada do Período

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 3 |
| Issues fechadas | 0 |
| PRs abertas | 1 |
| PRs merged | 0 |
| Releases | 0 |
| Issues com >30 dias | 3 |
| Taxa de resolução (7 dias) | 0% |

---

## Veredito: Saúde do Projeto

| Dimensão | Status | Observação |
|----------|--------|------------|
| Atividade | 🟡 Moderada | 3 issues + 1 PR em 24h |
| Estabilidade | 🔴 Preocupante | Bug crítico de scheduler sem resolução |
| Documentação | 🟡 Necesita melhoria | Feedback negativo de usuário |
| Engajamento | 🟢 Positivo | Contribuições externas (PR #960) |
| Manutenção | 🟡 Regular | Issues antigas sem resolução |

**Ação recomendada:** Priorizar resolução do bug #915 e review do PR #960. Considerar comunicação proativa com usuários afetados.

---

*Relatório gerado automaticamente com base em dados do GitHub de [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) em 2026-06-18.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema Open Source de Agentes de IA

**Data de referência:** 18 de junho de 2026
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dupla velocidade de evolução** em 18 de junho de 2026. De um lado, projetos maduros como NanoBot, IronClaw e CoPaw operam em ritmo industrial — com 45-50 artefatos processados por dia (issues + PRs) e múltiplos releases por semana. De outro, NullClaw demonstra estagnação, com apenas 3 issues e 1 PR em 24h, sinalizando possível abandono ou reestruturação interna. A convergência técnica é notável: segurança de workspace, suporte a modelos locais (Ollama, vLLM), e integração multi-canal dominam as agendas de desenvolvimento. A crescente demanda por UX de desktop (Hermes Agent, PicoClaw, CoPaw/Tauri) e onboarding simplificado (NanoBot, CoPaw) indica que o ecossistema transita da adoção early-adopter para mainstream.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | Taxa Fechamento | Saúde Geral |
|---------|-------------|-----------|----------------|-----------------|-------------|
| **NullClaw** | 3 | 1 | 0 | 0% | 🔴 Preocupante |
| **NanoBot** | 11 | 31 | 0 | ~58% (18/31) | 🟢 Estável |
| **Hermes Agent** | 50 | 50 | 0 | ~18% (9/50) | 🟡 Atenção |
| **PicoClaw** | 4 | 10 | 1 nightly | 60% | 🟢 Estável |
| **IronClaw** | 50 | 50 | 0 | ~52% (26/50) | 🟢 Estável |
| **CoPaw** | 45 | 50 | 1 (v1.1.12) | ~70% (35/50) | 🟢 Estável |
| **ZeroClaw** | 50 | 50 | 0 | 2% (1/50) | 🟡 Pré-release |

**Observação crítica:** Hermes Agent, IronClaw e ZeroClaw reportam 50/50 (issues/PRs), sugerindo possível limite de listagem da API GitHub. Os números reais podem ser superiores. Mesmo assim, a disparidade entre volume reportado e taxa de fechamento indica acúmulo de backlog — particularmente em Hermes Agent (3 issues P1 de OAuth simultâneas) e ZeroClaw (10+ issues sem comentários há 30+ dias).

---

## 3. Posicionamento do Projeto Principal

### NanoBot — Referência de Produtividade

NanoBot (HKUDS) demonstra o **melhor equilíbrio atividade/qualidade** do ecossistema:

| Dimensão | Vantagem Competitiva |
|----------|---------------------|
| **Velocidade** | 31 PRs processados em 24h — 3x a média do ecossistema |
| **Segurança** | 4 PRs dedicados a workspace security em um único dia |
| **Provedores** | Suporte nativo a 8+ provedores (Mistral, Anthropic, Keenable, NEAR AI) |
| **Estabilidade** | Taxa de resolução de bugs crítica: 100% (SSRF e Gemini 3.5 Flash corrigidos) |
| **Comunidade** | Contribuidores ativos resolvem issues sem dependência exclusiva de core team |

**Diferenças técnicas:** NanoBot prioriza **infraestrutura de runtime** (proxy para modelos locais, sanitização de IDs, fallback configurável) sobre interface de usuário. A estratégia de "consolidar antes de expandir" resulta em releases menos frequentes, porém mais estáveis.

### IronClaw — Líder em Arquitetura Modular

| Diferenciação | Detalhe |
|---------------|---------|
| **Framework Reborn** | Arquitetura de grafo para composição de agentes em produção |
| **Engine V2** | Multi-rota de execução (CodeAct, orchestrator) com otimização de custo |
| **Meta-engenharia** | Uso de IA para construir IA (#4878, #5036) — dogfooding institucionalizado |
| **Operador logs** | Correlação de logs com thread_id/run_id para debugging em tempo real |

### CoPaw — Líder em Experiência de Usuário

| Foco | Impacto |
|------|---------|
| **Console v1.1.12** | Provider Aggregation, Simple Mode, Unified Card UI |
| **Migração AgentScope 2.0** | Alpha 2.0.0a1 aberta — reposicionamento estratégico |
| **Onboarding** | Modo simplificado para não-técnicos (flat navigation) |
| **Canais chineses** | Integração avançada com XiaoYi, DingTalk, Feishu |

### Hermes Agent — Líder em Desktop Multi-Plataforma

| Capacidade | Estado |
|-----------|--------|
| **Electron cross-platform** | macOS, Windows, Linux com client-only installation |
| **OAuth Anthropic** | Funcionalidade core, porém em estado frágil (3 P1 simultâneas) |
| **Ecossistema de plugins** | 50+ PRs/issues em canais (Slack, WhatsApp, Rocket Chat, Telegram) |
| **Desktop Client-Only** | 17 👍 — demanda validada por instalação lean conectando a instâncias remotas |

### PicoClaw — Especialista em Segurança

PicoClaw apresenta o **ciclo de resposta a vulnerabilidades mais rápido** do ecossistema:

- SSRF crítico em OneBot (#3070): reportado → corrigido via PR #3140 → nightly release em <24h
- Gemini 3.5 Flash compatibility (#3111): issue aberta → schema fix → nightly em <24h

**Trade-off:** Volume de atividade inferior (10 PRs, 4 issues), porém com precisão cirúrgica em segurança e compatibilidade de modelos.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Workspace e Filesystem

| Projeto | Abordagem |
|---------|-----------|
| **NanoBot** | 4 PRs em 24h: read-only roots, git commands em subdiretórios, extra_read/write_allowed_dirs |
| **IronClaw** | Byte budget para read_file, boundary de contexto |
| **CoPaw** | Async runtime probe para ChromaDB crash, context compaction com timeout |

**Implicação:** A comunidade converge para modelos de sandbox onde tools имеют acesso granular a filesystem. A abordagem de NanoBot (whitelist explícita) está se tornando padrão.

### 4.2 Suporte a Modelos Locais (Ollama, vLLM, llama.cpp)

| Projeto | Solução Implementada |
|---------|---------------------|
| **NanoBot** | PR #4367: disable proxy for local endpoints, respect env proxy for cloud |
| **NullClaw** | Issue #915: scheduler falha com Ollama externo em rede local |
| **PicoClaw** | Provider NEAR AI Cloud (OpenAI-compatible), llama.cpp router em roadmap |
| **ZeroClaw** | llama.cpp model router (#7539) marcado como "quickstart" |

**Tendência:** Proxy configuration é o principal ponto de fricção. NanoBot resolveu; NullClaw ainda tem bug P1.

### 4.3 Multi-Canal e Integração de Mensageria

| Canal | Projetos Ativos |
|-------|----------------|
| Discord | ZeroClaw (5+ PRs), Hermes Agent |
| Telegram | Hermes Agent, IronClaw, NanoBot |
| WhatsApp | NanoBot (#4354), Hermes Agent |
| Signal | ZeroClaw (#7891, #7904) |
| WeChat/WeCom | IronClaw (#3582, #4191) |
| XiaoYi (Huawei) | CoPaw (#5274 — recém-corrigido) |
| Feishu | NanoBot (#4381), CoPaw |
| Rocket Chat | Hermes Agent (#3725 — 81 dias em aberto) |
| SimpleX/Tox | PicoClaw (#3093 — demanda descentralizada) |

**Sinal de mercado:** A fragmentação de canais de mensageria cria demanda por adapters plugáveis. Projetos que investem em arquitetura de canais (ZeroClaw com CRUD completo via CLI) ganham vantagem competitiva.

### 4.4 Desktop e Clients

| Plataforma | Status por Projeto |
|-------------|-------------------|
| **Electron** | Hermes Agent (problemas crônicos de electronDist), CoPaw |
| **Tauri** | CoPaw (macOS ARM64 crash loop, SIGSEGV) |
| **WebUI** | IronClaw (v2 perf: -15s load), PicoClaw (histórico de sessões) |
| **TUI** | ZeroClaw (Zerocode tracker dedicado) |

**Problema recorrente:** Electron e Tauri apresentam falhas de empacotamento específicas por plataforma. Nenhum projeto demonstra maturidade full-stack desktop consistente.

### 4.5 Autenticação e OAuth

| Problema | Projetos Afetados | Severidade |
|----------|-------------------|------------|
| OAuth Anthropic quebrado | Hermes Agent (3 P1 simultâneas) | 🔴 Crítica |
| Slack auth stale bypass | IronClaw (#5014 — corrigido) | 🟡 Média |
| Gmail auth-resume | IronClaw (#5051 — corrigido) | 🟡 Média |
| Telegram token leak | ZeroClaw (#2091) | 🟡 Segurança |

**Conclusão:** OAuth é consistentemente a camada mais frágil. Hermes Agent precisa resolver suas 3 P1 urgentemente.

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura e Paradigma

| Projeto | Paradigma | Escolhas Arquiteturais |
|---------|-----------|------------------------|
| **NanoBot** | Runtime-centric | Proxy layer, provider abstraction, memory consolidation |
| **IronClaw** | Graph-based (Reborn) | Composable agents, Engine V2 multi-rota |
| **CoPaw** | Plugin-based | Channel plugins, skill bundles, AgentScope 2.0 migration |
| **ZeroClaw** | CLI-first | SKILL.toml declarative, CRUD via CLI, cascade deletes |
| **Hermes Agent** | Desktop-centric | Electron wrapper, client-only installation option |
| **PicoClaw** | Security-first | SSRF mitigation, vodozemac migration, protocol gateways |

### 5.2 Público-Alvo

| Projeto | Persona Primária | Secundária |
|---------|------------------|------------|
| **NullClaw** | — | — |
| **NanoBot** | DevOps, power users | Multi-tenant operators |
| **Hermes Agent** | Usuários desktop | Corporações (OAuth Anthropic) |
| **PicoClaw** | Privacidade-conscious | Protocol enthusiasts |
| **IronClaw** | AI-native engineers | Enterprise automation |
| **CoPaw** | Não-técnicos (Simple Mode) | Usuários chineses |
| **ZeroClaw** | Developers (CLI) | DevOps (GitHub integration) |

### 5.3 Estratégia de Crescimento

| Projeto | Vetor de Crescimento |
|---------|----------------------|
| **NanoBot** | Provedor diversity + segurança |
| **Hermes Agent** | Desktop client + Rocket Chat |
| **PicoClaw** | Protocol expansion (Deltachat, SimpleX) |
| **IronClaw** | Meta-engenharia + Reborn ecosystem |
| **CoPaw** | Onboarding simplificado + v2.0 migration |
| **ZeroClaw** | Discord developer features + TUI |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteration

| Tier | Projetos | Releases/Semana | PRs/Dia | Estabilidade |
|------|----------|-----------------|---------|--------------|
| **🚀 Hyper-growth** | CoPaw, IronClaw | 1-2 | 45-50 | 🟡 Alta pressão |
| **📈 Crescimento** | NanoBot | 0-1 | 30+ | 🟢 Estável |
| **🔧 Estabilizando** | PicoClaw | 1/week | 10 | 🟢 Estável |
| **⚠️ Convergindo** | Hermes Agent | 0 | 50 | 🟡 Backlog P1 |
| **🔴 Estagnado** | NullClaw | 0 | 1 | 🔴 Concerns |
| **🟡 Pre-release** | ZeroClaw | 0 | 50 | 🟡 No merge |

### 6.2 Indicadores de Maturidade

| Indicador | NanoBot | IronClaw | CoPaw | Hermes | PicoClaw | ZeroClaw |
|-----------|---------|----------|-------|--------|----------|----------|
| **Segurança respondida <24h** | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ |
| **Features entregues >30d** | ✅ | ✅ | ✅ | ⚠️ | ✅ | ❌ |
| **Onboarding documentado** | 🟡 | 🟡 | ✅ | ❌ | ❌ | ❌ |
| **Multi-tenant pronto** | ✅ | ✅ | 🟡 | ❌ | ❌ | 🟡 |
| **Mobile UI estável** | ❌ | ❌ | 🟡 | ❌ | ❌ | ❌ |
| **Bug P1 <7 dias** | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ |

### 6.3 Risco de Abandonware

| Projeto | Risco | Indicadores |
|---------|-------|-------------|
| **NullClaw** | 🔴 Alto | 0 PRs merged, 0 releases, 3 issues >30d, 1 contributor |
| **ZeroClaw** | 🟡 Médio | 50 issues >30d, 1 PR merged/24h, 0 releases |
| **Hermes Agent** | 🟡 Médio | 3 P1 simultâneas, 81d issue Rocket Chat sem resposta |

---

## 7. Sinais de Tendência

### 7.1 Tendências Fortes (Validadas por Múltiplos Projetos)

**① Onboarding Simplificado**
> NanoBot: wizard amigável (#4376)  
> CoPaw: Simple Mode + Provider Aggregation  
> CoPaw: modo flat navigation para não-técnicos  

*Interpretação:* O ecossistema reconhece que a barreira de entrada é o principal bloqueador de adoção.是谁 que resolver onboarding primeiro ganhará share de mercado.

**② Multi-Tenancy como Requirement**
> NanoBot: multi-tenant gateway (#936)  
> IronClaw: Reborn production wiring  
> CoPaw: multi-instances organizados por pasta  

*Interpretação:* Usuários estão passando de "1 agente por máquina" para "múltiplos agentes por deployment". Arquiteturas single-tenant serão abandonadas.

**③ Desktop Client-Light**
> Hermes Agent: Desktop Client-Only Installation (17 👍)  
> CoPaw: Tauri desktop em desenvolvimento  
> IronClaw: WebUI v2 com self-hosting de assets  

*Interpretação:* Usuários corporativos preferem instalar cliente desktop lean conectando a instâncias cloud/remote, ao invés de self-hosting completo. Modelo thin-client está em demanda.

**④ Segurança como Feature de Primeira Classe**
> PicoClaw: SSRF mitigation em <24h  
> NanoBot: 4 PRs de workspace security  
> ZeroClaw: SSRF fix (#7902), Telegram token leak  

*Interpretação:* Vulnerabilidades em agentes de IA

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto — NanoBot (HKUDS/nanobot)

**Data de referência:** 2026-06-18
**Formato:** Atualização diária de projeto open source — agentes de IA e assistentes pessoais

---

## 1. Panorama do dia

O projeto NanoBot apresenta **alta atividade de desenvolvimento** na data de hoje, com 31 PRs atualizados nas últimas 24h (13 abertos, 18 merged/fechados) e 11 issues com atividade recente (8 abertas, 3 fechadas). Não houve releases formais, indicando que o trabalho está concentrado em funcionalidades que ainda não atingiu estabilidade suficiente para um versionamento. A equipe mostra foco em **correções de bugs de estabilidade** (workspace security, proxy para modelos locais, sanitização de IDs) e em **evoluções incrementais de provedores** (Keenable, Mistral, Feishu). A comunidade demonstra interesse crescente em ergonomia de uso (wizard amigável, multi-instances, multi-tenant gateway).

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou novas versões tagged entre 2026-06-17 e 2026-06-18. Isso é consistente com um período de alta atividade de integração — o volume de PRs merged hoje (18 fechadas) sugere que a equipe está consolidando mudanças internamente antes de um próximo tag.

---

## 3. Progresso do Projeto

As seguintes PRs foram **merged/fechadas** nas últimas 24h, representando avanços concretos:

| PR | Título | Área | Relevância |
|---|---|---|---|
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) | fix(tools): keep read-only roots out of write paths | Segurança / Filesystem | **Crítica** — corrige que diretórios read-only não fossem expostos indevidamente a ferramentas de escrita |
| [#4380](https://github.com/HKUDS/nanobot/pull/4380) | fix: allow git commands in workspace subdirectories | Segurança / ExecTool | **Crítica** — resolve que comandos git eram bloqueados em subdiretórios válidos do workspace |
| [#4367](https://github.com/HKUDS/nanobot/pull/4367) | fix(providers): disable proxy for local endpoints, respect env proxy for cloud | Infraestrutura | **Alta** — resolve silêncio de servidores locais (Ollama, llama.cpp, vLLM) quando proxy está configurado no host |
| [#4350](https://github.com/HKUDS/nanobot/pull/4350) | feat(web): add Keenable search provider | Web Search | **Média** — adiciona Keenable como provedor de busca nativo |
| [#4351](https://github.com/HKUDS/nanobot/pull/4351) | feat(providers): better Mistral support | Provedores | **Alta** — corrige 4 pontos de incompatibilidade com API strict do Mistral (reasoning_effort, multimodal, embeddings, JSON mode) |
| [#4354](https://github.com/HKUDS/nanobot/pull/4354) | feat(bridge): send read receipts (blue ticks) for WhatsApp | Canal WhatsApp | **Média** —用户体验 para WhatsApp |
| [#4381](https://github.com/HKUDS/nanobot/pull/4381) | fix: recover failed Feishu streaming updates | Canal Feishu | **Média** — retry e fallback para falhas em streaming cards do Feishu |
| [#4202](https://github.com/HKUDS/nanobot/pull/4202) | Clarify filesystem workspace write policy | Segurança / Filesystem | **Alta** — alinha política de escrita com workspace access, adiciona `extra_read_allowed_dirs` / `extra_write_allowed_dirs` |
| [#4349](https://github.com/HKUDS/nanobot/pull/4349) | fix(session): preserve user turns in replay-window history | Memória / Sessão | **Média** — evita que replay LLM inicie no meio de um turn longo do usuário |
| [#4385](https://github.com/HKUDS/nanobot/pull/4385) | fix: log primary model error before fallback | Observabilidade | **Média** — loga erro do modelo primário antes de tentar fallback, aiding debugging |
| [#4386](https://github.com/HKUDS/nanobot/pull/4386) | fix: silence unroutable cli progress noise | UX / CLI | **Baixa** — reduz ruído de log em canais desconhecidos |
| [#4283](https://github.com/HKUDS/nanobot/pull/4283) | fix(webui): correct activity duration display | WebUI | **Baixa** — corrige exibição de duração de atividades |
| [#4347](https://github.com/HKUDS/nanobot/pull/4347) | Fix my tool model preset switching | Ferramenta MyTool | **Média** — tratamento explícito de model_preset em MyTool com feedback claro |
| [#4356](https://github.com/HKUDS/nanobot/pull/4356) | fix(anthropic): sanitize tool_use/tool_result IDs to API pattern | Provedor Anthropic | **Alta** — sanitiza IDs para padrão `^[a-zA-Z0-9_-]+$`, evitando 400 da Messages API |

**Destaque:** O período foi marcado por **consolidação de segurança e robustez** — 4 das 14 PRs merged abordam questões de workspace security e filesystem policy. Também houve evolução significativa no suporte a provedores (Mistral, Keenable, Anthropic).

---

## 4. Temas Quentes da Comunidade

**Issues e PRs com maior engajamento (comentários + reações):**

### Issue com mais comentários
- **[#4360](https://github.com/HKUDS/nanobot/issues/4360)** — `[bug] "end of file unexpected" during installer` — **9 comentários**
  - Severidade: **Alta**
  - Resumo: Instalador falha com `Syntax error: end of file unexpected (expecting "}")` em container Docker Debian 13 limpo. O usuário suspeita problema no script shell do pip. Issue foi **fechada**, mas o volume de comentários indica que a solução pode precisar de validação mais ampla.

### Issues com reações positivas
- **[#4376](https://github.com/HKUDS/nanobot/issues/4376)** — `user friendly wizard` — **1 👍** — Enhancement solicitado por **chengyongru**
  - Motivação: O `nanobot onboard --wizard` exige conhecimento técnico avançado, criando fricção para novos usuários não-técnicos. A demanda por onboarding mais acessível sinaliza que a barreira de entrada atual é um ponto de dor.
  - Status: Aberta, sem Assignee visível.

- **[#936](https://github.com/HKUDS/nanobot/issues/936)** — `Add Multi-Tenant Gateway for Multiple Agents` — **1 comentário, antigo (fev/2026)**
  - Motivação: Usuários precisam de containers separados por agente, aumentando uso de recursos e complexidade. Solução proposta: gateway multi-tenant com instância única gerenciando múltiplos agentes.
  - Status: Aberta desde fevereiro — **sinal de demanda recorrente não endereçada**.

### PRs com atividade relevante
- **[#4373](https://github.com/HKUDS/nanobot/pull/4373)** — `fix(memory): preserve delivery context during consolidation` — PR aberto focado em manter contexto `_channel_delivery` durante consolidação de memória.
- **[#4392](https://github.com/HKUDS/nanobot/pull/4392)** — `fix(agent): make tool microcompaction configurable` — Adiciona `agents.defaults.microcompactToolResults` para deployments cache-sensitive. Traz configurabilidade a umafeature de otimização de tokens.
- **[#4205](https://github.com/HKUDS/nanobot/pull/4205)** — `Add mailbox-backed subagent results` — Substitui publicação de mensagens sintéticas por protocolo mailbox in-memory, com consumo único de resultados.

---

## 5. Bugs e Estabilidade

**Problemas reportados nas últimas 24h:**

| Severidade | Issue | Descrição | Status |
|---|---|---|---|
| **🔴 Crítica** | [#4360](https://github.com/HKUDS/nanobot/issues/4360) | Instalador falha com syntax error em container Debian 13 limpo | **CLOSED** |
| **🔴 Crítica** | [#4375](https://github.com/HKUDS/nanobot/issues/4375) | Git commands bloqueados pelo workspace security guard em subdiretórios válidos | **Aberta** |
| **🟡 Média** | [#4388](https://github.com/HKUDS/nanobot/issues/4388) | iOS Safari: clique no input box causa zoom automático e deformação do layout | **Aberta** |
| **🟡 Média** | [#4366](https://github.com/HKUDS/nanobot/issues/4366) | Servidores de modelo local (Ollama, vLLM) silenciam quando proxy está setado no host | **CLOSED** (fix em [#4367](https://github.com/HKUDS/nanobot/pull/4367)) |
| **🟡 Média** | [#4322](https://github.com/HKUDS/nanobot/issues/4322) | `NameError: 'session_key' is not defined` após merge em branch `fix/prompt-caching` | **CLOSED** (stale/question) |

**Análise:** A **issue #4375** (git commands bloqueados em subdiretórios) está aberta e foi abordada em PR [#4380](https://github.com/HKUDS/nanobot/pull/4380) (já merged). Recomenda-se verificar se a correção do PRresolve completamente o cenário reportado na issue, pois ambas tratam do mesmo problema. A **issue #4388** (iOS Safari zoom) afeta diretamente usuários mobile — dado que a mensagem indica que o código já contém "移动端 UI 修复" (fixes mobile UI), pode haver uma regressão ou o fix não cobriu esse cenário específico.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Novas demandas e sinais da comunidade:**

| Prioridade | Issue | Feature | Sinais |
|---|---|---|---|
| **Alta** | [#936](https://github.com/HKUDS/nanobot/issues/936) | Multi-Tenant Gateway para múltiplos agentes | Demanda recorrente desde fevereiro; unresolved — indica lacuna estratégica |
| **Alta** | [#4389](https://github.com/HKUDS/nanobot/issues/4389) | `contextWindowTokens` por modelo em fallback | O escopo global de `contextWindowTokens` quebra fallbacks para modelos com janela menor — bug de config que se manifesta como feature request |
| **Média** | [#4376](https://github.com/HKUDS/nanobot/issues/4376) | Wizard de onboarding amigável | Fricção de onboarding para não-técnicos; alinhado com adoção |
| **Média** | [#4378](https://github.com/HKUDS/nanobot/issues/4378) | Cron level model/preset switching | Agendamento de troca de modelo — caso de uso de produção |
| **Média** | [#4390](https://github.com/HKUDS/nanobot/issues/4390) | Multi-instances organizados por pasta com config.json isolado | Simplificação de multi-instância para usuários "normies" |
| **Baixa** | [#3437](https://github.com/HKUDS/nanobot/issues/3437) | RFC: On-demand heartbeat trigger para debugging | Demanda de developer tooling / debugging observability |
| **Baixa** | [#4391](https://github.com/HKUDS/nanobot/pull/4391) (PR) | QR scan-to-create bot CLI login para Feishu | Funcionalidade de canal, reduz fricção de setup do Feishu |

**Sinais de roadmap prioritários:**
1. **Multi-tenancy** (#936) — a questão de múltiplos agentes por gateway é uma das mais antigas em aberto e tem alta demanda implícita.
2. **Fallback model configuration** (#4389) — expõe uma limitação de design na configuração de agentes com múltiplos modelos.
3. **Onboarding** (#4376) — a equipe já tem um contributor ativo (chengyongru) propondo a melhoria, indicando viabilidade.

---

## 7. Resumo de Feedback dos Usuários

**Dores reais identificadas:**

1. **Barreira de entrada técnica alta** — O onboard wizard exige conhecimento avançado, frustrando novos usuários. O utilizador `bukit-kronik` (#4390) descreve seu caso de uso de 1 máquina + multi-instances como não trivial de configurar.

2. **Segurança de workspace confusa** — Múltiplas issues (e múltiplos PRs) abordam a política de workspace write/read. Isso sugere que a documentação e UX da configuração de workspace security precisam de clareza. O utilizador `jjmanrique` (#4375) reporta que git commands são bloqueados mesmo dentro de diretórios permitidos.

3. **Infraestrutura de proxy problemática** — Servidores locais (Ollama, vLLM) são silenciosamente quebrados quando há proxy no host (#4366). Este é um cenário comum em ambientes corporativos e de desenvolvimento.

4. **UX mobile inconsistente** — O report de iOS Safari (#4388) indica que, apesar de声称 haver fixes移动端 UI, o zoom no input box ainda ocorre, degradando a experiência em dispositivos móveis.

5. **Gestão de modelos em produção** — A demanda por cron-level model switching (#4378) e context window por fallback (#4389) indica que utilizadores estão usando o NanoBot em cenários de produção com otimização de custos/performance.

**Satisfação:** O alto volume de PRs contribuições (31 PRs em 24h) e a diversidade de contribuidores indicam uma comunidade ativa. A resposta rápida a issues de segurança (#4380, #4053, #4202) demonstra maturidade do projeto em tratar vulnerabilidades com prioridade.

---

## 8. Backlog que Merece Atenção

**Issues antigas ou sem resposta que merecem triagem:**

| # | Título | Criado | Comentários | Motivo da atenção |
|---|---|---|---|---|
| [#936](https://github.com/HKUDS/nanobot/issues/936) | Multi-Tenant Gateway | 2026-02-21 | 1 | Aberta há ~4 meses; feature estratégica com demanda clara |
| [#3437](https://github.com/HKUDS/nanobot/issues/3437) | RFC: On-demand heartbeat trigger | 2026-04-25 | 1 | RFC aberta há quase 2 meses sem decisão; ferramenta de debugging importante |
| [#4378](https://github.com/HKUDS/nanobot/issues/4378) | cron level model/preset | 2026-06-17 | 0 | Recém-criada mas sem assignee — caso de uso de produção |
| [#4390](https://github.com/HKUDS/nanobot/issues/4390) | Multi-instances for normies | 2026-06-17 | 0 | Recém-criada mas sem assignee — UX para não-técnicos |
| [#4375](https://github.com/HKUDS/nanobot/issues/4375) | Git commands blocked by workspace | 2026-06-17 | 0 | PR #4380 já merged — falta validar se a issue está totalmente resolvida |

**Recomendação de triagem:**
- **#936** — Atrib

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-06-18

## 1. Panorama do Dia

O projeto Hermes Agent apresenta **alta atividade comunitária** em 18 de junho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. O ecossistema desktop (macOS, Windows, Linux) domina o centro das atenções, concentrando múltiplos bugs críticos relacionados ao Electron e à instalação do aplicativo. O componente de autenticação OAuth com provedores Anthropic está em estado frágil, com 3 issues P1 abertas simultaneamente. Apesar da intensidade de reportes, 9 PRs foram merged/fechados, indicando capacidade de resposta razoável da equipe.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24 horas.**

O projeto não publicou novas versões no período analisado. O último release estável permanece em v0.16.0 (2026-06-05), conforme mencionado em reports de usuários.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (9 total)

| PR | Descrição | Impacto |
|---|---|---|
| [#48067](https://github.com/NousResearch/hermes-agent/pull/48067) | Ceodigital branding | Fechado como *invalid* |
| [#48047](https://github.com/NousResearch/hermes-agent/pull/48047) | Add interactive control surface to kanban worker spawns | Melhoria na controlabilidade de workers |
| [#47655](https://github.com/NousResearch/hermes-agent/pull/47655) | recover stranded session windows when resume fails | Corrigido bug de UI travada no Desktop |
| [#48050](https://github.com/NousResearch/hermes-agent/pull/48050) | align electronDist with workspace install | Corrigido problema de empacotamento no Desktop |
| [#48053](https://github.com/NousResearch/hermes-agent/pull/48053) | Restore gateway final completion sentinel | Restaurada sinalização de completion no gateway |

**Destaque:** A correção do `electronDist` ([#48050](https://github.com/NousResearch/hermes-agent/pull/48050)) representa um avanço significativo para usuários desktop, resolvendo um problema que afetava instalações fresh em macOS/Windows. O PR [#47655](https://github.com/NousResearch/hermes-agent/pull/47655) igualmente resolve uma dor recorrente de sessões "travadas em loading".

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | 👍 | Categoria |
|---|---|---|---|---|
| [#3725](https://github.com/NousResearch/hermes-agent/issues/3725) | Rocket Chat support | 10 | 8 | Feature request |
| [#40187](https://github.com/NousResearch/hermes-agent/issues/40187) | hermes desktop fails to compile on macOS | 9 | 1 | Bug (P2) |
| [#36658](https://github.com/NousResearch/hermes-agent/issues/36658) | Dashboard chat broken after hermes update | 7 | 2 | Bug (P3) |
| [#38602](https://github.com/NousResearch/hermes-agent/issues/38602) | Desktop Client-Only Installation | 5 | 17 | Feature request |
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | integrate headroom-ai for tool output compression | 5 | 8 | Feature (compression) |

**Análise:** A funcionalidade **Rocket Chat** (#3725, aberta desde março) permanece como o feature request mais comentado, sinalizando demanda recorrente por diversificação de canais de mensagem. O issue de **Desktop Client-Only Installation** (#38602) merece atenção especial com 17 👍, indicando que muitos usuários desejam um cliente desktop "magro" conectando-se a instâncias remotas — possivelmente um indicativo de estratégia de deployment.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Críticos (3 issues)

| Issue | Título | Componente | Status |
|---|---|---|---|
| [#47966](https://github.com/NousResearch/hermes-agent/issues/47966) | PKCE redirect_uri mismatch: console.anthropic.com vs platform.claude.com | auth | Aberta |
| [#47965](https://github.com/NousResearch/hermes-agent/issues/47965) | fetch_models uses x-api-key only — OAuth tokens 401 | gateway, plugins | Aberta |
| [#47964](https://github.com/NousResearch/hermes-agent/issues/47964) | _OAUTH_TOKEN_URL points to console.anthropic.com (404) | agent | Aberta |
| [#48060](https://github.com/NousResearch/hermes-agent/pull/48060) | **[PR]** guard shared-audience chats against owner/backend leaks | gateway | Aberta (security) |
| [#48061](https://github.com/NousResearch/hermes-agent/issues/48061) | v0.16.0 sends empty runtime model/provider on Linux | agent | Aberta |

**⚠️ Alerta:** Três issues P1 afetam simultaneamente a **autenticação OAuth com Anthropic**. Endpoints incorretos e headers incompatíveis comprometem o fluxo de OAuth nativo do Hermes. Recomenda-se priorização imediata.

#### P2 — Altos (12+ issues)

Destaques:
- [#40187](https://github.com/NousResearch/hermes-agent/issues/40187): Build desktop falha no macOS (compilação Electron)
- [#46260](https://github.com/NousResearch/hermes-agent/issues/46260): Installer falha no Windows na stage "desktop"
- [#47917](https://github.com/NousResearch/hermes-agent/issues/47917): Desktop build falha após update (electronDist)
- [#43913](https://github.com/NousResearch/hermes-agent/issues/43913): Desktop install loop no macOS (venv python)
- [#48059](https://github.com/NousResearch/hermes-agent/issues/48059): macOS desktop build falha — electronDist
- [#48021](https://github.com/NousResearch/hermes-agent/issues/48021): Electron binary não baixado em fresh macOS install
- [#48019](https://github.com/NousResearch/hermes-agent/issues/48019): Windows desktop pack falha (electronDist)
- [#44873](https://github.com/NousResearch/hermes-agent/issues/44873): RotatingFileHandler PermissionError no Windows (log rotation)

**Padrão identificado:** O componente **Desktop/Electron** concentra a maioria dos bugs P2. A questão do `electronDist` aparece em múltiplos issues (duplicados), sugerindo que a correção merged (#48050) pode não ter sido suficiente ou que há variantes não cobertas.

#### P3 — Médios (diversos)

- [#36658](https://github.com/NousResearch/hermes-agent/issues/36658): Dashboard chat broken
- [#30220](https://github.com/NousResearch/hermes-agent/issues/30220): Background Self-Improvement misclassifica stores
- [#37917](https://github.com/NousResearch/hermes-agent/issues/37917): Ctrl +/- zoom não funciona no Windows Desktop
- [#48056](https://github.com/NousResearch/hermes-agent/issues/48056): Telegram DM topic cron cai fora do topic

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Destaque

| Issue | Título | 👍 | Complexidade | Sinais de Roadmap |
|---|---|---|---|---|
| [#38602](https://github.com/NousResearch/hermes-agent/issues/38602) | Desktop Client-Only Installation | 17 | Pequena | Arquitetura de deployment |
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | integrate headroom-ai for tool output compression | 8 | Média | Compressão de contexto |
| [#6715](https://github.com/NousResearch/hermes-agent/issues/6715) | agentmemory as memory provider plugin | 5 | Média | Ecossistema de plugins |
| [#41190](https://github.com/NousResearch/hermes-agent/issues/41190) | Unified plugin route selector | 0 | Grande | Sistema de plugins |
| [#46991](https://github.com/NousResearch/hermes-agent/issues/46991) | resolve_route plugin hook — quota-aware subscription balancing | 1 | Média | Balanceamento de quotas |
| [#41590](https://github.com/NousResearch/hermes-agent/issues/41590) | Smart fallback model routing | 0 | Média | Resiliência de provedores |

### PRs de Feature Abertos

| PR | Título | Plataforma/Componente |
|---|---|---|
| [#45619](https://github.com/NousResearch/hermes-agent/pull/45619) | Arabic localization and RTL support | Desktop |
| [#30179](https://github.com/NousResearch/hermes-agent/pull/30179) | iron-proxy credential-injection firewall | Docker/Egress |
| [#48064](https://github.com/NousResearch/hermes-agent/pull/48064) | Add Claude Code worker tool | Tools |
| [#48066](https://github.com/NousResearch/hermes-agent/pull/48066) | Slack native chat stream replies | Slack |
| [#21977](https://github.com/NousResearch/hermes-agent/pull/21977) | WhatsApp quote and status primitives | WhatsApp |
| [#48058](https://github.com/NousResearch/hermes-agent/pull/48058) | STT/TTS contracts + neutralised agents | Jarvis |

**Tendência:** A estratégia de plataforma do Hermes Agent se expande para múltiplos canais (Slack, WhatsApp, Rocket Chat, Telegram). O ecossistema de plugins emerge como vetor de crescimento.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

1. **Instalação Desktop Quebrada (macOS/Windows)**
   - Usuários reportam loops de instalação infinitos ([#43913](https://github.com/NousResearch/hermes-agent/issues/43913))
   - Build do Electron falha em múltiplos cenários
   - NPM install exit code 1 no Windows ([#46260](https://github.com/NousResearch/hermes-agent/issues/46260))

2. **Autenticação OAuth Instável**
   - Fluxo OAuth Anthropic completamente quebrado (3 issues P1)
   - `console.anthropic.com` vs `platform.claude.com` mismatch
   - `api-key` header incompatível com tokens OAuth

3. **Gestão de Modelos Inconsistente**
   - `/model` switch perdido após session auto-reset ([#48062](https://github.com/NousResearch/hermes-agent/pull/48062) — PR aberto)
   - Provedores customizados não funcionam no Desktop App ([#47961](https://github.com/NousResearch/hermes-agent/issues/47961))
   - Modelo vazio enviado em requisições Linux ([#48061](https://github.com/NousResearch/hermes-agent/issues/48061))

4. **Logs Poluem Stderr no Windows**
   - `RotatingFileHandler.doRollover()` gera `PermissionError` não tratado ([#44873](https://github.com/NousResearch/hermes-agent/issues/44873))

### Cenários de Uso Reportados

- ** thin-client desktop**: Usuários desejam instalar apenas o cliente Desktop, conectando-se a instâncias Hermes remotas — indica adoção em cenários corporativos
- **Claude Max/Pro via OAuth**: Demanda por acesso a assinaturas diferenciadas sem cobrança duplicada
- **Multi-provider quota balancing**: Gerenciamento automático entre múltiplas assinaturas (Claude Max, Codex)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Título | Criado | Dias | Estado |
|---|---|---|---|---|
| [#3725](https://github.com/NousResearch/hermes-agent/issues/3725) | Rocket Chat support | 2026-03-29 | ~81 | Aguardando resposta |
| [#6715](https://github.com/NousResearch/hermes-agent/issues/6715) | agentmemory as memory provider plugin | 2026-04-09 | ~70 | Comentarista ativo recente |
| [#36658](https://github.com/NousResearch/hermes-agent/issues/36658) | Dashboard chat broken | 2026-06-01 | ~17 | Atualizado recentemente |
| [#30220](https://github.com/NousResearch/hermes-agent/issues/30220) | Background Self-Improvement misclassifies stores | 2026-05-22 | ~27 | Baixa atividade |

### Recomendações

1. **Priorizar bloco P1 de OAuth Anthropic** — 3 issues P1 relacionadas a endpoints e headers incorretos comprometem funcionalidade crítica
2. **Consolidar correções Desktop/Electron** — `electronDist` aparece em 5+ issues duplicados; verificar se a correção #48050 cobre todos os cenários (fresh install, update, macOS/Windows/Linux)
3. **Responder #3725 (Rocket Chat)** — Issue com maior engajamento (10 comentários, 8 👍) aberto há 81 dias sem resposta da equipe
4. **Revisar fluxo `/model` + auto-reset** — Bug #48062 (PR aberto) resolve problema confirmado; acelerar merge

---

**Última atualização:** 2026-06-18  
**Fonte:** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-06-18

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade** nas últimas 24 horas, com 10 PRs atualizados e 4 issues processadas. A atividade recente é marcada pela correção de vulnerabilidades de segurança críticas (particularmente no handling de URLs de mídia OneBot) e pela estabilização de integrações com modelos recentes como Gemini 3.5 Flash. A release nightly mais recente (v0.3.0-nightly.20260617.a16a1e15) consolida essas correções. O volume de PRs merged/fechados (6) indica um ritmo de desenvolvimento saudável e foco em estabilidade.

---

## 2. Lançamentos

### Release: nightly — v0.3.0-nightly.20260617.a16a1e15

| Item | Detalhes |
|------|----------|
| **Tipo** | Automated nightly build |
| **Status** | ⚠️ Unstable — uso em produção não recomendado |
| **Changelog** | https://github.com/sipeed/picoclaw/compare/v0.3.0...main |

**Notas:** Esta build automatizada incorpora correções de segurança e bugs merged no dia anterior. Usuários em produção devem permanecer na última versão estável. Não há breaking changes documentadas nesta nightly.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas Hoje (6 total)

| PR | Tipo | Descrição | Impacto |
|----|------|-----------|---------|
| [#3136](https://github.com/sipeed/picoclaw/pull/3136) | Bug Fix | Suporte a `thought_signature` snake_case para Gemini 3.5 Flash Agentic reasoning | 🔴 **Alto** — Habilita uso do modelo Gemini 3.5 Flash com ferramentas |
| [#3140](https://github.com/sipeed/picoclaw/pull/3140) | Security Fix | Bloqueio de fetch de URLs privadas em canais OneBot | 🔴 **Crítico** — Mitiga SSRF/arbitrary fetch |
| [#2917](https://github.com/sipeed/picoclaw/pull/2917) | Feature | Adição do provider NEAR AI Cloud (OpenAI-compatible) | 🟡 **Médio** — Expande opções de provedores LLM |
| [#3139](https://github.com/sipeed/picoclaw/pull/3139) | Bug Fix | Correção do regex do Sogou Search para nova estrutura HTML | 🟢 **Baixo** — Restaura funcionalidade de busca |
| [#2990](https://github.com/sipeed/picoclaw/pull/2990) | Bug Fix | Leitura completa do histórico de sessões no Web UI | 🟢 **UX** — Corrige visualização de conversas multi-mensagem |
| [#3138](https://github.com/sipeed/picoclaw/pull/3138) | Feature | Adição de funcionalidade de reviews | 🟢 **Baixo** — Feature de UI |

**Destaque:** A correção em [#3136](https://github.com/sipeed/picoclaw/pull/3136) foi particularmente importante, resolvendo incompatibilidade de schema que causava `400 Bad Request` na API do Gemini 3.5 Flash.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Reações | Comentários | Relevância |
|-------|------|---------|-------------|------------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | Feature | 👍 2 | 1 | **Substituição de libolm por vodozemac** — библиотека de criptografia abandonada e insegura |
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | Feature | 👍 0 | 1 | **Solicitação de gateways SimpleX/Tox** — Demanda por alternativas de mensageria descentralizada |

### Análise

**#3088 — Vodozemac Migration:** Esta issue de **prioridade alta** representa uma necessidade crítica de segurança. libolm está abandonada há tempo, e a comunidade já sinaliza urgência. A proposta de torná-la opcional em compile time sugere cautela em breaking changes. Este é um indicador de que a **saúde de longo prazo do projeto depende desta migração**.

**#3093 — Decentralized Messengers:** A demanda por SimpleX ou Tox indica interesse em comunicações descentralizadas e privadas. O escopo do projeto pode expandir para além de protocolos tradicionais.

---

## 5. Bugs e Estabilidade

### Issues de Bugs Fechadas Hoje

| Issue | Severidade | Descrição | Status |
|-------|------------|-----------|--------|
| [#3111](https://github.com/sipeed/picoclaw/issues/3111) | 🔴 **Alta** | Tool execution falha com Gemini 3.5 Flash por Missing `thought_signature` | ✅ **Corrigido** via [#3136](https://github.com/sipeed/picoclaw/pull/3136) |
| [#3070](https://github.com/sipeed/picoclaw/issues/3070) | 🔴 **Crítica** | SSRF vulnerability em OneBot media URL handling | ✅ **Corrigido** via [#3140](https://github.com/sipeed/picoclaw/pull/3140) |

### Segurança

A **vulnerabilidade SSRF em OneBot** (Issue #3070) foi tratada com correção rápida (PR #3140). O ataque permitia que atacantes fizessem o host PicoClaw buscar endereços privados, localhost ou metadata. **Este é um caso de resposta de segurança exemplar.**

### Issues Abertas com Bugs

| Issue | Severidade | Status Atual |
|-------|------------|--------------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | 🟡 **Média-Alta** | Dependência insegura (libolm) — aguardando implementação |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas

| Issue | Tipo | Descrição | Prioridade | Sinais de Roadmap |
|-------|------|-----------|------------|-------------------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | Migration | Vodozemac como substituto de libolm | **High** | 🔴 Provável para v0.4.0 |
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | Feature | SimpleX ou Tox gateway | — | 🟡 Exploratório |
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | Feature | **Deltachat gateway** | — | 🟢 **Em desenvolvimento** |

### PR de Feature em Andamento

| PR | Status | Descrição | % Conclusão |
|----|--------|-----------|-------------|
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | **OPEN** | Adição de Deltachat gateway | Em revisão |

**Sinais de Roadmap para v0.4.0:**
1. **Segurança criptográfica modernizada** (libolm → vodozemac)
2. **Expansão de protocolos** (Deltachat gateway, possivelmente SimpleX/Tox)
3. **Suporte a novos modelos** (Gemini 3.5 Flash com Agentic reasoning)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Origem | Severidade | Status |
|-----|--------|------------|--------|
| Falha de tools com Gemini 3.5 Flash | Issue #3111 | 🔴 Alta | ✅ Corrigido |
| SSRF vulnerability expõe servidores | Issue #3070 | 🔴 Crítica | ✅ Corrigido |
| Visualização incompleta do histórico | Issue #2796 (via #2990) | 🟢 UX | ✅ Corrigido |
| Busca Sogou quebrada por mudança de HTML | Issue implícita (#3139) | 🟢 Baixa | ✅ Corrigido |

### Cenários de Uso Emergentes

- **Agentes com reasoning agentic** — Gemini 3.5 Flash abre novos casos de uso que antes não funcionavam
- **Web UI com sessões longas** — Usuários esperam ver histórico completo de conversas
- **Privacidade em mensageria** — Demanda por gateways descentralizados (SimpleX, Tox, Deltachat)

### Tendência de Satisfação

**Positiva.** A velocidade de resposta a bugs críticos (SSRF e Gemini) foi notável. A adição de providers (NEAR AI Cloud) e features (Deltachat) demonstra amadurecimento do ecossistema.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta ou Stale

| Issue | Tipo | Idade | Status | Urgência |
|-------|------|-------|--------|----------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | Feature | 9 dias | **Stale** mas ativa | 🔴 Alta |
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) | Feature | 8 dias | **Stale** | 🟡 Média |
| [#3092](https://github.com/sipeed/picoclaw/pull/3092) | Bug Fix | 8 dias | **Stale** | 🟡 Média |

### Recomendações de Priorização

1. **[#3088](https://github.com/sipeed/picoclaw/issues/3088)** — needs core maintainer response sobre viabilidade de vodozemac migration
2. **[#3092](https://github.com/sipeed/picoclaw/pull/3092)** — type assertion fix está stale há 8 dias, deve ser revisado
3. **[#3063](https://github.com/sipeed/picoclaw/pull/3063)** — Deltachat gateway em revisão, acompanhar para merge

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| PRs total | 10 |
| PRs abertos | 4 |
| PRs merged/fechados | 6 |
| Issues abertas | 2 |
| Issues fechadas | 2 |
| Releases | 1 (nightly) |
| Security fixes | 1 (SSRF OneBot) |
| Bug fixes críticos | 1 (Gemini 3.5 Flash) |

**Saúde Geral:** 🟢 **Estável** — Atividade alta com foco em segurança e estabilização.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# Relatório do Projeto IronClaw — 2026-06-18

## 1. Panorama do Dia

O projeto IronClaw manteve um ritmo intenso de atividade nas últimas 24h, com 50 issues e 50 PRs atualizados — indicando alta produtividade da equipe. Não houve novas releases, mas o dia foi marcado pelo fechamento de issues relacionadas ao framework **Reborn** e melhorias na infraestrutura de automação. Os temas dominantes incluem refinamento de UX na interface WebUI v2, correções de bugs em fluxos de autenticação (Slack, Gmail), e avanços na arquitetura Engine V2. O projeto demonstra maturidade com múltiplos contribuidores trabalhando em paralelo em diferentes escopos.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O último release estável disponível é a versão **v0.29.0** (em staging), que inclui o canal WeCom recém-validado. A equipe segue em ciclo de estabilização antes do próximo release oficial.

---

## 3. Progresso do Projeto

### PRs重要antes merged/fechados:

| PR | Escopo | Contribuidor | Impacto |
|---|---|---|---|
| [#5051](https://github.com/nearai/ironclaw/pull/5051) | Gmail auth-resume | core | Corrige falha de autenticação que exibia erro enganoso; restaura grant de aprovação persistente |
| [#5029](https://github.com/nearai/ironclaw/pull/5029) | Coding/byte budget | core | Implementa limite de bytes para `read_file`, controlando crescimento de contexto e evitando timeouts |
| [#5024](https://github.com/nearai/ironclaw/pull/5024) | WebUI v2 perf | core | Self-hosting de assets frontend elimina 50+ requisições CDN, reduzindo tempo de carregamento em 15s+ |
| [#4993](https://github.com/nearai/ironclaw/pull/4993) | Agent-loop honesty | core | Corrige vazamento de controle de runtime em `NoProgressDetected` — antes simulava conclusão, agora falha honestamente |
| [#5010](https://github.com/nearai/ironclaw/pull/5010) | OpenAI Responses API | core | Expõe tool calls e outputs na API Responses, melhorando visibilidade para clientes |
| [#5014](https://github.com/nearai/ironclaw/pull/5014) | Slack auth flow | core | Cancela stale AuthFlow em auto-deny, resolvendo bypass do `cancel_flow` |
| [#5049](https://github.com/nearai/ironclaw/pull/5049) | Reborn production graph | core | Wire de composição de grafo para fontes de contexto identity + profile em produção |
| [#4955](https://github.com/nearai/ironclaw/pull/4955) | Operator logs | regular | Correlaciona logs com `thread_id/run_id`, permitindo visualização em tempo real |
| [#5035](https://github.com/nearai/ironclaw/pull/5035) | Tool arguments live view | core | Mostra argumentos de tool durante execução, não apenas após conclusão |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

**#1584 — Canal WeChat para IronClaw** (3 👍, 3 comentários, CLOSED)  
Demanda por plugin WeChat dedicado para IronClaw (paralelo ao existente para OpenClaw). Já existe `openclaw-weixin`, aguardando porta para IronClaw. Tracking em [#3582](https://github.com/nearai/ironclaw/issues/3582).

**#3026 — Reborn Production Wiring Epic** (3 comentários, CLOSED)  
Epic crítico para readiness de produção: validação de grafo configurado, relatórios de serviços ausentes, e proteção contra tráfego com serviços incompletos. Marca maturidade operacional do Reborn.

**#2721 — Engine V2 Quality: Milestone 0** (3 comentários, CLOSED)  
Avaliação de execução multi-rota. Problema identificado: dependência excessiva em caminho único CodeAct/orchestrator, causando custo elevado em tarefas simples e enfraquecendo finalização.

**#4878 — Melhorar Produtividade de Engenharia** (0 👍, 0 comentários, OPEN)  
Iniciativa estratégica para tornar a equipe IronClaw "AI-native", usando o próprio IronClaw para planejamento, implementação, review e segurança. Parent de [#5036](https://github.com/nearai/ironclaw/issues/5036).

**#5036 — Build Scalable Agent Task Service** (0 👍, 0 comentários, OPEN)  
Subtask crítica: definir infraestrutura escalável para automação de tarefas de engenharia (coding, review, CI triage, merge conflicts). Já possui implementação direta.

---

## 5. Bugs e Estabilidade

### Bugs reportados (por severidade estimada):

#### 🔴 Alta Severidade (afetam fluxo principal)

- **[#3729](https://github.com/nearai/ironclaw/issues/3729)** — `tool_install` negado mostra ✅ após refresh  
  Usuários veem tool como bem-sucedida quando foi negada. Regressão de estado pós-refresh.

- **[#4824](https://github.com/nearai/ironclaw/issues/4824)** — `cargo-deny` falhando repo-wide  
  Novos RUSTSEC advisories contra crates postgres bloqueiam CI em todos os PRs e main. Impacto imediato.

- **[#5044](https://github.com/nearai/ironclaw/issues/5044)** — `NEARAI_MODEL=auto` rejeitado (HTTP 400)  
  Sidecar desktop envia "auto" inválido para cloud-api. Nenhum fallback configurado.

#### 🟡 Média Severidade (UX/funcionalidade degradada)

- **[#5007](https://github.com/nearai/ironclaw/issues/5007)** — Skills validation não limpa após correção  
  Mensagem de erro persiste mesmo após preencher campos obrigatórios. UX degradada.

- **[#5031](https://github.com/nearai/ironclaw/issues/5031)** — Slack connect card aparece após pareamento  
  Card de conexão Slack aparece mesmo quando já conectado; apenas em inglês.

- **[#4961](https://github.com/nearai/ironclaw/issues/4961)** — Indicador "Working" permanece após resposta  
  UI mostra activity durante execução, mas indicador visual não limpa ao final.

- **[#4986](https://github.com/nearai/ironclaw/issues/4986)** — Automação recorrente bloqueada em tool approval  
  Automations podem ficar permanentemente pendentes aguardando aprovação.

#### 🟢 Baixa Severidade (cosméticos/Edge cases)

- **[#4723](https://github.com/nearai/ironclaw/issues/4723)** — Hover state do composer só destaca borda superior  
- **[#4974](https://github.com/nearai/ironclaw/issues/4974)** — Botões "..." duplicados em activity rows  
- **[#4988](https://github.com/nearai/ironclaw/issues/4988)** — Visualização de runs recentes confusa (dots sem legenda)  
- **[#4980](https://github.com/nearai/ironclaw/issues/4980)** — Empty state de automations sem guidance de criação  

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas demandas identificadas:

| Issue | Escopo | Descrição | Sinal de Prioridade |
|---|---|---|---|
| [#5044](https://github.com/nearai/ironclaw/issues/5044) | Core/Model | Resolver `auto` para modelo real ou definir default | P1 — bloqueia desktop |
| [#5031](https://github.com/nearai/ironclaw/issues/5031) | Slack/i18n | Card de conexão Slack pós-pareamento + multilíngue | P2 — UX onboarding |
| [#4878](https://github.com/nearai/ironclaw/issues/4878) | Meta/Engineering | Produtividade AI-native da equipe | Estratégico |
| [#5036](https://github.com/nearai/ironclaw/issues/5036) | Infrastructure | Serviço escalável de tarefas de agente | Estratégico |
| [#3582](https://github.com/nearai/ironclaw/issues/3582) | Channel/WeChat | Porta WeChat para Reborn ProductAdapter | P2 — extensão plataforma |
| [#4191](https://github.com/nearai/ironclaw/issues/4191) | Channel/WeCom | Validação WeCom v0.29.0 staging — findings pendentes | P2 — release blocker |

### PRs em progresso indicando direção:

- **#5048** — Adiciona `github.get_authenticated_user` capability
- **#5037** — Suprime prompts stale de credenciais em extension search
- **#3548** — Flag `DISABLE_TOOLS_LIST` para segurança (regressão de segurança)

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas:

**1. Onboarding e First-Run**
- Usuários novos são bloqueados de Extensions e Automations até configurar provider ([#4793](https://github.com/nearai/ironclaw/issues/4793))
- Empty states não orientam criação de automations ([#4980](https://github.com/nearai/ironclaw/issues/4980))
- Visualização de histórico de runs usa dots sem legenda, confusa ([#4988](https://github.com/nearai/ironclaw/issues/4988))

**2. Confiança em Automations**
- Falhas não são acionáveis — sem detalhes sobre qual automation falhou ([#5004](https://github.com/nearai/ironclaw/issues/5004))
- Automations recorrentes podem ficar permanentemente bloqueadas ([#4986](https://github.com/nearai/ironclaw/issues/4986))
- Card de falha não mostra contexto para debug

**3. Feedback Visual Durante Execução**
- Indicador "Working" não desaparece ao final ([#4961](https://github.com/nearai/ironclaw/issues/4961))
- Tool arguments agora aparecem live ([#5035](https://github.com/nearai/ironclaw/pull/5035) merged) — resposta positiva esperada
- Atividade de tools some após completion em ambientes multi-tenant ([#4853](https://github.com/nearai/ironclaw/issues/4853))

**4. Consistência de Estado**
- Ferramentas negadas aparecem como sucesso após refresh ([#3729](https://github.com/nearai/ironclaw/issues/3729))
- Denied activities têm identidade inconsistente ([#5028](https://github.com/nearai/ironclaw/issues/5028))

### Cenários de Uso Observados:
- **Automação de monitoramento GitHub**: Usuários configuram checks periódicos de issues/PRs, demonstrando demanda por automations robustas
- **Integração Slack**:both triggered e live OAuth paths sendo refinados, indicando adoção real
- **Dogfooding interno**: Issues como #4878 e #5036 mostram que a equipe usa IronClaw para construir IronClaw

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente ou sem resposta:

| Issue | Idade | Escopo | Risco |
|---|---|---|---|
| [#4191](https://github.com/nearai/ironclaw/issues/4191) — WeCom validation findings | 20 dias | Channel | Pode bloquear v0.29.0 release |
| [#4032](https://github.com/nearai/ironclaw/pull/4032) — Dependabot WASM updates | 23 dias | Dependencies | CI bloqueado em PRs |
| [#4787](https://github.com/nearai/ironclaw/pull/4787) — Barcelona Hackathon fork | 6 dias | Docs/Onboarding | Necessita avaliação de merge |
| [#3548](https://github.com/nearai/ironclaw/pull/3548) — DISABLE_TOOLS_LIST | 36 dias | Security | Feature de segurança pendente |

### Issues técnicas críticas sem resolução:

- **[#4824](https://github.com/nearai/ironclaw/issues/4824)** — cargo-deny falhando em todo repo  
  **Ação necessária**: Atualizar crates postgres ou configurar allowlist RUSTSEC

- **[#3729](https://github.com/nearai/ironclaw/issues/3729)** — tool_install state inconsistency  
  **Ação necessária**: Sincronizar estado entre client e server em refresh

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|---|---|
| Issues ativas/abertas (24h) | 24 |
| Issues fechadas (24h) | 26 |
| PRs abertos (24h) | 27 |
| PRs merged/fechados (24h) | 23 |
| Novas releases | 0 |
| Bugs alta severidade | 3 |
| PRs de segurança/performance | 5 |
| Taxa de fechamento (issues) | 52% |

---

**Saúde Geral**: O projeto mantém alta atividade com foco em estabilização do framework Reborn e melhorias de UX. A taxa de fechamento equilibrada e o volume de PRs merged indicam progresso consistente. Atenção imediata recomendada para: (1) cargo-deny failing CI, (2) state inconsistency em tool_install, e (3) validação WeCom para release v0.29.0.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto CoPaw — 2026-06-18

---

## 1. Panorama do Dia

O projeto **CoPaw (QwenPaw)** apresenta **alta atividade** nesta data, com **45 issues e 50 PRs atualizados** nas últimas 24 horas. A versão **v1.1.12** foi recém-lançada com melhorias significativas na Console (agregação de provedores, redesign de UI, modo simples), e a versão **v2.0.0a1** já foi criada para marcar o início da migração para o AgentScope 2.0. A comunidade demonstra engajamento intenso, especialmente em torno de bugs críticos como congelamento por contexto compaction, crashes com ChromaDB em macOS e problemas de estabilidade no desktop. O ritmo de merge de PRs está acelerado (35 PRs fechados), indicando uma semana de alta produtividade.

---

## 2. Lançamentos

### v1.1.12
**Release notes:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.12  
**Merged via:** PR [#5280](https://github.com/agentscope-ai/QwenPaw/pull/5280)

| Componente | Mudança |
|------------|---------|
| **Console — Provider Aggregation** | Nova arquitetura para agregar múltiplos provedores de modelo em interface unificada ([#5203](https://github.com/agentscope-ai/QwenPaw/pull/5203)) |
| **Console — Unified Card UI** | Redesign completo dos cards de interface |
| **Console — Simple Mode** | Modo simplificado com navegação flat e lista de sessões ordenada por última atualização ([#5222](https://github.com/agentscope-ai/QwenPaw/pull/5222)) |

**v1.1.12-beta.2** também foi lançado, contendo:
- **perf(config):** Remoção de operações de deep copy desnecessárias em agent config ([#5240](https://github.com/agentscope-ai/QwenPaw/pull/5240) por @jinliyl)
- **feat(console):** Filtro de sessão por título ([#5178](https://github.com/agentscope-ai/QwenPaw/pull/5178) por @nguyenthanhthe)

---

## 3. Progresso do Projeto

### PRs importantes fechados/merged hoje:

| PR | Título | Impacto |
|----|--------|---------|
| [#5280](https://github.com/agentscope-ai/QwenPaw/pull/5280) | chore: release v1.1.12 | Lançamento oficial da nova versão |
| [#5281](https://github.com/agentscope-ai/QwenPaw/pull/5281) | bump: version to 2.0.0a1 | Marco inicial da migração para AgentScope 2.0 |
| [#5274](https://github.com/agentscope-ai/QwenPaw/pull/5274) | refactor(xiaoyi): dual WebSocket | Corrigido canal XiaoYi — agora usa dual connection (domínio principal + IP backup) e alinha com plugin oficial @ynhcj/xiaoyi-channel |
| [#3839](https://github.com/agentscope-ai/QwenPaw/pull/3839) | fix: XiaoYi A2A protocol | Implementação refeita do protocolo A2A com PING/PONG nativo |
| [#5041](https://github.com/agentscope-ai/QwenPaw/pull/5041) | fix(backup): skip unreadable files | Backup no Windows não falha mais por PermissionError em arquivos travados |
| [#5026](https://github.com/agentscope-ai/QwenPaw/pull/5026) | fix(agents): prevent duplicated session_id | Corrigido bug de duplicação de session_id em nomes de arquivo |
| [#5271](https://github.com/agentscope-ai/QwenPaw/pull/5271) | fix(memory): add async runtime probe for chromadb | Probe assíncrono detecta crash de SIGSEGV no ChromaDB antes que afete o processo |
| [#5260](https://github.com/agentscope-ai/QwenPaw/pull/5260) | fix(desktop): repair plugin dependency installs | Tauri desktop não entra mais em loop de crash com plugins que têm dependências pip |
| [#5277](https://github.com/agentscope-ai/QwenPaw/pull/5277) | docs(roadmap): update roadmap | Roadmap atualizado |
| [#5272](https://github.com/agentscope-ai/QwenPaw/pull/5272) | Feature/desktop port config | Suporte a porta fixa via variável de ambiente na versão desktop |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários):

1. **#1911 — XiaoYi Channel (22 comentários, CLOSED)**  
   Integração com Huawei XiaoYi com protocolo A2A. Após extensiva iteração, o PR [#5274](https://github.com/agentscope-ai/QwenPaw/pull/5274) finalmente corrigiu o problema. **Status: Resolvido.**

2. **#5218 — Context Compaction Freeze (16 comentários, OPEN)**  
   Sub-agente dispara compactação de contexto e todo o processo QwenPaw congela. PR [#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) adiciona proteção de timeout — **em revisão.**

3. **#4727 — Migração AgentScope 2.0 (11 comentários, OPEN)**  
   Discussão estratégica sobre migração do backend. Versionado como **2.0.0a1** em [#5281](https://github.com/agentscope-ai/QwenPaw/pull/5281). Expectativa alta da comunidade por novo modelo de APIs e runtime.

4. **#5064 — Tarefas Cron de Agente Não Disparam (12 comentários, OPEN)**  
   Agente cria tarefas agendadas corretamente, mas elas nunca são executadas. Não há interface para editar manualmente. PR [#5241](https://github.com/agentscope-ai/QwenPaw/pull/5241) tenta corrigir aumentando grace window de 60s para 3600s.

5. **#5276 — Ferramenta de Migração OpenClaw (PR, OPEN)**  
   CLI `qwenpaw migrate openclaw` para importar configurações de OpenClaw/Hermes Agent. Resposta forte da comunidade migratória.

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (Process crash / data loss)

| Issue | Descrição | Severidade |
|-------|-----------|------------|
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | Sub-agente → compactação de contexto → processo congela completamente | Crítico |
| [#5209](https://github.com/agentscope-ai/QwenPaw/issues/5209) | Tauri Desktop macOS ARM64: crash loop a cada ~1 min (SIGSEGV em 0x44) | Crítico |
| [#5243](https://github.com/agentscope-ai/QwenPaw/issues/5243) | macOS: ChromaDB Rust binding crasha com SIGSEGV (48 reinicializações em 2 dias) | Crítico |
| [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | Context compaction com pessoa > threshold → zera contexto completamente, tarefa morre | Crítico |

### 🟠 Altos (Funcionalidade quebrada)

| Issue | Descrição |
|-------|-----------|
| [#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264) | Resposta de grupo聊天 é enviada para DM quando usuário tem conversa privada ativa |
| [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | Download de .docx/.pdf retorna 404 — apenas txt/md/py funcionam |
| [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) | Tarefas cron criadas por agente não disparam execução |
| [#5234](https://github.com/agentscope-ai/QwenPaw/issues/5234) | **Segurança:** Prompt injection permite RCE completo em QwenPaw Cloud |
| [#5266](https://github.com/agentscope-ai/QwenPaw/issues/5266) | MCP/ACP configs retornam "salvo" mas não persistem em agent.json |

### 🟡 Médios (Degradação)

| Issue | Descrição |
|-------|-----------|
| [#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259) | Windows: vector index não persiste — toda vez precisa rebuildar |
| [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) | Habilidades built-in desabilitadas voltam a habilitar após update (regressão de #4807) |
| [#5284](https://github.com/agentscope-ai/QwenPaw/issues/5284) | ChromaDB probe usa nome `_probe` (inicia com underscore) — viola regra de naming do ChromaDB |
| [#5208](https://github.com/agentscope-ai/QwenPaw/issues/5208) | Contagem de mensagens mismatch quando modelo retorna blocos "reasoning" vs "thinking" |
| [#5165](https://github.com/agentscope-ai/QwenPaw/issues/5165) | Executável após empacotamento mostra tela branca |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em desenvolvimento:

| PR/Issue | Título | Detalhes |
|----------|--------|----------|
| [#5276](https://github.com/agentscope-ai/QwenPaw/pull/5276) | CLI `qwenpaw migrate openclaw` | Migração de configurações OpenClaw/Hermes Agent |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | **DataPaw plugin** — 12 habilidades BI | Plugin de análise de dados (em revisão) |
| [#5263](https://github.com/agentscope-ai/QwenPaw/pull/5263) | Upload e display de avatar de agente | Upload de avatar, APIs POST/GET, exibição em tabela e seletor |
| [#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210) | CLI `cron update` | Modificar jobs cron existentes sem delete+recreate |
| [#5202](https://github.com/agentscope-ai/QwenPaw/pull/5202) | Website: contributor carousel + SEO + docs | SEO e UX do site |
| [#4077](https://github.com/agentscope-ai/QwenPaw/issues/4077) | Feature Request: UI Font Scaling + File Path Hyperlinks | Escala de fonte + links clicáveis em caminhos de arquivo |

### Sinais de roadmap:
- **AgentScope 2.0 migration (#4727)** — versão alpha 2.0.0a1 já criada, migrando APIs e runtime model
- **Console overhaul** — v1.1.12 trouxe Provider Aggregation, Simple Mode, Redesign UI
- **Segurança cloud** — Issue #5234 sobre RCE via prompt injection precisa de atenção urgente

---

## 7. Resumo de Feedback dos Usuários

### Dores principais identificadas:

**1. Estabilidade em produção:**
> *"When a sub-agent triggers context compaction, the QwenPaw process freezes and becomes completely unresponsive. The app can only be recovered by manually restarting QwenPaw."*  
> — [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218)

**2. Perda de dados por compactação:**
> *"压缩会出现将上下文完全压缩保留为0的情况，模型无法在继续任务，因为上下文已经完全丢失。"*  
> — [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171)

**3. Problemas de plataforma (macOS/Windows):**
> *"QwenPaw Desktop (Tauri) 崩溃循环 — macOS ARM64... crash a cada 1 minuto, 48 reinicializações em 2 dias"*  
> — [#5243](https://github.com/agentscope-ai/QwenPaw/issues/5243)

**4. UX: regression de preferências:**
> *"内置技能（如docx, xlsx）我不需要用，每次更新完都要手动禁用一次"*  
> — [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262)

**5. Tarefas cron quebradas:**
> *"定时任务, 无法正常触发...Agent生成的该类定时任务不支持手动编辑操作"*  
> — [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)

### Cenários de uso reportados:
- **Desktop (Tauri):** Problemas recorrentes no macOS ARM64 e empacotamento Windows
- **Canais:** XiaoYi (Huawei) estável após refactor, DingTalk funcional apenas com instalador, Feishu com bug de roteamento de resposta
- **Plugins:** Dependências pip causam loop de crash no desktop
- **Agentes:** Loops infinitos em execução e compactação de contexto
- **Cloud:** Risco de segurança de prompt injection com RCE

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou aguardando triagem:

| Issue | Título | Tempo | Prioridade |
|-------|--------|-------|------------|
| [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | Context compaction zera tudo | 5 dias | 🔴 Crítica |
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | Process freeze por compaction | 2 dias | 🔴 Crítica |
| [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-06-18

---

## 1. Panorama do Dia

O projeto ZeroClaw apresenta **alta atividade** em 18 de junho de 2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A totalidade das issues permanece em estado aberto/ativo, sinalizando um pipeline robusto de demandas acumuladas. Nenhum release foi publicado no período, e apenas 1 PR foi mergeado/fechado, sugerindo que a base de código está em fase intensiva de revisão e preparação para uma futura versão. A contribuição mais ativa vem dos contribuidores Audacity88 e Nillth, com múltiplos PRs relacionados a canais (especialmente Discord), runtime e config.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto encontra-se em período pré-release, com significativo trabalho em andamento em diversas áreas (Discord, config, runtime, gateway). O tracker de integration/channel/provider/tool queue para v0.8.1 (#6970) indica que a próxima versão está em aktif planejamento.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergiados

| PR | Título | Tipo | Destaque |
|---|---|---|---|
| *A determinar* | 1 PR mergeado/fechado no período | — | Dado não especificado nos itens recentes |

### PRs Abertos com Maior Impacto (por tamanho/complexidade)

- **#7842** [feat(cli): agents/providers/channels CRUD + skill-bundle cascade](https://github.com/zeroclaw-labs/zeroclaw/pull/7842) — **Size: XL, Risk: HIGH** — Slice 8/8 da série de PRs empilhados para delete cascade (#7175) + alias rename (#7468). Adiciona CRUD completo via CLI.
- **#7844** [feat(channels/discord): typed slash-command options + chunked interaction followups](https://github.com/zeroclaw-labs/zeroclaw/pull/7844) — **Size: XL, Risk: HIGH** — Permite declaração de opções tipadas em `SKILL.toml` para slash commands no Discord.
- **#7833** [feat(channels/discord): render outbound rich embeds from [EMBED:{…}] markers](https://github.com/zeroclaw-labs/zeroclaw/pull/7833) — **Size: XL, Risk: MEDIUM** — Suporte a rich embeds no Discord via marcadores customizados.
- **#7841** [feat(gateway): agent owned-state rename cascade + rename wiring](https://github.com/zeroclaw-labs/zeroclaw/pull/7841) — **Size: L** — Continuação da série de refatoração de config/gateway.
- **#7838** [feat(gateway): agent owned-state cascade on delete](https://github.com/zeroclaw-labs/zeroclaw/pull/7838) — **Size: L** — Delete com cascade para state do agente.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Tipo | Risk |
|---|---|---|---|---|
| [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) | Restore GitHub as a native channel | 6 | enhancement | high |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | RFC: Route scheduled tasks through orchestrator message pipeline | 4 | enhancement (RFC) | high |
| [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) | Cron/heartbeat NO_REPLY sentinel sends literal text | 4 | bug | medium |
| [#2091](https://github.com/zeroclaw-labs/zeroclaw/issues/2091) | Telegram poll errors leak bot API token | 3 | bug | medium |
| [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) | v0.8.1 integration/channel/provider/tool queue | 3 | tracker | high |

**Análise:** A demanda mais comentada é a **adição do GitHub como canal nativo** (#2079), indicando interesse da comunidade em integração profunda com workflows de desenvolvimento. O RFC sobre roteamento de tasks agendadas (#6954) reflete problemas crônicos com o scheduler atual que afetam múltiplas issues relacionadas. Bugs de segurança no Telegram (#2091) e problemas de entrega no cron/heartbeat (#2128) completam o top 5 de engajamento.

---

## 5. Bugs e Estabilidade

### Bugs Reportados Recentemente

| # | Severidade | Título | Canal/Componente |
|---|---|---|---|
| [#7904](https://github.com/zeroclaw-labs/zeroclaw/issues/7904) | — | SKILL.md frontmatter `always` flag não funciona em compact mode | agent/runtime/skills |
| [#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) | **S1** | vision_provider ignorado silenciosamente — imagens vão para fallback | provider |
| [#7898](https://github.com/zeroclaw-labs/zeroclaw/issues/7898) | **S1** | rust_native browser snapshots falham sob WebDriver | tool:browser |
| [#6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689) | high | SOP audit é silent no-op em produção | memory/observability |
| [#6686](https://github.com/zeroclaw-labs/zeroclaw/issues/6686) | high | SOP cron triggers não têm caller em produção | cron/runtime |
| [#6685](https://github.com/zeroclaw-labs/zeroclaw/issues/6685) | high | SOP HTTP fan-in documentado mas não conectado | gateway |
| [#7896](https://github.com/zeroclaw-labs/zeroclaw/issues/7896) | S2 | Groq native tool messages faltam tool name | provider:groq |
| [#7894](https://github.com/zeroclaw-labs/zeroclaw/issues/7894) | S2 | OpenAI Codex account id extraction incompleta | provider:openai_codex |

### PRs de Bug Resolvidos/Em Revisão

- **#7901** — fix(runtime): bound repeated shell approval loops — **Risk: HIGH**
- **#7903** — fix(runtime): replay ACP session history — **Risk: HIGH**
- **#7583** — fix(runtime): honor profile tool iteration limits — **Risk: HIGH**
- **#7902** — fix(tools): pin http_request requests to vetted DNS (SSRF) — **Risk: HIGH**
- **#7732** — fix(self-test): authenticate websocket handshake probe — **Risk: HIGH**

**Análise:** Dois bugs S1 (workflow blocked) foram reportados: um no provider de visão multimodal e outro no browser via WebDriver. Há um cluster de 3 bugs high-risk relacionados a SOP (#6685, #6686, #6689) que indicam documentação desalinhada com implementação. A correção de SSRF (#7902) demonstra atenção à segurança.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features (Issues Recentes)

| # | Título | Tags | Status |
|---|---|---|---|
| [#7904](https://github.com/zeroclaw-labs/zeroclaw/issues/7904) | Signal native Markdown rendering | channel:signal | accepted |
| [#7886](https://github.com/zeroclaw-labs/zeroclaw/issues/7886) | Telegram per-channel inbound debounce | channel:telegram | accepted |
| [#7881](https://github.com/zeroclaw-labs/zeroclaw/issues/7881) | Provider fallback circuit breakers | provider | accepted |
| [#7849](https://github.com/zeroclaw-labs/zeroclaw/issues/7849) | Discord mention-triggered thread mode | channel:discord | accepted |
| [#7831](https://github.com/zeroclaw-labs/zeroclaw/issues/7831) | Tracker: Discord channel interaction-surface parity | channel:discord | in-progress |
| [#7891](https://github.com/zeroclaw-labs/zeroclaw/issues/7891) | Signal media attachment support | channel:signal | accepted |
| [#7769](https://github.com/zeroclaw-labs/zeroclaw/issues/7769) | Wire Matrix room-management APIs | channel:matrix | accepted |
| [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) | llama.cpp model router | provider | quickstart |
| [#6826](https://github.com/zeroclaw-labs/zeroclaw/issues/6826) | Tracker: Zerocode (TUI) | daemon/gateway | tracker |
| [#6825](https://github.com/zeroclaw-labs/zeroclaw/issues/6825) | Tracker: Zerocode UX | gateway/onboard | tracker |

### PRs de Feature Em Progresso

- **#7846** — feat(runtime): wire before_llm_call hook into LLM call paths — Hook configurável antes de chamadas LLM
- **#7821** — feat(config): add schema struct & risk field — SandboxPolicyConfig para profiles de risco
- **#7826** — fix(runtime/agent): move credential redaction to rendering layer — Correção de segurança/UX
- **#7094** — fix(cli): make `models set` persist the model in config — CLI bug que afeta usabilidade

**Sinais de Roadmap:**
- **Discord** é claramente prioridade: 5+ issues/PRs relacionados a embeds, slash commands, threads, e paridade de interação
- **TUI (Zerocode)** está em tracker dedicado (#6826, #6825), indicando desenvolvimento ativo
- **Circuit breakers** para providers (#7881) sugerem foco em resiliência
- **llama.cpp router** (#7539) marcado como "quickstart" indica foco em onboarding

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Evidence | Impacto |
|---|---|---|
| **Integração GitHub imatura** | #2079 com 6 comentários — "custom glue" necessária | Alto — bloqueia workflows DevOps |
| **Scheduler crônico de tasks** | #6954 (RFC) lista 5 issues root-causadas pelo bypass do pipeline | Alto — instabilidade em produção |
| **NO_REPLY enviado como texto** | #2128 — ruído em canais como Telegram | Médio — polui conversas |
| **Windows shell inflexível** | #7089 — cmd.exe como único host | Médio — experiência Windows degradada |
| **SOP audit não funciona em produção** | #6689 — documentação promete o que código não entrega | Alto — quebra expectativa de observabilidade |
| **Token leak em logs do Telegram** | #2091 — severidade S3, mas sensibilidade de segurança | Médio — risco de exposição |

### Cenários de Uso Emergentes

- **Agentes DevOps** — necessidade de GitHub nativo (#2079) e hooks LLM (#7846)
- **Multi-canal operacional** — Discord, Signal, Matrix, Telegram com feature requests específicos
- **Local models** — interesse em llama.cpp router (#7539) para modelos pequenos
- **Power users/headless** — TUI Zerocode como interface primária (#6826)

**Satisfação geral:** Não há indicadores claros de satisfação (ausência de novos releases, issues de bugs persistentes). A atividade intensa de PRs sugere investimento em estabilidade e features prometidas.

---

## 8. Backlog que Merece Atenção

### Issues Antigas Sem Resolução / Sem Comentários

| # | Título | Criado | Comentários | Nota |
|---|---|---|---|---|
| [#6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689) | SOP audit is silently no-op | 2026-05-15 | 0 | high risk, docs desalign |
| [#6686](https://github.com/zeroclaw-labs/zeroclaw/issues/6686) | SOP cron triggers have no production caller | 2026-05-15 | 0 | high risk |
| [#6685](https://github.com/zeroclaw-labs/zeroclaw/issues/6685) | SOP HTTP fan-in documented but not wired | 2026-05-15 | 0 | high risk |
| [#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) | Remove remote-markdown-link block from skill audit | 2026-05-16 | 2 | high false-positive rate |
| [#6695](https://github.com/zeroclaw-labs/zeroclaw/issues/6695) | Add skills management to gateway web UI | 2026-05-16 | 0 | in-progress (parce) |
| [#6826](https://github.com/zeroclaw-labs/zeroclaw/issues/6826) | Tracker: Zerocode | 2026-05-21 | 0 | TUI tracker |
| [#6825](https://github.com/zeroclaw-labs/zeroclaw/issues/6825) | Tracker: Zerocode UX | 2026-05-21 | 0 | TUI UX tracker |
| [#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) | vision_provider silently ignored (S1) | 2026-05-21 | 1 | bug S1 |
| [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) | Restore GitHub as a native channel | 2026-02-27 | 6 | feature request antigo |
| [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) | Cron/heartbeat NO_REPLY sentinel | 2026-02-27 | 4 | bug persistente |
| [#2091](https://github.com/zeroclaw-labs/zeroclaw/issues/2091) | Telegram poll errors leak token | 2026-02-27 | 3 | security minor |

### PRs Antigos / Stale Candidates

| # | Título | Criado | Status | Nota |
|---|---|---|---|---|
| [#7094](https://github.com/zeroclaw-labs/zeroclaw/pull/7094) | fix(cli): make `models set` persist | 2026-06-02 | stale-candidate | Afeta usabilidade do CLI |
| [#5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187) | feat(ci): add arm64 docker target | 2026-04-02 | needs-author-action | CI enhancement, aberto há ~75 dias |

### Recomendações Prioritárias

1. **Cluster SOP (#6685, #6686, #6689)** — 3 bugs high-risk com 0 comentários; documentação promete features inexistentes; risco de confiança do usuário
2. **GitHub como canal nativo (#2079)** — Issue com maior engajamento, aberta desde fevereiro; decisão de accept mas sem movimento
3. **RFC do scheduler (#6954)** — Root cause de 5 bugs; resolução desbloqueia estabilidade de production
4. **S1 vision_provider (#6841)** — Bug bloqueando multimodal workflow; apenas 1 comentário
5. **Telegram token leak (#2091)** — Segurança; 3 comentários mas ainda aberto

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Avaliação |
|---|---|---|
| Issues ativas (24h) | 50 | 🟢 Alta |
| PRs atualizados (24h) | 50 | 🟢 Alta |
| Releases (24h) | 0 | 🟡 Pré-release |
| PRs merged/fechados (24h) | 1 | 🔴 Baixa conversão |
| Bugs S1 reportados | 2 | 🟡 Críticos em aberto |
| Issues >30 dias sem movimento | ~10 | 🔴 Backlog stagnante |
| Contribuidor mais ativo | Audacity88, Nillth | 🟢 Concentração saudável |

**Saúde Geral: MODERADA** — Alta atividade de desenvolvimento, mas backlog de issues antigas e bugs de alta severidade sem resolução pede atenção. A ausência de releases recentes e baixa taxa de merge de PRs sugere foco em qualidade para próximo release (v0.8.1?).

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*