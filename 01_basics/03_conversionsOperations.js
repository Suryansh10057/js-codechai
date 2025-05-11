let score1 = "33"
let score2="33abc"
let score3="abcd"
let score4=null
let score5=undefined
console.log(typeof score1);
console.log(typeof(score1));

let valueInNum1=Number(score1)
let valueInNum2=Number(score2)
let valueInNum3=Number(score3)
let valueInNum4=Number(score4)
let valueInNum5=Number(score5)
           //// console.table([typeof(valueInNum1),typeof(valueInNum1),typeof(valueInNum2),typeof(valueInNum3),typeof(valueInNum4),typeof(valueInNum5)])
           //// all datatypes will converted to number but the value....?
// console.table([valueInNum1,valueInNum2,valueInNum3,valueInNum4,valueInNum5])

// console.table([Boolean(""),Boolean("abc")])

let num_to_str=String(33)

/// **************** Operations *****************************//////
/*
let value=3
let negval=-value
console.log(negval)

let str1= "hel"
let str2="lo"
let str3=str1+str2
console.log(str3)

console.log("1"+2)  // 12
console.log(1+"2")  // 12
console.log("1"+"2") //12
console.log("1"+2+2) //122
console.log(1+2+"2") //32

*/
console.log(3+4*5%3)

console.log(true)
console.log(+true) // =1
// console.log(true+)    //=>error

console.log(+"")

let num1,num2,num3
num1=num2=num3=2

let counter=100;
console.log(counter++)
console.log(++counter)



//***********Comparision ************//
console.log("2">1)
console.log("02">1)  //however typescript doesnot allow to compare dissimilar datatype
console.log(null>0)
console.log(null==0)
console.log(null>=0) //true as comparison converts null to a number(0)

console.table([undefined>0,undefined==0,undefined>=0])

/////////Strict check -- check values as well as datatype
console.log("2"===2)