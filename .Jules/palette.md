## 2025-05-15 - Accessibility and Tactile Feedback Improvements
**Learning:** Implementing a "Skip to main content" link is a low-effort, high-impact accessibility win for keyboard-only users to bypass navigation. Additionally, mobile menu buttons require explicit ARIA state management (`aria-expanded`, `aria-label`) to be fully functional for screen readers.
**Action:** Always include a skip-link in the root layout and ensure interactive elements provide both ARIA context and tactile feedback (`active:scale-95`).
