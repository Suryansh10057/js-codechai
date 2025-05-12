/*
()-parenthese
[]-brackets
{}-braces
*/

/*
const arr=[0,1,2,3,true,"hitesh"]  

// can be resizable, and mix
// Are not associative, elemnts cannot be accessed using string
// i.e  arr["one"] --wrong ,,,, arr[0]---right
// Arrays of js creates shallow copy not deep copy i.e changes will occur in refrence array as well

const arr2=new Array(1,2,3,"hero")
console.log(arr2[0])

//////////////Array methods

arr2.push(4)
console.log(arr2)
arr2.pop()

arr2.unshift(0)   // add zero at begining O(n) time consuming
console.log(arr2)
arr2.shift()
console.log(arr2)

console.log(arr2.includes(9))
console.log(arr2.indexOf(9))

const newArr=arr2.join()  //converts it into string
console.log(newArr)


////// Slice , Splice

const myArray= new Array(0,1,2,3,4,5)
console.log("A", myArray)
const mya1=myArray.slice(1,3)
console.log(mya1)
console.log("B ", myArray)

const mya2=myArray.splice(1,3)  //changes the arrya removes elemnts from index 1 to 3
console.log("C ", myArray)
console.log(mya2)

*/



////////////////////// Array 2 //////////////////////

const marvel=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
// marvel.push(dc)

// console.log(marvel)
// console.log(marvel[3][1])

console.log(marvel.concat(dc))   // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const combine=marvel.concat(dc)
console.log(combine)


//Another prefered method using spread

const all_heroes=[...marvel, ...dc]
console.log(all_heroes)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
//// to flat the entire array

console.log(another_array.flat(Infinity))

console.log(Array.isArray("surya"))

//to convert
console.log(Array.from("surya"))

console.log(Array.from({name:"hitesh"})) // interesting,it either take key or value

// to make array from elements

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
