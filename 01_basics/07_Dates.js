// Temporal.Now.instant()    afterwards


//Dates --typeof==Object

let myDate=new Date()  
console.log(myDate)    //2025-05-12T16:01:42.299Z
console.log(myDate.toString())  //Mon May 12 2025 16:01:42 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())  //Mon May 12 2025
console.log(myDate.toLocaleString())  //5/12/2025, 4:07:18 PM
console.log(typeof myDate)

let myCreatedDate1=new Date(2023,0,23)
console.log(myCreatedDate1.toLocaleString())

let myCreatedDate2=new Date(2023,0,23,5,3)
console.log(myCreatedDate2.toLocaleString())

let myTimeStamp=Date.now()  // time in msec from 1st Jan 1970
console.log(myTimeStamp)

// To compare two time stamp

console.log(myCreatedDate1.getTime())

// to get time in seconds

console.log(Math.floor(Date.now()/1000))

let newDate=new Date()

console.table([newDate.toLocaleString(),newDate.getDate(),newDate.getMonth()+1,newDate.getFullYear()])

newDate.toLocaleDateString('default',{
    weekday:"long"
    
})
