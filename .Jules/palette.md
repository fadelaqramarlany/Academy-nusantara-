## 2026-03-29 - [Registration Form UX]
**Learning:** The registration form uses `alert()` for feedback, which is jarring and not accessible for screen readers compared to inline status messages.
**Action:** Replace `alert()` with an animated success state using `AnimatePresence` and `aria-live`.
