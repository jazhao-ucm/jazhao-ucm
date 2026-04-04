# j-adezhao — IU lab (SP26 subtree)

This folder is the **IU home base** inside the monorepo: informatics research, résumé sources, notebooks, and the static tree you mirror to **IU Pages**. Madrid-term **coursework** lives in sibling course folders; use repo-root **`docs/INDEX.md`** for weeks and dates.

## Reader map

| If you want… | Open |
|----------------|------|
| Public profile (voice, badges, contact) | [`README.md`](README.md) |
| **Research arc** (pre-Madrid → Madrid → now) with file links | [`research/README.md`](research/README.md) |
| Senior-year courses and running checklist | [`planning/senior-year-2026-27.md`](planning/senior-year-2026-27.md) |
| How to publish, build, and run scripts | This file (below) |

**Live:** [jlzhao.pages.iu.edu](https://jlzhao.pages.iu.edu/) · [résumé PDF](https://jlzhao.pages.iu.edu/resume.pdf) · [site index](https://jlzhao.pages.iu.edu/site/)

**Git:** [github.com/jazhao-ucm/jazhao-ucm](https://github.com/jazhao-ucm/jazhao-ucm) (subtree **`j-adezhao/`**). Ignores: **[`.gitignore`](.gitignore)** (**`.venv/`**, **`lab/data/simulations/`** outputs, secrets, OS cruft).

**Mail:** 408 N. Union Street, Bloomington, IN 47405.

---

## Layout

| Path | Role |
|------|------|
| **`planning/`** | Senior-year registration snapshot and checklist. |
| **`research/`** | Notes, audits, theory TeX, priorities; start at **`research/README.md`**. |
| **`publications/`** | Longer Markdown drafts (some are shells only). |
| **`latex/`** | **`archives.tex`** — build with **`./scripts/build-archives.sh`**. |
| **`resume/`** | Résumé TeX + PDF. |
| **`media/images/`** | Source art; **`./scripts/sync-assets.sh`** → **`site/assets/images/`**. |
| **`lab/`** | Notebooks, **`data/`**, throwaway **`experiments/`**. |
| **`site/`** | What you ship to IU Pages, plus root **`index.html`** → **`site/`**. |
| **`scripts/`** | env, LaTeX, assets, simulations. |
| **`config/`** | SEO JSON. |
| **`Profile.pdf`** | Five-page profile PDF (canonical in this folder; link from README and site index). Optional: upload the same file to IU Pages as **`/Profile.pdf`** if you want it on the host. |

---

## Publishing (IU Pages)

1. **`./scripts/setup-env.sh`** if you need Jupyter; never commit **`.venv/`**.
2. Export **`resume/resume.pdf`** (or your canonical name) to the host.
3. Optional: upload **`Profile.pdf`** to the IU Pages root as **`Profile.pdf`** if you want it beside **`resume.pdf`** (the research index also links the GitHub copy so it works before you mirror).
4. **`./scripts/sync-assets.sh`** after changing **`media/images/profile/`**.
5. Upload **`site/`** and root **`index.html`**.
6. **`git push`:** no **`git add -f`** on ignored paths; no **`.env`**.

---

## IU vs UCM

| Wing | Role |
|------|------|
| **`j-adezhao/`** | IU lab → IU Pages. |
| **Course folders + `docs/INDEX.md`** | UCM semester materials. |

---

## Quick paths

| Topic | Path |
|-------|------|
| Research arc | [`research/README.md`](research/README.md) |
| Senior year | [`planning/senior-year-2026-27.md`](planning/senior-year-2026-27.md) |
| Codex | [`latex/archives.tex`](latex/archives.tex) |
| Résumé | [`resume/`](resume/) |
| Simulations | [`lab/data/simulations/README.md`](lab/data/simulations/README.md) |
| Site entry | [`site/index.html`](site/index.html) |

---

## Tree (short)

```text
j-adezhao/
├── README.md              ← profile
├── WORKSPACE.md           ← this file
├── index.html
├── planning/
├── publications/
├── research/              ← README.md = arc index
├── latex/archives.tex
├── resume/
├── media/images/
├── lab/{notebooks,experiments,data/}
├── site/
├── scripts/
└── config/
```

---

## Entry points (deep links)

- [`research/high-impact-research-priorities.md`](research/high-impact-research-priorities.md)
- [`research/agentic-systems/ux-audit/le-chat-dossier.md`](research/agentic-systems/ux-audit/le-chat-dossier.md)
- [`research/agentic-systems/ux-audit/agent-trust-matrix.md`](research/agentic-systems/ux-audit/agent-trust-matrix.md)
- [`research/agentic-systems/formulas/agentic-ai-formula-primer.md`](research/agentic-systems/formulas/agentic-ai-formula-primer.md)
- [`research/agentic-systems/panels/agent-panel-feedback-2026-03-31.md`](research/agentic-systems/panels/agent-panel-feedback-2026-03-31.md)
- [`research/ethics-governance/le-chat-question-bank.md`](research/ethics-governance/le-chat-question-bank.md)

---

## Commands

```bash
cd j-adezhao && python3 -m http.server 8080
```

```bash
cd j-adezhao
./scripts/build-archives.sh
./scripts/sync-assets.sh
./scripts/run-simulations.sh   # optional
```

---

## Elsewhere in SP26

- Informatics portfolio (GitHub Pages): [`../matchaxmoxie/site/`](../matchaxmoxie/site/)
- Photo portfolio: [`../jadewowgreen/README.md`](../jadewowgreen/README.md)
- Luddy: [luddy.indiana.edu](https://luddy.indiana.edu/)

---

## House style

Latin + English headings where they help. Canonical URLs and real **alt** text on images. Plain punctuation in Markdown (commas, **to** in ranges).
