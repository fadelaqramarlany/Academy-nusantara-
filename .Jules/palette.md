## 2025-05-15 - Global Navigation & Footer Accessibility
**Learning:** Icon-only interactive elements in the navigation and footer (like mobile menu toggles and social links) lack screen reader context and physical feedback. Providing dynamic Indonesian ARIA labels ("Buka menu"/"Tutup menu") and tactile feedback via `active:scale-95` significantly improves the perceived quality and inclusiveness of the interface.
**Action:** Always verify that icon-only buttons have descriptive aria-labels and provide immediate visual response to user clicks.
