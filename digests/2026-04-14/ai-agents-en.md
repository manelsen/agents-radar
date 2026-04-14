# AI Agents Ecosystem Digest 2026-04-14

> Issues: 2 | PRs: 4 | Projects covered: 7 | Generated: 2026-04-14 13:13 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Primary Project Deep Dive

# NullClaw Project Digest

**Date:** 2026-04-14  
**Repository:** [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. Today's Overview

NullClaw demonstrates solid maintenance activity on 2026-04-14, with 4 pull requests updated and 2 new bug reports opened in the last 24 hours. The project shows active development focused on stability improvements—three of the four PRs are bug fixes addressing provider lifetimes, model catalog fetching, and web search configuration guidance. No new releases were published today, but the pending PR queue indicates quality-of-life enhancements and critical fixes are in review. Community engagement remains moderate with active issue discussion on connectivity problems.

---

## 2. Releases

**No new releases published today.**

The last release information is not available in the provided data. For release details, visit the [releases page](https://github.com/nullclaw/nullclaw/releases).

---

## 3. Project Progress

### Pull Requests Updated (4 items)

| PR | Title | Author | Status |
|----|-------|--------|--------|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | feat(cron): cron subagent, run history, JSON output, security hardening | yanggf8 | OPEN |
| [#815](https://github.com/nullclaw/nullclaw/pull/815) | fix(web_search): add setup guidance for missing providers | manelsen | OPEN |
| [#814](https://github.com/nullclaw/nullclaw/pull/814) | fix(agent): stabilize named-agent provider lifetimes | manelsen | OPEN |
| [#813](https://github.com/nullclaw/nullclaw/pull/813) | fix(onboard): raise models refresh output budget | manelsen | OPEN |

**Analysis:** No PRs were merged today, but all four open PRs received updates, indicating active review cycles. The standout PR is **#783**, a substantial feature addition introducing a cron subagent engine with database-backed scheduling, run history tracking, and JSON CLI output. This represents a significant expansion of NullClaw's automation capabilities. The three bug fix PRs (#815, #814, #813) from contributor **manelsen** address specific reliability issues: web search provider configuration clarity, agent provider memory management, and model catalog fetching limits.

---

## 4. Community Hot Topics

### Active Issues (2 items)

**#812** - [[bug] http_request](https://github.com/nullclaw/nullclaw/issues/812)  
*Author: uMendex | Created: 2026-04-13 | Comments: 2 | 👍: 0*

**Issue Summary:** User migrating from Picoclaw/ZeroClaw reports inability to enable internet search capability despite testing all examples. User has the latest NullClaw version installed. This is a high-impact usability issue affecting new user onboarding.

**Community Signal:** Two comments indicate ongoing troubleshooting. The issue suggests potential documentation gaps or API configuration complexity for search providers.

---

**#811** - [[bug] Fails to connect to sub agent with a custom OpenAI-compatible provider](https://github.com/nullclaw/nullclaw/issues/811)  
*Author: reosablo | Created: 2026-04-13 | Comments: 0 | 👍: 0*

**Issue Summary:** Sub agents configured with `--agent` CLI flag using custom OpenAI-compatible providers fail with `error.CompatibleApiError` (exit_code=3). Verbose logs show connection failures.

**Community Signal:** Zero comments suggest this is a fresh report awaiting maintainer response. This indicates potential compatibility issues with OpenAI-compatible API providers that may affect power users with self-hosted solutions.

---

## 5. Bugs & Stability

### Reported Bugs (Ranked by Severity)

| Severity | Issue | Description | Fix PR Available |
|----------|-------|-------------|-------------------|
| **Medium** | [#811](https://github.com/nullclaw/nullclaw/issues/811) | Sub agent connection failures with custom OpenAI-compatible providers | No |
| **Medium** | [#812](https://github.com/nullclaw/nullclaw/issues/812) | Internet search capability not working despite latest version | No |

**Assessment:** Both reported bugs relate to provider connectivity and external API integration. Issue #811 directly correlates with PR #814 ("stabilize named-agent provider lifetimes"), suggesting maintainer awareness. Issue #812 aligns with PR #815's scope of improving web search setup guidance—these bugs may be partially addressed once those PRs merge.

**Stability Note:** No regressions, crashes, or critical failures reported today. The bug reports represent integration edge cases rather than systemic failures.

---

## 6. Feature Requests & Roadmap Signals

### In-Review Features

**PR #783** - **Cron Subagent Engine** ([yanggf8](https://github.com/yanggf8))  
This PR represents a major feature expansion introducing:
- Database-backed scheduler (`cron_runs` history table)
- Worker system (`cron_run_queue`) for atomic tick/enqueue/complete operations
- Job types: skill, agent, and shell
- Per-job timezone offsets
- Operator alerts and delivery routing
- JSON CLI output for `cron list --json` and `cron schedule --json`

**Roadmap Signal:** This feature, if merged, positions NullClaw as a more comprehensive AI agent platform with scheduled task capabilities. Users can expect automation workflows similar to traditional cron but with AI agent integration.

---

## 7. User Feedback Summary

### Pain Points Identified

1. **Search Provider Configuration Complexity**  
   User feedback from issue #812 indicates frustration with enabling internet search. The multi-step configuration process using `http_request.search_base_url` for SearXNG or setting API key environment variables creates friction for new users.

2. **Custom Provider Compatibility**  
   Issue #811 highlights challenges when integrating self-hosted OpenAI-compatible providers. The `error.CompatibleApiError` suggests inconsistent handling of provider configurations across main and sub agents.

### Positive Signals

- User uMendex explicitly praised NullClaw's organization ("very organized") compared to Picoclaw and ZeroClaw alternatives
- Active bug reporting from users suggests engagement and investment in the project's success

---

## 8. Backlog Watch

### Issues Requiring Maintainer Attention

| Issue | Title | Age | Status | Priority Signal |
|-------|-------|-----|--------|-----------------|
| [#812](https://github.com/nullclaw/nullclaw/issues/812) | [bug] http_request | 1 day | OPEN | 2 comments, user actively troubleshooting |
| [#811](https://github.com/nullclaw/nullclaw/issues/811) | [bug] Fails to connect to sub agent with custom OpenAI-compatible provider | 1 day | OPEN | Fresh report, no comments |

**Backlog Analysis:** Both open issues are recent (created 2026-04-13) and have not yet received maintainer responses. Issue #812 has partial community engagement (2 comments). Maintainer attention recommended to prevent user attrition and ensure smooth onboarding experiences.

### Long-Standing Items

No long-unanswered issues detected in the 24-hour window. All items are within 24-48 hours of creation.

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| Issues Updated (24h) | 2 |
| Issues Opened (24h) | 2 |
| PRs Updated (24h) | 4 |
| PRs Merged (24h) | 0 |
| New Releases | 0 |
| Active Contributors (today) | 3 (uMendex, reosablo, yanggf8, manelsen) |

---

*Digest generated for 2026-04-14. Data sourced from nullclaw/nullclaw GitHub activity.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal Assistant Ecosystem

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing intense activity as of April 2026, with six of seven tracked projects showing very high update volumes (40+ items/24h). The landscape is bifurcating into two distinct maturity tiers: **NanoBot, CoPaw/QwenPaw, and ZeroClaw** demonstrate production-scale velocity with 50+ PRs/issues processed daily, while **NullClaw** maintains a lean, stability-focused maintenance posture. Common technical themes emerging across all projects include multi-channel integration challenges, context/token management at scale, and the growing demand for local LLM compatibility. The ecosystem shows increasing architectural sophistication—ZeroClaw's microkernel plugin system and NanoBot's soft consolidation for history management signal a maturation beyond simple chatbot wrappers toward comprehensive automation platforms.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged (24h) | Releases Today | Active Contributors | Health Assessment |
|---------|---------------------|-------------------|------------------|----------------|-------------------|-------------------|
| **NanoBot** | 67 | 76 | 39 | None | Very high (~15+) | ⚠️ High velocity, but 2-3 critical bugs unresolved |
| **CoPaw/QwenPaw** | 47 | 44 | 20 | v1.1.1, v1.1.1-beta.2 | High (~10) | ⚠️ Platform-specific regressions (Windows, macOS) |
| **ZeroClaw** | 50 | 50 | 8 | None | High (~8) | ⚠️ Multiple S0/S1 bugs filed; web dashboard broken |
| **PicoClaw** | 11 | 46 | 16 | v0.2.6-nightly.20260414 | High (~8) | ✅ Stable nightly cadence, active review |
| **IronClaw** | 50 | 50 | 6 | None | High (~10) | ⚠️ Staging environment instability (8+ QA bugs) |
| **Hermes Agent** | 28 open | 20 open | 3 | None | Moderate (~6) | ✅ Consistent, no critical unfixed bugs |
| **NullClaw** | 2 | 4 | 0 | None | Low (3) | ✅ Maintenance mode, stability-focused |

**Key Finding:** NanoBot leads in throughput (51% PR merge rate), while PicoClaw demonstrates the healthiest balance between activity and stability with 16 merges from 46 updates. CoPaw/QwenPaw is the only project shipping stable releases, indicating stronger release discipline.

## 3. Primary Project Positioning

### Technical Approach Differentiation

| Project | Architecture Focus | Primary Differentiator | Target User |
|---------|-------------------|----------------------|-------------|
| **NanoBot** | Multi-channel abstraction layer | Token/context management (soft consolidation, heartbeat isolation) | Power users managing high-volume multi-platform deployments |
| **CoPaw/QwenPaw** | Provider abstraction | OpenRouter integration, startup performance (4.5s→0.05s) | Developers seeking provider flexibility and rapid iteration |
| **ZeroClaw** | Microkernel plugin system | WIT interface contracts, config schema versioning | Plugin developers, enterprise deployments |
| **PicoClaw** | Security-first design | Agent Shield, skills whitelisting, GitHub-backed discovery | Security-conscious organizations |
| **IronClaw** | OAuth/integration depth | Google Suite, Twitter/X MCP, path-based credentials | Enterprise productivity workflows |
| **Hermes Agent** | Context engineering | Progressive context compression, personality configuration | Custom personality deployments |
| **NullClaw** | Minimalist stability | Cron subagent engine, provider lifetime management | Self-hosted, minimal-dependency users |

### Community Size Indicators

- **Largest engaged community:** NanoBot (67 issues, 76 PRs, 11-comment critical issues)
- **Fastest growing:** CoPaw/QwenPaw (56 comments on "Help Wanted" issue, active migration discussions)
- **Smallest but stable:** NullClaw (3-4 active contributors, minimal noise, focused PR queue)

## 4. Shared Technical Focus Areas

### Cross-Project Requirements Emerging

| Focus Area | Projects Affected | Specific Needs |
|------------|------------------|----------------|
| **Context/Token Management** | NanoBot, Hermes Agent, NullClaw, CoPaw/QwenPaw | Soft consolidation (#3142 NanoBot), summarization before truncation (#2375 NanoBot), heartbeat token bloat fixes |
| **Multi-Channel Reliability** | All 7 projects | Matrix broken (#1300 NanoBot, #7914 Hermes), Feishu timeouts (#3133 NanoBot, #5672 ZeroClaw), Telegram integration (#1676 IronClaw) |
| **Local LLM Compatibility** | NanoBot, PicoClaw, ZeroClaw, CoPaw/QwenPaw | Ollama integration (#2570, #2185 NanoBot), llama.cpp connectivity (#5578 ZeroClaw), vLLM fixes (#3295 CoPaw) |
| **Security Hardening** | PicoClaw, IronClaw, ZeroClaw | Agent Shield (#2313 PicoClaw), cross-tenant credential fixes (#2381 IronClaw), HMAC tool receipts (#5168 ZeroClaw) |
| **Platform-Specific Bugs** | CoPaw/QwenPaw, IronClaw, Hermes Agent, PicoClaw | Windows exec tool (#2868 NanoBot), Windows blank screen (#3322 CoPaw), Windows UnicodeDecodeError (#9633 Hermes) |
| **Provider Abstraction** | All projects | OpenAI-compatible provider failures (#811 NullClaw, #2185 NanoBot), API key handling inconsistencies |

**Critical Cross-Project Pattern:** Token/context bloat is the #1 pain point across NanoBot (560k tokens/heartbeat), CoPaw (session corruption from JSON size), and Hermes Agent (iterative compaction overrides active topics). Projects are converging on summarization-based solutions.

## 5. Differentiation Analysis

### Feature Focus divergence

| Project | Feature Emphasis | Technical Unique Value |
|---------|-----------------|----------------------|
| **NanoBot** | Observability & cost control | LangSmith integration restoration, token budget tracking, heartbeat session isolation |
| **CoPaw/QwenPaw** | Startup performance & autonomy | 90%+ startup time reduction, Mission Mode for long-running tasks, file upload (vision/documents) |
| **ZeroClaw** | Developer experience | WIT plugin contracts, config schema migration V1→V2, compilation speed concerns |
| **PicoClaw** | Security & skill ecosystem | Agent Shield suite, GitHub-backed skill discovery, Intel OpenVINO support |
| **IronClaw** | Enterprise integrations | Google Sheets OAuth, Twitter/X MCP, path-based credential scoping, multi-user sharing |
| **Hermes Agent** | Personality & context | Root-level personality configs, progressive context compression, DingTalk file/image sending |
| **NullClaw** | Automation reliability | Cron subagent with DB-backed scheduling, run history, JSON CLI output |

### Target User Segmentation

```
┌─────────────────────────────────────────────────────────────────┐
│                    ECOSYSTEM POSITIONING MAP                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Enterprise/Team         │    Individual Power User             │
│  ─────────────────────    │   ─────────────────────             │
│  • IronClaw (OAuth)       │   • NullClaw (minimal deps)          │
│  • PicoClaw (security)    │   • Hermes Agent (personalities)      │
│  • ZeroClaw (plugins)     │                                      │
│                           │                                      │
│   Developer-Focused       │    High-Volume Automation            │
│  ─────────────────────    │   ──────────────────────────         │
│  • CoPaw/QwenPaw (perf)   │   • NanoBot (multi-channel)          │
│  • ZeroClaw (microkernel) │   • PicoClaw (cron + agents)         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics | Trajectory |
|------|----------|----------------|------------|
| **Tier 1: Hyperactive** | NanoBot, ZeroClaw, CoPaw/QwenPaw | 40-76 items/24h, daily releases or nightly builds | Rapid iteration; technical debt accumulating |
| **Tier 2: Active** | PicoClaw, IronClaw, Hermes Agent | 28-50 items/24h, stable cadence | Steady improvement; manageable bug queue |
| **Tier 3: Maintenance** | NullClaw | <5 items/24h, no releases | Stable; no new features in flight |

### Rapid Iteration Indicators

| Project | Days Since Last Stable Release | Release Velocity | Risk |
|---------|-------------------------------|-----------------|------|
| **CoPaw/QwenPaw** | 0 (v1.1.1 shipped today) | Weekly betas | ✅ Healthy release cycle |
| **PicoClaw** | 0 (nightly shipped today) | Daily nightlies | ⚠️ Stable but rapid churn |
| **NanoBot** | Unknown (nightly, version mismatch) | High | ⚠️ Version sync issues |
| **ZeroClaw** | Unknown (no recent releases) | Moderate | ⚠️ S0/S1 bugs accumulating |
| **IronClaw** | Unknown (pre-release sprint) | High | ⚠️ Staging instability |
| **NullClaw** | Unknown (last release not listed) | Very low | ✅ Low risk, low change |
| **Hermes Agent** | Unknown | Moderate | ✅ Stable |

### Stabilizing Projects

- **NullClaw:** Entering maintenance mode; all PRs are bug fixes; no new features in pipeline
- **Hermes Agent:** DingTalk overhaul nearing completion; context compression PRs in final review stages

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

| Trend | Evidence | Implications for Developers |
|-------|----------|------------------------------|
| **1. Token/Cost Management is Critical** | NanoBot's 560k token heartbeats, CoPaw's session corruption, requests for auto-summarization | Built-in context compression is becoming table stakes; heartbeat/background task token budgets must be isolated |
| **2. Local LLM Adoption Accelerating** | Ollama issues (NanoBot, CoPaw), llama.cpp connectivity (ZeroClaw), vLLM fixes (CoPaw), Intel OpenVINO support (PicoClaw) | Local model compatibility gaps are blocking users; projects need robust fallbacks and connection health checks |
| **3. Multi-Tenant/Enterprise Requirements** | Cross-user workspace sharing (IronClaw), multi-Feishu apps (PicoClaw), HTTP streaming channel requests (NanoBot) | Single-user assumption is breaking; projects need per-user isolation, OAuth integrations, and role-based access |
| **4. Security-First Architecture** | Agent Shield (PicoClaw), HMAC receipts (ZeroClaw), cross-tenant credential fixes (IronClaw) | Security hardening is moving from afterthought to core architecture; skill/tool execution needs audit trails |
| **5. Platform Diversity Pressures** | Windows regressions in 4 projects, OpenWrt ARM64 issues (PicoClaw), WSL2 OOM (ZeroClaw) | Cross-platform testing is insufficient; projects need CI coverage for Windows, ARM, and non-standard Linux distros |
| **6. Migration/Breaking Change Friction** | CoPaw→QwenPaw migration pain, config schema V1→V2 (ZeroClaw), version mismatches (NanoBot) | Breaking changes require dedicated migration tooling; projects should invest in automated upgrade paths |
| **7. Observability Demanded** | LangSmith integration requests (NanoBot), health endpoints (NanoBot #2625 merged), statistics dashboards (CoPaw) | Production deployments require built-in monitoring, tracing, and cost tracking capabilities |

### Strategic Signals for AI Agent Developers

1. **Context management is the next battleground:** Projects solving token bloat (soft consolidation, summarization, heartbeat isolation) will gain competitive advantage

2. **Plugin/extension ecosystems emerging:** ZeroClaw's WIT interfaces and PicoClaw's skill registry suggest a move toward modular architectures; developers should prepare for plugin marketplace dynamics

3. **Multi-channel is table stakes but reliability is lacking:** Every project supports 3+ channels, but all have active channel-related bugs; reliability engineering is the differentiator

4. **Local AI is a growing segment:** Investment in Ollama, llama.cpp, and vLLM compatibility will capture the privacy-conscious and cost-sensitive user segments

5. **Enterprise features are maturing:** OAuth integrations, multi-user support, and credential management are no longer optional; projects without these face displacement in team/organization deployments

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-14

## 1. Today's Overview

NanoBot maintains extremely high activity with 67 issues and 76 PRs updated in the last 24 hours, indicating a highly engaged community. The project closed 48 issues and 39 PRs, suggesting active maintenance and responsiveness. No new releases were published today, but development momentum is strong with multiple significant features in flight. The community is actively addressing long-standing pain points around token consumption, context management, and multi-channel integrations.

---

## 2. Releases

**No new releases today.** The project remains on the `nightly` track with version `0.1.5` (per `pyproject.toml`; `__init__.py` reports `0.4.1`, indicating a version sync issue—see #2857).

---

## 3. Project Progress

### Merged/Closed PRs Today (39 total)

| PR | Title | Impact |
|----|-------|--------|
| [#3146](https://github.com/HKUDS/nanobot/pull/3146) | 0414 | Minor build/cleanup |
| [#3138](https://github.com/HKUDS/nanobot/pull/3138) | feat(slack): resolve named message targets | Improves Slack message routing for channels, users, and mentions |
| [#3134](https://github.com/HKUDS/nanobot/pull/3134) / [#3133](https://github.com/HKUDS/nanobot/pull/3133) | fix(feishu): remove resuming and add streaming card fallback | Fixes lost Feishu responses after 10-minute card timeout |
| [#2625](https://github.com/HKUDS/nanobot/pull/2625) | feat: add HTTP health endpoint on gateway port | Enables service discovery and monitoring |
| [#3087](https://github.com/HKUDS/nanobot/pull/3087) | docs(mcp): add GitHub MCP setup example | Improves developer onboarding |
| [#2390](https://github.com/HKUDS/nanobot/pull/2390) | docs(provider): provider naming convention fixes | Standardizes `volcengine_coding_plan` and `byteplus_coding_plan` naming |

### Active Open PRs (37 total) — Notable Advances

| PR | Title | Significance |
|----|-------|--------------|
| [#3136](https://github.com/HKUDS/nanobot/pull/3136) | feat(api): route message tool sends to channels | Enables outbound message dispatch while API server runs |
| [#3145](https://github.com/HKUDS/nanobot/pull/3145) | fix(agent): persist cross-channel messages into target session | Fixes context loss when cross-channel messaging occurs |
| [#2521](https://github.com/HKUDS/nanobot/pull/2521) | feat(agent): add SelfTool v2 for agent self-evolution | Major feature: runtime state inspection/modification (disabled by default) |
| [#3142](https://github.com/HKUDS/nanobot/pull/3142) | feat(runner): add soft consolidation to _snip_history | **Context management**: Summarizes older conversation half before hard truncation |
| [#3140](https://github.com/HKUDS/nanobot/pull/3140) | feat: restore full-featured LangSmith integration | Restores observability dropped in v0.1.5 |
| [#3135](https://github.com/HKUDS/nanobot/pull/3135) | feat: runtime model switching via /model and /compact | User-facing: switch models without gateway restart |
| [#3137](https://github.com/HKUDS/nanobot/pull/3137) | feat(skills): Add unified manage_skill tool for skill CRUD | Centralizes skill management operations |
| [#2938](https://github.com/HKUDS/nanobot/pull/2938) | feat(api): support file uploads via JSON base64 and multipart | **High-impact**: Adds vision (images) and document (PDF, DOCX, XLSX, PPTX) support |
| [#3139](https://github.com/HKUDS/nanobot/pull/3139) | feat(stop): summarize interrupted tasks for resume | Improves UX for `/stop` command recovery |
| [#3144](https://github.com/HKUDS/nanobot/pull/3144) | [codex] Add optional AgentHiFive integration spike | Optional MCP tools integration via bearer token |
| [#3141](https://github.com/HKUDS/nanobot/pull/3141) | fix(skills): use yaml.safe_load for frontmatter parsing | Fixes multiline description handling in skills |

---

## 4. Community Hot Topics

### Top Issues by Engagement

| Issue | Title | Comments | Status | Analysis |
|-------|-------|----------|--------|----------|
| [#2375](https://github.com/HKUDS/nanobot/issues/2375) | Heartbeat session history causes ENORMOUS token usage | 11 | ✅ CLOSED | **Critical cost issue**: Heartbeat tasks every 30min accumulate logs, causing 560k tokens per execution. Users need heartbeat session isolation or suppression. |
| [#2760](https://github.com/HKUDS/nanobot/issues/2760) | Retry amplification risk: stacked app+SDK retries can triple upstream load | 10 | ✅ CLOSED | **Architecture concern**: Provider SDK retries + app retries create cascading fan-out. Users deploying at scale need retry coordination. |
| [#1300](https://github.com/HKUDS/nanobot/issues/1300) | Matrix channel does not work | 9 | 🟡 OPEN | **Channel integration bug**: Matrix users cannot start the channel. Long-standing issue since Feb 27. |
| [#2185](https://github.com/HKUDS/nanobot/issues/2185) | [regression] Upgrade nanobot breaks gemini-3-flash-preview usage | 8 | 🟡 OPEN | **Regression**: Upgrading from 0.1.4 to 0.1.4post5 breaks Ollama-based gemini-3-flash-preview. Indicates fragility in provider abstraction. |

### Underlying Needs Revealed

1. **Cost & Token Management**: Heartbeat token bloat (#2375) and context window limits (#2984) highlight urgent need for automatic context compression (soft consolidation PR #3142 addresses this).
2. **Reliability at Scale**: Retry amplification (#2760) and DuckDuckGo hangs (#2828) show production deployment concerns.
3. **Multi-Channel Consistency**: Cross-channel message persistence (#3145), Matrix issues (#1300), and Feishu timeout fixes (#3133) indicate maturing multi-channel architecture.
4. **Model Flexibility**: Runtime model switching (#3135), custom provider needs (#3095), and Ollama 404 issues (#2570) show demand for diverse LLM backends.

---

## 5. Bugs & Stability

### Critical/High Severity Bugs

| Issue | Severity | Title | Fix PR | Status |
|-------|----------|-------|--------|--------|
| [#2375](https://github.com/HKUDS/nanobot/issues/2375) | 🔴 Critical | Heartbeat token bloat (560k tokens/execution) | — | Closed (needs fix) |
| [#2828](https://github.com/HKUDS/nanobot/issues/2828) | 🔴 Critical | DuckDuckGo web search hangs entire system | — | Closed (needs fix) |
| [#2868](https://github.com/HKUDS/nanobot/issues/2868) | 🟠 High | exec tool forced to use bash on Windows | — | Closed (regression from be6063a) |
| [#2559](https://github.com/HKUDS/nanobot/issues/2559) | 🟠 High | Telegram streaming fails with Message_too_long | — | Closed (needs fix) |
| [#1313](https://github.com/HKUDS/nanobot/issues/1313) | 🟠 High | Moonshot Kimi reasoning model fails with missing reasoning_content | — | Closed (needs fix) |

### Medium Severity / Regressions

| Issue | Severity | Title | Notes |
|-------|----------|-------|-------|
| [#2185](https://github.com/HKUDS/nanobot/issues/2185) | 🟡 Medium | Gemini-3-flash-preview regression with Ollama | Provider abstraction fragility |
| [#2713](https://github.com/HKUDS/nanobot/issues/2713) | 🟡 Medium | Response speed slowed in v0.1.4.post6 (3min vs 1s) | Performance regression investigation needed |
| [#2857](https://github.com/HKUDS/nanobot/issues/2857) | 🟡 Medium | Version mismatch __init__.py (0.4.1) vs pyproject.toml (0.1.5) | Build/versioning hygiene |
| [#2757](https://github.com/HKUDS/nanobot/issues/2757) | 🟡 Medium | OpenAI provider sends max_tokens instead of max_completion_tokens | API compatibility |

### Note
Several bugs are marked "Closed" but appear unfixed in the data—likely resolved by workarounds or duplicates. Active fixes include PRs #3133 (Feishu streaming), #3141 (YAML parsing), and #3145 (cross-channel persistence).

---

## 6. Feature Requests & Roadmap Signals

### High-Impact Feature Requests (Open)

| Issue/PR | Title | Demand Signal | Likelihood of Inclusion |
|----------|-------|---------------|------------------------|
| [#2521](https://github.com/HKUDS/nanobot/pull/2521) | SelfTool v2 for agent self-evolution | Active PR, advanced stage | ✅ High (in review) |
| [#3142](https://github.com/HKUDS/nanobot/pull/3142) | Soft consolidation to _snip_history | Addresses #2984, critical pain point | ✅ High (in review) |
| [#2938](https://github.com/HKUDS/nanobot/pull/2938) | File uploads (base64 + multipart) | Major API enhancement | ✅ High (in review) |
| [#3135](https://github.com/HKUDS/nanobot/pull/3135) | Runtime model switching via /model | User convenience, multi-model setups | ✅ High (in review) |
| [#2599](https://github.com/HKUDS/nanobot/issues/2599) | Official subagent config documentation | 2 comments, no PR yet | 🔶 Medium |
| [#2602](https://github.com/HKUDS/nanobot/issues/2602) | HTTP Streaming Channel for multi-tenant | 2 comments, architectural need | 🔶 Medium |

### User-Requested Features With Community Backing
- **Automatic Context Compression** (#2984): Users explicitly request summarization before hitting token limits
- **Multi-tenant HTTP Streaming** (#2602): Production deployment need for per-user isolation
- **Subagent Support** (#2599): No official documentation despite feature existence

---

## 7. User Feedback Summary

### Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Token bloat from heartbeats** | #2375: 560k tokens per heartbeat execution | High cost for scheduled task users |
| **Windows compatibility** | #2868: bash requirement breaks Windows exec tool | Blocks Windows deployments |
| **Ollama integration fragility** | #2570: 404 errors, #2185: model regressions | Hinders local LLM adoption |
| **Speed regression in post6** | #2713: 180x slowdown (1s → 3min) | Major UX degradation |
| **Context window limits** | #2984: no automatic compression | Forces manual management |
| **Feishu response loss** | #3133: 10-min card timeout causes silent drops | Reliability issue |

### Positive Signals

| Feedback | Source | Sentiment |
|----------|--------|-----------|
| Chinese DeepSeek tutorial contributed | #2714 | Community localization effort appreciated |
| Feature requests show ambitious use cases | #2602, #2599 | Users expanding beyond core use case |
| High PR activity | 37 open PRs | Strong development momentum |

### Dissatisfaction Themes
1. **Installation friction**: PIP install errors (#2925), uv cryptography failures (#3056), version mismatches (#2857)
2. **Provider compatibility**: Multiple issues with Ollama, DeepSeek env vars (#2849), custom Anthropic endpoints (#3095)
3. **Channel reliability**: Matrix broken (#1300), Feishu timeouts (#3133), Telegram streaming limits (#2559)

---

## 8. Backlog Watch

### Long-Unanswered Important Issues Needing Maintainer Attention

| Issue | Age | Title | Priority Reason |
|-------|-----|-------|-----------------|
| [#1300](https://github.com/HKUDS/nanobot/issues/1300) | ~46 days | Matrix channel does not work | Open since Feb 27, 9 comments, no resolution |
| [#2375](https://github.com/HKUDS/nanobot/issues/2375) | ~22 days | Heartbeat token bloat | Critical cost issue, marked closed but fix unclear |
| [#2828](https://github.com/HKUDS/nanobot/issues/2828) | ~9 days | DuckDuckGo hangs entire system | Critical stability, system-level crash |
| [#2868](https://github.com/HKUDS/nanobot/issues/2868) | ~8 days | Windows exec tool regression | Blocks Windows userbase |
| [#2185](https://github.com/HKUDS/nanobot/issues/2185) | ~28 days | Gemini regression with Ollama | Affects popular local model setup |
| [#2713](https://github.com/HKUDS/nanobot/issues/2713) | ~13 days | Performance regression post6 | Major UX degradation |

### Stale PRs Needing Review

| PR | Age | Title | Risk of Abandonment |
|----|-----|-------|---------------------|
| [#2521](https://github.com/HKUDS/nanobot/pull/2521) | ~19 days | SelfTool v2 | Low (active review) |
| [#2938](https://github.com/HKUDS/nanobot/pull/2938) | ~6 days | File upload support | Low (active development) |

---

## Summary Health Indicators

| Metric | Value | Assessment |
|--------|-------|------------|
| Issues closed (24h) | 48/67 (72%) | ✅ Healthy resolution rate |
| PRs merged (24h) | ~39/76 (51%) | ✅ Active development |
| Open critical bugs | 2-3 | ⚠️ Needs attention |
| Feature PRs in flight | 10+ | ✅ Rich pipeline |
| Average issue age (unresolved) | ~20-46 days

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest

**Date:** 2026-04-14  
**Data Source:** NousResearch/hermes-agent Issues & Pull Requests

---

## 1. Today's Overview

Hermes Agent shows **high activity with 28 open issues and 20 open PRs** on April 14, 2026. The project is actively addressing platform-specific bugs, with **DingTalk integration receiving the most attention** (5+ issues/PRs covering async handling, message parsing, and feature additions). Context compression tooling is evolving rapidly with 4 related PRs. Platform adapters for Slack, Matrix, and WeCom have reported issues, while the CLI has several config-loading bugs awaiting fixes. Overall health is moderate—active maintenance but multiple open bugs across integrations.

---

## 2. Releases

**No new releases today.**

---

## 3. Project Progress

### Merged/Closed PRs
| PR | Author | Status | Summary |
|---|---|---|---|
| [#7444](https://github.com/NousResearch/hermes-agent/pull/7444) | Hypn0sis | CLOSED | Fix opencode-zen model name + smart Discord threading |
| [#9643](https://github.com/NousResearch/hermes-agent/pull/9643) | wuming2007 | CLOSED | Fix CLI newline before closing stream box (CJK/emoji clipping) |
| [#8154](https://github.com/NousResearch/hermes-agent/pull/8154) | zhing2006 | CLOSED | Add git to Dockerfile apt dependencies |

### Active PRs (Notable)
| PR | Author | Summary |
|---|---|---|
| [#9670](https://github.com/NousResearch/hermes-agent/pull/9670) | kshitijk4poor | Fix update check cache invalidation on git pull |
| [#9658](https://github.com/NousResearch/hermes-agent/pull/9658) | supergera13 | Add CrofAI provider (GLM 5.1, Kimi K2.5, DeepSeek V3.2) |
| [#9667](https://github.com/NousResearch/hermes-agent/pull/9667) | vinsew | Progressive native streaming for WeCom |
| [#9657](https://github.com/NousResearch/hermes-agent/pull/9657) | flobo3 | Honor root-level personalities from config.yaml |
| [#9655](https://github.com/NousResearch/hermes-agent/pull/9655) | flobo3 | Honor root-level prefill_messages_file from config.yaml |

---

## 4. Community Hot Topics

### Most Active Discussions

**1. DingTalk Integration Overhaul** (5+ related items)
- [#8811](https://github.com/NousResearch/hermes-agent/issues/8811) - Async Handling, Message Parsing & Domain Validation (3 comments)
- [#9149](https://github.com/NousResearch/hermes-agent/issues/9149) - Add file/image sending support + 5 bug fixes (1 comment)
- [#8816](https://github.com/NousResearch/hermes-agent/issues/8816) - Code Review Request for PR #8345 (2 comments, 1 👍)
- [#5037](https://github.com/NousResearch/hermes-agent/issues/5037) - Multiple critical bugs preventing message processing (3 comments)
- [#7005](https://github.com/NousResearch/hermes-agent/issues/7005) - Setup warning: "No messaging platforms enabled" (4 comments) **[CLOSED]**

**Underlying Need:** Robust cross-platform messaging support with proper async streaming, file/image handling, and reliable bot connectivity.

**2. Context Compression Improvements** (4 PRs, tracking issue [#9666](https://github.com/NousResearch/hermes-agent/issues/9666))
- Structured action-log summary format
- Preserve user messages verbatim during compression
- Smart tool output collapse during pruning
- User need: Better information retention in long conversations

**3. CLI Configuration Loading Bugs**
- [#9636](https://github.com/NousResearch/hermes-agent/issues/9636) - Custom personalities at config root ignored
- [#9635](https://github.com/NousResearch/hermes-agent/issues/9635) - CLI ignores root-level prefill_messages_file
- Both have corresponding fix PRs awaiting merge

---

## 5. Bugs & Stability

### High Severity
| Issue | Platform | Description | Fix Available? |
|---|---|---|---|
| [#7914](https://github.com/NousResearch/hermes-agent/issues/7914) | Matrix | Gateway sends but doesn't receive/respond to messages (mautrix client issue) | No |
| [#9647](https://github.com/NousResearch/hermes-agent/issues/9647) | Core | delegate_task ignores max_api_retries config, uses hardcoded default of 3 | No |
| [#5037](https://github.com/NousResearch/hermes-agent/issues/5037) | DingTalk | Stream client wrapped incorrectly, message parsing fails | PR #8345 pending |
| [#9631](https://github.com/NousResearch/hermes-agent/issues/9631) | Core | Iterative context compaction keeps old topics alive, overrides active topic | No |

### Medium Severity
| Issue | Platform | Description | Fix Available? |
|---|---|---|---|
| [#7143](https://github.com/NousResearch/hermes-agent/issues/7143) | Slack | Group messages not sending, private chats work | No |
| [#6572](https://github.com/NousResearch/hermes-agent/issues/6572) | Slack | Unhandled reaction_added warnings in logs | No |
| [#8293](https://github.com/NousResearch/hermes-agent/issues/8293) | Core | Symlinked skills under ~/.hermes/skills omitted from discovery | No |
| [#9633](https://github.com/NousResearch/hermes-agent/issues/9633) | Windows | Read tool fails with UnicodeDecodeError on Windows-created files | PR [#9662](https://github.com/NousResearch/hermes-agent/pull/9662) open |
| [#9641](https://github.com/NousResearch/hermes-agent/issues/9641) | Memory | Wrong description for ByteRover (says "requires API key" but optional) | PR [#9660](https://github.com/NousResearch/hermes-agent/pull/9660) open |
| [#6621](https://github.com/NousResearch/hermes-agent/issues/6621) | Tools | mixture_of_agents has dead REFERENCE_MODEL + max_tokens never reaches API | No |

### Low Severity / User Experience
| Issue | Description | Fix Available? |
|---|---|---|
| [#9571](https://github.com/NousResearch/hermes-agent/issues/9571) | GLM 5.1 reasoning content truncated (max_tokens=30) | No |
| [#5109](https://github.com/NousResearch/hermes-agent/issues/5109) | launchd gateway refresh can start second local gateway on macOS | No |
| [#9659](https://github.com/NousResearch/hermes-agent/issues/9659) | launchd KeepAlive uses SuccessfulExit-based restart (should be unconditional) | No |
| [#9027](https://github.com/NousResearch/hermes-agent/issues/9027) | Security audit: high severity in basic-ftp package | No |

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests
| Issue | Request | Demand Signal |
|---|---|---|
| [#9645](https://github.com/NousResearch/hermes-agent/issues/9645) | Optional, configurable proactive check-ins | New (0 comments) |
| [#9644](https://github.com/NousResearch/hermes-agent/issues/9644) | Provider/model selection for Media Creation (image/sound/video) | New (0 comments) |
| [#9656](https://github.com/NousResearch/hermes-agent/issues/9656) | Echo voice message transcript back to user for verification | New (0 comments) |
| [#9628](https://github.com/NousResearch/hermes-agent/issues/9628) | Configurable message timestamp prefix to prevent temporal drift | New (0 comments) |
| [#9431](https://github.com/NousResearch/hermes-agent/issues/9431) | Add qrcode to WeChat (Weixin) optional dependencies | 1 comment |

### Likely Near-Term Additions
- **CrofAI provider support** (PR [#9658](https://github.com/NousResearch/hermes-agent/pull/9658)) — adds GLM 5.1, Kimi K2.5, DeepSeek V3.2
- **WeCom native streaming** (PR [#9667](https://github.com/NousResearch/hermes-agent/pull/9667)) — word-by-word replies
- **DingTalk file/image sending** (Issue [#9149](https://github.com/NousResearch/hermes-agent/issues/9149))

---

## 7. User Feedback Summary

### Pain Points
1. **Platform reliability:** Multiple users report DingTalk, Matrix, and Slack adapters failing to receive/process messages — affects core functionality trust
2. **Config confusion:** Users report personalities and prefill files silently ignored depending on whether using CLI vs gateway — configuration UX is inconsistent
3. **Long session drift:** In multi-day sessions, agents lose accurate date/time sense (Issue [#9628](https://github.com/NousResearch/hermes-agent/issues/9628))
4. **Windows compatibility:** File read errors on Windows-created files (Issue [#9633](https://github.com/NousResearch/hermes-agent/issues/9633))
5. **Subagent retry inflexibility:** Users with unstable WiFi cannot increase max_api_retries for subagents (Issue [#9647](https://github.com/NousResearch/hermes-agent/issues/9647))

### Positive Signals
- One-click installation attempted (Issue [#7005](https://github.com/NousResearch/hermes-agent/issues/7005) — now closed, indicating resolution)
- Active community support group forming (Issue [#9669](https://github.com/NousResearch/hermes-agent/issues/9669))
- Quick turnaround on some fixes (CJK/emoji UI fix closed same day)

---

## 8. Backlog Watch

### Long-Unanswered / High-Impact Items Needing Maintainer Attention

| Issue | Age | Priority | Description |
|---|---|---|---|
| [#5037](https://github.com/NousResearch/hermes-agent/issues/5037) | ~10 days | **Critical** | DingTalk adapter critical bugs — affects Chinese user base |
| [#7914](https://github.com/NousResearch/hermes-agent/issues/7914) | ~3 days | **High** | Matrix gateway receive broken — no workaround |
| [#6621](https://github.com/NousResearch/hermes-agent/issues/6621) | ~5 days | **Medium** | mixture_of_agents broken for fresh OpenRouter setups |
| [#8293](https://github.com/NousResearch/hermes-agent/issues/8293) | ~2 days | **Medium** | Symlinked skills discovery broken — affects skill development |
| [#5109](https://github.com/NousResearch/hermes-agent/issues/5109) | ~10 days | **Medium** | macOS launchd double-start issue |
| [#9027](https://github.com/NousResearch/hermes-agent/issues/9027) | ~1 day | **Security** | High severity basic-ftp vulnerability pending remediation |

### PRs Awaiting Review
| PR | Age | Description |
|---|---|---|
| [#9657](https://github.com/NousResearch/hermes-agent/pull/9657) | New | CLI config root personalities fix |
| [#9655](https://github.com/NousResearch/hermes-agent/pull/9655) | New | CLI config root prefill_messages_file fix |
| [#9662](https://github.com/NousResearch/hermes-agent/pull/9662) | New | Windows UnicodeDecodeError fix |
| [#9658](https://github.com/NousResearch/hermes-agent/pull/9658) | New | CrofAI provider addition |

---

*End of Digest*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-14

## 1. Today's Overview

PicoClaw is maintaining high activity with **46 PRs and 11 Issues** updated in the last 24 hours, signaling intense development momentum. The project shipped a **nightly build (v0.2.6-nightly.20260414.f82fe5a2)** with a full changelog available. Notably, **16 PRs were merged or closed**, indicating substantial pull-through of ongoing work. The issue queue remains entirely open (no closures), suggesting community-reported items are being worked on but not yet resolved. Key themes today include multi-channel improvements (Mattermost, Feishu, WeChat), security hardening (WebSocket third-party access, Agent Shield), bug fixes for cron/scheduling and OpenWrt compatibility, and enhancements to the memory/benchmark system.

---

## 2. Releases

| Release | Version | Type | Notes |
|---------|---------|------|-------|
| **Nightly Build** | `v0.2.6-nightly.20260414.f82fe5a2` | Automated / Unstable | Published 2026-04-14. Full changelog: [compare/v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main). Users are cautioned against production use. |

> No official stable release today. The nightly captures all recent merged work.

---

## 3. Project Progress

### Merged / Closed PRs (16 total)

| # | Title | Domain | Author | Status |
|---|-------|--------|--------|--------|
| [#2521](https://github.com/sipeed/picoclaw/pull/2521) | chore: update WeChat QR code image | assets | BeaconCat | Closed |
| [#2518](https://github.com/sipeed/picoclaw/pull/2518) | docs: update wechat qrcode | docs | imguoguo | Closed |
| [#2516](https://github.com/sipeed/picoclaw/pull/2516) | chore(ci): disable scheduled sync-rebase trigger | CI | sushi30 | Closed |
| [#2520](https://github.com/sipeed/picoclaw/pull/2520) | fix: resolve cron task creation and execution failures | tool/cron | neotty | Open |
| [#2512](https://github.com/sipeed/picoclaw/pull/2512) | ci: use pnpm/action-setup and sync README install steps | CI | wj-xiao | Closed |
| [#2489](https://github.com/sipeed/picoclaw/pull/2489) | fix(agent): reinitialize MCP and discovery tools after reload | agent/tool | afjcjsbx | Closed |
| [#2116](https://github.com/sipeed/picoclaw/pull/2116) | feat: add load_image tool for local file vision | tool | reusu | Closed |
| [#2249](https://github.com/sipeed/picoclaw/pull/2249) | Refactor inbound context routing session | channel/agent | alexhoshina | Closed |
| [#2442](https://github.com/sipeed/picoclaw/pull/2442) | refactor skills registries and add GitHub-backed skill discovery | skill/config | lxowalle | Closed |

> **Notable merged work**: MCP tool reinitialization after reload ([#2489](https://github.com/sipeed/picoclaw/pull/2489)), GitHub-backed skill discovery ([#2442](https://github.com/sipeed/picoclaw/pull/2442)), local image vision tool ([#2116](https://github.com/sipeed/picoclaw/pull/2116)), inbound routing session refactor ([#2249](https://github.com/sipeed/picoclaw/pull/2249)), and CI/pnpm improvements ([#2512](https://github.com/sipeed/picoclaw/pull/2512)).

---

## 4. Community Hot Topics

### Most Active Issues (by comments & reactions)

| # | Title | Domain | Comments | 👍 | Link |
|---|-------|--------|----------|-----|------|
| **#806** | [Feature]: Add webUI support (Refactoring now) | roadmap/enhancement | 8 | 8 | [Issue #806](https://github.com/sipeed/picoclaw/issues/806) |
| **#2148** | Phase 2 Implementation Plan: Agent Discovery → Delegation | agent/roadmap | 3 | 0 | [Issue #2148](https://github.com/sipeed/picoclaw/issues/2148) |
| **#1042** | [BUG] exec工具的guardCommand方法问题 | tool/bug | 3 | 0 | [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) |

**Analysis:**
- **#806 (WebUI)**: The highest-engagement issue with 8 comments and 8 upvotes. Users strongly desire a browser-based UI to complement the existing TUI, lowering barriers for non-technical users. This is a strategic roadmap item with active refactoring underway.
- **#2148 (Agent Discovery → Delegation)**: Tracks Phase 2 of a multi-phase agent architecture plan, indicating maturing multi-agent orchestration goals.
- **#1042 (exec guardCommand bug)**: Reports false-positive path validation blocking legitimate commands (e.g., `curl -s "wttr.in/Beijing?T"`), indicating the safety guard's regex matching is too aggressive for URLs containing `..` patterns.

### Most Active PRs (by attention)

| # | Title | Domain | Key Insight |
|---|-------|--------|-------------|
| [#2522](https://github.com/sipeed/picoclaw/pull/2522) | fix(openai_compat): request stream usage | provider | Adds streaming `usage` support for OpenAI-compatible endpoints; aligns with prompt-cache-key gating. |
| [#2484](https://github.com/sipeed/picoclaw/pull/2484) | membench: add LLM-as-Judge evaluation mode | provider | Enables semantic scoring via LLM for memory benchmarks, replacing near-zero token-overlap F1 scores. |
| [#2502](https://github.com/sipeed/picoclaw/pull/2502) | feat(agent): add /btw one-off side-question command | agent | Introduces a priority bypass command for immediate side-question responses without queuing. |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | Multi-User Support, Security Hardening, Skills whitelisting | multi | Large integration PR combining Agent Shield security suite with architectural stabilization. |
| [#2496](https://github.com/sipeed/picoclaw/pull/2496) | Add Intel OpenVINO Model Server support | provider | Adds OVMS support for local LLM inference on Intel CPU/GPU/NPU hardware. |
| [#1586](https://github.com/sipeed/picoclaw/pull/1586) | feat(channels): add Mattermost channel | channel | Adds Mattermost integration and hardens gateway stability for long-running sessions. |

---

## 5. Bugs & Stability

| # | Title | Domain | Severity | Fix PR? | Link |
|---|-------|--------|----------|---------|------|
| **#2519** | [Feature] Force setting the "workspace" to default directory | tool/config | **High** | None yet | [Issue #2519](https://github.com/sipeed/picoclaw/issues/2519) |
| **#2468** | [BUG] Scheduled Task Fails to Execute | cron | **High** | [#2520](https://github.com/sipeed/picoclaw/pull/2520) | [Issue #2468](https://github.com/sipeed/picoclaw/issues/2468) |
| **#2488** | [Bug] TCP connections fail on OpenWrt 23.05 (ARM64) | build/config | **High** | [#2514](https://github.com/sipeed/picoclaw/pull/2514) | [Issue #2488](https://github.com/sipeed/picoclaw/issues/2488) |
| **#2513** | [BUG] gateway start abnormal | channel | **Medium** | None yet | [Issue #2513](https://github.com/sipeed/picoclaw/issues/2513) |
| **#1042** | exec guardCommand false positives | tool | **Medium** | None yet | [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) |

**Key Observations:**
- **#2519** is marked as a Feature request but describes a critical stability issue: repeated "Command blocked by safety guard" errors when operations access paths outside workspace (e.g., `/tmp`), generating hundreds of error lines and degrading system performance.
- **#2468** cron scheduling failures have an **active fix PR (#2520)** targeting both task creation and execution.
- **#2488** OpenWrt 23.05 dual-stack binding failure is being addressed by **PR #2514**, which adds `-host`/`--host` flags and environment variable overrides.
- The exec tool's `guardCommand` method (**#1042**) is a known false-positive issue affecting legitimate URL-based commands.

---

## 6. Feature Requests & Roadmap Signals

| # | Title | Domain | Signals | Link |
|---|-------|--------|---------|------|
| **#806** | Add WebUI support | roadmap | 8 👍, 8 comments — highest community demand | [Issue #806](https://github.com/sipeed/picoclaw/issues/806) |
| **#2499** | Secure third-party Pico WS access + versioned compatibility policy | channel/config | External integration demand | [Issue #2499](https://github.com/sipeed/picoclaw/issues/2499) |
| **#2515** | Robust memory system with mem0, Supermemory, HydraDB integrations | provider | Memory infrastructure expansion | [Issue #2515](https://github.com/sipeed/picoclaw/issues/2515) |
| **#2493** | Allow Multiple Feishu Applications via Separate Config Directories | channel/config | Multi-tenant/channel demand | [Issue #2499](https://github.com/sipeed/picoclaw/issues/2499) |
| **#2506** | Existing CLA is irrelevant (SAP mismatch) | governance | Legal/compliance flag | [Issue #2506](https://github.com/sipeed/picoclaw/issues/2506) |

**Prediction for Next Version (v0.2.7 or next nightly):**
Based on active PRs and issue momentum, likely inclusions:
- **Cron task fix** (PR #2520) — high priority bug fix
- **OpenWrt host binding** (PR #2514) — platform compatibility
- **Parallel agent loop support** (PR #2503) — architectural enhancement
- **Mattermost channel** (PR #1586) — expanding multi-channel support
- **LLM-as-Judge for membench** (PR #2484) — evaluation tooling
- **Intel OpenVINO support** (PR #2496) — local inference expansion

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Workspace boundary violations** | #2519 reports hundreds of "Command blocked by safety guard" errors when accessing `/tmp` or external paths; affects routine operations like data queries | High |
| **Cron/scheduling failures** | #2468 — "scheduling command execution is restricted to internal channels" error prevents scheduled task execution | High |
| **Platform compatibility (OpenWrt)** | #2488 — TCP connection failures on ARM64 OpenWrt 23.05, affecting router deployments | High |
| **exec tool path validation too aggressive** | #1042 — URLs containing `..` (e.g., `wttr.in/Beijing`) are falsely flagged as path escapes | Medium |
| **CLA mismatch** | #2506 — current CLA references "SAP" instead of the PicoClaw project, potentially blocking legitimate contributors | Process |

### Use Cases & Satisfaction Signals

- **Multi-channel integration** is a clear demand: users want Mattermost (#1586), Feishu multi-app (#2493), and secure WebSocket third-party access (#2499).
- **Local AI inference** interest is growing with Intel OpenVINO support (#2496).
- **Security hardening** is well-received, as seen in the Agent Shield PR (#2313) and WebSocket access control discussions.
- **Skill registry improvements** (GitHub-backed discovery, #2442 merged) address community requests for easier skill management.

---

## 8. Backlog Watch

| # | Title | Age | Status | Concern | Link |
|---|-------|-----|--------|---------|------|
| **#806** | Add WebUI support | ~47 days (since 2026-02-26) | Open / In Progress | Long-standing roadmap item with refactoring underway; maintainer attention needed to keep momentum | [Issue #806](https://github.com/sipeed/picoclaw/issues/806) |
| **#2148** | Phase 2: Agent Discovery → Delegation | ~16 days | Open | Tracks multi-agent orchestration; needs phased review and approval | [Issue #2148](https://github.com/sipeed/picoclaw/issues/2148) |
| **#1586** | Add Mattermost channel | ~30 days | Open PR | Large PR adding Mattermost + gateway hardening; needs thorough review | [PR #1586](https://github.com/sipeed/picoclaw/pull/1586) |
| **#2313** | Multi-User Support, Security Hardening, Skills whitelisting | ~11 days | Open PR | Large architectural PR; needs security audit and staged review | [PR #2313](https://github.com/sipeed/picoclaw/pull/2313) |
| **#2506** | CLA references SAP (not PicoClaw) | 1 day | Open | Legal issue blocking contributors; needs project legal clarification | [Issue #2506](https://github.com/sipeed/picoclaw/issues/2506) |
| **#1042** | exec guardCommand false positives | ~41 days | Open | Long-standing tool bug; no fix PR yet | [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) |

> **Maintainer Action Recommended**: #2506 (CLA) and #1042 (exec tool) have been open for extended periods without PRs. Prioritizing these would improve contributor experience and tool reliability.

---

*Digest generated for PicoClaw (github.com/sipeed/picoclaw) — 2026-04-14. Data reflects the last 24 hours of activity.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-14

## 1. Today's Overview

IronClaw continues active development with substantial cross-component work. The project processed 50 issues and 50 PRs in the last 24 hours, with 6 PRs merged/closed and 8 issues resolved. Notable focus areas include UX improvements for non-technical users (Issue #1852), multi-line TUI support (PR #2449), and critical bug fixes around OAuth integrations and agent stability. The community is actively reporting staging-environment issues, suggesting increased adoption of the hosted-staging environment. No new releases were published today, indicating the project is in a pre-release development sprint.

---

## 2. Releases

**No new releases today.** The project last tagged a release prior to this reporting period. Several PRs are staged for promotion (PR #2455), suggesting a release may be imminent.

---

## 3. Project Progress

### Merged/Closed PRs (Today)

| PR | Title | Scope | Notes |
|----|-------|-------|-------|
| [#1819](https://github.com/nearai/ironclaw/pull/1819) | fix: image generation with nearai models | agent, channel/web | Fixed `/v1/v1/...` URL construction, switched fallback model to `black-forest-labs/FLUX.2-klein-4B` |
| [#1676](https://github.com/nearai/ironclaw/issues/1676) | [bug] Still http tool routine has error! | telegram | Closed after 19 days; Telegram bot HTTP polling resolved |
| [#1673](https://github.com/nearai/ironclaw/issues/1673) | [bug] Feishu/Lark Channel Stuck | channel/wasm | Closed; pairing code prompt issue resolved |
| [#76](https://github.com/nearai/ironclaw/issues/76) | feat: Discord channel integration | channel | Closed; feature parity tracking |

### Active Development (Notable PRs)

| PR | Title | Risk | Key Changes |
|----|-------|------|-------------|
| [#2459](https://github.com/nearai/ironclaw/pull/2459) | feat(ci): AI-first CI workflows | Medium | 4 new GitHub Actions workflows: AI review, interaction, health monitoring, smoke tests |
| [#2449](https://github.com/nearai/ironclaw/pull/2449) | feat(tui): add multiline support | Low | Shift+Enter, Alt+Enter, Ctrl+J for multi-line; ctrl+c clears input first |
| [#2434](https://github.com/nearai/ironclaw/pull/2434) | fix(gateway): persist user messages at send time | Medium | User messages now persist immediately before 202 response, fixing history gaps |
| [#2315](https://github.com/nearai/ironclaw/pull/2315) | fix(ux): actionable auth errors and improved CLI help | Low | Provider-specific guidance in auth errors, new `ironclaw onboard --step provider` |
| [#2312](https://github.com/nearai/ironclaw/pull/2312) | fix(secrets): auto-generate master key | High | Fallback file-based master key when keychain unavailable (headless Linux) |
| [#2313](https://github.com/nearai/ironclaw/pull/2313) | fix(config): env vars take precedence over DB | High | 12-factor compliance: env > DB > default for LLM settings |
| [#2381](https://github.com/nearai/ironclaw/pull/2381) | fix(security): remove cross-tenant credential fallbacks | Medium | Resolves #2068, #2069, #2100; hardcoded `config.owner_id` replaced |
| [#2168](https://github.com/nearai/ironclaw/pull/2168) | feat(credentials): path-based credential matching | High | Per-endpoint auth with `path_patterns` in CredentialMapping |
| [#2454](https://github.com/nearai/ironclaw/pull/2454) | fix(patch): feishu pairing | Medium | Request-scoped `user_id` for secrets resolution, removing cross-user scope mistakes |
| [#2457](https://github.com/nearai/ironclaw/pull/2457) | fix(oidc): make audience claim optional | High | Fixes OIDC-proxying load balancer deployments broken by #1798 |
| [#2458](https://github.com/nearai/ironclaw/pull/2458) | fix: restore issue-2402 v2 gate resume | Medium | Regression fix for auth/external gate resumes and action alias consistency |

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

1. **[#1676](https://github.com/nearai/ironclaw/issues/1676)** — [CLOSED] Telegram bot HTTP tool error (10 comments)
   - **Topic:** Telegram bot fails to auto-poll for messages via HTTP tool
   - **Underlying need:** Reliable Telegram integration for production use; users expect OpenClaw parity
   - **Status:** Resolved; indicates ongoing Telegram integration improvements

2. **[#2229](https://github.com/nearai/ironclaw/issues/2229)** — Google Sheets OAuth blocked (6 comments)
   - **Topic:** Error 400 `invalid_request` during Google Sheets OAuth flow
   - **Underlying need:** Native Google Suite integration for productivity workflows
   - **Severity:** P2, QA-verified bug

3. **[#2230](https://github.com/nearai/ironclaw/issues/2230)** — Twitter/X MCP unavailable (4 comments)
   - **Topic:** MCP requires manual browser cookie extraction; no OAuth support
   - **Underlying need:** Seamless Twitter/X integration for content monitoring
   - **Severity:** P2, QA-verified bug

4. **[#1852](https://github.com/nearai/ironclaw/issues/1852)** — Usability for non-technical users (4 comments)
   - **Topic:** Configuration is too complex for average users
   - **Underlying need:** Broad adoption requires simplified onboarding and UX
   - **Related:** PR #2315 addresses this with improved auth errors and CLI help

5. **[#846](https://github.com/nearai/ironclaw/issues/846)** — `onboard` fails with DB error (4 comments)
   - **Topic:** Initial setup fails at final step with PostgreSQL error
   - **Underlying need:** Frictionless first-run experience

### Most Active PRs (by discussion/complexity)

1. **[#2459](https://github.com/nearai/ironclaw/pull/2459)** — AI-first CI workflows (XL size)
   - **Community interest:** Automated AI review on every PR, health monitoring, smoke tests
   - **Impact:** Significant improvement to development velocity and code quality

2. **[#2421](https://github.com/nearai/ironclaw/pull/2421)** — Scope grants for cross-user access (XL size, DB migration)
   - **Topic:** DB-backed mechanism for sharing workspace access between users
   - **Impact:** Enables "household" shared data patterns

---

## 5. Bugs & Stability

### Critical Bugs (P1)

| Issue | Title | Severity | Status | Fix PR |
|-------|-------|----------|--------|--------|
| [#2437](https://github.com/nearai/ironclaw/issues/2437) | `nearai_chat` does not normalize tool schemas | P1 | Open (Apr 14) | None yet |

**Details:** When using `nearai_chat` with tools having `oneOf`/`anyOf`/`allOf`/`enum`/`not` schemas (e.g., GitHub tool), requests fail with HTTP 400: *"schema must have type 'object'"*.

### High-Priority Bugs (P2 / QA-verified)

| Issue | Title | Environment | Status | Fix PR |
|-------|-------|-------------|--------|--------|
| [#2229](https://github.com/nearai/ironclaw/issues/2229) | Google Sheets OAuth Error 400 | hosted-staging | Open | — |
| [#2230](https://github.com/nearai/ironclaw/issues/2230) | Twitter/X MCP unavailable | hosted-staging | Open | — |
| [#2233](https://github.com/nearai/ironclaw/issues/2233) | Telegram tool install — WASM artifact missing | hosted-staging | Open | — |
| [#2234](https://github.com/nearai/ironclaw/issues/2234) | MCP activation fails with "External service error" | hosted-staging | Open | — |
| [#2283](https://github.com/nearai/ironclaw/issues/2283) | Web UI does not support file uploads | hosted-staging | Open | — |
| [#2284](https://github.com/nearai/ironclaw/issues/2284) | Staging agent instance dies after 1 hour | hosted-staging | Open | — |
| [#2232](https://github.com/nearai/ironclaw/issues/2232) | Routines dashboard shows wrong count | hosted-staging | Open | — |
| [#2406](https://github.com/nearai/ironclaw/issues/2406) | Pages Unresponsive dialog and black screen | hosted-staging | Open | — |
| [#2447](https://github.com/nearai/ironclaw/issues/2447) | Engine v2 should require real tool evidence | Open | Open | — |

**Pattern:** Multiple P2 bugs are QA-verified on `hosted-staging` environment, suggesting the staging deployment has stability issues that may need infrastructure attention.

### Stability Improvements Merged Today

- **[#1819](https://github.com/nearai/ironclaw/pull/1819)** — Image generation fixed (URL construction, model selection)
- **[#2379](https://github.com/nearai/ironclaw/pull/2379)** — MCP: normalize server names, fix UTF-8 truncation, skip auth when header set

---

## 6. Feature Requests & Roadmap Signals

### Top Feature Requests

| Issue | Title | Priority | Signals |
|-------|-------|----------|---------|
| [#84](https://github.com/nearai/ironclaw/issues/84) | Agent system advanced features (multi-agent, streaming, thinking modes) | P2-P3 | Feature parity tracking; indicates OpenClaw alignment goal |
| [#1609](https://github.com/nearai/ironclaw/issues/1609) | Admin management panel — web UI for users, workspaces, roles | P2 | Blocks non-technical admin operations |
| [#2360](https://github.com/nearai/ironclaw/issues/2360) | Built-in browser tool with chromiumoxide CDP | Open | Enables JS-rendered page interaction |
| [#30](https://github.com/nearai/ironclaw/issues/30) | Gateway System feature parity tracking | Ongoing | Discord, Slack, Teams integrations tracked |
| [#2023](https://github.com/nearai/ironclaw/issues/2023) | Kubernetes runtime support | Open | Community request for non-Docker isolation |

### Likely Near-Term Additions

Based on active PRs and issue trends:
1. **Multi-line TUI support** — PR #2449 is open with implementation
2. **Improved onboarding UX** — PR #2315 addresses Issue #1852
3. **Cross-user workspace sharing** — PR #2421 addresses this gap
4. **Path-based credential scoping** — PR #2168 is in review
5. **AI-first CI pipeline** — PR #2459 demonstrates commitment to automation

---

## 7. User Feedback Summary

### Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Telegram integration unreliable** | #1676 (10 comments, closed), #2233 | Users expect production-ready Telegram bot |
| **Non-technical user barriers** | #1852 (4 comments) | Configuration complexity limits adoption |
| **Onboarding DB failures** | #846 (4 comments) | New users cannot complete setup |
| **Image generation broken** | #1810, #2450 (image generation failures) | Key feature unusable for some models |
| **Staging environment instability** | 8+ QA-verified bugs on hosted-staging | Poor developer experience |
| **Google Suite integration incomplete** | #2229 | Blocks productivity workflows |

### Positive Signals

- **Rapid feature development:** Multi-line TUI requested and PR submitted same day (#2448 → #2449)
- **Security improvements:** Cross-tenant credential fixes (#2381) show security maturity
- **Documentation improvements:** PR #2426 adds Telegram open mode warnings to prevent misconfiguration

### Dissatisfaction Themes

1. **Integration fragility:** OAuth flows (Google Sheets, Twitter/X) failing in staging
2. **Platform limitations:** Docker-only isolation blocking Kubernetes adoption (#2023)
3. **Schema compatibility:** LLM provider schema differences causing tool failures (#2437)

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Title | Age | Comments | Priority | Action Needed |
|-------|-------|-----|----------|----------|---------------|
| [#84](https://github.com/nearai/ironclaw/issues/84) | Agent system advanced features | ~2 months | 3 | P2-P3 | Maintainer roadmap update |
| [#846](https://github.com/nearai/ironclaw/issues/846) | `onboard` fails with DB error | ~1 month | 4 | P1? | Needs triage/fix |
| [#1339](https://github.com/nearai/ironclaw/issues/1339) | ARMv7/Raspberry Pi compilation error | ~1 month | 1 | Open | Community platform support decision |
| [#1609](https://github.com/nearai/ironclaw/issues/1609) | Admin management panel | ~3 weeks | 2 | P2 | Needs scoping |
| [#2023](https://github.com/nearai/ironclaw/issues/2023) | Kubernetes runtime support | ~10 days | 1 | Open | Community request; no official response |

### Stalled PRs Needing Maintainer Attention

| PR | Title | Age | Risk | Blocking |
|----|-------|-----|------|----------|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | feat: add Aliyun Coding Plan support | ~25 days | Low | Aliyun provider integration |
| [#2421](https://github.com/nearai/ironclaw/pull/2421) | feat: scope grants for cross-user access | ~1 day | High | Shared workspace feature |

### Recommendations for Maintainers

1. **Prioritize P1 bug #2437** — `nearai_chat` schema normalization blocks GitHub MCP and similar tools
2. **Address staging stability** — 8+ concurrent QA-verified bugs indicates infrastructure debt
3. **Respond to #2023** — Kubernetes support question has been open 10 days without acknowledgment
4. **Close or stage #1446** — Aliyun provider PR has been idle for 25 days

---

*Digest generated from IronClaw GitHub data (nearai/ironclaw) for 2026-04-14. All GitHub links reference the official repository.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw Project Digest — 2026-04-14

## 1. Today's Overview

CoPaw (now branded as QwenPaw) experienced **very high activity** on April 14, 2026, with 47 issues and 44 PRs updated in the last 24 hours. Two new releases (v1.1.1 and v1.1.1-beta.2) shipped, introducing OpenRouter and OpenCode provider integrations. Community engagement remains strong, with the "Help Wanted" issue accumulating 56 comments and multiple migration-related questions surfacing around the CoPaw→QwenPaw transition. The project appears healthy overall, though several bugs introduced in v1.1.0 are generating reports, particularly around Windows installation, WeChat channel truncation, and session state corruption.

---

## 2. Releases

### v1.1.1 (latest stable)
**Key additions:**
- **OpenRouter Provider**: Built-in provider with model discovery, series browsing, and filtering by modality and pricing ([#1192](https://github.com/agentscope-ai/QwenPaw/pull/1192))
- **OpenCode Provider**: Built-in OpenAI-compatible OpenCode integration
- Release notes finalized in [PR #3383](https://github.com/agentscope-ai/QwenPaw/pull/3383)

### v1.1.1-beta.2
- Version bump commit; likely pre-release testing for additional fixes

**Migration Note**: Multiple issues ([#3288](https://github.com/agentscope-ai/QwenPaw/issues/3288), [#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309), [#3351](https://github.com/agentscope-ai/QwenPaw/issues/3351)) indicate the CoPaw→QwenPaw migration path is not yet fully smooth. Users report `WORKING_DIR` still pointing to `.copaw`, missing PATH updates on Windows, and dual-app confusion. A dedicated migration script/command is requested.

---

## 3. Project Progress

### Merged / Closed PRs Today (20 total)

| PR | Title | Impact |
|----|-------|--------|
| [#3292](https://github.com/agentscope-ai/QwenPaw/pull/3292) | Refactor multi-agent collaboration | Added `list_agents`, `chat_with_agent` tools; standardized agent escalation |
| [#3383](https://github.com/agentscope-ai/QwenPaw/pull/3383) | Update release note of v1.1.1 | Documentation |
| [#3379](https://github.com/agentscope-ai/QwenPaw/pull/3379) | Fix scheduled task 422 error | **Bug fix** — fixed form/backend validation mismatch in cron tasks |
| [#3295](https://github.com/agentscope-ai/QwenPaw/pull/3295) | Omit `tool_choice=auto` for vLLM | **Bug fix** — eliminates 400 errors on self-hosted vLLM endpoints |
| [#3372](https://github.com/agentscope-ai/QwenPaw/pull/3372) | Remove duplicated base64 data (Anthropic) | **Bug fix** — prevents max-bytes errors in multimodal contexts |
| [#3367](https://github.com/agentscope-ai/QwenPaw/pull/3367) | Fix Anthropic provider multimodal probe | **Bug fix** |
| [#3358](https://github.com/agentscope-ai/QwenPaw/pull/3358) | Support URLs for viewing media | **Feature** — `view_image`/`view_video` now handle online URLs directly |
| [#3359](https://github.com/agentscope-ai/QwenPaw/pull/3359) | Message normalization for model switching | **Feature** — better session continuity when switching models within same provider |

### Open PRs Under Active Review (24 total)

| PR | Title | Significance |
|----|-------|--------------|
| [#3386](https://github.com/agentscope-ai/QwenPaw/pull/3386) | **Perf: Application startup** | ⚡ Major: Reduces startup from ~4.5s to ~0.05s via lazy loading & parallel init |
| [#3385](https://github.com/agentscope-ai/QwenPaw/pull/3385) | Agent CLI & Local Agent Template | New extensible agent template system |
| [#3364](https://github.com/agentscope-ai/QwenPaw/pull/3364) | Mission Mode — autonomous iterative agent | Inspired by Ralph (MIT); for complex long-running tasks |
| [#3365](https://github.com/agentscope-ai/QwenPaw/pull/3365) | Agent Statistics page | Dashboard with trends, token counts, channel breakdown |
| [#3257](https://github.com/agentscope-ai/QwenPaw/pull/3257) | Render approve buttons for tool guard | UX improvement; clickable Confirm/Cancel instead of `/approve` command |
| [#3348](https://github.com/agentscope-ai/QwenPaw/pull/3348) | Clear chat history on `/clear` | Fixes history persistence bug |
| [#3340](https://github.com/agentscope-ai/QwenPaw/pull/3340) | ACP-based external agent delegation | Real-time tool output plumbing |
| [#3371](https://github.com/agentscope-ai/QwenPaw/pull/3371) | `qwenpaw doctor` CLI | Diagnostic tool for config, channels, API reachability |
| [#3107](https://github.com/agentscope-ai/QwenPaw/pull/3107) | Fix tool call silent stop (qwen3-coder-plus) | Addresses model-specific ReAct loop exit bug |
| [#2177](https://github.com/agentscope-ai/QwenPaw/pull/2177) | Default memory summarization cron job | Auto-initializes daily memory cleanup |
| [#2506](https://github.com/agentscope-ai/QwenPaw/pull/2506) | Testing infrastructure for Channels | Contract & unit tests for 11 channel modules |

---

## 4. Community Hot Topics

### Most Active Issues

1. **#2291 — Help Wanted: Open Tasks** (56 comments, P0-P2 backlog)
   - Link: https://github.com/agentscope-ai/QwenPaw/issues/2291
   - Signals: Strong contributor interest; community wants structured contribution pathway

2. **#3288 — CoPaw→QwenPaw migration question** (32 comments)
   - Link: https://github.com/agentscope-ai/QwenPaw/issues/3288
   - Signals: Many users stuck mid-migration; need official migration guide and tooling

3. **#3356 — WORKING_DIR bug after upgrade** (11 comments)
   - Link: https://github.com/agentscope-ai/QwenPaw/issues/3356
   - Signals: Data written to `.copaw` instead of `.qwenpaw` after fresh install; breaks workspace isolation

4. **#2301 — Enhancement suggestions** (9 comments)
   - Link: https://github.com/agentscope-ai/QwenPaw/issues/2301
   - Signals: Users want: (a) one-click update, (b) UI approve buttons, (c) auto model fallback with ranking, (d) self-improvement loop, (e) cross-platform message sync, (f) Zhipu/Meituan provider support

5. **#3331 — Feishu WebSocket crash** (7 comments)
   - Link: https://github.com/agentscope-ai/QwenPaw/issues/3331
   - Signals: Cross-loop `RuntimeError` in multi-agent Feishu environments

**Underlying needs**: The community is clearly navigating a **major brand/version transition** (CoPaw→QwenPaw), generating significant support burden. Users want smoother migrations, better cross-platform UX, and smarter autonomous behaviors.

---

## 5. Bugs & Stability

**High Severity:**

| Issue | Title | Severity | Status | Fix PR |
|-------|-------|----------|--------|--------|
| [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) | WORKING_DIR points to `.copaw` after fresh QwenPaw install | **High** | Open | — |
| [#3312](https://github.com/agentscope-ai/QwenPaw/issues/3312) | macOS 1.1.0 install breaks both new and old apps | **High** | Open | — |
| [#3322](https://github.com/agentscope-ai/QwenPaw/issues/3322) | Windows Desktop blank screen / freeze after install | **High** | Open | — |
| [#3277](https://github.com/agentscope-ai/QwenPaw/issues/3277) | Session state JSON corruption → 422 errors | **High** | Open | [#3348](https://github.com/agentscope-ai/QwenPaw/pull/3348) (fix in review) |

**Medium Severity:**

| Issue | Title | Severity | Status | Fix PR |
|-------|-------|----------|--------|--------|
| [#3369](https://github.com/agentscope-ai/QwenPaw/issues/3369) | WeChat: text truncated after tool output | Medium | Open | — |
| [#2873](https://github.com/agentscope-ai/QwenPaw/issues/2873) | Feishu: `view_image` only returns filename, not pixel data | Medium | Open | — |
| [#3183](https://github.com/agentscope-ai/QwenPaw/issues/3183) | `execute_shell_command` reports "command not found" on Ubuntu | Medium | Open | — |
| [#3370](https://github.com/agentscope-ai/QwenPaw/issues/3370) | Local model connection test fails (missing `/model` endpoint) | Medium | Open | — |
| [#3342](https://github.com/agentscope-ai/QwenPaw/issues/3342) | Ollama model state not accurate after deletion | Medium | Closed | — |

**Low / Already Fixed:**
- [#3379](https://github.com/agentscope-ai/QwenPaw/pull/3379) — Scheduled task 422 error: **Fixed**
- [#3295](https://github.com/agentscope-ai/QwenPaw/pull/3295) — vLLM 400 error: **Fixed**

**Stability Assessment**: The v1.1.0/v1.1.1 release cycle introduced **multiple platform-specific regressions** (Windows blank screen, macOS dual-app breakage). These warrant priority attention before broader user adoption.

---

## 6. Feature Requests & Roadmap Signals

### Highly Requested Features (by comment engagement)

| Issue | Request | Likely Roadmap? |
|-------|---------|-----------------|
| [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) | One-click update, auto model fallback/ranking, self-improvement loop, cross-device message sync | Possible (matches [#3364 Mission Mode](#3364)) |
| [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) | File operation rollback / undo for workspace changes | Likely (task claimed under #2291) |
| [#2961](https://github.com/agentscope-ai/QwenPaw/issues/2961) | Skill folder/classification system | Possible |
| [#2657](https://github.com/agentscope-ai/QwenPaw/issues/2657) | Skill scoping: public vs. agent-shared visibility | Possible |
| [#3352](https://github.com/agentscope-ai/QwenPaw/issues/3352) | Reduce startup delay (3-5s → faster) | **Confirmed** by [#3386](https://github.com/agentscope-ai/QwenPaw/pull/3386) |
| [#3338](https://github.com/agentscope-ai/QwenPaw/issues/3338) | Don't show error when retry limit reached | Possible |
| [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) | Optimize scroll performance in long conversations | Needs triage |
| [#3293](https://github.com/agentscope-ai/QwenPaw/issues/3293) | Voice skill response option for channels | Speculative |

**Roadmap Prediction**: The open PRs strongly hint at v1.2.0 themes:
- **Startup performance** ([#3386](https://github.com/agentscope-ai/QwenPaw/pull/3386))
- **Autonomous mission mode** ([#3364](https://github.com/agentscope-ai/QwenPaw/pull/3364))
- **Statistics dashboard** ([#3365](https://github.com/agentscope-ai/QwenPaw/pull/3365))
- **File rollback** ([#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590))

---

## 7. User Feedback Summary

### Pain Points
1. **Migration confusion**: Users unclear on CoPaw vs. QwenPaw distinction; data paths not migrated automatically ([#3288](https://github.com/agentscope-ai/QwenPaw/issues/3288), [#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309), [#3351](https://github.com/agentscope-ai/QwenPaw/issues/3351))
2. **Windows installation issues**: Security warnings on unsigned installers ([#3314](https://github.com/agentscope-ai/QwenPaw/issues/3314)), blank screens post-install ([#3322](https://github.com/agentscope-ai/QwenPaw/issues/3322))
3. **Long conversation lag**: UI scroll performance degrades after ~200 turns ([#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350))
4. **Session state corruption**: Concurrent writes corrupt JSON → permanently broken sessions ([#3277](https://github.com/agentscope-ai/QwenPaw/issues/3277))
5. **WeChat truncation**: Only tool output shown, no following text ([#3369](https://github.com/agentscope-ai/QwenPaw/issues/3369))

### Positive Signals
- Community contribution culture is healthy (56 comments on #2291, multiple first-time contributors)
- Feature additions like OpenRouter provider ([#1192](https://github.com/agentscope-ai/QwenPaw/pull/1192)) and URL-based media viewing ([#3358](https://github.com/agentscope-ai/QwenPaw/pull/3358)) are well-received
- Performance PR ([#3386](https://github.com/agentscope-ai/QwenPaw/pull/3386)) directly addresses a user-reported pain point ([#3352](https://github.com/agentscope-ai/QwenPaw/issues/3352))

---

## 8. Backlog Watch

These issues are open, unanswered or long-running and may need maintainer attention:

| Issue | Title | Age | Priority |
|-------|-------|-----|----------|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | Help Wanted: Open Tasks | ~20 days | High (community coordination) |
| [#352](https://github.com/agentscope-ai/QwenPaw/issues/352) | User-dimension memory isolation | ~43 days | Medium |
| [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) | File operation rollback | ~15 days | Medium |
| [#3351](https://github.com/agentscope-ai/QwenPaw/issues/3351) | Migration script request | <1 day | **High** (trending) |
| [#3377](https://github.com/agentscope-ai/QwenPaw/issues/3377) | Remove mandatory `/model` endpoint test | <1

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-14

## 1. Today's Overview

ZeroClaw (zeroclaw-labs/zeroclaw) shows **very high activity** on 2026-04-14, with 50 issues and 50 PRs updated in the last 24 hours. No releases were published today. The project's issue tracker reflects intense development focus on stability (multiple S0/S1 bugs filed), new feature development across providers and channels, and architectural work on the microkernel plugin system. The PR queue contains 42 open items with 8 merged/closed, indicating healthy code review throughput. Notably, several PRs relate to fixes for recently shipped features (streaming, Matrix, config schema versioning).

---

## 2. Releases

**No new releases today.**

---

## 3. Project Progress

### Merged/Closed PRs Today (8 total)

| PR | Author | Focus |
|----|--------|-------|
| [#5667](https://github.com/zeroclaw-labs/zeroclaw/pull/5667) | markuman | OpenRouter streaming support + Nextcloud Talk draft-update |
| [#5167](https://github.com/zeroclaw-labs/zeroclaw/pull/5167) | singlerider | Session integrity, streaming refactor, history pruning |
| [#5291](https://github.com/zeroclaw-labs/zeroclaw/pull/5291) | 52sanmao | Gateway `/api/channels` for dashboard channel detail |
| [#5166](https://github.com/zeroclaw-labs/zeroclaw/pull/5166) | singlerider | Matrix mention_only filtering, media handling, onboarding |
| [#5727](https://github.com/zeroclaw-labs/zeroclaw/pull/5727) | singlerider | Matrix encrypted media download + outbound attachment support |
| [#5724](https://github.com/zeroclaw-labs/zeroclaw/pull/5724) | micookie | Web theme mode switch (dark/light/oled) fixes |
| [#5552](https://github.com/zeroclaw-labs/zeroclaw/pull/5552) | akhilesharora | Container-aware URLs for local AI providers (Ollama, llama.cpp) |
| [#5725](https://github.com/zeroclaw-labs/zeroclaw/pull/5725) | perlowja | Skills `allow_scripts` passthrough fix |

**Key advancements:**
- OpenRouter provider now supports streaming (previously broken since `supports_streaming()` returned false)
- Session handling stabilised with history pruning fixes and streaming refactor
- Matrix channel encrypted rooms now functional for media
- Docker/container deployments now work correctly with local AI providers

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Author | Comments | Topic |
|-------|--------|----------|-------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | loveholly | 11 | **[S1] Web dashboard not available** — Tauri desktop app and web UI both show "Web dashboard not available. Build it with: cd web && npm ci && npm run build" |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | mastwet | 6 | **[Enhancement] Better logo design request** — Community interest in revamping ZeroClaw branding |
| [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | LongCHN | 5 | **[S2] Duplicate consecutive assistant messages** when model returns narration + tool calls |
| [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | bioinformatist | 5 | **Telegram voice message transcription** — Feature gap vs TypeScript OpenClaw; requests native support |
| [#5586](https://github.com/zeroclaw-labs/zeroclaw/issues/5586) | singlerider | 3 | **Phase 1 D4: WIT interface files** for Tool and Channel plugin contracts (microkernel architecture) |

**Analysis:** The web dashboard unavailability (#4866, 11 comments, S1 severity) is the most pressing community concern, indicating a broken first-run experience for new users. The Telegram voice transcription request (#5509) signals demand for feature parity with the TypeScript implementation. WIT interface work (#5586) reflects ongoing microkernel architecture progress.

---

## 5. Bugs & Stability

### Critical (S0) — Data Loss / Security Risk

| Issue | Author | Component | Status | PR Fix? |
|-------|--------|-----------|--------|---------|
| [#5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528) | vvmar | runtime/daemon | Email channel config improper logic | — |
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | Themoonshinesontheriver | runtime/daemon | Consecutive OOM in WSL2 | — |
| [#5537](https://github.com/zeroclaw-labs/zeroclaw/issues/5537) | zuozhehao | runtime/daemon | Persistent error loop (GPT file parsing) | — |
| [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) | bwnjnOEI | runtime/daemon | Hardcoded config paths in multi-instance deployments | — |
| [#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) | zuozhehao | runtime/daemon | Feishu responds even when mention_only enabled | — |

### Blocking (S1) — Workflow Blocked

| Issue | Author | Problem | PR Fix? |
|-------|--------|---------|---------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | loveholly | Web dashboard not available | — |
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | hvvvvvvv | Kimi-code provider 400 error (reasoning_content missing) | [#5606](https://github.com/zeroclaw-labs/zeroclaw/pull/5606) |
| [#5578](https://github.com/zeroclaw-labs/zeroclaw/issues/5578) | arloan | Cannot connect to local llama.cpp server | — |
| [#5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654) | dadapapapa | Encrypted config breaks Telegram token | — |

### Degraded (S2)

- [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) — Duplicate assistant messages (tool + narration)
- [#5670](https://github.com/zeroclaw-labs/zeroclaw/issues/5670) — Groq provider 400 error
- [#5634](https://github.com/zeroclaw-labs/zeroclaw/issues/5634) — Session not persisting despite `session_persistence = true`
- [#5556](https://github.com/zeroclaw-labs/zeroclaw/issues/5556) — Summarization timed out (60s limit with Ollama small models)

**Stability note:** Multiple S0/S1 bugs filed in the last 5 days suggest a period of heightened instability. The **llama.cpp server connectivity issue (#5578)** and **web dashboard availability (#4866)** are high-impact user experience blockers. PR #5606 directly addresses the Kimi-code provider issue.

---

## 6. Feature Requests & Roadmap Signals

### Community-Driven Feature Requests

| Issue | Author | Feature | Priority Signal |
|-------|--------|---------|-----------------|
| [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | bioinformatist | Telegram voice message transcription | 5 comments, Feature parity gap |
| [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) | nerdCopter | Clipboard paste & drag-drop images in Web Chat | UI enhancement |
| [#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) | ottogin | ANN index for SQLite memory vector search (replace O(n)) | Performance improvement |
| [#5502](https://github.com/zeroclaw-labs/zeroclaw/issues/5502) | Yanxingang | `allowed_tools` configuration option | DX improvement |
| [#5501](https://github.com/zeroclaw-labs/zeroclaw/issues/5501) | ilteoood | Manual cron trigger for testing | UX improvement |
| [#5447](https://github.com/zeroclaw-labs/zeroclaw/issues/5447) | jokermanfire | Crate split for compilation performance | Architectural |

### Architectural Work

| Issue | Author | Focus |
|-------|--------|-------|
| [#5586](https://github.com/zeroclaw-labs/zeroclaw/issues/5586) | singlerider | Phase 1 D4: WIT interface files (plugin contracts) |
| [#5617](https://github.com/zeroclaw-labs/zeroclaw/issues/5617) | singlerider | Phase 2 D5: Reduce core tools to 10-12 (microkernel) |
| [#5517](https://github.com/zeroclaw-labs/zeroclaw/pull/5517) | singlerider | Config schema versioning V1→V2 migration (open PR) |
| [#5168](https://github.com/zeroclaw-labs/zeroclaw/pull/5168) | singlerider | HMAC tool execution receipts for hallucination detection (high-risk PR) |

**Prediction:** Based on active PRs and issue trends, the next release likely includes: **config V2 migration**, **improved session handling**, **Matrix encrypted room support**, and **OpenRouter streaming**. Telegram voice transcription (#5509) and ANN vector search (#5570) may be scheduled for subsequent releases given architectural complexity.

---

## 7. User Feedback Summary

### Pain Points

1. **Broken first-run experience** — Web dashboard unavailability (#4866) causes immediate user friction; novice users cannot launch the app
2. **Compilation speed** — Developers report full recompilation even for single-line changes (#5575); proposal to split crates (#5447)
3. **Local LLM connectivity** — llama.cpp server setup fails silently after minutes of waiting (#5578)
4. **Memory crashes** — WSL2 users experiencing OOM kills (#5542); production stability concern
5. **Config path rigidity** — Multi-instance deployments hindered by hardcoded `~/.zeroclaw/` paths (#5605)

### Satisfaction Signals

- PR #5552 (container-aware URLs) and #5724 (theme switching) suggest responsiveness to developer/DX feedback
- Config schema versioning work (#5517) addresses long-standing ambiguity
- Matrix channel improvements (#5166, #5727) indicate commitment to encrypted-room users

---

## 8. Backlog Watch

### Long-Unanswered / Stalled Issues Requiring Maintainer Attention

| Issue | Age | Author | Topic | Notes |
|-------|-----|--------|-------|-------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | ~17 days | loveholly | Web dashboard unavailable (S1) | 11 comments, no PR fix yet |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | ~20 days | mastwet | Logo redesign request | 6 comments, low priority |
| [#4862](https://github.com/zeroclaw-labs/zeroclaw/issues/4862) | ~18 days | singlerider | gitignore schema files (S3, cosmetic) | Closed 2026-04-14 ✓ |
| [#5318](https://github.com/zeroclaw-labs/zeroclaw/issues/5318) | ~9 days | bincooo | stream_mode partial — block reasoning content | Chinese user; unclear acceptance criteria |
| [#5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356) | ~9 days | michidk | Canvas tool silent failure via channel servers | WebSocket clients not receiving frames |

**Priority review needed for:**
- **#4866** (web dashboard): User-impacting S1 with no assigned PR
- **#5578** (llama.cpp connectivity): S1 blocking local AI usage
- **#5600** (Kimi-code provider): S1 with existing PR #5606 — need review/merge

---

*Generated 2026-04-14 | Data source: zeroclaw-labs/zeroclaw GitHub repository*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/manelsen/agents-radar).*