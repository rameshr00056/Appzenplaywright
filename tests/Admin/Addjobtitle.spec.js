import { test, expect } from '@playwright/test';

import dataz from "../../testdata/jobtitle.json"

import { faker } from '@faker-js/faker';

test('verify admin can add jobtitle', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(dataz.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(dataz.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('listitem').filter({ hasText: /^Job Titles$/ }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
 
  // const data12 = new Date()
  // const randomString = Math.random().toString(36).substring(2, 7);
  await page.getByRole('textbox').nth(1).fill(faker.person.jobTitle());
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).fill(dataz.description);
  await page.getByRole('textbox', { name: 'Add note' }).click();
  await page.getByRole('textbox', { name: 'Add note' }).fill(dataz.note);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();
  await page.close()

});
