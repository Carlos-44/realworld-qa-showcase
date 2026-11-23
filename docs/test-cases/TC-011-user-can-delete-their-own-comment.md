# TC-011: User can delete their own comment

- **Priority:** P2
- **Type:** functional
- **Linked criteria:** F-04 AC-02 ([F-04](../features/F-04-comments.md))
- **Status:** Automated
- **Automation:** e2e/tests/comments.spec.js — "[TC-011] [regression] User can delete their own comment"

## Preconditions
- A registered user, signed in (tests create one through the API).
- The signed-in user has published an article (created through the API).
- The user has posted a comment on it.

## Test data
- Unique user and article data generated through the API by `e2e/tests/helpers.js` at run time.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Click the trash icon on the comment. | The comment is removed from the list. |

**Pass criteria:** The comment is removed from the list.

## Notes
- Passed in CI: Nightly run 45224943955 (2026-11-23, ubuntu-24.04) 13/13 e2e, and the main CI Smoke Tests after the PR #16 merge. These aren't run locally, because the stack needs Docker, which isn't installed.
- GitHub Issue #11.
- The test doesn't reload to confirm the delete persisted, which AC-02 asks for.
