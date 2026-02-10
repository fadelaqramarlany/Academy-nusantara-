## 2025-05-14 - [Form Accessibility & Delight]
**Learning:** Registration forms in this app initially relied on placeholders and browser alerts, which is poor for accessibility and breaks the high-end visual immersion. Using `htmlFor` with `id` ensures screen reader compatibility, while `AnimatePresence` provides a smooth feedback loop that matches the app's premium feel.
**Action:** Always check for label-input associations in new forms and replace jarring browser alerts with in-app success states using the existing `framer-motion` patterns.
