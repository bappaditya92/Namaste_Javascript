const myArr =[0,1,0,2,5,6,9,7,5,75,89,663,4];
const myHeros = ["srk", "Akki", "Hrittick"];
//const myArr2 = new Array(1,3,5,8);
//console.log(myArr[10]);

//Arrays method

// myArr.push(20);
// console.log(myArr);

// myArr.pop();
// console.log(myArr)


// myArr.unshift(2);
// console.log(myArr);

// myArr.shift()
// console.log(myArr);


//console.log(myArr.includes(10));
//console.log(myArr.indexOf(5));

// const newArr = myArr.join()

// console.log(typeof(newArr));
// console.log(typeof(myArr));

console.log("A", myArr);
 const myNewArray = myArr.slice(1,3);
 console.log(myNewArray);
 console.log("B", myArr);

const myarray2 = myArr.splice(1,3)
console.log("C", myArr)
console.log(myarray2)