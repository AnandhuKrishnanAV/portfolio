# Anandhu — portfolio site

Next.js (App Router) portfolio with a scroll-driven hero, projects, and skills arc.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build check (same as Vercel):

```bash
npm run build
npm start
```

## What actually gets deployed

`git push` only sends **files that are committed** in Git. Untracked or uncommitted changes stay on your machine.

**Included in the repo (you should commit these):**

- Source: `src/`, `public/`, config files (`next.config.*`, `tailwind.config.ts`, `tsconfig.json`, `postcss.config.mjs`, etc.)
- Lockfile: `package-lock.json` (recommended so installs match)

**Not committed on purpose** (see `.gitignore` — Vercel recreates them on build):

- `node_modules/` — installed with `npm install` on Vercel
- `.next/` — produced by `next build` on Vercel

**Before deploying, add static assets you need in production**, e.g. `public/resume.pdf` for the Resume modal, and any images under `public/`.

## Deploy on Vercel

1. Push your **committed** code to GitHub/GitLab/Bitbucket (see commands below).
2. In [Vercel](https://vercel.com), **Import** that repository.
3. Vercel detects Next.js and runs **`npm install`** and **`npm run build`** automatically. No extra config required for a standard Next 14 app.

Optional: set environment variables in the Vercel project **Settings → Environment Variables** if you add any later (e.g. analytics keys). This project does not require a `.env` for a basic deploy.

## Git: right commands so the site can build on Vercel

`git push -u origin main` only updates the remote **after** you have commits on `main`. If files are new or changed, do this first:

```bash
# See what’s not committed yet
git status

# Stage everything you want online (adjust paths if needed)
git add .

# Save a snapshot
git commit -m "Describe your changes"

# Send to GitHub (first time linking the branch)
git push -u origin main
```

Later pushes (same branch):

```bash
git add .
git commit -m "Your message"
git push
```

If your default branch is not `main`, use your branch name (e.g. `git push -u origin master`).

**If important files are still untracked** (`git status` shows `??`), they are **not** on the server until you `git add`, `git commit`, and `git push`.

## Optional scripts

- `npm run lint` — ESLint
- `npm run sync-sequence` — syncs image sequence assets (see `scripts/`)
