# Resumo diário de pesquisa em IA no ArXiv 2026-09-18

> Fonte: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 artigos | Gerado em: 2026-09-17 22:36 UTC

---

# Resumo de Pesquisa em IA — ArXiv (2026-09-18)

---

## 1. Destaques do Dia

O campo de agentes de IA está amadurecendo rapidamente, com novos trabalhos focando em **coordinação multiagente**, **interfaces amigáveis a agentes** e **gestão de memória de longo prazo**. Na frente de modelos de linguagem,观察到 a decomposição de tokenização (BPE vs. UnigramLM) está sendo analisada sob novas perspectivas, enquanto **modelos de Mixture-of-Experts (MoE)** continuam a receber atenção com trabalhos sobre poda de experts e roteamento adaptativo. Aplicações práticas emergem em domínios como **saúde**, **robótica** e **ciência de materiais**, demonstrando crescente maturidade da tecnologia. Destaca-se também a convergência de métodos de alinhamento baseados em preferências com abordagens teóricas mais rigorosas.

---

## 2. Artigos-Chave

### 🧠 Modelos de Linguagem

**1. Objective vs. Search: Decomposing What Makes a Good Tokeniser**
http://arxiv.org/abs/2609.19145v1
Autores: Ahmetcan Yavuz, Clara Meister, Tiago Pimentel
Análise sistemática dos dois eixos ortogonais em tokenização (objetivo de otimização vs. procedimento de busca), oferecendo novo entendimento sobre por que diferentes algoritmos performam diferentemente em modelos modernos.

**2. A Zeroth-Order Paradigm for LLM Preference Alignment**
http://arxiv.org/abs/2609.19144v1
Autores: Peter Chen, Xi Chen, Wotao Yin et al.
Propõe abordagem alternativa para alinhamento de preferências que lida melhor com pares de preferência de margem pequena, superando limitações de métodos diretos atuais.

**3. How Model Growth, Recursion, and Boundary Operators Influence Scaling Exponents**
http://arxiv.org/abs/2609.19107v1
Autores: Zixi Chen, Akshay Vegesna, Samip Dahal et al.
Demonstra que intervenções arquiteturais podem modificar expoentes de scaling, levando a melhorias exponenciais de performance — resultado contra-intuitivo com implicações profundas para o design de modelos.

**4. Infinite-Parameter LLMs: Generating and Adapting Weights from Live Data**
http://arxiv.org/abs/2609.18842v1
Autores: Jinli Hu, Ross M. Clarke, Yichuan Zhang et al.
Extensão de MoE onde pesos são gerados e adaptados dinamicamente a partir de dados vivos, representando paradigma inovador para modelos com parâmetros virtualmente infinitos.

---

### 🤖 Agentes e Raciocínio

**5. Cognitive Extensions for Dual-Process Language Agents: Memory and Self-Reflection**
http://arxiv.org/abs/2609.19128v1
Autores: João Meneses dos Santos, Arlindo L. Oliveira
Introduz extensões modulares de memória e auto-reflexão para o agente SwiftSage, atacando fragilidades em ambientes interativos de longo horizonte.

**6. Affora: A Design System for Agent-Friendly Interfaces**
http://arxiv.org/abs/2609.19125v1
Autores: Jin Gao
Sistema de design que preserva workflows humanos enquanto clarifica ações e estados de tarefa para leitura por máquinas — solução prática para o problema de interfaces "human-centric".

**7. Flag Game: A Toy Model for Mechanistic Swarm Interpretability**
http://arxiv.org/abs/2609.19124v1
Autores: Elizabeth Pavlova, Hidenori Tanaka
Modelo mínimo para estudar formação e difusão de crenças em coletivos de agentes, com implicações para alinhamento e segurança de sistemas multiagente.

**8. Compositional Policy Violations: When Step-Level Compliance Fails In Agentic AI Workflows**
http://arxiv.org/abs/2609.18820v1
Autores: Ashwini Kurady, Sri Sai Charith Grandhi, Rajesh Gupta et al.
Identifica que políticas organizacionais reais são frequentemente compostas e não podem ser verificadas por classificadores step-scoped — problema crítico para IA agentic em contextos regulados.

**9. CERA-MoA: Co-Evolving Routing Mechanisms with Continually Learning LLM Agents**
http://arxiv.org/abs/2609.18779v1
Autores: Jiaxuan Jiang, Liyuan He, Zhixuan Fang
Propõe integração de roteamento de queries e fine-tuning de agentes como processos co-evolutivos, superando limitações de tratamento separado.

---

### 🔧 Métodos e Frameworks

**10. Higher-order pruning of experts in mixture-of-experts language models**
http://arxiv.org/abs/2609.18916v1
Autores: Alex M. Tseng, Prannay Kaul, Luca Zancato et al.
Método de poda que considera dependências entre experts, superando abordagens independentes que assumem contiguidade de tokens.

**11. Double descent is the principle of least action**
http://arxiv.org/abs/2609.19076v1
Autores: Congzhou M Sha
Explica o fenômeno de double descent via mecânica estatística, relacionando trajetória de treinamento com princípio variacional de menor ação.

