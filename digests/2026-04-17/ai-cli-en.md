# AI CLI Tools Community Digest 2026-04-17

> Generated: 2026-04-17 02:01 UTC | Tools covered: 8

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

**Date:** 2026-04-17
**Prepared for:** Technical Decision-Makers and Developer Teams

---

## 1. Ecosystem Overview

The AI CLI tools landscape on 2026-04-17 reveals a maturing but fragmented ecosystem. Major providers (OpenAI, Google, GitHub) maintain active release cadences with rapid patch iteration, while open-source alternatives (OpenCode, Pi) demonstrate strong community-driven development velocity with 20-30+ PRs merged per cycle. The most significant cross-tool theme is **authentication and token management reliability**—multiple tools report 401 errors, OAuth session failures, and rate-limiting infrastructure gaps. Memory and session stability remain persistent challenges for long-running agent workflows, while remote development capabilities and multi-agent coordination are emerging as competitive differentiators.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Hot Issues | Key PR Activity | Community Sentiment |
|------|----------------|------------|------------------|---------------------|
| **Claude Code** | No data (summary failed) | — | — | — |
| **OpenAI Codex** | 2 alpha releases (v0.122.0-alpha.3, alpha.5) | 10 issues tracked | 10 PRs in progress | Positive; platform expansion valued |
| **Gemini CLI** | None | 10 issues | 10 PRs including P1 optimizations | Focused on reliability |
| **Copilot CLI** | 3 patches (v1.0.29–31) | 11 issues; rate-limiting dominant | None updated | Frustrated; rate limits blocking work |
| **Kimi Code CLI** | None | 6 issues; thinking visibility regression | 5 PRs merged | Negative; regression complaints |
| **OpenCode** | 1 release (v1.4.7) | 10 issues; memory megathread active | 10 PRs including compaction refactor | Concerned; memory issues unresolved |
| **Pi** | 3 releases (v0.67.4–6) | 10 issues | 29 PRs merged, 50 issues updated | Stable; terminal compatibility improving |
| **Qwen Code** | 1 nightly release | 7 issues; OAuth controversy + 401 errors | 10 PRs including i18n, async features | **Negative; free tier backlash** |

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities:

| Feature Direction | Tools Affected | Specific Needs |
|-------------------|----------------|----------------|
| **Remote/Cloud Development** | Codex, Copilot CLI | VS Code Remote-style SSH executor, cloud environment support |
| **Opus 4.7 / Claude 4.7 Compatibility** | Kimi Code, Pi, Copilot CLI, OpenCode | Adaptive thinking fixes, reasoning effort mapping, context window parity (1M) |
| **Memory & Session Compaction** | OpenCode, Gemini CLI, Codex | Long-session context preservation, configurable tail-turns, fail-fast on overflow |
| **Subagent / Multi-Agent Coordination** | OpenCode, Gemini CLI, Qwen Code, Codex | Dynamic model selection per subagent, awareness of approval modes, background execution |
| **Terminal Compatibility** | Pi, Gemini CLI | Zellij Shift+Enter, tmux CSI-u sequences, Kitty OSC 8 hyperlinks |
| **Permission Persistence** | Gemini CLI, Kimi Code | Cross-session approval storage; avoid repeated prompts |
| **Auth/Session Reliability** | Qwen Code, Copilot CLI, Codex | Token revocation, 401 error handling, OAuth state persistence |
| **Model Discovery Parity** | Copilot CLI, Codex | CLI vs. IDE model list consistency, ACP vs. interactive parity |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|--------------|--------------|-------------------|
| **OpenAI Codex** | Rust SDK architecture, sandbox security, enterprise workflows | Developers requiring remote/cloud dev, security-conscious teams | Modular Rust refactoring; bubblewrap/Landlock sandbox hardening |
| **Gemini CLI** | Subagent stability, startup resilience, fail-fast behavior | Reliability-focused developers, large codebase users | Performance optimization (skip redundant routing, bundled RipGrep) |
| **Copilot CLI** | Rate-limit management, VS Code parity | GitHub ecosystem users needing model flexibility | Aggressive retry logic (needs improvement); MCP server defaults |
| **Kimi Code CLI** | Thinking/reasoning visibility, step limits | Power users who value reasoning chain transparency | Increased max_steps_per_turn (100→500); adaptive thinking for Opus 4.7 |
| **OpenCode** | Memory management, local model support, multi-tenant isolation | Local/LM-studio users, multi-tenant server deployments | Compaction refactor, Vercel sandbox substrate, Ollama/Gemma fixes |
| **Pi** | Terminal compatibility, multi-provider flexibility | Cross-terminal users (Zellij, tmux, Kitty), GCP/AWS users | Interactive widgets, Bearer token Bedrock auth, RPC transport flexibility |
| **Qwen Code** | i18n, async operations, background subagents | Chinese-market developers, automation-heavy workflows | ACP hooks, dual-output sidecar mode, Agent Team feature |

---

## 5. Community Momentum & Maturity

