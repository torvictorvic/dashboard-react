# South-America 3-D Sales Dashboard

[![vite](https://img.shields.io/badge/vite-%5E5.2.0-7345ff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![react](https://img.shields.io/badge/react-18.x-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

A blazing-fast React 18 + Vite project that renders an interactive **3-D bar chart** of 2024 daily sales in South America, built with **Plotly.js**.  
The code demonstrates *all* official React hooks available up to React 18.3 (2024).

---

## Features
- **Full React-Hook Showcase** – `useState`, `useEffect`, `useContext`, … all the way to `useInsertionEffect`.
- **Plotly WebGL 3-D charts** for smooth rendering of large datasets (30 k+ points tested).
- **Context API + Reducer** for global state management.
- **ESLint & Prettier** pre-configured; enforced via Husky + lint-staged.
- **Jest + Testing Library** ready for unit/integration tests.
- Zero-config **Hot Module Reload** through Vite.

---

## Project structure
```
.
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   ├── data/               # JSON mock data (sales, suppliers, …)
│   ├── hooks/              # Custom hooks
│   ├── state/              # Global state (Context + Reducer)
│   ├── App.jsx
│   └── main.jsx
├── .husky/                 # Git hooks
└── …
```

---

## Quick Start

```bash
git clone https://github.com/your-org/sa-3d-sales-dashboard.git
cd sa-3d-sales-dashboard
npm install
npm run dev            # ➜ http://localhost:5173
```

### Production build

```bash
npm run build          # Generates ./dist
npm run preview        # Serves the production build locally
```

---

## Available Scripts

| Command              | Description                                  |
|----------------------|----------------------------------------------|
| `dev`                | Start Vite dev-server with HMR               |
| `build`              | Create an optimized production bundle        |
| `preview`            | Serve the production build locally           |
| `test`               | Run Jest test-suite                          |
| `lint`               | Lint `.js`, `.jsx` & `.json` with ESLint     |
| `format`             | Format code with Prettier                    |
| `prepare`            | Husky install (runs automatically on `npm i`)|

---

## Testing

We use **Jest** + **@testing-library/react**.  
Add new tests under `src/__tests__/` and run:

```bash
npm test                # single run
npm test -- --watch     # watch mode
```

---

## Mock Data

All JSON mocks live in `src/data/`.  
If you want to regenerate the **daily-sales** dataset, run the helper script:

```bash
node scripts/generateSales.js
```

*(Script included in `/scripts`; it outputs `sales_2024.json`.)*

---

## Architecture & Hooks Map

| Hook                          | Location / Purpose                                      |
|-------------------------------|---------------------------------------------------------|
| `useState`, `useEffect`       | `hooks/useSalesData` – local state & data fetch         |
| `useContext`, `useReducer`    | `state/SalesContext` – global state                     |
| `useRef`, `useImperativeHandle`| `components/Bar3DChart` – chart resize & image export  |
| `useLayoutEffect`             | same – sync with DOM for resizing                       |
| `useId`, `useTransition`      | `App.jsx` – stable IDs & deferred UI                    |
| `useDeferredValue`, `useMemo` | `hooks/useSalesData` – responsive filtering             |
| `useSyncExternalStore`        | `state/SalesContext` – subscription demo                |
| `useInsertionEffect`          | `components/Dashboard` – early CSS injection            |
| `useDebugValue`               | `hooks/useSalesData` – dev-only label                   |

---

## Contributing

1. Fork the repository  
2. Create your feature branch: `git checkout -b feat/awesome-feature`  
3. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/)  
4. Push & open a Pull Request

---

## License

Released under the **MIT** License. See [LICENSE](LICENSE) for details.
