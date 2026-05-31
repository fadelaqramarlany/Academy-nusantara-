# Palette's Journal - Academy Nusantara

This journal tracks critical UX and accessibility learnings for the Academy Nusantara project.

## 2025-05-22 - [Inline Success States & Tactile Feedback]
**Learning:** Replacing native `alert()` calls with inline success states significantly improves user flow and professional feel. However, these states must always include a "Reset" or "Return" action (e.g., "Daftar Lagi") to avoid trapping the user. Tactile feedback (`active:scale-95`) provides immediate confirmation of interaction which is especially important for buttons that trigger state changes.
**Action:** Always pair inline success messages with a reset action and apply the `active:scale-95 transition-all` pattern to all primary interaction buttons.
