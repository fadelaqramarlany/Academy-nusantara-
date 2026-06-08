# Palette Journal - Academy Nusantara

This journal records critical UX and accessibility learnings discovered during the project.

## 2025-05-14 - Global Accessibility and Tactile Feedback
**Learning:** Global interactive elements like the mobile menu toggle and footer contact links often lack necessary ARIA labels and tactile feedback, which can lead to a disjointed experience for screen reader and touch users. Adding a "Skip to content" link is also essential for keyboard navigability in React apps with persistent navbars.
**Action:** Always verify the presence of skip links and ARIA labels on icon-only buttons during initial exploration. Implement consistent `active:scale-95` classes for tactile feedback across all global interactive components.
