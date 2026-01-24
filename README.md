# Starter Portfolio (React + Tailwind)

Modern, responsive portfolio starter built with React, Vite, and Tailwind CSS. Edit the content in `src/data/portfolioData.js` to customize your name, projects, and testimonials.

## Quick start

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Deployment

### Vercel
1. Push the repo to GitHub.
2. Import it into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.

### GitHub Pages
1. Install a static deploy tool (example below):

```bash
npm install --save-dev gh-pages
```

2. Add scripts to `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Run deploy:

```bash
npm run deploy
```

## Customize

- Update content in `src/data/portfolioData.js`.
- Swap fonts in `src/index.css` and `tailwind.config.js`.
- Adjust colors in `tailwind.config.js`.

## Project structure

```
src/
  components/
  data/
  App.jsx
  index.css
  main.jsx
```
