import { test, expect } from '@playwright/test';

test('verify sort low to high is working or not', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');

    await page.getByRole('textbox', {
        Name: "Search for Products, Brands and More"
    }).fill('iphones')
    await page.keyboard.press('Enter');
    await page.locator('//div[text()="Price -- Low to High"]').click();
    const rupees = await page.locator('//div[@class="hZ3P6w DeU9vF"]').allTextContents()

    const prices = rupees.map(price => Number(price.replace('₹', '').replaceAll(',', '').trim()))

    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sortedPrices);


    console.log(sortedPrices)




});