//premitive==== number, string, null, undefined, boolean
//reference=== [] {} ()

//aisi koi v value jisko copy karne par real copy nahi hota balki us main value ka reference pass hojata usko reference value bolta hai,,, aur jiska real copy ho jata hai toh usko premitive type value bolta hai


// var a = 10;
// var b = a;

// b = b+2;
// console.log(a);
// console.log(b);

var a  =[1,2,3,4,5];
var b = a;
a.pop()
console.log(b);