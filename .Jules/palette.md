## 2026-02-09 - [Missing Entry Script in index.html]
**Learning:** The application was missing the entry script tag (`<script type="module" src="/index.tsx"></script>`) in `index.html`, causing a blank page in development. Even though the project uses an importmap, Vite still needs an entry point to be explicitly declared in the HTML to start the React application.
**Action:** Always verify that `index.html` contains the correct entry script tag when debugging a blank app.

## 2026-02-09 - [Mobile Visibility of Progress Indicators]
**Learning:** Using Tailwind classes like `hidden sm:block` for progress indicators can hide critical UX context for mobile users. In a quiz application, progress is just as important, if not more, on mobile devices where cognitive load is higher.
**Action:** Use responsive classes that ensure visibility on small screens (e.g., `text-xs sm:text-base`) rather than hiding them entirely, unless they are truly non-essential.
