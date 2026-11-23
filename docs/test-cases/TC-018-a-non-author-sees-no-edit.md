# TC-018: A non-author sees no edit or delete controls

- **Priority:** P1
- **Type:** negative
- **Linked criteria:** F-02 AC-06
- **Status:** Not started
- **Automation:** None yet (no automated test written).

## Preconditions
- User A has published an article.
- User B is signed in.

## Test data
- As described in the steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | As user B, open user A's article page. | No "Edit Article" or "Delete Article" controls are visible. |

**Pass criteria:** No "Edit Article" or "Delete Article" controls are visible.

## Notes
- No automated test yet. An e2e test needs the Docker stack to verify, which isn't available on this PC.
- User B opens the article by its slug, because gap G-2 hides it from lists.
