# Collage Frontend Induction Project Starter

This repository is the official starter project for the Collage frontend induction.

It provides a minimal, empty React application created with Vite + React + TypeScript.
You will build the KinoVerse application on top of this starter as part of your induction assignment.

The goal of this repository is not to give you a finished app, but to give you a clean, working baseline that removes setup friction so you can focus on learning and building.

---

## 🎯 Purpose of This Starter Project

This project exists to:

- provide a clean, modern React baseline that runs out of the box
- reflect real-world frontend tooling used in production
- remove setup friction so you can focus on learning React fundamentals
- give everyone the same starting point
- allow you to design and build features incrementally
- encourage ownership over structure and implementation decisions

This starter is intentionally empty.

You are **not expected to build an application from scratch** in terms of tooling or configuration.
Instead, you will **extend this existing structure** as you work through the induction project.

---

## 🧱 What This Project Includes

This starter project includes:
- React
- TypeScript
- Vite (modern frontend build tool)
- A minimal folder structure
- A working development server with hot reload

This project intentionally does **not** include:
- UI libraries (e.g. Material UI)
- Routing
- API services
- State management libraries
- Local storage utilities
- Tests
- CI/CD
- Any application features or pages

All of these concepts are introduced during the induction project itself and later in the internship program, not pre-configured here.

---

## ⚠️ Important Note About Project Structure

This repository is intentionally minimal.

There are no example components or reference implementations provided in this starter.

This is deliberate.

You are expected to:
- design the component structure yourself
- decide where logic should live
- add libraries incrementally as needed
- refactor as your understanding improves

This mirrors real-world frontend development, where structure evolves as features are added.

---

## ✅ Key Files to Pay Attention To (Very Important)

Even though this project is empty, there are a few files you should understand before building.

### 1) `index.html`
- The single HTML entry point for the application
- React mounts into the <div id="root"></div> element
- You generally won’t modify this often

---

### 2) `src/main.tsx`
- The application entry point
- Creates the React root
- Attaches React to the DOM

---

### 3) `src/App.tsx`
- The root React component
- This is where your application UI begins
- You will gradually expand and refactor this file as your app grows

---

### 4) `vite.config.ts`
- Configuration for the Vite build tool
- Controls dev server behaviour and build settings
- You typically won’t need to modify this early on

---

### 5) `package.json`
- Defines dependencies and scripts
- Pay attention to:
  - `dev` script: starts the development server
  - `build` script: creates a production build
  - `preview` script: serves the production build locally

---

## ▶️ How to Run the Project

From the project root:

```bash
npm install
npm run dev
```
Once the development server starts, your terminal will display a local URL (usually http://localhost:5173).

Open this URL in your browser.

If you see the default Vite + React screen, your setup is complete.

---

## 🧪 How to Verify Your Setup

Your local setup is correct if:
- the app runs without errors
- the browser displays the default React screen
- editing src/App.tsx updates the UI instantly
- the dev server reloads automatically on file changes

If all of the above work, you are ready to begin the induction project.

---

## 📄 Additional Template Guide
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
