const name="hitesh"
   //String declaration
const newname=new String('suryansh')   
const repoCount=50

// console.log(name+repoCount+"value")   //old

console.log(`Hello my name is ${name} and my rep count is ${repoCount}`)


console.log(newname[0])
console.log(newname.__proto__)

// console.log(newname.length)
// console.log(newname.toUpperCase())  //does not alter the actual name
// console.log(newname.charAt(2));
// console.log(newname.indexOf('r'))

const newString=newname.substring(1,4)
console.log(newString)

const anotherString=newname.slice(-4,6)
console.log(anotherString)

const string2="    surya    "
console.log(string2)
console.log(string2.trim())  // removes unnecessary spaces

const url="https://surya.com/surya%20singh"

console.log(url.replace('%20','-'))

console.log(url.includes('surya'))
console.log(url.includes('1'))

const name2="sur-yan-sh"
console.log(name2.split('-'))


