# Dialverse production roadmap

## Architecture layers

1. **Experience director:** deterministic narrative state machine with authored scenarios; AI performs dialogue inside bounded scenes, never overrides access, spending, route, or safety policy.
2. **Conversation provider:** browser voice beta first; later inbound PSTN through a contracted provider with usage ceilings, interruption handling, transcript controls and fallback.
3. **Commerce:** hosted checkout, server-verified payment events, idempotent entitlement issuance and a ledger of cost reserves/refunds before available owner distributions. Do not treat customer prepayments for undelivered experiences as profit.
4. **Adventure engine:** reviewed public checkpoints, route eligibility, consented and time-limited geolocation, stationary-only interactions, narrative progression and replayable achievements.
5. **Operations:** provider-balance monitoring, spending caps, sales shutoff on credit exhaustion, abuse controls, refund capability, accessibility, logs without unnecessary sensitive data, and human incident-response procedures.

## Milestone P0 — completed preview

- [x] Landing page, responsive layout and three channel cards.
- [x] Authored story engine with alternative endings.
- [x] Device-side optional speech output.
- [x] Four-stage illustrative field mission.
- [x] Browser-only local achievement and progress storage.
- [x] Disclosure that there are no real calls, payments or geofences.
- [x] Baseline automated tests.

## Milestone P1 — small private voice beta

- [ ] Design voice orchestration API and choose/contract a provider.
- [ ] Build a backend with one authenticated demo session per invited tester and a strict voice-minute allowance.
- [ ] Add stable session tokens, rate limits, end-call rules and fallback text mode.
- [ ] Test mobile browser permissions, simultaneous sessions and reconnection handling.
- [ ] Instrument anonymous completion, session cost, defects and consented feedback.

## Milestone P2 — prepaid commercial hotline

- [ ] Form required business/tax arrangements and review local/national consumer billing disclosures.
- [ ] Add hosted checkout; verify signed webhooks server-side; make event processing idempotent.
- [ ] Add server-side entitlement ledger with a **funded capacity reserve**, explicit caps and refund handling.
- [ ] Add actual inbound telephone number once running credits and number fees are funded.
- [ ] Enforce disclosure that callers interact with AI/fiction; implement cancellation and privacy controls.
- [ ] Run private paid beta; evaluate conversion, completion, retention and refund rates.

## Milestone P3 — first supervised real-world adventure

- [ ] Verify landmark facts and written source citations; audit public accessibility and opening hours.
- [ ] Walk entire route during intended operating hours. Inspect crossings, rail separation, sidewalk continuity and lighting.
- [ ] Require an appropriate minimum age / guardian controls and explicit safety instructions.
- [ ] Design no-contact GPS check-ins using consent, reasonable location confidence, anti-spoofing limits and alternative manual accessibility flow.
- [ ] Provide **stopped-and-safe** checkpoints only; no instruction that requires attention while driving, cycling or crossing streets.
- [ ] Deliver timed mission chapters and stops without continuously running paid AI speech during transit.
- [ ] Beta test with permission and a facilitator; launch publicly only after review.

## Milestone P4 — expansion

- [ ] Additional city packs, mystery variants and seasonal content.
- [ ] Optional opt-in story memory with data export and deletion.
- [ ] Creator content submission and moderation only once demand and operations justify complexity.

## Commercial guardrails

- Minimum per-purchase revenue must cover payment fees, contracted call time, expected free-preview consumption and a refund/fraud cushion.
- Payment settlement delays mean **$0 upfront is a goal, not a guarantee**. Pre-sell only with explicit deliverables, dates and a refund policy; do not promise instant service before provider credits are funded.
- Owner withdrawals occur after earned-revenue calculations, reserve allocations and tax obligations, never directly off the top of raw customer payments.
