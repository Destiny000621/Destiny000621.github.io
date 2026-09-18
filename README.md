# Sichang Su — personal research website

Live website: <https://destiny000621.github.io/>.

A light lavender research homepage built with Hugo 0.123.3 (extended). It highlights biography, PARTS and ReinFlow, industry experience, education, and contact information.

## Editing content

- `content/authors/admin/_index.md`: biography, research interests, education, and existing profile/contact links.
- `content/authors/admin/avatar.jpg`: original portrait. Hugo creates an optimized WebP for the homepage.
- `content/project/parts/` and `content/project/reinflow/`: project metadata and figures. The project cards use `title`, `subtitle`, `summary`, `author_line`, `venue`, `project_year`, `external_link`, and optional `url_pdf` / `url_code`.
- `data/industry.yaml`: company, mentors, internship dates, location, and work items, based on the supplied CV and author updates. Each bullet has `text` (inline Markdown), optional `highlight`, and optional `code_url` / `code_label`.
- `layouts/index.html`: homepage structure and metadata.
- `assets/css/personal.css`: responsive light lavender theme.
- `assets/js/personal.js`: active-section navigation. All content and links remain usable without JavaScript.
- `config/_default/menus.yaml`: navigation on retained Hugo content pages.

The News section is removed from the homepage. Existing news archives remain at their original URLs. The two previous projects are marked `draft: true` and no longer appear in the published site. Their source remains available for future reference.

The full CV is not included in this repository. Industry entries are concise summaries from the author-supplied CV. PARTS uses its current name and protocol description; the old CV's SubRL name and blanket no-human-intervention wording are not used. The personal site's PARTS card links to the independently deployed project page at `/PARTS/`.

## Build and preview

```sh
hugo --minify --baseURL https://destiny000621.github.io/
hugo server --disableFastRender
```

Use Hugo **0.123.3 extended**, matching `.github/workflows/publish.yaml`. Hugo obtains the pinned theme modules from `go.mod`.

## Deploy

Push to `main`. The existing Hugo workflow builds `public/` and deploys it with GitHub Pages. The redundant Jekyll deployment workflow was removed to prevent two builds from replacing the same homepage.

## Asset sources

- Portrait: existing author-provided image.
- University emblems: official university sources, recorded in `static/images/education/SOURCES.md`; images retain their original colors and proportions.
- PARTS figure: the author-provided project page's Figure 1 (`webpage-arxiv/overview.png`).
- PARTS homepage demo: the complete earbud rollout from `webpage-arxiv/earbud.mp4`, compressed to 960×540 H.264 (about 1.5 MB). The original 2× speed and actual-time labels are preserved; playback stays at 1×. The default poster is the author-selected `long-video/overview/PARTS_overview_v9_frame_43.png`, copied without changes. Playback starts only after clicking **Play demo**, pauses out of view, and preserves a manual pause across scrolling. The original figure remains available in the project bundle.
- ReinFlow figure: <https://reinflow.github.io/figs/jpgs/ReinFlow.jpg>.
- ReinFlow publication: <https://arxiv.org/abs/2505.22094>, NeurIPS 2025; code: <https://github.com/ReinFlow/ReinFlow>.

The existing Hugo Blox license is retained in `LICENSE.md`.

Profile link icons use [Bootstrap Icons](https://github.com/twbs/icons) (MIT) and [Simple Icons](https://github.com/simple-icons/simple-icons) (CC0). License notices are included in `static/licenses/`.
