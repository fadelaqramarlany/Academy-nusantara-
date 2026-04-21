## 2026-04-09 - Registration Form Micro-UX

**Learning:** The registration form on the Home page used native `alert()` for success feedback and lacked proper accessibility associations (labels/inputs). Improving this with an inline success state using Framer Motion and standard ARIA practices significantly elevates the professional feel and accessibility of the app.

**Action:** Replace `alert()` with an animated success state in `Home.tsx`, add `id`/`htmlFor` to form elements, and include tactile feedback on the submit button.
