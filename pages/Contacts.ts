import { Locator, Page, expect } from '@playwright/test';
import { fillElement, clickElement } from '../utils/globalFuction';

export class Contacts {

    readonly page: Page;
    readonly contactLink: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneNumberInput: Locator;
    readonly commentInput: Locator;
    readonly sendButton: Locator;
    readonly alertIcon: Locator;
    readonly messageAlert: Locator;

    constructor (page: Page) {
        
        this.page = page;
        this.contactLink = page.getByRole('link', { name: 'Contact', exact: true });
        this.nameInput = page.locator('#ContactForm-name');
        this.emailInput = page.locator('#ContactForm-email');
        this.phoneNumberInput = page.locator('#ContactForm-phone');
        this.commentInput = page.locator('#ContactForm-body');
        this.sendButton = page.getByRole('button', { name: 'Send' });
        this.alertIcon = page.locator('svg.icon-success');
        this.messageAlert = page.locator('.alert--success');
    }

    async checkContactLink() {
        // Перевіряємо посилання (може бути кілька, тому використовуємо перше)
        await expect(this.contactLink).toHaveAttribute('href', '/pages/contact-us');
        await expect(this.contactLink).toHaveText(/Contact/i);
    }

    async clickContactLink() {
        await clickElement(this.contactLink.nth(0), 'Contact Link');
        await expect(this.page).toHaveURL('/pages/contact-us');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async fillContactForm(name: string, email: string, phoneNumber: string, comment: string) {
        await fillElement(this.nameInput, name, 'Name Input');
        await expect(this.nameInput).toHaveValue(name);

        await fillElement(this.emailInput, email, 'Email Input');
        await expect(this.emailInput).toHaveValue(email);

        await fillElement(this.phoneNumberInput, phoneNumber, 'Phone Number Input');
        await expect(this.phoneNumberInput).toHaveValue(phoneNumber);

        await fillElement(this.commentInput, comment, 'Comment Input');
        await expect(this.commentInput).toHaveValue(comment);
    }

    async submitContactForm() {
        await clickElement(this.sendButton, 'Send Button');
    }

    async checkSuccessAlert() {
        await expect(this.alertIcon).toHaveAttribute('viewBox', '0 0 13 13');
    }

    async checkSuccessMessage() {
        await expect(this.messageAlert).toBeVisible();
    }

}

