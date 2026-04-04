# SP26

**Canonical workspace:** spring **2026 Madrid-term UCM** courses, shared **`docs/`** and **`scripts/`**, **`j-adezhao/`** (IU lab, IU Pages, research, résumé), **`matchaxmoxie/`** and **`jadewowgreen/`** (portfolio subtrees), and **jadexzhao** links (Canva, LinkedIn, Instagram, email). Org repos and Pages URLs are **deploy mirrors**; you edit **here**.

**Remote:** [github.com/jazhao-ucm/jazhao-ucm](https://github.com/jazhao-ucm/jazhao-ucm) · **`main`**

---

## Start here

| Need | Where |
|------|--------|
| Weeks, dates, topics (all courses) | **[`docs/INDEX.md`](docs/INDEX.md)** |
| Cross-course docs, tooling | **[`docs/README.md`](docs/README.md)** |
| IU lab, profile, research arc | **[`j-adezhao/WORKSPACE.md`](j-adezhao/WORKSPACE.md)** · **[`j-adezhao/research/README.md`](j-adezhao/research/README.md)** · **[`j-adezhao/README.md`](j-adezhao/README.md)** |
| Cursor / agent rules | **[`.cursor/rules/`](.cursor/rules/)** (`sp26-course-notes.mdc`) |

Do **not** guess a week for a date: use **[`docs/INDEX.md`](docs/INDEX.md)** first.

---

## UCM courses (this term)

| Folder | Course |
|--------|--------|
| [`product-management/`](product-management/) | Product Management |
| [`introduction-to-eu/`](introduction-to-eu/) | Introduction to the EU |
| [`management-global-markets/`](management-global-markets/) | Management in Global Markets |
| [`strategic-management/`](strategic-management/) | Strategic Management |
| [`spanish-for-beginners/`](spanish-for-beginners/) | Spanish for Beginners |

Each course **`README.md`**: structure, file types, inventory.

---

## Spring 2026 calendar

- **Spring break:** Mar 27 to Apr 6  
- **No class:** Apr 30  
- **Final exams:** May 18 to May 22  

---

## Layout

### Shared

| Path | Purpose |
|------|---------|
| [`docs/`](docs/) | Week index, cross-course docs |
| [`scripts/`](scripts/) | Helpers (index and week checks, etc.) |
| `sp26-midterm/` *(optional)* | Combined midterm one-pagers |

### Portfolios and IU

Edits live **in this repo** (subtrees may ignore **`.venv/`**, simulation outputs, etc.). Push **matchaxmoxie** and **jadewowgreen** to their org repos with each folder’s scripts when you publish.

| Path | Role |
|------|------|
| [`jadewowgreen/`](jadewowgreen/) | Madrid photo site. **[`README.md`](jadewowgreen/README.md)** · [live](https://jadewowgreen.github.io/jadewowgreen/site/) |
| [`matchaxmoxie/`](matchaxmoxie/) | Informatics portfolio (HTML, LaTeX). **[`README.md`](matchaxmoxie/README.md)** · [live](https://matchaxmoxie.github.io/matchaxmoxie/) · [`SYNC-FROM-MIRROR.md`](matchaxmoxie/SYNC-FROM-MIRROR.md) |
| [`j-adezhao/`](j-adezhao/) | **IU** side of matchaxmoxie + this repo: **`research/`**, **`site/`** ([IU Pages](https://jlzhao.pages.iu.edu/)), **`resume/`**, **`lab/`**, **`planning/`**, **`publications/`**, **`latex/`**, **`media/`**. Start **[`j-adezhao/WORKSPACE.md`](j-adezhao/WORKSPACE.md)**. |

### Quick links

| What | URL |
|------|-----|
| Informatics portfolio | [matchaxmoxie.github.io/matchaxmoxie](https://matchaxmoxie.github.io/matchaxmoxie/) |
| Madrid photos | [jadewowgreen.github.io/jadewowgreen/site](https://jadewowgreen.github.io/jadewowgreen/site/) |
| IU research + résumé | [jlzhao.pages.iu.edu](https://jlzhao.pages.iu.edu/) · [résumé PDF](https://jlzhao.pages.iu.edu/resume.pdf) · [/site/](https://jlzhao.pages.iu.edu/site/) |
| jadexzhao | [Canva](https://jadexzhao.my.canva.site/) · [LinkedIn](https://www.linkedin.com/in/jadexzhao) · [Instagram](https://instagram.com/j.adezhao) |

---

## Class notes

Formal outline nesting: Roman numerals, capitals, Arabic numerals, lowercase letters.

---

## Commands

```bash
python3 scripts/check_index_weeks.py
```

```bash
pdflatex filename.tex
```

```bash
cd j-adezhao && python3 -m http.server 8080
```

---

## Doc style (short)

Plain punctuation, clear labels. Greco-Latin + English headings are fine (for example *Theoria (Learning)*). Markdown images: good **alt** text. HTML / social: keep canonical and Open Graph metadata aligned.

More: [`docs/README.md`](docs/README.md).
