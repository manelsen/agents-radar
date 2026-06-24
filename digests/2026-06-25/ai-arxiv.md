# Resumo diário de pesquisa em IA no ArXiv 2026-06-25

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-06-24 21:19 UTC

---

# Resumo de Pesquisa em IA no ArXiv — 2026-06-25

---

## 1. Destaques do Dia

O campo de **agentes autônomos** domina a pauta desta edição, com avanços significativos em frameworks para aquisição de habilidades (InSight), planejamento com LLMs (LaGO) e sistemas de memória persistente (Are We Ready For An Agent-Native Memory System?). A **geração de conteúdo multimodal** também se destaca: desde text-to-3D (OrbitForge) até captioning cinematográfico (CineCap), passando por benchmarks rigorosos para VideoQA (EG-VQA). No фронтенд de interpretabilidade e confiabilidade, surge **Grad Detect**, abordagem baseada em gradientes para detectar alucinações em LLMs, enquanto a comunidade de PLN renova o interesse em **avaliação humana grounded** para autoencoders esparsos e interfaces de AAC. Por fim, a **escalabilidade de LLMs** continua como preocupação central, com novos frameworks para treinamento descentralizado (BlockTrain) e leis de scaling para destilação task-specific.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**13. Less is More: Quality-Aware Training Data Selection for Scientific Summarization**
- Autores: Maria Nefeli Paraskevopoulou, Tatiana Passali, Grigorios Tsoumakas
- Propõe seleção consciente de qualidade para resumos científicos, reconhecendo que abstracts autorais variam em alinhamento com o artigo-fonte. Relevante para pipelines de fine-tuning em domínios especializados.
- Link: http://arxiv.org/abs/2606.24828v1

**14. L3Cube-MahaPOS: A Marathi Part-of-Speech Tagging Dataset and BERT Models**
- Autores: Hariom Ingle, Ronit Ghode, Ishwari Gondkar et al.
- Tackla uma lacuna crítica em recursos NLP para o marathi, língua com 83M+ falantes. releasing dataset + modelos BERT adaptados para POS tagging.
- Link: http://arxiv.org/abs/2606.24825v1

**21. Paying to Know: Micro-Transaction Markets for Verified Product Information in Agentic E-Commerce**
- Autores: Filippos Ventirozos, Matthew Shardlow
- Explora como rails de micropagamento agent-native transformam chatbots de comércio eletrônico em sistemas de recuperação de informação verificável — mudança de paradigma para NLP comercial.
- Link: http://arxiv.org/abs/2606.24783v1

**26. Posterior Refinement: Fast Language Generation via Any-Order Flow Maps**
- Autores: Manan Agarwal, Sheel Shah, Chanhyuk Lee et al.
- Avança geração não-autoregressiva com flow maps any-order, permitindo refinamento iterativo sem dependência sequencial — impacto direto em latência de inference.
- Link: http://arxiv.org/abs/2606.24773v1

**43. DREAM: Dense Retrieval Embeddings via Autoregressive Modeling**
- Autores: Yixuan Tang, Yi Yang
- Treina dense retrievers com objetivos autoregressivos em vez de contrastivos, eliminando necessidade de pares negativos labeling-intensivos. Relevante para sistemas RAG.
- Link: http://arxiv.org/abs/2606.24667v1

---

### 🤖 Agentes e Raciocínio

**1. InSight: Self-Guided Skill Acquisition via Steerable VLAs**
- Autores: Maggie Wang, Lars Osterberg, Stephen Tian et al.
- Desbloqueia aquisição autônoma de habilidades em VLAs ao torná-las steerable no nível de ações primitivas — salto qualitativo além de simplesmente ampliar dados de demonstração.
- Link: http://arxiv.org/abs/2606.24884v1

**4. OpenThoughts-Agent: Data Recipes for Agentic Models**
- Autores: Negin Raoof, Richard Zhuang, Marianna Nezhurina et al.
- Primeira tentativa sistemática de curar data recipes para agentes de propósito geral, indo além de benchmarks únicos como SWE-Smith e SERA.
- Link: http://arxiv.org/abs/2606.24855v1

**25. Are We Ready For An Agent-Native Memory System?**
- Autores: Wei Zhou, Xuanhe Zhou, Shaokun Han et al.
- Mapeia evolução de memória em agentes LLM de retrieval-augmented para sistemas de gestão de ciclo de vida completo — referência essencial para arquitetura de sistemas.
- Link: http://arxiv.org/abs/2606.24775v1

**42. LaGO: Latent Action Guidance for Online Reinforcement Learning**
- Autores: Kuan-Yen Liu, Ren-Jhyun Huang, Ti-Rong Wu
- Propõe usar LLMs não como controladores diretos, mas como guias de ações latentes para RL online — abordagem mais robusta para planning seqüencial.
- Link: http://arxiv.org/abs/2606.24669v1

**24. DeepBD: A Grounded Agentic Workflow for Variant Prioritization and Diagnosis of Genetic Birth Defects**
- Autores: Shiyu Li, Ziqi Yan, Zhihao Wu et al.
- Demonstra aplicação de agentes grounded em genômica clínica, priorizando variantes genéticas com workflow estruturado — exemplo prático de AI + healthcare.
- Link: http://arxiv.org/abs/2606.24779v1

**8. World Models in Pieces: Structural Certification for General Agents**
- Autores: Yikai Lu, Yifei Wu, Xinyu Lu et al.
- Formaliza o problema de agentes no "big-world regime" e propõe certificação estrutural que distingue gargalos críticos de falhas irrelevantes.
- Link: http://arxiv.org/abs/2606.24842v1

