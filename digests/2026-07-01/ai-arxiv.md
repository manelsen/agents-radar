# Resumo diário de pesquisa em IA no ArXiv 2026-07-01

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-06-30 21:23 UTC

---

# Resumo de Pesquisa em IA — ArXiv (2026-07-01)

---

## 1. Destaques do Dia

A pesquisa em IA desta data revela avanços significativos em **agentes e modelos de linguagem**. O campo de agentes autonomous avança com o *WorldEvolver*, que introduz modelos de mundo auto-evolutivos para planejamento de longo horizonte, enquanto o *Agents-A1* demonstra que modelos de 35B parâmetros com Mixture-of-Experts podem alcançar desempenho equivalente a modelos trilionários através do escalonamento do horizonte de agentes. Observa-se crescente preocupação com a **segurança de sistemas multi-agente**, com novos trabalhos sobre defesa de canais de comunicação e detecção de envenenamento de memória. A **interpretabilidade de LLMs** continua em destaque com avanços em autoencoders esparsos e modelos de bottleneck de conceitos, enquanto aplicações práticas em codificação, medicina e música demonstram maturação do campo.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**9. [Scaling the Horizon, Not the Parameters: Reaching Trillion-Parameter Performance with a 35B Agent](http://arxiv.org/abs/2606.30616v1)**
- *Autores:* Lei Bai, Zongsheng Cao, Yang Chen et al.
- **Contribuição:** Introduce o Agents-A1, um modelo de 35B MoE que alcança desempenho de trilhões de parâmetros através do escalonamento do horizonte de agentes e habilidades heterogêneas. Requisito para quem investiga eficiência computacional em modelos de linguagem.

**22. [Morphing into Hybrid Attention Models](http://arxiv.org/abs/2606.30562v1)**
- *Autores:* Disen Lan, Jianbin Zheng, Yuxi Ren et al.
- **Contribuição:** Propõe método para converter Transformers em modelos de atenção híbrida, preservando camadas de atenção completa em posições estratégicas para maximizar eficiência em contextos longos.

**25. [Poller: Are LLMs Suitable for Evaluating the Poetry Understanding Task?](http://arxiv.org/abs/2606.30556v1)**
- *Autores:* Shanshan Wang, Derek F. Wong, Jingming Yao et al.
- **Contribuição:** Propõe avaliador baseado em LLM para poesia chinesa, superando limitações de métodos automáticos tradicionais em gêneros literários distintos.

---

### 🤖 Agentes e Raciocínio

**3. [Self-Evolving World Models for LLM Agent Planning](http://arxiv.org/abs/2606.30639v1)**
- *Autores:* Xuan Zhang, Wenxuan Zhang, See-Kiong Ng et al.
- **Contribuição:** Introduce *WorldEvolver*, um framework de modelos de mundo auto-evolutivos que permite agentes LLM com previsão de consequências de ações antes da execução — avanço fundamental para planejamento de longo horizonte.

**5. [GROW²: Grounding Which and Where for Robot Tool Use](http://arxiv.org/abs/2606.30632v1)**
- *Autores:* Yuhong Deng, Yuyao Liu, David Hsu
- **Contribuição:** Aborda o problema de *open-world affordance grounding*, onde robôs devem selecionar objetos não especializados como ferramentas — avanço relevante para manipulação robótica criativa.

**18. [SWE-INTERACT: Reimagining SWE Benchmarks as User-Driven Long-Horizon Coding Sessions](http://arxiv.org/abs/2606.30573v1)**
- *Autores:* Mohit Raghavendra, Anisha Gunjal, Aakash Sabharwal et al.
- **Contribuição:** Propõe novo testbed para avaliar agentes de codificação em sessões interativas multi-turn, contrastando com benchmarks tradicionais que fornecem requisitos completos upfront.

**20. [Attractor States Emerge in Multi-Turn LLM Conversations](http://arxiv.org/abs/2606.30571v1)**
- *Autores:* Ting-Wen Ko, Jonas Geiping
- **Contribuição:** Estuda dinâmicas de longo prazo em conversas entre LLMs, revelando comportamento de estados atrativos independentes de tópico — insight importante para compreensão de interações entre agentes.

**33. [Entity Binding Failures in Tool-Augmented Agents](http://arxiv.org/abs/2606.30531v1)**
- *Autores:* Rahul Suresh Babu, Shashank Indukuri
- **Contribuição:** Identifica falha crítica onde agentes escolhem ferramenta correta mas atuam na entidade errada — problema subestimado em avaliação de agentes.

---

### 🔧 Métodos e Frameworks

**7. [DOPD: Dual On-policy Distillation](http://arxiv.org/abs/2606.30626v1)**
- *Autores:* Xinlei Yu, Gen Li, Qingyi Si et al.
- **Contribuição:** Propõe infusão de informação privilegiada em distillation on-policy para elevar a fronteira de desempenho em transferência de capacidade.

**10. [C²R: Cross-sample Consistency Regularization Mitigates Feature Splitting and Absorption in Sparse Autoencoders](http://arxiv.org/abs/2606.30609v1)**
- *Autores:* Haoran Jin, Xiting Wang, Shijie Ren et al.
- **Contribuição:** Aborda problema de *feature splitting* em SAEs para interpretação de LLMs, propondo regularização de consistência entre amostras.

**12. [Optimization Dynamics Imprint Semantic Specificity in Contrastive Embedding Norms](http://arxiv.org/abs/2606.30625v1)**
- *Autores:* Ziwei Su, Junyu Ren, Victor Veitch
- **Contribuição:** Demonstra que normas de embeddings em modelos contrastivos correlacionam-se com especificidade semântica, apesar de serem "descartadas" por métricas como similaridade cosseno.

**42. [On the Faithfulness of Post-Hoc Concept Bottleneck Models](http://arxiv.org/abs/2606.30498v1)**
- *Autores:* Laines Schmalwasser, Jan Blunk, Niklas Penzel et al.
- **Contribuição:** Investiga fidelidade de modelos de bottleneck de conceitos post-hoc, bridging o gap entre representações profundas e compreensão humana.

---

### 📊 Aplicações

**1. [VLK: Learning Humanoid Loco-Manipulation from Synthetic Interactions](http://arxiv.org/abs/2606.30645v1)**
- *Autores:* Yen-Jen Wang, Jiaman Li, Sirui Chen et al.
- **Contribuição:** Cria dataset sintético sincronizado de imagens egocêntricas, comandos linguísticos e trajetórias cinemáticas para locomanipulação humanóide.

**11. [MESA: Prioritizing Vulnerable Communication Channels for Securing Multi-Agent Systems](http://arxiv.org/abs/2606.30602v1)**
- *Autores:* Kunyang Li, Kyle Domico, Jonathan Gregory et al.
- **Contribuição:** Aborda superfícies de ataque em canais de comunicação inter-agente, propondo framework de priorização para defensores com recursos limitados.

**21. [Forensic Trajectory Signatures for Agent Memory Poisoning Detection](http://arxiv.org/abs/2606.30566v1)**
- *Autores:* Jun Wen Leong
- **Contribuição:** Descobre invariante comportamental em ataques de envenenamento de memória persistente em agentes LLM, permitindo detecção de exfiltração.

**23. [The Human Creativity Benchmark](http://arxiv.org/abs/2606.30561v1)**
- *Autores:* Aspen Hopkins, Allison Nulty, Alexandria Minetti et al.
- **Contribuição:** Propõe framework de avaliação que preserva dois sinais distintos em criatividade: convergência profissional e disagreement genuíno, tratando desacordo como feature, não ruído.

**37. [Regime-Aware Peer Specialization for Robust RAG under Heterogeneous Knowledge Conflicts](http://arxiv.org/abs/2606.30518v1)**
- *Autores:* Bo Wang, Heyan Huang, Yaolin Li et al.
- **Contribuição:** Aborda fragilidade do RAG quando contexto recuperado conflita com conhecimento paramétrico do modelo, propondo especialização por regime de confiabilidade.

---

## 3. Sinal de Tendência em Pesquisa

Observa-se nesta data uma **consolidação do paradigma de agentes autônomos** com foco em planejamento de longo horizonte e auto-evolução de modelos de mundo. A segurança em sistemas multi-agente emerge como tópico de alta relevância, com trabalhos addressando desde canais de comunicação vulneráveis até envenenamento de memória persistente — indicando madurecimento do campo que antes focava quase exclusivamente em desempenho.

Destaque para a **convergência entre interpretabilidade e eficiência**: técnicas como atenção híbrida e distillação on-policy visam reduzir custos computacionais sem sacrificar capacidades. O fenômeno de *feature splitting* em autoencoders esparsos e a investigação de fidelidade em modelos de bottleneck de conceitos demonstram crescente preocupação com **transparência e confiança** em modelos de produção.

Finalmente, aplicaciones em domínios especializados — codificação, música, medicina, segurança — evidenciam **transferência efectiva de técnicas de linguagem para下游 tarefas**, com benchmarks adaptados que capturam a complexidade de cenários reais.

---

## 4. Vale Ler a Fundo

**3. [Self-Evolving World Models for LLM Agent Planning](http://arxiv.org/abs/2606.30639v1)** — Este trabalho representa um salto conceitual ao permitir que agentes LLM evoluam seus modelos de mundo através de experiência, potencialmente resolvendo o problema de foresight não confiável que limita planejamento de longo horizonte.

**23. [The Human Creativity Benchmark](http://arxiv.org/abs/2606.30561v1)** — Artigo provocador que reinterpreta o disagreement em avaliação criativa como sinal informativo, oferecendo framework metodológico para um problema subexplorado na comunidade de IA.

**42. [On the Faithfulness of Post-Hoc Concept Bottleneck Models](http://arxiv.org/abs/2606.30498v1)** — Para pesquisadores interessados em XAI, este trabalho oferece análise rigorosa sobre quando representações de conceitos high-level realmente correspondem ao comportamento do modelo.

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*