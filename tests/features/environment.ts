import {
  Before,
  After,
  AfterStep,
  setDefaultTimeout,
} from '@cucumber/cucumber';

import { request } from '@playwright/test';
import dotenv from 'dotenv';

import { startBrowser } from '../../driver/driver';
import { CustomWorld } from './world';

dotenv.config();

setDefaultTimeout(5000);

// =========================
// UI hooks
// =========================

Before({ tags: 'not @api' }, async function (this: CustomWorld) {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;
  const baseUrl = process.env.URL;

  if (!email || !password || !baseUrl) {
    throw new Error(
      'EMAIL, PASSWORD and URL must be configured in .env file'
    );
  }

  this.email = email;
  this.password = password;
  this.baseUrl = baseUrl;

  const { browser, page } = await startBrowser();

  this.browser = browser;
  this.page = page;

  await this.page.goto(this.baseUrl);
});

AfterStep(
  { tags: 'not @api' },
  async function (this: CustomWorld, { result }) {
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
  }
);

After({ tags: 'not @api' }, async function (this: CustomWorld) {
  if (this.browser) {
    await this.browser.close();
  }
});

// =========================
// API hooks
// =========================

Before({ tags: '@api' }, async function (this: CustomWorld) {
  this.request = await request.newContext();
});

After({ tags: '@api' }, async function (this: CustomWorld) {
  if (this.request) {
    await this.request.dispose();
  }
});
