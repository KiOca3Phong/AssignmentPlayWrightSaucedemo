import { test, expect } from '../SauceFixtures/auth.fixture';
import { ProductPage } from '../Saucepage/ProductPage';
import { CartPage } from '../Saucepage/CartPage';
import { CheckoutPage } from '../Saucepage/CheckoutPage';

test('TC012 - Checkout thành công', async ({ page, login }) => {
  await login(page);
  const productPage = new ProductPage(page);
  await productPage.addFirstProductToCart();
  await productPage.openCart();

  const cartPage = new CartPage(page);
  await cartPage.checkout();

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillInfo('Nguyen', 'Tran', '70000');
  await checkoutPage.finishOrder();

  await expect(await checkoutPage.getSuccessMsg()).toHaveText('Thank you for your order!');
});