## 2026-04-09 - [Registration Form UX]
**Learning:** Native `alert()` for form success is jarring and breaks the user's flow. Replacing it with an inline, animated success state using `AnimatePresence` provides a much smoother transition and allows for contextual follow-up actions (like anchor navigation).
**Action:** Use `AnimatePresence` and `motion.div` for form transitions. Always link labels to inputs using `id`/`htmlFor` for accessibility.
