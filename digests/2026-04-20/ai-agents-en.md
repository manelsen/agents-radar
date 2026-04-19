# AI Agents Ecosystem Digest 2026-04-20

> Issues: 6 | PRs: 10 | Projects covered: 7 | Generated: 2026-04-19 20:32 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Primary Project Deep Dive

# NullClaw Project Digest — 2026-04-20

## Today's Overview

NullClaw is experiencing **high development velocity** with 10 new pull requests opened in the past 24 hours, all currently open and under review. No releases were published, but the project continues to advance its architecture with a significant infrastructure refactor (PRs #845–#848) introducing an inbound router system for handling concurrent and non-blocking interactivity. Community activity is healthy with 6 issues updated, ranging from documentation requests to critical bugs affecting CPU and stability.

---

## Releases

**No new releases** were published in the past 24 hours.

---

## Project Progress

10 pull requests were opened recently, representing substantial progress across multiple subsystems:

| PR | Author | Area | Description |
|----|--------|------|-------------|
| [#852](https://github.com/nullclaw/nullclaw/pull/852) | manelsen | memory | Improves archive provenance and recall quality |
| [#850](https://github.com/nullclaw/nullclaw/pull/850) | manelsen | tunnel | Adds encrypted Tailscale auth_key support |
| [#848](https://github.com/nullclaw/nullclaw/pull/848) | manelsen | daemon | Routes inbound bus messages via inbound_router |
| [#847](https://github.com/nullclaw/nullclaw/pull/847) | manelsen | gateway | Routes inbound via inbound_router |
| [#846](https://github.com/nullclaw/nullclaw/pull/846) | manelsen | channel_loop | Routes inbound via inbound_router for Telegram/Max |
| [#845](https://github.com/nullclaw/nullclaw/pull/845) | manelsen | core | Inbound router and mid-turn injection infrastructure |
| [#844](https://github.com/nullclaw/nullclaw/pull/844) | manelsen | a2a | Forwards skill tool-call progress hints to A2A stream |
| [#843](https://github.com/nullclaw/nullclaw/pull/843) | manelsen | onboard | Fixes KeyWriteFailed crash during config save |
| [#842](https://github.com/nullclaw/nullclaw/pull/842) | manelsen | agent/gateway | Adds `--workspace` flag to override workspace directory |
| [#770](https://github.com/nullclaw/nullclaw/pull/770) | vernonstinebaker | api | REST Admin API for runtime status, config, model listing, cron |

**Key architectural advancement:** The inbound router infrastructure (PRs #845–#848) represents a multi-part effort to enable concurrent and non-blocking interactivity across gateway, daemon, and channel integrations.

---

## Community Hot Topics

**Most Active Issue:** [#826](https://github.com/nullclaw/nullclaw/issues/826) — *How to use nullclaw gateway with Tailscale?*  
- **Comments:** 8 | **Status:** Open  
- **Summary:** User trying to run nullclaw gateway on a Debian VPS behind Tailscale encounters `NotImplemented` error when starting tunnel. This issue is driving PR #850 (Tailscale auth_key support).

**Notable Discussion:** [#354](https://github.com/nullclaw/nullclaw/issues/354) — *Service stops working after Homebrew upgrade*  
- **Comments:** 3 | **Status:** Open  
- **Summary:** LaunchAgent plist uses hardcoded Cellar path, breaking after version upgrades. Cross-links with PR #850's Tailscale work, indicating multi-platform support improvements underway.

---

## Bugs & Stability

| # | Issue | Severity | Details |
|---|-------|----------|---------|
| **High** | [#851](https://github.com/nullclaw/nullclaw/issues/851) — Busy-loop on accept4() pegs CPU | **Critical** | On Raspberry Pi 5 (Debian aarch64), gateway consumes ~100% CPU when idle due to accept4() returning EAGAIN in a tight loop |
| **High** | [#849](https://github.com/nullclaw/nullclaw/issues/849) — Subagent cannot return result properly | **High** | Subagent spawn completes but reply cannot be retrieved; file creation works, indicating execution succeeds but result routing fails |
| **Medium** | [#408](https://github.com/nullclaw/nullclaw/issues/408) — Tool call parsing breaks JSON | **Medium** | Colon incorrectly extracted as tool name from valid JSON `{"name": "memory_recall", ...}` |
| **Medium** | [#665](https://github.com/nullclaw/nullclaw/issues/665) — Error: error.NoResponseContent | **Medium** | Assembly user encounters NoResponseContent error on Windows build |
| **Low** | [#354](https://github.com/nullclaw/nullclaw/issues/354) — Homebrew service breakage | **Low** | Versioned Cellar path causes silent failure post-upgrade |

**Fix PR available:** [#843](https://github.com/nullclaw/nullclaw/pull/843) addresses the `KeyWriteFailed` crash during onboarding (related to Docker permission issues).

---

## Feature Requests & Roadmap Signals

**In-Flight Features (Open PRs):**

1. **REST Admin API** (#770) — Enables lightweight clients (menubar apps, iOS/iPadOS, CLI dashboards) to inspect and control the gateway. Zero new dependencies; <30KB binary increase.

2. **Inbound Router / Mid-turn Injection** (#845–#848) — Core architectural change enabling concurrent/non-blocking interactivity. Will improve webhook handling, queue management, and message injection.

3. **Tailscale Auth Key Support** (#850) — Allows gateway to run `tailscale up` before serve/funnel, with encrypted key handling via secrets pipeline.

4. **A2A Progress Hints** (#844) — Exposes tool_call_start events to A2A streams, enabling callers to observe in-progress tool invocations.

5. **Workspace Override** (#842) — `--workspace` flag for gateway/agent to run multiple instances with different workspaces.

**User-Requested Features:**
- Tailscale integration (driving #850)
- Multi-platform service management (Homebrew fix needed)
- Subagent result communication (#849)

---

## User Feedback Summary

**Pain Points:**
- **Platform-specific breakage**: Homebrew upgrade silently breaks service on macOS
- **Integration complexity**: Tailscale setup documentation insufficient (#826)
- **CPU efficiency**: ARM64 platforms (Raspberry Pi 5) experiencing 100% CPU idle loops
- **Subagent reliability**: Spawn works but result retrieval fails (#849)

**Use Cases Observed:**
- Running nullclaw gateway on VPS with Tailscale VPN overlay
- Containerized deployments (Docker permission issues during onboarding)
- Multi-agent orchestration with subagent spawning
- Integration with LM Studio (tool call parsing issue likely affects LLM responses)

**Dissatisfaction Signals:** 6 open bugs with minimal ⭐ reactions suggest users may be encountering issues silently rather than engaging. The CPU peg bug on ARM64 (#851) appears freshly reported without workarounds.

---

## Backlog Watch

| # | Age | Priority | Issue/PR | Status |
|---|-----|----------|----------|--------|
| [#354](https://github.com/nullclaw/nullclaw/issues/354) | ~44 days | Medium | Homebrew upgrade breakage | Open (3 comments) |
| [#408](https://github.com/nullclaw/nullclaw/issues/408) | ~41 days | Medium | Tool call JSON parsing bug | Open (2 comments) |
| [#665](https://github.com/nullclaw/nullclaw/issues/665) | ~30 days | Medium | NoResponseContent error | Open (2 comments) |
| [#826](https://github.com/nullclaw/nullclaw/issues/826) | ~5 days | High | Tailscale gateway integration | Open (8 comments) |
| [#770](https://github.com/nullclaw/nullclaw/pull/770) | ~15 days | High | REST Admin API | Open, needs review |

**Needs Maintainer Attention:** Issues #354, #408, and #665 have been open 30+ days with limited engagement. The Homebrew and tool call bugs likely affect production users. The REST Admin API PR (#770) is substantial and awaiting merge review.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Ecosystem

**Report Date:** 2026-04-20
**Projects Analyzed:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem demonstrates robust and accelerating development across seven major projects, with collective activity exceeding 300 combined Issues/PRs in the past 24 hours. The landscape shows a maturing market segment transitioning from proof-of-concept tooling toward production-grade infrastructure: ZeroClaw has shipped a major v0.7.3 release with proper workspace modularity, while NanoBot and Hermes Agent lead in raw development velocity with 150+ and 50+ updates respectively. Common architectural patterns are emerging—including Telegram as the de facto first-class messaging channel, ContextVar-based async safety hardening, and multi-provider failover mechanisms—while projects differentiate through target deployment scenarios (mobile automation, enterprise multi-tenancy, developer workstations) and runtime strategies (Rust/WASM sandboxing vs. Python skills vs. TypeScript ecosystems).

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Key Health Indicators |
|---------|----------------------|-------------------|----------------|----------------------|
| **NullClaw** | 6 | 10 | 0 | High velocity; single-primary-contributor risk (manelsen); 1 critical CPU bug on ARM64 |
| **NanoBot** | 11 | 158+ | 0 | Highest activity volume; 25 PRs merged; strong async safety investment |
| **Hermes Agent** | 50 | 50 | 0 | Docker `latest` stale (3h gap); Telegram split-brain issue; high community engagement |
| **PicoClaw** | 13 | 9 | 1 nightly | Authorization header regression (v0.2.6); security PRs in progress |
| **IronClaw** | 10 | 50 | 0 | WASM URL leak (security); design system rollout; large PRs aging (30+ days) |
| **CoPaw** | 21 | 14 | 0 | Critical crash bugs (YAML, blank screen); 6+ distinct crash patterns reported |
| **ZeroClaw** | 36 | 29 | v0.7.3 major | Most mature release cycle; S1 bugs (compaction orphans, MCP leaks); active RFC on multi-agent |

**Summary:** NanoBot leads in activity volume; ZeroClaw leads in release maturity; CoPaw shows highest bug density requiring immediate attention; NullClaw presents single-contributor concentration risk.

---

## 3. Primary Project Positioning

### Technical Approach Differentiation

| Project | Runtime Strategy | Primary Language | Channel Focus | Target Deployment |
|---------|------------------|------------------|---------------|-------------------|
| **NullClaw** | Rust daemon + inbound router | Rust | Telegram, Max | VPS with Tailscale VPN overlay |
| **NanoBot** | Python async agent loop | Python | Telegram, WebSocket, Email | Containerized multi-agent |
| **Hermes Agent** | Python with Docker sandbox | Python | Telegram, WhatsApp, Slack | Desktop/workstation |
| **PicoClaw** | Go multi-provider architecture | Go | Web chat, multi-user | Cross-platform desktop |
| **IronClaw** | Rust WASM sandbox engine | Rust | Slack, Telegram, CLI | Enterprise/team use |
| **CoPaw** | TypeScript/Tauri desktop | TypeScript | Console, Telegram, WeChat | Chinese market desktop |
| **ZeroClaw** | Rust workspace crates | Rust | Telegram, Mattermost, BitChat (BLE) | Developer workstation, Raspberry Pi |

### Community Size & Engagement

| Project | Contributor Concentration | Community Engagement | Issue Response Speed |
|---------|---------------------------|----------------------|---------------------|
| **NullClaw** | High (1 primary author) | Moderate (8-comment Tailscale thread) | Slow for non-priorities (30+ day bugs) |
| **NanoBot** | Distributed | High (158 updates) | Active (25 merges/day) |
| **Hermes Agent** | Distributed (NousResearch org) | High (12-comment auth issue) | Moderate (Docker gap concern) |
| **PicoClaw** | Multiple active contributors | Moderate | Active on regressions |
| **IronClaw** | NearAI org backing | Moderate | Slow on large PRs (30+ days) |
| **CoPaw** | Distributed (agentscope-ai) | High bug reports | Needs improvement (critical crashes unaddressed) |
| **ZeroClaw** | Distributed | High (17-comment dashboard thread) | Active (same-day PR responses) |

---

## 4. Shared Technical Focus Areas

The following requirements emerge consistently across multiple projects, indicating ecosystem-wide architectural priorities:

### 4.1 Telegram as Standard Integration Channel
**Projects:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, ZeroClaw
**Specific Needs:**
- Topic-specific message routing (NanoBot PR #2255)
- Voice message handling (ZeroClaw #5509, Hermes Agent split-brain fix)
- Typing indicator persistence during tool execution (CoPaw #3585)
- Split-brain adapter state resolution (Hermes Agent #11016)
- Telegram bot command updates (ZeroClaw #5691)

### 4.2 Async Safety & Concurrency Hardening
**Projects:** NanoBot, CoPaw, Hermes Agent
**Specific Needs:**
- ContextVar for task-local tool routing context (NanoBot #2224—merged)
- Bounded MessageBus queues with backpressure (NanoBot #3180)
- Multi-provider concurrent request handling (Hermes Agent provider improvements)

### 4.3 Multi-Provider Reliability & Failover
**Projects:** NanoBot, Hermes Agent, PicoClaw
**Specific Needs:**
- Automatic cross-provider model failover (NanoBot PR #3083)
- Fallback models support for unstable providers (NanoBot #3083)
- `fallback_models` UX improvement (NanoBot #3107)
- FreeRide intelligent model rotation across free providers (PicoClaw #2588)

### 4.4 Voice Pipeline & STT/TTS Integration
**Projects:** NanoBot, CoPaw
**Specific Needs:**
- Whisper transcription with language parameter (NanoBot PR #3116)
- Latency observability per pipeline stage (NanoBot #3257: 35-60s reported E2E)
- Web Speech API replacement with Whisper (CoPaw PR #3574)
- Retry logic for transient STT failures (NanoBot PR #3253)

### 4.5 Security Hardening
**Projects:** PicoClaw, IronClaw, ZeroClaw
**Specific Needs:**
- WebSocket CheckOrigin/CSWSH mitigation (PicoClaw #2256)
- WASM URL leak detection ordering (IronClaw #2676)
- Authorization header preservation in provider layers (PicoClaw #2578)
- MCP stdio child process leak prevention (ZeroClaw #5903)

### 4.6 Platform-Specific Compatibility
**Projects:** NullClaw, ZeroClaw, PicoClaw, CoPaw
**Specific Needs:**
- ARM64/Raspberry Pi 5 stability (NullClaw #851: 100% CPU idle loop)
- Docker memory limits with memcg detection (ZeroClaw #5906)
- Windows path encoding with full-width punctuation (CoPaw #3581)
- Homebrew launchd path versioning (NullClaw #354)

---

## 5. Differentiation Analysis

### Feature Focus Differentiation

| Project | Primary Differentiator | Secondary Differentiator |
|---------|------------------------|-------------------------|
| **NullClaw** | Inbound router for concurrent/non-blocking interactivity | Tailscale VPN overlay gateway support |
| **NanoBot** | Performance optimization bundle (66,500 lines analyzed) | Comprehensive STT/LLM/TTS pipeline with profiling |
| **Hermes Agent** | Native first-class provider integrations (Gemini AI Studio) | Skills ecosystem (Val Town, Darwinian evolver, NOX reasoning) |
| **PicoClaw** | Android device automation roadmap | FreeRide intelligent free-tier failover |
| **IronClaw** | Engine v2 full WASM sandboxing | Built-in browser tool with CDP/AX-tree |
| **CoPaw** | Per-agent model assignment with routing UI | Chinese market optimization (WeChat, EN/ZH skill split) |
| **ZeroClaw** | Rust workspace modularity with live config migration | BitChat BLE mesh offline communication |

### Target User Profiles

| Project | Primary User | Secondary User |
|---------|--------------|----------------|
| **NullClaw** | Self-hosted enthusiasts on VPS | Tailscale network operators |
| **NanoBot** | Developers running containerized deployments | Power users with multi-provider setups |
| **Hermes Agent** | Desktop power users | Teams with conversation history needs |
| **PicoClaw** | Cross-platform desktop users | Security-conscious enterprise |
| **IronClaw** | Enterprise/team deployments | Developers needing browser automation |
| **CoPaw** | Chinese-speaking desktop users | Multi-channel operators (WeChat focus) |
| **ZeroClaw** | Developer workstation users | Raspberry Pi / embedded deployers |

### Technical Architecture Differences

| Dimension | NullClaw | NanoBot | Hermes Agent | PicoClaw | IronClaw | CoPaw | ZeroClaw |
|-----------|----------|---------|-------------|----------|----------|-------|----------|
| **Core Language** | Rust | Python | Python | Go | Rust | TypeScript | Rust |
| **Sandboxing** | Inbound router isolation | Async task isolation | Docker container | N/A | WASM engine v2 | Tauri webview | Docker + native options |
| **Memory System** | Archive provenance recall | Bounded MessageBus | Skills + memory providers | Vector-based | Cognitive Guardian | AgentMemory (BM25+KG) | Per-turn auto-save control |
| **Config Schema** | Flat, daemon-managed | YAML-based | Skills system | Provider-driven | Hot-reload capable | Live migration | Live migration (v0.7.3) |

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration** | NanoBot, Hermes Agent | 50-150+ updates/24h; 20-25 merges/day; large feature PRs under active review |
| **Active Development** | IronClaw, ZeroClaw, PicoClaw, NullClaw | 10-50 updates/24h; steady PR flow; notable releases or large PRs aging |
| **Bug-Fix Focused** | CoPaw | High issue volume; 21 issues/24h; multiple critical crashes; needs stabilization |

### Maturity Indicators

| Project | Release Cadence | Breaking Changes | Migration Support | Documentation |
|---------|-----------------|------------------|------------------|---------------|
| **NullClaw** | None (24h) | N/A | Unknown | Active (Tailscale docs needed) |
| **NanoBot** | None (24h) | N/A | N/A | Strong (Chinese/English) |
| **Hermes Agent** | None (stale Docker) | Minimal | Via Docker rebuild | Good |
| **PicoClaw** | Nightly builds | Version-specific regressions | Unknown | Moderate |
| **IronClaw** | None (24h) | Unknown | Hot-reload shipped | Improving |
| **CoPaw** | None (24h) | Unknown | Unknown | Moderate |
| **ZeroClaw** | **v0.7.3 major (shipped)** | Config schema changes | Live migration shipped | Good (Python skills quickstart) |

### Staleness Concerns

| Project | Issue | Age | Concern |
|---------|-------|-----|---------|
| IronClaw | Aliyun PR #1446 | 31 days | Large multi-scope PR aging without review |
| IronClaw | Slack Socket Mode PR #1549 | 30 days | Same as above |
| NullClaw | Homebrew breakage #354 | 44 days | Affects production macOS users |
| NullClaw | Tool call JSON parsing #408 | 41 days | Affects LLM response parsing |
| CoPaw | Sender timestamps #2432 | 24 days | Long-standing UX enhancement |
| ZeroClaw | Multi-Agent Routing #2767 | Stale (RFC active) | Long-standing feature request |

---

## 7. Trend Signals

The following industry patterns emerge from community feedback across projects:

### 7.1 Provider Abstraction Maturation
Multi-provider fallback mechanisms (NanoBot #3083, Hermes Agent provider deduplication) indicate users demand resilience against API instability. The emergence of "prompt-priced but unstable providers" as a recognized pain point (NanoBot #3107) suggests market pressure on LLM API reliability.

**Signal for developers:** Invest in provider abstraction layers with automatic failover; document timeout and retry behavior clearly.

### 7.2 Observability as Differentiator
Users increasingly demand visibility into agent internals: per-stage latency metrics for voice pipelines (NanoBot #3257: 35-60s reported), token usage displays (CoPaw #3563), profiling hooks (NanoBot #3184), and trace

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-20

## 1. Today's Overview

NanoBot continues to demonstrate high development velocity with **158 PRs** and **11 Issues** updated in the last 24 hours. No new releases were published today. The project shows strong community engagement with 133 open PRs under active review, suggesting a healthy feature pipeline. Key focus areas include Telegram integration improvements, voice/STT pipeline enhancements, performance optimizations, and configuration flexibility. Three issues were closed today while eight remain open, indicating active bug resolution alongside ongoing feature development.

## 2. Releases

**No new releases** were published in the last 24 hours. The project maintains its current version with active development ongoing in preparation for future releases.

## 3. Project Progress

### Merged/Closed PRs Today
- **25 PRs** were merged or closed in the last 24 hours out of 158 total updates, reflecting substantial review activity.

### Features & Fixes Advanced
The following PRs represent significant development progress:

| PR | Category | Description |
|----|----------|-------------|
| [#2255](https://github.com/HKUDS/nanobot/pull/2255) | Telegram Fix | Support sending messages to specific topics via `chat_id` (handles `-1001234567890:topic:929`, `-1001001234567890_929`, etc.) |
| [#2217](https://github.com/HKUDS/nanobot/pull/2217) | Cron Tool | Add `edit` action and show full message in list output |
| [#3116](https://github.com/HKUDS/nanobot/pull/3116) | STT Enhancement | Add `language` parameter for Whisper transcription (Groq/OpenAI APIs) to improve non-English accuracy |
| [#3243](https://github.com/HKUDS/nanobot/pull/3243) | Email Fix | Deduplicate SPF/DKIM-rejected emails to stop log spam |
| [#2224](https://github.com/HKUDS/nanobot/pull/2224) | Async Safety | Replace mutable instance attributes with `ContextVar` for task-local tool routing context |
| [#3254](https://github.com/HKUDS/nanobot/pull/3254) | SDK Fix | Populate `RunResult.tools_used` and `RunResult.messages` fields (were hardcoded to `[]`) |
| [#3253](https://github.com/HKUDS/nanobot/pull/3253) | STT Reliability | Retry Whisper calls on transient 502/503 failures with exponential backoff |
| [#3201](https://github.com/HKUDS/nanobot/pull/3201) | Agent Config | Add `disable_history_injection` config option |
| [#3184](https://github.com/HKUDS/nanobot/pull/3184) | Observability | Add profiling infrastructure for agent loop timing via `ProfilingHook` |
| [#3182](https://github.com/HKUDS/nanobot/pull/3182) | Performance | Cache bootstrap files, tool schemas, and Dream skill list (reduces 4 disk reads to 4 `stat()` calls on cache hit) |
| [#3181](https://github.com/HKUDS/nanobot/pull/3181) | Performance | Memory & history I/O optimizations with write batching |
| [#3180](https://github.com/HKUDS/nanobot/pull/3180) | Correctness | Bounded MessageBus queues with backpressure; tool routing context safety |
| [#3179](https://github.com/HKUDS/nanobot/pull/3179) | WebSocket | Enhanced tool event handling, session lifecycle, reasoning content, chat_id resumption |
| [#3158](https://github.com/HKUDS/nanobot/pull/3158) | Performance Bundle | Comprehensive performance, responsiveness & correctness enhancements (~66,500 lines analyzed) |
| [#3156](https://github.com/HKUDS/nanobot/pull/3156) | Heartbeat | Per-phase model overrides (`evalModelOverride`, `execModelOverride`) |
| [#3118](https://github.com/HKUDS/nanobot/pull/3118) | Dream Hook | Add customizable `after_hook_script` for post-dream processing |
| [#3114](https://github.com/HKUDS/nanobot/pull/3114) | Provider | Add LongCat via OpenAI-compatible backend |
| [#3105](https://github.com/HKUDS/nanobot/pull/3105) | Cron Tool | Add update capability to modify existing cron tasks |
| [#3083](https://github.com/HKUDS/nanobot/pull/3083) | Reliability | Add `fallback_models` support for automatic cross-provider model failover |

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[#3300]** [CLOSED] — DeepSeek API not supported *(6 comments)*
   - **Link:** https://github.com/HKUDS/nanobot/issues/3300
   - **Analysis:** User attempting to use DeepSeek v3.2 with Telegram bot on Ubuntu 24LTS encountered API compatibility issues. Closed—may indicate workaround exists or was resolved.

2. **[#3107]** — Some suggestions *(6 comments)*
   - **Link:** https://github.com/HKUDS/nanobot/issues/3107
   - **Analysis:** Seven feature suggestions from Chinese-speaking user covering status visibility, session history, LLM retry UX, model parameterization, timeout config, provider fallback, and multi-provider support. Items 1-3 marked complete, 4-7 pending.

3. **[#2220]** — Proposal: use ContextVar for task-local tool routing context *(5 comments)*
   - **Link:** https://github.com/HKUDS/nanobot/issues/2220
   - **Analysis:** Proposal for async-safety hardening. PR [#2224](https://github.com/HKUDS/nanobot/pull/2224) now addresses this.

4. **[#3274]** [CLOSED] — maybe_consolidate_by_tokens() summary injection strategy *(4 comments)*
   - **Link:** https://github.com/HKUDS/nanobot/issues/3274
   - **Analysis:** Good first issue exploring differences between two compression/archive paths in the memory system. Clarifies when summaries are injected vs. omitted.

5. **[#3257]** — Pipeline latency metrics for voice interactions *(3 comments)*
   - **Link:** https://github.com/HKUDS/nanobot/issues/3257
   - **Analysis:** User reports 35-60 second end-to-end latency with faster-whisper + Cartesia TTS. Journal lacks per-stage timestamps. Needs: detailed stage-level logging for STT → LLM → TTS pipeline.

6. **[#2231]** — Plugin system for agent extensibility *(3 comments)*
   - **Link:** https://github.com/HKUDS/nanobot/issues/2231
   - **Analysis:** Feature request for Copilot CLI/Claude Code-style plugin system. Low-hanging fruit for ecosystem growth.

### Most Active PRs (by engagement)

| PR | Description | Link |
|----|-------------|------|
| #3158 | Agent performance, responsiveness & correctness enhancements | https://github.com/HKUDS/nanobot/pull/3158 |
| #3179 | WebSocket tooling, session lifecycle, reasoning | https://github.com/HKUDS/nanobot/pull/3179 |
| #3180 | Bounded MessageBus queues and context safety | https://github.com/HKUDS/nanobot/pull/3180 |
| #3181 | Memory & history performance optimizations | https://github.com/HKUDS/nanobot/pull/3181 |
| #3083 | fallback_models support for model failover | https://github.com/HKUDS/nanobot/pull/3083 |

**Underlying needs identified:** Performance optimization (especially voice pipeline), reliability/failover mechanisms, async safety hardening, and WebSocket/channels flexibility.

## 5. Bugs & Stability

### Reported Bugs (Ranked by Urgency)

| Priority | Issue | Description | Link |
|----------|-------|-------------|------|
| **HIGH** | #3315 | Telegram message too long—bot fails when model streams excessive content | https://github.com/HKUDS/nanobot/issues/3315 |
| MEDIUM | #3300 | DeepSeek API not supported | https://github.com/HKUDS/nanobot/issues/3300 |
| MEDIUM | #3265 | UI dumps excessive "nanobot is thinking..." progress indicators | https://github.com/HKUDS/nanobot/issues/3265 |

### Stability Observations

- **Bug #3315** is a fresh report (2026-04-19) with no comments yet—represents a real Telegram integration failure when handling long model responses. No associated fix PR identified yet.
- **Bug #3300** has been closed, suggesting either a workaround or documentation exists.
- **Bug #3265** closed—likely addressed or acknowledged by maintainers.
- **Email reliability fix** ([#3243](https://github.com/HKUDS/nanobot/pull/3243)) addresses log spam from SPF/DKIM rejections, improving operational stability.
- **Whisper retry logic** ([#3253](https://github.com/HKUDS/nanobot/pull/3253)) strengthens STT reliability against transient API failures.

## 6. Feature Requests & Roadmap Signals

### High-Interest Feature Requests

| Request | Description | Link | Likelihood of Inclusion |
|---------|-------------|------|-------------------------|
| Plugin System | Extensibility framework like Copilot CLI/Claude Code | [#2231](https://github.com/HKUDS/nanobot/issues/2231) | Medium—discussed but no PR yet |
| Silent Retry Mode | Reduce noisy error recovery messages | [#3246](https://github.com/HKUDS/nanobot/issues/3246) | High—novel UX improvement |
| Per-Chat Group Policy | Different Telegram behaviors per group | [#3309](https://github.com/HKUDS/nanobot/issues/3309) | High—RFC submitted today |
| Session-Level Focus Tool | Persistent task awareness across interruptions | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | Medium—addresses core agent limitation |
| Voice Latency Metrics | Per-stage timing for STT→LLM→TTS | [#3257](https://github.com/HKUDS/nanobot/issues/3257) | High—justified observability need |
| Provider Fallback | Automatic cross-provider model failover | [#3083](https://github.com/HKUDS/nanobot/pull/3083) | **Already in PR** |

### Predicted Next Version Indicators
- Performance optimizations (#3158 cluster) are extensive and well-reviewed, likely targeting near-term release
- `fallback_models` PR (#3083) has cross-provider failover—strong candidate for vNext
- `disable_history_injection` (#3201) adds useful privacy/control
- ContextVar async safety (#2224) addresses critical correctness issue

## 7. User Feedback Summary

### Pain Points Identified

1. **Telegram Long Messages** — Users encounter failures when models generate verbose responses exceeding Telegram limits. Current error handling produces user-facing log errors ([#3315](https://github.com/HKUDS/nanobot/issues/3315)).

2. **Voice Pipeline Latency** — End-to-end latency of 35-60 seconds reported with local faster-whisper + Cartesia. Users lack visibility into which stage (STT/LLM/TTS) contributes most delay ([#3257](https://github.com/HKUDS/nanobot/issues/3257)).

3. **Provider Reliability** — "按prompt计费但不太稳定的供应商" (prompt-priced but unstable providers) need larger timeout buffers. LLM request retry behavior can be improved ([#3107](https://github.com/HKUDS/nanobot/issues/3107)).

4. **Noisy Error Recovery** — 3-5 retry messages during error recovery create poor UX. Users want "silent/quiet" retry mode ([#3246](https://github.com/HKUDS/nanobot/issues/3246)).

5. **Status Transparency** — "黑盒" (black box) concern: users want status displays showing task counts and clearer LLM retry termination signals ([#3107](https://github.com/HKUDS/nanobot/issues/3107)).

6. **UI Clutter** — Progress indicators ("⠋ nanobot is thinking...") spam the terminal with rapid animation frames ([#3265](https://github.com/HKUDS/nanobot/issues/3265)).

### Positive Signals
- **DeepSeek support request** (#3300) closed—user may have found workaround, suggesting community support helpful
- **Dream hook customization** (#3118) provides extensibility for post-processing workflows
- **LongCat provider** (#3114) added, expanding ecosystem

## 8. Backlog Watch

### Long-Unanswered Important Items

| Item | Age | Status | Description | Link |
|------|-----|--------|-------------|------|
| #2220 / #2224 | ~33 days | In PR | ContextVar async safety proposal | https://github.com/HKUDS/nanobot/issues/2220 |
| #2231 | ~33 days | Open | Plugin system request | https://github.com/HKUDS/nanobot/issues/2231 |
| #2255 | ~32 days | In PR | Telegram topic-specific messaging | https://github.com/HKUDS/nanobot/pull/2255 |
| #2217 | ~33 days | In PR | Cron edit action | https://github.com/HKUDS/nanobot/pull/2217 |
| #3107 | ~7 days | Open | Multi-item suggestion list (4 items pending) | https://github.com/HKUDS/nanobot/issues/3107 |
| #3292 | ~1 day | Open | Session-Level Focus Tool | https://github.com/HKUDS/nanobot/issues/3292 |

### Items Needing Maintainer Attention

1. **Issue #3315** — Fresh bug report on Telegram message length; no comments yet—needs triaging
2. **Issue #3309** — RFC for per-chat Telegram policies submitted today; no comments
3. **Issue #3292** — Novel "focus tool" concept addressing agent attention limitations; no engagement yet
4. **Issue #3257** — Voice latency observability request; 3 comments but needs actionable response

---

*Digest generated for NanoBot (github.com/HKUDS/nanobot) — 2026-04-20*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-20

## 1. Today's Overview

Hermes Agent maintains a high-velocity development cycle with **50 Issues and 50 PRs** updated in the last 24 hours. The project shows robust community engagement, with **26 open PRs** demonstrating active feature development and **24 merged/closed PRs** indicating successful landings. Issue activity is similarly healthy with **43 open/active** and **7 closed** issues, suggesting a steady flow of bug reports and feature requests being addressed. The ecosystem is expanding with new skills (Val Town, Darwinian evolver, NOX reasoning protocol) and significant backend improvements (Gemini native API routing, FTS5 workspace indexing, conversation browser). Notably, no new releases were published today, but several major PRs were merged that may form the basis of an upcoming release.

---

## 2. Releases

**No new releases today.**

The latest tagged releases remain unchanged. Users on `latest` Docker image should be aware of a known issue: the current `latest` tag was built 3 hours *before* the Gemini bearer auth fix landed ([commit ca32a2a6](https://github.com/NousResearch/hermes-agent/commit/ca32a2a60bd8655c001b96394e68309ba53b4550)), meaning the Docker image does **not yet contain** that fix. A rebuild is pending ([#12386](https://github.com/NousResearch/hermes-agent/issues/12386)).

---

## 3. Project Progress

### Merged/Closed PRs (24)

| PR | Title | Impact |
|---|---|---|
| [#12656](https://github.com/NousResearch/hermes-agent/pull/12656) | Route Gemini through native AI Studio API | **Major** — Drops OpenAI compatibility layer for native tool-calling support |
| [#10243](https://github.com/NousResearch/hermes-agent/pull/10243) | Use curated list for Nous in `provider_model_ids()` | Fixes `/model` picker from surfacing ~380 non-agentic model IDs |
| [#12319](https://github.com/NousResearch/hermes-agent/pull/12319) | Dedup providers across user/custom providers | Fixes duplicate entries in `/model` picker |
| [#12676](https://github.com/NousResearch/hermes-agent/pull/12676) | Add Zep memory provider | New memory backend integration via `hermes memory setup` |
| [#158](https://github.com/NousResearch/hermes-agent/pull/158) | Add `docker_volumes` config | Enables host directory mounts into Docker sandbox |
| [#159](https://github.com/NousResearch/hermes-agent/pull/159) | Web3 On-Chain Intelligence toolset | 2 blockchain tools (`web3_get_balance`, etc.) |
| [#164](https://github.com/NousResearch/hermes-agent/pull/164) | Solana blockchain oracle MCP toolset | 7 on-chain tools via Model Context Protocol |

### Open PRs Advancing (26)

Notable open PRs with significant scope:

- [#12631](https://github.com/NousResearch/hermes-agent/pull/12631) — **Conversations browser & API** — Backend APIs + dashboard UI for browsing local history
- [#11796](https://github.com/NousResearch/hermes-agent/pull/11796) — **FTS5 workspace indexing** — Pluggable search stack with full-text indexing and agent tools
- [#12642](https://github.com/NousResearch/hermes-agent/pull/12642) — **NOX multi-layer reasoning protocol** — Claims 80–84% token reduction with structured anti-hallucination validation
- [#12633](https://github.com/NousResearch/hermes-agent/pull/12633) — **Darwinian evolver skill** — LLM-driven mutation/crossover optimizer for prompts, regex, SQL, code
- [#12678](https://github.com/NousResearch/hermes-agent/pull/12678) — **Val Town optional skill** — Integrates Val Town serverless TypeScript platform as a new capability
- [#11155](https://github.com/NousResearch/hermes-agent/pull/11155) — **Tier profiles & heuristic routing core** — Per-task tier support and auto-tier routing for batch mode
- [#11223](https://github.com/NousResearch/hermes-agent/pull/11223) — **Configurable skills prompt filter** — New `skills.system_prompt_skills` config to reduce context bloat

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[#6475](https://github.com/NousResearch/hermes-agent/issues/6475)** — *Anthropic Claude subscription auth returns 'You're out of extra usage'* — **12 comments, 14 👍**
   - **Underlying need:** Reliability in API authentication. Users expect persistent auth that survives restarts and re-logins. The issue being closed with 14 👍 suggests many affected users.
   - *Status: CLOSED*

2. **[#4983](https://github.com/NousResearch/hermes-agent/issues/4983)** — *Native Google GenAI Provider for Gemini* — **11 comments, 2 👍**
   - **Underlying need:** First-class Gemini support bypassing fragile OpenAI compatibility. Users want native tool calling and proper model support.
   - *Note: This was partially addressed by PR #12656 (native AI Studio API routing).*
   - *Status: CLOSED*

3. **[#11016](https://github.com/NousResearch/hermes-agent/issues/11016)** — *Telegram stale adapter busy lock* — **5 comments**
   - **Underlying need:** Reliability in Telegram sessions. Split-brain state between adapter and gateway causes confusing UX with repeated interrupts.
   - *Related fix PR: #12677*

4. **[#9125](https://github.com/NousResearch/hermes-agent/issues/9125)** — *kimi-coding temperature 400 error with `provider=auto`* — **3 comments**
   - **Underlying need:** Robustness in multi-provider fallback. When auto-selecting providers, non-default temperatures cause failures.
   - *Related fix PR: #12680*

5. **[#12213](https://github.com/NousResearch/hermes-agent/issues/12213)** — *Add compress_context as native Tool* — **3 comments**
   - **Underlying need:** Programmable context compression. Users want to trigger `/compress` from within SKILL.md procedural instructions.

### Most Active PRs (by engagement/scope)

1. **[#12631](https://github.com/NousResearch/hermes-agent/pull/12631)** — Conversations browser API — Adds full CRUD for local conversation history
2. **[#11796](https://github.com/NousResearch/hermes-agent/pull/11796)** — FTS5 workspace indexing — Full-text search infrastructure for agent workspace
3. **[#12642](https://github.com/NousResearch/hermes-agent/pull/12642)** — NOX reasoning protocol — 80% token reduction claim attracting attention
4. **[#12633](https://github.com/NousResearch/hermes-agent/pull/12633)** — Darwinian evolver — Evolutionary prompt/code optimization

---

## 5. Bugs & Stability

Ranked by severity and user impact:

### 🔴 High Severity

| Issue | Description | Fix PR |
|---|---|---|
| [#12386](https://github.com/NousResearch/hermes-agent/issues/12386) | **Docker `latest` missing Gemini fix** — Bearer auth regression fix merged but Docker Hub image built 3 hours earlier | None (waiting for rebuild) |
| [#11016](https://github.com/NousResearch/hermes-agent/issues/11016) | **Telegram split-brain state** — Adapter thinks session active, gateway has no agent; repeated "Interrupting current task..." | [#12677](https://github.com/NousResearch/hermes-agent/pull/12677) pending |
| [#12395](https://github.com/NousResearch/hermes-agent/issues/12395) | **qqbot infinite loop** — Message push failures cause Hermes to loop calling LLM,疯狂消耗token | None reported |

### 🟠 Medium Severity

| Issue | Description | Fix PR |
|---|---|---|
| [#12408](https://github.com/NousResearch/hermes-agent/issues/12408) | **Vision tool sends Nous-specific 'tags' to non-Nous providers** — Causes 400 errors on Gemini | None reported |
| [#12422](https://github.com/NousResearch/hermes-agent/issues/12422) | **SSE chat completions report normal stop after crash** — Agent exceptions swallowed | None reported |
| [#12534](https://github.com/NousResearch/hermes-agent/issues/12534) | **Docker sandbox missing env vars from `docker_forward_env`** | None reported |
| [#12641](https://github.com/NousResearch/hermes-agent/issues/12641) | **CLI status bar duplicated as new lines when idle** | None reported |

### 🟡 Lower Severity

| Issue | Description | Fix PR |
|---|---|---|
| [#12372](https://github.com/NousResearch/hermes-agent/issues/12372) | Skill number duplicates on dashboard | None reported |
| [#12485](https://github.com/NousResearch/hermes-agent/issues/12485) | TUI shows `docker` even when `terminal.backend=local` | None reported |
| [#12533](https://github.com/NousResearch/hermes-agent/issues/12533) | Plan skill uses workspace-relative path causing profile collisions | None reported |

---

## 6. Feature Requests & Roadmap Signals

### High-Interest Feature Requests

| Issue/PR | Feature | Signals |
|---|---|---|
| [#12655](https://github.com/NousResearch/hermes-agent/issues/12655) | `picker_providers` config to filter `/model` picker | Users with custom endpoints want cleaner UI |
| [#11425](https://github.com/NousResearch/hermes-agent/issues/11425) | Skills lifecycle management — usage tracking, stale detection, auto-cleanup | Growing skills ecosystem needs management |
| [#12326](https://github.com/NousResearch/hermes-agent/issues/12326) | Persistent cross-session todo system with priority view | Desire for Hermes to actively manage user priorities |
| [#12340](https://github.com/NousResearch/hermes-agent/issues/12340) | Make auto skill-save configurable | Hardcoded prompts hurt local LLM users at high context |
| [#12572](https://github.com/NousResearch/hermes-agent/issues/12572) | Lightweight Docker without Playwright/Chromium (~2.4GB → smaller) | Strong demand for minimal deployments |
| [#12348](https://github.com/NousResearch/hermes-agent/issues/12348) | Brain operator APIs for events, patterns, candidates, rollout state | Advanced users want observability into agent reasoning |
| [#12484](https://github.com/NousResearch/hermes-agent/issues/12484) | Imprint as portable user profile across agents | Multi-agent users want portable context |

### Predicted Next-Version Candidates

Based on PR maturity and merge patterns, likely in upcoming release:
- ✅ Native Gemini AI Studio routing ([#12656](https://github.com/NousResearch/hermes-agent/pull/12656) — merged)
- ✅ FTS5 workspace indexing ([#11796](https://github.com/NousResearch/hermes-agent/pull/11796) — open, mature)
- ✅ Conversation browser API ([#12631](https://github.com/NousResearch/hermes-agent/pull/12631) — open)
- ✅ Configurable skills prompt filter ([#11223](https://github.com/NousResearch/hermes-agent/pull/11223) — open)
- 🔄 Gateway stale adapter fix ([#12677](https://github.com/NousResearch/hermes-agent/pull/12677) — open)

---

## 7. User Feedback Summary

### Pain Points

1. **API reliability concerns** — The Anthropic auth issue ([#6475](https://github.com/NousResearch/hermes-agent/issues/6475)) with 14 👍 indicates widespread frustration with subscription auth persistence. Users expect credentials to survive restarts.

2. **Docker image staleness** — Users running via Docker Hub are exposed to a known-bad `latest` image. The 3-hour gap between fix landing and image rebuild is a process gap.

3. **Multi-platform adapter instability** — Telegram voice message duplication ([#160](https://github.com/NousResearch/hermes-agent/issues/160)), split-brain adapter state ([#11016](https://github.com/NousResearch/hermes-agent/issues/11016)), and WhatsApp markdown hints ([#12224](https://github.com/NousResearch/hermes-agent/issues/12224)) suggest platform adapter layer needs hardening.

4. **Context management at scale** — Users with 89+ skills ([#11425](https://github.com/NousResearch/hermes-agent/issues/11425)) and high-context local LLMs ([#12340](https://github.com/NousResearch/hermes-agent/issues/12340)) feel the pain of unbounded system prompts.

5. **qqbot infinite loop** — Chinese user reports of runaway token consumption when message push fails is a critical reliability issue.

### Positive Signals

- High engagement on provider improvements (Gemini native API, Nous curated lists) shows users want first-class provider integrations
- Multiple blockchain/Web3 tool contributions (Solana MCP, Web3 intelligence) indicate the ecosystem is expanding into new domains
- Skills ecosystem growth with Val Town, Darwinian evolver, NOX — community is building on the platform
- Memory provider architecture being extended (Zep integration) shows healthy plugin ecosystem

---

## 8. Backlog Watch

Important Issues/PRs needing maintainer attention:

| Item | Age | Issue | Why It Matters |
|---|---|---|---|
| [#12386](https://github.com/NousResearch/hermes-agent/issues/12386) | 1 day | Docker `latest` missing Gemini fix | **Active users on latest are broken** |
| [#12395](https://github.com/NousResearch/hermes-agent/issues/12395) | 1 day | qqbot infinite token loop | **Financial impact to users** |
| [#11016](https://github.com/NousResearch/hermes-agent/issues/11016) | 4 days | Telegram split-brain | **UX blocker, fix PR pending** |
| [#12408](https://github.com/NousResearch/hermes-agent/issues/12408) | 1 day | Vision tool sends invalid params to Gemini | **Breaks cross-provider setups** |
| [#11425

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-20

---

## 1. Today's Overview

PicoClaw demonstrates robust development activity with 13 issues and 9 PRs updated in the last 24 hours. The project is in an active refactoring phase, evidenced by multiple PRs targeting architecture improvements (provider deduplication, agent looper restructuring) and new features (streaming web chat, model failover). A nightly build (v0.2.6-nightly.20260419.6126ede9) was published, reflecting continuous integration momentum. Community engagement remains high with several security-focused contributions and ongoing provider compatibility improvements.

---

## 2. Releases

**Nightly Build Published:** `v0.2.6-nightly.20260419.6126ede9`

- Automated nightly build from the main branch
- Full changelog: https://github.com/sipeed/picoclaw/compare/v0.2.6...main
- ⚠️ *This is an unstable pre-release; production use is discouraged*

---

## 3. Project Progress

### Merged/Closed PRs

| PR | Domain | Description |
|---|---|---|
| [#2588](https://github.com/sipeed/picoclaw/pull/2588) | provider, tool, build | **Feature:** FreeRide model failover & provider architecture modernization — Introduced intelligent model rotation system for dynamic failover across free LLM providers via OpenRouter |

### Active PRs Advancing

| PR | Author | Focus | Status |
|---|---|---|---|
| [#2591](https://github.com/sipeed/picoclaw/pull/2591) | stevef1uk | FreeRide model failover integration (standalone PR) | Open |
| [#2585](https://github.com/sipeed/picoclaw/pull/2585) | sky5454 | Agent Looper refactor phase2 — pipeline restructuring, loop files renamed to agent | Open |
| [#2587](https://github.com/sipeed/picoclaw/pull/2587) | SiYue-ZO | Web chat streaming support with scroll UX improvements | Open |
| [#2586](https://github.com/sipeed/picoclaw/pull/2586) | kunalk16 | Provider function deduplication across pkg/providers | Open |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | stevef1uk | Multi-User Support, Security Hardening, Skills whitelisting | Open |
| [#2256](https://github.com/sipeed/picoclaw/pull/2256) | mateea326 | WebSocket CheckOrigin hardening (CSWSH vulnerability mitigation) | Open |
| [#2505](https://github.com/sipeed/picoclaw/pull/2505) | MichelSantos | CLI: Improve embedding process of workspace files | Open |
| [#2490](https://github.com/sipeed/picoclaw/pull/2490) | MichelSantos | CLI: Fix onboard advisory about configuration files | Open |

---

## 4. Community Hot Topics

### Most Discussed Issues

1. **#292 — Feature: Android Device Automation & Remote Operations** (Roadmap, High Priority)
   - 8 comments | 1 reaction
   - https://github.com/sipeed/picoclaw/issues/292
   - *Goal:* Bridge LLMs with Android device interfaces for AI-driven task automation, similar to "Botdrop" functionality

2. **#2171 — [Refactor] Move OpenAI endpoints to Responses API** (Enhancement)
   - 7 comments
   - https://github.com/sipeed/picoclaw/issues/2171
   - *Driven by:* OpenAI's official recommendation to migrate from Chat Completions to Responses API

### Signal Analysis

The high engagement on #292 indicates strong user demand for mobile device control capabilities, positioning Android automation as a potential strategic priority. The OpenAI Responses API migration (#2171) reflects proactive alignment with upstream provider evolution. The concentration of PRs around security (WS hardening, multi-user support, Agent Shield integration) signals a maturation trajectory toward enterprise readiness.

---

## 5. Bugs & Stability

### Active Bugs (Ranked by Severity)

| # | Bug | Severity | Status | Fix PR? |
|---|---|---|---|---|
| **#2590** | Android app: Service fails to start — libpicoclaw.so cannot be executed | **High** | Open | — |
| **#2578** | openai_compat provider drops Authorization header in v0.2.6 | **High** | Open | — |
| **#2584** | DeepSeek provider returns 401 "Authentication Fails" with valid API key | **High** | Open | — |
| #2310 | WebUI: Chat history incomplete after page refresh/close | Medium | Open | — |
| #2237 | NewAPI provider: Feishu Q&A functionality issues | Medium | Open | — |

### Closed Bug

| # | Bug | Resolution |
|---|---|---|
| #2583 | qwen3.5 and gemma4 not working with Ollama | **Closed** (no resolution detail provided) |

**⚠️ Critical Concern:** The Authorization header regression (#2578) affects all HTTP-based models and appears version-specific to v0.2.6 — likely the highest-impact bug for active users.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features

| # | Feature | Domain | Predicted Priority |
|---|---|---|---|
| #292 | Android Device Automation & Remote Operations | agent, mobile | **High** (roadmap item) |
| #2171 | Migrate to OpenAI Responses API | provider | **Medium-High** |
| #2217 | Token consumption statistics dashboard (WebUI) | channel | Medium |
| #2216 | Thinking content display support (WebUI) | channel | Medium |
| #2261 | Zalo Chat channel provider | channel | Medium (community request) |
| #2321 | Provider-Level Model Configuration Management | config | Medium |

### Potential Next Release Indicators

The combined PR activity suggests v0.2.6+ may include:
- Streaming web chat UX (#2587)
- FreeRide intelligent failover (#2591, #2588)
- Refactored agent pipeline architecture (#2585)
- Provider deduplication improvements (#2586)

---

## 7. User Feedback Summary

### Pain Points Identified

1. **Authentication Failures** — Multiple users report provider-level auth issues (DeepSeek 401, openai_compat header drop), suggesting regression risk in provider integration code
2. **Android Stability** — Critical service launch failure on Android (#2590) indicates platform-specific build or environment issues
3. **WebUI History** — Chinese-speaking users report chat history disappearing after page close (#2310), a UX regression affecting session continuity
4. **Provider Compatibility** — Ollama integration broken for qwen3.5/gemma4 (#2583, closed), indicating ongoing reliability issues with local model providers

### Satisfaction Signals

- Active contribution momentum (8 open PRs, multiple concurrent features)
- Security hardening PRs show maintainer responsiveness to community reports
- CLA clarification (#2506 closed as invalid) resolves contributor friction

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| # | Issue | Age | Priority | Gap |
|---|---|---|---|---|
| #292 | Android Device Automation | ~2 months | High | Roadmap spec needs review/approval |
| #2171 | OpenAI Responses API migration | ~3 weeks | Medium-High | Needs decision on timeline |
| #2321 | Provider-Level Model Configuration | ~2 weeks | Medium | Design review pending |
| #2261 | Zalo Chat provider | ~2 weeks | Medium | Contributor awaiting feedback |

### Stale PRs

| PR | Age | Concern |
|---|---|---|
| #2313 | ~2 weeks | Large security/multi-user PR — needs review scope assessment |
| #2256 | ~2.5 weeks | Security hardening PR — should be prioritized for merge |

---

*Digest generated for 2026-04-20 | Data source: github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-20

## 1. Today's Overview

IronClaw continues to experience high development velocity with **50 PRs updated and 10 issues processed in the last 24 hours**. No new releases shipped today, though the project is actively advancing multiple major initiatives in parallel: the design system visual language rollout (#2689, #2695), Engine v2 sandbox completion tracking (#2667), and a built-in browser tool with CDP support (#2360). The staging promotion pipeline is running smoothly with automated CI bots processing multiple batch promotions. Overall project health remains strong with good issue turnaround—half of the updated issues were closed today—though one high-risk WASM security bug (#2676) was newly identified and warrants prompt attention.

---

## 2. Releases

**None.** No new releases were published today.

---

## 3. Project Progress

### Merged/Closed PRs (6 of 19 closed today)

| PR | Title | Impact |
|---|---|---|
| [#2549](https://github.com/nearai/ironclaw/pull/2549) | feat(engine): add mission_get action for retrieving mission results | Adds `mission_get` action so LLMs can retrieve mission results/status; maps v1 `routine_history` alias |
| [#2694](https://github.com/nearai/ironclaw/pull/2694) | docs(engine): clarify ENGINE_V2 opt-in startup | Documents that Engine v2 requires `ENGINE_V2=true`; adds startup examples to README and `.env.example` |
| [#1019](https://github.com/nearai/ironclaw/pull/1019) | feat(agent): add Cognitive Guardian for proactive memory discipline | Adds `CognitiveGuardian` module for behavioral nudges before context pressure forces compaction |
| [#936](https://github.com/nearai/ironclaw/pull/936) | Add local open_file workflow with persistent/revocable approvals | New `open_file` tool with local text preview support |
| [#1540](https://github.com/nearai/ironclaw/pull/1540) | fix(slack): remember thread participation across replies | Fixes Slack thread replies to work without fresh @mention after bot joins |
| [#2576](https://github.com/nearai/ironclaw/pull/2576) | fix(ci): target promotion PR for Claude review comments | Corrects Claude Code Review to comment on promotion PRs instead of merged source PRs |

### Active Feature Development

- **Design System Rollout** (#2689, #2695): First visible design system tokens using Defuse OmniSwap palette; Phase A complete. Visual language now being applied to web gateway UI with semantic type classes, collapsible reasoning cards, and compact tool lines.
- **TUI Dashboard Improvements** (#2343): 2-column grid dashboard panels, expandable modals, plan mode checklist, codeblock renderer, and theme improvements.
- **Aliyun Coding Plan Support** (#1446): Dedicated `AliyunProvider` for BaiLian; uses HTTP/1.1 for compatibility; waiting on review.
- **Slack Socket Mode** (#1549): WebSocket-based bridge for NAT-friendly connectivity; zero WASM core changes required.
- **Engine v2 Sandbox** (#2693): Slimmed default Cargo feature profile; TUI now opt-in via `--features local-tui`.
- **Gateway Attachments & E2E Stabilization** (#2385): Image/PDF/text/slide upload flows; persistence to `.ironclaw/attachments/...`

---

## 4. Community Hot Topics

### Most Active Issues

1. **[#2360](https://github.com/nearai/ironclaw/issues/2360)** — feat(browser): add built-in browser tool with chromiumoxide CDP and AX-tree element refs
   - **Status:** Open | 👍 0 | Comments: 2
   - **Scope:** enhancement, tool/builtin
   - **Context:** Multi-part epic with dependencies on browser service (#2357), profile store (#2358), identity model (#2359). Users need JavaScript-rendered page interaction, form fills, button clicks, and dynamic content reading. Currently blocked pending parent issue #2355.

2. **[#2599](https://github.com/nearai/ironclaw/issues/2599)** — Epic: Enforce gateway feature boundaries, crate guardrails, and crate-owned E2E
   - **Status:** Open | 👍 1 | Comments: 2
   - **Scope:** architecture, ci
   - **Context:** Intentionally staged refactor to create strict ownership and import boundaries inside the web gateway/frontend crate, with CI guardrails and crate-owned E2E paths.

### Most Active PRs

1. **[#2695](https://github.com/nearai/ironclaw/pull/2695)** — feat(gateway): design system visual language
   - **Size:** XL | Risk: medium
   - **Scope:** channel/web, ci, docs
   - **Context:** Builds on #2683 refactoring; adds semantic type classes, reasoning cards, assistant avatars, compact tool lines with status dots, approval UI.

2. **[#1446](https://github.com/nearai/ironclaw/pull/1446)** — feat: add Aliyun Coding Plan support
   - **Size:** XL | Risk: medium
   - **Scope:** llm, agent, channel, and 14 others
   - **Context:** Large multi-scope PR adding `AliyunProvider`, DashScope compatibility, HTTP/1.1, `AliyunConfig`. Requires careful review.

**Underlying Needs Signal:** The community is strongly invested in visual polish (design system), extensibility (Aliyun, Slack Socket Mode), and the browser tool for practical web automation. The gateway refactoring epic suggests architectural tech debt is being systematically addressed.

---

## 5. Bugs & Stability

### High Risk

| Issue | Title | Status |
|---|---|---|
| [#2676](https://github.com/nearai/ironclaw/issues/2676) | WASM URL leak scan runs on post-injection URL; missed on both channel and tool paths | **Open** |
| **Details:** Follow-up from #1377 review thread. Leak scan ordering was fixed for headers in #791 and #1377, but the URL scan runs on post-injection URL rather than raw WASM-provided value. Affects both channel and tool WASM paths. No fix PR exists yet. |

### Medium Risk

| Issue | Title | Status | Fix PR |
|---|---|---|---|
| [#2624](https://github.com/nearai/ironclaw/issues/2624) | test(e2e): Telegram end-to-end activation still fails with bot token validation 401 | Open | — |
| [#2668](https://github.com/nearai/ironclaw/pull/2668) | fix(llm): classify negative max_tokens overflow as context error | **Open** | — |
| **Details:** Maps NEAR AI/OpenAI-compatible 400s containing `max_tokens must be at least 1, got -...` to `ContextLengthExceeded`. |

### Low Risk (Resolved Today)

| Issue | Title | Status |
|---|---|---|
| [#1947](https://github.com/nearai/ironclaw/issues/1947) | bug(cli): MCP test-server tool description truncation panics on multi-byte UTF-8 | **Closed** |
| [#1840](https://github.com/nearai/ironclaw/issues/1840) | bug(cli): --cli-only still starts webhook server and ignores HTTP_HOST/HTTP_PORT | **Closed** |

**Stability Assessment:** Telegram E2E regressions persist despite prior fixes—may indicate test flakiness or a deeper auth issue. The WASM URL leak (#2676) is a security concern requiring priority attention. The max_tokens fix (#2668) is open and should be reviewed for merge.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features

| Issue | Title | Priority Indicators |
|---|---|---|
| [#2360](https://github.com/nearai/ironclaw/issues/2360) | Built-in browser tool with CDP | Multi-dependency epic, scoped for tool/builtin |
| [#2600](https://github.com/nearai/ironclaw/issues/2600) | Feature Proposal: CLI/TUI utilities for managing secrets | Author reports struggles with authentication; not well documented |
| [#2667](https://github.com/nearai/ironclaw/issues/2667) | Engine v2 full sandboxing tracking | Tracks remaining work after Phases 1–7 (shipped in #2211) |

### Recently Completed (Closed Issues)

| Issue | Title | User Impact |
|---|---|---|
| [#1350](https://github.com/nearai/ironclaw/issues/1350) | Support hot-reload of LLM provider without restart | High UX improvement; change now takes effect immediately |

**Roadmap Prediction:**
- **Near-term (next 1-2 releases):** max_tokens overflow fix (#2668), WASM URL leak fix (#2676), Telegram E2E stabilization (#2624)
- **Mid-term:** Browser tool implementation (blocked on #2357-#2359), Design system full rollout (#2689)
- **Long-term:** Gateway architectural refactoring (#2599), Engine v2 full sandboxing (#2667)

---

## 7. User Feedback Summary

### Pain Points Identified

1. **Secrets Management Confusion** (#2600)
   - *User quote:* "It's not well documented how users are intended to manage their secrets"
   - Authentication patterns drift over time; documentation gap creating friction for new users

2. **LLM Provider Change Requires Restart** (now fixed via #1350)
   - Users expected provider/model switch via Settings UI to take effect immediately
   - Was persisted to DB but not applied until process restart

3. **Telegram Integration Instability** (#2624)
   - E2E tests repeatedly fail with 401 bot token validation
   - Indicates potential auth flow regression or test infrastructure issue

4. **UTF-8 in MCP Tool Descriptions** (fixed via #1947)
   - Multi-byte UTF-8 characters caused CLI panic when description exceeded 57 bytes
   - Affected Chinese, Japanese, emoji characters

### Satisfaction Signals

- Engine v2 opt-in documentation (#2694) is being clarified—positive response to clearer onboarding
- Cognitive Guardian (#1019) merged—positive reception to proactive memory discipline features
- Design system rollout (#2689, #2695) received visible community engagement

---

## 8. Backlog Watch

### Issues Awaiting Maintainer Attention

| Issue | Title | Age | Status | Notes |
|---|---|---|---|---|
| [#2360](https://github.com/nearai/ironclaw/issues/2360) | Built-in browser tool | 8 days | Open | Blocked on parent #2355; needs triage on dependency ordering |
| [#2599](https://github.com/nearai/ironclaw/issues/2599) | Gateway feature boundaries epic | 3 days | Open | Intentional staged epic; needs initial scoping milestone |
| [#2667](https://github.com/nearai/ironclaw/issues/2667) | Engine v2 full sandboxing | 1 day | Open | New tracking issue; needs initial work breakdown |
| [#2600](https://github.com/nearai/ironclaw/issues/2600) | CLI/TUI secrets management | 3 days | Open | Documentation gap; needs acknowledgment and triage |

### PRs Needing Review

| PR | Title | Size | Age | Risk |
|---|---|---|---|---|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Aliyun Coding Plan support | XL | 31 days | medium |
| [#1549](https://github.com/nearai/ironclaw/pull/1549) | Slack Socket Mode | XL | 30 days | medium |
| [#2343](https://github.com/nearai/ironclaw/pull/2343) | TUI dashboard improvements | XL | 9 days | medium |

**Attention Needed:** The Aliyun (#1446) and Slack Socket Mode (#1549) PRs have been open ~30 days and are substantial multi-scope changes. Early review feedback would prevent merge conflicts and scope creep. The Telegram E2E issue (#2624) has zero comments—maintainer engagement needed to diagnose the persistent 401 failures.

---

*Generated: 2026-04-20 | Data snapshot: last 24 hours | Source: [nearai/ironclaw](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-04-20

---

## 1. Today's Overview

CoPaw/QwenPaw shows **high community activity** on 2026-04-20, with 21 issues and 14 pull requests updated in the last 24 hours. **No new releases** shipped today, and no PRs were merged, indicating the team is actively reviewing and building toward a future release. Multiple independent bugs were reported across channels (Console, Telegram, cron), while several PRs address both UX enhancements (per-agent models, typing indicators, language-switching skills) and stability fixes (YAML parsing crash, Unicode surrogate handling). The bug volume is notable — at least 6 distinct crash/malfunction patterns were reported — but the PR queue shows strong contributor response with fixes already in review for the most severe issues.

---

## 2. Releases

**No new releases** were published today. The project remains on the latest release (assumed v1.1.x based on issue references).

---

## 3. Project Progress

No PRs were merged today. The following 14 PRs entered review, advancing across multiple component areas:

| PR | Author | Description | Addresses |
|---|---|---|---|
| [#3585](https://github.com/agentscope-ai/QwenPaw/pull/3585) | pxdawn | Keep Telegram typing indicator active during tool execution | #1874 |
| [#3558](https://github.com/agentscope-ai/QwenPaw/pull/3558) | Leirunlin | Support builtin skill language switch (EN/ZH split) | — |
| [#3584](https://github.com/agentscope-ai/QwenPaw/pull/3584) | seoeaa | Add multimodal probing for OpenRouter provider | — |
| [#3583](https://github.com/agentscope-ai/QwenPaw/pull/3583) | Leirunlin | Add try-except for `require_bins` error handling | #3568 |
| [#3579](https://github.com/agentscope-ai/QwenPaw/pull/3579) | seoeaa | Per-agent LLM model assignment in Settings UI | — |
| [#3575](https://github.com/agentscope-ai/QwenPaw/pull/3575) | vvv214 | Reload running agents after global LLM updates | — |
| [#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) | tqjason | Replace Web Speech API with Whisper transcription for voice input | — |
| [#3559](https://github.com/agentscope-ai/QwenPaw/pull/3559) | hanson-hex | Vitest setup + unit/component tests for Console | — |
| [#3556](https://github.com/agentscope-ai/QwenPaw/pull/3556) | shadowabi | Add `browser_args` and `executable_path` parameters for browser_use | — |
| [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) | Prince-liu | Fix SSE crash on malformed Unicode surrogate in Console | #3552 |
| [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) | vvv214 | Scope-first effective model + runtime routing refinements | #3452 |
| [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) | vvv214 | Add LLM routing UI (settings + chat selector) | — |
| [#2432](https://github.com/agentscope-ai/QwenPaw/pull/2432) | seoeaa | Display sender identity and timestamps in conversation history | — |
| [#3565](https://github.com/agentscope-ai/QwenPaw/pull/3565) | zhenai1314521 | Add AgentMemory as `memory_manager_backend` option | — |

**Key thematic threads:**
- **Telegram UX** — #3585 directly addresses a long-standing complaint about disappearing typing status during tool calls.
- **Internationalization** — #3558 restructured builtin skills into `skill-en/` and `skill-zh/` directories, a meaningful step for Chinese-speaking users.
- **Model routing** — Both #3452 and #3550 are advancing the LLM routing infrastructure, with per-agent model override now visible in the Settings UI (#3579).
- **Voice input** — #3574 replaces the browser-native Web Speech API with Whisper, improving cross-browser compatibility.

---

## 4. Community Hot Topics

The most active discussions by comment volume:

| Issue | Title | Comments | Type | Link |
|---|---|---|---|---|
| #3568 | [BUG] Skill with invalid YAML causes QwenPaw to crash completely | 3 | Bug | [#3568](https://github.com/agentscope-ai/QwenPaw/issues/3568) |
| #3573 | [Bug] cron 任务 channel=weixin 执行时报 KeyError | 3 | Bug | [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) |
| #3560 | Custom local llama.cpp Backend: Tool Call Stream Parsing Error | 3 | Bug | [#3560](https://github.com/agentscope-ai/QwenPaw/issues/3560) |
| #3552 | Console channel crashes on malformed Unicode surrogate during SSE serialization | 3 | Bug | [#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552) |
| #1874 | Telegram 频道在工具调用期间应保持"正在输入"状态 | 2 | Enhancement | [#1874](https://github.com/agentscope-ai/QwenPaw/issues/1874) |
| #3563 | 希望可以查看当前上下文的用量情况 | 2 | Enhancement | [#3563](https://github.com/agentscope-ai/QwenPaw/issues/3563) |

**Underlying needs revealed:**
- **Reliability** — Users expect skills and channels (especially WeChat/Weixin) to fail gracefully rather than crash the application.
- **Transparency** — Token usage visibility (#3563) is a recurring ask; users want to make informed decisions about context compaction.
- **UX polish** — Typing indicators, sender timestamps (#2432), and code block collapsing (#3572) all signal demand for a more polished conversational UX.
- **Windows/International users** — Full-width punctuation failures (#3580/#3581) and fonts.googleapis.com accessibility issues (#3576) highlight friction for non-ASCII environments.

---

## 5. Bugs & Stability

**Severity-ranked bug reports (21 issues; ~15 are bugs):**

| Severity | Issue | Title | Fix PR? |
|---|---|---|---|
| 🔴 Critical | [#3568](https://github.com/agentscope-ai/QwenPaw/issues/3568) | Skill with invalid YAML causes **complete crash** — QwenPaw becomes unresponsive to ALL messages | [#3583](https://github.com/agentscope-ai/QwenPaw/pull/3583) filed |
| 🔴 Critical | [#3578](https://github.com/agentscope-ai/QwenPaw/issues/3578) | QwenPaw fails to run, displays blank screen | — |
| 🔴 Critical | [#3582](https://github.com/agentscope-ai/QwenPaw/issues/3582) | Localhost auth bypass broken — 401 error on 127.0.0.1 despite documentation | — |
| 🟠 High | [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) | cron task with `channel=weixin` throws `KeyError` | — |
| 🟠 High | [#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552) | Console channel crashes on malformed Unicode surrogate during SSE serialization | [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) filed |
| 🟠 High | [#3581](https://github.com/agentscope-ai/QwenPaw/issues/3581) | `send_file_to_user` fails with `ValueError` on Windows when file name contains full-width punctuation | — |
| 🟡 Medium | [#3566](https://github.com/agentscope-ai/QwenPaw/issues/3566) | `view_image` tool enabled but not registered in agent's available tools list | — |
| 🟡 Medium | [#3550](https://github.com/agentscope-ai/QwenPaw/issues/3550) (in context of routing) | LLM routing not honored at runtime for active scope | [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) in review |

**Stability assessment:** The YAML skill crash (#3568) and blank screen (#3578) are the most concerning — both prevent any productive use. The fact that #3583 already addresses #3568 is a positive signal. The Unicode surrogate issue (#3552) has a fix in #3553. The KeyError on WeChat cron tasks (#3573) and Windows file path issues (#3581) affect specific workflows but appear reproducible and isolated.

---

## 6. Feature Requests & Roadmap Signals

Based on issue volume and engagement, the following features show strong user demand:

| Request | Issue | Description | Likelihood of Inclusion |
|---|---|---|---|
| **Per-agent model assignment** | [#3579](https://github.com/agentscope-ai/QwenPaw/pull/3579) (PR already open) | Assign specific LLM per agent via Settings UI | ✅ High — PR in review |
| **LLM routing UI** | [#3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) (PR already open) | Settings + chat selector for Local/Cloud routing | ✅ High — PR in review |
| **Telegram typing indicator** | [#3585](https://github.com/agentscope-ai/QwenPaw/pull/3585) (PR already open) | Keep "typing..." active during tool execution | ✅ High — PR in review |
| **Context token usage display** | [#3563](https://github.com/agentscope-ai/QwenPaw/issues/3563) | Show current conversation token count for compaction decisions | 🟡 Medium |
| **Code block collapse** | [#3572](https://github.com/agentscope-ai/QwenPaw/issues/3572) | Collapsible code blocks in Console output | 🟡 Medium |
| **All Chats pagination** | [#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570) | Paginate large chat lists to reduce loading time | 🟡 Medium |
| **Direct link to conversation** | [#3378](https://github.com/agentscope-ai/QwenPaw/issues/3378) | One-click navigation from session list to chat | 🟡 Medium |
| **Cron task execution history** | [#3569](https://github.com/agentscope-ai/QwenPaw/issues/3569) | View execution logs and edit cron parameters | 🟢 Low-Priority |
| **Hide top bar** | [#3571](https://github.com/agentscope-ai/QwenPaw/issues/3571) | Configurable UI layout — collapse top bar | 🟢 Low-Priority |
| **AgentMemory backend** | [#3565](https://github.com/agentscope-ai/QwenPaw/pull/3565) (PR already open) | Vector + BM25 + knowledge graph memory manager | ✅ In review |

**Roadmap signal:** The most advanced features in the pipeline are the per-agent model assignment + LLM routing UI (both with PRs in review) and the bilingual skill support (#3558). The routing and model assignment work suggests the team is prioritizing multi-model and agent-specific configuration — possibly in preparation for v1.2.

---

## 7. User Feedback Summary

**Pain points reported:**
- **Crash reliability** — Invalid YAML in skills crashes the entire application (#3568); blank screen on launch (#3578) leaves users stranded.
- **Windows path encoding** — Full-width punctuation (e.g., `：`, `！`) in file names causes `send_file_to_user` to throw `ValueError` on Windows (#3581).
- **Channel fragmentation** — WeChat cron tasks fail with `KeyError` (#3573); Telegram typing indicators disappear during tool execution (#1874); local localhost auth bypass fails (#3582).
- **Performance** — Large chat lists load slowly without pagination (#3570); deep-link navigation to conversations is cumbersome (#3378).
- **Accessibility** — Fonts from `fonts.googleapis.com` are inaccessible in China (#3576), creating a degraded experience for Chinese users.
- **Dark mode** — Sidebar text overlap in dark mode (#3546) is a visual regression on a widely-used setting.

**Positive signals:**
- Users are actively contributing fixes (multiple first-time contributors: #3574, #3553, #3565).
- The project is being extended into new modalities (Whisper voice transcription #3574, AgentMemory triple-retrieval #3565).
- Internationalization is improving (#3558 EN/ZH skill split).

---

## 8. Backlog Watch

Issues or PRs that are important but have not received recent activity or maintainer attention:

| Item | Title | Age | Status | Concern |
|---|---|---|---|---|
| [#3378](https://github.com/agentscope-ai/QwenPaw/issues/3378) | Direct link from session list to conversation | ~6 days old, 2 comments | Open | UX regression — workflow is cumbersome |
| [#3563](https://github.com/agentscope-ai/QwenPaw/issues/3563) | View context token usage | 2 days old, 2 comments | Open | Recurring ask; users need usage transparency |
| [#3566](https://github.com/agentscope-ai/QwenPaw/issues/3566) | `view_image` tool enabled but not registered | 1 day old, 1 comment | Open | Tool registration bug — no workaround |
| [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) | cron + WeChat KeyError | 1 day old, 3 comments | Open | Channel-specific regression affecting scheduled tasks |
| [#3569](https://github.com/agentscope-ai/QwenPaw/issues/3569) | Cron task execution history & editing | 1 day old, 1 comment | Open | Enhances observability of scheduled tasks |
| [#3565](https://github.com/agentscope-ai/QwenPaw/pull/3565) | AgentMemory as memory_manager_backend | PR open | Open | Needs maintainer review for merge |
| [#2432](https://github.com/agentscope-ai/QwenPaw/pull/2432) | Sender identity and timestamps in chat | ~24 days old | Open | Long-standing UX enhancement; may need rebase |

**Items needing maintainer attention most urgently:**
1. **#3568** (YAML crash) — Has fix PR #3583; needs expedited review/merge given critical severity.
2. **#3573** (WeChat cron KeyError) — Blocking scheduled task functionality for WeChat users.
3. **#3578** (blank screen on launch) — No fix PR filed; likely needs root cause investigation.
4. **#3582** (localhost auth bypass broken) — Security-sensitive; if auth bypass is documented but broken, either the docs or the code needs correction.

---

*Digest generated for CoPaw/QwenPaw — 2026-04-20. Data sourced from GitHub activity in the preceding 24

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-20

## Today's Overview

ZeroClaw is experiencing high activity with **36 issues and 29 PRs updated in the last 24 hours**, indicating strong development momentum. The project just shipped **v0.7.3**, its largest structural overhaul to date, including a complete Cargo workspace split and new config schema with live migration. Community engagement is robust with multiple high-impact bug reports and feature proposals actively under discussion. The maintainer team is actively merging fixes addressing Docker sandbox, runtime, and security concerns while simultaneously advancing infrastructure improvements across CI/CD and documentation.

---

## Releases

### v0.7.3 — Major Structural Overhaul
**Released:** 2026-04-19 | [Release Notes](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.3) | [PR #5893](https://github.com/zeroclaw-labs/zeroclaw/pull/5893)

**Key Changes Since v0.6.9:**
- **Cargo Workspace Split**: Entire codebase reorganized into a proper workspace of focused crates for improved modularity and build times
- **New Config Schema**: Live migration support shipped for configuration format changes
- **Deployment Enhancements**: OpenShift/Kubernetes deployment manifests added ([PR #5880](https://github.com/zeroclaw-labs/zeroclaw/pull/5880))
- **Bug Fixes**: Preserved streamed reasoning content for tool replay ([PR #5606](https://github.com/zeroclaw-labs/zeroclaw/pull/5606)), fixed workspace crate manifest copying in Docker build ([PR #5879](https://github.com/zeroclaw-labs/zeroclaw/pull/5879))

**Migration Notes**: Users upgrading from v0.6.9 should run the daemon once to trigger automatic config migration. Docker users should rebuild images to include all workspace crate manifests.

### v0.7.3-beta.1051 & v0.7.1-beta.1049
Beta releases available for testing upcoming changes. No changelog provided.

---

## Project Progress

### Merged/Closed PRs (9 total)

| PR | Title | Impact |
|----|-------|--------|
| [#5893](https://github.com/zeroclaw-labs/zeroclaw/pull/5893) | chore: bump version to 0.7.3 and update release changelog | Release preparation |
| [#5901](https://github.com/zeroclaw-labs/zeroclaw/pull/5901) | BitChat BLE mesh + WiFi Direct offline agent communication | New channel support |
| [#5898](https://github.com/zeroclaw-labs/zeroclaw/pull/5898) | Python skills quickstart (closes #5722) | Documentation |
| [#5894](https://github.com/zeroclaw-labs/zeroclaw/pull/5894) | Replace RELEASE_TOKEN with GITHUB_TOKEN | Security/CI |
| [#5606](https://github.com/zeroclaw-labs/zeroclaw/pull/5606) | Preserve streamed reasoning content for tool replay | Bug fix (Kimi compatibility) |
| [#5879](https://github.com/zeroclaw-labs/zeroclaw/pull/5879) | Copy all workspace crate manifests for Docker build | Build fix |

### Active PRs Advancing Features (20 open)

**Runtime & Security:**
- [#5906](https://github.com/zeroclaw-labs/zeroclaw/pull/5906) — Detect memcg availability at daemon startup (prevents silent misconfiguration on Raspberry Pi OS)
- [#5904](https://github.com/zeroclaw-labs/zeroclaw/pull/5904) — Respect `runtime.kind = "native"` in sandbox auto-detection
- [#5905](https://github.com/zeroclaw-labs/zeroclaw/pull/5905) — Add workspace bind-mount support to DockerSandbox
- [#5853](https://github.com/zeroclaw-labs/zeroclaw/pull/5853) — Self-heal orphaned tool_result blocks on load + compact

**Observability & Telemetry:**
- [#5785](https://github.com/zeroclaw-labs/zeroclaw/pull/5785) — Emit observer and runtime trace events across agent turn lifecycle (size: L, risk: high)

**Channels & Providers:**
- [#5902](https://github.com/zeroclaw-labs/zeroclaw/pull/5902) — Mattermost WebSocket listener with multi-channel support
- [#5691](https://github.com/zeroclaw-labs/zeroclaw/pull/5691) — Update Telegram bot commands
- [#5623](https://github.com/zeroclaw-labs/zeroclaw/pull/5623) — OpenRouter extra_body passthrough for generic request params

**Memory & Agent:**
- [#5631](https://github.com/zeroclaw-labs/zeroclaw/pull/5631) — Add is_user_autosave_key detector for per-turn user message keys
- [#5632](https://github.com/zeroclaw-labs/zeroclaw/pull/5632) — Skip user autosave keys in all memory context paths (risk: high)

---

## Community Hot Topics

### Most Active Issues by Discussion

1. **[#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) — Web Dashboard Not Available** (17 comments, S1 — CLOSED)
   - **Issue**: Users unable to access web UI or Tauri desktop app, receiving build instructions
   - **Status**: Closed, appears resolved in v0.7.3

2. **[#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) — runtime.kind = "native" Bypass Docker** (10 comments, High Risk)
   - **Reporter**: Jason Perlow (InvestorClaw developer)
   - **Core Problem**: `runtime.kind = "native"` does not bypass Docker for shell tool execution, blocking Python agentic skills requiring host dependencies (pandas, requests)
   - **Related PRs**: [#5904](https://github.com/zeroclaw-labs/zeroclaw/pull/5904), [#5905](https://github.com/zeroclaw-labs/zeroclaw/pull/5905) both filed same day addressing this

3. **[#5720](https://github.com/zeroclaw-labs/zeroclaw/issues/5720) — PYTHONPATH Inline Env Var Syntax Broken** (6 comments)
   - **Context**: Command inline environment variable prefix (`PYTHONPATH=val`) fails in shell tool
   - **Impact**: Blocks Python skill development workflow

4. **[#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) — Telegram Voice Message Transcription** (6 comments)
   - **Request**: Add voice message support to ZeroClaw's Telegram channel (OpenClaw already has this)
   - **Sentiment**: Feature parity with TypeScript counterpart requested

5. **[#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) — Default Shell Sandbox Blocks Python Skills** (5 comments)
   - **Reporter**: Jason Perlow
   - **Documented Solution**: PR [#5898](https://github.com/zeroclaw-labs/zeroclaw/pull/5898) shipped Python skills quickstart

6. **[#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) — Multi-Agent Routing** (4 comments, 7 👍)
   - **Status**: Long-standing feature request (stale) with highest reaction count
   - **RFC Active**: [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) posted 2026-04-19 for 7-day discussion

---

## Bugs & Stability

### Critical/High Severity Bugs

| Issue | Severity | Description | Fix PR |
|-------|----------|-------------|--------|
| [#5813](https://github.com/zeroclaw-labs/zeroclaw/issues/5813) | S1 | Compaction orphans tool_result blocks causing Anthropic API 400 errors (Signal) | [#5853](https://github.com/zeroclaw-labs/zeroclaw/pull/5853) open |
| [#5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415) | S0 | Context spillage from chat to scheduled tasks | None |
| [#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) | S0 | Feishu responds when mention_only enabled | None |
| [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | S1 | MCP stdio child processes leak on heartbeat (1 orphan per tick) | None |

### Medium Severity / Degraded Behavior

| Issue | Description | Status |
|-------|-------------|--------|
| [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | Memory over-emphasis in system prompt (affects cron jobs) | Open |
| [#5897](https://github.com/zeroclaw-labs/zeroclaw/issues/5897) | Telegram photo sends image markers to non-vision provider before capability guard | Open |
| [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) | RUSTSEC advisories (4) from rumqttc v0.25.1 dependency | Open |
| [#5795](https://github.com/zeroclaw-labs/zeroclaw/issues/5795) | XML tool_result tags leak into channel responses | Closed |

### Dependency Security Alert
**[#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869)**: `rumqttc v0.25.1` pins vulnerable `rustls-webpki` and `rustls-pemfile` versions, triggering RUSTSEC-0049, 0098, 0099, and 0134. Update to newer rumqttc version recommended.

---

## Feature Requests & Roadmap Signals

### High-Priority Feature Requests

| Issue | Feature | Signals | Likelihood |
|-------|---------|---------|------------|
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | OAuth support for Ollama Cloud, Zhipu, Kimi, MiniMax | 1 👍, 4 comments | High |
| [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | Telegram voice transcription | 6 comments | Medium-High |
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | Multi-Agent Routing | 7 👍, RFC active | RFC phase |
| [#5145](https://github.com/zeroclaw-labs/zeroclaw/issues/5145) | `send_channel_message` tool for direct outbound delivery | 1 👍, in-progress | Medium |

### Infrastructure/CI Enhancements

Multiple CI-focused issues filed by **@WareWolf-MoonWall** targeting v0.7.2 and v0.7.3:

| Issue | Enhancement | Target |
|-------|-------------|--------|
| [#5872](https://github.com/zeroclaw-labs/zeroclaw/issues/5872) | Update action SHA pins for Node.js 24 compatibility | v0.7.3 |
| [#5876](https://github.com/zeroclaw-labs/zeroclaw/issues/5876) | CI action-pinning enforcement check | v0.7.2 |
| [#5875](https://github.com/zeroclaw-labs/zeroclaw/issues/5875) | Daily advisory scan workflow | v0.7.2 |
| [#5871](https://github.com/zeroclaw-labs/zeroclaw/issues/5871) | Structured Release Pipeline | v0.7.3 |
| [#5908](https://github.com/zeroclaw-labs/zeroclaw/issues/5908) | GitHub Actions CI/CD for Debian container | Open |

### Developer Experience

| Issue | Request | Status |
|-------|---------|--------|
| [#4352](https://github.com/zeroclaw-labs/zeroclaw/issues/4352) | GitHub integration tool | Help wanted |
| [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | LSP support for code generation | Open |
| [#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) | Raspberry Pi deployment guide | Help wanted |
| [#5818](https://github.com/zeroclaw-labs/zeroclaw/issues/5818) | Changelog generation prompt | Open |

---

## User Feedback Summary

### Pain Points Identified

**1. Docker Sandbox Friction (Multiple related issues)**
Users developing Python-based agentic skills encounter significant friction:
- Docker sandbox doesn't mount workspace directories ([#5905](https://github.com/zeroclaw-labs/zeroclaw/pull/5905))
- `runtime.kind = "native"` ignored in sandbox detection ([#5904](https://github.com/zeroclaw-labs/zeroclaw/pull/5904))
- Default shell sandbox blocks realistic Python patterns ([#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722))
- **Use Case**: Jason Perlow developing InvestorClaw (FINOS CDM 5.x portfolio analysis) needs pandas, requests, and other Python packages unavailable in containerized environment

**2. Memory System Behavior**
- System prompt over-emphasizes memory retrieval, especially in scheduled jobs ([#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844))
- Per-turn user message auto-saves causing exponential context bloat ([#5631](https://github.com/zeroclaw-labs/zeroclaw/pull/5631), [#5632](https://github.com/zeroclaw-labs/zeroclaw/pull/5632))

**3. Raspberry Pi Compatibility**
- Docker memory limits silently ignored without memcg kernel support ([#5895](https://github.com/zeroclaw-labs/zeroclaw/issues/5895))
- Build OOM-kills on Pi 5 with default fat LTO profile ([#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704))

### Positive Signals

- High engagement on Multi-Agent Routing feature (7 👍, active RFC)
- Python skills documentation contributed by community ([#5898](https://github.com/zeroclaw-labs/zeroclaw/pull/5898))
- New BitChat BLE mesh + WiFi Direct communication merged ([#5901](https://github.com/zeroclaw-labs/zeroclaw/pull/5901))
- Mattermost WebSocket support in progress ([#5902](https://github.com/zeroclaw-labs/zeroclaw/pull/5902))

---

## Backlog Watch

### Long-Unanswered Important Issues (No Maintainer Response >7 days)

| Issue | Age | Topic | Priority |
|-------|-----|

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/manelsen/agents-radar).*