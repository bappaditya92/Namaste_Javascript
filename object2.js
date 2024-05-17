//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc",
tinderUser.name = "adi",
tinderUser.isLoggedin = false
console.log(tinderUser)

const regularUser = {
    name: "Bappaditya",
    email: "bappa@gmail.com",
    fullName:{
        userfullName:{
            firstName:"Bappaditya",
            lastName:"Sinha"
        }
    }
}
console.log(regularUser.fullName.userfullName.lastName)

const obj1 = {
    1: "abc",
    2: "def",
    3: "ghi"
}

const obj2 = {
    4:"jkl",
    5:"mno",
    6:"pqr"
}
const obj3 = {
    ...obj1, ...obj2
}
//const obj3 = Object.assign({},obj1, obj2)
console.log(obj3)


const users = [
    {
        id:1,
        email:"bappaditya@gmail.com"
    }
]
//users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('islogged'));