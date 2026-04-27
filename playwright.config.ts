import { defineConfig, devices } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:4321';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,        // 1 is enough; 2 hides flakiness
  workers: process.env.CI ? 2 : undefined, // one per project in CI
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['list'],
  ],
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      // Runs all describe blocks that contain "desktop" OR "accessibility"
      // Accessibility tests use a desktop viewport and belong here
      name: 'desktop',
      use: { ...devices['Desktop Chrome'] },
      grep: /desktop|accessibility/,
      grepInvert: /mobile/,  // exclude mobile tests
    },
    {
      // Runs all describe blocks that contain "mobile"
      name: 'mobile',
      use: { ...devices['Pixel 5'] },
      grep: /mobile/,
    },
  ],
  webServer: BASE_URL.includes('localhost')
    ? {
        command: 'npm run build && npm run preview',
        url: BASE_URL,                          // derived from BASE_URL, not hardcoded
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,                       // build + preview can take >30s default
      }
    : undefined,
});
