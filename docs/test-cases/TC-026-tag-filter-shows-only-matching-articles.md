# TC-026: Tag filter shows only matching articles

- **Priority:** P2
- **Type:** functional
- **Linked criteria:** F-06 AC-02
- **Status:** Not started
- **Automation:** None yet (no automated test written).

## Preconditions
- A registered user, signed in (tests create one through the API).
- The user has published an article with a unique tag.

## Test data
- As described in the steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open /. | The step completes without an error. [INFERRED] |
| 2 | Click the tag (or open the tag tab). | A #tag tab appears, and every preview listed has that tag. |

**Pass criteria:** A #tag tab appears, and every preview listed has that tag.

## Notes
- No automated test yet. An e2e test needs the Docker stack to verify, which isn't available on this PC.
- Gap G-2: use the user's own article, or a demo author's tag.
