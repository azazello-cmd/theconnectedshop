import { Locator, Page, expect } from '@playwright/test';

export class Header {

    readonly page: Page;
    readonly logoLink: Locator;
    readonly logoImg: Locator;
    readonly profileIcon: Locator;
    readonly cartIcon: Locator;

    constructor (page: Page) {
        
        this.page = page;
        this.logoLink = page.locator('img.header__heading-logo');
        this.logoImg = page.locator('img.header__heading-logo')
        this.profileIcon = page.locator('svg.icon-account').nth(1)
        this.cartIcon = page.locator('svg.icon-cart');


    }
    async checklogoLink() {

        await this.page.goto('/')
        await expect(this.page).toHaveURL('/')
        await expect(this.page).toHaveTitle('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office')
        await expect(this.logoImg).toHaveAttribute('width', '180')
        await expect(this.logoImg).toHaveAttribute('height','90.0')
        await expect(this.profileIcon).toBeVisible()
        await expect(this.cartIcon).toBeVisible();
        

    }

}