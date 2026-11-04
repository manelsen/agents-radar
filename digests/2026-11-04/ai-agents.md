# Resumo diário do ecossistema de agentes de IA 2026-11-04

> Issues: 0 | PRs: 1 | Projetos cobertos: 7 | Gerado em: 2026-11-04 12:30 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do projeto NullClaw — 2026-11-04

## 1. Panorama do dia

A atividade do NullClaw nas últimas 24 horas foi baixa, com **nenhuma issue atualizada** e **nenhuma release publicada**. O principal movimento foi a abertura de **1 pull request**, ainda em estado **aberto**,分数线 propondo um novo provedor de busca web. O único item listado na visão geral é o PR **#1091**, que adiciona o provedor **Keenable** à ferramenta `web_search`. O ritmo de manutenção é limitado, e não há sinais de多条、餐饮 congeladas ou operações em larga escala nesta janela.

## 2. Lançamentos

**Nenhuma nova release foi identificada nas últimas 24 horas.**

Consequentemente, não há:

- Novas versões disponíveis;
- Breaking changes announceados;
- Notas de migração;
- Atualizações oficiais de release notes.

A referência disponível para acompanhamento é o repositório do projeto: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).

## 3. Progresso do projeto

### Pull request em destaque

- **PR #1091 — [OPEN] feat(web_search): add Keenable provider (no API key required)**  
  Autor: **KGKallasmaa**  
  Criado e atualizado em: **2026-11-03**  
  Link: [github.com/nullclaw/nullclaw/pull/1091](https://github.com/nullclaw/nullclaw/pull/1091)

A proposta adiciona o arquivo `src/tools/web_search_providers/keenable.zig` e amplia as opções de `web_search` com o provedor **Keenable**.

Comportamento descrito no resumo do PR:

- **Sem API key:** utiliza o endpoint público gratuito `POST https://api.keenable.ai/v1/search/public`;
- **Com `KEENABLE_API_KEY` configurada:** utiliza `POST /v1/search`;
- O PR está **aberto**, portanto a funcionalidade ainda não está confirmada como integrada ao branch principal.

### Avaliação

O avanço representa uma extensão incremental da infraestrutura de busca web, com foco em maior acessibilidade: o provedor pode ser utilizado sem credencial por meio de um endpoint público. A implementação ainda requer revisão de código, validação de compatibilidade, testes e decisão sobre manutenção do endpoint gratuito antes de representar uma melhoria consolidada do produto.

## 4.Temas quentes da comunidade

Não há issues recentes, comentários ou reações fornecidos para comparison. O único item de destaque é:

- **[PR #1091 — Keenable provider para `web_search`](https://github.com/nullclaw/nullclaw/pull/1091)**  
  O tema levantado é a busca web sem exigência de API key, com suporte opcional à autenticação. O PR não apresenta, nos dados fornecidos, contagem de comentários ou reações (`Comentários: undefined`, `👍: 0`), portanto não é possível identificar forte engajamento comunitário.

### Demanda subjacente

A iniciativa indica interesse em:

- Reduzir a fricção de configuração de ferramentas de busca;
- Permitir uso sem credenciais;
- Manter alternativas para integrações que dependem de serviços pagos ou autenticados;
- Ampliar a Flexibility of the `web_search` tool.

## 5. Bugs e estabilidade

**Nenhum bug, crash ou regressão foi reportado nas últimas 24 horas.**

A ausência de issues atualizadas reduz o risco de problemas operacionais newly identificados, mas também limita a visibilidade sobre estabilidade, testes de regressão e incidents em produção. O único risco observável está na adição de uma nova integração externa:

- Dependência da disponibilidade do serviço Keenable;
- Possível mudança de comportamento ou limites do endpoint público;
- Necessidade de validar tratamento de erros, timeouts e respostas inesperadas;
- Possível divergência entre o modo anônimo e o autenticado.

O repositório correspondente é [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw).

## 6. Pedidos de features e sinais de roadmap

### Feature em avaliação

- **Novo provedor Keenable para `web_search`**  
  PR: [#1091](https://github.com/nullclaw/nullclaw/pull/1091)  
  Status: **Aberto**  
  Sinal de roadmap: adição de mais um provedor de busca, com opção de uso sem API key e fallback para autenticação quando aplicável.

### O que pode entrar na próxima versão

Com base exclusivamente nos dados fornecidos, o candidato mais provável para a próxima versão é a integração do Keenable, caso o PR seja aprovado. Para isso, seriam desejáveis:

1. Testes cobrindo o modo público e o modo com `KEENABLE_API_KEY`;
2. Tratamento explícito de erros HTTP e indisponibilidade do serviço;
3. Documentação de configuração e limitações;
4. Verificação de compatibilidade com a interface atual de `web_search`;
5. Avaliação de segurança e privacidade para o endpoint público.

Não há outros pedidos de features ou roadmaps formais identificados na janela analisada.

## 7. Resumo de feedback dos usuários

Não há feedback textual de usuários disponível, pois não foram atualizadas issues e o PR listado não apresenta comentários ou reações registradas.

### Sinais indiretos

- O PR [#1091](https://github.com/nullclaw/nullclaw/pull/1091) propone uma redução de dependências de configuração, especialmente para usuários que não possuem uma API key;
- A implementação pode facilitarperimentais, agentes pessoais e cenários de uso occacionais de busca;
- A ausência de Validateção community ou de issues relacionadas impede medir satisfação, falhas percebidas ou demanda quantitativa;
- O status aberto indica que afeature ainda está em fase de proposta, não uma melhoria disponível para a comunidade.

## 8. Backlog que merece atenção

### PR #1091 — Keenable provider

- **Link:** [github.com/nullclaw/nullclaw/pull/1091](https://github.com/nullclaw/nullclaw/pull/1091)
- **Estado:** Aberto desde 2026-11-03
- **Prioridade sugerida:** Média
- **Motivo:** é a única mudança técnica relevante observada e pode permanecer aguardando revisão por se tratar de uma integração externa.

### Lacunas de acompanhamento

Não foram fornecidos issues antigas ou PRs sem resposta por longos períodos, portanto não é possível identificar com segurança itens de backlog histórico. O acompanhamento recomendado inclui:

- Solicitar revisão do PR #1091;
- Confirmar testes e documentação;
- Verificar se o endpoint público possui limites ou políticas de uso Adequadas;
- Registrar o PR no backlog até decisão de merge ou fechamento.

## Conclusão

A saúde operacional observada em 2026-11-04 é **estável, mas de baixa atividade**. Não há releases, issues ou regressões recentes, enquanto a iniciativa relevante do dia é a possível inclusão do provedor Keenable em `web_search`. O PR [#1091](https://github.com/nullclaw/nullclaw/pull/1091) tem potencial para melhorar a acessibilidade da ferramenta, mas permanece aberto e sem validação pública suficiente.

---

## Comparação entre projetos do ecossistema

# Relatório comparativo do ecossistema open source de agentes de IA — 04/11/2026

## 1. Visão geral do ecossistema

O ecossistema apresentou forte heterogeneidade: Hermes Agent, ZeroClaw, NanoBot e CoPaw concentraram atividade intensa, enquanto NullClaw, PicoClaw e IronClaw registraram baixo volume. O tema dominante não é adicionar novas capacidades, mas tornar agentes long-running confiáveis — persistência de estado, cancelamento, checkpoints, observabilidade e isolamento de permissões. A segurança também virou prioridade transversal, com falhas em hooks de aprovação, autorização revogada, escopo de agentes delegado, identidade entre bots e manutenção de privilégios em jobs agendados. A成熟度 do mercado está, portanto, em uma transição de “demonstração de recursos” para operação contínua, multiusuário e self-hosted.

---

## 2. Comparação de atividade

| Projeto | Issues atualizadas | PRs atualizadas | Releases | Avaliação de saúde |
|---|---:|---:|---:|---|
| **NullClaw** | 0 | 1 | 0 | **Estável, baixa atividade.** Único avanço é o PR aberto para provider Keenable em `web_search`; sem validação comunitária suficiente. |
| **NanoBot** | 5 | 21 | 0 | **Boa**, com alta vazão de correções e testes. Risco principal: conflitos de integração, implementações concorrentes de checkpoints e PRs críticos ainda abertos. |
| **Hermes Agent** | 50 | 50 | 1 (`v0.22.7`) | **Mista/bem movimentada.** Release recente e progresso técnico substancial, mas alta carga de integração, regressões de gateway/sessões e falhas de segurança abertas. |
| **PicoClaw** | 4 | 1 | 0 | **Moderada, com risco elevado.** Baixa atividade, mas há dois riscos sérios: bypass de aprovação no reload e consumo descontrolado de tokens no smart routing. |
| **IronClaw** | 0 | 2 | 0 | **Estável, porém pouco informativo.** Apenas atualizações automatizadas de dependências, sem entrega funcional ou feedback humano recente. |
| **CoPaw** | 9 | 50 | 0 | **Média-alha, em beta.** Grande atividade de estabilização, porém com bloqueadores de startup, inconsistências de configuração e falhas de UX. |
| **ZeroClaw** | 15 | 50 | 0 | **Boa na atividade, com risco de integração.** Grande foco em segurança, identidade, sessões e gateway, mas 48 PRs abertas indicam fila elevada. |

**Leitura comparativa:** a release de Hermes Agent é o único marco formal do dia. NanoBot e CoPaw demonstram maior intensidade de correção e validação; ZeroClaw combina escala com complexidade; PicoClaw e NullClaw precisam demonstrar que as mudanças propostas foram efetivamente consolidadas.

---

## 3. Posicionamento do projeto principal

### NullClaw

**Vantagens frente aos pares**

- Arquitetura e implementação concentradas em **Zig**, ocupando um espaço diferente do ecossistema predominantemente marcado por Python, TypeScript e Rust.
- Escopo técnico enxuto: a mudança observável limita-se a ampliar os provedores de `web_search`, com alternativa sem API key.
- Ausência de incidentes recentes, regressões reportadas ou release urgente sugere uma base estável no recorte analisado.

**Diferenças técnicas**

- O NullClaw opera como plataforma de agente pessoal com foco modular em ferramentas, enquanto os pares competitors estão mais于心amente em gateways, WebUIs, múltiplos canais, memória multiagente e automação de longa duração.
- O provider Keenable introduz dois modos: endpoint público sem credencial e endpoint autenticado via `KEENABLE_API_KEY`.
- A proposta ainda é incremental e aberta; não equivale a uma mudança de plataforma nem a uma release.

**Tamanho e maturidade da comunidade**

- **Sinais de comunidade:** essencialmente ausentes no dia — nenhuma issue atualizada, nenhuma reação e nenhum comentário no PR em destaque.
- **Atividade:** muito abaixo de Hermes Agent, ZeroClaw, NanoBot e CoPaw.
- **Maturidade:** o projeto aparenta estabilidade técnica, mas a amostra de atividade é insuficiente para avaliar velocidade de manutenção, responsividade ou confiança da comunidade.

**Conclusão de posicionamento:** o NullClaw não lidera o dia em volume, features ou sinais de adoção. Sua vantagem comparativa está na diferenciação de stack e simplicidade. Para ser Competitive no ecossistema, precisa converter o provider Keenable em uma mudança testada e documentada e demonstrar um ciclo regular de releases e feedback.

---

## 4. Focos técnicos compartilhados

### 4.1 Confiabilidade de execuções longas

O problema mais replicado é a consistência do estado durante operações longas:

- **NanoBot:** cancelamento de ferramentas paralelas, checkpoints intermediários, recuperação após compactação e retries.
- **Hermes Agent:** portabilidade e retomada de sessões Desktop, sessões remotas e gateway unificado.
- **ZeroClaw:** histórico append-only, recuperação de renomeações e sessões duráveis.
- **PicoClaw:** necessidade de circuit breakers para impedir loops de smart routing.
- **CoPaw:** sessões por execução de cron para controlar crescimento de histórico.

**Conclusão:** checkpointing, cancelamento atômico e recuperação idempotente são requisitos básicos de produção, não diferenciais opcionais.

### 4.2 Segurança e controle de privilégios

Vários projetos relatam problemas em fronteiras de autorização:

- **PicoClaw:** reload falha e mantém ferramentas sem o hook de aprovação.
- **Hermes Agent:** cron perde `enabled_toolsets: []`; identidades de peer bots são tratadas de forma inconsistente; negativas de autorização podem aparecer como sucesso.
- **ZeroClaw:** escopo de memória delegada e revogação de ownership em operações enfileiradas.
- **CoPaw:** proteção de memória para shell e requisitos de aprovação.
- **NanoBot:** ferramentas proibidas continuavam registradas para subagentes.

**Necessidade transversal:** autorização deve ser evaluated no ponto de uso, com fail-closed, revogação efetiva e separação explícita entre identidade do agente principal e agentes filhos.

### 4.3 Observabilidade e UX operacional

A falta de visibilidade sobre o que realmente ocorreu aparece repetidamente:

- NanoBot passou a refletir uso de contexto e progresso durante o turno.
- Hermes Agent busca corrigir a indicação do fallback efetivamente usado.
- ZeroClaw propõe histórico append-only de chamadas, ferramentas, aprovações e trocas de modelo.
- CoPaw busca feedback visual em turnos longos.
- PicoClaw precisa limitar loops e custos para evitar behaviour imprevisível.

**Padrão:** estado efetivo, modelo used, progresso, custo e fallback precisam ser visíveis na interface, não apenas inferidos em logs.

### 4.4 Integração com múltiplos canais

Telegram, Matrix, DingTalk, WhatsApp, Slack, QQ, Discord, Matrix e canais corporativos aparecem como surfaces de produto. As atividades convergem em:

- contexto correto de threads e replies;
- preservação de captions e mídia;
- transcrição de voz;
- Markdown em respostas longas;
- funcionamento atrás de proxies;
- gateways e endpoints self-hosted.

O diferencial deixou de ser “conectar a um mensageiro” e passou a ser manter paridade semântica e operacional entre canais.

### 4.5 Gestão de recursos

- PicoClaw: 222 chamadas de LLM e 13,1 milhões de tokens de entrada em cerca de nove minutos.
- ZeroClaw: limites agregados para stores de plugins e processos órfãos no Windows.
- CoPaw: limite opcional de memória para comandos shell.
- Hermes Agent: timeout, retries e classificação de falhas.
- NanoBot: controle de concorrência e término de ferramentas irmãs.

**Necessidade transversal:** budgets explícitos de tokens, iterações, memória, subprocessos, tempo e custo devem fazer parte do runtime.

---

## 5. Análise de diferenciação

| Projeto | Foco principal | Público-alvo provável | Arquitetura e diferencial |
|---|---|---|---|
| **NullClaw** | Assistente pessoal compacto e modular | Usuários和技术 enthusiasts que valorizam simplicidade e controle local | Implementação em Zig; ferramentas configuráveis; menor superfície de integração que os plataformas web/multi-channel |
| **NanoBot** | Runtime confiável para goals e agentes | Desenvolvedores constructing automações e协作 multiagente | Checkpoints, recovery, filesystem persistente, plugins, WebUI e gateway |
| **Hermes Agent** | Plataforma pessoal multi-surface e multi-channel | Usuários avançados, equipes e deployments self-hosted | Gateway unificado, Desktop/CLI/TUI, Slack/Telegram/Discord, cron, plugins, memória e autorização entre agentes |
| **PicoClaw** | Assistente pessoal mobile/web enxuto | Usuários de launcher, SMS/iMessage e busca por provider economics | Smart routing, múltiplos canais e foco em custo; menor maturidade operacional |
| **IronClaw** | Runtime próximo de infraestrutura NEAR | Usuários institucionais com运维 own/control | Rust e tooling interno; foco atual em manutenção e supply chain |
| **CoPaw** | Console/desktop multi-channel e ecosystem de plugins | Equipes e usuários de assistentes em canais corporativos | Beta 2.3, Matrix/DingTalk, Hub Local, modelos locais, plugins e temas |
| **ZeroClaw** | Plataforma self-hosted de identidade, sessão e ferramentas | Operadores de agentes multiagente e implantações岔 controladas | Gateway/dashboard, OIDC, pairing, sessions append-only, plugins, voz e broadcasting/multicanais |

### Diferenças mais relevantes

1. **NanoBot e ZeroClaw** estão mais próximos de plataformas operacionais: checkpoints, sessões, gateway, plugins, memória e recovery.
2. **Hermes Agent** é o mais abrangente em superfícies de produto — CLI, Desktop, dashboard, bots, cron, plugins e cloud — mas essa amplitude justifica a elevada carga de regressões.
3. **CoPaw** se diferencia pelo ecossistema de plugins, temas, canais corporativos, Hub Local e modelos locais, mas a beta ainda está em estabilização.
4. **PicoClaw** aposta em leveza e novos canais, porém apresenta deficits críticos em guardrails de custo e aprovação.
5. **IronClaw** tem diferenciação de ecossistema e stack, mas a janela analisada mostra apenas maintenance automatizada.
6. **NullClaw** é o mais simples e o menosGHUM密集o; sua vantagem é clareza e stack diferenciada, não escala de多功能idade.

---

## 6. Tração e maturidade da comunidade

### Iterando muito rápido

- **Hermes Agent:** 50 issues e 50 PRs, além da `v0.22.7`, que consolidou aproximadamente 174 PRs. A release demonstra capacidade de integração em larga escala, mas as sessões, o gateway e a autorização ainda geram的话题 estruturais.
- **ZeroClaw:** 50 PRs e 15 issues, com 48 PRs ainda abertas. A atividade é alta e tecnicamente substancial, porém a fila sugere dependência de revisão e risco de atraso.
- **CoPaw:** 50 PRs e 9 issues, com 14 PRs fechadas/merged. É o projeto que mais demonstra correções voltadas para release, mas a beta 2.3 ainda apresenta falhas de instalação, configuração e desktop.
- **NanoBot:** 21 PRs em 24 horas, com 10 abertas e 11 fechadas. É o melhor exemplo de iteração focada em confiabilidade, embora os conflitos e duplicações de checkpoint devam ser resolvidos.

### Consolidando qualidade

- **NullClaw:** mudança pequena e de baixo risco, porém ainda em fase de proposta. O processo de validação parece prudente, mas existe pouca evidência de revisão.
- **IronClaw:** apenas atualizações de dependências, sem features ou incidentes; parece estar em um ciclo conservador de manutenção.
- **PicoClaw:** a triagem por `stale` indica redução de manutenção, embora existam riscos críticos ainda abertos.

### Avaliação de maturidade

- **Hermes Agent** apresenta a maior maturidade de entrega e cobertura de produto.
- **NanoBot** apresenta maturidade técnica em runtime e tratamento de falhas, mas backlog de integração.
- **CoPaw** e **ZeroClaw** possuem atividade agressiva e boa direção arquitetural, porém ainda em fase beta/consolidação.
- **PicoClaw**, **NullClaw** e **IronClaw** precisam de mais sinais de manutenção recorrente e feedback humano para sustentar uma avaliação mais forte.

---

## 7. Sinais de tendência

### 7.1 O mercado converge para agentes como processos duráveis

Goals, cron, sessões, plugins, automações e collaboration increasingly exigem execution beyond a simple request/response. O valor está migrando da capacidade de chamar ferramentas para a capacidade de **retomar, auditar, cancelar e recover**.

### 7.2 Segurança por.identity e escopo

Autenticação OIDC, pairing, peer identities, delegated ownership e tool approvals mostram que identidade deixe de ser detalhe de canal. Em plataformas multiagente, cada agente precisa ter principal, credenciais, memória, permissões e provenance próprios.

### 7.3 Self-hosted e enterprise deployment

Gateway customizado, Telegram com base URL e headers, Matrix, OIDC, desktop remoto, proxies e Docker indicam crescimento de implantações controladas por organizations. Integração self-hosted está virando uma diferenciação central, não apenas uma opção avançada.

### 7.4 Multimodalidade e fidelidade de canal

Transcrição, captions, áudio, replies, threads e mídia em Telegram/WhatsApp mostram que a qualidade do adapter affects directly perceived intelligence. Perder caption, audio context ou thread pode fazer um agente parecer incorret despite a strong backend.

### 7.5 Economical AI e resource governance become default features

O incidente de 13,1 milhões de tokens no PicoClaw é um sinal forte: custo e consumo de recursos precisam ser visíveis, limitados e interruptíveis. Teto de iterações, token budgets, circuit breakers, subprocess cleanup e limites de memória should be standard.

### 7.6 Observability and provenance are strategic assets

Histórico append-only, checkpoints, grafo de contexto, modelo efetivo, uso em tempo real e rastreamento de tool calls formam uma camada de confiança indispensable. O competitive advantage migrates from “agent executes” to “user can understand, audit and control what executed”.

### 7.7 Release maturity is uneven

Apenas Hermes released no período, enquanto others acumulam dezenas de changes sem versão. O principal risco next cycle is not lack of features, but **integration debt**: conflicts, stale PRs, regressions and incomplete documentation can erode trust more than a smaller release cadence.

---

## Prioridades recomendadas para o NullClaw

1. **Revisar e testar o PR #1091**, cobrindo endpoint público, autenticação, timeouts, erros, rate limits e comportamento com respostas inesperadas.
2. **Definir política explícita de fallback do provider**, sobretudo se o endpoint gratuito for indisponível ou deixar de ser mantido.
3. **Documentar privacidade e segurança**, esclarecendo quais queries e metadados são enviados ao Keenable.
4. **Priorizar um ciclo de release pequeno e verificável**, em vez de ampliar a superfície sem consolidar o provider.
5. **Criar sinais de engajamento**, como checklist de testes, comentários de maintainers e atualização de documentação, para aumentar a confiança de adopters.
6. **Manter o foco na diferenciação Zig/simplicidade**, mas preparar地基 para os temas que o mercado já considera obrigatórios: guardrails de custo, cancelamento, persistência e observabilidade.

---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório NanoBot — 04/11/2026

## 1. Panorama do dia

O NanoBot apresentou **atividade intensa**, com **5 issues** e **21 pull requests** atualizados em 24 horas; **10 PRs permanecem abertos** e **11 foram fechados**. O foco do dia foi claramente **confiabilidade operacional**, incluindo cancelamento de ferramentas paralelas, persistência de checkpoints, recuperação de estado após compactação e isolamento de falhas. A área de WebUI também avançou com correções de estado, uso, configurações de imagem e catálogo de ferramentas. Não houve release nova, portanto, o impacto imediato está concentrado em correções e evolução incremental ainda em integração.

**Avaliação de saúde:** **boa**, com alta vazão de correções e testes, mas com **backlog de conflitos de integração** eseveral mudanças críticas ainda abertas. [Issues](https://github.com/HKUDS/nanobot/issues) · [Pull requests](https://github.com/HKUDS/nanobot/pulls)

---

## 2. Lançamentos

### Nenhuma release publicada

- **0 novas releases** no período.
- Não há, portanto, notas oficiais de versão, breaking changes ou instruções de migração para 2026-11-04.
- O trabalho mais recente está concentrado em correções de runtime, WebUI, recuperação e pipeline de release.

O processo de release foi preparado para ganhar uma trilha **Preview diária**, além do fluxo Stable para features e patches: [PR #6556](https://github.com/HKUDS/nanobot/pull/6556).

---

## 3. Progresso do projeto

### Correções e confiabilidade

- **Configuração de ferramentas herdada por subagentes** — corrigiu subagentes que ignoravam `tools.cliApps.enable: false` e também preserva timeouts configurados para CLI Apps. A mudança fecha a issue [#6554](https://github.com/HKUDS/nanobot/issues/6554): [PR #6561](https://github.com/HKUDS/nanobot/pull/6561).

- **Estado nativo preservado após retry e recovery** — impede que, após compactação, o runtime continue usando o estado original, retente a continuação errada ou compacte novamente o mesmo histórico. Também evita perda do estado quando o fluxo para antes de uma resposta: [PR #6558](https://github.com/HKUDS/nanobot/pull/6558).

- **Estado pronto de MCP preservado após alternar plugins** — evita que habilitar ou desabilitar um Agent Plugin faça um MCP já conectado, como Linear, desaparecer de “Apps → Ready”: [PR #6559](https://github.com/HKUDS/nanobot/pull/6559).

- **Uso e progresso de ferramentas atualizados durante turnos ativos** — o medidor de contexto, o gráfico de rodadas e os resultados individuais de ferramentas agora são atualizados durante a execução, em vez de apenas ao final da tarefa: [PR #6553](https://github.com/HKUDS/nanobot/pull/6553).

- **Fechamento de configurações de imagem sem credenciais válidas** — permite descartar uma configuração inválida de geração de imagens, que antes bloqueava o fechamento da janela: [PR #6560](https://github.com/HKUDS/nanobot/pull/6560).

- **Catálogos de ferramentas em cache** — evita reconstruções repetidas dos catálogos de CLI Apps e MCP ao navegar novamente pela página de ferramentas: [PR #6552](https://github.com/HKUDS/nanobot/pull/6552).

### Evolução funcional

- **Execução ReAct contínua para Goals ativos** — um Goal pode manter uma única execução além do limite usual de iterações de ferramentas até ser concluído, cancelado ou bloqueado: [PR #6538](https://github.com/HKUDS/nanobot/pull/6538).

- **Contexto de arquivos em grafo persistente** — a WebUI passa a oferecer uma barra lateral com grafo de arquivos e medidor de uso, permitindo observar a proveniência do contexto durante a conversa: [PR #6562](https://github.com/HKUDS/nanobot/pull/6562).

- **Providers customizados e troca de modelo em runtime** — o conjunto de PRs anterior traz configuração dinâmica de providers, suporte à OpenAI Responses API e comandos `/model` e `/models`: [PR #2116](https://github.com/HKUDS/nanobot/pull/2116), [PR #2117](https://github.com/HKUDS/nanobot/pull/2117) e [PR #2179](https://github.com/HKUDS/nanobot/pull/2179).

### Processo de release

- O fluxo Stable foi mantido como caminho único para features e patches, com Requirements reduced —notas de mudança e documentação afetada — para patches.
- Um candidato **Preview diário** opcional foi adicionado para候选 preparation: [PR #6556](https://github.com/HKUDS/nanobot/pull/6556).

---

## 4. Temas quentes da comunidade

### 1. Evolução do sistema de subagentes para colaboração multiagente

A issue [#5000](https://github.com/HKUDS/nanobot/issues/5000), aberta desde 20/07 e com **7 comentários**, é a demanda mais_diskutada do conjunto apresentado. O pedido central é substituir a delegação simples de tarefas por uma arquitetura com:

- identidades persistentes para agentes;
- estado compartilhado de tarefas;
- coordenação e colaboração;
- menor dependência do agente principal como único orquestrador.

**Análise:** é um sinal de roadmap estratégico. O sistema atual funciona como execução isolada de subagentes, não como uma rede realmente colaborativa. A implementação tende a ser estrutural e deve depender de primitivas já recorrentes no projeto: estado durável, isolamento por execução, controle de concorrência, filesystem persistente e coordenação via gateway.

### 2. Integrações MCP como produto

A issue [#6557](https://github.com/HKUDS/nanobot/issues/6557), encerrada após **1 comentário**, adiciona um preset para o MCP hospedado da Sprouts Data, com autenticação por API key e Streamable HTTP. O serviço oferece busca de empresas e pessoas, companies look-alike, consultas por domínio, LinkedIn ou ID e mapeamento de relacionamentos.

**Análise:** a inclusão de presets reduz o custo de integração e conecta o NanoBot a um caso de uso corporativo claro. O número de comentários é baixo, mas o fechamento rápido sugere demanda operacional simples e bem delimitada.

### 3. Telegram para gateways corporativos e self-hosted

O PR [#4919](https://github.com/HKUDS/nanobot/pull/4919), aberto desde 14/07, adiciona `api_base` e headers extras ao Telegram Bot API, permitindo usar servidores auto-hospedados ou gateways empresariais.

**Análise:** a proposta amplia a adequação do NanoBot a implantaçõesAir-gapped, redes privadas e arquiteturas com proxy. O tempo aberto sugere pendências técnicas ou de integração que ainda impedem a inclusão.

### 4. Continuidade de Goals e uso em tempo real

Os PRs [#6538](https://github.com/HKUDS/nanobot/pull/6538) e [#6553](https://github.com/HKUDS/nanobot/pull/6553), ambos encerrados, e [#6480](https://github.com/HKUDS/nanobot/pull/6480), ainda aberto, mostram uma área em maturação: **Goals de longa duração**, acompanhamento de progresso e testes de conclusão.

**Análise:** o foco deixa de ser apenas “responder uma mensagem” e passa a ser “operar uma tarefa persistente”, importante para agentes pessoais e automações de médio prazo.

---

## 5. Bugs e estabilidade

### Severidade alta ou prioritária

- **Falhas de comandos inline podem encerrar o consumidor do agente** — em `/status`, erros no carregamento da sessão ou na resolução do runtime escapavam do tratamento de exceções, cancelando tarefas ativas e encerrando o consumer. O PR proposes isolamento específico: [PR #6497](https://github.com/HKUDS/nanobot/pull/6497) · [Issue relacionada no backlog](#6497).

- **Ferramentas paralelas podem continuar após cancelamento** — cancelar um lote ou falhar um hook de ferramenta permitia que ferramentas irmãs ainda executassem depois da finalização do turno, criando corrida com a liberação do lock da sessão: [PR #6468](https://github.com/HKUDS/nanobot/pull/6468).

### Severidade média

- **Checkpoint incompleto durante lotes de ferramentas** — o runtime persistia apenas “todas pendentes” ou “todas concluídas”. Uma falha entre a conclusão da ferramenta A e o início da ferramenta B podia perder progresso ou repetir chamadas: [PR #6262](https://github.com/HKUDS/nanobot/pull/6262) e [PR #5946](https://github.com/HKUDS/nanobot/pull/5946).

- **Perda de batches de memória após bloqueio de policy** — respostas com `refusal` ou `content_filter` faziam o Dream avançar o cursor mesmo sem concluir o processamento da memória: [PR #6100](https://github.com/HKUDS/nanobot/pull/6100).

- **Subagentes mantinham ferramentas proibidas** — com `tools.cliApps.enable: false`, `run_cli_app` continuava registrado para subagentes: [Issue #6554](https://github.com/HKUDS/nanobot/issues/6554), corrigida por [PR #6561](https://github.com/HKUDS/nanobot/pull/6561).

- **Estado de compactação perdido em retry/recovery** — retries podiam reutilizar a continuação original e repetir a compactação do histórico: [PR #6558](https://github.com/HKUDS/nanobot/pull/6558), já fechado.

### Severidade baixa / UX

- **Botão de modelo não representa fallback ativo** — o WebUI mostra o preset configurado, e não o modelo efetivamente usado pelo gateway, especialmente quando um fallback atende o turno: [Issue #6550](https://github.com/HKUDS/nanobot/issues/6550).

- **Janela de imagem não fecha pelo botão ×** — falhas de configuração impediam o descarte do rascunho inválido: [Issue #6555](https://github.com/HKUDS/nanobot/issues/6555), corrigida por [PR #6560](https://github.com/HKUDS/nanobot/pull/6560).

- **MCP conectado desaparece após alternar plugins** — corrigido em [PR #6559](https://github.com/HKUDS/nanobot/pull/6559).

- **Navegação na página de ferramentas recarregava catálogos** — corrigido com cache em [PR #6552](https://github.com/HKUDS/nanobot/pull/6552).

### Avaliação

Não há indication de crash sistêmico ou regressão ampla no nível de uso. O padrão de falhas é concentrado em **ciclo de vida assíncrono**, **cancelamento**, **persistência de estado** e **isolamento de configuração**. Vários PRs críticos estão marcados com `conflict`, indicando que a integração com a branch principal ainda precisa ser concluída.

---

## 6. Pedidos de features e sinais de roadmap

### Colaboração multiagente

- **Pedido:** identidades persistentes, estado compartilhado e coordenação entre agentes.
- **Sinal:** [#5000](https://github.com/HKUDS/nanobot/issues/5000), a issue mais antiga e mais comentada apresentada.
- **Possível impacto:** introduces um novo modelo mental de runtime e-agent orchestration, com implicações em segurança, memória, filesystem, tool permissions e resolução de conflitos.

### Visibilidade do modelo realmente utilizado

- **Pedido:** refletir no botão da WebUI o modelo primário ou fallback que atendeu o turno, com base em `turn_model_updated`.
- **Sinal:** [#6550](https://github.com/HKUDS/nanobot/issues/6550).
- **Possível impacto:** melhoria de transparência operacional, especialmente importante em environments com fallback, custo, latência ou requisitos de auditoria.

### Telegram com infraestrutura customizada

- **Pedido:** endpoint Bot API configurável e headers extras.
- **Sinal:** [#4919](https://github.com/HKUDS/nanobot/pull/4919).
- **Possível impacto:** suporte mais amplo a gateways corporativos, proxies e instalações self-hosted.

### Grafo de contexto e proveniência

- **Pedido:** inspeção persistente da origem e uso de arquivos durante a conversa.
- **Sinal:** [#6562](https://github.com/HKUDS/nanobot/pull/6562).
- **Possível impacto:**位置上, improves observability, debugging and user trust, especialmente for coding agents and long-running tasks.

### Preview diário de releases

- **Pedido:** preparar candidatos Preview em cadence diária, sem duplicar o sistema de build.
- **Sinal:** [#6556](https://github.com/HKUDS/nanobot/pull/6556).
- **Possível impacto:** maior frequência de validação e feedback antes das versões Stable.

### Interrupção para mensagens de usuário durante ferramentas

- **Pedido:** incorporar uma mensagem de usuário recebida no meio do turno antes de continuar a cadeia de ferramentas.
- **Sinal:** [#4397](https://github.com/HKUDS/nanobot/pull/4397).
- **Possível impacto:** melhora a responsividade, mas exige cuidado para não interromper atomicamente lotes de ferramentas ou corromper checkpoints.

---

## 7. Resumo de feedback dos usuários

### Dores recorrentes

- **Falta de confiança no estado real da execução:** usuários não conseguem saber, pela interface, qual modelo atendeu a requisição nem acompanhar claramente o progresso das ferramentas.
- **Recuperação de falhas inconsistente:** checkpoints intermediários ausentes e estado de compactação não preservado podem transformar falhas temporárias em perda de trabalho ou repetição de operações.
- **Configuração não uniforme entre agentes:** subagentes não herdavam corretamente restrições e timeouts do agente principal, criando uma diferença de comportamento potencialmente perigosa.
- **Estado visual inconsistente na WebUI:** plugins MCP, catálogos de ferramentas e configurações de imagem apresentavam estados divergentes ou controles bloqueados.
- **Execuções paralelas difícil de controlar:** cancelamento não garantia que todas as ferramentas irmãsEncerrassem antes da finalização do turno.

### Cenários de uso evidentes

- Assistente pessoal com múltiplos canais e providers.
- Automação contínua baseada em Goals.
- Coding agent observando arquivos e contexto no grafo.
- Operação corporativa via Telegram, MCP e gateways privados.
- Execuções longas com ferramentas paralelas, retries, compactação e recuperação após crash.
- Integração com serviços de dados B2B por MCP.

### Satisfação e insatisfação

O volume de correções e a presença de testes em diversos PRs indicam uma comunidade focada em qualidade operacional. Não há, porém, sinais explícitos de，然后再无. baixa demais ou release accelerates adoption. O backlog antigo em Telegram e evolução multiagente sugereatisfied with the current execution model, but unsatisfied with its limits.

---

## 8. Backlog que merece atenção

### Issue estratégica e antiga

- **Colaboração multiagente** — criada em 20/07, com 7 comentários, ainda aberta e sem definição pública de escopo, arquitetura ou marcos: [Issue #5000](https://github.com/HKUDS/nanobot/issues/5000).
  - **Ação:** definir um RFC mínimo, incluindo identidade, estado compartilhado, isolamento, comunicação e política de permissões.

### PRs importantes abertos há mais tempo

- **Suporte a Telegram com base URL e headers** — aberto desde 14/07: [PR #4919](https://github.com/HKUDS/nanobot/pull/4919).
  - **Ação:** revisar compatibilidade, testes com endpoint customizado e impacto em polling/send.

- **Injeção de mensagem de usuário durante o turno** — aberto desde 18/06 e marcado como conflict/invalid: [PR #4397](https://github.com/HKUDS/nanobot/pull/4397).
  - **Ação:** reavaliar a premissa, alinhar com o novo modelo de cancelamento e checkpoint por lote.

- **Checkpoint de resultados concluídos por lote** — duas implementações concorrentes permanecem abertas, uma desde 16/10 e outra desde 28/09: [PR #6262](https://github.com/HKUDS/nanobot/pull/6262) e [PR #5946](https://github.com/HKUDS/nanobot/pull/5946).
  - **Ação:** consolidar as soluções, definir formato de checkpoint e resolver conflitos antes do próximo ciclo Stable.

### Conflitos de integração que bloqueiam correções de estabilidade

- **Cancelamento de ferramentas paralelas** — conflito aberto: [PR #6468](https://github.com/HKUDS/nanobot/pull/6468).
- **Isolamento de falhas em comandos inline** — conflito e prioridade P1: [PR #6497](https://github.com/HKUDS/nanobot/pull/6497).
- **Preservação de batches de memória** — conflito aberto: [PR #6100](https://github.com/HKUDS/nanobot/pull/6100).

### Prioridade recomendada

1. Resolver [PR #6497](https://github.com/HKUDS/nanobot/pull/6497), por envolver encerramento do consumer.
2. Integrar [PR #6468](https://github.com/HKUDS/nanobot/pull/6468), por afetar isolamento de recursos e session locks.
3. Unificar [PR #6262](https://github.com/HKUDS/nanobot/pull/6262) e [PR #5946](https://github.com/HKUDS/nanobot/pull/5946), evitando duas competing implementations.
4. Tratar [Issue #6550](https://github.com/HKUDS/nanobot/issues/6550), pois afeta transparência de custo e fallback.
5. Produzir RFC para [Issue #5000](https://github.com/HKUDS/nanobot/issues/5000).
6. Revalidar [PR #4919](https://github.com/HKUDS/nanobot/pull/4919), que há mais de três meses permanece em revisão.

---

## Conclusão

O NanoBot apresenta **saúde operacional positiva e alta atividade**, com foco coerente em tornar os agentes mais confiáveis, observáveis e resilientes. As correções fechadas reduzem falhas reais em subagentes, compactação, WebUI, MCP e configurações de imagem. O principal risco não é falta de desenvolvimento, mas **complexidade de integração**: PRs críticos com conflitos e implementações concorrentes em checkpoints indicam que o próximo ciclo deve priorizar consolidação e validação, não apenas expansão de funcionalidades.

Sem release no dia, o marco mais próximo deve ser uma versão Stable consolidação, com recovered state, cancelamento seguro, checkpoints intermediários e configuração uniforme entre agentes — acompanhada depois pela evolução multiagente e por previews recorrentes.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do projeto Hermes Agent — 4 de novembro de 2026

## 1. Panorama do dia

O Hermes Agent apresentou **atividade elevada**, com 50 issues atualizadas em 24 horas, 50 PRs atualizadas e uma nova release. A maior parte dos itens permanece aberta — 48 issues e 48 PRs —, indicando um fluxo intenso de correções e funcionalidades em revisão, mas não necessariamente uma fila de trabalho limpa. A release **v0.22.7** estabiliza cerca de 174 PRs acumulados desde a v0.22.6, enquanto os principais focos são o gateway unificado, sessões Desktop, autorização entre agentes e segurança operacional. O projeto aparenta **boa velocidade de desenvolvimento e alta carga de integração**, porém com sinais de complexidade e regressões em transições de arquitetura.

---

## 2. Lançamentos

### v0.22.7 — Hermes Agent v0.22.7

- **Data:** 3 de novembro de 2026
- **Tipo:** patch release
- **Escopo:** CLI e instaladores, aplicativo Microsoft Store, Docker e Hermes Cloud
- **Conteúdo:** consolida aproximadamente **174 PRs mesclados desde a v0.22.6**
- **Release:** [v0.22.7 no GitHub](https://github.com/NousResearch/hermes-agent/releases)

#### Mudanças e implicações

A release consolida correções e evoluções da série v0.22.x, com especial destaque para:

- unificação do gateway;
- operações de sessão e persistência;
- CLI, Desktop e dashboard;
- integrações com Slack, QQ, Telegram e Discord;
- plugins, cron e automações;
- classificação de erros, retries e fallbacks;
- manutenção e atualização de plugins.

#### Breaking changes

- A própria release **não declara breaking changes explícitos**.
- APIs ou comportamentos internos podem, contudo, ter sido afetados pela consolidação de mudanças do gateway e pelo endurecimento de regras de autorização.
- O texto da release informa que as **notas completas e curadas** desse intervalo serão publicadas com a **v0.23.0**. Usuários que dependem de detalhes de migração devem consultar essa release futura.

#### Recomendações de migração

1. Atualizar somente após verificar compatibilidade de plugins e integrações customizadas.
2. Revisar configurações de Slack, especialmente allowlists e identidade de peer bots.
3. Validar operações Desktop — especialmente **resume, archive, delete e mensagens duplicadas**.
4. Executar testes de cron com jobs restritos a `enabled_toolsets: []`.
5. Em instalações Desktop remotas, verificar a resolução do backend e a conectividade com o gateway.
6. Aguardar as notas curadas da v0.23.0 para detalhamentos de migração.

---

## 3. Progresso do projeto

### PRs fechadas ou mergeadas confirmadas

A amostra informa que **2 das 50 PRs atualizadas foram merged/fechadas**. A única com status explicitamente fechado na lista fornecida é:

- **[PR #77405 — Closed] — `fix(memory/holographic): extract entities from CJK facts`**  
  O patch corrige a extração de entidades em fatos escritos em coreano, chinês e japonês. A implementação anterior dependia de capitalização ASCII e, por isso, não gerava entidades para idiomas CJK sem distinção de maiúsculas/minúsculas. O avanço é relevante para a utilidade da memória multilíngue e para searches/prefetch em esses idiomas.  
  **Link:** [NousResearch/hermes-agent PR #77405](https://github.com/NousResearch/hermes-agent/pull/77405)

Também há uma issue fechada com avanço correlato:

- **[Issue #73868 — Closed] — Recuperação quase nula de fatos em coreano na memória holográfica**  
  O problema foi causado pelo FTS5 tokenizar palavra e partícula como um único token, além da extração CJK defeituosa. A issue representa o fechamento do bug de busca em coreano.  
  **Link:** [NousResearch/hermes-agent Issue #73868](https://github.com/NousResearch/hermes-agent/issues/73868)

### Trabalho recente relevante ainda em revisão

Os PRs a seguir, embora abertos, mostram o principal avanço técnico prepared para os próximos ciclos:

- **[PR #148403] — classificador compartilhado de erros para retries, fallback e refresh**  
  Unifica decisões de chamadas auxiliares — compressão, títulos, visão, busca de sessões, MCP e helpers de aprovação — em um mecanismo comum de classificação. Isso reduz divergências de política e deve melhorar consistência e resiliência.  
  **Link:** [PR #148403](https://github.com/NousResearch/hermes-agent/pull/148403)

- **[PR #148910] — preservação de allowlist vazia de toolsets em edits de cron**  
  Corrige uma falha de privilégio: um job configurado para não usar ferramentasVoltava, após edição no Dashboard, com todos os toolsets e servidores MCP habilitados. É um avanço relevante de contenção de permissões.  
  **Link:** [PR #148910](https://github.com/NousResearch/hermes-agent/pull/148910)

- **[PR #144844] — fallback para socket temporário em caso de EPERM**  
  Evita crash-loop do gateway Docker em mounts onde Unix sockets não podem ser criados, como alguns bind mounts via `sshfs`.  
  **Link:** [PR #144844](https://github.com/NousResearch/hermes-agent/pull/144844)

- **[PR #148573] — restauração de receipts sem modelo persistido**  
  Elimina divergência entre writers que salvam modelo vazio e uma política de restauração que antes exigia string não vazia.  
  **Link:** [PR #148573](https://github.com/NousResearch/hermes-agent/pull/148573)

- **[PR #148877] — correções de aprovação, envio e Stop em group chats do Desktop**  
  Recupera comportamentos essenciais de interação em chats de grupo: cartões de aprovação, parada durante envio, rascunhos editáveis e limpeza de cards aguardando aprovação.  
  **Link:** [PR #148877](https://github.com/NousResearch/hermes-agent/pull/148877)

- **[PR #148569] — YAML válido ao esvaziar coleção sob chave comentada**  
  Evita que uma edição de configuração gere documento YAML inválido quando o valor substituído é uma coleção vazia.  
  **Link:** [PR #148569](https://github.com/NousResearch/hermes-agent/pull/148569)

- **[PR #85794] — auto-update e “Update all” para plugins**  
  Amplia atualização de plugins para CLI, chat, Desktop e dashboard, incluindo plugins do catálogo.  
  **Link:** [PR #85794](https://github.com/NousResearch/hermes-agent/pull/85794)

- **[PR #134700, #140049 e #140030] — correções na aceitação de PRs do Kanban**  
  Ajustam a validação de commit statuses e check runs, especialmente status de GitHub Apps, checks reexecutados e resultados `skipped`/`neutral`.  
  **Links:** [PR #134700](https://github.com/NousResearch/hermes-agent/pull/134700), [PR #140049](https://github.com/NousResearch/hermes-agent/pull/140049), [PR #140030](https://github.com/NousResearch/hermes-agent/pull/140030)

### Avaliação

O progresso é tecnicamente substancial, sobretudo em consistência de estado, autorização, permissões, memória e operação do gateway. Contudo, a concentração de correções em componentes centrais indica que a release pública ainda está absorvendo a complexidade introduzida pelo gateway unificado e pelas múltiplas superfícies de produto.

---

## 4. Temas quentes da comunidade

### 4.1 Gateway unificado e estado de sessão

- **[Issue #143547 — 47 comentários, 1 reação]**  
  Issue central sobre problemas pós-merge do gateway unificado, incluindo CLI, TUI, Desktop, API, editores, bots, cron, Kanban e Group Chats. É a maior discussão técnica do recorte e funciona como umbrella de falhas de integração.  
  **Link:** [Issue #143547](https://github.com/NousResearch/hermes-agent/issues/143547)

- **[Issue #139818 — 40 comentários, 3 reações]**  
  Sessões Desktop iniciadas em backend remoto não podem ser retomadas localmente após reinício do servidor: `session.resume` retorna `not_found`. Expõe uma falha de portabilidade e roteamento do estado entre clientes e backends.  
  **Link:** [Issue #139818](https://github.com/NousResearch/hermes-agent/issues/139818)

- **[Issue #143839 — 7 comentários, 1 reação]**  
  Desktop 0.22.5 não consegue arquivar, excluir ou retomar chats próprios; mutações REST recebem `permission_denied` e o resume retorna `not_found`.  
  **Link:** [Issue #143839](https://github.com/NousResearch/hermes-agent/issues/143839)

- **[Issue #148531 — 3 comentários]**  
  `owner-backfill` falha com `409 Exclusive maintenance refused` a cada boot do Desktop quando um gateway standalone possui `state.db`. Indica conflito de propriedade e manutenção concorrente entre topologias Desktop/gateway.  
  **Link:** [Issue #148531](https://github.com/NousResearch/hermes-agent/issues/148531)

**Análise:** A comunidade está concentrando atenção na **continuidade e portabilidade de sessões**. O gateway unificado promised uma experiência única, mas estáelio高い rigid topologias alternativas — local, remoto, CLI e Desktop. A questão central deixou de ser “executar um turno” e passou a ser “identificar corretamente onde o estado reside e quem pode alterá-lo”.

### 4.2 Colaboração e segurança entre agentes

- **[Issue #97681 — 40 comentários, 4 reações]**  
  Proposta para permitir que bots colaborem entre gateways, preservando controle, credenciais, memória e localização de cada agente.  
  **Link:** [Issue #97681](https://github.com/NousResearch/hermes-agent/issues/97681)

- **[Issue #85614 — 8 comentários]**  
  Identidades de peer bots no Slack são exigidas na autorização inicial, mas ignoradas na autorização final.  
  **Link:** [Issue #85614](https://github.com/NousResearch/hermes-agent/issues/85614)

- **[PR #89044 — Open]**  
  Propõe enforcing de identidades exatas de peer bots no Slack.  
  **Link:** [PR #89044](https://github.com/NousResearch/hermes-agent/pull/89044)

- **[Issue #143379 — 34 comentários]**  
  RFC para uma “Doc-Chain Substrate”, com foco em leitura, governança, proveniência e compactação de registros duráveis.  
  **Link:** [Issue #143379](https://github.com/NousResearch/hermes-agent/issues/143379)

**Análise:** O projeto está expandindo de “assistente pessoal” para **rede de agentes com fronteiras de confiança explícitas**. A demanda é claramente estratégica, mas a implementação precisa preservar isolamento por owner, credenciais por agente e autorização verificável em cada salto.

### 4.3 Mobile e accessibilidade dos betas

- **[Issue #147269 — 16 comentários, 2 reações]**  
  O beta público Android atingiu o limite de testadores do Firebase App Distribution.  
  **Link:** [Issue #147269](https://github.com/NousResearch/hermes-agent/issues/147269)

- **[Issue #147556 — 8 comentários, 2 reações]**  
  O convite oficial do iOS/TestFlight retorna “Beta Not Found”.  
  **Link:** [Issue #147556](https://github.com/NousResearch/hermes-agent/issues/147556)

**Análise:** O interesse em Mobile é evidente, mas a distribuição está limited por capacidade externa e gestão de convites. A prioridade devo ser manter o pipeline de release e o suporte multiplataforma sem desviar recursos do núcleo do agente.

### 4.4 Memória e skills

- **[Issue #106786 — 5 comentários]**  
  Propõe separar procedimentos e workflows em `SKILL.md`, reservando memória para fatos e preferências.  
  **Link:** [Issue #106786](https://github.com/NousResearch/hermes-agent/issues/106786)

- **[Issue #56865 — 8 comentários, 1 reação]**  
  Adiciona proteção opcional de memória para subprocessos locais de terminal, evitando pressão de recursos sobre gateway e host.  
  **Link:** [Issue #56865](https://github.com/NousResearch/hermes-agent/issues/56865)

**Análise:** A comunidade está buscando uma taxonomy operacional mais clara entre **memória persistente**, **skills reutilizáveis** e **execução de ferramentas**. Isso é positivo para previsibilidade, mas exige migrações para não quebrar usuários que armazenaram procedures em memória.

---

## 5. Bugs e estabilidade

### Severidade alta — segurança, perda de dados ou perda de controle

- **[Issue #146032 — “Factory reset” apagou chaves SSH privadas e arquivos de skills em diretório home ativo]**  
  Incidente reportado com evidência forense pós-evento. Though a description não informa, no recorte, se houve correção ou atualização. É o incidente de segurança mais grave apresentado.  
  **Link:** [Issue #146032](https://github.com/NousResearch/hermes-agent/issues/146032)

- **[PR #148910 — Cron perde `enabled_toolsets: []` após edição no Dashboard]**  
  O job passa a ter todos os toolsets e MCPs habilitados, elevating indevidamente o nível de privilege. O PR ainda está aberto, portanto o risco permanece ativo na branch principal até merge/deploy.  
  **Link:** [PR #148910](https://github.com/NousResearch/hermes-agent/pull/148910)

- **[Issue #85614 — Autorização de peer bots no Slack inconsistente]**  
  A divergência entre autorização inicial e final pode permitir bypass da política de segurança de bots.  
  **Link:** [Issue #85614](https://github.com/NousResearch/hermes-agent/issues/85614)

- **[Issue #89039 — Negativas de autorização são tratadas como sucesso/no-op]**  
  O gateway pode exibir sucesso, como check verde no Slack, mesmo após uma negação explícita de política. Isso compromete feedback operacional e auditoria.  
  **Link:** [Issue #89039](https://github.com/NousResearch/hermes-agent/issues/89039)

### Severidade média — falhas funcionais,-corruption de estado ou impacto amplio

- **[Issue #139818]** — sessões Desktop remotas não retomáveis localmente.  
  [Link](https://github.com/NousResearch/hermes-agent/issues/139818)

- **[Issue #143839]** — archive, delete e resume indisponíveis para chats Desktop.  
  [Link](https://github.com/NousResearch/hermes-agent/issues/143839)

- **[Issue #148531]** — `owner-backfill` falha em topologias split Desktop/gateway.  
  [Link](https://github.com/NousResearch/hermes-agent/issues/148531)

- **[Issue #131786]** — gateway descarta saída útil em JSON longo de linha única ao processar a completion tail.  
  [Link](https://github.com/NousResearch/hermes-agent/issues/131786)

- **[Issue #129993]** — resposta do assistente duplicada visualmente no Desktop, embora persistida uma única vez.  
  [Link](https://github.com/NousResearch/hermes-agent/issues/129993)

- **[Issue #132356]** — mensagem “steered” durante execução aparece duas vezes no Desktop.  
  [Link](https://github.com/NousResearch/hermes-agent/issues/132356)

- **[Issue #148898]** — backend Codex retorna HTTP 400 não retryable para alguns corpos `/responses` comprimidos com zstd.  
  [Link](https://github.com/NousResearch/hermes-agent/issues/148898)

- **[Issue #147451]** — Kimi K3 encerra turnos após anunciar verbalmente uma ação, sem executar a tool call; stall guard não dispara.  
  [Link](https://github.com/NousResearch/hermes-agent/issues/147451)

- **[Issue #89035]** — políticas de timeout e classificação de falhas de cron divergem entre scheduler paths.  
  [Link](https://github.com/NousResearch/hermes-agent/issues/89035)

- **[Issue #137213]** — caminho standalone de envio QQ fixa `msg_type=0`, impedindo renderização de Markdown.  
  [Link](https://github.com/NousResearch/hermes-agent/issues/137213)

- **[Issue #137774]** — Browser do Bot Desktop é bloqueado por Google e Cloudflare porque `--remote-debugging-port` ativa `navigator.webDriver`.  
  [Link](https://github.com/NousResearch/hermes-agent/issues/137774)

- **[Issue #86028]** — gateway inicia com warnings duplicados de token Slack e escape inválido.  
  [Link](https://github.com/NousResearch/hermes-agent/issues/86028)

- **[Issue #148530 via PR #148530]** — TTS substitui o resultado real do Piper por erro de formato WAV quando nenhum chunk de áudio é produzido.  
  **Link:** [PR #148530](https://github.com/NousResearch/hermes-agent/pull/148530)

### Severidade baixa ou diagnóstica — degradação sem perda de dados

- **[Issue #148759]** — em Git anterior a 2.44, `hermes --version` pode levar cerca de 40 segundos quando há atualização disponível.  
  [Link](https://github.com/NousResearch/hermes-agent/issues/148759)

- **[Issue #148719]** — diagnóstico do `hermes doctor` considera incorretamente rota IPv6 morta quando há proxy HTTPS; também relata resíduos de processos antigos do gateway.  
  [Link](https://github.com/NousResearch/hermes-agent/issues/148719)

- **[PR #148890]** — correção proposta para o falso diagnóstico de IPv6 atrás de proxies.  
  [Link](https://github.com/NousResearch/hermes-agent/pull/148890)

- **[Issue #134628]** — placeholders como `references/dir/<name>.md` não são ignorados e resolvem para o diretório no Skills Hub.  
  [Link](https://github.com/NousResearch/hermes-agent/issues/134628)

- **[Issue #143379]** — RFC em aberto, não bug: define governança, proveniência e compactação de memória durável.  
  [Link](https://github.com/NousResearch/hermes-agent/issues/143379)

### Leitura de saúde

A release patch reduziu o número de issues fechadas no dia, mas a lista contém muitos defeitos **P2** e falhas de segurança/autorização. Isso sugere que o projeto está nella phase de transição architectural: os recursos are being added,

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# Relatório PicoClaw — 4 de novembro de 2026

## 1. Panorama do dia

A atividade do PicoClaw nas últimas 24 horas foi baixa, com **4 issues atualizadas** e **1 PR fechada**, sem novas releases. O fluxo foi dominado por **3 issues abertas**, duas delas marcadas como `stale`, enquanto uma issue de segurança foi criada ainda em 4 de novembro. O destaque técnico é o relato de **consumo descontrolado de tokens no roteamento inteligente** e uma falha de segurança no mecanismo de aprovação de ferramentas durante reloads. O encerramento da PR [#3416](https://github.com/sipeed/picoclaw/pull/3416) representa o principal avanço integrado no período, Adding native support for Sendblue iMessage/SMS, embora não haja indicação de merge efetivo.

## 2. Lançamentos

**Nenhuma nova release foi publicada nas últimas 24 horas.**

Isso significa que não há versões, mudanças incompatíveis ou notas de migração oficiais para comunicar no período. O estado atual do projeto deve ser avaliado pelo código e pelos拉Pull requests/issues, sem um marco de versão recém-lançado.

## 3. Progresso do projeto

### PR fechada: suporte a Sendblue iMessage/SMS

- **PR:** [#3416 — feat(channels): add Sendblue iMessage and SMS transport](https://github.com/sipeed/picoclaw/pull/3416)
- **Status:** fechada e marcada como `stale`
- **Escopo:** adiciona um canal nativo para conversar com agentes PicoClaw por **iMessage e SMS** via Sendblue.
- **Avanço pretendido:** amplia a compatibilidade com assistentes pessoais em dispositivos móveis e oferece uma alternativa para notificações e interações por mensagem.
- **Limitações do dado:** o resumo fornecido não confirma se a PR foi realmente merged, apenas que foi fechada; a descrição também a apresenta como uma proposta em draft. Portanto, não é possível afirmar que o recurso já esteja disponível em uma release.

O restante do período não apresentou outras PRs importantes fechadas oumerged.

## 4. Temas quentes da comunidade

### Roteamento inteligente sem controle de loop ou de custo

- **Issue:** [#3445 — Smart routing: no re-evaluation during a turn, no duplicate-call circuit breaker](https://github.com/sipeed/picoclaw/issues/3445)
- **Status:** fechada e marcada como `stale`
- **Discussão:** 2 comentários
- **Reações:** nenhuma reação registrada
- **Demanda central:** impedir que um modelo leve continue “pensando” dentro do mesmo turno sem progresso, realize chamadas repetidas ou gere custos desproporcionais.

O incidente relatado é materialmente relevante: **222 chamadas de LLM em cerca de 9 minutos**, com aproximadamente **13,1 milhões de tokens de entrada**. O principal sinal de roadmap não é apenas evitar duplicação, mas criar guardrails、有效 circuit breakers e limites explícitos de iteração para que o roteamento seja previsível e economicamente seguro.

### Organização de sessões na Web UI

- **Issue:** [#3450 — Web UI: chat folders to organize launcher session history](https://github.com/sipeed/picoclaw/issues/3450)
- **Status:** aberta e marcada como `stale`
- **Discussão:** 1 comentário
- **Reações:** nenhuma reação registrada
- **Demanda central:** substituir a lista plana de sessões por pastas ou grupos, facilitando a organização de conversas longas.

A necessidade indica maturidade do produto no uso diário: o gargalo deixou de ser somente executar o agente e passou a ser **gerenciar o histórico de múltiplos chats**. O pedido envolve Presumably uma mudança na API de sessões e na interface do launcher, não apenas uma melhoria visual.

### Novas canais de comunicação

- **PR:** [#3416 — Sendblue iMessage and SMS transport](https://github.com/sipeed/picoclaw/pull/3416)
- **Discussão e reações:** não informadas no conjunto de dados
- **Análise:** Despite o status final ser closed/stale, a proposta evidencia interesse em ampliar o PicoClaw como assistente pessoal multimodal e multiplataforma. A documentação de configuração de conta, verificação de telefone, segredos e webhook mostra que a integração já foi pensada para operação real, não apenas para demonstração.

## 5. Bugs e estabilidade

### Severidade crítica — chamada de ferramenta potencialmente sem controle de aprovação

- **Issue:** [#3456 — Failed approval-hook re-initialization during reload leaves the gateway serving with tools ungated](https://github.com/sipeed/picoclaw/issues/3456)
- **Status:** aberta
- **Criada:** 4 de novembro de 2026
- **Discussão:** ainda sem comentários

O problema está no ciclo de reload do gateway: se a reinitialização do hook de aprovação falhar, o gateway pode continuar atendendo com **ferramentas sem a camada de aprovação corretamente aplicada**. Isso cria um risco de segurança, pois chamadas perigosas poderiam deixar de passar pelo mecanismo de autorização.

**Impacto potencial:** bypass de políticas de aprovação, exposição de ferramentas privilegiadas e execução não autorizada de ações.  
**Prioridade sugerida:** alta, com validação do estado de segurança no startup/reload e fail-closed para ferramentas não protegidas.

### Severidade alta — consumo descontrolado de tokens no smart routing

- **Issue:** [#3445](https://github.com/sipeed/picoclaw/issues/3445)
- **Status:** fechada e marcada como `stale`
- **Impacto registrado:** 222 chamadas de LLM, aproximadamente 9 minutos de execução e 13,1 milhões de tokens de entrada.

Embora a issue esteja fechada, o conjunto de dados não esclarece se a correção foi implementada ou se o encerramento ocorreu por ausência de atividade. O incidente expõe três falhas de robustez a resolver:

1. reavaliação do roteamento no meio do turno;
2. ausência de circuit breaker para chamadas duplicadas;
3. ausência de limite rígido de iterações ou orçamento de tokens.

### Severidade média/indeterminada — bug report incompleto

- **Issue:** [#3449 — BUG](https://github.com/sipeed/picoclaw/issues/3449)
- **Status:** aberta e marcada como `stale`
- **Discussão:** 1 comentário

O resumo enviado contém apenas um template com campos de versão, Go, provedor/modelo, sistema operacional e canais. Sem descrição do comportamento observado, passos de reprodução ou stack trace, não é possível classificar tecnicamente a falha.

**Prioridade sugerida:** média, condicionada à reprodução. Antes do encerramento por `stale`, seria necessário solicitar versão/commit, logs, passos e resultado esperado.

## 6. Pedidos de features e sinais de roadmap

### Pastas para organizar o histórico de chats

- **Issue:** [#3450](https://github.com/sipeed/picoclaw/issues/3450)

A organização em pastas é o pedido de produto mais concreto do período. Ela sugere que o launcher já é usado com múltiplas conversas e que a sessão individual deixou de ser suficiente. O roadmap deve considerar:

- criação, renomeação e exclusão de pastas;
- mover sessões entre pastas;
- filtros e pesquisa na API de sessões;
- persistência e migração de metadados;
- compatibilidade com clientes que ainda esperam uma lista plana.

### Canal Sendblue para iMessage e SMS

- **PR:** [#3416](https://github.com/sipeed/picoclaw/pull/3416)

A integração pode entrar em uma próxima versão se a PR for reavaliada e incorporated, com attention to:

- setup de conta, verificação de número e credenciais;
- registro e validação de webhook;
- idempotência para evitar respostas duplicadas;
- mapeamento de conversas e threads;
- rate limiting, retries e reconciliação;
- documentação de segurança e custos do serviço.

### Guardrails obrigatórios para roteamento e uso de ferramentas

- **Issue:** [#3445](https://github.com/sipeed/picoclaw/issues/3445)
- **Issue:** [#3456](https://github.com/sipeed/picoclaw/issues/3456)

Ainda que não sejam features de UI, esses itens sugerem um roadmap de **segurança, economia e fail-safe**. Controles prováveis incluem limite máximo de iterações, orçamento de tokens, detecção de saída constante, circuit breaker por duplicação e fail-closed quando hooks de aprovação não puderem ser restaurados.

## 7. Resumo de feedback dos usuários

### Dores principais

- **Custo e latência sem controle:** o incidente da [#3445](https://github.com/sipeed/picoclaw/issues/3445) mostra que uma única tarefa pode gerar milhões de tokens sem avanço útil.
- **Falha silenciosa de governança:** um reload pode deixar ferramentas operando sem aprovação efetiva, conforme a [#3456](https://github.com/sipeed/picoclaw/issues/3456).
- **Histórico difícil de gerenciar:** a lista plana de sessõesOZ liftada pela [#3450](https://github.com/sipeed/picoclaw/issues/3450) é inadequada para usuários com várias conversas.
- **Falta de preenchimento em bugs:** a [#3449](https://github.com/sipeed/picoclaw/issues/3449) não traz informações suficientes para reprodução ou diagnosis.

### Cenários de uso وضostos

- Interação diária por SMS/iMessage com um agente pessoal, conforme a proposta da [#3416](https://github.com/sipeed/picoclaw/pull/3416).
- Uso do launcher Web para manter e consultar várias sessões, com necessidade de agrupamento por pasta.
- Execução de tarefas por smart routing com modelos leves, onde qualquer loop interno pode causar custo elevado.
- Operação segura de ferramentas com hooks de aprovação, inclusive durante mudanças de configuração.

### Sinais de satisfação ou insatisfação

Não há comentários ou reações suficientes para medir satisfação por volume. O único incidente claramente documentado demonstra **insatisfação com confiabilidade econômica** do roteamento. Já a falta de reações e a presença de várias issues `stale` sugerem baixa participação recente ou triagem limitada, though isso não deve ser interpreted as rejeição do produto.

## 8. Backlog que merece atenção

### Segurança — hooks de aprovação após reload

- **Issue:** [#3456](https://github.com/sipeed/picoclaw/issues/3456)
- **Urgência:** imediata

É o item mais crítico por envolver bypass de aprovação de ferramentas. Deve exigir atualização de urgência, responsável e critérios claros de correção e teste.

### Stability — proteção contra loops e consumo excessivo

- **Issue:** [#3445](https://github.com/sipeed/picoclaw/issues/3445)
- **Urgência:** alta

O impacto foi comprovado em produção. Mesmo fechada como `stale`, a issue deve ser reaberta ou ligada a uma issue de mitigação até que exista evidência de correção, testes de regressão e limites de custo.

### Web UI — organização do histórico

- **Issue:** [#3450](https://github.com/sipeed/picoclaw/issues/3450)
- **Urgência:** média

Representa uma melhoria concreta de usabilidade e recorrência para usuários de launcher. Convém evitar encerramento automático por `stale` até confirmar roadmap ou alternativas.

### Diagnóstico de bug incompleto

- **Issue:** [#3449](https://github.com/sipeed/picoclaw/issues/3449)
- **Urgência:** média

Solicitar environment details, logs, passos de reprodução e comportamento esperado. Se não houver resposta, encerrar novamente como `stale` para reduzir ruído no backlog.

### Revisão da integração Sendblue

- **PR:** [#3416](https://github.com/sipeed/picoclaw/pull/3416)
- **Urgência:** média

A PR foi fechada e marcada como `stale`; deve-se confirmar a intenção do autor e verificar se a functionality foi substituída ou será rebaseada para integração futura.

---

### Avaliação geral de saúde

**Saúde operacional: moderada, com risco elevado em segurança e eficiência.** O volume diário é baixo e não houve release, mas os problemas prioritários são graves: proteção de ferramentas potencialmente falha durante reloads e o smart routing pode produzir custo desproporcional. O backlog de usabilidade é healthier,aderindo a demanda por melhor organização de sessões e novos canais móveis. A principal recomendação é priorizar **fail-closed em hooks de aprovação**, **teto de iterações/tokens no roteamento** e **validação das correções com testes de regressão**, antes de expandir a superfície de canais.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do projeto IronClaw — 2026-11-04

## 1. Panorama do dia

O IronClaw apresentou **baixa atividade de desenvolvimento e manutenção hoje**, com **0 issues atualizadas** e **2 pull requests abertos**, ambos Initialization bets by dependabot; nenhuma PR foi merged ou fechada. Não houve novas releases no período, portanto não há announcements de versão, breaking changes ou notas de migração para comunicar. O fluxo reciente indica manutenção rotineira de dependências — uma atualização Rust (`zip`) e outra no stack JavaScript usado pelo material interno de architecture video —, sem evidência de mudanças funcionais面向 usuário.

## 2. Lançamentos

**Nenhuma nova release foi registrada em 2026-11-04.**

- [Releases do IronClaw](https://github.com/nearai/ironclaw/releases)
- [Tags do repositório](https://github.com/nearai/ironclaw/tags)

Consequentemente:

- **Mudanças:** não aplicável.
- **Breaking changes:** não aplicável.
- **Notas de migração:** não aplicável.

## 3. Progresso do projeto

### PRs merged ou fechadas hoje

**Nenhuma.** As duas PRs observadas permanecem abertas:

- [PR #8168 — bump `zip` de 8.6.0 para 9.0.5](https://github.com/nearai/ironclaw/pull/8168)  
  Atualização de dependência Rust, aberta por `dependabot[bot]`, com criação e atualização em 2026-11-04. A release cited do `zip` inclui correções de bugs, mas a PR ainda não representa progresso merged no código principal.

- [PR #8167 — atualização de `zod`, `@remotion/cli` e `@remotion/tailwind-v4`](https://github.com/nearai/ironclaw/pull/8167)  
  Atualização de dependências JavaScript em `docs/internal/architecture-video`, criada em 2026-11-03 e atualizada em 2026-11-03. O escopo é interno e ligado à geração de vídeo/documentação de architecture; não há indicação de impacto em runtime ou funcionalidades do agente.

### Leitura do progresso

O avanço do dia é predominantemente **de manutenção preventiva**, sem entrega visível de novas capacidades. A ausência de merges significa que os ganhos potenciais dessas atualizações ainda não estão consolidados no branch principal.

## 4. Temas quentes da comunidade

Não há issues recentes, PRs com comentários ou reações registradas no conjunto fornecido. Portanto, não foi possível identificar:

-需求 dominantes da comunidade;
- debates sobre priorização;
- objections técnicas às atualizações propostas;
- consenso ou divergência entre maintainers e usuários.

As duas PRs são ambas automáticas pelo Dependabot:

- [PR #8168](https://github.com/nearai/ironclaw/pull/8168) — **0 reações; comentários: undefined**
- [PR #8167](https://github.com/nearai/ironclaw/pull/8167) — **0 reações; comentários: undefined**

O único tema claramente compartilhado é **atualização e manutenção de dependências**, tanto no ecossistema Rust quanto no tooling JavaScript. Isso sugere atividade de higiene do repositório, mas **não constitui evidência de engagement ativo da comunidade**.

## 5. Bugs e estabilidade

### Severidade crítica

Nenhum bug, crash ou regressão crítico foi reportado hoje.  
[Issues abertas no IronClaw](https://github.com/nearai/ironclaw/issues)

### Severidade alta

Nenhum problema de severidade alta foi identificado no período.

### Severidade média

Nenhum novo incidente ou regressão foi reportado.

### Severidade baixa

A PR de atualização do `zip` cita correções de bugs na versão 9.0.5:

- [PR #8168 — `zip` 8.6.0 → 9.0.5](https://github.com/nearai/ironclaw/pull/8168)

Isso pode reduzir vulnerabilidades ou problemas de compatibilidade no componente de compressão, mas o impacto no IronClaw ainda não pode ser confirmado enquanto a PR não for revisada e merged.

### Avaliação de estabilidade

**Sinais positively: estável nas observações do dia.** Não há relatos de falhas, crashes ou regressões. Entretanto, essa conclusão é limitada: com zero issues atualizadas e dois pulls abertos, o volume de dados não permite uma avaliação profunda da estabilidade operacional.

## 6. Pedidos de features e sinais de roadmap

Não foram identificados novos pedidos explícitos de features no dia. Também não há indicators de roadmap em issues ou PRs recentes.

Os itens que podem entrar em uma próxima versão, por sua natureza técnica, são:

- **Atualização da biblioteca Rust `zip` para 9.0.5**, com possível incorporação de correções de estabilidade e segurança:  
  [PR #8168](https://github.com/nearai/ironclaw/pull/8168)
- **Atualização do tooling de vídeo de architecture**, incluindo `zod`, `@remotion/cli` e `@remotion/tailwind-v4`,eruendo consistência e compatibilidade do fluxo interno de documentação:  
  [PR #8167](https://github.com/nearai/ironclaw/pull/8167)

Essas mudanças são **manutenção**, não novas features. Nenhuma evidência permite antecipar uma versão ou capacidade específica do IronClaw.

## 7. Resumo de feedback dos usuários

**Não há feedback direto de usuários disponível hoje.**

Os dados fornecidos não contêm:

- comentários de usuários em issues ou PRs;
- reações públicas;
- relatos de uso;
- complaints sobre functionalities;
- cenários de uso narrated;
- indicators de satisfação ou insatisfação.

A única evidência de necessidade é indireta: o Dependabot abriu atualizações para manter dependências Rust e JavaScript. A ausência de issues e feedback humano impede avaliar se os principais bottlenecks do projeto estão em segurança, ergonomics, performance, integrações ou fluxos de assistant.

## 8. Backlog que merece atenção

Nenhuma issue antiga sem resposta pode ser destacada com segurança: o conjunto fornecido lista **zero issues recentes**, sem histórico adicional disponível para analysis de aging.

Os itens atualmente em aberto e que merecem acompanhamento são:

1. **[PR #8168 — atualização de `zip`](https://github.com/nearai/ironclaw/pull/8168)**  
   Necessidade de review e validação de compatibilidade Rust, especialmente pelo salto de versão maior (`8.6.0` → `9.0.5`). A PR ainda não está merged.

2. **[PR #8167 — atualização de dependências da architecture video](https://github.com/nearai/ironclaw/pull/8167)**  
   Deve passar por validação do build e do fluxo de geração de vídeo. Como é uma atualização agrupada de múltiplas dependências, há risco moderado de conflitos de peer dependencies ou mudanças de comportamento no CLI.

## Saúde geral do projeto

**Estado: estável, porém com atividade baixa no período.** Não há sinais de crise, incidentes ou退行, e o foco recente está em manutenção automatizada de dependências. Em contrapartida, o número de merges, releases e sinais de feedback humano é zero, então o dia oferece pouca evidência sobre a velocidade do desenvolvimento, a responsividade dos maintainers ou a evolução do produto.

### Referências

- [Repositório IronClaw](https://github.com/nearai/ironclaw)
- [Issues](https://github.com/nearai/ironclaw/issues)
- [Pull requests](https://github.com/nearai/ironclaw/pulls)
- [Releases](https://github.com/nearai/ironclaw/releases)
- [PR #8168](https://github.com/nearai/ironclaw/pull/8168)
- [PR #8167](https://github.com/nearai/ironclaw/pull/8167)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do projeto CoPaw — 2026-11-04

> **Observação:** os itens fornecidos apontam para `agentscope-ai/QwenPaw`, enquanto o repositório solicitado é `agentscope-ai/CoPaw`. A análise abaixo usa exclusivamente os dados fornecidos e preserva os links indicados.

## 1. Panorama do dia

O projeto apresentou **atividade elevada**, com **50 PRs atualizadas em 24 horas**, das quais 14 foram fechadas/merged, além de **9 issues atualizadas**. Não houve release no período, e o trabalho parece concentrado em_beta da versão 2.3.0, com correções de estabilidade em Windows, Matrix, DingTalk, Hub Local e providers. A predominância de correções pequenas eIncrementais indica uma fase ativa de estabilização pré-lançamento, embora ainda existam falhas relevantes de inicialização, integração e experiência do usuário.

## 2. Lançamentos

**Nenhuma nova release foi publicada em 2026-11-04.**

Os issues e PRs mencionam versões como `2.3.0b2`, `2.3.0-beta.2` e `2.2.2.post1`, mas os dados não indicam publicação oficial de uma nova versão. Portanto:

- **Mudanças releasing:** não aplicável.
- **Breaking changes:** não há release nova para analyze.
- **Migração:** não há notas de migração oficiais.
- **Risco de adopting:** beta reports suggest that users should carefully validate changes related to **Hub Local**, **Matrix**, **Windows**, **desktop** e **provider configuration**.

## 3. Progresso do projeto

### PRs importantes fechadas ou merged

- **[#8575 — fix(desktop): restrict auto-update manifest to stable releases](https://github.com/agentscope-ai/QwenPaw/pull/8575)**  
  A atualização automática do desktop passa a considerar apenas versões estáveis e pós-release, mantendo instaladores pré-release disponíveis para download manual. Isso reduz o risco de o usuário instalar automaticamente uma build beta.

- **[#8422 — feat(console): add plugin-facing theme token overrides](https://github.com/agentscope-ai/QwenPaw/pull/8422)**  
  Amplia a personalização visual do console por meio de tokens semânticos para temas claro/escuro, superfícies, bordas e texto. É um avanço relevante para plugins que precisam adaptar sua interface ao ambiente do QwenPaw.

- **[#8341 — fix(dingtalk): split long replies into markdown chunks](https://github.com/agentscope-ai/QwenPaw/pull/8341)**  
  Corrige o problema de respostas longas no DingTalk, que eram convertidas silenciosamente para texto puro. A divisão em chunks preserva Markdown e tabelas GFM em respostas extensas.

- **[#8559 — feat(matrix): install E2EE dependencies by default](https://github.com/agentscope-ai/QwenPaw/pull/8559)**  
  As dependências de criptografia ponta a ponta do Matrix passam a ser instaladas por padrão, reduzindo uma fricção de instalação. A opção de criptografia continua desabilitada por padrão.

### PRs abertas que representam progresso técnico relevante

- **[#8573 — feat(local-models): install Piccolo runtimes and select model source](https://github.com/agentscope-ai/QwenPaw/pull/8573)**  
  Conecta o fluxo de instalação/atualização aos runtimes Piccolo publicados, permitindo iniciar Flash Chat ou Piccolo Decisions sem compilar ou substituir binários manualmente.

- **[#8574 — fix(shell): add opt-in memory protection with live Console settings](https://github.com/agentscope-ai/QwenPaw/pull/8574)**  
  Adiciona limite opcional de memória para comandos shell e captura de saída, inclusive em execução sandbox e coding mode. A configuração pode ser ajustada pelo Console.

- **[#8557 — feat(crons): per-run sessions to bound cron job history growth](https://github.com/agentscope-ai/QwenPaw/pull/8557)**  
  Resolve o crescimento indefinido do histórico de sessões de tarefas agendadas, criando uma sessão por execução e preservando o isolamento de contexto já existente.

- **[#8578 — feat(tools): surface stale daily notes as deduplicated Inbox reminders](https://github.com/agentscope-ai/QwenPaw/pull/8578)**  
  Transforma notas diárias não processadas em lembretes deduplicados na Inbox, evitando que permanecerem indefinidamente no disco sem sinal para o usuário.

- **[#8558 — fix(matrix): simplify legacy state migration and device locking](https://github.com/agentscope-ai/QwenPaw/pull/8558)**  
  Reduz bloqueios indevidos no início de contas Matrix e evita que estado legado de outra workspace impeça a ativação de uma conta válida.

- **[#8522 — fix(console): disable nginx buffering on /console/chat SSE](https://github.com/agentscope-ai/QwenPaw/pull/8522)**  
  Corrige o atraso aparente de respostas em streaming quando o Console está atrás de nginx, alignando o endpoint de chat SSE aos demais endpoints SSE.

## 4. Temas quentes da comunidade

### 1. Stabilização da beta 2.3.0

A maior concentração de atividade está em correções de regressões e compatibilidade da beta 2.3.0:

- **[#8565 — Hub Local não inicia no Windows](https://github.com/agentscope-ai/QwenPaw/issues/8565)**
- **[#8538 — plugin Matrix falha com múltiplas workspaces](https://github.com/agentscope-ai/QwenPaw/issues/8538)**
- **[#8560 — janela desktop fica sempre no topo](https://github.com/agentscope-ai/QwenPaw/issues/8560)**
- **[#8576 — edição do agente default desabilitada no console](https://github.com/agentscope-ai/QwenPaw/issues/8576)**

**Leitura:** a comunidade está阀门ando a beta em ambientes reais, especialmente Windows, desktop, plugins e múltiplas workspaces. A quantidade de correções indica investimento contínuo, mas também sugere que a beta ainda não está suficientemente consolidada para ampla promoção.

### 2. Funcionalidade de canais e longa formatação

- **[#7997 — edição/retração de mensagens e rollback de workspace](https://github.com/agentscope-ai/QwenPaw/issues/7997)** — issue aberta com **9 comentários**, o maior volume entre as issues fornecidas.
- **[#8278 — respostas longas no DingTalk perdem Markdown](https://github.com/agentscope-ai/QwenPaw/issues/8278)** — issue fechada com **6 comentários**.
- **[#8341 — divisão de respostas longas do DingTalk](https://github.com/agentscope-ai/QwenPaw/pull/8341)** — PR fechado.
- **[#8530 — frames de progresso no canal XiaoYi](https://github.com/agentscope-ai/QwenPaw/pull/8530)** — PR aberta.

**Leitura:** há demanda clara por respostas longas, legíveis e estruturadas, além de sinais de atividade durante turnos demorados. O canal deixou de ser apenas um adaptador de mensagens e passou a ser tratado como parte da experiência de uso.

### 3. Confiabilidade de configuração e agentes

- **[#8579 — desabilitar provider deixa modelo antigo no run-config](https://github.com/agentscope-ai/QwenPaw/issues/8579)**
- **[#8576 — PUT permite editar o agente default, mas o console bloqueia](https://github.com/agentscope-ai/QwenPaw/issues/8576)**
- **[#8535 — formato de requisição de cron para agentes de terceiros](https://github.com/agentscope-ai/QwenPaw/pull/8535)**

**Leitura:** os problemas não estão apenas na infraestrutura. Eles afetam a relação entre configuração, agentes, canais e UI, criando falhas de operação que podem aparecer como erros genéricos ao usuário.

### 4. Segurança e isolamento

- **[#8574 — proteção de memória para shell](https://github.com/agentscope-ai/QwenPaw/pull/8574)**
- **[#8460 — notificações de aprovação pendente](https://github.com/agentscope-ai/QwenPaw/issues/8460)** — issue fechada.
- **[#8515 — lock de dependências em ambiente sandbox](https://github.com/agentscope-ai/QwenPaw/issues/8515)** — issue fechada.

**Leitura:** a Callable está承受ando mais responsabilidades, e os controles de segurança e aprovação precisam acompanhar essa expansão.

## 5. Bugs e estabilidade

### Severidade alta

- **[#8565 — Hub Local não inicia no Windows](https://github.com/agentscope-ai/QwenPaw/issues/8565)**  
  O runtime não sobe em Windows 10 x64, com problemas em staging AppContainer, detecção de arquitetura e timeout de readiness do reverse tunnel. É um bloqueador funcional para o fluxo local no OS.  
  Correções parciales relacionadas: **[#8577](https://github.com/agentscope-ai/QwenPaw/pull/8577)** e **[#8570](https://github.com/agentscope-ai/QwenPaw/pull/8570)**.

- **[#8579 — provider desabilitado permanece no run-config](https://github.com/agentscope-ai/QwenPaw/issues/8579)**  
  Após desabilitar um provider, o agente continua apontando para ele, causando `ProviderError` em Feishu, DingTalk, WeCom, WeChat e outros canais. O usuário recebe apenas “Internal error”, sem fallback ou diagnóstico útil.

- **[#8538 — Matrix falha ao ativar em múltiplas workspaces](https://github.com/agentscope-ai/QwenPaw/issues/8538)**  
  Em três workspaces com Matrix habilitado, o plugin não ativa nenhuma conta. A janela compartilhada de startup de 10 segundos atende apenas à primeira workspace.

### Severidade média

- **[#8560 — desktop permanece sempre no topo](https://github.com/agentscope-ai/QwenPaw/issues/8560)**  
  A janela cobre aplicações em tela cheia, vídeos, jogos borderless e apresentações. Não impede o uso geral, mas prejudica significativamente a coexistência com o desktop.

- **[#8278 — degradação silenciosa de respostas longas no DingTalk](https://github.com/agentscope-ai/QwenPaw/issues/8278)**  
  Respostas acima de aproximadamente 3.500 caracteres perdem Markdown e tabelas. O impacto é alto em relatórios, documentação e respostas structured, embora exista correção em **[#8341](https://github.com/agentscope-ai/QwenPaw/pull/8341)**.

- **[#8515 — crash de import em ambiente fnOS](https://github.com/agentscope-ai/QwenPaw/issues/8515)**  
  A instalação em sandbox do fnOS falha no startup por derivação incorreta do diretório de estado e pela variável `QWENPAW_DEPENDENCY_STATE_DIR` não documentada. A issue foi fechada, indicando tratamento no período.

- **[#8576 — agente default não editável no console](https://github.com/agentscope-ai/QwenPaw/issues/8576)**  
  O frontend desabilita a edição apesar de a API permitir a operação, criando uma inconsistência entre capacidades declaradas e UI.

### Severidade baixa a média

- **[#8460 — notificações para aprovações pendentes](https://github.com/agentscope-ai/QwenPaw/issues/8460)** — enhancement fechado; amplia a visibilidade de aprovações.
- **[#8530 — canal XiaoYi parece travado em turnos longos](https://github.com/agentscope-ai/QwenPaw/pull/8530)** — PR ainda aberta para corrigir a ausência de feedback visível durante vários minutos.
- **[#8524 — preview HTML de workspace no Windows](https://github.com/agentscope-ai/QwenPaw/pull/8524)** — PR aberta para resolver falha de abertura de URI `file://` codificada.
- **[#8522 — buffering de SSE atrás de nginx](https://github.com/agentscope-ai/QwenPaw/pull/8522)** — PR aberta; streaming pode parecer atrasado em proxies.

### Avaliação de saúde

A atividade de correções é **positiva**, mas a presença simultânea de falhas de startup, regressões de desktop e inconsistências de configuração mantém o risco operacional em nível **médio-alto** para a beta. O ritmo de 50 PRs em 24 horas é elevado, embora parte das PRs permaneça em revisão.

## 6. Pedidos de features e sinais de roadmap

### Editing,撤回 e rollback de workspace

- **[#7997 — Suporte a edição/retração de mensagens e rollback de workspace na WebUI](https://github.com/agentscope-ai/QwenPaw/issues/7997)**  
  O pedido prevê truncar o histórico subsequente e opcionalmente reverter alterações de arquivos por snapshots. É uma feature central de correção de contexto eroke de estado, especialmente relevante para agentes que executam ferramentas.

### Runtime local e modelos

- **[#8573 — instalação de runtimes Piccolo e seleção de model source](https://github.com/agentscope-ai/QwenPaw/pull/8573)**  
  Indica foco em ampliar os recursos de modelos locais, reduzindo dependência de compilação manual e simplificando a escolha entre Flash Chat e Piccolo Decisions.

### Memória e rotinas automáticas

- **[#8578 — notas diárias órfãs como lembretes de Inbox](https://github.com/agentscope-ai/QwenPaw/pull/8578)**
- **[#8557 — sessões separadas por execução de cron](https://github.com/agentscope-ai/QwenPaw/pull/8557)**

Esses PRs indicam uma linha de roadmap voltada a tornar a memória e a automação mais confiáveis: evitar perda de notas, controlar o crescimento do histórico e manter execuções independentes.

### Controle de segurança e recursos

- **[#8574 — limite de memória para shell](https://github.com/agentscope-ai/QwenPaw/pull/8574)**  
  Expõe proteção contra consumo excessivo de memória e captura de saída, especialmente importante à medida que o projeto amplia a execução de comandos e sandboxes.

### Notificações e approvals

- **[#8460 — notificações browser/OS para mensagens de aprovação](https://github.com/agentscope-ai/QwenPaw/issues/8460)**  
  A implementação fechada sugere que a experiência de aprovação está sendo objetiva de能不 deixar solicitações pendentes invisíveis.

### Personalização de plugins

- **[#8422 — tokens de tema expostos a plugins](https://github.com/agentscope-ai/QwenPaw/pull/8422)**  
  A API de customização visual está mais madura, porém com compatibilidade de plugins como considerável área de atenção.

## 7. Resumo de feedback dos usuários

### Dores reais recorrentes

1. **Falhas de instalação e inicialização em ambientes específicos**  
   Usuários relatam problemas no Hub Local em Windows, no sandbox fnOS e em ambientes gerenciados com variáveis de ambiente reduzidas.  
   - [#8565](https://github.com/agentscope-ai/QwenPaw/issues/8565)  
   - [#8515](https://github.com/agentscope-ai/QwenPaw/issues/8515)

2. **Configurações inconsistentes entre console, API e runtime**  
   O caso do provider desabilitado, mas ainda referenciado pelo agente, mostra que a interface e o backend podem divergir. Isso transforma uma mudança simples em erro para todos os canais.  
   - [#8579](https://github.com/agentscope-ai/QwenPaw/issues/8579)  
   - [#8576](https://github.com/agentscope-ai/QwenPaw/issues/8576)

3. **Respostas longas perdem qualidade visual**  
   No DingTalk, conteúdo com tabelas e Markdown é silenciosamente rebaixado para texto. O cenário affecta diretamente relatórios, dados e documentos.  
   - [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278)

4. **Ausência de feedback durante turnos longos**  
   No XiaoYi, o usuário pode observar vários minutos de silêncio e concluir que o agente travou.  
   - [#8530](https://github.com/agentscope-ai/QwenPaw/pull/8530)

5. **Interrupção do desktop por janela always-on-top**  
   A regressão afeta tasks presentation, games e consumption de vídeo.  
   - [#8560](https://github.com/agentscope-ai/QwenPaw/issues/8560)

### Cenários de uso predominantes

- Assistentes pessoais conectados a múltiplos canais, incluindo Feishu, DingTalk, WeCom, WeChat, Matrix, XiaoYi e Telegram.
- Execução de tarefas por cron e agentes de terceiros.
- Operação multi-workspace.
- Uso de modelos locais e runtimes Windows.
- Relatórios estruturados, tabelas e respostas longas.
- Uso de skills, plugins, shell, sandboxes e aprovações interativas.

### Satisfação e insatisfação

O feedback não indica ausência de investimento: há correções rápidas, PRs focadas e issues bem detalhadas. Contudo, a beta está produzindo **frustração operacional** quando falhas simples de configuração ou compatibilidade chegam ao usuário como indisponibilidade ou “Internal error”. A satisfação tende a melhorar quando há fallback, feedback visual e mensagens de erro acionáveis.

## 8. Backlog que merece atenção

> Não foram fornecidos timestamps granulares de “última resposta” para calcular com precisão a idade sem resposta. A lista abaixo prioriza itens antigos, relevantes ou ainda abertos, evitando afirmar um tempo de inatividade não confirmado.

### Prioridade crítica

- **[#7997 — edição/retração de mensagens e rollback de workspace](https://github.com/agentscope-ai/QwenPaw/issues/7997)**  
  Criada em **2026-09-27**, ainda aberta e com **9 comentários**. É o item mais antigo entre as issues em destaque e responde a uma necessidade central de controle do contexto do agente.

- **[#8538 — Matrix em múltiplas workspaces](https://github.com/agentscope-ai/QwenPaw/issues/8538)**  
  Issue aberta desde **2026-11-02**, com correção conexa em **[#8558](https://github.com/agentscope-ai/QwenPaw/pull/8558)**. Deve ser priorizada porque o problema impede o uso simultâneo de contas Matrix.

### Prioridade alta

- **[#8579 — provider desabilitado permanece no run-config](https://github.com/agentscope-ai/QwenPaw/issues/8579)**  
  Issue aberta em **2026-11-04**. Embora nova, tem impacto transversal em vários canais e merece validação de

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório ZeroClaw — 2026-11-04

## 1. Panorama do dia

O ZeroClaw apresentou atividade elevada nas últimas 24 horas: **15 issues atualizadas**, **50 pull requests atualizadas** e **48 PRs ainda abertas**, indicando uma fila de trabalho extensa e dependente de revisão ou ação dos mantenedores. O foco do dia está concentrado em **segurança de identidade e escopo de acesso**, **gateway/dashboard**, **memória e sessões**, **canais de mensagens** e **execução de ferramentas**. Também houve avanço relevante em infrastructures de release, CI, configuração, runtime e documentação. Não houve release nova, portanto, as mudanças recentes permanecem majoritariamente em fase de integração ou revisão, e o número de PRs abertas representa risco de prazo e de gargalo de manutenção.

## 2. Lançamentos

**Nenhuma nova release foi publicada em 2026-11-04.**

Assim, não há notas oficiais de versão, breaking changes ou instruções de migração para uma release nesse dia. As muitas referências a `release:v0.9.0` nas issues e PRs indicam preparação ou correção para a próxima release, mas os dados fornecidos não permitem afirmar quais mudanças já foram efetivamente publicadas.

## 3. Progresso do projeto

### PRs fechadas ou mergeadas

- **[PR #12218 — Windows Clippy change detector](https://github.com/zeroclaw-labs/zeroclaw/pull/12218)**  
  **Fechada.** A correção trata do timeout no job de detecção de mudanças do Clippy no Windows durante o `fetch-depth: 0`. O avanço é diretamente ligado à estabilidade e eficiência da CI, especialmente em repositórios com histórico extensive.

- **[PR #11272 — Embed do dashboard em kernels desktop Linux e Windows](https://github.com/zeroclaw-labs/zeroclaw/pull/11272)**  
  **Fechada.** A correção passa a incorporar o dashboard nos kernels desktop de Linux e Windows, resolvendo uma inconsistência de empacotamento em relação ao fluxo de release para macOS. Isso reduz o risco de artefatos desktop incompletos.

- **[PR #11961 — Login OIDC no dashboard](https://github.com/zeroclaw-labs/zeroclaw/issues/11961)**  
  **Issue fechada, com entrega correspondente.** O recurso adiciona login OIDC opcional ao dashboard, configurável por `[oidc.<alias>]`, sem remover o mecanismo de pairing existente. É um avanço importante para autenticação e gestão de identidade em implantações self-hosted.

### PRs abertas com avanço técnico significativo

- **[PR #11921 — Histórico append-only de eventos de sessão](https://github.com/zeroclaw-labs/zeroclaw/pull/11921)**  
  Propõe um armazenamento único e append-only para entradas aceitas, tentativas de modelo, raciocínio, ferramentas, aprovações, falhas, trocas de modelo, compressão de contexto e ações de agentes filhos. É uma mudança transversal e de alto risco, mas representa um salto importante em auditabilidade, observabilidade e recuperação de sessões.

- **[PR #12213 — Aplicação dos limites de pairing do dashboard](https://github.com/zeroclaw-labs/zeroclaw/pull/12213)**  
  Corrige uma lacuna em que `[gateway.pairing_dashboard]` era aceito na configuração, mas nunca aplicado. A PR conecta a configuração aos limites reais do gateway, inclusive códigos de pairing, API, dashboard e CLI. O avanço é relevante para impedir abuse do fluxo de autenticação.

- **[PR #11313 — Publicação de alterações de autorização no daemon em execução](https://github.com/zeroclaw-labs/zeroclaw/pull/11313)**  
  Corrige um problema operacional em que `config set` e `config patch` confirmavam a alteração no arquivo, enquanto o daemon continuava aplicando a política antiga até um reload. A mudança fecha uma janela de divergência entre configuração persistida e comportamento efetivo — especialmente relevante para políticas de autorização.

- **[PR #11301 — Recuperação de renomeações duráveis entre CLI, gateway e RPC](https://github.com/zeroclaw-labs/zeroclaw/pull/11301)**  
  Compartilha a recuperação de renomeações confirmadas entre CLI, gateway e RPC, evitando que workspace, memória, cron, ACP e sessões fiquem presos sob o alias antigo após uma falha intermediária. É um avanço importante para consistência de identidade e integridade do estado.

- **[PR #12224 — Aprovações Matrix na thread do turno](https://github.com/zeroclaw-labs/zeroclaw/pull/12224)**  
  Move os prompts de aprovação de ferramentas Matrix para a thread em que a conversa está ativa. Melhora o contexto e reduz deslocamentos do operador entre rooms e threads.

- **[PR #12198 — Fallback padrão de transcrição](https://github.com/zeroclaw-labs/zeroclaw/pull/12198)**  
  Adiciona um provedor padrão para agentes sem alias de transcrição configurado, reduzindo falhas de voz em agentes individuais.

- **[PR #12201 — Transcrição opt-in em grupos com `mention_only`](https://github.com/zeroclaw-labs/zeroclaw/pull/12201)**  
  Permite processar notas de voz sem menção explícita quando a transcrição é habilitada, preservando como padrão a necessidade de menção em outros casos.

- **[PR #12197 — Contexto de replies do Telegram com mídia](https://github.com/zeroclaw-labs/zeroclaw/pull/12197)**  
  Inclui captions e caminhos de voz no contexto de respostas, evitando que o agente perca conteúdo essencial ao responder a mensagens de mídia.

- **[PR #12223 — Orçamentos agregados para stores de plugins](https://github.com/zeroclaw-labs/zeroclaw/pull/12223)**  
  Limita a soma de memória linear e elementos de tabela entre stores de plugins. O ajuste evita que múltiplas memórias ou tabelas sejam limitadas isoladamente, fechando umapotential via de consumo excessivo de recursos.

- **[PR #12215 — Atualizações do grupo Rust](https://github.com/zeroclaw-labs/zeroclaw/pull/12215)**  
  Atualiza 36 dependências Rust. A atividade é rotineira, mas aumenta a superfície de manutenção e requer atenção a compatibilidade e regressões.

- **[PR #11999 — Atualizações do grupo GitHub Actions](https://github.com/zeroclaw-labs/zeroclaw/pull/11999)**  
  Atualiza nove dependências de Actions, incluindo CodeQL e rust-cache. É manutenção importante para a postura de segurança e eficiência da CI.

## 4. Temas quentes da comunidade

### Sessões, memória e identidade de agentes

O conjunto mais relevante é formado por:

- **[PR #11921 — histórico append-only](https://github.com/zeroclaw-labs/zeroclaw/pull/11921)**
- **[PR #11301 — recuperação de renomeações](https://github.com/zeroclaw-labs/zeroclaw/pull/11301)**
- **[PR #10407 — anexos persistentes de prompts de sessão](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)**
- **[Issue #11198 — ferramentas de memória delegada perdem o escopo do principal](https://github.com/zeroclaw-labs/zeroclaw/issues/11198)**
- **[Issue #11126 — operações enfileiradas mantêm bypass de ownership revogado](https://github.com/zeroclaw-labs/zeroclaw/issues/11126)**

A demanda central é clara: o sistema precisa manter **isolamento de contexto e identidade** mesmo quando há delegação a agentes filhos, operações pendentes, renomeações ou restaurações após falhas. A community está priorizando mecanismos que permitam depurar e recuperar estados sem abrir caminho para vazamento entre principals.

### Gateway, dashboard e autenticação

- **[Issue #9572 — overflow da stack de workers Tokio no WebSocket de debug](https://github.com/zeroclaw-labs/zeroclaw/issues/9572)**
- **[Issue #11951 — falhas de upgrade WebSocket no listener TLS embutido](https://github.com/zeroclaw-labs/zeroclaw/issues/11951)**
- **[Issue #11961 — login OIDC](https://github.com/zeroclaw-labs/zeroclaw/issues/11961)**
- **[PR #12213 — limites de pairing do dashboard](https://github.com/zeroclaw-labs/zeroclaw/pull/12213)**
- **[PR #11313 — mudanças de autorização aplicadas ao daemon](https://github.com/zeroclaw-labs/zeroclaw/pull/11313)**

A comunidade está priorizando um dashboard operacionalmente confiável e seguro. Há simultaneamente problemas de transporte WebSocket, stack overflow, autenticação OIDC, controles de pairing e propagação de políticas de autorização.

### Canais, mídia e语音

- **[PR #12197 — mídia em replies do Telegram](https://github.com/zeroclaw-labs/zeroclaw/pull/12197)**
- **[PR #12201 — transcrição em grupos](https://github.com/zeroclaw-labs/zeroclaw/pull/12201)**
- **[PR #12198 — fallback de transcrição](https://github.com/zeroclaw-labs/zeroclaw/pull/12198)**
- **[PR #11765 — feedback quando a voz do WhatsApp não é transcrita](https://github.com/zeroclaw-labs/zeroclaw/pull/11765)**
- **[PR #11759 — QR codes de listeners WhatsApp parados](https://github.com/zeroclaw-labs/zeroclaw/pull/11759)**
- **[PR #11757 — preservation de captions no WhatsApp](https://github.com/zeroclaw-labs/zeroclaw/pull/11757)**
- **[Issue #6437 — canal Zulip com long-poll](https://github.com/zeroclaw-labs/zeroclaw/issues/6437)**

O foco é tornar a interação multimodal confiável em mensageiros: preservar captions,Includes voz, evitar perda silenciosa, informar falhas e reduzir requisitos de menção sem abrir risco de responder mensagens não destinadas ao agente.

### Shell, tarefas longas e lifecycle

- **[Issue #12119 — timeouts no Windows deixam processos descendentes ativos](https://github.com/zeroclaw-labs/zeroclaw/issues/12119)**
- **[Issue #11954 — shell de longa duração com modos async/sync e terminal interativo](https://github.com/zeroclaw-labs/zeroclaw/issues/11954)**
- **[PR #11954 — execução interativa e tarefas longas](https://github.com/zeroclaw-labs/zeroclaw/issues/11954)**

A demanda indica que o shell atual é insuficiente para agentes que precisam executar operações prolongadas, receber entrada do usuário e cancelar com segurança. O caso do Windows expõe um risco concreto de processos órfãos, diretamente ligado a isolamento e consumo de recursos.

## 5. Bugs e estabilidade

### Críticos / prioridade P0 — segurança e isolamento

- **[Issue #11198 — escopo do principal perdido em ferramentas de memória delegada](https://github.com/zeroclaw-labs/zeroclaw/issues/11198)**  
  **Impacto:** risco de acesso a dados de outro principal e exposição de memória privada por um agente delegado.  
  **Status:** fechada. A correção está associada ao alvo `v0.9.0`.

- **[Issue #11126 — bypass revogado preservado em operações enfileiradas](https://github.com/zeroclaw-labs/zeroclaw/issues/11126)**  
  **Impacto:** operações pendentes podem manter privilégios de administrador após revogação.  
  **Status:** fechada, com risco residual indicado no próprio issue: a implementação anteriorcobria apenas parte dos caminhos de stale grant. Deve ser validada com testes de revogação.

### Alta prioridade / risco elevado

- **[Issue #9572 — stack overflow no gateway WebSocket](https://github.com/zeroclaw-labs/zeroclaw/issues/9572)**  
  **Impacto:** o processo do gateway pode abortar durante um turno do agente, causando indisponibilidade.  
  **Status:** aberta. É um problema de estabilidade com impacto operacional relevante.

- **[Issue #12119 — processos descendentes sobrevivem a timeout no Windows](https://github.com/zeroclaw-labs/zeroclaw/issues/12119)**  
  **Impacto:** shell, skills e coding CLIs podem continuar executando após timeout ou cancelamento, gerando uso não controlado de CPU, rede e recursos.  
  **Status:** aberta.

- **[PR #12213 — limites de pairing nãoapplied](https://github.com/zeroclaw-labs/zeroclaw/pull/12213)**  
  **Impacto:** a configuração de proteção era aceita, mas sem efeito real.  
  **Status:** aberta; PR de correção em revisão.

- **[PR #11313 — política de autorização não chega ao daemon](https://github.com/zeroclaw-labs/zeroclaw/pull/11313)**  
  **Impacto:** o daemon pode continuar autorizando ou rejeitando operações segundo uma configuração obsoleta.  
  **Status:** aberta;awaiting maintainer review.

- **[PR #11301 — estado órfão após renomeação](https://github.com/zeroclaw-labs/zeroclaw/pull/11301)**  
  **Impacto:** workspace, memória, cron, ACP ou sessões podem ficar inacessíveis após falha no commit de rename.  
  **Status:** aberta.

### Média prioridade

- **[Issue #12109 — suporte a múltiplos repositórios de plugins](https://github.com/zeroclaw-labs/zeroclaw/issues/12109)**  
  Hoje só é possível configurar um `ZEROCLAW_PLUGIN_REGISTRY_URL`, limitando a combinação de registries próprios e comunitários.

- **[Issue #12221 — warnings de variáveis retiradas no `config migrate`](https://github.com/zeroclaw-labs/zeroclaw/issues/12221)**  
  Falta de consistência na sinalização de variáveis `ZEROCLAW_*` obsoletas durante a migração.

- **[Issue #11623 — prompt `ask_user` descartado no ZeroCode](https://github.com/zeroclaw-labs/zeroclaw/issues/11623)**  
  O prompt pendente é removido sem resposta, causando timeout de 600 segundos e perda do registro da pergunta.  
  **Status:** fechada.

- **[Issue #11579 — migração de configuração V1/V2 pulada](https://github.com/zeroclaw-labs/zeroclaw/issues/11579)**  
  `save_dirty` gravava `schema_version = 3` sobre um documento ainda não migrado, podendo fazer o agente desaparecer no carregamento seguinte.  
  **Status:** fechada.

- **[Issue #12210 — builds Docker de source quebrados](https://github.com/zeroclaw-labs/zeroclaw/issues/12210)**  
  O fixture `tests/fixtures/runtime-composition-consumer` não era copiado antes do prefetch, bloqueando builds Docker.  
  **Status:** fechada.

- **[Issue #11951 — WebSocket falha sob TLS embutido](https://github.com/zeroclaw-labs/zeroclaw/issues/11951)**  
  O listener respondia `101 Switching Protocols`, mas encerrava a conexão, afetando dashboard e rotas WebSocket.  
  **Status:** fechada.

### Baixa prioridade / documentação

- **[Issue #12217 — documentação de email tools-only](https://github.com/zeroclaw-labs/zeroclaw/issues/12217)**  
  A documentação deve esclarecer que a ativação de aliases de aprovação também inicia o listener IMAP.

## 6. Pedidos de features e sinais de roadmap

### Provisionamento e extensibilidade

- **[Issue #12109 — múltiplos repositórios de plugins](https://github.com/zeroclaw-labs/zeroclaw/issues/12109)**  
  Sugere `ZEROCLAW_PLUGIN_REGISTRY_URL` como lista separada por vírgulas. É uma extensão natural para ambientes self-hosted eBYOK.

- **[Issue #6437 — canal Zulip](https://github.com/zeroclaw-labs/zeroclaw/issues/6437)**  
  Propõe suporte a streams, threads e DMs via long-poll. A issue está marcada como parking lot, indicando demanda real, mas prioridade de roadmap ainda baixa.

### Shell e interação humana

- **[Issue #11954 — shell de longa duração, async/sync e terminal interativo](https://github.com/zeroclaw-labs/zeroclaw/issues/11954)**  
  Deixa claro o direcionamento do produto para tarefas shell prolongadas e supervisão humana. A combinação com **[Issue #12119](https://github.com/zeroclaw-labs/zeroclaw/issues/12119)** sugere que cancelamento e isolamento de processos serão requisitos centrais desse trabalho.

### Sessões e persistência

- **[PR #11921](https://github.com/zeroclaw-labs/zeroclaw/pull/11921)**, **[PR #10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)** e **[PR #11301](https://github.com/zeroclaw-labs/zeroclaw/pull/11301)** apontam para um roadmap de sessões duráveis, auditáveis e resilientes, com anexos, histórico estruturado e recuperação consistente de mudanças de identidade.

### Autenticação e operação self-hosted

- **[Issue #11961 — OIDC no dashboard](https://github.com/zeroclaw-labs/zeroclaw/issues/11961)** e **[PR #12213 — pairing limits](https://github.com/zeroclaw-labs/zeroclaw/pull/12213)** reforçam a direção de esgotamento de autenticação local única em favor de OIDC e controles explícitos.

### Provável composição da próxima release

Com base nos labels, a próxima release parece dever incorporar correções de segurança e empacotamento, especialmente:

1. isolamento de memória delegada;
2. revogação de ownership em operações enfileiradas;
3. migração segura de configuração;
4. WebSocket sob TLS;
5. builds Docker;
6. embedding do dashboard em kernels desktop;
7. enforcement dos limites de pairing;
8. autenticação OIDC.

These are roadmap signals, not a formal release plan; release scope still depends on review and merge status.

## 7. Resumo de feedback dos usuários

As dores reportadas concentram-se em **falhas de consistência e de reação a ações do usuário**, mais do que na falta de capacidade bruta do agente:

- **Mensagens de mídia frequentemente perdem seu conteúdo.** No Telegram e WhatsApp, captions, respostas por voz e arquivos são reduzidos a placeholders ou texto vazio. Isso prejudica fluxos de análise multimodal, especialmente quando

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*