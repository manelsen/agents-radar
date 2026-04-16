# Relatório diário da comunidade de ferramentas AI CLI 2026-04-16

> Gerado em: 2026-04-16 02:05 UTC | Ferramentas cobertas: 8

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

# Relatório Comparativo do Ecossistema AI CLI
## 16 de abril de 2026

---

## 1. Panorama do Ecossistema

O ecossistema de ferramentas AI CLI demonstra maturidade crescente com estratégias de diferenciação claras. **Claude Code** lidera em engajamento comunitário (741👍 em uma única issue) mas enfrenta crises de confiança após remoção silenciosa de features. **OpenAI Codex** prioriza infraestrutura de plataforma (marketplace, cloud environments) enquanto lida com dores de custo recorrentes. **Gemini CLI** e **Qwen Code** enfrentam transições turbulentas — erros 403 generalizados em um, descontinuação abrupta de tier gratuito no outro — sinalizando que provedores base estão pressionando modelos de monetização. **OpenCode** e **Pi** emergem como alternativas com alta cadência de manutenção (19 e 29 PRs fechados, respectivamente), sugerindo foco em estabilidade e correções ao invés de features disruptive. A ausência de dados do **GitHub Copilot CLI** indica possível estagnação ou reestruturação interna.

---

## 2. Comparação de Atividade

| Ferramenta | Releases (24h) | Issues Ativas | PRs Ativos | Issue Principal | Engajamento |
|------------|----------------|---------------|------------|----------------|-------------|
| **Claude Code** | 2 | ~50 | ~25 | `/buddy` removal | 741👍, 178💬 |
| **OpenAI Codex** | 4 (stable + alphas) | ~50 | ~50 | Token burning | 222👍, 542💬 |
| **Gemini CLI** | 2 | ~15 | ~10 | Erro 403 auth | 16💬 |
| **Kimi Code CLI** | 1 | 14 | 10 | Thinking process | 11💬 |
| **OpenCode** | 2 | ~20 | ~15 | Memory leaks | 32👍, 48💬 |
| **Pi** | 1 | ~15 | ~20 | Bash orphans | 8💬 |
| **Qwen Code** | 1 + nightlies | 44 | 40 | OAuth free tier | 51💬 |
| **Copilot CLI** | — | dados indisponíveis | — | — | — |

**Observação:** Qwen Code lidera em volume absoluto de atividade (44 issues, 40 PRs), seguido por OpenAI Codex. OpenCode e Pi demonstram a maior eficiência de merge (19 e 29 PRs fechados, respectivamente), indicando equipes de manutenção ágeis.

---

## 3. Direções de Features Compartilhadas

