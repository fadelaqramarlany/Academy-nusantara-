## 2025-05-15 - [Contact Form Accessibility and Success State]
**Learning:** Browser `alert()` is jarring and disrupts the user flow. Replacing it with an inline success state, combined with proper ARIA attributes (`role="status"`, `aria-live="polite"`), significantly improves both UX and accessibility.
**Action:** Always prefer inline success states over native alerts. Ensure labels are correctly linked to inputs using `htmlFor` and `id` to provide larger click targets and better screen reader support. Use `active:scale-95` for immediate tactile feedback on buttons.
