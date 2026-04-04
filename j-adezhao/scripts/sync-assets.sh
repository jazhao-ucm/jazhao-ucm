#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_PROFILE="$ROOT_DIR/assets/images/profile"
DST_SITE_IMAGES="$ROOT_DIR/site/assets/images"

mkdir -p "$DST_SITE_IMAGES"

if [[ -f "$SRC_PROFILE/j-adezhao-profile-main.jpg" ]]; then
  cp "$SRC_PROFILE/j-adezhao-profile-main.jpg" "$DST_SITE_IMAGES/profile-main.jpg"
fi

if [[ -f "$DST_SITE_IMAGES/profile-main.jpg" ]]; then
  sips -Z 1200 "$DST_SITE_IMAGES/profile-main.jpg" --out "$DST_SITE_IMAGES/preview.jpg" >/dev/null
  sips -Z 512 "$DST_SITE_IMAGES/profile-main.jpg" --out "$DST_SITE_IMAGES/avatar.jpg" >/dev/null
fi

echo "Assets synced to site/assets/images"
