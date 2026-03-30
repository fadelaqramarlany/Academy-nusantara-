## 2026-03-29 - [Accessibility Foundation]
**Learning:** The application lacked foundational accessibility features such as a "Skip to main content" link and ARIA labels for icon-only interactive elements (mobile menu toggle, social links). Additionally, the React application failed to mount due to a missing script tag in `index.html`.
**Action:** Always implement a "Skip to main content" link as the first focusable element. Ensure all icon-only buttons have descriptive `aria-label` attributes. Verify that `index.html` correctly points to the application entry point (`index.tsx`).
