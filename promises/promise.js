// const promise1 = new Promise( function(resolve,reject){
//       //do an asyn task
//       //DB calls , cryptography, network
//       setTimeout(()=>{
//         console.log("hello");
//         resolve()//connect resolve and .then
//       },1000)
//     })
//     promise1.then(function(){
//         console.log("promise consumed");
//     })//onnection with resolve,it has callback



//     new Promise(function (resolve,reject) {
//         setTimeout(() => {
//             console.log("task 2");
//             resolve()
//         }, 1000);
//     }).then(function () {
//         console.log("task 2 resolved")
//     })


//     const promise3 = new Promise( function(resolve,reject){
        
//         setTimeout(()=>{
//           resolve({username:"Anush",email:"xyz@gmail.com"})//can pass function , obj ,array etc.
//         },1000)
//       })

//       promise3.then(function(user){
//         console.log(user);
//       })

//       const promise4 = new Promise( function(resolve,reject){
        
//         setTimeout(()=>{
//             let error = false
//             if (!error) {
//                 resolve({username:"anush",pass:"123"})
//             }
//           else{
//             reject('ERROR:404')
//           }
//         },1000)
//       })

//      promise4.then((user)=> {
//         console.log(user);
//         return user.username
//       }).then((user)=>{
//         console.log(user)
//        }).catch((error)=>{
//            console.log(error);
//       }).finally(()=>{
//         console.log("promise resolved");
//       })

//       const promise5 = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//           let error = true
//           if (!error) {
//               resolve({username:"javaScript",pass:"123"})
//           }
//         else{
//           reject('ERROR:Js went wrong')
//         }
//       },1000)
//       })
// //it is not necessary to use .then and .catch can also use async await
//       async function consumePromise5(){
//         // const reponse = await promise5
//         // console.log(reponse)
//         try {
//           const reponse = await promise5
//           console.log(reponse)
//         } catch (error) {
//           console.log(error);
//         }
//       }

//       consumePromise5()


    //   async  function getAllUsers(){
    //     try{
    //    const response= await fetch('https://jsonplaceholder.typicode.com/users')
    //   //  const data = response.json() //converting the data takes time so we will use await to get the printed values
    //    const data = await response.json()
    //    console.log(data)
    //   } catch (error){
    //     console.log("error");
    //   }

    // }
    //   getAllUsers()

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.json()
    }).then((respose2)=>{
        console.log(respose2);
    })
    .catch((error)=>{
        console.log(error);
    })