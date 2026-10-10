import { test, expect } from '@playwright/test';

// import data from "../../testdata/HRMlogin.json";

import { faker } from '@faker-js/faker';


test('verify user can post in buzz', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('link', { name: 'Buzz' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).fill(faker.person.jobDescriptor());
  await page.getByRole('button', { name: 'Post', exact: true }).click();
//   await expect(page.getByText(faker.person.jobDescriptor())).toBeVisible();
});