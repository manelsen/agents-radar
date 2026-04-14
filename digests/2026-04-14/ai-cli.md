# Relatório diário da comunidade de ferramentas AI CLI 2026-04-14

> Gerado em: 2026-04-14 13:13 UTC | Ferramentas cobertas: 8

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

# Relatório Comparativo: Ecossistema de Ferramentas AI CLI

**Data de Referência:** 2026-04-14  
**Abrangência:** 8 ferramentas analisadas

---

## 1. Panorama do Ecossistema

O ecossistema de ferramentas AI CLI apresenta **estágios de maturidade distintos** com desafios convergentes. Ferramentas estabelecidas (Claude Code, Codex) enfrentam problemas de escala como consumo de tokens e gerenciamento de sessão, enquanto iniciativas mais recentes (Pi, Qwen) demonstram velocidade de iteração superior impulsionada por comunidades menores mas altamente engajadas. O **ecossistema de plugins emerge como diferenciador estratégico**, com Claude Code e OpenCode investindo pesadamente em extensibilidade. Preocupações transversais incluem compatibilidade Windows (afetando 5 de 8 ferramentas), persistência de autenticação e visibilidade de custos — indicando maturização do mercado além da fase inicial de "prova de conceito".

---

## 2. Comparação de Atividade

| Ferramenta | Issues em Evidência | PRs Ativos | Releases (24h) | Saúde da Comunidade |
|------------|:------------------:|:----------:|:--------------:|---------------------|
| **Claude Code** | 10 (1 crítica) | 10 | 2 (v2.1.105, v2.1.107) | 🟢 Alta |
| **OpenAI Codex** | 10 (1 crítica) | 10 | 2 (alpha) | 🟢 Alta |
| **Gemini CLI** | 10 (2 críticas) | 10 | 2 (nightly + patch) | 🟡 Média-Alta |
| **Copilot CLI** | 10 (1 crítica) | 0 | 2 (v1.0.25, v1.0.26-0) | 🟡 Média |
| **Kimi Code CLI** | 10 (1 crítica) | 10 | 1 (v1.34.0) | 🟡 Média |
| **OpenCode** | 10 (1 crítica) | 10 | 0 | 🟢 Alta |
| **Pi** | 10 (3 críticas) | **14** | 2 (v0.67.0, v0.67.1) | 🔴 Muito Alta |
| **Qwen Code** | 10 (2 críticas) | **47** | 0 | 🟢 Alta |

**Observação:** Pi e Qwen Code lideram em volume de contribuições, com Pi demonstrando a maior taxa de fechamento de issues (24 resolvidos em 24h) e Qwen Code mantendo 47 PRs em revisão simultânea.

---

## 3. Direções de Features Compartilhadas

### 🔄 Padrões de Demanda Transversal

| Feature | Ferramentas Afetadas | Prioridade |
|---------|---------------------|------------|
| **Persistência de contexto/sessão** | Claude Code, Kimi, Qwen, OpenCode | 🔴 Crítica |
| **Multi-conta / alternância de perfis** | Claude Code, Copilot CLI, OpenCode | 🔴 Crítica |
| **Monitoramento de tokens/uso** | Claude Code, Codex, Gemini, OpenCode | 🟠 Alta |
| **Sistema de hooks extensível** | Claude Code, Qwen, OpenCode | 🟠 Alta |
| **Compatibilidade Windows** | Claude Code, Gemini, OpenCode, Qwen | 🟠 Alta |
| **Modo Vi/Vim keybindings** | Copilot CLI, Kimi | 🟡 Média |
| **Notificações desktop** | Claude Code (plugins) | 🟡 Média |
| **Desenvolvimento remoto** | Codex | 🟡 Média |

### 📊 Análise de Convergência

Três ondas de feature requests emergem:

1. **Onda 1 — Supervisão (maduração):** Todas as ferramentas enfrentam problemas de autenticação, rate limits e visibilidade de consumo. Indicates transição de "ferramentas de demonstração" para uso produção.

2. **Onda 2 — Extensibilidade:** Ecosistemas de plugins (Claude Code, OpenCode) e sistemas de hooks (Qwen, Claude Code) representam o padrão de maturidade para integrações customizadas.

3. **Onda 3 — Controle de UX:** Modos de auto-aprovação (YOLO), controles de verbosidade e keybindings customizados atendem usuários avançados que migram de editors tradicionais.

---

## 4. Análise de Diferenciação

### 🎯 Posicionamento Estratégico

| Ferramenta | Foco Principal | Público-Alvo | Abordagem Técnica |
|------------|----------------|--------------|-------------------|
| **Claude Code** | Experiência do developer | Engenheiros complexos | Plugin ecosystem-first, hooks PreCompact |
| **OpenAI Codex** | Remote development | Teams com infra distribuída | Desktop app como hub, SSH/Docker integration |
| **Gemini CLI** | Produtividade casual | Usuários Google ecosystem | Security patches, MCP integration |
| **Copilot CLI** | Paridade com VS Code | Enterprise GitHub | Model entitlement, keyboard-centric |
| **Kimi Code CLI** | Mercado Chinês | Desenvolvedores CN | Thinking process configurável, encoding CN |
| **OpenCode** | Extensibilidade máxima | Power users, contributors | SDK-style architecture, provider abstraction |
| **Pi** | Terminal experience | Linux/Unix users | PTY multiplexer, OSC 8 hyperlinks |
| **Qwen Code** | Comandos avançados | Batch processing | Slash commands, auto-memory systems |

### 🔧 Divergências Técnicas Notáveis

- **Modelo de negócio:** Claude Code e Copilot CLI monetizam via planos (Max/Pro), enquanto Codex e Gemini CLI utilizam quotas gratuitas integradas a subscriptions existentes.
- **Arquitetura de plugins:** Claude Code adota plugin architecture com hooks e lifecycle events; OpenCode implementa provider abstraction para multi-model; Pi investe em terminal multiplexer nativo.
- **Tratamento de contexto:** Codex implementa prefix compaction ativo; OpenCode tem issues de skill list duplication (5-7K tokens/request); Kimi oferece `show_thinking_stream` configurável.

---

## 5. Tração e Maturidade da Comunidade

### 📈 Rankings de Engajamento

