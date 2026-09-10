import { Given, When, Then } from '@cucumber/cucumber';

import { LoginPage } from '../../../pages/login_page';
import { ProductPage } from '../../../pages/products_page';

Given('A customer is logged on the Saucedemo platform', async function () {
  const loginPage = new LoginPage(this.page);

  await loginPage.fillCredentials(this.email,this.password);

  await loginPage.clickSignIn();

  await loginPage.verifyDashboard();
});

Given('The customer is on the products page', async function () {
  const productPage = new ProductPage(this.page);

  await productPage.verifyProductsPage();
});

When(
  'The customer adds {string} to the cart',
  async function (productName: string) {
    const productPage = new ProductPage(this.page);

    this.productName = productName;

    await productPage.addProductToCart(productName);
  }
);

When('The customer clicks on the cart button', async function () {
  const productPage = new ProductPage(this.page);

  await productPage.clickCart();
});

Then(
  'The customer can see the product previously selected',
  async function () {
    const productPage = new ProductPage(this.page);

    await productPage.verifyProductInCart(
      this.productName
    );
  }
);