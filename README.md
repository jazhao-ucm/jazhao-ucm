# jadewowgreen (Madrid portfolio)

**UCM subtree:** this folder lives inside the **[UCM monorepo](../README.md)** at `jadewowgreen/`. Public site is deployed from the **jadewowgreen** GitHub repo and Pages, not from the UCM root.

**Live site:** [jadewowgreen.github.io/jadewowgreen/site/](https://jadewowgreen.github.io/jadewowgreen/site/)

## What this is

First-generation informatics student portfolio: **Madrid on Film**, Spring 2026 in Spain (Madrid, Segovia, Toledo). Episode-based narrative, personal photos only, warm terracotta art direction, light vanilla JS.

## Repository layout

| Path | Role |
|------|------|
| [`index.html`](index.html) | Root entry for GitHub Pages |
| [`site/index.html`](site/index.html) | Main portfolio page |
| [`site/styles.css`](site/styles.css) | Layout and design system |
| [`site/script.js`](site/script.js) | Cursor and reveal effects |
| [`images/`](images/) | Photo assets (referenced from `site/` as `../images/`) |

**Note:** The site source of truth is **`site/`** plus **`images/`**. A duplicate under `docs/` was removed to avoid drift; use GitHub Pages with the repo root (or `/site` in the URL path) consistent with [the live site](https://jadewowgreen.github.io/jadewowgreen/site/).

## Local preview

1. Open the repo (or this subtree) in your editor.  
2. Serve from repo root (`index.html` redirects to `site/`) or open `site/index.html` (e.g. Live Server, or `python3 -m http.server` from `site/`).

## Connect

- Instagram: [@j.adezhao](https://instagram.com/j.adezhao)  
- GitHub: [@jadewowgreen](https://github.com/jadewowgreen)  

## Related in this monorepo

- Informatics portfolio: [`../matchaxmoxie/README.md`](../matchaxmoxie/README.md)  
- Private research workspace: [`../j-adezhao/README.md`](../j-adezhao/README.md) (local only, not committed)
