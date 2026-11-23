# TC-014: User registration form validates required fields

- **Priority:** P1
- **Type:** negative
- **Linked criteria:** F-01 AC-05 ([F-01](../features/F-01-authentication.md))
- **Status:** Automated
- **Automation:** frontend/src/__tests__/Auth.test.jsx — "Register form › [TC-014] [unit] …"

## Preconditions
- Signed out.

## Test data
- As described in the steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open /register. | The step completes without an error. [INFERRED] |
| 2 | Leave all fields blank. | The step completes without an error. [INFERRED] |
| 3 | Click "Sign up". | The API's "can't be blank" errors show and the user stays signed out. |

**Pass criteria:** The API's "can't be blank" errors show and the user stays signed out.

## Notes
- Passed locally 2026-11-23 (Node 20.20.2, Vitest): frontend 11/11, including 3 TC-014 tests.
- GitHub Issue #14.
- The form has no client-side validation (gap G-1).
