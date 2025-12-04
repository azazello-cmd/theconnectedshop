import { test, Page, expect, Locator } from '@playwright/test';


export async function clickElement(locator: Locator, elementName: string) {
    try {
    console.log(`CLICK: ${elementName}`);
    await locator.click();
    console.log(`CLICK SUCCESS: ${elementName}`);
    } catch (error) {
    console.error(`CLICK FAILED: ${elementName}`);
    throw new Error(`Cannot click '${elementName}': ${error}`);
    }
    }

export async function fillElement(locator: Locator, value: string, name: string) {
        try {
          console.log(`FILL: ${name} -> "${value}"`);
          await locator.fill(value);
          const actual = await locator.inputValue();
          console.log(`FILL CHECK: ${name} VALUE = "${actual}"`);
        } catch (error) {
          throw new Error(`FILL FAILED: ${name}, VALUE="${value}"\n${error}`);
      
        }
      }

// Search methods
export async function checkSearchAttribute(locator: Locator, attributeName: string, expectedValue: string) {
    try {
        console.log(`CHECK SEARCH ATTRIBUTE: ${attributeName} = "${expectedValue}"`);
        await expect(locator).toHaveAttribute(attributeName, expectedValue);
        console.log(`CHECK SEARCH ATTRIBUTE SUCCESS: ${attributeName}`);
    } catch (error) {
        throw new Error(`CHECK SEARCH ATTRIBUTE FAILED: ${attributeName}="${expectedValue}"\n${error}`);
    }
}

export async function fillSearchElement(locator: Locator, value: string, elementName: string) {
    try {
        console.log(`FILL SEARCH: ${elementName} -> "${value}"`);
        await expect(locator).toHaveAttribute('placeholder', 'Search');
        await locator.fill(value, { force: true });
        await expect(locator).toHaveValue(value);
        console.log(`FILL SEARCH SUCCESS: ${elementName}`);
    } catch (error) {
        throw new Error(`FILL SEARCH FAILED: ${elementName}, VALUE="${value}"\n${error}`);
    }
}

export async function fillSearchAndPressEnter(locator: Locator, page: Page, value: string, elementName: string) {
    try {
        console.log(`FILL SEARCH AND PRESS ENTER: ${elementName} -> "${value}"`);
        await fillSearchElement(locator, value, elementName);
        await expect(locator).toHaveValue(value);
        await page.keyboard.press('Enter');
        console.log(`FILL SEARCH AND PRESS ENTER SUCCESS: ${elementName}`);
    } catch (error) {
        throw new Error(`FILL SEARCH AND PRESS ENTER FAILED: ${elementName}, VALUE="${value}"\n${error}`);
    }
}

export async function checkProductCart(locator: Locator, productCartLocator: Locator, value: string, elementName: string) {
    try {
        console.log(`CHECK PRODUCT CART: ${elementName} -> "${value}"`);
        await fillSearchElement(locator, value, elementName);
        await expect(locator).toHaveValue(value);
        await expect(productCartLocator).toBeVisible();
        console.log(`CHECK PRODUCT CART SUCCESS: ${elementName}`);
    } catch (error) {
        throw new Error(`CHECK PRODUCT CART FAILED: ${elementName}, VALUE="${value}"\n${error}`);
    }
}

// Header methods
export async function checkLogoLink(locator: Locator, expectedHref: string) {
    try {
        console.log(`CHECK LOGO LINK: href="${expectedHref}"`);
        await expect(locator).toBeVisible();
        await expect(locator).toHaveAttribute('href', expectedHref);
        console.log(`CHECK LOGO LINK SUCCESS`);
    } catch (error) {
        throw new Error(`CHECK LOGO LINK FAILED: href="${expectedHref}"\n${error}`);
    }
}

export async function checkLogoImg(locator: Locator, expectedWidth: string, expectedHeight: string) {
    try {
        console.log(`CHECK LOGO IMG: width="${expectedWidth}", height="${expectedHeight}"`);
        await expect(locator).toHaveAttribute('width', expectedWidth);
        await expect(locator).toHaveAttribute('height', expectedHeight);
        console.log(`CHECK LOGO IMG SUCCESS`);
    } catch (error) {
        throw new Error(`CHECK LOGO IMG FAILED: width="${expectedWidth}", height="${expectedHeight}"\n${error}`);
    }
}

