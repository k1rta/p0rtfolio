import { defineConfig, devices } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:4321';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
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
      name: 'desktop',
      use: { ...devices['Desktop Chrome'] },
      grep: /desktop/,  // only runs describe blocks with "desktop" in the name
    },
    {
      name: 'mobile',
      use: { ...devices['Pixel 5'] },
      grep: /mobile/,   // only runs describe blocks with "mobile" in the name
    },
  ],
  webServer: BASE_URL.includes('localhost')
    ? {
        command: 'npm run build && npm run preview',
        url: 'http://localhost:4321',
        reuseExistingServer: !process.env.CI,
      }
    : undefined,
});
