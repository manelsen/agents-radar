# Relatório diário da comunidade de ferramentas AI CLI 2026-04-15

> Gerado em: 2026-04-15 01:57 UTC | Ferramentas cobertas: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Comparação entre ferramentas

# Relatório Comparativo do Ecossistema AI CLI — 2026-04-15

---

## 1. Panorama do Ecossistema

O ecossistema de ferramentas AI CLI apresenta **estágios heterogêneos de maturidade** em abril de 2026. Claude Code e OpenAI Codex lideram em volume de atividade e engajamento comunitário, enquanto Gemini CLI e Kimi Code CLI enfrentam regressões críticas que impactam experiência do usuário. **Questões de autenticação e OAuth** emergem como denominador comum entre múltiplas ferramentas, sugerindo desafios arquiteturais compartilhados. A fragmentação do mercado é evidenciada por abordagens divergentes: enquanto algumas ferramentas priorizam **extensibilidade via plugins e hooks**, outras focam em **controles granulares de contexto e performance**. O ecossistema revela uma tendência clara: **feature requests mais votados** concentram-se em configurabilidade (prompts customizáveis, teclas de atalho estilo vi) e observabilidade (tracking de uso, métricas em tempo real).

---

## 2. Comparação de Atividade

| Ferramenta | Releases (24h) | Issues Críticas | Issues Abertas | PRs Abertos | Engajamento Total¹ |
|------------|---------------:|---------------:|---------------:|------------:|-------------------:|
| **Claude Code** | 2 | 3 | ~25+ | ~11 | 🔥🔥🔥 2.265+ |
| **OpenAI Codex** | 3 (alphas) | 2 | ~20+ | ~20 | 🔥🔥 550+ |
| **Gemini CLI** | 2 | 1 | ~15 | ~12 | 🔥 145+ |
| **Copilot CLI** | 3 | 3 | ~42+ | ~1 | 🔥 60+ |
| **Kimi Code CLI** | 1 | 2 | ~8 | ~6 | 🟡 45+ |
| **OpenCode** | 1 | 2 | ~20+ | ~10 | 🔥 260+ |
| **Qwen Code** | 0 | 2 | ~12 | ~10 | 🟡 15+ |
| **Pi** | 0 | 0 | 0 | 0 | ⚪ N/A |

**¹ Soma de comentários + reações nas 5 issues mais engajadas**

**Insights:**
- **Copilot CLI** tem maior volume de issues (42+) mas menor engajamento por issue, indicando problemas de triagem ou issues menores
- **Claude Code** domina em engajamento comunitário (1.825 reações em um único issue)
- **OpenAI Codex** mantém ciclo de release mais agressivo (3 alphas consecutivas em um dia)
- **Qwen Code** e **Kimi Code CLI** são ferramentas orientadas por mercado doméstico chinês com atividade moderada

---

## 3. Direções de Features Compartilhadas

### 3.1 Controles de Contexto e Memória
| Feature | Claude | Codex | Gemini | Copilot | Kimi | OpenCode | Qwen |
|---------|:------:|:-----:|:------:|:-------:|:----:|:--------:|:----:|
| Prompt caching | ✅ | ✅ | - | - | - | - | - |
| Context compaction configurável | - | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| Histórico de sessões nomeáveis | ✅ | - | ✅ | - | ✅ | ✅ | ✅ |
| Memória cross-session | ⚠️ | - | ✅ | - | - | - | - |

### 3.2 Extensibilidade via Hooks/Plugins
- **Claude Code**: Plugin system maduro (subagent-cleanup, notify-on-complete, usage-monitor)
- **OpenCode**: Sistema de hooks em evolução com eventos PostTurn, prompt hooks
- **Qwen Code**: PostTurn hook implementado, ACP hooks em desenvolvimento
- **Copilot CLI**: Plugin hooks com variáveis de ambiente padronizadas (PLUGIN_ROOT)

### 3.3 Observabilidade e Telemetria
| Feature | Claude | Codex | Gemini | Copilot | Kimi | OpenCode | Qwen |
|---------|:------:|:-----:|:------:|:-------:|:----:|:--------:|:----:|
| Live TPS durante streaming | - | - | - | - | ✅ | - | - |
| Status bar hints | ✅ | - | - | ✅ | - | - | - |
| Usage monitoring plugin | ✅ | - | - | - | - | - | - |
| Tracing granular opt-in | - | - | ✅ | - | - | - | - |

### 3.4 Input Alternativo
| Feature | Claude | Codex | Gemini | Copilot | Kimi | OpenCode | Qwen |
|---------|:------:|:-----:|:------:|:-------:|:----:|:--------:|:----:|
| Voice input (STT) | - | - | P2 | - | - | ✅ | - |
| Voice input nativo | - | - | ✅ | - | - | - | - |

---

## 4. Análise de Diferenciação

### 4.1 Foco Estratégico

| Ferramenta | Público-Alvo Primário | Diferencial Principal | Abordagem Técnica |
|------------|----------------------|---------------------|-------------------|
| **Claude Code** | Devs enterprise e individuais | Ecossistema de plugins, prompt caching | Rust, variáveis de ambiente |
| **OpenAI Codex** | Enterprise com infraestrutura OAI | Runtime abstraction flexível | Rust SDK, WebSocket auth |
| **Gemini CLI** | Usuários Google One AI Premium | Integração Google, voice input | TypeScript com tsgo (5.6x faster) |
| **Copilot CLI** | Ecossistema GitHub/Microsoft | Integração VS Code, GitHub enterprise | Plugin hooks, .code-workspace |
| **Kimi Code CLI** | Mercado doméstico (CN) | Custo-benefício, controle de thinking | Python-style, config.toml |
| **OpenCode** | Power users e cross-model | Multi-provider, Effect framework | TypeScript/Eff, multi-GUI |
| **Qwen Code** | Mercado doméstico (CN) | Subagentes paralelos, hooks ACP | Hook lifecycle completo |

### 4.2 Arquitetura e Stack

```
┌─────────────────────────────────────────────────────────────────┐
│                    FRONTEND / INTERFACE                        │
├─────────────┬─────────────┬─────────────┬─────────────┬────────┤
│  CLI-only   │ CLI + Desktop│ CLI + Desktop│ CLI + Extension│CLI+GUI│
│  (Claude)   │ (Codex,       │ (Gemini,     │ (Copilot,    │(OpenCode)
│             │  Gemini)      │  Kimi)       │  Qwen)       │
├─────────────┴─────────────┴─────────────┴─────────────┴────────┤
│                    LINGUAGEM / STACK                           │
├─────────────┬─────────────┬─────────────┬─────────────┬────────┤
│    Rust     │   TypeScript │  TypeScript │  TypeScript  │ TypeScript│
│  (Claude)   │    (Gemini)  │   (Codex)   │  (Copilot)  │ (OpenCode)
│             │  + tsgo      │             │             │
└─────────────┴─────────────┴─────────────┴─────────────┴────────┘
```

### 4.3 Modelo de Negócio/Plataforma

| Ferramenta | Provider | Estratégia |
|------------|----------|------------|
| Claude Code | Anthropic | Lock-in com recursos proprietários (plugins, caching) |
| OpenAI Codex | OpenAI | Abstração de provider permite multi-backend |
| Gemini CLI | Google | Integração vertical com Google One AI Premium |
| Copilot CLI | GitHub/Microsoft | Hub para ecossistema Microsoft |
| Kimi Code CLI | Moonshot AI | Mercado doméstico com controle de custos |
| OpenCode | Agnóstico | Multi-provider (Claude, Codex, Gemini, etc.) |
| Qwen Code | Alibaba/Qwen | Mercado doméstico com integração DashScope |

---

## 5. Tração e Maturidade da Comunidade

### 5.1 Métricas de Engajamento

```
Engajamento (comentários + reações nas top 5 issues):
                                                      
Claude Code    ████████████████████████████████ 2.265
OpenCode       ████████████████                  260
OpenAI Codex   █████████████                     550
Copilot CLI    ████                               60
Gemini CLI     ██████                            145
Kimi Code CLI  ███                                45
Qwen Code      █                                  15
Pi             ▪                                   0
```

### 5.2 Velocidade de Iteração

| Ferramenta | Releases/semana | Tempo médio de resolução | Velocidade |
|------------|:---------------:|:-----------------------:|:-----------:|
| **OpenAI Codex** | ~3 alphas | - | ⚡⚡⚡ Alta (3 alphas/dia) |
| **Copilot CLI** | ~2 | ~2-3 dias | ⚡⚡ Rápida |
| **Kimi Code CLI** | ~1 | ~1 dia (critical fixes) | ⚡⚡ Rápida |
| **Claude Code** | ~2-3 | 1-2 semanas | ⚡ Média-alta |
| **OpenCode** | ~1 | varies | ⚡ Média |
| **Gemini CLI** | ~2-3 preview | varies | ⚡ Média |
| **Qwen Code** | ~0-1 | varies | 🐢 Baixa |
| **Pi** | 0 | N/A | ⚪ Estagnada |

### 5.3 Sinais de Maturidade

**Alta maturidade (estável e responsivo):**
- ✅ **Claude Code**: Mega-issues com respostas rápidas da equipe, PRs de feature request mergeados
- ✅ **OpenAI Codex**: Ciclo rápido de alphas, arquitetura em refatoração ativa

**Maturidade média (funcional mas com atrasos):**
- 🟡 **Copilot CLI**: Issues crônicos (Windows 11) sem resolução há meses
- 🟡 **OpenCode**: Regressões recentes (v1.4.4) indicam falta de teste coverage

**Maturidade baixa (comunidade fragmentada):**
- 🔴 **Gemini CLI**: Problemas OAuth persistem há semanas sem resolução
- 🔴 **Kimi Code CLI**: Debate sobre "negative optimization" indica comunicação fraca

---

## 6. Sinais de Tendência do Setor

### 6.1 Emergentes (Sinais Fortes)

**🔴 Prompt Caching como Standard**
- Claude Code: variáveis de ambiente `ENABLE_PROMPT_CACHING_1H`, `FORCE_PROMPT_CACHING_5M`
- OpenAI Codex: parâmetro `prompt_cache_retention` em contexto
- *Implicação*: Otimização de custos e latência através de caching now é tabela-stakes

**🔴 Extensibilidade via Hooks/Plugins**
- Padrão emergindo: `PreTurn`, `PostTurn`, `ToolExecution` hooks
- Claude, OpenCode, Qwen, Copilot — todos com variações de hooks
- *Implicação*: Arquitetura de plugins está se tornando diferenciador competitivo

**🔴 Observabilidade em Tempo Real**
- Live TPS (Kimi), status bar hints (Claude, Copilot), usage monitor (Claude)
- *Implicação*: Usuários profissionais demandam controle sobre consumo de tokens

### 6.2 Convergentes (Padrões que emergem)

**🟡 Voice Input Zero-Install**
- Gemini CLI: backend `gemini` nativo (sem dependências)
- OpenCode: STT via qualquer API `/v1/audio/transcriptions`
- *Implicação*: Transcrição de voz está se tornando feature básica

**🟡 Multi-Provider Abstraction**
- OpenCode: suporte agnóstico a Claude, Codex, Gemini
- OpenAI Codex: `ModelProvider` trait em runtime
- *Implicação*: Vendor lock-in está diminuindo; clientes querem portabilidade

**🟡 Context Management Hierárquico**
- Claude: workspace-scoped, Cowork exclusions
- Gemini: global (`~/.gemini/`) vs. projeto (`.gemini/`)
- *Implicação*: Gerenciamento de contexto em múltiplos níveis é tendência

### 6.3 Problemas Crônicos do Setor

| Problema | Afetadas | Descrição |
|----------|:--------:|-----------|
| **OAuth/Auth Errors** | Gemini, Copilot, Claude | Autenticação funciona mas API calls falham |
| **Memory Leaks** | Codex, OpenCode, Claude (MCP) | Processos órfãos, 37GB em casos extremos |
| **Windows Compatibility** | Todas | Problemas específicos de platform (case sensitivity, BOM, CMD vs PowerShell) |
| **MCP Integration** | Codex, Copilot, Qwen | Servidores listados mas não reconhecidos |
| **Rate Limits Opacos** | Codex, Gemini | Consumo acelerado sem explicação clara |

---

## 7. Síntese para Decisores

### Para Desenvolvedores Individuais
1. **Evitar** Gemini CLI para production até regressão OAuth ser resolvida
2. **Considerar** Claude Code para ecossistema de plugins maduro
3. **Monitorar** OpenAI Codex para arquitetura de provider abstraction

### Para Enterprise/Tech Leads
1. **Claude Code** oferece melhor suporte a ambientes complexos (worktrees, bare repos)
2. **Copilot CLI** integra-se nativamente ao ecossistema Microsoft/GitHub
3. **OpenCode** oferece flexibilidade multi-provider mas com menor estabilidade

### Para Contribuidores Open Source
1. **Voice input** (Gemini P2, OpenCode) são áreas com demanda clara
2. **Hooks/Plugins** em Qwen e OpenCode precisam de contribuição
3. **Memory profiling** em OpenCode (megathread) aceita heap snapshots

