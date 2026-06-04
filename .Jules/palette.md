## 2025-05-15 - Inline Success State Pattern
**Learning:** Replacing browser `alert()` with inline success states improves UX by maintaining context and flow. Using conditional rendering for these states keeps the code surgical and under the 50-line diff limit while allowing for richer visual feedback (e.g., using `CheckCircle2` icons).
**Action:** Prioritize inline success states over native alerts for all form submissions in this repository, ensuring a "reset" path is provided for better usability.
