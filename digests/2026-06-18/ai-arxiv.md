# Resumo diário de pesquisa em IA no ArXiv 2026-06-18

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-06-17 21:55 UTC

---

**1. Destaques do dia**  

Os artigos de 18‑06‑2026 revelam uma intensificação dos esforços para **tornar modelos de linguagem e agentes mais eficientes e adaptáveis em tempo de execução**. Observa‑se uma nova vaga de arquiteturas que abandonam a largura fixa dos transformers tradicionais (Variable‑Width Transformers) e introduzem *looped world models* para simulações de longo prazo com custo controlado. No campo da agentividade, o framework **VERITAS** (generator‑verifier) e o **EvolveNav** demonstram que aauto‑melhoria e a memória evolutiva podem reduzir drasticamente o número de tentativas em tarefas de navegação zero‑shot. No lado de métodos, a **distilação por prompts** (ZOPO) e a regressão de Kolmogorov para políticas de difusão aparecem como caminhos promissores para transferir conhecimento sem o peso de gradientes. Por fim, cresce o interesse em **avaliações rigorosas** — desde testes de robustez adversarial (Anthropic Fable 5 & Opus 4.8) até benchmarks de raciocínio jurídico sob o EU AI Act e datasets de disclosures financeiras (Stanford EDGAR) — sinalizando que a comunidade busca não apenas desempenho, mas **confiabilidade, segurança e conformidade regulatória**.

---

## 2. Artigos‑chave  

### 🧠 Modelos de Linguagem  

1. **[Variable‑Width Transformers](http://arxiv.org/abs/2606.18246v1)** – Autores: Zhaofeng Wu, Oliver Sieberling, Shawn Tan *et al.*  
   Propõe que camadas de transformers tenham larguras variáveis para alocar parâmetros e computação de forma adaptativa, rompendo com a prática de largura constante.  

2. **[Unintended Effects of Geographic Conditioning in Large Language Models](http://arxiv.org/abs/2606.18124v1)** – Autores: Naz Col, David M. Chan  
   Investiga como metadados de localização criam vieses regionais não intencionais em modelos conversacionais, revelando vazamentos de geografia.  

3. **[From Reasoning Traces to Reusable Modules: Understanding Compositional Generalization in Language Model Reasoning](http://arxiv.org/abs/2606.18089v1)** – Autores: Lingjing Kong, Xin Liu, Guangyi Chen *et al.*  
   Formaliza que a generalização composicional é o motor do sucesso de pipelines que combinam SFT e RL para tornar LLMs robustez na resolução de problemas.  

4. **[Learning from the Self‑future: On‑policy Self‑distillation for dLLMs](http://arxiv.org/abs/2606.18195v1)** – Autores: Yifu Luo, Zeyu Chen, Haoyu Wang *et al.*  
   Adapta a distilação on‑policy a modelos de linguagem baseados em difusão, abrindo caminho para pós‑treino efectivo de diffusers autoregressivos.  

### 🤖 Agentes e Raciocínio  

5. **[Visual Verification Enables Inference‑time Steering and Autonomous Policy Improvement (VERITAS)](http://arxiv.org/abs/2606.18247v1)** – Autores: Mingtong Zhang, Dhruv Shah  
   Introduce um framework generator‑verifier que permite a robôs ajustar políticas em tempo de inferência e aprender com feedback sem nova coleta de dados.  

6. **[EvolveNav: Proactive Preflection and Self‑Evolving Memory for Zero‑Shot Object Goal Navigation](http://arxiv.org/abs/2606.18235v1)** – Autores: Qi Chai, Wenhao Shen, Nanjie Yao *et al.*  
   Proposta de memória auto‑evolutiva com preflexão proativa que elimina repetições de erros em navegação zero‑shot.  

7. **[Looped World Models](http://arxiv.org/abs/2606.18208v1)** – Autores: Hongyuan Adam Lu, Z. L. Victor Wei, Qun Zhang *et al.*  
   Primeira arquitetura looped para world models, conciliando simulação de longo prazo com profundidade computacional controlada.  

8. **[Fixed‑Point Reasoners: Stable and Adaptive Deep Looped Transformers](http://arxiv.org/abs/2606.18206v1)** – Autores: Sajad Movahedi, Vera Milovanović, Shlomo Libo Feigin *et al.*  
   Introduce reasoners de ponto fixo em transformers looped, oferecendo estabilidade teórica e adaptabilidade para tarefas de raciocínio compositional.  

### 🔧 Métodos e Frameworks  

9. **[Zone of Proximal Policy Optimization: Teacher in Prompts, Not Gradients (ZOPO)](http://arxiv.org/abs/2606.18216v1)** – Autores: Byung‑Kwan Lee, Ximing Lu, Shizhe Diao *et al.*  
   Transfere conhecimento de um teacher grande para um student pequeno usando prompts em vez de gradientes, evitando concentração em modos afiados.  

10. **[Kolmogorov Regression for Robust Diffusion Policies](http://arxiv.org/abs/2606.18186v1)** – Autores: Lekan Molu  
    Aplica a equação backward de Kolmogorov para رفع diffusion policies ao espaço de Cameron‑Martin, eliminando drift temporal em horizontes longos.  

11. **[Ternary Mamba: Grouped Quantization‑Aware Training

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*