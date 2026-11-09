import { test, expect } from '@playwright/test';

test('working with multiple checkboxes', async ({ page }) => {


  
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const checkboxes = ['#checkBoxOption1' , '#checkBoxOption2' , '#checkBoxOption3']

    for (let checkbox of checkboxes) {


        await page.locator(checkbox).check()
    }
})


test('working with multiple checkboxes-no need to prepare array', async ({ page }) => {


  
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const checkboxes = await page.$$('//input[@type="checkbox"]')

    for (let checkbox of checkboxes) {


        await checkbox.check()
    }
})