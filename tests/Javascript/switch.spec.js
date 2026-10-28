import { test, expect } from '@playwright/test';



test('Based on the vegetable name, click on add to cart', async ({ page }) => {

const vegetable = "Gawar phali / Cluster Beans"

switch (vegetable){
    case 'Gawar phali / Cluster Beans': {
        await page.goto('https://www.green-kart.in/shop/category/vegetables-2')
        await page.locator(`//span[text()='Gawar phali / Cluster Beans']/../../../../../div[2]/div[2]/div/button`).click()
    }
    break;

    case 'Tomato / tamatar':{
        await page.goto('https://www.green-kart.in/shop/category/vegetables-2')
        await page.locator(`//span[text()='Tomato / tamatar']/../../../../../div[2]/div[2]/div/button`).click()
        
    }
    break;

    case 'Tensy / tinda':{
        await page.goto('https://www.green-kart.in/shop/category/vegetables-2')
        await page.locator(`//span[text()='Tensy / tinda']/../../../../../div[2]/div[2]/div/button`).click()
    }
    break;}


    });




