# Gavik Portfolio (React + Vite)

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build
```bash
npm run build      # outputs to dist/
npm run preview
```

## Edit
- Contact links: `src/config.js`
- Services / videos / skills: `src/data/*.js`
- Sections: `src/components/*.jsx`
- Styles: `src/index.css`
- Portrait: `src/assets/portrait.jpg`

## Deploy on Vercel
Push this folder to a GitHub repo and import it at vercel.com/new. Vercel auto-detects Vite
(build `npm run build`, output `dist`). Or from the terminal: `npx vercel --prod`.

## Deploy on GitHub Pages (gaweenkanishka.github.io)
Build locally (`npm run build`) and publish the contents of `dist/` to the `gaweenkanishka.github.io` repo,
or use a GitHub Actions workflow that runs `npm ci && npm run build` and deploys `dist/`.
