# Resumo diário de pesquisa em IA no ArXiv 2026-08-07

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-08-07 00:51 UTC

---

# Pesquisa em IA no ArXiv — 07 de agosto de 2026

---

## 1. Destaques do Dia

O dia 7 de agosto de 2026 apresenta avanços significativos em **raciocínio de longo horizonte** e **agentes autônomos**. A pesquisa em *Reasoning Core* demonstra que geradores procedimentais de problemas verificáveis podem servir como dados eficazes para fine-tuning supervisionado por completion, enquanto *Argus* propõe um runtime agentic persistente com componentes de Manager, Planner e Engineer. Observa-se também crescente interesse em **modelos multimodais unificados** — com artigos explorando desde física de pré-treinamento multimodal até adaptadores para línguas de baixo recurso como o Grego Moderno. No фронт de segurança e alinhamento, emergem métodos como *Gradient Immunity* para defesa contra fine-tuning malicioso e *Item Response Theory* para avaliação mais confiável de benchmarks de segurança.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**1. Reasoning Core: Designing Broad Procedural Data for Completion-Supervised Reasoning Training**
Link: http://arxiv.org/abs/2608.05148v1
Autores: Damien Sileo, Valentin Lacombe, Dimitri Kachler
*Contribuição:* Introduz 50 geradores procedimentais abrangendo matemática, lógica, planejamento e linguagens formais para fine-tuning supervisionado por completion — demonstrando que dados verificáveis em escala podem melhorar substancialmente o raciocínio de LLMs sem anotações manuais extensas.

---

**2. Toward Skill-Native LLMs: Skill Entropy for Benchmarking and Training Long-Horizon Reasoning**
Link: http://arxiv.org/abs/2608.05139v1
Autores: Yinghui He, Ling Yang, Jiarui Liu et al.
*Contribuição:* Propõe "skill entropy" como métrica para tarefas de raciocínio de longo horizonte que exigem alternância entre habilidades distintas — oferecendo framework para avaliar e treinar LLMs em tarefas multi-step com demandas heterogêneas.

---

**3. Teaching Nemotron Greek: Mining a Corpus, Adapting Retrieval, and Grounding Generation for Modern Greek**
Link: http://arxiv.org/abs/2608.05138v1
Autores: Ayoub Kirouane, Christos Petrocheilos
*Contribuição:* Adaptação de ponta a ponta do stack de retrieval Nemotron para Grego Moderno, preenchendo lacuna crítica para RAG em domínios jurídicos, energéticos, financeiros e médicos onde essa língua é essencial.

---

**4. The Loss Does Not See the Basis, but Adam Does**
Link: http://arxiv.org/abs/2608.05136v1
Autores: Devender Singh
*Contribuição:* Revela que gradient descent em modelos fatorados é tendencioso a soluções de baixo posto, enquanto Adam não — rastreando a diferença à simetria de gauge da função de perda e suas invariâncias, com implicações diretas para compreensão de otimização em deep learning.

---

**5. Protoreasoning in Tiny Transformers**
Link: http://arxiv.org/abs/2608.04980v1
Autores: Eduardo Valle, Fergal Reid
*Contribuição:* Demonstra que transformers com apenas ~1M de parâmetros podem se beneficiar de Chain of Thought simples ("protoreasoning"), abrindo portas para experimentação detalhada e análise de mecanismos de raciocínio step-by-step em modelos miniatura.

---

### 🤖 Agentes e Raciocínio

**6. Argus: A General-Purpose Agentic Runtime for Long-Horizon Reasoning**
Link: http://arxiv.org/abs/2608.05144v1
Autores: Boxiu Li, Zimo Wen, Yijia Fan et al.
*Contribuição:* Apresenta runtime agentic persistente com Manager, Planner, Engineer e Scientist que pode manter abordagem quando evidências sustentam e pivotar quando medições revelam falhas — marco para workflows agentic de longo horizonte.

---

