import { test, expect } from '../SauceFixtures/auth.fixture';
import { ProductPage } from '../Saucepage/ProductPage';

test('TC013 - Thêm sản phẩm vào giỏ', async ({ page, login }) => {
  await login(page);
  const productPage = new ProductPage(page);
  await productPage.addFirstProductToCart();
  await expect(await productPage.getCartCount()).toHaveText('1');
});