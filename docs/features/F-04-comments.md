# F-04: Comments
Status: Draft

## Summary (2 to 3 sentences)
Anyone can read an article's comments, and signed-in users can post comments. Users can delete their own comments but not other people's.

## User story
As a signed-in user, I want to comment on articles, so that I can discuss them with the author and other readers.

## Preconditions
- An article exists.
- To post or delete: the user is signed in.

## Functional requirements (FR-NN)
- FR-01: The article page lists comments from `GET /api/articles/:slug/comments`.
- FR-02: "Write a comment..." plus Post Comment calls `POST /api/articles/:slug/comments`.
- FR-03: The comment author sees a delete control, which calls `DELETE /api/articles/:slug/comments/:id`.
- FR-04: The API rejects a blank body (`422 "can't be blank"`) and returns 403 when a non-author tries to delete.

## Acceptance criteria (AC-NN, each one testable)
- AC-01: Posting a comment shows it under the article with the user's name.
- AC-02: Deleting one's own comment removes it from the list, and it stays gone after a reload.
- AC-03: Posting an empty comment doesn't add a comment.
- AC-04: A user sees no delete control on someone else's comment, and the API returns 403 if they try.

## Out of scope
- Editing comments, threaded replies and moderation (not in the app).

## Open questions
- Open question: does the UI show the 422 error for an empty comment, or ignore the click? [INFERRED: not checked]

## Source files this feature touches
- frontend/src/components/Article/CommentContainer.js, CommentInput.js, CommentList.js, Comment.js, DeleteButton.js
- backend/src/app/routes/article/article.controller.ts, article.service.ts
