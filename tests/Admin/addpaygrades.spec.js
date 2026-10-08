import { test, expect } from '@playwright/test';

import data from "../../testdata/HRMlogin.json";

import { faker } from '@faker-js/faker';

test('verify user can add pay grades', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('form').getByRole('textbox').click();
  await page.locator('form').getByRole('textbox').fill(faker.person.jobType());
  await page.getByRole('button', { name: 'Save' }).click();
//   await expect(page.getByRole('heading', { name: 'Edit Pay Grade' })).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
});


