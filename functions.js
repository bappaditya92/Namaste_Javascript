// function login(username, password){
// console.log(`${username} is succesfully loged in`)
// }
// login('adity');
// login('john');

// function upperCase (str){
//     return str.toUpperCase();

// }
// let result = upperCase('bappaditya sinha');
// console.log(result);


//dafault parameter 
// function calculateArea(width, height){
//     height = height === undefined?1: height;
//    const area = width * height;
//    return area;
// }
// const area = calculateArea(40);
// console.log(area);


//variable scope

// function download(){
//     //download logic
//     const fileName = 'xyz.pdf';
//    // console.log(fileName);
    
// }
// download();
// console.log(fileName);


//function expression & function declaration 


//function declaration
// function login(){

// }

//expression 
// const login = function(){ //annonymous function 
// console.log('logged in');

// }
// login();



//callback 
// function formatText(text, fromatCb){
// return typeof fromatCb === 'function' ? fromatCb(text) : text.toUpperCase();
// }
// const result = formatText('javascript', function(text){
//     return text.charAt(0).toUpperCase() + text.slice(1);

// });
// console.log(result);


//IIFE(immediately invoked function expression)

// (function setUp (){  // we can also remove function name, that will work as well
//     console.log('Set up done!');   
// })();


//arrow function

// const login = ()=> {
//     console.log('login successfully....');
    
// }
// login();

//good practices

//Naming 
//showUser, getUser

//one function---> one action 
//function name should be descriptive








