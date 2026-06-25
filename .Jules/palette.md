## 2025-05-15 - Inline Registration Success State
**Learning:** Browser `alert()` calls disrupt the user flow and feel unpolished. Replacing them with inline success states using standard brand colors (Emerald-500) and iconography (`CircleCheck`) provides a more integrated and delightful experience. Using a `.map` pattern for form fields ensures a concise implementation while enabling proper `id`/`htmlFor` associations for accessibility.
**Action:** Always prefer inline feedback over modal alerts for non-critical confirmations, and ensure every form input has a unique ID linked to its label.
