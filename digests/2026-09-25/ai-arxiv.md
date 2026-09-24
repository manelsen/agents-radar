# Resumo diário de pesquisa em IA no ArXiv 2026-09-25

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-09-24 22:57 UTC

---

# Resumo de Pesquisa em IA — ArXiv (2026-09-25)

---

## 1. Destaques do Dia

O dia trouxe avanços significativos na interseção entre **modelos de linguagem e agentes autônomos**. Destaca-se a crescente preocupação com segurança de IA, evidenciada por estudos sobre propensões de agentes a sabotar desligamentos e avaliações proativas de trajetórias sequenciais. No фронті методов, a pesquisa em memória e eficiência continua a producir resultados práticos, com novos frameworks de quantização e abordagens de mistura de recursos. O domínio de **raciocínio causal e grounded** emerge como área quente, com datasets especializados para robótica e condução autônoma. Finalmente, a aplicação de LLMs em domínios verticals — saúde mental, literatura clássica, tradução — mostra maturação do campo.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**Contrastive Learning for Authorship Verification**  
http://arxiv.org/abs/2609.28471v1  
Peter Kirby et al.  
Demonstra que aprendizado contrastivo supera abordagens classification-based para verificação de autoria, identificando fatores críticos como função de perda e augmentação de dados.

**Complementary Roles of Activation and Parametric Memory in Few-Shot Learning**  
http://arxiv.org/abs/2609.28250v1  
Miaohe Niu, Runsong Zhao et al.  
Investiga como memória de ativação (KV caches) e memória paramétrica interagem no few-shot learning, revelando complementaridade subexplorada.

**Log-Depth Recurrent Language Modeling**  
http://arxiv.org/abs/2609.28212v1  
Yiqin Wang, Nuri Cingillioglu et al.  
Propõe operadores recursivos em árvore balanceada para alcançar profundidade logarítmica com paralelismo, atacando a limitação de profundidade fixa dos Transformers.

**Beyond Poetry: Can LLMs Generate Classical Arabic Maqamat?**  
http://arxiv.org/abs/2609.28245v1  
AbdulRahman A. Morsy, Aya Zirikly  
Explora capacidade de LLMs em gerar formas literárias clássicas culturalmente grounded, revelando lacunas em variedades históricas.

---

### 🤖 Agentes e Raciocínio

**Can LLMs Reason About Runtime Behavior? A Repository-Level Dynamic Benchmark**  
http://arxiv.org/abs/2609.28449v1  
Hamed Taherkhani, Mohammad Abdollahi et al.  
Introduz benchmark de nível repositório para avaliar capacidade de raciocínio sobre execução de código, addressedo limitação de benchmarks estáticos existentes.

**Agent-Editing World Model: Rethinking World Modeling for LLM Agents**  
http://arxiv.org/abs/2609.28416v1  
Shuang Sun, Guoxin Chen et al.  
Reformula world modeling para agentes LLM focando em tool results de alta entropia em vez de reconstrução de observações.

**Shutdown Sabotage Propensities in Multi-Agent Systems**  
http://arxiv.org/abs/2609.28274v1  
Amelie Knecht, Ulysse Schaller et al.  
Testa empiricamente se agentes AI mostram propensão a evitar desligamento humano — resultado crítico para alinhamento e segurança.

**PASTABench: Proactive Assessment of Sequential Trajectories for Agent Safety**  
http://arxiv.org/abs/2609.28197v1  
Jiapeng Sun, Yujin Zhou et al.  
Avança além de avaliação single-turn para paradigmas multi-turn com foco em segurança operacional em workflows de múltiplas etapas.

---

### 🔧 Métodos e Frameworks

**Memory Attention**  
http://arxiv.org/abs/2609.28399v1  
Jiale Kang  
Propõe memória indexada por token substituindo projeção de valor dedicada, com Complementação de informação contextual.

