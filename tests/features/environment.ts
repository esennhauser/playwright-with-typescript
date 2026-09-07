import { Before, After, AfterStep } from '@cucumber/cucumber';
import dotenv from 'dotenv';

import { startBrowser } from '../../driver/driver';

dotenv.config();

Before(async function () {
  this.email = process.env.USER_EMAIL;
  this.password = process.env.USER_PASSWORD;
  this.baseUrl = process.env.URL;

  if (!this.email || !this.password) {
    throw new Error(
      'USER_EMAIL and USER_PASSWORD must be configured in .env file'
    );
  }

  const { browser, page } = await startBrowser();

  this.browser = browser;
  this.page = page;

  await this.page.goto(`${this.baseUrl}/`);
});

AfterStep(async function ({ result }) {
  if (!this.page) {
    return;
  }

  const screenshot = await this.page.screenshot();

  await this.attach(screenshot, 'image/png');

  if (result?.status === 'FAILED') {
    await this.attach(
      `URL: ${this.page.url()}`,
      'text/plain'
    );
  }
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});