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