import { test, Page, expect } from '@playwright/test';


export class HomePage {

    readonly page: Page;

    constructor (page: Page) {
        this.page = page;
    }
    async openHomePage() {
        
        await this.page.goto('/')
        await expect (this.page).toHaveURL('/')
        await expect (this.page).toHaveTitle('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office')
        
    }

}