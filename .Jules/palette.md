## 2025-05-15 - [Enhancing Form Feedback and Global Accessibility]
**Learning:** Replacing native browser alerts with inline, animated success states significantly improves the "delight" factor of an application. Additionally, ensuring that interactive elements like mobile menu toggles have descriptive ARIA labels is a critical but often overlooked aspect of mobile accessibility.
**Action:** Always check for native `alert()` calls in form handlers and propose replacing them with `framer-motion` based success states. Ensure all icon-only buttons have `aria-label` attributes.
