# Resumo diário de pesquisa em IA no ArXiv 2026-04-29

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-04-28 21:03 UTC

---

# Pesquisa em IA no ArXiv — 29 de abril de 2026

## 1. Destaques do Dia

O dia 27 de abril de 2026 trouxe avanços significativos na avaliação e segurança de sistemas de IA. Observa-se uma ênfase crescente em métodos para medir e mitigar comportamentos indesejados em LLMs, como a *sycophancy* em aplicações financeiras e a necessidade de governança adaptativa em tempo de execução para agentes autônomos. No фронтенд de modelos, a combinação de Transformers com blocos de modelagem linear (upcycling) e técnicas de KV cache pruning indicam progresso toward inference efficiency. A pesquisa em agentes parece estar amadurecendo, com trabalhos focando no ciclo completo de descoberta-a-aplicação e na arquitetura de segurança em todo o ciclo de vida.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**4. [Learning to Think from Multiple Thinkers](http://arxiv.org/abs/2604.24737v1)**  
Autores: Nirmit Joshi, Roey Magen, Nathan Srebro et al.  
*Propõe aprendizado com supervisão Chain-of-Thought de múltiplos pensadores, explorando como diferentes solucionadores corretos mas metodologicamente distintos podem melhorar a generalização — relevante para treinamento de raciocínio.*

**7. [Long-Context Aware Upcycling: A New Frontier for Hybrid LLM Scaling](http://arxiv.org/abs/2604.24715v1)**  
Autores: Parsa Ashrafi Fashi, Utkarsh Saxena, Mehdi Rezagholizadeh et al.  
*Apresenta upcycling como caminho prático para reutilizar checkpoints de Transformers em modelos híbridos com blocos de modelagem linear, preservando capacidades de contexto longo — avanço importante para eficiência de treinamento.*

**13. [Green Shielding: A User-Centric Approach Towards Trustworthy AI](http://arxiv.org/abs/2604.24700v1)**  
Autores: Aaron J. Li, Nicolas Sanchez, Hao Huang et al.  
*Introduz agenda user-centric para construir evidências sobre confiabilidade de LLMs, focando em variações não-adversariais de phrasing —填补评测空白 para segurança prática.*

**26. [DepthKV: Layer-Dependent KV Cache Pruning for Long-Context LLM Inference](http://arxiv.org/abs/2604.24647v1)**  
Autores: Zahra Dehghanighobadi, Asja Fischer  
*Propõe poda dependente de camada no KV cache para inference de contexto longo, atacando o problema de memória que cresce linearmente com o contexto.*

---

### 🤖 Agentes e Raciocínio

**14. [Can Current Agents Close the Discovery-to-Application Gap? A Case Study in Minecraft](http://arxiv.org/abs/2604.24697v1)**  
Autores: Zhou Ziheng, Huacong Tang, Jinyuan Zhang et al.  
*Avalia capacidade de agentes em descobrir regularidades causais e aplicá-las para construir sistemas funcionais — benchmark fundamental para medir inteligência geral.*

**16. [Governing What You Cannot Observe: Adaptive Runtime Governance for Autonomous AI Agents](http://arxiv.org/abs/2604.24686v1)**  
Autores: German Marin, Jatin Chaudhary  
*Propõe o Princípio de Viabilidade Informacional para governar agentes autônomos, estimando bounds de risco não-observado em tempo de execução.*

**25. [AgentWard: A Lifecycle Security Architecture for Autonomous AI Agents](http://arxiv.org/abs/2604.24657v1)**  
Autores: Yixiang Zhang, Xinhao Deng, Jiaqing Wu et al.  
*Arquitetura de segurança em ciclo de vida completo para agentes autônomos que carregam skills, memória e ferramentas — essenciais para deployment seguro.*

**34. [Evaluating whether AI models would sabotage AI safety research](http://arxiv.org/abs/2604.24618v1)**  
Autores: Robert Kirk, Alexandra Souly, Kai Fronsdal et al.  
*Avalia propensão de modelos frontier a sabotar ou recusar assistência em pesquisa de safety — avaliação crítica para deployment responsável.*

---

### 🔧 Métodos e Frameworks

**5. [SpecRLBench: A Benchmark for Generalization in Specification-Guided Reinforcement Learning](http://arxiv.org/abs/2604.24729v1)**  
Autores: Zijian Guo, İlker Işık, H. M. Sabbir Ahmad et al.  
*Benchmark para avaliar generalização de RL guiado por especificações formais (LTL) em tarefas temporais complexas — preenche lacuna em avaliação de segurança.*

**9. [Scalable Hyperparameter-Divergent Ensemble Training with Automatic Learning Rate Exploration](http://arxiv.org/abs/2604.24708v1)**  
Autores: Hailing Cheng, Tao Huang, Chen Zhu et al.  
*Método para explorar espaço de learning rates durante treinamento com ensemble hyperparameter-divergent — eficiente para treinamento distribuído em larga escala.*

**28. [Cortex-Inspired Continual Learning: Unsupervised Instantiation and Recovery of Functional Task Networks](http://arxiv.org/abs/2604.24637v1)**  
Autores: Kevin McKee, Thomas Hazy, Yicong Zheng et al.  
*Redes de Tarefas Funcionais (FTN) para aprendizado contínuo sem esquecimento catastrófico e inferência sem labels de tarefa — inspirado em organização cortical.*

---

### 📊 Aplicações

**8. [Case-Specific Rubrics for Clinical AI Evaluation: Methodology, Validation, and LLM-Clinician Agreement](http://arxiv.org/abs/2604.24710v1)**  
Autores: Aaryan Shah, Andrew Hines, Alexia Downs et al.  
*Rubricas específicas por caso para avaliação de IA clínica com 823 encontros, permitindo avaliação iterativa sem revisão especialista por instância — viabiliza deployment rápido.*

**17. [Benchmarking Pathology Foundation Models for Breast Cancer Survival Prediction](http://arxiv.org/abs/2604.24679v1)**  
Autores: Fredrik K. Gustafsson, Constance Boissin, Johan Vallon-Christersson et al.  
*Comparação sistemática de PFMs em predição de sobrevivência em câncer de mama — guia para seleção de modelos foundation em patologia computacional.*

**38. [Quantum Kernel Advantage over Classical Collapse in Medical Foundation Model Embeddings](http://arxiv.org/abs/2604.24597v1)**  
Autores: Sebastian Cajas Ordóñez, Felipe Ocampo Osorio, Dax Enshan Koh et al.  
*Evidência de vantagem quântica em classificação binária de radiografias usando QSVM com embeddings de modelos foundation médicos — ponte entre ML e computação quântica.*

**41. [A systematic evaluation of vision-language models for observational astronomical reasoning tasks](http://arxiv.org/abs/2604.24589v1)**  
Autores: Wenke Ren, Hengxiao Guo, Wenwen Zuo et al.  
*AstroVLBench com 4.100+ questões para avaliar VLMs em raciocínio astronômico — revela capacidades e limitações em interpretação científica.*

---

## 3. Sinal de Tendência em Pesquisa

Observa-se nesta leva uma **consolidação da pesquisa em segurança e avaliação de agentes autônomos**, com múltiplos trabalhos atacando o problema de governança em tempo de execução e arquitecturas de segurança em ciclo de vida. A tendência indica que o field está passando de "demonstrar capacidades" para "garantir comportamento seguro e auditável".

No фронтенд de modelos, **técnicas de eficiência para contexto longo** (upcycling, KV cache pruning) dominam, sugerindo que a corrida por contextos cada vez maiores agora inclui otimização de inference como foco principal.

Interessante notar a emergência de **avaliação específica de domínio** (meteorologia coreana, patologia, astronomia) como categoria própria de pesquisa — indicando amadurecimento do ecossistema de benchmarks verticalizados.

Finalmente, a **interseção entre métodos de aprendizado e física/química** (design de fármacos, dinâmica molecular, error mitigation quântico) continua forte, demonstrando que IA está cada vez mais integrada ao pipeline científico experimental.

---

## 4. Vale Ler a Fundo

1. **[AgentWard: A Lifecycle Security Architecture for Autonomous AI Agents](http://arxiv.org/abs/2604.24657v1)** — Segurança de agentes é urgente e este artigo oferece framework completo para pensamento em ciclo de vida.

2. **[Can Current Agents Close the Discovery-to-Application Gap? A Case Study in Minecraft](http://arxiv.org/abs/2604.24697v1)** — Questiona capacidades fundamentais de agentes com metodologia rigorosa e resultados provocativos.

3. **[Case-Specific Rubrics for Clinical AI Evaluation](http://arxiv.org/abs/2604.24710v1)** — Demonstra caminho viável para avaliação clínica prática, combinando rigor com escalabilidade.

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*