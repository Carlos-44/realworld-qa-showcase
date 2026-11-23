# TC-001: User can register a new account

- **Priority:** P1
- **Type:** functional
- **Linked criteria:** F-01 AC-01 ([F-01](../features/F-01-authentication.md))
- **Status:** Automated
- **Automation:** e2e/tests/auth.spec.js — "[TC-001] [smoke] User can register a new account"

## Preconditions
- Signed out.

## Test data
- Unique user and article data generated through the API by `e2e/tests/helpers.js` at run time.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open /register. | The step completes without an error. [INFERRED] |
| 2 | Enter a unique Username, Email and Password. | The step completes without an error. [INFERRED] |
| 3 | Click "Sign up". | The app goes to / and the header shows the new username. |

**Pass criteria:** The app goes to / and the header shows the new username.

## Notes
- Passed in CI: Nightly run 45224943955 (2026-11-23, ubuntu-24.04) 13/13 e2e, and the main CI Smoke Tests after the PR #16 merge. These aren't run locally, because the stack needs Docker, which isn't installed.
- GitHub Issue #1.
