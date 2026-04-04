# SP26

One Git repo for **spring 2026 Madrid-term coursework** at **UCM** (Universidad Complutense de Madrid), plus **shared course docs**, **scripts**, and **portfolio / IU lab** subtrees you keep in the same clone.

**Remote:** [github.com/jazhao-ucm/jazhao-ucm](https://github.com/jazhao-ucm/jazhao-ucm) · **branch:** `main`

---

## Start here

| What you need | Where |
|---------------|--------|
| **Weeks, dates, topics** (all UCM courses) | **[`docs/INDEX.md`](docs/INDEX.md)** |
| Cross-course docs and tooling notes | **[`docs/README.md`](docs/README.md)** |
| **IU lab** (research arc, IU Pages site, senior checklist) | **[`j-adezhao/WORKSPACE.md`](j-adezhao/WORKSPACE.md)** · **[`j-adezhao/research/README.md`](j-adezhao/research/README.md)** · profile **[`j-adezhao/README.md`](j-adezhao/README.md)** |
| Cursor rules for agents | **[`.cursor/rules/`](.cursor/rules/)** (`sp26-course-notes.mdc`) |

Never guess which week a date belongs to: **always open [`docs/INDEX.md`](docs/INDEX.md) first.**

---

## UCM courses (this term)

| Folder | Course |
|--------|--------|
| [`product-management/`](product-management/) | Product Management |
| [`introduction-to-eu/`](introduction-to-eu/) | Introduction to the EU |
| [`management-global-markets/`](management-global-markets/) | Management in Global Markets |
| [`strategic-management/`](strategic-management/) | Strategic Management |
| [`spanish-for-beginners/`](spanish-for-beginners/) | Spanish for Beginners |

Each course **`README.md`** lists structure, file types, and inventory.

---

## Spring 2026 calendar

- **Spring break:** Mar 27 to Apr 6  
- **No class:** Apr 30  
- **Final exams:** May 18 to May 22  

---

## What else lives in this clone

### Shared (not a single course)

| Path | Purpose |
|------|---------|
| [`docs/`](docs/) | Global week index, extra documentation |
| [`scripts/`](scripts/) | Helpers (for example index and week checks) |
| `sp26-midterm/` *(optional)* | Combined midterm one-pagers when you add them |

### Portfolios and IU lab

These are **tracked** in this repo (except paths ignored inside each subtree, such as **`j-adezhao/.venv/`** and generated simulation outputs).

| Path | Role |
|------|------|
| [`jadewowgreen/`](jadewowgreen/) | Madrid photo portfolio (`site/`, `images/`). Deploy: GitHub Pages. See that **`README.md`**. |
| [`matchaxmoxie/`](matchaxmoxie/) | Informatics portfolio (HTML, LaTeX, mirror scripts). Live: [matchaxmoxie.github.io/matchaxmoxie](https://matchaxmoxie.github.io/matchaxmoxie/). See **`README.md`** and [`SYNC-FROM-MIRROR.md`](matchaxmoxie/SYNC-FROM-MIRROR.md). |
| [`j-adezhao/`](j-adezhao/) | **IU** side: **`planning/`** (senior year), **`research/`** (notes and TeX), **`publications/`** (drafts), **`lab/`** (notebooks), **`site/`** → [IU Pages](https://jlzhao.pages.iu.edu/), **`resume/`**, **`latex/`**, **`media/`**. Entry: **`j-adezhao/WORKSPACE.md`**. |

### Live sites (quick links)

| Site | URL |
|------|-----|
| Informatics portfolio | [matchaxmoxie.github.io/matchaxmoxie](https://matchaxmoxie.github.io/matchaxmoxie/) |
| Madrid photos | [jadewowgreen.github.io/jadewowgreen/site](https://jadewowgreen.github.io/jadewowgreen/site/) |
| IU research + résumé (source `j-adezhao/`) | [jlzhao.pages.iu.edu](https://jlzhao.pages.iu.edu/) · [résumé PDF](https://jlzhao.pages.iu.edu/resume.pdf) · [/site/](https://jlzhao.pages.iu.edu/site/) |

---

## Class note format

Formal outline: Roman numerals, capital letters, Arabic numerals, lowercase letters for nesting.

---

## Quick commands

Check INDEX against week folders:

```bash
python3 scripts/check_index_weeks.py
```

Build LaTeX from the directory that contains the `.tex` file:

```bash
pdflatex filename.tex
```

Preview IU lab site locally:

```bash
cd j-adezhao && python3 -m http.server 8080
```

---

## Documentation style (short)

- Plain punctuation, clear labels. Greco-Latin + English headings are fine where they fit (for example *Theoria (Learning)*).
- Markdown images: descriptive **alt** text; captions separate from alt.
- HTML and site files: keep canonical and social metadata aligned.

More detail: [`docs/README.md`](docs/README.md).
