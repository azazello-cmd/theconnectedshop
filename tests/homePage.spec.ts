import { test, Page, expect } from '@playwright/test';
import { Header } from '../pages/Header';
import { HomePage } from '../pages/HomePage';
import { Search } from '../pages/Search';
import * as allure from "allure-js-commons";


test.describe('checkHomepage', () => {

    let homePage:HomePage
    let header:Header
    let search:Search
    const textVal = 'Smart Door Lock'

    test.beforeEach(async ({ page }) => {
      
      homePage=new HomePage(page)
      header = new Header(page)
      search = new Search(page)

      await homePage.openHomePage()
      });
    
      test('Check logo', async () => {
        //allure.tag('Smoke')
        await allure.severity("critical"),
       
        await header.checklogoImg()
        await header.checklogoLink()

    })
    test('Check search', async ({ page }) => {
        
      await allure.severity("critical"),
      await search.checkSearch()
      await search.fillImput(textVal)
    
      });



})