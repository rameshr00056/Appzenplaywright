// const { pl } = require("@faker-js/faker")

// class students{

//     x=10
//     y=30
//     z=50
//     studentname1="Ramesh"
//     studentname2="Archana"
//     studentname3="Ambica"

//     add(a,b){

//         console.log(a)
//         console.log(b)
//         console.log(a+b)
//     }

//     substract(a,b){

//         console.log(a)
//         console.log(b)
//         console.log(a-b)
//     }

// }

// const playwright =  new students()
// playwright.add(5,7)
// console.log(playwright.studentname3)

// const javascript=new students()
// javascript.substract(27,9)
// console.log(javascript.x)
// console.log(javascript.y)


// const { pl } = require("@faker-js/faker")

// class students{

//     x=10
//     y=30
//     z=50
//     studentname1="Ramesh"
//     studentname2="Archana"
//     studentname3="Ambica"

//     constructor(a,b){

//         console.log("This is constructor")


//         console.log(a)
//         console.log(b)
//         console.log(a+b)
//     }

//     substract(a,b){

//         console.log(a)
//         console.log(b)
//         console.log(a-b)
//     }

// }

// const xyz=new students()

// export class login {

//     constructor(value){
//         this.page=value
//     }

//     loginwithcreds(udername, password) {   
//             await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//             await this.page.getByRole('textbox', { name: 'Username' }).click();
//             await this.page.getByRole('textbox', { name: 'Username' }).fill(data.username);
//             await this.page.getByRole('textbox', { name: 'Password' }).click();
//             await this.page.getByRole('textbox', { name: 'Password' }).fill(data.password);
//             await this.page.getByRole('button', { name: 'Login' }).click();
//             await this.page.getByRole('link', { name: 'Admin' }).click();
//             await this.page.getByText('Qualifications').click();
//             await this.page.getByRole('menuitem', { name: 'Education' }).click();
//             await this.page.getByRole('button', { name: ' Add' }).click();
//             await this.page.locator('form').getByRole('textbox').click();
//             await this.page.locator('form').getByRole('textbox').fill(educationdata.Level);
//             await this.page.getByRole('button', { name: 'Save' }).click();
//             await expect(this.page.getByRole('heading', { name: 'Education' })).toBeVisible();
       



    
// }


// //=======================================================================
// import { login } from '@playwright/test';

// test('login with valid Credentials', async ({ page }) => {

//     const xyz= new loginwithcreds(page)
//     xyz.loginwithcreds('Admin',"admin123")

// })


// class students{

//     x=10
//     y=30
//     z=50
//     studentname1="Ramesh"
//     studentname2="Archana"
//     studentname3="Ambica"

//     add(a,b){
//         this.substract(55,44)

//         console.log("This is method 1")


//         console.log(a)
//         console.log(b)
//         console.log(a+b)
//     }

//     substract(a,b){
//         console.log("This is method 2")

//         console.log(a)
//         console.log(b)
//         console.log(a-b)
        
        
//     }

// }

// const abc= new students()
// // abc.substract(5,8)

// abc.add(6,9)


class firstclass{

   static x=10
    y=20
   static z=30

    static method1(){
        console.log("this is method 1")
    }

    method2(){
        console.log("this is method 2")
    }

    static method3(){
        console.log("this is method 3")
    }

}

console.log(firstclass.x)
console.log(firstclass.z)
