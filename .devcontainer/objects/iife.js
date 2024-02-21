//immediately invoked function expression
//(function )(executioncall)
//a function that can be executed immediately
//and sometimes the global scope's pollution hinders the code so to nullify it we use iify
(function chai()
{
    //named iffe
    console.log("chai")
})(); //here ;  helps to stop the context and executes both the iife
//()( )

((name)=>
{ //unamed iife
    console.log(`chai aur ${name}`)
})('anush')
