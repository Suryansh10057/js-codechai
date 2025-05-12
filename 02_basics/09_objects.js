//Singleton- made by constructor
// Method:::    Object.create

//object literals

const jsuser={
    name:"suryansh",
    "full name":"Surya Don",
    age:18,
    location:"Lucknow",
    email:"surya@gmail.com",
    isLoggedin:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(jsuser.email)

//another good way

console.log(jsuser["email"])
console.log(jsuser["full name"])  //only this way in such a case
