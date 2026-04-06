# Config

## Files

| File | Role |
|------|------|
| [**site.json**](site.json) | Manifest: **`origin`**, **`githubPagesExample`**, path-relative **`paths`**, **`identity`**, **`external`**, **`seo`**. |

## GitHub universal (one tree, any host)

Static HTML under **`../site/`** uses **path-relative** URLs only (`./`, `../resume.pdf`, `../assets/...`, depth-correct paths under **`site/research/`**). The same files work when:

| Where | URL shape | Notes |
|-------|-----------|--------|
| **IU Pages** | **Manual upload** of **`j-adezhao/`** (not tied to `git push`) as the site root | `…/site/`, **`resume.pdf`** next to **`site/`**; source repo is often on **github.iu.edu** |
| **GitHub Pages** (source = repo root) | `…/j-adezhao/site/` | No leading **`/`** on internal links |
| **Local** | `python3 -m http.server` from **`j-adezhao/`** | Same resolution |

Root **`../index.html`** redirects with a **relative** target **`site/`** (no domain).

**Optional absolutes:** Some crawlers want full **`https://`** Open Graph URLs. Put your live base in **`site.json`** (`origin` or your GitHub Pages URL) and paste absolutes only into the **`og:*`** (and if needed **`canonical`**) lines in the HTML.
