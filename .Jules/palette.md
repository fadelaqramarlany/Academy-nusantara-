## 2025-05-14 - [Tactile Feedback & Accessibility Consistency]
**Learning:** Adding consistent tactile feedback (`active:scale-95 transition-all`) alongside aria-labels for icon-only buttons significantly elevates the "pro" feel of the app while ensuring WCAG compliance.
**Action:** Always check common interaction points (Navbar, Chat inputs, Footer links) for missing feedback and labels as a first step in micro-UX tasks.

## 2025-05-14 - [Vite Entry Point Fix]
**Learning:** Visual verification may fail if the `index.html` lacks a direct `<script type="module" src="/index.tsx"></script>` tag, even if an importmap is present.
**Action:** Ensure the entry point script is present in `index.html` before running dev/build for verification.
