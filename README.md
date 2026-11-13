# Andrea Guerrieri — academic website

A small GitHub Pages site built with Jekyll. The custom layouts and stylesheet provide the design; the content pages remain plain Markdown.

## Content

- `index.md`: homepage and featured research.
- `research.md`: research directions and selected papers.
- `talks.md`: talks, lectures and recordings.
- `events.md`: dated archive of organised meetings.
- `teaching.md`: current teaching and public lecture resources.
- `cv.md`: biography and the existing PDF CV download.
- `open-questions.md`: research questions.

The shared header, contact details and footer live in `_layouts/default.html`. Page headings use `_layouts/page.html`. Site identity and social profiles are configured in `_config.yml`.

## Editing and checks

Keep publication titles, dates, statuses and links tied to the public paper records. Archive past events instead of leaving expired registration notices on the homepage. Lecture PDFs hosted in `andreaguerr-assets` remain linked externally.

The pull-request workflow builds the site using GitHub's Pages-compatible Jekyll environment. GitHub Pages publishes the `main` branch. The November 2026 refresh preserves the existing HTML routes and PDF paths.

## Design

Styles: `assets/css/site.css`. Mobile navigation: `assets/js/site.js`. No JavaScript framework or build-time Node dependencies are required. The navigation and page content remain available without JavaScript. MathJax loads only on pages with `math: true` in their front matter.

The original portrait is retained. A resized WebP copy is served to supported browsers to reduce transfer size.

## Sources for the November 2026 update

- [University profile](https://www.citystgeorges.ac.uk/about/people/academics/andrea-guerrieri)
- [Cross-Section Bootstrap](https://arxiv.org/abs/2506.04313)
- [Pion bootstrap fit publication record](https://openaccess.city.ac.uk/id/eprint/36967/)
- [M-theory scattering paper](https://arxiv.org/abs/2212.00151)
- [TASI 2026 lecture hub](https://sites.google.com/colorado.edu/tasi-2026-hub/lectures)
- [McGill seminar, 11 November 2026](https://www.physics.mcgill.ca/seminars/CHEP_guerrieri.html)
- [QFT Zoo](https://nathansbenjamin.github.io/QFT_Zoo/)
- [Aspen 2026 archive](https://aspenphys.org/event/from-first-principles-to-future-colliders-amplitudes-bootstraps-and-energy-correlators/)
- [Bootstrap 2026 archive](https://indico.global/event/16114/)

The old INSPIRE postdoc advert (job 3085860) was verified as closed, with deadline 17 December 2025, before its active announcement was removed.
