# AI Agents Ecosystem Digest 2026-04-18

> Issues: 7 | PRs: 24 | Projects covered: 7 | Generated: 2026-04-18 01:52 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Primary Project Deep Dive

# NullClaw Project Digest — 2026-04-18

---

## 1. Today's Overview

NullClaw shows **high development velocity** with 24 PR updates and 7 issues processed in the last 24 hours. The v2026.4.17 release shipped major improvements including Zig 0.16 migration and a security fix for Docker sandbox mount initialization. Contributor @manelsen is driving significant architectural work on a comprehensive tool customization system with trigger-based prioritization, while the project has resolved multiple connectivity and diagnostic bugs reported by users. The overall health appears strong with active maintenance across provider integrations, memory backends, and CLI tooling.

---

## 2. Releases

### v2026.4.17
**Released:** 2026-04-17

| Change | Author | PR |
|--------|--------|-----|
| Include v2026.4.9 | @DonPrus | [#795](https://github.com/nullclaw/nullclaw/pull/795) |
| Migrate project to Zig 0.16 | @DonPrus | [#823](https://github.com/nullclaw/nullclaw/pull/823) |
| fix(security): initialize docker sandbox mount args via factory | @manelsen | — |

**Migration Notes:** Projects upgrading to v2026.4.17 should ensure Zig 0.16 toolchain is installed. The Docker sandbox security fix resolves a potential privilege escalation vector in mount argument handling.

---

## 3. Project Progress

### Merged/Closed PRs (16 total)

| PR | Title | Author |
|----|-------|--------|
| [#830](https://github.com/nullclaw/nullclaw/pull/830) | v2026.4.17 release bump | DonPrus |
| [#829](https://github.com/nullclaw/nullclaw/pull/829) | Admin-oriented config and models CLI | DonPrus |
| [#828](https://github.com/nullclaw/nullclaw/pull/828) | fix(doctor): clarify CLI-only channel status diagnostics | manelsen |
| [#818](https://github.com/nullclaw/nullclaw/pull/818) | Add Weixin QR auth flow and channel support | DDGRCF |
| [#815](https://github.com/nullclaw/nullclaw/pull/815) | fix(web_search): add setup guidance for missing providers | manelsen |
| [#814](https://github.com/nullclaw/nullclaw/pull/814) | fix(agent): stabilize named-agent provider lifetimes | manelsen |
| [#813](https://github.com/nullclaw/nullclaw/pull/813) | fix(onboard): raise models refresh output budget | manelsen |
| [#798](https://github.com/nullclaw/nullclaw/pull/798) | ci: pin CI workflow actions and set permissions | grtninja |
| [#787](https://github.com/nullclaw/nullclaw/pull/787) | feat(test): utility additions | fakhriaunur |
| [#786](https://github.com/nullclaw/nullclaw/pull/786) | feat(test): Add tests for version, verbose, and web search providers | fakhriaunur |
| [#782](https://github.com/nullclaw/nullclaw/pull/782) | feat(telegram): add interactive skill menus and harden topic/codex handling | vedmalex |
| [#772](https://github.com/nullclaw/nullclaw/pull/772) | fix: correct Responses API tool schema and null error classification | telagod |
| [#757](https://github.com/nullclaw/nullclaw/pull/757) | feat: dispatch agent on heartbeat when HEARTBEAT.md has tasks | quinlanjager |
| [#755](https://github.com/nullclaw/nullclaw/pull/755) | feat: support http_proxy/https_proxy env vars in std.http.Client | juvenn |
| [#754](https://github.com/nullclaw/nullclaw/pull/754) | refactor(providers): consolidate error text predicates | manelsen |
| [#735](https://github.com/nullclaw/nullclaw/pull/735) | feat(skills): support web-discovered skill installs | manelsen |

**Key Advancements:**
- **Provider reliability**: Fixed OpenRouter model refresh (output buffer too small), Responses API schema, and sub-agent connectivity bugs
- **Diagnostic improvements**: Doctor command now correctly reports CLI-only channel status
- **Platform expansion**: Weixin QR authentication integration added
- **Test coverage**: Added 14+ new unit tests across version, verbose, search utilities
- **Proxy support**: HTTP_PROXY/HTTPS_PROXY environment variables now respected

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Title | Status | Comments | Reactions |
|-------|-------|--------|----------|----------|
| [#812](https://github.com/nullclaw/nullclaw/issues/812) | [bug] http_request — internet search not working | CLOSED | 4 | 👍 1 |
| [#764](https://github.com/nullclaw/nullclaw/issues/764) | Add NullClaw logo to Agent Skills client list | OPEN | 2 | — |

### Hot PRs (by recent activity)

| PR | Title | Author | Status |
|----|-------|--------|--------|
| [#837](https://github.com/nullclaw/nullclaw/pull/837) | feat(config): support external tool_customizations_file | manelsen | OPEN |
| [#836](https://github.com/nullclaw/nullclaw/pull/836) | feat(agent): trigger-based tool prioritization | manelsen | OPEN |
| [#835](https://github.com/nullclaw/nullclaw/pull/835) | feat(tools): implement system_prompt and enabled overrides | manelsen | OPEN |
| [#834](https://github.com/nullclaw/nullclaw/pull/834) | feat: add tool customization config schema | manelsen | OPEN |
| [#831](https://github.com/nullclaw/nullclaw/pull/831) | fix(skills): support Agent Skills RFC 0.2.0 | manelsen | OPEN |

### Underlying Needs Analysis

1. **Tool Customization System** — Multiple PRs (#837, #836, #835, #834, #411) indicate strong demand for fine-grained tool configuration including trigger keywords, priority management, custom descriptions, and enabled/disabled states. This is a major feature cluster in development.

2. **Agent Skills Integration** — RFC 0.2.0 support (#831) and client listing request (#764) suggest the ecosystem is expanding. Users want NullClaw to be recognized as a first-class Agent Skills client.

3. **Internet Search Capability** — Issue #812 received the most discussion (4 comments), indicating setup friction for search functionality that remains a pain point despite being a core feature.

---

## 5. Bugs & Stability

### Closed Bug Reports (4)

| Issue | Bug | Severity | Fix PR |
|-------|-----|----------|--------|
| [#809](https://github.com/nullclaw/nullclaw/issues/809) | models refresh fails for OpenRouter — `max_output_bytes` too small | **High** | [#813](https://github.com/nullclaw/nullclaw/pull/813) |
| [#811](https://github.com/nullclaw/nullclaw/issues/811) | Sub-agent connection fails with custom OpenAI-compatible provider | **High** | (indirect via stability work) |
| [#827](https://github.com/nullclaw/nullclaw/issues/827) | `channel status` contradicts `doctor` output | Medium | [#828](https://github.com/nullclaw/nullclaw/pull/828) |
| [#812](https://github.com/nullclaw/nullclaw/issues/812) | Internet search capability not working | Medium | (under investigation) |

### Open Bugs

| Issue | Bug | Severity | Notes |
|-------|-----|----------|-------|
| — | None reported in last 24h | — | — |

**Stability Assessment:** Recent bugs are being addressed rapidly. Provider connectivity issues (OpenRouter, custom providers) appear resolved. The internet search issue (#812) is closed but may require follow-up verification.

---

## 6. Feature Requests & Roadmap Signals

### Open Feature Requests

| Issue | Title | Author | Signals |
|-------|-------|--------|---------|
| [#832](https://github.com/nullclaw/nullclaw/issues/832) | Concurrent/non-blocking interactivity | superhero75 | Major architectural enhancement request |
| [#833](https://github.com/nullclaw/nullclaw/issues/833) | Multi-workspace support for gateway command | jacktang | CLI enhancement |
| [#764](https://github.com/nullclaw/nullclaw/issues/764) | Add NullClaw logo to Agent Skills client list | jonathanhefner | Ecosystem visibility |

### Feature PRs in Review

| PR | Title | Likely Roadmap? |
|----|-------|-----------------|
| [#712](https://github.com/nullclaw/nullclaw/pull/712) | Knowledge Graph Memory backend with SQLite recursive CTEs | Yes — significant memory investment |
| [#837](https://github.com/nullclaw/nullclaw/pull/837) | External tool_customizations_file support | Yes — complements #834-836 |
| [#836](https://github.com/nullclaw/nullclaw/pull/836) | Trigger-based tool prioritization | Yes — part of tool customization suite |

**Prediction:** The tool customization system (PRs #837, #836, #835, #834, #411) is likely to land in the next minor version given the coordinated effort and schema definition already merged. The Knowledge Graph memory backend represents a longer-term investment but shows active progress.

---

## 7. User Feedback Summary

### Pain Points Identified

| Category | Issue | User Sentiment |
|----------|-------|----------------|
| **Setup Friction** | Internet search capability doesn't work out-of-the-box (#812) | Frustrated — user came from Picoclaw/ZeroClaw |
| **Provider Compatibility** | Sub-agent communication fails with custom OpenAI-compatible providers (#811) | Blocking — prevents multi-agent architectures |
| **Diagnostic Confusion** | Contradictory output between `channel status` and `doctor` (#827) | Confused — undermined trust in CLI |
| **Model Catalog** | OpenRouter models refresh always fails (#809) | Blocking — affects core functionality |

### Positive Signals

- Users appreciate project organization ("very organized" — #812)
- Migration interest shown (Zig 0.16 upgrade shipped smoothly)
- Active community engagement (multiple contributors fixing concurrent issues)
- Telegram integration gaining features (interactive menus, skill browsing)

---

## 8. Backlog Watch

### Long-Unanswered Important Items

| Item | Type | Age | Status | Attention Needed |
|------|------|-----|--------|------------------|
| [#411](https://github.com/nullclaw/nullclaw/pull/411) | Feature PR | ~5 weeks | OPEN | Awaiting review — tool customization foundation |
| [#712](https://github.com/nullclaw/nullclaw/pull/712) | Feature PR | ~3.5 weeks | OPEN | Awaiting review — Knowledge Graph memory |
| [#789](https://github.com/nullclaw/nullclaw/pull/789) | Fix PR | ~10 days | OPEN | Awaiting review — gateway bind safety + rate limiting |
| [#764](https://github.com/nullclaw/nullclaw/issues/764) | Feature Request | ~2 weeks | OPEN | Maintainer decision needed on Agent Skills listing |

### Priority Review Candidates

1. **#411** — Comprehensive tool customization system; groundwork for #834-837
2. **#789** — Security (gateway binding) and rate limiting fixes
3. **#712** — Major memory architecture addition
4. **#832** — Architectural discussion needed for concurrent interactivity

---

*Generated: 2026-04-18 | Data source: GitHub nullclaw/nullclaw | All URLs reference https://github.com/nullclaw/nullclaw*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal Assistant Ecosystem

**Report Date:** 2026-04-18  
**Scope:** Seven active open-source AI agent projects

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing **intense development activity** across all monitored projects, with collective 24-hour updates exceeding 400 combined PRs and 280 issues. The ecosystem reveals a clear maturation trend: projects are evolving from single-purpose CLI tools toward **multi-channel, multi-provider, memory-augmented agent platforms**. Shared priorities include provider reliability, security hardening, and observability enhancements. Notably, the community is converging on similar architectural challenges—tool customization, long-term memory persistence, and cross-platform deployment—despite varied implementation approaches. Rust-based projects (NullClaw, ZeroClaw, IronClaw) show strong emphasis on memory safety and performance, while Python-based alternatives (NanoBot, CoPaw) prioritize flexibility and rapid iteration.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Open Issues | Open PRs | Releases (24h) | Health Assessment |
|---------|-------------|-----------|-------------|----------|----------------|-------------------|
| **NullClaw** | 7 | 24 | ~15 | ~20 | v2026.4.17 | 🟢 Strong |
| **NanoBot** | 15 | 51 | ~20 | ~15 | None | 🟢 Strong |
| **Hermes Agent** | 50 | 50 | ~40 | ~30 | None | 🟢 Strong |
| **PicoClaw** | 103 | 135 | ~60 | ~40 | v0.2.6-nightly | 🟢 Very High |
| **IronClaw** | 28 | 50 | ~20 | 2 | Pending v0.25.0 | 🟡 High (with critical bugs) |
| **CoPaw/QwenPaw** | 50 | 46 | ~30 | ~25 | v1.1.2 | 🟢 Strong |
| **ZeroClaw** | 32 | 50 | ~25 | ~20 | v0.7.0-beta (3) | 🟡 Beta (high risk) |

**Observations:**
- PicoClaw leads in raw activity volume (135 PRs/24h)
- Hermes Agent and CoPaw show balanced issue-to-PR ratios indicating healthy peer engagement
- IronClaw's low open PR count (2) with high 24h activity suggests rapid merge cycles or CI bottlenecks
- ZeroClaw's beta status with multiple S1 bugs indicates elevated risk for production adoption

---

## 3. Primary Project Positioning

### NullClaw
**Positioning:** Zig-based, memory-specialist agent platform  
**Differentiator:** Native Zig implementation (v0.16), Knowledge Graph memory backend in development, trigger-based tool prioritization system  
**Community:** Mid-size (~15 active contributors), focused on architectural refinement

### NanoBot
**Positioning:** Lightweight, multi-channel personal assistant  
**Differentiator:** Session→JSONL→MEMORY.md→Dream architecture, strong Feishu/Telegram integration, clean codebase praised by users  
**Community:** Active contributor base with strong Asian platform focus

### Hermes Agent
**Positioning:** Long-horizon agent with provider ecosystem breadth  
**Differentiator:** Extensive provider coverage (Kimi, Gemini, Copilot, Vertex AI), mempalace external memory request (21👍), process leak fixes  
**Community:** Largest community engagement (17 comments on top issue), enterprise-adjacent use cases

### PicoClaw
**Positioning:** High-velocity, enterprise-ready multi-user platform  
**Differentiator:** Agent Shield security model, Mattermost integration, Seahorse biologically-inspired memory system, contextual ring indicator  
**Community:** Highest activity volume, strongest enterprise feature set

### IronClaw
**Positioning:** Rust-based gateway/orchestrator with DingTalk focus  
**Differentiator:** Anti-silence UX (real-time feedback), Aliyun integration, pending v0.25.0 with breaking `ironclaw_common` changes  
**Community:** Active bug bash program, security-conscious development

### CoPaw/QwenPaw
**Positioning:** Mission-mode autonomous execution platform  
**Differentiator:** v1.1.2 Mission Mode for autonomous multi-phase tasks, ACP server for IDE integration, Signal channel addition  
**Community:** Strong upgrade path discussions, MCP configuration challenges

### ZeroClaw
**Positioning:** Cargo-workspace, security-first shell sandbox  
**Differentiator:** Landlock/Seccomp sandboxing, TOTP-gated commands, native-tls enterprise support, largest structural overhaul (v0.7.0)  
**Community:** RFC-driven development (Fluent i18n proposal), beta testers needed for migration validation

---

## 4. Shared Technical Focus Areas

### 4.1 Memory Architecture (All Projects)
| Project | Memory Approach | Status |
|---------|-----------------|--------|
| NullClaw | Knowledge Graph with SQLite CTEs | PR #712 (3.5 weeks, needs review) |
| NanoBot | Session→JSONL→MEMORY.md→Dream | Known limitations flagged (#3227) |
| Hermes Agent | External memory request (mempalace) | 21👍, high priority |
| PicoClaw | Seahorse biologically-inspired system | PR #1919 active |
| IronClaw | DingTalk anti-silence UX feedback | Implemented |
| CoPaw | Memory rebuild in progress | PR #3548 |
| ZeroClaw | Dream Mode proposal | New RFC #5849 |

**Cross-project signal:** Memory persistence beyond context windows is the top requested feature across all ecosystems.

### 4.2 Provider Reliability & Multi-Provider Support
- **NullClaw:** OpenRouter refresh fix, Responses API schema correction
- **NanoBot:** GLM error 1214 fix, provider-specific API quirks addressed
- **Hermes Agent:** Kimi temperature forcing (0.6), Gemini/Copilot compatibility work
- **PicoClaw:** LM Studio easy connect requested (#28), OpenRouter free tier fixes
- **CoPaw:** Kimi Code API support requested (#3437), LLM routing refinements
- **ZeroClaw:** llamacpp object handling, Groq tool_use_failed fix

### 4.3 Security Hardening
- **IronClaw:** Critical—Engine V2 bypasses secret scanning (#2491)
- **ZeroClaw:** TOTP-gated commands (phase 1), Landlock sandbox fixes
- **NanoBot:** Filesystem layer enforcement, SSRF detection
- **PicoClaw:** Agent Shield multi-user security (PR #2313)
- **CoPaw:** Tool guard response information

### 4.4 Tool Customization & Configuration
- **NullClaw:** External tool_customizations_file, trigger-based prioritization (5 coordinated PRs)
- **Hermes Agent:** JSON Configuration System proposal (#11657)
- **ZeroClaw:** New config schema shipped, live migration path

### 4.5 Observability & Debugging
- **NanoBot:** LangSmith integration restoration (#3140)
- **PicoClaw:** Context usage ring indicator, /context command (#2537)
- **ZeroClaw:** Observer and runtime trace events (#5785)
- **CoPaw:** Agent Statistics page (#3365)

---

## 5. Differentiation Analysis

| Dimension | NullClaw | NanoBot | Hermes | PicoClaw | IronClaw | CoPaw | ZeroClaw |
|-----------|----------|---------|--------|----------|----------|-------|----------|
| **Language** | Zig | Python | Python | Python | Rust | Python | Rust |
| **Target User** | Developers | Personal users | Developers | Enterprise | Enterprise/Teams | Developers | Security-conscious |
| **Primary Channel** | CLI-first | Multi-channel | Multi-channel | Multi-channel | Gateway | CLI/GUI | CLI |
| **Key Differentiator** | Memory graphs | Lightweight | Provider breadth | Agent Shield | DingTalk UX | Mission Mode | Shell sandbox |
| **Release Cadence** | Weekly | Sporadic | Sporadic | Nightly | Pre-release | v1.1.2 stable | Beta cycle |
| **Security Model** | Docker sandbox | Env variable config | ${ENV_VAR} support | Multi-user ACL | Secrets management | Tool guards | Landlock + TOTP |
| **Memory Strategy** | Knowledge Graph | Session/Dream | External (mempalace) | Seahorse | Event-based | Rebuilding | Dream Mode proposal |

**Architectural Divergence:**
- **Rust projects** (NullClaw, IronClaw, ZeroClaw) prioritize performance, memory safety, and sandboxing
- **Python projects** favor rapid iteration, MCP flexibility, and multi-provider integration
- **Enterprise-focused** (PicoClaw, IronClaw) invest in multi-user support, ACLs, and observability
- **Developer-focused** (NullClaw, Hermes, CoPaw) emphasize extensibility, skills ecosystems, and tool customization

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, Active Stabilization)
| Project | Characteristics |
|---------|-----------------|
| **PicoClaw** | Highest activity volume, nightly releases, strong enterprise roadmap |
| **Hermes Agent** | Consistent 50+ updates/24h, quick critical bug turnaround |
| **ZeroClaw** | Major beta cycle (v0.7.0), 3 beta builds in 24h, high-risk migration |

### Tier 2: Stable Enhancement (Balanced Activity, Maturing Feature Set)
| Project | Characteristics |
|---------|-----------------|
| **NullClaw** | Coordinated PR clusters (tool customization suite), v2026.4.x stable |
| **CoPaw** | v1.1.2 stable release, Mission Mode launch, IDE integration path |
| **NanoBot** | Focused bug fixes, observability restoration, Feishu integration |

### Tier 3: Critical Stabilization (Active Bugs, Architectural Decisions)
| Project | Characteristics |
|---------|-----------------|
| **IronClaw** | Pending breaking release, security concern (Engine V2), bug bash in progress |

**Maturity Indicators:**
- **Longest-standing issues:** PicoClaw #28 (66 days), Hermes #411 (44 days), CoPaw #508 (46 days)
- **Active RFC process:** ZeroClaw (Fluent i18n), Hermes (provider configuration)
- **Breaking change management:** IronClaw (v0.3.0 in ironclaw_common), ZeroClaw (config schema migration)

---

## 7. Trend Signals

### 7.1 Industry Trends Extracted from Community Feedback

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Memory beyond context** | 4+ projects with active memory work | Standard expectation emerging; knowledge graph approaches gaining traction |
| **Multi-provider reliability** | Provider-specific bugs across all projects | Vendor abstraction layers needed; test infrastructure investments required |
| **Enterprise security** | Multi-user ACL, TOTP gates, secrets scanning | Production deployments driving security-first requirements |
| **IDE integration** | CoPaw ACP server, ZeroClaw web UI enhancements | Agents becoming developer toolchain components |
| **Cross-platform messaging** | Signal, Mattermost, WeChat, Feishu channels | Diversification beyond Discord/Telegram expected |
| **Local LLM support** | LM Studio requests, llamacpp handling | Privacy-preserving deployments growing |

### 7.2 Technical Debt Hotspots

| Issue Type | Affected Projects | Priority |
|------------|-------------------|----------|
| Config/env variable parsing | NanoBot, Hermes, IronClaw | High |
| Unicode/UTF-8 handling | CoPaw, Hermes | Medium |
| Docker/container deployment | PicoClaw, ZeroClaw | Medium |
| Windows compatibility | CoPaw, PicoClaw | Medium |

### 7.3 Strategic Recommendations for AI Agent Developers

1. **Provider abstraction is table stakes** — Users expect seamless provider switching; invest in robust abstraction layers
2. **Memory architecture is the differentiator** — Knowledge Graph and external memory systems will define next-generation capabilities
3. **Security cannot be bolted on** — Sandbox design, secrets scanning, and TOTP should be architectural from day one
4. **Multi-channel is mandatory** — Projects lacking Mattermost, Signal, WeChat support will face integration pressure
5. **Observability drives adoption** — LangSmith, statistics pages, and trace events are increasingly expected by enterprise users

---

**Report Summary:** The ecosystem is healthy with 7 actively maintained projects showing 400+ combined weekly contributions. PicoClaw leads in activity volume; IronClaw requires immediate security attention; CoPaw demonstrates best new-feature execution (Mission Mode). Memory persistence, provider reliability, and security hardening are cross-cutting priorities. Rust-based projects differentiate on safety and performance; Python projects on flexibility and ecosystem integration.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-18

## 1. Today's Overview

NanoBot maintains **high development velocity** with 51 PRs and 15 issues updated in the last 24 hours. No new releases were published. The community is actively addressing **memory system limitations**, **security hardening**, and **multi-provider reliability**. Notably, 8 PRs were merged/closed today (24 total PR activity), including several critical bug fixes for LLM error handling and security vulnerabilities. The project shows healthy engagement with a mix of bug reports, feature requests, and community contributions.

---

## 2. Releases

**No new releases** were published on 2026-04-18.

---

## 3. Project Progress

### Merged/Closed PRs (8 of 24 closed today):

| PR | Author | Description | Status |
|---|---|---|---|
| [#3266](https://github.com/HKUDS/nanobot/pull/3266) | JakobBonhoeffer | Fixed mid-stream error leads to exit | Closed |
| [#3163](https://github.com/HKUDS/nanobot/pull/3163) | sicnuyudidi | Fix cron tool schema require message for add action | Closed |
| [#3249](https://github.com/HKUDS/nanobot/pull/3249) | fuleinist | Guard tool execution with finish_reason check | Closed |
| [#3225](https://github.com/HKUDS/nanobot/pull/3225) | subalkum | Guard tool execution against non-compliant API gateway injection | Closed |
| [#3238](https://github.com/HKUDS/nanobot/pull/3238) | mcampo | Pass allowed_env_keys to exec tool calls in subagents | Closed |
| [#3248](https://github.com/HKUDS/nanobot/pull/3248) | chengyongru | Fall back to raw_archive on LLM error response | Closed |
| [#3233](https://github.com/HKUDS/nanobot/pull/3233) | chengyongru | Preserve user message to prevent GLM error 1214 | Closed |
| [#3247](https://github.com/HKUDS/nanobot/pull/3247) | chengyongru | Fix memory fallback on LLM error during archive | Closed |
| [#3192](https://github.com/HKUDS/nanobot/pull/3192) | JiajunBernoulli | Update channel plugin build backend to hatchling | Closed |

**Key themes:** LLM error resilience, memory corruption prevention, security hardening, and documentation updates.

---

## 4. Community Hot Topics

### Most Active Issues (by engagement):

1. **#3227** — Memory System Limitations in Long-term/Large Projects  
   🔗 https://github.com/HKUDS/nanobot/issues/3227  
   📊 9 comments, 4 👍  
   A user praised the codebase cleanliness but flagged that the current memory architecture (Session → `history.jsonl` → `MEMORY.md` + Dream) struggles with detail retention in extended/large projects. This is a high-signal architectural concern.

2. **#2588** — Home Assistant Knowledge / Tool Usage with Qwen Models  
   🔗 https://github.com/HKUDS/nanobot/issues/2588  
   📊 9 comments  
   User unable to make tools work with Qwen models despite success on OpenClaw.

3. **#3143** — LLM Returned Error: Code 1214 (Messages Parameter Illegal)  
   🔗 https://github.com/HKUDS/nanobot/issues/3143  
   📊 9 comments  
   Token consolidation errors with Feishu integration; addressed by PR #3233.

4. **#3107** — Feature Suggestions (Status, System Prompt, Retry, etc.)  
   🔗 https://github.com/HKUDS/nanobot/issues/3107  
   📊 6 comments  
   Multi-item roadmap signal including status display, session history visibility, timeout config, and provider fallback.

### Most Active PRs (by recent updates):

- **#3144** — AgentHiFive Integration  
  🔗 https://github.com/HKUDS/nanobot/pull/3144  
  Major new MCP-backed backend integration with Telegram/Slack channels.

- **#3263** — Guide LLM Read Session History  
  🔗 https://github.com/HKUDS/nanobot/pull/3263  
  Direct response to issue #3227; aims to improve memory context handling.

- **#3216** — WebSocket Tooling, Session Lifecycle, Reasoning  
  🔗 https://github.com/HKUDS/nanobot/pull/3216  
  Significant enhancement to WebSocket channels and agent reasoning.

- **#3140** — Restore Full-Featured LangSmith Integration  
  🔗 https://github.com/HKUDS/nanobot/pull/3140  
  Restores observability dropped in v0.1.5.

**Underlying needs:** Multi-model reliability, observability, configurable resilience, and improved long-context memory handling.

---

## 5. Bugs & Stability

### Critical/P0 Issues:

| Issue | Title | Severity | Fix PR | Status |
|---|---|---|---|---|
| [#3251](https://github.com/HKUDS/nanobot/issues/3251) | config.json `${VAR}` env syntax not parsed → auth failure | P0 | — | Open |
| [#3256](https://github.com/HKUDS/nanobot/issues/3256) | Mid-stream LLM response truncation not retried | High | #3266 | Closed |
| [#3244](https://github.com/HKUDS/nanobot/issues/3244) | History update failure after LLM error | High | #3248, #3247 | Closed |
| [#3265](https://github.com/HKUDS/nanobot/issues/3265) | UI dumps excessive output with Gemini + detailed skills | Medium | — | Open |

### Medium/Resolved:

- **#3113** — Cron tool schema mismatch causing LLM loops → Fixed by [#3163](https://github.com/HKUDS/nanobot/pull/3163)
- **#3250** — Missing text from PPTX tables and grouped shapes → Open
- **#3206** — Gemini provider API key error (multiple credentials) → Open

### Security Fixes Merged:

- **#3255** — Filesystem layer enforcement for `history.jsonl` / `.dream_cursor`
- **#3252** — SSRF detection for non-HTTP schemes (`file://`, `gopher://`)

**Assessment:** Critical bugs are being addressed rapidly. The P0 config env variable issue (#3251) needs immediate maintainer attention.

---

## 6. Feature Requests & Roadmap Signals

### Notable Feature Requests:

| Issue/PR | Description | Priority Signal |
|---|---|---|
| [#3107](https://github.com/HKUDS/nanobot/issues/3107) | Status task count, session history in system prompt, LLM timeout config, model CLI arg, multi-provider config, provider fallback | 6 comments |
| [#3246](https://github.com/HKUDS/nanobot/issues/3246) | Silent/quiet retry mode to reduce noisy UX during error recovery | Fresh request |
| [#3257](https://github.com/HKUDS/nanobot/issues/3257) | Pipeline latency metrics for voice interactions (STT→LLM→TTS) | Observability gap |
| [#3258](https://github.com/HKUDS/nanobot/pull/3258) | Mark skills unavailable when required env vars aren't accessible | Security/UX |
| [#3264](https://github.com/HKUDS/nanobot/pull/3264) | Custom OpenAI-compatible provider support | Flexibility |

**Predicted next-version items:** Custom provider config, skill availability checks, and LangSmith observability restoration appear closest to merge.

---

## 7. User Feedback Summary

### Positive Signals:
- Codebase praised as **clean, lightweight, and easy to explore** (Issue #3227)
- Good learning resource for AI agent concepts

### Pain Points:
1. **Memory architecture limitations** — Current system (JSONL → MEMORY.md → Dream) loses detail in large projects
2. **Multi-provider reliability** — Frequent auth errors, token limit handling, provider-specific API quirks (GLM error 1214)
3. **Error UX** — Noisy retry messages during error recovery
4. **Observability gaps** — No latency breakdown for voice pipelines, limited logging granularity
5. **Configuration rigidity** — Environment variable substitution in config.json silently fails

### Use Cases Reported:
- Personal AI assistants with voice interaction
- Home automation control (Home Assistant)
- Multi-channel deployment (Telegram, Slack, WhatsApp, Feishu)
- Team collaboration with shared Claude/agent instances

---

## 8. Backlog Watch

### Issues Requiring Maintainer Attention:

| Issue | Age | Description | Risk |
|---|---|---|---|
| [#1672](https://github.com/HKUDS/nanobot/issues/1672) | ~40 days | WhatsApp self-reply not working (replies to others but not self) | User blocking |
| [#2588](https://github.com/HKUDS/nanobot/issues/2588) | ~20 days | Tool usage broken with Qwen models | Provider support gap |
| [#3206](https://github.com/HKUDS/nanobot/issues/3206) | ~2 days | Gemini API key error (multiple credentials) | Quick fix potential |
| [#3251](https://github.com/HKUDS/nanobot/issues/3251) | ~1 day | P0: Env var config parsing broken | Critical |
| [#3250](https://github.com/HKUDS/nanobot/issues/3250) | ~1 day | PPTX table/group shape extraction incomplete | Feature gap |
| [#3257](https://github.com/HKUDS/nanobot/issues/3257) | ~1 day | Voice pipeline latency metrics missing | Observability |

### Stale PRs Needing Review:

| PR | Age | Description | Blocked By |
|---|---|---|---|
| [#3144](https://github.com/HKUDS/nanobot/pull/3144) | ~4 days | AgentHiFive integration | Review |
| [#3140](https://github.com/HKUDS/nanobot/pull/3140) | ~4 days | LangSmith integration restoration | Review |
| [#2529](https://github.com/HKUDS/nanobot/pull/2529) | ~22 days | WhatsApp audio download for transcription | Review |

---

*Digest generated for NanoBot (HKUDS/nanobot) — 2026-04-18*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-18

## 1. Today's Overview

Hermes Agent demonstrates **high activity with 50 issues and 50 PRs updated in the last 24 hours**. No new releases shipped today. The project shows active maintenance with 10 PRs merged/closed, primarily addressing critical bugs including Kimi provider temperature handling and process leaks. Community engagement remains strong with 17 comments on the top issue, and the backlog reflects ongoing provider compatibility challenges across multiple LLM backends (Kimi, Gemini, Copilot).

---

## 2. Releases

**No new releases today.**

The project has not shipped a new version in the past 24 hours. Maintainers are actively reviewing and merging PRs that may be included in an upcoming release.

---

## 3. Project Progress

### Merged/Closed PRs (10 total in last 24h)

| PR | Author | Summary |
|----|--------|---------|
| [#11889](https://github.com/NousResearch/hermes-agent/pull/11889) | teknium1 | **fix(kimi): force 0.6 on main chat path** — Salvage of #11883, ensures kimi-for-coding sends temperature=0.6 on main chat-completions. |
| [#11883](https://github.com/NousResearch/hermes-agent/pull/11883) | helix4u | **fix(kimi): force 0.6 on main chat path** — Fixes remaining temperature hole on main chat-completions path. |
| [#11843](https://github.com/NousResearch/hermes-agent/pull/11843) | teknium1 | **fix: two process leaks** — Closes agent-browser node daemon accumulation and paste.rs sleeper processes. |
| [#11231](https://github.com/NousResearch/hermes-agent/pull/11231) | sprmn24 | **test(nous_subscription): add use_gateway flag coverage** — Adds 39 tests for Nous Tool Gateway feature. |
| [#538](https://github.com/NousResearch/hermes-agent/pull/538) | Himess | **fix: cron HERMES_HOME path mismatch, HomeAssistant toolset mapping, Daytona timeout drift** |

### Open PRs of Note

| PR | Author | Summary | Status |
|----|--------|---------|--------|
| [#11708](https://github.com/NousResearch/hermes-agent/pull/11708) | perqin | fix(tools): respect configured terminal cwd during init | Open |
| [#11887](https://github.com/NousResearch/hermes-agent/pull/11887) | liftaris | fix(tui): resolve runtime provider in _make_agent (fixes #11884) | Open |
| [#11888](https://github.com/NousResearch/hermes-agent/pull/11888) | Linux2010 | fix: docker_mount_cwd_to_workspace missing from file_tools | Open |
| [#11878](https://github.com/NousResearch/hermes-agent/pull/11878) | konsisumer | fix(terminal): cd into configured cwd before capturing session snapshot | Open |
| [#11657](https://github.com/NousResearch/hermes-agent/pull/11657) | RichardQidian | feat: Add JSON Configuration System with Centralized Provider Management | Open |
| [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) | slawt | feat(vertex): add Vertex AI provider for Gemini models | Open |
| [#11855](https://github.com/NousResearch/hermes-agent/pull/11855) | Mibayy | feat(agent): prompt-injection immune system for tool outputs | Open |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Author | Comments | 👍 | Topic |
|-------|--------|----------|-----|-------|
| [#11765](https://github.com/NousResearch/hermes-agent/issues/11765) | zhuyankarl | 17 | 4 | **[Bug] Kimi provider fails with HTTP 400 temperature error** — Requires per-model temperature override |
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | zznner-dot | 10 | 2 | **[Bug] Response truncated due to output length limit** — Affects CLI/gateway messaging |
| [#7893](https://github.com/NousResearch/hermes-agent/issues/7893) | DrexxLaggui | 10 | 0 | **[Bug] Gemini provider HTTP 400 "Multiple authentication credentials"** |
| [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) | trevorgordon981 | 8 | 21 | **Add mempalace for external memory support** — Feature request for persistent, queryable memory |
| [#7734](https://github.com/NousResearch/hermes-agent/issues/7734) | ssly | 5 | 0 | **[Bug] Two issues with Feishu plugin** — Button errors and topic reply issues |

### Underlying Needs Analysis

1. **Provider Reliability**: Multiple issues (#11765, #7893, #7731, #9125) highlight ongoing challenges with provider-specific API constraints (temperature requirements, authentication). Users need more robust per-provider configuration.

2. **Memory Persistence**: Issue #6323 (21 👍) indicates strong demand for long-horizon memory beyond context windows, suggesting users want Hermes for extended task scenarios.

3. **Output Reliability**: Issue #7237 shows frustration with truncated responses, indicating need for better streaming/hardness handling.

---

## 5. Bugs & Stability

### Critical Bugs (High Priority)

| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#11765](https://github.com/NousResearch/hermes-agent/issues/11765) | **Critical** | Kimi provider HTTP 400 temperature error — blocks kimi-for-coding usage | ✅ [#11889](https://github.com/NousResearch/hermes-agent/pull/11889), [#11883](https://github.com/NousResearch/hermes-agent/pull/11883) merged |
| [#11884](https://github.com/NousResearch/hermes-agent/issues/11884) | **High** | Ink TUI bare-slug model yields HTTP 404 at api.anthropic.com | ✅ [#11887](https://github.com/NousResearch/hermes-agent/pull/11887) open |
| [#11551](https://github.com/NousResearch/hermes-agent/issues/11551) | **High** | save_config writes plaintext secrets back to config.yaml, destroying ${ENV_VAR} references | None |
| [#11843](https://github.com/NousResearch/hermes-agent/pull/11843) | **High** | Process leaks (agent-browser daemons, paste.rs sleepers) | ✅ Merged |

### Notable Bugs

| Issue | Severity | Description |
|-------|----------|-------------|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | Medium | Response truncated due to output length limit in CLI/gateway |
| [#10877](https://github.com/NousResearch/hermes-agent/issues/10877) | Medium | memory_tool load_from_disk does not validate char limit |
| [#10879](https://github.com/NousResearch/hermes-agent/issues/10879) | Medium | Non-UTF-8 MEMORY.md raises uncaught UnicodeDecodeError |
| [#11016](https://github.com/NousResearch/hermes-agent/issues/11016) | Medium | Stale adapter busy lock traps Telegram sessions |
| [#11793](https://github.com/NousResearch/hermes-agent/issues/11793) | Low | CLI --resume fails to save conversation history to SQLite |

---

## 6. Feature Requests & Roadmap Signals

### High-Interest Feature Requests

| Issue | 👍 | Description | Likelihood of Inclusion |
|-------|-----|-------------|------------------------|
| [#6323](https://github.com/NousResearch/hermes-agent/issues/6323) | **21** | **mempalace for external memory support** — Persistent, queryable memory beyond context window | High — addresses core limitation |
| [#11657](https://github.com/NousResearch/hermes-agent/pull/11657) | — | **JSON Configuration System with Centralized Provider Management** | Medium — major refactor |
| [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) | — | **Vertex AI provider for Gemini models** | Medium — extends provider coverage |
| [#11855](https://github.com/NousResearch/hermes-agent/pull/11855) | — | **Prompt-injection immune system for tool outputs** | Medium — security enhancement |
| [#11844](https://github.com/NousResearch/hermes-agent/pull/11844) | — | **swarm-exploration skill for parallel multi-strategy reasoning** | Low — skill add-on |
| [#411](https://github.com/NousResearch/hermes-agent/issues/411) | — | **Migrate Google Workspace Skill to Official gws CLI** | Low — migration effort |
| [#11751](https://github.com/NousResearch/hermes-agent/issues/11751) | — | **WhatsApp service-conversation support** | Low — platform-specific |

### Roadmap Signals

- **Provider ecosystem expansion**: Active work on Vertex AI (#8427) and fixes for Kimi, Gemini, Copilot
- **Security hardening**: Prompt injection defense (#11855) and secret management fix (#11551)
- **Configuration modernization**: JSON config system proposal (#11657)
- **Memory architecture**: External memory request (#6323) suggests upcoming memory improvements

---

## 7. User Feedback Summary

### Pain Points

1. **Provider API Constraints** — Users report frustration with provider-specific restrictions causing silent failures (Kimi temperature, Gemini auth). Multiple workarounds needed.

2. **Configuration Fragility** — Config system behavior around env var resolution (#11551) and HERMES_HOME (#538) causes unexpected behavior.

3. **Memory Tool Reliability** — File encoding issues (#10879) and char limit validation (#10877) cause agent to start with empty memory silently.

4. **CLI Session Persistence** — Resume functionality not working as expected (#11793), breaking workflow continuity.

### Use Cases Highlighted

- **Long-horizon agents** (#6323): Users want cross-session continuity for complex tasks
- **Enterprise deployments**: Vertex AI (#8427) and Google Workspace (#411) requests indicate corporate adoption
- **Multi-platform messaging**: Feishu (#7734), WhatsApp (#11751), Telegram issues show diverse platform usage
- **Self-improving agents** (#11692): Governance and provenance questions emerging around skill modification

### Satisfaction Signals

- Active community engagement (17 comments on top issue)
- Quick turnaround on critical bugs (Kimi fix merged same day)
- Feature requests receiving thoughtful responses

---

## 8. Backlog Watch

### Long-Unanswered Important Issues Needing Maintainer Attention

| Issue | Age | Description | Priority |
|-------|-----|-------------|----------|
| [#411](https://github.com/NousResearch/hermes-agent/issues/411) | ~44 days | Google Workspace Skill migration to official gws CLI | Low |
| [#7731](https://github.com/NousResearch/hermes-agent/issues/7731) | ~7 days | Copilot provider hardcoded context windows, lacks token exchange | Medium |
| [#7832](https://github.com/NousResearch/hermes-agent/issues/7832) | ~7 days | MCP client does not pass environment variables from config.yaml | Medium |
| [#5163](https://github.com/NousResearch/hermes-agent/pull/5163) | ~13 days | Modernize Hermes Web Console GUI with Skills Hub Storefront | Low |
| [#3956](https://github.com/NousResearch/hermes-agent/issues/3956) | ~19 days | Empty Codex response normalized to incomplete, retries 3 times | Medium |

### Stale PRs Needing Review

| PR | Age | Description | Blocking |
|----|-----|-------------|----------|
| [#5163](https://github.com/NousResearch/hermes-agent/pull/5163) | ~13 days | Web Console modernization | Feature |
| [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) | ~6 days | Vertex AI provider | Feature |
| [#11657](https://github.com/NousResearch/hermes-agent/pull/11657) | ~1 day | JSON Configuration System | Feature |

---

*Digest generated from Hermes Agent repository activity on 2026-04-18*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest

**Date:** 2026-04-18  
**Repository:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
**Status:** Active Development

---

## 1. Today's Overview

PicoClaw shows high development velocity with 135 PRs and 103 active issues tracked. The project released a new nightly build (v0.2.6-nightly.20260418), while 27 PRs were merged/closed and 4 issues reached resolution in the last 24 hours. Key focus areas include provider reliability improvements, multi-channel support expansion (Mattermost), security hardening for multi-user deployments, and tooling refinements. Community engagement remains robust with several long-standing feature requests generating significant discussion.

---

## 2. Releases

### New Release
**Nightly Build v0.2.6-nightly.20260418.6126ede9**  
- Automated build from main branch  
- ⚠️ Marked as potentially unstable; use with caution in production  
- [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

---

## 3. Project Progress

### Merged/Closed PRs (27 total)

| PR | Description | Status |
|---|---|---|
| [#2579](https://github.com/sipeed/picoclaw/pull/2579) | MCP tool call fix: send empty object instead of nil arguments (Zod compatibility) | ✅ Closed |
| [#2437](https://github.com/sipeed/picoclaw/pull/2437) | Codex streaming: accumulate output items from stream events | ✅ Closed |
| [#2566](https://github.com/sipeed/picoclaw/pull/2566) | Reorganize providers/tools packages into clearer subpackages | ✅ Closed |
| [#2571](https://github.com/sipeed/picoclaw/pull/2571) | Add session and routing documentation | ✅ Closed |
| [#2567](https://github.com/sipeed/picoclaw/pull/2567) | Reorganize docs by type and add layout guidance | ✅ Closed |

### Notable Open PRs Under Active Development

| PR | Description | Domain |
|---|---|---|
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | Multi-User Support, Security Hardening, Skills whitelisting ("Agent Shield") | Agent/Security |
| [#1586](https://github.com/sipeed/picoclaw/pull/1586) | Add Mattermost channel and harden gateway integration | Channel |
| [#2537](https://github.com/sipeed/picoclaw/pull/2537) | Add context usage ring indicator and /context command | Agent |
| [#2570](https://github.com/sipeed/picoclaw/pull/2570) | Make Seahorse fresh tail size configurable | Agent |
| [#2569](https://github.com/sipeed/picoclaw/pull/2569) | Unified tool feedback animation across Discord, Telegram, Feishu | Channel/Tool |
| [#2270](https://github.com/sipeed/picoclaw/pull/2270) | Handle non-addressable SecureString values in config | Config |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | Standardize channel identification, decouple name from provider type | Channel |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[#28 - LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28)** (15 comments)  
   **Domain:** Provider enhancement  
   User requests simplified integration with LM Studio for local LLM connections. Highlights desire for easier setup of self-hosted models. Author acknowledges limited skills, seeking community contribution.

2. **[#629 - LLM Call Retry Bug](https://github.com/sipeed/picoclaw/issues/629)** (9 comments)  
   **Domain:** Provider/Bug  
   Tasks hang without retry when encountering HTTP 500 errors. Demonstrates need for improved resilience in LLM provider communication.

3. **[#1919 - Seahorse Memory System](https://github.com/sipeed/picoclaw/issues/1919)** (9 comments)  
   **Domain:** Agent enhancement  
   Proposal for biologically-inspired memory system named after the hippocampus. Aims to provide human-like short-term and long-term memory for agents through lossless context compaction.

4. **[#2236 - Docker Port Remapping Bug](https://github.com/sipeed/picoclaw/issues/2236)** (8 comments)  
   **Domain:** Docker  
   When modifying web listener ports in Docker deployment, web UI becomes unusable (input disabled). Affects users customizing port mappings.

5. **[#2233 - Context & Routing Decoupling](https://github.com/sipeed/picoclaw/issues/2233)** (6 comments)  
   **Domain:** Agent/Channel  
   Proposal to standardize inbound context and decouple routing from session allocation. Addresses architectural complexity in channel-specific handling.

---

## 5. Bugs & Stability

### Active Bug Reports

| Issue | Severity | Description | Status |
|---|---|---|---|
| [#2371](https://github.com/sipeed/picoclaw/issues/2371) | High | ERR agent in loop.go:2171 causing crashes | Open |
| [#1790](https://github.com/sipeed/picoclaw/issues/1790) | Medium | OpenRouter free model validation failing | Open |
| [#2236](https://github.com/sipeed/picoclaw/issues/2236) | Medium | Docker port remapping breaks web UI | Open |
| [#629](https://github.com/sipeed/picoclaw/issues/629) | Medium | No retry on LLM call failures | Open |
| [#2548](https://github.com/sipeed/picoclaw/issues/2548) | Medium | Multiple authentication credentials error | Open (2 days ago) |
| [#2080](https://github.com/sipeed/picoclaw/issues/2080) | Medium | Windows QQ channel not functional | Open |
| [#1936](https://github.com/sipeed/picoclaw/issues/1936) | Low | Telegram failing on Termux | Open |

### Recently Resolved
- **#1242** - QQ channel binding issue (closed 2026-04-17)
- **#2579** - MCP nil arguments bug (fixed with empty object normalization)

---

## 6. Feature Requests & Roadmap Signals

### High-Engagement Feature Requests

| Issue | Domain | Request | Roadmap Alignment |
|---|---|---|---|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | Provider | LM Studio easy connect | Nice-to-Have |
| [#1919](https://github.com/sipeed/picoclaw/issues/1919) | Agent | Seahorse biologically-inspired memory | Core Feature |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) | Provider | OpenAI Responses API migration | Enhancement |
| [#1372](https://github.com/sipeed/picoclaw/issues/1372) | Channel | OpenIM plugin support | Nice-to-Have |
| [#1587](https://github.com/sipeed/picoclaw/issues/1587) | Channel | Mattermost native support | Nice-to-Have (PR #1586 in progress) |
| [#571](https://github.com/sipeed/picoclaw/issues/571) | Tool | Progress feedback during tool execution | Nice-to-Have |
| [#2009](https://github.com/sipeed/picoclaw/issues/2009) | Agent | /stop command to cancel tasks | Nice-to-Have |
| [#2137](https://github.com/sipeed/picoclaw/issues/2137) | Channel/Tool | Live task list via message edit & reactions | Nice-to-Have |
| [#2173](https://github.com/sipeed/picoclaw/issues/2173) | Agent | LangSmith observability for tracing | Nice-to-Have |

### Predicted Next Features
Based on active PRs and issue momentum:
1. **Mattermost channel integration** (PR #1586 nearing completion)
2. **Context usage reporting** with /context command (PR #2537)
3. **Seahorse configurable parameters** (PR #2570 merged)
4. **Multi-user security hardening** (PR #2313 active development)
5. **Standardized channel identification** (PR #2551)

---

## 7. User Feedback Summary

### Pain Points
- **Provider reliability:** Users report tasks hanging without retry on transient failures (#629), OpenRouter free tier issues (#1790)
- **Docker deployment friction:** Port configuration complexity breaks web UI (#2236, #1708), missing dev tools in container (#1228)
- **Observability gap:** No progress feedback during long tool executions (#571), opaque debugging (#2173)
- **Windows/QQ integration:** Cross-platform issues affecting QQ channel users on Windows (#2080)

### Use Cases Driving Development
- **Multi-channel deployment:** Growing demand for Mattermost (#1587), Feishu customization (#2030), streaming web chat (#1950)
- **Local LLM integration:** Strong interest in LM Studio connectivity (#28) and SiliconFlow support (#2045)
- **Enterprise features:** Multi-user support, security hardening (#2313), capability discovery (#1474)
- **Memory systems:** Interest in advanced memory architectures for agents (#1919, #1796)

### Community Contributions
Active translation efforts (Spanish README #2036), documentation improvements, and tooling contributions indicate healthy open-source engagement.

---

## 8. Backlog Watch

### Long-Unanswered Important Items

| Issue | Age | Domain | Description |
|---|---|---|---|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | ~66 days | Provider | LM Studio easy connect (15 comments, pending) |
| [#629](https://github.com/sipeed/picoclaw/issues/629) | ~55 days | Bug | LLM call retry failure |
| [#571](https://github.com/sipeed/picoclaw/issues/571) | ~56 days | Tool | Tool execution progress feedback |
| [#1474](https://github.com/sipeed/picoclaw/issues/1474) | ~36 days | Agent | Capability discovery for orchestration |
| [#1796](https://github.com/sipeed/picoclaw/issues/1796) | ~30 days | Agent | Event-driven hooks system |

### Items Needing Maintainer Attention
- **#2136** - Tool call extraction flaw (submitted PR previously, needs resolution)
- **#1883** - Provider/protocol field proposal (breaking change discussion)
- **#1708** - Gateway REST API endpoints unavailable (v0.2.3 regression)

---

*Generated: 2026-04-18*  
*Data source: github.com/sipeed/picoclaw activity for last 24 hours*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-18

## 1. Today's Overview

IronClaw shows extremely high activity today with 28 issues and 50 PRs updated in the last 24 hours. The project is actively iterating through staging promotions with multiple cross-cutting changes being promoted. A notable security concern was raised regarding Engine V2 bypassing inbound secret scanning. The Bug Bash held on 4/16-4/17 surfaced numerous P1 bugs, primarily around channel integrations (Telegram, Web) and agent response handling. Community engagement remains strong with new feature proposals and a pending release (v0.25.0) in progress.

---

## 2. Releases

### Pending Release (PR #2606)
**Status:** Open — Release PR created by `ironclaw-ci[bot]`

| Crate | Version Change | Change Type |
|-------|----------------|-------------|
| `ironclaw_common` | 0.2.0 → **0.3.0** | ⚠️ API breaking |
| `ironclaw_skills` | 0.1.0 → **0.1.1** | ✓ Compatible |
| `ironclaw` | 0.24.0 → **0.25.0** | Feature release |

**Breaking Changes in `ironclaw_common` 0.3.0:**
```
enum_no_repr_variant_discriminant_changed: enum variant had its discriminant value altered
```
⚠️ Downstream projects depending on `ironclaw_common` should review the enum changes before upgrading.

📎 [View PR #2606](https://github.com/nearai/ironclaw/pull/2606)

---

## 3. Project Progress

### Notable Merged/Closed PRs (Today)

| PR | Title | Size | Scope | Status |
|----|-------|------|-------|--------|
| [#2589](https://github.com/nearai/ironclaw/pull/2589) | feat(dingtalk): anti-silence UX | XL | All major areas + DB Migration | Merged |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | feat: add Aliyun Coding Plan support | XL | agent, channel, llm | Open |
| [#2461](https://github.com/nearai/ironclaw/pull/2461) | promote staging | XL | channel/cli, llm, setup | Merged |
| [#2455](https://github.com/nearai/ironclaw/pull/2455) | promote staging | XL | agent, channel, tool/builtin | Merged |
| [#2445](https://github.com/nearai/ironclaw/pull/2445) | promote staging + DB Migration | XL | channel/web, db | Merged |
| [#2446](https://github.com/nearai/ironclaw/pull/2446) | promote staging | L | tool/mcp, extensions | Merged |

**DingTalk Anti-Silence UX (PR #2589):** Implements continuous UX surfacing during silent periods—first-token latency, tool calls, tool chains, mid-stream stalls—so users receive feedback during agent processing. Affects all major subsystems.

**Aliyun Integration (PR #1446):** Adds dedicated `AliyunProvider` for Aliyun BaiLian Coding Plan with Anthropic Messages API compatibility via DashScope. Uses HTTP/1.1 for endpoint compatibility.

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Title | Comments | 👍 | Priority |
|-------|-------|----------|-----|----------|
| [#2522](https://github.com/nearai/ironclaw/issues/2522) | Configuration error: Failed to save API key (DB error) | 3 | 2 | Bug |
| [#2411](https://github.com/nearai/ironclaw/issues/2411) | Telegram bot token save action does nothing | 2 | 0 | Bug |
| [#2284](https://github.com/nearai/ironclaw/issues/2284) | Staging agent instance dies after 1 hour inactivity | 2 | 0 | Bug |
| [#2285](https://github.com/nearai/ironclaw/issues/2285) | Chat messages disappear on page refresh | 2 | 0 | Bug |
| [#2599](https://github.com/nearai/ironclaw/issues/2599) | Epic: Enforce gateway feature boundaries | 0 | 0 | Epic |

**Key Themes:**
- **Secrets Management:** Users struggle with authentication setup (#2522, #2411). Issue [#2601](https://github.com/nearai/ironclaw/issues/2601) proposes CLI/TUI for managing secrets.
- **Persistence Issues:** Chat state loss (#2285), agent instance death (#2284) indicate infrastructure/state management gaps.
- **Web UI Reliability:** Multiple bugs from Bug Bash indicate the web interface needs hardening.

📎 [View all latest issues](https://github.com/nearai/ironclaw/issues?q=updated%3A2026-04-17..2026-04-18)

---

## 5. Bugs & Stability

### Critical (P1) — Bug Bash 4/17

| Issue | Title | Channel | Status |
|-------|-------|---------|--------|
| [#2580](https://github.com/nearai/ironclaw/issues/2580) | Agent claims Telegram message sent but no delivery | Telegram | Open |
| [#2581](https://github.com/nearai/ironclaw/issues/2581) | Agent exposes internal reasoning (chain-of-thought leak) | Web | Open |
| [#2582](https://github.com/nearai/ironclaw/issues/2582) | Agent claims markdown file attached but no file | Telegram | Open |
| [#2583](https://github.com/nearai/ironclaw/issues/2583) | Routine creation fails with "5 consecutive code errors" | Orchestrator | Open |
| [#2584](https://github.com/nearai/ironclaw/issues/2584) | Internal system files visible in app UI | Web | Open |

### High Priority (P2) — Bug Bash

| Issue | Title | Status |
|-------|-------|--------|
| [#2543](https://github.com/nearai/ironclaw/issues/2543) | Linear MCP authorization not recognized after OAuth | Open |
| [#2585](https://github.com/nearai/ironclaw/issues/2585) | Active missions not reflected in completed count | Open |
| [#2586](https://github.com/nearai/ironclaw/issues/2586) | Slack tool installation button non-functional | Open |

### Security Concern

| Issue | Title | Severity | Status |
|-------|-------|----------|--------|
| [#2491](https://github.com/nearai/ironclaw/issues/2491) | **Engine V2 bypasses inbound secret scanning — tokens sent directly to LLM** | 🔴 Security | Open |

**Details:** When `ENGINE_V2=true`, user messages bypass `scan_inbound_for_secrets()` entirely. Secrets (API keys, tokens) pasted in chat are sent directly to the LLM without detection. Confirmed on staging with a Slack bot token (`xoxb-...`).

⚠️ **Recommendation:** High priority fix needed before production deployment of Engine V2.

### Resolved Today

| Issue | Title | Resolution |
|-------|-------|------------|
| [#2409](https://github.com/nearai/ironclaw/issues/2409) | User messages disappear after typing | Fixed |
| [#2491](https://github.com/nearai/ironclaw/issues/2491) | — | See above |
| [#2524](https://github.com/nearai/ironclaw/issues/2524) | Event-based routines do not work | Closed |
| [#2448](https://github.com/nearai/ironclaw/issues/2448) | Multiline support on TUI | Implemented |

---

## 6. Feature Requests & Roadmap Signals

### New Feature Proposals

| Issue | Title | Author | Potential Impact |
|-------|-------|--------|-------------------|
| [#2601](https://github.com/nearai/ironclaw/issues/2601) | Feature: CLI/TUI for Managing Secrets | ek775 | High (UX) |
| [#2591](https://github.com/nearai/ironclaw/issues/2591) | feat: add SKILLS_BUNDLED_ENABLED flag | luisra51 | Medium (Config) |
| [#2569](https://github.com/nearai/ironclaw/issues/2569) | Add dedicated web_fetch tool with LLM summarization | serrrfirat | Medium (Tooling) |
| [#2590](https://github.com/nearai/ironclaw/issues/2590) | SkillClaw as long-term skill lifecycle layer | Upper9527 | Architecture |

### Architectural Epic

| Issue | Title | Scope |
|-------|-------|-------|
| [#2599](https://github.com/nearai/ironclaw/issues/2599) | Epic: Enforce gateway feature boundaries, crate guardrails | Web Gateway |

**Proposal:** Refactor web gateway/frontend into bounded feature slices with CI guardrails and crate-owned E2E paths. Intentionally staged approach.

📎 [View all feature requests](https://github.com/nearai/ironclaw/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement+OR+label%3Afeature)

---

## 7. User Feedback Summary

### Pain Points

| Area | Issue | User Quote/Context |
|------|-------|-------------------|
| **Secrets Management** | #2522, #2601 | *"Having some struggles with authentication for some services while getting started with ironclaw, and it's not well documented how users are intended to manage their secrets."* |
| **Onboarding** | #2522 | `ironclaw onboard` fails when selecting local DB and adding API keys |
| **Persistence** | #2284, #2285 | Agent instances die after inactivity; chat messages lost on refresh |
| **Telegram Integration** | #2580, #2582 | Message delivery and file attachments unreliable |
| **Raspberry Pi** | #1339 | Unable to compile on ARM architecture (Raspbian) |

### Positive Feedback Signals

| Issue | Context |
|-------|---------|
| [#2448](https://github.com/nearai/ironclaw/issues/2448) | Multiline TUI support implemented (feature request fulfilled) |
| [#2590](https://github.com/nearai/ironclaw/issues/2590) | External project (SkillClaw) views IronClaw as a strong alternative agent runtime |

---

## 8. Backlog Watch

### Long-Unanswered Issues (Created > 7 days ago, No Response)

| Issue | Title | Created | Age | Priority |
|-------|-------|---------|-----|----------|
| [#1339](https://github.com/nearai/ironclaw/issues/1339) | no supported isa found for arch `armv7`? | 2026-03-18 | 31 days | Setup |
| [#1403](https://github.com/nearai/ironclaw/issues/1403) | Channel webhook_server failed to start | 2026-03-19 | 30 days | Config |
| [#2284](https://github.com/nearai/ironclaw/issues/2284) | Staging agent instance dies after 1 hour | 2026-04-10 | 8 days | Infrastructure |
| [#2285](https://github.com/nearai/ironclaw/issues/2285) | Chat messages disappear on refresh | 2026-04-10 | 8 days | Web UI |

### Issues Needing Maintainer Attention

| Issue | Title | Reason |
|-------|-------|--------|
| [#2491](https://github.com/nearai/ironclaw/issues/2491) | Security: Engine V2 bypasses secret scanning | 1 comment, no fix PR |
| [#2583](https://github.com/nearai/ironclaw/issues/2583) | Routine creation fails | P1, no comments |
| [#2584](https://github.com/nearai/ironclaw/issues/2584) | Internal files visible in UI | P1, security exposure |

### PRs Stalled

| PR | Title | Age | Status |
|----|-------|-----|--------|
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | Aliyun Coding Plan support | ~29 days | Open, needs review |

---

## Summary Table

| Metric | Value |
|--------|-------|
| Issues Updated (24h) | 28 |
| Open Issues | 20 |
| PRs Updated (24h) | 50 |
| Open PRs | 2 |
| New Releases | 0 (pending: v0.25.0) |
| Critical Bugs | 5 |
| Security Issues | 1 |
| Feature Requests | 4 |

---

*Digest generated for IronClaw (nearai/ironclaw) on 2026-04-18. Data source: GitHub API activity feed.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-18

## 1. Today's Overview

CoPaw/QwenPaw maintains high development velocity with **50 issues and 46 PRs** updated in the last 24 hours. The release of **v1.1.2** introduces Mission Mode, a significant step toward autonomous agent execution. Community engagement remains strong with active discussions on upgrade paths, multi-agent architecture, and MCP integration. The project shows healthy progress with 25 PRs merged/closed and 21 new PRs opened, indicating balanced contribution flow.

---

## 2. Releases

### v1.1.2 — Mission Mode Launch
**Release Date:** 2026-04-18

**What's New:**
- **Mission Mode** (`/mission` command): Autonomous, multi-phase task execution where the agent plans, executes, and self-corrects iteratively
  - `/mission status` — Monitor running missions
  - `/mission list` — View all active missions
  - Reference: [#3364](https://github.com/agentscope-ai/QwenPaw/pull/3364)

---

## 3. Project Progress

### Recently Merged/Closed PRs (25 total)

| PR | Title | Status |
|----|-------|--------|
| [#3539](https://github.com/agentscope-ai/QwenPaw/pull/3539) | fix(console): dark mode text color for empty select dropdown | Closed |
| [#3535](https://github.com/agentscope-ai/QwenPaw/pull/3535) | Fix(Doc, SKILL): Remove Stale docs and update `make_plan` SKILL | Closed |
| [#3536](https://github.com/agentscope-ai/QwenPaw/pull/3536) | feat(cli): support to update provider base URLs | Closed |
| [#3515](https://github.com/agentscope-ai/QwenPaw/pull/3515) | feat(security): add tool guard response information | Closed |
| [#3487](https://github.com/agentscope-ai/QwenPaw/pull/3487) | feat(acp): add ACP server — expose QwenPaw as ACP | Under Review |
| [#3268](https://github.com/agentscope-ai/QwenPaw/pull/3268) | feat: enable automatic injection of the current timestamp | Under Review |

### Active Development (21 Open PRs)

| PR | Title | Focus Area |
|----|-------|------------|
| [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) | fix(console): avoid SSE crash on malformed surrogate text | Console Channel |
| [#3550](https://github.com/agentscope-ai/QwenPaw/pull/3550) | feat(routing): scope-first effective model + runtime refinements | LLM Routing |
| [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) | feat(memory): rebuild memory & context | Memory System |
| [#3534](https://github.com/agentscope-ai/QwenPaw/pull/3534) | feat(backup): support backup and restore | Data Management |
| [#3508](https://github.com/agentscope-ai/QwenPaw/pull/3508) | feat(channels): add Signal channel via signal-cli | Channels |
| [#3365](https://github.com/agentscope-ai/QwenPaw/pull/3365) | feat(console): add Agent Statistics page | Analytics |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Title | Comments | Category |
|-------|-------|----------|----------|
| [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) | WORKING_DIR still points to old directory after QwenPaw upgrade | 18 | Bug |
| [#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309) | Questions about qwenpaw vs copaw after updating to 1.1.0 | 11 | Question |
| [#3445](https://github.com/agentscope-ai/QwenPaw/issues/3445) | MCP Configuration Not Working - GUI settings not passed to ReMe | 6 | Bug |
| [#508](https://github.com/agentscope-ai/QwenPaw/issues/508) | Multi-Agent Orchestration Gateway | 6 | Feature |

### Analysis of Underlying Needs

**Upgrade Path Confusion (#3356, #3309):** Users upgrading from CoPaw to QwenPaw are experiencing:
- Directory structure changes (`.copaw` → `.qwenpaw`)
- Missing PATH configurations post-upgrade
- Confusion about coexistence of both installations

**MCP Integration (#3445):** A significant architectural issue exists—QwenPaw has two internal MCP systems causing configuration conflicts. This is a critical integration gap.

**Multi-Agent Architecture (#508):** Strong demand for true multi-agent orchestration beyond prompt-based role switching. This aligns with the Mission Mode release and suggests a roadmap toward more sophisticated agent collaboration.

---

## 5. Bugs & Stability

### Reported Bugs (Ranked by Severity)

| Severity | Issue | Summary | Fix Available? |
|----------|-------|---------|----------------|
| **Critical** | [#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552) | Console channel crashes on malformed Unicode surrogate during SSE serialization | [#3553](https://github.com/agentscope-ai/QwenPaw/pull/3553) pending |
| **High** | [#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549) | ValidationError on ARMbian (call_id not string) | No |
| **High** | [#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943) | `copaw init` hangs on Windows with Python 3.13 | No |
| **High** | [#3026](https://github.com/agentscope-ai/QwenPaw/issues/3026) | copaw stuck in 2-hour loop executing tasks | No |
| **Medium** | [#3523](https://github.com/agentscope-ai/QwenPaw/issues/3523) | WeCom creates duplicate chat entries with empty user_id | No |
| **Medium** | [#3421](https://github.com/agentscope-ai/QwenPaw/issues/3421) | Lost figure preview in chat after refresh | No |
| **Medium** | [#3170](https://github.com/agentscope-ai/QwenPaw/issues/3170) | New version has high memory usage | No |

### Stability Observations

- **SSE Streaming:** Unicode handling in console channel is a recurring issue ([#3552](https://github.com/agentscope-ai/QwenPaw/issues/3552))
- **Windows Compatibility:** Multiple issues with Windows 11/Python 3.13 combinations
- **Session Management:** Session state JSON corruption issue being addressed in [#3278](https://github.com/agentscope-ai/QwenPaw/pull/3278)

---

## 6. Feature Requests & Roadmap Signals

### High-Engagement Feature Requests

| Issue | Request | Priority Signal | Likelihood |
|-------|---------|-----------------|------------|
| [#508](https://github.com/agentscope-ai/QwenPaw/issues/508) | Multi-Agent Orchestration Gateway | 6 comments, 2 👍 | High — aligns with Mission Mode |
| [#3470](https://github.com/agentscope-ai/QwenPaw/issues/3470) | Self-evolution capabilities (Hermes-style) | 4 comments | Medium |
| [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | Kimi Code API support | 5 comments | High — native provider gap |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) | Semantic skill routing | Under Review | Likely next release |
| [#3534](https://github.com/agentscope-ai/QwenPaw/pull/3534) | Backup and restore system | PR Open | High — user demand |

### Predicted Next Version Features

Based on active PRs under review:
1. **Backup/Restore System** — Full data snapshot capability
2. **Signal Channel** — New messaging platform integration
3. **Agent Statistics Page** — Usage analytics dashboard
4. **Semantic Skill Routing** — Embedding-based skill filtering
5. **LLM Routing UI** — Cloud/local model switching in chat

---

## 7. User Feedback Summary

### Pain Points

| Category | Feedback | Frequency |
|----------|----------|-----------|
| **Upgrade Experience** | Directory confusion, PATH issues, coexistence of .copaw and .qwenpaw | High |
| **Windows Issues** | Python 3.13 compatibility, init hangs, memory usage | Medium |
| **MCP Integration** | GUI configurations not passing to backend | High |
| **Remote Services** | No support for non-local LM Studio endpoints | Medium |

### Positive Signals

- **Mission Mode excitement** — v1.1.2 release generating interest
- **ACP Server progress** ([#3487](https://github.com/agentscope-ai/QwenPaw/pull/3487)) — Enables IDE integration, expanding use cases
- **Tool guard improvements** ([#3515](https://github.com/agentscope-ai/QwenPaw/pull/3515)) — Better risk communication with severity levels

### Use Cases Emerging

1. **IDE Integration** — ACP server for Zed, OpenCode
2. **Cross-Platform Messaging** — Signal channel addition
3. **Enterprise Analytics** — Statistics page for usage tracking

---

## 8. Backlog Watch

### Issues Requiring Maintainer Attention

| Issue | Age | Status | Urgency |
|-------|-----|--------|---------|
| [#508](https://github.com/agentscope-ai/QwenPaw/issues/508) Multi-Agent Gateway | 46 days | Open | High — roadmap alignment |
| [#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943) copaw init hangs | 14 days | Open | High — blocking new users |
| [#3445](https://github.com/agentscope-ai/QwenPaw/issues/3445) MCP Configuration | 3 days | Open | High — architectural issue |
| [#731](https://github.com/agentscope-ai/QwenPaw/issues/731) Plugin installation | 44 days | Closed | Medium |
| [#415](https://github.com/agentscope-ai/QwenPaw/issues/415) Human-in-the-Loop | 46 days | Closed | — |

### PRs Needing Review

| PR | Age | Status | Blocker |
|----|-----|--------|--------|
| [#3487](https://github.com/agentscope-ai/QwenPaw/pull/3487) ACP Server | 2 days | Under Review | No |
| [#3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) Memory Rebuild | 1 day | Open | No |
| [#3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) Semantic Skill Routing | 10 days | Under Review | Needs discussions |

---

**Digest Generated:** 2026-04-18  
**Data Source:** [CoPaw/QwenPaw GitHub](https://github.com/agentscope-ai/QwenPaw)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-18

## 1. Today's Overview

ZeroClaw continues to demonstrate high development velocity with **32 issues and 50 PRs updated in the last 24 hours**, indicating intense activity across bug fixing, feature development, and infrastructure work. The project is deep in the v0.7.0-beta cycle, with three new pre-release builds shipped today, all focused on stabilizing the largest architectural overhaul in the project's history—migration to a Cargo workspace and new config schema. Community engagement remains strong, with RFC discussions and several high-severity bugs reported, particularly around shell sandbox behavior and channel integration.

---

## 2. Releases

### New Releases Today

| Version | Status | Highlights |
|---------|--------|-----------|
| **v0.7.0-beta.1041** | Pre-release | Latest in beta chain |
| **v0.7.0-beta.1040** | Pre-release | — |
| **v0.7.0-beta.1030** | Pre-release | — |

**Changelog Summary (v0.6.9 → next):**

All three beta releases represent the **largest structural overhaul in ZeroClaw's history**:

- **Cargo Workspace Migration**: Entire codebase split into a proper Cargo workspace of focused crates, improving modularity and build times
- **New Config Schema**: Shipped with live migration path from v0.6.9 configuration
- **Breaking Change Advisory**: Users should test migrations in non-production environments; config file format changes require attention

> **Migration Note**: Users upgrading from v0.6.9 stable should review the migration documentation before deploying these beta builds to production.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Risk |
|----|--------|---------|------|
| [#5757](https://github.com/zeroclaw-labs/zeroclaw/pull/5757) | schtobia | **feat(config): add native-tls feature** — enables self-signed certificate support for enterprise TLS interception environments | Medium |
| [#5676](https://github.com/zeroclaw-labs/zeroclaw/pull/5676) | theonlyhennygod | **fix(channel,provider)**: Feishu `mention_only` config wired correctly; Groq tool_use_failed 400 resolved | — |
| [#5154](https://github.com/zeroclaw-labs/zeroclaw/pull/5154) | theonlyhennygod | **fix: beta Android build** and idempotent marketplace sync | — |

### Active Development (Open PRs)

| PR | Author | Summary | Size | Risk |
|----|--------|---------|------|------|
| [#5785](https://github.com/zeroclaw-labs/zeroclaw/pull/5785) | FloatDreamer | **feat(runtime): emit observer and runtime trace events** across agent turn lifecycle | L | High |
| [#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774) | RyanHoldren | **fix(agent): register skill tools in gateway path** — skills loaded but tools not registered | S | High |
| [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) | DjaPy | **feat(security): gated_commands TOTP gate** for shell tool (phase 1, closes #3767) | M | High |
| [#5733](https://github.com/zeroclaw-labs/zeroclaw/pull/5733) | songchao4218 | **feat(web): model quick-switcher** and persistent WebSocket connection | M | Medium |
| [#5773](https://github.com/zeroclaw-labs/zeroclaw/pull/5773) | RyanHoldren | **fix(shell): guard bypass** — wildcard+unblocked short-circuit logic corrected | S | High |
| [#5848](https://github.com/zeroclaw-labs/zeroclaw/pull/5848) | singlerider | **fix(channels/feishu)**: wire `mention_only` config; disable native tools for Groq | — | — |
| [#5742](https://github.com/zeroclaw-labs/zeroclaw/pull/5742) | octo-patch | **Add MiniMax-AI/cli** as default skill tap | XS | Low |
| [#5712](https://github.com/zeroclaw-labs/zeroclaw/pull/5712) | rpodgorny | **feat(channel): add IMAP polling fallback** for servers without IDLE | S | Medium |
| [#5754](https://github.com/zeroclaw-labs/zeroclaw/pull/5754) | Yum-King | **feat: make provider connect_timeout_secs configurable** | S | Low |
| [#5671](https://github.com/zeroclaw-labs/zeroclaw/pull/5671) | TeoConnexioh | **fix(tools): multiply embedding score by 100** before percent display | XS | High |

---

## 4. Community Hot Topics

### Most Active Discussions

**1. [RFC: Replace TOML i18n with Mozilla Fluent](https://github.com/zeroclaw-labs/zeroclaw/issues/5787)** — 4 comments
- **Author**: singlerider | Created: 2026-04-16
- **Topic**: Proposal to replace the hand-rolled TOML i18n system with Mozilla Fluent (`.ftl` files) for all user-facing runtime and CLI strings
- **Scope**: Includes Tauri UI; proposes removal of in-repo translated markdown docs with migration to Wiki (English only)
- **Underlying Need**: Modernization of localization infrastructure, reduction of maintenance burden for translated documentation

**2. [Bug: Landlock shell sandbox poisons caller process](https://github.com/zeroclaw-labs/zeroclaw/issues/5153)** — 3 comments
- **Author**: jonny7737 | Created: 2026-03-29 | Severity: **S1**
- **Issue**: On Linux with `security.sandbox.backend = "landlock"`, shell tool calls permanently break the ZeroClaw process's access to workspace-backed files
- **Underlying Need**: Critical reliability for Linux deployments; affects production workflows

**3. [Bug: Web dashboard not available](https://github.com/zeroclaw-labs/zeroclaw/issues/5348)** — 3 comments, **CLOSED**
- **Author**: JerryVDP | Created: 2026-04-05 | Severity: **S1**
- **Issue**: Running `zerclaw gateway` gives "Web dashboard not available" error requiring manual build
- **Status**: Closed with resolution

**4. [Feature: Add retry logic with exponential backoff to webhook channel](https://github.com/zeroclaw-labs/zeroclaw/issues/5761)** — 2 comments
- **Author**: mn13 | Created: 2026-04-15
- **Issue**: Webhook channel's outbound send is single-shot with zero retries; transient failures silently drop messages
- **Underlying Need**: Reliability for webhook integrations in production

**5. [Bug: "Denied by user" in supervised mode through channel](https://github.com/zeroclaw-labs/zeroclaw/issues/5591)** — 2 comments, 1 👍
- **Author**: kriku | Created: 2026-04-10 | Severity: **S1**
- **Issue**: Commands work in interactive session but fail with "Denied by user" through Telegram channel
- **Underlying Need**: Consistency between interaction modes; blocking supervised workflow automation

---

## 5. Bugs & Stability

### S1 — Critical (Workflow Blocked)

| Issue | Title | Channel/Component | Link | Fix PR? |
|-------|-------|-------------------|------|---------|
| #5153 | Landlock shell sandbox poisons caller process | runtime/daemon | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5153) | — |
| #5356 | Canvas tool frames never reach WebSocket clients from channel servers | channel (Telegram/Discord/Slack) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5356) | — |
| #5591 | "Denied by user" in supervised mode through channel | channel | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5591) | — |
| #5850 | Skill-defined tools return "Unknown tool" in web UI | runtime/daemon | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5850) | [#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774) |
| #5815 | Provider ignores llamacpp object | provider | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) | — |
| #5756 | aarch64-unknown-linux-musl unable running on Hi3536AV100 | runtime/daemon | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5756) | — |
| #5564 | Custom provider tool follow-up fails with empty stdout | provider | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5564) | — |

### S2 — Degraded Behavior

| Issue | Title | Link | Fix PR? |
|-------|-------|------|---------|
| #5809 | Shell policy blocks `git -C <path>` by lowercasing args | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5809) | — |
| #5722 | Default shell sandbox blocks Python skill patterns | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) | — |
| #5844 | Too much emphasis on memory (affects cron jobs) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | — |
| #5831 | `show_tool_calls = true` not effective | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5831) | — |

### Notable Closed Bugs

| Issue | Title | Link |
|-------|-------|------|
| #5348 | Web dashboard not available | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5348) |
| #5778 | (channels/telegram): inline_keyboard missing in outgoing messages | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5778) |
| #5723 | Theme mode display bug: both dark and light options appear as dark | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5723) |

---

## 6. Feature Requests & Roadmap Signals

### New Feature Proposals

| Issue | Title | Author | Link | Community Interest |
|-------|-------|--------|------|-------------------|
| #5849 | **Dream Mode — Periodic Memory Consolidation & Reflective Learning** | Svtter | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | New today |
| #5843 | **Model-wise Reasoning Configuration** | databillm | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) | Per-model settings |
| #5761 | **Retry logic with exponential backoff for webhook channel** | mn13 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5761) | Reliability |
| #5246 | **Option to Choose Default Shell** | tejasm-189 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5246) | Flexibility |
| #5837 | **Add cancellation support for ACP-protocol sessions** | Audacity88 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) | Infrastructure |
| #5836 | **Propagate CancellationToken into tool execution** | Audacity88 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) | Responsiveness |
| #5833 | **Session ownership model for destructive operations** | Audacity88 | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) | Security |
| #5840 | **Evaluate multi-chunk reasoning replay fidelity** | tompro | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5840) | Quality |
| #5842 | **Evaluate extra_args validation for Codex CLI flags** | michidk | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) | Security |

### Roadmap Prediction

Based on current PR activity and issue patterns, the v0.7.0 release may include:
- **Observability improvements**: Structured event emission across agent turn lifecycle ([#5785](https://github.com/zeroclaw-labs/zeroclaw/pull/5785))
- **Enhanced shell security**: TOTP-gated commands phase 1 ([#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779))
- **Web UI enhancements**: Model quick-switcher, persistent WebSocket ([#5733](https://github.com/zeroclaw-labs/zeroclaw/pull/5733))
- **Channel reliability**: IMAP polling fallback, retry logic,

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/manelsen/agents-radar).*