# TC-004: User can log out

- **Priority:** P2
- **Type:** functional
- **Linked criteria:** F-01 AC-04
- **Status:** Automated
- **Automation:** e2e/tests/auth.spec.js — "[TC-004] [regression] User can log out"

## Preconditions
- A registered user, signed in (tests create one through the API).

## Test data
- Unique user and article data generated through the API by `e2e/tests/helpers.js` at run time.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Click "Settings" in the header. | The step completes without an error. [INFERRED] |
| 2 | Click "Or click here to logout." | The header shows "Sign in" and no longer shows the username. |

**Pass criteria:** The header shows "Sign in" and no longer shows the username.

## Notes
- Passed in CI: Nightly run 45224943955 (2026-11-23, ubuntu-24.04) 13/13 e2e, and the main CI Smoke Tests after the PR #16 merge. These aren't run locally, because the stack needs Docker, which isn't installed.
- GitHub Issue #4.
