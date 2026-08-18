# Resumo diário de pesquisa em IA no ArXiv 2026-08-19

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-08-18 20:16 UTC

---

# Resumo de Pesquisa em IA no ArXiv — 2026-08-19

---

## 1. Destaques do Dia

Os artigos desta data revelam três direções convergentes. Primeira, **modelos Vision-Language-Action (VLA)** para robótica estão amadurecendo: dois trabalhos attack a extensão de VLAs para manipuladores humanoides e tarefas de longo horizonte, indicando que a integração visão-linguagem-ação está se tornando o paradigma dominante em manipulação robótica. Segunda, **sistemas de memória para agentes de contexto longo** ganham atenção, com abordagens como memória incremental e compressão de estados, respondendo à limitação quadrática da atenção. Terceira, **segurança e alinhamento** aparecem em múltiplos fronts: desde detecção de ataques de injeção de estado-semântico até hypnosis de modelos e governança de prompts, mostrando que a comunidade amplia o escopo de riscos considered.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**1. Model Hypnosis: Strong control of AI via additive subliminal effects**
http://arxiv.org/abs/2608.16834v1
*Autores: Enric Boix-Adsera, Benedict Tessler*

Demonstra que LLMs são vulneráveis a "hipnose": pistas aparentemente irrelevantes combinadas sistematicamente podem controlar o comportamento do modelo. Relevante para segurança e alinhamento, pois expõe uma superfície de ataque nova e prática.

---

**2. Semantic Bandits: In-Context Exploration-Exploitation is Biased by Semantic Priors**
http://arxiv.org/abs/2608.16707v1
*Autores: David Eric Austin, Kaheer Suleman, Jackie Chi Kit Cheung*

Investiga como LLMs equilibram exploração e explotação, revelando viéses semânticos que distorcem a tomada de decisão. Importante para quem desenvolve agentes baseados em LLMs.

---

**3. Would this change your answer? Evaluating Explanations of LLM Behavior In The Wild with Counterfactual Experiments**
http://arxiv.org/abs/2608.16747v1
*Autores: Adam Karvonen, Euan Ong, Subhash Kantamneni et al.*

Propõe avaliação de explicações via "simulabilidade contrafactual" — se a explicação permite prever comportamento sob alterações. Avança a área de interpretabilidade com critério mensurável.

---

**4. Le Critique: Privileged Value Functions for LLM Reinforcement Learning**
http://arxiv.org/abs/2608.16739v1
*Autores: Siddarth Venkatraman, Matthieu Dinot, Laurence Aitchison*

Aplica funções de valor privilegiadas para reduzir variância em RL para LLMs, complementando métodos como GRPO. Direciona o campo de alignment via RLHF.

---

### 🤖 Agentes e Raciocínio

**5. Don't Drop the BATON: Long-Horizon Robot Manipulation via Agentic Subtask Exploration**
http://arxiv.org/abs/2608.16889v1
*Autores: Bingxin Xu, Yuzhang Shang, Emilio Ferrara*

Aborda falha compound em cadeias de manipulação robótica longa, propondo exploração de sub-tarefas com memória ciente de transições. Relevante para deployment de VLAs em tarefas reais.

---

**6. Proteus: Incremental Memory Activation for Long-Context Sequence Modeling**
http://arxiv.org/abs/2608.16844v1
*Autores: Reza Bayat, Ali Behrouz, Vahab Mirrokni et al.*

Introduz memória incremental que se ativa dinamicamente conforme relevância, superando modelos de memória estática. Endereça o problema de custo quadrático da atenção em contextos longos.

---

**7. HAF: Adapting Generalist VLAs to Humanoid Whole-Body Loco-manipulation**
http://arxiv.org/abs/2608.16837v1
*Autores: Langzhe Gu, Chengkai Hou, Meng Li et al.*

Adapta VLAs a robôs humanoides com alta dimensionalidade e interdependência de movimentos. Marco para robôs generalistas em ambientes centrados no humano.

---

**8. GRIP: Grounded Reasoning via Information-Restricted Premises**
http://arxiv.org/abs/2608.16776v1
*Autores: Lirui Teng*

Combate "query dominance" em RAG, onde o modelo ignora evidências recuperadas. Solução via restrições informacionais melhora raciocínio fundamentado.

---

**9. When State Becomes an Attack Surface: State-Semantic Injection in LLM-Driven Embodied Agents**
http://arxiv.org/abs/2608.16806v1
*Autores: Jiawei Liu, Jiacheng Guo, Tian Zhang et al.*

