import { test, expect } from '@playwright/test';
import { testids } from '../testids';

const navLinks = [
  { id: 'skills', href: '#skills', label: 'Skills' },
  { id: 'experience', href: '#experience', label: 'Experience' },
  { id: 'projects', href: '#projects', label: 'Projects' },
  { id: 'contact', href: '#contact', label: 'Contact' },
] as const;

test.describe('Nav — accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('skip link is present and navigates to main content', async ({ page }) => {
    const skipLink = page.getByRole('link', { name: 'Skip to main content' });
    await expect(skipLink).toBeAttached();
    await expect(skipLink).toHaveAttribute('href', '#main-content');
    
    await skipLink.focus();
    await expect(skipLink).toBeFocused();
  });

  test('nav has accessible label', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: 'Primary' });
    await expect(nav).toBeVisible();
  });
});

test.describe('Nav — desktop', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('nav root is visible', async ({ page }) => {
    const nav = page.getByTestId(testids.nav.root);
    await expect(nav).toBeVisible();
  });

  test('logo is visible and links to home', async ({ page }) => {
    const logo = page.getByRole('link', { name: 'Home' });
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('href', '/');
  });

  test('all desktop nav links are visible with correct href', async ({ page }) => {
    for (const { label, href } of navLinks) {
      const link = page.getByRole('link', { name: label, exact: true }).first();
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', href);
    }
  });

  test('availability badge is visible', async ({ page }) => {
    const badge = page.getByTestId(testids.nav.badge);
    await expect(badge).toBeVisible();
    await expect(badge).toContainText('Available for work');
  });

  test('mobile menu toggle is not visible on desktop', async ({ page }) => {
    const toggle = page.getByTestId(testids.nav.mobileMenuToggle);
    await expect(toggle).toBeHidden();
  });

  test('nav remains visible after scrolling', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 500));
    await expect(page.getByTestId(testids.nav.root)).toBeVisible();
  });
});

test.describe('Nav — mobile', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('nav root is visible', async ({ page }) => {
    const nav = page.getByTestId(testids.nav.root);
    await expect(nav).toBeVisible();
  });

  test('mobile menu toggle is visible', async ({ page }) => {
    const toggle = page.getByTestId(testids.nav.mobileMenuToggle);
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-label', 'Open menu');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(toggle).toHaveAttribute('aria-controls', 'mobile-menu');
  });

  test('desktop nav links are hidden', async ({ page }) => {
    const desktopLink = page.getByTestId(testids.nav.links.skills);
    await expect(desktopLink).toBeHidden();
  });

  test('availability badge is hidden', async ({ page }) => {
    const badge = page.getByTestId(testids.nav.badge);
    await expect(badge).toBeHidden();
  });

  test('mobile menu is hidden by default', async ({ page }) => {
    const mobileMenu = page.getByTestId(testids.nav.mobileMenu);
    await expect(mobileMenu).toBeHidden();
  });

  test('clicking toggle opens the mobile menu', async ({ page }) => {
    const toggle = page.getByTestId(testids.nav.mobileMenuToggle);
    const mobileMenu = page.getByTestId(testids.nav.mobileMenu);

    await toggle.click();
    
    await expect(mobileMenu).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(toggle).toHaveAttribute('aria-label', 'Close menu');
  });

  test('clicking toggle again closes the menu', async ({ page }) => {
    const toggle = page.getByTestId(testids.nav.mobileMenuToggle);
    const mobileMenu = page.getByTestId(testids.nav.mobileMenu);

    await toggle.click();
    await expect(mobileMenu).toBeVisible();

    await toggle.click();
    await expect(mobileMenu).toBeHidden();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(toggle).toHaveAttribute('aria-label', 'Open menu');
  });

  test('pressing Escape closes the menu', async ({ page }) => {
    const toggle = page.getByTestId(testids.nav.mobileMenuToggle);
    const mobileMenu = page.getByTestId(testids.nav.mobileMenu);

    await toggle.click();
    await expect(mobileMenu).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(mobileMenu).toBeHidden();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  test('clicking a mobile link closes the menu', async ({ page }) => {
    const toggle = page.getByTestId(testids.nav.mobileMenuToggle);
    const mobileMenu = page.getByTestId(testids.nav.mobileMenu);

    await toggle.click();
    await expect(mobileMenu).toBeVisible();

    const mobileLink = mobileMenu.getByRole('link', { name: 'Skills' });
    await mobileLink.click();

    await expect(mobileMenu).toBeHidden();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  test('mobile menu contains all navigation links', async ({ page }) => {
    const toggle = page.getByTestId(testids.nav.mobileMenuToggle);
    const mobileMenu = page.getByTestId(testids.nav.mobileMenu);

    await toggle.click();

    for (const { label, href } of navLinks) {
      const link = mobileMenu.getByRole('link', { name: label });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', href);
    }
  });
});
