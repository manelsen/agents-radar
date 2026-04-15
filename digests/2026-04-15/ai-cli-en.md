# AI CLI Tools Community Digest 2026-04-15

> Generated: 2026-04-15 01:57 UTC | Tools covered: 8

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

# Cross-Tool AI CLI Ecosystem Comparison Report

**Report Date:** 2026-04-15
**Scope:** Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Qwen Code

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in an active maturation phase, with all five tracked tools experiencing rapid iteration cycles (2-4 releases per tool within 24-48 hours). Authentication and authorization remain the dominant pain point across the ecosystem, affecting paid and free tiers alike. Performance regressions—particularly around long-context sessions and memory management—are forcing maintainers to revisit core architectural decisions. Notably, platform parity (especially Windows support) persists as a structural challenge, while plugin/extension ecosystems are emerging as a key differentiation vector, with Claude Code and OpenCode leading in official plugin infrastructure.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Hot Issues Tracked | Community Engagement | Release Cadence |
|------|----------------|--------------------|-----------------------|-----------------|
| **Claude Code** | 2 (v2.1.107, v2.1.108) | 10+ | 🔥🔥🔥 (440+ comments on #42796) | Fast (patch-level) |
| **OpenAI Codex** | 3 (v0.121.0-alpha.8/9/10) | 10+ | 🔥🔥🔥 (537 comments on #14593) | Rapid alpha cycling |
| **Gemini CLI** | 2 (v0.38.0, v0.39.0-preview.0) | 10+ | 🔥🔥 (90+ comments on #24517) | Steady |
| **OpenCode** | 1 (v1.4.4) | 10 | 🔥🔥 (84 comments on #4283) | Stable releases |
| **Qwen Code** | 2 (preview + nightly) | 10+ | 🔥 (mixed engagement) | Preview-driven |

**Observations:**
- **OpenAI Codex** shows the most aggressive release cadence with three alpha builds in 24 hours, indicating heavy internal development.
- **Claude Code** leads in community engagement metrics, with the highest individual issue activity.
- **OpenCode** and **Qwen Code** demonstrate more measured release approaches, prioritizing stability over speed.

---

## 3. Shared Feature Directions

### Authentication & Authorization (All Tools)
- **Claude Code:** Login failures in Dev Container, Linux, macOS; clipboard-triggered crashes during auth
- **OpenAI Codex:** OAuth failures on github.dev/Codespaces
- **Gemini CLI:** 403 PERMISSION_DENIED for Google One AI Premium/Ultra subscribers (90+ comments); OAuth regressions
- **Qwen Code:** Permission persistence failures on Windows CMD

**Implication:** Cross-platform auth infrastructure is immature; teams are rebuilding OAuth and permission flows.

### Session Management & Persistence (Claude Code, OpenCode, Qwen Code)
- Session limit configurability (#48207: /resume picker cap)
- Path-independent session history (Claude Code #39148: UUID-based)
- Cross-session memory bleed fixes (Claude Code #48226)
- AGENTS.md auto-loading on new sessions (OpenCode #11532)
- Chat history management (Qwen Code #3261)

### Desktop Application Stability (Claude Code, OpenCode)
- **Claude Code:** v1.2581.0 UI cutoff, lag, CPU pegging (#48214)
- **OpenCode:** Desktop/Electron sessions won't load after v1.4.4 (#22510)

**Implication:** Desktop embedding introduces rendering and lifecycle complexity absent in TUI-first tools.

### Memory & Performance Optimization (All Tools)
- **Claude Code:** Long-context degradation (20-min turns on 1M-context sessions)
- **OpenAI Codex:** MCP process leaks (1,300+ zombies, 37 GB observed); high CPU on diff renders
- **OpenCode:** Memory Megathread consolidated (#20695); virtualized scrolling requested
- **Gemini CLI:** TypeScript compilation speed improvements (5.6x via native preview)
- **Qwen Code:** Loop detection false positives halting legitimate tasks

### Context Compaction & Token Management (Claude Code, OpenAI Codex, Gemini CLI)
- Claude Code: Prompt caching TTL controls (ENABLE_PROMPT_CACHING_1H, FORCE_PROMPT_CACHING_5M)
- Codex: Context compaction failures with `prompt_cache_retention` parameter (#17809)
- Gemini CLI: Union-find context compaction for AgentHistoryProvider

### Plugin/Extension Ecosystems (Claude Code, OpenCode, Qwen Code)
- **Claude Code:** Active official plugin releases (subagent-cleanup, notify-on-complete, usage monitor, preserve-session)
- **OpenCode:** Effect migration pattern across codebase; STT voice input via OpenAI-compatible APIs
- **Qwen Code:** Comprehensive hooks system for ACP integration (#3248); PostTurn hook event (#3266)

### Multi-Platform Parity (Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Qwen Code)
- Windows path handling (case sensitivity in Claude Code #48218; ENAMETOOLONG errors in OpenCode #22512)
- WSL/Dev Container integration failures (Claude Code #47699; Codex #10601)
- SSH compatibility (Gemini CLI #24202)

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | OpenCode | Qwen Code |
|-----------|-------------|--------------|------------|----------|-----------|
| **Primary Focus** | Enterprise DX, session management | Multi-provider extensibility | Google ecosystem integration | Desktop-first flexibility | Free-tier accessibility |
| **Target Users** | Professional developers, enterprise teams | IDE-heavy workflows (VS Code) | Google Cloud/AI Premium subscribers | Power users seeking customizability | Cost-conscious developers |
| **Technical Approach** | Plugin architecture, session portability | Rust-based CLI, ModelProvider abstraction | TypeScript-native, Vertex/GCP focus | Effect framework, Tauri/Electron | Batch operations, hooks |
| **Key Innovation** | UUID-based session history, prompt caching TTL controls | ModelProvider trait for pluggable routing | Union-find context compaction, voice input | Parallel bootstrap, Effect migration | Parallel subagent dispatch, /batch skill |
| **Monetization Model** | Anthropic API-based | OpenAI API-based | Google One/Gemini API | Self-hosted + cloud | Free tier with aggressive quota limits |
| **Windows Strategy** | Active fixes (case sensitivity) | Sandbox/auth fixes | Limited focus | Regression-prone | Permission persistence issues |

**Notable Differentiators:**
- **Claude Code** invests heavily in session portability and enterprise plugin infrastructure.
- **OpenAI Codex** prioritizes multi-backend support via the new `ModelProvider` trait abstraction.
- **Gemini CLI** leads in accessibility features (voice input with Whisper) and GCP/Vertex integration.
- **OpenCode** differentiates via custom system prompt support (highest upvoted feature: 84 👍) and RTL localization.
- **Qwen Code** uniquely focuses on parallel batch operations (`/batch` skill) and low-cost access.

---

## 5. Community Momentum & Maturity

### High Momentum
1. **Claude Code:** Largest community footprint; 440+ comment issue demonstrates deep enterprise adoption. Active plugin ecosystem signals long-term ecosystem investment.
2. **OpenAI Codex:** Highest release velocity (3 alpha builds/24h). The `ModelProvider` abstraction PR (#17873) indicates architectural maturity. Token burn issue (#14593) suggests widespread usage.

### Growing Communities
3. **Qwen Code:** High issue velocity despite quota backlash. Active feature development (parallel agents, hooks) signals healthy core team engagement.
4. **Gemini CLI:** Strong GCP integration focus; authentication issues indicate growing paid user base.

### Maturing Platforms
5. **OpenCode:** Architectural cleanup (Effect migration) suggests transition from feature-forcing to stabilization. Memory Megathread indicates responsive issue management.

### Stalled/Inactive
6. **Pi (badlogic):** No activity in 24 hours—likely maintenance mode or abandoned.
7. **GitHub Copilot CLI & Kimi Code CLI:** Data unavailable; cannot assess current state.

---

## 6. Trend Signals

### For Developers Choosing a Tool
| Signal | Interpretation |
|--------|----------------|
| **Auth regressions are systemic** | All major tools have auth issues; expect friction during onboarding and re-authentication. Choose tools with mature OAuth flows if team collaboration is critical. |
| **Long-context sessions are problematic** | 1M-token contexts degrade across platforms. For large codebase work, expect degraded performance or manual compaction. |
| **Windows support remains secondary** | Path handling, sandboxing, and permission persistence issues are pervasive. Windows-first teams should validate core workflows before committing. |
| **Plugin ecosystems are maturing** | Claude Code and OpenCode offer official plugin marketplaces; this is becoming a key extensibility differentiator. |
| **Free tiers are under pressure** | Qwen Code's proposed 1,000→100 daily request reduction signals that free-tier economics are unsustainable across the industry. Expect tighter limits across platforms. |

### For Tool Maintainers
| Signal | Interpretation |
|--------|----------------|
| **Session portability is a top request** | UUID-based session history (Claude Code #39148) and AGENTS.md auto-loading (OpenCode #11532) indicate users expect seamless project migration. |
| **Memory management requires architectural attention** | OpenCode's Memory Megathread and Codex's 37 GB process leaks indicate that the current agent architecture accumulates unbounded state. |
| **Multi-provider support is inevitable** | OpenAI Codex's ModelProvider abstraction sets a precedent; users expect to mix and match model providers. |
| **Desktop embedding adds significant complexity** | Both Claude Code and OpenCode are experiencing desktop-specific regressions. Teams should invest in desktop-specific testing infrastructure. |

---

**Report prepared for technical decision-makers and developers evaluating AI CLI tooling adoption.**

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

**Data Source:** `anthropics/skills` repository (GitHub)  
**Analysis Date:** 2026-04-15

---

## 1. Top Skills Ranking

The following PRs represent the most actively developed or discussed Skill contributions:

| Rank | PR | Skill / Topic | Summary | Status |
|------|-----|---------------|---------|--------|
| 1 | [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills evaluating Skills across five quality dimensions (Structure, Documentation, Examples, Resources, Invocation) and security patterns | **OPEN** |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | Prevents typographic issues in AI-generated docs: orphan word wrap, widow paragraphs, numbering misalignment | **OPEN** |
| 3 | [#486](https://github.com/anthropics/skills/pull/486) | `odt` (OpenDocument) | Create, fill, read, and convert ODT/ODS/OpenDocument Format files; parses ODT to HTML | **OPEN** |
| 4 | [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | Full testing stack covering Testing Trophy philosophy, unit testing (AAA pattern), React component testing with Testing Library, and E2E patterns | **OPEN** |
| 5 | [#541](https://github.com/anthropics/skills/pull/541) | `docx` tracked-change fix | Prevents document corruption when DOCX skill adds tracked changes to files with existing bookmarks (OOXML `w:id` collision fix) | **OPEN** |
| 6 | [#210](https://github.com/anthropics/skills/pull/210) | `frontend-design` improvements | Revised for clarity, actionability, and internal coherence—ensures every instruction is Claude-executable within a single conversation | **OPEN** |
| 7 | [#147](https://github.com/anthropics/skills/pull/147) | `codebase-inventory-audit` | 10-step workflow for identifying orphaned code, unused files, documentation gaps, and infrastructure bloat | **OPEN** |
| 8 | [#806](https://github.com/anthropics/skills/pull/806) | `sensory` (AppleScript) | Native macOS automation skill using `osascript` instead of screenshot-based computer use; two-tier permission model | **OPEN** |

> **Note:** All top PRs show `Comments: undefined` in the dataset, indicating discussion is occurring asynchronously or has not yet been formally tracked via GitHub reactions.

---

## 2. Community Demand Trends

Issues reveal concentrated demand in four areas:

| Trend | Relevant Issues | Description |
|-------|-----------------|-------------|
| **Quality & Governance** | [#202](https://github.com/anthropics/skills/issues/202), [#412](https://github.com/anthropics/skills/issues/412) | Skill creators want best-practice guidance; proposal for `agent-governance` skill covering policy enforcement, threat detection, and audit trails |
| **Platform Reliability** | [#62](https://github.com/anthropics/skills/issues/62) (10 comments), [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403), [#61](https://github.com/anthropics/skills/issues/61) | Users report disappearing skills, 404/500 errors on upload/delete operations—critical UX friction |
| **Skill Sharing & Discovery** | [#228](https://github.com/anthropics/skills/issues/228) (org-wide sharing), [#189](https://github.com/anthropics/skills/issues/189) (duplicate plugin content), [#16](https://github.com/anthropics/skills/issues/16) (expose Skills as MCPs) | Enterprise users need shared skill libraries; plugin ecosystem has content overlap issues |
| **Enterprise Compatibility** | [#532](https://github.com/anthropics/skills/issues/532) (API key requirement blocks SSO users), [#29](https://github.com/anthropics/skills/issues/29) (Bedrock usage) | Skill-creator tooling requires `ANTHROPIC_API_KEY`, unusable for enterprise SSO/license users |

---

## 3. High-Potential Pending Skills

These PRs show active development and may merge soon, representing significant capability additions:

| PR | Skill | Why It Matters |
|----|-------|----------------|
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | Comprehensive testing coverage (unit, component, E2E)填补了 AI 生成代码的测试验证空白 |
| [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` | Community tooling to self-validate Skill quality—reduces review burden |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | Addresses a universal pain point across all document-generation use cases |
| [#806](https://github.com/anthropics/skills/pull/806) | `sensory` | Direct AppleScript integration enables native macOS control without screenshot dependency |
| [#154](https://github.com/anthropics/skills/pull/154) | `shodh-memory` | Persistent memory across sessions solves Claude Code's context-loss problem |
| [#521](https://github.com/anthropics/skills/pull/521) | `record-knowledge` | Similar memory-persistence theme—allows Claude to retain learned workarounds |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for Quality Assurance tooling and persistent Context/Memory capabilities**—both to validate Skill quality before distribution and to overcome Claude Code's statelessness across sessions.

---

*Report generated from `anthropics/skills` public repository data. All GitHub links reference `https://github.com/anthropics/skills`.*

---

# Claude Code Community Digest — 2026-04-15

## 1. Today's Highlights

The past 24 hours brought two rapid releases — **v2.1.108** and **v2.1.107** — focused on prompt-caching configuration and UX polish. Community attention, however, is heavily drawn to the closure of the high-profile issue **#42796** (complex engineering tasks with February model updates, 440 comments, 1,825 👍) and to a cluster of **authentication/login bugs** across Dev Container, Linux, and macOS platforms. The newly released **Desktop app v1.2581.0** is also under fire, with reports of UI cutoff, extreme lag, and renderer CPU pegging immediately on launch.

---

## 2. Releases

### v2.1.108
- **Prompt caching TTL controls** — Introduced `ENABLE_PROMPT_CACHING_1H` (opt-in 1-hour TTL for API key, Bedrock, Vertex, and Foundry) and `FORCE_PROMPT_CACHING_5M` to force a 5-minute TTL. `ENABLE_PROMPT_CACHING_1H_BEDROCK` is deprecated but still honored.
- **Recap feature** — Added context-recap functionality (summary truncated in changelog).

### v2.1.107
- **Thinking hints** — Thinking hints now display sooner during long operations, improving perceived responsiveness.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|----------------|----------|
| **#42796** | [Claude Code unusable for complex engineering tasks — Feb updates](https://github.com/anthropics/claude-code/issues/42796) | Long-running, high-severity regression report with massive community engagement. Closed after 13 days and 440 comments; signals that model behavior changes significantly impacted professional developer workflows. | 🔥 440 comments · 1,825 👍 |
| **#47699** | [Cannot paste auth code in Dev Container login (v2.1.105)](https://github.com/anthropics/claude-code/issues/47699) | Blocks onboarding for containerized dev workflows. Affects VS Code + WSL combination. | 46 comments · 60 👍 |
| **#47669** | [Login with pasting auth code doesn't work on Linux](https://github.com/anthropics/claude-code/issues/47669) | Auth flow regression on Linux — users cannot complete login. | 36 comments · 47 👍 |
| **#48214** | [Desktop app v1.2581.0: UI text cutoff and extreme lag](https://github.com/anthropics/claude-code/issues/48214) | New desktop release is actively broken for multiple users — text truncated, UI unresponsive. | 4 comments · 0 👍 |
| **#47731** | [Severe latency with long-context sessions (20min+ turn times)](https://github.com/anthropics/claude-code/issues/47731) | 1M-context Opus 4.6 sessions degrade to ~20-minute turns for trivial operations — a critical performance regression for power users. | 2 comments · 1 👍 |
| **#48207** | [Configurable session limit for /resume picker](https://github.com/anthropics/claude-code/issues/48207) | Current 50-session cap frustrates power users with hundreds of `.jsonl` files. Long-standing request with prior duplicates. | 2 comments · 0 👍 |
| **#48199** | [User prompt text permanently lost when skill invocation fails (Desktop)](https://github.com/anthropics/claude-code/issues/48199) | Data loss bug — typed prompt text vanishes if a slash command fails, with no recovery. | 2 comments · 0 👍 |
| **#48226** | [Post-/compact continues referencing wrong session context (cross-session memory bleed)](https://github.com/anthropics/claude-code/issues/48226) | Memory bleed between sessions after compaction — agents act on wrong project context. | 1 comment · 0 👍 |
| **#48215** | [/ultraplan session timeout silently terminates while UI stays active](https://github.com/anthropics/claude-code/issues/48215) | Silent data loss: UI accepts input into a dead session and discards it on submit. | 1 comment · 0 👍 |
| **#25087** | [keybindings.json ignored in Claude desktop app on macOS](https://github.com/anthropics/claude-code/issues/25087) | Long-standing desktop issue — Enter/Shift+Enter keybindings are hardcoded, breaking user muscle memory. | 9 comments · 11 👍 |

---

## 4. Key PR Progress

| # | PR | Summary | Relevance |
|---|-----|---------|-----------|
| **#48151** | [fix: include cwd project dir in multi-worktree session discovery](https://github.com/anthropics/claude-code/pull/48151) | Fixes `--resume` failing to find sessions when cwd is a bare repo root with linked worktrees. Adds the cwd's own project directory to the scan set. | Session management |
| **#27395** | [feat: add completion subcommand for bash and zsh](https://github.com/anthropics/claude-code/pull/27395) | Adds shell completion scripts for bash, zsh, and fish covering all subcommands (`auth`, `mcp`, `plugin`, `install`, `doctor`, `setup-token`, `update`). | DX improvement |
| **#47830** | [feat: add subagent-cleanup plugin](https://github.com/anthropics/claude-code/pull/47830) | Official plugin to terminate orphaned subagent processes (`claude --resume`) at session start, preventing CPU/memory leaks. | Stability / resource management |
| **#47759** | [feat(plugins): add notify-on-complete](https://github.com/anthropics/claude-code/pull/47759) | Official plugin with a `Stop` hook for desktop notifications, sound playback, or text-to-speech when a task finishes. | Developer experience |
| **#47760** | [feat(plugins): add usage monitor](https://github.com/anthropics/claude-code/pull/47760) | Official usage monitor plugin with macOS SwiftBar integration, cached `/usage` fetcher, and menu bar renderer. | Cost visibility |
| **#39148** | [feat: add preserve-session plugin](https://github.com/anthropics/claude-code/pull/39148) | Assigns each project a path-independent UUID so session history survives directory renames, moves, or copies. | Session portability |
| **#47836** | [fix(plugin-dev): align hook validator with plugin hooks format](https://github.com/anthropics/claude-code/pull/47836) | Updates `validate-hook-schema.sh` to support the plugin `hooks.json` wrapper format and makes `matcher` optional during validation. | Plugin ecosystem |
| **#47902** | [fix: add -exist flag to ipset add commands](https://github.com/anthropics/claude-code/pull/47902) | Prevents duplicate-entry errors on DevContainer firewall restarts. | DevContainer stability |
| **#48218** | [fix: claude -r fails on Windows due to case-sensitive path comparison](https://github.com/anthropics/claude-code/pull/48218) | Fixes `-r` resume failing on Windows because the CLI performs case-sensitive path comparison on a case-insensitive filesystem. | Windows parity |
| **#23853** | [fix: Replace deprecated npm install with native installer in Dockerfile](https://github.com/anthropics/claude-code/pull/23853) | Updates the devcontainer Dockerfile to use the native installer (`curl -fsSL https://claude.ai/install.sh | bash`) instead of deprecated `npm install -g`. | Dev setup hygiene |

---

## 5. Feature Request Trends

Cross-referencing open issues and PRs reveals these dominant themes:

1. **Desktop app stability & UX** — Rendering bugs, keybinding customization, and performance on macOS (v1.2581.0 is a current flashpoint).
2. **Session management** — More configurable resume picker limits, path-independent session history (UUID-based), and cross-session memory bleed fixes.
3. **Cowork improvements** — Permission persistence, launch crashes on Apple Silicon, and folder context removal.
4. **Platform parity** — Windows path handling (case sensitivity), WSL/Dev Container auth flows, and Linux login reliability.
5. **Plugin ecosystem expansion** — Active growth in official plugins: subagent cleanup, usage monitoring, notifications, and session preservation.
6. **Auth & permissions** — Re-authentication friction in Remote Control, "Always allow" not persisting, and clipboard-triggered crashes.

---

## 6. Developer Pain Points

- **Authentication regressions** are blocking users across multiple platforms (Dev Container, Linux, macOS) — the login flow feels fragile and platform-dependent.
- **Desktop app v1.2581.0** shipped with serious regressions: text cutoff, lag, CPU pegging, and clipboard crashes. Developers on macOS are most affected.
- **Long-context performance** is deteriorating — 20-minute turns for trivial file writes on 1M-context sessions make large refactors impractical.
- **Cross-session memory bleed** after `/compact` means agents act on the wrong project context, a high-risk data-integrity issue.
- **"/resume" picker cap** at 50 sessions forces power users to manually locate older `.jsonl` files, disrupting workflow continuity.
- **Silent session timeouts** in web/ultraplan discard user input with no warning — a data-loss risk during complex planning.

---

*Data sourced from `github.com/anthropics/claude-code` — 2026-04-15*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-15

## Today's Highlights

The Codex community is grappling with a **critical rate-limit issue**—Issue #14593 has amassed 537 comments as users report rapidly burning through tokens, indicating possible inefficiencies or backend misconfigurations. On the platform side, **three new Rust alpha releases (v0.121.0-alpha.8/9/10)** landed within 24 hours, while **MCP process-leak regressions** and **high resource consumption during diff/code-review operations** remain unresolved across macOS, Windows, and Linux.

---

## Releases

| Version | Summary |
|---------|---------|
| `rust-v0.121.0-alpha.8` | Alpha pre-release; no changelog provided |
| `rust-v0.121.0-alpha.9` | Alpha pre-release; no changelog provided |
| `rust-v0.121.0-alpha.10` | Alpha pre-release; no changelog provided |

Three rapid successive alpha builds suggest active internal development; no breaking-change notes are available yet. Track at: [openai/codex/releases](https://github.com/openai/codex/releases)

---

## Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **#14593** | Burning tokens very fast | Reports widespread token consumption far exceeding expected usage; likely impacts all subscription tiers. | 537 comments, 213 👍 — highest engagement by far |
| **#3567** | Undo does not work (Windows) | Breaks basic edit-reversal workflow in VS Code extension on Windows. | 55 comments, 28 👍; marked CLOSED |
| **#10601** | Sandbox setup error on Windows | WSL/sandbox integration fails on Windows, blocking agent-mode users. | 44 comments, 10 👍 |
| **#17809** | Context compaction fails with unknown parameter `prompt_cache_retention` | Users cannot compact context; API rejects the `prompt_cache_retention` parameter. | 37 comments, 56 👍; marked CLOSED |
| **#11981** | Codex app 100% CPU with single agent | App becomes unresponsive on macOS even under minimal load. | 36 comments, 8 👍 |
| **#15330** | High CPU when diff renders | Diff view in Codex app causes CPU spikes, likely UI-rendering issue. | 16 comments, 9 👍 |
| **#6403** | OAuth fails on github.dev / Codespaces | Redirect-to-localhost blocks OAuth for cloud-based VS Code users. | 12 comments, 6 👍 |
| **#12491** | MCP child processes not reaped — 1300+ zombies, 37 GB leak | Serious resource leak: orphaned MCP processes accumulate indefinitely. | 12 comments, 3 👍 |
| **#16850** | VS Code extension spikes CPU on diffs after edits | Extension causes heating/laggy machine after Codex auto-edits files. | 11 comments, 2 👍 |
| **#17624** | Review tab stuck "Loading diff" on Windows | Literal `/F:/...` path passed to `git diff`, breaking Windows code review. | 10 comments, 9 👍 |

---

## Key PR Progress

| PR | Title | Significance |
|----|-------|--------------|
| **#17873** | Add runtime model provider abstraction | Introduces `ModelProvider` trait for pluggable model routing; foundation for multi-provider support. |
| **#17872** | Disable hooks in guardian review sessions | Ensures Guardian review sessions ignore synthetic hook prompts for cleaner audit flows. |
| **#17871** | Add websocket capability token hash support | Allows precomputed SHA-256 digests for websocket auth; improves security tooling integration. |
| **#17870** | Fix exec() contract cleanup | Removes dead arguments from `ExecParams`; clarifies which fields are unused and why. |
| **#17859** | Remove dead seatbelt helper and update tests | Eliminates a deprecated sandbox helper; ensures sandbox tests stay meaningful. |
| **#17866** | Refactor auth providers to mutate request headers | Centralizes `AuthProvider::add_auth_headers`; aligns HTTP, websocket, and file-upload auth paths. |
| **#17693–#17696** | Guardian review analytics (stacked) | Adds TTFT, truncation, thread/token metadata, and schema polishing for analytics pipeline. |
| **#17305** | Add sorting/backwardsCursor to thread/list | Enables bidirectional pagination on `thread/list`; improves UI load performance. |
| **#17425** | Auto-upgrade configured marketplaces | Auto-upgrades Git marketplaces in `config.toml`; skips unchanged repos via `last_revision`. |
| **#17868** | Wrap delegated input text | Wraps handoff text in XML envelope before routing; ensures well-formed XML in user turns. |

---

## Feature Request Trends

1. **Platform parity & stability** — Windows-specific bugs dominate: sandbox ACLs, WSL agent mode, literal path parsing in Review tab, and OAuth redirects. Cross-platform consistency is a top ask.
2. **Multi-window support** — Strong demand for independent project windows in the Codex desktop app (#12773, 16 👍).
3. **Customizable TUI status line** — Requests for Claude Code–style status bar showing token usage, model name, git branch, etc. (#17827).
4. **Session persistence & resumption** — Multiple issues around failing `codex resume` and thread archiving (#17814, #17867).
5. **Model/provider extensibility** — The new `ModelProvider` abstraction (#17873) aligns with community interest in plugging in custom model backends.

---

## Developer Pain Points

| Theme | Frequency | Impact |
|-------|-----------|--------|
| **Rate-limit / token burn** | 1 major issue, 537 comments | All tiers affected; billing anxiety high |
| **CPU/GPU resource consumption** | 4+ issues (#11981, #15330, #16857, #16850) | UX degradation, battery drain, overheating |
| **MCP process leaks** | 2 open regressions (#12491, #17832) | Memory bloat; 1300+ zombies, 37 GB observed |
| **Context compaction failures** | 2 closed issues (#17809, #17814) | Blocked workflow for session-heavy users |
| **Windows sandbox & auth** | 3 issues (#10601, #14585, #6403) | Blocks Windows developers from core features |
| **Diff/Review UI regressions** | 3 issues (#15330, #16850, #17624) | Core code-review loop disrupted |
| **OAuth on cloud IDEs** | 1 issue (#6403) | Codespaces/GitHub.dev users locked out |

---

*Digest generated from GitHub data (github.com/openai/codex) for 2026-04-15. All issue and PR links reference the upstream repository.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-15

## Today's Highlights

The Gemini CLI project continues active development with two recent releases (v0.38.0 and v0.39.0-preview.0) addressing slash command UX and policy infrastructure. Critical authentication issues persist—particularly **403 PERMISSION_DENIED errors affecting Google One AI Premium and Ultra subscribers**—generating significant community engagement with 90+ comments on the flagship issue. Platform improvements include OpenSSL 3.x retry handling, voice input architecture, and faster TypeScript compilation via native preview.

---

## Releases

### [v0.39.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.39.0-preview.0)
- **Policy refactor**: Simplified policy priorities and consolidated read-only rules (`@ruomengz`, PR #24849)
- **Test infrastructure**: Added memory usage integration test harness (`@sripasg`, PR #24876)

### [v0.38.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.38.0)
- **Slash command fix**: Refresh command list after `/skills` reload (`@NTaylorMullen`, PR #24454)
- **Documentation**: Updated README links (`@g-samroberts`, PR #22759)

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|---------------------|
| [#24517](https://github.com/google-gemini/gemini-cli/issues/24517) | **403 PERMISSION_DENIED for Google One AI Premium subscribers** — subscription tier detected correctly but API blocked | Blocks paying customers from using the product; suggests billing/permissions sync issue | **90 comments**, 45 👍 — highest engagement; P1 priority |
| [#25323](https://github.com/google-gemini/gemini-cli/issues/25323) | **RipGrep download causes 2+ minute startup delays** when github access fails | Severely degrades onboarding; should fail fast instead | 6 comments, fresh (Apr 13) |
| [#25189](https://github.com/google-gemini/gemini-cli/issues/25189) | **oauth-personal returns 403** — unexpected `cloudaicompanionProject` for personal AI Pro accounts | Security/authentication regression | 5 comments, 3 👍 |
| [#25425](https://github.com/google-gemini/gemini-cli/issues/25425) | **oauth-personal broke on Apr 10** — 403 PERMISSION_DENIED suddenly | Appears related to backend change; affecting Ubuntu/Windows | Just filed (Apr 15), escalating |
| [#24533](https://github.com/google-gemini/gemini-cli/issues/24533) | **403 for Google One AI Ultra** (duplicate of #24517) | Confirms pattern across subscription tiers | Closed as duplicate |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | **Permission prompts repeatedly re-asked for same files** | UX friction; "allow for all future" not honored | 3 comments |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell hangs with "Waiting input" after command completes** | Workflow blocker; reproducible with simple commands | 2 comments |
| [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) | **EISDIR error on Windows temp path (A:\\)** | Path handling edge case on certain drive configurations | 1 comment |
| [#24915](https://github.com/google-gemini/gemini-cli/issues/24915) | **Thick black border on prompt bar** | Visual regression in terminal UI | 1 comment |
| [#24202](https://github.com/google-gemini/gemini-cli/issues/24202) | **SSH text scrambled on Windows→Linux** | SSH environment compatibility issue | 1 comment |

---

## Key PR Progress

| # | PR | Significance |
|---|-----|--------------|
| [#18499](https://github.com/google-gemini/gemini-cli/pull/18499) | **Voice input with Whisper integration** — pluggable backend (Gemini zero-install + local Whisper) | Major accessibility/UX feature; long-standing request |
| [#25187](https://github.com/google-gemini/gemini-cli/pull/25187) | **OpenSSL 3.x retry fix** — handles `ERR_SSL_SSL/TLS_ALERT_BAD_RECORD_MAC` during streaming | Stability fix for TLS edge cases; prevents mid-stream stalls |
| [#25240](https://github.com/google-gemini/gemini-cli/pull/25240) | **TypeScript native-preview migration** — ~5.6x faster type-checking | Developer experience win; significant CI/local iteration speedup |
| [#24736](https://github.com/google-gemini/gemini-cli/pull/24736) | **Union-find context compaction** for AgentHistoryProvider | Advanced history management; reduces token waste |
| [#25343](https://github.com/google-gemini/gemini-cli/pull/25343) | **Opt-in telemetry traces flag** — decouples heavy tracing from baseline telemetry | Enterprise observability without performance penalty |
| [#24664](https://github.com/google-gemini/gemini-cli/pull/24664) | **ACP host input requests** — enables ACP clients to handle `ask_user`/`exit_plan_mode` | Extensibility for ACP integration scenarios |
| [#25421](https://github.com/google-gemini/gemini-cli/pull/25421) | **Skill-creator integration into skill extraction agent** | Standardizes SKILL.md authoring; reduces duplicate specs |
| [#25090](https://github.com/google-gemini/gemini-cli/pull/25090) | **.mdx support for get-internal-docs tool** | Expands documentation coverage to MDX files |
| [#24455](https://github.com/google-gemini/gemini-cli/pull/24455) | **Fix GOOGLE_CLOUD_PROJECT override in Cloud Shell** when using Vertex AI | Corrects Cloud Shell authentication behavior |
| [#25072](https://github.com/google-gemini/gemini-cli/pull/25072) | **Favorite models and model cycling** via keyboard shortcuts | User preference persistence; faster model switching |

---

## Feature Request Trends

Analysis of 50 tracked issues reveals dominant feature themes:

1. **Authentication & Authorization** — Multiple 403/permission errors suggest need for clearer error messaging, better billing sync validation, and OAuth fallback handling.
2. **Memory & Context Management** — Active development in global vs. project memory routing, proactive memory writes, and context compaction strategies.
3. **Agent Intelligence** — Subagent awareness of approval modes, AST-aware file searches, destructive command warnings, and tool scoping for >128 tools.
4. **Terminal UI/UX** — Streaming table rendering fixes, SSH compatibility, scroll performance, and keyboard shortcut expansion.
5. **Voice & Multimodal Input** — Native voice input with pluggable backend remains a highly anticipated feature.
6. **Enterprise Observability** — Explicit trace flags and telemetry granularity for production monitoring.

---

## Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **403 PERMISSION_DENIED** on valid subscriptions | Recurring (multiple issues, 90+ comments) | Blocks paying users entirely |
| **RipGrep download timeouts** causing 2+ min startup | High (issue #25323) | Poor first-run experience |
| **Permission prompts not persisting** ("allow for all" ignored) | Medium | Repeated friction |
| **Shell hangs** with "Awaiting input" after execution | Medium | Workflow interruption |
| **OAuth-personal breakage** (Apr 10 regression) | High | Breaks personal account users |
| **SSH text scrambling** on cloudtop | Medium | Blocks remote workflow users |
| **TypeScript compilation speed** | High (mitigated by native preview migration) | Slow CI/local iteration |

---

*Digest generated from GitHub data for google-gemini/gemini-cli • 2026-04-15*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-15

---

## Today's Highlights

**v1.4.4** shipped with critical fixes restoring instance/logger context during prompt runs, keeping GitHub Copilot compaction requests valid, and persisting MCP OAuth connections. However, the update introduced a **regression affecting Desktop/Electron sessions** that won't load (Issue #22510), alongside a Windows-specific bug causing `ENAMETOOLONG` errors when sending messages. The team has opened a **Memory Megathread** (#20695) to systematically tackle reported memory issues, with active work on parallelized bootstrap and service refactoring.

---

## Releases

### v1.4.4 (April 15, 2026)
**Core Fixes:**
- Restored instance and logger context during prompt runs — prompt-time tools and logging now behave correctly.
- Kept GitHub Copilot compaction requests valid.
- Restored the flat reply shape for question API responses.
- Persisted MCP OAuth connections that finish immediately to support proper authentication flow.

> ⚠️ **Note:** This version introduced a Desktop/Electron regression — see Hot Issue #5 below.

---

## Hot Issues

### 1. Copy To Clipboard Not Working — 84 comments, 65 👍
**Issue [#4283](https://github.com/anomalyco/opencode/issues/4283)** | Author: maheshmuttintidev  
Text selection in responses fails to copy to the clipboard across all platforms. This is a **critical UX regression** impacting daily workflows. The high comment count signals it affects many users; a fix is urgently needed.

---

### 2. Always Stuck at "Preparing Write..." — 55 comments, 23 👍
**Issue [#11112](https://github.com/anomalyco/opencode/issues/11112)** | Author: yinzhou-jc  
Prometheus (write tool) repeatedly stalls at "Preparing write..." and aborts. The user reports forced retries, indicating a **tool execution deadlock**. Affects users with oh-my-opencode plugins.

---

### 3. Memory Megathread — 47 comments, 30 👍
**Issue [#20695](https://github.com/anomalyco/opencode/issues/20695)** | Author: thdxr  
The team consolidated scattered memory reports into a central tracking issue. They're actively collecting heap snapshots and explicitly asked the community **not to suggest LLM-generated solutions** — they need real diagnostic data. This is the **top priority performance initiative**.

---

### 4. Custom System Prompts Feature — 28 comments, 84 👍
**Issue [#7101](https://github.com/anomalyco/opencode/issues/7101)** | Author: dan-and  
Strong community demand for user-defined system prompts at global, project, or custom directory levels. With 84 👍, this is the **most upvoted feature request** currently open. Implementation would enable per-project agent behaviors.

---

### 5. Desktop Sessions Won't Load After v1.4.4 — 25 comments, 12 👍
**Issue [#22510](https://github.com/anomalyco/opencode/issues/22510)** | Author: diegoquiroz  
This is a **regression bug** introduced by the latest release. Both Tauri and Electron builds fail to load sessions (CLI is unaffected). Reported within hours of v1.4.4 release — likely a side effect of core changes.

---

### 6. GPT 5.4 Azure Reasoning Error — 21 comments, 3 👍
**Issue [#20698](https://github.com/anomalyco/opencode/issues/20698)** | Author: DanielusG  
After 1-2 tool calls, GPT 5.4 via Azure returns `"Item ... of type 'reasoning' was provided without its required following item."` Model compatibility issue affecting Azure Cognitive Services users.

---

### 7. Copy Mode for OpenCode — 16 comments, 65 👍
**Issue [#2755](https://github.com/anomalyco/opencode/issues/2755)** | Author: thuanpham582002  
Users request vim/tmux-like copy mode for precise text selection in chat messages, code blocks, and viewport content. Current `ctrl+x y` is insufficient. With 65 👍, this is a **high-priority UX enhancement**.

---

### 8. AGENTS.md Not Loaded After /new — 14 comments, 9 👍
**Issue [#11532](https://github.com/anomalyco/opencode/issues/11532)** | Author: jacekpoplawski  
The `/new` command clears conversation context but fails to auto-load `AGENTS.md`, requiring manual re-reading. This breaks expected workflow for project-specific agent rules.

---

### 9. Can't Send Messages (Windows) — 7 comments, 0 👍
**Issue [#22512](https://github.com/anomalyco/opencode/issues/22512)** | Author: jasonfirkus  
Any message attempt causes screen glitching with `ENAMETOOLONG` error. **Critical Windows blocker** reported today — likely path/encoding issue introduced in recent changes.

---

### 10. Virtualized Scrolling + Paginated Loading — 7 comments, 3 👍
**Issue [#6548](https://github.com/anomalyco/opencode/issues/6548)** | Author: CasualDeveloper  
Loading thousands of messages is slow and memory-heavy. Proposed solution: paginated fetch + virtualized scrolling. Directly addresses the memory concerns raised in the megathread.

---

## Key PR Progress

### 1. Speech-to-Text Voice Input — PR [#22521](https://github.com/anomalyco/opencode/pull/22521)
**Author:** ncylich | **Status:** OPEN  
Adds STT support via any OpenAI-compatible `/v1/audio/transcriptions` API (Whisper, Groq, Deepgram, local whisper.cpp). Web UI gets a mic button; TUI gets a `/record` command. **Expands accessibility and hands-free usage.**

---

### 2. Hebrew Locale & RTL Support — PR [#22519](https://github.com/anomalyco/opencode/pull/22519)
**Author:** MusiCode1 | **Status:** OPEN  
Implements Hebrew (`he`) locale with 946 translation keys across app and UI packages. Closes #21676. **First RTL language support** — foundation for Arabic and other RTL languages.

---

### 3. Mobile Touch Optimization — PR [#18767](https://github.com/anomalyco/opencode/pull/18767)
**Author:** noahbentusi | **Status:** OPEN  
Optimizes the OpenCode App for mobile/touch devices while preserving desktop experience. **Addresses the long-requested mobile version** (#10288) in stages.

---

### 4. Parallel Bootstrap — PR [#22514](https://github.com/anomalyco/opencode/pull/22514)
**Author:** Brendonovich | **Status:** OPEN | **Label:** [beta]  
With all services migrated to Effect using `InstanceState`, initialization no longer requires strict ordering — services wait for dependencies dynamically. **Reduces startup blocking and improves performance.**

---

### 5. Sync Routes & Workspace Refactor — PR [#22518](https://github.com/anomalyco/opencode/pull/22518)
**Author:** jlongster | **Status:** OPEN  
Adds instance-level sync APIs for event history and replay (`/sync/replay` route, history lookup). Refactors workspace routing/proxying for remote workspace support. **Enables real production sync use cases.**

---

### 6. Native Request Serialization (Binary Lock) — PR [#22516](https://github.com/anomalyco/opencode/pull/22516)
**Author:** uelkerd | **Status:** CLOSED  
Permanently fixes "Compaction" issues for local LLMs by implementing native request serialization with binary locking. Also optimizes compaction defaults. **Improves local model compatibility.**

---

### 7. Preserve Prompt Input Across Unmount — PR [#22508](https://github.com/anomalyco/opencode/pull/22508)
**Author:** thdxr | **Status:** OPEN | **Label:** [Vouched]  
Fixes #21120 — prompt text was lost when permission modals appeared because components fully unmounted. Added module-level stash to preserve text and cursor position. **Fixes a UX pain point reported frequently.**

---

### 8. Retry 5xx Server Errors — PR [#22511](https://github.com/anomalyco/opencode/pull/22511)
**Author:** kitlangton | **Status:** OPEN | **Label:** [contributor, Vouched]  
Treats 5xx status codes as retryable even when provider SDK doesn't set `isRetryable: true`. Most SDKs (Anthropic, OpenAI) don't mark 500/502/503 as retryable, causing terminal failures. **Improves resilience.**

---

### 9. Remove makeRuntime Facades (Permission Service) — PR [#22522](https://github.com/anomalyco/opencode/pull/22522)
**Author:** kitlangton | **Status:** OPEN | **Label:** [contributor, Vouched]  
Refactors `Permission.Service` to yield directly from Effect context, removing the `makeRuntime` facade. Part of ongoing **architectural cleanup** for consistency and maintainability.

---

### 10. Remove makeRuntime from File/Ripgrep — PR [#22513](https://github.com/anomalyco/opencode/pull/22513)
**Author:** kitlangton | **Status:** OPEN | **Label:** [contributor, Vouched]  
Migrates `file/index.ts` and `file/ripgrep.ts` callers to `AppRuntime.runPromise` with `Service.use`. Deletes legacy facade exports. Continues the **Effect migration pattern** across the codebase.

---

## Feature Request Trends

Analysis of 50+ issues reveals these dominant feature directions:

| Theme | Frequency | Top Issues |
|-------|-----------|------------|
| **UX Enhancements** | High | Copy mode (#2755), scroll optimization (#6257), session dialog improvements |
| **Configuration Flexibility** | High | Custom system prompts (#7101), reload config without restart (#6815), usage tracking (#9281) |
| **Performance & Scalability** | High | Virtualized scrolling (#6548), memory optimization (#20695), parallel bootstrap |
| **Platform Expansion** | Medium | Mobile version (#10288), RTL support (#14257), mobile touch optimization |
| **AI/Model Improvements** | Medium | Vision input support (#22469), variant configuration (#7138) |
| **Accessibility** | Medium | Speech-to-text (#22521), Hebrew/l10n (#22519) |

---

## Developer Pain Points

### Top Frustrations (recurring across multiple issues):

1. **Clipboard Failures** (#4283)  
   Text selection/copy is broken across platforms — affects daily usability.

2. **Tool Execution Hangs** (#11112, #20902)  
   Write tool and bash tool hang on background processes, blocking workflows.

3. **Memory Issues** (#20695)  
   Scattered reports of memory bloat; team consolidating diagnostic efforts.

4. **Session/Context Loss** (#11532, #22479)  
   AGENTS.md not reloaded on `/new`; user input lost on permission prompts.

5. **Encoding Problems** (#7933)  
   EUC-KR source files produce corrupted UTF-8 output — international developer blocker.

6. **Permission/Skill Rule Gaps** (#21793)  
   `permission.skill` pattern rules not fully enforced — security configuration issue.

7. **Windows-Specific Bugs** (#22512, #15124, #18503)  
   `ENAMETOOLONG` errors, code signature issues, and SIGKILL crashes on Windows/macOS.

8. **Config Precedence Confusion** (#22020)  
   Global `AGENTS.md` silently ignored when project-level file exists — documented behavior but unintuitive.

---

*Digest generated from GitHub data for anomalyco/opencode on 2026-04-15.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-15

---

## 1. Today's Highlights

The v0.14.4 release cycle continues with preview and nightly builds introducing three key features: `/context` usage telemetry in SDK and non-interactive CLI modes, a startup performance profiler, and a new `fork` sub capability. The community is actively debating a proposed policy shift that would slash free-tier daily requests from 1,000 to 100, driving significant discussion across 50 newly active issues. On the development side, parallel subagent execution for the `/review` skill is being hardened, and a comprehensive hooks system for ACP integration is under review.

---

## 2. Releases

| Version | Summary |
|---------|---------|
| **v0.14.4-preview.1** | Exposes `/context` usage data via SDK API and non-interactive CLI; adds startup performance profiler (`@doudouOUC`); implements core `fork` sub command |
| **v0.14.4-nightly.20260415.9f9ffbf95** | Identical changes to preview, confirming stabilization trajectory for v0.14.4 |

---

## 3. Hot Issues

| # | Title | Key Points |
|---|-------|-----------|
| **#1742** | **[429 Free allocated quota exceeded](https://github.com/QwenLM/qwen-code/issues/1742)** | Reports of free-tier users hitting 429 errors despite apparent quota availability; 18 comments indicate this is widespread and blocking work. |
| **#3203** | **[Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)** | Proposed policy change to reduce free tier from 1,000 → 100 requests/day effective immediately, phasing out the free entry point by April 20, 2026; 17 comments with mixed reaction. |
| **#2426** | **[免费额度一少再少](https://github.com/QwenLM/qwen-code/issues/2426)** | Chinese users reporting free quota has shrunk from 1,000 to ~300 requests; community frustration about transparency. |
| **#289** | **[Support creating single executable application (SEA)](https://github.com/QwenLM/qwen-code/issues/289)** | Feature request to bundle app and dependencies into a standalone executable for simplified distribution; 6 comments supporting the use case. |
| **#3263** | **[关于qwen code免费额度取消的替代方案](https://github.com/QwenLM/qwen-code/issues/3263)** | Users sharing alternative tools (GPT-5.4, GLM-5.1 free tiers) as they seek workarounds for quota limits. |
| **#3267** | **[Requests limits overview](https://github.com/QwenLM/qwen-code/issues/3267)** | User reports hitting limit without completing a single task; requests better visibility into usage and limits. |
| **#350** | **[API Error: 400 Range of input length should be [1, 1048576], A potential loop was detected](https://github.com/QwenLM/qwen-code/issues/350)** | Loop detection halting requests; users experiencing repetitive tool calls; 5 👍 indicates this is a high-impact bug. |
| **#2669** | **[Permission options not persisting in Windows 11 CMD](https://github.com/QwenLM/qwen-code/issues/2669)** | "Always allow in this project" and "Always allow for this user" options do not persist, re-prompting on every run on Windows CMD. |
| **#259** | **[Only thinking, never executes tasks](https://github.com/QwenLM/qwen-code/issues/259)** | Connected to Ollama local models (qwen3:14b); model enters extended think loop but never produces output. |
| **#3273** | **[Chat messages displayed in wrong order](https://github.com/QwenLM/qwen-code/issues/3273)** | New bug: responses appear above previous answers instead of below, breaking conversation flow. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| **#3266** | **[feat: add PostTurn hook event](https://github.com/QwenLM/qwen-code/pull/3266)** | New `PostTurn` hook fires at every model turn boundary (tool_call or end of response); allows hook scripts to inject messages with custom metadata. Closes #3265. |
| **#3239** | **[feat(agent): run batched subagents in parallel](https://github.com/QwenLM/qwen-code/pull/3239)** | `/review` skill now launches its 5 review agents in parallel via runtime guarantees rather than relying on model multi-tool-call behavior. |
| **#3276** | **[fix(skill/review): enforce parallel agent dispatch for weaker models](https://github.com/QwenLM/qwen-code/pull/3276)** | Strengthens `/review` dispatch instructions so qwen3.6-plus reliably launches all agents in a single turn. |
| **#3251** | **[fix(core): allow thought-only responses in GeminiChat stream validation](https://github.com/QwenLM/qwen-code/pull/3251)** | Resolves "Model stream ended with empty response text" errors for thinking/reasoning models (qwen3-thinking, qwen-plus-thinking). |
| **#3246** | **[fix(core): detect rate-limit errors from streamed SSE frames](https://github.com/QwenLM/qwen-code/pull/3246)** | Properly handles `Throttling.AllocationQuota` 429 errors from DashScope during streamed responses. |
| **#3212** | **[fix(core): respect custom Gemini baseUrl](https://github.com/QwenLM/qwen-code/pull/3212)** | Custom `baseUrl` in `modelProviders.gemini` settings is now correctly passed to the Gemini SDK. |
| **#3261** | **[feat(cli): add /history command](https://github.com/QwenLM/qwen-code/pull/3261)** | New built-in command for project-scoped saved chat history management, exposing session deletion capability. |
| **#3079** | **[feat(skills): add /batch skill for parallel batch operations](https://github.com/QwenLM/qwen-code/pull/3079)** | New `/batch` skill for orchestrating large-scale parallel file changes with glob pattern discovery, worker agents, and `--dry-run` support. |
| **#2990** | **[feat(hooks): add prompt hook type for LLM-based condition evaluation](https://github.com/QwenLM/qwen-code/pull/2990)** | New prompt hook using LLM to evaluate conditions and return structured JSON for security checks and code quality validation. |
| **#3248** | **[feat(acp): add complete hooks support for ACP integration](https://github.com/QwenLM/qwen-code/pull/3248)** | Aligns ACP integration with core path implementation: lifecycle, prompt interception, tool execution, and stop hooks. |

---

## 5. Feature Request Trends

1. **Free Tier & Quota Transparency** — Over 30% of recent issues relate to request limits, quota visibility, and pricing policy changes. The community demands clearer documentation and more generous limits.

2. **Session Management** — Multiple requests for naming/indexing conversations (#3234), chat history management, and conversation retrieval without UUID-based navigation.

3. **Parallel Execution** — Strong interest in batch operations (#3079), parallel subagent dispatch (#3239/#3276), and `/batch` skill capabilities.

4. **Hooks & Extensibility** — Growing demand for customization hooks (#3266, #2990, #3248) to support security checks, code quality validation, and ACP integration.

5. **Standalone Executable Distribution** — Feature request #289 highlights need for SEA (Single Executable Application) support to simplify end-user deployment.

6. **Thinking Model Improvements** — Issues around thinking model behavior (#259), per-request token limits (#418), and configuration flexibility for thinking model detection (#202).

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|-----------|-----------|--------|
| **Quota exhaustion errors** | Very High | Free-tier users blocked despite advertised limits; proposed reduction to 100/day causing community backlash. |
| **Permission persistence on Windows** | High | "Always allow" options do not stick on Windows CMD; repeated prompts degrade UX. |
| **Loop detection false positives** | Medium | Legitimate long-running tasks are halted by loop detection; particularly problematic for review/analysis tasks. |
| **VSCode companion UX issues** | Medium | Auto-scroll bounce, session tab bar overflow, and extra blank lines below status bar. |
| **MCP client connection limits** | Medium | Production multi-node infrastructure limited to 2 MCP connections (critical for #3277 reporter). |
| **Custom baseUrl for model providers** | Medium | Gemini custom baseUrl ignored in settings; workaround issues for OpenAI-compatible endpoints. |
| **Shell execution diagnostics** | Low | Silent PTY failures on macOS with cryptic exit code messages; #3258 adds better diagnostics. |

---

*Digest generated for 2026-04-15 | Data source: github.com/QwenLM/qwen-code*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/manelsen/agents-radar).*