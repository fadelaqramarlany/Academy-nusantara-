## 2025-03-27 - [Balancing Success States with Line Limits]
**Learning:** Implementing full-page or complex component success states using Framer Motion often approaches the 50-line micro-UX limit. While visually delightful, they require careful state management and conditional rendering that can bloat the diff.
**Action:** For larger components, prioritize surgical accessibility fixes (label/input linking) first, and use minimalist, integrated success messages that reuse existing layout containers to keep the change footprint small and maintainable.