export async function checkProfileIcon(locator: Locator) {
    try {
        console.log(`CHECK PROFILE ICON`);
        await expect(locator).toBeVisible();
        console.log(`CHECK PROFILE ICON SUCCESS`);
    } catch (error) {
        throw new Error(`CHECK PROFILE ICON FAILED\n${error}`);
    }
}

export async function checkCartIcon(locator: Locator) {
    try {
        console.log(`CHECK CART ICON`);
        await expect(locator).toBeVisible();
        console.log(`CHECK CART ICON SUCCESS`);
    } catch (error) {
        throw new Error(`CHECK CART ICON FAILED\n${error}`);
    }
}

// Contacts methods
export async function checkContactLink(locator: Locator, expectedHref: string) {
    try {
        console.log(`CHECK CONTACT LINK: href="${expectedHref}"`);
        await expect(locator).toHaveAttribute('href', expectedHref);
        await expect(locator).toHaveText(/Contact/i);
        console.log(`CHECK CONTACT LINK SUCCESS`);
    } catch (error) {
        throw new Error(`CHECK CONTACT LINK FAILED: href="${expectedHref}"\n${error}`);
    }
}

export async function clickContactLinkAndWait(locator: Locator, page: Page, expectedUrl: string, elementName: string) {
    try {
        console.log(`CLICK CONTACT LINK AND WAIT: ${elementName}`);
        await clickElement(locator, elementName);
        await expect(page).toHaveURL(expectedUrl);
        await page.waitForLoadState('domcontentloaded');
        console.log(`CLICK CONTACT LINK AND WAIT SUCCESS: ${elementName}`);
    } catch (error) {
        throw new Error(`CLICK CONTACT LINK AND WAIT FAILED: ${elementName}\n${error}`);
    }
}

export async function fillContactFormFields(
    nameInput: Locator, 
    emailInput: Locator, 
    phoneNumberInput: Locator, 
    commentInput: Locator,
    name: string, 
    email: string, 
    phoneNumber: string, 
    comment: string
) {
    try {
        console.log(`FILL CONTACT FORM: name="${name}", email="${email}"`);
        await fillElement(nameInput, name, 'Name Input');
        await expect(nameInput).toHaveValue(name);

        await fillElement(emailInput, email, 'Email Input');
        await expect(emailInput).toHaveValue(email);

        await fillElement(phoneNumberInput, phoneNumber, 'Phone Number Input');
        await expect(phoneNumberInput).toHaveValue(phoneNumber);

        await fillElement(commentInput, comment, 'Comment Input');
        await expect(commentInput).toHaveValue(comment);
        console.log(`FILL CONTACT FORM SUCCESS`);
    } catch (error) {
        throw new Error(`FILL CONTACT FORM FAILED\n${error}`);
    }
}

export async function checkSuccessAlert(locator: Locator, expectedViewBox: string) {
    try {
        console.log(`CHECK SUCCESS ALERT: viewBox="${expectedViewBox}"`);
        await expect(locator).toHaveAttribute('viewBox', expectedViewBox);
        console.log(`CHECK SUCCESS ALERT SUCCESS`);
    } catch (error) {
        throw new Error(`CHECK SUCCESS ALERT FAILED: viewBox="${expectedViewBox}"\n${error}`);
    }
}

export async function checkSuccessMessage(locator: Locator) {
    try {
        console.log(`CHECK SUCCESS MESSAGE`);
        await expect(locator).toBeVisible();
        console.log(`CHECK SUCCESS MESSAGE SUCCESS`);
    } catch (error) {
        throw new Error(`CHECK SUCCESS MESSAGE FAILED\n${error}`);
    }
}

// HomePage methods
export async function openHomePage(page: Page, expectedUrl: string, expectedTitle: string) {
    try {
        console.log(`OPEN HOME PAGE: url="${expectedUrl}"`);
        await page.goto(expectedUrl);
        await expect(page).toHaveURL(expectedUrl);
        await expect(page).toHaveTitle(expectedTitle);
        console.log(`OPEN HOME PAGE SUCCESS`);
    } catch (error) {
        throw new Error(`OPEN HOME PAGE FAILED: url="${expectedUrl}"\n${error}`);
    }
}

