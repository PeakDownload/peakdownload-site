# PeakDownload Alt 2 — Canonical v3

## Source of truth
This kit was reconstructed directly from the approved **Alt 2 Expanded / Layered Descent** concept-board mark.

Unlike the prior v2 kit, the mark geometry here is traced from the approved source itself:
- white summit contour
- middle blue contour
- cyan/blue lower descent contour
- original proportions and rightward sweep preserved

## Canonical files (kit's own names)
- `peakdownload-alt2-mark.svg` — full-color mark only
- `peakdownload-alt2-header-dark.svg` — recommended website header signature, no tagline
- `peakdownload-alt2-header-light.svg`
- `peakdownload-alt2-horizontal-dark.svg` — primary wide lockup with readable tagline
- `peakdownload-alt2-horizontal-light.svg`
- `peakdownload-alt2-stacked-dark.svg`
- `peakdownload-alt2-stacked-light.svg`
- `peakdownload-alt2-favicon.svg`
- monochrome mark variants

## Tagline
**Real-World Solutions. Real-World Impact.**

## Header rule
Do **not** shrink a full lockup into the navigation.
Use `peakdownload-alt2-header-dark.svg` or render:
**[mark] PeakDownload**
with no tagline and no enclosing badge/card.

## Colors
- Summit White `#F6F8FA`
- Alpine Blue `#2563EB`
- Sky Cyan `#06B6D4`
- Deep Slate `#0F172A`
- Night `#020617`

## Typography
Wordmark and tagline reference Inter.
The site already uses compatible web typography; if exact portability is required later, convert the wordmark to outlines in a vector editor.

## Important
This v3 kit supersedes the prior hand-drawn v2 geometry.

---

## Site wiring (peakdownload.com)

This repo keeps stable, version-agnostic filenames for anything actually referenced by a live page, so a future kit revision only needs a content swap — not a re-link across every page. Kit name → repo file:

| Kit file (this README, above) | Repo file (`assets/logos/`) | Live use |
|---|---|---|
| `peakdownload-alt2-header-dark.svg` | `peakdownload-horizontal-no-tagline-dark.svg` | Global header/nav on every page (`<img>`, not inlined — its gradient `<defs>` IDs would collide if pasted directly into the page) |
| `peakdownload-alt2-header-light.svg` | `peakdownload-horizontal-no-tagline-light.svg` | Not yet used live |
| `peakdownload-alt2-stacked-dark.svg` | `peakdownload-primary-stacked-dark.svg` | About page hero |
| `peakdownload-alt2-stacked-light.svg` | `peakdownload-primary-stacked-light.svg` | Not yet used live |
| `peakdownload-alt2-horizontal-dark.svg` / `-light.svg` | `peakdownload-primary-horizontal-dark.svg` / `-light.svg` | Not yet used live |
| `peakdownload-alt2-mark.svg` | `peakdownload-mark-color.svg` | Not yet used live |
| `peakdownload-alt2-mark-mono-dark.svg` / `-mono-white.svg` | `peakdownload-mark-mono-dark.svg` / `-mono-white.svg` | Not yet used live |
| `peakdownload-alt2-favicon.svg` | `peakdownload-favicon.svg` | Favicon on every page except the LeagueCast product page (own app-icon PNG) |

No standalone tagline-only file is carried forward in this v3 pass (the v2 kit had one; v3 doesn't include an equivalent). The homepage footer tagline stays live text, colored to match Solutions./Impact., rather than an image.
