///////////////// We can define key as well as value by our own custom

//Singleton- made by constructor
// Method:::    Object.create

//object literals

const mySym=Symbol("key1")
const jsuser={
    name:"suryansh",  // this key stores as string behind the scene
    "full name":"Surya Don",
    age:18,
    Sym:"mykey",
    [mySym]:"mykey1",  // to make it symbol use square bracket ow it will act as string
    location:"Lucknow",
    email:"surya@gmail.com",
    isLoggedin:false,
    lastLoginDays:["Monday","Saturday"]
}
/*
console.log(jsuser.email)
/////another good way
console.log(jsuser["email"])
console.log(jsuser["full name"])  //only this way in such a case

console.log(jsuser.Sym)
console.log(typeof jsuser.Sym )
console.log(jsuser[mySym])
console.log(typeof jsuser[mySym])

jsuser.email="change1@gmail.com"
console.log(jsuser)
// to avoid any changes on object
Object.freeze(jsuser.age)  //or freeze(jsuser)
jsuser.email="change2@gmail.com"
console.log(jsuser)


jsuser.greeting=function(){
    console.log("Hello JS users")
}

jsuser.greeting()
//  console.log(jsuser.greeting())   /// prints the greet as well as underfined for the another log
console.log(jsuser.greeting)   // tell about an anonymous function

jsuser.greeting2=function(){
    // console.log(`Hello JS user: ${jsuser.name}`)
    console.log(`Hello JS user: ${this.name}`)
}
// console.log()
jsuser.greeting2()

*/



/////////////////// Part 2 //////////////////////
///////////Singleton- made by constructor

/*
// const user=new Object()  ///singleton object
const user={}            /// non-singleton
// console.log(user)

user.id="123abc"
user.name="Sammy"
user.isLoggedin=false

// console.log(user)

const reguser={
    email:"user@gmail.com",
    fullname:{
        userfullname:{
            firstname:"surya",
            lastname:"don"
        },
        designation:{
           d1:"APM",
           d2:"RetainIQ"
        }
    }
}

console.log(reguser)
console.log(reguser.fullname)
console.log(reguser.fullname.designation)
console.log(reguser.fullname.userfullname.firstname)

console.log(reguser.full?.userfullname.firstname) // prints only when available else undefined



//////Merging objects

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//merging ways

// const obj3={obj1,obj2}    // way1-make object inside object not spread in one
// const obj3=Object.assign({},obj1,obj2)   // way2- {} is the output in which the objects will merges
// Object.assign(obj1,obj2);console.log(obj1)  //if we not add {} then the final object spreads in obj1

const obj3={...obj1,...obj2}   // way3- spread method, easy

console.log(obj3) 

const users=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    }
]

console.log(users[1].email)

console.log(user)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

console.log(user.hasOwnProperty('isLoggedin'))
console.log(user.hasOwnProperty('isLogged'))

*/


//////////Object destructure

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

/////// course.courseInstructor  -- printing ways

const{courseInstructor:instructor}=course

// console.log(courseInstructor)
console.log(instructor)



//////////////////////////////API /////////////////
// APi values comes in json.....javascript object notation

// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

/// json as arrays

// [
//     {},
//     {},
//     {}
// ]


/////////////use json formatter to see clearly
