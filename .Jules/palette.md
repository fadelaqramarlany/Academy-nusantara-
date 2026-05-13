# Palette's Journal - Critical Learnings

## 2026-04-09 - Inline Success States vs. Native Alerts
**Learning:** Replacing native browser `alert()` with inline success states significantly improves the perceived quality of the application. However, when implementing these states, using conditional rendering with standard Tailwind animations is preferred over introducing new Framer Motion dependencies or complex wrappers (like `AnimatePresence`) to keep the diff surgical and under the 50-line limit.
**Action:** Prioritize simple conditional rendering with `animate-in` for form success states to maintain a low line-count while delivering delight.
