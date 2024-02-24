

const mySum = Symbol("key1")

const user={
name:"anush",
[mySum]:"njaskh",
email:"anush@gmail.com",
age:20
}

// console.log(user)
// console.log(user["name"])
// console.log(user[mySum])
// console.log(typeof user[mySum] )
// Object.freeze(user)

// user.name = "anu"
// console.log(user)

user.greeting = function(){
    console.log("hello")
}
user.greeting2 = function(){
    console.log(`hello ${name}`)
}
// console.log(user.greeting)//[Function (anonymous)] here we got the reference of the function
// console.log(user.greeting())
console.log(user.greeting2())