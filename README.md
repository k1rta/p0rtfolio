# p0rtfolio

![CI](https://github.com/k1rta/p0rtfolio/actions/workflows/ci.yml/badge.svg)

Personal portfolio of Kirta-Linda Karits — QA Engineer & developer.  
Built with Astro and TypeScript, tested with Playwright, deployed on Vercel.

**Live:** https://p0rtfolio-two.vercel.app

---

## Stack

| Layer | Tool |
| :--- | :--- |
| Framework | [Astro](https://astro.build) |
| Language | TypeScript |
| Testing | [Playwright](https://playwright.dev) |
| CI/CD | GitHub Actions |
| Hosting | Vercel |

---

## Getting started

```bash
npm install       # install dependencies
npm run dev       # dev server → localhost:4321
npm run build     # production build → ./dist/
npm run preview   # preview production build locally
```

---

## Testing

Tests use Playwright and are organised by component. Every component has
`data-testid` attributes — all IDs are centralised in `tests/testids.ts` 
so a rename is one change, not many.

### Run tests

```bash
npm test                  # all tests, headless
npm run test:headed       # all tests, browser visible
npm run test:ui           # Playwright UI mode (interactive)
npm run test:report       # open last HTML report in browser
npm run test:nav          # Nav component tests only
```

### Structure

```
tests/
├── components/
│   └── nav.spec.ts       # Nav component tests
├── testids.ts            # Centralised test IDs
└── playwright.config.ts  # Playwright configuration
```

### CI behaviour

Every push and pull request runs:

1. **Type check** — `tsc --noEmit` 
2. **Build** — `astro build` 
3. **Tests** — Playwright against the built site
4. **Report** — published to GitHub Pages, linked in the PR comment
5. **Gate** — merging to `main` is blocked if any test fails

PR comments show a live pass/fail table with a direct link to the full
interactive HTML report including screenshots and traces on failure.

**Test reports:** https://k1rta.github.io/p0rtfolio/reports/
