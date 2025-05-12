/*
const score = 400 // by default it is number but
// we can defined it explicitily

console.log(score)
const balance = new Number(100)

console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))   //to convert upto 2 decimal places

const otherNumber=123.8966
console.table([otherNumber.toPrecision(3),otherNumber.toPrecision(4),otherNumber.toPrecision(5)])

const hundreds=1000000000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

console.table([Number.MAX_VALUE,Number.MIN_VALUE,Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER])

*/


///*********************** MATHS ********/

console.log(Math)   //run in console to get the complete attributes
console.log(Math.abs(-4))

console.table([Math.round(5.5),Math.round(4.5),Math.ceil(4.1),Math.floor(4.9)])

console.log(Math.random())  // gives float number between 0 and 1
console.log((Math.random()*10)+1)  // give number b/w 1 to 10

// for desired range 
const min=10
const max=20

console.log(Math.floor((Math.random()*(max-min+1)))+min)