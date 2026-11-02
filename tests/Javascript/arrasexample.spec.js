import { test, expect } from '@playwright/test';
// import login from "../../testdata/orangeHRMlogin.json"


// import registername from "../../testdata/addemployee.json"

// import message from "../../testdata/buzz.json"


test('login as valid credentials', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { Name: "Login" }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()

  const menuitem =await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]/span').textContent()
  console.log(menuitem)

  const menuitems=await page.locator('//a[@class="oxd-main-menu-item"]').allTextContents()
  console.log(menuitems)
//   console.log(typeof(menuitem))
await expect(menuitems.length).toBe(11)

await expect(menuitems.includes('Recruitment')).toBe(True)


});

test('verify add to cart', async ({ page }) => {
  await page.goto("https://www.green-kart.in/shop/category/vegetables-2");
  const vegetablename=await page.locator('//a[@class="text-decoration-none"]/span').allTextContents()
  console.log(vegetablename)
    // console.log(typeof(vegetablename))
});



