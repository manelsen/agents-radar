# OpenClaw Ecosystem Digest 2026-04-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-14 02:37 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-04-14

---

## 1. Today's Overview

OpenClaw maintains high-volume activity on April 14, 2026, with **500 issues and 500 PRs updated** in the last 24 hours—indicating sustained, intense development. The issue queue holds 429 open items against 71 closed, while the PR pipeline shows 340 open PRs and 160 merged/closed, reflecting substantial reviewer throughput. Two releases shipped today: a **beta release** (v2026.4.14-beta.1) and a **quality release** (v2026.4.12). Community engagement is concentrated around **OAuth token refresh race conditions**, **voice/audio transcription regressions across Telegram and WhatsApp**, **image and model provider configuration bugs**, and **Discord slash-command behavioral failures**. Multiple regressions against recent versions (4.5, 4.9, 4.10, 4.11) indicate accelerated change velocity may be outpacing regression testing; maintainers are actively fielding fixes via 9 merged PRs and 6 closed issues today.

---

## 2. Releases

### v2026.4.14-beta.1
**Release date:** 2026-04-14  
**Tag:** `openclaw 2026.4.14-beta.1`  
**Commit:** #65973 (merged)

**Changes:**
- **Telegram/forum topics:** Surface human-readable topic names in agent context, prompt metadata, and plugin hook metadata by learning names from Telegram forum service messages. This improves conversational context when agents operate inside Telegram forum threads.

**Fixes:**
- **UI/chat:** Replace `marked.js` with `markdown-it` for rendering, addressing a potential security vector where maliciously crafted markdown could exploit the old parser.

**Migration notes:** No breaking changes. Users relying on custom `marked.js` extensions may need to update render hooks.

---

