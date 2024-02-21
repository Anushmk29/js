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

const chai = () => {
        let user="anush"
        console.log(this.user);//undefined
        console.log(this)//{}
    }

    chai()