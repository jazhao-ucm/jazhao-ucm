# Practice Questions - LaTeX Files

This directory contains practice questions in LaTeX format for all chapters of the Management in Global Markets course.

## Files

- `chapter-1-questions.tex` - Globalization, Glocalization, Slowbalization
- `chapter-2-questions.tex` - Cross-Cultural Competence  
- `chapter-3-questions.tex` - International Business Strategy
- `all-chapters-questions.tex` - Master reference guide

## Compiling to PDF

### Option 1: Using the Script (macOS/Linux)

```bash
./compile-pdfs.sh
```

### Option 2: Manual Compilation

```bash
pdflatex chapter-1-questions.tex
pdflatex chapter-2-questions.tex
pdflatex chapter-3-questions.tex
pdflatex all-chapters-questions.tex
```

*Note: Run `pdflatex` twice for each file to ensure references are resolved correctly.*

### Option 3: Online (No Installation Required)

1. Go to [Overleaf](https://www.overleaf.com/)
2. Create a new project
3. Upload the `.tex` files
4. Click "Recompile" to generate PDFs

### Option 4: Install LaTeX Locally

**macOS:**
```bash
brew install --cask mactex
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get install texlive-full
```

**Windows:**
Download and install [MiKTeX](https://miktex.org/)

## Question Types

Each file includes:
- Fill-in-the-blank questions
- Multiple choice questions
- Short answer questions
- Case study questions
- Essay questions
- Answer keys

## Usage

1. Compile the `.tex` files to PDF
2. Print or view on screen
3. Answer questions without looking at the answer key
4. Check your answers using the answer key section
5. Review incorrect answers and study those topics

## Tips

- Compile each chapter separately for easier navigation
- Use the answer keys for self-assessment
- Create flashcards from fill-in-the-blank questions
- Practice essay questions for comprehensive understanding
- Time yourself when practicing for exam preparation
