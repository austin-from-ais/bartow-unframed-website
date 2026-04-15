# Bartow Unframed — Website Build Plan

> **For Claude Code**: Read this entire document before writing any code. This is your spec for building a Jekyll-based GitHub Pages site for the Bartow Unframed AR mural project.

---

## Project Context

**Bartow Unframed** is a location-based augmented reality application that overlays interactive AR experiences onto public murals throughout Bartow, Florida. The app doubles as a guided tour of the city, combining immersive AR content at mural sites with a map-based interface (OpenStreetMap) that highlights local businesses, encouraging users to explore the community while discovering interactive art.

### Collaborators

- **USF Access 3D Lab** (University of South Florida) — project lead, directed by Dr. Laura Harrison
- **City of Bartow Community Redevelopment Agency (CRA)** — community partner
- **Augmented Info Systems (AIS)** — programmed the application, led technical development

### The Four AR Mural Experiences

Each mural has a unique AR experience triggered when the user points their camera at the physical mural:

1. **American Flag** — An animated waving American flag with fireworks and a hand-held sparkler effect attached to the camera. Patriotic audio. Fourth of July energy.
2. **Zest Bee** — An animated bee that approaches and follows the user around, buzzes and vibrates, with background music. The bee is tied thematically to the mural's imagery.
3. **My Heart Belongs to Bartow** — Blooming and swaying flowers, a butterfly, 3D floating text, and ambient music. A celebration of the city itself.
4. **Panther** — A panther that leaps out from the mural with a depth mask effect (appearing behind/within the mural rather than floating on top), sits in the parking lot, gestures. Butterfly and audio elements.

### Technical Stack

