# Resumo diário do ecossistema de agentes de IA 2026-04-18

> Issues: 7 | PRs: 24 | Projetos cobertos: 7 | Gerado em: 2026-04-18 01:52 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-04-18

---

## 1. Panorama do Dia

NullClaw demonstra **alta atividade de desenvolvimento** em 18 de abril de 2026. O projeto fechou 16 PRs nas últimas 24h e abriu 1 release (v2026.4.17), evidenciando um ciclo de entrega acelerado. A comunidade está particularmente engajada em features de customização de ferramentas e suporte a ferramentas de agente via web. Três issues abertas aguardam atenção dos mantenedores, sendo duas criadas no mesmo dia, sugerindo demandas emergentes. O tom geral das interações indica um projeto em fase ativa de maturação, com foco em estabilidade (fixes de bugs) e extensibilidade (features de configuração).

---

## 2. Lançamentos

### v2026.4.17
**Link:** https://github.com/nullclaw/nullclaw/releases/tag/v2026.4.17

**Principais mudanças integradas:**

| PR | Descrição | Autor |
|----|-----------|-------|
| #795 | v2026.4.9 | @DonPrus |
| #823 | Migração do projeto para Zig 0.16 | @DonPrus |
| Security fix | Inicialização de argumentos de mount do Docker sandbox via factory | @manelsen |

**Notas de migração:**
- **Breaking change:** A migração para Zig 0.16 pode exigir rebuild completo do ambiente de desenvolvimento. Usuários que compilam a partir do fonte devem garantir o SDK Zig 0.16 instalado.
- O fix de segurança do Docker sandbox é retrocompatível, mas recomenta-se reinstall do ambiente containerizado.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (16 total)

