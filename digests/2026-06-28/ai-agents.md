# Resumo diário do ecossistema de agentes de IA 2026-06-28

> Issues: 1 | PRs: 0 | Projetos cobertos: 7 | Gerado em: 2026-06-27 20:56 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-06-28

---

## 1. Panorama do Dia

O projeto NullClaw apresenta **baixa atividade nas últimas 24 horas**, sem commits, merges ou novos lançamentos registrados. Apenas **1 issue ativa** foi atualizada recentemente, continuando uma tendência de ritmo moderado de desenvolvimento. Aissue em aberto refere-se a um bug crítico de build que afeta especificamente usuários em ambiente Android/Termux (aarch64). Não há PRs pendentes de revisão, sugerindo que o ciclo de desenvolvimento está em uma fase de avaliação/retestagem.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24 horas.**

O último lançamento estável conhecido é **v2026.4.17** (referenciado na issue #868). Recomenda-se monitorar a tag de releases para eventual hotfix caso o bug #868 seja resolvido brevemente.

---

## 3. Progresso do Projeto

**Nenhuma PR merged ou fechada nas últimas 24 horas.**

Não há atividade de merge para reportar. A ausência de PRs pode indicar:
- Fim de ciclo de feature atual
- Foco em triagem de issues reportadas
- Feriado/período de baixa contribuição

---

## 4. Temas Quentes da Comunidade

### Issue em Destaque

| #868 | **[bug] zig build fails on Android/Termux (aarch64)** |
|-------|------------------------------------------------------|
| **Status** | 🟡 OPEN |
| **Autor** | NOTJuangamer10 |
| **Criado** | 2026-04-23 |
| **Última atualização** | 2026-06-27 |
| **Comentários** | 4 |
| **Reações** | 👍 0 |

**Análise do problema:**
- **Ambiente afetado:** Xiaomi Redmi Note 9, LineageOS 22.2, Termux, aarch64, Zig 0.16.0
- **Erro:** `AccessDenied` ao executar `linkat` durante `zig build -Doptimize=ReleaseSmall`
- **Impacto:** Bloqueia build para usuários móveis/termux (nicho crescente)
- **Complexidade:** Baixa (falha em syscall específico de plataforma)

---

## 5. Bugs e Estabilidade

### Bug em Aberto

| Severidade | Issue | Descrição | Impacto |
|------------|-------|-----------|---------|
| **🔴 Alta** | [#868](https://github.com/nullclaw/nullclaw/issues/868) | `AccessDenied` no linkat durante build Android/Termux | Bloqueia build em plataforma específica |

**Avaliação:** O bug #868 afeta um cenário de uso válido (desenvolvimento mobile via Termux). Aissue está aberta há ~2 meses, indicando necessidade de atenção da equipe de manutenção. O erro ocorre em nível de syscall, sugerindo necessidade de ajuste no build system ou trabalhoarounds documentados.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Nenhuma nova feature request registrada nas últimas 24 horas.**

Não há indicadores claros de direção de roadmap baseados nos dados de hoje. Issues antigas e PRs mergedas anteriores devem ser consultadas para inferir prioridades.

---

## 7. Resumo de Feedback dos Usuários

### Padrão Identificado

O usuário afetado (#868) reportou um problema de **compatibilidade de plataforma** que não foi previamente testado pela equipe:

> Build falha com `AccessDenied` ao tentar linkar arquivos temporários em ambiente Android restrito.

**Dores identificadas:**
1. ❌ Falta de suporte/testes para Android/Termux (crescente popularidade)
2. ❌ Build system depende de operações de arquivos não suportadas em todos os sistemas operacionais
3. ❌ Sem menção de workarounds na documentação

**Satisfação geral:** Não mensurável com os dados atuais (apenas 1 issue ativa, 0 reações).

---

## 8. Backlog que Merece Atenção

| Prioridade | Issue | Título | Idade | Comentários | Status |
|------------|-------|--------|-------|-------------|--------|
| 🔴 **Alta** | [#868](https://github.com/nullclaw/nullclaw/issues/868) | zig build fails on Android/Termux | ~65 dias | 4 | OPEN |

**Recomendação:** A issue #868 está aberta há aproximadamente **2 meses** sem resolução. Sugere-se:
1. @mencionar mantenedores com acesso ao build system
2. Solicitar logs adicionais do ambiente do reportador
3. Considerar workarounds documentados (ex: `zig build` viachroot/Debian)

---

## Métricas Resumidas do Dia

| Métrica | Valor |
|---------|-------|
| Issues abertas/ativas | 1 |
| Issues fechadas | 0 |
| PRs abertas | 0 |
| PRs merged/fechadas | 0 |
| Releases | 0 |
| Comentários totais | 4 |

---

**Próximos passos recomendados:**
- Priorizar triagem do bug #868 para reduzir backlog de 65+ dias
- Avaliar necessidade de matrix de testes CI/CD para plataformas alternativas (Termux/Linux ARM)
- Publicar workaround temporário na issue até fix definitivo

---

*Relatório gerado automaticamente em 2026-06-28 com base nos dados do GitHub.*

---

## Comparação entre projetos do ecossistema


# Relatório Comparativo — Ecossistema de Agentes de IA Open Source

**Data de corte:** 2026-06-28

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source demonstra **saúde bipolar** neste período. Sete dos oito projetos analisados apresentam atividade intensa (50+ PRs/issues atualizados em 24h), enquanto NullClaw permanece em estagnação com apenas 1 issue ativa e zero atividade de código. A ausência quase universal de releases formais indica que todo o ecossistema está em fase de **acumulação de mudanças para marcos significativos**, não em declínio. As principais convergências técnicas giram em torno de **segurança de plugins, compatibilidade Windows, multi-canal e extensibilidade via plugin systems**. O mercado sinaliza demanda clara por agentes que operem em ambientes desktop Windows, Telegram, Matrix e WhatsApp simultaneamente.

---

## 2. Comparação de Atividade

| Projeto | Issues Abertas (24h) | PRs Abertos (24h) | PRs Merged (24h) | Releases | Saúde | Tendência |
|---------|----------------------|-------------------|------------------|----------|-------|-----------|
| **NullClaw** | 1 | 0 | 0 | 0 | 🔴 Crítica | Estagnação |
| **NanoBot** | 25 | ~50 | 30 | 0 | 🟢 Alta | Acelerando |
| **Hermes Agent** | 50 | 45 | 5 | 0 | 🟡 Moderada | Estável-Alta |
| **PicoClaw** | 1 | 6 | 4 | 0 | 🟡 Moderada | Estável |
| **IronClaw** | 3 | 34 | 16 | 0 | 🟢 Alta | Preparando release |
| **CoPaw** | 4 | 15 | 1 | 0 | 🟡 Atenção | Bugfix sprint |
| **ZeroClaw** | 38 | ~50 | ~12 | 0 | 🟢 Muito Alta | RFC-driven |

**Observação:** Nenhum projeto publicou releases formais nas últimas 24h. A ausência de versioning formal é consistente em todo o ecossistema, sugerindo adoção de CI/CD contínuo com tags apenas em milestones maiores.

---

## 3. Posicionamento do Projeto Principal

### Líderes por Dimensão

| Dimensão | Projeto Líder | Diferencial |
|----------|---------------|-------------|
| **Volume de atividade** | ZeroClaw / Hermes Agent | 50 PRs + 50 issues simultâneas |
| **Velocidade de resolução** | NanoBot | 30 PRs merged em 24h, 6 bugs críticos fechados |
| **Estratégia técnica** | ZeroClaw | WASM-first plugins, SLSA provenance, goal mode |
| **Extensibilidade** | NanoBot | Plugin system recém-lançado, 500+ PRs históricos |
| **Qualidade/testes** | CoPaw | ~535 novos casos de teste em 24h |
| **Multi-canal maduro** | PicoClaw | Suporte Matrix, Telegram, WebUI consolidado |
| **Roadmap formalizado** | IronClaw | EPICs estruturados, QA canary lanes |

### Vantagens Competitivas Identificadas

**ZeroClaw** destaca-se pela abordagem arquitetural mais ambiciosa: refatoração completa de plugins para WASM (removendo Extism), RFCs abertos para supply chain signing, e ADR documentado para decisões técnicas. É o único projeto com **SLSA provenance attestation** no pipeline de release.

**NanoBot** apresenta a maior tração de comunidade em volume absoluto: 50 PRs + 25 issues movimentadas, plugin system implementado após demanda recorrente (#2231), e foco em segurança de exec (bypass de allowPatterns corrigido).

**IronClaw** demonstra maturidade organizacional com EPICs estruturados (#5261 para capability policy), QA infrastructure profissional (canary lanes, integration-test framework), e controle de breaking changes documentado em versions.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança de Plugin/Extensibilidade
Todos os projetos estão investindo em sistemas de plugins, indicando convergência de mercado:

| Projeto | Abordagem |
|---------|-----------|
| NanoBot | Plugin system com manifest loader (#4558) |
| ZeroClaw | WASM component-model host via wasmtime (#8368) |
| Hermes Agent | Extension surface para ACP (#53769) |
| IronClaw | Admin-shared tools com auth per-user (#5261) |
| PicoClaw | SSRF mitigation em embeds (#3143) |

### 4.2 Compatibilidade Windows
Três projetos (#NanoBot, #Hermes Agent, #PicoClaw) reportam bugs ativos específicos do Windows:

- **NanoBot:** exec usa cmd.exe/PowerShell inconsistentemente (#4544)
- **Hermes Agent:** Desktop app falha na compilação (#40187), console popups (#53810)
- **PicoClaw:** list_dir retorna "invalid argument" no Windows (#2472)

### 4.3 Multi-Canal e Integrações
Demanda ubíqua por suporte a múltiplos canais de comunicação:

- **Telegram:** NanoBot, PicoClaw, ZeroClaw
- **Matrix:** PicoClaw, CoPaw
- **WhatsApp:** ZeroClaw (LID→phone resolution bug)
- **Mattermost:** Hermes Agent
- **Slack:** IronClaw
- **Email/SMS/Voice:** ZeroClaw (novo canal Inkbox)

### 4.4 Performance e Context Management
Três projetos abordam otimização de contexto simultaneamente:

| Projeto | Solução |
|---------|---------|
| ZeroClaw | 32k context budget trim preemptivo (#5808) |
| CoPaw | Scroll Context Manager com SQLite (#5321) |
| NanoBot | Recent History caching (#4371), parallel tool calls (#4557) |

### 4.5 Observabilidade e Debugging
ZeroClaw (#6966) e NanoBot (#4531) implementam tracing de streaming simultaneamente, sugerindo maturidade do ecossistema em direção a debugging de agentes em produção.

---

## 5. Análise de Diferenciação

### 5.1 Arquitetura Técnica

| Projeto | Linguagem Principal | Runtime de Plugins | Abordagem de Context |
|---------|--------------------|--------------------|---------------------|
| NullClaw | Zig | Nativo (build system) | Não especificado |
| NanoBot | Node.js | Manifest loader | Recent History |
| Hermes Agent | Python/Go | ACP/external-process | Heartbeat isolation |
| PicoClaw | Go | Nativo (MCP) | Session isolation |
| IronClaw | Rust | Crates (cargo) | Structured Collections |
| CoPaw | Python | Agentscope | Scroll/SQLite |
| ZeroClaw | Go | **WASM (wasmtime)** | Goal mode RFC |

### 5.2 Público-Alvo Inferido

| Projeto | Público Primário | Diferenciação |
|---------|------------------|---------------|
| NullClaw | Desenvolvedores móveis/Termux | Niche Android |
| NanoBot | Usuários multi-provider | Extensibilidade CLI |
| Hermes Agent | Power users desktop | Dashboard customizável |
| PicoClaw | DevOps/automação cross-platform | E2EE Matrix, permissions |
| IronClaw | Enterprise (Railway deploys) | OAuth stability, multi-tenancy |
| CoPaw | Usuários DeepSeek/Ascend | Provedores alternativos |
| ZeroClaw | Segurança-conscious | Supply chain, SLSA |

### 5.3 Estratégia de Release

| Projeto | Estratégia | Indicador |
|---------|------------|-----------|
| ZeroClaw | Marcos documentados (v0.8.3, v0.9.0) | ADRs + RFCs |
| IronClaw | Breaking changes versionados | Semantic versioning formal |
| NanoBot | CI/CD contínuo | Releases frequentes |
| CoPaw | Test-coverage-gated | 535 testes/24h como gate |
| NullClaw | Estagnada | Sem releases desde v2026.4.17 |

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Ranking | Projeto | PRs Merged/24h | Tempo Médio de Ciclo |
|---------|---------|----------------|---------------------|
| 1 | NanoBot | 30 | <24h para bugs críticos |
| 2 | IronClaw | 16 | ~48h |
| 3 | ZeroClaw | ~12 | Variable (RFC-gated) |
| 4 | PicoClaw | 4 | ~24h |
| 5 | CoPaw | 1 | Alta variância |
| 6 | Hermes Agent | 5 | ~48-72h |
| 7 | NullClaw | 0 | Estagnado |

### 6.2 Engajamento Comunitário (Reações/Comentários)

| Projeto | Issue com Maior Engajamento | 👍 | 💬 |
|---------|----------------------------|----|----|
| Hermes Agent | #18080 — Dashboard themes | **44** | 25 |
| NanoBot | #660 — ultra-lightweight vs Node.js | 5 | 14 |
| ZeroClaw | #8177 — Supply chain signing | 0 | 10 |
| PicoClaw | #2472 — Windows path separator | 1 | 7 |

**Análise:** Hermes Agent apresenta o maior engajamento por reação, indicando base de usuários finais (não apenas desenvolvedores). ZeroClaw gera discussão técnica intensa sem necessariamente votos, sugerindo público mais técnico/especialista.

### 6.3 Quality Assurance Maturity

| Projeto | Test Coverage Sprint | CI/CD | Canary | Score |
|---------|---------------------|-------|--------|-------|
| CoPaw | ✅ 535+ casos/24h | Básico | — | 🟢 |
| IronClaw | ✅ Integration framework | Avançado | ✅ WebUI v2 | 🟢 |
| ZeroClaw | Documentado | SLSA L3 | — | 🟢 |
| NanoBot | Parcial | Avançado | — | 🟡 |
| Hermes Agent | Parcial | Avançado | — | 🟡 |
| PicoClaw | Mínimo | Básico | — | 🟡 |
| NullClaw | Nenhum | Nenhum | — | 🔴 |

---

## 7. Sinais de Tendência

### 7.1 Tendências Confirmadas por Múltiplos Projetos

| Tendência | Evidência Cruzada | Implicação |
|-----------|-------------------|------------|
| **WASM como runtime de plugins** | ZeroClaw eliminando Extism, NanoBot implementando plugin system | Ecossistema converge para sandboxing padronizado |
| **Multi-canal como baseline** | 5+ canais por projeto, novos canais (Inkbox, Matrix) | Usuários esperam agents onipresentes |
| **Segurança de supply chain** | ZeroClaw SLSA, Hermes Agent security PRs, NanoBot exec hardening | Mercado enterprise exige provenance e hardening |
| **Context management sofisticado** | SQLite, scroll managers, budget trimming | Limites de contexto estão forçando arquiteturas novas |
| **Override por sessão/componente** | NanoBot per-session model, IronClaw per-user auth | Flexibilidade de configuração é diferencial competitivo |

### 7.2 Tendências Emergent

| Tendência | Sinal Fraco | Confiança |
|-----------|-------------|-----------|
| **Goal mode / sessões autônomas delimitadas** | ZeroClaw RFC #8303, NanoBot cron silent mode | 🟡 Média |
| **Voice output / TTS** | NanoBot #4010, Hermes Agent Gradium TTS | 🟡 Média |
| **Desktop app como vetor de adoção** | Hermes Agent 4+ issues Windows desktop | 🟢 Alta |
| **Crawl4AI como provider** | NanoBot #2700, CoPaw custom providers | 🟡 Média |

### 7.3 Antipadrões Identificados

| Problema | Projetos Afetados | Risco |
|----------|-------------------|-------|
| **Builds quebrados em plataformas mobile/ARM** | NullClaw (#868), ZeroClaw (#5187 ARM Docker) | Impacta nicho crescente |
| **Regressões de conectividade post-major** | CoPaw v1.1.7→2.x | Perda de confiança |
| **Windows como cidadão de segunda** | NanoBot, Hermes Agent, PicoClaw | Bloqueia adoção enterprise |
| **Estagnação sem comunicação** | NullClaw | 65+ dias sem progresso visível |

---

## 8. Recomendações Estratégicas

### Para Desenvolvedores Escolherem Plataforma

1. **Para extensibilidade máxima:** NanoBot ou ZeroClaw — ambos com plugin systems maduros ou em desenvolvimento ativo.

2. **Para segurança enterprise:** ZeroClaw — única opção com SLSA provenance e supply chain signing RFC.

3. **Para compatibilidade cross-platform:** PicoClaw ou Hermes Agent — maior histórico de suporte Windows/Linux/mobile.

4. **Para velocidade de iteração:** NanoBot — ciclo de PR mais curto do ecossistema.

5. **Para maturidade de produto:** IronClaw — QA infrastructure, breaking changes versionados, EPICs estruturados.

### Para Maintainers

| Prioridade | Ação | Projetos Impactados |
|------------|------|---------------------|
| 🔴 Alta | Estabilizar builds Windows | NanoBot, Hermes Agent, PicoClaw |
| 🔴 Alta | Documentar breaking changes | CoPaw, IronClaw |
| 🟠 Média | Implementar testes E2E canary | NanoBot, Hermes Agent |
| 🟠 Média | RFC para context management | Todos (problema universal) |
| 🟡 Baixa | Comunicar roadmap publicamente | NullClaw (crítico para survival) |

---

*Relatório gerado em 2026-06-28. Métricas baseadas em dados públicos do GitHub. NullClaw classificado como referência negativa.*

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do Projeto NanoBot — 2026-06-28

## 1. Panorama do Dia

O NanoBot apresenta **alta atividade de desenvolvimento** no dia de hoje, com 50 PRs atualizados e 25 issues movimentadas nas últimas 24 horas. A equipe fechou **6 issues de bugs críticos** relacionadas a segurança do `exec`, integridade de sessões e streaming, demonstrando foco em estabilidade. Não houve lançamentos oficiais, mas o PR #4558 implementou o aguardado **sistema de plugins**, marcando um avanço significativo em extensibilidade. A comunidade permanece ativa em debates sobre arquitetura (heartbeat, modelos por conversa, providers) com 17 issues abertas demanding atenção.

---

## 2. Lançamentos

**Nenhuma release oficial registrada nas últimas 24h.**

O projeto não publicou novas versões desde o corte de dados. A última versão estável упоминается nos dados é **v0.2.2** (referenciada na issue #4500).

> 📌 **Nota:** Releases anteriores podem ser consultadas em [HKUDS/nanobot/releases](https://github.com/HKUDS/nanobot/releases).

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechados (30 total)

| # | PR | Autor | Tema | Impacto |
|---|-----|--------|------|---------|
| [#4558](https://github.com/HKUDS/nanobot/pull/4558) | `feat(plugins): add plugin system with manifest loader` | dajiaohuang | **Extensibilidade** | Sistema de plugins com manifesto, descoberta em `~/.nanobot/plugins/` e entry_points. Suporta tools, skills e configs MCP. Fecha #2231. |
| [#4557](https://github.com/HKUDS/nanobot/pull/4557) | `perf(runner): trust LLM parallel tool calls — batch all tools concurrently` | dajiaohuang | **Performance** | Permite chamadas paralelas de ferramentas conforme judgment do LLM, em vez de serialização. Fecha #3096. |
| [#4533](https://github.com/HKUDS/nanobot/pull/4533) | `fix: prevent session key collision on disk` | axelray-dev | **Estabilidade** | Corrige colisão entre chaves como `telegram:a_b` e `telegram:a:b` que resultavam em `telegram_a_b`. Fecha #4057. |
| [#4532](https://github.com/HKUDS/nanobot/pull/4532) | `fix: validate content block type in Anthropic assistant blocks` | axelray-dev | **Bug Fix** | Garante que blocos de conteúdo Anthropic incluem campo `type` obrigatório. Fecha #4060. |
| [#4531](https://github.com/HKUDS/nanobot/pull/4531) | `fix: include _stream_id in stream delta coalescing key` | axelray-dev | **Bug Fix** | Evita merge incorreto de streams distintos no mesmo chat. Fecha #4063. |
| [#4530](https://github.com/HKUDS/nanobot/pull/4530) | `fix: deduplicate tool call IDs in non-stream parser` | axelray-dev | **Bug Fix** | Normaliza IDs duplicados no parser não-streaming. Fecha #4057. |
| [#4523](https://github.com/HKUDS/nanobot/pull/4523) | `test: fix flaky test_keeps_n_most_recent due to identical mtimes` | primit1v0 | **Qualidade** | Resolve teste flaky em sistemas de arquivos modernos. |
| [#4562](https://github.com/HKUDS/nanobot/pull/4562) | `fix(security): validate each shell segment against exec.allowPatterns` | michaelxer | **Segurança** | Valida cada segmento de comando shell contra allowPatterns, impedindo bypass via encadeamento. |
| [#4225](https://github.com/HKUDS/nanobot/pull/4225) | `feat(cron): add silent mode and lock_recipient for scheduled jobs` | franciscomaestre | **Feature** | Adiciona `silent` mode para jobs que não devem notificar automaticamente. |
| [#4357](https://github.com/HKUDS/nanobot/pull/4357) | `feat(cron): add 'silent' jobs that run without auto-delivering a response` | franciscomaestre | **Feature** | Complementa #4225 com flag `silent` no CronPayload. |
| [#3712](https://github.com/HKUDS/nanobot/pull/3712) | `fix: handle corrupted session files where last_consolidated exceeds message count` | Lumjiel | **Estabilidade** | Trata sessões corrompidas gracefully. |

---

## 4. Temas Quentes da Comunidade

### Issues/PRs com Maior Engajamento

| # | Título | Tipo | 👍 | 💬 | Análise |
|---|--------|------|---|----|---------|
| [#660](https://github.com/HKUDS/nanobot/issues/660) | "ultra-lightweight" vs Node.js dependency | Bug/Feature | 5 | 14 | **Debate arquitetural** sobre a promessa de leveza. Usuários questionam a contradição entre branding e dependência de Node.js no Dockerfile. Requer posicionamento da equipe. |
| [#4010](https://github.com/HKUDS/nanobot/issues/4010) | text-to-speech / voice output support | Feature | 1 | 1 | Demanda por fechar o loop conversacional com saída de voz em canais que suportam nativamente. |
| [#4518](https://github.com/HKUDS/nanobot/issues/4518) | Default login-shell execution reintroduces secrets | Security | 1 | 0 | Reporte de segurança já fechado — execução em login-shell expõe secrets dos arquivos de inicialização. |

### Análise de Demandas

**Extensibilidade** domina as discussões:
- Sistema de plugins (#2231 — mergeado em #4558)
- Crawl4AI como provider alternativo (#2700)
- Chamada de agente externo (#3436)
- Override de provider por canal (#4029)

**Multi-modelo** é tema recorrente:
- Override por conversa (#4253 — PR #4555 implementa)
- Override específico para heartbeat (#4431)
- Override para Dream consolidation (#4029 — PR #4556 implementa)

---

## 5. Bugs e Estabilidade

### Bugs Abertos (por severidade estimada)

| Severidade | # | Título | Canal |
|------------|---|--------|-------|
| 🔴 **Alta** | [#4500](https://github.com/HKUDS/nanobot/issues/4500) | WebUI self-restart deixa streaming travado | WebUI |
| 🔴 **Alta** | [#4544](https://github.com/HKUDS/nanobot/issues/4544) | Windows: `exec` usa cmd.exe/PowerShell inconsistentemente | Windows |
| 🟠 **Média** | [#4511](https://github.com/HKUDS/nanobot/issues/4511) | Windows: `--background` causa inconsistência após restart | Windows |
| 🟠 **Média** | [#4513](https://github.com/HKUDS/nanobot/issues/4513) | Windows: nssm service + `/restart` causa loop ou estado incorreto | Windows |
| 🟠 **Média** | [#4082](https://github.com/HKUDS/nanobot/issues/4082) | Cron jobs reutilizam session context fixo | Cron |
| 🟡 **Baixa** | [#1899](https://github.com/HKUDS/nanobot/issues/1899) | Heartbeat isolado do main session por design | Arquitetura |

### Bugs Fechados (últimas 24h)

- ✅ [#4057](https://github.com/HKUDS/nanobot/issues/4057) — Colisão de session keys em disco
- ✅ [#4060](https://github.com/HKUDS/nanobot/issues/4060) — Blocos Anthropic sem campo `type`
- ✅ [#4063](https://github.com/HKUDS/nanobot/issues/4063) — Stream delta coalescing ignorava `_stream_id`
- ✅ [#4059](https://github.com/HKUDS/nanobot/issues/4059) — IDs duplicados no parser não-stream
- ✅ [#4521](https://github.com/HKUDS/nanobot/issues/4521) — **Security**: `exec.allowPatterns` shell-chain bypass
- ✅ [#4518](https://github.com/HKUDS/nanobot/issues/4518) — **Security**: Login-shell reintroduz secrets

### Observações de Estabilidade

> ⚠️ **Padrão identificado**: Problemas com **Windows** estão em alta (3 issues abertas). A comunidade reporta bugs com gateway background, serviços nssm e semântica inconsistente de shell. Prioridade para a equipe de manutenção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em Progresso (PRs Abertos)

| # | Feature | Autor | Status |
|---|---------|-------|--------|
| [#4564](https://github.com/HKUDS/nanobot/pull/4564) | Guard APIs contra store indisponível (cron) | yorkhellen | Aberto |
| [#4353](https://github.com/HKUDS/nanobot/pull/4353) | Transcrição: converter audio para WAV 16k mono antes de STT | franciscomaestre | Aberto |
| [#4406](https://github.com/HKUDS/nanobot/pull/4406) | Serper.dev (Google Search API) como provider de busca | franciscomaestre | Aberto |
| [#4555](https://github.com/HKUDS/nanobot/pull/4555) | Per-session model preset (model override por conversa) | dajiaohuang | Aberto |
| [#4556](https://github.com/HKUDS/nanobot/pull/4556) | Wire up `model_override` para Dream consolidation | dajiaohuang | Aberto |
| [#4371](https://github.com/HKUDS/nanobot/pull/4371) | Breakpoint antes de Recent History para cache do system prefix | sumleo | Aberto |
| [#4527](https://github.com/HKUDS/nanobot/pull/4527) | Ferramenta `ask_clarification` integrada | ZhouJ-sh | Aberto |
| [#4554](https://github.com/HKUDS/nanobot/pull/4554) | Write guard para bloquear skills duplicados no Dream | michaelxer | Aberto |
| [#4534](https://github.com/HKUDS/nanobot/pull/4534) | Verification gates e provider recovery no agent | Re-bin | Aberto |

### Features Solicitadas (Issues Abertas)

| # | Feature | Demanda |
|---|---------|---------|
| [#2231](https://github.com/HKUDS/nanobot/issues/2231) | Sistema de plugins (estilo Copilot CLI/Claude Code) | **✅ Implementada em #4558** |
| [#4253](https://github.com/HKUDS/nanobot/issues/4253) | Override de modelo por conversa | **🔄 Em PR #4555** |
| [#4419](https://github.com/HKUDS/nanobot/issues/4419) | Automatic reasoning effort escalation | Discussão ativa |
| [#2700](https://github.com/HKUDS/nanobot/issues/2700) | Crawl4AI como provider de fetch web | Usuário único |
| [#4010](https://github.com/HKUDS/nanobot/issues/4010) | Text-to-speech / voice output | 1 👍 |
| [#4431](https://github.com/HKUDS/nanobot/issues/4431) | Heartbeat-specific model override | Proposta concreta |
| [#4490](https://github.com/HKUDS/nanobot/issues/4490) | API auth obrigatória quando servindo em interfaces externas | Segurança |
| [#4418](https://github.com/HKUDS/nanobot/issues/4418) | Heartbeat delivery no canal original | Workflow |

### Sinais de Roadmap

1. **Extensibilidade**: Plugin system (mergeado) + Crawl4AI + MCP configs indicam direção de ecossistema aberto.
2. **Multi-provider**: Override por canal, sessão e componente (Dream, Heartbeat) sugere unificação de configuração.
3. **Confiabilidade**: Verification gates (#4534) e provider recovery apontam para uso em produção.
4. **Performance**: Recent History caching (#4371) e parallel tool execution (#4557) indicam otimização de contexto.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Feedback | Evidência |
|-----------|----------|-----------|
| **Confiança na marca** | Contradição entre "ultra-lightweight" e dependência Node.js | [#660](https://github.com/HKUDS/nanobot/issues/660) — 5 👍, 14 💬 |
| **Privacidade** | Necessidade de alternar entre modelo rápido (openrouter) e privado (local llama.cpp) | [#4253](https://github.com/HKUDS/nanobot/issues/4253) |
| **Workflow de heartbeat** | Entrega de resultados no canal errado; isolamento de sessão indesejado | [#4418](https://github.com/HKUDS/nanobot/issues/4418), [#1899](https://github.com/HKUDS/nanobot/issues/1899) |
| **Windows** | Experiência instável com gateway, serviços e shell | [#4511](https://github.com/HKUDS/nanobot/issues/4511), [#4513](https://github.com/HKUDS/nanobot/issues/4513), [#4544](https://github.com/HKUDS/nanobot/issues/4544) |
| **Segurança do exec** | Preocupação com bypass de allowPatterns e exposição de secrets | [#4521](https://github.com/HKUDS/nanobot/issues/4521), [#4518](https://github.com/HKUDS/nanobot/issues/4518) — ambos fechados |

### Cenários de Uso Observados

- **Uso profissional multi-modelo**: Alternar entre provedores externos e execução local.
- **Automação com cron**: Jobs silent para monitoramento que só reportam anomalias.
- **Integração com Claude Code**: Sessoes remotas via Claude Mobile (feature #3024).
- **Voice em canais nativos**: Busca por output de voz em plataformas que suportam.

### Satisfação/Insatisfação

| Aspecto | Sentimento | Indicador |
|---------|------------|-----------|
| **Resposta da equipe** | Positivo | PRs merges rápidos, bugs críticos fechados em <48h |
| **Extensibilidade** | Positivo | Plugin system реализован após muita demanda |
| **Documentação/UX** | Neutro/Negativo | Debates sobre mensagens de erro e consistência |
| **Suporte Windows** | Negativo | 3+ bugs ativos específicos da plataforma |

---

## 8. Backlog que Merece Atenção

### Issues sem resposta significativa (>7 dias sem atividade)

| # | Título | Criado | Atualizado | 💬 | Prioridade |
|---|--------|--------|------------|---|------------|
| [#3436](https://github.com/HKUDS/nanobot/issues/3436) | Call external agent (opencode/codex) | 2026-04-25 | 2026-06-26 | 2 | Média |
| [#2700](https://github.com/HKUDS/nanobot/issues/2700) | Crawl4AI support | 2026-04-01 | 2026

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>


# Relatório do Projeto Hermes Agent
## NousResearch/hermes-agent — 2026-06-28

---

## 1. Panorama do Dia

O Hermes Agent mantém uma atividade intensa com **50 issues e 50 PRs atualizados nas últimas 24h**, evidenciando uma comunidade ativa e um ciclo de desenvolvimento saudável. Não houve lançamentos hoje, mas o volume de PRs abertos (45) sugere que a codebase está em plena evolução. As discussões mais ativas concentram-se em **estabilidade do desktop no Windows**, **segurança em gateways** e **extensibilidade de plugins**, refletindo a maturidade do projeto em suas funcionalidades core e a necessidade de refinamentos em experiência do usuário e compatibilidade multi-plataforma.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em fase de desenvolvimento ativo semtag de versão publicada recentemente. A ausência de releases pode indicar que a equipe está acumulando mudanças para um próximo tag significativo ou que o ciclo de release está em transição.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged Hoje

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| #52919 | [Bug]: Nix build broken | Corrigido build quebrado por atualização de package-lock.json | 🔧 Infra |
| #20586 | [Bug]: cron jobs fail with provider.sort | Corrigido erro de ordenação de provider em cron jobs com OpenRouter | 🐛 Stability |
| #53778 | fix(desktop): don't purge Electron cache after late build failure | Salvage de PR anterior; melhora recuperação de downloads corrompidos do Electron | 🖥️ Desktop |

### PRs Abertos Relevantes (Alta Atividade ou Prioridade)

- **#52351** [security] — **Block base_url overrides that exfiltrate provider credentials** (P1) — Evita que cronjobs injetados enviem credenciais de API para endpoints controlados por atacantes. ⛔ Segurança crítica.

- **#53334** fix(gateway): sanitize error text in compression-failure — Sanitiza strings de erro brutas em notificações de compressão, impedindo vazamento de dados sensíveis em mensagens de gateway.

- **#53810** fix(windows): stop terminal-window popups from background spawns — Elimina completamente flashes de janelas cmd/conhost em background spawns no Windows Desktop/Gateway.

- **#49684** fix(tools): preserve canonical Windows location env var names — Corrige comportamento estranho em MCP subprocessos stdio no Windows causado pela normalização de chaves de variáveis de ambiente pelo CPython.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| # | Título | 👍 | 💬 | Categoria | Análise |
|---|--------|----|----|-----------|---------|
| **#18080** | Improved Themes for Dashboard | 44 | 25 | Feature | **Maior demanda do projeto.** Usuários reclamam que os temas existentes (Midnight, Ember, Mono, Cyberpunk, Rose) usam fontes serif pequenas com pouco contraste, dificultando a leitura. Solicitam redesign de tipografia e esquema de cores. |
| **#41222** | Integrate Kanban Board into Desktop App | 7 | 5 | Feature | Usuários querem integração nativa do Kanban board no desktop app para eliminar fricção em workflows multi-agente. |
| **#37876** | Support local and remote Hermes backends simultaneously | 5 | 6 | Feature | Atualmente o Desktop Gateway é mutuamente exclusivo entre modo local e remoto; usuários pedem suporte simultâneo. |
| **#35166** | Installation stuck at "Installing Playwright Chromium" | 5 | 6 | Bug (P1) | Instalador congela no Kubuntu 26.04 durante download de dependências do Playwright; Ctrl+C não interrompe. |
| **#40347** | Russian locale for Desktop app | 0 | 5 | Feature | Comunidade russófona solicita tradução completa do desktop app. |

### Tendências Identificadas

1. **Desktop App como Prioridade:** Múltiplas issues (#40187, #53016, #53273, #53810, #43334) focam em estabilidade e UX do desktop no Windows, indicando que este é o vetor de adoção principal.

2. **Segurança em Gateway:** Tanto #40170 (vazamento de contexto de memória) quanto #52351 (exfiltração de credenciais em cronjobs) mostram atenção da comunidade à superfície de ataque em integrações externas.

3. **Multi-plataforma e i18n:** Demanda clara por suporte a russo (#40347), múltiplos backends (#37876), e 15 idiomas (#38846).

---

## 5. Bugs e Estabilidade

### Por Severidade

#### P1 — Críticos (Ação Imediata)

| # | Título | Componente | Descrição |
|---|--------|------------|-----------|
| **#40187** | Windows desktop app fails to compile | Desktop | Falha na compilação do Electron app durante `hermes update` ou `hermes desktop` na etapa final. |
| **#40170** | Customer-Facing Honcho Recall Leak | Gateway, Memory | Bloco `<memory-context>` injetado em user-message layer vaza contexto de memória em chamadas de API externas. |
| **#35166** | Installation stuck at Playwright Chromium | CLI | Instalador congela durante `playwright install --with-deps chromium`. |
| **#52919** | Nix build broken by package-lock.json | Nix | Build Nix quebrado após commit remover dependências que eram baixadas em build time. |

#### P2 — Altos (Alta Prioridade)

| # | Título | Componente |
|---|--------|------------|
| **#53016** | Windows desktop app flashes cmd console window | Desktop, Windows |
| **#53273** | CREATE_NO_WINDOW insufficient — cmd windows flash | Terminal, Windows |
| **#40416** | Context compaction visually deletes messages (UX terrible) | Gateway, Telegram |
| **#18279** | Mattermost root threads share one session | Gateway, Mattermost |
| **#51089** | Session resume can lose tool-loop/compression state | Agent |
| **#53676** | MCP HTTP transport: wigai server fails to initialize | MCP, Windows |
| **#53334** | Error text not sanitized in compression notifications | Gateway (fix em PR #53334) |

#### P3 — Medios

| # | Título | Componente |
|---|--------|------------|
| **#37759** | honcho_conclude silently fails on self-hosted | Plugins, Memory |
| **#12938** | Terminal crontab output inconsistent | CLI, Terminal |

### Análise de Estabilidade

**Windows Desktop é o principal ponto de dor.** Quatro issues P1/P2 (#40187, #53016, #53273, #53676) afetam especificamente usuários Windows, com problemas de console popups, compilação e transporte MCP. A equipe parece estar tratando ativamente (PRs #53810, #49684 abertos).

**Segurança:** Dois bugs P1 de segurança (#40170, #52351) demonstram atenção da comunidade à superfície de ataque em integrações externas. O PR #52351 já está aberto para correção.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Abertas (P3, Maior Engajamento)

| # | Título | Componente | Potencial Impacto |
|---|--------|------------|-------------------|
| **#18080** | Improved Themes for Dashboard | Dashboard | **Alto** — 44 👍, maior engajamento do dia |
| **#37876** | Support local/remote backends simultaneously | Desktop | **Alto** — Simplifica configuração de power users |
| **#25833** | Self-created skills lack mechanism-level guarantees | Agent, Skills | **Médio** — Melhora confiabilidade de skills auto-geradas |
| **#18591** | Per-task model override for delegate_task | Agent | **Médio** — Flexibiliza uso de provedores com rate limits |
| **#44075** | Semantic Search (BM25 + Vector) | Agent | **Médio** — Melhora drasticamente busca em histórico |
| **#12568** | Memory tool needs read action | Memory | **Médio** — Melhora debugabilidade e gestão de memória |

### Providers e Integrações

| # | Título | Status | Notas |
|---|--------|--------|-------|
| **#17382** | Gradium TTS provider | PR aberto | Novo provedor TTS multilíngue com Opus para Telegram |
| **#38009** | Nebius Token Factory provider | PR aberto | Novo provedor com suporte a reasoning models |
| **#53769** | Extension surface for ACP/external-process backends | Feature request | Fecha gap para backends custom via ACP |
| **#53821** | WireGuard SOCKS VPN exit routing skill | PR aberto | Habilita egress via VPN em skills |

### Sinais de Roadmap

1. **Desktop-first:** Integração Kanban (#41222), múltiplos backends (#37876), i18n 15 idiomas (#38846), mobile shell (#52673) indicam foco em experiência desktop/mobile.

2. **Extensibilidade:** Superfície ACP (#53769), hooks de compressão (#53806), skill de VPN (#53821) mostram direção para plataforma extensível.

3. **Trust & Safety:** Verificação de claims (#26742, #28289), audit mechanism, semântica de busca melhorada (#44075) sugerem foco em confiabilidade.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Dor | Evidência | Severidade |
|-----|-----------|------------|
| **Desktop Windows instável** | Issues #40187, #53016, #53273, #53810 | 🔴 Alta |
| **UX de temas do dashboard** | Issue #18080 (44 👍) — "non-standard", "serif fonts small and light with little contrast" | 🔴 Alta |
| **Vazamento de dados em integrações** | Issue #40170 — contexto de memória em APIs externas | 🔴 Crítica |
| **Instalação trava em Linux** | Issue #35166 — Playwright blocking install | 🟠 Média |
| **Contexto compaction destrói mensagens visualmente** | Issue #40416 — "messages simply vanish" | 🟠 Média |
| **Nix build quebrado** | Issue #52919 — commit ff81365 removeu deps | 🟠 Média |
| **Mattermost mobile não envia comandos** | Issue #25184 — `/` reservado pela plataforma | 🟡 Baixa |
| **Cron jobs falham com OpenRouter** | Issue #20586 — provider.sort error | 🟡 Baixa (já fechado) |

### Cenários de Uso Emergentes

1. **Multi-provider workflows:** Usuários precisam de per-task model override (#18591) e misturar provedores com rate limits distintos.
2. **Self-hosted Honcho:** Usuários com instâncias self-hosted enfrentam falhas silenciosas em `honcho_conclude` (#37759).
3. **Enterprise deployments:** Feature #52351 (security cron) indica uso em cenários onde segurança de credenciais é mandatória.
4. **Mobile adoption:** PR #52673 (native mobile shell) e issue #25184 (Mattermost mobile) mostram demanda mobile crescente.

### Satisfação Geral

**Mista com tendência positiva.** A alta atividade de issues e PRs indica engajamento, mas a concentração de bugs Windows e UX issues sugere que a experiência de usuário em desktop precisa de atenção imediata. A ausência de releases hoje pode frustrar usuários aguardando correções prometidas.

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta ou Inativas

| # | Título | Criado | Atualizado | Status | Ação Recomendada |
|---|--------|--------|------------|--------|------------------|
| **#18591** | Per-task model override for delegate_task | 2026-05-02 | 2026-06-27 | Aberta | Priorizar — afeta power users com rate limits |
| **#12688** | Configurable command prefix for messaging gateway | 2026-04-19 | 2026-06-27 | Aberta | Priorizar — bloqueia adoção em Matrix/Mattermost |
| **#26742** | First-Class Claim Verification & Audit | 2026-05-16 | 2026-06-27 | Aberta | Considerar para roadmap — demanda de enterprise |
| **#12568** | Memory tool needs read action | 2026-04-19 | 2026-06-27 | Aberta | Baixa prioridade mas fácil win |
| **#31061** | Ambient/Blend-In Agent | 2026-05-23 | 2026-06-27 | Aberta | Nice-to-have para Discord |
| **#53769** | Extension surface for ACP backends | 2026-06-27 | 2026-06-27 | Recém-criada | Avaliar para próximo milestone |

### Issues P1/P2 Antigas Sem Progresso Visível

| # | Título | Criado | Dias Inativo | Prioridade |
|---|--------|--------|--------------|------------|
| **#40170** | Honcho Recall Leak (Security) | 2026-06-05 | 22 dias | P1 — CRÍTICO |
| **#40187** | Windows compile failure | 2026-06-06 | 21 dias | P1 |
| **#35166** | Playwright install stuck | 2026-05-30 | 28 dias | P1 |
| **#40416** | Context compaction UX | 2026-06-06 | 21 dias | P2 |

### Recomendações

1. **Triage imediato:** #40170 (vazamento de memória) e #40187 (compilação Windows) requerem atenção urgente.
2. **Windows Desktop stabilization sprint:** Concentrar esforços em resolver a pilha de bugs Windows (4+ issues P1/P2).
3. **Dashboard redesign:** #18080 com 44 👍 merece planejamento de roadmap para melhoria de UX.
4. **Security hardening:** As duas issues de segurança (#40170, #52351) devem ser priorizadas antes do próximo release.

---

## Métricas Resumidas do Dia

| Indicador | Valor |
|-----------|-------|
| Issues ativas/novas | 50 (43 abertas, 7 fechadas) |
| PRs ativos | 50 (45 abertos, 5 merged/fechados) |
| Releases | 0 |
| Bugs P1 abertos | 5 |
| Bugs P2 abertos | 10+ |
| Features com >5 👍 | 3 (#18080, #41222, #37876) |
| PRs de segurança | 2 (#52351, #53334) |

---

*Relatório gerado automaticamente com base nos dados do GitHub de NousResearch/hermes-agent em 2026-06-28.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-06-28

## 1. Panorama do dia

O ecossistema PicoClaw apresenta **atividade intensa** neste período, com 10 PRs e 3 issues atualizadas nas últimas 24h, indicando um ritmo de desenvolvimento saudável. Das 4 PRs fechadas/merged, destacam-se melhorias no sistema de colaboração de agentes e correções de segurança SSRF, demonstrando atenção tanto a funcionalidades estratégicas quanto à robustez do sistema. Não houve lançamentos de novas versões, e a Issue ativa (#3194) sobre criptografia Matrix sinaliza um problema crítico que requer atenção imediata da equipe de manutenção.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

O projeto encontra-se em um ciclo de desenvolvimento ativo sem tags formais de release publicadas neste período. Isso sugere que as mudanças estão em fase de maturação no branch principal ou aguardando integração para um próximo versionamento.

---

## 3. Progresso do Projeto

### PRs fechadas/merged (4):

| # | Título | Impacto |
|---|--------|---------|
| [#3048](https://github.com/sipeed/picoclaw/pull/3048) | fix(mcp): reject unknown pre-positional flags in add | **Crítico** — Corrige parsing de argumentos no `mcp add` quando flags globais são passadas antes de subcommands. Resolve ambiguidade com `DisableFlagParsing: true`. |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | Feat/agent collaboration | **Estratégico** — Introduce "Agent Collaboration Bus" com mailboxes por agente, threads com histórico isolado, envelopes de mensagens estruturados e controle de permissões. Marca avanço significativo na arquitetura multi-agente. |
| [#3181](https://github.com/sipeed/picoclaw/pull/3181) | fix(gateway): guard startup info assertions | **Estabilidade** — Protege extração de status de startup contra seções ausentes ou malformadas, garantindo output estável no console/log. |
| [#3143](https://github.com/sipeed/picoclaw/pull/3143) | fix(web): block private IPv4 embeds in ISATAP literals | **Segurança** — Mitiga bypass SSRF (#3074) ensinando o classificador IP a reconhecer literais IPv6 ISATAP que embutem endereços IPv4 privados/loopback. |

### Destaque estratégico:
O PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) representa a evolução mais significativa do período, introduzindo comunicação durável entre agentes com isolamento de sessão e controle de permissões — pilar fundamental para cenários de automação complexa.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento:

**[#2472](https://github.com/sipeed/picoclaw/issues/2472) — `list_dir` retorna "invalid argument" no Windows** *(7 comentários, 1 reação)*
- **Severidade:** Bug
- **Domínio:** Tool / compatibilidade cross-platform
- **Análise:** Problema de longa data (criado em 2026-04-10) onde barras invertidas Windows (`\`) são passadas diretamente para `fs.FS`/`os.Root` do Go, que exige barras normais (`/`). Impacta todos os usuários Windows que utilizam operações de sistema de arquivos.
- **Estado:** Fechado — indica que a correção está em andamento ou já foi integrada.

**[#3114](https://github.com/sipeed/picoclaw/issues/3114) — Controle de permissões por tipo de conversa no Telegram** *(2 comentários, 1 reação)*
- **Tipo:** Feature Request
- **Demanda:** Implementar "security boundary" diferenciando私聊 (DM) → permissões completas, 群组/频道 (Grupos/Canais) → operações restritas.
- **Relevância:** Reflete necessidade real de segurança em ambientes multi-usuário, especialmente quando bots são adicionados a grupos onde membros podem acionar comandos perigosos como `exec`.

### PRs em destaque:

**[#3193](https://github.com/sipeed/picoclaw/pull/3193) — Added simplex channel type** *(Novo, 0 comentários)*
- Adiciona tipo de canal "simplex", possivelmente para comunicação unidirecional.

---

## 5. Bugs e Estabilidade

### Issue ativa de alta prioridade:

**[#3194](https://github.com/sipeed/picoclaw/issues/3194) — "Received encrypted message but crypto is not enabled"** 🔴
- **Ambiente:** picoclaw v0.2.4-9-ged618e1, Go 1.25.8
- **Canal:** Matrix
- **Severidade:** **Alta** — Usuário reportando falha em receber mensagens criptografadas no protocolo Matrix, indicando que a implementação de E2EE pode não estar funcionando corretamente.
- **Ação recomendada:** Priorizar investigação no handler de mensagens Matrix e fluxo de inicialização de crypto.

### Bugs resolvidos (2 fechadas):

1. **[#2472](https://github.com/sipeed/picoclaw/issues/2472)** — Path separator no Windows (corrigido)
2. **[#3048](https://github.com/sipeed/picoclaw/pull/3048)** — Flags mal interpretadas no mcp add (corrigido via PR)

### Riscos de regressão identificados:

- O PR [#3180](https://github.com/sipeed/picoclaw/pull/3180) "fix(cli): skip tool calls with invalid arguments" aborda problema onde argumentos JSON malformados em tool calls do CLI poderiam derrubar整个 resposta. Recomenda-se atenção no merge.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features em revisão:

**[#3193](https://github.com/sipeed/picoclaw/pull/3193)** — Simplex channel type
- Adição de modo de comunicação unidirecional, possivelmente para canais de broadcast ou feedback.

**[#3114](https://github.com/sipeed/picoclaw/issues/3114)** — Permissão por tipo de conversa Telegram
- Demanda de granularidade de permissões baseada em contexto (DM vs. grupo vs. canal).
- **Sinal de roadmap:** O projeto parece estar evoluindo para suportar casos de uso multi-tenant mais sofisticados.

### Melhorias incrementais abertas:

- **[#3190](https://github.com/sipeed/picoclaw/pull/3190)** — Sync de chaves de tradução (bn-in, cs)
- **[#3191](https://github.com/sipeed/picoclaw/pull/3191)** — Limpeza de entrada duplicada em .gitignore
- **[#3192](https://github.com/sipeed/picoclaw/pull/3192)** — Bump imagens Alpine de 3.21 para 3.23

### Sinais de maturacao do projeto:
- Atividades de i18n e manutenção de build indicam profissionalização do ciclo de releases.
- Funcionalidades de colaboração multi-agente (#2937) posicionam o projeto além de um "bot simples".

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas:

| Dor | Contexto | Impacto |
|-----|----------|---------|
| Falha em mensagens criptografadas Matrix | Usuários que dependem de E2EE | **Crítico** — Afeta privacidade e caso de uso profissional |
| Operações de arquivo quebradas no Windows | Usuários Windows com list_dir/write_file | **Alto** — Compatibilidade cross-platform |
| Permissões demasiado abertas em grupos Telegram | Deploys em ambientes multi-usuário | **Médio** — Risco de segurança |

### Cenários de uso inferidos:

1. **Desenvolvimento cross-platform**: Usuários esperam usar PicoClaw em Windows, Linux e possivelmente macOS sem ajustes manuais.
2. **Comunicação segura**: Integração com Matrix indica uso em contextos profissionais/comunitários que exigem criptografia E2E.
3. **Automação colaborativa**: A feature de Agent Collaboration (#2937) sugere adoção em workflows complexos de automação.

### Satisfação geral:
- Atividade reciente (10 PRs/24h) indica comunidade ativa.
- Issues antigas (#2472, #3114) foram abordadas, demonstrando responsividade.
- Falta de releases pode frustrar usuários que dependem de versões estáveis.

---

## 8. Backlog que Merece Atenção

### Issues sem resposta ou stale:

| # | Título | Criado | Estado | Observação |
|---|--------|--------|--------|------------|
| [#2472](https://github.com/sipeed/picoclaw/issues/2472) | Bug path Windows | 2026-04-10 | Closed | Resolveu? Verificar se correção foi mergeada |
| [#3114](https://github.com/sipeed/picoclaw/issues/3114) | Permissões Telegram | 2026-06-12 | Closed | Necessita validação de implementação |

### Issues ativas sem comentários:

**[#3194](https://github.com/sipeed/picoclaw/issues/3194)** — Bug Matrix crypto *(0 comentários)*
- **Recomendação:** Atribuir a um mantenedor do canal Matrix para diagnóstico urgente.

### PRs abertas aguardando review:

| # | Título | Prioridade |
|---|--------|------------|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Simplex channel type | Média |
| [#3189](https://github.com/sipeed/picoclaw/pull/3189) | fix(line): resp.Body.Close() | Baixa |
| [#3192](https://github.com/sipeed/picoclaw/pull/3192) | Bump alpine 3.23 | Baixa |
| [#3191](https://github.com/sipeed/picoclaw/pull/3191) | .gitignore cleanup | Trivial |
| [#3190](https://github.com/sipeed/picoclaw/pull/3190) | Sync locale keys | Baixa |
| [#3180](https://github.com/sipeed/picoclaw/pull/3180) | fix(cli): invalid arguments | **Alta** |

---

## Métricas Consolidada do Período

| Indicador | Valor |
|-----------|-------|
| Issues ativas | 1 |
| Issues fechadas | 2 |
| PRs abertas | 6 |
| PRs fechadas/merged | 4 |
| Releases | 0 |
| Bugs críticos | 1 (Matrix crypto) |
| Features merged | 1 (Agent Collaboration) |
| Correções de segurança | 1 (SSRF/ISATAP) |

**Saúde geral do projeto:** 🟡 **Moderada** — Atividade alta com хорошая taxa de resolução, mas bug crítico de crypto Matrix requer atenção imediata. A feature de Agent Collaboration demonstra ambição estratégica positiva.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-06-28

---

## 1. Panorama do Dia

O projeto IronClaw demonstra **atividade intensa** com 50 PRs atualizados nas últimas 24h, indicando sprints de desenvolvimento acelerados. A plataforma está em fase de maturação do stack Reborn, com foco em qualidade (QA canary lanes, integração contínua) e correções de estabilidade OAuth. Três issues foram fechadas com sucesso, incluindo dois bugs críticos de autenticação Google/Notion que afetavam deployments Railway. A ausência de releases formais hoje contrasta com o alto volume de PRs emdraft, sugerindo que a equipe está preparando uma versão significativa em breve.

---

## 2. Lançamentos

**Nenhuma release formal publicada nas últimas 24h.**

Contudo, o PR [#5311](https://github.com/nearai/ironclaw/pull/5311) sinaliza准备uma release iminente com mudanças em múltiplos crates:

| Crate | Versão Anterior | Nova Versão | Tipo de Mudança |
|-------|----------------|-------------|-----------------|
| `ironclaw_common` | 0.4.2 | 0.5.0 | ⚠️ Breaking changes |
| `ironclaw_skills` | 0.3.0 | 0.4.0 | ⚠️ Breaking changes |
| `ironclaw` | 0.24.0 | 0.29.1 | Minor + patch |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | Compatível |
| `ironclaw_skill_learning` | 0.1.0 | 0.1.1 | Patch |

**Nota:** AsQuebras em `ironclaw_common` e `ironclaw_skills` podem exigir atualização de dependências em projetos consumidores.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Hoje (destaques)

| PR | Escopo | Impacto |
|----|--------|---------|
| [#5379](https://github.com/nearai/ironclaw/pull/5379) | OAuth Google token refresh | **Crítico** — corrige re-autenticação forçada a cada 1h em `hosted-single-tenant`/`local-dev` |
| [#5363](https://github.com/nearai/ironclaw/pull/5363) | Reborn Calendar | Melhora descoberta de eventos com `singleEvents=true` e `maxResults=25` default |
| [#1937](https://github.com/nearai/ironclaw/pull/1937) | Structured Collections | Adiciona ferramentas CRUD tipadas para workspaces de agentes |
| [#2196](https://github.com/nearai/ironclaw/pull/2196) | LLM CleaningProvider | Remove tags `<think>`/`<thinking>` e trunca tool-calls incompletos |
| [#2294](https://github.com/nearai/ironclaw/pull/2294) | conversation_id metadata | Permite roteamento por conversa em backends stateful |
| [#5297](https://github.com/nearai/ironclaw/pull/5297) | Gate projection stale rows | Corrige inconsistências no stream WebUI |
| [#3976](https://github.com/nearai/ironclaw/pull/3976) | Slack file attachments | Restaura uploads de imagens/PDFs em mensagens inbound |
| [#3926](https://github.com/nearai/ironclaw/pull/3926) | NoExposureGuard hardening | Reforça composição de guardas de egress HTTP |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Atenção (comentários + thumbs-up)

**#5261** — [EPIC: Reborn capability policy: admin-shared tools & skills with per-user auth](https://github.com/nearai/ironclaw/issues/5261)  
- **Status:** Aberta | **Criada:** 2026-06-25  
- **Demanda:** Epic central para controle granular de ferramentas compartilhadas por admins com autenticação per-user no stack Reborn.
- **Sinal estratégico:** Indica priorização de multi-tenancy e governança de permissões.

**#5368** — [Wire non-Slack channel personal pairing end-to-end](https://github.com/nearai/ironclaw/issues/5368)  
- **Status:** Aberta | **Autor:** BenKurrek  
- **Demanda:** Generalizar channel onboarding além de Slack, para suporte completo de outros canais.
- **Sinal estratégico:** Expansão de canais suportados além da integração Slack atual.

### PRs Draft com Maior Atividade

**#5380** — [expand Reborn WebUIv2 QA matrix coverage](https://github.com/nearai/ironclaw/pull/5380)  
- Scope: `ci`, `docs` | Risk: medium | Size: XL  
- Foco em matriz de testes herméticos derivada de spreadsheet.

**#5381** — [Reborn integration-test framework (slices 1–2)](https://github.com/nearai/ironclaw/pull/5381)  
- Scope: `docs` | Risk: low | Size: M  
- Framework de testes de integração com stack Reborn real (LLM provider, tool-call, filesystem).

**#5354** — [Add Reborn WebUI v2 live QA canary](https://github.com/nearai/ironclaw/pull/5354)  
- Scope: `ci`, `docs` | Risk: medium | Size: XL  
- Canary lane com Playwright para validação E2E contínua.

---

## 5. Bugs e Estabilidade

### 🔴 Alta Severidade

| Issue | Título | Status | Referência |
|-------|--------|--------|------------|
| #4108 | Nightly E2E failed | **Aberta** | [Link](https://github.com/nearai/ironclaw/issues/4108) — Workflow falhou no commit `5298504a14be8cd20feb88f73b8e4a86f74c516c` |

### ✅ Resolvidos Hoje

| Issue | Título | PR Fix |
|-------|--------|--------|
| #5378 | Google OAuth token refresh fails (forced re-auth ~1h) | [#5379](https://github.com/nearai/ironclaw/pull/5379) |
| #4928 | Notion OAuth localhost callback in Railway | Fechada sem PR linked — wait for resolution |

### ⚠️ Regressões em Monitoramento

| PR | Área | Risco |
|----|------|-------|
| [#5271](https://github.com/nearai/ironclaw/pull/5271) | 47 atualizações de dependências (`refinery`, `rustls`, etc.) | Medium (size XL, scope deps) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| Issue | Feature | Prioridade Implícita | Link |
|-------|---------|---------------------|------|
| #5364 | "Always allow eligible tools" como default ON | Alta — UX onboarding | [Link](https://github.com/nearai/ironclaw/issues/5364) ✅ Fechada |
| #5261 | Admin-shared tools com auth per-user (EPIC) | Estratégica | [Link](https://github.com/nearai/ironclaw/issues/5261) |
| #5368 | Suporte non-Slack channel pairing | Expansão plataforma | [Link](https://github.com/nearai/ironclaw/issues/5368) |

### Sinais de Roadmap Observados

1. **Maturidade do Reborn Stack:** Investimento pesado em QA infrastructure (#5380, #5381, #5354) e integração de testes sugere proximidade de GA.
2. **Resiliência OAuth:** Correções consecutivas (#5379, #5363) indicam foco em estabilidade de integrações de terceiros.
3. **Performance LLM:** Adição de `CleaningProvider` e `conversation_id` metadata sugere otimização para backends stateful.
4. **Collections & Storage:** PR #1937 (Structured Collections) adiciona CRUD tipado — demanda recorrente de agentes em produção.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Contexto | Status |
|-----|----------|--------|
| Re-autenticação Google forçada a cada 1h | Railway `hosted-single-tenant` / `local-dev` | ✅ Corrigida (#5379) |
| Callback OAuth Notion aponta para localhost | Railway deployment | 🔄 Pendente |
| Retry button no chat não funciona | Reborn WebUI v2 | 🔄 Corrigido (#5365) |
| Falhas em E2E nightly | Pipeline CI/CD | ⚠️ Investigando |

### Cenários de Uso Emergentes

- **Deploy Railway:** Usuários enfrentam особенности de configuração OAuth em ambientes hospedados vs. local.
- **Múltiplos canais:** Demanda por onboarding de canais além de Slack (#5368).
- **Experiência inicial:** new users sofrem com prompts de aprovação per-call (#5364).

### Indicadores de Satisfação

- Thumbs-up em issues: **0** (nenhum item com votes expressivos) — possível baixa visibilidade de feedback público ou uso interno predominante.

---

## 8. Backlog que Merece Atenção

### Issues Antigas sem Progresso Recente

| Issue | Idade | Título | Prioridade |
|-------|-------|--------|------------|
| #4315 | ~25 dias | Fix engine v2 vision attachments | Média-Alta |
| #3885 | ~36 dias | feat(product-workflow): add read-path guard | Média |
| #3834 | ~38 dias | test: canary for /benchmark dispatcher | Baixa |

### PRs Abertos com Tamanho/Risco Elevado

| PR | Size | Risk | Idade Est. | Bloqueia |
|----|------|------|------------|----------|
| [#5271](https://github.com/nearai/ironclaw/pull/5271) | XL | Medium | ~3 dias | Atualizações de deps |
| [#4315](https://github.com/nearai/ironclaw/pull/4315) | XL | Medium | ~25 dias | Funcionalidade vision |
| [#5354](https://github.com/nearai/ironclaw/pull/5354) | XL | Medium | ~2 dias | QA canary |

### EPICs em Andamento

| EPIC | Escopo | Status |
|------|--------|--------|
| #5261 | Reborn capability policy (admin tools + per-user auth) | Ativo |

---

## Métricas Consolidada do Período

| Métrica | Valor |
|---------|-------|
| Issues ativas | 3 |
| Issues fechadas | 3 |
| PRs abertos | 34 |
| PRs merged/fechados | 16 |
| Releases | 0 |
| Bugs críticos abertos | 1 (#4108) |
| Bugs críticos resolvidos | 1 (#5378) |
| Features implementadas | 5+ (via PRs closed) |
| EPICs em progresso | 1 (#5261) |

---

*Relatório gerado em 2026-06-28. Dados agregados de github.com/nearai/ironclaw.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-06-28

---

## 1. Panorama do dia

O projeto CoPaw apresenta alta atividade de desenvolvimento com **16 PRs e 5 issues atualizados nas últimas 24h**. Não houve lançamentos de novas versões. A prioridade atual recai sobre dois eixos: (1) **correção de bugs críticos** relacionados ao DeepSeek V4 e conectividade de modelos personalizados, e (2) **expansão massiva da cobertura de testes unitários** (mais de 500 novos casos em múltiplos PRs). A comunidade demonstra engajamento significativo com issues de estabilidade e UX, enquanto novas funcionalidades em canais e plugins estão em desenvolvimento ativo.

---

## 2. Lançamentos

**Nenhum release publicado nas últimas 24h.**

O projeto encontra-se em período de preparação para próximas versões, com intenso trabalho de bugfixing e testagem.

---

## 3. Progresso do Projeto

### PRs Fechados/Merged

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #5213 | fix(console): improve MCP access policy layout | Melhoria de responsividade no layout de políticas de acesso MCP | [Ver PR](https://github.com/agentscope-ai/QwenPaw/pull/5213) |

**Destaque:** O PR #5213 trouxe melhorias significativas na experiência do usuário do console, especialmente:
- Alinhamento limpo das ações de cards MCP em diferentes tamanhos de viewport
- Responsividade no modal de Permissões e regras
- Descoberta de principals de acesso com escopo de fonte via MCP

### PRs Em Review/Aberto

| # | Título | Casos de Teste | Link |
|---|--------|----------------|------|
| #5409 | test(console): PR#1 — M2 unit tests | ~120 casos | [Ver PR](https://github.com/agentscope-ai/QwenPaw/pull/5409) |
| #5422 | test(unit): runner module unit tests | 47 casos | [Ver PR](https://github.com/agentscope-ai/QwenPaw/pull/5422) |
| #5423 | test(unit): crons module unit tests | 51 casos | [Ver PR](https://github.com/agentscope-ai/QwenPaw/pull/5423) |
| #5434 | test(console): PR#3 — M3-A unit tests | ~135 casos | [Ver PR](https://github.com/agentscope-ai/QwenPaw/pull/5434) |
| #5438 | test(console): PR#4 — M3-B unit tests | 171 casos | [Ver PR](https://github.com/agentscope-ai/QwenPaw/pull/5438) |
| #5581 | test(unit): app-infra backend unit tests | 11 casos | [Ver PR](https://github.com/agentscope-ai/QwenPaw/pull/5581) |

**Total de casos de teste adicionados:** ~535 novos casos cobrindo módulos backend (crons, runner, app-infra) e frontend (M1/M2/M3).

---

## 4. Temas Quentes da Comunidade

### Discussões com Maior Engajamento

| # | Título | Tipo | Comentários | Link |
|---|--------|------|-------------|------|
| #5573 | [Bug] DeepSeek V4 thinking 模式在 OpenAI 兼容端点上的两类 400 错误 | Bug | 2 | [Ver Issue](https://github.com/agentscope-ai/QwenPaw/issues/5573) |
| #5584 | [Question] 无法连接自定义的ascend-vllm模型 | Question | 1 | [Ver Issue](https://github.com/agentscope-ai/QwenPaw/issues/5584) |
| #5579 | [Bug] 对话记录在异常中断场景下丢失，缺乏断点保存机制 | Bug | 1 | [Ver Issue](https://github.com/agentscope-ai/QwenPaw/issues/5579) |

### Análise das Demandas

**1. Bug #5573 (DeepSeek V4 Thinking Mode)** — Identificado por Zhanyuan23333, este bug afeta usuários que utilizam a API OpenAI-compatível com modelos DeepSeek V4 através de intermediários. O problema apresenta dois sintomas:
- `reasoning_content` ausente em streaming
- Schema de ferramentas com tipos `null` não limpos

Já existe PR #5582 correlacionado com correção em desenvolvimento.

**2. Issue #5584 (Conectividade Ascend-vLLM)** — Reportado por nysand-py, indica regressão a partir da versão 1.1.7: modelos Ascend-vLLM customizados não conectam mais, embora o backend vLLM funcione normalmente e outras aplicações consigam comunicar.

**3. Issue #5579 (Perda de Conversas)** — Tecgic reporta vulnerabilidade crítica: conversas são perdidas em cenários de interrupção anormal (reinício do host, crashes de serviço), sem mecanismo de checkpoint.

---

## 5. Bugs e Estabilidade

### Bugs Abertos

| # | Severidade | Título | Reprodução | Link |
|---|------------|--------|------------|------|
| #5573 | **Alta** | DeepSeek V4 400 errors em streaming | Frequente com intermediários | [Ver](https://github.com/agentscope-ai/QwenPaw/issues/5573) |
| #5579 | **Alta** | Perda de conversas em interrupções anormais | Sempre que ocorre interrupção | [Ver](https://github.com/agentscope-ai/QwenPaw/issues/5579) |
| #5584 | **Média** | Falha de conexão com modelos Ascend-vLLM customizados | A partir da versão 1.1.7+ | [Ver](https://github.com/agentscope-ai/QwenPaw/issues/5584) |
| #5568 | **Média** | Plugin oficial falha na instalação (Agentscope 2.x breaking changes) | Ao tentar instalar plugins | [Ver](https://github.com/agentscope-ai/QwenPaw/pull/5568) |

### Análise de Severidade

- **🔴 Alta:** Afetam funcionalidades core (streaming de modelos, persistência de dados). Requerem atenção urgente.
- **🟡 Média:** Impactam fluxos específicos mas não bloqueiam uso geral.
- **🟢 Baixa:** Issues de UX (UI #5583).

**PR Correlacionado:** #5582 — fix(providers): recover streaming reasoning_content errors — visa resolver parcialmente #5573.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features em Desenvolvimento

| # | Título | Categoria | Contribuidor | Status | Link |
|---|--------|-----------|--------------|--------|------|
| #5585 | Matrix Streaming Mode (like Discord) | Channels | Morxi | Aberta | [Ver PR](https://github.com/agentscope-ai/QwenPaw/pull/5585) |
| #5577 | Opt-in Reply Aggregation | Channels | wananing | Aberta | [Ver PR](https://github.com/agentscope-ai/QwenPaw/pull/5577) |
| #5321 | Scroll Context Manager (SQLite + durable history) | Context | niceIrene | Under Review | [Ver PR](https://github.com/agentscope-ai/QwenPaw/pull/5321) |
| #5546 | Generalize Governance Policy Pattern | Infrastructure | weidankong | Aberta | [Ver PR](https://github.com/agentscope-ai/QwenPaw/pull/5546) |
| #4622 | DataPaw — Data Analysis Plugin (12 BI skills) | Plugin | EliasMei | Under Review | [Ver PR](https://github.com/agentscope-ai/QwenPaw/pull/4622) |

### Sinais de Roadmap

1. **Melhoria de Context Management:** PR #5321 propõe alternativa ao summarize (compressão) com persistência SQLite — indica direção de arquitetura mais robusta para históricos longos.

2. **Expansão de Canais:** Funcionalidades como streaming estilo Discord (#5585) e agregação de replies (#5577) sugerem foco em experiência de comunicação multi-canal.

3. **Plugin Ecosystem:** DataPaw (#4622) com 12 habilidades BI demonstra expansão do ecossistema de plugins além de ferramentas básicas.

4. **Test Coverage Sprint:** A onda de PRs de teste (535+ casos) indica meta clara de atingir cobertura mínima para release stability.

---

## 7. Resumo de Feedback dos Usuários

### Dores Reportadas

| Dor | Impacto | Frequência | Issue |
|------|---------|------------|-------|
| **Perda de conversas em crashes** | Crítico — dados irrecuperáveis | Sempre que ocorre | #5579 |
| **Modelos customizados não conectam** | Alto — bloqueia uso de infraestrutura própria | A partir de 1.1.7 | #5584 |
| **Plugins oficiais falham instalação** | Médio — reduz ecossistema utilizável | Ao instalar qualquer plugin | #5568 |
| **Background不明显 em popups** | Baixo — UX cosmético | UI específica | #5583 |

### Cenários de Uso Identificados

1. **Usuários de API Gateway:** Utilizam intermediários OpenAI-compatíveis (micu_ai, etc.) para acessar DeepSeek V4 — esperam compatibilidade completa.

2. **Infraestrutura Enterprise:** Tentam integrar modelos Ascend-vLLM customizados — indicam demanda por suporte a diferentes backends de inferência.

3. **Uso Intensivo (Agents):** Cenários onde Agents executam comandos que podem causar reinício do host — evidenciam uso em ambientes de automação.

### Satisfação/Insatisfação

- **Insatisfeitos** com regressions de conectividade (v1.1.7→2.x)
- **Insatisfeitos** com perda de dados em cenários edge
- **Neutros** quanto a features — aguardam estabilidade

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Stale

| # | Título | Criado | Dias Inativo | Prioridade | Link |
|---|--------|--------|--------------|------------|------|
| #4622 | DataPaw plugin (12 BI skills) | 2026-05-22 | ~36 dias | Alta | [Ver](https://github.com/agentscope-ai/QwenPaw/pull/4622) |
| #5321 | Scroll Context Manager | 2026-06-19 | ~9 dias | Média | [Ver](https://github.com/agentscope-ai/QwenPaw/pull/5321) |

### Recomendações para Maintainers

1. **Revisar PR #4622** — 36 dias sem atualização pode desmotivar contribuidor (EliasMei). O plugin DataPaw representa valor significativo para o ecossistema.

2. **Triangular #5584** — Issue de conectividade com Ascend-vLLM precisa de reprodutibilidade confirmada e root cause analysis.

3. **Avaliar Prioridade #5579** — Bug de perda de dados é crítico para retention de usuários. Recomenda-se evaluar implementação de checkpoint/save mechanism.

4. **Revisar Regression v1.1.7→2.x** — Padrão de issues de conectividade post-migração Agentscope indica necessidade de migration guide atualizado ou breaking changes documentados.

---

## Métricas Resumidas do Dia

| Indicador | Valor | Tendência |
|-----------|-------|-----------|
| Issues Ativas | 4 | → |
| Issues Fechadas | 1 | ↑ (benchmark: 0-1) |
| PRs Abertos | 15 | ↑↑ |
| PRs Merged/Fechados | 1 | ↓ |
| Novos Casos de Teste | ~535 | ↑↑↑ |
| Releases | 0 | → |

**Saúde Geral:** ⚠️ **Atenção** — Alta atividade de desenvolvimento e teste é positiva, mas bugs de estabilidade (perda de dados, regressões de conectividade) requerem atenção prioritária antes do próximo release.

---

*Relatório gerado em 2026-06-28 com base em dados do GitHub do projeto CoPaw (agentscope-ai/CoPaw).*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>


# Relatório do Projeto ZeroClaw — 2026-06-28

## 1. Panorama do Dia

ZeroClaw mantém **atividade muito alta** com 50 issues e 50 PRs atualizados nas últimas 24h, indicando um dia de trabalho intenso. Não houve lançamentos (0 releases), mas o projeto está claramente em ritmo de desenvolvimento ativo para as versões v0.8.3 e v0.9.0. Observa-se foco em segurança de cadeia de suprimentos (supply chain), refatoração de plugins para WASM, e resolução de bugs críticos de runtime. A comunidade está engajada com 3 RFCs novos abertos hoje, evidenciando discussão arquitetural acelerada. O volume de issues fechadas (12) vs. abertas (38) sugere que bugs estão sendo resolvidos, mas o backlog de enhancement permanece substancial.

---

## 2. Lançamentos

**Nenhum release hoje.** O projeto não publicou novas versões nas últimas 24h. Os últimos marcos ativos são:

- **v0.8.3** — focado em runtime, loop de agente, ferramentas e skills ([#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320))
- **v0.9.0** — focado em autenticação, segurança, gateway e mudanças de breaking-change ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432))

---

## 3. Progresso do Projeto

As PRs mais relevantes merged/fechadas ou em revisão ativa hoje:

| PR | Descrição | Tamanho | Risco |
|----|-----------|---------|-------|
| [#8393](https://github.com/zeroclaw-labs/zeroclaw/pull/8393) | `docs(architecture): add goal mode control-plane ADR` — adiciona ADR-008 para decisão arquitetural de goal mode | — | low |
| [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) | `feat(inkbox): add native Inkbox channel` — adiciona canal Inkbox (email + SMS + voice + iMessage) com quickstart | XL | high |
| [#8277](https://github.com/zeroclaw-labs/zeroclaw/pull/8277) | `ci(workflows): add SLSA provenance attestation to release pipeline` — adiciona atestado de proveniência SLSA Build L3 na pipeline de release | XS | high |
| [#8399](https://github.com/zeroclaw-labs/zeroclaw/pull/8399) | `feat(sop): execute live SOP steps` — executor de passos SOP ao vivo com fila de ações e aprovação auditada | M | high |
| [#8335](https://github.com/zeroclaw-labs/zeroclaw/pull/8335) | `feat(skills): make skills install/list/remove bundle-aware` — corrige path de resolução de skills para usar workspaces por agente + bundles | M | high |
| [#7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928) | `feat(wasi): initial WASM component-model plugin host code` — código inicial do host de plugins WASM com Channel, Memory e Tool traits | XL | high |
| [#8368](https://github.com/zeroclaw-labs/zeroclaw/pull/8368) | `feat(plugins): wasmtime component-model host for tool/channel/memory` — substitui extism por wasmtime para os três mundos de plugins | — | high |
| [#6966](https://github.com/zeroclaw-labs/zeroclaw/pull/6966) | `feat(obs): capture prompt/completion content on llm.call spans` — captura conteúdo de prompt/completion nos spans deLLM para Langfuse/Tempo | M | high |
| [#5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187) | `feat(ci): add arm64 docker target` — adiciona build ARM64 cross-compiled para imagens Docker | S | high |
| [#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) | `feat(gateway): in-app upgrade with auto-restart from web dashboard` — implementa upgrade in-app completo com detecção, release notes e reinício automático | L | high |

**Destaque estratégico:** A remoção do Extism em favor de wasmtime nativo ([#8368](https://github.com/zeroclaw-labs/zeroclaw/pull/8368)) é uma mudança arquitetural significativa para o sistema de plugins.

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (comentários + reações):

| # | Título | Comentários | Reações | Prioridade |
|---|--------|------------|---------|------------|
| [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) | RFC: Supply chain signing — hardware PGP, hermetic builds, SLSA provenance | 10 | 0 | p2 |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | RFC: Goal mode for bounded autonomous session work | 3 | 1 | p2 |
| [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) | RFC: Plugin permission, config, and secrets model | 0 | 0 | — |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | RFC: Wire-Protocol-First Provider Model | 0 | 0 | — |

**Análise:** O tema mais quente é **segurança de cadeia de suprimentos** ([#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)), com 10 comentários — a comunidade demonstra preocupação significativa com assinatura de supply chain, PGP hardware-backed e proveniência SLSA. O RFC de **goal mode** ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)) também gera discussão, sinalizando demanda por sessões autônomas de longa duração. Dois novos RFCs foram abertos hoje, indicando planejamento arquitetural ativo.

---

## 5. Bugs e Estabilidade

### Por Severidade (issues abertas hoje):

**S1 — Workflow bloqueado (priority:p1):**

| # | Título | Status | Risco |
|---|--------|--------|-------|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | Default 32k context budget excedido no iteration 1 — preemptive trim perpétuo | in-progress | high |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | Shell tool calls recusadas no nível de autonomia "full" — tool_dispatch nunca chega ao runtime | accepted | high |
| [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | `mcp_bundles` é parseado mas nunca aplicado no runtime — scoping por agente é no-op silencioso | accepted | high |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | Gemini CLI OAuth simplesmente não funciona | closed | high |
| [#6622](https://github.com/zeroclaw-labs/zeroclaw/issues/6622) | WhatsApp Web: LID→phone resolution falha na allowlist | needs-author-action | high |

**S2 — Comportamento degradado (priority:p2):**

| # | Título | Status | Risco |
|---|--------|--------|-------|
| [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | Sistema dá muita ênfase a memórias em cron jobs | closed | high |
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | Prompt Caching não funciona via Telegram | accepted | medium |
| [#8047](https://github.com/zeroclaw-labs/zeroclaw/issues/8047) | ReadSkillTool busca em `data_dir` mas skills estão no workspace | closed | high |
| [#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800) | Code help/keybindings enganosos ou inacessíveis no macOS | accepted | medium |

**Alertas críticos:**
- O bug [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) é particularmente grave: o contexto de 32k é excedido já na **primeira iteração** de qualquer conversa nova, antes mesmo de qualquer mensagem do usuário.
- O bug [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) com `autonomy = "full"` indica falha de segurança/permissões no dispatch de ferramentas shell.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas features abertas hoje:

| # | Título | Comentários | Tipo |
|---|--------|-------------|------|
| [#8397](https://github.com/zeroclaw-labs/zeroclaw/issues/8397) | Expor flag `uses_memory` por cron job na CLI e ferramentas cron_add/cron_update | 0 | enhancement |
| [#8379](https://github.com/zeroclaw-labs/zeroclaw/issues/8379) | Opt-in passive group context para WhatsApp Web group chats | 2 | enhancement |

### RFCs em discussão ( roadmap signals ):

| # | Título | Fase | Impacto |
|---|--------|------|---------|
| [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) | Supply chain signing + SLSA provenance | RFC ativa | high |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | Goal mode para sessões autônomas delimitadas | RFC ativa | high |
| [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) | Wasm-first plugin runtime — default-on, capability enforcement | RFC aceita | high |
| [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) | Plugin permission, config e secrets model | RFC draft | high |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | Wire-Protocol-First Provider Model | RFC draft | high |

**Sinais de roadmap:** O projeto está convergindo para WASM como runtime padrão de plugins, com o PR [#8368](https://github.com/zeroclaw-labs/zeroclaw/pull/8368) eliminando extism. A adição do canal Inkbox ([#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384)) expande a estratégia multi-canal.

---

## 7. Resumo de Feedback dos Usuários

### Dores relatadas nos issues:

1. **Memória intrusiva em automações:** Usuários de cron jobs reportam que o sistema dá "muito valor" às memórias, comprometendo a execução de tarefas automatizadas ([#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844))

2. **Prompt Caching falha no Telegram:** Usuários do Telegram não obtêm os benefícios de cache de prompt disponíveis na CLI, resultando em reprocessamento completo a cada mensagem ([#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360))

3. **Contexto estourado desde a primeira mensagem:** O problema de budget de 32k tokens ser excedido na primeira iteração ([#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)) indica que usuários novos enfrentam degraded behavior imediatamente

4. **Skills não encontradas:** O agente lista skills disponíveis mas não consegue localizá-las na execução, porque o path de leitura (`data_dir`) difere do path de carga real (workspace + bundles) ([#8047](https://github.com/zeroclaw-labs/zeroclaw/issues/8047))

5. **WhatsApp Web dropa mensagens de grupo:** O bot ignora mensagens de grupo que não são mencionadas, limitando o uso em ambientes colaborativos ([#8379](https://github.com/zeroclaw-labs/zeroclaw/issues/8379))

6. **Autonomia full não funciona com shell:** Usuários que configuram `autonomy = "full"` para automação completa descobrem que ferramentas shell são silenciosamente bloqueadas ([#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434))

### Feedback positivo implícito:
- A feature de goal mode ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)) com 1 reação e 3 comentários indica demanda real por sessões duráveis
- A documentação extensiva sendo adicionada ([#8306](https://github.com/zeroclaw-labs/zeroclaw/pull/8306)) sugere foco em onboarding

---

## 8. Backlog que Merece Atenção

### Issues sem atividade recente ou aguardando ação:

| # | Título | Criado | Atualizado | Status | Observação |
|---|--------|--------|------------|--------|------------|
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | Gemini CLI OAuth não funciona | 2026-03-28 | 2026-06-27 | closed | **3 meses** de idade; 2 👍; bug de integração crítico |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | Shell tool recusada em autonomia full | 2026-05-06 | 2026-06-27 | accepted | Prioridade p1; risco high; sem PR associado |
| [#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) | mcp_bundles não é aplicado no runtime | 2026-06-15 | 2026-06-26 | accepted | **Segurança**: scoping de MCP por agente é no-op silencioso |
| [#6966](https://github.com/zeroclaw-labs/zeroclaw/pull/6966) | Observability: captura prompt/completion em spans | 2026-05-27 | 2026-06-27 | open | Aguardando author action; contribuiidor externo ofereceu upstream |
| [#6622](https://github.com/zeroclaw-labs/zeroclaw/issues/6622) | WhatsApp LID→phone resolution | 2026-05-13 | 2026-06-27 | needs-author-action | Prioridade p1; stale-candidate |

### Issues de manutenção de PRs pendentes:

| # | Título | Aguarda |
|---|--------|---------|
| [#6966](https://github.com/zeroclaw-labs/zeroclaw/pull/6966) | Captura prompt/completion em spans | author action |
| [#5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187) | ARM64 Docker target | author action |
| [#8173](

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*