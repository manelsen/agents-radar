# AI Agents Ecosystem Digest 2026-04-16

> Issues: 8 | PRs: 8 | Projects covered: 7 | Generated: 2026-04-16 02:05 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Primary Project Deep Dive

# NullClaw Project Digest — 2026-04-16

---

## 1. Today's Overview

NullClaw shows **healthy activity** on 2026-04-16, with 8 issues and 8 PRs updated in the last 24 hours. All issues remain open, indicating ongoing triage; however, **3 PRs reached closed/merged state**, signaling steady progress on feature delivery. The project is addressing cross-cutting concerns—security hardening in gateway rate-limiting, UTF-8 compaction correctness, and documentation currency. No new releases were published today, but the Zig 0.16 migration PR (#823) is under active review, suggesting a near-term version bump.

---

## 2. Releases

**None.**  
No new releases published on 2026-04-16. The project last shipped changes prior to this date; the community awaits the next release cycle.

---

## 3. Project Progress

**Merged/Closed PRs (3):**

| # | Title | Author | Key Changes |
|---|-------|--------|-------------|
| [#369](https://github.com/nullclaw/nullclaw/pull/369) | feat(signal): support Note to Self via sync envelope | jmylchreest | Added `parseSyncNoteToSelf()`; enables Signal self-messages; 4 new tests |
| [#377](https://github.com/nullclaw/nullclaw/pull/377) | feat(shell): sandbox-validated path env vars | jmylchreest | New `tools.path_env_vars` config; path components validated against sandbox rules |
| [#378](https://github.com/nullclaw/nullclaw/pull/378) | fix(security): scope git -C + Signal Note to Self | jmylchreest | Tightens `-C` allowlist; prevents misclassification as dangerous `-c` |

**Open PRs advancing features (5):**

- **#783** — Cron subagent engine: DB-backed scheduler, history table, per-job TZ offsets, JSON CLI output, operator alerts *(yanggf8)*
- **#823** — Migrate project to Zig 0.16: updated stdlib APIs, refactored compat into `shared`, `fs`, `net` modules *(DonPrus)*
- **#774** — Update outdated stats across all documentation *(telagod)*
- **#789** — Fix gateway bind safety and rate-limit safeguards *(ScottTPfaff)*
- **#824** — Fix UTF-8 truncation in history compaction; consolidated helper to `util.zig` *(wanderingmeow)*

---

## 4. Community Hot Topics

| # | Topic | Author | Comments | 👍 | Category |
|---|-------|--------|----------|----|----------|
| [#812](https://github.com/nullclaw/nullclaw/issues/812) | [bug] http_request — internet search not working | uMendex | 4 | 1 | Bug |
| [#820](https://github.com/nullclaw/nullclaw/issues/820) | [documentation] How to install Zig on Debian? | eabase | 3 | 0 | Documentation |
| [#821](https://github.com/nullclaw/nullclaw/issues/821) | [bug] nullclaw version shows "dev" instead of version | eabase | 2 | 0 | Bug |
| [#800](https://github.com/nullclaw/nullclaw/issues/800) | [bug] Otel broke due to https constraint | lestan | 2 | 1 | Bug |

**Analysis:** The dominant theme is **connectivity and configuration breakage**—users reporting that core networking features (http_request, Otel telemetry) fail under common setups (HTTP-only endpoints, Debian environments). The Zig installation question (#820) signals a **barrier to contribution**; improving onboarding docs would reduce friction. The "dev" version display (#821) undermines trust in builds-from-source—a low-effort fix with high visibility impact.

---

## 5. Bugs & Stability

**High Severity**

- **#800** — Otel broke due to https constraint *(v2026.4.9 regression)*  
  Containers on same Podman network cannot reach `http://otel`; enforced HTTPS breaks local setups.

**Medium Severity**

- **#812** — http_request: internet search capability fails across all examples  
  Cross-project issue spanning Picoclaw/ZeroClaw; likely a config or dependency resolution problem.
- **#827** — `nullclaw channel status` contradicts `doctor` output  
  Inconsistent health reporting undermines diagnostics; may indicate state sync bug.
- **#821** — Version command emits "dev" instead of semver or hash  
  Erodes build credibility; trivial to fix with build-time injection.

**Low Severity**

- **#826** — Gateway fails with Tailscale (`NotImplemented` tunnel error)  
  Integration gap; likely edge-case networking issue.
- **#825** — Support nested Agent skills  
  Request for directory-tree skill organization; currently flat only.

**Note:** No fix PRs exist yet for the above bugs; maintainers should prioritize #800 (regression) and #812 (core feature failure).

---

## 6. Feature Requests & Roadmap Signals

| # | Request | Author | Demand Signals | Viability |
|---|---------|--------|----------------|-----------|
| [#825](https://github.com/nullclaw/nullclaw/issues/825) | Nested Agent skills support | tunnckoCore | 0 👍, 0 comments | High — parallels Claude Code precedent; PR already referenced |
| [#817](https://github.com/nullclaw/nullclaw/issues/817) | WeChat QR code login | DDGRCF | 0 👍, 1 comment | Medium — niche; depends on platform strategy |
| [#826](https://github.com/nullclaw/nullclaw/issues/826) | Tailscale gateway integration | eabase | 0 👍, 0 comments | Medium — networking edge case; `NotImplemented` suggests intentional deferral |
| [#820](https://github.com/nullclaw/nullclaw/issues/820) | Zig install docs for Debian | eabase | 3 comments | High — onboarding blocker; trivial doc addition |

**Prediction:** The next release will likely ship **Zig 0.16 compatibility (#823)** and **cron subagent (#783)**. Nested skills (#825) and Debian Zig docs (#820) are candidates for near-term milestone inclusion given community demand and implementation feasibility.

---

## 7. User Feedback Summary

| Theme | Evidence | Interpretation |
|-------|----------|----------------|
| **Onboarding friction** | #820 (Zig install), #821 (dev version), #826 (gateway/Tailscale) | New contributors and self-hosters hit walls quickly |
| **Regression frustration** | #800 (Otel HTTPS), #812 (http_request) | Recent changes broke existing workflows; users feel destabilized |
| **Feature parity desire** | #817 (WeChat), #825 (nested skills) | Users want NullClaw to match or exceed Claude Code capabilities |
| **Documentation lag** | #774 (outdated stats) | Perennial issue; PR #774 is actively addressing this |

**Overall sentiment:** Neutral-to-concerned. Users appreciate the project's organization (per #812 author) but encounter **integration and configuration roadblocks** that feel disproportionate to NullClaw's maturity level.

---

## 8. Backlog Watch

The following open items warrant maintainer attention due to age, impact, or stalled progress:

| # | Issue | Age | Status | Action Needed |
|---|-------|-----|--------|---------------|
| [#812](https://github.com/nullclaw/nullclaw/issues/812) | http_request broken across examples | 3 days | Open, 4 comments | Investigate; likely a shared dependency or config regression |
| [#800](https://github.com/nullclaw/nullclaw/issues/800) | Otel HTTPS regression | 5 days | Open | Provide opt-out or scoped allowlist for local HTTP endpoints |
| [#823](https://github.com/nullclaw/nullclaw/pull/823) | Zig 0.16 migration | 1 day | Open | Review and merge; blocking next release |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | Cron subagent | 9 days | Open | Significant feature; needs review bandwidth |
| [#825](https://github.com/nullclaw/nullclaw/issues/825) | Nested Agent skills | 1 day | Open | Low complexity; community contributor already signals intent |

**Long-unanswered:** None in the last 24h window exceed 5 days without response; the team is maintaining reasonable turnaround. Priority should shift to **regression bugs (#800, #812)** and **the Zig migration (#823)** to unblock the next release.

---

*End of digest. Data sourced from GitHub/nullclaw/nullclaw activity on 2026-04-16.*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report

## Personal AI Agent Open-Source Landscape — 2026-04-16

---

## 1. Ecosystem Overview

The personal AI agent and AI assistant open-source ecosystem demonstrates **high overall velocity** on 2026-04-16, with all seven projects showing significant activity. The landscape is maturing beyond single-purpose tools toward **multi-channel, multi-provider platforms** with security hardening as a consistent priority. Three projects (Hermes Agent, CoPaw, ZeroClaw) operate at the highest activity tier (50+ issues/PRs daily), while others (NullClaw, PicoClaw) maintain focused development with quality over quantity. Notably, **zero releases** shipped across all projects today, indicating either coordinated release cycles or development bandwidth focused on in-flight features. The ecosystem shows convergence on challenges including memory management, cron/scheduling reliability, cross-channel integration parity, and LLM provider flexibility.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed | Releases (24h) | Health Indicators |
|---------|---------------------|-------------------|-------------------|----------------|-------------------|
| **NullClaw** | 8 | 8 | 3 | None | Stable; Zig 0.16 migration pending |
| **NanoBot** | 15 | 49 | 17 | None | High velocity; 2 critical memory bugs |
| **Hermes Agent** | 50 | 50 | 8 | None | Active security maintenance |
| **PicoClaw** | 7 | 14 | 8 | None | Cron bug unresolved 6 days |
| **IronClaw** | 17 | 50 | 7 | None | P0 security vulnerability open |
| **CoPaw** | 50 | 50 | ~10 | **v1.1.2-beta.1/.2** | Release cadence active |
| **ZeroClaw** | 50 | 50 | 2 | None | 11 S0/S1 bugs open; RFC work active |

**Summary Metrics:**
- **Total activity:** 197 issues + 231 PRs across ecosystem in 24h
- **Release activity:** 1 project (CoPaw) actively publishing beta releases
- **Merged PR ratio:** NanoBot leads with 17/49 (35%); ZeroClaw lowest at 2/50 (4%)

---

## 3. Primary Project Positioning

### Technical Approach Differentiation

| Project | Core Language | Primary Focus | Target User |
|---------|---------------|---------------|-------------|
| **NullClaw** | Zig | Security hardening, gateway architecture | Security-conscious self-hosters |
| **NanoBot** | Python | Memory management, Teams/Feishu integration | Enterprise multi-channel deployments |
| **Hermes Agent** | Python | Security fixes, multi-provider (AWS Bedrock, xAI) | Enterprise with provider diversity needs |
| **PicoClaw** | Go | Parallel processing, MCP integration, LINE SDK | Developers requiring MCP tool interoperability |
| **IronClaw** | Python | Web UI, permission management, Docker | Teams with dashboard-centric workflows |
| **CoPaw** | Python | Local model routing, SIP/voice, session stability | Local LLM enthusiasts, enterprise |
| **ZeroClaw** | Rust | Microkernel architecture, security gates | Performance-critical deployments |

### Community Size Signals

- **Largest engaged communities:** Hermes Agent, CoPaw, ZeroClaw (all at 50/50 issues/PRs daily)
- **Mid-tier active:** NanoBot, IronClaw (15-17 issues daily)
- **Focused contributors:** NullClaw, PicoClaw (7-8 issues daily, higher per-issue engagement)

---

## 4. Shared Technical Focus Areas

### Cross-Project Requirements Emerging

| Focus Area | Projects Affected | Specific Needs |
|------------|-------------------|----------------|
| **Memory Management** | NanoBot, CoPaw, IronClaw | Session corruption fixes (#3278 CoPaw, #3190 NanoBot), MEMORY.md bloat (#1186 NanoBot), unbounded context growth |
| **Cron/Scheduling Reliability** | NullClaw, PicoClaw, NanoBot, CoPaw | Session isolation during cron execution (#3123 NanoBot), cron tool failures (#2468 PicoClaw), timezone offsets (#783 NullClaw) |
| **Multi-Channel Parity** | NanoBot, PicoClaw, Hermes Agent, IronClaw | Inconsistent behavior across Telegram/Slack/Discord/Teams; WeChat support requests (#9756 Hermes) |
| **LLM Provider Flexibility** | All projects | LM Studio support (PicoClaw #28, 64 days), AWS Bedrock native (Hermes #3863, 17 days), local model routing (CoPaw #3443) |
| **Security Hardening** | NullClaw, Hermes Agent, IronClaw, ZeroClaw | Secret scanning bypass (IronClaw #2491 P0), TOTP gates (ZeroClaw #5779), credential leakage fixes |
| **Web UI/Dashboard** | IronClaw, ZeroClaw, CoPaw | Dashboard refresh loops (IronClaw #2410), web dashboard unavailability (ZeroClaw #4866, 19 days), context usage indicators |

### Documentation & Onboarding Gaps

- **Zig installation on Debian** (#820 NullClaw) — onboarding blocker
- **Web dashboard build requirements** (ZeroClaw #4866) — users cannot access UI out-of-box
- **Outdated stats in documentation** (#774 NullClaw) — perennial documentation lag

---

## 5. Differentiation Analysis

### Feature Focus divergence

| Project | Differentiating Features | Strategic Direction |
|---------|-------------------------|---------------------|
| **NullClaw** | Zig language base, `nullclaw channel status` vs `doctor` inconsistency | Systems programming, minimal dependencies |
| **NanoBot** | LM Studio nullable API keys, Teams/Feishu integrations, per-phase model overrides | Enterprise channel coverage, local LLM accessibility |
| **Hermes Agent** | xAI video/image generation, Brave Search, Lightpanda browser engine, AWS Bedrock native | Premium provider ecosystem, enterprise cost optimization |
| **PicoClaw** | Parallel agent loop, delegate tool for cross-agent handoff, MCP slash commands, Sogou search for China | Developer tooling, MCP interoperability, China market |
| **IronClaw** | Param-aware always-allow grants, cross-user workspace grants (DB migration), Playwright e2e testing | Enterprise permission granularity, multi-user collaboration |
| **CoPaw** | SIP voice channel, Agent Statistics page, semantic skill routing, Gunicorn compatibility | Analytics, voice communication, skill organization |
| **ZeroClaw** | Microkernel architecture RFC, Mattermost WebSocket, binary size CI enforcement (20MB hard limit), TOTP shell gating | Performance optimization, architectural reform |

### Target User Segmentation

| Segment | Best-Fit Project(s) |
|---------|---------------------|
| Security-conscious self-hosters | NullClaw, ZeroClaw |
| Enterprise multi-channel (Teams/Slack/Feishu) | NanoBot, Hermes Agent |
| Developers requiring MCP integration | PicoClaw |
| Teams needing web dashboard + permissions | IronClaw |
| Local LLM enthusiasts | CoPaw, NullClaw |
| Performance-critical deployments | ZeroClaw |
| China-market accessibility | PicoClaw (Sogou search), CoPaw |

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|------|----------|------------------|
| **Rapid Iteration** | Hermes Agent, CoPaw, ZeroClaw | 50 issues/PRs daily; high contributor velocity; multiple concurrent RFCs/features |
| **Active Development** | NanoBot, IronClaw | 15-50 activity; steady bug fixes; feature development ongoing |
| **Stable/Quality-Focused** | NullClaw, PicoClaw | 7-14 activity; higher signal-to-noise; fewer but more impactful changes |

### Stabilizing vs. Evolving Projects

| Project | Phase | Evidence |
|---------|-------|----------|
| **CoPaw** | **Release cadence active** | Beta releases v1.1.2-beta.1/.2; feature freeze approaching |
| **NullClaw** | **Pre-release stabilization** | Zig 0.16 migration blocking next release; security hardening phase |
| **ZeroClaw** | **Architectural reform** | RFC-heavy (#5574 microkernel, #5577 governance, #5576 docs, #5579 CI/CD) |
| **PicoClaw** | **Feature completion** | Parallel processing, MCP integration, delegate tools — consolidating Phase 2 |
| **NanoBot** | **Stability-focused** | Critical memory bugs dominating; memory optimizations (#3181) in flight |
| **Hermes Agent** | **Security hardening** | 3 dedicated security PRs; provider expansion ongoing |
| **IronClaw** | **Critical bug resolution** | P0 web UI bugs and P0 security vulnerability require immediate attention |

### Long-Unanswered Issues (>5 days, no maintainer response)

| Project | Issue | Age | Concern |
|---------|-------|-----|---------|
| NanoBot | #2220 ContextVar for task-local routing | ~29 days | Async safety hardening |
| PicoClaw | #28 LM Studio Easy Connect | ~64 days | Provider accessibility |
| Hermes Agent | #3863 AWS Bedrock native support | ~17 days | High-demand feature |
| IronClaw | #548 Add Search to Chat API | ~42 days | Long-standing enhancement |
| ZeroClaw | #4866 Web dashboard unavailable | ~19 days | Blocking UX issue |

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

1. **Memory Management as Critical Infrastructure**
   - Three projects (NanoBot, CoPaw, IronClaw) actively addressing memory corruption, session bloat, and context truncation
   - **Signal:** Users are running long-lived agent sessions; automatic memory management is table-stakes functionality

2. **Provider Diversification & Cost Optimization**
   - AWS Bedrock (Hermes #3863), LM Studio (PicoClaw #28, NanoBot #3186), local model routing (CoPaw #3443)
   - **Signal:** Enterprise users seeking to bypass markup middlemen (OpenRouter) and achieve cost/latency control via direct cloud API access

3. **Multi-Channel Parity is Unresolved**
   - Discord/Slack/Telegram/Teams/WeChat/Feishu/LINE — each platform has platform-specific bugs
   - **Signal:** No project has achieved robust cross-channel reliability; this remains a competitive differentiation opportunity

4. **Security is No Longer Optional**
   - Secret scanning bypasses (IronClaw P0), credential leakage (Hermes), TOTP gating (ZeroClaw), HTTPS enforcement regressions (NullClaw)
   - **Signal:** Production deployments demand security hardening; security issues are now P0/Critical severity

5. **Cron/Scheduled Task Reliability**
   - Broken across NullClaw, PicoClaw, NanoBot, CoPaw
   - **Signal:** Automation is a core use case but implementation quality varies significantly; users cannot rely on scheduling for mission-critical tasks

6. **Voice & Real-Time Communication**
   - SIP voice channel (CoPaw #3449), WeChat multi-account (Hermes #9756)
   - **Signal:** AI agents expanding beyond text to voice and real-time messaging

7. **Architectural Reform Underway**
   - ZeroClaw microkernel transition, NullClaw Zig migration, CoPaw plugin architecture (#3357)
   - **Signal:** Projects reaching maturity are investing in long-term maintainability rather than feature proliferation

8. **Onboarding Friction Blocks Adoption**
   - Zig installation docs (NullClaw), web dashboard unavailability (ZeroClaw), credential expiration (PicoClaw)
   - **Signal:** Despite technical sophistication, projects struggle with initial user experience; out-of-box functionality gaps

### Value for AI Agent Developers

| Insight | Recommendation |
|---------|-----------------|
| Memory management patterns from NanoBot (#3181, #3180) could inform other projects | Cross-pollinate bounded queue implementations |
| Hermes Agent's security PR process (AntAISecurityLab) is a model for vulnerability response | Adopt dedicated security review workflows |
| CoPaw's beta release cadence enables rapid iteration without stability commitment | Consider similar pre-release channels |
| PicoClaw's MCP integration commands (#2535) suggest tooling standardization opportunity | MCP commands as first-class citizen |
| ZeroClaw's binary size CI enforcement (20MB hard limit) sets deployment standards | Apply to resource-constrained deployments |

---

*Report generated 2026-04-16. Data sourced from GitHub activity across NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw, and ZeroClaw.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-16

---

## 1. Today's Overview

NanoBot is experiencing **high activity** on 2026-04-16, with 15 issues and 49 PRs updated in the last 24 hours. The project is actively advancing cross-platform support (Microsoft Teams, Feishu), improving CI/CD infrastructure (Python 3.14, Windows), and addressing memory management stability issues. A critical memory corruption bug (#3190) surfaced requiring an immediate fix, while multiple performance and feature PRs from multiple contributors are in review. The maintainer (JiajunBernoulli) is leading core fixes and CI improvements, with strong community contributions in channel integrations.

---

## 2. Releases

**None** — No new releases published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (17 total)

| PR | Title | Contributor | Status |
|----|-------|-------------|--------|
| [#3186](https://github.com/HKUDS/nanobot/pull/3186) | Add support for nullable API keys and LM Studio | sohamb117 | Closed |
| [#2600](https://github.com/HKUDS/nanobot/pull/2600) | Add Microsoft Teams channel on current nightly base | T3chC0wb0y | Closed |
| [#2929](https://github.com/HKUDS/nanobot/pull/2929) | Fix msteams followups 2920 2921 | T3chC0wb0y | Closed |
| [#3178](https://github.com/HKUDS/nanobot/pull/3178) | fix(discord): remove duplicate channel_id assignment | LeoFYH | Closed |

**Key advancements:**
- **LM Studio support** (#3186): Nullable API keys implemented for local LLM providers, reducing friction for local model users.
- **Microsoft Teams integration** (#2600, #2929): Full Teams channel merged onto nightly with quote-fallback fixes and restart notification wiring.

### Open PRs (32 total) — Highlight Regressions/Features

| PR | Title | Contributor |
|----|-------|-------------|
| [#3195](https://github.com/HKUDS/nanobot/pull/3195) | fix(memory): handle missing cursor key in history entries | JiajunBernoulli |
| [#3169](https://github.com/HKUDS/nanobot/pull/3169) | feat(feishu): add progress notification support | JiajunBernoulli |
| [#3193](https://github.com/HKUDS/nanobot/pull/3193) | ci: add Python 3.14 to test matrix | JiajunBernoulli |
| [#3194](https://github.com/HKUDS/nanobot/pull/3194) | ci: add Windows and Python 3.14 support | JiajunBernoulli |
| [#3192](https://github.com/HKUDS/nanobot/pull/3192) | fix(docs): update channel plugin build backend to hatchling | JiajunBernoulli |
| [#3191](https://github.com/HKUDS/nanobot/pull/3191) | Reintegrate teams with all fixes onto nightly | T3chC0wb0y |
| [#3156](https://github.com/HKUDS/nanobot/pull/3156) | feat(heartbeat): add per-phase model overrides | furier |
| [#3184](https://github.com/HKUDS/nanobot/pull/3184) | feat: add profiling infrastructure for agent loop timing | mohamed-elkholy95 |
| [#3183](https://github.com/HKUDS/nanobot/pull/3183) | feat: first-token streaming priority and Responses API failure tracking | mohamed-elkholy95 |
| [#3182](https://github.com/HKUDS/nanobot/pull/3182) | feat: cache bootstrap files, tool schemas, and Dream skill list | mohamed-elkholy95 |
| [#3181](https://github.com/HKUDS/nanobot/pull/3181) | feat: memory & history performance optimizations | mohamed-elkholy95 |
| [#3180](https://github.com/HKUDS/nanobot/pull/3180) | fix: bounded MessageBus queues and tool routing context safety | mohamed-elkholy95 |

**Notable:** Contributor **mohamed-elkholy95** has submitted 6 PRs (#3184, #3183, #3182, #3181, #3180, #3187) split from #3158, covering performance, profiling, streaming, and correctness fixes.

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

| Issue | Title | Author | Comments | Reactions |
|-------|-------|--------|----------|-----------|
| [#623](https://github.com/HKUDS/nanobot/issues/623) | Persistent "Tool Not Found" Errors for Custom Skills | wyliletv | 8 | 👍 1 |
| [#3190](https://github.com/HKUDS/nanobot/issues/3190) | 【重大BUG】v0.1.5升级到v0.1.5.post1后用不了了 | bigsinger | 7 | — |
| [#3123](https://github.com/HKUDS/nanobot/issues/3123) | [enhancement] Problem with cron/scheduled task message send | geekjam | 7 | — |
| [#3143](https://github.com/HKUDS/nanobot/issues/3143) | LLM returned error: messages parameter illegal | bigsinger | 6 | — |
| [#2957](https://github.com/HKUDS/nanobot/issues/2957) | [bug] huge bug dream overwriting MEMORY.md | Xcc313r4n7 | 5 | — |

**Analysis:**
- **Memory corruption** is the dominant theme — #3190 (cursor key issue) and #2957 (MEMORY.md overwritten) indicate fragile memory management during consolidation/cursor advancement.
- **Cron/scheduled tasks** (#3123) reveals UX gaps: cron output uses a separate session, preventing users from referencing past messages or requesting corrections.
- **Custom skills** (#623) show ongoing tooling friction for third-party integrations (google_calendar, ha-voice).
- **Token limit errors** (#3143) with code `1214` appear frequently for users hitting 65,536 token chunks.

### Most Active PRs (by discussion volume)

| PR | Title | Comments |
|----|-------|----------|
| [#3195](https://github.com/HKUDS/nanobot/pull/3195) | fix(memory): handle missing cursor key | Immediate hotfix for #3190 |
| [#3169](https://github.com/HKUDS/nanobot/pull/3169) | feat(feishu): add progress notification support | Resolves #3166 |
| [#3191](https://github.com/HKUDS/nanobot/pull/3191) | Reintegrate teams with all fixes onto nightly | High priority rebase |

---

## 5. Bugs & Stability

### Reported Bugs (Ranked by Severity)

| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **🔴 Critical** | [#3190](https://github.com/HKUDS/nanobot/issues/3190) | Memory cursor key missing causing crash after v0.1.5 → v0.1.5.post1 upgrade; session breaks | [#3195](https://github.com/HKUDS/nanobot/pull/3195) (open) |
| **🔴 Critical** | [#2957](https://github.com/HKUDS/nanobot/issues/2957) | MEMORY.md blanked entirely by Dream; no git backup | — |
| **🟠 High** | [#3143](https://github.com/HKUDS/nanobot/issues/3143) | Recurring `code: 1214` LLM errors (messages parameter illegal) — token chunking overflow at 71,835/65,536 | — |
| **🟠 High** | [#1186](https://github.com/HKUDS/nanobot/issues/1186) | Memory consolidation bloats MEMORY.md over time; users forced to manually clean up | — |
| **🟡 Medium** | [#3166](https://github.com/HKUDS/nanobot/issues/3166) | Feishu channel ignores `send_progress` — no progress notifications | [#3169](https://github.com/HKUDS/nanobot/pull/3169) (open) |
| **🟡 Medium** | [#2921](https://github.com/HKUDS/nanobot/issues/2921) | MS Teams: restart_notify config exposed but not implemented | [#2929](https://github.com/HKUDS/nanobot/pull/2929) (merged) |
| **🟡 Medium** | [#3188](https://github.com/HKUDS/nanobot/issues/3188) | Cannot install nanobot-channel-webhook on Python 3.14 | [#3192](https://github.com/HKUDS/nanobot/pull/3192) (open) |
| **🟢 Low** | [#3102](https://github.com/HKUDS/nanobot/issues/3102) | `'<=' not supported between 'NoneType' and 'int'` in _build_kwargs | Closed |

**Stability Assessment:** The project has **2 critical memory-related bugs** actively impacting production users. The cursor key issue (#3190) is already being hotfixed; the Dream/MEMORY.md overwrite (#2957) remains unresolved and poses data loss risk. Token limit handling (#3143) is a recurring pain point requiring better chunking logic.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue | Title | Author | Priority Signals |
|-------|-------|--------|-----------------|
| [#3123](https://github.com/HKUDS/nanobot/issues/3123) | Cron session should be persistent for user follow-up | geekjam | 7 comments |
| [#3107](https://github.com/HKUDS/nanobot/issues/3107) | Multiple suggestions: status task count, model param, timeout config, provider fallback | aiguozhi123456 | 5 comments |
| [#3095](https://github.com/HKUDS/nanobot/issues/3095) | Custom provider with Anthropic API endpoint | wighawag | 5 comments |
| [#3185](https://github.com/HKUDS/nanobot/issues/3185) | Explicit LM Studio support | sohamb117 | **Resolved in** [#3186](https://github.com/HKUDS/nanobot/pull/3186) |
| [#2220](https://github.com/HKUDS/nanobot/issues/2220) | Use ContextVar for task-local tool routing context | jr551 | 4 comments |

### Predicted Next-Version Features

Based on open PRs and issue momentum:

1. **✅ LM Studio First-Class Support** (#3185/#3186) — Already merged; reduces local LLM friction.
2. **Feishu Progress Notifications** (#3166/#3169) — Likely in next release; maintains cross-channel parity.
3. **Per-Phase Heartbeat Model Overrides** (#3156) — Enables eval/exec phase separation for cost-sensitive users.
4. **Teams Channel Stabilization** (#2600/#3191) — Full integration onto nightly imminent.
5. **Memory Performance Optimizations** (#3181, #3180) — Bounded queues and I/O batching address long-standing efficiency concerns.

---

## 7. User Feedback Summary

### Pain Points
- **Memory fragility**: Users report MEMORY.md corruption (#2957, #3190) and bloat (#1186). Automatic consolidation is unreliable, forcing manual intervention.
- **Token limit errors**: Frequent `1214` errors (#3143) indicate that chunking logic doesn't handle edge cases near 65K tokens, especially with large context histories.
- **Custom skill tooling**: "Tool Not Found" errors (#623) for custom skills create friction for skill developers.
- **Black-box status**: Users lack visibility into current task state (#3107 suggestion for task count display) and automatic retry outcomes.

### Positive Signals
- Users appreciate the project scope and openness ("enjoying nanobot! First personal AI." — #623 author).
- LM Studio support (#3185 → #3186) was well-received; closed within 1 day.
- Teams integration (#2600) reflects strong demand for enterprise channel coverage.

### Dissatisfaction
- Cron job UX (#3123): Sessions are isolated, preventing users from referencing past cron outputs or requesting corrections.
- Provider instability (#3107): Users want configurable timeout buffers and fallback providers for unreliable LLM services.

---

## 8. Backlog Watch

### Long-Unanswered / Important Issues Needing Maintainer Attention

| Issue | Age | Title | Status | Notes |
|-------|-----|-------|--------|-------|
| [#2220](https://github.com/HKUDS/nanobot/issues/2220) | ~29 days | Use ContextVar for task-local tool routing context | Open | Targets `nightly`; async safety hardening; 4 comments |
| [#1186](https://github.com/HKUDS/nanobot/issues/1186) | ~50 days | Memory consolidation bloats MEMORY.md | Closed | Root cause likely unfixed; user reports recurring bloat |
| [#623](https://github.com/HKUDS/nanobot/issues/623) | ~60 days | Tool Not Found Errors for Custom Skills | Closed | Long thread (8 comments); may need documentation or tooling fix |
| [#2921](https://github.com/HKUDS/nanobot/issues/2921) | ~8 days | Teams restart_notify config not implemented | Open | Config exposed but no functional code; maintainer should wire or remove |

### Stalled PRs

| PR | Age | Title | Bottleneck |
|----|-----|-------|-------------|
| [#3144](https://github.com/HKUDS/nanobot/pull/3144) | 2 days | [codex] add AgentHiFive integration | Needs review |
| [#3179](https://github.com/HKUDS/nanobot/pull/3179) | 1 day | WebSocket tooling, session lifecycle, reasoning | Needs review |

**Recommendation:** Maintainers should prioritize:
1. Memory corruption fixes (#3190, #2957) — data loss risk.
2. #3143 token chunking regression — impacts multiple users.
3. #2220 ContextVar proposal — addresses async safety.
4. #2921 Teams config cleanup — dead config erodes trust.

---

*Digest generated from NanoBot (HKUDS/nanobot) GitHub data for 2026-04-16.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-16

## 1. Today's Overview

Hermes Agent shows **high development velocity** with 50 Issues and 50 PRs updated in the past 24 hours. The project is actively addressing security vulnerabilities (3 dedicated security PRs), platform-specific bugs (Discord, Slack, Telegram, WeChat), and expanding multi-provider support (AWS Bedrock, xAI, Brave Search). No releases were published today. The community is engaged with an average of ~1 comment per issue, indicating active discussion around bug reports and feature requests.

---

## 2. Releases

**No new releases today.**

---

## 3. Project Progress

### Merged/Closed PRs (8 total)

| PR | Author | Description |
|----|--------|-------------|
| [#10159](https://github.com/NousResearch/hermes-agent/pull/10159) | OWALabuy | **macOS GUI domain sleep/lock fix** — Resolves gateway startup failures when Mac display sleeps or locks for extended periods |
| [#10031](https://github.com/NousResearch/hermes-agent/pull/10031) | AntAISecurityLab | **Security fix: MCP auth on cross-origin redirect** — Fixes credential leakage (CWE-522) in MCP HTTP transport |
| [#10038](https://github.com/NousResearch/hermes-agent/pull/10038) | AntAISecurityLab | **Security fix: Telegram media download auth check** — Fixes authorization bypass (CWE-862) before media download |
| [#10189](https://github.com/NousResearch/hermes-agent/pull/10189) | memosr | **Security fix: session token endpoint** — Closes unauthenticated `/api/auth/session-token` and restores `SystemExit` for non-localhost |
| [#10649](https://github.com/NousResearch/hermes-agent/pull/10649) | jackjin1997 | **Profile import fix** — Prevents silent data loss when archive directory name differs from target |
| [#10647](https://github.com/NousResearch/hermes-agent/pull/10647) | helix4u | **Gateway notify context preservation** — Fixes broken `notify_on_complete` on Telegram/messaging platforms |
| [#10583](https://github.com/NousResearch/hermes-agent/pull/10583) | denysgaievskyi | **Slack reaction events routing** — Routes `reaction_added` events to agent (closed) |
| [#10579](https://github.com/NousResearch/hermes-agent/pull/10579) | denysgaievskyi | **Slack mention prefix fix** — Fixes `is_command()` detection for mention-prefixed messages (closed) |

### Notable Open PRs

| PR | Author | Description |
|----|--------|-------------|
| [#10600](https://github.com/NousResearch/hermes-agent/pull/10600) | Jaaneek | **xAI provider with video generation, image editing, X search, TTS** |
| [#7144](https://github.com/NousResearch/hermes-agent/pull/7144) | kshitijk4poor | **Lightpanda browser engine support** with automatic Chrome fallback |
| [#10650](https://github.com/NousResearch/hermes-agent/pull/10650) | kovyrin | **Cron deliveries to session context** — Opt-in session history inclusion |
| [#10595](https://github.com/NousResearch/hermes-agent/pull/10595) | igorhvr | **Bidirectional media/file transmission** for OpenAI-compatible API server |
| [#10643](https://github.com/NousResearch/hermes-agent/pull/10643) | kshitijk4poor | **53 CI test failures resolved** across 8 root causes |
| [#10038](https://github.com/NousResearch/hermes-agent/pull/10038) | AntAISecurityLab | Telegram media auth bypass fix |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Author | Comments | Topic |
|-------|--------|----------|-------|
| [#9179](https://github.com/NousResearch/hermes-agent/issues/9179) | xeloxa | 24 | **Enable GitHub private vulnerability reporting** — Security feature request for private security disclosures |
| [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) | uditya-kumar | 13 | **Native AWS Bedrock provider support** — Avoid OpenRouter markup, latency, use own AWS credentials |
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | zznner-dot | 9 | **Response truncated due to output length limit** — CLI/gateway streaming interrupted |
| [#6360](https://github.com/NousResearch/hermes-agent/issues/6360) | oxygen16 | 8 | **Invalid port configuration error** — Quick setup produces malformed port string |
| [#9531](https://github.com/NousResearch/hermes-agent/issues/9531) | ws8wangshuai | 5 | **`self` not defined in fuzzy file completions** — CLI crash on `@` trigger |
| [#9756](https://github.com/NousResearch/hermes-agent/issues/9756) | Brave963 | 3 | **WeChat multi-account support** — Currently only single account supported |
| [#9843](https://github.com/NousResearch/hermes-agent/issues/9843) | wpsl5168 | 2 | **Telegram bot token validation missing** — Accepts invalid tokens silently |
| [#6447](https://github.com/NousResearch/hermes-agent/issues/6447) | steromano87 | 2 | **Discord `/sethome` writes to wrong config file** — Writes to `config.yaml` instead of `.env` |

### Underlying Needs Analysis

1. **Security Infrastructure (#9179, #10031, #10038, #10189)**: Strong community demand for professional security practices. Multiple security PRs from `AntAISecurityLab` indicate active vulnerability research.

2. **Provider Independence (#3863)**: Users want to bypass OpenRouter for AWS Bedrock, seeking cost savings (~5-20% markup), reduced latency, and enterprise features (VPC, CloudTrail).

3. **Multi-Platform Messaging (#9756, #6447, #10579, #10583)**: Growing WeChat user base (international users) requesting multi-account support; ongoing Discord/Slack platform adapter fixes.

4. **Context Management (#10585)**: New request to reduce API costs 80%+ via context compression optimization for MEMORY.md/USER.md files.

---

## 5. Bugs & Stability

### Active Bugs (Ranked by Impact)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **HIGH** | [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | Response truncation in CLI/gateway — long outputs mid-stream | — |
| **HIGH** | [#9531](https://github.com/NousResearch/hermes-agent/issues/9531) | `NameError: 'self'` crash on `@` fuzzy completions | — |
| **MEDIUM** | [#6360](https://github.com/NousResearch/hermes-agent/issues/6360) | Port parsing error in quick setup — `'6153export'` malformed | — |
| **MEDIUM** | [#10364](https://github.com/NousResearch/hermes-agent/issues/10364) | Agent stalls at "preparing `<tool>`..." — tool never executes | — |
| **MEDIUM** | [#10575](https://github.com/NousResearch/hermes-agent/issues/10575) | Claude OAuth misclassifies system prompt as "usage exhausted" | — |
| **LOW** | [#6447](https://github.com/NousResearch/hermes-agent/issues/6447) | Discord sethome writes channel ID to wrong file | — |
| **LOW** | [#10581](https://github.com/NousResearch/hermes-agent/issues/10581) | Home-channel prompt ignores yaml config, only reads env var | — |

### System Alerts (2 new)

- [#10646](https://github.com/NousResearch/hermes-agent/issues/10646): **DuckDB MISSING** — alpha_discovery.duckdb not found
- [#10645](https://github.com/NousResearch/hermes-agent/issues/10645): **News daemon NOT RUNNING** — news pipeline halted

---

## 6. Feature Requests & Roadmap Signals

### High-Priority Feature Requests

| Issue | Author | Feature | Demand Signal |
|-------|--------|---------|---------------|
| [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) | uditya-kumar | **Native AWS Bedrock provider** | 17 👍, 13 comments — highest engagement |
| [#9756](https://github.com/NousResearch/hermes-agent/issues/9756) | Brave963 | **WeChat multi-account support** | International user base need |
| [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) | diego-anselmo | **Brave Search backend** | Free tier, cost-effective API |
| [#10585](https://github.com/NousResearch/hermes-agent/issues/10585) | juyterman1000 | **Multi-resolution context compression** | Cost reduction (80%+ target) |
| [#7144](https://github.com/NousResearch/hermes-agent/pull/7144) | kshitijk4poor | **Lightpanda browser engine** | Performance improvement PR |
| [#10600](https://github.com/NousResearch/hermes-agent/pull/10600) | Jaaneek | **xAI video/image generation** | Feature parity expansion |

### Predicted Next Priorities

1. **AWS Bedrock native integration** — High user demand + competitive advantage
2. **Context compression optimization** — Cost reduction is critical for sustained adoption
3. **WeChat multi-account** — Growing international market
4. **Brave Search integration** — Differentiator for privacy-conscious users

---

## 7. User Feedback Summary

### Pain Points

- **Setup friction (#6360)**: Quick setup produces malformed configurations, frustrating new users
- **Output truncation (#7237)**: Long-form responses consistently fail, limiting use cases
- **Platform inconsistencies**: Discord, Slack, Telegram adapters have different behavior for similar operations (sethome, reactions)
- **CI reliability (#10643)**: 53 test failures indicate integration testing gaps

### Positive Signals

- **Active security maintenance**: Community researchers contributing security fixes
- **Platform expansion**: xAI, Brave Search, Lightpanda show continued ecosystem growth
- **Enterprise features**: Multi-account support, OAuth sync, cron improvements indicate professional use cases

### Dissatisfaction

- **#10641** ("DELETE YOUR ACCOUNT") — 1 👍 indicates at least some community frustration (possibly satirical)
- **#10642** — Plagiarism accusation requires maintainer response

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Age | Author | Topic | Status |
|-------|-----|--------|-------|--------|
| [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) | ~17 days | uditya-kumar | AWS Bedrock native support | Open, 13 comments |
| [#5947](https://github.com/NousResearch/hermes-agent/issues/5947) | ~9 days | vadimcomanescu | 5 HERMES_HOME profile isolation leaks | Closed |
| [#7144](https://github.com/NousResearch/hermes-agent/pull/7144) | ~6 days | kshitijk4poor | Lightpanda browser engine | Open PR |
| [#10585](https://github.com/NousResearch/hermes-agent/issues/10585) | <1 day | juyterman1000 | Context compression cost reduction | Open, new |

### PRs Needing Maintainer Attention

| PR | Age | Author | Description |
|----|-----|--------|-------------|
| [#7144](https://github.com/NousResearch/hermes-agent/pull/7144) | 6 days | kshitijk4poor | Lightpanda browser engine |
| [#6050](https://github.com/NousResearch/hermes-agent/pull/6050) | 8 days | el-analista | `/new` inline support |
| [#6021](https://github.com/NousResearch/hermes-agent/pull/6021) | 8 days | el-analista | Suppress stale response after `/stop` |
| [#6013](https://github.com/NousResearch/hermes-agent/pull/6013) | 8 days | el-analista | GLM-5.1 support |
| [#10137](https://github.com/NousResearch/hermes-agent/pull/10137) | 1 day | digging-airfare-4u | WeCom progress fix |

---

*Digest generated for Hermes Agent (NousResearch/hermes-agent) — 2026-04-16*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-16

---

## 1. Today's Overview

PicoClaw maintains high development velocity with 14 PRs updated in the past 24 hours, of which 8 were merged or closed. All 7 active issues remain open, indicating an intake pipeline that is actively triaging but has not yet resolved incoming tickets. The project's focus today was split between agent capability enhancements (parallel message processing, delegate tool, side-question commands), channel integrations (LINE SDK upgrade, markdown syntax highlighting), and stability fixes (tool call ID preservation, image-input error recovery). No new releases were issued; the absence of a recent version tag suggests the team is aggregating changes for an upcoming release.

---

## 2. Releases

**No new releases** were published in the past 24 hours. The latest tagged release information was not provided in today's data snapshot.

---

## 3. Project Progress

The following PRs reached a closed/merged state today:

| PR | Author | Domain | Summary |
|----|--------|--------|---------|
| [#2484](https://github.com/sipeed/picoclaw/pull/2484) | BeaconCat | provider | **membench: add LLM-as-Judge evaluation mode** — enables semantic scoring via any OpenAI-compatible endpoint, replacing token-overlap F1 |
| [#2524](https://github.com/sipeed/picoclaw/pull/2524) | SiYue-ZO | tool, config | **Add configurable Sogou-backed web search** — default search implementation for mainland China users + web UI config panel |
| [#2528](https://github.com/sipeed/picoclaw/pull/2528) | wj-xiao | agent | **fix(agent): preserve reused tool call IDs across turns** — fixes history sanitization for providers that reuse IDs like `call_0` |
| [#2529](https://github.com/sipeed/picoclaw/pull/2529) | lc6464 | channel | **feat(web): add markdown syntax highlighting** — integrates `rehype-highlight` for chat and skills preview |
| [#2502](https://github.com/sipeed/picoclaw/pull/2502) | lxowalle | agent | **feat(agent): add /btw one-off side-question command** — priority command bypassing queued turn flow, excluded from session history |
| [#2525](https://github.com/sipeed/picoclaw/pull/2525) | afjcjsbx | provider, agent | **fix(agent): recover after image-input-unsupported failures** — prevents sessions from getting stuck when non-vision models receive images |
| [#2500](https://github.com/sipeed/picoclaw/pull/2500) | cytown | build | **remove useless backend output for platform-token** |
| [#2526](https://github.com/sipeed/picoclaw/pull/2526) | wj-xiao | channel | **fix(web): restore chat composer disabled-state messaging** — removes stale local disabled-state logic |

**Notable open PRs advancing toward merge:**

| PR | Author | Domain | Summary |
|----|--------|--------|---------|
| [#2503](https://github.com/sipeed/picoclaw/pull/2503) | cytown | channel, agent | **refactor: make agent loop support parallel** — major refactor enabling parallel user message processing |
| [#2531](https://github.com/sipeed/picoclaw/pull/2531) | is-Xiaoen | agent, tool, go | **feat(tools): add delegate tool for cross-agent task handoff** — Phase 2 PR C, hands off tasks to named agents synchronously |
| [#2535](https://github.com/sipeed/picoclaw/pull/2535) | afjcjsbx | agent, tool | **feat(commands): add MCP slash commands** — `/list mcp` and `/show mcp <server>` for MCP server introspection |
| [#2532](https://github.com/sipeed/picoclaw/pull/2532) | lxowalle | agent | **feat(agent): support btw side questions** — companion to #2502, adds `btw` side-question routing |
| [#2413](https://github.com/sipeed/picoclaw/pull/2413) | ex-takashima | channel, dependencies | **refactor(line): use official LINE Bot SDK v8** — replaces ~270 lines of hand-rolled HTTP/HMAC/JSON code |
| [#2530](https://github.com/sipeed/picoclaw/pull/2530) | wj-xiao | channel, config | **fix(web): save channel configs with nested channel_list patches** — backend now returns typed channel entries |

---

## 4. Community Hot Topics

**Most active issues by comment volume:**

1. **#28** — *Feat Request: LM Studio Easy Connect* ([sipeed/picoclaw#28](https://github.com/sipeed/picoclaw/issues/28)) — 13 comments, open since 2026-02-11. A community member is requesting a simplified connection path to LM Studio. The issue has persisted for over 2 months with no resolution or official response, signaling a potential gap in provider coverage.

2. **#2468** — *[BUG] Scheduled Task Fails to Execute* ([sipeed/picoclaw#2468](https://github.com/sipeed/picoclaw/issues/2468)) — 5 comments, updated 2026-04-15. Users encounter `"scheduling command execution is restricted to internal channels"` when running cron tools. This is a functional regression in a core automation feature.

3. **#2046** — *[BUG] PicoClaw does not call tool with LongCat API* ([sipeed/picoclaw#2046](https://github.com/sipeed/picoclaw/issues/2046)) — 2 comments. A provider-integration bug dating back to 2026-03-26 with no resolution.

**Analysis:** The top two issues (#28, #2468) both reflect core pain points — provider accessibility and reliability of built-in tools. The backlog of unresolved provider-specific bugs (#2046, #2468) suggests maintainer bandwidth may be constrained on provider integrations.

---

## 5. Bugs & Stability

Ranked by potential severity:

| Priority | Issue | Domain | Summary | Fix PR? |
|----------|-------|--------|---------|---------|
| 🔴 High | [#2468](https://github.com/sipeed/picoclaw/issues/2468) — Scheduled Task Fails | cron | Cron tool fails with channel restriction error; breaks scheduled automation | No |
| 🟠 Medium | [#2046](https://github.com/sipeed/picoclaw/issues/2046) — LongCat API tool calls | provider | PicoClaw silently skips tool execution with LongCat API | No |
| 🟠 Medium | [#2302](https://github.com/sipeed/picoclaw/issues/2302) — Frequent re-authentication | channel | Web UI credentials expire rapidly, causing `PERMISSION_DENIED` errors | No |
| 🟡 Low | [#2446](https://github.com/sipeed/picoclaw/issues/2446) — Message echo in multi-channel | channel | Pending tasks cause incorrect message echo on other channels | No |

**Already fixed today:**
- [#2528](https://github.com/sipeed/picoclaw/pull/2528) — Tool call ID deduplication bug (providers reusing IDs like `call_0`)
- [#2525](https://github.com/sipeed/picoclaw/pull/2525) — Image-input failure recovery for non-vision models
- [#2526](https://github.com/sipeed/picoclaw/pull/2526) — Web chat composer disabled-state messaging

**Stability note:** The high-priority cron bug (#2468) with no assigned fix PR is the most pressing stability concern. The multi-channel echo issue (#2446) also represents a potential UX/functionality risk in concurrent setups.

---

## 6. Feature Requests & Roadmap Signals

**Newly filed enhancement requests (past 24h):**

| Issue | Title | Domain | Summary |
|-------|-------|--------|---------|
| [#2533](https://github.com/sipeed/picoclaw/issues/2533) | `picoclaw auth login --provider <> --no-browser` | config | Add `--no-browser` flag to auth login for headless/server environments |
| [#2527](https://github.com/sipeed/picoclaw/issues/2527) | Make `fresh_tail_size` configurable | agent, config | Move hardcoded constant (32) in `seahorse/short_constants.go` to user config |

**Long-standing request gaining traction:**
- [#28](https://github.com/sipeed/picoclaw/issues/28) — LM Studio Easy Connect (13 comments, 1 👍) has been open since February, indicating sustained community demand for easier third-party LLM provider onboarding.

**In-flight features signaling roadmap direction:**
- Cross-agent delegation ([#2531](https://github.com/sipeed/picoclaw/pull/2531)) aligns with multi-agent orchestration goals (Phase 2, #2148)
- MCP integration commands ([#2535](https://github.com/sipeed/picoclaw/pull/2535)) expand tool interoperability
- Parallel agent loop ([#2503](https://github.com/sipeed/picoclaw/pull/2503)) suggests performance/concurrency improvements are in focus
- Sogou web search ([#2524](https://github.com/sipeed/picoclaw/pull/2524)) indicates regional accessibility is being addressed

**Prediction for next version:** The next release is likely to include parallel agent processing, MCP command integration, the `/btw` side-question feature, and the Sogou search backend — given these PRs are open and appear near completion.

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **Provider fragmentation** | Issue #28 (LM Studio), #2046 (LongCat), #2302 (credential management) | Negative — users struggle with multi-provider setup and credential persistence |
| **Cron/scheduling reliability** | Issue #2468 — cron tool broken for 6 days | Negative — core automation feature unusable |
| **Multi-channel concurrency** | Issue #2446 — message echo across channels | Negative — undermines reliability in concurrent use |
| **Developer experience** | PR #2524 (Sogou search), PR #2533 (`--no-browser` request) | Positive — community actively proposing practical improvements |
| **Documentation & discoverability** | PR #2535 — MCP server introspection commands | Positive — improving usability of built-in features |

**Key pain point:** Users in mainland China face search unavailability without manual configuration; today's Sogou PR directly addresses this. The credential expiration issue (#2302) suggests session management may need hardening.

---

## 8. Backlog Watch

The following items are aging or under-discussed and may need maintainer attention:

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#28](https://github.com/sipeed/picoclaw/issues/28) — LM Studio Easy Connect | ~64 days | Open, 13 comments | High community interest; no official response or roadmap signal |
| [#2046](https://github.com/sipeed/picoclaw/issues/2046) — LongCat API bug | ~21 days | Open, 2 comments | Provider integration regression; unacknowledged |
| [#2468](https://github.com/sipeed/picoclaw/issues/2468) — Cron tool failure | ~6 days | Open, 5 comments | Active bug; escalating comments but no assigned fix |
| [#2302](https://github.com/sipeed/picoclaw/issues/2302) — Frequent re-auth | ~13 days | Open, 1 comment | Potential security/usability regression; low engagement |

**Recommendation:** Prioritize triaging #2468 (cron) and #28 (LM Studio) given age and community impact. The LongCat API bug (#2046) and credential expiry (#2302) also merit acknowledgment to maintain contributor trust.

---

*Digest generated from GitHub data for sipeed/picoclaw — 2026-04-16.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-16

## 1. Today's Overview

IronClaw experienced **high activity** on 2026-04-16, with 17 issues and 50 PRs updated in the last 24 hours. The team closed 8 issues and merged/closed 7 PRs, including critical security and stability fixes. Notably, a **critical security vulnerability** (Engine V2 bypassing inbound secret scanning) was reported and requires immediate attention. Multiple P0-quality bugs affecting the web dashboard and core agent functionality were actively addressed, while several cross-component enhancements advanced through CI pipelines. The project shows healthy velocity on bug fixes but faces mounting pressure around security, permission management, and multi-channel deployments.

---

## 2. Releases

**No new releases** were published on 2026-04-16.

---

## 3. Project Progress

The following merged/closed PRs represent today's most significant advancements:

| PR | Author | Scope | Summary |
|----|--------|-------|---------|
| [#2509](https://github.com/nearai/ironclaw/pull/2509) | henrypark133 | CI | CI support for historical Dockerfile targets in rebuild workflow |
| [#2507](https://github.com/nearai/ironclaw/pull/2507) | henrypark133 | CI | Added manual workflow for rebuilding Docker Hub images from historical release tags |
| [#2485](https://github.com/nearai/ironclaw/issues/2485) | henrypark133 | Testing | Playwright e2e test for always-approve persistence across restart (issue linked) |
| [#2488](https://github.com/nearai/ironclaw/issues/2488) | serrrfirat | Security | Fix for TOCTOU race and cross-user gaps in assistant conversation fallback |
| [#2421](https://github.com/nearai/ironclaw/pull/2421) | standardtoaster | DB | Scope grants for cross-user read/write access (DB migration) |

**Key Infrastructure Improvements:**
- Enhanced CI/CD reliability with historical Docker image rebuild capabilities
- DB migration shipped for cross-user workspace access grants
- Security fix addressing race conditions in conversation fallback logic

---

## 4. Community Hot Topics

**Most Active Issues (by engagement):**

1. **#2491** — [Engine V2 bypasses inbound secret scanning — tokens sent directly to LLM](https://github.com/nearai/ironclaw/issues/2491)  
   *Severity: P0 Security* | Author: serrrfirat  
   User messages bypass `scan_inbound_for_secrets()` when `ENGINE_V2=true`, allowing API keys/tokens to reach the LLM undetected.

2. **#2087** — [IronClaw stopped responding after trying to setup Notion](https://github.com/nearai/ironclaw/issues/2087)  
   *Severity: Bug* | Author: sergeiest | Comments: 3  
   Agent hangs after Notion setup instructions—suggests tool execution or MCP integration issues.

3. **#2482** — [Telegram group messages omit chat_type metadata](https://github.com/nearai/ironclaw/issues/2482)  
   *Severity: Bug, Channel* | Author: rozgo | Comments: 1  
   Telegram group-chat metadata normalization issue (distinct from auth issues #443/#590).

4. **#548** — [Add Search to Chat API](https://github.com/nearai/ironclaw/issues/548)  
   *Enhancement* | Author: sergeiest | Comments: 4 (most discussed)  
   Long-standing request to add web search capability to IronClaw's default toolkit.

5. **#2484** — [feat(permissions): param-aware always-allow grants](https://github.com/nearai/ironclaw/issues/2484)  
   *Enhancement* | Author: henrypark133  
   Parameter-specific permission grants to prevent blanket tool approvals (e.g., approving `shell ls` shouldn't allow `shell rm -rf`).

**Underlying Needs:** Community discussions cluster around three themes:
- **Security hardening** (secret scanning, credential management)
- **Multi-channel reliability** (Telegram groups, Slack OAuth)
- **Fine-grained permissions** (parameter-aware grants, persistent approvals)

---

## 5. Bugs & Stability

**P0-Quality Issues (Critical):**

| Issue | Title | Status | Fix PR? |
|-------|-------|--------|---------|
| [#2491](https://github.com/nearai/ironclaw/issues/2491) | Engine V2 bypasses secret scanning | **OPEN** | No |
| [#2410](https://github.com/nearai/ironclaw/issues/2410) | Dashboard keeps refreshing and wiping contents | **OPEN** | No |
| [#2409](https://github.com/nearai/ironclaw/issues/2409) | User messages disappear after typing | **OPEN** | No |
| [#2284](https://github.com/nearai/ironclaw/issues/2284) | Staging agent instance dies after 1 hour of inactivity | **OPEN** (P2) | No |

**Other Notable Bugs:**

| Issue | Title | Status | Fix PR? |
|-------|-------|--------|---------|
| [#2482](https://github.com/nearai/ironclaw/issues/2482) | Telegram group messages omit chat_type metadata | **OPEN** | [#2513](https://github.com/nearai/ironclaw/pull/2513) |
| [#2474](https://github.com/nearai/ironclaw/issues/2474) | stdio MCP servers trigger OAuth discovery flow | **CLOSED** | N/A |
| [#2345](https://github.com/nearai/ironclaw/issues/2345) | Tool install asks for permission repeatedly | **CLOSED** | N/A |
| [#2279](https://github.com/nearai/ironclaw/issues/2279) | Bot falsely claims success despite shell/open tool errors | **CLOSED** | N/A |
| [#2489](https://github.com/nearai/ironclaw/issues/2489) | HTTP 413 context-length detection missing in 4 providers | **OPEN** | No |

**Stability Assessment:** Three P0 web UI bugs (dashboard refresh, message disappearance) represent a significant user-facing regression. The secret scanning bypass is a critical security issue. PR #2513 addresses the Telegram metadata bug.

---

## 6. Feature Requests & Roadmap Signals

**High-Priority Feature Requests:**

| Issue | Title | Signals |
|-------|-------|---------|
| [#548](https://github.com/nearai/ironclaw/issues/548) | Add Search to Chat API | Long-standing (since March 2026), indicates demand for web search integration |
| [#2484](https://github.com/nearai/ironclaw/issues/2484) | Param-aware always-allow grants | Addresses permission granularity gap; likely near-term |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) | Per-channel MCP and built-in tool filtering | Large PR (XL), multi-channel deployments need this |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Add Aliyun Coding Plan support | Growing international scope |
| [#2418](https://github.com/nearai/ironclaw/pull/2418) | Slim mode runtime, Dockerfiles, /health route | Infrastructure for high-density deployments |

**Roadmap Prediction:**
Based on current activity, the next release cycle likely includes:
- Security fixes (secret scanning, permission hardening)
- Telegram group chat improvements
- Slim mode runtime for containerized deployments
- Cross-user workspace access (DB migration ready)

---

## 7. User Feedback Summary

**Pain Points:**

1. **Dashboard Reliability** — Users report the staging dashboard entering refresh loops and losing typed messages. This significantly impacts usability for active bot development.

2. **Permission Persistence** — Tool approval "always allow" settings don't persist reliably across sessions/restarts, forcing repeated permission prompts.

3. **Agent Hangs** — Complex tool operations (Notion setup) cause the agent to stop responding entirely, suggesting error handling or timeout issues.

4. **MCP Server Setup Friction** — stdio MCP servers incorrectly trigger OAuth flows, complicating server activation.

**Use Cases Observed:**
- Multi-channel deployments (Telegram + Slack + web)
- Cross-user workspace collaboration
- Enterprise integrations requiring credential injection
- Resource-constrained deployment scenarios

**Satisfaction Signals:**
- Community actively contributing fixes (henrypark133, serrrfirat, rozgo)
- Quick turn-around on bug reports (issues closed within 1-2 days)

---

## 8. Backlog Watch

**Long-Unanswered or Stalled Issues:**

| Issue | Age | Title | Priority |
|-------|-----|-------|----------|
| [#548](https://github.com/nearai/ironclaw/issues/548) | ~42 days | Add Search to Chat API | Enhancement |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) | ~29 days | Per-channel MCP and built-in tool filtering | XL PR, needs review |
| [#1764](https://github.com/nearai/ironclaw/pull/1764) | ~17 days | Abound demo — Responses API, credential injection | XL PR, experienced contributor |
| [#2336](https://github.com/nearai/ironclaw/pull/2336) | ~5 days | Memory improvements (insights, session summary, reasoning) | Core feature, active |

**Issues Needing Maintainer Attention:**

1. **#2491** (Security) — Critical vulnerability, no fix PR exists yet
2. **#2410/#2409** (P0 Quality) — Web UI regressions affecting staging
3. **#2284** (P2) — Agent instance lifecycle stability
4. **#2481** — User asking about custom secrets management setup

**Recommendation:** Prioritize security review for #2491 and P0 web UI fixes before next release. The XL PRs (#1378, #1764) appear ready for maintainer review and could unlock significant features if merged.

---

*Digest generated from IronClaw (nearai/ironclaw) activity on 2026-04-16*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-16

## 1. Today's Overview

CoPaw (also known as QwenPaw) shows **high development velocity** today with 50 issues and 50 PRs updated in the last 24 hours, split evenly between open and closed/merged states. Two new beta releases (v1.1.2-beta.1 and v1.1.2-beta.2) landed, indicating active iteration toward v1.1.2. The community is engaged with an "Open Tasks" issue (#2291) drawing 57 comments, signaling strong contributor interest. A mix of stability fixes (session corruption, vLLM compatibility, multimodal tool errors) and feature work (local model routing, SIP voice channel, Agent Statistics) is progressing simultaneously. The project appears healthy with maintainers actively closing issues and reviewing PRs.

---

## 2. Releases

### v1.1.2-beta.2 (PR #3454)
- **Status:** Patched version bump immediately following beta.1
- **Changes:** Version increment only; likely a hotfix for build/ci metadata

### v1.1.2-beta.1 (PR #3416)
- **Memory improvements:** File watcher now supports recursive configuration (#3347)
- **Memory sum:** Added default memory sum feature
- **Upgrade path:** Install via `pip install qwenpaw==1.1.2b1`

### v1.1.1.post1 (PR #3399)
- **Cron Job fix:** Updated Cron Job ID info message text (#3404)
- **Provider fix:** Fixed Ollama Provider connection issue (partial in release notes)

---

## 3. Project Progress

### Closed/Merged PRs (today)
| PR | Title | Impact |
|----|-------|--------|
| #3454 | Version bump to 1.1.2b2 | Release prep |
| #3443 | feat(routing): add local model routing | Routing infrastructure |
| #3305 | fix: register AgentApp dispatched requests with TaskTracker | Background task stability |
| #2144 | feat(routing): add local judge routing v1 | Routing logic |

### Active Feature PRs (under review / open)
| PR | Title | Significance |
|----|-------|--------------|
| #3449 | feat(channels): SIP voice channel (pyVoIP/LiveKit) | New communication channel |
| #3447 | dep(console): bump prettier 3.0→3.8 | DX/UI consistency |
| #3438 | fix: vLLM tool_choice="auto" compatibility | Model provider compatibility |
| #3365 | feat(console): Agent Statistics page | Analytics dashboard |
| #3340 | feat(tool): ACP-based external agent delegation | Multi-agent orchestration |
| #3433 | feat: langfuse OpenAI SDK tracing | Observability |
| #3452 | feat(console): local model routing settings UI | User-facing routing config |
| #3451 | feat(routing): local model routing strategies | Routing v2 implementation |
| #3299 | fix(formatter): 400 error on multimodal tool results | Session stability |
| #3278 | fix(session): recover from JSON corruption | P0 data integrity |
| #3117 | feat: semantic skill routing | Skill injection optimization |
| #3357 | Console/plugin architecture | Extensibility framework |

---

## 4. Community Hot Topics

| Issue | Title | Comments | Analysis |
|-------|-------|----------|----------|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | 🐾 Help Wanted: Open Tasks | **57** | Most active; signals strong community contribution appetite. Priority P0–P2 tasks available for claiming. |
| [#3392](https://github.com/agentscope-ai/QwenPaw/issues/3392) | No API login/password security | **6** | Closed as invalid; user demanded API auth controls. **Key insight:** Production deployment expectations are rising. |
| [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) | Page scroll lag after many conversation rounds | **5** | UX degradation with long conversations (200+ rounds). Indicates need for virtual scrolling or context truncation. |
| [#3426](https://github.com/agentscope-ai/QwenPaw/issues/3426) | Feature: context usage indicator | **5** | Users want visibility into token budget consumption. Related to issue #3350's root cause. |
| [#3430](https://github.com/agentscope-ai/QwenPaw/issues/3430) | QwenPaw vs CoPaw relationship? | **5** | Naming confusion; suggests need for clearer branding/documentation. |

**Underlying needs:** (1) Enterprise-grade security controls, (2) Long-conversation performance optimization, (3) Transparent token/context budgeting.

---

## 5. Bugs & Stability

### High Severity
| Issue | Description | Status | Fix PR |
|-------|-------------|--------|--------|
| [#3011](https://github.com/agentscope-ai/QwenPaw/issues/3011) | Long tasks silently stop mid-execution (Qwen3 Coder Plus 100% reproducible) | Closed | — |
| [#3278](https://github.com/agentscope-ai/QwenPaw/pull/3278) | JSON corruption in session state causing `JSONDecodeError` | Open (PR) | PR #3278 |
| [#3299](https://github.com/agentscope-ai/QwenPaw/issues/3299) | 400 error with multimodal tool results | Open (PR) | PR #3299 |
| [#3397](https://github.com/agentscope-ai/QwenPaw/issues/3397) | Session freeze with large `max_input_length` | Open | — |

### Medium Severity
| Issue | Description | Status | Fix PR |
|-------|-------------|--------|--------|
| [#3435](https://github.com/agentscope-ai/QwenPaw/issues/3435) | Duplicate `/api/files/preview` in download URLs | Open | — |
| [#3420](https://github.com/agentscope-ai/QwenPaw/issues/3420) | Editing skill.md deletes workspace files | Open | — |
| [#3279](https://github.com/agentscope-ai/QwenPaw/issues/3279) | Pipeline ops execute twice per message; tool ID set grows unbounded | Open | — |
| [#3407](https://github.com/agentscope-ai/QwenPaw/issues/3407) | MiniMax MCP tool fails on v1.1.1 (worked on v1.0.2) | Closed | — |
| [#3434](https://github.com/agentscope-ai/QwenPaw/issues/3434) | Ollama not detected despite running locally | Closed | — |

**Stability note:** Session corruption fix (PR #3278) addresses a P0 availability issue caused by concurrent write race conditions. The multimodal tool result fix (PR #3299) prevents permanent 400 errors that break sessions.

---

## 6. Feature Requests & Roadmap Signals

### High-Priority User Requests
| Issue | Feature | Signals |
|-------|---------|---------|
| [#3426](https://github.com/agentscope-ai/QwenPaw/issues/3426) | Context usage/limit indicator | **Likely in next release** — aligns with v1.1.2 memory work |
| [#2441](https://github.com/agentscope-ai/QwenPaw/issues/2441) | Plan Mode UI | Requested for serious workflow control |
| [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | Kimi Code API support | Integration gap vs competitors |
| [#3349](https://github.com/agentscope-ai/QwenPaw/issues/3349) | Red warning for agent approval actions | Security UX enhancement |
| [#3380](https://github.com/agentscope-ai/QwenPaw/issues/3380) | Full backup/restore functionality | Enterprise/multi-agent deployment need |
| [#2961](https://github.com/agentscope-ai/QwenPaw/issues/2961) | Skill folder classification | Skill pool organization |
| [#3298](https://github.com/agentscope-ai/QwenPaw/issues/3298) | Tool guardrail message simplification | UI clutter concern |

### Feature Work In Progress
- **Local model routing** (PRs #3443, #3451, #3452) — likely targets v1.1.2
- **Agent Statistics page** (PR #3365) — analytics dashboard
- **SIP voice channel** (PR #3449) — roadmap task #15
- **Semantic skill routing** (PR #3117) — context optimization

---

## 7. User Feedback Summary

### Pain Points
1. **Long conversation lag** (#3350): Users with project-level iterations (200+ turns) experience unusable scrolling. Root cause is likely unbounded context growth.
2. **Unreliable Feishu integration** (#3432): Existing users from OpenClaw report Feishu API permissions not working despite correct setup.
3. **Gunicorn compatibility** (#3375): pydantic conflict blocks production deployments.
4. **Ollama detection failures** (#3434): Local model users cannot get CoPaw to recognize running Ollama instances.

### Positive Signals
- Strong contributor engagement (#2291: 57 comments, multiple first-time contributors)
- New features being merged at good pace (routing, statistics, SIP)
- Community asking for advanced features (Plan Mode, semantic routing) rather than just bug fixes

### Use Cases Observed
- **Project-level code iteration**: Users maintain single conversation windows across V1→V2→V3 iterations
- **Enterprise deployment**: Security (API auth), backup/restore, channel integrations (Feishu, DingTalk)
- **Local model hosting**: vLLM, Ollama users expecting self-hosted LLM support

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention
| Issue | Age | Status | Concern |
|-------|-----|--------|---------|
| [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) | 2 days | Open | Long-conversation UX may escalate if not addressed |
| [#3397](https://github.com/agentscope-ai/QwenPaw/issues/3397) | 1 day | Open | `max_input_length` freeze is a blocker for power users |
| [#3432](https://github.com/agentscope-ai/QwenPaw/issues/3432) | 1 day | Open | Feishu integration failure vs competitor feature parity |
| [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | 1 day | Open | Kimi API support request with manual attempt failures |

### Stalled PRs Needing Review
| PR | Age | Status | Concern |
|----|-----|--------|---------|
| #3117 | 8 days | Open, need discussions | Semantic skill routing — may need design sign-off |
| #2506 | ~18 days | Under Review | Channel testing infrastructure — larger scope |
| #3340 | 3 days | Under Review | ACP agent delegation — complex integration |

**Recommendation:** Prioritize the session corruption fix (#3278) and multimodal 400 error fix (#3299) for merge — both are P0/P1 stability issues affecting active users.

---

*Digest generated from CoPaw/QwenPaw GitHub activity on 2026-04-16. All issue/PR links use `https://github.com/agentscope-ai/QwenPaw`.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-16

## 1. Today's Overview

ZeroClaw shows **high activity** with 50 issues and 50 pull requests updated in the last 24 hours, though **no new releases** were published. The project is actively transitioning toward v1.0.0, evidenced by multiple RFCs covering architecture, governance, and infrastructure. Community engagement is robust, with 11 issues closed and 2 PRs merged. The balance between open bugs (39 active) and active RFC work suggests a project in a mature development phase addressing technical debt while planning structural reforms. Notably, several security and stability issues persist across runtime, providers, and channels, warranting maintainer prioritization.

---

## 2. Releases

**No new releases** were published today. The project remains on the v0.7.0 → v1.0.0 transition roadmap, with active RFCs (#5574, #5577, #5576, #5579) guiding the architectural evolution.

---

## 3. Project Progress

### Merged/Closed PRs Today
The following PRs reached completion (merged/closed):

| PR | Title | Area |
|----|-------|------|
| *(2 merged PRs not individually detailed in data)* | — | — |

### Active PRs Advanced
Key pull requests progressed today:

- **#5779** — `[needs-maintainer-review]` feat(security): add gated_commands TOTP gate for shell tool (phase 1) — Implements granular TOTP gating for specific destructive commands (`sudo *`, `rm -rf *`) rather than blocking the entire shell tool. [[PR #5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779)]
- **#5777** — `[needs-maintainer-review]` fix(agent): preserve streamed reasoning_content on AssistantToolCalls — Resolves an issue where Kimi/GLM thinking models' reasoning content was always empty. [[PR #5777](https://github.com/zeroclaw-labs/zeroclaw/pull/5777)]
- **#5774** — `[needs-maintainer-review]` fix(agent): agent path — Fixes `Agent::from_config` to properly call `tools::register_skill_tools`, resolving skill tool registration failures on WebSocket/gateway paths. [[PR #5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774)]
- **#5773** — `[needs-maintainer-review]` fix(shell): guard bypass — Patches a bypass where wildcard+unblocked commands still blocked backticks and command substitutions. [[PR #5773](https://github.com/zeroclaw-labs/zeroclaw/pull/5773)]
- **#5772** — `[needs-maintainer-review]` refactor(tools): delegate rate-limiting to wrappers for glob_search and content_search — Centralizes rate-limiting following the established ShellTool pattern. [[PR #5772](https://github.com/zeroclaw-labs/zeroclaw/pull/5772)]
- **#5715** — `[ci, needs-maintainer-review]` ci(build): add binary size check to PR CI — Enforces 20MB hard limit with advisory warnings at 15MB. Part of binary size optimization initiative. [[PR #5715](https://github.com/zeroclaw-labs/zeroclaw/pull/5715)]
- **#5705** — `[needs-maintainer-review]` feat(gateway): session abort endpoint + incremental streaming persistence — Adds external abort capability and crash recovery for in-flight agent responses. [[PR #5705](https://github.com/zeroclaw-labs/zeroclaw/pull/5705)]
- **#5700 series** — Multiple session management and provider fixes (SessionResetTool, connect_timeout_secs configurability, MiniMax API compatibility). [[PR #5705](https://github.com/zeroclaw-labs/zeroclaw/pull/5705)]
- **#5162** — `[agent-approved]` feat(channel): add Mattermost WebSocket listener with multi-channel support — Major improvement replacing REST API polling with real-time event delivery. [[PR #5162](https://github.com/zeroclaw-labs/zeroclaw/pull/5162)]
- **#5727** — `[dependencies]` fix(matrix): restore encrypted media download and add outbound attachment support — Fixes encrypted Matrix media regression. [[PR #5727](https://github.com/zeroclaw-labs/zeroclaw/pull/5727)]
- **#5563** — `[OPEN]` fix(runtime): hide windows shell console window — Resolves distracting cmd.exe flash during shell execution. [[PR #5563](https://github.com/zeroclaw-labs/zeroclaw/pull/5563)]

---

## 4. Community Hot Topics

Most active discussions by comment volume:

| Issue | Title | Comments | Category |
|-------|-------|----------|----------|
| **#4866** | [Bug]: Web dashboard is still not available | **12** | Bug |
| **#5574** | RFC: Intentional Architecture — ZeroClaw Microkernel Transition | **7** | RFC |
| **#5447** | [Feature]: crate split the crate | **5** | Enhancement |
| **#4851** | [Bug]: configure GitHub copilot as provider | **5** | Bug |
| **#2691** | Zeroclaw's code quality concerns | **4** + 9 👍 | Enhancement |

### Analysis of Underlying Needs:

- **Web Dashboard Availability (#4866)**: Users are blocked from accessing the UI and Tauri desktop app, with the error "Build it with: cd web && npm ci && npm run build" persisting across versions. Community seeks a self-contained, pre-built web interface rather than requiring manual builds. This is the **highest-priority user friction point** with 12 comments.

- **Intentional Architecture RFC (#5574)**: The community is actively engaging with the v0.7.0 → v1.0.0 microkernel transition plan, indicating strong interest in architectural clarity and long-term maintainability. Multiple parallel RFCs (#5577, #5576, #5579) suggest an organized push toward structural reform.

- **Compilation Performance (#5447, #5575)**: Two separate discussions on crate splitting and build times reflect developer frustration with slow compilation cycles impacting secondary development workflows.

---

## 5. Bugs & Stability

### Critical (S0/S1) — Data Loss / Workflow Blocked

| Issue | Title | Severity | Status |
|-------|-------|----------|--------|
| **#5533** | allowed_Path doesn't respect contains logic | S0 | Open |
| **#5518** | forbidden_path_argument blocks safe redirect targets (/dev/null, /dev/stdout) | S0 | Open |
| **#5542** | consecutive OOM in wsl2 | S0 | Open |
| **#5528** | Improper logic of email channel config | S0 | Open |
| **#5672** | Feishu responds even when mention_only is enabled | S0 | Open |
| **#4866** | Web dashboard is still not available | S1 | Open |
| **#5600** | Use kimi-code provider in streaming chat call tools | S1 | Open |
| **#5654** | Encryption for config.json on Telegram token not working | S1 | Open |
| **#5527** | Gemini changed oath things again | S1 | Open |
| **#5564** | Custom provider tool follow-up fails with empty tool output | S1 | Open |
| **#5475** | Copilot + Telegram results in Invalid parameter | S1 | Open |

### Notable (S2) — Degraded Behavior

| Issue | Title | Severity | Status |
|-------|-------|----------|--------|
| **#5670** | Groq provider 400 error | S2 | In-progress |
| **#5628** | Daemon service auto-starts on boot, causes port conflict | S2 | In-progress |
| **#5634** | Web dashboard session not persisting despite session_persistence = true | S2 | Open |
| **#5537** | Causes Persistent Error Loop (GPT file parsing) | S2 (now closed) | Closed |
| **#5470** | Multiple issues when running safely (Telegram, memory) | S2 | Open |
| **#5562** | Windows shell commands flash cmd console window | S2 | In-progress |

### Regression Note
- **#5727** (Matrix encrypted media download) — Fixed via PR; regression introduced during conflict resolution from #5559.

### Fix PRs Existing
- Windows console flash: PR #5563 open (fix submitted)
- Groq provider: PR #5762 for MiniMax compatibility may address underlying provider patterns
- Session persistence: PR #5705 adds session abort infrastructure

---

## 6. Feature Requests & Roadmap Signals

### Active RFCs Indicating Next Version Direction

| RFC | Title | Status |
|----|-------|--------|
| **#5574** | Intentional Architecture — Microkernel Transition (v0.7.0 → v1.0.0) | Draft, In-progress |
| **#5577** | Project Governance and Team Coordination | Draft, In-progress |
| **#5576** | Documentation Standards and Knowledge Architecture | Draft, In-progress |
| **#5579** | Engineering Infrastructure — CI/CD Pipeline and Release Automation | Draft, In-progress |

### User-Requested Features

| PR/Issue | Title | Priority Signal |
|---------|-------|-----------------|
| **#5619** | Native OpenRouter provider routing support | Enhancement request |
| **#5162** | Mattermost WebSocket listener with multi-channel support | Agent-approved PR |
| **#5696** | SessionResetTool and SessionDeleteTool | Needs maintainer review |
| **#5754** | Make provider connect_timeout_secs configurable | Needs maintainer review |
| **#5269** | Improve Installation Documentation & Methods | 2 comments, user need |

### Likely Near-Term Additions
- **Binary size monitoring** (CI check via #5715)
- **Session abort endpoint** (#5705)
- **Granular shell security gates** (#5779)
- **Persistent WebSocket connection for web UI** (#5733)

---

## 7. User Feedback Summary

### Pain Points

1. **Web Dashboard Unavailability (#4866)**: Users cannot access the web UI or Tauri desktop app without manual builds. This is a **blocking UX issue** affecting new adopters and daily users.

2. **Telegram Encryption Config (#5654)**: Users report that encrypting `config.json` breaks Telegram functionality, with no response from the bot despite successful configuration.

3. **Groq Provider Reliability (#5670)**: Users experiencing 400 errors with specific models (llama-3.3-70b-versatile), blocking production workflows.

4. **Compilation Speed (#5575)**: Developers conducting secondary development report that even single-line changes trigger full recompilation, severely impacting iteration speed.

5. **Memory Issues in WSL2 (#5542)**: Multiple out-of-memory kills on WSL2 environments suggest resource management concerns for Linux-based workflows.

6. **Installation Friction (#5269)**: Users report difficulty discovering and using installation methods, particularly for Rust-based deployments via `cargo binstall`.

### Positive Signals

- **Community Governance Engagement**: Multiple contributors actively participating in RFC discussions, indicating a healthy, invested community.
- **Security Improvements**: Users requesting granular TOTP gates (#5779) suggest security-conscious deployments.
- **Multi-Channel Interest**: Mattermost WebSocket support (#5162) and Matrix fixes (#5727) show demand for diverse channel integrations.

---

## 8. Backlog Watch

### Long-Unanswered or High-Impact Items Needing Maintainer Attention

| Issue | Title | Age | Priority | Notes |
|-------|-------|-----|----------|-------|
| **#4866** | Web dashboard not available | ~19 days | S1 | Persists across many versions; needs definitive fix or clear documentation |
| **#2691** | Code quality

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/manelsen/agents-radar).*