<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/12OzTCUYpyjNaioiR7MHnrd8ul5DKLAZb

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deployment

This is a Vite + React SPA using React Router. The production build outputs to `dist`. Below are tested configurations for common hosting platforms.

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing: handled via `netlify.toml` and `_redirects` created in the repo.

Steps:
1. Push this repo to GitHub.
2. In Netlify, create a new site from Git and select the repo.
3. Set build to `npm run build` and publish to `dist` (already declared in `netlify.toml`).
4. Deploy. All client-side routes will resolve to `index.html`.

CLI alternative (macOS zsh):
```zsh
# install Netlify CLI if needed
npm install -g netlify-cli

# login and deploy
netlify login
netlify init --manual    # link site to this folder
netlify deploy --build   # builds and deploys
netlify deploy --prod    # promote to production
```

### Vercel
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing: Vercel automatically serves SPA; no extra config required.

Steps:
1. Push to GitHub.
2. Import project in Vercel, select Framework = Vite.
3. Ensure output directory is `dist`.
4. Deploy.

Optional `vercel.json` (not required):
```json
{
  "builds": [{ "src": "vite.config.ts", "use": "@vercel/static-build" }],
  "outputDirectory": "dist"
}
```

### GitHub Pages (via `gh-pages`)
GitHub Pages serves static files. For SPAs, you need a 404 fallback to `index.html`.

Steps:
```zsh
# add gh-pages helper
npm install --save-dev gh-pages

# add scripts in package.json (already present build)
#   "predeploy": "npm run build",
#   "deploy": "gh-pages -d dist"

# build and deploy
npm run predeploy
npm run deploy
```
Then enable Pages in the repo settings, set source to `gh-pages` branch.

Add SPA fallback for GitHub Pages by placing a copy of `index.html` as `404.html` in `dist` during deploy. The `gh-pages` tool will publish whatever is in `dist`.

### Static hosting elsewhere
- Run `npm run build`.
- Upload the `dist` folder to any static host.
- Ensure a SPA fallback to `/index.html` for client-side routing.
