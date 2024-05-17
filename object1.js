//singleton
//object literals

const mySymbol = Symbol("key1");

const jsUser = {
  name: "Bappaditya",
  "full name": "Bappaditya Sinha",
  [mySymbol]: "myKey1",
  age: 31,
  location: "Contai",
  email: "bappadityasinha.92@gmail.com",
  isLoggedin: false,
};
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySymbol]);

jsUser.email = "bsinha.uem1@gmail.com"
//console.log(jsUser["email"]);

jsUser.name = "Aditya Sinha";
//console.log(jsUser["name"])

//Object.freeze(jsUser);
jsUser.age = 32;
//console.log(jsUser["age"]);


//console.log(jsUser)

jsUser.greeting = function(){
    console.log(`Hello javascript user ${this["full name"]}`)
}
console.log(jsUser.greeting());