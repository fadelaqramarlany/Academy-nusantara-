## 2026-02-18 - Integrated Form Success States
**Learning:** Replacing browser-native alerts with inline, animated success states using Framer Motion significantly improves the perceived quality and integration of the UI.
**Action:** Use AnimatePresence with a mode="wait" to transition between form and success states, ensuring appropriate accessibility markers (id, htmlFor) are maintained.

## 2026-02-18 - Vite Entry Point in index.html
**Learning:** In some Vite projects, the entry point script tag might be missing or misplaced in index.html, preventing the dev server and build from working correctly.
**Action:** Ensure <script type="module" src="/index.tsx"></script> is present in the body of index.html for correct React app mounting.
