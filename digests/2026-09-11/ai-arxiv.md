# Resumo diário de pesquisa em IA no ArXiv 2026-09-11

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-09-10 22:12 UTC

---

# Resumo de Pesquisa em IA — ArXiv (2026-09-11)

---

## 1. Destaques do Dia

A pesquisa de hoje revela uma ênfase crescente em **sistemas de memória e esquecimento seletivo para agentes persistentes**, com ao menos três artigos independentes atacando o problema de gerenciar facts desatualizados sem comprometer consultas históricas. No campo de visão-linguagem,一个新的范式 emerge com o **Show-Harness**, que demonstra como VLMs podem controlar robôs através de interfaces semânticas compactas, e o **MOONWALK**, que aplica agentes a fluxos de revisão em animação. Observa-se também consolidation teórico em **estabilidade algorítmica via ensembles** e progresses em **modelos de mundo baseados em JEPA** para simulação física. O tema de **auditoria e medição de sistemas de IA empresariais** ganha destaque com o protocolo IBIB, que propõe avaliar rotas de serving ao invés de apenas identificadores de modelo.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**1. IdeaAMBIG: Benchmarking Implementation-Critical Gaps in Research-Idea Specifications**  
Link: http://arxiv.org/abs/2609.10539v1  
Autores: Yiling Ma, Yilun Zhao, Sihong Wu et al.  
*Propõe um benchmark para avaliar quão bem especificações de métodos de pesquisa permitem implementação fiel, revelando gaps entre ideias publicáveis e código reproduzível.* — Relevante para a crise de reprodutibilidade em IA.

**2. Building Multilingual Bridges: Data Mixing as the Pillar of Generalization for In-Language Reasoning**  
Link: http://arxiv.org/abs/2609.10445v1  
Autores: Mehrnaz Mofakhami, Ananya Sahu, Alejandro R. Salamanca et al.  
*Aborde o viés inglês-cêntrico de modelos de raciocínio através de estratégias de mistura de dados que fortalecem capacidades multilíngues.* — Crucial para acessibilidade global de LLMs.

**3. ConvMem: Convolutional Memory for Long-Context Reasoning**  
Link: http://arxiv.org/abs/2609.10441v1  
Autores: Hongming Zhang, Zhaozhen Gu, Fengshuo Bai et al.  
*Apresenta uma arquitetura de memória convolucional que estende context windows de LLMs sem aumentar complexidade computacional proporcional.* — Alternativa eficiente a mecanismos de atenção expandida.

**4. RiLM: Parameter-Efficient Language Modeling via Geodesic Decoding**  
Link: http://arxiv.org/abs/2609.10305v1  
Autores: Fang Li  
*Redesenha a matriz de saída de language models pequenos usando métricas Riemannianas, recuperando 1/3 da capacidade computacional.* — Desbloqueia deployment em edge devices.

---

### 🤖 Agentes e Raciocínio

**5. Show-Harness: Just a VLM Agent Can Play Robots**  
Link: http://arxiv.org/abs/2609.10522v1  
Autores: Yanzhe Chen, Zechen Bai, Zhijun Cao et al.  
*Demonstra que VLMs pré-treinados podem controlar robôs através de uma interface semântica mínima que mapeia intents a ações, semfine-tuning.* — Quebra barreira entre VLMs e controle de robôs.

**6. What Should an Agent Forget? Separating What Is Stored from What Is Used**  
Link: http://arxiv.org/abs/2609.10263v1  
Autores: Yuhang Li, Yuchen Li  
*Propõe RD-Forget, framework training-free que distingue memória persistente de evidência requerida para cada resposta.* — Resolve tensão fundamental em agentes persistentes.

**7. Fortunate Recall: Ontology-Driven Memory Lifecycle Management for Persistent Coherence in LLMs**  
Link: http://arxiv.org/abs/2609.10413v1  
Autores: Ansuman Mullick, Erey Tüzün  
*Usa ontologias para classificar facts e determinar taxas de retenção diferenciadas, evitando crescimento descontrolado de memória.* — Abordagem teórica sólida para lifecycle management.

**8. TRACE: Training Reasoning Agents for Causal Exploration with Synthesized Rewards**  
Link: http://arxiv.org/abs/2609.10315v1  
Autores: Rui Sun, Zhan Shi, Bing He  
*Treina agentes de raciocínio causal usando rewards sintetizados, permitindo diagnóstico de anomalias sem ground truth custoso.* — Preenche gap entre RLVR e domínios diagnósticos.

---

### 🔧 Métodos e Frameworks

