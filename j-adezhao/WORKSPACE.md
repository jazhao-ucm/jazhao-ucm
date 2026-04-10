# j-adezhao — IU lab (SP26 subtree)

Treat this folder as the **IU version** of **[matchaxmoxie](https://matchaxmoxie.github.io/matchaxmoxie/)** and the **IU wing** of **[SP26](https://github.com/jazhao-ucm/jazhao-ucm)**: same method and voice as the public portfolio site, plus informatics research, résumé sources, notebooks, and the static tree you ship to **IU Pages**. [`README.md`](README.md) mirrors the portfolio; Madrid-term **coursework** lives in sibling course folders; use repo-root **`docs/INDEX.md`** for weeks and dates.

## Reader map

| If you want… | Open |
|----------------|------|
| Public profile (voice, badges, contact) | [`README.md`](README.md) |
| LinkedIn-style capability snapshot (Markdown) | [`profile-summary.md`](profile-summary.md) |
| **Research arc** (pre-Madrid to Madrid to now) with file links | [`research/README.md`](research/README.md) |
| **Public web index** (bios and posts; verify) | [`research/public-web-index.md`](research/public-web-index.md) |
| **Site manifest** (host, paths, copy) | [`config/site.json`](config/site.json) |
| **GitHub universal** (path-relative static site, IU + Pages) | [`config/README.md`](config/README.md) |
| Senior-year courses and running checklist | [`planning/senior-year-2026-27.md`](planning/senior-year-2026-27.md) |
| How to publish, build, and run scripts | This file (below) |

**Live:** [jlzhao.pages.iu.edu](https://jlzhao.pages.iu.edu/) · [résumé PDF](https://jlzhao.pages.iu.edu/resume.pdf) · [site index](https://jlzhao.pages.iu.edu/site/)

**Git:** [github.com/jazhao-ucm/jazhao-ucm](https://github.com/jazhao-ucm/jazhao-ucm) (subtree **`j-adezhao/`**). Your IU copy often lives on **IU GitHub** (**github.iu.edu**); that is separate from the public mirror. Ignores: **[`.gitignore`](.gitignore)** (**`.venv/`**, **`lab/data/simulations/`** outputs, secrets, OS cruft).

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
| **`docs/employment/`** | IU position description PDFs (e.g. FASE MAP Coordinator); see **`docs/employment/README.md`**. |
| **`media/images/`** | Source art; **`./scripts/sync-assets.sh`** → **`site/assets/images/`**. |
| **`lab/`** | Notebooks, **`data/`**, throwaway **`experiments/`**. |
| **`site/`** | Static pages for IU Pages; **path-relative** links so **GitHub Pages** under **`…/j-adezhao/`** works too. Root **`index.html`** → **`site/`**. |
| **`scripts/`** | env, LaTeX, assets, simulations. |
| **`config/`** | **`site.json`** manifest; **[`config/README.md`](config/README.md)** = GitHub universal hosting notes. |
| **`effective-disco/`** | Git submodule: **[jazhao-ucm/effective-disco](https://github.com/jazhao-ucm/effective-disco)** (vanilla JS Space Jump). After cloning SP26, run **`git submodule update --init j-adezhao/effective-disco`** (or **`--recursive`** from repo root) so the folder is populated. |
| **`profile-summary.md`** | LinkedIn-style export as Markdown; not a substitute for the résumé. |

---

## Hosting

Details: [`config/README.md`](config/README.md) (**GitHub universal** table).

### IU Pages

**Deploy is manual:** pushing to **github.iu.edu** or **github.com** does **not** update **jlzhao.pages.iu.edu**. After you build assets and the résumé PDF, **upload** the **`j-adezhao/`** tree (at least **`site/`**, root **`index.html`**, **`resume.pdf`** beside **`site/`**) through whatever IU Pages upload flow you use.

1. **`./scripts/setup-env.sh`** if you need Jupyter; never commit **`.venv/`**.
2. Export **`resume/resume.pdf`** (or your canonical name) to the host.
3. **`./scripts/sync-assets.sh`** after changing **`media/images/profile/`**.
4. Upload **`site/`** and root **`index.html`** (and the PDF) as above.
5. Repo hygiene on push: no **`git add -f`** on ignored paths; no **`.env`**.

### GitHub Pages

No extra build step: open the subtree in the browser at **`…/j-adezhao/site/`** when the repo is published from **root**. If the site is served from **`/docs`**, mirror the **`j-adezhao/`** layout under **`docs/`** or paths will not line up.

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
| IU job descriptions | [`docs/employment/`](docs/employment/) |
| Simulations | [`lab/data/simulations/README.md`](lab/data/simulations/README.md) |
| Site entry | [`site/index.html`](site/index.html) |
| Profile snapshot | [`profile-summary.md`](profile-summary.md) |

---

## Tree (short)

```text
j-adezhao/
├── README.md              ← profile
├── WORKSPACE.md           ← this file
├── profile-summary.md     ← archived PDF as Markdown
├── index.html
├── planning/
├── docs/
│   └── employment/        ← IU position PDFs + README
├── publications/
├── research/              ← README.md = arc index
├── latex/archives.tex
├── resume/
├── media/images/
├── lab/{notebooks,experiments,data/}
├── site/
├── scripts/
└── config/
    ├── README.md        ← GitHub universal + site.json
    └── site.json
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
