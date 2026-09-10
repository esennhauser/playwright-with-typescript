import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/playwright',

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],

  use: {
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
});