## 2026-03-29 - [Form Accessibility & Delight]
**Learning:** Browser `alert()` for form submission feedback is jarring and breaks the app's visual flow. Additionally, form labels lacking `htmlFor` and `id` attributes prevent screen readers from correctly identifying inputs and deny mouse users the ability to click labels to focus fields.
**Action:** Replace `alert()` with a state-driven success UI using `AnimatePresence` for smooth transitions and `canvas-confetti` for delight. Ensure all form labels are explicitly linked to their respective inputs using `htmlFor` and `id`.
