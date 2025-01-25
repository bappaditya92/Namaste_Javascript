//let const
//var productName = 'laptop';
//code poluted

// var age = 18;
// if(age>=18){
    //let driving = true;
    //var driving = true;
    
    
// }
// console.log(driving);

//let and const is block scope but var is function


// function register(){
//     var userName = 'adi';
//     var password = 'secret';
    
// }

// console.log(userName);


// const product = 'Laptop';
// const product = 'Mobile';
// console.log(product);


// var product = 'Laptop';
// const product = 'Mobile';
// console.log(product);

// const addition = (a, b)=> console.log (a+b);
//   addition(5,9);

// console.log(this)

// const shop = {
//    purcahse: ()=>{
//     console.log(this);
//    }
// }
// shop.purcahse();
 

// const myButton = document.querySelector('#myButton');

// const shop = {
//     price: 100,
//     buy:function(){
//         //const self = this;

//         myButton.addEventListener('click', ()=>{
//             console.log('I spent' + this.price);    
//         });
//     },
// };
// shop.buy();


//template literals

// const fName = 'Bappaditya';
// const lName = 'Sinha';

// console.log(`your full name is ${fName} ${lName}`);
// const fname = 'Bappaditya';
// const message = `Hello ${fname}
// How are you guys....
// `;
// console.log(message);



//enhanced object literals
//computed property keys
//method defination shorthand

// const keyName = 'name'
// const product = {
//    buy(){
//     console.log('bought');
    
//    }
// }
// // console.log(product);
// product.buy();

//property shorthand
// const accessToken = 'abshjdbfjkb';
// const refreshToken = 'jfafbkjbakjbf';
// const user = {
//     accessToken,
//     refreshToken
// };
// console.log(user);



//destructuring

// const user = {
//     name: 'john doe',
//     age: 40
// }
// const {name: firstName, age} = user;
// console.log(firstName);
// console.log(age);

// const data = ['Bappaditya', 30, 'Male', 'Engineer'];
// const [name, age, gender] = data;
// console.log(name);
// console.log(age);
// console.log(gender);


//default parameters

// const register=(name, password, image='test.png')=>{
// console.log(name, password, image);
// };
// register('Bappaditya', 'secret');




//spread operator ... it is heavily used in Object and array
// const languages = ['c','c++', 'Javascript', 'java'];
// const newlanguages = [ 'Swift', ...languages];
// console.log(newlanguages);

// const language = {
//     fronEnd: 'React',
//     backEnd: 'Node',
//     database: 'MongoDb'
// };
// const newlanguages = {...language, fronEnd:'Angualr', serverless: 'AWS'};
// console.log(newlanguages);


//Rest ... it is heavily used in funtion 

// const addItems =(...items)=>{
//     console.log(
//         items
//     ); 
// }
// addItems(2,5,6,8,7,5,8,5)




//for of loop
//array, string, object, set, map

// const numbers = [2,4,5,8,9];
// for(const num of numbers){
//     console.log(num);
    
// }

// const language  = 'Javascript';

// for(const lang of language){
//     console.log(lang);
    
// }


// const person = {
//     name:'Bappaditya',
//     city: 'Kolkata',
//     brand: 'poor'
// }

// for(const [key, value] of Object.entries(person)){
//     console.log(key, value);
    
// }


//promises

// function login(cb){
//     setTimeout(()=>{
// console.log('login');
// cb();

//     }, 0);
// }
// login(()=>{

//     //async
    
//     console.log('redirecting');
// });


// function login(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('login...');
//             reject();
//         }, 0)

//     })
   
// }
// login().then(()=>{
//     console.log('redirecting...');
    
// }).catch(err=>{
//     console.log('error...');
    
// })


//find

// const users = [{name:'Bappaditya'}, {name:'Rakesh'}];

// const user = users.find((user)=>{
//    return user.name === 'Bappaditya';
// })
// console.log(user);


//findIndex

// const users = [{name:'Bappaditya'}, {name:'Rakesh'}];

// const user = users.findIndex((user)=>{
//    return user.name === 'Rakesh';
// })
// console.log(user);


//set
//unique items


//const items = new Set();
// items.add(5);
// items.add(10);
// items.add(5);
// items.add(10);
// console.log(items);
// const numbers = [1,2,3,4,5,6,4,5,6];

// const uniqueNumbers = new Set(numbers);
// // console.log(uniqueNumbers);
// console.log(Array.from(uniqueNumbers))



//map(Hashmaps)

// const urls = new Map();

// urls.set('developent', 'dev.example.com');
// urls.set('production', 'prod.example.com');
// urls.set('UAT','test.example.com');

//console.log(urls.get('UAT'));

// const urlObj = {
//     developent: 'dev.example.com',
//     production: 'prod.example.com'

// }
// console.log(urlObj.developent);

// //order problem


// const urls = new Map();

// urls.set('production', 'prod.example.com');
// urls.set('UAT', 'test.example.com');
// urls.set('Developement', 'dev.example.com');
// console.log(urls.get('production'));


// const urls = new Map();
// urls.set('developent', 'dev.example.com');
// urls.set('production', 'prod.example.com');
// urls.set('UAT','test.example.com');


// for(const [key, value] of urls){
//     console.log(key, value);
    
// }




//classes

// function Person(name){
//     this.name = name;
// }

// const bappaditya = new Person('Bappaditya');
// bappaditya.name = 'Aditya'
// const john = new Person('John');
// console.log(bappaditya);
// console.log(john);



// class Person{
//     name;

//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log('Hello Ji kaise ho saare!!!!!!!!');
        
//     }
// }

// class greatPerson extends Person{
//     attribute = 'cool';
//     greet(){
//         console.log('Good evening');
        
//     }
// }


// const bappaditya = new Person('Bappa');
// const john = new greatPerson('doe');
// john.name = 'Johny';
// console.log(john.greet());

// bappaditya.name = 'Aditya';
// console.log(bappaditya);

// console.log(bappaditya.greet());















 