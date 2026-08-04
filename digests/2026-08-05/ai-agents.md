# Resumo diário do ecossistema de agentes de IA 2026-08-05

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-08-04 21:05 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do Projeto NullClaw — 2026-08-05

---

## 1. Panorama do Dia

O projeto NullClaw apresenta um nível de atividade moderado na data de hoje. Uma nova pull request foi atualizada nas últimas 24 horas, demonstrando continuidade no desenvolvimento de novos provedores. O número de issues permanece estagnado, indicando ausência de novos relatos de problemas ou discussões significativas. A equipe mantenedora mantém o repositório em estado funcional, embora o volume de atividade seja reduzido. O lançamento mais recente permanece como referência de última atualização estável do projeto.

---

## 2. Lançamentos

**Nenhum novo release registrado nas últimas 24 horas.**

O projeto não publicou versões atualizadas desde o período anterior. Recomenda-se que a equipe de desenvolvimento finalize a integração do provedor `grok-cli` em análise para considerar uma release que inclua esta funcionalidade. A ausência de releases pode indicar fase de consolidação ou espera por mais contribuições antes de um próximo corte de versão.

---

## 3. Progresso do Projeto

**Pull Request em destaque:**

| #981 | Adição do provedor grok-cli para xAI Grok CLI |
|------|---------------------------------------------|
| **Status** | ABERTA |
| **Autor** | valonmulolli |
| **Criação** | 2026-07-29 |
| **Última atualização** | 2026-08-04 |
| **Estado** | Em revisão |
| **Link** | [nullclaw/nullclaw PR #981](https://github.com/nullclaw/nullclaw/pull/981) |

**Análise:** A PR implementa um novo provedor CLI que delega requisições ao binário local `grok` da xAI, seguindo o padrão estabelecido pelos provedores existentes `codex-cli`, `gemini-cli` e `claude-cli`. O modelo de spawn-por-requisito mantém consistência arquitetural com a base de código atual. A funcionalidade é rotulada como opcional, exigindo instalação prévia do CLI `grok` e autenticação válida.

---

## 4. Temas Quentes da Comunidade

**Atividade comunitária limitada nas últimas 24 horas.**

Com zero issues abertas ou fechadas no período, não há indicadores de discussões ativas ou debates comunitários em destaque. A PR #981 permanece como o único ponto de interação, sem registros de comentários ou reações até o momento. Este padrão pode refletir ciclo de revisão assíncrona ou período de baixa atividade comunitária.

---

## 5. Bugs e Estabilidade

**Nenhum bug reportado nas últimas 24 horas.**

A ausência de issues de problemas indica estabilidade operacional do projeto no período atual. Não há indícios de crashes, regressões ou vulnerabilidades reportadas. O estado atual sugere que a base de código mantida pelo NullClaw permanece funcional para seus usuários.

---

## 6. Pedidos de Features e Sinais de Roadmap

**Feature em desenvolvimento:**

A PR #981 representa a principal adição de funcionalidade em progresso. A implementação de um provedor `grok-cli` demonstra:

- **Expansão de suporte:** Integração com o ecossistema xAI Grok, ampliando as opções de provedores disponíveis
- **Arquitetura consistente:** Adoção do padrão spawn-per-request já utilizado por outros provedores CLI
- **Modularidade:** Natureza opcional do provedor mantém baixo acoplamento com o núcleo da aplicação

**Sinais de roadmap:** A adição de provedores CLI sugere direção estratégica de suportar múltiplos agentes de IA localmente, mantendo flexibilidade para os usuários escolherem seu provedor preferido.

---

## 7. Resumo de Feedback dos Usuários

**Sem feedback explícito registrado nas últimas 24 horas.**

A ausência de issues de feedback indica que não há reclamações ou sugestões novas documentadas no GitHub. A falta de comentários na PR #981 pode sugerir que a contribuição aguarda revisão técnica dos mantenedores ou que a comunidade ainda não identificou a proposta.

**Indicador de saúde:** A ausência de issues negativas é um sinal positivo, embora a baixa participação comunitária possa indicar necessidade de maior visibilidade ou canais adicionais de comunicação com usuários.

---

## 8. Backlog que Merece Atenção

**Itens em aberto sem atividade recente:**

| Item | Tipo | Última Atualização | Observação |
|------|------|-------------------|------------|
| PR #981 | Feature | 2026-08-04 | Aguardando revisão — provedor grok-cli |

**Recomendações:**

1. **Revisar PR #981** — A contribuição está aberta há 7 dias e merece avaliação técnica para decisão de merge ou feedback construtivo ao autor
2. **Comunicar-se proativamente** — A ausência de issues pode indicar baixa visibilidade do repositório ou necessidade de divulgação das funcionalidades existentes
3. **Documentar roadmap** — Considerar a criação de um plano de desenvolvimento público para direcionar contribuições da comunidade

---

## Indicadores de Saúde do Projeto

| Métrica | Status | Observação |
|---------|--------|------------|
| Issues abertas/ativas (24h) | 🟢 Zero | Sem acúmulo de problemas |
| Bugs críticos | 🟢 Nenhum | Estabilidade mantida |
| PRs em revisão | 🟡 1 | Atividade de desenvolvimento presente |
| Releases recentes | 🔴 Nenhuma | Oportunidade de版本ização |
| Engajamento comunitário | 🟡 Baixo | Área para melhoria |

---

*Relatório gerado automaticamente com base nos dados públicos do GitHub em 2026-08-05.*

---

## Comparação entre projetos do ecossistema

# Relatório Comparativo: Ecossistema Open Source de Agentes de IA

**Data de Referência:** 2026-08-05  
**Projetos Analisados:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Visão Geral do Ecossistema

O ecossistema de agentes de IA open source apresenta **dois padrões distintos de maturidade** em agosto de 2026. Projetos como **ZeroClaw, Hermes Agent, IronClaw e NanoBot** demonstram vigoroso ritmo de desenvolvimento com 48-100+ eventos diários, indicando fase de crescimento acelerado e iteração agressiva sobre features. Em contraste, **NullClaw e PicoClaw** operam em modo de baixa intensidade, focando em estabilidade e revisões pontuais. O tema unificador é a **segurança e isolamento multi-agente**, com quatro projetos enfrentando vulnerabilidades críticas relacionadas a vazamento de dados entre agentes. A convergência técnica observa-se em três áreas: provedor multi-modelo, canais de comunicação (Discord, Telegram, Matrix) e memória persistente com otimização de contexto.

---

## 2. Comparação de Atividade

| Projeto | Issues (24h) | PRs (24h) | Releases (24h) | Saúde | Tendência |
|---------|-------------|-----------|----------------|-------|-----------|
| **ZeroClaw** | 50 | 50 | 0 | 🔴 Alerta (2 S0) | Crescimento acelerado |
| **Hermes Agent** | 50 | 50 | 0 | 🟡 Moderada (16 P2) | Pós-release 0.20.0 |
| **IronClaw** | 50 | 50 | 0 | 🟢 Alta | Consolidando v1.1.0 |
| **NanoBot** | 28 | 28 | 0 | 🟢 Alta | Fluxo robusto |
| **CoPaw** | 25 | 48 | 0 | 🟡 Verificando | Beta v2.1.0 |
| **PicoClaw** | 3 | 6 | 0 | 🟡 Moderada | Baixa intensidade |
| **NullClaw** | 0 | 1 | 0 | 🟢 Estável | Baixa intensidade |

**Métricas Consolidada:**
- **Total de eventos (24h):** 206 issues + 233 PRs
- **Projetos com releases pendentes:** 5 (ZeroClaw, Hermes, IronClaw, NanoBot, CoPaw)
- **Projetos com bugs críticos abertos:** 5 de 7
- **Bugs S0/S1 em aberto:** 4 (ZeroClaw: 2, NanoBot: 1, IronClaw: 1)

---

## 3. Posicionamento do Projeto Principal (NullClaw)

### Vantagens Comparativas

| Aspecto | NullClaw | Posição vs. Pares |
|---------|----------|-------------------|
| **Simplicidade arquitetural** | Provedor minimalista com spawn-per-request | Referência para projetos mais complexos |
| **Estabilidade** | Zero bugs críticos reportados | Melhor saúde operacional absoluta |
| **Superfície de ataque** | Provedor opcional (não infecta core) | Menor risco de vazamentos |
| **Onboarding** | Integração via CLI nativo (grok-cli, gemini-cli) | Padrão reconhecido |

### Lacunas Identificadas

| Lacuna | Evidência | Impacto |
|--------|-----------|---------|
| **Visibilidade** | 0 issues/24h, 0 comentários em PR | Baixa adoção ou comunidade inativa |
| **Velocidade** | PR #981 aberta há 7 dias sem review | Gargalo de mantenedores |
| **Features** | Sem novos releases, sem PRs de feature | Perigo de estagnação |
| **Multi-canal** | Ausência de integrações (Discord/Telegram/Matrix) | Limitação de uso prático |

**Posicionamento Estratégico:** NullClaw ocupa nicho de **provedor minimalista para power users** que desejam delegar a provedores CLI locais. Contudo, a baixa atividade comunitária sugere necessidade de estratégia de crescimento ou reposicionamento.

---

## 4. Focos Técnicos Compartilhados

### 4.1 Segurança Multi-Agente (Prioridade Universal)

```
ZeroClaw:  Issues #9647, #9646 (S0) — conhecimento/sessões globais entre agentes
NanoBot:   Issue #4784 (crítica) — os.environ sobrescreve API keys
IronClaw:  Issue #6898 (P0) — write_file corrompe binários
CoPaw:     Issue #6695, #6655 — aprovação de segurança inacessível
Hermes:    Issue #52010 — FDA macOS perdido post-update
```

**Padrão:** Todos os projetos enfrentam variantes do problema de **isolamento de contexto e credenciais**. Nenhum projeto possui solução madura para ambientes multi-tenant.

### 4.2 Provedores de Modelo (Convergência)

| Feature | NanoBot | Hermes | IronClaw | CoPaw | PicoClaw | ZeroClaw |
|---------|---------|--------|----------|-------|----------|----------|
| Multi-provider | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Prompt caching | ✅ (Anthropic) | — | — | ✅ (GPT-5.6) | ✅ (Anthropic) | — |
| Meta-search | ✅ (RRF) | — | — | — | ✅ (Exa) | — |
| Custom endpoints | ✅ (Telegram) | — | — | — | — | ✅ |

**Convergência:** A busca agregada (Meta-search) surge como feature emergente em 2 projetos simultaneamente.

### 4.3 Canais de Comunicação

```
Discord:  Hermes (regressão pós-0.20.0), IronClaw, CoPaw, ZeroClaw, PicoClaw
Telegram: NanoBot, Hermes, IronClaw, CoPaw, PicoClaw
Matrix:   NanoBot, Hermes, CoPaw, ZeroClaw
WeChat:   CoPaw (aprovação inacessível — bug crítico)
```

**Padrão:** Suporte a 3-5 canais é expectável; bugs de protocolo específico (Matrix homeservers não-padrão, Telegram polling) indicam dívida técnica em robustez.

---

## 5. Análise de Diferenciação

### 5.1 Por Público-Alvo

| Projeto | Público Primário | Público Secundário |
|---------|------------------|-------------------|
| **NullClaw** | Power users técnicos | Desenvolvedores de ferramentas |
| **NanoBot** | Equipes DevOps,sysadmins | Desenvolvedores individuais |
| **Hermes Agent** | Usuários Desktop Windows/macOS | Desenvolvedores cross-platform |
| **IronClaw** | Empresas (self-hosted, enterprise) | Agentes produtivos |
| **CoPaw** | Desenvolvedores Qwen/Alibaba | Produtividade pessoal |
| **PicoClaw** | Usuários de CLI | Integração SiPeed |
| **ZeroClaw** | Equipes multi-agente | Segurança enterprise |

### 5.2 Por Arquitetura

| Abordagem | Projetos | Características |
|-----------|----------|-----------------|
| **CLI-first** | NullClaw, PicoClaw | Spawn-per-request, wrappers de CLI |
| **Desktop-native** | Hermes Agent | Electron/Cross-platform, Full Disk Access |
| **Backend-as-a-Service** | NanoBot, CoPaw | Channels como serviço, WebUI |
| **Modular Rust** | IronClaw | WASM sandbox, crates separation |
| **Multi-agente isolado** | ZeroClaw | scoped tool registry, peer groups |

### 5.3 Por Estratégia de Release

```
Ciclo Curto (2-4 semanas):    Hermes Agent (0.20.0 em 04/08, regressões no dia seguinte)
Ciclo Médio (1-2 meses):       IronClaw (v1.1.0), CoPaw (beta v2.1.0)
Ciclo Longo (trimestral):      NullClaw (sem releases registradas)
Release contínuo (batch):      ZeroClaw, NanoBot (múltiplas PRs/dia sem versionar)
```

---

## 6. Tração e Maturidade da Comunidade

### 6.1 Velocidade de Iteração

| Tier | Projetos | PRs/24h | Razão Merge | Tempo Crítico |
|------|----------|---------|-------------|---------------|
| **Veloz** | ZeroClaw, Hermes, IronClaw | 50 | ~2:1 | 1-2 dias |
| **Robusto** | NanoBot, CoPaw | 28-48 | ~2:1 | 3-5 dias |
| **Lento** | PicoClaw, NullClaw | 1-6 | <1:1 | >7 dias |

### 6.2 Indicadores de Maturidade

| Indicador | Liderança | Seguidores | Rezadores |
|-----------|-----------|------------|-----------|
| **Estabilidade de releases** | IronClaw (waves consolidadas) | NanoBot (beta test) | NullClaw (estagnado) |
| **Segurança** | ZeroClaw (RFCs, p1 ativa) | IronClaw (P0 priorizado) | CoPaw (aprovação quebrada) |
| **Documentação** | Hermes (contributor workflow) | NanoBot (WebUI docs) | PicoClaw (stale PRs) |
| **Comunidade externa** | CoPaw (issue #6649 com 13 comentários) | ZeroClaw (20+ RFCs) | NullClaw (0 comentários) |

### 6.3 Dívida Técnica por Projeto

```
ZeroClaw:     Crítica — 2 S0 de segurança em produção
NanoBot:      Moderada — bug de segurança há 30 dias (#4784)
Hermes:       Moderada — 16 bugs P2 pós-release
IronClaw:     Baixa — waves de refatoração em execução
CoPaw:        Moderada — bugs críticos de canal (WeChat)
PicoClaw:     Alta — PRs stale com correções importantes
NullClaw:     Baixa — mas estagnação é risco próprio
```

---

## 7. Sinais de Tendência

### 7.1 Tendências Confirmadas (Padrão em ≥3 projetos)

| Tendência | Evidência | Implicação |
|-----------|-----------|------------|
| **Isolamento de agentes** | ZeroClaw, NanoBot, IronClaw, CoPaw | Feature table-stakes para enterprise |
| **Multi-canal robusto** | Todos os projetos | Diferenciação por qualidade de integração |
| **Prompt caching** | NanoBot, PicoClaw, CoPaw | Otimização de custo/latência é prioridade |
| **Observabilidade integrada** | Hermes, IronClaw, ZeroClaw | OTEL como padrão de facto |
| **Meta-search** | NanoBot (#5234), PicoClaw (#3299) | Busca agregada como feature diferenciadora |

### 7.2 Tendências Emergentes (Padrão em 1-2 projetos)

| Tendência | Projeto | Potencial |
|-----------|---------|-----------|
| **WASM sandboxing** | IronClaw | Isolamento de tools sem overhead |
| **Zero-width joiner detection** | Hermes | Hardening contra injeção de prompt |
| **Approval workflows granulares** | CoPaw, ZeroClaw | Segurança operacional enterprise |
| **Per-user persistent sandbox** | IronClaw | Containerização de sessão |

### 7.3 Tendências em Declínio/Reavaliadas

| Aspecto | Evidência | Interpretação |
|---------|-----------|---------------|
| **Feature creep sem qualidade** | Hermes: regressões pós-0.20.0 | Mercado exige estabilidade > features |
| **CLI-only como diferencial** | NullClaw: baixa adoção | Usuários demandam WebUI/Desktop |
| **Releases frequentes sem QA** | Hermes: hotfix necessário | Release early = technical debt |

### 7.4 Recomendações para Desenvolvedores

1. **Para novos contribuidores:** IronClaw e NanoBot oferecem melhor onboarding com PRs aceita em 1-3 dias
2. **Para integração enterprise:** ZeroClaw (segurança) ou IronClaw (WASM sandbox) — evitar CoPaw (bugs de aprovação)
3. **Para produtividade individual:** Hermes Agent ou NanoBot — WebUI madura
4. **Para embedded/CLI:** NullClaw ou PicoClaw — simplicidade, mas monitorar estagnação

---

## Conclusão Executiva

O ecossistema de agentes de IA open source em 2026-08-05 apresenta **saúde fragmentada**: três projetos (ZeroClaw, Hermes, IronClaw) lideram em volume e ambição técnica, enquanto NullClaw e PicoClaw enfrentam risco de estagnação. O tema central de segurança — vazamento de dados e isolamento de agentes — não está resolvido em nenhum projeto, representando **oportunidade de diferenciação** para quem resolver primeiro. A convergência em multi-canal, prompt caching e observabilidade sinaliza maturização do domínio, enquanto tendências emergentes (WASM sandboxing, approval granular) indicam próxima fronteira competitiva.

**Para NullClaw especificamente:** manter vantagem de simplicidade requer resolver o gargalo de review (7+ dias sem resposta em PR) e comunicar valor ao mercado — caso contrário, será overtaken por projetos com mais features e comunidade ativa.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório de Projeto: NanoBot — 2026-08-05

---

## 1. Panorama do Dia

O ecossistema NanoBot demonstra vigoroso nível de atividade nesta data, com **28 PRs atualizados** nas últimas 24h — dos quais 19 já foram merged ou fechados. A equipe está particularmente focada em refinamento da WebUI (6 PRs de UI/UX fechados), correções de bugs em canais de comunicação (Telegram, WeCom, Matrix, Mattermost) e ajustes em provedores de IA (Anthropic Opus 5, Meta-Search). A comunidade reportou 5 issues, incluindo um **issue de segurança em aberto há quase um mês** sobre vazamento de chaves de API. No geral, o projeto apresenta alta saúde operacional com fluxo consistente de contribuições.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

A ausência de release formal não indica estagnação — pelo contrário, o volume de PRs fechados sugere que a equipe pode estar preparando um release agrupado para o ciclo seguinte.

---

## 3. Progresso do Projeto

### PRs Merged/Fechados Relevantes

| PR | Escopo | Prioridade | Destaque |
|----|--------|------------|----------|
| [#5236](https://github.com/HKUDS/nanobot/pull/5236) | Provider/Anthopic | **P1** | Suporte nativo para Opus 5 effort controls — corrige rejeição da API e elimina parâmetro `temperature` obsoleto para modelos Opus 5 |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | WebUI/Security | **P1** | Autenticação via proxy confiável para deployments Cloudflare Tunnel + Cloudflare Access |
| [#5239](https://github.com/HKUDS/nanobot/pull/5239) | WebUI/Dev | **P1** | Modo dev integrado com `nanobot webui --dev` — gateway + Vite com HMR e workflow de contributor documentado |
| [#5223](https://github.com/HKUDS/nanobot/pull/5223) | Canal/WeCom | P2 | Previne escrita acidental em diretório ao sanitizar filenames vazios |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | Canal/Telegram | P2 | Preserva blocos de código com linguagens especiais (`c++`, `objective-c`, `html+django`) — fecha #5235 |
| [#5242](https://github.com/HKUDS/nanobot/pull/5242) | Commands | P2 | Rejeita comandos malformados e sugere correções para typos — reduz calls desnecessários ao LLM |
| [#5244](https://github.com/HKUDS/nanobot/pull/5244) | WebUI | P2 | Renderização Markdown em previews de rail de prompts |
| [#5243](https://github.com/HKUDS/nanobot/pull/5243) | WebUI | P2 | Metadados de automação movidos para footer, alinhados com timestamps |
| [#5245](https://github.com/HKUDS/nanobot/pull/5245) | WebUI | P2 | Estilização consistente de tooltips de timestamp |
| [#5241](https://github.com/HKUDS/nanobot/pull/5241) | WebUI | — | Destaques de tokens com cor accent `#ef8e30` — remove glow difuso |
| [#5240](https://github.com/HKUDS/nanobot/pull/5240) | WebUI | — | Unificação de controles flutuantes (menus, popovers, panels) |
| [#1776](https://github.com/HKUDS/nanobot/pull/1776) | Canal/Telegram | — | Campo `group_mode` adicionado ao TelegramConfig (PR antigo fechado) |

**Avanços-chave:**
- **Segurança reforçada** em autenticação de proxy e manipulação de parâmetros de modelos
- **WebUI com refinamento significativo** — 8 PRs focados em consistência visual, acessibilidade e UX
- **Correção de estabilidade** em WeCom (edge case de filename sanitization)

---

## 4. Temas Quentes da Comunidade

### Issues e PRs com Maior Atenção

| Item | Tipo | Comentários | Tema Central |
|------|------|-------------|--------------|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | Issue | 2 | **Vazamento de chaves de API entre provedores via mutação global de `os.environ`** |
| [#5237](https://github.com/HKUDS/nanobot/issues/5237) | Issue | 1 | MCP tool retorna envelope de erro "data not found" que é ignorado pelo agente |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | PR | — | **Meta-Search Provider (mst-python)** — agregação RRF de múltiplos search engines |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | PR | — | **Quick Chat e Temporary Chat** — novos modos de conversa na WebUI |

### Análise de Demandas

**Segurança (Issue #4784):** O bug reportado por `hamb1y` expõe um problema arquitetural grave — `OpenAICompatProvider._setup_env()` escreve diretamente no `os.environ` global, sobrescrevendo chaves de provedores anteriores. Para providers gateway, usa atribuição direta; para não-gateway, usa `setdefault`. Esse padrão pode causar vazamento inadvertido de credenciais em ambientes multi-provedor. **Este é o tema de maior criticidade em aberto.**

**Nova Feature de Meta-Search (#5234):** A integração do MST (Meta-Search Tool) representa expansão estratégica para busca agregada via Reciprocal Rank Fusion — cobriu Bing, DuckDuckGo, Google, Brave simultaneamente. Gera cobertura superior a qualquer motor individual.

**Quick/Temporary Chat (#5184):** Feature UX significativa — Quick Chat persistente com identidade estável, mas fora da lista de tópicos; Temporary Chat efêmero com histórico em memória. Ambos reutilizam infraestrutura existente de thread/streaming/renderer.

---

## 5. Bugs e Estabilidade

### Issues Abertas

| # | Severidade | Descrição | Canal/Área |
|---|-----------|-----------|------------|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | **CRÍTICA** | API keys sobrescritas entre provedores via `os.environ` global | Provider/Core |
| [#5237](https://github.com/HKUDS/nanobot/issues/5237) | **ALTA** | MCP tool retorna `isError=false` com envelope de erro; agente ignora e espera timeout | MCP/Tools |
| [#5247](https://github.com/HKUDS/nanobot/issues/5247) | **ALTA** | Matrix bot não auto-join ao ser convidado — callback não dispara | Matrix |
| [#5246](https://github.com/HKUDS/nanobot/issues/5246) | **MÉDIA** | `.gitignore` com negação dupla (`!memory/`) deixa arquivos de workspace "untracked" | Memory/Workspace |

### PRs Abertos de Bug-Fix

| PR | Severidade | Descrição |
|----|-----------|-----------|
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) | **P2** | Fix Matrix POST body vazio rejeitado por Continuwuity homeserver |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | **P2** | Telegram custom Bot API base URL (em conflito) |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | **P2** | Telegram polling pode estagnar silenciosamente após network blip |

**Padrões identificados:**
- Bugs de **canais Matrix/Telegram** relacionados a robustez de protocolo e compatibilidade com homeservers/hosts não-padrão
- Issue de **segurança em aberto há 30 dias** (#4784) necessita priorização imediata
- Regressão em **sessão** (#5238) em discussão ativa — remove camadas request-scoped de grants de acesso

---

## 6. Pedidos de Features e Sinais de Roadmap

### PRs de Feature Abertos

| PR | Prioridade | Feature | Estratégia |
|----|------------|---------|------------|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | **P1** | Meta-Search via mst-python com RRF | Expansão de search |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | **P1** | Quick Chat + Temporary Chat | UX/Multi-session |
| [#5233](https://github.com/HKUDS/nanobot/pull/5233) | P2 | Thread policies separadas para Mattermost na WebUI | Canal/Config |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | P2 | Telegram custom Bot API endpoint + headers | Canal/Enterprise |
| [#5249](https://github.com/HKUDS/nanobot/pull/5249) | P2 | Refatoração visual da WebUI — elevação, controles, layouts | UX/Polish |
| [#5238](https://github.com/HKUDS/nanobot/pull/5238) | **P1** | Remoção de request-scoped access grants em sessão | Segurança/Core |

### Sinais de Roadmap

1. **Meta-Search como novo pilar** — O PR #5234 demonstra interesse em diversificar provedores de busca além de provedores LLM
2. **Flexibilidade de deployment** — Custom endpoints para Telegram (#4919) e autenticação via proxy confiável (#5210) indicam foco em enterprise/self-hosted
3. **Modos de chat diferenciados** — Quick/Temporary chat sugere estratégia de segmentar casos de uso (conversas rápidas vs. persistente vs. efêmero)
4. **Simplificação de sessão** — #5238 propões remover abstração de `SessionAccessScope`, sinalizando simplificação arquitetural

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Dor | Evidência | Impacto |
|-----|-----------|--------|
| **Vazamento de credenciais** | Issue #4784 reportada há ~30 dias, aguardando atenção | Crítico para multi-provedor |
| **Comportamento silencioso em falhas** | Telegram polling estagna (#5156), MCP ignora erros (#5237), Matrix não join (#5247) | Confiança e debug |
| **Fragmentação de sessão** | `.gitignore` incompleto (#5246), issues com estado de sessão | Usabilidade/administração |
| **Tokens órfãos em código** | Regex de linguagem falhava para `c++`, `objective-c` (#5222) | UX para desenvolvedores |
| **Timeout em ferramenta** | MCP error envelope não reconhecido — wait até timeout | Performance/responsividade |

### Cenários de Uso Emergentes

- **Deploy via Cloudflare Tunnel** — autenticação proxy confiável (#5210) indica adoção em infraestrutura serverless/edge
- **Enterprise Telegram** — necessidade de Bot API customizado (#4919) para ambientes corporativos
- **Hosts Matrix não-padrão** — Continuwuity compatibility (#5248) expande suporte a homeservers menos comuns

---

## 8. Backlog que Merece Atenção

### Issues Sem Resposta/Resolução Prolongada

| # | Tempo em Aberto | Descrição | Recomendação |
|---|-----------------|-----------|--------------|
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | **~30 dias** | Vazamento de API keys via `os.environ` global | **Priorizar imediatamente** — segurança crítica |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | ~22 dias | Telegram custom Bot API base URL | Resolver conflito ou rebase |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | ~7 dias | Telegram polling estagnação | PR pronto, precisa review/merge |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | ~6 dias | Quick/Temporary Chat (em conflito) | Resolver conflito para feature P1 |

### Métricas de Saúde do Backlog

| Indicador | Valor | Avaliação |
|-----------|-------|-----------|
| Issues abertas | 4 | Razoável — maioria P2 ou UX |
| Issues de segurança abertas | 1 (crítica) | **Alerta** |
| PRs em conflito | 3 | Atenção — impedem progressão |
| Tempo médio de issues críticas | ~30 dias (#4784) | **Ineficiência** — risco acumulado |
| Razão PRs fechados/abertos (24h) | 19/9 ≈ 2.1 | **Saudável** — fluxo de merge consistente |

---

## Conclusão Executiva

**NanoBot apresenta saúde operacional ALTA** com fluxo robusto de contribuições (28 PRs/24h) e ciclo de review/merge eficiente. A equipe demonstra foco em refinamento de UX/WebUI e robustez de canais. **No entanto, uma issue de segurança crítica (#4784) permanece sem resolução há ~30 dias**, representando risco acumulativo para deployments multi-provedor. Recomenda-se escalonamento imediato. O pipeline de features (Meta-Search, Quick/Temporary Chat) promete valor significativo para a próxima release, condicionada à resolução de conflitos em PRs bloqueados.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Projeto Hermes Agent — 2026-08-05

---

## 1. Panorama do Dia

O Hermes Agent manteve **atividade intensa** em 05/08/2026, com 50 issues e 50 PRs atualizados nas últimas 24 horas — reflexo de uma sprint acelerada após a release 0.20.0 (04/08). A distribuição de trabalho concentra-se em **estabilidade de desktop e multi-plataforma** (Windows, macOS, Linux), com ênfase em bugs de regressão nos componentes de sessão e gateway. Não houve releases novas, indicando fase de endurecimento pós-launch. A comunidade demonstra preocupação crescente com **acúmulo de processos órfãos** e **drenagem de permissões** no macOS Desktop — padrões que sugerem necessidade de hardening em cycle-life dos backends.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24h.**

A versão mais recente é a **0.20.0** (lançada em 04/08), cujo impacto ainda reverbera na base de usuários — relatos de regressões críticas (Discord gateway stall, orphan backends) foram abertos no dia seguinte ao deploy.

---

## 3. Progresso do Projeto

### PRs Fechadas/Merged Hoje

| # | PR | Descrição | Impacto |
|---|-----|-----------|---------|
| [#78856](https://github.com/NousResearch/hermes-agent/pull/78856) | Fix NVIDIA model prefix | Mensagem clara ao perder prefixo `nvidia/` | UX + debuggabilidade |
| [#78853](https://github.com/NousResearch/hermes-agent/pull/78853) | Render Markdown em mensagens do usuário (Desktop) | Melhor legibilidade em prompts longos | Satisfação Windows |
| [#78852](https://github.com/NousResearch/hermes-agent/pull/78852) | Desabilitar sons de notificação (Desktop) | Configuração aguardada por power users | Satisfação Windows |
| [#78851](https://github.com/NousResearch/hermes-agent/pull/78851) | Seleção de idioma de spellcheck (Desktop) | Suporte a multilingual no Windows | Satisfação Windows |

### PRs Abertas de Alto Impacto

| # | PR | Descrição | Estágio |
|---|-----|-----------|---------|
| [#78911](https://github.com/NousResearch/hermes-agent/pull/78911) | OTLP span exporter herda `resource_attributes` | Fecha #78897 — telemetria padronizada | Aberto |
| [#78873](https://github.com/NousResearch/hermes-agent/pull/78873) | Stop orphan serve pile-up + nofile floor | Fix crítico para macOS Desktop EMFILE | Aberto |
| [#78682](https://github.com/NousResearch/hermes-agent/pull/78682) | Windows install em perfis com espaços/acentos | Fecha #70402 — critical path Windows | Aberto |
| [#77705](https://github.com/NousResearch/hermes-agent/pull/77705) | In-app browser/previews como tabs reais | UX desktop refatorada | Aberto |
| [#76857](https://github.com/NousResearch/hermes-agent/pull/76857) | Zero-width joiner em emojis ZWJ | Evita falsos positivos no scanner de segurança | Aberto |
| [#69980](https://github.com/NousResearch/hermes-agent/pull/69980) | Trusted sender envelope para sessões compartilhadas | Suporte multi-usuário em Discord/Telegram | Aberto |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

1. **[#52010](https://github.com/NousResearch/hermes-agent/issues/52010)** — macOS Full Disk Access revogado após cada update *(15 comentários, P2)*
   - **Demanda**: Usuários macOS querem persistência de permissões FDA (Files & Folders) entre atualizações do Hermes Desktop.
   - **Contexto**: Diferente de Accessibility/Automation, FDA exige re-concessão manual no System Settings — fricção significativa.
   - **Sinal**: Tema recorrente; possível quebra de flow de trabalho empower user.

2. **[#59224](https://github.com/NousResearch/hermes-agent/issues/59224)** — CLI `/resume` esconde sessões Desktop/TUI *(10 comentários, P2)*
   - **Demanda**: Unificar listagem de sessões entre launchers (CLI, Desktop, WebUI).
   - **Duplicado**: #47214 confirma o mesmo root cause em `cli.py:_list_recent_sessions` com `source="cli"` hardcoded.
   - **Sinal**: Fragmentação de UX entre interfaces — experiência inconsistente.

3. **[#76886](https://github.com/NousResearch/hermes-agent/issues/76886)** — `read_file` reporta UTF-8 válido como binário *(9 comentários, P2)*
   - **Demanda**: Corrigir sample de 1000 bytes que corta multibyte characters.
   - **Regressão**: Introduzida em 0.19.1. Afeta notas Obsidian e outros conteúdos Unicode ricos.
   - **Sinal**: Bug de regressão com impacto direto em produtividade.

4. **[#59576](https://github.com/NousResearch/hermes-agent/issues/59576)** — Progressive Disclosure Memory Architecture *(3 comentários, P3)*
   - **Demanda**: Substituir flat injection de `MEMORY.md` e `USER.md` por arquitetura de 3 tiers (hot/warm/cold).
   - **Sinal**: Preocupação com consumo de context tokens e relevância de memória injetada — alinhado com otimização de custo.

---

## 5. Bugs e Estabilidade

### Críticos (P1) — Nenhum reportado hoje

### Alta Prioridade (P2) — 16 bugs ativos

| # | Bug | Componente | Severidade | Status |
|---|-----|------------|------------|--------|
| [#52010](https://github.com/NousResearch/hermes-agent/issues/52010) | FDA macOS revogado post-update | Desktop | Alta | Aberto |
| [#59224](https://github.com/NousResearch/hermes-agent/issues/59224) | `/resume` filtra source="cli" | CLI | Alta | Aberto |
| [#76886](https://github.com/NousResearch/hermes-agent/issues/76886) | UTF-8 reportado como binário | Tools | Alta | Aberto |
| [#72818](https://github.com/NousResearch/hermes-agent/issues/72818) | MCP race condition duplica processos | Agent/MCP | Alta | Aberto |
| [#56771](https://github.com/NousResearch/hermes-agent/issues/56771) | `HERMES_CRON_SESSION` vaza para shell do usuário | Cron/Agent | Alta | Aberto |
| [#78577](https://github.com/NousResearch/NousResearch/hermes-agent/issues/78577) | Partes truncadas juntadas sem separador | Agent/Ollama | Alta | Aberto |
| [#78906](https://github.com/NousResearch/hermes-agent/issues/78906) | `/auth/native/authorize` falha com empty provider | Auth/Dashboard | Alta | Aberto |
| [#78872](https://github.com/NousResearch/hermes-agent/issues/78872) | Orphan serve backends → EMFILE (macOS) | Desktop | Alta | Aberto |
| [#70402](https://github.com/NousResearch/hermes-agent/issues/70402) | Bootstrap destrói venv em paths com espaços | CLI | Alta | Aberto |
| [#78068](https://github.com/NousResearch/hermes-agent/issues/78068) | Turn finalization crash em tool call interrompido | Agent/Gateway | Alta | Aberto |
| [#78881](https://github.com/NousResearch/hermes-agent/issues/78881) | Discord gateway para de receber após 0.20.0 | Plugins/Discord | Alta | Aberto |
| [#77573](https://github.com/NousResearch/hermes-agent/issues/77573) | Desktop SSH herda 256-FD limit (macOS) | Desktop/SSH | Alta | Aberto |
| [#78897](https://github.com/NousResearch/hermes-agent/issues/78897) | Span exporter ignora resource_attributes | Telemetry | Alta | Aberto |
| [#78893](https://github.com/NousResearch/hermes-agent/issues/78893) | npm-audit remediation inútil sob .npmrc | CLI/Browser | Alta | Aberto |
| [#60827](https://github.com/NousResearch/hermes-agent/issues/60827) | OpenRouter model picker truncado (~30 vs ~260) | CLI/OpenRouter | Alta | Aberto |
| [#46276](https://github.com/NousResearch/hermes-agent/issues/46276) | Gateway units desatualizadas por PATH mismatch | CLI/Gateway | Alta | Aberto |

### Média Prioridade (P3) — 10 bugs ativos

Problemas notáveis: cron kanban com circuit breaker aggressivo ([#48000](https://github.com/NousResearch/hermes-agent/issues/48000)), protocolo de reação não honorando `off` em Matrix/Feishu/Mattermost, e spellcheck não herdando configuração Windows (já fechado na release 0.20.0).

### Regressões Identificadas Pós-0.20.0

1. **Discord gateway stall** — conecta mas para de receber mensagens; restart não recupera ([#78881](https://github.com/NousResearch/hermes-agent/issues/78881))
2. **Orphan serve backends** — acúmulo de processos no macOS Desktop causa EMFILE e UI vazia ([#78872](https://github.com/NousResearch/hermes-agent/issues/78872))
3. **read_file binário falso** — regressão em 0.19.1 ([#76886](https://github.com/NousResearch/hermes-agent/issues/76886))

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features Novas com Potencial de Próxima Release

| # | Feature | Componente | Prioridade | Sinais |
|---|---------|-----------|-----------|--------|
| [#59576](https://github.com/NousResearch/hermes-agent/issues/59576) | Progressive Disclosure Memory (3-tier) | Agent/Memory | P3 | Otimização de custo tokens |
| [#49688](https://github.com/NousResearch/hermes-agent/issues/49688) | Screenshot + annotation no Desktop composer | Desktop | P3 | Demanda por Codex-style markup |
| [#78900](https://github.com/NousResearch/hermes-agent/issues/78900) | Aprovação para ações de escrita simples | Agent/Tools | P3 | Segurança granular para escrita em wikis |
| [#13534](https://github.com/NousResearch/hermes-agent/issues/13534) | Skill Management — tracking, conflict detection, validation | Tools/Skills | — | 146+ skills em produção; proliferação desordenada |
| [#42924](https://github.com/NousResearch/hermes-agent/issues/42924) | `failure_limit` configurável para protocol_violation | Cron | P3 | Circuit breaker muito aggressivo para erros transitórios |

### Sinais de Roadmap

- **Multi-plataforma hardening**: 40% das issues abertas são P2 de desktop/gateway — sinal de dívida técnica em superfície cross-platform.
- **Telemetria integrada**: Issue #78897 + PR #78911 indicam investimento em observabilidade operacional.
- **UX unificada**: Filtros hardcoded de sessão (#59224, #38894 fechado) revelam necessidade de abstração de launcher.

---

## 7. Resumo de Feedback dos Usuários

### Dores Recorrentes

| Dor | Frequência | Impacto |
|-----|------------|---------|
| Permissões macOS perdidas post-update | Alta (comentários +1) | Flow de trabalho quebrado |
| Orphan backends no Desktop macOS | Crítica (EMFILE) | UI inutilizável |
| Modelo picker truncado (OpenRouter) | Moderada | Subaproveitamento de provedores |
| Circuit breaker kanban aggressivo | Moderada | Jobs cron falham por timeout transitório |
| Skeleton UI em sessões Desktop | Relatada | Usabilidade |

### Cenários de Uso em Evidência

1. **Produção com 146+ skills** — gerenciamento manual inadequado, demanda por tooling ([#13534](https://github.com/NousResearch/hermes-agent/issues/13534))
2. **Wiki agents** — necessidade de pré-aprovação de escrita para confiança ([#78900](https://github.com/NousResearch/hermes-agent/issues/78900))
3. **Windows power users** — caminhos com espaços/acentos bloqueiam instalação ([#70402](https://github.com/NousResearch/hermes-agent/issues/70402))
4. **Multi-gateway (Discord/Telegram)** — sessões compartilhadas com envelopes de remetente confiável ([#69980](https://github.com/NousResearch/hermes-agent/pull/69980))

### Satisfação

- **Closed features Windows Desktop** (Markdown em mensagens, sons de notificação, spellcheck) indicam foco intencional na experiência Windows — **positivos**.
- **Regressões críticas pós-0.20.0** (Discord, orphan backends) geram **insatisfação** — necessidade de hotfix.

---

## 8. Backlog que Merece Atenção

### Issues sem Resposta / Abandonadas

| # | Issue | Criada | Dias Inativa | Motivo |
|---|-------|--------|-------------|--------|
| [#13534](https://github.com/NousResearch/hermes-agent/issues/13534) | Skill Management — tracking & validation | 2026-04-21 | ~105 dias | P3 baixa prioridade, sem triagem |
| [#59576](https://github.com/NousResearch/hermes-agent/issues/59576) | Progressive Disclosure Memory | 2026-07-06 | ~30 dias | P3, aguardando design decision |
| [#60827](https://github.com/NousResearch/hermes-agent/issues/60827) | OpenRouter model picker truncado | 2026-07-08 | ~28 dias | P2, sem assignee |

### Issues com Alta Reação e Baixa Atividade

| # | Issue | 👍 | Comentários | Status |
|---|-------|-----|-------------|--------|
| [#76886](https://github.com/NousResearch/hermes-agent/issues/76886) | UTF-8 como binário | 2 | 

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório do Projeto PicoClaw — 2026-08-05

---

## 1. Panorama do Dia

O projeto PicoClaw mantém um ritmo de atividade moderado nas últimas 24 horas, com **9 eventos totais** (3 issues + 6 PRs). Duas PRs importantes foram fechadas — ambas relacionadas a autenticação OAuth e métricas de cache de prompt — indicando progresso em estabilidade e observabilidade. O repositório não registrou novos lançamentos, mas a comunidade segue ativa com 4 PRs abertas e 2 issues em aberto que apontam problemas críticos de usabilidade (lag na interface web e loops infinitos com servidores MCP). A presença de dois PRs "[stale]" sugere necessidade de revisão por mantenedores para evitar que contribuições有价值 se percam.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O projeto não emitiu novas versões desde o período analisado. Isso é consistente com o padrão de desenvolvimento ativo, onde mudanças são acumuladas antes de um próximotag.

---

## 3. Progresso do Projeto

Duas PRs significativas foram fechadas/atualizadas:

### PR #3280 — Correção de autenticação OAuth em setups headless/remotos
**Status:** FECHADA (stale)
**Autor:** honbou | Criado: 2026-07-21 | Atualizado: 2026-08-04

Corrige quatro causas independentes que faziam `picoclaw auth login --provider <oauth-provider>` falhar em ambientes headless e remotos. O problema crítico: o fluxo de autorização queimava o código de autorização **após** o usuário já ter aprovado o consentimento, forçando reinício completo.

🔗 [sipeed/picoclaw PR #3280](https://github.com/sipeed/picoclaw/pull/3280)

### PR #3251 — Captura de métricas de cache de prompt no provider Anthropic
**Status:** FECHADA (stale)
**Autor:** hydrogenbond007 | Criado: 2026-07-12 | Atualizado: 2026-08-04

Resolve uma lacuna crítica de observabilidade: os providers Anthropic (`pkg/providers/anthropic/provider.go` e `pkg/providers/anthropic_messages/provider.go`) descartavam métricas de tokens de cache retornadas pela API da Claude. Sem esses dados, operadores não conseguiam verificar se o prompt cache estava funcionando corretamente.

🔗 [sipeed/picoclaw PR #3251](https://github.com/sipeed/picoclaw/pull/3251)

---

## 4. Temas Quentes da Comunidade

Nenhum item com upvote significativo foi registrado nas últimas 24h. Todos os posts apresentam 👍: 0, indicando que a comunidade está em modo de reporte de problemas técnicos mais do que em discussão ativa.

**Observação:** As issues com maior tempo de vida (#3182, 6 comentários) tendem a concentrar discussões mais longas — típicos de bugs complexos ou problemas de configuração que requerem debug colaborativo.

---

## 5. Bugs e Estabilidade

Dois bugs críticos em aberto requerem atenção imediata:

### 🔴 Alta Severidade — Loop infinito com falha de conexão MCP

**Issue #3269** — If the MCP server connection fails, the agent loop will hang, causing the Picoclaw chat interface to stop replying to users.
**Autor:** ruiyigen | Criado: 2026-07-20 | Atualizado: 2026-08-04 | Comentários: 3 | 👍: 1

O agente fica completamente travado quando um servidor MCP falha, impedindo resposta aos usuários. Problema crítico para implantações em produção.

🔗 [sipeed/picoclaw Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)

### 🟡 Média Severidade — Lag na interface web com histórico longo

**Issue #3281** — Web UI chat input is very laggy when history has a little bit long
**Autor:** xpader | Criado: 2026-07-21 | Atualizado: 2026-08-04 | Comentários: 3 | 👍: 1

Impacta diretamente a experiência do usuário na versão web (PicoClaw Web, v0.3.1). O input se torna extremamente lento conforme o histórico de chat cresce, sugerindo problema de re-renderização ou gestão de estado.

🔗 [sipeed/picoclaw Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)

### ✅ Resolvida — Bug de versão Android

**Issue #3182** — [CLOSED] Android version — Monessem
Foi marcada como stale e fechada, mas o resumo indica problemas com lançamento de serviço no Android e permissões.

🔗 [sipeed/picoclaw Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)

---

## 6. Pedidos de Features e Sinais de Roadmap

Quatro PRs abertas indicam direções de desenvolvimento:

### 🌐 PR #3299 — Provider nativo de busca web via Exa
**Autor:** kesku | Criado: 2026-07-26 | Atualizado: 2026-08-04

Adiciona Exa como provider nativo para `tools.web` / `web_search`. Suporta filtros de data (`d`/`w`/`m`/`y`) e autenticação via `X-Api-Key`. Expande capacidades de pesquisa do agente.

🔗 [sipeed/picoclaw PR #3299](https://github.com/sipeed/picoclaw/pull/3299)

### 📊 PR #3317 — Logging de tokens de cache de prompt
**Autor:** vmuliadi-astro | Criado: 2026-08-04 | Atualizado: 2026-08-04

Melhora debug output do gateway, adicionando tokens de cache (como `prompt_cache_tokens`) ao log de resposta LLM. Complementa a PR #3251.

🔗 [sipeed/picoclaw PR #3317](https://github.com/sipeed/picoclaw/pull/3317)

### 🧠 PR #3316 — Context management para agentes roteados
**Autor:** j-v | Criado: 2026-08-03 | Atualizado: 2026-08-03

Corrige bug onde agentes roteados para canais Discord específicos não mantinham histórico e não disparavam auto-compaction. Impacta diretamente a funcionalidade de roteamento multi-agente.

🔗 [sipeed/picoclaw PR #3316](https://github.com/sipeed/picoclaw/pull/3316)

### 💬 PR #3315 — Suporte a topics em chats privados via Telegram
**Autor:** genuss | Criado: 2026-08-03 | Atualizado: 2026-08-03

Estende suporte Telegram: anteriormente reconhecia topics apenas via `Chat.IsForum` (supergroups), agora suporta `IsTopicMessage` para chats privados com bots em modo forum.

🔗 [sipeed/picoclaw PR #3315](https://github.com/sipeed/picoclaw/pull/3315)

---

## 7. Resumo de Feedback dos Usuários

### Dores reportadas:

1. **Problemas de conectividade MCP** — Usuários em produção reportam que falhas de conexão com servidores MCP causam travamento completo do sistema, impedindo interações.

2. **Degradação de performance web** — Usuários da interface web experimentam lentidão crescente no input conforme conversas se estendem, comprometendo usabilidade em sessões longas.

3. **Problemas de autenticação** — Usuários em ambientes headless/remote enfrentavam dificuldades no fluxo OAuth, especialmente em setups não convencionais.

### Cenários de uso identificados:

- **Agentes roteados** para canais Discord (multichannel deployment)
- **Chatbots Telegram** com suporte a topics em chats privados
- **Busca web integrada** via Exa para enriquecimento de agentes
- **Prompt caching** com Anthropic/Claude para otimização de custos

---

## 8. Backlog que Merece Atenção

### Issues/PRs sem resposta significativa ou em estado stale:

| Item | Tipo | Idade | Status | Prioridade |
|------|------|-------|--------|------------|
| OAuth fix | PR | ~15 dias | Stale | 🔴 Alta |
| Anthropic cache metrics | PR | ~24 dias | Stale | 🟡 Média |
| Android service bug | Issue | ~40 dias | Closed (stale) | — |
| Exa web search provider | PR | ~10 dias | Open | 🟢 Enhancements |
| Prompt cache logging | PR | 1 dia | Open | 🟢 Enhancements |

### ⚠️ Alerta: PRs stale com contributions valiosas

As PRs #3280 e #3251 foram marcadas como stale mas contêm correções importantes. Recomenda-se que mantenedores revisem, validem e façam merge ou forneçam feedback para não desmotivar contribuidores. Isso é especialmente crítico pois:

- **#3280** resolve um bug real de autenticação em setups comuns (headless/remote)
- **#3251** complementa uma feature nova (#3317), indicando que o problema de cache tokens é recorrente e validado por múltiplos contribuidores

🔗 [Ver todas as stale PRs](https://github.com/sipeed/picoclaw/pulls?q=is%3Apr+is%3Astale)

---

## Métricas Resumidas do Dia

| Categoria | Quantidade |
|-----------|------------|
| Issues abertas/ativas | 2 |
| Issues fechadas | 1 |
| PRs abertas | 4 |
| PRs merged/fechadas | 2 |
| Novas releases | 0 |
| Total de atividade | 9 |

**Índice de saúde geral:** 🟡 **Moderado** — Atividade consistente, mas dois bugs críticos em aberto (MCP hang, UI lag) e PRs stale representam riscos à experiência do usuário e retenção de contribuidores.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do Projeto IronClaw — 2026-08-05

---

## 1. Panorama do Dia

O projeto IronClaw manteve um nível de atividade intenso em 2026-08-05, com **50 issues e 50 PRs atualizados nas últimas 24 horas**. O ritmo de desenvolvimento continua acelerado, com foco predominante na execução das ondas de refatoração (WS0–WS10) e no preparo da versão v1.1.0. Não houve lançamentos de novas versões, e o trabalho principal concentra-se em consolidação de PRs batch, correções de bugs de estabilidade (particularmente relacionados a documentos binários e configurações de CI) e avanço em épicos arquiteturais. A comunidade demonstra engajamento significativo em questões de recoverability de erros e arquitetura de crates.

---

## 2. Lançamentos

**Nenhuma release registrada nas últimas 24 horas.**

O PR de release #5598 (`ironclaw_common` 0.4.2→0.5.0, `ironclaw_safety` 0.2.2→0.2.3, `ironclaw_skills` 0.3.0→0.4.0) continua aberto, sinalizando mudanças de API potencialmente breaking para `ironclaw_common`.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Closed (2026-08-05)

| PR | Título | Impacto |
|----|--------|---------|
| [#7164](https://github.com/nearai/ironclaw/pull/7164) | `feat: ACP serve subcommand with WASM-based Nostr messaging` | Adiciona subcomando `acp-serve` e funções host Nostr para sandbox WASM |
| [#7162](https://github.com/nearai/ironclaw/pull/7162) | `feat(wasm): Nostr host functions for WASM tool sandbox` | Capacidade de signing, publishing e subscription via Nostr em ferramentas WASM |
| [#7141](https://github.com/nearai/ironclaw/pull/7141) | Refactor reborn: consolidate Wave 3 PRs | Consolidação de 5 PRs de Wave 3; fecha WS3/WS4 rows |
| [#7173](https://github.com/nearai/ironclaw/pull/7173) | `ci: move coverage to main CI` | Reverte decisão anterior; PR e merge-queue lanes rodam uninstrumented |
| [#7116](https://github.com/nearai/ironclaw/issues/7116) | Live-QA runner Slack config fix | Corrige gate `[slack].enabled` auto-escrito e ignorado |
| [#7119](https://github.com/nearai/ironclaw/issues/7119) | Fix clippy para package set `{ironclaw, ironclaw_reborn_config}` | Resolve falha `Code Style` em `origin/main` |

### Avanços Estruturais

- **WS3 Closeout**: PR [#7175](https://github.com/nearai/ironclaw/pull/7175) executa o fechamento da Wave 3, zerando o `LAYER_MATRIX_EXCEPTIONS` (1→0).
- **WS5 Execution**: PRs [#7170](https://github.com/nearai/ironclaw/pull/7170), [#7172](https://github.com/nearai/ironclaw/pull/7172), [#7174](https://github.com/nearai/ironclaw/pull/7174) e [#7175](https://github.com/nearai/ironclaw/pull/7175) implementam a re-layer do `extension_host → loops` e ADRs de triggers/hooks.
- **Channel Delivery Tool**: PR [#7157](https://github.com/nearai/ironclaw/pull/7157) implementa modelo de duas lanes com ferramentas de delivery explícitas.

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento

| Issue | Título | Comentários | Tema Central |
|-------|--------|-------------|--------------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | **[EPIC] error-recoverability endgame** | 15 | Recoverability de erros em 100% das situações |
| [#7137](https://github.com/nearai/ironclaw/issues/7137) | Live-canary: shard artifacts 700MB-1.5GB | 6 | Otimização de storage CI (14-day retention) |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | **[EPIC] Hermetic capability and journey testing** | 4 | Coverage determinístico de capacidades críticas |
| [#7138](https://github.com/nearai/ironclaw/issues/7138) | Channel failure notices parity follow-up | 3 | Paridade de notices entre WebUI e canais |
| [#7145](https://github.com/nearai/ironclaw/issues/7145) | Extension host → loops re-layer | 3 | Refatoração arquitetural WS5 |

### Análise das Demandas

**Error Recovery (#6284)** domina o engajamento com 15 comentários, refletindo a prioridade estratégica do épico — garantir que o modelo recupere de 100% dos erros de forma acionável. Este é um diferencial competitivo central para o produto.

**O problema de artefatos CI (#7137)** evidencia dor operacional: 5GB+ de artefatos por run com bundles de 700MB–1.5GB, consumindo rapidamente a quota de storage do GitHub Actions. A comunidade sinaliza necessidade urgente de otimização.

---

## 5. Bugs e Estabilidade

### Bugs Críticos/Agrupados

| Severity | Issue | Descrição |
|----------|-------|-----------|
| **P0** | [#6898](https://github.com/nearai/ironclaw/issues/6898) | `write_file` corrompe documentos binários (docx) — fingerprint bypass sem guard binário |
| **P0** | [#6752](https://github.com/nearai/ironclaw/issues/6752) | Instance deletion falha; UI trava em "Loading your agents..." |
| **High** | [#7144](https://github.com/nearai/ironclaw/issues/7144) | 29 threads de defeitos pré-existentes no trace contribution pipeline (revisão CodeRabbit #7139) |
| **High** | [#7147](https://github.com/nearai/ironclaw/issues/7147) | Ratchets arquiteturais com slack não rastreado em main |
| **Medium** | [#7104](https://github.com/nearai/ironclaw/issues/7104) | Extractors reportam "no text found" como Failed vs Empty — informação incorreta ao modelo |
| **Medium** | [#7103](https://github.com/nearai/ironclaw/issues/7103) | Campo latency-trace calculado mesmo com tracing desabilitado |

### Correções em Andamento

- PR [#7163](https://github.com/nearai/ironclaw/pull/7163): Edit estrutural de docx/xlsx/pptx, render PDF de HTML, e fix da regressão #7109 — aborda parcialmente #6898 item 3.

---

## 6. Pedidos de Features e Sinais de Roadmap

### Épicos em Andamento (v1.1.0)

| Epic | Issue | Escopo |
|------|-------|--------|
| Error Recoverability | [#6284](https://github.com/nearai/ironclaw/issues/6284) | 100% error recovery contract |
| Reliable Skill Discovery | [#6565](https://github.com/nearai/ironclaw/issues/6565) | Discovery, routing e activation de skills |
| Self-Created Skills | [#6941](https://github.com/nearai/ironclaw/issues/6941) | Modelo cria e usa skills de alto payoff |
| IronHub Integration | [#6731](https://github.com/nearai/ironclaw/issues/6731) | Marketplace runtime de tools/skills assinadas |

### Novas Features (v1.2.0)

| Epic | Issue | Objetivo |
|------|-------|----------|
| Target Crate Architecture | [#3773](https://github.com/nearai/ironclaw/issues/3773) | 10 famílias de ownership sobre 7 camadas |
| Persistent Per-User Sandbox | [#6468](https://github.com/nearai/ironclaw/issues/6468) | Container persistente por usuário com tmux |
| Reliable Outbound Delivery | [#6801](https://github.com/nearai/ironclaw/issues/6801) | Channel-safe ops sem ambiguidade |
| Channel-First Onboarding | [#7044](https://github.com/nearai/ironclaw/issues/7044) | Reduzir fricção de adoção (blank slate → guidance) |
| AI Chat Configuration | [#7046](https://github.com/nearai/ironclaw/issues/7046) | Configurar tools/channels via chat |

### Melhorias Técnicas

- PR [#7120](https://github.com/nearai/ironclaw/pull/7120): Streaming de respostas cross-provider (Anthropic, Gemini, GitHub Copilot, Codex, Bedrock)
- PR [#7176](https://github.com/nearai/ironclaw/pull/7176): Normalização de schemas Gemini via auth paths
- PR [#7177](https://github.com/nearai/ironclaw/issues/7177): Busca schema-aware para deferred tool retrieval

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas

| Categoria | Evidência | Issue |
|-----------|-----------|-------|
| **Documentos binários** | write_file corrompe docx; regressão documentada | [#6898](https://github.com/nearai/ironclaw/issues/6898) |
| **Gestão de instâncias** | Deleção trava; re-login pula | [#6752](https://github.com/nearai/ironclaw/issues/6752) |
| **Pagamentos/Créditos** | Problemas recorrentes em flow; sugere service separado | [#7105](https://github.com/nearai/ironclaw/issues/7105) |
| **Onboarding** | Blank slate causa fricção; usuário não sabe o que fazer | [#7044](https://github.com/nearai/ironclaw/issues/7044) |
| **Migração v1.0→v1.1** | Upgrade rc.1→rc.1 não é lossless | [#7178](https://github.com/nearai/ironclaw/issues/7178) |

### Tendências de Satisfação

- **Alta demanda** por recovery inteligente de erros (#6284) — indica expectativa de agente resiliente
- **Preocupação operacional** com custos CI (#7137) — sinaliza necessidade de otimização de pipeline
- **Maturidade esperada** em skills (#6565, #6941) — demanda por automação avançada

---

## 8. Backlog que Merece Atenção

### Issues Sem Atividade Recente (Stale Signals)

| Issue | Idade | Prioridade | Risco |
|-------|-------|------------|-------|
| Epic: Target Crate Architecture [#3773](https://github.com/nearai/ironclaw/issues/3773) | ~75 dias sem comentários | v1.2.0 | Arquitetura base do projeto |
| Epic: Persistent Per-User Sandbox [#6468](https://github.com/nearai/ironclaw/issues/6468) | ~14 dias | v1.2.0 | Diferencial competitivo |
| Epic: Reliable Outbound Delivery [#6801](https://github.com/nearai/ironclaw/issues/6801) | ~8 dias | v1.2.0 | Corretude crítica de delivery |

### Issues Arquiteturais Críticos

| Issue | Escopo | Ação Recomendada |
|-------|--------|------------------|
| [#7151](https://github.com/nearai/ironclaw/issues/7151) | Composition budget gate contaminado por feature inflow | Revisão do mecanismo de baselining |
| [#7146](https://github.com/nearai/ironclaw/issues/7146) | 121 sites com `target = "..."` em tracing (deveria ser `target: "..."`) | Audit de subscriber filters |
| [#6947](https://github.com/nearai/ironclaw/issues/6947) | `classify-test-scope.sh` bucketiza `ironclaw_product` incorretamente | Fix antes de WS10 |

### Recomendação

O projeto demonstra **saúde robusta de desenvolvimento** com 50 PRs/50 issues atualizados, foco em épicos de qualidade (error recovery, architecture) e consolidação ativa de waves. Atenção especial para:
1. **#6898** — corrupção de binários requer priorização P0
2. **#3773** — arquitetura base precisa de movimento para v1.2.0
3. **#7137** — custo CI pode impactar contributors

---

*Relatório gerado automaticamente com base em dados do GitHub de 2026-08-05. Para informações detalhadas, consulte [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do Projeto CoPaw — 2026-08-05

## 1. Panorama do Dia

O projeto CoPaw (QwenPaw) apresenta **alta atividade** na data de hoje, com 25 issues e 48 PRs atualizados nas últimas 24 horas. A equipe demonstra foco intenso em **estabilidade e qualidade de release**, evidenced by множественные PRs de bug fix relacionados a timestamp handling, cron persistence e integração com canais. Dezenas de PRs foram merged ou fechados hoje, indicando um ritmo de desenvolvimento acelerado. Não houve release formal hoje, embora existam issues de verificação para a beta v2.1.0-beta.1. A comunidade está ativamente reportando issues, especialmente relacionados a canais (WeChat, Console) e features de memória.

---

## 2. Lançamentos

**Nenhuma release nova publicada nas últimas 24 horas.**

| Versão | Tipo | Status |
|--------|------|--------|
| v2.1.0-beta.1 | Beta | Em verificação ([#6656](https://github.com/agentscope-ai/QwenPaw/issues/6656)) |

A versão beta está em fase de *Installation Verification* com deadline de 2026-08-03 14:35 UTC. aguardando confirmação dos resultados.

---

## 3. Progresso do Projeto

### PRs Importantes Merged/Fechados Hoje

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #6628 | fix(scroll): use SystemMsg for compressed memory placeholder | Corrige HTTP 400 com DeepSeek ao usar context compression | [PR #6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) |
| #6309 | fix(chats): convert session timestamps across timezones | Corrige conversão de timezone para timestamps naive UTC | [PR #6309](https://github.com/agentscope-ai/QwenPaw/pull/6309) |
| #6685 | fix(timestamp): improve timestamp handling | Complementa #6301 com melhorias na função de conversão | [PR #6685](https://github.com/agentscope-ai/QwenPaw/pull/6685) |
| #6618 | fix(console): remove forced UTC timestamp normalization | Remove normalização forçada que afetava display de timezone | [PR #6618](https://github.com/agentscope-ai/QwenPaw/pull/6618) |
| #6678 | fix(ci): install Playwright Chromium | Corrige suite de integração que falhava em todas plataformas | [PR #6678](https://github.com/agentscope-ai/QwenPaw/pull/6678) |
| #6686 | test(integration): fix chrome contract mismatches | Adiciona marcadores p-tier ausentes na gate de PRs | [PR #6686](https://github.com/agentscope-ai/QwenPaw/pull/6686) |
| #6682 | fix(console): sync legacy max_iters | Mantém legacy max_iters sincronizado com loop.iteration | [PR #6682](https://github.com/agentscope-ai/QwenPaw/pull/6682) |
| #6679 | test(integration): align import-local with #6487 | Corrige caso de teste que falhava deterministicamente | [PR #6679](https://github.com/agentscope-ai/QwenPaw/pull/6679) |

### PRs Abertos em Review

| # | Título | Link |
|---|--------|------|
| #6615 | fix(agentscope): resolve compatibility and config loading issues | [PR #6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) |
| #6398 | feat: add reranker support for ReMe memory search (backend) | [PR #6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) |
| #6629 | fix(memory): trigger summarize on auto-compression | [PR #6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) |

---

## 4. Temas Quentes da Comunidade

### Issues com Maior Engajamento (comentários)

| # | Título | Comentários | Tipo | Link |
|---|--------|-------------|------|------|
| #6649 | Support GPT-5.6 prompt caching parameters in Responses API | **13** | Enhancement | [Issue #6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) |
| #6655 | Console channel approval prompts not rendered → silent timeout | **12** | Bug/Question | [Issue #6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) |
| #6643 | Task outputs should use per-task directories instead of media/ | **6** | Enhancement | [Issue #6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) |
| #6667 | DeepSeek thinking mode fails in multi-turn (reasoning_content missing) | **5** | Bug | [Issue #6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) |
| #6642 | File drag-drop should read original path instead of upload/download | **5** | Enhancement | [Issue #6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) |

### Análise das Demandas

**1. GPT-5.6 Prompt Caching (#6649) — 13 comentários**
Demanda prioritária para suportar parâmetros de prompt caching (`prompt_cache_key`, `prompt_cache_options`, `prompt_cache_breakpoint`) na Responses API. Beneficiaria agentes multi-turn ao reutilizar cache de prefixo, reduzindo latência e custo. Componente Core/Backend afetado.

**2. Approval Prompts em Canais Alternativos (#6655, #6695) — ~12+ comentários**
Dois issues separados mas relacionados: o canal Console não renderiza prompts de aprovação de segurança, causando timeouts silenciosos de 300s quando agentes executam comandos arriscados. No WeChat, a situação é ainda pior — aprovação é impossível se o usuário usa exclusivamente esse canal. **Severidade: Alta** — quebra fluxo de segurança do produto.

**3. Estrutura de Diretórios de Output (#6643) — 6 comentários**
Usuários reclamam que outputs de tarefas se acumulam em `media/`, dificultando organização. Feature request para criar diretórios por tarefa.

**4. DeepSeek Thinking Mode (#6667) — 5 comentários**
Bug onde `reasoning_content` desaparece após o formatter OpenAI pular o ThinkingBlock, causando falha em conversas multi-turn.

---

## 5. Bugs e Estabilidade

### Bugs Reportados Hoje (por severidade)

#### 🔴 Críticos (impactam funcionalidades core)

| # | Título | Descrição | Link |
|---|--------|-----------|------|
| #6695 | WeChat: approval prompts unreachable (console-only dialog) | Usuários WeChat-only não podem aprovar comandos bloqueados — timeout de 5min auto-deny | [Issue #6695](https://github.com/agentscope-ai/QwenPaw/issues/6695) |
| #6696 | WeChat: context_token consumido pelo typing indicator → replies rejected | Token one-time usado para typing E envio causa ret=-2 e indicator travado | [Issue #6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) |
| #6683 | App Center: plugin install fails — utils.env module conflict | `No module named 'utils.env'; 'utils' is not a package` ao instalar qwenpaw-creator | [Issue #6683](https://github.com/agentscope-ai/QwenPaw/issues/6683) |

#### 🟠 Altos (afetam experiência significativa)

| # | Título | Descrição | Link |
|---|--------|-----------|------|
| #6690 | cron pause/resume não persiste enabled state | Reinício perde estado — [PR #6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) já open como fix | [Issue #6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) |
| #6687 | OpenRouter multimodal probe sobrescreve capabilities com false | Modelo multimodal reportando image/video support como false incorretamente | [Issue #6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) |
| #6667 | DeepSeek thinking mode falha em multi-turn | reasoning_content ausente após OpenAI formatter pular ThinkingBlock | [Issue #6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) |
| #6624 | Auto-compression não dispara summarize_when_compact | Scroll não ativa flow de memória; /compact manual funciona | [Issue #6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) |
| #6374 | token usage persistence não retenta após falha de escrita | `_dirty` limpo antes de save_data_sync; OSError ignorado silenciosamente | [Issue #6374](https://github.com/agentscope-ai/QwenPaw/issues/6374) |

#### 🟡 Medios (AFETAM UI/funcionalidades específicas)

| # | Título | Descrição | Link |
|---|--------|-----------|------|
| #6673 | Frontend conversation window display issue | Problema visual na janela de conversa | [Issue #6673](https://github.com/agentscope-ai/QwenPaw/issues/6673) |
| #6633 | Skills/Skill Pool pages falham em redes lentas | Payload MB-level não comprimido vs timeout fixo de 30s | [Issue #6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) |
| #5906 | 防重复功能异常触发 | Doom loop após 6 repetições consecutivas mesmo sem repetição real | [Issue #5906](https://github.com/agentscope-ai/QwenPaw/issues/5906) |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Novas Features Solicitadas

| # | Título | Impacto | Link |
|---|--------|---------|------|
| #6649 | Support GPT-5.6 prompt caching parameters | Core/Backend | [Issue #6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) |
| #6684 | Adicionar retry functionality para canais | Channels (Matrix, etc.) | [Issue #6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) |
| #6490 | Add Volcengine Agent Plan e Xiaomi MiMo como providers built-in | Providers | [Issue #6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) |
| #6694 | Adicionar global rules (tipo .agent/.claude) | Sistema de prompts | [Issue #6694](https://github.com/agentscope-ai/QwenPaw/issues/6694) |
| #6643 | Task outputs em diretórios por tarefa | Storage/Organização | [Issue #6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) |
| #6455 | Múltiplos modelos simultâneos em um agent | Core/Backend | [Issue #6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) |
| #6674 | Melhorar handling de rate limiting (free-tier models) | Resiliência | [Issue #6674](https://github.com/agentscope-ai/QwenPaw/issues/6674) |
| #4947 | ADD Kanban Board for Playground Multi-agents | Console/UI | [Issue #4947](https://github.com/agentscope-ai/QwenPaw/issues/4947) |

### Features em Desenvolvimento (PRs abertos)

| # | Título | Progresso | Link |
|---|--------|-----------|------|
| #6398 | Reranker support para ReMe memory search | Under Review | [PR #6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) |
| #6689 | Retry transient startup failures (channels) | PR aberto | [PR #6689](https://github.com/agentscope-ai/QwenPaw/pull/6689) |
| #6492 | Preserve uploaded filenames in hints | PR aberto | [PR #6492](https://github.com/agentscope-ai/QwenPaw/pull/6492) |

### Sinais de Roadmap

1. **Suporte a novos providers**: Integração com Volcengine e Xiaomi MiMo indica expansão de ecossistema de modelos
2. **Melhorias multi-modelo**: Demanda por executar múltiplos modelos simultaneamente (#6455) sugere feature planejada
3. **Resiliência de rate limiting**: Foco em melhorar experiência com modelos free-tier (#6674)
4. **Sistema de memória avançado**: Reranker para busca em memória (#6398) + trigger de summarize em auto-compression (#6629)

---

## 7. Resumo de Feedback dos Usuários

### Dores Reais Identificadas

| Categoria | Descrição | Issues Relacionados |
|-----------|-----------|---------------------|
| **Aprovações de segurança inacessíveis** | Usuários não conseguem ver/aprovar comandos bloqueados em canais Console e WeChat — processo completamente invisível | [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655), [#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695) |
| **Organização de arquivos confusa** | Outputs acumulam em `media/` sem estrutura; uploads desnecessários para drag-drop de arquivos locais | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643), [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) |
| **Integração com canais instável** | Canais custom (Matrix, WeChat) falham no startup sem retry; reinicialização manual necessária | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684), [#6689](https://github.com/agentscope-ai/QwenPaw/pull/6689) |
| **Persistência de configurações** | Estados de cron e preferências não sobrevivem reinicializações | [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) |
| **Rate limiting em modelos free-tier** | deepseek-v4-flash constantemente limitado, causando interrupções | [#6674](https://github.com/agentscope-ai/QwenPaw/issues/6674) |
| **Custo/latência de API** | Usuários querem prompt caching para reduzir gastos em modelos avançados | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) |

### Cenários de Uso Destacados

- **Agente pessoal desktop**: Usuários esperam experiência fluida com arquivos locais e múltiplos modelos
- **Multi-canal**: Uso simultâneo de WeChat, Console e outros canais sem fricção
- **Memória persistente**: Flow de memória deve funcionar tanto em compressão manual quanto automática

### Satisfação/Insatisfação

| Aspecto | Sentimento | Observação |
|---------|------------|------------|
| Core functionality | 🟢 Positivo | Features de agent funcionam bem; memória e loop estável |
| Integração de canais | 🔴 Negativo | Múltiplos bugs reportados; retry ausente |
| UX de segurança | 🔴 Negativo | Aprovações invisíveis em vários canais |
| Performance free

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do Projeto ZeroClaw — 2026-08-05

## 1. Panorama do dia

ZeroClaw apresenta **alta atividade comunitária** com 50 issues e 50 PRs atualizados nas últimas 24h. O projeto está em intenso ciclo de RFCs (Requests for Comments), com múltiplas propostas de arquitetura de alto impacto em discussão. **Dois bugs de severidade S0** relacionados a segurança de dados e acesso cross-agent foram reportados e demandam atenção imediata. A base de código continua madura com foco em segurança, observabilidade e integração multi-canal. **Nenhuma release foi publicada** nas últimas 24h.

---

## 2. Lançamentos

**Nenhuma release publicada nas últimas 24h.**

O projeto mantém um pipeline ativo de PRs aguardando merge, sugerindo que uma release pode estar próxima.

---

## 3. Progresso do Projeto

### PRs fechados/merged recentemente (2 total)

| PR | Descrição | Impacto |
|----|-----------|---------|
| [#9625](https://github.com/zeroclaw-labs/zeroclaw/pull/9625) | `fix(zerocode): allow selection drags from side whitespace` | Correção UX no terminal ZeroCode; restaura gestos de seleção normais |

### PRs em destaque em revisão ativa

| PR | Descrição | Status | Tamanho |
|----|-----------|--------|---------|
| [#9604](https://github.com/zeroclaw-labs/zeroclaw/pull/9604) | `fix(gateway): enforce Linq webhook alias ownership` | p1, security | S |
| [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) | `fix(channels): require sender authorization for Bluesky and Reddit` | p1, security | M |
| [#9319](https://github.com/zeroclaw-labs/zeroclaw/pull/9319) | `refactor(runtime): seal the engine tool registry as ScopedToolRegistry` | refactor architecture | XL |
| [#9352](https://github.com/zeroclaw-labs/zeroclaw/pull/9352) | `feat(observability): add cross-turn conversation correlation to OTel export` | observability | XL |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | `feat(providers): add native Hailo-Ollama support` | provider | XL |

---

## 4. Temas Quentes da Comunidade

### Issues com maior engajamento (por comentários)

| Issue | Título | Comentários | Tags |
|-------|--------|-------------|------|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC: ZeroClaw Chat Completions profile | 16 | gateway, runtime, architecture, p2, RFC |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | RFC: Goal mode v1 — bounded foreground Matrix work | 14 | enhancement, agent, p2, RFC |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | RFC: Add per-execution confirmation tier for high-risk shell commands | 13 | security, p1, RFC |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified attachment architecture for web chat and channels | 12 | channel, gateway, p2, RFC |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC: Decouple memory lifecycle policy from storage backends | 10 | memory, gateway, p2, RFC |

### Análise dos temas predominantes

1. **Interoperabilidade com OpenAI**: A RFC #8603 busca adicionar suporte ao protocolo Chat Completions, permitindo integração nativa com Open WebUI, LobeChat, Continue.dev, LangChain e outros clientes.

2. **Segurança em camadas**: Múltiplas RFCs (#7155, #7141, #7142, #6971) atacam o problema de permissionamento, autenticação e isolamento — indicando prioridade estratégica.

3. **Arquitetura de memória persistente**: O tracker #8891 coordena 18 itens para paridade de memória cross-session, com 3 issues e 15 PRs em andamento.

4. **Sessões e transports**: RFCs #9487 e #9600 abordam ownership de sessões e ordenação de camadas — trabalho arquitetural crítico em andamento.

---

## 5. Bugs e Estabilidade

### 🛑 Bugs Críticos (S0/S1) — ATENÇÃO MÁXIMA

| Issue | Severidade | Descrição | Impacto |
|-------|------------|-----------|---------|
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | **S0** | Knowledge graph sem atribuição por agente — qualquer agente pode ler/mutar dados de outro | **Risco de segurança e perda de dados** |
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | **S0** | Ferramentas de sessão (sessions_list/history/send, discord_search) sem ownership scoping | **Risco de segurança** |

### ⚠️ Bugs Prioritários (p1) em Andamento

| Issue/PR | Componente | Descrição |
|----------|------------|-----------|
| [#9604](https://github.com/zeroclaw-labs/zeroclaw/pull/9604) | gateway | Linq webhook alias ownership não enforced |
| [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) | channels | Bluesky/Reddit não consultam peer_groups |
| [#9427](https://github.com/zeroclaw-labs/zeroclaw/pull/9427) | channels | LINE group messages sem autorização de sender |
| [#9362](https://github.com/zeroclaw-labs/zeroclaw/pull/9362) | browser | Validação de path de screenshot contra workspace policy ausente (arbitrary file write) |
| [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) | security | Command audit logging default estava enabled (inseguro) |
| [#9350](https://github.com/zeroclaw-labs/zeroclaw/pull/9350) | cron | CLI sem flags de delivery target |

### 🔧 Correções Recentes Merged

| PR | Correção |
|----|----------|
| [#9625](https://github.com/zeroclaw-labs/zeroclaw/pull/9625) | Seleção de texto no ZeroCode agora funciona com arrastos a partir de whitespace lateral |

---

## 6. Pedidos de Features e Sinais de Roadmap

### Features em RFC Ativo (alta probabilidade de aceite)

| RFC | Descrição | Prioridade | Sinais de Roadmap |
|-----|-----------|------------|-------------------|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | Chat Completions profile (OpenAI compatibility) | p2 | Integração com ecossistema externo |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | Goal mode v1 — trabalho Matrix com limite | p2 | Agentes multi-turn duráveis |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | Per-execution confirmation (allow/ask/deny) | p1 | Segurança operacional |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | Unified attachment architecture | p2 | Consolidação de canais |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | Per-model capability & context-window config | p1 | Configuração granular de modelos |
| [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | Mixture-of-Agents (MoA) virtual provider | p2 | **CLOSED** — implementação em progresso |

### Features Merged/Closed

| PR | Feature |
|----|---------|
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | Suporte nativo Hailo-Ollama |
| [#9352](https://github.com/zeroclaw-labs/zeroclaw/pull/9352) | Cross-turn conversation correlation no OTel |
| [#9353](https://github.com/zeroclaw-labs/zeroclaw/pull/9353) | Múltiplas conversas simultâneas por agente no web chat |
| [#9319](https://github.com/zeroclaw-labs/zeroclaw/pull/9319) | ScopedToolRegistry (refatoração de tools) |

---

## 7. Resumo de Feedback dos Usuários

### Dores Identificadas (via issues e RFCs)

| Dor | Evidência | Impacto |
|-----|-----------|---------|
| **Segurança de dados cross-agent** | Issues #9647, #9646 — conhecimento e sessões são globais | Crítico; múltiplos agentes podem acessar dados uns dos outros |
| **Complexidade de configuração** | RFCs sobre memory lifecycle, auth pluggable, sandbox policy | Curva de aprendizado elevada |
| **Incompatibilidade com clientes OpenAI** | Issue #8603 — clientes OpenAI não conseguem conversar | Limita adoção em ecossistema existente |
| **Fragilidade em canais sociais** | PRs #9428, #9427 — Bluesky, Reddit, LINE sem auth | Risco de spam/abuso em integrações |
| **Contexto insuficiente** | PR #9504 — agente fica "silencioso" em context exhaustion | UX confusa para usuários finais |

### Cenários de Uso Observados

1. **Multi-agente com isolamento**: Usuários precisam de agentes que não vazem dados entre si — atualmentebroken (#9647, #9646)
2. **Integração com tooling existente**: Clientes OpenAI-compatíveis (Open WebUI, LangChain) querem usar ZeroClaw — RFC #8603 endereça
3. **Operações críticas com aprovação**: Ambientes enterprise precisam de approval workflow — RFC #7155 em revisão
4. **Observabilidade em produção**: Necessidade de correlacionar turns em traces — PR #9352 shipped

### Indicadores de Satisfação

- Atividade comunitária alta (50 issues + 50 PRs/24h)
- RFCs bem estruturadas com revisão colaborativa
- Múltiplas contribuições de contributors externos

---

## 8. Backlog que Merece Atenção

### Issues sem resposta/há muito tempo sem activity

| Issue | Idade | Título | Prioridade | Motivo da preocupação |
|-------|-------|--------|------------|----------------------|
| [#6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) | ~3 meses | RFC: host-architecture policy for emulated installs | p3 | Baixa prioridade, mas sem movimento |
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | ~1.5 meses | RFC: Replace React/Vite with Rust→Wasm | p3 | Mudança arquitetural ambiciosa, sem updates |
| [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | ~4 meses | Deterministic precondition gates para cron jobs | p2 | Feature antiga, accepted mas sem implementation |

### RFCs Aguardando Decisão do Maintainer

| Issue | Título | Tempo em queue |
|-------|--------|----------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue for RFCs | ~1 mês |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | Per-model capability config | ~2 meses |
| [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) | Unify slash-command registries | ~1.5 meses |

### PRs Blocked/Stalled

| PR | Status | Motivo |
|----|--------|--------|
| [#9379](https://github.com/zeroclaw-labs/zeroclaw/pull/9379) | **blocked** | `fix(runtime): charge image markers in context-token estimate` — aguardando desbloqueio |

---

## Métricas Resumidas

| Métrica | Valor | Tendência |
|---------|-------|-----------|
| Issues ativas | 48 | Estável |
| PRs abertos | 48 | Estável |
| Bugs S0 ativos | 2 | 🔴 Alerta |
| RFCs em discussão | 20+ | Alta atividade |
| Releases (24h) | 0 | Sem mudança |
| PRs merged/closed (24h) | 2 | Baixo |

---

*Relatório gerado em 2026-08-05 com base em dados do GitHub de zeroclaw-labs/zeroclaw*

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*