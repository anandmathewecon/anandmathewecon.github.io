# anand-mathew.github.io

Personal academic website. Plain HTML and one stylesheet, no build step, so
GitHub Pages serves the files as they are.

## Pages

- `index.html` home: photo, bio, job market line, JMP link, fields, references
- `research.html` JMP with full abstract, working papers with collapsed abstracts
- `teaching.html` instructor of record and TA history
- `cv/Mathew_CV.pdf` the CV, compiled from the Overleaf project `Anand_Mathew_CV`

## Files still to add

- `cv/Mathew_CV.pdf` (export from Overleaf)
- `papers/Mathew_Mathur_JMP.pdf` (the current JMP draft)

Both are linked from the pages already, so the links work as soon as the
files are in place.

## Preview locally

    python -m http.server 8765 --directory site

then open http://localhost:8765.

## Publish on GitHub Pages

1. Create a public repository named `<username>.github.io`.
2. Push the contents of this folder to its `main` branch.
3. In the repository, Settings, Pages, set the source to `main` and `/ (root)`.
4. The site appears at `https://<username>.github.io` within a minute or two.

The empty `.nojekyll` file tells GitHub not to run Jekyll on the folder.

## Updating

Edit the HTML directly. The "Last updated" line sits in the footer of each
page. Every paper entry on `research.html` is one `<article class="paper">`
block, so a new paper is a copy of an existing block.
