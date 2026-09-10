import {
  IWorldOptions,
  World,
  setWorldConstructor,
} from '@cucumber/cucumber';

import {
  APIRequestContext,
  APIResponse,
  Browser,
  Page,
} from '@playwright/test';

export class CustomWorld extends World {
  // UI
  browser!: Browser;
  page!: Page;

  // API
  request!: APIRequestContext;
  response!: APIResponse;
  responseBody!: string;

  // Environment
  email!: string;
  password!: string;
  baseUrl!: string;

  // Scenario data
  requestMethod!: string;
  requestUrl!: string;
  productName!: string;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);