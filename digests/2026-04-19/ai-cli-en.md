# AI CLI Tools Community Digest 2026-04-19

> Generated: 2026-04-19 01:36 UTC | Tools covered: 8

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem

## 2026-04-19

---

## 1. Ecosystem Overview

The AI CLI tools landscape remains fragmented but increasingly sophisticated, with five major players—Anthropic (Claude Code), OpenAI (Codex), Google (Gemini CLI), and emerging Chinese providers (Kimi, Qwen)—competing for developer mindshare. Today's activity reveals a maturing market grappling with common engineering challenges: output token limits, billing transparency, subagent orchestration, and cross-platform consistency. While no tool achieved a stable release today, OpenAI's Goal Mode stack landing and the 16 PRs merged in Pi demonstrate sustained iteration velocity. Notably, authentication and authorization issues (401 errors, permission persistence) have emerged as cross-cutting pain points, suggesting systemic complexity in API integration patterns.

---

## 2. Activity Comparison

| Tool | Hot Issues | Open PRs | Stable Releases (24h) | Nightly/Alpha Activity | Key Focus Areas |
|------|------------|----------|----------------------|------------------------|-----------------|
| **Claude Code** | 10 | 6 | 0 | None | Token limits, billing, VS 2026 integration, security vulnerability |
| **OpenAI Codex** | 8 | 9+ | 0 | rust-v0.122.0-alpha.10 | Goal Mode (5 PRs merged), macOS Intel support |
| **Gemini CLI** | 10 | 10 | 0 | Frequent main-branch commits | AST-aware tooling, config validation, subagent coordination |
| **GitHub Copilot CLI** | 10 | 0 | 0 | None | Rate limiting, model picker UI, regressions |
| **Kimi Code CLI** | 9 | 5 | 0 | None | Subagent architecture, temperature API bug, WSL2 |
| **OpenCode** | 10 | 10 | 0 | None (v1.4.12 404) | Vim motions, `/cd` command, usage tracking |
| **Pi** | 10 | 10 | 0 | None | Claude 4.7 support, thinking levels, Amazon Bedrock |
| **Qwen Code** | 10 | 10 | 0 | v0.14.5-nightly.20260419 | ACP hooks, auth migration, per-file attribution |

**Observation:** All tools are in active development with no stable releases in the past 24 hours. Alpha/nightly builds (OpenAI Codex, Qwen Code) and main-branch commits (Gemini CLI) indicate continuous delivery models. OpenCode faces a distribution issue with v1.4.12 unavailable.

---

## 3. Shared Feature Directions

### 3.1 Subagent Architecture & Orchestration

