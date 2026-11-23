# TC-010: User can post a comment on an article

- **Priority:** P2
- **Type:** functional
- **Linked criteria:** F-04 AC-01 ([F-04](../features/F-04-comments.md))
- **Status:** Automated
- **Automation:** e2e/tests/comments.spec.js — "[TC-010] [regression] User can post a comment on an article"

## Preconditions
- A registered user, signed in (tests create one through the API).
- The signed-in user has published an article (created through the API).

## Test data
- Unique user and article data generated through the API by `e2e/tests/helpers.js` at run time.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open the article page. | The step completes without an error. [INFERRED] |
| 2 | Type a comment in "Write a comment...". | The step completes without an error. [INFERRED] |
| 3 | Click "Post Comment". | The comment card shows the text and the user's username. |

**Pass criteria:** The comment card shows the text and the user's username.

## Notes
- Passed in CI: Nightly run 45224943955 (2026-11-23, ubuntu-24.04) 13/13 e2e, and the main CI Smoke Tests after the PR #16 merge. These aren't run locally, because the stack needs Docker, which isn't installed.
- GitHub Issue #10.
