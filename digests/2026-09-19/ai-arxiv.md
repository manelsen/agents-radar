# Resumo diário de pesquisa em IA no ArXiv 2026-09-19

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-09-18 22:11 UTC

---

# Pesquisa em IA — ArXiv Highlights
## 19 de setembro de 2026 | cs.AI, cs.CL, cs.LG

---

## 1. Destaques do Dia

A produção de 19 de setembro revela avanços significativos em três frentes principais. **Primeiro**, surge uma onda de estudos focados em **segurança e avaliação de agentes de código**, com novos harnesses obstáculos-aware e métricas para quantificar superestimação de capacidades por LLMs frontier. **Segundo**, observamos amadurecimento dos **modelos de mundo (world models)** com o JEPA-Anything propondo uma arquitetura domínio-agnóstica para predição跨 diferentes domínios. **Terceiro**, a pesquisa em **políticas Visão-Linguagem-Ação (VLA)** avança com action chunking adaptativo e fine-tuning com professor sem renderização para condução autônoma. Adicionalmente, llama-se atenção para o crescimento de estudos sobre **viés de sumarização em LLMs** e a aplicação de LLMs como falsificadores de sistemas cyber-físicos.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**1. Embedding Models Measure in Peculiar Ways**
- Autores: Juri Opitz, Andrianos Michail
- Estuda se espaços de embedding refletem grandezas físicas (massa, distância, tempo). Descoberta: modelos capturam apenas fracamente medrições objetivas. Relevante para quem trabalha com avaliação semântica de embeddings.
- 🔗 http://arxiv.org/abs/2609.20821v1

**2. dQwen3.5: Hybrid-Attention Diffusion Language Models**
- Autores: Anton Xue, Litu Rout, Aditya Akella et al.
- Propõe adaptar modelos autorregressivos com camadas RNN/hybrid-attention para difusão de linguagem. Abre caminho para modelos difusão mais eficientes sem transformers full-attention.
- 🔗 http://arxiv.org/abs/2609.20751v1

**3. On-Demand Attention: Language Models Know When to Recall**
- Autores: Haibo Feng, Ruiqi Liang, Hanyang Peng et al.
- Demonstra que estados de decodificação já contêm informação preditiva sobre necessidade de recall, permitindo atenção seletiva em contextos longos. Potencial para inferência eficiente.
- 🔗 http://arxiv.org/abs/2609.20734v1

**4. Summarization Bias: The Directional Collapse of Objective Projection into Told-Mode Labels**
- Autores: Levent Bulut
- Propõe e operacionaliza viés de sumarização: tendência de LLMs representar significado narrativo como rótulo abstrato em vez de estrutura inferencial reconstruível. Framework conceitual valioso para pesquisa em alinhamento.
- 🔗 http://arxiv.org/abs/2609.20712v1

**5. HerHealthEval: Evaluating Multilingual and Register-Sensitive Understanding of Women's Health Communication**
- Autores: Hassan Saeed Hassan Albattra, Mazen Mohammed Bahgat et al.
- Introduce framework controlado para avaliar compreensão multilíngue de saúde da mulher. Preenche lacuna em avaliações de LLMs para domínios especializados.
- 🔗 http://arxiv.org/abs/2609.20684v1

---

### 🤖 Agentes e Raciocínio

**6. Coding Agents with an Obstacle-Aware Harness for Safe Robot Manipulation**
- Autores: Bingxin Xu, Yuzhang Shang, Zhen Dong et al.
- Primeiro estudo sistemático sobre segurança de agentes de código em robótica. Avalia que paradigma coding-agent também é seguro, não apenas capaz.
- 🔗 http://arxiv.org/abs/2609.20822v1

**7. Quantifying Overclaiming Propensity in Frontier LLM Agents**
- Autores: Nolan Smyth, Yorguin-Jose Mantilla-Ramos et al.
- Métrica quantitativa para propensão de agentes de código emsuperestimar conclusão de tarefas. Essencial para deployments autônomos longos.
- 🔗 http://arxiv.org/abs/2609.20812v1

**8. RAFT: A Stateful Retrieval-Augmented Framework for Troubleshooting Agents**
- Autores: Mingxuan Zhang, Xiaowen Wang, Anupma Sharan et al.
- RAG stateful para suporte ao cliente, tratando casos como processos multi-estágio ao invés de documentos estáticos.
- 🔗 http://arxiv.org/abs/2609.20754v1

**9. Large Language Models as Falsifiers for Cyber-Physical Systems**
- Autores: Ali ArjomandBigdeli, Jiawei Zhou, Stanley Bak et al.
- LLMs como search algorithms para falsificação de especificações STL em sistemas cyber-físicos. Abordagem híbrida black-box/white-box.
- 🔗 http://arxiv.org/abs/2609.20752v1

**10. Don't Mask the Environment: Observation Supervision Changes How Agents Explore Under RL**
- Autores: Juzheng Zhang, Disha Makhija, Manoj Ghuhan Arivazhagan et al.
- Questiona convenção de SFT usando apenas tokens de ação como alvo. Propõe supervisão também em observações para melhor exploração.
- 🔗 http://arxiv.org/abs/2609.20715v1