**Por Volume de Issues Comentadas:**
1. Claude Code (#42796 — 415 comentários)
2. Codex (#14593 — 534 comentários) ⬆️
3. OpenCode (#8030 — 215 comentários)
4. Gemini CLI (#24517 — 87 comentários)
5. Copilot CLI (#2591 — 25 comentários)

**Por Velocidade de Iteração:**
1. **Pi** — 24 issues fechadas + 14 PRs merged em 24h (turnover máximo)
2. **Qwen Code** — 47 PRs em pipeline simultâneo
3. **Claude Code** — 2 releases + 3 plugins PRs
4. **Kimi Code CLI** — 2 PRs críticos fechados (TaskStop, thinking stream)

**Por Maturidade de Processo:**
1. **Claude Code** — Changelog estruturado, plugin registry, semantic versioning
2. **OpenAI Codex** — Alpha versioning com notas claras, security advisories
3. **Gemini CLI** — Security patches com cherry-pick documentado

### ⚠️ Comunidades com Sinais de Alerta

| Ferramenta | Sinal | Implicação |
|------------|-------|------------|
| **Copilot CLI** | 0 PRs atualizados em 24h | Baixa velocidade de resposta a issues críticas |
| **OpenCode** | Skill list duplication (5-7K tokens) | Tech debt em core feature afecta custo |
| **Kimi Code CLI** | 3 issues sobre thinking display | Fragmentação de UX sem padrão consistente |

---

## 6. Sinais de Tendência

### 📊 Tendências Extraídas do Feedback

**1. Plugin Architecture como Standard de Mercado**
```
Evidência:
- Claude Code: subagent-cleanup, notify-on-complete, usage-monitor
- OpenCode: npm registry integration
- Qwen Code: ACP hooks system
- Copilot CLI: registry-driven MCP installation
```
**Sinal:** Ferramentas que não oferecem extensibilidade quedarán para trás em adoção enterprise.

**2. Visibilidade de Custo é Diferencial Competitivo**
```
Evidência:
- Claude Code: usage-monitor plugin (48h de desenvolvimento)
- Codex: context percent na status line + prefix compaction
- OpenCode: token usage em tempo real (18👍)
- Gemini CLI: quota footer improvements
```
**Sinal:** Usuários estão saturados de surpresas de billing; ferramentas que empoderam controle de custo terão vantagem em conversion para planos pagos.

**3. Compatibilidade Windows cross-cutting Issue**
```
Evidência:
- 5 de 8 ferramentas com issues Windows específicas
- CMD/PowerShell quirks (Copilot, Qwen, OpenCode, Claude)
- ripgrep EFTYPE (Gemini)
- Console flashing (OpenCode)
```
**Sinal:** Mercado Windows ainda é "second-class citizen" para AI CLIs; empresas com base Windows significativa enfrentam fricção significativa.

**4. Modo Auto-Aprovação (YOLO/Lax) como Feature Pivô**
```
Evidência:
- Gemini CLI: YOLO mode quebrado (P0)
- Kimi Code: `--yolo` deveria separar plan approval (issue #1867)
- Copilot CLI: whitelist de ferramentas (issue #1973)
```
**Sinal:** Usuários querem granularidade — approve some tools, auto-approve others — não binary approve/deny.

**5. Memória Persistente Entre Sessões (Momentum Crítico)**
```
Evidência:
- Claude Code: issue #14227 com 29 comentários
- OpenCode: auto-memory system (PR #3087)
- Qwen Code: auto-dream subsystem
- Gemini CLI: proactive memory writes (issue #22809)
```
**Sinal:** Este é o feature request mais transversal do ecossistema. Indicates que workflows multi-sessão são normais, não edge case.

**6. Terminal como Platform (não apenas CLI)**
```
Evidência:
- Pi: multiplexação com split panes + tabs
- Claude Code: background monitor + plugin hooks
- Qwen Code: batch operations, slash commands
```
**Sinal:** Terminal interfaces estão evoluindo para "IDE leve" com capacidades de orchestration.

---

## 7. Recomendações para Decisores

### 🎯 Para Adoção Corporativa

| Critério | Recomendação | Ferramentas |
|----------|--------------|-------------|
| **Maturidade comprovada** | Claude Code, OpenAI Codex | Equipes que precisam de estabilidade |
| **Customização profunda** | OpenCode, Claude Code | Organizações com workflows customizados |
| **Custo previsível** | Gemini CLI, Claude Code (Max) | Budgets com limite fixo |
| **Integração GitHub** | Copilot CLI | Teams 100% GitHub-native |
| **Mercado Chinês** | Kimi Code CLI, Qwen Code | Operações CN |

### 🔧 Para Desenvolvedores Contribuidores

| Área de Contribuição | Oportunidade | Ferramenta |
|----------------------|--------------|------------|
| **Plugin ecosystem** | Novo plugin com valor demonstrável | Claude Code |
| **Windows compatibility** | Issues com alta visibilidade | Gemini, Qwen, OpenCode |
| **Security audits** | Dependencies vulneráveis | Pi (fast-xml-parser) |
| **Performance** | Token optimization, startup speed | Todas |
| **Hooks extensibility** | HTTP/Function/Async hooks | Qwen Code ACP |

---

*Relatório compilado em 2026-04-14 com base em análise de 8 repositórios GitHub. Metodologia: agregação de issues por severidade, contagem de PRs por status, categorização de features requests por padrões de recorrência.*

---

## Relatórios detalhados por ferramenta

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Destaques da comunidade Claude Code Skills

> Fonte: [anthropics/skills](https://github.com/anthropics/skills)

# Relatório: Destaques da Comunidade Claude Code Skills

*Fonte: github.com/anthropics/skills | Dados até 2026-04-14*

---

## 1. Ranking das Skills mais quentes

Lista baseada em volume de discussão (Issues + PRs + engajamento da comunidade):

| # | Skill / PR | Autor | Tema central | Estado |
|---|-----------|-------|--------------|--------|
| 1 | **#62** — Skills sumiram + erros | nicksonnenberg | Perda masiva de skills do usuário | OPEN, 10 comentários |
| 2 | **#202** — skill-creator desatualizado | oaustegard | skill-creator precisa de best practices | OPEN, 8 comentários |
| 3 | **#514** — document-typography | PGTBoos | Controle tipográfico de documentos | OPEN |
| 4 | **#189** — Duplicate skills por plugins | chuggies510 | `document-skills` e `example-skills` conflitantes | OPEN, 5 comentários, 👍×7 |
| 5 | **#556** — run_eval.py 0% trigger rate | dthau120391 | Bug crítico: skills nunca invocam | OPEN, 5 comentários, 👍×6 |
| 6 | **#83** — skill-quality/security analyzer | eovidiu | Meta-skills de análise de quality/security | OPEN |
| 7 | **#723** — testing-patterns skill | 4444J99 | Cobertura completa da pirâmide de testes | OPEN |
| 8 | **#154** — shodh-memory | varun29ankuS | Memória persistente entre sessões | OPEN |

### Análise dos hotspots

**🔴 Bug crítico — #556 `run_eval.py` zero trigger rate**
- 6 upvotes, 5 comentários — maior engajamento de validação da lista
- O script que avalia se skills são invocadas corretamente está falhando 100% das vezes
- Impacto: impossibilita avaliação quantitativa de novas skills
- [Ver Issue #556](https://github.com/anthropics/skills/issues/556)

**🔴 Bug UX — #62 Skills sumiram misteriosamente**
- 10 comentários — maior volume de discussão
- Usuário perdeu 12 skills complexas após renomear arquivo no diretório de downloads
- Sintoma de fragilidade no gerenciamento de ciclo de vida das skills
- [Ver Issue #62](https://github.com/anthropics/skills/issues/62)

**🟡 Melhoria necessária — #202 skill-creator fora das best practices**
- 8 comentários — segunda maior discussão
- O skill-creator é descrito como "documentação para humanos" em vez de instruções executáveis pelo Claude
- Tom verboso prejudica eficiência de tokens
- [Ver Issue #202](https://github.com/anthropics/skills/issues/202)

**🟡 Conflito de conteúdo — #189 Duplicate skills**
- 7 upvotes, 5 comentários
- Instalando `document-skills` E `example-skills` gera skills duplicadas no contexto
- Violação do contrato prometido pelo README do repo
- [Ver Issue #189](https://github.com/anthropics/skills/issues/189)

---

## 2. Tendências de demanda da comunidade

Extraídas das Issues abertas com maior engajamento:

| Tendência | Issue de origem | Descrição |
|----------|-----------------|-----------|
| **Persistência de contexto** | [#154](https://github.com/anthropics/skills/issues/154), [#521](https://github.com/anthropics/skills/pull/521) | Múltiplos usuários demandam memória entre sessões — "conhecimento descoberto ontem precisa estar disponível hoje" |
| **Qualidade e validação** | [#202](https://github.com/anthropics/skills/issues/202), [#83](https://github.com/anthropics/skills/pull/83) | skill-creator precisa adotar best practices; meta-skills de análise de quality/security |
| **Automação nativ​a** | [#806](https://github.com/anthropics/skills/pull/806) | Automação macOS via AppleScript (não screenshot-based computer use) |
| **Integração corporativa** | [#228](https://github.com/anthropics/skills/issues/228), [#29](https://github.com/anthropics/skills/issues/29) | Compartilhamento organizacional de skills; suporte AWS Bedrock |
| **Segurança e confiança** | [#492](https://github.com/anthropics/skills/issues/492) | Skills comunitárias sob namespace `anthropic/` geram abuso de confiança |
| **Testabilidade** | [#723](https://github.com/anthropics/skills/pull/723) | Cobertura completa do stack de testes (pirâmide / Testing Trophy) |
| **Governança de agentes** | [#412](https://github.com/anthropics/skills/issues/412) | Padrões de governança: policy enforcement, threat detection, audit trails |

---

## 3. Skills promissoras ainda pendentes

PRs abertos com proposta clara e ainda não merged (até 2026-04-14):

| PR | Skill | Destaque | Última atualização |
|----|-------|----------|--------------------|
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | Correção de orphan words, widows, desalinhamento de numeração | 2026-03-13 |
| [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` + `skill-security-analyzer` | Análise em 5 dimensões (estrutura, segurança, performance, etc.) | 2026-01-07 |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | Unit, component, integration, E2E — Testing Trophy completo | 2026-03-30 |
| [#154](https://github.com/anthropics/skills/pull/154) | `shodh-memory` | Context persistent via `proactive_context` entre sessões | 2026-03-03 |
| [#374](https://github.com/anthropics/skills/pull/374) | `x402` | Micropayments BSV e autenticação via linguagem natural | 2026-04-01 |
| [#486](https://github.com/anthropics/skills/pull/486) | `ODT skill` | Leitura/escrita de OpenDocument (ISO 26300) | 2026-04-10 |
| [#806](https://github.com/anthropics/skills/pull/806) | `sensory` | AppleScript em 2 tiers de permissão para macOS nativo | 2026-04-02 |
| [#521](https://github.com/anthropics/skills/pull/521) | `record-knowledge` | Grava conhecimento em `.claude/knowledge/` para persistência cross-session | 2026-03-09 |

> **Nota:** Todos os PRs listados estão com status `[OPEN]`. Nenhum dos 20 PRs em destaque foi merged até a data de corte — indicando um gargalo de review/manutenção no repositório oficial.

---

## 4. Insight sobre o ecossistema de Skills

> **A comunidade enfrenta dois problemas ortogonais: (1) a infraestrutura de gerenciamento de skills (persistência, duplicação, trigger rate) está com falhas ativas que impedem uso confiável; e (2) há uma demanda massiva por habilidades de memória persistente, análise de qualidade e automação nativa — indicando que o ecossistema está amadurecendo de "ferramentas avulsas" para "agentes com contexto contínuo".**

---

*Relatório gerado automaticamente a partir de dados públicos do GitHub. As datas de atualização dos PRs indicam atividade recente, mas nenhum dos PRs em destaque foi fechado/merged até 2026-04-14.*

---

# Relatório Diário da Comunidade Claude Code

**Data:** 2026-04-14
**Repositório:** [anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 1. Destaques do Dia

O lançamento da versão **v2.1.107** trouxe melhorias na exibição de hints de pensamento durante operações longas, enquanto a versão anterior v2.1.105 adicionou funcionalidades significativas como o parâmetro `path` para a ferramenta `EnterWorktree` e suporte a hooks `PreCompact`. A comunidade demonstra forte engajamento com issues sobre regression do recurso de colar código OAuth em múltiplas plataformas, além de preocupações contínuas com limites de uso e comportamento em tarefas de engenharia complexas.

---

## 2. Lançamentos

### v2.1.107
- **Hinits de pensamento mais cedo:** Exibição de indicadores de raciocínio durante operações longas agora ocorre mais rapidamente, melhorando a experiência do usuário.

[v2.1.107](https://github.com/anthropics/claude-code/releases/tag/v2.1.107)

### v2.1.105
- **Parâmetro `path` para `EnterWorktree`:** Nova funcionalidade para alternar para worktrees existentes do repositório atual.
- **Suporte a hooks `PreCompact`:** Hooks agora podem bloquear compactação retornando código de saída 2 ou `{"decision":"block"}`.
- **Monitor de background para plugins:** Suporte para monitoração em background integrado a plugins.

[v2.1.105](https://github.com/anthropics/claude-code/releases/tag/v2.1.105)

---

## 3. Issues em Evidência

### 1. [Claude Code unusable for complex engineering tasks](https://github.com/anthropics/claude-code/issues/42796)
**🔴 Fechada | 415 comentários | 1.778 👍**

Issue crítica reportada por stellaraccident documentando deterioração significativa no desempenho para tarefas de engenharia complexas após atualizações de fevereiro. O alto volume de reações indica que este é um problema sistêmico afetando desenvolvedores heavy-duty. A issue foi fechada, sugerindo resolução em andamento.

---

### 2. [Phone verification](https://github.com/anthropics/claude-code/issues/34229)
**🟡 Aberta | 692 comentários | 768 👍**

Problema de verificação telefônica que continua gerando volume massivo de feedback da comunidade. O número elevado de comentários indica complexidade técnica e impacto em onboarding de novos usuários.

---

### 3. [Claude Max plan session limits exhausted abnormally fast](https://github.com/anthropics/claude-code/issues/38335)
**🟡 Aberta | 575 comentários | 402 👍**

Usuários Pro Max reportam consumo acelerado de limites de sessão desde 23 de março de 2026. Issue de alta prioridade para usuários profissionais com forte impacto em custos operacionais.

---

### 4. [Bring Back Buddy](https://github.com/anthropics/claude-code/issues/45596)
**🟡 Aberta | 155 comentários | 650 👍**

Comunidade organizada exige retorno do skill `/buddy`, removido silenciosamente na versão v2.1.97 sem changelog. O alto número de 👍 demonstra valor significativo que o recurso tinha para os desenvolvedores.

---

### 5. [API Error: Stream idle timeout](https://github.com/anthropics/claude-code/issues/46987)
**🟡 Aberta | 72 comentários | 52 👍**

Erros recorrentes de timeout de stream em macOS afetando produtividade. Multiple reports indicam problema persistente queima tokens sem resposta.

---

### 6. [Multiple Claude accounts management](https://github.com/anthropics/claude-code/issues/18435)
**🟡 Aberta | 55 comentários | 333 👍**

Feature request popular para gerenciar múltiplas contas Claude com alternância fácil entre perfis. Resposta significativa da comunidade indicando demanda real para workflows multi-conta.

---

### 7. [Pro Max 5x Quota Exhausted in 1.5 Hours](https://github.com/anthropics/claude-code/issues/45756)
**🟡 Aberta | 41 comentários | 127 👍**

Consumo anômalo de quota em ambiente WSL. Relevante para desenvolvedores que usam Claude Code em Linux via WSL com planos Pro Max.

---

### 8. [Cannot paste auth code in Dev Container](https://github.com/anthropics/claude-code/issues/47699)
**🟢 Fechada | 38 comentários | 44 👍**

Bug específico de Dev Container na v2.1.105 impedindo colagem de código de autenticação. Já fechada, indicando correção rápida implementada.

---

### 9. [Persistent Memory Between Sessions](https://github.com/anthropics/claude-code/issues/14227)
**🟡 Aberta | 29 comentários | 7 👍**

Feature request fundamental: memória persistente entre sessões. Cada sessão começa do zero, sem consciência de trabalho anterior. Demanda crescente por contexto acumulado.

---

### 10. [Sequential edits silently drop first edit](https://github.com/anthropics/claude-code/issues/47858)
**🟡 Aberta | 2 comentários | 0 👍**

Bug crítico de perda silenciosa de edições quando realizadas rapidamente no mesmo arquivo. Impacto direto na confiabilidade para edição de código.

---

## 4. Progresso de PRs Importantes

### 1. [Add subagent-cleanup plugin](https://github.com/anthropics/claude-code/pull/47830)
**📝 Aberto | hmennen90**

Plugin para finalizar processos subagent órfãos (`claude --resume`) no início da sessão. Previne vazamentos de CPU/memória acumulados entre sessões.

---

### 2. [Add notify-on-complete plugin](https://github.com/anthropics/claude-code/pull/47759)
**📝 Aberto | Rohan5commit**

Plugin oficial que adiciona hook `Stop` para notificações desktop, sons ou síntese vocal quando Claude Code completa uma tarefa. Hook fail-open retornando `{"decision":"approve"}`.

---

### 3. [Add usage monitor plugin](https://github.com/anthropics/claude-code/pull/47760)
**📝 Aberto | Rohan5commit**

Plugin oficial com instalador SwiftBar para macOS, buscador de `/usage` em cache e renderizador de menu bar. Fluxo de instalação autocontido para monitoramento de consumo.

---

### 4. [Add preserve-session plugin](https://github.com/anthropics/claude-code/pull/39148)
**📝 Aberto | wonbywondev**

Plugin que preserva histórico de sessões quando diretórios de projeto são renomeados, movidos ou copiados. Atribui UUID independente de caminho a cada projeto.

---

### 5. [Fix MCP OAuth token persistence](https://github.com/anthropics/claude-code/pull/47554)
**📝 Aberto | BalamuruganT006**

Solução para Supabase MCP e outros servidores HTTP que perdem autenticação OAuth entre conversas. Implementa armazenamento persistente de credenciais via plataforma.

---

### 6. [fix: add -exist flag to ipset commands](https://github.com/anthropics/claude-code/pull/47902)
**✅ Fechado | lnf83515**

Adiciona flag `-exist` aos comandos `ipset add` no DevContainer para prevenir erros de duplicados em reinicializações.

---

### 7. [fix(hookify): add ask action support](https://github.com/anthropics/claude-code/pull/47490)
**📝 Aberto | Rohan5commit**

Adiciona suporte a `action: ask` para regras hookify em `PreToolUse`, normalizando `action: confirm` para fluxo de aprovação.

---

### 8. [fix(plugins): make hookify and plugin-dev YAML valid](https://github.com/anthropics/claude-code/pull/47676)
**📝 Aberto | cirospaciari**

Corrige sequências não-quotadas com dois-pontos que parsers YAML strict rejeitam em arquivos de descrição de plugins.

---

### 9. [fix(security-guidance): skip doc files for substring checks](https://github.com/anthropics/claude-code/pull/47514)
**📝 Aberto | Rohan5commit**

Pula heurísticas de segurança baseadas em substrings para arquivos de documentação, mantendo verificações de caminho e warnings para arquivos fonte.

---

### 10. [feat: open source claude code](https://github.com/anthropics/claude-code/pull/41447)
**📝 Aberto | gameroman**

Proposta abrangente de open source com referência a múltiplas issues fechadas. Indicador de demanda da comunidade, embora status seja controverso.

---

## 5. Tendências de Pedidos de Features

### 🔧 Gestão de Sessão e Contexto
| Feature | Issue | Status |
|---------|-------|--------|
| Memória persistente entre sessões | [#14227](https://github.com/anthropics/claude-code/issues/14227) | Aberta |
| Preservar sessões ao mover/renomear projetos | [#39148](https://github.com/anthropics/claude-code/pull/39148) (PR) | Aberto |
| Escopo de /insights por projeto/repo | [#41199](https://github.com/anthropics/claude-code/issues/41199) | Aberto |

### 🔐 Multi-Conta e Autenticação
| Feature | Issue | Status |
|---------|-------|--------|
| Múltiplas contas com alternância fácil | [#18435](https://github.com/anthropics/claude-code/issues/18435) | Aberta |
| Persistência OAuth MCP entre sessões | [#47554](https://github.com/anthropics/claude-code/pull/47554) (PR) | Aberto |
| Personalização de keybindings no desktop | [#33034](https://github.com/anthropics/claude-code/issues/33034) | Fechada |

### 📊 Monitoramento e Notificação
| Feature | Issue | Status |
|---------|-------|--------|
| Plugin notify-on-complete | [#47759](https://github.com/anthropics/claude-code/pull/47759) (PR) | Aberto |
| Plugin usage-monitor | [#47760](https://github.com/anthropics/claude-code/pull/47760) (PR) | Aberto |

### 🛠️ Melhorias de IDE e LSP
| Feature | Issue | Status |
|---------|-------|--------|
| LSP workspaceSymbol com query parameter | [#30948](https://github.com/anthropics/claude-code/issues/30948) | Aberta |
| LSP output com diagnostics atualizadas | [#17979](https://github.com/anthropics/claude-code/issues/17979) | Aberta |
| Setting para desabilitar auto-attach no VS Code | [#24726](https://github.com/anthropics/claude-code/issues/24726) | Aberta |

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Problemas de Regressão Críticos

**1. Colagem de código OAuth não funciona (Multi-plataforma)**
Múltiplas issues reportadas hoje indicam regressão na v2.1.104+:
- [Linux - bracketed paste](https://github.com/anthropics/claude-code/issues/47745)
- [Linux - OAuth code field](https://github.com/anthropics/claude-code/issues/47773)
- [WSL - regression v2.1.105+](https://github.com/anthropics/claude-code/issues/47799)
- [v2.1.107 regression](https://github.com/anthropics/claude-code/issues/47887)

**Impacto:** Impossibilita login em múltiplas plataformas.

---

**2. Edições sequenciais perdem primeira edição**
[Issue #47858](https://github.com/anthropics/claude-code/issues/47858) - Bug silencioso onde duas edições rápidas no mesmo arquivo resultam apenas na segunda.

**Impacto:** Corrupção sutil de código sem feedback de erro.

---

### 🔴 Problemas Recorrentes de Infraestrutura

| Problema | Issues Relacionadas | Plataforma |
|----------|---------------------|-------------|
| Stream idle timeout | [#46987](https://github.com/anthropics/claude-code/issues/46987), [#47698](https://github.com/anthropics/claude-code/issues/47698), [#47699](https://github.com/anthropics/claude-code/issues/47699) | macOS |
| Consumo anômalo de quota | [#38335](https://github.com/anthropics/claude-code/issues/38335), [#45756](https://github.com/anthropics/claude-code/issues/45756), [#47917](https://github.com/anthropics/claude-code/issues/47917) | Todas |

---

### 📈 Demanda de Plugins

Comunidade demonstra forte adoção de ecossistema de plugins com 3 novos PRs de plugins hoje:
- `subagent-cleanup`: Limpeza de processos órfãos
- `notify-on-complete`: Notificações de tarefas
- `usage-monitor`: Monitoramento de consumo

---

### 🎯 Recomendações para Desenvolvedores

1. **Testar fluxo de autenticação** antes de atualizar - regressão ativa afeta login
2. **Evitar edições sequenciais rápidas** no mesmo arquivo - aguardar confirmação da primeira
3. **Monitorar consumo de tokens** em sessões longas - comportamento anômalo documentado
4. **Considerar plugins oficiais** para notificações e limpeza de sessão

---

*Relatório gerado automaticamente com base em dados do GitHub. Última atualização: 2026-04-14.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Relatório Diário da Comunidade OpenAI Codex
## 📅 Data: 2026-04-14

---

## 1. Destaques do Dia

O desenvolvimento do Codex continua intenso com avanços em diversas áreas críticas. O foco principal está em **melhorias no gerenciamento de contexto e ferramentas MCP**, comPRs significativos de prefix compaction e registro de ferramentas com namespace. A comunidade enfrenta desafios recorrentes com rate limits e problemas específicos no Windows (PowerShell, WSL, Gatekeeper). O desktop app apresenta issues de usabilidade que precisam atenção, especialmente relacionados a sessões e histórico de threads.

---

## 2. Lançamentos

### 🔬 Releases Rust Alpha

| Versão | Status |
|--------|--------|
| `rust-v0.121.0-alpha.6` | Nova |
| `rust-v0.121.0-alpha.4` | Nova |

> **Nota:** As versões alpha indicam desenvolvimento ativo com ciclos frequentes de integração. Recomenda-se testar em ambientes não-críticos antes de adoção em produção.

---

## 3. Issues em Evidência

### 🔥 #14593 — Burning tokens very fast
**Status:** OPEN | **Comentários:** 534 | **👍:** 208

*Problema crítico de consumo excessivo de tokens.*

Com 534 comentários, esta é **a issue mais comentada** da semana. Usuários reportam que o Codex está consumindo tokens rapidamente, sugerindo possíveis vazamentos de contexto ou loops de re-renderização. Afeta principalmente a extensão VS Code no Windows Business. A alta engajamento indica um problema sistêmico que impacta significativamente o custo de uso.

📌 [Ver Issue #14593](https://github.com/openai/codex/issues/14593)

---

### 🔥 #10450 — Remote Development in Codex Desktop App
**Status:** OPEN | **Comentários:** 117 | **👍:** 538

*Feature request para desenvolvimento remoto.*

Esta issue possui o **maior número de thumbs-up (538)** do repositório, demonstrando uma demanda massiva por suporte a desenvolvimento remoto. Usuários querem acessar projetos em servidores SSH/Docker/containers, algo que o VS Code já suporta nativamente com Remote SSH. A limitação atual do Desktop App gera frustração em equipes que trabalham com infraestruturas distribuídas.

📌 [Ver Issue #10450](https://github.com/openai/codex/issues/10450)

---

### ⚡ #13917 — Windows PowerShell host cannot start (8009001d)
**Status:** OPEN | **Comentários:** 30 | **👍:** 0

*Erro crítico no Windows: falha ao iniciar PowerShell no Codex Desktop.*

O código de erro `8009001d` indica problemas de inicialização do PowerShell como host. Usuários Pro e Plus não conseguem executar scripts PowerShell dentro do sandbox do Codex no Windows. A regressão afeta versões `26.305.950.0` e parece estar relacionada a mudanças no isolamento de processo do app.

📌 [Ver Issue #13917](https://github.com/openai/codex/issues/13917)

---

### 💡 #8784 — "codex delete <session>"
**Status:** OPEN | **Comentários:** 17 | **👍:** 51

*Feature request para deletar sessões via CLI.*

Usuários pedem um comando simples para eliminar sessões obsoletas sem usar a interface gráfica. Atualmente, só é possível deletar sessões pelo app, o que é inconveniente para workflows automatizados. A comunidade vê isso como melhoria essencial de UX para power users.

📌 [Ver Issue #8784](https://github.com/openai/codex/issues/8784)

---

### 🐛 #16088 — WSL: empty .codex file left behind
**Status:** OPEN | **Comentários:** 12 | **👍:** 50

*Regressão: arquivo .codex vazio criado em projetos sem configuração.*

Quando o Codex executa em WSL em projetos sem `.codex` existente, um arquivo vazio é deixado para trás. Embora pareça trivial, indica problemas de gerenciamento de workspace e pode causar comportamentos inesperados em automações. 50 👍 indicam que é um incômodo comum.

📌 [Ver Issue #16088](https://github.com/openai/codex/issues/16088)

---

### 🐛 #11635 — Stale capacity banner persists
**Status:** OPEN | **Comentários:** 9 | **👍:** 6

*Banner de "model at capacity" permanece mesmo com modelo respondendo.*

Um bug de UI onde o banner de erro de capacidade fica preso na tela mesmo quando o modelo continua gerando respostas. Usuários Business com créditos prepaid são afetados. Isso causa confusão sobre o status real do sistema.

📌 [Ver Issue #11635](https://github.com/openai/codex/issues/11635)

---

### 🐛 #17354 — Recent Thread history wiped in app, present in CLI
**Status:** OPEN | **Comentários:** 9 | **👍:** 0

*Histórico de threads some no app mas existe na CLI.*

Problema de sincronização entre o app desktop e a CLI. Threads que aparecem corretamente na CLI desaparecem do sidebar do app após reinicialização. Usuários Plus no macOS Darwin 25.3.0 são afetados, perdendo acesso a conversas de 2-3 meses.

📌 [Ver Issue #17354](https://github.com/openai/codex/issues/17354)

---

### ⚠️ #16721 — Codex Web Screenshots not available (Regression)
**Status:** OPEN | **Comentários:** 7 | **👍:** 0

*Recurso de screenshots no Codex Web parou de funcionar.*

Regressão recente que afeta usuários web e iOS. Screenshots de projetos React e Node pararam de ser gerados há algumas semanas. O sistema retorna warnings do tipo "I couldn't generate a..." consistentemente.

📌 [Ver Issue #16721](https://github.com/openai/codex/issues/16721)

---

### 🐛 #17624 — Review tab "Loading diff" stuck on Windows
**Status:** OPEN | **Comentários:** 7 | **👍:** 5

*Guia de Review trava em "Loading diff" no Windows.*

O Codex App no Windows passa `/F:/...` como caminho literal para `git diff` ao invés de converter para formato Unix. Isso quebra a funcionalidade de code review em máquinas Windows, afetando a capacidade de fazer revisões de código integradas.

📌 [Ver Issue #17624](https://github.com/openai/codex/issues/17624)

---

### 🐛 #17525 — Ubuntu: every edit requires skipping sandbox
**Status:** OPEN | **Comentários:** 5 | **👍:** 0

*Sandbox Ubuntu falha para todas as edições normais.*

No Ubuntu 24.04, cada edição simples faz o Codex pedir para pular o sandbox, algo que não acontecia antes. Usuários Plus com GPT 5.4 são afetados. Isso indica uma regressão no isolamento de sandbox no Linux.

📌 [Ver Issue #17525](https://github.com/openai/codex/issues/17525)

---

## 4. Progresso de PRs Importantes

### 🚀 #17286 — Prefix Compaction
**Status:** OPEN | **Autor:** rka-oai

Melhoria de performance que compacta prefixos de contexto em background quando o histórico atinge um limiar inferior. O foreground "ganha" se o prefix compaction não estiver pronto. Substituições de prefixo são mostradas como "Context prefix compacted". **Significado:** Reduz custo de tokens e melhora latência em sessões longas.

📌 [Ver PR #17286](https://github.com/openai/codex/pull/17286)

---

### ✨ #17637 — Context percent na status line
**Status:** OPEN | **Autor:** jif-oai

Adiciona indicador de percentual de contexto usado na linha de status. **Significado:** Permite desenvolvedores monitorarem visualmente o consumo de contexto durante sessões, aiding in understanding token usage patterns.

📌 [Ver PR #17637](https://github.com/openai/codex/pull/17637)

---

### 🔧 #17404 — Register all MCP tools with namespace
**Status:** OPEN | **Autor:** sayan-oai

Corrige o registro de ferramentas MCP retornadas por `tool_search` (deferred tools) com formato diferente das ferramentas diretas. Unifica o acesso ao catálogo de ferramentas. **Significado:** Resolve inconsistências na chamada de ferramentas MCP.

📌 [Ver PR #17404](https://github.com/openai/codex/pull/17404)

---

### 🔧 #17504 — Key MCP tool listings by toolname
**Status:** OPEN | **Autor:** sayan-oai

Mantém unicidade de nomes de ferramentas MCP dentro da camada MCP, permitindo que chamadores usem identidades tipadas diretamente. **Significado:** Melhora organização e type-safety do sistema de ferramentas.

📌 [Ver PR #17504](https://github.com/openai/codex/pull/17504)

---

### 🛡️ #17732 — Revert danger-full-access denylist-only mode
**Status:** OPEN | **Autor:** viyatb-oai

Reverte o PR #16946 e remove o modo de rede "danger-full-access denylist-only". Remove configurações, protocolos, e comportamento de proxy associados. **Significado:** Corrige regressão de segurança/administrativa que estava causando problemas.

📌 [Ver PR #17732](https://github.com/openai/codex/pull/17732)

---

### 🐛 #17725 — Fix remote apply-patch timeout regression
**Status:** OPEN | **Autor:** starr-openai

Corrige timeout regression no apply-patch remoto. Melhora descoberta do helper `codex-linux-sandbox` sibling e compartilha binários de teste em `/tmp`. **Significado:** Resolve falha críticos em operações de patch em ambientes remotos.

📌 [Ver PR #17725](https://github.com/openai/codex/pull/17725)

---

### 🔧 #17282 — Fix agent-job fanout fill and post-completion hangs
**Status:** OPEN | **Autor:** daveaitel-openai

Corrige seis problemas no CSV fanout que causavam underfill na inicialização e hangs no post-completion. **Significado:** Permite que `spawn_agents_on_csv` funcione como primitive de fanout de alta concorrência robusto.

📌 [Ver PR #17282](https://github.com/openai/codex/pull/17282)

---

### 📦 #17673 — Add marketplace upgrade command
**Status:** OPEN | **Autor:** xli-oai

Adiciona comando `codex marketplace upgrade [name]` na CLI. Reutiliza pipeline de upgrade compartilhado. **Significado:** Melhora DX para gerenciamento de plugins e marketplaces de forma programática.

📌 [Ver PR #17673](https://github.com/openai/codex/pull/17673)

---

### 🎭 #17713 — Opt-in provider runtime abstraction
**Status:** OPEN | **Autor:** celia-oai

Adiciona abstração genérica para configuração de provedores de modelo. Roteia auth/request setup através da nova abstração mantendo comportamento atual. **Significado:** Foundation para suporte multi-provider futuro (alternativas à OpenAI).

📌 [Ver PR #17713](https://github.com/openai/codex/pull/17713)

---

### 🔐 #17746 — Support PermissionRequest updatedPermissions
**Status:** OPEN | **Autor:** abhinav-oai

Permite que hooks `PermissionRequest` retornem `decision.updatedPermissions` quando behavior é `allow`. Aplica sugestões de `addRules` ao estado de regras. **Significado:** Melhora sistema de permissões e permite configurações mais granulares.

📌 [Ver PR #17746](https://github.com/openai/codex/pull/17746)

---

## 5. Tendências de Pedidos de Features

### 🌐 Desenvolvimento Remoto
**Demanda alta:** A issue #10450 (538 👍) evidencia a necessidade crítica de suporte a Remote SSH, containers Docker, e servidores remotos. A comunidade vê isso como limitação significativa comparado ao VS Code native Remote Development.

---

### 💾 Gerenciamento de Sessões
**Pedido recorrente:** Comandos como `codex delete <session>` (#8784) e capacidade de listar/gerenciar sessões via CLI são frequentemente solicitados. Power users querem automação e integração com scripts.

---

### 🔌 Integração MCP Avançada
**Área de foco:** PRs em andamento (#17404, #17504) mostram que a OpenAI está investindo em melhorar a integração com MCP (Model Context Protocol). Permissões granulares (#17746) também são priorizadas.

---

### 📊 Visibilidade de Contexto
**Melhorias em UX:** Status line com percentual de contexto (#17637) e prefix compaction (#17286) indicam foco em ajudar desenvolvedores a entender e controlar o consumo de tokens em sessões longas.

---

### 🛠️ Sandbox Isolation
**Feature pedida:** #17625 solicita isolamento gravável de `/tmp` no sandbox para casos como POSIX jobserver do GNU Make. Mostra casos de uso cada vez mais complexos sendo explorados.

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Problemas Críticos Recorrentes

| Área | Impacto | Detalhes |
|------|---------|----------|
| **Rate Limits** | 🔴 Alto | #14593 com 534 comentários indica problema sistêmico de consumo de tokens. Tokens queimam rápido sem理由 aparente. |
| **Windows Integration** | 🟠 Médio-Alto | PowerShell host (#13917), WSL file handling (#16088), Review tab paths (#17624) mostram padrões de regressões Windows. |
| **Sandbox Ubuntu** | 🟠 Médio | #17525 indica regressão onde todas edições pedem "skip sandbox" no Ubuntu 24.04. |
| **Histórico de Threads** | 🟠 Médio | #17354 mostra dessincronização app/CLI. Problema crítico para quem depende de continuidade. |

---

### 🎯 Prioridades de Atenção

1. **Consumo excessivo de tokens** — Investigar loops de contexto e vazamentos可能导致 custos inesperados
2. **Estabilidade no Windows** — PowerShell host e caminhos de arquivo são fontes constantes de bugs
3. **Sandbox Linux** — Regressão Ubuntu precisa ser corrigida urgentemente
4. **Sincronização de estado** — Histórico de threads não persiste corretamente entre app e CLI

---

### 💡 Recomendações

- **Para usuários Windows:** Verifiquem versão `26.409.20454` ou superior para últimos fixes
- **Para power users CLI:** `codex marketplace upgrade` facilitagrab gerenciamento de plugins
- **Para sessões longas:** Novo prefix compaction (#17286) deve melhorar performance
- **Para uso MCP:** Melhorias de namespace (#17404, #17504) vão estabilizar integrações

---

*Relatório gerado automaticamente com base em dados do GitHub.com/openai/codex em 2026-04-14.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Relatório Diário da Comunidade Gemini CLI — 2026-04-14

---

## 1. Destaques do Dia

O dia foi marcado pela **publicação de duas releases** — uma nightly (v0.39.0-nightly) e um patch de estabilidade (v0.37.2) — com foco em correções de memory, quota display e segurança. No front de issues, problemas de **permissão (403 PERMISSION_DENIED)** continuam como a principal dor da comunidade, com dois issues de alta repercussão discutidos ativamente. A atividade de PRs demonstra preocupação com **compatibilidade Windows** (ripgrep EFTYPE), **performance de ferramentas MCP** e **tratamento de erros em conversas longas**.

---

## 2. Lançamentos

### v0.39.0-nightly.20260414.gdaf500623
**Link**: https://github.com/google-gemini/gemini-cli/releases/tag/v0.39.0-nightly.20260414.gdaf500623

| Mudança | Autor | PR |
|---------|-------|-----|
| Correção de memory no trace's streamWrapper | @anthraxmilkshake | [#25089](https://github.com/google-gemini/gemini-cli/pull/25089) |
| Melhoria no quota footer para modelos não-auto | @jackwotherspoon | [#25121](https://github.com/google-gemini/gemini-cli/pull/25121) |

> Release nightly com foco em estabilidade interna e display de quotas.

---

### v0.37.2
**Link**: https://github.com/google-gemini/gemini-cli/releases/tag/v0.37.2

Release de **patch de segurança** fazendo cherry-pick da correção 9d741ab para a branch v0.37.1, addressing issues críticos identificados pela equipe de segurança.

> Recomendação: Usuários da versão v0.37.1 devem atualizar imediatamente.

---

## 3. Issues em Evidência

### 🔴 #24517 — 403 PERMISSION_DENIED para Google One AI Premium
**Link**: https://github.com/google-gemini/gemini-cli/issues/24517

| Métrica | Valor |
|---------|-------|
| Comentários | 87 |
| 👍 | 44 |
| Prioridade | P1 |
| Status | OPEN |

**Por que importa**: Este é o issue com maior engajamento da comunidade. Usuários com subscription ativa estão sendo bloqueados despite do sistema reconhecer corretamente seu tier como "Gemini Code Assist in Google One AI Pro". Aissue está quente há 12 dias sem resolução.

**Reação da comunidade**: Extensa discussão sobre workarounds, logs de erro, e tentativas de diagnóstico. Múltiplos usuários confirmam comportamento idêntico.

---

### 🔴 #22545 — 429 RESOURCE_EXHAUSTED em Google AI Pro
**Link**: https://github.com/google-gemini/gemini-cli/issues/22545

| Métrica | Valor |
|---------|-------|
| Comentários | 22 |
| 👍 | 21 |
| Status | CLOSED (Need Triage) |

**Por que importa**: Reprodução consistente após reset completo do ambiente. Usuários pagantes afetados mesmo após limpeza total de cachês e reinstalação.

---

### 🟠 #25015 — YOLO mode quebrado após v0.37.0
**Link**: https://github.com/google-gemini/gemini-cli/issues/25015

| Métrica | Valor |
|---------|-------|
| Comentários | 9 |
| Prioridade | P0 |
| Status | OPEN |

**Por que importa**: Bug crítico que quebra o principal feature de auto-aprovação. YOLO deveria permitir execução sem aprovação, mas o sistema continua pedindo confirmação mesmo com Ctrl+Y.

---

### 🟠 #25107 — Developer Knowledge MCP retorna "Method not supported"
**Link**: https://github.com/google-gemini/gemini-cli/issues/25107

| Métrica | Valor |
|---------|-------|
| Comentários | 7 |
| Status | Possible Duplicate |

**Por que importa**: Integração MCP crítica parou de funcionar após update de 8 de abril, afetando workflows de produtividade.

---

### 🟡 #22784 — grep_search EFTYPE no Windows
**Link**: https://github.com/google-gemini/gemini-cli/issues/22784

| Métrica | Valor |
|---------|-------|
| Comentários | 5 |
| Status | OPEN |

**Por que importa**: Problema recorrente de compatibilidade Windows. PR [#25378](https://github.com/google-gemini/gemini-cli/pull/25378) já aberto para correção.

---

### 🟡 #25306 — "The caller does not have permission"
**Link**: https://github.com/google-gemini/gemini-cli/issues/25306

| Métrica | Valor |
|---------|-------|
| Comentários | 13 |
| Área | Security |

**Por que importa**: Variante do problema de permissão, solicitando chat history para diagnóstico detalhado.

---

### 🟡 #25323 — RipGrep slow startup
**Link**: https://github.com/google-gemini/gemini-cli/issues/25323

| Métrica | Valor |
|---------|-------|
| Comentários | 6 |
| Status | Workstream Rollup |

**Por que importa**: CLI demora 2+ minutos para iniciar quando RipGrep falha, degradando experiência significativamente.

---

### 🟢 #24011 — Integração via adapter/wrapper
**Link**: https://github.com/google-gemini/gemini-cli/issues/24011

| Métrica | Valor |
|---------|-------|
| Comentários | 3 |
| Status | OPEN |

**Por que importa**: Projeto Paperclip está construindo orquestrador multi-agente incluindo Gemini CLI. Feature request para API mais robusta.

---

### 🟢 #24916 — Permissões repetidas no mesmo arquivo
**Link**: https://github.com/google-gemini/gemini-cli/issues/24916

| Métrica | Valor |
|---------|-------|
| Comentários | 3 |
| Área | Security |

**Por que importa**: Policy engine não persiste aprovações, causando fricção constante.

---

### 🟢 #25166 — Shell stuck "Waiting input"
**Link**: https://github.com/google-gemini/gemini-cli/issues/25166

| Métrica | Valor |
|---------|-------|
| Comentários | 2 |
| Área | Core |

**Por que importa**: Comandos simples travam CLI, forçando restart.

---

## 4. Progresso de PRs Importantes

| PR | Descrição | Área | Status |
|----|----------|------|--------|
| [#25378](https://github.com/google-gemini/gemini-cli/pull/25378) | **Fix ripgrep EFTYPE no Windows** — Corrige spawn de binário incompatível com arquitetura | Core | OPEN |
| [#25376](https://github.com/google-gemini/gemini-cli/pull/25376) | **Optimize MCP list command** — Skip connection checks por default | MCP | OPEN |
| [#25375](https://github.com/google-gemini/gemini-cli/pull/25375) | **Fix redirect response in downloadFile** — Resolve socket leak e URLs relativas | Extensions | OPEN |
| [#25373](https://github.com/google-gemini/gemini-cli/pull/25373) | **Verbose skill load timing** — Adiciona diagnostics de performance | Core/Platform | OPEN |
| [#25371](https://github.com/google-gemini/gemini-cli/pull/25371) | **PCC delegation contracts** — Hook-aware execution path para ACP | ACP | OPEN |
| [#25372](https://github.com/google-gemini/gemini-cli/pull/25372) | **Newgate sidebar** — Persistent controller ledger para VS Code companion | VS Code | OPEN |
| [#25368](https://github.com/google-gemini/gemini-cli/pull/25368) | **Secure lint scripts** — Command injection fix e OS-agnostic | Platform | OPEN |
| [#25292](https://github.com/google-gemini/gemini-cli/pull/25292) | **Docs: tool argument keys reference** — Documentação de policy engine | Docs | OPEN |
| [#25364](https://github.com/google-gemini/gemini-cli/pull/25364) | **Handle RangeError in JSON serialize** — Evita crash em conversas longas | Agent | OPEN |
| [#25128](https://github.com/google-gemini/gemini-cli/pull/25128) | **Triage dashboard metrics** — Daily contribution time-series | Dashboard | CLOSED |

---

## 5. Tendências de Pedidos de Features

Analisando as 50 issues mais recentes, as seguintes direções emergem como prioritárias para a comunidade:

### 🏗️ Infraestrutura & Performance
- **Startups mais rápidos**: Evitar esperas longas quando ferramentas externas falham ([#25323](https://github.com/google-gemini/gemini-cli/issues/25323))
- **AST-aware tooling**: Navegação inteligente de código via análise sintática ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
- **Memory routing global vs. project**: Organização de preferências por escopo ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819))

### 🔒 Segurança & Permissões
- **Persistência de aprovações**: Policy engine deve respeitar "allow for all future sessions" ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916))
- **Detecção de SSH**: Adaptar comportamento para sessões remotas ([#24546](https://github.com/google-gemini/gemini-cli/issues/24546))

### 🎨 UX & Terminal
- **Scroll suave**: Corrigir flashes e jumpiness em chats longos ([#24470](https://github.com/google-gemini/gemini-cli/issues/24470))
- **Layout de tabelas streaming**: Evitar re-renders incrementais ([#25218](https://github.com/google-gemini/gemini-cli/issues/25218))
- **Remover bordas visuais**: UI limpa sem elementos gráficos intrusivos ([#24915](https://github.com/google-gemini/gemini-cli/issues/24915))

### 🤖 Agente & Memória
- **Proactive memory writes**: Main agent deve documentar preferências automaticamente ([#22809](https://github.com/google-gemini/gemini-cli/issues/22809))
- **Subagent awareness**: Agentes devem respeitar Approval Modes ativos ([#23582](https://github.com/google-gemini/gemini-cli/issues/23582))
- **Workspace argument**: Operar em diretório diferente do cwd ([#22861](https://github.com/google-gemini/gemini-cli/pull/22861))

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Problemas Críticos a Resolver

1. **403 PERMISSION_DENIED (P1)** — Afeta subset de Google One AI Premium subscribers. Diagnóstico em andamento, mas ainda sem root cause confirmada.

2. **YOLO quebrado (P0)** — Feature central de auto-aprovação não funciona desde v0.37.0. Prioridade máxima para correção.

3. **Windows Compatibility** — ripgrep EFTYPE bloqueia uso em máquinas Windows x64 com binário ARM.

### 🔧 Dores Recorrentes

| Problema | Frequência | Referências |
|----------|------------|-------------|
| Erros de permissão (403) | 🔴 Alta | [#24517](https://github.com/google-gemini/gemini-cli/issues/24517), [#25306](https://github.com/google-gemini/gemini-cli/issues/25306), [#25379](https://github.com/google-gemini/gemini-cli/issues/25379) |
| Rate limiting (429) | 🟠 Média | [#22545](https://github.com/google-gemini/gemini-cli/issues/22545) |
| Startup lento | 🟠 Média | [#25323](https://github.com/google-gemini/gemini-cli/issues/25323) |
| Travas em comandos shell | 🟡 Baixa | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) |

### 📋 Demandas Frequentes da Comunidade

- **Documentação**: Referência completa de tool argument keys, melhores práticas para contributors
- **CLI enhancements**: Subcomando `/commands list`, argumento `--workspace`
- **Testing**: Visual regression tests para SettingsDialog, component-level evaluations
- **Observability**: Verbose logging para skill loading, diagnostics de conexão MCP

---

*Relatório gerado em 2026-04-14. Dados extraídos de github.com/google-gemini/gemini-cli.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Relatório Diário da Comunidade GitHub Copilot CLI

**Data:** 14 de abril de 2026  
**Repositório:** [github.com/github/copilot-cli](https://github.com/github/copilot-cli)  
**Total de Issues Ativos:** 50

---

## 1. Destaques do Dia

O GitHub Copilot CLI alcançou dois marcos importantes nas últimas 24 horas. A versão **v1.0.25** trouxe melhorias significativas na instalação de servidores MCP via registry com configuração guiada diretamente na CLI, além de correções para sessões de login e persistência de modelos. A versão preliminar **v1.0.26-0** introduziu variáveis de ambiente para hooks de plugins e melhorias na navegação do seletor de sessão.

A comunidade reportou um problema crítico relacionado ao consumo excessivo de requisições premium, com usuários indicando que uma única solicitação pode consumir entre 80-100 requisições. Questões de autenticação e erros de política continuam sendo as principais dores de cabeça relatadas.

---

## 2. Lançamentos

### v1.0.26-0 (Pré-release)
**Link:** [Release v1.0.26-0](https://github.com/github/copilot-cli/releases/tag/v1.0.26-0)

**Adicionado:**
- Hooks de plugins agora recebem variáveis de ambiente `PLUGIN_ROOT`, `COPILOT_PLUGIN_ROOT` e `CLAUDE_PLUGIN_ROOT` contendo o diretório de instalação do plugin

**Melhorado:**
- Seletor de escopo de sessão no prompt de sincronização agora é mais proeminente e navegável por teclado com teclas seta esquerda/direita
- Melhorias em arquivos de instruções com padrões específicos

---

### v1.0.25
**Link:** [Release v1.0.25](https://github.com/github/copilot-cli/releases/tag/v1.0.25)

**Principais melhorias:**
- Instalação de servidores MCP do registry com configuração guiada diretamente na CLI
- Tecla Esc agora funciona corretamente após falha em busca de sessão `/resume`
- Modelo resolvido persistido no histórico de sessão e adiamento de mudanças de modelo durante turnos ativos
- Clientes ACP agora podem fornecer servidores MCP (stdio)

---

## 3. Issues em Evidência

### 🔴 #2591 - Consumo Excessivo de Requisições Premium
**Link:** [Issue #2591](https://github.com/github/copilot-cli/issues/2591) | 👎 11 | 💬 25 comentários

**Problema:** Uma única invocação de sessão resulta em consumo de 80-100 requisições premium, uma vez que cada resposta do agente após tool invocation ou thinking process dispara novas requisições.

**Importância:** Afeta diretamente o custo de uso do Copilot Pro/Enterprise. A comunidade demonstrou grande preocupação com 25 comentários discutindo impactos reais no orçamento.

---

### 🟠 #1703 - Modelos Organizacionais Não Listados Completamente
**Link:** [Issue #1703](https://github.com/github/copilot-cli/issues/1703) | 👎 32 | 💬 19 comentários

**Problema:** O Copilot CLI exibe lista reduzida de modelos comparado ao VS Code Copilot na mesma conta GitHub, mesmo quando modelos como Gemini 3.1 Pro estão habilitados nas configurações organizacionais.

**Importância:** Alto impacto com 32 👍. Usuários empresarial estão sendo forçados a usar Interface Gráfica para acessar modelos que já deveriam estar disponíveis via CLI.

---

### 🟠 #1595 - Bloqueio Esporádico de Política ao Buscar Modelos
**Link:** [Issue #1595](https://github.com/github/copilot-cli/issues/1595) | 👎 9 | 💬 23 comentários

**Problema:** Usuários com assinatura Copilot Enterprise válida recebem "access denied by Copilot policy" ao executar `/models`, mesmo com aproximadamente 40% das requisições premium restantes.

**Importância:** Inibe completamente o uso da CLI em ambientes corporativos. A discussão técnica indica problemas complexos de entitlement entre camadas de autenticação.

---

### 🟡 #2684 - Erro Constante de Autorização
**Link:** [Issue #2684](https://github.com/github/copilot-cli/issues/2684) | 👎 0 | 💬 11 comentários

**Problema:** Usuários logados recebem constantemente mensagens "Authorization error, you may need to run /login" durante o uso normal da CLI.

**Importância:** Afeta a experiência de uso básico, criando fricção mesmo para usuários autenticados. Criado hoje, mostra problema emergente.

---

### 🟡 #2688 - Erro de Autorização com Request ID
**Link:** [Issue #2688](https://github.com/github/copilot-cli/issues/2688) | 👎 0 | 💬 5 comentários

**Problema:** Similar ao #2684, com erro de autorização mesmo após login bem-sucedido. Conexão com GitHub MCP Server está estabelecida.

**Importância:** Problema de autenticação persistente indica possíveis bugs na validação de tokens ou estado de sessão.

---

### 🟡 #2393 - Incompatibilidade de Entitlements de Modelo
**Link:** [Issue #2393](https://github.com/github/copilot-cli/issues/2393) | 👎 0 | 💬 9 comentários

**Problema:** Mesma conta GitHub acessa modelos Claude no VS Code e github.com, mas CLI mostra modelos Claude apenas sob "Upgrade".

**Importância:** Fragmentação de experiência entre plataformas gera confusão e frustração em usuários que pagam pela mesma assinatura.

---

### 🟢 #1973 - Requisição: Whitelist de Ferramentas para Modo Interativo
**Link:** [Issue #1973](https://github.com/github/copilot-cli/issues/1973) | 👎 10 | 💬 7 comentários

**Problema:** Usuários querem aprovar automaticamente ferramentas read-only (grep, cat, find, git log) sem necessidade de confirmar cada chamada ou usar `/allow-all` que também aprova operações destrutivas.

**Importância:** Feature request com bom suporte da comunidade (10 👍). Melhoraria significativa a produtividade em fluxos de trabalho diário.

---

### 🟢 #13 - Modo de Input Vi/Vim
**Link:** [Issue #13](https://github.com/github/copilot-cli/issues/13) | 👎 48 | 💬 4 comentários

**Problema:** Usuários familiarizados com editores modais querem navegação e edição eficiente via teclado no modo interativo do Copilot CLI.

**Importância:** Com 48 👍, é uma das issues mais votadas. Implementação beneficiaria desenvolvedores que usam Vim/Neovim diariamente.

---

### 🔵 #2661 - Modelo Opus 4.5 Não Suportado
**Link:** [Issue #2661](https://github.com/github/copilot-cli/issues/2661) | 👎 0 | 💬 1 comentário

**Problema:** Modelo Opus 4.5 acessível no Student Pack e VS Code Copilot retorna erro "CAPIError: 400 The requested model is not supported" na CLI.

**Importância:** Usuários com direito legítimo ao modelo não conseguem utilizá-lo, indicando problema de alinhamento de capabilities.

---

### 🔵 #2176 - Servidores MCP Indisponíveis Após Atualização
**Link:** [Issue #2176](https://github.com/github/copilot-cli/issues/2176) | 👎 1 | 💬 4 comentários

**Problema:** Servidores MCP listados e habilitados não são mais reconhecidos pelo LLM após última atualização da CLI.

**Importância:** Afeta fluxo de trabalho integrado com ferramentas externas via MCP.

---

## 4. Progresso de PRs Importantes

Nenhum Pull Request foi atualizado nas últimas 24 horas. Esta é uma oportunidade para a comunidade contribuir com correções para os problemas críticos reportados, especialmente:

- **#2686** - Erro enganoso para contas Copilot Pro Trial (já closed)
- **#1824** - Seleção de modelo padrão (já closed)
- **#2643** - Confirmação de comandos reescritos via preToolUse hook
- **#2575** - Scroll de skills limitado a 66 itens

---

## 5. Tendências de Pedidos de Features

### 🔥 Modelos e Entitlements
A maioria esmagadora das issues está relacionada a problemas de acesso a modelos. Usuários querem:
- **Paridade total** com VS Code Copilot na listagem de modelos organizacionais
- **Configuração de modelo padrão** persistente
- **Clareza nos entitlements** — entender por que um modelo funciona em uma plataforma mas não em outra

### ⚙️ Melhorias de UX/Input
- **Modo Vi/Vim** (#13) com 48 👍
- **Whitelist de ferramentas** para Interactive Mode (#1973) com 10 👍
- **Suporte a Git Bash** no Windows (#508) com 3 👍

### 🔧 Integração e Plugins
- **Suporte a ACP ask_user/ask_question** (#2109)
- **Variáveis de ambiente para hooks** (implementado em v1.0.26-0)
- **Instalação guiada de servidores MCP** (implementado em v1.0.25)

### 🌍 Suporte a Idiomas/Keyboards
- **Tecla @ em teclado alemão** (#1999) — problema crítico que impede uso da CLI
- **X11 primary selection** (middle-click) quebrado desde v1.0.11 (#2413)

---

## 6. Pontos de Atenção para Desenvolvedores

### 🚨 Problemas Críticos Reportados

1. **Consumo excessivo de requisições (#2591):** Uma única interação pode consumir 80-100 requisições premium. Verificar lógica de counting de requisições em sessões agentivas.

2. **Autenticação intermitente (#2684, #2688):** Usuários logados recebem erros de autorização constante. Provável problema em cache de tokens ou validação de sessão.

3. **Bloqueio de modelos por política (#1595):** Usuários Enterprise válidos são bloqueados ao tentar listar modelos. Investigar alinhamento entre CAPI e políticas organizacionais.

### ⚠️ Dores Recorrentes

4. **Paridade de modelos VS Code vs CLI (#1703):** Usuários empresarial não entendem por que a CLI mostra menos modelos que a interface gráfica.

5. **Middle-click/X11 quebrado (#2413):** Desde v1.0.11, funcionalidade básica de paste está indisponível para usuários Linux via X11 forwarding.

6. **Tecla @ em teclados internacionais (#1999):** Desde v1.0.2, caracteres especiais de layouts não-US impedem uso da CLI.

### 📋 Funcionalidades Solicitadas Frequentemente

7. **Modelo padrão configurável (#1824):** Usuários querem evitar selecionar modelo a cada nova sessão.

8. **Aprovação automática de ferramentas read-only (#1973):** Reduzir fricção em Interactive Mode sem comprometer segurança.

9. **Navegação Vi/Vim (#13):** 48 desenvolvedores votaram nesta feature — forte demanda da comunidade.

10. **Esc não funciona em prompts (#2681):** Usuários ficam presos quando agente faz pergunta e pressionam Esc.

---

**Próxima atualização:** 2026-04-15

*Relatório gerado automaticamente com base em dados públicos do GitHub.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Relatório Diário da Comunidade Kimi Code CLI

**Data:** 2026-04-14  
**Repositório:** github.com/MoonshotAI/kimi-cli

---

## 1. Destaques do Dia

A equipe MoonshotAI liberou a versão **1.34.0** corrigindo um problema crítico que causava crash e freeze do terminal ao parar agentes em background. Simultaneously, a comunidade evidenciou preocupação com a remoção/exibição do thinking process, com múltiplos issues abertos sobre como visualizar ou controlar a extensão do raciocínio dos modelos k2.6-code-preview.

---

## 2. Lançamentos

### 🆕 v1.34.0 (2026-04-14)
**PR:** [#1875](https://github.com/MoonshotAI/kimi-cli/pull/1875)  
**Autor:** RealKai42

**Correções desde v1.33.0:**
- **Core:** Corrige crash do CLI ao usar `TaskStop` — parar um agente stuck em background não causa mais `Unhandled exception in event loop` nem freeze do terminal ([#1871](https://github.com/MoonshotAI/kimi-cli/pull/1871))
- **Shell:** Corrige alinhamento de diff inline com texto expandido de tabs
- **UX:** Adiciona configuração `show_thinking_stream` para controlar exibição do processo de raciocínio ([#1872](https://github.com/MoonshotAI/kimi-cli/pull/1872))

---

## 3. Issues em Evidência

### 🐛 #778 - API Error 400 "Invalid Request Error"
**Status:** OPEN | **Autor:** DayDreammy | **Comentários:** 14 | **👍:** 0  
🔗 [github.com/MoonshotAI/kimi-cli/issues/778](https://github.com/MoonshotAI/kimi-cli/issues/778)

**Por que importa:** Issue persistente desde janeiro com 14 comentários, indica problema de compatibilidade com clientes Windows/PowerShell na versão 2.1.23 usando claude-sonnet-4-5-20250929. community está buscando workarounds e diagnosticando causas raiz.

---

### 🔥 #1864 - Exibir traces completos do thinking
**Status:** OPEN | **Autor:** YunfanZhang42 | **Comentários:** 9 | **👍:** 8  
🔗 [github.com/MoonshotAI/kimi-cli/issues/1864](https://github.com/MoonshotAI/kimi-cli/issues/1864)

**Por que importa:** Feature request热门 com 8 upvotes. Usuários querem visibilidade total sobre o processo de raciocínio do modelo kimi-for-coding, especialmente no Linux. Correlaciona com issue #1865 sobre "negative optimization" ao remover thinking.

---

### ⚠️ #1865 - "thinking的过程为什么没了？这不纯纯负优化吗"
**Status:** OPEN | **Autor:** xueguoqing01 | **Comentários:** 3 | **👍:** 1  
🔗 [github.com/MoonshotAI/kimi-cli/issues/1865](https://github.com/MoonshotAI/kimi-cli/issues/1865)

**Por que importa:** Reclamação direta da comunidade sobre downgrade na experiência. Indica que mudanças recentes na exibição do thinking process impactaram sensação de segurança dos usuários.

---

### 🚨 #1874 - k2.6-code-preview consumindo 60000+ tokens em 51 rodadas
**Status:** OPEN | **Autor:** yang12535 | **Comentários:** 1 | **👍:** 0  
🔗 [github.com/MoonshotAI/kimi-cli/issues/1874](https://github.com/MoonshotAI/kimi-cli/issues/1874)

**Por que importa:** Relato detalhado de consumo excessivo de tokens com modelo k2.6-code-preview — 51 rodadas de self-thinking e 60.000+ tokens output. Usuário reporta impacto severo no workflow e impossibilidade de usar subagentes.

---

### 🔧 #1859 - Thinking过程没了 (mesmo problema)
**Status:** OPEN | **Autor:** guyujun | **Comentários:** 1 | **👍:** 0  
🔗 [github.com/MoonshotAI/kimi-cli/issues/1859](https://github.com/MoonshotAI/kimi-cli/issues/1859)

**Por que importa:** Terceiro issue sobre desaparecimento do thinking process, agora em Mac com versão 1.32.0. Corrobora padrão de problema sistêmico na experiência de raciocínio.

---

### 💡 #1873 - Instalação sem direitos de administrador
**Status:** OPEN | **Autor:** Greenplumwine | **Comentários:** 0 | **👍:** 0  
🔗 [github.com/MoonshotAI/kimi-cli/issues/1873](https://github.com/MoonshotAI/kimi-cli/issues/1873)

**Por que importa:** Feature request corporativa — ambientes Windows Enterprise não permitem install com privilégios admin. Impacta adoção em contextos enterprise.

---

### 🐛 #1869 - Emacs-style keybindings não funcionam no plan review
**Status:** OPEN | **Autor:** c31io | **Comentários:** 0 | **👍:** 0  
🔗 [github.com/MoonshotAI/kimi-cli/issues/1869](https://github.com/MoonshotAI/kimi-cli/issues/1869)

**Por que importa:** Usuários keyboard-centric no Windows NT reportam que keybindings estilo Emacs não funcionam durante revisão de planos. Afeta produtividade de desenvolvedores acostumados com workflow vi/emacs.

---

### ⚙️ #1867 - --yolo não deve auto-aprovar planos no Plan Mode
**Status:** OPEN | **Autor:** mechiland | **Comentários:** 0 | **👍:** 0  
🔗 [github.com/MoonshotAI/kimi-cli/issues/1867](https://github.com/MoonshotAI/kimi-cli/issues/1867)

**Por que importa:** Feature request com proposta detalhada de separar tool approval de plan review. Atualmente `--yolo` auto-aprova tudo, mas usuário argumenta que planos devem exigir confirmação mesmo em modo automático.

---

### 🐛 #1866 - Arquivos com nome UTF8 chinês causam erro no @file search
**Status:** OPEN | **Autor:** gstggsstt | **Comentários:** 0 | **👍:** 0  
🔗 [github.com/MoonshotAI/kimi-cli/issues/1866](https://github.com/MoonshotAI/kimi-cli/issues/1866)

**Por que importa:** Bug de encoding em repositórios com arquivos中文. Usuário Windows reporta crash ao digitar terceiro caractere na busca com @.

---

### 🐛 #1862 - FetchURL duplica body de issues GitHub
**Status:** OPEN | **Autor:** SherlockShemol | **Comentários:** 0 | **👍:** 0  
🔗 [github.com/MoonshotAI/kimi-cli/issues/1862](https://github.com/MoonshotAI/kimi-cli/issues/1862)

**Por que importa:** Bug de parsing que duplica conteúdo extraído de comments em issues GitHub. PR #1863 já addressing this.

---

## 4. Progresso de PRs Importantes

| PR | Status | Descrição | Link |
|---|---|---|---|
| #1871 | ✅ CLOSED | **fix(background):** Resolve reference lifecycle bug que causava crash ao cancelar tarefas background — tasks agora mantêm strong reference até cleanup do runner | [#1871](https://github.com/MoonshotAI/kimi-cli/pull/1871) |
| #1872 | ✅ CLOSED | **feat(shell):** Adiciona config `show_thinking_stream` + UX fixes para indicador de thinking compacto com tokens/segundo | [#1872](https://github.com/MoonshotAI/kimi-cli/pull/1872) |
| #1868 | 🔄 OPEN | **feat(ui):** Mostra tokens/segundo live durante streaming e média no fim do turno no shell UI | [#1868](https://github.com/MoonshotAI/kimi-cli/pull/1868) |
| #1870 | 🔄 OPEN | **docs(config):** Clarifica que chaves TOML com `.` precisam de aspas em providers/models config | [#1870](https://github.com/MoonshotAI/kimi-cli/pull/1870) |
| #1863 | 🔄 OPEN | **fix(fetch):** Suprime comments duplicados quando normaliza igual ao body principal em FetchURL | [#1863](https://github.com/MoonshotAI/kimi-cli/pull/1863) |
| #1818 | ✅ CLOSED | **feat:** Adiciona comando `list-sessions` para listar sessões existentes | [#1818](https://github.com/MoonshotAI/kimi-cli/pull/1818) |
| #1405 | 🔄 OPEN | **feat(web):** Estabelece infraestrutura de testes E2E com Playwright para frontend web | [#1405](https://github.com/MoonshotAI/kimi-cli/pull/1405) |
| #1767 | 🔄 OPEN | **feat(yolo-mode):** Adiciona suporte YOLO mode na interface web — toggle auto-approve no backend e UI | [#1767](https://github.com/MoonshotAI/kimi-cli/pull/1767) |
| #884 | 🔄 OPEN | **chore(deps):** Dependabot update — bump ruff de 0.14.14 para 0.15.0 | [#884](https://github.com/MoonshotAI/kimi-cli/pull/884) |
| #1236 | 🔄 OPEN | **feat(http):** Habilita `trust_env` na criação de aiohttp.ClientSession para respeitar variáveis de ambiente de proxy | [#1236](https://github.com/MoonshotAI/kimi-cli/pull/1236) |

---

## 5. Tendências de Pedidos de Features

Analisando as issues abertas, as direções mais solicitadas pela comunidade são:

### 🔮 Controlabilidade do Thinking Process
A comunidade demanda granularidade na exibição e controle de extensão do raciocínio:
- Exibição completa de traces de reasoning
- Configuração `show_thinking_stream` (já implementada em #1872)
- Controle sobre rodadas/comprimento do thinking
- Alternativa para desabilitar pensando excessivo

### 🏢 Suporte a Ambientes Corporativos
- Instalação sem privilégios admin (Windows Enterprise)
- Suporte a ambientes com proxy via `trust_env` (#1236)
- Configuração de headers customizados para providers

### ⌨️ Ergonomia e Acessibilidade
- Emacs-style keybindings funcionando corretamente
- Separar approval de planos da aprovação de tools em modo YOLO
- Listar sessões existentes (#1818 — merged)
- Live TPS display durante streaming (#1868)

### 🐛 Correções de Encoding/Edge Cases
- Suporte a filenames UTF8 chineses
- Deduplicação em extração de conteúdo web
- Alinhamento de diffs com tabs

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Prioridade Alta
| Problema | Impacto | Workaround |
|---|---|---|
| **Thinking process não aparece** (#1865, #1859) | Usuários sentem "negative optimization" | Config `show_thinking_stream` em #1872 |
| **k2.6-code-preview super verboso** (#1874) | 60k+ tokens/51 rodadas, workflow quebrado | Enfatizar task scope pesadamente |
| **Crash em TaskStop** (#1871) | Terminal freeze, exception no event loop | Atualizar para 1.34.0 |

### 🟡 Prioridade Média
| Dificuldade | Contexto |
|---|---|
| API Error 400 (#778) | Windows/PowerShell, versão 2.1.23, modelo claude-sonnet |
| Keybindings Emacs | Plan review no Windows, versão 1.25.0 |
| Chinese UTF8 filenames | Busca com @ no Windows |

### 🟢 Configurações Úteis
- **TOML keys com `.`:** Usar aspas — `"kimi-for-coding"` não `"kimi.forCoding"`
- **Proxy environments:** `trust_env` agora respeitado em sessões HTTP
- **New command:** `kimi list-sessions` disponível na 1.34.0

---

**Próximos passos recomendados:**
1. Testar `show_thinking_stream` config localmente
2. Verificar compatibility de keybindings no Windows
3. Monitorar issues de thinking length com k2.6-preview

---
*Relatório gerado automaticamente. Dados de github.com/MoonshotAI/kimi-cli em 2026-04-14.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# Relatório Diário da Comunidade OpenCode — 2026-04-14

---

## 1. Destaques do Dia

O dia foi marcado por **corridas de bug fixes significativas**, com foco em problemas de memória, compatibilidade com modelos de IA e correções de regressão. A comunidade demonstrou engajamento intenso na issue de autenticação Copilot (215 comentários), enquanto a equipe fechou múltiplos PRs relacionados à infraestrutura central — incluindo a resolução do problema de path do worker ripgrep em builds compilados e a desativação do mmap do SQLite para evitar crescimento descontrolado de memória. Duas featuresnotáveis foram merged: a invocação inline de skills com trigger `$` e a adição do CHANGELOG.md ao repositório.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O último release estável continua sendo **v1.4.3**, com changelog agora disponível no repositório via [PR #22442](https://github.com/anomalyco/opencode/pull/22442).

---

## 3. Issues em Evidência

### 3.1 [Copilot auth consome premium requests rapidamente](https://github.com/anomalyco/opencode/issues/8030) — #8030
**Prioridade:** Crítica | 💬 215 comentários | 👍 79

A issue mais comentada do projeto. Requests agent-initiated do Copilot estão sendo marcados incorretamente como "user", consumindo a cota premium. Afeta diretamente usuários com planos pagos. A comunidade aguarda correção — [PR #21167](https://github.com/anomalyco/opencode/pull/21167) propõe a correção.

---

### 3.2 [Opus 4.6: "This model does not support assistant message prefill"](https://github.com/anomalyco/opencode/issues/13768) — #13768
**Prioridade:** Alta | 💬 59 comentários | 👍 23

Usuários do Opus 4.6 enfrentam paralisações frequentes com mensagem de erro sobre prefill de mensagem assistant. Indica problema de compatibilidade entre a versão do modelo e o handling de contexto do OpenCode.

---

### 3.3 ["Preparing write..." permanentemente travado](https://github.com/anomalyco/opencode/issues/11112) — #11112
**Prioridade:** Alta | 💬 54 comentários | 👍 23

Bug recorrente onde a ferramenta de escrita trava indefinidamente, gerando loops de retry. Afeta fluxos de trabalho que dependem de escrita automática de arquivos.

---

### 3.4 [GPT 5.4 reasoning item error](https://github.com/anomalyco/opencode/issues/20698) — #20698
**Prioridade:** Média-Alta | 💬 14 comentários | 👍 3

Após 1-2 tool calls, modelos GPT 5.4 do Azure retornam erro de reasoning block malformado. Reproduzível tanto no TUI quanto na Web UI.

---

### 3.5 [Parsing de tags `<think>` e `<think>`](https://github.com/anomalyco/opencode/issues/11439) — #11439
**Prioridade:** Média | 💬 12 comentários | 👍 13

Feature request para estender suporte a tags de raciocínio em modelos que não possuem suporte nativo a extended thinking. Usuários desejam uniformizar a experiência de reasoning blocks.

---

### 3.6 [Comandos sudo quebram UI e travam agente](https://github.com/anomalyco/opencode/issues/1852) — #1852
**Prioridade:** Alta | 💬 11 comentários | 👍 11 | **STATUS:** CLOSED

Problema crônico onde ferramentas que requerem sudo não recebem input e causam hang. Closed, mas pode necessitar follow-up se persistir.

---

### 3.7 [Plugin install ignora registries npm privados](https://github.com/anomalyco/opencode/issues/21123) — #21123
**Prioridade:** Média | 💬 6 comentários | 👍 17

Após migração para `@npmcli/arborist`, configurações de scoped registry em `~/.npmrc` são ignoradas. [PR #22025](https://github.com/anomalyco/opencode/pull/22025) propõe correção — aguardando merge.

---

### 3.8 [Skill list injetado duas vezes por request](https://github.com/anomalyco/opencode/issues/22236) — #22236
**Prioridade:** Alta (performance) | 💬 2 comentários | 👍 0

Com 30+ skills, cada request LLM desperdiça 5.000–7.000 tokens por duplicação do skill list (no system prompt e no tool description). Impacta diretamente custo e contexto.

---

### 3.9 [MCP server timeout no Windows](https://github.com/anomalyco/opencode/issues/22310) — #22310
**Prioridade:** Média | 💬 3 comentários | 👍 0

Qualquer MCP server local configurado em `opencode.json` falha com timeout após 30s no Windows. Afeta usuários corporativos com ambientes restritos.

---

### 3.10 [AGENTS.md global ignorado quando projeto existe](https://github.com/anomalyco/opencode/issues/22020) — #22020
**Prioridade:** Média | 💬 7 comentários | 👍 1 | **STATUS:** CLOSED

Bug de precedência: global `~/.config/opencode/AGENTS.md` é silenciosamente ignorado quando existe `AGENTS.md` no projeto. Documentação promete suporte a ambos, mas comportamento não corresponde.

---

## 4. Progresso de PRs Importantes

### 4.1 [fix: Copilot x-initiator header](https://github.com/anomalyco/opencode/pull/21167) — aklajnert
Corrige o problema crítico de billing #8030. Garante que requests agent-initiated (como compaction messages) enviem header `X-Initiator: agent` ao Copilot, preservando quota premium do usuário.

---

### 4.2 [Add CHANGELOG.md to repository](https://github.com/anomalyco/opencode/pull/22442) — bensantora
Adiciona arquivo CHANGELOG.md ao repositório com release notes de v1.3.2 até v1.4.3. Melhora significativamente a documentação de mudanças para usuários e contribuidores.

---

### 4.3 [fix: disable SQLite mmap](https://github.com/anomalyco/opencode/pull/22428) — jiangliang79
Resolve problema de memória onde SQLite com mmap habilitado mapeia arquivo inteiro no address space. Causa crescimento de memória proporcional ao tamanho do banco. **Fecha #22429.**

---

### 4.4 [feat: inline skill invocation with $ trigger](https://github.com/anomalyco/opencode/pull/22435) — mario-loomia
Adiciona sintaxe `$skill-name` para invocação inline de skills no TUI. Inclui autocomplete com fuzzy search e carregamento dinâmico do SKILL.md.

---

### 4.5 [fix: resolve ripgrep worker path](https://github.com/anomalyco/opencode/pull/22431) + [#22436](https://github.com/anomalyco/opencode/pull/22436)
Corrige falha em binaries compilados (`bun build --compile`) que não localizavam `ripgrep.worker.ts`. Mantém fallback para modo source.

---

### 4.6 [fix(env): proxy to process.env](https://github.com/anomalyco/opencode/pull/12822) — jerome-benoit
Corrige dois bugs: (1) stale reads de env vars setadas após init, e (2) `Env.set()` que não propagava corretamente. Impacta plugins, auth flows e SDKs.

---

### 4.7 [fix(opencode): retry wrapped responses server errors](https://github.com/anomalyco/opencode/pull/22022) — tossp
Adiciona retry para erros `server_error` em wrapped Responses, aumentando resiliência contra falhas transitórias de providers.

---

### 4.8 [fix(plugin): load npm config before Arborist](https://github.com/anomalyco/opencode/pull/22025) — ghost91-
Corrige instalação de plugins de registries npm privados. Carrega configuração npm antes do Arborist, respeitando scoped registries.

---

### 4.9 [fix(provider): apply config model cost overrides](https://github.com/anomalyco/opencode/pull/17645) — mollux
Resolve gap onde preços de modelos do config existiam no resolved config mas não eram aplicados em runtime. **Fecha #17223.**

---

### 4.10 [fix(desktop): add CREATE_NO_WINDOW flag](https://github.com/anomalyco/opencode/pull/22445) — anmolxlight
Previne flashing de console window em Windows ao invocar subprocessos na desktop app. **Fecha #22414.**

---

## 5. Tendências de Pedidos de Features

### 5.1 Visibilidade de Métricas e Custo
A comunidade solicita consistentemente:
- **Token usage em tempo real no TUI** ([#13003](https://github.com/anomalyco/opencode/issues/13003) — 18👍)
- **Average TPS na status bar** ([#22344](https://github.com/anomalyco/opencode/issues/22344))
- **Informações de usage limit para planos Pro** ([#17614](https://github.com/anomalyco/opencode/issues/17614))

**Direção:** Consumidores querem controle de custo e transparência em tempo real.

---

### 5.2 Flexibilidade de Execution Runtime
- **Opt-in Host-Shell Execution com stdin passthrough** ([#18659](https://github.com/anomalyco/opencode/issues/18659)) — para sudo, SSH, prompts interativos
- **Cooldown-aware failover** em rate limits e falhas temporárias ([#16867](https://github.com/anomalyco/opencode/issues/16867))
- **OpenCode como SDK/runtime** estilo Claude Agents SDK ([#6182](https://github.com/anomalyco/opencode/issues/6182))

**Direção:** De tool CLI para plataforma de agentes flexível.

---

### 5.3 UX e Verbosity
- **Opção para less verbose output** ([#18494](https://github.com/anomalyco/opencode/issues/18494)) — thinking blocks considerados verbosos demais
- **Mobile touch optimization** ([#18767](https://github.com/anomalyco/opencode/pull/18767)) — experiência mobile

**Direção:** Usuários querem granularidade de detalhe e adaptação a diferentes contextos de uso.

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Problemas Críticos Ativos
| Issue | Problema | Impacto |
|-------|----------|---------|
| [#8030](https://github.com/anomalyco/opencode/issues/8030) | Copilot billing incorreto | **Financeiro** — users perdem quota premium |
| [#22236](https://github.com/anomalyco/opencode/issues/22236) | Skills duplicadas (5-7K tokens/request) | **Custo e contexto** — desperdiça budget |
| [#22428](https://github.com/anomalyco/opencode/pull/22428) | SQLite mmap memory leak | **Estabilidade** — memory grows with DB |

---

### 🟡 Padrões Recorrentes
1. **Compatibilidade de Modelos**: Issues com Opus 4.6 e GPT 5.4 indicam necessidade de handler mais resiliente para diferentes versões de modelos e providers.

2. **Windows como Second-Class Citizen**: Múltiplas issues específicas de Windows (MCP timeout, console flash, path resolution) sugerem necessidade de mais testes cross-platform.

3. **Configuração e precedence**: Bugs entre global vs. project-level configs (AGENTS.md, npmrc) indicam lógica de merge/consolidation imprecisa.

4. **Subprocessos e Permissões**: Comandos que requerem sudo/elevação continuam problemáticos — indica gap entre isolamento de sandbox e necessidade de interação.

---

### 🟢 Oportunidades de Contribuição
| Área | Descrição | Links |
|------|-----------|-------|
| Performance | Investigar e otimizar token usage por request | [#22236](https://github.com/anomalyco/opencode/issues/22236), [#13003](https://github.com/anomalyco/opencode/issues/13003) |
| Platform | Windows compatibility pass | [#22310](https://github.com/anomalyco/opencode/issues/22310), [#22445](https://github.com/anomalyco/opencode/pull/22445) |
| DX | Verbosity controls e UX customization | [#18494](https://github.com/anomalyco/opencode/issues/18494), [#18659](https://github.com/anomalyco/opencode/issues/18659) |
| Docs | Custom LSP servers, exemplos avançados | [PR #22443](https://github.com/anomalyco/opencode/pull/22443) |

---

*Relatório gerado em 2026-04-14 com base em dados do GitHub (anomalyco/opencode).*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# 📊 Relatório Diário da Comunidade Pi — 2026-04-14

---

## 1. Destaques do Dia

O dia foi marcado por uma **explosão de contribuições da comunidade**: 24 issues fechadas e 14 PRs mesclados em 24 horas. O destaque principal é a introdução de **multiplexação de terminal com split panes e abas** (#3158), além de melhorias significativas no markup de links via OSC 8 (#3102) e correções críticas de segurança como a validação de argumentos em Cloudflare Workers (#3112) e o pin vulnerável do `fast-xml-parser` (#2970). A versão 0.67.1 também trouxe telemetria anônima para tracking de uso.

---

## 2. Lançamentos

| Versão | Data | Mudanças Principais |
|--------|------|---------------------|
| **v0.67.1** | 2026-04-14 | Correção de bugs da 0.67.0 |
| **v0.67.0** | 2026-04-13 | Telemetria anônima: modo interativo agora envia um ping leve para `https://pi.dev/install?version=x.y.z` após gravar `lastChangelogVersion` no `settings.json`. Proporciona sinal de uso por versão para entender adoção de releases. |

> **Nota:** A telemetria é minimalista e anônima. Busca rastrear engajamento sem coleta de dados pessoais.

---

## 3. Issues em Evidência

### 🔴 Corretivas Urgentes

**1. [#2970](https://github.com/badlogic/pi-mono/issues/2970) — `fast-xml-parser` pinned em versão vulnerável** *(2 comentários, em progresso)*
O root `package.json` sobrepõe `fast-xml-parser` para `5.3.8`, afetado por duas advisories de alta severidade (GHSA-8gc5-j5rx-235r e GHSA-jp2q-39xq-3w4g). **Impacto:** Segurança do projeto comprometida. A comunidade aguarda atualização do lockfile.

**2. [#3112](https://github.com/badlogic/pi-mono/issues/3112) — Tool arguments não validados em Cloudflare Workers** *(3 comentários, fechado)*
`validateToolArguments` pula validação em Cloudflare Workers. Ferramentas recebem parâmetros inválidos (campos faltantes, tipos errados). **Solução implementada** — fecha brecha de segurança em ambientes serverless.

**3. [#2988](https://github.com/badlogic/pi-mono/issues/2988) — Multiline content envia cada linha separadamente** *(4 comentários, fechado)*
Copiar saída do browser console faz o Pi enviar 1 linha = 1 mensagem. Bug presente há várias releases. **Importância:** Afeta experiência em debugging e workflow.

**4. [#2850](https://github.com/badlogic/pi-mono/issues/2850) — `/exit` documentado mas não implementado** *(4 comentários, fechado)*
README lista `/exit` como comando de saída, mas apenas `/quit` funciona. **Comunidade reagiu** com frustração — documentação enganosa impacta onboarding.

**5. [#3148](https://github.com/badlogic/pi-mono/issues/3148) — Ferramenta `find` congela Pi ao buscar `~`** *(1 comentário, fechado)*
Implementação síncrona bloqueia event loop ao inspecionar diretórios grandes como home. **Problema crítico** em workflows de inspeção de configs.

**6. [#3156](https://github.com/badlogic/pi-mono/issues/3156) — Session replay crash com `RangeError` em toolResults massivos** *(1 comentário, fechado)*
Replay de sessões com `toolResult` de dezenas de MB causa `RangeError: Invalid array length`. Afeta depuração e história de conversas.

---

### 🟡 Melhorias de UX e Acessibilidade

**7. [#3103](https://github.com/badlogic/pi-mono/issues/3103) — Markdown links devem ser clicáveis via OSC 8** *(5 comentários, fechado)*
O componente Markdown estiliza links (underline, cor) mas não envolve em sequências OSC 8, então não são clicáveis em terminais modernos. **Resultado:** Links funcionais em Kitty, iTerm2, Ghostty, WezTerm, Windows Terminal.

**8. [#3146](https://github.com/badlogic/pi-mono/issues/3146) — Sticky bottom: editor e footer pinned ao fundo do terminal** *(1 comentário, fechado)*
Editor e footer pulam verticalmente conforme chat cresce, desorientando. Solução mantém prompt fixo, melhorando experiência de digitação.

**9. [#3005](https://github.com/badlogic/pi-mono/issues/3005) — Mensagem "UPDATE AVAILABLE" toggleable** *(2 comentários, aberto)*
Usuários NixOS e outros flows complexos querem desabilitar o banner amarelo intrusivo. **Discussão ativa** sobre integrar à config "Quiet startup".

**10. [#3152](https://github.com/badlogic/pi-mono/issues/3152) — Model ID mostrado em vez do nome no TUI** *(1 comentário, fechado)*
Providers externos com UUID como model ID mostram identificadores crípticos. Usuário pediu nome legível no UI.

---

## 4. Progresso de PRs Importantes

| PR | Descrição | Impacto |
|----|-----------|---------|
| **[#3158](https://github.com/badlogic/pi-mono/pull/3158)** | Terminal multiplexer com split panes, tabs e suporte PTY | **Feature estrela** — permite múltiplas sessões agentes lado a lado no estilo tmux |
| **[#3157](https://github.com/badlogic/pi-mono/pull/3157)** | Corrige `/reload` causando CPU constante | Bug crítico — loader não fazia cleanup adequado |
| **[#3153](https://github.com/badlogic/pi-mono/pull/3153)** | Melhor guidance para erros TLS e fallback prompt | UX de erro amigável, detecta interceptação SSL |
| **[#3149](https://github.com/badlogic/pi-mono/pull/3149)** | Adiciona instruções de instalação via `mise` | Alternativa moderna de package management |
| **[#3116](https://github.com/badlogic/pi-mono/pull/3116)** | `sourceInfoStyle` configurável para tags de autocomplete | Reduz ruído visual, mais espaço para descrições |
| **[#3102](https://github.com/badlogic/pi-mono/pull/3102)** | Wraps markdown links em OSC 8 hyperlink sequences | Links clicáveis no terminal |
| **[#3125](https://github.com/badlogic/pi-mono/pull/3125)** | Bearer token auth para Bedrock Converse API | Alternativa a credenciais IAM para AWS |
| **[#3111](https://github.com/badlogic/pi-mono/pull/3111)** | Super keybinding support para Kitty protocol | Keybindings como `super+k` agora funcionam |
| **[#3092](https://github.com/badlogic/pi-mono/pull/3092)** | Preserva coluna do cursor ao entrar/sair de paste marker | Correção de UX de edição |
| **[#3091](https://github.com/badlogic/pi-mono/pull/3091)** | Flush queued messages após tree navigation | Mensagens em branch summarization não ficavam órfãs |

---

## 5. Tendências de Pedidos de Features

### 🏆 Temas Mais Solicitados

| Tema | Evidência | Popularidade |
|------|-----------|--------------|
| **Suporte a modelos locais** | [#3151](https://github.com/badlogic/pi-mono/issues/3151) — `/local` command para Ollama/LM Studio/vLLM | 🔥🔥🔥 Alta demanda |
| **Expansão de caminhos** | [#2986](https://github.com/badlogic/pi-mono/issues/2986) — Suporte `~` e `$HOME` no `settings.json` | Alta |
| **Melhorias no sistema de extensões** | [#3088](https://github.com/badlogic/pi-mono/issues/3088) — Inline extension factories para `main()` | Média-alta |
| **Autenticação flexível** | [#3144](https://github.com/badlogic/pi-mono/issues/3144) — `auth.json` no nível do repo | Média |
| **Custom providers** | Adições como Opper AI (#3140) e Bearer token Bedrock (#3125) | Crescente |
| **Controle de UI** | Toggle update banner (#3005), sticky footer (#3146) | UX consistente |

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Dores Recorrentes Identificadas

| Problema | Frequência | Mitigação |
|----------|------------|-----------|
| **Performance de ferramentas síncronas** | Múltiplos reports (#3148, ferramentas de busca) | Buscar alternativas async para operações de I/O |
| **Inconsistência terminal/ambiente** | tmux keybindings (#2989), Ctrl+Alt matching | Verificar compatibilidade Kitty protocol e tmux |
| **Segurança de dependências** | `fast-xml-parser` vulnerável (#2970), `node-domexception` deprecated (#2042) | Auditoria regular de deps, pins de segurança |
| **Documentação vs implementação** | `/exit` ausente (#2850), code fences quebrados (#3126) | Sincronizar README com código |
| **UX de erros** | TLS interception (#3153), generic fetch failures | Mensagens acionáveis e debug info |
| **Validação de inputs** | Cloudflare Workers sem validação (#3112) | Coverage de testes em ambientes serverless |

### 🔧 Demanda Técnica Lateral

- **Provedores customizados** estão em alta — comunidade adiciona Opper AI, Bearer auth Bedrock, OpenRouter fields completos
- **Extensibility** é pivô central — inline factories para `main()`, `loadProjectContextFiles()` exportado (#3142), async-tasks extension (#3143)
- **Telemetria** introduzida (v0.67) sinaliza movimento para analytics de uso — antecipe necessidade de opt-out

---

*Relatório gerado automaticamente via análise de dados do GitHub. Para contribuir, visite [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Relatório Qwen Code — 14 de abril de 2026

## 1. Destaques do Dia

O ecossistema Qwen Code manteve intensa atividade com 47 pull requests atualizados nas últimas 24h. As principais contribuições focaram em **melhorias de UX no VS Code** (como a correção de overflow em títulos de abas e bounces de scroll), **expansão do sistema de hooks** com suporte a HTTP e condições baseadas em LLM, e **novos comandos slash** (`/batch`, `/history`, `/branch`) que fortalecem a plataforma de comandos. Em issues, destaque para relatos persistentes de loops infinitos e lentidão no WebFetch.

---

## 2. Lançamentos

Não houve releases oficiais documentados nas informações fornecidas hoje.

---

## 3. Issues em Evidência

### 🔴 #350 — Loop infinito com erro de API
**Link:** https://github.com/QwenLM/qwen-code/issues/350

Um usuário reportou que, ao pedir à IA para corrigir erros de compilação, o sistema entra em loop infinito — comportamento crítico que trava completamente a sessão. A comunidade reagiu com 5 reações de apoio, indicando que é um problema recorrente.

---

### 🔴 #3114 — WebFetch extremamente lento
**Link:** https://github.com/QwenLM/qwen-code/issues/3114

Issue aberto recentemente (10/04) pedindo otimização de performance. O usuário relata que fetch de duas páginas leva **3 minutos**, contrastando com a velocidade do Codex. É uma reclamação prioritária pois impacta diretamente a produtividade.

---

### 🟡 #2873 — Abas do VS Code ocupam toda a barra
**Link:** https://github.com/QwenLM/qwen-code/issues/2873

Títulos de sessões longas faziam as abas do VS Code se expandirem infinitamente, quebrando a interface. **Este problema já foi corrigido no PR #3249**, demonstrando resposta rápida da equipe.

---

### 🟡 #2669 — Permissões não persistem no Windows 11 CMD
**Link:** https://github.com/QwenLM/qwen-code/issues/2669

Usuários Windows reportam que selecionar "Always allow in this project" não funciona — a ferramenta continua pedindo confirmação a cada execução. Afeta principalmente fluxos de trabalho com Git.

---

### 🟡 #353 — Arquivos salvos com `\n` literal em vez de quebras de linha
**Link:** https://github.com/QwenLM/qwen-code/issues/353

Ao criar arquivos Python, o Qwen Code escrevia `import json\n` em vez de criar linhas separadas. Problema crítico para confiabilidade do código gerado.

---

### 🟡 #196 — Comando /copy gera encoding乱码
**Link:** https://github.com/QwenLM/qwen-code/issues/196

O texto aparece correto no terminal, mas ao copiar via `/copy`, caracteres especiais se corrompem. Impacta usuários que precisam transferir código gerado.

---

### 🟡 #3234 — Nomear/indexar conversas para facilitar recuperação
**Link:** https://github.com/QwenLM/qwen-code/issues/3234

Usuários não conseguem identificar conversas passadas (identificadas apenas por UUIDs). Feature request com crescente demanda para organização de trabalho em projetos longos.

---

### 🟡 #210 — Encoding: aspas simples escapa incorretamente
**Link:** https://github.com/QwenLM/qwen-code/issues/210

O modelo gera `row[0] == row[1] == row[2] != \' \':` mas o arquivo recebe `\'` literal, causando erros de sintaxe.

---

### 🟡 #375 — Inferência muito lenta
**Link:** https://github.com/QwenLM/qwen-code/issues/375

Usuário free tier relata que o sistema fica "preso" entre processos, tornando a ferramenta inutilizável. Requer atenção da equipe de infraestrutura.

---

### 🟡 #418 — Configuração de token limit por requisição
**Link:** https://github.com/QwenLM/qwen-code/issues/418

Atualmente apenas `sessionTokenLimit` é configurável. Feature request para controle granular por requisição, útil para otimizar custos.

---

## 4. Progresso de PRs Importantes

### 📦 #3249 — Limitar comprimento de títulos de abas (CLOSED ✅)
**Link:** https://github.com/QwenLM/qwen-code/pull/3249

Corrige o issue #2873 implementando `truncatePanelTitle()` com máximo de 50 code points Unicode, evitando quebra de emojis e truncando títulos longos uniformemente.

---

### 📦 #3246 — Detectar erros de rate-limit em frames SSE (CLOSED ✅)
**Link:** https://github.com/QwenLM/qwen-code/pull/3246

Subagentes usando DashScope agora detectam erros `Throttling.AllocationQuota` (429) e fornecem mensagens claras em vez de falhar silenciosamente.

---

### 📦 #3251 — Permitir respostas-only em fluxos GeminiChat (OPEN)
**Link:** https://github.com/QwenLM/qwen-code/pull/3251

Resolve o erro "Model stream ended with empty response text" em modelos de raciocínio (qwen3-thinking, qwen-plus-thinking) durante tarefas de code review.

---

### 📦 #3087 — Sistema auto-memory e auto-dream (OPEN)
**Link:** https://github.com/QwenLM/qwen-code/pull/3087

Alinha os subsystems `extract` e `dream` com padrões do Claude Code e corrige bug crítico que impedia `extract` de funcionar em uso normal.

---

### 📦 #3079 — Novo comando /batch para operações paralelas (OPEN)
**Link:** https://github.com/QwenLM/qwen-code/pull/3079

Adiciona skill `/batch` para orquestrar mudanças em massa usando glob patterns, dividindo arquivos em chunks para processamento paralelo com worker agents. Suporta modo `--dry-run`.

---

### 📦 #3261 — Comando /history para gerenciar sessões salvas (OPEN)
**Link:** https://github.com/QwenLM/qwen-code/pull/3261

Expõe funcionalidades existentes de exclusão de sessões através de um comando slash integrado, facilitando o gerenciamento de histórico.

---

### 📦 #3248 — Hooks completos para ACP (OPEN)
**Link:** https://github.com/QwenLM/qwen-code/pull/3248

Implementa lifecycle hooks (SessionStart/SessionEnd), interceptação de prompts (UserPromptSubmit), hooks de ferramenta (PreToolUse/PostToolUse) e hooks de stop — alinhando ACP com a implementação core.

---

### 📦 #3258 — Diagnósticos para falhas silenciosas de PTY no macOS (OPEN)
**Link:** https://github.com/QwenLM/qwen-code/pull/3258

Adiciona logging de debug e mensagens acionáveis quando comandos PTY falham com exit code 1 e sem output — problema conhecido do node-pty.

---

### 📦 #3022 — Comando /branch para bifurcação de sessões (CLOSED ✅)
**Link:** https://github.com/QwenLM/qwen-code/pull/3022

Permite fork de conversas em qualquer ponto. Sessões bifurcadas são cópias independentes com nomes collision-aware ("My Task (Branch)", "My Task (Branch 2)").

---

### 📦 #2827 — HTTP Hook, Function Hook e Async Hook (OPEN)
**Link:** https://github.com/QwenLM/qwen-code/pull/2827

Sistema abrangente de extensões com HTTP Hook (POST com interpolação de variáveis e proteção SSRF), Function Hook para SDK, e Async Hook para operações assíncronas.

---

## 5. Tendências de Pedidos de Features

### 🎯 Sistema de Hooks e Extensibilidade
A comunidade demonstra forte interesse em um **sistema de hooks robusto**. Multiple PRs (#2990, #3248, #2827) buscam adicionar:
- Hooks HTTP para integração com serviços externos
- Hooks condicionais baseados em LLM
- Lifecycle hooks completos para sessões

---

### 🎯 Comandos Slash Especializados
Diversos pedidos por novos comandos:
- `/batch` — operações em lote paralelas
- `/history` — gerenciamento de sessões salvas
- `/branch` — bifurcação de conversas
- `/account` — display de informações da conta
- Suporte a `@` para autocomplete de arquivos em comandos

---

### 🎯 Gerenciamento de Memória e Contexto
Feature requests incluem:
- **Naming de conversas** para facilitar recuperação (issue #3234)
- **Auto-memory e auto-dream** mais inteligentes (PR #3087)
- **Configuração de token limit por requisição** (issue #418)

---

### 🎯 Plataforma de Comandos Unificada
Proposta ambiciosa no issue #3244: transformar o módulo de comandos de uma "UI附属 capability" em uma **unified command platform** com registry, resolver e executor arquitetura.

---

### 🎯 Performance e Velocidade
Reclamações recorrentes sobre:
- WebFetch lento (3 minutos para 2 páginas)
- Inferência geral lenta, especialmente em free tier
- Necessidade de otimização de rate-limit handling

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Problemas Críticos Persistentes

1. **Loops infinitos (issues #350, #223)** — O modelo entra em comportamento repetitivo ao tentar corrigir erros. Recurso anti-loop ativado mas ainda insuficientes em alguns cenários.

2. **Encoding e newlines (issues #353, #210, #196)** — Múltiplos reports de arquivos sendo salvos com sequências `\n` literais em vez de quebras de linha reais, causando código quebrado.

3. **Permissões não persistem (issue #2669)** — No Windows CMD, opções "Always allow" não funcionam, causando prompts repetitivos constantes.

---

### 🟡 Dores Recorrentes

4. **Performance inconsistente** — Usuários free tier relatam lentidão crítica; WebFetch especificamente está muito abaixo de alternativas.

5. **Integração com terminais** — Problemas específicos em CMD/PowerShell, macOS PTY e terminals sem suporte a hyperlinks.

6. **Configuração limitada** — Ausência de configuração por requisição, lógica de thinking models hardcoded, e falta de account display integrado.

---

### 🟢 Demandas Frequentes

7. **UX/UI** — Truncamento de títulos, autocomplete com `@`, modal de account, e atalhos mais descobriveis.

8. **Extensibilidade** — Hooks HTTP/Function/Async, prompt hooks condicionais, e integração com IDEs como Kilo Code.

9. **Fluxo de trabalho** — Operações batch paralelas, branching de sessões, e message rewrite middleware.

10. **Developer experience** — Melhor logging de erros, diagnósticos acionáveis, e mensagens de erro mais claras (não "Command exited with code: 1").

---

*Relatório gerado automaticamente com base em issues e PRs do repositório QwenLM/qwen-code em 14/04/2026.*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*