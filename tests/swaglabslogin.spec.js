import { test, expect } from '@playwright/test';

import logindata from "../testdata/swaglabslogin.json"




test('verify login with valid username is standard_user and password is secret_sauce', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(logindata.username);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(logindata.password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
});


test('verify login with valid username and invalid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(logindata.username);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(logindata['wrong password']);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});


test('verify login with invalid username and valid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(logindata['wrong username']);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(logindata['wrong password']);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('verify login with valid credentintals which user has been locked out', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(logindata.lockeduutusername);
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(logindata.password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('verify login with valid username is problem_user and password is secret_sauce ', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('problem_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
});

test('verify login with valid username is performance_glitch_user and password is secret_sauce', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('performance_glitch_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
});


test('verify login with valid username is error_user and password is secret_sauce', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').dblclick();
  await page.locator('[data-test="username"]').fill('error_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();
  await expect(page.locator('[data-test="footer-copy"]')).toBeVisible();
});

test('verify login with valid username is visual_user and password is secret_sauce', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('visual_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
});

test('verify user can be navigated to the Twitter link in home page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="social-x"]')).toBeVisible();
});

test('verify user can be navigated to the facebook link in home page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('[data-test="social-facebook"]').click();
  const page1 = await page1Promise;
  await expect(page1.locator('.x5yr21d.x4l50q0')).toBeVisible();
});


test('verify user can be navigated to the linkedin link in home page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('[data-test="social-linkedin"]').click();
  const page1 = await page1Promise;
  await expect(page1.getByText('Sign in to see who you already know at Sauce Labs Email or phone Password Show')).toBeVisible();
  await expect(page1.locator('div').filter({ hasText: 'Sign in to see who you' }).nth(2)).toBeVisible();
});




test('', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});