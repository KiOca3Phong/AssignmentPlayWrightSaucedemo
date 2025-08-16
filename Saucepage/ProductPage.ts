import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async addFirstProductToCart() {
    await this.page.click('.inventory_item:first-child button');
  }

  async getCartCount() {
    return this.page.locator('.shopping_cart_badge');
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }
}