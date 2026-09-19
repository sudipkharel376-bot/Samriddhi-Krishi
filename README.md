# Samriddhi Krishi and Poultry Pvt. Ltd. — Website

Official website for Samriddhi Krishi and Poultry Pvt. Ltd., Ichchakamana-03, Chitwan, Nepal.

## Project structure

This is a static, single-page website. There is no build step — the browser reads the file directly.

```
.
├── index.html      # The entire website: markup, styles, and behavior
├── .nojekyll       # Tells GitHub Pages to serve files as-is, skipping Jekyll processing
├── .gitignore      # Keeps OS/editor clutter out of the repo
└── README.md       # This file
```

## Hosting on GitHub Pages (free)

1. Create a new **public** GitHub repository (e.g. `samriddhi-website`).
2. Add these files to the repository root (`index.html` must sit at the root, not in a subfolder).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch".
5. Set **Branch** to `main` (or `master`) and folder to `/ (root)`, then Save.
6. GitHub will publish the site at:
   `https://<your-username>.github.io/<repo-name>/`
   (this can take a minute or two the first time).

No environment variables, secrets, or build configuration are required.

## Updating content

Contact details, prices, and photos are currently placeholders (clearly marked in the page). To update them, search `index.html` for the bracketed placeholder text (e.g. `[Phone number to be added]`) and replace it, or swap the placeholder photo blocks with real `<img>` tags once photography is available.
