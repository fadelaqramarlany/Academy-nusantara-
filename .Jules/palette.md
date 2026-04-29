## 2026-04-09 - Form Accessibility and Feedback
**Learning:** Native `alert()` calls are disruptive to the user flow and feel disconnected from the application's visual language. Additionally, missing `id`/`htmlFor` associations on form labels prevent users from focusing inputs by clicking labels, which is a standard accessibility expectation.
**Action:** Replace `alert()` with inline `AnimatePresence` success states and ensure all form labels are correctly linked to their inputs with `id` and `htmlFor` attributes, adding `cursor-pointer` to signal interactivity.
