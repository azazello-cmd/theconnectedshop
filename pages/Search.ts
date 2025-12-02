import { Locator, Page, expect } from '@playwright/test';
import { text } from 'stream/consumers';
import { fillElement } from '../utils/globalFuction';

export class Search {

    readonly page: Page;
    readonly search: Locator;

    constructor (page: Page) {
        
        this.page = page;
        this.search = page.locator('#Search-In-Inline');
    }
    async checkSearch() {

        //await expect(this.search).toBeVisible();
        await expect(this.search).toHaveAttribute('placeholder', 'Search')
        

    }


    async fillImput(value: string) {

        await fillElement(this.search, value, 'SearchImput') 
        
    }


}