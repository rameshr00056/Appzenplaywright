

class student {

    student1 = "shashank"
    student2 = "Sreecharan"

    // constructor() {

    //     console.log("this is constructor")
    // }

    constructor(a, b) {

        console.log(a)
        console.log(b)
        console.log(a + b)

    }

    method2() {

        console.log("this is method 2")
    }



}

const b39pw = new student(34, "Raju")

const b40pw = new student(23, 989)

//constructor is simply a method

//we use constructor keyword for constructor method

//constructor will always invoked without calling it

//In JS language we can have only one constructor for a class
//multiple constructors are not allowed

//by default empty constructor will be there


//if constructor required some params,  then we need to pass those params at the time of creating object of the class

//new classname (params to your constructor)

//cypress u dont need a constructor

//If your working in playwright definitely u need to implement constructor concept

exports class loginpage {

    constructor(value) {

        this.page = value
    }


    loginwithcreds(username, password) {
        await this.page.locator(xpath).fill(username)
        await this.page.locator(xpath).fill(password)

        await this.page.locator(xpathforloginbutton).click()
    }
}

// const login = new loginpage()
// login.loginwithcreds("Admin", "admin123")


//===========================================================================
import { loginpage } from "path"

test(loginwith valid CredentialsContainer, async({ page })) => {


    const login = new loginpage()
    login.loginwithcreds("Admin", "admin123")


}