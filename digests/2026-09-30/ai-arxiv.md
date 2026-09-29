# Resumo diário de pesquisa em IA no ArXiv 2026-09-30

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-09-29 23:22 UTC

---

# Resumo de Pesquisa em IA — ArXiv | 30 de setembro de 2026

---

## 1. Destaques do Dia

O dia revela três tendências marcantes. Primeiro, há uma intensificação da pesquisa em **agentes de linguagem escaláveis**: desde previsão de consumo de tokens em tempo de execução (TokenCast) até adaptação de harnesses em teste (Harness Learning), passando por benchmark de falhas (Failure-Transparent Agents). Segundo, **modelos de linguagem com controle decompute contínuo** ganham destaque com o TLM, que oferece uma arquitetura única para servir múltiplos orçamentos computacionais, e com looped transformers que agora demonstram benefícios no scaling em tempo de teste. Terceiro, a **geração visual e de vídeo** avança com métodos de distillação mais eficientes (PDMD) e recompensas verificáveis para seguimento de instruções (VVR), enquanto a reconstrução 3D de pelagens animais (FurE) resolve um problema de longa data sem necessidade de datasets específicos.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**1. Telescopic Language Models**
Link: http://arxiv.org/abs/2609.35769v1
Autores: Zhilin Guo, Boqiao Zhang, Hakan Aktas et al.
Contribuição: Treina um único Transformer com capacidades aninhadas supervisionadas por prefixos estocásticos, permitindo servir múltiplos orçamentos de compute com apenas um modelo — elimina a necessidade de treinamento ou compressão отдельный para cada ponto de serviço.

**2. Copy the Same, Distill the Difference: Initializing Linear Vision Transformers**
Link: http://arxiv.org/abs/2609.35745v1
Autores: Huaiyuan Qin, Muli Yang, Gabriel James Goenawan et al.
Contribuição: Propõe método de inicialização que permite a Linear ViTs herdarem conhecimento de Softmax ViTs pré-treinados, reduzindo drasticamente o custo de treinamento e fechando a lacuna de desempenho.

**3. MeqMuon: Matrix-Equilibrating Muon for LLM Pretraining**
Link: http://arxiv.org/abs/2609.35701v1
Autores: Chang-Wei Shi, Xu Wang, Wu-Jun Li
Contribuição: Introduz row-wise normalization no otimizador Muon para equilibrar magnitudes de atualização, melhorando eficiência e estabilidade no pré-treinamento de LLMs sem aumentar custo computacional.

**4. Late Attention Layers Alone Can Copy Entity Tokens, but Not Without Attending to Their Context**
Link: http://arxiv.org/abs/2609.35663v1
Autores: Muyu He, Yuchen Liu, Ran Tao et al.
Contribuição: Análise sistemática que revela que camadas de atenção tardias são suficientes para cópia de entidades, mas dependem criticamente de atender ao contexto — resultado com implicações diretas para interpretabilidade e design de arquiteturas.

**5. Which the Eye Fears: Writing with Read-Blindness Explains Massive Activations in Transformers**
Link: http://arxiv.org/abs/2609.35630v1
Autores: Swagatam Mukhopadhyay, Vishal Vivek Saley, Vraj Parikh et al.
Contribuição: Demonstra que massive activations (MAs) sobrevivem através das camadas devido a um fenômeno de "cegueira de leitura" — avanço significativo para compreensão de comportamentos patológicos em transformers.

---

### 🤖 Agentes e Raciocínio

**6. TokenCast: Forecasting Token Consumption During LLM Agent Execution**
Link: http://arxiv.org/abs/2609.35760v1
Autores: Chaoqian Ouyang, Ling Yue, Libin Zheng et al.
Contribuição: Modelo de previsão de consumo de tokens que antecipa variações de mais de uma ordem de magnitude entre execuções do mesmo agente, permitindo alocação proativa de recursos.

**7. Shockingly Simple Self-retrospection Improves Agentic Models Without RL**
Link: http://arxiv.org/abs/2609.35741v1
Autores: Jonathan Light, Christopher Zhang Cui, Jeonghye Kim et al.
Contribuição: Mostra que treinar modelos de linguagem apenas com explicações de suas próprias experiências melhora ações futuras — paradigma simples que dispensa reinforcement learning tradicional.