**11. Deep Noir: Autonomous Steering Discovery via Architectural Chronometry**
- Autores: Frank E. Bobe, Gregory D. Vetaw, Darshan W. Bryner et al.
- Framework para descobrir automaticamente parâmetros de steering em LLMs usando Logit Lens e causal head attribution.
- 🔗 http://arxiv.org/abs/2609.20722v1

---

### 🔧 Métodos e Frameworks

**12. JEPA-Anything: Learning Predictive Models across Different Worlds**
- Autores: Taoyong Cui, Zhongyao Wang, Xinyue Xu et al.
- Princípio de aprendizado comum para world modeling跨 domínios radicalmente diferentes. Avanço em direção a modelos preditivos gerais.
- 🔗 http://arxiv.org/abs/2609.20800v1

**13. RetireOPD: Self-Retiring On-Policy Distillation for Agentic RL**
- Autores: Yan Yu, Zhengxi Lu, Yizhou Liu et al.
- Resolve problema de reward esparso em agentes multi-turn com OPD usando teacher privilegiado e student skill-free.
- 🔗 http://arxiv.org/abs/2609.20784v1

**14. Score Centering Stabilizes Off-policy Reinforcement Learning**
- Autores: Martin Marek, Max Ryabinin
- Aborda training-inference mismatch em RL de LLMs com centering de scores. Estabiliza RL mesmo com eliminação incompleta de TIM.
- 🔗 http://arxiv.org/abs/2609.20807v1

**15. PosteriorBench: From Point Estimates to Posterior Matching**
- Autores: Jiachen Yao, Zi-Siang Hsu, Xi Deng et al.
- Propõe avaliação de modelos generativos para problemas inversos que vá além de reconstruções point estimates, capturando múltiplas soluções válidas.
- 🔗 http://arxiv.org/abs/2609.20794v1

---

### 📊 Aplicações

**16. Paint-Anything: Unified Any-Color Control for Image Generation and Editing**
- Autores: Ji Xie, Dewei Zhou, Xinyu Huang et al.
- Controle de cor any-24-bit-hex para geração e edição de imagens sem representações ou inferências especializadas.
- 🔗 http://arxiv.org/abs/2609.20816v1

**17. OPTED: On-Policy Fine-Tuning for End-to-End Driving using a Render-Free Teacher**
- Autores: Damiano Da Col, Maximilian Igl, Peter Karkus et al.
- Resolve compounding errors em políticas de condução end-to-end usando teacher sem renderização para SFT/RL pós-pretraining.
- 🔗 http://arxiv.org/abs/2609.20756v1

**18. Agile-WAM: An Agile Tactile World Action Model for Contact-Rich Robot Control**
- Autores: Hanchu Zhou, Brendan Lynch, Raman Goyal et al.
- WAM tátil com backbone generativo pré-treinado para predição conjunta de estados futuros e ações em controle de contato.
- 🔗 http://arxiv.org/abs/2609.20761v1

**19. FL-Net: Multi-center Medical Data Mining with Federated Learning**
- Autores: Simon Süwer, Julian Klemm, Elisa Acitelli et al.
- Análise de 14 frameworks FL com 5 requisitos; apresenta FL-Net como solução completa para aprendizado federado médico.
- 🔗 http://arxiv.org/abs/2609.20650v1

**20. Inference-Engine Fingerprinting Attacks are Practical**
- Autores: Sarah Radway, Andrew Cheng, Vijay Janapa Reddi et al.
- Demonstra viabilidade de ataques de fingerprinting em inference engines de modelos frontier, com implicações para sandboxing.
- 🔗 http://arxiv.org/abs/2609.20614v1

---

## 3. Sinal de Tendência em Pesquisa

O dia de hoje evidencia **três direções emergentes**:

**A. Agentes de código e segurança robotics**: O trabalho de Xu et al. marca uma guinada importante ao perguntar, pela primeira vez sistematicamente, se o paradigma de coding agents para robótica é não apenas capaz, mas seguro. Paralelamente, a quantificação de overclaiming por Smyth et al. indica maturidade na avaliação de comportamentos potencialmente enganosos de agentes.

**B. Generalização de world models**: O JEPA-Anything representa um passo em direção a modelos preditivos универсальных, abandonando a especialização domínio-específica. Esta linha pode simplificar significativamente o desenvolvimento de agentes autônomos.

**C. Avaliação além de benchmarks**: Papers como PosteriorBench e HerHealthEval demonstram insatisfação crescente com métricas agregadas, empurrando a comunidade para avaliações que capturem incerteza, distributional shift e capacidades específicas de domínio.

---

## 4. Vale Ler a Fundo

| # | Artigo | Por que ler |
|---|--------|-------------|
| 1 | **Coding Agents with an Obstacle-Aware Harness** (2609.20822) | Primeiro estudo de segurança em coding agents robóticos; estabelece metodologia para avaliação de harnesses. |
| 2 | **JEPA-Anything** (2609.20800) | Propõe framework универсальный para world modeling; leitura essencial para entender próxima geração de modelos preditivos. |
| 3 | **Deep Noir** (2609.20722) | Demonstra descoberta automática de steering parameters; impacto direto em interpretabilidade e control de LLMs. |

---

*Total: 50 artigos processados de cs.AI, cs.CL, cs.LG em 2026-09-19*

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*