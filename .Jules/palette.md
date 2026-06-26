## 2025-05-14 - Inline Success State and Form Accessibility
**Learning:** Replacing disruptive browser `alert()` dialogs with in-page animated success states keeps users in the application flow and provides a more professional, "app-like" experience. Additionally, explicit `id` and `htmlFor` linking is necessary for basic screen reader accessibility and touch-target expansion.
**Action:** Always prefer conditional rendering or toast notifications over browser alerts for form submission feedback, and ensure every form input has a unique ID linked to its label.
