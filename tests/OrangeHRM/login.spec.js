import { test, expect } from '@playwright/test';
import login from "../../testdata/orangeHRMlogin.json"


import registername from "../../testdata/addemployee.json"

import message from "../../testdata/buzz.json"


test('login as valid credentials', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(login.orangeusername);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(login.orangepassword);
  await page.getByRole('button', { Name: "Login" }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
});


test('user can add employee', async ({page}) => {
    
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(login.orangeusername);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(login.orangepassword);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(registername.Firstnamegive);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(registername.Lastnamegive);
  
  await page.getByRole('button', { name: 'Save' }).click();
})



test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(login.orangeusername);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(login.orangepassword);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByTitle('Help')).toBeVisible();
  await page.getByRole('link', { name: 'Buzz' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).fill(message.message);
  await page.getByRole('button', { name: 'Post', exact: true }).click();
  await expect(page.getByText('Buzz Newsfeed')).toBeVisible();
});

test('admin can add job titles', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(login.orangeusername);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(login.orangepassword);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job').click();
  const randomString = Math.random().toString(36).substring(2, 7);
  await page.waitForTimeout(5000)

  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  
  await page.getByRole('textbox').nth(1).fill(randomString);
  
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();
});

test('user can add job category', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(login.orangeusername);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(login.orangepassword);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Job Categories' }).click();
  await expect(page.getByRole('heading', { name: 'Job Categories' })).toBeVisible();

  const category = page.getByRole('cell', { name: 'Z grade', exact: true });
  if (await category.count() === 0) {
    await page.getByRole('button', { name: /Add/ }).click();
    await page.locator('form').getByRole('textbox').fill('Z grade');
    await page.getByRole('button', { name: 'Save' }).click();
    const savedOrAlreadyExists = page.getByText('Successfully Saved')
      .or(page.getByText('Already exists'));
    await expect(savedOrAlreadyExists).toBeVisible();
    if (await page.getByText('Already exists').isVisible()) {
      await page.getByRole('button', { name: 'Cancel' }).click();
    }
  }

  await expect(category).toBeVisible();
});