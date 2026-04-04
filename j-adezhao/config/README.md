# Config

| File | Role |
|------|------|
| [**site.json**](site.json) | **Manifest:** `origin` and optional **`githubPagesExample`** for your notes; path-relative `paths` keys mirror how **`../site/`** HTML is written; identity, external URLs, SEO blurbs. |

## Universal host (IU, GitHub Pages, local)

HTML under **`../site/`** uses **path-relative** URLs (`./`, `../resume.pdf`, `../assets/...`) so one tree works when:

- **IU Pages:** you upload the contents of **`j-adezhao/`** so `site/index.html` is served as **`…/site/`** and **`resume.pdf`** sits beside **`site/`**.
- **GitHub Pages** (repo root): the public URL includes **`…/j-adezhao/`**; links still resolve because they do not start at `/`.
- **Local file or any static server:** same relative resolution from the current file URL.

Root **`../index.html`** already uses a relative redirect to **`site/`**.

If a crawler insists on **absolute** Open Graph URLs, set **`origin`** (or your GitHub Pages base URL) in **`site.json`** and paste absolutes into the relevant **`<meta property="og:*">`** lines only (search for **`./`** or **`assets/`** in those tags).
