# ArXiv AI 研究日报 2026-04-14

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-04-14 02:37 UTC

---

# ArXiv AI 研究日报

**2026年4月14日｜第12期**

---

## 📰 今日速览

今日 arXiv 投稿呈现三大亮点：**LLM 评估与可靠性**持续深化，学界开始系统研究扩散语言模型的幻觉问题（#3）、不确定性量化（#32）以及指令数据的主动选择策略（#45）；**智能体与具身推理**领域迎来多个benchmark与训练方法，Agent² RL-Bench（#6）探索 LLM 自主设计 RL 后训练流程的可能性，而针对时空幻觉的渐进式训练（#25）标志着 VLM 向复杂推理迈进一步；**垂直领域应用**百花齐放，从肽药物发现基准（#13）到低光姿态估计（#33）、法律咨询多智能体（#37），AI 正在加速渗透专业场景。此外，**模型压缩与效率优化**仍是硬需求，IceCache（#9）与 CodeQuant（#31）分别在 KV-cache 管理与 MoE 量化上取得突破。

---

## 🧠 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. LLMs Should Incorporate Explicit Mechanisms for Human Empathy**  
链接: http://arxiv.org/abs/2604.10557v1  
作者: Xiaoxing You, Qiang Huang, Jun Yu  
核心贡献：提出 LLM 应内置显式同理心机制，以在高风险人机交互场景中忠实保留人类视角。值得关注：推动 AI 从「正确性优先」向「人文关怀优先」范式转变，呼应医疗、心理等敏感领域需求。

**2. Lost in Diffusion: Uncovering Hallucination Patterns in Diffusion Large Language Models**  
链接: http://arxiv.org/abs/2604.10556v1  
作者: Zhengnan Guo, Fei Tan  
核心贡献：首个系统性研究扩散语言模型（dLLM）幻觉现象的对照实验，揭示其特有的失效模式。值得关注：dLLM 作为非自回归新范式，其可靠性问题此前被低估，本研究填补空白。

**3. IceCache: Memory-efficient KV-cache Management for Long-Sequence LLMs**  
链接: http://arxiv.org/abs/2604.10539v1  
作者: Yuzhen Mao, Qitong Wang, Martin Ester 等  
核心贡献：提出内存高效的长序列 LLM KV-cache 管理策略，缓解显存瓶颈。值得关注：在长上下文场景日益重要的背景下，直接影响部署成本与实际可用性。

**4. Instruction Data Selection via Answer Divergence**  
链接: http://arxiv.org/abs/2604.10448v1  
作者: Bo Li, Mingda Wang, Shikun Zhang 等  
核心贡献：提出「答案分歧引导选择」（ADG），基于多样本输出的几何结构筛选指令数据。值得关注：为指令微调数据工程提供可量化的筛选准则，有望提升训练效率与模型表现。

**5. Why Don't You Know? Evaluating Uncertainty Quantification in LLMs**  
链接: http://arxiv.org/abs/2604.10495v1  
作者: Maiya Goloburda, Roman Vashurin, Fedor Chernogorsky 等  
核心贡献：系统评估 LLM 不确定性量化方法的各类误差来源，厘清影响 UQ 可靠性的因素。值得关注：安全部署 LLM 的基础性问题，为后续改进提供诊断框架。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**6. Agent² RL-Bench: Can LLM Agents Engineer Agentic RL Post-Training?**  
链接: http://arxiv.org/abs/2604.10547v1  
作者: Wanyi Chen, Xiao Yang, Xu Yang 等  
核心贡献：提出 Agent² RL-Bench，评估 LLM 智能体自主设计、实现并运行完整 RL 后训练流程的能力。值得关注：探索「智能体设计智能体」的可能性，对模型对齐与能力迭代路径有深远影响。

**7. From Perception to Planning: Evolving Ego-Centric Task-Oriented Spatiotemporal Reasoning**  
链接: http://arxiv.org/abs/2604.10517v1  
作者: Xiaoda Yang, Yuxiang Liu, Shenzhou Gao 等  
核心贡献：针对具身、第一人称任务中的时空推理问题，提出融合感知与规划的学习框架。值得关注：破解 VLM 从静态理解向动态规划迁移的核心瓶颈。

**8. How Many Tries Does It Take? Iterative Self-Repair in LLM Code Generation**  
链接: http://arxiv.org/abs/2604.10508v1  
作者: Johin Johny Arimbur  
核心贡献：系统研究代码生成中迭代自修复（将执行错误反馈给模型修正）的效果，覆盖7个模型、三大家族。值得关注：揭示当前模型在自主纠错上的真实能力边界，指导实际部署策略。

