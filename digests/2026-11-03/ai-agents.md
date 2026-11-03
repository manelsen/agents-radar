# Resumo diário do ecossistema de agentes de IA 2026-11-03

> Issues: 0 | PRs: 3 | Projetos cobertos: 7 | Gerado em: 2026-11-03 01:17 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Análise aprofundada do projeto principal

# Relatório do projeto NullClaw — 03/11/2026

## 1. Panorama do dia

O NullClaw apresenta atividade técnica concentrada em correções de estabilidade, com **3 pull requests abertas e atualizadas nas últimas 24 horas**, mas sem issues novas ou atualizadas no mesmo período ([pull requests](https://github.com/nullclaw/nullclaw/pulls) · [issues](https://github.com/nullclaw/nullclaw/issues)). As contribuições tratam de segurança de memória no daemon, suporte real a proxies SOCKS5 e prevenção de loops de reinício de canais. Não houve releases, merges ou fechamentos de PRs no recorte analisado. O sinal geral é de **manutenção ativa e foco em confiabilidade**, porém com baixa interação visível da comunidade — as três PRs não têm comentários ou reações registrados.

## 2. Lançamentos

- **Nenhuma nova release publicada em 03/11/2026.** Não há, portanto, versões, breaking changes ou notas de migração adicionais para reportar.  
  Fonte: [página de releases do NullClaw](https://github.com/nullclaw/nullclaw/releases)

## 3. Progresso do projeto

- **Nenhuma PR foi merged ou fechada hoje.** As três alterações seguem abertas, aguardando revisão, validação e integração. A ausência de merges significa que os reparos ainda não fazem parte de uma branch estável ou release publicada.  
  Fonte: [pull requests abertas](https://github.com/nullclaw/nullclaw/pulls)

- **PR #1090 — preservação da posse de memória durante falhas de alocação:** proposes copiar strings antes de liberar os valores anteriores no processo de substituição de entregas do scheduler. O avanço esperado é eliminar um risco de *use-after-free* no teardown do daemon quando uma alocação falha.  
  Fonte: [PR #1090 — `fix(daemon): keep delivery ownership valid on allocation failure`](https://github.com/nullclaw/nullclaw/pull/1090)

- **PR #1089 — encaminhamento de proxies SOCKS5 pelo curl:** corrige uma divergência entre a documentação/configuração e a implementação HTTP, que anunciava suporte a `socks5://`, mas não roteava o tráfego pelo proxy. Se integrada, improves conformidade funcional e maior controle sobre conexões de saída.  
  Fonte: [PR #1089 — `fix(http): route socks5 proxies through curl instead of silently ignoring them`](https://github.com/nullclaw/nullclaw/pull/1089)

- **PR #1088 — preservação do orçamento de reinícios:** impede que o registro de sucesso logo após o lançamento de um restart zere o contador e o backoff. A correção deve reduzir a chance de loops de hot restart em canais instáveis.  
  Fonte: [PR #1088 — `fix(channels): keep restart budget when a restart is launched`](https://github.com/nullclaw/nullclaw/pull/1088)

## 4. Temas quentes da comunidade

- **Não há issues ou PRs com comentários e reações suficientes para設置 um ranking comunitário.** As três PRs abertas exibem **0 reações e nenhum número de comentários registrado**, indicando baixa participação pública no recorte de 24 horas.  
  Fonte: [pull requests do NullClaw](https://github.com/nullclaw/nullclaw/pulls)

- Despite the low engagement, the recurring theme is **robustness of long-running operation**—memory ownership, proxy handling, and restart supervision—rather than expansion of product features.  
  Fonte: [PR #1090](https://github.com/nullclaw/nullclaw/pull/1090) · [PR #1089](https://github.com/nullclaw/nullclaw/pull/1089) · [PR #1088](https://github.com/nullclaw/nullclaw/pull/1088)

- These topics may reflect maintainer- or contributor-driven engineering rather than broad community demand; the available data does not support attributing them to a larger user consensus.  
  Fonte: [repositório NullClaw](https://github.com/nullclaw/nullclaw)

## 5. Bugs e estabilidade

### Severidade alta

- **Potencial corruption/use-after-free in daemon teardown:** PR #1090 describes an allocation-failure path in which the old string value could be released before ownership was successfully transferred. Depending on allocator failure timing and subsequent teardown, this can cause invalid memory access or process instability. The PR remains open and unmerged.  
  Source: [PR #1090](https://github.com/nullclaw/nullclaw/pull/1090)

### Severidade média-alta

- **Hot restart loop in supervised channels:** PR #1088 identifies a restart-budget reset immediately after launching a restart, which can suppress backoff and repeatedly relaunch a failing channel. The practical impact is elevated CPU usage, log noise, and unnecessary resource churn. The PR remains open and unmerged.  
  Source: [PR #1088](https://github.com/nullclaw/nullclaw/pull/1088)

### Severidade média

- **Silent failure to honor SOCKS5 proxy configuration:** PR #1089 notes that `socks5://` was accepted in configuration and documentation while the HTTP layer effectively ignored it. Users may believe traffic is proxied when it is not, creating privacy, routing, and connectivity risks. The PR remains open and unmerged.  
  Source: [PR #1089](https://github.com/nullclaw/nullclaw/pull/1089)

- **No crash, outage, or regression was reported through new issues during the period.** The absence of issue activity should not be interpreted as proof that no runtime failures exist, especially since there are no release or operational telemetry data in the provided dataset.  
  Source: [issues abertas e fechadas](https://github.com/nullclaw/nullclaw/issues)

## 6. Pedidos de features e sinais de roadmap

- **No new feature requests were registered today.** There are no open issues in the supplied dataset from which to infer a broader roadmap.  
  Source: [issues do NullClaw](https://github.com/nullclaw/nullclaw/issues)

- **Operational hardening is the clearest near-term roadmap signal.** The pending changes prioritize daemon memory safety, correct network routing, and stable channel supervision rather than adding new capabilities. These are plausible candidates for the next maintenance release, pending maintainer review and testing.  
  Source: [PR #1090](https://github.com/nullclaw/nullclaw/pull/1090) · [PR #1089](https://github.com/nullclaw/nullclaw/pull/1089) · [PR #1088](https://github.com/nullclaw/nullclaw/pull/1088)

- **Proxy support stands out as a user-facing capability already promised but not fully implemented.** Successful integration of PR #1089 would bring the implementation into alignment with existing configuration and documentation; it should be validated against authentication, DNS behavior, connection failures, and expected transport semantics before release.  
  Source: [PR #1089](https://github.com/nullclaw/nullclaw/pull/1089)

## 7. Resumo do feedback dos usuários

- **No new user feedback was captured today:** there are no updated issues, comments, or reactions to analyze, and all three PRs show zero reactions and undefined comment counts. Consequently, there is no evidence to quantify satisfaction, recurring complaints, or priority use cases from the community.  
  Source: [issues](https://github.com/nullclaw/nullclaw/issues) · [pull requests](https://github.com/nullclaw/nullclaw/pulls)

- The PR descriptions nevertheless expose three practical pain points: **failure handling in the daemon, unreliable proxy routing, and repeated channel restarts**. These affect users who need the agent to remain resident, communicate through restricted networks, or supervise unstable messaging integrations.  
  Source: [PR #1090](https://github.com/nullclaw/nullclaw/pull/1090) · [PR #1089](https://github.com/nullclaw/nullclaw/pull/1089) · [PR #1088](https://github.com/nullclaw/nullclaw/pull/1088)

- Overall satisfaction cannot be inferred from the available data. The project appears focused on resolving technical edge cases, but the lack of visible discussion suggests limited community feedback in this reporting window.  
  Source: [NullClaw no GitHub](https://github.com/nullclaw/nullclaw)

## 8. Backlog que merece atenção

- **PR #1090 should receive priority review** because it addresses memory ownership under allocation failure, with potentially severe daemon-level consequences if the defective path is exercised. Validation should include allocator-failure injection and repeated daemon teardown tests.  
  Source: [PR #1090](https://github.com/nullclaw/nullclaw/pull/1090)

- **PR #1088 should be validated with repeated channel failures** to confirm that restart counters increase, backoff remains effective, and successful recovery eventually clears the budget without masking a failing startup.  
  Source: [PR #1088](https://github.com/nullclaw/nullclaw/pull/1088)

- **PR #1089 requires integration and compatibility tests** for SOCKS5 routing, including authenticated proxies, DNS resolution, timeout behavior, and cases where the proxy is unavailable.  
  Source: [PR #1089](https://github.com/nullclaw/nullclaw/pull/1089)

- **No stale issues can be identified from the provided dataset.** All three PRs were created and updated on 02/11/2026, and no open issues were supplied; therefore, there is no evidence of an older backlog item awaiting maintainer response.  
  Source: [issues do NullClaw](https://github.com/nullclaw/nullclaw/issues) · [pull requests do NullClaw](https://github.com/nullclaw/nullclaw/pulls)

**Avaliação geral de saúde:** projeto **tecnicamente ativo, com baixa visibilidade comunitária e atenção positiva à estabilidade**. O principal risco imediato é que correções relevantes ainda permanecem abertas, sem uma release publicada que as disponibilize aos usuários.

---

## Comparação entre projetos do ecossistema

# Relatório comparativo do ecossistema — 03/11/2026

## 1. Visão geral do ecossistema

O ecossistema apresentou forte concentração de atividade em **Hermes Agent, ZeroClaw, CoPaw/QwenPaw e NanoBot**, com especial ênfase em runtime, sessões, integrações, segurança, MCP e superfícies desktop/web. O **Hermes Agent** combinou o maior volume de trabalho com uma release consolidada, enquanto ZeroClaw e QwenPaw mantiveram backlogs extensos e riscos relevantes de segurança ou estabilidade. **NullClaw** teve atividade baixa, porém concentrada em três correções de alto valor operacional — segurança de memória, proxies SOCKS5 e controle de reinícios — ainda não整合idas. **IronClaw** aparece em manutenção rotineira de TLS, enquanto **PicoClaw** não oferece sinais suficientes para avaliar atividade ou saúde.

> As contagens abaixo representam itens **atualizados no recorte de 24 horas**, e não o tamanho total dos backlogs. Além disso, o material identificado como CoPaw corresponde ao repositório [`agentscope-ai/QwenPaw`](https://github.com/agentscope-ai/QwenPaw).

## 2. Comparação de atividade

| Projeto | Issues atualizadas | PRs atualizadas | Releases no recorte | Situação observada | Avaliação de saúde |
|---|---:|---:|---|---|---|
| **NullClaw** | 0 | 3 | 0 | Três correções de estabilidade ainda abertas | **Saudável, com baixa atividade e entrega pendente** |
| **NanoBot** | 5 | 10 | 0 | Seis PRs encerradas; quatro ainda abertas, três com conflitos | **Desenvolvimento acelerado, com risco moderado de integração** |
| **Hermes Agent** | 50 | 50 | 1 — `v0.22.6` | Grande revisão em gateway, desktop, sessões e segurança | **Alta atividade e melhor throughput; backlog ainda pesado** |
| **PicoClaw** | 0 | 0 | 0 | Sem atividade no período | **Sem sinal para avaliar** |
| **IronClaw** | 0 | 4 | 0 | Atualizações de `rustls` no componente e no harness | **Estável em manutenção, pouco desarrollo de produto** |
| **CoPaw/QwenPaw** | 22 | 46 | 1 — `v2.3.0-beta.2` | Console e inicialização advances, com 31 PRs ainda abertas | **Muito ativo, porém em beta e com backlog crescente** |
| **ZeroClaw** | 48 | 50 | 0 | Foco em sandbox, autorização, paths, OIDC e dashboard; 46 PRs abertas | **Muito ativo, com forte risco de segurança até integração** |

### Leitura comparativa

- **Maior atividade:** Hermes Agent, ZeroClaw e QwenPaw.
- **Melhor sinal de entrega:** Hermes Agent, pela `v0.22.6` e pelo rollup de aproximadamente 776 PRs.
- **Melhor volume de correções encerradas:** NanoBot.
- **Atividade mais concentrada em qualidade:** NullClaw, com três correções pequenas e diretamente ligadas à confiabilidade.
- **Atividade mais discreta:** IronClaw, limitada a manutenção de `rustls`.
- **Sem dados suficientes:** PicoClaw.

## 3. Posicionamento do projeto principal — NullClaw

### Vantagens frente aos pares

1. **Superfície de mudança pequena e revisável.**  
   Diferente de Hermes, ZeroClaw e QwenPaw, que atravessam múltiplas camadas, NullClaw concentrou o trabalho em três correções delimitadas:
   - [#1090](https://github.com/nullclaw/nullclaw/pull/1090): ownership de memória sob falha de alocação;
   - [#1089](https://github.com/nullclaw/nullclaw/pull/1089): roteamento real de proxies SOCKS5;
   - [#1088](https://github.com/nullclaw/nullclaw/pull/1088): preservação do orçamento de reinícios.

2. **Prioridade correta para operação contínua.**  
   O foco em memória, conectividade e reinício é mais diretamente relacionado à confiabilidade de agentes residentes do que mudanças de interface ou adição de capacidades.

3. **Menor ruído arquitetural.**  
   A atividade não inclui mudanças de UX, plugins ou múltiplas integrações, reduzindo o custo de validação e o risco de regressões cruzadas.

4. **Clareza funcional já existente.**  
   A PR de SOCKS5 não cria uma nova promessa: ela alinha a implementação a uma configuração e documentação que já prometem esse comportamento.

### Diferenças técnicas

NullClaw apresenta um perfil mais **daemon-centric e orientado à estabilidade de processos de longa duração**. O contraste é evidente:

- **Hermes Agent:** plataforma extensa, com gateway, desktop, cloud, CLI, sessões remotas e múltiplos canais.
- **ZeroClaw:** foco muito forte em isolamento, capabilities, paths, sandbox, OIDC e autorização.
- **QwenPaw:** ecossistema Console-first, multiworkspace, plugins, memória e integrações.
- **NanoBot:** maior ênfase em runtime do agente, MCP, WebUI, CLI e canais.
- **IronClaw:** manutenção incremental de dependências TLS e benchmarking.
- **NullClaw:** correções operacionais pontuais, sem ciclo recente de expansão de produto.

### Tamanho e maturidade da comunidade

O recorte indica **baixa visibilidade comunitária**, não necessariamente uma comunidade pequena:

- nenhuma issue atualizada;
- três PRs sem comentários ou reações;
- nenhum merge ou fechamento;
- nenhum novo sinal de adoção ou dependência externa.

Não foram fornecidos dados de estrelas, forks, número de contribuidores ou Retainers. Portanto, qualquer afirmação sobre o tamanho absoluto da comunidade seria especulativa. O que se pode afirmar é que o **volume de participação pública visível foi baixo**, em contraste com Hermes, QwenPaw e ZeroClaw.

O principal risco posicional de NullClaw é operacional: embora as correções sejam valiosas, **nenhuma foi entregue aos usuários** e todas permanecem sem validação pública aparente.

## 4. Focos técnicos compartilhados

### 4.1 Confiabilidade de agentes de longa duração

O tema aparece em quase todos os projetos:

- NullClaw: ownership de memória e orçamento de reinícios;
- NanoBot: preservação do recovery history e prevenção de replay MCP;
- Hermes: vazamento de descritores SQLite e sessões que se degradam com o tempo;
- QwenPaw: crescimento de memória superior a 20 GB e perda silenciosa de memórias;
- ZeroClaw: isolamento de memória entre subagentes e pipelines.

A necessidade comum éCLR: **o agente deve permanecer executável e consistente por horas ou dias**, sem corrupt state, hot loops, perda de contexto ou crescimento ilimitado de recursos.

### 4.2 Segurança de ferramentas, sandbox e autorização

ZeroClaw é o caso mais urgente, com UNC paths, validação de arquivos, SSE MCP, capabilities e escaping de sandbox. Hermes também apresenta vulnerabilidades npm e falhas de identidade no Windows. Isso evidencia uma convergeência em torno de:

- isolamento por workspace;
- capabilities explícitas;
- proteção contra SSRF e redirecionamentos;
- validação canônica de paths;
- separação entre identidade do chamador e autoridade administrativa;
- defaults seguros para arquivos sensíveis.

### 4.3 Integridade de ferramentas e MCP

NanoBot。重点 em replay de operações cujo resultado é desconhecido, blocos MCP não textuais e chamadas paralelas sem `index`. Hermes aborda capabilities de Slack e Discord incorretamente declaradas. O ponto técnico comum éjg: **o runtime precisa diferenciar falha, resultado incerto, erro já processado e sucesso**, sem repetir efeitos externos nem descartar respostas.

### 4.4 Persistência de sessões e continuidade

Hermes apresenta memória congelada em sessões desktop longas, falhas de lineage e sessões de automação rejeitadas. QwenPaw relata quebra de conversas após troca de provider e descarte de memórias. NullClaw, indiretamente, também participa desse eixo ao preservar ownership durante teardown. A sessões emerged como camada de primeira classe, não apenas histórico de chat.

### 4.5 Integrações com canais e serviços externos

WhatsApp, Linear, DingTalk, Matrix, Telegram, Discord e Slack aparecem recorrentemente. Os problemas não são apenas erros de API: incluem dependências desatualizadas, authorization callbacks, webhooks expirados, timeouts proporcionais ao tamanho do arquivo, capability notes incorretas e roteamento de destinatários ambiguo.

### 4.6 Operação multiplataforma e de empacotamento

Hermes enfrenta problemas específicos de Windows, macOS, Docker e Android. QwenPaw registra crash em sandboxes POSIX/NAS e regressões no Windows. ZeroClaw指出 falhas de builds glibc/musl, paths UNC e propagação de `APPDATA`/`LOCALAPPDATA`. Isso mostra que “funciona localmente” ainda não equivale a uma distribuição multiplataforma robusta.

### 4.7 Observabilidade e entrega confiável

QwenPaw relato falhas silenciosas em Daily Paper, DingTalk e extração de memórias. NullClaw teve proxy SOCKS5 aceito, mas ignorado silenciosamente. NanoBot teve falhas de ferramentas pouvant ser descartadas. O padrão é claro: **sucesso aparente sem entrega ou diagnóstico acionável** é um problema transversal.

## 5. Análise de diferenciação

| Projeto | Foco dominante | Público-alvo provável | Perfil arquitetural/operacional |
|---|---|---|---|
| **NullClaw** | Agente resident confiável, daemon e canais | Usuários que precisam de operação contínua e integração por mensagens | Runtime compacto, orientado a correções de núcleo |
| **NanoBot** | Runtime multi-provider, MCP, WebUI, CLI e canais | Desenvolvedores e usuários de framework pessoal extensível | Camadas múltiplas de runtime e interfaces |
| **Hermes Agent** | Plataforma integral de assistente pessoal | Usuários desktop, CLI, cloud e automações empresariais | Ecossistema amplo, com gateway, desktop, installers e connectors |
| **PicoClaw** | Indeterminado no recorte | Não identificável | Sem dados |
| **IronClaw** | Manutenção de TLS e infraestrutura de benchmark | Operadores e mantenedores | Projeto de ritmo baixo, orientado a manutenção |
| **CoPaw/QwenPaw** | Console, multiworkspace, plugins, memória e canais | Usuários de console e equipes que operam assistants compartilhados | Plataforma beta com forte governança de produto e extension ecosystem |
| **ZeroClaw** | Security-first, sandbox, capabilities e gateway | Operadores sensíveis a isolamento e autorização | Runtime com boundary explícita de privilégios e paths |

### Conclusões de diferenciação

- **NullClaw** é o mais **focado e mínimo** no recorte, mas ainda não demonstra velocidade de integração ou证据 de maturidade comunitária.
- **Hermes** oferece a experiência mais completa como plataforma, porém com uma superfície operacional e de manutenção muito maior.
- **ZeroClaw** se diferencia por threat modeling rigoroso, mas o número de violações ainda abertas impede considerá-lo endurecido.
- **QwenPaw** se aproxima de uma plataforma de produto para equipes, enquanto **NanoBot** permanece mais framework técnico e extensível.
- **IronClaw** não competing por amplitude; sua estratégia observável é manutenção incremental.
- **PicoClaw** precisa de atividade observável para ser posicionado.

## 6. Tração e maturidade da comunidade

### Iterando mais rápido

1. **Hermes Agent** — 100 itens atualizados, 776 PRs consolidadas na release e trabalho simultâneo em todas as camadas do produto.
2. **ZeroClaw** — 98 itens atualizados e correções concretas em segurança, runtime e dashboard.
3. **CoPaw/QwenPaw** — 68 itens atualizados, release beta e evolução acelerada do Console e do ecossistema de plugins.
4. **NanoBot** — 15 itens atualizados, seis PRs encerradas e trabalho intenso em MCP, runtime e UX.

### Consolidando qualidade

- **Hermes Agent** é o único do grupo com evidência clara de consolidação em release, embora ainda mantenha muitos bugs abertos.
- **NanoBot** encerrou seis PRs, mas há conflicts e divergência entre “fechada” e “merged”, reduzindo a certeza sobre a entrega.
- **NullClaw** está consolidando qualidade conceitualmente: o conjunto de mudanças é pequeno e coerente. Entretanto, ainda não consolidou entrega prática, pois nenhuma PR foi merged ou fechada.
- **IronClaw** está na fase mais pura de manutenção, com dependência TLS coerente entre componente e harness.
- **PicoClaw** não apresenta sinais suficientes.

### Engajamento comunitário

O engajamento visível é, em geral, baixo para todos os projetos. Destaques:

- QwenPaw tem a discussão mais relevante: [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318), com 36 comentários e quatro reações sobre edição multi-tenant.
- Hermes concentra as discussões com maior profundidade técnica sobre dependências, circuit breaker, sessões e SQLite.
- ZeroClaw possui issue architecturalamente estratégica sobre Rust/WASM, mas ainda bloqueada por decisão de maintainer.
- NullClaw, NanoBot e IronClaw exibem pouca ou nenhuma reação pública no recorte.

Isso sugere que a **velocidade de merge é maior que a velocidade de decisão comunitária**. A maturidade não deve ser inferida apenas do volume bruto de issues e PRs.

## 7. Sinais de tendência

### 7.1 Da expansão funcional para o “hardening”

O centro de gravidade do ecossistema migrou de “adicionar agentes e canais” para **garantir que ferramentas, sessões, memórias e integrações falhem de forma segura**. Correções de ownership, replay MCP, auth, sandbox e restart loops aparecem em múltiplos projetos.

### 7.2 MCP como superfície de risco de primeira classe

MCP está se consolidando como protocolo central, mas traz desafios próprios: idempotência, retries, resultados incertos, recursos não textuais, redirecionamento SSE e capabilities. A tendência é tratar cada tool call como uma transação potencialmente duplicável ou parcialmente concluída.

### 7.3 Agentos como processosداemon e plataformas de longa duração

Sessões desktop, workers cron/Kanban, gateways e assistentes residentes exigem state machines explícitas. O mercado está se movendo de “uma requisição por vez” para **supervisão contínua, recovery, backoff, persistência eintegridade de estado**.

### 7.4 Sandbox e autorização como elementos de produto

ZeroClaw e Hermes demonstram que isolamento não pode ser um detalhe de implementação. Capabilities, paths seguros, identidade da plataforma, autoridade administrativa e token binding estão se tornando requisitos explícitos de deployment.



---

## Relatórios detalhados dos projetos relacionados

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# Relatório do projeto NanoBot — 2026-11-03

## 1. Panorama do dia

O NanoBot apresentou atividade técnica elevada nas últimas 24 horas, com **5 issues abertas**, **10 PRs atualizadas** e **6 PRs encerradas**, contra 4 ainda abertas. O trabalho reciente está concentrado em **runtime do agente, integrações com WhatsApp/Linear, WebUI, MCP e compatibilidade entre provedores**. embora seis PRs tenham sido encerradas, **não foi publicada nenhuma release**, portanto o estado das correções e melhorias ainda não está necessariamente disponível para usuários. O balanço geral é de **boa velocidade de desenvolvimento**, mas com risco moderado de estabilidade: há cinco bugs abertos, vários deles em fluxos importantes, e três PRs abertas apresentam indication de conflito.

**Indicadores de atividade**

| Indicador | Resultado |
|---|---:|
| Issues atualizadas | 5 |
| Issues abertas | 5 |
| Issues fechadas | 0 |
| PRs atualizadas | 10 |
| PRs abertas | 4 |
| PRs merged/fechadas | 6 |
| Novas releases | 0 |
| Proporção de PRs encerradas | 60% |

## 2. Lançamentos

**Nenhuma nova versão foi publicada em 2026-11-03.** Assim, não há mudanças oficiais, breaking changes ou notas de migração-associated a uma release neste dia.

- [Página de releases do NanoBot](https://github.com/HKUDS/nanobot/releases)
- [Tags do repositório](https://github.com/HKUDS/nanobot/tags)

A ausência de release significa que correções recém-encerradas—such as relacionadas ao runtime/MCP e à WebUI—podem ainda estar apenas na branch principal ou aguardando validação e empacotamento.

## 3. Progresso do projeto

As seis PRs encerradasrepresents the principal avanço do dia. O status disponível é **closed**; o conjunto fornecido não permite distinguir com segurança quais foram efetivamente merged por squash, merge commit ou fechamento administrativo.

### Correções de segurança e integridade do runtime

- **[PR #6537 — preserve recovery history and prevent unsafe MCP replays](https://github.com/HKUDS/nanobot/pull/6537)**  
  Endereça três riscos relevantes: perda de rodadas de ferramentas concluídas após interrupções, repetição de operações MCP cujo resultado é desconhecido e registro incorreto de erros de recursos/prompts como sucesso. Também corrige o caso em que um gateway que sofresse crash pudesse encerrar com código de sucesso, mascarando a falha. É a mudança mais crítica do lote em termos de integridade operacional.

### WebUI e desempenho

- **[PR #6540 — avoid remounting outgoing conversations](https://github.com/HKUDS/nanobot/pull/6540)**  
  Evita que a conversa abandonada seja remontada durante a troca de sessão, algo que podia bloquear a thread principal da interface ao processar diffs de arquivos. A mudança deve melhorar responsividade perceived e reduzir operações de DOM desnecessárias.

### Integridade das respostas do agente

- **[PR #3602 — skip `_streamed` for `tool_error` and empty final responses](https://github.com/HKUDS/nanobot/pull/3602)**  
  Corrige o tratamento de falhas fatais de ferramentas, como bloqueios de segurança de comandos. O objetivo é evitar que o consumidor descarte uma resposta de erro já processada como conteúdo vazio, preservando a mensagem apresentada ao usuário. A PR é antiga e foi encerrada após permanecer aberta por vários meses.

### Evolução da CLI

- **[PR #3601 — panel-based terminal display for agent responses](https://github.com/HKUDS/nanobot/pull/3601)**  
  Propõe uma apresentação das respostas do agente em painéis de terminal, indicando interesse em uma experiência CLI mais estruturada e legível.

- **[PR #3593 — show help when a subcommand group is called without a subcommand](https://github.com/HKUDS/nanobot/pull/3593)**  
  Uniformiza o comportamento dos grupos `channels`, `plugins` e `provider`: chamadas sem subcomando agora devem mostrar ajuda, em vez de uma mensagem genérica de erro.

- **[PR #3592 — Ctrl+C clears input instead of exiting](https://github.com/HKUDS/nanobot/pull/3592)**  
  Melhora a segurança da interação no terminal: com texto na entrada, `Ctrl+C` limpa a linha; sem texto, a primeira pression exibe uma dica e uma segunda, em até dois segundos, encerra o processo.

## 4. Temas quentes da comunidade

O dado bruto mostra **baixa engajamento público explícito**: todas as issues e PRs listadas têm **zero reações**, e apenas a issue [#6539](https://github.com/HKUDS/nanobot/issues/6539) possui comentário registrado. Portanto, os temas abaixo são “quentes” por **relevância técnica e concentração de atividade**, não por vote popular.

### 1. Integridade do conteúdo e parsing do agente

- **[Issue #6539 — `strip_think()` remove exemplos literais de tags `think` em blocos de código](https://github.com/HKUDS/nanobot/issues/6539)**  
  É a issue mais comentada do dia, com um comentário. O problema ocorre quando um exemplo XML dentro de um bloco Markdown cercado é confundido com reasoning interno do modelo. A demanda é por parsing sensível ao contexto, removendo tags de raciocínio sem alterar samples de código.

### 2. Robustez das integrações externas

- **[Issue #6544 — WhatsApp falha por cliente Neonize desatualizado](https://github.com/HKUDS/nanobot/issues/6544)**  
  Destaca a dependência de versões externas e a necessidade de atualização ou constraint menos rígido para o cliente WhatsApp.
- **[Issue #6543 — `libmagic` nativo é reportado como plugin dependency ausente](https://github.com/HKUDS/nanobot/issues/6543)**  
  Aponta mensagens de diagnóstico pouco precisas: uma dependência nativa do sistema é tratada como se fosse um plugin ausente.
- **[Issue #6542 — setup da Linear reporta cancelamento após autorização concluída](https://github.com/HKUDS/nanobot/issues/6542)**  
  Revela uma expectativa clara de consistência entre estado real da autorização e o feedback exibido ao usuário.

### 3. Confiabilidade de ferramentas e MCP

- **[PR #6141 — renderizar blocos de recursos e áudio em resultados MCP](https://github.com/HKUDS/nanobot/pull/6141)**  
  Pede que resultados MCP não textuais sejam serializados de forma útil ao modelo, em vez de expor representações internas do Pydantic.
- **[PR #6296 — separar tool calls paralelas quando o stream omite `index`](https://github.com/HKUDS/nanobot/pull/6296)**  
  Atende à compatibilidade com APIs estilo Gemini/OpenAI, nas quais chamadas paralelas podem chegar sem índice explícito.
- **[PR #6537 — recovery history e replay seguro de MCP](https://github.com/HKUDS/nanobot/pull/6537)**  
  Reforça a exigência de que operações MCP não sejam repetidas quando o resultado anterior é incerto.

### 4. UX e organização da WebUI

- **[PR #6536 — gerenciar tópicos arquivados por grupo da sidebar](https://github.com/HKUDS/nanobot/pull/6536)**  
  Indica demanda por melhor organização de projetos e tópicos, persistência da visibilidade e navegação por workspaces históricos.
- **[PR #6540 — evitar remounting de conversas em saída](https://github.com/HKUDS/nanobot/pull/6540)**  
  Responde a problemas de responsividade percevida ao alternar entre conversas com diffs.

## 5. Bugs e estabilidade

### Severidade alta

- **[Issue #6541 — compactação obrigatória do Codex pode cair em geração normal durante retry de imagem](https://github.com/HKUDS/nanobot/issues/6541)**  
  Em requisições com imagens, uma falha na compactação pode limpar o estado nativo da conversa e reconstruir o contexto sem o orçamento de compactação. O fluxo então envia uma geração comum antes de a compactação obrigatória ter sido concluída. Isso pode violar invariantes de contexto, aumentar custo e produzir respostas baseadas em um estado incompleto. É o bug técnico mais sensível aberto no dia.

- **[Issue #6544 — conexão WhatsApp falha com HTTP 405 por cliente desatualizado](https://github.com/HKUDS/nanobot/issues/6544)**  
  O canal fica indisponível para usuários afetados. A correção provavelmente exige revisar o constraint da Neonize, atualizar o cliente ou tratar a incompatibilidade com uma atualização controlável.

- **[PR #6537 — risco de replay inseguro de operações MCP](https://github.com/HKUDS/nanobot/pull/6537)**  
  Embora encerrada, a PR corrige um risco de efeito duplicado em operações cujo resultado não pode ser confirmado, além de mascaramento de crash do gateway. O impacto potencial é maior em integrações que executam ações externas, como envio de mensagens, publicação ou alteração de dados.

### Severidade média

- **[Issue #6542 — autorização Linear concluída, mas interface informa cancelamento](https://github.com/HKUDS/nanobot/issues/6542)**  
  Gera estado inconsistente e pode induzir o usuário a repetir uma configuração já concluída. O problema está relacionado à disputa entre cancelamento, lock do polling e troca de token.

- **[Issue #6539 — corrupção de exemplos de código com tags `think`](https://github.com/HKUDS/nanobot/issues/6539)**  
  Não impede a execução, mas altera o conteúdo entregue. Para usuários que Hurstume prompts, documentação ou outputs com XML/Markdown, o impacto pode ser significativo.

- **[Issue #6543 — diagnóstico incorreto para dependência `libmagic`](https://github.com/HKUDS/nanobot/issues/6543)**  
  O canal WhatsApp pode falhar durante a inicialização, mas a mensagem atribui o problema a “plugin dependencies” em vez de indicar claramente a biblioteca nativa ausente.

- **[PR #6296 — chamadas de ferramentas paralelas podem ser combinadas incorretamente](https://github.com/HKUDS/nanobot/pull/6296)**  
  Se uma resposta de provider chega sem `tool_calls[].index`, o parser pode reutilizar a posição local e juntar chamadas distintas. Isso pode direcionar argumentos ao nome de ferramenta errado.

- **[PR #3602 — respostas de erro de ferramenta podem ser descartadas](https://github.com/HKUDS/nanobot/pull/3602)**  
  Afeta a visibilidade de falhas fatais, especialmente quando um guard de segurança bloqueia uma ferramenta. A correção está encerrada, mas o dado fornecido não confirma se já chegou à branch principal.

### Sinais positivos de estabilidade

- A PR **[#6537](https://github.com/HKUDS/nanobot/pull/6537)** strengthen recovery semantics e evita replay incerto de MCP.
- A PR **[#6540](https://github.com/HKUDS/nanobot/pull/6540)** reduz travamentos e trabalho de DOM na WebUI.
- A PR **[#3602](https://github.com/HKUDS/nanobot/pull/3602)** corrige a preservação de respostas de erro.
- Não há evidência, nos dados fornecidos, de regressões generalizadas ou aumento-volume de crashes; as falhas parecem concentradas em componentes específicos.

## 6. Pedidos de features e sinais de roadmap

Nenhuma release ou roadmap oficial foi apresentado. Os sinais abaixo vêm de PRs abertas e podem indicar apenas a direção atual de desenvolvimento, não uma garantia de inclusão na próxima versão.

### Política de execução de metas sustained

- **[PR #6538 — isolar a política de continuação de metas sustentadas](https://github.com/HKUDS/nanobot/pull/6538)**  
  Busca separar decisões de autorização e continuação de metas em uma boundary de execução, compartilhada por Gateway, CLI e SDK. É um sinal de consolidação da arquitetura do agente e de busca por comportamento consistente entre interfaces. A PR está marcada com conflito, exigindo reconciliação antes do merge.

### Organização e persistência na WebUI

- **[PR #6536 — tópicos arquivados por grupo da sidebar](https://github.com/HKUDS/nanobot/pull/6536)**  
  Adiciona visibilidade por projeto, menu de tópicos, projetos apenas com conteúdo arquivado

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Relatório do Hermes Agent — 3 de novembro de 2026

## 1. Panorama do dia

O Hermes Agent apresentou **atividade muito elevada**, com 50 issues e 50 pull requests atualizados em 24 horas; 94% das issues e 96% dos PRs continuam abertos. O ritmo de trabalho é intenso e distribuído entre gateway, desktop, CLI, sessões, autenticação, plugins, segurança e integrações com Telegram, Discord e Slack. A release [v0.22.6](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.6), publicada em 2 de novembro, consolida aproximadamente 776 PRs desde a versão anterior.  

A **saúde operacional do projeto é boa em termos de atividade e entrega**, mas os problemas reportados indicam consistência ainda frágil em sessões persistentes, conexão remota, gerenciamento de credenciais e atualizações em diferentes plataformas. A grande quantidade de PRs abertos e bugs de alta severidade ainda abertos exige acompanhamento antes que a functionality seja consolidada na v0.23.0.

## 2. Lançamentos

### [Hermes Agent v0.22.6](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.6)

- **Data:** 2 de novembro de 2026.
- **Tipo:** release patch.
- **Escopo de distribuição:** CLI e instaladores, aplicativo da Microsoft Store, imagens Docker e Hermes Cloud.
- **Volume consolidado:** aproximadamente **776 PRs mesclados desde a v0.22.5**, indicando um ciclo de desenvolvimento extremamente ativo.
- **Breaking changes:** nenhum breaking change foi explicitamente anunciado nas notas disponíveis.
- **Notas completas:** a release informa que as notas curadas e consolidadas desse ciclo serão publicadas com a **v0.23.0**.

### Notas de migração

- Usuários devem atualizar por meio do mecanismo habitual da CLI, instalador, Microsoft Store, Docker ou Hermes Cloud.
- Como a v0.22.6 funciona principalmente como um *rollup* de estabilização, mudanças funcionais devem ser avaliadas conjunto com as notas completas da v0.23.0.
- Não é possível atribuir automaticamente correções específicas a issues sem consultar a lista de commits e PRs da tag; a presença de centenas de mudanças impede inferir que todo bug reportado esteja resolvido.

## 3. Progresso do projeto

### Entregas consolidadas

- A [v0.22.6](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.6) é a principal entrega confirmada no período, reunindo aproximadamente 776 PRs desde a v0.22.5.
- O retrato diário informa que **2 PRs foram merged/fechadas**, mas os respectivos números e títulos não aparecem no conjunto fornecido. Portanto, não é possível vincular essas mudanças a issues específicas sem inventar atribuições.
- A fila restante é ampla: **48 dos 50 PRs atualizados permanecem abertos**, evidenciando um pipeline grande e ainda em revisão.

### Trabalho relevante atualmente em revisão

- [#148232 — saída ao vivo de comandos longos](https://github.com/NousResearch/hermes-agent/pull/148232): substitui o spinner isolado pela última linha de saída do processo, melhorando observabilidade no Desktop e na CLI.
- [#148233 — controles de silêncio no gateway](https://github.com/NousResearch/hermes-agent/pull/148233): introduz `allow_silence` por plataforma e permite que a notificação sobre marcadores de silêncio seja suprimida.
- [#148127 — Claude Mythos com thinking obrigatório](https://github.com/NousResearch/hermes-agent/pull/148127): corrige o tratamento de modelos Anthropic que exigem raciocínio adaptativo sempre ativo.
- [#126381 — preservação de configuração de transporte no fallback](https://github.com/NousResearch/hermes-agent/pull/126381): mantém opções específicas de TLS, gateway e transporte ao ativar uma rota alternativa.
- [#147291 — acesso a múltiplos gateways via relay assinado](https://github.com/NousResearch/hermes-agent/pull/147291): permite que uma Webapp alcance outros gateways Hermes por uma conexão autenticada e assinada.
- [#148219 — autoridade de sessão em conexões desktop remotas](https://github.com/NousResearch/hermes-agent/pull/148219): corrige a negociação de sessões em conexões Desktop públicas via ticket.
- [#130387 — prompts do vault em plataformas de mensagens](https://github.com/NousResearch/hermes-agent/pull/130387): habilita respostas a solicitações de desbloqueio, gravação de credenciais e códigos de uso único diretamente em Telegram ou outras surfaces.
- [#148229 — bloqueio de requisições de terceiros no renderer de links](https://github.com/NousResearch/hermes-agent/pull/148229): reduz uma possível surface de requisição do Electron em páginas que não expõem títulos utilizáveis.

## 4. Temas quentes da comunidade

### Maior discussão

- [#133435 — 18 vulnerabilidades npm no lockfile](https://github.com/NousResearch/hermes-agent/issues/133435), com 7 comentários: o `hermes doctor` aponta vulnerabilidades em `undici`, Electron, Axios e `js-yaml`, mas o fluxo noturno de atualização descarta alterações no lockfile. A demanda central é refresh upstream do `package-lock.json` e preservação das correções durante `hermes update`.
- [#108927 — circuit breaker do Kanban abandona cards permanentemente](https://github.com/NousResearch/hermes-agent/issues/108927), com 7 comentários: falhas transitórias de infraestrutura podem retirar definitivamente um card do fluxo, sem nova tentativa depois que o serviço se recupera. O pedido indica necessidade de estado intermediário, cooldown e reativação manual ou automática.
- [#143653 — sessões Heremes em workers Kanban/cron](https://github.com/NousResearch/hermes-agent/issues/143653), com 6 comentários: `chat -q` falha quando herda `HERMES_SESSION_SOURCE=kanban`, porque o contrato de `session.create` rejeita rótulos de automação existentes.
- [#66025 — memória desatualizada em sessões desktop longas](https://github.com/NousResearch/hermes-agent/issues/66025), com 6 comentários: `MEMORY.md` e `USER.md` são congelados no início da sessão, ficando desatualizados em桌面 sessions de longa duração.
- [#96027 — vazamento de conexões SQLite no gateway](https://github.com/NousResearch/hermes-agent/issues/96027), com 6 comentários: o processo acumulou 48 descritores para `state.db` e 46 para `state.db-wal`, AMR, reaching macOS’s process descriptor limit.

### Engajamento visível

- A discussão existe, mas a aprovação explícita é baixa: entre os issues apresentados, apenas [#146435](https://github.com/NousResearch/hermes-agent/issues/146435), [#138677](https://github.com/NousResearch/hermes-agent/issues/138677) e [#82997](https://github.com/NousResearch/hermes-agent/issues/82997) registraram um 👍; os demais items detalhadosomock majoritariamente zero.
- O número de comentários dos PRs aparece como `undefined`, impedindo uma comparação objetiva com os issues. A priorização feita aqui se baseia no escopo técnico e nas tags, não em uma ranking de discussão de PRs.
- Os temas recorrentes mostram maior urgência em **confiabilidade operacional**, **autenticação/credenciais** e **continuidade de sessões**, mais do que em novas capacidades de interface.

## 5. Bugs e estabilidade

### Severidade alta — P1

- [#96027 — vazamento de file descriptors SQLite](https://github.com/NousResearch/hermes-agent/issues/96027): Affects long-running gateways, especially under macOS/launchd. The leak can exhaust the process file-descriptor limit and interrupt the service after days of operation.
- [#146763 — Windows Store reports `service_identity_unverified`](https://github.com/NousResearch/hermes-agent/issues/146763): The Microsoft Store desktop build cannot establish trust in the local backend even when that backend is functional, blocking startup on Windows 11.

### Severidade média — P2

- [#143653 — `session.create` rejects inherited automation labels](https://github.com/NousResearch/hermes-agent/issues/143653): Breaks non-interactive `chat -q` calls from Kanban, cron and similar workers.
- [#146435 — plugin update fails with `dependency-groups` referencing hermes-agent](https://github.com/NousResearch/hermes-agent/issues/146435): The Honcho plugin update rolls back because dependency resolution treats the project as a conflicting dependency.
- [#6533 — Slack tool capability note contradicts actual MCP access](https://github.com/NousResearch/hermes-agent/issues/6533): The agent is told it has no Slack API access even when scoped Slack MCP tools are available, causing false refusals.
- [#90232 — Desktop over SSH bounces messages back into the input box](https://github.com/NousResearch/hermes-agent/issues/90232): The failure provides no visible error and can make the application appear frozen.
- [#144706 — Windows build fails on `windows-remote-lifecycle`](https://github.com/NousResearch/hermes-agent/issues/144706): Prevents the packaged desktop installer from completing its build phase.
- [#147939 — lost updates in concurrent config writers](https://github.com/NousResearch/hermes-agent/issues/147939): Locking individual saves does not protect the complete YAML read-modify-write cycle, allowing concurrent writers to overwrite each other.
- [#148164 — dead Anthropic credential remains terminal after later 429s](https://github.com/NousResearch/hermes-agent/issues/148164): A transient per-model rate limit is treated as permanent credential death, repeatedly requesting reauthentication.
- [#148047 — reopening a compressed session breaks local lineage validation](https://github.com/NousResearch/hermes-agent/issues/148047): The session can become permanently unrestorable with repeated `storage_unavailable` errors and duplicate reconnect attempts.
- [#137365 — cached auxiliary client closed across event loops](https://github.com/NousResearch/hermes-agent/issues/137365): Vision calls can fail with a connection error when the cached client belongs to another active loop.
- [#147922 — provider keys do not reach non-default Docker profiles](https://github.com/NousResearch/hermes-agent/issues/147922): The default multiplexed profile works while other profiles fail to inherit credentials from the container environment.
- [#147912 — Docker named profile drops `gateway start --force`](https://github.com/NousResearch/hermes-agent/issues/147912): The command exits successfully, but the s6 service executes without the required force flag and terminates with exit code 78.
- [#133093 — Telegram media timeout does not scale with file size](https://github.com/NousResearch/hermes-agent/issues/133093): Large uploads may time out on slow links, and a timed-out request may still reach the user.
- [#147738 — Android beta opens the OAuth callback twice](https://github.com/NousResearch/hermes-agent/issues/147738): The second redemption returns `invalid_grant`, although the sign-in itself may already have succeeded.
- [#146868 — Anthropic OAuth not shown as connected in Desktop](https://github.com/NousResearch/hermes-agent/issues/146868): The CLI records the credential correctly, but the desktop application does not reflect the authenticated state.
- [#138449 — Discord admin tools disabled despite documentation](https://github.com/NousResearch/hermes-agent/issues/138449): `discord` and `discord_admin` remain inactive unless an explicit toolset is configured, even when the gateway token is valid.
- [#82997 — valid CJK text detected as binary](https://github.com/NousResearch/hermes-agent/issues/82997): The non-base64 fallback path still applies an overly broad binary heuristic to legitimate UTF-8 content.
- [#138677 — repetition guard rejects near-identical grep calls](https://github.com/NousResearch/hermes-agent/issues/138677): Common troubleshooting sequences are interrupted even though they are not necessarily redundant.
- [#20721 — skill prompting causes excessive rereads](https://github.com/NousResearch/hermes-agent/issues/20721): The agent may reread the Hermes skill several times per session, wasting context and increasing latency.

### Severidade baixa — P3

- [#133435 — lockfile retains high-severity npm vulnerabilities](https://github.com/NousResearch/hermes-agent/issues/133435): Even without a demonstrated exploit path in the application, the committed dependency state weakens

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Sem atividade nas últimas 24 horas.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# Relatório do projeto IronClaw — 2026-11-03

Repositório analisado: [nearai/ironclaw](https://github.com/nearai/ironclaw)

## 1. Panorama do dia

O IronClaw apresentou **baixa atividade de manutenção** nas últimas 24 horas: foram atualizados **4 pull requests**, sendo **2 ainda abertos e 2 fechados**, contra **nenhuma issue atualizada**. Toda a movimentação observada está concentrada em atualizações automatizadas da dependência **rustls**, indicando manutenção de rotina em vez de mudanças funcionais ou correções de bugs. Não houve nova release, e não há dados suficientes para confirmar atividade significativa da comunidade por meio de issues, comentários ou reações. Em termos de saúde, o projeto parece **estável e sem sinais urgentes de deterioração**, embora o ritmo de desenvolvimento seja moderado e limitado a atualizações de dependências.

## 2. Lançamentos

**Nenhuma nova release foi publicada nas últimas 24 horas.**

- Não há versions, tags ou changelogs novos para analisar.
- Não foram identificados *breaking changes* ou notas de migração.
- Como referência: [repositório IronClaw](https://github.com/nearai/ironclaw)

## 3. Progresso do projeto

### Pull requests fechados

- **[#8152 — bump rustls de 0.23.43 para 0.23.45](https://github.com/nearai/ironclaw/pull/8152)**  
  Atualização automática da dependência `rustls` no componente principal. A mudança poderia incorporar correções de segurança, estabilidade ou compatibilidade da biblioteca TLS, mas o status “closed” **não confirma, isoladamente, que a PR tenha sido merged**.

- **[#8151 — bump rustls de 0.23.43 para 0.23.45 em `/harness/latency/runner`](https://github.com/nearai/ironclaw/pull/8151)**  
  Mesma atualização aplicada ao runner do harness de latência. O avanço potencial era manter esse ambiente de testes alinhado à revisão mais recente de `rustls`; novamente, o conjunto fornecido não explicita se o fechamento ocorreu por merge ou supersessão.

### Pull requests ainda em aberto

- **[#8165 — bump rustls de 0.23.43 para 0.23.46](https://github.com/nearai/ironclaw/pull/8165)**  
  Revisão mais recente de `rustls` no componente principal, incluindo o commit upstream relacionado ao adiamento do salvamento da dica KX até a confirmação do handshake. O PR está aberto e ainda não representa uma mudança consolidada no projeto.

- **[#8166 — bump rustls de 0.23.43 para 0.23.46 em `/harness/latency/runner`](https://github.com/nearai/ironclaw/pull/8166)**  
  Atualização equivalente no runner de latência. A implementação permanece pendente de revisão ou merge.

**Interpretação do progresso:** o avanço técnico observável é a manutenção da camada TLS e do ambiente de benchmark, sem entrega de novas funcionalidades. As PRs fechadas para `rustls 0.23.45` parecem ter sido substituídas pelas PRs da versão `0.23.46`, mas isso não pode ser confirmado sem o histórico de merge.

## 4. Temas quentes da comunidade

Não foram registradas issues atualizadas nas últimas 24 horas. As quatro PRs também não apresentam comentários ou reações relevantes:

- [#8165 — rustls 0.23.46](https://github.com/nearai/ironclaw/pull/8165): **0 reações**; comentários não disponíveis.
- [#8166 — rustls 0.23.46 no harness](https://github.com/nearai/ironclaw/pull/8166): **0 reações**; comentários não disponíveis.
- [#8152 — rustls 0.23.45](https://github.com/nearai/ironclaw/pull/8152): **0 reações**; comentários não disponíveis.
- [#8151 — rustls 0.23.45 no harness](https://github.com/nearai/ironclaw/pull/8151): **0 reações**; comentários não disponíveis.

O único tema recorrente é a **atualização da dependência criptográfica `rustls`**, relevante para segurança, handshake TLS e robustez das conexões. Entretanto, a ausência de reações e discussão impede inferir demanda comunitária ou prioridade percebida pelos usuários.

## 5. Bugs e estabilidade

**Nenhum bug, crash ou regressão foi reportado nas últimas 24 horas.**

- **Crítico:** nenhum relatório — [issues do IronClaw](https://github.com/nearai/ironclaw/issues)
- **Alto:** nenhum relatório — [issues do IronClaw](https://github.com/nearai/ironclaw/issues)
- **Médio:** nenhum relatório — [issues do IronClaw](https://github.com/nearai/ironclaw/issues)
- **Baixo:** nenhum relatório — [issues do IronClaw](https://github.com/nearai/ironclaw/issues)

A atualização de `rustls` pode reduzir vulnerabilidades e melhorar a estabilidade de handshakes TLS, mas não deve ser tratada como correção de um incidente específico sem evidência de um bug associado. As mudanças relevantes de segurança permanecem pendentes nas PRs abertas:

- [#8165](https://github.com/nearai/ironclaw/pull/8165)
- [#8166](https://github.com/nearai/ironclaw/pull/8166)

## 6. Pedidos de features e sinais de roadmap

**Não foram identificados novos pedidos de features ou sinais explícitos de roadmap nas últimas 24 horas.**

- Nenhuma issue atualizada contendo市场需求 — [issues do IronClaw](https://github.com/nearai/ironclaw/issues)
- Nenhuma PR aberta fora do escopo de manutenção de dependências — [pull requests do IronClaw](https://github.com/nearai/ironclaw/pulls)

A atualização do runner de latência sugere continuidade do trabalho no **harness de avaliação e desempenho**, mas isso é apenas um indício técnico, não um compromisso público de roadmap:

- [#8151 — atualização do runner de latência](https://github.com/nearai/ironclaw/pull/8151)
- [#8166 — nova atualização do runner de latência](https://github.com/nearai/ironclaw/pull/8166)

As PRs abertas para `rustls 0.23.46` são os itens com maior chance de integrar a próxima entrega de manutenção, caso sejam validadas e merged:

- [#8165](https://github.com/nearai/ironclaw/pull/8165)
- [#8166](https://github.com/nearai/ironclaw/pull/8166)

## 7. Resumo de feedback dos usuários

**Não há feedback direto de usuários disponível no recorte analisado.**

- Não houve issues atualizadas, portanto não há relatos de dores, cenários de uso ou insatisfação — [issues do IronClaw](https://github.com/nearai/ironclaw/issues)
- As PRs não possuem reações ou comentários populados, sinal de baixa participação visible — [#8165](https://github.com/nearai/ironclaw/pull/8165), [#8166](https://github.com/nearai/ironclaw/pull/8166), [#8151](https://github.com/nearai/ironclaw/pull/8151) e [#8152](https://github.com/nearai/ironclaw/pull/8152)

Isso não permite concluir que usuários estejam satisfeitos; apenas mostra que **não houve feedback novo e rastreável em GitHub nas últimas 24 horas**.

## 8. Backlog que merece atenção

Nenhuma issue antiga ou PR sem resposta por longo período pôde ser identificada no conjunto fornecido. O recorte contém somente quatro PRs recentes, sem histórico de interação suficiente para classificar itens como backlog、抗守.

### Itens que merecem acompanhamento imediato

1. **Validar e decidir sobre o merge de `rustls 0.23.46` no componente principal:**  
   [#8165](https://github.com/nearai/ironclaw/pull/8165)

2. **Validar e decidir sobre o merge de `rustls 0.23.46` no harness de latência:**  
   [#8166](https://github.com/nearai/ironclaw/pull/8166)

3. **Confirmar se as PRs fechadas para `0.23.45` foram merged ou substituídas:**  
   [#8152](https://github.com/nearai/ironclaw/pull/8152) e [#8151](https://github.com/nearai/ironclaw/pull/8151)

### Indicador final de saúde

| Dimensão | Avaliação | Evidência |
|---|---|---|
| Atividade | Baixa a moderada | 4 PRs atualizadas, todas de dependências |
| Estabilidade | Sem alertas | Nenhuma issue ou incidente reportado |
| Releases | Sem movimentação | Nenhuma nova versão |
| Engajamento | Baixo | Sem comentários ou reações relevantes |
| Risco principal | Dependência TLS ainda pendente | PRs [#8165](https://github.com/nearai/ironclaw/pull/8165) e [#8166](https://github.com/nearai/ironclaw/pull/8166) abertas |

**Conclusão:** o IronClaw apresenta um dia tranquilo, sem sinais de crise, regressão ou demanda urgente. A atenção está concentrada em concluir e validar a atualização da dependência TLS nos dois componentes, preservando a segurança das conexões e a consistência do harness de latência.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Relatório do projeto CoPaw — 3 de novembro de 2026

> **Nota sobre a identidade do repositório:** apesar do pedido mencionar `agentscope-ai/CoPaw`, os metadados fornecidos identificam o projeto como [`agentscope-ai/QwenPaw`](https://github.com/agentscope-ai/QwenPaw). Este relatório usa os links e dados da API fornecidos. O recorte cobre 22 issues atualizadas e 46 PRs atualizadas nas últimas 24 horas; apenas os 20 PRs mais comentados foram detalhados na origem.

## 1. Panorama do dia

O projeto apresentou **atividade elevada**, com 68 itens atualizados em 24 horas — 22 issues e 46 PRs — além do lançamento de `v2.3.0-beta.2`. O fluxo de issues ficou equilibrado entre 11 abertas e 11 fechadas, enquanto os PRs maintaining uma fila relevante, com 31 ainda abertas e 15 fechadas ou mescladas. Arelease beta trouxe correções principalmente no Console, mas o ciclo atual também evidencia problemas de compatibilidade, persistência de configuração, memória e operação em ambientes restritos. Overall, the health is **good in activity, but with signs of beta instability and a growing review backlog**.

## 2. Lançamentos

### `v2.3.0-beta.2`

A nova release_beta está disponível em [QwenPaw v2.3.0-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0-beta.2).

Principais mudanças visíveis no extrato fornecido:

- Limitação da seleção de skills no Console exclusivamente ao momento de criação, corrigindo a edição de agentes existentes: [PR #8448](https://github.com/agentscope-ai/QwenPaw/pull/8448).
- Compactação dos cartões de erro usados na pré-visualização de mídia: [PR #8451](https://github.com/agentscope-ai/QwenPaw/pull/8451).
- Correções adicionais de usabilidade do navegador no Console; o trecho da release fornecido está truncado e não permite detalhar todas as alterações: [release v2.3.0-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0-beta.2).

**Breaking changes:** não há indicação explícita de breaking changes no trecho disponibilizado.

**Notas de migração e riscos pós-upgrade:**

- Usuários de `v2.3.0b2` em sandboxes POSIX restritos podem sofrer crash durante a importação, pois a resolução do diretório de estado prioriza o home do usuário do sistema e pode ignorar `$HOME`: [issue #8515](https://github.com/agentscope-ai/QwenPaw/issues/8515).
- A correção proposed para esse ambiente passa a reportar `DEPENDENCY_STATE_ROOT_UNAVAILABLE` e orienta o uso de `QWENPAW_DEPENDENCY_STATE_DIR`, mas a PR ainda está aberta: [PR #8527](https://github.com/agentscope-ai/QwenPaw/pull/8527).
- O uso da beta em produção continua desaconselhado até validação em Windows, NAS/sandboxes, múltiplos workspaces e integrações de canais.

## 3. Progresso do projeto

### Correções relevantes no Console e no ciclo de inicialização

- A busca de configurações foi reparada, incluindo indexação de modelos, runtime, tarefas agendadas e canais, além da navegação para a aba correta: [PR #8545](https://github.com/agentscope-ai/QwenPaw/pull/8545).
- A sincronização histórica passou a evitar reprocessamento de migrações já concluídas, com conclusão durável por agente e snapshot de backups ativos: [PR #8541](https://github.com/agentscope-ai/QwenPaw/pull/8541).
- O scanner de segurança deixou de bloquear indevidamente o validador da skill `make-skill`: [PR #8400](https://github.com/agentscope-ai/QwenPaw/pull/8400).

### Plugins, busca e proveniência

- O AnySearch passou a ser o provedor padrão de busca web quando nenhum outro está configurado, mantendo escolhas explícitas do usuário: [PR #8536](https://github.com/agentscope-ai/QwenPaw/pull/8536).
- O “Update All” do Plugin Store passou a preservar a proveniência de instalações do mercado, permitindo incluir plugins de terceiros: [PR #8231](https://github.com/agentscope-ai/QwenPaw/pull/8231).
- A release beta incorporou melhorias de seleção de skills e tratamento de erros de mídia no Console: [PR #8448](https://github.com/agentscope-ai/QwenPaw/pull/8448), [PR #8451](https://github.com/agentscope-ai/QwenPaw/pull/8451).

###Preparação da próxima versão

- Houve uma alteração de versão para `2.3.0b3`, mas a PR aparece como fechada e **não há release correspondente no recorte**, portanto ela não deve ser tratada como versão já publicada: [PR #8546](https://github.com/agentscope-ai/QwenPaw/pull/8546).

> O dataset diferencia “fechada” de “merged”, mas não expõe o resultado individual de merge. Por isso, os itens acima são tratados como encerrados no período, sem assumir que todos foram incorporados à branch principal.

## 4. Temas quentes da comunidade

### Governança do QwenPaw Hub e experiência multiusuário

A issue maisdiscussida é o pedido de direcionamento para a edição multi-tenant: [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318). São 36 comentários e 4 reações, indicando interesse concentrado da comunidade, embora ainda não exista uma reação proporcional ao volume de discussão.

A demanda central é definir o que vem depois do Hub: administração de usuários, gestão compartilhada de skills, políticas de workspace, cobrança ou cobrança por workspace, observabilidade, isolamento de dados eセルフ-service. A issue funciona como um fórum de produto e deveria gerar um roadmap público, com respostas oficiais às prioridades mais pedidas.

### Falhas de entrega em automações e integrações

- Daily Paper falhando silenciosamente quando o arXiv está inacessível, sem configuração de proxy ou endpoint e com mensagem de causa real ocultada: [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715).
- Resposta final do DingTalk descartada quando o `sessionWebhook` expira, sem fallback para a Open API: [#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343).
- Downloads de skills grandes bloqueando a requisição e ultrapassando o timeout do cliente: [#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126).

O padrão revela uma expectativa de **observabilidade e entrega confiável**: falhas de rede ou integrações externas precisam gerar retries, fila, status explícito e mensagem de erro acionável, em vez de sucesso aparente ou perda de conteúdo.

### Memória e ciclo de vida do agente

- Auto-Dream descartando memórias quando o receipt de extração é inutilizável e, ainda assim, marcando os arquivos como processados: [#8500](https://github.com/agentscope-ai/QwenPaw/issues/8500).
- Crescimento contínuo de memória do backend para mais de 20 GB após alguns dias de execução: [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222).
- Necessidade de remindedas deduplicadas para daily notes ainda não processadas: [#8537](https://github.com/agentscope-ai/QwenPaw/issues/8537).

A comunidade está tratando memória como parte essencial da persistência do assistente, não como functionality secundária. Confiabilidade, retenção, reprocessamento e economia de tokens estão entre as prioridades maisstrategic.

## 5. Bugs e estabilidade

### Severidade crítica

- **Perda silenciosa de memória:** o Auto-Dream pode registrar sucesso, fazer checkpoint de arquivos e impedir qualquer retry, mesmo quando a extração falhou: [#8500](https://github.com/agentscope-ai/QwenPaw/issues/8500).
- **Resposta entregue silenciosamente ao vazio:** no DingTalk, respostas que ultrapassam o TTL do `sessionWebhook` são perdidas sem fallback ou erro visível: [#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343).
- **Consumo de memória sem limite:** o backend pode crescer para mais de 20 GB durante execução prolongada, afetando memória e estabilidade do host: [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222).

### Severidade alta

- **Sessão inutilizável após troca de provider:** URLs `file://` presentes no histórico passam a ser rejeitadas, quebrando permanentemente a conversa: [#7966](https://github.com/agentscope-ai/QwenPaw/issues/7966). A recuperação correspondente ainda está em revisão: [PR #7973](https://github.com/agentscope-ai/QwenPaw/pull/7973).
- **Crash em ambiente restrito:** `v2.3.0b2` pode falhar na importação em sandboxes fnOS por resolução incorreta do diretório de estado: [#8515](https://github.com/agentscope-ai/QwenPaw/issues/8515).
- **Configuração inválida persistida:** `thinking_budget` e `max_input_length` podem ser gravados fora dos limites declarados; após reiniciar, o provider desaparece silenciosamente: [#8549](https://github.com/agentscope-ai/QwenPaw/issues/8549), [PR #8550](https://github.com/agentscope-ai/QwenPaw/pull/8550).
- **Falha de canal em múltiplos workspaces:** o plugin Matrix falha ao ativar quando três workspaces o habilitam, dentro de uma janela compartilhada de startup: [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538).
- **Regressão no Creator para Windows:** o único exemplo de inspiração bundled não pode ser aberto: [#8547](https://github.com/agentscope-ai/QwenPaw/issues/8547).

### Severidade média

- Links e imagens relativos em subdiretórios são reescritos para caminhos web que terminam em 404: [#

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Relatório do projeto ZeroClaw — 2026-11-03

> **Escopo:** análise do recorte fornecido do GitHub. Foram atualizadas **48 issues** e **50 pull requests** nas últimas 24 horas; o relatórioissue detailed 30 issues e 20 PRs. As reacts indicados como “👍” e os comentários dos PRs não estavam disponíveis de forma consistente.

## 1. Panorama do dia

O ZeroClaw teve atividade **intensa**, com 98 itens atualizados em 24 horas: **48 issues** e **50 PRs**. A comunidade está concentrada em três frentes: **segurança e isolamento de agentes**, **experiência do dashboard web** e **maturidade do runtime/agente**. O backlog permanece grande, com apenas uma issue fechada e quatro PRs encerrados no período, enquanto 46 PRs seguem abertos.

A release **v0.9.0** aparece como horizonte de integração em vários itens, mas ainda não há nova release publicada. O principal sinal de saúde é a responsividade da comunidade e a existência de correções concretas para problemas críticos; o principal risco é a concentração de falhas de segurança, autorização e sandbox ainda abertas.

---

## 2. Lançamentos

### Releases

**Nenhuma nova release foi publicada nas últimas 24 horas.**

- Não há, portanto, mudanças oficiais, *breaking changes* ou notas de migração para documentar.
- Diversas issues e PRs mencionam **`release:v0.9.0`**, indicando preparação para essa linha:
  - [#11580 — Política de tamanho do binário para a release](https://github.com/zeroclaw-labs/zeroclaw/issues/11580)
  - [#11220 — Exigir autoridade administrativa para executar SOPs](https://github.com/zeroclaw-labs/zeroclaw/pull/11220)
  - [#11174 — Construtores de entrada de turno baseados em capabilities](https://github.com/zeroclaw-labs/zeroclaw/pull/11174)

**Leitura para implantação:** antes de adotar uma nova versão, operadores devem verificar especialmente as mudanças de autorização, paths, sandbox, OIDC, MCP e gateway abertas ou incorporadas à linha v0.9.0.

---

## 3. Progresso do projeto

O recorte informa **4 PRs merged/fechadas**, mas apenas três aparecem explicitamente como `[CLOSED]`. O estado de merge não foi fornecido; por isso, os itens abaixo são registrados como **encerrados**, sem assumir que todos tenham sido integrados.

### Correção do contexto de ferramentas

- [#11297 — `fix(runtime): honour keep_tool_context_turns when building provider requests`](https://github.com/zeroclaw-labs/zeroclaw/pull/11297)  
  Encerrado em 2026-11-02. A proposta reintroduz a contagem correta de turnos recentes com contexto completo de ferramentas, aligning o runtime com a configuração documentada. Isso reduz o risco de o modelo perder histórico operacional importante entre execuções.

### Atualização consolidada de dependências Rust

- [#12185 — Atualização do grupo `rust-all` com 36 atualizações](https://github.com/zeroclaw-labs/zeroclaw/pull/12185)  
  Encerrado em 2026-11-02, aparentemente em favor de:
- [#12202 — Atualização do grupo `rust-all` com 35 atualizações](https://github.com/zeroclaw-labs/zeroclaw/pull/12202)  
  A consolidação evita manter duas atualizações concorrentes de dependências e concentra a manutenção Rust em um PR aberto.

### Capacidades explícitas nos pontos de entrada do runtime

- [#11174 — `feat(runtime): add capability-taking constructors for turn entry points`](https://github.com/zeroclaw-labs/zeroclaw/pull/11174)  
  Encerrado em 2026-11-02. A proposta tensile a construção de capabilities para turnos, delegações, subagentes, peers e SOPs, favorecendo controle explícito de privilégios e uma arquitetura mais segura por padrão.

### Trabalho em integração ativo e relevante

Embora ainda abertos, vários PRs mostram progresso direto nos problemas do dia:

- [#12157 — Vincular callbacks OIDC ao navegador que iniciou o login](https://github.com/zeroclaw-labs/zeroclaw/pull/12157)  
  Corrige o fluxo de login CSRF e token exposto described na [#12050](https://github.com/zeroclaw-labs/zeroclaw/issues/12050).

- [#12160 — Preferir glibc quando há um loader musl instalado](https://github.com/zeroclaw-labs/zeroclaw/pull/12160)  
  Endereça a detecção incorreta de libc descrita na [#12153](https://github.com/zeroclaw-labs/zeroclaw/issues/12153).

- [#11266 — Preservar privacidade da memória de subagentes e pipelines](https://github.com/zeroclaw-labs/zeroclaw/pull/11266)  
  Evita que memória de sessões “owned” seja reconstruída sem escopo no subagente.

- [#11220 — Requerer autoridade administrativa para SOPs](https://github.com/zeroclaw-labs/zeroclaw/pull/11220)  
  Endereça a separação entre autorização do chamador e autoridade administrativa em operações SOP.

- [#12039 — Atualizar formulários de configuração após “Save all”](https://github.com/zeroclaw-labs/zeroclaw/pull/12039)  
  Melhora a consistência entre estado local e configuração persistida no dashboard.

- [#12208 — Restaurar turno em andamento após recarregar a página](https://github.com/zeroclaw-labs/zeroclaw/pull/12208)  
  Preserva prompt, resposta parcial e raciocínio no `localStorage` enquanto o turno continua no gateway.

- [#12206 — Manter o composer fixo e rolar apenas as mensagens](https://github.com/zeroclaw-labs/zeroclaw/pull/12206) e [#12207 — Ajustar cabeçalho e ações para celulares](https://github.com/zeroclaw-labs/zeroclaw/pull/12207)  
  Indicam foco ativo em responsividade e usabilidade mobile.

---

## 4. Temas quentes da comunidade

### 1. Migração da interface web para Rust/Wasm

- [#8132 — Avaliar protótipo Rust/WASM antes da migração React/Vite](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)  
  É a issue mais comentada do recorte, com **12 comentários** e a única reação positiva explícita (**1 👍**). O debate envolve remover Node.js do build/runtime, avaliar Dioxus, Leptos ou Yew e substituir a atual pipeline React SPA + Vite.

**Leitura de demanda:** há interesse real em uma distribuição mais simples e autossuficiente, mas a issue também está marcada como `needs-author-action`. O gargalo parece ser **decisão arquitetural e avaliação de viabilidade**, não apenas implementação.

### 2. Roteamento correto em Matrix

- [#10926 — `send_via` trata identidades de usuários peer como destinos de sala](https://github.com/zeroclaw-labs/zeroclaw/issues/10926)  
  Registro com **7 comentários**. O problema é de compatibilidade: a ferramenta pode enviar uma mensagem ao primeiro peer disponível quando deveria resolver corretamente o destino solicitado.

**Leitura de demanda:** os usuários esperam que ferramentas de comunicação preservem a semântica original da mensagem e não escolham destinatários por conveniência técnica.

### 3. Configuração de SOPs e失效 silencioso do subsystem

- [#9779 — Default documentado de `sops_dir` não é honrado pelo daemon](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)  
  Registro com **6 comentários**, prioridade P1 e risco alto. Quando o operador segue a documentação e não define `sops_dir`, o daemon não carrega os SOPs e não emite erro ou warning.

**Leitura de demanda:** o principal problema não é apenas a configuração, mas a **falha silenciosa**. Operadores precisam de defaults coerentes e diagnósticos explícitos.

### 4. Gate de tamanho da release

- [#11580 — Binário Linux x86_64 está cerca de 0,7 MB abaixo do limite de 64 MiB](https://github.com/zeroclaw-labs/zeroclaw/issues/11580)  
  Registro com **4 comentários**, prioridade P1 e necessidade de revisão de maintainer. A escolha é entre elevar o limite com uma política de headroom ou otimizar o binário.

**Leitura de demanda:** existe um gargalo de CI conhecido que pode bloquear a release mesmo sem uma mudança funcional urgente.

### 5. Estabilidade do cache de prompt

- [#11703 — Ativar ferramenta via `tool_search` altera o system prompt e invalida o cache](https://github.com/zeroclaw-labs/zeroclaw/issues/11703)  
  Registro com **4 comentários**. Com deferred MCP loading, a ativação dinâmica de ferramentas muda o prompt e eleva o custo das chamadas.

**Leitura de demanda:** provedores que precisam manter prefixos estáveis para cache de prompt exigem uma estratégia de composição que evite modificações frequentes do system prompt.

---

## 5. Bugs e estabilidade

### Severidade alta / S1 — workflow bloqueado ou risco de comprometimento

- [#12126 — Marcadores de attachment em outbound podem excluir credenciais via UNC no Windows](https://github.com/zeroclaw-labs/zeroclaw/issues/12126)  
  A canonicalização ocorre antes da validação do workspace. Um target UNC pode fazer o daemon autenticar em servidor SMB/WebDAV controlado pelo atacante.

- [#12187 — Normalização de turnos em cache mistura mensagem de usuário em envelope `role=tool`](https://github.com/zeroclaw-labs/zeroclaw/issues/12187)  
  Pode poisoning permanente da conversa em provedores estritos e bloquear o fluxo do canal.

- [#12134 — `default_forbidden_paths` não cobre mounts WSL, raízes de drives Windows e UNC paths](https://github.com/zeroclaw-labs/zeroclaw/issues/12134)  
  Expõe caminhos sensíveis quando `workspace_only` está desativado.

- [#12137 — Regra do Seatbelt para dotfiles do usuário está escapada incorretamente](https://github.com/zeroclaw-labs/zeroclaw/issues/12137)  
  Toolchains e configurações sob `~/.cargo`, `~/.nvm`, `~/.pyenv` e `~/.local` podem falhar com “Operation not permitted”.

- [#9883 — Conversão inbound de WebP decodifica antes do validador compartilhado](https://github.com/zeroclaw-labs/zeroclaw/issues/9883)  
  A lack de limite anterior à decodificação permite consumo desproporcional de CPU e memória por anexos WEBP.

### Severidade média / S2 — comportamento degradado ou risco de segurança

- [#12146 — Endpoint SSE absoluto do MCP redireciona requests e bearer tokens](https://github.com/zeroclaw-labs/zeroclaw/issues/12146)  
  Um servidor MCP pode direcionar o daemon para outra origem, inclusive rotas administrativas locais.

- [#12127 — Metadata Git pode conter pointers UNC que provocam autenticação remota](https://github.com/zeroclaw-labs/zeroclaw/issues/12127)  
  O repositório pode estar autorizado, mas `gitdir:`, `commondir`, alternates ou config paths são tocados antes da validação.

- [#12144 — `file_upload`, `file_upload_bundle` e `file_edit` autorizam pelo nível de escrita](https://github.com/zeroclaw-labs/zeroclaw/issues/12144)  
  Um workspace com apenas `Write` pode ter arquivos lidos ou editados por operações que deveriam exigir `Read`.

- [#12124 — Defaults Windows de paths forbidden não protegem diretórios de secrets equivalentes](https://github.com/zeroclaw-labs/zeroclaw/issues/12124)  
  GnuPG, GitHub CLI, DPAPI e perfis de navegador podem ficar fora da proteção padrão.

- [#12156 — `zeroclaw update` sempre baixa build glibc e não atualiza instalações musl](https://github.com/zeroclaw-labs/zeroclaw/issues/12156)

- [#12133 — Ambientes Windows de shell, skills e hardware não repassam `APPDATA` e `LOCALAPPDATA`](https://github.com/zeroclaw-labs/zeroclaw/issues/12133)  
  CLIs como `gh` e `npm` podem aparecer deslogados ou mal configurados.

- [#12121 — `setup.bat` duplica o PATH da máquina no PATH do usuário e pode truncá-lo](https://github.com/zeroclaw-labs/zeroclaw/issues/12121)

- [#12104 — OpenAI Responses descarta imagens anexadas a tool results](https://github.com/zeroclaw-labs/zeroclaw/issues/12104)

- [#10926 — `send_via` em Matrix resolve destinatários incorretamente](https://github.com/zeroclaw-labs/zeroclaw/issues/10926)

- [#10924 — Respostas de comandos de runtime entram no roteamento de voz](https://github.com/zeroclaw-labs/zeroclaw/issues/10924)

### Severidade baixa / S3 — usabilidade e eficiência

- [#12087 — Toggle de ferramentas salva automaticamente e ainda habilita o botão Save](https://github.com/zeroclaw-labs/zeroclaw/issues/12087)

- [#12153 — `install.sh` escolhe build musl em host glibc com pacote musl instalado](https://github.com/zeroclaw-labs/zeroclaw/issues/12153)

- [#12155 — Quickstart cancelado afirma que não escreveu configuração, mas `config.toml` existe](https://github.com/zeroclaw-labs/zeroclaw/issues/12155)

- [#11703 — Ativação de ferramenta deferred invalida o cache de prompt](https://github.com/zeroclaw-labs/zeroclaw/issues/11703)

### Avaliação de estabilidade

Não foram identificados, no recorte, stack traces de *panic* ou crashes reproduzidos explicitamente. O quadro principal, porém, é de **bloqueios de workflow, violações de isolamento e operações degradadas**. A concentração de problemas em paths, sandbox, autorização e gateways indica que o maior risco atual não é um crash visível, mas a possibilidade de **ação indevida ou exposição de dados sob configurações-limite**.

---

## 6. Ped

</details>

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*