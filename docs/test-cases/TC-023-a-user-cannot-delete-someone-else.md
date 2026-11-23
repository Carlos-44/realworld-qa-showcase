# TC-023: A user cannot delete someone else's comment

- **Priority:** P2
- **Type:** negative
- **Linked criteria:** F-04 AC-04
- **Status:** Not started
- **Automation:** None yet (no automated test written).

## Preconditions
- User A has commented on an article.
- User B is signed in.

## Test data
- As described in the steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | As user B, open the article page. | The step completes without an error. [INFERRED] |
| 2 | Look at user A's comment. | There is no delete icon on user A's comment. A direct API DELETE as user B returns 403. |

**Pass criteria:** There is no delete icon on user A's comment. A direct API DELETE as user B returns 403.

## Notes
- No automated test yet. An e2e test needs the Docker stack to verify, which isn't available on this PC.
