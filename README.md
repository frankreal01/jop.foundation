# JOP Foundation Website

This is the current JOP Foundation institutional website architecture.

## Files

- `index.html` — main semantic website
- `style.css` — primary visual system and responsive styling
- `script.js` — navigation, scroll progress, reveal animation and active section
- `react-components.jsx` — React-powered interactive Foundation Architecture module
- `react-components.css` — responsive styling for the React module
- `assets/images/` — approved visual assets

## React

The main site remains lightweight HTML/CSS/JavaScript. React is used as a complementary interactive layer rather than forcing the entire website into React prematurely.

The React module provides:
- interactive Identity / Intentionality / Professionalism tabs
- responsive layout
- keyboard-friendly tab buttons
- content switching without page reload

The current implementation uses React 18 through CDN scripts, which is suitable for learning/prototyping. For production deployment, the next step should be migrating the whole site into a Vite + React project.

## Images

`assets/images/foundation-hero.jpg` is reserved for the final website hero image.

`assets/images/foundation-visual-concept.png` is a generated visual concept. It contains embedded campaign typography, so it should be treated as a reference/temporary visual rather than the final hero asset.

Recommended final hero:
- wide 16:9 or 21:9 composition
- no embedded text
- no logo
- young African people in a contemporary architectural environment
- strong cobalt/midnight-blue atmosphere
- negative space for HTML typography
- editorial and institutional, not charity-style

`assets/images/founder.jpg` is reserved for the founder portrait.

## Local development

You can open `index.html` directly for basic testing. A local server is preferable for the best browser behavior.

Example with VS Code:
1. Install Live Server.
2. Right-click `index.html`.
3. Select "Open with Live Server".

## Next architecture step

For the full production website, migrate the project to:
- React + Vite
- reusable components
- React Router
- content/data files
- form handling
- CMS or backend
- analytics
- proper social links
- SEO/Open Graph metadata
- optimized WebP/AVIF images
