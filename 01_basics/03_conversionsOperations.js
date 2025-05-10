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