- **AR Engine**: Niantic Lightship VPS (Visual Positioning System)
- **3D/AR Development**: Unity (C#), integrated into native Android/iOS apps
- **Android Frontend**: Kotlin with Jetpack Compose
- **Map**: OpenStreetMap (migrated from Google Maps to eliminate billing dependencies)
- **On-Site Scanning**: Scaniverse photogrammetry + LiDAR scanning (using USF Access 3D lab equipment) conducted at each mural location for AR anchoring
- **Platforms**: iOS and Android
- **Architecture**: Scene 0 bootstrapper that reads intents and routes to the correct mural scene (Scenes 1–4). Each scene is a self-contained AR experience.

### Process & Community Engagement

The project involved extensive community engagement: stakeholder meetings, public presentations, and feedback collection across Bartow. The team collaborated with the Bartow CRA to engage local businesses, which are featured within the app itself as an overlay on the map. The point is to create something between an AR art experience and a guided tour — users discover interactive immersive experiences at mural sites while also being directed toward local businesses and points of interest. A full UX design process was conducted including user stories, wireframes, and iterative design. An on-site scanning period was required to capture mural environments for AR anchoring.

### Key Themes

- Community-driven development and placemaking through technology
- Supporting local business through digital engagement
- Blending public art with immersive technology
- Accessible AR — designed to run on low-end phones, not just flagship devices

---

## Website Requirements

### Platform

- **Jekyll** static site, deployed via **GitHub Pages**
- Keep it simple. Minimal dependencies. No heavy JS frameworks.
- The site should be clean, modern, and feel like a civic/cultural project — not a tech startup landing page.

### Design Inspiration

Check the `/design-inspirations/` folder in the project root. It contains reference images that should guide the visual direction of the site. Study these before making any design decisions. Match the mood, layout patterns, color sensibility, and typography energy from those references. If the folder is empty or doesn't exist yet, proceed with a clean, editorial design sensibility — think somewhere between a museum exhibition page and a community arts project. Muted earth tones, generous whitespace, strong typography.

### Content Structure

The site should have the following sections/pages. This can be a single-page scrolling site or multi-page — use your judgment based on the design inspirations:

#### 1. Hero / Landing Section
- Project name: **Bartow Unframed**
- Tagline conveying the concept (AR meets public art meets community exploration)
- A prominent area for a hero image or video (placeholder for now)
- Clean, bold, immediate

#### 2. About the Project
- What Bartow Unframed is — a location-based AR app that brings Bartow's public murals to life
- The collaboration between USF Access 3D Lab, City of Bartow CRA, and AIS
- The community engagement story: stakeholder meetings, public presentations, local business integration
- The dual purpose: AR art experiences + guided tour of local businesses via the map

#### 3. The Murals (Experience Showcase)
- This is the centerpiece of the site
- **Four portrait-mode videos** captured on a cellphone showing the AR experiences in action at each mural
- Each video should be displayed prominently in portrait orientation (these are vertical phone recordings)
- Each mural gets its own card/section with:
  - The mural name (American Flag, Zest Bee, My Heart Belongs to Bartow, Panther)
  - A brief description of the AR experience
  - The portrait video
- Design the video display to honor the vertical format — don't letterbox them into landscape containers. These are phone screen recordings and should feel native.
- Use HTML5 `<video>` tags. Videos will be provided as .mp4 files.
- Video files will be placed in an `/assets/videos/` directory. Use placeholder references for now:
  - `american-flag.mp4`
  - `zest-bee.mp4`
  - `heart-belongs-to-bartow.mp4`
  - `panther.mp4`

#### 4. How It Works
- Brief explanation of the user experience:
  1. Download the app
  2. Open the map to find mural locations and nearby local businesses
  3. Walk to a mural and point your camera at it
  4. Watch the mural come alive with AR content
- Mention the OpenStreetMap-powered navigation and local business overlay
- Keep it concise and visual — icons or simple illustrations if appropriate

#### 5. Technology
- Brief, accessible explanation of the tech (not a deep dive, but enough to convey the sophistication):
  - Niantic Lightship for AR positioning
  - On-site photogrammetry and LiDAR scanning for mural environment capture
  - Unity for 3D content, native Android/iOS apps
  - OpenStreetMap for billing-free map navigation
- This section should be informative but not intimidating — the audience includes city officials, community members, and arts/tech professionals

#### 6. Credits / Collaborators
- **USF Access 3D Lab** — Project Lead (Dr. Laura Harrison)
- **City of Bartow Community Redevelopment Agency (CRA)** — Community Partner
- **Augmented Info Systems (AIS)** — Application Development
- Acknowledge the broader team: UX designers, artists, local businesses, and community stakeholders
- Link to USF Access 3D Lab and AIS websites if available

#### 7. Footer
- Copyright
- Links to collaborator sites
- Contact or inquiry info (placeholder email)

### Technical Implementation Notes

#### Jekyll Setup
- Use a clean, minimal Jekyll theme or build from scratch with a custom `_layouts/default.html`
- `_config.yml` should be configured for GitHub Pages deployment (`baseurl`, `url`, etc.)
- Use SCSS/Sass for styling if writing custom CSS
- Keep the Gemfile minimal: `jekyll`, `github-pages` gem, and maybe `jekyll-seo-tag`

#### Portrait Video Display
This is critical. The videos are vertical (9:16 aspect ratio) phone screen recordings. They need to look good, not awkward. Consider:
- A grid or carousel layout where portrait videos sit side by side (on desktop) or stack (on mobile)
- Max-width constraints so they don't blow up to full screen height
- On mobile, the videos should feel natural and full-width since the user is already holding a phone vertically
- Autoplay on scroll with muted audio is a nice touch, with controls to unmute
- Consider a subtle device frame mockup (phone outline) around each video to contextualize them as app recordings

#### Responsive Design
- Mobile-first. The audience for this site will likely view it on phones.
- The portrait videos should be the hero content on mobile.
- Desktop layout should be clean but secondary — make sure it works, but optimize for mobile.

#### Assets Directory Structure
```
/assets/
  /videos/
    american-flag.mp4
    zest-bee.mp4
    heart-belongs-to-bartow.mp4
    panther.mp4
  /images/
    (hero images, mural photos, logos, etc. — placeholders for now)
  /css/
    main.scss
```

#### Performance
- Lazy load videos
- Compress images
- Keep page weight low — this should load fast on cell networks since people may be viewing it while standing in front of a mural in Bartow

#### SEO
- Use `jekyll-seo-tag` plugin
- Proper meta descriptions, Open Graph tags
- Title: "Bartow Unframed — Augmented Reality Murals in Bartow, Florida"

---

## File Structure

```
bartow-unframed/
├── _config.yml
├── _layouts/
│   └── default.html
├── _includes/
│   ├── header.html
│   ├── footer.html
│   ├── hero.html
│   ├── about.html
│   ├── murals.html
│   ├── how-it-works.html
│   ├── technology.html
│   └── credits.html
├── _sass/
│   ├── _variables.scss
│   ├── _base.scss
│   ├── _layout.scss
│   ├── _components.scss
│   └── _responsive.scss
├── assets/
│   ├── css/
│   │   └── main.scss
│   ├── videos/
│   │   └── (placeholder .mp4 files go here)
│   ├── images/
│   │   └── (hero images, logos, mural photos go here)
│   └── js/
│       └── main.js (intersection observer for video autoplay, smooth scroll, etc.)
├── design-inspirations/
│   └── (reference images for visual direction — READ THESE FIRST)
├── index.md
├── Gemfile
└── README.md
```

---

## Design Direction Summary

- **Mood**: Civic pride meets contemporary art exhibition. Warm, grounded, community-oriented.
- **Typography**: Strong serif or slab-serif for headings, clean sans-serif for body. Nothing startup-y.
- **Colors**: Pull from the design inspirations folder first. Fallback: earth tones, warm neutrals, with an accent color derived from Bartow's visual identity or the murals themselves.
- **Layout**: Generous whitespace. Let the videos breathe. Sections should feel like rooms in a gallery.
- **Photography/Video**: The portrait videos are the stars. Everything else supports them.

---

## Deployment

1. Push the repo to GitHub
2. Enable GitHub Pages in the repo settings (deploy from `main` branch or `gh-pages`)
3. If using a custom domain later, add CNAME file
4. Verify the site builds and deploys correctly with GitHub Actions

---

## What I'll Provide

- The four portrait-mode .mp4 video files (screen recordings from the app)
- Images for the hero section and mural location photos (eventually)
- Design inspiration images in the `/design-inspirations/` folder
- Any logos or branding assets from AIS, USF, or City of Bartow

## What Claude Code Should Do

1. **Read the `/design-inspirations/` folder first** — study the reference images before writing any code
2. Initialize the Jekyll project with the file structure above
3. Build out the full site with all sections
4. Use placeholder content where assets aren't available yet, but make the placeholders obvious and easy to swap
5. Ensure the portrait video layout is solid and responsive
6. Test locally with `bundle exec jekyll serve` before considering it done
7. Commit everything cleanly with a descriptive initial commit message
