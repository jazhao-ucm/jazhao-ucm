#!/bin/bash
# Script to compile all LaTeX question files to PDF
# Requires pdflatex to be installed

echo "Compiling LaTeX files to PDF..."
echo ""

# Check if pdflatex is installed
if ! command -v pdflatex &> /dev/null; then
    echo "Error: pdflatex is not installed."
    echo ""
    echo "To install LaTeX:"
    echo "  macOS: Install MacTeX from https://www.tug.org/mactex/"
    echo "  Linux: sudo apt-get install texlive-full (or similar)"
    echo "  Windows: Install MiKTeX from https://miktex.org/"
    echo ""
    echo "Or use Overleaf online: https://www.overleaf.com/"
    exit 1
fi

# Compile each chapter
for file in chapter-*.tex; do
    if [ -f "$file" ]; then
        echo "Compiling $file..."
        pdflatex -interaction=nonstopmode "$file" > /dev/null 2>&1
        pdflatex -interaction=nonstopmode "$file" > /dev/null 2>&1  # Run twice for references
        if [ -f "${file%.tex}.pdf" ]; then
            echo "  ✓ Created ${file%.tex}.pdf"
            # Clean up auxiliary files
            rm -f "${file%.tex}.aux" "${file%.tex}.log" "${file%.tex}.out" 2>/dev/null
        else
            echo "  ✗ Failed to create PDF for $file"
        fi
    fi
done

# Compile master file
if [ -f "all-chapters-questions.tex" ]; then
    echo "Compiling all-chapters-questions.tex..."
    pdflatex -interaction=nonstopmode "all-chapters-questions.tex" > /dev/null 2>&1
    pdflatex -interaction=nonstopmode "all-chapters-questions.tex" > /dev/null 2>&1
    if [ -f "all-chapters-questions.pdf" ]; then
        echo "  ✓ Created all-chapters-questions.pdf"
        rm -f "all-chapters-questions.aux" "all-chapters-questions.log" "all-chapters-questions.out" 2>/dev/null
    fi
fi

echo ""
echo "Done! PDF files are ready."
