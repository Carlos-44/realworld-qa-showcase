# F-05: Profile and settings
Status: Draft

## Summary (2 to 3 sentences)
Each user has a public profile at `/@username` showing their image, bio and articles, with a tab for favorites. Signed-in users can follow other users and edit their own settings.

## User story
As a user, I want a profile I can edit, and to follow other writers, so that others know who I am and I can keep up with authors I like.

## Preconditions
- For settings and follow: the user is signed in.

## Functional requirements (FR-NN)
- FR-01: `/@:username` loads `GET /api/profiles/:username` and lists the user's articles (`?author=`), 5 per page.
- FR-02: `/settings` edits the image URL, username, bio, email and new password through `PUT /api/user`.
- FR-03: Follow and Unfollow on another user's profile call `POST` and `DELETE /api/profiles/:username/follow`.
- FR-04: The API returns 404 for an unknown username.

## Acceptance criteria (AC-NN, each one testable)
- AC-01: Saving new settings (for example the bio) shows the new values on the user's profile.
- AC-02: A user's profile lists all of their own articles, with the correct count.
- AC-03: Following a user changes the button to Unfollow, and unfollowing changes it back.
- AC-04: Changing the username to one that is already taken shows an error, and the username doesn't change [INFERRED: the API checks uniqueness].

## Out of scope
- Image upload (only a URL field), and account deletion.

## Open questions
- Open question: because of gap G-2, does another user viewing a non-demo profile see an empty article list?

## Source files this feature touches
- frontend/src/components/Profile.js, ProfileFavorites.js, Settings.js
- backend/src/app/routes/profile/profile.controller.ts, profile.service.ts, auth/auth.service.ts (update user)
