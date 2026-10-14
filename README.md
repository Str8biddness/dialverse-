# DIALVERSE — V1 Interactive Preview

**One number. Infinite stories.** An early, zero-recurring-cost, browser-based preview of the Dialverse entertainment universe.

> **Status: playable prototype, not a commercial launch.** The hotline is a **scripted simulation**. There is **no real incoming telephone number, remote AI inference, live conversational speech recognition, online checkout, paid entitlement system, production GPS checkpoint verification or recording**. No purchases can be made in this build.

## Features you can try now

- Three branching stories: **The Oracle**, **The Roast Line**, and **The Mystery Line**.
- Browser text-to-speech playback where the device supports `speechSynthesis` (disabled until activated by the visitor).
- Four-stage **Echoes of Lincoln** field mission preview. It contains candidate public-facing landmarks, fictional puzzles, self-attested checkpoint progression and optional device-side location permission check. **Not a verified or approved walking route.**
- Progress and discovered endings saved to local browser storage; export or delete it at any time.
- Mobile-friendly responsive landing page with no build tools, npm dependencies, API keys, accounts, or telemetry.

## Run locally

Requires Python 3 (or any static web server):

```bash
python3 -m http.server 8787
```

Open `http://localhost:8787` and select **The hotline** or **Field missions**. Do not open `index.html` directly with `file://` because module imports are subject to browser restrictions.

Run the zero-dependency automated tests with Node.js 20+:

```bash
npm test
```

## Publish the source to your GitHub account

This source is intended to live in **`Str8biddness/dialverse`** as a **private** repository unless you explicitly choose to change visibility. The included helper uses the official GitHub CLI; it **does not** install GitHub, authenticate for you, overwrite an existing remote repository or publish silently.

With `git` and `gh` installed and `gh auth status` working, run from this project's directory:

```bash
bash publish-github.sh
```

If the repo already exists, the helper stops without overwriting anything. To create it manually, use [GitHub's new repository page](https://github.com/new?name=dialverse) and push your local code via Git.

## Key files

```text
index.html              Static single-page prototype
src/app.js              UI, routing, progress storage, voice playback
src/game.js             Story graph and fictional field mission content
src/styles.css          Responsive design
assets/favicon.svg      Brand icon
.github/workflows/ci.yml GitHub Actions automated tests
publish-github.sh       GitHub CLI publishing helper
ROADMAP.md              Production architecture, safety and launch gates
tests/game.test.js      Story and progress unit tests
```

## Deploy a public preview for free

A static host such as Cloudflare Pages can serve the repository root. No environment variables or build command are required for the current prototype. **Before publishing**, check rights to the name *Dialverse*, confirm all location descriptions, and consider making the field mission accessible only as an armchair demo until routes are safety-reviewed.

## Important content and safety notices

- The Oracle is fictional entertainment and cannot predict actual events.
- Outdoor adventure landmarks are **route candidates**, not a safety-approved itinerary or evidence of paranormal activity. Access, operating hours, sidewalks, crossings, facilities and facts require independent verification on location before a physical launch.
- No trespassing, railway access, nighttime exploration, driving while interacting or restricted-area exploration is permitted or encouraged.
- The optional GPS button gets browser permission only and shows an approximate accuracy value; it does not save or transmit your coordinates or verify presence at a stop.
- Customer payment, paid time limits, refunds, taxes, and revenue allocation **are not implemented**.
- All user-visible story progress is local to their browser in this preview. The source code is not a secure substitute for server-side payment enforcement.

## Ownership

Copyright © 2026 Dialverse project owner. All rights reserved. Source-available to its owner for prototyping; no public reuse license is granted.
