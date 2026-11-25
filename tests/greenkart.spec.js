import { test, expect } from '@playwright/test';

import dresses from '../testdata/vegetable.json'


test('add to cart', async ({ page }) => {
  await page.goto('https://register.rediff.com/register/register.php?FormName=user_details&');

  await page.getByRole('textbox',{Name: "Enter Captcha"}).last().fill('2xyz')
});



test('orangehrm', async ({ page }) => {


  await page.goto('https://trello.com/');

  // await page.getByPlaceholder('Username').fill("Admin")
  // await page.getByRole('textbox', { name: 'Password' }).fill("admin123");
  // await page.locator('//button[@type="submit"]').click()
  // await expect(page.getByAltText('client brand banner')).toBeVisible()

});


test('add to cart in mens shpop', async ({ page }) => {

  var randomnumber = Math.floor(Math.random() * 13);

  await page.goto('https://shop.qaautomationlabs.com/');
  await page.locator('//input[@type="email"]').fill('demo@demo.com')
  await page.locator('//input[@type="password"]').fill('demo')
  await page.locator('//button[text()="Login"]').click()
  await page.locator('(//a[@class="btn btn-primary"])[1]').click()
  await page.locator('//button[@class="btn btn-primary addToCart"]').nth(randomnumber).click()

});



