# AI Agents Ecosystem Digest 2026-04-15

> Issues: 8 | PRs: 2 | Projects covered: 7 | Generated: 2026-04-15 01:57 UTC

- [NullClaw](https://github.com/nullclaw/nullclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## Primary Project Deep Dive

# NullClaw Project Digest — 2026-04-15

## 1. Today's Overview

NullClaw shows moderate activity on 2026-04-15, with 8 issues updated in the past 24 hours (7 open, 1 closed) and 2 open pull requests. No new releases were published today. The project is addressing a mix of bug reports—particularly around environment constraints and configuration compatibility—and feature development, with two notable PRs advancing cron automation and WeChat authentication capabilities. Community engagement remains steady, with 3+ comment discussions on key issues.

---

## 2. Releases

**No new releases today.** The last release cycle (v2026.4.9) introduced an HTTPS enforcement constraint that has caused a regression for internal service communication (see Issue #800).

---

## 3. Project Progress

**Open Pull Requests:**

| PR | Title | Author | Status |
|----|-------|--------|--------|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | `feat(cron): cron subagent, run history, JSON output, security hardening` | yanggf8 | OPEN |
| [#818](https://github.com/nullclaw/nullclaw/pull/818) | `Add Weixin QR auth flow and channel support` | DDGRCF | OPEN |

- **PR #783**: Substantial feature addition introducing a DB-backed cron scheduler with run history tracking (`cron_runs` table), worker queue, multiple job types (skill/agent/shell), timezone offsets, and JSON CLI output options. Represents significant automation tooling progress.
- **PR #818**: Implements WeChat (Weixin) personal account integration via QR code login flow, adding a new authentication channel with terminal-based rendering and polling support.

**Merged/Closed PRs:** None in the last 24 hours.

---

## 4. Community Hot Topics

**Most Active Issues (by engagement):**

| Issue | Title | Author | Comments | Reactions |
|-------|-------|--------|----------|-----------|
| [#791](https://github.com/nullclaw/nullclaw/issues/791) | `[bug] Shell can not run on the physical Linux` | dadapapapa | 3 | 0 |
| [#812](https://github.com/nullclaw/nullclaw/issues/812) | `[bug] http_request` | uMendex | 3 | 1 |
| [#449](https://github.com/nullclaw/nullclaw/issues/449) | `nullclaw installation using docker hub image` | janvda | 2 | 1 |

**Analysis:**
- **Linux Shell Execution Issue (#791)**: Users report shell tools failing on physical Linux systems despite permission configurations. This suggests a potential runtime compatibility gap between containerized and native Linux environments.
- **Internet Search Capability (#812)**: A user migrating from Picoclaw/ZeroClaw reports inability to enable internet search. Indicates potential onboarding friction or documentation gaps around network configuration.
- **Docker Deployment Request (#449)**: Strong community demand for official Docker Hub images and docker-compose setup, reflecting enterprise/developer preference for containerized deployments.

---

## 5. Bugs & Stability

**Active Bug Reports (Ranked by Recency & Engagement):**

| Priority | Issue | Description | Author | Notes |
|----------|-------|-------------|--------|-------|
| 🔴 High | [#800](https://github.com/nullclaw/nullclaw/issues/800) | Otel integration broken after HTTPS constraint added in v2026.4.9 | lestan | Regression; affects podman container networking |
| 🟡 Medium | [#791](https://github.com/nullclaw/nullclaw/issues/791) | Shell cannot run on physical Linux | dadapapapa | Runtime native mode affected |
| 🟡 Medium | [#812](https://github.com/nullclaw/nullclaw/issues/812) | http_request / internet search not working | uMendex | Affects new users; 1 reaction |
| 🟢 Low | [#821](https://github.com/nullclaw/nullclaw/issues/821) | `nullclaw version` outputs "dev" instead of version | eabase | Cosmetic; usability issue |

**Status:** No fix PRs currently linked to these bugs. Issue #800 represents a regression introduced by a recent release and warrants priority attention.

---

## 6. Feature Requests & Roadmap Signals

**Active Feature Requests:**

| Request | Description | Author | Demand Signal |
|---------|-------------|--------|---------------|
| [#449](https://github.com/nullclaw/nullclaw/issues/449) | Docker Hub image + docker-compose support | janvda | 1 reaction, 2 comments |
| [#817](https://github.com/nullclaw/nullclaw/issues/817) / [#818](https://github.com/nullclaw/nullclaw/pull/818) | WeChat QR code login | DDGRCF | PR #818 in progress |

**Roadmap Signals:**
- **Containerization**: Docker/Docker Hub integration appears to be a recurring community request. If implemented, this would significantly ease deployment friction.
- **Messaging Platform Integration**: WeChat authentication support indicates interest in Chinese-market integrations; PR #818 suggests active development.
- **Cron/Automation**: PR #783's breadth (scheduler, history, security hardening) signals a move toward production-grade automation features.

**Prediction:** Docker Hub image support (#449) and WeChat login (#818) are likely candidates for near-term inclusion given active PR development.

---

## 7. User Feedback Summary

**Pain Points:**
- **Network Configuration Complexity**: Multiple users struggling with http_request and internet search enablement (#812), suggesting steep learning curve for network setup.
- **Linux Environment Compatibility**: Shell execution failures on native Linux (#791) indicate potential gaps between containerized and bare-metal use cases.
- **HTTPS Enforcement Breaking Internal Services**: The v2026.4.9 HTTPS constraint (#800) broke existing Otel configurations in podman environments—a breaking change that affected production setups.
- **Missing Documentation**: Zig installation on Debian (#820) remains undocumented, creating friction for source-based installations.

**Positive Signals:**
- **Migration Interest**: Users evaluating NullClaw alongside Picoclaw and ZeroClaw (#812) indicates competitive market positioning.
- **Feature Engagement**: Multiple PRs and issue discussions show active community contribution and feature interest.

---

## 8. Backlog Watch

**Issues Requiring Maintainer Attention:**

| Issue | Age | Title | Author | Status |
|-------|-----|-------|--------|--------|
| [#449](https://github.com/nullclaw/nullclaw/issues/449) | ~34 days | `nullclaw installation using docker hub image` | janvda | Open, 2 comments |
| [#791](https://github.com/nullclaw/nullclaw/issues/791) | 7 days | `[bug] Shell can not run on the physical Linux` | dadapapapa | Open, 3 comments |
| [#800](https://github.com/nullclaw/nullclaw/issues/800) | 4 days | `[bug] Otel broke due to https constraint` | lestan | Open, regression |
| [#820](https://github.com/nullclaw/nullclaw/issues/820) | 1 day | `How to install Zig on Debian?` | eabase | Documentation gap |

**Summary:** Issue #449 (Docker Hub) has been open for over a month with community interest. The Linux shell bug (#791) and HTTPS regression (#800) are newer but have active discussions. Documentation requests (#820) remain open with minimal engagement.

---

*Digest generated from NullClaw GitHub data. All links point to https://github.com/nullclaw/nullclaw.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Ecosystem

**Report Date:** 2026-04-15  
**Projects Analyzed:** NullClaw, IronClaw, ZeroClaw (NanoBot, Hermes Agent, PicoClaw, CoPaw data unavailable)

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape remains fragmented but actively evolving, with projects differentiating along deployment (containerized vs. native), platform integration (messaging channels), and orchestration complexity axes. Three of seven tracked projects provided usable data today, revealing two high-velocity projects (IronClaw, ZeroClaw) maintaining ~50 issue/PR updates daily, while NullClaw operates at a measured pace suited to early-stage stabilization. No projects shipped releases today, suggesting a collective focus on hardening rather than feature expansion. Critical infrastructure gaps—OAuth reliability, container deployment, and observability—emerge as ecosystem-wide challenges.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | Open PRs | Releases Today | Open Issues (Total) | Community Engagement |
|---------|---------------------|----------|----------------|---------------------|----------------------|
| **NullClaw** | 8 (7 open, 1 closed) | 2 | 0 | ~821+ | 3+ comments on key issues |
| **IronClaw** | 50 | 9+ notable | 0 | ~2400+ | 7 comments (top issue) |
| **ZeroClaw** | 50 | 7+ notable | 0 | ~5700+ | 11 comments (top issue) |

**Health Indicators:**
| Project | Critical Bugs (S0/P0) | Security Issues | Regression | Active Fix PRs |
|---------|----------------------|----------------|------------|----------------|
| NullClaw | 1 (regression #800) | 0 | 1 (HTTPS constraint) | 0 linked |
| IronClaw | 6 P0 | 2 (#2470, #2474) | 1 (v0.24→0.25 upgrade) | 9+ open |
| ZeroClaw | 4 S0 | 0 explicitly | 1 (web dashboard) | 7+ merged today |

---

## 3. Primary Project Positioning

### NullClaw
- **Positioning:** Lightweight, developer-focused agent framework with automation emphasis
- **Technical Approach:** DB-backed cron scheduler, WeChat/Messaging integration, skill/agent/shell job types
- **Advantages:** Lean feature set; active automation tooling (PR #783 cron features)
- **Gap vs. Peers:** No Docker/container deployment; HTTPS enforcement regression; limited channel integrations

### IronClaw
- **Positioning:** Enterprise-grade multi-channel agent platform with focus on UI/UX reliability
- **Technical Approach:** Per-user settings, parallel message handling, sandbox detection, tokio-based concurrency
- **Advantages:** Strong CI/CD infrastructure (canary regression lanes), security hardening, multi-provider LLM roadmap
- **Gap vs. Peers:** OAuth fragility (Google Sheets, Twitter/X, Slack); web UI stability issues; 6 concurrent P0 bugs

### ZeroClaw
- **Positioning:** Provider-flexible orchestration engine with observability focus
- **Technical Approach:** Schema versioning (V1→V2), OTEL tracing hierarchy, musl/Alpine builds, multi-model spawn capabilities
- **Advantages:** Broad provider coverage (Ollama, Groq, kimi-code, Manifest Router), TOML config maturity
- **Gap vs. Peers:** 4 concurrent S0 bugs (email config, multi-instance paths, WSL2 OOM, Feishu bypass); web dashboard requires manual build

**Community Size Proxy:** ZeroClaw (5700+ issues) > IronClaw (2400+ issues) > NullClaw (~800 issues)

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|------------|----------|----------------|
| **Containerization** | NullClaw (#449), ZeroClaw (musl builds) | Docker Hub images, Alpine/musl support, podman compatibility |
| **Observability** | NullClaw (OTEL broken), ZeroClaw (OTEL hierarchy fix) | OTLP export, authenticated headers, span relationships |
| **OAuth/Third-Party Auth** | IronClaw (#2229, #2230, #2473), ZeroClaw (Feishu) | Seamless OAuth flows, credential system hardening |
| **Web UI Reliability** | IronClaw (#2409, #2410), ZeroClaw (#4866) | Pre-built dashboards, session persistence, theme sync |
| **Multi-Provider Flexibility** | IronClaw (#80), ZeroClaw (#5730, #5459) | Ollama tool calling, provider abstraction layers |
| **Security Hardening** | IronClaw (#2470, #2474), NullClaw (PR #783) | Injection scanning, test gatekeeping, nonce storage |

---

## 5. Differentiation Analysis

| Dimension | NullClaw | IronClaw | ZeroClaw |
|-----------|----------|----------|----------|
| **Primary Language** | (Inferred: Go/other) | Rust | Rust |
| **Deployment Target** | Native Linux, physical servers | Cross-platform with Docker detection | Cross-platform + musl/Alpine |
| **Feature Emphasis** | Automation (cron), WeChat integration | Channel parity, UI stability | Provider diversity, observability |
| **Release Cadence** | Episodic (v2026.4.9 last) | Frequent (v0.25.0 recent) | Episodic (v0.6.9 era) |
| **Community Maturity** | Early-stage, niche | Maturing, enterprise-focused | Mature, broad adoption |
| **Security Posture** | Basic (security hardening in progress) | Advanced (FailSafe audit ongoing) | Moderate (S0 bugs indicate gaps) |
| **Config Model** | (Implicit) | Per-user CachedSettingsStore | TOML with schema versioning |

---

## 6. Community Momentum & Maturity

### Tier 1: High Velocity / Active Stabilization
- **IronClaw:** 50/50 issue/PR throughput. Multiple P0 bugs being addressed; parallel message handling (#2429) and Slack OAuth fix (#2473) indicate mature DevOps. Security audit in progress.
- **ZeroClaw:** 50/50 throughput with 7 PRs merged today. Schema versioning complete; OTEL work signals production-readiness push. 4 S0 bugs represent highest risk.

### Tier 2: Moderate Activity / Feature Development
- **NullClaw:** 8 issue updates, 2 active PRs. Cron automation (#783) and WeChat auth (#818) represent meaningful feature additions. Community engagement is steady but smaller scale.

### Tier 3: Data Unavailable
- **NanoBot, Hermes Agent, PicoClaw, CoPaw:** Summary generation failed; activity status unknown.

**Maturity Signals:**
- IronClaw has formal CI regression lanes and per-user settings decorators → production-grade
- ZeroClaw has config schema migration tooling → enterprise adoption readiness
- NullClaw lacks container deployment despite community demand → early-stage friction

---

## 7. Trend Signals

### Industry Trends from Community Feedback

| Trend | Evidence | Implication for Developers |
|-------|----------|---------------------------|
| **OAuth Reliability is Table Stakes** | IronClaw: Google Sheets (#2229), Twitter/X (#2230), Slack (#1997/#1998) failures | Projects without seamless OAuth will face onboarding friction |
| **Container-First Deployment Expected** | NullClaw (#449), ZeroClaw (musl support) | Docker/podman support is no longer optional; musl targets indicate lightweight server demand |
| **Observability is Maturing** | ZeroClaw OTEL hierarchy (#5744), authenticated OTLP (#5700) | Enterprise buyers expect Datadog/Langfuse/Jaeger integration |
| **Multi-Provider Abstraction** | IronClaw (#80), ZeroClaw (#5459, #5730) | Vendor lock-in avoidance; Ollama and local model support is critical |
| **UI/UX Parity with Web App Expectations** | IronClaw (#2410 dashboard refresh), ZeroClaw (#4866 web dashboard) | Users expect pre-built, always-available web interfaces |
| **Security Audits Entering Workflow** | IronClaw FailSafe audit (#2470) | Open-source projects increasingly undergoing formal security reviews |
| **Cross-Platform Channel Integration** | IronClaw (Slack, Telegram, Discord), ZeroClaw (Matrix, Feishu, Telegram) | Telegram/Feishu voice support gaps indicate channel parity immaturity |

### Actionable Insights

1. **For platform developers:** Prioritize OAuth reliability and pre-built container images; these are the top friction points across all three projects.
2. **For enterprise evaluators:** IronClaw shows the most mature CI/CD and security posture; ZeroClaw leads in provider diversity; NullClaw is viable for automation-focused deployments.
3. **For contributors:** Parallel message handling (#2429), OTEL tracing (#5744), and cron automation (#783) represent active development areas with high community value.

---

*Report generated from 2026-04-15 community digest data. Four projects (NanoBot, Hermes Agent, PicoClaw, CoPaw) had unavailable summaries and were excluded from comparison.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-15

## 1. Today's Overview

IronClaw continues a high-velocity development cycle with 50 issues and 50 PRs updated in the past 24 hours. The project shows strong activity across bug fixes, infrastructure improvements, and feature parity work. No new releases shipped today, but multiple staging promotions indicate active CI/CD throughput. QA efforts (primarily from `joe-rlo`) have surfaced several P0/P2 bugs in the hosted-staging environment, particularly around web UI stability and channel integrations. Closed PRs include critical fixes for Slack OAuth, user message persistence, and sandbox detection. Overall project health reflects active stabilization as the team approaches a potential release.

---

## 2. Releases

**No new releases today.** The latest tagged versions remain at `0.25.0` (visible in QA reports). Users attempting upgrades from `0.24.0` to `0.25.0` are encountering silent failures (see Bug #2346 in §5).

---

## 3. Project Progress

### Merged / Closed PRs (Today)

| PR | Author | Summary | Link |
|----|--------|---------|------|
| **#2434** | henrypark133 | Fix: persist user messages at send time (fixes #2409) | [nearai/ironclaw#2434](https://github.com/nearai/ironclaw/pull/2434) |
| **#2473** | henrypark133 | Fix: use gateway owner_id for relay OAuth nonce storage | [nearai/ironclaw#2473](https://github.com/nearai/ironclaw/pull/2473) |
| **#2475** | henrypark133 | Test(e2e): add Playwright persistence happy-path test | [nearai/ironclaw#2475](https://github.com/nearai/ironclaw/pull/2475) |
| **#2425** | henrypark133 | Feat(db): add per-user CachedSettingsStore decorator | [nearai/ironclaw#2425](https://github.com/nearai/ironclaw/pull/2425) |
| **#2467** | ymcrcat | Fix(sandbox): try Docker socket before CLI binary check | [nearai/ironclaw#2467](https://github.com/nearai/ironclaw/pull/2467) |
| **#2401** | serrrfirat | Fix(security): gate test URL rewriters behind #[cfg(test)] | [nearai/ironclaw#2401](https://github.com/nearai/ironclaw/pull/2401) |
| **#2362** | serrrfirat | CI: add live canary regression lanes | [nearai/ironclaw#2362](https://github.com/nearai/ironclaw/pull/2362) |

**Key advancements:**
- **Web UI persistence fixed** (#2434): User messages now persist immediately to DB before returning HTTP 202, eliminating race conditions when switching threads.
- **Slack OAuth repaired** (#2473): Nonce storage was keyed to user UUID instead of `owner_id`, causing all Slack callbacks to fail.
- **Sandbox detection improved** (#2467): Docker socket detection now precedes CLI binary checks, fixing container-in-container (Nomad) deployments.
- **Security hardening** (#2401): Test URL rewriters were inadvertently included in debug builds; now gated behind `#[cfg(test)]`.
- **CI evolution** (#2362): Live canary regression lanes added for pre-production smoke testing.

### Open PRs (Notable)

| PR | Author | Summary | Risk | Link |
|----|--------|---------|------|------|
| **#2432** | henrypark133 | Fix: consolidate channel pairing/setup flow (fixes #2411) | Medium | [nearai/ironclaw#2432](https://github.com/nearai/ironclaw/pull/2432) |
| **#2429** | henrypark133 | Feat: parallel message handling across threads | Medium | [nearai/ironclaw#2429](https://github.com/nearai/ironclaw/pull/2429) |
| **#2168** | pranavraja99 | Feat: path-based credential matching for per-endpoint auth | High | [nearai/ironclaw#2168](https://github.com/nearai/ironclaw/pull/2168) |
| **#1446** | quchenyuan | Feat: add Aliyun Coding Plan support | Low | [nearai/ironclaw#1446](https://github.com/nearai/ironclaw/pull/1446) |
| **#2423** | henrypark133 | Feat: concurrent read-only tool execution with batch partitioning | Medium | [nearai/ironclaw#2423](https://github.com/nearai/ironclaw/pull/2423) |
| **#2428** | henrypark133 | Feat: persist "always approve" decisions to DB in v2 engine | Low | [nearai/ironclaw#2428](https://github.com/nearai/ironclaw/pull/2428) |
| **#2477** | henrypark133 | Feat: rich tool cards in history + thread processing indicator | Low | [nearai/ironclaw#2477](https://github.com/nearai/ironclaw/pull/2477) |
| **#2459** | serrrfirat | Feat(ci): AI-first CI workflows — review, interact, health monitor | Medium | [nearai/ironclaw#2459](https://github.com/nearai/ironclaw/pull/2459) |
| **#2471** | serrrfirat | Fix: unify hot-activation owner_id type and capabilities fallback | Medium | [nearai/ironclaw#2471](https://github.com/nearai/ironclaw/pull/2471) |

**Highlight:** PR #2429 introduces parallel message handling across threads via tokio tasks while preserving same-thread serialization—potentially a significant throughput improvement.

---

## 4. Community Hot Topics

### Issues with Most Discussion

| Issue | Author | Comments | Topic | Link |
|-------|--------|----------|-------|------|
| **#2229** | joe-rlo | 7 | Google Sheets OAuth Error 400 (secrets/extensions) | [nearai/ironclaw#2229](https://github.com/nearai/ironclaw/issues/2229) |
| **#2230** | joe-rlo | 4 | Twitter/X MCP requires manual cookie extraction | [nearai/ironclaw#2230](https://github.com/nearai/ironclaw/issues/2230) |
| **#76** | ilblackdragon | 3 | Discord channel integration (now closed) | [nearai/ironclaw#76](https://github.com/nearai/ironclaw/issues/76) |
| **#80** | ilblackdragon | 3 | Multi-provider LLM support (Ollama, Bedrock, Gemini) | [nearai/ironclaw#80](https://github.com/nearai/ironclaw/issues/80) |
| **#84** | ilblackdragon | 3 | Agent system advanced features | [nearai/ironclaw#84](https://github.com/nearai/ironclaw/issues/84) |
| **#87** | ilblackdragon | 3 | Memory & knowledge system enhancements | [nearai/ironclaw#87](https://github.com/nearai/ironclaw/issues/87) |
| **#545** | sergeiest | 2 | Configure credentials via chat | [nearai/ironclaw#545](https://github.com/nearai/ironclaw/issues/545) |
| **#144** | BroccoliFin | 2 | Chat/channel of project (community ask) | [nearai/ironclaw#144](https://github.com/nearai/ironclaw/issues/144) |

### Analysis

**OAuth integration failures dominate discussion.** Issue #2229 (Google Sheets) and #2230 (Twitter/X) reflect ongoing friction in the extension/credential system. The OAuth discovery bug for stdio MCP servers (#2474) compounds this pattern—users expect seamless third-party auth, not manual workaround.

**Feature parity roadmap items remain active.** Multi-provider LLM (#80), agent advanced features (#84), and memory enhancements (#87) each carry 3 comments, indicating sustained community interest in IronClaw's ecosystem expansion.

**Community infrastructure gap.** Issue #144 (asking for Discord/Telegram group) signals users want faster synchronous communication beyond GitHub issues.

---

## 5. Bugs & Stability

### Active Bugs (Ranked by Priority)

| ID | Priority | Title | Status | Fix PR? | Link |
|----|----------|-------|--------|---------|------|
| **#2409** | P0 | User messages disappear after typing in chat | Open | #2434 merged | [nearai/ironclaw#2409](https://github.com/nearai/ironclaw/issues/2409) |
| **#2410** | P0 | Dashboard keeps refreshing and wiping contents | Open | — | [nearai/ironclaw#2410](https://github.com/nearai/ironclaw/issues/2410) |
| **#2411** | P0 | Telegram bot token save action does nothing | Open | #2432 open | [nearai/ironclaw#2411](https://github.com/nearai/ironclaw/issues/2411) |
| **#2405** | P0 | Gateway routing error: broadcast() requires thread_id | Open | — | [nearai/ironclaw#2405](https://github.com/nearai/ironclaw/issues/2405) |
| **#2276** | P0 | Orchestrator crashes with HTTP 413 Payload Too Large | Open | — | [nearai/ironclaw#2276](https://github.com/nearai/ironclaw/issues/2276) |
| **#2346** | P0 | Instance upgrade fails 0.24.0 → 0.25.0 with no error detail | Open | — | [nearai/ironclaw#2346](https://github.com/nearai/ironclaw/issues/2346) |
| **#2402** | P2 | Bot enters infinite "Calling LLM" loop after tool operations | Open | — | [nearai/ironclaw#2402](https://github.com/nearai/ironclaw/issues/2402) |
| **#2281** | P2 | Bot ignores temporal conditions, sends immediately | Open | — | [nearai/ironclaw#2281](https://github.com/nearai/ironclaw/issues/2281) |
| **#2259** | P2 | Telegram cannot access memory / tools configured via CLI | Open | — | [nearai/ironclaw#2259](https://github.com/nearai/ironclaw/issues/2259) |
| **#2474** | Security | stdio MCP servers trigger OAuth discovery flow | Open | — | [nearai/ironclaw#2474](https://github.com/nearai/ironclaw/issues/2474) |
| **#2470** | Security | Memory poisoning: write_to_layer() bypasses injection scanning | Open | — | [nearai/ironclaw#2470](https://github.com/nearai/ironclaw/issues/2470) |

### Notable: Security Findings

**#2470 — Memory poisoning via write_to_layer() bypass:** FailSafe's security audit identified 4 vulnerabilities; 3 have been addressed. The remaining issue involves `write_to_layer()` bypassing injection scanning, rated High severity. No fix PR yet linked.

**#2474 — stdio MCP OAuth misfire:** When activating stdio-transport MCP servers, IronClaw incorrectly attempts HTTP-based OAuth discovery, failing with auth errors since there's no URL endpoint.

### Channel Integration Bugs

**Slack integration remains broken:**
- #1997: Slack App is not available (P0)
- #1998: Slack connect flow is broken (P0)

Both are tracked but unfixed; the Slack OAuth nonce fix (#2473) may partially address #1998, but a full reconnect flow is still needed.

---

## 6. Feature Requests & Roadmap Signals

### High-Interest Feature Requests

| Issue | Author | Priority | Topic | Signals | Link |
|-------|--------|----------|-------|---------|------|
| **#80** | ilblackdragon | P1-P3 | Multi-provider LLM support (Ollama, Bedrock, Gemini) | 3 comments | [nearai/ironclaw#80](https://github.com/nearai/ironclaw/issues/80) |
| **#84** | ilblackdragon | P2-P3 | Agent system advanced (multi-agent, streaming, thinking) | 3 comments | [nearai/ironclaw#84](https://github.com/nearai/ironclaw/issues/84) |
| **#87** | ilblackdragon | P2-P3 | Memory & knowledge enhancements (embeddings, batching) | 3 comments | [nearai/ironclaw#87](https://github.com/nearai/ironclaw/issues/87) |
| **#70** | ilblackdragon | P1 | Feed system (persistent queryable event stream) | 1 comment | [nearai/ironclaw#70](https://github.com/nearai/ironclaw/issues/70) |
| **#90** | ilblackdragon | P1-P2 | Audio pipeline (STT, TTS, voice notes) | 1 comment | [nearai/ironclaw#90](https://github.com/nearai/ironclaw/issues/90) |
| **#150** | ilblackdragon | High | Import Claude conversation history | 1 comment | [nearai/ironclaw#150](https://github.com/nearai/ironclaw/issues/150) |
| **#97** | bkutasi | — | Generic embedding model endpoint | 1 comment | [nearai/ironclaw#97](https://github.com/nearai/ironclaw/issues/97) |
| **#101** | zmanian | Draft | RFC: Git-Based Plugin Registry | 1 comment | [nearai/ironclaw#101](https://github.com/nearai/ironclaw/issues/101) |
| **#120** | zmanian | — | RFC: Simplify skills system | 1 comment | [nearai/ironclaw#120](https://github.com/nearai/ironclaw/issues/120) |

### Prediction: Next Version Signals

Based on PR activity and issue volume:
1. **Channel parity fixes** — Telegram (#2411), Slack (#1997/#1998), and web UI (#2409, #2410) are under active PR treatment; expect resolution in near-term release.
2. **Parallel agent processing** — PR #2429 (parallel message handling) suggests performance focus.
3. **Credential system overhaul** — PR #2168 (path-based credential matching) indicates refined multi-endpoint auth is in progress.
4. **Aliyun provider** — PR #1446 signals growing international/provider coverage.

---

## 7. User Feedback Summary

### Pain Points

**1. OAuth and third-party integrations are fragile.**
> "Google Sheets OAuth blocked: Error 400 invalid_request on authorize" (#2229)  
> "Twitter/X connection unavailable — MCP requires manual browser cookie extraction" (#2230)  
> Users expect plug-and-play integrations but encounter

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-15

---

## 1. Today's Overview

ZeroClaw continues to demonstrate high development velocity, with **50 Issues and 50 Pull Requests** updated in the last 24 hours—a pace consistent with a project in active maturation. All 50 tracked Issues remain open except 3 closed, while 7 PRs reached merged/closed status. The ecosystem is actively expanding across multiple fronts: observability (OTEL tracing), platform support (musl/Alpine), and Web UI UX. Notably, no new releases shipped today, suggesting the team is in a stabilization or review phase. The most critical signals are two **S0-severity bugs** (email channel config logic and multi-instance config paths) and an S1 workflow blocker (web dashboard build requirement). Community engagement remains strong, with issues averaging 2–11 comments.

---

## 2. Releases

**No new releases** were published today. The last tracked release cycle appears to be in the `v0.6.9` era based on Issue #5629 (`api_key` warning in v0.6.9).

---

## 3. Project Progress

### Merged/Closed PRs (Today)

| PR | Author | Summary |
|----|--------|---------|
| [#5517](https://github.com/zeroclaw-labs/zeroclaw/pull/5517) | singlerider | **feat(config): forward-only schema versioning with V1→V2 migration** — Consolidates provider fields into `[providers.models.<name>]`, removes `channels.matrix.room_id` in favor of `allowed_rooms`, preserves TOML comments on all write paths. Closes Issue #5445. |
| [#5660](https://github.com/zeroclaw-labs/zeroclaw/pull/5660) | gregnazario | **feat(ci): add musl/Alpine Linux builds to release workflows** — Added `x86_64-unknown-linux-musl` and `aarch64-unknown-linux-musl` targets; updated `install.sh` for musl detection. |

### Active Advancements (Open PRs)

- **[#5744](https://github.com/zeroclaw-labs/zeroclaw/pull/5744)** — OTEL span hierarchy fix: establishes proper parent-child span relationships and adds token attributes, improving trace quality in Datadog/Langfuse/Jaeger backends.
- **[#5700](https://github.com/zeroclaw-labs/zeroclaw/pull/5700)** — `otel_headers` config for authenticated OTLP export; enables custom HTTP headers for enterprise collectors.
- **[#5738](https://github.com/zeroclaw-labs/zeroclaw/pull/5738)** — New `model_spawn` LLM-callable tool for live model switching and parallel ephemeral spawns (companion to openclaw/openclaw#66652).
- **[#5735](https://github.com/zeroclaw-labs/zeroclaw/pull/5735)** — Decouples `gateway` and `tui-onboarding` from `agent-runtime`, reducing compile burden for channel-only builds.
- **[#5727](https://github.com/zeroclaw-labs/zeroclaw/pull/5727)** — Matrix encrypted media download fix + outbound attachment support (regression from workspace split #5559).
- **[#5724](https://github.com/zeroclaw-labs/zeroclaw/pull/5724)** — Web theme mode switch bug: `setTheme()` now syncs `colorTheme` correctly; `setColorTheme()` no longer overrides explicit user selection.
- **[#5733](https://github.com/zeroclaw-labs/zeroclaw/pull/5733)** — Model quick-switcher dropdown + persistent WebSocket connection for Web UI Agent Chat.
- **[#5730](https://github.com/zeroclaw-labs/zeroclaw/pull/5730)** — Manifest Router provider as new OpenAI-compatible option (default `http://localhost:3001/v1`).
- **[#5739](https://github.com/zeroclaw-labs/zeroclaw/pull/5739)** — Extends musl/Alpine builds to cross-platform workflows.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Title | Comments | 👍 | Severity | Theme |
|---|-------|----------|----|----------|-------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Web dashboard is still not available | 11 | 0 | S1 | Users cannot access Web UI or Tauri desktop app; prompts for manual `cd web && npm ci && npm run build`. Persists across many versions. |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | A better LOGO of Zeroclaw | 6 | 1 | — | Community request for visual branding redesign. |
| [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | Duplicate consecutive assistant messages in provider request | 5 | 0 | S2 | Tool dispatcher bug: models returning narration text alongside `tool_calls` produce duplicate assistant messages. |
| [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | feat(telegram): voice message transcription support | 5 | 0 | — | Feature parity gap vs. OpenClaw; Telegram voice messages currently ignored. |
| [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) | Ollama provider sends tool_count=0 | 3 | **3** | S1 | Hard-coded `tool_count=0` breaks native tool calling for all Ollama-hosted models. |
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | kimi-code provider streaming error | 3 | 0 | S1 | 400 Bad Request: reasoning_content missing with thinking-enabled requests. |
| [#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575) | Extremely slow project compilation | 3 | 0 | — | Development ergonomics: single-line changes trigger full recompile; impacts secondary development. |

### Underlying Needs
- **Web UI readiness**: The top issue (#4866, 11 comments) signals that the web dashboard build step is a persistent friction point. Users expect a pre-built web UI out of the box.
- **Provider reliability**: Multiple provider-level bugs (Ollama tool calling, kimi-code streaming, Groq 400 error) indicate the provider abstraction layer needs hardening.
- **Developer experience**: Slow compilation (#5575) and crate split requests (#5447) suggest the monolithic Rust structure is becoming a bottleneck.

---

## 5. Bugs & Stability

Ranked by severity from the Issue tracker:

| # | Title | Severity | Status | Fix PR? |
|---|-------|----------|--------|---------|
| [#5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528) | Improper logic of email channel config | **S0** — data loss / security risk | Open | — |
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | Consecutive OOM in WSL2 | **S0** — data loss / security risk | Open | — |
| [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) | Default Configuration Path Issues in Multi-Instance Deployments | **S0** — data loss / security risk | Open | — |
| [#5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672) | Feishu responds even when mention_only is enabled | **S0** — data loss / security risk | Open | — |
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Web dashboard not available | **S1** — workflow blocked | Open | — |
| [#5578](https://github.com/zeroclaw-labs/zeroclaw/issues/5578) | Zeroclaw doesn't talk to local llama.cpp server | **S1** — workflow blocked | Open | — |
| [#5654](https://github.com/zeroclaw-labs/zeroclaw/issues/5654) | Encryption for Telegram token config not working | **S1** — workflow blocked | Open | — |
| [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) | Ollama provider tool_count=0 | **S1** — workflow blocked | Open | — |
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | kimi-code provider streaming error | **S1** — workflow blocked | Open | — |
| [#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584) | Duplicate consecutive assistant messages | **S2** — degraded behavior | Open | — |
| [#5670](https://github.com/zeroclaw-labs/zeroclaw/issues/5670) | Groq provider 400 error | **S2** — degraded behavior | Open | — |
| [#5634](https://github.com/zeroclaw-labs/zeroclaw/issues/5634) | Web dashboard session not persisting | **S2** — degraded behavior | Open | — |

> ⚠️ **Stability Concern**: Four S0-severity bugs are open simultaneously (email config logic, WSL2 OOM, multi-instance config paths, Feishu mention_only bypass), any of which could cause data loss or security risks in production. No corresponding fix PRs were identified in today's data.

---

## 6. Feature Requests & Roadmap Signals

| # | Title | Category | Demand Signals | Likelihood of Inclusion |
|---|-------|----------|----------------|--------------------------|
| [#5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) | Telegram voice message transcription | Channel Enhancement | 5 comments, comparison with OpenClaw | **High** — clear gap, low effort |
| [#5445](https://github.com/zeroclaw-labs/zeroclaw/issues/5445) | Config schema versioning (V1→V2) | Config | Merged PR #5517 | ✅ **Done** |
| [#5738](https://github.com/zeroclaw-labs/zeroclaw/pull/5738) | `model_spawn` tool | Tool | New PR, companion to OpenClaw spec | **High** — structured spec, active PR |
| [#5619](https://github.com/zeroclaw-labs/zeroclaw/issues/5619) | OpenRouter `extra_body` passthrough | Provider Enhancement | PR #5623 open | **High** — PR open |
| [#5742](https://github.com/zeroclaw-labs/zeroclaw/pull/5742) | MiniMax-AI/cli as default skill tap | Ecosystem | New PR, onboarding discoverability | **Medium** |
| [#5730](https://github.com/zeroclaw-labs/zeroclaw/pull/5730) | Manifest Router provider | Provider | New PR | **Medium** |
| [#5733](https://github.com/zeroclaw-labs/zeroclaw/pull/5733) | Model quick-switcher + persistent WebSocket | Web UI | New PR, 2 user-requested features | **High** |
| [#5502](https://github.com/zeroclaw-labs/zeroclaw/issues/5502) | `allowed_tools` configuration option | Config/Agent | 2 comments | **Medium** |
| [#5501](https://github.com/zeroclaw-labs/zeroclaw/issues/5501) | Trigger cron manually | Feature | 2 comments | **Low–Medium** |
| [#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) | ANN index for SQLite vector search | Performance | 3 comments | **Medium** |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | Better logo design | Branding | 6 comments, 1 👍 | **Low** (visual, non-blocking) |

### Roadmap Signal
The merged config migration (#5517) and active OTEL work (#5744, #5700) suggest a near-term focus on **observability and configuration stability**. The `model_spawn` tool (#5738) and Manifest Router provider (#5730) indicate expansion of multi-model orchestration capabilities.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Impact |
|-------|----------|--------|
| **Web dashboard unavailable** | #4866 (11 comments) — persists across versions | Users cannot use Web UI or Tauri app without manual build step |
| **Ollama tool calling broken** | #5459 (3 👍) — hard-coded `tool_count=0` | All Ollama native tool calling fails silently |
| **Telegram voice messages ignored** | #5509 — OpenClaw has this, ZeroClaw does not | Feature parity gap blocking Telegram voice users |
| **Slow Rust compilation** | #5575, #5447 | Secondary development experience degraded |
| **WSL2 memory exhaustion** | #5542 (S0) — consecutive OOM kills | Data loss risk on common dev platform |
| **Feishu mention_only bypass** | #5672 (S0) | Security risk: bot responds when it should not |
| **Web session not persisting** | #5634 | User context lost on page refresh despite config |

### Use Cases & Satisfaction
- **Positive signal**: Config versioning (#5517 merged) addresses a long-standing pain around TOML schema ambiguity.
- **Ecosystem growth**: MiniMax-AI/cli integration (#5742) shows community skill ecosystem expanding.
- **Platform coverage**: musl/Alpine support (#5739, #5660) addresses lightweight/server use cases.

---

## 8. Backlog Watch

Issues or PRs requiring maintainer attention that are **stalled or high-impact** but lack visible resolution activity:

| # | Title | Age | Status | Concern |
|---|-------|-----|--------|---------|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) | Web dashboard not available | ~18 days | Open | Top community issue (11 comments); no fix PR in data |
| [#5575](https://github.com/zeroclaw-labs/zeroclaw/issues/5575) | Extremely slow compilation | ~5 days | Open | Development friction, may require architectural split (#5447) |
| [#5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) | SQLite ANN index | ~6 days | Open | Performance regression in memory backend; no PR |
| [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) | Ollama tool_count=0 | ~8 days | Open | S1 severity, no PR; blocks native tool calling |
| [#5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356) | Canvas tool silent failure on channel servers | ~10 days | Open | Frames not reaching WebSocket clients from Telegram/Discord/Slack |
| [#5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528) | Email channel config improper logic | ~7 days | Open | S0 severity — data loss / security risk; no PR |
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | WSL2 OOM | ~6 days | Open | S0 severity; no PR |
| [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) | Multi-instance config paths | ~5 days | Open | S0 severity; no

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/manelsen/agents-radar).*