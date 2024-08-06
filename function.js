// function login(userName, password){

//     //console.log(`${userName} is logged in successfully`);
//     console.log(`${password} is the password`);
// }
// login('Amit', 'secret');
// login('Sourav');


// function upperCase(str){
// //console.log(str.toUpperCase());
// return str.toUpperCase();
// }
// const result = upperCase('javascript');
// console.log(result);

// function calculateArea(width, height){
//     //return width * height;
//     const area = width * height;
//     return area;
    
// }
// const area = calculateArea(15,12);
// console.log(area);

 //default parameter

// function calculateArea(width, height = 1){
//     //return width * height;
//     const area = width * height;
//     return area;
    
// }
// const area = calculateArea(15);
// console.log(area);


// function calculateArea(width, height){
//   height = height === undefined? 1:height;
//     const area = height * width;
//     return area;
// }
// const area = calculateArea(40);
// console.log(area);



//variable scope

// function download(){
//     //download logic

//     const fileName = 'xyz.pdf';
//     console.log(fileName); 
// }
// download();

//function expression and function declaration 

//declaration
// function login(){

// }

//expression
// const login = function(){ //annonymous function 
// console.log('logged in');
// }
// login();


//callback

// function formatText(text, format){
// return typeof format === 'function' ? format(text): text.toUpperCase();
// }
// const result = formatText('Hello', function(text){
// return text.charAt(0).toUpperCase() + text.slice(1);
// });
// console.log(result);

//IIFE
// (function setUp(){
//     console.log("Setup done"); //we can also remove the function name, that will work as well 
// })();


//arrow function

// const login = (userName, password) => {
//     console.log(`${userName} is the logeedin person`);
//     console.log(`${password} is the logeedin person password`);
// }
// login('Bappaditya', 'secret key');


// const sum = (num1, num2) =>{
//     return num1 + num2;
// }
// const result = sum(5,6);
// console.log(result);

// const sum = (num1, num2) => num1 + num2;
// const result = sum(5,6);
// console.log(result);


//naming
SharedWorker, get, calc