# Norra

**Navigate life in Canada.** Premium Canadian assistance & navigation platform (product demo).

Live site (after GitHub Pages is enabled): `https://<your-username>.github.io/norra/`

## Tech stack

- **Next.js 16** (App Router) with **static export** (`output: "export"`)
- **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, **Lucide**
- No backend, database, auth, or payments in this demo
- Hosted for free on **GitHub Pages** (HTTPS)

## Project structure

```
app/                 # Routes (pages)
components/          # UI components
lib/data/            # Demo content + founder config
lib/site.ts          # Site URL / SEO base
public/              # Static assets, robots.txt, sitemap.xml
.github/workflows/   # GitHub Pages deploy
```

Founder & contact details (single source of truth): `lib/data/founder.ts`

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
```

Static files are written to `out/`. Preview with any static server:

```bash
npx serve out
```

### Base path (GitHub project pages)

If the site is served from `https://USER.github.io/norra/`:

```bash
NEXT_PUBLIC_BASE_PATH=/norra NEXT_PUBLIC_SITE_URL=https://USER.github.io/norra npm run build
```

The GitHub Actions workflow sets these automatically.

## Deploy (free — GitHub Pages)

1. Push this repo to GitHub as a **public** repository named `norra` (or update the workflow).
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or run the “Deploy to GitHub Pages” workflow).
4. Site URL: `https://<username>.github.io/norra/`

No paid plan or custom domain required. The site stays online after any Grok/Cursor subscription ends.

## Environment variables

| Variable | When | Purpose |
|----------|------|---------|
| `NEXT_PUBLIC_BASE_PATH` | Build (project Pages) | e.g. `/norra` |
| `NEXT_PUBLIC_SITE_URL` | Build | Canonical site URL for OG / sitemap |

None required for local `npm run dev`.

## Demo-only features

These are UI prototypes — **not** live services:

- Marketplace bookings & demo payment
- Nora assistant (rule-based keyword routing, not an LLM)
- My Canada Plan / checklists (browser localStorage)
- Document organizer (no secure upload/storage)
- Job & housing listings (fictional / labelled demo)
- Provider profiles (fictional / labelled demo)
- Contact form (frontend only until an email API is connected)

Norra is **not** a law firm, immigration consultancy, medical provider, financial institution, or government organization.

## Updating later

1. Edit content in `lib/data/` or pages under `app/`.
2. Update founder info in `lib/data/founder.ts` (set `linkedInUrl` when ready).
3. `git push` to `main` — GitHub Actions rebuilds and deploys.

## License

Private / all rights reserved unless otherwise stated by the Founder.
