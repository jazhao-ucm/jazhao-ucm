# j-adezhao — IU lab (SP26 subtree)

**Purpose:** Senior-year and **IU-side** work: **`research/`**, **`publications/`**, **`latex/archives.tex`**, **`resume/`**, **`lab/`** (notebooks, data, scratch experiments), static **`site/`** for [IU Pages](https://jlzhao.pages.iu.edu/), and **`config/`**. Tracked in **[SP26](https://github.com/jazhao-ucm/jazhao-ucm)**; see **[`.gitignore`](.gitignore)** for what never ships (**`.venv/`**, simulation outputs under **`lab/data/simulations/`**, secrets, OS junk).

**Senior year plan:** [`planning/senior-year-2026-27.md`](planning/senior-year-2026-27.md)

**Live site:** [jlzhao.pages.iu.edu](https://jlzhao.pages.iu.edu/) · [résumé PDF](https://jlzhao.pages.iu.edu/resume.pdf) · [research /site/](https://jlzhao.pages.iu.edu/site/)

**Public profile README:** [`README.md`](README.md)

**IU Bloomington:** 408 N. Union Street, Bloomington, IN 47405.

**Sibling coursework:** **UCM** (Madrid term) lives in other folders; repo-root **`docs/INDEX.md`** is the course calendar.

---

## Layout (top level)

| Folder | Role |
|--------|------|
| **`planning/`** | Senior-year courses and checklist (IU). |
| **`publications/`** | Longer-form drafts and papers (Markdown). |
| **`research/`** | Research notes, audits, theory TeX, priorities. |
| **`latex/`** | **`archives.tex`** (codex; build with **`scripts/build-archives.sh`**). |
| **`resume/`** | Résumé TeX and exported PDF. |
| **`media/images/`** | Source images; **`sync-assets.sh`** feeds **`site/assets/images/`**. |
| **`lab/`** | Notebooks, **`data/`**, short-lived **`experiments/`**. |
| **`site/`** | Static IU Pages site (plus root **`index.html`** redirect). |
| **`scripts/`** | Setup, simulations, asset sync, LaTeX build. |
| **`config/`** | SEO JSON baseline. |

---

## Publishing checklist (IU Pages)

1. **`./scripts/setup-env.sh`** if you need Jupyter locally; never commit **`.venv/`**.
2. Build or export from **`resume/`** and publish **`resume.pdf`** to IU Pages if that is your canonical URL.
3. **`./scripts/sync-assets.sh`** after changing profile images.
4. Sync **`site/`** and root **`index.html`** to IU Pages.
5. Before **`git push`:** no **`git add -f`** on ignored paths; no **`.env`**.

---

## IU vs UCM in this clone

| Wing | Role |
|------|------|
| **`j-adezhao/`** | IU lab → IU Pages |
| **Course folders + repo `docs/INDEX.md`** | UCM semester materials |

---

## Quick map

| Area | Path |
|------|------|
| Senior year (IU) | [`planning/senior-year-2026-27.md`](planning/senior-year-2026-27.md) |
| LaTeX codex | [`latex/archives.tex`](latex/archives.tex) |
| Résumé | [`resume/`](resume/) |
| Research | [`research/`](research/) (`agentic-systems/`, `agentic-theory/`, `ethics-governance/`, `womens-health/`, …) |
| Publications | [`publications/`](publications/) |
| Lab (notebooks, data) | [`lab/`](lab/) · simulation outputs: [`lab/data/simulations/README.md`](lab/data/simulations/README.md) |
| Images | [`media/images/`](media/images/) |
| Static site | [`site/`](site/) · [`index.html`](index.html) |
| Scripts | [`scripts/`](scripts/) |
| SEO | [`config/seo-metadata.json`](config/seo-metadata.json) |

---

## Tree (abbreviated)

```text
j-adezhao/
├── README.md
├── WORKSPACE.md
├── index.html
├── planning/
├── publications/
├── research/
├── latex/
│   └── archives.tex
├── resume/
├── media/images/
├── lab/
│   ├── notebooks/
│   ├── experiments/
│   └── data/
│       └── simulations/    ← outputs gitignored; see README
├── site/
├── scripts/
└── config/
```

---

## Entry points (content)

- **`latex/archives.tex`:** theory, formulas, architecture notes, question sets.
- **`research/agentic-systems/ux-audit/le-chat-dossier.md`:** Le Chat dossier.
- **`research/agentic-systems/ux-audit/agent-trust-matrix.md`:** trust framework.
- **`research/agentic-systems/formulas/agentic-ai-formula-primer.md`:** formula primer.
- **`research/agentic-systems/panels/agent-panel-feedback-2026-03-31.md`:** panel archive.
- **`research/ethics-governance/le-chat-question-bank.md`:** governance questions.
- **`research/high-impact-research-priorities.md`:** roadmap.
- **`site/index.html`:** local index; **`site/research/`** summaries.

---

## Commands

```bash
cd j-adezhao
python3 -m http.server 8080
```

```bash
cd j-adezhao
./scripts/build-archives.sh
./scripts/sync-assets.sh
./scripts/run-simulations.sh   # optional; see scripts/setup-env.sh
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
