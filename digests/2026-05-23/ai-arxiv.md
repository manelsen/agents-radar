# Resumo diário de pesquisa em IA no ArXiv 2026-05-23

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-05-22 21:05 UTC

---

# Resumo de Pesquisa em IA — ArXiv (23/05/2026)

---

## 1. Destaques do Dia

Os artigos de hoje revelam uma intensa atividade em **agentes autônomos auto-evolutivos**, com sistemas capazes de reescrever seu próprio código-fonte em tempo real. No фронт.methods, destaca-se a convergência entre modelos de linguagem e otimização combinatória via programação linear e relaxações convexas para tokenização. A área de **incerteza e robustez** recebe atenção especial com novos frameworks para aprendizaje de máquinas evidencial e detecção de anomalias em sistemas cyber-físicos. Observa-se também crescente preocupação com **viés político e alinhamento** em LLMs, além de avanços em inferência temporal e raciocínio clínico através de knowledge graphs temporalizados.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**1. Tokenisation via Convex Relaxations**
http://arxiv.org/abs/2605.22821v1
Autores: Jan Tempus et al.
Formula tokenização como programa linear, superando a ganância do BPE ao otimizar vocabulário globalmente — salto conceitual para NLP mais eficiente.

**2. Understanding Data Temporality Impact on LLMs Pre-training**
http://arxiv.org/abs/2605.22769v1
Autores: Pilchen Hippolyte et al.
Estuda como o treinamento com corpora embaralhados afeta o conhecimento temporal dos LLMs, revelando limitações na anchored temporal knowledge.

**3. Reducing Political Manipulation with Consistency Training**
http://arxiv.org/abs/2605.22771v1
Autores: Long Phan et al.
Identifica 7 categorias de viés político covert em LLMs e propõe consistência training como mitigação — trabalho crucial para alinhamento.

**4. Post-Training is About States, Not Tokens**
http://arxiv.org/abs/2605.22731v1
Autores: Dong Nie
Reinterpreta SFT, RL e destilação como manipulação de distribuições de estados, oferecendo framework unificado para entender fine-tuning.

**5. AMEL: Accumulated Message Effects on LLM Judgments**
http://arxiv.org/abs/2605.22714v1
Autores: Sid-ali Temkit
Demonstra que polaridade do histórico conversacional influencia julgamentos subsequentes — alerta para sistemas de avaliação automatizada.

---

### 🤖 Agentes e Raciocínio

**6. MOSS: Self-Evolution through Source-Level Rewriting**
http://arxiv.org/abs/2605.22794v1
Autores: Qianshu Cai et al.
Permite que agentes autônomos evoluam através de reescrita de código-fonte, não apenas prompts — marco para sistemas auto-aprimorantes.

**7. Vector Policy Optimization: Training for Diversity**
http://arxiv.org/abs/2605.22817v1
Autores: Ryan Bahlous-Boldi et al.
Otimiza LLMs para diversidade em procedimentos de busca like AlphaEvolve, melhorando generalização out-of-the-box.

**8. Remember to be Curious: Episodic Context for 3D Exploration**
http://arxiv.org/abs/2605.22814v1
Autores: Lily Goli et al.
Combina memória episódica com mundos persistentes para exploração curiosity-driven em ambientes 3D com rewards esparsos.

**9. DeltaBox: Scaling Stateful AI Agents**
http://arxiv.org/abs/2605.22781v1
Autores: Yunpeng Dong et al.
Checkpoint/rollback em milissegundos para sandbox de agentes stateful — habilita tree search e RL em tempo real.

---

### 🔧 Métodos e Frameworks

**10. Gated DeltaNet-2: Decoupling Erase and Write**
http://arxiv.org/abs/2605.22791v1
Autores: Ali Hatamizadeh et al.
Melhora atenção linear com gates explícitos para edição de memória compressa, mantendo associações existentes.

**11. The Matching Principle: Geometric Theory of Loss Functions**
http://arxiv.org/abs/2605.22800v1
Autores: Vishal Rajput
Unifica robustez, domain adaptation e generalização composicional sob teoria geométrica — framework unificador poderoso.

**12. Clipping Bottleneck: Stabilizing RLVR**
http://arxiv.org/abs/2605.22703v1
Autores: Shuo Yang et al.
Diagnostica e corrige instabilidade em GRPO-style objectives para reasoning escalável com RLVR.

**13. SeqLoRA: Bilevel Orthogonal Adaptation**
http://arxiv.org/abs/2605.22743v1
Autores: Javad Parsa et al.
Composição de múltiplos conceitos em difusão texto-imagem sem interferência, usando adaptação ortogonal bilevel.

**14. Proxy-Based Approximation of Shapley and Banzhaf Interactions**
http://arxiv.org/abs/2605.22738v1
Autores: Santo M. A. R. Thies et al.
ProxySHAP reconcilia velocidade e precisão em interações de ordem superior para explicabilidade.

---

### 📊 Aplicações

**15. ChronoMedKG: Temporally-Grounded Biomedical KG**
http://arxiv.org/abs/2605.22734v1
Autores: Md Shamim Ahmed et al.
Knowledge graph biomédico com temporalidade para raciocínio clínico dinâmico — preenche lacuna crítica em medicina.

**16. FAME: Failure-Aware MoE for Log Anomaly Detection**
http://arxiv.org/abs/2605.22779v1
Autores: Huanchi Wang et al.
Detecção de anomalias em nível de mensagem específica em logs, usando mixture-of-experts ciente de falhas.

**17. Superhuman Safe Racing via Multi-Agent RL**
http://arxiv.org/abs/2605.22748v1
Autores: Ismail Geles et al.
RL multi-agente para corrida autônoma segura, superando paradigmas single-agent em ambientes dinâmicos compartilhados.

**18. MambaGaze: Cognitive Load from Eye-Tracking**
http://arxiv.org/abs/2605.22775v1
Autores: Amir Mousavi et al.
Avaliação de carga cognitiva em tempo real com modelagem explícita de dados faltantes em eye-tracking.

---

## 3. Sinal de Tendência em Pesquisa

Observa-se convergência de três direções emergentes: **(1) Agentic Self-Evolution**, onde sistemas não apenas executam tarefas mas reescrevem seu próprio código e adaptam skills dinamicamente, representando salto além de meras APIs textuais. **(2) Temporal Grounding**, com múltiplos trabalhos abordando como LLMs e sistemas de IA podem entender e raciocinar sobre temporalidade — desde knowledge graphs biomédicos até impacto de dados temporalmente distribuídos no pré-treinamento. **(3) Uncertainty-Aware Deployment**, evidenciada por avanços em EDL, DP random forests, e análise de viés, indicando maturidade na busca por sistemas que quantifiquem e comuniquem incerteza adequadamente. O financiamento de pesquisa em 2026 parece favorecer aplicações com impacto direto em healthcare e sistemas autônomos críticos.

---

## 4. Vale Ler a Fundo

1. **MOSS: Self-Evolution through Source-Level Rewriting** (http://arxiv.org/abs/2605.22794v1)
   Pioneiro em agentes que evoluem código-fonte; essencial para entender o futuro de sistemas autônomos auto-aprimorantes.

2. **The Matching Principle** (http://arxiv.org/abs/2605.22800v1)
   Teoria geométrica unificadora para robustness e generalização — leitura fundamental para pesquisadores de representation learning.

3. **ChronoMedKG** (http://arxiv.org/abs/2605.22734v1)
   Demonstra como temporalidade em knowledge graphs transforma raciocínio clínico; referência para aplicações em healthcare AI.

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*