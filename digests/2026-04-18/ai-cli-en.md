# AI CLI Tools Community Digest 2026-04-18

> Generated: 2026-04-18 01:52 UTC | Tools covered: 8

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

**Date:** 2026-04-18
**Scope:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code

---

## 1. Ecosystem Overview

The AI CLI tooling landscape on April 18, 2026 exhibits strong differentiation in architectural approach and target audience while converging on shared capability requirements. **OpenAI Codex** and **Claude Code** lead in community velocity, with Codex shipping four Rust alpha releases in 24 hours and Claude addressing enterprise pain points around session limits. **OpenCode** demonstrates aggressive patch velocity (4 releases/day) targeting TUI reliability. Across all eight tools, authentication systems, MCP optimization, and thinking-depth controls emerge as the most contested technical challenges, while remote development workflows and sandbox security represent strategic investment directions. The ecosystem shows maturity in core functionality but fragmentation in platform-specific integrations—particularly around VS Code extensions, Windows/WSL environments, and NixOS support.

---

## 2. Activity Comparison

| Tool | Hot Issues Analyzed | Notable Engagement | PRs Merged/Active (24h) | Releases Today |
|------|---------------------|---------------------|-------------------------|----------------|
| **Claude Code** | 10 | #38335: 644 comments, 425 👍 | 4 key PRs (plugins, docs, bugfixes) | v2.1.114 (patch), v2.1.113 |
| **OpenAI Codex** | 10 | #14593: 550 comments; #10450: 565 👍 | 10+ PRs (Rust refactor, device keys, environments) | 4 alpha pre-releases (v0.122.0-alpha.6–9) |
| **Gemini CLI** | 10 | #24517: 114 comments (P1 auth issue) | 10 PRs (Gemma 4, RTL support, signal handling) | v0.38.2 (patch) |
| **Copilot CLI** | 10 | #575: 32 comments; #2591: 27 comments | 1 PR (devcontainer config) | v1.0.32, v1.0.32-1 |
| **Kimi Code CLI** | 10 | K2.6 thinking debates; API errors discussed | 10 PRs (Opus 4.7 support, markdown fixes) | v1.36.0 |
| **OpenCode** | 10 | #2242: 40 👍; #4821: 34 👍 | 10+ PRs (effect-typed refactors, schema migrations) | v1.4.8–11 (4 patches) |
| **Pi** | 10 | Provider parity discussions | 10 PRs (streaming fixes, Vertex AI, media support) | v0.67.67, v0.67.68 |
| **Qwen Code** | 10 | #3203: 93 comments (free tier policy); #3348: 7 👍 (401 errors) | 10 PRs (hooks, autocomplete perf, auth fixes) | v0.15.0-preview.0, v0.14.5-nightly |

