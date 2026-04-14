## 2026-04-09 - Enhance Contact Form Accessibility and Feedback

**Learning:** Replacing native `alert()` with an inline animated success state significantly improves the "flow" of a web application, making it feel more professional and less disruptive. Proper form accessibility (label-input association) is a foundational requirement that often gets overlooked in rapid development.

**Action:** Always check for `alert()` calls in form handlers and replace them with state-driven UI. Ensure all inputs have associated labels via `id` and `htmlFor`. Add tactile feedback (`active:scale-95`) to all major action buttons.
