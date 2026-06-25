# Technical Requirements Document (TRD): Sky Heights Landing Page

## 1. Technology Stack
- **Framework:** React 18 (via Vite)
- **Styling:** Tailwind CSS (v4) with custom theme configuration
- **Icons:** Custom SVGs and Lucide React
- **Date Handling:** `date-fns` for robust date parsing and validation
- **UI Components:** Radix UI primitives (via shadcn/ui inspired components for Popover, Calendar, Button)

## 2. Architecture & File Structure
A component-based architecture organized under `src/components/`:
- `App.jsx`: Main entry point orchestrating all sections.
- `Hero.jsx`: Implements custom image carousel and dynamic state.
- `BookingForm.jsx`: Manages complex form state, validation, and dynamic price hinting.
- `Gallery.jsx`: Implements scroll-snapping carousel logic.
- `ScheduleTourMap.jsx`: Integrates Google Maps iframe embed.
- `utils/validation.js`: Centralized pure functions for form validation.

## 3. Design System Implementation
- **Typography:** Configured via `index.css` using Google Fonts (Cormorant Garamond and DM Sans). Provides global utility classes like `.section-label`.
- **Colors:** Custom CSS variables mapped in Tailwind (`--color-brand-blue`, `--color-brand-green`, `--color-brand-dark`).
- **Animations:** CSS keyframes for subtle entry animations (e.g., `unitPriceIn` for the dynamic price hint).

## 4. Data Flow & State Management
- **Form State:** Managed locally in `BookingForm` using React `useState`.
- **Validation:** Synchronous validation triggered `onSubmit` and `onChange` (after the first submission attempt). Validation logic is decoupled in `validation.js`.
- **Dynamic Pricing:** `UnitPriceHint` reacts to changes in `unitType` state to display animated approximate prices without external API calls.

## 5. Third-Party Integrations
- **Google Maps Embed API:** Used for the location display and directions.
- **Google Fonts:** For typography rendering.
