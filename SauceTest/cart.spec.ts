
import { test, expect } from '../SauceFixtures/auth.fixture';
import { ProductPage } from '../Saucepage/ProductPage';
import { CartPage } from '../Saucepage/CartPage';

test('TC011 - Kiểm tra giỏ hàng', async ({ page, login }) => {
  await login(page);
  const productPage = new ProductPage(page);
  await productPage.addFirstProductToCart();
  await productPage.openCart();

  const cartPage = new CartPage(page);
  await expect(await cartPage.getCartItems()).toHaveCount(1);
});