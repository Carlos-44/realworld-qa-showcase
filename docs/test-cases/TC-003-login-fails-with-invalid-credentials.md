# TC-003: Login fails with invalid credentials

- **Priority:** P1
- **Type:** negative
- **Linked criteria:** F-01 AC-03
- **Status:** Automated
- **Automation:** e2e/tests/auth.spec.js — "[TC-003] [regression] Login fails with invalid credentials"

## Preconditions
- Signed out.

## Test data
- Unique user and article data generated through the API by `e2e/tests/helpers.js` at run time.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open /login. | The step completes without an error. [INFERRED] |
| 2 | Enter nobody@example.com and a wrong password. | The step completes without an error. [INFERRED] |
| 3 | Click "Sign in". | An error shows ("email or password is invalid"), the URL stays /login and the header still shows "Sign in". |

**Pass criteria:** An error shows ("email or password is invalid"), the URL stays /login and the header still shows "Sign in".

## Notes
- Passed in CI: Nightly run 45224943955 (2026-11-23, ubuntu-24.04) 13/13 e2e, and the main CI Smoke Tests after the PR #16 merge. These aren't run locally, because the stack needs Docker, which isn't installed.
- GitHub Issue #3.
- The test checks that the error box is visible, not the exact text.
