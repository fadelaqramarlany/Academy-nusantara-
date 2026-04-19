# Palette Journal - Academy Nusantara

## 2026-04-09 - Form Accessibility and Feedback Patterns
**Learning:** Native `alert()` calls for form submissions break the immersive experience and are not screen-reader friendly in a modern SPA. Additionally, missing `htmlFor`/`id` links on form labels reduces the clickable area for inputs and impairs accessibility.
**Action:** Replace `alert()` with inline animated success states and ensure all form labels are correctly linked to their inputs. Use `active:scale-95` for consistent tactile feedback on buttons.
