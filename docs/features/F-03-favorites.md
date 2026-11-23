# F-03: Favorites
Status: Draft

## Summary (2 to 3 sentences)
Signed-in users can favorite and unfavorite articles with the heart button. Each article shows a favorites count, and a profile's Favorited Articles tab lists what that user has favorited.

## User story
As a signed-in user, I want to favorite articles, so that I can find them again and show appreciation.

## Preconditions
- An article exists that the user can see.

## Functional requirements (FR-NN)
- FR-01: The heart button calls `POST /api/articles/:slug/favorite` to favorite and `DELETE` on the same path to unfavorite.
- FR-02: The button shows the favorites count and reflects whether the user has favorited the article.
- FR-03: `/@:username/favorites` lists the articles that user has favorited (`?favorited=`), 5 per page.

## Acceptance criteria (AC-NN, each one testable)
- AC-01: Clicking the heart on an article the user hasn't favorited raises its count by 1 and marks it as favorited.
- AC-02: Clicking the heart again lowers the count by 1 and clears the favorited state.
- AC-03: A favorited article appears on the user's Favorited Articles tab.
- AC-04: A signed-out visitor who clicks the heart isn't able to favorite the article [INFERRED: the UI redirects to /login].

## Out of scope
- Favoriting comments.

## Open questions
- Open question: because of gap G-2, can a user favorite another non-demo user's article through the UI? It may never appear in their lists.

## Source files this feature touches
- frontend/src/components/ArticlePreview.js, ProfileFavorites.js, Article/ArticleActions.js
- backend/src/app/routes/article/article.controller.ts, article.service.ts
