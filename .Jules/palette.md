# Palette's Journal - Critical UX Learnings

## 2025-05-14 - Interactive Element Feedback & Form Accessibility
**Learning:** Adding `active:scale-95` with `transition-transform` provides immediate tactile feedback for mobile and desktop users, making the interface feel more responsive. Explicitly linking labels to inputs via `htmlFor` and `id` is essential for both accessibility and improved tap targets.
**Action:** Always include tactile feedback on custom buttons and ensure 1:1 label-to-input mapping in all forms.

## 2025-05-14 - Build Environment Verification
**Learning:** The Vite build environment in this repo requires an explicit `<script type="module" src="/index.tsx"></script>` in `index.html` to correctly mount the React application, which was missing in the base template.
**Action:** Verify the presence of the entry point script in `index.html` when debugging blank pages or "root element not found" errors.
