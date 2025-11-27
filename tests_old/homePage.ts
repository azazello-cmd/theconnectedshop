import { test, Page, expect } from '@playwright/test';


test.describe ('Check elements on page', () => {

test.beforeEach(async ({ page }) => {
    await page.goto ('/')
    await expect(page).toHaveURL('/')
    await expect(page).toHaveTitle('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office')
    })

test('Check logo', async ({page}) => {
    const logo = page.locator('a.header__heading-link');
    const logosrc = page.locator('img.header__heading-logo')
    
    await expect(logo).toHaveAttribute('href', '/')
    await expect(logosrc).toHaveAttribute('width', '180')
    await expect(logosrc).toHaveAttribute('height','90.0')

})

test('Check search', async ({ page }) => {
    const search = page.locator('#Search-In-Inline');
    await expect(search).toBeVisible();
    await expect(search).toHaveAttribute('Search', 'Search')
    
    //await search.fill('Smart Door Lock Slim');

  });

test('Check icon profile', async ({ page }) => {
    const profileIcon = page.locator('svg.icon-account').nth(1)
    await expect(profileIcon).toBeVisible()

  });

test('Cart icon is visible', async ({ page }) => {
    const cartIcon = page.locator('svg.icon-cart');
    await expect(cartIcon).toBeVisible();
    
  });  

})

