# UCM monorepo

Course notes and materials for **UCM** (Universidad Complutense de Madrid), plus shared docs, scripts, and personal project subtrees in one workspace.

## Start here

| What | Where |
|------|--------|
| Week, dates, topics (all courses) | **[`docs/INDEX.md`](docs/INDEX.md)** |
| Cross-course docs, INDEX context, tooling | **[`docs/README.md`](docs/README.md)** |
| Cursor agent rules | **[`.cursor/rules/`](.cursor/rules/)** (start with `ucm-course-notes.mdc`) |

## Courses

| Folder | Course |
|--------|--------|
| [`product-management/`](product-management/) | Product Management |
| [`introduction-to-eu/`](introduction-to-eu/) | Introduction to the EU |
| [`management-global-markets/`](management-global-markets/) | Management in Global Markets |
| [`strategic-management/`](strategic-management/) | Strategic Management |
| [`spanish-for-beginners/`](spanish-for-beginners/) | Spanish for Beginners |

Each course **`README.md`** is the inventory and structure for that course.

## Spring 2026 calendar

- Spring break: Mar 27 to Apr 6  
- No class: Apr 30  
- Final exams: May 18 to May 22  

## Monorepo layout

### Shared (courses use these)

| Path | Purpose |
|------|---------|
| [`docs/`](docs/) | Global week index, extra documentation |
| [`scripts/`](scripts/) | Helpers (e.g. index and week checks) |
| `ucm-midterm/` *(optional)* | Midterm one-pagers; create this folder when you add combined sheets. |

### Personal subtrees (see each README)

These live inside the same clone for convenience. **`jadewowgreen`** and **`matchaxmoxie`** follow their own deploy and mirror workflows; **`j-adezhao`** is local-only and gitignored.

| Path | Role |
|------|------|
| [`jadewowgreen/`](jadewowgreen/) | Madrid photo portfolio (`site/`, `images/`) |
| [`matchaxmoxie/`](matchaxmoxie/) | Informatics portfolio site, LaTeX, mirror scripts |
| [`j-adezhao/`](j-adezhao/) | Private research and prototypes (do not commit; see that folder’s README) |

**GitHub Pages (live sites):**

| Site | URL |
|------|-----|
| Informatics portfolio (matchaxmoxie) | [matchaxmoxie.github.io/matchaxmoxie](https://matchaxmoxie.github.io/matchaxmoxie/) |
| Madrid photo portfolio (jadewowgreen) | [jadewowgreen.github.io/jadewowgreen/site](https://jadewowgreen.github.io/jadewowgreen/site/) |
| Research archive subtree (UCM repo Pages, if enabled) | [jazhao-ucm.github.io/j-adezhao/site](https://jazhao-ucm.github.io/j-adezhao/site/) |

Mirror notes for matchaxmoxie: [`matchaxmoxie/SYNC-FROM-MIRROR.md`](matchaxmoxie/SYNC-FROM-MIRROR.md).

## Class note format

Formal outline: Roman numerals, capital letters, Arabic numerals, lowercase letters for nesting.  
Do not guess which week a date belongs to; use **`docs/INDEX.md`**.

## Quick commands

Check INDEX against week folders:

```bash
python3 scripts/check_index_weeks.py
```

Build LaTeX from the directory that contains the `.tex` file:

```bash
pdflatex filename.tex
```

## Documentation style (short)

- Prefer plain punctuation and clear labels. Where it helps, headings can use a **Greco-Latin + English** pair (e.g. *Theoria (Learning)*).
- Markdown images: descriptive **alt** text; captions separate from alt.
- HTML or site-adjacent files: keep canonical and social metadata consistent.

For a slightly longer version of the doc-style bullets, see [`docs/README.md`](docs/README.md).
