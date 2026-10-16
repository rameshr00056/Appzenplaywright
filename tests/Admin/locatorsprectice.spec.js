import {test,expect} from '@playwright/test'
import vegetable from "../../testdata/locatorpractice/locatorpractice.json"

test('verify user can login with valid credential' , async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//div[@class="orangehrm-login-form"]/form/div/div/div[2]/input').fill('Admin')
    await page.locator('//input[@name="password"]').fill('admin123')
    await page.locator('//button[@type="submit"]').click()
    

});

test('verify user can add emplyee' , async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill("Admin")
    await page.locator('//input[@name="password"]').fill('admin123')
    await page.locator('//button[@type="submit"]').click()
    await page.locator('//a[@class="oxd-main-menu-item active"]').click()
    await page.locator('//a[@class="oxd-topbar-body-nav-tab-item"]')[1]
    await page.locator('//input[@name="firstName"]').fill('Ramesh')
    await page.locator('//input[@name="lastName"]').fill('Ramalingappa')
    await page.locator('//button[@type="submit"]').click()
})

test('verify user can add addto cart', async ({page}) => {

    await page.goto('https://www.green-kart.in/shop/category/vegetables-2')
    // const vegetable = 'Green Chilli / mirchi'
    await page.locator(`//span[text()='${vegetable.veg1}']/../../../../../div[2]/div[2]/div/button/span`).click()
    await page.locator('//button[@name="website_sale_product_configurator_continue_button"]').click()

})

