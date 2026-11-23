# TC-022: An empty comment is not posted

- **Priority:** P3
- **Type:** boundary
- **Linked criteria:** F-04 AC-03 ([F-04](../features/F-04-comments.md))
- **Status:** Not started
- **Automation:** None yet (no automated test written).

## Preconditions
- A registered user, signed in (tests create one through the API).
- The signed-in user has published an article (created through the API).

## Test data
- As described in the steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open the article page. | The step completes without an error. [INFERRED] |
| 2 | Leave "Write a comment..." empty. | The step completes without an error. [INFERRED] |
| 3 | Click "Post Comment". | No new comment card appears. |

**Pass criteria:** No new comment card appears.

## Notes
- No automated test yet. An e2e test needs the Docker stack to verify, which isn't available on this PC.
- Open question in F-04: whether an error message shows.
