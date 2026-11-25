import { test, expect } from '@playwright/test';
import login from '../../testdata/orangeHRMlogin.json';
import buzz from '../../testdata/buzz.json';

test('verify user can post in buzz', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill(login.orangeusername);
  await page.getByRole('textbox', { name: 'Password' }).fill(login.orangepassword);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  await page.getByRole('link', { name: 'Buzz' }).click();

  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).fill(buzz.message);
  await page.getByRole('button', { name: 'Post', exact: true }).click();

  await expect(page.getByText(buzz.message, { exact: true }).first()).toBeVisible();
});


