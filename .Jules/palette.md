## 2026-04-09 - Improving Registration Form UX and Accessibility

**Learning:** Replacing native browser `alert()` with inline success states significantly improves the user experience by maintaining the visual context of the application. Proper label-input linking via `htmlFor` and `id` is a fundamental accessibility requirement that is often overlooked in fast-paced development.

**Action:** Implement an inline Framer Motion success state for the registration form in `pages/Home.tsx`, link all labels to their respective inputs, and add tactile feedback to interactive elements.
