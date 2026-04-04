# Config

| File | Role |
|------|------|
| [**site.json**](site.json) | **Single manifest** for this IU site: origin (for your notes), root-relative `paths`, identity strings, external URLs, SEO blurbs. |

## Universal host

HTML under **`../site/`** and the root **`../index.html`** redirect use **root-relative** URLs (`/site/`, `/resume.pdf`, …) so the same files work on **any** origin after you upload them.

When you move to another domain, you usually **do not** edit the HTML. If a crawler or validator insists on **absolute** Open Graph URLs, set `origin` in **`site.json`** and paste absolute URLs into the `<meta property="og:*">` and `<link rel="canonical">` lines in **`site/index.html`** (search for `https://`).
