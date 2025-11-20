import { test, Page, expect } from '@playwright/test';


test.describe ('Check elements on page', () => {

test.beforeEach(async ({ page }) => {
    await page.goto ('/')
    await expect(page).toHaveURL('/')
    await expect(page).toHaveTitle('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office')
    const search = page.locator('#Search-In-Inline');
    await expect(search).toBeVisible();
    await expect(search).toHaveAttribute('placeholder', 'Search')
    })

test('Check and fill text in input search', async ({ page }) => {
    const search = page.locator('#Search-In-Inline');
    const textVal = 'Smart Door Lock Slim'
    await search.fill(textVal)
    await expect(search).toHaveValue(textVal)
    await page.keyboard.press('Enter');

  });

test('Check product cart in list', async ({ page }) => {
    const search = page.locator('#Search-In-Inline');
    const productCart = page.locator('predictive-search__item__title card__heading font-heading-bold')
    const textVal = 'Smart Door Lock Slim'
    await search.fill(textVal)
    await expect(search).toHaveValue(textVal)
    await expect(productCart).toHaveValue(textVal)
    //await page.locator('productCart').click
    

  });

})

