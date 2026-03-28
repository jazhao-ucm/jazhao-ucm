#!/usr/bin/env python3
"""
Verify that week folders on disk match week numbers listed in docs/INDEX.md.

Run from repo root:
  python3 scripts/check_index_weeks.py

Exit code 0 if no problems; 1 if anything is missing or inconsistent.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

# INDEX.md "## ..." heading -> course directory name (repo root child)
SECTION_TO_DIR: dict[str, str] = {
    "Product Management": "product-management",
    "Introduction to the EU": "introduction-to-eu",
    "Management in Global Markets": "management-global-markets",
    "Strategic Management": "strategic-management",
    "Spanish for Beginners": "spanish-for-beginners",
}


def parse_index_weeks(index_text: str) -> dict[str, set[int]]:
    """Return mapping course_dir -> set of week numbers declared in INDEX tables."""
    by_dir: dict[str, set[int]] = {d: set() for d in SECTION_TO_DIR.values()}
    current_dir: str | None = None

    for line in index_text.splitlines():
        if line.startswith("## "):
            title = line[3:].strip()
            current_dir = SECTION_TO_DIR.get(title)
            continue
        if current_dir is None:
            continue
        stripped = line.strip()
        if not stripped.startswith("|") or stripped.startswith("| ----"):
            continue
        cells = [c.strip() for c in stripped.strip("|").split("|")]
        if not cells:
            continue
        first = cells[0]
        m = re.fullmatch(r"(\d+)", first)
        if m:
            by_dir[current_dir].add(int(m.group(1)))
    return by_dir


def weeks_on_disk(course_dir: Path) -> set[int]:
    out: set[int] = set()
    if not course_dir.is_dir():
        return out
    for child in course_dir.iterdir():
        if not child.is_dir():
            continue
        m = re.fullmatch(r"week-(\d+)", child.name)
        if m:
            out.add(int(m.group(1)))
    return out


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--root",
        type=Path,
        default=None,
        help="Repo root (default: parent of scripts/)",
    )
    args = parser.parse_args()
    repo_root = args.root or Path(__file__).resolve().parent.parent
    index_path = repo_root / "docs" / "INDEX.md"
    if not index_path.is_file():
        print(f"Missing {index_path}", file=sys.stderr)
        return 1

    index_weeks = parse_index_weeks(index_path.read_text(encoding="utf-8"))
    problems = False

    for course_dir_name, expected in sorted(index_weeks.items()):
        course_path = repo_root / course_dir_name
        actual = weeks_on_disk(course_path)
        missing = sorted(expected - actual)
        extra = sorted(actual - expected)

        if missing:
            problems = True
            print(f"{course_dir_name}: INDEX lists weeks missing on disk: {missing}")
        if extra:
            # Folders ahead of INDEX are common while you work; warn, don't fail.
            print(
                f"{course_dir_name}: disk has week folders not listed in INDEX: {extra}"
            )

    if problems:
        print(
            "\nFix: add week-* folders or update docs/INDEX.md (see .cursorrules).",
            file=sys.stderr,
        )
        return 1
    if not problems:
        print("OK: every INDEX week has a matching week-* folder (per course).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