**12. Preventing Model Collapse: A Fisher-Rao Perspective on the Dynamics of Training with Synthetic Data**
http://arxiv.org/abs/2609.18878v1
Autores: Matteo Marchi, João Pedro Silvestre, Bahman Gharesifard et al.
Analisa condições para colapso de modelo em treinamento recursivo com dados sintéticos, oferecendo perspectiva geométrica (Fisher-Rao) para diagnóstico e prevenção.

**13. ASLEval: Measuring Privacy Exposure Displacement in LLM Agent Sessions**
http://arxiv.org/abs/2609.18864v1
Autores: Guosen Wu, Huizhen Huang, Guoxiong Long et al.
Introduz métrica para avaliar exposição de privacidade ao longo de sessões completas de agentes, superando avaliações locais que falham em detectar vazamentos não intencionais.

---

### 📊 Aplicações

**14. ScienceIDE: Turning World's Scientific Codebase into Agent Learnable Environments**
http://arxiv.org/abs/2609.19134v1
Autores: Hejia Geng, Zesen Huang, Haoyang Li et al.
Transforma repositórios de código científico em ambientes de aprendizado para agentes, atacando problema de fragmentação de toolchains e convenções de domínio.

**15. rMuscle: Robotic Muscle Memory for Efficient Vision-Language-Action Model Inference**
http://arxiv.org/abs/2609.19104v1
Autores: Kaijun Zhou, Zhiyang Li, Le Chen et al.
Aplica técnicas de "muscle memory" para acelerar inferência de modelos VLA em robótica de fábrica, permitindo deployment prático em estações de trabalho estruturadas.

**16. Evidence-Grounded Agentic Formulation Development in an Autonomous Laboratory**
http://arxiv.org/abs/2609.19099v1
Autores: Michael M. Craig, Riley J. Hickman, Yingshan Ma et al.
Sistema agentic (Andromeda 2) que raciocina sobre evidências experimentais para desenvolver formulações de liberação de drogas, demonstrando potencial em automação de P&D farmacéutico.

**17. Prepared Or Unprepared? Evaluating Healthcare Workforce Readiness for Clinical AI Adoption in Nigeria**
http://arxiv.org/abs/2609.19096v1
Autores: Abbas M. Rabiu, Abdulrazaq A. Zubair, Um-mulkhairi Ibrahim et al.
Estudo transversal que avalia prontidão da força de trabalho nigeriana para adoção de IA clínica, destacando lacunas críticas em países de baixa e média renda.

**18. ECtHR-NPD: A Benchmark for Predicting Non-Pecuniary Damage Awards**
http://arxiv.org/abs/2609.18908v1
Autores: Yanyi Pu, Damian A. Gonzalez-Salzberg, Zheng Yuan et al.
Primeiro benchmark para predição de indenizações não-pecuniárias no Tribunal Europeu de Direitos Humanos — lacuna significativa em sistemas legais de IA.

---

## 3. Sinal de Tendência em Pesquisa

Observa-se convergência de três tendências principais:

1. **Agentes como cidadãos de primeira classe**: A pesquisa está se movendo de modelos estáticos para agentes que operam em ambientes dinâmicos, com ênfase em interfaces legíveis por máquinas, coordenação multiagente e gestão de políticas composicionais.

2. **MoE como paradigma dominante**: Tanto em linguística quanto em arquiteturas de agentes, a modularidade através de mixture-of-experts está sendo explorada extensivamente — desde poda de experts até roteamento adaptativo e co-evolução de agentes.

3. **Dados sintéticos e seus perigos**: O reconhecimento de que treinamento com dados sintéticos pode causar colapso de modelo está gerando novos frameworks teóricos (Fisher-Rao, princípio de ação mínima) para entender e mitigar esse fenômeno.

O domínio de aplicação que mais se destaca é **robótica e automação científica**, sugerindo maturação da IA agentic além de chatbots.

---

## 4. Vale Ler a Fundo

**1. Cognitive Extensions for Dual-Process Language Agents: Memory and Self-Reflection in Interactive Environments**
http://arxiv.org/abs/2609.19128v1
Trabalho fundamental para quem estuda agentes de linguagem em ambientes interativos de longo horizonte. A arquitetura modular de memória e auto-reflexão é elegante e generalizável.

**2. Infinite-Parameter LLMs: Generating and Adapting Weights from Live Data**
http://arxiv.org/abs/2609.18842v1
Paradigma potencialmente transformador que desafia noções tradicionais de "parâmetros" em modelos de linguagem. Leitura essencial para pesquisadores de scaling e arquiteturas eficientes.

**3. Preventing Model Collapse: A Fisher-Rao Perspective on the Dynamics of Training with Synthetic Data**
http://arxiv.org/abs/2609.18878v1
Com a escassez crescente de dados humanos de alta qualidade, entender e prevenir colapso de modelo é crítico. A perspectiva geométrica oferecida é inovadora e pode guiar práticas de treinamento futuras.

---

*Total de artigos processados: 50 | Data: 2026-09-18*

---
*Este resumo é gerado automaticamente por [agents-radar](https://github.com/manelsen/agents-radar).*