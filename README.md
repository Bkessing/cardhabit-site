# cardhabit-site

Marketing site for CardHabit. Astro 6, Tailwind v4 (via `@tailwindcss/vite`), deployed on Vercel at [cardhabitapp.com](https://cardhabitapp.com).

Mechanical reference only. Positioning, locked copy, performance numbers, and channel strategy live in the Obsidian brain under `Projects/CardHabit/`.

## Commands

| Command | Does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Serve the built output locally |

## Structure

```
src/
  components/    Nav, Hero, Ornament, GetTheApp, RelatedPages, RichText, ...
  data/          competitors.ts  (comparison-page content)
  layouts/       BaseLayout.astro (head, canonical, JSON-LD, OG)
  pages/         routes; see below
  styles/        global.css
public/          robots.txt, OG images, static assets
```

## Comparison pages are data-driven

`/vs/*` is a single dynamic route, `src/pages/vs/[slug].astro`, generated from
`src/data/competitors.ts` via `getStaticPaths`. **Adding a competitor means adding
one entry to that file, not creating a page.**

Each entry carries `slug`, `name`, `title`, `description`, `updated`, `intro`,
`introWidth`, and a `blocks` array. Blocks are `h2` / `h3` / `p` (each with an
optional verbatim `margin`) or a `table` of `[feature, cardhabit, competitor]`
rows. Margins and intro widths are stored per block rather than inferred, because
the original hand-written pages varied them in ways position does not predict.

Two inline markers are supported inside any `text`, rendered by
`components/RichText.astro`:

- `{phrase}` renders as gold italic emphasis
- `[label](url)` renders as a link

Each comparison page emits `ItemList` JSON-LD built from its table, in addition to
the site-wide `MobileApplication` and `BreadcrumbList` schema in `BaseLayout`.

These pages were hand-written `.astro` files until 2026-08-14. The prose was
migrated mechanically, and the built HTML was diffed against a pre-refactor
baseline to confirm it was preserved.

## Attribution

`GetTheApp` takes a `source` prop that becomes `data-appstore-cta` on the store
link. **Always pass a distinct value per page.** Before 2026-08-14 only
`/vs/atoms` did, so four comparison pages logged their clicks into a shared
`section` bucket and could not be told apart.

## Conventions

- One canonical URL form: no trailing slash (`trailingSlash: 'never'` here,
  `"trailingSlash": false` in `vercel.json`). Vercel 308s the variant.
- `public/robots.txt` explicitly allows AI crawlers (GPTBot, ClaudeBot,
  PerplexityBot, OAI-SearchBot and others) for indexing and citation.
- `BaseLayout` holds the canonical entity sentence used verbatim across every
  surface (site, App Store, directories) so answer engines match one identity
  string. Change it in all places or none.
- `APP_RATING` in `BaseLayout` is hardcoded so builds stay hermetic. Refresh it
  manually; the lookup command is in a comment beside it.
