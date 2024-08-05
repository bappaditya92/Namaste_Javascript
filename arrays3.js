// const lang = ['javascript', 'c', 'c++'];
// console.log( lang);
// console.log(lang.length);


// for(i=0;i<5;i++){
// console.log('*')
// };

// const actors = [
//     {
//         name: 'Srk',
//         payment:100
//     },
//     {
//         name: 'amir',
//         payment:110
//     },
//     {
//         name: 'salman',
//         payment: 120
//     }
// ]

// for(let i=0;i<actors.length;i++){
//     actors[i].payment = actors[i].payment - 50;
//    // console.log(actors[i])
// }



//forEach

// actors.forEach((actor)=>{
// actor.payment = actor.payment - 50;
// })

//forOff 
// for(let actor of actors){
//     actor.payment = actor.payment - 40;
//     //console.log(actor);
// }
// console.log(actors);


//filter

// const students =[
//     {
//         name:'Sourav',
//         marks: 45
//     },
//     {
//         name:'Ratul',
//         marks: 60
//     },
//     {
//         name:'Sankha',
//         marks: 55
//     }
// ];
//const failedStudent = students.filter((student)=>student.marks <= 45);
    // return student.marks <= 45;
// if (student.marks<=45) {
//     return true;
// }
// // else{
// //     return false;
// return false;
// //}
//);
//console.log(failedStudent);

// const users = [
//     {
//         fName: 'Rajib',
//         lName: 'Malik'
//     },
//     {
//         fName:'subrata',
//         lName:'Sarkar'
//     },
//     {
//         fName:'Ramiz',
//         lName:'Mehedi'
//     }
// ];
// const finalUsers = users.map((user)=>{
// return {
//     // fullName: user.fName + ' ' +user.lName
//    fullName: `${user.fName} ` + `${user.lName}`
// };
// })
// console.log(finalUsers);




//reduce
// const movies = [
//     {
//         name:'MS DHONI',
//         budget: 10000
//     },
//     {
//         name:'3 idiots',
//         budget: 1000
//     },
//     {
//         name:'Band Baaza Barat',
//         budget: 100
//     }
// ];
// let totalBudget = 0;
// movies.forEach((movie)=>{
// // totalBudget = totalBudget + movie.budget;
// totalBudget += movie.budget;
// })

// const total = movies.reduce((acc, movie)=>{
// acc += movie.budget;
// return acc;
// }, 0)
// console.log(total);


//indexOf

// const admins = [2,1,5];
// const user = {
//     name: 'xyz',
//     id: 5
// }
// const isAdmin = admins.indexOf(user.id) > -1;
// console.log(isAdmin);


//includes
// console.log(admins.includes(user.id))


// const students =[
//     {
//         name:'Sourav',
//         id:1
//     },
//     {
//         name:'Ratul',
//         id:2
//     },
//     {
//         name:'Sankha',
//         id: 3
//     }
// ];
// const myStudents = students.find((student)=>{
//     return student.id === 3;
// if(student.id === 3){
//     return true;
// }
// return false;
//  });
//console.log(myStudents);


// const myStudent = students.find((student)=>{
// return student.name === 'Ratul'
// })
// console.log(myStudent);



// const names = ['Bappa','Paulomi','Debashis','Jharna'];
// names.sort();
// console.log(names);

//splice

const names = ['Bappa','Paulomi','Debashis','Jharna'];
names.splice(0, 2);
console.log(names)