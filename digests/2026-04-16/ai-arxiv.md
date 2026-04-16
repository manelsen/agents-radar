# Resumo diário de pesquisa em IA no ArXiv 2026-04-16

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-04-16 02:05 UTC

---

# Resumo de Pesquisa em IA — ArXiv (16/04/2026)

---

## 1. Destaques do Dia

O dia é marcado por avanços significativos na interseção entre grandes modelos de linguagem e raciocínio estruturado. Observa-se uma clara tendência de usar LLMs para tarefas de raciocínio físico e raciocínio em ambientes multiagente, com novos benchmarks como HINTBench e GeoAgentBench avaliando capacidades até então pouco exploradas. No фронтенде de treinamento, a comunidade investiga estratégias para mitigação de esquecimento catastrófico em modelos multimodais (MAny) e otimização de política fina para equilíbrio exploração-exploração (DiPO). A aplicação de física neural a domínios reais — como sorção de metano e transferência radiativa — continua ganhando tração, assim como a segurança em sistemas autônomos com RL hierárquico. Por fim, destaca-se o crescente interesse em usar LLMs como anotadores em loops de aprendizado ativo.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**1. [Diffusion Language Models for Speech Recognition](http://arxiv.org/abs/2604.14001v1)**
Autores: Davyd Naveriani, Albert Zeyer, Ralf Schlüter et al.
*Guia abrangente para usar modelos de difusão como alternativa aos LM tradicionais em reconhecimento de voz, explorando atenção bidirecional e geração paralela.*

**2. [How Can We Synthesize High-Quality Pretraining Data?](http://arxiv.org/abs/2604.13977v1)**
Autores: Joel Niklaus, Atsuki Yamaguchi, Michal Štefánik et al.
*Estudo sistemático de 1 trilhão de tokens para identificar melhores práticas em design de prompts, modelos geradores e dados-fonte para pré-treinamento sintético.*

**3. [Adaptive Conformal Prediction for Improving Factuality of Generations by LLMs](http://arxiv.org/abs/2604.13991v1)**
Autores: Aleksandr Rubashevskii, Dzianis Piatrashyn, Preslav Nakov et al.
*Propõe predição conformal adaptativa ao prompt para fornecer garantias estatísticas sobre factualidade de saídas de LLMs.*

**4. [Robust Reward Modeling for LLMs via Causal Decomposition](http://arxiv.org/abs/2604.13833v1)**
Autores: Yunsheng Lu, Zijiang Yang, Licheng Pan et al.
*Aborde sobreajuste a pistas espúrias (como tamanho de resposta) através de decomposição causal explícita.*

**5. [Beyond Static Personas: Situational Personality Steering for LLMs](http://arxiv.org/abs/2604.13846v1)**
Autores: Zesheng Wei, Mengxiang Li, Zilei Wang et al.
*Novo paradigma de controle de personalidade dinâmica situacional, superando limitações de personas estáticas.*

---

### 🤖 Agentes e Raciocínio

**6. [HINTBench: Horizon-agent Intrinsic Non-attack Trajectory Benchmark](http://arxiv.org/abs/2604.13954v1)**
Autores: Jiacheng Wang, Jinchang Hou, Fabian Wang et al.
*Primeiro benchmark focado em riscos intrínsecos de agentes em condições benignas — dimensão subexplorada em segurança de IA.*

**7. [GeoAgentBench: A Dynamic Execution Benchmark for Tool-Augmented Agents in Spatial Analysis](http://arxiv.org/abs/2604.13888v1)**
Autores: Bo Yu, Cheng Yang, Dongyang Hou et al.
*Benchmark dinâmico para avaliar agentes LLM em fluxos de trabalho geoespaciais multi-etapa com ferramentas GIS.*

**8. [Parameter Importance is Not Static: Evolving Parameter Isolation for SFT](http://arxiv.org/abs/2604.14010v1)**
Autores: Zekai Lin, Chao Xue, Di Liang et al.
*Propõe isolamento adaptativo de parâmetros críticos durante SFT para lidar com interferência entre tarefas.*

**9. [Memory Transfer Learning: How Memories are Transferred Across Domains in Coding Agents](http://arxiv.org/abs/2604.14004v1)**
Autores: Kangsan Kim, Minki Kang, Taeil Kim et al.
*Estende utilização de memória entre domínios heterogêneos de código, aproveitando infraestrutura compartilhada como linguagens e ambientes.*

---

### 🔧 Métodos e Frameworks

**10. [MAny: Merge Anything for Multimodal Continual Instruction Tuning](http://arxiv.org/abs/2604.14016v1)**
Autores: Zijian Gao, Wangwang Jia, Xingxing Zhang et al.
*Revela que esquecimento catastrófico em MLLMs está na backbone de raciocínio linguístico e propõe estratégia de fusão para mitigação.*

**11. [DiPO: Disentangled Perplexity Policy Optimization](http://arxiv.us/2604.13902v1)**
Autores: Xiaofan Li, Ming Yang, Zhiyuan Ma et al.
*Análise completa do trade-off exploração-exploração em RLVR para LLMs, propondo otimização de perplexidade desaninhada.*

**12. [SparseBalance: Load-Balanced Long Context Training with Dynamic Sparse Attention](http://arxiv.org/abs/2604.13847v1)**
Autores: Hongtao Xu, Jianchao Tan, Yuxuan Hu et al.
*Resolve heterogeneidade severa em comprimento de sequência e sensibilidade à esparsidade durante treinamento esparso de LLMs de contexto longo.*

**13. [Hierarchical RL with Runtime Safety Shielding for Power Grid Operation](http://arxiv.org/abs/2604.14032v1)**
Autores: Gitesh Malik
*Combina RL hierárquico com shielding de segurança em tempo de execução para operação de redes elétricas.*

**14. [Gradient Descent's Last Iterate is Often (slightly) Suboptimal](http://arxiv.org/abs/2604.13870v1)**
Autores: Guy Kornowski, Ohad Shamir
*Demonstra que o último iterado de GD/SGD frequentemente converge subotimalmente, mesmo com escolhas padrão de step-size.*

---

### 📊 Aplicações

**15. [Physics-Informed Neural Networks for Methane Sorption: Cross-Gas Transfer Learning](http://arxiv.org/abs/2604.13992v1)**
Autores: Mohammad Nooraiepour, Zezhang Song, Wei Li et al.
*Integra transferência de conhecimento entre gases, colapso de ensemble sob restrições físicas e quantificação de incerteza via Monte Carlo dropout.*

**16. [BOAT: Navigating the Sea of In Silico Predictors for Antibody Design via Multi-Objective Bayesian Optimization](http://arxiv.org/abs/2604.13980v1)**
Autores: Jackie Rao, Ferran Gonzalez Hernandez, Leon Gerard et al.
*Otimização bayesiana multi-objetivo para equilibrar propriedades farmacológicas em design de anticorpos.*

**17. [Drowsiness-Aware Adaptive Autonomous Braking System based on DRL](http://arxiv.org/abs/2604.13878v1)**
Autores: Hossem Eddine Hafidi, Elisabetta De Giovanni, Teodoro Montanaro et al.
*Sistema adaptativo de freagem autônoma que responde em tempo real ao estado fisiológico de sonolência do motorista.*

**18. [Quantum Machine Learning for Colorectal Cancer Data: Anastomotic Leak Classification](http://arxiv.org/abs/2604.13951v1)**
Autores: Vojtěch Novák, Ivan Zelinka, Lenka Přibylová et al.
*Primeiro estudo comparativo de QNNs contra modelos clássicos para predição de vazamento anastomótico em dados clínicos reais.*

---

## 3. Sinal de Tendência em Pesquisa

Observa-se esta semana uma consolidação de duas tendências principais. Primeira: a comunidade está refinando LLMs para aplicações especializadas, seja por personalização situacional, anotação automática em aprendizado ativo, ou modelos de recompensa robustos. Isso sugere que a "engenharia de dados de treinamento sintético" está amadurecendo como disciplina autónoma.

Segunda tendência forte: a segurança de agentes autônomos está se expandindo de riscos externos para riscos intrínsecos (HINTBench) e de interpretabilidade de redes neurais para sistemas neuro-simbólicos verificáveis. Há também interesse crescente em combinar física e redes neurais (PINNs, Fourier-enhanced operators) para domínios como transferência radiativa e sorção de gases, indicando um retorno à modelagem baseada em princípios científicos como complemento ao aprendizado puramente data-driven.

---

## 4. Vale Ler a Fundo

1. **[How Can We Synthesize High-Quality Pretraining Data?](http://arxiv.org/abs/2604.13977v1)** — Estudo abrangente e raro sobre dimensões de design de dados sintéticos; resultados com 1 trilhão de tokens oferecem guia prático para pesquisadores de LLM.

2. **[MAny: Merge Anything for Multimodal Continual Instruction Tuning](http://arxiv.org/abs/2604.14016v1)** — Identifica causa fundamental do esquecimento catastrófico em MLLMs e oferece solução elegante; relevante para qualquer trabalho com modelos multimodais sequenciais.

3. **[HINTBench: Horizon-agent Intrinsic Non-attack Trajectory Benchmark](http://arxiv.org/abs/2604.13954v1)** — Abre novo paradigma de avaliação de segurança em agentes, focando em trajetórias inseguras mesmo em condições benignas — tema crítico à medida que sistemas multiagente se proliferam.

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*