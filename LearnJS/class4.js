class employee{

    

    static emp1 = "Bhavya"   //this is static variable
    emp2= "Bhavya"       //non ststic variable
    emp3="Archana"          //non ststic variable

  

    static m1(){

        console.log("this is M1 static method")
     
    }

    m2(){

        console.log("this is M2 method")
    }

    static m3(){

        console.log("this is M3 ststic method")
       
      
        
        
    }

    m4(){

        console.log("this is M4 method")
      
    }
}

//when you have static variable and static methods to access variables and methods 
//we dont need to create object of the class
//with the help of classname we can access

// console.log (employee.emp2)
// const employeeobj=new employee()
// console.log(employeeobj.emp2)

employee.m1()