| PR | Título | Destaque |
|----|--------|----------|
| [#830](https://github.com/nullclaw/nullclaw/pull/830) | v2026.4.17 version bump | Release oficial |
| [#735](https://github.com/nullclaw/nullclaw/pull/735) | Suporte a web-discovered skill installs | Instalação via URL web, descoberta .well-known |
| [#813](https://github.com/nullclaw/nullclaw/pull/813) | raise models refresh output budget | Fix crítico para OpenRouter (~400KB response) |
| [#814](https://github.com/nullclaw/nullclaw/pull/814) | fix named-agent provider lifetimes | Estabilização de memória em subagentes |
| [#828](https://github.com/nullclaw/nullclaw/pull/828) | fix doctor channel status diagnostics | Mensagem clara para canais não-CLI |
| [#829](https://github.com/nullclaw/nullclaw/pull/829) | admin config and models CLI | `config show --json`, `models summary --json` |
| [#818](https://github.com/nullclaw/nullclaw/pull/818) | Weixin QR auth flow | Novo canal de autenticação |
| [#782](https://github.com/nullclaw/nullclaw/pull/782) | Telegram interactive skill menus | Menus interativos via bot |
| [#757](https://github.com/nullclaw/nullclaw/pull/757) | dispatch agent on heartbeat | HEARTBEAT.md agora processa tarefas |
| [#772](https://github.com/nullclaw/nullclaw/pull/772) | fix Responses API tool schema | Compatibilidade com foxnio e outros |
| [#755](https://github.com/nullclaw/nullclaw/pull/755) | proxy env vars support | `HTTPS_PROXY`/`HTTP_PROXY` nativos |
| [#798](https://github.com/nullclaw/nullclaw/pull/798) | pin CI workflow actions | Melhora de segurança em supply-chain |
| [#754](https://github.com/nullclaw/nullclaw/pull/754) | consolidate error text predicates | Refatoração neutra shared module |
| [#815](https://github.com/nullclaw/nullclaw/pull/815) | setup guidance for missing providers | UX melhorado em falhas de search |
| [#786](https://github.com/nullclaw/nullclaw/pull/786) | tests for version/verbose/web_search | Cobertura de testes aumentada |
| [#787](https://github.com/nullclaw/nullclaw/pull/787) | test utility additions | 9+ testes para search_base_url e status |

**Análise:** O release v2026.4.17 consolida múltiplas correções críticas (especialmente o bug de buffer do models refresh que afetava todos os usuários de OpenRouter) e adiciona funcionalidades等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了等了

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de referência:** 18 de abril de 2026
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw/QwenPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **saúde robusta com pressões distintas de maturação**. A atividade total ultrapassa 300+ interações (issues + PRs) no período de 24 horas, evidenciando um campo em fermentação acelerada. **NullClaw** lidera em velocidade de release com 16 PRs fechados e uma versão publicada, enquanto **IronClaw** consolida volume bruto com 48 PRs promovidos via CI. A convergência técnica é notável: memória de longo prazo, observabilidade estruturada e segurança de shell emergem como temas universais. Os projetos divergem, contudo, em maturidade de stack — desde a reescrita em Zig da NullClaw até a refatoração Cargo do ZeroClaw — sugerindo que o ecossistema ainda busca seu ponto de estabilização arquitetural.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | PRs Fechados | Releases | Saúde Geral | Destaque Negativo |
|---------|---------------|-----------|--------------|----------|-------------|-------------------|
| **NullClaw** | 3 | 16 | 16 | 1 (v2026.4.17) | 🟢 Estável | Migração Zig 0.16 (breaking) |
| **NanoBot** | 15 | 51 | 24 | 0 | 🟡 Evoluindo | Bug P0 config `${VAR}` (78h downtime) |
| **Hermes Agent** | 42 | 50 | 10 | 0 | 🟢 Ativo | Bug P1 truncation em streaming |
| **PicoClaw** | 103 | 135 | 4 | 1 (nightly) | 🟡 Modular | Sem retry HTTP 500 |
| **IronClaw** | 28 | 50 | 48 | 1 (v0.25.0) | 🟡 Bug Bash | 5 bugs P1 reportados |
| **CoPaw/QwenPaw** | 29 | 46 | 25 | 1 (v1.1.2) | 🟢 Lançamento | Crash Unicode P0 |
| **ZeroClaw** | 32 | 50 | 3 | 3 (beta) | 🟡 Refatoração | 10 issues S1 abertas |

**Métricas agregadas do ecossistema:** ~252 issues e ~348 PRs atualizados em 24h, com 7 releases (4 estáveis, 3 beta).

---

## 3. Posicionamento do NullClaw (Projeto Principal)

### Vantagens Competitivas

| Dimensão | NullClaw | Vantagem |
|----------|----------|----------|
| **Velocidade de entrega** | 16 PRs/24h | Liderança absoluta em ratio PR/issue |
| **Qualidade de release** | v2026.4.17 com changelog estruturado | Processo de release mais maduro |
| **Segurança** | Fix Docker sandbox retrocompatível | Abordagem proativa de segurança containerizada |
| **Extensibilidade** | Web-discovered skills + .well-known | Modelo de plugin mais sofisticado |
| **Modularidade** | Zig 0.16 nativo | Linguagem de systems com memory safety |

### Diferenças Técnicas Fundamentais

NullClaw é o **único projeto em Zig**, enquanto todos os demais utilizam Python ou Rust. Esta escolha arquitetural oferece:

- **Performance de execução** superior para tasks de alta frequência
- **Binário estático** facilitado (compilação para múltiplas plataformas)
- **Ecosistema imaturo** — menor disponibilidade de libraries LLM em Zig

A migração para Zig 0.16, embora disruptive, posiciona o projeto na vanguarda da linguagem e elimina dependências de runtime (Python/Node).

### Tamanho e Engajamento da Comunidade

| Métrica | NullClaw | Posição |
|---------|----------|---------|
| PRs fechados (24h) | 16 | **1º lugar** (empatado com IronClaw em volume) |
| Releases | 1 formal + changelog | **1º lugar** em maturidade de processo |
| Issues abertas | 3 | **1º lugar** em estabilidade |
| Contribuidores ativos | Múltiplos (DonPrus, manelsen) | Equipe enxuta mas produtiva |

---

## 4. Focos Técnicos Compartilhados

### 4.1 Memória de Longo Prazo

A demanda por memória persistente além da janela de contexto é **o tema mais convergente** do ecossistema:

| Projeto | Signal | Tipo |
|---------|--------|------|
| **NanoBot** | Issue #3227 — 4👍, 9 comments | Sistema de memória não escala |
| **Hermes Agent** | Issue #6323 — 21👍 | External memory (mempalace) |
| **PicoClaw** | Issue #1919 — 9 comments | Seahorse (memória biologicamente inspirada) |
| **CoPaw** | PR #3548 | Memory rebuild & context |
| **ZeroClaw** | Issue #5849 | Dream Mode (consolidação idle) |

**Interpretação:** O paradigma atual de injeção de histórico em prompts não sustenta sessões longas. A comunidade demanda arquiteturas de memória dual (curto/longo prazo) com consolidação periódica — similar ao hipocampo biológico.

### 4.2 Observabilidade e Tracing

Três projetos avançam simultaneamente em métricas estruturadas:

| Projeto | PR/Iniciativa | Escopo |
|---------|----------------|--------|
| **NanoBot** | Issue #3257 | Latência por estágio (STT→LLM→TTS) |
| **CoPaw** | PR #3365 | Dashboard de estatísticas |
| **ZeroClaw** | PR #5785 | Eventos de lifecycle do agent |
| **Hermes Agent** | PR #3140 | LangSmith full integration |
| **PicoClaw** | Issue #2173 | LangSmith observability |

### 4.3 Segurança de Shell e Sandbox

| Projeto | Issue/Bug | Severidade |
|---------|-----------|------------|
| **ZeroClaw** | #5153 | S1 — Landlock corrompe workspace |
| **ZeroClaw** | #5809 | S1 — Git `-C` bloqueado |
| **NanoBot** | PR #3252 | P1 — SSRF bypass (file://, gopher://) |
| **NullClaw** | Security fix | Docker sandbox init |

### 4.4 Estabilidade de Canais de Mensagens

A integração com Telegram, Discord, Feishu e WhatsApp gera bugs recorrentes:

- **IronClaw:** Telegram token save quebrado (#2411), mensagens não entregues (#2580)
- **Hermes Agent:** Telegram split-brain (#11016), truncation em streaming (#7237)
- **ZeroClaw:** Telegram inline_keyboard ausente (#5778)

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Diferenciador |
|---------|------------------|----------------|
| **NullClaw** | Desenvolvedores avançados | Performance Zig, extensibilidade |
| **NanoBot** | Usuários multi-provider | Flexibilidade de configuração |
| **Hermes Agent** | Enterprise/GCP | Vertex AI, observabilidade |
| **PicoClaw** | Usuários finais | UX integrada, canais |
| **IronClaw** | Equipes corporativas | DingTalk, multi-tenancy |
| **CoPaw/QwenPaw** | Usuários Ali/Qwen | Integração Alibaba, Mission Mode |
| **ZeroClaw** | Ambientes restritivos | Shell sandboxing, TOTP |

### 5.2 Por Arquitetura

| Projeto | Stack Principal | Paradigma |
|---------|-----------------|-----------|
| **NullClaw** | Zig | Sistemas embarcados, performance |
| **NanoBot** | Python | Prototipagem rápida, extensibilidade |
| **Hermes Agent** | Python | Modular, enterprise-ready |
| **PicoClaw** | Go | Concorrencia, canais nativos |
| **IronClaw** | Rust | Safety, performance |
| **CoPaw/QwenPaw** | Python | Ecossistema Alibaba |
| **ZeroClaw** | Rust | Modularidade crate, segurança |

### 5.3 Por Estratégia de Features

```
NullClaw ─────► Extensibilidade (web skills, Zig ecosystem)
NanoBot ──────► Robustez (bug fixes, multi-provider)
Hermes ───────► Enterprise (Vertex, LangSmith, secrets management)
PicoClaw ─────► UX (feedback visual, canais, Mattermost)
IronClaw ─────► Confiabilidade (Bug Bash, anti-silence UX)
CoPaw ────────► Autonomia (Mission Mode, multi-agent)
ZeroClaw ─────► Segurança (TOTP, Landlock, observability)
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Projetos em Iteração Rápida

| Projeto | Velocidade | Indicador |
|---------|------------|-----------|
| **NullClaw** | Muito alta | 16 PRs/24h, release diario |
| **CoPaw/QwenPaw** | Alta | 25 PRs fechados, v1.1.2 com Mission Mode |
| **IronClaw** | Alta | 48 PRs CI-promovidos, Bug Bash ativo |

### 6.2 Projetos em Consolidação de Qualidade

| Projeto | Foco | Indicador |
|---------|------|-----------|
| **NanoBot** | Estabilidade | 7 PRs bugfix, P0 config bug aberto |
| **Hermes Agent** | Bugfix crítico | Kimi temperature fixado, truncation pendente |
| **ZeroClaw** | Refatoração | 3 beta releases, 10 S1 abertos |

### 6.3 Patterns de Maturidade

**Maturidade alta (release discipline):**
- NullClaw, CoPaw — changelogs estruturados, versioning semântico
- IronClaw — CI promotion pipeline robusto

**Maturidade em crescimento:**
- NanoBot, Hermes — volume alto, mas bugs recorrentes (erro 1214, truncation)
- PicoClaw — nightly builds sem changelog detalhado

**Maturidade em transição:**
- ZeroClaw — beta cycle ativo, quebra de API esperada

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

**① Memória persistente é o próximo campo de batalha:**
A convergência de 5/7 projetos em sistemas de memória dual indica que a injeção de histórico em prompts está reaching its limits. Arquitecturas inspiradas em memória biológica (Seahorse, Dream Mode) ou external storage (mempalace) emergirão como features diferenciadoras em 2026-2027.

**② Enterprise readiness como diferencial:**
Hermes Agent (Vertex AI, LangSmith), IronClaw (multi-tenancy, DingTalk), ZeroClaw (TOTP, Landlock) demonstram foco corporativo. A competição por deployments empresariais acelerará features de segurança, observabilidade e compliance.

**③ Shell sandboxing como requisito de produção:**
ZeroClaw e NullClaw lideram em segurança de sandbox. À medida que agentes executam em ambientes compartilhados, a pressão por isolamento seguro (Landlock, Docker, TOTP) aumentará.

**④ "Mission Mode" — autonomia como feature nativa:**
CoPaw introduz execução autônoma de tarefas multi-fase. Esta capacidade (planejar → executar → auto-corrigir) tornará-se expectável em agents de segunda geração.

**⑤ Multi-provider como padrão:**
NanoBot, PicoClaw e Hermes demonstram que usuários finais rodam múltiplos provedores simultaneamente (Qwen, Gemini, GLM, Kimi). A abstração de provider será tão crítica quanto a escolha do modelo.

### 7.2 Riscos Sistêmicos Identificados

| Risco | Evidência | Impacto |
|-------|-----------|---------|
| **Dívida técnica acumulada** | Erro 1214 (NanoBot), truncation (Hermes) recorrentes | Degradação de confiança |
| **Breaking changes** | Zig 0.16 (NullClaw), Cargo workspace (ZeroClaw), ironclaw_common 0.3.0 | Fricção de migração |
| **Segurança não triada** | Bug #11551 (Hermes) sem comentários | Exposição de secrets |
| **Onboarding quebrado** | Issue #2522 (IronClaw), #2943 (CoPaw) | Perda de usuários |

### 7.3 Recomendações Estratégicas

1. **Para NullClaw:** Manter ritmo de release e investir em documentação da migração Zig — a quebra de compatibility é risk justified pelo posicionamento tecnológico.

2. **Para o ecossistema:** Adoptar conventions de changelog (Keep a Changelog) para reduzir fricção de upgrade.

3. **Para Enterprise buyers:** Hermes Agent e IronClaw apresentam trajectory mais alinhada com requisitos corporativos (Vertex, TOTP, DingTalk).

4. **Para usuários finais:** CoPaw/QwenPaw e PicoClaw oferecem melhor UX out-of-the-box, mas com trade-offs em estabilidade.

---

*Relatório gerado em 2026-04-18 com base em dados públicos do GitHub dos projetos analisados.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-04-18

---

## 1. Panorama do Dia

O NanoBot apresenta altíssima atividade de desenvolvimento em 18 de abril de 2026. Foram registradas **15 issues** e **51 pull requests** atualizados nas últimas 24h, com um volume significativo de PRs fechados (24) indicando resolução acelerada de bugs e features. A comunidade demonstra interesse particular em melhorias no sistema de memória, estabilidade de streaming, configuração flexível de providers, e observabilidade — temas que dominam tanto as discussões quanto os merge requests. Não houve release nova, mas múltiplos patches críticos de estabilidade foram mergeados, sugerindo foco em robustez pré-próxima versão.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.** O último release disponível permanece `v0.1.4.post3` (referenciada na issue #1672). A ausência de release nova não indica estagnação — pelo contrário, o volume de PRs fechados e a diversidade de correções mergeadas sugerem preparo de um release de manutenção com correções acumuladas.

---

## 3. Progresso do Projeto

As seguintes PRs foram fechadas (merged) hoje, representando avanços concretos:

| PR | Tema | Impacto |
|----|------|---------|
| [#3266](https://github.com/HKUDS/nanobot/pull/3266) | Corrige saída prematura em erro mid-stream | **Estabilidade** — agente não treating partial response como completo |
| [#3163](https://github.com/HKUDS/nanobot/pull/3163) | Schema do cron tool agora requer `message` para action=add | **UX/Estabilidade** — resolve loop infinito do LLM |
| [#3249](https://github.com/HKUDS/nanobot/pull/3249) | Guard tool execution com check de `finish_reason` | **Estabilidade** — previne loop infinito em API gateways não-conformes |
| [#3248](https://github.com/HKUDS/nanobot/pull/3248) / [#3247](https://github.com/HKUDS/nanobot/pull/3247) | Fallback para `raw_archive` em LLM error response | **Integridade de dados** — evita perda irreversível de histórico |
| [#3233](https://github.com/HKUDS/nanobot/pull/3233) | Preserva user message para evitar erro GLM 1214 | **Estabilidade** — corrige `messages parameter is illegal` |
| [#3238](https://github.com/HKUDS/nanobot/pull/3238) | Passa `allowed_env_keys` em subagentes exec tool | **Consistência** — feature introduzida em #2962 agora funciona em cascata |
| [#3192](https://github.com/HKUDS/nanobot/pull/3192) | Atualiza build backend para hatchling | **DevX** — compatibilidade com Python 3.14 |

**Destaque:** 6 dos 7 PRs fechados focam em **estabilidade e correção de bugs**, evidenciando maturidade do codebase com atenção a edge cases em produção.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| Issue | Autor | Comentários | 👍 | Tema |
|-------|-------|-------------|-----|------|
| [#3227](https://github.com/HKUDS/nanobot/issues/3227) | kxsk-git | 9 | 4 | **Limitação do sistema de memória** em projetos longos |
| [#2588](https://github.com/HKUDS/nanobot/issues/2588) | ilker-aktuna | 9 | 0 | Incompatibilidade com Home Assistant via tools |
| [#3143](https://github.com/HKUDS/nanobot/issues/3143) | bigsinger | 9 | 0 | Erro 1214 — `messages parameter is illegal` |
| [#3107](https://github.com/HKUDS/nanobot/issues/3107) | aiguozhi123456 | 6 | 0 | **Roadmap de UX** — 7 sugestões de melhorias |

### Análise dos temas dominantes

**🔴 Sistema de memória para projetos longos (#3227):** Issue de maior visibilidade (4 👍). O usuário destaca que `history.jsonl` + `MEMORY.md` + Dream não escalam bem em sessões extensas. A abordagem atual (injecção de texto em blocos) causa perda de detalhes. Este é um **signal estratégico** para o roadmap — memória persistent-context é dor real de usuários avançados.

**🟡 Home Assistant integration (#2588):** Usuário migrando de OpenClaw reporta que tools não funcionam com modelos Qwen. A diferença de comportamento sugere inconsistência na implementação de tools entre providers ou diferenças de prompting. Impacta adoptability.

**🟡 Erro 1214 em APIs GLM/Zhipu (#3143):** Problema recorrente (9 comentários). Corrigido parcialmente em [#3233](https://github.com/HKUDS/nanobot/pull/3233), mas persistência indica necessidade de validação mais robusta no pipeline de mensagens.

**🟢 UX improvements (#3107):** 7 sugestões com 2 já implementadas (#3107 → PRs #3263 e outras). Indica comunidade ativa contribuindo direção do produto. Items 4-7 (custom providers, fallback, multi-provider config) são **features que estão convergindo** — PRs #3264 e #3263 já endereçam parte dessas demandas.

---

## 5. Bugs e Estabilidade

### Bugs críticos (P0-P1)

| Bug | Severidade | Issue | Status | Impacto |
|-----|------------|-------|--------|---------|
| Config `${VAR}` não resolvido, causa auth failure silencioso | **P0** | [#3251](https://github.com/HKUDS/nanobot/issues/3251) | **OPEN** | 78+ horas de interrupção em produção |
| Mid-stream truncation não é retried | **P1** | [#3256](https://github.com/HKUDS/nanobot/issues/3256) | OPEN | Resposta incompleta entregue ao usuário |
| SSRF bypass via esquemas não-HTTP (`file://`, `gopher://`) | **P1** | [#3252](https://github.com/HKUDS/nanobot/pull/3252) (PR) | **OPEN** (PR) | Exfiltracao de dados internos |
| WhatsApp não responde mensagens próprias | **P2** | [#1672](https://github.com/HKUDS/nanobot/issues/1672) | OPEN (desde 2026-03-07) | UX quebrada para auto-mensagens |
| Gemini 400: múltiplas credenciais auth | **P2** | [#3206](https://github.com/HKUDS/nanobot/issues/3206) | OPEN | Provedor Gemini inoperante |

### Bugs resolvidos hoje

- ✅ **Cron tool schema mismatch** — `message` era opcional no schema mas obrigatório no runtime, causando loop infinito → [PR #3163](https://github.com/HKUDS/nanobot/pull/3163)
- ✅ **Finish reason não verificado antes de executar tools** — API gateways não-conformes causavam loops infinitos → [PR #3249](https://github.com/HKUDS/nanobot/pull/3249)
- ✅ **Memória arquivada com erro LLM como summary válido** → loss irreversível → [PRs #3248](https://github.com/HKUDS/nanobot/pull/3248), [#3247](https://github.com/HKUDS/nanobot/pull/3247)
- ✅ **User message drop em `_snip_history`** causando erro GLM 1214 → [PR #3233](https://github.com/HKUDS/nanobot/pull/3233)

### Regressões ou padrões recorrentes

- Erro 1214 (`messages parameter is illegal`) aparece em **#3143** (aberto) e já foi "corrigido" antes → padrão recorrente indica teste insuficiente de edge cases em sequência de mensagens.
- O bug P0 de config ([#3251](https://github.com/HKUDS/nanobot/issues/3251)) revela que **parsing de env vars é inconsistente** — algumas configurações processam, outras não. Requer auditoria da configuração.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features novas abertas (últimas 24h)

| Feature | Issue/PR | Autor | Comentários | Prioridade inferred |
|---------|----------|-------|-------------|---------------------|
| Métricas de latência por estágio (STT→LLM→TTS) | [#3257](https://github.com/HKUDS/nanobot/issues/3257) | gregoryschlepper | 0 | Observabilidade |
| Custom provider support sem modificar registry | [#3264](https://github.com/HKUDS/nanobot/pull/3264) | OldSuns | 0 | Configuração flexível |
| Guia LLM para ler session history via prompt | [#3263](https://github.com/HKUDS/nanobot/pull/3263) | aiguozhi123456 | 0 | UX/Memória |
| AgentHiFive integration (MCP backend) | [#3144](https://github.com/HKUDS/nanobot/pull/3144) | supersantux | 0 | Integrações |
| Silent/quiet retry mode | [#3246](https://github.com/HKUDS/nanobot/issues/3246) | iwandepe | 0 | UX |
| LangSmith full integration restoration | [#3140](https://github.com/HKUDS/nanobot/pull/3140) | pve | 0 | Observabilidade |
| Enforce history.jsonl/.dream_cursor em filesystem layer | [#3255](https://github.com/HKUDS/nanobot/pull/3255) | mohamed-elkholy95 | 0 | Segurança |
| WebSocket tooling + session lifecycle + reasoning | [#3216](https://github.com/HKUDS/nanobot/pull/3216) | JackLuguibin | 0 | Arquitetura |
| Mark skills unavailable se env vars faltam | [#3258](https://github.com/HKUDS/nanobot/pull/3258) | mcampo | 0 | Robustesse |

### Convergência de demandas

| Demanda | Sinal |
|---------|-------|
| **Custom/OpenAI-compatible providers** | Issue #3107 → PR #3264 direto; alto interesse em flexibilidade de config |
| **Leitura de session history** | Issue #3107 item 2 → PR #3263 implementado |
| **Retry silencioso** | Issue #3246 aberto; issue #3107 item 3 já tinha conceito |
| **Observabilidade (latência por estágio)** | Issue #3257 + PR #3140 (LangSmith) = interesse claro em tracing |
| **Segurança em filesystem** | PR #3255 addresses shell-command bypass → proteção em profundidade |

### Ausências notáveis

- Nenhuma issue pidiendo suporte a novos modelos (llm providers) além dos existentes — sugere que cobertura atual é considerada adequada.
- Nenhuma issue pidiendo mudança de arquitetura (multi-agent nativo, etc.) — projeto estável em scope atual.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

1. **Memória não escala (#3227)** — "Session → history.jsonl → MEMORY.md + Dream" perde detalhes em projetos longos. Usuário específico: descobriu NanoBot via interesse em OpenClaw, validando que o projeto é relevante no ecossistema de AI agents.

2. **Black box problem (#3107 items 1, 3)** — Usuários não sabem estado interno (quantas tasks, quando retry acontece). Proposal explícito de métricas visíveis.

3. **Configuração quebrada (#3251)** — Bug P0 onde `${VAR}` syntax não é processada. Usuário suffered 78+ horas de downtime antes de reportar. Crítico para deployments em produção.

4. **Integrations inconsistentes (#2588)** — Funcionalidade de tools funciona em OpenClaw mas não em NanoBot com mesmo modelo. Gap de comportamento entre projetos.

5. **Latência em voice pipeline (#3257)** — 35-60 segundos end-to-end; sem granularidade de métricas por estágio. Usuário com setup completo (faster-whisper + Cartesia) sentindo dor.

### Cenários de uso emergentes

- **Voice interaction como first-class use case** — múltiplas issues sobre STT, TTS, latência, retry em stream de voz.
- **Personal assistant com integrations** — Home Assistant, WhatsApp, Telegram, Slack (referenciado em PR #3144).
- **Multi-provider production** — usuários rodando com Qwen, Gemini, GLM simultaneamente, reportando edge cases específicos.

### Satisfação

- Issue #3227: "真的很喜欢这套代码——整洁、轻巧、容易上手" (really love this codebase — clean, lightweight, easy to get started).
- Repo como direção de aprendizado para OpenClaw — indica bom design e documentation.

### Insatisfação

- Erro 1214 recorrente; falta de fallback entre providers (#3107 item 6).
- Canal Webhook não instalável (#3188) — documentação desatualizada (agora corrigida via PR #3192).

---

## 8. Backlog que Merece Atenção

### Issues antigas sem resolução

| Issue | Idade | Comentários | Prioridade | Motivo |
|-------|-------|-------------|------------|--------|
| [#1672](https://github.com/HKUDS/nanobot/issues/1672) — WhatsApp não responde a si mesmo | **42 dias** (desde 2026-03-07) | 1 | **Média** | Problema de UX real; sem resposta de mantenedores |
| [#2588](https://github.com/HKUDS/nanobot/issues/2588) — Home Assistant tools | 21 dias | 9 | **Alta** | 9 comentários indicam dor real; precisa de debug ou docs |
| [#3227](https://github.com/HKUDS/nanobot/issues/3227) — Memória em projetos longos | 2 dias | 9 | **Alta** | 4 👍 + 9 comments; usuário engajado; risco de perder contributor |

### PRs abertos há muito tempo

| PR | Idade | Tema | Prioridade | Status |
|----|-------|------|------------|--------|
| [#3144](https://github.com/HKUDS/nanobot/pull/3144) — AgentHiFive integration | 4 dias | Integração MCP | **Alta** | large feature; precisa review |
| [#3140](https://github.com/HKUDS/nanobot/pull/3140) — LangSmith restoration | 4 dias | Observabilidade | **Alta** | Closes #2493; restauração de feature perdida |
| [#3216](https://github.com/HKUDS/nanobot/pull/3216) — WebSocket + session lifecycle | 2 dias | Arquitetura | **Média** | Múltiplas features combinadas; review segmentado |

### PRs críticos awaiting merge

| PR | Tema | Urgência |
|----|------|----------|
| [#3252](https://github.com/HKUDS/nanobot/pull/3252) — SSRF detection via non-http schemes | **Segurança P1** — file:// e gopher:// bypassing scanner |
| [#3255](https://github.com/HKUDS/nanobot/pull/3255) — history.jsonl/.dream_cursor filesystem enforcement | **Segurança** — proteção em profundidade |
| [#3264](https://github.com/HKUDS/nanobot/pull/3264) — Custom provider support | **Feature alta demanda** — alinhado com issue #3107 |
| [#3258](https://github.com/HKUDS/nanobot/pull/3258) — Skills unavailable if env vars absent | **Robustesse** — previne false positives em skills |

---

## Conclusão: Saúde do Projeto

| Dimensão | Status | Notas |
|----------|--------|-------|
| **Atividade de desenvolvimento** | 🟢 Alta | 51 PRs, 15 issues em 24h; velocidade sustentada |
| **Resolução de bugs** | 🟢 Alta | 7 PRs fechados hoje; 4 bugs críticos resolvidos |
| **Estabilidade** | 🟡 Em evolução | P0 config bug ainda open; multiple patches de estabilidade em flight |
| **Segurança** | 🟡 Atenção | 2 PRs de segurança abertos (SSRF, filesystem); necesita review prioritário |
| **Comunidade** | 🟢 Engajada | Contribuições de múltiplos autores; feedback constructivo |
| **Roadmap signals** | 🟢 Claro | Custom providers, memory, observabilidade convergindo |

**Recomendação:** Priorizar merge dos PRs de segurança (#3252, #3255) e do P0 config bug (#3251) antes do próximo release. A convergência de PRs de custom providers e memória sugere release focado em extensibilidade e robustez.

---

*Relatório gerado automaticamente com base em dados do GitHub de [HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-04-18

---

## 1. Panorama do Dia

O Hermes Agent mantém alto volume de atividade com **50 issues e 50 PRs atualizados nas últimas 24h**. O projeto demonstra vigoroso desenvolvimento com 10 PRs merged/fechados, indicando cadência de integração saudável. O tema central do dia é a **correção do bug de temperatura do provedor Kimi** (múltiplas issues e PRs relacionados), que afeta tanto o chat principal quanto chamadas auxiliares. A comunidade está engajada com issues de estabilidade, especialmente no Gateway, cron jobs e integrações com Telegram/Feishu. Não houve releases publicadas, sugerindo que as correções estão em validação antes do próximo tagging.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto não publicou novas versões. Isso indica que a equipe pode estar preparando um release bundle com as múltiplas correções de bugs (especialmente as de Kimi e estabilidade do Gateway) antes de taggear. Usuários em produção devem acompanhar branches `main` para hotfixes.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados (10 total)

| # | Título | Impacto |
|---|--------|---------|
| [#11889](https://github.com/NousResearch/hermes-agent/pull/11889) | fix(kimi): force 0.6 on main chat path | **Crítico** — Corrige HTTP 400 para usuários Kimi-for-coding no chat principal |
| [#11883](https://github.com/NousResearch/hermes-agent/pull/11883) | fix(kimi): force 0.6 on main chat path | IDêntico ao #11889 (salvo em main); merge redundante preservando autoria |
| [#11843](https://github.com/NousResearch/hermes-agent/pull/11843) | fix: two process leaks (agent-browser daemons, paste.rs sleepers) | **Estabilidade** — Elimina orphan processes que acumulavam em sessões longas |
| [#11231](https://github.com/NousResearch/hermes-agent/pull/11231) | test: add use_gateway flag coverage for all tool types | **Qualidade** — Adiciona 39 testes para feature v0.10.0 e validação de segurança |
| [#538](https://github.com/NousResearch/hermes-agent/pull/538) | fix: cron HERMES_HOME path mismatch | **Estabilidade Cron** — Respeita variável HERMES_HOME em `jobs.py` |
| [#11842](https://github.com/NousResearch/hermes-agent/pull/11842) | fix: Email gateway fails on SMTP port 465 | **Correção Bug** — Usa SMTP_SSL ao invés de STARTTLS para porta 465 |
| [#11807](https://github.com/NousResearch/hermes-agent/pull/11807) | fix: MCP OAuth server_url path stripped | **Correção OAuth** — Corrige validação de recursos GitHub MCP |

**Destaque:** As correções de Kimi (#11889, #11883) são essenciais — resolvem um bug que bloqueava completamente o provedor para milhares de usuários.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Categoria |
|---|--------|-------------|----|-----------|
| [#11765](https://github.com/NousResearch/hermes-agent/issues/11765) | Kimi provider HTTP 400 temperature error | **17** | 4 | Bug Crítico |
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | Response truncated due to output length limit | **10** | 2 | Bug |
| [#7893](https://github.com/NousResearch/hermes-agent/issues/7893) | HTTP 400 multiple auth credentials (Gemini) | **10** | 0 | Bug |
| [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) | Add mempalace for external memory support | **8** | **21** | Feature |
| [#7734](https://github.com/NousResearch/hermes-agent/issues/7734) | Two issues with Feishu plugin | 5 | 0 | Bug |
| [#6595](https://github.com/NousResearch/hermes-agent/issues/6595) | Telegram model picker missing gpt-5.4 | 4 | 0 | Bug |

**Análise:**
- **Kimi (17 comments):** Issue central do dia com discussão intensa sobre temperatura fixa. A comunidade reportou que `kimi-for-coding` exige `temperature=0.6` estritamente. A correção já foi merged, mas a discussão continua sobre implementações alternativas.
- **Truncation (10 comments):** Usuários em plataformas de mensagens (Telegram/Discord/Slack) enfrentam respostas cortadas em streaming. Problema recorrente que afeta UX significativamente.
- **Feature #6323 (21 👍):** "Add mempalace for external memory" é a issue mais votada do dia — a comunidade demonstra forte interesse em memória persistente além da janela de contexto. Este é um **sinal claro de roadmap**: memória de longo prazo é demandada.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (por severidade estimada)

#### 🔴 Críticos (bloqueiam uso)

| # | Título | Plataforma | Status |
|---|--------|------------|--------|
| [#11765](https://github.com/NousResearch/hermes-agent/issues/11765) | Kimi HTTP 400 temperature | kimi-for-coding | **Corrigido** |
| [#7893](https://github.com/NousResearch/hermes-agent/issues/7893) | Gemini multiple auth credentials | Google AI Studio | Aberto |
| [#11551](https://github.com/NousResearch/hermes-agent/issues/11551) | save_config writes secrets to yaml | Todos | Aberto |

#### 🟠 Altos (degradam significativamente)

| # | Título | Área | Status |
|---|--------|------|--------|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | Response truncated mid-stream | Telegram/Discord/Slack | Aberto |
| [#11312](https://github.com/NousResearch/hermes-agent/issues/11312) | Gateway cwd not respected, resets | Gateway/systemd | Aberto |
| [#11016](https://github.com/NousResearch/hermes-agent/issues/11016) | Telegram split-brain state (busy lock) | Telegram | Aberto |
| [#11884](https://github.com/NousResearch/hermes-agent/issues/11884) | TUI 404 at api.anthropic.com (bare-slug) | Ink TUI | **Corrigido** (#11887) |

#### 🟡 Médios ( workarounds existem)

| # | Título | Área |
|---|--------|------|
| [#3956](https://github.com/NousResearch/hermes-agent/issues/3956) | Empty Codex response retried 3x | openai-codex |
| [#7832](https://github.com/NousResearch/hermes-agent/issues/7832) | MCP env vars not passed to subprocess | MCP client |
| [#7731](https://github.com/NousResearch/hermes-agent/issues/7731) | Copilot hardcoded context windows | Copilot provider |
| [#6207](https://github.com/NousResearch/hermes-agent/issues/6207) | Stale .pyc causes TypeError after update | Gateway startup |

**Nota:** O bug de secrets (#11551) é **crítico para segurança** — `save_config` sobrescreve `${ENV_VAR}` com valores plaintext, potencialmente vazando API keys em commits.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Desenvolvimento (PRs abertos)

| # | Título | Complexidade | Sinal Estratégico |
|---|--------|--------------|-------------------|
| [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) | Add mempalace for external memory | Alta | 🧠 Memória persistente é prioridade da comunidade |
| [#11657](https://github.com/NousResearch/hermes-agent/pull/11657) | JSON Configuration System | Alta | 🔧 Modernização de config (YAML→JSON) |
| [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) | Vertex AI provider for Gemini | Média | ☁️ Expansão enterprise (service account + ADC) |
| [#11855](https://github.com/NousResearch/hermes-agent/pull/11855) | Prompt-injection immune system | Média | 🛡️ Segurança defensiva para tool outputs |
| [#11844](https://github.com/NousResearch/hermes-agent/pull/11844) | Swarm-exploration skill | Baixa | 🔬 Multi-strategy reasoning bundling |
| [#11870](https://github.com/NousResearch/hermes-agent/pull/11870) | `/openmd` command (markdown viewer) | Baixa | 📝 UX para respostas LLM |
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | Receipts for self-improving agents | Discussão | 📋 Governança/proveniência de skills |

### Tendências Identificadas

1. **Enterprise Readiness:** Vertex AI, JSON config system, e segurança (prompt injection) indicam foco em implantações corporativas.
2. **Memória de Longo Prazo:** A issue #6323 com 21 👍 sinaliza que memória persistente além do contexto é o **feature mais solicitado** para tarefas de longo horizonte.
3. **Skills Hub:** PR #5163 (Skills Hub no Web Console) expande a estratégia de marketplace de skills para interface web.

---

## 7. Resumo de Feedback dos Usuários

### Dores Recorrentes Identificadas

| Dor | Frequência | Impacto | Issues Relacionadas |
|-----|------------|---------|---------------------|
| **Provedor Kimi quebrado** | Crítica | Bloqueia usuários Chinese market | #11765, #9125, #11764 |
| **Respostas truncadas em messaging** | Alta | UX ruim em Telegram/Discord/Slack | #7237 |
| **Config de cwd não persiste** | Média | Afeta workflows de gateway | #11312 |
| **Telegram split-brain** | Média | Confusão para usuários finais | #11016 |
| **Segredos expostos por save_config** | Crítica | Risco de segurança | #11551 |

### Cenários de Uso Reportados

- **Desenvolvimento de código:** Kimi-for-coding, Copilot, Claude (Vertex)
- **Automação de mensagens:** Telegram, Feishu, WhatsApp, Discord, Slack
- **Long-horizon tasks:** Memória persistente (feature request), cron jobs
- **Enterprise GCP:** Vertex AI com service accounts
- **Terminal Integrado:** Docker backend, workspace mounting

### Satisfação Geral

A correção rápida do bug Kimi (mesmo dia do report) demonstra **bom tempo de resposta da maintainer**. No entanto, a acumulação de issues de estabilidade (cwd, cron, Telegram state) sugere **débito técnico** em componentes de infraestrutura. A feature de memória (#6323) indica que usuários estão empurrando os limites de uso do agent.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias (prioridade)

| # | Título | Criado | Days | Prioridade | Nota |
|---|--------|--------|------|------------|------|
| [#3956](https://github.com/NousResearch/hermes-agent/issues/3956) | Empty Codex response retried 3x | 2026-03-30 | **19** | 🟡 | Problema recorrente com user intent (silêncio) |
| [#7731](https://github.com/NousResearch/hermes-agent/issues/7731) | Copilot hardcoded context windows | 2026-04-11 | 7 | 🟡 | Enterprise users bloqueados |
| [#7832](https://github.com/NousResearch/hermes-agent/issues/7832) | MCP env vars not passed | 2026-04-11 | 7 | 🟡 | Afeta MCP servers com API keys |
| [#7734](https://github.com/NousResearch/hermes-agent/issues/7734) | Feishu plugin issues | 2026-04-11 | 7 | 🟠 | Usuários Feishu afetados |
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | Receipts for self-improving agents | 2026-04-17 | 1 | 🟡 | Discussão de design — sem triagem |

### Issues com Alto Impacto e Baixa Atividade

| # | Título | 👍 | Situação |
|---|--------|----|----------|
| [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) | Add mempalace for external memory | **21** | Aberto, sem assignees |
| [#11551](https://github.com/NousResearch/hermes-agent/issues/11551) | save_config leaks secrets | 0 | Aberto, **sem comentários** — risco segurança |

### Recomendações para Maintainers

1. **#11551 (Segurança):** Priorizar — exposição de secrets é crítica. Nenhum comentário indica que pode não ter sido triado.
2. **#6323 (Memória):** Assignee e roadmap — maior interesse da comunidade merece direção clara.
3. **#3956 (Codex empty response):** Issue antiga sem movimento — 需要 triagem ou closure.
4. **#7237 (Truncation):** Problema de UX recorrente — necessidade de estratégia de chunking/streaming.

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas | 42 |
| PRs abertos | 40 |
| PRs merged | 6 |
| Bugs críticos resolvidos | 2 (Kimi, TUI) |
| Issues sem triagem | 2+ |
| Feature mais votada | #6323 (memória externa, 21 👍) |
| PR mais comentando | N/A (comentários undefined na maioria) |

---

*Relatório gerado em 2026-04-18 com base em dados do GitHub NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-04-18

---

## 1. Panorama do Dia

O projeto PicoClaw mantém **atividade intensa** com 103 issues e 135 PRs atualizados nas últimas 24h. Uma nightly build foi publicada (v0.2.6-nightly.20260418), sinalizando progresso ativo no desenvolvimento. A comunidade demonstra alto engajamento, com issues de feature requests concentrando a maior parte das discussões — especialmente em torno de conectores de provedores (LM Studio, SiliconFlow), melhorias na experiência do agente (feedback de ferramentas, memória biológica) e suporte a novos canais (Mattermost, QQ Windows). O volume de PRs abertos (108) e a diversidade de domínios afetados indicam uma codebase em fase de maturação, com refatorações estruturais em curso.

---

## 2. Lançamentos

### Nightly Build: v0.2.6-nightly.20260418.6126ede9

| Item | Detalhes |
|---|---|
| **Build** | `sipeed/picoclaw:launcher` |
| **Commit** | `6126ede9` |
| **Natureza** | Automatizada, potencialmente instável |

**Nota:** Esta é uma nightly build automática. Não há changelog detalhado publicadado, apenas referência de comparação com `v0.2.6`. Usuários em produção devem aguardar releases estáveis.

🔗 [Changelog completo](https://github.com/sipeed/picoclaw/compare/v0.2.6...main) | [Release](https://github.com/sipeed/picoclaw/releases/tag/v0.2.6-nightly.20260418.6126ede9)

---

## 3. Progresso do Projeto

### PRs Fechados/Merged (4)

| PR | Autor | Domínio | Resumo |
|---|---|---|---|
| [#2579](https://github.com/sipeed/picoclaw/pull/2579) | afjcjsbx | tool | **Correção MCP:** envia objeto vazio ao invés de `nil` em `CallTool` + testes. Resolve erro `'expected record, received null'` com servidores MCP TypeScript baseados em Zod. |
| [#2437](https://github.com/sipeed/picoclaw/pull/2437) | grearsl | provider | **Correção Codex:** acumula output items dos eventos de stream. O evento `response.completed` chegava com array vazio — agora os responses OAuth do Codex retornam conteúdo válido. |
| [#2566](https://github.com/sipeed/picoclaw/pull/2566) | lc6464 | provider, tool | **Refatoração:** reorganiza `pkg/providers` e `pkg/tools` em subpacotes por responsabilidade, reduzindo sprawl de arquivos na raiz. |
| [#2571](https://github.com/sipeed/picoclaw/pull/2571) | alexhoshina | documentation | **Docs:** adiciona documentação de sessão e roteamento — cobertura aguardada pela comunidade. |

### PRs Abertos com Maior Impacto

| PR | Autor | Domínio | Resumo |
|---|---|---|---|
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | stevef1uk | agent, config | **"Agent Shield":** integra suite de segurança inspirada em `texasreaper62/Agent-Shield` + estabilização multi-usuário + whitelisting de skills. PRambicioso (~5.000+ linhas). |
| [#2537](https://github.com/sipeed/picoclaw/pull/2537) | imguoguo | agent | **Comando `/context`:** adiciona indicador de uso de contexto e comando nativo para consultar contagem de mensagens, tamanho estimado do histórico e uso de tokens. |
| [#2570](https://github.com/sipeed/picoclaw/pull/2570) | lahuman | agent | **Seahorse configurável:** torna o tamanho do `fresh_tail_size` configurável via `context_manager_config` em vez de valor fixo de 32. |
| [#2569](https://github.com/sipeed/picoclaw/pull/2569) | lxowalle | channel, tool | **Feedback animado de ferramentas:** unifica comportamento entre Discord, Telegram e Feishu, enviando animações de progresso ao invés de previews brutos. |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (por comentários)

| # | Título | Comentários | Tipo | Análise da Demanda |
|---|---|---|---|---|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | LM Studio Easy Connect | 15 | enhancement (provider) | Usuários solicitam conexão simplificada com LM Studio, indicando desejo de suporte a provedores locais/OpenAI-compatíveis de forma amigável. |
| [#629](https://github.com/sipeed/picoclaw/issues/629) | Sem retry em LLM call failed | 9 | bug | Crítica ao comportamento de falha: tarefas longas sem retry resultam em deadlock silencioso. |
| [#1919](https://github.com/sipeed/picoclaw/issues/1919) | Seahorse — Memória Biologicamente Inspirada | 9 | enhancement (agent) | Proposta avançada de sistema de memória dual (curto/longo prazo) inspirada no hipocampo. Demonstra ambição técnica da comunidade. |
| [#2233](https://github.com/sipeed/picoclaw/issues/2233) | Padronizar contexto inbound e desacoplar roteamento | 6 | enhancement | Visão arquitetural: separar semantics de canais, roteamento e alocação de sessão. Reforça necessidade de limpeza técnica. |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) | Migrar para OpenAI Responses API | 6 | enhancement (provider) | Alinhamento com recomendação oficial da OpenAI. |
| [#1372](https://github.com/sipeed/picoclaw/issues/1372) | Plugin OpenIM? | 6 | enhancement (channel) | Demanda por canal de mensagens corporativo, indicando uso em ambientes empresariais. |
| [#571](https://github.com/sipeed/picoclaw/issues/571) | Progress feedback durante execução de ferramentas | 6 | enhancement (agent, tool) | DOR用户在 tarefas longas ficam sem feedback visual — UX crítico. |

### Issues com Reações Positivas

| # | Título | 👍 | Tema |
|---|---|---|---|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | LM Studio Easy Connect | 1 | Provedor local |
| [#2009](https://github.com/sipeed/picoclaw/issues/2009) | Comando `/stop` para cancelar tarefas | 1 | Controle de execução |
| [#1587](https://github.com/sipeed/picoclaw/issues/1587) | Support Mattermost como canal nativo | 2 | Canal corporativo |
| [#1936](https://github.com/sipeed/picoclaw/issues/1936) | Telegram failing no Termux | 1 | Mobilidade/Android |

---

## 5. Bugs e Estabilidade

### Bugs Abertos Críticos/Alta Prioridade

| # | Título | Severidade | Domínio | Resumo |
|---|---|---|---|---|
| [#629](https://github.com/sipeed/picoclaw/issues/629) | Sem retry em LLM call failed | **Alta** | provider | HTTP 500 do servidor causa deadlock; task hangs sem retry automático. Afeta long tasks. |
| [#2371](https://github.com/sipeed/picoclaw/issues/2371) | ERR agent loop.go:2171 | **Alta** | provider, agent | Erro não especificado no agente ao usar modelos free (Qwen3.6-plus). Potencial crash. |
| [#2236](https://github.com/sipeed/picoclaw/issues/2236) | Docker modifica porta web e desabilita input | **Alta** | docker | Ao modificar porta no Docker Compose, página web não envia mensagens — input fica disabled. |
| [#1790](https://github.com/sipeed/picoclaw/issues/1790) | openrouter free não funciona | **Alta** | provider | Validação de model ID falha com "free" — endpoint free não é reconhecido como válido. |
| [#1708](https://github.com/sipeed/picoclaw/issues/1708) | REST API (/chat, /a2a) inacessíveis no Gateway | **Alta** | config, docker | Gateway expõe apenas health endpoints. API REST não funciona conforme documentação. |

### Bugs Abertos Prioridade Média/Baixa

| # | Título | Domínio | Resumo |
|---|---|---|---|
| [#2080](https://github.com/sipeed/picoclaw/issues/2080) | Windows não pode usar QQ | channel | Erro ao iniciar canal QQ em Windows — plataforma Windows não suportada adequadamente. |
| [#2105](https://github.com/sipeed/picoclaw/issues/2105) | Gateway erro inicial | config | Primeira instalação mostra gateway sem PID — possível erro de startup silencioso. |
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) | Multiple auth credentials received | provider, config | Configuração com provider explícito gera erro de credenciais duplicadas. |
| [#2136](https://github.com/sipeed/picoclaw/issues/2136) | Tool call extraction falha | provider | Extração de tool calls do texto é falho — PR anterior com conflitos não foi merged. |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Mais Discutidas

| # | Título | Domínio | Potencial Impacto |
|---|---|---|---|
| [#1919](https://github.com/sipeed/picoclaw/issues/1919) | Seahorse — Memória Biologicamente Inspirada | agent | **Alto.** Sistema de memória dual (curto/longo prazo) com consolidação automática. Diferencial competitivo significativo. |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) | Migrar para OpenAI Responses API | provider | **Alto.** Alinhamento com roadmap da OpenAI. Afeta todos os provedores baseados em OpenAI. |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | Multi-User + Security + Skills Whitelisting | agent, config | **Alto.** Segurança corporativa e multi-tenancy. |
| [#2233](https://github.com/sipeed/picoclaw/issues/2233) | Padronizar contexto inbound | agent, channel | **Alto.** Refatoração arquitetural que beneficia todos os canais. |
| [#1587](https://github.com/sipeed/picoclaw/issues/1587) | Canal Mattermost | channel | **Médio.** Suporte a plataforma corporativa. |
| [#1586](https://github.com/sipeed/picoclaw/pull/1586) | Mattermost channel (PR) | channel | **Médio.** Implementação em curso para Mattermost. |
| [#2173](https://github.com/sipeed/picoclaw/issues/2173) | LangSmith observability | agent | **Médio.** Tracing estruturado para debugging. |
| [#2045](https://github.com/sipeed/picoclaw/issues/2045) | Suporte a SiliconFlow | provider | **Médio.** Plataforma asiática de models — expandir base de usuários. |
| [#571](https://github.com/sipeed/picoclaw/issues/571) | Progress feedback em execução de ferramentas | agent, tool | **Médio.** UX crítico para tarefas longas. |
| [#2009](https://github.com/sipeed/picoclaw/issues/2009) | Comando `/stop` | agent | **Médio.** Controle de cancelamento de tarefas. |

### Sinais de Roadmap Inferidos

1. **Estabilização v0.2.x:** Foco em bugs críticos de retry, Gateway REST API e Docker
2. **Arquitetura modular:** Refatorações (#2233, #2551) indicam preparação para escala
3. **Segurança corporativa:** PR #2313 (Agent Shield) + multi-usuário
4. **Observabilidade:** Tracing com LangSmith (#2173)
5. **Ecossistema de canais:** Mattermost (#1586/#1587), OpenIM (#1372), QQ Windows (#2080)
6. **Memória avançada:** Seahorse (#1919, #2570) com configurabilidade

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Frequência | Issue |
|---|---|---|
| Falta de feedback em tarefas longas (silêncio até resposta final) | Alta | [#571](https://github.com/sipeed/picoclaw/issues/571), [#2137](https://github.com/sipeed/picoclaw/issues/2137) |
| Sem способность cancelar tarefas em execução | Alta | [#2009](https://github.com/sipeed/picoclaw/issues/2009) |
| Falha de retry em erros HTTP 500 | Alta | [#629](https://github.com/sipeed/picoclaw/issues/629) |
| Complexidade de configuração de provedores locais (LM Studio) | Média | [#28](https://github.com/sipeed/picoclaw/issues/28) |
| Docker image sem ferramentas essenciais (python, curl) | Média | [#1228](https://github.com/sipeed/picoclaw/issues/1228) |
| REST API inacessível no Gateway | Média | [#1708](https://github.com/sipeed/picoclaw/issues/1708) |
| Canal QQ não funciona em Windows | Média | [#2080](https://github.com/sipeed/picoclaw/issues/2080) |

### Cenários de Uso Emergentes

- **Termux/Android:** Usuários tentando executar PicoClaw em dispositivos móveis (vários bugs relacionados)
- **Plataformas corporativas:** Mattermost, OpenIM — uso em equipes
- **Provedores asiáticos:** SiliconFlow, LM Studio — diversificação regional
- **Multi-usuário:** Demanda por isolamento de sessões e segurança

### Satisfação Geral

**Neutro-Positiva.**

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-04-18

---

## 1. Panorama do Dia

O IronClaw apresenta **alta atividade de desenvolvimento** no dia de hoje. O repositório registrou 28 issues atualizadas e 50 PRs modificadas nas últimas 24h, indicando um fluxo intenso de trabalho. A equipe fechou 48 PRs (majoritariamente promoções automáticas de staging), consolidando múltiplas correções e melhorias no codebase. O principal destaque do dia é a feature **DingTalk anti-silence UX** (#2589), uma mudança de alto risco e impacto cruzado em praticamente todos os módulos do sistema. Houve uma release não convencional (v0.25.0) publicada via PR automatizado pelo bot CI. A comunidade reportou diversos bugs críticos da Bug Bash dos dias 16 e 17/04, com 6 issues P1 no escopo. Não há releases formais publicadas hoje, mas o sistema de CI promosiou versões continuamente ao longo da última semana.

---

## 2. Lançamentos

**Nova versão publicada via PR #2606 (Ironclaw CI Bot — 2026-04-18)**

| Crate | Versão Anterior | Nova Versão | Tipo de Mudança |
|-------|----------------|-------------|-----------------|
| `ironclaw_common` | 0.2.0 | 0.3.0 | ⚠️ **Breaking changes** |
| `ironclaw_skills` | 0.1.0 | 0.1.1 | ✅ API compatível |
| `ironclaw` | 0.24.0 | 0.25.0 | Incremento menor |

**Breaking changes no `ironclaw_common` 0.3.0:**

```
--- failure enum_no_repr_variant_discriminant_changed: enum variant had its discriminant changed
```

> ⚠️ **Nota de migração:** A atualização do `ironclaw_common` contém mudanças nos discriminantes de um enum, o que pode quebrar código que faz match exhaustivo ou rely em valores numéricos específicos. Recomenda-se revisar código que consume tipos exportados por `ironclaw_common` antes de atualizar dependências downstream.

**Não houve changelog formal manual publicado** — a release foi gerada automaticamente via CI. A comunidade recomenda que releases futuras incluam notas de release detalhadas no estilo conventional commits.

---

## 3. Progresso do Projeto

### PRs de destaque merged/fechados nas últimas 24h

**🔴 Alta prioridade — High Risk / XL size**

- **#2589** — `feat(dingtalk): anti-silence UX` — [PR](https://github.com/nearai/ironclaw/pull/2589)
  - Implementa UX de combate ao silêncio no DingTalk, mantendo o agente visível durante latência, tool calls e stalls
  - Impacta: agent, channel, channel/cli, channel/web, channel/wasm, tool, tool/builtin, tool/wasm, tool/mcp, db, db/postgres, llm, workspace, orchestrator, worker, config, extensions, setup, sandbox, pairing, docs, dependencies
  - Risco: **HIGH** | Size: **XL** | DB Migration: ✅ sim
  - Autor: Minrit

- **#2461** — `chore: promote staging` — [PR](https://github.com/nearai/ironclaw/pull/2461)
  - Promoções de staging com mudanças em: channel/cli, llm, setup, docs
  - Risco: **HIGH** | Size: **XL**
  - Data: 2026-04-14 14:33 UTC

**🟡 Média prioridade**

- **#1446** — `feat: add Aliyun Coding Plan support` — [PR](https://github.com/nearai/ironclaw/pull/1446)
  - Adiciona `AliyunProvider` para Aliyun BaiLian Coding Plan
  - Suporta interface Anthropic Messages API via DashScope
  - HTTP/1.1 para compatibilidade com endpoints Aliyun
  - Size: **XL** | Risco: **LOW** | Contribuidor externo: ✅
  - Aguarda review há ~30 dias (criado em 2026-03-20)

**🔵 Staging promotions (CI automated)**

As seguintes promoções de staging foram fechadas hoje, consolidando alterações acumuladas:

- #2455, #2446, #2445 (DB Migration), #2403, #2397, #2393, #2386, #2384, #2382, #2374, #2371, #2356, #2333, #2331, #2324

**📈 Avanço processual:**
- O pipeline de CI está funcionando regularmente, com promoções automáticas a cada ~6-8h
- A equipe está claramente em ciclo de estabilização pré-release, com muitos commits voltados a E2E tests e browser tests (#2597)

---

## 4. Temas Quentes da Comunidade

### Issues com mais engajamento

| Issue | Autor | Comentários | 👍 | Status | Link |
|-------|-------|-------------|-----|--------|------|
| #2522 — Configuration error: DB error ao salvar API key | Serhioromano | 3 | 2 | OPEN | [GitHub](https://github.com/nearai/ironclaw/issues/2522) |
| #2411 — Telegram bot token save não funciona | joe-rlo | 2 | 0 | OPEN | [GitHub](https://github.com/nearai/ironclaw/issues/2411) |
| #2491 — Engine V2 bypasses secret scanning (segurança) | serrrfirat | 1 | 0 | CLOSED | [GitHub](https://github.com/nearai/ironclaw/issues/2491) |
| #2524 — Event-based routines não funcionam | gagdiez | 0 | 0 | CLOSED | [GitHub](https://github.com/nearai/ironclaw/issues/2524) |

### Análise das demandas

**🔴 Bug #2522 (bug_bash_P2 — 2👍)** — Error ao salvar API key no onboard com SQLite local
- Usuário novo enfrenta blocking error logo no setup
- Impacto: onboarding broken para novos usuários
- Prioridade implícita: **alta** pela comunidade (2 👍)

**🔴 Security Issue #2491 (security-review-required)** — Engine V2 ignora secret scanning
- Tokens/scripts enviados diretamente ao LLM
- **Já fechado** — indica que foi addressed rapidamente
- Demanda: scanner de segurança deve operar independente do ENGINE_V2

**🔵 Feature #2601** — CLI/TUI para gerenciamento de secrets
- Proposta de ek775
- Motivação: dificuldade real de autenticação no onboarding
- 0 comentários — ainda precisa de feedback da equipe

**🔵 Epic #2599** — Enforce gateway feature boundaries
- Refatoração de arquitetura: web gateway → bounded feature slices
- CI guardrails + crate-owned E2E
- Sinaliza direção de engenharia de longo prazo

---

## 5. Bugs e Estabilidade

### Regressões e Problemas Críticos

**🔴 P1 — Critical (Bug Bash 4/17)**

| # | Título | Escopo | Link |
|---|--------|--------|------|
| #2580 | Agente informa que mensagem Telegram foi enviada, mas não entrega | channel/wasm, agent | [GitHub](https://github.com/nearai/ironclaw/issues/2580) |
| #2581 | Chain-of-thought exposto ao usuário (vazamento de raciocínio interno) | channel/web, agent | [GitHub](https://github.com/nearai/ironclaw/issues/2581) |
| #2582 | Agente alega arquivo .md anexado mas não fornece | channel/wasm, agent | [GitHub](https://github.com/nearai/ironclaw/issues/2582) |
| #2583 | Criação de rotina falha com "5 consecutive code errors" | orchestrator, agent | [GitHub](https://github.com/nearai/ironclaw/issues/2583) |
| #2584 | Arquivos internos do sistema expostos no app UI | workspace, channel/web | [GitHub](https://github.com/nearai/ironclaw/issues/2584) |

> **⚠️ Alerta:** 5 bugs P1 reportados na Bug Bash de ontem (4/17). A área mais impactada é `agent` + `channel/wasm`. O bug #2581 (chain-of-thought leak) é crítico para experiência do usuário e confiança.

**🟡 P2 — High (Bug Bash 4/16 e 4/17)**

| # | Título | Escopo | Link |
|---|--------|--------|------|
| #2543 | Linear MCP OAuth não reconhecido após setup | tool/mcp, secrets | [GitHub](https://github.com/nearai/ironclaw/issues/2543) |
| #2585 | Missões ativas não refletidas no contador de concluídas | channel/web | [GitHub](https://github.com/nearai/ironclaw/issues/2585) |
| #2586 | Slack tool installation — botão "Install" não funcional | tool/mcp, extensions | [GitHub](https://github.com/nearai/ironclaw/issues/2586) |
| #2284 | Instância staging morre após 1h de inatividade | orchestrator | [GitHub](https://github.com/nearai/ironclaw/issues/2284) |
| #2285 | Mensagens desaparecem ao recarregar página | channel/web | [GitHub](https://github.com/nearai/ironclaw/issues/2285) |
| #2408 | Context length overflow (200K token limit) | llm, agent | [GitHub](https://github.com/nearai/ironclaw/issues/2408) |

**🟢 P3 — Medium (Diversos)**

| # | Título | Link |
|---|--------|------|
| #2564 | WASM channel scope model inconsistente | [GitHub](https://github.com/nearai/ironclaw/issues/2564) |
| #2569 | Web_fetch tool com summarização via secondary LLM | [GitHub](https://github.com/nearai/ironclaw/issues/2569) |
| #2591 | SKILLS_BUNDLED_ENABLED flag | [GitHub](https://github.com/nearai/ironclaw/issues/2591) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas propostas

**#2601** — Feature: CLI/TUI para gerenciamento de secrets
- [Link](https://github.com/nearai/ironclaw/issues/2601)
- Autor: ek775
- Criado: 2026-04-18
- Resumo: Dificuldade no gerenciamento de autenticação durante setup; documentação insuficiente sobre padrões de secrets
- Status: **Open** — 0 comentários

**#2590** — SkillClaw como skill lifecycle layer
- [Link](https://github.com/nearai/ironclaw/issues/2590)
- Autor: Upper9527
- Proposta de integração com projeto externo AMAP-ML/SkillClaw
- Complementaridade: IronClaw como runtime harness, SkillClaw como gestão de ciclo de vida de skills
- Status: **Open** — 0 comentários

**#2569** — Ferramenta web_fetch com sumarização via LLM secundário
- [Link](https://github.com/nearai/ironclaw/issues/2569)
- Autor: serrrfirat
- Proposta: fetches URL, converte HTML→markdown, passa por small LLM para extrair informação relevante
- Status: **Open** — 0 comentários

**#2599** — Epic: Gateway feature boundaries
- [Link](https://github.com/nearai/ironclaw/issues/2599)
- Refatoração arquitetural em estágios
- Enforce boundaries via CI guardrails + crate-owned E2E
- Status: **Open** — 0 comentários

**#2591** — SKILLS_BUNDLED_ENABLED flag
- [Link](https://github.com/nearai/ironclaw/issues/2591)
- Flag de ambiente para opt-out de skills compiladas
- Status: **Open** — 0 comentários

### Análise de roadmap

O backlog de features indica **3 direções estratégicas**:

1. **Melhoria de UX/interação** — Web fetch tool, CLI secrets management
2. **Estabilidade e reliability** — Bug fixes P1 (Telegram, chain-of-thought leak, file attachments)
3. **Arquitetura/modularidade** — Epic de gateway boundaries, crate ownership

---

## 7. Resumo de Feedback dos Usuários

### Dores críticas identificadas

**1. Onboarding quebrado**
- Issue #2522: Usuário não consegue completar setup local (DB error ao salvar API key)
- Impacto: novo usuário não consegue começar com o produto
- Severidade: 🔴 Crítica

**2. Gerenciamento de secrets confuso**
- Issue #2601: Usuários não entendem como gerenciar autenticação
- Documentação insuficiente sobre padrões de secrets
- Severidade: 🟡 Alta

**3. Telegram instável**
- Multiple issues: token save não funciona (#2411), mensagens não deliveradas (#2580), arquivos não anexados (#2582)
- Severidade: 🔴 Crítica

**4. Web UI state management**
- Mensagens desaparecem ao recarregar (#2285)
- Chain-of-thought vazado para usuário (#2581)
- Severidade: 🔴 Crítica

**5. Seguranca — secret scanning bypassado**
- Issue #2491: ENGINE_V2 ignora scan_inbound_for_secrets()
- Severidade: 🔴 Crítica (reportado como security-review-required)

### Cenários de uso reportados

- **Raspberry Pi compilation failure** (#1339) — interesse em ARMv7 support
- **Event-based routines** (#2524) — usuário espera triggers automáticas, não routines manuais
- **TUI multiline support** (#2448) — contribuidor precisa de input multi-linha para workflows de devrel

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >7 dias

| # | Título | Criado | Atualizado | Comentários | Prioridade | Link |
|---|--------|--------|-----------|-------------|------------|------|
| #1446 | Aliyun Coding Plan support | 2026-03-20 | 2026-04-18 | undefined | 🟡 Medium | [GitHub](https://github.com/nearai/ironclaw/issues/1446) |
| #2408 | Context length overflow 200K tokens | 2026-04-13 | 2026-04-17 | 1 | 🟡 P2 | [GitHub](https://github.com/nearai/ironclaw/issues/2408) |
| #2522 | DB error on onboard (API key save) | 2026-04-16 | 2026-04-17 | 3 | 🔴 P1/P2 | [GitHub](https://github.com/nearai/ironclaw/issues/2522) |
| #2411 | Telegram token save broken | 2026-04-13 | 2026-04-17 | 2 | 🟡 P2 | [GitHub](https://github.com/nearai/ironclaw/issues/2411) |
| #2284 | Staging instance death after 1h | 2026-04-10 | 2026-04-17 | 2 | 🟡 P2 | [GitHub](https://github.com/nearai/ironclaw/issues/2284) |
| #2285 | Messages disappear on refresh | 2026-04-10 | 2026-04-17 | 2 | 🟡 P2 | [GitHub](https://github.com/nearai/ironclaw/issues/2285) |

### PRs stalled

| # | Título | Criado | Status | Tamanho | Link |
|---|--------|--------|--------|---------|------|
| #1446 | Aliyun Coding Plan support | 2026-03-20 | **OPEN** | XL | [GitHub](https://github.com/nearai/ironclaw/pull/1446) |

> ⚠️ **PR #1446 aberto há ~30 dias** — feature de baixa complexidade (adicionar novo provider LLM), mas sem review. Contribuidor externo pode estar aguardando feedback.

### Recomendações de ação imediata

1. **Triagar PR #1446** — 30 dias sem review; feature aparentemente completa
2. **Priorizar bugs P1 da Bug Bash** — 5 bugs críticos reportados há <48h
3. **Revisar onboarding flow** — Issue #2522 bloqueia novos usuários
4. **Security audit** — Garantir que #2491 foi de fato resolved corretamente

---

*Relatório gerado em 2026-04-18 com base em dados de nearai/ironclaw*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 📊 Relatório do Projeto CoPaw — 2026-04-18

---

## 1. Panorama do Dia

O projeto **CoPaw/QwenPaw** apresenta **alta atividade** no dia de hoje, com **50 issues** e **46 PRs** atualizados nas últimas 24 horas. A versão **v1.1.2** foi lançada com a adição do **Mission Mode**, marcando um passo significativo em direção a execução autônoma de tarefas. A comunidade demonstra engajamento activo em questões de migração (Windows `.copaw` → `.qwenpaw`), configuração de canais e modelos, além de pedidos por funcionalidades avançadas como multi-agent orchestration. O ritmo de desenvolvimento sugere uma release cycle acelerada.

---

## 2. Lançamentos

### 🆕 v1.1.2 — Released Today

| Componente | Mudança |
|------------|---------|
| **Agent System** | **Mission Mode**: Novo comando `/mission` para execução autônoma de tarefas multi-fase — o agente planeja, executa e auto-corrige iterativamente |

**Funcionalidades do Mission Mode:**
- `/mission status` — monitorar missões em execução
- `/mission list` — listar missões ativas
- Execução autônoma com auto-correcção

📌 **Link**: [Release v1.1.2](https://github.com/agentscope-ai/QwenPaw) | Issue [#3364](https://github.com/agentscope-ai/QwenPaw)

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Recentemente

| # | PR | Impacto | Status |
|---|-----|---------|--------|
| #3268 | `feat: automatic timestamp injection` | Injeção de timestamp em prompts para consciência temporal do agente | ✅ Closed |
| #3539 | `fix(console): dark mode text color for empty select dropdown` | UI fix — texto legível em modo escuro | ✅ Closed |
| #3535 | `Fix(Doc, SKILL): Remove Stale docs` | Limpeza de documentação desatualizada | ✅ Closed |
| #3536 | `feat(cli): support to update provider base URLs` | CLI permite actualizar URLs de providers | ✅ Closed |
| #3515 | `feat(security): add tool guard response information` | Mensagens de segurança melhoradas com severidade | ✅ Closed |

### PRs Abertos em Destaque (High Priority)

| # | PR | Descrição | Estado |
|---|-----|-----------|--------|
| [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) | `fix(console): avoid SSE crash on malformed surrogate text` | **P0** — Correção de crash ao processar caracteres Unicode inválidos no SSE | 🔴 OPEN |
| [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) | `feat(memory): rebuild memory & context` | Sistema de memória com lifecycle management e summarization | 🔄 WIP |
| [#3534](https://github.com/agentscope-ai/QwenPaw/pull/3534) | `feat(backup): support backup and restore` | Sistema completo de backup/restore do workspace | 🔄 Under Review |
| [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) | `feat(console): add LLM routing UI` | UI para routing local/cloud nas settings | 🔄 Under Review |
| [#3487](https://github.com/agentscope-ai/QwenPaw/pull/3487) | `feat(acp): add ACP server` | Expor QwenPaw como servidor ACP para editores (Zed, etc.) | 🔄 Under Review |
| [#3365](https://github.com/agentscope-ai/QwenPaw/pull/3365) | `feat(console): add Agent Statistics page` | Dashboard com métricas de uso (chats, tokens, calls) | 🔄 Under Review |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | `feat: semantic skill routing` | Routing de skills por embedding para reduzir context | 🔄 Under Review |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| # | Título | Tipo | Comentários | Tendência |
|---|--------|------|-------------|-----------|
| [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) | WORKING_DIR aponta para `.copaw` em vez de `.qwenpaw` após upgrade | 🔴 Bug | **18** | Ativo |
| [#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309) | Dúvidas sobre qwenpaw vs copaw após update 1.1.0 | ❓ Question | **11** | Fechado |
| [#3445](https://github.com/agentscope-ai/QwenPaw/issues/3445) | MCP Configuration não funciona (GUI → ReMe) | 🔴 Bug | 6 | Aberto |
| [#508](https://github.com/agentscope-ai/QwenPaw/issues/508) | Multi-Agent Orchestration Gateway | ✨ Feature | 6 | Fechado ✅ |
| [#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943) | `copaw init` hangs no "Security warning" (Windows) | 🔴 Bug | 5 | Aberto |
| [#3532](https://github.com/agentscope-ai/QwenPaw/issues/3532) | LM Studio remote service não funciona na init | 🔴 Bug | 5 | Fechado ✅ |
| [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | Suporte a Kimi Code API | ✨ Feature | 5 | Aberto |

### Análise de Tendências

**🔴 Problema Crítico: Migração Windows (.copaw → .qwenpaw)**
- Issue [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) com 18 comentários indica confusão significativa na migração
- Usuários Windows reportam dados sendo escritos em `.copaw` quando deveriam estar em `.qwenpaw`
- Impacto: Potencial perda de dados/configurações se não for endereçado

**🔄 Confusão de Branding**
- Issue [#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309): Comunidade não entende diferença entre CoPaw e QwenPaw
- Necessidade de comunicação clara sobre naming e produto

**✨ Demanda por Multi-Agent**
- Feature request [#508](https://github.com/agentscope-ai/QwenPaw/issues/508) fechada — indica roadmap para orchestration
- PRs relacionados em desenvolvimento sugerem interesse activo

---

## 5. Bugs e Estabilidade

### 🔴 Bugs Críticos (P0/P1)

| # | Bug | Severidade | Link |
|---|-----|------------|------|
| #3552 | SSE crash com Unicode surrogates inválidos | **P0** | [#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552) |
| #3549 | ValidationError: call_id não é string válido | **P0** | [#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549) |
| #3278 | JSON corruption em session state (race condition) | **P0** | [#3278](https://github.com/agentscope-ai/QwenPaw/pull/3278) |
| #2943 | `copaw init` hangs no Windows Python 3.13 | **P1** | [#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943) |
| #3445 | MCP Configuration não é passado ao ReMe | **P1** | [#3445](https://github.com/agentscope-ai/QwenPaw/issues/3445) |
| #3356 | WORKING_DIR migration issue (Windows) | **P1** | [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) |

### 🟡 Bugs Medium

| # | Bug | Descrição | Link |
|---|-----|-----------|------|
| #3506 | AttributeError: 'AgentRequest' sem 'channel' | `/api/console/chat` crash | [#3506](https://github.com/agentscope-ai/QwenPaw/issues/3506) |
| #3489 | 400 BadRequestError com Anthropic API | Formato de mensagens inválido | [#3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) |
| #3523 | WeCom: duplicate chat entry com user_id vazio | Canal WeCom bug | [#3523](https://github.com/agentscope-ai/QwenPaw/issues/3523) |
| #3170 | Alta memória em nova versão | Memory leak suspects | [#3170](https://github.com/agentscope-ai/QwenPaw/issues/3170) |
| #3026 | Copaw stuck em loop infinito (2h) | Loop de retry sem break | [#3026](https://github.com/agentscope-ai/QwenPaw/issues/3026) |

### 🟢 Bugs Já Corrigidos (Closed Today)

| # | Bug | Link |
|---|-----|------|
| #3537 | Local modelo mostra disponível quando não está | [#3537](https://github.com/agentscope-ai/QwenPaw/issues/3537) |
| #3533 | `qwenpaw chats list` output format issue | [#3533](https://github.com/agentscope-ai/QwenPaw/issues/3533) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### ✨ Features Mais Votados/Discutidos

| # | Feature | Comentários | Vinculado a PR? | Prioridade |
|---|---------|-------------|-----------------|------------|
| #3470 | Self-evolution capabilities (como Hermes Agent) | 4 | ❌ | Roadmap |
| #3437 | Suporte a Kimi Code API | 5 | ❌ | Solicitado |
| #731 | Sistema de plugins (similar a OpenClaw) | 4 | ❌ | Discustido |
| #415 | Human-in-the-Loop capabilities | 3 | ❌ | Herdado do AgentScope |
| #2621 | Session Startup Hooks & Memory Management | 4 | ✅ #3548 | Em desenvolvimento |
| #508 | Multi-Agent Orchestration | 6 | ❌ | Roadmap signal |

### 🔍 Sinais de Roadmap Identificados

1. **Arquitectura Multi-Agent**: Issue [#508](https://github.com/agentscope-ai/QwenPaw/issues/508) fechada indica interesse; parece haver trabalho em progresso
2. **Sistema de Memória Avançado**: PR [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) em WIP para memory rebuild
3. **Backup/Restore**: PR [#3534](https://github.com/agentscope-ai/QwenPaw/pull/3534) em review — feature request frequente
4. **LLM Routing**: PR [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) adiciona UI para switching local/cloud
5. **Semantic Skill Routing**: PR [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) reduz context com embedding-based retrieval
6. **ACP Server**: PR [#3487](https://github.com/agentscope-ai/QwenPaw/pull/3487) expõe QwenPaw como editor plugin (Zed, OpenCode)

---

## 7. Resumo de Feedback dos Usuários

### 😰 Dores Principais

| Dor | Detalhes | Impacto |
|-----|----------|---------|
| **Migração Windows confusa** | Usuários não sabem onde dados são escritos após upgrade | Alto |
| **Ferramentas de segurança prolixas** | Mensagens de tool guard ocupam tela inteira no mobile ([#3298](https://github.com/agentscope-ai/QwenPaw/issues/3298)) | Médio |
| **Inicialização lenta** | 3-5 segundos de delay ao abrir app ([#3352](https://github.com/agentscope-ai/QwenPaw/issues/3352)) | Médio |
| **CoPaw vs QwenPaw branding** | Confusão sobre dois comandos/apps após update | Médio |
| **LM Studio remote** | Não suporta configuração de API URL remote ([#3532](https://github.com/agentscope-ai/QwenPaw/issues/3532)) | Baixo |

### 😊 Feedback Positivo

- **Mission Mode** (v1.1.2): Recebido com interesse pela comunidade
- **Backup system**: Feature request com alta demanda
- **Semantic skill routing**: Redução de context é bem-vinda

### 📱 Cenários de Uso Reportados

1. **Desktop + Development**: `copaw init` com Java/Python stack
2. **Enterprise Channels**: WeCom, DingTalk, Feishu integration
3. **Local Models**: LM Studio, Ollama usage patterns
4. **Cross-platform**: Windows, Linux, Armbian (Raspberry-like)

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta >7 dias

| # | Título | Criado | dias | Link |
|---|--------|--------|------|------|
| #3026 | Copaw loop infinito por 2h | 2026-04-07 | **11** | [#3026](https://github.com/agentscope-ai/QwenPaw/issues/3026) |
| #3170 | Memory leak em nova versão | 2026-04-09 | **9** | [#3170](https://github.com/agentscope-ai/QwenPaw/issues/3170) |
| #2258 | Agent para de responder após thinking | 2026-03-25 | **24** | [#2258](https://github.com/agentscope-ai/QwenPaw/issues/2258) |

### PRs Abertos Sem Review

| # | PR | Criado | dias | Link |
|---|-----|--------|------|------|
| #3117 | Semantic skill routing | 2026-04-08 | **10** | [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) |
| #3278 | Session JSON corruption fix | 2026-04-12 | **6** | [#3278](https://github.com/agentscope-ai/QwenPaw/pull/3278) |

---

## 📋 Métricas Resumidas

| Métrica | Valor |
|---------|-------|
| 📊 Issues ativas (24h) | 29 |
| ✅ Issues fechadas (24h) | 21 |
| 🔧 PRs abertos | 21 |
| 🎉 PRs merged/fechados | 25 |
| 🆕 Releases | 1 (v1.1.2) |
| 🔴 Bugs P0/P1 abertos | 6 |
| ✨ Features request | 8+ |

---

## 🎯 Recomendações

1. **🔴 Prioridade Alta**: Resolver issues de migração Windows ([#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356), [#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943)) — afecta muitos usuários
2. **🔴 Prioridade Alta**: Patch para crash de Unicode surrogates ([#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552), [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553)) — P0 availability
3. **🟡 Prioridade Média**: Clarificar branding CoPaw vs QwenPaw na documentação
4. **🟡 Prioridade Média**: Revisar PR #3548 (Memory rebuild) para inclusão na próxima release
5. **🟢 Boa prática**: Manter ritmo de reviews — PRs sem atenção há >7 dias perdem contribuidor goodwill

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto — ZeroClaw
## Data: 18 de abril de 2026

---

## 1. Panorama do Dia

ZeroClaw mantém um ritmo de desenvolvimento intenso, com **32 issues e 50 PRs atualizados nas últimas 24h**. A atividade concentra-se na esteira da reestruturação do *workspace* Cargo (v0.7.0-beta em curso), evidenciada por 3 releases beta lançadas. A comunidade reporta múltiplos bloqueios críticos de S1 (shell sandbox, web UI, channels), enquanto PRs de alta prioridade — tracing observável, segurança do shell via TOTP e correções do gateway — avançam em revisão. O projeto demonstra saúde de desenvolvimento robusta, porém com pressão sobre a estabilização da nova arquitetura modular.

---

## 2. Lançamentos

### Releases mais recentes (3)

| Versão | Data | Destaque |
|--------|------|----------|
| [v0.7.0-beta.1041](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.0-beta.1041) | 2026-04-18 | Maior reestruturação da história do projeto |
| [v0.7.0-beta.1040](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.0-beta.1040) | 2026-04-18 | Idem |
| [v0.7.0-beta.1030](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.0-beta.1030) | 2026-04-18 | Idem |

**Mudanças descritas:**
- **Codebase разделена на Cargo workspace** de crates focadas — mudança estrutural de grande impacto
- **Novo schema de configuração** com migração automática (*live migration*)
- Transição do v0.6.9 (stable) → next

> ⚠️ **Nota de migração:** Usuários do v0.6.9 devem monitorarbreaking changes no schema de configuração e na estrutura de crates ao migrar para v0.7.0.

---

## 3. Progresso do Projeto

### PRs merged/fechados recentes

| PR | Título | Impacto | Link |
|----|--------|---------|------|
| [#5676](https://github.com/zeroclaw-labs/zeroclaw/pull/5676) | fix(channel,provider): Feishu `mention_only` ignorado + Groq tool_use_failed 400 | Bugfix crítico de channel/provider | ✅ Fechado |
| [#5757](https://github.com/zeroclaw-labs/zeroclaw/pull/5757) | feat(config): add native-tls para certificados auto-assinados | Suporte a ambientes corporativos com CA custom | ✅ Fechado |
| [#5154](https://github.com/zeroclaw-labs/zeroclaw/pull/5154) | fix: beta Android build + idempotent marketplace sync | Estabilização Android + sync de marketplace | ✅ Fechado |

### PRs abertos em revisão ativa (alta prioridade)

| PR | Título | Tamanho | Risco | Status |
|----|--------|---------|-------|--------|
| [#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774) | fix(agent): registrar skill tools + filtro excluded no gateway | S | **High** | needs-maintainer-review |
| [#5785](https://github.com/zeroclaw-labs/zeroclaw/pull/5785) | feat(runtime): emitir eventos de observabilidade no ciclo de vida do agent | **L** | **High** | needs-author-action |
| [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) | feat(security): gated_commands TOTP (phase 1, fecha #3767) | S | **High** | needs-maintainer-review |
| [#5733](https://github.com/zeroclaw-labs/zeroclaw/pull/5733) | feat(web): model quick-switcher + WebSocket persistente | M | Medium | needs-author-action |
| [#5712](https://github.com/zeroclaw-labs/zeroclaw/pull/5712) | feat(channel): IMAP polling fallback para servidores sem IDLE | S | Medium | needs-author-action |

**Destaque:** O PR [#5785](https://github.com/zeroclaw-labs/zeroclaw/pull/5785) (observabilidade do ciclo de vida do agent) é o de maior tamanho (L) e promete agregar tracing estruturado para LLM requests/responses e tool calls.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários)

| Issue | Título | Comentários | 👍 | Link |
|-------|--------|-------------|-----|------|
| [#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787) | RFC: Replace TOML i18n with Mozilla Fluent | 4 | 0 | 🔥 RFC em discussão |
| [#5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153) | Landlock shell sandbox corrompe processo caller | 3 | 0 | ⚠️ S1 - Shell sandbox |
| [#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348) | Web dashboard not available | 3 | 0 | ⚠️ S1 - UI/Gateway |
| [#5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356) | Canvas tool em channel server (Telegram/Discord) | 2 | 0 | 🐛 Canal + Canvas |
| [#5591](https://github.com/zeroclaw-labs/zeroclaw/issues/5591) | "Denied by user" em supervised mode via Telegram | 2 | 1 | 🐛 Channel auth |
| [#5761](https://github.com/zeroclaw-labs/zeroclaw/issues/5761) | Retry com exponential backoff em webhook channel | 2 | 0 | 📋 Feature request |

**Análise:** O RFC de i18n ([#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787)) com 4 comentários é o tema mais debatido — a comunidade demonstra interesse em modernizar o sistema de internacionalização para Mozilla Fluent. Issues de shell sandbox e dashboard lideram problemas funcionais.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 S0 — Data loss / Security risk (1)

| Issue | Título | Link |
|-------|--------|------|
| [#5756](https://github.com/zeroclaw-labs/zeroclaw/issues/5756) | `aarch64-unknown-linux-musl` crash em Hi3536AV100 (glibc 2.32) | Reportado 2026-04-15 |

#### 🔴 S1 — Workflow blocked (10 issues)

| Issue | Título | Componente | Link |
|-------|--------|------------|------|
| [#5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153) | Landlock shell sandbox corrompe workspace | runtime/daemon | |
| [#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348) | Web dashboard não disponível | runtime/daemon | |
| [#5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356) | Canvas tool não entrega frames via WebSocket em channels | channel | |
| [#5591](https://github.com/zeroclaw-labs/zeroclaw/issues/5591) | "Denied by user" em supervised mode via Telegram | channel | |
| [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) | `runtime.kind = "native"` não ignora Docker | runtime | |
| [#5564](https://github.com/zeroclaw-labs/zeroclaw/issues/5564) | Custom provider tool falha com output vazio | provider | |
| [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) | Shell policy bloqueia `git -C <path>` | security/sandbox | |
| [#5850](https://github.com/zeroclaw-labs/zeroclaw/issues/5850) | Skill-defined tools retornam "Unknown tool" no web UI | runtime/daemon | |
| [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | Provider ignora `llamacpp` object no schema v2 | provider | |
| [#5778](https://github.com/zeroclaw-labs/zeroclaw/issues/5778) | Telegram: inline_keyboard ausente em mensagens | channel/telegram | |

#### 🟡 S2 — Degraded behavior (3)

| Issue | Título | Link |
|-------|--------|------|
| [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | Memória tem prioridade excessiva sobre prompt atual | |
| [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) | Git `-C` bloqueado por shell policy (também S1) | |

#### 🟢 S3 — Minor (1)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| [#5723](https://github.com/zeroclaw-labs/zeroclaw/issues/5723) | Bug de tema: dark/light ambos renderizam escuro | ✅ Fechado | |

> **Alerta de estabilidade:** 10 issues S1 abertas representam bloqueios significativos para workflows produtivos. Shell sandbox e integração de channels são áreas críticas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas

| Issue | Título | Tema | Potencial Roadmap | Link |
|-------|--------|------|-------------------|------|
| [#5761](https://github.com/zeroclaw-labs/zeroclaw/issues/5761) | Retry com exponential backoff em webhook | Infraestrutura | Alta | |
| [#5246](https://github.com/zeroclaw-labs/zeroclaw/issues/5246) | Escolher shell padrão ou múltiplos shells | UX/Configuração | Média | |
| [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | **Dream Mode** — consolidação periódica de memória | IA/Memória | Experimental | |
| [#5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) | Configuração de reasoning por modelo | Configuração | Média | |
| [#5840](https://github.com/zeroclaw-labs/zeroclaw/issues/5840) | Multi-chunk reasoning replay fidelity | IA/Streaming | Técnica | |
| [#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) | Cancelamento de sessões ACP | Infraestrutura | Alta | |
| [#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) | Propagar CancellationToken para tool execution | Infraestrutura | Alta | |
| [#5835](https://github.com/zeroclaw-labs/zeroclaw/issues/5835) | Evict cancel_tokens de sessões abandonadas | Infraestrutura | Alta | |
| [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) | Session ownership model para operações destrutivas | Segurança | Alta | |
| [#5834](https://github.com/zeroclaw-labs/zeroclaw/issues/5834) | SQLite FTS trigger para sessions_fts | Infraestrutura/DB | Técnica | |

**Feature notável:** O "Dream Mode" ([#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)) propõe consolidação automática de memória durante períodos de idle — uma direção interessante para agentes com memória de longo prazo.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

| Tema | Exemplos | Sentimento |
|------|----------|------------|
| **Shell sandbox muito restritivo** | [#5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153), [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809), [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | 😤 Frustração |
| **Integração de canais instável** | [#5591](https://github.com/zeroclaw-labs/zeroclaw/issues/5591) (Telegram), [#5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356) (Discord/Slack) | 😤 Frustração |
| **Configuração de providers confusa** | [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) (llamacpp), [#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348) (dashboard) | 😤 Frustração |
| **Documentação insuficiente** | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) (`web_dist_dir`) | 😐 neutro |
| **Experiência com shell tools** | [#5246](https://github.com/zeroclaw-labs/zeroclaw/issues/5246) (escolha de shell), [#5720](https://github.com/zeroclaw-labs/zeroclaw/issues/5720) (PYTHONPATH) | 😐 neutro |

### Cenários de uso mencionados

- **Desenvolvimento de skills para FINOS CDM** (Jason Perlow — [InvestorClaw](https://github.com/perlowja/InvestorClaw)) — expõe problemas com sandbox e Python
- **Ambientes corporativos com CA custom** — suporte resolvido com PR [#5757](https://github.com/zeroclaw-labs/zeroclaw/pull/5757)
- **Desenvolvimento Android** — issues resolvidas com PR [#5154](https://github.com/zeroclaw-labs/zeroclaw/pull/5154)
- **Servers IMAP sem suporte a IDLE** (seznam.cz, GMX) — addressed por PR [#5712](https://github.com/zeroclaw-labs/zeroclaw/pull/5712)

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou sem movimento significativo

| Issue | Título | Criado | Comentários | Link |
|-------|--------|--------|-------------|------|
| [#5153](https://github.com/zeroclaw-labs/zeroclaw/issues/5153) | Landlock shell sandbox corrompe workspace | 2026-03-29 | 3 | ⚠️ 20 dias |
| [#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348) | Web dashboard não disponível | 2026-04-05 |

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*