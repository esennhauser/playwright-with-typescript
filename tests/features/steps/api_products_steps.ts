import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('The client requests the products endpoint', async function () {
  const url = 'https://dummyjson.com/products';
  const method = 'GET';

  this.requestMethod = method;
  this.requestUrl = url;

  this.response = await this.request.get(url);
});

Then('The response status should be 200', async function () {
  expect(this.response.status()).toBe(200);
});

Then('The response should contain products', async function () {
  const body = await this.response.json();

  expect(body).toHaveProperty('products');
  expect(Array.isArray(body.products)).toBe(true);
  expect(body.products.length).toBeGreaterThan(0);

  const product = body.products[0];

  expect(product).toHaveProperty('id');
  expect(product).toHaveProperty('title');
  expect(product).toHaveProperty('price');
});