**Most Active Development:**
- **Pi** — 29 PRs merged, 50 issues updated in 24h. Highest velocity; strong terminal protocol expertise.
- **OpenCode** — Continuous releases; memory megathread (#20695) with 56 comments signals mature community engagement.

**Rapidly Iterating Vendors:**
- **OpenAI Codex** — Alpha release cadence every 24-48h; architectural refactoring toward modular Rust.
- **Copilot CLI** — Three rapid patches (v1.0.29–31) indicate responsive but reactive maintenance.
- **Qwen Code** — Nightly releases; however, free tier controversy may dampen community trust.

**Struggling with Critical Issues:**
- **Qwen Code** — 401 authentication failures affecting all platforms, plus free tier policy backlash (#3203: 83 comments).
- **Kimi Code CLI** — Visible regression in thinking process (#1865: 11 comments) contradicts user expectations.
- **Copilot CLI** — Rate-limiting complaints (#2756, #2760, #2768) suggest infrastructure gaps.

**Stable but Feature-Constrained:**
- **Gemini CLI** — Active development but low community engagement (0-6 comments per issue); fail-fast RipGrep issue unresolved.

---

## 6. Trend Signals

### Critical for Decision-Makers

1. **Auth Infrastructure is Fragile** — Multiple tools (Qwen Code, Copilot CLI, Codex) experiencing token/session failures. Organizations relying on these tools should implement re-auth fallback strategies.

2. **Memory Management is Unsolved** — OpenCode's "Memory Megathread" (56 comments) and Gemini's subagent recovery issues indicate no tool has yet delivered reliable long-session stability. This remains the top blocker for production agent workflows.

3. **Rate-Limiting Infrastructure Gaps** — Copilot CLI's aggressive retry loop (20+/minute) worsens 429 scenarios. This affects billing-heavy Pro+ users and signals need for exponential backoff standards across the ecosystem.

### Emerging Opportunities

4. **Remote Development is a Major Gap** — Codex issue #10450 (555 👍) confirms strong demand for SSH/cloud dev parity with VS Code Remote. First-mover advantage available.

5. **Multi-Model Support Fragmentation** — Model picker inconsistencies (CLI vs. IDE, ACP vs. interactive) create friction. Unified model discovery APIs would benefit the ecosystem.

6. **Terminal Protocol Expertise Required** — Pi's deep Zellij/tmux/Kitty compatibility work suggests terminal-level integration is a moat. Organizations should invest in supporting CSI-u, OSC 8, and Kitty protocol features.

### Developer Action Items

| Priority | Recommendation |
|----------|----------------|
| **High** | Audit token refresh logic if using Qwen Code or Copilot CLI in production |
| **High** | Implement session checkpointing for long-running OpenCode/Gemini workflows |
| **Medium** | Evaluate Pi for multi-provider flexibility if AWS Bedrock or GCP Vertex required |
| **Medium** | Monitor OpenAI Codex's remote development PRs for enterprise workflow opportunities |
| **Low** | Watch Qwen Code's free tier resolution before committing development effort |

---

*Report generated from community digest data on 2026-04-17. Tools without available data (Claude Code) excluded from comparative analysis.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

*Data as of 2026-04-17 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following Skills (PRs) have generated the most community attention, based on discussion activity, update frequency, and cross-referencing with related issues:

| Rank | PR # | Skill Name | Author | Status | Key Focus |
|------|------|-----------|--------|--------|-----------|
| 1 | **#514** | document-typography | PGTBoos | OPEN | Typographic quality control for AI-generated docs |
| 2 | **#83** | skill-quality-analyzer & skill-security-analyzer | eovidiu | OPEN | Meta skills for evaluating other skills |
| 3 | **#486** | odt (OpenDocument) | GitHubNewbie0 | OPEN | ODT/ODS creation, filling, and HTML parsing |
| 4 | **#723** | testing-patterns | 4444J99 | OPEN | Comprehensive testing stack coverage |
| 5 | **#806** | sensory (macOS automation) | AdelElo13 | OPEN | Native AppleScript automation |
| 6 | **#210** | frontend-design improvements | justinwetch | OPEN | Skill clarity and actionability |
| 7 | **#374** | x402 BSV micropayments | Calgooon | OPEN | AI service payments via micropayment protocol |
| 8 | **#154** | shodh-memory | varun29ankuS | OPEN | Persistent context across sessions |

### Discussion Highlights

- **#514 (document-typography):** Addresses universal pain points in AI document generation—orphans, widows, and numbering misalignment. The PR has attracted cross-references from the document-handling ecosystem (see related fixes #541, #538).

- **#83 (skill-quality-analyzer):** Proposes a meta-skill framework evaluating Skills across five dimensions (Structure, Documentation, Security, etc.). Represents the community's push toward skill quality standards.

- **#486 (ODT skill):** Responds to demand for open-standard document support beyond proprietary formats. Notable for its ISO-standard alignment and cross-format conversion capabilities.

- **#723 (testing-patterns):** Covers the full testing stack—from philosophy (Testing Trophy) to unit, component, and API testing. Positioned as a missing piece in the current skills ecosystem.

- **#806 (sensory):** Proposes replacing fragile screenshot-based automation with native AppleScript. Two-tier permission model addresses both usability and security concerns.

**🔗 GitHub Links:**
- https://github.com/anthropics/skills/pull/514
- https://github.com/anthropics/skills/pull/83
- https://github.com/anthropics/skills/pull/486
- https://github.com/anthropics/skills/pull/723
- https://github.com/anthropics/skills/pull/806

---

## 2. Community Demand Trends

Issues analysis reveals five dominant themes representing unmet community needs:

### 🔴 Critical Infrastructure Needs
- **Skills persistence & sharing:** Users report losing skills entirely (#62), with 10 comments making it the most-discussed issue. Current workaround requires manual re-upload, exposing a core UX gap.
- **Organization-wide sharing:** #228 (4 comments, 5 👍) requests native org-level skill libraries—currently users must manually zip/share via Slack/Teams.

### 🟡 Quality & Validation Gaps
- **skill-creator best practices:** #202 (8 comments) critiques the creator skill for being "documentation rather than operational," undermining token efficiency.
- **Eval pipeline failures:** #556 (5 comments, 6 👍) reports 0% skill trigger rate in `run_eval.py`—a critical blocker for skill validation.

### 🟢 Platform Expansion
- **AWS Bedrock parity:** #29 (4 comments) highlights that skills don't work with Bedrock endpoints, limiting enterprise adoption.
- **MCP integration:** #16 (4 comments) proposes exposing Skills as MCPs for standardized API signaling.

### 🔵 Security & Trust
- **Namespace impersonation:** #492 (4 comments, 2 👍) flags that community skills distributed under `anthropic/` namespace create trust boundary vulnerabilities.

### 🟣 Format Support Gaps
- **Open standards:** ODT (#486), improved DOCX handling (#541), and PDF case-sensitivity fixes (#538) all indicate demand for robust document format coverage.

**🔗 Key Issue Links:**
- https://github.com/anthropics/skills/issues/62
- https://github.com/anthropics/skills/issues/228
- https://github.com/anthropics/skills/issues/202
- https://github.com/anthropics/skills/issues/556

---

## 3. High-Potential Pending Skills

These PRs show active engagement (multiple updates, recent activity, or linking to high-priority issues) and are candidates for near-term merging:

| PR # | Skill | Author | Last Update | Strategic Value |
|------|-------|--------|-------------|-----------------|
| **#541** | fix(docx): prevent tracked change w:id collision | Lubrsy706 | 2026-04-16 | Fixes document corruption—blocks many document workflows |
| **#539** | fix(skill-creator): YAML validation | Lubrsy706 | 2026-04-16 | Prevents silent YAML failures in skill creation |
| **#538** | fix(pdf): case-sensitive references | Lubrsy706 | 2026-04-16 | Resolves cross-platform file loading issues |
| **#509** | docs: add CONTRIBUTING.md | narenkatakam | 2026-03-19 | Addresses community health metrics gap (#452)—low effort, high impact |
| **#181** | SAP-RPT-1-OSS predictor | amitlals | 2026-03-16 | Enterprise analytics integration—aligns with #29's Bedrock theme |
| **#521** | record-knowledge | LevNas | 2026-03-09 | Addresses #62's skills-disappearing problem via session persistence |

**Note:** PR #486 (ODT skill) has the most recent update (2026-04-14), suggesting active review.

**🔗 GitHub Links:**
- https://github.com/anthropics/skills/pull/541
- https://github.com/anthropics/skills/pull/539
- https://github.com/anthropics/skills/pull/538
- https://github.com/anthropics/skills/pull/509

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for document-format robustness and persistent cross-session memory—skills that solve AI document generation's typographic and continuity problems, respectively, while infrastructure gaps in sharing, validation, and enterprise deployment remain the ecosystem's primary blockers.**

---

*Report generated from github.com/anthropics/skills community activity (50 PRs, 50 Issues analyzed). All PRs listed remain OPEN as of 2026-04-17.*

---

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest

## April 17, 2026

---

### 1. Today's Highlights

The Codex project continues rapid iteration with two new Rust SDK alpha releases (v0.122.0-alpha.3 and alpha.5). Community engagement remains high with several issues resolved—including the long-standing macOS Intel support request and Control-F cursor regression—while new discussions around sandbox security, remote development capabilities, and Windows integration dominate the tracker.

---

### 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [rust-v0.122.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.5) | Alpha | Latest pre-release in the Rust SDK series |
| [rust-v0.122.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.122.0-alpha.3) | Alpha | Second alpha in recent 24h window |

---

### 3. Hot Issues

| # | Title | Author | 👍 | 💬 | Status | Why It Matters |
|---|-------|--------|---|---|--------|----------------|
| [#10450](https://github.com/openai/codex/issues/10450) | Remote Development in Codex Desktop App | pocca2048 | 555 | 134 | Open | One of the most upvoted requests; users want VS Code Remote-style support to leverage remote/cloud development environments. Indicates demand for enterprise/advanced workflows. |
| [#10410](https://github.com/openai/codex/issues/10410) | macOS Intel (x86_64) support | GGBondBlueWhale | 285 | 187 | **Closed** | Major accessibility win; legacy Intel Mac users finally get native desktop app support. |
| [#11325](https://github.com/openai/codex/issues/11325) | Manual /compact command in Codex app | Khang5687 | 145 | 54 | Open | App/CLI parity issue; users want TUI commands available in the desktop app, reflecting fragmented feature delivery. |
| [#8648](https://github.com/openai/codex/issues/8648) | Codex replies to earlier messages instead of latest | BobbyWang0120 | 34 | 42 | Open | Core UX bug affecting conversation coherence—model occasionally responds to wrong message, degrading trust. |
| [#16088](https://github.com/openai/codex/issues/16088) | WSL: empty .codex file left behind | aprendendo-codex | 56 | 19 | Open | Sandbox cleanliness regression; affects developers using WSL with Codex, potentially polluting workspaces. |
| [#13018](https://github.com/openai/codex/issues/13018) | Allow to delete threads | CharlesIC | 47 | 8 | Open | Missing thread lifecycle management; users forced to archive instead of permanently removing old conversations. |
| [#13822](https://github.com/openai/codex/issues/13822) | macOS Control-F cursor movement broken | SoraTakai | 12 | 27 | **Closed** | Keyboard shortcut regression fixed; demonstrates active macOS regression tracking. |
| [#18069](https://github.com/openai/codex/issues/18069) | apply_patch fails with use_legacy_landlock=true | msublee | 7 | 5 | Open | Sandbox regression in v0.121.0 causing workspace edit failures; affects Linux users relying on legacy landlock. |
| [#17880](https://github.com/openai/codex/issues/17880) | Recursive Context Poisoning (Cloudflare/WAF) | AzurePy-0x | 0 | 9 | Open | ChatGPT Plus integration breaking; persistent history loss and false rate limits suggest auth flow instability. |
| [#17649](https://github.com/openai/codex/issues/17649) | File links in VS Code extension chat not working | alexchexes | 8 | 8 | Open | VS Code extension regression—clickable file references broken, disrupting developer workflow. |

---

### 4. Key PR Progress

| # | Title | Author | Focus | Significance |
|---|-------|--------|-------|--------------|
| [#18244](https://github.com/openai/codex/pull/18244) | Split codex session modules | pakrym-oai | Refactoring | Modularizes session handling into `session.rs`, `mcp.rs`, `turn_context.rs`, `review.rs`—cleaner architecture. |
| [#18249](https://github.com/openai/codex/pull/18249) | Move codex module under session | pakrym-oai | Refactoring | Relocates core codex module to `core/src/session`; removes indirection via `#[path]`. |
| [#18190](https://github.com/openai/codex/pull/18190) | Add `/side` conversations | etraut-openai | TUI Feature | Introduces ephemeral side conversations without interrupting main workflow—improves multitasking UX. |
| [#18182](https://github.com/openai/codex/pull/18182) | Handle alternate plugin manifest paths | xl-openai | Plugins | Standardizes plugin manifest discovery across installs, skill names, and reads. |
| [#18213](https://github.com/openai/codex/pull/18213) | Add skill metadata budget handling | mzeng-openai | Context Management | Caps skill metadata at 1% of context window; prevents overflow while prioritizing high-value scopes. |
| [#17713](https://github.com/openai/codex/pull/17713) | Add opt-in provider runtime abstraction | celia-oai | Provider Model | New `codex-model-provider` crate wraps `ModelProviderInfo` in trait object for cleaner extensibility. |
| [#17825](https://github.com/openai/codex/pull/17825) | Revoke ChatGPT tokens on logout | sashank-oai | Auth | Proper token revocation via AuthAPI before clearing local state—security hardening. |
| [#17862](https://github.com/openai/codex/pull/17862) | Stream apply_patch changes | akshaynathan | UX | Enables progress UI during file writes; doesn't yet support function call mode. |
| [#17734](https://github.com/openai/codex/pull/17734) | Reserve missing top-level .git at runtime | evawong-oai | Security | Prevents `git init` inside bubblewrap from bypassing sandbox filesystem controls (Bugcrowd #f5e108eb). |
| [#15977](https://github.com/openai/codex/pull/15977) | Enforce exact deny-read paths | viyatb-oai | Sandbox | Makes `FileSystemSandboxPolicy` deny-read entries enforceable in core execution paths. |

---

### 5. Feature Request Trends

Analyzing the top Issues and PRs reveals these dominant themes:

1. **Platform Expansion** — Remote development (#10450, 555 👍), macOS Intel (#10410), Android/Termux support (#17787), multi-window on macOS (#12773)
2. **CLI/App Feature Parity** — The `/compact` command (#11325), thread deletion (#13018), and TUI improvements requested across surfaces
3. **Enterprise/Advanced Workflows** — SSH executor (#9923), automation permissions (#18247), cross-repo plugin sources (#18017)
4. **Keyboard & Navigation** — Better thread navigation (#17536), terminal output viewing (#13858)
5. **Auth & Integration** — Token revocation (#17825), custom model support (#17899), skill delegation (#18193)

---

### 6. Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Windows instability** | High | Issues #16088, #14461, #17322, #17244, #17390, #17649 all impact Windows users with regressions and connection failures |
| **App/CLI feature gaps** | High | Multiple requests for `/compact` parity, thread deletion, and command access in the desktop app |
| **WSL compatibility** | Medium | Sandbox file leaks, startup failures, and WSL-specific behaviors causing friction |
| **Auth flow failures** | Medium | Rate limit false positives (#8628), Cloudflare CAPTCHA loops (#17880), token management confusion |
| **Sandbox regressions** | Medium | v0.121.0 breaking `apply_patch` with landlock (#18069), DNS resolution in automations (#16782) |
| **Keyboard shortcuts** | Low | Control-F regression (#13822), general shortcut inconsistency across platforms |
| **VS Code extension drift** | Medium | Unstable file links (#17649), UI placement volatility (#18218), diff rendering (#17308) |

---

*Generated from [github.com/openai/codex](https://github.com/openai/codex) activity on 2026-04-17.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-17

## 1. Today's Highlights

The Gemini CLI community is actively addressing startup latency and subagent stability. A critical issue (#25323) causing 2+ minute delays when RipGrep fails to download is drawing significant attention, alongside multiple PRs targeting subagent topic updates and shell command fixes. New feature work includes Gemma 4 model support (#25560), hierarchical .env loading (#25160), and performance optimizations for model routing classification (#25554).

## 2. Releases

**No new releases in the last 24 hours.**

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|---------------|-------------------|
| [#25323](https://github.com/google-gemini/gemini-cli/issues/25323) | Failing to download RipGrep should not permanently slow down CLI startup | Currently blocks startup for 2+ minutes on network failures. Community wants fail-fast behavior and bundled RipGrep. | 6 comments, 0 👍 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST-aware file reads, search, and mapping | Epic tracking whether AST-aware tools can reduce token noise and misaligned reads, improving turn efficiency. | 5 comments, 1 👍 |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | CLI keeps asking for permissions on the same file | Permissions not persisting across sessions creates friction, especially for repeated operations. | 3 comments, 0 👍 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution gets stuck with "Waiting input" after completion | Blocks user workflow when simple commands finish; affects reliability of agent actions. | 2 comments, 2 👍 |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | Hides interruptions—subagent claims success despite hitting turn limits, masking failures. | 2 comments, 2 👍 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores settings.json overrides (e.g., maxTurns) | Configuration overrides don't apply to Browser Agent, breaking user expectations. | 2 comments, 0 👍 |
| [#25216](https://github.com/google-gemini/gemini-cli/issues/25216) | Gemini failed to open in temporary path A:\ | `EISDIR` error on certain paths shows edge-case handling gaps in file operations. | 1 comment, 0 👍 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | CLI encounters 400 error with > 128 tools | Tool overload causes API failures; need smarter tool scoping strategies. | 0 comments, 0 👍 |
| [#24943](https://github.com/google-gemini/gemini-cli/issues/24943) | Clarify parallel tool call layouts | UI grouping of parallel vs. auto-approved tool calls needs clearer visual distinction. | 0 comments, 0 👍 |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | Subagents Awareness of Active Approval Modes | Subagents lack context on Plan/Auto-Edit modes, leading to tool calls that violate mode constraints. | 1 comment, 1 👍 |

## 4. Key PR Progress

| # | Title | Status | Significance |
|---|-------|--------|---------------|
| [#25567](https://github.com/google-gemini/gemini-cli/pull/25567) | Disable topic updates for subagents | OPEN | Eliminates topic call errors when subagents attempt updates to missing topics. |
| [#25498](https://github.com/google-gemini/gemini-cli/pull/25498) | feat(cli): add streamlined `gemini gemma` local model setup | OPEN (P1) | New command for local model management and LiteRT server log viewing. |
| [#25560](https://github.com/google-gemini/gemini-cli/pull/25560) | Add support for Gemma 4 model | OPEN | Brings `gemma-4-26b-a4b-it` to CLI UI and Agent Control Protocol. |
| [#25160](https://github.com/google-gemini/gemini-cli/pull/25160) | feat: support hierarchical .env file loading | OPEN | Mirrors `settings.json` multi-scope behavior; allows project-level `.gemini/.env` to load properly. |
| [#25554](https://github.com/google-gemini/gemini-cli/pull/25554) | perf(core): skip model routing classification when redundant | OPEN (P1) | Optimization avoids classification when both `pro` and `flash` tiers resolve to same model. |
| [#25545](https://github.com/google-gemini/gemini-cli/pull/25545) | security: improve dangerous command detection for rm | OPEN | Robust `rm` detection regardless of path qualification or flag ordering. |
| [#25256](https://github.com/google-gemini/gemini-cli/pull/25256) | feat: detect new files in @ recommendations with watcher-based updates | OPEN (P1) | Watcher-based refresh for `@` suggestions avoids full recrawl; gated behind `context.fileFiltering.enableFileWatcher`. |
| [#25426](https://github.com/google-gemini/gemini-cli/pull/25426) | feat(ci): revive bundling and unleash 16-core test speed | OPEN | Artifact-centric CI and modernized test infrastructure for parallel execution. |
| [#25537](https://github.com/google-gemini/gemini-cli/pull/25537) | fix(cli): use newline in shell command wrapping to avoid breaking heredocs | OPEN | Fixes heredoc commands ending with `EOF` delimiter by avoiding appended semicolon. |
| [#25338](https://github.com/google-gemini/gemini-cli/pull/25338) | fix(core): allow explicit write permissions to override governance file protections | CLOSED | Explicit write allowances now correctly take precedence for `.git` in sandboxes. |

## 5. Feature Request Trends

Based on the full issue set, the following themes dominate community requests:

1. **Subagent Intelligence & Safety**
   - Subagent awareness of approval modes (#23582)
   - Destructive behavior discouragement (#22672)
   - Tool call rejection handling (#23897)
   - Memory routing: global vs. project (#22819)

2. **Startup & Network Resilience**
   - Fail-fast on RipGrep download failures (#25323)
   - SSH session detection helpers (#24546)
   - Robust file path handling for edge cases (#25216)

3. **Configuration & Persistence**
   - Hierarchical .env loading (#25160)
   - Settings.json override support for Browser Agent (#22267)
   - Priority API request settings (#25555)

4. **UX Polish**
   - Parallel tool call layout clarity (#24943)
   - Scroll stability for long chats (#24470)
   - Terminal refresh after external editor exit (#24935)

5. **Model & Tooling Improvements**
   - Gemma 4 model support (#25560)
   - AST-aware codebase mapping (#22745, #22746)
   - Behavioral evaluation for subagents (#24353)

## 6. Developer Pain Points

The community's recurring frustrations center on:

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Repeated permission prompts** | #24916: Same file permissions requested repeatedly | High |
| **Shell command hangs** | #25166: Commands finish but UI shows "Awaiting input" | High |
| **RipGrep startup delays** | #25323: 2+ minute waits on network failures | High |
| **Settings override failures** | #22267: Browser Agent ignores `settings.json` | Medium |
| **Tool overload API errors** | #24246: 400 errors with >128 tools | Medium |
| **Heredoc breakage** | #25537: Shell wrapping breaks commands with `EOF` | Medium |
| **Workspace policy confusion** | #24367: Project-level policies disabled without clear docs | Low |

**Recommended action items for maintainers:**
1. Prioritize fail-fast logic for RipGrep download failures (#25323)
2. Investigate shell command completion signaling (#25166)
3. Audit permission persistence across sessions (#24916)
4. Document current limitations of project-level policies (#24367)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-04-17 | **Repository:** github.com/github/copilot-cli

---

## 1. Today's Highlights

Three patch releases (v1.0.29–v1.0.31) shipped in rapid succession addressing UI rendering fixes, feedback URL corrections, and environment discovery flags. However, the community's attention is shifting toward a surge of rate-limiting complaints—with 7+ issues opened in the past 48 hours—and requests for Claude Opus 4.7 with 1M context parity.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.31** | 2026-04-16 | Fixed prompt frame rendering issues on Windows and Ubuntu terminals |
| **v1.0.30** | 2026-04-16 | Corrected feedback form links to proper repository; `/undo` now shows explanatory message when unavailable; plugin skills/commands properly discovered via `skills.discover`; Added `/statusline` command |
| **v1.0.29** | 2026-04-16 | Remote MCP server config now defaults to HTTP when type omitted; cursor blink maintains stable width; Added `--list-env` flag for prompt mode diagnostics |

**Impact:** v1.0.30 notably resolved the long-standing `/feedback` 404 bug that frustrated users filing bug reports.

---

## 3. Hot Issues

| # | Issue | Area | Why It Matters | Community Reaction |
|---|-------|------|----------------|-------------------|
| **#1703** | [Copilot CLI does not list all org-enabled models while VS Code Copilot does](https://github.com/github/copilot-cli/issues/1703) | Models | Feature parity gap—CLI users see fewer models despite same org settings. Example: Gemini 3.1 Pro unavailable. | 33 👍, 20 comments |
| **#2725** | [GPT-5.4 /model picker hides Extra High even though xhigh still works](https://github.com/github/copilot-cli/issues/2725) | Models | Inconsistent UI: effort levels missing from picker despite working in practice. | 14 👍, 13 comments |
| **#2760** | [Implement proper HTTP retry logic for 429 responses](https://github.com/github/copilot-cli/issues/2760) | Networking | Aggressive retry loop (20+/minute) worsens rate-limit scenarios. Feature request for exponential backoff. | 1 👍, 2 comments |
| **#2756** | [Rate limit triggered again immediately after retry wait time](https://github.com/github/copilot-cli/issues/2756) | Models | Rapid re-triggering after waiting—blocks workflow continuity. | 1 👍, 5 comments |
| **#2754** | [Rate limiting causing autopilot to malfunction](https://github.com/github/copilot-cli/issues/2754) | Agents | Autopilot becomes unusable due to rate limits; users may not exhaust billing allowance. | 3 👍, 1 comment |
| **#2768** | [Unreasonable rate limit reached quickly after updating to v1.0.29 (Pro+)](https://github.com/github/copilot-cli/issues/2768) | Models | Pro+ subscribers experiencing early exhaustion post-update. | 0 👍, 2 comments |
| **#1464** | [Skills beyond alphabetical position ~32 appear unreachable](https://github.com/github/copilot-cli/issues/1464) | Plugins | Token limit truncation silently drops skills 33+—custom skills may never be selected. | 3 👍, 2 comments |
| **#2778** | [When is /btw from Claude Code coming to Copilot?](https://github.com/github/copilot-cli/issues/2778) | Context-Memory | Users want instant context-aware queries without session pollution. | 0 👍, 1 comment |
| **#2785** | [Support 1M context window for Claude Opus 4.7](https://github.com/github/copilot-cli/issues/2785) | Models | Parity with Claude Code—1M context not exposed in CLI despite availability. | 0 👍, 0 comments |
| **#2782** | [ACP session.create rejects claude-opus-4.7 despite interactive path supporting it](https://github.com/github/copilot-cli/issues/2782) | Non-Interactive | External orchestrators cannot use Opus 4.7 via ACP, blocking integrations. | 0 👍, 0 comments |

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

---

## 5. Feature Request Trends

Based on issue analysis, the community is rallying around these strategic directions:

| Theme | Frequency | Representative Issues |
|-------|-----------|----------------------|
| **Advanced Rate-Limit Handling** | High | #2712, #2756, #2760, #2768, #2754 — requests for smarter backoff, longer windows, or tiered limits |
| **Model Parity & Discovery** | High | #1703, #2725, #2785, #2782 — users want feature parity with VS Code, Claude Code, and ACP |
| **Skills/Plugin Scalability** | Medium | #1464, #2314, #2784 — token budgets and naming conventions causing silent failures |
| **Context Memory Persistence** | Medium | #2778, #1740 — desire for lightweight, non-destructive context queries |
| **UX Polish** | Medium | #2777, #2776, #2771 — terminal UI, keyboard shortcuts, status line improvements |
| **Security & Config** | Low | #2783, #1750, #2714 — OAuth token storage, XDG compliance, plugin toggling |

---

## 6. Developer Pain Points

1. **Rate Limits Hit Hard & Fast**
   - Multiple Pro+ subscribers report exhausting limits within minutes of normal use (#2756, #2768). The aggressive retry loop (#2760) exacerbates the problem.

2. **Skills System Unreliable at Scale**
   - Token budgets silently truncate skills beyond position 32 (#1464, #2314). File naming bugs cause instruction files to be silently dropped (#2784).

3. **Model Availability Inconsistencies**
   - CLI vs. VS Code model lists diverge (#1703). Model picker UI doesn't reflect actual capabilities (#2725). ACP rejects models available interactively (#2782).

4. **Terminal UI Regressions**
   - Agent names disappeared in v1.0.31 (#2777). Ugly status bars appeared in v1.0.30 (#2771). Shift+Enter behavior surprises users (#2776).

5. **Configuration Gaps**
   - No way to toggle plugins without uninstalling (#2714). Session directory persistence requested (#1740). XDG convention violated (#1750).

---

*Generated from github.com/github/copilot-cli issue and release data*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest

## 2026-04-17

---

### 1. Today's Highlights

The Kimi Code CLI project saw significant developer-facing activity with two PRs merging to improve core functionality: `max_steps_per_turn` has been increased from 100 to 500 to support longer agent runs, and a fix ensures the loading spinner displays consistently during all active turn gaps. Meanwhile, the community is actively discussing a regression where the "thinking" process appears to have been removed, with 11 comments debating the impact on user experience and safety.

---

### 2. Releases

**No new releases in the last 24 hours.**

The last release remains **v1.34.0**. Users experiencing issues should verify their version via `kimi --version`.

---

### 3. Hot Issues

| # | Title | Author | Status | Comments | Link |
|---|-------|--------|--------|----------|------|
| 1865 | [bug] thinking的过程为什么没了？这不纯纯负优化吗 | xueguoqing01 | OPEN | 11 | [#1865](https://github.com/MoonshotAI/kimi-cli/issues/1865) |
| 1903 | [bug] Error code: 400 | federicomalagoni | OPEN | 4 | [#1903](https://github.com/MoonshotAI/kimi-cli/issues/1903) |
| 1378 | [bug] JSON parsing error when tool call arguments contain control characters | AlejandroEsquivel | CLOSED | 3 | [#1378](https://github.com/MoonshotAI/kimi-cli/issues/1378) |
| 1910 | [bug] idea使用cli无任何响应 | 18514098548 | OPEN | 1 | [#1910](https://github.com/MoonshotAI/kimi-cli/issues/1910) |
| 1897 | [bug] Web UI hangs indefinitely when an MCP server fails to connect | lsdxtc | OPEN | 1 | [#1897](https://github.com/MoonshotAI/kimi-cli/issues/1897) |
| 1867 | [enhancement] --yolo should not auto-approve plans in Plan Mode | mechiland | OPEN | 1 | [#1867](https://github.com/MoonshotAI/kimi-cli/issues/1867) |

**Selected Highlights:**

- **#1865 — "Thinking process gone?"** The most active issue this period, with 11 comments expressing frustration that v1.33.0 removed the visible thinking/reasoning process. Users describe this as a "negative optimization" that reduces trust and safety. The Chinese-language issue highlights that seeing the model's reasoning was a key feature for power users.

- **#1903 — Error code 400** Reporter on macOS with `kimi-for-coding` model receives HTTP 400 errors, indicating a potential API compatibility issue in v1.34.0. This is actionable for users experiencing similar failures.

- **#1897 — Web UI MCP Server Hang** When an MCP server is unreachable during `kimi web`, the backend crashes with `MCPRuntimeError` while the frontend shows an infinite spinner. This represents a poor failure mode that should gracefully degrade.

- **#1867 — Feature Request: Separate Yolo from Plan Approval** The `--yolo` flag currently auto-approves plans in Plan Mode, conflating tool execution approval with plan review. The request seeks to decouple these for safer production use.

---

### 4. Key PR Progress

| # | Title | Author | Status | Link |
|---|-------|--------|--------|------|
| 1911 | fix(kosong): support adaptive thinking for Opus 4.7+ models | sisterdong | OPEN | [#1911](https://github.com/MoonshotAI/kimi-cli/pull/1911) |
| 1909 | fix(shell): show moon spinner fallback during all active turn gaps | RealKai42 | CLOSED | [#1909](https://github.com/MoonshotAI/kimi-cli/pull/1909) |
| 1908 | feat(core): increase default max_steps_per_turn from 100 to 500 | RealKai42 | CLOSED | [#1908](https://github.com/MoonshotAI/kimi-cli/pull/1908) |
| 1798 | feat(telemetry): integrate telemetry tracking across interactive and ... | RealKai42 | OPEN | [#1798](https://github.com/MoonshotAI/kimi-cli/pull/1798) |
| 1797 | feat(shell): add Ctrl+A directory scope toggle to /sessions picker | n-WN | CLOSED | [#1797](https://github.com/MoonshotAI/kimi-cli/pull/1797) |

**Selected PRs:**

- **#1911 — Adaptive Thinking for Claude Opus 4.7+** (OPEN) Fixes the `_use_adaptive_thinking()` method which was hardcoded to match only `opus-4.6` patterns. Opus 4.7+ rejects the legacy thinking format, causing errors. This is critical for users leveraging the latest Anthropic models.

- **#1908 — Increase Default `max_steps_per_turn` to 500** (CLOSED) Merged improvement that doubles the default step limit from 100 to 500. This allows complex multi-step tasks to run without manual configuration overrides, directly addressing a common friction point.

- **#1909 — Moon Spinner During Turn Gaps** (CLOSED) Fixes a visual regression where users saw blank screens during model processing—specifically after tool calls and between TurnBegin/StepBegin events. Restores appropriate loading feedback.

- **#1797 — Ctrl+A Directory Scope Toggle** (CLOSED) Adds `Ctrl+A` shortcut to `/sessions` picker to toggle between current directory and all directories, aligning with Claude Code's `/resume` behavior. Improves workflow for developers managing multiple projects.

- **#1798 — Telemetry Integration** (OPEN) Large-scale PR to integrate telemetry tracking across interactive and non-interactive modes. Includes Devin AI review badge, suggesting automated code review assistance.

---

### 5. Feature Request Trends

Analyzing the open issues, the following themes emerge as high-priority for the community:

1. **Model Compatibility & Thinking Modes** — Users want consistent support for thinking/reasoning visibility across model versions and vendors. The Opus 4.7+ PR addresses this technically, while #1865 signals demand for the feature UX.

2. **Failure Mode & Error Handling** — Graceful degradation when external services (MCP servers) fail is needed. Currently, failures cause hangs or cryptic errors (HTTP 400).

3. **Safety & Approval Granularity** — The `--yolo` flag conflates plan review with tool execution. Users want fine-grained control over which actions require human confirmation.

4. **IDE Integration Reliability** — Issues with IDEA plugin responsiveness (#1910) suggest integration testing gaps.

5. **UI/UX Feedback** — Loading states and spinner visibility remain pain points, indicating the CLI needs more robust progress indicators.

---

### 6. Developer Pain Points

The community data reveals recurring frustrations:

- **Step Limits Blocking Complex Tasks**: The previous default of 100 steps was too restrictive for multi-file refactors or large code generations. The recent bump to 500 addresses this, but users may still need configuration guidance.

- **Invisible Model State**: "Blank screen while model is working" is a repeated complaint (#1909). Developers need constant assurance that the CLI is responsive.

- **API Errors with No Context**: Error code 400 (#1903) and JSON parsing issues (#1378) lack actionable messages, making debugging difficult.

- **Regression in Thinking Visibility**: The removal of the thinking process (#1865) has the highest engagement, signaling that this was a valued feature for power users who rely on seeing reasoning chains.

- **MCP Server Fragility**: The Web UI's inability to recover from unreachable MCP servers (#1897) is a production readiness concern.

---

**End of Digest** | Generated 2026-04-17 | Data sourced from [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-17

---

## 1. Today's Highlights

The project released **v1.4.7**, addressing a critical Cloudflare AI Gateway compatibility issue with OpenAI reasoning models by dropping unsupported `max_tokens` parameters. On the roadmap side, a major **compaction refactor** is under review that preserves recent conversation context during long sessions, directly addressing the community's top memory and session stability concerns.

---

## 2. Releases

### v1.4.7
- **GitHub Copilot (gpt-5-mini)**: Switched to low reasoning effort mode for improved request compatibility.
- **Workspace Auth Context**: Provider sign-in now persists across workspace sessions.
- **Cloudflare AI Gateway**: Removed `max_tokens` parameter when using OpenAI reasoning models (e.g. GPT-5) to prevent `Unsupported parameter` errors.

---

## 3. Hot Issues

| # | Issue | Key Points |
|---|-------|------------|
| #20695 | **[perf, core] Memory Megathread** | Community-wide memory issue tracking; maintainers explicitly warn against LLM-generated solutions and are actively collecting heap snapshots. **56 comments, 33 👍** |
| #20698 | **[bug, core] GPT 5.4 from Azure fails with reasoning block error** | Azure-deployed GPT 5.4 xhigh consistently crashes after 1–2 tool calls with a missing reasoning item error. Affects both Web UI and TUI. **30 comments, 3 👍** |
| #13984 | **[bug, core] Cannot copy and paste in OpenCode CLI** | Clipboard copy appears to succeed (UI confirms), but `Ctrl+V` pastes nothing. Cross-platform issue (no OS specified). **26 comments, 9 👍** |
| #6651 | **[FEATURE] Dynamic model selection for subagents via Task tool** | Primary agents invoking subagents cannot dynamically control which model the subagent uses. High demand (34 👍) for Task tool extensibility. **24 comments, 34 👍** |
| #7030 | **[bug] Ollama qwen2.5-coder tool calls execute but files aren't written** | `edit`/`write` tool calls appear to run but leave zero disk changes; even `/init` skips `AGENTS.md` creation. **16 comments, 18 👍** |
| #21034 | **[bug, core] Gemma-4-26b/31b cause tool loops and failures** | Even with latest tokenizer fixes and patched engines (llama.cpp v2.11.0 + lmstudio v0.4.9), Gemma-4 models remain unusable due to reliability issues. **14 comments, 16 👍** |
| #22512 | **[bug, windows, core] Can't send any messages — ENAMETOOLONG error** | Any message to any model causes a screen glitch and an `ENAMETOOLONG` error on Windows with v1.4.4. **14 comments, 0 👍** |
| #22644 | **[bug, core] Qwen models removed from GO subscription** | Users report Qwen models no longer appearing in the OpenCode GO subscription tier after API key entry. **6 comments, 7 👍** |
| #22872 | **[core] `write` tool hangs indefinitely in v1.4.6** | Confirmed regression from v1.4.3; tool enters "running" state and never completes, even with 20-character content. **5 comments, 0 👍** |
| #19081 | **[bug, core] reasoning_content stripped from assistant messages on replay** | Thinking tokens are handled correctly in the current turn but silently stripped during conversation replay, causing KV cache invalidation for local inference users. **4 comments, 7 👍** |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| #22997 | **[Vouched] refactor: make formatter config opt-in** | Disables built-in formatters by default; restores previous behavior only when `formatter: true` is set. Gives users more control over editor integrations. |
| #22996 | **[Vouched] refactor: split config parsing steps** | Replaces the generic config load helper with explicit `ConfigParse.jsonc()` and `ConfigParse.schema()` steps; moves `{env}` and `{file}` substitution to caller-level for clearer ownership. |
| #22984 | **[contributor] refactor: convert Flag namespace to const object with getters** | Replaces a TypeScript `export namespace` with runtime-dynamic `const` object + `Object.defineProperty` getters, cleaning up the TypeScript-pattern mismatch. |
| #21822 | **[beta] refactor: improve compaction to retain recent conversation context** | Keeps recent real user turns verbatim during session compaction; adds `compaction.tail_turns` and `compaction.tail_tokens` config options. Directly tackles long-session memory issues. |
| #22991 | **[Vouched] refactor: normalize AccountRepo to canonical Effect service pattern** | Aligns `account/repo.ts` with the Effect service convention used across the rest of the codebase (e.g. `session/system.ts`). |
| #22990 | **[Vouched] perf: speed up skill directory discovery** | Splits skill initialization into a cheap discovery pass and a full parse pass, reducing startup overhead for code paths that only need directory listing. |
| #22986 | **[Vouched] refactor: split config LSP and formatter schemas** | Extracts dedicated `src/config` modules for formatter and LSP schemas, following the codebase's self-export convention. |
| #22987 | **[Vouched] tui: stabilize session dialog ordering** | Sorts root sessions by updated day rather than exact timestamp; uses creation time for same-day ordering to prevent active sessions from jumping around. |
| #22988 | **fix: ensure assistant message ID always greater than parent user message ID** | Fixes a bug where the first assistant reply could render above the user message in the UI timeline, making it invisible. Closes #15657. |
| #22961 | **feat(opencode): add Vercel sandbox substrate [WIP]** | Introduces a per-tenant Vercel sandbox as an opt-in execution substrate for multi-tenant agent servers. Targets isolation use cases. |

---

## 5. Feature Request Trends

The most-requested directions emerging from the issue tracker:

1. **Subagent Model Control** — Dynamic per-subagent model selection via the Task tool (#6651, 34 👍) is a highly upvoted gap.
2. **Configurable UI Defaults** — Sidebar open/closed default state (#3682, 20 👍) reflects demand for a more personalized default UX.
3. **Compaction Granularity** — The in-flight PR #21822 (tail-turns/tail-tokens limits) signals community need for fine-grained control over session summarization.
4. **PaperClaw Integration** — A community proposal (#22985) for an optional peer-reviewed paper generation hook; shows growing interest in academic/research workflows.
5. **Vercel Sandboxing** — The new WIP PR (#22961) targets multi-tenant isolation — a signal that OpenCode is being adopted in hosted/server environments.

---

## 6. Developer Pain Points

Recurring themes from high-comment and high-upvote issues:

| Theme | Evidence |
|-------|----------|
| **Memory / session stability on long conversations** | #20695 (Memory Megathread, 56 comments), #22883 (OOM crash), #21822 (compaction PR) — the single most persistent pain point. |
| **Local model reliability (Ollama, Gemma, qwen2.5-coder)** | #7030 (tool calls silently fail), #21034 (Gemma-4 loops), #20698 (Azure GPT-5 reasoning block errors) — local/LM-studio integrations are brittle. |
| **Azure / Cloudflare AI Gateway parameter mismatches** | #20698, #22374 — incompatible `max_tokens`, `thinking.type.enabled` params produce hard errors across multiple providers. |
| **`write` tool regression in v1.4.6** | #22872 — a confirmed regression from v1.4.3 affecting any file write operation; likely a quick fix target. |
| **Clipboard / paste behavior in TUI/CLI** | #13984 (copy/paste not working), #22365 (paste interprets path as image) — basic UX friction in the terminal interface. |
| **Model availability in OpenCode GO** | #22644 (Qwen models missing from subscription) — subscription-tier model catalog gaps affecting paying users. |

---

*Generated from GitHub data — anomalyco/opencode — 2026-04-17*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-17

---

## 1. Today's Highlights

Pi shipped three releases (v0.67.4–v0.67.6) in the last 24 hours, introducing prompt template argument hints, a `--no-context-files` flag for clean runs, and an Opus 4.7 adaptive thinking fix across Anthropic and Bedrock providers. Community activity was high with 29 PRs merged and 50 issues updated, with the Zellij Shift+Enter regression (#3259) and interactive extension widgets (#3312) drawing the most attention.

---

## 2. Releases

| Version | Summary |
|---------|---------|
| **v0.67.6** | Prompt templates now support an `argument-hint` frontmatter field that renders in the `/` autocomplete dropdown—`<angle brackets>` for required arguments, `[square brackets]` for optional ones. ([docs/prompt-templates.md](https://github.com/badlogic/pi-mono/blob/main/docs/prompt-templates.md)) |
| **v0.67.5** | Fixed Opus 4.7 adaptive thinking configuration for both Anthropic and Bedrock providers by correctly mapping `xhigh` reasoning effort to provider-supported values. ([#3286](https://github.com/badlogic/pi-mono/pull/3286)) |
| **v0.67.4** | Added `--no-context-files` (`-nc`) flag to disable automatic `AGENTS.md`/`CLAUDE.md` discovery for clean execution. Also exported `loadProjectContextFiles()` as a standalone utility. |

---

## 3. Hot Issues

| # | Title | Importance | Link |
|---|-------|------------|------|
| **#3259** | Shift+Enter no longer inserts newline inside Zellij | Regression affecting Zellij users; 11 comments | [#3259](https://github.com/badlogic/pi-mono/issues/3259) |
| **#3167** | Pasting multiline text inserts CSI-u escape sequences | Cross-terminal bug (tmux, Zellij); 9 comments | [#3167](https://github.com/badlogic/pi-mono/issues/3167) |
| **#3196** | Prompt caching broken for OpenAI-compatible proxies | Breaks cache routing for proxy users; 8 comments | [#3196](https://github.com/badlogic/pi-mono/issues/3196) |
| **#1155** | Add Vertex AI provider for Anthropic Claude models | Long-standing GCP user request; 7 comments | [#1155](https://github.com/badlogic/pi-mono/issues/1155) |
| **#3305** | `/import` abruptly exits pi session | Critical usability bug; 7 comments | [#3305](https://github.com/badlogic/pi-mono/issues/3305) |
| **#3005** | Make "UPDATE AVAILABLE" message toggleable | User experience improvement for NixOS/non-standard setups; 6 comments | [#3005](https://github.com/badlogic/pi-mono/issues/3005) |
| **#3103** | Markdown links should be clickable via OSC 8 hyperlinks | Improves terminal UX across Kitty, iTerm2, WezTerm, etc.; 6 comments | [#3103](https://github.com/badlogic/pi-mono/issues/3103) |
| **#3299** | Add "max" thinking level to sync with Opus 4.7's five-rung API | Feature alignment for newer Claude models; 5 comments | [#3299](https://github.com/badlogic/pi-mono/issues/3299) |
| **#3308** | Extension startup summary collapses entries to `index.ts` | Regression in extension visibility; 3 comments | [#3308](https://github.com/badlogic/pi-mono/issues/3308) |
| **#2469** | Clipboard image paste to WSL silently fails | Cross-platform bug affecting Windows/WSL users; 4 comments | [#2469](https://github.com/badlogic/pi-mono/issues/2469) |

---

## 4. Key PR Progress

| # | Title | Impact |
|---|-------|--------|
| **#3312** | Add interactive extension widgets | Enables extensions to render widgets with mouse events and focus routing in interactive mode |
| **#3311** | Skip empty user messages and handle empty toolResult | Fixes 400 errors for GLM-5/ZAI and MiniMax providers |
| **#3307** | Fix Codex service tier pricing | Resolves pricing multiplier issues when API echoes default tier |
| **#3296** | Restore Zellij key handling without enter ambiguity | Hybrid Kitty + legacy handling fixes Shift+Enter regression |
| **#3248** | Use OSC 8 hyperlinks in Markdown | Makes markdown links clickable in supporting terminals |
| **#3125** | Support Bearer token auth for Bedrock Converse API | Enables Bedrock usage without IAM credentials |
| **#2780** | Support argument-hint frontmatter in prompt templates | Ships the argument-hint feature from v0.67.6 |
| **#3024** | Use Promise.allSettled for parallel tool execution | Prevents result loss when `afterToolCall` hook throws |
| **#3264** | Set session id headers for all OpenAI compatible responses | Enables prompt caching for non-OpenAI API paths |
| **#3298** | Decouple RPC mode from stdio via RpcTransport | Opens door to WebSocket/TCP/in-memory RPC transports |

---

## 5. Feature Request Trends

1. **Enhanced Thinking/Rasoning Tiers** — Requests for `max` level (#3299) to align with Opus 4.7's five-rung API, plus broader adaptive thinking support across providers.
2. **Multi-Provider AI Support** — Growing demand for Vertex AI Claude hosting (#1155), Bearer token auth for Bedrock (#3125/#3127), and better OpenAI-compatible proxy handling (#3196).
3. **Improved Terminal Compatibility** — Persistent focus on Zellij, tmux, and Kitty protocol edge cases (key combos, CSI-u, OSC 8).
4. **Cleaner UX/Startup** — Users want toggleable update notifications (#3005), compact startup headers (#3267), and control over context file injection (`--no-context-files`).
5. **Extension System Polish** — Interactive widgets (#3312), RPC transport flexibility (#3298), and better extension visibility in startup logs (#3308).

---

## 6. Developer Pain Points

- **Terminal Key Handling Fragility** — CSI-u parsing, Shift+Enter in Zellij (#3259), and Ctrl+Alt shortcuts in tmux (#3133) remain error-prone.
- **Prompt Caching Failures** — OpenAI-compatible proxies and the Responses API path lose cache routing headers (#3196, #3264, #3266).
- **Bash Tool Exit Code Semantics** — `grep`/`diff` exits with 1 for "no match" but are flagged as errors (#3051).
- **Cross-Platform Clipboard Issues** — Windows/WSL clipboard image paste silently fails (#2469); multiline paste inserts escape sequences (#3167).
- **Resource Leaks in Print Mode** — `main()` not awaited causes file descriptor leaks (#3015).
- **Edit Tool Timeouts** — Some models (e.g., Qwen 27b) encounter timeouts on edit operations (#3159).
- **RTL/BiDi Input on Windows** — Arabic text renders in reversed order on Windows but not macOS (#3301).

---

*Generated 2026-04-17 | Data source: github.com/badlogic/pi-mono*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest

**Date:** 2026-04-17
**Repository:** github.com/QwenLM/qwen-code

---

## 1. Today's Highlights

The Qwen Code community sees a new nightly release (v0.14.5-nightly.20260417.12b24e2d2) introducing ACP hook integration and UX improvements for compact mode. However, a heated debate is unfolding around proposed OAuth free tier policy changes that would slash daily request quotas by 90%, with Issue #3203 generating 83 comments. Simultaneously, widespread 401 authentication errors are affecting users across platforms, suggesting a potential backend token validation issue.

---

## 2. Releases

**v0.14.5-nightly.20260417.12b24e2d2** ([Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.5-nightly.20260417.12b24e2d2))

| PR | Description | Author |
|----|-------------|--------|
| #3248 | Added complete hooks support for ACP integration | @DennisYu07 |
| #3100 | Optimized compact mode UX with shortcuts, settings sync, and safety improvements | @chiga0 |

---

## 3. Hot Issues

### 🔥 Critical: Free Tier Policy Overhaul
**#3203** — [Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203) | 83 comments | Open

The community is actively debating proposed changes: reducing daily free quota from 1,000 to 100 requests (effective immediately) and phasing out the free tier entirely by April 20, 2026. The thread reveals strong opposition, with developers expressing concerns about sudden changes affecting production workflows.

---

### 🔴 Authentication Failures
Multiple 401 error reports indicate systemic issues:

| Issue | Title | Comments | Status |
|-------|-------|----------|--------|
| #3335 | Internal error: 401 invalid access token or token expired | 13 | Closed (Duplicate) |
| #1855 | OAuth session persists after switching to Coding Plan API key | 9 | Closed |
| #3351 | 401 error on Qwen Code Companion | 6 | Open |
| #3348 | 401 error affecting VS Code extension | 3 (+6 👍) | Open |
| #3366 | Token error since yesterday evening | 4 | Open |

**Impact:** Users across macOS, Linux, and Windows report that despite successful login confirmation ("Successfully logged in. You can continue chatting."), subsequent API calls fail with 401 errors. This suggests potential token refresh or session persistence issues.

---

### 💡 Notable Feature Requests

**#1210** — [Better config and data location by XDG Base Directory](https://github.com/QwenLM/qwen-code/issues/1210) | 3 comments | 6 👍 | Open

Request to replace `~/.qwen` with standard XDG directories (`$XDG_CONFIG_HOME`, `$XDG_DATA_HOME`) on Linux systems. Aligns with Linux distribution conventions and improves cross-platform configuration management.

**#3240** — [关于文档的默认语言](https://github.com/QwenLM/qwen-code/issues/3240) | 3 comments | Open

Request to set Chinese as the default documentation language for the Chinese-market product, reflecting the user base's expectations.

---

### ⚠️ Community Sentiment

**#3357** — ["we're cooked"](https://github.com/QwenLM/qwen-code/issues/3357) | 3 comments | Open

> "no free api anymore"

The brief title captures widespread frustration with the perceived direction of free tier access.

---

## 4. Key PR Progress

### Feature PRs

| PR | Title | Description | Author |
|----|-------|-------------|--------|
| **#3328** | [Localize slash command descriptions](https://github.com/QwenLM/qwen-code/pull/3328) | Extends CLI i18n coverage for built-in and dynamic slash commands, adds runtime translation support with cache management. Closes #3323 | @Shenean |
| **#3076** | [Add run_in_background for Agent tool](https://github.com/QwenLM/qwen-code/pull/3076) | Enables asynchronous sub-agent execution; parent agent receives immediate launch confirmation and completion notification | @tanzhenxin |
| **#3352** | [Dual-output sidecar mode for TUI](https://github.com/QwenLM/qwen-code/pull/3352) | Adds `--json-fd`/`--json-file` for structured JSON event streaming and `--input-file` for JSONL command injection | @chiga0 |
| **#3214** | [Replace fdir crawler with git ls-files + ripgrep](https://github.com/QwenLM/qwen-code/pull/3214) | Two-tier strategy for `@` file mention autocomplete: respects .gitignore, reduces latency on large repos. Closes #3137 | @scrollDynasty |
| **#2886** | [Agent Team experimental feature](https://github.com/QwenLM/qwen-code/pull/2886) | Enables lead agent to spawn and coordinate parallel sub-agent teams on different task components | @tanzhenxin |

### Bug Fixes

| PR | Title | Description | Author |
|----|-------|-------------|--------|
| **#3297** | [Lazy factory registration with concurrency dedup](https://github.com/QwenLM/qwen-code/pull/3297) | Fixes P0 bug where concurrent `ensureTool()` calls could instantiate tools twice, causing SubagentManager listener leaks | @doudouOUC |
| **#3320** | [Limit skill watcher depth to prevent FD exhaustion](https://github.com/QwenLM/qwen-code/pull/3320) | Prevents recursive watching of `node_modules`, fixing file descriptor exhaustion that broke shell command execution | @tanzhenxin |
| **#3315** | [Strip thinking blocks from history on model switch](https://github.com/QwenLM/qwen-code/pull/3315) | Fixes 422 errors when switching models mid-session by removing `reasoning_content` fields incompatible with new provider | @tanzhenxin |
| **#3313** | [Recover from truncated tool calls via multi-turn continuation](https://github.com/QwenLM/qwen-code/pull/3313) | Fixes WriteFile/ReadFile failures when model output exceeds max_tokens limit. Closes #3049 | @wenshao |

### Developer Experience Improvements

| PR | Title | Description | Author |
|----|-------|-------------|--------|
| **#3319** | [Early input capture to prevent keystroke loss](https://github.com/QwenLM/qwen-code/pull/3319) | Buffers keystrokes during REPL initialization (200-500ms) and replays once KeypressProvider mounts. Closes #3224 | @doudouOUC |
| **#3318** | [API preconnect to reduce first-call latency](https://github.com/QwenLM/qwen-code/pull/3318) | Fire-and-forget HEAD request at startup warms TCP+TLS connection, saving 100-200ms on first API call. Closes #3223 | @doudouOUC |
| **#3358** | [Bind M-d to delete next word (Emacs-like)](https://github.com/QwenLM/qwen-code/pull/3358) | Adds missing Emacs-style shortcut for deleting next word, matching behavior in Bash and other coding agents | @pedrormjunior |

---

## 5. Feature Request Trends

Analysis of 50 recent issues reveals these dominant themes:

| Trend | Frequency | Examples |
|-------|-----------|----------|
| **Internationalization (i18n)** | High | Slash command localization (#3323, #3328), Chinese documentation defaults (#3240) | 
| **Authentication & Sessions** | High | OAuth token persistence (#1855), 401 error resolution, API key switching | 
| **Editor Integration** | Medium | Zed.app detection (#3303), EDITOR env var parsing (#2683), VS Code plugin issues | 
| **Performance** | Medium | File crawler optimization (#3214), FD exhaustion fixes (#3320), API latency reduction (#3318) |
| **Background/Async Operations** | Medium | Sub-agent background execution (#3076, #2886), stats attribution (#3229) |
| **Configuration Standards** | Medium | XDG Base Directory support (#1210), clean uninstall script (#3324) |
| **Context Management** | Low | Path-based rules injection (#3339), thinking block handling (#3315) |

---

## 6. Developer Pain Points

### 🚨 P0: Authentication Failures
The 401 "invalid access token or token expired" error is the most reported issue, affecting users across all platforms. Despite successful login confirmations, API calls fail intermittently. Root causes appear related to:
- OAuth session state not persisting when switching to paid API keys
- Token refresh failures during active sessions
- Multiple duplicate reports suggest a backend or token validation issue

**Action items:** Users experiencing 401 errors should re-authenticate; developers should monitor #3335 and related duplicates for official guidance.

### 📉 Free Tier Anxiety
The proposed policy change (#3203) to reduce free tier from 1,000 to 100 requests/day—plus complete tier sunsetting on April 20—has generated significant negative sentiment. Developers relying on free access for personal projects or evaluation face forced migration decisions.

### 🔧 Developer Experience Friction
- **Keystroke loss during startup:** Input typed before REPL initialization is silently dropped
- **File descriptor exhaustion:** Skill watchers recursively scanning `node_modules` breaks shell execution
- **Cross-platform inconsistencies:** EDITOR environment variable parsing fails with arguments (e.g., `emacsclient -c`)

### 📝 Documentation Gaps
- Missing default language configuration for Chinese users
- No clean uninstallation procedure, leaving residual configuration files

---

*Digest generated from GitHub data for 2026-04-17. For real-time updates, follow [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/manelsen/agents-radar).*