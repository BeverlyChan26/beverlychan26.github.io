# Chloe Chan — Personal Site

A single-page personal site for Chloe Chan, MSc Marketing @ HKU '26.

## Structure

```
.
├── index.html        # main page
├── styles.css        # all styling (soft brand palette)
├── script.js         # scroll-reveal + smooth scroll
└── assets/
    └── chloe-hero.png   # headshot extracted from CV
```

## Editing

- Update copy, links, or sections in `index.html`.
- Style tokens (colors, radii, fonts) live at the top of `styles.css` under `:root`.
- Replace `assets/chloe-hero.png` with a new headshot — keep the same filename and the
  layout will pick it up automatically.

## Deploying to GitHub Pages (drag-and-drop)

1. Create a new public repo on GitHub (e.g. `chloecan.github.io` for a user page,
   or `chloe-chan-site` for a project page).
2. On the repo's main page, click **uploading an existing file** (or drag directly
   into the file list).
3. Drag **all four items from the unzipped folder** — `index.html`, `styles.css`,
   `script.js`, and the `assets/` folder — into the upload area. The folder
   structure must be preserved so `index.html` can find `assets/chloe-hero.png`.
4. Commit. Then go to **Settings → Pages**, choose **Deploy from a branch**,
   branch `main` / root, save. Site will be live at
   `https://<username>.github.io/<repo>/` within ~30 seconds.
