import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base_page';

export class ProductPage extends BasePage {
  private readonly PRODUCTS_TITLE = '[data-test="title"]';
  private readonly SHOPPING_CART = '[data-test="shopping-cart-link"]';
  private readonly PRODUCT = '[data-test="inventory-item"]';
  private readonly PRODUCT_NAME = '[data-test="inventory-item-name"]';

  constructor(page: Page) {
    super(page);
  }

  async verifyProductsPage(): Promise<void> {
    await expect(
      this.page.locator(this.PRODUCTS_TITLE)
    ).toHaveText('Products');
  }

  async addProductToCart(productName: string): Promise<void> {
    const product: Locator = this.page
      .locator(this.PRODUCT)
      .filter({
        has: this.page
          .locator(this.PRODUCT_NAME)
          .getByText(productName, { exact: true }),
      });

    await expect(product).toBeVisible();

    await product
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }

  async clickCart(): Promise<void> {
    await this.page.locator(this.SHOPPING_CART).click();
  }

  async verifyProductInCart(productName: string): Promise<void> {
    await expect(
      this.page.getByText(productName, { exact: true })
    ).toBeVisible();
  }
}
