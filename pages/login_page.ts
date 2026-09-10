import { expect, Page } from '@playwright/test';
import { BasePage } from './base_page';

export class LoginPage extends BasePage {
  private readonly USERNAME_INPUT = '#user-name';
  private readonly PASSWORD_INPUT = '#password';
  private readonly LOGIN_BUTTON = '#login-button';

  async fillCredentials(username: string, password: string): Promise<void> {
    await this.page.locator(this.USERNAME_INPUT).fill(username);
    await this.page.locator(this.PASSWORD_INPUT).fill(password);
  }

  async clickSignIn(): Promise<void> {
    await this.page.locator(this.LOGIN_BUTTON).click();
  }

  async verifyDashboard(): Promise<void> {
    await expect(
      this.page.locator('[data-test="title"]')
    ).toHaveText('Products');
  }
}
