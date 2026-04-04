#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [[ -x ".venv/bin/jupyter" ]]; then
  JUPYTER_CMD=".venv/bin/jupyter"
elif command -v jupyter >/dev/null 2>&1; then
  JUPYTER_CMD="jupyter"
else
  echo "jupyter command not found."
  echo "Run ./scripts/setup-env.sh first, or install jupyter globally."
  exit 1
fi

OUT_DIR="data/simulations"
EXEC_DIR="$OUT_DIR/executed-notebooks"
mkdir -p "$OUT_DIR" "$EXEC_DIR"

run_notebook() {
  local notebook_path="$1"
  local output_name="$2"
  echo "Executing: $notebook_path"
  "$JUPYTER_CMD" nbconvert \
    --to notebook \
    --execute "$notebook_path" \
    --output "${output_name}.ipynb" \
    --output-dir "$EXEC_DIR" \
    --ExecutePreprocessor.timeout=600
}

run_notebook "work/notebooks/mathematical-models/trust-dynamics.ipynb" "trust-dynamics.executed"
run_notebook "work/notebooks/mathematical-models/cultural-adaptation.ipynb" "cultural-adaptation.executed"

python3 - <<'INNER'
from pathlib import Path
import datetime

out = Path("data/simulations")
stamp = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
report = out / f"simulation-run-{stamp}.txt"
report.write_text(
    "\n".join(
        [
            "Simulation run completed.",
            "Executed notebooks:",
            "- data/simulations/executed-notebooks/trust-dynamics.executed.ipynb",
            "- data/simulations/executed-notebooks/cultural-adaptation.executed.ipynb",
            "Generated data artifacts may include:",
            "- data/simulations/cultural-adaptation-sim.csv",
        ]
    )
    + "\n"
)
print(f"Wrote {report}")
INNER

echo "All simulations completed."
