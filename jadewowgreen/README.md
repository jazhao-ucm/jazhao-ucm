# jadewowgreen (Madrid portfolio)

**SP26 subtree:** this folder lives inside the **[SP26 repo](../README.md)** at `jadewowgreen/`. **Edit and commit here**; the **jadewowgreen** GitHub repo and Pages deploy from that mirror, not from the SP26 root alone.

**Live site:** [jadewowgreen.github.io/jadewowgreen/site/](https://jadewowgreen.github.io/jadewowgreen/site/)

## What this is

First-generation informatics student portfolio: **Madrid on Film**, Spring 2026 in Spain (Madrid, Segovia, Toledo, Tenerife). Episode-based narrative, personal photos only, a **sounds like** line per episode (links open Spotify search for that track), warm terracotta art direction, light vanilla JS.

## Repository layout

| Path | Role |
|------|------|
| [`site/index.html`](site/index.html) | Main portfolio page (**edit here**) |
| [`site/styles.css`](site/styles.css) | Layout and design system |
| [`site/script.js`](site/script.js) | Cursor and reveal effects |
| [`images/`](images/) | Photo assets (referenced from `site/` as `../images/`) |
| [`index.html`](index.html) | Root redirect into `site/` (local preview and non-docs layouts) |
| [`docs/`](docs/) | **What GitHub Pages serves:** mirror of `site/`, `images/`, and root `index.html`. The live URL `…/jadewowgreen/site/` is **`docs/site/index.html`**, not root `site/`. |

### Deploy workflow (Pages always uses `/docs`)

GitHub **Settings → Pages** should stay on **Folder: `/docs`**. The copy under **`docs/`** is what visitors get; root **`site/`** and **`images/`** are the working tree in this repo.

After you change **`site/`** or **`images/`**:

1. From `jadewowgreen/`, run **`./sync-docs-for-pages.sh`** (copies into `docs/` and refreshes `docs/.nojekyll`).
2. Commit **both** the files you edited **and** the matching changes under **`docs/`**.
3. Push the **jadewowgreen** mirror (and **`jazhao-ucm`** if you keep SP26 as canonical).

If **`docs/`** is missing updates, the site will look fine locally but **new episodes or photos will not show** on Pages.

## Local preview

1. Open the repo (or this subtree) in your editor.
2. Serve from repo root (`index.html` redirects to `site/`) or open `site/index.html` (e.g. Live Server, or `python3 -m http.server` from `site/`).

## Connect

- Instagram: [@j.adezhao](https://instagram.com/j.adezhao)
- GitHub: [@jadewowgreen](https://github.com/jadewowgreen)

## Related in SP26

- Informatics portfolio: [`../matchaxmoxie/README.md`](../matchaxmoxie/README.md)
- IU lab (SP26): [`../j-adezhao/WORKSPACE.md`](../j-adezhao/WORKSPACE.md) · profile copy [`../j-adezhao/README.md`](../j-adezhao/README.md)
