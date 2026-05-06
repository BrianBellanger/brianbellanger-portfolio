# Brian Bellanger — Portfolio

Personal portfolio website built with React + Vite and Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node.js)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

### 4. Preview the production build

```bash
npm run preview
```

---

## Updating Content

All portfolio content lives in one file: **`src/data/portfolioData.js`**

Edit it to update projects, experience, education, and contact details — no other files need to change.

---

## Deployment

### Vercel (recommended)

1. Push the project to GitHub.
2. Import the repo at [vercel.com](https://vercel.com).
3. Framework preset: **Vite** | Build command: `npm run build` | Output: `dist`
4. Click **Deploy**.

### Netlify

1. Push to GitHub.
2. Import at [netlify.com](https://netlify.com).
3. Build command: `npm run build` | Publish directory: `dist`
4. Click **Deploy**.

### GitHub Pages

1. In `vite.config.js`, uncomment and set the `base` option to your repo name:
   ```js
   base: '/your-repo-name/',
   ```
2. Install the deploy helper:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add a `deploy` script to `package.json`:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
4. Run:
   ```bash
   npm run deploy
   ```

---

## Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky top nav, collapses on mobile
│   │   ├── Hero.jsx         # Landing section
│   │   ├── Projects.jsx     # Project cards
│   │   ├── Experience.jsx   # Timeline-style work history
│   │   ├── Education.jsx    # Education cards
│   │   ├── Contact.jsx      # Contact links
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js  ← edit this to update all content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```
