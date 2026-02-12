## 2025-05-22 - Improving Form Accessibility and Feedback
**Learning:** Linking labels to inputs via `htmlFor` and `id` is crucial for screen readers, but also improves UX for all users by making labels clickable. Replacing browser alerts with inline success states (using Framer Motion) significantly improves the perceived quality and delight of the application.
**Action:** Always check for unlinked labels in forms and prefer inline UI feedback over generic browser modals/alerts. Ensure icon-only buttons always have `aria-label`.
