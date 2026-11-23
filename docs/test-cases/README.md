# Test cases: traceability

One manual test-case file per test case. TC-001 to TC-014 keep their GitHub Issue IDs (#1 to #14). TC-001 to TC-013 are automated in `e2e/tests/*.spec.js`, and TC-014 in `frontend/src/__tests__/Auth.test.jsx`. TC-015 to TC-029 have no automated test yet.

| TC ID | Feature | Status | Automation file — test name | Manual file |
|---|---|---|---|---|
| TC-001 | [F-01](../features/F-01-authentication.md) | Automated | `e2e/tests/auth.spec.js` — [TC-001] [smoke] User can register a new account | [TC-001-user-can-register-a-new-account.md](TC-001-user-can-register-a-new-account.md) |
| TC-002 | [F-01](../features/F-01-authentication.md) | Automated | `e2e/tests/auth.spec.js` — [TC-002] [smoke] User can log in with valid credentials | [TC-002-user-can-log-in-with-valid.md](TC-002-user-can-log-in-with-valid.md) |
| TC-003 | [F-01](../features/F-01-authentication.md) | Automated | `e2e/tests/auth.spec.js` — [TC-003] [regression] Login fails with invalid credentials | [TC-003-login-fails-with-invalid-credentials.md](TC-003-login-fails-with-invalid-credentials.md) |
| TC-004 | [F-01](../features/F-01-authentication.md) | Automated | `e2e/tests/auth.spec.js` — [TC-004] [regression] User can log out | [TC-004-user-can-log-out.md](TC-004-user-can-log-out.md) |
| TC-005 | [F-02](../features/F-02-articles.md) | Automated | `e2e/tests/articles.spec.js` — [TC-005] [smoke] User can publish a new article | [TC-005-user-can-publish-a-new-article.md](TC-005-user-can-publish-a-new-article.md) |
| TC-006 | [F-02](../features/F-02-articles.md) | Automated | `e2e/tests/articles.spec.js` — [TC-006] [regression] User can edit an existing article | [TC-006-user-can-edit-an-existing-article.md](TC-006-user-can-edit-an-existing-article.md) |
| TC-007 | [F-02](../features/F-02-articles.md) | Automated | `e2e/tests/articles.spec.js` — [TC-007] [regression] User can delete an article | [TC-007-user-can-delete-an-article.md](TC-007-user-can-delete-an-article.md) |
| TC-008 | [F-03](../features/F-03-favorites.md) | Automated | `e2e/tests/articles.spec.js` — [TC-008] [regression] User can favorite an article | [TC-008-user-can-favorite-an-article.md](TC-008-user-can-favorite-an-article.md) |
| TC-009 | [F-06](../features/F-06-global-feed.md) | Automated | `e2e/tests/articles.spec.js` — [TC-009] [nightly] [e2e] Global feed loads and displays articles | [TC-009-global-feed-loads-and-displays-articles.md](TC-009-global-feed-loads-and-displays-articles.md) |
| TC-010 | [F-04](../features/F-04-comments.md) | Automated | `e2e/tests/comments.spec.js` — [TC-010] [regression] User can post a comment on an article | [TC-010-user-can-post-a-comment-on.md](TC-010-user-can-post-a-comment-on.md) |
| TC-011 | [F-04](../features/F-04-comments.md) | Automated | `e2e/tests/comments.spec.js` — [TC-011] [regression] User can delete their own comment | [TC-011-user-can-delete-their-own-comment.md](TC-011-user-can-delete-their-own-comment.md) |
| TC-012 | [F-05](../features/F-05-profile-settings.md) | Automated | `e2e/tests/profile.spec.js` — [TC-012] [regression] User can update their profile settings | [TC-012-user-can-update-their-profile-settings.md](TC-012-user-can-update-their-profile-settings.md) |
| TC-013 | [F-05](../features/F-05-profile-settings.md) | Automated | `e2e/tests/profile.spec.js` — [TC-013] [nightly] [e2e] User profile page displays correct article count | [TC-013-user-profile-page-displays-correct-article.md](TC-013-user-profile-page-displays-correct-article.md) |
| TC-014 | [F-01](../features/F-01-authentication.md) | Automated | `frontend/src/__tests__/Auth.test.jsx` — Register form › [TC-014] [unit] … | [TC-014-user-registration-form-validates-required-fields.md](TC-014-user-registration-form-validates-required-fields.md) |
| TC-015 | [F-01](../features/F-01-authentication.md) | Not started | — | [TC-015-registration-rejects-an-email-or-username.md](TC-015-registration-rejects-an-email-or-username.md) |
| TC-016 | [F-02](../features/F-02-articles.md) | Not started | — | [TC-016-publishing-with-a-blank-title-description.md](TC-016-publishing-with-a-blank-title-description.md) |
| TC-017 | [F-02](../features/F-02-articles.md) | Not started | — | [TC-017-publishing-a-duplicate-title-is-rejected.md](TC-017-publishing-a-duplicate-title-is-rejected.md) |
| TC-018 | [F-02](../features/F-02-articles.md) | Not started | — | [TC-018-a-non-author-sees-no-edit.md](TC-018-a-non-author-sees-no-edit.md) |
| TC-019 | [F-03](../features/F-03-favorites.md) | Not started | — | [TC-019-user-can-unfavorite-an-article.md](TC-019-user-can-unfavorite-an-article.md) |
| TC-020 | [F-03](../features/F-03-favorites.md) | Not started | — | [TC-020-favorited-article-appears-on-the-favorited.md](TC-020-favorited-article-appears-on-the-favorited.md) |
| TC-021 | [F-03](../features/F-03-favorites.md) | Not started | — | [TC-021-signed-out-visitor-cannot-favorite.md](TC-021-signed-out-visitor-cannot-favorite.md) |
| TC-022 | [F-04](../features/F-04-comments.md) | Not started | — | [TC-022-an-empty-comment-is-not-posted.md](TC-022-an-empty-comment-is-not-posted.md) |
| TC-023 | [F-04](../features/F-04-comments.md) | Not started | — | [TC-023-a-user-cannot-delete-someone-else.md](TC-023-a-user-cannot-delete-someone-else.md) |
| TC-024 | [F-05](../features/F-05-profile-settings.md) | Not started | — | [TC-024-user-can-follow-and-unfollow-another.md](TC-024-user-can-follow-and-unfollow-another.md) |
| TC-025 | [F-05](../features/F-05-profile-settings.md) | Not started | — | [TC-025-changing-username-to-a-taken-one.md](TC-025-changing-username-to-a-taken-one.md) |
| TC-026 | [F-06](../features/F-06-global-feed.md) | Not started | — | [TC-026-tag-filter-shows-only-matching-articles.md](TC-026-tag-filter-shows-only-matching-articles.md) |
| TC-027 | [F-06](../features/F-06-global-feed.md) | Not started | — | [TC-027-global-feed-paginates-at-10-per.md](TC-027-global-feed-paginates-at-10-per.md) |
| TC-028 | [F-06](../features/F-06-global-feed.md) | Not started | — | [TC-028-your-feed-shows-articles-from-followed.md](TC-028-your-feed-shows-articles-from-followed.md) |
| TC-029 | [F-06](../features/F-06-global-feed.md) | Not started | — | [TC-029-non-demo-author-s-article-is.md](TC-029-non-demo-author-s-article-is.md) |

Totals: 29 test cases — 14 Automated, 0 Manual only, 15 Not started.

Notes:
- TC-015 to TC-029: no new e2e tests were written, because verifying them locally needs Docker (a system install). They stay Not started until they can be run.
