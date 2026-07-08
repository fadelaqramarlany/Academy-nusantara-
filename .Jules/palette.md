## 2026-07-08 - [Skip Link & Mobile A11y]
**Learning:** In a navigation-heavy single-page application (SPA), providing a 'Skip to Content' link is critical for keyboard users to bypass redundant navigation. Additionally, mobile menu toggles must explicitly communicate their state (aria-expanded) and purpose (dynamic aria-label) to screen readers.
**Action:** Always include a hidden-until-focused 'Skip to content' link targeting the main element, and ensure all icon-only toggles have descriptive, state-aware ARIA attributes.
