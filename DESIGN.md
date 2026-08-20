# Birthday Editorial — Updated Design Spec

This document supersedes the original specification where they conflict.
The original creative brief still stands: luxury editorial, not a birthday template.
Silver is a thread, not a theme. Photography is the hero.

---

## Status

All six photographs are now in hand. Section 43 of the original plan is obsolete.

The chat uploads are **preview-resolution** (787×1024 JPEG, ~55–96KB). They are enough to design and scaffold. They are **not** enough to ship. Original shoot files must replace them before launch.

Today is 20 August 2026. The date in the piece is 21 August 2026.

---

## What changed, and why

### 1. There is no dark photograph

World III asked for a near-black hero. The shoot is only two sets:

- 3× ivory studio (two-tone blue dress, palm, chair)
- 3× amber studio (electric blue suit)

Do **not** recolor, grade-to-black, or fake a third set.
World III is a **dark environment around a real photograph**.

The final image is the seated amber close-up (IMG_3019). It is the only intimate, face-forward portrait. It belongs at the end, glowing in charcoal — not as a third warm editorial repeat.

### 2. Split is 3 / 2 / 1, not 3 / 3 plus a mystery sixth

| World | Photos | Role |
| --- | --- | --- |
| I — Light | 3121, 3099, 3117 | Opening editorial |
| II — Warm | 2976, 2961 | Amber editorial |
| III — Dark | 3019 | Final birthday photograph |

### 3. World I is more joyful than the original mood line

The original Light mood was “Elegant. Calm. Sophisticated.”
Two of the three ivory pictures are exuberant (dance, laugh). Only the chair portrait is still.

Updated Light mood:

**Elegant. Joyful. Open.**

Calm comes from ivory space and typography, not from forcing her expression to be quiet.

World II still holds:

**Warm. Confident. Poised.**

The amber standing portraits are the fashion-campaign pictures.

World III still holds:

**Quiet. Intimate. Direct.**

### 4. Two standing amber frames are near-duplicates

IMG_2976 and IMG_2961 share wardrobe, set, lens, and stance.
They cannot use the same layout. If they do, the site will feel like it ran out of pictures.

### 5. Two blues, not one

World I dress: royal bodice + sky skirt.
World II suit: saturated electric / cerulean.

Keep both in tokens. Do not flatten to a single `#087bbd`.

---

## Photo bible

Canonical files after copy:

`public/photos/` (originals later) · `src/data/birthday.ts` references these ids.

### 01 — IMG_3121 — Light hero / magazine cover

- Full body, dancing, looking into the lens, wide smile
- Ivory, palm on the left, large empty field to the right
- Layout: **full viewport cover**
- Type sits in the ivory, not on her face
- This is the first image after the charcoal opening
- Why first: she looks at the person the site is for

### 02 — IMG_3099 — Light still

- Seated on the wooden chair, gaze up and away
- Medium crop, contemplative, fashion-editorial
- Layout: **asymmetric split** — image toward the right on desktop, type left
- Why here: a breath between two joyful frames; different crop from 01 and 03

### 03 — IMG_3117 — Light last

- Profile, laughing, eyes closed, hand at forehead
- Palm on the left, deep ivory on the right
- Layout: **~70% width**, caption outside the frame, empty ivory preserved
- Why last in Light: the empty ivory is the runway for the amber transition

### 04 — IMG_2976 — Warm arrival

- Full body, hands clasped, slight smile, direct gaze
- Electric blue on amber
- Layout: **full-bleed**
- Copy beat: “And then…” / “there is her.”
- Why this one as the warm hero: warmer and more open than 2961

### 05 — IMG_2961 — Warm icon

- Full body, hands behind back, more statuesque
- Same set as 04 — **must look like a different page**
- Layout: **offset portrait** — image not full width, amber field visible, floating silver caption, type overlapping only empty amber, never her face
- No second full-bleed. No matching crop to 04.

### 06 — IMG_3019 — Final photograph

- Waist-up, seated, leaning in, full smile, silver earrings, white pedestal
- Layout: **intimate, ~100vh, dark charcoal around it**
- Reveal slowly. Almost no UI. Then: “Happy Birthday, [NAME].”
- Optional tighter crop (keep face, earrings, blue neckline; pedestal may recede)
- Do not also use this image in World II

---

## Experience structure (locked)

```text
OPENING                  charcoal, no photograph
    ↓
01  LIGHT COVER          3121  full viewport
    ↓
02  LIGHT STILL          3099  split
    ↓
03  LIGHT MOTION         3117  offset, ivory field
    ↓
WORLD TRANSITION         ivory consumed by amber
    ↓
04  WARM ARRIVAL         2976  full-bleed
    ↓
05  WARM ICON            2961  offset on amber
    ↓
PERSONAL THOUGHTS        charcoal, no photograph
    ↓
06  FINAL PORTRAIT       3019  dark environment
    ↓
LETTER                   charcoal, written message
    ↓
CLOSE                    “Made especially for you.” + replay
```

