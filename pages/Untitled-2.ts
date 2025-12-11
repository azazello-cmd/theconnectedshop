import { test, expect } from '@fixtures/test-fixtures';
import { DEFAULT_USER } from '@helpers/env';
 
test.describe('Login flow', () => {

  test('should login with valid credentials', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.login(DEFAULT_USER.email, DEFAULT_USER.password);
    await expect(page).toHaveURL(/dashboard|home/);

  });
 
  test('should show error with invalid credentials', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login('bad@mail.com', 'wrong');
    const err = await loginPage.getError();
    expect(err).toContain('Invalid credentials');

  });

});

export const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000';
export const API_URL = process.env.API_URL ?? 'http://localhost:3000/api';
export const DEFAULT_USER = {
  email: process.env.TEST_USER_EMAIL ?? 'test@example.com',
  password: process.env.TEST_USER_PASSWORD ?? 'Password123!'
};


// .env 3000 run test @e2e 



// export const LoginSelectors = {
//     email: '#email',
//     password: '#password',
//     submit: 'button[type="submit"]',
//     error: '.error-message'
//   };
 
// export function randomEmail(prefix = 'qa') {
//     const ts = Date.now();
//     return `${prefix}+${ts}@example.com`;
//   }
   
//   export function sleep(ms: number) {
//     return new Promise((res) => setTimeout(res, ms));
//   }


/// подумати над селектами для confirm code  ????

///

// export async function waitForNetworkIdle(page: Page, timeout = 5000) {
//     await page.waitForLoadState('networkidle', { timeout });
//   }
