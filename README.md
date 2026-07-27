# Union — Frontend (Day 1)

AI student assistant frontend: Mock Interviews, Exam Study Help, Resume Builder.
This checkpoint covers **Day 1: Premium UI & Form Validations**.

## What's in this build

- **Login** (`src/pages/Login.jsx`) and **Signup** (`src/pages/Signup.jsx`) screens,
  built with Material UI, sharing a split-screen `AuthLayout` with a flashcard-stack
  signature visual representing the app's three pillars.
- **Native JS validation** (`src/utils/validation.js`, no external libraries):
  - Email must contain `@` and match a valid email shape.
  - Password: minimum 8 characters, at least one number.
  - Signup also validates full name and confirm-password match, plus a live
    password-strength meter.
- Instant inline errors via MUI `helperText` + `error` state, with a `Snackbar`
  toast on failed submit.
- A placeholder `Dashboard` route so the login flow has somewhere to land
  (full dashboard layout is Day 3).
- Login currently checks credentials against whatever was last saved to
  `localStorage` by Signup — the full mock-database wiring is Day 2's task.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

- `/signup` — create an account (saved to `localStorage` under `union_user`)
- `/login` — log in with that same email/password
- `/dashboard` — lands here after a successful login

## Project structure

```
src/
  pages/
    AuthLayout.jsx   shared split-screen layout + flashcard visual
    Login.jsx
    Signup.jsx
    Dashboard.jsx    placeholder, full build on Day 3
  utils/
    validation.js    pure native-JS validation helpers
  theme.js           MUI theme (colors, type, component overrides)
  App.jsx            routes
  main.jsx           app entry point
```

## Coming next (per the 7-day roadmap)

- Day 2: React Router guards + localStorage mock database
- Day 3: Main dashboard with sidebar navigation
- Day 4: Chat interface layout
- Day 5: Simulated AI reply logic
- Day 6: Chat history persistence
- Day 7: Mobile responsiveness, cleanup, GitHub push
