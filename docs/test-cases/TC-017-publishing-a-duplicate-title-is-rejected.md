# TC-017: Publishing a duplicate title is rejected

- **Priority:** P2
- **Type:** negative
- **Linked criteria:** F-02 AC-05
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
| 1 | Open /editor. | The step completes without an error. [INFERRED] |
| 2 | Use the existing article's exact title, and fill the other fields. | The step completes without an error. [INFERRED] |
| 3 | Click "Publish Article". | An error shows "must be unique", and no second article is created. |

**Pass criteria:** An error shows "must be unique", and no second article is created.

## Notes
- No automated test yet. An e2e test needs the Docker stack to verify, which isn't available on this PC.
