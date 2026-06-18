# Resumo diário de pesquisa em IA no ArXiv 2026-06-19

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-06-18 22:01 UTC

---


# Resumo de Pesquisa em IA — ArXiv (19 de junho de 2026)

---

## 1. Destaques do Dia

Os artigos desta data revelam três direções convergentes. Primeiro, há um esforço consistente para **fortalecer o raciocínio em modelos de linguagem**, com abordagens que vão desde distillation supervisionada com rubricas até modelos de difusão em bloco para chain-of-thought extenso. Segundo, observa-se uma expansão significativa no **desenvolvimento de agentes autônomos** — tanto para tarefas de percepção multimodal quanto para simulação de usuários e sistemas multiagente com jogos fictícios. Terceiro, a **segurança e alinhamento** ganham atenção crescente, com trabalhos sobre unlearning seletivo, alinhamento no pré-treinamento e métricas de confiabilidade para deepfakes. Aplicações em domínios verticais (médico, legal, científico) continuam a impulsionar pesquisa prática.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**1. Rethinking Reward Supervision: Rubric-Conditioned Self-Distillation**  
http://arxiv.org/abs/2606.19327v1  
*Siyi Gu, Jialin Chen, Sophia Zhou et al.*  
Propõe distillation condicionada a rubricas para corrigir anotações ruidosas em chain-of-thought, reduzindo dependência de dados supervisionados custosos. Relevante para eficiência em pós-treinamento de modelos de raciocínio.

**2. DreamReasoner-8B: Block-Size Curriculum Learning for Diffusion Reasoning Models**  
http://arxiv.org/abs/2606.19257v1  
*Zirui Wu, Lin Zheng, Jiacheng Ye et al.*  
Primeiro modelo open-source de difusão em bloco para raciocínio longo, demonstrando viabilidade de CoT paralelo em 8B parâmetros. Vale atenção pela alternativa à geração autoregressiva.

**3. Trade-offs in Medical LLM Adaptation: An Empirical Study in French QA**  
http://arxiv.org/abs/2606.19266v1  
*Ikram Belmadani, Oumaima El Khettari, Carlos Ramisch et al.*  
Estudo empírico sobre estratégias de adaptação de LLMs para domínio médico em francês, revelando trade-offs entre generalização e especialização. Importante para avaliações práticas.

**4. Language Models as Interfaces, Not Oracles: A Hybrid LLM-ML System for Pediatric Appendicitis**  
http://arxiv.org/abs/2606.19183v1  
*Soheyl Bateni, Maryam Abdolali*  
Propõe arquitetura híbrida usando LLMs como interpretadores de texto livre combinados com modelos estruturados, superando limitações de LLMs como diagnóstico direto.

**5. Dango: A Strictly L1-Only Large Language Model for Studying SLA**  
http://arxiv.org/abs/2606.19170v1  
*Shiho Matta, Yin Jou Huang, Fei Cheng et al.*  
Modelo de 1.8B projetado para estudos controlados de aquisição de segunda língua, oferecendo base para pesquisa em transferência linguística.

**6. Beyond Safe Data: Pretraining-Stage Alignment with Regular Safety Reflection**  
http://arxiv.org/abs/2606.19168v1  
*Jinhan Li, Kexian Tang, Yihan Xu et al.*  
Avança alinhamento de segurança para o estágio de pré-treinamento via reflexão de segurança regular, indo além de filtragem de dados.

**7. User as Engram: Internalizing Per-User Memory as Local Parametric Edits**  
http://arxiv.org/abs/2606.19172v1  
*Bojie Li*  
Modela memória personalizável inspirada no hipocampo/neocórtex, permitindo fatos novos sem sobrescrever habilidades compartilhadas.

---

### 🤖 Agentes e Raciocínio

**8. Native Active Perception as Reasoning for Omni-Modal Understanding**  
http://arxiv.org/abs/2606.19341v1  
*Zhenghao Xing, Ruiyang Xu, Yuxuan Wang et al.*  
Aborda videos longos com percepção ativa que adapta esforço computacional à dificuldade da query, superando paradigma "watch-it-all".

**9. Learning User Simulators with Turing Rewards**  
http://arxiv.org/abs/2606.19336v1  
*Yingshan Susan Wang, Cedegao E. Zhang, Linlu Qiu et al.*  
Treina LLMs como simuladores de usuários usando recompensas inspiradas em Turing, avançando avaliação de sistemas personalizáveis e agentes assistentes.

**10. Enhancing Decision-Making with LLMs through Multi-Agent Fictitious Play**  
http://arxiv.org/abs/2606.19308v1  
*Leyang Shen, Yang Zhang, Xiaoyan Zhao et al.*  
Aplica jogo fictício multiagente com LLMs para tarefas de decisão estratégica, superando limitações de divisão-e-conquista.

**11. Diffusion-Proof: Recipe for Formal Theorem Proving Beyond Auto-Regressive Generation**  
http://arxiv.org/abs/2606.19315v1  
*Ruida Wang, Rui Pan, Pengcheng Wang et al.*  
Explora modelos de difusão para prova formal de teoremas, desafiando domínio exclusivo de LLMs autoregressivos.

