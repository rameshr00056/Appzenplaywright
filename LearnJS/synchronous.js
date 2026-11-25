// synchronous

// console.log("Durga")
// console.log("Bhavya")
// console.log("Raju")

// // js language is a synchronous language

// // it executes statements line by line

// // Asynchronous is not line by line

// // how to make js as asynchronous

// // By using callback function, promises we can make it asynchronous

// function printDurga(){

//     console.log("Durga")
// }

// function printBhavya(){

//     console.log("Bhavya")
// }

// function printnames(callback){

//     console.log("Raju")
//     callback()
// }

// printnames(printBhavya)

// function printnames(callback){
// console.log("Raju")
// callback()
// }


// printnames(function(){
//     console.log("Abhishek")
// })
// anonymous finction is used as callback function

// setTimeout(function, timeinmillisecond)

// console.log("Raju")
// setTimeout(() => console.log ("Durga"), 2000)
// console.log("Abhishek")

// console.log("Ramesh")

// // function(){  
    
    
// // }

// // () => console.log ("Durga")  //arrow function


// function (){
//     console.log("Rakesh")
// }

// function studentramesh(callback){

//     console.log("Ramesh")
//     callback()
// }

// function (){

//     console.log("sharath")
// }

// studentramesh(studentsharath)

// studentramesh(studentrakesh)

console.log("sharath")

setTimeout(function(){console.log("Ramesh")}, 2000)

console.log("Rakesh")

