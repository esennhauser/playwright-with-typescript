import { Given, When, Then } from '@cucumber/cucumber';

import { LoginPage } from '../../../pages/login_page';

Given('The patient is at the login page', function () {
  this.loginPage = new LoginPage(this.page);
});

When('The patient fills in his email and password', async function () {
  await this.loginPage.fillCredentials(
    this.email,
    this.password
  );
});

When('The patient clicks on the Sign In button', async function () {
  await this.loginPage.clickSignIn();
});

Then('The patient can see the dashboard page', async function () {
  await this.loginPage.verifyDashboard();
});
