# Test cases: traceability

One manual test-case file per test case. TC-001 to TC-014 keep their GitHub Issue IDs (#1 to #14). TC-001 to TC-013 are automated in `e2e/tests/*.spec.js`, and TC-014 in `frontend/src/__tests__/Auth.test.jsx`. TC-015 to TC-029 have no automated test yet.

| TC ID | Status | Automation file | Manual file |
|---|---|---|---|
| TC-001 | Automated | `e2e/tests/auth.spec.js` | [TC-001-user-can-register-a-new-account.md](TC-001-user-can-register-a-new-account.md) |
| TC-002 | Automated | `e2e/tests/auth.spec.js` | [TC-002-user-can-log-in-with-valid.md](TC-002-user-can-log-in-with-valid.md) |
| TC-003 | Automated | `e2e/tests/auth.spec.js` | [TC-003-login-fails-with-invalid-credentials.md](TC-003-login-fails-with-invalid-credentials.md) |
| TC-004 | Automated | `e2e/tests/auth.spec.js` | [TC-004-user-can-log-out.md](TC-004-user-can-log-out.md) |
| TC-005 | Automated | `e2e/tests/articles.spec.js` | [TC-005-user-can-publish-a-new-article.md](TC-005-user-can-publish-a-new-article.md) |
| TC-006 | Automated | `e2e/tests/articles.spec.js` | [TC-006-user-can-edit-an-existing-article.md](TC-006-user-can-edit-an-existing-article.md) |
| TC-007 | Automated | `e2e/tests/articles.spec.js` | [TC-007-user-can-delete-an-article.md](TC-007-user-can-delete-an-article.md) |
| TC-008 | Automated | `e2e/tests/articles.spec.js` | [TC-008-user-can-favorite-an-article.md](TC-008-user-can-favorite-an-article.md) |
| TC-009 | Automated | `e2e/tests/articles.spec.js` | [TC-009-global-feed-loads-and-displays-articles.md](TC-009-global-feed-loads-and-displays-articles.md) |
| TC-010 | Automated | `e2e/tests/comments.spec.js` | [TC-010-user-can-post-a-comment-on.md](TC-010-user-can-post-a-comment-on.md) |
| TC-011 | Automated | `e2e/tests/comments.spec.js` | [TC-011-user-can-delete-their-own-comment.md](TC-011-user-can-delete-their-own-comment.md) |
| TC-012 | Automated | `e2e/tests/profile.spec.js` | [TC-012-user-can-update-their-profile-settings.md](TC-012-user-can-update-their-profile-settings.md) |
| TC-013 | Automated | `e2e/tests/profile.spec.js` | [TC-013-user-profile-page-displays-correct-article.md](TC-013-user-profile-page-displays-correct-article.md) |
| TC-014 | Automated | `frontend/src/__tests__/Auth.test.jsx` | [TC-014-user-registration-form-validates-required-fields.md](TC-014-user-registration-form-validates-required-fields.md) |
| TC-015 | Not started | — | [TC-015-registration-rejects-an-email-or-username.md](TC-015-registration-rejects-an-email-or-username.md) |
| TC-016 | Not started | — | [TC-016-publishing-with-a-blank-title-description.md](TC-016-publishing-with-a-blank-title-description.md) |
| TC-017 | Not started | — | [TC-017-publishing-a-duplicate-title-is-rejected.md](TC-017-publishing-a-duplicate-title-is-rejected.md) |
| TC-018 | Not started | — | [TC-018-a-non-author-sees-no-edit.md](TC-018-a-non-author-sees-no-edit.md) |
| TC-019 | Not started | — | [TC-019-user-can-unfavorite-an-article.md](TC-019-user-can-unfavorite-an-article.md) |
| TC-020 | Not started | — | [TC-020-favorited-article-appears-on-the-favorited.md](TC-020-favorited-article-appears-on-the-favorited.md) |
| TC-021 | Not started | — | [TC-021-signed-out-visitor-cannot-favorite.md](TC-021-signed-out-visitor-cannot-favorite.md) |
| TC-022 | Not started | — | [TC-022-an-empty-comment-is-not-posted.md](TC-022-an-empty-comment-is-not-posted.md) |
| TC-023 | Not started | — | [TC-023-a-user-cannot-delete-someone-else.md](TC-023-a-user-cannot-delete-someone-else.md) |
| TC-024 | Not started | — | [TC-024-user-can-follow-and-unfollow-another.md](TC-024-user-can-follow-and-unfollow-another.md) |
| TC-025 | Not started | — | [TC-025-changing-username-to-a-taken-one.md](TC-025-changing-username-to-a-taken-one.md) |
| TC-026 | Not started | — | [TC-026-tag-filter-shows-only-matching-articles.md](TC-026-tag-filter-shows-only-matching-articles.md) |
| TC-027 | Not started | — | [TC-027-global-feed-paginates-at-10-per.md](TC-027-global-feed-paginates-at-10-per.md) |
| TC-028 | Not started | — | [TC-028-your-feed-shows-articles-from-followed.md](TC-028-your-feed-shows-articles-from-followed.md) |
| TC-029 | Not started | — | [TC-029-non-demo-author-s-article-is.md](TC-029-non-demo-author-s-article-is.md) |

Totals: 29 test cases — 14 Automated, 0 Manual only, 15 Not started.

Notes:
- TC-015 to TC-029: no new e2e tests were written, because verifying them locally needs Docker (a system install). They stay Not started until they can be run.
