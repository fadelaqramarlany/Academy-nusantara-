## 2025-05-14 - Inline Form Success States
**Learning:** Replacing native browser alerts with inline success messages significantly improves UX by maintaining user context and providing a more integrated feel. However, full refactors with complex animations often exceed micro-UX line limits (50 lines).
**Action:** Use simple conditional rendering or surgical ternary operators for success states when line count is a constraint, prioritizing accessibility (role="status", aria-live="polite") over heavy animations.

## 2025-05-14 - Tactile Button Feedback
**Learning:** Adding a simple scale reduction on click ('active:scale-95') provides a tactile feel that makes the UI feel more responsive and modern with minimal code.
**Action:** Apply 'active:scale-95' to primary action buttons for a better interactive experience.
