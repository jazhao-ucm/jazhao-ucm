# UCM Course Notes

Course notes and materials for UCM (Universidad Complutense de Madrid).

*Last updated: March 2026*

**[→ Index of all courses and weeks](docs/INDEX.md)** (file: `docs/INDEX.md`)

## What's in it

- **`docs/`** – Week-by-week dates and topics for every course ([INDEX.md](docs/INDEX.md))
- **`scripts/`** – Small repo helpers; e.g. `python3 scripts/check_index_weeks.py` checks that `docs/INDEX.md` week rows have matching `week-*` folders per course
- **`.gitignore`** / **`.markdownlint.yaml`** (repo root) – LaTeX build ignores and Markdown lint defaults for all course folders (no per-course copies)
- **`.cursorrules`** – Single Cursor / agent rules file for this repo (how to edit notes, push, INDEX, duplicates)
- **`product-management/`** – Product Management: class notes, Business Model Canvas, value creation/capture, PM slides, Zara case, product design process, lean validation, design thinking, IDEO, SDLC, manufacturing process design
- **`introduction-to-eu/`** – Introduction to the EU: class notes, reading summaries (Zweig, Judt, Anderson, Vinen, Gilbert, Kenny & Pearce, etc.), reading template in week-1, EU institutions, Gibraltar/accession, EMU, citizenship
- **`management-global-markets/`** – Management in Global Markets: class notes, globalization/slowbalization, supply chains, international business strategies, global portfolio, internationalization, HR management, business plans (CaféOlé, Tierra Bar)
- **`strategic-management/`** – Strategic Management: class notes, strategy & objectives, PEST, Five Forces, environment analysis, business cases (Madonna/Lola Flores), clusters
- **`spanish-for-beginners/`** – Spanish for Beginners: dated class notes where present, Aula Plus PDFs, midterm/listening LaTeX in later weeks, homework scans
- **`ucm-midterm/`** – One-page cheat sheets for all 5 UCM courses (spanish-only, intro-eu-only, product-mgmt-only, strategic-only, management-global-only) and combined `blue-notes-all.tex`
- **`jadewowgreen/`** – Project images and materials
- **`matchaxmoxie/`** – Portfolio: root **`README.md`** (deploy); **`site/`** = Pages + MIT **`LICENSE`**, **`CONTRIBUTING.md`** ([live](https://matchaxmoxie.github.io/matchaxmoxie/)); **`latex/`** = `jade-zhao-*.tex`, **`BUILD.md`**; **`scripts/`** = subtree push to [matchaxmoxie/matchaxmoxie](https://github.com/matchaxmoxie/matchaxmoxie); **`docs/`** = `.markdownlint.yaml`.
- **`j.adezhao/`** – DO NOT COMMIT OR PUSH (local-only)

## Note-Taking Format

All class notes follow the **Formal Outline Note Taking System** format:
- **Roman numerals (I, II, III, IV, V, etc.)** for main topics
- **Capital letters (A, B, C, D, etc.)** for subheadings
- **Arabic numerals (1, 2, 3, etc.)** for supporting details
- **Lowercase letters (a, b, c, etc.)** for nested sub-details

Each course folder has its own README with a detailed week-by-week breakdown of what's inside.

**LaTeX:** From the folder containing a `.tex` file, run `pdflatex filename.tex` to build the PDF.
