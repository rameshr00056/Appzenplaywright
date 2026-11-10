class A{

    x=24
    y=35

    printname(){
        console.log("Durga")
    }

    add(num1,num2){
        console.log(num1)
        console.log(num2)
        console.log(num1+num2)
    }
}

A.prototype.z=67  //prototyped variable

A.prototype.multiply=function(n1,n2){      //classname.prototype.functionname=functionkeyword(parameter, paramether)
    console.log(n1*2)
    


}


const obj1=new A()



obj1.multiply(5,2)