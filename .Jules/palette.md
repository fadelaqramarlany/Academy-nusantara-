## 2025-05-15 - [Mobile Menu Accessibility]
**Learning:** Icon-only buttons like mobile menu toggles are often overlooked for screen reader accessibility and tactile feedback, especially in frameworks where state is handled purely in JS.
**Action:** Always include dynamic `aria-label` and `aria-expanded` attributes for toggles, and use `active:scale-95` to provide instant feedback for touch interactions.
