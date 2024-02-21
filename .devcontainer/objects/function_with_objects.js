// when we  dont know how many parameters to be add 




// function  calculateCartPrice(num1)
// {
//  return num1
// }

// console.log(calculateCartPrice(2))
//use rest operator for more inputs 
//...nums1 rest operator all the inputs gets or is stored in a bundle form or array

// function  calculateCartPrice(val1,val2,...num1)//[ 400, 20000 ]
// {
//  return num1
// }
// console.log(calculateCartPrice(200,300,400,20000))
//[ 200, 300, 400 ]
// const user ={
//     name:"anush",
//     price:199
//     //if the name of key changes o/p will be undefined but can solve that using typecheck or using if conditions
// }
// function handleObjectfunction (any1) {
//     console.log(`username is ${any1.name} and price is `);
// }
// handleObjectfunction (user)
//can add direct object
// handleObjectfunction ({
//     name:"san"
// })


//can do this fofr array also
// const myNewArray = [200,300,400,100]
// function arrayout(any){
//     return any[1]
// }
// console.log(arrayout(myNewArray))


// global and local scope
if (true) {
    let a=10
const b =20
var c =30
console.log(a)//block scope
}

// console.log(a)
// console.log(b)
console.log(c)