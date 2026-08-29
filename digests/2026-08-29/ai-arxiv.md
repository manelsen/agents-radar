# Resumo diário de pesquisa em IA no ArXiv 2026-08-29

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-08-29 02:39 UTC

---

# Resumo de Pesquisa em IA — ArXiv (2026-08-29)

## 1. Destaques do Dia

O dia foi marcado por avanços significativos em **inferência e raciocínio de LLMs**, com métodos de escalonamento em tempo de inferência (CritICL, TTPO) e otimização de políticas em tempo de teste se consolidando como paradigmas promissors. A **evolução de habilidades de agentes** emergiu como tema quente, com trabalhos como WikiSkill e RedEvoAgent demonstrando como experiências passadas podem ser reutilizadas de forma persistente. No campo de **segurança e alinhamento**,观察到 múltiplos artigos abordando detecção de desalinhamento agentivo, red-teaming automático e auditoria de modelos clínicos. A **geração de dados para agentes** (ACE Lens) e a separação entre persona e execução em sistemas governados representam inovações arquiteturais relevantes para implantação industrial.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**14. Consolidating RLVR Capabilities Across Domains: A Deep Dive into Fusion Paradigms**
Link: http://arxiv.org/abs/2608.27409v1
Autores: Siye Wu, Kai Yang, Yuchen Cai et al.
*Analisa três paradigmas de fusão para consolidar capacidades de RLVR (Reinforcement Learning with Verifiable Rewards) de múltiplos domínios, reutilizando artefatos de treinamento entre especialistas. Essencial para quem busca eficiência em treinamento multi-tarefa.*

**15. CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators**
Link: http://arxiv.org/abs/2608.27406v1
Autores: Kechen Liu, Ola Shorinwa
*Apresenta framework para criar world models de vídeo que transferem física entre diferentes embodimentos robóticos, usando dados heterogêneos de vídeo. Avanço importante para simulação física zero-shot.*

**16. How Language Models Organize and Structure Moral Knowledge**
Link: http://arxiv.org/abs/2608.27402v1
Autores: Orion Reblitz-Richardson
*Investiga como LLMs organizam geometricamente conhecimento moral e distinguem fundamentos morais entre si. Relevante para alinhamento e compreensão de valores em IA.*

**25. Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090**
Link: http://arxiv.org/abs/2608.27370v1
Autores: Kairong Luo, Jiarui Cui, Yaorui Yin et al.
*Demonstra treinamento de modelo de linguagem de 1.5B parâmetros dentro de orçamento limitado ($5090), com hardware acessível (RTX 5090). Impulsiona democratização de pesquisa em LLMs.*

**32. Understanding Evolution Strategies for LLM Reasoning: Broader Reasoning Coverage than GRPO**
Link: http://arxiv.org/abs/2608.27351v1
Autores: Yunpeng Ba, Zhi Zheng, Yue Xie et al.
*Estuda estratégias evolutivas como alternativa ao GRPO para raciocínio em LLMs, demonstrando cobertura de raciocínio mais ampla. Desafia métodos convencionais de post-training.*

---

### 🤖 Agentes e Raciocínio

**1. CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes**
Link: http://arxiv.org/abs/2608.27455v1
Autores: Yufan Wu, Yinghui He, Zhengyi Hu et al.
*Introduz framework de inferência que usa modos de falha de LLMs pequenos para melhorar grandes, sem geração repetida ou verificação externa. Avanço significativo em escalonamento em tempo de inferência.*

**2. WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution**
Link: http://arxiv.org/abs/2608.27454v1
Autores: Liyan Tang, Cyrus Rashtchian, Chun-Sung Ferng et al.
*Propõe compilação de experiência de agentes em conhecimento persistente para evolução de habilidades. Supera limitações de extrair insights apenas de trajectories diretas.*

**6. RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution**
Link: http://arxiv.org/abs/2608.27439v1
Autores: Junjie Zhang, Hui Liu, Kecheng Chen et al.
*Agente de red-teaming automático que evolui habilidades através de experiências passadas, abordando jailbreaks em LLMs em execução. Crucial para segurança de agentes em produção.*

**33. INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment**
Link: http://arxiv.org/abs/2608.27348v1
Autores: Yutong Zhang, Jianshuo Dong, Peng Xu et al.
*Método para detectar desalinhamento agentivo através de monitoramento de chain-of-thought, identificando ações prejudiciais sob conflitos de objetivos. Ferramenta importante para safety em agentes autônomos.*

**50. What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents**
Link: http://arxiv.org/abs/2608.27260v1
Autores: Xingshan Zeng, Zishan Xu, Boju Zhang et al.
*Análise profunda sobre características de dados agentivos eficazes, enfatizando consistência entre ambiente, tarefa e sinais de sucesso. Guia essencial para geração de dados de treinamento.*

---

### 🔧 Métodos e Frameworks

**4. TTPO: Test-Time Policy Optimization**
Link: http://arxiv.org/abs/2608.27448v1
Autores: Aozhe Wang, Zhengxi Lu, Jianze Wang et al.
*Substitui ground-truth por modelos de verifier para treinamento em tempo de teste, avançando raciocínio matemático sem dependência de rótulos externos.*

**9. Persona-Execution Separation: An Architecture Pattern for Evolving LLM Agents under Execution Audit**
Link: http://arxiv.org/abs/2608.27427v1
Autores: Yisen Xi
*Proposta de arquitetura que separa persona (evolução livre) de execução (auditável), resolvendo trade-off entre flexibilidade e governança em organizações.*

