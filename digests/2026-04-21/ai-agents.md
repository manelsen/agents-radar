# Resumo diário do ecossistema de agentes de IA 2026-04-21

> Issues: 2 | PRs: 4 | Projetos cobertos: 7 | Gerado em: 2026-04-20 20:41 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto NullClaw — 2026-04-21

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade moderada** em 21 de abril de 2026, com 6 itens atualizados nas últimas 24 horas (2 issues + 4 PRs). Não houve lançamentos de novas versões. A atividade está concentrada em ** correções de estabilidade e hardening**, com destaque para melhorias no daemon e gateway que abordam problemas de concorrência e comportamento em hardware limitado. A comunidade demonstra engajamento significativo em issues de documentação e debugging.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24 horas.**

O projeto não publicou novas versões desde o período analisado. Mantenha acompanhamento em [nullclaw/nullclaw/releases](https://github.com/nullclaw/nullclaw/releases) para anúncios futuros.

---

## 3. Progresso do Projeto

Todas as 4 PRs abertas foram submetidas nos últimos 1-2 dias, indicando **momentum de desenvolvimento ativo** sem ainda ter merges visíveis no período:

| PR | Escopo | Impacto |
|----|--------|---------|
| [#853](https://github.com/nullclaw/nullclaw/pull/853) | Gateway | Backoff no accept-loop para prevenir CPU spin |
| [#856](https://github.com/nullclaw/nullclaw/pull/856) | Service | Robustez em hardware sem RTC (PogoPlug V4) |
| [#855](https://github.com/nullclaw/nullclaw/pull/855) | Daemon/Session | Concorrência inbound e preempção de turns |
| [#854](https://github.com/nullclaw/nullclaw/pull/854) | Subagent | Entrega de completions ao contexto original |

**Destaque técnico:** A PR [#855](https://github.com/nullclaw/nullclaw/pull/855) representa uma mudança arquitetural significativa — refatoração do processamento serial de inbound para modelo com concorrência limitada, com preempção de sessões ocupadas. Resolve [#832](https://github.com/nullclaw/nullclaw/issues/832).

---

## 4. Temas Quentes da Comunidade

### Issue com maior engajamento: **#826** (9 comentários)

📄 **[documentation] How to use nullclaw gateway with Tailscale?**  
🔗 https://github.com/nullclaw/nullclaw/issues/826 | Status: **OPEN**

**Resumo:** Usuário tentando integrar NullClaw Gateway com Tailscale em VPS Debian encontra erro `NotImplemented` ao iniciar tunnel.

**Análise:** Issue com alto volume de comentários sugere necessidade de:
- Documentação mais clara sobre integrações de rede (Tailscale, VPNs)
- Melhor tratamento de erros com mensagens acionáveis vs. `NotImplemented`

---

## 5. Bugs e Estabilidade

### Issue resolvida recentemente: **#821** ✅

📄 **[bug] nullclaw version doesn't show any version, just "dev"**  
🔗 https://github.com/nullclaw/nullclaw/issues/821 | Status: **CLOSED**

**Problema:** Comando `nullclaw version` retornava string vazia `"dev"` em vez de versão ou hash commit.

**Severidade:** Baixa (UX/DX), mas impacto na experiência de debugging.

**Status:** Fechada com 4 comentários. Aguardar próxima release para validação da correção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Demandas identificadas:

| Tipo | Issue/PR | Descrição |
|------|----------|-----------|
| Documentação | [#826](https://github.com/nullclaw/nullclaw/issues/826) | Guía de integração Tailscale/VPN |
| Estabilidade | [#853](https://github.com/nullclaw/nullclaw/pull/853) | Backoff em gateway accept-loop |
| Compatibilidade | [#856](https://github.com/nullclaw/nullclaw/pull/856) | Suporte a hardware sem RTC (ARMv5TE) |

**Sinais de roadmap:** O foco em hardware legado (PogoPlug V4) e sistemas sem RTC indica possível estratégia de suporte a dispositivos embarcados/IoT. A refatoração de concorrência em [#855](https://github.com/nullclaw/nullclaw/pull/855) sugere preparação para maior carga/throughput.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas:

1. **Integração de rede complexa** — Usuários de Tailscale encontram barreiras ao configurar gateway, com mensagens de erro não informativas (`NotImplemented`).

2. **Experiência de debugging deficiente** — Versão `"dev"` inútil para diagnóstico em produção/instalação from source.

3. **Casos de uso emergente** — Hardware ARM legado (PogoPlug, dispositivos sem RTC) sendo explorado pela comunidade, sugerindo base de usuários além do cenário típico de desktop/server.

### Satisfação:
- Community engagement ativo (comentários, PRs de múltiplos contribuidores: `manelsen`, `mark-os`, `eabase`)
- Issues sendo fechadas (bug #821 resolvido)

---

## 8. Backlog que Merece Atenção

| Issue/PR | Idade | Status | Prioridade |
|----------|-------|--------|------------|
| [#826](https://github.com/nullclaw/nullclaw/issues/826) | 6 dias | OPEN | **Alta** — 9 comentários, usuário aguardando resposta sobre documentação |
| [#832](https://github.com/nullclaw/nullclaw/issues/832) | — | Fechado (via [#855](https://github.com/nullclaw/nullclaw/pull/855)) | ✅ Resolvido |
| [#851](https://github.com/nullclaw/nullclaw/issues/851) | — | Fechado (via [#853](https://github.com/nullclaw/nullclaw/pull/853)) | ✅ Resolvido |

**Recomendação:** A issue [#826](https://github.com/nullclaw/nullclaw/issues/826) está sem resposta da equipe há 6 dias e tem forte demanda da comunidade. Considerar atribuir para triagem de documentação.

---

*Relatório gerado em 2026-04-21. Dados extraídos de [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

## 2026-04-21

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **alta maturidade e diversificação** em 21 de abril de 2026. Todos os sete projetos analisados demonstram atividade intensa — com média de 45 eventos por projeto nas últimas 24h — indicando uma indústria em plena expansão. Observa-se convergência em três eixos: **segurança** (shell evasion, secret management, OAuth hardening), **resiliência de providers** (multi-provider fallback, native integrations) e **orquestração multi-agente** (subagents, spawn management). A fragmentação de canais (Telegram, Discord, Signal, WeChat, Feishu, QQ) e a busca por independência de provedores (Vertex AI nativo, bypass de OpenRouter) revelam um mercado que busca controle sobre infraestrutura crítica.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases | Saúde | Velocidade |
|---------|-------------|-----------|----------|-------|------------|
| **ZeroClaw** | 45 | 50 | 0 (preparando v0.7.4) | 🟢 Estável | Alta — RFCs ativos |
| **Hermes Agent** | 50 | 50 | 0 | 🟢 Estável | Muito alta — 18 PRs merged |
| **IronClaw** | 50 | 50 | 0 (staging promo) | 🟡 Em regressão | Alta — bug bash ativo |
| **CoPaw/QwenPaw** | 42 | 50 | 1 (v1.1.3-beta.1) | 🟡 Estável | Muito alta — 34 PRs merged |
| **PicoClaw** | 13 | 114 | 1 (nightly) | 🔴 Instável | Alta — 107 PRs em backlog |
| **NanoBot** | 12 | 54 | 0 | 🟢 Estável | Alta — foco em estabilidade |
| **NullClaw** | 2 | 4 | 0 | 🟢 Estável | Baixa — manutenção |

**Análise de Volume:** ZeroClaw, Hermes e IronClaw lideram em volume absoluto de atividade. PicoClaw apresenta o maior backlog de PRs (107 abertos), sugerindo gargalo em code review. NanoBot e NullClaw mantêm atividade moderada com foco qualitativo.

---

## 3. Posicionamento do Projeto Principal

### Hermes Agent (nousresearch/hermes-agent)

**Posição:** Líder em volume e escopo de integrações

| Dimensão | Vantagem |
|----------|----------|
| **Integrações** | Suporte nativo a Signal, Discord, Telegram, com GAAs vazios de mídia. Diferencial em canais não-Windows |
| **Segurança** | Hash-chain audit trail (#487), secret redaction em context compaction (#9200) — demanda corporativa clara |
| **Multi-agent** | PR #11215 (Orchestrator Subagents) com spawn recursivo 1-3 níveis — arquitetura mais madura |
| **Comunidade** | 100 eventos/24h, 18 PRs merged — maior throughput de contribuição |

**Diferenças Técnicas:** Hermes investe em STT nativo (Gemini multimodal), TTS NeuTTS, e diversificação de providers (Brave Search, OpenCode Go). Foco explícito em não dependência de intermediários.

---

### PicoClaw (sipeed/picoclaw)

**Posição:** Maior diversidade de contribuições, mas saúde instável

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| PRs abertos | 107 | ⚠️ Backlog crítico |
| Bugs críticos | 3 (#2578, #2602, #2598) | 🔴 Prioridade absoluta |
| PRs merged (24h) | 7 | ➡️ Gargalo |

**Risco:** Autenticação quebrada em v0.2.6 (#2578 — Authorization header ausente) afeta todos os usuários de providers OpenAI-compatible. Sem hotfix, usuários migram para alternativas.

---

### IronClaw (nearai/ironclaw)

**Posição:** Foco em qualidade via bug bash

**Modelo diferenciado:** IronClaw opera em ciclos de "bug bash" (4/16 e 4/20) com regressão ativa. Suite Rust de 12→0 falhas e Playwright 14→0 em 24h demonstra disciplina de qualidade.

**Vulnerabilidades abertas:**
- 8 issues P1 em aberto
- OAuth Google Sheets quebrado há 11 dias (#2229)
- Onboarding com db error há 42 dias (#846)

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Plugins e Execução

| Projeto | Iniciativa | Status |
|---------|------------|--------|
| **CoPaw** | Shell Evasion Guardian (#3400) | ✅ Merged |
| **IronClaw** | Secret redaction + dashboard hardening (#13176) | ✅ Merged |
| **ZeroClaw** | SSRF protection (#5918), env var allowlist (#5919) | 🔶 Aberto |
| **Hermes** | Secret redaction em compaction (#9200) | ✅ Merged |

**Padrão:** Proteção contra command injection e exfiltration de secrets é consenso universal. CoPaw implementou guard quote-aware; ZeroClaw adiciona network-level controls.

---

### 4.2 Resiliência de Providers

| Projeto | Abordagem | Impacto |
|---------|-----------|---------|
| **NanoBot** | Fallback models automático (#2417) | Failover entre modelos |
| **Hermes** | max_tokens fallback estendido a todos os proxies (#12767) | Bedrock, NVIDIA, LiteLLM, vLLM |
| **PicoClaw** | OpenAI responses API com fallback (#1229) | GPT-5 compatibility |
| **ZeroClaw** | Manifest Router provider (#5730) | OpenAI-compatible localhost |

**Análise:** Multi-provider fallback evoluiu de feature para requisito. Usuários demandam resiliência operacional sem dependência de único endpoint.

---

### 4.3 Gestão de Contexto e Memória

| Projeto | Solução | Issue |
|---------|---------|-------|
| **NanoBot** | Preservar contexto parcial no `/stop` (#3299) | Contexto valioso não perdido |
| **ZeroClaw** | Dream Mode — consolidação periódica (#5849) | Memória de longo prazo |
| **CoPaw** | Memory rebuild (#3548) | Alinhamento com interface As2.0 |
| **Hermes** | Context compaction com redaction (#9200) | Segredos protegidos |

---

### 4.4 Canais e Integração Multimodal

| Canal | Projetos Ativos | Status |
|-------|-----------------|--------|
| **Telegram** | Todos exceto NullClaw | Bugs em IronClaw, PicoClaw |
| **Discord** | Hermes, PicoClaw | Hermes: vídeos rejeitados ✅ corrigido |
| **Signal** | Hermes | Suporte mídia adicionado |
| **WeChat/企业微信** | CoPaw, PicoClaw | Screenshots PNG problemáticos |
| **Feishu** | NanoBot | LaTeX rendering solicitado |
| **QQ** | PicoClaw | Integração em desenvolvimento |

---

## 5. Análise de Diferenciação

### 5.1 Público-Alvo

| Projeto | Perfil Primário | Perfil Secundário |
|---------|-----------------|-------------------|
| **NullClaw** | Desenvolvedores embarcados (PogoPlug, ARMv5TE) | Usuários de hardware legado |
| **NanoBot** | Automação pessoal (cron jobs, agentes) | Desenvolvedores MCP |
| **Hermes** | Usuários avançados multi-plataforma | Empresas com demandas de compliance |
| **PicoClaw** | Usuários Docker/Linux server | Desenvolvedores Android |
| **IronClaw** | Usuários enterprise (NEAR AI hosted) | Integrações WASM |
| **CoPaw** | Usuários Windows/Container (ZimaOS) | Multi-agent orchestration |
| **ZeroClaw** | Desenvolvedores core / arquitetos | Usuários enterprise scale |

---

### 5.2 Arquitetura Diferencial

| Projeto | Arquitetura Distintiva | Implicação |
|---------|------------------------|------------|
| **ZeroClaw** | Microkernel v1.0 (RFC aceito) | Plugin isolation, WASM bridge |
| **IronClaw** | Engine V2 com multi-route execution | Custo reduzido via caminhos alternativos |
| **Hermes** | Orchestrator Subagents recursivo | Hierarquias de agentes complexas |
| **CoPaw** | Plugin system + Semantic skill routing | Escalabilidade de skills via embeddings |
| **NullClaw** | Concorrência limitada inbound (PR #855) | Throughput em hardware limitado |

---

### 5.3 Estratégia de Provider

| Estratégia | Projetos | Benefício |
|------------|----------|------------|
| **Nativo direto** | Hermes (#12639), ZeroClaw (Groq, Inworld) | Sem intermediários, custos reduzidos |
| **Fallback múltiplo** | NanoBot, Hermes, PicoClaw | Resiliência operacional |
| **OpenAI-compatible** | PicoClaw, ZeroClaw, IronClaw | Compatibilidade máxima |
| **Hardware-aware** | NullClaw | Suporte a dispositivos sem RTC |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Categoria | Projetos | Indicador |
|------------|----------|-----------|
| **Iteração rápida** | CoPaw, Hermes, IronClaw | >30 PRs merged/24h |
| **Qualidade/consolidação** | NullClaw, NanoBot | Baixo volume, alto impacto |
| **Escala/complexidade** | PicoClaw, ZeroClaw | Alto backlog, alta demanda |

---

### 6.2 Maturidade de Governança

| Projeto | Framework de Governança | Evidência |
|---------|------------------------|-----------|
| **ZeroClaw** | RFC completo (5 aceitos) | Microkernel v1.0, CI/CD, Documentation Standards |
| **Hermes** | Issue triaging estruturado | Security labels, severity classification |
| **CoPaw** | Help Wanted estruturado (#2291) | 58 comentários, P0-P2 labels |
| **IronClaw** | Bug bash cycles | Regressão ativa documentada |

---

### 6.3 Dívida Técnica e Ativos

| Projeto | Dívida Identificada | Risco |
|---------|---------------------|-------|
| **PicoClaw** | 107 PRs backlog, auth quebrado | 🔴 Migração de usuários |
| **IronClaw** | Onboarding quebrado 42 dias | 🔴 Conversão bloqueada |
| **CoPaw** | Migration .copaw→.qwenpaw | 🟠 Re-branding problemático |
| **ZeroClaw** | ARM architecture download bug | 🟠 Usuários Raspberry Pi |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Multi-provider como padrão** | Fallback em NanoBot, Hermes, PicoClaw | Users recusam vendor lock-in |
| **Orquestração multi-agente** | Hermes subagents recursivos, CoPaw task handoff (#3623) | Agentes especializados collaborating |
| **Segurança corporativa** | Hash-chain audit (Hermes #487), secret redaction (todos) | Demanda de compliance/auditoria |
| **Voice-first interfaces** | ZeroClaw full-duplex voice (#5896), Hermes STT nativo | Próximo frontier de UX |
| **Hardware diversificado** | NullClaw ARM legacy, ZeroClaw ARM/RPi | IoT/embarcado como mercado |
| **Enterprise readiness** | IronClaw self-service secrets (#2754), ZeroClaw Postgres backend (#5946) | Escalabilidade organizacional |

---

### 7.2 Features que Señalam Direção

| Feature | Projeto | Leitura Estratégica |
|---------|---------|---------------------|
| **Dream Mode (memória idle)** | ZeroClaw | Agentes com memória contínua |
| **Spawn management** | Hermes, NanoBot | Agentes como serviços de longa duração |
| **Docker full image** | ZeroClaw | Redução de barreira de entrada |
| **Shift+Enter newline** | Hermes | UX profissional/terminal |
| **Native Google/Vertex** | Hermes | Independência de OpenRouter |

---

### 7.3 Conclusões para Decisores

1. **Segurança não é mais opcional:** Todos os projetos investem ativamente em shell evasion, secret management e OAuth hardening. Projetos sem roadmap de segurança perdem credibilidade enterprise.

2. **Multi-provider fallback é requisito mínimo:** Usuários esperam resiliência automática. Providers que não implementam failover enfrentarão churn.

3. **Orquestração multi-agente em aceleração:** Hermes e CoPaw lideram com subagents recursivos e task handoff. Esta arquitetura resolve limitações de contexto e especialização.

4. **Voice é o próximo frontier:** ZeroClaw (#5896) e Hermes (STT nativo) investem em interfaces de voz. Demanda por "telephone-like experience" sinaliza mudança de paradigma.

5. **Hardware diversificado expande mercado:** NullClaw em ARM legacy e ZeroClaw em ARM/RPi indicam que o ecossistema não se limita a desktop/server — IoT e embarcados são mercados ativos.

---

**Relatório gerado em:** 2026-04-21  
**Próxima atualização recomendada:** 2026-04-22 (monitorar PicoClaw #2578 hotfix, IronClaw staging promotion)

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-04-21

---

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade comunitária** em 21 de abril de 2026. Nas últimas 24h, foram registradas **12 issues** (3 abertas, 9 fechadas) e **54 PRs** (30 abertos, 24 merged/fechados), indicando uma sprint de desenvolvimento intensa sem releases formais. A equipe focou em **estabilidade do loop de agentes** (corrigindo loops infinitos, vazamentos de hints em cron jobs e erros de cursor) e em **melhorias de canais** (Telegram inline keyboards, suporte LaTeX para Feishu). A saúde geral é positiva: a comunidade responde rapidamente às issues e mantém um fluxo saudável de contribuições.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O último marco de merge significativo foi o PR #3299, que preserva contexto parcial quando `/stop` cancela uma tarefa — mudança funcional relevante que pode justificar uma release de patch em breve.

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/fechados** com impacto direto:

| PR | Autor | Impacto |
|---|---|---|
| [#3299](https://github.com/HKUDS/nanobot/pull/3299) | hussein1362 | **Corrige #2966**: `/stop` agora preserva contexto parcial em vez de descartar toda a rodada |
| [#2417](https://github.com/HKUDS/nanobot/pull/2417) | conversun | **Fallback models**: failover automático entre modelos quando o primário falha com retry |
| [#2523](https://github.com/HKUDS/nanobot/pull/2523) | conversun | Impede delegação de tarefas MCP a subagentes (que não têm acesso a ferramentas MCP) |
| [#2416](https://github.com/HKUDS/nanobot/pull/2416) | conversun | Suporte a `ImageContent` em respostas de ferramentas MCP (ex.: QR codes) |
| [#2424](https://github.com/HKUDS/nanobot/pull/2424) | conversun | Escopo por chat para servidores MCP via campo `allowedChats` |
| [#3297](https://github.com/HKUDS/nanobot/pull/3297) | hussein1362 | Remove mensagens assistant residuais no histórico para evitar erro 400 no provedor Anthropic |
| [#3258](https://github.com/HKUDS/nanobot/pull/3258) | mcampo | Skills com `requires.env` agora verificam se variáveis estão acessíveis ao exec |

---

## 4. Temas Quentes da Comunidade

### Issues com mais comentários e atenção:

**#3073 — Loop infinito de read_file em history.jsonl** (9 comentários, fechado)
> Quando o agente recebe perguntas genéricas ("o que aconteceu recentemente?"), ele entra em loop chamando `read_file` repetidamente. Este é um problema crítico de estabilidade do agent loop que exigiu investigação significativa.

**#3143 — Erro de token no LLM da Feishu** (9 comentários, fechado)
> Erro recorrente de excedente de tokens (71835/65536 via tiktoken) em mensagens Feishu. A comunidade identificou que o problema acontece com frequência crescente, sugerindo necessidade de otimização no gerenciamento de histórico de conversação.

**#3326 — Suporte a notificações root-level do MCP** (3 comentários, fechado)
> Solicitação de suporte a notificações MCP como `notifications/scheduled-reminder`. Indicativo de que o ecossistema MCP está se expandindo e que a comunidade quer integrar fluxos de notificação push.

### PR em destaque com potencial de impacto:

**#3303** — Ferramentas `spawn_status` e `spawn_cancel` + detecção de loops de domínio
Este PR introduz ferramentas gerenciáveis para subagentes, permitindo listar, monitorar e cancelar tarefas filhas. É um passo importante para ambientes de produção onde subagentes podem ficar órfãos.

---

## 5. Bugs e Estabilidade

### Abertos (requerem atenção imediata):

| Issue | Severidade | Descrição |
|---|---|---|
| [#3324](https://github.com/HKUDS/nanobot/issues/3324) | **Alta** | `WinError 193` ao integrar `chrome-devtools-mcp` no Windows — o mesmo comando funciona no terminal mas falha via nanobot |
| [#3328](https://github.com/HKUDS/nanobot/issues/3328) | **Alta** | Erro de desserialização após update de 0.1.5 para 0.1.5.post1 com Deepseek via Telegram — todas as mensagens afetadas |

### Resolvidos (confirmando padrões de bugs):

- **#3315** — Mensagens longas no Telegram causan erro ao tentar enviar resposta única (bug em streaming)
- **#3319** — Cron jobs vazavam hints intermediários de ferramentas para o canal do usuário antes da decisão do avaliador (regressão de segurança UX)
- **#3206** — Erro de autenticação duplicada no provedor Gemini (`Multiple authentication credentials received`)

### Padrão identificado:
Múltiplos bugs envolvem **gestão de estado do cursor** em `history.jsonl` (valores não-integer corrompidos). O PR #3340 ([link](https://github.com/HKUDS/nanobot/pull/3340)) ataca diretamente essa causa raiz.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas solicitações abertas:

**#3322** — Pausar bot via comando `/bot on/off` (enhancement)
> Cenário: quando um humano quer intervir em um chat WhatsApp, o bot continua respondendo automaticamente. Não há forma confiável de pausar sem afetar todo o gateway.

**#3333** — Canal QQ streaming (enhancement)
> QQbot opera apenas em modo não-streaming, o que pode facilitar bloqueios por parte da plataforma.

**#3336** — Suporte a DOCX, XLSX, PPTX no `read_file` (feat)
> Extensão natural da ferramenta de leitura de arquivos para cobrir documentos Office.

**#3317** — Teclado inline para Telegram (feat)
> Suporte a botões inline que retornam como mensagens do usuário.

**#3307** — Renderização LaTeX para Feishu (feat)
> Suporte a fórmulas matemáticas em streaming e não-streaming.

### Sinais de roadmap implícitos:
- **Interoperabilidade MCP expandida** (#3326, #3338 com retry automático)
- **Orquestração multi-agente** (#3303, #3223 com spawn management)
- **Gestão de contexto e memória** (#3340, #3299, #2526)
- **Canais e rendering** (Telegram, Feishu, QQ, WeChat)

---

## 7. Resumo de Feedback dos Usuários

### Dores reais reportadas:

1. **Perda de contexto ao usar `/stop`** — Usuários perdem progresso valioso quando precisam corrigir o agente no meio de uma tarefa. Corrigido em #3299.

2. **Erros de LLM com mensagens longas** — Especialmente em canais Feishu, onde o limite de tokens causa erros frequentes (issue #3143).

3. **Problemas de integração no Windows** — Usuários Windows enfrentam erros ao conectar MCP servers via `npx`, sugerindo lacunas de compatibilidade cross-platform.

4. **Mensagens longas no Telegram travam** — Quando o modelo gera muitas mensagens, o bot tenta enviar como mensagem única e falha.

5. **Subagentes não funcionam com MCP** — Usuários que delegam tarefas a subagentes descobrem que eles não têm acesso a ferramentas MCP, causando falhas silenciosas. Corrigido em #2523.

### Cenários de uso emergentes:
- **Behavioral learning**: usuários querem que o agente aprenda com feedback ("obrigado", correções) — documentado em #3339.
- **Human takeover**: necessidade de pausar o bot para intervenção humana em conversas ao vivo.
- **Cron jobs com agentes**: vazamento de hints indica adoção crescente de automação via cron.

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução há mais de 7 dias:

| Issue | Idade | Status | Prioridade |
|---|---|---|---|
| [#2966](https://github.com/HKUDS/nanobot/issues/2966) — `/stop` perde contexto | Criada: 2026-04-09 | **CLOSED** ✅ (via #3299) | — |
| [#3073](https://github.com/HKUDS/nanobot/issues/3073) — Loop infinito read_file | Criada: 2026-04-12 | **CLOSED** ✅ | — |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) — Preservar mensagem do usuário no /stop | Criada: 2026-03-26 | **OPEN** ⚠️ | Média — alternativa ao #3299 |

### PRs abertos há mais de 3 dias sem merge:

| PR | Autor | Estado | Análise |
|---|---|---|---|
| [#3286](https://github.com/HKUDS/nanobot/pull/3286) — WebSocket session lifecycle | JackLuguibin | OPEN | Funcionalidade significativa (session lifecycle, delta streaming) — precisa review |
| [#3223](https://github.com/HKUDS/nanobot/pull/3223) — spawn_status/spawn_cancel | MuataSr | OPEN | Duplicado parcialmente por #3303 — risco de conflito |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) — Preservar contexto no /stop | pblocz | OPEN | Mesmaissue de #3299, mas implementação diferente — pode precisar reconciliação |

### Recomendação:
Revisar se **#3223** e **#3303** estão convergindo para o mesmo objetivo para evitar trabalho duplicado. **#2526** deve ser avaliado contra **#3299** (já merged) para verificar se a abordagem alternativa agrega valor.

---

**Relatório gerado em: 2026-04-21** | Fonte: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-04-21

---

## 1. Panorama do Dia

O Hermes Agent manteve um **ritmo de atividade muito intenso** nas últimas 24 horas, com 50 issues e 50 PRs atualizados, refletindo uma comunidade engajada tanto em reporta problemas quanto em contribuir código. **Nenhum release foi publicado**, indicando que a versão atual está em fase de refinamento antes do próximo ciclo de lançamento. A distribuição entre issues abertas (37) e fechadas (13), somada a 18 PRs merged/fechados, sugere uma **taxa de resolução saudável** e fluxo de desenvolvimento ativo. Observa-se foco significativo em **estabilidade de integrações** (Gemini, StepFun, Signal, Discord) e em **features de segurança e observabilidade**.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24 horas.**

O projeto não publicou novas versões neste período, sugerindo que a equipe está em fase de validação de changes acumulados antes de um próximo tag.

---

## 3. Progresso do Projeto

Os PRs mais relevantes merged/fechados nas últimas 24h:

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#13178](https://github.com/NousResearch/hermes-agent/pull/13178) | `feat(send_message): add media delivery support for Signal` | teknium1 | Adiciona suporte nativo a anexos de mídia (imagem/PDF/arquivo) no Signal via JSON-RPC, sanando uma lacuna antiga na entrega de conteúdo multimídia. |
| [#13159](https://github.com/NousResearch/hermes-agent/pull/13159) | `feat(send_message): add media delivery support for Signal` | cdanis | PR original (cherry-picked pelo #13178) que desbloqueou mídia no Signal. |
| [#13180](https://github.com/NousResearch/hermes-agent/pull/13180) | `fix(tui): auto-expand Activity section on error` | OutThisLife | Melhora UX da TUI expandindo automaticamente seções de erro na Activity, facilitando debug. |
| [#13150](https://github.com/NousResearch/hermes-agent/pull/13150) | `fix(discord): handle inbound video attachments` | TypQxQ | Resolve rejeição silenciosa de vídeos no Discord (problema #13149), adicionando tratamento de content-type `video/`. |
| [#13136](https://github.com/NousResearch/hermes-agent/pull/13136) | `nix: automatic lockfile fixing` | ethernet8023 | Adiciona tooling CI para manter builds Nix funcionais em main, automatizando correção de hashes `fetchNpmDeps` stale. |
| [#13179](https://github.com/NousResearch/hermes-agent/pull/13179) | `Add Windows WSL auto-start helper scripts` | blockedby | Facilita deploy no Windows via WSL2 com Scheduled Task e scripts bash de autostart para `hermes gateway run`. |

**PRs de destaque em aberto** com potencial de impacto significativo:

| # | PR | Autor | Impacto |
|---|-----|-------|---------|
| [#11215](https://github.com/NousResearch/hermes-agent/pull/11215) | `feat: Orchestrator Subagents` | pefontana | Permite que subagentes criem seus próprios subagentes com profundidade configurável (1-3, default 2), habilitando arquiteturas de orquestração complexas. |
| [#9200](https://github.com/NousResearch/hermes-agent/pull/9200) | `fix(security): redact secrets from context compaction` | entropidelic | Impede vazamento de segredos (API keys, configs) para o modelo auxiliar durante compactação de contexto. |
| [#13176](https://github.com/NousResearch/hermes-agent/pull/13176) | `fix(security): dashboard security hardening` | entropidelic | Reduz superfície de ataque do dashboard web mesmo em modo `--insecure`. |
| [#13174](https://github.com/NousResearch/hermes-agent/pull/13174) | `feat(stt): add native Gemini multimodal STT provider` | Twanislas | Introduce STT nativo do Gemini com análise de cena auditiva, alternativa ao Whisper. |
| [#12767](https://github.com/NousResearch/hermes-agent/pull/12767) | `fix: apply Anthropic max_tokens fallback to all chat_completions proxies` | yuanqingz | Estende fallback de `max_tokens` para todos os proxies (Bedrock, NVIDIA, LiteLLM, vLLM), não apenas OpenRouter. |

---

## 4. Temas Quentes da Comunidade

As discussions com maior engajamento (comentários + reações) revelam prioridades da comunidade:

### Issues com mais comentários

1. **#487** — *Cryptographic Audit Trail: SHA-256 Hash-Chained Action Log* (18 comentários)
   - **Demanda:** Implementar log de auditoria criptograficamente encadeado (Merkle hash chain) inspirado no OpenFang para responsabilização e tamper-evidence.
   - **Link:** https://github.com/NousResearch/hermes-agent/issues/487

2. **#7893** — *HTTP 400 "Multiple authentication credentials" com Gemini* (17 comentários)
   - **Demanda:** Resolver conflito de credenciais ao usar `GEMINI_API_KEY` e Vertex AI simultaneamente.
   - **Link:** https://github.com/NousResearch/hermes-agent/issues/7893

3. **#5346** — *Shift+Enter newline support in CLI* (6 👍, 3 comentários)
   - **Demanda:** Adicionar `Shift+Enter` como atalho de newline no CLI, unificando experiência com terminais modernos.
   - **Link:** https://github.com/NousResearch/hermes-agent/issues/5346

4. **#12639** — *Native Google/Vertex AI Provider* (5 comentários, 1 👍)
   - **Demanda:** Suporte nativo ao Google/Vertex AI para evitar 402 e rate limits do OpenRouter.
   - **Link:** https://github.com/NousResearch/hermes-agent/issues/12639

5. **#9782** — *nix-darwin / darwinModules support* (7 comentários)
   - **Demanda:** Suporte à instalação via `nix-darwin` para usuários macOS que gerenciam configurações com módulos Nix.
   - **Link:** https://github.com/NousResearch/hermes-agent/issues/9782

### Padrões de demanda identificados

- **Segurança e conformidade:** hash-chain audit trail, redaçao de segredos em compactação, hardening do dashboard.
- **Multi-plataforma:** nix-darwin, Windows/WSL, macOS launchd, Signal.
- **Integração nativa de providers:** Gemini nativo, Vertex AI, Brave Search, OpenCode Go.
- **UX de terminal:** multiline input, cores acessíveis, feedback visual de erros.
- **Resiliência operacional:** recuperação de sessões, browser orphan cleanup, cron job scheduling.

---

## 5. Bugs e Estabilidade

### Bugs reportados nas últimas 24h (por severidade estimada)

#### 🔴 Alta Severidade

| # | Bug | Impacto |
|---|-----|---------|
| [#13164](https://github.com/NousResearch/hermes-agent/issues/13164) | Large tool results consomem todo budget de tokens na compressão, causando perda de mensagens por summary | Sessões com outputs extensos (git logs, diffs) perdem contexto recente após compressão. |
| [#13121](https://github.com/NousResearch/hermes-agent/issues/13121) | Gateway restart perde contexto pré-restart (JSONL vs SQLite mismatch) | Após `hermes gateway restart`, `Continue` não recupera estado, iniciando sessão vazia. |
| [#13081](https://github.com/NousResearch/hermes-agent/issues/13081) | `_reap_orphaned_browser_sessions()` glob pattern não corresponde aos diretórios de socket, causando falha no startup do daemon | Browsers cloud_provider acumulam orphans → startup progressivamente falho. |
| [#7893](https://github.com/NousResearch/hermes-agent/issues/7893) | HTTP 400 Gemini com múltiplas credenciais de autenticação | Impossibilita uso do provider Gemini para usuários Vertex AI. |

#### 🟠 Média Severidade

| # | Bug | Impacto |
|---|-----|---------|
| [#12242](https://github.com/NousResearch/hermes-agent/issues/12242) | JSON inválido em `context_compressor` ao truncar `tool_calls.arguments` (StepFun API) | APIs estritas (StepFun) retornam erro; truncagem produz JSON mal-formado (sem `}` ou `"` de fechamento). |
| [#11884](https://github.com/NousResearch/hermes-agent/issues/11884) | Ink TUI: bare-slug model + provider gera HTTP 404 em api.anthropic.com | TUI não resolve credenciais de provider em tempo de execução. |
| [#11793](https://github.com/NousResearch/hermes-agent/issues/11793) | CLI `--resume` não funciona após `hermes chat -q` (sessão não salva no SQLite) | Sessões single-shot perdem histórico mesmo com `session_id` printed. |
| [#3002](https://github.com/NousResearch/hermes-agent/issues/3002) | NeuTTS setup falha com `No module named pip` | Impossibilita instalação do TTS NeuTTS em venv limpo. |
| [#9086](https://github.com/NousResearch/hermes-agent/issues/9086) | Cron serial execution ignora jobs quando job anterior é longo | Jobs agendados com overlap temporal são silenciosamente perdidos. |
| [#7355](https://github.com/NousResearch/hermes-agent/issues/7355) | Telegram final response chunks perdem `thread_id`, quebrando roteamento em forums | Respostas vazam para thread errada ou General em grupos Telegram. |
| [#12689](https://github.com/NousResearch/hermes-agent/issues/12689) | `file_tools.py` ignora `TERMINAL_CWD` em modo `-w` (worktree isolation) | Operações de arquivo escapam do isolamento, violando segurança do worktree. |
| [#13149](https://github.com/NousResearch/hermes-agent/issues/13149) | Discord: vídeos rejeitados ao invés de processados | Mídia de vídeo descartada silenciosamente no Discord. |

#### 🟡 Baixa Severidade

| # | Bug | Impacto |
|---|-----|---------|
| [#11300](https://github.com/NousResearch/hermes-agent/issues/11300) | Cores yellow hardcoded na TUI ilegíveis em fundos claros | UX degradada em terminais com tema claro. |
| [#12952](https://github.com/NousResearch/hermes-agent/issues/12952) | Custom keepalive transport quebra `openai-codex` backend | Conexões ao `chatgpt.com/backend-api/codex` falham com `APIConnectionError`. |
| [#13177](https://github.com/NousResearch/hermes-agent/issues/13177) | Gemma 4 REAP variant desabilita reasoning no Hermes | Modelo funciona em outros contextos (llama.cpp), mas não através do Hermes. |
| [#13181](https://github.com/NousResearch/hermes-agent/issues/13181) | Integração com OpenCode Go models não é direta | Falta documentação/caminho simples para adicionar modelos customizados. |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features mais solicitadas

| # | Feature |👍| Relevância Estratégica |
|---|---------|---|------------------------|
| [#487](https://github.com/NousResearch/hermes-agent/issues/487) | **Merkle Hash-Chain Audit Trail** para accountability criptográfica | 0 | Alta — demanda corporativa/auditoria |
| [#13065](https://github.com/NousResearch/hermes-agent/issues/13065) | **Native vision support** para modelos com capacidade nativa (GPT-4o, GLM-5V) | 0 | Alta — performance e custo |
| [#12639](https://github.com/NousResearch/hermes-agent/issues/12639) | **Native Google/Vertex AI Provider** (bypass OpenRouter 402/rate limits) | 1 | Alta — resiliência operacional |
| [#11215](https://github.com/NousResearch/hermes-agent/pull/11215) | **Orchestrator Subagents** com spawn recursivo (depth 1-3) | — | Alta — arquiteturas multi-agente |
| [#11425](https://github.com/NousResearch/hermes-agent/issues/11425) | **Skills lifecycle management** (tracking de uso, stale detection, auto-cleanup) | 1 | Média — DX e manutenção |
| [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) | **Brave Search** como backend nativo de busca web | 3 | Média — diversificação de providers |
| [#12188](https://github.com/NousResearch/hermes-agent/issues/12188) | **Docker env variables** para `hermes model` config | 0 | Média — DX containerização |
| [#13174](https://github.com/NousResearch/hermes-agent/pull/13174) | **Native Gemini STT** (multimodal com auditory scene analysis) | — | Média — alternativa a Whisper |
| [#5346](https://github.com/github.com/NousResearch/hermes-agent/issues/5346) | **Shift+Enter newline** no CLI | 6 | Baixa — UX polish |
| [#7992](https://github.com/NousResearch/hermes-agent/issues/7992) | **WhatsApp group behavior controls** (ignore_groups, allowlists) | 0 | Baixa — controle de canal |

### Sinais de roadmap inferidos

1. **Orquestração de agentes** — O PR de subagentes orquestradores (#11215) sugere movimento para arquiteturas de sistemas multi-agente.
2. **Segurança corporativa** — Hash-chain audit trail (#487) e redações de segredo (#9200) indicam foco em compliance.
3. **Diversificação de providers** — Google/Vertex nativo, Brave Search, OpenCode Go revelam estratégia de não dependência do OpenRouter.
4. **Resiliência operacional** — Múltiplos PRs sobre restart recovery, cron inheritance, browser cleanup sugerem maturidade para produção.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Evidência | Severidade |
|-----|----------|------------|
| **Complexidade de setup em Nix/macOS** | #9782 (nix-darwin), #3002 (NeuTTS) | Alta |
| **Instabilidade de providers terceiros** | #7893 (Gemini 400), #12639 (OpenRouter 402) | Alta |
| **Perda de contexto em operações críticas** | #13164 (tool results), #13121 (restart recovery) | Alta |
| **Integração com plataformas chinesas (StepFun, Feishu)** | #12242 (StepFun JSON), #9916, #6969 (Feishu topics) | Média |
| **DX em terminais leves** | #11300 (cores), #5346 (multiline), #11793 (resume) | Média |
| **Gestão de skills acumulados** | #11425 (89+ skills sem lifecycle) | Média |

### Cenários de uso em evidência

- **Agentes em produção com multi-provider:** Usuários relatam necessidade de fallback entre OpenRouter,

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório de Projeto: PicoClaw
**Data de referência:** 2026-04-21  
**Repositório:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
**Analista:** Open Source Project Analyst – AI Agents & Personal Assistants  

---

## 1. Panorama do Dia

O projeto PicoClaw demonstra **atividade intensa e diversificada** nesta data. Foram registradas 13 issues e 114 PRs atualizados nas últimas 24h, com 1 nova release nightly. A comunidade está ativamente reportando bugs críticos — especialmente relacionados ao provider `openai_compat` ( Authorization header ausente) e problemas de estabilidade no gateway e WebUI. Ao mesmo tempo, 20+ PRs de enhancement estão em desenvolvimento, cobrindo multi-usuário, segurança, novos canais e integrações com provedores. O projeto mantém um fluxo saudável de contribuições, embora a quantidade de issues abertas indique demanda por maior atenção em QA e releases estáveis.

---

## 2. Lançamentos

### 🔹 Nightly Build Released

| Item | Detalhes |
|------|----------|
| **Versão** | `v0.2.6-nightly.20260420.6126ede9` |
| **Tipo** | Automated Nightly Build |
| **Commit** | `6126ede9` |
| **Changelog** | [compare/v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) |
| **Aviso** | Build automático — pode ser instável. Uso em produção desaconselhado. |

**Observação:** Esta é uma build automatizada de desenvolvimento. Não há changelog detalhado público, sugerindo que a versão `v0.2.6` ainda não foi finalizada como release estável. **Não há notas de migração** ou breaking changes documentadas para esta nightly.

---

## 3. Progresso do Projeto

### PRs Recentemente Merged/Fechados (7 nas últimas 24h)

| PR | Título | Domínio | Status | Impacto |
|----|--------|---------|--------|---------|
| [#2597](https://github.com/sipeed/picoclaw/pull/2597) | Gateway não inicia com letra maiúscula no model identifier | provider, config | ✅ CLOSED | Corrigido bug crítico que impedia uso de modelos como `Qwen/Qwen3-Coder-30B-A3B-Instruct` |
| [#2584](https://github.com/sipeed/picoclaw/pull/2584) | DeepSeek provider retorna 401 mesmo com API key válida | provider | ✅ CLOSED | Resolvido problema de autenticação com DeepSeek |

**Análise:** Apenas 2 PRs foram closed/merged nas últimas 24h, sugerindo um gargalo no code review ou foco em validação interna. A maioria dos 114 PRs permanece em estado "OPEN", indicando um backlog significativo de contribuições aguardando merge.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | 👍 | Link |
|-------|--------|-------------|-----|------|
| **#2578** | openai_compat provider nunca envia Authorization header em v0.2.6 | **11** | 0 | [GitHub](https://github.com/sipeed/picoclaw/issues/2578) |
| **#1757** | Channel error ao agendar tarefa horária com Telegram | **4** | 0 | [GitHub](https://github.com/sipeed/picoclaw/issues/1757) |
| **#2367** | Título em chinês persiste ao selecionar inglês | **3** | 0 | [GitHub](https://github.com/sipeed/picoclaw/issues/2367) |
| **#2368** | Android app - Model não fica configurado | **3** | 0 | [GitHub](https://github.com/sipeed/picoclaw/issues/2368) |
| **#2513** | Gateway start abnormal | **3** | 0 | [GitHub](https://github.com/sipeed/picoclaw/issues/2513) |

### PRs com Maior Engajamento (20 principais)

| PR | Título | Domínios | Link |
|----|--------|----------|------|
| **#2313** | Multi-User Support, Security Hardening, Skills whitelisting | agent, tool, config, build, docker | [GitHub](https://github.com/sipeed/picoclaw/pull/2313) |
| **#1229** | Prefer OpenAI responses API with fallback | provider | [GitHub](https://github.com/sipeed/picoclaw/pull/1229) |
| **#1261** | Environment sanitization for exec tool | tool, config | [GitHub](https://github.com/sipeed/picoclaw/pull/1261) |
| **#1342** | Enhance OpenAI Provider Robustness | provider | [GitHub](https://github.com/sipeed/picoclaw/pull/1342) |
| **#1666** | Refactor MCP Manager: Process Lifecycle & Resilience | tool, dependencies | [GitHub](https://github.com/sipeed/picoclaw/pull/1666) |

**Análise de Demandas:**
- **Segurança é prioridade clara**: Issue #2578 (header Authorization ausente) e PRs de security hardening (#1261, #2313) dominam discussão
- **Provider compatibility**: Vários PRs focando em robustez do OpenAI-compatible provider e suporte a novos provedores
- **Multi-canal**: Demandas por Telegram, QQ, LINE, Feishu, Email demonstram estratégia de amplo suporte a canais

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (Impacto Alto – Afetam Funcionalidade Core)

| Bug | Descrição | Domínio | Comentários | Severidade |
|-----|-----------|---------|-------------|------------|
| [#2578](https://github.com/sipeed/picoclaw/issues/2578) | **openai_compat provider não envia Authorization header** — API key ignorada silenciosamente em todas as fontes de configuração | provider | 11 | 🔴 CRÍTICO |
| [#2602](https://github.com/sipeed/picoclaw/issues/2602) | **OAuth Authentication Errors** para OpenAI e Antigravity | provider | 0 | 🔴 CRÍTICO |
| [#2598](https://github.com/sipeed/picoclaw/issues/2598) | **WebUI não funciona após upgrade de 0.2.4 para 0.2.6** | channel | 0 | 🔴 CRÍTICO |

### 🟠 Altos (Impacto Significativo)

| Bug | Descrição | Domínio | Comentários |
|-----|-----------|---------|-------------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | Channel error ao usar cron/scheduler com Telegram | channel, cron | 4 |
| [#2368](https://github.com/sipeed/picoclaw/issues/2368) | Android app: modelo fica com status "not configured" mesmo após configuração completa | config | 3 |
| [#2513](https://github.com/sipeed/picoclaw/issues/2513) | Gateway start abnormal com digntalk channel | channel | 3 |
| [#2584](https://github.com/sipeed/picoclaw/issues/2584) | DeepSeek retorna 401 (já closed, aguardando merge) | provider | 2 |

### 🟡 Médios (Impacto Moderado)

| Bug | Descrição | Domínio |
|-----|-----------|---------|
| [#2367](https://github.com/sipeed/picoclaw/issues/2367) | Título de tela em chinês persiste ao selecionar inglês | config |
| [#2471](https://github.com/sipeed/picoclaw/issues/2471) | Não consegue adicionar modelos NVIDIA AI nem Gemini mais recentes | provider, docker |
| [#2600](https://github.com/sipeed/picoclaw/issues/2600) | MCP envia `null` em arguments quando todos são opcionais | tool |

**Padrão Identificado:** A maioria dos bugs afeta **providers** e **configuração**, sugerindo necessidade de:
1. Testes mais rigorosos para autenticação
2. Melhor validação de configuração de modelos
3. Migration guide para upgrades entre versões

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Enhancements Recentes

| Issue/PR | Feature | Domínio | Comentários | Viabilidade |
|----------|---------|---------|-------------|-------------|
| [#2421](https://github.com/sipeed/picoclaw/issues/2421) | **Email como canal nativo** | channel | 2 | Alta demanda para ambientes corporativos/científicos |
| [#1745](https://github.com/sipeed/picoclaw/pull/1745) | **OpenAI-compatible API channel** | channel, config | — | Permitir PicoClaw como backend de API |
| [#1124](https://github.com/sipeed/picoclaw/pull/1124) | **Affine Workspace Integration** | tool, config | — | Busca semântica e por palavra-chave em documentos Affine |
| [#1706](https://github.com/sipeed/picoclaw/pull/1706) | **Channel MQTT** | channel | — | Conectividade IoT e automação |

### 🔮 Sinais de Roadmap

Baseado nas contribuições mais ativas e议论adas:

1. **Segurança robusta**: PR #2313 (Multi-User, Security Hardening, Skills whitelisting) indica direção clara para enterprise readiness
2. **MCP (Model Context Protocol)**: PRs #1666, #2600 mostram maturidade crescente do suporte MCP
3. **Provider diversity**: Adições de Qwen CLI (#1750), Affine (#1124), e melhorias em OpenAI responses API (#1229)
4. **Resiliência**: Fallback mechanisms (#1229), retry/backoff (#1342), connection health checks (#1706)

---

## 7. Resumo de Feedback dos Usuários

### 😤 Dores Principais

| Dor | Descrição | Frequência |
|-----|-----------|------------|
| **Quebra de autenticação em v0.2.6** | openai_compat e DeepSeek não funcionam com API keys válidas | Múltiplos reports |
| **Upgrade problemas** | WebUI quebra ao atualizar de 0.2.4 para 0.2.6 | Vários reports |
| **Configuração de modelos é confusa** | Android app não permite selecionar modelo após configuração | 3+ reports |
| **Gateway instabilidade** | Problemas de inicialização com canais específicos | Reports recorrentes |

### 📊 Cenários de Uso Reportados

- **Agentes pessoais**: Agendamento de tarefas via Telegram com cron
- **Ambientes Linux/Raspberry Pi**: Usuários em Raspbian, Debian, Ubuntu
- **Desenvolvimento**: Integração com Ollama, vLLM para modelos locais
- **Corporativo**: Necessidade de email como canal, multi-usuário

### 😊 Aspectos Positivos

- Comunidade ativa reportando bugs com detalhes técnicos (HTTP traces, config JSON)
- Contribuições diversas de novos developers (PRs de LINE bot SDK, QQ, MQTT)
- Attempts de security hardening demonstram maturidade

---

## 8. Backlog que Merece Atenção

### ⏰ Issues Sem Resposta / Sem Atividade Recente

| Issue | Título | Criado | Atualizado | Dias Inativa | Prioridade |
|-------|--------|--------|------------|--------------|------------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | Channel error com cron (Telegram) | 2026-03-18 | 2026-04-20 | 34 dias | 🟠 ALTA |
| [#2367](https://github.com/sipeed/picoclaw/issues/2367) | Título em chinês (i18n bug) | 2026-04-05 | 2026-04-20 | 16 dias | 🟡 MÉDIA |
| [#2368](https://github.com/sipeed/picoclaw/issues/2368) | Android model not configured | 2026-04-05 | 2026-04-20 | 16 dias | 🟠 ALTA |
| [#500](https://github.com/sipeed/picoclaw/pull/500) | LINE bot SDK refactor (PR aberto desde Feb) | 2026-02-19 | 2026-04-20 | 60 dias | 🟡 MÉDIA |

### 🚨 PRs Críticos Aguardando Merge

| PR | Título | Criado | Domínio | Impacto |
|----|--------|--------|---------|---------|
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | Multi-User Support, Security Hardening | 2026-04-03 | security, multi-tenant | **Enterprise readiness** |
| [#1261](https://github.com/sipeed/picoclaw/pull/1261) | Environment sanitization for exec tool | 2026-03-09 | security | **Secret leakage prevention** |
| [#1666](https://github.com/sipeed/picoclaw/pull/1666) | MCP Manager refactor | 2026-03-17 | tool, reliability | **Stabilidade MCP** |
| [#1229](https://github.com/sipeed/picoclaw/pull/1229) | OpenAI responses API fallback | 2026-03-08 | provider | **GPT-5 compatibility** |

### 📋 Recomendações de Priorização

1. **CRÍTICO**: Resolver #2578 (Authorization header) antes da próxima release estável
2. **ALTA**: Investigar e corrigir problemas de upgrade #2598
3. **ALTA**: Fazer code review do PR #2313 para estabilizar funcionalidades de segurança
4. **MÉDIA**: Reduzir backlog de PRs stale (>30 dias sem ação)
5. **MÉDIA**: Implementar i18n consistente (#2367)

---

## Métricas Resumidas

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues abertas/ativas (24h) | 11 | ➡️ Estável |
| Issues fechadas (24h) | 2 | ➡️ Estável |
| PRs abertos | 107 | 📈 Acima da média |
| PRs merged/fechados (24h) | 7 | ➡️ Estável |
| Releases (24h) | 1 (nightly) | ➡️ Estável |
| Bugs críticos reportados | 3 | 📈 Acima da média |
| Enhancements ativos | 20+ | 📈 Crescente |

---

**Relatório gerado em:** 2026-04-21  
**Próxima atualização recomendada:** 2026-04-22 (monitorar resolução de #2578)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-04-21

---

## 1. Panorama do dia

O IronClaw apresenta **alta atividade de manutenção** nesta segunda-feira, com 50 issues e 50 PRs atualizados nas últimas 24h. A produção está concentrada em **bug fixes derivados dos Bug Bashes de 4/16 e 4/20**, com múltiplos PRs de correção merged e outros em pipeline. Não houve releases formais no período. A saúde geral do staging é estável, mas a quantidade de issues de regressão — especialmente em integrações (Telegram, OAuth, WASM) — indica necessidade de coverage adicional em testes automatizados antes da promoção a produção. A equipe demonstra foco em qualidade (regression tests incluídos em praticamente todo PR).

---

## 2. Lançamentos

**Nenhum release formal** registrado nas últimas 24h. O staging CI realizouseu promotion automático (branch `staging-promote/336bdb1e-24684983862`) ao final do dia. A versão referenciada nos bugs bash é `v0.25.0` no staging.

> Link: [Staging promotion PR #2758](https://github.com/nearai/ironclaw/pull/2758)

---

## 3. Progresso do Projeto

### PRs merged/fechados hoje (destaque)

| # | PR | Escopo | Impacto |
|---|----|--------|---------|
| [#2751](https://github.com/nearai/ironclaw/pull/2751) | `fix(gateway): keep engine threads out of chat sidebar` | `channel/web` | Engine V2 threads removidos da sidebar de chat — UX mais limpa |
| [#2755](https://github.com/nearai/ironclaw/pull/2755) | `fix(engine-v2): recover flattened tool calls` | `llm` | Recuperação de tool calls flattenados + remoção de marcadores internos vazados ao usuário |
| [#2747](https://github.com/nearai/ironclaw/pull/2747) | `fix(bridge): sanitize orchestrator failures before showing them to users` | `agent` | Erros técnicos (502, tracebacks) agora exibem mensagens amigáveis ao usuário |
| [#2744](https://github.com/nearai/ironclaw/pull/2744) | `fix(tests): close staging test backlog — full suite green` | `tool/builtin` | Suite Rust: 12→0 falhas; Playwright e2e: 14+1 erro → 0. Base sólida para promoção |
| [#2632](https://github.com/nearai/ironclaw/pull/2632) | `Hide external threads from browser active thread restore` | `channel/web` | Threads externos não reabrem como chat ativo no browser |
| [#2630](https://github.com/nearai/ironclaw/pull/2630) | `Unlock REPL stdin when auth is required` | `channel/cli` | REPL aceita token após estado auth-required |

### PRs em aberto com alto risco/size (pipeline ativo)

| # | PR | Escopo | Risco | Destaque |
|---|----|--------|-------|----------|
| [#2754](https://github.com/nearai/ironclaw/pull/2754) | `feat(web): add self-service user secrets and durable binding approvals` | `secrets` | **high** | CRUD de secrets + UI em Settings + aprovações persistentes |
| [#2746](https://github.com/nearai/ironclaw/pull/2746) | `fix(auth): prevent OAuth URL parameter truncation` | `auth`, `extensions` | **medium** | Substitui URL builders manuais por `url::Url::query_pairs_mut()` — fim de classe de bugs |
| [#2753](https://github.com/nearai/ironclaw/pull/2753) | `fix: bug bash 4/16 triage — error boundary, TEE secrets, pairing, rehydration` | `llm`, `secrets` | **medium** | 6 fixes independentes em um PR (timeout configurável, TEE secrets, pairing, rehydration) |
| [#2757](https://github.com/nearai/ironclaw/pull/2757) | `fix(engine-v2): recover flattened tool calls` | `llm` | **low** | Версія ідентифікації do #2755 (mesmo objetivo, branches distintos) |
| [#2367](https://github.com/nearai/ironclaw/pull/2367) | `[codex] Tighten auth flows and unify live canary coverage` | `agent`, `extensions` | **medium** | Consolidação de `src/auth/`, correção de edge cases de redirect |
| [#2418](https://github.com/nearai/ironclaw/pull/2418) | `feat: slim mode runtime, Dockerfiles, and /health route` | `worker`, `config` | **medium** | Redução de resource footprint + runtime configurável + health endpoint |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | `feat: add Aliyun Coding Plan support` | `llm` | **low** | Novo provider `AliyunProvider` + DashScope + suporte HTTP/1.1 |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) | `feat: Abound demo — Responses API, credential injection, skills, guardrails` | `channel/wasm` | **high** | Responses API production-ready + credential injection + Abound integration |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (por comentários)

| # | Título | Comentários | Escopo | Análise |
|---|--------|-------------|--------|---------|
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | [QA] Google Sheets OAuth blocked: Error 400 invalid_request | **10** | `scope: secrets`, `scope: extensions` | OAuth Google Sheets quebrado em staging — bloqueia integração crítica |
| [#1537](https://github.com/nearai/ironclaw/issues/1537) | WASM credential injection fails on NEAR AI hosted TEE | **4** | `scope: tool/wasm`, `scope: secrets` | Secrets armazenados mas não injetados no runtime TEE |
| [#846](https://github.com/nearai/ironclaw/issues/846) | `onboard` fails with "Failed to save settings to database" | **4** | `scope: db`, `scope: setup` | Onboarding quebra na etapa final de persistência |
| [#2731](https://github.com/nearai/ironclaw/issues/2731) | [Bug Bash 4/20] Telegram messages as separate Engine conversations | **3** | `bug_bash_P1` | Problema de threading no Telegram — impacto P1 |
| [#2411](https://github.com/nearai/ironclaw/issues/2411) | [QA] Telegram bot token save action does nothing | **3** | `scope: channel/web` | Ação de salvar token Telegram não persiste |
| [#2721](https://github.com/nearai/ironclaw/issues/2721) | Engine V2 quality: Milestone 0 + multi-route execution | **2** | `scope: agent` | Epic de refatoração do Engine V2 — single path vs multi-route |

**Análise:** O tema dominante são **integrações OAuth/secrets** (Google Sheets, Linear MCP) e **Telegram como canal** (threading, token save, message delivery). Isso sugere que o onboarding de canais e a gestão de credenciais são os principais pontos de fricção para usuários.

---

## 5. Bugs e Estabilidade

### Por severidade (P1 = crítico, P2 = importante)

#### 🔴 P1 — Require atenção imediata
| # | Título | Area | Status |
|---|--------|------|--------|
| [#2731](https://github.com/nearai/ironclaw/issues/2731) | Telegram messages rendered as separate Engine conversations | `channel/wasm` | OPEN |
| [#2732](https://github.com/nearai/ironclaw/issues/2732) | Assistant suggests Brave Search API instead of using internal NEAR search | `tool/wasm` | OPEN |
| [#2580](https://github.com/nearai/ironclaw/issues/2580) | Agent claims Telegram message sent but no message is delivered | `channel/wasm` | CLOSED |
| [#2581](https://github.com/nearai/ironclaw/issues/2581) | Chain-of-thought leaked to user instead of final response | `agent` | OPEN |
| [#2584](https://github.com/nearai/ironclaw/issues/2584) | Internal system files visible in app UI | `channel/web` | OPEN |
| [#2736](https://github.com/nearai/ironclaw/issues/2736) | Failed mission creates runaway threads and inflates Missions count | `agent` | OPEN |
| [#2737](https://github.com/nearai/ironclaw/issues/2737) | Image upload does not trigger any action after file selection | `channel/web` | OPEN |
| [#2752](https://github.com/nearai/ironclaw/issues/2752) | `onboard` throws db error on provider step | `setup` | OPEN |

#### 🟡 P2 — Importante, em resolução
| # | Título | Area | Status |
|---|--------|------|--------|
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | Google Sheets OAuth blocked (Error 400) | `extensions` | OPEN |
| [#2408](https://github.com/nearai/ironclaw/issues/2408) | Context length overflow: input exceeds 200K tokens | `llm` | OPEN |
| [#2543](https://github.com/nearai/ironclaw/issues/2543) | Linear MCP OAuth not recognized after successful setup | `tool/mcp` | OPEN |
| [#2535](https://github.com/nearai/ironclaw/issues/2535) | Routine detail panel and thread detail rendering broken | `channel/web` | OPEN |
| [#2730](https://github.com/nearai/ironclaw/issues/2730) | Duplicate confirmation message after Telegram connect | `channel/web` | OPEN |
| [#2729](https://github.com/nearai/ironclaw/issues/2729) | Version mismatch displayed after connecting Google Docs | `extensions` | OPEN |
| [#1994](https://github.com/nearai/ironclaw/issues/1994) | LLM provider returns 502 Bad Gateway during active chat | `llm` | OPEN |
| [#2751](https://github.com/nearai/ironclaw/issues/2751) — fixed | Orchestrator surfaces raw 502 errors to user | `orchestrator` | CLOSED |

**Recuperado hoje:** O PR [#2747](https://github.com/nearai/ironclaw/pull/2747) resolveu a exibição de erros 502 brutos ao usuário — regressão crítica mitigada.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Demanda orgânica (issues + PRsEpic)

| # | Título | Escopo | Sinais |
|---|--------|--------|--------|
| [#2721](https://github.com/nearai/ironclaw/issues/2721) | Engine V2 quality: Milestone 0 + multi-route execution | `agent` | Epic em design — Engine V2 precisa de caminhos alternativos ao CodeAct único |
| [#2599](https://github.com/nearai/ironclaw/issues/2599) | Epic: Enforce gateway feature boundaries, crate guardrails, and crate-owned E2E | `scope: web` | Refatoração de arquitetura web — bounded feature slices |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Add Aliyun Coding Plan support | `llm` | Expansão de providers — China market |
| [#2418](https://github.com/nearai/ironclaw/pull/2418) | Slim mode runtime + /health route | `worker` | Deploy multi-tenant otimizado |
| [#1759](https://github.com/nearai/ironclaw/pull/1759) | Abound demo + Responses API + credential injection | `secrets` | Demo production-ready + sistema de secrets |

**Direção inferred:** O roadmap aponta para (1) **multi-provider LLM** (Aliyun), (2) **Engine V2 com multi-route execution** para reduzir custo, (3) **sistema de secrets/self-service** com aprovações duráveis (#2754), e (4) **arquitetura de frontend em bounded slices** com E2E crate-owned (#2599).

---

## 7. Resumo de Feedback dos Usuários

### Dores recorrentes identificadas

| Dor | Ocorrências | Evidência |
|-----|-------------|-----------|
| **OAuth de integrações não funciona** (Google Sheets, Linear MCP) | 3+ reports | [#2229](https://github.com/nearai/ironclaw/issues/2229), [#2543](https://github.com/nearai/ironclaw/issues/2543) |
| **Telegram é instável como canal** (token não salva, mensagens não entrega, threading errado) | 5+ reports | [#2731](https://github.com/nearai/ironclaw/issues/2731), [#2580](https://github.com/nearai/ironclaw/issues/2580), [#2411](https://github.com/nearai/ironclaw/issues/2411) |
| **Onboarding quebra** (db errors no `onboard`) | 2 reports | [#846](https://github.com/nearai/ironclaw/issues/846), [#2752](https://github.com/nearai/ironclaw/issues/2752) |
| **Erros internos vazam ao usuário** (502, tracebacks, chain-of-thought) | 4 reports | [#2546](https://github.com/nearai/ironclaw/issues/2546) (CLOSED), [#2581](https://github.com/nearai/ironclaw/issues/2581) |
| **Missions criam threads órfãos e distorcem contadores** | 1 report | [#2736](https://github.com/nearai/ironclaw/issues/2736) |

### Cenários de uso emergentes

- **Invoice parsing**: usuário tenta usar bot para parsear PDF invoice, mas o bot chama API errada (ConvertKit) — indica gap no tool selection logic ([#2287](https://github.com/nearai/ironclaw/issues/2287))
- **Slack onboarding dead-end**: usuário chega em "Configured/Awaiting Pairing" sem caminho visível de recuperação ([#1839](https://github.com/nearai/ironclaw/issues/1839))
- **Image attachments não funcionam**: chat composer paperclip não dispara upload — UX quebrada ([#2737](https://github.com/nearai/ironclaw/issues/2737))

---

## 8. Backlog que Merece Atenção

### Issues com engajamento mas sem movimento claro

| # | Título | Criado | Atualizado | Comentários | Observação |
|---|--------|--------|------------|-------------|-----------|
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | Google Sheets OAuth Error 400 | 2026-04-10 | 2026-04-20 | **10** | 11 dias sem resolução — bloqueia integração |
| [#1537](https://github.com/nearai/ironclaw/issues/1537) | WASM credential injection fails on TEE | 2026-03-21 | 2026-04-20 | **4** | 31 dias — segurança crítica (TEE secrets não injetados) |
| [#846](https://github.com/nearai/ironclaw/issues/846) | `onboard` fails on db save | 2026-03-10 | 2026-04-20 | **4** | 42 dias — onboarding quebrado |
| [#1997](https://github.com/nearai/ironclaw/issues/1997) | Add IronClaw Slack App to marketplace | 2026-04-03 | 2026-04-20 | **2** | 18 dias — receita bloqueada |
| [#1839](https://github.com/nearai/ironclaw/issues/1839) | Slack pairing can dead-end | 2026-03-31 | 2026-04-20 | **0** | 21 dias — UX dead-end sem next step |

### PRs em aberto há >7 dias sem activity

| # | Título | Criado | Size | Risk | Nota |
|---|--------|--------|------|------|------|
| [#2367](https://github.com/nearai/ironclaw/pull/2367) | Tighten auth flows + live canary | 2026-04-12 | XL | medium | 9 dias — impacta auth system inteiro |
| [#1759](https://github.com/nearai/ironclaw/pull/1759) | Abound demo + credential injection | 2026-03-30 | XL | high | 22 dias — demo completo em staging |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Aliyun Coding Plan support | 2026-03-20 | XL | low | 32 dias — mercado China |

---

## Indicadores de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (2026-04-21)

## 1. Panorama do dia

O CoPaw demonstra atividade excepcionalmente alta hoje, com **50 PRs** e **42 issues** atualizadas nas últimas 24h. O projeto encontra-se em ciclo de desenvolvimento intenso, evidenciado pela publicação da release **v1.1.3-beta.1** com melhorias no sistema de plugins/console. A base de contributors está ativa tanto em correções críticas (segurança, estabilidade cross-platform) quanto em funcionalidades de maior escopo (backup/restore, semantic skill routing, memory rebuild). O volume de issues fechadas (15) e PRs merged (34) sugere uma equipe de review高效的 em processar contribuciones. Nenhum incidente de segurança crítico está em aberto, mas dois bugs envolvem potenciais vulnerabilidades (auth bypass, shell evasion).

---

## 2. Lançamentos

### v1.1.3-beta.1

**Link:** https://github.com/agentscope-ai/QwenPaw/pull/3524

| Mudança | Autor | Área |
|---------|-------|------|
| `chore(version): bumping version to 1.1.3b1` | @xieyxclack | Infra |
| Console/plugin system enhancement + docs | @zhaozhuang521 | Frontend |
| `enhance(plugins): enhance console plugin system` | @zhijianma | Frontend/Core |

**Análise:** Esta release concentra-se em melhorias no sistema de plugins e na interface Console do projeto. A adição de documentação para o sistema de plugins indica preparação para expansão do ecossistema de extensions. Recomenda-se que usuários da versão anterior consultem a documentação atualizada em https://qwenpaw.agentscope.io/docs/plugins antes de atualizar.

**Breaking Changes:** Nenhuma identificada nesta release. Compatibilidade com versões anteriores mantida.

**Path de migração:** Atualização direta via script de instalação. Usuários Windows devem verificar path `.copaw` → `.qwenpaw` conforme issue #3598.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Significativas (últimas 24h)

| PR | Tipo | Impacto | Link |
|----|------|---------|------|
| #3622 `fix: fix macos desktop build` | Bug Fix | **Alta** — Corrige build quebrado para macOS | https://github.com/agentscope-ai/QwenPaw/pull/3622 |
| #3534 `feat(backup): support backup and restore` | Feature | **Alta** — Sistema de backup zip completo | https://github.com/agentscope-ai/QwenPaw/pull/3534 |
| #2950 `fix(windows): suppress CMD console window` | Bug Fix | **Alta** — Remove popups disruptivos no Windows | https://github.com/agentscope-ai/QwenPaw/pull/2950 |
| #3400 `feat(security): add shell evasion guard` | Security | **Crítica** — Proteção contra shell injection | https://github.com/agentscope-ai/QwenPaw/pull/3400 |
| #3616 `fix (console): fix search in the skill page` | Bug Fix | **Média** — Corrige comportamento de busca | https://github.com/agentscope-ai/QwenPaw/pull/3616 |
| #3585 `feat(telegram): keep typing indicator` | UX | **Média** — Melhor feedback visual Telegram | https://github.com/agentscope-ai/QwenPaw/pull/3585 |
| #3614 `fix(DingTalk): bot_prefix not applied` | Bug Fix | **Média** — Corrige prefix em respostas webhook | https://github.com/agentscope-ai/QwenPaw/pull/3614 |
| #3620 `chore(version): bumping version to 1.1.3b2` | Infra | **Baixa** — Prepara próxima release | https://github.com/agentscope-ai/QwenPaw/pull/3620 |

### Destaques de Evolução Técnica

**#3534 — Sistema de Backup/Restore:** Adiciona capacidade de snapshot e recovery via `.zip` sem operações manuais de arquivo. Backend em `src/qwenpaw/backup/` com API pública limpa. Resolve dor recorrente de usuários Docker/ZimaOS.

**#3400 — Shell Evasion Guardian:** Implementa `ShellEvasionGuardian` com checagem quote-aware para patterns de obfuscation em `execute_shell_command`. Mitiga vetores de ataque via command substitution e locale quoting tricks.

**#2950 — Supressão de CMD no Windows:** Resolve issue #2933 onde execução de shell via `execute_shell_command` causava popup de CMD invasivo em tela cheia, prejudicando fluxo de trabalho.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Comentários | Link |
|-------|------|-------------|------|
| #2291 "Help Wanted: Open Tasks" | Meta/Contrib | **58** | https://github.com/agentscope-ai/QwenPaw/issues/2291 |
| #3356 "WORKING_DIR após upgrade" | Bug | **20** | https://github.com/agentscope-ai/QwenPaw/issues/3356 |
| #2953 "wrong info after copaw app start" | Bug | **6** | https://github.com/agentscope-ai/QwenPaw/issues/2953 |
| #3582 "Localhost auth bypass broken" | Security/Bug | **5** | https://github.com/agentscope-ai/QwenPaw/issues/3582 |

### Análise das Demandas

**#2291 — Contribuição Aberta:** Issue "Help Wanted" com 58 comentários demonstra que o projeto está ativamente buscando contribuições externas. Lista de tarefas com prioridades P0-P2 permite onboarding estruturado para novos contribuidores. Sinal saudável de comunidade.

**#3356 — Migration .copaw → .qwenpaw:** Issue com 20 comentários indica problema significativo de migration após rebranding CoPaw→QwenPaw. WORKING_DIR ainda aponta para diretório antigo, causando escrita em `.copaw` ao invés de `.qwenpaw`. Afeta usuários que fizeram upgrade limpo (sem migração manual). Mais de 50 usuários reagiram (watching) — prioridade alta.

**#3582 — Auth Bypass Quebrado:** Documentation promete bypass de auth para `127.0.0.1`/`::1`, mas requests retornam 401. Inconsistência entre docs e implementação causa confusão em ambientes de desenvolvimento. Potencial risco de segurança se bypass estiver implementado de forma parcial.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por severidade)

#### 🔴 Críticos (potencial crash/data loss)
| Issue | Severidade | Descrição | Link |
|-------|-----------|-----------|------|
| #3568 "YAML inválido causa crash completo" | 🔴 Alta | Skill com YAML malformado em SKILL.md causa crash total do QwenPaw, afetando TODAS as mensagens | https://github.com/agentscope-ai/QwenPaw/issues/3568 |
| #3628 "企业微信截图 PNG não processa" | 🔴 Alta | Screenshots via WeCom PNG falham em识别 mas funcionam no console direto | https://github.com/agentscope-ai/QwenPaw/issues/3628 |

#### 🟡 Médios (funcionalidade degradada)
| Issue | Severidade | Descrição | Link |
|-------|-----------|-----------|------|
| #3356 "WORKING_DIR aponta .copaw" | 🟡 Média | Migration incomplete causa escrita em diretório errado | https://github.com/agentscope-ai/QwenPaw/issues/3356 |
| #3573 "cron channel=weixin KeyError" | 🟡 Média | Cron task com channel weixin lança KeyError em runtime | https://github.com/agentscope-ai/QwenPaw/issues/3573 |
| #3564 "常中断 (frequentemente interrompido)" | 🟡 Média | Interrupções frequentes não especificadas | https://github.com/agentscope-ai/QwenPaw/issues/3564 |
| #3600 "前端图片短暂显示后404" | 🟡 Média | Imagens no frontend desaparecem após breve display | https://github.com/agentscope-ai/QwenPaw/issues/3600 |
| #3578 "QwenPaw白板" | 🟡 Média | Interface mostra apenas tela branca (blank screen) | https://github.com/agentscope-ai/QwenPaw/issues/3578 |

#### 🟢 Menores/UX
| Issue | Severidade | Descrição | Link |
|-------|-----------|-----------|------|
| #2953 "wrong info after copaw app start" | 🟢 Baixa | Mensagem informativa incorreta ao iniciar | https://github.com/agentscope-ai/QwenPaw/issues/2953 |
| #3613 "send_file_to_user erro API" | 🟢 Baixa | File send causa crash em next API call | https://github.com/agentscope-ai/QwenPaw/issues/3613 |

### Análise de Estabilidade

**#3568 — Crash por YAML inválido:** Bug crítico onde parsing de SKILL.md malformado crasha todo o sistema. Diferente de graceful degradation, todo o message handling falha. Recomendamos priorizar hotfix. Workaround: validar YAML manualmente antes de instalar skills.

**#3578 — Blank Screen:** Usuários Windows reportam interface completamente branca. Dados de debug indicam problema no renderer, não no backend. Verificar logs em modo debug para diagnóstico.

**Tendencia:** 3 de 9 bugs são específicos de Windows (CRUD, screenshots, file paths com Unicode), sugerindo plataforma com maior surface area para problemas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Feature Requests Ativas

| Request | Categoria | Comentários | Link |
|---------|-----------|-------------|------|
| #3593 "execute_shell_command timeout configurável" | Agent Config | **2** | https://github.com/agentscope-ai/QwenPaw/issues/3593 |
| #3516 "引入Hermes理念 para auto-evolução" | AI/Agent | **2** | https://github.com/agentscope-ai/QwenPaw/issues/3516 |
| #3627 "UI estilo Claude Code" | UI/UX | **1** | https://github.com/agentscope-ai/QwenPaw/issues/3627 |
| #3623 "任务移交 + multi-agent feedback" | Multi-agent | **1** | https://github.com/agentscope-ai/QwenPaw/issues/3623 |
| #3621 "Pass WeChat sender_id ao agent" | Channel/WeChat | **1** | https://github.com/agentscope-ai/QwenPaw/issues/3621 |
| #3586 "定时任务可否不用/approve" | Cron/Tasks | **2** | https://github.com/agentscope-ai/QwenPaw/issues/3586 |

### PRs em Desenvolvimento (Under Review)

| PR | Feature | Status | Link |
|----|---------|--------|------|
| #2904 "Add plan mode" | Agent Planning | Under Review | https://github.com/agentscope-ai/QwenPaw/pull/2904 |
| #3117 "Semantic skill routing" | Skills/Embedding | Need discussions | https://github.com/agentscope-ai/QwenPaw/pull/3117 |
| #3548 "Rebuild memory & context" | Memory | Under Review | https://github.com/agentscope-ai/QwenPaw/pull/3548 |
| #3599 "Per-agent model assignment UI" | UI/Agents | Open | https://github.com/agentscope-ai/QwenPaw/pull/3599 |
| #3629 "Progress observing hook + PlanNotebook" | Observability | Open | https://github.com/agentscope-ai/QwenPaw/pull/3629 |
| #3556 "browser_args + executable_path" | Browser | Under Review | https://github.com/agentscope-ai/QwenPaw/pull/3556 |

### Sinais de Roadmap

1. **Plan Mode Integration:** PR #2904 integra `AgentScope PlanNotebook` permitindo `/plan <task>` via console e canais (DingTalk, Feishu). Estratégia consistente com feature de "agente evolutivo" solicitada em #3516.

2. **Semantic Skill Routing:** PR #3117 implementa embedding-based retrieval para skills, reduzindo context token consumption. Soluciona problema de escala quando usuários instalam muitas skills.

3. **Memory Module Rebuild:** PR #3548 alinha com interface As2.0 usando prompt+tools como core interface, com suporte a backend switching. Backward compatible com legacy Reme interface.

4. **Per-Agent Model Assignment:** PR #3599 adiciona coluna de modelo na UI de Agents, permitindo assignação de LLM específico por agente via dropdown Provider→Model.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Frequência | Impacto | Issue |
|-----|------------|---------|-------|
| Upgrade migration falha (`.copaw`→`.qwenpaw`) | Alta | **Alta** | #3356, #3598 |
| Crash total por YAML inválido em skill | Alta | **Crítica** | #3568 |
| Console popup Windows disruptivo | Média | **Média** | #2950 (fix merged) |
| Blank screen em Windows | Média | **Alta** | #3578 |
| Imagens WeChat PNG não processam | Média | **Média** | #3628 |
| Cron tasks necessitam approve manual | Média | **Média** | #3586 |
| Auth bypass localhost não funciona | Média | **Média** | #3582 |

### Padrões de Uso Emergent

1. **Multi-agent orchestration:** Usuários solicictam features de transferência de tarefas entre agentes com feedback contextual (#3623), sugerindo uso em workflows complexos.

2. **Container deployment:** Muitos reports envolvem Docker/ZimaOS (#2629, #3211), indicando adoção em ambientes server-side.

3. **Cross-platform requirements:** Windows surface area para bugs significativamente maior que macOS/Linux.

### Satisfação/Insatisfação

**Positivo:**
- Sistema de plugins em evolução rápida
- Console UI recebendo melhorias constantes
- Backup system adicionado (demanda antiga)

**Negativo:**
- Migration post-rebrand problemática
- Sistema de canais (WeChat, cron) instável
- UI ainda percebida como "não profissional" (#3627)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Needs Triage

| Issue | Age | Status | Descrição | Link |
|-------|-----|--------|-----------|------|
| #2629 "upgrade lose openrouter config" | ~20 dias | Closed | Config reset em upgrade (pode ter regressado) | https://github.com/agentscope-ai/QwenPaw/issues/2629 |
| #2599 "custom model provider openrouter fails" | ~21 dias | Closed | Provider custom não funciona | https://github.com/agentscope-ai/QwenPaw/issues/2599 |
| #3211 "llama.cpp GLIBC version mismatch" | ~11 dias | Open | Docker image falha com GLIBC | https://github.com/agentscope-ai/QwenPaw/issues/3211 |
| #3002 "OpenAI Responses API incompatible" | ~14 dias | Open | Azure OpenAI 400 error | https://github.com/agentscope-ai/QwenPaw/issues/3002 |
| #2953 "wrong info after start" | ~16 dias | Open | Info incorreta pós-start | https://github.com/agentscope-ai/QwenPaw/issues/2953 |

### PRs Necessitando Review/Atenção

| PR | Age | Status | Descrição | Link |
|----|------|--------|-----------|------|
| #3117 "semantic skill routing" | ~13 dias | Need discussions | Embedding-based skill filtering | https://github.com/agentscope-ai/QwenPaw/pull/3117 |
| #3589 "acp: adopt official sdk" | ~1 dia | Under Review | ACP integration upgrade | https://github.com/agentscope-ai/QwenPaw/pull/3589 |
| #2904 "plan mode" | ~18 dias | Under Review | PlanNotebook integration | https://github.com/agentscope-ai/QwenPaw/pull/2904 |

### Priorização Recomendada

1. **🔴 Alta Prioridade:** #3568 (YAML crash), #3356/#3598 (migration), #3400 (shell security merged - verificar se aplicado em release)
2. **🟡 Média Prioridade:** #3211 (GLIBC Docker), #3002 (Azure OpenAI), #3582 (auth bypass)
3. **🟢 Baixa Prioridade:** #3627 (UI styling), #3593 (shell timeout)

---

## Métricas Resumidas (2026-04-21)

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues abertas/ativas | 27 | Neutra |
| Issues fechadas (24h) | 15 | ↑ Positiva |
| PRs abertos | 16 | — |
| PRs merged/closed (24h) | 34 | ↑↑ Alta |
| Releases (24h) | 1 | — |
| Comentários em issues | ~130+ | ↑ Alta |
| Engajamento (closed ratio) |

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
## Data: 2026-04-21

---

## 1. Panorama do dia

O projeto ZeroClaw apresenta **alta atividade nas últimas 24h** com 95 eventos totais (45 issues + 50 PRs). Não houve lançamento de nova versão — o projeto está em ciclo de preparação para a v0.7.4 conforme tracking issue #5877. Observa-se uma concentração significativa de PRs abertos (26) sendo revisados simultaneamente, muitos deles relacionados à infraestrutura de CI/CD, segurança de plugins WASM e expansão de providers (Gemini, Inworld, Groq). A comunidade está engajada com múltiplos RFCs em discussão, particularmente o RFC de Microkernel (#5574) que foi aceito e está em transição para v1.0. O estado geral é de **saúde ativa**, com trabalho substancial em qualidade, documentação e robustez do sistema.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto está em preparação para **v0.7.4**, com milestone tracking em [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877). Items abertos incluem:
- `#5910` — land review-session skill, retire github-pr-...

**Nota histórica:** Houve um release emergency v0.7.3 para corrigir "broken tags blowout", o que justifica o skip para v0.7.4.

---

## 3. Progresso do Projeto

PRs relevantes merged/fechadas nas últimas 24h:

| PR | Descrição | Impacto |
|-----|-----------|---------|
| [#5552](https://github.com/zeroclaw-labs/zeroclaw/pull/5552) | **fix(onboard): use container-aware URLs for local AI providers** (CLOSED, risk:high) | Corrige URLs `localhost` que não funcionam dentro de containers Docker — resolução crítica para onboarding |
| [#5841](https://github.com/zeroclaw-labs/zeroclaw/pull/5841) | **feat(config): allow Composio credentials via env vars** | Permite `ZEROCLAW_COMPOSIO_API_KEY` como configuração, expandindo suporte a tool integrations |
| [#5730](https://github.com/zeroclaw-labs/zeroclaw/pull/5730) | **feat(providers): add Manifest Router as provider option** | Adiciona novo provider OpenAI-compatible com default `localhost:3001` |

**Avanços em infraestrutura:**
- Preparação para WASM plugin bridge (Phase 2 D2) em [#5912](https://github.com/zeroclaw-labs/zeroclaw/issues/5912)
- Duas issues de segurança para plugins WASM abertas: SSRF protection ([#5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918)) e env var allowlist ([#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919))
- Voice foundation em [#5942](https://github.com/zeroclaw-labs/zeroclaw/pull/5942) — Vad trait + VoiceEvent protocol para full-duplex

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

1. **[#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574)** — *RFC: Intentional Architecture — Microkernel Transition (v0.7.0 → v1.0.0)*
   - **9 comentários** | Closed | Autor: WareWolf-MoonWall
   - Documento estrutural para reescrita do core. Status: accepted — indica que a transição está em curso.

2. **[#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)** — *Docker full image com todos os feature flags*
   - **7 comentários** | Open | 👍 3 | Autor: LaurensBosscher
   - Demanda recorrente: barreira de entrada alta para usuários não-técnicos que precisam de features como WhatsApp habilitadas.

3. **[#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348)** — *Web dashboard not available*
   - **5 comentários** | Closed | Autor: JerryVDP
   - Bug de Severidade S1 resolvido — dashboard exigia build manual (`cd web && npm ci && npm run build`).

4. **[#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)** — *v0.7.4 milestone tracking*
   - **5 comentários** | Open | Autor: WareWolf-MoonWall
   - Central de coordenação para o próximo release.

5. **[#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)** — *RFC: Multi-agent UX flow*
   - **3 comentários** | Open | Em período de discussão (7 dias)
   - Design de UX para interação multi-agente — indica direção estratégica do produto.

### RFCs aceitos (todos Closed com status:accepted)
- [#5579](https://github.com/zeroclaw-labs/zeroclaw/issues/5579) — CI/CD Pipeline
- [#5577](https://github.com/zeroclaw-labs/zeroclaw/issues/5577) — Governance
- [#5576](https://github.com/zeroclaw-labs/zeroclaw/issues/5576) — Documentation Standards
- [#5653](https://github.com/zeroclaw-labs/zeroclaw/issues/5653) — Code Health & Production Readiness
- [#5615](https://github.com/zeroclaw-labs/zeroclaw/issues/5615) — Contribution Culture

**Análise:** A comunidade está altamente engajada em governança e arquitetura. A maturação do framework de RFCs demonstra profissionalização do projeto.

---

## 5. Bugs e Estabilidade

### Severidade S1 (workflow blocked) — 4 issues
| Issue | Descrição | Link |
|-------|-----------|------|
| #5941 | No tool call found — todas as providers falham | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5941) |
| #5348 | Web dashboard unavailable | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5348) *(CLOSED)* |
| #5815 | Provider ignora llamacpp object | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) |
| #4022 | Skills install from clawhub não funciona | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/4022) *(CLOSED)* |

### Severidade S0 (data loss / security risk)
| Issue | Descrição | Link |
|-------|-----------|------|
| #5847 | Document usage of `gateway.web_dist_dir` / `ZEROCLAW_WEB_DIST_DIR` | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) |

### Severidade S2 (degraded behavior)
| Issue | Descrição | Link |
|-------|-----------|------|
| #4857 | Cron UI blocked por "security restrictions" | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/4857) |
| #5816 | Cron agent memories acumulam exponencialmente causando context overflow | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5816) *(CLOSED)* |

### Arquitetura/Runtime
| Issue | Descrição | Link |
|-------|-----------|------|
| #4842 | `zeroclaw update` baixa binário de arquitetura errada em Raspberry Pi (aarch64) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) |

**PRs de correção em aberto:**
- [#5945](https://github.com/zeroclaw-labs/zeroclaw/pull/5945) — Honor `tool_timeout_secs` para HTTP SSE calls
- [#5853](https://github.com/zeroclaw-labs/zeroclaw/pull/5853) — Self-heal orphaned `tool_result` blocks
- [#5939](https://github.com/zeroclaw-labs/zeroclaw/pull/5939) — Fix git security policy (`git -C` vs `git -c`)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em discussão

| Feature | Descrição | Link | Sinais |
|---------|-----------|------|--------|
| **Dream Mode** | Periodic memory consolidation durante idle | [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | Crescimento de memória de longo prazo |
| **Full-duplex voice** | Conversa por voz contínua + barge-in | [#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896) | Experiência tipo telefone |
| **Postgres backend** | Opcional para sistema de memória | [#5946](https://github.com/zeroclaw-labs/zeroclaw/pull/5946) | Escala enterprise |
| **Inworld TTS/STT** | Provedores de voz Inworld | [#5943](https://github.com/zeroclaw-labs/zeroclaw/pull/5943) | Suporte a novos provedores |
| **Gemini SSE streaming** | Streaming para GeminiProvider | [#5944](https://github.com/zeroclaw-labs/zeroclaw/pull/5944) | Paridade de features |
| **Groq per-model config** | Suporte configurável por modelo | [#5932](https://github.com/zeroclaw-labs/zeroclaw/issues/5932) | Melhoria de providers |

### Demanda consolidada (high engagement)
**[#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)** — Docker image completa com todos os feature flags
- 7 comentários, 3 👍
- Problema: features desabilitadas por padrão criam barreira para new users
- Indica necessidade de experiência "out of the box" mais acessível

### Refatorações pendentes
- [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) — Unify providers architecture e reqwest client management

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Dor | Severidade | Evidência |
|-----|------------|-----------|
| **Barreira de entrada técnica** | Alta | [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) — usuários não-técnicos não conseguem habili tar features |
| **Docker networking broken** | Crítica | [#5552](https://github.com/zeroclaw-labs/zeroclaw/pull/5552) — URLs localhost não funcionam em containers |
| **Segurança confusa** | Média | [#4857](https://github.com/zeroclaw-labs/zeroclaw/issues/4857) — restrições de segurança bloqueiam uso legítimo sem documentação |
| **Instabilidade de providers** | Alta | [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) — llamacpp config ignorado |
| **Web UI missing features** | Média | [#5936](https://github.com/zeroclaw-labs/zeroclaw/pull/5936) — cron UI só expõe tipo genérico |
| **Falha em ARM/Raspberry Pi** | Alta | [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) — update command baixa arquitetura errada |

### Cenários de uso emergentes
- **Voice-first AI assistants** ([#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896)) — demanda por experiência telefônica
- **Memory consolidation** ([#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)) — interesse em comportamento "inteligente" durante idle
- **Enterprise scale** — Postgres backend ([#5946](https://github.com/zeroclaw-labs/zeroclaw/pull/5946)) indica casos de uso de maior escala

### Feedback positivo (via closed issues resolvidas)
- Onboarding com URLs container-aware ([#5552](https://github.com/zeroclaw-labs/zeroclaw/pull/5552)) — resolve problema crítico de UX
- Composio via env vars ([#5841](https://github.com/zeroclaw-labs/zeroclaw/pull/5841)) — flexibilidade apreciada

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução (prioridade de triagem)

| Issue | Idade | Prioridade | Descrição |
|-------|-------|------------|-----------|
| #4022 | ~32 dias | S1 | Skills install from clawhub broken — [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/4022) |
| #3642 | ~37 dias | Enhancement | Docker full image — [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) |
| #4842 | ~25 dias | S1 | ARM architecture download — [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) |
| #4857 | ~25 dias | S2 | Cron UI blocked — [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/4857) |

### PRs pendentes de revisão

| PR | Risk | Status | Descrição |
|----|------|--------|-----------|
| [#5946](https://github.com/zeroclaw-labs/zeroclaw/pull/5946) | low | Open | Postgres memory backend |
| [#5733](https://github.com/zeroclaw-labs/zeroclaw/pull/5733) | medium | Open | WebSocket persistence + model switcher |
| [#5853](https://github.com/zeroclaw-labs/zeroclaw/pull/5853) | medium | needs-author-action | Self-heal orphaned tool results |

### RFCs aguardando implementação

| RFC | Status | Descrição |
|-----|--------|-----------|
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | Discussion | Multi-agent UX flow — em período de comentários |
| [#5912](https://github.com/zeroclaw-labs/zeroclaw/issues/5912) | Open | WASM execution bridge — Phase 2 D2 |
| [#5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918) | Open | SSRF protection para plugins |
| [#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) | Open | Env var allowlist para plugins |

---

## Métricas Resumidas

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas | 24 | Neutra |
| PRs abertos | 26 | Neutra |
| Atividade total (24h) | 95 | Alta |
| Releases (24h) | 0 | N/A |
| Bugs S1 em aberto | 3 | Requer atenção |
| RFCs aceitos aguardando impl | 5 | Em progresso |

**Saúde geral: 🟢 Estável com trabalho ativo em infraestrutura e qualidade.**

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*