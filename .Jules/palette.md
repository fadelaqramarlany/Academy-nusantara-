## 2025-05-15 - Improving Contact Form Experience
**Learning:** Replacing native browser `alert()` with inline success states significantly improves the perceived quality and flow of the application. Using `AnimatePresence` for state transitions makes these changes feel intentional and "premium".
**Action:** Always look for `alert()` calls in forms and replace them with inline, accessible success messages with a touch of delight (like confetti).

## 2025-05-15 - Vite Entry Point in index.html
**Learning:** A common point of failure for Vite-based SPAs in this environment is a missing `<script type="module" src="/index.tsx"></script>` in `index.html`.
**Action:** Always verify that `index.html` has the correct entry point script tag after the importmap.
