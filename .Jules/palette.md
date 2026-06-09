## 2025-05-15 - Registration Form UX & A11y
**Learning:** Replaced a generic browser alert with an inline success state using Framer Motion for entrance, providing a more modern and delightful experience. Linked labels to inputs using `htmlFor` and `id` to fix accessibility gaps for screen readers. Added tactile feedback using `active:scale-95` to buttons.
**Action:** Always check if forms use native alerts for success feedback and replace them with in-page components that offer a "reset" or "return" path. Ensure every form input is programmatically associated with its label.
