# Sky Heights Avenue — Landing Page

**Live Demo:** [https://fute-services-phi.vercel.app](https://fute-services-phi.vercel.app)

A single-page marketing website for **Sky Heights Avenue**, a premium residential project on Sarjapur Road, Bangalore. The site showcases project details, amenities, gallery, location map, and a validated site visit booking form.

---

## Features

- Hero section with image gallery and property highlights
- Project overview, amenities, and nearby highlights
- Video review section
- Interior / exterior gallery with tabs
- Google Maps tour section with directions
- Site visit booking form with inline validation
- Date picker and time slot logic (past dates/times blocked)
- Responsive layout for mobile, tablet, and desktop

---

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 4**
- **date-fns**, **react-day-picker**, **Radix UI** (date picker)
- **lucide-react** (icons)

---

## Prerequisites

- **Node.js** 18 or later
- **npm** 9 or later

Check your versions:

```bash
node -v
npm -v
```

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/AmanCrafts/FuteServices.git
cd FuteServices
```

### 2. Install dependencies

All application code lives in the `frontend` folder:

```bash
cd frontend
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`). Open it in your browser to view the site.

---

## Available Scripts

Run these from the `frontend` directory:

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Create a production build in `frontend/dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

### Production preview

```bash
npm run build
npm run preview
```

---

## Project Structure

```text
FUTE/
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # UI sections and form components
│   │   ├── lib/             # Shared utilities (e.g. cn helper)
│   │   ├── utils/           # Form validation logic
│   │   ├── App.jsx          # Page composition
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Global styles & design tokens
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── PRD.md                   # Product requirements
├── TRD.md                   # Technical requirements
└── UserFlow.md              # User flow notes
```

---

## Deployment

The project is configured as a static Vite app. To deploy:

1. Build the app:

```bash
cd frontend
npm run build
```

2. Deploy the `frontend/dist` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

For Vercel, set the **Root Directory** to `frontend` and use:

- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

## Environment Notes

- No backend or environment variables are required for local development.
- The booking form uses client-side validation only (no API submission).
- Map embed uses the Google Maps location configured in `ScheduleTourMap.jsx`.

---

## License

Private project — All rights reserved.