**18. LeVJEPA: Efficient & Scalable Video Pretraining without the Heuristics**
Link: http://arxiv.org/abs/2608.27395v1
Autores: Lukas Kuhn, Lucas Maes, Giuseppe Serra et al.
*Aprendizado de representações de vídeo escalável sem heurísticas de colapso, usando arquiteturas simétricas. Avanço em eficiência computacional.*

**26. Successive Capacity Growth: Task-Complexity-Driven Width and Depth Expansion for Vision Transformer Encoders in JEPA World Models**
Link: http://arxiv.org/abs/2608.27367v1
Autores: Frederik Berenz
*Crescimento progressivo de capacidade de Vision Transformers baseado em complexidade de tarefas, eliminando over-provisioning e under-provisioning em JEPAs.*

**48. Naive Prompt Optimization: Rethinking the Need for Complex Prompt Search**
Link: http://arxiv.org/abs/2608.27266v1
Autores: Yuan Chang, Xiaoqi Chen
*Propõe que otimização de prompts simples pode igualar ganhos de fine-tuning, reduzindo complexidade de busca. Impactante para auto-melhoria recursiva.*

---

### 📊 Aplicações

**11. Learning a Continuous Sepsis Severity Score Without Hour-by-Hour Supervision: A Two-Site Retrospective Study**
Link: http://arxiv.org/abs/2608.27421v1
Autores: Kevin Zhu, Ryan Zhang, Baraa Abed et al.
*Índice contínuo de severidade de sepse aprendido de trajetórias de pacientes, superando índices fixos de décadas. Avanço em medicina de cuidados críticos.*

**17. Making Clinical Language Models Auditable: Concept-Guided Fine-Tuning for Robust Prediction**
Link: http://arxiv.org/abs/2608.27397v1
Autores: Jin Mu, Guanhua Chen
*CAST: tuning guiado por conceitos para suprimir artefatos em notas clínicas, melhorando robustez sob shifts de deployment. Essencial para IA clínica confiável.*

**22. Token-Level Advertising**
Link: http://arxiv.org/abs/2608.27382v1
Autores: Hanbing Liu, Bowei Zhang, Changyuan Yu et al.
*LAMA: mecanismo de publicidade no nível de token que integra influenciadores em geração, transformando publicidade para era de IA generativa.*

**30. Your Voice Cloning System is Secretly a Voice Anonymizer**
Link: http://arxiv.org/abs/2608.27360v1
Autores: Romolo Muletta, Felix Matthias Saaro, Mark Cieliebak et al.
*Demonstra que XTTSv2 pode ser usado para anonimização de falante sem retreino, repurposing inteligente de modelos de voice cloning.*

**43. LLMs Can Design Near-Optimal OR Algorithms**
Link: http://arxiv.org/abs/2608.27296v1
Autores: Jackie Baek
*Estuda capacidade de LLMs em projetar algoritmos para problemas de Operations Research (controle de inventário, redes de filas, otimização de assortment).*

**47. BrailleBench: Investigating Multi-Criteria Braille Comprehension in Large Language Models**
Link: http://arxiv.org/abs/2608.27268v1
Autores: Jinghan Zhang, Fengran Mo, Zhiyu Chen et al.
*Benchmark para avaliar compreensão de Braille em LLMs, promovendo acessibilidade para usuários cegos e surdos-cegos. Passo importante para IA inclusiva.*

---

## 3. Sinal de Tendência em Pesquisa

**Tendências Emergentes Observadas:**

Três direções se destacam nesta leva de artigos. Primeira, a **convergência entre inferência e treinamento em tempo de teste** (TTPO, CritICL) indica que a fronteira entre ajuste de modelo e adaptação em produção está se dissolvendo — modelos cada vez mais aprendem durante a execução. Segunda, a **evolução de habilidades baseada em experiência** (WikiSkill, RedEvoAgent, ACE Lens) representa mudança de paradigma: em vez de treinar habilidades do zero, agentes reutilizam e expandem conhecimento acumulado, assemelhando-se mais a aprendizado humano incremental. Terceira, a **separação de responsabilidades em sistemas agentivos** (Persona-Execution Separation, INTENT-AS-A-TOOL) refleja maturidade do campo: a comunidade reconhece que agentes precisam de arquiteturas que permitam inovação e governança simultaneamente. Estas tendências apontam para uma IA que se adapta continuamente, retém conhecimento persistentemente e opera sob mecanismos de accountability mais sofisticados.

---

## 4. Vale Ler a Fundo

### 1. CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes
http://arxiv.org/abs/2608.27455v1

**Por que ler:** Este artigo introduz uma abordagem elegante para transferir conhecimento de LLMs pequenos para grandes em tempo de inferência, eliminando necessidade de geração repetida ou verificadores externos. Tem implicações diretas para eficiência computacional e escalabilidade de raciocínio.

### 2. What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents
http://arxiv.org/abs/2608.27260v1

**Por que ler:** Fornece framework conceitual para avaliar qualidade de dados agentivos, abordando problema fundamental em treinamento de agentes: como gerar dados úteis e não apenas abundantes. Essencial para pesquisadores e engenheiros de dados de agentes.

### 3. Persona-Execution Separation: An Architecture Pattern for Evolving LLM Agents under Execution Audit
http://arxiv.org/abs/2608.27427v1

**Por que ler:** Resolve trade-off arquitetural crítico em implantação de agentes em ambientes governados — permite evolução livre de persona enquanto mantém rastreabilidade de execução. Padrão potencialmente widely adotado em sistemas empresariais.

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*