**Observations:**
- **Highest engagement volume:** Claude Code (#38335 session limits) and OpenAI Codex (#14593 token burn) drive the most community discussion
- **Most releases velocity:** OpenCode (4 patches/day), OpenAI Codex (4 alpha/day), Pi (2 patches/day)
- **Feature PRs dominating:** Codex (infrastructure), OpenCode (refactoring), Pi (provider ecosystem)

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating ecosystem-wide priorities:

| Feature Direction | Tools Affected | Specific Community Needs |
|-------------------|----------------|---------------------------|
| **Remote/Cloud Development** | Codex, Copilot CLI, others | SSH workspaces, containerized environments, VS Code Remote SSH parity (#10450 Codex 565 👍, #10450-related Copilot) |
| **MCP Server Optimization** | Claude Code, Codex, Kimi Code, Pi | Per-session MCP profiles, reduced tool definition overhead, lifecycle management (#50189 Claude, #18333 Codex, #1919 Kimi) |
| **Thinking/Reasoning Controls** | Claude Code, Kimi Code, Pi, OpenCode | Effort levels (xhigh, max), adaptive thinking fixes, streaming summaries (#49268 Claude, #1926 Kimi, #3299 Pi) |
| **Hooks & Extensibility** | Claude Code, Codex, Qwen Code, Copilot CLI | Prompt hooks with LLM evaluation, hook ordering enforcement, validation feedback (#15937/15936 Codex, #3388 Qwen) |
| **Authentication Overhaul** | Gemini CLI, Qwen Code, Codex | 403/401 error resolution, OAuth→API-key transitions, token persistence (#24517 Gemini 114 comments, #3348 Qwen) |
| **Sandbox/Security** | Claude Code, Codex, OpenCode | Network domain blocking, device key v2 (TPM2/Secure Enclave/CNG), terminal command isolation (#2242 OpenCode 40 👍) |
| **VS Code Extension Parity** | Claude Code, Codex, Kimi Code | Streaming responses, file link handling, extension performance (#45534 Claude, #17649 Codex) |
| **Local/Self-Hosted Models** | Gemini CLI, Qwen Code, Pi | Gemma 4 support, OpenAI-compatible endpoint configuration, Ollama integration (#25604 Gemini, #3384 Qwen, #3022 Pi) |
| **Session/Cache Reliability** | Claude Code, Codex | Cache continuity across sessions, token consumption transparency, session limit handling (#38335 Claude 644 comments, #14593 Codex) |

**Cross-cutting theme:** The ecosystem collectively struggles with **token economics** (consumption visibility, cache efficiency, billing clarity) and **multi-agent orchestration** (MCP lifecycle, subagent coordination, permission propagation).

---

## 4. Differentiation Analysis

| Tool | Primary Differentiator | Target User | Technical Approach |
|------|------------------------|-------------|-------------------|
| **Claude Code** | Agent Teams, native binary distribution, enterprise Max plans | Professional developers, engineering teams | Native binaries via optional deps, domain-level network blocking, session-based cache |
| **OpenAI Codex** | Rust backend rewrite, device key security (hardware-backed), environment management | Security-conscious enterprises, developers needing remote workspaces | Modular Rust crates (codex-agent-runtime), TPM2/CNG/Secure Enclave integration, multi-environment support |
| **Gemini CLI** | Gemma local models, RTL/BiDi support, Google One integration | International users, Google ecosystem adherents | Local model setup tooling (`gemini gemma`), ANSI-safe text reordering, OAuth challenges |
| **Copilot CLI** | GitHub integration, org model visibility, devcontainer support | GitHub users, organization administrators | XDG config paths, auto model selection, usage-limit warnings (75%/90%) |
| **Kimi Code CLI** | K2.6 reasoning chains, Web UI emphasis, Asian market focus | Developers in China/Asian markets, Chinese AI research | High max_steps_per_turn (500), Kosong component ecosystem, markdown/UI polish |
| **OpenCode** | Effect-typed architecture, LSP integration, TUI-first design | Developers preferring terminal-native experiences | Effect Schema migrations, OTEL telemetry standardization, plugin metadata support |
| **Pi** | Multi-provider flexibility, Bedrock support, streaming reliability | Developers using diverse AI backends (Vertex, Nebius, Ollama, Fireworks) | Provider abstraction layer, streaming recovery, AWS bearer token auth |
| **Qwen Code** | ACP integration, free tier policy debates, local model emphasis | Cost-sensitive users, self-hosted model enthusiasts | Hooks-first extensibility, fdir→git ls-files refactor, GLM-5.1 compatibility |

**Strategic positioning:**
- **Enterprise-focused:** Claude Code (Max plans, native binaries), Codex (device keys, managed hooks), Copilot CLI (org visibility)
- **Developer-experience-focused:** OpenCode (TUI polish, Effect typing), Pi (provider flexibility), Kimi Code (Web UI)
- **Accessibility-focused:** Gemini CLI (RTL/BiDi, Gemma local), Qwen Code (free tier, local models)

---

## 5. Community Momentum & Maturity

### By Engagement Volume (Issue Comments + Reactions)

| Tier | Tool | Signature Metric |
|------|------|------------------|
| **Tier 1 (Critical Mass)** | Claude Code | #38335: 644 comments + 425 👍 |
| | OpenAI Codex | #14593: 550 comments + 225 👍; #10450: 565 👍 |
| **Tier 2 (Active)** | Gemini CLI | #24517: 114 comments |
| | Qwen Code | #3203: 93 comments |
| | OpenCode | #2242: 40 👍 + 27 comments |
| **Tier 3 (Growing)** | Kimi Code CLI | Moderate discussion on K2.6; API error threads |
| | Copilot CLI | #575: 32 comments; #2591: 27 comments |
| | Pi | Moderate provider parity discussions |

### By Iteration Velocity

| Tool | Release Cadence | PR Throughput | Architectural Activity |
|------|-----------------|---------------|------------------------|
| **Most Active** | OpenAI Codex (4 alphas/day) | 10+ active PRs | Rust refactor, device key protocol stack |
| | OpenCode (4 patches/day) | 10+ merged PRs | Effect Schema migrations, LSP boundary refactors |
| | Pi (2 patches/day) | 10+ PRs | Streaming recovery, provider additions |
| **Rapidly Shipping** | Claude Code | Steady PR flow | Native binary migration, plugin system |
| | Gemini CLI | Consistent PRs | Gemma 4, RTL support, signal handling |
| **Steady** | Copilot CLI | Low PR volume | Devcontainer config addition |
| | Kimi Code CLI | Consistent | Opus 4.7 adaptive thinking, markdown fixes |
| | Qwen Code | Steady | Hooks expansion, autocomplete perf |

### Maturity Indicators

| Tool | Stability Signals | Pain Point Density | Feature Completeness |
|------|-------------------|---------------------|---------------------|
| **Most Mature** | Copilot CLI (v1.0.32 stable) | Lower per-issue volume | Core workflow stable; gaps in remote dev |
| | Claude Code (established v2.1) | High issue volume but trending to fixes | Agent teams, cache systems active areas |
| **Maturing** | OpenAI Codex (alpha series) | High bug volume (token burn, bwrap) | Rust migration incomplete; remote dev gaps |
| | Gemini CLI (v0.38) | Auth P1s dominate | Local models emerging; auth needs work |
| **Early/Growth** | Kimi Code (v1.36) | K2.6 regressions | Web UI focus; thinking controls evolving |
| | OpenCode (v1.4) | Theme/UX regressions | Effect typing in progress; sandboxing new |
| | Qwen Code (v0.15 preview) | Auth wave, free tier debates | ACP integration maturing |
| | Pi (v0.67) | Provider fragmentation | Multi-provider strategy ambitious |

---

## 6. Trend Signals

The following patterns emerge from community feedback across all eight tools, offering strategic value for developers and decision-makers:

### 1. Remote Development is Table Stakes by 2026
OpenAI Codex's #10450 (565 👍) represents the highest-upvoted feature request in the ecosystem, indicating that **local-only CLI tools face competitive pressure**. Users expect VS Code Remote SSH parity. Tools without remote workflows (SSH, containers) will struggle in professional environments.

### 2. Token Economics Demand Transparency
Claude Code's #38335 (644 comments) and Codex's #14593 (550 comments) reveal that **token consumption visibility is a critical trust factor**. Cache reliability, session limit clarity, and billing predictability directly impact developer willingness to pay for premium tiers.

### 3. MCP Optimization is a Competitive Moat
Multiple tools report MCP server lifecycle issues (#18333 Codex, #50189 Claude, #1919 Kimi). **Efficient MCP management**—per-session profiles, cached tool definitions, reduced overhead—will differentiate tools in multi-agent scenarios.

### 4. Thinking/Reasoning Controls are Maturing
K2.6's excessive thinking (#1874 Kimi), Opus 4.7 adaptive thinking fixes (#1911 Kimi, #49268 Claude), and max-tier requests (#3299 Pi) indicate **the ecosystem is standardizing effort/thinking levels**. Tools lacking granular controls face user frustration.

### 5. Native Binaries and Sandboxing Converge
Claude Code's move to native binaries and Codex's device key v2 (TPM2/CNG/Secure Enclave) signal a shift toward **hardware-backed security and platform-native performance**. Tools relying on JavaScript bundling may face performance and security criticism.

### 6. Hooks and Extensibility Drive Enterprise Adoption
Qwen Code's ACP hooks (#3388), Codex's managed hooks (#15937), and Copilot CLI's devcontainer support indicate **enterprise customers require customization frameworks**. Hooks with LLM evaluation, ordering enforcement, and MDM compatibility are becoming expected.

### 7. Authentication is a Priority Pain Point
Gemini CLI's 403 wave (#24517), Qwen Code's 401 wave (#3348), and Codex's 401 errors demonstrate **auth systems need hardening**. OAuth→API-key transitions, token rotation, and session persistence require careful handling.

### 8. VS Code Extension Parity Gaps Persist
Claude Code (#45534), Codex (#17649), and Kimi Code report **extension regressions** in streaming, file links, and rendering. Tools marketing IDE integration must prioritize extension stability alongside CLI improvements.

### 9. Multi-Provider Flexibility is a Double-Edged Sword
Pi's provider ecosystem and Gemini's Vertex AI gaps illustrate that **provider abstraction requires comprehensive testing**. Tools supporting multiple backends must ensure feature parity (prompt caching, session IDs, thinking blocks) across providers.

### 10. Internationalization and Local Model Support Growing
Gemini's RTL/BiDi support (#25243) and Gemma local models (#25604), combined with Qwen Code's regional installation issues (#1914), indicate **global accessibility and offline capabilities are emerging differentiators**.

---

**Summary for Decision-Makers:**
- **Invest now in:** Remote development workflows, token consumption transparency, MCP optimization, granular thinking controls
- **Monitor closely:** Auth system

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

**Data as of: 2026-04-18**
**Source:** [anthropics/skills](https://github.com/anthropics/skills) (official repository)

---

## 1. Top Skills Ranking

The following Skills (PRs) have generated the most discussion and community interest, based on issue engagement patterns and feature demand signals:

### 📄 Skill: Org-Wide Skill Sharing
- **PR/Issue:** [Issue #228](https://github.com/anthropics/skills/issues/228) — *Enable org-wide skill sharing in Claude.ai*
- **Author:** jh-broad-reach | **Comments: 9** | 👍 5
- **Functionality:** Request for a shared skill library or direct sharing links within organizations. Currently users must manually download/upload .skill files and navigate Settings > Capabilities for each colleague.
- **Status:** OPEN
- **Insight:** This is the **highest-engagement issue** in the repository, indicating enterprise teams urgently need collaborative skill management.

---

### 🐛 Skill: `run_eval.py` Skills Trigger Fix
- **PR/Issue:** [Issue #556](https://github.com/anthropics/skills/issues/556) — *run_eval.py: claude -p never triggers skills/commands (0% trigger rate)*
- **Author:** dthau120391 | **Comments: 6** | 👍 6
- **Functionality:** Bug report documenting that evaluation scripts fail to trigger skills/commands despite correct YAML frontmatter. Affects skill quality testing pipelines.
- **Status:** OPEN
- **Insight:** Critical reliability issue for developers testing skill behavior—tied to the `skill-quality-analyzer` meta-skill ecosystem.

---

### 🔧 Skill: Plugin Deduplication (`document-skills` vs `example-skills`)
- **PR/Issue:** [Issue #189](https://github.com/anthropics/skills/issues/189) — *document-skills and example-skills plugins install identical content*
- **Author:** chuggies510 | **Comments: 5** | 👍 7
- **Functionality:** Identifies that installing both plugin packages causes duplicate skills in Claude Code's context window—a distribution packaging bug.
- **Status:** OPEN
- **Insight:** Most upvoted issue overall; confirms confusion around the skills marketplace structure.

---

### 🛡️ Skill: Security — Namespace Trust Boundary
- **PR/Issue:** [Issue #492](https://github.com/anthropics/skills/issues/492) — *Community skills under anthropic/ namespace enable trust boundary abuse*
- **Author:** aliksir | **Comments: 4** | 👍 2
- **Functionality:** Raises security concern that community-submitted skills distributed under the `anthropic/` namespace may trick users into granting elevated permissions to unofficial code.
- **Status:** OPEN
- **Insight:** Highlights the need for skill provenance/verification mechanisms before mass adoption.

---

### 🧩 Skill: Expose Skills as MCPs
- **PR/Issue:** [Issue #16](https://github.com/anthropics/skills/issues/16) — *Expose Skills as MCPs*
- **Author:** lucis | **Comments: 4** | 👍 0
- **Functionality:** Proposes packaging Skills as Model Context Protocol (MCP) servers, enabling programmatic API exposure (e.g., `algorithmic-art` → `generateAlgorithmArt({...})`).
- **Status:** OPEN
- **Insight:** Forward-looking integration request connecting Skills to the broader AI tooling ecosystem.

---

### 📋 Skill: Agent Governance Patterns
- **PR/Issue:** [Issue #412](https://github.com/anthropics/skills/issues/412) — *Skill proposal: agent-governance — safety patterns for AI agent systems*
- **Author:** imran-siddique | **Comments: 4** | 👍 0
- **Functionality:** Proposes a skill covering policy enforcement, threat detection, trust scoring, and audit trails for AI agent deployments.
- **Status:** CLOSED
- **Insight:** Suggests growing interest in operational/safety tooling beyond creative and technical workflows.

---

## 2. Community Demand Trends

Based on issue analysis, the community's most-anticipated skill directions are:

| Trend | Evidence | Priority |
|-------|----------|----------|
| **Enterprise Collaboration** | Org-wide sharing (Issue #228, 9 comments) | 🔴 Critical |
| **Skill Reliability & Testing** | `run_eval.py` bugs (Issue #556), `skill-creator` improvements (Issue #202) | 🔴 Critical |
| **Document Generation Quality** | `document-typography` (PR #514), `odt` (PR #486), DOCX fixes (PR #541) | 🟠 High |
| **AI Agent Memory/Persistence** | `shodh-memory` (PR #154), `record-knowledge` (PR #521) | 🟠 High |
| **Security & Trust** | Namespace abuse concerns (Issue #492), skill quality analyzer (PR #83) | 🟠 High |
| **Native Platform Integration** | macOS AppleScript automation (PR #806), x402 micropayments (PR #374) | 🟡 Medium |
| **Codebase Intelligence** | `codebase-inventory-audit` (PR #147), `testing-patterns` (PR #723) | 🟡 Medium |

---

## 3. High-Potential Pending Skills

These PRs are open and actively address community needs—likely to land soon:

| Skill | PR | Author | Key Feature | Status |
|-------|-----|--------|-------------|--------|
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 4444J99 | Full testing stack: Trophy model, React Testing Library, e2e patterns | OPEN |
| **odt** (OpenDocument) | [#486](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | Create/fill/parse ODT/ODS files, LibreOffice compatibility | OPEN |
| **sensory** (macOS automation) | [#806](https://github.com/anthropics/skills/pull/806) | AdelElo13 | Native AppleScript automation via `osascript` | OPEN |
| **x402** (micropayments) | [#374](https://github.com/anthropics/skills/pull/374) | Calgooon | BSV auth and AI service micropayments from natural language | OPEN |
| **SAP-RPT-1-OSS predictor** | [#181](https://github.com/anthropics/skills/pull/181) | amitlals | SAP tabular foundation model for predictive analytics | OPEN |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | narenkatakam | Community health file (addresses repo's 25% health score) | OPEN |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade skill infrastructure—specifically organizational sharing, reliability testing, and security verification—while simultaneously pushing document generation quality and cross-platform automation to production readiness.**

---

**Report generated from:** [github.com/anthropics/skills](https://github.com/anthropics/skills) | 50 PRs, 50 Issues analyzed

---

# Claude Code Community Digest — 2026-04-18

---

## 1. Today's Highlights

The v2.1.114 patch addresses a critical permission dialog crash affecting agent teams workflows, while v2.1.113 ships a notable architecture shift to native binaries and introduces domain-level network blocking. Community discussion remains dominated by session limit concerns on Max plans and regressions in complex engineering task handling, with 644 and 526 comments respectively on the top issues.

---

## 2. Releases

### v2.1.114
**Fix:** Resolved a crash in the permission dialog when agent team teammates requested tool permission. This follows reports of stack overflows in team-lead coordination scenarios.

### v2.1.113
**Key changes:**
- CLI now spawns a native Claude Code binary (via per-platform optional dependency) instead of bundled JavaScript, improving startup performance and platform integration.
- Added `sandbox.network.deniedDomains` setting to block specific domains even when a broader `allowedDomains` wildcard would otherwise permit them.

---

## 3. Hot Issues

| # | Title | Why It Matters | Reaction |
|---|-------|----------------|----------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | **Claude Max plan session limits exhausted abnormally fast since March 23** | Users report dramatic overconsumption of session credits, suggesting a regression in token handling or cache behavior. With 644 comments, this is the most-active issue. | 425 👍 |
| [#42796](https://github.com/anthropics/claude-code/issues/42796) *(CLOSED)* | **Claude Code unusable for complex engineering tasks with Feb updates** | Critical regression affecting engineering workflows; the issue gained 1,950 👍 before closure, indicating widespread impact on professional users. | 1950 👍 |
| [#49268](https://github.com/anthropics/claude-code/issues/49268) | **Thinking summaries missing on Opus 4.7** | Opus 4.7 changed the default for `display: "summarized"`, breaking UX expectations for extended thinking output. | 21 👍 |
| [#47098](https://github.com/anthropics/claude-code/issues/47098) | **New sessions will never hit a full cache** | Every new session incurs ~6,505 cache-create tokens even for brief interactions, suggesting broken cache continuity across sessions. | 0 👍 |
| [#31394](https://github.com/anthropics/claude-code/issues/31394) | **/rename command does not persist in /resume list** | Renamed sessions revert to default naming in resume, disrupting workflow continuity. | 6 👍 |
| [#49303](https://github.com/anthropics/claude-code/issues/49303) *(CLOSED)* | **Team-lead crashes with stack overflow after teammate permission request** | Agent teams feature crashes when teammates forward permission requests, likely addressed by v2.1.114. | 4 👍 |
| [#45534](https://github.com/anthropics/claude-code/issues/45534) | **Claude Code VSCode extension not streaming responses since 2.1.37** | Regression in the VSCode extension rendering pipeline affects a primary IDE integration. | 0 👍 |
| [#50223](https://github.com/anthropics/claude-code/issues/50223) | **"Advisor tool result could not be processed" errors** | Intermittent 400 errors leave sessions stuck with no recovery path. | 0 👍 |
| [#49990](https://github.com/anthropics/claude-code/issues/49990) | **Bare hook entry silently breaks entire hooks config** | Malformed hook entries in `settings.json` fail silently with no validation feedback. | 0 👍 |
| [#49056](https://github.com/anthropics/claude-code/issues/49056) | **Desktop App: User messages in dark blue on black — poor readability** | Accessibility and UX regression in the macOS desktop app with low-contrast text. | 0 👍 |

---

## 4. Key PR Progress

| # | Title | Summary |
|---|-------|---------|
| [#20448](https://github.com/anthropics/claude-code/pull/20448) | **Add web4-governance plugin for AI governance with R6 workflow** | Introduces a trust-native governance plugin featuring T3 trust tensors, entity witnessing, and R6 audit trails for cryptographic provenance and verifiable accountability. |
| [#39148](https://github.com/anthropics/claude-code/pull/39148) | **Add preserve-session plugin for path-independent session history** | Preserves Claude Code session history when project directories are renamed, moved, or copied by assigning path-independent UUIDs. |
| [#49825](https://github.com/anthropics/claude-code/pull/49825) | **[BUGFIX] Devcontainer firewall init script errors due to duplicated IPs** | Fixes dev container initialization failures by deduplicating overlapping IP entries in firewall scripts. |
| [#49767](https://github.com/anthropics/claude-code/pull/49767) | **docs: add Warp marketplace plugin setup and verification steps** | Adds documentation for Warp terminal integration including jq installation requirements and end-to-end verification steps. |

---

## 5. Feature Request Trends

Analysis of open enhancement issues reveals these dominant themes:

1. **Agent Teams Enhancements** — Support for base branch selection in git worktrees ([#23622](https://github.com/anthropics/claude-code/issues/23622)), better permission coordination, and multi-agent session management.

2. **UX/Visibility Improvements** — Real-time streaming of extended thinking output during interactive mode ([#30660](https://github.com/anthropics/claude-code/issues/30660)); auto-return to message input via hotkeys ([#50233](https://github.com/anthropics/claude-code/issues/50233)).

3. **Platform Expansion** — Native Nix/NixOS support ([#20012](https://github.com/anthropics/claude-code/issues/20012)) requested given npm deprecation; continued Windows/WSL improvements.

4. **MCP Optimization** — Per-session MCP server profiles to reduce token overhead from loading unused tool definitions ([#50189](https://github.com/anthropics/claude-code/issues/50189)).

5. **Hooks & Automation** — Better validation and documentation for hook configurations; timezone handling for scheduled triggers.

---

## 6. Developer Pain Points

| Theme | Details |
|-------|---------|
| **Session/Cache Behavior** | Cache misses on new sessions, unexplained token overconsumption on Max plans, and session limits exhausting faster than expected. |
| **Agent Teams Stability** | Permission dialog crashes, stack overflows in team-lead coordination, and silent failures in git worktree environments. |
| **Hook Reliability** | `UserPromptSubmit` hooks silently skip in git worktree sessions; malformed hook configs fail without validation errors. |
| **VSCode Extension** | Non-streaming responses since 2.1.37 regression; intermittent advisor tool errors causing sessions to become unresponsive. |
| **Platform Gaps** | NixOS lacks native installer; scheduled triggers execute in UTC despite no timezone documentation; desktop app accessibility regressions. |

---

*Data sourced from [anthropics/claude-code](https://github.com/anthropics/claude-code) — 2026-04-18*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-04-18
**Source:** github.com/openai/codex

---

## 1. Today's Highlights

The v0.122.0 Rust alpha series continues with four new pre-releases (v0.122.0-alpha.6 through alpha.9). The community is rallying around a critical token burn regression (Issue #14593, 550+ comments) and a prominent request for remote development support in the Desktop app (Issue #10450, 565+ 👍). Notable engineering work is advancing around multi-environment support, device key security, and hook policy enforcement via active PRs.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.122.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.9) | Pre-release | Latest in Rust alpha series |
| [v0.122.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.8) | Pre-release | — |
| [v0.122.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.7) | Pre-release | — |
| [v0.122.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.6) | Pre-release | — |

> Four alpha releases in the last 24h signal active Rust backend development. No breaking-change announcements or CHANGELOG entries accompany these tags.

---

## 3. Hot Issues

### 🔥 #14593 — Burning tokens very fast (OPEN)
**Comments:** 550 | **👍:** 225
A severe regression affecting Business-tier VS Code extension users on Windows. Tokens are consumed at an alarming rate, suggesting an infinite loop or uncontrolled context growth. The issue spans v26.311.21342 on GPT-5.3-codex medium. High severity; warrants monitoring.
🔗 https://github.com/openai/codex/issues/14593

### 🚀 #10450 — Remote Development in Codex Desktop App (OPEN)
**Comments:** 142 | **👍:** 565
The top-voted feature request in the tracker. Users want the Desktop app to support remote development workflows (SSH workspaces, containerized environments) comparable to VS Code Remote SSH. Currently the app is limited to local workspace access, blocking many professional use cases.
🔗 https://github.com/openai/codex/issues/10450

### 🐛 #14936 — bwrap approval prompt for almost every command (OPEN)
**Comments:** 48 | **👍:** 20
Linux sandbox regression in CLI 0.115.0 with gpt-5.3-codex medium. The `bwrap` sandbox is triggering approval prompts on nearly every shell command, making the tool unusable. Likely related to landlock policy changes.
🔗 https://github.com/openai/codex/issues/14936

### 🐛 #18264 — Message send delayed ~8 seconds in new sessions (OPEN)
**Comments:** 11 | **👍:** 13
Regression in Codex desktop app v26.415.21839 on macOS. New sessions incur an 8-second delay before messages can be sent. Active user impact; likely a session initialization regression.
🔗 https://github.com/openai/codex/issues/18264

### 📱 #18258 — Computer Use plugin unavailable on macOS (OPEN)
**Comments:** 18 | **👍:** 24
The Desktop app reports "Computer Use plugin unavailable" despite bundled plugin files existing. A community workaround involves enabling `features.apps = true` in `~/.codex/config.toml` and repairing the plugin cache path.
🔗 https://github.com/openai/codex/issues/18258

### ⚡ #16857 — High GPU usage "thinking" animation (OPEN)
**Comments:** 14 | **👍:** 15
Darwin ARM64 users on v26.325.31654 report high GPU utilization caused by a trivial animation during the thinking state. Affects laptop battery life and performance. Suggests an inefficient rendering path.
🔗 https://github.com/openai/codex/issues/16857

### 🔗 #17649 — File links broken in VS Code extension (OPEN)
**Comments:** 12 | **👍:** 9
Regression in VS Code extension v26.409.20454 on Windows 11. Every file link format (markdown, inline, absolute) fails to open the target in the editor. Indicates a broken link-interception handler.
🔗 https://github.com/openai/codex/issues/17649

### 🔒 #17644 — danger-full-access sandbox blocks Metal/GPU IOKit (OPEN)
**Comments:** 8 | **👍:** 0
On macOS with CLI 0.118.0 and MLX 0.31.0, the `danger-full-access` sandbox blocks IOKit access needed for GPU compute, causing Python subprocess crashes. Users bypass by setting `bypass-sandbox = true`, which defeats the security model.
🔗 https://github.com/openai/codex/issues/17644

### 📦 #18333 — MCP stacks reinitialized per subagent (OPEN)
**Comments:** 9 | **👍:** 2
On Darwin 24.6.0, the Desktop app re-starts full MCP server stacks for each new session or subagent, causing severe slowdown and memory pressure. Suggests a lifecycle management bug in the MCP server registry.
🔗 https://github.com/openai/codex/issues/18333

### 💰 #18345 — Token usage regression in v0.121.0 vs v0.116.0 (OPEN)
**Comments:** 5 | **👍:** 1
Token consumption jumped ~60%+ for identical prompts after upgrading from v0.116.0 to v0.121.0, with no configuration changes. Community notes v0.116.0 is the most token-efficient release to date. Possibly related to compaction behavior changes.
🔗 https://github.com/openai/codex/issues/18345

---

## 4. Key PR Progress

| PR | Author | Description |
|----|--------|-------------|
| [#18413](https://github.com/openai/codex/pull/18413) | pash-openai | **Dynamic tool namespaces** — Enables deferred dynamic tools to carry explicit namespaces through app-server protocol, tool search, and dispatch. Improves discoverability and resolves a gap where tool_search couldn't locate deferred tools by exact name. |
| [#15937](https://github.com/openai/codex/pull/15937) | viyatb-oai | **Managed hooks** — Adds `allowManagedHooksOnly` policy control for lifecycle hooks and surfaces a startup warning when hooks load. Enforces MDM-compatible requirements via `requirements.toml`. |
| [#15936](https://github.com/openai/codex/pull/15936) | viyatb-oai | **Hook ordering enforcement** — Executes trust-sensitive hooks (PreToolUse, SessionStart, UserPromptSubmit) in tiers so non-project hooks run before project hooks. Preserves parallel execution within tiers. |
| [#18407](https://github.com/openai/codex/pull/18407) | starr-openai | **Split codex-core into smaller crates** — Refactors leaf/runtime surfaces out of codex-core to reduce compilation times on small edits. Extracts `codex-agent-runtime`, `codex-code-mode-runtime`, etc. Draft PR targeting build performance. |
| [#18416](https://github.com/openai/codex/pull/18416) | starr-openai | **Turn-scoped environment selections** — Adds experimental `turn/start.environments` params for per-turn environment ID and cwd selections, routed through EnvironmentManager. |
| [#18401](https://github.com/openai/codex/pull/18401) | starr-openai | **Multiple managed environments** — Refactors EnvironmentManager to own keyed environments with default/local lookup. Remote exec-server clients remain lazy until use. Separates disabled agent access from internal local access. |
| [#18429–#18438](https://github.com/openai/codex/pulls?q=is%3Apr+is%3Aopen+device+key) | euroelessar | **Device key v2 protocol & platform providers** — Series of PRs implementing device key enrollment, public-key export, and signing across Linux (TPM2), Windows (CNG/Microsoft Platform Crypto Provider), and macOS (Secure Enclave). Keeps non-exportable key material hardware-backed. |
| [#18030](https://github.com/openai/codex/pull/18030) | rhan-oai | **Responses API call analytics** — Emits analytics for Responses API calls (stack: #18030 → #18029 → #18028). Schema and reduced fact-count PRs in the same stack. |
| [#17286](https://github.com/openai/codex/pull/17286) | rka-oai | **Prefix compaction prewarming** — Prewarms prefix compaction in background when history hits lower threshold. Foreground auto-compact wins if result not ready. Surfaces "Context prefix compacted" while preserving normal compaction flow. |

---

## 5. Feature Request Trends

Cross-referencing high- 👍 and high-comment issues reveals four dominant themes:

1. **Remote / cloud development workflows** — Users want Codex to function like VS Code Remote SSH, accessing workspaces over SSH or in containers. Current Desktop app is local-only. (Issue #10450 — 565 👍)

2. **Manual context compaction control** — Power users want a `/compact` command in the Desktop app to force context compression on demand, similar to the CLI. (Issue #11325 — 146 👍, now closed but tracked)

3. **MCP server lifecycle efficiency** — Multiple reports of slow MCP tool initialization and repeated stack restarts. The community wants lighter, cached, per-session MCP management. (Issues #18333, #16940)

4. **macOS & Desktop app parity** — Requests for consistent behavior between CLI, TUI, and Desktop app: image paste shortcuts, progress indicators, plugin availability, animation performance. (Issues #10523, #17313, #18258, #16857)

---

## 6. Developer Pain Points

The following frustrations appear repeatedly across the issue tracker:

- **Token burn regression** — A severe, unresolved issue causing massive token overconsumption in the VS Code extension. Developers are burning credits with no workaround.

- **401 Unauthorized errors in CLI** — Issue #12764 (now closed) indicates intermittent auth failures with the Responses API backend, causing workflow interruptions.

- **Windows sandbox ACL failures** — Incorrect permissionheritance when creating folders in the Windows sandbox breaks `apply_patch` and general workspace edits. (Issues #14585, #13762)

- **Approval prompts on every command (Linux)** — The `bwrap` sandbox regression is forcing a dialog on each shell invocation, making the CLI unusable on Linux without a sandbox bypass.

- **Link handling regressions in VS Code** — File reference links in the chat view stopped working after a recent extension update, breaking key workflows.

- **Regression cadence from v0.116.0 → v0.121.0** — Users report significant token regression and efficiency drops in recent stable releases, pointing to changes in compaction and context management logic.

---

*Generated by automated analysis of github.com/openai/codex activity on 2026-04-18. For real-time tracking, visit the [issues dashboard](https://github.com/openai/codex/issues) or [PR queue](https://github.com/openai/codex/pulls).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-18

## Today's Highlights
The v0.38.2 patch release addressed a cherry-pick fix from the v0.38.1 branch, while a significant PR introducing **Gemma 4 model support** was opened, expanding local model capabilities. Authentication and permission issues remain the community's top concern, with a high-priority issue (#24517) drawing 114 comments from frustrated Google One AI Premium subscribers unable to access API endpoints despite proper subscription status.

---

## Releases

### v0.38.2
A patch release addressing a cherry-pick fix from `release/v0.38.1-pr-24974`. This release corrects issues introduced in v0.38.1 and is available on the [GitHub releases page](https://github.com/google-gemini/gemini-cli/compare/v0.38.1...v0.38.2).

---

## Hot Issues

| # | Issue | Priority | Comments | Why It Matters |
|---|-------|----------|----------|----------------|
| 1 | **[403 PERMISSION_DENIED for Google One AI Premium subscriber](https://github.com/google-gemini/gemini-cli/issues/24517)** | P1 | 114 | Widespread impact—users with valid Google One AI Premium subscriptions cannot access API endpoints despite correct subscription tier identification. No tokens consumed; requests rejected outright. |
| 2 | **[Sign in with Google → 403 API Error](https://github.com/google-gemini/gemini-cli/issues/24880)** | Triage | 31 | OAuth authentication pathway returning forbidden errors; marked as closed but community reports ongoing friction. |
| 3 | **[AST-aware file reads, search, and mapping assessment](https://github.com/google-gemini/gemini-cli/issues/22745)** | Workstream | 5 | Epic tracking investigation into AST-aware tooling for precise method bounds, reduced token noise, and improved codebase navigation—potential significant quality-of-life improvement. |
| 4 | **[Repeated permission requests for same file](https://github.com/google-gemini/gemini-cli/issues/24916)** | Security | 3 | Permission "allow" choices not persisting across sessions, causing UX friction and repeated interruptions. |
| 5 | **[Shell command stuck "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** | Workstream | 2 | CLI hangs post-execution on simple commands, leaving processes orphaned and requiring manual intervention. |
| 6 | **[Subagent reports GOAL success despite MAX_TURNS hit](https://github.com/google-gemini/gemini-cli/issues/22323)** | P1 | 2 | Subagent (`codebase_investigator`) masks interruption as success, hiding incomplete analysis from users—misleading workflow state. |
| 7 | **[Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)** | P2 | 2 | Configuration for `maxTurns` and other settings bypassed entirely in Browser Agent, creating inconsistent behavior across agent types. |
| 8 | **[Memory routing: global vs. project](https://github.com/google-gemini/gemini-cli/issues/22819)** | Workstream | 1 | Proposes separation of user-wide (`~/.gemini/`) and project-specific (`.gemini/`) memory stores—addresses cluttered workspace contamination. |
| 9 | **[Subagents awareness of active approval modes](https://github.com/google-gemini/gemini-cli/issues/23582)** | Workstream | 1 | Subagents lack context on Plan vs. Auto-Edit modes, causing instruction/tool conflicts with Policy Engine constraints. |
| 10 | **[400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** | Workstream | 0 | CLI crashes when 400+ tools available; agent lacks smart tool scoping in enabled tool sets. |

---

## Key PR Progress

| # | PR | Status | Category | Summary |
|---|-----|--------|----------|---------|
| 1 | **[feat(core): add support for Gemma 4 models](https://github.com/google-gemini/gemini-cli/pull/25604)** | Open | Core | Introduces `gemma-4-31b-it` and `gemma-4-26b-a4b-it` with advanced "Thinking" capabilities—a major expansion of local model options. |
| 2 | **[fix(cli): forward termination signals to relaunched child process](https://github.com/google-gemini/gemini-cli/pull/25605)** | Open | CLI | Ensures `SIGTERM`/`SIGHUP` signals propagate to child processes spawned by `relaunchAppInChildProcess`, fixing orphaned processes under systemd/ACP supervision. |
| 3 | **[fix(deps): resolve minimatch version conflict in vsce package](https://github.com/google-gemini/gemini-cli/pull/25606)** | Open | Dependencies | Fixes build failure in `gemini-cli-vscode-ide-companion` caused by incorrect minimatch v10 override bleeding into vsce's v3 dependency. |
| 4 | **[feat(config): split memoryManager flag into autoMemory](https://github.com/google-gemini/gemini-cli/pull/25601)** | Closed | Config | Decouples `MemoryManagerAgent` from background skill-extraction service, enabling granular feature toggling. |
| 5 | **[fix(core): resolve nested plan directory duplication](https://github.com/google-gemini/gemini-cli/pull/25138)** | Open | Core | Centralizes path resolution for nested plan files and enforces relative path policies for security compliance. |
| 6 | **[fix(core): silently handle EPERM when listing dir structure](https://github.com/google-gemini/gemini-cli/pull/25066)** | Closed | Core | Prevents crashes when encountering restricted directories (e.g., `~/.Trash` on macOS) during workspace scanning. |
| 7 | **[fix(core): resolve MCP tool name collisions for subagent delegation](https://github.com/google-gemini/gemini-cli/pull/21873)** | Open | Agent | Enables unqualified MCP tool names in subagent calls with dynamic mapping; removes hacky wrapper shell scripts from orchestration. |
| 8 | **[feat(cli): add streamlined `gemini gemma` local model setup](https://github.com/google-gemini/gemini-cli/pull/25498)** | Open | CLI | New `gemini gemma` command for simplified local model management plus `gemini gemma logs` for LiteRT server inspection. |
| 9 | **[feat: implement universal RTL/BiDi support with ANSI-safe rendering](https://github.com/google-gemini/gemini-cli/pull/25243)** | Open | Core | Full RTL language support (Arabic, Hebrew, Persian) with ANSI escape code preservation during text reordering. |
| 10 | **[feat(core): enable topic update narration by default](https://github.com/google-gemini/gemini-cli/pull/25594)** | Closed | Core | Promotes topic narration from experimental to default behavior, improving conversational context awareness. |

---

## Feature Request Trends

Based on issue analysis, the community is pushing in these directions:

1. **Authentication & Authorization Overhaul** — Persistent 403 errors for legitimate subscribers suggest systemic auth/API key delegation issues need addressing.

2. **Memory & Context Management** — Multiple PRs/issues (#25601, #22819, #22809) targeting improved memory routing, persistent settings, and proactive memory writes.

3. **Local Model Expansion** — Gemma 4 support (#25604) and `gemini gemma` setup tooling (#25498) indicate growing demand for offline/local-first workflows.

4. **Agent Coordination** — Subagent awareness of approval modes (#23582), MAX_TURNS handling (#22323), and MCP tool delegation (#21873) reflect maturity push for multi-agent scenarios.

5. **Terminal & SSH Compatibility** — Issues around text scrambling (#24202), scroll flickering (#24470), and signal forwarding (#25605) highlight cross-platform terminal edge cases.

6. **Internationalization** — RTL/BiDi support (#25243) signals expanding global audience requiring non-LTR language support.

---

## Developer Pain Points

- **Auth Failures on Valid Subscriptions**: The 403 PERMISSION_DENIED issue (#24517) with 114 comments is the most engagement any issue has received—indicating widespread frustration with Google One AI Premium integration.

- **Permission Persistence**: "Allow" choices not applying across sessions (#24916) creates repetitive interruption loops, degrading CLI usability.

- **Shell Execution Hangs**: Commands completing but CLI staying "Awaiting input" (#25166) leaves developers with orphaned processes and no clear recovery path.

- **Settings Ignored by Browser Agent**: Configuration drift between agent types (#22267) causes unexpected behavior when switching contexts.

- **Directory Scanning Crashes**: Restricted directories triggering errors (#25066) suggests fragile file system traversal that needs defensive handling.

- **Tool Scope Explosion**: >128 tools causing 400 errors (#24246) indicates lack of intelligent tool filtering when context windows are constrained.

---

*Data sourced from [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) — 2026-04-18*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest – 2026‑04‑18**

---

## 1. Today’s Highlights
- **v1.0.32 ships with quality‑of‑life improvements** – short session‑ID prefixes for `/resume`, an *auto* model selector, a new `--print‑debug‑info` flag, and proactive usage‑limit warnings at 75 % / 90 %.
- **Patch v1.0.32‑1** fixes a regression where `/feedback` failed when the working directory wasn’t writable by falling back to the system temp folder.
- **Community activity is heating up** around model visibility (missing org‑enabled models, hidden GPT‑5.4 effort levels) and a spate of environment‑specific hangs (Nix/direnv, Bash timeouts). One new PR adds an initial *devcontainer* configuration to streamline local development.

---

## 2. Releases
| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.32** | 2026‑04‑17 | • Allow short session‑ID prefixes (≥ 7 hex chars) for `/resume`.<br>• **`auto` model selection** – Copilot picks the best available model for each session.<br>• New `--print‑debug‑info` flag for diagnostics (version, terminal caps, env vars).<br>• Show warnings at 75 % and 90 % of weekly usage limits.<br>• Fix `/feedback` bundle storage when the working directory is unwritable. |
| **v1.0.32‑1** | 2026‑04‑17 | **Bug fix** – `/feedback` now saves the bundle to the system temp folder if the working directory isn’t writable. |
| **v1.0.32‑0** | 2026‑04‑17 | **Feature pre‑view** – `auto` model selection, `--print‑debug‑info`, and usage‑limit warnings were introduced. |

*All releases are available at:* https://github.com/github/copilot-cli/releases

---

## 3. Hot Issues (Top 10 by discussion)
| # | Title (Link) | Why It Matters | Community Reaction |
|---|--------------|----------------|-------------------|
| **#575** | **[CLOSED] Bash execution environment hangs – all commands timeout** | Long‑standing hang on macOS M1 (also reported on Linux) breaks the core shell‑tool workflow. | 32 comments, 1 👍 – many users confirmed the issue; the bug is marked closed, but a fix in the current release is still being validated. |
| **#2591** | **[OPEN] Single session request → infinite premium requests consumed** | A single user request can trigger 80‑100 premium API calls, leading to unexpected quota exhaustion. | 27 comments, 12 👍 – high‑visibility billing concern; maintainers are investigating request‑loop detection. |
| **#1703** | **[OPEN] Copilot CLI does not list all org‑enabled models (e.g., Gemini 3.1 Pro)** | VS Code shows models that the CLI hides, causing confusion for organization admins who expect parity. | 21 comments, 33 👍 – strong demand for model‑list parity; a fix is being reviewed. |
| **#2725** | **[OPEN] GPT‑5.4 `/model` picker hides Extra High even though xhigh still works** | UI inconsistency: the picker only shows Low/Medium/High, but `xhigh` is still functional, misleading users. | 20 comments, 15 👍 – impacts power users relying on effort‑level tuning. |
| **#2336** | **[OPEN] Strange rate‑limit message** | Users receive cryptic rate‑limit errors for moderate workloads, suggesting mis‑calculated quotas. | 16 comments, 4 👍 – many report misleading messaging; clarity improvements requested. |
| **#2583** | **[OPEN] Copilot `update` command is not working** | The `/update` command fails on Windows (winget) and possibly elsewhere, blocking users from auto‑updating. | 7 comments, 0 👍 – regression since v1.0.17; high priority for the release team. |
| **#1739** | **[OPEN] GitHub Copilot CLI error with Codex 5.3** | Server‑error when using Codex 5.3, while other models work fine; affects enterprise users on the latest model. | 7 comments, 4 👍 – a targeted regression that needs model‑specific handling. |
| **#1838** | **[OPEN] Copilot CLI hangs in Nix/direnv environments due to subprocess I/O deadlock** | Hangs on Nix‑flake/direnv setups, making the CLI unusable in those popular dev environments. | 6 comments, 9 👍 – community‑driven workaround in progress; a fix in the pipeline. |
| **#2374** | **[OPEN] Autopilot enters an infinite loop** | Autopilot repeatedly re‑plans after task completion, causing an endless loop. | 4 comments, 0 👍 – a critical UX bug for automation‑focused users. |
| **#2769** | **[CLOSED] Weekly rate‑limit not resetting after expected reset** | Users on Pro+ see the rate‑limit persist past the weekly window, blocking usage. | 4 comments, 2 👍 – resolved by backend refresh; verification ongoing. |

*Full list of issues:* https://github.com/github/copilot-cli/issues

---

## 4. Key PR Progress
| PR | Title | Description |
|----|-------|-------------|
| **#2800** | **Add initial devcontainer configuration** | Introduces a `.devcontainer/` folder (Dockerfile + `devcontainer.json`) to let developers spin up a pre‑configured Copilot CLI environment with a single VS Code *Reopen in Container* action. Currently open and awaiting review. |

*Only one PR was recorded in the last 24 h. The absence of additional merged PRs reflects a release‑focused cycle, with most changes shipped via the v1.0.32 release artifacts.*  

*PR link:* https://github.com/github/copilot-cli/pull/2800

---

## 5. Feature‑Request Trends
From the current issue queue, several recurring themes emerge:

| Theme | Representative Issues | What the Community Wants |
|-------|----------------------|--------------------------|
| **Model Visibility & Selection** | #1703, #2725, #2591 | Full parity with VS Code model lists, clear effort‑level UI, and transparent request‑counting. |
| **Configuration & Environment Handling** | #1347, #1750, #1954, #2583 | Robust XDG‑based config paths, working `/update` command, and correct handling of non‑writable directories. |
| **Environment‑Specific Reliability** | #575, #1838, #2159, #2580 | Stop Bash hangs in Nix/direnv, fix copy/paste on Windows SSH, suppress invisible Unicode in terminal output. |
| **Rate‑Limit Messaging** | #2336, #2769, #2797, #2742 | Accurate, actionable limit warnings (e.g., reset times, suggestion to switch to *auto*). |
| **Agent / Autopilot Behavior** | #2374, #935, #2416 | Prevent infinite loops, respect custom agent definitions, and expose full skill lists to sub‑agents. |
| **UI/UX Improvements** | #1160, #1529, #2625 | Better text‑editing shortcuts, a dedicated *review mode*, and faster terminal rendering for long conversations. |
| **MCP Integration** | #2176, #2692, #1040, #1255 | Ensure MCP servers are discovered, passed correctly in

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest

**Date:** 2026-04-18  
**Repository:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights

Version 1.36.0 shipped with a significant default configuration change—`max_steps_per_turn` increased from 100 to 500, allowing more autonomous agent behavior per turn. The release also includes Web UI fixes for markdown rendering and code block actions, plus improved Claude Opus 4.7 adaptive thinking support. Community discussion continues to focus on Kimi K2.6's excessive thinking behavior and requests for model rollback options.

---

## 2. Releases

### v1.36.0 (2026-04-17)
**Pull Request:** [#1922](https://github.com/MoonshotAI/kimi-cli/pull/1922)

| Component | Change |
|-----------|--------|
| `kimi-cli` | 1.35.0 → **1.36.0** |
| `kosong` | 0.49.0 → **0.50.0** |

**Key Changes:**
- **feat(core):** Default `max_steps_per_turn` raised from 100 → 500, enabling longer agent reasoning chains ([#1908](https://github.com/MoonshotAI/kimi-cli/pull/1908))
- **fix(shell):** Moon spinner now displays as fallback during all active turn gaps ([#1909](https://github.com/MoonshotAI/kimi-cli/pull/1909))
- **fix(build):** Build system improvements (details truncated)
- **Anthropic provider:** Fixed Claude Opus 4.7 returning `invalid_request_error`; now correctly uses adaptive thinking

---

## 3. Hot Issues

### 1. [#1874] K2.6-code-preview Thinking Length Crisis (CLOSED)
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/1874  
**Author:** yang12535 | 👍 1

A user reported that K2.6 generated **51 reasoning turns** consuming **60,000+ output tokens** for a single sub-agent task. The excessive, repetitive thinking disrupts workflows. This issue gained attention as a concrete example of K2.6's overthinking problem affecting productivity.

### 2. [#1924] API Bug: Invalid Temperature for K2.6 Model (OPEN)
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/1924  
**Author:** doggystylexxx | 👍 0

API-level bug where the model rejects all temperature values including 0.6, returning "invalid temperature: only 0.6 is allowed." Reproduced via OpenAI SDK, curl, and direct API calls—indicates a server-side validation issue.

### 3. [#1903] Error Code 400 on Kimi Code (OPEN)
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/1903  
**Author:** federicomalagoni | 👍 0

Users on Kimi Coding Plan receiving HTTP 400 errors when using `kimi-for-coding` model. Currently under investigation with 5 comments.

### 4. [#1888] Kimi K2.6 Excessive API Calls in Claude Code (OPEN)
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/1888  
**Author:** Greenplumwine | 👍 0

K2.6 generates excessive API calls when integrated via Claude Code, raising cost and performance concerns. Another symptom of K2.6's reasoning behavior.

### 5. [#1925] Request: Allow Switching Back to K2.5 (OPEN)
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/1925  
**Author:** herrbasan | 👍 0

Users requesting the ability to downgrade to K2.5, citing that K2.6's long thinking chains "drown out creativity" and increase hallucinations. Reflects broader community preference shift.

### 6. [#1926] Rumination Bug: Continuous Repetitive Thinking (OPEN)
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/1926  
**Author:** Xio-Shark | 👍 0

After a recent update, the model endlessly loops the same thinking output. Reproduced on v1.26—potential regression introduced in latest release.

### 7. [#1923] Feature: Stream Internal Reasoning (OPEN)
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/1923  
**Author:** ruditers | 👍 0

Request to surface model's internal reasoning incrementally rather than keeping all operations opaque. Users want to catch errors early and review reasoning steps.

### 8. [#1919] MCP Server Cannot Access content.text (OPEN)
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/1919  
**Author:** 1040536527 | 👍 0

MCP server returning JSON where content fields outside `content.text` are inaccessible in CLI. Impacts users integrating custom MCP tools.

### 9. [#1914/#1913] Installation Fails Without GitHub Access (OPEN/CLOSED)
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/1914  
**Author:** warku123 | 👍 0

Installation scripts download `uv` installer from `astral.sh`, which then fetches from GitHub Releases. Fails in regions where GitHub is blocked. A duplicate (#1913) was closed; #1914 remains open awaiting resolution.

### 10. [#53] SSL Connection Failure to api.kimi.com (CLOSED)
**URL:** https://github.com/MoonshotAI/kimi-cli/issues/53  
**Author:** comeonzhj | 👍 0

Long-standing issue on Darwin 25.0.0 with SSL/TLS failures connecting to `api.kimi.com:443`. Resurfaced with 10 comments; indicates recurring network/SSL compatibility issues.

---

## 4. Key PR Progress

### 1. [#1922] Release v1.36.0 (CLOSED)
**Author:** RealKai42  
**Summary:** Version bump PR including Claude Opus 4.7 fix and dependency updates.

### 2. [#1918] Opus 4.7 Adaptive Thinking & Extended Effort Levels (CLOSED)
**URL:** https://github.com/MoonshotAI/kimi-cli/pull/1918  
**Author:** RealKai42  
**Summary:** Added proper adaptive thinking support for Claude Opus 4.7, extended `ThinkingEffort` with new levels (`xhigh`, `max`) for newer Anthropic/OpenAI models.

### 3. [#1911] Fix Adaptive Thinking for Opus 4.7+ (OPEN)
**URL:** https://github.com/MoonshotAI/kimi-cli/pull/1911  
**Author:** sisterdong  
**Summary:** Fixes `_use_adaptive_thinking()` to support Opus 4.7 and future versions. Previously hardcoded to match only `opus-4.6`, causing Opus 4.7 to use legacy format it rejects.

### 4. [#1921] Fix Markdown Rendering Spacing (CLOSED)
**URL:** https://github.com/MoonshotAI/kimi-cli/pull/1921  
**Author:** liruifengv  
**Summary:** Resolved spacing issues in markdown rendering within the web UI.

### 5. [#1920] Fix Code Block Action Buttons (CLOSED)
**URL:** https://github.com/MoonshotAI/kimi-cli/pull/1920  
**Author:** liruifengv  
**Summary:** Restored unresponsive copy, download, and preview buttons on rendered code blocks. Issue caused by Radix Slot's `asChild` overwriting click handlers.

### 6. [#1712] Support --agent-file for kimi web (CLOSED)
**URL:** https://github.com/MoonshotAI/kimi-cli/pull/1712  
**Author:** Jesse-XIE  
**Summary:** Added `--agent-file` parameter to `kimi web` for specifying custom agent spec YAML. Propagates via `KIMI_WEB_AGENT_FILE` environment variable.

### 7. [#1701] Session Status Indicators in Web Sidebar (CLOSED)
**URL:** https://github.com/MoonshotAI/kimi-cli/pull/1701  
**Author:** Jesse-XIE  
**Summary:** Added visual dot indicators for session states: 🟢 pulsing green for busy, status indicators matching bottom bar animation.

### 8. [#1692] Handle PermissionError in Directory Listing (CLOSED)
**URL:** https://github.com/MoonshotAI/kimi-cli/pull/1692  
**Author:** Jesse-XIE  
**Summary:** Fixed `get_session_file` endpoint crash when encountering inaccessible directories (e.g., `~/.Trash` on macOS due to TCC).

### 9. [#1870] Docs: Clarify Quoted TOML Keys (CLOSED)
**URL:** https://github.com/MoonshotAI/kimi-cli/pull/1870  
**Author:** yongtenglei  
**Summary:** Documentation update clarifying that provider/model keys containing `.` must use quoted TOML keys.

### 10. [#1876] Register /btw Slash Command in Soul-Level Registry (OPEN)
**URL:** https://github.com/MoonshotAI/kimi-cli/pull/1876  
**Author:** LeonEthan  
**Summary:** Adds `/btw` as a soul-level slash command available across all execution modes (interactive shell, print, web, ACP).

---

## 5. Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

| Trend | Frequency | Details |
|-------|-----------|---------|
| **Model Control & Flexibility** | High | Users want to switch between K2.5/K2.6, adjust thinking effort, and access temperature settings. |
| **UX/UI Improvements** | Medium | Independent font sizing in VSCode, plan mode redesign, session status indicators. |
| **Project-Level Customization** | Medium | Custom `system_prompt.md` at project level; custom agent specs for web sessions. |
| **Streaming & Transparency** | Medium | Incremental reasoning output streaming to improve interactivity and error catching. |
| **Cross-Platform Compatibility** | Low | WSL2 support on Windows, installation fixes for restricted regions. |
| **MCP Integration** | Low | Better handling of MCP server message formats beyond `content.text`. |

---

## 6. Developer Pain Points

### 🔴 Critical Issues

1. **K2.6 Excessive Thinking**
   - Users report 50+ reasoning turns, 60K+ tokens per task, excessive API calls
   - Impacts cost, performance, and workflow continuity
   - Community actively requesting K2.5 rollback option

2. **API Errors (400, SSL)**
   - Recurring connection failures to `api.kimi.com`
   - Temperature validation bugs preventing API usage
   - Affects reliability in production environments

3. **Installation in Restricted Regions**
   - `uv` installer dependencies on GitHub fail in China and other regions
   - Blocks adoption for new users

### 🟡 UX Friction

4. **Opaque Reasoning**
   - Internal model thinking not visible until completion
   - Makes debugging and error catching difficult
   - Requested streaming of intermediate steps

5. **VSCode Extension Limitations**
   - No independent font size control
   - Plan mode outputs to file instead of inline chat
   - Disrupts integrated development experience

6. **Permission Errors in Web Mode**
   - `~/.Trash` and permission-restricted directories crash the web server
   - Poor handling of real-world directory structures

---

*End of Digest*  
*Generated: 2026-04-18 | Data Source: github.com/MoonshotAI/kimi-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest

## April 18, 2026

---

### 1. Today's Highlights

OpenCode released four patch versions (v1.4.8–v1.4.11) within 24 hours, focusing on stability improvements for remote workspaces, telemetry consistency across managed instances, and provider configuration robustness. The community is actively refining the LSP and config subsystems via Effect Schema migrations, with several PRs merged today addressing architectural improvements and security hardening.

---

### 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.4.11** | Fixed workspace routing so requests reach the correct instance; stopped share sync attempts for sessions never shared. |
| **v1.4.10** | Restored workspace history on connect for session catchup; passed OTEL exporter settings into managed workspaces; normalized provider metadata defaults to handle incomplete catalog data. |
| **v1.4.9** | Added LLM Gateway provider with config support and model usage reporting; limited GitHub Copilot Opus 4.7 models to medium reasoning effort; improved remote workspace reconnection with exponential backoff. |
| **v1.4.8** | Fixed crash in experimental mode; added metadata support for plugin tool execute results; showed real filenames in revert diffs; improved workspace session handling; fixed Windows `ctrl+z` terminal suspension. |

---

### 3. Hot Issues

| # | Issue | Summary | Why It Matters | Reactions |
|---|-------|---------|----------------|-----------|
| **#2242** | [Is there a way to sandbox the agent?](https://github.com/anomalyco/opencode/issues/2242) | User requests sandboxing for terminal commands to restrict file access outside current directory—similar to macOS `seatbelt` in gemini-cli/codex-cli. | Security is a top concern; 40+ upvotes indicate broad demand. | 👍 40, 💬 27 |
| **#4821** | [Add ability to unqueue messages](https://github.com/anomalyco/opencode/issues/4821) | Users cannot remove queued messages, leading to agent overcorrection and invented fixes. | Quality-of-life issue affecting daily workflows; 34 upvotes. | 👍 34, 💬 12 |
| **#16100** | [Numpad keys not working in VS Code terminal](https://github.com/anomalyco/opencode/issues/16100) | Numpad keys completely ignored in OpenCode's TUI when running inside VS Code 1.110 integrated terminal. | Impacts developers using full keyboards; 10 upvotes. | 👍 10, 💬 14 |
| **#15533** | [Auto-compaction infinite loop](https://github.com/anomalyco/opencode/issues/15533) | When auto-compaction triggers after assistant naturally ends its turn, `SessionCompaction.process()` injects synthetic message unconditionally. | Causes repeated interruptions and potential UX loops. | 👍 2, 💬 15 |
| **#3680** | [Light themes removed](https://github.com/anomalyco/opencode/issues/3680) | User questions why light themes were removed; 19 comments indicate community debate. | Visual preference for many developers. | 👍 8, 💬 19 |
| **#10661** | [TUI system theme not found on macOS](https://github.com/anomalyco/opencode/issues/10661) | System theme missing from `/theme` list; affects users with dark mode preferences. | High macOS user impact; 19 comments. | 👍 2, 💬 19 |
| **#20926** | [Theme not respecting system theme (macOS ghostty)](https://github.com/anomalyco/opencode/issues/20926) | Themes with both light/dark variants always use light regardless of system preference. | Regression affecting dark mode users. | 👍 2, 💬 7 |
| **#22862** | [Glob tool fails with WASM parsing error in WSL2](https://github.com/anomalyco/opencode/issues/22862) | `wasm-simd is not enabled` error prevents glob functionality for any pattern. | Blocks file operations for WSL2 developers. | 👍 2, 💬 7 |
| **#23200** | [Cmd+V makes exit instead of paste](https://github.com/anomalyco/opencode/issues/23200) | Pasting text triggers app exit instead; root cause identified in prop handler. | Critical macOS UX regression. | 👍 0, 💬 7 |
| **#16157** | [How are permissions applied in order?](https://github.com/anomalyco/opencode/issues/16157) | User questions whether merging permissions objects discards ordering; PR #23214 addresses this. | Security configuration clarity needed. | 👍 2, 💬 4 |

---

### 4. Key PR Progress

| PR | Title | Summary | Status |
|----|-------|---------|--------|
| **#23214** | [fix: do not merge permissions objects, merge rulesets](https://github.com/anomalyco/opencode/pull/23214) | Fixes ordering loss when merging permissions; closes #16157. | Open |
| **#23212** | [feat(tui): add terminal notifications](https://github.com/anomalyco/opencode/pull/23212) | Built-in notifications for response-ready and attention-needed events via OSC passthrough. | Open |
| **#23210** | [refactor(lsp): effectify client and server boundaries](https://github.com/anomalyco/opencode/pull/23210) | Switches LSP startup dedupe from `Map<string, Promise>` to Effect-based caching. | Open |
| **#23222** | [feat(effect-zod): add ZodPreprocess annotation](https://github.com/anomalyco/opencode/pull/23222) | Models `z.preprocess(fn, schema)` pattern—attaches pre-parse transforms before validation. | Open |
| **#23217** | [fix(install): add --no-same-owner to tar](https://github.com/anomalyco/opencode/pull/23217) | Prevents UID/GID leak from CI tarball when running install as root. | Open |
| **#23220** | [fix(project): use "/" as global project worktree when git has no commits](https://github.com/anomalyco/opencode/pull/23220) | Resolves project resolution failures for new repositories. | Open |
| **#23216** | [refactor(config): migrate Server + Layout to Effect Schema](https://github.com/anomalyco/opencode/pull/23216) | Extracts Server and Layout configs into dedicated modules with Effect Schema validation. | Merged |
| **#23213** | [fix(observability): standardize session telemetry attrs](https://github.com/anomalyco/opencode/pull/23213) | Normalizes `sessionID` to OTel-style `session.id` across logs and AI SDK telemetry. | Merged |
| **#23209** | [feat(effect-zod): translate well-known filters into native Zod methods](https://github.com/anomalyco/opencode/pull/23209) | Maps Effect Schema checks (`isInt`, `isGreaterThan`, `isPattern`) to native Zod methods. | Merged |
| **#23207** | [feat(effect-zod): translate Schema.withDecodingDefault into zod .default()](https://github.com/anomalyco/opencode/pull/23207) | Enables proper default value handling for config migration. | Merged |

---

### 5. Feature Request Trends

**Top themes emerging from 50+ issues:**

1. **Security & Sandboxing** — Strong demand for agent isolation (sandboxing terminal commands, restricting file access). Issue #2242 has 40+ upvotes.
2. **TUI/UX Polish** — Multi-window/terminal improvements: notification sounds, multi-line session titles, improved theme detection, numpad/keyboard compatibility.
3. **Provider Ecosystem** — Model mappings for GitLab Duo (Opus 4.6/4.7), Azure OpenAI compatibility, LLM Gateway integration.
4. **Session Management** — Undo/unqueue messages, session history restoration, auto-compaction behavior improvements.
5. **Performance** — High CPU on startup, file watcher timeouts, WASM parsing optimization for WSL2.
6. **Mobile/Touch** — Feature #18767 proposes mobile optimizations, indicating growing cross-platform interest.

---

### 6. Developer Pain Points

| Pain Point | Impact | Frequency |
|------------|--------|-----------|
| **macOS theme detection failures** | Users cannot switch themes; both system theme detection (#10661) and light/dark variants (#20926) broken | High |
| **Keyboard/mouse in VS Code terminal** | Numpad and Ctrl+Z behavior broken in integrated terminals; affects Windows+WSL users with image paste (#19502) | Medium |
| **Message truncation** | Agent responses cut off mid-generation, leaving tasks incomplete | Reported multiple times |
| **Permission configuration confusion** | Unclear how rules are ordered/merged; PR #23214 addresses the architectural issue | Ongoing |
| **WASM/WebAssembly limitations** | Glob tool fails in WSL2 due to `wasm-simd` disabled in browser runtime | Affects Linux devs |
| **GitLab model mapping gaps** | Opus 4.6 and 4.7 models fail to register properly | Requires provider updates |
| **Startup performance** | High CPU consumption from file watcher service timing out on large directories | New reports today |

---

*Generated from [anomalyco/opencode](https://github.com/anomalyco/opencode) activity on 2026-04-18.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-18

## Today's Highlights

The Pi project saw two micro releases (v0.67.67/68) introducing Bedrock bearer-token authentication via `AWS_BEARER_TOKEN_BEDROCK`, enabling Converse API access without local SigV4 credentials. A high-velocity bug-fixing day saw 17 merged PRs addressing streaming reliability, provider compatibility, and session corruption issues. Community demand is consolidating around multi-provider parity, improved thinking depth controls, and better extension APIs.

---

## Releases

| Version | Date | Summary |
|---------|------|---------|
| **v0.67.68** | 2026-04-18 | Patch release |
| **v0.67.67** | 2026-04-18 | Patch release |

**New Feature**: Bedrock sessions now authenticate with `AWS_BEARER_TOKEN_BEDROCK`, enabling Converse API access without local SigV4 credentials. See [docs/providers.md#amazon-bedrock](https://github.com/badlogic/pi-mono/blob/main/docs/providers.md#amazon-bedrock).

---

## Hot Issues

1. **[#1155](https://github.com/badlogic/pi-mono/issues/1155) — Add Vertex AI provider for Anthropic Claude models** *(8 comments)*
   Users on GCP cannot access Claude models via Vertex AI because `google-vertex` only supports Gemini and `anthropic-messages` uses incorrect endpoint paths. This gaps affects a significant user segment requiring Vertex AI compliance.
   ```plaintext
   Author: michaelpersonal | Created: 2026-02-01 | Updated: 2026-04-17
   ```

2. **[#3271](https://github.com/badlogic/pi-mono/issues/3271) — Allow custom session-ids (prefixed type-ids)** *(7 comments)*
   SDK users building custom agent harnesses need to pass pre-generated or custom ID generators to the SessionManager. High relevance for developers extending Pi's architecture.
   ```plaintext
   Author: konsti | Created: 2026-04-16 | Updated: 2026-04-17
   ```

3. **[#3005](https://github.com/badlogic/pi-mono/issues/3005) — Make "UPDATE AVAILABLE" message toggleable** *(7 comments, 👍2)*
   NixOS users find the yellow update banner disruptive since `npm i -g` doesn't apply to their setup. Proposal to include it in "Quiet startup" or add a dedicated setting.
   ```plaintext
   Author: gumonteilh | Created: 2026-04-10 | Updated: 2026-04-17
   ```

4. **[#3022](https://github.com/badlogic/pi-mono/issues/3022) — gemma4:31b-cloud multimodal can't 'see' images** *(6 comments, 👍2)*
   Ollama-hosted multimodal models fail to process images despite being configured as multimodal. Likely an API mapping issue in the openai-completions path.
   ```plaintext
   Author: christroutoutner | Created: 2026-04-11 | Updated: 2026-04-17
   ```

5. **[#3318](https://github.com/badlogic/pi-mono/issues/3318) — Improvements to Image Pasting** *(6 comments)*
   Models often don't understand temp-file paths for images. Proposes either prepending base64 data URI or adding a dedicated `images` field to the prompt format for broader compatibility.
   ```plaintext
   Author: danielcherubini | Created: 2026-04-17 | Updated: 2026-04-17
   ```

6. **[#3299](https://github.com/badlogic/pi-mono/issues/3299) — Add "max" thinking level for Opus 4.7 five-rung API** *(6 comments)*
   Request to extend Pi's thinking ladder to match Opus 4.7's new `max` tier, bringing parity with the upstream model's capabilities.
   ```plaintext
   Author: Krystofee | Created: 2026-04-16 | Updated: 2026-04-17
   ```

7. **[#2850](https://github.com/badlogic/pi-mono/issues/2850) — /exit command documented but not implemented** *(5 comments)*
   README documents `/exit` as a quit command but only `/quit` actually works. Simple fix, but clean documentation is important for user experience.
   ```plaintext
   Author: DogPawHat | Created: 2026-04-05 | Updated: 2026-04-17
   ```

8. **[#3344](https://github.com/badlogic/pi-mono/issues/3344) — Aborted tool calls corrupt conversation state** *(4 comments)*
   Ctrl+C during a tool call leaves the conversation permanently unusable with `tool_use` ids without corresponding `tool_result` blocks. Requires session deletion to recover.
   ```plaintext
   Author: pedrotchang | Created: 2026-04-17 | Updated: 2026-04-17
   ```

9. **[#3338](https://github.com/badlogic/pi-mono/issues/3338) — Mistral Small 4 throws "Reasoning prompt mode not enabled"** *(4 comments)*
   Error 3051 thrown when using Mistral Small 4; indicates reasoning mode configuration issue in the Mistral provider.
   ```plaintext
   Author: ouvreboite | Created: 2026-04-17 | Updated: 2026-04-17
   ```

10. **[#3186](https://github.com/badlogic/pi-mono/issues/3186) — openai-completions doesn't use sessionId/cacheRetention for prompt caching** *(4 comments)*
    Prompt caching works for `openai-responses` but not `openai-completions`, meaning direct OpenAI calls miss cache benefits.
    ```plaintext
    Author: MonkeyLeeT | Created: 2026-04-14 | Updated: 2026-04-17
    ```

---

## Key PR Progress

1. **[#3336](https://github.com/badlogic/pi-mono/pull/3336) — fix(ai): coerce stringified JSON arrays/objects in tool call arguments**
   Models like Opus 4.6 and GLM-5.1 send `edits` as JSON strings instead of parsed arrays. Validation rejected them, causing fallback to `sed`/Python. Fixed by coercing stringified arguments.

2. **[#3345](https://github.com/badlogic/pi-mono/pull/3345) — feat(agent,coding-agent): per-tool executionMode override for sequential tool execution**
   Adds optional `executionMode` to tool definitions, allowing tools to force sequential execution when UI input is involved. Closes #3274.

3. **[#3229](https://github.com/badlogic/pi-mono/pull/3229) — fix(anthropic): harden tool-call streaming and recovery** *(in progress)*
   Switches from `messages.stream()` to raw `messages.create(..., stream: true)` with non-stream fallback on mid-turn failures. Closer to Claude Code behavior.

4. **[#3346](https://github.com/badlogic/pi-mono/pull/3346) — feat(ai): add Nebius Token Factory provider**
   Adds Nebius as a built-in provider via OpenAI-compatible path with `NEBIUS_API_KEY` auth and coding-agent defaults.

5. **[#3349](https://github.com/badlogic/pi-mono/pull/3349) — feat(ai): support video and audio mimeTypes in prompt content** *(closes #3200)*
   Extends the existing `images` array to handle any media by MIME type. Routed via mimeType prefix: `image/*` → existing, `video/*` and `audio/*` → new.

6. **[#3343](https://github.com/badlogic/pi-mono/pull/3343) — feat(coding-agent): make scoped models and tree filter shortcuts configurable** *(in progress)*
   Makes scoped-models and tree filter shortcuts rebindable. Addresses issue #3326.

7. **[#1762](https://github.com/badlogic/pi-mono/pull/1762) — Expose session and tree browsing/editing to RPC protocol**
   Adds RPC coverage for session *discovery* and *tree-structured navigation* — operations the TUI uses but were missing from the protocol.

8. **[#3316](https://github.com/badlogic/pi-mono/pull/3316) — fix(coding-agent): retry on "Network connection lost" errors**
   Adds `connection.?lost` to the retryable error regex; previously only `connection.?error` and `connection.?refused` were recognized.

9. **[#3264](https://github.com/badlogic/pi-mono/pull/3264) — fix(ai): set session id headers for all OpenAI compatible responses**
   Aligns Pi with Codex by sending session headers unconditionally, fixing prompt caching for non-api.openai.com endpoints.

10. **[#2964](https://github.com/badlogic/pi-mono/pull/2964) — SSH extension: load remote context files**
   SSH extension now loads remote `AGENTS.md`/`CLAUDE.md` files during `session_start`, matching pi's built-in behavior.

---

## Feature Request Trends

Analysis of 30 issues reveals these dominant directions:

| Theme | Description | Frequency |
|-------|-------------|-----------|
| **Provider Parity** | Multi-provider support (Vertex AI, Nebius, Fireworks) matching OpenAI feature coverage | High |
| **Thinking Depth Control** | Requests for `max` thinking tier, adaptive thinking fixes (Opus 4.7) | High |
| **Media Handling** | Video/audio support, image pasting improvements, multimodal model compatibility | High |
| **Customization & UX** | Toggleable update notifications, rebindable shortcuts, session management improvements | Medium |
| **Extension API** | Per-tool execution modes, scoped model APIs, package dependencies | Medium |
| **Reliability** | Stream recovery, error handling, session corruption fixes | Ongoing |

---

## Developer Pain Points

1. **Streaming Reliability**: "Network connection lost" errors causing silent stalls and session corruption; providers like Mistral and Bedrock failing mid-stream with opaque errors.

2. **Provider Fragmentation**: Different providers handle similar features inconsistently (prompt caching, session IDs, thinking blocks) — `openai-responses` vs `openai-completions` gaps.

3. **Extension Registration Timing**: NPM package tools registered via `pi.registerTool()` appear in schema but return "Tool not found" until `/reload` is run.

4. **Image/Media Interpretation**: Models using `openai-completions` path don't understand temporary file references for images; various fixes needed for multimodal parity.

5. **Bedrock Complexity**: Multiple Bedrock issues (#3313, #3335, #3359) highlighting GovCloud support gaps, ConverseStream failures, and bearer-token configuration friction.

6. **Session State Corruption**: Ctrl+C during tool calls leaves conversations permanently unusable without manual intervention.

---

*Generated from [badlogic/pi-mono](https://github.com/badlogic/pi-mono) • 2026-04-18*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-18

---

## 1. Today's Highlights

**v0.15.0-preview.0 and v0.14.5-nightly.20260418** landed with two headline features: **complete hooks support for ACP integration** (PR #3248) and **optimized compact mode UX** covering shortcuts, settings sync, and safety improvements (PR #3100). The community is simultaneously grappling with a surge of **401 authentication errors** — multiple reports confirm that OAuth sessions are failing post-update, with several users on v0.14.5 experiencing token expiration issues even after re-authentication.

---

## 2. Releases

| Version | Key Changes |
|---|---|
| **v0.15.0-preview.0** | Complete hooks support for ACP integration; compact mode UX improvements (shortcuts, settings sync, safety) |
| **v0.14.5-nightly.20260418.418acc548** | Same features as preview, nightly build |

Both releases share the same changeset. The hooks system expansion and UX refinements signal a push toward production readiness for the ACP (AI Coding Platform) integration.

---

## 3. Hot Issues

| # | Issue | Summary | Community Signal |
|---|---|---|---|
| **#3203** | [Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203) | Proposes cutting daily free quota from 1,000 → 100 requests and phasing out free tier by 20xx | **93 comments** — fiercely debated; impacts all free-tier users |
| **#1855** | [OAuth session persists after switching to Coding Plan API key → 401](https://github.com/QwenLM/qwen-code/issues/1855) | Users who switch from OAuth to paid API keys hit authentication errors due to stale OAuth state | **11 comments**, closed after fix |
| **#3348** | [401 invalid access token or token expired](https://github.com/QwenLM/qwen-code/issues/3348) | Widespread — users on 0.14.5 getting 401 errors since yesterday | **7 comments, 7 👍** — high visibility bug |
| **#2409** | [Subagent system parity with Claude Code](https://github.com/QwenLM/qwen-code/issues/2409) | Requests Qwen Code subagent feature parity (~40-45% currently) | **6 comments, 3 👍** — strategic feature request |
| **#3144** | [Terminal scroll jumps up/down rapidly](https://github.com/QwenLM/qwen-code/issues/3144) | Scroll bar bounces 10-30 times/sec during streaming, making UI unusable | **4 comments, 1 👍** — UX regression |
| **#3403** | [API Error: 401](https://github.com/QwenLM/qwen-code/issues/3403) | Fresh 401 report on v0.12.0 | **4 comments** — extends the auth-error wave |
| **#3338** | [GLM-5.1 model hallucinations — claims no shell output when output exists](https://github.com/QwenLM/qwen-code/issues/3338) | GLM-5.1 via 智谱 API incorrectly reports empty shell output despite JSONL logs showing data | **4 comments** — model integration issue |
| **#3361** | [Agent misinterprets shell output as empty (OpenAI-compatible API)](https://github.com/QwenLM/qwen-code/issues/3361) | Similar to #3338 — git commands succeed but agent concludes output is empty | **4 comments** — likely same root cause as #3338 |
| **#3384** | [Unable to add OpenAI-compatible local LLM](https://github.com/QwenLM/qwen-code/issues/3384) | Qwen3.6-35B-A3B on VLLM at localhost:8000 fails to configure | **2 comments, 1 👍** — local model integration pain |
| **#3408** | [Reasoning History Loss](https://github.com/QwenLM/qwen-code/issues/3408) | PR #3315 fixed reasoning_content field leaking on model switch | **1 comment** — resolved regression |

**Key theme:** Authentication crises are dominating this cycle. The 401 error wave affects users across versions 0.12–0.14.5, suggesting a server-side or token-rotation issue rather than a client bug.

---

## 4. Key PR Progress

| PR | Title | Significance |
|---|---|---|
| **#3407** | [fix(cli): auto-submit on number key press in AskUserQuestionDialog](https://github.com/QwenLM/qwen-code/pull/3407) | Closes #500; aligns dialog behavior with standard tool approval — number keys now select AND submit |
| **#3388** | [feat(hooks): add prompt hook type with LLM evaluation support](https://github.com/QwenLM/qwen-code/pull/3388) | New hook type enabling AI-powered evaluation (allow/block) for security and workflow control |
| **#3214** | [feat(core): replace fdir crawler with git ls-files + ripgrep fallback](https://github.com/QwenLM/qwen-code/pull/3214) | Closes #3137; major perf fix for `@` file mention autocomplete — respects `.gitignore`, avoids full-tree rescan on every keystroke |
| **#2981** | [fix(sdk): settle pending next() promise in Stream.return()](https://github.com/QwenLM/qwen-code/pull/2981) | Fixes SDK hangs when `Stream.return()` left `next()` promise unresolved |
| **#2975** | [fix(cli): re-arm disconnected listener on rebuilt AcpBridge after crash](https://github.com/QwenLM/qwen-code/pull/2975) | Fixes second-disconnect crash recovery silently failing in `channel start`/`startAll` |
| **#2974** | [fix(channels): default dispatchMode to 'collect'](https://github.com/QwenLM/qwen-code/pull/2974) | Aligns `ChannelBase` implementation with documented contract — was defaulting to `'steer'` opposite of spec |
| **#2971** | [fix(vscode-companion): don't override cursorPosition=0](https://github.com/QwenLM/qwen-code/pull/2971) | Fixes autocomplete misfiring when cursor at position 0 |
| **#2968** | [fix(core): reorder LruCache entries on get() for falsy values](https://github.com/QwenLM/qwen-code/pull/2968) | Falsy cached values (`0`, `''`, `false`, `null`) were never promoted — subtle correctness bug |
| **#3381** | [fix(cli): reduce terminal redraw cursor movement](https://github.com/QwenLM/qwen-code/pull/3381) | Optimizes multiline redraw to reduce viewport jumping during streaming |
| **#3242** | [fix(cli): preserve startup input through full init](https://github.com/QwenLM/qwen-code/pull/3242) | Fixes #3224; early keystrokes are now captured and replayed after UI mounts |

**Open PRs to watch:** #3407 (high UX impact), #3388 (hooks expansion), #3214 (autocomplete performance).

---

## 5. Feature Request Trends

Based on issue analysis, the community is pushing in these directions:

| Theme | Evidence | Issue(s) |
|---|---|---|
| **Authentication & billing policy** | Free tier quota reduction and OAuth→API-key transitions are the #1 pain point | #3203 (93 comments), #1855, #3281 |
| **Subagent parity** | Strong demand to reach Claude Code feature equivalence | #2409 |
| **Local / self-hosted models** | Users want robust OpenAI-compatible API configuration for local LLMs | #3384 |
| **CLI UI customization** | Requests to customize/disable "thinking" quotes; add todo/task list panels | #2034, #2987 |
| **Terminal UX** | Scroll stability, vim-mode keybindings for autocomplete menus | #3144, #2561 |
| **Request/quota visibility** | Users want a clear quota overview to avoid hitting limits unexpectedly | #3267 |
| **Search tool limits** | Request to cap search tool at 150k tokens to prevent crashes | #192 |

---

## 6. Developer Pain Points

1. **Auth token failures (401 wave):** The most reported issue across all versions. Users re-authenticate but still get 401 errors, suggesting either server-side token rotation bugs or stale credential persistence in the client.

2. **Shell output misinterpretation:** Several reports confirm the agent receives shell command output but incorrectly concludes it's empty — impacts both GLM-5.1 and OpenAI-compatible APIs. Likely a tool-result parsing or streaming order issue.

3. **fdir crawler performance:** Full-tree rescan on every keystroke in `@` file mentions is slow on large repos and ignores `.gitignore`. Fix in PR #3214 addresses this.

4. **Compact mode stability:** While compact mode UX is being improved (PR #3100), terminal scroll jumping and redraw performance remain issues for users with fast streaming output.

5. **OAuth-to-API-key transition:** Switching from OAuth to a paid plan doesn't cleanly clear the OAuth session, causing confusing dual-auth-state failures.

6. **Local LLM integration friction:** Configuration of self-hosted models via OpenAI-compatible endpoints is not straightforward, with users hitting errors on vLLM and similar backends.

---

*Digest generated from github.com/QwenLM/qwen-code • 2026-04-18*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/manelsen/agents-radar).*