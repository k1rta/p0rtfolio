import { test as base, type Locator } from '@playwright/test';
import { testids } from '../testids';

export type NavFixtures = {
  toggle: Locator;
  mobileMenu: Locator;
  backdrop: Locator;
};

export const navTest = base.extend<NavFixtures>({
  toggle: async ({ page }, use) =>
    use(page.getByTestId(testids.nav.mobileMenuToggle)),

  mobileMenu: async ({ page }, use) =>
    use(page.getByTestId(testids.nav.mobileMenu)),

  backdrop: async ({ page }, use) =>
    use(page.getByTestId(testids.nav.mobileBackdrop)),
});
