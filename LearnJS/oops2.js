//Inheritance

//1. single inheritance
//2. Multi level inheritance
//3. Multiple inheritance
//4. Hirarchical inheritanec
//5.Hybrid

class A {

    m1() {

        console.log("this is M1 method")

    }

    m2() {

        console.log("this is M2 method")
    }

    m3() {

        console.log("this is M3 method")


    }



}

class B  {
    m4() {

        console.log("this is M4 method")

    }

    m5() {

        console.log("this is M5 method")
    }

    m6() {

        console.log("this is M6 method")


    }

}

class C extends A {
    m7() {

        console.log("this is M7 method")

    }

    m8() {

        console.log("this is M8 method")
    }

    m9() {

        console.log("this is M9 method")


    }



}


const obj = new C()
obj.m3()
obj.m7()