# OpenClaw 生态日报 2026-04-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-04-14 02:37 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-04-14
**项目仓库：** github.com/openclaw/openclaw
**数据范围：** 过去 24 小时

---

## 1. 今日速览

2026年4月14日，OpenClaw 保持极高活跃度，过去24小时内共产生500条 Issue 更新和500条 PR 更新。社区持续聚焦于 Telegram 语音消息转录、Volcengine 模型兼容性、Discord 斜杠命令行为异常等反复出现的回归问题。今日发布了 v2026.4.14-beta.1 版本，重点改进了 Telegram 论坛话题名称学习和 Markdown 渲染安全性。340个 PR 处于待合并状态，表明项目迭代速度维持高位，但同时也存在较多积压待审的 PR。

---

## 2. 版本发布

### v2026.4.14-beta.1

**发布时间：** 2026-04-14

**主要变更：**

| 类别 | 变更内容 | 关联 PR |
|------|----------|---------|
| **功能增强** | Telegram/论坛话题名称学习：从 Telegram 论坛服务消息中学习话题名称，并在 Agent 上下文、提示元数据和插件钩子元数据中展示人类可读的话题名称 | #65973 |
| **安全修复** | UI/Chat：使用 markdown-it 替换 marked.js，以防止恶意构造的 Markdown 导致的安全问题 | — |

**迁移注意事项：**
此版本为 Beta 版本，建议在非生产环境测试。若使用 Telegram 论坛功能，话题名称现在将以人类可读形式呈现。

---

### v2026.4.12

**发布时间：** 2026-04-12

**主要变更：**

OpenClaw `2026.4.12` 是一个广泛的质量导向版本，聚焦于插件加载、记忆和梦境可靠性、新增本地模型选项以及更流畅的飞书配置路径。

**关键改进：**

- QA/Lab：新增 Convex 支持的 Telegram 凭证池化租赁机制以及 `openclaw qa credentials` 管理员命令

---

## 3. 项目进展

以下为今日合并/关闭的重要 Pull Requests：

