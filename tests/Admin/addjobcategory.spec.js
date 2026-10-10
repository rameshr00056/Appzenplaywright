import {test, expect} from '@playwright/test';

test('add job category', async({page}) =>{
    await page.goto('/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('Admin', { exact: true }).first().click();
    await page.getByText('Job', { exact: true }).click();
    await page.getByRole('menuitem', { name: 'Job Categories' }).click();
    // await page.getByRole('menuitem', { name: 'Job Categories' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByRole('textbox').nth(1).fill('Ramesh');
    await page.getByRole('button', { name: 'Save' }).click();









});