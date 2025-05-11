// JavaScript is a dynamically typed language, 
// which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

// const { captureOwnerStack } = require("react");

/*
//// Primitive: 
passed by value not by reference a copy make the edit
7 types

String,number,boolean,null,undefined,symbol,bigint

////////Reference (Non primitive)
Array, Objects, Functions

*/

const score=100
const scoreValue=100.3  // both are number datatype

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId)

const biginteger=1234567890n  // represents bigint


////////Reference (Non primitive)
// Array, Objects, Functions
/*
const heroes=["shaktiman","naagraaj","doga"]

let myObj={
    name:"hitesh",
    age:22,
}

const myFunction=function(){
    console.log("Hello World");
}

console.table([typeof myFunction,typeof id,typeof myObj,typeof heroes])  // object function 

*/
//******************** MEMORY ***********************//
// Stack(Primitve)
// Heap(Non-primitive)


let name="surya"
let anothername=name
anothername="chai"

console.log(name)
console.log(anothername)


// Heap

let user1={
    email:"user@google.com",
    upi:"user@ybl"
}

let user2=user1
user2.email="surya@google.com"

console.log(user1.email)
console.log(user2.email)