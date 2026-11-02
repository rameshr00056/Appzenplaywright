import { test, expect } from '@playwright/test';

const employees = [
    { firstname: "Raju", lastname: "G" },
    { firstname: "Durga", lastname: "Prasad" },
    { firstname: "Kavya", lastname: "k" },
    { firstname: "Bhavya", lastname: "M" },

]

for (let emp of employees) {

    console.log(emp.firstname)

    test(`verify admin can add the employee -${emp.firstname}`, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('link', { name: 'PIM' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Add Employee' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).fill(emp.firstname);
        await page.getByRole('textbox', { name: 'Last Name' }).click();
        await page.getByRole('textbox', { name: 'Last Name' }).fill(emp.lastname);

        await page.getByRole('button', { name: 'Save' }).click();



    });

}


employees.forEach(emp => {

    console.log(emp.firstname)

    test(`verify admin can add the employee - ${emp.firstname}`, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('link', { name: 'PIM' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Add Employee' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).fill(emp.firstname);
        await page.getByRole('textbox', { name: 'Last Name' }).click();
        await page.getByRole('textbox', { name: 'Last Name' }).fill(emp.lastname);

        await page.getByRole('button', { name: 'Save' }).click();

    })



})



