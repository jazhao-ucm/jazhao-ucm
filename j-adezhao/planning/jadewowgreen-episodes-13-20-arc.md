# jadewowgreen — episodes 13 to 20 (planning)

**Local only** (`j-adezhao/planning/`). Use this to draft copy, photos, and songs before editing the live tree: **`SP26/jadewowgreen/`** (source of truth on **`jazhao-ucm`**), deploy mirror **`jadewowgreen/jadewowgreen`**.

**Related in repo:** [`jadewowgreen/PROJECT-NOTE.md`](../../jadewowgreen/PROJECT-NOTE.md) (editorial rules, sound pairing, deploy workflow) · live markup [`jadewowgreen/site/index.html`](../../jadewowgreen/site/index.html) · [`jadewowgreen/README.md`](../../jadewowgreen/README.md).

---

## What the site already says (from `site/index.html`)

- **Positioning:** “Madrid on Film,” **20-episode** visual diary, **80 photos**, Spring **2026**, places named in copy include **Madrid, Segovia, Toledo, Tenerife**.
- **Journey intro:** “the full madrid on film sequence stays intact below: **20 episodes, 80 photos**, and the personal captions that shaped the semester.”
- **Hero:** Spotify **playlist** embed (`open.spotify.com/embed/playlist/70i0NVNwibvZo74qpirEcI`), note “press play. scroll slow.”
- **Episode block pattern (1–12):** `section-label` (episode n) → `section-title` (two lines, second line in `<em>`) → `section-lead` (gray intro) → `episode-soundtrack` with kicker **sounds like** + track · artist (plain text in current HTML, no `<a>`) → `photo-grid` (**four** images, `../images/…`) with `alt` + `title` tooltips → `photo-caption` (single-line footer under grid).
- **Episodes 13–20 on site right now:** `<section id="episode13">` … `episode20` exist; each has title **coming / soon** and caption **coming soon.** No leads, no sound line, no photos yet.

---

## Editorial arc (from `PROJECT-NOTE.md` + live eps 1–12)

- **9–11:** Heaviest goodbye / landing (**no more madrid** → **still here, already grieving** → **bloom where you are**).
- **12:** Deliberate **exhale** — on site: **tenerife, / no notes**; lead *one week. no wifi. completely unserious.*; sound **island in the sun · weezer**; caption about **the ones you travel with** and the cheap flight.
- **13–20:** Continue the **Erasmus ending** (back in Madrid, last weeks, leaving, home, distance). Do not flatten the contrast between **12** and **13**.

---

## Episodes 1–12 — canonical titles and sound (for continuity)

| Ep | Title (line 1 · *line 2*) | Lead (summary) | sounds like |
|----|---------------------------|----------------|-------------|
| 1 | the part before · *the good part* | first week, jet-lagged, underdressed | holocene · bon iver |
| 2 | your sign · *to go* | one yes. no plan. | run away with me · carly rae jepsen |
| 3 | what nobody · *posts about* | homesick / lonely / almost went home | homesick · noah kahan |
| 4 | not · *barcelona* | why madrid; “it felt right” | this must be the place · talking heads |
| 5 | third choice, · *first love* | backup plan, accident | home · edward sharpe and the magnetic zeros |
| 6 | calmer · *here* | slower mornings, longer coffees | put your records on · corinne bailey rae |
| 7 | what a · *privilege* | first-gen, far from home, rain in madrid | ribs · lorde |
| 8 | we met on · *erasmus (it counts)* | kitchen, three days, friends forever | we are young · fun. |
| 9 | no more · *madrid* | last coffee, last walk, last pretend | the night we met · lord huron |
| 10 | still here, · *already grieving* | both things true | august · taylor swift |
| 11 | bloom where · *you are* | arrived unsure, left more myself | bloom · troye sivan |
| 12 | tenerife, · *no notes* | one week. no wifi. completely unserious. | island in the sun · weezer |

**Image files in repo (4 per ep):** `uno*`, `dos*`, `tres*`, `cuatro*`, `cinco*`, `seis*`, `siete*`, `ocho*`, `nueve*`, `diez*`, `once*`, `doce*`. Plan **`trece*`** through **`veinte*`** (or your chosen naming) before wiring grids.

---

## Episodes 13–20 — full arc (canonical copy for `site/index.html`)

Use the same block shape as eps 1–12: `section-title` (line one, then `<br><em>line two</em>`), `section-lead`, `episode-soundtrack` (**sounds like** …), four photos (`title` = first line `&#10;` second line, matching existing tooltips), then `photo-caption` under the grid.

