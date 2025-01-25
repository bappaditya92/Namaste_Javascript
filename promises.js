//callbacks

/*
1.Register
2.send welcome email
3.login
4.get user data
5.display user data
*/

// function waitForThreeSecond(){
//     let ms = 3000 + new Date().getTime();
//     while(new Date() < ms){}
// }
function register(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Register successfully'); 
           //return reject('error occur while registering');
            
            resolve('success');
            

        },1000)
      
    });
   
    
}
function sendEmail(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //return resolve();
            
            //return reject('error while sending email');
            console.log('send Email complete');
            resolve();
            
        },1000)
    })
   
    
}
function login(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('login done');
            resolve();
            
        },1000)
    })
    
    
}
function getUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('got User Data');
            resolve();
            
        },1000)
    })
   
    
}
function displayUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('display User Data');
            resolve();
            
        },1000)
    })
   
    
}

//callback hell or nesting function
// register(()=>{
//     sendEmail(()=>{
//         login(()=>{
//             getUserData(()=>{
//                 displayUserData();
//             });
//         });  
//     });
   
// });

// register().
// then(sendEmail).
// then(login).
// then(getUserData).                     //method chaining
// then(displayUserData)
// .catch((err)=>{
// console.log('error', err);

// })


//async await
async function authenticate(){
    try{
    const message = await register();
                    await sendEmail();
                    await login();
                    await getUserData();
                    await displayUserData();
                    console.log( message);
                    
    }
    catch(err){
        console.log("error", err);
        throw new Error();
        
    }
    
}
authenticate().then(()=>{
    console.log('All set!');
    
})
.catch((err)=>{
    console.log("error", err);
    
})
console.log('other application work!');
