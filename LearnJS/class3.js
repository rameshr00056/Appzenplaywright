class employee{

    emp3

    emp1 = "Bhabya"
    emp2= "Bhavya"

  

    m1(){

        console.log("this is M1 method")
        console.log(this.emp1)
    }

    m2(){

        console.log("this is M2 method")
    }

    m3(){

        console.log("this is M3 method")
        this.m1()
        this.m4()
        console.log(this.emp3)
        
    }

    m4(){

        console.log("this is M4 method")
        this.m1()
    }
}

const employee1= new employee()

employee1.m4()

//this is a keyword to access variables and methods within the class we need to use wee need to use this keyword.