| Ep | `section-title` (plain text) | sounds like |
|----|------------------------------|-------------|
| 13 | back, / *but different* | the 1 · taylor swift |
| 14 | the last / *normal week* | green light · lorde |
| 15 | everyone's / *leaving* | see you again · tyler the creator ft. kali uchis |
| 16 | the last / *everything* | white keys · dominic fike |
| 17 | the night / *before* | liability · lorde |
| 18 | barajas *(single-line `section-title` ok)* | motion sickness · phoebe bridgers |
| 19 | home but / *not home* | riptide · vance joy |
| 20 | enough time / *has passed* | the lakes · taylor swift |

### Ep 13 — back, / *but different*

- **section-lead:** back from tenerife. madrid in your bones now. strange to love something this much and know it's ending.
- **Image `title` pair:** *tenerife broke the spell. now you're just counting.* / *madrid · abril 2026*
- **photo-caption (suggested):** back from tenerife, madrid felt like home and a countdown at once.

### Ep 14 — the last / *normal week*

- **section-lead:** before the counting started. still pretending it wasn't ending. going to class like it mattered.
- **Image `title` pair:** *didn't tell anyone it felt like the last time.* / *moncloa · abril 2026*
- **photo-caption (suggested):** the last normal week was the quietest lie i told myself.

### Ep 15 — everyone's / *leaving*

- **section-lead:** erasmus friends going home one by one. the group getting smaller every weekend. you stayed longer than most.
- **Image `title` pair:** *hugged people at the metro and didn't look back.* / *barajas · abril 2026*
- **photo-caption (suggested):** they left in pieces until the group barely fit in one photo.

### Ep 16 — the last / *everything*

- **section-lead:** last coffee at that place. last metro ride. last walk through malasaña. you knew each one was the last and did it anyway.
- **Image `title` pair:** *one more. always one more.* / *malasaña · mayo 2026*
- **photo-caption (suggested):** every last thing on purpose, on purpose, on purpose.

### Ep 17 — the night / *before*

- **section-lead:** couldn't sleep. kept walking around the apartment. kept touching things like you were trying to memorise them.
- **Image `title` pair:** *sat on the floor for a while. that's all.* / *piso · mayo 2026*
- **photo-caption (suggested):** the night before was just my hands on everything i already knew.

### Ep 18 — barajas

- **section-lead:** one bag. four months in it. stood outside security for longer than necessary.
- **Image `title` pair:** *looked back. couldn't help it.* / *aeropuerto adolfo suárez · mayo 2026*
- **photo-caption (suggested):** one bag, four months, and a name for the place i walked away from.

**HTML note:** Ep 18 is the only week where the location string uses the **full official airport name** on purpose.

### Ep 19 — home but / *not home*

- **section-lead:** back in your room. everything exactly where you left it. felt wrong. you were not the same person who put it there.
- **Image `title` pair:** *my room. sort of.* / *home · mayo 2026*
- **photo-caption (suggested):** home looked like my room and nothing like the place i meant.

### Ep 20 — enough time / *has passed*

- **section-lead:** now you can write about it. now you know what it meant. now madrid is something that happened to you and made you who you are.
- **Image `title` pair:** *i came here unsure. i know now.* / *于马德里绽放 · 2026*
- **photo-caption (suggested):** enough time passed to say what madrid was without flinching.

**HTML note:** Ep 20’s second line of the image tooltip is **not a place**; it mirrors the **site sign-off** (same energy as the footer / hero Chinese line). The series ends where the site ends.

---

## Editorial flags (keep when implementing)

1. **Ep 16:** The tooltip kicker *one more. always one more.* **echoes ep 9** on purpose: countdown language then becomes goodbye language.
2. **Ep 18:** **Only** episode that spells out **aeropuerto adolfo suárez**; that beat earns the full name.
3. **Ep 20:** **于马德里绽放 · 2026** ties the last frame to the **whole-site** closing identity, not a map pin.

---

## Implementation checklist

- Add **`trece1–4`** … **`veinte1–4`** (or your naming) under **`jadewowgreen/images/`**, then wire **`site/index.html`** for **`#episode13`–`#episode20`**.
- **Ep 18** `section-title` can stay **one line** (`barajas`) if your CSS allows it; otherwise use a minimal two-line pattern you like.
- After edits: commit **SP26**, push **`jazhao-ucm`**, sync **mirror** for Pages.
