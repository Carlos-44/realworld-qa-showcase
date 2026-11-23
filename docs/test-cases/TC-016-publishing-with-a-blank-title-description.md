# TC-016: Publishing with a blank title, description or body is rejected

- **Priority:** P1
- **Type:** negative
- **Linked criteria:** F-02 AC-04 ([F-02](../features/F-02-articles.md))
- **Status:** Not started
- **Automation:** None yet (no automated test written).

## Preconditions
- A registered user, signed in (tests create one through the API).

## Test data
- As described in the steps.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open /editor. | The step completes without an error. [INFERRED] |
| 2 | Leave the title blank and fill the other fields. | The step completes without an error. [INFERRED] |
| 3 | Click "Publish Article". | The step completes without an error. [INFERRED] |
| 4 | Repeat with a blank description, then a blank body. | Each time an error shows "can't be blank", and no article is created. |

**Pass criteria:** Each time an error shows "can't be blank", and no article is created.

## Notes
- No automated test yet. An e2e test needs the Docker stack to verify, which isn't available on this PC.
