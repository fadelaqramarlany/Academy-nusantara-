## 2025-07-03 - [Accessibility in Registration Forms]
**Learning:** Forms in this application (like the registration form in Home.tsx) often lack proper id/htmlFor association between labels and inputs, and missing focus-visible indicators for keyboard navigation.
**Action:** Always ensure all form fields have unique IDs, link them to labels using htmlFor, and add focus-visible:ring-2 or focus:ring-2 styles to interactive elements.

## 2025-07-03 - [Inline Success States over Browser Alerts]
**Learning:** Using browser alert() for form submission feedback is jarring and provides poor UX. Replacing it with an inline success state with visual confirmation (like a check icon) and a subtle animation provides a much smoother experience.
**Action:** Implement conditional rendering for form success states instead of using native alert() dialogs.