Target: 3–5 minutes. Do not add extra interstitial pages.

Opening, thoughts, and letter are not numbered like photographs.
The fixed indicator tracks **01 / 06 through the six pictures**, and rests on the nearest photo while in non-photo sections.

---

## Transition (keep, specify)

The ivory → amber move is the most important motion in the site.

After 3117:

1. Hold the ivory field
2. Amber gradient enters from the right (or from below on mobile)
3. Silver rules become slightly brighter
4. Amber fills the viewport
5. 2976 reveals from within the amber (clip-path + scale 1.04 → 1)
6. Settle into the warm palette

Do not crossfade `background: ivory` to `orange`.

The dark drop into Personal Thoughts can be simpler: amber recedes, charcoal takes over, type only. Save the cinematic budget for ivory → amber and for 3019’s reveal.

---

## Palette (sample, then tune against originals)

```css
:root {
  --ivory: #f6f5f1;
  --ivory-deep: #ebe7de;
  --charcoal: #111111;
  --charcoal-deep: #0b0b0b;

  --silver: #c7c9cc;
  --silver-bright: #e5e7e9;
  --silver-dim: #8a8d91;

  --royal: #1c4f9c;      /* World I bodice */
  --sky: #7eb8e0;        /* World I skirt — use rarely, never as a fill */
  --electric: #0a7ec2;   /* World II suit */
  --deep-blue: #063b63;

  --amber: #c98545;
  --amber-deep: #8f5a28;
  --amber-soft: #d4a06a;

  --display-font: "Cormorant Garamond", serif;
  --body-font: "Manrope", sans-serif;
}
```

Green from the palm stays **inside the photographs**. Do not add plant motifs or a green UI color.

---

## Layout rules per photo

Photography is never in a rounded card.

| ID | Mobile | Desktop |
| --- | --- | --- |
| 01 | Full-viewport, `object-position` toward her head | Full-viewport, type in right/top ivory |
| 02 | Image stacked above type; do not cover her face | Image ~55–65% right, type left, chair allowed to sit in the crop |
| 03 | Image dominant, caption below | Image ~70% left or center-left, ivory right, caption outside |
| 04 | Full-bleed, protect head and hem | Full-bleed, large type in amber negative space |
| 05 | Almost full, but not a clone of 04 — more crop, more caption | Offset, visible amber margin, overlapping type only on empty amber |
| 06 | Tall, dark margins, slower reveal | Centered or slightly left, large empty charcoal, type after the image settles |

Every photo in `birthday.ts` gets:

- `objectPosition` (especially 01, 03, 06)
- `alt`
- `world`
- `layout`

Mobile `object-fit: cover` will crop left/right on 3:4 images in a tall phone. Prefer cropping the palm and empty studio, never the head, never the smile.

---

## Copy (still placeholders until personalized)

Keep all of this in `src/data/birthday.ts` only.

Needed before launch:

- Her name
- Five short thoughts (the current examples are structure, not voice)
- The actual letter
- Optional audio URL

Do not invent a fake intimacy if the real words are not supplied. Build with clearly marked placeholders.

Intro, chapter titles, and captions may be drafted in a restrained editorial voice and swapped later.

Suggested chapter titles (editable):

```text
01  THE LIGHT
02  STILL
03  THIS JOY
04  AND THEN
05  HER
06  TODAY
```

---

## Stack, motion, quality bar

Unchanged from the original:

- React, Vite, TypeScript, Tailwind, GSAP + ScrollTrigger, Lenis
- No Three.js
- No balloons, confetti, hearts, glitter, glassmorphism, card grids
- Slow / deliberate / `power2.out`–`expo.out`
- `prefers-reduced-motion`
- Silver for type, rules, indices, controls — not as a wash
- Content never requires editing animation files
- Replay scrolls to the opening; it does not reload

Skip for first vertical (add only if time):

- Music (control can exist, unused until a file is provided)
- Custom cursor

Do not skip:

- Responsive images from the **originals**
- Preload only image 01 (and maybe 02)
- Reduced motion
- Keyboard / focus / alt text

---

## Image pipeline (required before polish)

1. Place original shoot files in `public/photos/original/`
2. Generate AVIF + WebP at 400 / 800 / 1200 / 1600 (hero 01 and 06 may include 2000)
3. Point `birthday.ts` at the optimized set
4. Chat previews are a temporary stand-in only

Shipping the 787px chat compressions on a 1440–1920 display will break the quality bar.

---

## Build order (unchanged, now with real pictures)

1. Foundation — tokens, fonts, layout
2. Opening + hero 01
3. Light 02–03 + scroll reveals
4. Ivory → amber transition
5. Warm 04–05 (different layouts)
6. Personal thoughts
7. Final 06 + letter + replay
8. Mobile, reduced motion, image optimization, performance

---

## Open before coding

1. **Name** — required for the opening and the close
2. **Originals** — when can the full-resolution files be dropped in?
3. **Letter and thoughts** — real words, or tasteful placeholders for now?
4. **Audio** — none unless a specific track is provided
