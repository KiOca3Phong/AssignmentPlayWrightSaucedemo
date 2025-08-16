import { test as base } from '@playwright/test';
import { LoginPage } from '../Saucepage/LogInPage';

type MyFixtures = {
  login: (page: import('@playwright/test').Page) => Promise<void>;
};

export const test = base.extend<MyFixtures>({
  login: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await use(async (page) => {});
  },
});

export { expect } from '@playwright/test';