---

### 🔧 Métodos e Frameworks

**12. Explaining Attention with Program Synthesis**  
http://arxiv.org/abs/2606.19317v1  
*Amiri Hayes, Belinda Li, Jacob Andreas*  
Substitui ativações de atenção por programas simbólicos executáveis, avanzando interpretabilidade de redes profundas.

**13. STARE: Surprisal-Guided Token-Level Advantage Reweighting for Policy Entropy Stability**  
http://arxiv.org/abs/2606.19236v1  
*Haipeng Luo, Qingfeng Sun, Songli Wu et al.*  
Resolve colapso de entropia em RLVR/GRPO via reweighting guiado por surprisal, estabilizando treinamento de políticas.

**14. Mechanism-Guided Selective Unlearning for RLVR-Induced Reasoning**  
http://arxiv.org/abs/2606.19222v1  
*Chenyu Zhou, Qiliang Jiang, Shuning Wu et al.*  
Método MAST para unlearning seletivo de raciocínio induzido por RLVR, minimizando dano colateral comparando checkpoints SFT/RLVR.

**15. Structured Inference with Large Language Gibbs**  
http://arxiv.org/abs/2606.19264v1  
*Sanghyeok Choi, Henry Gouk, Esmeralda S. Whitammer*  
Esquema de inferência probabilisticamente coerente usando LLMs como substrato para raciocínio estruturado sobre variáveis.

**16. OneCanvas: 3D Scene Understanding via Panoramic Reprojection**  
http://arxiv.org/abs/2606.19253v1  
*Bartłomiej Baranowski, Dave Zhenyu Chen, Matthias Nießner*  
Agrega features de patches em canvas panorâmico equiretangular, simplificando raciocínio espacial em VLMs sem encoders geométricos complexos.

---

### 📊 Aplicações

**17. Freeing the Law with LOCUS: A Local Ordinance Corpus for the United States**  
http://arxiv.org/abs/2606.19334v1  
*Denis Peskoff, Joe Barrow, Christopher Vu et al.*  
Disponibiliza corpus de ordenanças locais americanas (zoneamento, licenciamento, saúde pública) para avanço de IA legal em escala.

**18. A Multi-Domain Benchmark for Detecting AI-Generated Text-Rich Images from GPT-Image-2**  
http://arxiv.org/abs/2606.19259v1  
*Yijin Wang, Shuyi Wang, Wenhan Zhang et al.*  
Propõe benchmark para detecção de imagens com texto gerado por IA, relevante para privacidade e detecção de fraudes.

**19. Confidence is Not Reliability: Rethinking MC Dropout in Brain Tumour Segmentation**  
http://arxiv.org/abs/2606.19300v1  
*Xin Ci Wong, Duygu Sarikaya, Kieran Zucker et al.*  
Demonstra que confiança de MC Dropout não equivale a confiabilidade em segmentação de glioma, alertando para riscos em decisões clínicas.

**20. TxBench-PP: Analyzing AI Agent Performance on Small-Molecule Preclinical Pharmacology**  
http://arxiv.org/abs/2606.19245v1  
*Hannah Le, Ramesh Ramasamy, Alex Urrutia et al.*  
Benchmark verificável para avaliação de agentes de IA em farmacologia pré-clínica, avanzando transparência em descoberta de drogas.

---

## 3. Sinal de Tendência em Pesquisa

Observa-se nesta data uma **consolidação da pesquisa em raciocínio de longo alcance**, com múltiplas contribuições atacando o problema de chain-of-thought extenso por ângulos complementares — desde modelos de difusão em bloco até distillation com rubricas e jogos fictícios multiagente. Paralelamente, cresce o interesse em **segurança em estágios upstream**, especificamente alinhamento durante pré-treinamento e unlearning seletivo, sugerindo que a comunidade reconhece a necessidade de intervir antes do fine-tuning. No campo aplicado, **dados legais locais** e **biologia computacional** emergem como domínios com demandas não atendidas por corpora e benchmarks adequados. A tendência de **arquiteturas híbridas LLM+ML estruturado** — visível em aplicações médicas e de decisão — indica que a combinação de flexibilidade conversacional com rigor estatístico está se tornando prática padrão.

---

## 4. Vale Ler a Fundo

1. **DreamReasoner-8B** (http://arxiv.org/abs/2606.19257v1) — Demonstra viabilidade de raciocínio paralelo em escala razoável, com implicações para eficiência computacional em modelos de difusão.

2. **Mechanism-Guided Selective Unlearning** (http://arxiv.org/abs/2606.19222v1) — Oferece solução elegante para trade-off fundamental entre esquecer conhecimento específico e preservar capacidades gerais em modelos pós-RLVR.

3. **Structured Inference with Large Language Gibbs** (http://arxiv.org/abs/2606.19264v1) — Propõe framework teórico rigoroso para acessar conhecimento latente em LLMs de forma probabilisticamente coerente, com aplicações em raciocínio estruturado.

---

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*