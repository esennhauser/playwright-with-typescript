import { test, expect } from '@playwright/test';

test('user can add a product to the cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory/);

  await page.getByRole('button', { name: /Add to cart/ }).first().click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});