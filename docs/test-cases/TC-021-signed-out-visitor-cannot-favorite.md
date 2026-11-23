# TC-021: Signed-out visitor cannot favorite

- **Priority:** P3
- **Type:** negative
- **Linked criteria:** F-03 AC-04
- **Status:** Not started
- **Automation:** None yet (no automated test written).

## Preconditions
- Signed out.
- A demo author's article is visible in Global Feed.

## Test data
- As described in the steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open / and click "Global Feed". | The step completes without an error. [INFERRED] |
| 2 | Click a heart button. | The count doesn't change, and the visitor is sent to /login [INFERRED]. |

**Pass criteria:** The count doesn't change, and the visitor is sent to /login [INFERRED].

## Notes
- No automated test yet. An e2e test needs the Docker stack to verify, which isn't available on this PC.
