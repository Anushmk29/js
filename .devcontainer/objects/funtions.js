// function loginUserMessage(username){

//     if (username === undefined)// or (if(!username)) 
//     {
//         console.log("please enter username")
//         return //to not allow he below code to execute
//     }
//       return `${username} just logged in`//string interpolation
// }

// loginUserMessage("anush")
//we said to return value and did not store or consoled it so no value printed
// console.log(loginUserMessage())

// for default value in functins
function loginUserMessage(username= "anush"){
//if no input then anush would be printed
    if (username === undefined)// or (if(!username)) 
    {
        console.log("please enter username")
        return //to not allow he below code to execute
    }
      return `${username} just logged in`//string interpolation
}

console.log(loginUserMessage("sam"))