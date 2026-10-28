import { test, expect } from '@playwright/test';

const employees = {
    emp1: { username: "Admin", Password: 'admin123', firstname: "Raju", lastname: "G" },
    emp2: { username: "Admin", Password: 'admin123', firstname: "shree", lastname: "charan" },
    emp3: { username: "Admin", Password: 'admin123', firstname: "kavya", lastname: "k" }
}

for (let data in employees) {
    test(`verify admin can add the job title-${data}`, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill(employees[data].username);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(employees[data].Password);
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('link', { name: 'PIM' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Add Employee' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).fill(employees[data].firstname);
        await page.getByRole('textbox', { name: 'Last Name' }).click();
        await page.getByRole('textbox', { name: 'Last Name' }).fill(employees[data].lastname);
        //   await page.getByRole('textbox').nth(4).click();
        //   await page.getByRole('textbox').nth(4).fill('0464asd');
        await page.getByRole('button', { name: 'Save' }).click();

    });
}

const credentials = {
    dataset1: { username: "Admin", password: "admin123" },
    dataset2: { username: "bjhsdbjfsd", password: "admin123" },
    dataset3: { username: "Admin", password: "jhbsdfjbsdj" },
    dataset4: { username: "dfgdsfg", password: "jhbsdfjbsdj" },
    dataset5: { username: "", password: "" }
}

for (let values in credentials) {
    test(`verify login with valid credentials-${values}`, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');      
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill(credentials[values].username);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(credentials[values].password);
        await page.getByRole('button', { name: 'Login' }).click();
        
    });





}



