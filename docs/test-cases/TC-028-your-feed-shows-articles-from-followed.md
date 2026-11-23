# TC-028: Your Feed shows articles from followed authors

- **Priority:** P2
- **Type:** functional
- **Linked criteria:** F-06 AC-04
- **Status:** Not started
- **Automation:** None yet (no automated test written).

## Preconditions
- User A (a demo author) has an article.
- User B is signed in and follows user A.

## Test data
- As described in the steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | As user B, open /. | The step completes without an error. [INFERRED] |
| 2 | Click "Your Feed". | User A's article is listed. |

**Pass criteria:** User A's article is listed.

## Notes
- No automated test yet. An e2e test needs the Docker stack to verify, which isn't available on this PC.
- Needs a demo author from seed data, or test-only DB access [INFERRED].
