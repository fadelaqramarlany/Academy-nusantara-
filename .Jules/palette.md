# Palette Journal - Academy Nusantara

## 2026-04-09 - [Micro-UX Improvements]
**Learning:** Native browser alerts interrupt the user flow and feel outdated. Replacing them with inline, animated success states using Framer Motion provides immediate, delightful feedback without forcing the user to interact with a modal dialog.
**Action:** Replace `alert()` calls in forms with conditional rendering and `AnimatePresence`.

**Learning:** Accessibility and tactile feedback are essential for a professional feel. Simple additions like `id`/`htmlFor` for labels and `active:scale-95` for buttons significantly improve the perceived quality and usability of the interface.
**Action:** Always link form labels to inputs and add transition-based scaling to interactive elements.
