// polymorphism

// its a extended concept of Inheritance

//Method overriding - supported
//Method overloading - supported

class A{

    printname(){
        console.log("Durga")
    }

    add(num1,num2){
        console.log(num1)
        console.log(num2)
        console.log(num1+num2)
    }
}

class B extends A{

    printname(){
        console.log("Abhishek")
    }

      add(num1,num2,num3){
        console.log(num1)
        console.log(num2)
        console.log(num3)
        console.log(num1+num2+num3)
    }
}

const obj=new A()
obj.printname()
obj.add(5,8,9,9)  //method overriding