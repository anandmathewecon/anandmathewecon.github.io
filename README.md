# anandmathewecon.github.io

Personal academic website. Plain HTML and one stylesheet, no build step, so
GitHub Pages serves the files as they are.

## Pages

- `index.html` home: photo, bio, job market line, JMP link, fields, references
- `research.html` JMP with full abstract, working papers with collapsed abstracts
- `teaching.html` instructor of record and TA history
- `cv/Mathew_CV.pdf` the CV, compiled from the Overleaf project `Anand_Mathew_CV`

## Updating the CV

Recompile the Overleaf project `Anand_Mathew_CV`, download the PDF, and
replace `cv/Mathew_CV.pdf`. The JMP has no PDF link yet. When the draft is
ready to share, add it under `papers/` and link it from `research.html`.

## Preview locally

    python -m http.server 8765 --directory site

then open http://localhost:8765.

## Hosting

Live at https://anandmathewecon.github.io. The repository
`anandmathewecon/anandmathewecon.github.io` belongs to the GitHub
organization `anandmathewecon`, owned by the personal account
`anandmathew512`. GitHub Pages serves the `main` branch from the root.
Pushing to `main` updates the site within a minute or two:

    git add -A
    git commit -m "Describe the change"
    git push

The empty `.nojekyll` file tells GitHub not to run Jekyll on the folder.

## Updating the CV

Recompile the Overleaf project `Anand_Mathew_CV`, download the PDF, and
replace `cv/Mathew_CV.pdf`. The JMP has no PDF link yet. When the draft is
ready to share, add it under `papers/` and link it from `research.html`.

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
