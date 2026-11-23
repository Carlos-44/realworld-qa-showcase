# Session report: unattended pass, 2026-11-23

Branch: `fix/e2e-lockfile`. 5 local commits, **not pushed**. `main` untouched.

## Completed
| Item | Commit | Files |
|---|---|---|
| Setup: CLAUDE.md and .claude/settings.json | not committed (as asked) | 2 |
| 1. Playwright install failure diagnosis | 6642a11 | docs/ci-notes/playwright-install-failure.md |
| 2. Baseline spec | 39aba9e | docs/spec/00-baseline.md |
| 3. Templates and feature specs F-01 to F-06 | e771e44 | docs/templates/ (3), docs/features/ (6 specs + README) |
| 4. Test cases TC-001 to TC-029 and traceability | 6f6e3a7 | docs/test-cases/ (29 + README) |
| 5. Frontend unit tests: **11 passed, 0 failed** | 0d06448 | docs/ci-notes/local-test-run.md |

Coverage: 6 features and 29 acceptance criteria. Every AC has at least one test case. 14 cases are automated (TC-001 to TC-014), and 15 new cases (TC-015 to TC-029) are not started.

## Blocked or not verified
- **E2E tests (TC-001 to TC-013) aren't verified.** Docker isn't installed, and CI is red on main and on this branch (the Playwright install step fails on ubuntu-26.04). They're marked "Automated" because specs exist, not because they recently passed.
- **`/permissions` couldn't be run.** Its dialog isn't available in this session. Instead I checked that settings.json is valid JSON with 17 allow and 15 deny rules, all well-formed `Bash(cmd:*)` rules. Two caveats:
  - The rules only apply to sessions opened **in this repo**, not to the session that wrote them.
  - `Bash(...)` rules don't govern a PowerShell tool on Windows, so the `Remove-Item` and `del` denies only apply when those commands run through Bash.
- **Gap G-2 (articles by non-demo authors are hidden)** limits what some new cases can test through the UI (TC-018, TC-026, TC-028). See the notes in those files.

## Needs your approval
1. **Workflow edits (uncommitted, in the working tree):**
   - `ci.yml` `smoke_tests` and `nightly.yml` `e2e_nightly`: `runs-on: ubuntu-24.04`.
   - `nightly.yml` `publish_report`: `if: always() && github.ref == 'refs/heads/main'`.

   Commit them? Then push, which is needed to test them in CI.
2. **Push `fix/e2e-lockfile`** with the 5 doc commits.
3. **Testing in CI:** a run on this branch needs either a manual Nightly run (safe only once the Publish guard is pushed) or a PR to main (which runs Smoke Tests).
4. **CLAUDE.md is out of date in two places.** It says the install failure is "still being diagnosed" (it's diagnosed), and that the Publish job is unguarded (a guard is drafted). Update it?
5. **Downloads cleanup:** `Downloads\skill-install` and `Downloads\node20-portable` are still waiting on your yes.

## Notes
- Every commit includes a `Co-Authored-By: Claude` trailer.
- The frontend run printed a React "uncontrolled to controlled input" warning in `Register`. This is an app code-quality signal, not a failure.
- The SDLC side session (A3 onwards) was idle during this pass. This pass covered A3 to A6 for this repo, so that session shouldn't redo them.
