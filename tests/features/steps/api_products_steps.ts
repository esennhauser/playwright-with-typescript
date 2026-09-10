import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('The client requests the products endpoint', async function () {
  const url = 'https://dummyjson.com/products';
  const method = 'GET';

  this.requestMethod = method;
  this.requestUrl = url;

  this.response = await this.request.get(url);

  // Capture response body
  this.responseBody = await this.response.text();

  // Build cURL command
  const curl = `curl -X ${method} "${url}"`;

  // Attach request information to Allure
  await this.attach(
    `Method: ${method}\nURL: ${url}\n\n${curl}`,
    'text/plain'
  );

  // Attach response information to Allure
  await this.attach(
    `Status: ${this.response.status()}\n\n${this.responseBody}`,
    'text/plain'
  );
});

Then('The response status should be 200', async function () {
  expect(this.response.status()).toBe(200);
});

Then('The response should contain products', async function () {
  const body = JSON.parse(this.responseBody);

  expect(body).toHaveProperty('products');
  expect(Array.isArray(body.products)).toBe(true);
  expect(body.products.length).toBeGreaterThan(0);

  const product = body.products[0];

  expect(product).toHaveProperty('id');
  expect(product).toHaveProperty('title');
  expect(product).toHaveProperty('price');
});