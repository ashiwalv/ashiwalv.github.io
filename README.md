# Virendra Ashiwal — Minimal Retro Research Portfolio

A static personal research website for GitHub Pages. The redesign uses a fixed left navigation on desktop, a compact mobile menu, and one visible content panel at a time to eliminate excessive scrolling.

## Replace the current site

From PowerShell, after extracting this package, copy its contents into the cloned repository and run:

```powershell
cd C:\Users\Ankita\Documents\Virendra\Code\ashiwalv.github.io
Copy-Item "PATH-TO-EXTRACTED-FOLDER\*" . -Recurse -Force
git add .
git commit -m "Redesign portfolio with minimal retro layout"
git push origin master
```

Your current repository's default branch is `master`. If you later rename it to `main`, use `git push origin main` instead.

## GitHub Pages settings

Open **Settings → Pages** and use either:

- **Deploy from a branch** → `master` → `/ (root)`, or
- **GitHub Actions**, if you already configured a Pages workflow.

The site will be available at `https://ashiwalv.github.io/` after deployment finishes.

## Local preview

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Content files

- `index.html` — profile, research, experience, education and service
- `script.js` — publications, patents and interactions
- `style.css` — retro visual system and responsive layout
- `assets/virendra-ashiwal.jpg` — portrait
- `assets/virendra-ashiwal-cv.pdf` — downloadable public CV

## Before publishing

Review the professional email, metrics, employment wording, publication details and patent statuses. Citation metrics are a dated October 2026 snapshot.
