import { test } from '@playwright/test';



test('login as valid credentialsdsfdsf', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const usernamearr = await page.locator('//p[@class="oxd-text oxd-text--p"][1]').textContent()
    console.log(usernamearr)
    const usernametext = usernamearr.split(" ")
    const username = usernametext[usernametext.length - 1]

    console.log(username)

    const passwordarr = await page.locator('//p[@class="oxd-text oxd-text--p"][2]').textContent()
    const passwordtext = passwordarr.split(" ")
    const password = passwordtext[passwordtext.length - 1]



    console.log(password)


    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { Name: "Login" }).click();

});