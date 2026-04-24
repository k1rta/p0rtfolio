import { test, expect } from '@playwright/test';
import { testids } from '../testids';

test.describe('Nav — desktop', () => {

  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
  });

  test('nav is visible', async ({ page }) => {
    await expect(page.getByTestId(testids.nav.root)).toBeVisible();
  });

  test('logo is visible and href is /', async ({ page }) => {
    const logo = page.getByTestId(testids.nav.logo);
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('href', '/');
  });

  test('skills link is visible and href is #skills', async ({ page }) => {
    const link = page.getByTestId(testids.nav.links.skills);
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '#skills');
  });

  test('experience link is visible and href is #experience', async ({ page }) => {
    const link = page.getByTestId(testids.nav.links.experience);
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '#experience');
  });

  test('projects link is visible and href is #projects', async ({ page }) => {
    const link = page.getByTestId(testids.nav.links.projects);
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '#projects');
  });

  test('contact link is visible and href is #contact', async ({ page }) => {
    const link = page.getByTestId(testids.nav.links.contact);
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', '#contact');
  });

  test('all nav link hrefs start with #', async ({ page }) => {
    const ids = Object.values(testids.nav.links);
    for (const id of ids) {
      const href = await page.getByTestId(id).getAttribute('href');
      expect(href).toMatch(/^#/);
    }
  });

  test('availability badge is visible on desktop', async ({ page }) => {
    await expect(page.getByTestId(testids.nav.badge)).toBeVisible();
  });

  test('nav remains visible after scrolling down', async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, 600));
    await page.waitForTimeout(300);
    await expect(page.getByTestId(testids.nav.root)).toBeVisible();
  });

});

test.describe('Nav — mobile', () => {

  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
  });

  test('nav is visible on mobile', async ({ page }) => {
    await expect(page.getByTestId(testids.nav.root)).toBeVisible();
  });

  test('availability badge is hidden on mobile', async ({ page }) => {
    await expect(page.getByTestId(testids.nav.badge)).toBeHidden();
  });

  test('desktop nav links are hidden on mobile', async ({ page }) => {
    await expect(page.getByTestId(testids.nav.links.skills)).toBeHidden();
  });

});
