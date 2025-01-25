const language = ['bangla', 'english', 'hindi', {
    progLang: 'Javascript'
}]
//console.log(language.length);
// console.log(language[3]);
// language.push('punjabi');
// console.log(language);

// language.unshift('Tamil');
// console.log(language);

// language.pop();
// console.log(language);
// language.shift();
// console.log(language);

// const actors = [
//     {
//         name1: "SRK",
//         payment: 1000
//     },
//     {
//         name2: "Salman",
//         payment: 2000
//     },
//     {
//         name3: "Amir",
//         payment: 3000
//     }
// ]
// for(let i=0;i<actors.length;i++){
//     actors[i].payment = actors[i].payment -100;
// }

//console.log(actors);

// actors.forEach((actor)=>{
// actor.payment = actor.payment-100;

// })
// console.log(actors);

// for(let actor of actors){
//     actor.payment = actor.payment - 300;
// }
// console.log(actors);

//filter

// const students = [
//     {
//         name: "ram",
//         marks: 45
//     },
//     {
//         name: "sam",
//         marks: 60
//     },
//     {
//         name: "sunny",
//         marks: 75
//     },
//     {
//         name: "rahul",
//         marks: 80
//     }
// ];

// const failed = students.filter((student)=>  student.marks < 70);

// console.log(failed);
// console.log(students);

//Map
// const users = [
//     {
//        faname: "John",
//        lname: "Doe" 
//     },
//     {
//         faname: "Ratul",
//         lname: "Bera" 
//      },
//      {
//         faname: "Mani",
//         lname: "Maity" 
//      }  

// ];
// const finalName = users.map((user)=>{
//     return {
//         fname:`${user.faname} ${user.lname}`
//     }
// })
// console.log(finalName);


//reduce

// const movies = [
//     {
//         name: "Khadaan",
//         budget: 1000
//     },
//     {
//         name: "pushpa",
//         budget: 100
//     },
//     {
//         name: "bohurupi",
//         budget: 50
//     }
// ];

// let total = 0;
//  movies.forEach((movie)=>{
//     total += movie.budget;
//  })
//  console.log(total);
 
// const total = movies.reduce((acc, movie)=>{
// acc = acc + movie.budget;
// return acc;
// }, 0)
// console.log(total);


//indexOf

// const admins = [2,5,7];
// const user = {
//     name : "Bappaditya",
//     id:5
// }
// const isAdmin = admins.indexOf(user.id) > -1;
// console.log(isAdmin);

//includes

//  const admins = [2,5,7];
//  const user = {
//      name : "Bappaditya",
//      id:5
//  }
//  console.log(admins.includes(user.id));

//find
// const users = [
//     {
//         name:"xyz",
//         id:1
//     },
//     {
//         name:"abc",
//         id:2
//     },
//     {
//         name:"efg",
//         id:3
//     }
// ]
// const myUser = users.find((user)=>{ 
//     //return user.id === 2;
//     return user.name === "efg";
// })
// console.log(myUser);

//sort
// const names = ['ram', 'sam', 'jodu', 'modhu', 'ratul', 'mani', 'babai'];
// names.sort();
// console.log(names);

//splice
// const names = ['ram', 'sam', 'jodu', 'modhu', 'ratul', 'mani', 'babai'];
// names.splice(1,2);
// console.log(names);


 


