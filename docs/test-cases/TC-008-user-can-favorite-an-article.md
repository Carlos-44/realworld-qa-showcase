# TC-008: User can favorite an article

- **Priority:** P2
- **Type:** functional
- **Linked criteria:** F-03 AC-01
- **Status:** Automated
- **Automation:** e2e/tests/articles.spec.js — "[TC-008] [regression] User can favorite an article"

## Preconditions
- A registered user, signed in (tests create one through the API).
- The signed-in user has published an article (created through the API).

## Test data
- Unique user and article data generated through the API by `e2e/tests/helpers.js` at run time.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open / and click "Global Feed". | The step completes without an error. [INFERRED] |
| 2 | Find the article preview. | The step completes without an error. [INFERRED] |
| 3 | Click its heart button. | The favorites count changes from 0 to 1. |

**Pass criteria:** The favorites count changes from 0 to 1.

## Notes
- Passed in CI: Nightly run 45224943955 (2026-11-23, ubuntu-24.04) 13/13 e2e, and the main CI Smoke Tests after the PR #16 merge. These aren't run locally, because the stack needs Docker, which isn't installed.
- GitHub Issue #8.
- The user favorites their own article, which works around gap G-2. It doesn't cover favoriting another user's article.
