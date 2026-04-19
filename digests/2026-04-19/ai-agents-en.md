# AI Agents Ecosystem Digest 2026-04-19

> Issues: 7 | PRs: 12 | Projects covered: 7 | Generated: 2026-04-19 01:36 UTC

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

**Date:** 2026-04-19  
**Repository:** [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. Today's Overview

NullClaw shows **high development activity** with 19 total updates in the last 24 hours (7 issues, 12 PRs). However, **no PRs were merged** during this period—all 12 PRs remain open, suggesting ongoing review cycles or pending CI/CD validation. The community is actively engaged with multiple contributors filing substantial feature PRs, particularly around tool customization, A2A protocol support, and skill management. No new releases were published today, and the project maintains a healthy pipeline of enhancements while addressing user-reported stability concerns.

---

## 2. Releases

**No new releases today.** The last release information was not provided in the dataset.

---

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. However, **12 open PRs** demonstrate active development across multiple domains:

| PR | Author | Domain | Description |
|---|---|---|---|
| [#844](https://github.com/nullclaw/nullclaw/pull/844) | manelsen | A2A Protocol | Forward skill tool-call progress hints to A2A stream |
| [#843](https://github.com/nullclaw/nullclaw/pull/843) | manelsen | Onboarding | Clear actionable message when KeyWriteFailed during config save |
| [#842](https://github.com/nullclaw/nullclaw/pull/842) | manelsen | Agent/Gateway | Add `--workspace` flag to override workspace directory |
| [#841](https://github.com/nullclaw/nullclaw/pull/841) | manelsen | Agent | Add `--skill` flag to activate skill at startup |
| [#840](https://github.com/nullclaw/nullclaw/pull/840) | manelsen | Skills | Support nested skill discovery in category subdirectories |
| [#838](https://github.com/nullclaw/nullclaw/pull/838) | manelsen | Matrix | Add pantalaimon E2EE proxy support |
| [#837](https://github.com/nullclaw/nullclaw/pull/837) | manelsen | Config | Support external `tool_customizations_file` |
| [#836](https://github.com/nullclaw/nullclaw/pull/836) | manelsen | Agent | Trigger-based tool prioritization |
| [#835](https://github.com/nullclaw/nullclaw/pull/835) | tools | Tools | Implement `system_prompt` and `enabled` overrides |
| [#834](https://github.com/nullclaw/nullclaw/pull/834) | manelsen | Config | Add tool customization config schema |
| [#770](https://github.com/nullclaw/nullclaw/pull/770) | vernonstinebaker | API | REST Admin API for runtime status, config, models, cron |
| [#411](https://github.com/nullclaw/nullclaw/pull/411) | qxo | Tools | Comprehensive tool customization system with trigger prioritization |

**Key theme:** Contributor **manelsen** is driving a major tool customization initiative across 8 related PRs.

---

## 4. Community Hot Topics

Ranked by engagement (comments):

| Issue | Title | Comments | Priority Need |
|---|---|---|---|
| [#354](https://github.com/nullclaw/nullclaw/issues/354) | Service stops working after Homebrew upgrade | 3 | **Critical** – Daemon breaks due to hardcoded Cellar path |
| [#821](https://github.com/nullclaw/nullclaw/issues/821) | `nullclaw version` shows "dev" instead of version | 3 | Build/Release process fix needed |
| [#376](https://github.com/nullclaw/nullclaw/issues/376) | DingTalk only supports sending, not receiving | 3 | Feature parity for bidirectional messaging |
| [#826](https://github.com/nullclaw/nullclaw/issues/826) | How to use nullclaw gateway with Tailscale? | 2 | Documentation request for Tailscale networking |
| [#665](https://github.com/nullclaw/nullclaw/issues/665) | Error: `error.NoResponseContent` crash | 2 | Stability issue on Windows assembly |
| [#623](https://github.com/nullclaw/nullclaw/issues/623) | Add ddgs option for web_search tool | 1 | Meta-search library integration request |
| [#408](https://github.com/nullclaw/nullclaw/issues/408) | Tool call JSON parsing breaks with colon extraction | 1 | Parser bug in tool name extraction |

**Underlying needs:**
- **Deployment reliability** (#354): Users upgrading via Homebrew expect seamless transitions
- **Configuration flexibility** (#826, #623): Users want integration with modern networking and search tools
- **Developer experience** (#821): Source builds should show meaningful version info

---

## 5. Bugs & Stability

| Issue | Severity | Status | Fix PR Available? |
|---|---|---|---|
| [#354](https://github.com/nullclaw/nullclaw/issues/354) – Hardcoded Cellar path breaks service after Homebrew upgrade | **HIGH** | Open | No |
| [#821](https://github.com/nullclaw/nullclaw/issues/821) – Version shows "dev" instead of semantic version | Medium | Closed | Resolved? |
| [#665](https://github.com/nullclaw/nullclaw/issues/665) – `Error.NoResponseContent` crash on Windows | Medium | Open | No |
| [#408](https://github.com/nullclaw/nullclaw/issues/408) – Colon incorrectly extracted as tool name in JSON parsing | Medium | Open | No |

**Note:** Issue #821 was closed on 2026-04-18 with 3 comments—likely resolved but resolution details not provided.

---

## 6. Feature Requests & Roadmap Signals

**High-value feature PRs** that may land in upcoming releases:

1. **Tool Customization System** ([#411](https://github.com/nullclaw/nullclaw/pull/411), [#834](https://github.com/nullclaw/nullclaw/pull/834), [#835](https://github.com/nullclaw/nullclaw/pull/835), [#836](https://github.com/nullclaw/nullclaw/pull/836), [#837](https://github.com/nullclaw/nullclaw/pull/837))  
   *Comprehensive overhaul of tool configuration with triggers, priorities, and parameter management—likely a major release feature.*

2. **REST Admin API** ([#770](https://github.com/nullclaw/nullclaw/pull/770))  
   *Adds `/api/` endpoints for runtime status, config reading, model listing, and cron management—enables lightweight clients and mobile integration.*

3. **A2A Protocol Progress Hints** ([#844](https://github.com/nullclaw/nullclaw/pull/844))  
   *Forward skill tool-call progress to A2A streams for real-time observability.*

4. **Skill System Enhancements** ([#840](https://github.com/nullclaw/nullclaw/pull/840), [#841](https://github.com/nullclaw/nullclaw/pull/841))  
   *Nested skill discovery and `--skill` CLI flag for improved skill management.*

5. **Matrix E2EE via Pantalaimon** ([#838](https://github.com/nullclaw/nullclaw/pull/838))  
   *End-to-end encryption proxy support for Matrix channels.*

---

## 7. User Feedback Summary

**Pain Points:**
- **Installation/Release issues**: Source builds show unhelpful "dev" version ([#821](https://github.com/nullclaw/nullclaw/issues/821))
- **Docker compatibility**: Config save fails silently when config directory isn't user-writable ([#843](https://github.com/nullclaw/nullclaw/pull/843) addresses this)
- **Upgrade reliability**: Homebrew upgrades break the daemon ([#354](https://github.com/nullclaw/nullclaw/issues/354))
- **Tool flexibility**: Users want meta-search options (ddgs) and trigger-based tool prioritization

**Use Cases Observed:**
- Running NullClaw on Debian VPS with Tailscale networking
- Integration with DingTalk for team messaging
- Windows-based AI agent usage with local models (LM Studio)
- Multi-workspace gateway instances

**Satisfaction Signals:**
- Active community engagement (12 PRs in 24h)
- Multiple contributors submitting substantial features
- Tool customization system addresses long-requested flexibility

---

## 8. Backlog Watch

Issues requiring maintainer attention:

| Issue | Age | Status | Concern |
|---|---|---|---|
| [#354](https://github.com/nullclaw/nullclaw/issues/354) | ~43 days (2026-03-07) | Open | **Stalled** – Critical Homebrew breakage; needs triaging |
| [#376](https://github.com/nullclaw/nullclaw/issues/376) | ~42 days (2026-03-08) | Open | **Stalled** – DingTalk receive capability gap |
| [#408](https://github.com/nullclaw/nullclaw/issues/408) | ~40 days (2026-03-10) | Open | **Stalled** – JSON parsing bug |
| [#665](https://github.com/nullclaw/nullclaw/issues/665) | ~29 days (2026-03-21) | Open | **Stalled** – Windows crash report |

**Recommendation:** Maintainers should prioritize #354 (Homebrew path issue) as it affects upgrade reliability, a core user concern.

---

*Generated: 2026-04-19 | Data reflects last 24 hours of activity on [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem

**Date:** 2026-04-19  
**Projects Analyzed:** NullClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, CoPaw/QwenPaw, ZeroClaw

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is in a **high-velocity maturation phase**, with all seven projects demonstrating active development and strong community engagement. The landscape shows healthy specialization—projects differentiate through architecture choices (Rust-based microkernels vs. Python-native), deployment targets (mobile, embedded, server, desktop), and feature prioritization (voice pipelines, memory systems, multi-agent orchestration). Shared infrastructure concerns—provider reliability, context management, skill systems, and observability—are emerging as ecosystem-wide focus areas, suggesting convergence on common engineering challenges despite varied implementation approaches.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | PRs Merged | Releases (24h) | Health Assessment |
|---------|-------------|-----------|------------|----------------|-------------------|
| **Hermes Agent** | 50 | 50 | Multiple | None | ●●●●● Excellent |
| **ZeroClaw** | 48 | 38 | Multiple | v0.7.0-β, v0.7.1-β | ●●●●○ Strong |
| **NanoBot** | 27 | 54 | 38 | None | ●●●●○ Strong |
| **IronClaw** | 18 | 50 | 7 | None | ●●●○○ Moderate |
| **NullClaw** | 7 | 12 | 0 | None | ●●○○○ Concerning |
| **CoPaw/QwenPaw** | 13 | 10 | 2 | None | ●●○○○ Moderate |
| **PicoClaw** | 11 | 8 | 0 | v0.2.6-nightly | ●●○○○ Concerning |

**Key Observations:**
- **Hermes Agent** and **ZeroClaw** lead in raw activity volume, with Hermes showing the highest sustained engagement
- **NanoBot** demonstrates the best PR merge ratio (38 of 54 PRs), indicating efficient review processes
- **NullClaw** and **PicoClaw** show concerning patterns: high activity but zero PR merges in 24 hours, suggesting review bottlenecks or CI validation issues
- **ZeroClaw** is the only project with formal releases (beta), indicating more mature release discipline

---

## 3. Primary Project Positioning

### Technical Architecture Spectrum

| Approach | Projects | Characteristics |
|----------|----------|-----------------|
| **Rust-based Microkernel** | ZeroClaw, PicoClaw | Performance-focused, sandboxed execution, minimal dependencies |
| **Python-native** | NanoBot, CoPaw, Hermes Agent | Flexibility, rapid iteration, extensive library ecosystem |
| **Hybrid** | NullClaw, IronClaw | Gateway-oriented, multi-runtime support |

### Community Size & Engagement Tier

| Tier | Projects | Indicators |
|------|----------|------------|
| **Tier 1: Large/Open** | Hermes Agent, NanoBot | 50+ daily updates, multiple independent contributors, structured issue templates |
| **Tier 2: Active** | ZeroClaw, IronClaw | 30-50 updates, cross-project contributors, RFC processes active |
| **Tier 3: Focused** | NullClaw, PicoClaw, CoPaw | <25 updates, single-maintainer PR concentration, narrower feature scope |

### Positioning Summary

| Project | Primary Advantage | Target User | Differentiator |
|---------|------------------|-------------|----------------|
| **Hermes Agent** | Multi-channel breadth, provider diversity | Power users, self-hosters | TouchDesigner MCP, `/notify` endpoints, caveman compression |
| **ZeroClaw** | Security-first architecture, Rust performance | Enterprise, security-sensitive | Microkernel workspace, Mozilla Fluent i18n, sandboxed execution |
| **NanoBot** | Memory system innovation, GitHub integration | Developers, Git workflows | GitStore, Dream consolidation, lightweight model routing |
| **IronClaw** | Platform refactoring, meeting intelligence | Teams, enterprises | Event-driven missions, routine automation, multi-account credentials |
| **PicoClaw** | Embedded/mobile potential, Chinese market | Mobile users, embedded deployments | Android automation roadmap, Termux support |
| **NullClaw** | A2A protocol, skill management | Protocol-focused users | Nested skill discovery, tool customization system |
| **CoPaw/QwenPaw** | Internationalization, voice capabilities | Chinese-speaking users, multilingual | Bilingual skills, AgentMemory with vector/BM25/kg |

---

## 4. Shared Technical Focus Areas

The following requirements emerge across multiple projects, indicating ecosystem-wide engineering priorities:

### A. Memory System Modernization
| Project | Specific Need |
|---------|---------------|
| **NanoBot** | Configurable consolidation ratios, adaptive memory triggers, context window pressure mitigation |
| **CoPaw/QwenPaw** | AgentMemory backend with vector + BM25 + knowledge graph retrieval |
| **ZeroClaw** | Dream Mode for periodic memory consolidation, reflective learning |
| **Hermes Agent** | Hardcoded skill review prompts consuming excessive tokens on local LLMs |

**Signal:** Memory architecture is the most fragmented area—each project implements proprietary solutions. Standardization patterns may emerge.

### B. Provider Reliability & Robustness
| Project | Specific Need |
|---------|---------------|
| **PicoClaw** | Critical: Silent Authorization header drops (#2578), DeepSeek 401 failures (#2584), ollama empty responses (#2583) |
| **Hermes Agent** | Gemini authentication failures (HTTP 400), destructive credential pool behavior (#9331) |
| **NanoBot** | DuckDuckGo hangs indefinitely, bounded inbound queues needed |
| **NullClaw** | KeyWriteFailed errors during config save |

**Signal:** Multi-provider support introduces cascading reliability challenges. Circuit breakers, fallback chains, and graceful degradation are universally needed.

### C. Security Hardening
| Project | Specific Need |
|---------|---------------|
| **IronClaw** | Cross-tenant credential fallback removal (#2381), keychain preference over env vars (#2653) |
| **PicoClaw** | Open deployment vulnerabilities (#1067), multi-user support (Agent Shield) |
| **ZeroClaw** | Shell policy blocking realistic Python patterns, OTP silent acceptance of unknown actions |
| **Hermes Agent** | Credential pool destruction on missing env vars |

**Signal:** Projects are rapidly moving from "MVP security" to "production security"—keychain integration, multi-tenant isolation, and sandbox profiles are becoming table stakes.

### D. Voice & Streaming Pipeline Optimization
| Project | Specific Need |
|---------|---------------|
| **NanoBot** | Per-turn latency metrics for STT→LLM→TTS pipeline (#3293) |
| **ZeroClaw** | Native local STT via whisper.cpp (#5868) |
| **CoPaw/QwenPaw** | Voice response feature request (#3293) |

**Signal:** Voice is transitioning from novelty to expected capability. Latency observability and local STT/TTS options are emerging requirements.

### E. Skill/Extension Systems
| Project | Specific Need |
|---------|---------------|
| **NullClaw** | Nested skill discovery, `--skill` CLI flag, trigger-based prioritization |
| **CoPaw/QwenPaw** | Semantic skill routing with embedding-based retrieval (#3117) |
| **Hermes Agent** | Expose `compress_context` as native tool, auto skill-save configurability |
| **ZeroClaw** | LLM reflection for SKILL.md generation (#5874) |

**Signal:** Skill systems are evolving from static registries to dynamic, AI-discoverable, and configurable extension frameworks.

---

## 5. Differentiation Analysis

### Feature Focus Divergence

| Dimension | Leaders | Laggards |
|-----------|---------|----------|
| **Mobile/Embedded** | PicoClaw (Android automation, Termux) | ZeroClaw (aarch64 compilation issues) |
| **Enterprise Security** | IronClaw, ZeroClaw | PicoClaw (open deployment flagged) |
| **Memory Innovation** | NanoBot, CoPaw | NullClaw, PicoClaw |
| **Provider Diversity** | Hermes Agent | IronClaw |
| **Developer Experience** | NanoBot (clean architecture praise) | PicoClaw (uninstall documentation gap) |
| **Internationalization** | CoPaw, ZeroClaw | NullClaw, PicoClaw |

### Target User Segmentation

| User Profile | Best-Fit Project(s) | Rationale |
|-------------|---------------------|-----------|
| **Self-hosted power user** | Hermes Agent, ZeroClaw | CLI-first, multi-channel, security-hardened |
| **Developer/team productivity** | NanoBot, IronClaw | Git integration, routines, meeting intelligence |
| **Mobile/edge deployment** | PicoClaw, CoPaw | Android support, Termux guide, Chinese market |
| **Enterprise/regulated** | IronClaw, ZeroClaw | Multi-tenant isolation, audit trails, keychain integration |
| **Protocol-focused** | NullClaw | A2A protocol, tool customization |

### Technical Architecture Differences

| Aspect | Rust-based (ZeroClaw, PicoClaw) | Python-native (NanoBot, CoPaw, Hermes) | Hybrid (NullClaw, IronClaw) |
|--------|-------------------------------|----------------------------------------|----------------------------|
| **Startup time** | Fast | Moderate | Variable |
| **Extension ecosystem** | MCP-first | Direct Python imports | Tool + skill registries |
| **Memory footprint** | Minimal | Larger | Moderate |
| **Deployment complexity** | Higher (builds) | Lower (pip/conda) | Moderate |
| **Customization depth** | Source-level | Runtime-level | Both |

---

## 6. Community Momentum & Maturity

### Activity Tiers

```
TIER 1: RAPID ITERATION
├── Hermes Agent: 100 items/day, structured templates, PR salvage culture
├── NanoBot: 81 items/day, 70% merge rate, responsive issue triaging
└── ZeroClaw: 86 items/day, beta releases, RFC process active

TIER 2: ACTIVE DEVELOPMENT
├── IronClaw: 68 items/day, platform refactoring epic (#2599), security focus
└── CoPaw/QwenPaw: 23 items/day, i18n investment, memory overhaul

TIER 3: STABILIZATION NEEDED
├── NullClaw: 19 items/day, 0% merge rate, single-contributor concentration
└── PicoClaw: 19 items/day, 0% merge rate, critical provider bugs unaddressed
```

### Maturity Indicators

| Project | Release Cycle | Breaking Change Policy | Backlog Triage | Issue Response |
|---------|--------------|----------------------|----------------|----------------|
| **ZeroClaw** | Beta with semver | Documented migration | Daily | <24h |
| **NanoBot** | Versioned | Implicit | Weekly | <24h |
| **Hermes Agent** | Nightly | Implicit | Daily | <24h |
| **IronClaw** | None | N/A | Weekly | <48h |
| **CoPaw/QwenPaw** | None | N/A | Sporadic | Variable |
| **NullClaw** | None | N/A | Sporadic | >72h |
| **PicoClaw** | Nightly | Implicit | None visible | >72h |

### Bottleneck Analysis

- **NullClaw & PicoClaw**: Zero PR merges in 24h with high open PR counts indicates review bottleneck. NullClaw has 12 open PRs from contributor "manelsen" suggesting single-contributor saturation. PicoClaw shows auto-generated PRs from Trae CN tooling without community contributions merging.
  
- **Recommendation**: Projects in Tier 3 should implement weekly triage reviews and consider delegating review responsibilities to trusted community members.

---

## 7. Trend Signals

The following patterns extracted from community feedback indicate where the ecosystem is heading:

### A. "Local-First" Infrastructure Maturing
**Signal:** Multiple projects adding local STT (ZeroClaw whisper.cpp), local LLM support (Ollama, LM Studio integrations), and offline-capable workflows.
> *Evidence:* CoPaw Ollama issues, PicoClaw ollama empty responses, Hermes Agent local LLM token concerns.

### B. Provider Abstraction Layer Wars
**Signal:** Projects are struggling with multi-provider complexity—each has unique quirks (Gemini 400 errors, DeepSeek 401, StepFun JSON truncation). A potential market for unified provider abstraction libraries is emerging.
> *Evidence:* 15+ provider-related bugs across all projects in the past 48 hours.

### C. Security Graduated from Optional to Required
**Signal:** Previously open deployments are now flagged as "critical vulnerabilities" (PicoClaw #1067). Multi-tenant isolation, keychain integration, and credential sandboxing are becoming expected, not optional.
> *Evidence:* IronClaw removing cross-tenant fallbacks, ZeroClaw keychain preference, Hermes Agent credential pool hardening.

### D. Mobile/Edge AI Agent Demand
**Signal:** PicoClaw Android automation (#292) with 8 comments and roadmap alignment, CoPaw Termux issues, and Chinese-market features (飞书/Lark) indicate growing demand for non-server deployment targets.
> *Evidence:* PicoClaw v0.2.6 roadmap includes Android Device Automation (#293).

### E. Memory Architecture Innovation Peak
**Signal:** No two projects implement memory the same way—each has proprietary consolidation, compaction, and reflection mechanisms. This indicates the problem space is unsolved, with significant room for architectural innovation or standardization.
> *Evidence:* NanoBot Dream, CoPaw AgentMemory, ZeroClaw Dream Mode, Hermes Agent skill auto-save.

### F. Windows as Secondary Platform
**Signal:** Multiple projects show Windows-specific issues (CoPaw desktop hangs, Hermes Agent Windows assembly, CoPaw VPN proxy issues), suggesting development primarily on Unix-like systems with Windows as an afterthought.
> *Evidence:* CoPaw #3555, #3562, #3542 all Windows-specific.

### G. Internationalization Becoming Table Stakes
**Signal:** CoPaw bilingual skills (EN/ZH), ZeroClaw Mozilla Fluent RFC, Chinese-language issues in multiple projects. Ecosystem is globalizing beyond English-only.
> *Evidence:* CoPaw PR #3558 (builtin skill dual-language), ZeroClaw RFC #5787 (Fluent i18n).

---

**Report Generated:** 2026-04-19  
**Analytical Coverage:** 7 projects, 2026-04-18/19 activity cycle  
**Confidence Level:** High (direct GitHub activity data)

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-19

---

## 1. Today's Overview

NanoBot continues to show **very high development velocity** with 27 issues and 54 PRs updated in the last 24 hours. The project demonstrates strong community engagement with 16 new PRs opened and 38 merged/closed. Notably, there are **no releases today**, but substantial work is flowing through the pipeline. Key themes include improvements to the memory/consolidation system, voice interaction latency debugging, provider robustness, and quality-of-life features for gateway lifecycle management.

---

## 2. Releases

**No new releases today.**

The last tracked release activity appears to have been in earlier versions (v0.1.5 mentioned in issue #2980). The project appears to be in active development between formal releases.

---

## 3. Project Progress

### Recently Merged/Closed PRs (38 total):

| PR | Author | Change | Status |
|---|---|---|---|
| [#3289](https://github.com/HKUDS/nanobot/pull/3289) | longle325 | Fix GitStore nested repo and `.gitignore` overwrite bug | Closed |
| [#3287](https://github.com/HKUDS/nanobot/pull/3287) | chengyongru | Add structured issue templates (bug report, feature request) | Closed |
| [#3281](https://github.com/HKUDS/nanobot/pull/3281) | subalkum | Make memory consolidation ratio configurable | Closed |
| [#3285](https://github.com/HKUDS/nanobot/pull/3285) | chengyongru | Make consolidation ratio configurable (revised) | Closed |
| [#3271](https://github.com/HKUDS/nanobot/pull/3271) | pixan-ai | Respect `sys.stdout.isatty()` in stream renderer (fixes UI spam) | Closed |
| [#3125](https://github.com/HKUDS/nanobot/pull/3125) | yeyitech | Harden cron tool contract | Closed |
| [#3109](https://github.com/HKUDS/nanobot/pull/3109) | wanghesong2019 | Add lightweight model router for auto-routing simple tasks | Closed |
| [#3112](https://github.com/HKUDS/nanobot/pull/3112) | zijiefang | Return provider default api base in config resolution | Closed |

### Key Advancements:
- **Memory system improvements**: Configurable consolidation ratio merged, addressing user demand from issue #3270
- **GitStore bug fixed**: Prevents nested `.git` directories and `.gitignore` corruption (#2980)
- **Voice UX improved**: Terminal spam from non-TTY environments fixed
- **Model routing**: Lightweight router for cheap/fast task routing merged
- **Quality standards**: Structured issue templates added to improve bug report quality

---

## 4. Community Hot Topics

### Most Active Issues:

1. **[#3227](https://github.com/HKUDS/nanobot/issues/3227)** — Memory System Limitations in Long/Large Projects
   - **State**: Closed | **Comments**: 13 | **Reactions**: 👍 4
   - **Summary**: User "kxsk-git" praises the project's clean architecture but reports memory system struggles with long-running projects. The system injects `history.jsonl` and `MEMORY.md` as large text blocks, causing context window pressure.
   - **Underlying need**: Better memory architecture for enterprise/long-horizon use cases.

2. **[#3047](https://github.com/HKUDS/nanobot/issues/3047)** — Dream Memory Consolidation Issues
   - **State**: Open | **Comments**: 2
   - **Summary**: Current Dream design runs every 2 hours and writes to `history.jsonl` before consolidating, causing context overflow within the window.
   - **Underlying need**: Adaptive memory consolidation, not time-based triggers.

3. **[#3270](https://github.com/HKUDS/nanobot/issues/3270)** — Configurable Compaction Ratio Request
   - **State**: Open | **Comments**: 3
   - **Summary**: User argues trigger points should be engineered (token-based), not user-configurable, but compression aggressiveness is appropriate to configure.
   - **Related PRs**: #3281, #3285 merged to address this.

4. **[#3257](https://github.com/HKUDS/nanobot/issues/3257)** — Voice Pipeline Latency Metrics
   - **State**: Open | **Comments**: 1
   - **Summary**: User running local STT + TTS experiences 35-60 second latency with no visibility into which stage (STT/LLM/TTS) is the bottleneck.
   - **Related PR**: [#3293](https://github.com/HKUDS/nanobot/pull/3293) opened by pixan-ai.

5. **[#3279](https://github.com/HKUDS/nanobot/issues/3279)** — Gateway Lifecycle Notifications
   - **State**: Open | **Comments**: 0
   - **Summary**: Users running NanoBot via systemd can't tell if gateway is actually running after auto-restart.
   - **Related PR**: [#3291](https://github.com/HKUDS/nanobot/pull/3291) implements `on_start`/`on_stop` hooks.

---

## 5. Bugs & Stability

### Reported Bugs (ranked by severity):

| Priority | Issue | Description | Status | Fix PR? |
|---|---|---|---|---|
| **P0** | [#3251](https://github.com/HKUDS/nanobot/issues/3251) | `${VAR}` env variable syntax in config.json not parsed, causing silent auth failures for 78+ hours | Closed | — |
| **P1** | [#2804](https://github.com/HKUDS/nanobot/issues/2804) | DuckDuckGo web search hangs indefinitely, blocking all messages | Closed | — |
| **P1** | [#3256](https://github.com/HKUDS/nanobot/issues/3256) | Mid-stream LLM response truncation not retried (only retries on `finish_reason == "error"`) | Closed | — |
| **P2** | [#3206](https://github.com/HKUDS/nanobot/issues/3206) | Gemini provider API key error — multiple credentials received | Open | — |
| **P2** | [#3213](https://github.com/HKUDS/nanobot/issues/3213) | `GroqTranscriptionProvider` ignores `apiBase` from config.json | Closed | — |
| **P2** | [#2980](https://github.com/HKUDS/nanobot/issues/2980) | GitStore creates nested `.git` repos and overwrites `.gitignore` | Closed | [#3289](https://github.com/HKUDS/nanobot/pull/3289) |
| **P2** | [#3220](https://github.com/HKUDS/nanobot/issues/3220) | Agent enters infinite empty tool-call loop against non-compliant API gateways | Closed | — |
| **P3** | [#3265](https://github.com/HKUDS/nanobot/issues/3265) | Nanobot UI dumps cursor visibility escape sequences to non-TTY | Closed | [#3271](https://github.com/HKUDS/nanobot/pull/3271) |

### Stability Notes:
- **P0 config parsing bug** (#3251) affecting Feishu auth has been closed but the `${VAR}` resolution issue may affect other channels
- **Multiple provider robustness PRs** open: circuit breaker for Responses API fallback (#3205), bounded inbound queue to prevent memory growth (#3202), MCP reconnect on closed transport (#3290)

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests:

| Request | Issue | Priority Signal | Likelihood |
|---|---|---|---|
| **Session-Level Focus Tool** — persistent task awareness across interruptions | [#3292](https://github.com/HKUDS/nanobot/issues/3292) | New, 0 comments | Exploratory |
| **Configurable dream/skill drift behavior** | [#3282](https://github.com/HKUDS/nanobot/issues/3282) | User manually overrode templates | Medium |
| **Agent Checkpointing & Resume** for long-running loops | [#3027](https://github.com/HKUDS/nanobot/issues/3027) | Closed, no PR linked | Unlikely short-term |
| **Unified `manage_skill` tool** for CRUD operations | [#3137](https://github.com/HKUDS/nanobot/pull/3137) | Open PR | High |
| **WebSocket session lifecycle + delta streaming** | [#3286](https://github.com/HKUDS/nanobot/pull/3286) | Open PR | High |
| **Per-turn latency metrics** for voice pipelines | [#3293](https://github.com/HKUDS/nanobot/pull/3293) | Open PR | High |
| **Prompt-guided session history reading** | [#3263](https://github.com/HKUDS/nanobot/pull/3263) | Open PR | Medium |

### Roadmap Signals:
- **Memory system** is a major focus area (multiple issues + PRs)
- **Voice/streaming optimization** is gaining momentum with latency observability work
- **Provider reliability** (circuit breakers, bounded queues, reconnection handling) is being hardened
- **Gateway observability** (lifecycle notifications, profiling hooks) is becoming a priority

---

## 7. User Feedback Summary

### Pain Points:
1. **Memory system context overflow** in long projects (issue #3227, 13 comments — highest engagement)
2. **Config parsing silent failures** causing 78+ hour auth outages (#3251)
3. **No uninstall documentation** — user complained "why cant i uninstall" (#3267)
4. **Voice latency undebuggable** — users can't identify bottlenecks in STT→LLM→TTS pipeline
5. **GitStore corrupting workspace** — nested repos and `.gitignore` overwrite

### Positive Feedback:
- Project praised for **clean, lightweight, easy-to-explore codebase** (#3227)
- **Active community response** — most issues get comments within 1-2 days
- **Good first issues** being addressed (memory consolidation #3274, compaction ratio #3270)

### Dissatisfaction Areas:
- **Dream process causes noise** in skills and files (user manually overrode templates)
- **Provider integration questions** — litellm question (#237) suggests some users expect more abstraction
- **Discord bot-to-bot messaging blocked** — prevents legitimate multi-agent setups

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention:

| Issue | Age | State | Reason to Watch |
|---|---|---|---|
| [#2071](https://github.com/HKUDS/nanobot/issues/2071) — DUCKDUCKGO web search not working | ~35 days | Open | Persistent provider issue, only 1 comment |
| [#2709](https://github.com/HKUDS/nanobot/issues/2709) — Streaming required error | ~18 days | Open | Blocking on WeChat, 1 comment |
| [#2853](https://github.com/HKUDS/nanobot/issues/2853) — Gemini sub-agent no details | ~13 days | Open | Workaround exists but may indicate provider integration issue |
| [#3292](https://github.com/HKUDS/nanobot/issues/3292) — Session-Level Focus Tool | 1 day | Open | New, could be strategic for agent architecture |
| [#3282](https://github.com/HKUDS/nanobot/issues/3282) — Dream/skill drift customization | 1 day | Open | New, indicates Dream rewrite causes workflow friction |

### Stale Issues (marked):
- [#1106](https://github.com/HKUDS/nanobot/issues/1106) — Voice conversation capability request (stale, closed)
- [#209](https://github.com/HKUDS/nanobot/issues/209) — Crowdfunding discussion (stale, closed)

---

## Summary Metrics

| Metric | Value |
|---|---|
| Issues updated (24h) | 27 (12 open, 15 closed) |
| PRs updated (24h) | 54 (16 open, 38 merged/closed) |
| New releases | 0 |
| Highest engagement issue | #3227 (13 comments, 4 👍) |
| Avg. response time (visible) | <24h |
| Open PRs targeting features | 9+ |
| Active bug investigations | 5 |

**Project Health Assessment**: NanoBot demonstrates healthy open-source development with high velocity, responsive community management, and clear focus areas in memory optimization, voice latency observability, and provider robustness. The team is actively closing bugs and merging improvements, with structured templates now helping surface better bug reports.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-19

## 1. Today's Overview

Hermes Agent maintains extremely high activity with **50 issues and 50 PRs** updated in the last 24 hours, indicating vigorous community engagement. No new releases shipped today, but the maintainers have been busy reviewing and merging fixes—particularly around gateway stability, Telegram integration, and terminal accessibility. A notable cluster of **Gemini provider authentication issues** (HTTP 400 errors) continues to generate significant discussion, suggesting potential instability in the Google GenAI integration that may require a coordinated fix. The project appears healthy but actively troubleshooting provider compatibility across multiple model backends.

## 2. Releases

**None** — No new releases were published today.

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Status |
|----|-------------|--------|
| [#12298](https://github.com/NousResearch/hermes-agent/pull/12298) | Adds `touchdesigner-mcp` optional skill (36 tools for TouchDesigner via twozero MCP) | Closed |
| [#6100](https://github.com/NousResearch/hermes-agent/pull/6100) | Telegram DM fix: falls back to `chat.id` when `from_user` is None | Closed |
| [#6056](https://github.com/NousResearch/hermes-agent/pull/6056) | Same Telegram fix (salvage by nish3451) | Closed |
| [#7189](https://github.com/NousResearch/hermes-agent/pull/7189) | BlueBubbles: removes invalid `"message"` event from webhook registration | Closed |
| [#3072](https://github.com/NousResearch/hermes-agent/pull/3072) | CLI whole-word deletion (Alt+Backspace) in TUI input | Closed |
| [#12332](https://github.com/NousResearch/hermes-agent/pull/12332) | Gateway: marks only running sessions for resume on drain timeout | Closed |
| [#12184](https://github.com/NousResearch/hermes-agent/pull/12184) | Gateway: cron cleanup on failure + session finalize guard | Open |

### Notable Open PRs Advancing

| PR | Description | Author |
|----|-------------|--------|
| [#12339](https://github.com/NousResearch/hermes-agent/pull/12339) | Gateway: close adapter resources when `connect()` fails | teknium1 |
| [#12338](https://github.com/NousResearch/hermes-agent/pull/12338) | Fix Kimi provider slug mismatch (#12296) | vominh1919 |
| [#12337](https://github.com/NousResearch/hermes-agent/pull/12337) | Adaptive color scheme for light terminal backgrounds (#12330) | vominh1919 |
| [#12336](https://github.com/NousResearch/hermes-agent/pull/12336) | Preserve dots in Bedrock inference-profile IDs (#12295) | vominh1919 |
| [#12335](https://github.com/NousResearch/hermes-agent/pull/12335) | Docker docs: connecting to local inference servers (vLLM, Ollama) | Magicray1217 |
| [#12333](https://github.com/NousResearch/hermes-agent/pull/12333) | Telegram: cache inbound video attachments for exact intake | aquigni |
| [#12334](https://github.com/NousResearch/hermes-agent/pull/12334) | Gateway: slash commands never interrupt a running agent | teknium1 |
| [#12117](https://github.com/NousResearch/hermes-agent/pull/12117) | `/notify` HTTP endpoint for external push notifications | H1an1 |
| [#12054](https://github.com/NousResearch/hermes-agent/pull/12054) | Per-merchant identity headers for multi-tenant API deployments | apmzoom |
| [#5723](https://github.com/NousResearch/hermes-agent/pull/5723) | `/caveman` toggle command for compressed responses (~75% fewer tokens) | ZK-Snarky |
| [#9194](https://github.com/NousResearch/hermes-agent/pull/9194) | Add `hindsight-client` as optional dependency | jbotwell |

## 4. Community Hot Topics

**Most Active Issues (by comment count):**

1. **[#7893](https://github.com/NousResearch/hermes-agent/issues/7893)** — `[Bug]` HTTP 400 "Multiple authentication credentials received" with native Gemini provider *(16 comments, Closed)*
   - *Underlying need:* Users relying on Vertex AI–generated GEMINI_API_KEY are encountering endpoint compatibility issues. This points to ambiguity in documentation and inconsistent credential handling between Google AI Studio and Vertex endpoints.

2. **[#2706](https://github.com/NousResearch/hermes-agent/issues/2706)** — Response truncated due to output length limit *(8 comments, Closed)*
   - *Underlying need:* Better graceful handling when models hit max output tokens. Users want automatic rollback rather than incomplete responses.

3. **[#12127](https://github.com/NousResearch/hermes-agent/issues/12127)** — `[Bug]` HTTP 400 API_KEY_INVALID with Google Provider *(6 comments, Closed)*
   - *Underlying need:* Frustration with Gemini API key validation. Users report keys work in OpenClaw and curl but fail in Hermes.

4. **[#9782](https://github.com/NousResearch/hermes-agent/issues/9782)** — nix-darwin / darwinModules support *(6 comments)*
   - *Underlying need:* macOS users using nix-darwin cannot install Hermes via documented methods. Growing demand for cross-platform setup parity.

5. **[#4983](https://github.com/NousResearch/hermes-agent/issues/4983)** — Native Google GenAI Provider for Gemini Models *(4 comments, Closed)*
   - *Underlying need:* Users want first-class Gemini support rather than routing through OpenAI compatibility layer, which causes fragile tool calling.

## 5. Bugs & Stability

**Critical/High Severity:**

| Issue | Description | Severity | Fix PR? |
|-------|-------------|----------|---------|
| [#11001](https://github.com/NousResearch/hermes-agent/issues/11001) | Death spiral: 400 invalid tool call arguments causes context compression loop | **High** | — |
| [#9331](https://github.com/NousResearch/hermes-agent/issues/9331) | `load_pool()` destructively prunes env-seeded credentials when env var is missing | **High** | — |
| [#4662](https://github.com/NousResearch/hermes-agent/issues/4662) | Malformed persisted tool calls poison sessions causing repeated 400 errors | **High** | — |
| [#12242](https://github.com/NousResearch/hermes-agent/issues/12242) | StepFun API: broken JSON truncation in `context_compressor` causes 400 errors | **Medium** | — |

**Medium/Low Severity (with Fix PRs):**

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#12330](https://github.com/NousResearch/hermes-agent/issues/12330) | Text hard to read on white terminal background | [#12337](https://github.com/NousResearch/hermes-agent/pull/12337) ✓ |
| [#12296](https://github.com/NousResearch/hermes-agent/issues/12296) | Kimi For Coding model switch silently falls back to default | [#12338](https://github.com/NousResearch/hermes-agent/pull/12338) ✓ |
| [#12295](https://github.com/NousResearch/hermes-agent/issues/12295) | Bedrock inference-profile IDs mangled (dots removed) | [#12336](https://github.com/NousResearch/hermes-agent/pull/12336) ✓ |
| [#12260](https://github.com/NousResearch/hermes-agent/issues/12260) | `resolve_skill_config_values()` uses wrong HOME semantics for `~` expansion | Open |

**Gateway Stability:** Multiple PRs today address gateway resilience:
- [#12339](https://github.com/NousResearch/hermes-agent/pull/12339) — Adapter resource cleanup on failure
- [#12334](https://github.com/NousResearch/hermes-agent/pull/12334) — Slash commands no longer interrupt running agents
- [#12332](https://github.com/NousResearch/hermes-agent/pull/12332) — Drain timeout marks only blocking sessions
- [#12184](https://github.com/NousResearch/hermes-agent/pull/12184) — Cron cleanup on failure

## 6. Feature Requests & Roadmap Signals

**High-Engagement Feature Requests:**

| Issue | Description | 👍 | Likelihood of Inclusion |
|-------|-------------|----|------------------------|
| [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) | Built-in automatic backup & version control for `~/.hermes/` | 2 | **High** — addresses real data-loss risk |
| [#12327](https://github.com/NousResearch/hermes-agent/issues/12327) | Desired-state planning engine — goal tracking across life domains | 0 | **Speculative** — discussion-stage |
| [#12213](https://github.com/NousResearch/hermes-agent/issues/12213) | Expose `compress_context` as native Tool (currently only slash command) | 0 | **Medium** — enables skill-based automation |
| [#12340](https://github.com/NousResearch/hermes-agent/issues/12340) | Make auto skill-save configurable (hardcoded prompts break high-context LLMs) | 0 | **Medium** — directly impacts local LLM users |
| [#12188](https://github.com/NousResearch/hermes-agent/issues/12188) | Configure `hermes model` via Docker env variables | 0 | **Medium** — Docker deployment UX |

**Infrastructure Features In Progress:**

- [#12117](https://github.com/NousResearch/hermes-agent/pull/12117) — `/notify` HTTP endpoint for external push notifications
- [#12054](https://github.com/NousResearch/hermes-agent/pull/12054) — Per-tenant identity headers for multi-tenant API deployments
- [#5723](https://github.com/NousResearch/hermes-agent/pull/5723) — `/caveman` compressed response toggle
- [#10656](https://github.com/NousResearch/hermes-agent/issues/10656) — `script_skip_if_empty` for cron jobs

**Predicted next-version priorities:** Provider stability fixes (especially Gemini), Docker deployment improvements, and enhanced skill automation controls.

## 7. User Feedback Summary

**Pain Points:**

- **Provider fragmentation:** Gemini integration is proving problematic—multiple issues (#7893, #12127, #12168, #4983) cite authentication failures, HTTP 400 errors, and tool calling instability through OpenAI compatibility layer. Users want native, first-class provider support.
- **Credential management fragility:** Issues #9331 (destructive `load_pool()`) and #7863 (dead `suppressed_sources` config) highlight credential pool edge cases.
- **Context/token management:** Response truncation (#2706), death spirals from invalid tool calls (#11001), and JSON truncation bugs (#12242) indicate tension between model capabilities and Hermes's context handling.
- **Local LLM friction:** Issue #12340 reports hardcoded skill review prompts that consume excessive tokens on high-context local models.

**Satisfaction Signals:**

- Positive reception of **TouchDesigner MCP integration** (#12298, salvaged from #10081)—36 native tools enabling real-time visual control.
- Community salvages and re-lands PRs (#6100, #12298, #12332), indicating collaborative maintenance culture.
- Multi-platform deployment features (Docker docs #12335, Termux #9846) show expanding use cases.

## 8. Backlog Watch

**Long-Standing or Unanswered Issues Requiring Maintainer Attention:**

| Issue | Age | Description | Priority |
|-------|-----|-------------|----------|
| [#4662](https://github.com/NousResearch/hermes-agent/issues/4662) | ~17 days | Malformed persisted tool calls poison sessions | **High** — affects reliability |
| [#11001](https://github.com/NousResearch/hermes-agent/issues/11001) | ~3 days | Death spiral from 400 tool call errors | **High** — user-facing hangs |
| [#9331](https://github.com/NousResearch/hermes-agent/issues/9331) | ~5 days | Destructive credential pool behavior | **High** — data integrity |
| [#12242](https://github.com/NousResearch/hermes-agent/issues/12242) | ~1 day | StepFun JSON truncation bug | **Medium** — active bug |
| [#12260](https://github.com/NousResearch/hermes-agent/issues/12260) | ~1 day | Wrong HOME semantics in skill config | **Medium** — containerized setups |
| [#5861](https://github.com/NousResearch/hermes-agent/issues/5861) | ~12 days | Silent cron delivery failures show "ok" status | **Medium** — observability |
| [#11199](https://github.com/NousResearch/hermes-agent/issues/11199) | ~3 days | Honcho memory scoping ignores user_id when peer_name configured | **Medium** — multi-user isolation |
| [#11838](https://github.com/NousResearch/hermes-agent/issues/11838) | ~2 days | MCP OAuth path stripping breaks GitHub validation | **Medium** — OAuth flows |

**No activity (0 comments):**
- [#12340](https://github.com/NousResearch/hermes-agent/issues/12340) — Auto skill-save configurability (posted today)
- [#12327](https://github.com/NousResearch/hermes-agent/issues/12327) — Desired-state planning (posted today)

---

*Digest generated from Hermes Agent (NousResearch/hermes-agent) activity on 2026-04-19. Data includes 50 issues and 50 PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest

**Date:** 2026-04-19  
**Repository:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
**Digest Author:** AI Analyst Agent

---

## 1. Today's Overview

PicoClaw maintains high development velocity with 19 total activity items in the past 24 hours—11 issues and 8 PRs—though notably **zero items were closed or merged** on the issue side. All 11 issues remain open/active, indicating the team is actively triaging but issues are accumulating. Three PRs were closed (auto-generated by Trae CN tooling), while 5 PRs remain open for review. The project released a new nightly build (v0.2.6-nightly.20260419), suggesting active development toward v0.2.6. Critical attention is needed on three provider-related bugs reported in the last 48 hours affecting API authentication and model compatibility.

---

## 2. Releases

### Nightly Build Released
**Version:** `v0.2.6-nightly.20260419.6126ede9`  
**Release Note:** Automated nightly build for v0.2.6 development cycle  
**Status:** ⚠️ Unstable — for testing only  
**Full Changelog:** https://github.com/sipeed/picoclaw/compare/v0.2.6...main

> **Note:** This is an automated build. Users on stable releases should not upgrade unless testing.

---

## 3. Project Progress

### PRs Closed/Merged (3 items)

| PR | Domain | Summary |
|----|--------|---------|
| [#2577](https://github.com/sipeed/picoclaw/pull/2577) | tool, config | Added file diff comparison tool with test files (Trae CN auto-generated) |
| [#2576](https://github.com/sipeed/picoclaw/pull/2576) | agent, config | Updated process ID/token and gateway logging (Trae CN auto-generated) |
| [#2575](https://github.com/sipeed/picoclaw/pull/2575) | tool, config | Refactored diff tool with independent path validation logic (Trae CN auto-generated) |

> **Observation:** All three closed PRs appear to be auto-generated by Trae CN tooling with generic commit hashes. No community-contributed PRs were merged today.

### Open PRs Under Review (5 items)

| PR | Type | Domain | Summary | Status |
|----|------|--------|---------|--------|
| [#2410](https://github.com/sipeed/picoclaw/pull/2410) | enhancement | agent, tool | **BrowserTool via Chrome DevTools Protocol (CDP)** — addresses Issue #293 roadmap item | Active |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | refactor | channel, agent, tool, cron | Standardize channel identification, decouple name from provider type | Active |
| [#2535](https://github.com/sipeed/picoclaw/pull/2535) | enhancement | agent, tool | Add MCP slash commands (`/list mcp`, `/show mcp <server>`) | Active |
| [#2581](https://github.com/sipeed/picoclaw/pull/2581) | bug fix | provider | Recover Codex output from streamed message events | New |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | enhancement | agent, tool, config, build, docker | Multi-User Support, Security Hardening, Skills whitelisting ("Agent Shield" integration) | Active |

**Key Advancement:** PR #2410 (CDP browser automation) represents a significant roadmap feature. PR #2313 addresses enterprise security needs with multi-user support and skills whitelisting.

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Type | Comments | Reactions | Topic |
|-------|------|----------|-----------|-------|
| [#618](https://github.com/sipeed/picoclaw/issues/618) | enhancement | 9 | 2 👍 | **Self-upgrade support** for automated updates via deb/winget/opkg |
| [#292](https://github.com/sipeed/picoclaw/issues/292) | roadmap | 8 | 1 👍 | **Android Device Automation** — bridge LLMs to mobile interfaces |
| [#286](https://github.com/sipeed/picoclaw/issues/286) | documentation | 8 | 2 👍 | **Android/Termux guide** — running PicoClaw on mobile |
| [#1067](https://github.com/sipeed/picoclaw/issues/1067) | enhancement | 4 | 1 👍 | **Authula authentication integration** for security |
| [#1731](https://github.com/sipeed/picoclaw/issues/1731) | enhancement | 4 | 0 👍 | **OpenTelemetry GenAI observability** support |

### Analysis of Underlying Needs

1. **Mobile/Embedded Expansion (#292, #286):** Strong community interest in extending PicoClaw beyond traditional server部署 to Android and embedded devices. The "Botdrop-like" Android automation vision suggests demand for mobile-first AI agent capabilities.

2. **Enterprise Security (#1067, #2313):** Multiple parallel efforts on authentication (#1067 for Authula, #2313 for Agent Shield) indicate security is a critical gap. Open deployment without auth is flagged as a vulnerability.

3. **Self-Management (#618):** The self-upgrade request with 9 comments and references to continuous release/security patches suggests users need automated maintenance without manual intervention.

4. **Observability (#1731):** Chinese-language issue requesting OTel support indicates enterprise users need standardized monitoring/observability for production deployments.

---

## 5. Bugs & Stability

### Critical Bugs (Reported in Last 48h)

| Issue | Severity | Domain | Summary | Fix PR? |
|-------|----------|--------|---------|---------|
| [#2578](https://github.com/sipeed/picoclaw/issues/2578) | **🔴 Critical** | provider | `openai_compat` **silently drops Authorization header** — API keys ignored from all config sources | No |
| [#2584](https://github.com/sipeed/picoclaw/issues/2584) | 🔴 Critical | provider | DeepSeek returns **401 "Authentication Fails"** despite valid API key (v0.2.6, git: 51eecde) | No |
| [#2583](https://github.com/sipeed/picoclaw/issues/2583) | 🟠 High | provider | `qwen3.5` and `gemma4` return **empty responses** with ollama | No |
| [#2046](https://github.com/sipeed/picoclaw/issues/2046) | 🟠 High | provider | **LongCat API tool not called** — regression since v0.2.4 | No |
| [#2581](https://github.com/sipeed/picoclaw/pull/2581) | 🟡 Medium | provider | (PR) Codex streaming output recovery — **fix for incomplete streamed responses** | Open |

### Bug Trend Analysis

**Authentication/Provider Crisis:** Three of four bugs are provider-layer issues (#2578, #2584, #2583), all reported within 48 hours of each other. The `openai_compat` regression in #2578 is particularly severe as it silently fails—no error thrown, just silent credential dropping. This suggests a recent change to the v0.2.6 branch may have introduced cascading provider bugs.

**Action Required:** Maintainers should prioritize a hotfix release addressing the Authorization header regression (#2578) before more users encounter the issue.

---

## 6. Feature Requests & Roadmap Signals

### High-Impact Feature Requests

| Issue | Domain | Priority Signal | Request | Roadmap Aligned? |
|-------|--------|-----------------|---------|------------------|
| [#618](https://github.com/sipeed/picoclaw/issues/618) | build | 9 comments, 2 👍 | Self-upgrade via package managers (deb/winget/opkg) | Partially |
| [#292](https://github.com/sipeed/picoclaw/issues/292) | roadmap | 8 comments, 1 👍 | Android device automation & remote operations | Yes (#293 in roadmap) |
| [#286](https://github.com/sipeed/picoclaw/issues/286) | documentation | 8 comments, 2 👍 | Android/Termux setup guide | Documentation gap |
| [#2582](https://github.com/sipeed/picoclaw/issues/2582) | tool | New, 0 👍 | **Search API fallback chain** (Brave→Tavily→Perplexity→DuckDuckGo) | Enhancement |
| [#2580](https://github.com/sipeed/picoclaw/issues/2580) | channel | New, 0 👍 | **飞书/Lark plugin optimization** — streaming, status display | China market |

### Predicted Next Version Features

Based on PR activity and issue momentum:

1. **BrowserTool via CDP (#2410)** — High likelihood for v0.2.6 given active PR
2. **MCP slash commands (#2535)** — Clean enhancement, likely to merge
3. **Search API fallback (#2582)** — Addresses real reliability issue, likely prioritized
4. **飞书/Lark streaming (#2580)** — Regional market requirement, may land if lightweight

---

## 7. User Feedback Summary

### Pain Points Identified

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Silent auth failures** | #2578: API keys silently dropped, no error | High — users don't know why LLM calls fail |
| **Provider instability** | #2584 (DeepSeek), #2583 (ollama) | High — blocks multi-provider workflows |
| **No mobile support documentation** | #286: "Add guide for running PicoClaw on Android via Termux" | Medium — limits accessibility |
| **Security gap** | #1067: "completely open so anyone with CLI access can execute arbitrary commands" | Critical — blocks enterprise adoption |
| **No automated recovery** | #2582: "API quota exhausted → error → stop → manual intervention" | Medium — reduces reliability |

### Use Cases Emerging

1. **Mobile AI Operations:** Users want to run PicoClaw on Android devices for on-the-go AI task execution
2. **Multi-Provider Reliability:** Production users need fallback mechanisms when primary LLM providers fail
3. **Enterprise Deployment:** Security hardening and multi-user support are prerequisite for corporate adoption
4. **China Market:** Chinese-language issue requesting 飞书/Lark optimization indicates significant user base requiring localized integration

---

## 8. Backlog Watch

### Issues Requiring Maintainer Attention

| Issue | Age | Status | Priority | Problem |
|-------|-----|--------|----------|---------|
| [#618](https://github.com/sipeed/picoclaw/issues/618) | ~56 days | Open | High | Self-upgrade feature request with detailed implementation plan (9 comments) — **no maintainer response since Feb** |
| [#292](https://github.com/sipeed/picoclaw/issues/292) | ~62 days | Open | Roadmap | Android automation feature — **no official response**, referenced in roadmap but no timeline |
| [#286](https://github.com/sipeed/picoclaw/issues/286) | ~62 days | Open | Medium | Documentation request — **unaddressed** despite community willingness to contribute |
| [#1067](https://github.com/sipeed/picoclaw/issues/1067) | ~46 days | Open | Medium | Security/authentication integration — **no maintainer acknowledgment** |
| [#1731](https://github.com/sipeed/picoclaw/issues/1731) | ~32 days | Open | Medium | OTel observability (Chinese submitter) — **no response** |

### Stale Items (>30 days, no maintainer response)

- #618: Self-upgrade (created Feb 22)
- #292: Android automation (created Feb 16)
- #286: Android/Termux docs (created Feb 16)
- #1067: Authula integration (created Mar 4)
- #1731: OTel GenAI (created Mar 18)
- #2046: LongCat bug (created Mar 26)

### Recommendation

The backlog shows a pattern of **feature requests aging without maintainer acknowledgment**. Given 5 issues older than 30 days with zero official response, consider:
1. Weekly triage to acknowledge receipt and label milestones
2. Closing duplicates or marking as "planned" / "not planned"
3. Prioritizing bug fixes (#2046) over feature additions for stability

---

**End of Digest**

*Generated: 2026-04-19*  
*Data Source: GitHub sipeed/picoclaw (last 24h activity)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-19

## 1. Today's Overview

IronClaw maintains high activity with **18 issues and 50 PRs updated in the last 24 hours**, though no new releases were tagged. The project is heavily focused on platform refactoring (Issue #2599 epic), with multiple PRs stacking incremental CI guardrails. Security improvements are prominent, including cross-tenant credential fallback removals. Several E2E test fixes indicate active quality assurance, though Telegram activation remains problematic. The community is actively reporting pain points around skill size limits and multi-account credential management.

## 2. Releases

**None** — No new releases in the past 24 hours. The project appears to be in active development without tagging a release today.

## 3. Project Progress

### Merged/Closed PRs (7 items)
| PR | Summary | Status |
|----|---------|--------|
| [#2531](https://github.com/nearai/ironclaw/pull/2531) | FINAL-await support + runaway loop protection (max 5 consecutive errors) | CLOSED |
| [#2656](https://github.com/nearai/ironclaw/pull/2656) | Harden tab_button selector against strict-mode duplicates | CLOSED |
| [#2570](https://github.com/nearai/ironclaw/pull/2570) | Allow completed event-driven missions to re-fire | CLOSED |

### Active High-Impact PRs
| PR | Summary | Size | Risk |
|----|---------|------|------|
| [#2381](https://github.com/nearai/ironclaw/pull/2381) | **Security fix**: Remove cross-tenant credential fallbacks (#2068, #2069, #2100) | L | Medium |
| [#2348](https://github.com/nearai/ironclaw/pull/2348) | Show descriptive chat titles instead of hex hash IDs | L | Medium |
| [#2571](https://github.com/nearai/ironclaw/pull/2571) | Surface tool output previews and structured rendering | XL | Medium |
| [#2653](https://github.com/nearai/ironclaw/pull/2653) | **Security fix**: Prefer keychain over env, TOCTOU-safe generation | L | High |
| [#2647](https://github.com/nearai/ironclaw/pull/2647) | Enforce platform/feature boundaries (ironclaw#2599 stage 5) | XL | Medium |
| [#2617](https://github.com/nearai/ironclaw/pull/2617) | Apply ExtensionName newtype to fan-out sites (PR 2/2) | XL | Medium |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Add Aliyun Coding Plan support (Anthropic-compatible interface) | XL | Low |
| [#2652](https://github.com/nearai/ironclaw/pull/2652) | Unblock Telegram E2E activation flow | S | Medium |

## 4. Community Hot Topics

### Most Active Issues (by recent update volume)
| Issue | Title | Status | Key Theme |
|-------|-------|--------|-----------|
| [#2633](https://github.com/nearai/ironclaw/issues/2633) | Gateway pre-existing correctness/perf issues surfaced during #2628 platform extraction | OPEN | Platform refactoring side effects |
| [#2636](https://github.com/nearai/ironclaw/issues/2636) | skill size limit error | OPEN | **User pain point**: 65KB hard limit perceived as too restrictive |
| [#2655](https://github.com/nearai/ironclaw/issues/2655) | sync_dispatched_runs never finalizes routine runs when linked job stays pending | OPEN | **Bug**: Routine run lifecycle management |
| [#91](https://github.com/nearai/ironclaw/issues/91) | Meeting intelligence pipeline (recording, transcription, action items) | OPEN | **Feature request**: Cross-cutting audio/memory/routines feature |

### Analysis
- **Skill size limit (#2636)**: User explicitly states "the skill size no need limit, no similar project do this" — community expects no artificial constraints. This is a friction point for power users deploying complex skills.
- **Meeting intelligence pipeline (#91)**: Long-standing P2 feature request spanning Feb 2026, indicating sustained demand for meeting automation capabilities.
- **Multi-account credentials (#2642)**: User request for credential profiles per service — a common enterprise need for users managing multiple Google/Notion accounts.

## 5. Bugs & Stability

### Critical/High Bugs Reported Today
| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#2655](https://github.com/nearai/ironclaw/issues/2655) | HIGH | `sync_dispatched_runs` never finalizes routine runs when linked job stays in pending state | No |
| [#2633](https://github.com/nearai/ironclaw/issues/2633) | MEDIUM | Gateway correctness/perf issues from platform extraction (#2628) | #2647 (in progress) |
| [#1882](https://github.com/nearai/ironclaw/issues/1882) | HIGH | **MCP server name validation lacks shell metacharacter protection** | Closed |

### Ongoing E2E Test Failures
| Issue | Channel | Status |
|-------|---------|--------|
| [#2624](https://github.com/nearai/ironclaw/issues/2624) | Telegram | Bot token validation 401 persists |
| [#2623](https://github.com/nearai/ironclaw/issues/2623) | Slack | Fixture health timeout |
| [#2625](https://github.com/nearai/ironclaw/issues/2625) | macOS REPL | PTY harness input delivery unreliable |

### Recently Resolved Bugs
- [#2410](https://github.com/nearai/ironclaw/issues/2410): Dashboard refreshing/wiping loop — CLOSED
- [#2482](https://github.com/nearai/ironclaw/issues/2482): Telegram group messages omit chat_type metadata — CLOSED
- [#2556](https://github.com/nearai/ironclaw/issues/2556): WASM channels auto-starting inactive channels — CLOSED

## 6. Feature Requests & Roadmap Signals

### User-Requested Features
| Issue | Feature | Priority | Notes |
|-------|---------|----------|-------|
| [#91](https://github.com/nearai/ironclaw/issues/91) | Meeting intelligence pipeline | P2 | Recording, transcription, action items, proactive follow-up |
| [#2642](https://github.com/nearai/ironclaw/issues/2642) | Credential profiles for multiple accounts per service | OPEN | Multiple Google/Notion accounts support |
| [#2654](https://github://nearai/ironclaw/issues/2654) | Complete engine→AppEvent coverage | OPEN | Real-time UI event bridging gaps |

### Predicted Next Development Areas
Based on issue volume and PR stacking:
1. **Platform boundary enforcement** (#2599 epic, stage 5 via #2647) — likely near completion
2. **Credential security hardening** — keychain preference (#2653) and multi-account support (#2642)
3. **Meeting intelligence** (#91) — cross-cutting feature spanning multiple subsystems
4. **E2E reliability** — Telegram (#2624) and Slack (#2623) fixtures need resolution

## 7. User Feedback Summary

### Pain Points
- **Skill size limitation (#2636)**: User frustration with 65KB cap, explicitly calling out that "no similar project do this." This is a friction point for deploying comprehensive skills.
- **Dashboard instability (#2410)**: QA reported refresh loop in staging, indicating user experience degradation in production-adjacent environments.
- **DNS dependency (#1826)**: Users report auth failures when DNS fails; suggests need for offline/resilient auth flow.

### Positive Signals
- **Aliyun integration (#1446)**: Community contributor adding regional LLM provider support, indicating IronClaw's growing international reach.
- **Active maintenance**: 7 PRs merged today shows maintainers actively processing contributions.

## 8. Backlog Watch

### Long-Unanswered or Stalled Issues
| Issue | Age | Title | Concern |
|-------|-----|-------|---------|
| [#91](https://github.com/nearai/ironclaw/issues/91) | Since Feb 2026 | Meeting intelligence pipeline | P2 feature request, needs roadmap decision |
| [#1820](https://github.com/nearai/ironclaw/issues/1820) | Mar 2026 | Secrets store not available | Closed but underlying infrastructure question may persist |
| [#1826](https://github.com/nearai/ironclaw/issues/1826) | Mar 2026 | NEARAI_AUTH_URL DNS resolution failure | Closed but DNS resilience may need architectural fix |

### PRs Needing Maintainer Attention
| PR | Size | Risk | Blocking |
|----|------|------|----------|
| [#2571](https://github.com/nearai/ironclaw/pull/2571) | XL | Medium | Tool output preview feature, affects UX |
| [#2617](https://github.com/nearai/ironclaw/pull/2617) | XL | Medium | ExtensionName newtype migration (stacked on #2611) |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | XL | Low | Aliyun provider — awaiting review for regional support |

---

*Digest generated from IronClaw repository activity on 2026-04-19. Data sourced from GitHub nearai/ironclaw.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest

**Date:** 2026-04-19  
**Repository:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)  
**Status:** Active Development

---

## 1. Today's Overview

CoPaw (QwenPaw) shows **high community activity** with 13 issues and 10 PRs updated in the last 24 hours. The project demonstrates active development across multiple fronts, including memory management, internationalization, and UI improvements. Two PRs were successfully merged/closed today. Notably, several Windows-specific bugs are receiving attention, including desktop startup hangs and VPN proxy issues with local models. The community is actively requesting features around voice capabilities, context usage visibility, and advanced memory systems.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Project Progress

### Merged/Closed PRs (Today)

| PR | Author | Description | Status |
|---|---|---|---|
| [#3561](https://github.com/agentscope-ai/QwenPaw/pull/3561) | yangz-github | Sync source branch | Closed |

### Active Development (Open PRs)

| PR | Author | Component | Description |
|---|---|---|---|
| [#3565](https://github.com/agentscope-ai/QwenPaw/pull/3565) | zhenai1314521 | Core/Memory | Add AgentMemory as memory_manager_backend option (vector + BM25 + knowledge graph triple retrieval) |
| [#3559](https://github.com/agentscope-ai/QwenPaw/pull/3559) | hanson-hex | Console | Vitest setup + unit/component tests for Chat pilot and API layer |
| [#3558](https://github.com/agentscope-ai/QwenPaw/pull/3558) | Leirunlin | Skills | Builtin skill dual-language support (EN/ZH) |
| [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) | jinliyl | Memory | Rebuild memory & context (long-term memory refactoring, auto-dream, summarize_status) |
| [#3556](https://github.com/agentscope-ai/QwenPaw/pull/3556) | shadowabi | Browser | Add browser_args and executable_path parameters for browser_use |
| [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) | Prince-liu | Console | Fix SSE crash on malformed surrogate text |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | hellogxp | Skills | Semantic skill routing (embedding-based retrieval to filter skills) |
| [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) | vvv214 | Routing | Scope-first effective model + runtime refinements |
| [#3544](https://github.com/agentscope-ai/QwenPaw/pull/3544) | leesf | Console | Enable filtering options for console channel messages |

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

| Issue | Title | Comments | Type | Link |
|---|---|---|---|---|
| **#3356** | QwenPaw upgrade still points WORKING_DIR to old directory | **19** | Bug | [Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) |
| **#2943** | copaw init hangs on "Security warning" prompt | **6** | Bug | [Issue #2943](https://github.com/agentscope-ai/QwenPaw/issues/2943) |
| **#3470** | QwenPaw是否有类似Hermes Agent的自我进化功能 | **5** | Feature | [Issue #3470](https://github.com/agentscope-ai/QwenPaw/issues/3470) |
| **#3293** | Voice response feature request | **3** | Feature | [Issue #3293](https://github.com/agentscope-ai/QwenPaw/issues/3293) |

### Analysis of Underlying Needs

**Issue #3356** (19 comments) indicates a **significant migration problem** where users upgrading from CoPaw to QwenPaw experience data being written to `.copaw` instead of `.qwenpaw`. This points to a critical upgrade path issue that affects data persistence and user experience during version migration.

**Issue #3470** (5 comments) reveals demand for **agent self-evolution capabilities**, suggesting users want their AI agents to learn and improve autonomously, similar to Hermes Agent's capabilities. This represents a strategic feature direction.

**Issue #3293** (3 comments) shows interest in **voice-first interaction**, indicating users want voice output as a primary response format rather than text-only.

---

## 5. Bugs & Stability

### Open Bugs (Ranked by Recent Activity)

| Severity | Issue | Title | Comments | Link |
|---|---|---|---|---|
| **High** | #3555 | Desktop hangs at "Waiting for HTTP ready..." on Windows | 1 | [Issue #3555](https://github.com/agentscope-ai/QwenPaw/issues/3555) |
| **High** | #3560 | Custom llama.cpp Backend: Tool Call Stream Parsing Error | 1 | [Issue #3560](https://github.com/agentscope-ai/QwenPaw/issues/3560) |
| **Medium** | #3564 | Frequently interrupted mid-process | 1 | [Issue #3564](https://github.com/agentscope-ai/QwenPaw/issues/3564) |
| **Medium** | #3562 | Ollama multi-turn output loss | 1 | [Issue #3562](https://github.com/agentscope-ai/QwenPaw/issues/3562) |
| **Medium** | #3542 | Ollama with VPN proxy model call failure | 2 | [Issue #3542](https://github.com/agentscope-ai/QwenPaw/issues/3542) |
| **Low** | #3557 | Console can't modify default agent | 1 | [Issue #3557](https://github.com/agentscope-ai/QwenPaw/issues/3557) |

### Related Fix PRs

- **#3553** (Prince-liu) - Fix SSE crash on malformed surrogate text - **Open**

### Stability Notes

Windows-specific issues dominate the bug reports today, with two critical startup/initialization problems (#3555, #2943) affecting the desktop experience. The Ollama integration shows multiple issues with proxy configurations and context handling.

---

## 6. Feature Requests & Roadmap Signals

### Notable Feature Requests

| Request | Description | Component | Link |
|---|---|---|---|
| **#3470** | Self-evolution functionality like Hermes Agent | Core | [Issue #3470](https://github.com/agentscope-ai/QwenPaw/issues/3470) |
| **#3293** | Voice response capabilities | Channels | [Issue #3293](https://github.com/agentscope-ai/QwenPaw/issues/3293) |
| **#3563** | Context usage visibility | Core | [Issue #3563](https://github.com/agentscope-ai/QwenPaw/issues/3563) |
| **#3545** | Delete model feature in Provider UI | Console | [Issue #3545](https://github.com/agentscope-ai/QwenPaw/issues/3545) ✓ **Closed** |

### Roadmap Signal Analysis

Based on active PRs and issues, **likely near-term priorities**:

1. **Memory System Overhaul** - Multiple PRs (#3565, #3548) indicate heavy investment in advanced memory management with vector search, BM25, and knowledge graph capabilities
2. **Internationalization (i18n)** - PR #3558 shows commitment to Chinese/English bilingual support for builtin skills
3. **Testing Infrastructure** - PR #3559 introduces Vitest for frontend testing, suggesting quality assurance improvements
4. **Console UI Improvements** - Filtering options (#3544) and agent management enhancements are being developed

---

## 7. User Feedback Summary

### Pain Points

| Pain Point | Evidence | Severity |
|---|---|---|
| **Upgrade path breaks WORKING_DIR** | Users installing to `.qwenpaw\` still have data written to `.copaw\` | High |
| **Windows startup hangs** | Desktop.bat hangs at "Waiting for HTTP ready..." indefinitely | High |
| **Ollama proxy issues** | VPN users cannot call local models through Ollama | Medium |
| **Context loss in multi-turn** | Ollama loses output after multiple turns with long context | Medium |

### Use Cases & Satisfaction

**Positive signals:**
- Feature request for delete model in Provider UI (#3545) was **closed** — suggests this was implemented
- Active first-time contributors (5 PRs marked) indicate growing community interest
- Memory system refactoring receives multiple parallel contributions, showing strong developer interest

**Dissatisfaction signals:**
- Windows users experiencing multiple blocking issues (init hang, desktop hang, proxy issues)
- Multi-turn context handling with Ollama appears unreliable
- Console vs APP parity issues (default agent modification) noted

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Status | Priority | Link |
|---|---|---|---|---|
| #2943 copaw init hangs on Security warning | 15 days | Closed | Was High | [Issue #2943](https://github.com/agentscope-ai/QwenPaw/issues/2943) |
| #3356 WORKING_DIR migration issue | 5 days | Open | High | [Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) |
| #3470 Self-evolution feature request | 3 days | Open | Medium | [Issue #3470](https://github.com/agentscope-ai/QwenPaw/issues/3470) |
| #3293 Voice response request | 7 days | Open | Medium | [Issue #3293](https://github.com/agentscope-ai/QwenPaw/issues/3293) |

### PRs Needing Review

| PR | Age | Status | Description |
|---|---|---|---|
| #3117 | 11 days | Open, Under Review | Semantic skill routing - needs discussions |
| #3565 | <1 day | Open | AgentMemory memory_manager_backend |

---

**Digest generated:** 2026-04-19  
**Data source:** GitHub activity from last 24 hours  
**Next update:** 2026-04-20

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-19

## 1. Today's Overview

ZeroClaw continues to demonstrate high activity with 48 issues and 38 PRs updated in the last 24 hours, reflecting a healthy, fast-moving open-source project. The project has shipped two new beta releases (v0.7.0 and v0.7.1), cementing the largest structural overhaul in the project's history — a full Cargo workspace split and new config schema with live migration. Community engagement remains strong, with several RFC proposals in flight and multiple PRs advancing features across channels, tooling, and runtime. The project appears in a stabilization phase following the v0.7.0 microkernel refactor, with maintainers actively closing bugs and rationalizing CI workflows.

## 2. Releases

### v0.7.1-beta.1049
- **Released:** 2026-04-18
- **Note:** Patch beta on top of v0.7.0; ships with CI cleanup and first-phase release tooling improvements (see PR #5867).

### v0.7.0-beta.1047 — Major Structural Overhaul
- **Released:** 2026-04-18
- **Key Changes:**
  - Entire codebase split into a proper Cargo workspace of focused crates (14 workspace crates).
  - New config schema with live migration from prior versions.
  - Changelog notes this is the largest structural overhaul in ZeroClaw's history.
- **Breaking Changes:** Config schema v2; users upgrading from pre-v0.7.0 will trigger live migration. The Dockerfile previously only copied `robot-kit` and `aardvark-sys` manifests, requiring a fix (see PR #5879).
- **Migration Notes:** Docker-based users should ensure all workspace crate manifests are copied before building. Existing TOML configs will be migrated automatically but should be backed up.

---

## 3. Project Progress

### Merged / Closed PRs Today (2026-04-18)
| PR | Description | Area |
|----|-------------|------|
| [#5888](https://github.com/zeroclaw-labs/zeroclaw/pull/5888) | Removed PAT dependency from release workflows (uses `GITHUB_TOKEN`) | CI |
| [#5867](https://github.com/zeroclaw-labs/zeroclaw/pull/5867) | Chore: bump version to 0.7.1 and update release changelog; Phase 1 CI rationalization | CI |
| [#5860](https://github.com/zeroclaw-labs/zeroclaw/pull/5860) | Fixed immutable-release error by splitting tag push from release creation | CI |
| [#5832](https://github.com/zeroclaw-labs/zeroclaw/pull/5832) | Signal channel: media attachments, marker wiring, inbound persistence | Channels |
| [#5826](https://github.com/zeroclaw-labs/zeroclaw/pull/5826) | Signal channel: render agent markdown as native Signal text styles | Channels |
| [#5762](https://github.com/zeroclaw-labs/zeroclaw/pull/5762) | Strip native tool messages for providers with `native_tool_calling=false` | Provider |
| [#5801](https://github.com/zeroclaw-labs/zeroclaw/pull/5801) | Added CONVENTIONS.md with development philosophy overview | Docs |
| [#5886](https://github.com/zeroclaw-labs/zeroclaw/pull/5886) | Telegram: accept group replies to bot messages | Channels |
| [#5888](https://github.com/zeroclaw-labs/zeroclaw/pull/5888) | Removed PAT dependency from release workflows | CI |

### Active PRs Advancing Features
| PR | Description | Risk |
|----|-------------|------|
| [#5733](https://github.com/zeroclaw-labs/zeroclaw/pull/5733) | Web UI: add model quick-switcher and persistent WebSocket connection | Medium |
| [#5879](https://github.com/zeroclaw-labs/zeroclaw/pull/5879) | Docker: copy all workspace crate manifests for build (bug fix for v0.7.0 breakage) | Low |
| [#5880](https://github.com/zeroclaw-labs/zeroclaw/pull/5880) | Deploy: add OpenShift/K8s deployment manifests | Docs |
| [#5868](https://github.com/zeroclaw-labs/zeroclaw/pull/5868) | Add native local STT via whisper.cpp behind `local-stt` feature flag | Dependencies |
| [#5874](https://github.com/zeroclaw-labs/zeroclaw/pull/5874) | Skills: add LLM reflection for Hermes-style SKILL.md generation | Agent |
| [#5606](https://github.com/zeroclaw-labs/zeroclaw/pull/5606) | Preserve streamed reasoning content for tool replay (fixes Kimi API 400 errors) | High |
| [#5864](https://github.com/zeroclaw-labs/zeroclaw/pull/5864) | Multimodal: harden image-marker parser against non-path payloads | Agent-approved |
| [#5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838) | Webhook channel: add retry logic with exponential backoff | Docs |
| [#5881](https://github.com/zeroclaw-labs/zeroclaw/pull/5881) | CI: migrate release workflows from PATs to GitHub App token | CI |
| [#5887](https://github.com/zeroclaw-labs/zeroclaw/pull/5887) | Scripts: add manual release script (no PATs needed) | CI |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)
| Issue | Title | Comments | Type |
|-------|-------|----------|------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Web dashboard not available (CLOSED, re-opened) | 15 | Bug |
| [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) | `runtime.kind = "native"` does not bypass Docker for shell tool execution | 6 | Bug, High Risk |
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | Feature: Provide a "full" docker image with all features enabled | 6 | Enhancement |
| [#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787) | RFC: Replace TOML i18n with Mozilla Fluent; remove in-repo translated docs | 4 | RFC, i18n |
| [#5576](https://github.com/zeroclaw-labs/zeroclaw/issues/5576) | RFC: Documentation Standards and Knowledge Architecture | 3 | RFC, Docs |
| [#5741](https://github.com/zeroclaw-labs/zeroclaw/issues/5741) | Feature: Interactive channel approval | 3 | Enhancement |
| [#5813](https://github.com/zeroclaw-labs/zeroclaw/issues/5813) | Compaction orphans `tool_result` blocks, causing Anthropic API 400 errors | 2 | Bug, S1 |

### Analysis of Underlying Needs
- **Web Dashboard Availability (#4866, #5348):** A persistent S1 issue affecting users — the web dashboard prompt persists across many versions, signaling a need for a proper bundled or auto-built web asset in releases. This is now CLOSED but the underlying issue suggests packaging gaps.
- **Docker Configuration Gaps (#5719, #3642):** Multiple contributors (perlowja, LaurensBosscher) are hitting Docker behavior issues — either forcing Docker when native is requested, or requiring a full-featured Docker image for non-technical users. The workspace split in v0.7.0 exposed a Dockerfile bug (PR #5879 addresses this).
- **Internationalization Modernization (#5787):** The community is ready to move from hand-rolled TOML i18n to Mozilla Fluent, signaling a maturing localization infrastructure.
- **Skills & Sandbox Configuration (#5720, #5722, #5721):** Contributor perlowja has filed three related bugs around Python skill execution in sandboxed environments, highlighting that the default security settings are too restrictive for realistic Python workloads. This suggests an upcoming RFC or feature for configurable sandbox profiles.

---

## 5. Bugs & Stability

### Active Bugs Ranked by Severity

| Severity | Issue | Title | Status | Fix PR? |
|----------|-------|-------|--------|---------|
| **S0** | [#5756](https://github.com/zeroclaw-labs/zeroclaw/issues/5756) | aarch64-unknown-linux-musl unable to run on Hi3536AV100 | CLOSED | — |
| **S1** | [#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) | `runtime.kind = "native"` does not bypass Docker for shell tools | OPEN | No |
| **S1** | [#5813](https://github.com/zeroclaw-labs/zeroclaw/issues/5813) | Compaction orphans `tool_result` blocks → API 400 errors (Signal) | OPEN | No |
| **S1** | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Web dashboard not available | CLOSED | — |
| **S1** | [#5861](https://github.com/zeroclaw-labs/zeroclaw/issues/5861) | `voice-wake` feature fails to compile in v0.6.9 | OPEN | No |
| **S1** | [#5348](https://github.com/zeroclaw-labs/zeroclaw/issues/5348) | Web dashboard not available (duplicate report) | CLOSED | — |
| **S1** | [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | Provider ignores `llamacpp` object | OPEN | No |
| **S2** | [#5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) | Shell policy blocks `git -C <path>` by lowercasing args | OPEN | No |
| **S2** | [#5720](https://github.com/zeroclaw-labs/zeroclaw/issues/5720) | `PYTHONPATH=val` inline env var prefix syntax broken in shell tool | OPEN | No |
| **S2** | [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | Default shell sandbox blocks realistic Python skill patterns | OPEN | No |
| **S2** | [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | Too much emphasis on memory | OPEN | No |
| **S2** | [#5810](https://github.com/zeroclaw-labs/zeroclaw/issues/5810) | `security.otp.gated_actions` silently accepts unknown action names | OPEN | No |
| **S3** | [#5536](https://github.com/zeroclaw-labs/zeroclaw/issues/5536) | Embedding search score percent display bug (not multiplied by 100) | OPEN | No |
| **S3** | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | Zeroclaw does not know it can add cron | OPEN | No |

### Notable Stability Observations
- **5 S1 bugs remain open**, including two with no fix PRs yet (#5719, #5813, #5861, #5815). The Signal channel compaction bug (#5813) is particularly concerning as it bricks sessions.
- **Web dashboard issues are marked CLOSED** (#4866, #5348), but the root cause (web assets not bundled) may not be fully addressed.
- **Security-related bugs** (#5809, #5722, #5810) suggest ongoing tension between default sandbox restrictions and real-world usability.
- **Compilation failure in `voice-wake`** (#5861) on Arch Linux with Rust 1.94.1 indicates potential compatibility drift.

---

## 6. Feature Requests & Roadmap Signals

### High-Interest Feature Requests

| Issue | Title | Signals |
|-------|-------|---------|
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | Feature: Provide a "full" docker image | Low barrier-to-entry; non-technical users; 3 👍 |
| [#5741](https://github.com/zeroclaw-labs/zeroclaw/issues/5741) | Feature: Interactive channel approval | Medium/high-risk operation flows; interactive UX |
| [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | Feature: Dream Mode — Periodic Memory Consolidation & Reflective Learning | Long-term memory architecture; idle-time processing |
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | RFC: Multi-agent UX flow — design | Multi-agent orchestration; just posted (2026-04-19) |
| [#5712](https://github.com/zeroclaw-labs/zeroclaw/issues/5712) | feat(channel): add IMAP polling fallback for servers without IDLE | Email channel resilience; broader server compatibility |
| [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) | feat(tools): session ownership model for destructive operations | Security model; multi-agent safety |
| [#5835](https://github.com/zeroclaw-labs/zeroclaw/issues/5835) | fix(gateway): evict cancel_tokens entries for abandoned sessions | Memory/resource management |
| [#5836](https://github.com/zeroclaw-l

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/manelsen/agents-radar).*