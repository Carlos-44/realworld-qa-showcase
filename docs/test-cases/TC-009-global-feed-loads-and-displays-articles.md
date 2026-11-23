# TC-009: Global feed loads and displays articles

- **Priority:** P2
- **Type:** functional
- **Linked criteria:** F-06 AC-01 ([F-06](../features/F-06-global-feed.md))
- **Status:** Automated
- **Automation:** e2e/tests/articles.spec.js — "[TC-009] [nightly] [e2e] Global feed loads and displays articles"

## Preconditions
- A registered user, signed in (tests create one through the API).
- The signed-in user has published an article (created through the API).

## Test data
- Unique user and article data generated through the API by `e2e/tests/helpers.js` at run time.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open /. | The step completes without an error. [INFERRED] |
| 2 | Click "Global Feed". | At least one article preview shows, including the user's own article. |

**Pass criteria:** At least one article preview shows, including the user's own article.

## Notes
- Passed in CI: Nightly run 45224943955 (2026-11-23, ubuntu-24.04) 13/13 e2e, and the main CI Smoke Tests after the PR #16 merge. These aren't run locally, because the stack needs Docker, which isn't installed.
- GitHub Issue #9.
- The viewer is the author, so this doesn't prove that other users can see the article (gap G-2).
