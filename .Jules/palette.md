## 2026-04-09 - [Surgical Success State]
**Learning:** Replacing browser `alert()` with inline success states is a high-value micro-UX improvement, but must be implemented surgically to stay under 50-line diff limits.
**Action:** Use simple conditional rendering instead of wrapping large blocks in new containers like `AnimatePresence` to keep diffs minimal.
