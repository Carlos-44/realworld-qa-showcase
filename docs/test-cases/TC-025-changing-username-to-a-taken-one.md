# TC-025: Changing username to a taken one is rejected

- **Priority:** P3
- **Type:** negative
- **Linked criteria:** F-05 AC-04
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
| 1 | As user B, open /settings. | The step completes without an error. [INFERRED] |
| 2 | Set Username to user A's username. | The step completes without an error. [INFERRED] |
| 3 | Click "Update Settings". | An error shows, and user B's username is unchanged [INFERRED]. |

**Pass criteria:** An error shows, and user B's username is unchanged [INFERRED].

## Notes
- No automated test yet. An e2e test needs the Docker stack to verify, which isn't available on this PC.
