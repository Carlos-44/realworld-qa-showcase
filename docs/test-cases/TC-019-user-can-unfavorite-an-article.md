# TC-019: User can unfavorite an article

- **Priority:** P2
- **Type:** functional
- **Linked criteria:** F-03 AC-02
- **Status:** Not started
- **Automation:** None yet (no automated test written).

## Preconditions
- A registered user, signed in (tests create one through the API).
- The signed-in user has published an article (created through the API).
- The user has favorited it.

## Test data
- As described in the steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open / and click "Global Feed". | The step completes without an error. [INFERRED] |
| 2 | Click the article's heart button. | The count goes from 1 to 0, and the button is no longer highlighted. |

**Pass criteria:** The count goes from 1 to 0, and the button is no longer highlighted.

## Notes
- No automated test yet. An e2e test needs the Docker stack to verify, which isn't available on this PC.
