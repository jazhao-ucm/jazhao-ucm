# j-adezhao — senior year IU lab

**What this is:** working tree for **senior year at Indiana University** and **IU-side** publish flows: drafts, TeX, notebooks, static **`site/`**, research notes. It lives inside the **SP26** monorepo at [`../README.md`](../README.md) and is **tracked in Git** like the rest of the repo (see **[`.gitignore`](.gitignore)** for what stays off remotes, including **`.venv/`** and local enrollment snapshots).

**Global (live):** **[jlzhao.pages.iu.edu](https://jlzhao.pages.iu.edu/)** · **[résumé PDF](https://jlzhao.pages.iu.edu/resume.pdf)** · **[research /site/](https://jlzhao.pages.iu.edu/site/)**. After you change `site/` or assets, sync or upload to IU Pages the way you already do for that host. Meta tags in `site/` should keep the **global** base URL.

**IU Bloomington address:** 408 N. Union Street, Bloomington, IN 47405.

**UCM** in sibling folders means **Universidad Complutense de Madrid** (semester coursework); **IU** here is **home institution** (Luddy).

**Public-facing profile copy** for GitHub lives in **[`README.md`](README.md)** (aligned with **[`../matchaxmoxie/site/`](../matchaxmoxie/site/)**). This file (**`WORKSPACE.md`**) is the **lab map**.

## Publishing checklist (global)

1. Run **`./scripts/setup-env.sh`** on a fresh clone if you need Jupyter; do not commit **`.venv/`** (ignored).
2. Build or export **résumé** from [`resume/`](resume/) and publish **`resume.pdf`** to IU Pages if that is your canonical PDF name there.
3. Upload or sync **`site/`** (and root [`index.html`](index.html) redirect) to IU Pages so the live site matches this tree.
4. **`git status`** inside SP26: confirm no ignored paths are force-added; no **`.env`** files.

## IU vs UCM in this clone

| Wing | Role |
|------|------|
| **This folder (`j-adezhao/`)** | IU lab: research archive, Le Chat / agentic evaluation, résumé TeX, simulations, `site/` → publish to IU Pages |
| **Course folders + `docs/INDEX.md`** | UCM semester materials (product management, EU, Spanish, strategy, etc.) |

**Senior-year IU lineup (local file, not in Git):** [`docs/planned-iu-terms-2026-27.md`](docs/planned-iu-terms-2026-27.md) is listed in **`.gitignore`** so enrollment snapshots stay on your machine only. Edit when Student Center changes; remove the ignore rule if you ever want it versioned.

## Quick map

| Area | Path |
|------|------|
| LaTeX codex | [`archives.tex`](archives.tex) |
| Résumé | [`resume/`](resume/) (TeX + exported PDF); ship **`resume.pdf`** to IU Pages as [jlzhao.pages.iu.edu/resume.pdf](https://jlzhao.pages.iu.edu/resume.pdf) |
| Long-form research markdown and TeX | [`docs/research/`](docs/research/) |
| Planned IU terms (senior year) | [`docs/planned-iu-terms-2026-27.md`](docs/planned-iu-terms-2026-27.md) |
| Short papers / drafts | [`docs/papers/`](docs/papers/) |
| Datasets and simulation outputs | [`data/`](data/) |
| Image sources | [`assets/images/`](assets/images/) |
| Jupyter and scratch work | [`work/notebooks/`](work/notebooks/), [`work/experiments/`](work/experiments/) |
| Static preview site | [`site/`](site/) (redirect from root [`index.html`](index.html)) |
| Automation | [`scripts/`](scripts/) (`build-archives.sh`, `sync-assets.sh`, `run-simulations.sh`, `setup-env.sh`) |
| SEO baseline JSON | [`config/seo-metadata.json`](config/seo-metadata.json) |

## Tree (full)

```text
j-adezhao/
├── .gitignore          → venv, OS cruft, local enrollment MD, secrets
├── README.md           → profile-style intro (matchaxmoxie); paste into profile repo if you want
├── WORKSPACE.md        → this lab index
├── archives.tex
├── index.html          → redirect to site/
├── scripts/
├── config/
├── resume/
├── docs/
│   ├── papers/
│   └── research/
├── data/
│   ├── interviews/
│   └── simulations/
├── assets/images/
│   ├── originals/
│   ├── profile/
│   └── diagrams/
├── work/
│   ├── README.md
│   ├── notebooks/
│   └── experiments/
└── site/
    ├── index.html
    ├── research/
    └── assets/
```

## Entry points (content)

- **`archives.tex`:** theory, formulas, architecture notes, question sets.  
- **`docs/research/agentic-systems/ux-audit/le-chat-dossier.md`:** unified Le Chat dossier.  
- **`docs/research/agentic-systems/ux-audit/agent-trust-matrix.md`:** trust framework notes.  
- **`docs/research/agentic-systems/formulas/agentic-ai-formula-primer.md`:** formula primer.  
- **`docs/research/agentic-systems/panels/agent-panel-feedback-2026-03-31.md`:** panel critique archive.  
- **`docs/research/ethics-governance/le-chat-question-bank.md`:** governance question set.  
- **`docs/research/high-impact-research-priorities.md`:** roadmap.  
- **`site/index.html`:** local index; **`site/research/`** summary pages.

## Commands

Serve from this folder:

```bash
cd j-adezhao
python3 -m http.server 8080
```

Build and sync:

```bash
cd j-adezhao
./scripts/build-archives.sh
./scripts/sync-assets.sh
./scripts/run-simulations.sh   # optional; needs Jupyter (see scripts/setup-env.sh)
```

## Links (IU + portfolio + SP26)

- **IU Pages (this workspace):** [jlzhao.pages.iu.edu](https://jlzhao.pages.iu.edu/) · [résumé PDF](https://jlzhao.pages.iu.edu/resume.pdf) · [research /site/](https://jlzhao.pages.iu.edu/site/)  
- **Luddy School:** [luddy.indiana.edu](https://luddy.indiana.edu/)  
- **Public portfolio:** [matchaxmoxie.github.io/matchaxmoxie](https://matchaxmoxie.github.io/matchaxmoxie/)  
- **SP26 course repo (GitHub):** [github.com/jazhao-ucm/jazhao-ucm](https://github.com/jazhao-ucm/jazhao-ucm)  
- **Local portfolio site:** [`../matchaxmoxie/site/index.html`](../matchaxmoxie/site/index.html)  
- **Local photo log:** [`../jadewowgreen/README.md`](../jadewowgreen/README.md)  

## Style notes (local)

Section titles sometimes pair **Latin + English** for readability. Root and site HTML use canonical and social metadata with explicit image alt text where applicable.
