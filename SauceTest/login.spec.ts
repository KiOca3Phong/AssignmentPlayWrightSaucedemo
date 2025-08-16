import { test, expect } from '@playwright/test';
import { LoginPage } from '../Saucepage/LogInPage';

test('TC001 - Login thành công', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory.html/);
});

 test('TC002 - Login với user hợp lệ: standard_user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('TC003 - Login với user hợp lệ: problem_user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('problem_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('TC004 - Login với user hợp lệ: performance_glitch_user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('performance_glitch_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('TC005 - Login với user hợp lệ: error_user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('error_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('TC006 - Login với user hợp lệ: visual_user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('visual_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('TC007 - Login với user bị khóa: locked_out_user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(page.locator('[data-test="error"]'))
      .toContainText('Sorry, this user has been locked out.');
  });

  test('TC008 - Login với mật khẩu sai', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'wrong_pass');
    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username and password do not match');
  });

  test('TC009 - Login với username trống', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', 'secret_sauce');
    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username is required');
  });

test('TC010 - Login với password trống', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', '');
  await expect(page.locator('[data-test="error"]'))
    .toContainText('Password is required');
});