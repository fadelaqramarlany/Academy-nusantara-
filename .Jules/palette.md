## 2026-04-09 - [Micro-UX Constraints]
**Learning:** For Palette tasks, surgical precision is required. Replacing browser `alert()` is highly valued, but the implementation must stay under 50 lines. Avoid wrapping large blocks in new containers (like `AnimatePresence`) if simpler conditional rendering can achieve the same goal within the line limit.
**Action:** Use simple conditional rendering for success states to minimize diff size.

**Learning:** Accessibility (label/input linking) is a high-impact, low-line-count improvement that significantly boosts UX for screen reader users.
**Action:** Prioritize `id` and `htmlFor` linking in every form-related task.

**Learning:** Modifying core configuration files like `index.html` or including lockfiles in PRs is considered scope creep and should be avoided in micro-UX tasks.
**Action:** Stick strictly to component files and ensure the environment is correctly setup without needing permanent config changes in the final submission.
