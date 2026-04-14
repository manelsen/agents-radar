# AI CLI Tools Community Digest 2026-04-14

> Generated: 2026-04-14 13:13 UTC | Tools covered: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Ecosystem

## 2026-04-14

---

## 1. Ecosystem Overview

The AI CLI tools landscape demonstrates a maturing market with clear specialization patterns emerging. Claude Code and GitHub Copilot CLI target professional developers with enterprise-grade features (plugins, authorization granularity), while OpenAI Codex pursues multi-agent orchestration for distributed teams. Google's Gemini CLI addresses premium Google One subscribers as a distinct market segment. Regional players—Kimi Code (Chinese market) and Qwen Code—compete on pricing and localization. OpenCode positions as an open-source Copilot alternative, and Pi serves experimental use cases with strong extension architecture. The ecosystem collectively signals convergence toward MCP standardization, with authentication/token management representing the dominant cross-tool pain point.

---

## 2. Activity Comparison

| Tool | Hot Issues | Max Comments on Issue | Key PRs Active | Releases (24h) | Community Velocity |
|------|------------|----------------------|----------------|----------------|-------------------|
| **Claude Code** | 10 | 575 (#38335) | 10+ | 2 (v2.1.105, v2.1.107) | Very High |
| **OpenAI Codex** | 10 | 534 (#14593) | 10+ | 2 (alpha builds) | High |
| **OpenCode** | 10 | 215 (#8030) | 10+ | 0 | High |
| **Gemini CLI** | 10 | 87 (#24517) | 10 | 2 (nightly + patch) | Medium-High |
| **Copilot CLI** | 10 | 25 | Recent | 2 (v1.0.25, v1.0.26-0) | Medium |
| **Pi** | 10 | 14 | 10+ | 1 (v0.67.1) | Medium |
| **Qwen Code** | 10 | 6 | 10+ | 2 (v0.14.4 + nightly) | Medium |
| **Kimi Code** | 10 | 9 | 7+ | 1 (v1.34.0) | Low-Medium |

**Key Observations:**
- **Claude Code** leads in community engagement volume, with the highest comment density and most active release cadence
- **OpenAI Codex** and **OpenCode** share similar high-traffic patterns around authentication/billing issues
- **Kimi Code** has the lowest community engagement, with thinking regression issues underdiscussed relative to severity

---

## 3. Shared Feature Directions

### Authentication & Token Management (All Tools)
**Affected:** Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, OpenCode, Kimi Code

| Tool | Specific Issue |
|------|---------------|
| Claude Code | OAuth paste failures (Linux, Windows, WSL, Dev Containers); quota exhaustion anomalies |
| OpenAI Codex | Rate limiting with 534 comments; token consumption without clear cause |
| Gemini CLI | 403 PERMISSION_DENIED for Google One Premium subscribers; 429 RESOURCE_EXHAUSTED on Pro |
| Copilot CLI | Authorization errors despite valid sessions; model entitlement mismatches |
| OpenCode | Copilot auth consuming premium requests (X-Initiator header regression) |
| Kimi Code | Long-standing API 400 errors persisting since January |

**Implication:** OAuth/credential flows represent the highest-priority UX failure across vendors, suggesting systemic API design or token management complexity.

### MCP (Model Context Protocol) Integration (4+ Tools)
**Affected:** Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI

| Tool | MCP Focus |
|------|-----------|
| Claude Code | Background monitor plugin support; OAuth token persistence for MCP servers |
| OpenAI Codex | Typed tool namespaces; deferred tool loading for context efficiency |
| Gemini CLI | MCP list command optimization; sandbox-aware tool metadata |
| Copilot CLI | MCP server registry installation; ACP client extensibility |

**Implication:** MCP is becoming the de facto integration standard; differentiation lies in tooling UX, connection resilience, and server discovery.

### Cross-Platform Windows/WSL Support (5 Tools)
**Affected:** Gemini CLI, Copilot CLI, Kimi Code, OpenCode, Qwen Code

Common failure modes:
- RipGrep binary incompatibility (ARM/x64 mismatches, spawn EFTYPE errors)
- Auth/permission persistence failures
- Path format issues in git operations
- Shell/keyboard input regressions (German layout @ symbol, Emacs bindings)

### Reasoning/Thinking Process Control (3 Tools)
**Affected:** Claude Code, Kimi Code, OpenCode

| Tool | Approach |
|------|----------|
| Claude Code | Thinking hints display timing; PreCompact hook for blocking |
| Kimi Code | `show_thinking_stream` config; excessive token consumption on k2.6-code-preview |
| OpenCode | `` parsing; verbosity reduction requests |

**Implication:** Thinking/reasoning transparency is emerging as a UX differentiator; users demand visibility and control.

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|---------------|-------------|-------------------|
| **Claude Code** | Plugin ecosystem, session automation | Power users, AI-augmented developers | Hooks/PreCompact blocking, worktree navigation, community plugin marketplace |
| **OpenAI Codex** | Multi-agent orchestration, remote development | Distributed enterprise teams | Agent identity support, prefix compaction, sandbox IPC (Unix sockets) |
| **Gemini CLI** | Google ecosystem integration, authentication | Google One Premium subscribers | Policy engine (YOLO mode), quota display, RipGrep bundling |
| **Copilot CLI** | Enterprise authorization, shell integration | Enterprise GitHub users | Model access policies, Interactive Mode whitelists, ACP client extensibility |
| **Kimi Code** | Reasoning visibility, CJK market | Chinese developers, cost-conscious users | Thinking stream control, background task stability |
| **OpenCode** | Open-source flexibility, provider abstraction | Self-hosted/privacy-focused users | Multiple model providers, SQLite optimization, inline skill invocation |
| **Pi** | Terminal innovation, extension architecture | Experimental developers | OSC 8 hyperlinks, terminal multiplexing, TMUX-style splits |
| **Qwen Code** | Session management, extensibility | Developers seeking Claude Code parity | Memory system alignment, hook system, batch operations |

**Key Differentiators:**
- **Claude Code** owns the plugin/extension marketplace (community-built notification, usage monitoring, subagent cleanup plugins)
- **OpenAI Codex** leads in multi-agent primitives (fanout fixes, agent identity, sandbox security pivots)
- **Pi** innovates on TUI capabilities (terminal multiplexing, hyperlinks, super keybindings)
- **Regional tools** (Kimi, Qwen) focus on pricing, localization, and compatibility parity

---

## 5. Community Momentum & Maturity

### High Maturity (Strong Iteration + Active Community)
1. **Claude Code** — 2 releases/24h, 575-comment issues, 10+ active PRs, established plugin ecosystem
2. **OpenAI Codex** — Consistent alpha iterations, multi-agent primitives stabilization, high-traffic auth issues

### Growing Maturity (Active Development, Emerging Community)
3. **OpenCode** — Strong PR velocity, inline skill invocation shipped, Copilot auth regression tracking
4. **Pi** — 14 PRs closed in cycle, terminal innovation (multiplexing, hyperlinks), security fixes (fast-xml-parser)

### Mid-Maturity (Active but Smaller Community)
5. **Gemini CLI** — P1 auth fix in progress, nightly/patch release cadence, Windows RipGrep fixes
6. **Qwen Code** — Session management focus, hook system expansion, memory system alignment with Claude Code

### Early Maturity (Active Development, Limited Community)
7. **Copilot CLI** — Recent feature momentum (default model selection, MCP registry), but lower engagement
8. **Kimi Code** — Thinking regression underdiscussed, lower issue volume despite critical UX impacts

---

## 6. Trend Signals

### For Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **MCP Standardization** | Four tools actively improving MCP integration (tool registration, deferred loading, sandbox metadata) | Invest in MCP-compatible toolchain; avoid proprietary integration lock-in |
| **Authentication as Critical Path** | 6+ tools with auth failures; impacts paying customers directly | Prioritize vendors with stable OAuth flows; plan for credential refresh handling |
| **Terminal UI Arms Race** | Pi (multiplexing, hyperlinks), Copilot CLI (keyboard nav), OpenCode (inline skills) | TUI innovation is a differentiator; expect VS Code-tier terminal experiences |
| **Plugin/Extension Ecosystems** | Claude Code plugin marketplace, Pi extension factories, Copilot CLI MCP registry | Choose platforms with third-party extensibility for long-term flexibility |
| **Background Task Reliability** | Claude Code (subagent cleanup), Kimi Code (background task crashes), OpenCode (event loop issues) | Agent lifecycle management (cleanup, resumption, graceful termination) is an operational requirement |
| **Multi-Agent Primitives** | OpenAI Codex (fanout, agent identity), Paperclip orchestrator integration | Multi-agent orchestration is maturing; expect first-class support across tools |

### For Developers

| Signal | Action |
|--------|--------|
| **Auth fragility across tools** | Implement retry logic and session state persistence; don't assume OAuth flows are stable |
| **MCP tool registry growth** | Build MCP-compatible integrations; typed tool namespaces reduce context bloat |
| **Thinking/reasoning control gaps** | Request visibility APIs from vendors; current implementations are inconsistent |
| **Windows/WSL parity gaps** | Test cross-platform; assume Windows workflows require additional QA cycles |
| **Plugin opportunities** | Community plugins for Claude Code (notifications, usage monitoring) show market demand; consider plugin development for underserved features |

---

*Report generated from community digest data across 8 AI CLI tools — 2026-04-14*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

## 1. Top Skills Ranking

The following Skills have generated the most community engagement through pull requests and discussion. Note: Comment counts show as "undefined" in the dataset, but these PRs represent substantive community contributions.

| Rank | PR # | Skill Name | Functionality | Status |
|------|------|------------|---------------|--------|
| 1 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Typographic quality control for AI-generated documents—prevents orphan word wrap (1-6 words spilling to next line), widow paragraphs (headers stranded at page bottom), and numbering misalignment. Targets a universal pain point in document generation. | Open |
| 2 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer & skill-security-analyzer** | Meta-skills for the example-skills marketplace that evaluate Skill quality across five dimensions (Structure, Documentation, Edge Cases, Error Handling, Security) and perform security audits. | Open |
| 3 | [#806](https://github.com/anthropics/skills/pull/806) | **sensory** | Native macOS automation skill via AppleScript (`osascript`), replacing screenshot-based computer use with a two-tier permission system for app scripting and UI automation. | Open |
| 4 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing skill covering the full stack: Testing Trophy philosophy, unit testing (AAA pattern), React component testing (Testing Library), and integration/E2E strategies. | Open |
| 5 | [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design** (improved) | Revised clarity and actionability for frontend design guidance—ensures every instruction is executable within a single conversation and steers behavior without ambiguity. | Open |
| 6 | [#154](https://github.com/anthropics/skills/pull/154) | **shodh-memory** | Persistent memory system for AI agents that maintains context across sessions via structured Markdown entries in `.claude/knowledge/entries/`. | Open |
| 7 | [#521](https://github.com/anthropics/skills/pull/521) | **record-knowledge** | Enables Claude Code to record learned workarounds and session-specific knowledge as tagged Markdown entries that persist across sessions and remain available to the team. | Open |
| 8 | [#181](https://github.com/anthropics/skills/pull/181) | **SAP-RPT-1-OSS predictor** | Integrates SAP's open-source tabular foundation model for predictive analytics on SAP business data, released at SAP TechEd 2025. | Open |

---

## 2. Community Demand Trends

Issues reveal five dominant demand vectors:

| Trend | Issue # | Summary | Engagement |
|-------|---------|---------|------------|
| **Skill Reliability & Discovery** | [#62](https://github.com/anthropics/skills/issues/62) | Users report skills disappearing and upload failures—loss of 12+ custom skills. | 10 comments, 1 👍 |
| **Skill Creator UX** | [#202](https://github.com/anthropics/skills/issues/202) | `skill-creator` reads as developer documentation rather than executable instructions; tone is educational vs. operational, hurting token efficiency. | 8 comments, 1 👍 |
| **Evaluation Infrastructure** | [#556](https://github.com/anthropics/skills/issues/556) | `run_eval.py` has 0% skill trigger rate—skills never fire during evaluation, breaking the test harness. | 5 comments, 6 👍 |
| **Package Duplication** | [#189](https://github.com/anthropics/skills/issues/189) | `document-skills` and `example-skills` plugins contain identical content, causing duplicate skills in Claude's context window. | 5 comments, 7 👍 |
| **Security & Trust** | [#492](https://github.com/anthropics/skills/issues/492) | Community skills distributed under `anthropic/` namespace impersonate official skills, enabling trust boundary abuse. | 4 comments, 2 👍 |
| **Enterprise Integration** | [#29](https://github.com/anthropics/skills/issues/29) | Demand for AWS Bedrock support; [#532](https://github.com/anthropics/skills/issues/532) blocked by `ANTHROPIC_API_KEY` requirement (enterprise SSO users excluded). | 4 comments each |

**Emerging themes:**
- **Cross-session persistence**: Multiple proposals (shodh-memory, record-knowledge) address Claude Code's context loss between sessions.
- **Org-wide sharing**: Issue [#228](https://github.com/anthropics/skills/issues/228) requests shared skill libraries for teams.
- **MCP exposure**: Issue [#16](https://github.com/anthropics/skills/issues/16) proposes exposing Skills as Model Context Protocol endpoints.

---

## 3. High-Potential Pending Skills

These open PRs have clear scope and strong functional differentiation—they appear closest to merge readiness:

| PR # | Skill | Key Differentiator | Review Priority |
|------|-------|-------------------|-----------------|
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Full testing stack coverage (unit → integration → E2E) with Testing Trophy model; directly addresses a recurring community need. | High |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Solves a universal, daily pain point affecting every document Claude generates; scope is well-defined. | High |
| [#806](https://github.com/anthropics/skills/pull/806) | **sensory** | First macOS native automation skill; shifts from screenshot-based to script-based control. | High |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality/security analyzers** | Meta-skills that improve the overall ecosystem quality; high leverage if adopted. | Medium-High |
| [#541](https://github.com/anthropics/skills/pull/541) | **fix(docx) w:id collision** | Bug fix preventing document corruption—clear bug, targeted solution. | High (bug fix) |
| [#539](https://github.com/anthropics/skills/pull/539) | **fix(skill-creator YAML validation** | Prevents silent YAML failures; improves skill creation reliability. | Medium (tooling) |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for Skills that fill critical gaps in Claude Code's core workflow—persistent memory across sessions, reliable document output quality, and native system automation—with parallel concern that the skill creation and evaluation tooling itself needs hardening before the ecosystem can scale.**

---

# Claude Code Community Digest — 2026-04-14

## 1. Today's Highlights

Two releases shipped in the last 24 hours with significant tooling improvements: **v2.1.107** shows thinking hints sooner during long operations, while **v2.1.105** introduced worktree navigation, PreCompact hook blocking, and background monitor plugin support. Meanwhile, the community is rallying around several high-impact issues—particularly around OAuth paste failures, session quota anomalies, and the removal of the `/buddy` skill—creating a surge of regression reports.

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v2.1.107** | Show thinking hints sooner during long operations |
| **v2.1.105** | Added `path` parameter to `EnterWorktree` tool for switching into existing worktrees; Added PreCompact hook support with blocking capability (exit code 2 or `{"decision":"block"}`); Added background monitor support for plugins |

---

## 3. Hot Issues

| # | Issue | Author | Comments | 👍 | Why It Matters |
|---|-------|--------|----------|----|----------------|
| **#38335** | [BUG] Claude Max plan session limits exhausted abnormally fast since March 23, 2026 | karenrebecag | 575 | 402 | Users report quotas depleting in hours despite moderate usage. Likely related to February model updates causing excessive token consumption. [Issue #38335](https://github.com/anthropics/claude-code/issues/38335) |
| **#42796** | [MODEL] Claude Code is unusable for complex engineering tasks with Feb updates (CLOSED) | stellaraccident | 415 | 1778 | Major regression rendering Claude Code unsuitable for serious engineering work—1,778 👍 indicates widespread impact. Now closed, indicating acknowledgment. [Issue #42796](https://github.com/anthropics/claude-code/issues/42796) |
| **#45596** | Bring Back Buddy — A Consolidated Plea from the Community | Hujoepandiselvan | 155 | 650 | `/buddy` skill removed silently in v2.1.97 with no changelog mention. 650 upvotes signal strong community attachment to this feature. [Issue #45596](https://github.com/anthropics/claude-code/issues/45596) |
| **#46987** | [BUG] API Error: Stream idle timeout - partial response received | ac-monty | 72 | 52 | Repeated stream timeout errors causing request failures—affecting multiple users on macOS. [Issue #46987](https://github.com/anthropics/claude-code/issues/46987) |
| **#18435** | [FEATURE] Multiple Claude accounts management in Desktop app | Agentic-Marketer | 55 | 333 | Highly requested quality-of-life feature for developers managing work/personal accounts—333 👍 reflects broad demand. [Issue #18435](https://github.com/anthropics/claude-code/issues/18435) |
| **#45756** | [BUG] Pro Max 5x Quota Exhausted in 1.5 Hours Despite Moderate Usage | molu0219 | 41 | 127 | Windows/WSL users experiencing accelerated quota depletion. Cross-platform concern. [Issue #45756](https://github.com/anthropics/claude-code/issues/45756) |
| **#47699** | [BUG] Cannot paste auth code in Dev Container (v2.1.105) | kazuyuki-saka | 38 | 44 | Auth flow regression preventing paste into "Paste code here" prompt—recently closed, suggesting fix in progress. [Issue #47699](https://github.com/anthropics/claude-code/issues/47699) |
| **#14227** | [FEATURE] Persistent Memory Between Sessions | sudoxreboot | 29 | 7 | Core UX limitation: Claude Code starts every session with zero context. This would transform the tool for long-running projects. [Issue #14227](https://github.com/anthropics/claude-code/issues/14227) |
| **#30948** | [BUG] LSP workspaceSymbol needs a query parameter | ratchanonp | 14 | 48 | LSP tool limitation: `workspaceSymbol` operation cannot pass query strings, breaking symbol search functionality. [Issue #30948](https://github.com/anthropics/claude-code/issues/30948) |
| **#47669** | [BUG] login with pasting auth code doesn't work (Linux) | shykwon | 17 | 13 | Auth paste broken on Linux in current version—part of a cluster of related auth regression issues. [Issue #47669](https://github.com/anthropics/claude-code/issues/47669) |

---

## 4. Key PR Progress

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| **#47759** | Rohan5commit | Add `notify-on-complete` plugin with Stop hook for desktop notifications, sound, or speech | Official plugin enabling ambient task completion alerts |
| **#47760** | Rohan5commit | Add `usage-monitor` plugin with SwiftBar menu bar integration | Self-contained token tracking without external scripts |
| **#47830** | hmennen90 | Add `subagent-cleanup` plugin to terminate orphaned processes | Addresses CPU/memory leaks from resumed subagent sessions |
| **#47554** | BalamuruganT006 | MCP OAuth token persistence across sessions | Fixes Supabase MCP re-authentication issue in Desktop app |
| **#47514** | Rohan5commit | Skip doc files in security-guidance substring checks | Reduces false positives during security scanning |
| **#47490** | Rohan5commit | Add `ask` action support for hookify PreToolUse rules | Enables interactive confirmations in hook automation |
| **#47676** | cirospaciari | Fix YAML validity in hookify and plugin-dev agent frontmatter | Resolves parsing errors in four agent files |
| **#47673** | cirospaciari | Add missing `.claude-plugin/plugin.json` manifest for plugin-dev | Completes the manifest for the only unmanifested plugin |
| **#47836** | Akshatkasera | Align hook validator with plugin hooks format | Improves hook validation flexibility for plugin authors |
| **#47674** | cirospaciari | Fix theme name typo in Dockerfile comment (powerline10k → powerlevel10k) | Documentation accuracy fix |

---

## 5. Feature Request Trends

Based on issue analysis, the community is advocating for:

1. **Persistent Session Memory** — Strong demand for Claude Code to retain project context between sessions, rather than starting fresh each time. Related: issue #14227.

2. **Multi-Account Management** — Seamless switching between Claude accounts without logout/login cycles. Issue #18435 has 333 👍.

3. **Enhanced LSP Integration** — Fix `workspaceSymbol` query parameter support; address stale diagnostics after file changes.

4. **Plugin Ecosystem Expansion** — Community plugins for notifications (#47759), usage monitoring (#47760), session preservation, and subagent cleanup show strong momentum.

5. **Enhanced Rename/Summarize** — `/rename` should consider overall session context, not just recent prompts (issue #46795).

---

## 6. Developer Pain Points

| Pain Point | Details | Frequency |
|------------|---------|-----------|
| **OAuth/Auth Paste Failures** | Cannot paste authentication codes in terminal prompts—affects Linux, Windows, WSL, Dev Containers. Multiple regressions in v2.1.105+. | **Very High** (7+ related issues) |
| **Quota/Session Limit Anomalies** | Max/Pro users experiencing rapid quota depletion inconsistent with usage patterns. Likely tied to February model updates. | **High** (2 major issues, 500+ comments combined) |
| **Model Usability Regression** | Complex engineering tasks reportedly degraded since February updates. Major concern for power users. | **High** (1,778 👍 on #42796) |
| **Missing `/buddy` Skill** | Silent removal of companion feature with no changelog entry. Community protest growing. | **Medium-High** (650 👍) |
| **Token Consumption Spikes** | February updates causing excessive token usage without clear user control. | **Medium** (ongoing investigation) |
| **WSL/Windows Auth Issues** | Cross-platform auth regressions particularly problematic on Windows Subsystem for Linux. | **Medium** (multiple issues) |

---

*Digest generated from GitHub data for [anthropics/claude-code](https://github.com/anthropics/claude-code) on 2026-04-14.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-14

## Today's Highlights

The Codex project sees continued alpha iteration with two new Rust SDK releases (v0.121.0-alpha.4 and v0.121.0-alpha.6), while community activity remains high with a critical rate-limit issue surpassing 500 comments. Key PRs address MCP tool registration improvements, remote apply-patch regression fixes, and new agent identity support features, indicating steady progress toward robust multi-agent capabilities.

---

## Releases

| Version | Type | Summary |
|---------|------|---------|
| [v0.121.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.121.0-alpha.6) | Rust SDK | Latest alpha iteration |
| [v0.121.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.121.0-alpha.4) | Rust SDK | Prior alpha release |

No changelog details provided. Developers tracking Rust SDK are advised to monitor release notes for breaking changes or new API methods.

---

## Hot Issues

| # | Issue | Author | 👍 | Why It Matters |
|---|-------|--------|----|----------------|
| [#14593](https://github.com/openai/codex/issues/14593) | **[bug, rate-limits] Burning tokens very fast** | cy-ooi88 | 208 | Users report rapid token consumption despite minimal interactions. With 534 comments, this is the highest-traffic issue, indicating a potential systemic problem affecting Business tier subscribers. |
| [#10450](https://github.com/openai/codex/issues/10450) | **[enhancement, app] Remote Development in Codex Desktop App** | pocca2048 | 538 | Most-requested feature with 117 comments. Community wants parity with VS Code's remote development capabilities (SSH, containers). Essential for teams with distributed workflows. |
| [#17615](https://github.com/openai/codex/issues/17615) | **[bug, azure, safety-check] Keep throwing "I'm sorry, but I cannot assist with that request"** | a7medgehad | 14 | Azure OpenAI Service users encounter false-positive safety rejections, blocking legitimate use cases. Affects enterprise deployments. |
| [#8784](https://github.com/openai/codex/issues/8784) | **[enhancement, TUI] "codex delete <session>"** | divinity76 | 51 | Direct user need for session lifecycle management. Current workaround requires manual file deletion—error-prone and inconvenient. |
| [#16088](https://github.com/openai/codex/issues/16088) | **[bug, windows-os, sandbox, regression] WSL: starting a thread leaves behind empty .codex file** | aprendendo-codex | 50 | Regression affecting WSL users; creates filesystem clutter and potential configuration conflicts. |
| [#17624](https://github.com/openai/codex/issues/17624) | **[bug, code-review, windows-os, app] Review tab passes literal Windows paths to git diff** | OKKU-Okuda | 5 | Code review workflow broken on Windows due to path format mismatch. Impacts developer daily workflow. |
| [#17767](https://github.com/openai/codex/issues/17767) | **[bug, extension] High CPU usage and overheating on macOS** | gunesyusuf34 | 0 | Newly reported; affects resource-constrained devices. Potential background loop or rendering issue. |
| [#17447](https://github.com/openai/codex/issues/17447) | **[bug, CLI] Codex CLI hangs at _dyld_start on macOS** | g-taki | 0 | Homebrew installation broken due to missing Apple notarization on macOS 26. Critical installation障礙. |
| [#17525](https://github.com/openai/codex/issues/17525) | **[bug, sandbox, regression] Ubuntu: every edit requires skipping sandbox** | jancellor | 0 | Regression in sandbox behavior; forces users to disable security checks—risky for production environments. |
| [#17772](https://github.com/openai/codex/issues/17772) | **[bug, app] Fast Mode has disappeared from Codex App** | miraclebakelaser | 1 | UI regression removing a commonly-used performance feature. Affects Pro users expecting optimized response speeds. |

---

## Key PR Progress

| # | PR | Author | Stage | Description |
|---|-----|--------|-------|-------------|
| [#17286](https://github.com/openai/codex/pull/17286) | **Prefix Compaction** | rka-oai | Open | Implements background prewarming of prefix compaction when history reaches threshold. Surfaces replacements as "Context prefix compacted" while preserving normal completion behavior. Directly addresses context window efficiency. |
| [#17404](https://github.com/openai/codex/pull/17404) & [#17504](https://github.com/openai/codex/pull/17504) | **MCP Tool Registration** | sayan-oai | Open | Fixes inconsistent MCP tool registration between deferred and direct tools. Keys MCP tool maps by ToolName for typed identities—improves reliability of third-party integrations. |
| [#17287](https://github.com/openai/codex/pull/17287) | **[code mode] Defer MCP tools from exec description** | sayan-oai | Open | In code-mode, hides MCP tools from exec tool description to prevent context bloat. Balances functionality with performance. |
| [#17386](https://github.com/openai/codex/pull/17386) | **Register agent identities behind use_agent_identity** | adrian-openai | Open | Stack PR 2/4 for agent identity feature gate. Enables agent identification without protocol changes, supporting multi-agent orchestration scenarios. |
| [#17732](https://github.com/openai/codex/pull/17732) | **Revert danger-full-access denylist-only mode** | viyatb-oai | Open | Reverts PR #16946 and removes associated network mode, config, and tests. Indicates a design pivot in sandbox security policy. |
| [#17725](https://github.com/openai/codex/pull/17725) | **Fix remote apply-patch timeout regression** | starr-openai | Open | Fixes regression where remote apply-patch times out due to sandbox helper discovery issues. Includes test binary sharing mechanism. |
| [#17654](https://github.com/openai/codex/pull/17654) | **Support Unix socket allowlists in macOS sandbox** | aaronl-openai | Open | Enables narrow IPC access (e.g., browser-use sockets) without broad network permissions. Critical for macOS GUI automation workflows. |
| [#17763](https://github.com/openai/codex/pull/17763) | **Send sandbox state through MCP tool metadata** | aaronl-openai | Open | Splits sandbox-state metadata path for MCP servers. Allows sandbox-aware tools to adjust behavior per-call—improves security and flexibility. |
| [#17713](https://github.com/openai/codex/pull/17713) | **Add opt-in provider runtime abstraction** | celia-oai | Open | First PR in series to abstract model provider config. Enables alternative backend integrations beyond OpenAI—key for enterprise flexibility. |
| [#17701](https://github.com/openai/codex/pull/17701) | **Add realtime output modality and transcript events** | aibrahim-oai | Closed | Wires text/audio output selection through app-server, core, API, and TUI. Supports richer interaction modalities beyond text. |
| [#17282](https://github.com/openai/codex/pull/17282) | **Fix agent-job fanout fill and post-completion hangs** | daveaitel-openai | Open | Resolves six linked issues in CSV agent fanout: underfill, worker starvation, and incomplete handoffs. Critical for production multi-agent pipelines. |

---

## Feature Request Trends

Aggregating top issues and PR direction, the community is pushing for:

1. **Remote Development Support** — SSH/containers parity with VS Code (#10450, 538 👍)
2. **Session Lifecycle Management** — `codex delete <session>` CLI command (#8784)
3. **Enhanced Sandbox Control** — Isolated writable `/tmp` mounts (#17625), Unix socket allowlists (#17654)
4. **Platform-Specific UX** — Windows path handling in review tabs (#17624), macOS notarization (#17447)
5. **Model Provider Flexibility** — Abstractions for non-OpenAI backends (#17713)
6. **MCP Ecosystem Maturity** — Typed tool namespaces (#17404, #17504), deferred tool loading (#17287)
7. **Multi-Agent Reliability** — Fixed fanout primitives (#17282), agent identity support (#17386)
8. **Performance Features** — Prefix compaction (#17286), Fast Mode UI (#17772)

---

## Developer Pain Points

| Category | Description | Frequency |
|----------|-------------|-----------|
| **Rate Limiting & Token Consumption** | Unclear why tokens deplete rapidly; affects billing predictability | High (#14593, 534 comments) |
| **Windows Platform Issues** | PowerShell host failures, literal path passing to git, app exit incomplete | High (multiple issues) |
| **macOS Gatekeeper/Notarization** | Homebrew installs fail on macOS 26 due to missing notarization | New, High (#17447) |
| **Multi-Agent Stream Reliability** | Intermittent "stream disconnected before completion" errors in child roles | Emerging (#17760) |
| **Sandbox UX Friction** | Excessive permission prompts, regression requiring "skip sandbox" workarounds | High (#6395, #17525) |
| **Session History Sync** | Thread history wiped in app but present in CLI; older threads disappear after restart | Medium (#17354, #17540) |
| **Capacity Errors** | Stale "model at capacity" banners despite available quota; misleading model recommendations | Medium (#11635, #17014) |
| **Azure Integration** | False safety rejections blocking legitimate Azure API usage | Medium (#17615) |

---

*Generated from GitHub data for [openai/codex](https://github.com/openai/codex) — 2026-04-14*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest

## 2026-04-14

---

## Today's Highlights

The Gemini CLI project addresses a critical authentication issue affecting Google One AI Premium subscribers who encounter 403 PERMISSION_DENIED errors despite proper account identification, now with 87 community comments. A new nightly build (v0.39.0-nightly.20260414) ships memory fixes for trace streaming and improved quota display for non-auto models, while a patch release v0.37.2 resolves cherry-picked regressions. Platform improvements include a fix for RipGrep download causing 2+ minute startup delays and enhanced MCP list command performance.

---

## Releases

### v0.39.0-nightly.20260414.gdaf500623
**Changes:**
- **Memory fix**: Resolved streamWrapper trace issue ([#25089](https://github.com/google-gemini/gemini-cli/pull/25089)) by @anthraxmilkshake
- **Quota display**: Fixed quota footer for non-auto models and improved terminal display ([#25121](https://github.com/google-gemini/gemini-cli/pull/25121)) by @jackwotherspoon

### v0.37.2
**Changes:**
- **Patch release**: Cherry-picked fix from commit 9d741ab to patch version v0.37.1, addressing regressions from [#24565](https://github.com/google-gemini/gemini-cli/pull/25322) by @gemini-cli-robot

---

## Hot Issues

### 1. [403 PERMISSION_DENIED for Google One AI Premium subscribers](https://github.com/google-gemini/gemini-cli/issues/24517)
**Priority: P1 | Platform | 87 comments | 44 👍**

The most active issue in the repository. Users with Google One AI Premium subscriptions report that while `/about` correctly identifies their tier as "Gemini Code Assist in Google One AI Pro," all API requests are blocked with 403 errors before consuming any tokens. Requests appear routed to `cloudcode-pa.goog` endpoints. This represents a significant auth regression affecting paying customers.

### 2. [429 RESOURCE_EXHAUSTED on Google AI Pro after full reset](https://github.com/google-gemini/gemini-cli/issues/22545)
**Platform | 22 comments | 21 👍**

Users experience consistent rate limiting (429 RESOURCE_EXHAUSTED) when authenticating with Google login on paid Google AI Pro accounts. The issue persists even after complete local resets including uninstall/reinstall and removal of all `~/.gemini` directories. Marked as possible duplicate.

### 3. ["The caller does not have permission" - API 403 error](https://github.com/google-gemini/gemini-cli/issues/25306)
**Security | 13 comments | 3 👍**

New issue from April 13th showing API 403 permission errors. Requested users attach exported chat history for debugging. Related to broader authentication issues (#24517).

### 4. [Policy files breaks YOLO mode after v0.37.0](https://github.com/google-gemini/gemini-cli/issues/25015)
**Priority: P0 | Core | 9 comments | 1 👍**

After upgrading to v0.37.0, YOLO mode (enabled via Ctrl+Y) fails to function—agents still request approval despite YOLO being active. This represents a critical regression blocking automated workflows. Created April 9th with ongoing investigation.

### 5. [Developer Knowledge MCP returns "Method not supported"](https://github.com/google-gemini/gemini-cli/issues/25107)
**Agent | 7 comments | 3 👍**

The Developer Knowledge API MCP server began returning errors around April 8th (JST) after working without issues previously. The MCP server reports "Method not supported" errors, breaking integrations that depend on this tool.

### 6. [Failing to download RipGrep causes 2+ minute startup delays](https://github.com/google-gemini/gemini-cli/issues/25323)
**Core | 6 comments**

When RipGrep fails to download (e.g., machine lacks GitHub access), Gemini CLI waits over two minutes before timing out. Proposed solutions include failing fast on access denied errors, caching failures across sessions, and potentially bundling RipGrep with the CLI distribution.

### 7. [grep_search fails with spawn EFTYPE on Windows](https://github.com/google-gemini/gemini-cli/issues/22784)
**Core | 5 comments**

Windows users encounter `spawn EFTYPE` errors when using the grep_search tool, indicating the downloaded RipGrep binary is either incompatible with the host architecture (e.g., ARM on x64) or corrupted during download.

### 8. [AST-aware file reads, search, and mapping investigation](https://github.com/google-gemini/gemini-cli/issues/22745)
**Agent | 🔒 Maintainer Only | 5 comments | 1 👍**

Epic tracking investigation into whether AST-aware tools could improve precision of file reads, method boundaries, and codebase navigation—potentially reducing tool call turns and token noise.

### 9. [Using Gemini CLI through Paperclip agent orchestrator](https://github.com/google-gemini/gemini-cli/issues/24011)
**Core | 3 comments | 1 👍**

Integration request from Paperclip (open-source multi-agent orchestrator) contributors. Paperclip provides "local adapters" to wrap CLI-based AI tools programmatically, enabling coordinated multi-agent workflows across Claude Code, Gemini CLI, and Codex.

### 10. [Gemini CLI keeps asking for permissions on the same file](https://github.com/google-gemini/gemini-cli/issues/24916)
**Security | 3 comments**

Permission prompts reappear for files already approved in prior sessions. The "allow for all future sessions" option fails to persist, creating a frustrating UX loop requiring repeated approvals.

---

## Key PR Progress

### 1. [Add tool argument keys reference and shell policy cross-links](https://github.com/google-gemini/gemini-cli/pull/25292)
**Priority: P3 | Docs | 0 comments**

Documents remaining gaps from issue #18750 by adding a "Tool argument keys" section with a reference table listing JSON argument keys for all 24 built-in tools, plus shell policy cross-links.

### 2. [Fix Windows RipGrep EFTYPE error](https://github.com/google-gemini/gemini-cli/pull/25378)
**Core | 0 comments**

Addresses [#22784](https://github.com/google-gemini/gemini-cli/issues/22784) by detecting architecture mismatches when spawning RipGrep binaries, preventing `spawn EFTYPE` errors on Windows systems with mismatched architectures.

### 3. [Enhance triage dashboard with daily metrics](https://github.com/google-gemini/gemini-cli/pull/25128)
**Closed | 0 comments**

Added status descriptions to triage dashboard, PR sorting by priority, and a new daily contribution metrics time-series visualization for maintainers.

### 4. [Add 'list' subcommand to /commands](https://github.com/google-gemini/gemini-cli/pull/22324)
**Core | Help Wanted | 0 comments**

Adds `/commands list` to display all active `.toml` command files, improving DX by letting users verify loaded custom commands and prompts without filesystem inspection.

### 5. [Use tsx for VS Code 'Run Current File' debug](https://github.com/google-gemini/gemini-cli/pull/25220)
**VS Code | 0 comments**

Fixes [#22844](https://github.com/google-gemini/gemini-cli/issues/22844) by updating VS Code debug configuration to use `tsx` for runtime transpilation of TypeScript files instead of raw Node.js execution.

### 6. [Optimize MCP list command to skip connection checks](https://github.com/google-gemini/gemini-cli/pull/25376)
**MCP | 0 comments**

Decouples server listing from connection testing, making `/mcp list` significantly faster for general management by skipping forced connection pings by default.

### 7. [Prevent spam loop when preferredEditor is invalid](https://github.com/google-gemini/gemini-cli/pull/25324)
**Priority: P2 | Core | 0 comments**

Fixes infinite error spam caused by unsupported `preferredEditor` values triggering feedback on every render cycle.

### 8. [Add visual regression tests for SettingsDialog](https://github.com/google-gemini/gemini-cli/pull/20695)
**Priority: P2 | Core | 0 comments**

Introduces first visual regression tests for terminal UI components, specifically targeting SettingsDialog responsiveness in various terminal layouts.

### 9. [Add verbose skill load timing diagnostics](https://github.com/google-gemini/gemini-cli/pull/25373)
**Core | 0 comments**

Addresses feature request #25315 by recording and reporting per-directory skill discovery timing, providing insight into skill loading performance.

### 10. [Handle RangeError when conversation exceeds JSON size](https://github.com/google-gemini/gemini-cli/pull/25364)
**Agent | 0 comments**

Fixes [#24902](https://github.com/google-gemini/gemini-cli/issues/24902) by catching `RangeError: Invalid string length` thrown when `JSON.stringify` exceeds V8's ~512MB limit on large conversation objects, preventing unhandled rejections that crash the CLI.

---

## Feature Request Trends

Analysis of 50 issues reveals these dominant feature directions:

| Theme | Frequency | Description |
|-------|-----------|-------------|
| **Authentication & Permissions** | High | Persistent issues with OAuth flows, tier detection, and permission persistence across sessions |
| **MCP Integration** | High | Multiple requests for MCP server improvements, better error handling, and connection management |
| **Windows Compatibility** | Medium-High | RipGrep binary issues, spawn errors, and formatting problems specific to Windows environments |
| **Memory & Session Management** | Medium | Better handling of conversation history, session collision, and memory routing (global vs project) |
| **AST-Aware Tools** | Medium | Investigation into whether AST parsing could improve file reads, search accuracy, and codebase mapping |
| **Policy Engine Enhancements** | Medium | YOLO mode reliability, approval mode awareness for subagents, and destructive operation warnings |
| **CLI Workspace Control** | Low-Medium | Requests for `--workspace` argument to override working directory and work with remote projects |
| **Accessibility** | Low | Table streaming rendering issues affecting screen reader users |

---

## Developer Pain Points

1. **Authentication Failures on Paid Tiers**  
   Google One AI Premium and Google AI Pro subscribers cannot use the CLI despite verified subscriptions. This directly impacts paying customers and represents the highest-priority user experience failure.

2. **RipGrep Download Performance**  
   Startup delays of 2+ minutes when network access to GitHub is restricted or unreliable. No fallback or bundling strategy currently exists.

3. **YOLO Mode Regression**  
   The automated approval mode introduced in v0.37.0 is non-functional, blocking CI/CD integrations and automated workflows that depend on unattended operation.

4. **Permission Persistence**  
   Users must repeatedly approve the same file operations across sessions, negating the intended "remember for all future sessions" functionality.

5. **Windows Platform Parity**  
   Consistent issues with binary compatibility, particularly RipGrep, spawn errors, and lint script failures on Windows environments—limiting enterprise adoption.

6. **MCP Server Reliability**  
   MCP tools returning "Method not supported" errors after previously working, suggesting API compatibility drift or version handling issues.

7. **Large Conversation Handling**  
   Conversations exceeding V8's JSON serialization limits crash the CLI instead of gracefully handling or truncating history.

8. **Scroll and Rendering Artifacts**  
   Long chat sessions exhibit screen flashing, scrollbar jumping, and table rendering corruption during streaming—impacting usability.

---

*Generated: 2026-04-14 | Data Source: github.com/google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest

**Date:** 2026-04-14
**Repository:** github.com/github/copilot-cli

---

## 1. Today's Highlights

The Copilot CLI team shipped two releases in the past 24 hours, with v1.0.26-0 introducing plugin environment variables and UI improvements for session navigation. Community discussions remain focused on authentication/authorization failures and model access policies, which continue to affect both enterprise and individual users. The most active issue (#2591) reveals a critical premium request consumption bug where a single session request triggers 80-100 premium requests.

---

## 2. Releases

### v1.0.26-0 (2026-04-14)
| Category | Change |
|----------|--------|
| **Added** | Plugin hooks now receive `PLUGIN_ROOT`, `COPILOT_PLUGIN_ROOT`, and `CLAUDE_PLUGIN_ROOT` environment variables containing the plugin's installation directory |
| **Improved** | Session scope selector in sync prompt is more prominent and keyboard-navigable with left/right arrow keys |

### v1.0.25 (2026-04-13)
| Category | Change |
|----------|--------|
| **Added** | Install MCP servers from the registry with guided configuration directly in the CLI |
| **Fixed** | Esc key now works correctly after a failed `/resume` session lookup |
| **Improved** | Resolved model persists in session history; model changes are deferred during active turns |
| **New** | ACP clients can now provide MCP servers (stdio transport) |

---

## 3. Hot Issues

**1. Premium Request Consumption Bug** [#2591](https://github.com/github/copilot-cli/issues/2591)
- **Severity:** Critical | 25 comments | 11 👍
- A single user request initiates a session where each agent reply after tool invocation or thinking steps consumes additional premium requests—reportedly 80-100 requests per original query.
- This represents a significant financial impact for paying users and may indicate a streaming/request-loop issue.

**2. Enterprise Model Access Policy Blocking** [#1595](https://github.com/github/copilot-cli/issues/1595)
- **Severity:** High | 23 comments | 9 👍
- Enterprise users with valid Copilot subscriptions cannot list models via `/models` command, receiving "access denied by Copilot policy" despite 40% premium requests remaining.
- Suggests policy sync issues between enterprise GitHub settings and CLI authentication layer.

**3. Missing Org-Enabled Models in CLI** [#1703](https://github.com/github/copilot-cli/issues/1703)
- **Severity:** High | 19 comments | 32 👍
- Copilot CLI shows a reduced model list compared to VS Code Copilot on the same account. Specific example: Gemini 3.1 Pro enabled in org settings but unavailable in CLI.
- Community concern is high (32 👍) as users expect feature parity across Copilot interfaces.

**4. Pro Trial Account Connection Failures** [#2686](https://github.com/github/copilot-cli/issues/2686)
- **Severity:** Medium | 14 comments | 4 👍
- Active Copilot Pro Trial users see "active subscription" on GitHub billing but CLI fails to load models and connect to MCP servers.
- Likely policy misclassification between trial and paid tiers.

**5. Recurring Authorization Errors** [#2684](https://github.com/github/copilot-cli/issues/2684)
- **Severity:** Medium | 11 comments | 0 👍
- Users report constant "Authorization error, you may need to run /login" despite being logged in.
- Symptoms include skill loading failures and session initialization errors.

**6. Model Entitlement Mismatch** [#2393](https://github.com/github/copilot-cli/issues/2393)
- **Severity:** Medium | 9 comments | 0 👍
- Same GitHub account can access Claude models in VS Code and GitHub.com, but CLI shows them under "Upgrade" with subscription exclusion message.
- Indicates entitlement resolution differs between interfaces.

**7. Tool Whitelist Feature Request** [#1973](https://github.com/github/copilot-cli/issues/1973)
- **Severity:** Enhancement | 7 comments | 10 👍
- Users want granular control over Interactive Mode approvals—currently must choose between per-tool approval or `/allow-all` (including destructive operations).
- Common request: auto-approve safe read-only commands (grep, cat, find, git log, etc.).

**8. Default Model Selection** [#1824](https://github.com/github/copilot-cli/issues/1824)
- **Severity:** Enhancement | 6 comments | 3 👍
- CLI always defaults to Claude Sonnet; users cannot set a persistent default model.
- Feature gap compared to VS Code where default model preferences are honored.

**9. MCP Server Unavailable Since Latest Update** [#2176](https://github.com/github/copilot-cli/issues/2176)
- **Severity:** High | 4 comments | 1 👍
- MCP servers are listed as enabled but LLM no longer recognizes their tools after restart.
- Regression affecting MCP-dependent workflows.

**10. German Keyboard @ Symbol Broken** [#1999](https://github.com/github/copilot-cli/issues/1999)
- **Severity:** Medium | 4 comments | 0 👍
- Alt-Gr + q (German layout) does not produce @ symbol, making CLI unusable for German keyboard users.
- Regression started in v1.0.2.

---

## 4. Key PR Progress

No pull requests were merged in the past 24 hours. For reference, recent closed PRs include fixes for:

- **Confirmation dialogs with `permissionDecision: allow`** - Plugin hooks rewriting commands via `updatedInput` now correctly bypass confirmation dialogs when explicitly allowed (Issue #2643)
- **Default model selection** - Users can now set preferred default model (Issue #1824)
- **Skills scroll bug** - Scrolling through 66+ skills now works correctly in PowerShell and Command Prompt (Issue #2575)

---

## 5. Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

| Trend | Description | Evidence |
|-------|-------------|----------|
| **Keyboard/Input Modes** | Vi/vim input mode for efficient modal editing (48 👍) is the highest-voted open request | Issue #13 |
| **MCP Server Ecosystem** | Better MCP discovery, registry installation, and configuration UX; ACP client extensibility | Issues #2109, #2176, #2282 |
| **Authorization/Permissions Granularity** | Tool whitelists for Interactive Mode; per-user default settings; session management | Issues #1973, #1673, #1824 |
| **Shell Compatibility** | Git Bash support on Windows requested; improved terminal/keyboard handling | Issues #508, #1999, #2413 |
| **Model Preference Persistence** | User-controlled default models; cross-session model memory | Issues #1824, #2393 |

---

## 6. Developer Pain Points

### Recurring Frustrations

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Authorization/authentication failures** | High—appears in 6+ recent issues | Blocks entire workflow; misleading error messages |
| **Model access policy inconsistencies** | High—enterprise and trial users affected | Cannot use paid/available models |
| **MCP server connectivity** | Medium | Breaks tool integrations; regression since recent updates |
| **Keyboard input regressions** | Medium | German layout @ symbol, X11 middle-click paste broken |
| **Premium request consumption** | Critical but isolated | Financial impact for affected users |

### High-Frequency Requests

1. **Fix authorization flow** — "Authorization error, you may need to run /login" persists despite valid sessions
2. **Model parity with VS Code** — Same account/org should expose identical models across interfaces
3. **Granular Interactive Mode controls** — Avoid all-or-nothing tool approvals
4. **Persistent preferences** — Default models, shell selection, input modes should persist across sessions
5. **Keyboard accessibility** — Vi mode, proper handling of international layouts, X11 selections

---

*Digest generated from github.com/github/copilot-cli issue and release data.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest

## 2026-04-14

---

## 1. Today's Highlights

Kimi Code CLI shipped **v1.34.0** with critical fixes for background task crashes and introduced a configurable `show_thinking_stream` option. The community is actively reporting a **thinking process regression** across multiple issues—the compact thinking indicator introduced in v1.33.0 appears to have removed the detailed per-block reasoning display that users relied on for transparency. Meanwhile, the k2.6-code-preview model is generating excessive thinking tokens (51+ rounds, 60K+ output tokens), disrupting developer workflows.

---

## 2. Releases

### v1.34.0 — Released 2026-04-14
**Full Changelog**: https://github.com/MoonshotAI/kimi-cli/compare/1.33.0...1.34.0

| Category | Change |
|----------|--------|
| **Core** | Fixed CLI crash on `TaskStop`—stopping stuck background agents no longer throws "Unhandled exception in event loop" or freezes the terminal ([#1871](https://github.com/MoonshotAI/kimi-cli/pull/1871)) |
| **Shell** | Added `show_thinking_stream` config to control thinking output visibility ([#1872](https://github.com/MoonshotAI/kimi-cli/pull/1872)) |
| **Shell** | Fixed inline diff highlighting offsets for tab-expanded text ([#1709](https://github.com/MoonshotAI/kimi-cli/pull/1709)) |

### v1.33.0 — Released 2026-04-13
Unified managed model display name from "Kimi for Code" across welcome screen and login tips, removing hardcoded `kimi-k2.5` references ([#1860](https://github.com/MoonshotAI/kimi-cli/pull/1860)).

---

## 3. Hot Issues

### 🔥 Critical Bugs

**1. [Thinking process not displayed in CLI](https://github.com/MoonshotAI/kimi-cli/issues/1864)** — Issue #1864
- **Author**: YunfanZhang42 | **Thumbs Up**: 8 | **Comments**: 9
- **Summary**: Since upgrading to v1.33.0, users no longer see detailed thinking/reasoning traces. The thinking indicator shows "Thinking... 3s · 245 tokens" but the actual reasoning content is hidden.
- **Why it matters**: Removes transparency into AI decision-making; users cannot verify reasoning accuracy.
- **Status**: Open, active discussion.

**2. [k2.6-code-preview generates excessive thinking tokens](https://github.com/MoonshotAI/kimi-cli/issues/1874)** — Issue #1874
- **Author**: yang12535 | **Comments**: 1
- **Summary**: Sub-agent achieved **51 reasoning rounds** consuming **60,000+ output tokens** on a single task. Developer describes it as "pure negative optimization."
- **Why it matters**: Massive token waste and workflow disruption. User cannot control or constrain reasoning length.
- **Status**: Open.

**3. [Thinking process missing in v1.32.0](https://github.com/MoonshotAI/kimi-cli/issues/1859)** — Issue #1859
- **Author**: guyujun | **Comments**: 1
- **Summary**: On Mac, thinking process output is completely absent, showing only final results.
- **Status**: Open.

**4. [Thinking process regression (Chinese)](https://github.com/MoonshotAI/kimi-cli/issues/1865)** — Issue #1865
- **Author**: xueguoqing01 | **Comments**: 3
- **Summary**: User states "thinking process gone, safety reduced significantly" after v1.33.0 upgrade.
- **Status**: Open.

**5. [API Error 400 invalid_request_error](https://github.com/MoonshotAI/kimi-cli/issues/778)** — Issue #778
- **Author**: DayDreammy | **Comments**: 14 (long-standing)
- **Summary**: Persistent API authentication/validation errors on Windows 11 with Claude Sonnet 4.5 model.
- **Why it matters**: Blocked users since January 2026; 14 comments indicate ongoing pain.
- **Status**: Open.

**6. [Chinese UTF-8 filename causes @file search crash](https://github.com/MoonshotAI/kimi-cli/issues/1866)** — Issue #1866
- **Author**: gstggsstt | **Comments**: 0
- **Summary**: When using @ to search files in Git repositories with Chinese UTF-8 filenames, inputting the third character causes an error.
- **Status**: Open.

**7. [Emacs keybindings broken in plan review](https://github.com/MoonshotAI/kimi-cli/issues/1869)** — Issue #1869
- **Author**: c31io | **Comments**: 0
- **Summary**: Standard Emacs navigation keys (C-n, C-p, C-a, C-e) don't work in plan review mode on Windows.
- **Status**: Open.

### 💡 Feature Requests

**8. [Support non-admin installation on Windows](https://github.com/MoonshotAI/kimi-cli/issues/1873)** — Issue #1873
- **Author**: Greenplumwine | **Comments**: 0
- **Summary**: Corporate Windows environments often don't grant admin rights. Previous versions allowed per-user installs, but recent releases require elevation.
- **Why it matters**: Blocks enterprise adoption; common pain point for corporate developers.
- **Status**: Open.

**9. [YOLO mode should not auto-approve plans](https://github.com/MoonshotAI/kimi-cli/issues/1867)** — Issue #1867
- **Author**: mechiland | **Comments**: 0
- **Summary**: Currently, `--yolo` auto-approves both tool execution AND plan review. User wants separate controls—plan review should always require confirmation.
- **Why it matters**: Risk conflating; plans may modify multiple files unexpectedly.
- **Status**: Open.

**10. [FetchURL duplicates GitHub issue body](https://github.com/MoonshotAI/kimi-cli/issues/1862)** — Issue #1862
- **Author**: SherlockShemol | **Comments**: 0
- **Summary**: Extracting GitHub issues returns duplicated content when comments extraction misfires.
- **Status**: Open.

---

## 4. Key PR Progress

### Recently Merged

| PR | Title | Significance |
|----|-------|--------------|
| [#1875](https://github.com/MoonshotAI/kimi-cli/pull/1875) | chore: bump kimi-cli 1.34.0 | Release PR with critical fixes |
| [#1871](https://github.com/MoonshotAI/kimi-cli/pull/1871) | fix(background): keep cancelled task strong reference until cleanup | **Fixes terminal freeze on background task kill** |
| [#1872](https://github.com/MoonshotAI/kimi-cli/pull/1872) | feat(shell): add show_thinking_stream config | **Addresses thinking visibility regression** |
| [#1818](https://github.com/MoonshotAI/kimi-cli/pull/1818) | feat: supports list-sessions | New session management command |
| [#1842](https://github.com/MoonshotAI/kimi-cli/pull/1842) | docs: update en/zh docs for new features | Documentation refresh |

### Open & In Review

| PR | Title | Description |
|----|-------|-------------|
| [#1868](https://github.com/MoonshotAI/kimi-cli/pull/1868) | feat(ui): show live and average tokens per second in shell UI | Live TPS during streaming + average TPS summary at turn end |
| [#1870](https://github.com/MoonshotAI/kimi-cli/pull/1870) | docs(config): clarify quoted TOML keys for dotted model names | Improves config documentation |
| [#1405](https://github.com/MoonshotAI/kimi-cli/pull/1405) | feat(web): add Playwright E2E test infrastructure | End-to-end testing framework for web frontend |
| [#1236](https://github.com/MoonshotAI/kimi-cli/pull/1236) | feat(http): enable trust_env in aiohttp.ClientSession | Proxy support for corporate environments |
| [#1863](https://github.com/MoonshotAI/kimi-cli/pull/1863) | fix(fetch): suppress duplicated extracted comment text | Fixes FetchURL content duplication |
| [#1767](https://github.com/MoonshotAI/kimi-cli/pull/1767) | feat(yolo-mode): add YOLO support to web interface | Extends auto-approve mode to web UI |

### Dependencies

| PR | Update |
|----|--------|
| [#884](https://github.com/MoonshotAI/kimi-cli/pull/884) | ruff 0.14.14 → 0.15.0 (dependabot) |

---

## 5. Feature Request Trends

Analysis of open issues reveals these dominant request categories:

| Trend | Frequency | Examples |
|-------|-----------|----------|
| **Thinking/Reasoning Control** | High | Configurable thinking output depth, token limits, per-model settings |
| **Non-Admin Installation** | Medium | Per-user installs, portable mode |
| **UI/UX Enhancements** | Medium | Live TPS display, Emacs keybindings, session listing |
| **Model Behavior Tuning** | Medium | Thinking length limits, sub-agent constraints |
| **Cross-Platform Polish** | Low-Medium | UTF-8 filename handling, Windows-specific fixes |
| **Security/Risk Control** | Low | Separating plan approval from tool approval in YOLO mode |

---

## 6. Developer Pain Points

1. **Thinking Process Opacity**: The most reported issue this cycle. Users upgraded to find detailed reasoning hidden behind compact indicators. Trust and debugging capability diminished.

2. **Excessive Token Consumption**: k2.6-code-preview generating 51 reasoning rounds per sub-agent is cost-prohibitive and slow. No user-accessible knob to constrain reasoning depth.

3. **Background Task Instability**: Prior to v1.34.0, killing stuck agents froze terminals with cryptic asyncio errors. Now fixed, but users have been impacted.

4. **Windows Enterprise Restrictions**: Developers without admin rights cannot install newer versions, forcing workarounds or blocking adoption entirely.

5. **Long-Standing API Errors**: Issue #778 (API 400 errors) has persisted for months with 14 comments but remains unresolved.

6. **Encoding Edge Cases**: Chinese UTF-8 filenames crash the @file search feature, affecting international developers.

---

**Quick Links**
- **Repository**: https://github.com/MoonshotAI/kimi-cli
- **Releases**: https://github.com/MoonshotAI/kimi-cli/releases
- **Open Issues**: https://github.com/MoonshotAI/kimi-cli/issues?q=is%3Aissue+is%3Aopen
- **Open PRs**: https://github.com/MoonshotAI/kimi-cli/pulls?q=is%3Apr+is%3Aopen

---
*Digest generated from GitHub activity on 2026-04-14*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

The user wants me to generate an OpenCode community digest for 2026-04-14 based on the provided GitHub data. Let me analyze the data and create a structured digest.

Let me identify the key items:

**Today's Highlights:**
- No releases in the last 24h
- Several high-traffic issues about Copilot auth, model support, and file operations
- PR activity includes bug fixes for SQLite memory, ripgrep worker paths, and new features like inline skill invocation

**Hot Issues (10 most noteworthy):**
1. #8030 - Copilot auth consumes premium requests (215 comments, 79 👍) - Major concern about billing
2. #13768 - Opus 4.6 doesn't support assistant message prefill (59 comments, 23 👍) - Model compatibility
3. #11112 - Stuck at "Preparing write..." (54 comments, 23 👍) - Core functionality issue
4. #20698 - GPT 5.4 from Azure fails with reasoning error (14 comments, 3 👍)
5. #11439 - Support parsing  thinking tags (12 comments, 13 👍) - Feature request
6. #1852 - Sudo access breaks UI (11 comments, 11 👍) - Fixed, but important
7. #11926 - Not appearing on OpenRouter leaderboard (8 comments) - Discussion
8. #14795 - Zen API returns 500 error (7 comments, 3 👍)
9. #22228 - Skill invocation fails in air-gapped environment (7 comments) - Closed
10. #22020 - Global AGENTS.md not loaded when project AGENTS.md exists (7 comments, 1 👍) - Closed

**Key PR Progress:**
1. #22446 - Inline skills and shared truncation - Closed
2. #12822 - Proxy directly to process.env - Open


3. #8535 - Bi-directional cursor-based pagination - Open
4. #18767 - Mobile Touch Optimization - Open
5. #13854 - Stop streaming markdown/code after message completes - Open
6. #22443 - Improve custom LSP servers section - Open
7. #22445 - Add CREATE_NO_WINDOW flag - Open
8. #22442/22440 - Add CHANGELOG.md - Closed
9. #21167 - Set x-initiator header for copilot - Open
10. #22428 - Disable SQLite mmap - Open

I'm tracking roughly 50 issues and pull requests total, with the most active ones clustering around authentication, model compatibility, and UI/UX concerns. The PR work spans performance optimizations, documentation improvements, and platform-specific fixes.

**Feature Request Trends:**
Several patterns emerge across the codebase. Better token usage visibility is frequently requested. Reasoning block parsing could be more flexible. Mobile and touch input needs refinement. Users want the ability to reduce verbosity. Cooldown-aware runtime failover keeps coming up. SDK and runtime considerations are being explored.

**Developer Pain Points:**
Sudo permissions remain problematic. The file picker suffers from ANSI highlight corruption. Local MCP servers timeout unexpectedly. Both the AGENTS.md and skill list problems appear to have known solutions now. Memory leaks continue to surface.


# OpenCode Community Digest — 2026-04-14

---

## 1. Today's Highlights

GitHub Copilot integration continues to be a pain point for users as Issue #8030 (215 comments) documents excessive premium request consumption when the `X-Initiator` header is incorrectly set to "user" for agent-initiated requests. A corresponding fix PR #21167 addresses this regression. The project also saw new work on inline skill invocation with `$` trigger syntax (PR #22435), memory optimization by disabling SQLite mmap (PR #22428), and fixes for ripgrep worker path resolution in compiled binaries (PR #22431/22436).

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Title | Author | Comments | Why It Matters |
|---|-------|--------|----------|----------------|
| [#8030](https://github.com/anomalyco/opencode/issues/8030) | Copilot auth sets far too many requests as "user" consuming premium requests rapidly | bowmanjd | 215 | Critical billing issue; 60+ agent-initiated requests consumed half a monthly quota. PR #21167 addresses the fix. |
| [#13768](https://github.com/anomalyco/opencode/issues/13768) | Opus 4.6 doesn't support assistant message prefill | sbrunecker | 59 | Model compatibility breakage; conversation must end with user message, breaking multi-turn agents. |
| [#11112](https://github.com/anomalyco/opencode/issues/11112) | Always stuck at "Preparing write..." | yinzhou-jc | 54 | Core functionality regression affecting file operations; tool execution repeatedly aborted. |
| [#20698](https://github.com/anomalyco/opencode/issues/20698) | GPT 5.4 Azure fails with "Item of type 'reasoning' was provided without its required following item" | DanielusG | 14 | Azure API integration issue with reasoning models; causes crashes after 1-2 tool calls. |
| [#11439](https://github.com/anomalyco/opencode/issues/11439) | Support parsing `` and `<thinking>` tags as reasoning blocks | DevSissi | 12 | Feature parity request; desired UI display for models without native extended thinking support. |
| [#1852](https://github.com/anomalyco/opencode/issues/1852) | Sudo access breaks UI and hangs agent | arthur404dev | 11 | UX killer; tools requiring sudo never receive input, leaving UI broken. **Now closed.** |
| [#11926](https://github.com/anomalyco/opencode/issues/11926) | OpenCode doesn't appear in OpenRouter top apps | mindplay-dk | 8 | Discovery/visibility concern; claimed 1M monthly users but missing from leaderboard. **Closed as non-issue.** |
| [#14795](https://github.com/anomalyco/opencode/issues/14795) | Zen API returns 500 'Cannot read properties of undefined (reading prompt_tokens)' | pablopda | 7 | External API breakage; multiple free models fail when called via Zen API externally. |
| [#22228](https://github.com/anomalyco/opencode/issues/22228) | Skill invocation fails in air-gapped environment | raywhoelse | 7 | Deployment scenario failure; local LLM works but skills fail in offline environments. **Closed.** |
| [#22020](https://github.com/anomalyco/opencode/issues/22020) | Global AGENTS.md (~/.config/opencode/) not loaded when project AGENTS.md exists | Qiiks | 7 | Configuration priority bug; global rules silently ignored when project file exists. **Closed via PR #22443.** |

---

## 4. Key PR Progress

| # | Title | Author | Status | Impact |
|---|-------|--------|--------|--------|
| [#22446](https://github.com/anomalyco/opencode/pull/22446) | Inline skills and shared truncation | mario-loomia | Closed | Added `$skill` autocomplete, fixed truncation regressions, shared `Truncate.Stream` to eliminate duplication. |
| [#21167](https://github.com/anomalyco/opencode/pull/21167) | Fix x-initiator header for agent-initiated copilot requests | aklajnert | Open | Closes #8030; ensures upstream commit properly tracks compaction messages as agent-initiated. |
| [#22428](https://github.com/anomalyco/opencode/pull/22428) | Disable SQLite mmap to prevent memory growing with DB size | jiangliang79 | Open | Performance fix; prevents entire DB mapping into process address space. |
| [#22435](https://github.com/anomalyco/opencode/pull/22435) | Add inline skill invocation with `$` trigger | mario-loomia | Closed | New TUI feature; type `$` for skill autocomplete, fuzzy search, content prepended on submit. |
| [#22431](https://github.com/anomalyco/opencode/pull/22431) | Resolve ripgrep worker path in compiled binary | okuyam2y | Closed | Build regression fix; compiled binaries couldn't locate `ripgrep.worker.ts` after Worker migration. |
| [#22445](https://github.com/anomalyco/opencode/pull/22445) | Add CREATE_NO_WINDOW flag to prevent console flash on Windows | anmolxlight | Open | Desktop UX fix; black console window flashes on Windows during shell env probing. |
| [#22443](https://github.com/anomalyco/opencode/pull/22443) | Improve custom LSP servers documentation | bensantora | Open | Documentation; adds luau-lsp example for Roblox development. Closes #22199. |
| [#22022](https://github.com/anomalyco/opencode/pull/22022) | Retry wrapped responses server errors | tossp | Open | Reliability fix; handles `{ "error": { "type": "server_error" } }` payloads from upstream. Closes #21979. |
| [#12822](https://github.com/anomalyco/opencode/pull/12822) | Proxy directly to process.env instead of snapshotting | jerome-benoit | Open | Env service bugfix; stale reads and silent `set()` failures when vars set after init. Closes #12698. |
| [#22120](https://github.com/anomalyco/opencode/pull/22120) | Support legacy skills array | kobecai | Open | Config compatibility; fixes validation for older `skills` array format in opencode.json. |

---

## 5. Feature Request Trends

**From 50 issues updated in the last 24h, the following themes dominate:**

1. **Token & Usage Visibility** — Users want real-time token counts, TPS, and cost displayed in TUI (Issue #13003, 18 👍). Budget tracking is also requested for Pro plans (Issue #17614).

2. **Reasoning Block Display** — Parsing `` / `<thinking>` tags for models without native extended thinking (Issue #11439, 13 👍); reducing verbosity of thinking blocks (Issue #18494).

3. **Provider Resilience** — Cooldown-aware runtime failover on rate limits (Issue #16867); retry logic for wrapped server errors (merged in PR #22022).

4. **Plugin/SDK Enhancements** — OpenCode as runtime with SDK (Issue #6182); private npm registry support (fixed in PR #22025); custom model cost overrides at runtime (PR #17645).

5. **UI/UX Refinements** — Mobile touch optimization (PR #18767); file picker ANSI escape code rendering fix (Issue #22432); opt-in host-shell execution with full stdin passthrough (Issue #18659).

---

## 6. Developer Pain Points

- **File operation hangs**: "Preparing write..." stalling (Issue #11112, 54 comments) remains a recurring core functionality complaint.
- **Sudo/TUI breakage**: Commands needing elevated permissions break the UI (Issue #1852, closed but similar patterns persist).
- **Air-gapped environments**: Local LLM works but skills fail (Issue #22228) — a deployment scenario the project needs to better support.
- **Memory concerns**: SQLite mmap growing with DB size (fixed in PR #22428); event listener memory leak warnings (Issue #22422).
- **Model compatibility gaps**: Azure GPT 5.4 reasoning errors (Issue #20698); Opus 4.6 prefill limitations (Issue #13768); Zen API token read failures (Issue #14795).
- **Config priority confusion**: Global AGENTS.md silently ignored when project file exists (Issue #22020, fixed).
- **Skill context overhead**: Skill list injected twice per request wastes ~5K–7K tokens (Issue #22236) — an optimization opportunity.

---

*Digest generated from anomalyco/opencode GitHub data • 2026-04-14*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-14

## Today's Highlights

Pi v0.67.1 shipped with a new lightweight telemetry system for anonymous install/update tracking, helping the team understand version adoption. The community has been exceptionally active, closing 14 pull requests and addressing numerous issues—particularly around TUI improvements (terminal hyperlink support, cursor preservation, Kitty protocol), security fixes (vulnerable fast-xml-parser), and developer ergonomics (extension factories, repo-level auth).

## Releases

| Version | Summary |
|---------|---------|
| **v0.67.1** | Interactive mode now sends a lightweight anonymous telemetry ping to `https://pi.dev/install?version=x.y.z` after writing `lastChangelogVersion` in `settings.json`. This provides a reliable per-version usage signal for the team. |
| **v0.67.0** | (Same telemetry feature, initial release) |

## Hot Issues

1. **[#3103](https://github.com/badlogic/pi-mono/issues/3103)** — *Markdown links should be clickable via OSC 8 hyperlink sequences* — Closed, 5 comments
   - **Why it matters**: Links in the TUI were styled but not functional. This fix enables clickable links in Kitty, iTerm2, Ghostty, WezTerm, and Windows Terminal, dramatically improving workflow for developers who rely on embedded documentation links.
   - **Status**: Resolved by PR #3102.

2. **[#2868](https://github.com/badlogic/pi-mono/issues/2868)** — *Self-identify the coding agent via an environment variable* — Closed, 4 comments
   - **Why it matters**: Setting `PI_CODING_AGENT="true"` allows scripts, git hooks, and tools to detect they are running inside a coding agent, enabling context-aware behavior and preventing unwanted recursion.
   - **Status**: Merged.

3. **[#2988](https://github.com/badlogic/pi-mono/issues/2988)** — *Multiline content sends each line separately* — Closed, 4 comments, 1 👍
   - **Why it matters**: Copying multi-line output (e.g., from browser console) resulted in one message per line instead of a unified block, breaking paste functionality for common debugging workflows.

4. **[#2850](https://github.com/badlogic/pi-mono/issues/2850)** — *[/exit command documented but not implemented](https://github.com/badlogic/pi-mono/issues/2850)* — Closed, 4 comments
   - **Why it matters**: The README documented both `/quit` and `/exit` as valid quit commands, but `/exit` simply didn't work—confusing new users and breaking muscle memory for developers switching from other tools.

5. **[#3088](https://github.com/badlogic/pi-mono/issues/3088)** — *Allow passing inline extension factories to main()* — Open, 3 comments
   - **Why it matters**: The SDK supports `extensionFactories` via `createAgentSessionServices()`, but `main()` does not. This blocks CLI harness builders from reusing Pi's full behavior (arg parsing, session management) while injecting custom extensions.
   - **Status**: Under consideration for implementation.

6. **[#3115](https://github.com/badlogic/pi-mono/issues/3115)** — *@latest ref on git packages treated as static pin* — Closed, 3 comments
   - **Why it matters**: Installing extensions with `@latest` pinned the version at install time, making `pi update` ineffective. Users expecting living dependencies were stuck on stale versions.

7. **[#3112](https://github.com/badlogic/pi-mono/issues/3112)** — *Tool arguments not validated in Cloudflare Workers* — Closed, 3 comments
   - **Why it matters**: A previous fix (#2395) accidentally skipped all argument validation in Cloudflare Workers, leaving tools vulnerable to missing required fields and type errors at runtime.

8. **[#2970](https://github.com/badlogic/pi-mono/issues/2970)** — *fast-xml-parser override pinned to vulnerable version* — Closed, 2 comments
   - **Why it matters**: The project pinned `fast-xml-parser` to 5.3.8, which falls within two high-severity vulnerability ranges (GHSA-8gc5-j5rx-235r, GHSA-jp2q-39xq-3w4g). This is a security concern for production deployments.

9. **[#3005](https://github.com/badlogic/pi-mono/issues/3005)** — *Make "UPDATE AVAILABLE" message toggleable* — Open, 2 comments, 1 👍
   - **Why it matters**: The intrusive yellow banner appears on every startup. Power users on NixOS and other non-standard update workflows want to suppress it without disabling all notifications.

10. **[#3148](https://github.com/badlogic/pi-mono/issues/3148)** — *find tool can freeze Pi when searching ~* — Closed, 1 comment
    - **Why it matters**: The `find` tool implementation is synchronous and blocks the event loop, freezing the UI when searching large directories like `$HOME`. This affects any workflow involving config file inspection.

## Key PR Progress

| PR | Title | Impact |
|----|-------|--------|
| **[#3158](https://github.com/badlogic/pi-mono/pull/3158)** | *Terminal multiplexer with split panes, tabs, and PTY support* | Major feature: adds tmux-style multiplexing where each split pane runs an independent agent session with its own chat history, editor, and footer. |
| **[#3157](https://github.com/badlogic/pi-mono/pull/3157)** | *Prevent /reload command causing constant CPU use* | Fixes issue #3093. The `BorderedLoader` with `cancellable: false` was not cleaning up properly, causing runaway CPU usage after `/reload`. |
| **[#3153](https://github.com/badlogic/pi-mono/pull/3153)** | *Improve TLS interception error guidance and fallback prompt* | Better user-facing error messages for SSL failures, actionable guidance for `NODE_EXTRA_CA_CERTS` and `npm config set cafile`, and interactive prompts when SSL interception is detected. |
| **[#3116](https://github.com/badlogic/pi-mono/pull/3116)** | *Add configurable sourceInfoStyle setting for autocomplete tags* | Closes #3052. Users can now control verbosity of autocomplete source tags (e.g., `[u:git:github.com/user/repo-name]`), reclaiming horizontal space in the editor. |
| **[#3102](https://github.com/badlogic/pi-mono/pull/3102)** | *Wrap markdown links in OSC 8 hyperlink sequences* | Makes rendered links clickable in terminals supporting OSC 8 protocol (Kitty, iTerm2, Ghostty, WezTerm, Windows Terminal). |
| **[#3125](https://github.com/badlogic/pi-mono/pull/3125)** | *Support Bearer token auth for Bedrock Converse API* | Adds Bearer token authentication alongside existing IAM credentials (SigV4), enabling users with just an AWS console API key to use Bedrock. |
| **[#3111](https://github.com/badlogic/pi-mono/pull/3111)** | *Add super keybinding support for kitty protocol* | Fixes #2979. Enables keybindings like `super+k`, `super+enter`, and `ctrl+super+k` in Kitty, expanding keyboard customization options. |
| **[#3149](https://github.com/badlogic/pi-mono/pull/3149)** | *Update README with mise installation instructions* | Adds `mise use -g npm:@mariozechner/pi-coding-agent` as an installation option for users already managing dev tools with mise. |
| **[#3092](https://github.com/badlogic/pi-mono/pull/3092)** | *Preserve the column of the cursor before it entered a paste marker* | Fixes TUI cursor position jumping when entering/exiting paste markers vertically. |
| **[#3091](https://github.com/badlogic/pi-mono/pull/3091)** | *Flush queued messages after tree navigation* | Fixes a bug where messages sent during branch summarization were added to the compaction queue but never flushed, leaving them stuck in the steering queue. |

## Feature Request Trends

Analysis of recent issues reveals these dominant feature directions:

1. **Extension System Flexibility** — Multiple requests for custom extension factories, repo-level auth configuration, and lifecycle management for local model runtimes (`/local` command).

2. **Terminal Integration Depth** — Strong demand for richer TUI capabilities: terminal multiplexing, OSC 8 hyperlinks, super keybindings for Kitty, sticky editor/footer positioning, and collapsible startup resource paths.

3. **Developer Workflow Automation** — Requests for `/exit` command parity, coding agent self-identification via `PI_CODING_AGENT`, async background tasks, and session replay with explicit IDs.

4. **Update & Configuration Management** — Users want toggleable update banners, path expansion (`~`, `$HOME`) in settings, and proper `@latest` ref handling for git-based packages.

5. **Platform-Specific Enhancements** — Support for mise installation, Volta autodetection, tmux key fixes, and Cloudflare Workers deployment scenarios.

## Developer Pain Points

- **Vulnerable Dependencies**: The pinned `fast-xml-parser` 5.3.8 exposes users to two high-severity CVEs—a security concern requiring immediate attention.

- **Broken UX Expectations**: The `/exit` vs `/quit` discrepancy and non-functional `@latest` updates erode trust; users expect behavior to match documentation.

- **Performance Freezes**: Synchronous `find` operations blocking the event loop when searching large directories like `~` is a friction point for common workflows.

- **Multiline Paste Degradation**: Multi-line content being fragmented into individual messages breaks standard copy-paste workflows from browsers and other tools.

- **Validation Gaps in Workers**: Disabled argument validation in Cloudflare Workers can cause runtime errors that should be caught earlier in the pipeline.

- **Missing Quality-of-Life Controls**: The persistent "UPDATE AVAILABLE" banner and lack of TMUX warning suppression frustrate users with non-standard or locked-down environments.

---

*Data sourced from GitHub.com/badlogic/pi-mono on 2026-04-14*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest

**Date:** 2026-04-14
**Source:** [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 1. Today's Highlights

The Qwen Code project released **v0.14.4** with critical UX improvements including CJK word segmentation and Ctrl+arrow navigation optimization, while also pushing a nightly build exposing `/context` usage data in non-interactive mode. The community is actively addressing long-standing pain points with 50+ issues and 47 PRs updated in the last 24 hours, with major focus areas including session management, hook system expansion, and macOS diagnostics.

---

## 2. Releases

### v0.14.4-nightly.20260414.1486e8538
- **Contributor:** @wenshao ([PR #2916](https://github.com/QwenLM/qwen-code/pull/2916))
- **Change:** Exposed `/context` usage data via SDK API and in non-interactive mode
- **Impact:** Enables better usage tracking and integration for programmatic users

### v0.14.4
- **CJK Word Segmentation:** Improved text handling for Chinese/Japanese/Korean characters by @Apophis3158 ([PR #2942](https://github.com/QwenLM/qwen-code/pull/2942))
- **Navigation Optimization:** Ctrl+arrow navigation improvements for better code editing experience
- **VSCode Fix:** Force fresh ACP session on new-session action by @yiliang114 ([PR #2874](https://github.com/QwenLM/qwen-code/pull/2874))

---

## 3. Hot Issues

| # | Issue | Summary | Significance |
|---|-------|---------|--------------|
| [#289](https://github.com/QwenLM/qwen-code/issues/289) | **SEA Support Request** | Feature request to bundle app into single standalone executable | Simplifies distribution for end-users; 6 comments, directly addresses packaging |
| [#271](https://github.com/QwenLM/qwen-code/issues/271) | **Loop Deadlock** | Required property 'file_path' causing deadlocks | Critical bug affecting workflow reliability; actively discussed |
| [#426](https://github.com/QwenLM/qwen-code/issues/426) | **Chokes on First Prompt** | Repo analysis causes tool to choke/timeout | Usability issue blocking adoption; 5 comments |
| [#270](https://github.com/QwenLM/qwen-code/issues/270) | **Heap Out of Memory** | JavaScript heap exhaustion crashes | Memory management issue; 5 comments, 2 👍 |
| [#350](https://github.com/QwenLM/qwen-code/issues/350) | **API Loop Detection** | Dead loops with 400 error, input length validation failure | High-impact bug; 4 comments, 5 👍 (most approved) |
| [#3114](https://github.com/QwenLM/qwen-code/issues/3114) | **WebFetch Performance** | WebFetch taking 3+ minutes for 2 pages vs Codex speed | Performance bottleneck; 3 comments, user explicitly compares to competitors |
| [#3234](https://github.com/QwenLM/qwen-code/issues/3234) | **Conversation Naming** | No intuitive way to find past conversations (UUID-only IDs) | UX improvement; 2 comments |
| [#193](https://github.com/QwenLM/qwen-code/issues/193) | **ERR_MODULE_NOT_FOUND** | Debug console errors affecting developer workflow | Dev experience issue; 3 comments, 3 👍 |
| [#210](https://github.com/QwenLM/qwen-code/issues/210) | **Encoding Error** | Apostrophes getting converted, breaking code logic | File I/O bug affecting Python developers |
| [#2873](https://github.com/QwenLM/qwen-code/issues/2873) | **VSCode Tab Overflow** | Session tabs expand to fill entire tab bar | UI layout bug; fixed via [PR #3249](https://github.com/QwenLM/qwen-code/pull/3249) |

---

## 4. Key PR Progress

| # | PR | Author | Description | Status |
|---|-----|--------|-------------|--------|
| [#3261](https://github.com/QwenLM/qwen-code/pull/3261) | **/history command** | @reidliu41 | Adds built-in command for project-scoped saved chat history management | OPEN |
| [#3079](https://github.com/QwenLM/qwen-code/pull/3079) | **/batch skill** | @doudouOUC | Parallel batch operations with glob patterns, dry-run mode, and worker agents | OPEN |
| [#3251](https://github.com/QwenLM/qwen-code/pull/3251) | **Thought-only responses fix** | @wenshao | Allows thinking/reasoning models (qwen3-thinking) to return thought-only responses in GeminiChat stream validation | OPEN |
| [#3260](https://github.com/QwenLM/qwen-code/pull/3260) | **VSCode auto-scroll bounce** | @qqqys | Fixes auto-scroll animation bounce and improves input responsiveness via useTransition | OPEN |
| [#3249](https://github.com/QwenLM/qwen-code/pull/3249) | **Session tab title truncation** | @dreamWB | Limits tab titles to 50 Unicode code points to prevent overflow (fixes #2873) | CLOSED |
| [#3246](https://github.com/QwenLM/qwen-code/pull/3246) | **Rate-limit detection in SSE** | @wenshao | Detects Throttling.AllocationQuota errors from streamed SSE frames | CLOSED |
| [#3087](https://github.com/QwenLM/qwen-code/pull/3087) | **Memory system refactor** | @LaZzyMan | Aligns extract/dream memory to Claude Code patterns; fixes extract never triggering bug | OPEN |
| [#3022](https://github.com/QwenLM/qwen-code/pull/3022) | **/branch command** | @qqqys | Session forking with collision-aware naming ("My Task (Branch)", "My Task (Branch 2)") | CLOSED |
| [#3244](https://github.com/QwenLM/qwen-code/pull/3244) | **Command platform refactor** | @LaZzyMan | Unified Registry, Resolver, and Executor architecture for command module | OPEN |
| [#3248](https://github.com/QwenLM/qwen-code/pull/3248) | **ACP hook system** | @DennisYu07 | Complete hooks support for ACP integration with lifecycle, prompt interception, and tool execution hooks | OPEN |

---

## 5. Feature Request Trends

1. **Extensibility & Hooks** — Multiple PRs (#2990, #2827, #3248) implement HTTP Hooks, Function Hooks, Async Hooks, and LLM-based condition evaluation for security checks and code quality validation
2. **Memory & Context Management** — Managed auto-memory system (#3087) and improved context usage tracking indicate focus on long-running session optimization
3. **Session Management** — Strong interest in conversation naming/indexing (#3234), history management (#3261), and session branching (#3022)
4. **Platform Distribution** — Requests for single executable application support (#289, #302) indicate demand for simplified deployment
5. **Performance Optimization** — WebFetch speed (#3114), inference speed (#375), and compact mode UX (#3100) suggest performance remains a priority

---

## 6. Developer Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Loop/Repetition Detection False Positives** | #350, #271, #223, #259 | Causes request halts on valid operations; 5+ related issues |
| **Memory Exhaustion** | #270 (heap out of memory) | Tool crashes during complex tasks |
| **Encoding/File I/O Issues** | #210 (apostrophe conversion), #196 (/copy garbling), #353 (newline handling) | Generated code files become corrupted or unusable |
| **Windows 11 Integration** | #2669 (permission persistence), #3252 (install command) | Platform-specific bugs affecting Windows majority |
| **API Parsing Failures** | #217, #209, #193 | Debug console errors and configuration confusion |
| **Local Model Configuration** | #214 (tiktoken missing), #120 (offline/online confusion) | Difficult onboarding for self-hosted deployments |
| **Slow Performance** | #3114 (WebFetch), #375 (inference) | Users explicitly comparing to competitor tools |

---

**Next Digest:** 2026-04-15
**Track:** [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/manelsen/agents-radar).*