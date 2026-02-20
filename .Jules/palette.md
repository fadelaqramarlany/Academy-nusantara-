## 2025-05-14 - Inline Form Feedback vs Native Alerts
**Learning:** Native browser alerts are disruptive and often lack the visual context of the application's design system. Replacing them with inline success states using Framer Motion and ARIA status roles provides a more integrated, pleasant, and accessible experience.
**Action:** Use AnimatePresence for smooth transitions between form states and ensure success messages have `role="status"` and `aria-live="polite"` to notify screen reader users.
