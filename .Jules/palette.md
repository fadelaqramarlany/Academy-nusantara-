## 2025-05-15 - Enhancing Form Accessibility and Feedback
**Learning:** For form accessibility, prefer using explicit <label> elements linked to inputs via htmlFor and id attributes. Additionally, replace jarring native alerts with inline success states to keep the user in the context of the application.
**Action:** Always check for missing htmlFor/id pairs and icon-only buttons without aria-labels. Use simple, lean inline states for feedback to keep code changes under 50 lines.

## 2025-05-15 - Vite Build Entry Point
**Learning:** Vite builds require a <script type="module" src="/index.tsx"></script> tag in index.html to correctly bundle the application, even if the development server works via other means.
**Action:** Ensure the entry point script tag is present in index.html when fixing build issues.
