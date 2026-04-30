# Matchbox Projekt

Eine interaktive Matchbox UI gebaut mit React, Vite und Tailwind CSS.

---

## Tech Stack

- **Vite** – Build Tool & Dev Server
- **React** – UI Struktur
- **Tailwind CSS** – Styling
- **PostCSS** – CSS Pipeline

---

## Getting Started

### Installation

```bash
npm install
```

### Development Server starten

```bash
npm run dev
```

App im Browser öffnen:

```
http://localhost:5173
```

---

## Projektstruktur

```bash
src/
 ├── main.tsx        # Entry Point (React Bootstrapping)
 ├── App.tsx         # Root Component
 ├── HomeScreen.tsx  # Matchbox UI
 ├── index.css       # Tailwind Imports
```

---

## ⚙️ Tailwind Setup

### `tailwind.config.js`

```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### `postcss.config.js`

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## App Flow

```
index.html → main.tsx → App.tsx → HomeScreen.tsx
```

### `main.tsx`

Startet die React App:

```tsx
ReactDOM.createRoot(...).render(<App />);
```

### `App.tsx`

```tsx
import { HomeScreen } from "./HomeScreen";

export default function App() {
  return <HomeScreen />;
}
```

### `HomeScreen.tsx`

Enthält die komplette Matchbox UI:

- Cover
- Drawer (dragable)
- Matches
- Interaktionen

---

## UI Konzept

- Fixiertes Matchbox Cover oben
- Drawer öffnet sich per Drag nach unten
- Matches liegen im Tray
- Hover- und Animationseffekte für Interaktionen

---

## Hinweise

### Änderungen werden nur wirksam wenn:

- Datei gespeichert ist
- Dev Server läuft
- Browser ggf. neu geladen wird

### Tailwind funktioniert nicht?

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 💡 Entwicklungsworkflow

- UI in `HomeScreen.tsx` entwickeln
- Styling mit Tailwind Utility-Klassen
- Interaktionen über React State steuern
- Assets in `/public` ablegen (z. B. Bilder)

---

## TODO (optional)

- [ ] Animationen verfeinern
- [ ] Mobile Optimierung
- [ ] Accessibility verbessern
- [ ] Tests hinzufügen