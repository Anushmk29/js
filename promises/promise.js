const promise1 = new Promise( function(resolve,reject){
      //do an asyn task
      //DB calls , cryptography, network
      setTimeout(()=>{
        console.log("hello");
        resolve()//connect resolve and .then
      },1000)
    })
    promise1.then(function(){
        console.log("promise consumed");
    })//onnection with resolve,it has callback



    new Promise(function (resolve,reject) {
        setTimeout(() => {
            console.log("task 2");
            resolve()
        }, 1000);
    }).then(function () {
        console.log("task 2 resolved")
    })


    const promise3 = new Promise( function(resolve,reject){
        
        setTimeout(()=>{
          resolve({username:"Anush",email:"xyz@gmail.com"})//can pass function , obj ,array etc.
        },1000)
      })

      promise3.then(function(user){
        console.log(user);
      })

      const promise4 = new Promise( function(resolve,reject){
        
        setTimeout(()=>{
            let error = false
            if (!error) {
                resolve({username:"anush",pass:"123"})
            }
          else{
            reject('ERROR:404')
          }
        },1000)
      })

     promise4.then((user)=> {
        console.log(user);
        return user.username
      }).then((user)=>{
        console.log(user)
       }).catch((error)=>{
           console.log(error);
      }).finally(()=>{
        console.log("promise resolved");
      })