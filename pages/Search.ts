import { Locator, Page, expect } from '@playwright/test';

export class Search {

    readonly page: Page;
    readonly search: Locator;
    readonly productCart: Locator;

    constructor (page: Page) {
        
        this.page = page;
        this.search = page.locator('#Search-In-Inline');
        this.productCart = page.locator('.predictive-search__item__title, .card__heading, .font-heading-bold').first();
    }
    
    async checkSearch() {
        await expect(this.search).toHaveAttribute('placeholder', 'Search')
    }

    async fillElement(value: string) {
        await expect(this.search).toHaveAttribute('placeholder', 'Search');
        await this.search.fill(value, { force: true });
        await expect(this.search).toHaveValue(value);
    }

    async fillInputAndPressEnter(value: string) {
        await this.fillElement(value);
        await expect(this.search).toHaveValue(value);
        await this.page.keyboard.press('Enter');
    }

    async checkProductCart(value: string) {
        await this.fillElement(value);
        await expect(this.search).toHaveValue(value);
        await expect(this.productCart).toBeVisible();
    }

}