# Resumo diário de pesquisa em IA no ArXiv 2026-05-07

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-05-06 21:07 UTC

---

# Pesquisa em IA no ArXiv — 2026-05-07

---

## 1. Destaques do dia

O dia é marcado por três movimentos convergentes. Primeiro, observa-se uma ênfase crescente em **segurança e confiabilidade de LLMs em domínios de alto risco**: clínicos (triagem, recomendações oncológicas), jurídicos e de codificação. Papers como *EQUITRIAGE* e *Atomic Fact-Checking* demonstram que a simples precisão agregada não garante comportamento seguro, e que verificação granular de afirmações individuais é essencial para adoção real. Segundo, **sistemas multiagente em dispositivos ограниченных recursos (edge)** ganham tração, com contribuições em otimização de KV-cache quantizado (QKVShare) e orquestração de agentes plugáveis (Experience-RAG, Agent Recommendation). Terceiro, há uma clara expansão do conceito de **avaliação além da resposta final** — benchmarks como *MOSAIC-Bench* e *MCJudgeBench* passam a avaliar a cadeia de raciocínio e a conformidade com múltiplas restrições, e não apenas o resultado.

---

## 2. Artigos-chave

### 🧠 Modelos de Linguagem

**1. [Safety and accuracy follow different scaling laws in clinical large language models](http://arxiv.org/abs/2605.04039v1)**
Autores: Sebastian Wind, Tri-Thien Nguyen, Jeta Sopa et al.
Aumentar escala (parâmetros, contexto, computação) melhora a acurácia, mas não garante segurança clínica — modelos podem ser precisos em geral e still generar respostas de alto risco. Essential para quem desenha LLMs médicos.

**2. [Logical Consistency as a Bridge: Improving LLM Hallucination Detection via Label Constraint Modeling](http://arxiv.org/abs/2605.03971v1)**
Autores: Hao Mi, Qiang Sheng, Shaofei Wang et al.
Detecta alucinações modelando constraints lógicas entre a resposta do LLM e seu autojuízo verbalizado. Aborda a limitação de métodos que avaliam incerteza micro-nível isoladamente.

**3. [Feature-Augmented Transformers for Robust AI-Text Detection Across Domains and Generators](http://arxiv.org/abs/2605.03969v1)**
Autores: Mohamed Mady, Johannes Reschke, Björn Schuller
Propõe detectores baseados em transformers que mantêm robustez a distribuição shift entre domínios e geradores de texto. Treinado em HC3 PLUS com limiar calibrado por maximização de AUC.

**4. [EvoLM: Self-Evolving Language Models through Co-Evolved Discriminative Rubrics](http://arxiv.org/abs/2605.03871v1)**
Autores: Shuyue Stella Li, Rui Xin, Teng Xiao et al.
Modelos se auto-evoluem usando rubricas discriminativas co-evoluídas, dispensando supervisão externa (anotações humanas, modelos proprietários). Recurso promissor para alinhar modelos sem teto de qualidade em.annotated data.

---

### 🤖 Agentes e Raciocínio

**5. [OpenSeeker-v2: Pushing the Limits of Search Agents with Informative and High-Difficulty Trajectories](http://arxiv.org/abs/2605.04036v1)**
Autores: Yuwen Du, Rui Ye, Shuo Tang et al.
Avança capacidades de busca profunda em agentes LLM com trajetórias informativas e de alta dificuldade. Enderega o hiato entre pesquisa industrial (intensiva em recursos) e democratização de agentes de busca.

**6. [Redefining AI Red Teaming in the Agentic Era: From Weeks to Hours](http://arxiv.org/abs/2605.04019v1)**
Autores: Raja Sekhar Rao Dheekonda, Will Pearce, Nick Landers
Automatiza o red teaming adversarial para sistemas agentes, reduzindoworkflow manual de semanas para horas. Relevante para setores regulados (saúde, defesa, finanças).

**7. [Rethinking Reasoning-Intensive Retrieval: Evaluating and Advancing Retrievers in Agentic Search Systems](http://arxiv.org/abs/2605.04018v1)**
Autores: Yilun Zhao, Jinbiao Wei, Tingyu Song et al.
Mostra que retrievers precisam fornecer evidência complementar ao longo de busca iterativa e síntese, não apenas matching top-ical. Importante para pipelines de agentes de raciocínio.

**8. [An Agent-Oriented Pluggable Experience-RAG Skill for Experience-Driven Retrieval Strategy Orchestration](http://arxiv.org/abs/2605.03989v1)**
Autores: Dutao Zhang, Tian Liao
Introduz skill RAG orientado a agente que orquestra estratégias de recuperação baseadas em experiência, em vez de pipeline fixo — cobre QA factóide, raciocínio multi-salto e verificação científica.

**9. [From Intent to Execution: Composing Agentic Workflows with Agent Recommendation](http://arxiv.org/abs/2605.03986v1)**
Autores: Kishan Athrey, Ramin Pishehvar, Brian Riordan et al.
Automatiza a composição de multi-agent systems (MAS), desde intent até execução, eliminando seleção manual de agentes e criação manual de planos.

**10. [Correct Is Not Enough: Training Reasoning Planners with Executor-Grounded Rewards](http://arxiv.org/abs/2605.03862v1)**
Autores: Tianyang Han, Hengyu Shi, Junjie Hu et al.
Argui que corretude da resposta final é insuficiente para treinar raciocínio — propõe rewards fundamentados no executor (o modelo que consome o trace). Impacta RL para LLMs com rewards verificáveis.

**11. [MCJudgeBench: A Benchmark for Constraint-Level Judge Evaluation in Multi-Constraint Instruction Following](http://arxiv.org/abs/2605.03858v1)**
Autores: Jaeyun Lee, Junyoung Koh, Zeynel Tok et al.
Avalia LLMs judges no nível de cada restrição individual, não apenas na resposta agregada. Preenche lacuna crítica para sistemas que precisamsatisfazer múltiplos requisitos simultâneos.

**12. [MOSAIC-Bench: Measuring Compositional Vulnerability Induction in Coding Agents](http://arxiv.org/abs/2605.03952v1)**
Autores: Jonathan Steinberg, Oren Gal
Deteta vulnerabilidades que emergem da decomposição de tarefas em tickets de engenharia — segurança passa despercebida em prompts individuais mas se manifesta no código shipped. Paradigma essencial para coding agents.

---

### 🔧 Métodos e Frameworks

**13. [QKVShare: Quantized KV-Cache Handoff for Multi-Agent On-Device LLMs](http://arxiv.org/abs/2605.03884v1)**
Autores: Pratik Honavar, Tejpratap GVSL
Kv-cache quantizado com alocação de precisão mista em nível de token para handoff entre agentes em dispositivos edge. Resolve o trade-off entre re-prefill caro e transferência em precisão total.

**14. [PHALAR: Phasors for Learned Musical Audio Representations](http://arxiv.org/abs/2605.03929v1)**
Autores: Davide Marincione, Michele Mancusi, Giorgio Strano et al.
Representações musicais aprendidas via fasores (phases), recuperando informação temporal que métodos tradicionais descartam. Ganho de ~70% em accuracy sobre SOTA em stem retrieval.

**15. [Steer Like the LLM: Activation Steering that Mimics Prompting](http://arxiv.org/abs/2605.03907v1)**
Autores: Geert Heyman, Frederik Vandeputte
Formula prompt steering como forma de activation steering e investiga se干预 de ativações podem igualar performance de prompting. Avança o campo de steering sem retraining.

---

### 📊 Aplicações

**16. [EQUITRIAGE: A Fairness Audit of Gender Bias in LLM-Based Emergency Department Triage](http://arxiv.org/abs/2605.03998v1)**
Autores: Richard J. Young, Alice M. Matthews
Audita viés de gênero em LLMs de triagem em emergência — revela disparidades análogas às humanas e questiona aequidade de sistemas de apoio à decisão clínica.

**17. [Atomic Fact-Checking Increases Clinician Trust in Large Language Model Recommendations for Oncology Decision Support](http://arxiv.org/abs/2605.03916v1)**
Autores: Lisa C. Adams, Linus Marx, Erik Thiele Orberg et al.
Ensaio randomizado com 356 clínicos: decomposição em afirmações atômicas verificáveis aumenta confiança, superando abordagens tradicionais de explicabilidade.

**18. [SymptomAI: Towards a Conversational AI Agent for Everyday Symptom Assessment](http://arxiv.org/abs/2605.04012v1)**
Autores: Joseph Breda, Fadi Yousif, Beszel Hawkins et al.
Avalia LLMs em avaliação de sintomas cotidianos (não apenas casos complexos), revelando gaps entre performance em benchmarks curados e uso real. Direciona desenvolvimento de IA em saúde primária.

**19. [Raising the Ceiling: Better Empirical Fixation Densities for Saliency Benchmarking](http://arxiv.org/abs/2605.03885v1)**
Autores: Susmit Agrawal, Jannis Hollman, Matthias Kümmerer
Novo método para estimar densidades de fixação a partir de eye-tracking humano — diretamente impacta conclusões de benchmarks de saliência e rankings de modelos visuais.

**20. [Quantifying the human visual exposome with vision language models](http://arxiv.org/abs/2605.03863v1)**
Autores: Christian Rominger, Andreas R. Schwerdtfeger, Malay Gaherwar Singh et al.
Usa VLMs para quantificar o exposoma visual de primeira pessoa, capturando contexto visual diário — abordagem inovadora que substitui proxies geoespaciais rough e auto-relatos enviesados.

---

## 3. Sinal de tendência em pesquisa

Observa-se uma **convergência de três frontes neste lote**.

A primeira é a **avaliação granular de LLMs além da acurácia agregada**. Papers como *MCJudgeBench*, *MOSAIC-Bench* e *EQUITRIAGE* mostram que o campo reconhece: benchmarks holísticos escondem falhas específicas a restrições ou a subpopulações. Isso exige metodologias de avaliação multidimensionais, e.g., judge em nível de restrição e auditorias de viés por grupo demográfico.

A segunda frente é a **operacionalização de sistemas multiagente em produção**. Temas como handoff de KV-cache quantizado (QKVShare), orquestração plugável de retrieval (Experience-RAG) e composição automática de workflows (Agent Recommendation) indicam que o desafio mudou de "é possível?" para "como escalar?". Há uma ênfase clara em reduzir overhead computacional para viabilizar agentes em edge.

A terceira frente é a **segurança como requisito fundamental, não como afterthought**. Desde red teaming automatizado (semanas→horas) até verificação atômica de recomendações clínicas, passando por detecção de vulnerabilidades composicionais em código, a pesquisa deixa implícito que modelos "mais capazes" sem alinhamento robusto são insuficientes. O conceito de *Mechanical Conscience* (paper 49) sintetiza essa tendência: em sistemas distribuídos, decisões localmente corretas podem compor estados globalmente inaceitáveis.

---

## 4. Vale ler a fundo

**1. [MOSAIC-Bench: Measuring Compositional Vulnerability Induction in Coding Agents](http://arxiv.org/abs/2605.03952v1)** — Este é provavelmente o paper mais impactante para equipes de segurança em código gerado por IA. Demonstra estruturalmente que alinhamento de prompts individuais é insuficiente; vulnerabilidades emergem da composição — um vetor de ataque ainda não coberto por safeguards existentes. Leitura essencial para segurança de coding agents em produção.

**2. [Atomic Fact-Checking Increases Clinician Trust in LLM Recommendations for Oncology Decision Support](http://arxiv.org/abs/2605.03916v1)** — Ensaio randomizado controlado com 356 clínicos; oferece evidência empírica rara sobre *como* LLMs devem se comunicar com profissionais de saúde. A conclusão — que decomposição atômica supera explicabilidade tradicional — tem implicações diretas para design de interfaces de sistemas clínicos.

**3. [Redefining AI Red Teaming in the Agentic Era: From Weeks to Hours](http://arxiv.org/abs/2605.04019v1)** — Propõe uma mudança de paradigma em adversarial testing de agentes, passando de workflows manuais library-specific para pipelines automatizados. Dada a crescente adoção de agentes em domínios críticos, este trabalho oferece uma estrutura prática que pode se tornar referência na área.

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*