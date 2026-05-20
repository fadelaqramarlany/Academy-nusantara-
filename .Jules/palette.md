## 2025-05-20 - [Registration Form UX Enhancement]
**Learning:** Replacing browser `alert()` with inline success states significantly improves perceived quality and user flow. Combining this with proper ARIA labeling (id/htmlFor) and tactile feedback (scale-95) creates a professional, accessible interface within a small diff footprint.
**Action:** Always check for native alerts in form handlers and replace them with surgical conditional rendering of success components. Ensure all form fields are properly labeled for accessibility.
