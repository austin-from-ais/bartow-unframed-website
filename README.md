# Bartow Unframed — Website

Jekyll-based GitHub Pages site for **Bartow Unframed**, a location-based augmented reality experience that animates four public murals across Bartow, Florida.

A collaboration between [USF Access 3D Lab](https://www.usf.edu/access-3d-lab/), the [City of Bartow CRA](https://www.cityofbartow.net/), and [Augmented Info Systems](https://augmentedinfosystems.com/).

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Site runs at `http://localhost:4000/bartow-unframed-website/`.

## Structure

```
_config.yml              Jekyll config
_layouts/default.html    Base HTML shell
_includes/               Section partials (hero, murals, about, …)
_sass/                   SCSS partials
assets/
  css/main.scss          SCSS entry
  js/main.js             Autoplay + sound toggle + smooth-scroll
  videos/                Mural AR recordings (portrait .mp4)
  images/                Hero, logos, mural photography
design-inspirations/     Reference imagery (excluded from the build)
```

## Deployment

Pushed to `main` → deployed via GitHub Pages. No custom domain yet.

## Content TODO

- [ ] Drop four portrait `.mp4`s into `assets/videos/`:
  - `american-flag.mp4`
  - `zest-bee.mp4`
  - `heart-belongs-to-bartow.mp4`
  - `panther.mp4`
- [ ] Add hero image / mural photography to `assets/images/`
- [ ] Add collaborator logos (USF, City of Bartow, AIS)
