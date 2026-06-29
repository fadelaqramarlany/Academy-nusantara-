## 2025-05-14 - [Improved Registration Form Feedback and Accessibility]
**Learning:** Replacing browser-native `alert()` calls with inline, animated success states significantly enhances perceived quality and user flow. Additionally, ensuring form labels are explicitly linked via `htmlFor` and `id` is a fundamental but often overlooked accessibility win in rapid prototyping.
**Action: ** Always check for unlinked form labels and replace generic alerts with context-aware UI feedback using the project's existing design tokens (e.g., Lucide icons and Framer Motion).
