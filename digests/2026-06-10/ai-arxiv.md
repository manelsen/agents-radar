# Resumo diário de pesquisa em IA no ArXiv 2026-06-10

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-06-09 21:44 UTC

---

## Resumo de Pesquisa em IA — ArXiv, 10 de junho de 2026

---

### 1. Destaques do Dia

Os artigos de hoje revelam uma intensaActivity em três frentes: (1) **agentes autônomos** ganham maturidade com benchmarks unificados para VLM em jogos (#1), agentes de smartphone personalizáveis (#18) e protocolos formais de colaboração humano-agente (#22); (2) **alinhamento e segurança** recebe atenção renovada com análise crítica de como RLHF preserva estruturas partisans (#27), elicitação psicologicamente informada de recusas (#40) e red teaming adaptativo via GRPO (#38); (3) **métodos de treinamento** avançam com regularização de divergência para LLM-RL (#4), preservação de plasticidade via isometria dinâmica (#19) e correções baseadas em fluxo para separação de fala (#44). A convergência entre modelos de mundo, controle seguro e agentes de longa duração indica uma maturização do ecossistema de IA agentic.

---

### 2. Artigos-Chave

#### 🧠 Modelos de Linguagem

**5. Rethinking the Divergence Regularization in LLM RL**
Autores: Jiarui Yao, Xiangxin Zhou, Penghui Qi et al.
Link: http://arxiv.org/abs/2606.09821v1
*Analisa como a regularização de divergência em RL fora de política afeta a estabilidade do treinamento de LLMs, propondo abordagens mais adequadas para trust-region em contextos de mismatch inferência-treinamento.*

**27. The Neutral Mask: How RLHF Provides Shallow Alignment while Leaving Partisan Structure Intact**
Autores: Wendy K. Tam
Link: http://arxiv.org/abs/2606.09735v1
*Revela que RLHF cria alinhamento superficial sem remover estruturas partisans no modelo, expondo limitações fundamentais do processo de alinhamento atual.*

**35. IS-CoT: Breaking the Long-form Generation Collapse via Interleaved Structural Thinking**
Autores: Zechen Sun, Yuyang Sun, Zecheng Tang et al.
Link: http://arxiv.org/abs/2606.09709v1
*Apresenta método para evitar colapso de的长度 em geração de texto longo por LLMs através de pensamento estrutural intercalado.*

**40. PsychoSafe: Eliciting Psychologically-Informed Refusals in Large Language Models**
Autores: Gianluca Barmina, Federico Torrielli, Sven Harms et al.
Link: http://arxiv.org/abs/2606.09697v1
*Proposta de recusas psicologicamente informadas para LLMs, balanceando helpfulness e prevenção de danos em interações de alto risco.*

---

#### 🤖 Agentes e Raciocínio

**1. OmniGameArena: A Unified UE5 Benchmark for VLM Game Agents with Improvement Dynamics**
Autores: Mingxian Lin, Shengju Qian, Yuqi Liu et al.
Link: http://arxiv.org/abs/2606.09826v1
*Benchmark unificado em Unreal Engine 5 para avaliar VLM em jogos, superando métricas de avaliação única com dinâmicas de melhoria progressiva.*

**18. iOSWorld: A Benchmark for Personally Intelligent Phone Agents**
Autores: Lawrence Keunho Jang, Mareks Woodside, Geronimo Carom et al.
Link: http://arxiv.org/abs/2606.09764v1
*Benchmark que avalia agentes mobile personalizáveis, raciocinando sobre identidade, histórico e preferências do usuário no dispositivo.*

**22. Collaborative Human-Agent Protocol (CHAP)**
Autores: Arsalan Shahid, Gordon Suttie, Philip Black et al.
Link: http://arxiv.org/abs/2606.09751v1
*Protocolo formal para.foundation models em papéis operacionais, coordenando decisões entre humanos e agentes em contextos críticos.*

**24. Multi-Turn Evaluation of Deep Research Agents Under Process-Level Feedback**
Autores: Rishabh Sabharwal, Hongru Wang, Amos Storkey et al.
Link: http://arxiv.org/abs/2606.09748v1
*Avalia se DRAs melhoram relatórios via feedback, investigando capacidade de auto-reflexão e revisitação de output.*

**30. SearchSwarm: Towards Delegation Intelligence in Agentic LLMs for Long-Horizon Deep Research**
Autores: Pu Ning, Quan Chen, Kun Tao et al.
Link: http://arxiv.org/abs/2606.09730v1
*Paradigma de decomposição de tarefas para agentes principais que delegam subtarefas, gerenciando contexto sem limites em tarefas complexas.*

---

#### 🔧 Métodos e Frameworks

**4. Rethinking the Divergence Regularization in LLM RL**
Autores: Jiarui Yao, Xiangxin Zhou, Penghui Qi et al.
Link: http://arxiv.org/abs/2606.09821v1
*Reavalia métodos de controle trust-region (PPO, GRPO) em RL para LLMs, propondo regularização de divergência mais adequada.*

**19. Preserving Plasticity in Continual Learning via Dynamical Isometry**
Autores: Andries Rosseau, Robert Müller, Ann Nowé
Link: http://arxiv.org/abs/2606.09762v1
*Conecta plasticidade em aprendizagem contínua ao Neural Tangent Kernel, usando isometria dinâmica para preservar capacidade de aprendizado.*

**38. Learning to Attack and Defend: Adaptive Red Teaming of Language Models via GRPO**
Autores: Blake Bullwinkel, Eugenia Kim, Amanda Minnich et al.
Link: http://arxiv.org/abs/2606.09701v1
*Usa RL para descobrir ataques e defenders mais robustos, com co-treinamento attacker-defender adaptativo.*

**43. AutoMegaKernel: A Statically-Checked Agent Harness for Self-Retargeting Megakernel Synthesis**
Autores: Jaber Jaber, Osama Jaber
Link: http://arxiv.org/abs/2606.09682v1
*Compila modelos Llama em kernel CUDA cooperativo persistente via validação estática de schedule-IR, eliminando CUDA manual.*

---

#### 📊 Aplicações

**12. FASE: Fast Adaptive Semantic Entropy for Code Quality**
Autores: Shizhe Lin, Ladan Tahvildari
Link: http://arxiv.org/abs/2606.09800v1
*Aplica entropia semântica adaptativa para detectar alucinações e erros em multi-agente code generation, melhorando confiabilidade de sistemas autônomos.*

**15. SIGA: Self-Evolving Coding-Agent Adapters for Scientific Simulation**
Autores: Matthew Ho, Brian Liu, Jixuan Chen et al.
Link: http://arxiv.org/abs/2606.09774v1
*Estuda interface de agentes-ferramentas para simuladores científicos, minimalizando adaptação necessária para scientists.*

**47. Transition-Based Digital Twin Modelling for Alzheimer's Disease under Sparse Longitudinal Data**
Autores: Yinyu Huang, Yilin Zhang, Sofia Michopoulou et al.
Link: http://arxiv.org/abs/2606.09771v1
*Modela progressão heterogênea de Alzheimer via digital twin com dados longitudinais esparsos e irregulares.*

**17. Data Synthesis and Parameter-Efficient Fine-Tuning for Low-Resource NMT: A Case Study on Q'eqchi' Mayan**
Autores: Alexander Chulzhanov, Soeren Eberhardt, Arjun Mukherjee
Link: http://arxiv.org/abs/2606.09767v1
*Síntese de dados para tradução automática de linguagem indígena low-resource sem scraping, garantindo soberania de dados.*

---

### 3. Sinal de Tendência em Pesquisa

Observa-se uma **convergência entre agentes, world models e segurança**. Artigos como #7 (AHA-WAM), #10 (Echo-Memory) e #23 demonstram que o campo avança em direção a modelos de mundo que combinam predição visual e ação robótica, com mecanismos de memória e segurança explícitos. A ênfase em **avaliar agentes em ambientes reais e personalizados** — jogos (#1), smartphones (#18), tarefas espaciais (#49) — substitui gradualmente benchmarks estáticos por avaliação interativa e longitudinal. Parallelmente, a preocupação com **limitações de RAG no domínio legal** (#32) e **falhas de alinhamento** (#27) indica maturidade crítica: a comunidade reconhece tanto capacidades quanto fragilidades estruturais dos LLMs.

---

### 4. Vale Ler a Fundo

1. **#27 - The Neutral Mask** (http://arxiv.org/abs/2606.09735v1) — Análise profunda e necessária sobre o que RLHF realmente faz (e não faz) ao modelo, com implicações diretas para alinhamento seguro.

2. **#19 - Preserving Plasticity in Continual Learning** (http://arxiv.org/abs/2606.09762v1) — Conexão teórica entre isometria dinâmica e plasticidade neural oferece framework unificador para aprendizagem contínua.

3. **#1 - OmniGameArena** (http://arxiv.org/abs/2606.09826v1) — Benchmark que finalmente oferece avaliação progressiva e padronizada para VLM em jogos,填补 a lacuna entre benchmarks sintéticos e avaliação real.

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*