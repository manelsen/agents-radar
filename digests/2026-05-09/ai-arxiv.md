# Resumo diário de pesquisa em IA no ArXiv 2026-05-09

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-05-08 20:54 UTC

---

# Resumo de Pesquisa em IA — ArXiv (2026-05-09)

---

## 1. Destaques do Dia

Os artigos de hoje revelam uma intensificação na pesquisa sobre **agentes LLM autônomos e auto-evolutivos**, com destaque para abordagens de otimização recursiva (RAO) e curadoria de habilidades (SkillOS). No campo de **geração de vídeo**, ActCam demonstra controle zero-shot de câmera e movimento, representando avanço significativo em cinematografia generativa. Observa-se também crescente interesse em **mixturas de especialistas (MoE)**, com novos frameworks que desafiam a arquitetura tradicional por camada. Em **interpretabilidade**, a investigação sobre a origem estrutural dos "attention sinks" oferece uma explicação mecanística para comportamento emergente em LLMs. Por fim, a **segurança e robustez** continuam como eixo central, com estudos sobre jailbreaking dinâmico e avaliação comparativa sem benchmarks.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**5. [Verifier-Backed Hard Problem Generation for Mathematical Reasoning](http://arxiv.org/abs/2605.06660v1)**
Yuhang Lai, Jiazhan Feng, Yee Whye Teh et al.
Método para gerar problemas matemáticos desafiadores e inéditos usando LLMs, crucial para avançar treinamento e pesquisa autônoma em ciências. **Destaque pela abordagem inovadora de verificação.**

**31. [The Structural Origin of Attention Sink: Variance Discrepancy, Super Neurons, and Dimension Disparity](http://arxiv.org/abs/2605.06611v1)**
Siquan Li, Kaiqi Jiang, Jiacheng Sun et al.
Explicação mecanística para o fenômeno em que tokens iniciais dominam atenções em LLMs, revelando superneurônios e disparidade dimensional como causas estruturais. **Fundamental para compreensão de comportamentos emergentes.**

**39. [UniSD: Towards a Unified Self-Distillation Framework for Large Language Models](http://arxiv.org/abs/2605.06597v1)**
Yiqiao Jin, Yiyang Wang, Lucheng Fu et al.
Framework unificado de auto-distilação para adaptar LLMs sem professores externos, lidando com trajetória livre e racionalidade plausível. **Avanço importante para fine-tuning eficiente.**

### 🤖 Agentes e Raciocínio

**9. [AI Co-Mathematician: Accelerating Mathematicians with Agentic AI](http://arxiv.org/abs/2605.06651v1)**
Daniel Zheng, Ingrid von Glehn, Yori Zwols et al.
Workbench interativo para matemáticos usarem agentes AI em pesquisa aberta, cobrindo ideação, literatura e iteração. **Pioneiro em integração de agentes em workflows matemáticos.**

**18. [Recursive Agent Optimization](http://arxiv.org/abs/2605.06639v1)**
Apurva Gandhi, Satyaki Chakraborty, Xiangjun Wang et al.
Abordagem RL para treinar agentes recursivos que podem gerar e delegar subtarefas a novas instâncias de si mesmos. **Inovação em scaling de inference-time.**

**29. [SkillOS: Learning Skill Curation for Self-Evolving Agents](http://arxiv.org/abs/2605.06614v1)**
Siru Ouyang, Jun Yan, Yanfei Chen et al.
Sistema de curadoria de habilidades reutilizáveis extraídas de interações passadas para auto-evolução de agentes. **Resolução de problema de aprendizados one-shot.**

**48. [NeuroAgent: LLM Agents for Multimodal Neuroimaging Analysis and Research](http://arxiv.org/abs/2605.06584v1)**
Lujia Zhong, Yihao Xia, Jianwei Zhang et al.
Agentes LLM para análise de neuroimagem multimodal e coordenação de workflows complexos. **Aplicação domain-specific de alta relevância.**

### 🔧 Métodos e Frameworks

**2. [UniPool: A Globally Shared Expert Pool for Mixture-of-Experts](http://arxiv.org/abs/2605.06665v1)**
Minbin Huang, Han Shi, Chuanyang Zheng et al.
Desafia a arquitetura rígida de MoE por camada com pool global de especialistas compartilhado, desacoplando profundidade de crescimento de parâmetros. **Redefinição de arquitetura MoE.**

**4. [EMO: Pretraining Mixture of Experts for Emergent Modularity](http://arxiv.org/abs/2605.06663v1)**
Ryan Wang, Akshita Bhagia, Sewon Min et al.
MoE pré-treinado para modularidade emergente, ativando subconjuntos específicos por tarefa sem modelo completo. **Avanço em eficiência computacional.**

**32. [SoftSAE: Dynamic Top-K Selection for Adaptive Sparse Autoencoders](http://arxiv.org/abs/2605.06610v1)**
Jakub Stępień, Marcin Mazur, Jacek Tabor et al.
Seleção dinâmica top-K para autoencoders esparsos adaptativos em interpretabilidade de LLMs e ViTs. **Ferramenta aprimorada para análise mechanisticista.**

**26. [MASPO: Joint Prompt Optimization for LLM-based Multi-Agent Systems](http://arxiv.org/abs/2605.06623v1)**
Zhexuan Wang, Xuebo Liu, Li Wang et al.
Otimização joint de prompts entre agentes interagentes em sistemas multi-agente baseados em LLMs. **Resolução de problema não-trivial em orchestration.**

### 📊 Aplicações

**1. [ActCam: Zero-Shot Joint Camera and 3D Motion Control for Video Generation](http://arxiv.org/abs/2605.06667v1)**
Omar El Khalifi, Thomas Rossi, Oscar Fossey et al.
Controle zero-shot de câmera e movimento de personagem em geração de vídeo artistic. **Avanca cinematografia generativa.**

**35. [AI CFD Scientist: Toward Open-Ended Computational Fluid Dynamics Discovery with Physics-Aware AI Agents](http://arxiv.org/abs/2605.06607v1)**
Nithin Somasekharan, Rabi Pathak, Manushri Dhanakoti et al.
Agentes AI com consciência física para descoberta em dinâmica de fluidos computacional. **Extensão do loop de descoberta científica a simuladores físicos.**

**36. [How Many Iterations to Jailbreak? Dynamic Budget Allocation for Multi-Turn LLM Evaluation](http://arxiv.org/abs/2605.06605v1)**
Shai Feldman, Yaniv Romano
Alocação dinâmica de budget para avaliarLLMs em configurações multi-turn, prevendo eventos como jailbreaks. **Contribuição crítica para segurança.**

---

## 3. Sinal de Tendência em Pesquisa

Os artigos de hoje evidenciam três tendências emergentes significativas:

1. **Agentes Auto-Evolutivos e Recursivos**: Há intensa investigação em sistemas que aprendem de interações passadas (SkillOS), delegam tarefas recursivamente (RAO) e otimizam trajetórias estratégica (StraTA). Isso representa uma evolução de agentes reativos para sistemas proativos e auto-refinantes.

2. **Desacoplamento de Arquiteturas Tradicionais**: MoE com pool global compartilhado (UniPool) e self-distillation unificado (UniSD) desafiam convenções estabelecidas (especialistas por camada, necessidade de professores externos), sugerindo que a próxima geração de modelos será mais flexível e eficiente.

3. **Interpretabilidade Mecanística Profunda**: SoftSAE e a análise de attention sinks indicam uma migração de explicações post-hoc para explicações causais estruturais, conectando comportamento emergente a componentes específicos de redes neurais.

---

## 4. Vale Ler a Fundo

**[18. Recursive Agent Optimization](http://arxiv.org/abs/2605.06639v1)** — Oferece uma perspectiva inovadora sobre scaling de inference-time através de agentes recursivos. A formulação de sub-tarefas auto-geradas representa um paradigma fundamentalmente novo para problemas de longo-horizonte.

**[31. The Structural Origin of Attention Sink](http://arxiv.org/abs/2605.06611v1)** — Fornece a primeira caracterização mecanística rigorosa de um fenômeno amplamente observado mas mal compreendido. A conexão entre superneurônios e disparidade dimensional é particularmente Insight.

**[35. AI CFD Scientist](http://arxiv.org/abs/2605.06607v1)** — Demonstra como estender agentes LLM além de domínios software-only para simuladores físicos de alta fidelidade, enfrentando desafios únicos de validade física. Essencial para pesquisa científica assistida por AI.

---

*Total de artigos analisados: 50 | Categorias: cs.AI, cs.CL, cs.LG | Data: 2026-05-09*

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*