# Resumo diário de pesquisa em IA no ArXiv 2026-06-20

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-06-19 21:04 UTC

---

# Resumo de Pesquisa em IA — ArXiv (20 de junho de 2026)

---

## 1. Destaques do Dia

Os artigos desta data revelam avanços significativos em três frentes principais: (1) **segurança e verificação de agentes de IA**, com novos frameworks para validação probabilística e análise de ataques adversários em sistemas agentic; (2) **calibração e transparência de modelos**, buscando entender como modelos de linguagem (incluindo os baseados em difusão) tomam decisões e como alinhar suas saídas com preferências humanas; e (3) **otimização de inference e serving**, com propostas de compressão de KV cache em 4 bits e técnicas de recuperação de estado de execução para reduzir latência. O tema de **viés em modelos multimodais** também se destaca, com estudos mostrando como pistas visuais sutis influenciam julgamentos de MLLMs.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**1. How Transparent is DiffusionGemma?**
- **Link:** http://arxiv.org/abs/2606.20560v1
- **Autores:** Joshua Engels, Callum McDougall, Bilal Chughtai et al.
- **Contribuição:** Investigação sobre a transparência do raciocínio em modelos de difusão, questionando se a computação em espaço latente contínuo reduz a interpretabilidade das decisões do modelo. Essencial para entender limitações em debugging e mitigação de misuse.

**2. Toward Calibrated Mixture-of-Experts Under Distribution Shift**
- **Link:** http://arxiv.org/abs/2606.20544v1
- **Autores:** Gina Wong, Drew Prinster, Suchi Saria et al.
- **Contribuição:** Propõe melhorias na calibração de incerteza em modelos MoE sob mudanças de distribuição, alinhando probabilidades preditas com frequências empíricas. Relevante para aplicações críticas onde quantificação de incerteza é crucial.

**3. StylisticBias: A Few Human Visual Cues Drive Most Social Biases in MLLMs**
- **Link:** http://arxiv.org/abs/2606.20527v1
- **Autores:** Shaghayegh Kolli, Timo Cavelius, Nafiseh Nikeghbal et al.
- **Contribuição:** Demonstra que pistas visuais mínimas (como estilo de vestimenta) determinam grande parte dos vieses sociais em modelos multimodais, separando fatores confundidores em experimentos controlados. Alerta importante para deployment equitativo.

**4. Your Mouse and Eyes Secretly Leak Your Preference: LLM Alignment using Implicit Feedback**
- **Link:** http://arxiv.org/abs/2606.20482v1
- **Autores:** Haw-Shiuan Chang, Jeffrey Gomez, Mehul Patwari et al.
- **Contribuição:** Explora uso de feedback implícito (movimentos do mouse e rastreamento ocular) para alinhar LLMs, superando limitações de feedback explícito escasso. Abre caminho para alinhamento mais natural e escalável.

---

### 🤖 Agentes e Raciocínio

**5. LedgerAgent: Structured State for Policy-Adherent Tool-Calling Agents**
- **Link:** http://arxiv.org/abs/2606.20529v1
- **Autores:** Md Nayem Uddin, Amir Saeidi, Eduardo Blanco et al.
- **Contribuição:** Framework para manutenção de estados de tarefa em agentes tool-calling, garantindo aderência a políticas de domínio em atendimento ao cliente. Resolve problema crítico de estado persistente em conversas multi-turn.

**6. Contagion Networks: Evaluator Bias Propagation in Multi-Agent LLM Systems**
- **Link:** http://arxiv.org/abs/2606.20493v1
- **Autores:** Zewen Liu
- **Contribuição:** Framework formal para medir como vieses de avaliadores se propagam através de redes de agentes LLM. Demonstra em experimentos controlados de 3 agentes como biases se "contaminam". Essencial para sistemas avaliativos confiáveis.

**7. LLM agent safety, multi-turn red-teaming, jailbreak benchmarks**
- **Link:** http://arxiv.org/abs/2606.20408v1
- **Autores:** Hanwool Lee, Dasol Choi, Bokyeong Kim et al.
- **Contribuição:** Apresenta NRT-Bench, benchmark para red-teaming multi-turn de agentes LLM em sistemas críticos, caracterizando robustez sob pressão adversarial sustentada e adaptativa.

**8. Sovereign Execution Brokers: Enforcing Certificate-Bound Authority in Agentic Control Planes**
- **Link:** http://arxiv.org/abs/2606.20520v1
- **Autores:** Jun He, Deying Yu
- **Contribuição:** Proposta de mecanismo que vincula autoridade de execução a certificados, separando autoridade de identidades em workflows de agentes autônomos. Aborda gap crítico entre controle de acesso e certificação de ações.

---

### 🔧 Métodos e Frameworks

**9. Execution-State Capsules: Graph-Bound Execution-State Checkpoint and Restore**
- **Link:** http://arxiv.org/abs/2606.20537v1
- **Autores:** Liang Su
- **Contribuição:** Técnica para checkpoint e restore de estado de execução em serving de agentes Physical-AI, gerenciando fragmentos de estado além de KV cache para latência ultra-baixa. Inova em regime oposto ao paged KV cache tradicional.