---

### 🔧 Métodos e Frameworks

**20. Grad Detect: Gradient-Based Hallucination Detection in LLMs**
- Autores: Anand Kamat, Daniel Blake, Brent M. Werness
- Método inovador baseado em gradientes para detectar alucinações — ferramenta crucial para deployment de LLMs em aplicações de alta consequência.
- Link: http://arxiv.org/abs/2606.24790v1

**23. BluTrain: A C++/CUDA Framework for AI Systems**
- Autores: Adhitya Charan, Adwaid Suresh, Anuj Kumar et al.
- Framework systems-oriented que trata deep learning em escala como problema de engenharia de sistemas, não apenas de modelagem — foco em throughput e fidelidade numérica.
- Link: http://arxiv.org/abs/2606.24780v1

**31. Scaling Laws for Task-Specific LLM Distillation**
- Autores: Lavinia Ghita, Dhruv Desai, Ioana Boier
- Deriva leis de scaling empíricas para compressão de LLMs domain-specific, quantificando trade-offs entre performance, latência e custo.
- Link: http://arxiv.org/abs/2606.24747v1

**35. Evaluating the Interpretability of Sparse Autoencoders with Concept Annotations**
- Autores: Jonas Klotz, Cassio F. Dantas, Pallavi Jain et al.
- Propõe avaliação human-grounded para SAEs em vez de métricas proxy — avanço metodológico para o campo de mechanistic interpretability.
- Link: http://arxiv.org/abs/2606.24716v1

---

### 📊 Aplicações

**48. CineCap: Structured Reasoning with Spatio-Temporal Anchors for Cinematographic Video Captioning**
- Autores: Xinyu Mao, Yuhui Zeng, Xiaokun Liu et al.
- Aplica conceitos de film language (movimento de câmera, profundidade de campo) para captioning de vídeo — Enable controllable movie-quality video generation.
- Link: http://arxiv.org/abs/2606.24636v1

**19. EG-VQA: Benchmarking Verifiable Video Question Answering with Grounded Temporal Evidence**
- Autores: Linpeng Huang, Weixing Chen, Zexin Chen et al.
- Benchmark que vai além de answer correctness, exigindo grounding em evidência temporal do vídeo — avalia Video-LLMs com rigor conceitual.
- Link: http://arxiv.org/abs/2606.24797v1

**22. Assessing Distribution Shift in Human Activity Recognition for Domain Generalization**
- Autores: Rebecca Adaimi, Edison Thomaz
- Aborda desafio central em HAR: generalização através de diversidade de dados do mundo real, crucial para deployment em saúde e bem-estar.
- Link: http://arxiv.org/abs/2606.24781v1

**36. Model selection with proper scoring rules on data sets of time series**
- Autores: Giorgio Corani, Stefano Damato, Dario Azzimonti et al.
- Estende proper scoring rules para seleção de modelos em datasets de séries temporais, com metodologia de agregação robusta.
- Link: http://arxiv.org/abs/2606.24715v1

**46. ParaPairAudioBench: Paralinguistic Pairwise Audio Benchmark for LALM-as-a-Judge**
- Autores: Jisu Jeon, Seungyeon Jwa, Joosung Lee et al.
- Preenche lacuna em avaliação de fala gerada ao focar em distinções paralinguísticas finas (não apenas naturalness), com benchmark pairwise.
- Link: http://arxiv.org/abs/2606.24648v1

---

## 3. Sinal de Tendência em Pesquisa

**Agentes multi-turn com memória persistente e auto-avaliação** emergem como fronteira central. Os artigos desta edição indicam uma maturação do conceito de "agente LLM" — de sistemas que executam uma única tarefa para arquiteturas capazes de manter contexto, atualizar beliefs e Planejar através de interações prolongadas. Três sinais são claros: (1) a emergência de **memory systems agent-native** que vão além de retrieval simples; (2) **avaliação rigorosa** de agentes através de benchmarks que medem groundedness e não apenas accuracy; e (3) **frameworks de dados** para treinamento de agentes de propósito geral, preenchendo uma lacuna crítica entre proof-of-concepts task-specific e capacidades amplas. Paralelamente, a comunidade de **interpretabilidade** avança para avaliação human-grounded de métodos como SAEs, abandonando métricas proxy. A convergência dessas tendências sugere que 2026 será marcado por agentes com melhor sense of self —知道自己什么时候不知道 e capacidade de corrigir trajetória.

---

## 4. Vale Ler a Fundo

1. **InSight: Self-Guided Skill Acquisition via Steerable VLAs** — Representa um salto conceitual em manipulation skills: VLAs não são mais limitados aos dados de demonstração, mas steerable em nível de ação primitiva. Essencial para robótica colaborativa e manipulação em ambientes não estruturados.
   - Link: http://arxiv.org/abs/2606.24884v1

2. **Grad Detect: Gradient-Based Hallucination Detection in LLMs** — A primeira abordagem sistemática e implementável para detectar alucinações em tempo real via análise de gradientes. Crítica para deployment responsável de LLMs em domínios de alta consequência (saúde, direito, finanças).
   - Link: http://arxiv.org/abs/2606.24790v1

3. **Scaling Laws for Task-Specific LLM Distillation** — Oferece framework quantitativo para decisões de compressão de modelos em produção. Preenche lacuna prática entre pesquisa de eficiência e aplicação real, com leis empíricas que informam trade-offs custo-performance.
   - Link: http://arxiv.org/abs/2606.24747v1

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*