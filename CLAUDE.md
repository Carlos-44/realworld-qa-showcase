# RealWorld QA Showcase: project memory

## What this is
A QA showcase built on RealWorld (Conduit), a Medium-style app. Unit, component, and E2E tests; GitHub Issues as the test case tracker (TC-001 to TC-014); Docker; CI and nightly pipelines. Public, MIT.

## Layout
- frontend/: React and Redux app. Unit and component tests in src/__tests__ (Vitest and React Testing Library).
- backend/: Express and Prisma API on PostgreSQL.
- e2e/: Playwright tests in JavaScript, plus a Cucumber BDD setup (npm run test:bdd).
- docs/: project record. Feature specs in docs/features/, test cases in docs/test-cases/, bug reports in docs/bugs/, templates in docs/templates/.
- .github/workflows/: ci.yml (push and PR) and nightly.yml (daily 06:00 UTC, or by hand).

## Commands
- e2e: cd e2e, npm ci, npx playwright install chromium, npm test. The e2e tests need the app stack running on http://localhost. Docker isn't installed on the PC, so e2e results are unverified locally.
- frontend: cd frontend, npm ci, npm test.
- Use Node 20 to match CI.

## Known state (as of 2026-11-23)
- The CI and nightly failures came from e2e/package.json and e2e/package-lock.json being out of sync after the Cucumber commit (a19dfa7). The fix is on branch fix/e2e-lockfile (aa6983d). It is not on main.
- On the branch, the Nightly run gets past npm ci. It then failed at npx playwright install --with-deps chromium. Diagnosed: ubuntu-latest now resolves to ubuntu-26.04, which Playwright 1.55.1 doesn't support (see docs/ci-notes/playwright-install-failure.md). Fixed on the branch in 94d69df by pinning the Playwright jobs to ubuntu-24.04. Not on main.
- The Publish job in nightly.yml is guarded in 94d69df (`if: always() && github.ref == 'refs/heads/main'`), so branch runs can't publish the public GitHub Pages report. The guard is on fix/e2e-lockfile, not on main yet. Don't change it without approval.

## Rules for working in this repo
- Never push to main, merge, open or close PRs, or cancel or start workflow runs without an explicit approval in chat.
- Never edit the GitHub Issues test case list without approval.
- Don't change application source code unless the failure is in the app, and report it first.
- Test case IDs TC-001 to TC-014 match existing GitHub Issues. Keep them. New cases start at TC-015.
- Mark anything inferred from code as [INFERRED] in docs.
- Keep docs short enough to read in a few minutes.

## Decisions log
- 2026-11-23: Docker not installed. E2E verification uses CI instead of local Docker.
- 2026-11-23: Node 20 used from C:\Users\cjozo\dev-tools\node20 in the shell only. System Node is v26.