**9. Semigroup-JEPA: Latent Dynamics Consistency for Zero-Shot Physics Generalization**  
Link: http://arxiv.org/abs/2609.10464v1  
Autores: Andy Zeyi Liu, Haoran Sun, Lucas Baker et al.  
*Estende JEPA com consistência de dynamics latente usando estrutura de semigrupo, demonstrando generalização zero-shot em física.* — Avanço em world models baseados em latent representation.

**10. Algorithmic stability via ensembling**  
Link: http://arxiv.org/abs/2609.10428v1  
Autores: Rina Foygel Barber, Richard J. Samworth  
*Proporciona framework unificado para quantificar estabilidade algorítmica de qualquer estratégia de ensemble, conectando teoria a prática.* — Contribuição teórica fundamental.

**11. IBIB: A Protocol for Measuring Enterprise AI Systems by Serving Route, Not Model Identifier**  
Link: http://arxiv.org/abs/2609.10494v1  
Autores: Blake Stenstrom, Charangan Vasantharajan, Brian Sathianathan  
*Protocolo que mede performance de sistemas empresariais considerando rotas de serving, precisão e harness — não apenas checkpoints.* — Corrige measurement error em benchmarks de modelos.

**12. On-Policy Distillation for Vision-Language Model Adaptation**  
Link: http://arxiv.org/abs/2609.10321v1  
Autores: Hongyuan Zhang, Xianda Guo, Yanlun Peng et al.  
*Propõe distillation on-policy para VLM que adapta teacher a dados multimodais de baixa qualidade, superando abordagens estáticas.* — Importante para dados ruidosos do mundo real.

---

### 📊 Aplicações

**13. Emergency Department Revisit Quality Review Screening**  
Link: http://arxiv.org/abs/2609.10421v1  
Autores: Jonathan A. Handler, Marlene I. Robles-Granda, Jacob E. Mefford et al.  
*Estuda como IA pode apoiar revisão de qualidade de retornos em emergências, além das janelas tradicionais de 48-72 horas.* — Aplicação clínica com potencial de salvar vidas.

**14. Cyber-Financial Contagion: Modeling the Propagation of an AI Vendor Compromise**  
Link: http://arxiv.org/abs/2609.10350v1  
Autores: Alex Leytes  
*Modela como comprometimento de vendors de IA compartilhados propaga pelo sistema bancário — fraude, crédito, AML.* — Primeiro trabalho a quantificar systemic risk de IA vendor concentration.

**15. Searching for New Physics with Reinforcement Learning**  
Link: http://arxiv.org/abs/2609.10382v1  
Autores: Jacky Kumar, Marianne Bouchard, David London  
*Aplica RL para identificar anomalias no SMEFT que indicam física além do Modelo Padrão.* — Demonstra poder de IA para ciência básica.

---

## 3. Sinal de Tendência em Pesquisa

A convergência de **sistemas multiagente com memória persistente** emerge como tema dominante. Três artigos tratam independentemente o problema de quais facts um agente deve reter ou descartar, sinalizando que a comunidade reconhece a necessidade de frameworks teóricos para lifecycle management em sistemas que operam continuamente. Parallelamente, **bridging entre VLMs e controle físico** (Show-Harness, MOONWALK) indica que a indústria está pronta para operacionalizar modelos de visão-linguagem além de benchmarks acadêmicos. No eixo teórico, **JEPA e world models** ganham tração para simulação física, enquanto **auditoria de sistemas empresariais** (IBIB) responde a demandas regulatórias. A quantidade de trabalhos sobre **遗忘 (unlearning/forgetting)** sugere preparação para compliance com regulações de privacidade.

---

## 4. Vale Ler a Fundo

**1. Semigroup-JEPA: Latent Dynamics Consistency for Zero-Shot Physics Generalization**  
Link: http://arxiv.org/abs/2609.10464v1  
*Porque é leitura essencial:* Demonstra pela primeira vez que world models baseados em JEPA podem generalizar física sem dados de domínio específico. A abordagem de consistência de dynamics via estrutura de semigrupo é matematicamente elegante e abre caminho para simuladores neurais robustos.

**2. IBIB: A Protocol for Measuring Enterprise AI Systems by Serving Route, Not Model Identifier**  
Link: http://arxiv.org/abs/2609.10494v1  
*Porque é leitura essencial:* Expõe um viés sistêmico em como a comunidade mede modelos — todos os 18 benchmarks surveyed focam em identificadores, ignorando rotas de serving. O protocolo proposto é imediatamente aplicável e pode reestabelecer confiança em comparações de性能.

**3. What Should an Agent Forget? Separating What Is Stored from What Is Used**  
Link: http://arxiv.org/abs/2609.10263v1  
*Porque é leitura essencial:* Resolve uma tensão fundamental em agentes persistentes com uma abordagem training-free. A separação entre armazenamento e uso de facts é conceptualizada de forma clara e implementação é diretamente utilizável.

---

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*