A simple Task Manager built with React + TypeScript that demonstrates frontend patterns like feature-based architecture, Redux state management, API mocking, and local persistence(for authentication).

This project includes, a clean UI and reusable code.

Tech Stack includes:
  React (Vite)
  TypeScript
  Redux Toolkit
  React Router
  Tailwind CSS
  React library - React Icons (for UI icons)
  MSW (Mock Service Worker) for API mocking
  LocalStorage for persistence(auth persistence)

Steps to run the project -
  1. Clone the repo
    git clone <repo-url>
    cd <project-folder>

  2. Install dependencies
    npm install

  3. Start the development server
    npm run dev

    The app will run at:
    http://localhost:5173

How Mocking Works:
  This project does not depend on a real backend. Instead, it uses Mock Service Worker (MSW) to simulate the APIs.

What happens behind the scenes is:
  API calls like:
    GET /tasks
    POST /tasks
    PUT /tasks/:id
    DELETE /tasks/:id
      are intercepted by MSW.
      Responses are returned from mock handlers located in:

src/mocks/
  handlers.ts
  browser.ts

How it starts
  1. MSW is initialized in main.tsx during development.
  2. It runs a service worker.
  3. Intercepts fetch requests.
  4. Returns the mock data.

  This allows:
    1. Frontend development without backend.
    2. Realistic API behavior.

State Persistence - The project uses Redux Toolkit for state management.

  "Auth"
    Login state is stored in localStorage.
    User stays logged in, after refresh.

Project Structure Highlights are as follows:

  features/
    Contains Redux slices and business logic.
    Each feature is isolated and scalable.

  components/
    Reusable UI components.

  hooks/
    Custom hooks for cleaner component logic.

  mocks/
    API simulation using MSW.

  route/
    Protected routing logic for authenticated pages.

Styling:
The UI is built using Tailwind CSS.
  1. Utility-first styling.
  2. Responsive layout.
  3. Minimal custom CSS.

Key Features:
  1. Login with persistent session.
  2. Protected routes.
  3. Create, edit, delete, and toggle tasks.
  4. Mocked backend using MSW.
  6. Clean and reusable component structure.
  7. System-wide Dark Mode with Tailwind (class-based) and persistent theme         preference

Why This Setup?

The goal of this project was to have the following:
  1. Feature-based architecture.
  2. Clean Redux patterns.
  3. Local persistence strategies.
  4. API abstraction.
  5. Mock-driven development.
  6. Scalable folder structure.

This structure makes it easy to:
  1. Add new features.
  2. Replace mocks with real APIs.
  3. Scale the project further.
