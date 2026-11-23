# TC-002: User can log in with valid credentials

- **Priority:** P1
- **Type:** functional
- **Linked criteria:** F-01 AC-02
- **Status:** Automated
- **Automation:** e2e/tests/auth.spec.js — "[TC-002] [smoke] User can log in with valid credentials"

## Preconditions
- An account exists.
- Signed out.

## Test data
- Unique user and article data generated through the API by `e2e/tests/helpers.js` at run time.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open /login. | The step completes without an error. [INFERRED] |
| 2 | Enter the account email and password. | The step completes without an error. [INFERRED] |
| 3 | Click "Sign in". | The app goes to / and the header shows the username. |

**Pass criteria:** The app goes to / and the header shows the username.

## Notes
- Passed in CI: Nightly run 45224943955 (2026-11-23, ubuntu-24.04) 13/13 e2e, and the main CI Smoke Tests after the PR #16 merge. These aren't run locally, because the stack needs Docker, which isn't installed.
- GitHub Issue #2.
