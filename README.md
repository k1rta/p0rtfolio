# p0rtfolio

> Personal portfolio built to demonstrate production-quality front-end development, test automation, and CI/CD — not just to show projects, but to be a project itself.

[![CI](https://github.com/k1rta/p0rtfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/k1rta/p0rtfolio/actions/workflows/ci.yml)

**Live:** https://p0rtfolio-two.vercel.app  
**Test Reports:** https://k1rta.github.io/p0rtfolio/ _(always shows latest)_

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

## Architecture decisions

**Astro over Next.js** — This site has no dynamic data fetching. Astro ships zero JavaScript by default, which gives better Lighthouse scores and simpler deployment. Next.js is the right choice when you need SSR or API routes; here it would be overhead.

**Playwright over Cypress** — Playwright runs in a real browser context, supports multiple browsers in one suite, and has better support for accessibility assertions (`getByRole`). Cypress is excellent for component testing but Playwright is the current industry standard for E2E on modern stacks.

**Vercel over Netlify** — Zero-config Astro support, preview deployments per PR, and the Vercel dashboard integrates well with GitHub Actions for environment variable management.

**GitHub Pages for test reports** — Reports are static HTML. Hosting them on Pages means no extra service, no cost, and the URL is stable and shareable in PRs. The redirect pattern (root index always points to latest) means stakeholders can bookmark one URL.

---

## Local setup requirements

- Node 20+
- `npm install` installs Playwright browsers automatically via postinstall
- If browsers are missing: `npx playwright install --with-deps`
- Tests run against the **built** site (`astro build`), not the dev server, to match CI behaviour exactly

---

## Getting started

```bash
npm install       # install dependencies
npm run dev       # dev server → localhost:4321
npm run build     # production build → ./dist/
npm run preview   # preview production build locally
```

---

## Development workflow

### Making a change

1. Create a branch from `main`
2. Run `npm run dev` — Astro starts at `localhost:4321` with hot reload
3. Make changes; if they touch a component with tests, run `npm run test:nav` (or the relevant suite) to get fast feedback
4. Push the branch — CI runs type check, build, and full Playwright suite
5. Open a PR — a bot comments with the test result table and a link to the HTML report for that specific run
6. Merge is blocked until all checks pass

### Adding a new component

1. Build the component in `src/components/`
2. Add `data-testid` attributes to every interactive or meaningful element
3. Register the IDs in `tests/testids.ts` — this is the single source of truth; never hardcode a testid string in a spec file
4. Create `tests/<component>/<name>.spec.ts`
5. For shared setup, add a fixture in `tests/fixtures/`
6. For reusable actions (open, close, submit), add a helper in `tests/helpers/`

### Why testids are centralised

If a testid changes, you update one string in `testids.ts` and every test that uses it is automatically correct. Without centralisation, a rename breaks tests across multiple files and the grep-and-replace approach misses cases. TypeScript makes wrong testid names a compile error, not a silent runtime failure.

---

## Testing

Tests use Playwright and are organised by component. Every component has `data-testid` attributes — all IDs are centralised in `tests/testids.ts` so a rename is one change, not many.

### Run tests

```bash
npm test                  # all tests, headless
npm run test:headed       # all tests, browser visible
npm run test:ui           # Playwright UI mode (interactive)
npm run test:report       # open last HTML report in browser
npm run test:nav          # Nav component tests only
```

### Test structure

```
tests/
├── fixtures/
│   ├── index.ts          # re-exports all fixtures
│   └── nav.fixture.ts    # Locator fixtures for nav tests
├── helpers/
│   └── nav.helpers.ts    # reusable actions (openMenu, closeMenu…)
├── nav/
│   └── nav.spec.ts       # test cases only — no setup noise
└── testids.ts            # all data-testid values as typed constants
```

**Fixtures** provide pre-resolved `Locator` objects so test bodies don't repeat `page.getByTestId(...)` on every line. Adding a new locator means one change in the fixture file.

**Helpers** are plain async functions that accept `Locator` and `Page` arguments. They encapsulate multi-step actions (open a menu, close via Escape) so tests stay readable and the action logic lives in one place.

**Spec files** contain only assertions. No raw selectors, no setup boilerplate, no CSS class strings.

### CI behaviour

Every push and pull request runs:

1. **Type check** — `tsc --noEmit`
2. **Build** — `astro build`
3. **Tests** — Playwright against the built site
4. **Report** — published to GitHub Pages at a unique URL per run
5. **Redirect** — root index updated to always point to the latest report

**Merge gate:** Merging to `main` is blocked if any test fails.

PR comments show a live pass/fail table with a direct link to the full interactive HTML report. Includes pass/fail per test, screenshots on failure, and full traces for debugging.

**Latest report:** <https://k1rta.github.io/p0rtfolio/> _(auto-redirects)_  
**All reports:** <https://k1rta.github.io/p0rtfolio/reports/> _(archived by run ID)_
