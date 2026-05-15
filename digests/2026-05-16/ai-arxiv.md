# Resumo diário de pesquisa em IA no ArXiv 2026-05-16

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-05-15 20:56 UTC

---

# Pesquisa em IA no ArXiv — 16 de maio de 2026

## 1. Destaques do Dia

Os artigos de hoje revelam três direções convergentes no campo da IA. Primeiro, observa-se uma ênfase crescente em **agentes multimodais e embodied intelligence**, com trabalhos que integram percepção visual, raciocínio e ação em sistemas unificados. Segundo, a segurança e interpretabilidade de LLMs continuam sendo temas centrais, evidenciados por pesquisas sobre backdoors, unlearning e métricas de atribuição de features. Terceiro, há um interesse marcante em **escalonamento de inferência e eficiência computacional**, com métodos de quantização, speculative decoding e otimização de memória para agentes. Aplicações em domínios verticais — saúde, condução autônoma, síntese de circuitos — demonstram amadurecimento da tecnologia além de benchmarks genéricos.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**📄 [MeMo: Memory as a Model](http://arxiv.org/abs/2605.15156v1)**
Ryan Wei Heng Quek et al.
Propõe tratar memória como componente integrado ao modelo, permitindo incorporação eficiente de conhecimento domain-specific sem retreino completo. Relevante para aplicações que exigem informação temporal atualizada.

**📄 [Widening the Gap: Exploiting LLM Quantization via Outlier Injection](http://arxiv.org/abs/2605.15152v1)**
Xiaohua Zhan et al.
Demonstra que adversários podem injetar comportamento malicioso em modelos que se comportam benigneamente em precisão total, mas revelam código prejudicial após quantização. Alerta crítico para segurança de deployment.

**📄 [MetaBackdoor: Exploiting Positional Encoding as a Backdoor Attack Surface in LLMs](http://arxiv.org/abs/2605.15172v1)**
Rui Wen et al.
Identifica positional encoding como superfície de ataque para backdoors em LLMs, superando métodos baseados em conteúdo. Abre nova frente de defesa em segurança de modelos.

**📄 [ML-Embed: Inclusive and Efficient Embeddings for a Multilingual World](http://arxiv.org/abs/2605.15181v1)**
Ziyin Zhang et al.
Enfrenta três barreiras críticas em embeddings: custos computacionais, exclusão linguística e falta de transparência. Essencial para sistemas de IR globais e multilíngues.

---

### 🤖 Agentes e Raciocínio

**📄 [OpenDeepThink: Parallel Reasoning via Bradley--Terry Aggregation](http://arxiv.org/abs/2605.15177v1)**
Shang Zhou et al.
Propõe escalonamento em largura para raciocínio LLM via amostragem paralela e agregação Bradley--Terry, resolvendo o gargalo de seleção entre candidatos. Avanço direto em test-time compute scaling.

**📄 [FutureSim: Replaying World Events to Evaluate Adaptive Agents](http://arxiv.org/abs/2605.15188v1)**
Shashwat Goel et al.
Constrói simulações grounded que replayer eventos reais para avaliar capacidade adaptativa de agentes em ambientes dinâmicos abertos. Metodologia valiosa para benchmarking de agentes autonomous.

**📄 [Hand-in-the-Loop: Improving Dexterous VLA via Seamless Interventional Correction](http://arxiv.org/abs/2605.15157v1)**
Zhuohang Li et al.
Aborda erro acumulado em manipulação dexterous de VLAs através de correção interventiva humana integrada, permitindo refinamento de políticas sem interromper a execução.

**📄 [Is Grep All You Need? How Agent Harnesses Reshape Agentic Search](http://arxiv.org/abs/2605.15184v1)**
Sahil Sen et al.
Investiga como arquiteturas de agentic RAG reformulam busca e retrieval, demonstrando que workflows autônomos requerem designs de harness específicos para maximizar performance.

**📄 [Pelican-Unified 1.0: A Unified Embodied Intelligence Model](http://arxiv.org/abs/2605.15153v1)**
Yi Zhang et al.
Primeiro foundation model embodied treinado sob princípio de unificação, integrando compreensão, raciocínio, imaginação e ação em arquitetura única baseada em VLM.

**📄 [MemEye: A Visual-Centric Evaluation Framework for Multimodal Agent Memory](http://arxiv.org/abs/2605.15128v1)**
Minghao Guo et al.
Identifica que benchmarks existentes permitem respostas visuais sem preservar evidência visual, propondo framework que testa se agentes realmente mantêm memória multimodal grounded.

---

### 🔧 Métodos e Frameworks

**📄 [TFGN: Task-Free, Replay-Free Continual Pre-Training Without Catastrophic Forgetting at LLM Scale](http://arxiv.org/abs/2605.15053v1)**
Anurup Ganguli
Resolve problema aberto de continual pre-training em escala LLM sem replay buffers, task labels ou regularização custosa — avanço arquitetural significativo para adaptação contínua.

**📄 [Eradicating Negative Transfer in Multi-Physics Foundation Models via Sparse MoE Routing](http://arxiv.org/abs/2605.15179v1)**
Ellwil Sharma et al.
Combate gradient conflict em co-treinamento de múltiplos regimes PDE com routing esparso em MoE, permitindo SciML foundation models universais.

**📄 [An Interpretable Latency Model for Speculative Decoding in LLM Serving](http://arxiv.org/abs/2605.15051v1)**
Linghao Kong et al.
Modela latência de speculative decoding em cenários dinâmicos de serving, indo além de configurações isoladas de batch fixo. Crítico para deployment eficiente de LLMs.

**📄 [RoSHAP: A Distributional Framework and Robust Metric for Stable Feature Attribution](http://arxiv.org/abs/2605.15154v1)**
Lanxin Xiang et al.
Aborda variação estocástica em attribution methods através de framework distribucional, produzindo métricas robustas a diferentes seeds e splits. Avanço para interpretabilidade confiável.

---

### 📊 Aplicações

**📄 [Evidential Reasoning Advances Interpretable Real-World Disease Screening](http://arxiv.org/abs/2605.15171v1)**
Chenyu Lian et al.
Combina evidential reasoning com mecanismos de referência a casos históricos para screening médico interpretável, superando limitações de modelos black-box em contextos clínicos.

**📄 [Text Knows What, Tables Know When: Clinical Timeline Reconstruction via Retrieval-Augmented Multimodal Alignment](http://arxiv.org/abs/2605.15168v1)**
Sayantan Kumar et al.
Reconstrui timelines clínicas precisas alinhando narrativas textuais não-estruturadas com dados tabulares temporais, usando alinhamento multimodal retrieval-augmented.

**📄 [CLOVER: Closed-Loop Value Estimation & Ranking for End-to-End Autonomous Driving Planning](http://arxiv.org/abs/2605.15120v1)**
Sining Ang et al.
Enfrenta mismatchtreinamento-avaliação em planejamento autônomo, onde trajetórias similares ao log podem violar métricas baseadas em regras de segurança e conforto.

**📄 [Natural Synthesis: Outperforming Reactive Synthesis Tools with Large Reasoning Models](http://arxiv.org/abs/2605.15131v1)**
Frederik Schmitt et al.
Demonstra que large reasoning models superam ferramentas tradicionais de síntese reativa de circuitos, indicando potencial transformador para verificação formal automatizada.

**📄 [NeuroTrain: Surveying Local Learning Rules for Spiking Neural Networks with an Open Benchmarking Framework](http://arxiv.org/abs/2605.15058v1)**
Alessio Caviglia et al.
Proporciona taxonomy unificada e benchmarking para regras de aprendizado local em SNNs, organizados por inspiração biológica, estrutura computacional e adequação a hardware neuromórfico.

---

## 3. Sinal de Tendência em Pesquisa

Observa-se nesta leva de artigos uma **convergência entre agentes autônomos e sistemas multimodais embodied**, refletida em Pelican-Unified, MemEye e Hand-in-the-Loop. Outro padrão emergente é a **segurança em profundidade para LLMs** — não apenas avaliando comportamento em precisão total, mas também em contextos de quantização, como demonstram MetaBackdoor e Forgetting That Sticks. A comunidade também demonstra crescente interesse em **continual learning sem catastrofe** (TFGN) e **escalonamento eficiente de inferência** (speculative decoding, adaptive inference), sugerindo que o bottleneck está se deslocando de treinamento para deployment. Por fim, aplicações em domínios críticos como saúde e condução autônoma ganham fundamentação metodológica mais robusta, com métricas específicas de domínio e frameworks de avaliação dedicados.

---

## 4. Vale Ler a Fundo

**1. [TFGN: Task-Free, Replay-Free Continual Pre-Training Without Catastrophic Forgetting at LLM Scale](http://arxiv.org/abs/2605.15053v1)**
Resolve um problema fundamental em escala LLM — adaptação contínua sem perda de conhecimento anterior — sem os custos de replay ou regularização. Metodologia elegante com implicações práticas imediatas.

**2. [FutureSim: Replaying World Events to Evaluate Adaptive Agents](http://arxiv.org/abs/2605.15188v1)**
Oferece metodologia inovadora de avaliação de agentes através de replay de eventos reais, preenchendo lacuna crítica em benchmarks para ambientes dinâmicos abertos. Aplicável diretamente ao desenvolvimento de agentes robustos.

**3. [CLOVER: Closed-Loop Value Estimation & Ranking for End-to-End Autonomous Driving Planning](http://arxiv.org/abs/2605.15120v1)**
Identifica e resolve mismatch fundamental entre treinamento e avaliação em direção autônoma, com abordagem de closed-loop que melhora significativamente safety e comfort do planejamento.

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*