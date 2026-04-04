# Images

| Folder | Role |
|--------|------|
| **`originals/`** | Source exports (banners, covers, alternate crops). Not all are wired into the live site. |
| **`profile/`** | Headshots and sized variants. **`j-adezhao-profile-main.jpg`** is the file [`scripts/sync-assets.sh`](../../scripts/sync-assets.sh) copies into **`site/assets/images/`** (then `preview.jpg` and `avatar.jpg` are derived with `sips`). |
| **`diagrams/`** | Diagram assets for docs or site (see that folder’s README). |

Keep **`profile/j-adezhao-profile-main.jpg`** in sync with what you want on IU Pages after you run **`./scripts/sync-assets.sh`**.
