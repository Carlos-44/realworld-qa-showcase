# TC-005: User can publish a new article

- **Priority:** P1
- **Type:** functional
- **Linked criteria:** F-02 AC-01 ([F-02](../features/F-02-articles.md))
- **Status:** Automated
- **Automation:** e2e/tests/articles.spec.js — "[TC-005] [smoke] User can publish a new article"

## Preconditions
- A registered user, signed in (tests create one through the API).

## Test data
- Unique user and article data generated through the API by `e2e/tests/helpers.js` at run time.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open /editor. | The step completes without an error. [INFERRED] |
| 2 | Fill Article Title (unique), About and Body. | The step completes without an error. [INFERRED] |
| 3 | Click "Publish Article". | The URL is /article/<slug>, and the page shows the title as the main heading plus the body text. |

**Pass criteria:** The URL is /article/<slug>, and the page shows the title as the main heading plus the body text.

## Notes
- Passed in CI: Nightly run 45224943955 (2026-11-23, ubuntu-24.04) 13/13 e2e, and the main CI Smoke Tests after the PR #16 merge. These aren't run locally, because the stack needs Docker, which isn't installed.
- GitHub Issue #5.
