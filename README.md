# Virendra Ashiwal — Research Portfolio

Static personal research website prepared for GitHub Pages.

## Publish at ashiwalv.github.io

1. Create a **public** GitHub repository named `ashiwalv.github.io`.
2. Copy every file and folder from this package into the repository root.
3. Commit and push to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **GitHub Actions**.
6. Wait for the `Deploy static site to GitHub Pages` workflow to finish.
7. Open `https://ashiwalv.github.io`.

### Command-line deployment

```bash
git init
git add .
git commit -m "Launch research portfolio"
git branch -M main
git remote add origin https://github.com/ashiwalv/ashiwalv.github.io.git
git push -u origin main
```

## Update content

- Professional text and page structure: `index.html`
- Publication and patent records: `script.js`
- Theme and layout: `style.css`
- Portrait: `assets/virendra-ashiwal.jpg`
- Downloadable CV: `assets/virendra-ashiwal-cv.pdf`

## Privacy check before publishing

The bundled public CV omits the postal address and telephone number. Review the professional email and all claims before publishing.

## Data notes

- Publication metadata combines the supplied publication export, CV and public profiles.
- Citation metrics are a dated October 2026 snapshot and should be refreshed periodically.
- Patent links run title searches on Google Patents because application serial numbers are not always public publication identifiers.
- ORCID used: `0000-0001-5845-0512`.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.