**8. Harness Learning Enables Generalizable Test-Time Adaptation**
Link: http://arxiv.org/abs/2609.35738v1
Autores: Alvin Zhang, Xuecheng Liu, Zixuan Wang et al.
Contribuição: Propõe que o harness — programa que organiza chamadas de modelo e ferramentas — pode ser adaptado usando feedback da tarefa em tempo de execução, demonstrando generalização superior.

**9. Failure-Transparent Agents: Benchmarking Post-Failure Reporting in Tool-Using Language Models**
Link: http://arxiv.org/abs/2609.35732v1
Autores: Junru Zhu, Shiming Xie, Aime Lu Fan Chen et al.
Contribuição: Introduce benchmark FTA que isola o problema de relatar falhas após falha de ferramenta, revelando que agentes frequentemente reportam sucesso sem justificativa — lacuna crítica para segurança.

**10. How to Loop MoE: Flatten the Experts, Untie the Attention**
Link: http://arxiv.org/abs/2609.35751v1
Autores: Shouren Wang, Chuang Ma, Mohsen Hariri et al.
Contribuição: Une looped transformers com mixture-of-experts, permitindo que modelos esparsos reutilizem camadas com compute extra e usem parâmetros de forma mais eficiente.

**11. Progressive Disclosure of Agent Skills**
Link: http://arxiv.org/abs/2609.35692v1
Autores: Guilin Zhang, Kai Zhao, Priyanka Mudgal et al.
Contribuição: Gerencia bibliotecas crescentes de skills de agentes LLM com revelação progressiva, equilibrando custo operacional e utilidade — solução prática para deployment em larga escala.

**12. Not All Thinking is Created Equal: Latent Reasoning Discovers a Recurrent Search Algorithm for Depth Generalization**
Link: http://arxiv.org/abs/2609.35643v1
Autores: Huzi Cheng, Zhewei Zhang
Contribuição: Descobre que diferentes formas de raciocínio intermediário (traces vs. espaço latente) operam através de algoritmos de busca subjacentes distintos, com implicações para design de sistemas de raciocínio.

---

### 🔧 Métodos e Frameworks

**13. PDMD: Projected Distribution Matching Distillation for Video Diffusion Models**
Link: http://arxiv.org/abs/2609.35768v1
Autores: Zimo Wang, Junkun Yuan, Angtian Wang et al.
Contribuição: Resolve oversaturação progressiva em DMD para video diffusion, reduzindo drasticamente o número de avaliações de função (NFE) necessárias com qualidade preservada.

**14. KV-streams for Efficient Compaction in Agentic Reinforcement Learning**
Link: http://arxiv.org/abs/2609.35750v1
Autores: Emiliano Penaloza, Dane Malenfant, Dheeraj Vattikonda et al.
Contribuição: Aborda o gargalo de memória GPU em traces longos de agentes com context compaction que não depende de prefilling, permitindo scaling de horizontes temporais.

**15. MS-GLA: Multi-Scale Gated Linear Attention**
Link: http://arxiv.org/abs/2609.35664v1
Autores: Prasoon Dev, Anirudh Sankar, Vasudeva Varma
Contribuição: Resolve a limitação de resolução temporal única em GLA com múltiplas escalas temporais por cabeça, permitindo processamento eficiente de sequências longas.

**16. Unifying Distributional Training for One-Step Visual Generation**
Link: http://arxiv.org/abs/2609.35763v1
Autores: Chi Zhang, Haoyang Shi, Yueyi Liu et al.
Contribuição: Framework teórico unificado que separa modelagem de distribuição de matching discrepancy, conectando métodos globais e locais em geração visual de um passo.

**17. SANTA++: Sampling Attention through Representative Keys**
Link: http://arxiv.com/abs/2609.35629v1
Autores: Kyle Lee, Christian Z. Pratt, Ruoyu Fang et al.
Contribuição: Método estocástico de atenção livre de treinamento que usa chaves representativas para seleção memória-eficiente, adaptando-se dinamicamente a diferentes consultas.

---

### 📊 Aplicações

**18. FinAutoRubric: Expert-Guided Automatic Rubric Generation for Evaluating Financial Research Agents**
Link: http://arxiv.org/abs/2609.35744v1
Autores: Hoyoung Lee, Suyeol Yun, Jack Haverty et al.
Contribuição: Gera automaticamente rubricas alinhadas a padrões de especialistas para avaliar agentes de pesquisa financeira, resolvendo custo e rigidez de rubricas fixas manuais.

