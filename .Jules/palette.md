# Palette's UX Journal

This journal tracks critical UX and accessibility learnings.

## 2026-06-14 - Inline Success States vs. Browser Alerts
**Learning:** Browser alerts are disruptive to the user flow and cannot be styled to match the application's design system. Replacing them with inline success states provides immediate, context-aware feedback that maintains the user's immersion. Additionally, ensuring proper label-input linkage with `htmlFor` and `id` is crucial for screen reader accessibility in forms.
**Action:** Always prefer inline success/error messages over `alert()` or `confirm()`. Ensure every form input has a unique `id` and a corresponding `label` with `htmlFor`.
