# Resumo diário de pesquisa em IA no ArXiv 2026-09-03

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-09-02 22:16 UTC

---

# 📚 Resumo de Pesquisa em IA — ArXiv, 3 de setembro de 2026

---

## 1. Destaques do Dia

O cenário de pesquisa em IA nesta data revela três direções convergentes. Primeiro, a **avaliação e alinhamento de LLMs** recebe atenção renovada: estudos investigam os mecanismos internos de modelos-julgadores, a fragilidade do alinhamento sob fine-tuning benigno e a redistribuição de citações científicas por LLMs. Segundo, a **autonomia de agentes** avança com frameworks para geração de harnesses, raciocínio em horizontes longos e roteamento inteligente de consultas. Terceiro, observa-se uma ênfase crescente em **métodos de treinamento mais eficientes** — desde alocação de orçamentos de anotação SFT/RL até compressão de contexto latente e destilação de conhecimento focada em raciocínio. Aplicações emDomínios verticais (robótica, medicina, ciência) ganham destaque, sinalizando a maturação de modelos base para soluções especializadas.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**1. Beyond Scores: Understanding LLM-as-a-Judge Mechanisms in Summarization Evaluation**
Link: http://arxiv.org/abs/2609.01604v1
Autores: Himil Vasava, Ming Jiang
*Investiga mecanisticamente como LLMs atribuem notas em avaliação de NLG, revelando procedimentos internos pouco compreendidos. Relevante para anyone que usa LLMs como métricas automatizadas.*

---

**2. The Rise of Verbal Reinforcement Learning**
Link: http://arxiv.org/abs/2609.01597v1
Autores: Kshitij Tayal, Arun Sharma, Genta Indra Winata et al.
*Propõe VRL como novo paradigma em que feedback em linguagem natural substitui sinais de recompensa escalares, permitindo supervisão mais interpretável e richer.*

---

**3. The Structure of Quantization Damage in LLMs: Why the Next Bit Should Be Spent Globally**
Link: http://arxiv.org/abs/2609.01587v1
Autores: Jundong Hu, Shekar Ramachandran
*Mostra que danos de quantização são desigualmente distribuídos e propõe alocação global de bits extras via mixed-precision causal para mitigar perdas.*

---

**4. Scaling Near-Optimal SFT-RL Annotation Budget Allocation from Small to Large LLMs**
Link: http://arxiv.org/abs/2609.01573v1
Autores: Jingtan Wang, Arun Verma, Xiaoqiang Lin et al.
*Fornece framework принципный para dividir orçamento de anotação entre SFT e RL, revelando que alocação ótima escala de forma não-trivial entre modelos.*

---

**5. Knowledge Distillation During Mid-Training Favors Reasoning over Factual Recall**
Link: http://arxiv.org/abs/2609.01532v1
Autores: Jacqueline He, Howard Yen, Shuyue Stella Li et al.
*Demonstra que destilação KL funciona diferentemente ao longo do treinamento — favorece reasoning em mid-training vs. recall factual, com implicações práticas importantes.*

---

**6. When Safety Routing Breaks: Understanding Alignment Fragility under Benign Fine-Tuning**
Link: http://arxiv.org/abs/2609.01455v1
Autores: Yitong Guo, Xiaoyi Chen, Siyuan Zhang et al.
*Explica por que fine-tuning benigno fragiliza alinhamento via geometria de Fisher — safety Fisher é low-rank — reabrindo debates sobre robustez de guardrails.*

---

**7. Citing Less Critically: LLMs Reshape the Rhetoric and Reach of Scientific Citation**
Link: http://arxiv.org/abs/2609.01432v1
Autores: Yixuan Liu, Lin Chen, Zhuoqi Liu et al.
*Evidencia que LLMs reproduzem citações com intenção retórica alterada em comparação a humanos, com impacto na integridade do discurso científico.*

---

### 🤖 Agentes e Raciocínio

**8. Efficient SWE Agent Benchmarking via Trajectory-Aware Evaluation**
Link: http://arxiv.org/abs/2609.01603v1
Autores: Kefeng Duan, Dewu Zheng, Yanlin Wang et al.
*Apresenta método eficiente para avaliar agentes de engenharia de software usando subconjuntos representativos de trajetórias, reduzindo custo mantendo fidelidade.*

---