| PR 编号 | 标题 | 状态 | 贡献者 | 影响范围 |
|---------|------|------|--------|----------|
| [#66180](https://github.com/openclaw/openclaw/pull/66180) | fix: include apiKey in codex provider catalog to unblock models.json loading | **已合并** | hoyyeva | Codex 扩展 |
| [#65766](https://github.com/openclaw/openclaw/pull/65766) | fix(config): auto-heal unrecognized keys during config load to prevent gateway crash | **已合并** | openperf | 配置系统 |
| [#65827](https://github.com/openclaw/openclaw/pull/65827) | fix: align timestampOptsFromConfig test with resolveUserTimezone UTC fallback | **已合并** | sliverp | 测试覆盖 |
| [#66236](https://github.com/openclaw/openclaw/pull/66236) | Agents: clarify local model context preflight | 待合并 | ImLukeF | 本地模型 |
| [#66160](https://github.com/openclaw/openclaw/pull/66160) | fix(litellm): honor --custom-base-url in non-interactive onboard | 待合并 | dongs0104 | LiteLLM 适配器 |
| [#66022](https://github.com/openclaw/openclaw/pull/66022) | fix(media): fail closed on attachment canonicalization | 待合并 | eleqtrizit | 媒体处理 |
| [#66148](https://github.com/openclaw/openclaw/pull/66148) | fix(feishu): remove streaming card update throttle to prevent duplicates | 待合并 | SARAMALI15792 | 飞书频道 |
| [#66271](https://github.com/openclaw/openclaw/pull/66271) | Control UI: avoid chat flicker on session reload | 待合并 | Schnitzel | Web UI |
| [#66278](https://github.com/openclaw/openclaw/pull/66278) | fix(gateway): align OpenAI chat completions tool protocol | 待合并 | Lellansin | 网关核心 |
| [#66275](https://github.com/openclaw/openclaw/pull/66275) | fix(gateway): include configured custom provider models | 待合并 | neeravmakwana | 模型目录 |
| [#65554](https://github.com/openclaw/openclaw/pull/65554) | Jdc4429 media support v2 - Updated to work with latest version 2026.4.11 | 待合并 | jdc4429 | WebChat 媒体 |
| [#65044](https://github.com/openclaw/openclaw/pull/65044) | [codex] Add ClawModeler sidecar and CLI workflow | 待合并 | nfredmond | CLI/Codex |
| [#56538](https://github.com/openclaw/openclaw/pull/56538) | fix: use TextDecoder for proper GBK encoding support on Windows | 待合并 | knightplat-blip | Windows 支持 |
| [#10356](https://github.com/openclaw/openclaw/pull/10356) | TTS: add Typecast provider (emotion presets, audio tuning, Asian language voices) | 待合并 | hmmhmmhm | 语音合成 |

**推进的关键能力：**

- **配置容错性提升**：自动修复配置文件中的无效键值，避免网关崩溃
- **飞书体验优化**：移除流式卡片更新节流限制，解决长回复重复/截断问题
- **Control UI 稳定性**：修复会话重载时的聊天闪烁问题
- **Windows 中文支持**：使用 TextDecoder 正确处理 GBK 编码
- **模型兼容性**：Codex 扩展的模型加载问题得到修复

---

## 4. 社区热点

以下 Issues 和 PRs 获得最多关注（按评论数排列）：

### 热点 Issues

**1. #26322 — OAuth token refresh race condition**（21条评论）
🔗 https://github.com/openclaw/openclaw/issues/26322

**问题描述：** 多个 Agent 共享单一 OAuth 认证配置时，并发 token 刷新尝试导致竞态条件，后续请求因 token 已被使用而失败。

**社区诉求：** 用户期待在多 Agent 共享认证场景下实现 token 刷新的同步机制，避免不必要的故障转移。

---

**2. #64799 — Volcengine Coding Plan 模型解析失败**（19条评论）
🔗 https://github.com/openclaw/openclaw/issues/64799

**问题描述：** 在 macOS 26.4.1 上，重新安装配置 OpenClaw 2026.4.10 后，Volcengine Coding Plan 因模型引用 `volcengine-plan/ark-code-latest` 被识别为未知模型而失败。

**社区诉求：** 用户需要在 macOS 环境下正常使用火山引擎 Coding Plan 功能。

---

**3. #17101 — Telegram 语音消息未转录**（14条评论）
🔗 https://github.com/openclaw/openclaw/issues/17101

**问题描述：** Telegram 语音消息（.ogg Opus 编码）未被自动转录，Agent 接收为原始音频附件而非文本。

**持续关注度：** 此问题自2月15日报告以来持续活跃，表明转录功能存在系统性缺陷。

---

**4. #31486 — image 工具不支持 openclaw.json 中的自定义 providers**（13条评论）
🔗 https://github.com/openclaw/openclaw/issues/31486

**问题描述：** image 工具无法识别 `openclaw.json` 中配置的自定义 providers，即使这些 providers 包含支持图像输入的模型。

---

**5. #62496 — Telegram DM 语音笔记转录静默失败**（13条评论）
🔗 https://github.com/openclaw/openclaw/issues/62496

**问题描述：** 在 OpenClaw `2026.4.5` 中，Telegram DM 语音消息以原始 `<media:audio>` 占位符形式到达，完全跳过转录流程。

---

### 热点 PRs

**#66236 — Agents: clarify local model context preflight**（今日新增）
🔗 https://github.com/openclaw/openclaw/pull/66236

**概述：** 明确本地模型上下文窗口预检消息，当运行使用小上下文窗口的真正本地端点时提供友好提示，文档化 32k 警告/16k 阻止阈值。

---

**#65044 — [codex] Add ClawModeler sidecar and CLI workflow**
🔗 https://github.com/openclaw/openclaw/pull/65044

**概述：** 新增 ClawModeler 本地优先交通规划辅助工具和 OpenClaw CLI 工作流，包含 Python 包和 CLI 包装器。

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

### 高严重性（已标注 Fix PR）

| Issue | 描述 | 严重程度 | 相关 Fix PR | 状态 |
|-------|------|----------|-------------|------|
| [#65611](https://github.com/openclaw/openclaw/issues/65611) | manual-cdp attachOnly profile 未检测到活跃 CDP 会话 | Regression | — | Open |
| [#65990](https://github.com/openclaw/openclaw/issues/65990) | 托管 Chrome 失败：CDP websocket 无法连接，手动 CDP 正常 | Regression | — | Open |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding Agent 从不完成任何任务（2026.4.2 及之前版本正常） | Regression | — | Open |
| [#65701](https://github.com/openclaw/openclaw/issues/65701) | Telegram provider 每次响应发送重复消息 | Regression | — | Open |

### 中等严重性

| Issue | 描述 | 严重程度 | 相关 Fix PR |
|-------|------|----------|-------------|
| [#64799](https://github.com/openclaw/openclaw/issues/64799) | Volcengine Coding Plan 模型未知 | Regression | — |
| [#48479](https://github.com/openclaw/openclaw/issues/48479) | google-vertex 在 2026.3.13 使用 API-key 认证而非 ADC/Bearer | Regression | — |
| [#65603](https://github.com/openclaw/openclaw/issues/65603) | Azure Foundry GPT 模型请求被拒绝（schema/tool payload） | Regression | — |
| [#64238](https://github.com/openclaw/openclaw/issues/64238) | OpenClaw 2026.4.9 报告 "Unknown model: qwen/qwen3.6-plus"，2026.4.5 正常 | Regression | — |
| [#58986](https://github.com/openclaw/openclaw/issues/58986) | Discord 斜杠命令只返回 "✅ Done." 而非实际输出 | Regression | — |
| [#45589](https://github.com/openclaw/openclaw/issues/45589) | Discord 频道10分钟无响应：Gemini 超时 + 故障转移失败 + 通道阻塞 | Behavior | — |

### 低严重性（已有 Fix）

| Issue | 描述 | 相关 Fix PR | 状态 |
|-------|------|-------------|------|
| [#66148](https://github.com/openclaw/openclaw/issues/66148) | 飞书流式卡片长回复产生重复/截断消息 | #66148 | Fix PR 待合并 |
| [#66271](https://github.com/openclaw/openclaw/issues/66271) | Control UI 聊天闪烁，用户消息短暂消失后重现 | #66271 | Fix PR 待合并 |

### 回归问题统计

今日报告的 Regression Bug 占比显著，共识别出 **23个** 标记为 regression 的 Issues，涉及范围包括：

- 模型识别/加载（8个）
- 频道功能异常（7个）
- 认证/凭证问题（4个）
- 工具执行失败（4个）

---

## 6. 功能请求与路线图信号

### 用户提出的功能需求

| Issue | 需求描述 | 评论数 | 纳入可能性 |
|-------|----------|--------|------------|
| [#34644](https://github.com/openclaw/openclaw/issues/34644) | 嵌入式 Agent LLM 请求超时可配置（当前硬编码15秒） | 10 | 中（需权衡复杂度） |
| [#22358](https://github.com/openclaw/openclaw/issues/22358) | 添加子 Agent 完成后的扩展钩子（post_subagent_complete） | 8 | 高（符合架构演进方向） |
| [#55342](https://github.com/openclaw/openclaw/issues/55342) | OpenClaw 技能的行为信誉机制 | 8 | 讨论中（安全相关） |
| [#30215](https://github.com/openclaw/openclaw/issues/30215) | 支持 Amazon Bedrock API Key（Bearer Token）认证 | 7 | 高（已有 PR 方向） |
| [#10356](https://github.com/openclaw/openclaw/pull/10356) | 新增 Typecast TTS provider（情感预设、音频调优、亚洲语言语音） | — | 高（PR 已提交） |

### 路线图信号分析

1. **多模态能力持续完善**：图像工具自定义 providers 支持、媒体处理 v2、WebChat 媒体套件等 PR 表明多模态是核心投资方向。

2. **平台适配深化**：RISC-V64 支持、Windows GBK 编码、飞书流式卡片优化等反映平台覆盖扩展需求。

3. **开发者体验优化**：本地模型上下文预检提示、配置自动修复、CLI 工作流增强等表明 DX 改进是重点。

4. **安全与可靠性**：OAuth 竞态条件修复、附件规范化、边界文件读取区分等体现了安全加固意识。

---

## 7. 用户反馈摘要

### 用户痛点提炼

**1. Telegram 语音消息转录持续失效**
> *"Telegram voice messages (`.ogg` with Opus codec) are received by OpenClaw but are not automatically transcribed."*

- 多名用户（#17101、#62496、#63677）反馈语音消息无法转录
- 用户已正确配置 `tools.media.audio.enabled: true` 和 Whisper 服务
- 影响飞书、WhatsApp 等其他频道的语音处理

**2. 模型兼容性问题阻碍日常使用**
> *"After reinstalling and reconfiguring OpenClaw 2026.4.10 on macOS, Volcengine Coding Plan fails before reply"*

- Volcengine、Qwen、Ollama 等非主流模型问题频发
- 用户在升级版本后遭遇回归，期待更平滑的模型支持体验

**3. Discord 交互体验退化**
> *"Discord slash commands like `/status`, `/help`, `/whoami` etc. return only '✅ Done.' as an ephemeral response"*

- 斜杠命令功能在 v2026.3.31 后退化
- 用户依赖这些命令进行系统管理和诊断

**4. 配置复杂性带来的困惑**
> *"openclaw nodes status and openclaw nodes list does not sync"*

- 配置管理和状态同步问题影响用户信心
- `exec` 工具环境变量传递失败（#31583）影响工作流集成

### 用户满意点

- 飞书设置路径在 2026.4.12 中得到优化
- Telegram 论坛话题名称学习功能获得正面反馈
- Web UI 媒体支持范围扩大（JPEG/PNG/GIF/WebP/SVG/BMP/MP3/WAV/FLAC/M4A/AAC/Opus/WebM）

---

## 8. 待处理积压

### 长期未解决的高影响力 Issues

| Issue | 创建日期 | 最后更新 | 评论数 | 阻塞状态 |
|-------|----------|----------|--------|----------|
| [#17101](https://github.com/openclaw/openclaw/issues/17101) | 2026-02-15 | 2026-04-13 | 14 | **2个月未解决** — Telegram 语音转录 |
| [#22358](https://github.com/openclaw/openclaw/issues/22358) | 2026-02-21 | 2026-04-13 | 8 | **接近2个月** — 子 Agent 完成钩子 |
| [#26322](https://github.com/openclaw/openclaw/issues/26322) | 2026-02-25 | 2026-04-13 | 21 | **近2个月** — OAuth 竞态条件 |
| [#40089](https://github.com/openclaw/openclaw/issues/40089) | 2026-03-08 | 2026-04-13 | 7 | **1个月+** — Gateway 重启后服务死锁 |

### 需维护者关注的 PR 积压

| PR | 状态 | 提交时间 | 优先级 |
|----|------|----------|--------|
| [#65044](https://github.com/openclaw/openclaw/pull/65044) | 待合并 | 2026-04-11 | 高 — ClawModeler 新功能 |
| [#10356](https://github.com/openclaw/openclaw/pull/10356) | 待合并 | 2026-02-06 | 中 — Typecast TTS（等待评审） |
| [#65554](https://github.com/openclaw/openclaw/pull/65554) | 待合并 | 2026-04-12 | 中 — 媒体支持 v2 |
| [#66278](https://github.com/openclaw/openclaw/pull/66278) | 待合并 | 2026-04-14 | 高 — OpenAI 工具协议对齐 |

### 关键建议

1. **Telegram 语音转录问题** 需要系统性排查，涉及多个相关 Issue（#17101、#62496、#63677），建议统一根因分析。

2. **340个待合并 PR** 存在积压，建议按功能模块分组评审，提高合并效率。

3. **Regression Bug** 占比过高，建议加强版本发布前的回归测试覆盖，特别是模型加载、认证流程、媒体处理等高频变更区域。

---

**报告生成时间：** 2026-04-14
**数据来源：** GitHub OpenClaw/openclaw 仓库活动统计

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-04-14
**数据范围：** 过去 24 小时
**覆盖项目：** 13 个

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**高速分化与多极竞争**阶段。以 OpenClaw 为首的"Claw 系列"占据生态核心位置，衍生出 PicoClaw、NanoClaw、NullClaw、ZeroClaw、IronClaw 等至少 7 个分支项目，呈现"一核多星"的社区扩散格局。与此同时，Hermes Agent 以"everywhere release"战略强势切入多平台赛道，CoPaw/QwenPaw 完成品牌迁移并获得阿里系资源加持，NanoBot 以记忆/Dream 机制形成差异化能力，Moltis 则在架构重构与多通道支持上持续深耕。整体来看，生态创新活跃但存在显著的**重复造轮子**现象——多项目独立开发 Telegram/飞书/Discord 适配器、记忆系统、工具执行层，尚未形成可复用的共享基座。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新增/活跃） | PRs（新增/活跃） | PRs（合并/关闭） | 待合并 PR | Release | 健康度 |
|------|-------------------|-----------------|-----------------|-----------|---------|--------|
| **OpenClaw** | 500 | 500 | — | 340 | v2026.4.14-beta.1 | 🟡 高活跃高积压 |
| **Hermes Agent** | 50 (43/7) | 50 (40/10) | 10 | 40 | **v0.9.0** | 🟢 高速迭代 |
| **IronClaw** | 44 (38/6) | 50 (41/9) | 9 | 41 | 无（staging） | 🟢 企业导向 |
| **NanoBot** | 56 (18/38) | 57 (30/27) | 27 | 30 | 无 | 🟢 管道顺畅 |
| **CoPaw/QwenPaw** | 41 (29/12) | 50 (31/19) | 19 | 31 | v1.1.1-beta.2 | 🟢 品牌迁移期 |
| **ZeroClaw** | 20 (17/3) | 50 (29/21) | 21 | 29 | 无 | 🟢 安全聚焦 |
| **Moltis** | 5 (0/5) | 18 (1/17) | **18** | 1 | **2 个版本** | 🟢 **卓越** |
| **PicoClaw** | 5 | 43 (32/11) | 11 | 32 | 无 | 🟢 安全+多渠道 |
| **LobsterAI** | 2 | 20 (7/13) | 13 | 7 | v2026.4.13 | 🟢 稳定迭代 |
| **NanoClaw** | 4 | 12 (8/4) | 4 | — | 无 | 🟢 功能扩展 |
| **NullClaw** | 3 | 5 (5/0) | 0 | 5 | 无 | 🟢 快速响应 |
| **TinyClaw** | 0 | 0 | 0 | — | — | 🔴 静止 |
| **ZeptoClaw** | 0 | 0 | 0 | — | — | 🔴 静止 |

**关键发现：**
- **Moltis** 是今日效率标杆——18 个 PR 合并、2 个版本发布、所有 Bug 当日修复
- **OpenClaw** 体量最大但积压严重，340 个待合并 PR 考验评审效率
- **TinyClaw/ZeptoClaw** 已进入实质停滞状态，不建议新用户投入

---

## 3. OpenClaw 在生态中的定位

### 3.1 社区规模横向对比

OpenClaw 以 **500 条 Issue/PR 更新量**占据绝对领先位置，是第二名 Hermes Agent（50条）的 **10 倍**。其开放 Issue 总数已超 11,000 条，反映出极高的采用度，但也带来 Issue 管理危机——今日 Hermes Agent Issue 数突破 1,000 条时已引发社区警觉，而 OpenClaw 的体量问题更为严峻。

### 3.2 技术路线差异

| 维度 | OpenClaw | Hermes Agent | NanoBot | CoPaw/QwenPaw |
|------|----------|-------------|---------|---------------|
| **核心架构** | 模块化插件系统 | Fast 框架 + 多平台适配器 | 记忆优先（Dream 机制） | Agent + Skills 自进化 |
| **平台覆盖** | Telegram/飞书/Discord/WhatsApp 等 | **Termux/Android/iMessage/WeChat**（v0.9.0 新增） | 主要面向 API 开发者 | 飞书/钉钉/微信企业 |
| **安全策略** | 附件规范化、Markdown 安全替换 | 命令白名单、路径校验 | PII 脱敏（PDF/图片） | localhost API auth bypass 修复 |
| **记忆系统** | 上下文窗口管理 | 轻量会话 | **Dream 记忆整合**（事件驱动演进中） | 向量记忆 + 文件索引 |
| **版本节奏** | Beta 持续发布（周级） | 大版本发布（v0.9.0 含 269 PRs） | 无明确版本号 | Beta 版本迭代 |

### 3.3 OpenClaw 优势与挑战

**优势：**
- 社区规模最大，插件生态最丰富（340 个待合并 PR 中包含多模态、媒体处理等前沿功能）
- Telegram 论坛话题名称学习（#65973）是细分场景的深耕亮点
- 配置自动修复（#65766）体现工程成熟度

**挑战：**
- PR 积压严重，核心贡献者评审压力巨大
- Regression Bug 占比过高（今日 23 个），版本质量控制需加强
- Issue 总量失控，参照 Hermes Agent 社区反应，11,000+ 开放 Issue 已是潜在风险信号

---

## 4. 共同关注的技术方向

以下需求在多个项目中**同步涌现**，代表行业共识方向：

### 4.1 多渠道/多平台扩展

| 项目 | 具体诉求 |
|------|----------|
| **Hermes Agent** | QQ Bot（#7616）、WeChat 适配器、Nextcloud Talk（#9323）、iMessage |
| **PicoClaw** | Mattermost 渠道（#1586） |
| **ZeroClaw** | IMAP polling fallback（#5712）、Mattermost WebSocket（#5602） |
| **OpenClaw** | 飞书多实例（#2493）、WebChat 媒体支持 |
| **NanoClaw** | Matrix E2EE 通讯（#1624） |

**行业信号：** 各项目独立开发 10+ 种通讯渠道适配器，重复工作量大，亟需通用 channel abstraction 层。

### 4.2 安全加固成为显性需求

| 项目 | 安全动作 |
|------|----------|
| **OpenClaw** | markdown-it 替换 marked.js（防止 XSS）、附件规范化（#66022） |
| **ZeroClaw** | S0 命令策略绕过漏洞（#5698/#5702）、ClawSafe 扫描报告（66 Critical） |
| **NanoClaw** | PDF/图片 PII 脱敏（fail-closed）、容器权限修复（#1763） |
| **PicoClaw** | 策略评估系统（#2509）、shell 输出净化（#2378）、Agent Shield 集成（#2313） |
| **CoPaw** | localhost API auth bypass 修复（#2840） |

**行业信号：** 安全从"事后修补"转向"设计内建"，WASM 沙箱（ZeroClaw #5231）、策略评估系统（PicoClaw #2509）是技术演进方向。

### 4.3 记忆与上下文管理

| 项目 | 具体能力 |
|------|----------|
| **NanoBot** | Dream 事件驱动整合（#3122）、heartbeat token 消耗治理（#2375 单次 560k tokens） |
| **OpenClaw** | 本地模型上下文预检（#66236） |
| **Moltis** | 缓存 token 显示（#699）、会话归档（#702） |
| **CoPaw** | 文件操作回滚（#3346）、记忆子目录索引修复（#3347） |
| **IronClaw** | CachedSettingsStore 写穿缓存（#2425） |

**行业信号：** 记忆系统从"被动存储"向"主动整合"演进，事件驱动、自动压缩、成本感知是下一阶段关键词。

### 4.4 本地模型与成本优化

| 项目 | 具体动作 |
|------|----------|
| **NanoBot** | 模型路由（#3121）、token 使用记录（#2932） |
| **OpenClaw** | 本地模型上下文窗口支持、Ollama 兼容性修复 |
| **Moltis** | 本地 Whisper/TTS 配置 UI（#700） |
| **CoPaw** | OpenCode provider、本地模型发现 |
| **ZeroClaw** | cheap provider 智能路由（#2298） |

**行业信号：** 成本控制从"厂商侧定价"向"客户端路由"下沉，多模型动态选择将成为标配能力。

---

## 5. 差异化定位分析

### 5.1 功能侧重差异

| 项目 | 核心定位 | 典型功能 |
|------|----------|----------|
| **OpenClaw** | 通用全功能平台 | 插件生态、Telegram/飞书深度集成 |
| **Hermes Agent** | 多平台"everywhere" | 移动端（Termux/Android）、WeChat/iMessage |
| **IronClaw** | 企业级多租户 | RBAC/SSO（待实现）、admin skill 共享、MCP 工具路由 |
| **NanoBot** | 记忆驱动 Agent | Dream 机制、事件驱动记忆整合 |
| **CoPaw/QwenPaw** | 自进化 AI | 自我纠错 Agent、自进化技能（#2773） |
| **Moltis** | 开发者工具 | XMPP 通道（历时2月）、Voicebox TTS、架构重构 |
| **ZeroClaw** | 安全与可观测性 | ClawSafe 扫描、WASM 沙箱、OTEL tracing |
| **LobsterAI** | 企业飞书集成 | 商业化导向、网易有道背景 |
| **PicoClaw** | 安全优先 | 策略评估、Agent Shield、路径校验 |
| **NullClaw** | Cron 自动化 | 定时任务调度引擎（#783） |

### 5.2 目标用户分层

```
企业级/规模化部署
├── IronClaw（多租户、RBAC、管理面板）
├── LobsterAI（网易系企业用户）
└── ZeroClaw（WASM 插件、商业部署）

开发 者 / 自托管
├── OpenClaw（插件开发者）
├── PicoClaw（安全敏感场景）
└── Hermes Agent（多平台探索者）

个人用户 / 轻量场景
├── NanoBot（记忆管理）
├── NanoClaw（容器化部署）
└── CoPaw/QwenPaw（中文生态）

CLI/极客用户
├── Moltis（XMPP、架构重构）
└── NullClaw（Cron 任务）
```

### 5.3 技术架构差异

| 架构特征 | 代表项目 |
|----------|----------|
| **Rust 优先** | PicoClaw、NullClaw（Zig）、ZeroClaw、IronClaw（Rust/WASM） |
| **Node.js/TypeScript** | OpenClaw（主要）、NanoClaw、CoPaw |
| **Python** | Moltis（部分）、NanoBot |
| **Go** | （本轮报告未见，潜在空白） |
| **多语言混合** | Hermes Agent（Node + 多端适配器）、LobsterAI（Electron + Go/OpenClaw） |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 阶段 | 项目 | 特征 |
|------|------|------|
| **🚀 高速迭代期** | OpenClaw、Hermes Agent、CoPaw/QwenPaw | 日均 50+ PRs，版本周更，功能快速试错 |
| **📈 功能扩展期** | NanoBot、IronClaw、ZeroClaw | 日均 20-50 PRs，聚焦核心能力建设 |
| **⚙️ 质量巩固期** | Moltis、PicoClaw、LobsterAI | 日均 10-20 PRs，架构重构与稳定性提升 |
| **🐢 维护期** | NanoClaw、NullClaw | 功能推进与 Bug 修复并行，规模较小 |
| **💀 停滞期** | TinyClaw、ZeptoClaw | 过去 24 小时零活动 |

### 6.2 成熟度信号

| 信号 | 项目 | 解读 |
|------|------|------|
| **版本发布频率** | Moltis（2/日）、LobsterAI（周更） | 发布流程成熟 |
| **Bug 响应时效** | Moltis（当日修复）、NullClaw（24h Fix PR） | 维护团队响应积极 |
| **大版本里程碑** | Hermes Agent（v0.9.0 含 269 PRs/487 commits） | 具备大型协同能力 |
| **Issue 管理危机** | OpenClaw（11,000+）、Hermes Agent（1,000+） | 规模带来治理挑战 |
| **PR 积压预警** | OpenClaw（340 待合并）、IronClaw（41 待合并） | 评审吞吐量不足 |

---

## 7. 值得关注的趋势信号

### 7.1 从社区反馈提炼的趋势

**趋势一：安全将成为下一代 AI Agent 的核心竞争力**

- ZeroClaw 的 S0 命令策略绕过漏洞（#5698）引发社区关注，ClawSafe 扫描报告揭示 66 个 Critical 级别问题
- PicoClaw 引入完整策略评估系统（#2509），从"配置式安全"向"声明式策略"演进
- NanoClaw 实现 PII 脱敏的 fail-closed 架构
- **对开发者建议：** 在架构设计阶段即嵌入安全沙箱思维，警惕"功能优先、安全靠后"的路径依赖

**趋势二：多模态与渠道整合从"有"向"好"演进**

- 各项目普遍具备 Telegram/飞书/Discord 支持，但"稳定性"和"细节体验"成为分化点
- 飞书集成问题（CoPaw #1403 去重、PicoClaw #2493 多实例、OpenClaw #66148 流式卡片）是高频痛点
- Web UI 成为用户最强诉求（Hermes Agent #501，12 条评论），但多数项目尚未正视
- **对开发者建议：** 渠道能力"广度"竞争已趋饱和，"深度体验"（去重、断线重连、错误恢复）将是下一阶段差异化方向

**趋势三：记忆系统从"存储"向"智能整合"跃迁**

- NanoBot 的 heartbeat 消耗 560k tokens/次（#2375）揭示记忆管理的成本失控风险
- Dream 机制从定时触发改为事件驱动（#312

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
## 📅 日期：2026-04-14

---

## 1. 今日速览

过去24小时，NanoBot 项目保持极高的开发活跃度，共处理 **113 项操作**（Issues 56条 + PRs 57条），其中 **38 个 Issues 已关闭**，**27 个 PRs 已合并/关闭**。社区提交了多个高质量 PR，涵盖 Dream 记忆触发机制优化、SSE 流式响应支持、模型路由等重要功能。当前待合并 PR 达 **30 个**，表明功能开发管道顺畅。整体项目健康度良好，无重大阻塞性问题，但存在部分用户报告的回归问题（如 v0.1.4.post6 响应速度下降）仍待解决。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 合并/关闭的重要 PRs

| PR # | 标题 | 类型 | 说明 |
|------|------|------|------|
| [#2988](https://github.com/HKUDS/nanobot/pull/2988) | fix(gitstore): use separate git dir | Bug Fix | 将 git 数据从 `workspace/.git` 迁移至 `workspace/.nanobot/git/`，完全避免与用户自有 git 仓库冲突 |
| [#3119](https://github.com/HKUDS/nanobot/pull/3119) | fix(cron): respect deliver flag | Bug Fix | 修复 `deliver: false` 时 cron 任务仍输出消息的问题 |
| [#3104](https://github.com/HKUDS/nanobot/pull/3104) | feat: add hook after dream completion | Feature | 新增 Dream 完成后钩子接口，支持将记忆保存至外部存储（如 Lark Docs） |
| [#2707](https://github.com/HKUDS/nanobot/pull/2707) | Feat/first small pr | Documentation | 添加俄语文档入口 |
| [#2113](https://github.com/HKUDS/nanobot/pull/2113) | feat(web_search): support multiple search providers | Enhancement | WebSearchTool 支持多搜索提供商自动回退 |
| [#2394](https://github.com/HKUDS/nanobot/pull/2394) | fix(context): coalesce consecutive messages | Bug Fix | 修复连续相同 role 消息导致的 LLM 错误 |
| [#2650](https://github.com/HKUDS/nanobot/pull/2650) | fix(telegram): split long messages | Bug Fix | 防止 Telegram 流式传输时消息过长错误 |

### 待合并的热门 PRs

| PR # | 标题 | 类型 | 说明 |
|------|------|------|------|
| [#3122](https://github.com/HKUDS/nanobot/pull/3122) | feat: trigger Dream on consolidation archive | Feature | **重要** - Dream 记忆整合改为事件驱动，存档时自动触发，保留 2 小时 cron 作为兜底 |
| [#3101](https://github.com/HKUDS/nanobot/pull/3101) | feat(api): add SSE streaming support | Feature | `/v1/chat/completions` 支持 SSE 流式响应 |
| [#3121](https://github.com/HKUDS/nanobot/pull/3121) | feat(agent): add model routing support | Feature | 通过 AgentHookContext 支持动态模型路由 |
| [#2932](https://github.com/HKUDS/nanobot/pull/2932) | feat(providers): record LLM token usage | Enhancement | 记录 LLM token 使用量至 `token_usage_YYYY-MM-DD.jsonl` |
| [#3026](https://github.com/HKUDS/nanobot/pull/3026) | refactor(config): provider list format | Refactor | Provider 配置支持列表格式，便于多端点配置 |
| [#3021](https://github.com/HKUDS/nanobot/pull/3021) | fix(memory): prevent Dream edit_file corruption | Bug Fix | 防止本地模型 garble 参数导致 SOUL.md/USER.md 膨胀 |
| [#3030](https://github.com/HKUDS/nanobot/pull/3030) | feat(channels): Support Web and iOS App | Feature | 新增 Web 渠道，支持浏览器聊天界面 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 状态 | 热度分析 |
|---------|------|--------|------|----------|
| [#2375](https://github.com/HKUDS/nanobot/issues/2375) | [Bug] Heartbeat session history causes ENORMOUS token usage | 11 | Closed | **最高优先级** - 用户报告 heartbeat 每30分钟累积日志，导致单次调用消耗 560k tokens |
| [#2760](https://github.com/HKUDS/nanobot/issues/2760) | Retry amplification risk: stacked app+SDK retries can triple upstream load | 10 | Closed | 应用层 + SDK 层重试叠加，可能导致上游负载放大 3 倍 |
| [#2185](https://github.com/HKUDS/nanobot/issues/2185) | [regression] Upgrade nanobot from 0.1.4 to 0.1.4post5 breaks gemini-3-flash-preview | 8 | Open | **回归问题** - 升级后 gemini-3-flash-preview 无法使用 |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) | [documentation] local ollama config - getting 404 page not found | 6 | Open | 本地 Ollama 配置文档问题，网关未监听配置端口 |
| [#3070](https://github.com/HKUDS/nanobot/issues/3070) | [feature request] New Feature: 模型路由 | 2 | Open | **功能请求** - 用户希望实现类似 OpenRouter 的模型路由，根据任务复杂度自动选择性价比模型 |

### 热点分析

**最核心痛点**：`#2375` 揭示了 heartbeat 机制在高频任务场景下的 token 消耗失控问题，11 条评论显示这是影响实际使用的关键问题。

**新兴需求**：`#3070` 模型路由功能已有 PR #3121 实现，表明社区对成本优化功能有强烈需求。

**稳定性隐患**：`#2713` 报告 v0.1.4.post6 响应速度从 1s 降至 3min，该问题仍处于 Closed 状态但可能未完全解决。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重程度 | Issue # | 标题 | 状态 | Fix PR |
|----------|---------|------|------|--------|
| 🔴 Critical | [#2375](https://github.com/HKUDS/nanobot/issues/2375) | Heartbeat token 消耗失控 (560k/request) | Closed | - |
| 🔴 Critical | [#2713](https://github.com/HKUDS/nanobot/issues/2713) | v0.1.4.post6 响应速度下降 180x | Closed | - |
| 🟠 High | [#2760](https://github.com/HKUDS/nanobot/issues/2760) | 重试放大风险 | Closed | - |
| 🟠 High | [#2763](https://github.com/HKUDS/nanobot/issues/2763) | Retry-After 被忽略 | Open | - |
| 🟠 High | [#2868](https://github.com/HKUDS/nanobot/issues/2868) | exec 工具强制使用 bash (Windows) | Closed | - |
| 🟡 Medium | [#2185](https://github.com/HKUDS/nanobot/issues/2185) | Gemini-3-flash-preview 回归 | Open | - |
| 🟡 Medium | [#2542](https://github.com/HKUDS/nanobot/issues/2542) | message 工具 chat_id 错误导致错误回复 | Closed | - |
| 🟡 Medium | [#2562](https://github.com/HKUDS/nanobot/issues/2562) | Telegram 确认反应残留 | Closed | - |
| 🟡 Medium | [#3021](https://github.com/HKUDS/nanobot/pull/3021) | Dream edit_file 导致文件膨胀 | Open (PR) | Yes |

### 回归问题提醒

**[#2713](https://github.com/HKUDS/nanobot/issues/2713)** - 用户报告 post6 版本响应速度从 1 秒恶化至 3 分钟，虽然 Issue 已关闭但未明确修复方案，建议确认是否存在未合并的回归 PR。

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue # | 功能描述 | PR 状态 | 纳入可能性 |
|---------|----------|---------|------------|
| [#2984](https://github.com/HKUDS/nanobot/issues/2984) | **自动上下文压缩** - 达到阈值时自动压缩而非手动管理 | 无 | 高 - 核心体验改进 |
| [#3070](https://github.com/HKUDS/nanobot/issues/3070) | **模型路由** - 根据任务复杂度自动选择模型 | [#3121](https://github.com/HKUDS/nanobot/pull/3121) Open | 已实现 |
| [#2782](https://github.com/HKUDS/nanobot/issues/2782) | Agent Skills 客户端 Logo | 无 | 中 - 生态合作 |
| [#3030](https://github.com/HKUDS/nanobot/pull/3030) | **Web/iOS 渠道** | [#3030](https://github.com/HKUDS/nanobot/pull/3030) Open | 已实现 |
| [#2972](https://github.com/HKUDS/nanobot/pull/2972) | **Web UI** - 完整 Web 管理界面 | [#2972](https://github.com/HKUDS/nanobot/pull/2972) Open | 已实现 |

### 路线图信号

1. **事件驱动架构**：`#3122` 将 Dream 触发从定时改为事件驱动，这是架构层面的重要演进
2. **多渠道扩展**：Web/iOS 渠道支持表明项目正从 CLI 工具向多端平台发展
3. **成本优化**：Token 使用记录 (#2932) 和模型路由 (#3121) 表明成本控制将成为下一阶段重点

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 痛点描述 | 影响用户数 |
|------|----------|------------|
| 定时任务累积 | 每30分钟 heartbeat 累积日志，单次消耗 560k tokens | 所有高频任务用户 |
| 本地模型兼容 | Ollama 本地配置复杂，文档不清晰 | 本地部署用户 |
| Windows 支持 | exec 工具强制使用 bash，无法在 Windows 原生运行 | Windows 用户 |
| 安装依赖 | ARM 平台缺失 `oauth-cli-kit`、`python-olm` 依赖 | ARM/Linux 用户 |
| 网络隔离环境 | liteLLM 首次启动需外网获取 model cost map | 企业内网用户 |

### 用户满意点

- Telegram 渠道整体稳定，社区贡献了多个 Bug 修复
- WebSearchTool 多提供商回退功能提升了鲁棒性
- 俄语、中文等国际化文档覆盖良好

### 典型反馈案例

> **#2375** - "Everytime the agent runs a heartbeat task (every 30min), it persists the session in `heartbeat.jsonl`. I have a setup that checks my email every 30min, that accumulated over 600 lines of logs... And everytime my agent runs the heartbeat, it consumes **560k tokens** in ONE go."

> **#2713** - "在同一个环境下使用相同的api，使用v0.1.4.post6响应速度慢（单次对话3min左右返回），使用post4及之前版本响应速度正常（单次对话1s左右返回）"

---

## 8. 待处理积压

### 长期未响应的 Issues (>7天无更新)

| Issue # | 标题 | 创建日期 | 最后更新 | 优先级 |
|---------|------|----------|----------|--------|
| [#2185](https://github.com/HKUDS/nanobot/issues/2185) | Gemini-3-flash-preview 回归 | 2026-03-17 | 2026-04-13 | 🟠 High |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) | Ollama 本地配置 404 | 2026-03-27 | 2026-04-14 | 🟡 Medium |
| [#3074](https://github.com/HKUDS/nanobot/issues/3074) | API 会话消息推送 | 2026-04-12 | 2026-04-13 | 🟡 Medium |
| [#3047](https://github.com/HKUDS/nanobot/issues/3047) | Dream 内存整合问题 | 2026-04-11 | 2026-04-14 | 🟠 High |

### 建议维护者关注

1. **#2185** - 已存在近一个月且有 8 条评论的回归问题，需确认是否已知晓
2. **#2713** - 性能回归问题已关闭但用户可能仍有困扰，建议确认修复状态
3. **#3047** - 已有对应 PR #3122，建议优先合并以解决 Dream 架构问题

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 新增/活跃 | 18 | - |
| Issues 关闭 | 38 | ↑ |
| PRs 待合并 | 30 | ↑ |
| PRs 已合并/关闭 | 27 | ↑ |
| 热门讨论 (评论>5) | 4 条 | - |
| 待处理积压 (>7天) | 4 条 | ↓ |

---

*本报告基于 2026-04-14 GitHub 数据自动生成*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期：** 2026-04-14
**数据来源：** NousResearch/hermes-agent GitHub 仓库
**数据周期：** 过去 24 小时

---

## 1. 今日速览

Hermes Agent 过去 24 小时保持极高活跃度：共处理 **50 条 Issues**（43 条新开/活跃，7 条关闭）和 **50 条 PRs**（40 条待合并，10 条已合并/关闭）。项目于昨日（4 月 13 日）正式发布 **v0.9.0 "everywhere release"**，新增对移动端（Termux/Android）、iMessage、WeChat 等平台的支持，合并了 269 个 PR 和 487 个提交，标志着项目在多平台扩展上迈出重要一步。但值得注意的是，当前开放 Issues 已突破 **1000 条**（#7335），积压问题引发社区讨论。整体来看，项目代码推进迅速，但 Issue 管理和响应速度面临压力。

---

## 2. 版本发布

### 🎉 v2026.4.13 — Hermes Agent v0.9.0

| 维度 | 数据 |
|------|------|
| 发布日期 | 2026-04-13 |
| 自上一版本（v0.8.0）以来 | 487 commits · 269 merged PRs · 167 resolved issues |
| 代码变更 | 493 files · +63,281 insertions · 24 contributors |

**版本主题：** "The everywhere release" —— Hermes 正式进军移动端与更多即时通讯平台。

**核心新功能：**
- **Termux/Android 支持**：Hermes 可在 Android 设备上通过 Termux 运行
- **iMessage 集成**：新增 Apple iMessage 平台适配器
- **WeChat 支持**：新增微信/WeChat 适配器
- **Fast 框架集成**：底层架构升级，响应速度提升

**破坏性变更 / 迁移注意事项：**
- 从 v0.8.0 升级时，运行 `hermes update` 可能导致 `package-lock.json` 局部重写（见 Issue #4408，建议手动检查 lock 文件状态）
- Nix 包用户需注意 `fastapi` 依赖在 flake 构建中可能缺失（见 Issue #9305）
- Web Dashboard 用户升级后需确认 Gateway 在线状态（见 Issue #9313）

🔗 [Release 页面](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.13)

---

## 3. 项目进展

过去 24 小时共 **10 条 PRs 合并/关闭**，以下是关键合并项：

### 已合并 PRs

| PR # | 标题 | 类型 | 意义 |
|------|------|------|------|
| [#9320](https://github.com/NousResearch/hermes-agent/pull/9320) | feat(web): add context window support to dashboard config | 功能 | Web Dashboard 现可显示并覆盖模型上下文窗口大小，提升配置可见性 |
| [#9319](https://github.com/NousResearch/hermes-agent/pull/9319) | fix(streaming): prevent duplicate Telegram replies when stream task is cancelled | Bugfix | 修复 Telegram 流式模式下消息被重复发送的问题 |
| [#9309](https://github.com/NousResearch/hermes-agent/pull/9309) | fix: correct GPT-5 family context lengths in fallback defaults | Bugfix | 修正 GPT-5 Codex 系列模型上下文窗口（从 128k 纠正为 400k tokens） |
| [#1549](https://github.com/NousResearch/hermes-agent/pull/1549) | feat(browser): /browser connect — attach browser tools via CDP | 功能 | 新增 `/browser connect` 命令，可通过 Chrome DevTools Protocol 连接实时浏览器，显著增强浏览器自动化能力 |
| [#9311](https://github.com/NousResearch/hermes-agent/pull/9311) | fix: include telegram dependency in termux bundle | Bugfix | 确保 Termux 打包中包含 Telegram 依赖，Android 用户可正常使用 Telegram Gateway |
| [#9324](https://github.com/NousResearch/hermes-agent/pull/9324) | fix: add missing os import in web_server.py | Bugfix | 修复 OAuth 状态检查页面崩溃（NameError） |
| [#9322](https://github.com/NousResearch/hermes-agent/pull/9322) | fix: explicit api_key should override pool credential for custom providers (#9315) | Bugfix | 修复自定义 Provider 共享 base_url 时 API Key 被错误覆盖的严重 Bug |

### 待合并 PRs（40 条）

以下为高价值、功能性强的待合并 PR：

- **#8747** — [fix(gateway): validate file:// media paths](https://github.com/NousResearch/hermes-agent/pull/8747)：安全修复，阻止路径遍历攻击
- **#9118** — [feat(gateway): Feishu auto-thread and topic-based session routing](https://github.com/NousResearch/hermes-agent/pull/9118)：为国内用户新增飞书自动线程隔离
- **#7616** — [feat: add QQ Bot platform adapter (Official API v2)](https://github.com/NousResearch/hermes-agent/pull/7616)：新增 QQ 机器人支持
- **#9323** — [feat(gateway): add Nextcloud Talk bot adapter](https://github.com/NousResearch/hermes-agent/pull/9323)：自托管 Nextcloud Talk 机器人
- **#8879** — [feat: Add StepFun provider support](https://github.com/NousResearch/hermes-agent/pull/8879)：新增阶跃星辰模型提供商
- **#4692** — [Feat/ink refactor](https://github.com/NousResearch/hermes-agent/pull/4692)：用 Ink (React) 重构 TUI，体验大幅升级
- **#9070** — [feat(plugins): add OpenClaw-style hook lifecycle execution](https://github.com/NousResearch/hermes-agent/pull/9070)：增强插件钩子系统

---

## 4. 社区热点

### 评论最多的 Issues

| Issue # | 标题 | 评论数 | 👍 | 核心诉求 |
|---------|------|--------|-----|---------|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) | **[Feature] Web UI Gateway — Local Browser-Based Interface** | 12 | 1 | 用户强烈要求本地 Web UI（类似 Claude Artifacts），已有 12 条讨论，社区呼声极高 |
| [#7335](https://github.com/NousResearch/hermes-agent/issues/7335) | More than 1000 open issues | 9 | 0 | 开放 Issue 突破 1000 大关，社区担忧增长失控，寻求管理策略 |
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | [Bug] Error: Response truncated due to output length limit | 3 | 0 | 长文本生成时频繁被截断，影响 CLI/网关使用体验 |
| [#4408](https://github.com/NousResearch/hermes-agent/issues/4408) | package.json and package-lock.json out of sync | 3 | 1 | 升级后 lock 文件不一致，导致仓库状态变脏 |
| [#7966](https://github.com/NousResearch/hermes-agent/issues/7966) | Gateway startup session suspension compares datetime to float | 3 | 0 | Gateway 启动时会话挂起功能因类型比较错误被跳过 |

### 热点分析

**最热功能请求：Web UI Gateway（#501）**

这是全列表中评论最多的 Issue（12 条），反映出用户的核心诉求：**Hermes 目前已支持 CLI、Telegram、Discord、WhatsApp、Slack、Home Assistant 等交互渠道，但唯独缺少一个本地浏览器 Web UI**。竞争对手（如 Claude）已有 Artifacts 等富文本渲染能力，用户希望在本地运行一个浏览器界面，同时获得流式响应、代码渲染等能力。该功能可能成为下一版本（v0.9.x 或 v1.0）的重点方向。

**Issue 管理危机：#7335**

开放 Issues 突破 1000 条引发社区担忧。有用户引用 OpenClaw 已超 11,000 条开放 Issues 作为反面教材，呼吁建立 Issue 增长控制机制。维护者需考虑加强 Issue 标签化、里程碑管理和定时清理机制。

---

## 5. Bug 与稳定性

以下按严重程度排列今日报告的 Bug：

### 🔴 高优先级（影响核心功能/安全）

| Issue # | 标题 | 严重性 | 已有 Fix PR? |
|---------|------|--------|-------------|
| [#9318](https://github.com/NousResearch/hermes-agent/issues/9318) | Auxiliary client falls back to "no-key-required" when per-task custom base_url is set but api_key is empty | 高 — 可能导致 API Key 泄漏或认证失败 | 否 |
| [#9315](https://github.com/NousResearch/hermes-agent/issues/9315) | Custom provider API key incorrectly overridden by base_url matching | 高 — 多 Provider 场景下 Key 被错误覆盖 | ✅ [#9322](https://github.com/NousResearch/hermes-agent/pull/9322) 已合并 |
| [#9313](https://github.com/NousResearch/hermes-agent/issues/9313) | Web Dashboard shows "Gateway not online" after 0.9.0 upgrade | 高 — 升级后 Web UI 无法连接 Gateway | 否 |
| [#9314](https://github.com/NousResearch/hermes-agent/issues/9314) | Deleted sessions reappear in Web Dashboard when navigating | 中 — 数据一致性问题 | 否 |
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | Response truncated due to output length limit | 高 — 长文本生成被截断 | 否 |
| [#8783](https://github.com/NousResearch/hermes-agent/issues/8783) | WeixinAdapter media send methods drop files due to signature mismatch | 中 — 微信图片/文档发送失败 | ✅ [#9304](https://github.com/NousResearch/hermes-agent/pull/9304) 待合并 |

### 🟡 中优先级

| Issue # | 标题 | 描述 | 已有 Fix PR? |
|---------|------|------|-------------|
| [#6153](https://github.com/NousResearch/hermes-agent/issues/6153) | Telegram start_polling failed | Telegram 轮询冲突处理 | 社区用户提供 patch |
| [#7966](https://github.com/NousResearch/hermes-agent/issues/7966) | Gateway datetime/float comparison error on startup | 会话挂起功能被跳过 | 否 |
| [#9298](https://github.com/NousResearch/hermes-agent/issues/9298) | Backup breaks if pre-1980 timestamped files included | 备份工具处理旧文件时崩溃 | 否 |
| [#9071](https://github.com/NousResearch/hermes-agent/issues/9071) | CLI status bar shows `ctx --` when LCM context engine active | 上下文长度显示异常 | ✅ [#9211](https://github.com/NousResearch/hermes-agent/issues/9211) 已关闭 |
| [#9305](https://github.com/NousResearch/hermes-agent/issues/9305) | Nix package: missing fastapi + web dashboard frontend not built | Nix 用户无法使用 Web Dashboard | 否 |
| [#9283](https://github.com/NousResearch/hermes-agent/issues/9283) | `hermes auth add openai-codex` skips auth.json import | Codex 用户被迫使用设备码认证 | 否 |
| [#9290](https://github.com/NousResearch/hermes-agent/issues/9290) | background_process_notifications=off still injects synthetic SYSTEM messages | 配置失效，用户仍收到后台通知 | 否 |
| [#9299](https://github.com/NousResearch/hermes-agent/issues/9299) | CLI: Enter key inserts newline instead of submitting (Ghostty) | 终端兼容性 Bug | ✅ [#9321](https://github.com/NousResearch/hermes-agent/pull/9321) 待合并 |

### 🟢 低优先级 / 已解决

| Issue # | 标题 | 状态 |
|---------|------|------|
| [#4408](https://github.com/NousResearch/hermes-agent/issues/4408) | package.json and package-lock.json out of sync | 已关闭 |
| [#9071](https://github.com/NousResearch/hermes-agent/issues/9071) | CLI status bar shows ctx -- | 已关闭 |
| [#9211](https://github.com/NousResearch/hermes-agent/issues/9211) | Plugin context engines missing context_length | 已关闭 |
| [#8825](https://github.com/NousResearch/hermes-agent/issues/8825) | Add Kimi/Moonshot China to Providers | 已关闭 |

---

## 6. 功能请求与路线图信号

今日有多个新功能请求值得关注，部分已有对应 PR：

### 很可能纳入下一版本的功能

| Issue/PR # | 功能 | 合理性 | 纳入可能性 |
|-----------|------|--------|-----------|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) | Web UI Gateway（浏览器本地界面） | 社区讨论最热（12 条评论），竞品已有，需求明确 | ⭐⭐⭐ 高 |
| [#9286](https://github.com/NousResearch/hermes-agent/issues/9286) | Auto-resume session context from state.db on Gateway startup | 解决会话丢失痛点，功能清晰 | ⭐⭐⭐ 高 |
| [#9301](https://github.com/NousResearch/hermes-agent/issues/9301) | i18n support for Web Dashboard | v0.9.0 新增 Web Dashboard，国际化是自然需求 | ⭐⭐⭐ 高 |
| [#7616](https://github.com/NousResearch/hermes-agent/pull/7616) | QQ Bot platform adapter | PR 已有，待 review，符合"everywhere"主题 | ⭐⭐ 中 |
| [#8879](https://github.com/NousResearch/hermes-agent/pull/8879) | StepFun provider support | 新增国产模型支持，需求真实 | ⭐⭐ 中 |
| [#9323](https://github.com/NousResearch/hermes-agent/pull/9323) | Nextcloud Talk bot adapter | 自托管友好，符合隐私趋势 | ⭐⭐ 中 |
| [#4692](https://github.com/NousResearch/hermes-agent/pull/4692) | Ink (React) TUI refactor | 技术升级，体验提升显著 | ⭐⭐ 中 |

### 路线图信号

1. **多平台扩展仍是主线**：v0.9.0 的"everywhere"主题延续，QQ Bot、Nextcloud Talk、MAX (VK Teams) 等新平台适配器正在推进中
2. **Web UI 即将成为标配**：社区对 Web UI Gateway 的强烈诉求，加上 Web Dashboard 刚在 v0.9.0 引入，下一版本很可能补全浏览器界面能力
3. **国际化提上日程**：Web Dashboard i18n 请求出现，说明项目正从技术用户向更广泛用户群扩展

---

## 7. 用户反馈摘要

从今日 Issues 评论和内容中提炼的真实用户声音：

### 痛点

- **「长文本被截断很烦」**：Issue #7237 用户反映用 Hermes CLI 或 Telegram 聊天时，稍长的回复就会被 `Response truncated due to output length limit` 打断，体验割裂
- **「升级后 Web Dashboard 连不上 Gateway」**：Issue #9313 用户升级到 0.9.0 后 Web UI 报错 "Gateway not online"，虽然 Gateway 进程在跑但 UI 连不上
- **「Telegram 斜杠命令找不到我自定义的 skills」**：Issue #8110 用户发现通过 `skills.external_dirs` 添加的外部技能，CLI 能用，但 Telegram 斜杠命令列表里找不到
- **「Ctrl+D 误触就退出」**：Issue #8478 用户习惯 Unix shell 行为（缓冲区非空时删除字符），但 Hermes 直接发 EOF，容易误退

### 使用场景

- **企业/开发者场景**：

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期：** 2026-04-14  
**项目仓库：** github.com/sipeed/picoclaw  
**数据统计：** 过去24小时内新增/活跃 Issues 4 条、关闭 1 条；新增/活跃 PRs 32 条、合并/关闭 11 条

---

## 1. 今日速览

PicoClaw 今日保持极高的开发活跃度，共处理 **43 条 PR 更新**（合并/关闭 11 条），Issues 层面也涌现多个功能增强提案。项目在 **安全加固**（shell 输出清理、路径校验强化、策略评估系统）和 **多渠道支持**（Mattermost、飞书多实例）方向持续推进。值得关注的是，一系列 Bug Fix 已进入审查阶段（exec 工具误拦截、Opus 音频解码缺陷、Provider 404 容错），社区对多用户隔离和企业级集成的需求明显。整体项目健康度良好，维护者响应及时。

---

## 2. 版本发布

**今日无新版本发布。** 最近 Release 信息为空，建议关注 PR #2511（updater 重试机制优化），该变更旨在修复版本检查时的瞬态网络失败，或为后续版本发布铺路。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR 编号 | 类型 | 标题 | 状态 | 意义 |
|---------|------|------|------|------|
| **#2509** | ✨ 新功能 | Add policy evaluation system with documentation and examples | ✅ CLOSED | 引入 pkg/policy 包，支持工具/意图控制列表及自定义规则，强化运行时安全策略 |
| **#2481** | ♻️ 重构 | refactor(config): make config.Channel to multiple instance support | ✅ CLOSED | 配置支持多渠道实例化，为飞书多账号等场景奠定基础 |
| **#2495** | ✨ 新功能 | feat(agent): /clear clears seahorse DB | ✅ CLOSED | 修复 /clear 命令在 seahorse 上下文管理器下遗留旧消息的问题 |
| **#2507** | 🐞 Bug | bug fix for allowFrom contains empty string | ✅ CLOSED | 修复 allowFrom 配置空字符串导致的潜在安全问题 |
| **#2508** | 🐞 Bug | fix some bugs (weixin config, channel manager) | ✅ CLOSED | 多项小缺陷修复，提升渠道稳定性 |

### 显著推进的 Open PRs

- **#1586** — 添加 **Mattermost 渠道支持**，完善网关稳定性，预计将大幅拓展企业协作场景集成能力
- **#2313** — 集成 **Agent Shield** 安全套件，推进多用户支持与技能白名单机制
- **#2503** — 重构 AgentLoop 支持**并行消息处理**，提升吞吐量
- **#2511** — 修复 updater 在版本检查时的瞬态失败，增强自动更新健壮性

---

## 4. 社区热点

### 热门 Issues 讨论

**🔴 高关注 Issue**

| Issue | 类型 | 标题 | 状态 | 热度 |
|-------|------|------|------|------|
| **#1042** | 🐞 Bug | [BUG] exec工具的 guardCommand 方法误拦截合法命令 | 🟡 OPEN | 3 条评论 |
| **链接** | [sipeed/picoclaw#1042](https://github.com/sipeed/picoclaw/issues/1042) | **背景：** `restrict_to_workspace=true` 时，exec 工具的正则匹配过于简单粗暴，将 `curl -s "wttr.in/Beijing?T"` 中的 `Beijing?T` 误识别为相对路径 `../../../../Beijing?T`，导致天气查询等正当命令被安全机制拦截。反映出安全校验逻辑需更精细化设计。 |

**🟡 功能提案**

| Issue | 类型 | 标题 | 状态 | 价值 |
|-------|------|------|------|------|
| **#2499** | ✨ Feature | Secure third-party Pico WS access + versioned compatibility policy | 🟡 OPEN | 为浏览器扩展、第三方桌面客户端提供安全可持续的 WS 集成路径 |
| **链接** | [sipeed/picoclaw#2499](https://github.com/sipeed/picoclaw/issues/2499) | **背景：** 当前 WS 流程主要服务于内置 WebUI，第三方集成时认证边界和安全态势存在隐患，提案建议制定明确的版本兼容策略 |
| **#2493** | ✨ Feature | Allow Multiple Feishu Applications via Separate Config Directories | 🟡 OPEN | 支持在同一环境中运行多个飞书应用，满足多账号管理需求 |

### 热门 PR 动向

- **#2378** — `fix(shell): sanitize terminal-facing output and harden path checks`  
  对应 Issue #1042 的根因修复，正在审查中，有望彻底解决误拦截问题。  
  链接：[sipeed/picoclaw#2378](https://github.com/sipeed/picoclaw/pull/2378)

- **#2504** — `fix(audio): copy Opus frame data in OGG decoder`  
  修复 Discord 语音传输中的缓冲区复用 Bug，已进入审查。  
  链接：[sipeed/picoclaw#2504](https://github.com/sipeed/picoclaw/pull/2504)

---

## 5. Bug 与稳定性

### 今日报告/处理的 Bug（按严重程度）

| 优先级 | Issue/PR | 描述 | 影响 | 状态 | 是否有 Fix |
|--------|----------|------|------|------|------------|
| 🔴 高 | #2378 | exec 工具路径校验误判合法命令（如 `curl wttr.in/Beijing`） | 正常工具调用被安全拦截 | OPEN | 有 Fix PR 待合并 |
| 🔴 高 | #2504 | OGG Opus 解码器缓冲区复用导致音频帧损坏 | Discord 语音传输损坏 | OPEN | 有 Fix PR |
| 🟡 中 | #2394 | Provider 返回 404 时缺乏 fallback 机制 | 模型不可用时用户体验差 | OPEN | 有 Fix PR |
| 🟡 中 | #2393 | GetModelConfig 模型名称匹配失败时无法按 ID 回退 | 配置灵活性受限 | OPEN | 有 Fix PR |
| 🟡 中 | #2392 | 钉钉缺失 session_webhook 时错误信息不清晰 | 调试困难 | OPEN | 有 Fix PR |
| 🟢 低 | #2507/#2508 | allowFrom 空字符串、weixin 配置等小问题 | 边缘场景稳定性 | CLOSED | 已修复 |

**回归风险提示：** 暂无新增回归报告。

---

## 6. 功能请求与路线图信号

### 明确的 Feature Requests

| Issue | 标题 | 需求来源 | 实现可能性 | 对应 PR |
|-------|------|----------|------------|---------|
| **#2499** | Secure third-party Pico WS access + 版本兼容策略 | 企业/第三方开发者 | ⭐⭐⭐ 中高 | 暂无 |
| **#2493** | 飞书多应用支持 | 企业多租户场景 | ⭐⭐⭐ 高 | #2481 已打基础 |
| **#1586** | Mattermost 渠道支持 | 社区贡献 | ⭐⭐⭐⭐ 很高 | 已 Open |
| **#2313** | 多用户支持、安全加固、技能白名单 | 企业安全需求 | ⭐⭐⭐ 中 | 已 Open |
| **#2484** | membench LLM-as-Judge 评估模式 | 评测需求 | ⭐⭐⭐ 高 | 已 Open |
| **#2503** | AgentLoop 并行消息处理 | 性能优化 | ⭐⭐⭐ 高 | 已 Open |

### 路线图信号
从 PR 和 Issue 分布判断，项目近期重点方向为：
1. **安全能力提升**：策略评估系统（#2509）、Agent Shield 集成（#2313）、shell 输出净化（#2378）
2. **多渠道/多实例扩展**：飞书多账号（#2493）、Mattermost（#1586）
3. **配置灵活性**：多渠道实例化（#2481 已合并）
4. **稳定性加固**：updater 重试（#2511）、provider 容错（#2394）

---

## 7. 用户反馈摘要

从 Issues 评论和 PR 描述中提炼的关键痛点：

| 痛点 | 场景 | 用户声音 |
|------|------|----------|
| **exec 工具误拦截** | 天气查询、API 调用等含路径参数的命令被阻断 | Issue #1042 报告者：方法正则过于简单，`curl wttr.in/Beijing` 被误判为越界路径 |
| **API 404 错误缺乏容错** | 使用 deepseek-v3.1/glm4.7 时模型不可用直接报错 | Issue #2479：Telegram 报错 "404 page not found"，用户体验断裂 |
| **多飞书账号需求** | 企业用户需同时管理多个飞书应用 | Issue #2493：当前仅支持单一应用，限制多租户/多角色场景 |
| **/clear 清理不彻底** | 使用 seahorse 作为上下文管理器时，历史消息残留 | PR #2495：下次组装时旧消息重新进入上下文窗口 |
| **CLA 合法性争议** | 贡献者对协议有效性存疑 | Issue #2506：Contributor License Agreement 指向 "SAP" 而非项目方 |

**社区满意度指标：** 项目积极维护、响应及时（多数 PR 在数小时内有更新），但安全机制的易用性和文档清晰度仍有提升空间。

---

## 8. 待处理积压

以下 Issues/PRs 值得关注，建议维护者评估优先级：

### 长期未解决 Issue

| Issue | 年龄 | 标题 | 阻塞情况 |
|-------|------|------|----------|
| **#1042** | ~40 天 | exec 工具 guardCommand 误拦截（涉及安全核心逻辑） | ⚠️ 已有 Fix PR #2378，需加速审查 |
| **#2479** | ~3 天 | NVIDIA API + deepseek-v3.1/glm4.7 404 错误 | 🔴 需确认是 Provider 问题还是模型兼容问题 |

### 长期 Open PRs（>7 天无合并/关闭动作）

| PR | 年龄 | 标题 | 风险 |
|----|------|------|------|
| **#1586** | ~30 天 | Mattermost 渠道支持 | 功能完整性待验证 |
| **#2313** | ~11 天 | 多用户支持 + Agent Shield | 涉及安全核心，审查需谨慎 |
| **#2378** | ~8 天 | shell 输出净化 + 路径检查强化 | 对应 Issue #1042，优先级高 |
| **#2394** | ~7 天 | Provider 404 fallback | 用户体验相关，应优先处理 |

### 元问题

| Issue | 性质 | 备注 |
|-------|------|------|
| **#2506** | ⚖️ 法律/元数据 | CLA 指向错误实体（SAP），需法务或社区管理层介入 |
| **#2510/#2509** | 安全相关 | 政策评估系统已提交但尚未合并，安全增强类 PR 应及时审查 |

---

## 📊 关键数据一览

| 指标 | 数值 | 趋势 |
|------|------|------|
| 过去24h Issues 更新 | 5 条 | 正常 |
| 过去24h PR 更新 | 43 条 | 📈 非常活跃 |
| 待合并 PRs | 32 条 | 积压适中 |
| 今日合并/关闭 PRs | 11 条 | 交付能力良好 |
| 新版本发布 | 0 | — |
| Open 安全相关 PRs | 5+ | 需关注 |

---

**报告生成时间：** 2026-04-14  
**数据来源：** github.com/sipeed/picoclaw  
**建议行动项：**
1. 加速审查 #2378（exec 工具安全修复）
2. 确认 #2479 的根因并推进 #2394 fallback 机制
3. 评估 #2506 CLA 问题是否需要升级处理
4. 持续跟进 #1586 Mattermost 渠道功能完整性

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-04-14

---

## 1. 今日速览

过去 24 小时内 NanoClaw 保持极高活跃度，共产生 **12 条 PR 更新**（其中 4 条已合并关闭）和 **4 条 Issues 更新**。项目整体呈现"功能迭代 + 基础设施修固"双轨并行的健康态势——社区贡献者正在推进邮件集成（IMAP/SMTP）、Matrix 端到端加密通信、Twillio 呼叫备援等新通道功能；同时维护者积极修复了容器权限、PII 隐私保护、SQlite 自学习记忆体等关键模块。**未发布新版本**，但多条高质量 PR 已进入审阅队列，预计未来 24-48 小时内将有合并潮。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

以下 PR 已在今日合并/关闭，项目功能边界因此得到实质扩展：

| PR | 摘要 | 贡献者 | 状态 |
|---|---|---|---|
| [#1743](https://github.com/qwibitai/nanoclaw/pull/1743) | **SQlite 自学习记忆体** — 完成 ENG-123，包含 D1 丰富召回信号追踪、D2 向量嵌入等阶段性能力，标志 NanoClaw 在 agent 自主进化方向迈出重要一步 | vrknetha | ✅ 已合并 |
| [#1563](https://github.com/qwibitai/nanoclaw/pull/1563) | **PII 保护扩展至 PDF/图片** — 通过 `pdf-parse` + LLaVA 双阶段管道在宿主机完成脱敏，容器全程不接触原始文件，实现 fail-closed 安全策略 | simonstudios | ✅ 已合并 |
| [#1766](https://github.com/qwibitai/nanoclaw/pull/1766) | **MS Graph MCP Bridge** — 新增 `start-mcp-proxy.sh` + 环境变量条件注入，打通微软生态容器访问能力 | martin-erlandsson-lego | ✅ 已合并 |
| [#1765](https://github.com/qwibitai/nanoclaw/pull/1765) | **Discord 多 Bot 支持** — 通过 `DISCORD_BOTS` 环境变量实现单实例多身份运行，修复触发器注入冲突 | stevengonsalvez | ✅ 已合并 |

---

## 4. 社区热点

**热度最高的 PR：**

- 🏆 [#1764 IMAP/SMTP 邮件集成](https://github.com/qwibitai/nanoclaw/pull/1764) — 来自 brunomendonca-com，首次将邮件通道（ImapFlow + Nodemailer）引入 NanoClaw，支持 `list/read/search/send/delete` 五项原子操作，密码不进入容器，访问受组级权限控制。**这是平台级能力扩展**，预计将大幅拓宽用户接入场景。

- 🔥 [#1767 add-agentcash 付费 API 接入](https://github.com/qwibitai/nanoclaw/pull/1767) — 来自 0xOsprey，引入基于 x402 协议的微支付计费模型，实现按调用次数付费的 API 访问控制，契合商业化部署诉求。

- 💬 [#1764](https://github.com/qwibitai/nanoclaw/pull/1764) 和 [#1767](https://github.com/qwibitai/nanoclaw/pull/1767) 均获得较多社区关注，反映用户对**"拓宽通讯渠道"**和**"商业化能力"**的双重需求。

---

## 5. Bug 与稳定性

按严重程度排序：

🔴 **高危 — 容器静默崩溃**
- [#1762](https://github.com/qwibitai/nanoclaw/issues/1762) `container/agent-runner` TypeScript 编译错误导致容器无声死亡，retry 循环不断生成相同失败容器，**全体组同时静默**。触发条件：向配置对象添加 `{ url: "..." }` 类型不匹配字段。当前无 fix PR，**建议优先处理**。

🔴 **高危 — 权限拒绝崩溃**
- [#1763](https://github.com/qwibitai/nanoclaw/issues/1763) Dockerfile 设置 `USER node`（UID 1000），但宿主机以 root 创建 session/IPC 目录，导致 `EACCES: permission denied, mkdir '/home/node/.claude/debug'`。**每次新建组均触发**，Linux 部署广泛受影响。提议修复：`chownForContainer()` 辅助函数。

🟡 **中危 — 会话陈旧**
- [#1761](https://github.com/qwibitai/nanoclaw/issues/1761) EFS 上的 Claude Code 会话数据陈旧（部署变更、本地数据迁移、过期）导致"No conversation found"错误，影响用户体验。当前无 fix PR。

🟢 **低 — 配置同步**
- [#1759](https://github.com/qwibitai/nanoclaw/pull/1759) Obsidian vault 重组后路径映射需同步更新，属于维护性任务，无稳定风险。

---

## 6. 功能请求与路线图信号

| 功能 | 来源 | 描述 | 评估 |
|---|---|---|---|
| **Matrix 端到端加密通讯** | bitcryptic-gw ([#1624](https://github.com/qwibitai/nanoclaw/pull/1624)) | 引入 Matrix channel，使用 `matrix-js-sdk` + Rust crypto store 实现 E2EE，已提交 PR 并持续活跃更新 | ⭐ 高优先级，代码成熟度较高 |
| **Twillio 呼叫备援** | Viral1010 ([#1760](https://github.com/qwibitai/nanoclaw/pull/1760)) | 主号码无应答时自动转接备援号码，轮询 5s 间隔检测状态 | ⭐ 场景明确，功能完整 |
| **MCP send_file 工具** | shakhruz ([#1765](https://github.com/qwibitai/nanoclaw/pull/1757)) | 让容器 Agent 向用户推送文件（图片内联、其他类型附件），自动路径解析 | 🔄 待审阅，接口清晰 |
| **消息 ID 注入 XML** | shakhruz ([#1756](https://github.com/qwibitai/nanoclaw/pull/1756)) | 修复 `router.ts` 中 `<message>` 标签缺失 `id` 属性，使 Agent 可引用具体消息 | 🔄 小修复，配合 MCP 工具链 |
| **成就/里程碑追踪** | iabheejit ([#1758](https://github.com/qwibitai/nanoclaw/pull/1758)) | 添加 Milestone/3 成就系统 | 🔄 进行中，方向待确认 |

---

## 7. 用户反馈摘要

从 Issues 评论与讨论中提炼：

| 场景 | 用户痛点 | 情绪 |
|---|---|---|
| **Linux 生产部署** | 宿主机 root vs 容器 node 用户 UID 不匹配导致权限错误，无法正常创建调试目录，SDK 直接崩溃 | 😤 挫败感高 |
| **容器故障排查** | TypeScript 编译错误被静默吞噬，用户完全不知道根因，Agent 群体同时静默但无告警 | 😰 困惑+焦虑 |
| **跨版本迁移** | EFS 会话数据残留旧版本遗留状态，恢复对话时报错，缺乏清理机制 | 😐 困惑 |
| **邮件场景** | 企业用户强烈需要 IMAP/SMTP 集成，期待与非即时通讯渠道对齐 | 😊 期待 |
| **隐私合规** | PDF/图片中 PII 保护是部署到监管行业的硬需求，fail-closed 策略受欢迎 | 👍 认可 |

---

## 8. 待处理积压

> ⚠️ 以下 Issue 已开放但尚无回应，建议维护者关注以避免贡献者流失：

| Issue | 年龄 | 状态 | 风险 |
|---|---|---|---|
| [#1762](https://github.com/qwibitai/nanoclaw/issues/1762) 容器静默崩溃 | **1 天** | Open，0 评论 | 🔴 若不处理将持续影响所有用户 |
| [#1763](https://github.com/qwibitai/nanoclaw/issues/1763) UID 权限问题 | **1 天** | Open，0 评论 | 🔴 Linux 部署阻断性问题 |
| [#1761](https://github.com/qwibitai/nanoclaw/issues/1761) EFS 会话陈旧 | **1 天** | Open，0 评论 | 🟡 影响部分用户恢复体验 |

**建议：** 对 [#1762](https://github.com/qwibitai/nanoclaw/issues/1762) 和 [#1763](https://github.com/qwibitai/nanoclaw/issues/1763) 尽快确认根因并指派 assignee，避免同一贡献者重复提报。

---

*报告生成时间：2026-04-14 | 数据来源：GitHub NanoClaw 仓库 (qwibitai/nanoclaw) | 颗粒度：过去 24 小时*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**报告日期**：2026-04-14  
**项目仓库**：github.com/nullclaw/nullclaw

---

## 1. 今日速览

今日 NullClaw 项目保持高度活跃，共产生 **3 条新 Issue** 和 **5 条新 PR**，但尚无合并记录。开发者 `manelsen` 提交了 3 个针对性修复 PR，分别对应昨日报告的 Web 搜索配置缺失、子代理生命周期及模型目录刷新缓冲区不足等问题，代码审查推进积极。重大功能 PR #783（Cron 调度引擎）持续推进中，预计将为项目带来完整的定时任务能力。整体来看，项目处于功能完善与缺陷修复并行的健康状态。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

> 尽管今日尚未有 PR 合并，但以下 5 个 Open PR 均处于活跃维护状态，代表项目当前的技术推进方向：

| PR # | 作者 | 类型 | 状态 | 说明 |
|:---:|:---:|:---:|:---:|:---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | yanggf8 | 特性 | Open | Cron 子代理引擎，支持 DB 持久化调度历史、JSON CLI 输出、安全加固 |
| [#815](https://github.com/nullclaw/nullclaw/pull/815) | manelsen | 修复 | Open | 改进 Web 搜索缺失提供方时的错误提示与设置指引 |
| [#814](https://github.com/nullclaw/nullclaw/pull/814) | manelsen | 修复 | Open | 修复命名子代理提供方生命周期安全问题 |
| [#813](https://github.com/nullclaw/nullclaw/pull/813) | manelsen | 修复 | Open | 提高模型目录刷新时的输出缓冲区上限（修复 OpenRouter 响应超限） |
| [#810](https://github.com/nullclaw/nullclaw/pull/810) | mark-os | 特性 | Open | 新增 SysVinit 作为 Linux 服务管理的第三fallback选项 |

**关键观察**：`manelsen` 的 3 个修复 PR 与昨日报告的 Issue #809、#811、#812 形成精确对应，预计审查通过后项目稳定性将显著提升。

---

## 4. 社区热点

### 🔥 最高优先级 PR
**PR #783 — Cron 调度引擎**（yanggf8）  
> 链接：https://github.com/nullclaw/nullclaw/pull/783

这是目前规模最大的 PR，包含：
- DB-backed 调度器（`cron_runs` 历史表、`cron_run_queue` 工作者）
- 支持 skill/agent/shell 三种任务类型
- 每个任务独立时区配置
- JSON CLI 输出支持（`cron list --json`、`cron schedule --json`）
- 操作员告警机制

**热度分析**：定时任务能力是 AI Agent 产品化部署的核心需求，该 PR 若合并将标志着 NullClaw 从"即时交互工具"向"可编程自动化平台"的关键跨越。

### 💬 有评论的 Issue
**Issue #812 — http_request 模块故障**（uMendex）  
> 链接：https://github.com/nullclaw/nullclaw/issues/812

作者从 Picoclaw/ZeClaw 迁移而来，尝试启用互联网搜索功能失败。该 Issue 已获得 1 条评论，预计 PR #815 将解决此问题。

---

## 5. Bug 与稳定性

### 🔴 高优先级

| Issue # | 标题 | 严重度 | 状态 | 对应 Fix PR |
|:---:|:---|:---:|:---:|:---:|
| [#809](https://github.com/nullclaw/nullclaw/issues/809) | `nullclaw models refresh` 对 OpenRouter 失败（缓冲区 50KB < 响应 ~400KB） | 🔴 高 | Open | [#813](https://github.com/nullclaw/nullclaw/pull/813) ✅ 已提 |
| [#811](https://github.com/nullclaw/nullclaw/issues/811) | 自定义 OpenAI-compatible 提供方子代理连接失败 | 🔴 高 | Open | [#814](https://github.com/nullclaw/nullclaw/pull/814) ✅ 已提 |
| [#812](https://github.com/nullclaw/nullclaw/issues/812) | Web 搜索功能无法正常工作（跨平台） | 🔴 高 | Open | [#815](https://github.com/nullclaw/nullclaw/pull/815) ✅ 已提 |

### 分析
三个高优先级 Bug 均已由 `manelsen` 提交对应修复 PR，且均在 **24小时内** 完成修复提交。问题根因涉及：
- Zig `std.process.Child.run()` 默认缓冲区限制（平台层）
- 命名子代理提供方生命周期管理（Rust/Zig 互操作）
- Web 搜索提供方配置缺失时的容错处理（用户体验）

---

## 6. 功能请求与路线图信号

| 请求来源 | 内容 | 评估 |
|:---|:---|:---|
| 社区需求 | Cron 定时任务调度能力 | PR #783 已实现，预计下版本纳入 |
| Issue #810 | 支持更多 Linux 服务管理器（SysVinit） | PR #810 已提，覆盖传统服务器场景 |
| Issue #812 用户反馈 | 期望开箱即用的搜索能力 | PR #815 改善配置体验，但需用户主动配置 |
| 迁移用户（uMendex） | 跨 Claw 系列（Picoclaw/ZeClaw/NullClaw）一致性 | 文档/引导层面需求，暂无 PR |

**路线图信号**：项目正从"核心功能完善期"向"企业级特性扩展期"过渡，Cron 引擎和 SysVinit 支持暗示对自托管场景的重视。

---

## 7. 用户反馈摘要

### 来自 Issue #812（uMendex）
> *"I came from Picoclaw, where I also tested ZeroClaw. I liked NullClaw and it seems very organized."*

- **场景**：从其他 Claw 系列迁移的用户，寻求统一体验
- **痛点**：启用网络搜索功能时遇到困难，影响核心使用
- **满意点**：项目结构组织清晰
- **诉求**：希望获得更明确的配置引导（已由 PR #815 响应）

### 来自 Issue #809（mark-os）
> *"OpenRouter `/api/v1/models` response is ~400KB, exceeding the buffer..."*

- **场景**：使用 OpenRouter 作为模型提供方的开发者
- **痛点**：`models refresh` 功能在所有平台均不可用
- **影响**：阻塞模型列表更新流程

### 来自 Issue #811（reosablo）
> *"I cannot communicate with sub agents with a custom OpenAI-compatible provider"*

- **场景**：使用自定义 OpenAI-compatible API 端点的企业用户
- **痛点**：子代理功能完全不可用
- **错误信息**：`error.CompatibleApiError` (exit_code=3)

---

## 8. 待处理积压

| 项目 | 积压时长 | 风险等级 | 建议 |
|:---|:---:|:---:|:---|
| **PR #783** (Cron 引擎) | 7 天（2026-04-07 创建） | 🟡 中 | 规模较大，建议拆分为核心 + 渐进增强，或安排专项 review |
| **Issue #812** (Web 搜索) | 1 天 | 🟢 低 | PR #815 已提，待合并即可关闭 |
| **Issue #811** (子代理兼容) | 1 天 | 🟢 低 | PR #814 已提，待合并即可关闭 |
| **Issue #809** (模型刷新) | 1 天 | 🟢 低 | PR #813 已提，待合并即可关闭 |

---

## 📊 今日健康度评分

| 维度 | 评分 | 说明 |
|:---|:---:|:---|
| 响应速度 | ⭐⭐⭐⭐⭐ | Bug 报告后 24 小时内均有 Fix PR |
| 功能推进 | ⭐⭐⭐⭐ | Cron 引擎等大型功能持续进展 |
| 社区互动 | ⭐⭐⭐ | Issue 评论较少，但 PR 更新及时 |
| 积压控制 | ⭐⭐⭐⭐ | 仅 PR #783 积压较久（功能复杂度所致） |

**综合评级**：🟢 **健康** — 项目维护响应积极，建议尽快推进 PR #813/#814/#815 合并以关闭当日报告的 Bug。

---

*报告生成时间：2026-04-14 | 数据来源：GitHub nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-04-14

---

## 1. 今日速览

过去24小时，IronClaw 保持极高活动度：共产生 **44 条 Issues 更新**（38 新开/活跃 + 6 关闭）和 **50 条 PR 更新**（41 待合并 + 9 已合并/关闭），无新版本发布。

核心趋势：
- **大量 PR 已接近合并就绪**（尤其是 #2423、#2425、#2429 等 XL 级别功能增强），核心贡献者 henrypark133 一人提交了多条高优先级修复
- **QA 团队密集出击**，单日报告了 8+ 条 Web UI 稳定性类 Bug（#2406 页面崩溃、#2409 消息消失、#2402 LLM 死循环等），说明 0.25.0 版本在 staging 环境接受高强度压力测试
- 多个 OAuth / 第三方集成类 Bug 集中出现（Google Sheets #2229、Google Calendar OAuth typo #2391、Twitter/MCP #2230），这类问题评论活跃度高，需优先处理
- 社区讨论热点集中在**易用性**（#1852）、**RBAC/SSO 企业功能**（#1608 #1610）和** Agent 系统高级特性**（#84）

---

## 2. 版本发布

**无新版本发布。** 项目当前 HEAD 位于 staging 分支，CI 自动晋升批次 `a53eac5c..4dbb44cf` 已于 2026-04-13 22:14 UTC 推进至 `staging-promote/4dbb44cf`。

---

## 3. 项目进展

过去24小时共合并/关闭 **9 条 PR**。以下是值得关注的进展：

### 🟢 已合并（6 条）

| PR | 范围 | 说明 |
|---|---|---|
| [#2435](https://github.com/nearai/ironclaw/pull/2435) | bridge | **消除 approval/auth 流程中的双重卡片+文本问题**：v2 engine gate-paused 流程之前同时发送 UI card 和 text message，导致用户看到重复提示。修复后 gate-paused 路径返回 `None`，`bridge_to_outcome()` 正确映射至 `HmacAuth` 结果 |
| [#2436](https://github.com/nearai/ironclaw/pull/2436) | channels/pairing | **配对审批流程重构**：新增 `approve_pairing` 返回 `external_id`，`WasmChannel.owner_actor_id` 包裹 `RwLock`，`ExtensionManager.complete_pairing_approval()` 编排 persist → update channel → restart polling 全链路 |
| [#2431](https://github.com/nearai/ironclaw/pull/2431) | web | **修复浏览器崩溃（#2406）**：根因是 `setInterval` 定时器泄漏、DOM 节点无限增长、SSE 缓冲区未清理。修复后已消除 Chrome "Pages Unresponsive" 对话框 |
| [#2227](https://github.com/nearai/ironclaw/pull/2227) | tools | **MCP/WASM 工具名中划线标准化为下划线**：修复 LLM（NEAR AI / OpenAI）回调工具名时因命名不一致（`notion_notion-search` vs `notion_notion_search`）导致的 "Tool not found" 错误 |
| [#2200](https://github.com/nearai/ironclaw/pull/2200) | engine | **admin 技能对所有租户可见**：引入 `system_project_id()`（`Uuid::nil`）作为 admin 安装共享技能的稳定存储位置，修复 skill migration 确保 `Bundled`/`Installed` 类型进入 system project |
| [#2086](https://github.com/nearai/ironclaw/pull/2086) | shared skills | **修复共享技能在多租户场景下不可见问题**：`__list_skills__` 原先仅限 thread 所在 `project_id`，导致 gateway 用户的 thread 无法访问 admin 安装的技能 |

### 🟡 待合并（高优先级，41 条）

| PR | 范围 | 说明 | 预计影响 |
|---|---|---|---|
| [#2423](https://github.com/nearai/ironclaw/pull/2423) | tools | 新增 `is_concurrent_safe()` 工具特性，并行执行只读工具，串行执行写操作工具 | ⭐⭐⭐ 性能大幅提升 |
| [#2429](https://github.com/nearai/ironclaw/pull/2429) | agent | 每个 `handle_message()` 作为独立 tokio task 并发执行，不同线程的消息不再互相阻塞 | ⭐⭐⭐ 吞吐提升 |
| [#2425](https://github.com/nearai/ironclaw/pull/2425) | db | 新增 `CachedSettingsStore` 写穿缓存装饰器，按 user_id 缓存 `get_all_settings()`，消除 agent-loop 中的重复 DB 查询 | ⭐⭐ 延迟降低 |
| [#2428](https://github.com/nearai/ironclaw/pull/2428) | gate | v2 engine 路径中 "always approve" 决策持久化至 DB，与 v1 路径对齐安全策略 | ⭐ 安全性 |
| [#2434](https://github.com/nearai/ironclaw/pull/2434) | gateway | 修复 #2409：用户消息在 DB 异步写入导致切换 thread 时历史丢失，现在 `chat_send_handler` 在返回 202 前同步写入 | ⭐ 体验修复 |
| [#2418](https://github.com/nearai/ironclaw/pull/2418) | runtime | slim mode runtime + 新 Dockerfiles + `/health` 路由，支持高密度多租户部署 | ⭐ 运维优化 |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) | routing | 按 channel 配置 MCP/内置工具的可见性过滤 | 多渠道支持 |
| [#2298](https://github.com/nearai/ironclaw/pull/2298) | llm | 跨后端 cheap provider 智能路由支持 | 成本优化 |

---

## 4. 社区热点

按评论数排序的活跃讨论：

### 🔥 Issue #2229 — Google Sheets OAuth blocked（5 条评论）
🔗 https://github.com/nearai/ironclaw/issues/2229

**核心问题**：staging 环境 Google Sheets OAuth 返回 `Error 400 invalid_request`，用户在 Telegram 与 IronClaw 交互时授权失败。**同期 Issue #2391 揭示根因**：Google OAuth 请求中 `access_type` 被错误拼写为 `'offlin'` 而非 `'offline'`。这很可能是同一代码路径的问题，需要确认 #2229 与 #2391 是否共享同一个 OAuth 客户端实现。

---

### 🔥 Issue #1852 — 易用性改进建议（4 条评论）
🔗 https://github.com/nearai/ironclaw/issues/1852

**核心诉求**：作者 LeiYanhua 指出 IronClaw 配置流程对非技术用户极不友好——需要手动找到配置文件、修改环境变量、理解技术术语才能完成基本设置。明确呼吁 **"make it easy to use"** 是扩大用户群的关键。评论中有4条互动，说明社区对此有共鸣。这是产品方向性信号，建议产品/UX 团队关注。

---

### 🔥 Issue #846 — `onboard` 失败但 `ironclaw` 本身可运行（4 条评论）
🔗 https://github.com/nearai/ironclaw/issues/1852

**核心问题**：初始设置时 `ironclaw onboard` 在最后一步因数据库错误（PostgreSQL）失败，但直接运行 `ironclaw` 却能成功启动并完成 migration。这说明 onboarding 流程的 DB 写入时序与 migration 存在竞态。这是一个**埋藏较深的 setup 流程 Bug**，建议优先处理。

---

### 🔥 Issue #84 — Agent 系统高级特性路线图（3 条评论）
🔗 https://github.com/nearai/ironclaw/issues/84

**核心内容**：ilblackdragon 提出的 Feature Parity 清单，涉及 multi-agent routing、global sessions、thinking modes、elevated mode 等能力。Issue 标注 P2-P3，引用 `FEATURE_PARITY.md`。评论活跃说明社区对 Agent 能力进化有期待。结合当前 PR #2423（并发工具执行）和 #2429（并行消息处理），项目正在向更高级 Agent 架构演进。

---

## 5. Bug 与稳定性

按严重程度排列（高 → 低）：

### 🚨 高严重

| Issue | 问题 | 是否有 Fix PR |
|---|---|---|
| [#2402](https://github.com/nearai/ironclaw/issues/2402) | Bot 在工具操作后进入无限 "Calling LLM" 循环 | ❌ 无 |
| [#2406](https://github.com/nearai/ironclaw/issues/2406) | Web UI 页面无响应 + Chrome 崩溃对话框（已有 #2431 修复，待合并） | ✅ #2431 已合并 |
| [#2408](https://github.com/nearai/ironclaw/issues/2408) | Context length overflow — 输入超过模型 200K token 上限 | ❌ 无 |
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | Google Sheets OAuth blocked（与 #2391 可能同根因） | ❌ 无 |
| [#2391](https://github.com/nearai/ironclaw/issues/2391) | Google OAuth `access_type='offlin'` typo | ❌ 无 |

### ⚠️ 中等严重

| Issue | 问题 | 是否有 Fix PR |
|---|---|---|
| [#2276](https://github.com/nearai/ironclaw/issues/2276) | Orchestrator 因 HTTP 413 Payload Too Large 崩溃 | ❌ 无 |
| [#2279](https://github.com/nearai/ironclaw/issues/2279) | Bot 虚报成功但工具实际报错 "No lease for action" | ❌ 无 |
| [#2286](https://github.com/nearai/ironclaw/issues/2286) | Bot 将即时任务错误创建为定时 cron job | ❌ 无 |
| [#2287](https://github.com/nearai/ironclaw/issues/2287) | Bot 调用错误 API 而非解析上传的发票 | ❌ 无 |
| [#2236](https://github.com/nearai/ironclaw/issues/2236) | MCP server name 验证拒绝大写字母和特殊字符 | ❌ 无 |

### 📝 低/体验类

| Issue | 问题 | 是否有 Fix PR |
|---|---|---|
| [#2409](https://github.com/nearai/ironclaw/issues/2409) | 用户消息在打字后消失（已有 #2434 修复，待合并） | ✅ #2434 已合并 |
| [#2404](https://github.com/nearai/ironclaw/issues/2404) | 切换 tab 触发整个聊天刷新 | ❌ 无 |
| [#2237](https://github.com/nearai/ironclaw/issues/2237) | 新聊天获得哈希名称而非描述性标题 | ❌ 无 |

> **稳定性评估**：#2406 和 #2409 已有明确修复并合并，说明维护者响应速度较快。但 #2402（无限循环）和 #2408（token 溢出）是 Agent engine 核心问题，可能影响生产稳定性，需优先定位。

---

## 6. 功能请求与路线图信号

### 🔮 高可能性被纳入下一版本的功能

**PR #2423 — 并发只读工具执行**（XL，风险中）
- 将多工具调用分区执行，只读工具并行，写操作工具串行
- 现状：已 OPEN，评论区无异议，预计会合并
- 影响：对复杂 Agent 工作流（多 API 查询类场景）有显著加速效果

**Issue #2360 — 内置 Chromium 浏览器工具**
🔗 https://github.com/nearai/ironclaw/issues/2360

- ilblackdragon 提出，使用 `chromiumoxide` CDP + AX-tree 元素引用实现浏览器自动化
- 依赖 #2357（browser service）、#2358（profile store）、#2359（identity model）
- 这是**重量级功能请求**，如实现将大幅扩展 IronClaw 的 Web 交互能力

**Issue #1609 — 管理面板 Web UI**
🔗 https://github.com/nearai/ironclaw/issues/1609

- 提供用户/workspace/角色/使用量监控的 Web 管理界面
- 标注 P2，与 #1608（RBAC）、#1610（SSO/OIDC）共同构成企业功能矩阵

**PR #1378 — 按 channel 过滤 MCP/内置工具**
🔗 https://github.com/nearai/ironclaw/pull/1378

- JSON 配置驱动的渠道路由，多渠道部署下每个渠道可配置不同工具集
- 对 Slack/Telegram/Web 多渠道同时使用的用户非常重要

### 📊 功能信号摘要

从 Issue 评论和 PR 范围来看，项目正朝着以下方向演进：
1. **Agent 并发能力** — 多工具并行、消息并行处理
2. **企业级功能** — RBAC、SSO、管理面板
3. **Web UI 稳定性** — 新功能密集导致回归，需要更完善的 QA
4. **第三方集成** — Google/Twitter/MCP/OAuth 生态

---

## 7. 用户反馈摘要

从 Issues 评论和使用场景中提炼：

### 用户痛点

- **配置门槛高**（#1852）：非技术用户难以完成初始配置，需要更友好的 onboarding
- **Web UI 不稳定**（#2406/#2409/#2404）：连续使用后出现崩溃、消息消失、频繁刷新
- **第三方集成脆弱**（#2229/#2230/#2391）：OAuth 流程频繁失败，token 刷新问题
- **升级风险**（#1846）：从 hosted UI 升级丢失构建配置和 Telegram 连接，用户建议"用 SSH 而非 UI 按钮升级"
- **Railway 部署问题**（#1680）：LLM 环境变量未被运行时正确读取，模型卡在 Anthropic Sonnet

### 用户场景

- **Google Sheets 集成**：用户在 Telegram 中通过 IronClaw 访问 Sheets，OAuth 是核心依赖
- **Twitter 内容聚合**：每日汇总 3 个 AI 账号的推文到 Telegram，同样依赖 OAuth
- **发票解析**：Bot 应能解析 PDF 发票并调用 convertkit.com，但目前路由到错误 API
- **Raspberry Pi 部署**（#1339）：有用户尝试在 armv7 架构树莓派上编译，但遇到 "no supported isa" 错误

### 用户满意度信号

- LeiYanhua（#1852）称赞项目 "launching very fast and safe"，说明核心价值得到认可
- 多租户部署需求（#2418 slim mode）说明项目已进入生产使用阶段

---

## 8. 待处理积压

以下 Issues/PRs 长期未解决或未响应，需维护者关注：

### ⚠️ 超过14天未推进的高优先级 Issue

| Issue | 年龄 | 优先级 | 说明 |
|---|---|---|---|
| [#1610](https://github.com/nearai/ironclaw/issues/1610) SSO/OIDC | 21天 | P1 | 企业采用的核心 blocker，评论区 0 条 |
| [#1608](https://github.com/nearai/ironclaw/issues/1608) RBAC | 21天 | P2 | 权限矩阵，评论区 0 条 |
| [#1609](https://github.com/nearai/ironclaw/issues/1609) 管理面板 | 21天 | P2 | 无 UI 的 management，是 #1608 的下游 |
| [#84](https://github.com/nearai/ironclaw/issues/84) Agent 高级特性 | ~60天 | P2-P3 | Feature Parity 路线图，评论仅 3 条 |
| [#1339](https://github.com/nearai/ironclaw/issues

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期**：2026-04-14
**项目仓库**：netease-youdao/LobsterAI
**数据周期**：过去 24 小时

---

## 1. 今日速览

LobsterAI 在过去 24 小时内保持高度活跃状态，共完成 **13 个 PR 合并/关闭**，另有 **7 个 PR 待审阅合并**。项目于 2026-04-13 正式发布新版本（2026.4.13），包含 5 项核心修复与重构，涵盖构建优化、定时任务状态管理、会话保持策略及 Provider 配置统一化等关键改进。社区方面新增 2 个 Issues，主要涉及 MCP 引擎兼容性与飞书 Group Policy 配置稳定性问题。整体项目健康度良好，代码合并节奏稳定，建议继续保持当前迭代速度。

---

## 2. 版本发布

### LobsterAI v2026.4.13

**发布状态**：已发布（2026-04-13）

**本次更新内容**：

| 变更类型 | PR # | 变更描述 | 贡献者 |
|---------|------|---------|--------|
| fix(build) | #1633 | 加速 NSIS overlay 安装，通过异步移除旧目录优化构建性能 | @winsan-zhang |
| fix(scheduled-tasks) | #1645 | 保存定时任务后重置脏状态，防止重复触发 | @nmgwddj |
| fix(openclaw) | #1638 | 回填会话保持时长策略，统一默认值与入口隐藏 | @wulei05 |
| refactor(providers) | #1646 | 统一 Provider 配置格式，修复 MiniMax OpenClaw 同步问题 | @nmgwddj |
| fix(openclaw) | #1650 | 阻止配置热重载时触发 OpenClaw gateway 重启 | @btc69m979y-dotcom |

**破坏性变更**：无

**迁移注意事项**：

- 若使用飞书集成，请注意 Group Policy 默认值已调整，需确认现有配置是否符合预期
- OpenClaw 会话连续性默认值已统一为 30 天，建议管理员评估是否需要调整

---

## 3. 项目进展

以下 PR 已于今日合并/关闭，对项目功能推进具有重要意义：

### 已合并 PR

| PR # | 领域 | 变更描述 | 贡献者 | 合并状态 |
|------|------|---------|--------|---------|
| #1659 | 多领域 | Release/2026.04.13 版本发布 | @liuzhq1986 | ✅ 已合并 |
| #1658 | openclaw | 允许 loopback cron 连接静默 scope-upgrade | @btc69m979y-dotcom | ✅ 已合并 |
| #1657 | openclaw | 恢复非 main agent persona 文件加载修复 | @btc69m979y-dotcom | ✅ 已合并 |
| #1655 | openclaw | 撤销 #1651（临时回滚） | @liuzhq1986 | ✅ 已合并 |
| #1654 | openclaw | 修复 chat error 事件缺失时 phase=error 未传递问题 | @btc69m979y-dotcom | ✅ 已合并 |
| #1652 | main | 添加 AbortDiag 日志用于超时问题诊断 | @btc69m979y-dotcom | ✅ 已合并 |
| #1651 | openclaw | 修复非 main agent persona 文件路径不匹配问题 | @btc69m979y-dotcom | ✅ 已合并 |
| #1650 | openclaw | 阻止配置热重载触发 gateway 重启 | @btc69m979y-dotcom | ✅ 已合并 |
| #1649 | cowork | 撤销 skill 创建路径提示修复 | @liuzhq1986 | ✅ 已合并 |
| #1648 | 多领域 | 修复创建 agent 时多机器人支持问题；飞书群聊默认 open | @liugang519 | ✅ 已合并 |
| #1647 | 多领域 | 解决 MCP Bridge 启动时 401 认证不匹配问题 | @btc69m979y-dotcom | ✅ 已合并 |
| #1646 | providers | 统一 Provider 配置并修复 MiniMax 同步 | @nmgwddj | ✅ 已合并 |
| #1638 | openclaw | 回填会话保持时长策略 | @wulei05 | ✅ 已合并 |

### 待合并 PR

| PR # | 领域 | 变更描述 | 贡献者 | 待审状态 |
|------|------|---------|--------|---------|
| #1661 | cowork | 脱敏导出日志中的敏感信息（API Key、Token 等） | @flowell | 🔄 待审阅 |
| #1660 | cowork | 非 main agent 首页欢迎区域动态显示名称和描述 | @gongzhi-netease | 🔄 待审阅 |
| #1277 | deps-dev | Electron 依赖升级（40.2.1 → 41.1.1） | @dependabot[bot] | 🔄 待审阅 |
| #1278 | deps | Anthropic SDK 升级（0.2.12 → 0.2.90） | @dependabot[bot] | 🔄 待审阅 |
| #1656 | openclaw | 撤销 #1649 | @liuzhq1986 | 🔄 待审阅 |
| #1498 | 多领域 | 修复全部 165 个 ESLint error | @swuzjb | 🔄 待审阅 |
| #924 | 多领域 | 会话列表与消息历史分页加载功能 | @swuzjb | 🔄 待审阅 |

---

## 4. 社区热点

### 活跃 Issues

| Issue # | 标题 | 作者 | 评论数 | 创建时间 | 热度分析 |
|---------|------|------|--------|---------|---------|
| [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) | groupPolicy 为啥每过一会就被覆盖为 allowlist | zjm79 | 1 | 2026-04-13 | 配置持久化问题，用户反映 Group Policy 定期被重置 |
| [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) | 除 sse 之外的 mcp 无法使用 | qxjysd | 0 | 2026-04-14 | MCP 引擎兼容性问题，疑似 SSE 协议与 MCP 其他传输协议兼容性存在缺陷 |

### 热点 PR 分析

**#1661 脱敏日志功能**（待审阅）：该 PR 针对导出日志中泄露明文密钥的风险进行修复，涉及 API Key、Bearer Token、OAuth Token 等敏感信息。反映出用户对隐私安全的重视，建议优先审阅合并。

**#1660 非 main agent 个性化展示**（待审阅）：将 agent 切换体验从固定文案升级为动态个性化显示，提升多 agent 场景下的用户体验。该功能完善了 agent 个性化体系，属于用户体验优化范畴。

---

## 5. Bug 与稳定性

### 今日报告 Bug

| 严重程度 | Issue/PR | 问题描述 | 影响范围 | 修复状态 |
|---------|---------|---------|---------|---------|
| ⚠️ 中 | [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) | 除 SSE 之外的其他 MCP 引擎协议无法正常使用 | MCP 插件生态 | 🔍 调查进行中 |
| ⚠️ 中 | [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) | Group Policy 配置定期被覆盖为 allowlist | 飞书集成安全性 | 🔍 调查进行中 |

### 今日修复的重要 Bug

| PR # | 问题描述 | 修复方案 | 贡献者 |
|------|---------|---------|--------|
| #1654 | OpenClaw 升级后模型认证错误未传递到前端，会话卡在“执行中” | 增加 `phase=error` 处理逻辑，超时后自动兜底 | @btc69m979y-dotcom |
| #1657 | 非 main agent persona 文件因路径不匹配无法加载 | 恢复 workspace 路径同步逻辑 | @btc69m979y-dotcom |
| #1658 | OpenClaw 安全修复导致 loopback cron 连接失效 | 允许 loopback 场景静默 scope-upgrade | @btc69m979y-dotcom |
| #1647 | MCP Bridge 启动时 secret 生成竞态导致 401 认证失败 | 调整 secret 生成时机，确保 gateway 启动时已完成配置 | @btc69m979y-dotcom |

### 稳定性关注项

- **#1652 诊断日志**：项目组已为偶现的“任务超时提前触发”问题添加诊断日志，建议持续关注该问题的复现率
- **#1277 / #1278 依赖升级**：Electron 40.2.1 → 41.1.1 及 Anthropic SDK 大版本升级，建议评估兼容性风险

---

## 6. 功能请求与路线图信号

### 新功能请求

| 请求来源 | 描述 | 关联 PR | 可行性评估 |
|---------|------|---------|-----------|
| 用户场景 | 非 main agent 个性化欢迎页（显示 agent 名称和描述） | [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) | ✅ 已实现，待审阅 |
| 用户场景 | 会话列表与消息历史分页加载（解决内存占用问题） | [#924](https://github.com/netease-youdao/LobsterAI/pull/924) | ✅ 已实现，待审阅 |
| 用户场景 | 日志敏感信息脱敏导出 | [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661) | ✅ 已实现，待审阅 |

### 路线图信号分析

基于今日 PR 活动，以下方向可能是下一版本重点：

1. **MCP 生态完善**：SSE 之外的 MCP 引擎支持问题（#1662）表明 MCP 协议兼容性仍需加强
2. **飞书集成稳定性**：Group Policy 配置覆盖问题反映飞书配置持久化机制需优化
3. **用户体验升级**：多 agent 场景下的个性化体验优化（#1660）是提升竞争力的关键
4. **性能与资源管理**：分页加载（#924）的引入预示着项目在向大规模使用场景演进

---

## 7. 用户反馈摘要

### 从 Issues 评论中提炼

| Issue # | 用户痛点 | 使用场景 | 情绪倾向 |
|---------|---------|---------|---------|
| #1653 | Group Policy 每隔一段时间就会被覆盖为 allowlist，用户需要反复重新配置 | 飞书机器人安全策略配置 | 😟 困扰 |
| #1662 | 除 SSE 协议外的 MCP 引擎（如 stdio）无法找到并使用 | MCP 插件生态使用 | 😟 困扰 |

### 典型使用场景分析

根据今日社区反馈，主要使用场景集中于：

- **企业级飞书集成**：用户依赖 LobsterAI 作为飞书机器人，需要稳定的安全策略配置
- **MCP 插件生态**：用户尝试通过 MCP 协议扩展功能，对协议兼容性有较高期望
- **多 agent 协作**：用户使用多个 agent 处理不同任务场景，期待更流畅的 agent 切换体验

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue # | 标题 | 创建时间 | 未响应天数 | 优先级建议 |
|---------|------|---------|-----------|-----------|
| - | 暂无超期未响应 Issues | - | - | - |

### 长期未合并的重要 PR

| PR # | 标题 | 创建时间 | 未合并天数 | 备注 |
|------|------|---------|-----------|------|
| #924 | feat(cowork): 会话列表与消息历史分页加载 | 2026-03-26 | 19 天 | 功能已完成，建议优先审阅 |
| #1498 | fix: 修复全部 ESLint error | 2026-04-07 | 7 天 | 代码质量修复，建议关注 |

### 依赖升级提醒

| PR # | 依赖项 | 版本变更 | 风险评估 |
|------|--------|---------|---------|
| #1277 | Electron | 40.2.1 → 41.1.1 | 中风险，需充分测试 |
| #1278 | @anthropic-ai/claude-agent-sdk | 0.2.12 → 0.2.90 | 中风险，大版本跳跃 |

---

## 附录：关键链接汇总

| 类型 | 链接 |
|------|------|
| 项目仓库 | https://github.com/netease-youdao/LobsterAI |
| Issue 列表 | https://github.com/netease-youdao/LobsterAI/issues |
| PR 列表 | https://github.com/netease-youdao/LobsterAI/pulls |
| Releases | https://github.com/netease-youdao/LobsterAI/releases |
| #1653 | https://github.com/netease-youdao/LobsterAI/issues/1653 |
| #1662 | https://github.com/netease-youdao/LobsterAI/issues/1662 |
| #924 | https://github.com/netease-youdao/LobsterAI/pull/924 |
| #1660 | https://github.com/netease-youdao/LobsterAI/pull/1660 |
| #1661 | https://github.com/netease-youdao/LobsterAI/pull/1661 |

---

**报告生成时间**：2026-04-14
**数据来源**：GitHub API (netease-youdao/LobsterAI)
**分析结论仅代表基于公开数据的客观判断**，具体项目决策请结合内部信息综合判断。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期：** 2026-04-14  
**项目：** moltis-org/moltis  
**数据区间：** 2026-04-13 ~ 2026-04-14

---

## 1. 今日速览

Moltis 项目在过去24小时内展现出极高的开发活跃度。团队共合并/关闭了 **18 个 PR**，处理了 **5 个 Issues**，并发布了 **2 个版本**（20260413.03 和 20260413.06）。核心工作集中在**用户体验优化**（会话归档、缓存token显示、本地Whisper设置UI）和**Bug修复**（工具序列化回归、MCP schema兼容性）两个方向。同时，`penso` 和 `Cstewart-HC` 持续推进架构重构，完成了 node-exec-types 解耦和 broadcaster 重构等重要基础工作。项目整体呈现**健康向好**态势，无新增未解决Bug。

---

## 2. 版本发布

### 📦 20260413.06

| 项目 | 详情 |
|------|------|
| **发布说明** | 包含本日多个 Bugfix 和功能更新的补丁版本 |
| **主要变更** | 修复 MCP 工具 schema 兼容性、工具参数序列化回归、工具调用兼容性；新增会话归档功能、Web UI 缓存 token 显示 |

### 📦 20260413.03

| 项目 | 详情 |
|------|------|
| **发布时间** | 2026-04-13（同日早些时候） |
| **主要变更** | 基础版本，包含部分早期 Bug 修复 |

> ⚠️ **迁移提示：** 如从旧版本升级，请注意 `voice.tts.openai.base_url` 和 `voice.stt.whisper.base_url` 配置字段已正式支持本地服务器配置。详情见 [PR #499](https://github.com/moltis-org/moltis/pull/499)。

---

## 3. 项目进展

### 🎯 核心功能推进

| PR | 标题 | 状态 | 概述 |
|----|------|------|------|
| [#702](https://github.com/moltis-org/moltis/pull/702) | Add archived session controls to web UI | ✅ 已合并 | 实现会话归档功能，允许用户在 Web UI 中隐藏/显示/归档/取消归档会话 |
| [#699](https://github.com/moltis-org/moltis/pull/699) | show cached input tokens in chat UI | ✅ 已合并 | 在助手消息页脚和聊天调试/token区域显示缓存的输入 token 计数 |
| [#700](https://github.com/moltis-org/moltis/pull/700) | add web UI for local whisper setup | ✅ 已合并 | 添加本地/OpenAI 兼容 Whisper 和 TTS 端点的设置 UI，支持 `Base URL` 字段配置 |
| [#48](https://github.com/moltis-org/moltis/pull/48) | feat(xmpp): add XMPP channel support | ✅ 已合并 | **历时约2个月**完成！新增完整 XMPP 通道实现，支持 1:1 聊天、MUC 群聊、反应等特性 |
| [#199](https://github.com/moltis-org/moltis/pull/199) | feat(voice): add Voicebox TTS provider | ✅ 已合并 | **历时约2个月**添加 Voicebox TTS provider，支持本地 Qwen3-TTS 语音克隆服务 |

### 🐛 Bug 修复

| PR | 修复内容 | 对应 Issue |
|----|----------|------------|
| [#698](https://github.com/moltis-org/moltis/pull/698) | 清理 OpenAI 兼容 MCP 工具 schema，移除 `not`、`if/then/else` 等不支持的 JSON Schema 关键字 | [#694](https://github.com/moltis-org/moltis/issues/694) |
| [#697](https://github.com/moltis-org/moltis/pull/697) | 修复工具参数序列化路径，正确处理 `0`、`false`、`null` 等 falsy 值 | [#693](https://github.com/moltis-org/moltis/issues/693) |
| [#696](https://github.com/moltis-org/moltis/pull/696) | 修复工具调用兼容性回归，隐藏内部 `*_wasm` 工具，简化 cron 工具 schema | — |
| [#659](https://github.com/moltis-org/moltis/pull/659) | 支持 Browserless v2 WebSocket 路径沙箱模式 | — |

### 🔧 架构重构

| PR | 重构内容 | 价值 |
|----|----------|------|
| [#703](https://github.com/moltis-org/moltis/pull/703) | 将 node exec types 合并到所属 crates，移除 `node-exec-types` 工作区 | 模块边界清晰化 |
| [#691](https://github.com/moltis-org/moltis/pull/691) | 将无锁广播状态封装到 `Broadcaster` struct | 解耦第一步，零 API 变更 |
| [#690](https://github.com/moltis-org/moltis/pull/690) | 提取 MCP service 逻辑到独立 crates | 持续拆分 gateway "God Object" |
| [#688](https://github.com/moltis-org/moltis/pull/688) | 定义 `NodeInfoProvider` trait 解耦节点信息检索 | 接口抽象 |
| [#685](https://github.com/moltis-org/moltis/pull/685) | 将纯 SSH 和环境辅助函数移到 node-exec-types | 可测试性提升 |
| [#683](https://github.com/moltis-org/moltis/pull/683) | 提取核心类型和常量到独立 crate | 原子化重构 |
| [#695](https://github.com/moltis-org/moltis/pull/695) | 拆分过大的 Rust 模块 | 文件大小治理 |
| [#689](https://github.com/moltis-org/moltis/pull/689) | 将入站文档持久化为结构化会话文件 | 数据完整性 |

---

## 4. 社区热点

### 🔥 最受关注的 Issues

| Issue | 类型 | 热度 | 摘要 |
|-------|------|------|------|
| [#701](https://github.com/moltis-org/moltis/issues/701) | ✨ Enhancement | 👍 1 | **会话归档功能** — 用户请求添加归档会话/对话的能力，避免历史记录混乱。**已被 #702 实现** |
| [#692](https://github.com/moltis-org/moltis/issues/692) | ✨ Enhancement | 💬 1 | **显示缓存 token 数量** — 用户希望在聊天界面看到缓存的输入 token 数量，便于成本监控。**已被 #699 实现** |

### 📈 长期贡献者活跃

| 贡献者 | 今日贡献 | 方向 |
|--------|----------|------|
| `penso` | 12+ PRs | 功能实现、Bugfix、跨版本特性（XMPP、Voicebox） |
| `Cstewart-HC` | 5 PRs | 架构重构、原子化拆分 |

---

## 5. Bug 与稳定性

### 🐛 今日报告并修复的 Bug

| 严重程度 | Issue | 问题描述 | Fix PR | 状态 |
|----------|-------|----------|--------|------|
| **高** | [#694](https://github.com/moltis-org/moltis/issues/694) | MCP 工具 schema 中的 `not` 关键字（无类型）被 OpenAI provider 拒绝，导致 Attio MCP 工具不可用 | [#698](https://github.com/moltis-org/moltis/pull/698) | ✅ 已修复并合并 |
| **高** | [#693](https://github.com/moltis-org/moltis/issues/693) | 20260413 版本中工具参数序列化回归，falsy 值（`0`、`false`、`null`）处理错误 | [#697](https://github.com/moltis-org/moltis/pull/697) | ✅ 已修复并合并 |
| **中** | — | 工具调用兼容性回归，影响 cron 定时提醒和旧版 WASM 工具名称 | [#696](https://github.com/moltis-org/moltis/pull/696) | ✅ 已修复并合并 |

> ✅ **质量信号：** 今日报告的所有 Bug 均已在当日修复并合并，项目响应速度优秀。

---

## 6. 功能请求与路线图信号

### ✨ 用户提出的新功能需求

| Issue | 请求内容 | 社区支持 | 实现可能性 |
|-------|----------|----------|------------|
| [#701](https://github.com/moltis-org/moltis/issues/701) | 会话归档功能 | 👍 1 | ✅ **已实现**（#702） |
| [#692](https://github.com/moltis-org/moltis/issues/692) | 显示缓存 token 数量 | 💬 1 | ✅ **已实现**（#699） |
| [#570](https://github.com/moltis-org/moltis/issues/570) | 本地 OpenAI Whisper provider 设置流程 | 💬 0 | ✅ **已实现**（#700） |

### 🗺️ 路线图信号

基于今日 PR 活动，项目的短期方向可能包括：

1. **多通道架构完善** — XMPP 通道已合并，可能继续扩展（如 Matrix、Discord 等）
2. **本地 AI 支持深化** — Voicebox TTS、本地 Whisper/STT 配置已完成，下一步可能是更多本地模型集成
3. **架构解耦持续** — gateway 重构仍在进行中，预计将继续拆分其他模块

---

## 7. 用户反馈摘要

### 💬 Issues 评论中的用户声音

| 来源 | 反馈要点 |
|------|----------|
| [#694](https://github.com/moltis-org/moltis/issues/694) | Attio MCP 工具无法使用，实际影响用户的多渠道集成场景 |
| [#693](https://github.com/moltis-org/moltis/issues/693) | 工具调用参数解析问题影响生产环境，用户及时报告并提供了复现步骤 |

### 📊 用户场景推断

| 场景 | 证据 |
|------|------|
| **企业级应用** | Attio MCP 工具集成、本地 Whisper 部署需求 |
| **隐私敏感** | 本地语音处理（Whisper、TTS）、会话归档管理 |
| **多渠道通讯** | XMPP 通道开发、对接多种 IM 平台 |

---

## 8. 待处理积压

### ⚠️ 长期未响应的 Issues

| Issue | 创建时间 | 类型 | 摘要 | 建议 |
|-------|----------|------|------|------|
| — | — | — | **今日无明显积压** | — |

### 📋 待合并 PR

| PR | 作者 | 状态 | 摘要 |
|----|------|------|------|
| [#704](https://github.com/moltis-org/moltis/pull/704) | dependabot[bot] | 🟡 OPEN | Rust `rand` 依赖从 0.9.2 升级到 0.10.0，建议维护者审阅合并 |

---

## 📊 今日数据汇总

| 指标 | 数值 |
|------|------|
| 新版本发布 | 2 个 |
| 合并/关闭 PRs | 18 个 |
| 待合并 PRs | 1 个 |
| 关闭 Issues | 5 个 |
| 新开 Issues | 0 个 |
| 核心贡献者 | 2 人（`penso`、`Cstewart-HC`） |

---

**📌 维护者建议：**

1. **尽快合并** [#704](https://github.com/moltis-org/moltis/pull/704) Dependabot 的 `rand` 依赖更新
2. **考虑发布变更日志** — 今日变更较多，建议整理 CHANGELOG 便于用户了解新版本内容
3. **XMPP 文档** — PR #48 历时较长，建议添加使用文档帮助用户快速上手

---

*报告生成时间：2026-04-14 | 数据来源：github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**报告日期：** 2026-04-14  
**数据来源：** GitHub (agentscope-ai/CoPaw → QwenPaw)

---

## 1. 今日速览

过去 24 小时，CoPaw/QwenPaw 项目保持**极高活跃度**，共产生 41 条 Issues（29 开/活跃，12 已关闭）和 50 条 PRs（31 待合并，19 已合并/关闭），另有 1 个 beta 版本发布（v1.1.1-beta.1→v1.1.1-beta.2）。项目正处于从 CoPaw 向 QwenPaw 品牌迁移的关键阶段，大量用户围绕迁移体验、数据路径兼容性、飞书/钉钉/微信等渠道集成稳定性展开讨论，社区参与度（评论数）显著高于往常。今日的核心议题是 **CoPaw 到 QwenPaw 的平滑升级路径**，以及多处用户反馈的渠道层 bug（飞书 WebSocket 崩溃、微信任务解密失败、QQ/WeChat 阻塞事件循环等）。整体来看，项目迭代速度快、功能推进积极，但品牌切换带来的用户认知摩擦和配置兼容性问题需重点关注。

---

## 2. 版本发布

### v1.1.1-beta.1 / v1.1.1-beta.2

- **发布时间：** 2026-04-13
- **相关 PRs：**
  - `#3287` — docs(news): update news (`@xieyxclack`)
  - `#3289` — chore: update ip logo (`@rayrayraykk`)
  - `#3343` — chore(version): bumping version to 1.1.1b2 (`@xieyxclack`)

**说明：** 这是一个补丁级的 beta 版本，主要为文档更新和 logo 更换，未包含功能变更或破坏性变更。建议已使用 1.1.x 测试版的用户平滑升级至 1.1.1-beta.2。正式版发布前请关注 [Releases 页面](https://github.com/agentscope-ai/QwenPaw/releases)。

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR # | 标题 | 类型 | 状态 | 意义 |
|------|------|------|------|------|
| [#3343](https://github.com/agentscope-ai/QwenPaw/pull/3343) | chore(version): bumping version to 1.1.1b2 | 版本管理 | **已合并** | 正式发布 1.1.1-beta.2 |
| [#2428](https://github.com/agentscope-ai/QwenPaw/pull/2428) | feat: add OpenCode provider integration | Provider 扩展 | **已合并** | 新增 OpenCode provider，支持 OpenCode 服务器连接（含 API Key、推理 token 支持），丰富了本地模型接入选项 |
| [#3341](https://github.com/agentscope-ai/QwenPaw/pull/3341) | Fix(Provider): Enable Model Discovery for all Providers | Bug Fix | **已合并** | 修复所有 Provider 的模型发现功能，关联 Issue #3045、#3139、#3291，覆盖面广 |
| [#3337](https://github.com/agentscope-ai/QwenPaw/pull/3337) | feat(DingTalk): support media delivery in AI Card mode & prevent base64 overflow | 功能增强 | **已合并** | 解决钉钉 AI Card 模式下 base64 图片超出消息大小限制导致图片不显示的问题 |

### 正在推进中的重要 PRs（待 Review/Merge）

| PR # | 标题 | 类型 | 状态 | 预估影响 |
|------|------|------|------|----------|
| [#2773](https://github.com/agentscope-ai/QwenPaw/pull/2773) | feat(skills): add self-evolution skill | 功能 | Under Review | 自进化 AI Agent 引擎，自动捕获错误、检测模式、根因分析，是高价值高级功能 |
| [#3305](https://github.com/agentscope-ai/QwenPaw/pull/3305) | fix: register AgentApp dispatched requests with TaskTracker | Bug Fix | Open | 修复后台任务在 Agent workspace 重载时被意外取消的问题（`_is_interrupted=True`） |
| [#3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) | feat(session): Support file operation rollback | 功能 | Open | 文件操作回滚支持，可恢复误删文件/覆盖文件，与 Issue #2590 对应 |
| [#2457](https://github.com/agentscope-ai/QwenPaw/pull/2457) | feat(backup): add user asset backup & migration module | 功能 | Open | 用户资产备份与迁移模块，支持导出/导入偏好、记忆、技能、工具和配置为 ZIP 包，含自动备份 |
| [#2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) | Add plan mode | 功能 | Under Review | Plan 模式，用户可通过 `/plan <任务描述>` 生成结构化多步骤计划 |
| [#3347](https://github.com/agentscope-ai/QwenPaw/pull/3347) | fix(memory): make file watcher recursive configurable | Bug Fix | Open | 修复 Agent 创建的记忆子目录未被索引的问题（Fixes #3317） |
| [#3340](https://github.com/agentscope-ai/QwenPaw/pull/3340) | feat(tool): Add ACP-based external agent delegation | 功能 | Open | ACP 外部 Agent 委托与实时工具输出，支持主 Agent 委托子 Agent |
| [#2840](https://github.com/agentscope-ai/QwenPaw/pull/2840) | fix [Security] remove localhost API auth bypass | **安全修复** | Under Review | 修复 `AuthMiddleware` 在 localhost 时跳过 API 认证的安全漏洞，**建议优先合并** |
| [#3107](https://github.com/agentscope-ai/QwenPaw/pull/3107) | fix tool call stop silently of models similar to qwen3-coder-plus | Bug Fix | Under Review | 修复 qwen3-coder-plus 等模型返回纯文本时工具调用被静默终止的问题 |
| [#2506](https://github.com/agentscope-ai/QwenPaw/pull/2506) | Enhance documentation and establish testing infrastructure | 基础设施 | Open | 为 11 个 Channel 模块建立系统化测试（契约测试、单元测试、CI 门控），填补重大测试空白 |

**评估：** 今日 PR 合并/关闭数 19 条，项目推进速度较快。安全修复 `#2840` 和多个渠道层 Bug Fix（#3337、#3341、#3305）已合并或处于 Review 阶段。多个高价值功能（自进化技能、计划模式、文件回滚、备份迁移）处于推进中，预计在 1.2.x 版本落地。

---

## 4. 社区热点

### 热点 #1：CoPaw → QwenPaw 品牌迁移与升级路径（评论最多）

**相关 Issues：**
- [#3288](https://github.com/agentscope-ai/QwenPaw/issues/3288) — "CoPaw怎么平滑升级到QwenPaw"（32 评论，已关闭）
- [#3351](https://github.com/agentscope-ai/QwenPaw/issues/3351) — "Is there any migration script from cowpaw to qwenpaw"（3 评论，Open）
- [#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309) — "更新到1.1.0后对qwenpaw和copaw的疑问"（5 评论，Open）
- [#3336](https://github.com/agentscope-ai/QwenPaw/issues/3336) — "qwenpaw-copaw 别折腾了"（2 评论，已关闭，4 👍）

**诉求分析：** 这是今日社区最热的议题。用户核心痛点包括：
1. `qwenpaw` 命令安装后找不到，需手动添加 PATH
2. 升级后 `.copaw/` 和 `.qwenpaw/` 两个目录并存，数据路径不统一
3. `copaw app` 和 `qwenpaw app` 两套应用混淆
4. 迁移后 Agent、Skill、Workspace 等配置未自动迁移

**用户情绪：** 部分老用户对品牌更名表达不满（#3336），但更多用户在积极寻求迁移指南。建议维护者尽快发布官方迁移文档或迁移脚本。

### 热点 #2：Help Wanted 任务认领（持续活跃）

**Issue：** [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) — "Help Wanted: Open Tasks — Come Contribute!"（55 评论，Open）

**诉求分析：** 这是项目最大的贡献者招募帖，P0~P2 优先级任务清单持续被认领。已有 Task 6（文件回滚，对应 PR #3346）完成。社区贡献活跃度良好，维护者应持续更新任务列表状态。

### 热点 #3：飞书集成问题集中爆发

**相关 Issues：**
- [#1403](https://github.com/agentscope-ai/QwenPaw/issues/1403) — "飞书消息处理没有去重机制"（6 评论，Open）
- [#2852](https://github.com/agentscope-ai/QwenPaw/issues/2852) — "飞书群聊中引用消息文件，机器人无法识别"（4 评论，已关闭）
- [#3331](https://github.com/agentscope-ai/QwenPaw/issues/3331) — "Feishu WebSocket crashes with cross-loop RuntimeError"（3 评论，已关闭）

**诉求分析：** 飞书渠道是用户量最大的集成场景，消息去重、群聊引用文件、并发多 bot 时的 WebSocket 稳定性是高频问题。建议优先提升飞书渠道测试覆盖率。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

### 🔴 高优先级（已影响生产/已有 Fix PR）

| Issue # | 标题 | 严重程度 | 状态 | Fix PR |
|---------|------|----------|------|--------|
| [#3317](https://github.com/agentscope-ai/QwenPaw/issues/3317) | Agent 创建的记忆子目录未被索引，影响向量搜索 | 高 | Open | [#3347](https://github.com/agentscope-ai/QwenPaw/pull/3347) |
| [#3344](https://github.com/agentscope-ai/QwenPaw/issues/3344) | 微信 channel Cron 任务解密失败，消息无法送达 | 高 | Open | 无 |
| [#3305](https://github.com/agentscope-ai/QwenPaw/issues/3305) | 后台任务在 workspace 重载时被意外取消 | 高 | Open | [#3305](https://github.com/agentscope-ai/QwenPaw/pull/3305) |
| [#3331](https://github.com/agentscope-ai/QwenPaw/issues/3331) | 飞书 WebSocket 在多 Agent 多 bot 环境下 cross-loop RuntimeError | 高 | 已关闭 | 推测已通过其他 PR 修复 |

### 🟡 中优先级（功能受损/Workaround 存在）

| Issue # | 标题 | 严重程度 | 状态 | Fix PR |
|---------|------|----------|------|--------|
| [#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377) | Agent 处理大量文件时自动中断，无法完成长任务 | 中 | Open | 无 |
| [#3339](https://github.com/agentscope-ai/QwenPaw/issues/3339) | Ollama 局域网连接失败（路由/NAT 问题） | 中 | 已关闭 | 无 |
| [#2931](https://github.com/agentscope-ai/QwenPaw/issues/2931) | 新建 Agent 后技能配置默认全选 | 中 | 已关闭 | 无（建议 Review #3247 相关改动） |

### 🟢 低优先级（体验问题）

| Issue # | 标题 | 严重程度 | 状态 |
|---------|------|----------|------|
| [#3265](https://github.com/agentscope-ai/QwenPaw/issues/3265) | 暗黑模式下置顶聊天会话按钮对比度过低 | 低 | 已关闭 |
| [#3323](https://github.com/agentscope-ai/QwenPaw/issues/3323) | 局域网部署 icon 找不到 | 低 | Open |

---

## 6. 功能请求与路线图信号

### 高呼声功能需求（多用户请求/已有对应 PR）

| Issue # | 功能描述 | 用户场景 | 对应 PR | 纳入可能性 |
|---------|----------|----------|---------|------------|
| [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) / [#3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) | 文件操作回滚（恢复误删/覆盖文件） | 防止 Agent 误操作导致数据丢失 | #3346 Open | ⭐⭐⭐ 高 |
| [#2416](https://github.com/agentscope-ai/QwenPaw/issues/2416) | 支持并发对话/运行中发送后续消息 | 长任务阻塞时无法继续交互 | #2904 Under Review | ⭐⭐⭐ 高

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**报告日期**: 2026-04-14  
**数据范围**: 过去 24 小时  
**项目仓库**: zeroclaw-labs/zeroclaw  
**总体活跃度**: 🟢 高活跃

---

## 1. 今日速览

ZeroClaw 项目今日保持极高开发活跃度，共处理 70 项工件更新（20 Issues + 50 PRs）。安全修复成为今日焦点——一项 S0 级别的命令策略绕过漏洞已提交 PR #5702，同时 Dependabot 推送了 rand 库安全补丁 #5713。项目在插件系统（WASM）、Matrix 频道增强、邮件协议扩展（IMAP fallback）等基础设施方向持续推进，RFC 框架也迎来第六篇文档讨论代码健康标准。整体代码库质量维护与功能扩展并行推进，生态建设稳健。

---

## 2. 版本发布

**今日无新版本发布**  
项目最新稳定版本仍为 v0.6.9（v0.7.0 正在开发中）。

---

## 3. 项目进展

### 3.1 已合并/关闭的重要 PR

| PR 编号 | 标题 | 贡献者 | 状态 |
|---------|------|--------|------|
| [#2420](https://github.com/zeroclaw-labs/zeroclaw/pull/2420) | feat(agent): smarter team/subagent orchestration with hot runtime config | chumyin | ✅ CLOSED |
| [#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575) | fix(build): Extremely slow project compilation | sept-joe | ✅ CLOSED |
| [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | [Bug]: Duplicate consecutive assistant messages | LongCHN | ✅ CLOSED |
| [#5268](https://github.com/zeroclaw-labs/zeroclaw/issues/5268) | Context compressor drops tool_call_id | mmaryam2020 | ✅ CLOSED |
| [#5706](https://github.com/zeroclaw-labs/zeroclaw/pull/5706) | chore(owners): remove SimianAstronaut7 from CODEOWNERS | theonlyhennygod | ✅ CLOSED |

**关键进展**:
- **团队编排系统升级** (#2420): 深度重构 agent teams 和 subagents 架构，实现运行时配置化路由，关闭关联 issue #2419
- **编译性能优化** (#5575): 针对 Rust 项目编译效率问题的修复已合并
- **消息去重** (#5584): 修复模型返回 narration 文本伴随 tool calls 时的重复消息问题
- **上下文压缩修复** (#5268): 修复快速裁剪步骤丢失 `tool_call_id` 导致 DeepSeek 400 错误

### 3.2 待合并的热门 PR

| PR 编号 | 标题 | 贡献者 | 关注度 |
|---------|------|--------|--------|
| [#5231](https://github.com/zeroclaw-labs/zeroclaw/pull/5231) | feat(plugins): add WASM plugin system with security sandbox | Biztactix-Ryan | ⭐⭐⭐ |
| [#5702](https://github.com/zeroclaw-labs/zeroclaw/pull/5702) | fix(security): block dangerous interpreter arguments | singlerider | ⭐⭐⭐⭐ |
| [#5602](https://github.com/zeroclaw-labs/zeroclaw/pull/5602) | feat(mattermost): replace REST polling with WebSocket | eastriverlee | ⭐⭐ |
| [#5712](https://github.com/zeroclaw-labs/zeroclaw/pull/5712) | feat(channel): add IMAP polling fallback | rpodgorny | ⭐⭐ |
| [#5166](https://github.com/zeroclaw-labs/zeroclaw/pull/5166) | feat(matrix): mention_only filtering, enhanced media handling | singlerider | ⭐⭐ |
| [#5517](https://github.com/zeroclaw-labs/zeroclaw/pull/5517) | feat(config): forward-only schema versioning V1→V2 | singlerider | ⭐⭐ |
| [#5708](https://github.com/zeroclaw-labs/zeroclaw/pull/5708) | perf(deps): upgrade rumqttc 0.24 → 0.25.1 | theonlyhennygod | ⭐⭐ |
| [#5707](https://github.com/zeroclaw-labs/zeroclaw/pull/5707) | perf(deps): remove 21 unused dependencies | theonlyhennygod | ⭐⭐ |
| [#5711](https://github.com/zeroclaw-labs/zeroclaw/pull/5711) | perf(deps): tier channels into core and extended | theonlyhennygod | ⭐⭐ |
| [#5696](https://github.com/zeroclaw-labs/zeroclaw/pull/5696) | feat(tools): add SessionResetTool and SessionDeleteTool | Audacity88 | ⭐⭐ |

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 👍 | 严重度 |
|------------|------|--------|-----|--------|
| [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) | Matrix channel: friction tracker (umbrella) | 11 | 2 | - |
| [#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) | [Bug]: CPU spikes when typing into agent chat | 4 | 0 | S0 |
| [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | [Bug]: Duplicate consecutive assistant messages | 4 | 0 | S2 |
| [#5268](https://github.com/zeroclaw-labs/zeroclaw/issues/5268) | Context compressor drops tool_call_id | 3 | 0 | S2 |
| [#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) | [Bug]: Daemon service auto-starts on boot | 3 | 0 | S2 |

**热点分析**:
- **Matrix 频道** (#4657): 作为综合追踪 issue 已持续近一个月，今日更新获得 11 条评论，说明 Matrix 频道功能仍是社区关注焦点，特别是 E2EE OTK 重试循环等加密相关问题
- **CPU 性能问题** (#5125): Firefox 浏览器在 Ubuntu 下打字时触发多核 CPU 峰值，属于用户日常使用痛点
- **Daemon 服务行为** (#5628): systemd 服务自动启动导致端口冲突，影响手动运行场景

### 4.2 新兴 RFC 讨论

**#5653** - *RFC: Zero Compromise in Practice — Code Health, Error Discipline, and the Production Readiness Standard*
- 作者: WareWolf-MoonWall
- 状态: Draft, Rev. 1
- 意义: 作为 ZeroClaw 成熟度框架第六篇文档，讨论代码健康标准和生产就绪规范，预示 v0.7.0 可能在质量维度有更多要求

---

## 5. Bug 与稳定性

### 5.1 按严重程度排列的 Bug 报告

#### 🔴 S0 - 数据丢失 / 安全风险

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#5698](https://github.com/zeroclaw-labs/zeroclaw/issues/5698) | Allowlisted 解释器（python3, node, pip, npm, cargo）通过 -c/-e/install 参数绕过命令策略 | OPEN | ✅ [#5702](https://github.com/zeroclaw-labs/zeroclaw/pull/5702) |
| [#5692](https://github.com/zeroclaw-labs/zeroclaw/issues/5692) | 无法在工作目录创建文件，权限声明错误 | OPEN | ❌ |
| [#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) | Firefox 浏览器打字时多核 CPU 峰值 | OPEN | ❌ |

#### 🟠 S1 - 工作流阻塞

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#5697](https://github.com/zeroclaw-labs/zeroclaw/issues/5697) | skills.allow_scripts=true 时 Skills 仍被阻止 | OPEN | ❌ |
| [#5685](https://github.com/zeroclaw-labs/zeroclaw/issues/5685) | CLI channel factory 未注册导致 agent 模式崩溃 | OPEN | ❌ |
| [#5553](https://github.com/zeroclaw-labs/zeroclaw/issues/5553) | Shell 工具执行后 Telegram 频道返回原始 JSON 或空结果 | OPEN | ❌ |

#### 🟡 S2 - 降级行为

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) | Daemon 服务开机自启导致端口冲突 | OPEN | ❌ |
| [#5268](https://github.com/zeroclaw-labs/zeroclaw/issues/5268) | Context compressor 丢失 tool_call_id 导致 DeepSeek 400 | ✅ CLOSED | ✅ |
| [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | 模型返回 narration + tool_calls 时产生重复消息 | ✅ CLOSED | ✅ |

#### 🟢 S3 - 小问题

| Issue | 描述 | 状态 |
|-------|------|------|
| [#5687](https://github.com/zeroclaw-labs/zeroclaw/issues/5687) | rust-analyzer VSCode 插件报错 |
| [#5679](https://github.com/zeroclaw-labs/zeroclaw/issues/5679) | i18n 文档引用已移除的 install.sh 标志 |

**紧急事项**: 
- **安全漏洞 #5698** 已提交 Fix PR [#5702](https://github.com/zeroclaw-labs/zeroclaw/pull/5702)，建议优先审查合并
- **ClawSafe 安全扫描** (#5709): 报告 188 项安全相关发现（66 项 Critical），建议安全团队跟进

---

## 6. 功能请求与路线图信号

### 6.1 新功能请求

| Issue | 功能描述 | 投票 | 关联 PR |
|-------|----------|-----|---------|
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | 为 Ollama Cloud、z.ai、Kimi、MiniMax 添加订阅原生 OAuth 支持 | 👍 1 | ❌ |
| [#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696) | Shell 命令预/后置消息钩子（内存、日志、上下文注入） | 👍 0 | ❌ |
| [#5686](https://github.com/zeroclaw-labs/zeroclaw/issues/5686) | 添加 QQ 消息命令支持 | 👍 0 | ❌ |

### 6.2 已在开发中的功能（关联 PR）

| PR | 功能 | 进展 |
|----|------|------|
| [#5231](https://github.com/zeroclaw-labs/zeroclaw/pull/5231) | WASM 插件系统 + 安全沙箱 | OPEN - 活跃开发 |
| [#5602](https://github.com/zeroclaw-labs/zeroclaw/pull/5602) | Mattermost WebSocket 支持 + 全频道/DM | OPEN - Review 中 |
| [#5712](https://github.com/zeroclaw-labs/zeroclaw/pull/5712) | IMAP polling fallback（无 IDLE 服务器支持） | OPEN |
| [#5166](https://github.com/zeroclaw-labs/zeroclaw/pull/5166) | Matrix mention_only 过滤 + 媒体处理增强 | OPEN |
| [#5517](https://github.com/zeroclaw-labs/zeroclaw/pull/5517) | 配置模式版本化 V1→V2 迁移 | OPEN - 寻求反馈 |
| [#5705](https://github.com/zeroclaw-labs/zeroclaw/pull/5705) | Gateway session abort + 流式响应持久化 | OPEN |
| [#5696](https://github.com/zeroclaw-labs/zeroclaw/pull/5696) | SessionResetTool / SessionDeleteTool | OPEN |

### 6.3 基础设施改进

**#5710** - *OTEL spans lack parent-child relationships*
- 所有 span 作为独立 root trace 发出，无法追踪单一对话流程
- 影响: 可观测性、调试能力

**#5701** - *add clear_messages to SessionBackend trait*
- 提议: 为 O(1) session 重置添加高效清除方法，避免 O(n²) 的循环删除

**#5711** - *tier channels into core and extended*
- 将通道分层为核心（默认）和扩展（可选），减少默认构建体积
- 迁移: email、telegram、lark 通道标记为可选依赖

---

## 7. 用户反馈摘要

### 7.1 痛点与不满

1. **编译效率低下**: 开发者反映 `cargo build` 即使修改单行代码也触发完整编译，影响二次开发效率（#5575 已修复）

2. **本地 AI 配置问题**: Docker 容器内 onboarding 时，Ollama 等本地 Provider 使用 `localhost` URL 导致无法连接（#5552 Fix PR 在审）

3. **Daemon 服务侵入性**: systemd 服务开机自启占用端口，与手动运行冲突（#5628）

4. **Shell 工具在 Telegram 表现异常**: 命令执行成功但频道返回原始 JSON，用户体验割裂（#5553）

5. **i18n 文档回归**: install.sh 重写后，30+ 翻译文档引用已移除的标志，给非英语用户造成困扰（#5679）

### 7.2 积极反馈与需求

- **WASM 插件系统** (#5231) 收到社区期待，用户需要领域特定工具（CRM、内部 API）而无需 fork 核心代码
- **OAuth 认证** (#5601) 呼声较高，用户不愿管理静态 API key，尤其对于免费/订阅制 Provider
- **Shell 钩子机制** (#3696) 被视为重要扩展点，用于内存集成、日志、上下文注入等自动化场景

### 7.3 安全意识提升

- **ClawSafe 扫描报告** (#5709): 188 项安全发现（66 Critical），社区对安全扫描工具的集成表示认可
- **命令策略加固** (#5698/#5702): 安全研究员发现解释器参数绕过漏洞并提交修复，展现社区安全参与度

---

## 8. 待处理积压

### 8.1 长期未响应的 Issue（>30 天无维护者回复）

| Issue | 创建日期 | 标题 | 关注度 |
|-------|----------|------|--------|
| [#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696) | 2026-03-16 | Pre/post message hooks for shell commands | 0 👍 |
| [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) | 2026-03-25 | Matrix channel friction tracker | 2 👍 |

### 8.2 长期 Open 的重要 PR（待 Review）

| PR | 创建日期 | 标题 | 年龄 |
|----|----------|------|------|
| [#5231](https://github.com/zeroclaw-labs/zeroclaw/pull/5231) | 2026-04-02 | WASM plugin system | 12 天 |
| [#5166](https://github.com/zeroclaw-labs/zeroclaw/pull/5166) | 2026-04-02 | Matrix channel enhancements | 12 天 |
| [#2420](https://github.com/zeroclaw-labs/zeroclaw/pull/2420) | 2026-03-01 | Team/subagent orchestration | 44 天 |

### 8.3 建议优先处理

1. **🔴 安全修复 #5702**: 命令策略绕过漏洞 Fix PR 需优先审查合并
2. **🔴 ClawSafe 报告 #5709**: 66 项 Critical 安全发现需评估处理
3. **🟠 WASM 插件系统 #5231**: 12 天无更新，社区期待的功能建议推动 Review
4. **🟠 Matrix 频道 #5166**: 与 umbrella issue #4657 关联，影响大量用户

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 新开/活跃 Issues | 17 |
| 已关闭 Issues | 3 |
| 待合并 PRs | 29 |
| 已合并/关闭 PRs | 21 |
| 新版本发布 | 0 |
| S0 严重 Bug | 3 |
| S1 严重 Bug | 3 |
| 功能请求 | 3 |
| 安全相关 Issue/PR | 4 |

---

*报告生成时间: 2026-04-14 | 数据来源: zeroclaw-labs/zeroclaw GitHub*

</details>

---
*本日报由 [agents-radar](https://github.com/manelsen/agents-radar) 自动生成。*