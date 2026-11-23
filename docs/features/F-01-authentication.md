# F-01: Authentication
Status: Draft

## Summary (2 to 3 sentences)
Visitors can create an account, sign in with email and password, and sign out. The API validates input and returns field errors, which the UI shows.

## User story
As a visitor, I want to register and sign in, so that I can publish and interact with articles.

## Preconditions
- The app stack is running at http://localhost.
- For login: an account exists.

## Functional requirements (FR-NN)
- FR-01: `/register` accepts Username, Email and Password and calls `POST /api/users`.
- FR-02: `/login` accepts Email and Password and calls `POST /api/users/login`.
- FR-03: After register or login, the user is signed in and the header shows their username.
- FR-04: The API rejects blank fields with `422 "can't be blank"`, and a taken email or username with `422 "has already been taken"`.
- FR-05: The API rejects a wrong email or password with `403 "email or password is invalid"`.
- FR-06: The Settings page offers logout, which signs the user out on the client.

## Acceptance criteria (AC-NN, each one testable)
- AC-01: Registering with a unique username, email and password signs the user in and shows their username in the header.
- AC-02: Logging in with valid credentials signs the user in and shows their username in the header.
- AC-03: Logging in with a wrong password keeps the user signed out and shows "email or password is invalid".
- AC-04: Clicking "Or click here to logout." signs the user out, and the header shows "Sign in" and "Sign up".
- AC-05: Submitting the registration form with blank fields shows "can't be blank" errors, and the user stays signed out.
- AC-06: Registering with an email or username that is already taken shows "has already been taken".

## Out of scope
- Password reset, email verification and social login (the app has none).
- Token expiry and refresh [INFERRED: not exercised by the UI].

## Open questions
- Open question: should the registration form validate on the client? Today it doesn't (gap G-1).
- Open question: is there a password strength rule? None was found in code [INFERRED].

## Source files this feature touches
- frontend/src/components/Register.js, Login.js, Settings.js, Header.js, ListErrors.js
- backend/src/app/routes/auth/auth.controller.ts, auth.service.ts, token.utils.ts
