import { test, Page, expect } from '@playwright/test';


test.describe ('Check elements on page', () => {

test.beforeEach(async ({ page }) => {
    await page.goto ('/')
    await expect(page).toHaveURL('/')
    await expect(page).toHaveTitle('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office')
    const search = page.locator('#Search-In-Inline');
    await expect(search).toBeVisible();
    await expect(search).toHaveAttribute('placeholder', 'Search')
    })

test('Check and fill text in input search', async ({ page }) => {
    const search = page.locator('#Search-In-Inline');
    const textVal = 'Smart Door Lock Slim'
    await search.fill(textVal)
    await expect(search).toHaveValue(textVal)
    await page.keyboard.press('Enter');

  });

test('Check product cart in list', async ({ page }) => {
    const search = page.locator('#Search-In-Inline');
    const productCart = page.locator('predictive-search__item__title card__heading font-heading-bold')
    const textVal = 'Smart Door Lock Slim'
    await search.fill(textVal)
    await expect(search).toHaveValue(textVal)
    await expect(productCart).toHaveValue(textVal)
    //await page.locator('productCart').click
    

  });

  // Покрити позитивними та негативними тестати contacts - окретий тест (файл)
  // створити акк на гітхабі

  /*
  function showElements(selector) {

    const elements = document.querySelectorAll(selector);

    if (elements.length === 0) {

        console.log('Елементи не знайдені');

        return;

    }

    console.log(`Знайдено ${elements.length} елементів:`);

    document.querySelectorAll('.element-highlight-label').forEach(el => el.remove());

    elements.forEach((el, index) => {

        const rect = el.getBoundingClientRect();

        const label = document.createElement('div');

        label.className = 'element-highlight-label';

        label.innerHTML = `
<div style="

                position: absolute;

                background: #ff4444;

                color: white;

                padding: 4px 8px;

                border-radius: 8px;

                font-size: 12px;

                font-weight: bold;

                z-index: 10000;

                white-space: nowrap;

                transform: translateY(-100%);

            ">

                Елемент ${index + 1}
<div style="font-size: 10px; opacity: 0.8;">

                    ${Math.round(rect.width)}×${Math.round(rect.height)}px
</div>
</div>

        `;

        const labelInner = label.firstElementChild;

        labelInner.style.top = `${rect.top + window.scrollY - 10}px`;

        labelInner.style.left = `${rect.left + window.scrollX}px`;

        document.body.appendChild(label);

        el.style.cssText += `

            box-shadow: 0 0 0 3px rgba(255, 68, 68, 0.8) !important;

            border-radius: 4px !important;

            position: relative !important;

        `;

        console.log(`Елемент ${index + 1}:`, {

            позиція: `x:${Math.round(rect.left)}, y:${Math.round(rect.top)}`,

            розміри: `${Math.round(rect.width)}×${Math.round(rect.height)}`,

            елемент: el

        });

    });

}

showElements('svg.icon-account');
 

  /*


})

