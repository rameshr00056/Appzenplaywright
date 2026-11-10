// Basic concepts in order to understand OOPS

// Class 
//methods
//constructor
//this
//static
// function add(a,b){

//     console.log(a)
//     console.log(b)
//     console.log(a+b)
// }

// add(2,3)


// class classname{

//     v1
//     v2
//     v3
//     method1
//     method2
//     method3
// }

class calculator {

    x=20
    y=40
    student="Sree Charan"
    Trainer="Raju"

    add(a, b) {
        console.log(a)
        console.log(b)
        console.log(a + b)
    }

    substract(a, b) {
        console.log(a)
        console.log(b)
        console.log(a - b)
    }


    multiply(a, b) {
        console.log(a)
        console.log(b)
        console.log(a * b)
    }

    division(a, b) {
        console.log(a)
        console.log(b)
        console.log(a / b)
    }
}

// export calculator
const cal1=new calculator()    //creation of instance of the class / creation of object of the class

//here OBJECT name is cal1

cal1.add(2,8)

cal1.substract(30,10)
console.log(cal1.Trainer)     //"Raju"

//this concept is a gamechanger in our automation

const cal2=new calculator()
cal2.add(4,8)
console.log(cal2.Trainer)
//===================================================


// class is physical declaration will not execute FileSystemDirectoryHandle

// class can have variables and methods

//In order to access variables and methods we need to create instance /object of the class

//with the help of class object we can access variables and methods

//you can create n number of objec of the same class




