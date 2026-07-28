# Resumo diário de pesquisa em IA no ArXiv 2026-07-29

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-07-28 21:02 UTC

---

# Pesquisa em IA no ArXiv — 29 de julho de 2026

---

## 1. Destaques do Dia

A pesquisa de hoje revela três direções convergentes. Primeiro, **modelos multimodais estão sendo adaptados para domínios verticais**: ClinFusion para imagens médicas e ERUnderstand para diagramas de banco de dados demonstram como VLMs são customizadas para interpretar estruturas visuais especializadas. Segundo, **sistemas multiagente com planejamento de longo horizonte** ganham fundamentação teórica via física de processos de decisão, com aplicações em alerta precoce de eventos climáticos extremos. Terceiro, **interpretabilidade está passando da teoria para a prática**, com KANEx traduzindo redes Kolmogorov-Arnold para explicações médicas e SAEs sendo estudadas para efeitos causais downstream. A eficiência em inferência de LLMs também se destaca, com novos métodos de cache e atenção esparsa permitindo contextos de 1 milhão de tokens.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**1. Kimi K3: Open Frontier Intelligence**  
Link: http://arxiv.org/abs/2607.24653v1  
*Autores: Kimi Team, Tongtong Bai, Yifan Bai et al.*  
Modelo MoE de 2.8T parâmetros com 104B ativados, visão nativa e contexto de 1M tokens, usando Attention Residuals para melhorar fluxo de informação — demonstra que arquiteturas MoE escaláveis mantêm eficiência viável.

**2. ELMOD: Efficient German-First 2.7B Language Model for Mobile Inference**  
Link: http://arxiv.org/abs/2607.24585v1  
*Autores: Darina Gold, Alexander Schwirjow, Viktor Haag et al.*  
Modelo compacto bilíngue treinado com apenas 55k H100 GPU-hours em dados públicos — demonstra viabilidade de LLMs eficientes paraon-device em idiomas de mercado médio.

**3. Beyond Scale and Generation: Understanding Language Model-based Entity Matching**  
Link: http://arxiv.org/abs/2607.24688v1  
*Autores: Zeyu Zhang, Xue Li, Iacer Calixto et al.*  
Análise sistemática de arquiteturas de matching (bi-encoder, cross-encoder, generativa) desvinculando arquitetura do backbone — esencial para practitioners escolherem solução adequada.

---

### 🤖 Agentes e Raciocínio

**4. The Physics of Multi-Turn Long-Horizon Planning: From Pre-training to Post-training**  
Link: http://arxiv.org/abs/2607.24720v1  
*Autores: Tianyi Men, Zhuoran Jin, Kang Liu et al.*  
Propõe que planejamento multi-turn é análogo a processos físicos de difusão, fundamentando como agentes adquirem capacidade de planejamento — insight teórico para design de foundation models.

**5. Efficiency Matters in Autonomous Research**  
Link: http://arxiv.org/abs/2607.24647v1  
*Autores: Haiqian Yang, Yuan Cao*  
Argumenta que eficiência do processo de busca é tão importante quanto qualidade do resultado em AR — reorienta métricas de avaliação para sistemas autônomos de pesquisa.

**6. Agentic Permissions Policy Algebra for Taint Confinement in LLM Agents**  
Link: http://arxiv.org/abs/2607.24625v1  
*Autores: Arseny Kravchenko, Vadim Liventsev, Innokentii Konstantinov et al.*  
Algebra de permissões dinâmicas para controle de informação em agentes processando dados de confidencialidade variada — segurança essencial para deployment de agentes autônomos.

**7. SIREN: Towards End-to-End Extreme-Weather Early Warning with Experience-Grounded LLM Agents**  
Link: http://arxiv.org/abs/2607.24588v1  
*Autores: Hang Ni, Weijia Zhang, Fan Liu et al.*  
Sistema de alerta precoce com agentes LLM fundamentados em experiência operacional — demonstra aplicação crítica de agentes em infraestrutura científica.

---

### 🔧 Métodos e Frameworks

**8. KANEx: Translating Kolmogorov-Arnold Networks' Interpretability to Medical Explainability**  
Link: http://arxiv.org/abs/2607.24730v1  
*Autores: Krithi Shailya, Ananya Lakshmi Ravi, Venkatanathan K. V.*  
Traduz interpretabilidade de KANs para explicações em linguagem natural em classificação de raios-X — ponte entre teoria de redes e workflow clínico real.

**9. Sparse Autoencoders Encode Both Concepts and Functions**  
Link: http://arxiv.org/abs/2607.24645v1  
*Autores: Phu Gia Hoang, Anwoy Chatterjee, Tanmoy Chakraborty et al.*  
Estudo empírico ligando features SAE a efeitos comportamentais downstream — alerta para limitações de SAEs como ferramentas de interpretabilidade e guia para uso mais robusto.

