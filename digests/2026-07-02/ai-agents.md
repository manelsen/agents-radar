# Resumo diário do ecossistema de agentes de IA 2026-07-02

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-07-01 21:22 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-07-02

---

## 1. Panorama do Dia

O projeto **NullClaw** apresenta **baixa atividade** em 02 de julho de 2026. Não houve registros de novos lançamentos, pull requests merged ou fechadas nas últimas 24 horas. O volume de Issues permanece estável com apenas **1 Issue ativa** em acompanhamento — um bug crítico relacionado à compilação Zig em ambiente Android/Termux. O repositório encontra-se em estado de manutenção passiva, sem contribuições significativas recentes que impactem o estado atual da base de código.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24h.**

O projeto não publicou versões desde os últimos marcos de release documentados. Recomenda-se monitorar a aba [Releases do NullClaw](https://github.com/nullclaw/nullclaw/releases) para eventuais publicações relacionadas à correção do bug #868 ou outras melhorias pendentes.

---

## 3. Progresso do Projeto

**Nenhuma PR merged ou fechada nas últimas 24h.**

O repositório não registra atividade de merge no período analisado. A ausência de PRs pode indicar:
- Período de estabilização após último release
- Foco da equipe em issues abertas (particularmente a #868)
- Ciclo de desenvolvimento em fase de planejamento

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| # | Título | Autor | Comentários | 👍 | Status |
|---|--------|-------|-------------|-----|--------|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) | [bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat | NOTJuangamer10 | 6 | 0 | OPEN |

**Análise:**  
A Issue #868 é o **único tema ativo** na comunidade. O problema envolve:

- **Ambiente:** Xiaomi Redmi Note 9 + LineageOS 22.2 + Termux (aarch64)
- **Versão afetada:** NullClaw v2026.4.17 + Zig 0.16.0
- **Erro:** Falha ao criar link simbólico `options.zig` durante `zig build -Doptimize=ReleaseSmall`
- **Causa identificada:** Erro `AccessDenied` em syscall `linkat`, comum em sistemas de arquivos Android/Termux com permissões restritivas

**Engajamento:** 6 comentários indicam que a comunidade está ativamente discutindo soluções alternativas (workarounds) e coletando informações de ambiente. A Issue permanece **aberta há 70 dias** (desde 2026-04-23), sinalizando necessidade de atenção prioritária.

---

## 5. Bugs e Estabilidade

### Bug Reportado

| Severidade | Issue | Título | Dias em Aberto |
|------------|-------|--------|----------------|
| **Alta** | [#868](https://github.com/nullclaw/nullclaw/issues/868) | zig build fails on Android/Termux (aarch64) | 70 |

**Classificação:**
- **Severidade:** Alta — impede compilação em plataforma Android/Termux (aarch64)
- **Impacto:** Usuários de dispositivos móveis/arm64 ficam impossibilitados de compilar o projeto
- **Risco:** Regressão silenciosa para base de usuários mobile, especialmente relevante dado o suporte a Termux

**Notas Técnicas:**  
O erro `AccessDenied` no `linkat` indica incompatibilidade com sistemas de arquivos que não suportam hard links (como FAT32, tmpfs com restrições, ou ambientes containerizados). Possíveis soluções:
1. Fallback para cópia de arquivo ao invés de link simbólico
2. Detecção de capacidade do filesystem
3. Documentação de workaround (usar diretório tmpfs com permissões adequadas)

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova feature request registrada nas últimas 24h.**

O backlog de features não apresenta atualizações recentes. A Issue #868 pode indirectly sinalizar uma necessidade de:
- **Melhor compatibilidade cross-platform** (especialmente mobile/embedded)
- **Detecção automática de capacidades do filesystem**
- **Documentação expandida** sobre limitações de compilação em ambientes restritivos

---

## 7. Resumo de Feedback dos Usuários

### Feedback Identificado (Issue #868)

| Aspecto | Observação |
|---------|------------|
| **Caso de uso** | Compilação em dispositivos Android via Termux |
| **Dispositivo de referência** | Xiaomi Redmi Note 9 (aarch64) |
| **Versão utilizada** | NullClaw v2026.4.17 |
| **Dorc** | Impossibilidade de compilar com otimização ReleaseSmall |
| **Satisfação** | Insatisfeito — bug impede workflow principal |

**Dores identificadas:**
1. 🚨 **Bloco crítico:** Usuários mobile não conseguem compilar o projeto
2. 📱 **Fragmentação de plataforma:** Falta de testes em ambiente Android/Termux
3. 🔧 **Workaround ausente:** Documentação insuficiente para ambientes restritivos

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Em Aberto há Muito Tempo

| # | Título | Criado | Atualizado | Dias Inativo | Prioridade |
|---|--------|--------|------------|--------------|------------|
| [#868](https://github.com/nullclaw/nullclaw/issues/868) | [bug] zig build fails on Android/Termux | 2026-04-23 | 2026-07-01 | **70** | 🔴 Alta |

**Análise:**  
A Issue #868 está **aberta há 70 dias** e possui 6 comentários — indicando que a comunidade está aguardando resposta ou solução da equipe mantenedora. A falta de ação pode impactar:

- Percepção de suporte a plataformas mobile
- Retenção de usuários em ambiente Android/Termux
- Potencial fragmentação de forks com patches não upstreamados

**Recomendação:** Priorizar investigação e resposta oficial, mesmo que seja para documentar workaround ou estimar timeline de correção.

---

## Métricas Resumidas (24h)

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 0 |
| PRs abertas | 0 |
| PRs merged/fechadas | 0 |
| Releases | 0 |
| Bugs críticos | 1 |

---

**Próxima Atualização:** 2026-07-03  
**Fontes:** [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) | [Issues](https://github.com/nullclaw/nullclaw/issues) | [Pull Requests](https://github.com/nullclaw/nullclaw/pulls)

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de Referência:** 2026-07-02
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** neste período. De um lado, **Hermes Agent, NanoBot, CoPaw, IronClaw e ZeroClaw** operam em ciclos de desenvolvimento intensos com 50+ PRs diários e releases frequentes, evidenciando adoção em produção e comunidades engajadas. Do outro, **NullClaw** permanece em modo de manutenção passiva, sinalizando possivelmente abandono ou reorientação estratégica. Os projetos compartilham desafios comuns — compatibilidade mobile (Android/Termux), segurança de sandbox e multi-canal — mas diferem significativamente em arquitetura (Rust nativo vs. TypeScript/Node, abordagens de providers e memory management). A tendência é de **amadurecimento rápido**: features como context compression, multi-agente orchestration e OAuth-first authentication emergem como requisitos de tabela, não diferenciadores.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas | PRs (24h) | Releases | Bugs Críticos | Saúde |
|---------|:-------------:|:---------:|:--------:|:------------:|:-----:|
| **Hermes Agent** | 48 | 50 | 1 (v0.18.0) | 1 P1 (fechado) | 🟢 Boa |
| **NanoBot** | 8 | 47 | 0 | 1 crítico (fechado) | 🟢 Alta |
| **CoPaw** | 20 | 50 | 0 | 2 críticos | 🟡 Moderada |
| **IronClaw** | 23 | 50 | 1 (v0.29.1) | 4 P1 | 🟠 Atenção |
| **ZeroClaw** | 50 | 50 | 0 | 5 S1 | 🟡 Moderada |
| **PicoClaw** | 2 | 11 | 1 (nightly) | 1 crítica | 🟡 Moderada |
| **NullClaw** | 1 | 0 | 0 | 1 alta (70d) | 🔴 Crítica |

**Observações:**
- **Hermes Agent** destaca-se pelo volume de entrega: 998 PRs merged e ~1.720 commits no último ciclo, com release de quebra (breaking changes esperados).
- **NullClaw** é a anomalia: nenhum PR ou release em 24h, bug aberto há 70 dias sem resolução.
- **IronClaw** apresenta concentração de bugs P1 (4), sugerindo technical debt acumulada na release v0.29.1.

---

## 3. Posicionamento do Projeto Principal

Considerando volume de atividade, maturidade de release e saúde geral, **Hermes Agent (NousResearch)** emerge como referência do ecossistema:

### Vantagens Competitivas

| Dimensão | Hermes Agent | Diferencial |
|----------|--------------|-------------|
| **Volume de代码** | ~251K linhas adicionadas/ciclo | Base mais abrangente |
| **Comunidade** | 370+ contribuidores | Maior diversidade de expertise |
| **Integrações** | 10+ canais (Telegram, WhatsApp, Mattermost, Slack, Feishu) | Cobertura multi-canal mais ampla |
| **Ciclo de release** | Agressivo (~1 PR/3min) | Time de entrega competente |
| **Maturidade** | v0.18.0 com CHANGELOG robusto | Processo de release disciplinado |

### Diferenças Técnicas Arquiteturais

| Aspecto | Hermes Agent | NanoBot | IronClaw | ZeroClaw |
|---------|:------------:|:-------:|:--------:|:--------:|
| **Linguagem primária** | Python/TypeScript | Python | Rust | Rust |
| **Sandbox approach** | bwrap + exec | Custom exec | Crate-based | Wasm plugins |
| **Memory model** | Session-based | ReMe + reranker | Thread-based | SOP-driven |
| **Provider abstraction** | Multi-provider | Anthropic OAuth | Native crates | OpenAI-compatible |

**Tamanho da Comunidade:**
- Hermes Agent: 370+ contribuidores, ~1.720 commits/ciclo
- NanoBot: ComunidadeHKUDS, PRs de segurança ativos
- IronClaw: Equipe Near AI, foco enterprise
- CoPaw: agentscope-ai, forte presença asiática (Feishu, QQ)

---

## 4. Focos Técnicos Compartilhados

Os sete projetos convergem em **seis eixos técnicos** que representam os desafios de maturidade do ecossistema:

### 4.1 Compatibilidade Mobile/Android/Termux

Três projetos enfrentam problemas idênticos em Android/Termux:

| Projeto | Issue | Sintoma |
|---------|-------|---------|
| **NullClaw** | #868 | `AccessDenied` em `linkat` — symlinks não suportados |
| **PicoClaw** | #3164 | Process hooks crash gateway em 2s |
| **NanoBot** | — | Fix #4119 para symlink escapes em exec |

**Conclusão:** O ecossistema precisa de abstração de filesystem que detecte capacidades e forneça fallbacks (cópia ao invés de link).

### 4.2 Segurança de Sandbox e MCP

Vulnerabilidades de escape e bypass aparecem em múltiplos projetos:

| Projeto | Vulnerabilidade | Severidade |
|---------|------------------|:-----------|
| **NanoBot** | MCP deny-all bypass (#4434) | 🔒 Crítica |
| **NanoBot** | Relative symlink workspace escape (#4119) | 🔒 Crítica |
| **PicoClaw** | Cross-site launcher setup requests (#3160) | 🟠 Alta |
| **PicoClaw** | Deny patterns inativos com custom allow (#3161) | 🟠 Alta |
| **ZeroClaw** | Zip-bomb inflation em skills (#8574) | 🟠 Alta |

### 4.3 Context Window e Compressão

Demanda unânime por gestão de contexto:

| Projeto | Feature | Impacto |
|---------|---------|---------|
| **CoPaw** | Headroom integration (#5063) — compressão 60-95% | 🔥🔥🔥 |
| **CoPaw** | Hard cap em tool results (#5342) | 🔥🔥🔥 |
| **NanoBot** | Eager consolidation (#4626) | 🔥🔥 |
| **NanoBot** | Prune low-value context payloads (#4581) | 🔥🔥 |
| **CoPaw** | Context compression remove mensagens críticas (#5710) | 🐛 Bug |

### 4.4 Autenticação e Providers

Diversificação de métodos de autenticação:

| Projeto | Feature | Status |
|---------|---------|--------|
| **NanoBot** | Anthropic OAuth (#4632) | PR aberta |
| **IronClaw** | Slack personal OAuth (#5502) | PR aberta |
| **IronClaw** | Credential-free hosted MCP (#4927) | PR pendente |
| **ZeroClaw** | OAuth credential fallback fix (#8571) | PR aberta |

### 4.5 Multi-Agente e Orquestração

| Projeto | Feature | Sinais de Roadmap |
|---------|---------|------------------|
| **CoPaw** | Multi-agent Feishu collaboration | Broken (#5709) |
| **ZeroClaw** | Goal Mode para sessões autônomas (#8393) | PR XL aberta |
| **NanoBot** | Aggregated result mode para subagentes (#4624) | PR aberta |
| **IronClaw** | Progressive tool disclosure (#5149) | PR XL pendente |

### 4.6 Integração Enterprise

| Canal/Integração | Projetos Afetados | Status |
|------------------|-------------------|--------|
| **Slack** | Hermes, IronClaw, ZeroClaw | Múltiplos bugs P2 |
| **Google Workspace** | IronClaw | Protocol violation |
| **Feishu** | CoPaw, NanoBot | Multi-agent broken |
| **Telegram** | Todos exceto CoPaw | Bugs de UX/stabilidade |
| **WeChat/WeCom** | ZeroClaw, PicoClaw | Suporte em expansão |

---

## 5. Análise de Diferenciação

### 5.1 Público-Alvo e Posicionamento

| Projeto | Público Primário | Posicionamento |
|---------|------------------|----------------|
| **Hermes Agent** | DevOps, sysadmins, empresas | Agente generalista com máxima integração |
| **NanoBot** | Desenvolvedores Claude Code | Workflow de code agent com memory focus |
| **IronClaw** | Equipes Near AI, enterprise | Rotinas (routines) e automação de workflow |
| **CoPaw** | Usuários asiáticos, devs Qwen | Plugin ecosystem, skill marketplace |
| **ZeroClaw** | Enterprise com requisitos compliance | Security-first, Rust/Wasm, SOPs |
| **PicoClaw** | Embedded/IoT, mobile | Leveza, Telegram-first |
| **NullClaw** | — | Manutenção indefinida |

### 5.2 Arquitetura Técnica

| Dimensão | Abordagem Rust-native | Abordagem Python/TS |
|----------|----------------------|---------------------|
| **Performance** | Superior (ZeroClaw, IronClaw) | Adequada para maioria de casos |
| **Ecosistema** | Menor base de contribuidores | Maior pool de desenvolvedores |
| **Deploy** | Binários estáticos, WASM | Dependencies mais complexas |
| **Debugging** | Rust tooling maturing | Maturidade alta (pdb, IDEs) |
| **Memory** | Zero-copy, ownership | GC-based, mais flexível |

**ZeroClaw** diferencia-se com a proposta de migrar frontend de React/Vite para Rust→Wasm (Dioxus/Leptos), sinalizando ambição arquitetural de longo prazo.

### 5.3 Modelos de Feature Flags

| Projeto | Estratégia | Exemplo |
|---------|------------|---------|
| **Hermes Agent** | Release tag + breaking changes documentados | v0.18.0 com ~2.200 arquivos alterados |
| **ZeroClaw** | RFC formal + trackers de programa | RFC #8303 (Goal Mode) accepted |
| **IronClaw** | Semantic versioning rigoroso | Breaking changes em ironclaw_common 0.4→0.5 |
| **CoPaw** | Beta pública + bug tracker centralizado | v2.0.0-beta tracking via #5273 |
| **NanoBot** | Feature PRs independentes | Anthropic OAuth emerge de issue #4604 |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Categoria | Projetos | Métrica |
|-----------|----------|---------|
| **Iteração rápida (sprints concentrados)** | NanoBot, Hermes Agent | 47-50 PRs/24h |
| **Iteração consistente** | CoPaw, IronClaw, ZeroClaw | 20-50 PRs/24h |
| **Manutenção** | PicoClaw | 11 PRs/24h + nightly |
| **Estagnação** | NullClaw | 0 PRs, 1 issue aberta |

### 6.2 Qualidade de Processo

| Indicador | Hermes Agent | IronClaw | ZeroClaw | CoPaw |
|-----------|:------------:|:--------:|:--------:|:-----:|
| **Bug triage (<7 dias)** | ✅ Forte | ⚠️ P1 backlog | ✅ S1 priorizados | ✅ Críticos |
| **Test coverage (PRs de teste)** | ✅ Runner harness, edge cases | ✅ T0-T4 seams | 🔲 Não visível | 🔲 Não visível |
| **Release notes** | ✅ CHANGELOG robusto | ✅ Breaking changes | ✅ RFC tracking | ✅ Tracker centralizado |
| **Segurança披露** | ✅ Advisory fechado | 🔲 Não visível | ✅ RUSTSEC addressed | 🔲 Não visível |
| **Governança** | 🔲 Informal | 🔲 Informal | ✅ RFC formal | 🔲 Informal |

### 6.3 Maturidade por Dimensão

| Dimensão | Líder | Seguidor | Laggard |
|----------|-------|----------|---------|
| **Volume de entrega** | Hermes Agent | NanoBot, IronClaw | NullClaw |
| **Processo de release** | Hermes Agent | ZeroClaw (RFC) | NullClaw |
| **Segurança** | ZeroClaw | NanoBot | NullClaw |
| **Documentação** | Hermes Agent | CoPaw (arch page) | NullClaw |
| **Testes automatizados** | Hermes Agent | IronClaw | NullClaw |

**Conclusão:** Hermes Agent demonstra maturidade de processo mais consistente, enquanto ZeroClaw destaca-se em segurança. NullClaw apresenta sinais de projeto descontinuado ou em transição estratégica.

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **OAuth-first authentication** | Eliminação de API key manual | NanoBot (#4632), IronClaw (#5502), ZeroClaw (#8571) |
| **Context compression obrigatório** | Headroom, eager consolidation, hard caps | CoPaw, NanoBot |
| **Multi-agente orchestration** | Goal mode, subagent modes, Feishu multi-bot | ZeroClaw, NanoBot, CoPaw |
| **Sandbox hardening** | Symlink escapes, zip-bomb, process isolation | NanoBot, PicoClaw, ZeroClaw |
| **Rust/Wasm para performance** | IronClaw crate-based, ZeroClaw WASM plugins | IronClaw, ZeroClaw |
| **Integração enterprise (Slack, Google, Feishu)** | Múltiplos bugs e features | Todos exceto NullClaw |
| **i18n/RTL** | Arabic RTL (#44987 Hermes), Chinese localization | Hermes Agent, CoPaw |
| **Plugin ecosystems** | Skill market, MCP servers, WASM plugins | CoPaw, ZeroClaw, Hermes |
| **SOP-driven automation** | Standard Operating Procedures como primitives | ZeroClaw |

### 7.2 Requisitos Emergentes (do feedback)

| Requisito | Frequência | Implicação |
|-----------|:----------:|------------|
| **Background/daemon work** | 3+ projetos | Usuários esperam agentes persistentes além do chat |
| **Fallback chains configuráveis** | 2+ projetos | Resiliência de LLM provider é requisito |
| **Streaming multi-canal** | 2+ projetos | UX consistente entre Telegram, QQ, Discord |
| **Configurable approval modes** | 2+ projetos | Enterprise requer governance granular |
| **Memory persistence/compression** | 4+ projetos | Long-running agents precisam gestão de contexto |

### 7.3 Riscos Sistêmicos Identificados

| Risco | Probabilidade | Impacto | Mitigação recomendada |
|-------|:-------------:|:-------:|----------------------|
| **Fragmentação de forks mobile** | Alta | Suporte Android/Termux dividido | NullClaw → kontribusi upstream ou abandono formal |
| **Vulnerabilidades de sandbox não addressed** | Média | Exposição em production | Auditoria de segurança centralizada |
| **Technical debt em concurrency** | Média | Race conditions (IronClaw CAS, CoPaw multi-tab) | Testes determinísticos, stress testing |
| **Breaking changes sem migration paths** | Média | Debt para consumidores | ZeroClaw RFC approach como best practice |

---

## 8. Síntese Executiva

| Projeto | Recomendação Estratégica |
|---------|--------------------------|
| **Hermes Agent** | Referência de ecossistema. Adotar como baseline para processo de release e test coverage. |
| **NanoBot** | Acompanhar de perto a feature de Anthropic OAuth — potencial diferenciador para Claude Code users. |
| **IronClaw** | Atenção aos P1s de routines antes de considerar produção. Waiting for stabilization post-v0.29.1. |
| **ZeroClaw** | Destaque em segurança (RUSTSEC, zip-bomb, OAuth). RFC governance é modelo a considerar. |
| **CoPaw** | Beta v2.0.0 promissora, mas concurrency bug (#5701) é bloqueante. Headroom integration é diferencial. |
| **PicoClaw** | Foco em mobile (Android/Termux) é válido, mas bug #3164 precisa resolução urgente. |
| **NullClaw** | Reavaliar continuídade. Bug #868 há 70 dias sem resposta; atividade mínima. |

**Próxima atualização recomendada:** 2026-07-03 — monitorar se

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto — NanoBot (HKUDS/nanobot)
**Data de referência:** 2026-07-02
**Analista:** AI Analytics Assistant

---

## 1. Panorama do Dia

O projeto NanoBot apresenta **atividade excepcionalmente alta** nesta data, com 47 PRs e 8 issues atualizadas nas últimas 24h — um ritmo de desenvolvimento que indica sprints concentrados ou preparação para release. A atividade divide-se em três eixos principais: (1) **segurança e estabilidade** — com a correção de uma vulnerabilidade crítica de bypass no MCP e um crash significativo no gateway; (2) **expansão de providers** — destaque para a implementação de Anthropic OAuth (#4632) respondendo à feature request #4604; e (3) **melhorias em memória e subagentes** — com 5+ PRs abordando lifecycle, consolidação e modos de resultado. Não houve releases formais, sugerindo que o trabalho está em fase de estabilização antes de tagging.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto encontra-se em período de intenso desenvolvimento com múltiplas funcionalidades convergindo para branches de feature. Recomenda-se monitorar o repositório para announcement de `v*.*.*` tag nos próximos dias, considerando o volume de PRs de feature e fix prontos para merge.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergidas Hoje (4 identificadas)

| # | Título | Impacto |
|---|--------|---------|
| [#3982](https://github.com/HKUDS/nanobot/pull/3982) | test: add scripted agent runner harness | Infra de testes — habilita testes determinísticos do runner com transcripts capturados |
| [#3983](https://github.com/HKUDS/nanobot/pull/3983) | test: cover runner blocked tool-call finish reasons | Cobertura de edge cases — `refusal`, `content_filter`, `error` não disparam tools |
| [#4119](https://github.com/HKUDS/nanobot/pull/4119) | fix(exec): block relative symlink workspace escapes | **Segurança** — impede comandos exec de escapar workspace via symlinks relativos |
| [#4193](https://github.com/HKUDS/nanobot/pull/4193) | test: add memory lifecycle harness | Infra de testes — cobre ciclo de vida completo de sessões, consolidator e GitStore |

**Análise:** As PRs fechadas hoje são predominantemente de **infraestrutura de testes e segurança**. O merge do fix de symlink (#4119) é especialmente relevante por corrigir um vetor de escape em ambientes restritos — possivelmente relacionado a reportes de usuários enterprise.

### PRs Abertas de Destaque (top 5 por relevância)

| # | Título | Prioridade | Resumo |
|---|--------|------------|--------|
| [#4632](https://github.com/HKUDS/nanobot/pull/4632) | feat(providers): add Anthropic OAuth | p2 | Provider OAuth para Claude Code subscription — elimina necessidade de API key |
| [#4626](https://github.com/HKUDS/nanobot/pull/4626) | feat(memory): add opt-in eager consolidation | — | Consolidação proativa de memória em `memory/history.jsonl` após respostas |
| [#4624](https://github.com/HKUDS/nanobot/pull/4624) | feat(subagent): add aggregated result mode | — | Novo modo `aggregated` para resultados de subagentes — reduz spam de resultados |
| [#4625](https://github.com/HKUDS/nanobot/pull/4625) | feat(exec): allow extra bwrap bind roots | — | Permite expor diretórios customizados (`~/.local/bin`, `~/.cargo/bin`) no sandbox |
| [#4581](https://github.com/HKUDS/nanobot/pull/4581) | perf(agent): prune low-value context payloads | p2 | **Performance** — compacta payloads de contexto redundantes antes de replay |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento (por comentários)

| # | Tipo | Título | Comentários | Relevância |
|---|------|--------|-------------|------------|
| [#4604](https://github.com/HKUDS/nanobot/issues/4604) | Issue | Anthropic OAuth feature request | 3 | ⭐ **Alta** — motivou PR #4632 |
| [#4615](https://github.com/HKUDS/nanobot/issues/4615) | Issue | gateway crash on CronService fsync() | 2 | ⚠️ **Crítica** |
| [#4434](https://github.com/HKUDS/nanobot/issues/4434) | Issue | **[Security] MCP deny-all bypass** | 2 | 🔒 **Crítica** |
| [#4619](https://github.com/HKUDS/nanobot/issues/4619) | Issue | Feishu: system-level new session message | 1 | Enhacement regional |
| [#4612](https://github.com/HKUDS/nanobot/issues/4612) | Issue | Support OpenAI response API | 1 | Compatibilidade |

### Análise de Demandas

1. **Autenticação e Providers (#4604 → #4632):** A comunidade demonstra forte interesse em alternativas a API keys tradicionais. O provider `anthropic_oauth` via `claude setup-token` é uma resposta direta a usuários de Claude Code subscription que querem integração simplificada.

2. **Segurança MCP (#4434):** A vulnerabilidade de bypass do `enabledTools` denota que o sistema de deny-all para MCP servers tinha falha lógica — qualquer deployment usando `enabledTools: []` como segurança estava exposto. Comunidade atenta a patches.

3. **Melhorias de Execution (#4629, #4625):** Combinação de fix de symlink + customização de sandbox indica queNanoBot está sendo adotado em contextos de desenvolvimento mais complexos (Rust/Cargo workflows, etc.).

---

## 5. Bugs e Estabilidade

### Issues Abertas de Bug

| # | Severidade | Título | Status | Impacto |
|---|------------|--------|--------|---------|
| [#4637](https://github.com/HKUDS/nanobot/issues/4637) | **Alta** | Telegram long message splits — trunks não renderizam | **Aberto** | Quebras visuais em mensagens markdown longas no Telegram |
| [#4615](https://github.com/HKUDS/nanobot/issues/4615) | **Crítica** | gateway startup crashes on CronService fsync() | **Fechado** | Startup fail com `OSError [Errno 22]` em persistência de jobs |

### Análise de Crash (#4615)
O bug reportado por `wf58585858` detalha falha específica: `os.fsync()` no file descriptor do **diretório pai** após `os.replace()` no `jobs.json`. Este é um bug de edge case em sistemas de arquivos não convencionais ou Docker volumes com constraints de sync. A issue foi **fechada rapidamente** (mesmo dia), sugerindo hotfix ou workaround já aplicado.

### Bug de Telegram (#4637)
Reportado por `MARJORIESHA-pBAD` com screenshot — mensagens markdown longas sofrem trunking e envio fragmentado, onde trunks anteriores não renderizam corretamente. Impacto用户体验 direto em canal popular.

### Vulnerabilidade Fechada (#4434)
**Advisory de Segurança** — bypass da política `enabledTools: []` no Nanobot MCP expunha resources e prompts ao modelo. Reportado em 2026-06-21, fechado em 2026-07-01. Recomenda-se verificar se a versão utilizada está atualizada.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Channel/Componente | Sinais de Roadmap |
|---|--------|-------------------|-------------------|
| [#4619](https://github.com/HKUDS/nanobot/issues/4619) | Feishu: system-level new session message | Feishu | Melhorias de UX em canais asiáticos |
| [#4612](https://github.com/HKUDS/nanobot/issues/4612) | Support OpenAI response API | Channels | Paridade com APIs alternativas |
| [#4634](https://github.com/HKUDS/nanobot/issues/4634) | edit_file target disambiguation | Agent/Codex | **Alta prioridade** — dominante no benchmark de edit |

### Análise de Roadmap

1. **Codex/Agent Editing (#4634, #4635):** A issue de disambiguação de `edit_file` é descrita como "failure mode dominante" no benchmark offline. A PR #4635 já em andamento adiciona `line_hint` com bounded window e `target_line`/`target_start_line` — indica foco em confiabilidade de edição de código.

2. **Memory Architecture (#4626, #4627, #4621):** Três PRs simultâneas sobre memória apontam para rearchitecting significativo — eager consolidation, preservation de delivery context, e gating de archive facts com provenance. Este é um investimento de médio prazo em memória de longo prazo do agente.

3. **Subagent Evolution (#4624, #4623):** Modo agregado de resultados e override de model por spawn sugerem amadurecimento de workflows multi-agente.

4. **Heartbeat Trigger (#4620):** Integração de comandos de heartbeat via timer — habilita automações baseadas em tempo.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Descrição | Frequência |
|-----------|-----------|------------|
| **Autenticação** | Usuários Claude Code subscription não têm via de uso sem API key manual | 3+ comentários |
| **Telegram UX** | Fragmentação de mensagens longas quebra formatação markdown | 1 report com evidência visual |
| **Cron/Startup** | Crash em environments específicos (Docker, FS constraints) | 1 report + hotfix |
| **MCP Security** | Deployments com `enabledTools: []` estavam expostos | Implicado pelo advisory |

### Cenários de Uso Emergentes

- **Desenvolvimento com sandbox restrito:** customização de `bwrap` roots indica usuários desenvolvendo em ambientes isolados (Rust, Python packages)
- **Multi-canal enterprise:** Feishu, Telegram, WeChat em produção simultânea
- **Subagentes em produção:**需求 de modes de resultado e model override indica uso em pipelines complexos

### Satisfação Geral

**Indicadores positivos:**
- Tempo de resposta da equipe: bug crítico (#4615) fechado no mesmo dia
- Feature request (#4604) gerou PR (#4632) em ~24h
- Múltiplas PRs de teste indicam investimento em qualidade

**Pontos de atenção:**
- Bug de Telegram (#4637) sem assignee ou resposta ainda
- Issue de edit_file (#4634) aberta sem resposta institucional

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >7 dias

| # | Título | Criado | Estado | Prioridade |
|---|--------|--------|--------|------------|
| [#4612](https://github.com/HKUDS/nanobot/issues/4612) | Support OpenAI response API | 2026-06-30 | Aberto | Enhancement |
| [#4634](https://github.com/HKUDS/nanobot/issues/4634) | edit_file target disambiguation | 2026-07-01 | Aberto | **Alta** (dominant failure mode) |
| [#4637](https://github.com/HKUDS/nanobot/issues/4637) | Telegram long message splits | 2026-07-01 | Aberto (0 comentários) | Bug |

### Recomendações de Ação

1. **[#4634](https://github.com/HKUDS/nanobot/issues/4634):** Assign e priorize — é bottleneck para benchmarks de edição
2. **[#4637](https://github.com/HKUDS/nanobot/issues/4637):** Bug visível em canal popular; usuário reportou com evidência mas recebeu 0 comments
3. **[#4612](https://github.com/HKUDS/nanobot/issues/4612):** Clarificar escopo de "OpenAI response API" vs. compatibilidade atual
4. **Segurança [#4434](https://github.com/HKUDS/nanobot/issues/4434):** Verificar que deployments em produção aplicaram patch

---

## Métricas Consolidada do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas (24h) | 8 (5 abertas, 3 fechadas) |
| PRs ativas (24h) | 47 (25 abertas, 22 fechadas) |
| Releases | 0 |
| Bugs críticos | 1 fechado, 1 aberto |
| Vulnerabilidades | 1 fechada |
| Features em desenvolvimento | 10+ PRs abertas |
| Issues sem resposta | 3 |

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-07-02. Para informações oficiais, consulte [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-07-02

---

## 1. Panorama do Dia

O projeto Hermes Agent demonstra **alta atividade** na data de hoje, com 50 issues e 50 PRs atualizados nas últimas 24 horas. A equipe acabou de publicar a versão **v0.18.0 "The Judgment Release"** (v2026.7.1), marcando um ciclo de desenvolvimento extraordinariamente produtivo com ~1.720 commits e 998 PRs mesclados desde a versão anterior. A comunidade permanece engajada com **370+ contribuidores** ativos, embora a plataforma registre múltiplos bugs P2 relacionados a plataformas específicas (Windows, Telegram, Docker) e algumas regressões de estabilidade. O volume de Issues abertas (48) sugere uma fila de triagem considerável para as próximas 24-48 horas.

---

## 2. Lançamentos

### v2026.7.1 — Hermes Agent v0.18.0 "The Judgment Release"
**Data:** 1 de julho de 2026

#### Métricas do Ciclo (desde v0.17.0):
| Métrica | Valor |
|---------|-------|
| Commits | ~1.720 |
| PRs Mesclados | 998 |
| Arquivos Alterados | 2.215 |
| Linhas Adicionadas | ~251.000 |
| Linhas Removidas | ~41.000 |
| Issues Fechadas | 949 |
| Contribuidores | 370+ |

#### Destaques:
- **"The Judgment Release"** — O nome sugere foco em tomada de decisão e julgamento do agente
- Expansão significativa da base de código (~210K linhas líquidas adicionadas)
- Ciclo de release agressivo com média de ~1 PR a cada 3 minutos durante o período

#### Breaking Changes Prováveis:
- Given the scale (~2.200 files changed), **breaking changes are expected** in:
  - Configurações de gateway e providers
  - Estrutura de plugins
  - API de tools internas

**Recomendação de Migração:** revisar o CHANGELOG completo antes de upgrade.

---

## 3. Progresso do Projeto

### PRs Recentes em Fusão/Aberto (24h)

| PR | Descrição | Impacto | Link |
|----|-----------|---------|------|
| #56639 | Dashboard: 500 em páginas não-autenticadas com basic_auth como único provider | **Crítico** (UX) | [PR #56639](https://github.com/NousResearch/hermes-agent/pull/56639) |
| #56637 | File-tools: preservar paths de containers Docker durante operações | **Estabilidade Docker** | [PR #56637](https://github.com/NousResearch/hermes-agent/pull/56637) |
| #56638 | Journey: crash em metadata não-dict + renderização ANSI | **Estabilidade CLI/TUI** | [PR #56638](https://github.com/NousResearch/hermes-agent/pull/56638) |
| #56633 | Inclusão de aiohttp para API server runtime | **Dependência** | [PR #56633](https://github.com/NousResearch/hermes-agent/pull/56633) |
| #56629 | Corrigir previews de sessão em mensagens multimodais | **UX Dashboard** | [PR #56629](https://github.com/NousResearch/hermes-agent/pull/56629) |
| #56636 | Dashboard: resolver /api/messaging/platforms uma vez por request | **Performance (~10s → ~40ms)** | [PR #56636](https://github.com/NousResearch/hermes-agent/pull/56636) |
| #43454 | WhatsApp: isolar status e broadcast targets | **Segurança** | [PR #43454](https://github.com/NousResearch/hermes-agent/pull/43454) |
| #49448 | WhatsApp: token de capability para bridge sends | **Segurança** | [PR #49448](https://github.com/NousResearch/hermes-agent/pull/49448) |
| #54230 | Mattermost: live-thinking bubble | **Feature Platform** | [PR #54230](https://github.com/NousResearch/hermes-agent/pull/54230) |
| #56628 | /sessions: expandido com delete, rename, prune | **UX CLI/TUI** | [PR #56628](https://github.com/NousResearch/hermes-agent/pull/56628) |
| #56630 | WhatsApp: modo passivo (read-only) | **Feature Platform** | [PR #56630](https://github.com/NousResearch/hermes-agent/pull/56630) |
| #44987 | Localização árabe com suporte RTL completo | **i18n/RTL** | [PR #44987](https://github.com/NousResearch/hermes-agent/pull/44987) |

### Avanços Notáveis:
- **Segurança WhatsApp:** Duas PRs (#43454, #49448) tratando isolação de status/broadcast e requisitos de token para bridge sends
- **Performance Dashboard:** Fix crítico (#56636) resolve timeout de 10 segundos na API de plataformas
- **Docker Integration:** Melhoria na preservação de paths de container (#56637)
- **i18n:** Suporte completo a RTL com localização árabe (#44987)

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (Comentários/Reações)

| Issue | Título | Comentários | 👍 | Link |
|-------|--------|:-----------:|:--:|------|
| #56524 | Telegram in-band hermes update pode deixar launchd gateway offline | 6 | 0 | [Issue #56524](https://github.com/NousResearch/hermes-agent/issues/56524) |
| #18019 | Stream stalled mid tool-call | 5 | 0 | [Issue #18019](https://github.com/NousResearch/hermes-agent/issues/18019) |
| #466 | feat: File transfer entre sandboxed environments (send_file tool) | 5 | 1 | [Issue #466](https://github.com/NousResearch/hermes-agent/issues/466) |
| #56533 | /journey slash command vaza ANSI escape codes no TUI/Desktop | 4 | 0 | [Issue #56533](https://github.com/NousResearch/hermes-agent/issues/56533) |
| #17144 | Docker agent memory writes criam arquivos root-owned | 4 | 1 | [Issue #17144](https://github.com/NousResearch/hermes-agent/issues/17144) |
| #37543 | Feature: i18n/Localization — linguagem configurável | 4 | 0 | [Issue #37543](https://github.com/NousResearch/hermes-agent/issues/37543) |
| #26530 | [CLOSED] codex app-server tool calls fail closed | 4 | 0 | [Issue #26530](https://github.com/NousResearch/hermes-agent/issues/26530) |

### Análise de Demandas:

**🔴 Problemas Críticos de Integração:**
1. **Telegram + launchd (#56524):** Update in-band pode deixar gateway offline após drain timeout — **6 comentários**, indica problema recorrente
2. **Stream stalling (#18019):** Bug persistente desde abril, reativado em 2026-07-01 — mostra regressão ou cobertura incompleta de testes

**🟡 Features Mais Solicitadas:**
1. **File transfer (#466):** Demanda antiga (2026-03-06) por send_file tool entre sandbox e usuário — 5 comentários, 1 👍, indica necessidade real não endereçada
2. **i18n (#37543):** Suporte a localização, incluindo chinês — 4 comentários, community drive

**🟢 Questões de UX/UI:**
- ANSI escape codes vazando no /journey (#56533)
- Docker permissions (#17144) — arquivos root-owned unreadable pelo gateway user

---

## 5. Bugs e Estabilidade

### Distribuição por Severidade

| Severidade | Count | Tendência |
|------------|:-----:|-----------|
| **P1** | 1 | 🔴 (1 closed hoje) |
| **P2** | ~18 | 🟠 Alta |
| **P3** | ~25 | 🟡 Moderada |

### Bugs P1 (Críticos)

| Issue | Título | Status | Link |
|-------|--------|--------|------|
| #26530 | codex app-server tool calls fail closed sem approval prompt | **CLOSED** | [Issue #26530](https://github.com/NousResearch/hermes-agent/issues/26530) |

**Análise:** Bug de segurança/comportamento no contexto non-CLI (Discord, Telegram, Slack, cron) — codex approval requests falhavam silenciosamente em vez de Honor `approvals.mode`. Já fechado.

### Bugs P2 (Altos)

| Issue | Título | Área | Link |
|-------|--------|------|------|
| #56524 | Telegram update pode deixar launchd gateway offline | Telegram/launchd | [Issue #56524](https://github.com/NousResearch/hermes-agent/issues/56524) |
| #18019 | Stream stalled mid tool-call (regressão) | Agent/Tools | [Issue #18019](https://github.com/NousResearch/hermes-agent/issues/18019) |
| #56533 | /journey vaza ANSI escape codes | TUI/Desktop | [Issue #56533](https://github.com/NousResearch/hermes-agent/issues/56533) |
| #17144 | Docker memory writes criam arquivos root-owned | Docker/Memory | [Issue #17144](https://github.com/NousResearch/hermes-agent/issues/17144) |
| #56554 | Windows install falha: git pull exit 128 + Smart App Control block | Windows | [Issue #56554](https://github.com/NousResearch/hermes-agent/issues/56554) |
| #56516 | Streaming reasoning models: "Provider returned an empty stream" | OpenAI Provider | [Issue #56516](https://github.com/NousResearch/hermes-agent/issues/56516) |
| #54572 | patch tool pode editar região errada quando old_string não é match exato | File Tools | [Issue #54572](https://github.com/NousResearch/hermes-agent/issues/54572) |
| #56535 | model.api_key: 0 (YAML integer) após clear_model_endpoint_credentials() | Config/Auth | [Issue #56535](https://github.com/NousResearch/hermes-agent/issues/56535) |
| #56558 | clarify.respond timeout retorna 4009 hard error | Gateway/TUI | [Issue #56558](https://github.com/NousResearch/hermes-agent/issues/56558) |

### Bugs P3 (Médios)

| Issue | Título | Área | Link |
|-------|--------|------|------|
| #56527 | x_search lê responses sem size limit | xAI Provider | [Issue #56527](https://github.com/NousResearch/hermes-agent/issues/56527) |
| #56548 | MiniMax OAuth error response reads uncapped | MiniMax Provider | [Issue #56548](https://github.com/NousResearch/hermes-agent/issues/56548) |
| #56505 | Diagnostics upload-url response reads uncapped | CLI/Diagnostics | [Issue #56505](https://github.com/NousResearch/hermes-agent/issues/56505) |
| #26141 | LanceDB retrieval fails on Windows (os error 123) | Memory/Windows | [Issue #26141](https://github.com/NousResearch/hermes-agent/issues/26141) |
| #56540 | Telephony API helper leaks JSONDecodeError | Skills/Telephony | [Issue #56540](https://github.com/NousResearch/hermes-agent/issues/56540) |
| #56536 | MCP stdio resolution ignora PATHEXT no Windows | MCP/Windows | [Issue #56536](https://github.com/NousResearch/hermes-agent/issues/56536) |

### Padrões Identificados:

1. **Windows:** 5+ bugs específicos (install, subprocess console flash, LanceDB, MCP PATHEXT, Smart App Control)
2. **Provider Security:** 3 bugs de unbounded response reads (xAI, MiniMax, Diagnostics)
3. **Docker:** Persistência de problemas de permissions e path resolution
4. **Regression:** Stream stalled (#18019) reativado — sugere necessidade de mais coverage em testes

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas (P3)

| Issue | Título | Área | Potencial Impact | Link |
|-------|--------|------|------------------|------|
| #37543 | i18n/Localization — UI language configurável (incl. 中文) | i18n | **Alto** (muitos👍) | [Issue #37543](https://github.com/NousResearch/hermes-agent/issues/37543) |
| #56204 | Missing worker tool para re-parenting de dependências | Cron/Kanban | Médio | [Issue #56204](https://github.com/NousResearch/hermes-agent/issues/56204) |
| #56492 | Learn mode para auto-approval em non-yolo | Cron/Auth | **Alto** | [Issue #56492](https://github.com/NousResearch/hermes-agent/issues/56492) |
| #56551 | Pipeline support (YAML-driven multi-step workflows) | Cron/CLI | **Alto** | [Issue #56551](https://github.com/NousResearch/hermes-agent/issues/56551) |
| #56552 | Human assignees não conseguem completar tasks do dashboard | Dashboard/Kanban | Médio | [Issue #56552](https://github.com/NousResearch/hermes-agent/issues/56552) |
| #47435 | Register Hermes na ACP Registry (Zed/JetBrains/VS Code) | ACP/Editor | **Alto** | [Issue #47435](https://github.com/NousResearch/hermes-agent/issues/47435) |

### Features com Alto Potencial de Implementação:

1. **Pipeline Layer (#56551):** Abstração sobre cron → prompt → skill, YAML-driven workflows
2. **ACP Registry Integration (#47435):** Integração first-class com editors via Agent Client Protocol
3. **Learn Mode (#56492):** Auto-aprovação inteligente para non-yolo mode — resolveria dor principal de usuários

### Features Mergidas/Em PR:

| PR | Título | Status | Link |
|----|--------|--------|------|
| #44987 | Arabic localization com RTL completo | OPEN | [PR #44987](https://github.com/NousResearch/hermes-agent/pull/44987) |
| #56630 | WhatsApp passive (read-only) mode | OPEN | [PR #56630](https://github.com/NousResearch/hermes-agent/pull/56630) |
| #54230 | Mattermost live-thinking bubble | OPEN | [PR #54230](https://github.com/NousResearch/hermes-agent/pull/54230) |
| #53733 | Telegram busy-input buttons (ask-mode) | OPEN | [PR #53733](https://github.com/NousResearch/hermes-agent/pull/53733) |
| #56628 | /sessions com delete, rename, prune | OPEN | [PR #56628](https://github.com/NousResearch/hermes-agent/pull/56628) |

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Severidade | Link |
|-----|-----------|:----------:|------|
| **Instalação Windows quebrada** | Smart App Control blocks python.exe após git pull failure | P2 | [Issue #56554](https://github.com/NousResearch/hermes-agent/issues/56554) |
| **Docker file permissions** | Agent memory cria arquivos root-owned, gateway não consegue ler | P2 | [Issue #17144](https://github.com/NousResearch/hermes-agent/issues/17144) |
| **Stream stalling** | Regressão persistente em writes de arquivos grandes | P2 | [Issue #18019](https://github.com/NousResearch/hermes-agent/issues/18019) |
| **Non-yolo mode frustante** | Autorização de agents difícil de surfar e aprovar | P3 | [Issue #56492](https://github.com/NousResearch/hermes-agent/issues/56492) |
| **i18n ausente** | Todas strings em inglês hardcoded | P3 | [Issue #37543](https://github.com/NousResearch/hermes-agent/issues/37543) |
| **Dashboard task completion** | Humanos não conseguem marcar tasks como done via UI | P3 | [Issue #56552](https://github.com/NousResearch/hermes-agent/issues/56552) |
| **Console flash no Windows** | Subprocessos mostram janela negra temporariamente | P3 | [Issue #56503](https://github.com/NousResearch/hermes-agent/issues/56503) |

### Cenários de Uso Reportados:

1. **Sandboxed Environments (#466):** Usuários com Docker/SSH/Modal/Singularity precisam de file transfer bidirecional — currently impossible
2

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-02

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta **alta atividade de desenvolvimento** em 02 de julho de 2026. Foram registradas 11 atualizações de PRs nas últimas 24h (9 abertos, 2 fechados/merged) e 2 issues ativas, indicando um ritmo de trabalho intenso. Uma nova nightly build foi publicada (v0.3.1-nightly.20260701), sinalizando progresso contínuo em direção a uma próxima versão estável. O volume de PRs sugere que múltiplos contribuidores estão atacando pendências técnicas simultaneamente, com destaque para correções de segurança, qualidade de código e funcionalidades novas. A presença de issues com marcador "stale" indica que há backlog mais antigo necessitando triagem.

---

## 2. Lançamentos

### Nova Release
**Nightly Build: v0.3.1-nightly.20260701.2cf030d2**  
🔗 https://github.com/sipeed/picoclaw/releases/tag/v0.3.1-nightly.20260701.2cf030d2

| Attribute | Detail |
|-----------|--------|
| Tipo | Automated nightly build |
| Comparação | https://github.com/sipeed/picoclaw/compare/v0.3.1...main |
| Status | ⚠️ **Unstable** — uso em produção não recomendado |

**Notas:**
- Este é um build automatizado do branch `main`
- Pode conter funcionalidades ainda não testadas em produção
- Comparação completa disponível no link acima para auditing de mudanças desde a última tag estável (v0.3.1)
- **Recomendação:** Usar apenas para testes ou para validar fixes mais recentes

---

## 3. Progresso do Projeto

### PRs Closed/Merged Hoje

#### ✅ #3116 — fix(pico): complete turn.done lifecycle signaling
🔗 https://github.com/sipeed/picoclaw/pull/3116  
**Impacto:** **Alto** — Completa o lifecycle de `turn.done` para o subsistema Pico (Issue #2984).

**Melhorias implementadas:**
- Preserva `request_id` para mensagens em fila (steering/follow-up), garantindo que toda requisição inbound receba resposta
- Fecha gaps no estado interno do lifecycle

```
Tipo: bug fix
Área: core/pico
Comentários: undefined
```

---

#### ✅ #2975 — feat(telegram): treat reply to bot message as mention in group chats
🔗 https://github.com/sipeed/picoclaw/pull/2975  
**Impacto:** **Médio** — Melhora UX do Telegram em grupos.

**Funcionalidade:**
- Respostas a mensagens do bot agora são tratadas como @mention implícita
- Compatível com `mention_only: true`
- Reduz fricção em chats grupais

```
Tipo: feature
Área: channel/telegram
Comentários: undefined
```

---

## 4. Temas Quentes da Comunidade

### Issue #3164 — [BUG] Process hooks crash gateway on Android/Termux
🔗 https://github.com/sipeed/picoclaw/issues/3164

| Campo | Valor |
|-------|-------|
| Status | 🟡 OPEN (stale) |
| Prioridade aparente | **Crítica** |
| Autor | AMEOBIUS |
| Criado | 2026-06-23 |
| Atualizado | 2026-07-01 |
| Comentários | 1 |
| 👍 | 0 |

**Resumo do problema:**
- Process hooks (JSON-RPC over stdio) causam crash no gateway em **até 2 segundos após startup**
- Afeta Android/Termux especificamente
- Mesmo um "hello world" hook mínimo faz o gateway morrer após exibir "Gateway started"
- Versão afetada: v0.2.9 com config v3

**Análise:** Bug crítico de estabilidade que impede uso em plataformas móveis. O marcador "stale" é preocupante dado o impacto.

---

### PR #3202 — fix(routing): strip leading/trailing underscores in ID normalization
🔗 https://github.com/sipeed/picoclaw/pull/3202

| Campo | Valor |
|-------|-------|
| Status | 🟡 OPEN |
| Autor | Osamaali313 |
| Criado | 2026-07-01 |

**Propósito técnico:**
- Corrige `NormalizeAgentID` / `NormalizeAccountID` em `pkg/routing/agent_id.go`
- Garante output conforme regex `^[a-z0-9][a-z0-9_-]{0,63}$`
- Remove underscores e dashes leading/trailing
- Padroniza IDs no sistema

---

## 5. Bugs e Estabilidade

### 🛑 Bug Crítico (Android/Termux)

| Severidade | Issue | Descrição |
|------------|-------|-----------|
| **CRÍTICA** | #3164 | Process hooks crash gateway em Android/Termux em 2s — impossibilita uso em plataformas móveis |

**Ação recomendada:** Triar issue #3164 com urgência. Comunidade reporta crash total do gateway com qualquer process hook em Termux.

---

### Correções Pendentes de Estabilidade

| PR | Área | Descrição | Prioridade |
|----|------|-----------|------------|
| #3165 | openai_compat | Recupera Seed XML tool calls (Volcengine Doubao) | Média |
| #3161 | exec | Mantém deny patterns ativos mesmo com custom allow rules | **Alta** (segurança) |
| #3160 | auth | Rejeita cross-site launcher setup requests | **Alta** (segurança) |
| #3158 | test | Cobertura Windows path handling no sandbox fs | Média |

**Destaque de Segurança (#3160):**
> Adiciona verificações de proveniência do browser para POST /api/auth/setup usando "Sec-Fetch-Site", "Origin" e "Referer" — previne setup de senha por origens cruzadas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### 🎯 Feature Requests Ativos

#### #3201 — Support streaming output for QQ channel
🔗 https://github.com/sipeed/picoclaw/issues/3201

| Campo | Valor |
|-------|-------|
| Status | 🟢 OPEN |
| Autor | YsLtr |
| Criado | 2026-07-01 |
| Comentários | 0 |
| 👍 | 0 |

**Demanda:**
- Suporte a streaming token-by-token no canal QQ
- Atualmente apenas Telegram e Pico WebSocket channels implementam `StreamingCapable`
- Objetivo: experiência de usuário similar a outros canais

**Análise:** Feature bem definida, sem comentários ainda. Sugere comunidade ativa mas PR pipeline não iniciado.

---

#### #3200 — feat(models): add configurable default fallback chain
🔗 https://github.com/sipeed/picoclaw/pull/3200

| Campo | Valor |
|-------|-------|
| Status | 🟡 OPEN |
| Autor | lc6464 |
| Criado | 2026-07-01 |

**Funcionalidade:**
- Workflow dedicado na página de models para configurar chain padrão
- Permite definir model principal + fallback models
- Reordenar chain via drag-and-drop
- Persistência via backend API

**Sinais de roadmap:** Esta feature indica foco em resiliência e failover de modelos LLM — tendência de mercado.

---

### Atualizações de Dependências (Dependabot)

| PR | Dependência | Atualização |
|----|-------------|-------------|
| #3104 | shadcn | 4.7.0 → 4.11.0 |
| #3103 | typescript-eslint | 8.59.3 → 8.62.0 |
| #3100 | @vitejs/plugin-react | 6.0.1 → 6.0.2 |

Todas pendentes de merge — manutenção de frontend atualizada.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Problema | Impacto | Plataforma |
|----------|---------|------------|
| Crash de gateway com process hooks | **Bloqueante** | Android/Termux |
| Ausência de streaming no canal QQ | Experiência inferior | QQ |
| Falta de fallback chain configurável | Resiliência reduzida | Web UI |

### Cenários de Uso Emergentes

1. **Plataformas móveis como ambiente de produção:** Issue #3164 indica que Termux/Android é usado ativamente, não apenas para desenvolvimento
2. **Integração com ecossistema chinês (QQ, Volcengine):** PRs #3201 e #3165 indicam demanda por compatibilidade com plataformas chinesas
3. **Grupos Telegram como canal primário:** PR #2975 (merged) mostra que interações em grupo são caso de uso importante

### Sinais de Satisfação

- Comunidade ativa reportando bugs e features
- Multiple contribuidores externos (danmobot, Alix-007, Osamaali313, Jlan45, lc6464)
- Fluxo de contribuições diversificado (bug fixes, features, security, deps)

---

## 8. Backlog que Merece Atenção

### Issues/PRs Sem Resposta ou Stale

| Item | Tipo | Idade | Status | Prioridade |
|------|------|-------|--------|------------|
| #3164 | Bug | ~9 dias | Stale | 🔴 **Crítica** |
| #3165 | Bug fix | ~9 dias | Stale | 🟡 Média |
| #3161 | Security fix | ~10 dias | Stale | 🟠 **Alta** |
| #3160 | Security fix | ~10 dias | Stale | 🟠 **Alta** |
| #3158 | Test | ~11 dias | Stale | 🟡 Média |
| #3201 | Feature | ~1 dia | Open (no comments) | 🟡 Média |

### ⚠️ Ação Urgente Recomendada

1. **#3164** — Bug crítico de crash em Android/Termux requer triagem imediata. Comunidade reportando uso real.
2. **#3160 e #3161** — Correções de segurança com 10 dias sem merge. Validação e merge devem ser priorizados.
3. **#3201** — Feature request novo sem feedback. Acknowledge da equipe evitaria frustração.

---

## Métricas Consolidada do Dia

```
┌─────────────────────────────────────────────────┐
│  PICOCLAW — 2026-07-02                          │
├─────────────────────────────────────────────────┤
│  Releases:         1 (nightly)                   │
│  Issues ativas:   2                             │
│  PRs abertos:     9                             │
│  PRs fechados:    2                             │
│  Bugs críticos:   1 (Android/Termux crash)      │
│  Security fixes:  2 (pendentes merge)           │
│  Features novas:  2 (QQ streaming, fallback)    │
│  Stale items:     5                             │
└─────────────────────────────────────────────────┘

Saúde Geral: 🟡 MODERADA
- Atividade alta
- Backlog de segurança precisa atenção
- Bug crítico reportato sem resolução
```

---

*Relatório gerado automaticamente com base em dados GitHub de 2026-07-02.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-07-02

## 1. Panorama do Dia

O IronClaw registrou **alta atividade** em 02/07/2026 com 30 issues e 50 PRs atualizados nas últimas 24h, sinalizando intenso ritmo de desenvolvimento. A equipe fechou **7 issues** e **32 PRs**, demonstrando capacidade de entrega significativa mesmo em período pré-férias (contexto de fim de semana). A estabilidade permanece como preocupação principal: múltiplos bugs de severidade P1-P2 afetam rotinas, execuções de workflow e integrações críticas (Slack, Google). O lançamento **v0.29.1** do crate principal foi finalizado com mudanças significativas de API. A base de código está em fase de refinamento da arquitetura "Reborn", com correções de corrida (CAS contention) e melhorias de teste.

---

## 2. Lançamentos

### ✅ Release Concluída: PR #5311

| Crate | Versão Anterior | Nova Versão | Tipo de Mudança |
|-------|-----------------|-------------|-----------------|
| `ironclaw` | 0.24.0 | **0.29.1** | — |
| `ironclaw_common` | 0.4.2 | **0.5.0** | ⚠️ Breaking |
| `ironclaw_skills` | 0.3.0 | **0.4.0** | ⚠️ Breaking |
| `ironclaw_safety` | 0.2.2 | **0.2.3** | Compatível |
| `ironclaw_skill_learning` | 0.1.0 | **0.1.1** | Compatível |

**Notas de Migração:**
- `ironclaw_common` e `ironclaw_skills` possuem **breaking changes** — consumidores devem revisar CHANGELOG antes de atualizar
- Atualização via `cargo update` recomendada; testes de regressão devem ser executados

**Link:** [nearai/ironclaw PR #5311](https://github.com/nearai/ironclaw/pull/5311)

---

## 3. Progresso do Projeto

### PRs Closed/Merged Destaque (8 items)

| # | Título | Área | Impacto |
|---|--------|------|---------|
| #5440 | Seam constructors para integração Reborn | Testes | Habilita cobertura T2 |
| #5483 | T0-SECRET-INJECT — cobertura de injeção de credenciais | Testes/Segurança | Valida que secrets chegam ao wire |
| #5484 | T0-ERRPATHS — caminhos de erro/negação HTTP/Shell/MCP | Testes | Cobertura de edge cases |
| #5481 | System-prompt capture seam | Testes | Permite asserts no prompt visível ao modelo |
| #5498 | Evita refetch da lista de threads ao enviar | WebUI v2 | Performance de chat |
| #5441 | Notificações de header para aprovações de automação | WebUI v2 | UX de workflow |
| #5491 | Remove header duplicado de logs no chat | WebUI v2 | Correção visual |
| #5488 | Esconde mensagens de sistema de skill activation | WebUI v2 | Limpeza de transcript |

**PRs em Andamento de Alto Impacto:**

| # | Título | Tamanho | Risco | Status |
|---|--------|---------|-------|--------|
| #5149 | Context management — progressive tool disclosure | XL | Low | Aberto |
| #4841 | No run-borking failures — explicação + retry | XL | Low | Aberto |
| #5499 | WASM tool install + env-provisioned credentials | XL | Low | Aberto |
| #5513 | Admin UI para credenciais compartilhadas | XL | Low | Aberto |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atenção (por comentários/complexidade)

| # | Título | Comentários | Área | Análise |
|---|--------|-------------|------|---------|
| #5459 | Configurable skills and tools | 1 | Features | Demanda crescente por marketplace de tools; admin vs. user install differentiation |
| #5479 | One-runtime group harness: segundo thread falha | 0 | Arquitetura | Blocker para multiusuário; deterministicamente 8/8 failures |
| #5495 | Daily failure taxonomy 2026-07-01 | 0 | QA/Analytics | Acompanhamento sistemático de falhas — bom indicador de maturidade de processo |

### PRs com Maior Complexidade

| # | Título | Área | Relevância |
|---|--------|------|------------|
| #5502 | Slack personal OAuth — browser Connect flow | Integração | Elimina need for manual token paste; UX improvement significativo |
| #5503 | Google extension capabilities compactas | Integração | `fetch_message_summaries` para triage sem fanout |
| #4927 | Credential-free hosted MCP providers | Arquitetura MCP | Abre suporte para MCP servers públicos/sem auth |

---

## 5. Bugs e Estabilidade

### 🔴 P1 — Críticos (Impacto em produção)

| # | Título | Sintoma | Impacto | Link |
|---|--------|---------|---------|------|
| #5456 | Runner lease expiration | Rotinas falham antes de completar (90s threshold) | Workflows multi-tool com APIs externas não executam | [Issue #5456](https://github.com/nearai/ironclaw/issues/5456) |
| #5504 | Routine creation hangs | Criação de rotina nunca retorna confirmação/erro | UX broken para feature core | [Issue #5504](https://github.com/nearai/ironclaw/issues/5504) |
| #5505 | Routine creation prompt embedded | Prompt de criação dentro da rotina gerada | Rotinas self-referential, não executáveis | [Issue #5505](https://github.com/nearai/ironclaw/issues/5505) |
| #5415 | Protocol violation em multi-tool Google Sheets | Falha em workflows 18-25 tool calls | Integração Google Workspace impactada | [Issue #5415](https://github.com/nearai/ironclaw/issues/5415) |

### 🟠 P2 — Altos

| # | Título | Sintoma | Link |
|---|--------|---------|------|
| #5507 | "No thread attached" blocks debugging | Falha de run não mostra stack trace | [Issue #5507](https://github.com/nearai/ironclaw/issues/5507) |
| #5508 | Slack delivery target not found | Users não consegue configurar entrega Slack | [Issue #5508](https://github.com/nearai/ironclaw/issues/5508) |
| #5416 | Google connection state contradictory | Autenticação Gmail confusa | [Issue #5416](https://github.com/nearai/ironclaw/issues/5416) |
| #5509 | Chat creation latency grows with history | Performance degrada progressivamente | [Issue #5509](https://github.com/nearai/ironclaw/issues/5509) |
| #5506 | Slack bot redirects to WebUI | Não entrega resultado no canal Slack | [Issue #5506](https://github.com/nearai/ironclaw/issues/5506) |
| #5476 | Runner lease expired under CAS contention | Combinação de latência + race condition | [Issue #5476](https://github.com/nearai/ironclaw/issues/5476) |

### 🟡 P3 — Médios

| # | Título | Link |
|---|--------|------|
| #5510 | Cannot delete old routines | [Issue #5510](https://github.com/nearai/ironclaw/issues/5510) |
| #5458 | Double header on Logs page | [Issue #5458](https://github.com/nearai/ironclaw/issues/5458) ✅ Fechado |

### ⚠️ Infrastructure Blockers

| # | Título | Descrição | Link |
|---|--------|-----------|------|
| #5479 | One-runtime group harness failure | Blocker para E-MULTIUSER/C-MULTIUSER | [Issue #5479](https://github.com/nearai/ironclaw/issues/5479) |
| #5470 | Resource CAS writes serialize | Per-key mutex viola guardrail | [Issue #5470](https://github.com/nearai/ironclaw/issues/5470) |
| #5468 | Per-key mutex maps no CAS | Convoy anti-pattern detectado | [Issue #5468](https://github.com/nearai/ironclaw/issues/5468) |
| #4108 | Nightly E2E failed | CI/CD regression | [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Justificativa | Prioridade |
|---|--------|---------------|------------|
| #5459 | Configurable skills and tools | Admin install (shared) vs. user install (private) | Alta |
| #5460 | Memories visibility controls | Isolamento de dados entre usuários do workspace | Alta |
| #5502 | Slack personal OAuth flow | Eliminar necessidade de token manual | Média-Alta |
| #5503 | Google compact capabilities | Triage eficiente sem fanout de reads | Média |

### Evolução de Arquitetura (Sinais de Roadmap)

| # | Título | Implicação |
|---|--------|------------|
| #5149 | Progressive tool disclosure | Redução de ~25.8k tokens/call — impacto em latência NEAR AI |
| #4841 | Failure explanation + retryable runs | De "run-borking" para UX utilizável em erros |
| #4927 | Credential-free hosted MCP | Suporte a MCP servers públicos |

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Categoria | Problema | Frequência | Impacto |
|-----------|----------|------------|---------|
| **Rotinas (Routines)** | Criação hangs, lease expiration, impossível deletar | Múltiplos tickets P1-P3 | 🔴 Alto |
| **Integração Slack** | Configuração quebrada, redirect para WebUI, delivery failure | 3 issues P2 | 🟠 Médio |
| **Integração Google** | Estado contraditório, protocol violation Sheets | 2 issues P2 | 🟠 Médio |
| **Performance** | Latência cresce com histórico de chat | 1 issue P2 | 🟠 Médio |
| **Debugging** | "No thread attached" impede troubleshooting | 1 issue P2 | 🟠 Médio |

### Padrões Identificados

1. **Integração third-party frágeis**: Google e Slack apresentam múltiplos pontos de falha
2. **Gestão de estado de runtime**: Lease expiration e CAS contention indicam Technical Debt emconcurrency
3. **UX de Workflows**: Rotinas são feature central mas frequentemente quebradas
4. **Observabilidade**: Falta de logs em Pages (Logs page vazia, #5457 — closed) e stack traces bloqueados

### Cenários de Uso Bloqueados

- ✅ Executar workflows multi-tool com APIs externas (#5456)
- ✅ Criar e gerenciar rotinas de automação (#5504, #5505, #5510)
- ✅ Integrar Google Workspace completo (#5415, #5416)
- ✅ Usar Slack como canal primário de entrega (#5506, #5508)

---

## 8. Backlog que Merece Atenção

### Issues Antigas ou Sem Resposta

| # | Título | Criado | Status | Urgência | Link |
|---|--------|--------|--------|----------|------|
| #4108 | Nightly E2E failed | 2026-05-27 | OPEN | 🔴 Alta | [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) |
| #5479 | One-runtime group harness failure | 2026-07-01 | OPEN | 🔴 Alta (blocker multiusuário) | [Issue #5479](https://github.com/nearai/ironclaw/issues/5479) |
| #5470 | Resource CAS writes serialize | 2026-06-30 | OPEN | 🟠 Média | [Issue #5470](https://github.com/nearai/ironclaw/issues/5470) |
| #5468 | Per-key mutex maps violam guardrail | 2026-06-30 | OPEN | 🟠 Média | [Issue #5468](https://github.com/nearai/ironclaw/issues/5468) |
| #5467 | In-memory ApprovalRequestStore diverge | 2026-06-30 | OPEN | 🟡 Baixa | [Issue #5467](https://github.com/nearai/ironclaw/issues/5467) |

### PRs Bloqueados ou Pendentes de Review

| # | Título | Tamanho |等待时间 | Link |
|---|--------|---------|--------|------|
| #4841 | No run-borking failures | XL | ~19 dias | [PR #4841](https://github.com/nearai/ironclaw/pull/4841) |
| #4927 | Credential-free hosted MCP | L | ~17 dias | [PR #4927](https://github.com/nearai/ironclaw/pull/4927) |
| #5149 | Progressive tool disclosure | XL | ~9 dias | [PR #5149](https://github.com/nearai/ironclaw/pull/5149) |

---

## Métricas Consolidada do Dia

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues abertas/ativas | 23 | Neutra |
| Issues fechadas | 7 | ↑ Positiva |
| PRs abertos | 18 | — |
| PRs merged/fechados | 32 | ↑↑ Alta |
| Releases | 1 (v0.29.1) | ↑ Positiva |
| Bugs P1 ativos | 4 | 🔴 Alerta |
| Bugs P2 ativos | 6 | 🟠 Atenção |
| PRs críticos em review | 3 (XL size) | — |

---

**Saúde Geral:** O projeto está em **modo intensivo de estabilização**. A release v0.29.1 trouxe mudanças significativas, e a equipe está atacando bugs de stability em áreas críticas (rotinas, runtime lease, integrações third-party). O volume de PRs fechados indica boa cadência, mas o acúmulo de bugs P1-P2 requer priorização imediata para não degradar experiência do usuário em produção.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-07-02

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **atividade intensa e saudável** em 02 de julho de 2026. Nas últimas 24 horas, foram registradas **20 issues atualizadas** (16 abertas, 4 fechadas) e **50 PRs** (23 abertas, 27 merged/fechadas), indicando um ritmo de desenvolvimento acelerado. A **ausência de novas releases** sugere que a equipe está em fase de consolidação de código antes do próximo lançamento. Observa-se foco significativo em **estabilidade v2.0.0-beta**, correções de segurança e melhorias na experiência de canal (Feishu, QQ, Telegram). A comunidade demonstra engajamento elevado com issues de alta prioridade abertas múltiplas vezes no mesmo dia.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em período pré-lançamento da **v2.0.0**, conforme indicam as issues de tracking ativas. A última versão estável disponível é a **v1.1.12.post2**, com a beta pública v2.0.0-beta em desenvolvimento ativo.

> 📌 *Recomendação*: Aguardar anúncios oficiais para migração v1.x → v2.0.0.

---

## 3. Progresso do Projeto

### PRs Merged/Fechadas (27 total)

| PR | Título | Impacto | Link |
|:---|:-------|:--------|:-----|
| **#5653** | docs(website): add Architecture page (en + zh) | ✅ **Alto** — Documentação técnica de arquitetura para comunidade | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5653) |
| **#5612** | Fix/plugin market version routing | ✅ **Alto** — Corrige isolamento de versões v1.x vs v2.x | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5612) |
| **#4224** | fix(memory): refresh index after auto memory summary | ✅ **Médio** — Atualiza integração ReMe 0.3.1.9 | [Link](https://github.com/agentscope-ai/QwenPaw/pull/4224) |
| **#5454** | fix: macos sandbox missing close bracket | 🐛 **Baixo** — Fix sintático | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5454) |
| **#5457** | fix: cap the file size of send_file_to_user | 🛡️ **Médio** — Limite de segurança para upload | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5457) |
| **#5500** | fix: update detectors cache key | 🐛 **Médio** — Corrige cache de padrões | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5500) |
| **#5641** | fix: desktop screenshot in workspace | 🐛 **Baixo** — Fix UI desktop | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5641) |
| **#5645** | fix: add coding mode project_dir as rw | 🔧 **Médio** — Permissões de diretório | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5645) |

### Destaque Principal
O PR **#5653** adiciona documentação oficial de arquitetura em inglês e chinês, essencial para onboarding de novos contribuidores e compreensão do sistema Agent OS.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários + reações)

| Issue | Tipo | Comentários | Reações | Tópico | Link |
|:------|:-----|:-----------:|:-------:|:-------|:-----|
| **#5630** | Enhancement | 8 | 0 | Suporte custom BaseURL para Telegram | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5630) |
| **#5063** | Enhancement | 8 | 0 | Integração Headroom (compressão 60-95%) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5063) |
| **#5689** | Bug | 3 | 0 | Plugin SSH Remote não remove módulos corretamente | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5689) |
| **#5342** | Enhancement | 3 | 0 | Hard cap em tool results (defense-in-depth) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5342) |
| **#5711** | Enhancement | 2 | 0 | Análise de短板 e roadmap competitivo | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5711) |
| **#5273** | Tracking | 2 | 1 | v2.0.0 Pre-release Bug Tracker | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5273) |

### Análise dos Temas

**🔴 Alta Prioridade:**
- **Compressão de contexto e token consumption** (#5063, #5342) — A comunidade busca ativamente soluções para explosão de contexto, com proposta de integração do Headroom como camada opcional.
- **Segurança de chaves API** (#5705) — Requisição para suporte a variáveis de ambiente em agent.json e log scrubbing.

**🟡 Moderada:**
- **Customização de canais** (#5630) — Telegram BaseURL customizável.
- **Análise competitiva** (#5711) — Documentação abrangente de lacunas vs. concorrentes.

---

## 5. Bugs e Estabilidade

### Bugs Reportados (10 issues abertas)

| Severidade | Issue | Descrição | Link |
|:----------|:------|:----------|:-----|
| 🔴 **Crítica** | #5701 | Concurrent access crashes (multi-tab agent) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5701) |
| 🔴 **Crítica** | #5696 | QQ Channel AttributeError after WebSocket reconnect | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5696) |
| 🟠 **Alta** | #5709 | Feishu: Bot messages hard-dropped (is_bot误拦截) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5709) |
| 🟠 **Alta** | #5708 | Feishu interactive cards not parsing | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5708) |
| 🟠 **Alta** | #5710 | Context compression removes critical messages (锚点缺失) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5710) |
| 🟠 **Alta** | #5658 | Cannot connect through 9router proxy | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5658) |
| 🟡 **Média** | #5689 | Remote SSH plugin uninstall incomplete | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5689) |
| 🟡 **Média** | #5703 | Tool approval popup persists after disabling | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5703) |
| 🟡 **Média** | #5676 | Available skills not listed in system prompt (v2.0.0b2) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5676) |
| 🟢 **Baixa** | #5688 | CSS selector prefix mismatch (ant- vs qwenpaw-) | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5688) |
| 🟢 **Baixa** | #5712 | Cannot select text in desktop chat messages | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5712) |

### Análise de Estabilidade

**Problemas críticos identificados:**
1. **Concurrency bug** (#5701): Multi-tab acesso ao mesmo agent causa freeze — indica problema de estado compartilhado.
2. **QQ WebSocket resilience** (#5696): Reconnection logic deixa `self._http` como `None`, causando AttributeError em operações subsequentes.
3. **Feishu multi-agent collaboration** (#5709): Bloqueio de mensagens entre bots em grupos — impacta cenários de múltiplos agentes.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Feature | Issue | Impacto | Link |
|:--------|:------|:--------|:-----|
| **Headroom integration** | #5063 | 🔥🔥🔥 Altíssimo — Compressão 60-95% tokens | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5063) |
| **Hard cap em tool results** | #5342 | 🔥🔥🔥 Altíssimo — Defense-in-depth | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5342) |
| **Análise competitiva e roadmap** | #5711 | 🔥🔥 Alto — Levantamento completo de lacunas | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5711) |
| **Chaveiro/secret management** | #5705 | 🔥🔥 Alto — Segurança empresarial | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5705) |
| **Telegram custom BaseURL** | #5630 | 🔥 Médio — Flexibilidade de deployment | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5630) |
| **Remove input char limit** | #5670 | 🔥 Médio — 10k → unlimited | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5670) |

### PRs de Feature em Progress

| PR | Feature | Status | Link |
|:---|:--------|:-------|:-----|
| **#5697** | Blog section + docs refactor + SEO | 🔄 Em revisão | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5697) |
| **#5687** | Per-model `preserve_thinking` toggle | 🔄 Em revisão | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5687) |
| **#5692** | Memory reranker para ReMe 0.4 | 🔄 Em revisão | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5692) |
| **#5691** | Reranker config UI (Frontend) | 🔄 Em revisão | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5691) |
| **#5706** | Skill market: stars/downloads | 🔄 Em revisão | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5706) |
| **#5702** | Auto-refresh chat on channel updates | 🔄 Em revisão | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5702) |
| **#5698** | `run_tool_batch` v2.0 adaptation | 🔄 Em revisão | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5698) |
| **#5680** | Skill injection em system prompt | 🔄 Em revisão | [Link](https://github.com/agentscope-ai/QwenPaw/pull/5680) |

### Sinais de Roadmap

1. **v2.0.0 beta** está em active development — issue central #5273 tracking bugs.
2. **ReMe 0.4 integration** com reranker parece ser prioritário (2 PRs + 1 issue).
3. **Memory/Context management** é área quente (compressão, reranker, hard caps).
4. **Enterprise features**: Secret management, multi-agent collaboration, governance strict mode.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

| Categoria | Problema | Frequência | Issue |
|:----------|:---------|:----------|:------|
| 🛡️ **Segurança** | API keys expostas em logs e config files | 🔥 Alta | #5705, #5704 |
| 📉 **Context overflow** | Explosão de tokens sem proteção robusta | 🔥 Alta | #5342, #5710 |
| 🐛 **Instabilidade** | Concurrency crashes, plugin uninstall failures | 🔥 Alta | #5701, #5689 |
| 💬 **Canais** | Feishu multi-agent broken, cards not parsing | 🟡 Média | #5709, #5708 |
| 🔧 **UX Desktop** | Não consegue selecionar texto em mensagens | 🟡 Média | #5712 |
| 📝 **Limites** | Input 10k chars muito restritivo para LLMs modernos | 🟡 Média | #5670 |

### Cenários de Uso Reportados

1. **Multi-tab enterprise deployment**: Usuários acessam mesmo agent de múltiplas abas → crash.
2. **Multi-agent orchestration**: Bots precisam se comunicar via @mention em grupos Feishu → completamente broken.
3. **Long-context processing**: Usuários quiserem enviar documentos longos via input box → bloqueado.
4. **Plugin ecosystem**: Desenvolvedores publicam plugins → versionamento quebrado entre v1/v2.

### Tendência de Satisfação

| Indicador | Leitura |
|:----------|:--------|
| Ratio PRs closed/merged | 27/50 (54%) — Desenvolvimento ativo ✅ |
| Issues closed (últimas 24h) | 4/20 (20%) — Ciclo de resolução em curso ✅ |
| Bugs críticos abertos | 2 (concurrency + QQ) — Atenção necessária ⚠️ |
| Features solicitadas | 6+ de alta prioridade — Backlog robusto ✅ |

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Aguardando Triagem (>3 dias sem atualização)

| Issue | Idade | Status | Prioridade | Link |
|:------|:-----:|:-------|:----------:|:-----|
| **#5658** | 3 dias | 🟡 Aguardando resposta | 🔴 Alta | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5658) |
| **#5658** - Proxy 9router connection | — | Sem resposta do time | — | |
| **#5523** | 8 dias | ✅ Closed | 🟡 Média | [Link](https://github.com/agentscope-ai/QwenPaw/issues/5523) |
| **spawn_subagent missing Runtime 2.0** | — | Resolvido em PR | — | |

### Recomendações de Priorização

| # | Recomendação | Justificativa |
|:--|:-------------|:--------------|
| 1 | **Atender #5701** (concurrency crash) | Impacta todos os usuários multi-tab |
| 2 | **Avaliar #5709** (Feishu multi-agent) | Bloqueia caso de uso enterprise |
| 3 | **Revisar #5063** (Headroom) | Diferencial competitivo significativo |
| 4 | **Trianglar #5658** (9router) | 3 dias sem resposta, usuário aguardando |
| 5 | **Mergir #5680** (skill injection) | Resolve #5676 que afeta v2.0.0b2 |

---

## Métricas Resumidas do Dia

```
┌─────────────────────────────────────────────────────┐
│  ATIVIDADE (24h)                                    │
├─────────────────────────────────────────────────────┤
│  Issues: 20 (16 abertas, 4 fechadas)                │
│  PRs: 50 (23 abertas, 27 merged/fechadas)           │
│  Releases: 0                                        │
│  Stars (estimado): N/A                             │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  SAÚDE DO PROJETO                                   │
├─────────────────────────────────────────────────────┤
│  🔴 Críticos abertos: 2                             │
│  🟠 Altos abertos: 5                                │
│  🟢 PRs merged: 27                                  │
│  📈 Atividade: MUITO ALTA                          │
│  🎯 F

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório do Projeto ZeroClaw — 2026-07-02

## 1. Panorama do dia

O projeto ZeroClaw apresenta alta atividade de desenvolvimento com 50 issues e 50 PRs atualizados nas últimas 24h, indicando um ciclo de trabalho intenso. A versão atual é 0.8.1 (próxima meta: 0.8.3-beta-1), com foco em estabilidade e melhorias de segurança. Não houve releases formais hoje, mas múltiplos PRs críticos (zip-bomb hardening, OAuth credential fallback, CLI stdin capping) demonstram atenção à robustez. A comunidade está ativamente discutindo RFCs estruturais como Goal Mode e Work Lanes, sinalizando maturidade no processo de governança. O estado geral é de **saúde boa com alta pressão de manutenção**.

---

## 2. Lançamentos

**Nenhum release nas últimas 24h.**

A versão estável atual permanece em **0.8.1**. Os trackers de programa para v0.8.3 estão abertos e acumulando PRs de implementação:
- [Tracker v0.8.3 WASM plugin](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)
- [Tracker v0.8.3 provider e serialização](https://github.com/zeroclaw-labs/zeroclaw/issues/8360)
- [Tracker v0.8.3 runtime e tools](https://github.com/zeroclaw-labs/zeroclaw/issues/8071)

---

## 3. Progresso do Projeto

### PRs merged/fechados hoje (selecionados por impacto)

| # | PR | Impacto | Status |
|---|-----|---------|--------|
| [#8547](https://github.com/zeroclaw-labs/zeroclaw/pull/8547) | **fix(audit): remove rag-pdf feature — clear RUSTSEC-2026-0192** | Elimina vulnerabilidade `ttf-parser` (CVE risk) | Aberta, pronta para merge |
| [#8574](https://github.com/zeroclaw-labs/zeroclaw/pull/8574) | **fix(skills): harden extract_zip_secure against zip-bomb inflation** | Previne DoS por zip bombs em skills | Aberta |
| [#8571](https://github.com/zeroclaw-labs/zeroclaw/pull/8571) | **fix(delegate): skip global credential fallback for OAuth providers** | Corrige falha de autenticação com provedores OAuth (Anthropic Codex) | Aberta |
| [#8463](https://github.com/zeroclaw-labs/zeroclaw/pull/8463) | **fix(agent): cap interactive CLI stdin lines to 1 MiB** | Mitiga alocação ilimitada de memória no CLI interativo | Aberta |
| [#8596](https://github.com/zeroclaw-labs/zeroclaw/pull/8596) | **fix(channels): carry WeCom reply scope as structured metadata** | Melhora interoperabilidade com WeChat Work | Aberta |

### PRs de feature em destaque

| # | PR | Escopo | Tamanho |
|---|-----|--------|---------|
| [#8393](https://github.com/zeroclaw-labs/zeroclaw/pull/8393) | **feat(runtime): implement goal mode** | Implementação completa do RFC #8303 — modo autônomo durável para sessões de objetivo único | XL |
| [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) | **feat(channels/telegram): add multi_message streaming mode** | Adiciona streaming multi-mensagem para Telegram (similar a Discord/Matrix) | M |
| [#8508](https://github.com/zeroclaw-labs/zeroclaw/pull/8508) | **feat(mcp): resources-as-context, pinning, named-prompt rendering** | Contexto MCP como recursos para agentes + prompts nomeados | L |
| [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) | **feat(sop): visual SOP authoring surfaces with channel fan-in** | Interface visual para criação de SOPs com suporte a fan-in | XL |
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | **feat(matrix): add single-message progress drafts** | Streaming de progresso em drafts editáveis no Matrix | XL |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações)

| # | Título | Comentários | 👍 | Análise |
|---|--------|-------------|-----|---------|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | **RFC: Work Lanes, Board Automation, Label Cleanup** | 13 | 0 | Governança — automatizar triagem e organização de issues; draft RFC em Rev.7, status accepted |
| [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) | **Bug: MCP tools missing from TUI sessions** | 12 | 0 | Severidade S1 — ferramentas MCP visíveis no gateway mas ausentes no TUI; bug de conectividade runtime |
| [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) | **Feature: per-agent custom environment variables** | 5 | 0 | Multi-tenancy de variáveis de ambiente por agente; RFC accepted |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | **RFC: Goal mode for bounded autonomous session work** | 3 | **1** | Modo autônomo durável; PR #8393 em implementação |
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | **RFC: Replace React/Vite with Rust→Wasm** | 2 | **1** | Esforço de migração para Dioxus/Leptos/Yew; blocked, needs author action |

**Análise:** A comunidade demonstra forte interesse em governança (Work Lanes), qualidade de ferramentas MCP, e arquitetura de longo prazo (Rust→Wasm). Goal mode tem maior aceitação por reações (1 👍), indicando demanda por sessões Autonomous de longa duração.

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 S1 — Workflow Bloqueado (Crítico)

| # | Título | Status | Ação |
|---|--------|--------|------|
| [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) | MCP tools missing from TUI sessions while gateway sees them | `status:accepted` | Investigação de disconnect runtime ↔ TUI |
| [#8553](https://github.com/zeroclaw-labs/zeroclaw/issues/8553) | Agent cannot use environment variables as http_request secrets | `status:accepted` | Falha em secret propagation para http_request tool |
| [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | Agents stop work when exiting chat window in web dashboard | `status:accepted` | Interrupção prematura do loop pelo frontend |
| [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | SOPs not available to agent through web dashboard chat | `status:accepted` | Caminho de detecção de SOPs quebrado no dashboard |
| [#6891](https://github.com/zeroclaw-labs/zeroclaw/issues/6891) | Scheduled Jobs edit error API 422 | `status:accepted` | Interface legacy no gateway; formulário desatualizado desde v0.8.0-beta1 |

#### 🟠 S2 — Degraded Behavior (Alto)

| # | Título | Status | Ação |
|---|--------|--------|------|
| [#8554](https://github.com/zeroclaw-labs/zeroclaw/issues/8554) | Harden skill zip extractor against zip-bomb inflation | **PR #8574 pronta** | Compressão ratio/uncompressed-size caps |
| [#8302](https://github.com/zeroclaw-labs/zeroclaw/issues/8302) | Configured MCP servers tools not shown in tools list | `status:in-progress` | Gap entre bundling e UI de tools |
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | Improve Installation Documentation | `status:accepted` | UX/DX na instalação via cargo binstall |

**Síntese:** 5 bugs S1 ativos representam bloqueios críticos para workflow. A comunidade está priorizando MCP connectivity e web dashboard. A boa notícia é que 2 PRs de segurança (#8574, #8571) endereçam vulnerabilidades conhecidas.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features (últimas 24h)

| # | Título | Escopo | Prioridade |
|---|--------|--------|------------|
| [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) | **easy per-chat model switching for multi-model providers** | UX — trocar modelos por chat sem reconfiguração | Nova |
| [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | **Mixture-of-Agents (MoA) virtual model provider** | Agregador/julgador multi-modelo como provider selecionável | p2, accepted |

### RFCs em pipeline (indicativos de roadmap)

| # | RFC | Status | Próxima versão? |
|---|-----|--------|-----------------|
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | Goal Mode para sessões autônomas | **Accepted — PR #8393 em curso** | v0.8.3 |
| [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) | Per-agent env vars (runtime_context + runtime_secrets) | Accepted | v0.8.3+ |
| [#7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673) | Native context compression (CompressionDecorator) | Blocked, needs-author-action | TBD |
| [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) | OCI-compliant container registries para WASM plugins | Blocked, needs-maintainer-review | TBD |
| [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) | OpenAI-compatible chat completions endpoint | Blocked, needs-maintainer-review | v0.8.3+ |
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | Replace React/Vite with Rust→Wasm (Dioxus/Leptos) | Blocked, needs-author-action | Long-term |

**Sinais de roadmap claros:**
1. **Goal Mode** é a feature mais próxima de release (implementação PR aberta)
2. **Provider abstraction** (MoA, per-chat model switching) indica foco em flexibilidade de modelos
3. **Rust→Wasm** web UI é ambição de longo prazo para eliminar Node.js
4. **Segurança** aparece em 5+ RFCs (observabilidade OTel, secrets, zip hardening)

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas (issues abertas)

| Categoria | Issue | Cenário |
|-----------|-------|---------|
| **UX/DX instalação** | [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | Usuários novos não sabem usar `cargo binstall zeroclaw`; documentação confusa |
| **Workflow interrupto** | [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | Agentes param ao fechar chat no dashboard — impossível background work |
| **MCP tooling** | [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) | Servidores MCP conectam mas tools não aparecem no TUI — experiência inconsistente |
| **Segurança secrets** | [#8553](https://github.com/zeroclaw-labs/zeroclaw/issues/8553) | Não há path para usar `SLACK_BOT_TOKEN` env var em http_request — bloqueia integrações |
| **Matrix history** | [#8541](https://github.com/zeroclaw-labs/zeroclaw/issues/8541) | Desejo de thread-scoped history no Matrix — default bom mas não configurável |
| **SOP authoring** | [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) | Necessidade de interface visual para criar SOPs (PR em curso) |

### Padrões identificados

- **Integração empresarial:** issues sobre OAuth, WeCom, Matrix, Telegram indicam adoção em ambientes corporativos
- **Segurança como prioridade:** 3 issues de segurança ativas (zip-bomb, secrets, OTel policy)
- **Onboarding:** documentação de instalação é ponto de fricção para novos usuários
- **Background work:** usuário espera que agentes trabalhem após fechar navegador — gap entre CLI e web

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>7 dias sem atividade ou comentário)

| # | Título | Criado | Atualizado | Prioridade | Risco | Motivo da atenção |
|---|--------|--------|------------|------------|-------|-------------------|
| [#

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*