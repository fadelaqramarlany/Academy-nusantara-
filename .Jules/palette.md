## 2026-03-29 - [Registration Form Polishing]
**Learning:** Replaced a browser alert with a state-driven success message in the registration form. Discovered that the app was missing a script tag in index.html, which was preventing it from mounting correctly. Added accessibility attributes (id, htmlFor) and ARIA live regions to improve the experience for screen reader users.
**Action:** Always check index.html for correct script loading and ensure form labels are properly linked to inputs for maximum accessibility.
