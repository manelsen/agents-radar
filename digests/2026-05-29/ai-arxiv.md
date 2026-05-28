# Resumo diário de pesquisa em IA no ArXiv 2026-05-29

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-05-28 21:51 UTC

---

# Resumo de Pesquisa em IA — ArXiv (2026-05-29)

---

## 1. Destaques do Dia

A pesquisa de hoje revela um amadurecimento significativo na avaliação de modelos de linguagem, com novos frameworks abordando a estabilidade-plasticidade em PEFT e a necessidade de métricas além da acurácia downstream. Agentes autônomos ganham destaque com avanços em especialização de domínio, memória dinâmica e raciocínio multimodal integrado a ferramentas externos. Observa-se crescente interesse em quantificação de incerteza (token-level, linguistic markers) e em métodos de fine-tuning mais eficientes (zeroth-order, extrapolative weight averaging). No domínio de aplicações, destaque para benchmarks realistas em EEG, música afetiva, e manipulação dexterous, além de novas propostas para alinhamento e Oversight escalável de sistemas agentic.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**1. PEFT-Arena: Understanding Parameter-Efficient Finetuning from a Stability-Plasticity Perspective**
Link: http://arxiv.org/abs/2605.28819v1
Autores: Yangyi Huang, Ruotian Peng, Zeju Qiu et al.
*Propõe avaliação de PEFT através do dilema estabilidade-plasticidade, arguing que preservação de habilidades pré-treinadas é tão importante quanto acurácia downstream.*

**2. VLMs May Not Globally Enhance Human Alignment over LLMs During Natural Reading**
Link: http://arxiv.org/abs/2605.28818v1
Autores: Jinzhou Wu, Zhengwu Ma, Jixing Li et al.
*Investiga se aprendizado visão-linguagem aproxima representações textuais de modelos humanos durante leitura natural — resultado questiona suposições prévias.*

**3. Can Large Language Models Handle Discourse Particles? A Case Study of Colloquial Malay**
Link: http://arxiv.org/abs/2605.28782v1
Autores: Mariah Al Giptiah Binte Yusoff, Jakin Tan, Bocheng Chen et al.
* Primeiro estudo abrangente sobre capacidade de LLMs em processar partículas discursivas, com foco em malaio coloquial.*

**4. Can LLMs Use Linguistic Uncertainty Markers to Reliably Reflect Intrinsic Confidence?**
Link: http://arxiv.org/abs/2605.28778v1
Autores: Gabrielle Kaili-May Liu, Arman Cohan
*Avalia se marcadores epistêmicos realmente refletem incerteza intrínseca dos modelos, com implicações para calibração e deployment clínico.*

**5. Towards Reliable Multilingual LLMs-as-a-Judge: An Empirical Study**
Link: http://arxiv.org/abs/2605.28710v1
Autores: Irune Zubiaga, Aitor Sora, Rodrigo Agerri
*Estudo empírico extensivo sobre avaliadores baseados em LLMs para métricas multilíngues, identificando desafios específicos para low-resource languages.*

**6. Beyond Binary Moral Judgment: Modeling Ethical Pluralism in AI**
Link: http://arxiv.org/abs/2605.28707v1
Autores: Aisha Aijaz, Rahul Goel, Arnav Batra et al.
*Proposta de framework para julgamento moral não-binário em sistemas autônomos, superando limitações de abordagens escalares.*

**7. The Importance of Being Statistically Earnest: A Critical Re-evaluation of GSM-Symbolic**
Link: http://arxiv.org/abs/2605.28700v1
Autores: Dominika Agnieszka Długosz, Arlindo Oliveira, Natalia Díaz Rodríguez
*Reavaliação crítica do benchmark GSM-Symbolic, questionando conclusões sobre falta de reasoning genuíno em LLMs.*

---

### 🤖 Agentes e Raciocínio

**8. Self-Improving Language Models with Bidirectional Evolutionary Search**
Link: http://arxiv.org/abs/2605.28814v1
Autores: Guowei Xu, Zhenting Qi, Huangyuan Su et al.
*Introduz busca evolutiva bidirecional para superar limitações de best-of-N e tree search em auto-melhoramento de LLMs.*

**9. Learn from Weaknesses: Automated Domain Specialization for Small Computer-Use Agents**
Link: http://arxiv.org/abs/2605.28775v1
Autores: Suji Kim, Kangsan Kim, Sung Ju Hwang
*Método para especialização automatizada de pequenos agentes de uso de computador, addressing uneven domain-specific failures.*

**10. Agent Explorative Policy Optimization for Multimodal Agentic Reasoning**
Link: http://arxiv.org/abs/2605.28774v1
Autores: Minki Kang, Shizhe Diao, Ryo Hachiuma et al.
*Propõe otimização de política explorativa para raciocínio agentic multimodal, distinguindo thinking (auto-contido) de tool use.*

**11. Rethinking Memory as Continuously Evolving Connectivity**
Link: http://arxiv.org/abs/2605.28773v1
Autores: Jizhan Fang, Buqiang Xu, Zhixian Wang et al.
*Novo paradigma para memória em agentes LLM, treatando-a como conectividade em evolução contínua em vez de repositório estático.*

**12. LiveBrowseComp: Are Search Agents Searching, or Just Verifying What They Already Know?**
Link: http://arxiv.org/abs/2605.28721v1
Autores: HuiMing Fan, Xiao Wang, Zheng Chu et al.
*Diagnóstico de comportamento de agentes de busca, revelando dependência significativa de conhecimento intrínseco mesmo com acesso a ferramentas.*