**7. ABSeeker: Training Long-Horizon Search Agents via Answer-Backtracked Credit Assignment**
Link: http://arxiv.org/abs/2608.05102v1
Autores: Yijun Lu, Rui Ye, Jiajun Wang et al.
*Contribuição:* Resolve o problema de credit assignment em agentes de busca ao backtrackedear a resposta correta para alocar gradualmente recompensas aos passos que levaram a ela — superando atribuição uniforme em SFT.

---

**8. Hierarchical Graph Memory for LLM Agents with Path-level Localization and Rewrite**
Link: http://arxiv.org/abs/2608.05095v1
Autores: Xiawei Yue, Boran Wang, Xiaoqing Zhang et al.
*Contribuição:* Proposta de memória gráfica hierárquica com localização em nível de caminho e reescrita, permitindo organização estrutural para recuperação multi-hop e raciocínio em agentes de longo prazo.

---

**9. CoPlan: A Trustworthy Co-Intelligence Interface for Care Planning**
Link: http://arxiv.org/abs/2608.05107v1
Autores: Hung Truong Thanh Nguyen, Hélène Fournier, Piper Jackson et al.
*Contribuição:* Interface de co-inteligência para planejamento de cuidados com grafos argumentativos contestáveis por papéis, permitindo que stakeholders inspecionem e desafiem recomendações de IA em decisões clínicas e psicossociais.

---

**10. Capability-Gated Planning: Cost-to-Goal Discovery and the Limits of Myopic Experiment Selection**
Link: http://arxiv.org/abs/2608.05085v1
Autores: Ahmed Hassoon, Mark Dredze
*Contribuição:* Analisa limites de seleção míope de experimentos em automação de descoberta científica, demonstrando quando abordagens de maximização de information gain falham e propondo gating baseado em capacidades como alternativa.

---

### 🔧 Métodos e Frameworks

**11. OctoLong: Mid-Training On Cross-Repository Code Contexts**
Link: http://arxiv.org/abs/2608.05141v1
Autores: Indraneil Paul, Falko Helm, Goran Glavaš et al.
*Contribuição:* Explora mid-training em contextos de código cross-repositório para melhorar modelagem de long-context, addressed a limitação de corpora existentes dominados por livros e artigos acadêmicos finitos.

---

**12. MALT: Lightweight Curvature-Aware Muon via Diagonal Preconditioning**
Link: http://arxiv.org/abs/2608.05088v1
Autores: Tongle Wu, Huanyu Dong, Ying Sun et al.
*Contribuição:* Extende Muon (alternativa ao AdamW) com preconditioning diagonal que considera curvatura do loss landscape — melhorando convergência sem aumento significativo de custo computacional.

---

**13. Gradient Immunity: Null-Space Resistance to Malicious Fine-Tuning**
Link: http://arxiv.org/abs/2608.05045v1
Autores: Yuxuan Huang, Xingyu Zeng, Tianhang Zheng et al.
*Contribuição:* Proposta de defesa contra fine-tuning malicioso que explora resistência no null-space dos pesos, protegendo modelos alinhados sem depender de procedimentos adicionais no lado do usuário.

---

**14. OPD-V: Visual On-Policy Self-Distillation with Modality Balance**
Link: http://arxiv.org/abs/2608.05131v1
Autores: Aniri, Jinhe Bi, Peng Liao et al.
*Contribuição:* Aborda desequilíbrio de modalidades em self-distillation post-training para MLLMs, propondo mecanismo de balance que melhora raciocínio visual sem degradação de outras modalidades.

---

**15. Toward Physics of Multimodal Pretraining: Knowledge Flow, Modality Synergy, Early Unification**
Link: http://arxiv.org/abs/2608.05000v1
Autores: Junlin Han, Shengbang Tong, David Fan et al.
*Contribuição:* Fornece clareza empírica sobre como modalidades interagem durante treinamento multimodal unificado — explorando knowledge flow, sinergia e o papel de unificação precoce.

---

### 📊 Aplicações

