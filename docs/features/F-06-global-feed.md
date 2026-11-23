# F-06: Global feed and tags
Status: Draft

## Summary (2 to 3 sentences)
The home page lists articles in a Global Feed, a personal "Your Feed" of followed authors, and a tag filter, 10 per page. The global list only includes articles by demo authors or by the viewer (gap G-2).

## User story
As a reader, I want to browse recent articles and filter by tag, so that I can find something to read.

## Preconditions
- At least one article by a demo author exists (seed data) [INFERRED].

## Functional requirements (FR-NN)
- FR-01: The Global Feed tab loads `GET /api/articles?limit=10&offset=N`.
- FR-02: The Your Feed tab (signed in) loads `GET /api/articles/feed`, with articles by followed authors.
- FR-03: Clicking a popular tag adds a `#tag` tab and loads `?tag=`.
- FR-04: Pagination shows pages of 10.
- FR-05: The API returns only articles whose author has `demo = true`, or the viewer's own.

## Acceptance criteria (AC-NN, each one testable)
- AC-01: The Global Feed shows a list of article previews with title, author and date.
- AC-02: Clicking a tag shows only articles with that tag.
- AC-03: With more than 10 articles, the first page shows 10, and page 2 shows the next ones.
- AC-04: After following an author, Your Feed shows that author's articles.
- AC-05: An article by a new (non-demo) user doesn't appear in another user's Global Feed. This is current behavior, documented as gap G-2.

## Out of scope
- Search and sorting options (not in the app).

## Open questions
- Open question: is G-2 intended (anti-spam) or a bug? This decides whether AC-05 stays or flips.

## Source files this feature touches
- frontend/src/components/Home/MainView.js, Home/Tags.js, ArticleList.js, ListPagination.js, agent.js
- backend/src/app/routes/article/article.service.ts (buildFindAllQuery, getFeed), tag/tag.service.ts
