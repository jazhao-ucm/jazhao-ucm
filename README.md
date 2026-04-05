# jadewowgreen (Madrid portfolio)

**SP26 subtree:** this folder lives inside the **[SP26 repo](../README.md)** at `jadewowgreen/`. **Edit and commit here**; the **jadewowgreen** GitHub repo and Pages deploy from that mirror, not from the SP26 root alone.

**Live site:** [jadewowgreen.github.io/jadewowgreen/site/](https://jadewowgreen.github.io/jadewowgreen/site/)

## What this is

First-generation informatics student portfolio: **Madrid on Film**, Spring 2026 in Spain (Madrid, Segovia, Toledo, Tenerife). Episode-based narrative, personal photos only, a **sounds like** line per episode (links open Spotify search for that track), warm terracotta art direction, light vanilla JS.

## Repository layout

| Path | Role |
|------|------|
| [`site/index.html`](site/index.html) | Main portfolio page |
| [`site/styles.css`](site/styles.css) | Layout and design system |
| [`site/script.js`](site/script.js) | Cursor and reveal effects |
| [`images/`](images/) | Photo assets (referenced from `site/` as `../images/`) |
| [`docs/`](docs/) | Copy of `site/`, `images/`, and root `index.html` for Pages **only if** the GitHub repo publishes from the **`/docs`** folder |

### GitHub Pages: root vs docs

If **Settings → Pages → Build and deployment** uses **Folder: `/docs`**, GitHub serves **`docs/site/index.html`** at `…/jadewowgreen/site/`, **not** the root `site/` folder. That is why new episodes can disappear: `docs/` must stay in sync or the page copy will not match your edits.

**Canonical source of truth:** edit `site/` and `images/` only. `docs/` is a deploy mirror for Pages when the source is `/docs`.

**Option A (recommended):** Publish Pages from the repo root (`/`). Then `site/` and `images/` are the only site files needed.

**Option B:** Keep publishing from `/docs`. After every change to `site/` or `images/`, run:

```bash
./sync-docs-for-pages.sh
```

Then commit the updated `docs/` and push.

## Local preview

1. Open the repo (or this subtree) in your editor.
2. Serve from repo root (`index.html` redirects to `site/`) or open `site/index.html` (e.g. Live Server, or `python3 -m http.server` from `site/`).

## Connect

- Instagram: [@j.adezhao](https://instagram.com/j.adezhao)
- GitHub: [@jadewowgreen](https://github.com/jadewowgreen)

## Related in SP26

- Informatics portfolio: [`../matchaxmoxie/README.md`](../matchaxmoxie/README.md)
- IU lab (SP26): [`../j-adezhao/WORKSPACE.md`](../j-adezhao/WORKSPACE.md) · profile copy [`../j-adezhao/README.md`](../j-adezhao/README.md)
