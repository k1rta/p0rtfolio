import { test, expect } from '@playwright/test';
import { navTest } from '../fixtures';
import { openMenu, closeMenuViaToggle, closeMenuViaEscape, closeMenuViaBackdrop } from '../helpers/nav.helpers';
import { testids } from '../testids';

const NAV_LINKS = [
  { id: 'skills',     href: '#skills',     label: 'Skills' },
  { id: 'experience', href: '#experience', label: 'Experience' },
  { id: 'projects',   href: '#projects',   label: 'Projects' },
  { id: 'contact',    href: '#contact',    label: 'Contact' },
] as const;

// ─── Accessibility ─────────────────────────────────────────────────────────

test.describe('Nav — accessibility', () => {
  test.use({ viewport: { width: 1280, height: 800 } });
  test.beforeEach(({ page }) => page.goto('/'));

  test('skip link is present and links to #main-content', async ({ page }) => {
    const skipLink = page.getByRole('link', { name: 'Skip to main content' });
    await Promise.all([
      expect(skipLink).toBeAttached(),
      expect(skipLink).toHaveAttribute('href', '#main-content'),
    ]);
    await skipLink.focus();
    await expect(skipLink).toBeFocused();
  });

  test('nav has accessible label', async ({ page }) => {
    await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
  });
});

// ─── Desktop ───────────────────────────────────────────────────────────────

test.describe('Nav — desktop', () => {
  test.use({ viewport: { width: 1280, height: 800 } });
  test.beforeEach(({ page }) => page.goto('/'));

  test('nav is visible', async ({ page }) => {
    await expect(page.getByTestId(testids.nav.root)).toBeVisible();
  });

  test('logo is visible and links to home', async ({ page }) => {
    const logo = page.getByRole('link', { name: 'Home' });
    await Promise.all([
      expect(logo).toBeVisible(),
      expect(logo).toHaveAttribute('href', '/'),
    ]);
  });

  for (const { label, href } of NAV_LINKS) {
    test(`${label.toLowerCase()} link is visible with href ${href}`, async ({ page }) => {
      const link = page.getByRole('link', { name: label, exact: true }).first();
      await Promise.all([
        expect(link).toBeVisible(),
        expect(link).toHaveAttribute('href', href),
      ]);
    });
  }

  test('availability badge is visible with correct text', async ({ page }) => {
    const badge = page.getByTestId(testids.nav.badge);
    await Promise.all([
      expect(badge).toBeVisible(),
      expect(badge).toContainText('Available for work'),
    ]);
  });

  test('mobile toggle is hidden on desktop', async ({ page }) => {
    await expect(page.getByTestId(testids.nav.mobileMenuToggle)).toBeHidden();
  });

  test('nav stays visible after scrolling', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 500));
    await expect(page.getByTestId(testids.nav.root)).toBeVisible();
  });
});

// ─── Mobile ────────────────────────────────────────────────────────────────

navTest.describe('Nav — mobile', () => {
  navTest.use({ viewport: { width: 375, height: 812 } });
  navTest.beforeEach(({ page }) => page.goto('/'));

  navTest('nav is visible', async ({ page }) => {
    await expect(page.getByTestId(testids.nav.root)).toBeVisible();
  });

  navTest('toggle has correct initial ARIA attributes', async ({ toggle }) => {
    await Promise.all([
      expect(toggle).toBeVisible(),
      expect(toggle).toHaveAttribute('aria-label', 'Open menu'),
      expect(toggle).toHaveAttribute('aria-expanded', 'false'),
      expect(toggle).toHaveAttribute('aria-controls', 'mobile-menu'),
    ]);
  });

  navTest('desktop nav links are hidden', async ({ page }) => {
    await expect(page.getByTestId(testids.nav.links.skills)).toBeHidden();
  });

  navTest('desktop availability badge is hidden', async ({ page }) => {
    await expect(page.getByTestId(testids.nav.badge)).toBeHidden();
  });

  navTest('mobile menu is hidden by default', async ({ mobileMenu }) => {
    await expect(mobileMenu).toBeHidden();
  });

  navTest('toggle opens the menu', async ({ toggle, mobileMenu }) => {
    await toggle.click();
    await Promise.all([
      expect(mobileMenu).toBeVisible(),
      expect(toggle).toHaveAttribute('aria-expanded', 'true'),
      expect(toggle).toHaveAttribute('aria-label', 'Close menu'),
    ]);
  });

  navTest('toggle closes the menu when open', async ({ toggle, mobileMenu }) => {
    await openMenu(toggle, mobileMenu);
    await closeMenuViaToggle(toggle, mobileMenu);
    await Promise.all([
      expect(toggle).toHaveAttribute('aria-expanded', 'false'),
      expect(toggle).toHaveAttribute('aria-label', 'Open menu'),
    ]);
  });

  navTest('escape closes the menu', async ({ page, toggle, mobileMenu }) => {
    await openMenu(toggle, mobileMenu);
    await closeMenuViaEscape(page, mobileMenu);
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  navTest('backdrop click closes the menu', async ({ toggle, mobileMenu, backdrop }) => {
    await openMenu(toggle, mobileMenu);
    await closeMenuViaBackdrop(backdrop, mobileMenu);
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  navTest('clicking a mobile link closes the menu', async ({ toggle, mobileMenu }) => {
    await openMenu(toggle, mobileMenu);
    await mobileMenu.getByRole('link', { name: 'Skills' }).click();
    await Promise.all([
      expect(mobileMenu).toBeHidden(),
      expect(toggle).toHaveAttribute('aria-expanded', 'false'),
    ]);
  });

  navTest('mobile footer badge shows available for work', async ({ page, toggle }) => {
    await toggle.click();
    const badge = page.getByTestId(testids.nav.badgeMobile);
    await Promise.all([
      expect(badge).toBeVisible(),
      expect(badge).toContainText('Available for work'),
    ]);
  });

  navTest('menu contains all navigation links', async ({ toggle, mobileMenu }) => {
    await openMenu(toggle, mobileMenu);
    for (const { label, href } of NAV_LINKS) {
      const link = mobileMenu.getByRole('link', { name: label });
      await Promise.all([
        expect(link).toBeVisible(),
        expect(link).toHaveAttribute('href', href),
      ]);
    }
  });
});
