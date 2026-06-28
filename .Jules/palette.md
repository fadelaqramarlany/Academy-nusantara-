# Palette's Journal - UX & Accessibility Learnings

## 2025-05-14 - Global Navigation Accessibility & Tactile Feedback
**Learning:** Icon-only buttons and social links require explicit ARIA labels and focus states to be accessible. A 'Skip to main content' link is essential for keyboard-only users in SPAs with persistent sidebars or navbars.
**Action:** Always include a Skip Link in the root App component and ensure all icon-only interactive elements have `aria-label` and `focus-visible` styles.