Identifica injeção de estado-semântico como vetor de ataque para agentes embodied. Crítico para segurança de sistemas de agentes integrados.

---

### 🔧 Métodos e Frameworks

**10. Policy Iteration with Human Feedback: Bringing Post-Training RL to In-context Learning**
http://arxiv.org/abs/2608.16831v1
*Autores: Minh-Ha Nguyen, Cathy Shyr*

Une RL com feedback humano ao paradigma de in-context learning, expandindo adaptação de LLMs além de instruções e demonstrações.

---

**11. On the Principles Behind Neural Network Optimizers**
http://arxiv.org/abs/2608.16760v1
*Autores: Yushun Zhang*

Fornece fundamentação teórica para Adam, revisitando debate divergência-convergência e motivando novos designs de otimizadores.

---

**12. Learning to Unlearn: Machine Unlearning via Learning the Unlearning Behaviors**
http://arxiv.org/abs/2608.16700v1
*Autores: Hang Zhang, Kaifeng Zhang, Yixiao Ma et al.*

Aproxima unlearning de machine learning, treatando a função de unlearning como modelo a ser aprendido. Resposta prática a requisitos de privacidade (GDPR).

---

### 📊 Aplicações

**13. MIRROR: Multimodal Intelligent Radiology Reasoning and Observation Reporter**
http://arxiv.org/abs/2608.16709v1
*Autores: Vignesh Nagarajan, Sriram Venkatapathy*

Separa classificação multi-rótulo de geração de texto explicativo em radiologia, evitando klaims espúrios. Avanço para deployment clínico responsável.

---

**14. zLend: A Dual-Scope Cash-Flow Reconstruction Framework for On-Chain Credit Underwriting**
http://arxiv.org/abs/2608.16856v1
*Autores: Girish G N, Ashutosh Sahoo, Akshay SP et al.*

Reconstrói histórico de wallet para underwriting em lending descentralizado, sem bureau de crédito tradicional. Aplicação de ML em Web3.

---

**15. LAVA: Logic-Aware Validation and Augmentation Framework for Large-Scale Financial Document Auditing**
http://arxiv.org/abs/2608.16763v1
*Autores: Ruoqi Shu, Xuhui Wang, Isaac Wang et al.*

Validação de documentos financeiros com lógica aware, lidando com layouts heterogêneos e semântica rica. Relevante para compliance empresarial.

---

## 3. Sinal de Tendência em Pesquisa

**Agentes VLA e Memória Adaptativa Dominam o Cenário**

A data revela inflexão clara: modelos Vision-Language-Action estão se consolidando como arquitetura padrão para robótica e agents embodied, com atenção dividida entre (i) estender VLAs para domínios de alta dimensionalidade (humanoides) e (ii) corrigir falhas compounding em tarefas multi-etapa. Paralelamente, **memória adaptativa** emerge como resposta ao gargalo de atenção quadrática — abordagens que distinguem tokens "ativos" de "inativos" e ativam memória dinamicamente substituem compressão estática.

No eixo de segurança, a amplitude de ameaças studied é notável: desde hypnosis de modelos via cues subliminares até injeção de estado-semântico em agentes embodied, passando por compliance detectors e governance de prompts. Isso sugere que a comunidade está sistematicamente enumerando superfícies de ataque em sistemas deployed, não apenas em protótipos.

Interessante notar a convergência entre interpretabilidade e aplicações: explicações contrafactuais, provenance computacional e attributtion em RAG são temas separados mas todos visam trust em sistemas de produção.

---

## 4. Vale Ler a Fundo

**1. Don't Drop the BATON (http://arxiv.org/abs/2608.16889v1)**
Para pesquisadores em robótica e VLAs: aborda problema prático de falha em cascata em tarefas longas, com solução fundamentada em exploração de sub-tarefas e memória de transições — diretamente aplicável a sistemas de manipulação real.

**2. Model Hypnosis (http://arxiv.org/abs/2608.16834v1)**
Para segurança e alinhamento: demonstra vulnerabilidade generalizável que combina weak cues em strong control, com implicações para deployment, red-teaming e policy de IA.

**3. Proteus: Incremental Memory Activation (http://arxiv.org/abs/2608.16844v1)**
Para arquitetura de transformers e agents de contexto longo: memória incremental que se adapta a relevância temporal resolve limitações práticas de memória estática com demonstração empírica strong.

---

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*