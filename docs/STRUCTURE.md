# Repository Structure Documentation
## UCM Study Materials Organization

---

## 📁 Main Directory Structure

```
UCM/
├── README.md                    # Main overview (ONLY file at root)
├── STRUCTURE.md                 # This file - structure documentation
│
├── courses/                     # All academic course materials
│   ├── introduction-to-eu-notes/
│   ├── management-global-market-notes/
│   ├── product-management-notes/
│   ├── spanish-for-beginners-notes/
│   └── strategic-management-notes/
│
└── personal-documents/          # Personal files (resume, etc.)
    ├── resume.pdf
    └── resume.tex
```

---

## 🎓 Course Organization Pattern

Each course follows a consistent organizational structure:

### Standard Course Structure

```
course-name/
├── README.md                    # Course-specific overview
├── notes/                       # Class lecture notes
│   └── [organized by date/month]
├── study-materials/             # Study guides and references
│   ├── guides/                 # Study guides
│   ├── references/              # Bibliographies, references
│   └── exercises/              # Practice exercises
├── materials/                   # PDFs and supplementary materials
│   ├── lectures/              # Lecture slides
│   ├── papers/                # Required readings
│   ├── tools/                 # Frameworks and tools
│   └── course-info/           # Syllabus, etc.
└── exams/                      # Practice exams
    ├── midterm/
    └── final/
```

---

## 📚 Individual Course Structures

### 1. Product Management
**Location:** `courses/product-management-notes/`

```
01-lecture-notes/               # Numbered for clear ordering
├── january/
└── february/
02-study-materials/
├── guides/
├── references/
└── exercises/
03-course-materials/
├── lectures/
├── papers/
├── tools/
└── course-info/
04-exams/
├── midterm/
└── final/
```

**Special Features:**
- Numbered folders (01-04) for clear ordering
- Comprehensive study guides
- Practice exams with solutions
- LaTeX study guide with compilation instructions

---

### 2. Strategic Management
**Location:** `courses/strategic-management-notes/`

```
notes/                          # Class notes by date
materials/
├── pdfs/                      # Organized by unit
│   ├── unit-1/
│   └── unit-2/
├── study-guides/              # Unit-specific guides
│   ├── unit-1/
│   └── unit-2/
└── syllabus/
learn-fun/                     # Interactive learning materials
```

**Special Features:**
- Unit-based organization
- Interactive learning materials
- Quick reference cheat sheet

---

### 3. Management in Global Markets
**Location:** `courses/management-global-market-notes/`

```
notes/
├── 2026/
│   ├── 01/                    # January notes
│   └── 02/                    # February notes
materials/
├── slides/                    # Organized by chapter
│   ├── chapter-1/
│   ├── chapter-3/
│   └── chapter-4/
├── questions/                 # Practice questions (LaTeX)
└── docs/
study-guides/                  # Chapter study guides
```

**Special Features:**
- Chapter-based organization
- LaTeX practice questions
- Comprehensive study guides per chapter

---

### 4. Introduction to European Union
**Location:** `courses/introduction-to-eu-notes/`

```
materials/
├── weeks/                     # Weekly notes (week-01 to week-14)
├── readings/                  # Required readings
│   ├── latex/                # LaTeX versions
│   ├── markdown/             # Markdown versions
│   └── scripts/              # Compilation scripts
└── assignments/
resources/                     # Reference materials
├── countries/
├── dates/
├── institutions/
└── treaties/
supplementary/
├── debates/
└── key-concepts/
```

**Special Features:**
- Weekly organization (14 weeks)
- Multiple format support (LaTeX + Markdown)
- Comprehensive resource library
- Debate topics and key concepts

---

### 5. Spanish for Beginners
**Location:** `courses/spanish-for-beginners-notes/`

```
B1-Lesson-Plan.md              # Lesson plans
B1-Practice-Exercises.md       # Practice exercises
README.md                      # Course overview
```

**Special Features:**
- Simple, focused structure
- B1 level materials
- Practice-focused organization

---

## 📋 Naming Conventions

### Files
- **Notes:** `YYYY-MM-DD-class-notes.md` or `Month_DD_Notes.md`
- **Study Guides:** `[topic]-study-guide.md` or `[chapter]-complete-study-guide.md`
- **PDFs:** Descriptive names with chapter/topic identifiers
- **LaTeX:** `[topic].tex` with corresponding `COMPILE_INSTRUCTIONS.md`

### Folders
- **Numbered folders:** `01-`, `02-`, etc. for clear ordering
- **Descriptive names:** Use clear, lowercase names with hyphens
- **Date-based:** `YYYY/MM/` or `month-name/` for chronological organization

---

## 🎯 Organization Principles

### 1. Only README.md at Root
- Main `README.md` is the only file at the UCM root
- All other files organized into appropriate folders
- Personal documents in `personal-documents/`
- Course materials in `courses/`

### 2. Consistent Structure
- Each course follows similar organizational patterns
- Easy to navigate across different courses
- Predictable folder locations

### 3. Clear Hierarchy
- Top-level: Course folders
- Second-level: Content type (notes, materials, exams)
- Third-level: Organization by date/topic/chapter

### 4. Academic Standards
- Proper citation formats
- Bibliography files
- Academic references organized

---

## 📝 Maintenance Guidelines

### Adding New Courses
1. Create folder in `courses/`
2. Follow standard course structure
3. Create comprehensive README.md
4. Update main README.md with course link

### Adding New Materials
1. Place in appropriate subfolder
2. Follow naming conventions
3. Update relevant README files
4. Maintain consistent organization

### Updating Structure
1. Update this STRUCTURE.md file
2. Update course-specific README files
3. Update main README.md if needed
4. Commit changes with clear messages

---

## 🔍 Finding Materials

### By Course
- Navigate to `courses/[course-name]/`
- Read course README for specific organization

### By Type
- **Notes:** `courses/[course]/notes/` or `courses/[course]/[numbered]-lecture-notes/`
- **Study Guides:** `courses/[course]/study-materials/guides/` or `courses/[course]/study-guides/`
- **Exams:** `courses/[course]/exams/` or `courses/[course]/[numbered]-exams/`
- **PDFs:** `courses/[course]/materials/lectures/` or `courses/[course]/materials/pdfs/`

### By Date
- Check course-specific organization
- Some courses use `YYYY/MM/` structure
- Others use `month-name/` folders

---

## ✅ Verification Checklist

- [x] Only README.md at root level
- [x] All courses in `courses/` folder
- [x] Personal documents in `personal-documents/`
- [x] Each course has README.md
- [x] Consistent naming conventions
- [x] Clear folder hierarchy
- [x] Academic standards maintained

---

*Last Updated: February 9, 2026*
