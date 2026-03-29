## 2026-03-29 - [Contact Form Accessibility and Success State]
**Learning:** In this application, form labels were not explicitly linked to inputs using `htmlFor` and `id`, and form submissions relied on native browser `alert()` which is a jarring user experience.
**Action:** Always ensure `htmlFor` and `id` are used for form accessibility. Replace native `alert()` with an animated success state using `framer-motion` for a smoother, more integrated UX.
