import { Given, When, Then } from '@cucumber/cucumber';

import { LoginPage } from '../../../pages/login_page';

Given('The customer is at the login page', function () {
  this.loginPage = new LoginPage(this.page);
});

When('The customer fills in his email and password', async function () {
  await this.loginPage.fillCredentials(this.email, this.password);
});

When('The customer clicks on the Log In button', async function () {
  await this.loginPage.clickSignIn();
});

Then('The customer can see the products page', async function () {
  await this.loginPage.verifyDashboard();
});
