# Resumo diário de pesquisa em IA no ArXiv 2026-09-10

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-09-09 22:10 UTC

---

# Resumo de Pesquisa em IA no ArXiv — 2026-09-10

---

## 1. Destaques do Dia

A pesquisa em IA desta data revela três direções convergentes: (1) **agentes autônomos em escala** — com estudos empíricos sobre comportamentos emergentes de milhares de LLMs cooperando espontaneamente em ambientes compartilhados; (2) **otimização de baixo nível** — novos limites teóricos sobre aceleração de gradiente e comportamento de normalização em redes profundas; e (3) **raciocínio e interpretabilidade** — avanços em avaliação de viés, detecção de sintonia excessiva (*sycophancy*) e métodos para auditar decisões de modelos. Também se destaca a crescente aplicação de modelos de linguagem a domínios físicos, como dinâmica de fluidos e astronomia, sugerindo maturidade在这些领域的跨学科合作。

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**3.** [ReCite: Agentic Reasoning for Faithful Citation](http://arxiv.org/abs/2609.09156v1)  
*Yuyang Huang, Bobo Li, Jiajia Song et al.*  
Propõe raciocínio agentivo para gerar citações academicamente precisas, automatizando a navegação em literatura científica crescente. Essencial para sistemas de recomendação de referências.

**23.** [It's Not RoPE that Creates Sinks: The Role of Self-Concentration and Value-Non-Mixing in Attention](http://arxiv.org/abs/2609.09085v1)  
*Raito Kiya, Satoki Ohashi, Kosuke Sato et al.*  
Desmistifica os "Attention Sinks" e "Massive Activations" em LLMs, atribuindo-os a mecanismos internos de atenção e não ao positional encoding. Relevante para quantização de baixo bits.

**34.** [The Audit Decides the Verdict: Instrument Effects Rival Demographic Bias in LLM Decision Audits](http://arxiv.org/abs/2609.09048v1)  
*Siddharth Vohra, Manikandan Ravikiran*  
Demonstra que viés demográfico em LLMs depende criticamente do método de auditoria — classificar individualmente vs. ranquear side-by-side produz resultados opostos.

**46.** [Good Pretraining, Bad SFT: Checkpoint Quality Across the Training Stack](http://arxiv.org/abs/2609.08966v1)  
*Sohir Maskey, Philipp Scholl, Jonas Knupp et al.*  
Evidência empírica em pipeline MoE de 30B parâmetros de que o melhor checkpoint por perda de pré-treinamento não é necessariamente o melhor para fine-tuning. Crítico para decisões de *model selection*.

---

### 🤖 Agentes e Raciocínio

**4.** [Procedural Graphs: Self-Evolving Execution Structures for LLM Agents](http://arxiv.org/abs/2609.09153v1)  
*Yuxing Lu, Yicheng Chen, Shanchan Wu et al.*  
Introduz grafos procedimentais que evoluem automaticamente para estruturar execução de longo horizonte em agentes LLM, substituindo geração irrestrita por conhecimento explícito de sequência e condições.

**6.** [Copying explains the collective behavior of AI agents in the wild](http://arxiv.org/abs/2609.09150v1)  
*Giordano De Marzo, Nicola Alboré, David Garcia*  
Análise empírica rara: milhares de agentes AI interagiram espontaneamente via wiki pública para cooperar em teste cronometrado — comportamento emergente sem coordenação explícita.

**12.** [ExecCritic: Learn to Test, Test to Improve for Coding Agents](http://arxiv.org/abs/2609.09133v1)  
*Leitian Tao, Baolin Peng, Haorui Wang et al.*  
Ciclos de retroalimentação onde agentes geram testes E patches simultaneamente, com correção cruzada para evitar viés de auto-confirmação.

**18.** [MeClear: Cooperative Game-Theoretic Attribution and Risk-Aware Memory Clearance for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.09115v1)  
*Boyu Yang, Jiazheng Sun, Zilong Lu et al.*  
Memória externa para agentes de longo horizonte otimizada por teoria de jogos cooperativos,清除过期信息以维护下游效用。

---

### 🔧 Métodos e Frameworks

**2.** [Learning Length-Extrapolatable Recurrent Models](http://arxiv.org/abs/2609.09157v1)  
*Hanwen Jiang*  
Aproxima a lacuna entre treinamento BPTT e capacidade de contexto além do horizonte, mostrando que perdas densas por token podem treinar extrapolação efetiva.

**5.** [Silver Rate Is (Almost) Optimal for Gradient Descent Acceleration](http://arxiv.org/abs/2609.09152v1)  
*Yuhan Ye, Kaizhao Liu*  
Prova um limite inferior não-assintótico de Ω(n^{-p_sil}) para GD com stepsizes fixos, aproximando a taxa de convergência ótima em otimização convexa.

**17.** [When Does Scale-Invariant Optimization Become Unstable? An Exact Schedule Law with Weight Decay](http://arxiv.org/abs/2609.09116v1)  
*Hasan Amin, Wei-Kai Chang, Rajiv Khanna*  
Deriva lei exata para interação entre schedules de learning rate e weight decay em redes normalizadas, explicando condições de instabilidade.

**20.** [Curriculum Learning as Transport: Understanding Curricula with Wasserstein Geodesics](http://arxiv.org/abs/2609.09099v1)  
*Changho Shin, David Alvarez-Melis*  
Formaliza currículos de treinamento via transporte otimal, quantificando dificuldade, ordenação e exposição com métricas geométricas.

**28.** [ToolLoop: Closed-Loop Tool-Use Data Synthesis via Decomposed Generation and Dynamic Self-Feedback](http://arxiv.org/abs/2609.09072v1)  
*Min Zeng, Yuzhou Liu, Zhenyu Cao et al.*  
Síntese de dados para uso de ferramentas por LLMs com geração decomposta e auto-feedback dinâmico, superando paradigmas generate-then-filter estáticos.

---

### 📊 Aplicações

**29.** [Performance of Clinical AI System and Physicians and Frontier Language Models in primary care diagnostics](http://arxiv.org/abs/2609.09070v1)  
*Andy Nkansah, Hanna Plotnitskaya, Stanislau Salavei et al.*  
Avaliação comparativa: Doctorina (82% concordância) vs. 8 médicos vs. 4 LLMs frontier em 150 consultas de atenção primária em polonês.

**38.** [Closed-Form of the Local Galactic Potential and Stellar Distribution Function from Gaia DR3](http://arxiv.org/abs/2609.09011v1)  
*Indranil Das, Adam Kamoski, Dora Demuri et al.*  
Aprendizado de máquina aplicado a dados astrofísicos do Gaia DR3 para estimar densidade de matéria escura local.

**42.** [Physics-Informed Deep Learning for False Ventricular Tachycardia Alarm Reduction in the ICU](http://arxiv.org/abs/2609.08992v1)  
*Athanasios Papastathopoulos-Katsaros, Alexandra Stavrianidi, Zhandong Liu*  
Framework combinando SE-ResNet com reconstrução física baseada em Windkessel para reduzir alarmes falsos de VT em UTI.

**50.** [ONE CYLinder: A Benchmark for Graph-Based Surrogate Modeling of Unsteady Bluff-Body Flows](http://arxiv.org/abs/2609.08947v1)  
*Théodore Michel, Antoine Campos, Alban Dujardin et al.*  
Benchmark padronizado para modelos de surrogado baseados em grafos em dinâmica de fluidos, cobrindo múltiplos regimes de fluxo.

---

## 3. Sinal de Tendência em Pesquisa

Observa-se **consolidação de agentes LLM como sistemas multiagente emergentes**, exemplificado pelo estudo de De Marzo et al. onde milhares de agentes desenvolveram cooperação espontânea via wiki compartilhada. Esta linha desafia pressupostos sobre necessidade de coordenação explícita.

Em **otimização**, a convergência de resultados teóricos (limites de Rademacher, leis de schedule, taxas ótimas de GD) indica maturação da teoria de treinamento, permitindo projeto mais principled de arquiteturas.

Destaque também para **interpretabilidade prática**: o trabalho sobre *sycophancy* (SPINE benchmark) e auditoria de viés demonstram que avaliação de modelos requer instrumentação cuidadosa — vieses não são propriedades intrínsecas, mas interação entre modelo e protocolo de teste.

Finalmente, a **aplicação a domínios físicos** (CFD, astrofísica) sinaliza que modelos de linguagem e arquiteturas de aprendizado profundo estão sendo adaptados para simulação científica, um território anteriormente dominado por métodos físicos explícitos.

---

## 4. Vale Ler a Fundo

**1. [TANGO: Humanoid Navigation in Cluttered Environments with a Whole-Body Vision-Language-Action Model](http://arxiv.org/abs/2609.09158v1)**  
Pioneiro ao tratar navegação humanóide como problema de adaptação corporal whole-body, não apenas path planning 2D. Integração de visão, linguagem e ação em robôs físicos.

**6. [Copying explains the collective behavior of AI agents in the wild](http://arxiv.org/abs/2609.09150v1)**  
Estudo empírico único sobre comportamento emergente de agentes em ambiente real compartilhado —难得的 insights sobre auto-organização em sistemas multiagente AI.

**17. [When Does Scale-Invariant Optimization Become Unstable? An Exact Schedule Law with Weight Decay](http://arxiv.org/abs/2609.09116v1)**  
Resultado teórico elegante que conecta três componentes (normalização, learning rate schedule, weight decay) em lei unificada, com implicações práticas diretas para treinamento de redes profundas.

---

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*