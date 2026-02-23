## 2026-02-23 - Form Accessibility and Integrated Feedback
**Learning:** Using native `alert()` for form submission feedback is poor UX and breaks the application's flow. Explicitly linking labels to inputs via `htmlFor` and `id` is crucial for accessibility, especially when labels are styled as decorative text.
**Action:** Always prefer inline success states with `framer-motion` for a smoother experience, and ensure all form elements have proper ARIA associations.
