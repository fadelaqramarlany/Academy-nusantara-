## 2026-04-09 - [Form Accessibility and Feedback]
**Learning:** Replacing native `alert()` with an inline success state significantly improves the flow and professionalism of the application. Properly associating labels with inputs using `id` and `htmlFor` is essential for screen reader support and improves the clickable area for all users.
**Action:** Always check for native `alert()` usage in forms and replace them with animated success states. Ensure all form fields have semantic labels with `htmlFor` matching the input `id`.
