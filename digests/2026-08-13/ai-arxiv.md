# Resumo diário de pesquisa em IA no ArXiv 2026-08-13

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-08-12 20:37 UTC

---

# Resumo de Pesquisa em IA — ArXiv (2026-08-13)

---

## 1. Destaques do Dia

A pesquisa em IA nesta data evidencia uma maturação do campo em múltiplas frentes. Observa-se crescente atenção à **segurança e alinhamento multilingual**, com estudos demonstrando vulnerabilidades inesperadas em modelos quando operando em idiomas de baixo recurso — indicando que salvaguardas desenvolvidas para inglês não generalizam adequadamente. No domínio de agentes autônomos, há avanços significativos em adaptação em tempo de teste e compressão de habilidades, sugerindo uma transição de modelos estáticos para sistemas que evoluem durante o uso. A **neuro-symbolic integration** ganha força com frameworks que combinam lógica de primeiro ordem com aprendizado diferencial, enquanto a área de interpretabilidade avança da explicabilidade post-hoc para controle mecanicista. Por fim, aplicações especializadas em domínios como cirurgia robótica, genômica e sensoriamento remoto demonstram crescente maturidade de técnicas de IA em contextos críticos.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**8. From Interpretability to Control: Insights from Six Years of the TrustNLP Workshop**
- Autores: Rahul Gupta et al.
- Seis anos de evolução da pesquisa em NLP confiável, documentando a transição de interpretabilidade post-hoc para compreensão mecanicista e controle proativo de modelos.
- 🔗 http://arxiv.org/abs/2608.11171v1

**21. Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding**
- Autores: Kushal Chakrabarti
- Análise do crescimento irrestrito de arquivos de contexto em agentes de codificação, revelando limitações fundamentais em esquecimento seletivo.
- 🔗 http://arxiv.org/abs/2608.11095v1

**34. V-FiLLM: Verified Financial LLM Reasoning Benchmark**
- Autores: Alicia Larsen et al.
- Framework para geração de benchmarks de raciocínio financeiro a partir de árvores de computação executáveis,填补STEM评估中的结构化数据推理空白。
- 🔗 http://arxiv.org/abs/2608.11047v1

**40. Mapping and Measuring the Behavioral Evolution of Large Language Models**
- Autores: Dong Qiao et al.
- Caracterização do comportamento de saída de 32 modelos de seis famílias usando 10.000 prompts compartilhados, revelando relações inter-modelos e evolução generacional.
- 🔗 http://arxiv.org/abs/2608.11027v1

**41. Data Attribution of Emergent Misalignment with Persona Features**
- Autores: Clemens Vetter et al.
- Atribuição de misalinhamento emergente a características de persona adquiridas durante pré-treinamento, oferecendo conta mecanicista para comportamento prejudicial em domínios não relacionados.
- 🔗 http://arxiv.org/abs/2608.11025v1

---

### 🤖 Agentes e Raciocínio

**1. Surgical WAM: A World-Action Model for Data-Efficient Surgical Robot Learning**
- Autores: Wenrui Bao et al.
- Modelo mundo-ação que supera a escassez de demonstrações etiquetadas em robótica cirúrgica, integrando raciocínio de longo horizonte e manipulação de contato preciso.
- 🔗 http://arxiv.org/abs/2608.11204v1

**5. Test-Time Self-Evolving GUI Visual Grounding via Reflection-Guided On-Policy Self-Distillation**
- Autores: Shiyu Xuan, Zechao Li
- Método de adaptação em tempo de teste que permite modelos de grounding visual em interfaces gráfico evoluírem durante implantação através de auto-distilação guiada por reflexão.
- 🔗 http://arxiv.org/abs/2608.11191v1

**20. Actions Speak Louder than Words: Measuring Cross-Lingual Policy Retention in Tool-Using Agents**
- Autores: Sourabrata Mukherjee et al.
- Investigação de se agentes que usam ferramentas mantêm políticas idênticas quando a mesma tarefa é apresentada em idiomas diferentes, revelando variações de ação perdidas em avaliações tradicionais.
- 🔗 http://arxiv.org/abs/2608.11110v1

**25. SkillZip: Evaluation-Free Skill Compression for Self-Evolving Agents**
- Autores: Xiaofan Bai et al.
- Compressão de habilidades acumuladas por agentes auto-evolutivos através de descoberta de estrutura reutilizável, eliminando redundâncias sem necessidade de avaliação explícita.
- 🔗 http://arxiv.org/abs/2608.11079v1

**6. How to Verify Consistency of Probabilistic Claims**
- Autores: Orr Paradise et al.
- Verificação em tempo polinomial da auto-consistência de respostas probabilísticas condicionais em previsores, com implicações directas para segurança e honestidade em IA.
- 🔗 http://arxiv.org/abs/2608.11181v1

---

### 🔧 Métodos e Frameworks

**17. sLTN: Structural Logic Tensor Networks**
- Autores: Davide Rinaldi, Luciano Serafini
- Extensão neurosimbólica de LTN para dados estruturados, permitindo integração de restrições lógicas de primeira ordem com aprendizado diferencial em grafos e sequências.
- 🔗 http://arxiv.org/abs/2608.11136v1

