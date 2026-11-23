# TC-027: Global feed paginates at 10 per page

- **Priority:** P3
- **Type:** boundary
- **Linked criteria:** F-06 AC-03 ([F-06](../features/F-06-global-feed.md))
- **Status:** Not started
- **Automation:** None yet (no automated test written).

## Preconditions
- More than 10 articles are visible to the viewer.

## Test data
- As described in the steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open / and click "Global Feed". | The step completes without an error. [INFERRED] |
| 2 | Count the previews. | The step completes without an error. [INFERRED] |
| 3 | Click page 2. | Page 1 shows exactly 10, and page 2 shows the next articles. |

**Pass criteria:** Page 1 shows exactly 10, and page 2 shows the next articles.

## Notes
- No automated test yet. An e2e test needs the Docker stack to verify, which isn't available on this PC.
