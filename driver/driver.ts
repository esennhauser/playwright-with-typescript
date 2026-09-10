import { chromium, Browser, Page } from '@playwright/test';

export async function startBrowser(): Promise<{
  browser: Browser;
  page: Page;
}> {

  const headless = process.env.HEADLESS?.toLowerCase() !== 'false';

  const browser = await chromium.launch({
    headless,
  });

  const page = await browser.newPage();

  return {
    browser,
    page,
  };
}