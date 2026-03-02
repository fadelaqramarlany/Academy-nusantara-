## 2025-05-15 - Improving Contact Form UX and Global Accessibility

**Learning:** Replacing native browser alerts with inline success states significantly improves the user experience by maintaining the visual context of the application. Using `framer-motion` for transitions and `canvas-confetti` for celebration adds a "delightful" touch that makes the interaction feel more polished. Additionally, proper label-input association and ARIA labels are essential for ensuring the interface is accessible to all users.

**Action:** Always prefer inline UI success states over native alerts. Ensure all interactive elements have descriptive labels (aria-label or <label>) and use `aria-live` regions to announce dynamic content changes to screen readers.