**10. Rethinking Classifier-Free Guidance in On-Policy Diffusion Distillation**  
Link: http://arxiv.org/abs/2607.24731v1  
*Autores: Bingnan Li, Haozhe Wang, Haozhong Xiong et al.*  
Reinterpreta como CFG deve se comportar sob OPD, corrigindo comportamento não natural de guidance em distillação — essencial para próximos avanços em modelos de difusão student.

**11. LOCKS: Page-Local Compact Key Summaries for Efficient Long-Context Decoding**  
Link: http://arxiv.org/abs/2607.24555v1  
*Autores: Junsung Hwang*  
Base compacta local de page vs. base global de rank baixo para cache KV — insight arquitetural que permite servir contextos longos com menos memória.

**12. CADER: Confidence-Aware Dynamic Evidence Reasoning for Long-Video Understanding**  
Link: http://arxiv.org/abs/2607.24582v1  
*Autores: Jinlong Yang, Wenhao Zhang, Kuanwei Lin et al.*  
Sistema que adapta procedência de inferência baseada em dificuldade da questão em vídeos longos — alocação inteligente de recursos computacionais.

---

### 📊 Aplicações

**13. ClinFusion: A Vision-Centric Multimodal LLM System for Holistic Medical Understanding**  
Link: http://arxiv.org/abs/2607.24743v1  
*Autores: Hangjie Yuan, Yichen Qian, Zhiwei Tang et al.*  
Framework multimodal vision-centric para imagens médicas 2D/3D com protocolos de avaliação alinhados à prática clínica — referência para desenvolvimento de MLLMs médicos.

**14. ERUnderstand: Evaluating Vision-Language Models on Structured ER Diagrams**  
Link: http://arxiv.org/abs/2607.24707v1  
*Autores: Ali Ansari, Yasmin Mohammadi, Farnoush Nili et al.*  
Primeiro benchmark em larga escala para compreensão de ERDs por VLMs — habilita engenharia de banco de dados assistida por IA.

**15. Causal-TS: A Python Library for Causal Discovery in High-Dimensional and Nonstationary Time Series**  
Link: http://arxiv.org/abs/2607.24673v1  
*Autores: Mohammad Fesanghary*  
Biblioteca unificada com 8 algoritmos de descoberta causal incluindo métodos para não-estacionariedade — ferramenta prática para pesquisa aplicada.

**16. LLM-Assisted Ontology Engineering and Construction of a French Legal Knowledge Graph**  
Link: http://arxiv.org/abs/2607.24551v1  
*Autores: Genesis Montenegro, Mokhtar Boumedyen Billami, Catherine Faron et al.*  
Workflow em duas etapas usando LLMs para engenharia de ontologia em regulamentos de manutenção franceses — demonstra applicability industrial de LLMs em domínio legal.

---

## 3. Sinal de Tendência em Pesquisa

**Interpretabilidade prática e orientada a domínio** emerge como tema unificador. Enquanto SAEs e KANs ofereciam promessa teórica de modelos interpretáveis, os artigos de hoje mostram **tradução concreta para workflows especializados**: KANEx em raios-X, ERUnderstand em diagramas, e LOCKS em memória de inferência. A tendência é de que interpretabilidade deixe de ser apenas ferramenta de pesquisa e passe a integrar pipelines de deployment, especialmente em setores regulados como saúde e direito.

**Sistemas multiagente com fundamentação teórica** também ganham força. O artigo de Men et al. utiliza física de processos para explicar planejamento de longo horizonte, indicando que a comunidade busca bases mais rigorosas para comportamento agentico — não apenas engenharia empírica.

Por fim, **eficiência de inferência em contextos longos** permanece como gargalo crítico, com soluções em cache (LOCKS), atenção esparsa (PIVOT), e arquitetura MoE (Kimi K3) convergindo para viabilizar LLMs de 1M+ tokens em produção.

---

## 4. Vale Ler a Fundo

1. **Sparse Autoencoders Encode Both Concepts and Functions** (http://arxiv.org/abs/2607.24645v1)  
   Leitura essencial para pesquisadores em interpretabilidade de LLMs. O estudo empírico ligando features SAE a efeitos downstream expõe limitações que toda pesquisa subsequente precisará considerar.

2. **The Physics of Multi-Turn Long-Horizon Planning** (http://arxiv.org/abs/2607.24720v1)  
   Contribuição teórica que fundamenta como planejamento agentico pode ser adquirido e moldado — leitura obrigatória para designers de foundation models agenticos.

3. **ClinFusion: A Vision-Centric Multimodal LLM System** (http://arxiv.org/abs/2607.24743v1)  
   Benchmark e framework para MLLMs médicos que estabelece padrões de avaliação alinhados à prática clínica — referência para qualquer trabalho em IA médica multimodal.

---

*Total de artigos analisados: 50 | Categorias principais: cs.AI, cs.CL, cs.LG | Data: 2026-07-29*

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*