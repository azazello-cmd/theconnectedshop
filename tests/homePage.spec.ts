import { test, Page, expect } from '@playwright/test';
import { Header } from '../pages/Header';
import { HomePage } from '../pages/HomePage';
import { Search } from '../pages/Search';
import { Contacts } from '../pages/Contacts';
import * as allure from "allure-js-commons";


test.describe('checkHomepage', () => {

    let homePage:HomePage
    let header:Header
    let search:Search
    let contacts:Contacts
    const textVal = 'Smart Door Lock'
    const textValFull = 'Smart Door Lock Slim'

    test.beforeEach(async ({ page }) => {
      
      homePage=new HomePage(page)
      header = new Header(page)
      search = new Search(page)
      contacts = new Contacts(page)

      await homePage.openHomePage()
      });
    
    test('Check logo', async () => {
        await allure.severity("critical"),
       
        await header.checklogoImg()
        await header.checklogoLink()
    })

    test('Check search', async ({ page }) => {
        await allure.severity("critical"),
        await search.checkSearch()
        await search.fillElement(textVal)
    })

    test('Check icon profile', async () => {
        await allure.severity("critical"),
        await header.checkProfileIcon()
    })

    test('Cart icon is visible', async () => {
        await allure.severity("critical"),
        await header.checkCartIcon()
    })

    test('Check and fill text in input search', async ({ page }) => {
        await allure.severity("critical"),
        await search.fillInputAndPressEnter(textValFull)
    })

    test('Check product cart in list', async ({ page }) => {
        await allure.severity("critical"),
        await search.checkProductCart(textValFull)
    })

    test('Check contact', async () => {
        await allure.severity("critical"),
        await contacts.checkContactLink()
    })

    test('Fill contact form', async () => {
        await allure.severity("critical"),
        
        await contacts.clickContactLink()
        
        const testName = 'Ivan';
        const testEmail = 'test@gmail.com';
        const testPhoneNumber = '380983728899';
        const testCommentText = 'Тут вводиться тестовий текст і нічого більше';

        await contacts.fillContactForm(testName, testEmail, testPhoneNumber, testCommentText)
        await contacts.submitContactForm()
        await contacts.checkSuccessAlert()
    })

})