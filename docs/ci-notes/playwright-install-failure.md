# CI note: Playwright install fails on ubuntu-latest

Date: 2026-11-23
Run: Nightly QA Pipeline [45222200440](https://github.com/Carlos-44/realworld-qa-showcase/actions/runs/45222200440), manual run on `fix/e2e-lockfile` (aa6983d)
Status: Diagnosed. Fix drafted in the working tree, not committed (see "Proposed fix").

## What failed
- Job: E2E Tests (Full Regression)
- Step: `npx playwright install --with-deps chromium`
- Earlier steps passed, including `npm ci`. So the lockfile fix (aa6983d) works in CI.

```
BEWARE: your OS is not officially supported by Playwright; installing dependencies for ubuntu26.04-x64 as a fallback.
Cannot install dependencies for ubuntu26.04-x64 with Playwright 1.55.1!
Failed to install browsers
Error: ERROR: Playwright does not support chromium on ubuntu26.04-x64
```

Knock-on failures: the tests were skipped, so `dorny/test-reporter` found no JUnit file and Publish failed at `download-artifact`. Publish never deployed: the `gh-pages` branch is still at b9acb80 (2026-10-31).

## Evidence
| Item | Value |
|---|---|
| Runner image | `ubuntu-26.04`, version 20261116.202.1 |
| Workflow setting | `runs-on: ubuntu-latest` (now resolves to 26.04) |
| Playwright in e2e/package.json | `^1.55.1` |
| Playwright in e2e/package-lock.json | 1.55.1 (`@playwright/test`, `playwright`, `playwright-core`) |
| Node | 20 (`actions/setup-node`) |
| Browser download | Never attempted. No network errors in the log. |

## Root cause
An environment and version mismatch. GitHub moved `ubuntu-latest` to Ubuntu 26.04, and Playwright 1.55.1 has no dependency list for that OS, so it refuses to install. The workflow logic and the lockfile aren't at fault. `main` will hit the same failure once its `npm ci` passes.

## Proposed fix (smallest)
Pin the two jobs that install Playwright to Ubuntu 24.04:
- `.github/workflows/nightly.yml`, job `e2e_nightly`: `runs-on: ubuntu-24.04`
- `.github/workflows/ci.yml`, job `smoke_tests`: `runs-on: ubuntu-24.04`

Separate guard, so a branch run can't publish to Pages:
- `.github/workflows/nightly.yml`, job `publish_report`: `if: always() && github.ref == 'refs/heads/main'`

These edits are in the working tree on `fix/e2e-lockfile`, approved in chat but **not committed**. Committing workflow files needs approval.

## Longer term
Upgrade `@playwright/test` to a release that supports Ubuntu 26.04, then remove the pin. This changes package.json and the lockfile, so it needs its own review.
