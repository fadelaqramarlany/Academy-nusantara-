## 2025-05-14 - Accessible Icon Buttons and Form Labels
**Learning:** Icon-only interactive elements (like mobile menu toggles or social links) are invisible to screen readers without descriptive ARIA labels. Additionally, form inputs without explicit 'id' and 'htmlFor' associations are difficult to navigate for users with assistive technologies.
**Action:** Always ensure all icon buttons have 'aria-label' and form labels are correctly linked to inputs using 'id' and 'htmlFor'. Localize ARIA labels to match the application's primary language.
