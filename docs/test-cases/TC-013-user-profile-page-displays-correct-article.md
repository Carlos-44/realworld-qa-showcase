# TC-013: User profile page displays correct article count

- **Priority:** P2
- **Type:** functional
- **Linked criteria:** F-05 AC-02
- **Status:** Automated
- **Automation:** e2e/tests/profile.spec.js — "[TC-013] [nightly] [e2e] User profile page displays correct article count"

## Preconditions
- A registered user, signed in (tests create one through the API).
- The user has published 2 articles.

## Test data
- Unique user and article data generated through the API by `e2e/tests/helpers.js` at run time.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open /@<username>. | Exactly 2 article previews show, with both titles. |

**Pass criteria:** Exactly 2 article previews show, with both titles.

## Notes
- Passed in CI: Nightly run 45224943955 (2026-11-23, ubuntu-24.04) 13/13 e2e, and the main CI Smoke Tests after the PR #16 merge. These aren't run locally, because the stack needs Docker, which isn't installed.
- GitHub Issue #13.
