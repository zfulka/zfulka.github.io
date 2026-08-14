# Analytics setup for fulka.eu

This website contains a privacy-friendly Plausible-ready analytics layer.

## What is already implemented

All HTML pages include:

```html
<script defer data-domain="fulka.eu" src="https://plausible.io/js/script.js"></script>
<script defer src="assets/analytics.js"></script>
```

The local `assets/analytics.js` file tracks key clicks:

- email clicks
- phone clicks
- LinkedIn clicks
- PDF downloads
- service-detail links
- live Toola app link: https://d1cvjk3uz0a1k2.cloudfront.net

## What still needs to be done

1. Create a Plausible Analytics account.
2. Add the site domain as `fulka.eu`.
3. In Plausible, check whether it expects `fulka.eu` or `www.fulka.eu`.
4. If needed, change `data-domain="fulka.eu"` in all HTML files to `data-domain="www.fulka.eu"`.
5. Upload the website to GitHub Pages.
6. Open the website and test:
   - page views,
   - click on Contact,
   - click on a PDF,
   - click on Toola live app.

## What you will be able to see

- visits and unique visitors,
- countries and approximate geography,
- sources such as LinkedIn / direct / search,
- most visited pages,
- clicked service details,
- PDF downloads,
- clicks to Toola.

No personal names of visitors are collected.
