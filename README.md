# SIT313 P4 Login and Registration

This project uses Firebase Authentication and Cloud Firestore together.

When a new user signs up:
- Firebase Authentication creates the account so it appears under Authentication > Users.
- Firestore creates a `users` document with the user's uid name and email.

When a user logs in:
- Firebase Authentication checks the email and password.
- The user is redirected to the home page.

When the user logs out:
- Firebase signs the user out.
- The header shows Login again.

## Run

npm install
npm run dev

The Firebase configuration is read from `.env`.
Do not commit `.env` to GitHub or GitLab.
