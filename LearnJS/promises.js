// async function add(a,b){

//     return a+b
// }
// console.log(add(5,7))

// promise {gold}

// promise {silver}

// const p = new Promise((resolve,reject) =>{
    
//     let x=3

//     if(x==2){
//         resolve("Abhishek")
//     }

//     else{
//         reject("shashank")
//     }

// })

//promise is a object it will have some result
//based on condition it will give single value
//if resolved--a value
//if reject another value

// console.log(p)

//.then
//.catch

// p.then(data => console.log(data))   //get the resolved value
// .catch(data =>console.log(data))    //get the rejected value
// console.log(p)


// async function add(a,b){

//    return(a+b)

// }

// console.log(add(5,7))

async function printramesh(){
    return("Ramesh")
}

async function printsharath(){
    return("sharath")
}

async function printrakesh(){
    return("Rakesh")
}

async function printnames(){
   printramesh().then(data => console.log(data))

   
}

console.log(printrakesh)