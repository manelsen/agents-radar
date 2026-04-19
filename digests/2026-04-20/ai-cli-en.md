# AI CLI Tools Community Digest 2026-04-20

> Generated: 2026-04-19 20:32 UTC | Tools covered: 8

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Report Date:** 2026-04-20
**Data Sources:** GitHub community digests for 7 AI CLI tools

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape shows a maturing but fragmented ecosystem. All major tools share a common technical trajectory toward multi-agent orchestration, smarter permission handling, and cost visibility—yet approach these goals through distinct architectural decisions. OpenAI Codex leads in release velocity (2 alpha releases in 24h), while Anthropic's Claude Code dominates community engagement (142 👍 on top issue). Platforms are converging on MCP (Model Context Protocol) as the extension standard, though implementation quality varies significantly. The Windows developer experience remains an underserved priority across the board, creating friction for enterprise adoption.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | PRs Active | Releases (24h) | Community Traffic |
|------|------------------|-----------|----------------|-------------------|
| **Claude Code** | 10 (top: 142 👍) | 7 | 0 | High |
| **OpenAI Codex** | 10 (50 analyzed) | 10+ | 2 alpha | High |
| **Gemini CLI** | 10 | 10 | 0 | Moderate |
| **GitHub Copilot CLI** | 9+ (28 updated) | 0 | 0 | Moderate |
| **Kimi Code CLI** | 9 | 3 | 0 | Moderate |
| **OpenCode** | 10 (50+ analyzed) | 10 | 2 (v1.14.17, v1.14.18) | Moderate |
| **Pi** | 10 | 10 | 0 | Moderate |

**Observations:**
- Claude Code and OpenAI Codex have the highest community engagement by issue voting weight
- OpenCode is the only tool with stable release cadence (v1.14.17→v1.14.18 in 24h)
- GitHub Copilot CLI shows high issue volume but zero PR activity, suggesting team triage mode
- Kimi Code CLI has the lowest PR velocity, indicating a smaller or more conservative contribution model

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating industry-wide technical priorities:

