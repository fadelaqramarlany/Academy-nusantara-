## 2026-03-29 - [Accessibility & Feedback]
**Learning:** Replacing native `alert()` calls with inline animated success states improves user flow and delight, but must be accompanied by `role="status"` and `aria-live="polite"` to maintain accessibility for screen readers. Additionally, explicit `id` and `htmlFor` associations are crucial for form usability.
**Action:** Always prefer inline success components with ARIA live regions over blocking native alerts. Ensure every form input has a corresponding label with a matching `id`.
