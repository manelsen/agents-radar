# Resumo diário de pesquisa em IA no ArXiv 2026-05-15

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-05-14 21:05 UTC

---

## Resumo Estruturado de Pesquisa em IA — ArXiv (2026-05-15)

---

### 1. Destaques do Dia

Os artigos de hoje revelam avanços significativos em três frentes principais. Primeiro, a pesquisa em agentes autônomos demonstra maturidade crescente, com sistemas capazes de atualizar pesos diretamente e evoluir iterativamente, indicando uma transição de simples consultores para agentes com agência real. Segundo, surgem trabalhos críticos sobre limitações fundamentais de LLMs — como a incapacidade de aprender negações e a fragilidade a cadeias de ações inseguras — alertando para vieses que podem comprometer implantações em produção. Terceiro, nota-se intenso interesse em infraestrutura de inference, particularmente em compressão de KV cache e servir disagregado, refletindo a pressão por eficiência em escala massiva. Também se destaca a aplicação de técnicas quânticas (QLAM) e geometria algébrica (Hodge Decomposition) para resolver desafios clássicos de transformers, sugerindo um renewed interesse em fundamentos teóricos.

---

### 2. Artigos-Chave

#### 🧠 Modelos de Linguagem

**WARDEN: Endangered Indigenous Language Transcription and Translation with 6 Hours of Training Data**
Link: http://arxiv.org/abs/2605.13846v1
Autores: Ziheng Zhang, Yunzhong Hou, Naijing Liu et al.
WARDEN demonstra que é possível transcrever e traduzir uma língua indígena australiana em perigo com apenas 6 horas de áudio anotado, superando limitações extremas de dados. Merece atenção por provar que modelos de linguagem podem preservar línguas em extinção mesmo com recursos mínimos.

**Negation Neglect: When models fail to learn negations in training**
Link: http://arxiv.org/abs/2605.13829v1
Autores: Harry Mayne, Lev McKinney, Jan Dubiński et al.
Estudo crítico que documenta como fine-tuning em documentos que marcam afirmações falsas pode fazer LLMs acreditarem nelas — um viés grave para aplicações de verificação factual. Essencial para quem desenvolve sistemas de fato-checking.

**Dense vs Sparse Pretraining at Tiny Scale: Active-Parameter vs Total-Parameter Matching**
Link: http://arxiv.org/abs/2605.13769v1
Autores: Abdalrahman Wael
Compara transformers densos e MoE em escala reduzida, revelando trade-offs entre matching de parâmetros ativos e totais. Relevante para otimização de modelos em cenários com restrições de recursos computacionais.

**MILM: Large Language Models for Multimodal Irregular Time Series with Informative Sampling**
Link: http://arxiv.org/abs/2605.13711v1
Autores: Hsing-Huan Chung, Shijun Li, Yoav Wald et al.
Aplica LLMs a séries temporais multimodais irregulares (e.g., prontuários eletrônicos), propondo sampling informativo para lidar com dados assíncronos. Importante para aplicações em saúde digital.

---

#### 🤖 Agentes e Raciocínio

**Good Agentic Friends Do Not Just Give Verbal Advice: They Can Update Your Weights**
Link: http://arxiv.org/abs/2605.13839v1
Autores: Wenrui Bao, Huan Wang, Jian Wang et al.
Propõe que agentes multi-LLM atualizem pesos uns dos outros em vez de trocarem apenas mensagens textais, reduzindo custos de tokenização. Marcante por desafiar a interface conversacional predominante.

**History Anchors: How Prior Behavior Steers LLM Decisions Toward Unsafe Actions**
Link: http://arxiv.org/abs/2605.13825v1
Autores: Alberto G. Rodríguez Salgado
Investiga se LLMs frontier continuam sequências de ações nocivas quando o histórico contém passos prejudiciais. Crítico para segurança de agentes que executam tool calls em produção.

**Harnessing Agentic Evolution**
Link: http://arxiv.org/abs/2605.13821v1
Autores: Jiayi Zhang, Yongfeng Gu, Jianhao Ruan et al.
Sistematiza evolução agentic via geração-evaluação-feedback, superando固定 proced. Útil para designers de pipelines de automação e otimização.

**ScioMind: Cognitively Grounded Multi-Agent Social Simulation with Anchoring-Based Belief Dynamics**
Link: http://arxiv.org/abs/2605.13725v1
Autores: Yitian Yang, Yiqun Duan, Linghan Huang et al.
Combina LLMs com dinâmica de crenças baseadas em ancoragem para simulação social credível. Relevante para estudos de opinião pública e comportamento coletivo.

---

#### 🔧 Métodos e Frameworks

**Topology-Preserving Neural Operator Learning via Hodge Decomposition**
Link: http://arxiv.org/abs/2605.13834v1
Autores: Dongzhe Zheng, Tao Zhong, Christine Allen-Blanchette
Resolve spectral interference em operadores neurais para equações de campo físico via decomposição de Hodge, isolandograus de liberdade topológicos. Avanço teórico fundamental para modelagem física baseada em dados.

**QLAM: A Quantum Long-Attention Memory Approach to Long-Sequence Token Modeling**
Link: http://arxiv.org/abs/2605.13833v1
Autores: Hoang-Quan Nguyen, Sankalp Pandey, Khoa Luu
Aplica princípios de computação quântica para memória de long-attention, atacando a complexidade quadrática de transformers. Proposta híbrida inovadora para contextos longos.

