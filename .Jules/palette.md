# Palette's Journal - Critical UX & Accessibility Learnings

## 2026-04-09 - [Micro-UX Patterns in Academy Nusantara]
**Learning:** The application frequently uses native browser `alert()` calls for form feedback and lacks explicit `id`/`htmlFor` associations in forms, which impacts both delight and accessibility. Replacing these with inline animated states and proper ARIA linking significantly improves the "pro" feel of the app.
**Action:** Always check forms for native alerts and missing accessibility links. Use `framer-motion` for inline success states to maintain consistency with existing animation patterns.
