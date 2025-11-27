import { Locator, Page, expect } from '@playwright/test';

export class Header {

    readonly page: Page;
    readonly logoLink: Locator;
    readonly logoImg: Locator;
    readonly profileIcon: Locator;
    readonly cartIcon: Locator;

    constructor (page: Page) {
        
        this.page = page;
        this.logoLink = page.locator('a.header__heading-link');
        this.logoImg = page.locator('img.header__heading-logo')
        this.profileIcon = page.locator('svg.icon-account').nth(0)
        this.cartIcon = page.locator('svg.icon-cart');

    }
    async checklogoLink() {
        
        await expect(this.logoLink).toBeVisible()
        await expect(this.logoLink).toHaveAttribute('href','/')
        

    }

    async checklogoImg() {
        
        await expect(this.logoImg).toHaveAttribute('width', '180')
        await expect(this.logoImg).toHaveAttribute('height','90.0')
  
        

    }

}