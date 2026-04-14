# AI CLI Tools Community Digest 2026-04-14

> Generated: 2026-04-14 02:37 UTC | Tools covered: 8

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

**Date:** 2026-04-14  
**Scope:** 8 major AI CLI tools

---

## 1. Ecosystem Overview

The AI CLI tools landscape demonstrates vigorous competition among major players (Anthropic, OpenAI, Google, GitHub, Alibaba) alongside specialized community projects. All tools are experiencing rapid iteration cycles—most shipped releases within the past 24-48 hours. Critical cross-cutting concerns include authentication reliability across platforms, cost predictability for enterprise deployments, and platform-specific regression management. The ecosystem shows maturity indicators: mature tools face serious trust issues around silent backend changes, while newer entrants struggle with fundamental UX gaps. Enterprise features—fine-grained permissions, model parity, observability—are emerging as key differentiators alongside core AI capabilities.

---

## 2. Activity Comparison

| Tool | Releases (48h) | Hot Issues | Active PRs | Community Engagement | Maturity Signal |
|------|----------------|-----------|------------|---------------------|-----------------|
| **Claude Code** | v2.1.105 | 10 | 10+ | 399 comments on #42796 (model regression) | Mature, high scrutiny |
| **OpenAI Codex** | 0.121.0-alpha.4/6 | 10 | 10+ | 530 comments on #14593 (rate limits) | Active security hardening |
| **Gemini CLI** | v0.39.0-nightly, v0.37.2 | 10 | 10 | 82 comments on P1 auth issue | Rapid nightly builds |
| **Copilot CLI** | v1.0.25 | 10 | 0 | 25 comments on request consumption | Enterprise-focused |
| **Kimi Code** | v1.33.0, v1.32.0 | 10 | 15 | 14 comments on session stability | Balanced activity |
| **OpenCode** | None | 10 | 10+ | 216 comments on Copilot auth | Power-user driven |
| **Pi** | v0.67.1 | 10 | 10 | Low volume, focused fixes | Niche, terminal polish |
| **Qwen Code** | v0.14.4 | 10 | 10+ | 16 comments on regression | Rapid iteration |

**Key Observations:**
- 6 of 8 tools shipped releases in past 48 hours
- Claude Code and OpenAI Codex lead in community comment volume
- OpenCode and Kimi Code show strongest recent PR activity
- Copilot CLI has no updated PRs in last 24h despite active issue discussion

---

## 3. Shared Feature Directions