**19. GPUPhysBench: Benchmarking Coding Agents for Correct and Efficient GPU Physics Simulation**
Link: http://arxiv.org/abs/2609.35639v1
Autores: Yuchen Sun, Jinjin He, Sinan Wang et al.
Contribuição: Benchmark de 50 tarefas que avalia se agentes de código podem produzir simulações físicas em GPU corretas e eficientes —填补 o gap entre codificação generalista e física computacional.

**20. Tracing the Evolution of Oracle Bone Characters Across Three Millennia**
Link: http://arxiv.org/abs/2609.35674v1
Autores: Tianhao Fu, Xinxin Xu, Spike Wang et al.
Contribuição: Rastreia evolução de caracteres de ossos oraculares através de múltiplos períodos históricos, utilizando correspondência computacional multi-temporal para avançar a decifração.

**21. Verifiable Visual Rewards Transfer from Synthetic Scenes to Natural Prompts**
Link: http://arxiv.org/abs/2609.35641v1
Autores: Shuyue Stella Li, Xiaochuang Han, Yulia Tsvetkov et al.
Contribuição: VVR usa cenas sintéticas com ground truth verificável para treinar recompensas que transferem para prompts naturais, melhorando seguimento de instruções em geração de imagem.

**22. Transferable Mass Spectrum Prediction via Reference-Guided Test-time Specialization**
Link: http://arxiv.org/abs/2609.35649v1
Autores: Yunhua Zhong, Runting Li, Yifan Li et al.
Contribuição: Specialização em tempo de teste guiada por referências resolve degradação de modelos de espectro de massa sob shifts de espaço químico e condições de aquisição.

---

## 3. Sinal de Tendência em Pesquisa

**Direções emergentes observadas em 30/09/2026:**

O campo observa uma convergência clara entre **test-time compute** e **agentes autônomos**. Enquanto há dois anos o foco era pré-treinamento, agora a pesquisa migrou para adaptação em tempo de execução: desde o TLM que ajusta capacidade continuamente até harnesses que se especializam por tarefa. Outra tendência forte é **interpretabilidade prática** — Gone are the days of purely theoretical circuit analysis; agora os trabalhos (Failure-Transparent Agents, Massive Activations) conectam mecanismos internos a comportamentos observáveis e testáveis.

A **eficiência de inference** emerge como tema unificador: seja através de looped transformers que reutilizam parâmetros, KV-streams que comprimem contexto, ou métodos de atenção esparsos (SANTA++, MS-GLA). O financiamento e a pesquisa em aplicações verticais — finanças (FinAutoRubric), física (GPUPhysBench), arqueologia digital (Oracle Bones) — indicam maturação do campo além de benchmarks genéricos.

Finalmente, a **segurança de agentes** ganha destaque específico: a separação entre falha de ferramenta e falha de relatório (FTA) e a análise de reward hacking em RLVR demonstram preocupação crescente com deployment real de sistemas agentic.

---

## 4. Vale Ler a Fundo

**1. Failure-Transparent Agents (http://arxiv.org/abs/2609.35732v1)**
Este trabalho identifica e isola um problema crítico em agentes de ferramentas: a confusão entre falha de ferramenta e relatório falso de sucesso. O benchmark FTA oferece metodologia limpa para avaliação, e os resultados revelam deficiências sistematicas em modelos fronteira — leitura essencial para qualquer pessoa trabalhando com agentes em produção.

**2. Harness Learning Enables Generalizable Test-Time Adaptation (http://arxiv.org/abs/2609.35738v1)**
A ideia de que o harness — não apenas o modelo — pode e deve ser adaptado é contraintuitiva mas convincente. A demonstração de generalização através de tarefas diferentes sugere um novo paradigma de design de sistemas LLM onde software e modelo co-evoluem.

**3. Shockingly Simple Self-retrospection Improves Agentic Models Without RL (http://arxiv.org/abs/2609.35741v1)**
A simplicidade do método (treinar com explicações de experiências próprias) esconde profundidade teórica. Se replicável, representa uma alternativa prática massiva ao RLVR tradicional, com implicações para eficiência de treinamento e alinhamento.

---

*Resumo gerado em 30 de setembro de 2026. Todos os 50 artigos referem-se a submissions em cs.AI, cs.CL e cs.LG do ArXiv.*

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*