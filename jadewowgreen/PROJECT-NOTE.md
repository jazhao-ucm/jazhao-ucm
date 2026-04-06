# jadewowgreen — project note

Short reference for **editorial intent** and **deploy workflow**. Canonical copy: **`SP26/jadewowgreen/`** on **`jazhao-ucm`**. Live Pages repo: **`jadewowgreen/jadewowgreen`**.

## Default workflow (source of truth)

**Edit in SP26, commit and push `jazhao-ucm` first.** The coursework monorepo is the **real** source of truth.

**Sync to the mirror only when you want GitHub Pages updated.** Treat **`jadewowgreen/jadewowgreen`** as a **deployment snapshot**, not a second editing home.

That order avoids drift: you never “fix” something only on the mirror and forget SP26, and you do not get conflicting histories between the two repos.

### How to deploy to the mirror (outline)

After `jadewowgreen/` is committed on **`jazhao-ucm/main`**:

1. Update the **mirror** repo so its **root** matches the **`jadewowgreen/`** folder layout (`index.html`, `site/`, `images/`, `_config.yml` if you use it, `docs/` if Pages still expects assets there, etc.).
2. Commit and push **`jadewowgreen/jadewowgreen`** so Pages rebuilds.

Exact mechanics are up to you (separate clone, GitHub upload, `git subtree`, CI). The rule is: **SP26 tree wins**; mirror receives a copy when you publish.

### Exception

If you **must** hotfix on the mirror (e.g. from the GitHub UI), **pull that snapshot back into SP26** as soon as practical (`fetch` + `git archive` + `rsync` into `jadewowgreen/`, then commit) so canonical history catches up.

## Editorial arc (preserve)

Episodes are **sequenced on purpose**, not a random gallery. **Episodes 9–11** carry the heaviest emotional landing (leaving, grieving, blooming). **Episode 12** (Tenerife) is a deliberate **exhale**: lighter, funny, unserious, same people, different island. Do not flatten that contrast or reorder in a way that kills the beat after 11.

## Sound pairing

Per-episode **sound** (links or embeds) is part of the narrative device: the archive should feel **sequenced**, like a season, not only **collected**. When adding or changing episodes, keep a clear sonic mood match unless the author chooses otherwise.

## Pages layout

Publishing is from the **repository root** on the mirror (see [`README.md`](README.md)). If **`docs/`** holds only assets (e.g. images), keep it consistent with root **`images/`** so paths stay true.

## Related

- [`README.md`](README.md) — layout, preview, links
- [`.cursor/rules/jadewowgreen-portfolio.mdc`](../.cursor/rules/jadewowgreen-portfolio.mdc) — agent-facing summary
