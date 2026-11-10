//encapulation

//Binding the data between the methods

//we will have one setter method-set the data

//we will have one getter =get the data

//In a simple words - creating the dependency between the methods

class employee{

    x=20
    y=45


    employeedetails(ename,eid,eplace){
        this.employeename=ename

        this.employeeid=eid

        this.employeeplace=eplace
    }


    displayempdetails(){

        console.log(this.employeename,this.employeeid,this.employeeplace)
        
    }

    calculate(){
        
        console.log(this.x+this.y)
    }




}

const emp=new employee()
emp.employeedetails("Ramesh","13648494","Banglore")
emp.displayempdetails()
emp.calculate()
