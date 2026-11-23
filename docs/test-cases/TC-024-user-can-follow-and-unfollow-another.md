# TC-024: User can follow and unfollow another user

- **Priority:** P2
- **Type:** functional
- **Linked criteria:** F-05 AC-03 ([F-05](../features/F-05-profile-settings.md))
- **Status:** Not started
- **Automation:** None yet (no automated test written).

## Preconditions
- User A exists.
- User B is signed in.

## Test data
- As described in the steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | As user B, open /@<userA>. | The step completes without an error. [INFERRED] |
| 2 | Click "Follow <userA>". | The step completes without an error. [INFERRED] |
| 3 | Click "Unfollow <userA>". | The button changes to Unfollow, then back to Follow. |

**Pass criteria:** The button changes to Unfollow, then back to Follow.

## Notes
- No automated test yet. An e2e test needs the Docker stack to verify, which isn't available on this PC.
