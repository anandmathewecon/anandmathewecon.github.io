# anandmathewecon.github.io

Personal academic website. Plain HTML and one stylesheet, no build step, so
GitHub Pages serves the files as they are.

## Pages

- `index.html` home: photo, bio, job market line, fields, references
- `research.html` JMP with full abstract, working papers with collapsed abstracts
- `teaching.html` instructor of record and TA history
- `cv/Mathew_CV.pdf` the CV, compiled from the Overleaf project `Anand_Mathew_CV`
- `site.js` smooth scrolling (Lenis, loaded from jsDelivr); page transitions are pure CSS in `style.css`

## Hosting

Live at https://anandmathewecon.github.io. The repository
`anandmathewecon/anandmathewecon.github.io` belongs to the GitHub
organization `anandmathewecon`, owned by the personal account
`anandmathew512`. GitHub Pages serves the `main` branch from the root.
Pushing to `main` updates the site within a minute or two:

    git add -A
    git commit -m "Describe the change"
    git push

When you change `style.css` or `site.js`, also change the `?v=` tag on their
links in all three HTML pages (for example to today's date). GitHub lets
browsers reuse old copies for 10 minutes, and the new tag forces a fresh load.

The empty `.nojekyll` file tells GitHub not to run Jekyll on the folder.

## Updating the CV

Recompile the Overleaf project `Anand_Mathew_CV`, download the PDF, and
replace `cv/Mathew_CV.pdf`. The JMP has no PDF link yet. When the draft is
ready to share, add it under `papers/` and link it from `research.html`.

## Preview locally

From the `Personal Website` folder:

    python -m http.server 8765 --directory site

then open http://localhost:8765.
