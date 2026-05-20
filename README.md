# PeakDownload LLC — Marketing Site

Static HTML/CSS/JS marketing website for PeakDownload LLC, a software studio building focused vertical SaaS products.

## Structure

```
/index.html                          — Homepage (hero + project cards)
/projects/index.html                 — All projects listing
/projects/bowling/index.html         — Bowling product page
/projects/homeops/index.html         — HomeOps product page
/projects/template-project/index.html — Template for new project pages
/privacy.html                        — Privacy policy
/assets/css/styles.css               — Global stylesheet
/assets/js/main.js                   — Scroll animations, mobile nav, signup handler
/assets/img/                         — Image assets (empty, for future use)
```

## Adding a New Project

1. Copy `/projects/template-project/` to `/projects/your-project-name/`
2. Replace all `[placeholder]` text in the new `index.html`
3. Add a project card to `/index.html` and `/projects/index.html`

## Logo Assets

All logo files are in `/assets/logos/`. New brand identity: geometric mountain peak formed from ascending data bars.

| File | Size | Use |
|------|------|-----|
| `peakdownload-icon.svg` | 400×400 | App icon, social avatar |
| `peakdownload-1024.svg` | 1024×1024 | App Store, high-res print |
| `peakdownload-horizontal.svg` | 1080×240 | Header lockup, banners |
| `peakdownload-favicon.svg` | 32×32 | Browser favicon |
| `peakdownload-mono-white.svg` | 400×400 | On dark/colored backgrounds |
| `peakdownload-mono-dark.svg` | 400×400 | On light/white backgrounds |

**Brand colors:**
- Background: `#0D1117` (midnight navy)
- Primary: `#FFFFFF`
- Accent: `#00B4A6` (alpine teal) — peak cap, signal line

## Deployment

Deploy as a static site to Vercel, Netlify, GitHub Pages, or any static host. No build step required.

## Tech

- Pure HTML, CSS, vanilla JavaScript
- No frameworks, no build tools
- Mobile-first responsive design
- CSS-based fade-in scroll animations via IntersectionObserver
- Sticky header with backdrop blur
