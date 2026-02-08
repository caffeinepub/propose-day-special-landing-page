# Specification

## Summary
**Goal:** Build a responsive, romantic single-page “Propose Day” landing page with a simple interactive proposal section and consistent warm-themed styling.

**Planned changes:**
- Create a single-page layout with clear scroll sections: hero (headline, subtext, primary CTA), message, reasons/notes, proposal question, and footer.
- Implement a client-side interactive proposal UI with two buttons (“Yes”, “Not yet”) and corresponding confirmation/encouragement states that reset on reload.
- Apply a cohesive romantic visual theme (avoid blue/purple) using consistent palette, typography, spacing, and decorative elements; ensure all text is in English.
- Add and reference generated static images from `frontend/public/assets/generated` (hero background/illustration, heart emblem, subtle heart pattern tile) with responsive rendering and no layout shift.

**User-visible outcome:** Visitors can scroll through a romantic Propose Day page and interact with a “Will you be mine?” section where “Yes” shows a celebratory confirmation and “Not yet” shows a gentle prompt, all without any backend or saved state.
