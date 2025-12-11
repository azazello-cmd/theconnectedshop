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



// header: Header;
 
//   constructor(page) {
//     super(page);
//     this.header = new Header(page);
//   }

//   await home.open();
//   await home.header.search('Smart Lock');



//   Різниця між:
 
// locator()
 
// page.locator()
 
// page.getByRole()
 
// page.getByTestId()


data-testid попросити фронтів додати data-testid до кожного елементу сторінки data-testid !!!! 



Приклад використання: page.getByTestId('')
acra