**10. Multi-Task Bayesian In-Context Learning**
- **Link:** http://arxiv.org/abs/2606.20538v1
- **Autores:** Qingyang Zhu, Eric Karl Oermann, Kyunghyun Cho
- **Contribuição:** Combina inferência Bayesiana com aprendizado in-context multi-tarefa, oferecendo framework principiado para quantificação de incerteza e generalização robusta sem necessidade de fine-tuning extensivo.

**11. Fisher-Geometric Sharpness and the Implicit Bias of SGD toward Flat Minima**
- **Link:** http://arxiv.org/abs/2606.20469v1
- **Autores:** Md Sakir Ahmed, Kumaresh Sarmah, Hemen Dutta
- **Contribuição:** Proposta de medida de flatness invariante a reparametrizações (Fisher-Geometric Sharpness) para entender viés implícito de SGD. Contribui para teoria de por que flat minima generalizam melhor.

**12. Sparsity, Superposition, and Forgetting: A Mechanistic Study of Representation Retention**
- **Link:** http://arxiv.org/abs/2606.20431v1
- **Autores:** Jan Wasilewski, Jędrzej Kozal, Michał Woźniak et al.
- **Contribuição:** Estudo mecanístico de forgetting em continual learning usando framework toy-world controlado, isolando papéis de sparsity e superposition em retenção de representações.

---

### 📊 Aplicações

**13. Scalable Training of Spatially Grounded 2D Vision-Language Models for Radiology**
- **Link:** http://arxiv.org/abs/2606.20477v1
- **Autores:** Yusuf Salcan, Simon Ging, Robin Schirrmeister et al.
- **Contribuição:** Introduce RefRad2D, dataset bilíngue de 1.2M pares imagem-texto de radiologia (CT/MR) com groundamento espacial, permitindo treinar VLMs sem anotações manuais.

**14. Calibration Without Comprehension: Diagnosing LLMs for Vulnerability Detection**
- **Link:** http://arxiv.org/abs/2606.20502v1
- **Autores:** Arastoo Zibaeirad, Marco Vieira
- **Contribuição:** Framework CWE-Trace com 834 amostras curadas do kernel Linux para diagnosticar se LLMs realmente raciocinam sobre vulnerabilidades ou apenas pattern-match em dados contaminados.

**15. HEPTv2: End-to-End Efficient Point Transformer for Charged Particle Reconstruction**
- **Link:** http://arxiv.org/abs/2606.20437v1
- **Autores:** Siqi Miao, Shitij Govil, Jack P. Rodgers et al.
- **Contribuição:** Transformer de pontos otimizado para reconstrução de partículas carregadas no HL-LHC, enfrentando ambiguidade combinatorial extrema com eficiência computacional.

**16. DataMagic: Transforming Tabular Data into Data Insight Video**
- **Link:** http://arxiv.org/abs/2606.20388v1
- **Autores:** Yupeng Xie, Chen Ma, Zhenyang Wang et al.
- **Contribuição:** Sistema para gerar automaticamente vídeos de insight de dados integrando gráficos dinâmicos, narração e animações sincronizadas, automatizando produção de narrativas visuais.

---

## 3. Sinal de Tendência em Pesquisa

Observa-se convergência de esforços em **sistemas de IA agentic seguros e verificáveis**. Enquanto anteriormente a pesquisa focava em capacidades individuais de modelos, agora há ênfase crescente em como múltiplos agentes LLM interagem, propagam vieses e podem ser attackados — vide os artigos sobre Contagion Networks e análise de ataques a sistemas agentic.

另一趋势是 **quantificação de incerteza e calibração** ganhando relevância além de métricas de acurácia. Com LLMs sendo deployed em contextos de alto risco, saber quando o modelo não sabe se torna tão importante quanto saber quando acerta.

Também emerge a preocupação com **transparência em modelos não-textuais** (difusão, modelos multimodais), indicando que a comunidade reconhece que interpretabilidade não é problema apenas de transformers autoregressivos.

---

## 4. Vale Ler a Fundo

1. **Contagion Networks** (http://arxiv.org/abs/2606.20493v1) — Framework matematicamente rigoroso para um fenômeno emergente (propagação de viés em multi-agentes) com implicações diretas para design de sistemas avaliativos baseados em LLMs.

2. **StylisticBias** (http://arxiv.org/abs/2606.20527v1) — Demonstra empiricamente que vieses sociais em MLLMs são triggered por pistas visuais mínimas, com metodologia que pode servir de template para estudos de fairness em visão computacional.

3. **LedgerAgent** (http://arxiv.org/abs/2606.20529v1) — Resolve problema prático e negligenciado de manutenção de estado em agentes tool-calling com uma arquitetura de "ledger" estruturado, potencialmente útil para qualquer sistema de客服 automatizado.

---

*Resumo gerado em 20 de junho de 2026 com base em 50 artigos de cs.AI, cs.CL e cs.LG.*

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*