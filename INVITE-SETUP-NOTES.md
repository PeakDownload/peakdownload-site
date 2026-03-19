# LeagueCast invite landing pages

Added files:
- `/c/index.html` — captain invite landing page
- `/p/index.html` — player invite landing page
- `/assets/css/invite.css` — invite-specific styles
- `/assets/js/invite-landing.js` — code parsing, copy button, and app/open-install links
- `/vercel.json` — optional clean-URL rewrites for Vercel
- `/_redirects` — optional clean-URL rewrites for Netlify

## What to edit first

Open `/assets/js/invite-landing.js` and update the `SETTINGS` block near the top.

### Current placeholders
- `appOpenBase: "leaguecast://join"`
- `iosDownloadUrl: ""`
- `androidDownloadUrl: ""`

## How routing works

The pages support both:
- clean URLs like `/c/ABCD-7K9P` and `/p/ABCD-7K9P` when rewrites are enabled
- direct file URLs like `/c/index.html?code=ABCD-7K9P`

## Suggested rollout

### Before app launch
- keep `iosDownloadUrl` and `androidDownloadUrl` empty
- use these pages as the fallback share destination
- edit `appOpenBase` later when the final app scheme / universal-link handling is ready

### After the app is live
- set `iosDownloadUrl` to the App Store product page
- set `androidDownloadUrl` to the Play Store product page
- keep the invite links on the same `join.peakdownload.com` routes

## Notes

If your actual app scheme is not `leaguecast://join`, update it in `invite-landing.js`.