**9. Adaptive Critical Token-Aware Retrieval for Repository-Level Code Generation**
Link: http://arxiv.org/abs/2609.01601v1
Autores: Kefeng Duan, Dewu Zheng, Yanlin Wang et al.
*Melhora geração de código em nível de repositório com recuperação adaptativa de tokens críticos, mitigando limitações de contexto de LLMs em codebases largas.*

---

**10. Harness-of-Harness: Multi-Day Autonomous Software Development with Continual Improvement**
Link: http://arxiv.org/abs/2609.01481v1
Autores: Haoyang Yan, Min-le Su, Hangfan Zhang et al.
*Permite que agentes de coding melhorem continuamente seu próprio harness de execução, fechando o loop de AutoML para infraestrutura de agentes.*

---

**11. Parsing the Stream: A Live Trace Model for Long-Horizon Agents and Their Observers**
Link: http://arxiv.org/abs/2609.01466v1
Autores: Egor Pakhomov, Erik Nijkamp
*Proposta de ledger de eventos append-only que é incrementalmente foldado em estado tipado, resolvendo o problema de contexto limitado em agentes de longo horizonte.*

---

**12. GlossoGen: Emergent Language in Complex Multi-Agent LLM Interactions**
Link: http://arxiv.org/abs/2609.01491v1
Autores: Elias Stengel-Eskin, Newton Sander, Carlos Bonetti et al.
*Plataforma para estudar evolução de linguagem em interações multi-agente LLM, com implicações para segurança e monitorabilidade.*

---

**13. TRIAGE: Three-level Routing and Intelligent Agent Guidance for Efficient Execution**
Link: http://arxiv.org/abs/2609.01428v1
Autores: Ruocan Wei
*Aborda ineficiência do paradigma ReAct com roteamento em três níveis, evitando loops completos de raciocínio para consultas similares.*

---

**14. Defense-as-Skill: Evolving Runtime Guard Skill for Skill-Augmented Agents**
Link: http://arxiv.org/abs/2609.01487v1
Autores: Xiaofang Yang, Ziqi Miao, Dianbo Sui et al.
*Estuda canais de ataque via skills maliciosas carregadas em runtime e propõe guard skills evolutivas para defesa proativa.*

---

### 🔧 Métodos e Frameworks

**15. Facet-0: A Robotic Foundation Model for Contact-Rich Precise Manipulation**
Link: http://arxiv.org/abs/2609.01596v1
Autores: Haoyuan Deng, Haichao Liu, Wenkai Guo et al.
*Modelo base robótico que prevê consequências de contato em montagens submilimétricas, unindo representação multimodal com controle de precisão.*

---

**16. Mechanism Design for Alignment and Control**
Link: http://arxiv.org/abs/2609.01595v1
Autores: Dirk Bergemann, Andrew Koh, Stephen Morris
*Aplica teoria de mechanism design a agentes de IA com preferências e capacidades desconhecidas, garantindo incentivos à honestidade e obediência.*

---

**17. H3-World: Turning Language Understanding into World Control**
Link: http://arxiv.org/abs/2609.01560v1
Autores: Danze Chen, Zeqing Wang, Ziyue Lin et al.
*Transforma gerador de vídeo 33B em world model interativo usando linguagem natural como interface de controle — marco na convergência video-LLM/agentic.*

---

**18. LatentPress: Context Compression Beyond Text and Vision**
Link: http://arxiv.org/abs/2609.01507v1
Autores: Zhengze Zhou, Hejian Sang
*Representa históricos de conversa e documentos longos como tokens de memória latente contínua, eliminando sobrecarga de decodificação textual/visual.*

---

**19. Diffusion as a Training Curriculum for Timestep-Free Iterative Reasoning**
Link: http://arxiv.org/abs/2609.01449v1
Autores: Mariia Drozdova, Aidan Sirbu, Pietro Miotti et al.
*Unifica modelos de difusão e reasoners recursivos adicionando estado oculto persistente e removendo conditioning de timestep, permitindo profundidade arbitrária.*

---

**20. Efficiently Estimating Optimal Hyperparameter Scaling Laws through Power-Law Entropy Search**
Link: http://arxiv.org/abs/2609.01431v1
Autores: Zhiliang Chen, Sebastian Ament, David Eriksson et al.
*Método para prever hiperparâmetros ótimos em escala de produção sem tunagem custosa, usando Power-Law Entropy Search.*

---

### 📊 Aplicações

**21. EvoSCM: Scientific Belief Revision Through Causal Model Evolution and Experimentation**
Link: http://arxiv.org/abs/2609.01526v1
Autores: Qing Zhao, Haowei Li, Weijian Deng et al.
*Equipa agentes científicos com modelos causais explícitos para belief revision testável, indo além de hipóteses em texto livre.*

