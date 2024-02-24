//this makes current context/values
const user ={
    username:"anush",
    price:99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }


}
// console.log(user['welcomeMessage'])
// user.welcomeMessage()
// user.username = "s"

// user.welcomeMessage()//the username get manipulated to s

//the global object in browser is windo object so when we use this in browser it refers to window object
// console.log(this)//here empty curly brackets will be logged



// function chai()
// {
//     let user = "anush"
//     console.log(this.user)//undefined
//     //because this can be used for objects and not for functions in this way
// }

// chai()


// const chai = function(){
//     let user="anush"
//     console.log(this.user);//undefined
// }
// chai() 


//arrow function ()=>{}
// const chai = () => {
//         let user="anush"
//         console.log(this.user);//undefined
//         console.log(this)//{}
//     }

//     chai()

// const addTwo =(num1,num2)=>{
//     return num1+num2
// } 


//implicit return
// const addTwo =(num1,num2)=>  num1+num2
const addTwo =(num1,num2)=> (num1+num2)
//if we add paranthesis here wwe do not have to give return 

console.log(addTwo(3,4))

// const arr = [1,2,4,6,7,8]

// arr.forEach(function() {})
// arr.forEach(() =>{})
// arr.forEach(() =>())