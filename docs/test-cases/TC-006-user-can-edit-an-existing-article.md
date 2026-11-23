# TC-006: User can edit an existing article

- **Priority:** P2
- **Type:** functional
- **Linked criteria:** F-02 AC-02 ([F-02](../features/F-02-articles.md))
- **Status:** Automated
- **Automation:** e2e/tests/articles.spec.js — "[TC-006] [regression] User can edit an existing article"

## Preconditions
- A registered user, signed in (tests create one through the API).
- The signed-in user has published an article (created through the API).

## Test data
- Unique user and article data generated through the API by `e2e/tests/helpers.js` at run time.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open the article page. | The step completes without an error. [INFERRED] |
| 2 | Click "Edit Article". | The step completes without an error. [INFERRED] |
| 3 | Change the title and click "Publish Article". | The article page shows the new title. |

**Pass criteria:** The article page shows the new title.

## Notes
- Passed in CI: Nightly run 45224943955 (2026-11-23, ubuntu-24.04) 13/13 e2e, and the main CI Smoke Tests after the PR #16 merge. These aren't run locally, because the stack needs Docker, which isn't installed.
- GitHub Issue #6.
