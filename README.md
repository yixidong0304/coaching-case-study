# Coaching Skills Case Study

Instructional design portfolio case study for **Cici Dong**: *From Instructor-Led to Self-Paced*.

Single-page site built with Vite and React. No backend, database, or authentication.

## 1. Start the project

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (default: [http://localhost:5175](http://localhost:5175)).

## 2. Replace the course URL

Edit `src/config.js`:

```js
export const COURSE_URL = 'COURSE_URL_PLACEHOLDER'
```

Replace with your published course link. This value drives every “Experience the course” / “View Course” button.

## 3. Replace the portfolio URL

In the same file:

```js
export const PORTFOLIO_URL = 'PORTFOLIO_URL_PLACEHOLDER'
```

Used by “Back to Cici Dong’s portfolio.”

## 4. Add screenshots

Put image files in `public/images/` using these names:

| Filename | Recommended size | Used for |
|---|---|---|
| `hero-course.png` | 1280 × 800 | Hero + gallery (welcome) |
| `coaching-directing.png` | 1280 × 800 | Gallery |
| `oscar-step-through.png` | 1280 × 800 | Decision 01 + gallery |
| `oscar-scenario.png` | 1280 × 800 | Decision 02 + gallery |
| `grow-scenario.png` | 1280 × 800 | Gallery |
| `coaching-cards.png` | 1280 × 800 | Decision 03 + gallery |
| `storyboard-excerpt.png` | 1280 × 900 | Storyboard section |
| `source-slide-sequence.png` | 1280 × 720 | Content architecture — original ILT collage |
| `redesigned-learning-flow.png` | 1280 × 800 | Content architecture — redesigned flow collage |
| `coaching-directing-check.png` | 1280 × 900 | Content architecture — knowledge check |

Paths are defined in the `IMAGES` object in `src/config.js`. Missing files show a labeled placeholder instead of a broken image.

## 5. Change text

- Section copy lives in the components under `src/components/`.
- Shared lists (objectives, journey stages, image metadata) live in `src/config.js`.
- Global visual tokens (colors, spacing, type) live in `src/styles/index.css`.

## 6. Build for production

```bash
npm run build
```

Output is written to `dist/`. Preview locally:

```bash
npm run preview
```

## 7. Deploy (Vercel or Netlify)

**Vercel**

1. Import the repo in Vercel.
2. Framework preset: Vite.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy.

**Netlify**

1. Import the repo in Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy.

**GitHub Pages**

Set Vite `base` in `vite.config.js` if the site is served from a subpath (for example `base: '/repo-name/'`), then build and publish the `dist` folder.
