// JavaScript is a dynamically typed language, 
// which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

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

const heroes=["shaktiman","naagraaj","doga"]

let myObj={
    name:"hitesh",
    age:22,
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof )