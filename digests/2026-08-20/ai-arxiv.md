# Resumo diário de pesquisa em IA no ArXiv 2026-08-20

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-08-19 20:20 UTC

---

## 1. Destaques do dia  

Os artigos de 20‑08‑2026 confirmam três eixos principais: **(i)** o refinamento contínuo de Large Language Models (LLMs) através de avaliações rigorosas de tokenizers, métricas de raciocínio e estratégias de inferência; **(ii)** a consolidação de agentes autônomos que planificam, adaptam‑se e explicam decisões em domínios críticos (radiologia, finanças, segurança de voo); **(iii)** o aparecimento de novas bases de dados e benchmarks bilingues/multimodais que avaliam capacidades de raciocínio em documentos profissionais densos. Simultaneamente, observa‑se crescente interesse em métodos de采样 otimizados por Bayesian‑Optimization, compressão dinâmica em redes recorrentes e frameworks neurosemióticos para transferência zero‑shot de tarefas.

---

## 2. Artigos‑chave  

### 🧠 Modelos de linguagem  

1. **TokEval: A Tokenizer Evaluation Suite**  
   http://arxiv.org/abs/2608.18062v1  
   *Autores:* Clara Meister et al.  
   *Contribuição:* Propõe uma suite abrangente para avaliar tokenizers, demonstrando como escolhas de segmentação impactam downstream performance em modelos de linguagem.  

2. **Language Has Two Parameters: Narrative‑Induced Semantic Plasticity and Phase‑Sensitive Interpretation**  
   http://arxiv.org/abs/2608.18041v1  
   *Autores:* Hollis Robbins  
   *Contribuição:* Introduz um segundo parâmetro semântico (“fase”) além da amplitude, revelando como narrativas alteram a plasticidade interpretativa dos embeddings.  

3. **Chain‑of‑Experience for Continual LLM Improvement**  
   http://arxiv.org/abs/2608.18027v1  
   *Autores:* Haoqin Tu, Yunhao Fang, Yizhong Wang et al.  
   *Contribuição:* Estuda como LLMs podem aprender iterativamente a partir de interações em tempo de teste, propondo o paradigma “Chain‑of‑Experience”.  

4. **Why GPT‑Style Models Do Not Directly Transfer to Symbolic Music: Compression in the Wrong Coordinate System**  
   http://arxiv.org/abs/2608.18025v1  
   *Autores:* Yi Wang  
   *Contribuição:* Analisa as limitações de tokenizações musicais que replicam vocabulários linguísticos, identificando compressões inadequadas que degradam a geração simbólica.  

5. **Recirculation**  
   http://arxiv.org/abs/2608.17981v1  
   *Autores:* Michael C. Mozer, Shoaib Ahmed Siddiqui, Danny Sawyer et al.  
   *Contribuição:* Apresenta um aprimoramento arquitetural em tempo de inferência que reduz perplexidade e melhora acurácia sem aumento de latência perceptível.  

### 🤖 Agentes e raciocínio  

6. **On the Fragility of Self‑Improving Agents: Variance, Task Order, and Underspecification**  
   http://arxiv.org/abs/2608.18066v1  
   *Autores:* Qinyuan Ye, Yu Li, Yada Pruksachatkun et al.  
   *Contribuição:* Avalia a confiabilidade de agentes que mantêm memória textual e aprendem online, revelando vulnerabilidades a variações de tarefa e ordem de apresentação.  

7. **StagedWorkspace: A Versioned Workspace for Knowledge‑Work Agents**  
   http://arxiv.org/abs/2608.18050v1  
   *Autores:* Yining Hua, Hongbin Na, Yifan Zhou et al.  
   *Contribuição:* Oferece um ambiente versionado que permite a agentes de trabalho do conhecimento editar, revisar e submeter artefatos digitais de forma rastreável.  

8. **Delegation Asymmetry in Agentic Recommender Systems: Measuring Two‑Sided Receptivity in Online Dating**  
   http://arxiv.org/abs/2608.18058v1  
   *Autores:* Daria Leshchikova, Valentina V. Kuskova, Dmitry Zaytsev et al.  
   *Contribuição:* Investiga como usuários aceitam tanto delegar conversas a agentes quanto receber comunicações mediadas por eles em plataformas de namoro.  

9. **EvoTS‑Agent: A Self‑Evolving LLM Agent for Financial Time Series Change Point Detection**  
   http://arxiv.org/abs/2608.17933v1  
   *Autores:* Lei Jiang, Ye Wei, Xinyu Xi et al.  
   *Contribuição:* Proposta de agente LLM capaz de se auto‑evoluir para detectar pontos de mudança em séries temporais financeiras de forma não supervisionada.  

### 🔧 Métodos e frameworks  

10. **Optimize Your Sampling: Tuned Diffusion Sampling with Bayesian Optimization**  
    http://arxiv.org/abs/2608.18040v1  
    *Autores:* Travis Zhang, Christian Belardi, Justin Lovelace et al.  
    *Contribuição:* Aplica otimização bayesiana para selecionar passos de amostragem em modelos de difusão, reduzindo o número de forward passes sem perda de qualidade.  

11. **SIGMA: SHAP‑Guided Implicit‑Trajectory Generation for Metadata‑Free LLM‑Based AutoFE**  
    http://arxiv.org/abs/2608.17948v1  
    *Autores:* Xuan Zheng, Kento Uchida, Shinichi Shirakawa  
    *Contribuição:* Integra valores SHAP para guiar trajetórias de geração de features, permitindo engenharia automática de atributos sem necessidade de metadados externos.  

12. **CABLE: Extending the Reach of Memory Retrieval via Complementary Antecedent‑Based Linking and Expansion**  
    http://arxiv.org/abs/2608.17911v1  
    *Autores:* Zheling Tan, Jin Gao, Dequan Wang  
    *Contribuição:* Propõe um mecanismo de linkagem antecendente que amplia a recuperabilidade de evidências em memórias conversacionais de longo prazo.  

### 📊 Aplicações  

13. **Multi‑Agent AI System for Radiology Report Structuring and Quality Assurance**  
    http://arxiv.org/abs/2608.18072v1  
    *Autores:* Iryna Hartsock, Cesar Lam, Christopher Otteni et al.  
    *Contribuição:* Demonstra um sistema multi‑agente local para organizar e verificar relatórios de radiologia, com avaliação independente por radiologistas.  

14. **Where A Small Language Model Helps in Invoice Categorisation, Understood Through Embedding Geometry**  
    http://arxiv.org/abs/2608.18033v1  
    *Autores:* Emma Ceccherini, Daniel Lawson, Anjulika Salhan  
    *Contribuição:* Analisa como modelos compactos podem categorizar faturas em códigos contábeis, revelando padrões geométricos nos embeddings que explicam seu desempenho.  

15. **AppendiGrade: An XAI‑Enhanced Deep Learning Framework for Grading Appendicitis in Ultrasound with Gaussian Blur and Grad‑CAM**  
    http://arxiv.org/abs/2608.17923v1  
    *Autores:* Fahad Ahammed, Omar Faruq Shikdar, Navid Zaman et al.  
    *Contribuição:* Combina desbloqueio de imagem por Gaussian blur com explicabilidade via Grad‑CAM para classificar apendicite em exames de ultrassom.  

---

## 3. Sinal de tendência em pesquisa (100‑200 palavras)

Os artigos de hoje evidenciam três direções emergentes:

1. **Agentes com auto‑aperfeiçoamento e confiabilidade** – O trabalho sobre a fragilidade de agentes auto‑melhoráveis e sobre delegação assimétrica em sistemas de recomendação mostra que a comunidade começa a tratar a **fiabilidade e a aceitação social** de agentes autônomos como problemas centrais, não apenas de desempenho.

2. **Avaliação e benchmarks rigorosos para LLMs** – Com o *TokEval*, o *BEAR‑Bench* (não incluído na seleção, mas presente no conjunto) e estudos sobre a fase semântica, verifica‑se uma push para **metodologias de avaliação granulares**, especialmente para tokenização, raciocínio linguístico e compreensão de documentos profissionais bilingues.

3. **Integração de conhecimento de domínio com modelos generativos** – Aplicações em radiology, finanças, segurança de voo e categorização de faturas demonstram que **modelos menores e específicos podem superar LLMs genéricos** quando combinados com conhecimento estruturado e mecanismos de explicabilidade (SHAP, Grad‑CAM, etc.).

Essas tendências apontam para um

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*