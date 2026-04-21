# j-adezhao - Academic Workspace Guide

I maintain this folder as my IU capstone and thesis operations layer inside SP26. It combines project framing, research artifacts, writing drafts, and deployment files for IU Pages.

## Reader map

| If you want… | Open |
|----------------|------|
| Program-level framing | [`README.md`](README.md) |
| Thesis and capstone projects | `projects/madrid-stress-test.md`, `projects/mentorship-template.md`, `projects/agentic-ai-healthcare.md`, `projects/agentic-ai-education.md` |
| Research corpus map | [`research/README.md`](research/README.md) |
| Public verification notes | [`research/public-web-index.md`](research/public-web-index.md) |
| Site configuration | [`config/site.json`](config/site.json), [`config/README.md`](config/README.md) |
| Planning and execution checklist | [`planning/senior-year-2026-27.md`](planning/senior-year-2026-27.md) |
| Deployment and commands | This file (below) |

**Live:** [jlzhao.pages.iu.edu](https://jlzhao.pages.iu.edu/) · [resume PDF](https://jlzhao.pages.iu.edu/resume.pdf) · [site index](https://jlzhao.pages.iu.edu/site/)

**Git:** [github.com/jazhao-ucm/jazhao-ucm](https://github.com/jazhao-ucm/jazhao-ucm) (subtree **`j-adezhao/`**). Your IU copy often lives on **IU GitHub** (**github.iu.edu**); that is separate from the public mirror. Ignores: **[`.gitignore`](.gitignore)** (**`.venv/`**, **`lab/data/simulations/`** outputs, secrets, OS cruft).

**Mail:** 408 N. Union Street, Bloomington, IN 47405.

---

## Layout

| Path | Role |
|------|------|
| **`planning/`** | Senior-year registration snapshot and checklist; misc planning PDFs (e.g. **`request.pdf`**) when present. |
| **`projects/`** | Core capstone and thesis project documents. |
| **`research/`** | Research corpus, methods, evaluation notes, and theory artifacts. |
| **`publications/`** | Longer Markdown drafts (some are shells only). |
| **`latex/`** | **`archives.tex`** — build with **`./scripts/build-archives.sh`**. |
| **`resume/`** | Résumé TeX (`jade-zhao-resume-ats.tex`) and PDF exports (e.g. **`jade-zhao-resume-fa26.pdf`**). |
| **`docs/employment/`** | IU position description PDFs (e.g. FASE MAP Coordinator); see **`docs/employment/README.md`**. |
| **`media/images/`** | Source art; **`./scripts/sync-assets.sh`** → **`site/assets/images/`**. |
| **`lab/`** | Notebooks, **`data/`**, throwaway **`experiments/`**. |
| **`site/`** | Static pages for IU Pages; **path-relative** links so **GitHub Pages** under **`…/j-adezhao/`** works too. Root **`index.html`** → **`site/`**. |
| **`scripts/`** | env, LaTeX, assets, simulations. |
| **`config/`** | **`site.json`** manifest; **[`config/README.md`](config/README.md)** = GitHub universal hosting notes. |
| **`effective-disco/`** | Git submodule: **[jazhao-ucm/effective-disco](https://github.com/jazhao-ucm/effective-disco)** (vanilla JS Space Jump). After cloning SP26, run **`git submodule update --init j-adezhao/effective-disco`** (or **`--recursive`** from repo root) so the folder is populated. |
| **`profile-summary.md`** | Archived profile text; not a thesis or resume source of truth. |

---

## Publishing and hosting

Details: [`config/README.md`](config/README.md) (**GitHub universal** table).

### IU Pages workflow

**Deployment is manual:** pushing to **github.iu.edu** or **github.com** does not update **jlzhao.pages.iu.edu**. After preparing files, upload the **`j-adezhao/`** tree (at minimum **`site/`**, root **`index.html`**, and **`resume.pdf`**).

1. **`./scripts/setup-env.sh`** if you need Jupyter; never commit **`.venv/`**.
2. Export **`resume/resume.pdf`** (or canonical output name) for upload.
3. **`./scripts/sync-assets.sh`** after changing **`media/images/profile/`**.
4. Upload **`site/`** and root **`index.html`** (and the PDF) as above.
5. Repo hygiene on push: no **`git add -f`** on ignored paths; no **`.env`**.

### GitHub mirror behavior

No extra build step is required. Open the subtree at **`.../j-adezhao/site/`** when publishing from repository root. If hosting from **`/docs`**, mirror the same layout under **`docs/`**.

---

## IU vs UCM scope

| Wing | Role |
|------|------|
| **`j-adezhao/`** | IU capstone and thesis workspace -> IU Pages |
| **Course folders + `docs/INDEX.md`** | UCM semester materials. |

---

## Quick paths

| Topic | Path |
|-------|------|
| Research arc | [`research/README.md`](research/README.md) |
| Thesis project set | `projects/madrid-stress-test.md`, `projects/mentorship-template.md`, `projects/agentic-ai-healthcare.md`, `projects/agentic-ai-education.md` |
| Senior year | [`planning/senior-year-2026-27.md`](planning/senior-year-2026-27.md) |
| Codex | [`latex/archives.tex`](latex/archives.tex) |
| Résumé | [`resume/`](resume/) |
| IU job descriptions | [`docs/employment/`](docs/employment/) |
| Simulations | [`lab/data/simulations/README.md`](lab/data/simulations/README.md) |
| Site entry | [`site/index.html`](site/index.html) |
| Archived profile text | [`profile-summary.md`](profile-summary.md) |

---

## Tree (short)

```text
j-adezhao/
├── README.md              ← profile
├── WORKSPACE.md           ← this file
├── projects/              ← four flagship project files
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

## Research entry points

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

## Writing style

I keep writing concise, evidence-based, and publication-oriented. For mixed-audience readability, I only use paired terminology when it improves clarity.
