# TC-012: User can update their profile settings

- **Priority:** P2
- **Type:** functional
- **Linked criteria:** F-05 AC-01 ([F-05](../features/F-05-profile-settings.md))
- **Status:** Automated
- **Automation:** e2e/tests/profile.spec.js — "[TC-012] [regression] User can update their profile settings"

## Preconditions
- A registered user, signed in (tests create one through the API).

## Test data
- Unique user and article data generated through the API by `e2e/tests/helpers.js` at run time.

## Steps
| # | Action | Expected result |
|---|---|---|
| 1 | Open /settings. | The step completes without an error. [INFERRED] |
| 2 | Enter a new bio. | The step completes without an error. [INFERRED] |
| 3 | Click "Update Settings". | The step completes without an error. [INFERRED] |
| 4 | Open the user's profile. | The app goes to /, and the profile shows the new bio. |

**Pass criteria:** The app goes to /, and the profile shows the new bio.

## Notes
- Passed in CI: Nightly run 45224943955 (2026-11-23, ubuntu-24.04) 13/13 e2e, and the main CI Smoke Tests after the PR #16 merge. These aren't run locally, because the stack needs Docker, which isn't installed.
- GitHub Issue #12.
