# jadewowgreen — project note

Short reference for **editorial intent** and **SP26 ↔ mirror** workflow. The live deploy repo is **`jadewowgreen/jadewowgreen`**; canonical coursework copy lives under **`SP26/jadewowgreen/`** on **`jazhao-ucm`**.

## Editorial arc (preserve)

Episodes are **sequenced on purpose**, not a random gallery. **Episodes 9–11** carry the heaviest emotional landing (leaving, grieving, blooming). **Episode 12** (Tenerife) is a deliberate **exhale**: lighter, funny, unserious, same people, different island. Do not flatten that contrast or reorder in a way that kills the beat after 11.

## Sound pairing

Per-episode **sound** (links or embeds) is part of the narrative device: the archive should feel **sequenced**, like a season, not only **collected**. When adding or changing episodes, keep a clear sonic mood match unless the author chooses otherwise.

## SP26 vs GitHub mirror

- **`jazhao-ucm`** (this monorepo): long-term source for coursework and portfolio subtree history.
- **`jadewowgreen/jadewowgreen`**: **deploy mirror** for GitHub Pages.

At any moment, **one place should be the active source of truth** for edits (either SP26 or the mirror), then **sync the other** (push, or `git archive` + `rsync` into `jadewowgreen/` from `jadewowgreen/main`, then commit to SP26). Editing both without syncing brings **asset and path drift** back immediately (wrong images, missing episodes on Pages, broken `docs/` vs root layouts).

## Pages layout

Publishing is from the **repository root** (see [`README.md`](README.md)). If **`docs/`** is used only for assets (e.g. images), keep it consistent with **`images/`** at root so relative URLs and deploy assumptions stay true.

## Related

- [`README.md`](README.md) — layout, preview, links
- [`.cursor/rules/jadewowgreen-portfolio.mdc`](../.cursor/rules/jadewowgreen-portfolio.mdc) — agent-facing summary
