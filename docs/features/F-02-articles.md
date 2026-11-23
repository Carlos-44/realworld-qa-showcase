# F-02: Articles (publish, edit, delete)
Status: Draft

## Summary (2 to 3 sentences)
Signed-in users write articles in Markdown with a title, a short description and tags. Authors can edit and delete their own articles, and the API enforces required fields and unique titles.

## User story
As a signed-in user, I want to publish and manage my articles, so that I can share writing with others.

## Preconditions
- Signed in.
- For edit and delete: the user is the article's author.

## Functional requirements (FR-NN)
- FR-01: `/editor` has Article Title, "What's this article about?", Body (Markdown) and Tags fields, and calls `POST /api/articles`.
- FR-02: `/editor/:slug` loads an existing article, and saving calls `PUT /api/articles/:slug`.
- FR-03: The article page shows Edit and Delete only to the author, and Delete calls `DELETE /api/articles/:slug`.
- FR-04: The API rejects a blank title, description or body (`422 "can't be blank"`) and a duplicate title (`422 "must be unique"`).
- FR-05: The API returns 403 when a non-author tries to edit or delete.

## Acceptance criteria (AC-NN, each one testable)
- AC-01: Publishing a valid article opens its page, showing the title, body and tags.
- AC-02: Editing an article's title or body and saving shows the updated content on its page.
- AC-03: Deleting an article sends the user away from its page, and the article no longer opens.
- AC-04: Publishing with a blank title, description or body shows "can't be blank" and creates no article.
- AC-05: Publishing with a title that is already used shows "must be unique".
- AC-06: A user who isn't the author sees no Edit or Delete controls on the article.

## Out of scope
- Drafts, scheduling and image upload (not in the app).
- Markdown rendering edge cases.

## Open questions
- Open question: is there a maximum length for title or body? None was found in code [INFERRED].
- Open question: does editing a title change the slug? [INFERRED: likely, based on upstream RealWorld behavior]

## Source files this feature touches
- frontend/src/components/Editor.js, Article/index.js, Article/ArticleActions.js, Article/ArticleMeta.js
- backend/src/app/routes/article/article.controller.ts, article.service.ts
