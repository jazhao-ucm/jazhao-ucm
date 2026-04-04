# UCM Course Notes

Course notes and study materials for UCM (Universidad Complutense de Madrid), organized as a multi-course monorepo.

Primary index for week-to-date-to-topic mapping:  
[`docs/INDEX.md`](docs/INDEX.md)

## Current Courses

- `product-management`
- `introduction-to-eu`
- `management-global-markets`
- `strategic-management`
- `spanish-for-beginners`

## Academic Calendar (Spring 2026)

- Spring break: Mar 27 to Apr 6
- No class day: Apr 30
- Final exams window: May 18 to May 22

## Repository Layout

| Path | Purpose |
| :--- | :--- |
| [`docs`](docs/) | Cross-course docs and global week index. |
| [`scripts`](scripts/) | Repo helpers, including index/week consistency checks. |
| [`product-management`](product-management/) | Product Management notes and course materials. |
| [`introduction-to-eu`](introduction-to-eu/) | EU notes, reading summaries, and topic files. |
| [`management-global-markets`](management-global-markets/) | Global markets notes, cases, and business plans. |
| [`strategic-management`](strategic-management/) | Strategy notes, frameworks, and case material. |
| [`spanish-for-beginners`](spanish-for-beginners/) | Spanish class notes, PDFs, and scans. |
| [`ucm-midterm`](ucm-midterm/) | One-page midterm sheets and combined review files. |
| [`jadewowgreen`](jadewowgreen/) | Madrid portfolio: `site/`, `docs/` (Pages), episode photos. |
| [`matchaxmoxie`](matchaxmoxie/) | Portfolio subtree with site, latex, and mirror scripts. Scheduled mirror pull notes: [`matchaxmoxie/SYNC-FROM-MIRROR.md`](matchaxmoxie/SYNC-FROM-MIRROR.md). |
| [`j.adezhao`](j.adezhao/) | Local-only path, do not commit or push. |

## Note Format Standard

Class notes use a formal outline structure:

- Roman numerals for main sections
- Capital letters for subsections
- Arabic numerals for supporting points
- Lowercase letters for nested detail

Each course `README.md` is the local source of structure and file inventory.  
`docs/INDEX.md` is the global source of truth for week dates and topics.

## Quick Commands

Validate index-to-week folder alignment:

```bash
python3 scripts/check_index_weeks.py
```

Build LaTeX from the folder that contains the `.tex` file:

```bash
pdflatex filename.tex
```

## Aesthetica Bilinguis (Greco-Latin + English Pattern)

- Titling follows a Greco-Latin plus English pairing where useful, for example `Theoria (Learning)`.
- Style favors precise structure, consistent labels, and plain punctuation.
- Documentation edits preserve source meaning and prioritize clarity over decoration.

## SEO et Textus Alternus (SEO and Alt Text Standard)

- Markdown image entries use explicit, descriptive alt text that states what is visible in the frame.
- Captions stay concise and distinct from alt text so accessibility and display copy serve different roles.
- HTML-adjacent docs keep canonical metadata and social preview alt-text conventions aligned with site standards.
