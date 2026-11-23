# TC-015: Registration rejects an email or username that is already taken

- **Priority:** P2
- **Type:** negative
- **Linked criteria:** F-01 AC-06
- **Status:** Not started
- **Automation:** None yet (no automated test written).

## Preconditions
- An account exists.
- Signed out.

## Test data
- As described in the steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open /register. | The step completes without an error. [INFERRED] |
| 2 | Enter the existing username and email with any password. | The step completes without an error. [INFERRED] |
| 3 | Click "Sign up". | Errors show "has already been taken", and the user stays signed out. |

**Pass criteria:** Errors show "has already been taken", and the user stays signed out.

## Notes
- No automated test yet. An e2e test needs the Docker stack to verify, which isn't available on this PC.
