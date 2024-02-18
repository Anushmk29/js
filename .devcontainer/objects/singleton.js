//singleton object
// const tinder = new Object()
// tinder.id = "123w"
// tinder.name= "hello"
// console.log(tinder)

// const user={
//     email:"h@gmail.com",
//     fullname:{
//         userfullname:{
//             name:"anush",
//             last:"mk"
//         }
//     }
// }
// console.log(user.fullname)

const ob1 ={nam:"anush",ag:15}

const ob2 ={name:"ash",age:188}
// const obj = Object.assign({},ob1,ob2)
const ob3 = {...ob1,...ob2}
console.log(ob3);
