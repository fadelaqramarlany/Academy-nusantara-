# Palette's Journal - Academy Nusantara UX/Accessibility Learnings

## 2025-05-15 - Form Accessibility and Tactile Feedback
**Learning:** For form accessibility, prefer using explicit `<label>` elements linked to inputs via `htmlFor` and `id` attributes, supplemented by `aria-label` for added clarity when needed. Tactile feedback for buttons can be implemented using Tailwind's `active:scale-95` and `transition-transform` classes to provide immediate visual response to user clicks.
**Action:** Always link labels and inputs, and add tactile feedback to primary action buttons.

## 2025-05-15 - Scope Management for Form Refactors
**Learning:** Refactoring complex form components to include animations and success states frequently exceeds Palette's 50-line change limit; to ensure approval, prioritize surgical accessibility fixes or smaller visual tweaks over major logic refactors.
**Action:** Keep form enhancements focused and under 50 lines by using surgical fixes.

## 2025-05-15 - Success State Accessibility
**Learning:** When implementing inline success messages that replace form content, include `role="status"` and `aria-live="polite"` to ensure screen readers are notified of the state change.
**Action:** Use proper ARIA roles for dynamic content updates.