| Tool | Specific Needs |
|------|----------------|
| **Claude Code** | Subagent billing bypass (#39903), MCP connector auto-loading (#50062) |
| **OpenAI Codex** | Subagent control policies (#18105, #18513), read-only main-agent modes |
| **Gemini CLI** | Subagent awareness of approval modes (#23582), MAX_TURNS recovery (#22323) |
| **Kimi Code CLI** | CWD inheritance (#1931), infinite loop prevention (#1927) |

**Analysis:** Multi-agent workflows are becoming table stakes. Current gaps center on context propagation (working directory, approval modes), resource management, and billing attribution for delegated tasks.

### 3.2 Authentication & Billing Transparency

| Tool | Specific Issues |
|------|-----------------|
| **Claude Code** | Double billing (#23315), Max Plan bypass via subagents (#39903), credit consumption opacity |
| **OpenAI Codex** | Rate limit messaging confusion (#18357), tier synchronization issues |
| **GitHub Copilot CLI** | Rate limiting UI (#2827), Pro+ weekly limits not resetting (#2769) |
| **Qwen Code** | 401 errors post-OAuth discontinuation (#3203), token persistence failures |
| **OpenCode** | Subagent model billing discrepancies (#20859) |

**Analysis:** Subscription-based CLI tools face trust erosion when billing mechanics are opaque. Token refresh failures, double-charging, and plan-tier sync issues appear across vendors.

### 3.3 Terminal UX & Cross-Platform Consistency

| Tool | Platform Issues |
|------|-----------------|
| **Claude Code** | Windows TUI keybinding regressions, voice mode spacebar issues |
| **OpenAI Codex** | Windows sandbox ACL corruption (#15777), 100% CPU regression (#11981) |
| **Gemini CLI** | SSH text scrambling, Windows path errors, ANSI rendering |
| **GitHub Copilot CLI** | Linux shell detection failures, Termux crashes |
| **Kimi Code CLI** | WSL2 login failures, non-admin Windows installs blocked |
| **OpenCode** | macOS blank windows, Windows proxy SSL failures |

**Analysis:** Cross-platform testing gaps are evident. Windows and Linux/WSL environments receive less QA attention than macOS, creating friction for enterprise deployments.

### 3.4 Model Control & Transparency

| Tool | Requests |
|------|----------|
| **Claude Code** | Configurable output token limits, effort level exposure (#50577), lazy model behavior feedback (#40274) |
| **Kimi Code CLI** | K2.5/K2.6 model switching (#1925), reasoning visibility (#1923) |
| **GitHub Copilot CLI** | Model picker UI consistency (#2725), xhigh reasoning toggle (#2739) |
| **Pi** | Per-model thinking levels (#3208), new "max" tier aligned with Opus 4.7 (#3299) |

**Analysis:** Developers increasingly demand fine-grained control over model behavior (thinking effort, creativity vs. reasoning trade-offs) and visibility into AI decision-making.

---

## 4. Differentiation Analysis

| Tool | Primary Differentiator | Target User | Technical Approach |
|------|----------------------|-------------|-------------------|
| **Claude Code** | Security posture, Anthropic model integration, VS 2026 integration momentum | Enterprise, security-conscious teams | Conservative; hard token caps, permission-based file access |
| **OpenAI Codex** | Goal Mode autonomous execution, Rust-based core | Autonomous workflows, long-running tasks | Feature-rich but regression-prone; rapid alpha cadence |
| **Gemini CLI** | AST-aware codebase navigation, memory management | Large codebase navigation | Experimental; aggressive feature exploration |
| **GitHub Copilot CLI** | GitHub ecosystem tight integration | GitHub-native developers | Minimalist; focused on core agent experience |
| **Kimi Code CLI** | Voice input, Chinese market focus | Non-admin enterprise, WSL2 users | Pragmatic; platform compatibility prioritized |
| **OpenCode** | Provider agnosticism, Vim keybindings | Power users, multi-provider workflows | Flexible; extensive customization surface |
| **Pi** | Amazon Bedrock support, thinking level ladder | AWS-centric teams, fine-tuning users | Extensible; strong provider plugin architecture |
| **Qwen Code** | Per-file AI attribution, ACP hooks | OSS compliance, enterprise audits | Audit-focused; commits to attribution transparency |

---

## 5. Community Momentum & Maturity

### High Velocity Communities

1. **OpenAI Codex** — 5+ PRs merged today (Goal Mode stack), rapid alpha cadence, strong feature delivery momentum
2. **Pi** — 16 PRs merged in 24h, active bug triage, emerging provider ecosystem (Bedrock, Alibaba/Qwen)
3. **Qwen Code** — Nightly builds with substantive features (per-file attribution, API preconnect)

### Stable but Challenged

4. **Claude Code** — Mature community (224+ reactions on VS 2026 request), but critical security/billing issues unresolved
5. **Gemini CLI** — Active main-branch development, but permission persistence regression remains sticky

### Lower Activity / Maintenance Mode Indicators

6. **GitHub Copilot CLI** — Zero PRs in 24h, regressions accumulating (agent name visibility, rate limit UI)
7. **OpenCode** — Distribution failure (v1.4.12 unavailable), multiple critical regressions (blank windows, config loss)
8. **Kimi Code CLI** — Platform gaps (WSL2, non-admin installs) blocking enterprise adoption despite active subagent work

### Community Health Indicators

| Tool | Issue Volume | PR Velocity | Release Cadence | Critical Issue Ratio |
|------|-------------|-------------|-----------------|---------------------|
| Claude Code | High | Medium | Slow (v2.1.110) | 🔴 High (3 critical security/billing) |
| OpenAI Codex | Medium | High | Weekly alpha | 🟠 Medium (CPU regression) |
| Gemini CLI | Medium | High | Continuous | 🟠 Medium (permission hangs) |
| Copilot CLI | Medium | Low | Slow | 🟠 Medium (rate limiting) |
| Kimi Code CLI | Medium | Medium | Slow | 🔴 High (API temperature bug) |
| OpenCode | Medium | Medium | Stalled | 🔴 High (distribution failure) |
| Pi | Medium | High | Continuous | 🟠 Medium (Node 25 crashes) |
| Qwen Code | High | High | Nightly | 🔴 High (auth regressions) |

---

## 6. Trend Signals

### 6.1 Autonomous Execution Infrastructure

The landing of OpenAI Codex's Goal Mode (5 PRs) signals industry convergence on autonomous task completion. Expect competing implementations from Claude Code (lazy model feedback handling) and Gemini CLI (MAX_TURNS recovery) within 2-3 months.

### 6.2 Subagent Architecture Maturation

Subagent context propagation (CWD inheritance, approval mode awareness, billing attribution) is the dominant engineering challenge. Tools lacking subagent support (GitHub Copilot CLI) will face feature parity pressure.

### 6.3 Enterprise Billing Trust Crisis

Multiple tools (Claude Code, Copilot CLI, Qwen Code) exhibit billing transparency failures. This pattern—double-charging, plan-tier confusion, token persistence—threatens enterprise adoption. Expect consolidated billing dashboards and audit logging as competitive differentiators.

### 6.4 Cross-Platform QA Deficits

Windows and Linux/WSL environments receive consistently lower QA coverage. Tools targeting enterprise markets (Kimi Code CLI with non-admin install requirements, OpenCode with proxy SSL issues) must prioritize platform matrix testing.

### 6.5 Model Control Sophistication

The thinking effort ladder (off/minimal/low/medium/high/xhigh/max) is becoming standard. Per-model customization and reasoning visibility (streaming internal steps) represent the next frontier in user control.

### 6.6 Security Surface Expansion

Claude Code's home directory deletion vulnerability (#49464) and Codex's Windows ACL corruption (#12343) highlight security risks in aggressive file manipulation. Sandbox isolation and permission models will become buying criteria for security-conscious organizations.

---

**Recommendation for Decision-Makers:** Monitor Claude Code's security/billing fixes and OpenAI Codex's Goal Mode stability. For enterprise deployments, assess subagent architecture maturity and cross-platform QA coverage—current gaps in both areas represent operational risk.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of: 2026-04-19**

---

## 1. Top Skills Ranking

*Note: Most PRs show low comment counts but several have significant community engagement via upvotes. Rankings below reflect overall attention including issue ties.*

| PR | Skill | Functionality | Highlights | Status |
|---|-------|---------------|------------|--------|
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | Full testing stack covering Testing Trophy model, unit testing (AAA pattern), React component testing with Testing Library, E2E testing, and mocking strategies | Comprehensive coverage of modern testing philosophy; designed for actionable Claude guidance | OPEN |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | Prevents AI-generated document issues: orphan word wrap, widow paragraphs, numbering misalignment | Addresses widespread typographic quality issues affecting every document Claude generates | OPEN |
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md | Community contribution guidelines addressing repo's 25% health score on GitHub metrics | Single most impactful addition; directly closes issue #452 | OPEN |
| [#806](https://github.com/anthropics/skills/pull/806) | sensory | Native macOS automation via AppleScript with two-tier permission system | Replaces screenshot-based computer use with direct app scripting | OPEN |
| [#486](https://github.com/anthropics/skills/pull/486) | odt | OpenDocument text creation, template filling, and ODT-to-HTML conversion | Supports ISO standard open document formats (.odt, .ods, .odf) | OPEN |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer & skill-security-analyzer | Meta skills evaluating skill quality across 5 dimensions and security patterns | Multi-dimensional evaluation covering structure, documentation, and security | OPEN |

---

## 2. Community Demand Trends

**Key themes emerging from Issues:**

### Enterprise & Collaboration
- **Org-wide skill sharing** (#228, 9 comments, 5 👍) — Users need shared skill libraries instead of manual export/import via Slack
- **SSO/API key concerns** (#532, #202) — Enterprise users can't access skill-creator's optimization features without personal API keys

### Platform & Integration
- **AWS Bedrock compatibility** (#29) — Community seeks clarity on multi-platform support
- **MCP exposure** (#16) — Requests to surface Skills as MCP protocols for standardized AI software packaging
- **Skill triggering bugs** (#556, 6 comments, 6 👍) — Confirmed bug: `run_eval.py` achieves 0% skill trigger rate

### Quality & Security
- **Trust boundary abuse** (#492, 4 comments) — Community skills distributed under `anthropic/` namespace create security confusion
- **Plugin duplication** (#189, 5 comments, 7 👍) — `document-skills` and `example-skills` contain identical content

### Usability Issues
- **Skill disappearance** (#62, 10 comments) — Users report losing 12+ skills with no recovery path
- **Upload failures** (#406, #403) — API returns 500 errors preventing skill management

---

## 3. High-Potential Pending Skills

These PRs have active engagement or address critical gaps:

| PR | Skill | Potential | Link |
|---|-------|-----------|------|
| #154 | shodh-memory | Enables persistent cross-session context for AI agents | [PR #154](https://github.com/anthropics/skills/pull/154) |
| #521 | record-knowledge | Solves context loss between sessions by recording knowledge to `.claude/knowledge/` | [PR #521](https://github.com/anthropics/skills/pull/521) |
| #181 | SAP-RPT-1-OSS | Predictive analytics on SAP business data using tabular foundation model | [PR #181](https://github.com/anthropics/skills/pull/181) |
| #147 | codebase-inventory-audit | Systematic 10-step workflow for identifying orphaned code and documentation gaps | [PR #147](https://github.com/anthropics/skills/pull/147) |
| #335 | masonry-generate-image-and-videos | AI-powered image/video generation via CLI (Imagen 3.0, Veo 3.1) | [PR #335](https://github.com/anthropics/skills/pull/335) |
| #374 | x402 BSV auth + micropayment | BSV micropayment authentication for AI services | [PR #374](https://github.com/anthropics/skills/pull/374) |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for enterprise-grade skill management features — particularly org-wide sharing, SSO compatibility, and quality/security tooling — combined with platform expansion (macOS automation, document format support, and cross-session memory capabilities).**

---

*Report generated from community activity on [anthropics/skills](https://github.com/anthropics/skills)*

---

# Claude Code Community Digest — 2026-04-19

## Today's Highlights

The community remains highly active with no new releases in the last 24 hours. Token limit issues dominate discussions (#24055, #24159), with developers reporting the 32,000 output cap as a critical blocker. A security vulnerability involving accidental home directory deletion (#49464) and billing inconsistencies for Max Plan subscribers (#39903, #23315) are drawing urgent attention. Meanwhile, the VS 2026 integration request (#15942) continues gaining momentum with 224+ reactions.

---

## Releases

No new releases in the past 24 hours. The latest stable version referenced in issues is **v2.1.110**.

---

## Hot Issues

| # | Issue | Key Points | Impact |
|---|-------|-----------|--------|
| [#24055](https://github.com/anthropics/claude-code/issues/24055) | **API Error: Claude's response exceeded the 32000 output token maximum** | Long-standing bug affecting Windows TUI/API users; 119 comments indicating widespread frustration. | 🔴 Critical |
| [#15942](https://github.com/anthropics/claude-code/issues/15942) | **Add support for Visual Studio 2026 Integration** | 224 👍 and 84 comments—community's top feature request. VS 2026 support would expand IDE integration significantly. | 🟡 High Demand |
| [#24159](https://github.com/anthropics/claude-code/issues/24159) | **CLAUDE_CODE_MAX_OUTPUT_TOKENS has no effect on Opus 4.6** | Environment variable fails to override the 32k cap on Linux; 15 comments, has reproduction steps. | 🔴 Critical |
| [#28125](https://github.com/anthropics/claude-code/issues/28125) | **Cowork Can't add private GitHub marketplace** | macOS + Cowork + plugins intersection bug; affects team workflows. | 🟠 Medium |
| [#40274](https://github.com/anthropics/claude-code/issues/40274) | **Claude is being lazy** | Model behavior complaint with Opus 4.6 + max reasoning; 17 comments showing reproducibility concerns. | 🟠 Medium |
| [#23315](https://github.com/anthropics/claude-code/issues/23315) | **Double billing: API + prepaid credits consumed simultaneously** | Users on API-based billing charged twice per request. | 🔴 Critical |
| [#49464](https://github.com/anthropics/claude-code/issues/49464) | **Claude attempts to delete home directory when cleaning up file named '~'** | Security vulnerability: `rm -f ~/` executed when encountering a literal `~` directory. | 🔴 Critical |
| [#39903](https://github.com/anthropics/claude-code/issues/39903) | **Max Plan subscribers billed through API key when subagents dispatch** | $152 unexpected charges; subagents bypass subscription billing. | 🔴 Critical |
| [#50062](https://github.com/anthropics/claude-code/issues/50062) | **MCP connectors auto-loaded causing ~100K tokens of silent context bloat** | Account-level MCP servers loaded into every CLI session with no opt-out. | 🟠 Performance |
| [#50579](https://github.com/anthropics/claude-code/issues/50579) | **Image reading fails on non-image JPEG files** | Linux bug where Claude gets stuck on malformed images. | 🟢 Minor |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#50301](https://github.com/anthropics/claude-code/pull/50301) | **feat(plugins): add flappy-claude terminal game** | New plugin adding Flappy Bird gameplay via `/flappy-claude` slash command; pure Python 3 + curses. | 🟢 Open |
| [#46024](https://github.com/anthropics/claude-code/pull/46024) | **docs: document --exclude-dynamic-system-prompt-sections** | Adds README documentation for print mode prompt caching flag to improve token reuse. | 🟢 Open |
| [#50293](https://github.com/anthropics/claude-code/pull/50293) | **fix: use -exist flag in ipset add** | Prevents duplicate entry errors in `.devcontainer/init-firewall.sh`; adds idempotency. | 🟢 Open |
| [#50578](https://github.com/anthropics/claude-code/pull/50578) | **Wrangler observability bootstrap** | Observability instrumentation for Wrangler integration. | 🟢 Open |
| [#50565](https://github.com/anthropics/claude-code/pull/50565) | **Copilot/fix configuration again** | Configuration fixes for Copilot integration. | 🟢 Open |
| [#46095](https://github.com/anthropics/claude-code/pull/46095) | **Claude Mythos operating contract for Veriflow** | Closed; appears to be a corporate/operational PR. | 🔴 Closed |

---

## Feature Request Trends

Based on issue analysis, the community is prioritizing:

1. **IDE Integration Expansion** — Visual Studio 2026 support (#15942) leads demand; VS Code CLI improvements also requested.
2. **Model Control & Transparency** — Effort level exposure in statusline JSON (#50577), lazy model behavior feedback (#40274), and configurable output token limits.
3. **Billing & Cost Management** — Multiple issues around subscription vs. API key billing, credit consumption transparency, and `/ultrareview` session counting.
4. **MCP Ecosystem** — Private GitHub marketplace integration (#28125), account-level MCP auto-loading concerns (#50062), and permission handling.
5. **Hooks & Extensibility** — Configurable `persistHookOutput` threshold request (#50571) indicates demand for fine-grained customization.
6. **Platform-Specific Refinements** — Windows TUI fixes (keybindings, voice mode), macOS focus management, and Linux terminal scrollback.

---

## Developer Pain Points

| Category | Recurring Theme | Frequency |
|----------|----------------|-----------|
| **Token Limits** | 32,000 max output is a hard ceiling; `CLAUDE_CODE_MAX_OUTPUT_TOKENS` env var ignored in multiple scenarios. | 🔴 High |
| **Billing Inconsistencies** | Double-charging, Max Plan bypass via subagents, session credit consumption on failures. | 🔴 High |
| **Terminal UX (Windows)** | ESC/Ctrl+C unresponsiveness, keybinding regressions (Ctrl+W, Shift+Tab), voice mode spacebar issues. | 🟠 Medium |
| **Chrome Extension Focus** | `mcp__claude-in-chrome__*` tools steal system-wide focus on every tool call (Windows/macOS). | 🟠 Medium |
| **Context Bloat** | Unintended MCP server loading adds ~100K tokens silently; scrollback viewport jumping during output. | 🟠 Medium |
| **Security** | Home directory deletion risk from tilde handling (#49464)—developers flagged as critical. | 🔴 High |
| **CLI Print Mode** | `--print` flag returning empty output in v2.1.83 (regressions). | 🟠 Medium |
| **Large Session Behavior** | `--continue` loads oldest messages instead of recent; compaction issues. | 🟠 Medium |

---

*Generated: 2026-04-19 | Source: github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-19

---

## 1. Today's Highlights

The Codex team has shipped **rust-v0.122.0-alpha.10**, continuing the rapid alpha cadence with refinements to the Rust-based core. A standout PR this cycle enables `codex app` on **macOS Intel and Windows**, addressing a long-standing accessibility gap for x86_64 Mac users (Issue #10410, resolved). Meanwhile, a major **Goal Mode** feature stack—spanning TUI UX, core runtime, model tools, and app-server APIs—has landed across five merged PRs, promising richer goal-tracking capabilities for autonomous workflows.

---

## 2. Releases

| Version | Summary |
|---------|---------|
| **rust-v0.122.0-alpha.10** | Latest alpha release of the Rust codebase. Includes internal stability improvements and groundwork for upcoming features (e.g., Goal Mode integration). No breaking API changes announced. |

*No other stable releases in the last 24h.*

---

## 3. Hot Issues

| # | Issue | Key Points & Community Reaction |
|---|-------|--------------------------------|
| **#10410** | **[CLOSED] macOS Intel (x86_64) support** | High-demand request (288 👍, 187 comments). Resolved by PR #18500, which makes `codex app` platform-aware and provides correct DMG links for Intel Macs. Closes a major accessibility gap for legacy Mac hardware. |
| **#11981** | **[OPEN] Codex app 100% CPU Usage** | 37 comments; reports of CPU pegging even with single-agent workloads. Cross-platform (spotted on macOS). Community suspects regression in event-loop handling or background polling. |
| **#18264** | **[CLOSED] Message send delayed ~8 seconds in new sessions** | 29 comments, 28 👍. Fixed: the bug affected new sessions after a recent update, causing an 8-second freeze before responses. Resolved with prompt turnaround improvements. |
| **#18258** | **[OPEN] Computer Use plugin unavailable on macOS** | 25 comments, 26 👍. Even when plugin files are bundled, the app reports the plugin as unavailable. A workaround involves ensuring `features.apps = true` in `~/.codex/config.toml`. |
| **#15777** | **[OPEN] Sandbox installation corrupts ACL on AppData (Windows)** | 23 comments. Installation corrupts Windows Access Control Lists on `AppData`, potentially breaking permissions for other applications. Severity: security-adjacent; impacts reproducibility. |
| **#9046** | **[OPEN] Context window exhaustion** | 18 comments. Users hitting "ran out of room" errors early in conversations. The community requests better handling of context compaction or clearer user guidance. |
| **#5538** | **[OPEN] Input message disappears during Codex CLI response** | 16 comments, 6 👍. Race condition in TUI: typed input vanishes while the model is streaming output. Affects interactive CLI sessions on macOS. |
| **#17322** | **[OPEN] Windows: App doesn't fully exit + sidebar hit-testing issue** | 11 comments, 12 👍. Two related Windows desktop app bugs: (1) closing window doesn't terminate the process, (2) "New Chat" button has incorrect hit-testing bounds. |
| **#12343** | **[CLOSED] Security: Sandbox ACLs assigned to entire user profile (Windows 11)** | 11 comments, 9 👍. Security researcher flagged that `CodexSandboxOffline/Online` ACLs were applied recursively to the entire user profile tree—a significant overpermissioning issue. Now closed; presumed fixed internally. |
| **#10695** | **[OPEN] GitHub Fix CI skill fails due to inaccessible GH_TOKEN** | 11 comments. The skill cannot authenticate via `gh` because `GH_TOKEN` env var is inaccessible inside the sandbox. Users on BYOK/Pro Max plans are blocked from CI automation workflows. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| **#18077** | **Goal Mode TUI UX** | Adds `/goal` command, statusline indicators, goal-update handling, command-history behavior, and snapshot support to the terminal UI. Final piece of the Goal Mode UX stack. |
| **#18076** | **Goal Mode Core Runtime** | Implements continuation prompts, token accounting, budget-based stopping, resume handling, and interrupt-pause behavior. Core autonomous-execution logic. |
| **#18075** | **Goal Mode Model Tools** | Introduces `get_goal`, `set_goal`, and `update_goal` model tools with handlers and feature gating, allowing the model to read/write goal state. |
| **#18074** | **Goal Mode App-Server API** | Exposes v2 goal APIs (`get`, `set`, `clear`) and emits `goal_updated`/`goal_cleared` notifications for UI sync. |
| **#18073** | **Goal Mode State Foundation** | Persisted goal-mode storage: feature flag wiring and token-only thread goal storage runtime. |
| **#18413** | **Add namespaces to dynamic tools** | Enables dynamic tools to carry explicit namespaces through tool search and dispatch, improving deferred tool resolution and avoiding namespace ambiguity in multi-tool scenarios. |
| **#18500** | **Support `codex app` on macOS (Intel) and Windows** | Makes `codex app` platform-aware; fixes DMG URL for Intel Macs. Resolves Issue #10410. |
| **#18504** | **Rebrand approvals reviewer config to auto-review** | Renames internal `guardian_*` config keys to `auto_review_*` to match user-facing naming, cleaning up generated schemas. |
| **#18502** | **Support multiple cwd filters for thread list** | `thread/list` now accepts an array of `cwd` filters instead of a single string, enabling clients to fetch threads across a project and its worktrees in one request. |
| **#18499** | **Fix plugin cache panic when cwd is unavailable** | Fixes a rare panic in plugin cache initialization when an absolute path is normalized through `AbsolutePathBuf::from_absolute_path` on systems where `current_dir()` is unavailable. |

---

## 5. Feature Request Trends

Aggregating from 50+ issues updated in the last 24h, the following themes dominate:

| Theme | Examples | Description |
|-------|----------|-------------|
| **Multi-window / Multi-instance support** | #12773 | Users want independent Codex windows for parallel projects or multi-monitor workflows, especially on macOS and Windows. |
| **Enhanced subagent control** | #18105, #18513 | Requests for read-only main-agent modes, autonomous delegation settings, and bounded subagent policies to prevent the main agent from absorbing all tasks. |
| **Configurable skill directories** | #15149 | Community wants multiple, precedence-ordered skill directories so they can bundle personal and project-level skills without path conflicts. |
| **MCP (Model Context Protocol) enhancements** | #16501 | Request for `mcp_servers.<id>.default_tools_approval_mode` to align MCP tool approval with existing app-level behavior. |
| **Better Windows sandbox & security** | #15777, #12343 | Persistent concerns about Windows sandbox ACLs, file-permission corruption, and WSL integration issues. |
| **Platform parity (Intel Mac)** | #10410 (fixed), #18341 | Continued demand for Intel Mac support; new reports of rendering bugs (blurred overlay) on Intel hardware. |
| **Customizable `.codex` directory location** | #18334 | Users want project-scoped config directories to be relocatable, aiding monorepo and CI integration. |

---

## 6. Developer Pain Points

1. **CPU / Resource Regression**  
   Multiple reports (#11981, #18467) of 100% CPU usage on macOS after recent updates. Fans surge even on small requests, indicating a likely regression in background polling or event-loop logic.

2. **Windows Sandbox Permissions**  
   ACL corruption on Windows (#15777) and over-broad sandbox assignments (#12343) create security concerns and break other applications. Developers are frustrated by lack of clear remediation.

3. **macOS Intel Compatibility**  
   Even after the fix in #18500, new bugs on Intel Macs (#18341) suggest incomplete QA coverage for x86_64 builds. Users feel like second-class citizens.

4. **GitHub Integration in Sandboxes**  
   The GitHub Fix CI skill (#10695) cannot access `GH_TOKEN`, blocking CI automation for BYOK and Pro Max users who rely on sandboxed GitHub authentication.

5. **Message Send Delays & UI Freezes**  
   The ~8-second delay in new sessions (#18264, now closed) and input disappearance in the CLI (#5538) highlight TUI stability concerns. The TUI race condition is a recurring theme.

6. **Context Window Management**  
   Early context exhaustion (#9046) and remote compact task failures (#15046) suggest that context compaction logic needs improvement. Developers want more control over or visibility into compaction behavior.

7. **Plugin Cache Initialization Panics**  
   A rare but catastrophic panic (#18499) when `current_dir()` is unavailable during plugin cache initialization—fixed, but the incident highlights fragile path-resolution code.

8. **Rate Limit Messaging Confusion**  
   Users upgrading to PRO plans still see "You're out of Codex messages" (#18357), indicating billing/tier synchronization issues that erode trust in the subscription model.

---

*End of digest. Data sourced from github.com/openai/codex activity on 2026-04-19.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest

**Date:** 2026-04-19
**Repository:** google-gemini/gemini-cli

---

## Today's Highlights

The community continues to address critical UX and stability issues. Permission handling regression (#24916) remains actively discussed, with users reporting repeated prompts for the same file access. On the PR side, multiple contributors are tackling configuration validation edge cases around environment variable interpolation, indicating growing adoption of advanced settings customization. The agent team is investigating AST-aware tooling feasibility for improved codebase navigation capabilities.

---

## Releases

**No new releases** in the last 24 hours. The project continues active development with frequent commits landing directly on the main branch.

---

## Hot Issues

**1. [EPIC: AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (5 comments)
A major investigation is underway to determine whether AST-aware tooling could reduce token noise and improve precision when reading method bounds or navigating codebases. Community interest is high—this could significantly improve agent accuracy on large codebases.

**2. [Permission prompts repeat for same file](https://github.com/google-gemini/gemini-cli/issues/24916)** (3 comments)
Users report that "allow" and "allow for all future sessions" instructions don't persist, forcing repeated permission requests. This is a significant friction point for daily workflows.

**3. [Shell commands hang with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (2 comments)
A critical stability issue where CLI commands that have already finished cause the shell to hang indefinitely. Affects simple, non-interactive commands.

**4. [Subagent reports GOAL success despite hitting MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)** (2 comments)
The `codebase_investigator` subagent incorrectly reports success status even when it hits maximum turn limits without completing analysis. This masks interruptions and can mislead users about task completion.

**5. [Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)** (2 comments)
Configuration overrides like `maxTurns` in `settings.json` are completely ignored by the Browser Agent, while `AgentRegistry` correctly reads and merges these settings. This inconsistency undermines user control.

**6. [Gemini fails to open in Windows temporary path A:\](https://github.com/google-gemini/gemini-cli/issues/25216)** (1 comment)
An `EISDIR` error occurs when running `--yolo` in PowerShell on certain Windows configurations with non-standard temp paths.

**7. [Thick black border at prompt bar](https://github.com/google-gemini/gemini-cli/issues/24915)** (1 comment)
Visual rendering issue causing unwanted thick borders at the top and bottom of the prompt bar, degrading terminal aesthetics.

**8. [Text scrambled when running via SSH](https://github.com/google-gemini/gemini-cli/issues/24202)** (1 comment)
Windows users connecting via SSH to Linux cloudtops experience scrambled text output, making the CLI unusable in this common remote workflow.

**9. [Subagents lack awareness of active approval modes](https://github.com/google-gemini/gemini-cli/issues/23582)** (1 comment)
Subagents' instructions conflict with Plan Mode or Auto-Edit Mode constraints because they don't know which mode is active, potentially causing unexpected behavior.

**10. [Model creates tmp scripts in random directories](https://github.com/google-gemini/gemini-cli/issues/23571)** (1 comment)
When shell execution is restricted, the model generates edit scripts scattered across various directories, creating cleanup overhead for clean commits.

---

## Key PR Progress

**1. [Record response's modelVersion in session transcript (#25633)](https://github.com/google-gemini/gemini-cli/pull/25633)**
Fixes a telemetry issue where `GeminiChat.processStreamResponse` recorded the pre-request model instead of the server's actual `modelVersion`, causing stats misalignment during aliasing or A/B routing.

**2. [Forward termination signals to relaunched child process (#25642)](https://github.com/google-gemini/gemini-cli/pull/25642)**
Addresses process management by ensuring `SIGTERM`, `SIGHUP`, and `SIGINT` are forwarded to child processes spawned via `relaunchAppInChildProcess`, preventing orphaned processes.

**3. [Throttle text output updates to prevent UI jank (#25643)](https://github.com/google-gemini/gemini-cli/pull/25643)**
Reduces UI freezes during high-volume shell output by throttling React re-renders triggered by every text `data` event—critical for running builds or tests with many warnings.

**4. [Coerce env var strings to booleans/numbers in settings (#25641)](https://github.com/google-gemini/gemini-cli/pull/25641)**
Resolves validation errors when using environment variable interpolation like `"autoThemeSwitching": "${GEMINI_AUTO_THEME:-true}"` by adding schema-aware type coercion.

**5. [Add /bug-memory command and auto-capture heap snapshot (#25639)](https://github.com/google-gemini/gemini-cli/pull/25639)**
Introduces a new `/bug-memory` slash command to capture V8 heap snapshots and teaches `/bug` to auto-capture when process RSS exceeds 2 GB, reducing debugging friction.

**6. [Add Machine Hostname to CLI interface (#25637)](https://github.com/google-gemini/gemini-cli/pull/25637)**
Users can now display their machine hostname in the CLI footer via a selection menu, useful for users managing multiple environments.

**7. [Support string coercion for boolean settings (#25634)](https://github.com/google-gemini/gemini-cli/pull/25634)**
Enables boolean inputs as strings in configuration to support environment variable interpolation, fixing related validation warnings.

**8. [Use ANSI-derived semantic colors for ANSI themes (#25223)](https://github.com/google-gemini/gemini-cli/pull/25223)**
Fixes contrast issues on custom terminal configurations by using ANSI color names instead of hardcoded hex values from semantic color maps.

**9. [Preserve legacy auto memory behavior (#25625)](https://github.com/google-gemini/gemini-cli/pull/25625)**
Restores backward compatibility for users with `experimental.memoryManager = true` in their settings, ensuring smooth upgrades.

**10. [Start auto memory in ACP sessions (#25626)](https://github.com/google-gemini/gemini-cli/pull/25626)**
Ensures Auto Memory is initialized during ACP session boot, providing consistency between ACP and TUI sessions when `experimental.autoMemory` is enabled.

---

## Feature Request Trends

Analysis of recent issues reveals several dominant feature directions:

| Theme | Examples | Impact |
|-------|----------|--------|
| **Agent Intelligence & Memory** | Memory routing (global vs. project), proactive memory writes, AST-aware codebase mapping | Higher-quality, personalized agent behavior |
| **Configuration Flexibility** | Env var coercion, settings.json override handling, hostname display | Better adoption in diverse environments |
| **Subagent Coordination** | Approval mode awareness, MAX_TURNS recovery, tool call rejection handling | More robust multi-agent workflows |
| **Terminal Compatibility** | SSH rendering fixes, ANSI theme improvements, scroll behavior | Improved UX across platforms |
| **Evaluation & Testing** | Component-level evals, behavioral eval for rejections, pathological compression investigation | Data-driven quality improvements |

---

## Developer Pain Points

**Recurring frustrations emerging from issue volume and discussion:**

1. **Permission Persistence** — Repeated prompts for already-authorized file access remains a top user complaint, suggesting a regression or edge case in the authorization lifecycle.

2. **UI Responsiveness** — High-volume output (builds, tests) causes visible jank and freezes, indicating the rendering pipeline isn't optimized for realistic workloads.

3. **Cross-Platform Inconsistencies** — SSH, Windows paths, and ANSI rendering issues suggest testing gaps across the supported platform matrix.

4. **Configuration Validation** — Environment variable interpolation silently produces strings where booleans are expected, causing runtime validation failures. Multiple PRs addressing this indicate widespread adoption of advanced config patterns.

5. **Subagent Robustness** — Subagents reporting incorrect statuses (success despite failure) or ignoring mode constraints undermines trust in automated workflows.

6. **Process Lifecycle Management** — Child processes not responding to termination signals creates orphaned processes in process manager environments.

---

*Generated from public GitHub data. All links reference google-gemini/gemini-cli.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest

## 2026-04-19

---

### 1. Today's Highlights

The GitHub Copilot CLI community is actively discussing several critical issues heading into the weekend. The **model picker UI inconsistency for GPT-5.4** (Issue #2725) remains the most-discussed topic, with users reporting that the Extra High effort level is hidden despite being functional—gathering 21 comments and 16 👍 reactions. Additionally, rate limiting continues to be a pain point, with a new feature request to improve rate limit UI visibility (Issue #2827) and ongoing reports of aggressive retry behavior on 429 responses (Issue #2760). No new releases or PRs were recorded in the last 24 hours.

---

### 2. Releases

**No new releases in the last 24 hours.**

The last tracked version in community reports is v1.0.32. Users experiencing issues with the `/update` command (Issue #2583) on Windows should note this may be a known regression since v1.0.17.

---

### 3. Hot Issues

The following 10 issues are drawing significant attention or represent important functionality gaps:

1. **[#2725](https://github.com/github/copilot-cli/issues/2725)** — GPT-5.4 `/model` picker hides Extra High despite xhigh still working  
   *Why it matters:* This UI/runtime inconsistency frustrates users who expect the picker to reflect actual capabilities. The 21 comments indicate active debate on whether this is intentional or a bug.  
   *Community reaction:* 16 👍, 21 comments

2. **[#92](https://github.com/github/copilot-cli/issues/92)** — Enhancement: `/ask` mode for non-editing interactions  
   *Why it matters:* Users want a pure Q&A mode without code edits or terminal commands—currently, Copilot CLI is always in agent mode.  
   *Community reaction:* 9 👍, 9 comments

3. **[#2583](https://github.com/github/copilot-cli/issues/2583)** — Copilot Update Command broken on Windows (winget)  
   *Why it matters:* Blocks users from auto-updating via the CLI or `/update` command, forcing manual installation.  
   *Community reaction:* 8 comments

4. **[#2760](https://github.com/github/copilot-cli/issues/2760)** — Implement proper HTTP retry logic for 429 responses  
   *Why it matters:* Aggressive retry loops (20+/minute) on rate limits degrade user experience and may worsen server load.  
   *Community reaction:* 2 👍, 6 comments

5. **[#1723](https://github.com/github/copilot-cli/issues/1723)** — `/ide` fails with "No active IDE workspaces found"  
   *Why it matters:* Prevents VS Code integration on fresh macOS setups, a key workflow for many developers.  
   *Status:* CLOSED (may have a workaround)

6. **[#2769](https://github.com/github/copilot-cli/issues/2769)** — Copilot Pro+ Weekly Rate Limit not resetting  
   *Why it matters:* Payers are blocked from service with no clear recourse, damaging trust in paid tiers.  
   *Status:* CLOSED (likely acknowledged)

7. **[#2078](https://github.com/github/copilot-cli/issues/2078)** — Feature: Add `/btw` command (as in other CLIs)  
   *Why it matters:* Low-effort QoL feature request with strong community support (26 👍) for a casual aside command.  
   *Status:* OPEN

8. **[#2739](https://github.com/github/copilot-cli/issues/2739)** — xhigh reasoning removed for GPT-5.4 and GPT-5.3-codex  
   *Why it matters:* Users report these models are "useless without xhigh reasoning," indicating a significant capability regression.  
   *Status:* OPEN

9. **[#2777](https://github.com/github/copilot-cli/issues/2777)** — Agent name not visible in v1.0.31 (regression from v1.0.27)  
   *Why it matters:* Visual regression that reduces context for users tracking multi-agent sessions.  
   *Status:* OPEN

10. **[#2827](https://github.com/github/copilot-cli/issues/2827)** — Improve rate limit UI for all types of rate limits  
    *Why it matters:* Currently, the only rate limit indicators are blocking errors—no proactive usage visibility.  
    *Status:* OPEN (triage)

---

### 4. Key PR Progress

**No PRs were merged or updated in the last 24 hours.**

The repository shows no recent pull request activity, suggesting the team may be focused on issue triage or internal work not yet submitted.

---

### 5. Feature Request Trends

Analyzing the full issue list reveals several dominant themes:

| Theme | Frequency | Example Issues |
|-------|-----------|----------------|
| **Rate Limiting & UI** | High | #2769, #2742, #2827, #2828, #2760 |
| **Model/Effort Controls** | High | #2725, #2739, #2823 |
| **Agent Behavior Customization** | Medium | #92, #2078, #2821, #2777 |
| **Terminal Rendering** | Medium | #2825 (CJK text), #2826 (Markdown tables), #2771 (UI bars) |
| **Configuration & Paths** | Medium | #1954 (XDG_CONFIG_HOME), #2829 (custom paths) |
| **Platform/Shell Issues** | Medium | #2583, #2822, #2816, #2817 |
| **MCP Integration** | Low-Medium | #2805, #2817 |
| **UX Polish** | Low-Medium | #2830 (themes), #1452 (clipboard paste) |

**Key takeaway:** The community is most vocal about **rate limit handling** (both technical retries and user-facing feedback) and **model effort level inconsistencies**. There is also growing interest in **non-agent Q&A mode** and better **terminal rendering** for international characters and structured content.

---

### 6. Developer Pain Points

The following frustrations appear repeatedly across issues:

1. **Rate Limit Hell:** Multiple users report being stuck on 429 errors for hours, with aggressive retry loops compounding the problem (#2760, #2742, #2769). The lack of proactive rate limit status UI (#2827) forces users into trial-and-error.

2. **Regression Grief:** Several regressions are reported in recent versions:
   - XDG_CONFIG_HOME ignored (#1954)
   - Agent name invisible (#2777)
   - `/update` command broken on Windows (#2583)
   - Prompt UI white bars in v1.0.30 (#2771)

3. **Model Picker Inconsistencies:** The effort level selector for GPT-5.4 is out of sync with actual runtime capabilities (#2725, #2739), undermining user trust.

4. **Long-Running Task Failures:** Session tokens expiring mid-task (#2818) and compaction killing sessions (#2500) prevent developers from starting autonomous tasks and walking away.

5. **Cross-Platform Shell Issues:** Reports of no active shell session on Linux/Pop!_OS (#2822) and crashes on Termux/Android (#2816) suggest instability outside primary test environments.

6. **MCP Lifecycle Bugs:** MCP server processes not being terminated on exit (#2817) create resource leaks, especially noticeable on Android/Termux.

7. **Internationalization Gaps:** CJK text wrapping errors (#2825) and incomplete Markdown table rendering (#2826) hinder non-English and data-focused workflows.

---

*End of Digest. Data sourced from github.com/github/copilot-cli for 2026-04-19.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-19

---

## 1. Today's Highlights

The Kimi Code CLI community saw significant activity around **subagent architecture improvements**, with a new PR addressing work directory inheritance issues that have impacted git worktree workflows. A critical **API-level temperature bug** affecting all users surfaced, alongside ongoing debates about model personality and the balance between thinking capabilities and creative output. The team also reverted a problematic thinking effort refactor, signaling caution with major behavioral changes.

---

## 2. Releases

**No new releases in the last 24 hours.**

The last stable release remains **v1.36.0** (referenced in Issue #1927).

---

## 3. Hot Issues

### 🔴 Critical / High Priority

**#1924** — **[Bug] API Bug: invalid temperature: only 0.6 is allowed for this model (returned for ALL temperature values)**
- **Author:** doggystylexxx | **Created:** 2026-04-17 | **Updated:** 2026-04-18 | **Comments:** 3
- **Why it matters:** Affects all API consumers regardless of client (OpenAI SDK, curl, Hermes Agent). Even explicitly setting `0.6` triggers the error, suggesting a server-side validation issue.
- **Impact:** Blocks users from fine-tuning model creativity/temperature parameters.
- **URL:** https://github.com/MoonshotAI/kimi-cli/issues/1924

**#1927** — **[Bug] Subagent infinite loop**
- **Author:** feng-jin | **Created:** 2026-04-18 | **Updated:** 2026-04-18 | **Comments:** 0
- **Why it matters:** Subagents repeatedly read the same file hundreds of times, causing resource exhaustion and unresponsive sessions on macOS.
- **Impact:** Breaks any workflow relying on subagent task delegation.
- **URL:** https://github.com/MoonshotAI/kimi-cli/issues/1927

**#1931** — **Subagent does not inherit parent's current working directory**
- **Author:** zhuxixi | **Created:** 2026-04-18 | **Updated:** 2026-04-19 | **Comments:** 2
- **Why it matters:** Git worktree and subdirectory navigation workflows fail when spawning subagents, as they always revert to the original root directory.
- **Community reaction:** Related PR #1933 already addresses this (see Key PR Progress).
- **URL:** https://github.com/MoonshotAI/kimi-cli/issues/1931

### 🟡 Feature Requests / Enhancements

**#1925** — **Kimi K2.5 vs K2.6 model selection**
- **Author:** herrbasan | **Created:** 2026-04-17 | **Updated:** 2026-04-18 | **Comments:** 3 | 👍: 0
- **Why it matters:** Users report K2.6's extended thinking degrades creativity and increases hallucinations, losing the model's personality. Request for option to revert to K2.5.
- **Community reaction:** Validates ongoing tension between reasoning depth and creative output in coding assistants.
- **URL:** https://github.com/MoonshotAI/kimi-cli/issues/1925

**#1923** — **Bad Interactivity: Internal reasoning not surfaced**
- **Author:** ruditers | **Created:** 2026-04-17 | **Updated:** 2026-04-18 | **Comments:** 1 | 👍: 0
- **Why it matters:** Kimi generates extensive internal reasoning but only shows minimal final responses, preventing users from catching errors early or reviewing agent decision-making.
- **Community reaction:** Request for incremental streaming of reasoning steps.
- **URL:** https://github.com/MoonshotAI/kimi-cli/issues/1923

**#1873** — **Support installation without administrator rights**
- **Author:** Greenplumwine | **Created:** 2026-04-14 | **Updated:** 2026-04-19 | **Comments:** 1 | 👍: 0
- **Why it matters:** Corporate Windows environments frequently restrict admin privileges, preventing Kimi CLI adoption.
- **Community reaction:** Users note older versions supported non-admin installs; regression in newer releases.
- **URL:** https://github.com/MoonshotAI/kimi-cli/issues/1873

**#1916** — **WSL2 Windows 11 support issues**
- **Author:** anyouuu | **Created:** 2026-04-17 | **Updated:** 2026-04-18 | **Comments:** 1 | 👍: 0
- **Why it matters:** Users on Windows 11 WSL2 (Ubuntu-24.04) cannot complete login, blocking entire platform usage.
- **URL:** https://github.com/MoonshotAI/kimi-cli/issues/1916

### 🟢 Community Suggestions

**#1934** — **Voice Input Mode for Terminal and Web UI**
- **Author:** lucianalima777 | **Created:** 2026-04-18 | **Updated:** 2026-04-18 | **Comments:** 0 | 👍: 0
- **Why it matters:** Feature parity with Claude Code's voice capabilities; enables hands-free interaction for brainstorming and accessibility.
- **URL:** https://github.com/MoonshotAI/kimi-cli/issues/1934

**#1930** — **Support for Professional Database (Tonghuashun/Tianyancha)**
- **Author:** Chener | **Created:** 2026-04-18 | **Updated:** 2026-04-18 | **Comments:** 0 | 👍: 0
- **Why it matters:** Allegretto subscribers want API access to financial data sources within the CLI workflow.
- **URL:** https://github.com/MoonshotAI/kimi-cli/issues/1930

**#1672** — **VSCode plugin plan mode UX improvement (CLOSED)**
- **Author:** hermanzhaozzzz | **Created:** 2026-03-31 | **Updated:** 2026-04-18 | **Comments:** 2 | 👍: 1
- **Resolution:** Closed; users requested inline plan display similar to Codex rather than separate .md file.
- **URL:** https://github.com/MoonshotAI/kimi-cli/issues/1672

---

## 4. Key PR Progress

| PR | Author | Status | Summary | Link |
|---|---|---|---|---|
| **#1933** | zhuxixi | OPEN | Adds `work_dir` parameter to Agent tool, enabling subagents to operate in custom directories. Fixes #1931. | [#1933](https://github.com/MoonshotAI/kimi-cli/pull/1933) |
| **#1936** | zhuxixi | OPEN | Extends #1933 to fix Shell tool CWD and AGENTS.md context to respect overridden work_dir. | [#1936](https://github.com/MoonshotAI/kimi-cli/pull/1936) |
| **#1935** | zoorpha | OPEN | Adds `hookSpecificOutput.updatedInput` support in PreToolUse hooks for transparent command rewriting (34 lines). | [#1935](https://github.com/MoonshotAI/kimi-cli/pull/1935) |
| **#1932** | Sisyphbaous-DT-Project | OPEN | Refines yolo mode to preserve plan review and AskUserQuestion interactions instead of auto-skipping all approvals. | [#1932](https://github.com/MoonshotAI/kimi-cli/pull/1932) |
| **#1928** | pi-dal | OPEN | Fixes streaming replay of large tool call payloads (ACP and Terminal components), addressing Issue #1786. | [#1928](https://github.com/MoonshotAI/kimi-cli/pull/1928) |
| **#1917** | RealKai42 | CLOSED | Reverts accidentally-pushed anthropic thinking effort refactor (commits bypassing PR review). | [#1917](https://github.com/MoonshotAI/kimi-cli/pull/1917) |

**Notable observations:**
- PRs #1933 and #1936 form a coordinated effort to resolve subagent work directory issues—strong signal of community-maintainer collaboration.
- PR #1917's closure indicates internal processes caught a risky main-branch push; the team is reinforcing code review discipline.

---

## 5. Feature Request Trends

Aggregating the 13 issues (open and recently closed), the following themes emerge:

| Theme | Frequency | Top Issues |
|---|---|---|
| **Model Control & Flexibility** | High | #1925 (K2.5/K2.6 switching), #1923 (reasoning visibility) |
| **Cross-Platform Compatibility** | Medium-High | #1916 (WSL2), #1873 (non-admin install) |
| **Subagent Architecture** | High | #1931, #1927, #1936 |
| **Interaction UX** | Medium | #1923 (streaming), #1934 (voice input), #1672 (VSCode plan mode) |
| **Enterprise/Data Features** | Low | #1930 (Professional Database), #1929 (resident server) |

**Key insight:** The community is heavily focused on **workflow control**—getting agents to respect context (CWD, model behavior) rather than requesting entirely new capabilities. Enterprise deployment concerns (admin rights, WSL2) represent a growing segment.

---

## 6. Developer Pain Points

1. **Subagent State Management** — The most recurring theme: subagents fail to inherit parent context (CWD, work directory), breaking multi-directory workflows. Combined with #1927's infinite loop, this is the top operational issue.

2. **API Reliability** — The temperature validation bug (#1924) blocks parameter customization for all users, suggesting backend validation inconsistency. This requires urgent attention.

3. **Platform Gaps** — Corporate Windows users cannot install without admin rights; WSL2 users cannot authenticate. These represent adoption blockers in enterprise environments.

4. **Model Behavior Opacity** — Users cannot see or control the trade-off between thinking depth and creative output (#1925, #1923). This affects trust and debugging.

5. **Yolo Mode Safety** — The current `--yes` flag conflates approval prompts with plan review, auto-approving plans without user review (#1932)—a security/oversight concern.

---

*Digest generated from GitHub data for kimi-cli (MoonshotAI). All issue and PR links reference https://github.com/MoonshotAI/kimi-cli.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-19

## Today's Highlights

The OpenCode community is grappling with a release availability issue—Homebrew and direct downloads for v1.4.12 are returning 404 errors, leaving users unable to upgrade. Windows users continue to face SSL certificate verification failures with proxies, while macOS users report blank windows on newer builds. On the feature side, a new `/cd` command for runtime directory switching and Vim motion support in the prompt input are under active review.

---

## Releases

**No new releases in the last 24 hours.** Users attempting to upgrade to v1.4.12 via Homebrew are encountering 404 errors ([#23347](https://github.com/anomalyco/opencode/issues/23347)).

---

## Hot Issues

1. **[#5485](https://github.com/anomalyco/opencode/issues/5485)** — OpenCode becomes stuck and won't launch *(49 comments)*  
   Users report complete failure to start the application. Community is concerned about data safety when uninstalling. Likely affects production workflows.

2. **[#8601](https://github.com/anomalyco/opencode/issues/8601)** — Unknown certificate verification error on Windows *(21 comments)*  
   SSL/TLS failures when calling AI providers through proxies. Users on Windows + Clash/Proxifier setups are blocked from using OpenAI and Gemini APIs.

3. **[#4672](https://github.com/anomalyco/opencode/issues/4672)** — GitHub Agent gets stuck at "Sending Message..." *(20 comments)*  
   The GitHub integration is unusable for multiple users. Reproducible on v1.0.106.

4. **[#22630](https://github.com/anomalyco/opencode/issues/22630)** — Blank window on macOS 26.4 (Tahoe) *(10 comments)*  
   OpenCode Desktop 1.4.6 renders as a white/blank screen on the latest macOS beta. Affects Apple M3 Pro users.

5. **[#23315](https://github.com/anomalyco/opencode/issues/23315)** — No release for version 1.4.12 *(7 comments, 10 👍)*  
   Homebrew users receive 404 when upgrading. High-impact issue given upgrade friction.

6. **[#9281](https://github.com/anomalyco/opencode/issues/9281)** — Add unified usage tracking via `/usage` *(7 comments, 21 👍)*  
   Community strongly requests visibility into provider rate limits and usage quotas. PR [#9545](https://github.com/anomalyco/opencode/pull/9545) implements this feature.

7. **[#20859](https://github.com/anomalyco/opencode/issues/20859)** — Subagent models ignored with GitHub Copilot *(7 comments)*  
   Billing discrepancies—all premium requests attributed to orchestrator model instead of configured subagent models. Financial impact for Copilot users.

8. **[#23211](https://github.com/anomalyco/opencode/issues/23211)** — 1.4.7+ fails to render UI and loses config *(7 comments)*  
   Users upgrading past 1.4.6 lose all logins, models, and configuration. Regression introduced in recent releases.

9. **[#16876](https://github.com/anomalyco/opencode/issues/16876)** — Log files grow to gigabytes *(5 comments)*  
   No way to disable logging. Disk space concerns for long-running sessions.

10. **[#10815](https://github.com/anomalyco/opencode/issues/10815)** — Data loss due to session closure without confirmation *(5 comments, 4 👍)*  
    `Cmd+Shift+Delete` on macOS force-closes sessions instead of deleting text. Recently closed but community concern remains.

---

## Key PR Progress

1. **[#12679](https://github.com/anomalyco/opencode/pull/12679)** — **feat(tui): vim motions in prompt input** *(Open)*  
   Adds optional Vim-style keybindings (normal/insert/visual modes, `hjkl`, `w/b`, etc.) to the prompt. Enable via `tui.vim: true`. Popular community request.

2. **[#18767](https://github.com/anomalyco/opencode/pull/18767)** — **feat(app): Mobile Touch Optimization** *(Open)*  
   Improves touch responsiveness and gesture handling for mobile/tablet users while preserving desktop UX.

3. **[#23360](https://github.com/anomalyco/opencode/pull/23360)** — **feat(tui): add `/cd` command for runtime working directory switching** *(Open)*  
   Allows developers to switch between project directories, monorepo packages, or git worktrees mid-session without restarting.

4. **[#22079](https://github.com/anomalyco/opencode/pull/22079)** — **feat(app): markdown preview/source toggle for file tabs** *(Open)*  
   Adds a Preview/Source toggle for `.md` files in the file viewer—useful for documentation-heavy workflows.

5. **[#23356](https://github.com/anomalyco/opencode/pull/23356)** — **fix(core): prevent auto-updating session timestamps on metadata changes** *(Open)*  
   Fixes session ordering issues by preventing timestamps from updating on metadata-only edits.

6. **[#23355](https://github.com/anomalyco/opencode/pull/23355)** — **fix: don't hang TUI when reattaching to a deleted session** *(Open)*  
   Resolves a critical hang where `opencode -s <deleted-session-id>` freezes the terminal with no escape.

7. **[#23357](https://github.com/anomalyco/opencode/pull/23357)** — **fix(plugin): opencode run waits for plugins to finish before stopping** *(Open)*  
   Adds `OPENCODE_EXPERIMENTAL_PLUGIN_EXIT_DEFAULT_TIMEOUT` to ensure graceful plugin shutdown.

8. **[#23352](https://github.com/anomalyco/opencode/pull/23352)** — **fix(provider): gate zai/zhipuai thinking injection on reasoning capability** *(Open)*  
   Restores functionality for non-reasoning GLM models and fixes empty response bugs for Z.ai/Zhipuai providers.

9. **[#9545](https://github.com/anomalyco/opencode/pull/9545)** — **feat(usage): unified usage tracking with auth refresh** *(Open)*  
   Implements `/usage` command showing provider-specific rate limits with automatic token refresh for Codex, Copilot, and Claude.

10. **[#23051](https://github.com/anomalyco/opencode/pull/23051)** — **fix(tool): use relative path for read permission patterns** *(Closed)*  
    Resolves permission evaluation mismatches where absolute paths conflicted with user-configured relative deny rules.

---

## Feature Request Trends

Analysis of recent Issues and PRs reveals these dominant feature directions:

| Trend | Description | Evidence |
|-------|-------------|----------|
| **Provider Integration** | Auto-detection of models, unified usage tracking, billing transparency | [#9281](https://github.com/anomalyco/opencode/issues/9281), [#23327](https://github.com/anomalyco/opencode/issues/23327) |
| **Terminal UX** | Vim motions, `/cd` command, thinking block visibility controls | [#12679](https://github.com/anomalyco/opencode/pull/12679), [#23360](https://github.com/anomalyco/opencode/pull/23360), [#7866](https://github.com/anomalyco/opencode/issues/7866) |
| **Mobile & PWA** | Touch optimization, progressive web app installability | [#18767](https://github.com/anomalyco/opencode/pull/18767), [#19174](https://github.com/anomalyco/opencode/issues/19174) |
| **File/Preview Tools** | Markdown preview toggle, Nerd Font support in terminal | [#22079](https://github.com/anomalyco/opencode/pull/22079), [#20044](https://github.com/anomalyco/opencode/issues/20044) |
| **Session Safety** | Confirmation dialogs on `Ctrl+C`/`Ctrl+Shift+Backspace`, deleted session handling | [#23323](https://github.com/anomalyco/opencode/issues/23323), [#21236](https://github.com/anomalyco/opencode/issues/21236) |

---

## Developer Pain Points

1. **Release Availability Gaps** — v1.4.12 assets missing from GitHub releases and Homebrew, blocking automated upgrades.

2. **Windows Proxy/SSL Failures** — SSL certificate verification errors when using proxies (Clash, Proxifier) on Windows. Affects OpenAI, Gemini, and other providers.

3. **UI Rendering Regressions** — Blank windows on macOS 26.4, missing UI elements after upgrading past 1.4.6, lost configurations.

4. **Session Data Loss** — Keyboard shortcuts (`Ctrl+Shift+Backspace`, `Cmd+Shift+Delete`) delete sessions without confirmation. No recovery mechanism.

5. **GitHub Agent Stalls** — The GitHub integration frequently hangs at "Sending Message," rendering the agent unusable.

6. **Log File Bloat** — No way to disable logging; gigabytes consumed on long-running sessions.

7. **Memory/Performance Issues** — Runaway memory growth leading to Zig panics; input lag after auto-updates; TUI hangs on Fedora.

---

*Generated: 2026-04-19 | Data source: [anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-19

## Today's Highlights

No new releases were published in the last 24 hours, but the project saw significant activity with **16 pull requests merged** addressing critical bugs (large-output crashes, Claude 4.7 compatibility, conversation state corruption) and new features (Amazon Bedrock endpoint configuration, Alibaba/Qwen prompt caching). The community remains active with 37 issues tracked, including several high-traffic discussions around MCP tool compatibility and thinking level customization.

## Releases

No new releases published in the last 24 hours.

---

## Hot Issues

| # | Title | Author | Comments | Why It Matters |
|---|-------|--------|----------|----------------|
| [#3214](https://github.com/badlogic/pi-mono/issues/3214) | **[bug, inprogress]** Cloud code assist API returns 400 error due to schema meta-declarations in tool params | vladlearns | 9 | Breaks MCP tools (jcodemunch) with Google Cloud Code Assist; ongoing investigation with `antigravity/claude` provider |
| [#3005](https://github.com/badlogic/pi-mono/issues/3005) | Make "UPDATE AVAILABLE" message toggleable | gumonteilh | 8 | Frequent UX complaint from NixOS and non-standard install users; suggests integrating into "Quiet startup" |
| [#3299](https://github.com/badlogic/pi-mono/issues/3299) | Add "max" thinking level to sync with Opus 4.7's five-rung API | Krystofee | 7 | Feature parity request to extend thinking ladder to 7 levels (`off/minimal/low/medium/high/xhigh/max`); hidden for unsupported models |
| [#3372](https://github.com/badlogic/pi-mono/issues/3372) | **[bug]** pi cannot work with Claude subscription | totoroot | 6 | Blocks productive use of pi with OpenAI/Codex business subscription; newly reported |
| [#3344](https://github.com/badlogic/pi-mono/issues/3344) | **[bug]** Aborted tool calls corrupt conversation state | pedrotchang | 6 | Critical: Ctrl+C during tool calls makes conversation permanently unusable with 400 errors |
| [#3208](https://github.com/badlogic/pi-mono/issues/3208) | **Feature Request:** Custom Thinking Levels per Model | ghost91- | 4 (6 👍) | Top-voted feature request; would let `Shift+Tab` cycle only through model-supported levels via `models.json` and `pi.registerProvider()` |
| [#3342](https://github.com/badlogic/pi-mono/issues/3342) | **[bug]** Compaction fails with gpt-5 models | nicocasaisd | 2 | Duplicate of #3060; `reasoning: none` in `generateTurnPrefixSummary()` breaks GPT-5 models |
| [#3376](https://github.com/badlogic/pi-mono/issues/3376) | **RangeError:** Invalid array length in sanitizeBinaryOutput on Node 25 | Gabrielgvl | 2 | Node 25 incompatibility crashes tool rendering with large strings via `Array.from()` |
| [#3357](https://github.com/badlogic/pi-mono/issues/3357) | Official local LLM provider extension | julien-c | 3 | Dynamic model list fetching from `{baseUrl}/models` would enable native support for llama.cpp/ollama/LM Studio |
| [#3384](https://github.com/badlogic/pi-mono/issues/3384) | **[bug]** pi-web routes custom provider models through OpenRouter instead of direct provider | wgnrai | 2 | Model routing bug in pi-web bypasses custom provider config mid-chat |

---

## Key PR Progress

| # | Title | Author | Status | Summary |
|---|-------|--------|--------|---------|
| [#3402](https://github.com/badlogic/pi-mono/pull/3402) | **fix(amazon-bedrock):** pass model.baseUrl as endpoint | wirjo | OPEN | Enables VPC endpoints, proxies, and custom routing for Bedrock by passing `endpoint` to `BedrockRuntimeClient` |
| [#3400](https://github.com/badlogic/pi-mono/pull/3400) | **feat(amazon-bedrock):** conditionally omit maxTokens | wirjo | OPEN | Prevents token quota waste by skipping `maxTokens` in `inferenceConfig` when caller doesn't set it |
| [#3398](https://github.com/badlogic/pi-mono/pull/3398) | **fix(coding-agent):** resolve symlinks in session paths | lallenlowe | CLOSED | Fixes parent-child fork relationships breaking when sessions are symlinked across profiles |
| [#3375](https://github.com/badlogic/pi-mono/pull/3375) | **Extend Fork to Support Latest Message** | mitsuhiko | CLOSED | Fork now works at current position; slight API change (`entryId` can be undefined in `session_before_fork`) |
| [#3393](https://github.com/badlogic/pi-mono/pull/3393) | **feat(ai):** add Alibaba/Qwen prompt caching | michaelcosj | CLOSED | Adds Anthropic-style `cache_control` format support for Alibaba/Qwen models |
| [#3386](https://github.com/badlogic/pi-mono/pull/3386) | **fix(coding-agent):** prevent large-output crashes | Gabrielgvl | CLOSED | Replaces `Array.from()` with code-unit scanner to handle valid surrogates and avoid `RangeError` on massive tool output |
| [#3382](https://github.com/badlogic/pi-mono/pull/3382) | **feat(ai):** add Claude 4.7 full family support | odinlabs-ai | CLOSED | Adds Sonnet 4.7, Haiku 4.7; strips temperature/top_p/top_k for all 4.7 models (API rejects them) |
| [#3381](https://github.com/badlogic/pi-mono/pull/3381) | **feat(anthropic):** add full Claude 4.7 family | odinlabs-ai | CLOSED | Full 4.7 family support with adaptive thinking and temperature handling |
| [#3385](https://github.com/badlogic/pi-mono/pull/3385) | **feat(coding-agent):** pure builders for workflow env + session log | avyayv | CLOSED | New SDK exports for building `WorkflowEnvironmentSnapshot` and `SessionLogSnapshot` without booting runtime |
| [#3379](https://github.com/badlogic/pi-mono/pull/3379) | **feat(tui):** hide cursor when terminal loses focus | dive | CLOSED | Uses DECSET 1004 focus reporting to hide software cursor in unfocused tmux panes or terminal windows |

---

## Feature Request Trends

Analysis of all 37 issues reveals three dominant feature directions:

1. **Thinking Level Customization** — Multiple requests (#3299, #3208) call for fine-grained control over thinking ladder behavior, including per-model levels and a new `max` tier aligned with Opus 4.7's capabilities.

2. **Provider Extensibility** — Requests #3357 (local LLM provider with dynamic model fetching) and ongoing Amazon Bedrock work indicate strong demand for broader provider support beyond OpenAI/Anthropic defaults.

3. **TUI/UX Refinements** — Community seeks quality-of-life improvements including toggleable update messages (#3005), focus-aware cursors (merged in #3379), and better keyboard handling (#3391).

---

## Developer Pain Points

| Pain Point | Frequency | Affected Areas |
|------------|-----------|----------------|
| **Node 25 incompatibility** (`sanitizeBinaryOutput` crashes) | Multiple reports (#3376, #3383) | Tool rendering, large output handling |
| **MCP tool schema issues** causing 400 errors | 9 comments, in-progress (#3214) | Google Cloud Code Assist, jcodemunch tools |
| **Conversation state corruption** on aborted tool calls | 6 comments (#3344) | Session reliability, Ctrl+C handling |
| **Token quota waste** from aggressive `maxTokens` reservation | 1 PR filed (#3400) | Amazon Bedrock cost optimization |
| **pnpm detection failures** on Windows | 2 issues, 1 PR (#3378, #3377) | Install method detection |
| **CJK markdown rendering** issues | #3353 | Internationalization, export fidelity |

---

*Generated from GitHub data for [badlogic/pi-mono](https://github.com/badlogic/pi-mono) | 2026-04-19*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-19

## 1. Today's Highlights

Qwen Code shipped the **v0.14.5-nightly.20260419.a623655c8** nightly build, introducing complete ACP hooks integration, UX improvements to compact mode, and HTTP hook support. Meanwhile, **authentication regressions dominate the issue tracker** — dozens of newly filed 401/403 errors since the April 15 OAuth free-tier discontinuation signal a critical migration pain point. On the PR side, active work on per-file AI commit attribution, API preconnect latency, and enhanced loop detection signals strong momentum toward the 0.15.0 milestone.

---

## 2. Releases

### v0.14.5-nightly.20260419.a623655c8
Three notable changes landed:

| # | PR | Author | Change |
|---|-----|---------|--------|
| #3248 | feat(acp): add complete hooks support for ACP integration | @DennisYu07 | Full hooks API for the ACP integration surface |
| #3100 | feat: optimize compact mode UX — shortcuts, settings sync, and safety | @chiga0 | Improved compact-mode interactions: keyboard shortcuts, settings synchronization, and safety guardrails |
| — | feat(hooks): Add HTTP Hook support | — | (partial title; HTTP-based hook handlers added) |

These are nightly builds; no stable-channel release today.

---

## 3. Hot Issues

| # | Title | Type | Key Points | Comments |
|---|-------|------|------------|----------|
| **#3203** | [Feature Request] Qwen OAuth Free Tier Policy Adjustment | feature-request | Proposes reducing free quota from 1,000 → 100 requests/day and phasing out the free entry point entirely by April 20. This is a **policy-facing issue** with heavy community engagement: 97 comments and counting. | 97 |
| **#3314** | Internal error: 401 invalid access token or token expired | bug (duplicate) | Cross-version regression: affects v0.14.5 (a6612940f) on Windows/Node 22.17. Users cannot complete API calls despite apparently valid sessions. | 8 |
| **#2395** | input lag when typing — 5+ second delay | bug (P1) | Long-standing P1 on Windows 11 / v0.12.3; severe typing latency in the chat window. Shows the model stalls while awaiting token delivery. | 7 |
| **#3403** | API Error: 401 | bug | Same 401 pattern on v0.12.0 / Node 22.22 / Linux. Tokens expire and are not refreshed silently. | 5 |
| **#3427** | Authenticated error | bug | v0.14.4 reports successful login then immediately throws 401 on every request — a broken session-state bug. | 4 |
| **#3273** | Chat messages displayed in wrong order | bug | v0.14.4 renders user questions above the assistant's previous answer, breaking conversational flow. | 3 |
| **#3384** | Unable to add OpenAI-compatible local LLM | bug | User cannot configure Qwen3.6-35B-A3B via VLLM at localhost:8000/v1, pointing to gaps in the custom provider setup docs. | 3 |
| **#3382** | Feedback for "Authentication" page | bug | Community points out the official docs still reference the discontinued free tier, causing onboarding confusion. | 2 |
| **#2862** | Startup hangs on "Initializing…" when checkpointing enabled | bug | Checkpointing feature causes indefinite hang on launch; disabling it restores normal behavior — a startup-path regression. | 2 |
| **#3274** | /auth is not available | feature-request | The `/auth` command does not appear in the command palette and is treated as a plain message if typed directly, blocking provider key setup for ~3 affected users. | 1 |

---

## 4. Key PR Progress

| # | Title | Author | Significance |
|---|-------|---------|--------------|
| **#3115** | feat: add commit attribution with per-file AI contribution tracking | @wenshao | Enables granular git-level AI contribution disclosure — critical for OSS compliance and enterprise audits. |
| **#3303** | fix(editor): detect Zed.app on macOS when CLI is not in PATH | @gy1016 | Fixes false "Zed (Not installed)" detection on macOS Homebrew installs where `zed` binary is not on PATH. |
| **#3155** | feat(cli): add tool execution progress messages | @wenshao | Adds per-tool elapsed time display, reducing premature Ctrl+C interruptions during long-running commands (`npm install`, etc.). |
| **#3156** | feat(permissions): strip dangerous patterns from YOLO auto-approve | @wenshao | Hardens YOLO mode against `rm -rf /` or data-exfiltration curls by sanitizing command patterns before auto-approval. |
| **#3398** | feat(vscode): replace OAuth with Coding Plan / API Key provider setup | @yiliang114 | Replaces the discontinued Qwen OAuth login flow in the VSCode extension with an interactive QuickPick + InputBox provider setup (Coding Plan, Alibaba Standard, Custom API Key). |
| **#3318** | feat(cli): add API preconnect to reduce first-call latency | @doudouOUC | Fires a fire-and-forget HEAD request at startup to warm TCP+TLS connections, saving 100–200 ms on the first API call. |
| **#3236** | feat(core): enhanced loop detection with stagnation + validation-retry checks | @euxaristia | Adds thought/action stagnation detection and tool-validation retry loops, injecting stop directives to break circular execution. |
| **#2734** | feat(tools): add Markdown for Agents support to WebFetch tool | @gin-lsl | Integrates Cloudflare's "Markdown for Agents" spec, enabling up to 80% token reduction when fetching from compatible servers. |
| **#3319** | feat(cli): add early input capture to prevent keystroke loss during startup | @doudouOUC | **Merged.** Buffers keystrokes during REPL init (200–500 ms) and replays them once KeypressProvider mounts — eliminates silent keystroke drops. Closes #3224. |
| **#2592** | feat(vscode-companion): support /export session command | @yiliang114 | Adds native `/export` support to the VSCode Companion for session export with CLI-parity formats and IDE-native save UX. |

---

## 5. Feature Request Trends

Aggregating the 30 tracked issues and open PRs reveals five dominant request vectors:

1. **Authentication & OAuth migration path** — Multiple issues (#3382, #3274, #3413, #3398) demand updates to docs, `/auth` UX, and provider options since the free OAuth tier was discontinued on April 15.
2. **Token/session persistence reliability** — The surge of 401 errors across versions points to a systemic refresh or storage bug; users expect tokens to survive restarts and sessions.
3. **Local / self-hosted LLM support** — Users want to connect OpenAI-compatible endpoints (VLLM, Ollama, etc.) with clear configuration docs and UI parity.
4. **Input responsiveness & startup performance** — Lag, keystroke loss, and startup hangs (#2395, #3221, #2862) are consistently reported; early-input capture (#3319) and lazy tool registration (#3221) are in-flight fixes.
5. **Agent execution observability** — Feature requests for structured tool-progress feedback, per-file AI attribution (#3115), and dedicated agent-tool displays (#2514) indicate demand for richer debugging and auditability.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **401 auth errors post-discontinuation** | High — appears in ~15 new issues since April 15 | Blocks all active users who haven't migrated to Coding Plan / alternative providers |
| **Token not persisted across restarts** | High — reported in #3417, #3425, #3423 | Forces repeated manual key re-entry; broken session state |
| **Free tier documentation still live** | Medium | Onboarding confusion; support overhead |
| **Startup hangs with checkpointing** | Medium | Requires manual force-quit; affects CI/automation use cases |
| **`/auth` command missing or inaccessible** | Medium | Blocks API key setup for OpenRouter and custom providers |
| **5+ second input lag on Windows** | Low (but P1 severity) | Severe productivity degradation for affected users |
| **Long auth URLs wrapped in terminal box borders** | Low | Copy-paste failure during MCP OAuth flow; UX friction in headless environments |

---

*End of digest. All issue and PR links reference `https://github.com/QwenLM/qwen-code/issues/` and `https://github.com/QwenLM/qwen-code/pull/` respectively.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/manelsen/agents-radar).*