---

### 🔧 Métodos e Frameworks

**13. Skill-Conditioned Gated Self-Distillation for LLM Reasoning**
Link: http://arxiv.org/abs/2605.28791v1
Autores: Jiazhen Huang, Xiao Chen, Xiao Luo et al.
*Método de self-distillation on-policy que dispensa privileged information confiável, usando condições de skill para supervisão densa.*

**14. Extrapolative Weight Averaging Reveals Correctness-Efficiency Frontiers in Code RL**
Link: http://arxiv.org/abs/2605.28751v1
Autores: Kunhao Zheng, Pierre Chambon, Juliette Decugis et al.
*Demonstra que interpolação extrapolativa entre checkpoints fine-tuned pode estender fronteiras de Pareto sem treinamento RL adicional.*

**15. Multi-Adapter Representation Interventions via Energy Calibration**
Link: http://arxiv.org/abs/2605.28722v1
Autores: Manjiang Yu, Hongji Li, Junwei Chen et al.
*Método de intervenção de representação que adapta direção de intervenção por entrada, usando calibração de energia.*

**16. Understanding Generalization and Forgetting in In-Context Continual Learning**
Link: http://arxiv.org/abs/2605.28705v1
Autores: Guangyu Li, Meng Ding, Lijie Hu et al.
*Teoria para ICL em cenários de tasks sequenciais, abordando generalização e esquecimento simultaneamente.*

---

### 📊 Aplicações

**17. CaMBRAIN: Real-time, Continuous EEG Inference with Causal State Space Models**
Link: http://arxiv.org/abs/2605.28792v1
Autores: Abhilash Durgam, Nyle Siddiqui, Jeffrey A. Chan-Santiago et al.
*Modelo de espaço de estados causal para inferência EEG em tempo real, superando limitações de的长 sequence processing.*

**18. Beyond Lipschitz: Data-Driven Robustness via Discrete Modulus of Continuity**
Link: http://arxiv.org/abs/2605.28729v1
Autores: Jürgen Dölz, Michael Multerer, Michele Palma
*Nova métrica de robusteza baseada em módulo de continuidade discreto, capturando comportamento data-dependent mais nuanced.*

**19. Ω-QVLA: Robust Quantization for Vision-Language-Action Models via Composite Rotation and Per-step Scaling**
Link: http://arxiv.org/abs/2605.28803v1
Autores: Xinyu Wang, Mingze Li, Sicheng Lyu et al.
*Método de quantização robusto para VLAs, permitindo deployment on-device de modelos multi-bilhões de parâmetros.*

**20. CubePart: An Open-Vocabulary Part-Controllable 3D Generator**
Link: http://arxiv.org/abs/2605.28763v1
Autores: Yiheng Zhu, Kangle Deng, Jean-Philippe Fauconnier et al.
*Geração 3D com controle de partes semanticamente alinhado, enabling animação e física em assets interativos.*

---

## 3. Sinal de Tendência em Pesquisa

Observa-se uma mudança paradigmática na avaliação de modelos de linguagem, passando de métricas isoladas (acurácia downstream) para frameworks multidimensionais que capturam trade-offs fundamentais — como estabilidade vs. plasticidade em PEFT e generalização vs. esquecimento em continual learning. O campo de agentes autônomos amadurece com foco em specialização eficiente (pequenos modelos experts), memória dinâmica não-estática, e diagnóstico de comportamentos (busca genuína vs. verificação). cresce significativamente a atenção para quantificação de incerteza em níveis token/span, especialmente em domínios críticos como clínico. A pesquisa em robustness evolui de métricas clássicas (Lipschitz) para representações mais expressivas data-driven. Por fim, a interseção de modelos de linguagem com tarefas agentic multimodais (VLA, tool use) emerge como área de convergência de múltiplas disciplinas.

---

## 4. Vale Ler a Fundo

**1. PEFT-Arena: Understanding Parameter-Efficient Finetuning from a Stability-Plasticity Perspective**
Link: http://arxiv.org/abs/2605.28819v1
*Fundamental para pesquisadores trabalhando com fine-tuning de LLMs, pois estabelece framework conceitual abrangente para avaliação de PEFT.*

**2. Agent Explorative Policy Optimization for Multimodal Agentic Reasoning**
Link: http://arxiv.org/abs/2605.28774v1
*Leitura essencial para entender a arquitetura de raciocínio agentic multimodal e a assimetria estrutural entre thinking e tool use.*

**3. Rethinking Memory as Continuously Evolving Connectivity**
Link: http://arxiv.org/abs/2605.28773v1
*Propõe paradigma inovador que impactará o design de memória em agentes de longa duração, com implicações para aplicações do mundo real.*

**4. The Importance of Being Statistically Earnest: A Critical Re-evaluation of GSM-Symbolic**
Link: http://arxiv.org/abs/2605.28700v1
*Importante para a comunidade avaliar criticamente conclusões sobre reasoning em LLMs, oferecendo perspectiva metodológica rigorosa.*

**5. Can LLMs Use Linguistic Uncertainty Markers to Reliably Reflect Intrinsic Confidence?**
Link: http://arxiv.org/abs/2605.28778v1
*Relevante para deployment seguro de LLMs em domínios críticos, abordando a lacuna entre confiança linguística e incerteza real.*

---

*Total de artigos analisados: 50 | Categorias: cs.AI, cs.CL, cs.LG | Data: 2026-05-29*

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*