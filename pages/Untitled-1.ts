

import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { HomePage } from '@pages/home/HomePage';
 

type Pages = {
  loginPage: LoginPage;
  homePage: HomePage;

};
 
export const test = base.extend<Pages>({
    loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  }
});
export { expect };

 