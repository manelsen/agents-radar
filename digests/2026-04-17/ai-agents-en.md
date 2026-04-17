# AI Agents Ecosystem Digest 2026-04-17

> Issues: 13 | PRs: 14 | Projects covered: 7 | Generated: 2026-04-17 02:01 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Primary Project Deep Dive

# NullClaw Project Digest — 2026-04-17

## 1. Today's Overview

NullClaw maintained high development velocity on 2026-04-17, with 14 pull requests updated and 13 issues processed. All 12 closed issues were resolved through corresponding PRs, indicating a healthy fix-to-issue closure pipeline. The project closed 11 PRs (including security hardening, stability fixes, and a Zig 0.16 migration), while 3 new PRs remained open for review. No new releases were published. Activity centered heavily on bug fixes for agent routing, sandbox detection, provider compatibility, and security hardening, suggesting a stabilization sprint following recent feature work.

---

## 2. Releases

**No new releases** were published on 2026-04-17. The project remains on the `v2026.4.9` reference version noted in user-reported issues. Users compiling from source receive a `dev` version string, which has been flagged as a user experience issue (Issue #821).

---

## 3. Project Progress

### Merged/Closed PRs (11 total)

| PR | Title | Area | Linked Issue |
|----|-------|------|-------------|
| #805 | fix(security): require runnable linux sandboxes in auto-detect | Security | #791 |
| #824 | fix(compaction): fix UTF-8 truncation in history compaction | Agent | — |
| #807 | hardening(web): expire pairing tokens and tighten provider/browser boundaries | Security | — |
| #810 | service: add SysVinit fallback for nullclaw service install | DevOps | — |
| #806 | fix(provider): fall back to responses on chat endpoint 404 | Provider | #766 |
| #803 | fix(config): allow local container hostnames for otel http | Config | #800 |
| #804 | fix(agent): keep unbound sessions on the main agent | Agent | #793 |
| #802 | fix(agent): persist cli turns into sqlite session history | Agent | #797 |
| #801 | fix(security): initialize docker sandbox mount args via factory | Security | #799, #779, #784 |
| #790 | fix(providers): Responses API tool schema and null error handling | Provider | #773 |
| #823 | Migrate project to Zig 0.16 | Build | — |

**Notable advancements:**
- **Zig 0.16 migration** (#823) modernizes the entire codebase and compat layer, consolidating modules into `shared`, `fs`, and `net`.
- **Security hardening** dominated the sprint: Docker sandbox mount initialization fixed (#801), Linux sandbox detection tightened to require actually runnable sandboxes (#805), and WebSocket pairing tokens now expire with stricter provider/browser boundaries (#807).
- **Agent stability** improved with fixes to session routing (#804), SQLite history persistence (#802), and UTF-8 truncation in history compaction (#824).
- **Provider compatibility** enhanced with automatic fallback from Chat Completions to Responses API on 404 (#806), and corrected Responses API tool schema formatting (#790).

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

| Issue | Title | Author | Comments | Theme |
|-------|-------|--------|----------|-------|
| #793 | System Prompt incorrectly inherits first subagent's system prompt | lestan | 3 | Agent routing bug |
| #791 | Shell can not run on the physical Linux | dadapapapa | 3 | Sandbox detection |
| #820 | How to install Zig on Debian? | eabase | 3 | Documentation |
| #821 | nullclaw version doesn't show any version, just "dev" | eabase | 3 | UX / version display |
| #800 | Otel broke due to https constraint | lestan | 2 | Config regression |

### Underlying Needs Analysis

- **Docker/containerized environment confusion**: Multiple issues (#791, #784, #779, #799) stem from Docker sandbox detection failing on native Linux or misbehaving in container contexts. The root cause was uninitialized mount arguments and over-permissive binary detection. The fixes (PRs #801, #805) address the code, but user-facing documentation about Docker vs. native execution modes would reduce confusion.
- **Version and build tooling clarity**: Issue #821 (version shows "dev") and #820 (Zig installation on Debian) suggest friction in the build-from-source experience. The Zig 0.16 migration (#823) may partially address this.
- **Network endpoint configuration**: OTEL endpoint constraints (#800) and custom provider base URL handling (#766) indicate users are running NullClaw in complex network topologies (Tailscale, podman networks, local containers) and need clearer documentation on endpoint configuration.

---

## 5. Bugs & Stability

### Closed Bugs (12 issues)

| Severity | Issue | Title | Fix PR | Status |
|----------|-------|-------|--------|--------|
| High | #793 | System Prompt incorrectly inherits first subagent's system prompt | #804 | Fixed |
| High | #791 | Shell can not run on the physical Linux | #805 | Fixed |
| High | #766 | Custom OpenAI-compatible provider fails with 404 | #806 | Fixed |
| High | #773 | Responses API broken — tool schema format | #790 | Fixed |
| High | #797 | history list/show empty after agent replies (SQLite) | #802 | Fixed |
| High | #799 | Docker sandbox "invalid empty volume spec" | #801 | Fixed |
| High | #779 | shell tool docker error (brew install) | #801 | Fixed |
| High | #784 | shell命令无法正常执行 (Docker config) | #801 | Fixed |
| Medium | #800 | Otel broke due to https constraint | #803 | Fixed |
| Medium | #599 | test: downloadToFile logged-errors failure | — | Fixed (presumably) |
| Low | #821 | version doesn't show any version, just "dev" | — | Unfixed |
| Documentation | #820 | How to install Zig on Debian? | — | Resolved |

### Open Bugs

| Issue | Title | Priority Signal |
|-------|-------|----------------|
| #826 | How to use nullclaw gateway with Tailscale? | Documentation gap; `NotImplemented` error in tunnel |

**Assessment**: The bug backlog is well-cleared with all high-severity issues linked to fix PRs. Remaining open issue (#826) is a documentation/feature gap rather than a crash.

---

## 6. Feature Requests & Roadmap Signals

### Open PRs (3)

| PR | Title | Author | Signals Roadmap |
|----|-------|--------|----------------|
| #829 | Add admin-oriented config and models CLI | DonPrus | Config introspection tools for operators; machine-readable output for `nullhub` integration |
| #828 | fix(doctor): clarify CLI-only channel status diagnostics | manelsen | Improved UX diagnostics; clearer "no non-CLI channels" messaging |
| #783 | feat(cron): cron subagent, run history, JSON output, security hardening | yanggf8 | Scheduled task execution; DB-backed scheduler with `cron_runs` table; JSON CLI output; per-job TZ offsets |

### Predicted Next Version Indicators

- **Operational tooling**: PR #829 (config/models CLI) suggests focus on operator experience and programmatic access.
- **Scheduling/cron**: PR #783 is the most feature-rich open PR, introducing a complete cron subagent engine. If merged, this would be a significant new capability.
- **Diagnostics improvement**: PR #828 and the multiple `doctor` mentions indicate ongoing UX polish for the `nullclaw doctor` command.
- **Gateway networking**: Issue #826 (Tailscale integration) may prompt gateway tunnel implementation in a near-term release.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Impact |
|-------|----------|--------|
| Docker sandbox misbehavior | Issues #791, #784, #779, #799; multiple affected users on native Linux and brew installs | Shell tool unusable without Docker for some users |
| Build/version confusion | Issue #820 (Zig install), #821 ("dev" version) | Friction for contributors and self-hosters |
| Complex network topology issues | #800 (OTEL container hostnames), #826 (Tailscale) | Users running in containerized/network-isolated environments face configuration hurdles |
| History persistence | Issue #797 (SQLite backend empty) | Core feature (session history) appeared broken |

### Satisfaction Signals

- Issue #800 received 1 👍 reaction, suggesting the OTEL regression was a notable pain point now resolved.
- The rapid closure of 12 issues in one day demonstrates active maintenance and responsiveness.
- PR #810 (SysVinit support) indicates responsiveness to diverse Linux deployment scenarios.

---

## 8. Backlog Watch

### Long-Unanswered Issues Requiring Maintainer Attention

| Issue | Age | Title | Notes |
|-------|-----|-------|-------|
| #599 | ~1 month (Created 2026-03-16) | test: downloadToFile logged-errors failure when curl has restricted --proto config | Updated 2026-04-16 but no linked PR visible; test failure may indicate CI environment issue |
| #826 | 2 days (Created 2026-04-15) | How to use nullclaw gateway with Tailscale? | Open; shows `NotImplemented` for tunnel feature; likely needs either documentation or a feature request triage |

### PRs Awaiting Review (3 open)

| PR | Age | Title | Priority |
|----|-----|-------|----------|
| #829 | 1 day | Add admin-oriented config and models CLI | High (operator tooling) |
| #783 | 10 days | feat(cron): cron subagent, run history, JSON output, security hardening | High (feature scope) |
| #828 | 1 day | fix(doctor): clarify CLI-only channel status diagnostics | Low (UX polish) |

---

**Digest generated**: 2026-04-17  
**Data source**: github.com/nullclaw/nullclaw  
**Compiled by**: AI Analyst, Project Health Monitoring

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem

**Report Date:** 2026-04-17
**Data Sources:** GitHub activity for 7 projects across 24-hour window

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing **high-intensity development** as of mid-April 2026. Seven tracked projects collectively processed over **360 tracked items** (issues + PRs) in a single day, with no projects issuing stable releases—indicating an ecosystem still in rapid feature expansion rather than stabilization. Security hardening has emerged as a dominant theme, with all projects addressing at least one critical security issue (authentication bypass, secret scanning bypass, email header spoofing). Cross-project technical convergence is evident around **provider compatibility**, **multi-channel integration**, and **scheduled task execution (cron)**. The ecosystem shows healthy contributor diversity, with external PRs active on every project, though maintainer bandwidth appears constrained on longer-running issues across multiple repositories.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed | Open PRs | Releases (24h) | Health Score |
|---------|---------------------|-------------------|-------------------|----------|----------------|--------------|
| **NullClaw** | 13 | 14 | 11 | 3 | 0 (on v2026.4.9) | **8.5/10** |
| **NanoBot** | 12 | 60 | 31 | ~29 | 0 | **9.0/10** |
| **Hermes Agent** | 10 | 20 | 1 | ~19 | 0 | **7.0/10** |
| **PicoClaw** | 18 | 30 | 10 | 20 | 1 nightly | **8.0/10** |
| **IronClaw** | 50 | 50 | 2 | ~48 | 0 | **6.5/10** |
| **CoPaw** | 50 | 50 | 30 | 20 | 1 beta | **8.5/10** |
| **ZeroClaw** | 41 | 50 | 5 | ~45 | 0 | **7.5/10** |

**Key Observations:**
- **NanoBot** leads in raw velocity (60 PRs processed) and closure rate (31 merged in 24h)
- **CoPaw** demonstrates the strongest closed-to-open ratio (30 merged vs 20 open PRs)
- **IronClaw** has the largest open PR backlog (48+) relative to merges (2), suggesting review bottleneck
- **NullClaw** shows excellent issue-to-PR linkage (all 12 closed issues linked to fix PRs)

---

## 3. Primary Project Positioning

### NullClaw
- **Technical Approach:** Zig-based, container-first with native Linux support
- **Advantages:** Modern language stack (Zig 0.16), strong security focus, SQLite session persistence
- **Target Users:** Self-hosters, developers comfortable with containerized environments
- **Differentiation:** Tight sandbox security model; smallest ecosystem footprint but highest code quality signals

### NanoBot
- **Technical Approach:** Python/Django, SSE-first streaming, multi-channel (Discord, Feishu)
- **Advantages:** Highest velocity, broad provider support, active Chinese-language community
- **Target Users:** Discord/Feishu users, multi-provider setups, Chinese market
- **Differentiation:** SSE streaming for `/v1/chat/completions`, WebSocket session lifecycle management

### Hermes Agent
- **Technical Approach:** NousResearch-backed, Ollama-native provider, TUI-first UX
- **Advantages:** Local-first with native Ollama integration, strong cron/job scheduling
- **Target Users:** Self-hosted enthusiasts, privacy-conscious users, systemd-native deployments
- **Differentiation:** Local Ollama provider with dynamic model discovery, native cron enhancements

### PicoClaw
- **Technical Approach:** Go-based, web-frontend modern (React + TanStack), multi-platform
- **Advantages:** Parallel agent loop (merged), browser automation via CDP, nightly release cadence
- **Target Users:** Power users needing concurrent message handling, browser automation use cases
- **Differentiation:** Direct Chrome DevTools Protocol integration, LINE Bot SDK migration

### IronClaw
- **Technical Approach:** Near AI-backed, Engine V2 architecture, WASM channel extensibility
- **Advantages:** Matrix E2EE support, native Matrix channel PR active, enterprise focus
- **Target Users:** Enterprise teams, Matrix users, multi-channel operational dashboards
- **Differentiation:** WASM-based channel extensibility, CodeAct awaitable primitives, workspace-backed project registration

### CoPaw / QwenPaw
- **Technical Approach:** Python, ACP protocol server, plugin-based memory backends
- **Advantages:** IDE integration (ACP endpoint for Zed/OpenCode), extensible memory (mem0, Zep, LangMem), SIP voice channel
- **Target Users:** Developers seeking IDE-native AI agents, voice channel adopters
- **Differentiation:** Agent Communication Protocol server, multimodal messaging, plan mode

### ZeroClaw
- **Technical Approach:** Rust-based microkernel architecture, Mozilla Fluent i18n
- **Advantages:** RFC-driven governance, Nextcloud Talk integration, TOTP-gated commands
- **Target Users:** Rust enthusiasts, self-hosted privacy users, Nextcloud ecosystem
- **Differentiation:** Microkernel workspace decomposition, manifest-based routing, OpenTelemetry-native

---

## 4. Shared Technical Focus Areas

### Provider Compatibility & Fallback Logic
| Project | Specific Need |
|---------|--------------|
| **NullClaw** | Chat Completions → Responses API 404 fallback (#806, #790) |
| **NanoBot** | Non-compliant API gateway injection loops (#3225), MiniMax API issues (#2373) |
| **PicoClaw** | Groq API tool call format incompatibility (#748), LM Studio Easy Connect (#28) |
| **IronClaw** | Aliyun Coding Plan support (#1446), custom provider routing |
| **CoPaw** | vLLM `tool_choice="auto"` compatibility (#3438), Kimi Code API support (#3437) |

### Cron / Scheduled Task Execution
- **NanoBot:** Cron subagent with run history, JSON output, per-job TZ offsets (PR #783)
- **Hermes Agent:** `deliver=origin` fallback, `script_skip_if_empty` flag (PRs #11317, #10680)
- **PicoClaw:** `deliver=false` silent discard bug (#1058)—critical, blocks scheduled task reliability
- **CoPaw:** ACP server for scheduled job dispatch via IDE integration (#3487)
- **ZeroClaw:** Context spillage from chat to scheduled tasks (S0 security bug #5415)

### Security Hardening
| Project | Security Focus |
|---------|----------------|
| **NullClaw** | Docker sandbox mount initialization (#801), Linux sandbox detection (#805), pairing token expiry (#807) |
| **Hermes Agent** | Email From header spoofing bypass (#11295)—critical, open PR |
| **IronClaw** | Engine V2 secret scanning bypass (#2491)—P1 open, no fix PR |
| **ZeroClaw** | Shell expansion bypass when `allowed_commands=["*"]` (#5773), TOTP-gated commands Phase 1 |

### Channel Ecosystem Expansion
- **NanoBot:** Discord bot-to-bot communication (#3217), Web App & Mobile API channels (#3030)
- **CoPaw:** Signal (#3508), WhatsApp (#2962, #2995), SIP voice (#3449) — all in active PR
- **IronClaw:** Native Matrix with E2EE (#2019), Google Sheets OAuth (#2229), Telegram token persistence (#2411)
- **ZeroClaw:** OneBot/napcat (#2503), Nextcloud Talk (#5718), Mattermost oncall (#3100)
- **PicoClaw:** LINE Bot SDK refactor (#500), WhatsApp LID migration issues (#2540)

### Memory & Context Management
| Project | Approach |
|---------|----------|
| **NanoBot** | history.jsonl + MEMORY.md struggles at scale (#3227), context window overflow |
| **CoPaw** | Extensible memory backends (mem0, Zep, LangMem) via plugin (#3500) |
| **Hermes Agent** | Heartbeat phase model overrides, git-based staleness annotations |
| **PicoClaw** | `/context` command with session stats, history size, token usage (#2537) |

---

## 5. Differentiation Analysis

| Dimension | Leading Project(s) | Trailing Project(s) |
|-----------|--------------------|--------------------|
| **Velocity** | NanoBot (60 PRs/24h) | Hermes Agent (30 items total) |
| **Security Focus** | NullClaw (3 security PRs in single day) | PicoClaw (Groq bug unaddressed) |
| **Provider Depth** | Hermes Agent (Ollama-native, dynamic discovery) | PicoClaw (LM Studio still requested) |
| **Channel Breadth** | CoPaw (Signal + WhatsApp + SIP + ACP) | Hermes Agent (narrower focus) |
| **Enterprise Readiness** | IronClaw (workspace projects, Routines UI) | NanoBot (session management gaps) |
| **Language Modernity** | ZeroClaw (Rust, microkernel) / NullClaw (Zig) | NanoBot / CoPaw (Python 3.14) |
| **Self-Hosting Ease** | Hermes Agent (systemd-native, Ollama) | NullClaw (Docker dependency friction) |
| **Architecture Governance** | ZeroClaw (RFC-driven, 6 active RFCs) | PicoClaw (no formal RFC process) |

**Technical Stack Divergence:**
- **Compiled systems** (NullClaw/Zig, ZeroClaw/Rust, PicoClaw/Go) emphasize performance and static binaries
- **Interpreted systems** (NanoBot, Hermes Agent, CoPaw/Python) emphasize flexibility and rapid prototyping
- **IronClaw** occupies a hybrid position with Engine V2 CodeAct primitives

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration** | NanoBot, CoPaw | >80 items/day, high merge ratios, beta/stable releases, external contributor flow |
| **Active Development** | NullClaw, PicoClaw, ZeroClaw | 40-60 items/day, steady merges, nightly releases, security sprints |
| **Maintenance Mode (Potential)** | Hermes Agent, IronClaw | High open-backlog ratio (>20:1), limited merges per day, critical issues unaddressed |

### Stabilization Signals
- **NanoBot:** 31 PRs merged in 24h with no reported regressions suggests maturing test coverage
- **CoPaw:** Beta release cadence (v1.1.2-beta.2) indicates approaching stable API
- **NullClaw:** Zig 0.16 migration (#823) completion signals technical debt reduction phase

### Risk Indicators
| Project | Concern | Evidence |
|---------|---------|----------|
| **IronClaw** | Review bottleneck | 48 open PRs, 2 merged in 24h; P1 security bug open with no fix PR |
| **Hermes Agent** | Security fix stalled | Email auth bypass (#11295) open 3+ days without merge |
| **PicoClaw** | Critical provider bug | Groq API broken since ~April 12 (#748), 14-comment thread, no fix PR |
| **ZeroClaw** | Architectural blocker | CI publish broken (#5811/#5812) blocks v0.7.0 release pipeline |

---

## 7. Trend Signals

### 1. Security Hardening is Non-Negotiable
Every project is actively addressing authentication/authorization issues (email spoofing, token expiry, secret scanning). The IronClaw Engine V2 secret scanning bypass (#2491) and Hermes Agent email auth bypass (#11295) represent the most severe class of vulnerabilities. **Recommendation:** Security patches should receive expedited review (<24h SLA) across the ecosystem.

### 2. Provider Fragmentation Driving Compatibility Work
The diversity of LLM providers (Groq, LM Studio, Ollama, MiniMax, Kimi, vLLM, Aliyun, Qiniu) is creating ongoing compatibility maintenance burden. Projects need standardized compatibility matrices and automated regression tests for provider-specific tool call formats.

### 3. Multi-Channel is Table Stakes; Voice is Emerging
All projects support 3+ channels. SIP voice (CoPaw) and Matrix E2EE (IronClaw, ZeroClaw) represent next-generation communication protocols. WhatsApp fragility across multiple projects (#2540, #2541 in PicoClaw; #2962 in CoPaw) suggests the Meta API remains unstable.

### 4. Local/Self-Hosted AI is a Major Driver
Ollama-native support (Hermes Agent), LM Studio Easy Connect (PicoClaw), local provider features, and TOTP-gated shell commands all indicate demand for privacy-preserving deployments without cloud LLM dependencies.

### 5. Memory & Context Management at Scale is Unsolved
Multiple projects acknowledge context window limitations as a production concern (NanoBot #3227, CoPaw extensible memory backends). This is likely the next major technical challenge the ecosystem will address.

### 6. Operator/Enterprise Tooling Gaps
Issues around self-upgrade (#618 PicoClaw), config introspection (#829 NullClaw), and observability (OpenTelemetry formalization in ZeroClaw) indicate growing demand from production deployments rather than hobbyist users.

### 7. Documentation as a Recurring Debt
Build-from-source friction (NullClaw Zig installation #820, "dev" version display #821), Tailscale/gateway documentation (#826), and migration guides (CoPaw v1.1.0 naming confusion #3309) suggest documentation investment is lagging code development.

---

**Prepared by:** AI Analyst, Project Health Monitoring  
**Data Coverage:** 2026-04-17 (24-hour window)  
**Projects Tracked:** 7 (NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw)

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-17

## 1. Today's Overview

NanoBot continues to demonstrate **high development velocity** with 60 PRs and 12 issues updated in the past 24 hours. The project shows strong momentum, with 31 PRs merged or closed, indicating active code review and integration. Notably, **no new releases were published today**, but several significant features reached completion, including SSE streaming support and Discord channel filtering. The community is actively addressing both stability issues (email loops, thread safety) and feature expansion (runtime model switching, web channels, Python 3.14 compatibility).

---

## 2. Releases

**No new releases** were published today. The last release information is unavailable in the provided dataset.

---

## 3. Project Progress

### Recently Merged/Closed PRs (5 items)

| PR | Author | Title | Status |
|----|--------|-------|--------|
| [#3222](https://github.com/HKUDS/nanobot/pull/3222) | wanghesong2019 | feat(api): add SSE streaming for /v1/chat/completions | CLOSED |
| [#3171](https://github.com/HKUDS/nanobot/pull/3171) | Lbin91 | feat: add channel-based filtering for Discord | CLOSED |
| [#3179](https://github.com/HKUDS/nanobot/pull/3179) | JackLuguibin | feat(agent,websocket,status,channels): WebSocket tooling, session lifecycle, reasoning, chat_id | CLOSED |
| [#3218](https://github.com/HKUDS/nanobot/issues/3218) | dividduang | Support SSE streaming for /v1/chat/completions | CLOSED |
| [#3185](https://github.com/HKUDS/nanobot/issues/3185) | sohamb117 | No explicit LM Studio support | CLOSED |

### Notable Open PRs Advancing Key Features

| PR | Author | Title | Impact |
|----|--------|-------|--------|
| [#3135](https://github.com/HKUDS/nanobot/pull/3135) | tracy-e | feat: runtime model switching via /model and /compact commands | **High** — Enables on-the-fly model selection |
| [#3030](https://github.com/HKUDS/nanobot/pull/3030) | mterhar | feat(channels): Web App and Mobile APIs | **High** — Expands platform reach |
| [#3232](https://github.com/HKUDS/nanobot/pull/3232) | XJPeng12 | fix(agent): add thread-safe access to concurrent dictionaries | **Medium** — Critical concurrency fix |
| [#3194](https://github.com/HKUDS/nanobot/pull/3194) | JiajunBernoulli | [CI/CD] ci: add Windows and Python 3.14 support | **Medium** — Platform expansion |
| [#3225](https://github.com/HKUDS/nanobot/pull/3225) | subalkum | fix: guard tool execution against non-compliant API gateway injection | **High** — Fixes infinite loop bug |
| [#3231](https://github.com/HKUDS/nanobot/pull/3231) | 04cb | fix(email): break SMTP self-reply loop on self-addressed mail | **High** — Prevents mail bomb |
| [#3230](https://github.com/HKUDS/nanobot/pull/3230) | magic524 | instance switching | **Medium** — Multi-instance support |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Author | Comments | Summary |
|-------|--------|----------|---------|
| [#3143](https://github.com/HKUDS/nanobot/issues/3143) | bigsinger | 6 | LLM returned error: messages parameter illegal (token consolidation overflow) — **RESOLVED** |
| [#3107](https://github.com/HKUDS/nanobot/issues/3107) | aiguozhi123456 | 5 | Feature suggestions: status task count, session history visibility, retry termination, model param, timeout config, provider fallback, multi-provider config |
| [#2373](https://github.com/HKUDS/nanobot/issues/2373) | xiaojianbj | 4 | MiniMax API error with function arguments — ongoing since March |
| [#2220](https://github.com/HKUDS/nanobot/issues/2220) | jr551 | 4 | Proposal: use ContextVar for task-local tool routing context — async safety |
| [#3220](https://github.com/HKUDS/nanobot/issues/3220) | yankeguo | 2 | Bug: Agent enters infinite empty tool-call loop against non-compliant API gateways |

### Underlying Needs Analysis

**Issue #3107** consolidates multiple user experience requests, revealing that users want:
- **Visibility** into bot state (task counts, session history)
- **Operational resilience** (retry timeouts, provider fallback)
- **Flexibility** (runtime model selection, custom providers)

**Issue #3227** (Memory system limitations) highlights a growing concern about scalability in long-running projects, where the current `history.jsonl` + `MEMORY.md` approach struggles with context window constraints.

---

## 5. Bugs & Stability

### Active Bugs (Ranked by Severity)

| Severity | Issue | Author | Description | Fix PR |
|----------|-------|--------|-------------|--------|
| **Critical** | [#3215](https://github.com/HKUDS/nanobot/issues/3215) | cnukaus | SMTP self-reply loop generates thousands of emails when bot receives its own message | [#3231](https://github.com/HKUDS/nanobot/pull/3231), [#3228](https://github.com/HKUDS/nanobot/pull/3228) |
| **High** | [#3220](https://github.com/HKUDS/nanobot/issues/3220) | yankeguo | Agent enters infinite tool-call loop when non-compliant APIs inject `tool_calls` under non-standard `finish_reason` | [#3225](https://github.com/HKUDS/nanobot/pull/3225) |
| **Medium** | [#3232](https://github.com/HKUDS/nanobot/pull/3232) | XJPeng12 | Race conditions in AgentLoop concurrent dictionary access | Open (own PR) |
| **Medium** | [#3213](https://github.com/HKUDS/nanobot/issues/3213) | TooniixxOne | GroqTranscriptionProvider ignores `apiBase` from config.json | None |
| **Low** | [#3206](https://github.com/HKUDS/nanobot/issues/3206) | Yaka88 | Gemini provider API key error (multiple credentials) | None |

### Regression Notes
No regressions reported today. However, **the infinite loop bug (#3220)** represents a stability risk for users with non-standard API gateways, warranting prompt attention.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features

| Request | Issue | Author | Demand Signal | Likelihood of Inclusion |
|---------|-------|--------|---------------|------------------------|
| Runtime model switching (`/model` command) | [#3135](https://github.com/HKUDS/nanobot/pull/3135) | tracy-e | PR under review | **High** — PR active |
| Web App & Mobile API channel | [#3030](https://github.com/HKUDS/nanobot/pull/3030) | mterhar | PR under review | **High** — PR active |
| LLM provider fallback/failover | [#3107](https://github.com/HKUDS/nanobot/issues/3107) | aiguozhi123456 | 5 comments | **Medium** |
| Discord bot-to-bot communication | [#3217](https://github.com/HKUDS/nanobot/issues/3217) | Ann-Holmes | 0 comments | **Low** |
| Configurable LLM request timeout | [#3107](https://github.com/HKUDS/nanobot/issues/3107) | aiguozhi123456 | Referenced | **Medium** |
| Multiple custom provider configuration | [#3107](https://github.com/HKUDS/nanobot/issues/3107) | aiguozhi123456 | Referenced | **Low-Medium** |

### Roadmap Signals
The **heartbeat phase model overrides** (#3156) and **git-based memory staleness annotations** (#3212) suggest the team is investing in **long-running project support** and **memory management sophistication**.

---

## 7. User Feedback Summary

### Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Memory system struggles in large projects** | [#3227](https://github.com/HKUDS/nanobot/issues/3227): "history.jsonl and MEMORY.md as whole text blocks" overwhelms context window | High — Core limitation |
| **Token limit errors with Feishu integration** | [#3143](https://github.com/HKUDS/nanobot/issues/3143): "Token consolidation round 0 for feishu: 71835/65536" | Medium — Integration-specific |
| **MiniMax API compatibility issues** | [#2373](https://github.com/HKUDS/nanobot/issues/2373): persistent since March | Medium — Provider-specific |
| **Discord bot isolation** | [#3217](https://github.com/HKUDS/nanobot/issues/3217): "ignore all messages sent by any bot account" | Low — Design choice |

### Positive Feedback

| Sentiment | Evidence |
|-----------|----------|
| **Appreciation for architecture** | [#3227](https://github.com/HKUDS/nanobot/issues/3227): "这套代码——整洁、轻巧、容易上手，探索起来是一种享受" |
| **Value for OpenClaw ecosystem** | [#3227](https://github.com/HKUDS/nanobot/issues/3227): User discovered nanobot through OpenClaw interest |

---

## 8. Backlog Watch

### Long-Unanswered Important Issues Needing Maintainer Attention

| Issue | Age | Author | Description | Priority |
|-------|-----|--------|-------------|----------|
| [#2373](https://github.com/HKUDS/nanobot/issues/2373) | ~25 days | xiaojianbj | MiniMax API error with function arguments | **High** — Ongoing provider issue |
| [#2220](https://github.com/HKUDS/nanobot/issues/2220) | ~30 days | jr551 | ContextVar proposal for async safety | **Medium** — Design proposal awaiting response |
| [#2526](https://github.com/HKUDS/nanobot/pull/2526) | ~22 days | pblocz | User message/tool calls lost on /stop command | **Medium** — UX bug |
| [#2397](https://github.com/HKUDS/nanobot/pull/2397) | ~25 days | vandazia | Cron tool enhancement with name parameter | **Low** — Enhancement |
| [#3227](https://github.com/HKUDS/nanobot/issues/3227) | 1 day | kxsk-git | Memory system limitations (new, needs triage) | **High** — Design feedback |

### Recommended Actions
1. **Prioritize #3220 fix review** — Critical infinite loop bug affecting non-compliant API users
2. **Address #2373** — Month-old MiniMax integration issue deserves resolution
3. **Evaluate #2220** — Async safety proposal aligns with #3232 thread-safety work
4. **Triage #3227** — New memory system feedback may inform roadmap

---

*Digest generated from NanoBot (HKUDS/nanobot) activity on 2026-04-17*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest

**Digest Date:** April 17, 2026  
**Data Source:** NousResearch/hermes-agent GitHub Repository

---

## 1. Today's Overview

The Hermes Agent project demonstrates strong activity on April 17, 2026, with 30 total tracked items (10 issues, 20 PRs). The codebase shows healthy maintenance with a balanced mix of bug fixes, security patches, and feature enhancements. Notable attention is being paid to accessibility (TUI color contrast), security hardening (email authorization), and cross-platform compatibility (Windows support). No new releases were recorded today, but multiple PRs are approaching merge readiness, suggesting an imminent release cycle.

---

## 2. Releases

**No new releases recorded today.**

All activity consists of open issues and pull requests targeting the `origin/main` branch.

---

## 3. Project Progress

### Merged/Closed Today
| PR # | Title | Status | Key Change |
|------|-------|--------|------------|
| #11002 | fix(gateway): prevent interim_assistant_messages from suppressing final response | **CLOSED** | Fixed silent response drop when `display.interim_assistant_messages: true` with tool calls; addresses #10942 |

### PRs Advanced Today (Open)
| PR # | Author | Category | Summary |
|------|--------|----------|---------|
| #11325 | june8572-design | gateway | Double `TimeoutStopSec` to prevent SIGKILL before exit code 75 on `/restart` |
| #11324 | LeonSGP43 | agent | Disable thinking on assistant-prefill continuation; strips explicit reasoning payloads |
| #11322 | win4r | agent | Handle dict-typed message in `classify_api_error`; fixes `AttributeError` |
| #11320 | ParthSareen | provider | Add native local Ollama provider with dynamic model discovery |
| #11317 | Xowiek | cron | Broaden `deliver=origin` fallback to all home-channel platforms |
| #11315 | charlesip-collab | gateway/tools | Normalize WhatsApp target IDs; decode URL-escaped channel identifiers |
| #11313 | Magicray1217 | agent | Restrict auto-title to first exchange only |
| #11311 | kagura-agent | tui | Replace hardcoded yellow colors with 256-color dark gold (readable on light backgrounds) |
| #11295 | plgonzalezrx8 | gateway | **Security:** Stop trusting email From for authorization (prevents spoofing bypass) |
| #11289 | KeaneYan | auxiliary | Apply model compatibility filter on auto cache misses |
| #10680 | Eruditi | cron | Add `script_skip_if_empty` flag for cron jobs |
| #10657 | sbcnpc | cli | Fallback to system-level systemd in gateway status check |
| #10139 | yzx9 | config | Add `$HERMES_HOME/env.d/` drop-in directory for additional env files |
| #9062 | JackChiang233 | provider | Add Qiniu (七牛云) provider support |
| #9691 | TroyMitchell911 | agent | Add truncation continuation support for `anthropic_messages` API mode |
| #9325 | jamesarch | cli | Escape init error messages in rich output; preserves literal strings |
| #8374 | lmanchu | windows | Cross-platform compatibility fixes for cli, gateway, and memory_tool |
| #10135 | digging-airfare-4u | matrix | Register `MembershipEventDispatcher` to fix auto-join on DM invites |
| #5281 | LevSky22 | skills | Gmail `sendAs` signature handling on gws backend |
| #10336 | resurgence | feishu | Card message content type handling + text tag parsing |

---

## 4. Community Hot Topics

### Most Active Issues (by recency & priority)

| Issue # | Title | Type | Priority Signal |
|---------|-------|------|-----------------|
| **#11316** | `_display_resumed_history()` only strips `<REASONING_SCRATCHPAD>` blocks | Bug | Resurfaces hidden reasoning content in newer tags |
| **#11314** | HTTP 529 error should trigger fallback model | Enhancement | `error_classifier.py` misclassifies 529 as `overloaded` instead of `rate_limit` |
| **#11312** | Gateway working directory config not respected | Bug | Systemd unit changes overwritten by `hermes update` |

**Analysis:** The community is actively reporting edge cases in error handling, session management, and configuration persistence. The 529 fallback issue (#11314) highlights a gap between classification logic and actual retry behavior—users expect failover on service unavailable errors.

### Most Active PRs (by recent updates)

| PR # | Title | Engagement |
|------|-------|------------|
| **#11320** | feat(ollama) local Ollama provider | Native provider with model discovery gaining attention |
| **#11324** | fix(agent): disable thinking on assistant-prefill continuation | Technical fix for reasoning payload handling |
| **#11295** | fix(gateway): stop trusting email From for authorization | **Security fix**—prevents authentication bypass |

**Link to PR #11320:** https://github.com/NousResearch/hermes-agent/pull/11320  
**Link to PR #11295:** https://github.com/NousResearch/hermes-agent/pull/11295

---

## 5. Bugs & Stability

### Reported Bugs (Ranked by Severity)

| Severity | Issue # | Description | Fix PR? |
|----------|---------|-------------|---------|
| **High** | #11312 | Gateway working directory config ignored; resets after update | No |
| **High** | #11314 | HTTP 529 not triggering model fallback | No (enhancement request) |
| **Medium** | #11316 | Hidden reasoning content leaks in resumed session recap | No |
| **Medium** | #11300 | TUI bright yellow unreadable on light backgrounds | **#11311** ✓ |
| **Medium** | #9516 | `hermes doctor` misleading "system dependency not met" for image_gen | No |
| **Low** | #11284 | QQbot image blocked by url_safety (private IP flagged) | No |

### Security Issues

| PR # | Title | Risk | Status |
|------|-------|------|--------|
| **#11295** | Stop trusting email From for authorization | **Authentication Bypass** | Open |

**Link to Security Fix:** https://github.com/NousResearch/hermes-agent/pull/11295  
⚠️ **Recommendation:** Review and expedite merge of #11295 to address email header spoofing vulnerability.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features

| Issue/PR # | Request | Demand Signal | Likelihood of Inclusion |
|------------|---------|---------------|-------------------------|
| #11314 | HTTP 529 → fallback model switch | High (operational need) | **High** |
| #9062 | Qiniu (七牛云) provider | Medium (Chinese market) | Medium |
| #11320 | Local Ollama provider | High (privacy/self-hosting) | **High** (PR open) |
| #10139 | `env.d/` drop-in directory | Medium (config modularity) | Medium (PR open) |
| #5281 | Gmail sendAs signature | Low (edge case) | Low |

### Roadmap Predictions

Based on current PR activity, the next release (likely v0.9.x) may include:
- **Native local Ollama support** with dynamic discovery
- **TUI accessibility improvements** (light background compatibility)
- **Enhanced error handling** with proper 529 failover logic
- **Security hardening** around email authentication

---

## 7. User Feedback Summary

### Pain Points Identified

| Theme | Evidence | Impact |
|-------|----------|--------|
| **Accessibility** | Multiple reports (#11300, #11311) of yellow text unreadable on light terminals | Low-severity but affects usability |
| **Configuration Persistence** | #11312: Gateway working directory overwritten on update | Operations friction |
| **Error Classification** | #11314: 529 treated as `overloaded` not `rate_limit`; failover fails | Production reliability |
| **Windows Support** | #8374: Cross-platform fixes needed for CMD/PowerShell/Git Bash | Adoption blocker |

### Positive Feedback Signals
- PR #11320 (Ollama provider) received prompt engagement
- Security fix #11295 addressed a critical bypass vulnerability proactively
- Cron enhancements (#10680, #11317) show investment in automation workflows

---

## 8. Backlog Watch

### Long-Unanswered Important Items

| Issue/PR # | Age | Title | Urgency | Notes |
|------------|-----|-------|---------|-------|
| #9516 | ~3 days | `hermes doctor` misleading image_gen error | Medium | Needs triaging |
| #11284 | ~1 day | QQbot image blocked by url_safety | Medium | New, needs reproduction |
| #5281 | ~12 days | Gmail sendAs signature | Low | Feature request, stalled on gws migration |
| #9062 | ~4 days | Qiniu provider support | Medium | PR open, awaiting review |

### Items Needing Maintainer Attention

| # | Item | Why Attention Needed |
|---|------|---------------------|
| #11314 | 529 fallback enhancement | Misclassification causes production failures |
| #11312 | Working directory persistence | Core configuration reliability |
| #11316 | Reasoning tag stripping | Data privacy concern |
| #11295 | Email auth security fix | **Critical security patch awaiting merge** |

---

## Quick Reference Links

| Category | Link |
|----------|------|
| All Open Issues | https://github.com/NousResearch/hermes-agent/issues |
| All Open PRs | https://github.com/NousResearch/hermes-agent/pulls |
| Security Fix (#11295) | https://github.com/NousResearch/hermes-agent/pull/11295 |
| TUI Fix (#11311) | https://github.com/NousResearch/hermes-agent/pull/11311 |
| Ollama Provider (#11320) | https://github.com/NousResearch/hermes-agent/pull/11320 |
| 529 Fallback (#11314) | https://github.com/NousResearch/hermes-agent/issues/11314 |

---

*Generated automatically from public GitHub data. All links redirect to NousResearch/hermes-agent repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-17

---

## 1. Today's Overview

PicoClaw shows **high activity** on April 17, 2026, with 18 issue updates (15 open, 3 closed) and 30 PR updates (20 open, 10 merged/closed) in the last 24 hours. The project continues rapid development with a new nightly build released (v0.2.6-nightly.20260417.ba08d523). Notable progress includes closure of the `--no-browser` OAuth login feature (#2549) and parallel agent loop refactoring (#2503). Several critical bugs affecting provider compatibility, cron behavior, and channel integrations were actively discussed, while new browser automation and context tracking features advanced through PR review.

---

## 2. Releases

### New Release
| Version | Type | Status |
|---------|------|--------|
| **v0.2.6-nightly.20260417.ba08d523** | Nightly Build | ⚠️ Unstable |

- **Full Changelog**: https://github.com/sipeed/picoclaw/compare/v0.2.6...main
- This is an automated build; use with caution in production environments.

---

## 3. Project Progress

### Recently Merged/Closed PRs
| PR | Author | Domain | Summary |
|----|--------|--------|---------|
| [#2549](https://github.com/sipeed/picoclaw/pull/2549) | lc6464 | auth | ✅ **Add `--no-browser` option for OAuth login** — enables headless/remote authentication without opening local browser |
| [#2503](https://github.com/sipeed/picoclaw/pull/2503) | cytown | agent, channel | ✅ **Refactor agent loop to support parallel processing** — enables concurrent user message handling with correct response routing |
| [#2500](https://github.com/sipeed/picoclaw/pull/2500) | cytown | build | ✅ **Remove useless backend output for platform-token** — cleanup |

### Active PRs Advancing
| PR | Author | Domain | Summary |
|----|--------|--------|---------|
| [#2563](https://github.com/sipeed/picoclaw/pull/2563) | afjcjsbx | web, channel | **Download files on frontend** — adds attachment support to `pico` web channel for tool-sent files |
| [#2410](https://github.com/sipeed/picoclaw/pull/2410) | Yourdaylight | tool, agent | **Browser automation via Chrome DevTools Protocol (CDP)** — implements BrowserTool for direct CDP WebSocket automation |
| [#2537](https://github.com/sipeed/picoclaw/pull/2537) | imguoguo | agent | **Add context usage ring indicator and `/context` command** — reports session stats, history size, token usage |
| [#957](https://github.com/sipeed/picoclaw/pull/957) | HRronaldo | config | **Prevent default ModelList from overriding user config** — fixes API base inheritance bug when users omit `api_base` |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | cytown | channel, agent | **Standardize channel identification** — decouples channel names from provider types for multi-instance support |
| [#500](https://github.com/sipeed/picoclaw/pull/500) | xiaket | channel | **[Refactor] Use LINE Bot SDK** — reduces maintenance burden by switching to official SDK |

### Dependency Updates (11 PRs)
Multiple dependency bumps including `@tanstack/react-query`, `@tanstack/react-router`, `github.com/slack-go/slack`, `github.com/openai/openai-go/v3`, `golang.org/x/net`, and `maunium.net/go/mautrix`.

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

| Issue | Author | Domain | Comments | Summary |
|-------|--------|--------|----------|---------|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | Franzferdinan51 | provider | **14** | **LM Studio Easy Connect** — Feature request for simplified integration with LM Studio AI provider |
| [#618](https://github.com/sipeed/picoclaw/issues/618) | sky5454 | build | **8** | **Self-upgrade support** — Roadmap item for automatic updates via deb/winget/opkg packages |
| [#748](https://github.com/sipeed/picoclaw/issues/748) | 61j3t | provider | **8** | **Groq API compatibility bug** — Tool call format error (`tool_use_failed`) due to non-standard function formatting |
| [#629](https://github.com/sipeed/picoclaw/issues/629) | manhnt9 | provider | **7** | **No retry on LLM call failure** — HTTP 500 errors cause task hang without retry logic |
| [#1058](https://github.com/sipeed/picoclaw/issues/1058) | AaronJny | cron | **5** | **Cron `deliver=false` silently discards responses** — LLM processes jobs but users never receive output |
| [#571](https://github.com/sipeed/picoclaw/issues/571) | rahul-hudle | agent, tool | **5** | **Progress feedback during tool execution** — Long-running multi-tool iterations show no status updates |

### Analysis
- **Provider Integration Pain Points**: Multiple issues (#28, #748, #629) indicate users struggle with connecting to various LLM providers and handling provider-specific errors. Groq API incompatibility with non-standard tool formats is a critical integration blocker.
- **UX/Feedback Gaps**: Users need visual feedback during tool execution (#571) and better error recovery (#629, #1058) to understand agent behavior.
- **Operational Concerns**: Self-upgrade infrastructure (#618) is highly requested, reflecting deployment and maintenance needs at scale.

---

## 5. Bugs & Stability

### Critical Bugs
| Issue | Author | Domain | Severity | Summary |
|-------|--------|--------|----------|---------|
| [#748](https://github.com/sipeed/picoclaw/issues/748) | 61j3t | provider | 🔴 Critical | **Groq API tool call format error** — All agent calls fail with 400 `tool_use_failed`; model generates `<function=name{...}>` format rejected by Groq |
| [#1058](https://github.com/sipeed/picoclaw/issues/1058) | AaronJny | cron | 🔴 Critical | **Cron `deliver=false` silently discards responses** — Root cause in `pkg/tools/cron.go`; messages never reach Discord channel |

### High Severity Bugs
| Issue | Author | Domain | Summary |
|-------|--------|--------|---------|
| [#629](https://github.com/sipeed/picoclaw/issues/629) | manhnt9 | provider | **No retry on LLM failure** — HTTP 500 causes task hang; affects OpenRouter and similar providers |
| [#957](https://github.com/sipeed/picoclaw/issues/957) | HRronaldo | config | **Default ModelList overrides user config** — User-specified `api_base` is overwritten, causing 401 errors (fix PR exists) |
| [#93](https://github.com/sipeed/picoclaw/issues/93) | heaven7 | config | **Gateway ignores config.json with system service** — Service configuration not loading properly on Ubuntu 24 |

### Medium/Low Severity Bugs
| Issue | Author | Domain | Summary |
|-------|--------|--------|---------|
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) | andrebruton | provider | Multiple authentication credentials received |
| [#2302](https://github.com/sipeed/picoclaw/issues/2302) | tranthiphu56 | channel | Web UI requires frequent manual re-authentication (PERMISSION_DENIED) |
| [#2540](https://github.com/sipeed/picoclaw/issues/2540) | aporb | channel | WhatsApp LID-migrated accounts silently drop messages |
| [#2541](https://github.com/sipeed/picoclaw/issues/2541) | aporb | channel | WhatsApp `group_trigger.mention_only` broken by 4 compounded defects |
| [#2550](https://github.com/sipeed/picoclaw/issues/2550) | gitricko | auth | `auth login --provider google-antigravity` doesn't update token expiration |

### Fix PRs Available
- [#957](https://github.com/sipeed/picoclaw/pull/957) — Fixes config override bug

---

## 6. Feature Requests & Roadmap Signals

### High-Impact Feature Requests
| Issue | Author | Domain | Comments | Summary |
|-------|--------|--------|----------|---------|
| [#618](https://github.com/sipeed/picoclaw/issues/618) | sky5454 | build | 8 | **Self-upgrade support** — Multi-platform package manager updates (deb/winget/opkg) |
| [#571](https://github.com/sipeed/picoclaw/issues/571) | rahul-hudle | agent, tool | 5 | **Progress feedback during tool execution** — Visual indicators for long-running operations |
| [#28](https://github.com/sipeed/picoclaw/issues/28) | Franzferdinan51 | provider | 14 | **LM Studio Easy Connect** — Simplified provider integration |
| [#1067](https://github.com/sipeed/picoclaw/issues/1067) | m-t-a97 | auth | 3 | **Authula authentication integration** — Add Auth/AuthZ framework |
| [#2538](https://github.com/sipeed/picoclaw/issues/2538) | xiaotianhu | provider | 0 | **Network error fallback retry** — TLS/connection errors should trigger fallback chain |
| [#2546](https://github.com/sipeed/picoclaw/issues/2546) | rameshnetsys | channel | 0 | **OAuth 2.1 + PKCE for MCP servers** — Dashboard integration for OAuth-protected MCP endpoints |

### Likely Next Version Candidates
Based on active development:
- ✅ **File download on web frontend** (#2563) — Near completion, full end-to-end implementation
- ✅ **Context usage tracking** (#2537) — Adds `/context` command and stats
- ✅ **Browser automation via CDP** (#2410) — Roadmap item, substantial implementation
- 🔄 **Config bug fix** (#957) — Prevents ModelList override
- 🔄 **Parallel agent loop** (#2503) — Already merged, enables concurrent processing

---

## 7. User Feedback Summary

### Pain Points
1. **Provider Incompatibility**: Groq API users experience complete failure due to non-standard tool call format (#748). Multiple providers create varied compatibility requirements.
2. **Silent Failures**: Cron tasks with `deliver=false` complete processing but discard output without user notification (#1058). WhatsApp LID migration drops messages with no log indication (#2540).
3. **Credential Instability**: Web UI requires frequent manual re-authentication (#2302). Token expiration not updating via CLI (#2550).
4. **Missing Operational Features**: No automatic self-upgrade mechanism (#618). Users on embedded devices need opkg support.
5. **Poor Feedback During Long Tasks**: Multi-tool executions show no progress, leaving users uncertain if the agent is working (#571).

### Positive Feedback Signals
- **Feature completion appreciated**: `--no-browser` OAuth login (#2549) closes a specific headless deployment pain point.
- **Refactoring improving architecture**: Parallel agent loop (#2503) and channel standardization (#2551) address long-standing scalability concerns.
- **Active maintenance**: Regular dependency updates across Go and frontend packages indicate healthy maintenance.

### Dissatisfaction Themes
- **Configuration complexity**: Users encounter 401 errors when config defaults don't match their setup (#957).
- **WhatsApp integration fragility**: LID migration and group trigger issues suggest the channel needs hardening (#2540, #2541).

---

## 8. Backlog Watch

### Long-Unanswered Important Issues
| Issue | Age | Domain | Summary |
|-------|-----|--------|---------|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | ~65 days | provider | LM Studio Easy Connect — 14 comments, pending implementation |
| [#93](https://github.com/sipeed/picoclaw/issues/93) | ~63 days | config | Gateway not using config.json with system service |
| [#618](https://github.com/sipeed/picoclaw/issues/618) | ~54 days | build | Self-upgrade support — major operational need |
| [#629](https://github.com/sipeed/picoclaw/issues/629) | ~54 days | provider | No retry on LLM failure — impacts reliability |
| [#571](https://github.com/sipeed/picoclaw/issues/571) | ~56 days | agent, tool | Progress feedback during tool execution |
| [#957](https://github.com/sipeed/picoclaw/issues/957) | ~47 days | config | Default ModelList overrides user config — PR exists |

### PRs Needing Maintainer Review
| PR | Age | Domain | Summary |
|----|-----|--------|---------|
| [#2410](https://github.com/sipeed/picoclaw/pull/2410) | 10 days | tool, agent | Browser automation via CDP — substantial feature, likely roadmap-aligned |
| [#500](https://github.com/sipeed/picoclaw/pull/500) | 57 days | channel | LINE Bot SDK refactor — long pending |
| [#2563](https://github.com/sipeed/picoclaw/pull/2563) | 1 day | web | File download on frontend — user-facing feature |

### Recommendations
- **Prioritize #748 (Groq API bug)** — Complete blocker for affected users; likely needs rapid patch.
- **Address #1058 (Cron silent discard)** — Affects core scheduled task functionality.
- **Review #618 (Self-upgrade)** — Community demand is high; consider roadmap inclusion.
- **Consolidate WhatsApp channel fixes** (#2540, #2541) — Multiple related bugs suggest need for channel-specific testing.

---

*Generated: 2026-04-17 | Data source: github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-17

## 1. Today's Overview

IronClaw shows **high activity** on 2026-04-17, with 50 issues and 50 PRs updated in the last 24 hours. The project is actively addressing a mix of security concerns (secret scanning bypass in Engine V2), Web UI regressions, and channel integrations. Two new PRs were opened today targeting WASM channel type handling and engine-v2 web activity improvements. The community is particularly engaged around Google Sheets OAuth failures and Telegram bot token persistence, both with active debugging conversations.

---

## 2. Releases

**No new releases** in the last 24 hours. The last release information is not available in the current data window.

---

## 3. Project Progress

### Merged/Closed PRs Today
| PR | Title | Key Changes |
|----|-------|-------------|
| [#2515](https://github.com/nearai/ironclaw/pull/2515) | Unify gateway onboarding, auth gates, and pairing flows | Consolidated web gateway onboarding around normalized path; fixed trust-boundary regressions; unified chat and settings flows for extensions/channels |
| [#2512](https://github.com/nearai/ironclaw/pull/2512) | Fix Slack relay OAuth callback state lookup | Stored relay OAuth nonce under gateway owner scope; added canonical relay secret key handling |

### Active PRs Advancing Features
| PR | Size | Risk | Scope | Summary |
|----|------|------|-------|---------|
| [#2561](https://github.com/nearai/ironclaw/pull/2561) | M | Medium | channel/wasm | **Owner ID type fix** — Telegram channel owner_id was stored as `u64` but recovered as `string`, breaking channel restart |
| [#2560](https://github.com/nearai/ironclaw/pull/2560) | XL | Medium | channel/web | Engine-v2-aware activity shell with persistent jobs/missions ticker and tab badges |
| [#2531](https://github.com/nearai/ironclaw/pull/2531) | L | High | engine, llm, setup | `FINAL`/`FINAL_VAR` awaitable in CodeAct; runaway loop protection via `max_consecutive_errors=5` default |
| [#2529](https://github.com/nearai/ironclaw/pull/2529) | L | Medium | security, tool/builtin | Credential redaction in HTTP tool + recording interceptor to prevent secret leakage |
| [#2547](https://github.com/nearai/ironclaw/pull/2547) | XL | Low | routines | Cadence made mandatory; exposed guardrails for reactive mission creation |
| [#2533](https://github.com/nearai/ironclaw/pull/2533) | XL | Low | docs, bridge | Workspace-backed project registration; LLM adapter routing improvements |
| [#2530](https://github.com/nearai/ironclaw/pull/2530) | M | Medium | skills | Skill activation feedback pipeline + install idempotence |
| [#2517](https://github.com/nearai/ironclaw/pull/2517) | XL | High | agent, gateway | Fixed thread retention issues; prevented silent sidebar thread switching |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)
| Issue | Title | Comments | Analysis |
|-------|-------|----------|----------|
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | **[P2]** Google Sheets OAuth blocked: Error 400 invalid_request | **9** | OAuth flow broken in staging; blocks Google Suite extension adoption |
| [#2411](https://github.com/nearai/ironclaw/issues/2411) | **[P2]** Telegram bot token save action does nothing | 1 | Persistence regression in bot settings |
| [#2491](https://github.com/nearai/ironclaw/issues/2491) | **[P1]** Engine V2 bypasses inbound secret scanning — tokens sent directly to LLM | 1 | **Security-critical**: Confidential data exposure risk |
| [#2541](https://github.com/nearai/ironclaw/issues/2541) | **[P2]** Agent fails to invoke tools for content summarization tasks | 1 | Agent capability regression; 3-5 min hang without tool calls |

### Hot PRs (by size/risk + recent activity)
| PR | Title | Risk | Significance |
|----|-------|------|---------------|
| [#2531](https://github.com/nearai/ironclaw/pull/2531) | FINAL-await + runaway loop protection | **High** | Critical engine stability fix |
| [#2517](https://github.com/nearai/ironclaw/pull/2517) | Gateway thread retention + stale state | **High** | Major UX regression fix |
| [#2168](https://github.com/nearai/ironclaw/pull/2168) | Path-based credential matching | Medium | Per-endpoint auth scoping |
| [#2019](https://github.com/nearai/ironclaw/pull/2019) | Native Matrix channel | **High** | New platform support (E2EE optional) |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Aliyun Coding Plan support | Low | China-region provider integration |

---

## 5. Bugs & Stability

### Critical/High Severity
| Issue | Title | Severity | Status | Fix PR |
|-------|-------|----------|--------|--------|
| [#2491](https://github.com/nearai/ironclaw/issues/2491) | Engine V2 bypasses secret scanning | **P1** | Open | None |
| [#2410](https://github.com/nearai/ironclaw/issues/2410) | Dashboard refreshes in infinite loop | **P1** | Open | None |
| [#1998](https://github.com/nearai/ironclaw/issues/1998) | Slack connect flow broken | **P1** | Open | None |
| [#2517](https://github.com/nearai/ironclaw/pull/2517) | Gateway thread retention fix | High | Open PR | — |
| [#2531](https://github.com/nearai/ironclaw/pull/2531) | Runaway loop protection | High | Open PR | — |

### Medium Severity
| Issue | Title | Feature Area | Status |
|-------|-------|--------------|--------|
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | Google Sheets OAuth Error 400 | Extensions | Open (9 comments) |
| [#2541](https://github.com/nearai/ironclaw/issues/2541) | Agent fails to invoke tools for summarization | Agent | Open |
| [#2411](https://github.com/nearai/ironclaw/issues/2411) | Telegram token save broken | Telegram | Open |
| [#2412](https://github.com/nearai/ironclaw/issues/2412) | Secret leak warnings flooding logs | Security | Open |
| [#2285](https://github.com/nearai/ironclaw/issues/2285) | Chat messages disappear on refresh | Web UI | Open |

### WASM Channel Issues (New Today)
| Issue | Title | Priority |
|-------|-------|----------|
| [#2556](https://github.com/nearai/ironclaw/issues/2556) | Don't auto-start inactive WASM channels at boot | Open |
| [#2557](https://github.com/nearai/ironclaw/issues/2557) | Stop websocket/poll reconnect loops on auth failure | Open |
| [#2558](https://github.com/nearai/ironclaw/issues/2558) | WASM channel hooks registration timing | Open |
| [#2559](https://github.com/nearai/ironclaw/issues/2559) | Extensions API per-request auth cost in multi-tenant | Open |

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features
| Issue | Title | Scope | Likelihood of Inclusion |
|-------|-------|-------|------------------------|
| [#1997](https://github.com/nearai/ironclaw/issues/1997) | Add IronClaw Slack App to marketplace | channel/slack | **High** — direct user ask, Slack broken |
| [#1503](https://github.com/nearai/ironclaw/issues/1503) | Google Slides integration fix | extensions | High |
| [#1325](https://github.com/nearai/ironclaw/issues/1325) | First-class create/edit flows for Routines UI | UX | Medium |
| [#1324](https://github.com/nearai/ironclaw/issues/1324) | Human-readable trigger/action summaries for Routines | UX | Medium |

### Tool Schema Discovery Epic (On Hold)
Multiple issues tagged `bug_bash_P3` indicate ongoing schema improvements:
- [#1338](https://github.com/nearai/ironclaw/issues/1338) — Extension workflow sequencing
- [#1337](https://github.com/nearai/ironclaw/issues/1337) — MCP/WASM discovery ergonomics
- [#1330](https://github.com/nearai/ironclaw/issues/1330) — Message routing semantics

### Contributing Feature PRs
| PR | Feature | Scope | Status |
|----|---------|-------|--------|
| [#2019](https://github.com/nearai/ironclaw/pull/2019) | Native Matrix channel with E2EE | channel | Open |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Aliyun Coding Plan provider | llm | Open |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) | Abound demo (Responses API) | integrations | Open |

---

## 7. User Feedback Summary

### Pain Points
1. **OAuth/Auth Failures** — Google Sheets (#2229) and Slack (#1998) integrations non-functional; users blocked from extending bot capabilities
2. **Web UI Instability** — Dashboard refresh loops (#2410), chat disappearing on refresh (#2285), excessive refreshes on tab switch (#2404)
3. **Agent Reliability** — Summarization tasks hang without tool invocation (#2541); bot ignores temporal scheduling (#2281) and user instructions (#2282)
4. **Secret Management** — Engine V2 bypasses scanning (#2491); "potential leak detected" warnings flooding logs (#2412)

### Use Cases Being Blocked
- Calendar automation with meeting prep scheduling
- Social media monitoring and summarization
- Google Suite and Slack productivity workflows
- Multi-channel bot deployments (Telegram, Slack, Matrix)

### Satisfaction Signals
- Active community engagement (9 comments on OAuth issue indicates priority need)
- Recent auth/unification PRs (#2515, #2512) suggest attention to onboarding pain

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>3 days since update)
| Issue | Title | Age | Priority | Gap |
|-------|-------|-----|----------|-----|
| [#1997](https://github.com/nearai/ironclaw/issues/1997) | Slack App marketplace listing | 14 days | P1 | Business decision needed |
| [#1998](https://github.com/nearai/ironclaw/issues/1998) | Slack connect flow broken | 14 days | P1 | Assignee unclear |
| [#1503](https://github.com/nearai/ironclaw/issues/1503) | Google Slides integration | 28 days | P2 | Extensions regression |
| [#1325](https://github.com/nearai/ironclaw/issues/1325) | Routines UX create/edit | 31 days | P3 | On hold pending design |
| [#1324](https://github.com/nearai/ironclaw/issues/1324) | Routines human-readable | 31 days | P3 | On hold |
| [#1322](https://github.com/nearai/ironclaw/issues/1322) | CLI/backend capability mismatch | 31 days | P3 | CLI parity needed |

### Stale PRs (No Recent Updates)
| PR | Title | Age | Risk | Concern |
|----|-------|-----|------|---------|
| [#2019](https://github.com/nearai/ironclaw/pull/2019) | Native Matrix channel | 13 days | High | Large feature; may need review bandwidth |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Aliyun provider | 28 days | Low | New provider; waiting on review |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) | Abound demo | 18 days | High | Production integration |

---

*Digest generated from IronClaw GitHub data — 2026-04-17*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-17

## 1. Today's Overview

CoPaw (a.k.a. QwenPaw) demonstrates **high velocity** on April 17, 2026, with balanced activity across issues and pull requests. The last 24 hours saw **50 issues and 50 PRs updated**, with a slight lean toward PR resolution (30 merged/closed vs. 20 open). One new beta release landed (`v1.1.2-beta.2`), and the community is actively shaping new channel integrations (Signal, WhatsApp, SIP voice), an extensible memory backend, and ACP (Agent Client Protocol) server support. Stability concerns persist around model API compatibility and file-tool truncation, but maintainer responsiveness appears strong.

---

## 2. Releases

### v1.1.2-beta.2
| Field | Detail |
|---|---|
| **Tag** | `v1.1.2-beta.2` |
| **Commits** | 2 |
| **PRs** | #3305, #3454 |

**Changes:**
- **Fix:** Register `AgentApp`-dispatched requests with `TaskTracker` to prevent background task cancellation ([#3305](https://github.com/agentscope-ai/QwenPaw/pull/3305)) — *prevents silent task death during long-running agent operations*
- **Chore:** Version bump to `1.1.2b2` ([#3454](https://github.com/agentscope-ai/QwenPaw/pull/3454))

> **Migration note:** No breaking changes. This is a patch-level fix targeting background task reliability. Users experiencing silent task stops with v1.0.x–1.1.x should upgrade.

---

## 3. Project Progress

### Merged/Closed PRs (Notable)

| PR | Author | Summary |
|---|---|---|
| [#3497](https://github.com/agentscope-ai/QwenPaw/pull/3497) | octo-patch | **Fixed 500 error on `/api/tools`** when `icon=null` — affects WebUI "Tools" page loading |
| [#3511](https://github.com/agentscope-ai/QwenPaw/pull/3511) | zhijianma | **Unified logging paths** — centralizes project log file naming (`qwenpaw.log` over legacy `copaw.log`) |
| [#3438](https://github.com/agentscope-ai/QwenPaw/pull/3438) | jilin6627-spec | **vLLM `tool_choice="auto"` compatibility** — full fix across `TokenRecordingModelWrapper` |
| [#2994](https://github.com/agentscope-ai/QwenPaw/pull/2994) | joe2643 | **Preserve channels during hot-reload** — prevents WhatsApp/Signal/Telegram disconnection on workspace reload |
| [#2995](https://github.com/agentscope-ai/QwenPaw/pull/2995) | joe2643 | **Reply-to quoting for WhatsApp + Signal** — agent replies now quote original inbound messages |
| [#2962](https://github.com/agentscope-ai/QwenPaw/pull/2962) | joe2643 | **WhatsApp channel via neonize-qwenpaw** — rebased and production-ready |
| [#3064](https://github.com/agentscope-ai/QwenPaw/pull/3064) | zqzlq | **Debug page with frontend multi-level logs** — cross-tab synchronization and backend log viewing |

### Open PRs Under Review / Active

| PR | Author | Summary | Milestone Signal |
|---|---|---|---|
| [#3512](https://github.com/agentscope-ai/QwenPaw/pull/3512) | zhijianma | **Plugin system enhancement** | Feature |
| [#3449](https://github.com/agentscope-ai/QwenPaw/pull/3449) | shaohuaxi | **SIP voice channel** — pyVoIP/LiveKit dual-mode, streaming STT/TTS | Channel |
| [#3508](https://github.com/agentscope-ai/QwenPaw/pull/3508) | joe2643 | **Signal channel** via `signal-cli` subprocess | Channel |
| [#3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) | xueshanlongyin | **Multimodal message support** (images/files) | Feature |
| [#3500](https://github.com/agentscope-ai/QwenPaw/pull/3500) | walker83 | **Extensible memory backend system** — plugin-based (mem0, Zep, LangMem) | Core |
| [#3487](https://github.com/agentscope-ai/QwenPaw/pull/3487) | xuanrui-L | **ACP server** — expose QwenPaw as ACP endpoint for Zed/OpenCode | Integration |
| [#2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) | yuanxs21 | **Plan mode** — structured multi-step planning via `/plan` command | Feature |
| [#3394](https://github.com/agentscope-ai/QwenPaw/pull/3394) | shadowabi | **Warn on stale console frontend build** at startup | DX |
| [#3505](https://github.com/agentscope-ai/QwenPaw/pull/3505) | bowenliang123 | **Navbar UX improvement** — logo, icons, Docs label fix | UI |

---

## 4. Community Hot Topics

### Most-Discussed Issues (by comment count)

| # | Title | Type | Comments | Link |
|---|---|---|---|---|
| #3309 | QwenPaw/CoPaw differentiation confusion after v1.1.0 upgrade | Question | 11 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3309) |
| #1563 | `write_file` tool truncates large content (~33KB → ~6KB) | Bug | 6 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/1563) |
| #3011 | Long tasks silently stop mid-execution (qwen3 coder plus) | Bug | 6 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3011) |
| #2757 | WeCom channel disconnects frequently | Question | 5 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/2757) |
| #3462 | `AGENT_UNKNOWN_ERROR` crash | Bug | 5 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3462) |

**Analysis:** The #1 topic by engagement is **user confusion around the CoPaw ↔ QwenPaw naming split** post-v1.1.0 — users report PATH issues, dual app icons, and leftover `.copaw` directories. This signals a **naming/migration communication gap** that warrants a clear migration guide or automatic cleanup utility. File truncation (#1563) and silent task stops (#3011) both have moderate traction and relate to **core agent reliability**, likely impacting power users running code iteration workloads.

---

## 5. Bugs & Stability

### Active/Open Bugs

| Severity | Issue | Summary | Fix PR? |
|---|---|---|---|
| 🔴 High | [#3506](https://github.com/agentscope-ai/QwenPaw/issues/3506) | `/api/console/chat` crashes with `AttributeError: 'AgentRequest' has no attribute 'channel'` (Docker) | — |
| 🔴 High | [#3489](https://github.com/agentscope-ai/QwenPaw/issues/3489) | Anthropic-compatible API 400 errors due to invalid message formats (`None` values) | — |
| 🟡 Medium | [#3435](https://github.com/agentscope-ai/QwenPaw/issues/3435) | File download URL doubled path (`/api/files/preview/api/files/preview/...`) | — |
| 🟡 Medium | [#3484](https://github.com/agentscope-ai/QwenPaw/issues/3484) | Search bar UI error on `/skills` and `/skill-pool` pages | — |
| 🟡 Medium | [#3468](https://github.com/agentscope-ai/QwenPaw/issues/3468) | Console session page freezes but content exists (refresh recovers) | — |
| 🟡 Medium | [#3445](https://github.com/agentscope-ai/QwenPaw/issues/3445) | MCP configuration not working — GUI config not passed to ReMe module | — |
| 🟡 Medium | [#3279](https://github.com/agentscope-ai/QwenPaw/issues/3279) | Pipeline ops execute twice per message; tool ID set grows unbounded | — |
| 🟢 Low | [#3510](https://github.com/agentscope-ai/QwenPaw/issues/3510) | `MiniMax-M2.7` model error during execution | — |

### Recently Closed Bugs (Fixed/Resolved)

| Issue | Summary | Resolution |
|---|---|---|
| [#3481](https://github.com/agentscope-ai/QwenPaw/pull/3497) | `/api/tools` returns 500 when `icon=null` | Fixed by [#3497](https://github.com/agentscope-ai/QwenPaw/pull/3497) |
| [#3011](https://github.com/agentscope-ai/QwenPaw/issues/3011) | Long tasks silently stop | Closed — likely resolved by [#3305](https://github.com/agentscope-ai/QwenPaw/pull/3305) (TaskTracker registration) |
| [#3460](https://github.com/agentscope-ai/QwenPaw/issues/3460) | `chat_with_agent` MCP tool schema mismatch | Closed |
| [#3473](https://github.com/agentscope-ai/QwenPaw/issues/3473) | Model invocation error with `deepseek-v3.2` | Closed |
| [#3493](https://github.com/agentscope-ai/QwenPaw/issues/3493), [#3490](https://github.com/agentscope-ai/QwenPaw/issues/3490) | `ReadTimeout` during Anthropic streaming | Closed (likely upstream network) |

> **Stability note:** The API-level crash in #3506 is fresh (April 17) and affects Docker deployments — maintainers should prioritize. The Anthropic message-format bug (#3489) affects multi-provider setups and could impact any Claude-compatible endpoint.

---

## 6. Feature Requests & Roadmap Signals

### Highlighted Feature Requests

| # | Title | Component | Votes | Link |
|---|---|---|---|---|
| #3224 | **CoPaw Agent Teams** — natural-language-driven self-evolving multi-agent collaboration | Core | 4 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3224) |
| #3437 | Support **Kimi Code API** | Providers | 4 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3437) |
| #3470 | Self-evolution features (like Hermes Agent) | Core | 3 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3470) |
| #3439 | View agent- and level-specific logs from management console | Console | 3 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3439) |
| #3503 | Batch enable/disable skills in workspace UI | Console | 2 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3503) |
| #3507 | One-click uninstall for QwenPaw Local (llama.cpp) | CLI/Core | 2 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/3507) |
| #1059 | **ACP (Agent Communication Protocol) support** | Core | 4 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/1059) |

**Roadmap prediction for v1.2.x / next release:**
1. **ACP server/client** (#1059, #3487) — actively PR'd, high community interest for IDE integration
2. **Extensible memory backends** (#3500) — PR open, moves CoPaw beyond single ReMeLight lock-in
3. **New channels** (Signal, WhatsApp, SIP) — all PRs active, channel ecosystem expansion
4. **Multimodal support** (#3509) — image/file messages in pipeline
5. **Plan mode** (#2904) — structured agent planning, under review

---

## 7. User Feedback Summary

### Pain Points

- **Upgrade friction:** Post-v1.1.0 migration is confusing — dual app presence, PATH issues on Windows, leftover `.copaw` directories ([#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309))
- **Channel reliability:** WeCom (企业微信) channels drop connections requiring manual re-save ([#2757](https://github.com/agentscope-ai/QwenPaw/issues/2757))
- **Model compatibility:** Qwen/Qwen-flash output XML but CoPaw expects JSON in local LLM setups ([#3477](https://github.com/agentscope-ai/QwenPaw/issues/3477)); Kimi coding plan unusable ([#3395](https://github.com/agentscope-ai/QwenPaw/issues/3395))
- **Memory persistence:** MCP service configuration not remembered across new conversations ([#3453](https://github.com/agentscope-ai/QwenPaw/issues/3453))
- **Encoding issues:** Recurring encoding problems in script generation sessions ([#3453](https://github.com/agentscope-ai/QwenPaw/issues/3453))

### Positive Signals

- Users actively contributing **first-time PRs** (3 flagged in recent PRs: SIP channel, multimodal support, QQ fixes)
- WhatsApp and Signal channel work shows strong **external contributor engagement** (joe2643 leading multiple channel PRs)
- ACP protocol interest indicates CoPaw is becoming a **hub for multi-agent workflows**

---

## 8. Backlog Watch

Items needing maintainer attention — unanswered or stalled:

| # | Title | Age | Status | Concern |
|---|---|---|---|---|
| [#1563](https://github.com/agentscope-ai/QwenPaw/issues/1563) | `write_file` truncates large content | ~32 days | Open | File tool defect; no PR linked |
| [#1059](https://github.com/agentscope-ai/QwenPaw/issues/1059) | ACP support request | ~39 days | Open (PR #3487 active) | Awaiting merge review |
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) | Agent Teams feature | ~7 days | Open | Needs triage — broad scope |
| [#2757](https://github.com/agentscope-ai/QwenPaw/issues/2757) | WeCom channel disconnect | ~16 days | Open | No response from maintainers |
| [#3445](https://github.com/agentscope-ai/QwenPaw/issues/3445) | MCP GUI config not passed to ReMe | ~2 days | Open | Architecture issue; dual MCP system confusion |
| [#3279](https://github.com/agentscope-ai/QwenPaw/issues/3279) | Pipeline ops execute twice | ~5 days | Open | Performance regression; no PR |

> **Backlog priority:** The `write_file` truncation bug (#1563) at 32 days and the WeCom channel stability issue (#2757) at 16 days without maintainer response risk user churn in Windows enterprise and Chinese enterprise messaging markets respectively.

---

*Digest generated for CoPaw / QwenPaw (`agentscope-ai/QwenPaw`) — 2026-04-17. Data covers 24-hour window ending 2026-04-17.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-17

## 1. Today's Overview

ZeroClaw maintained high velocity with 41 issues and 50 pull requests updated in the last 24 hours, indicating strong community engagement. No new releases shipped, but the project is actively advancing toward v0.7.0 with six active RFCs covering architecture, governance, documentation, and infrastructure. Notable urgency exists around bugs blocking workflows (web dashboard unavailable, CLI channel factory not registered) and a critical CI publish pipeline issue following the microkernel workspace split.

---

## 2. Releases

No new releases in the past 24 hours.

---

## 3. Project Progress

**PRs merged/closed today (5):**
- #5784 — Matrix media download failure fallback inconsistency fixed
- #5798 — Webhook channel startup crash (when configured as only channel) resolved
- #5585 — OpenTelemetry formalized as observability standard
- #5755 — Prometheus backend recognition fixed
- #5562 — Windows shell command console flash issue addressed

**Feature advances:**
- Nextcloud Talk draft-update streaming implementation in progress (#5718)
- TOTP-gated commands for shell tool Phase 1 open (#5779)
- Manifest Router provider added as OpenAI-compatible option (#5730)

---

## 4. Community Hot Topics

| Topic | Comments | Link |
|-------|----------|------|
| Web dashboard not available (bug, S1) | 14 | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) |
| Matrix channel friction tracker | 12 | [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) |
| RFC: Microkernel Architecture (v0.7.0→v1.0.0) | 8 | [#5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) |
| GitHub Copilot provider not showing in onboard | 7 | [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) |
| RFC: Engineering Infrastructure (CI/CD) | 4 | [#5579](https://github.com/zeroclaw-labs/zeroclaw/issues/5579) |

**Analysis:** The web dashboard unavailability is a long-standing pain point (opened March 28, updated through April 16) affecting both Tauri desktop app and web UI users. Matrix channel improvements show strong community investment in E2EE and protocol reliability. The active RFC spree signals major architectural evolution toward v1.0.0.

---

## 5. Bugs & Stability

| Severity | Bug | Status | Link |
|----------|-----|--------|------|
| **S0** | Context spillage from chat to scheduled tasks (security risk) | Open | [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) |
| **S1** | CLI channel factory not registered — agent mode crashes | Open | [#5685](https://github.com/zeroclaw-labs/zeroclaw/issues/5685) |
| **S1** | Web dashboard unavailable (Tauri + web UI) | Closed | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) |
| **S2** | codex_cli passes unsupported `-q` flag to v0.118.0 | Open | [#5360](https://github.com/zeroclaw-labs/zeroclaw/issues/5360) |
| **S2** | Prometheus backend not recognized | Closed | [#5755](https://github.com/zeroclaw-labs/zeroclaw/issues/5755) |

**Critical:** The S0 context spillage bug represents a data isolation failure — chat context contaminating scheduled task execution — which could have security implications. No fix PR exists yet.

---

## 6. Feature Requests & Roadmap Signals

**High-demand features identified from issue activity:**

| Feature | Demand Signal | Link |
|---------|---------------|------|
| OneBot/napcat channel support | 6 comments, screenshot evidence | [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) |
| Webhook custom paths & transforms | 4 comments, specific use case | [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) |
| MariaDB memory backend | 1 comment, enterprise need | [#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) |
| Mattermost oncall mode | 2 👍, multi-channel mention handling | [#3100](https://github.com/zeroclaw-labs/zeroclaw/issues/3100) |

**Predicted for v0.7.0/v1.0.0 based on RFC momentum:**
- Microkernel architecture decomposition
- Mozilla Fluent i18n replacement
- Expanded CI/CD (musl/Alpine builds queued in #5739)
- TOTP-gated shell commands

---

## 7. User Feedback Summary

**Pain points reported:**
- **Installation friction:** Multiple installation methods not discoverable in README; `cargo binstall` and Nix flake added via [#5694](https://github.com/zeroclaw-labs/zeroclaw/pull/5694)
- **Provider onboarding gaps:** GitHub Copilot selectable provider missing from `zeroclaw onboard` flow (#4851)
- **IMAP compatibility:** Email channel fails on servers without IDLE (seznam.cz, GMX, older Dovecot/Exchange) — fix pending in [#5712](https://github.com/zeroclaw-labs/zeroclaw/pull/5712)
- **WebSocket reliability:** Theme switching broken, WebSocket buffer lost in non-proxy path
- **Security:** Shell expansion bypass when `allowed_commands=["*"]` (#5773 — high-risk PR awaiting review)

**Positive signals:**
- Memory retrieval multi-query expansion merged (#2472)
- Azure OpenAI custom provider auth_header support added (#2555)
- 30+ translated docs updated for install.sh flags (#5679)

---

## 8. Backlog Watch

**Long-unanswered or stale issues requiring maintainer attention:**

| Issue | Age | Status | Priority |
|-------|-----|--------|----------|
| Webhook custom transforms (#2467) | ~46 days | Stale | Medium |
| napcat/OneBot channel (#2503) | ~46 days | Stale | High user demand |
| Mattermost oncall mode (#3100) | ~38 days | In progress | Feature |
| MariaDB memory support (#4668) | ~23 days | Open | Enterprise need |

**PRs needing maintainer review (flagged `needs-maintainer-review`):**
- #5696 — SessionResetTool/SessionDeleteTool (security tool)
- #5705 — Session abort + streaming persistence (high risk)
- #5739 — musl/Alpine Linux builds
- #5772 — Rate-limiting delegation refactor
- #5773 — Shell guard bypass (security)
- #5779 — TOTP gated commands (security)

**CI blocker:** #5811/#5812 — Root crate `cargo publish` broken post-microkernel split; needs architectural decision before v0.7.0 release pipeline can proceed.

---

*Generated from GitHub data for [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) — 2026-04-17*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/manelsen/agents-radar).*