**Fine-Tuning LLMs for Translation: General Forgetting Mitigation Does Not Preserve MT-Specific Instruction Following**  
http://arxiv.org/abs/2609.28395v1  
Niklas Scholz, David Thulke et al.  
Revela que métodos de mitigação de esquecimento catastrófico não preservam capacidades específicas de MT, sugerindo necessidade de avaliação domain-specific.

**hyperbolix: Hyperbolic Deep Learning in JAX**  
http://arxiv.org/abs/2609.28248v1  
Timo Klein, Thomas Lang et al.  
Primeira biblioteca abrangente de deep learning hiperbólico em JAX, com seis variedades e interface unificada.

**MicroQonv: Reshaping Convolution Tensors for Efficient Microscaling**  
http://arxiv.org/abs/2609.28358v1  
Romain Facq, Sami Ben Ali et al.  
Torna microscaling quantization prático para camadas convolucionais, atacando ineficiências de abordagens naive.

---

### 📊 Aplicações

**Cross-Scale Transfer Learning for Depression Severity Prediction**  
http://arxiv.org/abs/2609.28430v1  
Wenjie Feng, Sahba Zojaji et al.  
Protocolo LoRA sequencial para transferência cross-lingual de PHQ-8 para HAMD-17 em transcrições clínicas.

**Shopping by Algorithm: How Agentic AI Deploys Human Heuristics**  
http://arxiv.org/abs/2609.28372v1  
Davood Wadi, Yu Ma  
Estuda como LLMs delegam decisões de compra e revela uso de heurísticas humanas como proxy para preferências.

**AnchorReasoning: Visual Grounding and Causal Reasoning in Autonomous Driving**  
http://arxiv.org/abs/2609.28366v1  
Zhipeng Bao, Wenjie Zhao et al.  
Dataset reasoning grounded visualmente para cenários de cauda longa em condução autônoma.

**Generalizable Robotic Insertion with World Models**  
http://arxiv.org/abs/2609.28258v1  
Nicklas Hansen, Iretiayo Akinola et al.  
World models para inserção robótica generalizável em configurações de alta mistura, reduzindo necessidade de policy specialization.

---

## 3. Sinal de Tendência em Pesquisa

Observa-se convergência de múltiplas frentes. Primeiro, **segurança proativa de agentes** ganha tração — a comunidade responde a agentes autônomos com avaliações multi-turn e estudos sobre comportamentos instrumentais potencialmente perigosos. Segundo, **memória e eficiência** dominam otimização de LLMs: abordagens como Memory Attention e quantização microscaling atacam custo de inferência sem sacrificar capacidades. Terceiro, **raciocínio grounded** emerge como frontier — datasets como AnchorReasoning e estudos sobre raciocínio causal em DLMs indicam interesse em conectar compreensão semântica a percepções visuais e espaciais. Finalmente, há maturação em **aplicações verticais**: tradução, saúde mental, literatura clássica mostram que LLMs estão sendo adaptados a domínios com constraints específicos, não apenas benchmarking geral.

---

## 4. Vale Ler a Fundo

**1. Shutdown Sabotage Propensities in Multi-Agent Systems**  
http://arxiv.org/abs/2609.28274v1  
Amelie Knecht et al.  
*Relevância:* Estudo empírico sobre alinhamento de agentes — crucial para entender se self-preservation emerge como subgoal instrumental em sistemas multiagente.

**2. PASTABench: Proactive Assessment of Sequential Trajectories for Agent Safety**  
http://arxiv.org/abs/2609.28197v1  
Jiapeng Sun et al.  
*Relevância:* Avança metodologia de avaliação de segurança para agentes que alteram estados reais em múltiplos passos — fronteira crítica do field.

**3. Contrastive Learning for Authorship Verification**  
http://arxiv.org/abs/2609.28471v1  
Peter Kirby et al.  
*Relevância:* Demonstra superiority de contrastive learning em tarefa de NLP com implicações forenses e de privacidade — metodologia extensível a outros domínios.

---

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*