import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async getCartItems() {
    return this.page.locator('.cart_item');
  }

  async checkout() {
    await this.page.click('[data-test="checkout"]');
  }
}