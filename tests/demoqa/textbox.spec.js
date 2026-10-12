import {test, expect} from '@playwright/test';

test ('verify user can add the textbox', async ({page}) => {
    await page. goto('https://demoqa.com/text-box')
    await page.getByRole('textbox', { name: 'Full Name' }).fill('Ramesh')
    await page.getByRole('textbox', { name: 'name@example.com' }).fill('abc@gmail.com')
    await page.getByRole('textbox', { name: 'Current Address' }).fill('Banglore')
    await page.getByRole('textbox').nth(3).fill('Tumkur')
    await page.getByRole('button', { name: 'Submit' }).click()




})