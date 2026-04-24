import { test, expect } from '@playwright/test';
import { testids } from '../testids';

const navLinks = [
  { id: 'skills',     href: '#skills' },
  { id: 'experience', href: '#experience' },
  { id: 'projects',   href: '#projects' },
  { id: 'contact',    href: '#contact' },
] as const;

test.describe('Nav — desktop', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('nav is visible', async ({ page }) => {
    await expect(page.getByTestId(testids.nav.container)).toBeVisible();
  });

  test('logo is visible and links to home', async ({ page }) => {
    const logo = page.getByTestId(testids.nav.logo);
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('href', '/');
  });

  for (const { id, href } of navLinks) {
    test(`${id} link is visible and href is ${href}`, async ({ page }) => {
      const link = page.getByTestId(testids.nav.links[id]);
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', href);
    });
  }

  test('availability badge is visible on desktop', async ({ page }) => {
    await expect(page.getByTestId(testids.nav.badge)).toBeVisible();
  });

  test('nav remains visible after scrolling down', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 500));
    await expect(page.getByTestId(testids.nav.container)).toBeVisible();
  });
});

test.describe('Nav — mobile', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('nav is visible on mobile', async ({ page }) => {
    await expect(page.getByTestId(testids.nav.container)).toBeVisible();
  });

  test('availability badge is hidden on mobile', async ({ page }) => {
    await expect(page.getByTestId(testids.nav.badge)).toBeHidden();
  });

  test('desktop nav links are hidden on mobile', async ({ page }) => {
    await expect(page.getByTestId(testids.nav.links.skills)).toBeHidden();
  });
});
