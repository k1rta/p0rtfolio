import { expect, type Locator, type Page } from '@playwright/test';

export async function openMenu(toggle: Locator, mobileMenu: Locator) {
  await toggle.click();
  await expect(mobileMenu).toBeVisible();
}

export async function closeMenuViaToggle(toggle: Locator, mobileMenu: Locator) {
  await toggle.click();
  await expect(mobileMenu).toBeHidden();
}

export async function closeMenuViaEscape(page: Page, mobileMenu: Locator) {
  await page.keyboard.press('Escape');
  await expect(mobileMenu).toBeHidden();
}

export async function closeMenuViaBackdrop(backdrop: Locator, mobileMenu: Locator) {
  await backdrop.click();
  await expect(mobileMenu).toBeHidden();
}