---

**22. Can LLMs Discover Scientific Laws in Real and Parallel Worlds?**
Link: http://arxiv.org/abs/2609.01552v1
Autores: Yiming Huang, Ziche Liu, Zhuohang Wu et al.
*Avalia capacidade de LLMs para descoberta de equações científicas via ciclos iterativos de hipótese-teste, avaliando o papel de LLMs em AI for Science.*

---

**23. Closing Cost-Quality Gap in Document VLMs: Difficulty-Aware Data Curation and Quality-Adjusted Deployment Economics**
Link: http://arxiv.org/abs/2609.01575v1
Autores: Maksim Evdokimov, Matvey Ivanov, Dmitrii Tsiupin et al.
*Reduz custo de VLMs open-source para extração de campos estruturados em documentos regulados, usando curadoria de dados aware de dificuldade.*

---

**24. SDARE-Bench: Evaluating LLMs on Conversational Stigma Detection and Response**
Link: http://arxiv.org/abs/2609.01548v1
Autores: Stephanie Fong, Yiwen Jiang, Zimu Wang et al.
*Benchmark para detecção de estigma em diálogos diádicos e grupais, cobrindo lacuna em avaliações de LLMs em contextos social e emocionalmente sensíveis.*

---

**25. CordisBench: Can Language Models Reason About Component Lifecycles in Dynamic Agent Harnesses?**
Link: http://arxiv.org/abs/2609.01600v1
Autores: Damien Sileo, Dimitri Kachler
*Benchmark de 1.200 perguntas sobre raciocínio de ciclo de vida de componentes em harnesses dinâmicos — desafio newly emergent de agentes que modificam seu próprio software.*

---

---

## 3. Sinal de Tendência em Pesquisa

O conjunto de artigos de hoje revela quatro tendências emergentes com forte sinal de continuidade. A primeira é a **fragmentação do alinhamento**: estudos como *When Safety Routing Breaks* e *Citing Less Critically* indicam que alinhamento de segurança e integridade retórica são mais frágeis do que se supunha, demandando abordagens geométricas (Fisher) em vez de gradients conflict. A segunda tendência é a **agência como infraestrutura**: artigos como *Harness-of-Harness* e *CordisBench* tratam o harness de execução como variável de design primeira, não como detalhe de implementação — a comunidade começa a tratar AutoML de infraestrutura de agentes como disciplina própria. A terceira é a **convergência video-language-world model**: *H3-World* é emblemática de uma direção onde geradores de vídeo de grande escala se tornam substratos para controle agentic, reduzindo a barreira entre compreensão de vídeo e planejamento de ações. A quarta tendência é o **raciocínio como competência escalável**: *Diffusion as a Training Curriculum* e *Knowledge Distillation During Mid-Training* sugerem que reasoning e factual recall competem por recursos de treinamento de formas não-lineares, com implicações para como deveríamos alocar dados de anotação.

---

## 4. Vale Ler a Fundo

### 📖 Artigo 1: [When Safety Routing Breaks: Understanding Alignment Fragility under Benign Fine-Tuning](http://arxiv.org/abs/2609.01455v1)
*Por que ler:* Oferece uma explicação geometricamente fundamentada — nãogradiente-conflict — para a fragilidade de alinhamento, com implicações diretas para práticas de fine-tuning em produção. O diagnóstico de low-rank safety Fisher muda como devemos pensar sobre RLHF e DPO.

### 📖 Artigo 2: [H3-World: Turning Language Understanding into World Control](http://arxiv.org/abs/2609.01560v1)
*Por que ler:* Demonstra que modelos de vídeo de 33B parâmetros já suportam controle por linguagem natural com zero-shot, sinalizando uma mudança de paradigma em como LLMs e world models interoperam. Artigo seminal para a fronteira de agentes físicos e simulações.

### 📖 Artigo 3: [Scaling Near-Optimal SFT-RL Annotation Budget Allocation from Small to Large LLMs](http://arxiv.org/abs/2609.01573v1)
*Por que ler:* Resolve um problema prático e recorrente em post-training com framework principled, com resultados que se aplicam diretamente a qualquer equipe treinando LLMs. Achar a alocação ótima de orçamento entre SFT e RL era empírico — este trabalho muda isso.

---

*Resumo gerado em 2026-09-03. 50 artigos processados de cs.AI, cs.CL e cs.LG.*

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*