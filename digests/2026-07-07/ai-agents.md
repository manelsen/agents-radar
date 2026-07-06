# Resumo diário do ecossistema de agentes de IA 2026-07-07

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-07-06 21:25 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório de Projeto NullClaw — 2026-07-07

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **atividade extremamente reduzida** em 07/07/2026. Nas últimas 24 horas, não houve atualizações em issues e nenhuma release foi publicada. Um único PR de dependência (atualização do Alpine Linux 3.23 → 3.24) permanece aberto, indicando que a manutenção do projeto está em modo de espera. O repositório demonstra sinais claros de baixa atividade comunitária, sugerindo possível estágio de manutenção mínima ou hibernação do projeto.

---

## 2. Lançamentos

**Nenhum novo release detectado.**

- ⏸️ O projeto não publicou versões nos últimos dados disponíveis
- ℹ️ Última atividade relevante: PR de dependência em 06/07/2026

---

## 3. Progresso do Projeto

| PR | Status | Impacto |
|----|--------|---------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | 🟡 ABERTO | Atualização de dependência Docker (Alpine 3.24) |

**Análise:** O PR aberto (#956) é uma atualização de dependência automatizada pelo Dependabot. **Nenhum progresso significativo** registrado nas últimas 24h — nenhum merge, fechamento ou merged PRs hoje.

---

## 4. Temas Quentes da Comunidade

**Nenhuma issue ou PR com atividade comunitária significativa detectada.**

- 📊 Issues ativas: 0
- 💬 Comentários/reações: N/A
- 🔥 Temas em destaque: Nenhum

**Observação:** A ausência de discussão comunitária indica necessidade de revitalização ou reavaliação do roadmap.

---

## 5. Bugs e Estabilidade

**Sem reports de bugs nas últimas 24h.**

| Severidade | Quantidade |
|------------|------------|
| Crítica | 0 |
| Alta | 0 |
| Média | 0 |
| Baixa | 0 |

✅ **Status de estabilidade:** Sem problemas reportados (ou sem dados de issues ativos)

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova feature request registrada.**

- 🚀 Requests abertos: 0
- 📋 Sinais de roadmap: Nenhum visível
- 🔮 Próxima versão: Não especificada

---

## 7. Resumo de Feedback dos Usuários

**Sem dados de feedback disponíveis.**

> ⚠️ A ausência de issues e comentários indica possível:
> - Baixa base de usuários ativos
> - Projeto em modo de manutenção
> - Ausência de canal formal de feedback no GitHub

---

## 8. Backlog que Merece Atenção

| Item | Tipo | Status | Idade | Prioridade |
|------|------|--------|-------|------------|
| Atualização Alpine Docker | Dependência | 🟡 ABERTA | ~22 dias | 🔵 Baixa |

**PR #956** — Atualização do alpine de 3.23 para 3.24
- [Ver PR](https://github.com/nullclaw/nullclaw/pull/956)
- Aguardando merge há ~22 dias
- Impacto: Manutenção de segurança básica

---

## Métricas Consolidada do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas (24h) | 0 |
| Issues fechadas (24h) | 0 |
| PRs abertos (24h) | 1 |
| PRs merged/fechados (24h) | 0 |
| Releases | 0 |
| Comentários totais | 0 |

---

## Conclusão

NullClaw demonstra **saúde operacional básica** (sem bugs reportados) porém com **atividade comunitária mínima**. A atualização de dependência Docker (#956) permanece pendente há quase um mês, sinalizando necessidade de atenção dos mantenedores. Recomenda-se:

1. **Revisar e merger o PR #956** — manutenção de segurança
2. **Avaliar viabilidade do projeto** — baixa atividade pode indicar necessidade de estratégia de reativação ou archivamento formal

---

*Relatório gerado em: 2026-07-07 | Fonte: GitHub API — nullclaw/nullclaw*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo do Ecossistema de Agentes de IA Open Source

**Data de referência:** 2026-07-07  
**Projetos analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **duas velocidades distintas** neste período. De um lado, projetos como **CoPaw, NanoBot e ZeroClaw** demonstram atividade intensa com dezenas de issues e PRs atualizados diariamente, indicando equipes ativas e comunidades engajadas em ciclos rápidos de desenvolvimento. Do outro, **NullClaw** encontra-se em modo de hibernação ou manutenção mínima, sem atividade comunitária significativa. Os temas técnicos dominantes incluem **segurança e hardening** (evidenciado pela auditoria de 35 vulnerabilidades no NanoBot), **interoperabilidade multi-canal** (Telegram, Feishu, WhatsApp, LINE, Mattermost) e **otimização de custos via prompt caching** (PicoClaw, NanoBot). Observa-se também uma tendência de **modernização de infraestruturas legadas**, como a migração do IronClaw para pnpm/Vite/TypeScript e a reformulação do stack Postgres no IronClaw.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | Bugs Críticos | Saúde Geral |
|---------|--------------|-----------|----------------|--------------|-------------|
| **CoPaw** | 34 | 50 | 1 (v1.1.12.post3) | 5 | 🟢 Excelente |
| **NanoBot** | 47 | 500 | 0 | 6 (3 security) | 🟢 Excelente |
| **ZeroClaw** | 50 | 50 | 0 | 5 (S1/S2) | 🟢 Saudável |
| **Hermes Agent** | 50 | 50 | 0 | 2 (P1) | 🟢 Saudável |
| **IronClaw** | 35 | 50 | 0 | 1 (P1) | 🟡 Bom |
| **PicoClaw** | 4 | 5 | 0 | 1 | 🟡 Bom |
| **NullClaw** | 0 | 1 | 0 | 0 | 🔴 Crítico |

**Observações:**
- **NanoBot** registra volume excepcional de PRs (500), indicando uso intensivo de automação ou bots de triagem
- **CoPaw** é o único projeto com release formal no período, demonstrando disciplina de versioning
- **NullClaw** apresenta sinais claros de abandono ou transição de ownership

---

## 3. Posicionamento do Projeto Principal (NullClaw)

NullClaw, referenciado como projeto de referência principal, encontra-se em **estado de manutenção mínima**, apresentando desafios estratégicos significativos:

### Limitações Identificadas

| Aspecto | Situação | Implicação |
|---------|----------|------------|
| Atividade comunitária | Praticamente nula | Baixa visibilidade e atração de contribuidores |
| Bugs em aberto | 0 (sem dados) | Possível ausência de canal de reporte |
| PRs pendentes | 1 (dependência Docker há 22 dias) | Mantenedores não ativos |
| Releases | Nenhuma recente | Usuários sem atualizações de segurança |

### Comparação com Pares

NullClaw perde em quase todas as métricas para os projetos analisados:

| Métrica | NullClaw | NanoBot | CoPaw | ZeroClaw |
|---------|----------|---------|-------|----------|
| Issues ativas (24h) | 0 | 47 | 34 | 50 |
| PRs processados (24h) | 0 | 8 merged | 25 merged | 10 merged |
| Bugs críticos tratados | N/A | 6 | 5 | 5 |
| Releases (30 dias) | 0 | Múltiplas | Múltiplas | Regulares |

### Recomendações para NullClaw

1. **Reavaliação de viabilidade:** Determinar se o projeto deve ser arquivado formalmente, transferido para novos mantenedores, ou reativado com estratégia clara
2. **Comunicação de status:** Publicar um README atualizado indicando o estado do projeto
3. **Processo de herança:** Se houver interesse externo, estabelecer path para transferência de ownership

---

## 4. Focos Técnicos Compartilhados

Os projetos demonstram convergência em diversas áreas técnicas, sinalizando necessidades reais do mercado:

### 4.1 Segurança e Hardening

| Projeto | Evidência |
|---------|-----------|
| **NanoBot** | Auditoria completa identificando 35 vulnerabilidades (API keys em plaintext, SSRF, fork bombs, workspace exposure) |
| **Hermes Agent** | PRs de hardening de subprocess env, proteção de secrets em snapshots |
| **ZeroClaw** | RFC de pluggable security enforcement provider (target v0.9.0) |
| **IronClaw** | 8 issues de performance identificadas, recoverability stack |

**Síntese:** A segurança emerge como preocupação central, especialmente em agentes que executam código arbitrário e acessam filesystems. O mercado exige isolamento robusto, validação de inputs e proteção contra abuse vectors.

### 4.2 Interoperabilidade Multi-Canal

| Canal | Projetos com Suporte | Status |
|-------|---------------------|--------|
| **Telegram** | NanoBot, Hermes Agent, ZeroClaw, CoPaw | Bugs recorrentes |
| **Feishu/Lark** | NanoBot, Hermes Agent, CoPaw | Suporte crescente |
| **WhatsApp** | ZeroClaw | Em desenvolvimento |
| **LINE** | ZeroClaw | PR merged |
| **Mattermost** | NanoBot | Recém-merged |
| **Matrix** | ZeroClaw | Em desenvolvimento |
| **QQ/OneBot** | ZeroClaw | Feature request ativa |

**Síntese:** A demanda por multi-canal é ubíqua, mas a implementação permanece desafiadora, com bugs de estabilidade afetando quase todos os projetos.

### 4.3 Gerenciamento de Contexto e Memória

| Projeto | Foco Específico |
|---------|-----------------|
| **PicoClaw** | Prompt caching via Anthropic cache_control |
| **NanoBot** | Compressão de contexto, streaming timeouts |
| **CoPaw** | Auto-memory, busca vetorial, compressão |
| **Hermes Agent** | Memory loss bug (#51646), audit trails |
| **IronClaw** | HST Postgres v2 para latência |

**Síntese:** O gerenciamento eficiente de contexto é crítico para viabilidade econômica (custos de tokens) e performance. Nenhum projeto resolveu completamente este desafio.

### 4.4 Suporte Windows e Multi-Plataforma

| Projeto | Problemas Reportados |
|---------|---------------------|
| **NanoBot** | Gateway --background dessincronizado, cmd.exe vs PowerShell |
| **Hermes Agent** | browser_navigate falha no Windows + Brave |
| **ZeroClaw** | Dashboard indisponível via macOS brew |
| **IronClaw** | N+1 queries em event store |

**Síntese:** A fragmentação de plataformas aumenta complexidade de manutenção e cria gaps de experiência para usuários não-Linux.

---

## 5. Análise de Diferenciação

### 5.1 Diferenciação por Arquitetura

| Projeto | Arquitetura Distintiva | Público-Alvo |
|---------|----------------------|--------------|
| **NullClaw** | Não especificada (dados limitados) | Indeterminado |
| **NanoBot** | Shell tools, streaming-first, multi-provider | Desenvolvedores avançados |
| **Hermes Agent** | Desktop app, gateway multi-plataforma | Usuários finais desktop |
| **PicoClaw** | Provider abstraction, prompt caching | Otimização de custos |
| **IronClaw** | Rust-based, event sourcing, WASM | Enterprise automation |
| **CoPaw** | Runtime 2.0, ACP protocol, CLI-first | Times DevOps/Platform |
| **ZeroClaw** | Modular channels, MCP, plugin system | Desenvolvedores de plugins |

### 5.2 Diferenciação por Foco de Mercado

| Segmento | Projetos Liderando | Evidência |
|----------|-------------------|-----------|
| **Enterprise/Team** | IronClaw, CoPaw | Multi-usuário, OAuth, audit logs |
| **Custo-otimizado** | PicoClaw | Prompt caching, multi-provider |
| **Produtividade pessoal** | Hermes Agent | Desktop app, TUI |
| **Desenvolvedor/Plugin** | ZeroClaw | WASM, MCP, RFC process |
| **Segurança** | NanoBot | Auditoria ativa, hardening |

### 5.3 Posicionamento Competitivo

```
                    Alta Sofisticação
                           │
    CoPaw ─────────┬───────┤
                   │       │
    IronClaw ──────┤       ├── Hermes Agent
                   │       │
    ZeroClaw ──────┤       ├── NanoBot
                   │       │
                   │       │
    PicoClaw ──────┴───────┘
                           │
                    Baixa Sofisticação
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Projeto | PRs/dia | Taxa de Fechamento | Velocidade |
|---------|---------|---------------------|------------|
| **NanoBot** | ~8 merged | ~27% (8/30 bugs) | 🟡 Moderada |
| **CoPaw** | 25 merged | ~36% (9/25 issues) | 🟢 Rápida |
| **ZeroClaw** | 10 merged | ~20% (estimado) | 🟡 Moderada |
| **Hermes Agent** | 10 merged | ~20% | 🟡 Moderada |
| **IronClaw** | 5+ merged | ~15% | 🟡 Moderada |
| **PicoClaw** | 1 merged | ~50% | 🟢 Rápida (baixo volume) |
| **NullClaw** | 0 merged | 0% | 🔴 Estagnada |

### 6.2 Qualidade de Engajamento

| Projeto | RFCs Ativas | Issue/Comentário Ratio | Maturidade |
|---------|-------------|-------------------------|------------|
| **ZeroClaw** | 3+ RFCs abertas | Alto (discussão estruturada) | 🟢 Matura |
| **Hermes Agent** | 1 RFC (RBAC) | Alto | 🟢 Matura |
| **NanoBot** | Nenhuma | Médio | 🟡 Em crescimento |
| **CoPaw** | Tracker v2.0 | Médio | 🟡 Em crescimento |
| **IronClaw** | Nenhuma explícita | Baixo-Médio | 🟡 Em crescimento |
| **PicoClaw** | Proposal (cache) | Baixo | 🟡 Emergente |
| **NullClaw** | Nenhuma | N/A | 🔴 Inativa |

### 6.3 Contribuição Externa

| Projeto | Sinais de Contribuição Externa |
|---------|--------------------------------|
| **CoPaw** | 10+ contribuidores, PRs de testes unitários |
| **NanoBot** | Contribuições de hamb1y (auditorias), MrKich |
| **Hermes Agent** | DanBennettUK, briancaffey |
| **PicoClaw** | oKatTjC (feature request) |
| **IronClaw** | Cobertura de testes em expansão |
| **ZeroClaw** | RFCs da comunidade, PRs de canais |
| **NullClaw** | Nenhuma detectável |

---

## 7. Sinais de Tendência

### 7.1 Tendências de Mercado Extraídas

| Tendência | Evidência | Projetos |
|-----------|-----------|----------|
| **Agent Composition/Orchestration** | Demanda por delegação a agentes externos (OpenCode, Codex) | NanoBot (#3436), Hermes Agent (#59857) |
| **Enterprise Readiness** | OAuth, audit logs, RBAC, multi-tenancy | IronClaw, Hermes Agent, CoPaw |
| **Plugin/Extension Ecosystems** | WASM plugins, MCP server, skills platform | ZeroClaw, IronClaw |
| **Cost Optimization** | Prompt caching, multi-provider failover | PicoClaw, NanoBot, ZeroClaw |
| **Cross-Platform Parity** | Windows bugs recorrentes, macOS brew issues | NanoBot, Hermes Agent, ZeroClaw |
| **Security Hardening** | Auditorias, SSRF protection, sandboxing | NanoBot, Hermes Agent, ZeroClaw |
| **Asian Market Expansion** | Feishu, QQ, LINE, Zalo, WhatsApp | NanoBot, CoPaw, ZeroClaw |

### 7.2 Padrões de Uso Emergentes

1. **Agentes Compostos:** Usuários querem combinar múltiplos agentes especializados (NanoBot + OpenCode/Codex), sinalizando demanda por arquiteturas de orquestração.

2. **Deployments Autônomos:** Necessidade de workspaces isolados, prompt injection defense, e limites de recursos (NanoBot: fork bomb protection).

3. **Context como Recurso Escasso:** Com modelos de contexto crescente (1M+ tokens), projetos investem em caching inteligente e compressão sem perda semântica.

4. **Multi-Tenancy:** Sistemas originalmente single-user evoluem para suportar times e organizações (CoPaw #5780, Hermes RBAC).

### 7.3 Recomendações Estratégicas

| Stakeholder | Recomendação |
|-------------|--------------|
| **Desenvolvedores contributing** | Focar em segurança (high leverage), multi-canal (alta demanda), ou otimização de contexto (diferenciação) |
| **Usuários escolhendo plataforma** | Priorizar CoPaw ou NanoBot para desenvolvimento ativo; evitar NullClaw; avaliar IronClaw para enterprise |
| **Empresas avaliando vendors** | Priorizar projetos com RFC process (ZeroClaw, Hermes Agent), auditorias de segurança (NanoBot), e multi-tenancy (CoPaw, IronClaw) |
| **NullClaw (se reativar)** | Requer estratégia de reativação clara, comunicação de status, e atração de contribuidores antes de competir |

---

## Nota Metodológica

Este relatório foi gerado com base em resumos de atividade comunitária de 2026-07-07. Os dados refletem um snapshot pontual e podem não representar tendencias de longo prazo. A avaliação de "saúde" é relativa ao ecossistema analisado e não uma classificação absoluta de qualidade.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-07-07

---

## 1. Panorama do dia

NanoBot apresenta altíssima atividade comunitária em 06/07/2026, com **47 issues atualizadas** e impressionantes **500 PRs atualizadas** nas últimas 24h. O destaque do dia é a publicação de uma **auditoria completa de segurança** (#4815) identificando **35 vulnerabilidades e code smells**, incluindo falhas críticas como armazenamento de chaves de API em plaintext e exposição do filesystem por padrão. Simultaneamente, a comunidade está atolada em correções de bugs de estabilidade (exec sessions, concurrent file writes, streaming timeouts) e uma série de PRs de refatoração para eliminar代码 duplicada. A velocidade de merge é baixa (8 PRs fechados), sugerindo que a base de código está passando por uma fase intensiva de hardening antes de um próximo release.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

A ausência de releases combinada com a avalanche de issues de auditoria e bug fixes indica que a equipe core está focada em estabilização interna. É esperado um release corretivo em breve para endereçar as vulnerabilidades críticas identificadas.

---

## 3. Progresso do Projeto

### PRs merged/fechados hoje (8 total)

| PR | Autor | Descrição | Impacto |
|----|-------|-----------|---------|
| [#2060](https://github.com/HKUDS/nanobot/pull/2060) | MrKich | Shell tool: caminhos configuráveis com `restrict_to_workspace=True` | Permite execuções como `apt list` sem bloqueio de `/dev/null` |
| [#4654](https://github.com/HKUDS/nanobot/pull/4654) | goodtiding5 | CLI: print response text quando streaming falha em modo interativo | Conserta perda silenciosa de respostas completas |
| [#4459](https://github.com/HKUDS/nanobot/pull/4459) | goodtiding5 | **feat: novo canal Mattermost** — WebSocket + REST API com reconnect automático | Suporte a nova plataforma de mensagens |
| [#4673](https://github.com/HKUDS/nanobot/pull/4673) | goodtiding5 | Dream: audit records alinhados com git diff real | Integridade do log de consolidação |
| [#4818](https://github.com/HKUDS/nanobot/pull/4818) | axelray-dev | Runtime: guarda `web_fetch` contra URL `None` | Evita cache poison com `"web_fetch:none"` |
| [#4765](https://github.com/HKUDS/nanobot/pull/4765) → closed (issue) | The-Markitecht | Bug: async context manager protocol | Corrigido em upstream |
| [#4511](https://github.com/HKUDS/nanobot/issues/4511) → closed | Quincy-Zh | Windows `--background` gateway | Corrigido |

### PRs abertos com maior prioridade

| PR | Autor | Descrição | Prioridade |
|----|-------|-----------|------------|
| [#4671](https://github.com/HKUDS/nanobot/pull/4671) | hamb1y | **Security**: pin DNS validado para checks SSRF | P0 |
| [#4664](https://github.com/HKUDS/nanobot/pull/4664) | hamb1y | Proteger dream history durante compaction | P1 |
| [#4689](https://github.com/HKUDS/nanobot/pull/4689) | bingqilinweimaotai | OAuth status warnings | P1 |
| [#4816](https://github.com/HKUDS/nanobot/pull/4816) | axelray-dev | Runner: catch `Exception` ao invés de `BaseException` | P1 |
| [#4814](https://github.com/HKUDS/nanobot/pull/4814) | axelray-dev | Loop: propagar `CancelledError` ao invés de swallow | P1 |

**Análise:** A comunidade está respondendo rapidamente à auditoria de segurança, com múltiplos PRs P0/P1 abertos no mesmo dia para corrigir findings críticos.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reações)

| Issue | Título | Comentários | Reações | Tema |
|-------|--------|-------------|---------|------|
| [#4061](https://github.com/HKUDS/nanobot/issues/4061) | Bug: OpenAI-compatible text-format tool calls não parseados | 6 | 0 | Compatibilidade com providers terceiros |
| [#4511](https://github.com/HKUDS/nanobot/issues/4511) | Windows `--background` gateway | 4 | 0 | Suporte Windows |
| [#4544](https://github.com/HKUDS/nanobot/issues/4544) | Windows exec: cmd.exe vs PowerShell inconsistente | 3 | 0 | Multiplataforma |
| [#3436](https://github.com/HKUDS/nanobot/issues/3436) | Enhancement: Call external agent (OpenCode/Codex) | 3 | 0 | Arquitetura de agentes |
| [#4637](https://github.com/HKUDS/nanobot/issues/4637) | Telegram long message truncates | 2 | 0 | Canal Telegram |
| [#4619](https://github.com/HKUDS/nanobot/issues/4619) | Feishu: `/new` com system message divider | 2 | 0 | Canal Feishu |

### Análise dos temas quentes

**1. Compatibilidade OpenAI-compatível (Issue #4061)** — Providers que emitem tool calls como texto markup ao invés de `tool_calls` estruturados não funcionam. Isso indica que NanoBot precisa melhorar seu parsing de respostas de providers não-oficiais.

**2. Suporte Windows (Issues #4511, #4544)** — Problemas crônicos com comportamento de shell no Windows, especialmente com `--background` e exec de comandos multi-linha vs single-line. A issue #4544 destaca que `cd` não persiste entre execuções cmd.exe.

**3. Arquitetura de agentes externos (Issue #3436)** — Demanda para delegar trabalho a agentes externos como OpenCode/Codex, sugerindo que NanoBot está sendo comparado a frameworks mais autônomos.

**4. Multi-canal (Issues #4637, #4619)** — Telegram truncando mensagens longas e Feishu querendo separadores visuais para novas sessões. Suporte a plataformas asiáticas em destaque.

---

## 5. Bugs e Estabilidade

### Auditoria de Segurança: 35 Findings (Issue #4815)

A auditoria profunda publicada em 06/07 identificou problemas organizados por severidade:

#### 🔴 Críticos (requerem ação imediata)

| ID | Bug | Severidade | Impacto |
|----|-----|------------|---------|
| - | [#4803](https://github.com/HKUDS/nanobot/issues/4803) | **Security** | API keys em plaintext em `~/.nanobot/config.json` |
| - | [#4797](https://github.com/HKUDS/nanobot/issues/4797) | **Security** | Sem limites de recursos em subprocessos shell (fork bombs possíveis) |
| - | [#4796](https://github.com/HKUDS/nanobot/issues/4796) | **Security** | `restrict_to_workspace=False` por padrão — filesystem exposto |

#### 🟠 Altos

| ID | Bug | Severidade | Impacto |
|----|-----|------------|---------|
| #4798 | Concurrent file writes não serializados | Bug | Corrupção de workspace |
| #4795 | Streaming LLM bypassa timeout wall-clock | Bug | Recursos consumidos indefinidamente |
| #4794 | Exec sessions sem cleanup — orphan processes | Bug | Leak de processos |
| #4793 | Global ExecSessionManager singleton — cross-session data leak | Bug | Dados de sessões misturados |
| #4792 | `/stop` descarta mensagens pendentes permanentemente | Bug | Perda de mensagens |
| #4791 | Sem rate limiting por usuário — DoS trivial | DoS | Flooding de mensagens |

#### 🟡 Médios

| ID | Bug | Severidade | Impacto |
|----|-----|------------|---------|
| #4802 | Token budget 128 spurioso quando context_window=0 | Bug | Comportamento inesperado |
| #4801 | `KeyError` em `message['role']` se dict malformado | Bug | Crash em sessões corrompidas |
| #4800 | `.strip()` em `msg.content` lista — crash multimodal | Bug | Multimodal messages não funcionam |
| #4799 | Cache signature falsa para URL `None` | Bug | Throttle incorreto |
| #4805 | `suppress(Exception)` engole erros de validação | Bug | Diagnóstico impossível |
| #4804 | `CancelledError` leak silencioso | Bug | Iterações perdidas |

### Bugs reportados individualmente

| Issue | Descrição | Canal | Status |
|-------|-----------|-------|--------|
| [#4061](https://github.com/HKUDS/nanobot/issues/4061) | Tool calls em texto markup não parseados | Provider compat | CLOSED |
| [#4511](https://github.com/HKUDS/nanobot/issues/4511) | Gateway `--background` dessincronizado no Windows | CLI/Windows | CLOSED |
| [#4544](https://github.com/HKUDS/nanobot/issues/4544) | Shell semantics inconsistentes Windows | Exec | CLOSED |
| [#4765](https://github.com/HKUDS/nanobot/issues/4765) | Async context manager não suportado | Python SDK | CLOSED |
| [#4637](https://github.com/HKUDS/nanobot/issues/4637) | Telegram long message truncates parcialmente | Telegram | OPEN |

**Métricas de estabilidade:**
- **Bugs críticos abertos**: 6 (3 security, 3 funcional)
- **Bugs altos abertos**: 6
- **Total bugs abertos (30 items)**: ~25
- **Taxa de fechamento**: ~27% (8/30)

---

## 6. Pedidos de Features e Sinais de Roadmap

### Enhancements em destaque

| Issue | Descrição | Sinal de mercado |
|-------|-----------|------------------|
| [#3436](https://github.com/HKUDS/nanobot/issues/3436) | **Call external agent** — delegar para OpenCode/Codex | Agentes compostos, orchestration |
| [#4619](https://github.com/HKUDS/nanobot/issues/4619) | Feishu: system message para new session | Suporte a plataformas chinesas |
| [#4671](https://github.com/HKUDS/nanobot/pull/4671) | SSRF DNS pinning | Hardening de segurança |
| [#4689](https://github.com/HKUDS/nanobot/pull/4689) | OAuth status warnings | Enterprise readiness |

### Refactors aguardando merge

| Issue | Descrição | Impacto |
|-------|-----------|---------|
| [#4810](https://github.com/HKUDS/nanobot/issues/4810) | Unificar markdown-to-rich-text converters (Telegram, Signal, Feishu) | Redução de ~400 linhas duplicadas |
| [#4807](https://github.com/HKUDS/nanobot/issues/4807) | Extrair `BaseChannel` com `__init__` padrão (16 arquivos) | DRY, manutenibilidade |
| [#4806](https://github.com/HKUDS/nanobot/issues/4806) | Remover código morto (11 funções órfãs, 8 test-only, 3 exports) | Limpeza, redução de superfície |

### Potencial roadmap signals

1. **Segurança como prioridade**: 3 PRs P0/P1 abertos no mesmo dia da auditoria indica foco em hardening.
2. **Multi-plataforma**: Suporte Mattermost (merged), problemas Windows recorrentes.
3. **Enterprise features**: OAuth warnings, audit trails, workspace isolation.
4. **Agent orchestration**: Demanda por delegação a agentes externos (#3436).

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas

**🖥️ Suporte Windows fragmentado**
- Issue #4511: Gateway em background dessincroniza PID e log
- Issue #4544: Comportamento de shell inconsistente entre cmd.exe e PowerShell
- Impacto: Usuários Windows experimentam comportamento imprevisível com comandos multi-linha

**📱 Limitações multi-canal**
- Issue #4637: Mensagens longas no Telegram são truncadas e enviadas em partes, mas partes intermediárias não renderizam
- Issue #4619: Usuários Feishu querem separadores visuais para novas sessões

**🔧 Experiência de desenvolvimento**
- Issue #4765: Python SDK básico (`async with`) não funciona conforme documentação
- Issue #4061: Providers OpenAI-compatíveis emitem tool calls como texto, não funciona

**⚡ Performance e robustez**
- Vários reports de mensagens perdidas (`/stop`), exec sessions vazando processos, e streaming infinito sem timeout

### Cenários de uso emergentes

1. **Agente composto**: Usuários querem combinar NanoBot com OpenCode/Codex para tarefas complexas
2. **Enterprise deployment**: Multi-canal (Mattermost, Feishu, Telegram), OAuth, audit logs
3. **Ambiente restrito**: Necessidade de workspace isolation robusto

### Satisfação percebida

A comunidade está **ativamente reportando** com detalhes técnicos excelentes (múltiplas auditorias de hamb1y). A velocidade de resposta da equipe core é rápida em PRs de segurança. A taxa de issues fechadas nas últimas 24h (~27%) indica que a equipe está processando reports, mas o volume de novos bugs (especialmente os 35 da auditoria) cria backlog.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta há >14 dias

| Issue | Criado | Dias | Título | Prioridade |
|-------|--------|------|--------|------------|
| [#3436](https://github.com/HKUDS/nanobot/issues/3436) | 2026-04-25 | 72 | Enhancement: Call external agent | Enhancement |
| [#4061](https://github.com/HKUDS/nanobot/issues/4061) | 2026-05-29 | 38 | OpenAI text-format tool calls bug | Bug |
| [#4068](https://github.com/HKUDS/nanobot/issues/4068) | 2026-05-29 | 38 | Matrix stream buffer keyed only by chat_id | Bug |
| [#4145](https://github.com/HKUDS/nanobot/issues/4145) | 2026-06-01 | 35 | Weather Skill | Feature |
| [#4511](https://

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-07-07

---

## 1. Panorama do Dia

O Hermes Agent registrou **alta atividade comunitária** nas últimas 24h, com 50 issues e 50 PRs atualizados. A distribuição foi equilibrada: 35 issues abertas/ativas e 10 PRs merged/fechados. Não houve lançamentos de novas versões hoje. Os temas dominantes incluem **bug fixes urgentes** para o componente Desktop (especialmente relacionados ao model picker e autenticação), **problemas com o provider Codex GPT-5.5** (compressão, autoraise notices e timeouts), e **evoluções na arquitetura de permissões e ferramentas**. A saúde geral do projeto reflete um ciclo de manutenção ativo, com muitos PRs de hardening e robustez submetidos no mesmo dia.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto encontra-se em fase de desenvolvimento intensivo pré-release, com correções sendo mergeadas diretamente no `main`.

---

## 3. Progresso do Projeto

Os seguintes PRs foram **merged/fechados** hoje, representando avanços concretos:

| PR | Autor | Título | Impacto |
|----|-------|--------|---------|
| [#59853](https://github.com/NousResearch/hermes-agent/pull/59853) | DanBennettUK | fix: preserve Photon reply context | **CLOSED** — Propaga contexto de resposta/quote do Photon para o Hermes, hidratando texto quoted, remetente e direção. Melhora a experiência em plataformas iMessage. |
| [#13727](https://github.com/NousResearch/hermes-agent/pull/13727) | briancaffey | feat(gateway): echo voice-message transcripts | **CLOSED** — Novo comportamento opt-in que ecoa transcrições de mensagens de voz de volta ao usuário antes da resposta do agente, útil para verificação de STT. Suporta Telegram, Discord e Slack. |
| [#42187](https://github.com/NousResearch/hermes-agent/issues/42187) | GodsBoy | fix: Show Codex gpt-5.5 autoraise notice once per gateway session | **CLOSED** — Elimina notificação repetida do gpt-5.5 compaction threshold por sessão gateway. |

**PRs abertos hoje com potencial de merge iminente:**

- [#59857](https://github.com/NousResearch/hermes-agent/pull/59857) — `feat(approval): owner/user permission tier` — Implementa a metade "user tier" do RBAC para plataformas de mensagens (non-admins não podem auto-aprovar comandos perigosos).
- [#59840](https://github.com/NousResearch/hermes-agent/pull/59840) — `fix: harden subprocess env handling` — Remove secrets dos snapshots de ambiente e isola sessões de browser.
- [#59841](https://github.com/NousResearch/hermes-agent/pull/59841) — `fix: tolerate malformed tool data` — Trata args não-objeto em compressão e normaliza payloads auxiliares.
- [#59843](https://github.com/NousResearch/hermes-agent/pull/59843) — `fix(computer-use): Linux foreground-click + doctor uid guards` — Corrige false-success em clicks Linux e crash em uid lookup.
- [#59844](https://github.com/NousResearch/hermes-agent/pull/59844) — `feat(codex): add agent.text_verbosity config` — Expõe `text.verbosity` da Responses API para controle de comprimento em GPT-5+.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

**#527 — Feature: Gateway Permission Tiers (RBAC)**  
🔗 https://github.com/NousResearch/hermes-agent/issues/527  
📊 11 comentários · 6 👍  
📌 P2 · `comp/gateway` · `area/auth`

> O Hermes Agent possui modelo de autorização **binário** para plataformas gateway: ou totalmente autorizado ou completamente bloqueado. Esta proposal pede tiers de permissão (Owner/Admin/User/Guest), acumulando 6 reactions em menos de 4 meses. A discussão ativa (11 comentários) indica demanda real por controle granular em ambientes multi-usuário.

---

**#51646 — Bug: Gateway Memory Loss**  
🔗 https://github.com/NousResearch/hermes-agent/issues/51646  
📊 4 comentários  
📌 **P1** · `comp/gateway` · `sweeper:risk-session-state`

> Mensagens são inseridas na tabela `messages` com `active = NULL` ao invés de `active = 1`. O loader de transcripts filtra `WHERE active = 1`, resultando em **zero histórico de conversa** carregado em todas as plataformas gateway. Bug crítico para qualquer uso em produção.

---

**#58437 — Bug: MoA _collect_stream drops tool_calls em quiet mode**  
🔗 https://github.com/NousResearch/hermes-agent/issues/58437  
📊 5 comentários  
📌 P2 · `comp/agent`

> Em modo quieto (kanban workers, subagents, `hermes -z`), a função `_collect_stream` do MoA não coleta `delta.tool_calls`, causando crash `empty_response_exhausted`. Impacta fluxos de automação.

---

**Série Codex GPT-5.5 (múltiplas issues fechadas hoje):**

| Issue | Tema | Status |
|-------|------|--------|
| [#42187](https://github.com/NousResearch/hermes-agent/issues/42187) | Notice repetido por sessão gateway | CLOSED |
| [#47241](https://github.com/NousResearch/hermes-agent/issues/47241) | Notice repetido em cada mensagem | CLOSED (duplicate) |
| [#46786](https://github.com/NousResearch/hermes-agent/issues/46786) | Notice "once-per-session" vs instance-level | CLOSED (duplicate) |
| [#54432](https://github.com/NousResearch/hermes-agent/issues/54432) | Deduplicar sem desabilitar autoraise | CLOSED |
| [#45817](https://github.com/NousResearch/hermes-agent/issues/45817) | Notice em cada init (não "one-time") | CLOSED |
| [#44439](https://github.com/NousResearch/hermes-agent/issues/44439) | Autoraise deve respeitar external context engines | CLOSED |
| [#48621](https://github.com/NousResearch/hermes-agent/issues/48621) | gpt-5.3-codex-spark sem autoraise + silent context wipe | CLOSED |
| [#54915](https://github.com/NousResearch/hermes-agent/issues/54915) | Codex GPT-5.5 compression timeout 120s | CLOSED |
| [#55572](https://github.com/NousResearch/hermes-agent/issues/55572) | Tail-protection ignora codex_reasoning_items | CLOSED |

> **Padrão identificado:** O provider Codex GPT-5.5 acumulaissues de UX (notices repetidos), comportamento de compressão (autoraise, timeouts) e estimativas de token. Todas foram fechadas hoje, indicando foco intencional da equipe.

---

## 5. Bugs e Estabilidade

### P1 — Críticos (ação imediata necessária):

| # | Descrição | Componente | Link |
|---|-----------|------------|------|
| #51646 | Gateway Memory Loss: `active = NULL` causa perda total de contexto em todas as plataformas | `comp/gateway` | [🔗](https://github.com/NousResearch/hermes-agent/issues/51646) |
| #59202 | Telegram `connect()` hang infinito na primeira tentativa — timeout 30s nunca dispara | `comp/gateway` | [🔗](https://github.com/NousResearch/hermes-agent/issues/59202) |

### P2 — Altos (devem ser priorizados no ciclo):

| # | Descrição | Componente | Link |
|---|-----------|------------|------|
| #59224 | CLI `/resume` esconde sessões Desktop (e outras não-CLI) | `comp/cli` | [🔗](https://github.com/NousResearch/hermes-agent/issues/59224) |
| #59702 | Desktop model picker mostra apenas algumas entries de `custom_providers` | `comp/desktop` | [🔗](https://github.com/NousResearch/hermes-agent/issues/59702) |
| #58437 | MoA `_collect_stream` dropa `tool_calls` em quiet mode — crash | `comp/agent` | [🔗](https://github.com/NousResearch/hermes-agent/issues/58437) |
| #55130 | Dashboard retorna 500 em toda navegação quando auth é only provider | `comp/dashboard` | [🔗](https://github.com/NousResearch/hermes-agent/issues/55130) |
| #59731 | `computer-use` reporta ações CUA keyboard como sucesso sem verificação | `comp/tools` | [🔗](https://github.com/NousResearch/hermes-agent/issues/59731) |
| #54741 | Desktop model picker atualiza `model.default` sem `model.provider` — mismatch | `comp/desktop` | [🔗](https://github.com/NousResearch/hermes-agent/issues/54741) |
| #42176 | TUI: `/stop` não interrompe agente após input do usuário — agent freeze | `comp/tui` | [🔗](https://github.com/NousResearch/hermes-agent/issues/42176) |

### P3 — Medios (devem ser corrigidos em releases regulares):

| # | Descrição | Componente | Link |
|---|-----------|------------|------|
| #59836 | Hermes Mnemosyne plugin `auto_sleep = false` quebra consolidação cross-session | `comp/plugins` | [🔗](https://github.com/NousResearch/hermes-agent/issues/59836) |
| #56058 | Desktop chat model picker persiste no config global em vez de session-scoped | `comp/desktop` | [🔗](https://github.com/NousResearch/hermes-agent/issues/56058) |
| #59797 | `browser_navigate`/`browser_vision` falham com CDP error no Windows + Brave | `tool/browser` | [🔗](https://github.com/NousResearch/hermes-agent/issues/59797) |
| #38452 | Desktop app: input cron longo previne scroll do output do agente | `comp/desktop` | [🔗](https://github.com/NousResearch/hermes-agent/issues/38452) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com alto engajamento ou suporte explícito:

**#527 — Gateway Permission Tiers (RBAC)**  
🔗 https://github.com/NousResearch/hermes-agent/issues/527  
> Modelo de autorização binário → Role-Based Access Control (Owner/Admin/User/Guest). PR associado [#59857](https://github.com/NousResearch/hermes-agent/pull/59857) já em revisão. **Provável inclusão no roadmap.**

---

**#13332 — Hybrid Tool Pre-Selection (Semantic + Keyword)**  
🔗 https://github.com/NousResearch/hermes-agent/issues/13332  
📊 5 comentários · 4 👍  
📌 P3 · `comp/agent` · `comp/tools`

> Proposta RAG-style para injeção de schemas de ferramentas por relevância sem round-trips LLM adicionais. Resolve ~14,000 tokens de overhead em setups com 30+ ferramentas. Discute lazy loading e two-pass name-list first.

---

**#59823 — Memory audit action for self-cleaning**  
🔗 https://github.com/NousResearch/hermes-agent/issues/59823  
📌 P3 · `tool/memory`

> Sistema de memória "só cresce": modelo não consegue introspectar entries existentes antes de escrever. Proposta de ação de auditoria readonly para evitar falhas propositais de write.

---

**#59796 — Memory/skill entropy degrades agent quality over time**  
🔗 https://github.com/NousResearch/hermes-agent/issues/59796  
📌 P3 · `tool/memory`

> Após ~2 semanas de uso, agente aplica regras de projetos específicos em projetos não relacionados. Sem pruning, memory accumulation cria "experience debt".

---

**#16493 — Progressive-loading architecture**  
🔗 https://github.com/NousResearch/hermes-agent/issues/16493  
📊 4 comentários  
📌 P3 · `comp/agent` · `comp/tools` · `tool/skills`

> Minimal startup context + upgrade-on-demand toolsets. Visão de arquitetura para reduzir tempo de inicialização e contexto inicial.

---

**Features de localização e plataforma:**

| # | Feature | Plataforma | Link |
|---|---------|------------|------|
| #59780 | Spanish (Spain) localization | `comp/desktop` | [🔗](https://github.com/NousResearch/hermes-agent/issues/59780) |
| #59822 | iOS Share Extension para HermesPilot | `comp/desktop` | [🔗](https://github.com/NousResearch/hermes-agent/issues/59822) |

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas:

1. **Perda de contexto em produção (crítico)**  
   O bug #51646 afeta todos os usuários de gateway em produção — cada turno carrega zero histórico. Usuários reportam agente "burro" quando na verdade é uma falha de persistência.

2. **Experiência Desktop instável**  
   Múltiplas issues do Desktop app (#59702, #54741, #56058) indicam que o model picker e persistência de configurações ainda não estão maduros. Usuários relatam configurações silenciosamente perdidas ou incorretas.

3. **UX de compression em modelos grandes**  
   A série Codex GPT-5.5 demonstra que notices repetidos e timeouts de compressão causam frustração significativa. O desejo é por comportamento silencioso e confiável.

4. **Memory como "black box"**  
   Usuários não conseguem audit/manage o que está na memória do agente (#59823, #59796). Modelo faz "guesses" sobre o que existe e causa degradação perceptível após uso prolongado.

5. **CLI/TUI gap**  
   O bug #59224 expõe que sessões Desktop não são visíveis via `/resume` no CLI —Fragmentação da experiência entre interfaces.

### Cenários de uso emergentes:

- **Gateways multi-plataforma** em uso produtivo (Telegram, Discord, Feishu)
- **Automação via quiet mode** (kanban workers, subagents)
- **Desktop app como interface primária** em Windows
- **Codex OAuth** como rota de provider para modelos avançados

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou com resposta limitada (potenciais pontos cegos):

| # | Título | Idade | Status | Prioridade | Link |
|---|--------|-------|--------|------------|------|
| #13332 | Hybrid Tool Pre-Selection | ~77 dias | OPEN | P3 | [🔗](https://github.com/NousResearch/hermes-agent/issues/13332) |
| #16493 | Progressive-loading architecture | ~71 dias | OPEN | P3 | [🔗](https://github.com/NousResearch/hermes-agent/issues/16493) |
| #38452 | Desktop: long cron input prevents scrolling | ~34 dias | CLOSED | P3 | [🔗](https://github.com/NousResearch/hermes-agent/issues/38452) |
| #29923 | Add per-turn and per-image model overrides | ~47 dias | OPEN | P2 | [🔗](https://github.com/NousResearch/hermes-agent/issues/29923) |
| #48379 | feat(skills-sync): --link mode for symlink-based installation | ~19 dias | OPEN | P3 | [🔗](https://github.com/NousResearch/hermes-agent/pull/48379) |

### PRs aguardando review há mais tempo:

| # | Título | Idade | Link |
|---|--------|-------|------|
| #29923 | Add per-turn and per-image model overrides | ~47 dias | [🔗](https://github.com/NousResearch/hermes-agent/pull/29923) |
| #48379 | feat(skills-sync): --link mode for symlink-based installation | ~19 dias | [🔗](https://github.com/NousResearch/hermes-agent/pull/48379) |
| #57703 | feat(skill-manage): add lifecycle hooks | ~4 dias | [🔗](https://github.com/NousResearch/hermes-agent/pull/57703) |
| #51034 | docs: add legacy documentation redirects | ~15 dias | [🔗](https://github.com/NousResearch/hermes-agent/pull/51034) |

---

## Indicadores de Saúde do Projeto

| Indicador | Status | Observação |
|-----------|--------|------------|
| Atividade de issues (24h) | ✅ Alta | 50 issues atualizadas |
| Atividade de PRs (24h) | ✅ Alta | 50 PRs atualizados, 10 merged/closed

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-07-07

---

## 1. Panorama do Dia

O ecossistema PicoClaw apresenta **atividade moderada** em 07/07/2026, com 4 issues e 5 PRs atualizados nas últimas 24h. A ausência de novos lançamentos não compromete a saúde do projeto — pelo contrário, indica foco em estabilização antes de próximo release. Destaca-se a resolução do bug crítico #2191 (prompt caching da Anthropic) via PR #3228, que marca um avanço significativo na compatibilidade com a API da Anthropic. A comunidade demonstra interesse ativo em funcionalidades de proxy, caching avançado e integração multi-provider.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em período de maturação de contribuições abertas. Releases anteriores (0.2.9 a 0.3.1) continuam em produção. Recomenda-se monitorar as PRs em revisão para antecipar a próxima versão.

---

## 3. Progresso do Projeto

### PR Fechado

| # | Título | Impacto |
|---|--------|---------|
| [#3227](https://github.com/sipeed/picoclaw/pull/3227) | `fix(providers): resolve tool_use name/args from Function on reloaded history` | **Alto** — Resolve corrupção de histórico ao recarregar sessões, garantindo que `ToolCall.Name` e `ToolCall.Arguments` persistam corretamente. Afeta ambos os providers Anthropic. |

### PRs Abertas em Revisão

| # | Título | Complexidade | Prioridade |
|---|--------|--------------|------------|
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | `fix(anthropic-messages): send SystemParts as system blocks with cache_control` | Crítica | **Alta** — Complementa #3227; habilita cache-control por bloco no provider `anthropic_messages`. |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | `Add remote Pico WebSocket mode to picoclaw agent` | Média-Alta | **Média** — Expande casos de uso para execução remota via WebSocket. |
| [#3226](https://github.com/sipeed/picoclaw/pull/3226) | `fix(tools): stop write_file from coaching destructive overwrite` | Média | **Média** — Melhora UX do tool `write_file`, reduzindo risco de sobrescrita acidental. |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | `Fix inline data URL media extraction for generic tool output` | Média | **Média** — Corrige corrupção de histórico caused by falso reconhecimento de mídia inline. |

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Relevância Técnica

| # | Título | Interação | Análise |
|---|--------|-----------|---------|
| [#3229](https://github.com/sipeed/picoclaw/issues/3229) | `Proposal: rolling conversation cache breakpoints for anthropic-messages` | 0 👍 0 💬 | **Proposta de roadmap** — Visa otimizar caching de histórico de conversas em workloads agentic. Integração natural com #3228. Sinais de demanda por eficiência de tokens. |

### Temas Recorrentes Identificados

1. **Caching Avançado (Anthropic):** Issues #2191, #3228 e #3229 indicam maturidade do ecossistema em direção a otimização de custos e latência via prompt caching.
2. **Interoperabilidade Multi-Provider:** Bug #3230 demonstra desafios na compatibilidade OpenAI-format com provedores como Google Gemini via Cloudflare AI Gateway.
3. **Segurança de Ferramentas de Arquivo:** PR #3226 e PR #3115 revelam edge cases em operações de escrita e parsing de saída.

---

## 5. Bugs e Estabilidade

### Bug Crítico Resolvido

| # | Severidade | Título | Status |
|---|------------|--------|--------|
| [#2191](https://github.com/sipeed/picoclaw/issues/2191) | **Alta** | `[BUG] anthropic_messages provider ignores SystemParts, breaks Anthropic prompt caching` | ✅ Fechado |

**Impacto:** Usuários do provider `anthropic_messages` perdiam 100% do benefit de prompt caching. Afetava todos os clientes que usam Claude com cache-control.

### Bugs Abertos

| # | Severidade | Título | Detalhes |
|---|------------|--------|----------|
| [#3230](https://github.com/sipeed/picoclaw/issues/3230) | **Alta** | `Function call is missing thought_signature when calling Gemini API via OpenAI compat format` | Afeta versões 0.2.9 a 0.3.1. Falha ao usar tool calls via Cloudflare AI Gateway com Gemini. 0 comentários — requer triagem. |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Nova Feature Request

| # | Título | Proponente | Relevância |
|---|--------|------------|-------------|
| [#3231](https://github.com/sipeed/picoclaw/issues/3231) | `给searxng搜索加入basicauth请求头验证` (Adicionar autenticação basicauth ao SearXNG) | oKatTjC | **Média** — Busca por integração mais robusta com search privado via proxy autenticado. |

### Sinais de Roadmap

| Área | Evidência | Implicação |
|------|-----------|------------|
| **Prompt Caching Otimizado** | #3229, #3228, #2191 | Roadmap jelasfocado em reduzir custos de tokens em workflows agentic. |
| **Modo Remoto/Headless** | #3118 | Evolução para arquitetura distribuída e integração CI/CD. |
| **Multi-Provider Compatibility** | #3230 | Necessidade de camada de compatibilidade OpenAI mais robusta. |

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Origem | Severidade |
|-----|--------|------------|
| **Prompt caching inoperante** | #2191 | 🔴 Alta — Impacto direto em custo de API |
| **Histórico de sessão corrompido** | #3227/#3115 | 🟡 Média — Experiência de debug frustrante |
| **Autenticação em search proxy** | #3231 | 🟡 Média — Bloqueia integração corporativa |

### Cenários de Uso Emergentes

1. **Agents com longa memória** — Usuários rodando agentes que mantêm histórico extenso (Issue #3229).
2. **Multi-cloud inference** — Integração via gateways como Cloudflare AI para Gemini (Issue #3230).
3. **Private search** — SearXNG com autenticação para bases de conhecimento internas.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Triagem

| # | Título | Idade | Urgência | Notas |
|---|--------|-------|----------|-------|
| [#3230](https://github.com/sipeed/picoclaw/issues/3230) | Bug: missing thought_signature Gemini | <24h | **Alta** | Recém-criado, sem comentários. Requer triagem imediata. |
| [#3231](https://github.com/sipeed/picoclaw/issues/3231) | Feature: basicauth SearXNG | <24h | **Média** | Recém-criado, sem comentários. Requer avaliação de escopo. |
| [#3229](https://github.com/sipeed/picoclaw/issues/3229) | Proposal: rolling cache breakpoints | <24h | **Média** | Proposta elaborada. Merece revisão de maintainer. |

### PRs Antigas em Aberto

| # | Título | Idade | Status | Recomendação |
|---|--------|-------|--------|--------------|
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | Remote WebSocket mode | ~25 dias | Em revisão | Priorizar review para desbloquear用例 distribuído |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | Fix data URL extraction | ~25 dias | Em revisão | Priorizar — resolve corrupção silenciosa |

---

## Métricas Resumidas do Dia

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues fechadas | 1 | ↑ Positiva |
| PRs fechadas | 1 | ↑ Positiva |
| Bugs críticos abertos | 1 | ⚠️ Requer atenção |
| Features em pipeline | 2 | Neutra |
| Releases | 0 | Neutra |

---

**Relatório gerado em:** 2026-07-07  
**Fonte:** [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# Relatório de Projeto IronClaw — 2026-07-07

---

## 1. Panorama do dia

O projeto IronClaw apresenta alta atividade de desenvolvimento com **35 issues e 50 PRs atualizados nas últimas 24h**, embora sem novas releases. A equipe está focada em duas frentes principais: (1) o stack de latência HST Postgres v2 com 4 PRs simultâneos e (2) a modernização do frontend WebUI com migração para pnpm/Vite/TypeScript. Observa-se uma concentração de bugs P2 relacionados a notificações, integrações externas e experiência do usuário, além de 8 issues de performance identificados e documentados para correção.

---

## 2. Lançamentos

**Nenhuma release nas últimas 24h.**

O último release detectado (#5598) foi preparado em 2026-07-03 com as versões:
- `ironclaw`: 0.24.0 → 0.29.1 (major bump com breaking changes)
- `ironclaw_common`: 0.4.2 → 0.5.0 (API breaking)
- `ironclaw_skills`: 0.3.0 → 0.4.0 (API breaking)
- `ironclaw_skill_learning`: 0.1.0 → 0.1.1

---

## 3. Progresso do Projeto

### PRs Closed/Merged Hoje

| # | Título | Tamanho | Escopo | Impacto |
|---|--------|---------|--------|---------|
| [#5718](https://github.com/nearai/ironclaw/pull/5718) | ci(reborn): coverage-regression ratchet (dry-run) + integration-first coverage rule | XL | CI | **Melhoria de processo**: estabelece ratchet de regressão de coverage e orientação "integration-first" para testes |
| [#5720](https://github.com/nearai/ironclaw/pull/5720) | test(reborn): C-MULTIUSER turn/run-state isolation across distinct actors | XS | Testes | Completa cobertura de isolamento multi-usuário (#5479) |
| [#5660](https://github.com/nearai/ironclaw/pull/5660) | test(reborn): outbound real-store durability + PDF attachment extraction | M | Testes | Prova durabilidade do FilesystemOutboundStateStore em produção |
| [#5691](https://github.com/nearai/ironclaw/pull/5691) | [HST Postgres 4/4] Add latency evidence harness | XL | Latência | Adiciona harness standalone para medição de latência |
| [#5692](https://github.com/nearai/ironclaw/pull/5692) | reborn: no run-borking failures — collapsed recoverability stack | XL | Reborn/Resiliência | Stack integrado de recoverability (#4841, #5389, #5390, #5403, #5613) |

### PRs Abertos com Atividade Significativa

- **[#5724](https://github.com/nearai/ironclaw/pull/5724)** [HST Postgres v2 1/4] RootFilesystem latency substrate (XL, infraestrutura)
- **[#5725](https://github.com/nearai/ironclaw/pull/5725)** [HST Postgres v2 2/4] Add row-store turn state (XL)
- **[#5726](https://github.com/nearai/ironclaw/pull/5726)** [HST Postgres v2 3/4] Wire filesystem runtime stores (XL)
- **[#5727](https://github.com/nearai/ironclaw/pull/5727)** [HST Postgres v2 4/4] Add latency evidence harness (XL)
- **[#5280](https://github.com/nearai/ironclaw/pull/5280)** Trace Commons: instance-wide enrollment, per-user profiles, and trace inspection (XL)
- **[#5579](https://github.com/nearai/ironclaw/pull/5579)** fix(oauth): wire-format matrix fixes — expires_in coercion, DCR error bodies (L)
- **[#5729](https://github.com/nearai/ironclaw/pull/5729)** [codex] Switch WebUI frontend tooling to pnpm (XL)
- **[#5730](https://github.com/nearai/ironclaw/pull/5730)** [codex] Add Vite TypeScript WebUI scaffold (XL)
- **[#5731](https://github.com/nearai/ironclaw/pull/5731)** [codex] Move WebUI frontend source to TypeScript (XL)
- **[#5732](https://github.com/nearai/ironclaw/pull/5732)** [codex] Embed prebuilt Vite WebUI assets (XL)

**Destaque**: O stack HST Postgres v2 substitui PRs anteriores (#5688-#5691) com código rebasado no main atual, sinalizando preparação para merge iminente.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários/reações)

| # | Título | Comentários | 👍 | Prioridade | Categoria |
|---|--------|-------------|----|------------|-----------|
| [#5713](https://github.com/nearai/ironclaw/issues/5713) | Triggered/scheduled runs that terminate Failed deliver no Slack notification | 3 | 0 | **Crítica** | Infraestrutura |
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | GitHub issue search/create fail with HTTP 403 | 2 | 0 | P2 | Integração |
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | Approval notifications disappear instead of remaining | 2 | 0 | P2 | UX |
| [#5712](https://github.com/nearai/ironclaw/issues/5712) | tool_search discloses full capability catalog under narrowed allow_set | 1 | 0 | Segurança | Capability Model |
| [#5507](https://github.com/nearai/ironclaw/issues/5507) | Failed routine run shows "No thread attached" | 1 | 0 | P2 | Debug |
| [#5676](https://github.com/nearai/ironclaw/issues/5676) | N+1 record fetches in records_for_scope | 1 | 0 | Performance | Database |

### Análise de Demandas

**🔴 Crítico: Silent Failures em Automação (#5713)**
Issue #5713 descreve falha silenciosa grave: execuções que terminam com status `Failed` não enviam notificação Slack, ocultando falhas de automação. O código em `slack_delivery.rs:2458-2589` trata apenas `TurnStatus::Completed`/BlockedApproval/BlockedAuth, deixando `Failed` sem notificação. Este é o issue com maior urgência técnica.

**🟡 Integrações Externas Quebradas**
- GitHub integration retornando HTTP 403 (#5702)
- `clientActionId()` quebrando em origens não-HTTPS (#5694)

**🟢 Modernização de Infraestrutura**
Interesse da comunidade em:
- HST Postgres v2 para latência (4 PRs simultâneos)
- WebUI modernization com pnpm/Vite/TypeScript
- Trace Commons com profiles globais

---

## 5. Bugs e Estabilidade

### Por Severidade

#### 🔴 P1 (Crítica) — 1 issue
- [#5713](https://github.com/nearai/ironclaw/issues/5713) — **Silent automation failures**: Runs que falham não enviam Slack, ocultando erros críticos de automação

#### 🟠 P2 (Alta) — 9 issues

| # | Título | Impacto |
|---|--------|---------|
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | GitHub integration HTTP 403 | Bloqueia uso de capabilities GitHub |
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | Approval notifications disappear | Usuários não sabem que precisam aprovar |
| [#5507](https://github.com/nearai/ironclaw/issues/5507) | "No thread attached" on failed runs | Impossibilita debugging |
| [#5703](https://github.com/nearai/ironclaw/issues/5703) | Generic error messages | Dificulta diagnóstico |
| [#5708](https://github.com/nearai/ironclaw/issues/5708) | Error banners outside chat stream | UX fragmentada |
| [#5707](https://github.com/nearai/ironclaw/issues/5707) | Routine creation exposes internals | Leak de detalhes técnicos |
| [#5555](https://github.com/nearai/ironclaw/issues/5555) | Terminal button overlaps composer | UI obstruída |
| [#5701](https://github.com/nearai/ironclaw/issues/5701) | Activity panel hides tool details | Falta visibilidade de execução |
| [#5698](https://github.com/nearai/ironclaw/issues/5698) | Tool permission save failures silent | Configurações não persistem |

#### 🟡 P3 (Média) — 4 issues
- [#5706](https://github.com/nearai/ironclaw/issues/5706) — Raw thread IDs em sidebar quando instance lagging
- [#5705](https://github.com/nearai/ironclaw/issues/5705) — Terminal icon sem opção de desabilitar
- [#5704](https://github.com/nearai/ironclaw/issues/5704) — Image preview becomes transparent durante chat ativo
- [#5556](https://github.com/nearai/ironclaw/issues/5556) — Active chat highlight persists após navegação

#### ⚠️ Performance — 8 issues identificadas
| # | Título | Localização |
|---|--------|-------------|
| [#5680](https://github.com/nearai/ironclaw/issues/5680) | live-progress items cloned per delta | `projection/live_progress.rs` |
| [#5679](https://github.com/nearai/ironclaw/issues/5679) | Events fully deserialized before filtering | `event_store/filesystem_store.rs` |
| [#5678](https://github.com/nearai/ironclaw/issues/5678) | Per-turn LoopExecutionState clones | `agent_loop/executor/prompt.rs` |
| [#5677](https://github.com/nearai/ironclaw/issues/5677) | Component linker rebuilt on instantiation | `wasm/runtime.rs` |
| [#5675](https://github.com/nearai/ironclaw/issues/5675) | Full conversation state cloned on every inbound | `conversations/filesystem_store.rs` |
| [#5674](https://github.com/nearai/ironclaw/issues/5674) | Tool schemas deep-cloned per LLM request | `llm/tool_schema.rs` |
| [#5673](https://github.com/nearai/ironclaw/issues/5673) | Snapshot replays event stream on every call | `event_projections/lib.rs` |
| [#5672](https://github.com/nearai/ironclaw/issues/5672) | SSE stream_events drain-and-poll inefficiency | `webui_v2/handlers.rs` |

**Padrão identificado**: 8 issues de performance indicam dívida técnica significativa em padrões de cloning e cache.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Issues com Características de Feature Request

| # | Título | Observação |
|---|--------|------------|
| [#5722](https://github.com/nearai/ironclaw/issues/5722) | Gate-dispatch real (Approval/AuthResolution) unreachable at integration tier | Coverage lane para arquitetura |
| [#5721](https://github.com/nearai/ironclaw/issues/5721) | Production filesystem uses single-owner view — breaks multi-user | Defense-in-depth + CAS contention |
| [#5715](https://github.com/nearai/ironclaw/issues/5715) | Extend EXPECTED_PRODUCTION_SHAPE to projection/interaction-service | Wiring-parity guard |
| [#5711](https://github.com/nearai/ironclaw/issues/5711) | Verify driver-supplied failure safe_summary against host evidence | Trust-boundary hardening |
| [#5696](https://github.com/nearai/ironclaw/issues/5696) | Hide unsupported operator-config fields from Inference settings | UI polish |
| [#5694](https://github.com/nearai/ironclaw/issues/5694) | clientActionId() throws on insecure origins | Compatibilidade self-hosted |
| [#5723](https://github.com/nearai/ironclaw/pull/5723) | Lease-expiry wedge coverage via tool-path parking seam | Test coverage |

### Sinais de Roadmap

1. **HST Postgres v2 (stack #5724-#5727)**: Paridade de latência para hosted-single-tenant. Próximo passo: merge e estabilização.
2. **WebUI v2 Modernization (#5728-#5732)**: Migração para pnpm + Vite + TypeScript. Progresso incremental com PRs modulares.
3. **Trace Commons (#5280)**: Enrollment instance-wide e profiles de contribuidores. Feature de observabilidade.
4. **Reborn Recoverability Stack (#5692)**: Consolidado após múltiplos PRs. Pronto para produção.
5. **OAuth Wire-format Fixes (#5579)**: Maior interoperabilidade com provedores não-convencionais.

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas (baseado em issues)

**🔴 Crítica — Silent Failures**
> *"triggered/scheduled runs that terminate Failed deliver no Slack notification"*
- **Cenário**: Usuário configura automação que roda periodicamente; quando falha, não recebe alerta
- **Impacto**: Problemas em produção passam despercebidos por horas/dias
- **Sentimento**: Frustração + risco operacional

**🟠 Experiência de Debugging Comprometida**
> *"Failed routine run shows 'No thread attached' and blocks debugging"*
- **Cenário**: Usuário tenta investigar por que sua rotina falhou
- **Impacto**: Impossibilita diagnóstico de erros
- **Sentimento**: Bloqueio completo, users can't self-serve

**🟠 Notificações Não-Confiáveis**
> *"Approval notifications disappear instead of remaining in notification history"*
- **Cenário**: Sistema solicita aprovação; usuário clica e notificação some
- **Impacto**: Usuário não sabe se precisa agir, automações ficam travadas
- **Sentimento**: Confusão, falta de confiança no sistema

**🟠 Integrações Externas Frágeis**
> *"GitHub issue search and create capabilities fail with HTTP 403"*
- **Cenário**: Usuário tenta usar capabilities GitHub via agente
- **Impacto**: Funcionalidade advertised não funciona
- **Sentimento**: Expectation mismatch

**🟡 UX/UI Issues Menores (P3)**
- Thread IDs visíveis durante lag
- Imagens perdendo opacidade durante processamento
- Erro banners fora do fluxo de chat
- Botão de terminal não-removível

### Padrões de Satisfação

**Pontos Positivos (inferidos)**:
- Equipe responde rapidamente a issues (múltiplas issues atualizadas no mesmo dia)
- Cobertura de testes em expansão (CI ratchet, integration-first)
- Comunicação ativa via PRs e issues

**Áreas de Atenção**:
- Confiabilidade de notificações (approval, Slack)
- Experiência de debugging
- Integrações externas

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Atendimento (idade > 3 dias)

| # | Título | Criado | Dias | Status |
|---|--------|--------|------|--------|
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | Approval notifications disappear | 2026-07-02 | 5 | Open |
| [#5556](https://github.com/nearai/ironclaw/issues/5556) | Active chat highlight persists | 2026-07-02 | 5 | **Closed** |
| [#5555](https://github.com/nearai/ironclaw/issues/5555) | Terminal button overlaps composer | 2026-07-02 | 5 | **Closed** |
| [#5550](https://github.com/nearai/ironclaw/issues/5550) | (Dependabot PR - 13 deps) | 2026-07-02 | 5 | Open |
| [#5507

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório de Projeto — CoPaw (QwenPaw)

**Data:** 2026-07-07  
**Fonte:** github.com/agentscope-ai/QwenPaw

---

## 1. Panorama do Dia

O projeto CoPaw demonstra **atividade excepcional** nas últimas 24 horas, com 84 eventos totais (34 issues + 50 PRs). A release **v1.1.12.post3** foi publicada focada em compatibilidade ACP, indicando atenção à estabilidade da versão 1.x. A comunidade está ativamente engajada com 9 issues fechadas e 25 PRs merged/fechados, sugerindo um ciclo de desenvolvimento saudável. Observa-se foco significativo em **memória, contexto e estabilidade de canais IM**, com vários PRs de testes unitários e de regressão sendo submetidos por contribuidores novos.

---

## 2. Lançamentos

### 🆕 v1.1.12.post3
**Release date:** 2026-07-06  
**PR:** [#5818](https://github.com/agentscope-ai/QwenPaw/pull/5818) | Autor: @rayrayraykk

**Mudanças:**
- **Pinning de dependência ACP:** Restrição `agent-client-protocol>=0.9.0,<0.11.0` para evitar breaking changes em imports
- **Correção de ImportError:** Resolve `cannot import name 'SetSessionModelResponse'` que afetava instalações frescas ([#5816](https://github.com/agentscope-ai/QwenPaw/issues/5816))
- **Sync PyInstaller:** Scripts de build atualizados com a mesma constraint

**Breaking Changes:** Nenhuma — patch backward-compatible.

**Notas de Migração:** Usuários da versão 1.x que enfrentavam erros de import devem atualizar para esta versão.

---

## 3. Progresso do Projeto

### PRs Merged/Closed Significativos (2026-07-06)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#5818](https://github.com/agentscope-ai/QwenPaw/pull/5818) | Release v1.1.12.post3 + pin ACP | 🔴 Crítico — corrige break de imports |
| [#5768](https://github.com/agentscope-ai/QwenPaw/pull/5768) | `fix`: adiciona `timezone.utc` em `datetime.fromtimestamp` | Correção de parsing de datas com timezone |
| [#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210) | `feat(cli)`: comando `cron update` | Facilita modificação de cron jobs via CLI |
| [#5524](https://github.com/agentscope-ai/QwenPaw/pull/5524) | `fix(tools)`: registra `spawn_subagent` no Runtime 2.0 | Funcionalidade de subagentes restaurada |
| [#5736](https://github.com/agentscope-ai/QwenPaw/pull/5736) | `feat(ci)`: QwenPaw review bot | Automação de code review com IA |
| [#5765](https://github.com/agentscope-ai/QwenPaw/pull/5765) | `fix(scroll)`: protege active turn, alivia pressão de contexto | 🔴 Prioritário — evita eviction de requisição atual |

**PRs de Testes (contribuição comunitaria):**
- [#5809](https://github.com/agentscope-ai/QwenPaw/pull/5809) — 64 casos unitários para módulo `inbox`
- [#5810](https://github.com/agentscope-ai/QwenPaw/pull/5810) — Regression tests para sessões >500KB
- [#5808](https://github.com/agentscope-ai/QwenPaw/pull/5808) — Testes para hooks e stores do Console
- [#5807](https://github.com/agentscope-ai/QwenPaw/pull/5807) — Contract-guard tests para 12 módulos API

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Tipo | Comentários | Tema Central |
|-------|------|-------------|--------------|
| [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | 🐛 Bug | 11 | **Canal Feishu não responde** após primeira mensagem |
| [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | 🐛 Bug | 8 | Console crasha com históricos grandes de tool-use |
| [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) | 📌 Tracking | 5 | **v2.0.0 Pre-release tracker** — hub central |
| [#5253](https://github.com/agentscope-ai/QwenPaw/issues/5253) | 🐛 Bug | 5 | Custom channel morre após save (CLOSED) |
| [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) | ❓ Question | 4 | Browser lag durante streaming vs DeepSeek |

### Análise de Demandas

**🔴 Alta Prioridade (crashes/bugs críticos):**
- Canal Feishu com comportamento "morto" após primeira resposta ([#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757)) — 11 comentários, usuários relatam em produção
- Console crash em sessões com tool-use history massivo ([#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401))

**🟡 Funcionalidades Solicitadas:**
- Suporte a Zalo Bot (plataforma vietnamita) ([#5168](https://github.com/agentscope-ai/QwenPaw/issues/5168))
- Gerenciamento multi-usuário para times ([#5780](https://github.com/agentscope-ai/QwenPaw/issues/5780))
- Toggle para notificação de cron jobs ([#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797))

---

## 5. Bugs e Estabilidade

### 🔴 Críticos (requerem atenção imediata)

| Issue | Descrição | Severidade | Status |
|-------|-----------|------------|--------|
| [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | Feishu para de responder após 1ª mensagem (Docker + Platform) | **Alta** | 🟡 OPEN |
| [#5782](https://github.com/agentscope-ai/QwenPaw/issues/5782) | Gemini embedding retorna `index=None`, silenciosamente desabilita busca vetorial | **Alta** | ✅ CLOSED |
| [#5710](https://github.com/agentscope-ai/QwenPaw/issues/5710) | Compressão de contexto remove mensagens críticas (âncoras) sem proteção | **Alta** | 🟡 OPEN |
| [#5717](https://github.com/agentscope-ai/QwenPaw/issues/5717) | Runtime 2.0: tool-call truncado causa execução repetida infinita | **Crítica** | 🟡 OPEN |
| [#5789](https://github.com/agentscope-ai/QwenPaw/issues/5789) | Compressão de contexto crasha quando output excede JSON Schema maxLength | **Alta** | 🟡 OPEN |

### 🟡 Média (regressões e UX)

| Issue | Descrição | Componentes |
|-------|-----------|-------------|
| [#5775](https://github.com/agentscope-ai/QwenPaw/issues/5775) | Auto-memory não persiste com `interval > 1` (estado perdido em rebuilds) | Runtime 2.0 |
| [#5773](https://github.com/agentscope-ai/QwenPaw/issues/5773) | Memory search causa erro no canal OpenCode (OCG) | OCG Provider |
| [#5784](https://github.com/agentscope-ai/QwenPaw/issues/5784) | UI mostra threshold errado quando modelo existe em múltiplos providers | Console Frontend |
| [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) | Loading spinner não desaparece após resposta | Console Frontend |
| [#5767](https://github.com/agentscope-ai/QwenPaw/issues/5767) | SDK chat "single-session pull" limita arquitetura multi-agent | Console/SDK |

**Correções Recentes:**
- [#5782](https://github.com/agentscope-ai/QwenPaw/issues/5782) — Gemini embedding (CLOSED)
- [#5253](https://github.com/agentscope-ai/QwenPaw/issues/5253) — Custom channel crash after save (CLOSED)
- [#5816](https://github.com/agentscope-ai/QwenPaw/issues/5816) — ImportError ACP (CLOSED via #5818)

---

## 6. Pedidos de Features e Sinais de Roadmap

### 🟢 Novas Features (Open)

| Issue | Feature | Demanda | Complexidade Estimada |
|-------|---------|---------|----------------------|
| [#5821](https://github.com/agentscope-ai/QwenPaw/issues/5821) | `rejects_media` granular por tipo (image/video/audio) | Suporte parcial a mídia | Média |
| [#5780](https://github.com/agentscope-ai/QwenPaw/issues/5780) | **Gerenciamento multi-usuário** para times via IM | Demanda corporativa | Alta |
| [#5168](https://github.com/agentscope-ai/QwenPaw/issues/5168) | Suporte oficial a **Zalo Bot** (Vietnã) | Expansão geográfica | Média |
| [#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) | Toggle de notificação por cron job | UX personalização | Baixa |
| [#5795](https://github.com/agentscope-ai/QwenPaw/issues/5795) | Auto-refresh do chat quando chega mensagem WeChat | UX em tempo real | Média |
| [#5820](https://github.com/agentscope-ai/QwenPaw/pull/5820) | Token estimation + embedding config melhorado | 🔄 Em PR |

### 🔄 PRs de Features em Progresso

| PR | Feature | Status |
|----|---------|--------|
| [#5815](https://github.com/agentscope-ai/QwenPaw/pull/5815) | Simplificação de auto-memory search state | OPEN |
| [#5669](https://github.com/agentscope-ai/QwenPaw/pull/5669) | Reranking com Qwen3 para memory search | Under Review |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | Reranker para ReMe 0.4 | Under Review |

### 🔵 Indicadores de Roadmap (v2.0.0)

Issue central: [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) — **v2.0.0 Pre-release Tracker**

Sinais de desenvolvimento ativo:
- Runtime 2.0 com bugs sendo tratados ([#5717](https://github.com/agentscope-ai/QwenPaw/issues/5717), [#5775](https://github.com/agentscope-ai/QwenPaw/issues/5775))
- Múltiplos PRs de memória em revisão
- Arquitetura multi-agent sendo endereçada ([#5767](https://github.com/agentscope-ai/QwenPaw/issues/5767))

---

## 7. Resumo de Feedback dos Usuários

### 💬 Dores Reais Reportadas

**1. Instabilidade de Canais IM (Feishu)**
> *"无论是我的docker，还是使用的AgentScope Platform实例，都存在第一个信息回复，然后再发信息就是无反应"*
> — [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757)

**2. Performance do Console em Sessões Longas**
> *"Console前端打开包含大量工具调用历史的会话时崩溃/白屏"*
> — [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401)

**3. Busca de Memória Quebra Fluxo de Trabalho**
> *"开启 auto_memory_search_config.enabled = true 时，使用 OCG provider...所有请求均失败"*
> — [#5773](https://github.com/agentscope-ai/QwenPaw/issues/5773)

**4. Contexto Comprimido Perde Mensagens Críticas**
> *"上下文压缩时，框架没有为关键消息设置'不可截断锚点'...导致 Agent 丢失关键的上下文感知能力"*
> — [#5710](https://github.com/agentscope-ai/QwenPaw/issues/5710)

**5. Necessidade de Multi-Tenancy**
> *"系统没有'添加团队成员'的概念...难以实施按用户策略"*
> — [#5780](https://github.com/agentscope-ai/QwenPaw/issues/5780)

### 📊 Padrões Identificados

| Categoria | Frequência | Tendência |
|-----------|------------|-----------|
| Bugs de canais IM | 3+ issues | 🔴 Frequente |
| Context/Compression | 3 issues | 🔴 Frequente |
| Console Frontend | 4+ issues | 🟡 Moderado |
| Memory/Auto-memory | 4+ issues | 🟡 Moderado |
| UX/UI mobile | 2 issues | 🟢 Ocasional |

---

## 8. Backlog que Merece Atenção

### ⚠️ Issues Antigas Sem Progresso Recente

| Issue | Idade | Tema | Prioridade |
|-------|-------|------|------------|
| [#5168](https://github.com/agentscope-ai/QwenPaw/issues/5168) | ~24 dias | Zalo Bot support request | 🟡 Baixa |
| [#5567](https://github.com/agentscope-ai/QwenPaw/issues/5567) | ~11 dias | GitHub Issue feedback skill | 🟢 N/A (Skill) |

### 🎯 Items que Precisam de Resposta/Maintainer

| Issue | Tema | Motivo |
|-------|------|--------|
| [#5767](https://github.com/agentscope-ai/QwenPaw/issues/5767) | SDK architecture blocking multi-agent | Decisão arquitetural pendente |
| [#5780](https://github.com/agentscope-ai/QwenPaw/issues/5780) | Multi-user team management | Feature request explícito |
| [#5795](https://github.com/agentscope-ai/QwenPaw/issues/5795) | WeChat auto-refresh | Necessidade de clarification técnica |

### 📌 PRs Aguardando Review

| PR | Tema | Aguardando |
|----|------|------------|
| [#5669](https://github.com/agentscope-ai/QwenPaw/pull/5669) | Qwen3-rerank memory | Review |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | Reranker ReMe 0.4 | Review |
| [#5654](https://github.com/agentscope-ai/QwenPaw/pull/5654) | DingTalk delivery fixes | Review |
| [#5765](https://github.com/agentscope-ai/QwenPaw/pull/5765) | Scroll context fix | Review |

---

## Métricas de Saúde do Projeto (2026-07-06)

| Indicador | Valor | Status |
|-----------|-------|--------|
| Issues ativas (24h) | 25 | 🟢 Saudável |
| Issues fechadas (24h) | 9 | 🟢 Bom ciclo |
| PRs abertos (24h) | 25 | 🟢 Ativo |
| PRs merged/closed (24h) | 25 | 🟢 Equilibrado |
| Novas releases | 1 | 🟢 Patch released |
| Contribuidores ativos | 10+ (estimado) | 🟢 Diversificado |
| Bugs críticos open | 5 | 🟡 Requer atenção |

---

*Relatório gerado automaticamente com base em dados do GitHub. Para mais detalhes, visite: https://github.com/agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto ZeroClaw — 2026-07-07

---

## 1. Panorama do Dia

O projeto ZeroClaw manteve um nível de atividade intenso nas últimas 24 horas, com **50 issues e 50 PRs atualizados**, evidenciando um ritmo de desenvolvimento sustentado. Nenhum lançamento formal foi realizado no período, mas o volume de PRs abertos (40) e fechados/merged (10) indica que a equipe está simultaneamente explorando novas funcionalidades e consolidando a base de código. O estado atual reflete uma fase madura de desenvolvimento multi-milestone — com as versões 0.8.3, 0.9.0 e o programa WASM/plugin em paralelo. A comunidade demonstra engajamento significativo em RFCs estruturais, bugs de alta severidade e integrações com canais (Telegram, QQ, WhatsApp, LINE, Matrix), sugerindo que a próxima geração de conectividade e interoperação está no centro das atenções.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O último release estável mencionado nos dados é a versão **0.8.1**, com a tracking issue [#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320) indicando que o milestone **v0.8.3** está em andamento e cobre WASM/plugin platform, skills platform, MCP dashboard, A2A interop, operator-management surfaces e estabilização pós-v0.8.2. Recomenda-se monitorar a página de releases do repositório para o próximo tag.

---

## 3. Progresso do Projeto

As seguintes PRs foram **fechados/merged** nas últimas 24 horas, representando avanços concretos:

| PR | Título | Área | Tamanho |
|----|--------|------|---------|
| [#8721](https://github.com/zeroclaw-labs/zeroclaw/pull/8721) | `feat(providers): fail over on Anthropic refusal` | Provider | L |
| [#8030](https://github.com/zeroclaw-labs/zeroclaw/pull/8030) | `feat(doctor): warn on OpenAI Codex profile/slot wiring mismatch` | Doctor | M |
| [#7768](https://github.com/zeroclaw-labs/zeroclaw/pull/7768) | `feat(line): loading indicator, icon/nickname switch, bind reply feedback` | Channel:LINE | L |
| [#8659](https://github.com/zeroclaw-labs/zeroclaw/pull/8659) | `test(agent): add agent-policy parity harness scaffold` | Tests | M |
| [#7529](https://github.com/zeroclaw-labs/zeroclaw/pull/7529) | `fix(gateway): only print dashboard URL when web_dist_dir is available` | Gateway | XS |

**Destaques:**
- **Provider failover:** O PR [#8721](https://github.com/zeroclaw-labs/zeroclaw/pull/8721) implementa failover quando provedores Anthropic recusam requisições via `stop_reason="refusal"`, melhorando a resiliência do sistema de modelos.
- **Doctor melhorias:** O PR [#8030](https://github.com/zeroclaw-labs/zeroclaw/pull/8030) adiciona validação cruzada para credenciais OpenAI Codex, evitando surpresas silenciosas.
- **Canal LINE:** O PR [#7768](https://github.com/zeroclaw-labs/zeroclaw/pull/7768) adiciona loading indicator, feedback visual e bind reply, melhorando a experiência do usuário no canal LINE.

---

## 4. Temas Quentes da Comunidade

As issues/PRs com maior engajamento (comentários e reações) refletem as prioridades da comunidade:

### Issues mais comentadas

| Issue | Título | Comentários | Prioridade |
|-------|--------|-------------|------------|
| [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) | MCP tools missing from TUI sessions | 16 | P1 |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | 13 | P2 |
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | QQ/napcat channel missing | 9 | P2 |
| [#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) | Goal mode implementation split stack | 8 | P2 |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | RFC: Pluggable security enforcement provider | 5 | P2 |

### Análise dos temas quentes

**1. Bug de MCP Tools ([#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193))** — Com 16 comentários, este é o tema mais debatido. O bug impede que ferramentas MCP descobertas sejam expostas nas sessões TUI do ZeroCode, mesmo quando o gateway as reconhece. A severidade é **S1 (workflow bloqueado)**, indicando impacto crítico no fluxo de trabalho dos usuários.

**2. RFC de Work Lanes ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808))** — A RFC propõe automação de board e limpeza de labels para facilitar o roteamento de trabalho sem overhead manual para mantenedores. Com 13 comentários, há discussão ativa sobre governança e fluxo de trabalho.

**3. Canal QQ/Napcat ([#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503))** — Usuários reportam dificuldade em encontrar a opção de canal OneBot/Napcat para conexões QQ. A feature está marcada como `status:accepted`, sugerindo que a implementação está planejada.

**4. RFC de Security Enforcement ([#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142))** — Proposta para expor a superfície de enforcement, reporte e resposta a incidentes de segurança através de uma trait única, com targeting para **v0.9.0**.

---

## 5. Bugs e Estabilidade

### Bugs P1 (Críticos — workflow bloqueado ou regressão severa)

| Issue | Título | Severidade | Status |
|-------|--------|------------|--------|
| [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) | MCP tools missing from TUI sessions | S1 | Accepted |
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | Telegram channel cannot be configured | S1 | Accepted |
| [#8753](https://github.com/zeroclaw-labs/zeroclaw/issues/8753) | CI quality gate misses member-crate test targets | S1 | Accepted |
| [#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631) | SOP deterministic steps recorded without executing | S2 | Accepted |
| [#6619](https://github.com/zeroclaw-labs/zeroclaw/issues/6619) | Shell authorization at autonomy.level=full fails | P1 | Needs-author-action |

### Bugs P2 (Degradados — funcionalidade impactada)

| Issue | Título | Canal/Área | Status |
|-------|--------|------------|--------|
| [#7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523) | Dashboard not available (macOS brew) | Gateway/Web | Closed |
| [#7872](https://github.com/zeroclaw-labs/zeroclaw/issues/7872) | QQ group replies need msg_id | Channel:QQ | Accepted |
| [#7870](https://github.com/zeroclaw-labs/zeroclaw/issues/7870) | Agent runtime options leak from first provider | Runtime | Accepted |
| [#7828](https://github.com/zeroclaw-labs/zeroclaw/issues/7828) | UTF-8 char-boundary safety in truncation | Multi-canal | Accepted |

**Observação crítica:** O bug [#8753](https://github.com/zeroclaw-labs/zeroclaw/issues/8753) no CI quality gate é de alto risco — o script `rust_quality_gate.sh` não executa com `--workspace`, permitindo que código com testes quebrados possa alcançar o branch `master`. Este é um problema de integridade do pipeline que merece atenção imediata.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em destaque por área

| PR/Issue | Título | Área | Target |
|----------|--------|------|--------|
| [#8655](https://github.com/zeroclaw-labs/zeroclaw/pull/8655) | Consolidate Code pane, rails, and prompt drafts | ZeroCode | v0.8.3 |
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | Matrix single-message progress drafts | Channel:Matrix | — |
| [#8235](https://github.com/zeroclaw-labs/zeroclaw/pull/8235) | Runtime-profile prompt_injection_mode override | Skills | — |
| [#8684](https://github.com/zeroclaw-labs/zeroclaw/pull/8684) | Surface model fallback notice on direct-turn surfaces | Runtime | — |
| [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) | Easy per-chat model switching for multi-model providers | Config | — |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | Pluggable security enforcement provider (RFC) | Security | v0.9.0 |
| [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) | Plugin permission, config, and secrets model (RFC) | WASM/Plugins | v0.9.0 |

### Sinais de roadmap

1. **v0.8.3 em foco:** O milestone ([#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320)) abrange runtime execution, agent loop, tools, skills, WASM plugin program, provider message serialization, e A2A interop. PRs como [#8655](https://github.com/zeroclaw-labs/zeroclaw/pull/8655) (consolidação do Code pane) e [#8676](https://github.com/zeroclaw-labs/zeroclaw/pull/8676) (exposição de `uses_memory` para cron jobs) indicam convergência para release.

2. **v0.9.0 como próxima grande iteração:** Issues como [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) (auth, security, gateway, A2A boundaries) e [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) (security enforcement) sinalizam que a próxima versão major focará em hardening de segurança e multi-agent boundaries.

3. **Interoperabilidade:** O RFC [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) propõe um adapter de compatibilidade OpenAI Chat Completions para permitir integração com Open WebUI, LobeChat e outras ferramentas que falam o protocolo OpenAI.

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas

| Dor | Issue | Impacto |
|-----|-------|---------|
| **MCP tools não aparecem no TUI** | [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) | Bloqueio de workflow para usuários MCP |
| **Canal Telegram não configura** | [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | Usuários não conseguem usar Telegram |
| **Dashboard indisponível no macOS** | [#7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523) | Experiência quebrada pós-instalação brew |
| **Canal QQ não encontra opção Napcat** | [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | Usuários OneBot não conseguem conectar |
| **SOP executa sem действие** | [#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631) | Auditoria falsa em runs headless |

### Cenários de uso observados

- **Multi-provider switching:** Usuários desejam alternar facilmente entre modelos de um mesmo provider (ex: OpenRouter com múltiplos modelos), comparando com a experiência de projetos como Moltits ([#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600)).
- **Agent Skills:** Há demanda por adicionar o logo ZeroClaw à lista oficial de clientes do Agent Skills ([#5262](https://github.com/zeroclaw-labs/zeroclaw/issues/5262)), indicando adoção crescente do padrão.
- **WhatsApp Web pairing:** O PR [#8735](https://github.com/zeroclaw-labs/zeroclaw/pull/8735) aborda problema de persistência de identidade após QR pairing, melhorando a UX de canais que exigem re-autenticação.

### Satisfaction/Frustration signals

**Positivo:**
- A comunidade está ativamente contribuindo com RFCs estruturais ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808), [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)), indicando Ownership e engajamento com a direção do projeto.

**Frustrações:**
- Bugs de configuração de canais (Telegram, QQ, WhatsApp) repetem um padrão de "funciona no CLI mas não no canal", sugerindo necessidade de harmonização entre surfaces.
- A falta de releases recentes pode estar criando expectativa na comunidade.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou aguardando ação do mantenedor

| Issue | Título | Aguardando | Idade |
|-------|--------|------------|-------|
| [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) | Plugin permission, config, and secrets model | Maintainer review | 10 dias |
| [#8602](https://github.com/zeroclaw-labs/zeroclaw/issues/8602) | Enhance file_read tool | Maintainer review | 5 dias |
| [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) | Easy per-chat model switching | Maintainer review | 6 dias |
| [#6619](https://github.com/zeroclaw-labs/zeroclaw/issues/6619) | Shell authorization fix | Author action | ~54 dias |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | OpenAI Chat Completions adapter | Maintainer review | 5 dias |

### Issues com potencial de impacto estratégico

1. **RFC de Security Enforcement ([#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142))** — Arquiteturalmente significativo para v0.9.0; precisa de alinhamento de mantenedores.

2. **Plugin Permission Model ([#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398))** — Bloqueado aguardando review; o modelo de permissões atual (`PluginPermission` coarse-grained) precisa evoluir para granularidade de capabilities.

3. **OpenAI Chat Completions Adapter ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603))** — Se aprovado, abriria ZeroClaw para um ecossistema massivo de tooling existente.

### Recomendações de priorização

1. **Urgente:** Resolver o bug de CI ([#8753](https://github.com/zeroclaw-labs/zeroclaw/issues/8753)) — risco de integridade do codebase.
2. **Alta:** Avançar nos bugs P1 de canais (Telegram [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505), MCP [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)) — impacto direto na experiência do usuário.
3. **Média:** Avançar no review das RFCs pendentes ([#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142), [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398)) para dar sinal à comunidade sobre a direção de v0.9.0.

---

*Relatório gerado automaticamente com base nos dados de GitHub do repositório

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*