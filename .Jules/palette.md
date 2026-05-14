# Palette's Journal - Critical UX/Accessibility Learnings

## 2026-04-09 - Replacing Native Alerts with Inline Success States
**Learning:** Browser alerts (`alert()`) are disruptive and feel disconnected from the modern web experience. Replacing them with inline, animated success states within the component's context maintains user focus and provides a much more polished "app-like" feel. Additionally, using Framer Motion for these transitions adds a layer of "delight" that makes the interaction feel premium.
**Action:** Prioritize surgical replacement of `alert()` calls with inline `isSuccess` states and Framer Motion entrance animations. Ensure all form fields are properly associated with labels using `id` and `htmlFor` to maintain high accessibility standards.
