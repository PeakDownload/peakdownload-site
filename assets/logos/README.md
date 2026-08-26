# PeakDownload Canonical Logo Kit — v2

Direction: Layered Descent (Alt 2)
Tagline: **Real-World Solutions. Real-World Impact.**

## v2 change
The tagline in the primary horizontal and stacked lockups has been substantially enlarged and increased in contrast so it remains legible at realistic web and presentation sizes.

The navigation/header and favicon variants intentionally remain tagline-free.

## Primary files
- `peakdownload-primary-horizontal-dark.svg`
- `peakdownload-primary-horizontal-light.svg`
- `peakdownload-primary-stacked-dark.svg`
- `peakdownload-primary-stacked-light.svg`

## Compact files
- `peakdownload-horizontal-no-tagline-dark.svg`
- `peakdownload-horizontal-no-tagline-light.svg`
- `peakdownload-mark-color.svg`
- `peakdownload-favicon.svg`

## Standalone tagline
- `peakdownload-tagline-dark.svg`
- `peakdownload-tagline-light.svg`

## Canonical colors
- Summit White: #F6F8FA
- Alpine Blue: #2563EB
- Sky Cyan: #06B6D4
- Granite: #8CA0B3
- Deep Slate: #0F172A
- Night: #020617

## Usage
- Use the **primary horizontal** lockup in wide company-brand contexts.
- Use the **primary stacked** lockup in About/brand-story panels or centered hero moments.
- Use **no-tagline horizontal** in navigation/header contexts.
- Use the **favicon** at 32px and below.
- Do not shrink the tagline-bearing lockups until the tagline becomes secondary/fine print; switch to the no-tagline variant instead.

## Site wiring (peakdownload.com)
- Global header/nav: `peakdownload-horizontal-no-tagline-dark.svg`, referenced via `<img>` (not inlined) so its gradient `<defs>` IDs never collide with anything else on the page.
- About page hero: `peakdownload-primary-stacked-dark.svg` (tagline included in the image).
- Homepage footer: tagline as live text, colored to match `Solutions.`/`Impact.` (#2563EB / #06B6D4) rather than the image, so it stays real, selectable text.
- `peakdownload-mark-mono-dark.svg` / `-mono-white.svg` / light-background lockups are kept in the library per this kit but have no live placement yet — this site is dark-theme only today.
