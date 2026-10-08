import { test, expect } from '@playwright/test';

import data from '../../testdata/HRMlogin.json';

import { faker } from '@faker-js/faker';

test('verify user can add skills', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Qualifications').click();
  await page.getByRole('listitem').filter({ hasText: /^Skills$/ }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('form input').click();
  await page.locator('form input').fill(faker.person.firstName());
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).fill(faker.person.jobTitle());
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible();
});