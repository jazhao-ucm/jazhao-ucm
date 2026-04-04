# j-adezhao — IU lab (SP26 subtree)

**Purpose:** Senior-year and **IU-side** work in one tree: research markdown and TeX, **`archives.tex`**, **`resume/`**, Jupyter under **`work/`**, static **`site/`** for [IU Pages](https://jlzhao.pages.iu.edu/), and config. Tracked in **[SP26](https://github.com/jazhao-ucm/jazhao-ucm)**; see **[`.gitignore`](.gitignore)** for what never ships (**`.venv/`**, **`docs/planned-iu-terms-*.md`**, secrets, OS junk).

**Live site:** [jlzhao.pages.iu.edu](https://jlzhao.pages.iu.edu/) · [résumé PDF](https://jlzhao.pages.iu.edu/resume.pdf) · [research /site/](https://jlzhao.pages.iu.edu/site/)

**Public profile README (matchaxmoxie voice):** [`README.md`](README.md)

**IU Bloomington:** 408 N. Union Street, Bloomington, IN 47405.

**Sibling coursework:** **UCM** (Madrid term) lives in other folders in the same monorepo; **`docs/INDEX.md`** at repo root is the course calendar.

---

## Publishing checklist (IU Pages)

1. **`./scripts/setup-env.sh`** if you need Jupyter locally; never commit **`.venv/`**.
2. Build or export from **`resume/`** and publish **`resume.pdf`** to IU Pages if that is your canonical URL.
3. Sync **`site/`** and root **`index.html`** (redirect) to IU Pages so the live tree matches Git.
4. Before **`git push`:** no **`git add -f`** on ignored paths; no **`.env`**.

---

## IU vs UCM in this clone

| Wing | Role |
|------|------|
| **`j-adezhao/`** | IU lab: research, résumé, notebooks, `site/` → IU Pages |
| **Course folders + `docs/INDEX.md`** | UCM semester materials |

**Enrollment planning (local only):** [`docs/planned-iu-terms-2026-27.md`](docs/planned-iu-terms-2026-27.md) is **gitignored**. Edit on disk; drop the ignore rule in **`.gitignore`** if you want it versioned.

---

## Quick map

| Area | Path |
|------|------|
| LaTeX codex | [`archives.tex`](archives.tex) |
| Résumé | [`resume/`](resume/) |
| Research (markdown + TeX) | [`docs/research/`](docs/research/) (includes `agentic-systems/`, `agentic-theory/`, `ethics-governance/`, `womens-health/`, …) |
| Papers / drafts | [`docs/papers/`](docs/papers/) |
| Data and simulations | [`data/`](data/) · outputs under [`data/simulations/`](data/simulations/) are **gitignored** (see that README) |
| Images | [`assets/images/`](assets/images/) (see [`assets/images/README.md`](assets/images/README.md)) |
| Notebooks and experiments | [`work/notebooks/`](work/notebooks/), [`work/experiments/`](work/experiments/) |
| Static site | [`site/`](site/) · root [`index.html`](index.html) → `site/` |
| Scripts | [`scripts/`](scripts/) |
| SEO JSON | [`config/seo-metadata.json`](config/seo-metadata.json) |

---

## Tree (abbreviated)

```text
j-adezhao/
├── .gitignore
├── README.md              ← profile / GitHub-facing copy
├── WORKSPACE.md           ← this file
├── archives.tex
├── index.html
├── config/
├── resume/
├── docs/
│   ├── papers/
│   └── research/          ← nested areas; see Quick map
├── data/
│   └── simulations/     ← README only in Git; run ./scripts/run-simulations.sh for outputs
├── assets/images/
├── work/
│   ├── notebooks/
│   └── experiments/
├── scripts/
└── site/
    ├── index.html
    ├── assets/
    └── research/
```

---

## Entry points (content)

- **`archives.tex`:** theory, formulas, architecture notes, question sets.
- **`docs/research/agentic-systems/ux-audit/le-chat-dossier.md`:** Le Chat dossier.
- **`docs/research/agentic-systems/ux-audit/agent-trust-matrix.md`:** trust framework.
- **`docs/research/agentic-systems/formulas/agentic-ai-formula-primer.md`:** formula primer.
- **`docs/research/agentic-systems/panels/agent-panel-feedback-2026-03-31.md`:** panel archive.
- **`docs/research/ethics-governance/le-chat-question-bank.md`:** governance questions.
- **`docs/research/high-impact-research-priorities.md`:** roadmap.
- **`site/index.html`:** local index; **`site/research/`** summaries.

---

## Commands

Preview locally:

```bash
cd j-adezhao
python3 -m http.server 8080
```

Build and tooling:

```bash
cd j-adezhao
./scripts/build-archives.sh
./scripts/sync-assets.sh
./scripts/run-simulations.sh   # optional; needs Jupyter (see scripts/setup-env.sh)
```

---

## Links

- **IU Pages:** [jlzhao.pages.iu.edu](https://jlzhao.pages.iu.edu/)
- **Luddy:** [luddy.indiana.edu](https://luddy.indiana.edu/)
- **Informatics portfolio:** [matchaxmoxie.github.io/matchaxmoxie](https://matchaxmoxie.github.io/matchaxmoxie/)
- **SP26 repo:** [github.com/jazhao-ucm/jazhao-ucm](https://github.com/jazhao-ucm/jazhao-ucm)
- **Local portfolio HTML:** [`../matchaxmoxie/site/`](../matchaxmoxie/site/)
- **Photo portfolio:** [`../jadewowgreen/README.md`](../jadewowgreen/README.md)

---

## Style (this folder)

Headings may use **Latin + English** where it helps. HTML and metadata use canonical URLs and explicit image **alt** text where applicable.
