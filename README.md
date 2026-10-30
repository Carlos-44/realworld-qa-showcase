# RealWorld QA Showcase

> A QA automation project built around [RealWorld (Conduit)](https://github.com/gothinkster/realworld), a Medium.com clone: unit, component and end-to-end tests, GitHub Issues as test case management, Docker, and CI/CD with nightly reports.

![CI Pipeline](https://github.com/Carlos-44/realworld-qa-showcase/actions/workflows/ci.yml/badge.svg)
![Nightly QA Pipeline](https://github.com/Carlos-44/realworld-qa-showcase/actions/workflows/nightly.yml/badge.svg)

**[Latest nightly test report](https://carlos-44.github.io/realworld-qa-showcase/reports/nightly/)** · **[Test cases](https://github.com/Carlos-44/realworld-qa-showcase/issues)**

## Pipeline

| Stage | Workflow | What it does |
|---|---|---|
| Unit & Component Tests | `ci.yml` (push, PR) | Vitest and React Testing Library against the app's real components |
| Compile Frontend | `ci.yml` | Production build, kept as an artifact |
| Smoke Tests | `ci.yml` | Starts the full stack with Docker Compose and runs the `[smoke]` tests |
| Build & Push Docker | `ci.yml` (main only) | Pushes images to GitHub Container Registry, only after the smoke tests pass |
| Pipeline Summary | `ci.yml` | Writes a table of stage results to the run page |
| Full E2E Regression | `nightly.yml` (daily at 06:00 UTC, or on demand) | Starts the stack and runs every Playwright test |
| Publish Report | `nightly.yml` | Publishes the HTML report to GitHub Pages |

Test results appear as GitHub Checks through [dorny/test-reporter](https://github.com/dorny/test-reporter). Any failing test fails the pipeline.

## Test Cases

Each test case is a [GitHub Issue](https://github.com/Carlos-44/realworld-qa-showcase/issues) with steps and an expected result. Its `TC-###` ID appears in the name of the automated test, so a failure in a report traces straight back to its issue.

📋 [Test Case Tracker board](https://github.com/users/Carlos-44/projects/1) — view live status of all 14 test cases

| ID | Test case | Area | Tags | Automated in |
|---|---|---|---|---|
| TC-001 | User can register a new account | Auth | smoke | `auth.spec.js` |
| TC-002 | User can log in with valid credentials | Auth | smoke | `auth.spec.js` |
| TC-003 | Login fails with invalid credentials | Auth | regression | `auth.spec.js` |
| TC-004 | User can log out | Auth | regression | `auth.spec.js` |
| TC-005 | User can publish a new article | Articles | smoke | `articles.spec.js` |
| TC-006 | User can edit an existing article | Articles | regression | `articles.spec.js` |
| TC-007 | User can delete an article | Articles | regression | `articles.spec.js` |
| TC-008 | User can favorite an article | Articles | regression | `articles.spec.js` |
| TC-009 | Global feed loads and displays articles | Articles | nightly, e2e | `articles.spec.js` |
| TC-010 | User can post a comment on an article | Comments | regression | `comments.spec.js` |
| TC-011 | User can delete their own comment | Comments | regression | `comments.spec.js` |
| TC-012 | User can update their profile settings | Profile | regression | `profile.spec.js` |
| TC-013 | User profile page displays correct article count | Profile | nightly, e2e | `profile.spec.js` |
| TC-014 | User registration form validates required fields | Auth | unit | `Auth.test.jsx` |

The suite also has 8 more unit and component tests for the login form, the submit button state, `ArticleList` and `ListErrors`.

## Findings

Testing the app turned up behavior worth recording:

- **Registration has no client-side validation.** The form has no `required` attributes and sends blank fields to the API, which returns the errors. TC-014 tests that real flow.
- **New users' articles are hidden from everyone else.** `GET /api/articles` only returns articles by authors flagged `demo`, or the viewer's own. This looks like anti-spam logic from the app's days as a public demo. It's why the tests that read article lists sign in as the author.

## Test Design

- **Tests create their own data through the API.** Each test registers a unique user, so tests don't depend on each other or on shared accounts.
- **The stack runs inside CI.** Tests don't depend on an external demo site, so a failure points to this code.
- **Locators follow what users see.** Tests mostly use roles, placeholders and text.

## Tech Stack

- **Testing:** Playwright, Vitest, React Testing Library
- **App:** React and Redux frontend, Node.js, Express and Prisma backend, PostgreSQL
- **CI/CD:** GitHub Actions, GitHub Container Registry, GitHub Pages
- **Containers:** Docker multi-stage builds, Docker Compose, nginx

## Run It Locally

Requires Docker and Node.js 20.

```bash
# Start the app at http://localhost
docker compose up -d --build

# End-to-end tests
cd e2e
npm ci
npx playwright install chromium
npm test

# Unit and component tests
cd ../frontend
npm ci
npm test
```

## Project Structure

```
frontend/    React app, with unit and component tests in src/__tests__
backend/     Express API
e2e/         Playwright tests
.github/     CI and nightly workflows
```

## Credits

The apps in `frontend/` and `backend/` are the [RealWorld](https://github.com/gothinkster/realworld) example apps by GoThinkster and contributors. Changes made here:

- The API URL now uses a relative `/api` path.
- The build runs on Node 20.
- A small local stylesheet replaces the upstream one, which is no longer hosted.

## Author

Carlos Ozoria — [LinkedIn](https://www.linkedin.com/in/carlos-ozoria-0a292030b)