### Authentication & Authorization (All Tools)
- **Problem:** OAuth flows break across platforms; WSL2, Linux terminals with paste bracketing, ARM64 all affected
- **Tools:** Claude Code (#47669), Gemini CLI (#24517), Copilot CLI (#223), Qwen Code (#3233), OpenCode (#8030)
- **Implication:** Cross-platform auth testing remains inadequate; enterprise adoption blocked

### Permission & Security Hardening (Claude Code, Codex, Gemini CLI, Qwen Code)
- **Deny-read patterns:** Codex PRs #17740/15979/15977 implementing admin-managed requirements
- **Sandbox improvements:** Gemini CLI #25354 shell inference under sandboxing
- **Permission suggestions:** Codex PR #17739 adding suggestion hooks
- **Implication:** Security-first design becoming baseline expectation

### Persistent MCP Credentials (Claude Code, Copilot CLI, OpenCode)
- **Issue:** OAuth tokens lost between sessions for Supabase MCP and similar
- **PRs:** Claude Code #47554, OpenCode #22376 implementing cross-session persistence
- **Implication:** MCP integration requires deeper session state management

### Cross-Platform Shell Compatibility (Kimi Code, Qwen Code, Gemini CLI)
- **Problem:** Windows/Linux command execution inconsistency
- **Issues:** Kimi Code #1855, Qwen Code #3144, Gemini CLI #25166
- **Implication:** Explicit shell configuration becoming standard feature request

### Session Management (OpenCode, Copilot CLI, Kimi Code, Qwen Code)
- **Archive/unarchive:** OpenCode PR #22372
- **Auto-titling:** Claude Code PR #47178, Kimi Code PR #1839, Qwen Code PR #3093
- **Context display:** OpenCode #6152 (73 👍), Qwen Code #2916
- **Implication:** Lifecycle management evolving beyond simple history

### Cost/Quota Transparency (Claude Code, Codex, Copilot CLI, OpenCode)
- **Silent backend changes:** Claude Code cache TTL regression (#46829), usage limit drain (#41930)
- **Request consumption:** Copilot CLI #2591 (80-100 premium requests/tool), OpenCode #8030 (60x quota drain)
- **Implication:** Billing predictability is critical pain point for paid tiers

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|---------------|--------------|---------------------|
| **Claude Code** | Developer tool ecosystem, plugin system | Enterprise developers, DevOps | Hook-based extensibility, PreCompact blocking, YAML plugin manifests |
| **OpenAI Codex** | Security hardening, enterprise policy | Security-conscious enterprises | Deny-read patterns, Seatbelt enforcement, managed requirements.toml |
| **Gemini CLI** | Voice mode, memory systems | Google ecosystem users | Cloud/local Whisper transcription, bounded telemetry truncation |
| **Copilot CLI** | GitHub integration, MCP registry | GitHub workflow users | ACP client MCP support, registry-based server installation |
| **Kimi Code** | Chinese language, IDE extension | Chinese developers | CJK optimization, VSCode extension, thinking visibility controls |
| **OpenCode** | Provider flexibility, power-user UX | Multi-model power users | GitHub Copilot integration, Effect-ified services, custom providers |
| **Pi** | Terminal UI polish, extension API | Terminal enthusiasts | TUI optimization, OSC 8 links, Cloudflare Workers support |
| **Qwen Code** | Auto-memory, multi-agent workflows | Qwen model users | Managed auto-memory system, fork subagents, commit attribution |

**Strategic Positioning:**
- **Claude Code** competes on ecosystem breadth (plugins, hooks, marketplace)
- **OpenAI Codex** competes on enterprise security controls
- **Copilot CLI** leverages GitHub platform integration
- **OpenCode** differentiates on provider flexibility and power-user features
- **Pi** targets terminal refinement niche with extension extensibility

---

## 5. Community Momentum & Maturity

### High-Momentum Tools
| Tool | Evidence | Assessment |
|------|----------|------------|
| **Claude Code** | 399-comment model regression issue, 1,718 👍, sustained pressure leading to resolution | Mature community with high stakeholder investment; issues get addressed |
| **OpenAI Codex** | 530 comments on rate limit issue, active security PR stack | Active development; security hardening indicates enterprise adoption pressure |
| **OpenCode** | 216 comments on Copilot auth, 79 👍, multiple concurrent PRs | Strong power-user community driving rapid feature delivery |

### Medium-Momentum Tools
| Tool | Evidence | Assessment |
|------|----------|------------|
| **Gemini CLI** | P1 auth issue with 82 comments, nightly builds | Active but authentication deadlock indicates product-market fit issues |
| **Kimi Code** | 15 PRs in 24h, session stability resolution | Balanced activity; focus on Chinese community |
| **Qwen Code** | 10+ PRs, rapid iteration (v0.14.4 today) | Fast-moving but regression concerns persist |

### Emerging/Stable Tools
| Tool | Evidence | Assessment |
|------|----------|------------|
| **Copilot CLI** | Enterprise features high-demand (#223: 63 👍), but no recent PRs | Community needs clear roadmap; potential feature gap |
| **Pi** | Terminal polish focus, low-volume but consistent fixes | Niche community; stable trajectory |

---

## 6. Trend Signals

### Enterprise Readiness Gaps
**Signal:** Fine-grained token permissions (#223 Copilot CLI, 63 👍), model parity with IDEs (#1703 Copilot CLI, 31 👍), sporadic policy blocking (#1595) indicate enterprise deployment friction.

**Implication:** CLI tools lag behind IDE extensions in enterprise feature parity. Organizations cannot deploy CLI tools with same control as VS Code Copilot.

### Cross-Platform Fragmentation
**Signal:** Active bugs span Windows EXDEV (#27897 Claude Code), Linux ARM64 auth, WSL OAuth stdin, macOS cow­ork permissions, Kitty Unicode rendering.

**Implication:** Platform testing remains inadequate. Cross-platform parity requires dedicated engineering investment; no tool has resolved this comprehensively.

### Silent Backend Trust Erosion
**Signal:** Claude Code cache TTL regression (#46829) and usage limit drain (#41930) occurred without communication; community diagnosed via JSONL forensics.

**Implication:** Developers are losing trust in platform stability. Transparent communication and changelog practices are competitive advantages.

### Cost Management as Competitive Factor
**Signal:** 60x quota drain (OpenCode #8030), 80-100 premium requests per tool (Copilot CLI #2591), context compaction thresholds (#8140 OpenCode) all high-engagement topics.

**Implication:** Cost predictability is a top-3 concern for paid users. Tools with transparent billing and configurable usage controls will differentiate.

### Hook/Extension Systems Converging
**Signal:** Claude Code PreCompact blocking, Copilot CLI global hooks request (#1157), Kimi Code thinking controls, Pi extension factories all indicate demand for programmable control surfaces.

**Implication:** Extensibility APIs becoming baseline expectation. Tools without hooks/extensions face usability disadvantages.

### Model Reliability Concerns
**Signal:** February model regression broke Claude Code "for complex engineering tasks" (now closed); Opus 4.6 compatibility issues in OpenCode (#13768); cache TTL silent changes.

**Implication:** Model upgrades can break workflows without warning. Tools need rollback mechanisms, A/B testing, or staged rollout capabilities.

---

**Decision Context:**
- **For enterprise adoption:** Prioritize Claude Code (mature ecosystem), OpenAI Codex (security controls), or Copilot CLI (GitHub integration) based on existing platform investments
- **For cost-sensitive teams:** Monitor OpenCode and Copilot CLI quota consumption issues; consider Claude Code's hook-based control
- **For cross-platform teams:** All tools have platform-specific issues; evaluate based on your primary OS and specific workflow requirements
- **For power users:** OpenCode offers provider flexibility and custom provider support; Kimi Code leads on thinking visibility control
- **For terminal enthusiasts:** Pi offers focused TUI polish with extension API extensibility

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Based on data as of 2026-04-14*

---

## 1. Top Skills Ranking

The following Skills (PRs) generated the most discussion and engagement from the community:

### 1.1 document-typography (PR #514)
**Status:** OPEN | Author: PGTBoos | Created: 2026-03-04

**Functionality:** A typographic quality control skill that prevents common problems in AI-generated documents—orphan word wrap (1-6 words spilling onto the next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment.

**Discussion Highlights:** Targets a universal pain point affecting every document Claude generates. The proposal emphasizes that users rarely explicitly request good typography, making this a proactive quality improvement.

🔗 https://github.com/anthropics/skills/pull/514

---

### 1.2 skill-quality-analyzer & skill-security-analyzer (PR #83)
**Status:** OPEN | Author: eovidiu | Created: 2025-11-06

**Functionality:** Two meta-skills for comprehensive quality analysis of community Skills, evaluating across five dimensions: Structure & Documentation (20%), Command Detection, Tool Usage, Error Handling, and Effectiveness. Includes security scanning capabilities.

**Discussion Highlights:** Addresses the community health gap directly—fills a critical need for quality assurance tooling as the Skills marketplace grows.

🔗 https://github.com/anthropics/skills/pull/83

---

### 1.3 ODT Skill — OpenDocument Text (PR #486)
**Status:** OPEN | Author: GitHubNewbie0 | Created: 2026-03-01

**Functionality:** Enables creation of OpenDocument Format (.odt) files (ISO/IEC 26300 standard), template filling, and ODT-to-HTML parsing. Supports LibreOffice, Apache OpenOffice, Collabora, OnlyOffice, and Google Docs compatibility.

**Discussion Highlights:** Expands document format support beyond existing capabilities, addressing enterprise document workflow needs.

🔗 https://github.com/anthropics/skills/pull/486

---

### 1.4 SAP-RPT-1-OSS Predictor Skill (PR #181)
**Status:** OPEN | Author: amitlals | Created: 2025-12-28

**Functionality:** Integration with SAP's open-source tabular foundation model (Apache 2.0) for predictive analytics on SAP business data, released at SAP Event TechEd 2025.

**Discussion Highlights:** Bridges Claude Code with enterprise SAP ecosystems—significant for organizations with existing SAP infrastructure.

🔗 https://github.com/anthropics/skills/pull/181

---

### 1.5 x402 BSV Auth + Micropayment Skill (PR #374)
**Status:** OPEN | Author: Calgooon | Created: 2026-02-12

**Functionality:** Enables natural-language AI service discovery, authentication, and micropayments via the x402 protocol—allows commands like `/x402 generate a photo` or `/x402 transcribe meeting.wav` with built-in payment handling.

**Discussion Highlights:** Introduces novel micropayment workflows for AI services—a forward-looking capability for monetization scenarios.

🔗 https://github.com/anthropics/skills/pull/374

---

### 1.6 testing-patterns Skill (PR #723)
**Status:** OPEN | Author: 4444J99 | Created: 2026-03-22

**Functionality:** Comprehensive testing skill covering the full testing stack: Testing Trophy philosophy, unit testing (AAA pattern), React component testing (Testing Library), and E2E testing patterns.

**Discussion Highlights:** Addresses one of the most requested skill categories—developer testing workflows—with practical, actionable guidance.

🔗 https://github.com/anthropics/skills/pull/723

---

### 1.7 record-knowledge Skill (PR #521)
**Status:** OPEN | Author: LevNas | Created: 2026-03-05

**Functionality:** Solves Claude Code's session memory problem by recording learned knowledge as tagged Markdown entries in `.claude/knowledge/entries/`, persisting context across sessions for the entire team.

**Discussion Highlights:** Directly addresses the "workaround rediscovered today" problem—highly practical for long-term Claude Code users.

🔗 https://github.com/anthropics/skills/pull/521

---

### 1.8 sensory Skill — macOS Automation (PR #806)
**Status:** OPEN | Author: AdelElo13 | Created: 2026-03-29

**Functionality:** Teaches Claude to use `osascript` for native macOS automation (AppleScript) instead of screenshot-based computer use, with a two-tier permission system.

**Discussion Highlights:** Provides native macOS control without relying on accessibility permissions for basic operations—significant for macOS power users.

🔗 https://github.com/anthropics/skills/pull/806

---

## 2. Community Demand Trends

Analysis of top Issues reveals these priority areas:

| Trend | Evidence | Engagement |
|-------|----------|------------|
| **Skills Reliability & Persistence** | #62 (10 comments) — skills disappearing, #61 (3 comments) — 404 errors loading skills | Critical user-impacting issues |
| **Quality Standards for Skills** | #202 (8 comments) — skill-creator should follow best practices, #83 — quality analyzer meta-skill | Community wants better Skill creation tooling |
| **Workflow Reliability** | #556 (5 comments) — 0% trigger rate for skills in eval, #406 (2 comments) — upload failures | Bugs affecting skill deployment |
| **Enterprise/Team Features** | #228 (3 comments) — org-wide skill sharing, #492 (4 comments) — namespace security concerns | Organizational deployment needs |
| **Platform Integration** | #29 (4 comments) — Bedrock usage, #16 (4 comments) — MCP exposure | Broader ecosystem connectivity |
| **Duplicate Content Issues** | #189 (5 comments) — document-skills/example-skills duplication | Package management confusion |

**Key Insight:** The community's top concerns are **skills reliability** (they disappear/break unexpectedly) and **quality standards** (skill-creator needs improvement), followed by enterprise collaboration features.

---

## 3. High-Potential Pending Skills

These active PRs have strong community relevance and may land soon:

| Skill | PR # | Key Value | Path to Merge |
|-------|------|-----------|---------------|
| **document-typography** | #514 | Universal document quality | Needs maintainer review |
| **testing-patterns** | #723 | Full testing stack coverage | Recently submitted (2026-03-22) |
| **ODT skill** | #486 | Enterprise document formats | Updated 2026-04-10 |
| **x402 micropayments** | #374 | Novel payment workflows | Updated 2026-04-01 |
| **skill-quality/security analyzers** | #83 | Meta-quality tooling | Waiting on review |
| **sensory (macOS automation)** | #806 | Native AppleScript control | Updated 2026-04-02 |

**Watch For:** The document-typography, testing-patterns, and ODT skills appear closest to merge-readiness based on recency and specificity of proposals.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for document-generation quality control skills (typography, ODT, DOCX fixes) combined with meta-tooling to assess and ensure Skill quality itself—as the Skills marketplace matures, users increasingly need both better Skills and better ways to evaluate them.**

---

# Claude Code Community Digest — 2026-04-14

---

## Today's Highlights

The **v2.1.105** release introduces `path` parameter support for the `EnterWorktree` tool and enhanced hook capabilities, enabling plugins to block compaction via the new PreCompact hook. Community activity remains high with the critical February model regression issue (#42796) now closed after 399 comments, while multiple platform-specific bugs around authentication, usage limits, and stream reliability continue to surface across Windows, macOS, and Linux environments.

---

## Releases

**v2.1.105** | [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.105)

- **EnterWorktree tool**: Added `path` parameter to switch into an existing git worktree of the current repository
- **PreCompact hook support**: Hooks can now block session compaction by exiting with code 2 or returning `{"decision":"block"}`
- **Background monitor support**: Added for plugin integration

---

## Hot Issues

1. **[#42796** — [MODEL] Claude Code unusable for complex engineering tasks (CLOSED)](https://github.com/anthropics/claude-code/issues/42796)  
   *399 comments · 1,718 👍*  
   The highest-impact issue in recent memory. February model updates introduced regressions that broke Claude Code for complex engineering workflows. Closed after sustained community pressure and internal response. **This represents a major trust signal for mission-critical use cases.**

2. **[#41930** — Critical: Widespread abnormal usage limit drain across all paid tiers](https://github.com/anthropics/claude-code/issues/41930)  
   *83 comments · 61 👍*  
   Multi-root-cause issue affecting quota consumption across all subscription tiers since late March. Paying customers reporting unexplained cost inflation with no formal Anthropic communication. **High business impact — affects budget predictability for commercial teams.**

3. **[#46829** — Cache TTL silently regressed from 1h to 5m (CLOSED)](https://github.com/anthropics/claude-code/issues/46829)  
   *38 comments · 202 👍*  
   Silent backend change to prompt cache TTL causing significant quota and cost inflation. Community-sourced analysis from JSONL session data provided evidence. **Confirmed regression now closed; verify your billing.**

4. **[#41814** — Messages disappear from terminal display after v2.1.89](https://github.com/anthropics/claude-code/issues/41814)  
   *59 comments · 103 👍*  
   Terminal UI regression where user prompts and Claude responses vanish during conversations. Affects workflow visibility and debugging. **Reproducible regression tracked to v2.1.89.**

5. **[#27302** — Support multiple Connector accounts (same connector, different accounts)](https://github.com/anthropics/claude-code/issues/27302)  
   *123 comments · 159 👍*  
   Feature request for using multiple accounts on the same MCP connector (e.g., multiple Supabase projects). **Highly upvoted enhancement for multi-project workflows.**

6. **[#13480** — Oversized image breaks conversation permanently](https://github.com/anthropics/claude-code/issues/13480)  
   *42 comments · 44 👍*  
   Sending a single oversized image renders the session unrecoverable — no workaround without starting a new chat. **Data-integrity bug with no graceful degradation.**

7. **[#46366** — [Model regression] Opus 4.5 → 4.6: Implicit constraint reasoning failure](https://github.com/anthropics/claude-code/issues/46366)  
   *18 comments · 6 👍*  
   The Opus model upgrade introduced failures in implicit constraint reasoning tasks. **Continues the pattern of February model regressions affecting engineering reliability.**

8. **[#47669** / **#47670** / **#44136** — Authentication login failures on Linux/WSL](https://github.com/anthropics/claude-code/issues/47669)  
   *8+ comments each · active today*  
   Three separate issues documenting OAuth code pasting failures in CLI when terminal paste bracketing is enabled or in WSL2 stdin. **Blocks onboarding for Linux-heavy developer environments.**

9. **[#27897** — Cowork VM broken on Windows 11 Insider (MSIX)](https://github.com/anthropics/claude-code/issues/27897)  
   *34 comments · 13 👍*  
   Unresolved EXDEV rename bug preventing Cowork VM functionality on Windows 11 Insider builds. **Early-adopter blocker for Windows development environments.**

10. **[#18370** — MCPSearch not activating despite meeting 10% threshold](https://github.com/anthropics/claude-code/issues/18370)  
    *6 comments · 2 👍*  
    MCP search tool fails to activate even when token usage thresholds are clearly met (40k/200k tokens, 20%). **Broken cost-saving feature undermining expected billing controls.**

---

## Key PR Progress

1. **[#47676** — fix(plugins): make hookify and plugin-dev agent frontmatter valid YAML](https://github.com/anthropics/claude-code/pull/47676)  
   Fixes YAML parsing failures in plugin agent files caused by unquoted colon-space sequences. **Enables plugin system compatibility with strict YAML parsers.**

2. **[#47673** — fix(plugin-dev): add missing `.claude-plugin/plugin.json` manifest](https://github.com/anthropics/claude-code/pull/47673)  
   Restores missing manifest for the `plugin-dev` plugin, aligning it with all 12 other plugins in the marketplace. **Fixes plugin registry consistency.**

3. **[#47554** — Fix: MCP OAuth token persistence across sessions](https://github.com/anthropics/claude-code/pull/47554)  
   Implements persistent credential storage for Supabase MCP and other HTTP-based servers that currently lose OAuth authentication between conversations. **Solves a critical UX gap for MCP-connected workflows.**

4. **[#47502** — fix(security-guidance): use a cross-platform Python launcher](https://github.com/anthropics/claude-code/pull/47502)  
   Adds a Node.js launcher so the security-guidance hook finds Python on both Windows and Unix-like systems. **Improves cross-platform hook reliability.**

5. **[#47490** — feat(hookify): add ask action support](https://github.com/anthropics/claude-code/pull/47490)  
   Introduces `action: ask` for hookify rules on PreToolUse hooks, normalizing it with the existing `confirm` approval flow. **Expands hook programmable control surface.**

6. **[#47178** — feat(examples): add session auto-title UserPromptSubmit hook](https://github.com/anthropics/claude-code/pull/47178)  
   Adds a reference implementation hook that automatically titles new Claude Code sessions. **Reduces manual session management overhead.**

7. **[#47514** — fix(security-guidance): skip doc files for substring checks](https://github.com/anthropics/claude-code/pull/47514)  
   Reduces false positives in the security-guidance hook by excluding documentation files from substring-based heuristics while preserving source-file warnings. **Improves signal-to-noise ratio for security workflows.**

8. **[#38105** — feat: add WhatsApp channel plugin (CLOSED → migrated)](https://github.com/anthropics/claude-code/pull/38105)  
   WhatsApp plugin moved to standalone repository [Rich627/whatsapp-claude-plugin](https://github.com/Rich627/whatsapp-claude-plugin) after DMCA takedown of original fork. **Community plugin ecosystem resilience demonstrated.**

9. **[#41447** — feat: open source Claude Code ✨](https://github.com/anthropics/claude-code/pull/41447)  
   Community-driven effort claiming to extract and build TypeScript source from shipped npm bundle. **Notable but requires independent verification of completeness and legal status.**

10. **[#41518** — Fully Open Source Claude Code](https://github.com/anthropics/claude-code/pull/41518)  
    Competing open-source extraction effort with Bun bundler configuration. **Reflects sustained community interest in source access despite unclear upstream stance.**

---

## Feature Request Trends

| Theme | Evidence | Priority |
|-------|----------|----------|
| **Multi-account MCP connectors** | #27302 (159 👍) — same connector, different accounts | High |
| **Enhanced hook system** | #47490 (`ask` action), PreCompact blocking | High |
| **Cross-platform shell compatibility** | #46868 (auto-allow piped commands), #47438 (Windows fork), #47701 (file_redirect walker) | Medium |
| **Persistent MCP credentials** | #47554 (OAuth across sessions) | High |
| **Larger context handling** | #45543 (resumed sessions with many images), #47549 (1M context lost on Max 20x) | Medium |
| **Bash permission granularity** | #46868, #47701 — heredocs, redirects, piped commands | Medium |
| **Session auto-titling** | #47178 — community hook example | Low |
| **Plugin ecosystem expansion** | #38105 (WhatsApp), #46095/#47421/#45721 (Veriflow contract) | Low |

---

## Developer Pain Points

1. **Authentication Dead Ends**: OAuth login flows break in WSL2, Linux terminals with paste bracketing, and ARM64 (Raspberry Pi). Three separate issues filed today. Onboarding friction remains high on non-macOS platforms.

2. **Silent Backend Changes**: Cache TTL regression (#46829) and usage limit drain (#41930) occurred without formal communication, eroding trust. Developers rely on JSONL forensics to detect changes affecting billing.

3. **Model Reliability Concerns**: February model changes (#42796) proved Claude Code was "unusable for complex engineering tasks" — a stark signal that model upgrades can break developer workflows without warning mechanisms.

4. **MCP Permission Loops**: Terminal MCP tool permission prompts loop endlessly when user accepts (#47695), and VSCode extension silently declines URL elicitation requests (#35353). Permission system inconsistencies across platforms create unpredictable UX.

5. **Platform-Specific Breakage**: Active bugs span Windows (EXDEV rename, STATUS_DLL_INIT_FAILED), macOS (terminal paste bracketing, cow­ork permissions), Linux (ARM64 auth, kitty Unicode rendering), and WSL (OAuth stdin). Fragmented platform support increases testing burden for cross-platform projects.

6. **Conversation Data Integrity**: Oversized images break sessions permanently (#13480) and resumed sessions with many images fail on API limits (#45543). No graceful degradation means data loss during long coding threads.

7. **Billing Predictability**: Multi-root-cause usage limit drain (#41930) combined with cache TTL regression (#46829) creates compounding cost uncertainty for paid tiers.

---

*Digest generated from GitHub data for 2026-04-14. All links reference `github.com/anthropics/claude-code`.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest

**Date:** 2026-04-14

---

## Today's Highlights

The Codex project is actively addressing multiple performance regressions impacting macOS and Linux environments, with several WebSocket and rate-limiting issues gaining significant community traction. Recent PR activity shows strong focus on filesystem security hardening through deny-read patterns and permission hook enhancements.

---

## Releases

| Version | Type | Notes |
|---------|------|-------|
| `0.121.0-alpha.6` | Rust Alpha | Latest pre-release |
| `0.121.0-alpha.4` | Rust Alpha | Prior alpha build |

No detailed changelog provided for these alpha releases. Users on pre-release channels should test thoroughly.

---

## Hot Issues

1. **[#14593](https://github.com/openai/codex/issues/14593)** — **[bug, rate-limits] Burning tokens very fast** (530 comments, 201 👍)
   > A major ongoing concern about excessive token consumption. Users on Business tier report rapidly depleting rate limits despite normal usage patterns. This has become the highest-volume issue in the repository.

2. **[#13041](https://github.com/openai/codex/issues/13041)** — **WebSocket upgrade succeeds then server closes with 1008 Policy** (58 comments, 114 👍)
   > Linux users experience Codex websocket transport failing with policy error 1008, causing reconnect loops and fallback to HTTPS. Affects Arch Linux and potentially other distributions.

3. **[#13476](https://github.com/openai/codex/issues/13476)** — **[bug, mcp, sandbox, regression] Excessive approval prompts after recent changes for Playwright MCP** (27 comments, 38 👍)
   > Regression introduced after recent changes causes excessive approval prompts for Playwright MCP. Users on 0.107.0 CLI with gpt-5.3-codex are most affected.

4. **[#16231](https://github.com/openai/codex/issues/16231)** — **[bug, extension, regression] High CPU usage on macOS after updating Codex to 26.325.31654** (25 comments, 45 👍)
   > Apple Silicon M5 Pro users on MacOS Tahoe 26.4 experiencing high CPU and temperature after recent extension update. Multiple users confirming the issue.

5. **[#15764](https://github.com/openai/codex/issues/15764)** — **[bug, extension, regression] Code Helper (Renderer) exceeds 100% when Codex applies a code patch** (21 comments, 32 👍)
   > Performance regression affecting all versions newer than 26.313.41514 on macOS. Code Helper renderer consumes excessive CPU during patch application.

6. **[#16849](https://github.com/openai/codex/issues/16849)** — **[bug, extension] open-in-targets error loop causes high CPU (CLOSED)** (19 comments, 11 👍)
   > VSCode extension had a bug where open-in-targets handlers threw errors instead of returning gracefully. The 1-minute polling interval triggered a continuous error loop. **Status: Closed with fix.**

7. **[#15393](https://github.com/openai/codex/issues/15393)** — **[bug, extension, regression] High CPU utilization with IDE extension** (15 comments, 23 👍)
   > Linux x64 users with VS Code 1.112.0 stable experiencing high CPU utilization. Related to the broader performance regression affecting extensions.

8. **[#16402](https://github.com/openai/codex/issues/16402)** — **[bug, sandbox, regression] 0.118.0 sandbox write regression on Linux** (12 comments, 10 👍)
   > Sandbox write operations regressed on Linux in version 0.118.0. Ghostty terminal users on kernel 6.14.0-37 affected. Potentially related to filesystem sandboxing changes.

9. **[#17731](https://github.com/openai/codex/issues/17731)** — **[bug, rate-limits] My Codex Rate limit just vanished** (2 comments, 0 👍)
   > A user reports their weekly rate limit unexpectedly disappeared without rapid token consumption. This may be related to #14593 but the user explicitly clarifies this is not a duplicate.

10. **[#17624](https://github.com/openai/codex/issues/17624)** — **[bug, code-review, windows-os] Review tab gets stuck on "Loading diff" on Windows** (5 comments, 3 👍)
    > Windows users experiencing Review tab freeze. Codex App passes `/F:/...` as a literal path to git diff instead of proper Windows path format on version 26.409.20454.

---

## Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| **[#17741](https://github.com/openai/codex/pull/17741)** | Register named exec environments for app-server threads | OPEN |
| **[#17740](https://github.com/openai/codex/pull/17740)** | Support managed deny-read requirements — final PR in deny-read stack, enabling admin-managed `requirements.toml`, MDM, and cloud requirements for `permissions.filesystem.deny_read` | OPEN |
| **[#15979](https://github.com/openai/codex/pull/15979)** | Support deny-read glob patterns — adds `deny_read_patterns` as policy state with macOS Seatbelt enforcement | OPEN |
| **[#15977](https://github.com/openai/codex/pull/15977)** | Enforce exact deny-read paths — base PR in deny-read stack, hardening shell execution paths to prevent bypass via approval/escalation | OPEN |
| **[#17720](https://github.com/openai/codex/pull/17720)** | Make skill loading filesystem-aware — routes skill discovery through filesystem abstraction for remote environment support | OPEN |
| **[#17674](https://github.com/openai/codex/pull/17674)** | Route apply_patch through the environment filesystem | OPEN |
| **[#17725](https://github.com/openai/codex/pull/17725)** | Fix remote apply-patch timeout regression — resolves sandbox helper discovery issues | OPEN |
| **[#17739](https://github.com/openai/codex/pull/17739)** | Add permission suggestions to PermissionRequest hooks — adds `permission_suggestions` to hook inputs for exec-policy and network suggestions | OPEN |
| **[#17735](https://github.com/openai/codex/pull/17735)** | Support PermissionRequest hook deny interrupts — allows handlers to return `decision.interrupt: true` for aborting with `TurnAbortReason::Interrupted` | OPEN |
| **[#17727](https://github.com/openai/codex/pull/17727)** | Show ChatGPT organization and groups in TUI startup header — adds account metadata display to CLI session header | OPEN |

**Notable Closed PRs:**
- **[#16849](https://github.com/openai/codex/pull/16849)** — Fixed open-in-targets error loop causing high CPU in VSCode extension
- **[#17471](https://github.com/openai/codex/pull/17471)** — Pinned Rust git patch dependencies to immutable revisions with SHA-256 coverage
- **[#17718](https://github.com/openai/codex/pull/17718)** — Added marketplace/add app-server RPC

---

## Feature Request Trends

The most-requested feature directions emerging from the issue queue:

| Theme | Issue Count | Description |
|-------|-------------|-------------|
| **CLI/TUI Enhancements** | 3+ | Configurable hotkeys, markdown table formatting, context indicator improvements |
| **Performance Optimization** | 6+ | CPU usage reductions, faster diff rendering, optimized context compaction |
| **Permission System** | 4+ | Better MCP tool approval flows, deny-read patterns, permission suggestions |
| **Platform Compatibility** | 5+ | Windows path handling, WebSocket stability, worktree support outside Codex |

---

## Developer Pain Points

1. **Rate Limit Behavior** — Token consumption feels unpredictable; users report unexpected rate limit depletion (#14593, #17731) and unclear feedback about usage patterns.

2. **Performance Regressions** — Multiple high-CPU issues affecting VSCode extensions across macOS and Linux, particularly around code patching and WebView rendering (#16231, #15764, #15393, #17394).

3. **WebSocket Instability on Linux** — Arch Linux and other distributions experiencing policy errors causing fallback to HTTPS and reconnect loops (#13041).

4. **MCP Approval Fatigue** — Constant or excessive approval prompts for MCP tools, especially Playwright, degrading the development experience (#13476, #16911).

5. **Sandbox Inconsistencies** — Linux sandbox behavior regressed in 0.118.0 (#16402); Windows firewall rule setup failures (#17686); path resolution issues on Windows (#17624).

6. **Context Management** — Long-running sessions experiencing compact task failures due to high demand; context indicator missing on Windows CLI (#10823, #17618).

---

*Generated from GitHub data (github.com/openai/codex) — 2026-04-14*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest

**Date:** 2026-04-14  
**Repository:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## Today's Highlights

The Gemini CLI team continues active development with a new nightly build (v0.39.0-nightly.20260414) addressing memory and quota display issues. A critical authorization problem affecting Google One AI Premium subscribers remains the most discussed issue in the community with 82 comments. Several UX improvements landed including vim cursor shape settings and debug console search/filter capabilities.

---

## Releases

| Version | Type | Description |
|---------|------|-------------|
| **v0.39.0-nightly.20260414.gdaf500623** | Nightly | Memory fix for trace's streamWrapper; quota footer display improvements for non-auto models |
| **v0.37.2** | Patch | Cherry-picked fix from v0.37.1-pr-24565 addressing specific bug |

**Full Changelog:** https://github.com/google-gemini/gemini-cli/compare/v0.37.1...v0.37.2

---

## Hot Issues

**1. [403 PERMISSION_DENIED for Google One AI Premium subscribers](https://github.com/google-gemini/gemini-cli/issues/24517)** 🔥🔥🔥  
*P1 priority | 82 comments | 43 👍*  
The CLI correctly identifies subscription tier ("Gemini Code Assist in Google One AI Pro") but all API requests are blocked before token consumption. This is the most active issue by far—82 comments indicate significant user frustration. The core problem: accounts are authenticated but cannot access the API.

**2. [RipGrep download failures cause 2+ minute startup delays](https://github.com/google-gemini/gemini-cli/issues/25323)**  
*Status: Need Triage | 6 comments*  
When RipGrep fails to download (e.g., restricted GitHub access), the CLI waits over 2 minutes instead of failing fast. Proposal: bundle RipGrep or implement fail-fast on access denied.

**3. [403 PERMISSION_DENIED with Chinese account](https://github.com/google-gemini/gemini-cli/issues/25268)**  
*Status: Need Triage | 5 comments*  
Chinese-language report of same 403 issue with personal Google account subscribed to Google AI Pro. Browser auth succeeds but requests fail.

**4. [AST-aware file reads, search, and mapping investigation](https://github.com/google-gemini/gemini-cli/issues/22745)**  
*Area: Agent | 5 comments*  
Epic tracking investigation into AST-aware tools for more precise method bounds, reduced tool call turns, and cleaner codebase navigation. Potential candidates: tilth or glyph.

**5. [File permission prompts keep repeating](https://github.com/google-gemini/gemini-cli/issues/24916)**  
*Area: Security | 3 comments*  
Users report that "allow for all future sessions" doesn't persist—permission requests repeat indefinitely for the same files.

**6. [Shell command execution stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**  
*Area: Core | 2 comments*  
After executing simple shell commands, the CLI hangs showing "Awaiting user input" even though the command completed. Affects non-interactive commands that don't await input.

**7. [EISDIR error on Windows temp path](https://github.com/google-gemini/gemini-cli/issues/25216)**  
*Area: Core | 1 comment*  
Running `--yolo` in PowerShell causes critical error: `EISDIR: illegal operation on a directory, realpath 'A:\a'`. Affects Windows users with mapped drives.

**8. [SSH text rendering scrambled](https://github.com/google-gemini/gemini-cli/issues/24202)**  
*Area: Core | 1 comment*  
Windows laptop users running SSH to gLinux cloudtop see scrambled text in Gemini CLI, making it unusable.

**9. [Thick black border at prompt bar](https://github.com/google-gemini/gemini-cli/issues/24915)**  
*Area: Core | Possible duplicate | 1 comment*  
Visual bug showing unwanted thick border at top and bottom of prompt area.

**10. [Table renders incrementally during streaming](https://github.com/google-gemini/gemini-cli/issues/25218)**  
*Area: Core | 0 comments*  
Screen reader users affected: tables re-render on every chunk during streaming instead of waiting for complete output, causing broken layout.

---

## Key PR Progress

**1. [Shell inference for file operations under sandboxing](https://github.com/google-gemini/gemini-cli/pull/25354)**  
*Author: gundermanc | Priority: P1*  
When `security.toolSandboxing` is enabled, excludes lower-fidelity tools (grep_search, replace, write_file, read_file) from main agent, relying on `run_shell_command` (sed, grep, etc.) for higher-fidelity sandboxed operations.

**2. [Vim mode cursor shape setting](https://github.com/google-gemini/gemini-cli/pull/25351)**  
*Author: chrisjcthomas*  
Adds opt-in `general.vimModeCursorShape` setting that updates terminal cursor shape to reflect Vim INSERT vs NORMAL mode via DECSCUSR sequences. Merged as #25347.

**3. [Add search and filter to debug console](https://github.com/google-gemini/gemini-cli/pull/25263)**  
*Author: mini2s | Status: CLOSED*  
Improves debug console with search and level-based filtering for faster troubleshooting. Addresses scrolling lag with massive logs.

**4. [Bounded structural truncation for telemetry](https://github.com/google-gemini/gemini-cli/pull/25344)**  
*Author: spencer426*  
Implements bounded structural truncation to prevent JSON parsing errors while maintaining OOM safety. Recursively truncates strings, arrays, and depth.

**5. [Flag for enabling traces specifically](https://github.com/google-gemini/gemini-cli/pull/25343)**  
*Author: spencer426*  
Introduces `telemetry.traces` configuration to decouple detailed attribute tracing from lightweight baseline telemetry. Heavy tracing spans (tool outputs, file reads, model responses) now opt-in.

**6. [Prevent YOLO mode from being downgraded](https://github.com/google-gemini/gemini-cli/pull/25341)**  
*Author: galz10 | Priority: P0/P1*  
Prevents YOLO mode decisions from being downgraded to `ASK_USER` when shell commands are evaluated as dangerous by heuristics.

**7. [Write permissions override governance file protections](https://github.com/google-gemini/gemini-cli/pull/25338)**  
*Author: galz10 | Priority: P2*  
Fixes issue where strict read-only protections for governance files (like `.git` directories) overrode explicit write permissions. Updated sandbox arguments for both macOS (Seatbelt) and Linux (bwrap).

**8. [Real-time voice mode with cloud and local backends](https://github.com/google-gemini/gemini-cli/pull/24174)**  
*Author: Abhijit-2592 | Area: Voice*  
Implements real-time voice mode supporting both cloud-based transcription via Gemini Live API and local-first transcription via Whisper (whisper.cpp).

**9. [Migrate core tools to native ToolDisplay property](https://github.com/google-gemini/gemini-cli/pull/25186)**  
*Author: mbleigh | Area: Agent*  
Migrates core CLI tools and rendering pipeline to emit and consume a native `ToolDisplay` object, deprecating the legacy `returnDisplay` adapter for more predictable UI rendering.

**10. [Active checkpoint tag fallback for /chat save](https://github.com/google-gemini/gemini-cli/pull/21439)**  
*Author: ReidKimball | Help Wanted | Area: Core*  
Adds active checkpoint tag to interactive sessions so `/chat save` can reuse the most recently active checkpoint tag when no explicit tag is provided. Improves checkpoint workflows.

---

## Feature Request Trends

Analysis of 50 recent issues reveals these recurring themes:

| Theme | Frequency | Description |
|-------|-----------|-------------|
| **Authentication/Authorization** | High | Persistent 403 errors even with valid subscriptions; login flow succeeds but API blocked |
| **Sandbox Improvements** | High | Enhanced file operation handling, write permission overrides, RipGrep bundling |
| **UI/UX Polish** | Medium | Vim mode enhancements, cursor shapes, border rendering, scroll behavior |
| **Voice Mode** | Medium | Real-time voice dictation with cloud/local backends |
| **Memory/Context** | Medium | Memory routing (global vs project), proactive memory writes, subagent awareness |
| **Tool Improvements** | Medium | AST-aware tools, grep-code enhancements, parallel tool call layouts |
| **SSH/Terminal Compatibility** | Medium | Text scrambling over SSH, cursor positioning in alternate buffer mode |
| **Plan Mode** | Medium | Subagent approval awareness, plan content display in chat |

---

## Developer Pain Points

1. **Authentication Deadlock** — Google One AI Premium subscribers cannot use the product despite being paying customers. The 82-comment thread indicates this blocks real work for many users.

2. **Slow Startup** — RipGrep download failures cause 2+ minute delays, creating a poor first-run experience. No bundled fallback.

3. **Permission Loops** — "Allow for all future sessions" doesn't stick, causing repeated prompts for same files.

4. **Shell Hangs** — Simple commands leave the CLI in a "Waiting input" state, requiring workarounds.

5. **Windows Path Issues** — Edge cases with mapped drives and temp directories cause critical failures.

6. **Telemetry Friction** — Heavy tracing spans (tool outputs, file reads) create friction between low-overhead monitoring and deep debugging needs.

7. **SSH Rendering** — Users on SSH connections get scrambled text, making the tool unusable in common enterprise scenarios.

---

*Digest generated from GitHub data for 2026-04-14. All issue and PR links reference https://github.com/google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest

**Date:** 2026-04-14
**Repository:** github.com/github/copilot-cli

---

## 1. Today's Highlights

GitHub released **v1.0.25** on April 13, introducing MCP server installation from the registry with guided configuration, fixing the Esc key behavior after failed /resume sessions, and enabling ACP clients to provide MCP servers. A critical issue (#2591) has emerged where single session requests are consuming 80-100 premium requests per tool invocation, drawing significant community attention with 25 comments and 11 thumbs-ups. The community continues to push for enterprise features, particularly around fine-grained token permissions and comprehensive model availability parity with VS Code Copilot.

---

## 2. Releases

### v1.0.25 (2026-04-13)
**GitHub Release:** https://github.com/github/copilot-cli/releases/tag/v1.0.25

Key changes in this release:
- **MCP Server Registry Integration**: Users can now install MCP servers from the registry with guided configuration directly in the CLI
- **Esc Key Fix**: Resolved issue where Esc key didn't work correctly after failed /resume session lookup
- **Model Persistence**: Resolved model is now persisted in session history, with deferred model changes during active turns
- **ACP Client MCP Support**: ACP clients can now provide MCP servers (stdio mode)

---

## 3. Hot Issues

### 1. Single Session Request → Infinite Premium Requests Consumed
**Issue #2591** | 25 comments | 11 👍 | Status: OPEN

A critical bug where one user request consumes 80-100 premium requests due to multiple API calls during tool invocations and thinking processes. This represents a significant cost impact for users on limited request quotas. The community is actively discussing potential causes and workarounds.

🔗 https://github.com/github/copilot-cli/issues/2591

---

### 2. SHIFT+ENTER Executes Prompt Instead of Line Break
**Issue #1481** | 22 comments | 11 👍 | Status: CLOSED

Users expect SHIFT+ENTER to create line breaks (standard in most chat applications), but Copilot CLI uses CTRL+ENTER for this purpose. The recent closure suggests a fix may be in progress or completed.

🔗 https://github.com/github/copilot-cli/issues/1481

---

### 3. "Copilot Requests" Permission Not Visible for Org-Owned Tokens
**Issue #223** | 20 comments | 63 👍 | Status: OPEN | Area: permissions, enterprise, networking

Organizations cannot create tokens with "Copilot Requests" permission for corporate automation workflows. This blocks enterprise adoption as individual user PATs are not acceptable in corporate environments. The 63 thumbs-up indicates strong enterprise interest.

🔗 https://github.com/github/copilot-cli/issues/223

---

### 4. Copilot CLI Missing Organization-Enabled Models
**Issue #1703** | 19 comments | 31 👍 | Status: OPEN | Area: models

The CLI displays a reduced model list compared to VS Code Copilot on the same account. Notably, models like Gemini 3.1 Pro enabled in organization settings are unavailable in the CLI. This affects users who rely on specific models for their workflows.

🔗 https://github.com/github/copilot-cli/issues/1703

---

### 5. Sporadic Policy Blocking Issue Retrieving Models
**Issue #1595** | 18 comments | 8 👍 | Status: OPEN | Area: enterprise, models

Enterprise users encounter "access denied by Copilot policy" errors when listing models, despite having valid Enterprise Copilot subscriptions and available quota. This intermittent behavior complicates enterprise deployment.

🔗 https://github.com/github/copilot-cli/issues/1595

---

### 6. Global Hooks Configuration Request
**Issue #1157** | 12 comments | 25 👍 | Status: CLOSED | Feature Request

Current hooks implementation lacks global configuration, requiring per-repository setup via `.github/copilot-hooks.json`. Users request Claude Code/Cursor-style global hooks with UserPromptSubmit, Stop, and Notification events. The closure indicates this may be planned or implemented.

🔗 https://github.com/github/copilot-cli/issues/1157

---

### 7. Sandbox Mode for File Access Restriction
**Issue #892** | 7 comments | 31 👍 | Status: OPEN | Priority: medium, effort: large

Security-conscious users request sandboxing capabilities to restrict the CLI's filesystem permissions to a specified working directory. This addresses concerns about the agent accessing or modifying files outside the intended workspace.

🔗 https://github.com/github/copilot-cli/issues/892

---

### 8. Project/Repository-Scoped Plugins
**Issue #1665** | 4 comments | 10 👍 | Status: OPEN | Area: plugins

Plugins are currently installed per-user and loaded globally, making it difficult to enable repo-specific plugins. This feature would improve team collaboration and project-specific tooling.

🔗 https://github.com/github/copilot-cli/issues/1665

---

### 9. Linux Right-Click Menu Capture
**Issue #2158** | 4 comments | 6 👍 | Status: OPEN | Area: platform-linux, tools

On Linux, Copilot captures right-click events and attempts to use its own copy/paste functionality, but the copy operation fails with `spawn xclip ENOENT` error. This breaks standard terminal workflows.

🔗 https://github.com/github/copilot-cli/issues/2158

---

### 10. Ctrl+S Executes Command Instead of Saving
**Issue #2677** | 1 comment | 0 👍 | Status: OPEN | Reported in v1.0.25

When pressing Ctrl+S after entering a command, Copilot CLI displays "/" with slash command autocomplete instead of executing the command. This new regression was reported in the latest version.

🔗 https://github.com/github/copilot-cli/issues/2677

---

## 4. Key PR Progress

**Note:** No pull requests were updated in the last 24 hours. The development team may be focused on issue triaging and the recent v1.0.25 release. Community members are encouraged to monitor the repository for upcoming PRs addressing the hot issues identified above.

---

## 5. Feature Request Trends

Analysis of the 50 issues reveals several dominant feature directions:

### Enterprise & Organization Features
- Fine-grained token permissions visibility for organization-owned tokens (#223)
- Complete model parity with VS Code Copilot (#1703)
- OpenTelemetry observability support (#2471)
- Sporadic policy blocking fixes for enterprise deployments (#1595)

### Security & Control
- Sandbox mode for filesystem access restriction (#892)
- Global hooks configuration for consistent automation (#1157)
- Project/repository-scoped plugins (#1665)

### Developer Experience
- Session management (delete sessions via command #2019)
- Command history visibility (allow copilot to see user command output #1575)
- LSP/Intellisense integration from connected IDE (#2679)

### Input & Terminal Improvements
- SHIFT+ENTER for line breaks (#1481)
- Image clipboard paste support (#2409, #2675)
- Ctrl+S command execution (#2677)
- Tab completion for PATH-based commands (#1166)

---

## 6. Developer Pain Points

### Critical Issues

**Premium Request Consumption Bug (#2591)**
The most pressing concern: users report single requests consuming 80-100 premium API calls. This creates unexpected costs and undermines trust in the tool's efficiency. Immediate attention is needed.

**Enterprise Model Access Inconsistency (#1703, #1595)**
Organizations enabling specific models in Copilot settings find them unavailable in the CLI. Combined with sporadic policy blocking, this creates friction for enterprise deployments where VS Code Copilot serves as a reference implementation.

### User Experience Friction

**Keyboard Shortcut Inconsistency**
SHIFT+ENTER not working for line breaks (vs. other chat apps) and Ctrl+S triggering unexpected behavior create daily frustrations for active users.

**Linux Platform Issues**
Right-click copy failure with xclip errors specifically impacts Linux users, suggesting platform testing gaps.

**Release Packaging Concerns (#2588)**
Reports indicate release assets may contain different versions than tagged releases, causing confusion for automated deployment pipelines.

### Configuration Limitations

**Hooks and Plugins Architecture**
The lack of global hooks configuration and per-user-only plugin loading forces repetitive per-repository setup, reducing the CLI's usability in team environments.

**Session Management**
No command exists to delete sessions from history, and recent regression (#2655) causes `cwd` and `branch` columns to be NULL in session-store.db since ~v1.0.13.

---

**End of Digest**

*Generated: 2026-04-14 | Data source: github.com/github/copilot-cli*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest

## 2026-04-14

---

### 1. Today's Highlights

The Kimi Code CLI team shipped version 1.33.0, unifying the managed model display as "Kimi for Code" and dropping hardcoded version references. The 1.32.0 release addressed critical fixes including PyInstaller CLI subcommand loading and MCP tool output truncation. Community activity remains high with 10 issues and 15 PRs updated in the last 24 hours, focusing on thinking process visibility, session management, and cross-platform shell behavior.

---

### 2. Releases

**v1.33.0** (2026-04-13)
- **Refactor**: Unified managed model display as "Kimi for Code" across welcome screen and login tips, removing hardcoded `kimi-k2.5` version strings
- PR: [#1860](https://github.com/MoonshotAI/kimi-cli/pull/1860) | [#1861](https://github.com/MoonshotAI/kimi-cli/pull/1861)

**v1.32.0** (2026-04-13)
- **Fix**: PyInstaller binary now includes lazy-loaded CLI subcommands ([#1831](https://github.com/MoonshotAI/kimi-cli/pull/1831))
- **Fix**: MCP tool output truncated to 100K characters with graceful handling of unsupported content types ([#1843](https://github.com/MoonshotAI/kimi-cli/pull/1843))
- **Feature**: Compact thinking indicator with animated dots, elapsed time, and live tokens/second display ([#1857](https://github.com/MoonshotAI/kimi-cli/pull/1857))
- PR: [#1858](https://github.com/MoonshotAI/kimi-cli/pull/1858)

---

### 3. Hot Issues

| # | Title | Status | Key Details | Community Reaction |
|---|-------|--------|-------------|-------------------|
| [#823](https://github.com/MoonshotAI/kimi-cli/issues/823) | Authorization failed after several conversation rounds | **CLOSED** | Token/session expiry after multi-round conversations; requires new terminal to recover. 14 comments, 2 👍 | Long-standing pain point resolved—users report improved session stability |
| [#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864) | Display full thinking traces in CLI | **OPEN** | v1.33.0 users on Linux request visibility into complete reasoning chains | 3 comments; thought process transparency gaining traction |
| [#1830](https://github.com/MoonshotAI/kimi-cli/issues/1830) | VSCode extension can't slash skills before typing | **OPEN** | Slash command palette requires text input first; breaks workflow | Windows users on Vivace subscription affected |
| [#1774](https://github.com/MoonshotAI/kimi-cli/issues/1774) | @mention file path error | **OPEN** | File reference resolution fails on macOS in `~` directory | Intermittent path resolution bug |
| [#1632](https://github.com/MoonshotAI/kimi-cli/issues/1632) | Option to hide thinking content | **OPEN** | Users want toggle for "Thinking..." spinner and grey italic text during reasoning | 1 👍; requested for cleaner terminal output |
| [#1862](https://github.com/MoonshotAI/kimi-cli/issues/1862) | FetchURL duplicates GitHub issue body | **OPEN** | Trafilatura comment extraction returne duplicate content | Linked PR [#1863](https://github.com/MoonshotAI/kimi-cli/pull/1863) addresses this |
| [#1859](https://github.com/MoonshotAI/kimi-cli/issues/1859) | Thinking process not displayed | **OPEN** | Mac user on v1.32.0 with kimi-for-coding sees no thinking output | Regression report for thinking visibility |
| [#1856](https://github.com/MoonshotAI/kimi-cli/issues/1856) | Allow project-level custom system prompt | **OPEN** | Request for `system_prompt.md` override at project root | Enables team-specific configurations |
| [#1855](https://github.com/MoonshotAI/kimi-cli/issues/1855) | Windows executes Linux commands by default | **OPEN** | Cross-platform shell behavior inconsistency | Feature request for configurable shell (bash/cmd/powershell) |
| [#1853](https://github.com/MoonshotAI/kimi-cli/issues/1853) | Multi-session status viewing in TUI | **OPEN** | Extend current session list with progress states (TODO, reasoning, awaiting confirmation) | Chinese user request for enhanced TUI visibility |

---

### 4. Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#1863](https://github.com/MoonshotAI/kimi-cli/pull/1863) | fix(fetch): suppress duplicated extracted comment text | **OPEN** | Fixes GitHub issue body duplication by separating Trafilatura main text and comments; includes regression test |
| [#1767](https://github.com/MoonshotAI/kimi-cli/pull/1767) | feat(yolo-mode): add YOLO support to web interface | **OPEN** | Extends auto-approve YOLO mode to Web UI with backend API changes |
| [#1637](https://github.com/MoonshotAI/kimi-cli/pull/1637) | fix: route MCP server log notifications to loguru instead of TUI | **OPEN** | Redirects SearXNG-style MCP server logs from RichHandler to proper logging framework |
| [#1839](https://github.com/MoonshotAI/kimi-cli/pull/1839) | feat(shell): add /delete command for session removal | **OPEN** | Implements `/delete` and `/remove` aliases with safety constraints (cannot delete current session) |
| [#1854](https://github.com/MoonshotAI/kimi-cli/pull/1854) | Remind model do not use unsafe glob pattern | **OPEN** | Safety improvement preventing `**` prefix in glob patterns |
| [#1852](https://github.com/MoonshotAI/kimi-cli/pull/1852) | fix: log hook task exceptions instead of silently discarding them | **OPEN** | Replaces silent exception suppression with proper `logger.error` across 4 files; affects PreToolUse, PostToolUse, PreLLM, PostCompact hooks |
| [#1738](https://github.com/MoonshotAI/kimi-cli/pull/1738) | Add format validation for WriteFile tool | **CLOSED** | Post-write validation for JSON, XML, Markdown files with negligible performance impact |
| [#1842](https://github.com/MoonshotAI/kimi-cli/pull/1842) | docs: update en/zh docs for new features | **CLOSED** | Comprehensive documentation updates including custom_headers, MCP tool tables, SetTodoList modes, sensitive file filtering |
| [#1709](https://github.com/MoonshotAI/kimi-cli/pull/1709) | fix(diff): align inline highlight offsets with tab-expanded text | **CLOSED** | Fixes visual alignment in diff display when tabs are expanded |
| [#1533](https://github.com/MoonshotAI/kimi-cli/pull/1533) | docs(core): fix missing cli entry point file reference | **CLOSED** | Corrected AGENTS.md paths to match actual file structure |

---

### 5. Feature Request Trends

Analysis of recent issues reveals these dominant feature directions:

1. **Thinking Process Visibility** (3 issues)
   - Display full thinking traces ([#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864))
   - Option to hide thinking content ([#1632](https://github.com/MoonshotAI/kimi-cli/issues/1632))
   - Thinking process not appearing ([#1859](https://github.com/MoonshotAI/kimi-cli/issues/1859))
   - *Trend*: Users want granular control over reasoning visibility

2. **Session Management Enhancements** (2 issues)
   - Multi-session status in TUI ([#1853](https://github.com/MoonshotAI/kimi-cli/issues/1853))
   - Project-level custom system prompts ([#1856](https://github.com/MoonshotAI/kimi-cli/issues/1856))
   - *Trend*: Deeper session state awareness and customization

3. **Cross-Platform Shell Behavior** (1 issue + 1 PR)
   - Windows/Linux command execution toggle ([#1855](https://github.com/MoonshotAI/kimi-cli/issues/1855))
   - *Trend*: Explicit shell configuration for different environments

4. **Editor/IDE Integration**
   - VSCode extension slash command UX ([#1830](https://github.com/MoonshotAI/kimi-cli/issues/1830))
   - *Trend*: Smoother IDE plugin experiences

---

### 6. Developer Pain Points

| Pain Point | Frequency | Affected Users | Status |
|------------|-----------|-----------------|--------|
| Authorization/session expiry after multi-round chats | High | All platforms | **CLOSED** [#823](https://github.com/MoonshotAI/kimi-cli/issues/823) |
| Thinking process visibility inconsistencies | Medium | Linux/Mac users | Open ([#1859](https://github.com/MoonshotAI/kimi-cli/issues/1859), [#1864](https://github.com/MoonshotAI/kimi-cli/issues/1864)) |
| File @mention path resolution errors | Medium | macOS users | Open [#1774](https://github.com/MoonshotAI/kimi-cli/issues/1774) |
| PyInstaller binary missing subcommands | Low (fixed) | CLI binary users | Fixed in 1.32.0 |
| MCP tool output truncation | Low (fixed) | MCP server users | Fixed in 1.32.0 |
| TUI log pollution from MCP servers | Low | MCP users | Open PR [#1637](https://github.com/MoonshotAI/kimi-cli/pull/1637) |
| FetchURL comment duplication | Low | Web content extraction users | Open PR [#1863](https://github.com/MoonshotAI/kimi-cli/pull/1863) |

---

*Digest generated from GitHub data for [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | 2026-04-14*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-14

## Today's Highlights

OpenCode sees intense community activity around GitHub Copilot integration and session management. A critical issue (#8030) with Copilot auth consuming premium requests has attracted 216+ comments, while the team is actively merging session archive/unarchive features across multiple PRs. Recent work also focuses on Effect-ifying services (InstanceState migrations) and fixing Opus 4.6 compatibility issues.

---

## Releases

**None** — No new releases in the past 24 hours.

---

## Hot Issues

| # | Title | Comments | 👍 | Why It Matters |
|---|-------|----------|----|----------------|
| [#8030](https://github.com/anomalyco/opencode/issues/8030) | Copilot auth now sets far too many requests as "user" consuming premium requests rapidly | 216 | 79 | Critical billing issue — agent-initiated requests incorrectly counted as premium. Blocks ~60x quota consumption for affected users. |
| [#13768](https://github.com/anomalyco/opencode/issues/13768) | Opus 4.6 does not support assistant message prefill | 57 | 23 | Opentui crashes when using latest Opus models, blocking production use. Repro steps and session exports provided. |
| [#11112](https://github.com/anomalyco/opencode/issues/11112) | Always stuck at "Preparing write..." | 53 | 22 | Write tool repeatedly aborts with no recovery, affecting Prometheus users on latest oh-my-opencode. |
| [#8785](https://github.com/anomalyco/opencode/issues/8785) | Bun has crashed (Windows, Zen) | 25 | 6 | Full crash with stack trace in OpenCode Zen on Windows 10, segfaults during execution. |
| [#6651](https://github.com/anomalyco/opencode/issues/6651) | Dynamic model selection for subagents via Task tool | 23 | 34 | Feature request to let primary agent control which model subagents use — enables cost/quality optimization. |
| [#8140](https://github.com/anomalyco/opencode/issues/8140) | Configurable context limit and auto-compaction threshold | 20 | 39 | Users want earlier compaction triggers and custom context limits for cost optimization — 39 👍 indicates strong demand. |
| [#6152](https://github.com/anomalyco/opencode/issues/6152) | Session context usage display (like /context in Claude) | 16 | 73 | TUI dialog to show context window breakdown — highest 👍 ratio in recent issues. |
| [#17911](https://github.com/anomalyco/opencode/issues/17911) | Error on session compaction on Opus 4.6 | 6 | 3 | Compaction fails when thinking/redacted_thinking blocks are modified — related to #13768. |
| [#22261](https://github.com/anomalyco/opencode/issues/22261) | Windows Terminal garbled text after LLM response | 5 | 0 | **[CLOSED]** Terminal becomes unresponsive with ANSI escape code flood after responses — Windows 11 specific. |
| [#22020](https://github.com/anomalyco/opencode/issues/22020) | Global AGENTS.md not loaded when project AGENTS.md exists | 5 | 1 | **[CLOSED]** Configuration precedence bug — global rules silently ignored. |

---

## Key PR Progress

| # | Title | Status | Significance |
|---|-------|--------|---------------|
| [#22372](https://github.com/anomalyco/opencode/pull/22372) | Session archive/unarchive support to TUI | OPEN | Adds `/archive` slash command, tab-toggled archived session visibility, and unarchive capability. |
| [#22371](https://github.com/anomalyco/opencode/pull/22371) | Fix GitHub Copilot compaction requests | OPEN | Fixes noop tool compatibility for `@ai-sdk/github-copilot` to keep compaction valid when tool history exists. |
| [#22359](https://github.com/anomalyco/opencode/pull/22359) | Effectify Env service | OPEN | Converts Env service from `Instance.state` to `InstanceState.make` to avoid ALS-related errors in Node. |
| [#22357](https://github.com/anomalyco/opencode/pull/22357) | Add experimental question HttpApi slice | OPEN | New `/experimental/httpapi/question` endpoint with Effect Schema and Zod compatibility. |
| [#22381](https://github.com/anomalyco/opencode/pull/22381) | Remove state helper (instance refactor) | OPEN | Ongoing InstanceState migration work. |
| [#22384](https://github.com/anomalyco/opencode/pull/22384) | Describe HttpApi boundary composition | OPEN | Documentation PR for auth, instance lookup, and error mapping composition patterns. |
| [#22376](https://github.com/anomalyco/opencode/pull/22376) | Persist immediate OAuth connections (MCP) | OPEN | Stores MCP client and cached tool definitions when OAuth completes without browser redirect. |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) | Stop streaming markdown/code after message completes | OPEN | Fixes `TextPart` streaming state from `message.time.completed` so finished messages render all rows correctly. |
| [#22328](https://github.com/anomalyco/opencode/pull/22328) | Session archive/unarchive (rebased) | CLOSED | Original PR by uriva, now merged via #22372. |
| [#13562](https://github.com/anomalyco/opencode/pull/13562) | Add opt-in flag for question tool (ACP) | CLOSED | Added `OPENCODE_EXPERIMENTAL_QUESTION_TOOL` flag, keeps question tool safe by default for custom ACP clients. |

---

## Feature Request Trends

1. **Session Management** — Archive/unarchive, search archived sessions (#16000, #13463), and session context display (#6152) are highly requested. Multiple PRs now implementing archive functionality.

2. **Model/Provider Flexibility** — Dynamic model selection for subagents (#6651), configurable context limits (#8140), global custom providers (#153), and Jupyter notebook support (#11409) indicate demand for more control over LLM interactions.

3. **Developer Experience** — Prompt history search with Ctrl+R (#5062), mobile touch optimization (#18767), web UI file editing (#11501), and observability hooks (#6142) target productivity improvements.

4. **Plugin/Integration Improvements** — BMAD workflow plugin (#21842), MCP OAuth persistence (#22376), npm registry scope respect (#21123), and durable event export surface (#19567) expand ecosystem capabilities.

5. **Cost/Resource Optimization** — Configurable compaction thresholds (#8140) and reasoning summary controls (#21237) show users want finer control over API usage.

---

## Developer Pain Points

| Pain Point | Issue(s) | Impact |
|------------|----------|--------|
| **Copilot Premium Quota Drain** | #8030 | Agent requests incorrectly counted as user requests — users burning through quotas 60x faster than expected. |
| **Opus 4.6 Compatibility** | #13768, #17911 | TUI crashes and compaction errors block users from latest models. |
| **Writing Tool Failures** | #11112 | "Preparing write..." stuck prevents task completion for Prometheus users. |
| **Memory Leaks** | #21430 | Bun process exceeds 3GB after running web mode, causing MaxListeners warnings. |
| **Log Bloat** | #17218 | Permission service writes entire ruleset to every log line — 50GB+ of logs with moderate tool usage. |
| **Windows Terminal Instability** | #8785, #22261 | Crashes and garbled text rendering on Windows 11, particularly in Zen mode. |
| **npm Registry Scope Ignored** | #21123 | Plugin installs bypass private registries, breaking internal package workflows. |
| **Session Archive UX** | #16000, #13463 | Cannot unarchive or search archived sessions — available via CLI but not TUI. |

---

*Generated from [anomalyco/opencode](https://github.com/anomalyco/opencode) activity on 2026-04-14*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-04-14

## Today's Highlights

Pi v0.67.1 shipped with lightweight anonymous telemetry to track per-version usage, enabling the team to understand release adoption. The community resolved several UI/UX issues including OSC 8 clickable markdown links, tmux warning suppression, and a fix for terminal flickering during large TUI extension renders.

---

## Releases

| Version | Summary |
|---------|---------|
| **v0.67.1** | Adds anonymous telemetry ping (`https://pi.dev/install?version=x.y.z`) after writing `lastChangelogVersion` in `settings.json`. Provides a reliable per-version usage signal. |
| **v0.67.0** | Same telemetry implementation (likely patch refinement). |

---

## Hot Issues

1. **[#3094](https://github.com/badlogic/pi-mono/issues/3094)** — Loader spinner + tall ui.custom dialog causes heavy flickering (5 comments, OPEN)
   - Affects TUI extensions like questionnaire/permission gate when content exceeds viewport. Community requests full redraw optimization to eliminate flicker.

2. **[#2988](https://github.com/badlogic/pi-mono/issues/2988)** — Multiline content sends each line separately (4 comments, CLOSED)
   - Copied browser console output splits into individual messages. Exists across multiple releases; resolved.

3. **[#2850](https://github.com/badlogic/pi-mono/issues/2850)** — `/exit` command documented but not implemented (4 comments, CLOSED)
   - README documents both `/quit` and `/exit`, but only `/quit` works. Fixed for consistency.

4. **[#3115](https://github.com/badlogic/pi-mono/issues/3115)** — `@latest` ref treated as static pin, preventing `pi update` (3 comments, CLOSED)
   - Installing with `@latest` freezes the package at install-time; `pi update` never fetches new commits. Resolved.

5. **[#3112](https://github.com/badlogic/pi-mono/issues/3112)** — Tool arguments not validated in Cloudflare Workers (3 comments, CLOSED)
   - `validateToolArguments` skips validation entirely in Workers environment, allowing malformed tool calls.

6. **[#3103](https://github.com/badlogic/pi-mono/issues/3103)** — Markdown links should use OSC 8 hyperlink sequences (3 comments, CLOSED)
   - Links styled but not clickable in terminals supporting Kitty/iTerm2/WezTerm/etc. Now fixed.

7. **[#2636](https://github.com/badlogic/pi-mono/issues/2636)** — Adding a `/clear` command (3 comments, CLOSED)
   - Requested for terminal cleanup similar to standard `clear` command. Implemented.

8. **[#2401](https://github.com/badlogic/pi-mono/issues/2401)** — Shift+Enter sends message instead of new line on Chromebooks (3 comments, CLOSED)
   - Only Ctrl+J worked for newlines; shift+enter triggered submission. Fixed.

9. **[#3057](https://github.com/badlogic/pi-mono/issues/3057)** — Detached bash child processes leak as orphans (2 comments, OPEN)
   - Closing terminal leaves child processes running, accumulating 811 orphaned `pi` processes (~90GB RAM observed). High-impact bug.

10. **[#3083](https://github.com/badlogic/pi-mono/issues/3083)** — Spinner row leaks into scrollback and isn't cleared on stop() (2 comments, OPEN)
    - Duplicate frozen spinner rows appear in scrollback. Affects terminal usability.

---

## Key PR Progress

| PR | Title | Status |
|----|-------|--------|
| **[#3105](https://github.com/badlogic/pi-mono/pull/3105)** | fix(tui): skip full redraw when only offscreen lines change | OPEN |
| **[#3111](https://github.com/badlogic/pi-mono/pull/3111)** | feat(tui): add super keybinding support for kitty protocol | OPEN |
| **[#3106](https://github.com/badlogic/pi-mono/pull/3106)** | fix(tui): no trailing spaces with no bg color | OPEN |
| **[#3099](https://github.com/badlogic/pi-mono/pull/3099)** | feat(coding-agent): accept inline extension factories in main() | OPEN |
| **[#2989](https://github.com/badlogic/pi-mono/pull/2989)** | Fix Ctrl+Alt key matching in tmux | OPEN |
| **[#3125](https://github.com/badlogic/pi-mono/pull/3125)** | feat(bedrock): support Bearer token auth for Converse API | CLOSED |
| **[#3102](https://github.com/badlogic/pi-mono/pull/3102)** | feat(tui): wrap markdown links in OSC 8 hyperlink sequences | CLOSED |
| **[#3116](https://github.com/badlogic/pi-mono/pull/3116)** | Add configurable sourceInfoStyle setting for autocomplete tags | CLOSED |
| **[#3097](https://github.com/badlogic/pi-mono/pull/3097)** | feat: add PI_SKIP_TMUX_WARNING env var to suppress tmux warning | CLOSED |
| **[#3072](https://github.com/badlogic/pi-mono/pull/3072)** | fix(coding-agent): custom models for built-in providers and list-models error surfacing | OPEN |

**Notable merged changes:**
- **Bedrock Bearer auth** (#3125): Users can now authenticate with API keys instead of IAM credentials.
- **OSC 8 links** (#3102): Markdown links now clickable in supported terminals.
- **TMUX warning suppression** (#3097): New `PI_SKIP_TMUX_WARNING` env var added.
- **Ctrl+Alt tmux fix** (#2989): Resolves keyboard shortcut conflicts in tmux environments.

---

## Feature Request Trends

Analysis of 50 issues reveals these dominant themes:

1. **Terminal/TUI Improvements** — Multiple requests for flickering fixes, spinner behavior, scrollback management, and cursor handling.
2. **Keyboard/Input Refinements** — Ctrl+Alt shortcuts, shift+enter behavior, IME composition handling.
3. **Provider Extensibility** — Bedrock Bearer auth, OpenRouter routing fields, OpenAI service tier support.
4. **Extension API Gaps** — `after_provider_response` hook, branching from session header, inline extension factories.
5. **Package Management** — `@latest` pinning issue, `--no-agents-md` flag, `.pi` directory standardization.
6. **Markdown/UI Polish** — OSC 8 links, trailing whitespace removal, configurable source info styling.

---

## Developer Pain Points

- **Orphaned processes**: Bash child processes leak when terminal closes, causing massive memory accumulation (#3057).
- **TUI flickering**: Large extension content triggers excessive redraws, degrading UX (#3094, #3083).
- **Tool validation gaps**: Cloudflare Workers bypass validation; partialJson handling inconsistent across providers (#3112, #3131).
- **Shortcut inconsistencies**: Ctrl+Alt keys work inconsistently in tmux without Kitty protocol (#2989, #3133).
- **Package version pinning**: `@latest` ref doesn't update, confusing users expecting automatic updates (#3115).
- **macOS locale issues**: Screenshots fail to read in `en_AU` due to AM/PM case sensitivity (#3135).

---

*Generated 2026-04-14 | Data source: github.com/badlogic/pi-mono*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest

**Date:** 2026-04-14  
**Repository:** [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## Today's Highlights

Qwen Code released **v0.14.4** with significant CLI improvements including CJK word segmentation and Ctrl+arrow navigation fixes. A critical regression in the edit tool affecting Python file modifications (#1922) has resurfaced with 16 community comments, while the team pushes forward with major features like auto-memory systems and enhanced loop detection.

---

## Releases

### v0.14.4 (Latest Stable)
**Released:** 2026-04-14  
**Changes:**
- **CJK Word Segmentation:** Improved word boundary detection for Chinese/Japanese/Korean text, enabling proper navigation with Ctrl+arrow keys ([#2942](https://github.com/QwenLM/qwen-code/pull/2942) by @Apophis3158)
- **VSCode Fix:** Force fresh ACP session on new-session action to prevent stale state ([#2874](https://github.com/QwenLM/qwen-code/pull/2874) by @yiliang114)

### v0.14.4-nightly.20260414.1486e8538
- **Context Usage API:** Exposed `/context` usage data in non-interactive mode and SDK API, enabling programmatic context window monitoring ([#2916](https://github.com/QwenLM/qwen-code/pull/2916) by @wenshao)

---

## Hot Issues

| # | Issue | Summary | Why It Matters | Reactions |
|---|-------|---------|----------------|-----------|
| [#1922](https://github.com/QwenLM/qwen-code/issues/1922) | **Edit Tool Regression** | File editing fails in latest version, was previously fixed | Critical blocking issue; 16 comments indicate widespread impact | 🔥 High priority |
| [#2973](https://github.com/QwenLM/qwen-code/issues/2973) | **System Prompt Adherence** | Model poorly follows system instructions | Affects reliability of structured workflows | ⚠️ Quality concern |
| [#2426](https://github.com/QwenLM/qwen-code/issues/2426) | **Free Tier Quota Reduction** | Daily free requests allegedly reduced from 1000 to ~300 | User trust and adoption impact | 💬 Active discussion |
| [#1149](https://github.com/QwenLM/qwen-code/issues/1149) | **PDF Reading Support** | Users cannot read PDF files | Common developer need, blocks workflows | 📄 Feature gap |
| [#3037](https://github.com/QwenLM/qwen-code/issues/3037) | **qwen3.6-plus Model Error** | Model listed but returns 400 error | Model availability confusion | 🔧 API inconsistency |
| [#3144](https://github.com/QwenLM/qwen-code/issues/3144) | **Terminal Scroll Jumping** | Rapid scroll bounce during streaming | Poor UX during agent execution | 🖥️ Usability bug |
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | **Free Tier Policy Change** | Proposal to reduce free tier to 100 req/day | Community concern about accessibility | 📉 Policy impact |
| [#3233](https://github.com/QwenLM/qwen-code/issues/3233) | **OAuth Signup Failures** | Cannot register via email, GitHub, or Google | Blocks new user onboarding | 🚫 Auth blocker |
| [#2703](https://github.com/QwenLM/qwen-code/issues/2703) | **Path Number Spacing Bug** | File paths with numbers get incorrectly spaced (e.g., `D:\2026年` → `D:\2026 年`) | Windows path handling issue | 🐛 Edge case bug |
| [#3108](https://github.com/QwenLM/qwen-code/issues/3108) | **Hook Support Incomplete** | VSCode ACP hooks not aligned with core execution | Limits extensibility | 🔌 Integration gap |

---

## Key PR Progress

| PR | Title | Impact | Status |
|----|-------|--------|--------|
| [#3087](https://github.com/QwenLM/qwen-code/pull/3087) | **Managed Auto-Memory System** | Model learns from conversations automatically; persistent queryable memory across sessions | 🔄 Open |
| [#3093](https://github.com/QwenLM/qwen-code/pull/3093) | **Session Rename/Delete/Auto-Title** | Full session lifecycle management; LLM-generated titles; resume by custom name | 🔄 Open |
| [#2936](https://github.com/QwenLM/qwen-code/pull/2936) | **Fork Subagent Implementation** | Background context sharing via CacheSaid; enables complex multi-agent workflows | 🔄 Open |
| [#3178](https://github.com/QwenLM/qwen-code/pull/3178) | **Tool Validation Retry Loop Detection** | Prevents infinite loops when tool calls repeatedly fail schema validation | 🔄 Open |
| [#3236](https://github.com/QwenLM/qwen-code/pull/3236) | **Enhanced Loop Detection** | Adds thought/action stagnation checks; fixes EAGAIN pty errors | 🔄 Open |
| [#3115](https://github.com/QwenLM/qwen-code/pull/3115) | **Commit Attribution Tracking** | Per-file AI contribution tracking; enables compliance and attribution requirements | 🔄 Open |
| [#3160](https://github.com/QwenLM/qwen-code/pull/3160) | **PDF Text Extraction & Jupyter Support** | Fallback for text-only models; proper .ipynb parsing | 🔄 Open |
| [#3179](https://github.com/QwenLM/qwen-code/pull/3179) | **Fix CJK IME Input Loss** | Resolved Kitty protocol issue where CJK keystrokes were silently dropped | ✅ Merged |
| [#3212](https://github.com/QwenLM/qwen-code/pull/3212) | **Custom Gemini baseUrl Fix** | Respected custom API proxy endpoints in modelProviders settings | ✅ Merged |
| [#3232](https://github.com/QwenLM/qwen-code/pull/3232) | **Startup Performance Profiler** | Lightweight profiler for diagnosing CLI startup latency via `QWEN_CODE_PROFILE_STARTUP=1` | 🔄 Open |

---

## Feature Request Trends

Analysis of recent Issues and PRs reveals these dominant feature directions:

1. **File Intelligence**
   - Git-native file discovery (replace `fdir` with `git ls-files` + `ripgrep`)
   - PDF text extraction and Jupyter notebook parsing
   - Undo functionality (`/undo` command)
   - Path handling improvements for Windows

2. **Session Management**
   - Rename, delete, and auto-title generation
   - Conversation naming/indexing for easier retrieval
   - Session export capabilities
   - Custom title-based session resumption

3. **Memory & Context**
   - Automatic learning from conversations
   - Persistent cross-session memory store
   - Context usage visibility in SDK/non-interactive modes

4. **CLI Experience**
   - LLM-based message rewrite middleware
   - Multi-line status line output
   - Compact mode UX optimization
   - Theme detection (dark/light)

5. **Extensibility**
   - Complete hook system parity between CLI and VSCode
   - MCP server directory auto-creation
   - Commit attribution and AI contribution tracking

---

## Developer Pain Points

### 🔴 Critical Issues

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Edit Tool Regression** | #1922 (16 comments, re-opened) | Blocking daily use for Python developers |
| **OAuth Authentication Failures** | #3233 | Prevents new user signups entirely |
| **Free Tier Uncertainty** | #2426, #3203 | Community trust erosion |

### 🟠 Recurring Frustrations

| Issue | Details | Frequency |
|-------|---------|-----------|
| **Terminal Display Issues** | Scroll jumping (#3144), resize glitches (#3213), CJK IME loss (now fixed) | Multiple reports |
| **Loop Behavior** | Infinite retries on simple tasks (#3238), validation retry failures (#3178) | Ongoing |
| **Hook System Inconsistency** | VSCode hooks incomplete (#3108, #3205) | Integration blockers |
| **Model Selection Errors** | Phantom models causing 400 errors (#3037) | Confusion |
| **Path Handling** | Windows paths with numbers incorrectly spaced (#2703) | Windows user impact |

### 🟡 High-Frequency Requests

- **Undo capability** (#2342) - "Every CLI agentic tool has it; why doesn't Qwen Code?"
- **PDF support** (#1149) - Common need blocked for text-only models
- **JetBrains plugin** (#2247) - VSCode-only limitation drives users away
- **Quota transparency** (#2426) - Unclear free tier limits

---

**Next 24h Watch:**
- Loop detection PRs (#3178, #3236) approaching merge readiness
- Session management features (#3093) in active review
- Auto-memory system (#3087) attracting significant attention

---
*Generated: 2026-04-14 | Data source: github.com/QwenLM/qwen-code*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/manelsen/agents-radar).*