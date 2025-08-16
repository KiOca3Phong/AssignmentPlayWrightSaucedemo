import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInfo(firstName: string, lastName: string, zip: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', zip);
    await this.page.click('[data-test="continue"]');
  }

  async finishOrder() {
    await this.page.click('[data-test="finish"]');
  }

  async getSuccessMsg() {
    return this.page.locator('.complete-header');
  }
}