## 2026-04-09 - Improving Registration Form Micro-UX

**Learning:** Replacing native `alert()` with an inline animated success state significantly improves the flow of form submission. Proper accessibility using `htmlFor` and `id` ensures that the form is usable for all users, and adding `cursor-pointer` to labels and selects provides a clear interactive signal.

**Action:** Use `AnimatePresence` for smooth transitions between form states and always ensure labels are correctly linked to inputs with corresponding IDs. Add tactile feedback to buttons using `active:scale-95`.
