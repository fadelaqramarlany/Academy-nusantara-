## 2025-05-14 - [Contact Form Accessibility & Submission Feedback]
**Learning:** Linking labels to inputs via `htmlFor` and `id` is a fundamental accessibility win that is often overlooked in rapid development but provides immediate value for screen readers and touch target size. Replacing native `alert` with a state-driven success UI significantly improves the "flow" of the application and keeps the user within the branded experience.
**Action:** Always check for missing `id`/`htmlFor` associations in forms and prefer inline UI success states over native browser alerts.