**3. Beyond a Bag of Features: Set-Level Instability in Sparse Autoencoders**
- Autores: Nikolai Bolik et al.
- Análise de instabilidade em nível de conjunto em SAEs esparsas, demonstrando que representações esparsas capturam estrutura típico-estrutural fina que representações densas perdem.
- 🔗 http://arxiv.org/abs/2608.11197v1

**11. Conditional Independence Tests for Constraint-Based Causal Discovery: A Survey**
- Autores: Pavel Averin et al.
- Survey abrangente de testes de independência condicional para descoberta causal, com ênfase em pressupostos e metodologia para algoritmos PC e FCI.
- 🔗 http://arxiv.org/abs/2608.11156v1

**12. DACRI: Decision-Aware Causal Intervention Ranking for Supply Chains**
- Autores: Shiqi Huang et al.
- Framework para seleção de intervenções que maximizam valor líquido recuperável em cadeias de suprimento, com benchmark sintético e verdades causais ground-truth.
- 🔗 http://arxiv.org/abs/2608.11154v1

**35. ReRound: Reconstructive Rounding to Resolve Midpoint Ambiguity in Calibration-Free LLM Quantization**
- Autores: He-Yen Hsieh, H. T. Kung
- Método de quantização pós-treinamento que resolve ambiguidade de ponto médio através de difusão condicional reconstructiva, mantendo desempenho com menores precisões.
- 🔗 http://arxiv.org/abs/2608.11045v1

---

### 📊 Aplicações

**29. Uncertainty-Aware Deep Learning for Genomics Applications**
- Autores: Sepideh Saran et al.
- Estudo empírico sistemático de quantificação de incerteza em aplicações genômicas,填补这一关键领域的可靠性评估空白。
- 🔗 http://arxiv.org/abs/2608.11054v1

**30. A Comparative Evaluation of Deep Learning Object Detection on a Real-World Multi-Plant Dataset from Africa**
- Autores: Ismail Ismail Tijjani et al.
- Avaliação de modelos de detecção de objetos em condições agrícolas africanas reais, contrastando com datasets controlados convencionais.
- 🔗 http://arxiv.org/abs/2608.11053v1

**32. 3D Weighted Geometric Graph Neural Networks for Sheep Facial Pain Assessment**
- Autores: Alam Noor et al.
- Modelo GNN geométrico 3D ponderado para avaliação de dor em ovinos, incorporando anatomia espacial 3D e relações inter-landmark do SPFES.
- 🔗 http://arxiv.org/abs/2608.11050v1

**37. myMediWhisper: Construction of Burmese Medical Speech Corpus and Whisper Fine-Tuning**
- Autores: Ye Kyaw Thu et al.
- Corpus de 28 horas de fala médica birmanesa para ajuste fino de Whisper, demonstrando como dados de domínio específico superam limitações de pré-treinamento multilíngue.
- 🔗 http://arxiv.org/abs/2608.11036v1

---

## 3. Sinal de Tendência em Pesquisa

A pesquisa de hoje revela três direções emergentes significativas. **Primeiro**, observa-se maturação da área de alinhamento de segurança em direção a verificação formal e quantificação de incerteza — artigos como "How to Verify Consistency of Probabilistic Claims" e a análise de misalinhamento emergente indicam transição de propriedades qualitativas para verificabilidade algorítmica. **Segundo**, a auto-evolução de agentes durante implantação emerge como paradigma, com métodos de adaptação em tempo de teste que superam limitações de modelos congelados, como demonstrado em GUI visual grounding e compressão de habilidades. **Terceiro**, há interesse crescente em aplicações de IA para idiomas e domínios de baixo recurso — desde segurança cross-lingual até corpus médicos birmaneses — sugerindo reconhecimento da comunidade de que avanços em inglês-centrados não constituem progresso equitativo. Estas tendências convergentes sugerem um campo em maturação que busca simultaneamente rigor formal, adaptabilidade operacional e inclusão global.

---

## 4. Vale Ler a Fundo

**1. How to Verify Consistency of Probabilistic Claims** (http://arxiv.org/abs/2608.11181v1)
- Leighvement fundamental para segurança em IA: artigo que oferece verificação polinomial de consistência de previsões probabilísticas, tornando explícito trade-offs entre honestidade e utilidade. Relevante para qualquer trabalho em sistemas que fazem previsões condicionais sobre eventos raros ou críticos.

**2. From Interpretability to Control: Insights from Six Years of the TrustNLP Workshop** (http://arxiv.org/abs/2608.11171v1)
- Síntese de seis anos de evolução em NLP confiável oferece perspectiva única sobre como a comunidade transitou de "explicar modelos" para "controlar comportamento", fornecendo mapa conceitual valioso para pesquisadores entrants no campo.

**3. Data Attribution of Emergent Misalignment with Persona Features** (http://arxiv.org/abs/2608.11025v1)
- Conta mecanicista elegante para fenômeno de misalinhamento emergente, conectando comportamento prejudicial em domínios não relacionados a direções latentes de persona. Oferece tanto diagnóstico quanto potenciais vias de mitigação, sendo leitura essencial para trabalho em alinhamento.

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*