# TC-020: Favorited article appears on the Favorited Articles tab

- **Priority:** P3
- **Type:** functional
- **Linked criteria:** F-03 AC-03
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
| 1 | Open /@<username>/favorites. | The favorited article's preview is listed. |

**Pass criteria:** The favorited article's preview is listed.

## Notes
- No automated test yet. An e2e test needs the Docker stack to verify, which isn't available on this PC.