### 🧠 Processamento de Reasoning/Thinking Visível
Três comunidades enfrentam problemas relacionados à transparência do reasoning:
- **Claude Code**: indicador de pensamento estendido com hint de progresso
- **Kimi Code CLI**: regressão no streaming de traces de raciocínio (#1864, 11💬)
- **OpenCode**: MiniMax-M2.7 reasoning não exibido (#22684)

**Conclusão:** A comunidade espera controle granular sobre como o processo de raciocínio dos modelos é exibido — streaming completo, toggle compacto, ou indicadores visuais.

### 🔐 Autenticação e Autorização
Erros de autenticação aparecem em todas as plataformas principais:
- **Gemini CLI**: 403 PERMISSION_DENIED em múltiplas contas (#25306, 16💬)
- **Qwen Code**: OAuth auth succeeds mas requests falham (#3281)
- **Claude Code**: Login com auth code quebrado no Linux (#47669, **[RESOLVIDA]**)

**Conclusão:** Provedores estão endurecendo políticas de autenticação, causando fricção significativa. Usuários esperam fluxos mais resilientes com fallbacks claros.

### 🔌 MCP (Model Context Protocol) Abstração
Desenvolvimento consistente em todas as ferramentas:
- **OpenAI Codex**: Stack de 8 PRs abstraindo lançamento de servidores MCP stdio (#17986)
- **Gemini CLI**: Verificação de código de erro MCP replacing string matching (#25381)
- **Pi**: Renderizadores customizados para ferramentas com `renderShell: "self"`
- **Kimi Code CLI**: Web UI trava quando MCP server falha (#1897)
- **Qwen Code**: MCP client limitado a 2 conexões — production broken (#3277)

**Conclusão:** MCP está se tornando standard, mas implementações variam em robustez. Limites artificiais (Qwen) e problemas de lifecycle (Pi) indicam área madura para consolidação.

### 🪝 Sistemas de Hooks e Extensibilidade
Três ferramentas avançam em hooks:
- **Claude Code**: Stop hook para persistir propostas (#48714)
- **Qwen Code**: HTTP Hook, Function Hook, Async Hook completos (#2827)
- **OpenCode**: `/tui` e `/config` slash commands para ergonomia (#16912)

**Conclusão:** O ecossistema converge para hooks como mecanismo primário de extensibilidade, especialmente para integração empresarial.

### 💾 Gerenciamento de Sessão e Memória
Preocupações recorrentes em duas comunidades:
- **OpenCode**: Megathread de memory leak com 48 comentários (#20695)
- **Pi**: 811 processos bash órfãos consumindo ~90GB (#3057)
- **Claude Code**: Plugin `preserve-session` para UUID path-independent (#39148)

**Conclusão:** Sessões longas são realidade — o ecossistema precisa de estratégias robustas para persistência, cleanup e detecção de vazamentos.

---

## 4. Análise de Diferenciação

| Dimensão | Claude Code | OpenAI Codex | Gemini CLI | Qwen Code | OpenCode/Pi |
|----------|-------------|--------------|------------|-----------|-------------|
| **Posicionamento** | Developer experience premium | Plataforma enterprise | Integração Google ecosystem | Alternative open | Alternativa modular |
| **Público-alvo** | Desenvolvedores individuais heavy users | Equipes enterprise | Usuários Google/GCP | Developers price-sensitive | Usuários técnicos que valorizam controle |
| **Foco técnico** | TUI, features de produtividade | Marketplace, cloud exec, MCP infrastructure | Auth resilience, agent stability | Hooks, performance | Code cleanup, compatibilidade |
| **Modelo de monetização** | Assinatura Max (20x) | Business seat-based | Google One AI Pro | OAuth free tier discontinued | Subscription tier |
| **Diferencial** | CLI mais madura, maior base de usuários | Ecossistema de plugins | Integração Gemini | Customização via hooks | Abertura a múltiplos providers |
| **Fraqueza atual** | Crise de confiança pós-`/buddy` | Token burning problem | Auth 403 generalizada | Breaking change no OAuth | Memory leaks sem root cause clara |

**Insight estratégico:** Claude Code e OpenAI Codex competem diretamente pelo mesmo público enterprise, mas com filosofias diferentes — Anthropic prioriza UX da CLI enquanto OpenAI investe em plataforma. Qwen Code representa risco de adoção por mudanças abruptas de pricing. OpenCode e Pi ocupam nicho de desenvolvedores que preferem flexibilidade a integração nativa.

---

## 5. Tração e Maturidade da Comunidade

### Ranking de Engajamento (por volume de discussão)

1. **OpenAI Codex** — 542 comentários na issue de token burning, 50+ PRs ativos
2. **Claude Code** — 741👍 em issue única, 178 comentários, 2 releases em 24h
3. **Qwen Code** — 51 comentários sobre OAuth, 40 PRs, ritmo intenso
4. **OpenCode** — 48 comentários no megathread, 19 PRs fechados em 24h
5. **Gemini CLI** — 16 comentários em issue de auth, mas crescimento de PRs nightlies
6. **Pi** — 29 PRs mergeados, comunidade menor mas consistente
7. **Kimi Code CLI** — 14 issues abertas, atividade moderada

### Velocidade de Iteração

| Ferramenta | Releases/semana (estimativa) | PRs fechados (24h) | Tempo de resposta a bugs |
|------------|-------------------------------|-------------------|--------------------------|
| **OpenAI Codex** | ~3-4 stable + alphas | ~5-8 | Alta prioridade em ~48h |
| **Claude Code** | ~2-3 | ~1-2 | Bug crítico resolvido (#47669) |
| **Qwen Code** | ~1 stable + nightlies | ~10-15 | Rápido em bugs críticos |
| **OpenCode** | ~1-2 | ~19 | Alto volume de cleanup |
| **Pi** | ~1 | ~29 | Alto volume de manutenção |
| **Gemini CLI** | ~1 patch + nightlies | ~2-3 | Autenticação ainda não resolvida |

### Análise de maturidade

**Alta maturidade:** Claude Code e OpenAI Codex possuem processos estabelecidos de release, triagem de issues, e resposta a comunidade. OpenCode demonstra maturidade em práticas de engineering (cleanup massivo, namespaces desempacotados).

**Maturidade média:** Qwen Code move rápido mas demonstra immaturidade em comunicação (descontinuação abrupta do free tier sem warning adequado). Gemini CLI apresenta regressões recorrentes em auth.

**Maturidade baixa/crescente:** Kimi Code CLI e Pi funcionam bem localmente mas enfrentam bugs de compatibilidade (encoding, MCP stability).

---

## 6. Sinais de Tendência

### 📌 Consolidação do Modelo de Monetização
A descontinuação do tier gratuito do Qwen Code (#3203, 51💬) em conjunto com os erros 403 generalizados no Gemini indicam que provedores base estão endurecendo políticas. ожидается que outras ferramentas enfrentem pressão similar. **Implicação:** Comunidades provavelmente migrarão para alternativas self-hosted ou provedores com pricing mais transparente.

### 📌 MCP como Standard de Facto
Oito PRs no Codex abstraindo MCP stdio (#17986), verificações de código de erro MCP no Gemini (#25381), e problemas de compatibilidade no Qwen (#3277) confirmam que MCP está se tornando interface universal. **Implicação:** Ferramentas que não suportarem MCP nativamente arriscam marginalização.

### 📌 Pressão de Custo em Sessions Longas
Token burning no Codex (#14593, 542💬) e quota exhaustion no Claude (#43274) revelam que desenvolvedores estão usando CLIs intensivamente. **Implicação:** Features de context compaction, session preservation, e modelos mais eficientes serão prioritários.

### 📌 Fragmentação de Auth Flow
Três plataformas diferentes, três comportamentos de auth diferentes. Claude (OAuth code), Gemini (403 errors), Qwen (auth succeeds but requests fail). **Implicação:** Usuários enterprise com multi-provider setups enfrentarão fricção operacional significativa.

### 📌 Investimento em Hooks e Extensibilidade
Qwen Code (#2827), Claude (#48714, #39148), e OpenCode (#16912) estão convergindo para hooks como mecanismo de extensibilidade. **Implicação:** O ecossistema está amadurecendo para uso enterprise — a próxima fronteira é a integração com CI/CD e policy engines.

### 📌 Conflito Entre CLI e App Feature Parity
Requests recorrentes para paridade CLI ↔ App no Codex (#11325, 141👍) indicam que desenvolvedores esperam features consistentes independentemente da interface. **Implicação:** Ferramentas que não investirem em paridade arriscam fragmentação da experiência do usuário.

---

## Resumo Executivo

| Aspecto | Líder | Tendência |
|---------|-------|-----------|
| **Engajamento comunitário** | Claude Code (741👍) | Estável |
| **Velocidade de desenvolvimento** | Qwen Code / OpenCode | Acelerando |
| **Maturidade de features** | OpenAI Codex | Alta |
| **Preocupações críticas** | Auth/Quota em todas | Escalando |
| **Convergência técnica** | MCP, Hooks, Memory mgmt | Claro |
| **Risco de churn** | Qwen Code (OAuth), Gemini (403) | Alto |

**Recomendações para decisores:**
1. **Para seleção de tool:** Priorizar Claude Code ou OpenAI Codex para estabilidade; considerar OpenCode/Pi para flexibilidade
2. **Para planejamento de migração:** Preparar fallback para auth issues — não confiar em único provedor
3. **Para contribuições:** Áreas de hook system e MCP compatibility possuem menor competition e alto impacto
4. **Para monitoramento:** Token burning e memory leaks são problemas sistêmicos que afetam todas as ferramentas

---

## Relatórios detalhados por ferramenta

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Destaques da comunidade Claude Code Skills

> Fonte: [anthropics/skills](https://github.com/anthropics/skills)

⚠️ Falha ao gerar o resumo de Skills.

---

# Relatório Diário da Comunidade Claude Code
## 📅 16 de abril de 2026

---

## 1. Destaques do Dia

A Anthropic выпустила duas atualizações em 24h — **v2.1.110** e **v2.1.109** — com foco na experiência do TUI, incluindo o novo comando `/tui` com rendering fullscreen sem flicker e melhorias no indicador de pensamento estendido. A comunidade demonstra intenso engajamento em torno do pedido de restauração do comando `/buddy`, que já acumula **741 reações positivas**, enquanto múltiplos bugs críticos são reportados, incluindo falhas de autenticação no Linux e problemas de permissões no macOS.

---

## 2. Lançamentos

### v2.1.110
**Link:** [Release v2.1.110](https://github.com/anthropics/claude-code/releases/tag/v2.1.110)

| Mudança | Descrição |
|---------|-----------|
| ➕ Comando `/tui` | Novo comando e setting `tui` para rendering fullscreen sem flicker — execute `/tui fullscreen` na mesma conversa |
| ⌨️ `Ctrl+O` redesignado | Agora alterna entre transcript normal e verbose; a view de foco é controlada separadamente pelo novo comando `/focus` |

### v2.1.109
**Link:** [Release v2.1.109](https://github.com/anthropics/claude-code/releases/tag/v2.1.109)

| Mudança | Descrição |
|---------|-----------|
| 🎨 Extended-thinking indicator | Adicionado hint de progresso rotativo ao indicador de pensamento estendido |

---

## 3. Issues em Evidência

### 1. 🚨 "Bring Back Buddy" — Plea da Comunidade
**Issue:** [#45596](https://github.com/anthropics/claude-code/issues/45596) | 👎 741 | 💬 178

> **Por que importa:** Em 9 de abril, o comando `/buddy` desapareceu silenciosamente da v2.1.97 — sem changelog, sem aviso. Milhares de desenvolvedores abriram seus terminais e encontraram `Unknown skill: buddy`. É a issue com maior engajamento da semana.

**Reação da comunidade:** Thread extremamente ativa com 178 comentários, indicando forte apego emocional ao recurso.

---

### 2. 🐛 Login com Auth Code Quebrado no Linux
**Issue:** [#47669](https://github.com/anthropics/claude-code/issues/47669) | 👎 58 | 💬 45 | **[RESOLVIDA]**

> **Por que importa:** Autenticação via código OAuth por colagem não funciona na plataforma Linux — usuários ficam bloqueados de usar o produto. Bug crítico de autenticação multi-plataforma.

---

### 3. ⚠️ Bypass de Permissões Quebrado no macOS
**Issue:** [#36168](https://github.com/anthropics/claude-code/issues/36168) | 👎 47 | 💬 43

> **Por que importa:** O bypass de permissões está completamente quebrado em todas as versões acima da v2.1.77 no macOS. Muitos desenvolvedores dependem desse recurso para automações críticas.

---

### 4. 💡 Feature: Suporte Amazon Bedrock
**Issue:** [#32668](https://github.com/anthropics/claude-code/issues/32668) | 👎 169 | 💬 36

> **Por que importa:** Request com alto interesse (169 👍) para adicionar Amazon Bedrock como backend alternativo para Claude Desktop e Cowork, similar ao suporte já existente na CLI via `CLAUDE_CODE_USE_BEDROCK=1`. Clientes enterprise aguardam essa funcionalidade.

---

### 5. 🖥️ Cowork VM Falha no Windows ARM64
**Issue:** [#40198](https://github.com/anthropics/claude-code/issues/40198) | 👎 4 | 💬 27

> **Por que importa:** Usuários do Samsung Galaxy Book4 Edge e outros dispositivos Snapdragon não conseguem iniciar o Cowork VM. Bug específico de plataforma que afeta a nova geração de laptops ARM no Windows.

---

### 6. 📱 Dispatch Offline Despite Cowork Funcionando
**Issue:** [#45937](https://github.com/anthropics/claude-code/issues/45937) | 👎 6 | 💬 14

> **Por que importa:** A conversa principal do Dispatch mostra "desktop appears offline" no cliente móvel, mesmo quando o desktop está funcionando normalmente. Apenas tarefas Cowork individuais são afetadas, não o Cowork completo.

---

### 7. 📉 Performance Degradada do Claude Opus
**Issue:** [#47546](https://github.com/anthropics/claude-code/issues/47546) | 👎 0 | 💬 9

> **Por que importa:** Usuários reportam que o Claude Opus 4.6 apresenta má antecipação algorítmica e performance em geração de código, resultando em saídas de baixa qualidade no VSCode Windows.

---

### 8. ⏱️ Ultraplan Stream Idle Timeout
**Issue:** [#47252](https://github.com/anthropics/claude-code/issues/47252) | 👎 2 | 💬 7

> **Por que importa:** O refinement "ultraplan" falha consistentemente com `API Error: Stream idle timeout - partial response received`. A UI de approval nunca aparece, impedindo o uso do recurso.

---

### 9. 🔄 --resume Perde Contexto com --worktree
**Issue:** [#28769](https://github.com/anthropics/claude-code/issues/28769) | 👎 11 | 💬 6

> **Por que importa:** Quando uma sessão usa `--worktree <nome>` e depois é resumida via `--resume`, o contexto é perdido. Usuários de projetos com múltiplos worktrees enfrentam workflows quebrados.

---

### 10. 💸 Max 20x Quota Esgota em ~1 Hora
**Issue:** [#43274](https://github.com/anthropics/claude-code/issues/43274) | 👎 4 | 💬 4

> **Por que importa:** Equipe pagante de $400/mês (Max 20x + 2x Max 5x) reporta que a quota do plano principal esgota em 60-90 minutos desde 23 de março. Produto se torna inutilizável para equipes.

---

### Issues Críticas Criadas Hoje (16/04)

| Issue | Tema | Link |
|-------|------|------|
| #48870 | Claude Code broken no VSCode Windows | [#48870](https://github.com/anthropics/claude-code/issues/48870) |
| #48889 | Agent Teams falha após brew upgrade | [#48889](https://github.com/anthropics/claude-code/issues/48889) |
| #47886 | Degradação de qualidade da API Claude | [#47886](https://github.com/anthropics/claude-code/issues/47886) |

---

## 4. Progresso de PRs Importantes

### 1. 🔧 preserve-session: Histórico de Sessão Persistente
**PR:** [#39148](https://github.com/anthropics/claude-code/pull/39148) | Status: **ABERTO**

> Adiciona plugin `preserve-session` que preserva o histórico de sessões quando diretórios de projeto são renomeados, movidos ou copiados. Usa UUID path-independent para identificar projetos.

---

### 2. 📝 Stop Hook: Persistência de Propostas
**PR:** [#48714](https://github.com/anthropics/claude-code/pull/48714) | Status: **ABERTO**

> Adiciona exemplo de Stop hook em `examples/hooks/` que persiste blocos de propostas (opções, alternativas) das respostas do assistente em `PROPOSALS.md`, sobrevivendo a crashes e compaction.

---

### 3. 🧹 subagent-cleanup: Limpeza de Processos Órfãos
**PR:** [#47830](https://github.com/anthropics/claude-code/pull/47830) | Status: **ABERTO**

> Plugin que termina processos subagent órfãos (`claude --resume`) no início da sessão, prevenindo vazamentos de CPU/memória que se acumulam entre sessões.

---

### 4. 🔒 semgrep-run-shell-injection Fix
**PR:** [#48377](https://github.com/anthropics/claude-code/pull/48377) | Status: **ABERTO**

> Correção de regra Semgrep para vulnerabilidade de shell injection em `run:` steps que usam interpolação `${{...}}` com GitHub context data.

---

### 5. 📚 Plugin Dev: Correções de Metadados (6 PRs)
**PRs:** [#48353](https://github.com/anthropics/claude-code/pull/48353), [#48351](https://github.com/anthropics/claude-code/pull/48351), [#48352](https://github.com/anthropics/claude-code/pull/48352), [#48350](https://github.com/anthropics/claude-code/pull/48350), [#48349](https://github.com/anthropics/claude-code/pull/48349), [#48348](https://github.com/anthropics/claude-code/pull/48348) | Status: **ABERTO**

> Séria de correções de frontmatter YAML em plugins do `pr-review-toolkit` e `plugin-dev`, alinhando nomes de skills com diretórios e corrigindo problemas de parsing do agnix.

---

### 6. 🌟 Feature: Open Source Claude Code ✨
**PR:** [#41447](https://github.com/anthropics/claude-code/pull/41447) | Status: **ABERTO**

> Pull request para open source do Claude Code. Fecharia múltiplas issues antigas (#59, #456, #2846, #22002, #41434). Gera grande expectativa na comunidade.

---

## 5. Tendências de Pedidos de Features

Baseado nas issues com mais engajamento, as direções mais demandadas pela comunidade são:

### 🏆 Prioridade Alta

| Tendência | Evidence | Link |
|-----------|----------|------|
| **Restaurar `/buddy`** | 741 👍, 178 💬 — maior engajamento da semana | [#45596](https://github.com/anthropics/claude-code/issues/45596) |
| **Suporte Amazon Bedrock como backend** | 169 👍 — feature request enterprise | [#32668](https://github.com/anthropics/claude-code/issues/32668) |
| **Plugin para JetBrains IDEs** | feature request para interface nativa | [#47166](https://github.com/anthropics/claude-code/issues/47166) |
| **Hot-reload de MCP servers** | demanda recorrente por flexibilidade | [#46426](https://github.com/anthropics/claude-code/issues/46426) |

### 📈 Crescentes

| Tendência | Evidence | Link |
|-----------|----------|------|
| **Preservar histórico entre renomeações de diretório** | PR com demo visual | [#39148](https://github.com/anthropics/claude-code/pull/39148) |
| **Melhorias no Ultraplan** | múltiplos bugs relacionados | [#47252](https://github.com/anthropics/claude-code/issues/47252) |
| **Agent Teams estabilidade** | novos bugs reportados após brew upgrade | [#48889](https://github.com/anthropics/claude-code/issues/48889) |

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Problemas Críticos Ativos

1. **Autenticação quebrada no Linux** — Login via código OAuth por colagem não funciona ([#47669](https://github.com/anthropics/claude-code/issues/47669))

2. **Permissões macOS bloqueando automações** — Bypass de permissões quebrado desde v2.1.78 ([#36168](https://github.com/anthropics/claude-code/issues/36168))

3. **Quota Max 20x esgotando prematuramente** — $200/mês consumidos em ~1h ([#43274](https://github.com/anthropics/claude-code/issues/43274))

4. **Degradação de qualidade do Claude Opus** — API apresentando comportamento inadequado ([#47886](https://github.com/anthropics/claude-code/issues/47886))

### 🟡 Dores Recorrentes

| Dor | Frequência | Workaround Atual |
|-----|------------|------------------|
| **MCP servers requerem restart de sessão** | Alta | Reiniciar sessão para carregar novos MCPs |
| **Ultraplan com erros de API** | Média | Aguardar ou usar planning padrão |
| **Subagent Write tool bloqueia filenames específicos** | Baixa | Renomear arquivos de report/summary/etc |
| **Cowork em ARM64 Windows** | Baixa | Usar versão x64 ou macOS |

### 🟢 Oportunidades de Contribuição

| Área | Tipo | Links |
|------|------|-------|
| **Plugins de productividade** | Extensões para hooks, session preservation | [#39148](https://github.com/anthropics/claude-code/pull/39148), [#48714](https://github.com/anthropics/claude-code/pull/48714) |
| **Correções de YAML frontmatter** | Documentação/sintaxe | Múltiplos PRs do @Rohan5commit |
| **Segurança CI/CD** | Semgrep rules | [#48377](https://github.com/anthropics/claude-code/pull/48377) |

---

## Resumo Executivo

| Métrica | Valor |
|---------|-------|
| Releases (24h) | 2 (v2.1.110, v2.1.109) |
| Issues abertas/fechadas | ~50 total, 2 fechadas |
| PRs abertos/fechados | ~25 total, 1 fechado |
| Issue mais comentada | #45596 (178 comentários) |
| Issue com mais 👍 | #45596 (741) |
| Feature mais pedida | Restauração do `/buddy` |

---

*Relatório gerado em 2026-04-16. Dados extraídos de [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Relatório Diário da Comunidade OpenAI Codex — 16/04/2026

---

## 1. Destaques do Dia

A release **rust-v0.121.0** marca um marco significativo com a introdução do comando `codex marketplace add`, permitindo a instalação de marketplaces de plugins diretamente de repositórios Git, URLs de diretórios locais e arquivos `marketplace.json`. O TUI recebeu melhorias no histórico de prompts com busca reversa por `Ctrl+R`. No front de Issues, a comunidade continua ativa com problemas recorrentes de CPU/memória no macOS e problemas de sandbox em Windows/Linux. A pipeline de PRs demonstra foco em infraestrutura de ambientes em nuvem, gerenciamento de permissões e refatoração do sistema de mensagens.

---

## 2. Lançamentos

### rust-v0.121.0 (Estável)
**Link:** `https://github.com/openai/codex/releases/tag/rust-v0.121.0`

**Mudanças principais:**
- **`codex marketplace add`**: Novo comando para instalar plugin marketplaces a partir de repositórios Git, URLs git, diretórios locais e URLs diretas de `marketplace.json` (PRs #17087, #17717, #17756).
- **Melhorias no TUI**: history improvements com suporte a `Ctrl+R` para busca reversa e recall local.

### rust-v0.122.0-alpha.1
**Link:** `https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.1`

Release alpha inicial da próxima versão, sinalizando trabalho ativo em novos recursos.

### rust-v0.121.0-alpha.11 a alpha.14
Versões intermediárias de desenvolvimento, indicando iterações frequentes no ciclo de release.

---

## 3. Issues em Evidência

### 1. #14593 — Burning tokens very fast
**Link:** https://github.com/openai/codex/issues/14593  
**Estatísticas:** 542 💬 | 222 👍 | Status: OPEN

**Por que importa:** Issue de maior engajamento do dia. Usuários com assinatura Business reportam consumo acelerado de tokens, levantando preocupações sobre custo-benefício e possível vazamento de contexto. A alta volumetria de comentários indica uma dor sistêmica.

**Reação da comunidade:** Desconforto generalizado, especialmente entre usuários Windows Pro com VS Code. Vários usuários confirmam o problema.

---

### 2. #16231 — High CPU usage on macOS após atualização
**Link:** https://github.com/openai/codex/issues/16231  
**Estatísticas:** 37 💬 | 51 👍 | Status: OPEN

**Por que importa:** Problema de regressão afeta especificamente macOS Apple Silicon (M5 Pro), causando alta temperatura e uso intenso de CPU após a atualização do VS Code extension. Regressões em performance são críticas para experiência do desenvolvedor.

**Reação da comunidade:** Usuários confirmam em diferentes versões do macOS, sugerindo problema não isolado.

---

### 3. #11325 — Manual /compact command no Codex app
**Link:** https://github.com/openai/codex/issues/11325  
**Estatísticas:** 51 💬 | 141 👍 | Status: OPEN

**Por que importa:** Enhancement com alta aprovação (141 👍). Usuários querem controle manual sobre compactação de contexto, disponível no CLI mas ausente no app. Afeta diretamente workflows de projetos longos.

**Reação da comunidade:** Forte demanda por paridade de features entre CLI e app.

---

### 4. #8648 — Codex responde mensagens antigas em vez da mais recente
**Link:** https://github.com/openai/codex/issues/8648  
**Estatísticas:** 41 💬 | 33 👍 | Status: OPEN

**Por que importa:** Bug de confusão em conversas multi-mensagem onde o modelo responde perguntas anteriores em vez do prompt atual. Compromete confiabilidade em sessões de debugging.

**Reação da comunidade:** Frustração crescente, especialmente em sessões técnicas complexas.

---

### 5. #17615 — "I'm sorry, but I cannot assist with that request" (AZURE)
**Link:** https://github.com/openai/codex/issues/17615  
**Estatísticas:** 27 💬 | 18 👍 | Status: CLOSED

**Por que importa:** Bug crítico de safety-check em implantações Azure, bloqueando uso legítimo. Foi fechado, indicando resolução.

**Reação da comunidade:** Alívio entre usuários Azure, mas questionamentos sobre root cause permanecem.

---

### 6. #8259 — Formatar tabelas Markdown para legibilidade humana
**Link:** https://github.com/openai/codex/issues/8259  
**Estatísticas:** 22 💬 | 62 👍 | Status: OPEN

**Por que importa:** Enhancement simples mas de alto impacto visual. Tabelas geradas por Codex possuem espaçamento quebrado, afetando legibilidade em PRs e documentação.

**Reação da comunidade:** Alta aprovação (62 👍) demonstra que é um incômodo comum.

---

### 7. #14346 — Context Compaction Hanging
**Link:** https://github.com/openai/codex/issues/14346  
**Estatísticas:** 20 💬 | 19 👍 | Status: OPEN

**Por que importa:** Relacionado ao Issue #11325. A funcionalidade de compactação trava em vez de operar corretamente, bloqueando sessões longas.

**Reação da comunidade:** Usuários Pro relatam deadlock em modelos "5.4, Extra High".

---

### 8. #17624 — Review tab travado em "Loading diff" no Windows
**Link:** https://github.com/openai/codex/issues/17624  
**Estatísticas:** 15 💬 | 13 👍 | Status: OPEN

**Por que importa:** Bug específico de Windows onde caminhos com `/F:/...` são passados literalmente ao git diff. Quebra feature de code review integrada.

**Reação da comunidade:** Usuários Windows Pro afetados, com workaround via CLI não disponível.

---

### 9. #12241 — Failed to apply patch constantemente
**Link:** https://github.com/openai/codex/issues/12241  
**Estatísticas:** 14 💬 | 3 👍 | Status: OPEN

**Por que importa:** Falhas persistentes em aplicação de patches, mesmo em versões recentes. Problema fundamental de reliability para tool-calls.

**Reação da comunidade:** Frustração de usuários pagantes (subscrição $200) com comportamento inconsistente.

---

### 10. #16127 — "yeet skill" é excessivamente opinativo
**Link:** https://github.com/openai/codex/issues/16127  
**Estatísticas:** 7 💬 | 4 👍 | Status: OPEN

**Por que importa:** Skill adiciona tags e branch names automaticamente sem consentimento. Demonstra necessidade de controles de opt-in para automações.

**Reação da comunidade:** Usuários questionam comportamento "opinionado" de skills, pedindo configurabilidade.

---

## 4. Progresso de PRs Importantes

### 1. #18042 — Yolo skip managed-network tool enforcement
**Link:** https://github.com/openai/codex/pull/18042  
**Autor:** won-openai | **Status:** OPEN

Modifica `DangerFullAccess`/yolo para opt-out completo de managed-network enforcement, resolvindo inconsistências onde yolo ainda aplicava `enforce_managed_network=true`.

---

### 2. #18040 — Revisit shared approval prompting
**Link:** https://github.com/openai/codex/pull/18040  
**Autor:** abhinav-oai | **Status:** OPEN

Revisita PR anterior com críticas válidas. Mantém escopo mais estreito para centralizar approval prompting, preparando terreno para o upcoming PermissionRequest hook.

---

### 3. #17986 — [4/8] Abstract MCP stdio server launching
**Link:** https://github.com/openai/codex/pull/17986  
**Autor:** aibrahim-oai | **Status:** OPEN

Parte de uma stack de 8 PRs abstraindo lançamento de servidores MCP stdio. Move startup de processos stdio para um launcher trait, mantendo comportamento existente enquanto explicita criação de transport.

---

### 4. #18044 — Add cloud exec environments
**Link:** https://github.com/openai/codex/pull/18044  
**Autor:** apanasenko-oai | **Status:** OPEN

Adiciona suporte a ambientes em nuvem para flow exec-server, permitindo `codex exec-server --cloud` registrar ou reconectar executors via cloud environments service.

---

### 5. #18032 — Add environment registry support
**Link:** https://github.com/openai/codex/pull/18032  
**Autor:** starr-openai | **Status:** OPEN

Adiciona `EnvironmentManager` registry por environment ID, plumb de seleção de ambiente através de APIs de thread/start e fs, com suporte a registro/listagem de ambientes.

---

### 6. #17305 — Add sorting/backwardsCursor to thread/list
**Link:** https://github.com/openai/codex/pull/17305  
**Autor:** ddr-oai | **Status:** OPEN

Melhora performance de UI com `sortDirection` em `thread/list` e `backwardsCursor` para paginação bidirecional, essencial para app responsiveness.

---

### 7. #17425 — Auto-upgrade configured marketplaces
**Link:** https://github.com/openai/codex/pull/17425  
**Autor:** xli-oai | **Status:** OPEN

Implementa auto-upgrade best-effort para marketplaces Git configurados em `config.toml`, rastreando `last_revision` para evitar work desnecessário.

---

### 8. #17877 — Display YOLO mode permissions when launching TUI
**Link:** https://github.com/openai/codex/pull/17877  
**Autor:** canvrno-oai | **Status:** CLOSED

Melhora UX exibindo YOLO mode no header do TUI quando `approval_policy = "never"` e `sandbox_mode = "danger-full-access"`.

---

### 9. #18035 — Refactor AGENTS.md discovery into AgentsMdManager
**Link:** https://github.com/openai/codex/pull/18035  
**Autor:** pakrym-oai | **Status:** OPEN

Centraliza descoberta e parsing de AGENTS.md em `AgentsMdManager`, removendo helpers de crates públicos e preparando para updates de config.

---

### 10. #17978 — Persist and prewarm agent tasks per thread
**Link:** https://github.com/openai/codex/pull/17978  
**Autor:** adrian-openai | **Status:** OPEN

Persiste registered agent tasks no session state update stream para reuso por thread, com prewarming após identity registration. Melhora tempos de inicialização de sessões.

---

## 5. Tendências de Pedidos de Features

### A. Paridade CLI ↔ App
Múltiplas issues (#11325, #8259) pedem features disponíveis no CLI mas ausentes no app. A comunidade espera consistência entre interfaces.

### B. Controles de Permissão Granulares
Issues como #18005 ("Allow Windows users to run in no sandbox mode") e #16127 ("yeet skill opt-in") indicam demanda por configurabilidade de sandbox e automações.

### C. Model Selection Dinâmica
Issues #14969 e #13206 pedem `plan_model` config para `/plan` mode e seleção de modelo por implementação, sugerindo workflows multi-model.

### D. Melhorias de Performance em macOS
Bugs de CPU/GPU (#16231, #10530, #16857) e sandbox IOKit (#17644) indicam necessidade de otimização específica para Apple Silicon.

### E. Managed Network/Sandbox Flexibility
PRs #18042 e #18005 mostram desenvolvimento ativo paradar mais controle sobre políticas de segurança, especialmente para power users.

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Problemas Recorrentes Críticos

1. **Token burning (#14593)**: 542 comentários — Usuários Business reportam consumo acelerado. Verificar configurações de contexto e rate limits.

2. **CPU/Memory macOS (#16231, #10530)**: Regressão após atualização. Considerar rollback ou workaround de extensão de versão.

3. **Patch failures (#12241)**: Tool-calls falham constantemente. Pode afetar automações de refactoring.

### 🟡 Dores Frequentes

4. **Sandbox em Linux (#17525)**: Ubuntu exige skip sandbox para edits normais. Impacta workflows de desenvolvimento.

5. **File links no Windows (#17649)**: Links de arquivos no VS Code extension não funcionam. Afeta navegação em code review.

6. **Context compaction (#14346)**: Trava em vez de funcionar. Crítico para sessões longas.

### 🟢 Direções de Desenvolvimento Recomendadas

7. **Marketplace plugins**: Novo comando `marketplace add` em rust-v0.121.0 abre ecosistema de extensões.

8. **Cloud environments**: PRs #18044 e #18032 indicam foco em exec-server em nuvem.

9. **MCP abstraction**: Stack de PRs preparando infraestrutura para MCP tooling mais robusta.

10. **Config async loading**: PR #18022 prepara loading de configs de executors, sinalizando arquitetura distribuída.

---

**Relatório gerado em:** 16/04/2026  
**Fonte:** github.com/openai/codex  
**Total de Issues nas últimas 24h:** 50 | **Total de PRs:** 50

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Relatório Diário da Comunidade Gemini CLI
## 📅 2026-04-16

---

## 1. Destaques do Dia

A equipe liberou a versão **v0.38.1** como patch corretivo para a v0.38.0, enquanto a build **v0.40.0-nightly** continua avançando com melhorias no MCP e documentação do agente generalista. A comunidade apresenta alta atividade em problemas de autenticação (erros 403), com 16+ comentários na issue #25306, indicando uma questão recorrente que afeta múltiplos usuários.

---

## 2. Lançamentos

### v0.40.0-nightly.20260415.g06e7621b2
| Aspecto | Detalhes |
|---------|----------|
| **Tipo** | Build nightly |
| **Data** | 2026-04-15 |

**Mudanças incluídas:**
- **docs(core):** Atualização da documentação do agente generalista ([#25325](https://github.com/google-gemini/gemini-cli/pull/25325)) por @abhipatel12
- **chore(mcp):** Substituição de correspondência de string frágil por verificação de código de erro MCP ([#25381](https://github.com/google-gemini/gemini-cli/pull/25381)) por @jackwotherspoon
- **feat(plan):** Melhorias no planejamento (detalhes parciais)

---

### v0.38.1
| Aspecto | Detalhes |
|---------|----------|
| **Tipo** | Patch release |
| **Data** | 2026-04-15 |
| **PR** | [#25466](https://github.com/google-gemini/gemini-cli/pull/25466) |

**Mudanças incluídas:**
- Cherry-pick do commit `050c303` para a branch `release/v0.38.0-pr-25317`
- Correção de regressão identificada na versão v0.38.0
- Changelog disponível em [#25476](https://github.com/google-gemini/gemini-cli/pull/25476)

**Full Changelog:** https://github.com/google-gemini/gemini-cli/compare/v0.38.0...v0.38.1

---

## 3. Issues em Evidência

### 🔴 #25306 — Erro 403: "The caller does not have permission"
**Link:** https://github.com/google-gemini/gemini-cli/issues/25306  
**Área:** security | **Status:** need-triage  
**Engajamento:** 16 comentários | 4 👍

**Por que importa:** Este é o problema com maior engajamento nas últimas 24h, indicando uma interrupção significativa para usuários. O erro 403 impede completamente o uso da CLI, afetando tanto contas pessoais quanto Google One AI Pro.

---

### 🔴 #25431 — 403 PERMISSION_DENIED com oauth-personal em Google One AI Pro
**Link:** https://github.com/google-gemini/gemini-cli/issues/25431  
**Área:** security | **Status:** need-triage  
**Engajamento:** 6 comentários

**Por que importa:** Relacionado a #25189, #25425 e #24747, este é um problema recorrente de autenticação que afeta especificamente usuários de Google One AI Pro com "Sign in with Google". A CLI reconhece o plano corretamente mas falha em todas as requisições.

---

### 🟡 #25323 — RipGrep: download lento bloqueia inicialização
**Link:** https://github.com/google-gemini/gemini-cli/issues/25323  
**Área:** core | **Status:** need-triage  
**Engajamento:** 6 comentários

**Por que importa:** Usuários sem acesso ao GitHub enfrentam esperas de 2+ minutos na inicialização. A proposta é implementar fail-fast para erros de acesso negado e considerar bundling do RipGrep.

---

### 🟡 #24916 — Permissões solicitadas repetidamente
**Link:** https://github.com/google-gemini/gemini-cli/issues/24916  
**Área:** security | **Status:** workstream-rollup  
**Engajamento:** 3 comentários

**Por que importa:** Usuários relatam que instruções "allow" ou "allow for all future sessions" não persistem, causando fricção constante no fluxo de trabalho.

---

### 🟡 #25166 — Shell travado em "Waiting input"
**Link:** https://github.com/google-gemini/gemini-cli/issues/25166  
**Área:** core | **Status:** workstream-rollup  
**Engajamento:** 2 comentários | 1 👍

**Por que importa:** Comandos shell simples travam após execução, causando UX degradada. O problema é reproduzível com comandos que não aguardam input.

---

### 🟡 #25216 — EISDIR em caminho temporário no Windows
**Link:** https://github.com/google-gemini/gemini-cli/issues/25216  
**Área:** core | **Status:** workstream-rollup  
**Engajamento:** 1 comentário

**Por que importa:** Erro crítico ao executar `gemini --yolo` em PowerShell no Windows, causando crash com `EISDIR: illegal operation on a directory`.

---

### 🟢 #22745 — EPIC: Avaliar impacto de leituras AST-aware
**Link:** https://github.com/google-gemini/gemini-cli/issues/22745  
**Área:** agent | **Status:** workstream-rollup  
**Engajamento:** 5 comentários | 1 👍

**Por que importa:** Este EPIC investiga se ferramentas AST-aware podem reduzir ruído em tokens e melhorar navegação de código. Impacto estratégico para a qualidade das respostas do agente.

---

### 🟢 #23582 — Subagentes precisam conhecer Approval Modes ativos
**Link:** https://github.com/google-gemini/gemini-cli/issues/23582  
**Área:** agent | **Status:** workstream-rollup  
**Engajamento:** 1 comentário | 1 👍

**Por que importa:** Subagentes não reconhecem corretamente modos como Plan Mode ou Auto-Edit Mode, gerando conflitos entre instruções e restrições do Policy Engine.

---

### 🟢 #22819 — Roteamento de memória: global vs. projeto
**Link:** https://github.com/google-gemini/gemini-cli/issues/22819  
**Área:** agent | **Status:** workstream-rollup  
**Engajamento:** 1 comentário | 2 👍

**Por que importa:** Define onde preferências e contextos devem ser armazenados: `~/.gemini/` para configurações globais ou `.gemini/` para específicas do projeto.

---

### 🔵 #25506 — Alta carga nos servidores (Antigravity)
**Link:** https://github.com/google-gemini/gemini-cli/issues/25506  
**Área:** platform | **Status:** need-triage  
**Engajamento:** 0 comentários (novo)

**Por que importa:** Usuários reportam incapacidade de usar certas contas, indicando problemas de capacidade do lado do servidor.

---

## 4. Progresso de PRs Importantes

### ✅ #25421 — Integração skill-creator no agente de extração
**Link:** https://github.com/google-gemini/gemini-cli/pull/25421  
**Status:** CLOSED  
**Autor:** @SandyTao520

**Resumo:** Integra o skill `skill-creator` no agente de extração de skills em background, usando diretrizes autoritativas para escrever arquivos SKILL.md em vez de manter especificação inline separada.

---

### 📝 #21307 — Suporte a modo daemon
**Link:** https://github.com/google-gemini/gemini-cli/pull/21307  
**Status:** OPEN | **Prioridade:** P2 | **Área:** non-interactive  
**Autor:** @kartikangiras

**Resumo:** Adiciona modo daemon com cliente leve para integração no ecossistema Unix-like. Resolve limitações do TUI atual para workflows shell-centric.

---

### 📝 #21475 — Suporte a shell persistente
**Link:** https://github.com/google-gemini/gemini-cli/pull/21475  
**Status:** OPEN | **Área:** core  
**Autor:** @jacob314

**Resumo:** Implementa suporte a aliases, velocidade massiva em comandos shell, e definição de variáveis de ambiente com comportamento esperado. Resolve [#21461](https://github.com/google-gemini/gemini-cli/issues/21461).

---

### 📝 #21631 — Modo voz com VAD e streaming de áudio
**Link:** https://github.com/google-gemini/gemini-cli/pull/21631  
**Status:** OPEN | **Prioridade:** P2 | **Área:** core  
**Autor:** @Sangini-spec

**Resumo:** Adiciona Voice Activity Detector baseado em energia e pipeline de input de microfone com streaming para modo voz experimental. Detecção hands-free de fala.

---

### 📝 #21593 — Fase 1: Scaffolding para modo step-through
**Link:** https://github.com/google-gemini/gemini-cli/pull/21593  
**Status:** OPEN | **Área:** core  
**Autor:** @TravisHaa

**Resumo:** Adiciona backend para novo `ApprovalMode.STEP` que pausa antes de cada tool call. Usuário decide (executar/pular/continuar/cancelar). Fecha Fase 1 de [#21484](https://github.com/google-gemini/gemini-cli/issues/21484).

---

### 📝 #24736 — Union-find context compaction
**Link:** https://github.com/google-gemini/gemini-cli/pull/24736  
**Status:** OPEN | **Área:** agent  
**Autor:** @kimjune01

**Resumo:** Implementa clustering union-find como estratégia alternativa de compressão para `AgentHistoryProvider`. Mensagens graduam de buffer hot para cold forest semanticamente similar.

---

### 📝 #24174 — Modo voz em tempo real
**Link:** https://github.com/google-gemini/gemini-cli/pull/24174  
**Status:** OPEN | **Área:** core  
**Autor:** @Abhijit-2592

**Resumo:** Implementa modo voz com backends cloud (Gemini Live API) e local (Whisper via whisper.cpp). Fecha [#24175](https://github.com/google-gemini/gemini-cli/issues/24175).

---

### 📝 #25409 — Wire up ContextManager e AgentChatHistory
**Link:** https://github.com/google-gemini/gemini-cli/pull/25409  
**Status:** OPEN | **Área:** agent  
**Autor:** @joshualitt

**Resumo:** Conecta novo ContextManager e AgentChatHistory ao pipeline. Resolve [#25408](https://github.com/google-gemini/gemini-cli/issues/25408).

---

### 📝 #21379 — Metadata rica para inline media em modo verbose
**Link:** https://github.com/google-gemini/gemini-cli/pull/21379  
**Status:** OPEN | **Prioridade:** P2 | **Área:** core  
**Autor:** @Aarchi-07

**Resumo:** Melhora `partToString()` em modo verbose para exibir metadata completa (tamanho, duração) para `inlineData` e outras partes de mídia.

---

### 📝 #21877 — Renomear comando /directory para /workspace
**Link:** https://github.com/google-gemini/gemini-cli/pull/21877  
**Status:** OPEN | **Prioridade:** P1 | **Área:** core  
**Autor:** @LyalinDotCom

**Resumo:** Renomeia comando para `/workspace` mantendo `/directory` e `/dir` como aliases. Atualiza footer, settings, docs para terminologia consistente.

---

## 5. Tendências de Pedidos de Features

Baseado nas issues ativas, as seguintes direções emergem como prioritárias para a comunidade:

### 🎤 Modo Voz
**Evidência:** PRs [#21631](https://github.com/google-gemini/gemini-cli/pull/21631) e [#24174](https://github.com/google-gemini/gemini-cli/pull/24174)

A comunidade demonstra forte interesse em:
- Detecção de atividade por voz (VAD)
- Transcrição local via Whisper
- Transcrição cloud via Gemini Live API

---

### 🔄 Modos de Aprovação Avançados
**Evidência:** PRs [#21593](https://github.com/google-gemini/gemini-cli/pull/21593), [#21595](https://github.com/google-gemini/gemini-cli/pull/21595) e issues [#23582](https://github.com/google-gemini/gemini-cli/issues/23582)

Desenvolvimento de:
- Modo STEP para step-through de cada tool call
- Visualização de árvore de tarefas interativa
- Consciência de subagentes sobre modos ativos

---

### 💾 Gerenciamento de Memória
**Evidências:** Issues [#22819](https://github.com/google-gemini/gemini-cli/issues/22819), [#22809](https://github.com/google-gemini/gemini-cli/issues/22809)

Explorações de:
- Roteamento de memória global vs. projeto
- Escrita proativa de memórias pelo agente
- Preferências do usuário persistentes

---

### 🖥️ Integração com Shell
**Evidências:** PRs [#21307](https://github.com/google-gemini/gemini-cli/pull/21307), [#21475](https://github.com/google-gemini/gemini-cli/pull/21475)

Features solicitadas:
- Modo daemon para workflows Unix-like
- Shell persistente com suporte a aliases
- Velocidade massiva em execução de comandos

---

### 🔧 Ferramentas AST-Aware
**Evidências:** Issues [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)

Investigações em andamento para:
- Leituras de método com precisão via AST
- Redução de ruído em tokens
- Navegação de codebase mais inteligente

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Problemas Recorrentes de Autenticação (Alta Prioridade)
**Issues relacionadas:** [#25306](https://github.com/google-gemini/gemini-cli/issues/25306), [#25431](https://github.com/google-gemini/gemini-cli/issues/25431), [#25446](https://github.com/google-gemini/gemini-cli/issues/25446)

Múltiplos usuários reportam erros 403 com diferentes tipos de conta (pessoal, Google One AI Pro, cloud projects). A equipe parece estar investigando a fundo, mas é um bloqueio crítico.

---

### ⚠️ Inicialização Lenta por RipGrep
**Issue:** [#25323](https://github.com/google-gemini/gemini-cli/issues/25323)

Usuários sem acesso ao GitHub enfrentam delays de 2+ minutos. **Ação recomendada:** Aguardar implementação de fail-fast ou considerar bundling.

---

### ⚠️ Shell Command Stalling
**Issue:** [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)

Comandos shell simples travam após conclusão. Problema intermitente mas impactante para produtividade.

---

### 📋 D

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

⚠️ Falha ao gerar o resumo.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Relatório Diário da Comunidade — Kimi Code CLI
## 📅 Data: 2026-04-16

---

## 1. Destaques do Dia

O release **1.35.0** trouxe a inversão do padrão `show_thinking_stream` para `true`, tornando o processo de raciocínio visível por padrão em novas instalações. A equipe também corrigiu um deadlock crítico na interface web causado por prompts em voo não resolvidos. Na comunidade, há intenso debate sobre a experiência do thinking process, com usuários reportando regressões e pedindo restauro de funcionalidades.

---

## 2. Lançamentos

### 🚀 v1.35.0 — Released em 2026-04-15

| Tipo | Descrição | PR |
|------|-----------|-----|
| **Feature** | Padrão `show_thinking_stream` alterado para `true` — usuários novos veem streaming de raciocínio imediatamente | [#1900](https://github.com/MoonshotAI/kimi-cli/pull/1900) |
| **Bugfix** | Web UI: limpa prompts em voo ao ocorrer erro para evitar deadlock de sessão ocupada | [#1890](https://github.com/MoonshotAI/kimi-cli/pull/1890) |
| **Bugfix** | Web UI: previne reconnect do watchdog durante aprovação pendente ou pergunta | [#1899](https://github.com/MoonshotAI/kimi-cli/pull/1899) |
| **Docs** | Corrige entradas da 1.34.0 mal posicionadas nos changelogs EN/ZH | [#1885](https://github.com/MoonshotAI/kimi-cli/pull/1885) |

> 📦 Bump completo: [#1901](https://github.com/MoonshotAI/kimi-cli/pull/1901)

---

## 3. Issues em Evidência

### 🔴 Alta Prioridade

**1. [#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864) — Thinking traces não exibidos completamente**
- 🔸 **Por que importa:** Usuários perderam visibilidade sobre o processo de raciocínio do modelo, essencial para confiança e debugging.
- 📊 **Reação:** 10 👍 · 11 💬
- 👤 Relatado por YunfanZhang42

**2. [#1865](https://github.com/MoonshotAI/kimi-cli/issues/1865) — "thinking的过程为什么没了？"**
- 🔸 **Por que importa:** Issue duplicata com alto engajamento mostrando insatisfação generalizada com a remoção do thinking.
- 📊 **Reação:** 3 👍 · 10 💬
- 👤 Relatado por xueguoqing01

**3. [#1903](https://github.com/MoonshotAI/kimi-cli/issues/1903) — Error code: 400**
- 🔸 **Por que importa:** Bloqueio imediato de uso — erro 400 impede chamadas ao modelo kimi-for-coding.
- 📊 **Reação:** 0 👍 · 1 💬
- 👤 Relatado por federicomalagoni

**4. [#1905](https://github.com/MoonshotAI/kimi-cli/issues/1905) — OAuth wait não cancelável com Esc**
- 🔸 **Por que importa:** Fluxo de login trava o terminal, degradando experiência do usuário.
- 📊 **Reação:** 0 👍 · 0 💬
- 👤 Relatado por digging-airfare-4u

**5. [#1897](https://github.com/MoonshotAI/kimi-cli/issues/1897) — Web UI trava quando MCP server falha**
- 🔸 **Por que importa:** Integração MCP torna-se frágil; UI fica em estado inconsistente.
- 📊 **Reação:** 0 👍 · 0 💬
- 👤 Relatado por lsdxtc

### 🟡 Média Prioridade

**6. [#1877](https://github.com/MoonshotAI/kimi-cli/issues/1877) — Thinking block não expande no VS Code (modo compacto)**
- 🔸 **Por que importa:** Usuários VS Code não conseguem ver conteúdo completo do thinking.
- 📊 **Reação:** 1 👍 · 2 💬
- 👤 Relatado por Ernest-Wu

**7. [#1889](https://github.com/MoonshotAI/kimi-cli/issues/1889) — Arquivos modificados por subagent não aparecem no diff**
- 🔸 **Por que importa:** Workflow principal de code review fica comprometido.
- 📊 **Reação:** 0 👍 · 0 💬
- 👤 Relatado por SeleneXX

**8. [#1888](https://github.com/MoonshotAI/kimi-cli/issues/1888) — Kimi K2.6 com chamadas excessivas no Claude Code**
- 🔸 **Por que importa:** Compatibilidade com Claude Code gera loop de requisições.
- 📊 **Reação:** 0 👍 · 0 💬
- 👤 Relatado por Greenplumwine

### 🟢 Enhancement

**9. [#1882](https://github.com/MoonshotAI/kimi-cli/issues/1882) — WriteFile deveria pedir confirmação antes de escrever**
- 🔸 **Por que importa:** Evita perda de trabalho por timeout durante gerações longas.
- 📊 **Reação:** 1 👍 · 2 💬
- 👤 Relatado por ixtWuko

**10. [#1894](https://github.com/MoonshotAI/kimi-cli/issues/1894) — Não suporta diretórios skill aninhados recursivamente**
- 🔸 **Por que importa:** Incompatibilidade com padrão Codex; limita adoção em projetos complexos.
- 📊 **Reação:** 0 👍 · 0 💬
- 👤 Relatado por retamia

---

## 4. Progresso de PRs Importantes

| # | Título | Status | Impacto |
|---|--------|--------|---------|
| [#1906](https://github.com/MoonshotAI/kimi-cli/pull/1906) | Fix OAuth wait cancellation in /login | **OPEN** | Resolve #1905 — cancelamento de等待 OAuth com Esc |
| [#1900](https://github.com/MoonshotAI/kimi-cli/pull/1900) | default show_thinking_stream to true | **CLOSED** | Feature principal do 1.35.0 — thinking visível por padrão |
| [#1899](https://github.com/MoonshotAI/kimi-cli/pull/1899) | prevent watchdog reconnect during pending approval | **CLOSED** | Estabilidade da Web UI |
| [#1896](https://github.com/MoonshotAI/kimi-cli/pull/1896) | honor http_proxy env vars via aiohttp trust_env=True | **OPEN** | Suporte a usuários atrás de proxy corporativo |
| [#1893](https://github.com/MoonshotAI/kimi-cli/pull/1893) | handle non-UTF-8 filenames in git ls-files on Windows | **OPEN** | Compatibilidade com sistemas Chinese Windows |
| [#1892](https://github.com/MoonshotAI/kimi-cli/pull/1892) | add unified /setting command and show_thinking_stream config | **OPEN** | Painel unificado de configurações — resolve #1891 |
| [#1890](https://github.com/MoonshotAI/kimi-cli/pull/1890) | clear stale in-flight prompts on error | **CLOSED** | Bugfix crítico de deadlock no web |
| [#1886](https://github.com/MoonshotAI/kimi-cli/pull/1886) | add explicit utf-8 encoding to subprocess calls | **OPEN** | Previne crashes em sistemas não-UTF-8 |
| [#1883](https://github.com/MoonshotAI/kimi-cli/pull/1883) | echo slash command inputs in shell UI | **OPEN** | Melhora debugging e histórico de terminal |
| [#1876](https://github.com/MoonshotAI/kimi-cli/pull/1876) | register /btw slash command in soul-level registry | **OPEN** | Comando disponível em todos os modos de execução |

---

## 5. Tendências de Pedidos de Features

### 🧠 Experiência do Thinking Process
A comunidade demonstra forte desejo de **controle granular** sobre o thinking:
- Exibição completa de traces ([#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864))
- Toggle streaming vs. indicador compacto ([#1900](https://github.com/MoonshotAI/kimi-cli/pull/1900) addressed)
- Restauração de indicadores visuais (💫) em prompt mode ([#1887](https://github.com/MoonshotAI/kimi-cli/issues/1887))

### ⚙️ Configuração Unificada
Pedidos recorrentes por **centralização de configurações**:
- Comando `/setting` unificado ([#1891](https://github.com/MoonshotAI/kimi-cli/issues/1891), [#1892](https://github.com/MoonshotAI/kimi-cli/pull/1892))
- Gerenciamento de error codes em ferramentas ([#1895](https://github.com/MoonshotAI/kimi-cli/issues/1895))

### 🔌 Compatibilidade e Integrações
- Suporte a API OAI para VS Code nativo ([#1898](https://github.com/MoonshotAI/kimi-cli/issues/1898))
- Melhorias na integração VS Code ([#1560](https://github.com/MoonshotAI/kimi-cli/issues/1560), [#1877](https://github.com/MoonshotAI/kimi-cli/issues/1877))
- Carga recursiva de skills aninhados ([#1894](https://github.com/MoonshotAI/kimi-cli/issues/1894))

### 🛡️ Segurança e Controle
- Confirmação antes de WriteFile ([#1882](https://github.com/MoonshotAI/kimi-cli/issues/1882))
- Cancelamento de fluxos OAuth ([#1905](https://github.com/MoonshotAI/kimi-cli/issues/1905))

---

## 6. Pontos de Atenção para Desenvolvedores

### 🔴 Problemas Críticos a Monitorar

| Problema | Origem | Severidade |
|----------|--------|------------|
| **Thinking process não aparece** | Regression em 1.33.0 | 🔴 Alta |
| **Error 400 em chamadas kimi-for-coding** |可能是 API ou autenticação | 🔴 Alta |
| **Deadlock na Web UI com MCP** | [#1897](https://github.com/MoonshotAI/kimi-cli/issues/1897) | 🔴 Alta |

### 🟡 Dores Recorrentes

1. **Encoding UTF-8 em Windows Chinês**
   - Múltiplos PRs ([#1893](https://github.com/MoonshotAI/kimi-cli/pull/1893), [#1886](https://github.com/MoonshotAI/kimi-cli/pull/1886)) addressam o problema
   - Recomenda-se teste em sistemas GBK

2. **Variáveis de Proxy HTTP**
   - [#1896](https://github.com/MoonshotAI/kimi-cli/pull/1896) resolve para setups corporativos
   - Aguardando merge

3. **UX do VS Code Plugin**
   - Skill envia automaticamente ao selecionar — comportamento não intuitivo ([#1902](https://github.com/MoonshotAI/kimi-cli/issues/1902))
   - Diff de subagent não atualiza ([#1889](https://github.com/MoonshotAI/kimi-cli/issues/1889))

### 📈 Métricas do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas (24h) | 14 |
| Issues fechadas (24h) | 1 |
| PRs abertos (24h) | 10 |
| PRs fechados (24h) | 6 |
| Release | 1.35.0 |

---

*Relatório gerado automaticamente com base nos dados do GitHub de 2026-04-16.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# Relatório Diário da Comunidade OpenCode — 16/04/2026

---

## 1. Destaques do Dia

O dia foi marcado por **alta atividade de manutenção**: 19 PRs foram fechados, com destaque para limpezas massivas de código morto ( namespaces desempacotados, remoção de imports não utilizados, eliminação de funções sem uso). Simultaneamente, a comunidade debate intensamente **questões de memória** e problemas de compatibilidade com provedores de IA como Azure OpenAI, Copilot e Gemini.

---

## 2. Lançamentos

**v1.4.6** (lançado nas últimas 24h)
- **Core**: Correção no staging de snapshots para listas extensas de arquivos, com ganho de performance; correção no parsing de headers OTEL quando valores contêm `=`.
- **Desktop**: Correção no estado de submissão de prompts para evitar envios falhos ou inconsistentes; espaçamento melhorado no campo de título de sessão durante edição.

**v1.4.5**
- **Core**: Exportação de spans de telemetria do AI SDK para backends OTLP; exposição do schema experimental da API de perguntas e especificação OpenAPI via `@opencode-ai/server`; disponibilização de factory reutilizável para handlers de pergunta em hosts customizados.
- **Desktop**: Início de comandos shell do desktop a partir do diretório home.

---

## 3. Issues em Evidência

### 1. Memory Megathread [#20695](https://github.com/anomalyco/opencode/issues/20695) — 48 comentários · 32 👍
**Por que importa**: A comunidade reporta problemas generalizados de consumo de memória. Este é um megathread centralizado para captar heap snapshots e diagnosticar a origem do vazamento. O time explicitly pede que devs evitem sugerir soluções genéricas sem dados concretos.
**Reação**: Alto engajamento — a issue foi atualizada hoje, indicando foco ativo do time.

---

### 2. Copilot Auth Consumindo Quota Premium Rapidamente [#8030](https://github.com/anomalyco/opencode/issues/8030) — 221 comentários · 79 👍 · *[CLOSED]*
**Por que importa**: Requests do Copilot Opus 4.5 estavam sendo marcados como "user" em vez de "agent", consumindo quota premium indevidamente. Com ~60 requisições agent-initiated no período, metade da quota mensal foi gasta.
**Reação**: Issue massiva com 221 comentários e 79 👍, agora fechada — indicando que o problema foi addressado.

---

### 3. Gemini 3 Pro Function Calling Falha [#4832](https://github.com/anomalyco/opencode/issues/4832) — 27 comentários · 14 👍 · *[CLOSED]*
**Por que importa**: Falha ao usar modelos `gemini-3-pro-preview` com function calling/tool use por falta de suporte a `thoughtSignature`. Bloqueava integrações avançadas.
**Reação**: Closed — a correção foi incorporada, mas a comunidade aguarda validação robusta.

---

### 4. Azure OpenAI Models Não Funcionam [#22444](https://github.com/anomalyco/opencode/issues/22444) — 8 comentários · 3 👍
**Por que importa**: Desde a última atualização, todos os modelos Azure OpenAI (GPT-5.3-Codex, GPT-5.2-Codex, GPT-5.4 Mini) falham com a mesma mensagem de erro, indicando quebra de compatibilidade.
**Reação**: Issue aberta ontem (14/04) com atualizações recentes — desenvolvedores aguardam hotfix.

---

### 5. GPT 5.4 Azure Fails com Erro de Reasoning [#20698](https://github.com/anomalyco/opencode/issues/20698) — 24 comentários · 3 👍
**Por que importa**: Quando usando GPT 5.4 xhigh via Azure Cognitive Services, após 1-2 tool calls o modelo retorna erro sobre reasoning blocks sem o item required subsequente.
**Reação**: Issue ativa desde 02/04, com atualizações recentes — problema crítico para quem depende do Azure.

---

### 6. Copilot Auth — Premium Requests [#8030](https://github.com/anomalyco/opencode/issues/8030) — 221 comentários · 79 👍 · *[CLOSED]*
**Por que importa**: Identificado acima — reitera-se que este é o issue com maior engajamento da comunidade no período analisado.

---

### 7. TUI Não Renderiza Resposta LLM em tmux [#16566](https://github.com/anomalyco/opencode/issues/16566) — 6 comentários · 2 👍
**Por que importa**: O TUI congela após submissão de prompt quando rodando dentro de tmux, mesmo com o backend completando a resposta com sucesso. Causa frustração para desenvolvedores que usam terminais multiplexados.
**Reação**: Atualizada em 15/04 — mesmo problema que issue #5094, indicando bug recorrente.

---

### 8. Qwen Model Removido do Go Subscription [#22644](https://github.com/anomalyco/opencode/issues/22644) — 4 comentários · 7 👍
**Por que importa**: Usuários do plano OpenCode Go notaram que modelos Qwen não aparecem mais na listagem disponível, apesar de estarem subscritos.
**Reação**: Reportado hoje — comunidade espera restauração ou comunicação oficial.

---

### 9. Cloudflare AI Gateway — Parâmetro Não Suportado [#22374](https://github.com/anomalyco/opencode/issues/22374) — 2 comentários · 2 👍
**Por que importa**: Ao usar modelos GPT via Cloudflare AI Gateway, ocorre erro `Unsupported parameter: 'max_tokens' is not supported with this model. Use 'max_completion_tokens' instead.` Modelos mais antigos (GPT-4o) funcionam.
**Reação**: Issue aberta em 14/04 — indica incompatibilidade com modelos mais novos da linha GPT.

---

### 10. MiniMax-M2.7 — Processo de Reasoning Não Exibido [#22684](https://github.com/anomalyco/opencode/issues/22684) — 2 comentários · 0 👍
**Por que importa**: Modelo de reasoning (MiniMax-M2.7) implantado localmente via Sglang não exibe o processo de raciocínio no OpenCode, comprometendo a utilidade do modelo.
**Reação**: Reportado hoje — problema de renderização específico de modelo de reasoning.

---

## 4. Progresso de PRs Importantes

### 1. `/tui` e `/config` Slash Commands [#16912](https://github.com/anomalyco/opencode/pull/16912) — *[OPEN]*
Adiciona dois novos slash commands ao TUI: `/tui` (alias: `tuisettings`) abre `tui.json`; `/config` abre o arquivo de configuração. Melhora significativamente a ergonomia do terminal.

---

### 2. Restaurar Type Safety no Streaming Chunk Schema [#21831](https://github.com/anomalyco/opencode/pull/21831) — *[OPEN]*
Corrige perda de type safety no tipo `Chunk` do Copilot chat streaming transform. Havia um TODO indicando que a segurança de tipos foi comprometida e esta PR a restabelece.

---

### 3. Migrar Effect Call Sites para EffectFlock [#22688](https://github.com/anomalyco/opencode/pull/22688) — *[OPEN]*
Migra 3 call sites já em código Effect do `Flock` imperativo para o novo serviço `EffectFlock`, seguindo padrão mais funcional e testável.

---

### 4. CLI Perf: Reduzir Dependências [#22652](https://github.com/anomalyco/opencode/pull/22652) — *[OPEN]*
Refatora instalação de dependências de plugins para usar serviço npm compartilhado; move arquivos de teste do TUI; simplifica manipulação de configuração.

---

### 5. Mobile Touch Optimization [#18767](https://github.com/anomalyco/opencode/pull/18767) — *[OPEN]*
Otimiza o OpenCode App para dispositivos mobile/touch preservando a experiência desktop. Visando ampliar base de usuários.

---

### 6. TUI: Parar Streaming Após Message Complete [#13854](https://github.com/anomalyco/opencode/pull/13854) — *[OPEN]*
Corrige bug onde `TextPart` passava `streaming={true}` incondicionalmente mesmo para mensagens completadas, causando perda de rendering no opentui.

---

### 7. Cleanup: 49 Variáveis Não Utilizadas [#22695](https://github.com/anomalyco/opencode/pull/22695) — *[CLOSED]*
Remove 43 variáveis não utilizadas sinaladas pelo oxlint; corrige 5 issues adicionais de catch params e imports stale; inclui fix real: VS Code extension disposable não estava sendo trackeado em `context.subscriptions`.

---

### 8. Unwrap MCP Namespace para Flat Exports [#22693](https://github.com/anomalyco/opencode/pull/22693) — *[CLOSED]*
Converte `export namespace MCP` (930 linhas) para flat named exports com barrel `export * as MCP`, eliminando importações pesadas de `@modelcontextprotocol/sdk` e `open` apenas para checagens de `MCP.Failed.isInstance()`.

---

### 9. Unwrap Provider Namespace + Script Automático [#22690](https://github.com/anomalyco/opencode/pull/22690) — *[CLOSED]*
Converte `export namespace Provider` (1709 linhas) para flat exports; o script de unwrap agora é totalmente automático sem steps manuais. Provider era o maior tree-shake offender do codebase.

---

### 10. Unwrap Config Namespace para Flat Exports [#22689](https://github.com/anomalyco/opencode/pull/22689) — *[CLOSED]*
Similar às PRs anteriores, desempacota o namespace `Config` com barrel `export * as Config`; reescreve import paths em 50+ arquivos; corrige self-references e sibling imports.

---

## 5. Tendências de Pedidos de Features

Analisando as issues abertas, emergem as seguintes direções mais demandadas pela comunidade:

| Tendência | Issues Relacionadas | Descrição |
|---|---|---|
| **Modelos de IA adicionais** | [#22408](https://github.com/anomalyco/opencode/issues/22408), [#22644](https://github.com/anomalyco/opencode/issues/22644), [#22677](https://github.com/anomalyco/opencode/issues/22677) | Integração de novos modelos: Kimi K2.6, Qwen3.5 Plus, Qwen3.6 Plus. Comunidade busca diversificação de provedores. |
| **Inline Skill Invocation** | [#15617](https://github.com/anomalyco/opencode/issues/15617) | Suporte à sintaxe `$skill-name` em qualquer posição do prompt, não apenas no início. |
| **Delayed Queue Feature** | [#5408](https://github.com/anomalyco/opencode/issues/5408) | Loop de submissão repetida com captura de aprendizados e atualização incremental de resultados. |
| **Controle de Permissões** | [#2632](https://github.com/anomalyco/opencode/issues/2632), [#22191](https://github.com/anomalyco/opencode/issues/22191) | Default permissions mais restritivas, confirmação antes de executar comandos remotos via auth. |
| **Melhorias de UX/UI** | [#18767](https://github.com/anomalyco/opencode/pull/18767), [#16912](https://github.com/anomalyco/opencode/pull/16912), [#22648](https://github.com/anomalyco/opencode/issues/22648) | Otimização touch mobile, slash commands, cópia seletiva de mensagens da sessão. |

---

## 6. Pontos de Atenção para Desenvolvedores

| Categoria | Issue | Situação |
|---|---|---|
| **⚠️ Memory Leaks** | [#20695](https://github

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Relatório Diário da Comunidade Pi — 2026-04-16

---

## 1. Destaques do Dia

A equipe liberou a versão **v0.67.3** com suporte a renderizadores customizados para ferramentas, permitindo que elas gerenciem seu próprio shell visual — uma melhoria significativa para visualização de diffs e preview de código. No фронтенд de issues, destacam-se correções críticas para sessões irrecuperáveis, vazamentos de processos bash e problemas de validação em Cloudflare Workers. O ritmo de PRs permanece intenso, com 29 mergeadas nas últimas 24h, abordando desde compatibilidade com provedores de IA até melhorias na experiência do terminal.

---

## 2. Lançamentos

### v0.67.3 — Renderização Customizada de Ferramentas

**Link:** [badlogic/pi-mono Releases](https://github.com/badlogic/pi-mono/releases)

A nova versão introduz o atributo `renderShell: "self"` para renderizadores de ferramentas, permitindo que ferramentas assumam o controle do seu próprio shell externo ao invés do box padrão. Este recurso é particularmente útil para préviews grandes e estáveis, como diffs de edição, eliminando a necessidade de scroll e melhorando a legibilidade.

---

## 3. Issues em Evidência

### 1. #3167 — Bug: multiline paste insere sequências CSI-u
**Link:** [badlogic/pi-mono Issue #3167](https://github.com/badlogic/pi-mono/issues/3167)  
**Status:** FECHADA | **Comentários:** 8 | **Autor:** CoreyCole

Ao colar texto com múltiplas linhas no terminal (especialmente via tmux), sequências de escape `CSI-u` são inseridas ao invés de preservar as quebras de linha. A comunidade identificou possível relação com o issue #1872, sugerindo uma causa raiz compartilhada no tratamento de clipboard.

---

### 2. #2870 — Follow XDG Base Directory
**Link:** [badlogic/pi-mono Issue #2870](https://github.com/badlogic/pi-mono/issues/2870)  
**Status:** FECHADA | **Comentários:** 7 | **Autor:** mks-h

A aplicação currently polui o diretório home no Linux com arquivos de configuração e estado. Esta issue solicita conformidade com o [estándar XDG](https://wiki.archlinux.org/title/XDG_Base_Directory), usando `$XDG_CONFIG_HOME` (default `$HOME/.config`) para configurações. Repercussão significativa na comunidade Linux.

---

### 3. #3108 — Sessão irrecuperável com tool call de nome vazio
**Link:** [badlogic/pi-mono Issue #3108](https://github.com/badlogic/pi-mono/issues/3108)  
**Status:** FECHADA | **Comentários:** 7 | **Autor:** mightymatth

Quando um modelo retorna uma tool call com campo `name` vazio, o Pi armazena-a no histórico da sessão. Todas as requisições subsequentes falham com erro 400, tornando a sessão permanentemente travada. Bug de alta severidade que afeta a estabilidade de sessões longas.

---

### 4. #3214 — Cloud Code Assist API retorna 400 por meta-declarações
**Link:** [badlogic/pi-mono Issue #3214](https://github.com/badlogic/pi-mono/issues/3214)  
**Status:** ABERTA | **Comentários:** 7 | **Autor:** vladlearns

Ferramentas MCP (como jcodemunch) incluem campos `$schema` e outras meta-declarações nos parâmetros, causando rejeição 400 na API do Google Cloud Code Assist. A comunidade enfrenta este problema ao combinar provedores cloud com ferramentas MCP.

---

### 5. #3112 — Validação de argumentos não funciona em Cloudflare Workers
**Link:** [badlogic/pi-mono Issue #3112](https://github.com/badlogic/pi-mono/issues/3112)  
**Status:** ABERTA | **Comentários:** 5 | **Autor:** crisog

A função `validateToolArguments` em `packages/ai/src/utils/validation.ts` pula validação completamente em Cloudflare Workers. Campos obrigatórios ausentes e tipos incorretos são aceitos, comprometendo a integridade das chamadas de ferramenta.

---

### 6. #3005 — Tornar mensagem "UPDATE AVAILABLE" toggleável
**Link:** [badlogic/pi-mono Issue #3005](https://github.com/badlogic/pi-mono/issues/3005)  
**Status:** ABERTA | **Comentários:** 5 | ** 👍:** 2 | **Autor:** gumonteilh

Usuários com configurações complexas (ex: NixOS) solicitam opção para desabilitar a mensagem amarela de atualização, que aparece a cada abertura do Pi. A sugestão é integrá-la à configuração "Quiet startup".

---

### 7. #3057 — Processos bash detached vazam como órfãos
**Link:** [badlogic/pi-mono Issue #3057](https://github.com/badlogic/pi-mono/issues/3057)  
**Status:** FECHADA | **Comentários:** 3 | **Autor:** singatias

Ao fechar o terminal ou matar o Pi via SIGHUP/SIGTERM, processos bash filhos permanecem órfãos (reparentados para PID 1). O autor reportou 811 processos órfãos consumindo ~90GB de RAM. Problema crítico para sessões intensivas.

---

### 8. #3134 — Edit result invisível durante ctx.ui.select dialog
**Link:** [badlogic/pi-mono Issue #3134](https://github.com/badlogic/pi-mono/issues/3134)  
**Status:** FECHADA | **Comentários:** 3 | **Autor:** TesseractCat

O diff preview da ferramenta de edição não aparece quando o diálogo de confirmação `ctx.ui.select` é acionado. A comunidade identificou a causa provável em mudanças no issue #2664.

---

### 9. #3061 — GLM-5 maxTokens excede contextWindow
**Link:** [badlogic/pi-mono Issue #3061](https://github.com/badlogic/pi-mono/issues/3061)  
**Status:** FECHADA | **Comentários:** 3 | **Autor:** tdimino

No catálogo OpenRouter, o modelo GLM-5 tem `maxTokens: 131072` com `contextWindow: 80000` — fisicamente impossível. A compactação tenta enviar `max_tokens` inválido, causando falhas em cascata.

---

### 10. #3196 — Prompt caching quebrado para proxies OpenAI
**Link:** [badlogic/pi-mono Issue #3196](https://github.com/badlogic/pi-mono/issues/3196)  
**Status:** ABERTA | **Comentários:** 3 | **Autor:** zicochaos

O caching de prompt não funciona com a API `openai-responses` em provedores proxy (clawbay, litellm, etc.). Headers de roteamento `session_id` e `x-client-request-id` nunca são enviados, causando cache miss em todas as requisições.

---

## 4. Progresso de PRs Importantes

### 1. #3251 — fix(coding-agent): Fix gemma4 ollama no thinking
**Link:** [badlogic/pi-mono PR #3251](https://github.com/badlogic/pi-mono/pull/3251)  
**Status:** FECHADO | **Autor:** zheller

Corrige modelos Gemma4 via Ollama que ainda executam thinking mesmo com configuração "off". A solução adiciona `"reasoning_effort": "none"` à requisição API.

---

### 2. #3248 — feat(tui): use OSC 8 hyperlinks in Markdown
**Link:** [badlogic/pi-mono PR #3248](https://github.com/badlogic/pi-mono/pull/3248)  
**Status:** ABERTO | **Autor:** ofa1

Implementa suporte a hyperlinks via sequência OSC 8 em renderização Markdown. O PR estende `AnsiCodeTracker` em `utils.ts` para rastrear URLs ativos junto ao estado SGR, tratando corretamente a quebra de linha.

---

### 3. #3247 — Added Typebox fallback for cloudflare
**Link:** [badlogic/pi-mono PR #3247](https://github.com/badlogic/pi-mono/pull/3247)  
**Status:** ABERTO | **Autor:** mitsuhiko

Adiciona fallback Typebox para ambiente Cloudflare Workers, referenciando issue #3112. Solução aguardando merge para corrigir problemas de validação de schema.

---

### 4. #3246 — fix(ai,coding-agent): replace deprecated k2p5 with kimi-for-coding
**Link:** [badlogic/pi-mono PR #3246](https://github.com/badlogic/pi-mono/pull/3246)  
**Status:** FECHADO | **Autor:** noel-debug

Substitui o model slug depreciado `k2p5` por `kimi-for-coding` no provider Kimi, alinhando com a API atual Kimi CLI.

---

### 5. #3245 — fix(coding-agent): clarify login link hint
**Link:** [badlogic/pi-mono PR #3245](https://github.com/badlogic/pi-mono/pull/3245)  
**Status:** FECHADO | **Autor:** dpc

Melhora a experiência do link de login em terminais que não indicam claramente que "Ctrl+click to open" é clicável, evitando confusão do usuário.

---

### 6. #3244 — fix(coding-agent): bun install method detection
**Link:** [badlogic/pi-mono PR #3244](https://github.com/badlogic/pi-mono/pull/3244)  
**Status:** FECHADO | **Autor:** davidbasilefilho

Melhora detecção do método de instalação Bun: resolve npm root global via `BUN_INSTALL`, usa `bun pm bin -g` como fallback, e respeita `PI_PACKAGE_DIR` para assets bundleados.

---

### 7. #3225 — fix(coding-agent): make rpc prompt emit a single authoritative response
**Link:** [badlogic/pi-mono PR #3225](https://github.com/badlogic/pi-mono/pull/3225)  
**Status:** FECHADO | **Autor:** yzhg1983

Corrige issue #3049: em modo RPC, `prompt` podia emitir respostas conflitantes para o mesmo request ID. Agora `success: true` significa prompt aceite/iniciado/na fila, e `success: false` indica rejeição clara.

---

### 8. #3197 — feat(agent): add interrupt() for graceful turn interruption
**Link:** [badlogic/pi-mono PR #3197](https://github.com/badlogic/pi-mono/pull/3197)  
**Status

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Relatório Diário da Comunidade Qwen Code — 2026-04-16

---

## 1. Destaques do Dia

O principal evento de hoje foi a **descontinuação oficial do tier gratuito do Qwen OAuth**, cortada em 2026-04-15 conforme amplamente antecipado. Isso provocou uma enxurrada de issues reportando erros 401 e "quota exceeded", com usuários solicitando alternativas e contestando as novas políticas. Em paralelo, a equipe manteve a cadência de releases com a versão **v0.14.5** (e nightlies subsequentes), implementando melhorias no CLI, SDK e sistema de hooks.

---

## 2. Lançamentos

### v0.14.5 (release oficial)
- **Exposição de dados de uso de `/context`** via API do SDK e modo não-interativo (PR #2916)
- **Profiler de performance de startup** adicionado ao CLI (PR #3232)
- **Implementação de fork subprocess** (resumo truncado nos dados, mas indica expansão de capacidades)
- **Hook middleware de reescrita de mensagens** com prompts customizáveis (ACP)
- **Correção de UI**: Tab key não insere mais literal `\t` em BaseTextInput (PR #3270)
- **Descontinuação do tier gratuito Qwen OAuth** (PR #3291): mensagens atualizadas para passado, bloqueada novas inscrições OAuth, warning persistente ao startup

**Links:** [Release v0.14.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.5) | [Full Changelog](https://github.com/QwenLM/qwen-code/compare/v0.14.5...v0.14.5-nightly.20260416.a6612940f)

### v0.14.5-nightly.20260416.a6612940f
Build noturno continuando a iteração da versão 0.14.5.

---

## 3. Issues em Evidência

### Issue #3203 — Qwen OAuth Free Tier Policy Adjustment (🔴 CRÍTICO)
**Link:** https://github.com/QwenLM/qwen-code/issues/3203  
**Estatísticas:** 51 comentários, 0 👍  
**Resumo:** Proposta formal de ajuste de política — redução de 1.000 para 100 requisições/dia e descontinuação completa do entry point gratuito em 20 de abril.  
**Por que importa:** Este é o issue mais comentado do dia (51 replies) e reflete o sentimento majoritário da comunidade. Usuários expressam frustração com a mudança abrupta, perda de produtividade e lack de comunicação.

---

### Issue #1742 — 429 Free allocated quota exceeded (♻️ REABERTO)
**Link:** https://github.com/QwenLM/qwen-code/issues/1742  
**Estatísticas:** 19 comentários, 1 👍  
**Resumo:** Usuários recebem erro 429 mesmo sem terem excedido o limite diário, indicando possível mudança silenciosa nos Rate Limits.  
**Por que importa:** Este é um bug funcional que afecta a confiabilidade do sistema. O issue foi reaberto hoje, sugerindo que a descontinuação do free tier exacerbou o problema.

---

### Issue #2973 — System prompt adherence很差
**Link:** https://github.com/QwenLM/qwen-code/issues/2973  
**Estatísticas:** 7 comentários, 0 👍  
**Resumo:** Qwen Code segue mal as instruções do system prompt em comparação com versões anteriores.  
**Por que importa:** Indica regressão de qualidade na adherence ao prompt, problema crítico para workflows de desenvolvimento que dependem de instruções precisas.

---

### Issue #3277 — MCP Client limitado a 2 conexões (🔴 CRÍTICO)
**Link:** https://github.com/QwenLM/qwen-code/issues/3277  
**Estatísticas:** 6 comentários, 0 👍  
**Resumo:** O cliente MCP do Qwen Code tem um limite artificial de 2 conexões, quebrando infraestruturas multi-node em produção.  
**Por que importa:** Afecta diretamente infraestruturas de produção e impede arquiteturas escaláveis. Severidade CRITICAL reportada pelo autor.

---

### Issue #3288 — Inconsistência no free limit (🔴 bug)
**Link:** https://github.com/QwenLM/qwen-code/issues/3288  
**Estatísticas:** 5 comentários, 1 👍  
**Resumo:** Documentação indica 1.000 requisições gratuitas/dia, mas na prática mostra 100.  
**Por que importa:** Gera confusão e fricção — comunidade espera 1.000 conforme docs mas recebe 100.

---

### Issue #3289 — Shell commands falham silenciosamente com node_modules
**Link:** https://github.com/QwenLM/qwen-code/issues/3289  
**Estatísticas:** 1 comentário, 2 👍  
**Resumo:** Comandos shell (!pwd, !ls) retornam exit code 1 sem output quando skills contêm node_modules.  
**Por que importa:** Bug sutil mas recorrente que afecta debugging e reliability. O autor já identificou a root cause (chokidar watch sem `ignored` option em skill-manager.ts).

---

### Issue #2905 — DataInspectionFailed em Qwen 3.6
**Link:** https://github.com/QwenLM/qwen-code/issues/2905  
**Estatísticas:** 1 comentário, 1 👍  
**Resumo:** Erro 400 interno ao usar Qwen 3.6 Plus com tool calling.  
**Por que importa:** Demonstra problemas de integração entre Qwen Code e o próprio modelo Qwen 3.6 — a família de modelos que deveria ser a principal featured.

---

### Issue #3281 — OAuth auth succeeds but requests fail com free tier quota exceeded
**Link:** https://github.com/QwenLM/qwen-code/issues/3281  
**Estatísticas:** 4 comentários, 2 👍  
**Resumo:** Autenticação OAuth retorna sucesso mas requisições subsequentes falham com "free tier quota exceeded".  
**Por que importa:** Descreve UX broken — usuário não consegue entender por que authenticated requests falham.

---

### Issue #94 — [Feature Request] Não colocar file tree no início do context
**Link:** https://github.com/QwenLM/qwen-code/issues/94  
**Estatísticas:** 1 comentário, 0 👍  
**Resumo:** Suggestão de mover file tree do início para o fim do context (ou remover), reduzindo token usage.  
**Por que importa:** É um feature request antigo (Julho 2025) que impacta custo e performance de contexto.

---

### Issue #3306 — Why did you kick OAuth users out?
**Link:** https://github.com/QwenLM/qwen-code/issues/3306  
**Estatísticas:** 2 comentários, 0 👍  
**Resumo:** Emoção: usuário describe dependência heavy do Qwen Code CLI, menciona ter recomendado a ferramenta para "hundreds of people".  
**Por que importa:** Expressa o impacto real nos workflows e a percepção de traição pela comunidade.

---

## 4. Progresso de PRs Importantes

### PR #3311 — Multi-line status line output (feat)
**Link:** https://github.com/QwenLM/qwen-code/pull/3311  
**Autor:** wenshao | **Status:** OPEN  
Remove limite hard-coded de linha única no `useStatusLine`, permitindo scripts de usuário outputarem até 2 linhas. Melhora a flexibilidade de status personalizado sem quebrar truncagem horizontal.

---

### PR #3310 — Prevent statusline spawn EBADF crash (fix)
**Link:** https://github.com/QwenLM/qwen-code/pull/3310  
**Autor:** wenshao | **Status:** OPEN  
Corrige crash síncrono do CLI quando `child_process.exec()` falha com `EBADF` (ocorre em macOS + Node 22). Solução adiciona try/catch no debounce setTimeout para capturar throws síncronos.

---

### PR #3085 — Startup optimization com API preconnect
**Link:** https://github.com/QwenLM/qwen-code/pull/3085  
**Autor:** doudouOUC | **Status:** OPEN  
Implementa pré-conexão TCP+TLS via fire-and-forget HEAD request antes da primeira chamada de API. Smart skip para proxy, custom CA, sandbox mode e custom baseUrl. Resolve parte do issue #3011.

---

### PR #2827 — Hook system: HTTP, Function e Async Hooks (feat)
**Link:** https://github.com/QwenLM/qwen-code/pull/2827  
**Autor:** DennisYu07 | **Status:** OPEN  
Implementação abrangente de hooks com HTTP Hook (POST requests com SSRF protection), Function Hook (callbacks para SDK) e Async Hook. Alinha funcionalidades de extensibilidade com o path core.

---

### PR #3214 — Replace fdir crawler com git ls-files + ripgrep fallback (feat)
**Link:** https://github.com/QwenLM/qwen-code/pull/3214  
**Autor:** scrollDynasty | **Status:** OPEN  
Substitui crawler baseado em fdir por estratégia two-tier: `git ls-files` primário + ripgrep fallback. Resolve lentidão em large repos e respeita `.gitignore`. Fecha #3137.

---

### PR #3295 — Avoid leaking process exit listeners in ProcessTransport (fix)
**Link:** https://github.com/QwenLM/qwen-code/pull/3295  
**Autor:** reidliu41 | **Status:** OPEN  
Corrige bug de lifecycle de listeners no SDK transport layer. `ProcessTransport` estava registrando listeners de exit separados para cada instância, causando memory leak.

---

### PR #3303 — Detect Zed.app on macOS when CLI not in PATH (fix)
**Link:** https://github.com/QwenLM/qwen-code/pull/3303  
**Autor:** gy1016 | **Status:** OPEN  
Corrige false negative na detecção do Zed editor em macOS quando `zed` CLI não está no PATH (instalação via Homebrew ou direct download). Fecha #3287.

---

### PR #3297 — Lazy factory registration with inflight concurrency dedup (fix)
**Link:** https://github.com/QwenLM/qwen-code/pull/3297  
**Autor:** doudouOUC | **Status:** OPEN  
Introduz lazy factory registration no `ToolRegistry` com deduplicação de concorrência. Resolve P0 bug: duas chamadas simultâneas a `ensureTool()` podiam instanciar o mesmo tool duas vezes, causando memory leak de listeners em AgentTool/SkillTool.

---

### PR #3100 — Optimize compact mode UX (feat)
**Link:** https://github.com/QwenLM/qwen-code/pull/3100  
**Autor:** chiga0 | **Status:** CLOSED  
Melhorias UX no compact mode (Ctrl+O): atalhos adicionados ao overlay `?`, sync de settings, safety checks. Baseado em PR #3047.

---

### PR #3248 — Add complete hooks support for ACP integration (feat)
**Link:** https://github.com/QwenLM/qwen-code/pull/3248  
**Autor:** DennisYu07 | **Status:** CLOSED  
Adiciona suporte completo de hooks para ACP (lifecycle, prompt interception, tool execution, stop hooks) alinhando com implementação core.

---

## 5. Tendências de Pedidos de Features

### Hooks & Extensibilidade (Maior volume)
A comunidade demonstra interesse significativo em expandir o sistema de hooks: HTTP hooks (POST para serviços externos com SSRF protection), function hooks (callbacks SDK), async hooks, e prompt hooks (LLM-based condition evaluation). Os PRs #2827 e #2990 estão directamente neste vector.

**Insight:** O ecossistema Qwen Code está amadurecendo para uso em ambientes enterprise onde customização de behaviour é crítica.

---

### Performance & Startup
Múltiplos PRs addressam performance de startup: API preconnect (#3085), profiler de startup (#3232), e replacement do crawler fdir (#3214). Há também a issue #94 antiga pedindo otimização de context (file tree placement).

**Insight:** Usuários com projetos grandes estão a sentir o peso de crawlers não otimizados.

---

### Model Fallback & Reliability
Issue #422 propõe variável `OPENAI_FALLBACK_MODEL` para quando o modelo principal atinge limites. Issue #1742 reporta instabilidade nos rate limits.

**Insight:** Quando modelos falham, a experiência actual é poor — a comunidade quer graceful degradation.

---

### OAuth & Autenticação
A descontinuação do tier gratuito dominou as issues. Features relacionadas pedidas: `/quota` command para ver limites, melhor UI para quando OAuth está descontinuado (#3299), e solução para OAuth session persistindo após switch para API key (#1855).

**Insight:** A transição para modelo paid está a causar fricção significativa.

---

## 6. Pontos de Atenção para Desenvolvedores

### ⚠️ Breaking Changes
- **Qwen OAuth free tier descontinuado**: Users autenticados via OAuth que não têm plano paid vão receber "quota exceeded" em todas as requests. Desenvolvedores devem migrar para alternativas (OpenRouter, Fireworks AI, API key directo).

### 🐛 Bugs Recorrentes a Observar
1. **Statusline crash (EBADF)** — macOS + Node 22 afectado; evitar exec() sem try/catch
2. **MCP client 2 connections limit** — production multi-node broken; watch PR #3277 para fix
3. **Shell commands fail silently com node_modules** — chokidar sem ignored; root cause identificada em #3289
4. **OAuth auth succeeds mas requests falham** — mismatch no error handling após discontinuation

### 🔧 Workarounds Disponíveis
- **Problema de autenticação pós-discontinuação**: Usuários afectados devem migrar para API key ou OpenRouter conforme sugerido nos erros.
- **Zed editor não detectado**: PR #3303 resolve, aguardar merge.
- **Tab key insere literal `\t`**: PR #3270 corrigiu no 0.14.5.

### 📈 Métricas do Dia
- **44 issues** com actividade nas últimas 24h
- **40 PRs** com actividade nas últimas 24h
- **1 release** (v0.14.5)
- **Issue mais quente**: #3203 com 51 comentários

---

*Relatório gerado automaticamente via análise de dados do GitHub | QwenLM/qwen-code | 2026-04-16*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*