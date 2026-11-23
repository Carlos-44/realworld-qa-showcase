# TC-029: Non-demo author's article is hidden from other users

- **Priority:** P2
- **Type:** regression
- **Linked criteria:** F-06 AC-05
- **Status:** Not started
- **Automation:** None yet (no automated test written).

## Preconditions
- User A (new, non-demo) has published an article.
- User B is signed in.

## Test data
- As described in the steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | As user B, open / and click "Global Feed". | User A's article is not listed (current behavior, gap G-2). |

**Pass criteria:** User A's article is not listed (current behavior, gap G-2).

## Notes
- No automated test yet. An e2e test needs the Docker stack to verify, which isn't available on this PC.
- This documents the known gap. If G-2 is fixed, flip the expected result.