### v2026.4.12
**Release date:** prior to 2026-04-14 (referenced in today's data)  
**Tag:** `openclaw 2026.4.12`

**Changes:**
- Broad quality release focused on **plugin loading reliability**, **memory and dreaming consistency**, **new local-model options**, and **Feishu setup improvements**.
- **QA/lab:** Added Convex-backed pooled Telegram credential leasing plus `openclaw qa credentials` admin commands for multi-agent credential management.

**Migration notes:** No breaking changes. Credential leasing is additive; existing setups continue to work.

---

## 3. Project Progress

### Merged/Closed PRs (Today)
| PR | Author | Area | Summary |
|----|--------|------|---------|
| [#66180](https://github.com/openclaw/openclaw/pull/66180) | hoyyeva | extensions: codex | Fix: include `apiKey` in codex provider catalog to unblock `models.json` loading (size: XS) |
| [#65766](https://github.com/openclaw/openclaw/pull/65766) | openperf | maintainer | Fix: auto-heal unrecognized keys during config load to prevent gateway crash (size: L) |
| [#65827](https://github.com/openclaw/openclaw/pull/65827) | sliverp | gateway | Fix: align `timestampOptsFromConfig` test with `resolveUserTimezone` UTC fallback (size: XS) |
| [#63733](https://github.com/openclaw/openclaw/pull/63733) | DolencLuka | cron | Closed: Cron isolated Discord announce inherits poisoned deliveryContext (size: not specified) |
| [#65611](https://github.com/openclaw/openclaw/issues/65611) | DanThe3r | cdp | Closed: manual-cdp `attachOnly` profile not detecting active CDP session (8 comments) |
| [#27858](https://github.com/openclaw/openclaw/issues/27858) | vishal-hirenami | gateway | Closed: `sessions.patch` model override is racy — subagent starts on default model before patch lands (7 comments) |
| [#54039](https://github.com/openclaw/openclaw/issues/54039) | DanWebb1949 | tools | Closed: `read` tool prepends workspace root to absolute Windows paths, producing doubled paths (5 comments) |

**Key themes in today's merged work:**
- **Config resilience:** Auto-healing unrecognized keys prevents gateway crashes when external tools write to `openclaw.json`.
- **Windows parity:** Fixed doubled-path bug on Windows absolute paths in the `read` tool.
- **Cron reliability:** Resolved Discord announce failures stemming from poisoned delivery context.
- **Codex extension:** Restored `models.json` loading by including required `apiKey` in provider catalog.

### Active PRs Advancing (Open, notable)
| PR | Author | Area | Size | Summary |
|----|--------|------|------|---------|
| [#66236](https://github.com/openclaw/openclaw/pull/66236) | ImLukeF | docs, gateway, agents | M | Agents: clarify local model context preflight warnings |
| [#66022](https://github.com/openclaw/openclaw/pull/66022) | eleqtrizit | media | M | Fix: fail closed on attachment canonicalization |
| [#66160](https://github.com/openclaw/openclaw/pull/66160) | dongs0104 | litellm | M | Honor `--custom-base-url` in non-interactive onboard |
| [#66148](https://github.com/openclaw/openclaw/pull/66148) | SARAMALI15792 | channel: feishu | XS | Remove streaming card update throttle to prevent duplicates (fixes #65993) |
| [#66028](https://github.com/openclaw/openclaw/pull/66028) | eleqtrizit | channel: slack | L | Align Slack interaction auth with allowlists |
| [#66249](https://github.com/openclaw/openclaw/pull/66249) | tmimmanuel | gateway | S | Avoid inline dotenv secrets in systemd unit during service repair |
| [#65554](https://github.com/openclaw/openclaw/pull/65554) | jdc4429 | app: web-ui | XL | Media support v2 — complete image/audio suite for WebChat |
| [#65044](https://github.com/openclaw/openclaw/pull/65044) | nfredmond | docs, multi-channel | XL | Add ClawModeler sidecar and CLI workflow |
| [#66271](https://github.com/openclaw/openclaw/pull/66271) | Schnitzel | app: web-ui | S | Control UI: avoid chat flicker on session reload (fixes #66207) |
| [#66278](https://github.com/openclaw/openclaw/pull/66278) | Lellansin | gateway | L | Align OpenAI chat completions tool protocol |
| [#66286](https://github.com/openclaw/openclaw/pull/66286) | Lidang-Jiang | diagnostics-otel | L | Surface upstream request IDs in diagnostics |
| [#66277](https://github.com/openclaw/openclaw/pull/66277) | neeravmakwana | channels | S | Guard broken bundled channel loads from crashing gateway |
| [#66107](https://github.com/openclaw/openclaw/pull/66107) | obviyus | channel: telegram | M | Persist Telegram topic-name cache across restarts |
| [#56538](https://github.com/openclaw/openclaw/pull/56538) | knightplat-blip | extensions | S | Use TextDecoder for proper GBK encoding on Windows |
| [#66275](https://github.com/openclaw/openclaw/pull/66275) | neeravmakwana | gateway | S | Include configured custom provider models in attachment capability checks |

---

## 4. Community Hot Topics

### Top Issues by Comment Count

| # | Title | Comments | 👍 | Status | Link |
|---|-------|----------|----|--------|------|
| 1 | OAuth token refresh race condition causes spurious failovers | 21 | 14 | OPEN | [#26322](https://github.com/openclaw/openclaw/issues/26322) |
| 2 | Volcengine Coding Plan model resolves to "Unknown model" on macOS | 19 | 0 | OPEN | [#64799](https://github.com/openclaw/openclaw/issues/64799) |
| 3 | Telegram Voice Messages Not Transcribed | 14 | 0 | OPEN | [#17101](https://github.com/openclaw/openclaw/issues/17101) |
| 4 | Image tool does not support custom providers in openclaw.json | 13 | 4 | OPEN | [#31486](https://github.com/openclaw/openclaw/issues/31486) |
| 5 | Telegram DM voice-note transcription silently fails (2026.4.5) | 13 | 2 | OPEN | [#62496](https://github.com/openclaw/openclaw/issues/62496) |
| 6 | Coding Agent never completes anything (regression from 4.2) | 11 | 0 | OPEN | [#62505](https://github.com/openclaw/openclaw/issues/62505) |
| 7 | Make embedded agent LLM-request timeout configurable (hardcoded 15s) | 10 | 1 | OPEN | [#34644](https://github.com/openclaw/openclaw/issues/34644) |
| 8 | google-vertex uses API-key auth instead of ADC/Bearer for Gemini 3.x | 9 | 3 | OPEN | [#48479](https://github.com/openclaw/openclaw/issues/48479) |
| 9 | exec tool does not inherit `skills.entries.*.env` environment variables | 9 | 1 | OPEN | [#31583](https://github.com/openclaw/openclaw/issues/31583) |
| 10 | imageModel fails with "Unknown model" despite valid config | 9 | 0 | OPEN | [#33185](https://github.com/openclaw/openclaw/issues/33185) |

### Hot Topic Analysis

**1. OAuth Token Refresh Race Condition (#26322) — 21 comments, 14 👍**  
The highest-engagement issue describes a concurrency bug where multiple agents sharing a single OAuth profile (e.g., `openai-codex`) trigger simultaneous token refresh attempts. Only the first succeeds; subsequent attempts fail with 401 errors. The 14 👍 indicate this is a widely-encountered pain point in multi-agent deployments. **Underlying need:** Robust token management with locking or centralized refresh delegation.

**2. Multi-Channel Voice Transcription Failures (#17101, #62496, #63677)**  
Three separate issues report that voice/audio messages across **Telegram** and **WhatsApp** arrive as raw `<media:audio>` placeholders instead of transcribed text, despite correct STT configuration. This is a **regression** in 4.5+ affecting real-time communication use cases. **Underlying need:** Guaranteed end-to-end audio pipeline reliability across all channels.

**3. Image Tool & Custom Provider Model Failures (#31486, #33185, #59943)**  
Multiple reports that the `image` tool fails with "Unknown model" for valid custom provider configurations in `openclaw.json`,

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing intense development activity as of April 2026, with 11 active projects demonstrating substantial engineering momentum. The landscape shows clear specialization emerging: projects like **OpenClaw** and **Hermes Agent** serve as platform foundations with extensive channel integrations and multi-agent capabilities, while **NanoClaw** and **ZeroClaw** focus on security-hardened, containerized deployments. **Moltis** demonstrates the fastest bug resolution velocity (100% in one cycle), whereas **CoPaw/QwenPaw** faces the challenge of managing a major rebranding transition. The ecosystem collectively addresses four dominant themes: security hardening (ZeroClaw, PicoClaw), multi-channel parity (Hermes Agent, OpenClaw), memory and persistence (NanoBot, NanoClaw), and enterprise readiness (IronClaw). Cross-project fertilization is evident, with OpenClaw's plugin hook patterns appearing in Hermes Agent's roadmap.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | Open Issues | PRs Updated (24h) | Open PRs | Merged PRs (24h) | Releases (24h) | Activity Level |
|---------|---------------------|-------------|-------------------|----------|-------------------|-----------------|----------------|
| **OpenClaw** | 500 | 429 | 500 | 340 | 9 | 2 (beta + stable) | 🔴 Very High |
| **NanoBot** | 56 | ~18 | 57 | ~30 | — | 0 | 🟠 High |
| **Hermes Agent** | 50 | 1,000+ | 50 | 40 | 10 | 1 (v0.9.0) | 🟠 Very High |
| **PicoClaw** | 5 | — | 43 | 32 | 11 | 0 | 🟠 Very High |
| **NanoClaw** | 4 | — | 12 | 8 | 4 | 0 | 🟠 High |
| **NullClaw** | 3 | — | 5 | 5 | 0 | 0 | 🟡 Moderate |
| **IronClaw** | 44 | 38 | 50 | 41 | 9 | 0 | 🟠 High |
| **LobsterAI** | 2 | — | 20 | 7 | 13 | 1 | 🟠 High |
| **Moltis** | — | — | 19 | 1 | 18 | 2 | 🟢 High (quality) |
| **CoPaw/QwenPaw** | 41 | — | 50 | 31 | 19 | 1 (beta) | 🟠 Very High |
| **ZeroClaw** | 20 | — | 50 | 29 | 21 | 0 | 🟠 High |
| **TinyClaw** | 0 | — | 0 | — | 0 | 0 | ⚪ Inactive |
| **ZeptoClaw** | 0 | — | 0 | — | 0 | 0 | ⚪ Inactive |

**Note:** TinyClaw and ZeptoClaw show no activity in the observed window.

---

## 3. OpenClaw's Position

### Advantages vs. Peers

- **Scale of Community Engagement**: With 500 issues and 500 PRs updated in 24 hours, OpenClaw operates at 10x the activity volume of most peers, indicating the largest contributor base and user community.
- **Release Cadence**: Shipped two releases on the same day (v2026.4.14-beta.1 and v2026.4.12), demonstrating rapid iteration capability.
- **Documentation Depth**: Today's PRs include documentation improvements for local model context warnings and agent clarify flags—a pattern less visible in peer projects.

### Technical Approach Differences

| Aspect | OpenClaw | Hermes Agent | NanoBot |
|--------|----------|--------------|---------|
| **Primary Focus** | Platform breadth, plugin ecosystem | "Everywhere" mobile/termux support | Memory consolidation, Dream architecture |
| **OAuth Strategy** | Centralized credential leasing | OAuth with allowlist alignment | Not prominent |
| **Markdown Rendering** | Replaced marked.js with markdown-it | Not addressed | Not addressed |
| **Cron Architecture** | Isolated subagent delivery contexts | Not prominent | Respect deliver flag |
| **Windows Parity** | Active path doubling fixes | Not prominent | exec tool forced bash regression |

### Community Size Comparison

OpenClaw's 429 open issues dwarfs Hermes Agent's 1,000+ (though Hermes has cross-repo issues), while NanoBot (~18 open) and LobsterAI (~2 active) represent smaller but focused communities. OpenClaw's reviewer throughput (9 merged PRs today) indicates sustainable maintainer capacity relative to backlog.

---

## 4. Shared Technical Focus Areas

### Multi-Channel Integration Parity

**Projects:** Hermes Agent, PicoClaw, OpenClaw, NanoClaw, ZeroClaw, CoPaw/QwenPaw

| Channel | Projects Implementing | Notable Details |
|---------|---------------------|-----------------|
| **Feishu/Lark** | Hermes Agent (#9118), PicoClaw (#2481), LobsterAI | Auto-threading, multi-instance support emerging |
| **Matrix E2EE** | NanoClaw (#1624), ZeroClaw (#5166) | Different approaches—NanoClaw via matrix-js-sdk, ZeroClaw OTK retry handling |
| **IMAP/SMTP Email** | NanoClaw (#1764), ZeroClaw (#5712) | Env-var credential isolation (NanoClaw), IDLE fallback (ZeroClaw) |
| **QQ/WeChat** | Hermes Agent (#7616), CoPaw | Official QQ Bot API v2 with WebSocket gateway |
| **Mattermost** | PicoClaw (#1586), ZeroClaw (#5602) | WebSocket replacing REST polling (ZeroClaw) |
| **Telegram** | All major projects | Primary integration; voice transcription regressions in OpenClaw |
| **XMPP** | Moltis (#48) | Completed after ~2 months |

### Security Hardening

**Projects:** ZeroClaw, PicoClaw, NanoClaw, OpenClaw, LobsterAI

| Security Concern | Projects | Approach |
|-----------------|----------|----------|
| **Command Policy Bypass** | ZeroClaw (#5698), PicoClaw (#1042) | is_args_safe() enforcement, guardCommand fixes |
| **Path Traversal** | Hermes Agent (#8747), PicoClaw | file:// URI validation, regex argument matching |
| **PII Protection** | NanoClaw (#1563) | PDF LLaVA-stage anonymization, fail-closed fallback |
| **OPA Policies** | PicoClaw (#2509) | YAML-based security policy configuration |
| **Session Isolation** | PicoClaw (#2492) | Protoagent code isolation |
| **Secret Sanitization** | LobsterAI (#1661) | API key removal from exported logs |
| **OAuth Token Races** | OpenClaw (#26322) | Centralized refresh delegation needed |

### Memory & Dream Consolidation

**Projects:** NanoBot, NanoClaw, OpenClaw

| Feature | NanoBot | NanoClaw | OpenClaw |
|---------|---------|----------|----------|
| **Dream Architecture** | Event-driven triggers (#3122) | SQLite-first self-improving (#1743) | Memory consistency fixes |
| **Post-Dream Hooks** | Yes (#3104) | Not prominent | Not prominent |
| **Context Overflow** | 2-hour window issue | Not prominent | Not prominent |
| **Token Cost Control** | Heartbeat token bloat (#2375) | Not prominent | Not prominent |

### Silent Failure Mode Remediation

**Projects:** NanoClaw (#1762, #1763), IronClaw (#2279), Moltis

NanoClaw's critical bugs (TypeScript errors causing silent container death, UID mismatch blocking new groups) exemplify a pattern across the ecosystem where production deployments encounter opaque failures. IronClaw's false success claims despite shell errors (#2279) represents a related anti-pattern. Moltis achieved 100% bug resolution in one cycle, suggesting that systematic error surfacing practices yield rapid resolution.

---

## 5. Differentiation Analysis

### Feature Focus Differentiation

| Project | Primary Differentiator | Secondary Differentiator |
|---------|----------------------|-------------------------|
| **OpenClaw** | Platform breadth, 500+ issue/PR volume | Credential leasing, OAuth race condition focus |
| **Hermes Agent** | Mobile "everywhere" (Termux, iMessage, WeChat) | 1,000+ issue backlog (governance challenge) |
| **NanoBot** | Event-driven Dream consolidation | Multi-search provider fallback |
| **PicoClaw** | OPA security policies, multi-instance channel config | exec guardCommand (buggy but sophisticated) |
| **NanoClaw** | Container isolation, PII protection, Matrix E2EE | Silent failure remediation |
| **IronClaw** | Concurrent tool execution, WASM support, enterprise roadmap | Web UI crash fixes |
| **Moltis** | Fastest bug resolution (18 PRs merged, 100% bug fix rate) | XMPP channel completion, Voicebox TTS |
| **ZeroClaw** | WASM plugin system, security scan integration (ClawGuard) | Channel tiering for performance |
| **CoPaw/QwenPaw** | Self-evolution skill, plan mode, file rollback | Rebranding friction (migration critical) |
| **LobsterAI** | Electron-based desktop app, rapid security backports | MCP Bridge auth mismatch fixes |

### Target User Profiles

| Project | Target User |
|---------|-------------|
| **OpenClaw** | Power users, multi-agent deployments, platform integrators |
| **Hermes Agent** | Mobile-first users, China-region platforms (Feishu, WeChat, QQ) |
| **NanoBot** | Self-hosters prioritizing memory persistence and local models |
| **PicoClaw** | Security-conscious deployments, Feishu enterprise users |
| **NanoClaw** | Privacy-focused users requiring container isolation |
| **IronClaw** | Enterprise teams requiring concurrent execution, RBAC |
| **Moltis** | Developers wanting rapid iteration, multi-channel parity |
| **ZeroClaw** | Advanced users seeking WASM extensibility, security hardening |
| **CoPaw/QwenPaw** | Chinese-speaking users, rebranding from CoPaw |

### Technical Architecture Differences

| Dimension | OpenClaw | Hermes Agent | Moltis | IronClaw |
|-----------|----------|--------------|--------|----------|
| **Language** | TypeScript/Node | Python | Rust | Rust |
| **Gateway Model** | Plugin hooks | FastAPI web dashboard | Lock-free broadcast | WASM tool dispatch |
| **Credential Model** | Convex-pooled leasing | OAuth allowlists | Not prominent | Per-task overrides |
| **Config Format** | openclaw.json | hermes.yaml | Not specified | TOML/JSON |
| **Channel Pattern** | Plugin adapters | Multiple platform adapters | Multi-channel architecture | WASM channel reporting |

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1 — Platform-Scale Velocity:**
- **OpenClaw**: 500 updates/24h; 9 merged PRs; dual releases. Mature review processes, but regressions indicate testing velocity challenges.
- **Hermes Agent**: 50 updates/24h; v0.9.0 shipped; 1,000+ open issues represents governance debt.

**Tier 2 — High-Velocity Active Development:**
- **ZeroClaw**: Security-dominant, 21 merges, WASM plugin system advancing.
- **CoPaw/QwenPaw**: Rebranding phase with 19 merges; migration documentation gap is critical.
- **IronClaw**: Concurrent tool execution and parallel message handling in review.
- **PicoClaw**: Policy evaluation merged, multi-instance channel refactor completed.

**Tier 3 — Quality-Focused Iteration:**
- **Moltis**: Highest merge-to-open ratio (18:1); 100% bug resolution; architectural refactoring focus.
- **LobsterAI**: Security backports (CVSS 9.2 in 24h); Electron upgrade pending.
- **NanoBot**: Event-driven consolidation advancing; heartbeat token issue unresolved.

**Tier 4 — Stabilizing:**
- **NullClaw**: Feature validation phase; 3 PRs from single contributor in <24h.
- **NanoClaw**: Container security hardening; Matrix E2EE near-maturity.

**Tier 5 — Inactive:**
- **TinyClaw**, **ZeptoClaw**: No activity in observed window.

### Rapidly Iterating Projects
OpenClaw, Moltis, and LobsterAI demonstrate sustainable rapid iteration with quality controls. Moltis stands out for achieving 18 merges with zero open PRs and 100% bug resolution.

### Stabilizing Projects
Hermes Agent's v0.9.0 post-release regression fixes indicate transition toward stabilization. LobsterAI's rapid security patching suggests mature incident response.

---

## 7. Trend Signals

### 1. Security-First Architecture Becoming Table Stakes

ZeroClaw's ClawGuard scan revealing 66 critical findings (#5709) and PicoClaw's OPA policy system indicate that command policy enforcement, path traversal prevention, and credential isolation are shifting from optional hardening to baseline requirements. OpenClaw's marked.js → markdown-it replacement (security fix) reinforces this trend.

**Value for Developers:** Security hardening primitives (OPA policies, env-var credential isolation, path validation) should be considered mandatory for production deployments. Projects lacking these will face adoption barriers.

### 2. Multi-Channel Parity with Regional Focus

Hermes Agent's "everywhere release" targeting Termux, iMessage, and WeChat signals that cross-platform mobile support is a competitive differentiator. China-specific platforms (Feishu, QQ, WeChat, Lark) appear in 6+ projects' roadmaps, indicating significant Chinese-market demand.

**Value for Developers:** Channel integration is increasingly commoditized; differentiation lies in mobile support, E2EE for privacy channels (Matrix), and fallback mechanisms (IMAP IDLE → polling).

### 3. Silent Failure Modes as Critical Technical Debt

NanoClaw's TypeScript error causing all groups to go dark, IronClaw's false success claims, and OpenClaw's voice transcription regressions all share a pattern: production deployments encounter opaque failures with cascading impact. The ecosystem's response—explicit error surfacing, diagnostic logging (LobsterAI #1652)—indicates this is a recognized priority.

**Value for Developers:** Invest in container bootstrap error handling, session lifecycle visibility, and graceful degradation messaging. Users tolerate failures better than silence.

### 4. Memory and Dream Architecture Maturation

NanoBot's event-driven consolidation (#3122), NanoClaw's SQLite-first self-improving memory agent (#1743), and OpenClaw's memory consistency fixes converge on a need: persistent, non-bloated conversational memory with configurable consolidation triggers.

**Value for Developers:** Heartbeat token bloat (NanoBot #2375) signals that naive session persistence is

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-14

## 1. Today's Overview

NanoBot continues to demonstrate high development velocity with **56 issues and 57 PRs updated** in the past 24 hours. No new releases were published today, but the project shows active maintenance across multiple fronts including Dream memory consolidation, cron job handling, and provider configuration. The community is actively reporting bugs (token usage, Windows compatibility, retry amplification) while new features (SSE streaming, model routing, event-driven Dream consolidation) are progressing through the pipeline. The ratio of closed items (38 issues, 27 PRs) to open items suggests effective triaging and resolution workflows.

---

## 2. Releases

**No new releases** were published in the past 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (Notable):
| PR | Description | Impact |
|----|-------------|--------|
| [#2988](https://github.com/HKUDS/nanobot/pull/2988) | Fix gitstore: use separate git dir to avoid conflicts with user git repo | **Critical fix** — Separates nanobot's internal `.git` from user's workspace git, preventing file system conflicts |
| [#3119](https://github.com/HKUDS/nanobot/pull/3119) | fix(cron): respect deliver flag when agent produces output | **Bug fix** — Ensures `deliver: false` in cron jobs properly suppresses all output |
| [#3104](https://github.com/HKUDS/nanobot/pull/3104) | feat: add hook after dream completion | **Feature** — Enables custom post-dream processing (e.g., saving to external storage) |
| [#2707](https://github.com/HKUDS/nanobot/pull/2707) | Add Russian README documentation | **Localization** — Expands documentation accessibility |
| [#2113](https://github.com/HKUDS/nanobot/pull/2113) | feat(web_search): support multiple search providers with automatic fallback | **Reliability** — Adds provider fallback to prevent tool failures from single-provider outages |
| [#2394](https://github.com/HKUDS/nanobot/pull/2394) | fix(context): coalesce consecutive messages with the same role | **Stability** — Fixes "Cannot have 2 or more assistant messages" LLM errors |
| [#2650](https://github.com/HKUDS/nanobot/pull/2650) | fix(telegram): split long messages during streaming | **UX fix** — Prevents `Message_too_long` errors in Telegram by auto-splitting |

### Open PRs Under Review:
| PR | Description | Status |
|----|-------------|--------|
| [#3122](https://github.com/HKUDS/nanobot/pull/3122) | feat: trigger Dream on consolidation archive (event-driven) | **Open (today)** — Addresses #3047 by making Dream consolidation trigger-based |
| [#3101](https://github.com/HKUDS/nanobot/pull/3101) | feat(api): add SSE streaming support to /v1/chat/completions | **Open** — Adds OpenAI-compatible streaming |
| [#3121](https://github.com/HKUDS/nanobot/pull/3121) | feat(agent): add model routing support via AgentHookContext | **Open (today)** — Enables dynamic model routing per #3070 |
| [#2932](https://github.com/HKUDS/nanobot/pull/2932) | feat(providers): record LLM token usage to workspace JSONL | **Open** — Adds per-call token tracking |
| [#3026](https://github.com/HKUDS/nanobot/pull/3026) | refactor(config): migrate provider configuration to list format | **Open** — Better multi-endpoint support with backward compatibility |
| [#3021](https://github.com/HKUDS/nanobot/pull/3021) | fix(memory): prevent Dream edit_file corruption | **Open** — Fixes memory file bloating from local model garbling |

---

## 4. Community Hot Topics

### Top Issues by Engagement:

| Issue | Title | Comments | 👍 | Status |
|-------|-------|----------|-----|--------|
| [#2375](https://github.com/HKUDS/nanobot/issues/2375) | [Bug] Heartbeat session history causes ENORMOUS token usage | **11** | 1 | CLOSED |
| [#2760](https://github.com/HKUDS/nanobot/issues/2760) | Retry amplification risk: stacked app+SDK retries can triple upstream load | **10** | 0 | CLOSED |
| [#2185](https://github.com/HKUDS/nanobot/issues/2185) | [regression] Upgrade nanobot breaks gemini-3-flash-preview | **8** | 0 | OPEN |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) | local ollama config - getting 404 page not found | **6** | 0 | OPEN |
| [#2868](https://github.com/HKUDS/nanobot/issues/2868) | `exec` tool forced to use bash on Windows | **5** | 2 | CLOSED |

**Analysis of underlying needs:**
- **Token cost control** (#2375): Users running frequent heartbeat tasks face explosive token consumption (560k tokens per heartbeat cycle). This signals a need for configurable heartbeat persistence and automatic context pruning.
- **Retry reliability** (#2760): The retry amplification issue reveals complex multi-layer retry configurations that can worsen throttling rather than help. Users need clear retry strategy documentation.
- **Local model support** (#2185, #2570): Multiple regression and connectivity issues with local Ollama deployments indicate this is a pain point requiring more robust testing against local backends.

---

## 5. Bugs & Stability

### Critical/High Severity Bugs:

| Issue | Title | Severity | Fix Status |
|-------|-------|----------|------------|
| [#2375](https://github.com/HKUDS/nanobot/issues/2375) | Heartbeat session history causes ENORMOUS token usage | **Critical** | CLOSED — Issue acknowledged; no linked PR yet |
| [#2868](https://github.com/HKUDS/nanobot/issues/2868) | `exec` tool forced to use bash on Windows | **High** | CLOSED — Regression from commit `be6063a` |
| [#2826](https://github.com/HKUDS/nanobot/issues/2826) | Nanobot can remove files outside workspace with restrictToWorkspace=true | **High** | CLOSED — Follow-up to #845; fix pending |
| [#2562](https://github.com/HKUDS/nanobot/issues/2562) | Telegram acknowledgment reaction remains after response completes | **Medium** | CLOSED — v0.1.4.post6 regression |
| [#2713](https://github.com/HKUDS/nanobot/issues/2713) | Agent response speed slowed after v0.1.4.post6 update | **Medium** | CLOSED — Performance regression reported |

### Moderate/Resolved:
- [#100](https://github.com/HKUDS/nanobot/issues/100) — Telegram "Message text is empty" crash when agent completes tasks without text output (CLOSED)
- [#2542](https://github.com/HKUDS/nanobot/issues/2542) — Message tool incorrectly includes message_id when targeting different chat_id (CLOSED)
- [#2145](https://github.com/HKUDS/nanobot/issues/2145) — LiteLLM/tiktoken requires external network access in isolated environments (CLOSED)
- [#2757](https://github.com/HKUDS/nanobot/issues/2757) — OpenAI provider sends max_tokens instead of max_completion_tokens (CLOSED)
- [#1313](https://github.com/HKUDS/nanobot/issues/1313) — Moonshot Kimi reasoning model fails with tool calls (CLOSED)

**Note:** The heartbeat token issue (#2375) with 11 comments represents the highest community concern and warrants priority attention for a fix PR.

---

## 6. Feature Requests & Roadmap Signals

### High-Interest Feature Requests:

| Issue | Title | Comments | Predict Priority |
|-------|-------|----------|------------------|
| [#3070](https://github.com/HKUDS/nanobot/issues/3070) | Feature: Model routing like OpenRouter | **2** | **High** — PR #3121 already implements this |
| [#2984](https://github.com/HKUDS/nanobot/issues/2984) | Feature: Automatic Context Compression | **2** | **Medium** — Addresses token limit concerns |
| [#3047](https://github.com/HKUDS/nanobot/issues/3047) | Issues with Dream memory consolidation | **1** | **High** — PR #3122 addresses this |
| [#3030](https://github.com/HKUDS/nanobot/pull/3030) | feat(channels): Support Web and iOS App | — | **In Progress** |
| [#2782](https://github.com/HKUDS/nanobot/issues/2782) | Add nanobot logo to Agent Skills client list | **1** | **Low** — Community visibility |

### Predicted Near-Term Features:
1. **Model routing** — Active PR #3121 suggests this is nearing merge
2. **Event-driven Dream consolidation** — PR #3122 addresses the 2-hour window context overflow issue
3. **Dream post-completion hooks** — PR #3104/#3118 enable extensible custom processing
4. **SSE streaming for API** — PR #3101 adds OpenAI-compatible streaming

---

## 7. User Feedback Summary

### Pain Points:
| Category | Issue | User Impact |
|----------|-------|-------------|
| **Token cost** | Heartbeat accumulates 600+ lines, consuming 560k tokens per cycle | Users running scheduled tasks face unpredictable API costs |
| **Windows compatibility** | `exec` tool broken after recent commit; WSL RPC errors | Blocks Windows-only users |
| **Local LLM setup** | Ollama 404 errors, gateway port not listening | Hinders privacy-focused/self-hosted users |
| **Installation issues** | PIP install fails on ARM, cryptography download errors | Blocks installation on Raspberry Pi, ARM devices |
| **Performance regression** | v0.1.4.post6 3x slower than post4 | Forces users to downgrade |

### Satisfaction Signals:
- Positive engagement on retry and error handling improvements
- Appreciation for Telegram long-message splitting (prevents user-facing errors)
- Multi-search provider fallback (#2113) received community support
- Russian documentation contribution shows expanding international interest

---

## 8. Backlog Watch

### Long-Unanswered or Stalled Items:

| Issue/PR | Title | Age | Status | Attention Needed |
|----------|-------|-----|--------|------------------|
| [#2782](https://github.com/HKUDS/nanobot/issues/2782) | Add nanobot logo to Agent Skills client list | ~11 days | OPEN | Maintainer decision needed |
| [#2913](https://github.com/HKUDS/nanobot/issues/2913) | Local source Llama not integrating correctly | ~7 days | CLOSED (dup) | Duplicate of #2570 — local Ollama issues persist |
| [#3074](https://github.com/HKUDS/nanobot/issues/3074) | How to push/send a message from API session to another channel | ~2 days | OPEN | Technical question unresolved |
| [#2185](https://github.com/HKUDS/nanobot/issues/2185) | Regression with gemini-3-flash-preview | ~28 days | OPEN | Long-standing regression needs triaging |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) | Ollama local config 404 errors | ~18 days | OPEN | Affects local deployment use case |

### Items Without Linked Fix PRs:
- [#2375](https://github.com/HKUDS/nanobot/issues/2375) — Heartbeat token bloat (11 comments, closed but no PR linked)
- [#2185](https://github.com/HKUDS/nanobot/issues/2185) — Gemini regression (8 comments, open since March 17)
- [#2570](https://github.com/HKUDS/nanobot/issues/2570) — Ollama connectivity (6 comments, open since March 27)

**Maintainer Recommendation:** The heartbeat token issue (#2375) and Ollama connectivity (#2570/#2185) appear to have community urgency but lack linked fix PRs. Prioritizing these would address significant user friction points.

---

*Digest generated from NanoBot repository activity on 2026-04-14*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-14

---

## 1. Today's Overview

Hermes Agent enters April 14th with very high activity following the **v0.9.0 "everywhere release"** drop on April 13th. The project saw **50 issues and 50 PRs updated in the last 24 hours**, with 40 PRs currently open and 10 merged/closed — a strong signal of active development across platform support, bug fixes, and UX improvements. The backlog remains substantial: the repository crossed **1,000 open issues** (per #7335), and several v0.9.0-adjacent bugs are surfacing in the Web Dashboard, Nix packaging, and Telegram streaming. The project is healthy in terms of contributor velocity, but the issue backlog management is a recognized concern.

---

## 2. Releases

### v2026.4.13 — Hermes Agent v0.9.0 (Released April 13, 2026)

| Metric | Value |
|---|---|
| Commits since v0.8.0 | 487 |
| Merged PRs | 269 |
| Resolved Issues | 167 |
| Files Changed | 493 |
| Insertions | 63,281 |
| Contributors | 63 |

**Thematic Focus — "The Everywhere Release":**
- **Mobile expansion:** Termux/Android support added
- **New messaging platforms:** iMessage and WeChat/Weixin adapters shipped
- **Performance:** "Fast" subsystem shipped (likely FastAPI-based web dashboard)

**Notable v0.9.0 Changes Reflected in Today's Activity:**
- The **Local Web Dashboard** is new, and several v0.9.0 regressions are reported (see §5)
- Termux bundle was missing Telegram dependency, tracked in [PR #9311](https://github.com/NousResearch/hermes-agent/pull/9311)
- The Nix flake build is broken post-v0.9.0 due to missing `fastapi` in the venv ([Issue #9305](https://github.com/NousResearch/hermes-agent/issues/9305))

**No migration notes or breaking changes documented in the release notes provided.** Users upgrading from v0.8.0 may want to check `hermes update` behavior with `package-lock.json` ([Issue #4408](https://github.com/NousResearch/hermes-agent/issues/4408), now closed).

---

## 3. Project Progress

### Merged/Closed PRs Today (10 total)

| PR | Type | Summary |
|---|---|---|
| [#9320](https://github.com/NousResearch/hermes-agent/pull/9320) | feat | **Dashboard context window support** — `GET /api/model/info` endpoint, context window visibility and override in config UI |
| [#9319](https://github.com/NousResearch/hermes-agent/pull/9319) | fix | **Telegram duplicate replies fix** — prevents duplicate messages when Telegram rate-limits edit API calls during streaming |
| [#9309](https://github.com/NousResearch/hermes-agent/pull/9309) | fix | **GPT-5 context length correction** — fixes `gpt-5.3-codex` showing 128k tokens (max output) instead of correct 400k context window |
| [#1549](https://github.com/NousResearch/hermes-agent/pull/1549) | feat | **`/browser connect` via CDP** — attaches browser tools to live Chrome using Chrome DevTools Protocol |
| [#9324](https://github.com/NousResearch/hermes-agent/pull/9324) | fix | **Missing `os` import** in `web_server.py` causing `NameError` on `/api/providers/oauth` |

### Open PRs Advancing Features (notable)

| PR | Type | Summary |
|---|---|---|
| [#9118](https://github.com/NousResearch/hermes-agent/pull/9118) | feat | **Feishu auto-thread & topic-based session routing** — closes #9154, fills Discord-gap for China users |
| [#4473](https://github.com/NousResearch/hermes-agent/pull/4473) | feat | **MAX platform** (VK Teams / Mail.ru) adapter — full integration for a major Russian messenger |
| [#7616](https://github.com/NousResearch/hermes-agent/pull/7616) | feat | **QQ Bot adapter** (Official QQ Bot API v2) with WebSocket gateway + REST API for media |
| [#9323](https://github.com/NousResearch/hermes-agent/pull/9323) | feat | **Nextcloud Talk bot adapter** — self-hosted bot via HMAC-signed webhooks |
| [#8879](https://github.com/NousResearch/hermes-agent/pull/8879) | feat | **StepFun provider** (阶跃星辰) — new China-based model provider |
| [#4692](https://github.com/NousResearch/hermes-agent/pull/4692) | feat | **Ink (React) TUI refactor** — replaces prompt_toolkit with React terminal UI over JSON-RPC |
| [#6948](https://github.com/NousResearch/hermes-agent/pull/6948) | feat | **Session protocol** decentralized messaging gateway |
| [#9087](https://github.com/NousResearch/hermes-agent/pull/9087) | feat | **Nix home-manager module** — declarative per-user hermes-agent service |

### Open Fix PRs (notable)

| PR | Type | Summary |
|---|---|---|
| [#9311](https://github.com/NousResearch/hermes-agent/pull/9311) | fix | **Termux Telegram dependency** — adds missing Telegram adapter to termux bundle |
| [#8747](https://github.com/NousResearch/hermes-agent/pull/8747) | fix | **Path traversal prevention** — validates `file://` media paths, blocks `/etc`, `/proc`, `..` traversal |
| [#9322](https://github.com/NousResearch/hermes-agent/pull/9322) | fix | **Custom provider api_key override** — fixes #9315 where explicit key was ignored in favor of pool credential |
| [#9304](https://github.com/NousResearch/hermes-agent/pull/9304) | fix | **WeixinAdapter `send_image_file`** — aligns `image_path` keyword argument |
| [#9325](https://github.com/NousResearch/hermes-agent/pull/9325) | fix | **CLI init error escaping** — preserves literal strings like `httpx[socks]` in Rich output |
| [#9321](https://github.com/NousResearch/hermes-agent/pull/9321) | fix | **c-j binding fix** — makes Enter submit instead of inserting newline on Ghostty/WSL |
| [#9070](https://github.com/NousResearch/hermes-agent/pull/9070) | feat | **Plugin hook lifecycle** — OpenClaw-style hook execution with compatibility aliases |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| # | Title | Comments | Type | Link |
|---|---|---|---|---|
| #501 | **[enhancement] Feature: Web UI Gateway — Local Browser-Based Interface with Streaming, Artifacts & Rich Rendering** | 12 | enhancement | [Issue #501](https://github.com/NousResearch/hermes-agent/issues/501) |
| #7335 | **More than 1000 open issues** | 9 | meta/discussion | [Issue #7335](https://github.com/NousResearch/hermes-agent/issues/7335) |
| #7237 | **[bug] Response truncated due to output length limit** | 3 | bug | [Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) |
| #8110 | **Telegram slash command registration excludes external skills** | 2 | bug | [Issue #8110](https://github.com/NousResearch/hermes-agent/issues/8110) |
| #8764 | **Feishu Card Interactive Button Error: Code 200340** | 2 | bug | [Issue #8764](https://github.com/NousResearch/hermes-agent/issues/8764) |
| #5434 | **Self-hosted Honcho memory broken — honcho-ai SDK 2.x incompatible with Honcho server 3.x** | 2 | bug | [Issue #5434](https://github.com/NousResearch/hermes-agent/issues/5434) |
| #9286 | **Feature: Auto-resume session context from state.db on Gateway startup** | 1 | enhancement | [Issue #9286](https://github.com/NousResearch/hermes-agent/issues/9286) |
| #9301 | **Feature: Add i18n support for non-English languages in Web Dashboard** | 1 | enhancement | [Issue #9301](https://github.com/NousResearch/hermes-agent/issues/9301) |

### Analysis of Underlying Needs

1. **Web UI is the #1 community request** (#501, 12 comments) — Hermes has CLI, Telegram, Discord, WhatsApp, Slack, Home Assistant, but no local browser-based UI. The community explicitly compares against Claude's Artifacts and streaming capabilities. This is a clear roadmap signal: a first-class Web UI with streaming, markdown rendering, and artifact support would address the most-requested gap.

2. **Open issue backlog health** (#7335) — The maintainer community is aware that 1,000+ open issues is unsustainable. This is a governance/process concern rather than a technical one, but it affects contributor experience and triage efficiency.

3. **Response truncation** (#7237) — A recurring pain point where long-form responses get cut off mid-stream. Likely related to max output token limits not being surfaced to the context engine.

4. **China-region platform expansion** — Feishu auto-threading (#9118), Kimi/Moonshot China provider (#8825, closed), StepFun provider (#8879), and MAX/VK Teams (#4473) all signal strong interest from Chinese-speaking users and China-based platform integration.

---

## 5. Bugs & Stability

### Active Bugs (ranked by severity/visibility)

| # | Title | Severity Signal | Fix PR? | Link |
|---|---|---|---|---|
| #9313 | **[Bug] Web Dashboard shows "Gateway not online" after 0.9.0 upgrade** | **High** — dashboard unusable post-upgrade for web_dashboard users | No | [Issue #9313](https://github.com/NousResearch/hermes-agent/issues/9313) |
| #9314 | **[Bug] Deleted sessions reappear in Web Dashboard** | **Medium** — data consistency bug in dashboard | No | [Issue #9314](https://github.com/NousResearch/hermes-agent/issues/9314) |
| #7237 | **[bug] Response truncated due to output length limit** | **Medium** — frequent truncation of long responses across CLI and gateways | No | [Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) |
| #9318 | **[Bug] Auxiliary client falls back to "no-key-required"** | **Medium** — API key misrouting for per-task overrides | No | [Issue #9318](https://github.com/NousResearch/hermes-agent/issues/9318) |
| #9315 | **[bug] Custom provider API key incorrectly overridden by base_url matching** | **Medium** — credential pool selects wrong key | [PR #9322](https://github.com/NousResearch/hermes-agent/pull/9322) | [Issue #9315](https://github.com/NousResearch/hermes-agent/issues/9315) |
| #9298 | **[bug] Backup breaks if pre-1980 timestamped files included** | **Low** — edge case backup failure | No | [Issue #9298](https://github.com/NousResearch/hermes-agent/issues/9298) |
| #9270 | **[Bug] Empty LLM responses replaced with "(No response generated)"** | **Medium** — poor UX for think-only completions |

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-14

## 1. Today's Overview

PicoClaw shows **very high development activity** on April 14, 2026. The project processed 43 pull request updates in 24 hours (32 open, 11 merged/closed) alongside 5 issue updates. No new releases shipped today. Notable threads include a security-focused PR for policy evaluation (merged), a bug in the `exec` tool's `guardCommand` method causing false path safety blocks, and ongoing multi-user/parallel agent improvements. The community is actively working on channel integrations (Mattermost, Feishu multi-instance), security hardening, and performance tooling.

---

## 2. Releases

**None** — No new versions were published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (11 total)

| PR | Author | Title | Status |
|---|---|---|---|
| [#2509](https://github.com/sipeed/picoclaw/pull/2509) | rjungles | Add policy evaluation system with documentation and examples | **CLOSED** |
| [#2510](https://github.com/sipeed/picoclaw/pull/2510) | rjungles | Segurança em picoclaw com opa b684a | **CLOSED** |
| [#2495](https://github.com/sipeed/picoclaw/pull/2495) | liuy | feat(agent): /clear clears seahorse DB | **CLOSED** |
| [#2507](https://github.com/sipeed/picoclaw/pull/2507) | cytown | bug fix for allowFrom contains empty string | **CLOSED** |
| [#2508](https://github.com/sipeed/picoclaw/pull/2508) | cytown | fix some bugs | **CLOSED** |
| [#2481](https://github.com/sipeed/picoclaw/pull/2481) | cytown | refactor(config): make config.Channel to multiple instance support | **CLOSED** |
| [#2492](https://github.com/sipeed/picoclaw/pull/2492) | rjungles | Protoagent code isolation 1618f | **CLOSED** |

**Key advancement:** The **policy evaluation system** was merged (PR #2509), introducing a `pkg/policy` package with YAML-based security policy configuration, regex argument matching, and runtime enforcement at intent/action/tool-call stages. The **config.Channel multi-instance refactor** (PR #2481) enables multiple channel instances, unblocking Feishu multi-app support.

---

## 4. Community Hot Topics

### Issues with Most Recent Activity

| # | Title | Type | Author | Activity |
|---|---|---|---|---|
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | [BUG] exec工具的guardCommand方法问题 | bug / tool | icyfire | 3 comments, updated 2026-04-13 |
| [#2479](https://github.com/sipeed/picoclaw/issues/2479) | [BUG] v0.2.6 — NVIDIA API with DeepSeek-V3.1/GLM4.7 failing 404 | bug / provider | dadapapapa | 3 comments, closed 2026-04-13 |
| [#2499](https://github.com/sipeed/picoclaw/issues/2499) | Secure third-party Pico WS access + versioned compatibility policy | enhancement | SiYue-ZO | 1 comment, 2026-04-13 |
| [#2493](https://github.com/sipeed/picoclaw/issues/2493) | Allow Multiple Feishu Applications via Separate Config Directories | enhancement | zuozhehao | 0 comments, 2026-04-13 |

**Analysis:**
- **exec tool guard bug** (#1042, open since March 4) continues to attract attention — the `guardCommand` regex incorrectly flags URLs like `wttr.in/Beijing?T` as out-of-workspace paths, blocking legitimate commands.
- **Third-party WebSocket integration security** (#2499) reflects demand from browser extensions and external clients wanting a sustainable auth model beyond the built-in WebUI.
- **Multi-Feishu support** (#2493) directly links to the recently merged config.Channel refactor (PR #2481), suggesting this feature may land soon.

### Active PRs Generating Discussion

| PR | Title | Author | Focus |
|---|---|---|---|
| [#2512](https://github.com/sipeed/picoclaw/pull/2512) | ci: use pnpm/action-setup and sync README install steps | wj-xiao | DevX / CI |
| [#2484](https://github.com/sipeed/picoclaw/pull/2484) | membench: add LLM-as-Judge evaluation mode | BeaconCat | Benchmark / Evaluation |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) | Multi-User Support, Security Hardening, Skills whitelisting + Agent Shield | stevef1uk | Security / Multi-tenancy |
| [#1586](https://github.com/sipeed/picoclaw/pull/1586) | Add Mattermost channel and harden gateway integration | 2niuhe | Channel / Integration |
| [#2378](https://github.com/sipeed/picoclaw/pull/2378) | fix(shell): sanitize terminal-facing output and harden path checks | vjanelle | Security / Shell |
| [#2503](https://github.com/sipeed/picoclaw/pull/2503) | refactor: make agent loop support parallel and update docs | cytown | Agent / Performance |
| [#2394](https://github.com/sipeed/picoclaw/pull/2394) | fix(providers): allow fallback for 404 errors | darrenzeng2025 | Reliability |

**Underlying needs:** The community is focused on three pillars — (1) **security** (OPA policies, path hardening, Agent Shield), (2) **multi-channel/multi-tenant** deployment (Mattermost, Feishu, multi-user), and (3) **reliability** (provider fallbacks, retry logic).

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Status | Fix Available? |
|---|---|---|---|---|
| **High** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `exec` guardCommand false-positives on URL arguments (e.g., `curl wttr.in/Beijing`) | **OPEN** | Workaround only |
| **Medium** | [#2378](https://github.com/sipeed/picoclaw/pull/2378) | Shell output sanitization + path check hardening | **OPEN** (review) | PR exists |
| **Medium** | [#2504](https://github.com/sipeed/picoclaw/pull/2504) | OGG Opus decoder corrupts frames before Discord transmission | **OPEN** | PR exists |
| **Medium** | [#2394](https://github.com/sipeed/picoclaw/pull/2394) | Provider 404 fallback for model failures | **OPEN** | PR exists |
| **Low** | [#2393](https://github.com/sipeed/picoclaw/pull/2393) | GetModelConfig should match by model ID fallback | **OPEN** | PR exists |
| **Low** | [#2392](https://github.com/sipeed/picoclaw/pull/2392) | DingTalk missing session_webhook error message improvement | **OPEN** | PR exists |
| **Resolved** | [#2507](https://github.com/sipeed/picoclaw/pull/2507) | allowFrom contains empty string bug | **CLOSED** | ✅ Merged |
| **Resolved** | [#2508](https://github.com/sipeed/picoclaw/pull/2508) | Various hiddenValues/Weixin config bugs | **CLOSED** | ✅ Merged |

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Demand Signal | Predictability |
|---|---|---|---|
| **Multi-instance Feishu support** | [#2493](https://github.com/sipeed/picoclaw/issues/2493) | Requested by zuozhehao, tied to PR #2481 (merged) | 🔵 Likely in next release |
| **Mattermost channel** | [#1586](https://github.com/sipeed/picoclaw/pull/1586) | Open PR, active development | 🟡 In progress |
| **LLM-as-Judge for membench** | [#2484](https://github.com/sipeed/picoclaw/pull/2484) | Enables semantic benchmark scoring (F1 fails on paraphrases) | 🟡 In progress |
| **Multi-user + Agent Shield** | [#2313](https://github.com/sipeed/picoclaw/pull/2313) | Security hardening + skills whitelisting | 🟡 In progress |
| **Secure 3rd-party WS access** | [#2499](https://github.com/sipeed/picoclaw/issues/2499) | Browser extensions, external clients need auth path | 🟡 Proposed |
| **Parallel agent loop** | [#2503](https://github.com/sipeed/picoclaw/pull/2503) | Based on PR #2481; concurrent message processing | 🟡 In progress |
| **CLI workspace file embedding fix** | [#2505](https://github.com/sipeed/picoclaw/pull/2505) | Ensure only latest workspace contents embedded | 🟡 In progress |

---

## 7. User Feedback Summary

**Pain Points:**
- **URL-as-path false positives** (#1042): Users with weather/data skills see commands incorrectly blocked; impacts skill reliability.
- **Model API 404 failures** (#2479): NVIDIA API with DeepSeek-V3.1/GLM4.7 returns 404, breaking bot on Telegram; closed but suggests provider compatibility gaps.
- **CLA irrelevance claim** (#2506): Contributor MichelSantos flagged that the CLA references "SAP" instead of the project, potentially blocking legitimate contributions.

**Satisfaction Signals:**
- **Multi-instance config refactor** (#2481) merged — users requesting multi-Feishu support see progress.
- **Policy evaluation system** (#2509) shipped — security-conscious users gain fine-grained control.
- **`/clear` now clears seahorse DB** (#2495) — improves context management for SQLite-backed sessions.

---

## 8. Backlog Watch

| Item | Age | Priority | Maintainer Action Needed |
|---|---|---|---|
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) — exec guardCommand bug | ~40 days open | **High** | Needs review; PR #2378 partially addresses path checks |
| [#1586](https://github.com/sipeed/picoclaw/pull/1586) — Mattermost channel | ~30 days open | **Medium** | Active review needed to unblock integration |
| [#2313](https://github.com/sipeed/picoclaw/pull/2313) — Multi-User + Agent Shield | ~11 days open | **Medium** | Large feature PR; needs architecture review |
| [#2506](https://github.com/sipeed/picoclaw/issues/2506) — CLA issue | 1 day | **Legal** | Clarification needed to avoid contributor friction |
| [#2499](https://github.com/sipeed/picoclaw/issues/2499) — 3rd-party WS security | 1 day | **Medium** | Proposal needs maintainer response |

---

**Digest generated:** 2026-04-14  
**Project:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
**Data window:** 24 hours ending 2026-04-14

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-14

## 1. Today's Overview

NanoClaw is experiencing **high velocity** on this date, with 12 PRs updated in the last 24 hours — the strongest single-day signal in the observed window — alongside 4 issue updates. No new releases shipped, but 4 pull requests were merged/closed, advancing container isolation, PII protection, and memory capabilities. The project's open backlog stands at 8 PRs and 3 active issues, suggesting active external contributions across channel integrations, observability tooling, and agent robustness. Three bugs were opened today that point to systemic gaps in container security, silent failure modes, and session lifecycle management.

---

## 2. Releases

**No new releases today.**

---

## 3. Project Progress

### Merged / Closed PRs (4)

| # | Title | Category | Key Changes |
|---|-------|----------|-------------|
| [#1766](https://github.com/qwibitai/nanoclaw/pull/1766) | feat: MS Graph MCP bridge for container access | Container / MCP | Adds `start-mcp-proxy.sh` launcher; conditional `microsoft_graph` MCP server registration via `MS_GRAPH_MCP_URL` env var |
| [#1765](https://github.com/qwibitai/nanoclaw/pull/1765) | feat(discord): multi-bot support with per-bot trigger injection | Channel / Discord | `DISCORD_BOTS` env var enables multiple bots; fixes trigger injection so each bot uses its own name instead of global `ASSISTANT_NAME` |
| [#1563](https://github.com/qwibitai/nanoclaw/pull/1563) | feat: extend PII protection to PDFs and images | Security / Privacy | PDF text extracted on host via `pdf-parse`, anonymized before container; LLaVA-stage pipeline for images; fail-closed fallback strips unrecognized content |
| [#1743](https://github.com/qwibitai/nanoclaw/pull/1743) | feat: complete ENG-123 sqlite-first self-improving memory agent | Agent / Memory | Stage D1 rich recall signal tracking and D2 embedding integration; staged memory retrieval with confidence feedback, consolidation, and periodic dreaming maintenance |

**Progress signals:** The merged PII work (10+ days in review) indicates investment in data security. The Discord multi-bot merge resolves a long-standing pain point for operators running multiple identities. The memory agent milestone marks a concrete delivery on the self-improving architecture roadmap.

---

## 4. Community Hot Topics

| # | Type | Title | Status | Author | Key Signal |
|---|------|-------|--------|--------|------------|
| [#1764](https://github.com/qwibitai/nanoclaw/pull/1764) | PR | feat: IMAP/SMTP email integration | OPEN | brunomendonca-com | New channel: `imap` tool (list/read/search/send/delete); SMTP via Nodemailer; credential never reaches container via `IMAP_PASSWORD` env var |
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) | PR | feat: add Matrix channel via matrix-js-sdk with full E2EE support | OPEN | bitcryptic-gw | Following Telegram pattern; full E2EE via Rust crypto store persisted at `data/matrix-crypto-store/` |
| [#1767](https://github.com/qwibitai/nanoclaw/pull/1767) | PR | skill: add-agentcash — pay-per-call API access via x402 micropayments | OPEN | 0xOsprey | Pay-per-call API access via x402 micropayments; new skill category |

**Hot-topic analysis:**

- **Email channel demand is high.** PR #1764 implements IMAP/SMTP with a privacy-preserving design (env-var credential isolation). This fills a major gap for asynchronous communication workflows.
- **Encrypted chat integration is a priority.** Matrix E2EE support (#1624) and the Discord multi-bot merge (#1765) show strong community interest in non-Meta, privacy-respecting channels.
- **Payment integration emerging.** The `add-agentcash` skill (#1767) signals interest in per-call metering for API access — potentially a monetization or cost-control mechanism for agent-to-API interactions.

---

## 5. Bugs & Stability

### Open Bugs (3)

**🔴 Critical — Silent container death on TypeScript errors**
[#1762](https://github.com/qwibitai/nanoclaw/issues/1762) — `Container agent fails silently when agent-runner has TypeScript compilation errors`
- Author: pauldavis | Created: 2026-04-13
- **Severity:** High. `tsc` exits code 2 → container dies → no error to user → infinite retry loop spawns identical failing containers → **all groups go silent simultaneously**.
- Trigger: adding `{ url: "..." }` in `container/agent-runner/src/index.ts` causes type error; the fix requires surfacing the TypeScript failure gracefully instead of swallowing it in the entrypoint.

**🔴 Critical — UID mismatch blocks all new groups on Linux**
[#1763](https://github.com/qwibitai/nanoclaw/issues/1763) — `Container UID mismatch — host creates root-owned dirs that container's node user can't write to`
- Author: pauldavis | Created: 2026-04-13
- **Severity:** High. Dockerfile runs as `USER node` (UID 1000); host creates `~/.claude/debug` as root; crash: `EACCES: permission denied, mkdir '/home/node/.claude/debug'`; **affects every new group on Linux root deployments**.
- Proposed fix: `chownForContainer()` helper to remap ownership before container start.

**🟡 Medium — Stale session data causes silent resume failures**
[#1761](https://github.com/qwibitai/nanoclaw/issues/1761) — `Clean up stale Claude Code sessions on EFS`
- Author: Carlos1043 | Created: 2026-04-13
- **Severity:** Medium. When session data is stale (old deployment, dev data copied to EFS, session expiry), Claude Code silently returns "No conversation found" and falls back to a fresh context, losing conversation history with no user notification.

### Closed Issues

- [#1755](https://github.com/qwibitai/nanoclaw/issues/1755) — `chore: update CLAUDE.md to match geo-miner v2 redesign` (closed, recomby-ai)

**Root-cause pattern:** The two critical bugs share a theme — **silent failure modes with cascading impact**. The TypeScript error bug causes all groups to go dark; the UID bug blocks new group creation. Both suggest the container bootstrap layer needs hardening for production Linux deployments.

---

## 6. Feature Requests & Roadmap Signals

| # | Title | Category | Readiness | Notes |
|---|-------|----------|-----------|-------|
| [#1764](https://github.com/qwibitai/nanoclaw/pull/1764) | IMAP/SMTP email integration | Channel | PR open, well-structured | Privacy-preserving design; likely near-maturity for merge |
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) | Matrix channel with full E2EE | Channel | PR open, 9 days in review | Strong implementation; follows established patterns; likely next channel to merge |
| [#1767](https://github.com/qwibitai/nanoclaw/pull/1767) | add-agentcash — x402 micropayments | Monetization / Cost control | PR open | Early-stage skill; indicates demand for per-call API metering |
| [#1760](https://github.com/qwibitai/nanoclaw/pull/1760) | Twilio fallback call when primary number doesn't answer | Voice / Reliability | PR open | 5s polling loop; fallback on no-answer/busy/failed; low-risk reliability feature |
| [#1757](https://github.com/qwibitai/nanoclaw/pull/1757) | add send_file MCP tool for delivering files to chat | MCP / UX | PR open | Maps container `/workspace/group/...` paths to host paths; inline images vs document attachments |
| [#1756](https://github.com/qwibitai/nanoclaw/pull/1756) | fix(router): include message id in XML format for agent context | Agent / Context | PR open | Fixes missing `id` attribute in `<message>` tags; enables `react_to_message` MCP tool |
| [#1758](https://github.com/qwibitai/nanoclaw/pull/1758) | Milestone/3 mastery tracking | Operational | PR open | Skill/utility category |
| [#1759](https://github.com/qwibitai/nanoclaw/pull/1759) | Reconcile vault paths with reorganized Obsidian layout | Obsidian / Skill | PR open | Path migration across `reference/`, `feeds/inbox/`, `feeds/literature/`, `reference/templates/` |

**Roadmap prediction:** The next merge wave is likely Matrix E2EE channel (#1624) and IMAP/SMTP (#1764), given their maturity and alignment with documented channel patterns. The UID fix (#1763) and silent failure fix (#1762) should be prioritized as hotfixes regardless of roadmap sequencing.

---

## 7. User Feedback Summary

| Signal | Source | Topic |
|--------|--------|-------|
| **Permission errors blocking deployment** | pauldavis (Issues #1762, #1763) | Container security and host/container UID alignment on Linux root deployments |
| **Silent failures causing trust issues** | pauldavis (Issue #1762) | TypeScript errors silently kill containers; users have no visibility into why all groups go dark simultaneously |
| **Stale session data loss without notification** | Carlos1043 (Issue #1761) | Users lose conversation history when sessions are stale; no graceful fallback message |
| **Demand for encrypted, non-proprietary channels** | bitcryptic-gw (PR #1624), community | Matrix E2EE channel to replace or supplement centralized platforms |
| **Operational reliability for voice reminders** | Viral1010 (PR #1760) | Primary call failures should trigger fallback numbers automatically; current behavior silently drops reminders |
| **Per-call API cost visibility** | 0xOsprey (PR #1767) | Operators want granular API usage metering via micropayments |

**Key user pain theme:** **Visibility and graceful degradation.** Users are encountering silent failures (TypeScript errors, stale sessions, UID mismatches) that cause total service outages without diagnostic information. The project needs more explicit error surfacing in container bootstrap and session lifecycle management.

---

## 8. Backlog Watch

| # | Type | Age | Title | Status | Concern |
|---|------|-----|-------|--------|---------|
| [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) | PR | 10 days | Matrix channel with E2EE | OPEN | 10-day review window; significant implementation; needs maintainer review to unblock |
| [#1563](https://github.com/qwibitai/nanoclaw/pull/1563) | PR | 14 days | PII protection for PDFs/images | CLOSED | Was blocked in review for 10+ days before merge |
| [#1743](https://github.com/qwibitai/nanoclaw/pull/1743) | PR | 3 days | SQLite-first self-improving memory agent | CLOSED | Merged 2 days ago; milestone delivery |
| [#1762](https://github.com/qwibitai/nanoclaw/issues/1762) | Issue | 1 day | Silent container death on TS errors | OPEN | **Needs urgent maintainer response** — affects all groups |
| [#1763](https://github.com/qwibitai/nanoclaw/issues/1763) | Issue | 1 day | UID mismatch blocking new groups | OPEN | **Needs urgent maintainer response** — blocks all Linux root deployments |
| [#1761](https://github.com/qwibitai/nanoclaw/issues/1761) | Issue | 1 day | Stale session cleanup | OPEN | Lower urgency but needs acknowledgment |
| [#1764](https://github.com/qwibitai/nanoclaw/pull/1764) | PR | 1 day | IMAP/SMTP email integration | OPEN | New; well-structured; likely ready for review |
| [#1767](https://github.com/qwibitai/nanoclaw/pull/1767) | PR | 1 day | add-agentcash x402 micropayments | OPEN | New; architectural review needed |

**Maintainer attention needed:** Issues #1762 and #1763 are new but severity demands immediate triage. PR #1624 (Matrix E2EE) is aging at 10 days and represents a significant community contribution at risk of staleness.

---

*Digest generated from NanoClaw GitHub data — 2026-04-14*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-14

## 1. Today's Overview

NullClaw shows healthy concurrent development activity with 8 total updates in the past 24 hours (3 issues, 5 PRs). All activity remains open/active with no merges or resolutions, indicating active iteration rather than completion. The project is addressing both user-reported bugs and infrastructure improvements, particularly around model provider integration and agent stability. No releases have been issued today, suggesting the team is in a feature validation phase before the next version cut.

---

## 2. Releases

No new releases today.

---

## 3. Project Progress

No PRs were merged or closed today. The following 5 pull requests are open and under active development:

| PR | Title | Author | Age |
|---|---|---|---|
| [#815](https://github.com/nullclaw/nullclaw/pull/815) | fix(web_search): add setup guidance for missing providers | manelsen | <1d |
| [#814](https://github.com/nullclaw/nullclaw/pull/814) | fix(agent): stabilize named-agent provider lifetimes | manelsen | <1d |
| [#813](https://github.com/nullclaw/nullclaw/pull/813) | fix(onboard): raise models refresh output budget | manelsen | <1d |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | feat(cron): cron subagent, run history, JSON output, security hardening | yanggf8 | 7d |
| [#810](https://github.com/nullclaw/nullclaw/pull/810) | service: add SysVinit fallback for nullclaw service install | mark-os | 1d |

**Notable progress signals:**
- manelsen has submitted 3 PRs in under 24 hours addressing critical stability issues (provider lifetime bug, models refresh buffer overflow, web search UX).
- The cron subagent PR (#783) represents the largest feature contribution, adding DB-backed scheduling with history tracking and security hardening over a week of development.

---

## 4. Community Hot Topics

**Most active issues by comments:**

| Issue | Title | Author | Comments | Link |
|---|---|---|---|---|
| #812 | [bug] http_request / internet search capability not working | uMendex | 1 | [#812](https://github.com/nullclaw/nullclaw/issues/812) |

**Analysis:** Issue #812 has attracted 1 comment and describes a user who has been trying to enable internet search since Friday without success. This signals a usability gap—either documentation insufficiency or a configuration edge case the setup flow doesn't handle gracefully. The companion PR #815 addresses web search failure reporting, suggesting maintainers are aware of the gap.

**Underlying needs:**
- Users migrating from Picoclaw/ZeroClaw expect seamless search provider setup.
- Clear error messages when no search backend is configured.
- Documentation or wizard for enabling web search in modern deployments.

---

## 5. Bugs & Stability

**Reported bugs (ranked by severity):**

| Priority | Issue | Description | Status | Fix PR? |
|---|---|---|---|---|
| 🔴 High | #809 | `models refresh` fails for OpenRouter — `Child.run()` max_output_bytes (50KB) too small; OpenRouter returns ~400KB | Open | Yes — #813 |
| 🟡 Medium | #811 | Sub agent fails to connect via custom OpenAI-compatible provider; exits with `error.CompatibleApiError` | Open | None |
| 🟡 Medium | #812 | Internet search capability does not work despite testing all examples | Open | Partial — #815 |

**Severity assessment:**
- **#809** is production-blocking for any user refreshing model catalogs via OpenRouter. The fix PR #813 is already open.
- **#811** affects agent composition workflows with custom endpoints—a core use case.
- **#812** represents a UX/documentation gap rather than a crash; users can still use NullClaw for non-search tasks.

---

## 6. Feature Requests & Roadmap Signals

**Active feature PRs:**

1. **#783 — Cron subagent engine** (yanggf8)
   - DB-backed scheduler with `cron_runs` history table and `cron_run_queue` worker
   - Skill/agent/shell job types with per-job TZ offsets
   - JSON CLI output for scripting integration
   - Security hardening included
   - **Roadmap signal:** This PR indicates demand for scheduled/automated NullClaw usage beyond interactive sessions.

2. **#810 — SysVinit fallback** (mark-os)
   - Adds SysVinit as a third Linux service manager fallback when systemd and OpenRC are unavailable
   - **Roadmap signal:** Broader Linux distribution compatibility; signals commitment to non-systemd environments.

**Prediction:** The next release likely targets model refresh reliability (#813), provider stability (#814), search UX (#815), and potentially the cron engine if review concludes quickly.

---

## 7. User Feedback Summary

**Pain points observed:**

| Pain Point | Source | Evidence |
|---|---|---|
| Internet search setup is confusing | uMendex (Issue #812) | "I've been trying to enable the internet search capability since Friday; I've tested all the examples and it doesn't work." |
| Custom provider integration is fragile | reosablo (Issue #811) | Agent fails with `error.CompatibleApiError` when using `--agent` CLI flag with custom OpenAI-compatible provider |
| Model catalog refresh is broken for OpenRouter | mark-os (Issue #809) | `nullclaw models refresh` fails with `[SKIP] openrouter: curl failed` on all platforms |

**Satisfaction signals:**
- uMendex states: "I liked NullClaw and it seems very organized"—positive perception of project structure.
- The rapid response from manelsen (3 PRs in <24h) suggests maintainers are closely monitoring and responding to user reports.

---

## 8. Backlog Watch

No issues appear to be long-unanswered; all 3 issues were created and last updated on 2026-04-13 (within 24-48 hours). However, maintainers should monitor:

| Item | Age | Risk |
|---|---|---|
| #811 — Sub agent custom provider bug | ~1 day | No fix PR yet; user workflow blocked |
| #783 — Cron feature PR | 7 days | Needs review to avoid stale; represents significant development effort |

**Recommendation:** Prioritize review of #783 (largest feature PR) and #811 (blocking bug with no workaround yet).

---

*Digest generated from NullClaw GitHub activity on 2026-04-14. Data sourced from github.com/nullclaw/nullclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-14

---

## 1. Today's Overview

IronClaw experienced high development activity on 2026-04-13, with **44 issues** and **50 PRs** updated within 24 hours. The project remains in an intense feature and stabilization cycle: 6 issues were closed while 38 remain open, and 9 PRs were merged out of 50 tracked. Notable developments include multiple PRs landing to fix web UI crashes, message persistence timing, and WASM channel reporting, alongside several large feature PRs for concurrent tool execution and parallel message handling still in review. The staging promotion pipeline continued operating normally with automated batch builds. No new releases were tagged today.

---

## 2. Releases

**No new releases were published today.** The project continues development on the staging branch with the most recent tagged version being `0.25.0` (referenced in QA bug reports).

---

## 3. Project Progress

The following significant PRs were merged or closed in the past 24 hours:

- **#2435** *(merged)* — `fix(bridge): eliminate dual card + text for approval/auth flows` — Resolved a bug where v2 engine gate-paused flows were sending both a UI card and a text message to the web gateway, causing duplicate prompts. The gate-paused paths now return `None` and `bridge_to_outcome()` maps pending gates correctly to the appropriate handler.
  - https://github.com/nearai/ironclaw/pull/2435

- **#2431** *(merged)* — `fix(web): prevent browser crash from timer leaks, DOM growth, SSE buffer` — Fixed #2406; addressed accumulated `setInterval` timers, unbounded DOM growth, and SSE buffer bloat causing Chrome's "Pages Unresponsive" dialog during extended bug-bash sessions.
  - https://github.com/nearai/ironclaw/pull/2431

- **#2434** *(merged)* — `fix(gateway): persist user messages at send time` — Resolved #2409 where user messages disappeared when switching threads because DB persistence was asynchronous in the agent loop. The `chat_send_handler` now writes messages to DB immediately before returning 202.
  - https://github.com/nearai/ironclaw/pull/2434

- **#2227** *(merged)* — `fix(tools): normalize hyphens to underscores in MCP/WASM tool names` — Resolved a tool dispatch failure where MCP tools registered with mixed naming caused "Tool not found" errors when the LLM called back with normalized names.
  - https://github.com/nearai/ironclaw/pull/2227

- **#2200** *(merged)* — `fix(engine): admin skills visible to all tenants via system_project_id` — Introduced `system_project_id()` (Uuid::nil) for admin-installed shared skills, ensuring bundled/installed skills are accessible gateway-wide rather than scoped to per-user projects.
  - https://github.com/nearai/ironclaw/pull/2200

- **#2436** *(closed)* — Identical to #2435, superseded by the merge.

---

## 4. Community Hot Topics

The most discussed issues and PRs reflect focus areas in OAuth integration, usability, and multi-channel reliability:

| # | Title | Comments | Type | Link |
|---|-------|----------|------|------|
| #2229 | Google Sheets OAuth blocked: Error 400 invalid_request on authorize | 5 | OPEN Bug | https://github.com/nearai/ironclaw/issues/2229 |
| #1852 | should make it easy to use | 4 | OPEN Enhancement | https://github.com/nearai/ironclaw/issues/1852 |
| #846 | `onboard` fails with "Failed to save settings to database" | 4 | OPEN Bug | https://github.com/nearai/ironclaw/issues/846 |
| #84 | feat: Agent system advanced features (multi-agent, streaming, thinking modes, elevated mode) | 3 | OPEN Feature | https://github.com/nearai/ironclaw/issues/84 |
| #2360 | feat(browser): add built-in browser tool with chromiumoxide CDP and AX-tree element refs | 2 | OPEN Feature | https://github.com/nearai/ironclaw/issues/2360 |
| #2230 | Twitter/X connection unavailable — MCP requires manual browser cookie extraction | 2 | OPEN Bug | https://github.com/nearai/ironclaw/issues/2230 |

**Key themes:**
- **OAuth reliability is a major pain point.** Issue #2229 documents Google Sheets OAuth failing with a 400 error, and a related typo bug (#2391) sends `'offlin'` instead of `'offline'` in the access_type parameter — both blocking integration workflows. Twitter/X integration (#2230) similarly requires manual cookie extraction.
- **Usability gap for non-technical users.** Issue #1852 argues that the configuration experience is too technical, impeding broader adoption.
- **Enterprise feature roadmap.** Multi-agent routing, streaming, and thinking modes (#84) and an admin management panel (#1609) signal growing enterprise interest.

---

## 5. Bugs & Stability

Multiple QA-sourced bug reports were filed today, predominantly from staging/hosted environments. Ranked by apparent severity:

| # | Title | Comments | Fix PR? |
|---|-------|----------|---------|
| #2406 | Pages Unresponsive dialog and black screen crashes | 0 | ✅ #2431 merged |
| #2409 | User messages disappear after typing in chat | 0 | ✅ #2434 merged |
| #2408 | Context length overflow: input exceeds model's 200K token limit | 0 | None |
| #2402 | Bot enters infinite "Calling LLM" loop after tool operations | 0 | None |
| #2276 | Orchestrator crashes with HTTP 413 Payload Too Large from nearai_chat provider | 0 | None |
| #2279 | Bot falsely claims success despite shell/open tool errors ("No lease for action") | 0 | None |
| #2286 | Bot creates scheduled cron job instead of executing task immediately | 0 | None |
| #2287 | Bot calls wrong API (convertkit.com/subscribe) instead of parsing uploaded invoice | 0 | None |
| #2391 | Google OAuth sends 'offlin' instead of 'offline' | 1 | None |

**Assessment:** The web UI stability bugs (#2406, #2409) are already resolved via merged PRs. However, the new cluster of bugs (infinite loops, context overflow, task routing failures, false success claims) indicates that the agent's error handling and task execution logic under extended multi-step scenarios requires hardening. The typo in #2391 is a trivial fix awaiting implementation.

---

## 6. Feature Requests & Roadmap Signals

Active feature development tracked via open PRs and high-comment issues:

- **#2423** *(open)* — `feat(tools): concurrent read-only tool execution with batch partitioning` — Adds `is_concurrent_safe()` to the Tool trait, partitioning multiple tool calls into parallel (read-only) and serial (mutating) batches via `JoinSet`. This is a significant performance and throughput enhancement for multi-tool agents.
  - https://github.com/nearai/ironclaw/pull/2423

- **#2360** *(open)* — `feat(browser): add built-in browser tool with chromiumoxide CDP and AX-tree element refs` — Enables JavaScript-rendered web page interaction, form filling, button clicking, and dynamic content reading. Depends on browser service, profile store, and identity model PRs.
  - https://github.com/nearai/ironclaw/issues/2360

- **#2429** *(open)* — `feat(agent): parallel message handling across threads` — Spawns each `handle_message()` as a concurrent tokio task; messages on different threads now process in parallel while preserving same-thread serialization.
  - https://github.com/nearai/ironclaw/pull/2429

- **#2418** *(open)* — `feat: slim mode runtime, Dockerfiles, and /health route` — Targets high-density multi-tenant deployments with a 1-worker multi-thread runtime and standard orchestrator health endpoint.
  - https://github.com/nearai/ironclaw/pull/2418

- **#1378** *(open)* — `feat(routing): per-channel MCP and built-in tool filtering` — Adds JSON-configurable channel routing so that MCP servers and built-in tools are scoped per channel (e.g., research channel sees only research tools).
  - https://github.com/nearai/ironclaw/pull/1378

- **#1609** *(open)* — `feat: admin management panel — web UI for users, workspaces, roles, and usage monitoring` — P2 priority, depends on user management, workspaces, and RBAC foundations.
  - https://github.com/nearai/ironclaw/issues/1609

- **#84** *(open)* — `feat: Agent system advanced features (multi-agent, streaming, thinking modes, elevated mode)` — P2-P3 roadmap item for agent system parity.
  - https://github.com/nearai/ironclaw/issues/84

**Roadmap prediction:** The near-term focus appears to be on performance (concurrent tools, parallel threads), browser automation, and enterprise-ready features (RBAC, admin panel, SSO). Slim mode and per-channel routing are likely to ship in upcoming releases given active development.

---

## 7. User Feedback Summary

Direct user pain points surfaced through issue reports:

- **Installation and onboarding friction** (#846): Users encounter a database error during `ironclaw onboard` setup, yet the app starts and migrates successfully afterward — confusing UX suggesting an onboarding validation issue.
- **Platform compatibility gaps** (#1339): Raspberry Pi (armv7) users cannot compile the project, indicating no tier-1 or tier-2 support for ARM32.
- **Configuration accessibility** (#1852): Non-technical users struggle to configure IronClaw due to the technical nature of settings discovery and editing.
- **Deployment environment issues** (#1680): Railway one-click deployment users report LLM environment variables not being picked up; model stuck on Anthropic Sonnet despite config.
- **Data loss on UI upgrades** (#1846): A user reported significant data loss when using the UI "update instance" button, reverting to an older version and losing Telegram connection and other configured items.

**Satisfaction signals:** The project maintains active engagement with 50 PR updates in 24 hours, indicating strong contributor interest. The v2 engine improvements (skill visibility, admin skills per tenant) received positive community contributions.

---

## 8. Backlog Watch

Issues or PRs that are important but lack recent activity or maintainer input:

| # | Title | Age | Status | Notes |
|---|-------|-----|--------|-------|
| #846 | `onboard` fails with "Failed to save settings to database" | ~35 days | OPEN | 4 comments but unresolved; onboarding failure is a conversion blocker |
| #1339 | "no supported isa found for arch `armv7`?" | ~27 days | OPEN | ARM32 compilation issue; no response from maintainers |
| #1852 | should make it easy to use | ~13 days | OPEN | User experience gap; 4 comments but no assignee |
| #1608 | feat: role-based access control (RBAC) with per-workspace permission matrix | ~21 days | OPEN | P2 priority, high risk; foundational for multi-tenancy |
| #1610 | feat: SSO/OIDC user authentication — Google, Okta, and generic OIDC provider support | ~21 days | OPEN | P1 priority, enterprise blocker |
| #1680 | Railway one-click template: LLM_* env vars not visible at runtime | ~19 days | OPEN | Deployment platform issue affecting users |
| #1846 | Data loss with upgrading from hosted UI | ~13 days | OPEN | Critical data integrity issue; no maintainer acknowledgment |
| #2086 | resolve an issue with shared skills | ~8 days | OPEN | 4 PRs linked; needs review/merge |
| #1378 | feat: per-channel MCP and built-in tool filtering | ~27 days | OPEN | Contributor: experienced; long-open feature |

**Maintainer attention recommended for:** onboarding persistence (#846), ARM32 support question (#1339), UI upgrade data loss (#1846), and RBAC/SSO foundational work (#1608, #1610) which are P1-P2 priority items stalling without visible progress.

---

*Digest generated for 2026-04-14 based on GitHub data from [nearai/ironclaw](https://github.com/nearai/ironclaw).*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest

**Date:** 2026-04-14  
**Project:** netease-youdao/LobsterAI  
**Repository:** https://github.com/netease-youdao/LobsterAI

---

## 1. Today's Overview

LobsterAI continues its high-velocity development cycle with significant activity on April 14, 2026. The project processed 20 PRs (7 open, 13 merged/closed) and addressed 2 active issues, demonstrating sustained engineering momentum. A new release (2026.4.13) shipped multiple stability fixes, particularly around OpenClaw integration, session management, and security hardening (CVSS 9.2 patch backport). The community is actively engaging with feature requests, including MCP engine compatibility and workspace policy management. Overall project health appears strong with multiple cross-functional improvements spanning renderer, main process, openclaw, and cowork components.

---

## 2. Releases

### ✅ Version 2026.4.13 (Released 2026-04-13)

**Release PR:** #1659 — https://github.com/netease-youdao/LobsterAI/pull/1659

**Key Changes:**
| Category | Description |
|----------|-------------|
| **OpenClaw Security** | Backported session keepalive policy fix |
| **Build** | NSIS overlay install speedup via async old directory removal (#1633) |
| **Scheduled Tasks** | Reset dirty state after saving task (#1645) |
| **Feishu Integration** | Group Policy default value modification |
| **Testing** | Preserve explicit reminder timezone |
| **Provider Registry** | Consolidated provider metadata into shared registry |
| **MCP Bridge** | Resolved 401 auth mismatch on startup (#1647) |
| **Workspace** | Fixed non-main agent persona files not loading due to workspace path mismatch (restored in #1657) |

**Migration Notes:** No breaking changes. Users may notice improved Feishu group policy behavior and fixed session persistence for non-main agents.

---

## 3. Project Progress

### Merged/Closed PRs (13 total)

| PR | Author | Summary | Area |
|----|--------|---------|------|
| #1659 | liuzhq1986 | Release/2026.04.13 | All |
| #1658 | btc69m979y-dotcom | Allow silent scope-upgrade for loopback cron connections (CVSS 9.2 fix backport) | openclaw |
| #1657 | btc69m979y-dotcom | Restore fix: non-main agent persona files workspace path mismatch | main, openclaw |
| #1655 | liuzhq1986 | Revert #1651 (accidental revert) | main, openclaw |
| #1654 | btc69m979y-dotcom | Surface lifecycle phase=error when chat error event is missing | main |
| #1652 | btc69m979y-dotcom | Add AbortDiag logging for premature timeout investigation | main |
| #1651 | btc69m979y-dotcom | Fix non-main agent persona files workspace path mismatch | main, openclaw |
| #1650 | btc69m979y-dotcom | Prevent OpenClaw gateway restart on config hot-reload | main, openclaw |
| #1649 | liuzhq1986 | Fix skill creation path prompt (later reverted in #1656) | main, openclaw |
| #1648 | liugang519 | Fix multi-bot support; Feishu group chat default to open | renderer, main, im |
| #1646 | nmgwddj | Unify provider config and fix MiniMax openclaw sync | providers |
| #1647 | btc69m979y-dotcom | Resolve MCP Bridge 401 auth mismatch on startup | All |
| #1638 | wulei05 | Backport session keepalive policy | renderer, main, openclaw, cowork, im |

### Open PRs (7 total)

| PR | Author | Summary | Area |
|----|--------|---------|------|
| #1661 | flowell | **Log sanitization**: Remove API keys/tokens from exported logs | main, cowork |
| #1660 | gongzhi-netease | Dynamic agent name/description on non-main agent welcome screen | renderer, cowork |
| #1277 | dependabot[bot] | Bump electron group (40.2.1 → 41.1.1) | build |
| #1278 | dependabot[bot] | Bump @anthropic-ai/claude-agent-sdk (0.2.12 → 0.2.90) | providers |
| #1656 | liuzhq1986 | Revert #1649 | main, openclaw |
| #1498 | swuzjb | Fix all 165 ESLint errors | renderer, main, openclaw, cowork, im |
| #924 | swuzjb | Paginated session list and message history loading | renderer, main, cowork |

---

## 4. Community Hot Topics

### Most Active Issues

**Issue #1653** — https://github.com/netease-youdao/LobsterAI/issues/1653  
**Title:** groupPolicy为啥每过一会就被覆盖为allowlist  
**Author:** zjm79 | **Comments:** 1 | **Reactions:** 0

> *"每次过一会就会被覆盖"* — User reports that groupPolicy keeps getting overwritten to allowlist. This suggests an underlying sync/reset mechanism issue affecting Feishu integration behavior.

---

**Issue #1662** — https://github.com/netease-youdao/LobsterAI/issues/1662  
**Title:** 除sse之外的mcp无法使用  
**Author:** qxjysd | **Comments:** 0 | **Reactions:** 0

> *"除sse之外的mcp引擎无法找到并使用"* — User reports MCP engines other than SSE protocol cannot be found or used. This indicates a protocol compatibility gap in MCP bridge discovery.

### Underlying Community Needs Analysis

| Need | Indicator | Impact |
|------|-----------|--------|
| **Workspace/Agent Policy Stability** | #1653 | Affects Feishu group policy configuration reliability |
| **MCP Protocol Parity** | #1662 | Limits multi-transport MCP adoption |
| **Log Security** | #1661 (PR) | User concern about sensitive data exposure |
| **Personalized Agent Experience** | #1660 (PR) | User desire for context-aware agent interfaces |

---

## 5. Bugs & Stability

### Reported Bugs

| Severity | Issue/PR | Description | Status |
|----------|----------|-------------|--------|
| **Medium** | #1653 | GroupPolicy auto-reset to allowlist | Open |
| **Medium** | #1662 | Non-SSE MCP engines not discoverable | Open |
| **Medium** | #1654 | Chat error events missing phase=error causing stuck sessions | Fixed (#1654) |

### Stability Improvements Merged Today

| PR | Fix | Risk |
|----|-----|------|
| #1658 | CVSS 9.2 backport: Allow silent scope-upgrade for loopback cron | Security |
| #1647 | MCP Bridge 401 auth mismatch on startup | Race condition |
| #1650 | Prevent OpenClaw gateway restart on hot-reload | Stability |
| #1652 | Diagnostic logging for premature timeout investigation | Observability |

**Regression Watch:** Multiple reverts occurred (#1655, #1656), indicating careful rollback handling. The #1657 restore suggests ongoing refinement of agent workspace handling.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features

| Request | Source | Signals |
|---------|--------|---------|
| **MCP Multi-Transport Support** | #1662 | User cannot use non-SSE MCP engines; indicates roadmap gap |
| **Agent Personalization** | #1660 (PR) | Community wants dynamic welcome screens per agent |
| **Log Security/Sanitization** | #1661 (PR) | User concern about API key exposure in exported logs |
| **Paginated Session Loading** | #924 (PR) | Large conversation volume users need performance optimization |

### Roadmap Signal Analysis

Based on PR patterns, likely near-term priorities:

1. **MCP Bridge Enhancement** — Multiple PRs (#1647, #1662) point to ongoing MCP improvements
2. **OpenClaw Integration Polish** — Session management, persona loading, gateway stability
3. **Feishu Integration** — Group policy handling (#1648, #1653)
4. **Security Hardening** — Auth mismatches, token sanitization, vulnerability backports

---

## 7. User Feedback Summary

### Pain Points Identified

| Category | Evidence | Severity |
|----------|----------|----------|
| **Policy Instability** | GroupPolicy overwrites | High (affects enterprise Feishu users) |
| **MCP Compatibility** | Non-SSE engines unavailable | Medium |
| **Session Timeout** | Premature timeout reports | Medium (ongoing investigation #1652) |
| **Agent Persona Loading** | Non-main agent files not found | Medium |

### Satisfactory Areas

- Active security patching (CVSS 9.2 backport within 24h)
- Fast release cadence with comprehensive changelogs
- Responsive community engagement (issues acknowledged within hours)

---

## 8. Backlog Watch

### Long-Pending Items Requiring Maintainer Attention

| Item | PR/Issue | Age | Priority | Notes |
|------|----------|-----|----------|-------|
| **Electron Upgrade** | #1277 | 12 days | Medium | Dependabot pending; security/feature implications |
| **Claude SDK Upgrade** | #1278 | 12 days | Medium | Significant version jump (0.2.12 → 0.2.90) |
| **ESLint Cleanup** | #1498 | 7 days | Medium | Blocking CI cleanliness |
| **Session Pagination** | #924 | 19 days | High | User performance need |

### Items at Risk of Staleness

| Item | Age | Concern |
|------|-----|---------|
| #1277 (electron) | 12 days | Unreviewed dependency upgrade |
| #1278 (claude-sdk) | 12 days | Large version bump needs validation |
| #1662 (MCP issue) | 1 day | New but 0 comments indicates potential triage needed |

---

**Digest Generated:** 2026-04-14  
**Data Source:** GitHub Activity (last 24h)  
**Next Update:** 2026-04-15

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-14

## 1. Today's Overview

Moltis experienced a highly productive 24 hours with **18 PRs merged** and **5 issues closed**. The project shows strong development velocity with significant progress across UI enhancements, bug fixes, and architectural refactoring. Two new releases (20260413.06, 20260413.03) shipped with user-facing improvements including cached token display, session archiving, and local Whisper/TTS configuration. The open PR rate remains minimal (1 pending), indicating effective review throughput. Overall project health appears robust with all reported bugs from yesterday addressed within the same cycle.

---

## 2. Releases

Two releases published on 2026-04-13:

| Version | Description |
|---------|-------------|
| **20260413.06** | Latest patch release with cached input token preservation, UI display, and regression coverage |
| **20260413.03** | Earlier release in the same cycle; likely minor preceding fixes |

**Key changes in recent releases:**
- Cached input token counts now preserved through chat broadcasts and persisted messages
- Session archiving controls added to web UI
- Local Whisper and OpenAI TTS base URL configuration shipped
- MCP tool schema sanitization for OpenAI-compatible providers
- Tool argument serialization fixes (handles falsy/null values correctly)

No breaking changes or migration notes reported in release notes.

---

## 3. Project Progress

### Merged/Closed PRs (18 total)

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#703](https://github.com/moltis-org/moltis/pull/703) | Merge node exec types into owning crates | codex | Architectural consolidation |
| [#702](https://github.com/moltis-org/moltis/pull/702) | Add archived session controls to web UI | codex | **New feature** — session management UI |
| [#699](https://github.com/moltis-org/moltis/pull/699) | Show cached input tokens in chat UI | codex | **New feature** — token usage transparency |
| [#700](https://github.com/moltis-org/moltis/pull/700) | Add web UI for local Whisper setup | codex | **New feature** — local STT configuration |
| [#698](https://github.com/moltis-org/moltis/pull/698) | Sanitize OpenAI-compatible MCP tool schemas | codex | Bug fix (#694) |
| [#697](https://github.com/moltis-org/moltis/pull/697) | Fix tool arg serialization regression | codex | Bug fix (#693) |
| [#695](https://github.com/moltis-org/moltis/pull/695) | Split oversized Rust modules | codex | Code quality / maintainability |
| [#696](https://github.com/moltis-org/moltis/pull/696) | Fix tool-call compatibility regressions | codex | Stability fix for WASM/cron tools |
| [#48](https://github.com/moltis-org/moltis/pull/48) | Add XMPP channel support | feat | **Major feature** — multi-channel architecture |
| [#199](https://github.com/moltis-org/moltis/pull/199) | Add Voicebox TTS provider | feat | Local voice cloning support |
| [#499](https://github.com/moltis-org/moltis/pull/499) | Add base_url config for OpenAI TTS/STT | feat | Flexible provider endpoints |
| [#690](https://github.com/moltis-org/moltis/pull/690) | Extract MCP service logic to dedicated crates | refactor | Gateway decoupling |
| [#691](https://github.com/moltis-org/moltis/pull/691) | Group lock-free broadcast state into Broadcaster struct | refactor | Clean concurrency patterns |
| [#688](https://github.com/moltis-org/moltis/pull/688) | Define NodeInfoProvider trait | refactor | Abstraction layer for nodes |
| [#685](https://github.com/moltis-org/moltis/pull/685) | Move SSH/env helpers to node-exec-types | refactor | Pure utility extraction |
| [#683](https://github.com/moltis-org/moltis/pull/683) | Extract core types/constants to dedicated crate | refactor | Atomic refactoring series |
| [#659](https://github.com/moltis-org/moltis/pull/659) | Support Browserless v2 websocket paths | fix | Sandbox mode compatibility |
| [#689](https://github.com/moltis-org/moltis/pull/689) | Persist inbound documents as structured session files | codex | Telegram document handling |

**Notable advancements:**
- **Multi-channel architecture milestone**: XMPP integration (#48) completed after ~2 months, achieving feature parity with Telegram channel
- **Voice capabilities expanded**: Voicebox TTS provider and base URL configuration for local STT/TTS servers
- **Refactoring momentum**: Continued gateway decoupling with 5+ refactor PRs in one cycle

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Title | Type | Comments | Reactions | Trend |
|-------|-------|------|----------|-----------|-------|
| [#692](https://github.com/moltis-org/moltis/issues/692) | Show cached input tokens in chat | enhancement | 1 | 0 | ✅ Implemented in #699 |
| [#694](https://github.com/moltis-org/moltis/issues/694) | MCP tool schemas with "not" keyword rejected | bug | 1 | 0 | ✅ Fixed in #698 |
| [#693](https://github.com/moltis-org/moltis/issues/693) | Serialization with tools in 20260413 | bug | 1 | 0 | ✅ Fixed in #697 |
| [#701](https://github.com/moltis-org/moltis/issues/701) | Add ability to archive sessions | enhancement | 0 | 1 | ✅ Implemented in #702 |
| [#570](https://github.com/moltis-org/moltis/issues/570) | Add setup flow for local Whisper | enhancement | 0 | 0 | ✅ Implemented in #700 |

**Analysis of underlying needs:**
1. **Token usage transparency**: Users want visibility into cached token counts for cost monitoring and debugging
2. **Provider flexibility**: Strong interest in using local Whisper servers and OpenAI-compatible endpoints without API key requirements
3. **Session management**: Multi-user environments need archiving capability for conversation lifecycle management
4. **MCP compatibility**: OpenAI-compatible providers using newer JSON Schema drafts (2020-12) causing integration friction

---

## 5. Bugs & Stability

### Reported Bugs (all addressed)

| Issue | Severity | Description | Status |
|-------|----------|-------------|--------|
| [#694](https://github.com/moltis-org/moltis/issues/694) | **High** | MCP tool schemas with `not` keyword rejected by OpenAI provider — breaks Attio MCP | Fixed by [#698](https://github.com/moltis-org/moltis/pull/698) |
| [#693](https://github.com/moltis-org/moltis/issues/693) | **High** | Serialization regression with tools (falsy/null values mishandled) | Fixed by [#697](https://github.com/moltis-org/moltis/pull/697) |
| [#696](https://github.com/moltis-org/moltis/issues/696) | **Medium** | Tool-call compatibility regressions breaking cron reminders, legacy WASM tools | Fixed in same PR |

**Root cause patterns:**
- 2/3 bugs related to OpenAI-compatible tool serialization edge cases (null, false, 0 values)
- 1/3 bug related to JSON Schema draft compatibility with MCP providers

**Regression concern**: The 20260413 release introduced serialization bugs (#693, #696), suggesting rapid iteration may need additional regression testing before releases.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features

| Issue | Request | Signals |
|-------|---------|---------|
| [#701](https://github.com/moltis-org/moltis/issues/701) | Session/conversation archiving | ✅ Shipped in #702 — indicates prioritization |
| [#570](https://github.com/moltis-org/moltis/issues/570) | Local Whisper setup flow | ✅ Shipped in #700 — local-first AI trend |
| [#692](https://github.com/moltis-org/moltis/issues/692) | Cached token display | ✅ Shipped in #699 — cost monitoring demand |

**Roadmap predictions for next version:**
- **High probability**: Additional channel integrations (XMPP is now complete, Discord/Slack signals?)
- **Medium probability**: Enhanced multi-model routing or provider fallback logic
- **Medium probability**: Document upload improvements beyond Telegram

---

## 7. User Feedback Summary

### Pain Points Identified
- **Serialization fragility**: Users on 20260413 experienced tool argument parsing failures with falsy values
- **MCP provider lock-in**: Incompatibility with Attio and other MCP providers using newer JSON Schema constructs
- **Token cost opacity**: No visibility into cached input token usage

### Satisfaction Signals
- **Feature velocity appreciated**: Quick turnaround from issue report (Apr 13) to fix (Apr 13-14)
- **Local AI interest**: Strong uptake signals for local Whisper and Voicebox TTS configurations
- **Multi-channel adoption**: XMPP completion enables non-Telegram users to adopt Moltis

### Use Cases Emerging
- Enterprise deployments requiring session retention/archiving
- Privacy-sensitive users wanting local STT/TTS processing
- MCP tool ecosystem expansion (Attio, custom providers)

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Priority | Description |
|-------|-----|----------|-------------|
| [#570](https://github.com/moltis-org/moltis/issues/570) | 8 days | Enhancement | Local Whisper setup — **recently closed** ✅ |
| — | — | — | No critical aged issues remaining |

**Positive finding**: All 5 tracked issues were closed within 24-48 hours of creation. No long-unanswered issues detected in today's data.

### Pending Open Items
- [#704](https://github.com/moltis-org/moltis/pull/704) — Dependabot PR for `rand` 0.9.2→0.10.0 (1 directory, Rust group) — **awaiting review/merge**

---

## Quick Stats

| Metric | Value |
|--------|-------|
| PRs Merged | 18 |
| Issues Closed | 5 |
| Open PRs | 1 |
| New Releases | 2 |
| Bug Fix Rate | 100% (3/3 bugs addressed) |
| Feature Completion | 3/3 tracked features shipped |

---

*Generated: 2026-04-14 | Data window: last 24 hours | Source: github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-14

## 1. Today's Overview

CoPaw (now transitioning to **QwenPaw**) shows **very high activity** on 2026-04-14, with 41 issues and 50 PRs updated in the last 24 hours. The project is actively navigating a major rebranding/migration from CoPaw to QwenPaw, evidenced by multiple user questions about migration paths, coexistence of both products, and configuration paths. Community engagement is robust with 5+ PRs under review, several new feature PRs targeting core workflows (skills, memory, file rollback), and ongoing security fixes. The release of **v1.1.1-beta.1** and subsequent **v1.1.1-beta.2** (merged same day) indicates rapid iteration. Overall health is good, though migration complexity and a few bugs in channel integrations (Feishu WebSocket, QQ/WeChat blocking) warrant attention.

---

## 2. Releases

### ✅ v1.1.1-beta.1 (and v1.1.1-beta.2 merged same day)

**Changes in beta.1:**
- 📰 `docs(news)`: News page updated by @xieyxclack ([#3287](https://github.com/agentscope-ai/QwenPaw/pull/3287))
- 🎨 `chore`: IP logo updated by @rayrayraykk ([#3289](https://github.com/agentscope-ai/QwenPaw/pull/3289))
- 🔢 `chore(version)`: Version bumped to 1.1.1b1 by @xieyxclack ([PR #3343](https://github.com/agentscope-ai/QwenPaw/pull/3343))

> **Migration Note**: Multiple issues ([#3288](https://github.com/agentscope-ai/QwenPaw/issues/3288), [#3309](https://github.com/agentscope-ai/QwenPaw/issues/3309), [#3351](https://github.com/agentscope-ai/QwenPaw/issues/3351)) report confusion about CoPaw → QwenPaw migration. Users report `.qwenpaw` directory containing only `bin/venv`, while legacy `.copaw` data persists. **No official migration guide exists yet**, which is a significant gap.

---

## 3. Project Progress

### Merged / Closed PRs (19 total; notable)

| PR | Author | Summary | Link |
|---|---|---|---|
| #2428 | @bowenliang123 | **OpenCode provider integration** — adds OpenAI-compatible server support with reasoning tokens | [#2428](https://github.com/agentscope-ai/QwenPaw/pull/2428) |
| #3341 | @pan-x-c | **Model Discovery enabled for all Providers** — fixes #3045, #3139, #3291 | [#3341](https://github.com/agentscope-ai/QwenPaw/pull/3341) |
| #3337 | @hongxicheng | **DingTalk AI Card media delivery** — prevents base64 overflow in DingTalk messages | [#3337](https://github.com/agentscope-ai/QwenPaw/pull/3337) |
| #3331 | (bug fix merged) | **Feishu WebSocket crash fix** — RuntimeError in multi-agent environment | [#3331](https://github.com/agentscope-ai/QwenPaw/issues/3331) |
| #3342 | (bug fix merged) | **Local model management stale state fix** — Ollama deleted models still showing | [#3342](https://github.com/agentscope-ai/QwenPaw/issues/3342) |
| #2852 | (closed) | **Feishu quoted file analysis** — resolved for private chats, group chat still affected | [#2852](https://github.com/agentscope-ai/QwenPaw/issues/2852) |

### Open PRs Under Review (31 total; key advances)

- **#2773** — Self-evolution skill (self-improving AI agent engine with error capture & root cause analysis) — Active review
- **#3305** — Fix background task cancellation on workspace reload — Under review
- **#3107** — Fix silent tool-call stop for qwen3-coder-plus models — Under review
- **#2904** — **Plan mode** — Opt-in structured multi-step plan generation via `/plan` command — Under review
- **#3346** — **File operation rollback** — Recover accidentally deleted/overwritten files — Links to issue #2590
- **#3340** — **ACP-based external agent delegation** with real-time tool output — Based on PRs #2507 and #1544

---

## 4. Community Hot Topics

### 🔥 Most Active Issues (by comment count)

1. **#2291** — *"Help Wanted: Open Tasks"* — **55 comments** | P0-P2 task list; community contribution hub
   - 🔗 https://github.com/agentscope-ai/QwenPaw/issues/2291

2. **#3288** — *"CoPaw怎么平滑升级到QwenPaw"* — **32 comments** | User confusion about CoPaw→QwenPaw migration; data/config preservation
   - 🔗 https://github.com/agentscope-ai/QwenPaw/issues/3288

3. **#3309** — *"更新到1.1.0后对qwenpaw和copaw的疑问"* — **5 comments** | PATH issues, dual installation confusion, directory separation
   - 🔗 https://github.com/agentscope-ai/QwenPaw/issues/3309

4. **#3351** — *"Is there any migration script/command/suggestion from copaw to qwenpaw"* — **3 comments** (same-day) | English-language migration request
   - 🔗 https://github.com/agentscope-ai/QwenPaw/issues/3351

**Underlying Need**: The CoPaw→QwenPaw rebranding has created significant user friction. The community urgently needs official migration documentation, tooling, and clear communication about the relationship between the two products.

---

## 5. Bugs & Stability

### Reported Bugs (ranked by severity/impact)

| Severity | Issue | Description | Link | Fix Status |
|---|---|---|---|---|
| 🔴 High | #2377 | **Agent auto-interrupts** during long batch file processing (1500 files); breaks resume functionality | [#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377) | Open |
| 🔴 High | #3136 | **QQ/WeChat stop() blocks event loop 8-10 seconds** on agent toggle/disable | [#3136](https://github.com/agentscope-ai/QwenPaw/issues/3136) | Open |
| 🟠 Medium | #3317 | **Memory subdirectories not indexed** — agent-created `memory/experiences/` files not retrievable | [#3317](https://github.com/agentscope-ai/QwenPaw/issues/3317) | PR #3347 open |
| 🟠 Medium | #2897 | **vLLM deployment: think content not displayed** in UI | [#2897](https://github.com/agentscope-ai/QwenPaw/issues/2897) | Open |
| 🟠 Medium | #1403 | **Feishu duplicate message processing** — no deduplication mechanism | [#1403](https://github.com/agentscope-ai/QwenPaw/issues/1403) | Open |
| 🟠 Medium | #3344 | **WeChat channel decrypt failure** — cron task notifications broken | [#3344](https://github.com/agentscope-ai/QwenPaw/issues/3344) | Open |
| 🟡 Low | #3265 | **Dark mode pin-button low contrast** | [#3265](https://github.com/agentscope-ai/QwenPaw/issues/3265) | Open |
| 🟡 Low | #3339 | **Ollama LAN connection fails** | [#3339](https://github.com/agentscope-ai/QwenPaw/issues/3339) | Open |

> ✅ **Fixed today**: #3331 (Feishu WebSocket crash), #3342 (stale Ollama model state)

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features with Strong Signals

| Request | Issue | Comments | Link | Likelihood of Near-Term Inclusion |
|---|---|---|---|---|
| **File rollback/unrecoverable delete** | #2590 / PR #3346 | 6 | [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) | 🔵 High — PR under review |
| **Skill pool sync UI improvement** | #3327 | 2 | [#3327](https://github.com/agentscope-ai/QwenPaw/issues/3327) | 🔵 High — clear UI scope |
| **Concurrent conversations while run in progress** | #2416 | 3 | [#2416](https://github.com/agentscope-ai/QwenPaw/issues/2416) | 🟡 Medium |
| **Plan mode (structured step-by-step)** | PR #2904 | — | [#2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) | 🔵 High — PR under review |
| **Multi-user isolation for cloud/team use** | #3306 | 2 | [#3306](https://github.com/agentscope-ai/QwenPaw/issues/3306) | 🟡 Medium |
| **Self-evolution skill** | PR #2773 | — | [#2773](https://github.com/agentscope-ai/QwenPaw/pull/2773) | 🔵 High — active review |
| **User asset backup & migration module** | #2457 | — | [#2457](https://github.com/agentscope-ai/QwenPaw/pull/2457) | 🔵 High — directly addresses migration gap |
| **ACP external agent delegation** | #3340 | — | [#3340](https://github.com/agentscope-ai/QwenPaw/pull/3340) | 🔵 High — sophisticated integration |

**Roadmap Prediction**: The next release likely focuses on **v1.1.1 stable** with file rollback, model discovery fixes, skill UI improvements, and DingTalk media support. The backup/migration module (#2457) is strategically important given rebranding friction.

---

## 7. User Feedback Summary

### Pain Points

| Pain Point | Frequency | Issue |
|---|---|---|
| **Rebranding confusion** | High — 3+ issues, 40+ comments | #3288, #3309, #3351, #3336 |
| **Agent auto-interrupts on long tasks** | High — blocking real-world workflows | #2377 |
| **Feishu channel instability** | Medium — WebSocket crash, duplicate messages, quoted files | #3331, #1403, #2852 |
| **Memory indexing failures in subdirectories** | Medium — breaks organized memory workflows | #3317 |
| **Page lag in extended conversations (200+ turns)** | Low-Medium — performance regression | #3350 |
| **Startup delay (3-5 seconds)** | Low | #3352 |

### Positive Feedback

- User in #3336 expresses satisfaction: *"一直在用，现在越用越顺"* (Using it smoothly, getting better)
- Backup system (#2457) and self-evolution skill (#2773) generate strong community interest
- Model discovery fix (#3341) resolves long-standing provider issues

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Status | Priority | Link |
|---|---|---|---|---|
| #1403 — Feishu duplicate message deduplication | ~1 month | Open | Medium | [#1403](https://github.com/agentscope-ai/QwenPaw/issues/1403) |
| #2377 — Agent auto-interrupt on long batch tasks | ~18 days | Open | **High** | [#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377) |
| #2852 — Feishu group chat quoted file analysis | ~12 days | Closed (partial) | Medium | [#2852](https://github.com/agentscope-ai/QwenPaw/issues/2852) |
| #3075 — Browser automation triggers CAPTCHAs | ~6 days | Open | Medium | [#3075](https://github.com/agentscope-ai/QwenPaw/issues/3075) |
| #2416 — Concurrent conversations blocking | ~18 days | Open | Medium | [#2416](https://github.com/agentscope-ai/QwenPaw/issues/2416) |
| #3306 — Multi-user isolation | 1 day | Open | Medium | [#3306](https://github.com/agentscope-ai/QwenPaw/issues/3306) |

### Stalled PRs Needing Review

| PR | Age | Status | Link |
|---|---|---|---|
| #1088 — Venice AI provider | ~35 days | Open, first-time contributor | [#1088](https://github.com/agentscope-ai/QwenPaw/pull/1088) |
| #2177 — Default memory summarization cron | ~21 days | Open, first-time contributor | [#2177](https://github.com/agentscope-ai/QwenPaw/pull/2177) |
| #2457 — User asset backup & migration | ~17 days | Open | [#2457](https://github.com/agentscope-ai/QwenPaw/pull/2457) |

> **⚠️ Critical Backlog Item**: The **lack of migration documentation** (#3288, #3309, #3351) from CoPaw to QwenPaw is creating community frustration. Combined with PR #2457 (backup & migration module), this should be a top priority to reduce user churn during the rebranding.

---

*Digest generated from GitHub data for agentscope-ai/CoPaw (agentscope-ai/QwenPaw). Data window: 2026-04-14 ±24h.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-14

---

## 1. Today's Overview

ZeroClaw shows **high development velocity** on 2026-04-14, with 50 PRs updated and 20 issues receiving activity in the last 24 hours. The project closed 3 issues and 21 PRs (including one major feature PR), indicating strong merge throughput. Notably, **security is a dominant theme today**: a ClawGuard scan flagged 66 critical security findings, and two S0-severity bugs were reported—one involving command policy bypass and another affecting file creation. Performance improvements dominate the PR queue with dependency tiering and unused crate removal. The Matrix channel friction tracker (#4657) continues generating discussion with 11 comments, while a WASM plugin system PR (#5231) signals architectural evolution.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs Today (21 total)

| PR | Title | Status |
|----|-------|--------|
| [#2420](https://github.com/zeroclaw-labs/zeroclaw/pull/2420) | feat(agent): smarter team/subagent orchestration with hot runtime config | **CLOSED** |
| [#5706](https://github.com/zeroclaw-labs/zeroclaw/pull/5706) | chore(owners): remove SimianAstronaut7 from CODEOWNERS and docs | **CLOSED** |

**#2420** (chumyin) is the standout merge—a major architectural enhancement that introduces explicit separation between agent teams and subagents with runtime-configurable orchestration, closing #2419. This deepens delegation intelligence without hardcoded routing.

### Open PRs Advancing (29 total)

Key advances today include:

- **Security hardening**: [#5702](https://github.com/zeroclaw-labs/zeroclaw/pull/5702) blocks dangerous interpreter arguments (`-c`, `-e`, `-install`) in the command policy for python3, node, pip, npm, and cargo.
- **Performance optimizations**:
  - [#5711](https://github.com/zeroclaw-labs/zeroclaw/pull/5711): Tiers channels into core (default) and extended (opt-in), removing heavy dependencies (email, telegram image codecs, lark protobuf) from default builds.
  - [#5708](https://github.com/zeroclaw-labs/zeroclaw/pull/5708): Upgrades `rumqttc` 0.24 → 0.25.1, eliminating duplicate TLS stack.
  - [#5707](https://github.com/zeroclaw-labs/zeroclaw/pull/5707): Removes 21 unused dependencies from root and runtime crates.
- **Channel expansions**:
  - [#5712](https://github.com/zeroclaw-labs/zeroclaw/pull/5712): Adds IMAP polling fallback for email servers lacking IDLE support (fixes GMX, seznam.cz, older Dovecot/Exchange).
  - [#5602](https://github.com/zeroclaw-labs/zeroclaw/pull/5602): Replaces REST polling with WebSocket for Mattermost, adding DM and multi-channel support.
  - [#5166](https://github.com/zeroclaw-labs/zeroclaw/pull/5166): Matrix mention-only filtering, MIME-aware media handling, and onboarding preservation.
- **Infrastructure**:
  - [#5696](https://github.com/zeroclaw-labs/zeroclaw/pull/5696): Adds `SessionResetTool` and `SessionDeleteTool` for programmatic session cleanup.
  - [#5705](https://github.com/zeroclaw-labs/zeroclaw/pull/5705): Introduces session abort endpoint and incremental streaming persistence.
  - [#5632](https://github.com/zeroclaw-labs/zeroclaw/pull/5632): Fixes memory autosave key re-injection causing exponential context bloat.
- **Schema & Config**: [#5517](https://github.com/zeroclaw-labs/zeroclaw/pull/5517) introduces forward-only V1→V2 config migration.
- **Architectural**: [#5231](https://github.com/zeroclaw-labs/zeroclaw/pull/5231) proposes a WASM plugin system with security sandbox for custom tools.
- **Dependency updates**: [#5713](https://github.com/zeroclaw-labs/zeroclaw/pull/5713): `rand` bumped 0.10.0 → 0.10.1.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657)** — Matrix channel friction tracker
   - **Activity**: 11 comments, 2 👍
   - **Summary**: Umbrella issue tracking Matrix channel pain points post-v0.6.2; preferred PRs marked, some competing PRs unresponsive.
   - **Underlying need**: Resolved Matrix E2EE OTK retry loop, end-to-end encrypted room breakage is fixed; remaining friction items tracked inline.

2. **[#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125)** — [Bug] CPU spikes when typing into agent chat
   - **Activity**: 4 comments, 0 👍 | **Severity: S0**
   - **Summary**: Firefox on Ubuntu exhibits multi-core CPU spikes when typing in agent chat; only occurs in that tab.
   - **Underlying need**: Resource efficiency during active typing—likely a rendering or WebSocket event loop issue.

3. **[#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584)** — Duplicate consecutive assistant messages
   - **Status**: CLOSED | **Severity: S2**
   - **Summary**: Native tool dispatcher produces duplicate messages when model returns narration text alongside tool calls.
   - **Resolution status**: Fixed (closed 2026-04-13).

4. **[#5268](https://github.com/zeroclaw-labs/zeroclaw/issues/5268)** — Context compressor drops `tool_call_id`
   - **Status**: CLOSED | **Severity: S2**
   - **Summary**: Fast-trim step removes `tool_call_id` from tool result messages, causing DeepSeek 400 errors.
   - **Resolution status**: Fixed (closed 2026-04-13).

5. **[#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696)** — [Feature] Pre/post message hooks for shell commands
   - **Activity**: 2 comments | **Severity: Enhancement**
   - **Summary**: Request for configurable shell hooks (before/after each message) for memory integration, logging, context injection.
   - **Underlying need**: Extensibility without modifying agent prompts; advanced users want automation hooks.

### Most Active PRs (by discussion/priority)

| PR | Title | Focus |
|----|-------|-------|
| [#5231](https://github.com/zeroclaw-labs/zeroclaw/pull/5231) | feat(plugins): add WASM plugin system with security sandbox | Extensibility |
| [#5702](https://github.com/zeroclaw-labs/zeroclaw/pull/5702) | fix(security): block dangerous interpreter arguments | Security |
| [#5517](https://github.com/zeroclaw-labs/zeroclaw/pull/5517) | feat(config): forward-only schema versioning | Config DX |
| [#5661](https://github.com/zeroclaw-labs/zeroclaw/pull/5661) | feat(cron): wire CLI delivery flags, clean envelope | CLI/Cron |

---

## 5. Bugs & Stability

### S0 — Data Loss / Security Risk (Immediate Attention Required)

| Issue | Title | Link | Status |
|-------|-------|------|--------|
| #5698 | Allowlisted interpreters bypass command policy via `-c`/`-e`/`-install` | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5698) | **Open** |
| #5692 | Unable to create file in working directory due to incorrect permission claim | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5692) | **Open** |
| #5125 | CPU spikes when typing into agent chat (Firefox/Ubuntu) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) | **Open** |
| #5709 | Security findings from ClawGuard scan (66 critical, 188 total) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5709) | **Open** |

**#5698** is particularly concerning: `is_args_safe()` in the policy engine only checks `find` and `git` for dangerous arguments. Six allowlisted interpreters (python3, node, pip, npm, cargo) accept arbitrary code execution flags, effectively bypassing the sandbox. A fix PR [#5702](https://github.com/zeroclaw-labs/zeroclaw/pull/5702) exists.

**#5709** reveals 188 security patterns flagged by ClawGuard, including 66 critical findings—likely the source of #5698 and related concerns. Maintainers should prioritize triage.

### S1 — Workflow Blocked

| Issue | Title | Link | Fix PR? |
|-------|-------|------|---------|
| #5553 | Shell tool executes but Telegram channel returns raw `tool_calls` JSON | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5553) | None |
| #5697 | Skills blocked even when `skills.allow_scripts = true` | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5697) | None |
| #5685 | CLI channel factory not registered at startup | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5685) | None |

### S2 — Degraded Behavior

| Issue | Title | Link | Fix PR? |
|-------|-------|------|---------|
| #5628 | Daemon service auto-starts on boot, causes port conflict | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) | None |
| #5584 | Duplicate assistant messages with narration + tool calls | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | **CLOSED** |
| #5268 | Context compressor drops `tool_call_id`, DeepSeek 400 errors | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/5268) | **CLOSED** |

### Closed Today (Resolved)
- **#5575**: Extremely slow project compilation (Rust incremental builds) — 2 comments
- **#5584** & **#5268**: Tool call messaging bugs fixed

---

## 6. Feature Requests & Roadmap Signals

### High-Interest Features

| Issue/PR | Title | Interest Signals | Likelihood of Near-Term Merge |
|----------|-------|------------------|-------------------------------|
| [#5231](https://github.com/zeroclaw-labs/zeroclaw/pull/5231) | WASM plugin system with security sandbox | Active development | **High** — Open PR, architectural |
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | Subscription-native OAuth for Ollama Cloud, z.ai, Kimi, MiniMax | 1 👍 | **Medium** — Well-scoped |
| [#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696) | Pre/post message hooks for shell commands | 2 comments | **Medium** — Long-standing (opened 2026-03-16) |
| [#5686](https://github.com/zeroclaw-labs/zeroclaw/issues/5686) | QQ messaging channel support | 0 👍 | **Low** (untranslated/underspecified) |
| [#5653](https://github.com/zeroclaw-labs/zeroclaw/issues/5653) | RFC: Zero Compromise — Code Health & Production Readiness | 1 comment | **Process** — RFC stage |

### Roadmap Signals from PR Themes

Today's active PRs suggest the **v0.7.0** roadmap emphasizes:
1. **Security hardening**: Policy engine fixes, dependency cleanup, sandbox improvements
2. **Performance**: Build time reduction, channel tiering, TLS stack deduplication
3. **Extensibility**: WASM plugin system, session management tools, cron enhancements
4. **Multi-channel parity**: WebSocket support for Mattermost, IMAP fallback for email, Matrix improvements

The config schema V1→V2 migration ([#5517](https://github.com/zeroclaw-labs/zeroclaw/pull/5517)) and RFC #5653 ("Zero Compromise in Practice") indicate a **quality and maturity push** ahead of the next minor release.

---

## 7. User Feedback Summary

### Pain Points Reported

| Pain Point | Frequency | Severity | Example Issues

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/manelsen/agents-radar).*