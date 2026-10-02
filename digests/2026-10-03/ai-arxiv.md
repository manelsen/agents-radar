# Resumo diário de pesquisa em IA no ArXiv 2026-10-03

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-10-02 23:30 UTC

---

# Pesquisa em IA no ArXiv — 2026-10-03

---

## 1. Destaques do Dia

Os artigos de hoje revelam uma convergência notável em três frentes: (1) modelos de difusão estão sendo adaptados para geração de linguagem com abordagens hierárquicas e contínuas, buscando combinar raciocínio bidirecional com geração paralela eficiente; (2) sistemas multi-agente e robótica ganham impulso com novos benchmarks e frameworks de coordenação, especialmente para tarefas de manipulação física etool use; (3) técnicas de otimização para LLMs evoluem para métodos de segunda ordem acessíveis e fine-tuning com amostragem, desafiando a sabedoria convencional sobre o papel do RL. Além disso, avanços em 3D generation e aplicações em ciências (proteínas, química, clima) demonstram crescente maturidade da IA em domínios científicos especializados.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**14. [The Missing Primitive: Diagnosing and Repairing Mathematical Reasoning in LLMs](http://arxiv.org/abs/2610.02191v1)**  
Autores: Shuo Xing, Zilin Dai, Chengyuan Qian et al. | cs.LG  
A primeira análise sistemática da compreensão estrutural matemática subjacente às capacidades de LLMs em problemas de fronteira, identificando primitivas ausentes que limitam o raciocínio formal.

**31. [Finetuning with Sampling: SFT Learns Better Than You Think](http://arxiv.org/abs/2610.02140v1)**  
Autores: Aayush Karan, Sitan Chen, Yilun Du | cs.LG, cs.AI, cs.CL  
Demonstra que SFT com amostragem pode superar métodos baseados em RL para introdução de novas capacidades, desafiando a sabedoria convencional sobre a superioridade do RL em generalização.

**35. [Local Support Learning](http://arxiv.org/abs/2610.02126v1)**  
Autores: Assaf Ben-Kish, Akarsh Kumar, James Glass et al. | cs.LG, cs.AI  
Reformula o catastrophic forgetting como problema geométrico no espaço de pesos, propondo um objetivo de retenção natural sob o qual gradientes são subótimos.

**45. [LLM2Jev: LLMs Are Already Jev-Style Decision Models](http://arxiv.org/abs/2610.02076v1)**  
Autores: Yinheng Li, Justin Wagle | cs.CL  
Investiga se LLMs já possuem capacidade intrínseca de retornar distribuições categóricas sobre opções predefined sem gerar texto livre, relevante para sistemas de decisão automatizados.

---

### 🤖 Agentes e Raciocínio

**3. [Reconstruct, Practice, Go Real: Guided Self-Improvement for Embodied Agents](http://arxiv.org/abs/2610.02204v1)**  
Autores: Yen-Jen Wang, Haozhe Jiang, Shuying Deng et al. | cs.RO, cs.AI, eess.SY  
Framework RPG para melhoria autônoma de agentes robóticos sem dependência de engenharia de recompensas manual, usando reconstruct, prática e simulação.

**7. [VISTA: A Visual Harness for Reasoning in an Interactive World](http://arxiv.org/abs/2610.02200v1)**  
Autores: Qiushi Han, Keya Hu, Linlu Qiu et al. | cs.AI, cs.CV  
Harness visual que desbloqueia capacidades de raciocínio de longo prazo em modelos multimodais para ambientes interativos diversos.

**24. [AutoCompact: Learning When to Compact Context in Long-Horizon Coding Agents](http://arxiv.org/abs/2610.02163v1)**  
Autores: Xuan Zhang, Longtao Zheng, Cunxiao Du et al. | cs.CL  
Sistema que permite agentes de código decidirem autonomamente quando e como compactar contexto obsoleto, gerenciando memória de forma inteligente.

**25. [DuoMind: Enabling Distributed Multi-Robot Coordination with Semantic Communication](http://arxiv.org/abs/2610.02161v1)**  
Autores: Hanchu Zhou, Dechen Gao, Hang Wang et al. | cs.RO, cs.AI  
Extensão de VLMs/VLAs para coordenação multi-robô, usando comunicação semântica para coordenar horizontes longos de tarefas compartilhadas.

**42. [HumanoidToolBench: Benchmarking Humanoid Tool Use from Selection to Mobile Execution](http://arxiv.org/abs/2610.02089v1)**  
Autores: Kyochul Jang, Seohyeon Park, Ohchul Kwon et al. | cs.RO, cs.AI  
Primeiro benchmark conjunto para seleção de ferramentas e coordenação de manipulação/locomoção em humanoides, preenchendo lacuna crítica em benchmarks robóticos.

---

### 🔧 Métodos e Frameworks

**8. [TACO: Ternary Absolute-max Column-wise One-sparse Optimizer for LLM Fine-Tuning](http://arxiv.org/abs/2610.02199v1)**  
Autores: Jichao Jiang, Cristian McGee, El Houcine Bergou et al. | cs.LG, math.OC  
Otimizador one-sparse por coluna com valores ternários que reduz drasticamente overhead de memória de estados de otimizador em fine-tuning de LLMs.

**18. [SoftServe: A Scalable Quasi-Newton Method for Deep Learning](http://arxiv.org/abs/2610.02182v1)**  
Autores: Joohwan Ko, Tetiana Parshakova, Diana Cai et al. | cs.LG, cs.AI  
Método Quasi-Newton escalável que supera obstáculos de não-convexidade e tamanho de parâmetros para treinamento profundo.

**10. [Hierarchical Continuous Diffusion Language Models](http://arxiv.org/abs/2610.02193v1)**  
Autores: Hui Ren, Zihan Li, Chang Liu et al. | cs.CL, cs.AI, cs.LG  
Aproxima difusão discreta com modelos hierárquicos contínuos para resolver o problema de amostragem independente de tokens nas marginals.

**15. [DMAD: Distribution Matching as Adversarial Distillation for Fast Visual Generation](http://arxiv.org/abs/2610.02188v1)**  
Autores: Zhengming Yu, Junkun Yuan, Haotian Yang et al. | cs.CV, cs.AI  
Melhora DMD eliminando necessidade de modelo auxiliar de difusão, reduzindo custo computacional e de memória para geração visual rápida.

---

### 📊 Aplicações

**14. [Generative modeling of intrinsically disordered protein regions](http://arxiv.org/abs/2610.02189v1)**  
Autores: Jason X. Liu, Sebastian Ibarraran, Frank Hu et al. | cs.LG  
Primeiro modelo generativo especializado para IDRs, regiões proteicas funcionais sem estrutura fixa que desafiam métodos baseados em estrutura.

**16. [Higher-Order Molecular Grammars for Generative and Foundation Models in Chemistry](http://arxiv.org/abs/2610.02186v1)**  
Autores: Yiming Huang, Yujie Zeng, Vijay Prakash Dwivedi et al. | cs.LG, cs.AI  
Representações gramaticais de alta ordem que capturam topologia molecular como sistemas de anéis e motivos recorrentes, superando formalismos sequenciais e gráficos.

**49. [AI Emulation of Stochastic Sudden Stratospheric Warming](http://arxiv.org/abs/2610.02069v1)**  
Autores: C. Daniel Boscu, Daniel Hernandez, Fabio Alvarez Ventura et al. | physics.ao-ph, cs.LG  
Emulador probabilístico profundo para o modelo Holton-Mass com transições de regime, usando estrutura latente interpretável para class imbalance.

**2. [KaliBench: Cybersecurity Tool Use on Kali Linux](http://arxiv.org/abs/2610.02206v1)**  
Autores: Pengfei Li, Naufal Suryanto, Sicheng Zhang et al. | cs.CL, cs.AI, cs.CR  
Benchmark fino para avaliação de LLMs em geração de comandos executáveis para workflows de cibersegurança, com recompensas verificáveis em runtime.

---

## 3. Sinal de Tendência em Pesquisa

**Coordenação Multi-Agente e Robótica Embodied**

Hoje observamos uma aceleração clara em sistemas multi-agente e robótica embodied. Os artigos #3, #23, #25 e #42 representam um esforço coordenado da comunidade para superar limitações históricas: (1) benchmarks mais realistas que avaliam seleção de ferramentas E execução física simultaneamente; (2) comunicação semântica entre robôs utilizando VLMs como backbone; (3) melhoria autônoma sem engenharia de recompensa manual. Esta tendência reflete a maturação de modelos base para robótica e a transição de研究 de laboratório para problemas de coordenação real. Acredito que nos próximos 12 meses veremos mais trabalhos integrando raciocínio de longo prazo, coordenação distribuída e manipulação física em pipelines unificados.

**Otimização Eficiente para LLMs**

Métodos de otimização avançados (Quasi-Newton, one-sparse, sampling-based SFT) estão democratizando fine-tuning de modelos grandes. A redução de overhead de memória (#8) combinada com insights de que SFT com amostragem rivaliza com RL (#31) pode significar uma mudança paradigmática em como introduzimos novas capacidades em modelos de fronteira.

---

## 4. Vale Ler a Fundo

1. **[Finetuning with Sampling: SFT Learns Better Than You Think](http://arxiv.org/abs/2610.02140v1)**  
   Revolucão conceptual sobre o papel do SFT vs RL em post-training. Essential para qualquer pessoa trabalhando com fine-tuning de LLMs.

2. **[HumanoidToolBench: Benchmarking Humanoid Tool Use from Selection to Mobile Execution](http://arxiv.org/abs/2610.02089v1)**  
   Preenche lacuna crítica em benchmarks robóticos e estabelece padrão para avaliação conjunta de seleção e execução de ferramentas em contextos físicos.

3. **[Local Support Learning](http://arxiv.org/abs/2610.02126v1)**  
   Perspectiva geométrica fundamental sobre catastrophic forgetting que pode reformular como pensamos preservação de conhecimento em modelos pré-treinados.

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*