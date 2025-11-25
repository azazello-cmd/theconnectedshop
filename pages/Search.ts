import { Locator, Page, expect } from '@playwright/test';

export class Header {

    readonly page: Page;
    readonly search: Locator;

    constructor (page: Page) {
        
        this.page = page;
        this.search = page.locator('#Search-In-Inline');
    }
    async checklogoLink() {
        await this.page.goto('/')
        await expect(this.page).toHaveURL('/')
        await expect(this.page).toHaveTitle('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office')
        await expect(this.search).toBeVisible();
        await expect(this.search).toHaveAttribute('placeholder', 'Search')
        

    }


}