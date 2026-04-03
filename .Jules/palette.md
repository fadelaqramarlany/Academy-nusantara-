## 2026-03-29 - Improve registration form accessibility and feedback
**Learning:** The registration form lacked basic accessibility (no label-input associations) and used native alerts for feedback, which feels disjointed in a modern UI. Providing a clear success state and tactile feedback significantly improves the perceived quality of the application.
**Action:** Always ensure <label> elements are linked to inputs via htmlFor/id and prefer inline success states over native alerts for form submissions.