**9. Thinking Fast, Thinking Wrong: Intuitiveness Modulates LLM Counterfactual Reasoning**  
链接: http://arxiv.org/abs/2604.10511v1  
作者: Yanjie He  
核心贡献：构建40个经济政策评估案例，探索「直觉性」如何影响 LLM 反事实推理表现。值得关注：揭示 LLM 在因果推理中的系统性偏差，为提升政策分析可靠性提供依据。

**10. A Progressive Training Strategy for VLMs to Counteract Spatio-Temporal Hallucinations**  
链接: http://arxiv.org/abs/2604.10506v1  
作者: Xiaoda Yang, Shuai Yang, Can Wang 等  
核心贡献：提出渐进式训练策略，专门抑制 VLM 在多图像推理中的时空幻觉（时间正反向查询性能骤降）。值得关注：直击 VLM 具身推理的核心痛点，方法可直接迁移至视频理解场景。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**11. Heterogeneous Connectivity in Sparse Networks: Fan-in Profiles, Gradient Hierarchy, and Topological Equilibria**  
链接: http://arxiv.org/abs/2604.10560v1  
作者: Nikodem Tomczak  
核心贡献：提出「轮廓化稀疏网络」（PSN），以连续非线性函数定义异质扇入配置，兼顾密集与稀疏感受野。值得关注：为神经网络架构设计提供新范式，有望启发新一代稀疏模型。

**12. WaveMoE: A Wavelet-Enhanced MoE Foundation Model for Time Series**  
链接: http://arxiv.org/abs/2604.10544v1  
作者: Shunyu Wu, Jiawei Huang, Weibin Feng 等  
核心贡献：将小波频域信息融入 MoE 框架，提升时间序列基础模型的预测能力。值得关注：频域+MoE 的组合为时序建模开辟新思路，对金融、IoT 等领域有直接价值。

**13. VidAudio-Bench: Benchmarking V2A and VT2A Generation**  
链接: http://arxiv.org/abs/2604.10542v1  
作者: Qian Zhang, Yuqin Cao, Yixuan Gao 等  
核心贡献：提出首个细粒度分类（四类音频）的视频到音频生成评估基准。值得关注：填补 V2A 评估空白，推动视频生成配套音频领域的标准化发展。

**14. CodeQuant: Unified Clustering and Quantization for Low-Precision MoE**  
链接: http://arxiv.org/abs/2604.10496v1  
作者: Xiangyang Yin, Xingyu Liu, Tianhua Xia 等  
核心贡献：通过统一聚类与量化策略解决 MoE 中异常值导致的精度损失问题。值得关注：低比特量化是落地大模型的关键，本研究直接优化 MoE 这一主流架构。

**15. Rethinking Diffusion Model from a Langevin Perspective**  
链接: http://arxiv.org/abs/2604.10465v1  
作者: Candi Zheng, Yuan Lan  
核心贡献：从 Langevin 动力学视角重构扩散模型，简化理论推导，降低学习门槛。值得关注：以统一视角整合多种扩散模型变体，为初学者提供更直觉的理论入口。

---

### 📊 应用（垂直领域、多模态、代码生成）

**16. PepBenchmark: A Standardized Benchmark for Peptide Machine Learning**  
链接: http://arxiv.org/abs/2604.10531v1  
作者: Jiahui Zhang, Rouyi Wang, Kuangqi Zhou 等  
核心贡献：统一肽药物发现领域的 ML 数据集、预处理与评估协议。值得关注：作为「第三类药物」的核心方向，标准化将加速 AI 在生物医药的落地。

**17. ReFEree: Reference-Free Evaluation for Factual Consistency in Code Summarization**  
链接: http://arxiv.org/abs/2604.10520v1  
作者: Suyoung Bae, CheolWon Na, Jaehoon Lee 等  
核心贡献：针对长代码摘要的实事求是一致性评估，提出无参考的细粒度评估方法。值得关注：填补代码生成评估中事实性校验的工具空白。

**18. EviCare: Enhancing Diagnosis Prediction with Deep Model-Guided Evidence**  
链接: http://arxiv.org/abs/2604.10455v1  
作者: Hengyu Zhang, Xuyun Zhang, Pengxiang Zhan 等  
核心贡献：基于电子病历的诊断预测框架，引导模型关注深度证据以识别新颖且临床重要的病症。值得关注：解决 LLM 在医疗诊断中「固守历史诊断、忽视新病症」的核心问题。

**19. From Query to Counsel: Structured Reasoning with Multi-Agent Framework for Legal Consultation**  
链接: http://arxiv.org/abs/2604.10470v1  
作者: Mingfei Lu, Yi Zhang, Mengjia Wu 等  
核心贡献：构建 JurisCQAD 大规模法律咨询数据集

---
*本日报由 [agents-radar](https://github.com/manelsen/agents-radar) 自动生成。*