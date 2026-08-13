# Resumo diário do ecossistema de agentes de IA 2026-08-14

> Issues: 0 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-08-13 20:35 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

Sem atividade nas últimas 24 horas.

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo — Ecossistema Open Source de Agentes de IA

**Data de Referência:** 2026-08-14  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois polos distintos de maturidade**: de um lado, projetos em fase de **estabilização para produção** (NanoBot, Hermes Agent) com foco intenso em correção de bugs de consistência de estado e gerenciamento de sessões; de outro, projetos em **reestruturação arquitetural** (IronClaw, ZeroClaw) investindo em modularidade, permissões e permukaan extensível via plugins/MCP. CoPaw destaca-se pelo ciclo de release acelerado (2 releases em 24h) e introdução de UI inovadora (OS Shell), enquanto PicoClaw permanece em maturidade inicial com dependência de terceiros como gargalo principal. A vulnerabilidade crítica exposta em CoPaw (#6992) e a correção rápida de security bypass em NanoBot (#5306) evidenciam que **hardening de segurança** é preocupação transversal, ainda que com níveis distintos de maturidade nos processos.

---

## 2. Comparação de Atividade

| Projeto | Issues Ativas (24h) | PRs Abertos | PRs Fechados | Releases (24h) | Bugs P1-P2 | Avaliação Saúde |
|---------|---------------------|-------------|--------------|---------------|------------|----------------|
| **NullClaw** | 0 | 0 | 0 | 0 | — | ⚫ Inativo |
| **NanoBot** | 13 | 24 | 9 | 0 | 6 | 🟡 Maturação (estabilidade) |
| **Hermes Agent** | 50 | 42 | 8 | 0 | 12 | 🟢 Alta atividade, atenção P1 |
| **PicoClaw** | 3 | 6 | 3 | 0 | 1 | 🟡 Baixo volume, bug atrasado |
| **IronClaw** | 50 | 23 | 27 | 1 (RC.3) | 0 | 🟢 Excelente taxa resolução (54%) |
| **CoPaw** | 41 | — | 19 | 2 | 4+ | 🟡 Releases acelerados, security crítica |
| **ZeroClaw** | 50 | — | 7 | 0 | — | 🟢 RFC-driven, segurança prioritária |

**Observação:** IronClaw apresenta a melhor taxa de resolução de PRs (54%) e zero bugs P0/P1 em aberto, indicando maturidade operacional superior. NanoBot e Hermes Agent concentram a maior parte dos bugs críticos do ecossistema, ambos com PRs ativos em 대응.

---

## 3. Posicionamento do Projeto Principal

### Vantagens Competitivas por Projeto

| Projeto | Vantagem Principal | Diferencial Técnico | Tamanho Comunidade |
|---------|--------------------|---------------------|-------------------|
| **IronClaw** | Taxa de resolução mais alta do ecossistema (54%) | Epic #7482 (Pluggable Loops) arquitetura verdadeiramente modular; suporte Slack completo (16/16 ops) | ⭐⭐⭐⭐ Muito ativa |
| **ZeroClaw** | Processo de design mais maduro (RFCs com até 20 comentários) | Contratos de permissão e sandboxing; versionamento semanal lettered para releases | ⭐⭐⭐⭐ Engajamento qualificado |
| **CoPaw** | Ciclo de release mais agressivo (v2.1.0 + beta.5 em 24h) | QwenPaw OS Shell com UI em janelas redimensionáveis; integração auto-dream resiliente | ⭐⭐⭐⭐ Altíssima atividade |
| **Hermes Agent** | Feature mais completa para modelos de raciocínio | Replay nativo de reasoning_content (Gemma 4); model_overrides por provider | ⭐⭐⭐⭐ Muito ativa |
| **NanoBot** | Melhor cobertura MCP nativa | Integração profunda com MCP Apps e tools budget para controle de tokens | ⭐⭐⭐⭐ Muito ativa |
| **PicoClaw** | Foco em flexibilidade de provedores | Suporte a múltiplos providers (AWS Bedrock, Anthropic); lockfile pnpm como único bloqueador | ⭐⭐ Baixa |

**Ranking de Maturidade Técnica:** IronClaw > ZeroClaw > CoPaw ≥ Hermes Agent ≥ NanoBot > PicoClaw > NullClaw

---

## 4. Focos Técnicos Compartilhados

### 4.1 Problemas de Consistência de Estado (Transversal)

Seis dos sete projetos enfrentam desafios de **persistência e integridade de sessão**:

- **NanoBot:** File-cap mutation bug (#5378), consolidation truncates silently (#5377), cron scheduler die permanente (#5373)
- **Hermes Agent:** Agent flush pós-compressão (#82001), WS-orphan reaper falha em reagendar (#85578), provider switching quebra sessões (#57588)
- **IronClaw:** Memory leak cross-user em shared channels (#6900 — resolvido), memória não recallada entre conversas (#7185)
- **CoPaw:** Crash probabilístico ao iniciar (#6955), Telegram context grow infinity (#6966), prompts.py mente sobre dream (#6853)

**Implicação:** O padrão de "memória de longo prazo" é技术上 desafiador. A proposta ViBo em CoPaw (#7003 — 97.5% redução de tokens) sinaliza que **compressão inteligente de memória** será competência central dos próximos ciclos.

### 4.2 Segurança como Prioridade Emergencial

| Projeto | Vulnerabilidade | Status |
|---------|-----------------|--------|
| **CoPaw** | Porta 0.0.0.0:8088 exposta + arbitrary code execution | 🛑 ABERTA — CRÍTICA |
| **NanoBot** | exec.allowPatterns bypass (#5306) | ✅ FECHADA — resposta rápida |
| **ZeroClaw** | verifiable-intent sem verificar credential chain (#9328) | ABERTA — 12 comentários |
| **IronClaw** | Cross-user memory leak (#6900) | ✅ FECHADA |

**Padrão:** Projetos em fase de "production hardening" (NanoBot, IronClaw) demonstram processos de security response mais maduros. CoPaw, com releases acelerados, apresenta vulnerabilidade crítica em aberto — risco reputacional significativo.

### 4.3 Integração MCP como Plataforma de Extensibilidade

Três projetos investem massivamente em MCP:

- **NanoBot:** MCP Apps host no WebUI (#5251, #5386), budget de schemas (#5298)
- **IronClaw:** Bundled MCP state refresh após OAuth (#7581), capability socket em desenvolvimento (#7614)
- **ZeroClaw:** Local file/MCP bridge daemon (#2117 — estagnada, 129+ dias)

**Convergência:** MCP está se consolidando como a **camada de extensibilidade padrão** do ecossistema. A diferenciação será em UX de discovery (NanoBot com App hosts) vs. security hardening (IronClaw com capability membrane).

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura vs. Feature Velocity

| Eixo | IronClaw / ZeroClaw | CoPaw / NanoBot |
|------|----------------------|-----------------|
| **Estratégia** | Arquitetura primeiro (RFCs, contratos, modularidade) | Features primeiro (releases frequentes, UX) |
| **Riscos** | Ciclos mais longos para valor user-facing | Divida técnica acumulada (bugs críticos) |
| **Fit** | Enterprise com requisitos de compliance | Usuários early adopters, power users |

### 5.2 Público-Alvo Implícito

| Projeto | Perfil de Usuário Sugerido |
|---------|---------------------------|
| **IronClaw** | Times enterprise com necessidades de Slack/Teams integration; arquitetura multi-tenant |
| **ZeroClaw** | Usuários avançados que valorizam segurança granular e transparência de design (RFC-driven) |
| **CoPaw** | Desenvolvedores que querem UI desktop inovadora; ekosistem Qwen/Alibaba Cloud |
| **Hermes Agent** | Usuários de modelos de raciocínio (Qwen3.x, DeepSeek-R1, Gemma 4); flexibilidade de providers |
| **NanoBot** | Usuários multi-canal (Telegram, Matrix, Discord); preferência por WebUI desktop |
| **PicoClaw** | Projetos de código aberto com dependência AWS Bedrock; maturidade inicial |

### 5.3 Divergências Técnicas Significativas

| Aspecto | Hermes Agent | NanoBot | IronClaw |
|---------|--------------|---------|----------|
| **Memory** | keep_history context engine (UX preservação) | Dream + consolidation | Cross-conversation recall (problema em aberto) |
| **Scheduling** | Cron drift bloqueia transitions | Cron scheduler com falha silenciosa | Live-canary + verdict narration |
| **Compression** | keep_history feature em PR | Model override em consolidation | Structural document editing (não compress) |
| **Channels** | Desktop-focused, Termux emerging | Telegram + Matrix + MCP | Slack ops 16/16, Telegram MTProto |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Indicador | Líder | Seguidores |
|-----------|-------|------------|
| **PRs/24h merged** | IronClaw (27) | Hermes Agent (8), CoPaw (19), NanoBot (9) |
| **Releases/30d estimados** | CoPaw (high velocity) | IronClaw (RC.3 há 2d), NanoBot (acumulando) |
| **Engajamento RFC** | ZeroClaw (20 comentários/RFC) | IronClaw (epic-driven) |
| **Bug close rate** | IronClaw (0 P0/P1) | NanoBot (em 대응 com 7 PRs) |

### 6.2 Sinais de Consolidação vs. Experimentação

| Projeto | Fase | Indicador |
|---------|------|-----------|
| **IronClaw** | **Consolidação** | RC.3 hasegunda versão; zero P0/P1; 54% PR close rate; docslimpeza (AGENTS-local.md) |
| **ZeroClaw** | **Consolidação** | v0.9.0 milestone em coordenação; semanal lettered cuts; Fluent i18n em status |
| **CoPaw** | **Experimentação** | v2.1.0 OS Shell (inovação UI); security crítica em aberto; 2 releases/24h |
| **NanoBot** | **Estabilização** | 6 bugs P1-P2 abertos com PRs 대응; acumulação antes de release |
| **Hermes Agent** | **Estabilização** | 2 P1 em aberto; keep_history feature para UX pós-compressão |

### 6.3 Dívida Técnica por Projeto

| Projeto | Dívida Visível | Risco |
|---------|----------------|-------|
| **CoPaw** | Vulnerabilidade crítica aberta (#6992), bugs críticos 24 dias (#6955) | 🔴 Alto |
| **NanoBot** | 6 bugs P1-P2 de perda de dados silenciosa | 🟠 Médio-alto |
| **Hermes Agent** | 12 bugs P2+, cron jobs travados emagotados | 🟠 Médio |
| **PicoClaw** | Lockfile pnpm quebrado, 1 bug 24 dias | 🟡 Médio |
| **IronClaw** | PR #7163 (regressão #7109) aberto 10 dias | 🟢 Baixo |
| **ZeroClaw** | RFCs estagnadas (#6850 — 12 comentários, sem decisão) | 🟢 Baixo |

---

## 7. Sinais de Tendência

### 7.1 Tendências Extraídas do Feedback da Comunidade

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **MCP como plataforma de extensibilidade** | NanoBot (#5251, #5386, #5298), IronClaw (#7581, #7614), ZeroClaw (#2117) | Equipes investindo em discovery, security e budget de tools — padrão emergente de facto |
| **Memory cross-session como demanda não resolvida** | ViBo (#7003 CoPaw), cross-session recall (#7185 IronClaw), persistent agents (#5372 NanoBot) | Diferenciação técnica futura; 97.5% redução de tokens (ViBo) como benchmark |
| **UX multimídia nativa** | TTS (#4010 NanoBot — 80 dias, 3👍), Telegram stickers (#5289), Matrix E2EE (#4841) | Fechar loop conversacional com audio/video é próximo fronteira de canais |
| **Segurança como feature competitiva** | ZeroClaw RFCs (permissões, sandbox), CoPaw vulnerability, IronClaw capability membrane | Enterprise adoption exige processos de security response maduros |
| **Desktop como contexto de uso primário** | Folder picker (#5381 NanoBot), Termux (#85604 Hermes Agent), OS Shell (#6636 CoPaw) | UI rich client não é secundário — é onde power users operam |
| **Flexibilidade de providers** | Hermes Agent model_overrides (#85560), PicoClaw dynamic dispatch (#3330), CoPaw 百炼 support (#6973) | Lock-in de provider é antipattern; multi-provider é expectativa mínima |
| **Compressão de contexto com preservação de UX** | Hermes keep_history (#85611), CoPaw scroll compress (#6951), NanoBot consolidation (#4556) | Compressão técnica não basta — usuário precisa ver contexto historiado |

### 7.2 Riscos Sistêmicos Identificados

1. **Fragmentação de patterns de sessão:** Cada projeto implementa persistência/consolidação de forma independente — sem padrão de facto para memória de longo prazo.
2. **Security response inconsistente:** CoPaw (crítica aberta) vs. NanoBot (bypass fechado rapidamente) vs. Hermes Agent (cron jobs travados sem fallback) — maturidade desigual.
3. **MCP como "wild west":** Integração MCP em进度 mas sem padrões de segurança (allowPatterns bypass, credential chain verification) — área de risco emergente.

### 7.3 Oportunidades para Contribuidores

| Área | Projetos com Demandas | Prioridade |
|------|----------------------|------------|
| **Memory/persistence systems** | IronClaw, CoPaw, NanoBot, Hermes Agent | 🔴 Muito alta |
| **Security hardening** | CoPaw, ZeroClaw, NanoBot | 🔴 Crítica |
| **MCP tool discovery/UX** | NanoBot, IronClaw | 🟠 Alta |
| **Desktop/TUI consistency** | Hermes Agent, CoPaw, NanoBot | 🟠 Alta |
| **Multi-provider flexibility** | Hermes Agent, PicoClaw, CoPaw | 🟡 Média |

---

## Conclusão

O ecossistema open source de agentes de IA está em **fase de maturação bifurcada**: projetos como IronClaw e ZeroClaw consolidam qualidade com arquitetura modular e processos RFC maduros, enquanto CoPaw e Hermes Agent priorizam feature velocity com dívida técnica acumulada. NanoBot posiciona-se como bridge entre ambos os polos com foco em estabilidade (bugfixes) e integração MCP profunda. A tendência mais clara é a **convergência para MCP como camada de extensibilidade padrão**, enquanto **memória cross-session** permanece o problema técnico não resolvido com maior demanda comunitária. Para decisores técnicos, IronClaw oferece o melhor equilíbrio atual de maturidade e arquitetura; para desenvolvedores individuais, CoPaw oferece o menor tempo de prototipagem.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-08-14

## 1. Panorama do Dia

NanoBot mantém um nível de atividade muito intenso: 46 eventos total nas últimas 24h (13 issues, 33 PRs). A equipe demonstra foco em **estabilidade e qualidade** — há pelo menos 4 PRs dedicados exclusivamente a correções de bugs críticos (cron scheduler, session persistence, Windows race conditions). Simultaneamente, a integração com MCP Apps (#5251, #5386) e funcionalidades de canais (Telegram stickers, Matrix E2EE) avançam em paralelo. A ausência de releases é consistente com a estratégia de acumulação de mudanças antes de cortes de release.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não emitiu novas versões. Isso sugere que a base de código está em fase de acumulação de PRs antes de um próximo tag. O último release permanece o que estiver no topo da ветви `main`.

---

## 3. Progresso do Projeto

### PRs fechados/merged com impacto

| # | PR | Autor | Tipo | Impacto |
|---|----|----|------|---------|
| [#5381](https://github.com/HKUDS/nanobot/pull/5381) | feat(webui): native workspace folder picker | Re-bin | Feature | Seleção nativa de pastas no macOS/Windows/Linux para sessões WebUI locais; incrementa usabilidade em setups desktop |
| [#5384](https://github.com/HKUDS/nanobot/pull/5384) | fix(webui): restore transcript-only session history | Re-bin | Bugfix | Restaura sidebar de histórico para sessões que só têm transcrição (sem JSONL canônico); fecha gap de descoberta |
| [#5374](https://github.com/HKUDS/nanobot/pull/5374) | fix(cron): keep scheduler alive when job-store persistence fails | rickererer | Bugfix | **Criticidade alta** — corrige modo de falha silenciosa onde disco cheio/mudança de permissão mata permanentemente o scheduler de cron |
| [#5375](https://github.com/HKUDS/nanobot/pull/5375) | fix(cron): keep scheduler alive (dup) | rickererer | Bugfix | Duplicate funcional do #5374 |
| [#4556](https://github.com/HKUDS/nanobot/pull/4556) | feat(dream): wire up model_override for Dream consolidation | dajiaohuang | Feature | Aplica `DreamConfig.model_override` durante consolidação periódica de memória; fecha #4029 |
| [#4550](https://github.com/HKUDS/nanobot/pull/4550) | fix(cron): use per-run session key to prevent context sharing | dajiaohuang | Bugfix | Isola sessões de cron runs para evitar que execuções compartilhem contexto; fecha #4082 |

**Destaque estratégico**: Os PRs #4556 e #4550 estavam abertos desde 2026-06-26 (~49 dias) e finalmente foram merged hoje. Isso indica desbloqueio de dependências ou resolução de conflitos técnicos pendentes.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento

| # | Título | Comentários | 👍 | Tipo | Sinais |
|---|--------|-------------|----|------|--------|
| [#4010](https://github.com/HKUDS/nanobot/issues/4010) | Feature: text-to-speech / voice output | 3 | 3 | Feature | **Mais votada** — nanobot já entende voz mas não fala; fecha loop conversacional em canais que suportam áudio nativo |
| [#5306](https://github.com/HKUDS/nanobot/issues/5306) | Security: exec.allowPatterns bypass | 1 | 0 | **Segurança** | **Fechada hoje** — vulnerabilidade de bypass em `exec` tool; requer atenção imediata de operadores |
| [#5298](https://github.com/HKUDS/nanobot/issues/5298) | Budget model-visible MCP schemas | 1 | 0 | Enhancement | Contexto: custo de token explode com grandes tool sets MCP; solução proposta em PR #5388 |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Add MCP Apps host support to WebUI | 1 | 0 | Feature | MCP Apps (`io.modelcontextprotocol/ui`) permite UI rica para resultados de ferramentas; PR #5386 em andamento |

**Análise**: A comunidade converge para dois eixos — (1) **experiência multimídia** (TTS #4010, stickers #5289) e (2) **integração MCP profunda** (App hosts #5251, schemas budget #5298, metadata #5386). A vulnerabilidade de segurança #5306 foi corrigida rapidamente, demonstrando processo de security response funcional.

---

## 5. Bugs e Estabilidade

### Problemas abertos reportados nas últimas 24h

| Severidade | # | Título | Resumo |
|-----------|----|--------|--------|
| **🔴 P1** | [#5373](https://github.com/HKUDS/nanobot/issues/5373) | Cron scheduler die permanente | Persistência failure mata scheduler silenciosamente; não há recovery automático |
| **🔴 P1** | [#5378](https://github.com/HKUDS/nanobot/issues/5378) | file-cap archive mutation bug | `Session.enforce_file_cap()` muta sessão antes de persistir; falha no callback descarta overflow permanentemente |
| **🟠 P2** | [#5377](https://github.com/HKUDS/nanobot/issues/5377) | Consolidation truncates but advances cursor | `_truncate_to_token_budget` remove mensagens mas `last_consolidated` avança sobre batch completo — perda silenciosa |
| **🟠 P2** | [#4841](https://github.com/HKUDS/nanobot/issues/4841) | Matrix: bot device 'untrusted' | Element mostra device não verificado; falta SAS cross-signing no bot |
| **🟠 P2** | [#5368](https://github.com/HKUDS/nanobot/issues/5368) | Copy/fork actions visíveis durante turn | Conflito de sinais de conclusão: UI mostra ações enquanto agent ainda gera |
| **🟡 P3** | [#5349](https://github.com/HKUDS/nanobot/issues/5349) | Timezone mismatch em tests | Testes de settings falham deterministicamente em janela de ~5h por timezone |

### PRs de bugfix relacionados abertos

| # | Corretivo | Status | Alvo |
|---|-----------|--------|------|
| [#5380](https://github.com/HKUDS/nanobot/pull/5380) | fix(session): restore state when file-cap archive fails | OPEN | #5378 |
| [#5376](https://github.com/HKUDS/nanobot/pull/5376) | fix(cron): keep scheduler alive on persistence failure | OPEN | #5373 |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | fix(memory): preserve full consolidation input | OPEN | #5377 |
| [#5382](https://github.com/HKUDS/nanobot/pull/5382) | fix(session): retry os.replace() on Windows PermissionError | OPEN | Crash heartbeat |
| [#5383](https://github.com/HKUDS/nanobot/pull/5383) | fix(session): serialize canonical file access | OPEN | Concorrência de readers/writers |
| [#5385](https://github.com/HKUDS/nanobot/pull/5385) | fix(matrix): complete Element SAS request flow | OPEN | #4841 |
| [#5371](https://github.com/HKUDS/nanobot/pull/5371) | fix(webui): hide assistant actions until turn end | OPEN | #5368 |

**Leitura**: A equipe está ativamente combatendo uma frente de bugs de **consistência de estado** (session, consolidation, cron) — todos com potencial de perda de dados silenciosa. Taxa de cobertura de PRs para os bugs abertos é alta (~7 PRs para 6 issues P1-P2).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features com proposta formal

| # | Título | PR Paralelo | Estratégia |
|---|--------|-------------|------------|
| [#4010](https://github.com/HKUDS/nanobot/issues/4010) | Text-to-speech / voice output | — | Adiciona output de voz em canais que suportam; fecha loop conversacional |
| [#5289](https://github.com/HKUDS/nanobot/issues/5289) | Telegram stickers + agent-initiated reactions | [#5387](https://github.com/HKUDS/nanobot/pull/5387) | Suporte nativo a stickers + reações iniciadas pelo bot |
| [#5298](https://github.com/HKUDS/nanobot/issues/5298) | Budget model-visible MCP schemas | [#5388](https://github.com/HKUDS/nanobot/pull/5388) | Byte budget para subset de schemas visíveis ao modelo; controle de custos |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | MCP Apps host no WebUI | [#5386](https://github.com/HKUDS/nanobot/pull/5386) | UI rica para resultados MCP Apps (`io.modelcontextprotocol/ui`) |
| [#5350](https://github.com/HKUDS/nanobot/issues/5350) | QwenCloud provider path | — | Provedor alternativo para Qwen Cloud, backward-compatible com DashScope |
| [#5366](https://github.com/HKUDS/nanobot/issues/5366) | WebUI: localize Agent activity text | — | I18n de strings "Working for", "Searched files" etc. |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | Session collaboration via mentions | OPEN | Menções `@name` para sessions colaborativas |
| [#4549](https://github.com/HKUDS/nanobot/issues/4549) | heartbeat model_override | OPEN (PR) | Modelo mais barato para heartbeat |
| [#4551](https://github.com/HKUDS/nanobot/issues/4551) | heartbeat isolated_session config | OPEN (PR) | Heartbeat no contexto da sessão alvo |

**Sinal de roadmap**: A convergência de MCP (#5298, #5251, #5386) e a feature de TTS (#4010) sugerem que a próxima versão major pode se concentrar em **MCP como plataforma de extensibilidade** e **experiência multimídia nativa**.

---

## 7. Resumo de Feedback dos Usuários

### Dores reais identificadas

| Categoria | Sintoma | Evidence |
|-----------|---------|----------|
| **Perda de dados silenciosa** | Consolidação e file-cap truncam mensagens sem feedback claro | [#5377](https://github.com/HKUDS/nanobot/issues/5377), [#5378](https://github.com/HKUDS/nanobot/issues/5378) |
| **Cron não confiável** | Scheduler morre após primeiro erro de disco | [#5373](https://github.com/HKUDS/nanobot/issues/5373) |
| **UX de Canal** | Telegram sem stickers; Matrix não verificado | [#5289](https://github.com/HKUDS/nanobot/issues/5289), [#4841](https://github.com/HKUDS/nanobot/issues/4841) |
| **Custo de tokens** | MCP tool schemas consomem contexto demais | [#5298](https://github.com/HKUDS/nanobot/issues/5298) |
| **Segurança** | Bypass de `allowPatterns` em exec | [#5306](https://github.com/HKUDS/nanobot/issues/5306) — **já corrigido** |

### Cenários de uso emergentes

- **Agentes persistentes**: Proposta ViBo (#5372) para memória cross-session sinaliza demanda por agentes com memória de longo prazo.
- **Colaboração**: PR #5358 (session collaboration via mentions) indica uso multi-usuário do WebUI.
- **Desktop natty**: #5381 (folder picker) confirma adoção em setups desktop onde WebUI roda localmente.

---

## 8. Backlog que Merece Atenção

### Issues sem atividade substancial (>7 dias sem updates)

| # | Título | Criado | Atualizado | Comentários | Observação |
|---|--------|--------|------------|-------------|------------|
| [#4841](https://github.com/HKUDS/nanobot/issues/4841) | Matrix: bot device untrusted | 2026-07-07 | 2026-08-13 | 1 | 37 dias desde criação; PR #5385 em aberto mas issue precisa triagem formal |
| [#4549](https://github.com/HKUDS/nanobot/issues/4549) | heartbeat model_override | 2026-06-26 | 2026-08-13 | — | 49 dias; PR aberto aguardando merge |
| [#4551](https://github.com/HKUDS/nanobot/issues/4551) | heartbeat isolated_session | 2026-06-26 | 2026-08-13 | — | 49 dias; mesmo PR bundle que #4549 |
| [#4010](https://github.com/HKUDS/nanobot/issues/4010) | TTS / voice output | 2026-05-26 | 2026-08-12 | 3 | 80 dias; maior engajamento da comunidade mas sem implementação |

### Priorização recomendada

1. **#4841** — Se a equipe não tiver capacidade, um resposta oficial ("planned for vX.Y") reduziria ruído.
2. **#4010** — Se não estiver no roadmap, sinalizar recusa educada para não acumular demanda sem perspectiva.
3. **#5372** (ViBo integration) — Proposta externa comercial; precisa decisão de，要不要 endorsement.

---

## Métricas de Saúde do Projeto

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues ativas (24h) | 12 | 🟢 Alta |
| PRs abertos (24h) | 24 | 🟢 Muito ativo |
| PRs fechados (24h) | 9 | 🟢Bom fluxo |
| Bugs P1-P2 abertos | 6 | 🟡 Atenção, mas com PRs 대응 |
| Security issues | 1 (fechada) | 🟢 Resposta rápida |
| Releases (24h) | 0 | 🟡 Nenhuma emissão |
| TTM PR close rate | — | Requer dados históricos |
| Issues >30d sem resposta | 3 | 🟡 Necesita triagem |

**Veredicto geral**: NanoBot está em **fase de maturação de estabilidade**. A atividade massiva de bugfixes (cron, session, consolidation, Windows) indica foco em confiabilidade para produção. A linha de features (MCP, Telegram, Matrix, TTS) sugere uma release major iminente. Recomenda-se monitorar a taxa de fechamento de PRs de bugfix para validar se a fase de estabilidade converge antes do próximo release tag.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-14

## 1. Panorama do Dia

O Hermes Agent mantém um ritmo de atividade intenso em 2026-08-14, com **50 issues e 50 PRs atualizados nas últimas 24h**. A equipe de desenvolvimento fechou **12 issues** e **8 PRs**, indicando progresso consistente. O projeto enfrenta **2 bugs de severidade P1** em aberto — um relacionado à continuidade de sessão pós-compressão e outro ao reap de gateways no macOS — que exigem atenção imediata. Não houve lançamentos de novas versões hoje, mas a comunidade está ativamente engajada com 2 issues gerando mais de 15 comentários cada, sinalizando demandas prioritárias.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto não publicou novas versões desde o período analisado. A ausência de releases sugere foco em estabilização interna e preparação para um próximo ciclo de lançamento. Mantenha atenção aos repositórios oficiais para announcements.

---

## 3. Progresso do Projeto

### PRs Fechados/Mergidos (8 total)

| # | Título | Impacto |
|---|--------|---------|
| [#85569](https://github.com/NousResearch/hermes-agent/pull/85569) | `fix(usage): cost display honesty — sub-cent labels, cost buckets, included notes` | **Resolvido** bug de exibição de custos sub-centavo (DeepSeek etc.). Encerrou #79220. |
| [#85560](https://github.com/NousResearch/hermes-agent/pull/85560) | `feat(models): per-model metadata overrides via model_overrides config` | **Feature:** nova seção `model_overrides` para declaração manual de capacidades e limites de modelos. |
| [#57593](https://github.com/NousResearch/hermes-agent/pull/57593) | `fix(tui_gateway): restore openrouter provider on session resume` | **Resolvido** erro de "context window 2,048 tokens" ao retomar sessões OpenRouter após troca de provider. |
| [#85558](https://github.com/NousResearch/hermes-agent/pull/85558) | `fix(tui_gateway): restore openrouter provider on session resume (salvage #57593)` | **Salvage** do PR anterior, garantindo robustez. |

### PRs Abertos com Alto Impacto

| # | Título | Status |
|---|--------|--------|
| [#84834](https://github.com/NousResearch/hermes-agent/issues/84834) | **Webhook Revolution** — Campaign Meta-Issue (EPIC) | Meta-issue para reformulação completa da superfície de webhooks. |
| [#85618](https://github.com/NousResearch/hermes-agent/pull/85618) | `fix(webhook): make intake fan-out-safe and structurally valid` | Parte da Campaign Webhook Revolution, fecha #7448 e #55829. |
| [#76338](https://github.com/NousResearch/hermes-agent/pull/76338) | `feat(cli): hide Vite warning + npm update` | Oculta warnings de deprecação Vite no `hermes update`. |
| [#70746](https://github.com/NousResearch/hermes-agent/pull/70746) | `fix(agent): preserve Gemma 4 reasoning replay` | Garante replay de `reasoning_content` nativo do Gemma 4. |
| [#85424](https://github.com/NousResearch/hermes-agent/pull/85424) | `fix(agent): make title generation work for reasoning models and strict local providers` | Corrige geração de títulos para modelos de raciocínio (Qwen3.x, DeepSeek-R1, GLM-5). |
| [#85611](https://github.com/NousResearch/hermes-agent/pull/85611) | `feat(compression): add keep_history context engine` | **Feature UX-significativa:** preserva histórico visível após auto-compressão. |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

1. **[#64182](https://github.com/NousResearch/hermes-agent/issues/64182)** — Plugin Interface Expansion (35 comentários, CLOSED)
   - **Demanda:** Expansão da interface de plugins do agente central, baseada em discussão da comunidade Discord.
   - **Objetivo:** Permitir que contribuidores com PRs enfileirados publiquem plugins estáveis.
   - **Status:** Fechado — indicando planejamento concluído ou em andamento.

2. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)** — Skills index is stale/degraded (24 comentários, OPEN)
   - **Demanda:** O índice de Skills está 29.8h desatualizado (limite: 26h), afetando `/docs/skills`.
   - **Componente:** `tool/skills`, `sweeper:risk-automation`
   - **Risco:** Degradação contínua do catálogo de habilidades. PR #34636 em aberto para mitigar.

3. **[#84834](https://github.com/NousResearch/hermes-agent/issues/84834)** — Webhook Revolution (16 comentários, OPEN)
   - **Demanda:** Reforma abrangente (5×2×3) da superfície de webhooks — ingress, execution, delivery, configuration, management UI, deployment, documentação.
   - **Escala:** Meta-issue épica com múltiplos sub-PRs.

4. **[#82001](https://github.com/NousResearch/hermes-agent/issues/82001)** — Agent flush não adota continuação ao vivo após compressão (16 comentários, P1)
   - **DOR:** Quando LCM/compressão de contexto fecha uma sessão ativa, o agente retorna erro `session_persistence_failed` com mensagem enganosa de "full disk".
   - **Componentes:** `comp/agent`, `comp/gateway`, `area/sessions`, `area/compression`.

### Sinais de Tendência

- **UX de Compression:** Múltiplas issues e PRs relacionados (#82001, #85611) indicam que a experiência de compressão de contexto é uma dor recorrente.
- **Estabilidade de Sessions:** Três bugs P1/P2 sobre state de sessões, orphan reaping e provider switching evidenciam fragilidade no gerenciamento de sessões.
- **Webhook Surface:** A campaign #84834 sinaliza vontade de modernizar uma área há muito negligenciada.

---

## 5. Bugs e Estabilidade

### P1 — Críticos (2 bugs)

| # | Título | Componentes | Impacto |
|---|--------|-------------|---------|
| [#82001](https://github.com/NousResearch/hermes-agent/issues/82001) | Agent flush não adota continuação pós-compressão | `comp/agent`, `comp/gateway`, `area/sessions` | Diálogos enganosos de "full disk"; quebras de fluxo de trabalho |
| [#85344](https://github.com/NousResearch/hermes-agent/issues/85344) | `_reap_unsupervised_gateway_orphans` mata gateway launchd no macOS | `comp/desktop`, `platform/macos` | Gateway reinicia infinitamente; usabilidade Desktop comprometida |

### P2 — Altos (10 bugs)

- **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616):** Skills index degradado há >24h (automação falhando).
- **[#85578](https://github.com/NousResearch/hermes-agent/issues/85578):** WS-orphan reaper nunca reagenda para sessões mid-turn, deixando-as permanentemente "unreapable".
- **[#70131](https://github.com/NousResearch/hermes-agent/issues/70131):** Emoji ✨ U+2728 e ✅ U+2705 ainda disparam loop de truncamento.
- **[#70050](https://github.com/NousResearch/hermes-agent/issues/70050):** Cron drift bloqueia transição free→free; sem caminho suportado para repin de modelo.
- **[#85215](https://github.com/NousResearch/hermes-agent/issues/85215):** Cron jobs fixam em modelo agotado e ignoram `fallback_providers` (HTTP 402 permanente).
- **[#83680](https://github.com/NousResearch/hermes-agent/issues/83680):** `cryptography==50.0.0` falha em resolver `PyLong_Type` no Termux/Android.
- **[#85588](https://github.com/NousResearch/hermes-agent/issues/85588):** Bump do mautrix 0.21.1 derruba adapter Matrix no macOS.
- **[#57588](https://github.com/NousResearch/hermes-agent/issues/57588):** Adicionar provider customizado quebra todas as sessões anteriores.
- **[#41354](https://github.com/NousResearch/hermes-agent/issues/41354):** RPi 3B+抛出 JavaScript heap out of memory no `hermes dashboard --tui`.

### P3 — Médios e Baixos

Diversos bugs de UI (scroll stall no Desktop sidebar), plugins (mautrix, photon/iMessage), dashboard (CPU spike 200%+ no build) e providers (Ollama Cloud /v1, Anthropic custom gateways).

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas com Alto Engajamento

| # | Título | Componentes | Notas |
|---|--------|-------------|-------|
| [#8731](https://github.com/NousResearch/hermes-agent/issues/8731) | Manual capability declaration (vision/reasoning/tools) para custom_providers | `comp/cli`, `area/config` | **5 👍** — pedido antigo (abril 2026), destaque para necessidade de flexibilidade |
| [#76207](https://github.com/NousResearch/hermes-agent/issues/76207) | Hide Vite warning + Update npm | `comp/cli`, `comp/dashboard` | PR #76338 em revisão |
| [#62728](https://github.com/NousResearch/hermes-agent/issues/62728) | Test runs invisíveis ao verifier; agente roda testes redundantes | `comp/agent` | Feature request / bug boundary |
| [#85611](https://github.com/NousResearch/hermes-agent/pull/85611) | **keep_history context engine** — preserva chat visível pós-compressão | `comp/compression` | Mudança UX significativa |
| [#85612](https://github.com/NousResearch/hermes-agent/pull/85612) | Kanban gate dependencies on structured outcomes | `comp/kanban` | Aprimoramento de workflow |
| [#85617](https://github.com/NousResearch/hermes-agent/pull/85617) | Desktop: route requests by applied profile gateway | `comp/desktop` | Separação de conexões por profile |
| [#85604](https://github.com/NousResearch/hermes-agent/pull/85604) | **feat(termux): hardened browser-hosted Desktop** | `comp/desktop`, `platform/termux` | Slice 3/3, requer security review |

### Sinais de Roadmap

- **Plugin System:** Issue #64182 (Plugin Interface Expansion) sinaliza investimento em extensibilidade.
- **Webhook Modernization:** Campaign #84834 indica priorização de infraestrutura de integração.
- **Model Override Flexibility:** PR #85560 (`model_overrides`) responde à demanda #8731, sugerindo caminho para metadata custom.
- **Context Compression UX:** PR #85611 (`keep_history`) aponta para reformulação da experiência de compressão.

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais

1. **Quebras de Sessão Persistentes:** Usuários reportam perda de contexto ao trocar providers, resumir sessões e durante compressão automática. A mensagem enganosa de "full disk" em #82001 exemplifica frustração — disco está saudável, mas usuário é desinformado.

2. **Cron Jobs Fragilizados:** Múltiplos bugs (#70050, #85215) sobre cronjobs travando em modelos esgotados sem fallback, causando falhas HTTP 402 permanentes. Usuários ficam "presos" sem caminho de recuperação suportado.

3. **Ecossistema de Plugins Imaturo:** Bugs de descoberta (#40101), compatibilidade de plataforma (#85588, #83680) e integração de adapters evidenciam que a arquitetura de plugins ainda não é confiável para todos os ambientes.

4. **Desktop App Inconsistente:** Issues de scroll (#84964), reinicialização infinita de gateway (#85344) e problemas de setup no Termux (#83680) indicam que a experiência Desktop precisa de refinamento.

5. **Testes Ad-hoc Redundantes:** Em #62728, um usuário relata frustração ao rodar `smoke_test.py` manualmente a cada turn, sem que o agente reconheça testes já executados.

### Cenários de Uso Emergentes

- **Termux/Android como Desktop:** Issue #85604 e PRs relacionados indicam interesse crescente em rodar Hermes Desktop em dispositivos móveis via Termux:X11.
- **Kanban com Dependências Estruturadas:** PR #85612 sugere adoção de Hermes para orquestração de workflows complexos.
- **Matrix como Canal Primário:** Bugs de compatibilidade (#85588) indicam base ativa de usuários Matrix/E2EE.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| # | Título | Criado | Comentários | Prioridade |
|---|--------|--------|-------------|------------|
| [#8731](https://github.com/NousResearch/hermes-agent/issues/8731) | Manual capability declaration para custom_providers | 2026-04-13 | 1 | P3 (5 👍) |
| [#62728](https://github.com/NousResearch/hermes-agent/issues/62728) | Test runs invisíveis ao verifier | 2026-07-11 | 5 | P2 |
| [#62785](https://github.com/NousResearch/hermes-agent/issues/62785) | Kanban wake events criam sessões imortais | 2026-07-11 | 2 | P3 (CLOSED) |
| [#41354](https://github.com/NousResearch/hermes-agent/issues/41354) | RPi 3B+ heap out of memory | 2026-06-07 | 1 | P2 |

### PRs em Aberto com Potencial Impacto

| # | Título | Status | Impacto |
|---|--------|--------|---------|
| [#85604](https://github.com/NousResearch/hermes-agent/pull/85604) | Termux Desktop hardening | `blocked, needs-decision` | Plataforma alternativa |
| [#34636](https://github.com/NousResearch/hermes-agent/pull/34636) | Retry GitHub rate-limits em skills-index | `sweeper:risk-automation` | Estabilidade do catálogo |
| [#85616](https://github.com/NousResearch/hermes-agent/pull/85616) | Exclude launchd gateway do orphan reaper | `sweeper:risk-platform-macos` | Estabilidade macOS |

---

## Métricas de Saúde do Projeto

| Indicador | Valor (24h) | Tendência |
|-----------|-------------|-----------|
| Issues ativas | 38 | Neutra |
| Issues fechadas | 12 | Positiva |
| PRs abertos | 42 | — |
| PRs merged/fechados | 8 | Positiva |
| Bugs P1 em aberto | 2 | **Alerta** |
| Bugs P2 em aberto | ~10 | Atenção |
| Releases | 0 | Neutra |
| Issues sem resposta (>30 dias) | 4 identificadas | Backlog |

**Veredicto:** O Hermes Agent demonstra vigoroso ritmo de desenvolvimento com 50+ itens de trabalho por dia. A saúde geral é **boa**, mas a presença de 2 bugs P1 (especialmente o de sessions/compression e o de macOS gateway) representa risco imediato. O backlog de features (#8731) aguarda atenção, e a Campaign Webhook Revolution (#84834) promete impacto significativo no próximo ciclo.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-14

---

## 1. Panorama do Dia

O projeto PicoClaw apresenta alta atividade no dia de hoje com **9 PRs atualizadas** e **3 issues ativas**, indicando uma rotina de desenvolvimento ativa. Não houve lançamentos de novas versões, sugerindo que o time está em ciclo de estabilização ou preparação de release. A atividade de dependências é predominante — 6 dos 9 PRs são atualizações de bibliotecas Go via Dependabot, enquanto 3 PRs de dependências anteriores foram fechadas como "stale", indicando que não foram mergeadas em tempo hábil. As 3 issues em aberto tratam de problemas funcionais (1 bug de performance na UI) e features relevantes para flexibilidade de modelos de IA.

---

## 2. Lançamentos

**Nenhum release registrado nas últimas 24h.**

O projeto não publicou novas versões neste período. A ausência de releases pode indicar:
- Foco em correções de bugs que ainda estão em avaliação
- Processo de QA em andamento para uma próxima versão
- Ciclo de release mais espaçado

---

## 3. Progresso do Projeto

### PRs Fechadas/Mergedas Hoje (3)

| # | PR | Resumo |
|---|-----|--------|
| #3305 | [bump aws-sdk-go-v2/service/bedrockruntime → 1.56.2](https://github.com/sipeed/picoclaw/pull/3305) | Atualização de dependência AWS (fechada como stale) |
| #3306 | [bump aws-sdk-go-v2/config → 1.32.33](https://github.com/sipeed/picoclaw/pull/3306) | Atualização de dependência AWS (fechada como stale) |
| #3304 | [bump anthropic-sdk-go → 1.61.0](https://github.com/sipeed/picoclaw/pull/3304) | Atualização de dependência Anthropic (fechada como stale) |

**⚠️ Alerta:** As 3 PRs fechadas foram marcadas como **stale**, indicando que não foram mergeadas dentro do prazo padrão do GitHub. Isso sugere possible bottlenecks no processo de review ou que foram substituídas por PRs mais recentes (IDs 3332-3336).

### PRs Abertas em Review (6)

Destaque para:
- [#3318](https://github.com/sipeed/picoclaw/pull/3318) — **Correção crítica do lockfile pnpm**: resolve erro `ERR_PNPM_BROKEN_LOCKFILE` causado por chave duplicada `semver@7.8.5` no `web/frontend/pnpm-lock.yaml`. **Prioridade alta** — bloqueia builds do frontend.

---

## 4. Temas Quentes da Comunidade

### Issue com Maior Engajamento

| # | Título | Tipo | Comentários | 👍 |
|---|--------|------|-------------|-----|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input is very laggy when history has a little bit long | Bug | 5 | 1 |

**Análise:** Esta issue aberta desde 2026-07-21 continua ativa com 5 comentários, indicando um problema de performance que afeta a usabilidade do chat web. O bug está relacionado ao crescimento do histórico de conversa — comportamento crítico para assistentes de IA. A demora na resolução pode impactar a experiência do usuário final.

### Demanda Emergent — Suporte a Modelos Alternativos

As issues [#3331](https://github.com/sipeed/picoclaw/issues/3331) e [#3330](https://github.com/sipeed/picoclaw/issues/3330) representam uma tendência de **pedidos de flexibilidade de modelos**:
- #3331: Solicita uso de qualquer modelo no endpoint `/audio/transcriptions` (não apenas whisper)
- #3330: Desejo de sobrescrever modelo dinamicamente em tools `delegate`/`spawn`/`subagent`

Essas issues sugerem que a comunidade busca maior interoperabilidade entre provedores de IA.

---

## 5. Bugs e Estabilidade

### Bug Reportado

| Severidade | # | Descrição | Status |
|------------|---|-----------|--------|
| **🔴 Alta** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Lag severo no input de chat quando o histórico fica longo | Aberto (7 dias) |

**Análise:** O bug afeta diretamente a usabilidade do produto principal — a interface web. Com 5 comentários e 1 reação, há reconhecimento da comunidade, mas ainda sem solução merged. A causa provável é re-render excessiva do componente de chat a cada digitação (possível necessidade de memoização ou paginação do histórico).

### Problema de Build

| Severidade | # | Descrição | PR Associada |
|------------|---|-----------|--------------|
| **🟡 Média** | — | Lockfile pnpm corrompido bloqueia builds do frontend | [#3318](https://github.com/sipeed/picoclaw/pull/3318) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas (2)

| # | Feature | Resumo da Proposta | Prioridade |
|---|---------|-------------------|------------|
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) | Suporte a modelos não-Whisper para transcrição | Flag `whisper-transcription: true` no config para forçar path de transcrição | Média |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) | Override dinâmico de modelo em tools | Permitir especificação de modelo no momento da chamada de `delegate`/`spawn`/`subagent` | Alta |

**Sinais de Roadmap:**
1. **Flexibilidade multi-modelo** é uma demanda crescente — usuários querem usar modelos otimizados para tarefas específicas (ex: transcrição com modelos modernos em vez de Whisper legacy)
2. **Dynamic dispatch** para tools de agente indica maturidade do padrão multi-agente no projeto

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Cenário | Evidência |
|-----|---------|-----------|
| **Performance degradada com uso** | Uso prolongado do chat web | Issue #3281 — "very laggy" com histórico extenso |
| **Restrição de modelos para ASR** | Usuários querem usar modelos mais recentes | Issue #3331 — Whisper é "too old and slow" |
| **Inflexibilidade na arquitetura multi-agente** | Impossibilidade de sobrescrever modelo por chamada | Issue #3330 — modelo sempre estático |

### Satisfação

A atividade de PRs sugere que:
- Dependências são mantidas relativamente atualizadas (AWS SDK, Anthropic SDK, Mautrix)
- A equipe responde a issues com dependências automáticas

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Atradas

| # | Título | Criado | Dias Atrasado | Prioridade |
|---|--------|--------|---------------|------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Bug de lag no chat web | 2026-07-21 | **24 dias** | 🔴 Alta |
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) | Lockfile pnpm corrompido | 2026-08-05 | **9 dias** | 🟡 Média |

### Ações Recomendadas

1. **Priorizar #3281** — Bug de performance com 24 dias sem resolução afeta diretamente a UX do produto core
2. **Revisar PR #3318** — Lockfile quebrado pode impactar novos contribuidores/clones do repositório
3. **Limpar PRs stale (#3304, #3305, #3306)** — Ja foram substituídas por PRs mais recentes; fechar ou marcar como duplicadas
4. **Avaliar #3330** — Feature de override dinâmico pode ser critério para próxima versão

---

## Métricas Resumidas (2026-08-14)

| Indicador | Valor |
|-----------|-------|
| Issues abertas/ativas | 3 |
| Issues fechadas (24h) | 0 |
| PRs abertas | 6 |
| PRs fechadas/merged | 3 |
| Releases | 0 |
| Bugs críticos | 1 (atrasado) |
| Features solicitadas | 2 |

---

*Relatório gerado com base em dados públicos do GitHub — github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório de Projeto: IronClaw

**Data:** 2026-08-14  
**Repositório:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Panorama do dia

O projeto IronClaw demonstra **altíssima atividade** nas últimas 24h, com 50 issues e 50 PRs atualizados. A equipe está fortemente concentrada em duas épicas de longo prazo: a **#7482 (Pluggable Agent Loops)** com 14 novos sub-issues criados ontem, e a **#7591 (Performance Optimization)** com 10 issues de otimização de banco de dados. O lançamento da RC.3 ocorreu há apenas 2 dias, indicando um ciclo de release acelerado. A relação entre PRs fechados (27) e abertos (23) revela uma taxa de resolução saudável, com foco em estabilidade (bug fixes) e documentação.

---

## 2. Lançamentos

### ironclaw-v1.2.0-rc.3
**Data:** 2026-08-12 | **[Release Notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.2.0-rc.3)**

| Tipo | Descrição |
|------|-----------|
| **Fix** | Runtime container image agora instala `curl`, habilitando healthchecks HTTP in-container (`curl -fsS http://localhost:3000/`) |

**Análise:** Correção operacional crítica — orchestrators dependem de probes HTTP para marcar containers como healthy. Sem cliente HTTP no image, containers nunca eram marcados ready, causando potenciais timeouts e reinicializações desnecessárias.

**Sem breaking changes ou notas de migração** nesta release candidate.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (27 total)

| PR | Título | Tamanho | Contribuidor | Impacto |
|----|--------|---------|--------------|---------|
| [#7531](https://github.com/nearai/ironclaw/pull/7531) | fix(loop): repeated-call detection advisory-only | XL | core | Detecção de loops agora é warning, não erro |
| [#7581](https://github.com/nearai/ironclaw/pull/7581) | fix(extensions): refresh bundled MCP state after auth | M | core | Ferramentas MCP não aparecem mais como `setup_needed` após OAuth |
| [#7579](https://github.com/nearai/ironclaw/pull/7579) | fix(live-canary): slack grant + narrate scrub verdicts | M | core | Correção QA lanes crashing at slack connect |
| [#7576](https://github.com/nearai/ironclaw/pull/7576) | test(kernel): pin admission contracts (AgentExecution seam) | M | core | Testes de contrato para refatoração AgentExecution |
| [#7515](https://github.com/nearai/ironclaw/pull/7515) | feat(slack): bind remaining 8 core standard ops | XL | core | **8 das 16 ops de mensageria Slack agora bound** |
| [#7440](https://github.com/nearai/ironclaw/pull/7440) | feat(webui): non-admin model preference settings | XL | core | Usuários comuns agora podem escolher modelos |
| [#7582](https://github.com/nearai/ironclaw/pull/7582) | Chore/agent config | XL | new | Adiciona AGENTS-local.md para forks |
| [#7578](https://github.com/nearai/ironclaw/pull/7578) | Chore/agent config | XL | new | Limpeza de documentação de release skills |

### PRs Abertos com Alto Impacto

| PR | Título | Tamanho | Risco | Status |
|----|--------|---------|-------|--------|
| [#7163](https://github.com/nearai/ironclaw/pull/7163) | feat(documents): structural docx/xlsx/pptx + PDF render | XL | medium | Edita documentos Office estruturalmente + reverte regressão #7109 |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | feat(coding): omp core-tool contract + benchmark arm | XL | medium | Padroniza 5 ferramentas de codificação (`read`, `write`, `edit`, `glob`, `grep`) |
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | fix(reborn): make durable storage profile-agnostic | XL | medium | Profiles persistem corretamente em `IRONCLAW_REBORN_HOME` |
| [#7464](https://github.com/nearai/ironclaw/pull/7464) | feat(telegram): linked-device auth + standard-op tools | XL | medium | Autenticação MTProto + tools Telegram |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Tags | Relevância |
|-------|--------|-------------|------|------------|
| [#7482](https://github.com/nearai/ironclaw/issues/7482) | **Epic: Pluggable agent loops** | 5 | enhancement, epic, risk:high | **Arquitetura central** — kernel, ACP executor, injeção de credenciais |
| [#6257](https://github.com/nearai/ironclaw/issues/6257) | PDF mime_type error | 4 | bug | ❌ Closed — Usuários não conseguem enviar/gerar PDFs |
| [#6900](https://github.com/nearai/ironclaw/issues/6900) | Cross-user memory leak | 4 | bug, p0 | ❌ Closed — Shared channels vazavam memória entre usuários |

### Análise dos Temas Principais

**1. Pluggable Agent Loops (#7482) — PRIORIDADE MÁXIMA**
O epic mais importante do momento. Divide a arquitetura em:
- **Kernel:** scheduling, tenancy, capability membrane, secrets, audit
- **Agent Loop:** off-the-shelf ACP agents (Clau..., Claude Code, etc.)
- **Tool Code:** integrações como plugins

14 sub-issues criados ontem:
- [#7614](https://github.com/nearai/ironclaw/issues/7614) Capability socket (autenticado)
- [#7613](https://github.com/nearai/ironclaw/issues/7613) Phase-0 harness adapters (claude-code, pi, codex)
- [#7611](https://github.com/nearai/ironclaw/issues/7611) HarnessDriver v1 contract
- [#7610](https://github.com/nearai/ironclaw/issues/7610) Model-provider passthrough via egress proxy
- [#7607](https://github.com/nearai/ironclaw/issues/7607) Sandbox egress wiring

**2. Performance Epic (#7591)**
10 issues de otimização de banco de dados organizados por tier:

| Tier | Savings Estimado | Foco |
|------|------------------|------|
| Tier 1 | Higiene | Remoção de APIs mortas, coalescência de writes |
| Tier 2 | Read pressure | Cache de lease-fence, splits de blobs, heartbeat widening |
| Tier 3 | Write amplification | Batch checkpoints, collapse paired writes |

---

## 5. Bugs e Estabilidade

### Bugs Reportados (Hoje)

| Issue | Severidade | Descrição | Status |
|-------|------------|-----------|--------|
| [#6257](https://github.com/nearai/ironclaw/issues/6257) | medium | `Invalid value (attachments.mime_type)` em PDFs | **CLOSED** |
| [#6900](https://github.com/nearai/ironclaw/issues/6900) | **P0** | Cross-user memory leak em shared channels | **CLOSED** |
| [#7185](https://github.com/nearai/ironclaw/issues/7185) | medium | Memória não é recallada entre conversas | OPEN (2 comentários) |

### Bugs Corrigidos Recentemente (via PRs)

| PR | Fix | Severidade |
|----|-----|------------|
| [#7590](https://github.com/nearai/ironclaw/pull/7590) | Live-canary: marker owner alignment | low |
| [#7581](https://github.com/nearai/ironclaw/pull/7581) | MCP state refresh after OAuth | low |
| [#7579](https://github.com/nearai/ironclaw/pull/7579) | QA lanes crashing at slack connect | critical (para testes) |

### Regressão Conhecida

**#7109 text-log regression** — Corrigida em [#7163](https://github.com/nearai/ironclaw/pull/7163):
> "Binary documents were being destroyed by text tools. The guard was right, but left the user's request unanswered."

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Feature | Escopo | Complexity |
|-------|---------|--------|------------|
| [#2117](https://github.com/nearai/ironclaw/issues/2117) | ironclaw-bridge: local file/MCP bridge para cloud deployments | channel, tool/mcp | L |
| [#7620](https://github.com/nearai/ironclaw/issues/7620) | Profile routing + read-only shadow runs | enhancement | - |
| [#7617](https://github.com/nearai/ironclaw/issues/7617) | Integration policy records (declarative manifests) | enhancement | - |
| [#7615](https://github.com/nearai/ironclaw/issues/7615) | ic CLI + aggregate MCP projection | enhancement | - |

### Features em Desenvolvimento

| PR | Feature | Status | Observações |
|----|---------|--------|-------------|
| [#7163](https://github.com/nearai/ironclaw/pull/7163) | Structural document editing (docx/xlsx/pptx/PDF) | Open | Prioridade para produtividade |
| [#6994](https://github.com/nearai/ironclaw/pull/6994) | OOBE automation tasks prototype | Open | Onboarding WebChat v2 |
| [#7464](https://github.com/nearai/ironclaw/pull/7464) | Telegram linked-device auth | Open | MTProto implementation |
| [#7577](https://github.com/nearai/ironclaw/pull/7577) | Web-app run notifications | Open | Design aprovado, implementação pendente |

### Sinais de Roadmap

1. **Pluggable Loops First** — Epic #7482 domina o roadmap. WS1-WS6 em desenvolvimento.
2. **Slack Completion** — 16/16 ops Slack agora bound (PR #7515 merged).
3. **Coding Tools Consolidation** — Padronização em 5 ferramentas (PR #7491).

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Cenário | Problema | Issue |
|---------|----------|-------|
| Cloud + Local Files | Usuários não acessam arquivos locais (Obsidian, projetos) | [#2117](https://github.com/nearai/ironclaw/issues/2117) |
| Cross-conversation Memory | Contexto não persiste entre conversas | [#7185](https://github.com/nearai/ironclaw/issues/7185) |
| PDF Generation | Erro mime_type ao gerar PDFs | [#6257](https://github.com/nearai/ironclaw/issues/6257) ⚠️ Resolvido |
| Shared Slack Channels | Vazamento de memória entre usuários | [#6900](https://github.com/nearai/ironclaw/issues/6900) ⚠️ Resolvido |

### Feedback Positivo

- **Verdict narration** (PR #7579) já gerou valor na primeira execução em produção.
- **Model preference settings** (PR #7440) atende demanda de usuários non-admin.

### Padrões Identificados

1. **Usuários cloud não alcançam recursos locais** — Bridge daemon é blocking issue.
2. **Contexto cross-session é frágil** — Problema recorrente afeta experiência.
3. **Ops Slack completas** — Marco importante para adoção empresarial.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Estagnadas

| Issue | Título | Criado | Status | Ação Recomendada |
|-------|--------|--------|--------|------------------|
| [#2117](https://github.com/nearai/ironclaw/issues/2117) | Local file/MCP bridge daemon | 2026-04-07 | OPEN, 2 comments | Priorizar — blocking para cloud users |
| [#7185](https://github.com/nearai/ironclaw/issues/7185) | Memory recall across conversations | 2026-08-04 | OPEN, 2 comments | Investigar — afecta experiência básica |
| [#7605](https://github.com/nearai/ironclaw/issues/7605) | Fold message lookup-index rows | 2026-08-13 | OPEN, 0 comments | Review técnico urgente (performance) |

### PRs Abertos há >3 dias sem Review

| PR | Título | Criado | Tamanho | Bloqueante? |
|----|--------|--------|---------|-------------|
| [#7163](https://github.com/nearai/ironclaw/pull/7163) | Structural document editing | 2026-08-04 | XL | Sim (regressão #7109) |
| [#6994](https://github.com/nearai/ironclaw/pull/6994) | OOBE automation prototype | 2026-08-01 | XL | Não |
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | Durable storage profile-agnostic | 2026-08-10 | XL | Sim (Reborn profiles) |

### Métricas de Saúde do Backlog

| Métrica | Valor | Avaliação |
|---------|-------|-----------|
| Issues abertas totais | 45 | Alta atividade |
| PRs abertos | 23 | Pipeline saudável |
| Taxa de resolução (24h) | 54% (27/50) | **Excelente** |
| Issues P0/P1 abertas | 0 | ✅ Críticos resolvidos |
| Avg. idade issues abertas | <7 dias | ✅ Dentro do SLA |

---

## Conclusão

**Saúde Geral:** 🟢 **Saudável com alta atividade**

O IronClaw demonstra vigoroso desenvolvimento com foco em:
1. **Arquitetura modular** (Epic #7482 — pluggable loops)
2. **Performance** (Epic #7591 — otimização DB)
3. **Estabilidade** (bugs críticos resolvidos ontem)

A equipe mantém ritmo acelerado de releases (RC.3 há 2 dias) com 27 PRs resolvidos nas últimas 24h. Recomenda-se atenção especial ao PR [#7163](https://github.com/nearai/ironclaw/pull/7163) para corrigir a regressão #7109.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-08-14

---

## 1. Panorama do Dia

O projeto **CoPaw (QwenPaw)** registrou altíssima atividade em 13/08/2026, com **41 issues e 50 PRs atualizados** nas últimas 24 horas. Foram publicadas **duas releases** (v2.1.0 e v2.1.0-beta.5), indicando um ciclo de lançamento acelerado. A comunidade demonstrou engajamento significativo, com issues de **bug report, segurança e feature requests** concentrando a atenção. O release v2.1.0 trouxe uma reformulação importante com o **QwenPaw OS Shell**, enquanto a beta.5 focou em correções de estabilidade. A taxa de fechamento de issues está saudável (17/41), mas **24 issues permanecem abertas** — algumas com problemas críticos de estabilidade e segurança.

---

## 2. Lançamentos

### v2.1.0 — Release Principal

**Link:** [Release v2.1.0](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0)

#### Mudanças Destacadas

| Categoria | Descrição |
|-----------|-----------|
| **✨ Novidade** | **QwenPaw OS Shell**: Apps em janelas redimensionáveis com launcher, taskbar, notificações e layouts salvos |

> **Nota:** O changelog completo foi truncado nos dados. Recomenda-se consultar o diff completo no GitHub para detalhes adicionais sobre breaking changes.

---

### v2.1.0-beta.5 — Release Beta

**Link:** [Release v2.1.0-beta.5](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.5)

#### Mudanças

| PR | Autor | Descrição |
|----|-------|-----------|
| [#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816) | @RerankerGuo | `fix(chats):` handle dict-like model responses |
| [#6942](https://github.com/agentscope-ai/QwenPaw/pull/6942) | @jinliyl | `fix(memory):` simplify long-term memory guidance |
| docs(website) | — | Correções na documentação |

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (19 total)

| PR | Status | Área | Resumo |
|----|--------|------|--------|
| [#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387) | ✅ Closed | Channels | Instala dependências opcionais de canais sob demanda |
| [#6652](https://github.com/agentscope-ai/QwenPaw/pull/6652) | ✅ Closed | Mission | `fix(mission):` enforce max_iterations server-side — **corrige loops infinitos de sub-agentes** |
| [#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) | ✅ Closed | Chats | Adiciona paginação ao histórico e compression GZip |
| [#6884](https://github.com/agentscope-ai/QwenPaw/pull/6884) | ✅ Closed | Auto-Dream | Torna integração resiliente a output malformado do LLM |
| [#6989](https://github.com/agentscope-ai/QwenPaw/pull/6989) | ✅ Closed | Release | Atualização das notas de release v2.1.0 |

### PRs Abertos com Alto Impacto

| PR | Área | Resumo | Impacto |
|----|------|--------|---------|
| [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) | OneBot | Localiza mídia inbound antes do processamento do agente | **UX e internacionalização** |
| [#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001) | Matrix | Isola sessão e memória por remetente em salas de grupo | **Multi-usuário em grupo** |
| [#7004](https://github.com/agentscope-ai/QwenPaw/pull/7004) | Console | Persiste vínculo parent-child em metadados do chat | **Rastreabilidade de sub-agentes** |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Providers | Unifica descoberta de provider, metadados, roteamento e controles | **Arquitetura central** |
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | PawPort | Importa instruções, settings, skills e plugins de outros agentes (Codex, Qoder) | **Migração e portabilidade** |

---

## 4. Temas Quentes da Comunidade

### Issues com Mais Comentários

| # | Tipo | Título | Comentários | Link |
|---|------|--------|-------------|------|
| #6921 | Bug | Multi-step tasks param sem aviso após planejamento | **6** | [Issue #6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) |
| #6973 | Question | Suporte a token plan da Alibaba Cloud 百炼 | **5** | [Issue #6973](https://github.com/agentscope-ai/QwenPaw/issues/6973) |
| #6811 | Bug | OpenAI Responses ignora `disable_thinking` | **5** | [Issue #6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) |
| #6853 | Bug | prompts.py mente sobre "dream" escrevendo para MEMORY.md | **5** | [Issue #6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) |

### Análise dos Temas

1. **Agentes que param de funcionar** (#6921): Usuários relatam que o modelo planeja a próxima ação mas não executa — precisa de "continue" manual. **Severidade alta.** [Link](https://github.com/agentscope-ai/QwenPaw/issues/6921)

2. **Suporte a provedores alternativos** (#6973): Demanda por Alibaba Cloud 百炼 como provedor de tokens. Indica pressão por diversificação de provedores. [Link](https://github.com/agentscope-ai/QwenPaw/issues/6973)

3. **Confiança na documentação** (#6853): A documentação promete funcionalidade de "dream" que nunca foi implementada. Gera frustração na comunidade. [Link](https://github.com/agentscope-ai/QwenPaw/issues/6853)

---

## 5. Bugs e Estabilidade

### 🛑 Bugs Críticos/Altos

| # | Severidade | Título | Link |
|---|------------|--------|------|
| #6992/#6993 | **CRÍTICA** | Vulnerabilidade de segurança: porta 0.0.0.0:8088 exposta, API sem autenticação, plugin arbitrary code execution | [Issue #6992](https://github.com/agentscope-ai/QwenPaw/issues/6992) |
| #6921 | **Alta** | Agente para após planejamento multi-step sem feedback visual | [Issue #6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) |
| #6955 | **Alta** | Crash probabilístico ao iniciar v2.0.1 | [Issue #6955](https://github.com/agentscope-ai/QwenPaw/issues/6955) |
| #7007 | **Alta** | Desktop TUI falha com `transport: Connection closed` no Windows | [Issue #7007](https://github.com/agentscope-ai/QwenPaw/issues/7007) |

### ⚠️ Bugs Médios

| # | Título | Link |
|---|--------|------|
| #6811 | OpenAI Responses ignora disable_thinking e reporta 60s como erro | [Issue #6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) |
| #6853 | prompts.py indica "dream" escrevendo em MEMORY.md mas nunca implementou | [Issue #6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) |
| #6951 | Scroll compress oculta mensagens antes da compressão no UI | [Issue #6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) |
| #6966 | Telegram /new não cria nova sessão — contexto cresce infinitamente | [Issue #6966](https://github.com/agentscope-ai/QwenPaw/issues/6966) |

### 🔧 Bugs Baixos/cosméticos

| # | Título | Link |
|---|--------|------|
| #7006 | Lista de idiomas inconsistente entre dropdown e settings | [Issue #7006](https://github.com/agentscope-ai/QwenPaw/issues/7006) |
| #7005 | Shabox causa falha no UV Run | [Issue #7005](https://github.com/agentscope-ai/QwenPaw/issues/7005) |
| #6883 | Notas em subpastas são agrupadas em data errada na página Daily | [Issue #6883](https://github.com/agentscope-ai/QwenPaw/issues/6883) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Abertas com Alto Potencial

| # | Título | Usos Potenciais | Link |
|---|--------|-----------------|------|
| #7003 | **ViBo: 97.5% menos tokens em memória** | Redução de custos em sessões longas | [Issue #7003](https://github.com/agentscope-ai/QwenPaw/issues/7003) |
| #6970 | Chat sem sidebar/cabeçalho + API key na URL | Embedding do chat em apps terceiros | [Issue #6970](https://github.com/agentscope-ai/QwenPaw/issues/6970) |
| #6980 | Preview de arquivos Word/PPT/HTML gerados no sidebar | Melhora UX de criação de documentos | [Issue #6980](https://github.com/agentscope-ai/QwenPaw/issues/6980) |
| #7002 | Proxy client para servidor | Uso server-side com controle desktop | [Issue #7002](https://github.com/agentscope-ai/QwenPaw/issues/7002) |
| #6995 | `QWENPAW_CHANNEL` env var em subprocessos | Integração com scripts externos | [Issue #6995](https://github.com/agentscope-ai/QwenPaw/issues/6995) |
| #6976 | Múltiplos diretórios de projeto por sessão | Projetos com múltiplas raízes | [PR #6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) |

### Features Recentemente Fechadas/Implementadas

| # | Título | Link |
|---|--------|------|
| #6283 | Auto-append de timestamp real no contexto | [Issue #6283](https://github.com/agentscope-ai/QwenPaw/issues/6283) |
| #6326 | Especificar versão do Node.js explicitamente | [Issue #6326](https://github.com/agentscope-ai/QwenPaw/issues/6326) |
| #6585 | Toggle para desativar contador de caracteres dinâmico | [Issue #6585](https://github.com/agentscope-ai/QwenPaw/issues/6585) |

---

## 7. Resumo de Feedback dos Usuários

### Dores Principais Identificadas

| Dor | Frequência | Severidade | Issues Relacionadas |
|-----|------------|------------|---------------------|
| **Agentes param sem feedback** | Alta | Alta | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921), [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) |
| **Antivirus mata o processo** | Média | Alta | [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) |
| **Memória/persistência não funciona** | Alta | Alta | [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853), [#6100](https://github.com/agentscope-ai/QwenPaw/issues/6100) |
| **UI freeze/crash** | Média | Alta | [#6955](https://github.com/agentscope-ai/QwenPaw/issues/6955), [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) |
| **Segurança exposta** | Baixa | Crítica | [#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992), [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) |

### Cenários de Uso Reportados

1. **Ambiente Windows Enterprise**: Usuários enfrentam falsos positivos de antivirus, especialmente em tarefas que escrevem arquivos ou executam comandos shell.
2. **Sessões Longas**: Compressão de scroll danifica histórico visível, atrapalhando revisões.
3. **Multi-canal**: Telegram não respeita `/new` para nova sessão, acumulando contexto.
4. **Embedding**: Necessidade de embutir chat em apps terceiros com autenticação customizada.

### Satisfação Geral

> ⚠️ **Atenção**: 2 issues de **segurança crítica** abertas hoje indicam necessidade urgente de hardening antes do próximo release estável.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta há >5 dias

| # | Criado | Título | Link |
|---|--------|--------|------|
| #6921 | 2026-08-12 | Agente para após planejamento multi-step | [Issue #6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) |
| #6973 | 2026-08-13 | Suporte a

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório de Projeto ZeroClaw — 2026-08-14

## 1. Panorama do Dia

O projeto ZeroClaw mantém altíssima atividade коммуникативную, com 100 items atualizados nas últimas 24h (50 issues + 50 PRs). Não houve lançamentos hoje, porém a equipe fechou 13 issues e 7 PRs, indicando progresso consistente no pipeline de desenvolvimento. A prioridade técnica recai sobre **segurança e arquitetura** — múltiplos RFCs sobre permissões, sandbox e contratos de permissão estão em revisão ativa, com 3 bugs de alta severidade já resolvidos. A comunidade demonstra forte engajamento em design de sistemas (RFCs com até 20 comentários), evidenciando maturidade no processo de decisão técnica.

---

## 2. Lançamentos

**Nenhum release realizado nas últimas 24h.**

| Indicador | Valor |
|-----------|-------|
| Releases no dia | 0 |
| Última release | Sem dados disponíveis no período |

> **Nota:** O milestone v0.9.0 está em координації ativa (Issue #7432), com fila de breaking changes e hardening de segurança em andamento.

---

## 3. Progresso do Projeto

### PRs fechadas/merged hoje (7 total)

| PR | Título | Tipo | Severidade | Tamanho | Contribuidor |
|----|--------|------|------------|---------|-------------|
| [#9980](https://github.com/zeroclaw-labs/zeroclaw/pull/9980) | ci(docker): sticky-disk layer cache for PR image builds on Blacksmith | CI | medium | — | JordanTheJet |
| [#8546](https://github.com/zeroclaw-labs/zeroclaw/pull/8546) | fix(cli): localize status fragments | Bug fix | p3 | M | ConYel |
| [#9712](https://github.com/zeroclaw-labs/zeroclaw/pull/9712) | Support weekly lettered cuts within numbered release line | Feature | p1 | — | Audacity88 |
| [#9710](https://github.com/zeroclaw-labs/zeroclaw/pull/9710) | bug(desktop): clean up temporary screenshot files on every exit | Bug fix | p3 | — | Audacity88 |
| [#9706](https://github.com/zeroclaw-labs/zeroclaw/pull/9706) | bug(provider): clean up Edge TTS temporary output on every error path | Bug fix | p3 | — | Audacity88 |
| [#9951](https://github.com/zeroclaw-labs/zeroclaw/pull/9951) | [Bug]: WeChat channel code and its 51 lib unit tests never compile/execute in CI | Bug fix | p2 | — | tidux |

**Destaque de progresso:**
- **PR #9980**: Implementa cache de camadas "sticky-disk" para builds Docker de PRs, atacando gargalo de ~78 runs em 2 semanas com 15-49 min cada — impacto direto na velocidade de CI.
- **PR #9712**: Habilita versionamento semanal lettered (e.g., `v0.8.5-a`, `v0.8.5-b`), resolvendo limitação do workflow de release.
- **PR #8546**: Internationaliza fragmentos de status do `zeroclaw status` via Fluent, melhorando suporte a localized agent aliases.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários/reação)

| # | Título | Comentários | Tipo | Área | Link |
|---|--------|-------------|------|------|------|
| #8303 | RFC: Goal mode v1 — bounded foreground Matrix work | 20 | RFC | agent, runtime | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| #7155 | RFC: Add per-execution confirmation tier for high-risk shell commands | 18 | RFC | security, tool:shell | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| #8692 | [Tracker]: Maintainer decision queue for RFCs and design issues | 13 | Tracker | architecture | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #6850 | RFC: Decouple memory lifecycle policy from storage backends | 12 | RFC | memory, gateway | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) |
| #9328 | [Bug]: verifiable-intent evaluates constraints without verifying credential chain | 12 | Bug | security, runtime | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) |
| #9487 | RFC: Runtime-owned conversation sessions and transport surface adapters | 11 | RFC | architecture, runtime | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |

### Análise dos

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*