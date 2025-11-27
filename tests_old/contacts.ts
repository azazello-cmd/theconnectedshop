import { test, Page, expect } from '@playwright/test';

test.describe ('Check elements on page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');
    await expect(page).toHaveTitle('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office');
  });

test('Check contact', async ({ page }) => {
    const contactLink = page.getByRole('link', { name: 'Contact', exact: true });
    await expect(contactLink).toHaveAttribute('href', '/pages/contact-us');
    await expect(contactLink).toHaveText(/Contact/i); 
});
  

// test('Check url', async ({ page }) => {
//     const contactLink = page.getByRole('link', { name: 'Contact', exact: true }).nth(0)
//     await contactLink.click();
//     await expect(page).toHaveURL('/pages/contact-us')
// });

test('Fill input', async ({ page }) => {

    const contactLink = page.getByRole('link', { name: 'Contact', exact: true }).nth(0)
    await contactLink.click();
    await expect(page).toHaveURL('/pages/contact-us')


    await page.waitForLoadState('domcontentloaded'); 
    const name = page.locator('#ContactForm-name');
    const email = page.locator('#ContactForm-email');
    const phoneNumber = page.locator('#ContactForm-phone');
    const comment = page.locator('#ContactForm-body');
    const sendButton = page.getByRole('button', { name: 'Send' });
    const alert = page.locator('svg.icon-success');
    const messageAlert = page.locator('.alert--success');

    // Тестові дані
    const testName = 'Ivan';
    const testEmail = 'test@gmail.com';
    const testPhoneNumber = '380983728899';
    const testCommentText = 'Тут вводиться тестовий текст і нічого більше';

    //Введення даних

    await name.fill(testName);
    await expect(name).toHaveValue(testName);

    await email.fill(testEmail);
    await expect(email).toHaveValue(testEmail);

    await phoneNumber.fill(testPhoneNumber);
    await expect(phoneNumber).toHaveValue(testPhoneNumber);

    await comment.fill(testCommentText);
    await expect(comment).toHaveValue(testCommentText);

    await sendButton.click();

    await expect(alert).toHaveAttribute('viewBox', '0 0 13 13');
    //await expect(messageAlert).toHaveText("Thanks for contacting us. We'll get back to you as soon as possible.");
});
});
