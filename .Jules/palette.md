## 2025-05-15 - [Form Accessibility & Success States]
**Learning:** Refactoring complex form components to include animations and success states frequently exceeds Palette's 50-line change limit; to ensure approval, prioritize surgical accessibility fixes or smaller visual tweaks over major logic refactors.
**Action:** Use surgical `git merge diff` to add `id`, `htmlFor`, and `aria-label` while keeping the UI transition as lightweight as possible.

## 2025-05-15 - [Application Mounting]
**Learning:** The `index.html` file requires an explicit `<script type="module" src="/index.tsx"></script>` tag for the React application to mount; adding this tag is a necessary fix if the dev server or Playwright verification results in a blank page.
**Action:** Always verify the entry point script tag in `index.html` when troubleshooting frontend mounting issues.
