## 2025-05-14 - Registration Form UX and Mounting Fix
**Learning:** Replacing native `alert()` with inline success states significantly improves the "flow" of the application and keeps users in the context of their action. Additionally, in some Vite environments, the entry point script tag might be missing from `index.html`, preventing the React app from mounting.
**Action:** Always prefer inline success states with tactile feedback (`active:scale-95`). Ensure `index.html` has `<script type="module" src="/index.tsx"></script>` after the root div for reliable mounting.