| Feature Direction | Tools Affected | Specific Needs |
|-------------------|----------------|----------------|
| **Smart Permission/Approval Handling** | Claude Code, Codex, Gemini CLI, Copilot CLI | Compound command parsing (#16561), persistent allow-remember, sandbox approval loops |
| **Cost & Token Visibility** | Claude Code, Copilot CLI | Context window indicators, usage percentages, quota dashboards |
| **Multi-Agent Orchestration** | Claude Code, Kimi Code, OpenCode, Codex | Hierarchical agents, worktree/shared directory, sub-agent state communication |
| **MCP Robustness** | Codex, Copilot CLI, Pi, Gemini CLI | Process reaping, stdio leaks, Windows connectivity, remote MCP execution |
| **Sub-Agent Reliability** | Kimi Code, Claude Code, Pi | Work directory inheritance, loop termination, graceful error handling |
| **Push/Async Notifications** | Claude Code, Kimi Code, Gemini CLI | Task completion alerts for background/long-running operations |
| **Session/Context Durability** | Pi, Claude Code, Gemini CLI | Session state recovery, compaction robustness, AGENTS.md persistence |
| **Windows Platform Parity** | All tools | Voice input, PowerShell support, sandbox ACLs, MCP connectivity, terminal rendering |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Permission intelligence, cost visibility | Power users, enterprise | Permission granularity, auto-memory, worktree consolidation |
| **OpenAI Codex** | Multi-agent autonomy, goal-mode | Autonomous workflows, CI/CD | Goal tracking, budget-aware continuation, remote MCP stack |
| **Gemini CLI** | Agent reliability, extensibility | Cloud/SSH users, plugin developers | AST-aware tools, extension lifecycle, PTY management |
| **GitHub Copilot CLI** | Rate limit UX, model picker | GitHub-integrated workflows | Effort-level model selection, retry logic |
| **Kimi Code CLI** | Sub-agent control, protocol flexibility | Multi-project developers | Work_dir override, ACP protocol, hook extensibility |
| **OpenCode** | Model provider variety, security | Multi-model users, self-hosters | Azure/OpenRouter/Claude compatibility, ripgrep backend |
| **Pi** | Provider compatibility, terminal integration | Enterprise Windows, custom LLM setups | Schema sanitization, OAuth flexibility, Windows Terminal |

**Key Differentiators:**
- **Claude Code** prioritizes friction reduction through permission intelligence (highest community upvote: 142 👍)
- **OpenAI Codex** invests heavily in autonomous goal-pursuit with resource constraints (3 concurrent PRs on goal mode)
- **OpenCode** leads in provider diversity, solving Azure OpenAI and OpenRouter integration
- **Pi** focuses on provider compatibility and schema normalization for Claude via Google Code Assist
- **Kimi Code CLI** differentiates with ACP protocol extensibility and hook-based command rewriting

---

## 5. Community Momentum & Maturity

| Tool | Momentum Indicators | Maturity Signals |
|------|---------------------|------------------|
| **OpenAI Codex** | 🔥 Highest: 2 releases/24h, 50+ active issues, 10+ PRs, active security hardening | MVP→Growth: Goal mode progressing through review, remote MCP stack landing |
| **Claude Code** | 🔥 High: 142 👍 on top issue, 10 hot discussions, security focus | Growth: Permission intelligence at critical mass; desktop reliability gaps suggest early-stage polish |
| **OpenCode** | 🟡 Steady: Stable release cadence, 50+ issue analysis, security patch v1.14.18 | Stable: RIPgrep backend restoration indicates feature maturity |
| **Gemini CLI** | 🟡 Steady: 10 PRs, security hardening (execFileSync), SSH/PTY fixes | Early Growth: Extension system improvements, trust mismatch fixes |
| **Pi** | 🟢 Consistent: 10 PRs merged, multiple GCP/Azure fixes, Windows Terminal improvements | Growth: Provider schema handling maturing, OAuth configurability |
| **Kimi Code CLI** | 🟡 Niche: 9 issues, 3 PRs, subagent focus | Early: Work_dir inheritance under development, ACP protocol evolving |
| **GitHub Copilot CLI** | 🟡 Stalled: High issue volume, zero PR activity, rate limit chaos | Triage: Team addressing accumulated issues rather than shipping features |

**Assessment:**
- **OpenAI Codex** and **Claude Code** are the most actively iterated tools with mature communities
- **GitHub Copilot CLI** appears to be in a triage backlog state; may indicate upcoming major release
- **Kimi Code CLI** has a smaller but focused community around sub-agent reliability

---

## 6. Trend Signals

The following industry patterns emerge from community feedback:

### Critical Infrastructure Patterns
1. **MCP as Standard Extension Protocol**: All tools now reference MCP; implementation quality (process reaping, stdio leaks) is now a competitive differentiator
2. **Permission Intelligence as #1 Pain Point**: Compound command parsing (Claude Code), sandbox persistence (Codex), permission state (Gemini) all rank highest—this is a universal UX failure
3. **Multi-Agent Architecture Maturation**: From simple sub-agents to hierarchical teams (OpenCode), goal-mode autonomy (Codex), and worktree consolidation (Claude Code)

### Enterprise Adoption Barriers
4. **Windows Remains Secondary**: Bash crashes, MCP failures, sandbox issues, terminal rendering—all tools underinvest in Windows despite enterprise demand
5. **Auth & Token Instability**: Session token expiration (Copilot CLI), auth failures in IDEs (Kimi Code), OAuth callback hardcoding (Pi)—blocks long-session workflows
6. **Enterprise Plugin/Extension Breakage**: Hookify import failures (Claude Code), managed MCP crashes, sandbox security concerns (OpenCode)—prevent locked-down environment adoption

### UX/Feedback Evolution
7. **Real-Time Visibility Demand**: Context window consumption, token/cost in UI, rate limit dashboards—users want proactive, not reactive, information
8. **Async Task Completion Feedback**: Push notifications for background tasks becoming expected across platforms
9. **SSH/Remote Session Challenges**: Gemini CLI's scrambled output, terminal rendering issues—cloud development workflows are straining existing assumptions

### Technical Architecture Shifts
10. **Remote MCP Execution**: OpenAI Codex PRs #18581-18584 indicate movement toward distributed MCP architectures
11. **Budget-Aware Autonomous Agents**: Goal mode with token accounting and budget stopping signals a trend toward resource-constrained AI agents
12. **Provider Fragmentation**: OpenCode's Azure failures and Pi's multi-provider compatibility work highlight the complexity of serving diverse model ecosystems

---

**Bottom Line for Decision-Makers:**

- **For permission intelligence and CLI maturity**: Claude Code leads by community vote
- **For autonomous agent development**: OpenAI Codex is furthest along with goal mode
- **For multi-model flexibility**: OpenCode offers the broadest provider support
- **For Windows enterprise**: Current ecosystem has significant gaps; monitor for improvements
- **For long-session reliability**: GitHub Copilot CLI and Kimi Code CLI need improvement before production trust

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-04-20** | Source: [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking

The repository's most-discussed pull requests represent active Skill proposals and improvements. All listed PRs are currently **OPEN** status:

| # | PR | Author | Key Functionality | Status |
|---|-----|--------|-------------------|--------|
| 1 | [#723 testing-patterns](https://github.com/anthropics/skills/pull/723) | 4444J99 | Comprehensive testing skill covering Testing Trophy philosophy, unit testing (AAA pattern), React component testing, and E2E strategies | OPEN |
| 2 | [#514 document-typography](https://github.com/anthropics/skills/pull/514) | PGTBoos | Typographic quality control preventing orphan words, widow paragraphs, and numbering misalignment in AI-generated documents | OPEN |
| 3 | [#806 sensory (AppleScript)](https://github.com/anthropics/skills/pull/806) | AdelElo13 | Native macOS automation via osascript/AppleScript with two-tier permission system for app scripting and UI automation | OPEN |
| 4 | [#335 masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335) | junaid1460 | AI-powered image generation (Imagen 3.0) and video generation (Veo 3.1) with job management capabilities | OPEN |
| 5 | [#181 SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181) | amitlals | Predictive analytics skill leveraging SAP's open-source tabular foundation model for business data analysis | OPEN |
| 6 | [#486 ODT skill](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | OpenDocument Format creation, template filling, and conversion to/from HTML for .odt, .ods, .odf files | OPEN |
| 7 | [#374 x402 BSV micropayment](https://github.com/anthropics/skills/pull/374) | Calgooon | BSV blockchain micropayment authentication enabling natural-language AI service discovery and payment | OPEN |
| 8 | [#541 DOCX tracked changes fix](https://github.com/anthropics/skills/pull/541) | Lubrsy706 | Bug fix preventing document corruption when DOCX skill adds tracked changes to documents with existing bookmarks | OPEN |

**Notable Discussion Theme:** Many top PRs focus on improving existing skills (frontend-design #210, skill-creator fixes #539, #284) rather than entirely new capabilities.

---

## 2. Community Demand Trends

Issues reveal concentrated demand across several strategic directions:

### Organizational & Enterprise Workflows
- **Org-wide skill sharing** (#228, 9 comments, 5 👍) — Users need direct sharing links or shared library within organizations; current manual download/upload workflow is cumbersome
- **Enterprise integration** (#29, 4 comments) — AWS Bedrock compatibility remains a sought-after use case
- **API key limitation** (#532) — skill-creator's description optimizer requires API keys, blocking enterprise/SSO users

### Skill Quality & Governance
- **Meta-skills for validation** (#83) — skill-quality-analyzer and skill-security-analyzer to evaluate SKILL.md across five quality dimensions
- **Agent governance** (#412) — Safety patterns for policy enforcement, threat detection, and audit trails
- **Security namespace concerns** (#492, 4 comments) — Community skills distributed under anthropic/ namespace create trust boundary vulnerabilities

### Developer Experience
- **Skill reliability** (#556, 6 comments, 6 👍) — run_eval.py shows 0% trigger rate across all queries, indicating evaluation tooling issues
- **Plugin conflicts** (#189, 5 comments, 7 👍) — document-skills and example-skills installing identical content causes duplicates
- **Skill creation best practices** (#202, 8 comments) — skill-creator reads like documentation rather than operational instructions

### Missing Features
- **Persistent memory** (#154, #521) — Record knowledge across sessions; multiple independent proposals for similar functionality
- **MCP exposure** (#16, 4 comments) — Skills-as-MCPs protocol for standardized AI software packaging

---

## 3. High-Potential Pending Skills

These PRs show active development and may merge soon based on specificity and community need:

| Skill | PR |亮点 | Priority Signal |
|-------|-----|-----|----------------|
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Full testing stack coverage (Trophy model → E2E) with React Testing Library guidance | Recently created (2026-03-22), structured documentation |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Solves universal AI document quality issue; high utility if merged | Detailed root-cause analysis in summary |
| **skill-quality-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | Meta-skill evaluating structure, documentation, security, testability, and completeness | Comprehensive 5-dimension framework |
| **sensory (AppleScript)** | [#806](https://github.com/anthropics/skills/pull/806) | Native macOS automation replacing screenshot-based computer use | Novel use case; addresses automation gap |
| **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | Persistent context across Claude Code sessions via tagged Markdown entries | Addresses session-loss pain point |

**Bug Fixes Likely to Merge Soon:**
- [#541 DOCX bookmark collision](https://github.com/anthropics/skills/pull/541) — Clear root cause, well-documented
- [#538 PDF case-sensitivity](https://github.com/anthropics/skills/pull/538) — Straightforward file path corrections
- [#539 YAML validation](https://github.com/anthropics/skills/pull/539) — Pre-parse validation prevents silent failures

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for meta-skills and tooling that improve Skill reliability, quality validation, and enterprise usability—rather than domain-specific skills alone.**

The signal is clear: the top issues by engagement focus on skill management infrastructure (sharing, evaluation, plugin conflicts, security boundaries) rather than requesting new creative or technical skill domains. This indicates the ecosystem is maturing toward **skill operationalization**—making existing skills work better, more securely, and more collaboratively across organizations.

---

# Claude Code Community Digest — 2026-04-20

## Today's Highlights

The community continues to drive active development with no new releases in the last 24 hours, but significant engagement on permission management and cost tracking features. The most-discussed issue (142 👍) requests compound Bash command parsing for smarter permission matching, while cost/hook integration remains a hot topic with multiple parallel proposals.

---

## Releases

No new releases published in the last 24 hours.

---

## Hot Issues

### 1. [Parse compound Bash commands for permission matching](https://github.com/anthropics/claude-code/issues/16561) — 23 comments, 142 👍
**Status:** Open | Area: tools, security

Currently, compound Bash commands (`&&`, `|`, `;`, `||`) are evaluated as a single unit by the permission matcher, causing unnecessary approval prompts even when individual components would be allowed. This enhancement would dramatically reduce friction for power users with complex shell workflows.

### 2. [Push notifications for completed tasks in remote-control mode](https://github.com/anthropics/claude-code/issues/28765) — 12 comments, 35 👍
**Status:** Open | Enhancement

Users running multiple Claude Code sessions via tmux in remote-control mode request OS push notifications when tasks complete. Critical for developers running long background tasks without constant terminal monitoring.

### 3. [Worktrees should share the same project directory](https://github.com/anthropics/claude-code/issues/34437) — 7 comments, 15 👍
**Status:** Open | Area: core, memory

Git worktree users report that Claude Code creates isolated project directories for each worktree, fragmenting conversation history, auto-memory, and project settings. Consolidating these would improve continuity for branched development workflows.

### 4. [macOS app update relaunch fails](https://github.com/anthropics/claude-code/issues/50582) — 3 comments
**Status:** Open | Platform: macOS, area: desktop

The macOS desktop app fails to install updates when clicking "relaunch"—users must manually download and reinstall. Affects automatic update workflows on affected systems.

### 5. [Stream idle timeout during long tool-use on Claude Code Web](https://github.com/anthropics/claude-code/issues/49619) — 3 comments
**Status:** Open | Platform: web, area: claude-code-web

Users report partial responses and stream timeouts when Claude Code Web performs long tool-use sequences, particularly with Opus 4.7 models. Blocks reliable automation workflows.

### 6. [Context window usage indicator](https://github.com/anthropics/claude-code/issues/39187) — 3 comments
**Status:** Open | Area: tui, statusline

Two duplicate issues (#39187, #46897) request visible context window consumption percentage. Users report losing track of context budget until sessions degrade or require compaction, making planning difficult.

### 7. [Orphaned background shells persist across sessions](https://github.com/anthropics/claude-code/issues/50865) — 3 comments
**Status:** Open | Platform: macOS, area: bash, desktop

Background shells from prior sessions respawn commands unexpectedly in new sessions, causing duplicate test runs and resource issues. Reproduced on Claude Code 2.1.114 on macOS 26.5.

### 8. [Light mode ANSI theme color conflicts](https://github.com/anthropics/claude-code/issues/40905) — 3 comments
**Status:** Open | Platform: macOS, area: tui

ANSI color7 is used for both code text (needs dark) and UI backgrounds (needs light), making light mode with standard palettes unusable. Affects developers with accessibility or preference constraints.

### 9. [Hookify plugin ImportError in versioned cache](https://github.com/anthropics/claude-code/issues/47868) — 3 comments
**Status:** Open | Platform: macOS, area: hooks, plugins

The Hookify plugin fails to import its own modules when loaded from the plugin cache due to versioned directory structure, breaking all hook events. Impacts users relying on custom automation hooks.

### 10. [Agent tool not available to sub-agents](https://github.com/anthropics/claude-code/issues/46424) — 4 comments
**Status:** Open | Platform: macOS, area: agents

The orchestrator pattern fails as sub-agents cannot access the Agent tool, preventing hierarchical multi-agent architectures. Limits advanced autonomous workflow implementations.

---

## Key PR Progress

### 1. [Changelog fix: skill name correction](https://github.com/anthropics/claude-code/pull/50672) — Open
Corrects skill name in CHANGELOG entry for 2.1.111 from `/less-permission-prompts` to `/fewer-permission-prompts`. Minor but ensures documentation accuracy.

### 2. [Remove "retro-futuristic" recommendation](https://github.com/anthropics/claude-code/pull/39043) — Open
Removes outdated design recommendation from Frontend Design Skill. Community-contributed cleanup.

### 3. [Claude Mythos operating contract for Veriflow](https://github.com/anthropics/claude-code/pull/47895) — Open
Adds Claude Mythos operating contract. Follows closure of related PR #46095.

### 4. [Wrangler observability bootstrap](https://github.com/anthropics/claude-code/pull/50578) — Open
Bootstrap observability tooling for Wrangler integration. Signals continued investment in deployment tooling.

### 5. [Copilot/fix duplicate imports](https://github.com/anthropics/claude-code/pull/50595) — Open
Restores classes and fixes duplicate import issues in Copilot integration code.

### 6. [Ethos Aegis project configuration](https://github.com/anthropics/claude-code/pull/50643) — Open
Comprehensive configuration files and CI templates for Ethos Aegis project standardization.

### 7. [Claude/fix readme images eu sfj](https://github.com/anthropics/claude-code/pull/50638) — Open
Image path corrections in README documentation.

---

## Feature Request Trends

Analyzing the full issue set reveals these dominant feature directions:

| Theme | Frequency | Description |
|-------|-----------|-------------|
| **Permission intelligence** | High | Compound command parsing (#16561), granular permission controls |
| **Cost & token visibility** | High | Context window indicators (#39187, #46897), token/cost in hooks (#50863, #50883), usage limit accuracy (#50761) |
| **Platform-specific tooling** | Medium | Windows voice typing (#50870), PowerShell version options (#50646), macOS update reliability (#50582) |
| **Multi-session management** | Medium | Remote-control push notifications (#28765), worktree consolidation (#34437) |
| **Plugin ecosystem** | Medium | Hookify cache fixes (#47868), MCP enterprise controls (#39361), cost hooks (#50863) |
| **Collaboration features** | Medium | Cowork sandbox improvements (#50873, #50872), GitHub monitor reliability (#50874) |

---

## Developer Pain Points

1. **Permission friction**: The compound Bash command issue (#16561) represents the most-requested quality-of-life improvement—developers want granular control without repeated interruptions.

2. **Cost opacity**: Three parallel requests (#50863, #50883, #50761) highlight that token usage and cost data remain inaccessible in hooks and UI, blocking analytics and quota management.

3. **macOS reliability gaps**: App updates fail (#50582), background shells misbehave (#50865), and accessibility layers block computer use (#50719)—the desktop experience shows rough edges.

4. **Context window blindness**: No visible consumption indicator forces developers to monitor sessions reactively rather than proactively managing context budget.

5. **Enterprise plugin breakage**: Hookify import failures (#47868) and managed MCP crashes (#39361) prevent enterprise security controls from functioning, blocking adoption in locked-down environments.

6. **Windows tooling gaps**: Bash crashes (#30165), virtualization failures (#50872), and lack of native voice input (#50870) indicate Windows remains a secondary platform target.

---

*Data sourced from GitHub.com/anthropics/claude-code — Generated 2026-04-20*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest

**Date:** 2026-04-20
**Source:** github.com/openai/codex

---

## 1. Today's Highlights

Two new alpha releases (v0.122.0-alpha.11 and v0.122.0-alpha.12) dropped for the Rust components. The community is actively addressing critical regressions: permission prompts looping unexpectedly (#14936, 49 comments), MCP process leaks causing 37GB memory usage (#12491), and a concerning turn/interrupt hang bug fixed in PR #18392. New goal-mode features are advancing through review, promising persisted goal tracking and budget-aware autonomous continuation.

---

## 2. Releases

**rust-v0.122.0-alpha.11 & v0.122.0-alpha.12**

Both releases shipped within the last 24 hours for the Rust codebase. No detailed changelogs provided in this cycle. Users on v0.122.0-alpha.10 should upgrade to latest for bug fixes.

**URLs:**
- https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.11
- https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.12

---

## 3. Hot Issues

### 1. **#14936 - bwrap Approval Prompt Loop** (49 comments, 20 👍) 🔥 HOT
**Status:** OPEN | **Priority:** Regression
Linux users report the sandbox approval dialog appearing for nearly every command despite selecting "Yes, and don't ask again." This severely impacts CLI usability on Ubuntu/Gentoo.
- **Why it matters:** Breaks core workflow automation; users cannot trust persistent permissions.
- **Community:** Active debugging on bwrap (bubblewrap) sandbox interaction; version 0.115.0 affected.

**URL:** https://github.com/openai/codex/issues/14936

---

### 2. **#8648 - Codex Responds to Stale Messages** (45 comments, 37 👍) 🔥 HOT
**Status:** OPEN | **Priority:** Context Handling
In multi-turn conversations, Codex sometimes replies to an earlier message instead of the latest prompt, causing confusion and incorrect code suggestions.
- **Why it matters:** Core conversation reliability issue; undermines trust in agentic behavior.
- **Community:** High engagement (37 👍); reproducible with GPT-5.2-xhigh on Pro tier.

**URL:** https://github.com/openai/codex/issues/8648

---

### 3. **#18258 - Computer Use Plugin Unavailable on macOS** (26 comments, 27 👍)
**Status:** OPEN | **Priority:** Skills/MCP
macOS users see "Computer Use plugin unavailable" despite bundled plugin files existing and feature flags enabled.
- **Why it matters:** Blocks key capability for GUI automation tasks.
- **Workaround:** Ensure `features.apps = true` in `~/.codex/config.toml`; repair cache path.

**URL:** https://github.com/openai/codex/issues/18258

---

### 4. **#16088 - Empty .codex File Left Behind** (21 comments, 58 👍)
**Status:** OPEN | **Priority:** Regression
Starting a thread in a project without `.codex` file leaves an empty `.codex` file in the directory, creating git noise and unexpected state.
- **Why it matters:** Most upvoted bug (58 👍); affects VS Code extension users on Windows under WSL.
- **Community:** Strong demand for fix before it becomes habitual behavior.

**URL:** https://github.com/openai/codex/issues/16088

---

### 5. **#12491 - MCP Zombies: 1300+ Processes, 37GB Leak** (13 comments, 3 👍)
**Status:** OPEN | **Priority:** Memory/Cleanup
Codex.app GUI fails to reap MCP child processes after task completion, accumulating zombie processes and massive memory bloat.
- **Why it matters:** Makes long sessions unusable; indicates systemic process management failure.
- **Scope:** Affects Codex.app GUI wrapper (v0.98.0) with o3 model via GUI.

**URL:** https://github.com/openai/codex/issues/12491

---

### 6. **#11635 - Stale Capacity Banner** (14 comments, 6 👍)
**Status:** OPEN | **Priority:** UX
Codex Desktop incorrectly shows "Selected model is at capacity" banner while the model continues responding normally.
- **Why it matters:** False alarms confuse users; could trigger unnecessary model switching.

**URL:** https://github.com/openai/codex/issues/11635

---

### 7. **#18333 - MCP Stack Bloat on New Sessions** (12 comments, 2 👍)
**Status:** OPEN | **Priority:** Regression
Codex Desktop repeatedly initializes full MCP stacks for new sessions/subagents, causing severe slowdown and memory pressure.
- **Why it matters:** Performance regression in v26.415.21839; impacts macOS ARM64 users.

**URL:** https://github.com/openai/codex/issues/18333

---

### 8. **#9544 - Remote Compact Stream Disconnect** (30 comments, 9 👍)
**Status:** CLOSED
Remote compaction tasks fail with "stream disconnected before completion" error.
- **Resolution:** Closed; likely addressed in recent releases.

**URL:** https://github.com/openai/codex/issues/9544

---

### 9. **#17832 - Playwright MCP Stdio Leak (Regression)** (7 comments, 0 👍)
**Status:** OPEN | **Priority:** Regression
Despite fix #16895, Playwright MCP stdio processes still leak: 213 orphaned pairs consuming 13.6 GB RSS.
- **Why it matters:** Memory leak persists across Codex CLI 0.120.0 and App 26.409.20454.

**URL:** https://github.com/openai/codex/issues/17832

---

### 10. **#18507 - Computer Use Microphone Entitlement Error** (3 comments, 1 👍)
**Status:** OPEN | **Priority:** macOS/Entitlements
Bundled Computer Use helper requests microphone permission without proper audio-input entitlement, failing with "Apple event error -10000."
- **Why it matters:** Blocks accessibility features on macOS ARM64; indicates incomplete entitlements.

**URL:** https://github.com/openai/codex/issues/18507

---

## 4. Key PR Progress

### 1. **#18075 - Goal Mode Model Tools** (3/5)
**Author:** etraut-openai | **Status:** OPEN
Adds `get_goal`, `set_goal`, and `update_goal` model tools with feature gating. Enables the model to inspect persisted goals, create/replace goals, and update budget metadata before autonomous continuation.
- **Impact:** Foundation for AI-driven goal tracking within conversations.

**URL:** https://github.com/openai/codex/pull/18075

---

### 2. **#18077 - Goal Mode TUI UX** (5/5)
**Author:** etraut-openai | **Status:** OPEN
Complete TUI experience for goal mode: `/goal` command, statusline indicators, goal update handling, command history behavior, and snapshots.
- **Impact:** User-facing interface for the new goal tracking system.

**URL:** https://github.com/openai/codex/pull/18077

---

### 3. **#18076 - Goal Mode Core Runtime** (4/5)
**Author:** etraut-openai | **Status:** OPEN
Implements continuation prompts, token accounting, budget stopping, resume handling, and interrupt pause behavior for active goals.
- **Impact:** Core logic enabling autonomous goal-pursuit with resource constraints.

**URL:** https://github.com/openai/codex/pull/18076

---

### 4. **#18392 - Fix Turn/Interrupt Hang**
**Author:** danwang-oai | **Status:** OPEN
Fixes a bug where `turn/interrupt` RPC hangs when the target turn has already completed. Previously, interrupt requests were queued and only answered on TurnAborted events.
- **Impact:** Resolves frozen sessions where users cannot cancel stuck operations.

**URL:** https://github.com/openai/codex/pull/18392

---

### 5. **#18443 & #18493 - Windows Sandbox ACL Security**
**Authors:** efrazer-oai | **Status:** OPEN
Expands and filters `USERPROFILE` roots from Windows sandbox ACLs, preventing overbroad permissions. Follow-up PR filters SSH-owned profile roots from SSH config dependencies.
- **Impact:** Security hardening for Windows sandbox isolation.

**URLs:**
- https://github.com/openai/codex/pull/18443
- https://github.com/openai/codex/pull/18493

---

### 6. **#17286 - Prefix Compaction**
**Author:** rka-oai | **Status:** OPEN
Prewarms prefix compaction in background when history reaches lower threshold. Surfaces prefix replacements as "Context prefix compacted" while preserving normal compaction flow.
- **Impact:** Faster context handling; reduced latency for long conversations.

**URL:** https://github.com/openai/codex/pull/17286

---

### 7. **#18581-18584 - Remote Streamable HTTP MCP (Stack)**
**Author:** aibrahim-oai | **Status:** OPEN (4 PRs)
Full stack implementing remote streamable HTTP MCP:
- Protocol layer for executor HTTP requests
- Executor HTTP request runner
- Executor-backed RMCP HTTP client
- Wired integration for `experimental_environment = "remote"` configs
- **Impact:** Enables remote MCP execution aligned with distributed architecture.

**URLs:**
- https://github.com/openai/codex/pull/18581
- https://github.com/openai/codex/pull/18582
- https://github.com/openai/codex/pull/18583
- https://github.com/openai/codex/pull/18584

---

### 8. **#18591 - Surface Parent Thread Status**
**Author:** etraut-openai | **Status:** OPEN
Displays parent conversation status in side conversations (finished, failed, needs input, approval required) while user focuses on side thread.
- **Impact:** Better awareness of background agent state; reduces missed notifications.

**URL:** https://github.com/openai/codex/pull/18591

---

### 9. **#18190 - Add `/side` Conversations** ✅ CLOSED
Adds guarded `/side` flow for ephemeral fork conversations without interrupting main thread.
- **Impact:** Enables quick side questions without workflow disruption.

**URL:** https://github.com/openai/codex/pull/18190

---

### 10. **#18569 - Guardian Analytics Instrumentation**
**Author:** kevinlin-openai | **Status:** OPEN
Updates guardian/app analytics to use new analytics pipeline; adds focused coverage for app/list analytics.
- **Impact:** Improved observability for app behavior and debugging.

**URL:** https://github.com/openai/codex/pull/18569

---

## 5. Feature Request Trends

Analysis of 50 recent issues reveals these dominant feature directions:

| Trend | Examples | Community Demand |
|-------|----------|------------------|
| **Queue/Pending Commands** | `/compact` queue (#14588), `/review` queue (#14286), `/fast` toggle (#14081), `/goal` command (#18077) | High - 3+ PRs merged or in progress |
| **Multi-Agent/Subagent** | Hierarchical multi-agent systems (#18557), side conversations (#18190), parent thread visibility (#18591) | Growing focus; goal mode enables autonomy |
| **MCP Robustness** | Remote MCP execution (#18581-18584), process reaping (#12491, #17832), Playwright MCP fixes | Critical - multiple severe bugs |
| **Notification/Events** | User approval event notifications (#3247), capacity banner fix (#11635) | Medium - request for richer event hooks |
| **Context Management** | Worktree location config (#10599), prefix compaction (#17286), remote compact fix (#9544) | Steady - improving long-session performance |
| **IDE Extension Features** | Usage telemetry (#18512), undo/redo (#2379) | Niche but vocal requests |
| **Image Generation** | Codex-driven image generation (#8758) | Closed - feature partially addressed |

---

## 6. Developer Pain Points

### 🔴 Critical/Recurring Issues

1. **Permission Prompt Looping (#14936, #6395)**
   - Sandbox approval dialog doesn't persist; users repeatedly asked for same commands.
   - Affects Linux (bwrap) and potentially all platforms.
   - **Impact:** Breaks automated workflows.

2. **MCP Process Leaks (#12491, #17832, #18333)**
   - Zombie processes and memory bloat (37GB observed) from unreaped MCP children.
   - Affects long-running sessions; makes Codex.app unusable over time.
   - **Impact:** Memory exhaustion on developer machines.

3. **Conversation Context Confusion (#8648)**
   - Model responds to stale messages instead of latest prompt.
   - Undermines trust in agentic behavior; causes off-target code suggestions.
   - **Impact:** Requires manual re-prompting; reduced productivity.

### 🟡 UX Friction Points

4. **macOS Entitlements/Plugin Errors (#18258, #18404, #18507)**
   - Computer Use plugin reports unavailable despite correct configuration.
   - Microphone permission fails without proper entitlements.
   - **Impact:** Blocks GUI automation capabilities on macOS.

5. **Windows Sandbox Over-Permissiveness (#18443, #18493)**
   - ACL grants too-broad access to USERPROFILE directory.
   - Security and isolation concern.
   - **Impact:** Potential data exposure; now being fixed.

6. **TUI Freezes (#16688)**
   - Text UI becomes unresponsive during agent fan-out.
   - **Impact:** Poor CLI experience; users can't interrupt or monitor progress.

### 🟢 Enhancement Requests (High Volume)

7. **Command Queueing** - Users want to queue `/compact`, `/review`, `/fast`, and `/goal` commands while agent runs, without interrupting current work. (Multiple issues + PRs)

8. **Memory/Context Management** - Remote compact failures, prefix compaction improvements, worktree location control all indicate heavy-context usage outpacing current implementation.

9. **Rate Limit Handling (#18194, #17950)** - Review errors consuming limits, upgrade flows during rate limiting causing confusion.

---

**End of Digest**

*Generated from GitHub data for github.com/openai/codex on 2026-04-20*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-20

## Today's Highlights

The Gemini CLI community continues active development with focus on agent reliability and UX improvements. Notably, multiple PRs address critical fixes including extension rollback preservation, IDE trust mismatch loops, and build process issues with extension examples. The issue tracker shows sustained interest in AST-aware tooling, permission handling, and subagent coordination improvements.

---

## Releases

**No new releases in the last 24 hours.**

---

## Hot Issues

1. **[EPIC] AST-aware file reads, search, and mapping** — [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
   This epic investigates whether AST-aware tools can reduce token noise and improve navigation precision. With 5 comments, it's the most-discussed issue, indicating strong community interest in smarter codebase analysis.

2. **Gemini CLI repeatedly asks for file permissions** — [#24916](https://github.com/google-gemini/gemini-cli/issues/24916)
   Users report that "allow for all future sessions" doesn't persist, creating friction. This security/UX gap needs backend clarification on permission state handling.

3. **Shell command hangs after completion** — [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
   Commands finish but CLI shows "Awaiting user input," blocking workflow. Affects even simple commands with no interactive requirements.

4. **Model creates tmp scripts in random directories** — [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)
   When shell execution is restricted, the model generates scattered edit scripts, creating cleanup overhead before commits.

5. **Subagent reports GOAL success despite hitting MAX_TURNS** — [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) *(Priority 1)*
   The `codebase_investigator` subagent misreports termination status, hiding interruptions that users need to know about.

6. **Browser Agent ignores settings.json overrides** — [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
   Configuration for `maxTurns` and other settings are silently ignored in Browser Agent mode, breaking expected behavior.

7. **EISDIR error when workspace path is a drive root** — [#25216](https://github.com/google-gemini/gemini-cli/issues/25216)
   Running `--yolo` on certain Windows paths (e.g., `A:\`) crashes with illegal directory operation error.

8. **SSH session causes scrambled text output** — [#24202](https://github.com/google-gemini/gemini-cli/issues/24202)
   Users on SSH-to-cloudtop setups report unusable output, suggesting terminal rendering issues in remote sessions.

9. **Subagents unaware of active approval modes** — [#23582](https://github.com/google-gemini/gemini-cli/issues/23582)
   Subagents' instructions conflict with Plan Mode or Auto-Edit Mode constraints, as the Policy Engine blocks calls but subagents remain unaware.

10. **Memory routing: global vs. project separation** — [#22819](https://github.com/google-gemini/gemini-cli/issues/22819)
    The memory subagent needs clear rules for saving user preferences (global) vs. project-specific context (`.gemini/`).

---

## Key PR Progress

1. **Add hostname to footer status bar** — [#25663](https://github.com/google-gemini/gemini-cli/pull/25663) *(Open)*
   New footer item displays current system hostname, helping users distinguish multiple CLI sessions across SSH/VM/container environments.

2. **Add `/restart` slash command** — [#25657](https://github.com/google-gemini/gemini-cli/pull/25657) *(Open)*
   Gracefully restarts CLI and auto-resumes current chat session—addresses the auto-update restart UX gap tracked in #16124.

3. **Fix EISDIR error for directory-named GEMINI.md** — [#25662](https://github.com/google-gemini/gemini-cli/pull/25662) *(Open)*
   Silently skips `GEMINI.md` paths that are directories instead of throwing confusing read warnings.

4. **Add 'delete' alias for `/extensions uninstall`** — [#25660](https://github.com/google-gemini/gemini-cli/pull/25660) *(Open)*
   Reduces friction for users instinctively reaching for `delete` instead of `uninstall`.

5. **Preserve extension rollback on update failure** — [#25654](https://github.com/google-gemini/gemini-cli/pull/25654) *(Open, Priority 1)*
   Ensures installed extension is preserved for rollback, surfaces real errors, and guarantees startup profiling ends properly.

6. **Fix restart loop on IDE trust mismatch** — [#25163](https://github.com/google-gemini/gemini-cli/pull/25163) *(Open, Priority 1)*
   Prevents infinite restart cycle when workspace trust state differs between IDE and local settings.

7. **Copy extension examples to dist during build** — [#25653](https://github.com/google-gemini/gemini-cli/pull/25653) *(Open, Priority 1)*
   `gemini extensions new` was failing because example templates weren't included in the published package.

8. **Strip CI_* env vars in dev mode** — [#25649](https://github.com/google-gemini/gemini-cli/pull/25649) *(Open)*
   Prevents interactive hang when `CI_*` environment variables are present during `npm run start`.

9. **Security hardening: execFileSync over execSync** — [#24760](https://github.com/google-gemini/gemini-cli/pull/24760) *(Open)*
   Replaces shell-interpolated `execSync` with safer `execFileSync` in release patch scripts.

10. **Use tsx for VS Code 'Run Current File' debug** — [#25220](https://github.com/google-gemini/gemini-cli/pull/25220) *(Open)*
    Fixes `.ts/.tsx` debugging by using project's `tsx` dependency instead of native Node.js execution.

---

## Feature Request Trends

Based on issue analysis, the community is prioritizing:

1. **Agent Intelligence & Coordination**
   - AST-aware file operations for precise code navigation
   - Proactive memory writes and global vs. project memory routing
   - Subagent awareness of approval modes and clearer state communication

2. **Reliability & Error Handling**
   - Permission state persistence across sessions
   - Robust subagent recovery and MAX_TURNS reporting
   - PTY resource leak prevention on forced exits

3. **UI/UX Polish**
   - Better SSH and terminal rendering support
   - Scroll behavior improvements for long chats
   - Parallel tool call layout clarity

4. **Extensibility**
   - Better extension update/rollback flows
   - CLI restart and session resumption
   - ACP host input opt-in capabilities

5. **Evaluation & Testing**
   - Component-level behavioral evaluations
   - Steering eval test stability
   - Fork-aware CI pipelines

---

## Developer Pain Points

1. **Permission Fatigue**: Repeated permission prompts for the same file frustrate users who selected "allow for all future sessions."

2. **Shell Hangs**: Commands completing but CLI waiting indefinitely blocks productive workflows.

3. **Build/Extension Gaps**: `gemini extensions new` failing due to missing example templates, and extension rollback edge cases.

4. **Trust Mismatch Loops**: IDE vs. CLI trust state conflicts causing restart cycles users cannot escape.

5. **SSH Rendering**: Text scrambling in remote sessions makes the tool unusable for cloud development workflows.

6. **Tmp Script Scatter**: Model-generated temporary scripts appearing in random directories complicate clean commits.

7. **Subagent State Opacity**: Subagents reporting misleading success statuses despite hitting limits reduces trust in autonomous operations.

8. **Tool Limit Errors**: 400 errors when >128 tools are in scope suggest scope management needs smarter limiting.

9. **Streaming Layout Jank**: Tables re-rendering chunk-by-chunk breaks accessibility and visual consistency.

10. **Memory Discovery Noise**: Confusing warnings when legitimate directories named `GEMINI.md` exist in the workspace tree.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest

**Date:** 2026-04-20
**Repository:** github.com/github/copilot-cli

---

## 1. Today's Highlights

Rate limiting continues to dominate the community's attention—with multiple new issues filed about 429 handling, retry behavior, and usage display accuracy. A critical HTTP/2 race condition affecting premium request handling has gained significant traction (16 👍), while the model picker UX inconsistency with GPT-5.4's effort levels remains a top pain point. No new releases or pull requests landed in the past 24 hours, suggesting the team may be focused on triaging the surge of issues.

---

## 2. Releases

**None in the last 24 hours.**

---

## 3. Hot Issues

| # | Title | Author | 👍 | Why It Matters |
|---|-------|--------|----|----------------|
| [#2078](https://github.com/github/copilot-cli/issues/2078) | Add `/btw` command feature | mukul-AR | 26 | Highly requested quality-of-life feature matching other CLI conventions; 6 comments debating implementation |
| [#2725](https://github.com/github/copilot-cli/issues/2725) | GPT-5.4 `/model` picker hides Extra High | daideguchi | 17 | UI/runtime inconsistency where xhigh still works but isn't visible; 22 comments indicate widespread confusion |
| [#2421](https://github.com/github/copilot-cli/issues/2421) | HTTP/2 GOAWAY race condition causes cascading retry failures | sjanoe123 | 16 | Critical networking bug causing silent premium request waste; consolidates 6 related issues |
| [#2336](https://github.com/github/copilot-cli/issues/2336) | Strange rate limit message | laeubi | 6 | Vague error messaging leads to poor UX; 17 comments suggest this is a recurring theme |
| [#2769](https://github.com/github/copilot-cli/issues/2769) | Copilot Pro+ weekly rate limit not resetting | yandersr | 2 | Paying customers unable to use service; indicates potential backend sync issues |
| [#2760](https://github.com/github/copilot-cli/issues/2760) | Implement proper HTTP retry logic for 429 responses | srijan-at-qwertystars | 2 | Aggressive retry loop (20+/minute) wastes resources; requires exponential backoff |
| [#2282](https://github.com/github/copilot-cli/issues/2282) | Cannot connect to MCP servers on Windows | abhaychaubey17 | 1 | Blocks Windows MCP integration; 5 comments indicate broader impact |
| [#2827](https://github.com/github/copilot-cli/issues/2827) | Improve rate limit UI for all types of rate limit | legendarykew | 5 | Proactive visibility into usage before hitting blocks; suggests need for dashboard-style view |
| [#2818](https://github.com/github/copilot-cli/issues/2818) | Session token expired mid-task | Coekjan | 4 | Breaks long-running autopilot workflows; users return to broken state |
| [#2843](https://github.com/github/copilot-cli/issues/2843) | ACP mode rejects "auto" but rate-limit error suggests switching to it | catatafishen | 0 | Contradictory UX in ACP mode; caught and closed by team |

---

## 4. Key PR Progress

**No pull requests updated in the last 24 hours.**

The absence of PR activity suggests either a quiet development cycle or the team prioritizing issue triage and design discussions over code submission.

---

## 5. Feature Request Trends

Analyzing the 28 updated issues, the following themes emerge:

| Theme | Evidence | Community Interest |
|-------|----------|-------------------|
| **Rate Limit UX Overhaul** | #2827, #2828, #2839, #2840, #2787 | Multiple requests for proactive UI, better messaging, and subagent handling |
| **Model Picker Improvements** | #2725, #2330 | Need for inline session summaries and accurate effort level display |
| **MCP Integration Enhancements** | #2282, #2805 | Easier toggle UI for MCPs (matching skills UX) |
| **Customization** | #2830 | Theme support beyond auto/dark/light |
| **Session Stability** | #2818, #2836 | Orphaned folders and token expiration frustrate long-session users |
| **Behavioral Postures** | #2837 | Request to decouple conversational "posture" from mode selection |

---

## 6. Developer Pain Points

1. **Rate Limiting Chaos** — 429 handling is fragmented: aggressive retries without backoff, unclear error messages, and subagents that fail mid-workforce leave developers stranded.

2. **Usage Visibility Gap** — Users report seeing 0%, 33%, and negative percentages simultaneously across windows while their actual GitHub settings show 60.6%. No single source of truth.

3. **MCP Connectivity on Windows** — Winget-installed Copilot fails to connect to MCP servers, blocking integration workflows.

4. **Model Picker Inconsistency** — GPT-5.4 shows only 3 effort levels in the picker while xhigh still functions, creating a trust gap with the UI.

5. **Session Token Instability** — "Session token expired" interrupts long autopilot tasks, forcing users to babysit what should be autonomous workflows.

---

*Generated from GitHub Copilot CLI issue activity on 2026-04-20.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

**Kimi Code CLI Community Digest – 2026‑04‑20**

---

### 1. Today’s Highlights
- **No new releases** in the last 24 h; the project remains on version 1.36.0 (or later stable builds).  
- **Active development** continues: three new pull‑requests are under review, all targeting core usability improvements (sub‑agent work‑directory control, hook extensibility, and configurable compaction).  
- **Community traffic is high** – 9 fresh issues opened, ranging from critical bugs (authentication failures, infinite loops) to feature requests (voice input, push notifications). The dominant theme is **sub‑agent reliability** and **protocol robustness**.

---

### 2. Releases
*No releases published in the past 24 hours.*

---

### 3. Hot Issues (10 Noteworthy)

| # | Title (Link) | Why It Matters | Community Reaction |
|---|--------------|----------------|--------------------|
| **#1903** | [[bug] Error code: 400](https://github.com/MoonshotAI/kimi-cli/issues/1903) | LLM provider error on macOS, indicating a potential API contract mismatch or malformed request handling. | 6 comments – users report intermittent failures; likely affects all macOS clients. |
| **#1939** | [[bug] ACP protocol problem](https://github.com/MoonshotAI/kimi-cli/issues/1939) | ACP‑based invocation expects `command + args`, but the CLI splits them incorrectly, breaking custom tool pipelines. | 2 comments – reproducible on Darwin 25.3.0; high impact for power‑users relying on ACP. |
| **#1931** | [Subagent does not inherit parent’s current working directory](https://github.com/MoonshotAI/kimi-cli/issues/1931) | Sub‑agents launched from a `Shell cd` stay in the original root directory, breaking git‑worktree and multi‑project workflows. | 2 comments – directly blocks a common use‑case; already addressed by PR #1933. |
| **#1927** | [[bug] Subagent infinite loop](https://github.com/MoonshotAI/kimi-cli/issues/1927) | Sub‑agent repeatedly reads the same file > 100 times, indicating a loop‑termination bug. | 1 comment – severe performance hit; urgent for anyone using sub‑agents. |
| **#1873** | [[enhancement] Support installation without admin rights](https://github.com/MoonshotAI/kimi-cli/issues/1873) | Enterprise Windows machines often lack local admin; later versions now require it, blocking adoption. | 1 comment – request from corporate users; impacts a large潜在用户群. |
| **#1936** | [feat(subagents): complete work_dir override for Shell cwd and AGENTS.md context](https://github.com/MoonshotAI/kimi-cli/issues/1936) | Follow‑up to #1931 – the Shell tool still uses `session.work_dir` instead of the overridden `work_dir`. | 1 comment – essential for full work‑directory isolation; linked to PR #1933. |
| **#1940** | [[bug] Auth failure in VS Code / Cursor](https://github.com/MoonshotAI/kimi-cli/issues/1940) | Users of the VS Code and Cursor extensions see repeated authentication errors, possibly due to token‑refresh logic. | 0 comments – low visibility but high impact for two popular IDE integrations. |
| **#1938** | [[enhancement] Push notifications for Kimi‑CLI‑Web](https://github.com/MoonshotAI/kimi-cli/issues/1938) | Request to notify users when a long‑running Web‑UI task completes, improving async usability. | 0 comments – feature gap for mobile‑first workflows; aligns with broader “real‑time feedback” trend. |
| **#1934** | [Feature Request: Voice Input Mode](https://github.com/MoonshotAI/kimi-cli/issues/1934) | Comparative to Claude Code’s voice mode; would enable hands‑free prompting for brainstorming or accessibility. | 0 comments – low‑cost, high‑visibility enhancement; signals demand for multimodal interaction. |

*(Only 9 issues were opened in the last 24 h; all are listed above.)*

---

### 4. Key PR Progress (10 Important – *Only 3 PRs in the window*)

| PR # | Title (Link) | What It Does | Status & Impact |
|------|--------------|--------------|-----------------|
| **#1549** | [feat(plugin): add configurable compaction providers](https://github.com/MoonshotAI/kimi-cli/pull/1549) | Introduces `loop_control.compaction_model` so context‑window compaction can use a dedicated, lighter model instead of always reusing the active chat model. | Open – reduces token waste and can improve speed for long sessions. |
| **#1935** | [feat(hooks): support updatedInput for transparent command rewriting](https://github.com/MoonshotAI/kimi-cli/pull/1935) | Enables `hookSpecificOutput.updatedInput` in PreToolUse hooks, allowing tools (e.g., Shell) to rewrite commands before execution. | Open – empowers advanced users to build custom tooling pipelines. |
| **#1933** | [feat(subagents): add work_dir override for subagent dispatch](https://github.com/MoonshotAI/kimi-cli/pull/1933) | Adds optional `work_dir` parameter to the Agent tool; sub‑agents inherit or override the parent’s working directory, fixing #1931. | Open – resolves a long‑standing workflow pain point; expected to merge soon. |

*(The project saw only three PRs merged or updated in the last 24 h; all are listed.)*

---

### 5. Feature Request Trends
From the latest batch of issues, the community is clearly asking for:

1. **Sub‑Agent Reliability** – Better control over working directories, prevention of infinite loops, and graceful error handling for nested agents.  
2. **Protocol & Extension Flexibility** – Improvements to the ACP protocol, hook extensibility (e.g., command rewriting), and plugin‑level configurability.  
3. **User‑Experience Enhancements** – Push notifications for async tasks (especially the Web UI), voice input for hands‑free operation, and non‑admin installation paths for enterprise Windows environments.  
4. **IDE Integration Stability** – Auth/credential refresh fixes for VS Code and Cursor extensions, ensuring seamless usage in popular editors.

---

### 6. Developer Pain Points
- **Broken Sub‑Agent Work‑Directory Inheritance** – Leads to broken git‑worktree setups, mis‑aligned file operations, and unexpected loop behavior.  
- **Infinite Loops & Repeated File Reads** – Causes severe performance degradation and wasted API calls.  
- **Authentication Failures in Extensions** – Users of VS Code/Cursor experience repeated login prompts, disrupting flow.  
- **Lack of Non‑Admin Install Path** – Corporate users on locked‑down Windows cannot install or update the CLI, limiting adoption.  
- **Missing Real‑Time Feedback** – No push or notification mechanisms for long‑running tasks, especially in the Web UI.  
- **Protocol Edge Cases** – ACP command‑argument parsing inconsistencies create friction for developers building custom tooling.

---

**Bottom line:** The Kimi Code CLI ecosystem is vibrant but facing critical reliability issues around sub‑agent behavior and authentication in IDEs. The upcoming PRs (#1933, #1935, #1549) directly address many of these pain points. Keep an eye on the upcoming releases for fixes and the new extensibility hooks that will enable richer integrations.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-20

---

## 1. Today's Highlights

OpenCode shipped **v1.14.18** restoring native ripgrep backend for reliable file operations, while v1.14.17 addressed Docker build permissions, plugin reinstall loops, and Bedrock Opus 4.7 display settings. Community discussion centers on memory management, Azure OpenAI compatibility issues, and a major security vulnerability disclosure (#23423) regarding sandbox evasion.

---

## 2. Releases

### v1.14.18
**Core:** Restored the native ripgrep backend to ensure file search and file listing work reliably again.

**Community Contribution:**
- @ariane-emory added documentation for the `--dangerously-skip-permissions` CLI flag ([#23371](https://github.com/anomalyco/opencode/issues/23371))

### v1.14.17
**Core fixes:**
- Preserved executable permissions before Docker builds when artifacts lose exec bits
- Fixed plugins reinstalling more often than needed
- Set `display: summarized` by default for Anthropic Bedrock Opus 4.7 requests
- Improved attachment type detection from file contents for images and PDFs

---

## 3. Hot Issues

| # | Title | Author | Comments | 👍 | Why It Matters |
|---|-------|--------|----------|----|----------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** | thdxr | 60 | 36 | Central tracking for scattered memory issues; maintainers explicitly requesting heap snapshots rather than speculative solutions |
| [#6918](https://github.com/anomalyco/opencode/issues/6918) | **qwen3-coder edit tool fails** | mausch | 43 | 24 | OpenRouter's free qwen3-coder model repeatedly fails with invalid `oldString` arguments—blocks a popular free tier option |
| [#5937](https://github.com/anomalyco/opencode/issues/5937) | **Custom provider docs incorrect** | cgilly2fast | 23 | 12 | Documentation for adding OpenAI-compatible providers is misleading; blocks proper setup for self-hosted models |
| [#17994](https://github.com/anomalyco/opencode/issues/17994) | **Multi-agent orchestration in isolated workspaces** | MuggleBornPadawan | 19 | 2 | Requests native support for running "teams" of coding agents—aligns with broader industry trend toward agentic workflows |
| [#8501](https://github.com/anomalyco/opencode/issues/8501) | **Expand pasted text** | berenar | 17 | 141 | Highest engagement (141 👍); users want to view full pasted content rather than summarized `[Pasted ~1 lines]` |
| [#11532](https://github.com/anomalyco/opencode/issues/11532) | **AGENTS.md not loaded after /new** | jacekpoplawski | 16 | 10 | Disrupts workflow when starting new conversations; agents lose configured context automatically |
| [#23363](https://github.com/anomalyco/opencode/issues/23363) | **Version jump confusion (1.4.10 → 1.4.17)** | Ahmed5Emad | 12 | 2 | Version numbering appears erratic; AUR screenshot shows missing releases causing installation confusion |
| [#23315](https://github.com/anomalyco/opencode/issues/23315) | **No release for version 1.4.12** | ykari | 11 | 10 | Homebrew installs fail with 404; release artifacts missing for 1.4.12 |
| [#22444](https://github.com/anomalyco/opencode/issues/22444) | **Azure OpenAI Models not working** | mdgdeveloper | 10 | 4 | All Azure GPT-5 variants (5.3-Codex, 5.2-Codex, 5.4 Mini) fail post-update—affects enterprise users |
| [#23423](https://github.com/anomalyco/opencode/issues/23423) | **[Security] Sandbox evasion → arbitrary file read** | ruchid123123 | 2 | 0 | Critical vulnerability disclosed; inadequate permission isolation allows unauthorized file access and command execution |

---

## 4. Key PR Progress

| # | Title | Author | Type | Impact |
|---|-------|--------|------|--------|
| [#21722](https://github.com/anomalyco/opencode/pull/21722) | **Improve UX and design** | snatvb | Refactor | Major UI/UX overhaul addressing design gaps vs. competitors; closes #21395 |
| [#23335](https://github.com/anomalyco/opencode/pull/23335) | **Remove model ID blocklist from reasoning variants** | elonazoulay | Bug fix | Removes hardcoded exclusion of deepseek/glm models; closes #23334 |
| [#14307](https://github.com/anomalyco/opencode/pull/14307) | **Use parentID matching for prompt loop exit** | MakonnenMak | Bug fix | [Beta] Fixes message rendering and loop exit ordering; closes #14236 |
| [#6370](https://github.com/anomalyco/opencode/pull/6370) | **Enable primary clipboard copy for Wayland/X11** | mickalpine | Bug fix | Adds `clipboard.linux.enablePrimaryCopy` config; fixes Linux middle-click paste |
| [#23441](https://github.com/anomalyco/opencode/pull/23441) | **Clarify prompt supports multiple file references** | seffhunhun | Docs | Updates Agents documentation; closes #20356 |
| [#23439](https://github.com/anomalyco/opencode/pull/23439) | **Handle --continue in directories with no prior sessions** | rmk40 | Bug fix | Fixes `opencode -c` hanging indefinitely; closes #23437 |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | **Mobile Touch Optimization** | noahbentusi | Feature | Optimizes OpenCode App for mobile/touch while preserving desktop experience |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) | **Stop streaming markdown/code after message completes** | mocksoul | Bug fix | Derives streaming state from `message.time.completed`; fixes TUI rendering |
| [#23390](https://github.com/anomalyco/opencode/pull/23390) | **Consume Enter in DialogPrompt and DialogExportOptions** | CasualDeveloper | Bug fix | Prevents Enter key from triggering unintended actions in dialogs; closes #23389 |
| [#16200](https://github.com/anomalyco/opencode/pull/16200) | **Use package.json name for file:// plugin identity** | coleleavavitt | Bug fix | Resolves 5 related issues with local plugin identity; supersedes #8758 |

---

## 5. Feature Request Trends

**Top recurring themes from 50+ issues:**

1. **Agent Orchestration & Teams**
   - Multi-agent workspaces ([#17994](https://github.com/anomalyco/opencode/issues/17994))
   - Agent-teams timeline ([#15035](https://github.com/anomalyco/opencode/issues/15035))
   - YOLO mode for auto-approving permissions ([#11831](https://github.com/anomalyco/opencode/issues/11831))

2. **Model Provider Expansions**
   - Kimi K2.6 integration ([#22408](https://github.com/anomalyco/opencode/issues/22408))
   - Improved custom provider support
   - Azure OpenAI reliability fixes

3. **TUI/UI Enhancements**
   - Expandable pasted text ([#8501](https://github.com/anomalyco/opencode/issues/8501) — 141 👍)
   - Send button for complex prompts ([#16226](https://github.com/anomalyco/opencode/issues/16226))
   - Numpad Enter key support ([#17457](https://github.com/anomalyco/opencode/issues/17457))

4. **Workflow & Session Management**
   - `/new` should reload AGENTS.md ([#11532](https://github.com/anomalyco/opencode/issues/11532))
   - Sub-agent abort handling ([#23415](https://github.com/anomalyco/opencode/issues/23415))
   - `--continue` robustness ([#23439](https://github.com/anomalyco/opencode/pull/23439))

5. **Documentation Improvements**
   - Custom provider setup clarity ([#5937](https://github.com/anomalyco/opencode/issues/5937))
   - Agents prompt field examples ([#20356](https://github.com/anomalyco/opencode/issues/20356), addressed by [#23441](https://github.com/anomalyco/opencode/pull/23441))
   - Custom command visibility ([#18987](https://github.com/anomalyco/opencode/issues/18987))

---

## 6. Developer Pain Points

| Pain Point | Frequency | Status |
|------------|-----------|--------|
| **Memory issues** — scattered reports, no clear cause; maintainers collecting heap snapshots | High | Active tracking |
| **Azure OpenAI failures** — all GPT-5 variants broken post-update | High | Open |
| **Version/release confusion** — 1.4.x numbering confusion, missing releases causing 404s | Medium | Multiple open issues |
| **Plugin reinstall loops** — fixed in v1.14.17 | Medium | Resolved in latest release |
| **Nix build breakage** — missing prettier devDependency ([#23256](https://github.com/anomalyco/opencode/issues/23256)) | Low | Open |
| **Sandbox security concerns** — potential file read/command execution vulnerability ([#23423](https://github.com/anomalyco/opencode/issues/23423)) | Critical | Closed (likely addressing) |
| **TUI rendering issues** — streaming truncation, text vanish, page-jumping output | Medium | Multiple open issues |
| **Long context retry loops** — stale Anthropic restriction handler ([#18242](https://github.com/anomalyco/opencode/issues/18242)) | Medium | Open |
| **AGENTS.md not loading** on new sessions | Medium | Open |
| **WSL2 + Windows Terminal image paste inconsistency** | Low | Open |

---

*Digest generated from GitHub data (github.com/anomalyco/opencode) — 2026-04-20*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-20

## Today's Highlights

The Pi community saw significant activity focused on fixing critical bugs and enhancing provider compatibility. Two major API issues affecting Claude models via Google Cloud Code Assist (Antigravity) were resolved after community pressure, including a schema meta-declaration stripping fix and proper handling of `anyOf`/`const`/`$schema` properties in tool definitions. The team also addressed Windows Terminal issues with keyboard input and scroll behavior, plus made progress on session durability and token accounting improvements.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#3214 - Cloud Code Assist API returns 400 error](https://github.com/badlogic/pi-mono/issues/3214)** *(CLOSED)* — MCP tools including `jcodemunch` include `$schema` fields that cause 400 errors with Google Cloud Code Assist. Resolved by PR #3412 stripping JSON schema meta keys.

2. **[#2070 - Numpad characters not recognized](https://github.com/badlogic/pi-mono/issues/2070)** *(CLOSED)* — Printable characters from numpad (0-9, +, -, /, *) return incorrect glyphs instead of expected input on Windows.

3. **[#3344 - Aborted tool calls corrupt conversation state](https://github.com/badlogic/pi-mono/issues/3344)** *(CLOSED)* — Ctrl+C during tool calls leaves sessions permanently unusable with `tool_use` ids found without `tool_result` blocks.

4. **[#3208 - Custom Thinking Levels per Model](https://github.com/badlogic/pi-mono/issues/3208)** *(OPEN)* — Feature request to allow models to define their own thinking levels in `models.json` with 6 👍. Author wants Shift+Tab to cycle only through levels the model supports.

5. **[#3411 - Claude models via Antigravity fail on anyOf/const/$schema](https://github.com/badlogic/pi-mono/issues/3411)** *(CLOSED)* — Tool schemas containing `anyOf`, `const`, or `$schema` cause 400 errors for Claude models through Antigravity provider. Fixed via PR #3410.

6. **[#3357 - Official local LLM provider extension](https://github.com/badlogic/pi-mono/issues/3357)** *(OPEN)* — Request to fetch model list dynamically from `{baseUrl}/models` to support llama.cpp, Ollama, and LM Studio more easily.

7. **[#3051 - grep/diff exit 1 marked as error](https://github.com/badlogic/pi-mono/issues/3051)** *(CLOSED)* — Bash tool treats grep/diff non-match (exit 1) as errors, but Unix convention treats this as "no results," not failure.

8. **[#3359 - AWS GovCloud Bedrock support](https://github.com/badlogic/pi-mono/issues/3359)** *(CLOSED)* — Pi couldn't use GovCloud models due to `us-gov.` prefix in inference profile IDs and missing endpoint configuration. Both issues fixed.

9. **[#3414 - OpenRouter attribution headers](https://github.com/badlogic/pi-mono/issues/3414)** *(OPEN, IN PROGRESS)* — Adding `X-OpenRouter-Title` header to enable Pi featured in OpenRouter rankings. PR #3427 in draft, needs telemetry integration decision.

10. **[#3407 - Custom system prompt placeholders not resolved](https://github.com/badlogic/pi-mono/issues/3407)** *(OPEN)* — Custom system prompts leave `${toolsList}` and `${guidelines}` unresolved in actual provider instructions.

## Key PR Progress

1. **[#3412 - Strip JSON schema meta keys for Cloud Code Assist](https://github.com/badlogic/pi-mono/pull/3412)** *(CLOSED)* — Fixes #3214. Replaces unrecoverable PR #3215 after bot auto-close + force-push. Single commit on main.

2. **[#3410 - Sanitize tool schemas for Claude via Google Code Assist](https://github.com/badlogic/pi-mono/pull/3410)** *(CLOSED)* — Resolves `anyOf`/`const`/`$schema` failures from Antigravity provider (#3411).

3. **[#3409 - Override OAuth callback bind host](https://github.com/badlogic/pi-mono/pull/3409)** *(OPEN)* — Adds `PI_OAUTH_CALLBACK_HOST` env var to make OAuth callback host configurable across all providers.

4. **[#3427 - OpenRouter attribution headers by default](https://github.com/badlogic/pi-mono/pull/3427)** *(OPEN, DRAFT)* — Adds OpenRouter attribution headers but needs decision on telemetry opt-in behavior.

5. **[#3417 - Avoid duplicate symlinked skills in pi config](https://github.com/badlogic/pi-mono/pull/3417)** *(OPEN)* — Dedupes resolved skill entries by canonical path with tests. Closes #3405.

6. **[#3421 - Replace stale OpenRouter Llama 4 Maverick test model](https://github.com/badlogic/pi-mono/pull/3421)** *(OPEN)* — Switches test model from `llama-4-maverick` to `llama-4-scout` to fix CI failures.

7. **[#3400 - Conditionally omit maxTokens from Bedrock inferenceConfig](https://github.com/badlogic/pi-mono/pull/3400)** *(CLOSED)* — Prevents token quota waste by not sending maxTokens when caller doesn't set it.

8. **[#3402 - Pass model.baseUrl as endpoint to BedrockRuntimeClient](https://github.com/badlogic/pi-mono/pull/3402)** *(CLOSED)* — Enables custom Bedrock endpoints (VPC, proxy, custom routing).

9. **[#3403 - Support --agents-file context override](https://github.com/badlogic/pi-mono/pull/3403)** *(CLOSED)* — Allows overriding default `AGENTS.md`/`CLAUDE.md` discovery with custom filename or explicit path.

10. **[#3377 - Detect Windows pnpm global installs under .pnpm](https://github.com/badlogic/pi-mono/pull/3377)** *(CLOSED)* — Fixes pnpm detection missing `.pnpm\` store segment on Windows.

## Feature Request Trends

| Theme | Description | Evidence |
|-------|-------------|----------|
| **Provider Flexibility** | Dynamic model list fetching, configurable OAuth, multi-endpoint support | #3357, #3396, #3402 |
| **Thinking Controls** | Per-model thinking levels, customizable spinner/indicator | #3208, #3413 |
| **Session Management** | Named sessions on launch, session durability, compaction robustness | #3416, #3344, #3388, #3425 |
| **Terminal Integration** | Windows Terminal improvements, cursor behavior, resize handling | #2733, #2070, #3380, #3406 |
| **API Compatibility** | Schema handling, prompt caching alignment, provider-specific quirks | #3214, #3411, #3392, #3426 |

## Developer Pain Points

- **MCP tool schema incompatibility**: Multiple issues (#3214, #3411) with `$schema`, `anyOf`, `const` properties causing 400 errors across providers
- **Windows Terminal UX gaps**: Keyboard input (numpad, backspace, delete), scroll position on resize, cursor visibility in unfocused panes
- **Session state fragility**: Aborted tool calls corrupt state, missing `usage` after compaction causes `NaN` in accounting or crashes
- **Exit code semantics**: `grep`/`diff` exit 1 (no match) being treated as errors rather than expected results
- **Configuration inconsistencies**: XDG Base Directory non-compliance, hardcoded localhost in OAuth callbacks, missing environment variable overrides

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/manelsen/agents-radar).*