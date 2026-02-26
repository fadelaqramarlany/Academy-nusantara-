## 2025-02-26 - Improving Form Accessibility and Success States
**Learning:** Explicitly linking labels to inputs via `htmlFor` and `id` is essential for screen reader accessibility, especially in custom-styled forms where the connection isn't always implicit. Replacing generic browser `alert()` with state-driven `AnimatePresence` components significantly improves the perceived quality and integration of the UI.
**Action:** Always verify that form labels have `htmlFor` and inputs have matching `id`. Prefer inline UI feedback over native browser alerts for a more modern and integrated UX.
