import {test,expect} from '@playwright/test'

test('user can add employee', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@placeholder="Username"]').fill('Admin')
    await page.locator('//input[@type="password"]').fill('admin123')
    await page.getByRole('button', { name: 'Login' }).click();

})

test ('click on gallery if it visible', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/disappearing_elements')
    if(await page.locator('//a[@href="/gallery/"]').isVisible()){
        await page.locator('//a[@href="/gallery/"]').click()
    }
      else {
        await page.locator('//a[@href="/portfolio/"]').click()
      }

})

test('Based on the browser click on url', async ({page, browserName}) => {
    if (browserName=="chromium"){
        await page.goto('https://www.flipkart.com/')
    }
    else if(browserName=="firefox"){
        await page.goto('https://www.meesho.com/')
    }
    else if(browserName=="webkit"){
        await page.goto("https://www.amazon.in/")
    }
    else{
        console.log("invalid browser")
    }

})

// test('Based on the vegetablename click on add to cart', async ({page}) => {
//     await page. goto('https://www.green-kart.in/')
//     if(await page.locator('//span[text()="Gawar phali / Cluster Beans"]'))



// })


