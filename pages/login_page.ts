import { expect, Page } from '@playwright/test';
import { BasePage } from './base_page';

export class LoginPage extends BasePage {
  private readonly EMAIL_INPUT = '#username';
  private readonly PASSWORD_INPUT = '#password';

  async fillCredentials(email: string, password: string): Promise<void> {
    await this.page.locator(this.EMAIL_INPUT).fill(email);
    await this.page.locator(this.PASSWORD_INPUT).fill(password);
  }

  async clickSignIn(): Promise<void> {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async verifyDashboard(): Promise<void> {
    const dashboardLink = this.page.getByRole('heading', {
      name: 'Logged In Successfully',
      exact: true,
    });

    await expect(dashboardLink).toBeVisible();
  }
}
