# Resumo diário de pesquisa em IA no ArXiv 2026-05-21

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-05-20 21:48 UTC

---

# Resumo de Pesquisa em IA — ArXiv (21 de maio de 2026)

---

## 1. Destaques do Dia

O dia foi marcado por avanços significativos em **agentes de IA para.domínios de alto risco**, com novos trabalhos em raciocínio clínico automatizado, interpretação médica e sistemas de controle wireless. Observa-se uma tendência clara em **métodos de inferência eficiente**, incluindo abordagens de decoding especulativo e offloading para modelos de difusão e mixture-of-experts. O campo de **representações temporais e espaço-temporais** ganhou impulso com novos foundation models para forecasting e tokenização adaptativa de trajetórias. Também se destaca o interesse crescente em **segurança e alinhamento**, com trabalhos sobre rubricas políticas para RLVR, calibração de risco em RAG cascata e ataques de envenenamento de recompensa em sistemas de controle.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**5. [TIDE: Efficient and Lossless MoE Diffusion LLM Inference with I/O-aware Expert Offload](http://arxiv.org/abs/2605.20179v1)**
Autores: Zhiben Chen, Youpeng Zhao, Yang Sui et al.
*Abordagem de offloading consciente de I/O para inferência eficiente de modelos de difusão com mixture-of-experts, eliminando perda de qualidade.*
🔗 http://arxiv.org/abs/2605.20179v1

**8. [KoRe: Compact Knowledge Representations for Large Language Models](http://arxiv.org/abs/2605.20170v1)**
Autores: Davide Cavicchini, Fausto Giunchiglia, Jacopo Staiano
*Propõe representações de conhecimento compactas para corrigir falhas inerentes na codificação de world-knowledge em LLMs.*
🔗 http://arxiv.org/abs/2605.20170v1

**19. [MixRea: Benchmarking Explicit-Implicit Reasoning in Large Language Models](http://arxiv.org/abs/2605.20128v1)**
Autores: Yuanqing Cai, Ziyi Huang, Minhao Liu et al.
*Benchmark que investiga se LLMs sofrem de "inattentional blindness" análoga à cognição humana.*
🔗 http://arxiv.org/abs/2605.20128v1

**30. [ThoughtTrace: Understanding User Thoughts in Real-World LLM Interactions](http://arxiv.org/abs/2605.20087v1)**
Autores: Chuanyang Jin, Binze Li, Haopeng Xie et al.
*Primeiro dataset em larga escala que conecta conversas humano-IA com pensamentos auto-reportados dos usuários.*
🔗 http://arxiv.org/abs/2605.20087v1

---

### 🤖 Agentes e Raciocínio

**3. [From Seeing to Thinking: Decoupling Perception and Reasoning Improves Post-Training of Vision-Language Models](http://arxiv.org/abs/2605.20177v1)**
Autores: Juncheng Wu, Hardy Chen, Haoqin Tu et al.
*Demonstra que limitações de VLMs em tarefas visuais são primariamente perceptuais, não de raciocínio.*
🔗 http://arxiv.org/abs/2605.20177v1

**4. [ClinSeekAgent: Automating Multimodal Evidence Seeking for Agentic Clinical Reasoning](http://arxiv.org/abs/2605.20176v1)**
Autores: Juncheng Wu, Letian Zhang, Yuhan Wang et al.
*Sistema agentic que busca ativamente, planeja iterativamente e sintetiza evidências para raciocínio clínico.*
🔗 http://arxiv.org/abs/2605.20176v1

**6. [A Methodology for Selecting and Composing Runtime Architecture Patterns for Production LLM Agents](http://arxiv.org/abs/2605.20173v1)**
Autores: Vasundra Srinivasan
*Introduz o conceito de "stochastic-deterministic boundary" como objeto arquitetural de primeira classe.*
🔗 http://arxiv.org/abs/2605.20173v1

**35. [CopT: Contrastive On-Policy Thinking with Continuous Spaces for General and Agentic Reasoning](http://arxiv.org/abs/2605.20128v1)** *(Nota: parece haver erro no ID original)*
Autores: Dachuan Shi, Hanlin Zhu, Xiangchi Yuan et al.
*Melhora eficiência de tokens em CoT tratando pensamento como processo contínuo.*
🔗 http://arxiv.org/abs/2605.20075v1

**41. [Rewarding Beliefs, Not Actions: Consistency-Guided Credit Assignment for Long-Horizon Agents](http://arxiv.org/abs/2605.20061v1)**
Autores: Wenjie Tang, Minne Li, Sijie Huang et al.
*Abordagem de credit assignment que considera beliefs do agente em ambientes parcialmente observáveis.*
🔗 http://arxiv.org/abs/2605.20061v1

---

### 🔧 Métodos e Frameworks

**23. [Toto 2.0: Time Series Forecasting Enters the Scaling Era](http://arxiv.org/abs/2605.20119v1)**
Autores: Emaad Khwaja, Chris Lettieri, Gerald Woo et al.
*Foundation models para séries temporais que escalam de 4M a 2.5B parâmetros com melhorias consistentes.*
🔗 http://arxiv.org/abs/2605.20119v1

**27. [Draft Less, Retrieve More: Hybrid Tree Construction for Speculative Decoding](http://arxiv.org/abs/2605.20104v1)**
Autores: Yuhao Shen, Tianyu Liu, Xinyi Hu et al.
*Otimização de decoding especulativo com árvores de draft que maximizam taxa de aceitação.*
🔗 http://arxiv.org/abs/2605.20104v1

**32. [BalanceRAG: Joint Risk Calibration for Cascaded Retrieval-Augmented Generation](http://arxiv.org/abs/2605.20084v1)**
Autores: Zijun Jia, Yuanchang Ye, Sen Jia et al.
*Calibração de risco conjunto para decidir quando usar RAG versus resposta direta.*
🔗 http://arxiv.org/abs/2605.20084v1

**17. [TrajTok: Adaptive Spatial Tokenization for Trajectory Representation Learning](http://arxiv.org/abs/2605.20134v1)**
Autores: Zhen Xiong, Shang-Ling Hsu, Cyrus Shahabi
*Tokenização espacial adaptativa que resolve trade-off entre granularidade e qualidade de embeddings.*
🔗 http://arxiv.org/abs/2605.20134v1

---

### 📊 Aplicações

**1. [Atoms of Thought: Universal EEG Representation Learning with Microstates](http://arxiv.org/abs/2605.20182v1)**
Autores: Xinyang Tian, Ruitao Liu, Ziyi Ye et al.
*Representações universais de EEG via microestados, avanço para neuroinformática e BCIs.*
🔗 http://arxiv.org/abs/2605.20182v1

**11. [Interpretable Computer Vision for Defect Detection in X-ray Tomography of Aerospace SiC/SiC Composites](http://arxiv.org/abs/2605.20159v1)**
Autores: Antonio Peña Corredor, Julien Lesseur, Romain Nunez et al.
*Automação de detecção de defeitos com modelos interpretáveis para inspeção não-destrutiva.*
🔗 http://arxiv.org/abs/2605.20159v1

**12. [Rethinking Visual Attribution for Chest X-ray Reasoning in Large Vision Language Models](http://arxiv.org/abs/2605.20158v1)**
Autores: Guangzhi Xiong, Qiao Jin, Sanchit Sinha et al.
*Questiona se métodos de attribution visual explicam corretamente respostas de LVLMs em radiologia.*
🔗 http://arxiv.org/abs/2605.20158v1

**13. [SAGE: Scalable Automatic Gating Ensemble for Confident Negative Harvesting in Fraud Detection](http://arxiv.org/abs/2605.20157v1)**
Autores: Sudheer Tubati, Amit Goyal
*Ensemble automático para detecção de fraude em streaming de música com manejo de exemplos negativos.*
🔗 http://arxiv.org/abs/2605.20157v1

**9. [HaorFloodAlert: Deseasonalized ML Ensemble for 72-Hour Flood Prediction in Bangladesh Haor Wetlands](http://arxiv.org/abs/2605.20167v1)**
Autores: Salma Hoque Talukdar Koli, Fahima Haque Talukder Jely, Md. Samiul Alim et al.
*Sistema de previsão de cheias abruptas específico para dinâmica de backwater em zonas úmidas.*
🔗 http://arxiv.org/abs/2605.20167v1

---

## 3. Sinal de Tendência em Pesquisa

**Agentes clínicos e de alto risco dominam.** Observa-se shift significativo de modelos de linguagem gerais para sistemas agentic especializados em domínios críticos — raciocínio clínico automatizado, interpretabilidade em diagnóstico por imagem, e segurança em sistemas de controle wireless. O paradigma de "buscar evidências ativamente"取代 a abordagem passiva de fornecer dados pré-curados.

**Eficiência de inferência como preocupação primária.** Com modelos de difusão e MoE escalando, técnicas de offloading, decoding especulativo com árvores híbridas e RAG cascata com calibração de risco emergem como áreas quentes. A questão não é apenas precisão, mas quando e como gastar recursos computacionais.

**Representações temporais ganham foundation models.** Toto 2.0 demonstra que forecasting segue o caminho de language models, sugerindo que outras modalidades (trajetórias, séries temporais multivariadas) seguirão padrão similar.

**Alinhamento e segurança em时俱进.** Rubricas políticas para RLVR, credit assignment baseado em beliefs, e ataques adversarial a sistemas de aprendizado por reforço indicam amadurecimento do campo de alinhamento além de RLHF clássico.

---

## 4. Vale Ler a Fundo

### 1. [ClinSeekAgent: Automating Multimodal Evidence Seeking for Agentic Clinical Reasoning](http://arxiv.org/abs/2605.20176v1)
Este trabalho aborda uma lacuna crítica em sistemas clínicos reais: a suposição de que evidências já estão curadas. A abordagem agentic de busca iterativa representa um passo importante rumo a sistemas que operam em workflows clínicos autênticos.

### 2. [Toto 2.0: Time Series Forecasting Enters the Scaling Era](http://arxiv.org/abs/2605.20119v1)
Primeira demonstração convincente de scaling laws para forecasting, com releases de modelos de 4M a 2.5B parâmetros. Marca transição de abordagens task-specific para foundation models em séries temporais.

### 3. [From Seeing to Thinking: Decoupling Perception and Reasoning Improves Post-Training of Vision-Language Models](http://arxiv.org/abs/2605.20177v1)
Insight fundamental: limitações de VLMs são majoritariamente perceptuais. A separação sistemática de percepção e raciocínio abre caminho para melhorias targeted em vez de fine-tuning genérico.

---

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*