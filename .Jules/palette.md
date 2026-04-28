## 2026-04-09 - Improving Contact Form UX and Accessibility
**Learning:** Replacing native browser alerts with inline success states provides a more cohesive and less disruptive user experience. Tactile feedback on buttons (scale down on click) improves perceived responsiveness.
**Action:** Replace `alert()` with a conditional success message in `pages/Contact.tsx`, and ensure all form fields have proper `id` and `htmlFor` associations.