**16. DASyR-LLM: Domain-Aware Symbolic Regression with LLMs for Kinetic Model Discovery**
Link: http://arxiv.org/abs/2608.05120v1
Autores: Roberto Aliaga Medina, Paulina Quintanilla, Antonio del Rio Chanona
*Contribuição:* Combina symbolic regression com LLMs aware do domínio químico para descoberta de modelos cinéticos interpretáveis — substituindo equações empíricas por expressões derivadas de dados.

---

**17. MarsCast: Transfer Learning of AI Weather Foundation Models to Planetary Atmospheres**
Link: http://arxiv.org/abs/2608.05054v1
Autores: M. L. Carroll, J. Li, S. D. Guzewich et al.
*Contribuição:* Adapta GraphCast (GNN para previsão terrestre) para atmosfera de Marte, demonstrando transferabilidade de foundation models climáticos para ambientes planetários não-terrestres.

---

**18. VQ-VAD: Vector-quantized Motion Representation Learning for Video Anomaly Detection**
Link: http://arxiv.org/abs/2608.05069v1
Autores: Narges Rashvand, Ghazal Alinezhad Noghre, Shanle Yao et al.
*Contribuição:* Representação de movimento vector-quantizada para detecção de anomalias em vídeo com abordagem pose-based que mitiga ruído visual e preocupações de privacidade em vigilância.

---

**19. Short-term Load Forecasting under EU-AI Act Requirements**
Link: http://arxiv.org/abs/2608.05018v1
Autores: Thomas Bartz-Beielstein
*Contribuição:* Challenge live de 41 dias para STLF em rede elétrica alemã sob requisitos do EU AI Act, demonstrando que determinismo, reprodutibilidade e auditabilidade são requisitos工程 obrigatórios em ambientes safety-critical.

---

**20. RepairFormer: Automated Repair of Structured Inputs Using Transformers**
Link: http://arxiv.org/abs/2608.05060v1
Autores: Ovi Paul, Tom J King, Ali Shokri
*Contribuição:* Transformer para reparo automático de arquivos estruturados corrompidos (JSON, DOT, OBJ) que permite que parsers processem dados parcialmente corrompidos sem rejeitar informação útil.

---

## 3. Sinal de Tendência em Pesquisa

Observa-se nesta leva uma **convergência entre agentes autônomos e sistemas de memória estruturada**. Enquanto *Argus* propõe um runtime completo para raciocínio de longo horizonte, *Hierarchical Graph Memory* endereça a necessidade de memória atualizável com fatos e feedback externo — indicando que a comunidade reconhece que agentes eficazes requerem tanto *persistence* quanto *organização estrutural* de estado.

Outra tendência emergente é a **avaliação rigorosa de LLMs além de benchmarks agregados**. *Item Response Theory* e *Provable Limits* sugerem que métricas simples como average score são insuficientes para segurança e confiabilidade, impulsionando métodos psicométricos e frameworks de deferral certificado.

Finalmente, há interesse crescente em **defesas contra manipulação de modelos alinhados** (*Gradient Immunity*) e **adaptação de foundation models para domínios específicos** (Grego Moderno, Marte, circuitos analógicos), indicando maturação do campo em direção a deployments pragmáticos.

---

## 4. Vale Ler a Fundo

1. **Argus: A General-Purpose Agentic Runtime for Long-Horizon Reasoning**
   http://arxiv.org/abs/2608.05144v1
   *Leitura essencial para quem trabalha com agentes — estabelece arquitetura de runtime persistente com componentes especializados (Manager, Planner, Engineer) que pode informar o design de sistemas agentic de próxima geração.*

2. **The Loss Does Not See the Basis, but Adam Does**
   http://arxiv.org/abs/2608.05136v1
   *Contribuição teórica fundamental sobre viés implícito de otimizadores em modelos fatorados — leitura obrigatória para pesquisadores em otimização e teoria de deep learning.*

3. **Gradient Immunity: Null-Space Resistance to Malicious Fine-Tuning**
   http://arxiv.org/abs/2608.05045v1
   *Abordagem inovadora para segurança de LLMs que não depende de procedimentos adicionais no lado do usuário — leitura prioritária para a comunidade de alinhamento e safety.*

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*