---

*Relatório compilado em 2026-04-15 | Dados de: Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Qwen Code*

---

## Relatórios detalhados por ferramenta

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Destaques da comunidade Claude Code Skills

> Fonte: [anthropics/skills](https://github.com/anthropics/skills)

# Relatório de Destaques — Claude Code Skills

## 1. Ranking das Skills Mais Quentes

### 📄 document-typography (PR #514)
**Função:** Controle de qualidade tipográfica em documentos gerados por IA.
**Pontos quentes:** Aborda problemas universais — orphaned words, widows, desalinhamento de numeração — que afetam cada documento que o Claude gera.
**Estado:** 🟡 Aberto | Criado: 2026-03-04

---

### 🔍 skill-quality-analyzer + skill-security-analyzer (PR #83)
**Função:** Meta-skills que avaliam Skills em 5 dimensões (estrutura, documentação, segurança, etc.) e detectam vulnerabilidades.
**Pontos quentes:** Demanda real da comunidade por ferramentas de avaliação padronizada; cobre lacuna entre "criar skill" e "validar skill".
**Estado:** 🟡 Aberto | Criado: 2025-11-06

---

### 🎨 frontend-design skill improvement (PR #210)
**Função:** Revisão de clareza e acionabilidade da skill de design frontend.
**Pontos quentes:** Problema recorrente: skills que "explicam" em vez de "instruir" — violação do princípio operativo.
**Estado:** 🟡 Aberto | Criado: 2026-01-05 | Atualizado: 2026-03-07

---

### 📰 ODT skill — OpenDocument (PR #486)
**Função:** Criação, preenchimento, leitura e conversão de arquivos OpenDocument (.odt, .ods).
**Pontos quentes:** Formato ISO/open-source widely used; expansão do suporte a formatos além do proprietário.
**Estado:** 🟡 Aberto | Criado: 2026-03-01 | Atualizado: 2026-04-14

---

### 🧪 testing-patterns (PR #723)
**Função:** Cobertura completa do stack de testing — filosofia, unit, React components, integração, E2E.
**Pontos quentes:** Template Testing Trophy, padrões AAA, naming conventions, edge cases; adoção orgânica por múltiplos autores.
**Estado:** 🟡 Aberto | Criado: 2026-03-22

---

### 🏢 SAP-RPT-1-OSS predictor (PR #181)
**Função:** Integração com o modelo tabular foundation da SAP para analytics preditivo em dados бизнес.
**Pontos quentes:** Especialização enterprise; único PR com foco em domínio SAP no repositório.
**Estado:** 🟡 Aberto | Criado: 2025-12-28

---

### 🍎 sensory — macOS automation via AppleScript (PR #806)
**Função:** Automação nativa macOS com permissão em dois níveis (direta + Accessibility).
**Pontos quentes:** Alternativa ao screenshot-based computer use; skill de automação de plataforma.
**Estado:** 🟡 Aberto | Criado: 2026-03-29

---

### 💾 shodh-memory + record-knowledge (PRs #154, #521)
**Função:** Memória persistente para agentes AI — sobrevivência de contexto entre sessões.
**Pontos quentes:** Problema real: "workaround descoberto ontem precisa ser redescoberto hoje"; persists em `.claude/knowledge/`.
**Estado:** 🟡 Aberto | Criados: 2025-12-19 e 2026-03-05

---

## 2. Tendências de Demanda da Comunidade

| Tendência | Fonte | Evidência |
|-----------|-------|-----------|
| **Qualidade e validação de Skills** | Issue #202, #532 | "skill-creator reads like developer docs" — precisa instruir Claude, não educar humanos |
| **Segurança e governança** | Issue #492, PR #83 | Skills sob `anthropic/` namespace criam confusão de confiança; faltam analyzers |
| **Persistência de memória** | Issue #412, PRs #154, #521 | "Claude loses all context between sessions" — problema universal |
| **Suporte a formatos open-source** | PRs #486, #514 | ODT, tipografia de documentos — além de .docx/.pdf proprietários |
| **Integração enterprise** | Issue #29, #228, #532 | Bedrock, SSO, org-wide sharing — adoção corporativa bloqueada |
| **Avaliação automatizada** | Issue #556 | `run_eval.py` com 0% de trigger rate — infraestrutura de testes quebrada |
| **Automação plataforma** | PR #806 | AppleScript, sensory — macOS automation como skill nativa |

---

## 3. Skills Promissoras Ainda Pendentes

| PR | Skill | Atividade | Status |
|----|-------|-----------|--------|
| [PR #83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer + skill-security-analyzer | 5 dimensões de análise + security scanning | 🟡 Aberto |
| [PR #210](https://github.com/anthropics/skills/pull/210) | frontend-design melhorado | Revisado 2026-03-07 | 🟡 Aberto |
| [PR #514](https://github.com/anthropics/skills/pull/514) | document-typography | Atualizado 2026-03-13 | 🟡 Aberto |
| [PR #486](https://github.com/anthropics/skills/pull/486) | ODT skill | Atualizado 2026-04-14 | 🟡 Aberto |
| [PR #723](https://github.com/anthropics/skills/pull/723) | testing-patterns | Atualizado 2026-03-30 | 🟡 Aberto |
| [PR #541](https://github.com/anthropics/skills/pull/541) | DOCX fix (tracked changes) | Atualizado 2026-04-07 | 🟡 Aberto |
| [PR #147](https://github.com/anthropics/skills/pull/147) | codebase-inventory-audit | Atualizado 2026-02-04 | 🟡 Aberto |

**Destaque:** PRs #83 e #723 são os que combinam maior profundidade funcional + menor complexidade de merge.

---

## 4. Insight sobre o Ecossistema de Skills

> **A comunidade precisa de Skills que resolvam problemas de saída (tipografia, formatação, persistência de memória) e ferramentas de validação (quality/security analyzers, testes automatizados) — o ecossistema está amadurecendo da fase "criar Skills" para "confiar e manter Skills".**

---

# Relatório Diário da Comunidade Claude Code — 2026-04-15

---

## 1. Destaques do Dia

O release **v2.1.108** traz melhorias significativas no sistema de **prompt caching**, com novas variáveis de ambiente para controle do TTL (1 hora ou 5 minutos). A comunidade continua debatendo intensivamente o Issue #42796 sobre a usabilidade do Claude Code em tarefas complexas de engenharia — com 440 comentários e 1825 reações, este é o tema mais discutido do momento. Vários relatórios de bugs emergiram relacionando a versão desktop v1.2581.0 a problemas de rendimiento e estabilidade.

---

## 2. Lançamentos

### v2.1.108
**Variáveis de ambiente para Prompt Caching:**
- `ENABLE_PROMPT_CACHING_1H`: Ativa TTL de 1 hora para o cache de prompts na API key, Bedrock, Vertex e Foundry
- `FORCE_PROMPT_CACHING_5M`: Força TTL de 5 minutos
- `ENABLE_PROMPT_CACHING_1H_BEDROCK` depreciada, mas ainda suportada
- Adicionada feature de **recap** para fornecer contexto resumido

### v2.1.107
- Melhoria na exibição de **thinking hints** durante operações longas

📦 [Release v2.1.108](https://github.com/anthropics/claude-code/releases/tag/v2.1.108) | [Release v2.1.107](https://github.com/anthropics/claude-code/releases/tag/v2.1.107)

---

## 3. Issues em Evidência

### 🔴 Crítico

**[#42796 — Claude Code unusable for complex engineering tasks with Feb updates](https://github.com/anthropics/claude-code/issues/42796)**
- **Status:** CLOSED
- **Autor:** stellaraccident | **Comentários:** 440 | **Reações:** 1825 👍
- **Por que importa:** Este é o issue mais significativo do momento, relatando degradação severa em tarefas de engenharia complexas após atualizações de fevereiro. A alta quantidade de comentários indica uma questão sistêmica afetando muitos usuários.
- **Reação da comunidade:** Debate intenso e extenso, indicando impacto em produção.

**[#47699 — Cannot paste auth code into "Paste code here" during /login in Dev Container](https://github.com/anthropics/claude-code/issues/47699)**
- **Status:** CLOSED
- **Autor:** kazuyuki-saka | **Comentários:** 46 | **Reações:** 60 👍
- **Por que importa:** Afeta fluxo de autenticação em ambientes containerizados, bloqueando onboarding.
- **Reação da comunidade:** Solução foi implementada rapidamente.

**[#47669 — login with pasting auth code doesn't work](https://github.com/anthropics/claude-code/issues/47669)**
- **Status:** OPEN
- **Autor:** shykwon | **Comentários:** 36 | **Reações:** 47 👍
- **Por que importa:** Variação do bug de autenticação em plataformas Linux, indica padrão recorrente.
- **Reação da comunidade:** Usuários confirmam o problema em diferentes ambientes.

---

### 🟡 Importantes

**[#48214 — Desktop app v1.2581.0: UI text cutoff and extreme lag](https://github.com/anthropics/claude-code/issues/48214)**
- **Status:** OPEN
- **Autor:** shellylynnx | **Comentários:** 4 | **Reações:** 0
- **Por que importa:** Relatado hoje — versão desktop apresenta corte de texto e lentidão extrema.
- **Reação da comunidade:** Relatório inicial, aguardando confirmação.

**[#48223 — Claude Desktop v1.2581.0 - Renderer process pegs CPU at 500%+ immediately on launch](https://github.com/anthropics/claude-code/issues/48223)**
- **Status:** OPEN
- **Autor:** davante760-lang | **Comentários:** 1
- **Por que importa:** CPU em 500%+ torna aplicação completamente inutilizável em macOS.
- **Reação da comunidade:** Problema crítico recém-reportado.

**[#25087 — keybindings.json ignored in Claude desktop app](https://github.com/anthropics/claude-code/issues/25087)**
- **Status:** OPEN
- **Autor:** jnikolaidis | **Comentários:** 9 | **Reações:** 11 👍
- **Por que importa:** Keybindings personalizados são ignorados, afetando produtividade de desenvolvedores.
- **Reação da comunidade:** Bug tem repro, aguardando correção.

**[#47731 — Severe latency in Claude Code with long-context sessions (20min+ turn times)](https://github.com/anthropics/claude-code/issues/47731)**
- **Status:** OPEN
- **Autor:** iveelane-fdatracker | **Comentários:** 2 | **Reações:** 1
- **Por que importa:** Latência extrema (~20 minutos por operação) com sessões de contexto longo.
- **Reação da comunidade:** Impacto direto na experiência com modelos de contexto elevado.

**[#48218 — claude -r fails on Windows due to case-sensitive path comparison](https://github.com/anthropics/claude-code/issues/48218)**
- **Status:** OPEN
- **Autor:** TuckyDog | **Comentários:** 1
- **Por que importa:** Falha em sistema de arquivos case-insensitive (Windows) afeta fluxo de trabalho.
- **Reação da comunidade:** Bug técnico específico de plataforma.

**[#48207 — Configurable session limit for /resume picker](https://github.com/anthropics/claude-code/issues/48207)**
- **Status:** OPEN
- **Autor:** alexboden | **Comentários:** 2
- **Por que importa:** Picker atual mostra apenas 50 sessões mais recentes; power users acumulam centenas.
- **Reação da comunidade:** Enhancement requisitado múltiplas vezes.

---

## 4. Progresso de PRs Importantes

| PR | Título | Status | Relevância |
|----|--------|--------|------------|
| [#48151](https://github.com/anthropics/claude-code/pull/48151) | Fix: include cwd project dir in multi-worktree session discovery | OPEN | Resolve problema de `--resume` não encontrar sessões em layouts bare-repo + worktree |
| [#27395](https://github.com/anthropics/claude-code/pull/27395) | feat: add completion subcommand for bash and zsh | OPEN | Adiciona shell completions para todos os subcomandos CLI |
| [#47830](https://github.com/anthropics/claude-code/pull/47830) | feat: add subagent-cleanup plugin | OPEN | Plugin para terminar processos órfãos, evitando vazamentos de CPU/memória |
| [#47759](https://github.com/anthropics/claude-code/pull/47759) | feat(plugins): add notify-on-complete | OPEN | Plugin oficial para notificações desktop ao completar tarefas |
| [#47760](https://github.com/anthropics/claude-code/pull/47760) | feat(plugins): add usage monitor | OPEN | Plugin oficial com monitor de uso na menu bar (macOS/SwiftBar) |
| [#39148](https://github.com/anthropics/claude-code/pull/39148) | feat: add preserve-session plugin | OPEN | Preserva histórico de sessões ao renomear/mover diretórios de projeto |
| [#47836](https://github.com/anthropics/claude-code/pull/47836) | fix(plugin-dev): align hook validator | OPEN | Melhora validação de hooks com formato wrapper |
| [#47902](https://github.com/anthropics/claude-code/pull/47902) | fix: add -exist flag to ipset add | CLOSED | Previne erros de duplicação no firewall do DevContainer |
| [#23853](https://github.com/anthropics/claude-code/pull/23853) | fix: Replace deprecated npm install in Dockerfile | OPEN | Atualiza Dockerfile para usar installer nativo |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | feat: open source claude code | OPEN | Iniciativa open source (fecha múltiplos issues de feature requests) |

---

## 5. Tendências de Pedidos de Features

### 🏆 Mais Solicitados

1. **Configurabilidade do UI/UX**
   - Controle de onde diff views abrem ([#37593](https://github.com/anthropics/claude-code/issues/37593))
   - Voice Input para VS Code Extension ([#48224](https://github.com/anthropics/claude-code/issues/48224))
   - Session limit configurável para `/resume` ([#48207](https://github.com/anthropics/claude-code/issues/48207))

2. **Gestão de Contexto e Memória**
   - Remoção de pastas locais do contexto Cowork ([#40043](https://github.com/anthropics/claude-code/issues/40043))
   - Controle de MCPs por surface ([#47881](https://github.com/anthropics/claude-code/issues/47881))
   - UUID para sessões independentes de path ([#39148](https://github.com/anthropics/claude-code/pull/39148))

3. **Cross-Device e Remote Control**
   - URLs de sessão abrindo no app mobile ao invés do browser ([#48220](https://github.com/anthropics/claude-code/issues/48220))

4. **Performance com Contexto Longo**
   - Suporte otimizado para sessões de 1M+ tokens sem degradação

5. **Notificações e Monitoramento**
   - Desktop notifications on task completion ([#47759](https://github.com/anthropics/claude-code/pull/47759))
   - Usage monitor na menu bar ([#47760](https://github.com/anthropics/claude-code/pull/47760))

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Dores Recorrentes Identificadas

| Categoria | Descrição | Issues Relacionados |
|-----------|-----------|---------------------|
| **🔐 Autenticação** | Problemas com fluxo de login e colagem de código em containers | [#47699](https://github.com/anthropics/claude-code/issues/47699), [#47669](https://github.com/anthropics/claude-code/issues/47669) |
| **🖥️ Desktop App v1.2581.0** | Múltiplos bugs críticos: CPU 500%+, UI cutoff, crashes | [#48214](https://github.com/anthropics/claude-code/issues/48214), [#48223](https://github.com/anthropics/claude-code/issues/48223), [#48221](https://github.com/anthropics/claude-code/issues/48221) |
| **🧠 Memória Cross-Session** | Informações de sessão sendo compartilhadas entre sessões diferentes | [#48226](https://github.com/anthropics/claude-code/issues/48226) |
| **📝 Unicode/Encoding** | Problemas com caracteres não-ASCII em edições | [#48229](https://github.com/anthropics/claude-code/issues/48229) |
| **🐛 Perda de Dados** | Prompts perdidos em falhas de skill invocation | [#48199](https://github.com/anthropics/claude-code/issues/48199) |

### 🔧 Ações Recomendadas para Desenvolvedores

1. **Evitar upgrade para Desktop v1.2581.0** até que os bugs de rendimiento sejam resolvidos
2. **Verificar workflows de autenticação** em ambientes Linux e Dev Container
3. **Usar `--channels` com cautela** — remove ferramentas AskUserQuestion, EnterPlanMode, ExitPlanMode
4. **Considerar PRs de plugins úteis:** subagent-cleanup e usage-monitor para projetos de alta intensidade
5. **Documentar workarounds** para session resume em repositórios com worktrees

---

*Relatório gerado em 2026-04-15 | Fonte: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Relatório Diário da Comunidade OpenAI Codex
## 📅 2026-04-15

---

## 1. Destaques do Dia

A equipe do Codex liberou três alpha releases consecutivas (v0.121.0-alpha.8/9/10) em um ciclo rápido de desenvolvimento, indicando preparação para uma próxima versão estável. A comunidade permanece ativa com debates intensos sobre **rate limits** e **consumo excessivo de tokens**, além de problemas persistentes de memory leak em processos MCP no macOS. No front de features, a abstração de provider de modelo em runtime representa uma evolução arquitetural significativa que permite maior flexibilidade de configuração.

---

## 2. Lançamentos

### Releases Rust SDK (v0.121.0)

| Versão | Data | Status |
|--------|------|--------|
| `rust-v0.121.0-alpha.10` | 2026-04-15 | ✅ Mais recente |
| `rust-v0.121.0-alpha.9` | 2026-04-15 | Em teste |
| `rust-v0.121.0-alpha.8` | 2026-04-15 | Em teste |

**Observação:** As três alphas consecutivas sugerem que a equipe está finalizando recursos para a versão 0.121.0. Não há changelog detalhado disponível nas informações fornecidas, mas o ciclo acelerado indica correções críticas ou funcionalidades em andamento.

🔗 [Ver todas as releases](https://github.com/openai/codex/releases)

---

## 3. Issues em Evidência

### 🔴 Issue #14593 — "Burning tokens very fast" (Rate Limits)
**Status:** ABERTA | **Comentários:** 537 | **👍:** 213

Um dos problemas mais debatidos da comunidade. Usuários relatam consumo acelerado de tokens mesmo em operações simples, afetando principalmente assinantes **Business**. A alta engajamento (537 comentários) indica um impacto significativo em produção.

🔗 [Ver Issue #14593](https://github.com/openai/codex/issues/14593)

---

### 🟡 Issue #17809 — "Context compaction fails with unknown parameter 'prompt_cache_retention'"
**Status:** FECHADA | **Comentários:** 37 | **👍:** 56

Erro de parâmetro desconhecido (`prompt_cache_retention`) na compactação de contexto. Já fechada, mas demonstra uma incompatibilidade entre versões do CLI e do backend que afeta sessões existentes.

🔗 [Ver Issue #17809](https://github.com/openai/codex/issues/17809)

---

### 🟡 Issue #17814 — "Codex CLI v0.120.0 fails to resume old sessions"
**Status:** FECHADA | **Comentários:** 4 | **👍:** 0

Problema similar ao #17809: sessões antigas falham ao resumir com erro de parâmetro `prompt_cache_retention`. Indica necessidade de migração de estado entre versões.

🔗 [Ver Issue #17814](https://github.com/openai/codex/issues/17814)

---

### 🔴 Issue #12491 — "MCP child processes not reaped — 1300+ zombies, 37GB memory leak"
**Status:** ABERTA | **Comentários:** 12 | **👍:** 3

Memory leak severo em processos MCP child no Codex.app GUI. Usuários relatam milhares de processos zumbis consumindo 37GB de RAM. Problema crítico para ambientes de produção.

🔗 [Ver Issue #12491](https://github.com/openai/codex/issues/12491)

---

### 🟠 Issue #11981 — "Codex app 100% CPU Usage even when only one agent is running"
**Status:** ABERTA | **Comentários:** 36 | **👍:** 8

Consumo de CPU em 100% mesmo com apenas um agente ativo no macOS. Afeta principalmente assinantes Plus e indica ineficiências no gerenciamento de processos.

🔗 [Ver Issue #11981](https://github.com/openai/codex/issues/11981)

---

### 🟠 Issue #16099 — "High GPU usage when app is on screen Mac"
**Status:** ABERTA | **Comentários:** 3 | **👍:** 4

Uso elevado de GPU (50-90%) quando o app está em tela, mesmo em estados ociosos. Relacionado a animações e rendering desnecessário.

🔗 [Ver Issue #16099](https://github.com/openai/codex/issues/16099)

---

### 🟠 Issue #15330 — "High CPU consuming when codex diff render"
**Status:** ABERTA | **Comentários:** 16 | **👍:** 9

Rendering de diffs causa consumo extremo de CPU. Problema específico da View de diffs do Codex no macOS.

🔗 [Ver Issue #15330](https://github.com/openai/codex/issues/15330)

---

### 🟡 Issue #16857 — "High GPU usage while the app is 'thinking' due to tiny useless animation"
**Status:** ABERTA | **Comentários:** 9 | **👍:** 14

Animação de "pensando" consome recursos excessivos de GPU. Feature request implícito para desabilitar ou otimizar animações.

🔗 [Ver Issue #16857](https://github.com/openai/codex/issues/16857)

---

### 🟡 Issue #3567 — "Undo does not work" (Windows)
**Status:** FECHADA | **Comentários:** 55 | **👍:** 28

Problema antigo deUndo no VS Code extension para Windows. Fechada recentemente, indica que a correção pode ter sido deployada.

🔗 [Ver Issue #3567](https://github.com/openai/codex/issues/3567)

---

### 🟠 Issue #6403 — "Unable to complete OAuth login for Codex extension when using github.dev"
**Status:** ABERTA | **Comentários:** 12 | **👍:** 6

Redirect to localhost falha em ambientes Codespaces/browser-based. Afeta desenvolvedores que usam VS Code web, impedindo autenticação.

🔗 [Ver Issue #6403](https://github.com/openai/codex/issues/6403)

---

## 4. Progresso de PRs Importantes

### PR #17873 — "Add runtime model provider abstraction" ⭐ Alta Prioridade
**Autor:** pakrym-oai | **Status:** ABERTO

Introduz trait `ModelProvider` em runtime com implementação genérica privada. Armazena `Arc<dyn ModelProvider>` no estado do cliente em vez de metadados crus. Permite routing de metadata através de `provider.info()`.

🔗 [Ver PR #17873](https://github.com/openai/codex/pull/17873)

---

### PR #17872 — "Disable hooks in guardian review sessions"
**Autor:** abhinav-oai | **Status:** ABERTO

Desabilita `Feature::CodexHooks` ao construir config de sessão de review do Guardian. Resolve problema onde sessões de review ingiavam synthetic `<hook_prompt>` user turns.

🔗 [Ver PR #17872](https://github.com/openai/codex/pull/17872)

---

### PR #17859 — "sandbox: remove dead seatbelt helper and update tests"
**Autor:** bolinfest | **Status:** ABERTO

Remove código não utilizado em `spawn_command_under_seatbelt()` e atualiza testes para manter cobertura real do path de execução em produção.

🔗 [Ver PR #17859](https://github.com/openai/codex/pull/17859)

---

### PR #17870 — "fix: cleanup the contract of the general-purpose exec() function"
**Autor:** bolinfest | **Status:** ABERTO

Limpa assinatura do `exec()` removendo argumentos não utilizados e esclarecendo quais campos de `ExecParams` são realmente usados.

🔗 [Ver PR #17870](https://github.com/openai/codex/pull/17870)

---

### PR #17871 — "Add websocket capability token hash support"
**Autor:** viyatb-oai | **Status:** ABERTO

Permite autenticação WebSocket com digest SHA-256 pré-computado do token de capability. Mantém suporte a token-file e documenta flag `--ws-token-sha256`.

🔗 [Ver PR #17871](https://github.com/openai/codex/pull/17871)

---

### PR #17866 — "Refactor auth providers to mutate request headers"
**Autor:** pakrym-oai | **Status:** ABERTO

Move construção de auth headers para contrato `AuthProvider::add_auth_headers`. Atualiza chamadas de HTTP, websocket, file upload e sideband para usar provider.

🔗 [Ver PR #17866](https://github.com/openai/codex/pull/17866)

---

### PR #17861 — "Wrap realtime delegations in XML" ✅ FECHADO
**Autor:** aibrahim-oai | **Status:** FECHADO

Encapsula texto de handoff realtime em XML tag antes de rotear para Codex. Inclui cobertura v1/v2 e XML escaping.

🔗 [Ver PR #17861](https://github.com/openai/codex/pull/17861)

---

### PR #17305 — "[oai] Add sorting/backwardsCursor to thread/list and new thread/turns/list api"
**Autor:** ddr-oai | **Status:** ABERTO

Melhora performance de UI adicionando `sortDirection` e `backwardsCursor` ao `thread/list`. Permite paginação bidirecional e carregamento eficiente de histórico.

🔗 [Ver PR #17305](https://github.com/openai/codex/pull/17305)

---

### PR #17791 — "Stabilize Windows and integration tests"
**Autor:** ddr-oai | **Status:** ABERTO

Correções para falhas espúrias de testes em Windows e ambientes de integração.

🔗 [Ver PR #17791](https://github.com/openai/codex/pull/17791)

---

### Stack PRs #17692-17696 — "Guardian review analytics events"
**Autor:** rhan-oai | **Status:** ABERTO

Stack de 5 PRs implementando analytics para guardian review: eventos de emissão, schema polishing, truncation, metadata de thread/token e plumbing TTFT.

🔗 [Ver PR #17693](https://github.com/openai/codex/pull/17693)

---

## 5. Tendências de Pedidos de Features

### 🎯 Multi-Window Support para macOS (#12773)
**👍:** 16 | **Comentários:** 7

Feature mais votada em aberto:允许多个 janelas independentes do Codex desktop app para macOS. Impacto direto na produtividade de desenvolvedores.

🔗 [Ver Issue #12773](https://github.com/openai/codex/issues/12773)

---

### 🎯 Status Line Customizável (#17827)
**👍:** 0 | **Comentários:** 3

Solicitação inspirada no Claude Code: exibir informações em tempo real (token usage, model name, rate limits, git branch) no terminal.

🔗 [Ver Issue #17827](https://github.com/openai/codex/issues/17827)

---

### 🎯 Pass workspace directory to MCP servers (#9989)
**👍:** 4 | **Comentários:** 4

MCP servers atualmente rodam do diretório de instalação do VS Code em vez do workspace. Quebra ferramentas como Serena que dependem do working directory correto.

🔗 [Ver Issue #9989](https://github.com/openai/codex/issues/9989)

---

### 🎯 Refuse Code Changes and Query Reason/Intent (#13862)
**👍:** 0 | **Comentários:** 5

Permitir recusar mudanças e ver reason/intent da amendment imediatamente.

🔗 [Ver Issue #13862](https://github.com/openai/codex/issues/13862)

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Rate Limits e Consumo de Tokens
Problema crítico com 537+ comentários em #14593. Desenvolvedores relatam consumo acelerado mesmo em operações básicas. **Recomendação:** Monitorar uso com `codex-cli` e considerar estratégias de caching local.

---

### ⚠️ Memory Leaks em MCP (macOS/Linux)
Processos MCP child não estão sendo "reaped" corretamente (#12491, #17832). Casos reportados com 1300+ zumbis e 37GB RAM leak. **Recomendação:** Reiniciar sessões frequentemente ou usar workarounds de cleanup manual.

---

### ⚠️ Problemas de Contexto entre Versões
Parâmetro `prompt_cache_retention` causando falhas em sessões herdadas (#17809, #17814). **Recomendação:** Evitar resume de sessões muito antigas ou confirmar compatibilidade de versão antes.

---

### ⚠️ Rendering de Diffs no macOS
Alto consumo de CPU/GPU ao renderizar diffs (#15330, #16857, #16099). **Recomendação:** Em Macs com recursos limitados, evitar manter a View de diffs aberta durante operações longas.

---

### ⚠️ Sandbox no Windows
ACLs incorretas ao criar pastas (#14585) e problemas com WSL agent mode (#16815). **Recomendação:** Testar funcionalidades de sandbox em Windows antes de اعتمادها em produção.

---

### ⚠️ Auth em Codespaces/GitHub.dev
OAuth redirect para localhost falha em ambientes browser-based (#6403). **Recomendação:** Usar VS Code desktop para desenvolvimento Codex se possível.

---

### 📊 Resumo Estatístico do Dia

| Categoria | Quantidade |
|-----------|------------|
| Releases (alphas) | 3 |
| Issues abertas hoje | ~25 |
| Issues fechadas hoje | ~8 |
| PRs abertos | ~20 |
| PRs fechados | ~1 |
| Feature requests | ~5 |
| Bugs críticos | ~8 |

---

**Próxima atualização:** 2026-04-16

*Relatório gerado automaticamente com base em dados públicos do GitHub*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Relatório Diário da Comunidade Gemini CLI
## 📅 2026-04-15

---

## 1. Destaques do Dia

O ecossistema Gemini CLI vivenciou um dia marcado pela **persistência de problemas de autenticação OAuth** — novas vítimas reportam falhas 403 após a atualização de 10 de abril, elevando a urgência sobre esse problema crítico. No фронтенде, a versão **v0.39.0-preview.0** trouxe refatorações no sistema de políticas e testes de memória, enquanto a equipe acelera a integração de ferramentas de desenvolvimento com PRs relevantes para **skill creation**, **TypeScript performance** e **telemetria granular**.

---

## 2. Lançamentos

### ✅ v0.39.0-preview.0
**Data:** 2026-04-14 | [Release #24849](https://github.com/google-gemini/gemini-cli/pull/24849) | [Release #24876](https://github.com/google-gemini/gemini-cli/pull/24876)

| Mudança | Autor | Área |
|---------|-------|------|
| Refatoração de políticas: simplificação de prioridades e consolidação de regras read-only | @ruomengz | plan |
| Adição de harness de testes de integração para uso de memória | @sripasg | test-utils |

### ✅ v0.38.0
**Data:** 2026-04-14 | [PR #24454](https://github.com/google-gemini/gemini-cli/pull/24454)

| Mudança | Autor | Área |
|---------|-------|------|
| Correção: refresh da lista de slash commands após `/skills reload` | @NTaylorMullen | cli |
| Atualização de links no README | @g-samroberts | documentation |

---

## 3. Issues em Evidência

### 🔴 #24517 — 403 PERMISSION_DENIED para Google One AI Premium
**Status:** OPEN | **Prioridade:** P1 | **Comentários:** 90 | **👍:** 45

**Por que importa:** Este é o issue mais crítico do dia — 90 comentários indicam uma onda crescente de afetados. Usuários com assinatura Google One AI Premium veem o CLI reconhecer corretamente sua assinatura ("Gemini Code Assist in Google One AI Pro"), mas todas as requisições à API são bloqueadas com 403, sem consumo de tokens.

**Reação da comunidade:** Alerta máximo. Contribuidores sugerem problemas no backend de validação de tokens para essa categoria específica de assinatura.

📎 [Issue #24517](https://github.com/google-gemini/gemini-cli/issues/24517)

---

### 🔴 #25189 — oauth-personal falha com 403 (backend retorna project inesperado)
**Status:** OPEN | **Comentários:** 5 | **👍:** 3

**Por que importa:** Afeta especificamente usuários com autenticação `oauth-personal` e conta Google com AI Pro. O backend retorna um `cloudaicompanionProject` inesperado, sugerindo um desvio na lógica de roteamento de projetos.

📎 [Issue #25189](https://github.com/google-gemini/gemini-cli/issues/25189)

---

### 🆕 #25425 — oauth-personal retorna 403 (quebrou em 10/04)
**Status:** OPEN | **Criado:** 2026-04-15 | **Comentários:** 1

**Por que importa:** Reporte fresco do mesmo problema. O usuário confirma que funcionava até 10 de abril e agora quebra em Ubuntu e Windows. Evidência kuatíssima de uma regressão server-side.

📎 [Issue #25425](https://github.com/google-gemini/gemini-cli/issues/25425)

---

### 🟡 #25323 — RipGrep download bloqueado atrasa startup em 2+ minutos
**Status:** OPEN | **Comentários:** 6

**Por que importa:** Startup do CLI fica travado por tempo excessivo quando há problemas de acesso ao GitHub para baixar RipGrep. A proposta é falhar rápido em vez de esperar retries infinitos, ou bundlar o binário.

📎 [Issue #25323](https://github.com/google-gemini/gemini-cli/issues/25323)

---

### 🟡 #24916 — Gemini CLI pede permissões repetidamente para o mesmo arquivo
**Status:** OPEN | **Área:** security | **Comentários:** 3

**Por que importa:** Usuários relatam que a instrução "allow for all future sessions" não persiste, forçando aprovações repetidas e degradando a experiência de uso.

📎 [Issue #24916](https://github.com/google-gemini/gemini-cli/issues/24916)

---

### 🟡 #25166 — Shell command execution trava com "Waiting input"
**Status:** OPEN | **Comentários:** 2 | **👍:** 1

**Por que importa:** Comandos shell simples completam mas o CLI permanece em estado de espera, sugerindo problema no handler de output assíncrono.

📎 [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

---

### 🟡 #25216 — Erro EISDIR em path temporário A:\
**Status:** OPEN | **Comentários:** 1

**Por que importa:** Demonstra edge case com caminhos Windows não-convencionais (drive A:). Afeta usuários em ambientes específicos.

📎 [Issue #25216](https://github.com/google-gemini/gemini-cli/issues/25216)

---

### 🟠 #24915 — Borda pretathick no prompt bar
**Status:** OPEN | **Comentários:** 1

**Por que importa:** UI bug visual que afeta a legibilidade. Problema cosmético mas demonstra necessidade de atenção ao rendering cross-platform.

📎 [Issue #24915](https://github.com/google-gemini/gemini-cli/issues/24915)

---

### 🟠 #24202 — Texto embaralhado via SSH em gLinux cloudtop
**Status:** OPEN | **Comentários:** 1

**Por que importa:** Usuários Windows conectando via SSH a cloudtops enfrentam rendering broken. Identifica necessidade de detecção de ambiente SSH.

📎 [Issue #24202](https://github.com/google-gemini/gemini-cli/issues/24202)

---

### 🟠 #25218 — Tabelas renderizam incrementalmente durante streaming
**Status:** OPEN | **Comentários:** 0

**Por que importa:** Acessibilidade afetada — screen readers interpretam tabelas parciais como corruptas. Bug discovered durante investigação de issue relacionado.

📎 [Issue #25218](https://github.com/google-gemini/gemini-cli/issues/25218)

---

## 4. Progresso de PRs Importantes

### #25421 — Integração do skill-creator no skill extraction agent
**Status:** OPEN | **Autor:** @SandyTao520 | **Área:** core

Integra o skill `skill-creator` builtin no agent de extração de skills em background, substituindo especificações inline por guidance autoritativo. Melhora consistência na geração de arquivos SKILL.md.

📎 [PR #25421](https://github.com/google-gemini/gemini-cli/pull/25421)

---

### #25240 — Migração para @typescript/native-preview (tsgo)
**Status:** OPEN | **Autor:** @mbleigh

Resultado: **5.6x faster type-checking** (7.9s → ~1.4s). Ganho massivo de performance no workflow de desenvolvimento. Demonstra investimento em DX.

📎 [PR #25240](https://github.com/google-gemini/gemini-cli/pull/25240)

---

### #25187 — Retry para OpenSSL 3.x SSL errors durante streaming
**Status:** OPEN | **Autor:** @rcleveng | **Área:** core

Adiciona `ERR_SSL_SSL/TLS_ALERT_BAD_RECORD_MAC` à lista de erros retryable. Corrige stall em streams TLS em ambientes com OpenSSL 3.x.

📎 [PR #25187](https://github.com/google-gemini/gemini-cli/pull/25187)

---

### #25343 — Flag de telemetria para enabling de traces
**Status:** OPEN | **Autor:** @spencer426 | **Área:** enterprise

Introduz `telemetry.traces` para decoupling de tracing detalhado de baseline telemetry. Resolve fricção entre monitoramento leve e deep tracing opt-in.

📎 [PR #25343](https://github.com/google-gemini/gemini-cli/pull/25343)

---

### #24736 — Union-find context compaction para AgentHistoryProvider
**Status:** OPEN | **Autor:** @kimjune01 | **Área:** agent

Adiciona clustering union-find como estratégia alternativa de compressão. Mensagens graduam de hot buffer para cold forest sem split binário em token boundary.

📎 [PR #24736](https://github.com/google-gemini/gemini-cli/pull/24736)

---

### #24664 — ACP host input requests
**Status:** OPEN | **Autor:** @benjaminwestern | **Área:** non-interactive

Adiciona path ACP host input para `ask_user` e `exit_plan_mode` com opt-in explícito. Fecha gap tracking em #24663.

📎 [PR #24664](https://github.com/google-gemini/gemini-cli/pull/24664)

---

### #18499 — Voice input com pluggable backend
**Status:** OPEN | **Prioridade:** P2 | **Autor:** @fayerman-source | **Área:** core | **Help Wanted**

Adiciona input de voz nativo com arquitetura pluggable: backend `gemini` (zero-install) como default e suporte opcional a `whisper` local.

📎 [PR #18499](https://github.com/google-gemini/gemini-cli/pull/18499)

---

### #25090 — Suporte .mdx no get-internal-docs
**Status:** OPEN | **Autor:** @g-samroberts | **Área:** core

Adiciona extensão `.mdx` à lista de arquivos suportados pelo tool `get-internal-docs`, habilitando uso de arquivos MDX como documentação.

📎 [PR #25090](https://github.com/google-gemini/gemini-cli/pull/25090)

---

### #25072 — Favorite models e model cycling
**Status:** OPEN | **Prioridade:** P3 | **Autor:** @Oerum | **Área:** core | **Help Wanted**

Implementa `model.favorites` settings e cycling via keyboard shortcuts. Melhora UX para desenvolvedores que alternam frequentemente entre modelos.

📎 [PR #25072](https://github.com/google-gemini/gemini-cli/pull/25072)

---

### #25060 — Shortcuts para abrir @mentions no editor
**Status:** OPEN | **Prioridade:** P3 | **Autor:** @Oerum | **Área:** core | **Help Wanted**

Adiciona `Ctrl+X` para abrir arquivo selecionado no editor e `Ctrl+Shift+X` para file browser diretamente da @mention completion list.

📎 [PR #25060](https://github.com/google-gemini/gemini-cli/pull/25060)

---

## 5. Tendências de Features Pedidas

### 🔐 Autenticação e Autorização
- **Cluster de issues 403/OAuth** — Padrão consistente: autenticação funciona, mas API calls falham. Usuários afetados em múltiplas versões e sistemas operacionais (macOS, Ubuntu, Windows).
- **Persistência de permissões** — Usuários desejam que "allow for all future sessions" realmente funcione sem reaprovações.

### 📊 Context Management
- **Memória hierárquica** — Demanda por roteamento global (`~/.gemini/`) vs. projeto (`.gemini/`) (#22819).
- **Proactive memory writes** — Prompt tuning para que o agent reconheça quando salvar preferências (#22809).
- **Union-find compaction** — Estratégia mais inteligente de compressão de histórico (#24736).

### 🛠️ Developer Experience
- **Voice input zero-install** — Demanda por transcrição nativa sem dependências externas (#18499).
- **Modelo favorites & cycling** — Produtividade para desenvolvedores power-users (#25072).
- **AST-aware tooling** — EPIC em andamento para leitura de arquivos e busca ciente de sintaxe (#22745).

### 🖥️ UI/UX Improvements
- **Detecção de SSH** — Ajustes de rendering para sessões remotas (#24546, #24202).
- **Acessibilidade em streaming** — Tabelas e layout que funcionam com screen readers (#25218).
- **Scroll behavior** — Correções para chats longos com flashes e jumpiness (#24470).

### 📈 Telemetry & Observability
- **Tracing granular opt-in** — Desacoplamento de telemetry pesado (#25343).
- **Model steering CI** — CI para guidance de modelos precisa funcionar em forks (#24493).

---

## 6. Pontos de Atenção para Desenvolvedores

### 🚨 Crítico: Regressão OAuthPersonal (Possível)
> **Evidência:** Issues #24517, #25189, #25425 todas reportando 403 após 10/04/2026 em autenticação `oauth-personal`.

**Ação recomendada:** Verificar se há mudança no backend de validação ou se o problema está no parsing do token. Prioridade P1 justificada pelo impacto.

---

### 🔧 Dores Recorrentes Identificadas

| Problema | Evidência | Impacto |
|----------|-----------|---------|
| RipGrep blocking startup | #25323 | UX degradada em ambientes restritos |
| Shell command hangs | #25166 | Produtividade afetada |
| Permissions não persistem | #24916 | Workflow interrupções |
| OpenSSL 3.x TLS errors | #25187 (já com PR) | Streaming stalls |
| TypeScript compile time | #25240 (já merged) | **Resolvido — 5.6x faster** |

---

### 📋 Demanda de Help Wanted (Contribuições Bem-vindas)

| PR/Issue | Feature | Prioridade |
|----------|---------|------------|
| #18499 | Voice input pluggable backend | P2 |
| #25072 | Favorite models & cycling | P3 |
| #25060 | @mention editor shortcuts | P3 |

---

### 🔮 Direções Estratégicas Observadas

1. **Performance de compilação** — Migração para tsgo demonstra foco em DX.
2. **Context window management** — Múltiplos PRs sobre memória, compactação e roteamento.
3. **Enterprise readiness** — Telemetry flags e tracing granular para deployments corporativos.
4. **Accessibility** — Screen reader support e SSH rendering gain momentum.
5. **Agent autonomy** — Melhorias em subagent awareness, approval modes e behavioral evals.

---

**Fontes:** [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | Dados coletados em 2026-04-15

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Relatório Diário da Comunidade GitHub Copilot CLI

**Data:** 2026-04-15  
**Fonte:** github.com/github/copilot-cli

---

## 1. Destaques do Dia

O release **v1.0.27** trouxe melhorias na experiência do usuário com hints visuais no status bar e correções para o problema de BOM em clipboards WSL. A comunidade continua focada em resolver problemas de autenticação e políticas de acesso, com diversas issues relacionadas a Copilot Pro trial e bloqueios de modelos ainda pendentes. O padrão recorrente de erros de autorização e problemas com MCP servers indica áreas que necessitam de atenção prioritária.

---

## 2. Lançamentos

### v1.0.27 (2026-04-15)
**Mudanças implementadas:**
- Mensagem clara quando Copilot Pro trial está pausado, evitando erros genéricos de política
- Status bar agora exibe hints de `@files`, `#issues` durante digitação e `/help` quando o picker de comandos slash está aberto
- Correção de vazamento de caractere BOM invisível ao colar texto em ambiente WSL

🔗 [Release v1.0.27](https://github.com/github/copilot-cli/releases/tag/v1.0.27)

### v1.0.26 (2026-04-14)
**Correções:**
- Tecla Escape agora dismissing prompts de forma confiável sem travamentos
- Eliminação de prompts spurious de acesso a diretórios em argumentos dentro de blocos `find -exec`
- Sessões de agente não falham mais com erros irrecuperáveis quando context compaction divide chamada de ferramenta

🔗 [Release v1.0.26](https://github.com/github/copilot-cli/releases/tag/v1.0.26)

### v1.0.26-0 (2026-04-14)
**Novidades:**
- Plugin hooks agora recebem variáveis de ambiente `PLUGIN_ROOT`, `COPILOT_PLUGIN_ROOT` e `CLAUDE_PLUGIN_ROOT` com o diretório de instalação do plugin
- Seletor de escopo de sessão no sync prompt está mais prominente e navegável com teclas seta esquerda/direita

🔗 [Release v1.0.26-0](https://github.com/github/copilot-cli/releases/tag/v1.0.26-0)

---

## 3. Issues em Evidência

### 1. [#1595](https://github.com/github/copilot-cli/issues/1595) — Policy blocking ao recuperar modelos
**Status:** OPEN | **Comentários:** 26 | **👍:** 9  
**Relevância:** Issue crítica de ambiente enterprise onde usuários com assinatura válida não conseguem listar modelos devido a bloqueios de policy, mesmo mostrando 40% de requests premium restantes. Este é um dos problemas mais comentados da semana.

### 2. [#2686](https://github.com/github/copilot-cli/issues/2686) — Erro enganoso para Copilot Pro Trial ativos
**Status:** CLOSED | **Comentários:** 24 | **👍:** 8  
**Relevância:** Resolvido no v1.0.27 — usuários com Copilot Pro Trial ativo recebiam erro de "Server failed to connect" mesmo com status válido no GitHub billing. A comunidade reagiu intensamente (24 comentários) pois afetava diretamente a experiência de trial.

### 3. [#2684](https://github.com/github/copilot-cli/issues/2684) — Erro de autorização recorrente "/login"
**Status:** OPEN | **Comentários:** 12 | **👍:** 0  
**Relevância:** Usuários já logados recebem constantemente erros de autorização, indicando problema persistente de sessão ou refresh token. Afeta experiência básica de uso.

### 4. [#1164](https://github.com/github/copilot-cli/issues/1164) — CLI não funciona no Windows 11
**Status:** OPEN | **Comentários:** 11 | **👍:** 3  
**Relevância:** Versões mais recentes (0.0.368+) apresentam saída imediata sem output em Windows 11. Apenas versão 0.0.367 funciona. Problema crítico para base de usuários Windows.

### 5. [#2698](https://github.com/github/copilot-cli/issues/2698) — Mensagem confusa para Copilot Pro trial pausado
**Status:** CLOSED | **Comentários:** 7 | **👍:** 1  
**Relevância:** Correlacionado com #2686, também tratado no v1.0.27. Usuários não conseguiam mudar modelo devido a policy denial.

### 6. [#947](https://github.com/github/copilot-cli/issues/947) — Request: opção auto_compact configurável
**Status:** OPEN | **Comentários:** 5 | **👍:** 0  
**Relevância:** Usuários requestam controle sobre compaction automático de conversas, que foi introduzido após v0.0.369 sem opção de desativação. Afeta sistemas que dependem de histórico completo.

### 7. [#13](https://github.com/github/copilot-cli/issues/13) — Modo vi/vim para input CLI
**Status:** OPEN | **Comentários:** 4 | **👍:** 48  
**Relevância:** Feature request com maior número de thumbs-ups (48). Usuários familiarizados com editores modais solicitam navegação keyboard-driven no CLI.

### 8. [#2176](https://github.com/github/copilot-cli/issues/2176) — MCP servers indisponíveis após atualização
**Status:** OPEN | **Comentários:** 4 | **👍:** 1  
**Relevância:** Servidores MCP listados e habilitados não são mais reconhecidos pelo LLM após update, indicando quebra de integração.

### 9. [#2413](https://github.com/github/copilot-cli/issues/2413) — Colar com middle-click quebrado desde v1.0.11
**Status:** OPEN | **Comentários:** 4 | **👍:** 0  
**Relevância:** Seleção X11 primária parou de funcionar, afetando usuários Linux em sessões SSH com X11 forwarding.

### 10. [#2692](https://github.com/github/copilot-cli/issues/2692) — Erro no Web Search tool do MCP server
**Status:** OPEN | **Comentários:** 3 | **👍:** 2  
**Relevância:** Ferramenta Web Search apresenta Streamable HTTP error durante execução, indicando problema de endpoint no github-mcp-server.

---

## 4. Progresso de PRs Importantes

| # | PR | Status | Descrição |
|---|-----|--------|----------|
| #2713 | [Create my-agent.agent.md](https://github.com/github/copilot-cli/pull/2713) | OPEN | PR recente de criação de arquivo de agente customizado. Indica atividade de ecossistema de plugins. |

**Observação:** Apenas 1 PR registrado nas últimas 24h, sugerindo período de menor atividade de código ou foco em triagem de issues.

---

## 5. Tendências de Pedidos de Features

Baseado nas issues mais comentadas e com thumbs-ups, as direções mais solicitadas pela comunidade são:

### A) Suporte a Modelos Alternativos
- **#2377** — Adicionar GPT-4o ao Copilot CLI (ausente mesmo disponível em VS Code)
- **#1179** — Problemas com seleção e exibição de modelo incorreto
- **#2661** — Modelo Opus 4.5 inacessível para estudantes

### B) Melhorias de Interface e Input
- **#13** — Modo vi/vim para navegação keyboard-driven (48 👍)
- **#2413** — Suporte a X11 primary selection (middle-click paste)
- **#2677** — Comportamento inesperado ao pressionar Ctrl+S

### C) Flexibilidade de Configuração
- **#947** — Opção `auto_compact` configurável para desabilitar compaction automático
- **#1826** — Suporte a multi-root workspaces via .code-workspace

### D) Integração e Plugins
- **#1139** — Hooks para injetar output de comandos no contexto LLM (estilo Claude Code)
- **#1756** — Agentes customizados externos acessando MCP servers globais
- **#2690** — Sintaxe explícita `@mcp` ou `#mcp-` para trigger de ferramentas MCP

### E) Suporte Enterprise e DevOps
- **#2711** — Suporte Azure DevOps para mais comandos além de GitHub
- **#1595** — Problemas crônicos de policy em ambiente enterprise

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Problemas Críticos Recorrentes

1. **Erros de AutorizaçãoPersistentes**
   - Mesmo após login, usuários reportam "Authorization error, you may need to run /login"
   - Afeta múltiplas issues: #2684, #2688
   - **Recomendação:** Verificar fluxo de refresh token e persistência de sessão

2. **Compatibilidade Windows**
   - Versões >= 0.0.368 não funcionam no Windows 11
   - Issue #1164 com 11 comentários, ainda sem resolução
   - **Recomendação:** Priorizar teste de regressão em ambiente Windows

3. **Integração MCP Server**
   - Servidores listados mas não reconhecidos pelo LLM (#2176, #2282)
   - Web Search tool falhando (#2692)
   - **Recomendação:** Adicionar health check para servidores MCP

### 🟡 Dores Identificadas

4. **Mensagens de Erro Confusas**
   - Usuários de Copilot Pro Trial recebem erros de policy em vez de mensagens claras sobre status
   - Corrigido parcialmente em v1.0.27, mas padrão indica necessidade de padronização de mensagens

5. **Clipboard em WSL**
   - Vazamento de BOM ao copiar texto
   - Corrigido em v1.0.27, mas usuários reportaram extensively

6. **Compaction Automático**
   - Históricos de conversa truncados sem opção de controle
   - Afeta audit trails e sistemas de consciência neural (mencionado em #947)

### 🟢 Oportunidades de Contribuição

7. **Feature Requests Populares**
   - Modo vi/vim (48 👍) — maior demanda da comunidade
   - Injeção de contexto via hooks (estilo Claude Code)
   - Multi-root workspace support

8. **Documentação**
   - #2662 — URL de feedback incorreta指向github-copilot-cli em vez de copilot-cli
   - Área negligenciada que gera confusão

---

## Resumo Executivo

| Categoria | Quantidade | Status |
|-----------|------------|--------|
| Releases (24h) | 3 | Ativo |
| Issues abertas | 42+ | Em triagem |
| Issues fechadas | 8 | Resolvidas |
| PRs (24h) | 1 | Em review |

**Prioridades para 2026-04-16:**
1. Resolver erros de autorização persistentes
2. Investigar incompatibilidade Windows 11
3. Verificar health check da integração MCP
4. Avaliar viabilidade do modo vi/vim (maior demanda da comunidade)

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Relatório Diário da Comunidade Kimi Code CLI
## 📅 Data: 15 de abril de 2026

---

## 1. Destaques do Dia

A comunidade Kimi Code CLI observa intenso debate sobre a exibição do processo de raciocínio ("thinking") após a recente reformulação do indicador para formato compacto. A versão **1.34.0** trouxe correções críticas de estabilidade, incluindo a eliminação de crashes ao interromper tarefas em segundo plano, além de adicionar configuração `show_thinking_stream`. Dezenas de issues e PRs foram abertos ou atualizados nas últimas 24 horas, refletindo alta atividade em torno de UX, controles de plano e problemas de compatibilidade.

---

## 2. Lançamentos

### 🔗 [v1.34.0 — MoonshotAI/kimi-cli Release](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.34.0)

**Alterações principais desde a versão 1.33.0:**

| Área | Mudança |
|------|---------|
| **Core** | Correção de crash ao usar `TaskStop` — interromper um agente travado em segundo plano não causa mais `Unhandled exception in event loop` nem congela o terminal. |
| **Shell** | Correção de destaque inline em diffs para alinhar offsets com texto expandido por tabs. |
| **Shell** | Adição da configuração `show_thinking_stream` com melhorias UX menores. |
| **Docs** | Atualização da documentação em inglês e chinês para novos recursos e mudanças de ferramentas. |

A release foi preparada via PR [#1875](https://github.com/MoonshotAI/kimi-cli/pull/1875) por **RealKai42**.

---

## 3. Issues em Evidência

### 🔴 Alta Prioridade / Muitos Comentários

#### [#778 — Bug: API Error 400 Invalid Request](https://github.com/MoonshotAI/kimi-cli/issues/778)
**Impacto:** Crítico | 💬 14 comentários | 👎 0

Issue antiga (criada em janeiro) relatando erros 400 da API em ambientes Windows 11 com PowerShell. Afeta a estabilidade de uso em plataformas corporativas. A comunidade continua discutindo possíveis causas e workarounds.

---

#### [#1864 — Bug: Please display full thinking traces in Kimi CLI](https://github.com/MoonshotAI/kimi-cli/issues/1864)
**Impacto:** Experiência do usuário | 💬 10 comentários | 👍 9

Usuários Linux reportam que o processo de raciocínio (thinking traces) não está mais visível após a atualização. Com 9 reações positivas, este é um dos issues mais votados recently. A visibilidade do raciocínio é essencial para usuários que querem auditar o comportamento do modelo.

---

#### [#1865 — Bug: Why is the thinking process gone? Isn't this pure negative optimization?](https://github.com/MoonshotAI/kimi-cli/issues/1865)
**Impacto:** Experiência do usuário | 💬 6 comentários | 👍 2

Issue em chinês com título provocativo — reflete frustração da comunidade com a remoção da exibição detalhada do thinking. Demonstra que a mudança, embora tecnicamente uma "otimização", foi mal recebida por parte dos usuários.

---

#### [#1874 — Bug: Regarding the length of thinking about k2.6-code-preview](https://github.com/MoonshotAI/kimi-cli/issues/1874)
**Impacto:** Desempenho/Custo | 💬 1 comentário | 👍 0

Usuário relata que o modelo `k2.6-code-preview` está gerando até **51 rodadas de auto-raziocínio** com consumo de **60.000+ tokens de output** em tarefas simples. Issue crítico para controle de custos e eficiência. O usuário descreve o comportamento como "pensamento sem sentido" e demanda controles sobre o comprimento do thinking.

---

### 🟡 Enhancements e Feature Requests

#### [#1879 — Feature: Configurable colors to distinguish user/assistant messages](https://github.com/MoonshotAI/kimi-cli/issues/1879)
**Impacto:** UX/Produtividade | 💬 0 comentários | 👍 0

Solicitação para adicionar opções de personalização de cores no `config.toml`, permitindo distinguir visualmente mensagens do usuário vs. assistente durante sessões longas. Melhora significativa de legibilidade para power users.

---

#### [#1873 — Enhancement: Hope to be able to support installation without admin rights](https://github.com/MoonshotAI/kimi-cli/issues/1873)
**Impacto:** Acessibilidade | 💬 0 comentários | 👍 0

Usuários corporativos em ambientes Windows Enterprise sem permissões de administrador relatam que versões anteriores permitiam instalação, mas versões recentes não. Issue importante para adoção em ambientes corporativos restritos.

---

#### [#1867 — Feature: --yolo should not auto-approve plans in Plan Mode](https://github.com/MoonshotAI/kimi-cli/issues/1867)
**Impacto:** Segurança/Fluxo de trabalho | 💬 0 comentários | 👍 0

Proposta para separar a aprovação automática de ferramentas (comportamento atual do `--yolo`) da aprovação de planos. A sugestão reconhece que aprovação de plano é mais arriscada e deve sempre exigir confirmação do usuário, mesmo em modo YOLO.

---

### 🔵 Bugs Técnicos

#### [#1878 — Bug: Context compaction picks wrong problem from shared workspace](https://github.com/MoonshotAI/kimi-cli/issues/1878)
**Impacto:** Funcionalidade | 💬 0 comentários | 👍 0

O compaction de contexto está resumindo incorretamente a sessão como trabalhando em um problema diferente do realmente atribuído. Afeta workspaces com múltiplos diretórios de problemas separados.

---

#### [#1877 — Bug: VS Code plugin thinking block cannot expand in compact mode](https://github.com/MoonshotAI/kimi-cli/issues/1877)
**Impacto:** Integração | 💬 0 comentários | 👍 0

No VS Code, com `show_thinking_stream` ativo, blocos de raciocínio não podem ser expandidos para ver o conteúdo completo. Afeta usuários que dependem da extensão oficial.

---

#### [#1866 — Bug: Git repository with Chinese UTF8 filenames causes error on third character input](https://github.com/MoonshotAI/kimi-cli/issues/1866)
**Impacto:** Compatibilidade i18n | 💬 0 comentários | 👍 0

Ao usar `@` para buscar arquivos em repositórios com nomes de arquivos em UTF-8 chinês, um erro ocorre após digitar o terceiro caractere. Issue de compatibilidade com repositórios multilíngues.

---

## 4. Progresso de PRs Importantes

### ✅ PRs Recentemente Mesclados

#### [#1871 — fix(background): keep cancelled task strong reference until runner cleans up](https://github.com/MoonshotAI/kimi-cli/pull/1871)
**Por:** RealKai42 | **Status:** Fechado/Mesclado

**Correção crítica:** Resolveu um bug onde `BackgroundTaskManager.kill()` removia a referência forte da Task asyncio antes da propagação do cancelamento. Isso causava que o GC coletasse a task pendente e disparasse exceção no prompt_toolkit. **Impacto direto na estabilidade** do CLI.

---

#### [#1872 — feat(shell): add show_thinking_stream config and minor UX fixes](https://github.com/MoonshotAI/kimi-cli/pull/1872)
**Por:** RealKai42 | **Status:** Fechado/Mesclado

Adiciona configuração `show_thinking_stream` para controlar a exibição do stream de raciocínio. Inclui ainda dois small UX fixes bundlados. Este PR é diretamente relacionado aos debates intensos sobre a visibilidade do thinking process.

---

#### [#1875 — chore: bump kimi-cli 1.34.0](https://github.com/MoonshotAI/kimi-cli/pull/1875)
**Por:** RealKai42 | **Status:** Fechado/Mesclado

PR de release que mesclou as mudanças 1.34.0 para produção, incluindo as correções dos PRs #1871 e #1872.

---

#### [#1818 — feat: supports list-sessions to list the existing sessions](https://github.com/MoonshotAI/kimi-cli/pull/1818)
**Por:** guuzaa | **Status:** Fechado/Mesclado

Adiciona comando `list-sessions` para listar sessões existentes, melhorando gerenciamento de sessões e produtividade do usuário.

---

### 🔄 PRs Abertos em Andamento

#### [#1836 — Fix interactive YOLO plan review semantics](https://github.com/MoonshotAI/kimi-cli/pull/1836)
**Por:** WeZZard | **Status:** Aberto

Separa a disponibilidade de feedback interativo do usuário da auto-aprovação do YOLO. Mantém aprovações de ferramentas auto-aprovadas em YOLO enquanto preserva AskUserQuestion e revisão de plano em modo shell interativo. Alinha-se diretamente com o issue #1867.

---

#### [#1876 — feat(soul): register /btw slash command in soul-level registry](https://github.com/MoonshotAI/kimi-cli/pull/1876)
**Por:** LeonEthan | **Status:** Aberto

Registra `/btw` como um slash command de nível "soul", tornando-o disponível em todos os modos de execução (não apenas no shell interativo). Não-interativos (print, web, ACP) agora emitem saída padrão de slash command.

---

#### [#1868 — feat(ui): show live and average tokens per second in shell UI](https://github.com/MoonshotAI/kimi-cli/pull/1868)
**Por:** cdhcrs | **Status:** Aberto

Implementa métricas de performance em tempo real:
- TPS ao vivo mostrado nos spinners de composição e thinking após 0.5s
- TPS médio impresso como linha de resumo ao final de cada turno
- Resumo só aparece em boundaries de turno

**Melhoria significativa de observabilidade** durante streaming de respostas.

---

#### [#1405 — feat(web): add Playwright E2E test infrastructure](https://github.com/MoonshotAI/kimi-cli/pull/1405)
**Por:** YoungY620 | **Status:** Aberto

Estabelece infraestrutura de testes end-to-end para o frontend web Kimi, usando Playwright contra backend real com provider `_scripted_echo` para resultados determinísticos. **Importante para qualidade e prevenção de regressões**.

---

#### [#1870 — docs(config): clarify quoted TOML keys for dotted model names](https://github.com/MoonshotAI/kimi-cli/pull/1870)
**Por:** yongtenglei | **Status:** Aberto

Melhora documentação para esclarecer que chaves `providers` e `models` contendo `.` devem usar chaves TOML quoted. Melhora DX para configuração avançada.

---

#### [#1236 — feat(http): enable trust_env in creating aiohttp.ClientSession](https://github.com/MoonshotAI/kimi-cli/pull/1236)
**Por:** CyCle1024 | **Status:** Aberto

Permite que o cliente HTTP respeite variáveis de ambiente de proxy (como `HTTP_PROXY`, `HTTPS_PROXY`), essencial para uso em ambientes corporativos com proxies.

---

## 5. Tendências de Pedidos de Features

### 🧠 **Controle sobre o Thinking/Reasoning Process**

A tendência mais dominante do dia. Issues #1864, #1865, #1874, #1877 demonstram que a comunidade deseja:

- **Visibilidade total** do processo de raciocínio (full traces)
- **Controles configuráveis** sobre comprimento e profundidade do thinking
- **Opções de expansão/colapso** em interfaces (terminal e VS Code)
- **Balanceamento** entre performance/custo e detalhamento do raciocínio

### 🎨 **Personalização Visual do Terminal**

Issues #1879 e #1868 indicam demanda por:

- Cores configuráveis para distinguir mensagens de usuário/assistente
- Métricas de performance em tempo real (TPS live)
- Melhorias na UI para sessões longas

### 🔐 **Segurança e Fluxo de Aprovação**

Issues #1867 e #1836 refletem necessidade de:

- Separação clara entre aprovação de ferramentas e planos
- Configurações granulares para `--yolo`/`--auto-approve`
- Preservação de confirmções interativas em modos não-interativos

### 🏢 **Suporte Corporativo**

Issues #1873 e #1236 mostram demanda por:

- Instalação sem privilégios de administrador
- Suporte a proxies corporativos via `trust_env`
- Compatibilidade com ambientes Windows Enterprise

### 🌏 **Internacionalização**

Issue #1866 evidencia necessidade de:

- Suporte robusto a nomes de arquivo UTF-8 multilíngues
- Tratamento correto de caracteres não-ASCII em busca de arquivos

---

## 6. Pontos de Atenção para Desenvolvedores

### 🚨 Dores Recorrentes Identificadas

| Categoria | Problema | Impacto | Issue de Referência |
|-----------|----------|---------|---------------------|
| **Stabilidade API** | Erros 400 persistentes em Windows/PowerShell | Alto | [#778](https://github.com/MoonshotAI/kimi-cli/issues/778) |
| **UX do Thinking** | Reformulação do thinking process mal recebida | Alto | [#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864), [#1865](https://github.com/MoonshotAI/kimi-cli/issues/1865) |
| **Performance do K2.6** | Excessive token consumption em preview models | Crítico | [#1874](https://github.com/MoonshotAI/kimi-cli/issues/1874) |
| **Background Tasks** | Crash ao interromper tarefas (já corrigido em 1.34.0) | Alto | [#1871](https://github.com/MoonshotAI/kimi-cli/pull/1871) |

### 📋 Demandas Frequentes da Comunidade

1. **Controles de Thinking**
   - Toggle para mostrar/esconder traces de raciocínio
   - Configuração de limite máximo de tokens de thinking
   - Diferentes níveis de verbosidade por contexto

2. **Melhorias de Terminal UI**
   - Cores customizáveis via `config.toml`
   - Live TPS durante streaming
   - Separação visual clara usuário/assistente

3. **Fluxos de Trabalho com Plan Mode**
   - Separação de `--yolo` para ferramentas vs. planos
   - Aprovação sempre requerida para planos em qualquer modo
   - Revisões interativas preservadas em todos os contextos

4. **Deploy em Ambientes Restritos**
   - Instalação sem admin rights
   - Suporte a proxy via variáveis de ambiente
   - Compatibilidade com Windows Enterprise

5. **Robustez i18n**
   - Tratamento de filenames UTF-8 em busca `@`
   - Suporte a caracteres chineses/multi-byte em todos os fluxos

### 💡 Oportunidades de Contribuição

- **PR #1868** (Live TPS) precisa de reviewers — UX popular
- **Issue #1879** (cores configuráveis) está aberto — boa issue para newcomer
- **Issue #1873** (non-admin install) aguarda implementação — impacto corporativo
- **PR #1405** (Playwright E2E) precisa de reviewers — infraestrutura crítica para

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# Relatório Diário da Comunidade OpenCode

## Data: 15 de abril de 2026

---

## 1. Destaques do Dia

O lançamento da versão **v1.4.4** trouxe correções importantes no comportamento de contextos e respostas da API, porém gerou regressões significativas que afetam sessões na versão desktop e web. A comunidade está mobilizada em torno de problemas de memória e performance, com a equipe abrindo uma megathread centralizada. Destaque para o início de implementações de funcionalidades aguardadas, como entrada de voz por STT e suporte a modelos kimi-k2.6.

---

## 2. Lançamentos

### v1.4.4 (últimas 24h)

**Mudanças no Core:**

- ✅ **Restauro de contexto de instância e logger** durante execuções de prompt — ferramentas dependentes de contexto e logging agora funcionam corretamente.
- ✅ **Validade das requisições de compactação do GitHub Copilot** preservada.
- ✅ **Formato de resposta achatado restaurado** para respostas da API de perguntas.
- ✅ **Conexões OAuth de MCP que finalizam imediatamente** agora são persistidas para autenticação.

> ⚠️ **Atenção:** Esta versão apresentou regressões na versão Desktop/Tauri e Electron (ver issue #22510). Recomenda-se monitorar discussions caso utilize estas interfaces.

---

## 3. Issues em Evidência

### 🔴 Críticos

#### [#22510](https://github.com/anomalyco/opencode/issues/22510) — Desktop: Sessions won't load after v1.4.4 update
- **Autor:** diegoquiroz | **Comentários:** 25 | **👍:** 12
- **Problema:** Após atualizar para v1.4.4, as sessões não carregam em nenhum projeto na versão desktop (Tauri e Electron). A CLI não foi afetada.
- **Impacto:** Afeta diretamente usuários da interface gráfica, impedindo uso normal.
- **Reação:** Comunidade reports similares. Equipe investigará regressions do release.

---

#### [#22512](https://github.com/anomalyco/opencode/issues/22512) — Can't send any messages (ENAMETOOLONG)
- **Autor:** jasonfirkus | **Comentários:** 7 | **👍:** 0
- **Problema:** Tentativa de enviar qualquer mensagem causa glitch na tela terminando em erro `ENAMETOOLONG`.
- **Impacto:** Bloqueio total do uso em Windows.
- **Reação:** Issue recém-criada (15/04), aguardando triagem.

---

#### [#4283](https://github.com/anomalyco/opencode/issues/4283) — Copy To Clipboard is not working
- **Autor:** maheshmuttintidev | **Comentários:** 84 | **👍:** 65
- **Problema:** Seleção de texto da resposta não é copiada para a área de transferência.
- **Impacto:** Baixo impacto técnico, mas alta frustração de usuário (issue aberta há 5 meses).
- **Reação:** Uma das issues mais votadas. Provavelmente bug de longa data no opentui.

---

### 🟡 Alta Prioridade

#### [#20695](https://github.com/anomalyco/opencode/issues/20695) — Memory Megathread
- **Autor:** thdxr | **Comentários:** 47 | **👍:** 30
- **Problema:** Relatórios dispersos de consumo excessivo de memória. Equipe abriu megathread centralizada para coletar heap snapshots.
- **Importância:** Demonstra transparência da equipe em atacar problema crônico. Pedem **ajuda da comunidade** para coletar dados, não sugestões de LLM.
- **Reação:** Comunitária ativa, com múltiplos reports de sessões longas causando MemoryError.

---

#### [#11112](https://github.com/anomalyco/opencode/issues/11112) — always stuck at "Preparing write..."
- **Autor:** yinzhou-jc | **Comentários:** 55 | **👍:** 23
- **Problema:** Ferramenta de escrita trava continuamente com "Preparing write..." seguido de "Tool execution aborted".
- **Impacto:** Bloqueia fluxo de trabalho principal (escrita de arquivos).
- **Reação:** 55 comentários indicam problema recorrente em diferentes cenários.

---

#### [#20698](https://github.com/anomalyco/opencode/issues/20698) — GPT 5.4 Azure fails with reasoning error
- **Autor:** DanielusG | **Comentários:** 21 | **👍:** 3
- **Problema:** Erro "Item ... of type 'reasoning' was provided without its required following item" após 1-2 chamadas de ferramenta.
- **Impacto:** Incompatibilidade específica com GPT 5.4 da Azure.
- **Reação:** Reportado tanto em web UI quanto TUI. Possível breaking change na API da Azure.

---

#### [#22520](https://github.com/anomalyco/opencode/issues/22520) — Loading process extremely slow in v1.4.4
- **Status:** CLOSED | **Comentários:** 6 | **👍:** 0
- **Problema:** Sessões históricas e lista de modelos demoram excessivamente para carregar.
- **Resolução:** Issue fechada, indicando possível patch ou work-around.

---

### 🟢 Features Solicitadas (Alta Demanda)

#### [#7101](https://github.com/anomalyco/opencode/issues/7101) — Allow custom system prompts
- **Autor:** dan-and | **Comentários:** 28 | **👍:** 84
- **Proposta:** Sistema de prompts customizáveis em níveis global, projeto ou diretório.
- **Importância:** 84 👍 demonstram demanda massiva. users querem personalização granular do comportamento do agente.
- **Reação:** Discussão ativa sobre melhores práticas de prompts curtos.

---

#### [#10288](https://github.com/anomalyco/opencode/issues/10288) — Mobile version request
- **Autor:** az0307 | **Comentários:** 6 | **👍:** 48
- **Proposta:** Versão mobile para Android/iOS/Web UI.
- **Importância:** Forte desejo da comunidade por acesso mobile.
- **Nota:** PR #18767 já implementa otimizações touch para mobile.

---

#### [#6815](https://github.com/anomalyco/opencode/issues/6815) — Reload configuration without restart
- **Autor:** leeweisern | **Comentários:** 4 | **👍:** 38
- **Proposta:** Comando para recarregar configuração sem reiniciar o OpenCode.
- **Importância:** Melhoraria workflow de desenvolvimento significativamente.

---

#### [#9281](https://github.com/anomalyco/opencode/issues/9281) — Unified usage tracking via /usage
- **Autor:** CasualDeveloper | **Comentários:** 5 | **👍:** 21
- **Proposta:** Comando `/usage` para exibir limites de uso de provedores autenticados (Codex, Copilot, Claude).
- **Importância:** Visibilidade de custos e quotas é essencial para uso profissional.

---

## 4. Progresso de PRs Importantes

### Novas Funcionalidades

#### [PR #22521](https://github.com/anomalyco/opencode/pull/22521) — Speech-to-text voice input
- **Autor:** ncylich | **Labels:** needs:compliance
- **Descrição:** Adiciona suporte a STT usando qualquer API `/v1/audio/transcriptions` compatível (Whisper, Groq, Deepgram, whisper.cpp local).
  - **Web UI:** Botão de microfone próximo ao botão de anexar; grava via MediaRecorder, converte para WAV, transcreve via proxy.
  - **TUI:** Comando `/record` para iniciar/parar gravação.
- **Impacto:** Funcionalidade aguardada que elimina necessidade de digitar prompts longos.

---

#### [PR #22509](https://github.com/anomalyco/opencode/pull/22509) — kimi-k2.6-code-preview model support
- **Autor:** bzqzheng
- **Descrição:** Adiciona suporte client-side para o modelo `kimi-k2.6-code-preview`, configurável via `opencode.json`.
- **Impacto:** Expande opções de modelos disponíveis.

---

#### [PR #22519](https://github.com/anomalyco/opencode/pull/22519) — Hebrew locale and README
- **Autor:** MusiCode1
- **Descrição:** Adiciona locale hebraico (`he`) com 946 chaves de tradução.
- **Impacto:** Avanço na internacionalização para mercados de língua hebraica.

---

### Refatorações e Melhorias de Arquitetura

#### [PR #22522](https://github.com/anomalyco/opencode/pull/22522) — Remove makeRuntime facade for Permission.Service
- **Autor:** kitlangton | **Labels:** contributor, Vouched
- **Descrição:** Remove `makeRuntime(Permission.Service, Permission.defaultLayer)` de `llm.ts` e substitui por acesso direto via Effect context.
- **Impacto:** Limpeza de código e padronização com arquitetura Effect.

---

#### [PR #22517](https://github.com/anomalyco/opencode/pull/22517) — Remove makeRuntime from TuiConfig
- **Autor:** kitlangton | **Labels:** contributor, beta, Vouched
- **Descrição:** Adiciona `TuiConfig.defaultLayer` ao `AppLayer`, substituindo `makeRuntime` local por `import()` dinâmico de `AppRuntime`.
- **Impacto:** Elimina dependência circular e simplifica inicialização.

---

#### [PR #22518](https://github.com/anomalyco/opencode/pull/22518) — Sync routes, refactor proxy, session restore
- **Autor:** jlonglongster | **Labels:** contributor
- **Descrição:** Adiciona APIs de sincronização em nível de instância para histórico de eventos e replay. Refatora roteamento/proxy de workspace para workspaces remotos.
- **Impacto:** Funcionalidade de sincronização production-ready.

---

#### [PR #22514](https://github.com/anomalyco/opencode/pull/22514) — Parallelise bootstrap
- **Autor:** Brendonovich | **Labels:** beta
- **Descrição:** Com serviços migrados para Effect via `InstanceState`, inicialização não precisa mais seguir ordem específica.
- **Impacto:** Startup mais rápido e fluido.

---

### Correções de Bugs

#### [PR #22508](https://github.com/anomalyco/opencode/pull/22508) — Preserve prompt input across unmount/remount
- **Autor:** thdxr | **Labels:** Vouched
- **Descrição:** Corrige perda de texto digitado quando modais de permissão aparecem. Usa stash em nível de módulo para salvar e restaurar texto e posição do cursor.
- **Fixes:** #21120

---

#### [PR #21729](https://github.com/anomalyco/opencode/pull/21729) — Preserve active agent and model on prompt_async
- **Autor:** sjawhar
- **Descrição:** `prompt_async` e `command()` sem campos `agent`/`model` explícitos agora preservam o agente e modelo ativos.
- **Fixes:** #21728

---

#### [PR #13854](https://github.com/anomalyco/opencode/pull/13854) — Stop streaming markdown after message completes
- **Autor:** mocksoul | **Labels:** needs:issue
- **Descrição:** Corrige `TextPart` passando `streaming={true}` incondicionalmente, causando skipping de última linha de tabela.
- **Fixes:** #13855

---

## 5. Tendências de Pedidos de Features

### 🚀 Funcionalidades Mais Solicitadas (por 👍)

| # | Issue | 👍 | Tema |
|---|-------|-----|------|
| 1 | [#7101](https://github.com/anomalyco/opencode/issues/7101) — Custom system prompts | 84 | Configurabilidade |
| 2 | [#2755](https://github.com/anomalyco/opencode/issues/2755) — Copy Mode | 65 | UX/Interação |
| 3 | [#10288](https://github.com/anomalyco/opencode/issues/10288) — Mobile version | 48 | Plataforma |
| 4 | [#6815](https://github.com/anomalyco/opencode/issues/6815) — Reload config | 38 | DX/Workflow |
| 5 | [#9281](https://github.com/anomalyco/opencode/issues/9281) — Usage tracking | 21 | Observabilidade |
| 6 | [#7138](https://github.com/anomalyco/opencode/issues/7138) — Default variant per agent | 22 | Configurabilidade |
| 7 | [#6257](https://github.com/anomalyco/opencode/issues/6257) — Easier scroll | 7 | UX/TUI |

### 📊 Padrões Identificados

1. **Configurabilidade e Personalização:** A comunidade demanda controle granular sobre prompts, variantes de modelos, e configurações por projeto/global.

2. **Multiplataforma:** Forte interesse em versões mobile e suporte a diferentes dispositivos.

3. **UX/TUI:** Scroll mais fácil, copy mode estilo vim/tmux, e menos verbosidade nos blocos de "thinking".

4. **Observabilidade:** Ferramentas para tracking de uso e logs mais claros.

5. **Performance:** Virtualized scrolling para sessões longas e otimização de memória.

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Problemas Recorrentes a Monitorar

1. **Regressões no Desktop/Tauri (v1.4.4)**
   - Issue: [#22510](https://github.com/anomalyco/opencode/issues/22510)
   - Sessões não carregam na versão desktop. CLI funciona.
   - **Workaround:** Usar CLI até patch.

2. **Memory Leaks em Sessões Longas**
   - Megathread: [#20695](https://github.com/anomalyco/opencode/issues/20695)
   - Equipe solicita heap snapshots para diagnóstico.
   - Scripts de coleta disponíveis no issue.

3. **Problemas com GPT 5.4 Azure**
   - Issue: [#20698](https://github.com/anomalyco/opencode/issues/20698)
   - Falha após tool calls com "reasoning" error.
   - Alternativa: Usar API direta da OpenAI temporariamente.

4. **Escrita de Arquivos ("Preparing write...")**
   - Issue: [#11112](https://github.com/anomalyco/opencode/issues/11112)
   - travamento recorrente na ferramenta de escrita.
   - Afeta fluxo de trabalho principal.

### 🔧 Demanda Técnicas Frequentes

| Área | Issues | Tendência |
|------|--------|-----------|
| MCP/OAuth | Cone

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Sem atividade nas últimas 24 horas.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Relatório Qwen Code — 15 de Abril de 2026

## 1. Destaques do Dia

O ecossistema Qwen Code manteve alta atividade com foco em **estabilidade e experiência do desenvolvedor**. Entre os destaques, destaque para a correção de bugs críticos no VSCode (tabulação de sessões e auto-scroll) e avanços significativos no sistema de hooks com a adição do evento `PostTurn` para processamento pós-interação. A comunidade também demonstra interesse crescente em funcionalidades de gerenciamento de sessões e integração com infraestrutura de produção.

---

## 2. Lançamentos

**Nenhum lançamento de versão registrado nas últimas 24 horas.**

O repositório concentrou esforços em PRs pendentes de merge, sem releases formais.

---

## 3. Issues em Evidência

### 1. [MCP Client Limitado a 2 Conexões — Crítico](https://github.com/QwenLM/qwen-code/issues/3277)
**Status:** ABERTO | **Tipo:** Bug

Por que importa: Issue de severidade crítica que impacta infraestrutura de produção multi-nó. O cliente MCP do Qwen Code está artificialmente limitado a 2 conexões simultâneas, quebrando implantações em ambientes de produção distribuídos. Afeta diretamente usuários empresariais com arquiteturas baseadas em microservices.

Reação: 1 comentário, aguardando triagem.

---

### 2. [Mensagens de Chat Exibidas na Ordem Errada](https://github.com/QwenLM/qwen-code/issues/3273)
**Status:** ABERTO | **Tipo:** Bug

Por que importa: Bug visual que inverte a ordem natural de conversação — perguntas aparecem ACIMA de respostas anteriores. Impacta diretamente a legibilidade e usabilidade daily-use do assistente.

Reação: 1 comentário, reportada na versão 0.14.4.

---

### 3. [Rastreabilidade de Conversas por Nome/Índice](https://github.com/QwenLM/qwen-code/issues/3234)
**Status:** ABERTO | **Tipo:** Feature Request

Por que importa: Atualmente conversas são identificadas apenas por UUIDs, dificultando retrieval de sessões históricas. Solicita intuitiva identificação de conversas por nome, essencial para workflows de debugging e revisão.

Reação: 2 comentários, 0 upvotes — demonstra demanda por organizabilidade.

---

### 4. [Permissões do Windows 11 CMD Não Persistem](https://github.com/QwenLM/qwen-code/issues/2669)
**Status:** FECHADO | **Tipo:** Bug

Por que importa: Opções "Always allow in this project" e "Always allow for this user" não funcionam no CMD do Windows 11, re-promptando repetidamente. Afeta base significativa de usuários Windows.

Reação: 3 comentários, 0 upvotes — bug recorrente com impacto em UX.

---

### 5. [Crashes Intermitentes no Wrap](https://github.com/QwenLM/qwen-code/issues/3172)
**Status:** ABERTO | **Tipo:** Bug

Por que importa: Queda aleatória e rápida do Qwen Code quando executado dentro do ambiente Wrap. Sem padrão previsível, dificulta diagnóstico e impacta produtividade.

Reação: 2 comentários, aguardando informações adicionais.

---

### 6. [Tab de Sessão no VSCode Ocupa Toda a Barra](https://github.com/QwenLM/qwen-code/issues/2873)
**Status:** FECHADO | **Tipo:** Bug

Por que importa: Títulos de sessão longos estendem o tab do VSCode infinitamente, bloqueando acesso a outras abas. Afeta organização visual em projetos ativos.

Reação: 1 comentário — **corrigido via PR #3249** que implementa truncamento em 50 code points.

---

### 7. [Custom baseUrl do Gemini Ignorado](https://github.com/QwenLM/qwen-code/issues/3166)
**Status:** FECHADO | **Tipo:** Bug

Por que importa: Configuração de `baseUrl` customizado para provider Gemini em `settings.json` é ignorada, forçando uso do endpoint oficial Google. Problema para usuários com proxies ou APIs customizadas.

Reação: 1 comentário — **corrigido via PR #3212**.

---

### 8. [Linha Extra em Branco na Status Bar](https://github.com/QwenLM/qwen-code/issues/3095)
**Status:** ABERTO | **Tipo:** Bug

Por que importa: Qwen Code exibe 3 linhas em branco abaixo da status bar versus 2 do Claude Code. Desperdício de espaço vertical e inconsistência visual.

Reação: 1 comentário, 0 upvotes.

---

### 9. [@ Completação de Arquivos em Comandos Personalizados](https://github.com/QwenLM/qwen-code/issues/2055)
**Status:** FECHADO | **Tipo:** Feature Request

Por que importa: Permite uso de `@` para auto-completar caminhos de arquivo após comandos customizados (ex: `/review`). Enhances usability para workflows específicos.

Reação: 2 comentários — funcionalidade implementada.

---

### 10. [Dúvidas sobre Rate Limit de Auth](https://github.com/QwenLM/qwen-code/issues/3074)
**Status:** ABERTO | **Tipo:** Question

Por que importa: Questionamento sobre reset logic das 1000 chamadas/dia quando sessão inicia às 23h59 e continua no dia seguinte. Importante para planejamento de uso intensivo.

Reação: 1 comentário, aguardando documentação.

---

## 4. Progresso de PRs Importantes

### 1. [PostTurn Hook Event — Processamento Pós-Turno](https://github.com/QwenLM/qwen-code/pull/3266)
**Status:** ABERTO | **Autor:** zhangxy-zju

Adiciona novo hook `PostTurn` que dispara em cada limite de turno do modelo (tool_call ou fim de resposta). Scripts de hook recebem pensamentos acumulados, mensagens e tool calls, podendo injetar mensagens no stream ACP com metadados customizados. Fecha #3265.

---

### 2. [Comando /history — Gerenciamento de Sessões](https://github.com/QwenLM/qwen-code/pull/3261)
**Status:** ABERTO | **Autor:** reidliu41

Implementa novo comando built-in `/history` para gerenciamento de chat history salvo em escopo de projeto. Expõe capacidade existente de deleção de sessão através de interface de linha de comando.

---

### 3. [Corrigir baseUrl Custom do Gemini](https://github.com/QwenLM/qwen-code/pull/3212)
**Status:** FECHADO | **Autor:** doudouOUC

Passa `config.baseUrl` para `httpOptions` do Gemini SDK em `createGeminiContentGenerator`. Adiciona testes de regressão para caminhos com e sem `baseUrl` configurado.

---

### 4. [/review — Subagentes Paralelos Garantidos](https://github.com/QwenLM/qwen-code/pull/3239)
**Status:** FECHADO | **Autor:** wenshao

Resolve problema onde `/review` executava 5 agentes de review serialmente. Agora parallelism é garantia em runtime, independente do modelo emitir múltiplos blocos `tool_use` em um turno.

---

### 5. [Forçar Dispatch Paralelo para Modelos Mais Fracos](https://github.com/QwenLM/qwen-code/pull/3276)
**Status:** ABERTO | **Autor:** wenshao

Reforça instruções do skill `/review` para garantir que qwen3.6-plus e outros modelos que serializavam agentes agora lancem todos em um único assistant turn.

---

### 6. [Corrigir Auto-Scroll Bounce no VSCode](https://github.com/QwenLM/qwen-code/pull/3260)
**Status:** ABERTO | **Autor:** qqqys

Corrige bug de "bounce" no auto-scroll da webview VSCode IDE companion onde animações smooth-scroll faziam a view parar de auto-scrollar. Melhora responsividade com `useTransition`.

---

### 7. [Limitar Comprimento do Título da Tab](https://github.com/QwenLM/qwen-code/pull/3249)
**Status:** FECHADO | **Autor:** dreamWB

Implementa estratégia uniforme de truncagem usando `truncatePanelTitle()` (max 50 Unicode code points + `…`). Opera em code points para evitar split de emoji. Fecha #2873.

---

### 8. [Detectar Rate-Limit Errors em SSE Frames](https://github.com/QwenLM/qwen-code/pull/3246)
**Status:** FECHADO | **Autor:** wenshao

Corrige falha imediata de subagentes DashScope com `Throttling.AllocationQuota` adicionando detecção de erros de rate-limit em frames SSE streamed.

---

### 9. [Adicionar /batch Skill para Operações Paralelas](https://github.com/QwenLM/qwen-code/pull/3079)
**Status:** ABERTO | **Autor:** doudouOUC

Adiciona skill built-in `/batch` para orquestrar mudanças de arquivo em larga escala. Descobre arquivos-alvo via glob patterns, divide em chunks e processa com worker agents em paralelo. Suporta `--dry-run`.

---

### 10. [Corrigir Comando de Instalação Windows](https://github.com/QwenLM/qwen-code/pull/3252)
**Status:** ABERTO | **Autor:** Skyline-9

Corrige comando de instalação para funcionar em ambos CMD e PowerShell usando `cmd /c` e `curl.exe` explícito. Comando atual falha no PowerShell (terminal padrão Windows).

---

## 5. Tendências de Pedidos de Features

### Gerenciamento e Organização de Sessões
- **Naming de conversas** (#3234): Identificação por nome em vez de UUID
- **Comando /history** (#3261): Listagem e deleção de sessões salvas
- **Account display** (#2772): Visualização de detalhes da conta logada

### Infraestrutura e Integração
- **MCP em produção** (#3277): Suporte a múltiplas conexões para ambientes distribuídos
- **Custom baseUrl** (#3166, #3212): Proxies e APIs customizadas
- **/batch parallel** (#3079): Operações em larga escala

### UX e Acessibilidade
- **@ file completion** (#2055): Auto-completar em comandos customizados
- **Compact mode** (#3100): Atalhos e sync de settings
- **Thought-only responses** (#3251): Suporte a modelos de reasoning

### Sistema de Hooks
- **PostTurn hook** (#3266): Processamento pós-interação
- **Prompt hooks com LLM** (#2990): Condicionais evaluadas por IA
- **ACP hooks completos** (#3248): Suporte lifecycle e tool execution

### Memory e Agentes
- **Managed auto-memory** (#3087): Sistema de extração e dream
- **Parallel subagents** (#3239, #3276): Execução paralela garantida
- **Command platform unificado** (#3244): Registry, resolver e executor centralizados

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Bugs Críticos em Aberto
1. **MCP limitado a 2 conexões** (#3277) — Impacta produção multi-nó
2. **Ordem de mensagens invertida** (#3273) — Usabilidade comprometida
3. **Crashes intermitentes no Wrap** (#3172) — Sem padrão identificável

### 🟡 Dores Recorrentes
1. **Persistência de permissões Windows** (#2669) — Re-prompt constante
2. **Rate limit detection** (#3246) — Falha silenciosa de subagentes
3. **Thought-only responses** (#3251) — Modelos reasoning falham em auditorias

### 🟢 Melhorias em Progresso
1. **Hooks expandidos** (PostTurn, prompt hooks, ACP hooks) — Flexibilização
2. **Gerenciamento de sessões** (/history, naming) — Organizabilidade
3. **Parallel execution** (/batch, subagents) — Performance

### 📋 Demanda de Documentação
1. **Rate limit reset logic** (#3074) — Necessita clarification
2. **Offline vs online** (#120) — Diferenças de comportamento
3. **Thinking model config** (#202) — currently hardcoded para gemini-2.5

### ⚠️ Incompatibilidades Conhecidas
- **Windows CMD vs PowerShell** — Comandos de instalação divergem
- **Tab key handling** (#3270) — Insere literal `\t` no buffer
- **Blank lines status bar** (#3095) — Inconsistente com Claude Code

---

*Relatório gerado automaticamente com base em dados do GitHub QwenLM/qwen-code em 2026-04-15.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*