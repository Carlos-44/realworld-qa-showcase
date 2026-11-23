# 00 Baseline spec: Conduit (RealWorld)

Status: Draft
Date: 2026-11-23
Source: read from code on `fix/e2e-lockfile` and from README.md. Items marked [INFERRED] were deduced from code, not read from a written spec.

## Purpose
Conduit is a Medium-style blogging app. Users sign up, publish articles in Markdown, tag them, favorite and comment on other people's articles, and follow authors. In this repo it serves as the system under test for a QA showcase.

## User roles
| Role | Can do |
|---|---|
| Visitor (signed out) | Read the global feed (demo authors only), open articles, read comments, view profiles, filter by tag |
| Registered user | Everything a visitor can do, plus: publish, edit and delete own articles; favorite; comment and delete own comments; follow; edit settings; log out; see "Your Feed" |
| Demo author | A user with `demo = true` in the database. Only their articles appear in other people's lists [INFERRED: set by seed data, not by any UI] |

## Main flows
1. **Register:** `/register` (Username, Email, Password), calls `POST /api/users`.
2. **Log in:** `/login` (Email, Password), calls `POST /api/users/login`. The JWT is kept by the client [INFERRED: localStorage].
3. **Log out:** Settings page, "Or click here to logout." (client-side only).
4. **Publish and edit an article:** `/editor` and `/editor/:slug` (Title, About, Body in Markdown, Tags), calling `POST` or `PUT /api/articles[/:slug]`.
5. **Delete an article:** a button on the article page (author only), calling `DELETE /api/articles/:slug`.
6. **Favorite:** a heart button, calling `POST` or `DELETE /api/articles/:slug/favorite`.
7. **Comment:** on `/article/:slug`, calling `GET`, `POST` or `DELETE /api/articles/:slug/comments[/:id]`.
8. **Profile and follow:** `/@:username` and `/@:username/favorites`, calling `GET /api/profiles/:username` and `POST` or `DELETE .../follow`.
9. **Settings:** `/settings` (image URL, username, bio, email, new password), calling `PUT /api/user`.
10. **Feeds:** the home page has "Your Feed" (`/api/articles/feed`), "Global Feed" (`/api/articles`) and a tag filter tab (`?tag=`), with 10 per page. Profile lists show 5 per page.

## Data
- **Model (Prisma, PostgreSQL):**
  - **User:** email and username unique; password; image; bio; `demo` flag.
  - **Article:** unique slug; title, description, body; tags; favorites; comments.
  - **Comment**, **Tag**, and the **Follow** relation.
- **Inputs:** form fields as listed above. The API trims and checks for blanks on email, username and password (`422 "can't be blank"`), and on article title, description and body. Article titles must be unique (`422 "must be unique"`).
- **Errors:**
  - `422`: validation failed, or the email or username is already taken.
  - `403`: invalid login, or someone other than the owner tries to edit or delete.
  - `404`: unknown article, comment or profile.
- **Outputs:** JSON in the RealWorld API shape [INFERRED: matches the upstream RealWorld spec].

## Integrations
- **Runtime stack:** nginx serves the frontend and proxies `/api` to Express. The stack runs with Docker Compose.
- **CI and reporting:** GitHub Actions (`ci.yml`, `nightly.yml`), GitHub Container Registry, and GitHub Pages for the nightly HTML report.
- **Test case tracker:** GitHub Issues hold TC-001 to TC-014, and a GitHub Project board shows their status.

## Existing tests
- **E2E (Playwright, JavaScript):** `e2e/tests/*.spec.js` covers TC-001 to TC-013. Cucumber features in `e2e/features/` aren't run in CI.
- **Frontend (Vitest + RTL):** `Auth.test.jsx` (includes TC-014) and `ArticleList.test.jsx`. The README says there are 8 more unit and component tests.
- **Backend:** service unit tests in `backend/src/tests/` [INFERRED: Jest with a Prisma mock; not run in CI].

## Known gaps (not yet verified as bugs)
- **G-1: registration has no client-side validation.** The form has no `required` attributes and sends blank fields to the API, which returns the 422 errors (README, TC-014).
- **G-2: new users' articles are hidden from everyone else.** `GET /api/articles` only returns articles whose author has `demo = true`, or the viewer's own (`buildFindAllQuery` in `article.service.ts`). This likely affects the global feed, tag filters and other users' profile pages [INFERRED].
- **G-3: comment deletion.** It's unconfirmed whether the UI hides the delete button on other users' comments; the API returns 403 [INFERRED].
- **G-4: no rate limiting or password rules** beyond the not-blank check [INFERRED].