**KVServe: Service-Aware KV Cache Compression for Communication-Efficient Disaggregated LLM Serving**
Link: http://arxiv.org/abs/2605.13734v1
Autores: Zedong Liu, Xinyang Ma, Dejun Luo et al.
Comprime KV cache de forma consciente de serviço em arquiteturas disaggregadas (PD separation), reduzindo comunicação entre nodes. Essencial para inference em escala.

**Provable Quantization with Randomized Hadamard Transform**
Link: http://arxiv.org/abs/2605.13810v1
Autores: Ying Feng, Piotr Indyk, Michael Kapralov et al.
Oferece garantias teóricas para quantização via projeção aleatória com transformada Hadamard, com aplicações em similarity search e federated learning. Importante para quem trabalha com compressão de modelos.

**MinT: Managed Infrastructure for Training and Serving Millions of LLMs**
Link: http://arxiv.org/abs/2605.13779v1
Autores: Mind Lab, Song Cao et al.
Plataforma gerenciada para LoRA post-training e serving de milhões de LLMs adaptados, evitando materialização completa de cada policy. Avanço em infraestrutura para personalização em escala.

---

#### 📊 Aplicações

**Uncertainty-Driven Anomaly Detection for Psychotic Relapse Using Smartwatches**
Link: http://arxiv.org/abs/2605.13816v1
Autores: Nikolaos Tsalkitzis, Panagiotis P. Filntisis, Petros Maragos et al.
Detecta recorrência psicótica via smartwatch usando forecasting cardíaco e multi-task learning com incerteza. Exemplo robusto de phenotyping digital para saúde mental.

**ENSEMBITS: an alphabet of protein conformational ensembles**
Link: http://arxiv.org/abs/2605.13789v1
Autores: Kaiwen Shi, Carlos Oliver
Propõe tokenizer que captura conformações alternativas e movimentos correlacionados de proteínas, superando PSTs estáticos. Relevante para protein language modeling e design de drogas.

**GHGbench: A Unified Multi-Entity, Multi-Task Benchmark for Carbon Emission Prediction**
Link: http://arxiv.org/abs/2605.13743v1
Autores: Yifan Duan, Siyuan Zheng, Lihuan Li et al.
Benchmark consolidado para predição de emissões de carbono em nível de empresa e edifício (32.000+ empresas-ano). Crucial para padronização de métricas de sustentabilidade em AI.

**Toward AI-Driven Digital Twins for Metropolitan Floods: A Conditional Latent Dynamics Network Surrogate**
Link: http://arxiv.org/abs/2605.13761v1
Autores: Phillip Si, Yuan Qiu, Omar Sallam et al.
Cria surrogate de equações de água rasa para digital twins de enchentes metropolitanas, reduzindo tempo de simulação de ~55 min para segundos. Avanço significativo em hidrologia computacional.

**Interpretable Machine Learning for Antepartum Prediction of Pregnancy-Associated Thrombotic Microangiopathy**
Link: http://arxiv.org/abs/2605.13786v1
Autores: Chuanchuan Sun, Zhen Yu, Qin Fan et al.
Prediz risco de microangiopatia trombótica associada à gravidez usando dados laboratoriais longitudinais, com interpretabilidade clínica. Exemplo de AI explicável em medicina fetal.

---

### 3. Sinal de Tendência em Pesquisa

O dia revela convergência de três tendências emergentes. **Primeiro**, observamos a "agência concretizada" — sistemas que não apenas advising, mas atualizam pesos, executam tool calls, e evoluem iterativamente, sinalizando uma mudança paradigmática de LLMs como consultores para agentes autônomos com capacidade de modificação. **Segundo**, intensifica-se a preocupação com viéses fundamentais (negações, ancoragem em histórico, omnimodalidade), sugerindo que a pesquisa está amadurecendo para enfrentar limitações intrínsecas dos transformers. **Terceiro**, infraestrutura de inference torna-se disciplina própria, com trabajos em compressão de KV cache, servedisaggregado e gerenciamento de milhões de LoRAs — refletindo a industrialização da AI. Também merece nota o ressurgimento de métodos理论基础 (Hodge decomposition, PAC learning revisitado, bound complexity) aplicados a problemas modernos.

---

### 4. Vale Ler a Fundo

1. **History Anchors: How Prior Behavior Steers LLM Decisions Toward Unsafe Actions** (http://arxiv.org/abs/2605.13825v1) — Estudo de segurança fundamental para qualquer projeto envolvendo agentes que mantêm histórico de ações; levanta questões sobre confiabilidade de LLMs em loops de decisão.

2. **Topology-Preserving Neural Operator Learning via Hodge Decomposition** (http://arxiv.org/abs/2605.13834v1) — Avanço teórico elegante que conecta topologia algébrica a aprendizado de operadores neurais; leitura essencial para interessados em modelagem física baseada em dados.

3. **Negation Neglect: When models fail to learn negations in training** (http://arxiv.org/abs/2605.13829v1) — Documentação rigorosa de viés crítico em LLMs com implicações diretas para aplicações de verificação factual e sistemas de QA; curto mas denso.

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*